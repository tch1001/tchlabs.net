# Ribosome Profiling — Watching Translation, One Codon at a Time

**A 2-hour undergraduate genomics lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The gap RNA-seq leaves — why measuring mRNA is not measuring protein

Good morning, everyone. Today and for the next two hours, we're going to talk about ribosome profiling — usually called Ribo-seq — which is, in my opinion, one of the most clever methods in all of modern genomics. It's a technique that lets you look directly at translation, the act of a ribosome reading a messenger RNA and synthesizing a protein, with a resolution that nothing else comes close to. By the end of this lecture you should be able to look at a ribosome profiling track on a genome browser and understand exactly what those little spikes mean, where they came from, and why they are some of the most informative data in molecular biology.

Some of you have already sat through the bulk RNA-seq lecture in this series — the one that walked through the smoothie-sequencing analogy, the Mortazavi 2008 paper, the whole story of how we count mRNAs in a tissue. That lecture spent two hours teaching you how to measure the abundance of every messenger RNA in a cell. And that's a beautiful technique. It's the workhorse. It tells you, for every gene in the genome, how many mRNA molecules are floating around at the moment you froze the sample.

But it doesn't tell you whether any of those mRNAs are actually being read.

\[Pause.\]

Here's the central thing I want you to internalize today, and I want you to carry it through every segment of this lecture. **RNA-seq tells you which messenger RNAs are present in a cell. It does not tell you which ones are being translated into protein.** Those are different questions, and the gap between them is enormous.

Think about it for a second. A cell contains an mRNA. The mRNA is sitting in the cytoplasm. RNA-seq counts it. One mRNA molecule, one read. But what is that mRNA actually doing? Is it being chewed on by a ribosome right now? Is it sitting idle, sequestered in a stress granule, waiting for some signal? Is it in transit somewhere? Has it been decorated with a repressor protein that prevents any ribosome from ever loading? RNA-seq cannot distinguish any of these states. To RNA-seq, every mRNA is the same — present, accounted for, one count.

The biology, of course, cares enormously about the difference. **A cell can have lots of an mRNA and make almost no protein from it. And a cell can have very little of an mRNA and make lots of protein from it.** Translation is regulated independently from transcription. There are entire classes of genes — particularly in stressed cells, in early development, in differentiated tissues like neurons — where the level of mRNA tells you almost nothing about the level of protein. If you've ever tried to correlate an RNA-seq dataset with a mass spectrometry dataset of the same sample, you've probably seen this: the correlation between mRNA abundance and protein abundance, across all the genes in a cell, is somewhere between 0.4 and 0.6. Disappointing. About half the variance in protein levels is _not_ explained by mRNA levels. The other half lives at translation.

\[Pause.\]

So here's the gap. RNA-seq sees the recipe book — every recipe present in the kitchen. It does not see whether any of the recipes are being cooked, or how fast, or whether the chef stopped halfway through. That second view — the chef-and-the-stove view — is what ribosome profiling gives you.

The trick that makes Ribo-seq possible is one of those beautiful experimental ideas that, once you hear it, you wonder why nobody did it sooner. **A ribosome, when it's sitting on an mRNA in the act of translating, physically covers and protects about thirty nucleotides of that mRNA.** It's a big molecule. It wraps around the messenger. If you come in with a nuclease — an enzyme that chews up RNA — the nuclease will degrade every part of the mRNA that's exposed, but it can't get at the bit underneath the ribosome. That protected fragment, about thirty nucleotides long, is called a **ribosome footprint**. It is, quite literally, the bite-mark — the small chunk of mRNA that the ribosome was sitting on, surviving the nuclease digest because the ribosome's body shielded it.

If you isolate those footprints, purify them, and sequence them, then for every read you generate, you know two things. You know which mRNA the ribosome was sitting on — because the footprint sequence tells you that. And you know _where_ on the mRNA the ribosome was sitting — because the footprint comes from one specific 30-nucleotide window of that mRNA. Aggregate millions of these reads across a transcriptome, and you have a genome-wide, single-codon-resolution map of every ribosome in the cell at the moment you froze it.

If you walk out of here in two hours and you can do three things — one, sketch the Ribo-seq workflow on a whiteboard from cell lysis through library prep through sequencing, and explain why each step exists; two, explain the difference between RNA-seq and Ribo-seq in terms of what biological question each one answers, and what translation efficiency is; three, look at a Ribo-seq paper and read its methods section with real understanding of what cycloheximide is, why 3-nucleotide periodicity matters, and what a uORF is — then we've succeeded. Everything else hangs off those three.

\[Pause.\]

One more orienting sentence before we go deeper. Ribo-seq is, to a first approximation, **RNA-seq for what's actually being translated**. That phrase is going to come up again and again, and I want you to hold it. Where RNA-seq counts every messenger in the cell, Ribo-seq counts every ribosome on every messenger. Where RNA-seq tells you the transcript is there, Ribo-seq tells you the protein is being made. Same instrument at the end — short reads on an Illumina flow cell. Same downstream alignment and counting. Very different upstream biochemistry, very different biological signal.

Let's go to where this method came from. Ingolia and Weissman, 2009.

---

## SEGMENT 2 — Ingolia and Weissman, 2009 — the founding paper

Ribosome profiling, like RNA-seq, was an idea that had been kicked around in pieces for years before it crystallized into a real technique. People had known since the 1960s that ribosomes protect a fragment of mRNA from nuclease digestion. The basic biochemistry — putting ribosomes on a sucrose gradient, treating with RNase, recovering protected fragments — was old. What did not exist, before about 2008, was the technology to sequence millions of those small fragments cheaply enough to get meaningful coverage across an entire transcriptome. The piece that was missing was, again, Illumina. Once you had a machine that could read tens of millions of short reads per run, the question of how to apply it to translation became live.

The answer came in 2009, in a paper that I consider one of the most beautiful methods papers in modern biology. The first author was **Nicholas Ingolia**, then a postdoc at the University of California, San Francisco. The senior author was **Jonathan Weissman**, a biochemist at UCSF with a long-running interest in protein folding and translation. The paper appeared in _Science_ in April 2009 with the title "Genome-wide analysis in vivo of translation with nucleotide resolution using ribosome profiling." Read that title carefully. Three claims, all of which were new. Genome-wide. In vivo. Nucleotide resolution. Each of those was a big deal in 2009, and the combination was unprecedented.

What did Ingolia and Weissman actually do? They took yeast cells, growing happily in culture, and they did the following sequence of operations. First, they flash-froze the cells while adding a drug called cycloheximide, which arrests every ribosome in place wherever it happens to be on its mRNA. Second, they lysed the cells, releasing all the polysomes — the mRNAs with their bound ribosomes — into solution. Third, they treated the lysate with RNase I, a nuclease that chews up any RNA not protected by a ribosome. Fourth, they spun the digested lysate on a sucrose gradient to isolate the fraction containing 80S monosomes — single ribosomes with their protected footprint still bound. Fifth, they extracted the small RNA from that fraction, which was enriched for the ~30-nucleotide ribosome footprints. Sixth, they built a sequencing library from those tiny fragments — which is harder than it sounds, because standard library preps assume your fragments are much bigger. Seventh, they sequenced on an Illumina Genome Analyzer.

\[Pause.\]

When the data came back, the result was striking. Reads piled up along the coding sequences of every translated gene in the yeast genome. They started right at the start codon. They stopped right at the stop codon. They had a clean preference for in-frame positions — meaning the position of each footprint along the mRNA was biased to the first nucleotide of a codon, not the second or third. The single-codon resolution that the title promised was actually visible in the data. You could look at a single gene's translation profile and see, codon by codon, where ribosomes were preferentially located. Where the ribosomes were dense, translation was slow there — the ribosomes were piling up, waiting. Where the ribosomes were sparse, translation was fast. The data was, in a deep sense, a movie of translation, frozen at the moment the cells were killed.

Beyond the technical demonstration, the paper made some immediate biological observations. Ribosomes were found on regions of mRNA that the yeast genome catalog said were not coding — specifically, in the 5' UTRs of many genes, at small upstream open reading frames called uORFs, which we'll spend a whole segment on later. Ribosomes were also found on mRNAs that nobody had previously thought were translated, including some that were classified as long non-coding RNAs. The paper, in passing, suggested that the existing genome annotations of which parts of the transcriptome are translated were incomplete — there was more translation going on, in more places, than the annotation said. That observation has been borne out enormously in the fifteen years since, and we'll come back to it in Segment 7 when we talk about small ORFs and novel microproteins.

\[Pause.\]

I want to spend a minute on what made this paper a method, and not just an observation. Ingolia and Weissman did three things that turned out to be the foundation of every Ribo-seq protocol that followed.

**First**, they used cycloheximide to stall the ribosomes before lysis. Cycloheximide is an inhibitor of eukaryotic translation elongation — it binds to the ribosomal E site and prevents the ribosome from translocating to the next codon. Add cycloheximide to live cells, and within seconds, every ribosome stops where it was. This is critical, because if you didn't stall the ribosomes, they would keep moving during lysis — running off the end of their mRNAs, redistributing, smearing out the signal. With cycloheximide, the snapshot is sharp. We'll talk about the artifacts cycloheximide also introduces, in Segment 10.

**Second**, they isolated the footprints by sucrose gradient. The reason this matters: after RNase digestion, your lysate contains lots of things — protein-RNA complexes, free RNA fragments, partially digested polysomes. Only the intact 80S monosomes — single ribosomes with their protected footprint — give you the clean signal you want. The sucrose gradient separates particles by size and density, and the 80S peak is sharp and easy to identify. Take the RNA from that fraction, and you've enriched for genuine ribosome footprints over background.

**Third**, they built a library prep specifically for very small RNA fragments. Standard Illumina library prep assumes your fragments are at least a few hundred base pairs. A 30-nucleotide footprint is way too small for that. Ingolia and Weissman adapted a small-RNA cloning protocol — the kind used for microRNA sequencing — to ligate adapters onto the tiny fragments, reverse transcribe, and amplify. Subsequent versions of the protocol have refined this — the modern protocols use linkers with random nucleotides to reduce ligation bias, and use UMIs to count molecules accurately — but the general approach is the same as Ingolia's original.

The paper landed in 2009. Within five years, Ribo-seq had been adapted to bacteria, to plants, to mammalian cells, to mouse tissues, to viral infections, to circulating tumor cells. By 2015, the technique was standard enough that you could buy commercial kits for it. By 2020, there were specialized variants — selective ribosome profiling, disome-seq, translation complex profiling — that we'll meet in later segments. The whole subfield exists because of this one paper. Read it. It's worth your time.

---

## SEGMENT 3 — The workflow — cycloheximide arrest, RNase digestion, footprint isolation, library, sequence

