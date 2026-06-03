# ChIP-seq — Chromatin Immunoprecipitation Followed by Sequencing

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for board work or discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The central question of regulatory genomics

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about ChIP-seq — chromatin immunoprecipitation followed by sequencing. That's a mouthful of a name, and we're going to unpack every word of it over the next two hours, but I want to start somewhere else. I want to start with the question the technique is built to answer, because if you understand the question, the technique is almost inevitable. It's not just a clever lab trick. It's the obvious thing to do, once you accept the problem.

So here is the question. You have a human cell. Inside that cell there is roughly two meters of DNA crammed into a nucleus about ten microns across — six billion base pairs of sequence, two copies of the genome, all stuffed into a space smaller than a speck of dust. On that DNA, at any given moment, there are thousands of different proteins sitting at thousands of different locations. Some of those proteins are turning genes on. Some are turning genes off. Some are marking the DNA so that other proteins know what to do with it next. Some are anchored to one specific binding site that's six base pairs long and appears nowhere else in the entire three-billion-base-pair genome. The cell's identity, its behavior, its fate — whether it's a liver cell or a neuron, whether it's healthy or cancerous, whether it's about to divide or about to die — is determined, to an enormous degree, by which proteins are sitting where on the DNA.

The question of regulatory genomics, the central question, is this: **given a specific DNA-binding protein, where on the genome is it bound?** Not in general. Specifically. Which positions, in which cells, in which conditions. That's it. That's the question. ChIP-seq is the technique that answers it.

\[Pause.\]

Here's the analogy I want you to hold in your head for the next two hours. Imagine you're trying to figure out where someone has been in a city. Not in general — exactly where. Every block they walked down. Every doorway they entered. The city is huge — three billion address points. The person — let's call them the transcription factor — is small. You can't just look from above, because they're invisible. What you can do, though, is grab them, and then ask them what they were holding when you grabbed them. If they were standing on a particular street corner, holding a copy of the local newspaper, then you can pull that newspaper out of their hand and read the address printed on it. Do this for millions of copies of the same person — millions of copies of the same protein, in millions of cells, all caught at the same moment — and you get a frequency map of which addresses they were standing at most often. **ChIP-seq is the technique of pulling a transcription factor out of the cell and asking it, "what DNA were you holding onto?"** That's it. That's the whole concept. The rest is engineering.

If you walk out of here in two hours and you can do three things — one, sketch the ChIP-seq workflow on a whiteboard and explain what each step does and why; two, explain in plain English why the antibody is the single most important reagent in the entire experiment and what happens when it's bad; three, look at any modern paper that says "we performed ChIP-seq for transcription factor X" and have a real intuition for what that data looks like, what controls were needed, and what the peaks mean — then we've succeeded. Everything else hangs off those three.

\[Pause.\]

One more thing before we get into the molecule and the method. ChIP-seq is not one invention. It's two. The first half — chromatin immunoprecipitation, or ChIP — has been around since the 1980s. It was a per-gene assay; you'd ChIP a protein, then ask whether your favorite gene was enriched. It worked, but it was slow and gene-by-gene. The second half — sequencing the immunoprecipitated DNA on a next-generation platform — was added in 2007, in a flurry of three papers in _Nature_ that arrived almost simultaneously. The moment those two ideas combined, transcription factor binding studies went from a question you asked one gene at a time to a question you asked every gene at a time. Genome-wide. In one experiment. That's the moment regulatory genomics became a quantitative field. So in this lecture we're tracing both halves of the lineage — the immunology side, where antibodies come from and how they work, and the sequencing side, which we covered in an earlier lecture but will recap as needed — and then we're going to see how the marriage of the two transformed our map of the genome.

---

## SEGMENT 2 — Chromatin biology — DNA wrapped on nucleosomes

Before we can talk about pulling proteins off DNA, we have to talk about what DNA looks like inside a cell. Because here is something that gets glossed over in introductory textbooks, and it matters enormously for how ChIP-seq works in practice. The DNA in your nucleus is not a long, naked, floppy string. It is wrapped, tightly and systematically, around protein spools called nucleosomes. The whole assembly — the DNA plus the spools plus a bunch of other proteins bound to both — is called **chromatin**. And that word is doing real work; it tells you that you are not looking at DNA in isolation. You are looking at a packaged, regulated, three-dimensional structure, where access to any given stretch of sequence depends on what proteins are sitting on it.

A nucleosome is a beautiful little machine. It is built from eight histone proteins — two copies each of four kinds, called H2A, H2B, H3, and H4 — assembled into a roughly disk-shaped octamer. Around that octamer, the DNA wraps about one and three-quarter turns — roughly 147 base pairs of DNA per nucleosome. Then there's a short stretch of linker DNA — usually 20 to 80 base pairs — and then the next nucleosome, and so on. If you stretched out a chromosome and zoomed in, it would look like beads on a string. The beads are the nucleosomes. The string is the DNA between them. Most of your genome lives in this beads-on-a-string conformation, and most of the time, the beads are packed even tighter — into higher-order structures, fibers, loops, and ultimately the dense chromatin you can see under a light microscope when a cell is about to divide.

\[Pause.\]

Here's why this matters for our story. Two reasons.

**First**, the histones themselves are heavily decorated with chemical modifications, and those modifications carry information. The N-terminal tails of histones — the floppy ends that stick out from the disk — get methylated, acetylated, phosphorylated, ubiquitinated, all in patterns that are not random but instead correlate strongly with whether the underlying DNA is being actively transcribed, silenced, marked for repair, or set up for replication. If you can map where in the genome a specific histone modification sits — say, the trimethylation of lysine 4 on histone H3, called H3K4me3 — you have a map of which regions carry that mark. And as we'll see later, certain marks are essentially tags that say "active promoter here" or "active enhancer here" or "this region is shut off." Histone modification ChIP-seq is one of the two big things we use the method for, and the entire field of epigenomics is built on it.

**Second**, the packaging affects accessibility. If you want a transcription factor to bind a specific sequence, that sequence has to be physically accessible — not buried inside a tightly wound nucleosome, not hidden in a fold of compacted heterochromatin. So one of the things ChIP-seq ends up mapping, almost incidentally, is which regions of the genome are accessible enough for proteins to land on. The technique answers "where is protein X bound?" — but the answer is also necessarily "where is the DNA open enough that protein X _could_ be bound?" That's a subtle but important point. We'll come back to it when we talk about complementary techniques like ATAC-seq.

For now, the picture you should have: the genome is not naked DNA. It is a packaged, modified, three-dimensional polymer, with nucleosomes every couple of hundred base pairs, gaps between them, and a constellation of other proteins — transcription factors, polymerases, repair enzymes, structural proteins — sitting on top, dynamically arriving and leaving. ChIP-seq is the technique that takes a snapshot of one protein's footprint on this landscape, by freezing the contacts in place and then pulling the protein out with an antibody. The chromatin biology — the nucleosomes, the modifications, the packaging — is the substrate on which the assay operates.

\[Pause.\]

One more piece of vocabulary you'll see in any paper. We talk about **euchromatin** — loosely packed, accessible, mostly transcriptionally active — and **heterochromatin** — densely packed, inaccessible, mostly silenced. These are not crisp categories; they're a continuum, and the boundaries shift dynamically as a cell decides which genes to express. But when you see those words, just substitute "open and active" versus "closed and silent." Most of the action — most of the regulatory binding we care about — happens in or at the edges of euchromatin. Heterochromatin tends to be quieter, dominated by structural marks like H3K9me3. We'll see both worlds when we get to the histone mark zoo in Segment 10.

---

## SEGMENT 3 — Pre-NGS ChIP — the gene-by-gene era

So let me take you back to the pre-2007 world, because the way ChIP was practiced for about twenty years before sequencing was added to the back end tells you a lot about what the technique fundamentally is.

The basic idea — chromatin immunoprecipitation — was worked out in the early 1980s. The key insight, and it is a beautiful insight, came from a question about how proteins interact with DNA in living cells. People had been studying transcription factor binding in test tubes for years, mixing purified protein with purified DNA and asking what binds where. But test tube binding doesn't necessarily reflect what's actually happening inside a cell, where the DNA is packaged into chromatin, where dozens of other proteins are competing for the same sites, where local concentrations and modifications and three-dimensional folding all influence binding. The question people wanted to ask was: in the actual cell, in the actual nucleus, with all the in-vivo conditions intact — where is protein X really sitting?

The clever move, attributed to several groups but most cleanly to John Lis and to David Gilmour in the mid-1980s, was to chemically freeze the protein-DNA contacts in place _before_ disrupting the cell. The reagent of choice was formaldehyde — a small, reactive molecule that forms covalent bonds between nearby amines, including the amine groups on proteins and on DNA bases. When you dump formaldehyde onto living cells for a few minutes, any protein that happens to be touching DNA at that instant gets covalently glued to it. The cell is now frozen. The protein cannot fall off the DNA, no matter what you do to it afterward — short of reversing the crosslinks chemically, which we'll do at the end.

