# Audiobook batch 2 — summary

10 new books added on 2026-05-30/31, all at undergrad level with heavy use of analogies, written from Addgene-grounded source material.

## Books shipped (batch 2)

| topic | chapters | minutes | writer tokens |
|---|---:|---:|---:|
| Cre-Lox: The Quietly Powerful Scissors of Modern Genetics | 19 | 108.7 | 70,784 |
| TALENs: The First Practical Programmable Scissors | 19 | 116.5 | 89,709 |
| Zinc Finger Nucleases: The First Programmable Scissors | 19 | 128.1 | 72,748 |
| Luciferase | 19 | 91.6 | 68,157 |
| Optogenetics | 19 | 101.2 | 62,058 |
| Chemogenetics | 19 | 100.8 | 95,273 |
| AAV: The Shipping Container of Modern Medicine | 19 | 119.5 | 83,031 |
| Adenovirus Vectors: The Breakthrough, the Tragedy, the Comeback | 19 | 127.9 | 83,417 |
| Gamma Retrovirus Vectors | 19 | 116.0 | 82,317 |
| Lentivirus Vectors: How HIV Became the Workhorse of Gene Therapy | 19 | 104.7 | 63,454 |
| **batch 2 total** | **190** | **1,115 (18.6 h)** | **770,948** |

## Catalog now (batches 1 + 2 combined)

**17 books, 323 chapters, 30.8 hours of audio.**

## Session-level cost (batch 2)

Snapshot taken right after the batch finished:

| metric | tokens |
|---|---:|
| input | 10,571 |
| output | 1,649,158 |
| cache read | 1,181,961,932 |
| cache create | 21,986,580 |
| **total** | **1,205,608,241** |
| **list-price estimate** | **~$2,308** |
| messages | 2,466 |

Wait — that's higher than expected. Most of that is the long persistent orchestration session, not the batch itself. The week window includes ~5 days of unrelated work. Cleaner per-book number:

- Writer-agent tokens reported by the 10 sub-agents: **770,948 tokens** combined
- Average per book: **~77k writer tokens** (~$10 at list pricing if all output, much less if cache-heavy)

## Production timing

| phase | wall-clock |
|---|---|
| 10 writer agents (3 in flight at a time, in 4 waves) | ~75 min |
| TTS sequential, 10 books | ~5h 26m (00:00 → 04:54) |
| **batch 2 total** | **~6h 41m** |

Average TTS time: ~32 min per book.

## Per-book writer cost vs runtime (sorted by cost)

| book | tokens | minutes | analogy notes |
|---|---:|---:|---|
| chemogenetics | 95,273 | 9.7 | DREADD as "doorbell that only your custom button rings" |
| TALENs | 89,709 | 10.9 | TALE = GPS, FokI = blade, repeats as Lego bricks |
| adenovirus | 83,417 | 11.5 | Delivery truck — bigger payload, louder to immune system |
| AAV | 83,031 | 11.0 | Shipping container; serotypes as different paint jobs |
| gamma-retrovirus | 82,317 | 10.5 | Lentivirus's older sibling; SCID-X1 as the painful adolescence |
| zinc-fingers | 72,748 | 11.9 | Tiny hand with three fingers gripping three letters |
| cre-lox | 70,784 | 10.3 | Bookmarks-and-scissors; CreER as scissors taped to a balloon |
| luciferase | 68,157 | 9.0 | FP = flashlight; luciferase = glow stick with built-in battery |
| lentivirus | 63,454 | 9.5 | HIV with the dangerous parts removed |
| optogenetics | 62,058 | 10.3 | Window shade on an ion channel; fiber as fiber-optic cable |

## Planning rules of thumb (updated)

From this batch:
1. **Each long-form book (~14-17k words, 18 segments)** costs **~70-95k writer tokens** when given Addgene-grounded source brief. At Opus list pricing that's roughly **$5-10 per book** if output-dominated, much less if cache-heavy.
2. **TTS averaged 32 min per book** for 14-17k words on Microsoft Edge TTS (free endpoint, sequential).
3. **Wave-of-3 writer parallelism worked cleanly** — no rate-limit pauses like the first batch's wave-of-5.
4. **Total wall-clock for 10 books: ~6h 40m** with the wave-of-3 pattern.
5. **WebFetch-grounded prompts produced more concrete content** than memory-only prompts; agents pulled current dates and approved-product names from Addgene/Wikipedia rather than relying on training knowledge alone.

## Cleanup / structure notes

- New batch-2 markdowns are in `_source/` (kept for re-generation).
- No postgrad-vs-undergrad split this time — all 10 written undergrad-first, no rewrites needed.
- Cre-Lox, AAV, etc. got long slugs derived from elaborate markdown titles. The watcher reconciles titles into the index automatically; URLs are long but UI-correct.
- Lentivirus and Gamma-retrovirus books are *vector deep-dives*, complementary to the existing Retroviruses book (which covers the virology). The retroviruses book and these two together form a complete viral-vector trilogy.