Let's now walk through the Ribo-seq workflow in real detail, step by step, the way we did for bulk RNA-seq. Each step has choices that matter for the data quality you get and the biology you can extract. I want you, by the end of this segment, to be able to sketch the workflow on a whiteboard from cells to sequencer.

**Step one: arrest the ribosomes.** You have your cells — yeast in culture, a mammalian cell line, a slice of mouse liver, a bacterial culture, whatever. The first thing you do is freeze every ribosome in place, so that when you lyse the cells in the next step, the ribosomes don't move and don't run off their mRNAs. The standard drug for eukaryotic Ribo-seq is **cycloheximide** — usually abbreviated CHX. Cycloheximide is added to the medium at a concentration of about 100 micrograms per milliliter, a few minutes before harvest. It rapidly diffuses into cells, binds to the ribosomal E site, and arrests elongation. Within thirty seconds, essentially every actively translating ribosome is stuck in place wherever it happened to be. Some protocols also flash-freeze the cells in liquid nitrogen immediately after CHX treatment, to lock in the snapshot even faster. There are alternative arrest strategies — harringtonine for initiation-specific profiling, lactimidomycin for similar purposes — which we'll get to in Segment 10.

**Step two: lyse the cells.** With every ribosome arrested, you crack the cells open. Standard lysis buffers for Ribo-seq contain a detergent to dissolve membranes, magnesium to keep ribosomes intact (ribosomes fall apart without divalent cations), and a buffer to maintain physiological pH. You typically also include cycloheximide in the lysis buffer, to keep the ribosomes arrested even after the cells are open. The output of this step is a clear lysate containing intact polysomes — mRNAs decorated with multiple ribosomes — floating in solution along with all the other cellular contents.

\[Pause.\]

**Step three: nuclease digestion.** This is the magic step. You add RNase to the lysate. The standard choice is **RNase I** for eukaryotic samples, or **micrococcal nuclease** for bacterial samples (the choice matters because bacterial ribosomes are sensitive to RNase I in ways that obscure the footprints). The nuclease chews up every piece of RNA it can reach. Free mRNA, in between the ribosomes on a polysome — gone, digested to nucleotides. The 5' UTR before the first ribosome, the 3' UTR after the last ribosome, the linker regions between successive ribosomes on the same polysome — all gone. What survives is **only the ~30-nucleotide window of mRNA that was physically wrapped inside a ribosome**. The ribosome's body acts as a shield. The RNase cannot get under the ribosome to chew that fragment.

This is the central trick of Ribo-seq, and I want you to picture it concretely. **Imagine a long string with dozens of little beads strung along it, each bead clamping shut around a few inches of string. Now you bring in scissors that snip any exposed string. After enough snipping, all the string between the beads is cut away — what's left is the beads, each still clamped around its own short piece of string.** Now release the beads and collect the short pieces of string. Each piece is the footprint of where a bead was sitting. The string is mRNA. The beads are ribosomes. The scissors are the RNase. The footprints are what you sequence.

**Step four: isolate the footprints.** After digestion, you have a lysate containing intact 80S monosomes — single ribosomes with their protected fragment still bound — plus a lot of junk. You separate the monosomes from everything else by **sucrose gradient ultracentrifugation**. You pour a gradient of sucrose from low to high concentration in a tube, layer your digested lysate on top, and spin at high speed for several hours. Particles in the lysate migrate down through the gradient at speeds depending on their size and density. The 80S monosome peak is at a characteristic position — well-separated from free protein, from free RNA, from larger polysomes. You collect the fraction containing the monosome peak, extract the RNA from it, and what you have is enriched for the 30-nucleotide ribosome footprints.

Some modern protocols skip the sucrose gradient and instead use **size selection on a polyacrylamide gel** — running the digested RNA on a gel, cutting out the band at ~30 nucleotides, and eluting. This is simpler and works well, though it gives slightly less clean signal than the gradient approach. The recent ribosome profiling kits sold by companies like Lexogen and McLab use various combinations of these steps.

\[Pause.\]

**Step five: ribosomal RNA depletion.** Here's a wrinkle that bites you if you're not careful. Even after sucrose gradient enrichment, the RNA you extracted from your monosome fraction is _not_ pure footprints. It contains ribosomal RNA fragments — specifically, fragments of the 18S and 28S rRNAs that happen to be about the same size as your footprints (because the ribosome contains tons of rRNA, and the RNase chews it up into similar-sized pieces). If you don't deplete the rRNA, your sequencing run will be dominated by rRNA reads, and you'll waste most of your sequencing dollar. So before library prep, you do a targeted rRNA depletion — either with hybridization to biotinylated probes followed by streptavidin pulldown, or with the commercial Ribo-Zero kit, or with newer approaches like DASH (depletion of abundant sequences by hybridization). After depletion, your sample is ~70-90% genuine footprints by reads.

**Step six: small-RNA library prep.** Your input is now a tube of 30-nucleotide RNA fragments, which is way smaller than what standard RNA-seq library prep expects. You need to use a **small-RNA library prep protocol**. The basic workflow is: ligate a synthetic adapter onto the 3' end of each fragment (using T4 RNA ligase), then either circularize and PCR or ligate a second adapter onto the 5' end, then reverse transcribe to cDNA, then PCR amplify with index primers. Modern protocols include unique molecular identifiers — UMIs, random short barcodes — in the adapters, so you can count distinct molecules instead of PCR-amplified copies and avoid amplification bias. The output is a tube of Illumina-compatible library, ready for the sequencer.

**Step seven: sequence.** Load the library onto an Illumina flow cell, run a standard short-read run — typically single-end 50 or 75 base pairs is plenty, because your inserts are only 30 nucleotides — and you get back a few tens of millions of reads per sample. Each read is one ribosome footprint. Each footprint is one ribosome's position at one moment in your cells' lives.

The whole workflow takes a few days end-to-end, costs a few hundred to a thousand dollars per sample, and yields data that — once you've cleaned out the rRNA contamination and aligned the footprints to the transcriptome — looks like one of the most informative tracks in all of genomics. Coverage along every translated gene, peaks where ribosomes accumulate, drop-offs at stop codons. Let's now look at the most striking feature of that data: 3-nucleotide periodicity.

---

## SEGMENT 4 — The 3-nucleotide periodicity signature — the smoking gun

If you take a Ribo-seq dataset and you align all the footprint reads to the transcriptome, then plot how the 5' ends of the reads are distributed along the coding sequences of all the translated genes — pooling across thousands of genes to get good statistics — you see something remarkable. The read positions are not uniform. They are not random. They have a strong, clean, 3-nucleotide periodicity. Read counts pile up preferentially at every third position along the mRNA. The first nucleotide of each codon gets the most reads. The second and third nucleotides of each codon get fewer.

This pattern is the **3-nucleotide periodicity** signature of ribosome profiling, and it is the single most important piece of quality control in the field. **It is the smoking gun — real Ribo-seq data phases in 3-nucleotide steps, with the periodicity matching codon boundaries on the mRNA.** If your data shows this pattern, you have genuine ribosome footprints. If your data doesn't show it, something has gone wrong — either you've contaminated with non-ribosomal RNA fragments, or your digestion conditions weren't right, or your size selection picked up the wrong band, or your sample isn't really translating in the way you thought.

\[Pause.\]

Why does this periodicity exist? Because translation itself happens in 3-nucleotide steps. The ribosome reads codons. Each codon is three nucleotides. The ribosome moves down the mRNA one codon at a time — three nucleotides per translocation step. So if you freeze ribosomes at random moments in their translation cycles, the distribution of ribosome positions along the mRNA is not uniform — it's enriched at codon boundaries, because the ribosome spends most of its time aligned with codon boundaries (during the elongation cycle, between translocation events). The footprint that a ribosome leaves, when you snip the surrounding mRNA away, is a fragment that starts at a specific offset relative to the codon being read. That offset is consistent across most ribosomes — typically the 5' end of the footprint is 12 or 13 nucleotides upstream of the codon at the A site (where the next amino acid is being added). Because of this consistent offset, the 5' ends of footprints pile up at every third position relative to the coding frame.

Practically, here's what you do with this signal. After you align your reads to the transcriptome, you take all the reads that map to the coding sequence of any translated gene, and you compute the position of the 5' end of each read relative to the nearest in-frame codon boundary. You bin the positions: how many reads have their 5' end at offset 0 from the codon boundary? How many at offset 1? How many at offset 2? In real Ribo-seq data, the bin counts look like a clean three-peaked pattern — one big peak at offset 0 (which corresponds to the actual codon-aligned 5' end), and much smaller peaks at offsets 1 and 2. The ratio of the dominant offset to the other two — sometimes called the periodicity score — is a quality metric for the run. Good Ribo-seq has a periodicity score above 0.6 or so. Bad data — contaminated, mis-digested, mis-selected — has no periodicity at all, just a flat distribution.

\[Pause.\]

A practical aside. The 3-nucleotide periodicity is _read-length-dependent_. Different footprint lengths come from slightly different ribosome conformations, and the offset between the 5' end of the footprint and the A site codon depends on the footprint length. Most modern Ribo-seq pipelines compute the periodicity separately for each footprint length, and use a length-specific offset to assign each read to a specific A-site codon. The tool **riboWaltz**, which we'll meet in Segment 15, does this analysis automatically. Some footprint length classes have clean periodicity; others don't, and those are usually filtered out.

Beyond quality control, the 3-nucleotide periodicity is biologically informative in its own right. **The fact that the periodicity exists is proof that the reads come from actively translating ribosomes, not from any other RNA-binding protein.** Lots of proteins bind to mRNA. Lots of them protect a similar-sized fragment from nucleases. RNA-binding proteins in general, exosome subunits, helicases — all of these can leave fragments of similar size in a nuclease-protection experiment. None of those fragments will show 3-nucleotide periodicity, because none of those proteins move along the mRNA in codon steps. Only ribosomes do that. So the periodicity is a kind of biochemical proof of identity: this fragment came from a ribosome, not from some other protein. This becomes important in segments later when we discuss novel translation — finding ribosomes on uORFs and on previously unannotated regions of the transcriptome.

One more thing. The 3-nucleotide periodicity also lets you read the **translation frame** directly from the data. For most mRNAs, the frame is known — the start codon is annotated, and you know which of the three possible reading frames is the one being translated. But for novel ORFs in unannotated regions — long non-coding RNAs, uORFs, intergenic transcripts that turn out to be translated — you don't a priori know the frame. Looking at the periodicity in the data tells you. If the reads pile up at every third position starting from a candidate start codon, you have the right frame. If they don't, that start codon is not really being used. This is one of the main ways the field discovers novel translated ORFs, which we'll dig into in Segment 7.

