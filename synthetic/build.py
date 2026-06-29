#!/usr/bin/env python3
"""Build the poker podcast: original explainer narration → edge-tts mp3 +
line-synced transcript + nested manifest, mirroring the audiobook format.

content.json holds the (original, in-our-own-words) narration:
  { "title", "voice", "chapters":[ {"n","title",
      "sections":[ {"n","title","lines":["sentence", ...]} ]} ] }

Each section → audio/<slug>.mp3, sync/<slug>.json {n,title,duration,lines:[{t,text}]}
and a manifest.json (chapters → sections w/ durations) the site reads.

Usage:  python3 build.py [--force] [--only <slug-substr>]
Skips sections whose mp3 already exists (unless --force), so it's incremental.
"""
import asyncio, json, re, subprocess, sys, unicodedata
from pathlib import Path
import edge_tts

ROOT = Path(__file__).parent
AUDIO, SYNC = ROOT / "audio", ROOT / "sync"
CONTENT = ROOT / "content.json"

def slugify(s: str) -> str:
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    s = re.sub(r"[^a-zA-Z0-9]+", "-", s).strip("-").lower()
    return re.sub(r"-+", "-", s)

def norm(s: str) -> str:
    return re.sub(r"[^a-z0-9]", "", s.lower())

def mp3_duration(path: Path) -> float:
    out = subprocess.run(
        ["ffprobe", "-v", "quiet", "-show_entries", "format=duration",
         "-of", "default=nw=1:nk=1", str(path)],
        capture_output=True, text=True).stdout.strip()
    try:
        return round(float(out), 2)
    except ValueError:
        return 0.0

async def synth(text: str, voice: str):
    """Return (audio_bytes, [(offset_seconds, word), ...])."""
    audio = bytearray()
    boundaries = []
    comm = edge_tts.Communicate(text, voice)
    async for ch in comm.stream():
        if ch["type"] == "audio":
            audio.extend(ch["data"])
        elif ch["type"] in ("SentenceBoundary", "WordBoundary"):
            # multilingual voices emit SentenceBoundary; others WordBoundary.
            boundaries.append((ch["offset"] / 1e7, ch["text"]))
    return bytes(audio), boundaries

def line_times(lines, boundaries):
    """Assign each line a start time by greedily matching its (normalized) text
    against the running stream of TTS word-boundary tokens."""
    times, ptr = [], 0
    for line in lines:
        target = norm(line)
        start = boundaries[ptr][0] if ptr < len(boundaries) else (
            boundaries[-1][0] if boundaries else 0.0)
        acc = ""
        while ptr < len(boundaries) and len(acc) < len(target):
            acc += norm(boundaries[ptr][1])
            ptr += 1
        times.append(round(start, 2))
    return times

async def build_section(ch, sec, voice, force):
    slug = f"{ch['n']:02d}-{sec['n']:02d}-{slugify(sec['title'])}"
    mp3 = AUDIO / f"{slug}.mp3"
    sjson = SYNC / f"{slug}.json"
    lines = [l.strip() for l in sec["lines"] if l.strip()]
    if mp3.exists() and sjson.exists() and not force:
        return slug, mp3_duration(mp3)
    text = "\n".join(lines)
    print(f"  · {slug} … ", end="", flush=True)
    audio, boundaries = await synth(text, voice)
    mp3.write_bytes(audio)
    dur = mp3_duration(mp3)
    ts = line_times(lines, boundaries)
    synced = [{"t": t, "text": l} for t, l in zip(ts, lines)]
    sjson.write_text(json.dumps(
        {"n": sec["n"], "title": sec["title"], "duration": dur, "lines": synced},
        ensure_ascii=False, indent=1))
    print(f"{dur:.0f}s")
    return slug, dur

async def main():
    force = "--force" in sys.argv
    only = None
    if "--only" in sys.argv:
        only = sys.argv[sys.argv.index("--only") + 1]
    data = json.loads(CONTENT.read_text())
    voice = data.get("voice", "en-US-AndrewMultilingualNeural")
    out_chapters = []
    for ch in data["chapters"]:
        secs = []
        print(f"Chapter {ch['n']}: {ch['title']}")
        for sec in ch["sections"]:
            slug = f"{ch['n']:02d}-{sec['n']:02d}-{slugify(sec['title'])}"
            if only and only not in slug:
                if (SYNC / f"{slug}.json").exists():
                    secs.append({"n": sec["n"], "title": sec["title"], "slug": slug,
                                 "duration": mp3_duration(AUDIO / f"{slug}.mp3")})
                continue
            s, dur = await build_section(ch, sec, voice, force)
            secs.append({"n": sec["n"], "title": sec["title"], "slug": s, "duration": dur})
        if secs:
            out_chapters.append({"n": ch["n"], "title": ch["title"], "sections": secs})
    manifest = {"title": data["title"], "voice": voice, "chapters": out_chapters}
    (ROOT / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=1))
    total = sum(s["duration"] for c in out_chapters for s in c["sections"])
    print(f"\nmanifest.json written — {sum(len(c['sections']) for c in out_chapters)} "
          f"sections, {total/60:.1f} min total")

if __name__ == "__main__":
    asyncio.run(main())
