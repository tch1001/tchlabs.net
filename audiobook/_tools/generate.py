#!/usr/bin/env python3
"""Convert a markdown file into an audiobook directory.

Usage:
  ./generate.py path/to/book.md [--voice en-US-AndrewMultilingualNeural]
                                [--slug my-book]
                                [--rate +0%] [--pitch +0Hz]

Splits the markdown by `## ` headers into chapters (first `# ` line is the
topic title), runs each chapter through Microsoft Edge TTS to produce an
MP3 plus a JSON sync sidecar that pairs every display line with its start
time. Output goes into audiobook/<slug>/.

The sync sidecar is the file the player reads to drive the Spotify-style
scrolling transcript.
"""

from __future__ import annotations

import argparse
import asyncio
import json
import os
import re
import sys
from dataclasses import dataclass, field, asdict

import edge_tts


REPO_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
AUDIOBOOK_DIR = os.path.join(REPO_ROOT, "audiobook")


@dataclass
class Line:
    """A single displayable line of transcript (≈ one sentence or paragraph)."""
    text: str
    t: float = 0.0  # start time in seconds, filled in after TTS


@dataclass
class Chapter:
    n: int
    title: str
    slug: str
    lines: list[Line] = field(default_factory=list)
    duration: float = 0.0


def slugify(s: str) -> str:
    s = s.lower().strip()
    s = re.sub(r"[^\w\s-]", "", s)
    s = re.sub(r"[\s_-]+", "-", s)
    return s.strip("-") or "untitled"


# --- markdown handling ----------------------------------------------------

CODE_FENCE = re.compile(r"^(```|~~~)")
HEADER = re.compile(r"^(#{1,6})\s+(.*)$")
INLINE_CODE = re.compile(r"`([^`]+)`")
BOLD_ITALIC = re.compile(r"(\*\*\*|___)([^*_]+)\1")
BOLD = re.compile(r"(\*\*|__)([^*_]+)\1")
ITALIC = re.compile(r"(?<!\*)\*(?!\*)([^*\n]+)\*(?!\*)|(?<!_)_(?!_)([^_\n]+)_(?!_)")
LINK = re.compile(r"\[([^\]]+)\]\([^)]+\)")
IMAGE = re.compile(r"!\[[^\]]*\]\([^)]+\)")
HTML_TAG = re.compile(r"<[^>]+>")
LIST_MARKER = re.compile(r"^\s*(?:[-*+]|\d+\.)\s+")
BLOCKQUOTE = re.compile(r"^>\s?")
HRULE = re.compile(r"^\s*(?:-{3,}|\*{3,}|_{3,})\s*$")
# Backslash-escaped brackets used as stage directions, e.g. "\[Pause.\]".
ESCAPED_BRACKETS = re.compile(r"\\\[([^\]]*)\\\]")
# A line consisting solely of one bracketed stage direction (whitespace-padded).
STANDALONE_DIRECTIVE = re.compile(r"^\s*\\?\[[^\]]+\\?\]\s*$")


def clean_inline(text: str) -> str:
    text = IMAGE.sub("", text)
    text = LINK.sub(r"\1", text)
    text = BOLD_ITALIC.sub(r"\2", text)
    text = BOLD.sub(r"\2", text)
    text = ITALIC.sub(lambda m: m.group(1) or m.group(2), text)
    text = INLINE_CODE.sub(r"\1", text)
    text = HTML_TAG.sub("", text)
    # Inline escaped brackets become just their content: "\[brackets\]" -> "brackets".
    text = ESCAPED_BRACKETS.sub(r"\1", text)
    return text.strip()


def split_into_sentences(paragraph: str) -> list[str]:
    """Split a paragraph into rough sentences for line-by-line sync."""
    s = re.sub(r"\s+", " ", paragraph).strip()
    if not s:
        return []
    # Split after . ! ? followed by space + capital letter, keep the punctuation.
    out, buf = [], ""
    i = 0
    while i < len(s):
        buf += s[i]
        if s[i] in ".!?":
            # Look ahead: end-of-string or whitespace-then-capital
            j = i + 1
            while j < len(s) and s[j] == " ":
                j += 1
            if j >= len(s) or s[j].isupper() or s[j] in '"\'(':
                out.append(buf.strip())
                buf = ""
                i = j
                continue
        i += 1
    if buf.strip():
        out.append(buf.strip())
    return out