Once you've crosslinked, you lyse the cells, you fragment the DNA into smaller pieces — originally by sonication, breaking the chromatin into shards of about a thousand base pairs — and now you have a soup of protein-DNA complexes, each one a chunk of fragmented chromatin with whichever proteins happened to be bound at the moment of fixation, all still covalently attached. To pull out the one protein you care about, you add an antibody specific for that protein. The antibody grabs your protein and, via the covalent crosslink, drags along whatever DNA the protein was bound to. You capture the antibody — typically by binding it to magnetic beads — wash away everything that's not stuck to your protein of interest, reverse the crosslinks with heat and salt, purify out the DNA, and now you have a small pool of DNA fragments that came from wherever in the genome your protein was bound. That's the ChIP. That's the immunoprecipitation step.

\[Pause.\]

Now, in the 1980s and 1990s, the question of what you _did_ with that DNA was the bottleneck. You couldn't sequence it — sequencing was Sanger, slow, expensive, gene by gene. So what you did was you'd already have a candidate region in mind — say, the promoter of a specific gene — and you'd use PCR with primers in that region to ask: in the ChIP'd DNA, am I enriched for this specific promoter sequence compared to a no-antibody control? If yes, the protein was bound there. If no, it wasn't. This was called **ChIP-PCR**, and it was a per-region, hypothesis-driven assay. You had to guess where the protein might be sitting, and then test those guesses one at a time. There was no genome-wide view. There was no map.

In the early 2000s, people got tired of that limitation, and they coupled ChIP to **microarrays** — the technology where you spot tens of thousands of short DNA probes on a glass slide and use hybridization to read out, in parallel, how much of each sequence is present in a sample. ChIP'd DNA could be labeled with a fluorescent dye and hybridized to an array carrying probes from across, say, all the known human promoters. The result was a genome-wide-ish map of binding, in the sense that every promoter on the array got a measurement. This technique was called **ChIP-chip** — the second "chip" being for the microarray. ChIP-chip was the dominant ChIP method from roughly 2002 to 2007, and a lot of foundational work on transcription factor biology was done with it.

But ChIP-chip had real limitations. The first was that you could only ask about regions you'd put on the array — typically promoter-tiling arrays or known regulatory regions. Most of the genome was dark to it. The second was that the dynamic range of microarray hybridization is compressed — strong signals and weak signals both saturate, so you couldn't easily distinguish a really strong binding event from a moderate one. The third was that custom arrays were expensive, and array designs were inflexible — you had to commit to your set of probes before the experiment. ChIP-chip was a step forward from ChIP-PCR, but it was clearly an intermediate stop, not the destination.

The destination was sequencing. By 2007, the Illumina platform — then still called Solexa, recently acquired — was just starting to come online as a way to read out millions of DNA fragments at once. And it was suddenly obvious to everyone in the chromatin field what to do. Instead of hybridizing the ChIP'd DNA to an array, just sequence it directly. Get reads from every fragment, map those reads to the genome, count how many reads pile up at each position, and let the pileup itself tell you where the protein was bound. No probe design. No array commitment. Every base of the genome, simultaneously, with quantitative read counts. The math worked out. The technology was ready. And in 2007, ChIP-seq was born.

---

## SEGMENT 4 — The 2007 Nature papers — the moment it became standard

The transition from ChIP-chip to ChIP-seq did not creep in gradually. It happened in a roughly six-month window in 2007, marked by three papers in _Nature_ and _Nature Methods_ that landed almost on top of each other and that, by the standards of how field shifts usually go, essentially closed the book on microarrays for this application overnight.

Let me name the three. In June 2007, Gordon Robertson and colleagues at the BC Cancer Agency, working with the Illumina platform — at that point still called Solexa — published a paper applying short-read sequencing to ChIP'd DNA from the transcription factor STAT1 in human cells stimulated with interferon-gamma. They mapped STAT1 binding sites genome-wide. Their key contribution was demonstrating that you could throw away the array entirely and let the sequencing reads pile up at binding sites with enough resolution to identify thousands of sites that hadn't been characterized before. The paper was a methods paper as much as a biology paper, and it set the template — ChIP your protein, sequence the DNA, map the reads, call peaks, profit.

In July 2007, Tarjei Mikkelsen and colleagues in the lab of Eric Lander at the Broad Institute published the second landmark paper. Their focus was different. They weren't mapping a single transcription factor; they were mapping multiple histone modifications across multiple cell types — mouse embryonic stem cells, neural progenitors, and differentiated cells. The result was a genome-wide map of how chromatin states change as cells differentiate, with H3K4me3 marking active promoters, H3K27me3 marking developmentally silenced genes, and the now-famous concept of **bivalent domains** — regions carrying both marks simultaneously in stem cells, poised to commit one way or the other on differentiation. The biology in that paper was as important as the method; it gave the chromatin community its first real glimpse of how the epigenome reconfigures itself during cell fate decisions.

The third paper, by Artem Barski and colleagues in Keji Zhao's lab at the NIH, published just before the others in May 2007 in _Cell_ but in the same window, applied ChIP-seq to thirty-seven different histone modifications in human T cells. Thirty-seven. In one paper. Suddenly the chromatin landscape was being characterized at a scale that ChIP-chip would have needed years to approach.

\[Pause.\]

What I want you to take from this segment is not the names — though Robertson, Mikkelsen, and Barski are the ones to remember if you're going to invoke the origin story — but the suddenness. In the spring of 2007, ChIP-chip was the standard. By the end of 2007, three high-profile demonstrations had made ChIP-seq the obvious default for anyone with access to an Illumina machine. By 2009, hardly anyone was publishing new ChIP-chip studies. The shift was clean. The cost per binding site dropped by orders of magnitude. The genome coverage went from "regions we put on the array" to "literally every base." And the data became compatible with all the other sequencing-based assays — RNA-seq, ATAC-seq, bisulfite sequencing — which meant the same alignment tools and quantification pipelines could process everything.

There's a methodological lesson here that's worth pausing on. ChIP-chip was a complete technique. It worked. It produced good data. It published well. But it was matched to an output format — the microarray — that had a structural ceiling. The moment a higher-resolution, higher-throughput output format appeared, the upstream chemistry — the ChIP itself — was unchanged, but the downstream readout shifted, and the whole field rebadged itself. ChIP-seq is, in a real sense, just ChIP with a better tail end. The wet lab steps for the immunoprecipitation are mostly the same as they were in 1995. What changed is what you do with the DNA at the end. That's the story of a lot of modern molecular biology — the underlying capture chemistry stays roughly constant; the readout gets cheaper and broader, and the whole field tilts toward the new readout.

That said, even the wet lab steps got rethought over the next decade, because once you knew you'd be reading out genome-wide, the experimental design started to matter in ways it didn't when you were just looking at one promoter at a time. Specificity, controls, antibody validation, background normalization — all became central. Let's now walk through the modern workflow in detail.

---

## SEGMENT 5 — The experimental workflow, end to end

Let me lay out the modern ChIP-seq workflow, top to bottom, the way you'd actually do it in a wet lab today. Five stages. I'll name them, then unpack each.

**Stage one: crosslinking.** **Stage two: fragmentation.** **Stage three: immunoprecipitation.** **Stage four: reverse crosslinking and DNA purification.** **Stage five: library prep and sequencing.** Five stages. Each one has its own failure modes, its own optimization tricks, its own quirks. Let's walk through them.

**Stage one: crosslinking.** You start with living cells — usually millions of them. You add formaldehyde to the culture medium, typically at one percent for ten minutes at room temperature. Formaldehyde diffuses into the cells, into the nuclei, and forms covalent crosslinks between amine groups on proteins and amine groups on DNA bases that are within a couple of angstroms of each other. The result is that any protein in close contact with DNA gets glued to that DNA. The reaction is then quenched with glycine, which mops up the excess formaldehyde.

The analogy here is important. **Formaldehyde crosslinking is freezing the protein-DNA contact in place so the protein doesn't fall off during the wash.** Without crosslinking, the moment you lyse the cell and dump the chromatin into a tube, the high salt and the dilution would cause most transcription factors to dissociate from the DNA. They have residence times measured in seconds to minutes. By the time you've purified anything, they'd be gone. Crosslinking buys you time. It makes the assay possible at all.

There are limits, though. Crosslink for too long and you over-fix the chromatin — proteins get linked to other proteins, the DNA becomes hard to fragment, the antibody loses access to its epitope because it's now buried in a tangle of crosslinked junk. The standard formaldehyde fixation is a balance: long enough to capture the contacts, short enough not to scramble everything. Ten minutes at one percent is the canonical setting. For some specialized cases — say, mapping proteins that touch DNA only transiently or indirectly — people use dual crosslinking, where they first add a longer-armed crosslinker like DSG, then formaldehyde, to capture protein-protein interactions before locking the whole assembly to the DNA.