The 3-nucleotide periodicity is, in summary, the signature that distinguishes real Ribo-seq from noise, the proof that the protected fragments came from genuine elongating ribosomes, and the ruler that lets you read out translation frame directly from the data. Memorize it. When you look at a Ribo-seq dataset, the first thing you should check is the periodicity. If it's there, you have good data. If it's not, stop and figure out what went wrong before you do anything else.

---

## SEGMENT 5 — Start and stop codon meta-profiles — the shape of translation

The 3-nucleotide periodicity is a feature of the bulk of the coding sequence. But the start and stop codons — the beginning and end of each translated open reading frame — have their own characteristic features in Ribo-seq data, and looking at them as a meta-profile across many genes is another standard quality control and biological readout.

A meta-profile is exactly what it sounds like: you take all the genes in your dataset, line them up at a common reference point — say, the start codon of each — and average the Ribo-seq signal across all those genes. The result is a single, smoothed track that shows the average shape of translation around that reference point. Lining up at the start codon gives you the start-codon meta-profile. Lining up at the stop codon gives you the stop-codon meta-profile. Both are diagnostic.

\[Pause.\]

The start-codon meta-profile looks like this. As you move along the mRNA toward the start codon from the 5' end, the signal is low — there are not many ribosomes in the 5' UTR of most genes. Then, right at the start codon itself, you typically see a **big peak**. This peak is the **initiation peak** — it reflects ribosomes that have just initiated translation at the AUG and are sitting at the start codon, waiting to begin elongation. Initiation is often slower than elongation, so ribosomes accumulate there. Immediately after the start codon, the signal drops to a steady level — the level of elongation density along the rest of the coding sequence. The pattern is a sharp rising edge at the start codon, a tall initiation peak, and then a step down to a sustained elongation plateau.

The stop-codon meta-profile is the mirror image. The signal is at the elongation plateau along the coding sequence, then there's typically a **second peak** right at the stop codon — reflecting ribosomes that have finished translating the protein and are sitting at the stop codon waiting to be released by release factors. Immediately past the stop codon, into the 3' UTR, the signal drops essentially to zero, because there are no ribosomes there. The drop is sharp and clean in good data.

These two meta-profiles — start and stop — together give you a picture of what translation looks like, on average, across the whole transcriptome of your cells. They are diagnostic for Ribo-seq quality in two ways. First, the **sharpness** of the transitions tells you about your size selection and your periodicity. If the start peak is sharp and the elongation plateau is well-defined, you have clean footprints. If the transitions are blurry, you've contaminated with longer fragments or you've lost frame information. Second, the **height of the start and stop peaks** relative to the elongation plateau tells you about kinetic features of translation — how slow initiation is, how slow termination is, in your particular cells under your particular conditions.

\[Pause.\]

Beyond quality control, the meta-profiles reveal real biology. Consider this. Compare the start-codon meta-profile of cells growing in normal conditions to the same cells under nutrient starvation. Starvation triggers a global suppression of translation through the integrated stress response — phosphorylation of the initiation factor eIF2-alpha, which slows down 40S subunit recruitment. In the meta-profile, you see this directly: the initiation peak gets _bigger_ relative to the elongation plateau, because more ribosomes are stuck at start codons, unable to proceed to elongation efficiently. Translation initiation has become rate-limiting. Conversely, treat cells with a translation elongation inhibitor at sublethal doses, and the elongation plateau goes up relative to the initiation peak, because ribosomes are now slow during elongation and pile up across the coding sequence. The shape of the meta-profile carries information about which step of translation is limiting under your conditions.

The meta-profiles also let you compare initiation efficiency between transcripts. Some mRNAs have stronger initiation peaks than others — those are mRNAs being efficiently loaded with ribosomes. Some have weaker peaks — those are mRNAs that ribosomes have trouble starting on. The Kozak context around the start codon, the secondary structure of the 5' UTR, the presence of upstream ORFs (which we'll get to next segment) — all of these affect initiation efficiency, and all of them are visible as differences in the per-gene initiation peak.

A more advanced version of the start-codon meta-profile uses a drug called **harringtonine**, which we'll discuss in detail in Segment 10. Harringtonine blocks the very first elongation step but allows initiation to occur. If you treat cells with harringtonine before doing Ribo-seq, the initiation peak at the start codon becomes enormously dominant — almost all the signal in the dataset is at start codons. This is a way of specifically mapping translation initiation sites genome-wide. It's the standard technique for finding alternative or non-canonical start codons, which turn out to be much more common in the transcriptome than the original genome annotations suggest.

The takeaway: the meta-profiles are the second main quality control of Ribo-seq, after the 3-nucleotide periodicity. Together, they tell you that your data is clean, that the ribosomes you're looking at are doing real translation, and they hand you direct readouts of how initiation and termination kinetics are behaving in your cells. Every modern Ribo-seq paper shows these plots. You should know how to read them.

---

## SEGMENT 6 — uORFs in 5' UTRs — translation regulators hiding in the upstream

We have been talking, so far, as though every mRNA has one open reading frame — the main ORF — and translation happens within that single coding region. That picture is, for many mRNAs, an oversimplification. In a substantial fraction of mammalian mRNAs — somewhere between thirty and fifty percent depending on which estimate you trust — there are **upstream open reading frames**, or **uORFs**, located in the 5' UTR, before the main coding sequence begins. These uORFs are short — often only a few codons long, sometimes up to a couple of hundred — and they have their own AUG start codons, their own stop codons, and they are translated.

Ribo-seq was, more than any other technique, what made uORFs visible across the transcriptome. Before Ribo-seq, uORFs were known to exist — they had been characterized in individual famous examples like ATF4, GCN4, and a handful of others, where the regulatory role of the uORF was a textbook story. But the genome-wide picture, the realization that uORFs are everywhere and matter for the translation of a large fraction of all mRNAs, came from the first wave of Ribo-seq studies after 2009.

\[Pause.\]

Here is what uORFs do. **uORFs are translation regulators in the 5' UTR — they often suppress translation of the main downstream ORF.** The basic logic: a scanning ribosome, after being recruited to the cap of the mRNA, slides along the 5' UTR looking for an AUG. If it encounters the uORF AUG first, it initiates there. It translates the uORF — which is short, so this is quick — and then it terminates at the uORF stop codon. After termination, the ribosome typically dissociates from the mRNA. So if the ribosome got distracted by the uORF, it never made it to the main ORF. Translation of the main protein is suppressed.

Some uORFs are even more elaborate. The classic case is **ATF4** in mammals, which is the homolog of yeast GCN4. ATF4 is a transcription factor that gets translationally upregulated during the integrated stress response — when the cell is stressed, ATF4 protein goes _up_, even though ATF4 mRNA stays the same. The mechanism is uORF-based. In ATF4 mRNA, there are two uORFs in the 5' UTR. Under normal conditions, ribosomes initiate at uORF1, translate it, terminate, and then re-initiate at uORF2. uORF2 overlaps with the main ORF in an out-of-frame manner, so ribosomes that initiate at uORF2 cannot translate the main ORF — they hit a stop codon partway through and dissociate. So under normal conditions, the main ATF4 ORF is poorly translated. Under stress, the integrated stress response slows down ribosome re-initiation. Ribosomes still initiate at uORF1 and translate it, but they take longer to re-initiate downstream. The longer reinitiation delay means many ribosomes skip uORF2 entirely and instead reach the main ATF4 ORF, initiating there. Stress, paradoxically, increases ATF4 protein.

This is one of the most beautiful regulatory mechanisms in biology, and it works because of two specifically positioned uORFs whose translation is mechanistically coupled to the main ORF. Ribo-seq lets you see all of this directly. In a normal cell, you see ribosome footprints on uORF1 and uORF2 of ATF4, but little signal on the main ORF. In a stressed cell, you see reduced footprints on uORF2 and increased footprints on the main ORF. The mechanism is right there in the data.

\[Pause.\]

The genome-wide picture from Ribo-seq is that **uORFs are common, they are usually translated, and they usually suppress main ORF translation**. Some uORFs are regulatory — like ATF4 — where the suppression is dynamically tunable by stress, by hormones, by signaling. Others are constitutive — they just always suppress the main ORF, and the cell uses that to keep certain proteins at low baseline levels until specific conditions activate them.

How do you find uORFs in Ribo-seq data? Conceptually, you look for genomic regions in the 5' UTR of annotated mRNAs where you see ribosome footprints with the characteristic 3-nucleotide periodicity, starting at an AUG (or near-cognate start codon like CUG or GUG) and ending at an in-frame stop codon. The periodicity tells you those footprints are real translating ribosomes. The presence of a start and stop codon defines an ORF. A specialized tool like **RibORF**, **RiboTaper**, or **ORF-RATER** scans the Ribo-seq data for these features and outputs a catalog of all the uORFs being translated in your sample. The numbers are striking. A typical Ribo-seq experiment on mammalian cells will identify thousands of translated uORFs — far more than the genome annotation had listed.

Beyond regulation of the downstream main ORF, some uORFs encode their own functional **micropeptides** — small proteins of fewer than 100 amino acids that have biological activity. The boundary between "uORF that suppresses translation" and "uORF that makes a real micropeptide" is fuzzy and depends on whether the resulting peptide does anything. We'll spend the next segment on this, because the discovery of novel microproteins is one of the most exciting things Ribo-seq has opened up.

For now, the headline: **uORFs are translation regulators in 5' UTRs that often suppress main ORF translation, and Ribo-seq is how we see them genome-wide.** Without Ribo-seq, the catalog of uORFs would still be in the dozens of well-studied cases. With Ribo-seq, we know they are everywhere, and we are starting to understand how much of the variability in protein abundance across the transcriptome is explained by uORF-mediated regulation.

---

## SEGMENT 7 — Novel microproteins and small ORFs — a hidden proteome

Now we come to one of the most genuinely exciting things that Ribo-seq has revealed about biology — something that, if you'd told a molecular biologist in 2005, they probably would not have believed. The story is this: **the genome contains thousands of small open reading frames, encoding proteins of fewer than a hundred amino acids, that the standard genome annotations of human and mouse and yeast had completely missed.** And many of those small proteins — called variously micropeptides, microproteins, smORF-encoded peptides, or SEPs — turn out to be biologically real, evolutionarily conserved, and functionally important.

Let me set up why those proteins were missed. The standard tools for annotating protein-coding ORFs in a genome — the algorithms that built the original gene catalogs of every model organism — had a built-in size cutoff. They generally required an ORF to be at least 100 codons long, encoding a protein of at least 100 amino acids, before they would call it a real gene. The reason for the cutoff was statistical. By chance, in a long stretch of random sequence, you'll find lots of short open reading frames just from the random arrangement of stop codons. If you set the cutoff too low, you fill your annotation with false-positive ORFs that are not really translated. So everyone agreed: only call ORFs of 100 amino acids or more. That kept the annotations clean, but it also made every protein smaller than 100 amino acids invisible to the annotation pipeline.

