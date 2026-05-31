# Audiobook batch 3 — NGS techniques

10 new books on genome sequencing techniques, dispatched 2026-05-31. Undergrad level, analogy-heavy, written with WebFetch-grounded references.

## Books shipped (batch 3)

| topic | chapters | minutes | writer tokens |
|---|---:|---:|---:|
| Sanger Sequencing | 19 | 120.2 | 70,265 |
| 454 / Pyrosequencing | 19 | 125.7 | 67,855 |
| Illumina Sequencing-by-Synthesis | 19 | 128.2 | 84,469 |
| Ion Torrent (Semiconductor pH) | 19 | 116.2 | 66,131 |
| MGI / BGI DNBSEQ | 19 | 114.5 | 68,594 |
| PacBio HiFi / SMRT | 19 | 123.6 | 83,114 |
| Oxford Nanopore | 19 | 125.9 | 70,821 |
| Element Biosciences AVITI / Avidity | 19 | 108.6 | 71,690 |
| Ultima Genomics UG100 | 19 | 107.6 | 67,913 |
| Single-Cell Sequencing | 19 | 125.7 | 70,240 |
| **batch 3 total** | **190** | **1,196 (19.9 h)** | **721,092** |

## Catalog now (batches 1 + 2 + 3 + standalone milasen)

**28 books, 532 chapters, 52.9 hours of audio.**

## Production timing

| phase | wall-clock |
|---|---|
| 10 writer agents (3-in-flight pacing) | ~2h 30m |
| TTS sequential, 10 books | ~6h 06m (4:57 PM → 11:03 PM) |
| Sanger retry (chapter 5 onward after `NoAudioReceived` mid-stream) | ~1h 18m |
| **batch 3 total** | **~7h 30m** |

Average TTS time: ~36 min per book.

## What went wrong (and was fixed)

**Sanger TTS aborted at chapter 5** with `edge_tts.exceptions.NoAudioReceived` — a transient Microsoft Edge TTS endpoint failure. The script exited mid-book with only 4 sync JSONs written despite 5 mp3s on disk. Recovery: re-ran `generate.py sanger.md --skip-existing` which honored the 4 valid chapters and resumed from chapter 5 cleanly. Total recovery cost: ~78 min extra wall-clock, no Claude tokens.

**Lesson**: the generator should wrap each chapter in `try/except` and either skip-and-continue or retry on `NoAudioReceived` instead of bubbling the exception up and aborting the whole book. Easy to add in a follow-up patch.

## Per-book writer cost vs runtime

| book | tokens | min (writer) |
|---|---:|---:|
| Illumina | 84,469 | 11.5 |
| PacBio | 83,114 | 11.1 |
| Element Aviti | 71,690 | 10.8 |
| Oxford Nanopore | 70,821 | 11.2 |
| Sanger | 70,265 | 14.7 |
| Single-cell | 70,240 | 11.0 |
| MGI DNBSEQ | 68,594 | 10.4 |
| Ultima | 67,913 | 10.4 |
| 454 / Pyrosequencing | 67,855 | 10.7 |
| Ion Torrent | 66,131 | 14.2 |

Tight clustering around ~70k tokens per book — the WebFetch-grounded brief gave each writer enough source material to land in a similar range.

## Updated planning rules of thumb

1. **Each batch-3 book** cost ~70k writer tokens, ~$5-9 at Opus list pricing when output-dominated.
2. **TTS averaged 36 min per book** for 16-19k word scripts on Microsoft Edge TTS (sequential, free endpoint).
3. **Wave-of-3 writer parallelism** stayed clean throughout — no rate-limit pauses.
4. **Edge TTS will occasionally drop a chapter** (~1 in ~190 chapter calls observed this batch). `--skip-existing` recovers cleanly with manual re-run; an in-script retry/skip would automate this fix.
5. **Total wall-clock for 10 books with the Sanger recovery: ~7.5 hours.** Could plausibly hit 6h flat on a clean run.

## Cleanup

- Source markdowns in `_source/` (kept for re-generation).
- Slugs derived from `## TITLE` markdown headings → some books have long URL slugs ("sanger-sequencing-reading-the-genetic-alphabet"); UI titles are correct because the watcher reconciles `index.json` from each `manifest.json`'s `topic` field. Long URLs are cosmetic only.