\[Pause.\]

**Stage two: fragmentation.** Now that the chromatin is fixed, you need to break it up — specifically, into pieces small enough that each piece contains roughly one binding event, not five or ten. The classical method is **sonication**. You put the crosslinked cells (or isolated nuclei) into a tube and apply high-frequency sound waves that shear the chromatin mechanically. The output is a tube of chromatin fragments, ideally a couple hundred base pairs each. The fragmentation is, by design, random — the breaks happen wherever the sound waves happen to fracture the DNA, with some preference for accessible regions but no real sequence specificity.

The analogy: **sonication is breaking the chromatin into roughly 200-base-pair shards so you can pull out the small region the protein was sitting on.** If your fragments were a thousand base pairs long, then when you pulled out a transcription factor bound at one specific position, you'd also be pulling out the eight hundred base pairs around it, blurring your binding site to a wide smear. Two hundred base pairs is short enough to localize the binding to within roughly half a nucleosome, which is good resolution for most purposes. Some experiments substitute an enzymatic fragmentation with **micrococcal nuclease**, MNase, which preferentially digests linker DNA between nucleosomes — and we'll see this come back later when we discuss CUT&RUN.

Getting fragmentation right is finicky. Too little sonication and the fragments are too long and your peaks are broad and mushy. Too much sonication and you destroy the chromatin structure, sometimes denaturing proteins or making the epitopes inaccessible to the antibody. Most protocols require titrating sonication conditions for each new cell type — too many cycles for one cell type might be too few for another.

**Stage three: immunoprecipitation.** This is the moment of truth. You take your fragmented, crosslinked chromatin and you add an antibody specific for the protein you want to map. The antibody binds your protein. You then add magnetic beads coated with something — typically protein A or protein G — that binds the Fc region of the antibody. (Recall from the antibodies lecture: protein A and protein G are bacterial proteins that grab antibody handles, originally an immune evasion trick by the bacteria, repurposed by biochemists as a handle for pulling antibodies out of solution.) You incubate. The antibody — and via the antibody, your protein of interest — and via the protein, the DNA crosslinked to it — all end up stuck to the magnetic beads. You put the tube on a magnet, the beads stick to the side, and you pour everything else off.

The analogy: **the antibody is the fishing hook — it specifically grabs the protein you want; everything else washes off.** This is the magic of ChIP. The antibody's specificity, multiplied by the magnetic capture, lets you pull one protein — one specific protein out of the tens of thousands in the nucleus — out of the soup, along with whatever DNA was bound to it. Everything that wasn't bound to your protein gets washed away. The wash steps — three, four, five rounds of buffer, increasing in stringency — are what give the assay its signal-to-noise. Stringent enough washes and the only DNA left on the beads is DNA that was genuinely associated with your protein. Too stringent and you wash off the antibody-protein complex itself; too gentle and you carry over background DNA that wasn't really bound to your target. The wash conditions, like the sonication, are an optimization.

**Stage four: reverse crosslinking and DNA purification.** Now you have your antibody, your protein, and your DNA all stuck to the magnetic beads. To get the DNA out, you reverse the crosslinks — typically by heating the sample to 65 degrees overnight in a high-salt buffer, which slowly hydrolyzes the methylene bridges that formaldehyde introduced. You then digest the protein with proteinase K — an enzyme that chews up protein into amino acids and small peptides — and clean up the DNA with a column or beads. You end up with a tube of purified, free DNA fragments — typically a few nanograms to a few hundred nanograms, depending on how abundant your protein was and how good the antibody was.

**Stage five: library prep and sequencing.** This is now identical to any other Illumina library prep, which we covered in detail in the Illumina lecture. End repair, A-tailing, adapter ligation, indexing, PCR amplification, size selection, and then onto the flow cell. The clusters generate, the reversible terminator chemistry runs, the camera takes pictures, and a couple of days later you have tens of millions of paired-end reads, each one tagged with the index of which sample it came from. Those reads get aligned to the reference genome using a tool like Bowtie2 or BWA, and now you have a BAM file — a positional list of where every read landed. That BAM file, plus the analogous BAM from your input control, is the raw material for everything downstream.

That's the workflow. Crosslink, fragment, IP, reverse, sequence. Five stages. Each one has its tricks. But the conceptual core — antibody pulls protein, protein drags DNA, sequence the DNA — is unchanged from the original 1980s ChIP. The sequencing is just what you do with the DNA at the end.

---

## SEGMENT 6 — The antibody question — quality dominates everything

I want to spend a whole segment on antibodies, because if you take one practical lesson from this lecture, it is that ChIP-seq lives or dies on antibody quality. Every other variable — the sonication, the wash conditions, the sequencing depth, the peak caller — matters at the margin. The antibody matters at the center. A great experiment with a bad antibody produces garbage. A mediocre experiment with a great antibody produces real data. There is no engineering around this.

Let me explain why. The antibody is the only thing in the entire workflow that knows what you're trying to capture. The sonication doesn't know. The beads don't know. The sequencer certainly doesn't know. The protocol grabs whatever the antibody grabs. If the antibody grabs your target — beautiful, you map the target. If the antibody grabs your target plus three off-target proteins that look slightly similar — you map a smeared blend of four binding profiles. If the antibody grabs nothing because the epitope was disrupted by the crosslinking — you get random background that looks vaguely like input. If the antibody grabs the wrong thing entirely — and we'll talk about how often this happens — you confidently publish a map of something that isn't your protein at all.

\[Pause.\]

The properties you want in a ChIP-grade antibody are quite specific, and not every antibody on the market — even ones that look great on a Western blot — will meet them. You need:

**One: specificity.** The antibody should bind your target and only your target. In a Western blot, where you've denatured everything and separated by size, you can tolerate some cross-reactivity because the sizes distinguish targets. In ChIP, where you're pulling things out of a soup of native-ish proteins, any cross-reactivity ends up in your final data.

**Two: native-state binding.** The antibody has to bind your target in its formaldehyde-crosslinked, partially denatured, three-dimensional native conformation. Many antibodies are raised against linear peptides — short stretches of the protein's amino acid sequence — and bind beautifully when the protein is denatured in a Western blot, but the same epitope is buried inside the folded protein and inaccessible in the native state. Those antibodies fail in ChIP.

**Three: crosslinking tolerance.** The epitope shouldn't be destroyed by formaldehyde fixation. Some epitopes — particularly those involving lysines or arginines — get chemically modified by formaldehyde and become invisible to the antibody.

**Four: enough affinity.** The antibody has to bind tightly enough to survive the wash steps without dissociating. Low-affinity antibodies wash off, and your signal drops to background.

You can imagine that finding antibodies that satisfy all four criteria for any given protein is hard. And here's the brutal truth, which the field has been increasingly open about over the last fifteen years: a lot of commercial antibodies marketed as ChIP-grade fail at one or more of these criteria. Studies that have systematically tested transcription factor antibodies — particularly the work coming out of the ENCODE consortium's antibody validation effort — have found that **many TF antibodies fail validation**, sometimes more than half in some categories. That's the antibody crisis, and we'll come back to it in Segment 12 when we talk about why CUT&RUN was invented.

\[Pause.\]

What does antibody validation look like in practice? The gold-standard tests are:

**Knockout validation.** Run your ChIP in a cell line where the target protein has been genetically deleted. If the antibody is specific, you should get zero or background signal — no peaks. If you still see peaks, the antibody is binding something other than your target.

**Tag validation.** Engineer a tagged version of your protein — say, with a Flag tag or an HA tag — and ChIP both with an antibody against the natural protein and with an antibody against the tag. If both antibodies pull out the same binding sites, your antibody is probably real. If they disagree, something is off.

**Peptide competition.** Pre-incubate your antibody with the peptide it was raised against, then do the ChIP. The peptide should block specific binding, and your peaks should disappear or weaken substantially. If they don't, your antibody isn't specific.

These validations are time-consuming and expensive, and a lot of papers don't do them. The result is a literature where some published ChIP-seq experiments are, frankly, mapping the binding profile of whatever the antibody happened to grab, which may or may not be the labeled protein. This is one of the largest sources of irreproducibility in regulatory genomics. The histone modification ChIP-seqs tend to be more reliable, because anti-histone antibodies are well-characterized, and the same epitopes are widely studied across hundreds of labs. The transcription factor ChIP-seqs are where the variance is. Caveat emptor.

Now, with all that said: when the antibody is good, ChIP-seq is one of the most powerful methods in molecular biology. The maps it produces are genuinely informative, mechanistically interpretable, and integrable with other genomic data. The technique works. It's just demanding about its reagents. Hold that in mind as we get into the controls and the math in the next segment.

---

## SEGMENT 7 — Input controls and the question of background