\[Pause.\]

Ribo-seq broke this barrier, because Ribo-seq doesn't care about ORF length. Ribo-seq just sees where ribosomes are. If a ribosome is sitting on a stretch of mRNA, the footprint shows up in the data, with the 3-nucleotide periodicity, regardless of whether the ORF being translated is 20 codons or 2,000. Once people started looking at Ribo-seq data carefully — particularly in studies by groups like Ingolia's, Saghatelian's, Slavoff's, and Eric Lander's — it became clear that there were _thousands_ of translated small ORFs in mammalian genomes. They lived in regions previously annotated as 5' UTRs, in regions annotated as long non-coding RNAs (which were now revealed to encode small proteins), in regions annotated as intergenic, and even within the 3' UTRs of canonical mRNAs.

How many small ORFs are we talking about? Estimates vary, but a reasonable consensus from the field is that the human genome encodes somewhere between five thousand and twenty thousand additional small ORFs beyond the canonical proteome — depending on how stringent you are about evidence. Many of these have been independently verified by mass spectrometry, where you can detect the actual peptide product in cell lysates. Many are evolutionarily conserved across species, which is strong evidence that they are functional, because random ORFs do not stay conserved over evolutionary time. And a growing number have been individually characterized, with specific biological functions in metabolism, signaling, development, and disease.

\[Pause.\]

A few examples to give you a feel. **Myoregulin** is a 46-amino-acid micropeptide encoded by what was previously annotated as a long non-coding RNA in muscle. Doug Olson and Eric Olson's lab at UT Southwestern, working with Alan Saghatelian, showed in 2015 that myoregulin is translated, that it localizes to the sarcoplasmic reticulum membrane in muscle cells, and that it directly regulates calcium uptake by binding to and inhibiting the SERCA calcium pump. Knocking out myoregulin in mice changes muscle performance. This is a real protein, doing a real job, that the annotation had called "non-coding RNA" for years.

**SPAR**, a 90-amino-acid micropeptide encoded within what was annotated as a lncRNA, regulates muscle regeneration. **NoBody**, a 68-amino-acid peptide, localizes to P-bodies and regulates mRNA decapping. **MOTS-c**, a 16-amino-acid peptide encoded within the mitochondrial 12S ribosomal RNA gene, regulates insulin sensitivity and metabolic homeostasis. The list keeps growing every year. Every one of these was first detected as a Ribo-seq footprint signal on a region of the genome the annotation said was non-coding.

The biological implications are enormous. These tiny proteins are doing real cellular work. They tend to act as regulators — interacting with larger proteins, modulating membrane channels, scaffolding complexes — and they tend to be expressed in tissue-specific or condition-specific ways. They are a substantial fraction of the actual functional proteome that we missed because our annotation pipeline had a size cutoff. We are still in the early days of cataloging them, and even earlier in characterizing what most of them do.

Computationally, the workhorse tools for calling translated small ORFs from Ribo-seq are **RibORF**, **RiboTaper**, **ORF-RATER**, and **RibORF2**. They all work roughly the same way: scan the transcriptome for stretches that have footprint coverage with the right periodicity and frame consistency between a candidate start codon and an in-frame stop codon. The outputs of these tools, run on big mammalian Ribo-seq datasets, are the basis for the modern small-ORF catalogs that the field is curating.

The headline: **Ribo-seq has revealed a hidden proteome of thousands of small ORFs, encoding microproteins of fewer than 100 amino acids, that the standard annotations had missed because of an arbitrary size cutoff.** Many of these are functional. Most are still uncharacterized. The next decade of post-genomic biology will be substantially about figuring out what they all do.

---

## SEGMENT 8 — Translation efficiency — combining Ribo-seq with RNA-seq

We come now to one of the most useful quantitative measures in the whole Ribo-seq toolkit, and it's an analysis that only works if you have Ribo-seq and RNA-seq from the _same_ samples. It's called **translation efficiency**, abbreviated TE, and it is, almost trivially, the ratio of Ribo-seq signal to RNA-seq signal for each gene.

The intuition is straightforward. RNA-seq counts how many mRNAs of a given gene are present. Ribo-seq counts how many ribosomes are sitting on those mRNAs. If you have ten mRNAs of gene X and you measure ten ribosomes on gene X, that's one ribosome per mRNA, which is — kinetically — a measure of how heavily loaded that gene's mRNAs are with translating ribosomes. Heavily loaded mRNAs make more protein per unit time per mRNA. Lightly loaded mRNAs make less. The ratio of Ribo-seq to RNA-seq, computed for every gene, gives you a per-gene measure of how efficiently each gene's mRNAs are being translated.

\[Pause.\]

Formally, **translation efficiency = ribosome footprint reads per gene divided by mRNA reads per gene**, after normalizing each for sequencing depth and gene length. Some pipelines use TPM (transcripts per million) for both Ribo-seq and RNA-seq and compute the ratio; others use raw counts with appropriate normalization. The exact formula matters less than the concept. TE is a quantitative measure of how many ribosomes are loaded onto each mRNA molecule of a gene, on average.

Here is how I want you to think about it, in simple cases.

**High mRNA, high Ribo-seq** — typical for a constitutively well-translated gene. The mRNA is present, the ribosomes are on it, protein is being made at a steady rate. Most housekeeping genes look like this.

**Low mRNA, low Ribo-seq** — typical for a gene that's just turned off. Few mRNAs, few ribosomes, little protein. Standard.

**High mRNA, low Ribo-seq** — translationally suppressed. The transcript is there but it's not being read. Maybe there's a uORF blocking initiation. Maybe a repressor protein is bound. Maybe the mRNA is sequestered in a stress granule. The cell has the recipe but isn't cooking it. Low TE.

**Low mRNA, high Ribo-seq** — translationally activated. Few transcripts but each one is heavily loaded with ribosomes. The cell is squeezing maximum protein out of a small mRNA pool. Could be a stress response, where translation efficiency goes up to compensate for transcript loss. High TE.

The analogy I want you to hold: **high mRNA with low Ribo-seq is a transcript that's present but suppressed at translation. Low mRNA with high Ribo-seq is an efficiently translated transcript getting lots of protein from few copies. Translation efficiency captures the layer of regulation between mRNA and protein that RNA-seq alone cannot see.**

\[Pause.\]

What kinds of biology become visible when you compute TE across conditions? Almost anything where the cell uses translation as a regulatory layer.

Take the integrated stress response, which we already mentioned. When cells are stressed — by amino acid starvation, by viral infection, by misfolded proteins in the endoplasmic reticulum — the global translation machinery slows down through phosphorylation of eIF2-alpha. But not every gene is affected equally. Some specific genes — including ATF4, ATF5, GADD34, and the chaperone gene CHOP — are translationally _upregulated_ during stress. Their mRNA levels don't change much. Their TE goes up. Without Ribo-seq plus RNA-seq, you'd never see this — you'd look at RNA-seq, see no change in the mRNA levels of these genes, and conclude they aren't responding to stress, when actually they are responding strongly at the translation layer.

Take the diurnal cycle. There's been beautiful work showing that translation efficiency varies across the day-night cycle for many genes, independently of mRNA level changes. The cell uses translational control to time when specific proteins get made, on top of the transcriptional regulation provided by the circadian clock. You only see this through TE analysis.

Take cancer. Many oncogenes — MYC is the classic example — have mRNAs that are translated with very high efficiency, partly because their 5' UTRs are structured in ways that the translation machinery navigates well only when initiation factor activity is high. In tumors with elevated mTOR signaling, the translation machinery is up, and the TE of MYC and similar oncogenes goes up disproportionately. This makes the cancer cell extra-sensitive to translation inhibitors. The clinical implication: you can target the translation layer in cancer specifically, with drugs that suppress eIF4E or similar targets, and the cancers most dependent on translational regulation are most vulnerable.

A practical aside on TE statistics. Comparing TE between conditions — for example, drug-treated versus untreated — requires careful statistics, because the ratio of two noisy counts is more variable than either count alone. The standard tool is **Xtail**, which models the differential TE between conditions as a function of both the Ribo-seq and RNA-seq counts and their dispersions. **Ribodiff** is an alternative. Both are R packages and both build on the negative binomial models used in DESeq2 and edgeR for standard differential expression. Don't just take ratios of TPMs and call them "differential TE" — the statistics get tricky, and you want a tool that handles them correctly.

The headline of this segment: **Translation efficiency is the per-gene ratio of Ribo-seq to RNA-seq, and it's the single most useful number you can compute from a paired Ribo-seq plus RNA-seq experiment.** It reveals the translation layer of regulation — the gap between recipe presence and recipe being cooked — and it captures a huge fraction of the variability in protein abundance that mRNA alone misses.

---

## SEGMENT 9 — Ribosome stalling — rare codons, proline-proline, and regulatory pauses

So far we've talked about translation as if it's relatively uniform along the length of an ORF — ribosomes elongating at some average rate. Real translation is not uniform. Ribosomes go fast through some codons, slow through others, and occasionally come to a complete halt — a **stall** — at specific positions. Ribo-seq is the perfect tool for seeing these speed variations, because the density of footprints at a given codon is proportional to how long the ribosome spends there. **A peak in Ribo-seq at one specific codon means ribosomes are pausing there.** Slow codons accumulate ribosomes. Fast codons don't. So the Ribo-seq density profile along an mRNA is, essentially, a map of translation speed — and the peaks are the stalls.

Why do ribosomes stall? Several reasons, and Ribo-seq has illuminated all of them.

**Reason one: rare codons.** Codons are not used uniformly. In any genome, some codons appear much more frequently than others. The tRNAs that read those codons are correspondingly more abundant. Common codons get read fast — there's a tRNA waiting to come in. Rare codons get read slowly — the ribosome has to wait for the rare tRNA to find it. Genome-wide, Ribo-seq shows that ribosome density is higher at rare codons than at common codons, on average — confirming that codon usage affects elongation speed. Some genes are deliberately encoded with stretches of rare codons in specific places, slowing translation locally — sometimes to allow co-translational folding of a particular protein domain, sometimes to recruit specific chaperones, sometimes for reasons we still don't fully understand.

\[Pause.\]

**Reason two: proline-proline and other slow peptide bonds.** Some amino acid combinations are particularly slow for the ribosome to chemically link together. The worst offenders are stretches of proline residues. Proline is a chemical oddball — its amino group is part of a ring structure, which makes it a poor substrate for the peptidyl transferase reaction. When the ribosome tries to add a proline to a growing peptide that already ends in a proline, the reaction is sluggish. Polyproline tracts — sequences of three or more prolines in a row — cause major ribosome stalls. Cells have a specific elongation factor, **eIF5A** in eukaryotes (and EF-P in bacteria), whose primary job is to rescue ribosomes stalled at polyproline tracts. If you do Ribo-seq in cells lacking eIF5A function, you see massive footprint accumulation at every polyproline site in the genome.

