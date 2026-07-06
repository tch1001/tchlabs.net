#!/usr/bin/env python3
"""Compile parts/*.json chapter files → content.json for build.py."""
import json
from pathlib import Path

ROOT = Path(__file__).parent
PARTS = ROOT / "parts"
OUT = ROOT / "content.json"

TITLE = "Play Optimal Poker 2 — Range Construction — Companion"
VOICE = "en-US-AndrewMultilingualNeural"

def main():
    chapters = []
    for p in sorted(PARTS.glob("*.json")):
        chapters.append(json.loads(p.read_text()))
    doc = {"title": TITLE, "voice": VOICE, "chapters": chapters}
    OUT.write_text(json.dumps(doc, ensure_ascii=False, indent=1))
    n_sec = sum(len(c["sections"]) for c in chapters)
    n_lines = sum(len(s["lines"]) for c in chapters for s in c["sections"])
    print(f"content.json: {len(chapters)} chapters, {n_sec} sections, {n_lines} narrated lines")

if __name__ == "__main__":
    main()