Let me ask you a question. Suppose you've done a beautiful ChIP-seq experiment. The antibody was validated. The crosslinking went well. The sonication produced clean 200-base-pair fragments. The library was sequenced to thirty million reads. You align them to the genome, and you see read pileups at thousands of positions. How do you know which pileups are real binding events and which are just background?

This question is more subtle than it looks. Because here's the thing — even in a no-antibody, no-IP control, you will get reads distributed across the genome. Some regions of the genome are intrinsically over-represented in any sequencing experiment, for reasons that have nothing to do with your protein. **Open chromatin** — accessible regions like active promoters and enhancers — fragments more easily under sonication, so it's over-represented in the input. **Repetitive regions** and **high-copy elements** like ribosomal DNA repeats give you huge read pileups just because the sequence appears many times in the genome. **GC-biased regions** get amplified preferentially during the PCR step of library prep. **Mappability** — the ease with which short reads can be uniquely placed on the reference genome — varies across the genome, and unmappable regions look like deserts even when they're real.

If you just looked at the raw ChIP-seq read pileup and called every pile a peak, you'd call thousands of peaks that have nothing to do with your protein — they're just artifacts of the underlying fragmentation, amplification, and alignment process. To separate signal from background, you need a baseline. A reference for what the reads should look like in the absence of any specific enrichment by your antibody.

\[Pause.\]

That baseline is the **input control**. The idea is simple. You take a portion of your crosslinked, fragmented chromatin — the same starting material as the IP sample — but you skip the immunoprecipitation step. You just reverse the crosslinks, purify the DNA, make a library, and sequence it. The result is a genome-wide sample of "what the chromatin fragmentation produces, before any antibody is added." Every bias of the upstream process is captured in the input: the sonication preferences, the GC bias, the mappability landscape, the repeats. The input is the null model. It's what you'd see if you had an antibody that bound nothing in particular.

The analogy: **the input control is the negative control — sequence chromatin without the IP. Anywhere the ChIP signal is just background-like, you ignore. Anywhere the ChIP signal jumps above the input baseline, you call a peak.** That's it. The whole logic of peak calling reduces to a comparison between the ChIP sample and the input.