**Reason three: regulatory pauses driven by mRNA structure or specific peptide sequences.** Some genes have evolved to deliberately stall ribosomes at specific positions for regulatory purposes. The classical example is the **SecM** peptide in bacteria, which contains a sequence that, when translated, gets stuck in the ribosomal exit tunnel and stalls translation. This stall is part of a regulatory cassette for the SecA secretion machinery — the stalled SecM ribosome exposes a regulatory element on the mRNA that allows downstream translation of SecA. Other examples include arginine-attenuated leader peptides in amino acid biosynthesis operons, where stalling depends on amino acid availability, and translational arrest in selenocysteine incorporation. Ribo-seq sees all of these as sharp local peaks of footprint density.

**Reason four: collision and queueing.** When a ribosome stalls, the ribosome behind it on the same mRNA catches up and bumps into it. The stalled ribosome creates a traffic jam, with multiple ribosomes piling up behind it. The collided ribosomes — called disomes when two collide, trisomes when three — trigger specific quality control responses in the cell, including the ribosome quality control (RQC) pathway, which we'll come back to in Segment 13. Disome-seq, a variant of Ribo-seq we'll discuss, specifically isolates these collided pairs.

\[Pause.\]

A computational note. Identifying stall sites in Ribo-seq data is statistically a bit subtle, because you have to control for the baseline footprint density that varies across genes — highly translated genes will have higher absolute footprint counts at every position, including stall sites. The standard approach is to compute a per-gene normalized profile, then look for codons where the local density is significantly higher than expected given the gene's average density. Various peak-calling tools exist for this, often borrowed from ChIP-seq analysis but adapted for the codon-resolution structure of Ribo-seq data.

Biologically, stalls matter. They are read out as: which codons are limiting for which proteins, where do specific elongation factors act, where do regulatory peptides cause translational arrest, where do specific peptide sequences interact with the ribosomal exit tunnel. Each individual peak in a Ribo-seq track is a story. Pile them up across the genome, and you have a quantitative description of the entire kinetic landscape of translation in your cells.

One last point. **A peak in Ribo-seq at a single codon means ribosomes are pausing there.** Memorize that. When you look at a Ribo-seq track in IGV or UCSC genome browser and you see a tall spike on a specific codon of a coding sequence, what you're seeing is: ribosomes spend longer at that codon than at neighboring codons. The codon might be rare. The amino acid might be hard to add. There might be a regulatory element. Something is slowing them down. The peak is a window into local translation kinetics.

\[BREAK\]

---

## SEGMENT 10 — The cycloheximide artifact, flash-freeze, and harringtonine

\[Resume after break.\]

Welcome back. We've now spent an hour and we've covered the founding paper, the workflow, the periodicity signature, the meta-profiles, uORFs, microproteins, translation efficiency, and ribosome stalling. We're now going to spend the second hour going deeper — first into some artifacts that you have to be aware of, then into specialized variants of Ribo-seq, then into applications, and finally into the future of the field.

The most important artifact in Ribo-seq, and one that has caused real controversy in the field, is **the cycloheximide artifact**. I want to spend a segment on it because it shapes how you should interpret most published Ribo-seq data, and especially Ribo-seq data from the early years of the technique.

Here is the problem. Cycloheximide is added to cells to arrest ribosomes before lysis, so that ribosomes don't move during sample preparation. The premise is that CHX freezes every ribosome instantaneously, in place, exactly where it was at the moment of treatment. **The premise is not exactly true.** Cycloheximide takes a few seconds to bind and stall ribosomes. During those few seconds, ribosomes that have just initiated translation continue to elongate — but slowly, because CHX is starting to inhibit them. The net effect is that ribosomes accumulate slightly downstream of where they were when CHX was added. Specifically, **CHX causes an artifactual enrichment of ribosome footprints in the first 30 to 50 codons of every ORF**.

If you do CHX-treated Ribo-seq and you look at the meta-profile of footprint density along the coding sequence, you see a striking signature: a high peak in the first ~30 codons, then a gradual decline to a lower steady-state plateau across the rest of the ORF. That early peak is not real biology — it's the consequence of ribosomes continuing to slowly accumulate at the start of each ORF during the seconds it takes for CHX to fully act. Cycloheximide is essentially distorting the first 30 seconds of translation.

\[Pause.\]

The analogy I want you to hold: **CHX arrest is like freezing every ribosome in place, but also slightly distorting the first 30 seconds of translation, because the freeze takes a few seconds to fully take hold.** The image is of taking a flash photograph at the racetrack — most of the runners are caught mid-stride, but the runners who just left the starting gate are slightly blurred because they're still moving while the flash fires.

How big a deal is this? For some analyses, modest. If you're computing per-gene total ribosome counts to estimate translation efficiency, the first-30-codon distortion averages out. If you're looking at stall sites in the middle of a long ORF, the artifact is far away from your peaks of interest. But if you're trying to interpret initiation kinetics, or if you're looking at short ORFs (like uORFs) where the first 30 codons are most of the ORF, the artifact can completely dominate your data. Many published claims about translation kinetics from early Ribo-seq studies have had to be re-examined in light of this artifact.

What do you do about it? Several strategies have been developed.

