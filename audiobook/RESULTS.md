# Audiobook generation — batch summary

This batch added 5 audiobooks to `/audiobook/`. Plus a usage-tally skill at `~/.claude/skills/check-usage/`.

## Books shipped

| topic | chapters | audio | level |
|---|---:|---:|---|
| Antibiotics: Mechanisms of Action | 19 | 99.6 min | undergrad → postgrad |
| Retroviruses | 19 | 97.1 min | undergrad → postgrad |
| Antibodies | 19 | 106.2 min | undergrad, analogy-heavy |
| Cancer: How a Cell Forgets the Rules | 19 | 101.5 min | undergrad, analogy-heavy |
| Plasmids: The Most Powerful Idea in Biotechnology | 19 | 108.5 min | undergrad, analogy-heavy |
| CRISPR | 19 | 99.6 min | undergrad, analogy-heavy |
| Fluorescent Proteins | 19 | 120.4 min | undergrad, analogy-heavy |
| **total** | **133** | **732.8 min (12.2 h)** | |

## Per-topic Claude usage (writer-agent token cost)

Each book was written by a long-form writer subagent. The first 5 (antibodies, cancer, plasmids, CRISPR, FP) were drafted at postgrad level first, then **rewritten** at undergrad-with-analogies level per follow-up brief. Both versions' tokens count toward the topic's total. Postgrad markdowns are retained under `_source/_postgrad_originals/`.

| topic | postgrad draft | undergrad rewrite | total writer tokens |
|---|---:|---:|---:|
| antibodies | 73,475 | 73,602 | 147,077 |
| cancer | 84,059 | 66,377 | 150,436 |
| plasmids | 90,117 | 75,646 | 165,763 |
| crispr | 73,586 | 111,852 | 185,438 |
| fluorescent-proteins | 85,722 | 119,131 | 204,853 |
| **5-book total** | **406,959** | **446,608** | **853,567** |

Average: **~171k writer tokens per book** when both versions exist; **~85k** for single-pass.

## Session-level cost (all of 2026-05-25 so far)

From `/check-usage today` after the batch:

| metric | tokens |
|---|---:|
| input | 532 |
| output | 237,748 |
| cache read | 59,131,644 |
| cache create | 1,003,693 |
| **total** | **60,373,617** |
| **list-price estimate** | **~$125** |
| messages | 154 |

Cache reads dominate (98 % of tokens, ~70 % of cost). Most of that is **orchestration overhead** — the long session keeps re-reading the same context to drive each shell command, agent dispatch, and status check. Writer-agent token cost is small in comparison (~1.4 % of the total).

**Rough cost per book of orchestration:** session-cost / 5 ≈ **~$25/book** for the orchestration alone, plus the writer-agent cost which is a small fraction.

## TTS generation cost

Pure local CPU time via Microsoft Edge TTS (free endpoint — no Claude tokens). Sequential, one book at a time to avoid rate-limit throttling.

| book | TTS wall-clock |
|---|---:|
| antibiotics (first batch) | ~78 min |
| retroviruses (first batch) | ~78 min |
| antibodies | 34.5 min |
| cancer | 29.2 min |
| plasmids | 28.3 min |
| crispr | 27.6 min |
| fluorescent-proteins (final) | 32.9 min |

The undergrad rewrites' TTS times came in faster than antibiotics/retroviruses — likely a combination of warmer connection caching and shorter average chapter length post-rewrite.

## Planning rules of thumb for next time

1. **Each long-form book** (~14-17k word lecture, 18 segments) costs **~$15-25 of Claude usage** for the writing pass (one writer agent) at list pricing. Two-pass refinement (postgrad → undergrad rewrite) doubles that.
2. **TTS is ~30-60 minutes wall-clock per book** at ~16k words.
3. **Cap writer-agent parallelism at 3** — at 5 in parallel the per-minute token budget got squeezed and agents paused mid-write, eventually resuming but adding ~5 min wait.
4. **Run TTS sequentially, not in parallel** — the Microsoft Edge TTS free endpoint throttles fast under concurrent connections.
5. **Cost-dominant factor is the long orchestration session**, not the writer agents themselves. To minimize cost on a "just generate one book" job, dispatch the writer, exit the session, then run TTS in a fresh short session.

## Cleanup notes

- Test audiobook (`test-audiobook/`) deleted before generation.
- Postgrad source markdowns moved to `_source/_postgrad_originals/` (kept for future use as the "advanced version" of each topic if we want to ship both).
- `_source/` and `_tools/` and `_postgrad_originals/` are gitignored… actually no, they aren't yet. Source markdowns get committed since they're cheap (~100KB each) and useful for re-generation.