There are variants of the control idea. Some people use an **IgG control** — they do the entire IP protocol but use a non-specific antibody (just generic IgG that doesn't target anything). The advantage is that it captures any non-specific stickiness of the bead/antibody system. The disadvantage is that the IgG control typically yields very little DNA, and the reads are noisy because there's so little input to the library prep. In practice, input control is the standard, IgG is occasionally a supplement. For some experiments, particularly histone modification ChIP-seq, people use an **H3 control** — total H3 ChIP — to normalize for nucleosome occupancy, since the question isn't "is there chromatin here?" but "is this _modified_ chromatin here?"

\[Pause.\]

A practical note. Input is not optional. If you ever read a ChIP-seq paper that doesn't include an input control, treat it with deep skepticism. The peaks they call could be entirely artifactual. The same applies to comparisons between samples — you need an input control for each cell type and condition, because the background biases shift with the chromatin state. ENCODE consortium standards require input controls. So do all the major peak-calling tools — they won't even run without one. If you're designing a ChIP-seq experiment from scratch, budget for the input library in your sequencing costs from day one.

The deeper conceptual point here is that ChIP-seq is fundamentally a comparative assay. You're never asking "is there read coverage at position X?" You're asking "is there _more_ read coverage at position X in the IP than in the input?" The signal you care about is enrichment, not absolute counts. This will shape everything we do in the next segment, where the question is: how do you actually quantify that enrichment and call peaks?

---

## SEGMENT 8 — Peak calling and the math of enrichment

Once you have your aligned reads from the IP and from the input, the analytical question becomes: at which positions in the genome is the IP signal significantly higher than the input baseline? Every position with a significant local enrichment is a **peak** — a candidate binding site for your protein.

The dominant tool for this, for the better part of a decade, has been **MACS** — Model-based Analysis of ChIP-Seq — originally written in 2008 by Tao Liu and colleagues in Shirley Liu's lab at Harvard. The most recent version, MACS2 — and now MACS3 — is the de facto standard. Almost every ChIP-seq paper you read used MACS for peak calling, and the parameters of the tool have become a kind of shared vocabulary in the field.

How does MACS work, at a conceptual level? Three steps.

**First**, MACS estimates the fragment size from the data. In a typical ChIP-seq experiment with single-end reads, you sequence one end of each fragment, but the actual fragment extends some distance further. MACS uses the cross-correlation pattern between forward-strand and reverse-strand reads — they should be offset by approximately the fragment length — to estimate that distance. With paired-end reads, you know the fragment size directly. Either way, this estimate is used to extend each read to its inferred fragment, so that the pileup represents the actual DNA that was present in the IP, not just the sequenced end.

**Second**, MACS slides a window across the genome and counts reads in the window, both for the IP and for the input. At every window position, it asks: is the IP count significantly higher than what you'd expect from a local Poisson distribution fit to the input count? The Poisson distribution is the natural model for read counts, since reads are essentially independent point processes scattered along the genome. The local background — what you'd expect at this position by chance — is modeled from the input reads in a region around the window, capturing local biases.

**Third**, MACS reports, for every window where the IP-versus-input enrichment is statistically significant after multiple-testing correction, a **peak call** — a genomic region, with a fold enrichment value, a statistical significance, and a confidence in the peak summit position. The output is typically a BED file — a tab-separated list of peak coordinates — that you can then load into a genome browser, overlap with gene annotations, intersect with other ChIP-seqs, and analyze downstream.

\[Pause.\]

The analogy: **peak calling is looking for sharp local enrichment in read density above the input baseline.** Where the IP has, say, ten times more reads piling up than the input does in that same region — and where that excess is statistically improbable given the read counts and the noise — there's almost certainly a real binding event. Where the IP and the input look similar — same density, same spread, no enrichment — there's no binding, just background.

Different proteins produce different peak shapes, and MACS has parameters that adjust for this. **Transcription factors** typically produce sharp peaks — narrow, intense enrichments at single binding sites, often a couple hundred base pairs wide. **Histone modifications** typically produce broader peaks — kilobases-wide regions of moderate enrichment, since the modifications spread across multiple nucleosomes around regulatory elements. There's a MACS option called broad peak calling, with adjusted parameters, that handles these histone-style profiles better than the default narrow-peak mode. **Polymerases and elongation complexes** spread across gene bodies, producing very broad regions that look more like rectangular plateaus than peaks.

There are now a number of alternative peak callers — SICER for broad domains, PeakSeq, SPP, and more — but MACS2/3 remains the workhorse. The differences between them tend to matter at the margins; for clean experiments with strong signal, all the tools agree. For weak or noisy experiments, they disagree, and you should treat the peak list with caution and corroborate with replicates.

\[Pause.\]

Speaking of replicates — and this is a practical point — ChIP-seq experiments should always be done in at least biological duplicates, ideally triplicates. The reproducibility of peaks across replicates is the single best metric for whether your data is real. ENCODE introduced a measure called the **irreproducible discovery rate**, or IDR, which is a principled way to combine peak calls across replicates and report only those that are consistently called in both. Peaks that show up in only one replicate are often noise or outliers. Peaks that show up in both are typically reliable. If you can afford only one biological replicate, your peak list will be larger but less trustworthy. The cost of an extra sample is small compared to the cost of building a publication on irreproducible peaks.

Finally, a note on what a peak _is_, semantically. A peak is a candidate binding site. It is not, on its own, proof that your protein is functionally binding that region in a way that matters for the cell. The peak tells you the protein was there. It does not tell you what the protein was doing there. Whether the binding event has a downstream consequence — turning on a gene, recruiting another factor, modifying chromatin — is a separate question. We'll come back to that when we talk about integrating ChIP-seq with RNA-seq in Segment 17.

---

## SEGMENT 9 — ENCODE and the comprehensive map of regulatory elements

If ChIP-seq made it possible to map regulatory binding genome-wide, the next obvious thing to do was to map _every_ regulatory protein in _every_ cell type, systematically. That ambition is what drove the **ENCODE consortium** — the Encyclopedia of DNA Elements — a multi-decade, multi-institution, multi-funder effort to produce a comprehensive functional annotation of the human genome.

ENCODE was launched in 2003 by the NHGRI as a pilot project to identify functional elements in one percent of the genome. By 2007, the pilot had concluded, and the full-scale effort began. By 2012, the consortium published a flurry of papers — including a flagship _Nature_ paper accompanied by thirty companion papers across various journals — claiming that some eighty percent of the genome had detectable biochemical activity of some kind, much of it in the form of transcription factor binding, histone modifications, chromatin accessibility, or RNA transcription. That eighty-percent claim was controversial — critics pointed out that "biochemical activity" doesn't equal "function" — but the underlying data, the maps themselves, are extraordinary, and they're freely available to anyone with an internet connection.

What did ENCODE actually produce? In its core, ENCODE was a ChIP-seq factory. Across hundreds of human and mouse cell lines and tissues, the consortium ran ChIP-seq for hundreds of transcription factors, dozens of histone modifications, multiple chromatin remodeling complexes, and various polymerase variants. They paired these with RNA-seq, ATAC-seq, bisulfite sequencing, Hi-C — every assay you'd want to characterize a cell's regulatory landscape. The output is a massive matrix: rows are genomic positions, columns are assays-by-cell-type, and the entries are the signal at each position in each assay. From this matrix, the consortium derived **chromatin state annotations** — labels like "active promoter," "poised enhancer," "polycomb-repressed," "heterochromatin" — that summarize the combinatorial signature at each position.

\[Pause.\]

You can think of ENCODE as a kind of regulatory genome browser. If you want to know whether a given non-coding variant lies in a regulatory element, you can look it up in ENCODE. If you want to know which transcription factors might bind the upstream region of a given gene, you can query the ENCODE database. If you want a list of all the enhancers active in K562 cells — a chronic myelogenous leukemia line that's one of ENCODE's most-characterized cell types — you can download the list. The consortium standardized the methods, the controls, the validation, and the file formats, and it pushed the field toward reproducibility in a way that no individual lab could have. The ENCODE data portal at encodeproject.org is, even today, one of the most-visited bioinformatics resources in the world.

There's a sequel — actually, sequels — to ENCODE. **Roadmap Epigenomics** characterized chromatin states across primary human tissues, complementing ENCODE's cell-line focus. **PsychENCODE** focused on brain regions. **The ENCODE Phase 4** project has expanded into single-cell data, mouse developmental atlases, and longer-read assays. And the **4D Nucleome** consortium tackled three-dimensional chromatin organization, integrating Hi-C with the ChIP-based functional maps. The general direction is clear: build the most complete, most quantitative, most cross-referenced map of regulatory genomics that anyone can produce, and make it free. The technology that made this possible is, in the overwhelming majority of cases, ChIP-seq — alone or in combination with related assays.

\[Pause.\]

What I want you to take from this segment is not the consortium specifics — you can look those up — but the cultural shift. Before ENCODE, regulatory genomics was lab-by-lab. Each group would map a few of their favorite factors in their favorite cell lines and publish individually. After ENCODE, it became possible — and expected — to compare your one factor against the hundreds already mapped in the same cell type, to look for co-binding patterns, to integrate across data types, to leverage the consortium's investment in quality control. ChIP-seq went from being a boutique assay to being part of a community resource. That's the transformation. And the technique is so central to the consortium's mission that, in many ways, ENCODE is a monument to ChIP-seq. If you want to see what the method can do when it's run at scale, with rigor, on every protein you can name, that's where to look.

\[BREAK\]

---

## SEGMENT 10 — The histone modification zoo

Welcome back. Hopefully you took some coffee, stretched. We're now in the second half of the lecture. The first half was about the technique itself — the question, the chromatin, the workflow, the controls, the peak calling, the consortium. In the second half, we're going to look at what ChIP-seq is actually used for — the biology that the method enables — and then at where the field is going next.

Let's start with histone modification ChIP-seq, because in many ways this is the most reliable, most informative use of the technique. The histone tails carry chemical modifications that correlate, sometimes very tightly, with the transcriptional state of the underlying DNA. If you ChIP for a specific modification — using one of the well-characterized antibodies against, say, trimethylated lysine 4 on histone H3 — you get a genome-wide map of where that modification sits. And because each modification has a known association with a particular regulatory state, the map essentially tells you the regulatory state of every region in the genome, simultaneously.

Let me walk you through the most important marks. There are dozens of histone modifications that have been characterized, but four of them are the workhorses of regulatory genomics. Memorize these four.

**H3K4me3.** Trimethylation of lysine 4 on histone H3. This mark localizes to **active promoters** — the few hundred base pairs surrounding the transcription start sites of genes that are being transcribed. If you ChIP for H3K4me3 in a cell, the peaks light up the active promoters of every actively transcribed gene in that cell. It's almost a one-to-one correspondence. Pull up the H3K4me3 track in a genome browser and you essentially have a list of which genes are on. The mark is deposited by the SET1/MLL complex of methyltransferases, recruited to promoters by various co-activators.

**H3K27ac.** Acetylation of lysine 27 on histone H3. This mark localizes to **active enhancers** and is also enriched at active promoters. An enhancer, in case you've forgotten, is a regulatory element that can sit thousands of base pairs away from the gene it controls and loop back to enhance transcription. Enhancers are notoriously hard to identify by sequence alone — they don't have a consistent motif, they don't have a fixed location, they don't even have a fixed orientation. But they have H3K27ac. ChIP-seq for H3K27ac gives you a near-complete map of the active enhancers in a cell, and because enhancers are highly cell-type-specific, that map tells you a lot about the cell's identity. The mark is deposited by p300/CBP, a pair of acetyltransferases that show up as cofactors at virtually every active enhancer.

**H3K27me3.** Trimethylation of lysine 27 on histone H3 — same residue as H3K27ac, different modification. This is the **repressive mark** of the polycomb system. It localizes to broad domains over genes that have been developmentally silenced — typically developmental regulators that need to be off in a given cell type. H3K27me3 ChIP-seq gives you a map of polycomb-repressed regions, which tend to be large, cell-type-specific domains. The mark is deposited by the PRC2 complex, with EZH2 as the catalytic subunit.

**H3K9me3.** Trimethylation of lysine 9 on histone H3. This is the **heterochromatin mark** — the marker of constitutively silenced regions, particularly pericentromeric heterochromatin, repetitive elements, and certain silenced genes. H3K9me3 ChIP-seq gives you a map of heterochromatic regions, which tend to be very large and stable across cell types. The mark is deposited by SUV39H1 and related methyltransferases.

\[Pause.\]

The analogy: **histone mark ChIP-seq is the regulatory state map. H3K4me3 means "this promoter is on." H3K27ac means "this enhancer is active." H3K27me3 means "this region is polycomb-repressed." H3K9me3 means "this region is constitutive heterochromatin."** Four marks, four broad categories of regulatory state, mapped genome-wide with one experiment per mark. If you do all four in the same cell type and overlay them, you have a near-comprehensive functional annotation of every region in the genome — what's on, what's poised, what's silenced, what's heterochromatic.

There are many more marks. H3K36me3 (gene bodies of actively transcribed genes). H3K79me3 (similar but distinct elongation mark). H4K16ac (involved in chromatin compaction). H2A.X phosphorylation (DNA damage). H3K4me1 (enhancers, distinguishing them from promoters — promoters carry H3K4me3, enhancers carry H3K4me1, both can carry H3K27ac when active). The histone code, as it's sometimes called, is rich and combinatorial — the combination of marks at a given region carries more information than any one mark alone. Modern epigenomics treats the marks not as independent labels but as a multidimensional vector, and uses computational tools like ChromHMM to cluster regions into chromatin states based on their combinatorial signatures.

\[Pause.\]

Why are histone mark ChIP-seqs more reliable than transcription factor ChIP-seqs? Two reasons. First, the antibodies are well-characterized. Anti-histone-modification antibodies have been validated by many labs across many studies, and the good ones are widely shared. Second, the signals are robust — modifications are abundant, present at high stoichiometry across many cells, so even with a moderate antibody you get strong enrichment. Transcription factors, by contrast, are often present at one or a few molecules per binding site, which makes the IP signal much weaker and more sensitive to antibody quality.

The practical upshot is that if you're a new graduate student looking to learn ChIP-seq, you should start with H3K4me3 or H3K27ac. The protocols are robust, the antibodies are good, the signal is high, and the data interpretation is straightforward. Don't try to ChIP your favorite poorly-characterized transcription factor as your first experiment. You'll spend six months troubleshooting and get nothing. Get the workflow down on histones, then move to TFs.

---

## SEGMENT 11 — Transcription factor ChIP-seq and motif discovery

Now let's talk about the harder case — transcription factor ChIP-seq. This is where the method gets most exciting, mechanistically. A transcription factor is a protein that recognizes specific DNA sequences and binds them to control nearby gene expression. The set of sequences a TF binds is called its **motif** — a short DNA pattern, typically six to twelve base pairs, with some positions tightly conserved and others tolerant of variation. When you ChIP-seq a TF and look at the resulting peaks, you have a chance to do something that, before ChIP-seq, was very hard: discover the TF's binding motif from its real, in-vivo binding events.

Here's the workflow. You ChIP your TF. You call peaks. You now have a list of, say, ten thousand peak regions, each a couple hundred base pairs long. Inside each peak, somewhere, is presumably the TF's binding site. You take all ten thousand peak sequences, you feed them to a motif discovery algorithm — **MEME** is the classical tool, originally from Tim Bailey's lab, and **HOMER** is the modern workhorse for ChIP-seq specifically, written by Chris Benner — and the algorithm searches for short sequence patterns that are enriched in your peak set compared to a background.

The output is a position weight matrix — a probabilistic representation of the motif, showing which bases are preferred at each position. This is what people show as those colorful sequence logos, with stacks of letters of different heights at each position. If the motif discovery works, you get a clear, biologically interpretable motif — say, for the transcription factor CTCF, you'd discover a roughly 19-base-pair sequence that matches the published CTCF binding site. Sometimes you discover motifs that haven't been characterized before, and that's a real biological finding — a new sequence specificity for your TF.

\[Pause.\]

There's a quality-control aspect to this. If you ChIP a TF whose motif is known — say, NF-kB or MYC or CTCF — and you do motif discovery on your peaks, you should recover the known motif as the top enriched pattern. If you don't recover it, something is wrong. Either your antibody is grabbing the wrong thing, or your peak calls are off, or your TF binds indirectly (we'll get to that). Motif recovery is a sanity check on the whole experiment.

Now, the indirect binding point. Transcription factors don't always bind DNA directly. Some bind via cofactors — they associate with another TF that does the actual DNA contact, and the ChIP'd protein is just hanging onto its partner. In that case, the peaks correspond to the cofactor's binding sites, not the ChIP'd protein's intrinsic motif. The motif discovery will return the cofactor's motif, not the ChIP'd protein's. This is informative — it tells you who your TF is partnering with — but it can be confusing if you don't expect it.

\[Pause.\]

The other big topic in TF ChIP-seq is the relationship between binding and expression. The naive expectation is that if a TF binds the promoter of a gene, the TF must be regulating that gene. So if you map TF binding by ChIP-seq, you have a candidate target gene list. Reality is more complicated. **Where binding does and doesn't predict expression** turns out to be a deep question. Many transcription factors bind hundreds of times more sites than they functionally regulate. A TF might have ten thousand ChIP-seq peaks, but knock out the TF and see only a few hundred genes change expression. The other ninety percent of the binding events are, apparently, biologically inert — the protein is sitting there, but its presence doesn't matter for the gene's expression.

Why? Several reasons. **Redundancy** — multiple TFs converge on the same regulatory regions, so removing one doesn't change the output. **Threshold effects** — the gene's transcription is saturated or fully repressed regardless of marginal changes in TF occupancy. **Indirect binding** — as discussed, the TF is hanging onto a partner whose function is genuinely required, but the ChIP'd protein itself isn't doing the regulating. **Local context** — the TF might bind a site that's far from any gene it regulates, in an enhancer that loops to a distal target the analysis doesn't connect.

The implication is that ChIP-seq tells you where a protein _is_, not what it _does_. To get from binding to function, you need additional experiments — typically perturbation experiments where you delete or deplete the TF and measure transcriptional changes via RNA-seq. We'll come back to this integration in Segment 17.

---

## SEGMENT 12 — The antibody crisis and the case for alternatives

We touched on the antibody problem in Segment 6. I want to come back to it here, because it sets up the story of the next several segments — the development of alternatives to ChIP-seq that get around the antibody problem in clever ways.

The antibody problem, restated, is this: **ChIP-seq lives or dies on antibody quality, and there's a documented "bad antibody" crisis in TF immunology.** When the ENCODE consortium began systematically validating commercial antibodies for ChIP-seq, they found that a substantial fraction of them — by various estimates, anywhere from a quarter to over half — failed validation criteria. The antibodies didn't specifically capture their advertised target. They captured something else, or nothing, or a mixture. And these were antibodies that had been sold for years, used in published papers, cited in the literature as evidence for binding events that were, in retrospect, unreliable.

This is not a small issue. It's a structural feature of the antibody market. Antibodies are made by injecting an antigen — typically a peptide from the target protein — into an animal and harvesting the resulting immune response. The polyclonal antibodies that come out of this are mixtures of many different binders, some specific, some not. Even monoclonal antibodies, which come from a single B cell clone and are uniform in sequence, can be miscalibrated — the clone might bind a peptide-shape that's similar to something else in the proteome. Validating an antibody for a specific application like ChIP-seq is expensive, and not every supplier does it rigorously.

\[Pause.\]

In addition to the specificity problem, there's an availability problem. For many transcription factors — particularly less-studied ones, or those from non-model organisms — there are no good antibodies available. You can't ChIP what you can't capture. This puts an entire class of biological questions out of reach. If you're studying the development of a non-model organism, or a recently discovered TF, or a transcription factor that's not on anyone's commercial priority list, ChIP-seq isn't an option until somebody makes you a good antibody — a process that can take a year and tens of thousands of dollars.

The alternative path, which the field began to explore seriously around 2015, was to ask: can we design a ChIP-like method that doesn't depend on having a perfect antibody for the native protein? Several approaches emerged.

**Tagged-protein ChIP.** If you can engineer your target protein with a small, well-characterized tag — Flag, HA, V5, or a more modern tag like Halo — then you can ChIP using a high-quality anti-tag antibody, which is much easier to produce and validate than antibodies against arbitrary native proteins. The trade-off is that you need to put the tag into the cell genetically, which requires either a knock-in (CRISPR-engineered to place the tag at the endogenous locus) or an overexpressed construct (less reliable because the protein levels are off). Knock-in tagged ChIP-seq has become a powerful approach, particularly when paired with degron systems that let you deplete the tagged protein on command.

**Synthetic recognition systems.** Rather than relying on an antibody at all, you can use a synthetic DNA-binding domain — a dCas9 fused to a chromatin modifier, or an engineered zinc finger, or a tagged TAL effector — to recruit a recognition system to specific sequences. These aren't replacements for antibody-based ChIP, but they're complementary tools that don't require antibody validation.

**Bring the cutter to the antibody.** This is the conceptual leap that gave us CUT&RUN and CUT&Tag. Instead of using the antibody to pull the protein out, and then sequencing whatever DNA came along, you can use the antibody as a homing device — the antibody binds the target protein, and then you bring a DNA-cutting enzyme to wherever the antibody is, cut the local DNA, and sequence the released fragments. The signal comes from cuts adjacent to the protein, not from immunoprecipitation. This turns out to have enormous advantages, and it's where the field has been moving over the past decade.

That's the segue. Let's now look at CUT&RUN — the first big upgrade — in detail.

---

## SEGMENT 13 — CUT&RUN — antibody-tethered MNase

In 2017, Steven Henikoff's lab at the Fred Hutchinson Cancer Center published a method called **CUT&RUN** — Cleavage Under Targets and Release Using Nuclease. The acronym is forced, but the technique is elegant. The idea is to use the antibody not as a handle for pulling the protein out, but as a guide for bringing a DNA-cutting enzyme to the protein's location.

Here's how it works. You take intact, unfixed cells — no crosslinking — and you permeabilize them, letting reagents diffuse in while keeping the chromatin structure roughly intact. You add an antibody against your target protein. The antibody enters the nucleus and finds its target wherever the target is sitting on the chromatin. Then you add a fusion protein called **pA-MNase** — protein A fused to micrococcal nuclease. The protein A part binds the antibody's Fc region; the MNase part is a DNA-cutting enzyme that's normally inactive in the absence of calcium. Now you have, in the cell, a chain: target protein → antibody → pA-MNase, all assembled at the precise locations where your protein is bound.

The key trick is that you haven't added calcium yet. Without calcium, the MNase sits there, inactive, tethered to the antibody, doing nothing. When you finally add a small amount of calcium, the MNase activates — but only locally, where it's tethered. It cuts the DNA in a small region right around the antibody-bound protein. The cuts release small DNA fragments — the fragments adjacent to the bound protein — which diffuse out of the nucleus into the supernatant. You collect the supernatant, purify the DNA, make a library, and sequence.

\[Pause.\]

The analogy: **CUT&RUN is the upgrade. The antibody brings an MNase right to the protein's foot. The MNase cuts only the local DNA. Much higher signal-to-noise. Much less input needed.** Compared to classical ChIP-seq, where you have to use brute-force sonication to fragment all the chromatin in the sample and then pull out the tiny fraction you want, CUT&RUN starts the cutting precisely where you want it. The background is enormously reduced — instead of sequencing all the chromatin and washing away most of it, you sequence only the chromatin that was specifically released by targeted cutting.

The advantages are substantial:

**Higher signal-to-noise.** Because the cutting is targeted, the fraction of reads that come from real binding events is much higher than in ChIP-seq. For the same sequencing depth, CUT&RUN peaks are sharper and easier to call than ChIP-seq peaks.

**Lower input requirement.** ChIP-seq typically needs millions of cells per experiment. CUT&RUN can work with tens of thousands of cells, or even fewer. This opens up applications that ChIP-seq couldn't touch — rare cell populations, primary patient samples, embryonic tissues — that you can't grow into the billions of cells classical ChIP requires.

**No crosslinking required.** CUT&RUN works on native, unfixed chromatin. This means the epitopes are intact — the antibody doesn't have to recognize a formaldehyde-modified version of its target. Many antibodies that fail in ChIP-seq work fine in CUT&RUN because they get a clean, native epitope.

**Faster, simpler protocol.** A ChIP-seq protocol takes two to three days, with overnight crosslink reversal. CUT&RUN can be done in about a day. The hands-on time is lower. There are commercial kits now from several vendors that have made the protocol very accessible.

The disadvantages? A few. CUT&RUN is more sensitive to MNase sequence bias — the enzyme has a slight preference for cutting at AT-rich sequences, which can produce some artifactual peaks at certain genomic regions. The technique works best for proteins with relatively stable binding, since the unfixed protocol gives a snapshot of native binding without crosslinking trapping. And the controls for CUT&RUN are different — typically an IgG control rather than an input control, since there's no "input chromatin" in the ChIP-seq sense. But these are manageable issues. For most applications where ChIP-seq used to be the default, CUT&RUN now is.

---

## SEGMENT 14 — CUT&Tag — antibody-tethered Tn5

Two years after CUT&RUN, in 2019, Henikoff's lab published the next iteration — **CUT&Tag** — Cleavage Under Targets and Tagmentation. The idea is to take CUT&RUN's tethering approach but replace MNase with a different enzyme: the **Tn5 transposase**.

Tn5 deserves a brief introduction. It's a bacterial enzyme that, in its native function, cuts DNA and inserts a small piece of DNA — a transposon — into the cut site. Genomicists have repurposed Tn5 with a clever modification: they load the enzyme with synthetic DNA adapters — the same sequencing adapters that you'd attach in an Illumina library prep — and now, when Tn5 cuts the DNA, it simultaneously inserts the adapter into the cut site. One enzyme, two functions: cutting and tagging. This is the basis of the **tagmentation** library prep we discussed in the Illumina lecture, used in Nextera kits and in ATAC-seq.

In CUT&Tag, the Tn5 is fused to protein A (or protein A/G hybrid) and pre-loaded with sequencing adapters. The workflow proceeds exactly like CUT&RUN: permeabilize cells, add antibody, add pA-Tn5, wash. Now, when you activate the Tn5 — by adding magnesium — it cuts the DNA at the antibody-targeted locations and simultaneously inserts the sequencing adapters into the cut sites. The result is that the DNA fragments adjacent to the bound protein are released with adapters already attached. No separate library prep step needed. You just PCR-amplify the released fragments using primers complementary to the adapters, and you have a sequencing-ready library in one tube.

\[Pause.\]

The analogy: **CUT&Tag is CUT&RUN's grandchild. The antibody brings Tn5 transposase, which both cuts AND inserts sequencing adapters in one step. Sequencing-ready library in a single tube.** This is a massive simplification. You go from cells to sequencing library in a couple of hours, with a minimum of pipetting, with no separate ligation steps. The protocol is robust enough that it can be done on very small numbers of cells — hundreds to thousands — and it's compatible with **single-cell** workflows in a way that ChIP-seq and CUT&RUN never were.

That single-cell compatibility is the killer feature. In standard ChIP-seq, you need millions of cells per sample, which means you're averaging over the entire population — you can't see cell-to-cell variation, you can't distinguish subpopulations, you can't follow developmental trajectories at the level of individual cells. With CUT&Tag, because the tagmentation produces sequencing-ready libraries from minimal input, you can run the reaction in single cells partitioned into droplets, microwells, or split-pool barcoding schemes. The result is **single-cell CUT&Tag** — scCUT&Tag — which gives you per-cell binding profiles for a chromatin mark or a TF across thousands or millions of cells in one experiment.

Single-cell chromatin profiling is the frontier of regulatory genomics. It lets you ask questions you couldn't ask before: how does H3K27ac vary across cells in a tumor? Which cells in a developing embryo have committed to a particular fate, by chromatin state? How do regulatory marks change as a stem cell differentiates, in real time at the single-cell level? These questions used to be unanswerable. CUT&Tag, combined with droplet barcoding from companies like 10x Genomics, made them tractable.

\[Pause.\]

There are now multiple variants in the CUT&Tag family. **CUT&Tag-direct** simplifies the workflow further. **CUT&Tag2** uses two antibodies for higher specificity. **MulTI-Tag** and **CoBATCH** allow simultaneous profiling of multiple marks in the same cell, by using differently-barcoded Tn5 enzymes for each antibody. **scNanoTrack** combines single-cell CUT&Tag with long-read Nanopore sequencing for better repeat resolution. The platform is being elaborated rapidly, and what was a single elegant idea — antibody-tethered Tn5 — has become a family of techniques covering a wide range of applications.

For most modern regulatory genomics, particularly any work involving primary cells, scarce samples, or single-cell resolution, CUT&Tag has displaced classical ChIP-seq as the default. ChIP-seq remains useful for some specialized applications — particularly when you need crosslinking to capture transient interactions — but in most labs, the new default for "where is this protein bound?" is CUT&Tag.

---

## SEGMENT 15 — Single-cell chromatin profiling and the third dimension

Let me dwell on single-cell chromatin profiling for a moment, because it represents a real shift in what regulatory genomics can do, and you should understand the landscape.

**scCUT&Tag** is the single-cell extension we just discussed — droplet-encapsulated CUT&Tag reactions, with cell barcodes attached during tagmentation, allowing tens of thousands of cells per experiment to be profiled for a chromatin mark or TF. The data resolution per cell is modest — typically a few thousand to tens of thousands of reads per cell — but with enough cells, you can cluster and identify cell types based on their chromatin state alone, and you can map regulatory differences across populations.

**scATAC-seq** is the cousin technique, focused on chromatin accessibility rather than specific protein binding. It uses Tn5 directly — no antibody — to tag open chromatin, since Tn5 preferentially inserts into accessible DNA. It's not really a ChIP technique, but it's so closely related and so widely paired with single-cell CUT&Tag that you should know about it.

**scNanoTrack** and related long-read variants bring the chromatin profile into the world of Nanopore and PacBio sequencing, where you can read longer fragments, resolve repeats, and combine chromatin signals with direct base-modification calling — methylation, for instance — on the same molecule.

\[Pause.\]

The frontier here, beyond just running these methods, is **spatial chromatin profiling** — capturing not just which chromatin state each cell has, but where each cell sits in a tissue. Techniques like spatial CUT&Tag are emerging, where you fix a tissue slice, perform the CUT&Tag chemistry on the slice with barcoded probes that capture spatial position, and read out chromatin state with subcellular resolution. The result is a tissue map where every position carries a regulatory profile. For developmental biology and cancer pathology, this is transformative — you can see how chromatin state varies not just by cell type but by location within a tumor, organ, or developing embryo.

The conceptual point is that ChIP-seq, which started as a bulk assay producing one binding profile per sample, has spawned a family of techniques that resolve chromatin states with increasing precision in space and time. The trajectory is from bulk to single-cell to spatial, and at each step the data becomes richer and the biological questions become more pointed.

---

## SEGMENT 16 — Higher-resolution variants — ChIP-exo and ChIP-nexus

Let me briefly mention two other variants of ChIP-seq that target a different dimension — not throughput or input requirements, but **resolution**. The standard ChIP-seq peak is roughly 200 to 300 base pairs wide, because the fragments are about that size. The actual binding footprint of a transcription factor — the few base pairs of DNA the protein actually contacts — is much smaller, often 10 to 20 base pairs. Standard ChIP-seq gives you a blurry localization. For some questions, you want sharper.

**ChIP-exo**, developed by Frank Pugh's lab in 2011, uses a lambda exonuclease — an enzyme that chews back double-stranded DNA from the 5' end — to trim the ChIP'd fragments down until the exonuclease bumps into the protein cross-link itself, which acts as a roadblock. The resulting fragments end at the precise location of the protein-DNA contact, and the peaks become sharper — single base pair resolution, in principle. It's a beautiful technique, but the wet lab is finicky.

**ChIP-nexus**, developed by Julia Zeitlinger's lab, is a refinement of ChIP-exo with improved adapter ligation that boosts the recovery of trimmed fragments. The data is similarly high-resolution and is particularly useful for studying transcription factors with closely-spaced binding sites — where standard ChIP-seq's 200-base-pair smearing would merge adjacent peaks into one.

Neither ChIP-exo nor ChIP-nexus has become as widely adopted as standard ChIP-seq or CUT&Tag, partly because the wet-lab complexity is higher and partly because for most applications, standard-resolution peaks are good enough. But for detailed mechanistic studies — particularly of cofactor cooperation at enhancers, where you want to know exactly which factor sits where — they're invaluable.

---

## SEGMENT 17 — Integrating ChIP-seq with RNA-seq and the question of function

We've talked about where proteins bind. The natural next question is what their binding _does_. ChIP-seq tells you the protein was there. RNA-seq tells you what the cell is transcribing. The integration of the two is the bread and butter of modern regulatory genomics.

The simplest integration is this. You ChIP-seq your transcription factor in a given cell line. You also RNA-seq the same cell line under two conditions: untreated, and treated with something that depletes or inactivates the TF. The depletion can be a knockout, a CRISPR knockdown, an auxin-inducible degron, a small molecule inhibitor — anything that turns off the TF rapidly. You compare gene expression between the two conditions and find the genes that change. Now you ask: of those changed genes, how many have ChIP-seq peaks for your TF nearby — in their promoters, or in enhancers that loop to their promoters? Those are the **direct targets** — genes that are both bound by the TF and functionally affected by removing it. The non-changed genes that are bound are **non-functional binding events**, and the changed genes that aren't bound are **indirect effects**.

This integration is the bridge between mechanism and consequence. The list of direct targets is what a regulatory biologist actually wants from a TF study. Everything else — the binding sites, the motif, the cofactor interactions — is supporting evidence.

\[Pause.\]

The complication is that "nearby" is not well-defined. Promoter binding is straightforward — within a few kilobases of the transcription start site. But enhancer binding can act on genes that are hundreds of kilobases away, or even on different chromosomes through three-dimensional chromatin contacts. To properly map TF binding to gene targets, you increasingly want **Hi-C** or **HiChIP** data — assays that map three-dimensional contacts between regulatory elements and promoters — overlaid on top of your ChIP-seq peaks. With those contact maps, you can ask not just "is the TF near the gene linearly?" but "is the TF in an enhancer that contacts the gene three-dimensionally?" That's a much better predictor of regulation.

Modern regulatory genomics studies typically combine at least three layers: ChIP-seq or CUT&Tag for protein binding, RNA-seq for expression, and Hi-C or similar for three-dimensional organization. The integrated analysis is more informative than any one assay alone, and the major findings of the field — gene regulatory networks, enhancer-promoter rewiring during differentiation, cancer-driver mutations in non-coding regulatory elements — all rely on this kind of multi-omic integration.

---

## SEGMENT 18 — The frontier

Let me close with where the field is going. Five threads.

**Multiplexed CUT&Tag.** Profiling multiple marks or TFs simultaneously in the same cells, using barcoded antibody-Tn5 fusions. This collapses what used to require multiple parallel experiments into one, with the bonus that the marks are now measured in the same cells, allowing co-localization analysis at the single-cell level.

**AI-driven peak calling and interpretation.** Modern deep learning models — convolutional neural networks trained on ChIP-seq data — can now predict binding sites from sequence alone with surprising accuracy, and can also denoise and refine peak calls in ways that classical statistical tools can't. Tools like ChIPnet, DeepBind, and BPNet are starting to displace MACS in specialized applications. The downstream question — "given this binding profile, what's the predicted regulatory effect on this gene?" — is also increasingly being tackled with machine learning, integrating ChIP, RNA, and Hi-C data into unified predictors.

**Spatial chromatin profiling.** As mentioned earlier, mapping chromatin state with spatial resolution within tissues. The technology is in its infancy but moving fast, and we're going to see, in the next few years, atlases of regulatory states mapped across whole organs at near-cellular resolution.

**Long-read chromatin sequencing.** Combining CUT&Tag or CUT&RUN with Nanopore or PacBio sequencing to capture longer fragments, resolve repeats, and read DNA modifications directly. This is particularly powerful for studying heterochromatic regions, repetitive elements, and the boundaries between regulatory domains.

**Standardized antibody-free approaches.** Tagged-protein systems, degron-based perturbations, and synthetic recognition systems are all reducing the field's dependence on commercial antibodies. We may eventually move to a world where most regulatory genomics is done with engineered tags and validated synthetic systems, with antibody-based ChIP reserved for cases where genetic engineering isn't possible.

\[Pause.\]

If you take one big-picture lesson from this lecture, let it be this. The fundamental question — where on the genome is a specific protein bound? — is one of the oldest and deepest in molecular biology. The answer used to require asking one gene at a time. Today, you can answer it genome-wide, in single cells, with spatial resolution, in a few days, with a workflow that can be run by a graduate student with a sequencer and a good antibody. That progression — from gene-by-gene to genome-wide, from bulk to single-cell, from blurry to high-resolution — is the story of a single methodology, ChIP-seq, becoming a family of methodologies that together define what regulatory genomics is today.

We started two hours ago with a question: given a transcription factor, where on the genome does it sit? You should now have a real, working answer to that question. You know what reagents you need. You know what controls. You know what the data look like. You know where the failure modes are. And you know what's coming next.

That's ChIP-seq. Thanks for sticking with me. Questions?

---

## APPENDIX

**Glossary of key terms.**

- **Antibody:** a protein, made by B cells, that binds a specific target — in ChIP-seq, used to grab the protein of interest. See the antibodies lecture for the full story.
- **ChIP:** chromatin immunoprecipitation — the original 1980s assay of using an antibody to pull a protein and its bound DNA out of a fragmented chromatin extract.
- **ChIP-chip:** ChIP combined with microarray readout, the dominant method 2002–2007.
- **ChIP-seq:** ChIP combined with next-generation sequencing readout, the dominant method since 2007.
- **Chromatin:** DNA plus all the proteins bound to it — nucleosomes, transcription factors, polymerases, structural proteins. The actual material inside a nucleus.
- **Crosslinking:** chemical fixation, typically with formaldehyde, that covalently glues nearby proteins to DNA so they don't fall off during purification.
- **CUT&RUN:** a 2017 alternative to ChIP-seq that tethers MNase to an antibody and lets it cut DNA at the protein's location. Higher signal-to-noise, lower input.
- **CUT&Tag:** a 2019 alternative that tethers Tn5 transposase to an antibody, producing sequencing-ready libraries in one tube. Single-cell compatible.
- **ENCODE:** the Encyclopedia of DNA Elements, a consortium project that has run ChIP-seq for hundreds of proteins across hundreds of cell types since 2003.
- **Enhancer:** a regulatory DNA element, often kilobases from the gene it controls, that boosts transcription. Marked by H3K27ac and H3K4me1.
- **Histone:** one of four small proteins (H2A, H2B, H3, H4) that form nucleosomes. The N-terminal tails carry regulatory modifications.
- **H3K4me3:** trimethylation of lysine 4 on histone H3. Marks active promoters.
- **H3K27ac:** acetylation of lysine 27 on histone H3. Marks active enhancers and promoters.
- **H3K27me3:** trimethylation of lysine 27 on histone H3. Marks polycomb-repressed regions.
- **H3K9me3:** trimethylation of lysine 9 on histone H3. Marks constitutive heterochromatin.
- **Input control:** chromatin sample that has been fragmented and sequenced without the IP step. Used as the baseline against which ChIP enrichment is measured.
- **MACS2/3:** Model-based Analysis of ChIP-Seq, the most widely used peak-calling tool.
- **MNase:** micrococcal nuclease, a bacterial enzyme that cuts DNA preferentially in nucleosome linker regions. Used in CUT&RUN.
- **Motif:** the short DNA sequence pattern recognized by a transcription factor. Discovered from ChIP-seq peaks via tools like MEME and HOMER.
- **Nucleosome:** an octamer of two copies each of H2A, H2B, H3, H4, around which about 147 bp of DNA is wrapped. The basic packaging unit of chromatin.
- **Peak:** a region of the genome where ChIP-seq reads pile up significantly above the input baseline. A candidate binding site.
- **Promoter:** the regulatory region immediately upstream of a gene's transcription start site, where RNA polymerase is recruited.
- **Sonication:** mechanical fragmentation of chromatin with high-frequency sound waves, producing roughly 200-bp fragments.
- **Tn5:** a bacterial transposase, repurposed for tagmentation in CUT&Tag and ATAC-seq.
- **Transcription factor (TF):** a protein that binds specific DNA sequences and regulates transcription of nearby genes.

**Suggested reading.**

- Robertson et al., Nature Methods, 2007. The first STAT1 ChIP-seq paper.
- Mikkelsen et al., Nature, 2007. Histone marks across mouse stem cell differentiation.
- Barski et al., Cell, 2007. Thirty-seven histone modifications in human T cells.
- ENCODE Project Consortium, Nature, 2012. The flagship ENCODE summary paper.
- Skene & Henikoff, eLife, 2017. The original CUT&RUN paper.
- Kaya-Okur et al., Nature Communications, 2019. The original CUT&Tag paper.
- Zhang et al., Genome Biology, 2008. The MACS paper.
- For protocols and analysis, see the ENCODE data portal at encodeproject.org and the Henikoff lab protocols.io collection.

**A note on related lectures.** This lecture pairs naturally with the antibodies lecture (for the immunology behind the IP step), the Illumina lecture (for the sequencing readout), and the bulk RNA-seq lecture (for the gene-expression side of the integration story). Together, the four cover most of what you need to do real regulatory genomics from scratch.

\[End of script.\]