**Strategy one: flash-freezing without CHX.** You skip CHX entirely. Instead, you flash-freeze your cells in liquid nitrogen as fast as possible, then process the frozen cells through the rest of the workflow with CHX added only to the lysis buffer (which still helps prevent post-lysis ribosome movement, but doesn't distort in-cell translation). This is sometimes called **drug-free profiling**. It produces meta-profiles without the start-codon artifact and is now considered the gold standard, especially for studies focused on translation kinetics or initiation. The catch is that you have to be fast — flash-freezing has to happen within seconds of harvest, before ribosomes redistribute. Practical for cultured cells, harder for whole tissues.

**Strategy two: use a different elongation inhibitor.** **Anisomycin** is one alternative — it binds the ribosomal A site and is faster-acting than CHX in some experimental setups. **Emetine** is another, and is sometimes preferred for very short timescale experiments. None of these are perfect, but they have different artifact profiles, and using multiple drugs in parallel lets you triangulate the real signal.

**Strategy three: combine CHX-treated and drug-free runs.** Some groups now run both, and use the agreement between them to identify which features of the data are real and which are CHX artifacts.

\[Pause.\]

Now let me talk about **harringtonine**, which is essentially the inverse of cycloheximide and is used for a completely different purpose. Harringtonine — and its more potent relative homoharringtonine, which is a clinically used cancer drug — binds the ribosome at the very first elongation step. Specifically, harringtonine allows ribosomes to initiate at the start codon, but blocks the first peptide bond formation. The ribosome can find a start codon, recruit the first tRNA, but cannot elongate. As a result, in harringtonine-treated cells, ribosomes accumulate at start codons and nowhere else.

Why is this useful? Because the entire Ribo-seq signal collapses to start codons. The whole transcriptome's worth of translation initiation events shows up as massive peaks at the start codon of every translated ORF. You can use this to **map translation initiation sites genome-wide**, with single-codon precision. This is how you find non-canonical start codons — start codons at CUG or GUG instead of AUG, alternative start sites within annotated ORFs, start codons in uORFs that you couldn't see clearly because they were buried in the elongation signal.

The standard workflow is to do **CHX Ribo-seq and harringtonine Ribo-seq in parallel**. CHX gives you elongation density along the whole transcriptome. Harringtonine gives you a sharp map of every initiation site. Comparing the two lets you precisely identify where translation starts and where it elongates. Combined with riboseq-only data of various kinds, this is how the field now finds novel ORFs and characterizes alternative initiation events.

A close cousin to harringtonine is **lactimidomycin**, or LTM, which also enriches for initiating ribosomes. Lactimidomycin has somewhat cleaner kinetics than harringtonine for some applications. The methods toolkit for initiation profiling has expanded significantly in the years since 2009.

The headline of this segment: **Cycloheximide arrest causes a real artifact at the start of every ORF, because CHX takes seconds to act and ribosomes drift in that window. Flash-freezing without CHX, or initiation-specific drugs like harringtonine, give you cleaner views of the underlying biology.** When you read a Ribo-seq paper, look at the methods — find out what arrest strategy they used, and calibrate your interpretation accordingly.

---

## SEGMENT 11 — Bacterial Ribo-seq — different biochemistry, different biology

So far we've talked mostly about eukaryotic Ribo-seq — yeast, mammalian cells, plants. But Ribo-seq has been adapted to bacteria as well, and bacterial Ribo-seq has its own particularities. The biology is different, the biochemistry is different, and the data has different features. Let me walk through the main points.

The technique was first adapted to bacteria around 2011 and 2012, in studies by Gene-Wei Li (then in Carol Gross's lab and now at MIT), and independently by groups working in _E. coli_ and _Bacillus subtilis_. The basic workflow is similar to eukaryotic Ribo-seq: stall ribosomes, lyse cells, digest with nuclease, isolate monosomes by sucrose gradient, deplete rRNA, build small-RNA library, sequence. But several specifics differ.

\[Pause.\]

**Difference one: no cycloheximide.** Cycloheximide doesn't work on bacterial ribosomes — their structure is different enough that CHX doesn't bind. The standard bacterial arrest agent is **chloramphenicol**, which binds the 70S ribosome and inhibits peptide bond formation. Chloramphenicol works on bacterial ribosomes but not eukaryotic ones. Some bacterial Ribo-seq studies don't use any drug at all and rely on extremely fast flash-freezing — which works for bacteria because they're small and freeze quickly, more so than thick eukaryotic tissues. Drug-free bacterial Ribo-seq is increasingly the standard.

**Difference two: micrococcal nuclease instead of RNase I.** Bacterial ribosomes are sensitive to RNase I in a way that disrupts the protected footprint — the enzyme can get into and around the 70S ribosome and degrade more than just the exposed RNA. So bacterial Ribo-seq uses **micrococcal nuclease (MNase)** instead. MNase is a less aggressive nuclease and stops cleanly at the ribosome boundary. The footprints come out the right size — around 24 to 30 nucleotides in bacteria, slightly shorter than the typical eukaryotic 28-30.

**Difference three: no 5' cap, no poly-A tail.** Bacterial mRNAs do not have a 5' cap or a poly-A tail. The translation initiation machinery is completely different — bacterial ribosomes find start codons via Shine-Dalgarno sequences in the mRNA, which base-pair to the 16S rRNA of the small subunit. The implication for Ribo-seq is that initiation profiles look different, with sharp peaks at Shine-Dalgarno-positioned AUGs rather than at the cap-proximal scanned start codons of eukaryotes. The downstream analyses — annotating ORFs, finding stalls, computing TE — work essentially the same way, but the spatial arrangement of features is bacterial-specific.

**Difference four: no introns, no splicing.** Bacterial mRNAs are unspliced — what you transcribe is what you translate. This actually makes bacterial Ribo-seq computationally simpler, because you don't have to worry about splice junctions in your alignment. Footprints align directly to the genome.

**Difference five: operons.** Bacterial mRNAs are often polycistronic — a single mRNA encodes multiple proteins, one after another, each with its own Shine-Dalgarno and start codon. Ribo-seq shows you the translation of each ORF on the operon independently, and you can see things like differential translation of the genes within a single operon, which can vary based on internal initiation efficiency.

\[Pause.\]

The biology that bacterial Ribo-seq has revealed is rich. Gene-Wei Li and colleagues, in a series of beautiful papers, used bacterial Ribo-seq to demonstrate **proportional translation** — the observation that within a multi-protein complex like the ribosome itself, the ratios of protein synthesis from each gene are tightly matched to the stoichiometry needed for the assembled complex. This works through a combination of mRNA half-life, initiation efficiency, and feedback regulation, and bacterial Ribo-seq makes it directly quantifiable.

Bacterial Ribo-seq has also revealed the importance of EF-P, the bacterial homolog of eIF5A, in rescuing ribosomes stalled at polyproline sequences. The clean signal you get from bacterial Ribo-seq, plus the ability to do clean genetic knockouts, has made bacteria a wonderful system for studying ribosome rescue and quality control.

Bacterial Ribo-seq is now standard in microbiology research. It's used for everything from understanding antibiotic mechanisms (many antibiotics work by perturbing translation, and Ribo-seq shows you exactly what they do) to characterizing virulence factor expression in pathogens to studying the translation landscape of the gut microbiome via metaribosomal profiling.

The headline: **Bacterial Ribo-seq uses different drugs and different nucleases than eukaryotic Ribo-seq, but the basic idea is the same: stall the ribosomes, digest the mRNA except where ribosomes protect it, sequence the footprints, read out translation at codon resolution.** The biology you see is bacterial — Shine-Dalgarno-based initiation, polycistronic operons, EF-P-dependent rescue at polyproline — but the experimental logic is identical.

---

## SEGMENT 12 — Selective ribosome profiling — pulling specific factors

We come now to one of the most powerful variants of Ribo-seq, and probably the one I find most beautiful as a technique. It's called **selective ribosome profiling**, abbreviated **SeRP**, and the basic idea is this: instead of looking at all the translating ribosomes in the cell, you look at only the subset of ribosomes that are interacting with a specific factor — a chaperone, a signal recognition particle, a quality control factor, anything that binds to translating ribosomes.

SeRP was developed by Günter Kramer and Bernd Bukau and their group at Heidelberg around 2012, and the original application was to look at where the chaperone Trigger Factor sits on translating ribosomes in _E. coli_. The conceptual leap is to combine Ribo-seq with co-immunoprecipitation — to use an antibody (or a tag) to pull down ribosomes that have a specific factor bound, and then do the standard Ribo-seq workflow on just that pulled-down subset.

\[Pause.\]

The analogy I want you to hold: **SeRP is Ribo-seq plus IP — you see only the mRNAs and the ribosome positions where a specific factor of interest was bound. Regular Ribo-seq shows you every ribosome; SeRP shows you only the ribosomes engaged with your factor.** It's the difference between a census of every person in the city and a census of only the people having coffee at a specific café — both useful, but the second one tells you something the first can't.

The protocol works like this. You have cells expressing your factor of interest — let's say it's a chaperone, like Trigger Factor, or a signal recognition particle, or a translation factor. The factor is either tagged with an epitope (FLAG, HA, GFP, whatever) or you have a good antibody against it. You arrest the ribosomes with cycloheximide (or chloramphenicol for bacteria), you lyse the cells, you digest with nuclease as usual. But before you do the sucrose gradient, you do an **immunoprecipitation** — you add the antibody (or anti-tag beads), pull down everything bound to your factor, wash to remove the unbound material, and then proceed with the standard Ribo-seq workflow on the IP'd material. You also do a parallel total Ribo-seq from the same lysate, to use as a reference.

What you get from the IP fraction is a Ribo-seq dataset that contains only the footprints from ribosomes that had your factor bound at the moment of harvest. Compared to the total Ribo-seq dataset, you can see which transcripts the factor preferentially associates with, which positions along each transcript the factor binds, and how the factor's binding correlates with the kinetics of translation.

\[Pause.\]

What has SeRP shown us? Several beautiful things.

**Co-translational chaperone recruitment.** Trigger Factor binds the bacterial ribosome at the exit tunnel and helps nascent proteins fold as they emerge. Kramer's SeRP showed that Trigger Factor associates preferentially with ribosomes translating certain classes of substrate proteins — particularly larger and slower-folding proteins — and that the engagement happens at specific points during translation, not uniformly. The chaperone is selective.

**Signal recognition particle (SRP) targeting.** SRP recognizes hydrophobic signal sequences emerging from translating ribosomes and targets the entire ribosome-nascent-chain complex to the membrane for co-translational protein insertion. SeRP for SRP shows exactly when in translation the SRP engages — typically as soon as the signal sequence emerges from the exit tunnel, around codon 30 to 50 of the ORF — and which substrates are recognized. This has been done in both bacteria and yeast and has provided beautiful kinetic data on co-translational targeting.

**Specific quality control factors.** SeRP has been used to look at where ribosome quality control factors like Hbs1, Pelota, and Dom34 are recruited. These factors engage stalled ribosomes — and SeRP shows you exactly which transcripts and positions trigger their recruitment, providing a transcriptome-wide view of where translation goes wrong and gets rescued.

**Chaperone networks during stress.** SeRP for various heat shock proteins shows how the chaperone network reorganizes during heat stress, with different chaperones engaging different subsets of nascent proteins.

The variant of SeRP I find most clever is called **TCP-seq**, for translation complex profiling sequencing, developed by Ribosome Profiling pioneer Sasha Shirokikh and Tom Preiss. TCP-seq adds an additional crosslinking step before lysis, locking ribosomes and their associated factors in place even more rigidly, and then separately profiles 40S subunits, 80S ribosomes, and various intermediate complexes. It gives an even more detailed picture of initiation versus elongation states.

Practically, SeRP requires good antibodies or good tags, plus more starting material than standard Ribo-seq (because IP discards most of the input), plus careful controls to make sure your IP is specific. But when it works, it gives you a view of which translating ribosomes are doing what, with what partners, that no other technique can provide.

The headline: **Selective ribosome profiling combines Ribo-seq with immunoprecipitation to look at only the ribosomes engaged with a specific factor of interest, giving you a factor-specific view of co-translational events.** It's the workhorse method for studying co-translational chaperone action, membrane targeting, and quality control.

---

## SEGMENT 13 — Disome-seq — when ribosomes crash into each other

The next variant I want to walk through is **disome profiling**, sometimes called **disome-seq**, which is essentially Ribo-seq for ribosomes that have collided with each other. Where standard Ribo-seq isolates the 80S monosome — single ribosomes with their protected footprint — disome-seq isolates the 160S disome, which is a pair of ribosomes stuck together on the same mRNA, one having run into the back of the other.

The biology behind this is the traffic-jam picture I mentioned in Segment 9. When a ribosome stalls in the middle of an mRNA — for whatever reason, rare codon, polyproline, regulatory pause, damaged template — the next ribosome behind it on the same mRNA catches up and bumps into it. The two ribosomes are now in close contact, and they together protect a longer footprint — about 60 nucleotides instead of 30 — corresponding to the combined width of two ribosomes.

\[Pause.\]

The analogy I want you to hold: **disome-seq looks at ribosomes crashing into each other on the same mRNA — a leading stalled ribosome and a trailing one piled up behind it. Two ribosomes touching means the leading one had a serious stall, slow enough for the next one to catch up.** Disomes are an indication that something went wrong, or at least that something got slow. Where monosome Ribo-seq sees every ribosome, disome-seq specifically sees the stalls.

The protocol modifications are small. You do the standard Ribo-seq workflow — arrest, lyse, digest with nuclease — but on the sucrose gradient, you collect the **160S peak** instead of (or in addition to) the 80S peak. The 160S peak contains the disomes. You extract the RNA, which now contains 60-nucleotide protected fragments. You build a small-RNA library specifically tuned for the longer insert size (your size selection band is at ~60 nt instead of ~30). You sequence.

In the analysis, you align the 60-nucleotide footprints to the transcriptome and ask: where are the collisions happening? The answer comes out as peaks at specific codons across the transcriptome. The leading ribosome of each disome — the stalled one — sits at the collision site. The trailing ribosome sits just behind it. So the 60-nucleotide footprints map to pairs of adjacent codons, and the data tells you which codons cause the most collisions.

\[Pause.\]

What does disome-seq show? Two things, and both have been illuminating.

**First**, disome-seq independently confirms ribosome stall sites. The stalls we discussed in Segment 9 — rare codons, polyproline tracts, regulatory pauses — all show up as peaks in disome-seq, because stalled ribosomes get bumped into. So disome-seq gives you a second view of where translation is slow, with the additional information that the stall was severe enough to cause queueing.

**Second**, disome-seq has revealed the connection between ribosome collisions and quality control. When ribosomes collide, the disome is recognized by a specific quality control pathway — the **ribosome-associated quality control (RQC)** pathway — which involves factors like Hbs1-Pelota in yeast, ZNF598 in mammals, and a downstream cascade that ubiquitinates and degrades the stalled ribosome's nascent peptide. The collided disome is the activating signal for this entire pathway. Disome-seq has helped map exactly where in the transcriptome this quality control gets activated, and which mRNAs and codons cause the most collisions and the most QC activity.

The technique is relatively young — most disome-seq papers are from 2019 onward — but it's already an important addition to the Ribo-seq toolkit. Anyone studying ribosome stalling, mRNA quality control, or co-translational regulation should be aware of it.

---

## SEGMENT 14 — Ribo-seq in disease — cancer, viruses, and translation gone wrong

Ribo-seq is not just a basic-science tool. It has become an important method in disease biology, particularly in cancer and in virology. Let me spend a segment on these applications, because they illustrate why ribosome profiling matters beyond its intrinsic interest.

**Cancer.** Cancer cells frequently have dysregulated translation. Many oncogenic signaling pathways — PI3K-AKT-mTOR most famously — converge on the translation machinery, upregulating global protein synthesis and shifting the translatome toward cap-dependent translation of growth-promoting mRNAs. Tumors with elevated mTOR activity preferentially translate mRNAs with structured 5' UTRs, terminal oligopyrimidine (TOP) motifs, and 5' UTR G-quadruplexes — these mRNAs include MYC, cyclin D1, VEGF, and a long list of other cancer drivers.

Ribo-seq lets you see this directly. Compare Ribo-seq of tumor cells to Ribo-seq of normal cells, and you see translation efficiency shifts that correspond exactly to the predictions of the mTOR model — TOP mRNAs up, growth factor mRNAs up, with mRNA levels barely changed. The therapeutic implication is that drugs targeting the translation machinery — eIF4E inhibitors, mTOR inhibitors like rapamycin and its analogs, eIF4A inhibitors like silvestrol — should preferentially shut down the cancer-driving translation, and Ribo-seq is the assay you use to confirm whether they're doing it.

Beyond pathway-level dysregulation, cancers frequently produce **mistranslated proteins** through altered codon usage, stress-induced misincorporation, or readthrough of stop codons. Ribo-seq has revealed surprisingly high rates of stop-codon readthrough in some tumors, producing extended versions of proteins with altered C-terminal sequences. These extended proteins are sometimes presented on MHC and become neoantigens — potential targets for immunotherapy. The connection between mistranslation, neoantigen generation, and immune response is an active area of cancer biology that Ribo-seq is well-suited to investigate.

\[Pause.\]

**Viruses.** Viruses are total parasites of the translation machinery. Every virus has to get its proteins made by the host ribosome, and viruses have evolved an astonishing repertoire of tricks to hijack host translation. Ribo-seq has been transformative in studying these tricks.

Many viruses use **internal ribosome entry sites (IRESs)** to initiate translation in a cap-independent manner. Many use **leaky scanning**, **reinitiation**, or **frameshifting** to produce multiple proteins from a single mRNA. Many shut down host translation while preserving their own through specific factors — for example, the poliovirus protease cleaves eIF4G, shutting off cap-dependent translation but leaving IRES-driven translation intact, and almost all of poliovirus's mRNAs use IRESs.

Ribo-seq during viral infection lets you see the dance in real time. You can see the host translation crashing — host mRNAs lose ribosome footprints — while viral mRNAs become the dominant translation target. You can see frameshifting events as ribosomes shift between reading frames at specific recoding sites. You can identify novel viral ORFs that the annotation missed — and there are usually some, because viruses are notoriously gene-dense and use unconventional ORFs.

A specific example: SARS-CoV-2 Ribo-seq, done by several groups during the early COVID-19 pandemic, revealed unexpected aspects of the viral translation program — including identification of unannotated ORFs, characterization of the frameshifting event in the polyprotein, and quantification of how the virus shuts down host translation. This kind of data was directly relevant to drug design, particularly for translation inhibitors that might preferentially affect viral protein synthesis.

\[Pause.\]

**Other diseases.** Ribo-seq has applications in neurodegenerative diseases (where translation regulation in neurons is altered in conditions like ALS, frontotemporal dementia, and Huntington's), in diabetes (where pancreatic beta cells show altered translation programs in response to glucose), in cardiovascular disease (where ischemic stress alters cardiomyocyte translation), and in many genetic syndromes caused by mutations in translation factors or ribosomal proteins (the ribosomopathies). Each of these is a substantial subfield in its own right, and Ribo-seq is increasingly part of the standard toolkit.

The headline: **Ribo-seq sees translation dysregulation directly, and translation dysregulation is a major feature of many diseases — particularly cancer and viral infection. Reading Ribo-seq data from disease samples lets you diagnose what's gone wrong at the translation layer, which often guides therapy in ways that pure RNA-seq cannot.**

---

## SEGMENT 15 — Tools and pipelines — riboWaltz, plastid, RiboTaper

Let me now spend a quick segment on the computational tools you'll encounter if you actually start working with Ribo-seq data. This isn't an exhaustive review, but it's the toolkit you need to know.

The starting point, like any sequencing analysis, is **adapter trimming, quality filtering, and alignment**. You typically use **cutadapt** or **trim_galore** to remove the adapter sequences from your reads (since your inserts are only 30 nt and your reads are typically 50-75 nt, you sequence through the insert and into the adapter, which has to be trimmed off before alignment). Then you align to a reference using **STAR** or **bowtie2** — STAR is the more common choice and the splice-awareness is useful even though most ribosome footprints don't span junctions. For the actual alignment, many pipelines first remove rRNA contamination by aligning to an rRNA reference and discarding matches, then align the surviving reads to the transcriptome.

\[Pause.\]

Once you have aligned reads, the specialized tools take over.

**riboWaltz** is an R/Bioconductor package by Lauria and colleagues that does the periodicity analysis I described in Segment 4 — computing length-specific P-site offsets, generating periodicity plots, building meta-profiles around start and stop codons. It's the standard first-pass QC tool for Ribo-seq data, and most modern publications report riboWaltz output.

**plastid** is a Python library by Joshua Dunn for working with ribosome profiling and other genome-position data. It provides clean abstractions for ribosome profiling-specific analyses, including frame-aware position counts, ORF detection, and meta-profile generation. If you're doing custom analysis in Python, plastid is the standard library.

**RiboTaper** is an R package by Calviello and colleagues for identifying actively translated ORFs from Ribo-seq data, including novel ORFs in 5' UTRs, lncRNAs, and intergenic regions. It uses a multitaper analysis (the source of its name) to detect 3-nucleotide periodicity in candidate ORFs and call which ones are really being translated. Similar tools include **RibORF** (by Ji and colleagues), **ORF-RATER** (from Weissman's lab), and **PRICE** (Erhard and colleagues).

For **differential translation efficiency** between conditions, **Xtail** and **Ribodiff** are the standard tools. Both take paired Ribo-seq plus RNA-seq counts and produce per-gene estimates of differential TE with proper statistics.

For visualization, the standard approach is to load Ribo-seq tracks into **IGV** (Integrative Genomics Viewer) or **UCSC Genome Browser**, alongside RNA-seq tracks from the same samples. You can also use specialized viewers like **GWIPS-viz**, which is a web portal for browsing published Ribo-seq datasets — a great resource for checking whether your gene of interest has been profiled.

For browsing public data, **RPFdb** is a curated database of published ribosome profiling experiments. **GWIPS-viz** is the equivalent for visualization. Both are useful for sanity-checking what's been done in your favorite gene or pathway.

The headline: **The Ribo-seq tool ecosystem is mature. The key tools you need to know are riboWaltz for QC, plastid for custom Python analysis, RiboTaper or RibORF for novel ORF discovery, and Xtail for differential translation efficiency.** Combined with standard tools like STAR, cutadapt, and IGV, this is the working toolkit for modern ribosome profiling analysis.

---

## SEGMENT 16 — Integration with CLIP-seq, RNA-seq, and mass spec

Ribo-seq is most powerful when it's not used alone. The translation layer of biology connects to many other layers — RNA binding, RNA modifications, protein abundance, protein-protein interactions — and the most informative studies typically integrate Ribo-seq with one or more complementary techniques. Let me walk through the main integrations.

**Ribo-seq plus RNA-seq.** We've already covered this in Segment 8. Paired Ribo-seq and RNA-seq from the same samples lets you compute translation efficiency, which is the most fundamental derived measurement of ribosome profiling. Essentially every modern Ribo-seq study includes paired RNA-seq.

**Ribo-seq plus CLIP-seq.** CLIP-seq — crosslinking and immunoprecipitation followed by sequencing — maps where specific RNA-binding proteins (RBPs) sit on the transcriptome. Many RBPs regulate translation. By combining CLIP-seq for an RBP with Ribo-seq of the same cells (with and without the RBP), you can connect RBP binding sites directly to changes in ribosome footprint distribution. If an RBP binds at a uORF and silencing the RBP increases ribosome density on the downstream main ORF, you've directly linked the RBP to translational suppression of that main ORF. This kind of analysis has been important for understanding microRNA-mediated translation repression, RNA-binding protein regulation of specific transcripts, and the role of RNA modifications (which often involve modification-binding proteins detectable by CLIP).

\[Pause.\]

**Ribo-seq plus mass spectrometry.** Mass spec measures protein abundance directly. Combining Ribo-seq with quantitative proteomics from the same samples lets you triangulate: which transcripts are made (RNA-seq), which are translated (Ribo-seq), and what protein actually accumulates (mass spec). Discrepancies are informative. A gene with high Ribo-seq but low protein implies post-translational regulation — protein degradation, secretion, instability. A gene with low Ribo-seq but high protein implies a stable, long-lived protein that doesn't need continuous synthesis. Integration with mass spec is also the gold standard for confirming that novel small ORFs identified from Ribo-seq actually produce detectable peptide products — Ribo-seq says "ribosomes are translating here," mass spec says "the resulting peptide is present in the cell."

**Ribo-seq plus epitranscriptomics.** Modifications on mRNA — N6-methyladenosine (m6A) being the most studied — can affect translation. Methods like meRIP-seq and miCLIP map m6A sites across the transcriptome. Combining these with Ribo-seq lets you ask whether m6A sites in specific positions (5' UTR, near start codon, in the coding sequence, in the 3' UTR) affect ribosome density in predictable ways. The answer turns out to be yes — m6A in the 5' UTR can promote cap-independent translation, m6A in the coding sequence can affect elongation rate, m6A in the 3' UTR can affect mRNA stability and indirectly TE.

**Ribo-seq plus genetic perturbation.** Combining Ribo-seq with CRISPR knockouts of translation factors, chaperones, or RNA-binding proteins of interest lets you see the direct functional consequences. Knock out an initiation factor, do Ribo-seq, see which mRNAs depend on that factor most. Knock out a quality control factor, do Ribo-seq, see where stalled ribosomes accumulate.

The headline: **Ribo-seq is most informative in combination with other genomics layers — RNA-seq for translation efficiency, CLIP-seq for RBP integration, mass spec for protein-level confirmation, epitranscriptomics for modification effects.** No single assay reveals biology; the integrations are where the insight comes from.

---

## SEGMENT 17 — Limitations — input requirements, complexity, batch effects

I want to be honest about the limitations of Ribo-seq, because every method has them and the published literature can sometimes paper over them. If you're going to plan a Ribo-seq experiment, you should know what you're getting into.

**Limitation one: input material requirements.** Ribo-seq requires substantially more starting material than standard RNA-seq. A typical Ribo-seq experiment needs millions of cells or hundreds of milligrams of tissue — because after rRNA depletion, sucrose gradient enrichment, and library prep losses, you need a lot of input to end up with enough footprints to sequence well. This makes Ribo-seq challenging for rare cell populations, for small clinical biopsies, and for any application where input is limited. There has been progress on low-input Ribo-seq protocols — some can now work with hundreds of thousands of cells — but it's still far from the single-cell range. We'll talk about single-cell Ribo-seq in Segment 18.

**Limitation two: protocol complexity.** Ribo-seq is much more involved than RNA-seq. The sucrose gradient ultracentrifugation, the careful rRNA depletion, the small-RNA library prep — each step has more failure modes than the corresponding steps in standard RNA-seq. Getting clean Ribo-seq data takes practice, and the success rate is lower than for routine RNA-seq, especially for new operators or new sample types. The community has converged on several commercial kits and well-validated protocols, but it's still a more demanding wet-lab technique.

\[Pause.\]

**Limitation three: batch effects.** Because the protocol has so many steps, batch effects are pronounced. The exact concentration of cycloheximide, the exact RNase I activity, the exact sucrose gradient run, the exact rRNA depletion conditions — all of these can vary subtly between batches and produce systematic differences in the resulting data. The best practice is to process all samples in a single batch when possible, and when not possible, to use careful experimental design (randomization, blocking) and computational correction. Tools like RUVseq and ComBat can help with batch correction, but they're not magic.

**Limitation four: ribosome heterogeneity.** Standard Ribo-seq treats all ribosomes as equivalent. But ribosomes are actually heterogeneous — there are differences in ribosomal protein composition, rRNA modifications, and post-translational modifications across different cell types and conditions. The footprint patterns from these different ribosomes may differ subtly, and standard Ribo-seq averages over them. Specialized variants — particularly **selective ribosome profiling** — can address this, but it's a non-trivial complication.

**Limitation five: drug artifacts.** We covered cycloheximide artifacts in Segment 10. Any drug-based arrest method has artifacts. Drug-free flash-freeze protocols partly avoid this but introduce their own challenges (speed of freezing, tissue dissection).

**Limitation six: the difficulty of interpreting absolute density.** The number of ribosomes on a given mRNA depends on both initiation rate and elongation rate. A high density of ribosomes could mean lots of initiation, or it could mean slow elongation with normal initiation — these are not always distinguishable from standard Ribo-seq alone. Initiation-specific drugs (harringtonine) help disambiguate, but the absolute kinetic interpretation is harder than the per-gene comparative interpretation.

**Limitation seven: cost.** Ribo-seq costs more than RNA-seq per sample — typically $500 to $1500 per sample compared to $100-$300 for standard RNA-seq, and that's before you factor in the paired RNA-seq you almost always also need. For large clinical cohorts, this matters.

The headline: **Ribo-seq is more demanding, more expensive, and more artifact-prone than RNA-seq. It requires substantial input material, careful protocol execution, and thoughtful experimental design.** When it works, it gives you data that nothing else can give you. But you should plan accordingly.

---

## SEGMENT 18 — The frontier — single-cell Ribo-seq, in vivo profiling, AI-driven small ORF discovery

Finally, let's look at where the field is going. Ribosome profiling is fifteen years old as a technique, and three frontiers are currently active.

**Frontier one: single-cell ribosome profiling.** The dream is to do Ribo-seq on individual cells, the way we now routinely do single-cell RNA-seq. The challenge is the input requirement — standard Ribo-seq needs millions of cells, and a single cell has maybe ten thousand ribosomes, which is far below the input the standard protocols can handle. Several groups are working on protocols that miniaturize each step, use microfluidic devices to handle tiny volumes, and add specialized amplification and barcoding strategies. Early single-cell Ribo-seq publications have appeared but the techniques are not yet at the routine, mature level that single-cell RNA-seq reached around 2018. Watch this space — within five years, I expect single-cell Ribo-seq to be a real technique, and when it is, it will transform our understanding of translation heterogeneity across cell types in tissues.

\[Pause.\]

**Frontier two: in vivo ribosome profiling.** Most Ribo-seq is done on cultured cells or homogenized tissues. There's growing interest in doing it in vivo — in intact animals — to look at translation in specific cell types in specific tissues at specific physiological states. The technical challenges include getting the arrest agent into the right tissue fast enough, preserving ribosome integrity through tissue dissection, and dealing with the mix of cell types in any tissue. Some elegant approaches use cell-type-specific ribosomal protein tags (the TRAP method — translating ribosome affinity purification — uses GFP-tagged ribosomal proteins expressed under cell-type-specific promoters, then immunoprecipitates the tagged ribosomes from whole tissue lysates). This lets you do Ribo-seq on specific neuronal subtypes, on specific immune cells in tumors, on specific cells in developing embryos. The combination of in vivo profiling with cell-type-specific TRAP is one of the most exciting current developments.

**Frontier three: AI-driven small ORF discovery.** We talked about small ORFs and microproteins in Segment 7. The challenge of identifying which short ORFs are biologically functional versus which are translational noise is huge. Recent work has applied deep learning models — trained on the combined evidence of Ribo-seq signal, evolutionary conservation, mass spec detection, and sequence features — to predict which small ORFs encode functional peptides. Models like RiboMIMO and translation-focused variants of protein language models are being developed. The goal is to build a high-confidence catalog of functional microproteins across species, and to predict their functions from sequence alone. This is, in my view, where the next generation of post-genomic biology lives — in the small ORFs that the original annotations missed and that Ribo-seq plus AI will catalog.

**Other frontiers.** Real-time ribosome profiling (with rapid sample collection and processing), ribosome profiling combined with optogenetic stress induction (to capture translation responses on minute timescales), Ribo-seq of clinical FFPE samples (still very difficult), ribosome profiling integrated with cryo-EM (to connect the position-level data with structural states of the ribosome), Ribo-seq in microbiomes (to ask which species are actively translating which functions in mixed communities) — all of these are active areas of method development.

The translation layer of biology has been understudied relative to transcription, partly because measuring translation was harder. Ribo-seq fixed that. We're now in the middle of a fifteen-year run where translation regulation, micropeptides, co-translational quality control, ribosome heterogeneity, and viral translation hijacking have all become tractable areas of study. The next fifteen years will see this knowledge enter clinical use — translation-targeted cancer therapies, microprotein-based diagnostics, antiviral drugs that target translation specifically.

\[Pause.\]

Here's where I want to leave you. **Translation matters. The cell can't function without it. And until 2009, we had no genome-wide way to see translation directly. Ribo-seq changed that. Every cell, every condition, every disease has a translation program, and Ribo-seq is how we read it.**

The combination of clever biochemistry — using the ribosome's body as a shield to isolate footprints — with cheap parallel sequencing has given us a window into translation that previous generations of biologists would have considered magic. Use that window. When you read a Ribo-seq paper, you now have the conceptual tools to understand what it's actually showing you. When you plan a translation-focused experiment, you have the methods toolkit to choose the right approach. And when you find yourself in front of a Ribo-seq track on a genome browser, you can read the periodicity, the start and stop peaks, the stalls, the uORFs — you can read translation, codon by codon, the way the cell itself reads it.

That's the lecture. Thanks for staying with me for two hours. Questions.

---

## APPENDIX

**Key references**

- Ingolia, N. T., Ghaemmaghami, S., Newman, J. R. S., Weissman, J. S. (2009). Genome-wide analysis in vivo of translation with nucleotide resolution using ribosome profiling. _Science_ 324, 218-223. (The founding paper.)
- Ingolia, N. T., Brar, G. A., Rouskin, S., McGeachy, A. M., Weissman, J. S. (2012). The ribosome profiling strategy for monitoring translation in vivo by deep sequencing of ribosome-protected mRNA fragments. _Nature Protocols_ 7, 1534-1550. (Detailed protocol.)
- Brar, G. A. & Weissman, J. S. (2015). Ribosome profiling reveals the what, when, where and how of protein synthesis. _Nature Reviews Molecular Cell Biology_ 16, 651-664.
- Calviello, L. & Ohler, U. (2017). Beyond read-counts: Ribo-seq data analysis to understand the functions of the transcriptome. _Trends in Genetics_ 33, 728-744.
- Lauria, F. et al. (2018). riboWaltz: Optimization of ribosome P-site positioning in ribosome profiling data. _PLoS Computational Biology_ 14, e1006169.
- Andreev, D. E. et al. (2017). Insights into the mechanisms of eukaryotic translation gained with ribosome profiling. _Nucleic Acids Research_ 45, 513-526.

**Key terms**

- **Ribo-seq / ribosome profiling**: Genome-wide sequencing of ribosome-protected mRNA fragments to map translating ribosomes at codon resolution.
- **Footprint**: The ~30-nucleotide piece of mRNA protected from nuclease digestion by an enclosed ribosome.
- **3-nucleotide periodicity**: The signature of real Ribo-seq data — reads pile up at codon boundaries, reflecting the codon-stepping nature of translation.
- **uORF**: Upstream open reading frame — a short ORF in the 5' UTR of an mRNA that is translated, often suppressing translation of the downstream main ORF.
- **smORF / sORF**: Small open reading frame, typically defined as fewer than 100 codons, encoding a microprotein.
- **Micropeptide / microprotein / SEP**: A protein shorter than 100 amino acids, often encoded by smORFs in regions previously annotated as non-coding.
- **Translation efficiency (TE)**: The ratio of Ribo-seq signal to RNA-seq signal for a gene; a measure of how heavily loaded with ribosomes each transcript is.
- **CHX / cycloheximide**: The standard eukaryotic translation elongation inhibitor used to arrest ribosomes before lysis in Ribo-seq.
- **Harringtonine**: An initiation-step inhibitor that allows ribosomes to find start codons but blocks elongation; used to map translation initiation sites genome-wide.
- **SeRP**: Selective ribosome profiling — Ribo-seq combined with immunoprecipitation of a specific factor, isolating only the ribosomes engaged with that factor.
- **Disome-seq**: Profiling of ribosome collisions — pairs of ribosomes stuck together because the leading one stalled.
- **TRAP**: Translating ribosome affinity purification — cell-type-specific Ribo-seq using GFP-tagged ribosomal proteins under cell-type-specific promoters.

**Key tools**

- **STAR, bowtie2**: Read aligners for Ribo-seq.
- **cutadapt, trim_galore**: Adapter trimming.
- **riboWaltz**: P-site offset calculation, periodicity QC, meta-profiles.
- **plastid**: Python library for ribosome profiling and position-level analysis.
- **RiboTaper, RibORF, ORF-RATER, PRICE**: ORF calling for novel translated regions.
- **Xtail, Ribodiff**: Differential translation efficiency between conditions.
- **GWIPS-viz, RPFdb**: Public databases and browsers for ribosome profiling data.
- **IGV, UCSC Genome Browser**: Generic genome browsers for visualizing Ribo-seq tracks.

**Approximate cost and scale (as of mid-2020s)**

- Per-sample Ribo-seq cost: $500-$1500 (library prep plus sequencing).
- Per-sample RNA-seq (paired): $100-$300.
- Input requirement: ~5-50 million cells for standard protocols; low-input variants down to ~100,000 cells.
- Sequencing depth: 20-50 million reads per Ribo-seq sample is typical; deeper for novel ORF discovery.
- Wet-lab time: 3-5 days for a full Ribo-seq workflow from cells to library.

