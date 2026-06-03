# Audiobook batch 4 — DFS through genetic engineering

Massive expansion of the catalog. 66 new transcripts written over 2026-06-02 / 2026-06-03, all generated as audio in sub-batches 4a/4b/4c. Catalog total now **94 books, ~175 hours of audio**.

## Books shipped (batch 4)

**Branch A — molecular biology foundations**
- PCR, DNA polymerases, oligo synthesis, qPCR/digital PCR, gene synthesis, codon optimization, recombineering

**Branch B — gene editing depth**
- Base editing, prime editing, transposons (SB/PB/Tol2), Cas13/RNA editing, mitochondrial editing (DdCBE), site-specific integrases (Bxb1/phiC31), expanded genetic code

**Branch C — RNA therapeutics**
- RNAi/siRNA, mRNA therapeutics

**Branch D — cellular engineering**
- iPSC reprogramming, organoids, mouse models, synthetic embryos/blastoids, tissue engineering/bioprinting, HSC transplant, xenotransplantation

**Branch E — protein engineering**
- Directed evolution, AlphaFold, de novo protein design, phage display, antibody glycoengineering

**Branch F — synthetic biology**
- Genetic circuits, minimal genomes (JCVI-syn3.0), gene drives, cell-free protein synthesis (PURE/TXTL), metabolic engineering, DNA data storage

**Branch G — functional genomics**
- Bulk RNA-seq, ChIP-seq, ATAC-seq, Hi-C, ribosome profiling, bisulfite/methylome, mass-spec proteomics, m6A/epitranscriptomics, long noncoding RNAs, chromatin remodeling, microbiome/metagenomics, spatial transcriptomics, liquid biopsy/cfDNA

**Branch H — therapeutics + clinical**
- CAR-T cell therapy, BiTEs, antibody-drug conjugates, PROTACs, checkpoint inhibitors, neoantigen vaccines, mutational signatures, gene therapy regulation, pharmacogenomics, GWAS/PRS, bacteriophages, antibiotic resistance

**Branch I — history + tools**
- Human Genome Project, FACS/flow cytometry, transfection/electroporation, Tet-on/off, cryo-EM, sequence alignment/BLAST, model organisms (worm/fly/fish)

## Numbers

| metric | value |
|---|---:|
| Transcripts written | **66** |
| Words written | **~1,072,000** |
| Writer-agent tokens | **~4.32M** |
| Audio chapters generated | 18 × 66 = **1,188** |
| Audio duration added (batch 4) | ~118 hours |

## Catalog now

**94 books, ~1,690 chapters, 175.4 hours of audio.**

## Production timing

| phase | wall-clock |
|---|---|
| Writer agents (3 in flight, rate-limit interrupted twice) | ~12-14 hours total writer time over 2 days |
| Batch 4a TTS (26 books) | ~16h 20m |
| Batch 4b TTS (22 books) | ~11h 21m |
| Batch 4c TTS (18 books) | ~11h 09m |
| **batch 4 wall-clock total (writers + TTS)** | **~40+ hours** |

## Lessons (updated rules of thumb)

1. **Each transcript ≈ 65-80k writer tokens, ~14-19k words**, ~10 min agent time.
2. **TTS averages ~35 min per book** for 14-20k words on Microsoft Edge TTS (sequential, free endpoint).
3. **Cap writer parallelism at 3** — at 4+ the per-minute token budget squeezes and agents pause.
4. **Edge TTS will occasionally drop a chapter** (~1 in ~300 chapters this batch). `--skip-existing` recovers cleanly.
5. **Writer rate limit hit twice** during this batch (12:40pm and ~3am Asia/Singapore). Workflow handled it by pausing writers, letting TTS run, resuming after reset.
6. **WebFetch-grounded briefs produced more concrete content** than memory-only ones — every batch 4 agent had a brief with key facts, dates, company names baked in.
7. **Total cost** for 66 books: ~4.3M writer tokens. At Opus list price (~$15 in/$75 out/$1.50 cache-read), this is roughly $200-400 USD-equivalent for writers, plus considerably more for orchestration (mostly cache reads). On a Max subscription, this fits inside the weekly quota window with care.

## File inventory note

The 66 batch-4 source markdowns live in `audiobook/_source/`. All have been TTS'd. Audio directory slugs are derived from each book's `# Title` heading; URLs are long but UI titles render cleanly from each `manifest.json`'s `topic` field.