def parse_markdown(md: str) -> tuple[str, list[Chapter]]:
    """Return (topic_title, chapters)."""
    topic = "Untitled"
    chapters: list[Chapter] = []
    current: Chapter | None = None
    in_code = False
    paragraph_buf: list[str] = []

    def flush_paragraph():
        nonlocal paragraph_buf, current
        if not paragraph_buf or current is None:
            paragraph_buf = []
            return
        text = " ".join(paragraph_buf).strip()
        paragraph_buf = []
        if not text:
            return
        for sent in split_into_sentences(text):
            current.lines.append(Line(text=sent))

    for raw_line in md.splitlines():
        line = raw_line.rstrip()

        if CODE_FENCE.match(line.strip()):
            in_code = not in_code
            flush_paragraph()
            continue
        if in_code:
            continue  # skip code blocks entirely for TTS

        if not line.strip():
            flush_paragraph()
            continue

        # Skip horizontal rules and standalone stage directions outright.
        if HRULE.match(line) or STANDALONE_DIRECTIVE.match(line):
            flush_paragraph()
            continue

        m = HEADER.match(line.strip())
        if m:
            flush_paragraph()
            level = len(m.group(1))
            text = clean_inline(m.group(2))
            if level == 1 and not chapters and current is None:
                topic = text
                continue
            if level <= 2:
                # New chapter.
                n = len(chapters) + 1
                slug = f"{n:02d}-{slugify(text)}"
                current = Chapter(n=n, title=text, slug=slug)
                chapters.append(current)
                # Add the title as a spoken line so the listener hears it.
                current.lines.append(Line(text=text))
                continue
            else:
                # Treat deeper headings as a bold paragraph in current chapter.
                if current is not None:
                    current.lines.append(Line(text=text))
                continue

        # Body line. Strip list markers + blockquote markers for narration.
        stripped = LIST_MARKER.sub("", line)
        stripped = BLOCKQUOTE.sub("", stripped)
        cleaned = clean_inline(stripped)
        if cleaned:
            paragraph_buf.append(cleaned)

    flush_paragraph()
    return topic, chapters


# --- TTS ------------------------------------------------------------------

async def synthesize_chapter(chapter: Chapter, voice: str, rate: str, pitch: str,
                             out_mp3: str) -> None:
    """Generate MP3. Replaces chapter.lines with sentence-boundary-aligned lines.

    Edge TTS emits one SentenceBoundary event per spoken sentence, with the
    audio offset of that sentence. We use those directly as transcript lines —
    that guarantees the displayed text exactly matches what is being spoken.
    """
    spoken = "\n\n".join(line.text for line in chapter.lines).strip()
    if not spoken:
        return

    communicate = edge_tts.Communicate(spoken, voice, rate=rate, pitch=pitch)
    sentence_events: list[tuple[float, float, str]] = []  # (t_start, t_end, text)
    audio_bytes = 0

    with open(out_mp3, "wb") as f:
        async for chunk in communicate.stream():
            t = chunk.get("type")
            if t == "audio":
                f.write(chunk["data"])
                audio_bytes += len(chunk["data"])
            elif t == "SentenceBoundary":
                start_s = chunk["offset"] / 1e7
                end_s = start_s + chunk["duration"] / 1e7
                text = chunk.get("text", "").strip()
                if text:
                    sentence_events.append((start_s, end_s, text))

    if sentence_events:
        chapter.lines = [Line(text=s[2], t=round(s[0], 2)) for s in sentence_events]
        chapter.duration = sentence_events[-1][1]
    else:
        # Fallback if no sentence boundaries came back — keep paragraph lines
        # without sync, and approximate duration from mp3 byte count.
        chapter.duration = audio_bytes / 4000.0


def write_sync(chapter: Chapter, out_json: str) -> None:
    payload = {
        "n": chapter.n,
        "title": chapter.title,
        "duration": round(chapter.duration, 2),
        "lines": [{"t": round(l.t, 2), "text": l.text} for l in chapter.lines],
    }
    with open(out_json, "w") as f:
        json.dump(payload, f, ensure_ascii=False, indent=1)


def write_manifest(book_dir: str, topic: str, slug: str, voice: str,
                   chapters: list[Chapter]) -> None:
    payload = {
        "topic": topic,
        "slug": slug,
        "voice": voice,
        "chapters": [
            {"n": c.n, "title": c.title, "slug": c.slug,
             "duration": round(c.duration, 2)}
            for c in chapters
        ],
    }
    with open(os.path.join(book_dir, "manifest.json"), "w") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)


def update_topic_index(book_slug: str, topic_title: str) -> None:
    """Maintain audiobook/index.json listing all topics."""
    index_path = os.path.join(AUDIOBOOK_DIR, "index.json")
    if os.path.exists(index_path):
        with open(index_path) as f:
            topics = json.load(f)
    else:
        topics = []
    existing = next((t for t in topics if t["slug"] == book_slug), None)
    if existing:
        existing["title"] = topic_title
    else:
        topics.append({"slug": book_slug, "title": topic_title})
    with open(index_path, "w") as f:
        json.dump(topics, f, ensure_ascii=False, indent=2)


async def main_async(args: argparse.Namespace) -> None:
    with open(args.markdown) as f:
        md = f.read()

    topic, chapters = parse_markdown(md)
    if not chapters:
        print("error: no `## ` chapter headings found in markdown", file=sys.stderr)
        sys.exit(2)

    slug = args.slug or slugify(topic)
    book_dir = os.path.join(AUDIOBOOK_DIR, slug)
    audio_dir = os.path.join(book_dir, "audio")
    sync_dir = os.path.join(book_dir, "sync")
    os.makedirs(audio_dir, exist_ok=True)
    os.makedirs(sync_dir, exist_ok=True)

    print(f"topic: {topic}")
    print(f"slug:  {slug}")
    print(f"voice: {args.voice}")
    print(f"chapters: {len(chapters)}")
    for ch in chapters:
        print(f"  {ch.n:02d}. {ch.title}  ({len(ch.lines)} lines)")
    print()

    for ch in chapters:
        mp3_path = os.path.join(audio_dir, f"{ch.slug}.mp3")
        json_path = os.path.join(sync_dir, f"{ch.slug}.json")
        if args.skip_existing and os.path.exists(mp3_path) and os.path.exists(json_path):
            print(f"skip {ch.slug} (exists)")
            # still load to update manifest duration
            with open(json_path) as f:
                ch.duration = json.load(f).get("duration", 0.0)
            continue
        print(f"synth {ch.slug} ...", end=" ", flush=True)
        await synthesize_chapter(ch, args.voice, args.rate, args.pitch, mp3_path)
        write_sync(ch, json_path)
        print(f"{ch.duration:.1f}s")

    write_manifest(book_dir, topic, slug, args.voice, chapters)
    update_topic_index(slug, topic)
    print(f"\nwrote {book_dir}")


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser()
    p.add_argument("markdown", help="Path to markdown file")
    p.add_argument("--voice", default="en-US-AndrewMultilingualNeural")
    p.add_argument("--rate", default="+0%", help="Speech rate, e.g. +10%% or -5%%")
    p.add_argument("--pitch", default="+0Hz", help="Pitch, e.g. +5Hz or -10Hz")
    p.add_argument("--slug", help="Override book slug")
    p.add_argument("--skip-existing", action="store_true",
                   help="Don't regenerate chapters whose files already exist")
    return p.parse_args()


def main():
    asyncio.run(main_async(parse_args()))


if __name__ == "__main__":
    main()
