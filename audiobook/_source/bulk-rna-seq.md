# Bulk RNA-seq — The Workhorse of Transcriptomics

**A 2-hour undergraduate genomics lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The smoothie that tells you the average — what bulk RNA-seq is and why it matters

Good morning, everyone. Today and for the next two hours, we're going to talk about bulk RNA-seq, which is — without any exaggeration — the single most widely used genomic assay in modern biology. If you read a paper from a wet lab between roughly 2010 and today and that paper claims to have measured gene expression, the odds are overwhelming that what they actually did was bulk RNA-seq. It is the workhorse. It is the default. It is the assay that gets ordered when somebody walks into a core facility with a frozen tube of tissue and says, "I want to know what genes are on."

Some of you in this room have already taken the companion lecture on single-cell sequencing — the one that walks through how, starting around 2015, droplet-based platforms like 10x Chromium turned single-cell transcriptomics into a routine technique, and how that unlocked a view of cellular heterogeneity that bulk methods could never see. That lecture spent a lot of time on a single complaint, which I'll call the bulk problem. The complaint is this: if you grind up a tissue and sequence all the RNA in it together, you get an _average_, and averages hide biology. They average a rare tumor stem cell into thousands of bulk tumor cells. They average a single dying neuron into ten thousand healthy ones. They average activated T cells into resting T cells. The single-cell revolution exists because that averaging was, for many questions, an unacceptable loss of resolution.

This lecture is the mirror image. This is the lecture that asks the other question, the one the single-cell lecture barely touched: **what does bulk RNA-seq do well? When is the average exactly what you want? Why has bulk not been displaced by single-cell, even fifteen years after single-cell first became possible?** The answer, which we'll spend two hours unpacking, is that bulk RNA-seq is cheaper, more sensitive, more quantitative, easier to standardize, and sufficient for an enormous range of biological questions. It is the right tool when you want to know whether a tissue, as a whole, has turned on a particular pathway. It is the right tool when you want a biomarker that's robust across a heterogeneous sample. It is the right tool when you have thousands of patient samples and you can't afford to put each one through a Chromium chip. It is the right tool, in short, when you want the average — and the average is more often the right thing than the single-cell community sometimes admits.

\[Pause.\]

Here's the analogy I want you to carry through this whole lecture. **Bulk RNA-seq is smoothie sequencing.** You take a piece of tissue — a tumor biopsy, a piece of brain, a culture of stem cells, a leaf, a yeast pellet — and you grind it up. You blend it. Cells, organelles, membranes, nuclei, all the contents — everything gets pulverized into a slurry. From that slurry, you pull out the RNA — the messenger RNA, the ribosomal RNA, the various non-coding species — and you sequence it. What you get is a count for every gene in the genome: how many RNA molecules from that gene were in your smoothie. Multiplied by every gene, that's a gene expression profile of the entire tissue, averaged across every cell in your starting material.

Now compare that to single-cell sequencing, which is — to extend the analogy — like sequencing every individual piece of fruit before you blend it. **Single-cell tells you how sweet each strawberry was. Bulk tells you how sweet the smoothie is.** Sometimes you want to know the heterogeneity — sometimes you want to know that there was one rotten strawberry and one extra-sweet one. But sometimes you just want to know whether the smoothie, on net, is more sweet or more sour than another smoothie. For an enormous range of biological questions — drug response, disease classification, pathway activation, splicing changes, biomarker discovery — the smoothie's average sweetness is exactly the answer.

If you walk out of here in two hours and you can do three things — one, sketch the bulk RNA-seq workflow on a whiteboard from RNA extraction through differential expression, and explain why each step exists; two, articulate clearly when bulk is the right choice and when you actually need single-cell; three, look at a published paper that says "RNA-seq was performed" and read its methods section with real understanding of what the data is, how it was analyzed, and what conclusions the authors are entitled to draw — then we've succeeded. Everything else hangs off those three.

\[Pause.\]

A few orienting numbers, before we go deeper. A bulk RNA-seq experiment, in a modern core facility, costs somewhere between fifty and two hundred dollars per sample, depending on depth and the institution's overhead. A comparable single-cell experiment on the same tissue is closer to a thousand to two thousand dollars per sample — sometimes more. So bulk is roughly ten to twenty times cheaper. A bulk RNA-seq sample requires maybe a hundred nanograms of RNA, which you can get from almost any tissue. A single-cell experiment requires a live, dissociated cell suspension, which is much harder to prepare, especially for archived clinical samples or tissues that don't dissociate cleanly. A bulk RNA-seq run sees every gene in the genome, including lowly expressed ones, because every gene's mRNAs are pooled across all the cells. A single-cell experiment, because it splits the same amount of sequencing across thousands of individual cells, sees only the most abundant transcripts per cell and suffers from a problem called dropout, which we'll touch on in Segment 15. So bulk is cheaper, more accessible, more sensitive per gene, and easier to scale.

The trade-off, of course, is that you lose cell-type information. You can't tell whether a change in gene expression came from a change in the cells' state or from a change in the cells' _proportions_ in the tissue. If a tumor sample looks different from a normal sample, is that because the tumor cells are expressing a different program, or because the tumor sample has more immune cells infiltrating, or both? Bulk can't tell you. That's the deal you make. You get the average, cheaply, sensitively, at scale. You give up the ability to attribute changes to specific cell types. For a lot of biology, that's a deal worth making.

So that's the contract for the next two hours. We're going to walk through the workhorse method — from its prehistory in microarrays, through the 2008 papers that established it as the standard, through the workflow, the analysis pipelines, the statistics, the public datasets, and the modern frontier where bulk and single-cell are starting to converge. We'll do it the way you'd want to understand any dominant assay: get the chemistry right, then the bioinformatics, then the statistics, then the failure modes, then the applications. Let's start with where it came from.

---

## SEGMENT 2 — The pre-history — microarrays, differential display, and the long road to RNA-seq

Before there was RNA-seq, there were microarrays. And before microarrays, there were a handful of older techniques — differential display, SAGE, Northern blots — that biologists used to try to measure gene expression across the genome. Each of these methods had a brief reign, and each was displaced by the next. Bulk RNA-seq is the culmination of about thirty years of trying to answer one simple-sounding question: which genes are turned on in this tissue?

Let me set the historical baseline. Before 1995, if you wanted to measure expression of a specific gene in a specific tissue, you would do a Northern blot. You extract total RNA, you run it on a gel to separate by size, you transfer it to a membrane, and you probe with a radioactive piece of DNA that's complementary to your gene of interest. Wait a few days. Expose to film. See a band. Measure how dark the band is. That tells you, approximately, how much of that one specific RNA was in your sample. Beautiful technique. Slow. Limited to one gene at a time. Or maybe a few, if you stripped the membrane and reprobed. Not a genome-wide method.

In the early 1990s, two methods tried to scale this up. **Differential display**, invented by Liang and Pardee in 1992, used a clever PCR scheme to amplify many random RNAs from two samples in parallel and run them side by side on a gel, looking for bands that appeared in one sample but not the other. Each band was a candidate differentially expressed gene. You could then cut the band out and sequence it. The technique worked, but it was finicky, low-throughput, and produced false positives by the dozen. **SAGE — Serial Analysis of Gene Expression**, invented by Vogelstein, Velculescu, and Kinzler at Johns Hopkins in 1995, was more clever. You take all the mRNAs in a sample, you cut a short tag — about ten base pairs — out of each one at a defined position, you concatenate the tags into long strings, you Sanger-sequence the strings, and you count how often each tag appears. Each tag identifies its parent gene. The frequency of tags is your expression level. SAGE was genuinely genome-wide, and it was quantitative — you were counting molecules — but it was expensive, because you needed a lot of Sanger sequencing, and it was technically demanding. SAGE was a forerunner of RNA-seq, in spirit. It was counting tags. RNA-seq is counting reads. The conceptual structure is the same; the technology was just not yet capable.

\[Pause.\]

The technique that actually broke open genome-wide expression measurement was **the DNA microarray**, sometimes called the gene chip. The basic idea was elegant. Take a glass slide. Print thousands of tiny spots on it, with each spot containing a different synthetic DNA sequence — each spot corresponding to one specific gene's mRNA. Now extract RNA from your sample, label it with a fluorescent dye, and wash it over the slide. mRNAs from each gene will hybridize to the spots that contain their complementary sequence. After a wash to remove unbound RNA, you scan the slide with a fluorescence scanner. The intensity of fluorescence at each spot is proportional to how much of that gene's RNA was in your sample.

Two companies dominated the microarray era. **Affymetrix**, founded in 1992 in Santa Clara, used a clever photolithography process — borrowed from the semiconductor industry — to synthesize short DNA probes directly on a glass surface, in situ, by UV-light-directed chemistry. An Affymetrix chip — they branded it "GeneChip" — had hundreds of thousands of probe pairs corresponding to every known gene in a model organism. **Agilent**, the spinoff from Hewlett-Packard, took a different approach: they used ink-jet printing technology to spot longer pre-synthesized oligonucleotides onto glass. The Affymetrix chips were short-probe, in-situ synthesized; the Agilent chips were long-probe, printed. Both worked. Both became standard. By the early 2000s, microarrays were everywhere.

I want to give you a sense of what the microarray era actually felt like. If you were a postdoc in 2003 and you wanted to do a genome-wide expression analysis, you would extract RNA from your samples, send it to your institution's microarray core, and wait three weeks for the data to come back. The data came back as a spreadsheet with one row per gene and one column per sample, with a fluorescence intensity in each cell. You'd analyze it in a tool called Bioconductor, or in a commercial package, looking for genes whose intensities went up or down between your conditions. The whole field developed an enormous bioinformatics infrastructure around this kind of data — normalization methods, batch correction techniques, differential expression statistics, multiple testing correction. A lot of what we now consider standard RNA-seq analysis was actually invented for microarrays first, and then ported over.

\[Pause.\]

But microarrays had real limitations, and they were the limitations that eventually killed them. **First**, you could only measure expression of genes you already knew about. The chip had a fixed set of probes, designed against a fixed list of transcripts in a reference catalog. Novel transcripts, novel splice isoforms, novel non-coding RNAs — invisible. The chip didn't know they existed. **Second**, microarrays had a limited dynamic range — they topped out at about three to four orders of magnitude of expression difference, because the fluorescence signal saturated at the high end and was lost in background noise at the low end. Real biology spans about six orders of magnitude in mRNA abundance. Microarrays compressed the top and bottom. **Third**, cross-hybridization was a constant problem — RNAs would stick to probes they weren't supposed to stick to, creating false signal. Probe design had to be careful, and even careful design couldn't eliminate the noise. **Fourth**, you couldn't measure splice isoforms reliably. A single gene might produce five different mRNA isoforms by alternative splicing, and the microarray probes either summed them together or, at best, distinguished a couple. **Fifth**, comparing across microarray platforms was hard — the same RNA, hybridized to an Affymetrix chip and an Agilent chip, would give different numbers, and reconciling them required careful normalization that often didn't fully work.

So by the mid-2000s, the field was hungry for something better. Something genome-wide, something that could see novel transcripts, something with wide dynamic range, something that could measure isoforms, something that could be compared across labs without elaborate calibration. The technology that delivered all of that was next-generation sequencing — specifically Illumina sequencing, which we covered in detail in another lecture in this series. Once you had a machine that could read tens of millions of short DNA sequences cheaply and in parallel, the question of how to use it for gene expression became obvious. Instead of hybridizing RNA to fixed probes on a chip, you'd just convert the RNA to DNA and sequence all of it, and count how many reads came from each gene. No probes. No fixed catalog. No saturation. No cross-hybridization. Just counting molecules, with the same instrument that was sequencing genomes.

That conceptual leap — from probe-based to sequence-based gene expression measurement — was the birth of RNA-seq. Let's go to 2008, which is when it actually happened.

---

## SEGMENT 3 — 2008 — the papers that launched RNA-seq

The conceptual idea of sequencing RNA was not new in 2008. People had been thinking about it since the late 1990s. SAGE was, in some sense, an attempt to do it with Sanger sequencing. The problem was always the throughput. You needed cheap, high-volume sequencing for the idea to actually work. By 2007, Illumina had acquired Solexa and was starting to sell instruments that produced tens of millions of short reads per run. The pieces were in place. What was needed was the first careful experiments showing that, yes, you could sequence cDNA from a tissue and get quantitative gene expression measurements that matched or surpassed microarrays.

In 2008, three papers — published within a few months of each other — established RNA-seq as a method. I want to walk through each of them briefly, because the lineage matters and because the techniques they introduced are still essentially the techniques we use today.

**The first paper**, published in May 2008, was from Barbara Wold's lab at Caltech, with Ali Mortazavi as first author. The title was "Mapping and quantifying mammalian transcriptomes by RNA-seq." This was the paper that introduced the term RNA-seq, defined it, and provided the first mammalian transcriptome measurements at this scale. Mortazavi and colleagues took mouse tissues — brain, liver, muscle — extracted RNA, selected poly-A mRNA, fragmented it, reverse-transcribed it, and sequenced about forty million reads per sample on an Illumina Genome Analyzer. They aligned the reads back to the mouse genome, counted reads per gene, and showed that the resulting expression measurements correlated beautifully with prior microarray data while extending the dynamic range. They also introduced the **RPKM** metric — reads per kilobase of transcript per million mapped reads — which we'll discuss in detail in Segment 8. RPKM was the first attempt at a normalization that accounted for both gene length and library depth. It is, in essentially its current form, still in use today, in the slightly-improved form called TPM. Mortazavi's paper was the canonical RNA-seq paper for mammalian work for years.

**The second paper**, published almost simultaneously, was from Michael Snyder's lab at Yale, with Ugrappa Nagalakshmi as first author. The title was "The transcriptional landscape of the yeast genome defined by RNA sequencing." This was the yeast equivalent of Mortazavi's mouse paper — a careful sequencing of the yeast transcriptome at high depth, with detailed analysis of what RNA-seq could reveal that microarrays could not. Nagalakshmi and colleagues found, importantly, that the yeast transcriptome was much more complex than the existing gene catalog suggested. They identified many novel transcripts, novel splice events, antisense transcription — features that microarrays had been blind to. The paper made the case that RNA-seq wasn't just a quantitative improvement on microarrays; it was a qualitative leap, exposing biology that had been invisible.

**The third paper**, also from 2008, was from Joe Ecker's lab at the Salk Institute, with Ryan Lister as first author. The title was something like "Highly integrated single-base resolution maps of the epigenome in Arabidopsis." This one was about a plant — Arabidopsis thaliana — and it combined RNA-seq with DNA methylation profiling in the same study. Lister and colleagues demonstrated that you could do extremely high-resolution transcriptome analysis in any organism with a reference genome, and that combining transcriptome data with epigenomic data gave you a much richer view of gene regulation. This paper helped establish RNA-seq as a multi-organism method, not just something for mice and yeast.

\[Pause.\]

Take a moment to appreciate how quickly the field moved after 2008. By 2010, RNA-seq had become a routine procedure in most genomics core facilities. By 2012, almost every major gene expression study in a high-profile journal was using RNA-seq instead of microarrays. By 2015, microarrays were essentially extinct as a research method — they survived only in some clinical diagnostic contexts where regulatory inertia favored them. The transition took about five years. That's extraordinarily fast for a technology shift in biology. The reason it happened so fast is that RNA-seq was simply better on every axis. It saw novel transcripts. It had wider dynamic range. It measured isoforms. It compared cleanly across labs. And, crucially, the cost dropped fast — as Illumina instruments scaled up, the per-sample cost of RNA-seq fell below the per-sample cost of a microarray, and the disposable-chip economics of Affymetrix and Agilent collapsed.

What I want you to take from this segment is two things. **First**, RNA-seq wasn't invented by one person or one lab. It was the convergence of cheap sequencing — Illumina — with the long-standing desire to measure transcripts genome-wide. The 2008 papers were the moment the convergence became real and the community noticed. **Second**, the basic workflow established in 2008 — RNA extraction, poly-A selection or rRNA depletion, fragmentation, reverse transcription, library prep, sequencing, alignment, counting — is essentially the workflow we still use today. Sixteen years later, the chemistry has been refined, the bioinformatics has been improved, but the architecture is the same. When you read a modern RNA-seq paper, you're reading a direct descendant of Mortazavi, Nagalakshmi, and Lister 2008.

Let's now open the hood and walk through that workflow, step by step.

---

## SEGMENT 4 — The wet-lab workflow — from tissue to library

The bulk RNA-seq workflow can be drawn on the back of a napkin. There are six main steps, and I want to walk through each one carefully, because each step has choices that affect the data you get and the questions you can answer.

**Step one: RNA extraction.** You start with your sample — a piece of tissue, a culture of cells, a tumor biopsy, a yeast pellet, whatever. You need to break the cells open and pull out all the RNA, while keeping the RNA intact. RNA is a fragile molecule. It is, biochemically, the kind of molecule that breaks down in minutes if you're not careful — there are enzymes called RNases on every surface in the lab, on your hands, in dust, in tap water, and they will degrade RNA enthusiastically if given the chance. So step one is RNA extraction with strict RNase-free technique: gloves, dedicated tubes, an RNase inhibitor in the buffer, and a denaturing chaotropic salt — usually guanidinium thiocyanate — that simultaneously kills cells, denatures all enzymes including RNases, and releases the RNA into solution. The two dominant extraction methods are **TRIzol**, which is a phenol-chloroform-based method that separates RNA from DNA and protein by phase separation, and **silica column kits** like Qiagen's RNeasy, which bind RNA to a silica membrane in the presence of high salt and elute it with low-salt buffer. Both methods produce total RNA — all the RNA species in the sample, in proportion to their abundance.

After extraction, you check the quality of your RNA. The standard tool is a fragment analyzer — a Bioanalyzer from Agilent, or a TapeStation, or a Fragment Analyzer from Advanced Analytical. The instrument runs your RNA on a tiny gel and reports a number called the **RIN — RNA Integrity Number** — on a scale of one to ten. RIN of ten means perfectly intact RNA, with sharp peaks for the two large ribosomal RNAs. RIN of one means completely degraded RNA, with a smear and no ribosomal peaks. For RNA-seq, you generally want RIN above seven; below five, the data quality suffers visibly and certain analyses break down. Quality control on the input matters. Garbage in, garbage out.

\[Pause.\]

**Step two: rRNA depletion or polyA selection.** Here is the first big choice you have to make, and it shapes everything downstream. Total RNA in a typical cell is about **eighty percent ribosomal RNA**. That's not a small fraction. If you just sequence total RNA directly, eighty percent of your reads will be from ribosomal RNA, and only twenty percent from the things you actually care about — mostly mRNA, plus some other non-coding species. You're paying for ribosomal RNA sequencing. That's expensive and wasteful. So before library prep, you do one of two things to get rid of the rRNA.

**Option one: poly-A selection.** Mature messenger RNAs in eukaryotes have a long stretch of A nucleotides at their three-prime end — the poly-A tail. Ribosomal RNAs do not. So you take your total RNA, pass it over a column or beads coated with oligo-dT — short stretches of T nucleotides that base-pair with poly-A — and only the poly-A-tailed RNAs stick. You wash away everything else, then elute. What comes off the column is mature, processed mRNA. This is the default for most RNA-seq experiments, because mRNAs are what people usually care about, and poly-A selection is cheap, efficient, and well-established.

**Option two: rRNA depletion.** You take your total RNA, hybridize it to a set of probes specific to ribosomal RNA, and pull those rRNA molecules out — either with magnetic beads or with enzymatic degradation. What's left is everything except rRNA — including mRNA, but also long non-coding RNAs, immature pre-mRNAs, small nucleolar RNAs, and various other non-coding species. The standard commercial kits are Illumina's Ribo-Zero and NEB's NEBNext rRNA depletion. They work well, though they're more expensive than poly-A selection.

Here's the analogy. **rRNA is eighty percent of your starting material, and it's basically the same in every sample — it's not telling you anything biological. You can either remove it by pulling out only the poly-A tails — poly-A selection, which gives you mature mRNAs only — or by specifically degrading the rRNA itself — rRNA depletion, which gives you everything except rRNA, including non-coding RNAs and unprocessed transcripts.** Poly-A selection is simpler, cheaper, and gives you clean mRNA. rRNA depletion is more inclusive, more expensive, and gives you a broader view of the transcriptome. The choice depends on what you want to see. If you want mRNA only — which covers maybe ninety percent of RNA-seq experiments — go poly-A. If you want long non-coding RNAs, pre-mRNAs, mitochondrial transcripts, or you're working with degraded RNA from FFPE samples where the poly-A tails are gone, go rRNA depletion.

\[Pause.\]

**Step three: fragmentation.** RNA molecules are too long to sequence directly with Illumina chemistry, which reads at most a few hundred base pairs per fragment. So you fragment the RNA into shorter pieces — typically two to three hundred base pairs long. The standard method is chemical or thermal fragmentation: you incubate the RNA in a divalent cation buffer at elevated temperature, and the heat plus magnesium ions hydrolyze the RNA at random positions, producing a smear of short fragments. Alternative methods include enzymatic fragmentation with RNase III, or acoustic shearing.

**Step four: reverse transcription.** RNA is hard to sequence directly. (There is one exception — Oxford Nanopore can sequence RNA directly, which we'll discuss in Segment 14 — but for standard Illumina-based bulk RNA-seq, you convert to DNA first.) Reverse transcription uses an enzyme called reverse transcriptase — derived from retroviruses — that copies RNA into complementary DNA, called **cDNA**. You add a primer that anneals to the RNA — either an oligo-dT primer if you're working with poly-A-selected mRNA, or random hexamers if you want unbiased coverage — and the reverse transcriptase extends from that primer, synthesizing a DNA copy of the RNA. Then you do a second-strand synthesis step to make the cDNA double-stranded. Now you have a tube of double-stranded DNA fragments derived from your RNA. From this point on, everything is the same as a DNA sequencing library prep.

**Step five: library prep — adapters and indexes.** You take your double-stranded cDNA, end-repair it, A-tail it, and ligate sequencing adapters onto both ends — the same adapters we discussed in the Illumina lecture, with their flow-cell binding sequences and primer binding sites. You add an index — a short barcode unique to this sample — so you can multiplex with other samples on the same flow cell. You PCR-amplify the library to bring it up to the concentration needed for the instrument. The output is a tube of adapter-tagged, indexed DNA fragments, ready for sequencing.

**Step six: sequencing.** You pool many libraries together, load the pool onto an Illumina flow cell, and run the instrument. You get back tens of millions of short reads per sample, typically paired-end, typically 50 to 150 base pairs per end. Each read is a tiny snippet of one of your original RNA molecules. **Reads are tiny snippets of the original RNA — millions of them, each 50 to 150 base pairs long.** What you do with those reads is the rest of this lecture.

The whole wet-lab workflow takes one to three days, depending on the kit and the level of automation. It's now routine at every genomics core facility on Earth. Most modern kits are sold as one-tube workflows where you put in total RNA at one end and get out a finished library at the other. Cost: somewhere between thirty and a hundred dollars per sample for the library, plus the sequencing cost on top.

---

## SEGMENT 5 — PolyA versus rRNA depletion in detail — when to pick which

I want to spend a full segment on the polyA-versus-rRNA-depletion choice, because it's the single most consequential decision in your experiment design, and people get it wrong all the time. Get it wrong, and you've spent thousands of dollars on data that can't answer the question you cared about. Get it right, and you've optimized your sequencing dollar for the biology you actually want to see.

Let me set up the trade space concretely. In a typical eukaryotic cell, the RNA composition by mass is roughly: 80% ribosomal RNA, 10% transfer RNA, 5-10% messenger RNA, 1-2% small nuclear RNAs and other small species, and less than 1% long non-coding RNA. So if you just sequence total RNA without enrichment, 80% of your reads go to rRNA, 10% to tRNA, and only the remaining 10% to everything else — mRNAs, lncRNAs, the things you probably care about. Sequencing is paid per read. You're paying ninety cents of every dollar to sequence things that have nothing to do with your biological question.

**Poly-A selection** solves this by pulling out only the molecules with a poly-A tail. In eukaryotes, mature mRNAs are poly-adenylated as part of normal processing — the cell adds the poly-A tail in the nucleus before exporting the mRNA to the cytoplasm. So poly-A selection pulls out, predominantly, mature processed mRNAs. The yield of poly-A-selected RNA is typically about 2-5% of total RNA. The composition of that yield is roughly 95% mRNA, 2-3% rRNA (which sneaks through despite the selection), and trace amounts of lncRNAs (because some lncRNAs are also poly-adenylated). After poly-A selection, your library is overwhelmingly mRNA. That's exactly what you want for measuring gene expression. Sequencing this library at, say, 30 million reads per sample means almost all 30 million reads are informative about mRNA abundance.

\[Pause.\]

**rRNA depletion** takes a different approach. Instead of pulling out the molecules you want, you specifically remove the molecules you don't want. You take total RNA, hybridize it to a set of probes that are complementary to ribosomal RNA sequences — and to mitochondrial rRNA, and sometimes to globin mRNA if you're working with blood — and pull the rRNA out, either by attaching the probes to magnetic beads and pulling them with a magnet, or by degrading the rRNA enzymatically with RNase H, which specifically cleaves RNA-DNA hybrids. After rRNA depletion, what's left is everything except rRNA: mRNA, lncRNAs, pre-mRNAs, antisense RNAs, small nucleolar RNAs, mitochondrial mRNAs, and any non-poly-adenylated transcripts your cells happen to make.

Here's when each is the right choice.

**Use poly-A selection if:** you only care about mature mRNA, your RNA is high-quality (RIN above seven), your organism is a standard eukaryote with poly-A tails (most animals, plants, fungi), and you want the cheapest, simplest, most reproducible library prep. This is the default for routine differential expression experiments. If somebody says "I want to know which genes are up or down between condition A and condition B," poly-A is almost always the right answer.

**Use rRNA depletion if:** you want to see lncRNAs, which are increasingly important in disease biology and often poorly poly-adenylated; you want to see pre-mRNAs and intronic signals, which is useful for measuring transcription rates; you're working with bacteria, which don't have poly-A tails at all; you're working with FFPE samples, where the RNA is degraded and the poly-A tails are often gone, breaking poly-A selection; or you specifically want to see mitochondrial RNA, which is not always efficiently poly-adenylated. rRNA depletion is also the right choice if you want to compare RNA-seq results to other genomic data types that capture nascent transcription, like GRO-seq or PRO-seq, where intronic signal matters.

One more practical detail. Both methods leave behind some rRNA contamination — typically a few percent of total reads end up being rRNA, even after enrichment or depletion. You should always include an rRNA QC check in your post-alignment analysis. A library with thirty percent rRNA reads is broken. A library with three percent rRNA reads is fine.

\[Pause.\]

A note on bacteria, which I'll come back to occasionally. Bacterial mRNAs do not have poly-A tails. So poly-A selection does not work for bacterial RNA-seq. You must use rRNA depletion. Commercial kits exist for this — Illumina's Ribo-Zero Plus has bacterial probe sets, and Qiagen's QIAseq FastSelect has bacterial options. Bacterial RNA-seq is a smaller but important sub-field; if you're doing it, plan for rRNA depletion from the start.

A note on FFPE — formalin-fixed paraffin-embedded — samples, which are the standard archived material in pathology. Pathologists embed tumor samples in paraffin wax after fixation in formalin, and they keep these blocks for years, sometimes decades. The RNA in FFPE samples is heavily degraded — the formalin chemistry cross-links the RNA, and time fragments it further. The poly-A tails are usually shortened or gone. So you cannot use standard poly-A selection on FFPE RNA. Modern FFPE-specific kits use rRNA depletion combined with specialized library preps that work with very short, fragmented input RNA. This is how clinical labs do RNA-seq on archived tumor samples — including the millions of samples in pathology archives that nobody knew you'd want to sequence when they were collected.

The headline of this segment: **the polyA-versus-rRNA-depletion choice is about whether you want mature mRNAs only, or everything except ribosomes.** It's the single most important decision in your library prep. Get it right at the start; you can't go back.

---

## SEGMENT 6 — Alignment and pseudoalignment — STAR, HISAT2, Salmon

Your reads come off the Illumina instrument as a giant pile of short DNA sequences, each one a snippet of one of the original RNA molecules. To figure out which gene each read came from, you need to align the reads to a reference genome. This is the step that turns raw sequence data into biological measurements. Alignment is computationally expensive, and the tools have evolved a lot. Let me walk through the major approaches.

The simplest version of the problem is this. You have a read — say, fifty letters of A, T, G, C — and you have a reference genome — three billion letters of A, T, G, C. Where in the reference does this read come from? In the best case, the read matches some thirty-base stretch of the reference exactly, and the match is unique — only one place in the genome matches. You report that location. In practice, there are complications: the read may have one or two sequencing errors that don't match the reference, the read may match multiple places (because the gene has paralogs or pseudogenes), the read may span a splice junction — where the original RNA was spliced together from two exons that are far apart in the genome — and the read has to be split across that junction.

Splice junctions are the hard part for RNA-seq alignment. A read of 100 base pairs might come from the boundary between two exons that are 50,000 base pairs apart in the genome. The first 60 letters of the read match the end of exon one; the next 40 letters match the beginning of exon two; and in between, in the genome, there's a 50,000-base intron that doesn't appear in the read at all. A naive aligner — one that just looks for contiguous matches — will fail to align this read, because no single 100-base stretch of the genome matches it. A **splice-aware aligner** can detect that the read is split across a splice junction and align both halves correctly. RNA-seq specifically requires splice-aware aligners.

\[Pause.\]

The two dominant splice-aware aligners are **STAR** and **HISAT2**.

**STAR** — Spliced Transcripts Alignment to a Reference — was developed by Alex Dobin at Cold Spring Harbor, published in 2013. STAR is fast, accurate, and the de facto standard for most modern bulk RNA-seq work. It uses a clever data structure called a suffix array — basically a sorted index of all possible substrings of the genome — to find candidate match locations very quickly. Then it does a more careful local alignment around each candidate. For each read, STAR can decide whether to align it as a contiguous block, or split it across a splice junction. STAR is the workhorse. Most large-scale RNA-seq projects, including ENCODE and the GTEx project, use STAR.

**HISAT2** — Hierarchical Indexing for Spliced Alignment of Transcripts — was developed by Steven Salzberg's lab at Johns Hopkins, also around 2015. HISAT2 uses a different data structure — a graph-based index that incorporates known variants — and is memory-efficient compared to STAR. For institutions with limited compute, HISAT2 is often preferred. Both tools produce essentially equivalent results for standard differential expression analysis.

The output of either STAR or HISAT2 is a file called a **BAM file** — Binary Alignment Map — which contains, for every read, the genomic coordinates it was aligned to, the alignment quality, the orientation, and any soft-clipped regions. This is the standard file format that all downstream tools consume.

\[Pause.\]

Now, in the last few years, a different approach has become popular: **pseudoalignment**. The classical alignment approach asks, for each read, where in the genome does this read match? Pseudoalignment asks a slightly different and computationally much cheaper question: for each read, which transcripts is this read compatible with? You don't compute the exact alignment. You just figure out which transcripts the read could have come from, based on which k-mers — short subsequences — it shares with each transcript. This is sometimes called a transcript-level approach, because it works directly against a catalog of known transcripts, not against the genome.

The dominant pseudoalignment tool is **Salmon**, developed by Rob Patro and colleagues. There's also **kallisto**, from Lior Pachter's lab, which works similarly. Both Salmon and kallisto are dramatically faster than STAR — orders of magnitude faster — and they directly produce transcript-level abundance estimates, including estimates that account for ambiguous reads that could come from multiple isoforms. For applications where you want transcript-level expression — for example, when you care about alternative splicing — Salmon is often the right choice. For applications where you want to look at novel transcripts or unannotated regions, you still need a genome aligner like STAR.

Here's the trade-off. **STAR is alignment to the genome — slower, but tells you where every read maps and can detect novel things. Salmon is pseudoalignment to a transcript catalog — faster, more direct estimates of transcript abundance, but limited to what's in the catalog.** Both are widely used. A modern RNA-seq pipeline often runs both, using STAR for QC and structural analysis and Salmon for quantitation.

A practical note. Whatever aligner you use, the output is going to require a reference genome and a gene annotation file. The reference genome is the genome sequence in a file called a FASTA. The annotation file is a list of where every gene's exons and transcripts are, in a file called a GTF or GFF. For human, the standard annotation is GENCODE, maintained by the GENCODE consortium. For mouse, GENCODE also produces a mouse annotation. For other model organisms, Ensembl is the standard. Picking the right annotation matters. The same RNA-seq data, analyzed with two different annotations, can produce slightly different gene counts. The community has standardized on GENCODE for most work, but you should always document which annotation version you used.

The output of this step is a set of reads aligned to genomic coordinates, ready for counting. That's the next segment.

---

## SEGMENT 7 — Counting reads per gene — featureCounts, HTSeq, and the count matrix

You have a BAM file full of aligned reads. Now you need to translate that into a per-gene count: how many reads landed on each gene in the genome. This sounds straightforward, and at the high level it is. But there are subtleties — overlapping genes, ambiguous reads, multi-mapping, strand-specific considerations — that you have to handle correctly, and the tools encode specific choices about each.

The two standard counting tools are **HTSeq-count** and **featureCounts**. HTSeq-count, written by Simon Anders, was the first widely-used counting tool and is part of the broader HTSeq Python library. featureCounts, part of the Subread package developed by Yang Liao and colleagues, is faster and more flexible and has overtaken HTSeq in most modern pipelines. Both do essentially the same thing: take a BAM file of aligned reads and a GTF annotation file describing where the genes are, and produce a table — one row per gene, one column per sample — of the number of reads that overlap each gene.

How does the counting work, mechanically? For each aligned read, the tool checks which genomic features — exons, transcripts, genes — the read overlaps. If the read overlaps exactly one gene unambiguously, it gets counted toward that gene. If the read doesn't overlap any annotated gene, it gets counted as "no feature" and discarded. If the read overlaps multiple genes — which happens when genes are on opposite strands of the same region, or when a read spans two adjacent genes — the tool has to make a decision. The default behavior is "ambiguous, do not count" — the read is discarded to avoid biasing any single gene's count. This is conservative and is the right default for differential expression.

\[Pause.\]

A subtlety that bites people: **strand-specific libraries**. Most modern RNA-seq library preps preserve information about which strand of the RNA the read came from. This is called a stranded library. There are two flavors — forward-stranded, used by Illumina's TruSeq Stranded mRNA kit, and reverse-stranded, which is what most other kits actually produce — and you have to tell the counting tool which one your library is. Get it wrong, and you'll count reads against the wrong strand of every gene, and your counts will be tiny and meaningless. Most counting tools have a "stranded" flag that you set to "yes," "no," or "reverse." Modern pipelines often check the strandedness empirically — looking at where reads fall relative to known genes — and warn you if the flag is mis-set.

The output of this step is the **count matrix**: a table with one row per gene (typically about 20,000 protein-coding genes plus 20,000 to 50,000 non-coding loci, depending on the annotation), and one column per sample. Each cell is an integer: the number of reads in that sample that mapped to that gene. The count matrix is the canonical data structure of RNA-seq. Everything downstream — normalization, differential expression, clustering, visualization — operates on this matrix.

Let me give you a sense of the numbers. For a typical bulk RNA-seq experiment with 30 million reads per sample and 12 samples, after alignment and counting, you'll have a matrix that's about 60,000 rows by 12 columns. The values in the matrix range from zero (genes with no expression) to a few hundred thousand (extremely highly expressed genes like ribosomal proteins or housekeeping genes). The distribution is very right-skewed — most genes have low or zero counts, and a small number of genes have huge counts. This skewness shapes everything about how you analyze the data, which we'll get to in the next segment.

\[Pause.\]

One important variant I want to flag. For some applications — particularly single-cell, but increasingly for bulk too — you'll see a tool called **STAR-Solo** or **alevin-fry** that performs alignment and counting together, using UMIs (unique molecular identifiers) to count molecules rather than reads. UMIs are short random barcodes added to each cDNA molecule during library prep, so that PCR duplicates can be identified and counted only once. UMI-based counting eliminates PCR bias and gives you a more accurate count of original RNA molecules. In bulk RNA-seq, UMIs are optional and not yet standard, but you'll see them in some newer kits, especially for low-input applications. We'll touch on UMIs again briefly in the single-cell comparison in Segment 15.

For now, you have a count matrix. Sixty thousand genes by twelve samples. Pure integers. This is the raw material for everything that follows.

---

## SEGMENT 8 — Normalization — RPKM, FPKM, TPM, and what they fix

The count matrix is raw. The numbers in it depend on two things that have nothing to do with biology: how deeply each sample was sequenced (the library size), and how long each gene is. These are technical artifacts. If you sequenced sample one to 30 million reads and sample two to 60 million reads, sample two will have twice as many reads for every gene, even if the underlying biology is identical. If gene A is 1,000 base pairs long and gene B is 10,000 base pairs long, gene B will tend to get ten times as many reads, even if they're both expressed at the same molecular abundance, because gene B has more places for reads to land. You need to normalize away both of these effects before you can compare anything.

The historical normalization metrics are **RPKM**, **FPKM**, and **TPM**. Let me walk through each.

**RPKM — Reads Per Kilobase per Million** — was introduced in Mortazavi 2008. For each gene, you take the raw read count, divide by the gene length in kilobases, and divide by the total number of mapped reads in the sample divided by one million. So:

RPKM = (read count) / (gene length in kb × total mapped reads in millions).

This normalizes for both gene length (longer genes get more reads, so divide them out) and library size (deeper sequencing gives more reads, so divide that out). RPKM was the first widely-used RNA-seq expression metric.

**FPKM — Fragments Per Kilobase per Million** — is the same formula, but applied to read pairs (fragments) rather than individual reads in a paired-end library. FPKM and RPKM are essentially identical for single-end data and differ by a factor of two for paired-end data. The terminology is mostly historical — Cufflinks, an early RNA-seq analysis package, used FPKM. People say FPKM in some communities, RPKM in others. They are the same idea.

\[Pause.\]

**TPM — Transcripts Per Million** — was introduced a few years later, and it's the metric you should actually use today. The mathematical innovation is subtle but matters. RPKM divides by gene length first, then by library size. TPM does it in the reverse order: divide by gene length first to get a per-base abundance, then sum those per-base abundances across all genes, then normalize each gene by that sum, scaled to a million. The result is that the TPM values in any sample sum to exactly one million — which means TPM is a true proportion, comparable across samples. RPKM does not have this property; the sum of RPKM values varies across samples, which makes comparing them awkward.

Concretely: if gene A has TPM 100 in sample one and TPM 100 in sample two, that genuinely means the same proportion of total mRNA in both samples is coming from gene A. If gene A has RPKM 100 in sample one and RPKM 100 in sample two, the underlying proportions might be different, depending on what other genes were doing. So TPM is the cleaner, more interpretable metric. The community has been migrating from RPKM/FPKM to TPM for the better part of a decade. Modern papers should report TPM.

Here's the analogy. **FPKM and TPM are the comparison unit — read counts normalized for both gene length and library depth, so that genes are comparable within and across samples.** Without these normalizations, you can't compare gene A to gene B (because they're different lengths), and you can't compare sample one to sample two (because they have different depths). With them, you can ask: is gene A more highly expressed than gene B? Is sample one expressing more of gene A than sample two? And get meaningful answers.

\[Pause.\]

That said — and this is important — **TPM is not what you use for differential expression**. TPM is a within-sample, per-gene proportion. It's good for visualizing expression levels, comparing one gene to another, putting numbers on a heatmap. But for the statistical test of "is this gene more highly expressed in condition A than in condition B," modern tools — DESeq2, edgeR, limma-voom — go back to the raw counts and apply their own internal normalization, which is designed specifically for the statistical model. Those internal normalizations — DESeq2's median-of-ratios, edgeR's TMM (trimmed mean of M-values) — are more robust to genes that are extremely highly expressed in only one sample, which can throw off simple library-size normalization. The right workflow is: use raw counts as input to your differential expression tool; let the tool do its own normalization; use TPM separately for visualization and reporting.

DESeq2's median-of-ratios works like this. For each gene in each sample, it computes the ratio of that gene's count to the geometric mean of that gene's count across all samples. Then it takes the median of those ratios across all genes in a sample, and uses that median as the size factor for the sample. The intuition: most genes don't change between conditions, so the median ratio across all genes is a robust estimate of the relative library size. edgeR's TMM is conceptually similar but trims the top and bottom of the gene distribution before computing a weighted mean. Both methods are more robust than naive library-size normalization and have become the standard for differential expression.

The headline of this segment: **report TPM for visualization, but feed raw counts to your differential expression tool and let it handle normalization.** Get this right and your statistics will be sound. Get it wrong — for example, by computing differential expression on TPM values directly — and you'll have all kinds of subtle problems that will eventually show up as inconsistent results.

---

## SEGMENT 9 — Differential expression analysis — DESeq2 and the negative binomial

Differential expression is the question RNA-seq is almost always asked. Given two conditions — treated versus untreated, tumor versus normal, day zero versus day seven of differentiation — which genes are expressed at significantly different levels? This is the bread and butter of bulk RNA-seq. Almost every published RNA-seq paper has, at its core, a differential expression analysis.

The statistical problem is harder than it looks. Naively, you might think: compute the mean expression of each gene in condition A, the mean in condition B, do a t-test, done. But this fails for several reasons.

**First**, RNA-seq counts are integer counts of discrete events, not continuous values. The t-test assumes continuous, normally distributed data. The right family of statistics for count data is the Poisson distribution or its generalizations.

**Second**, RNA-seq data is overdispersed compared to Poisson. A pure Poisson process predicts that the variance equals the mean. In real RNA-seq data, the variance is much larger than the mean, especially for highly expressed genes, because of biological variability between replicate samples. The right distribution for modeling this overdispersion is the **negative binomial**, which has two parameters — a mean and a dispersion — and can fit the actual variance-mean relationship of real data.

**Third**, you typically have only a handful of replicates per condition — three to six samples, often — so estimating the dispersion for each gene independently is unreliable. You don't have enough data per gene. The trick the modern tools use is to **share information across genes** — to assume that genes with similar mean expression have similar dispersion, and to fit a shared dispersion model across the whole dataset. This dramatically improves the statistical power.

**Fourth**, you're testing twenty thousand or more genes simultaneously. Without multiple testing correction, even at a per-test alpha of 0.05, you'd expect a thousand false positives by chance. You need to control either the family-wise error rate (Bonferroni) or, more commonly, the false discovery rate (Benjamini-Hochberg) at some chosen threshold, typically 5%.

\[Pause.\]

The two dominant tools that solve this problem are **DESeq2** and **edgeR**. They were developed independently, in parallel, in different labs — DESeq2 by Mike Love, Simon Anders, and Wolfgang Huber at the EMBL; edgeR by Mark Robinson, Davis McCarthy, and Gordon Smyth in Australia. They produce very similar results in practice, and both have stood the test of time. A third related tool, **limma-voom**, developed by the Smyth group, takes a different approach: it transforms counts to log space, models them as linear, and uses the linear model framework — but it's most commonly used for microarray-like analysis and large-sample studies. For typical bulk RNA-seq with small replicate numbers, DESeq2 or edgeR is what you want.

Let me describe DESeq2 in more detail, because it's the more commonly used of the two and it's a beautifully designed tool.

DESeq2 takes as input the raw count matrix and a metadata table describing each sample's experimental condition. It does five things internally:

**One**: it normalizes library sizes using the median-of-ratios method we discussed in Segment 8.

**Two**: it estimates dispersion for each gene, then shrinks those estimates toward a fitted trend using empirical Bayes — borrowing strength across genes to stabilize the dispersion estimates. This is the variance-mean modeling that lets DESeq2 work with small replicate numbers.

**Three**: it fits a generalized linear model to each gene, using the negative binomial as the underlying distribution.

**Four**: it tests the coefficient corresponding to your experimental condition — does adding the condition variable significantly improve the model fit? — using a Wald test or a likelihood ratio test.

**Five**: it adjusts all the per-gene p-values for multiple testing using the Benjamini-Hochberg false discovery rate method.

The output is a table with one row per gene, containing the log fold change (how much the gene went up or down between conditions, in log-2 space), the standard error of that estimate, the raw p-value, and the adjusted (FDR-corrected) p-value. Genes with adjusted p-value below your chosen threshold — usually 0.05 or 0.1 — are your differentially expressed genes.

\[Pause.\]

Here's the analogy I want you to hold. **DESeq2 is the statistician's tool. It knows that highly expressed genes are noisier than lowly expressed ones, it accounts for the right variance structure, it borrows strength across genes to estimate dispersion robustly, and it corrects for multiple testing.** When you read a paper that says "we identified 247 differentially expressed genes at FDR less than 0.05," what they almost certainly did is run DESeq2 (or edgeR), and the 247 number reflects all of that machinery.

A few things to know about interpreting differential expression results. **Fold change matters as well as significance.** A gene with a tiny fold change — say, log-2 fold change of 0.1, meaning the gene went up by about 7% — can still have a tiny p-value if you have very many replicates and very precise measurements. But that 7% change may not be biologically meaningful. Most papers filter for both adjusted p-value below some threshold AND absolute log fold change above some threshold, typically 1 (meaning a 2-fold change). That's the right thing to do.

**Direction matters.** A gene with log-2 fold change of +2 went UP by 4-fold. A gene with log-2 fold change of -2 went DOWN by 4-fold. Most volcano plots — the standard visualization — show fold change on the x-axis and minus-log p-value on the y-axis, so the upregulated genes are on the right and the downregulated are on the left, both rising to the top as significance increases.

**Sample size matters a lot.** With three replicates per condition, your power to detect modest fold changes is limited. With six or eight replicates per condition, you have substantially more power. Most rigorous experiments aim for at least four to six replicates per condition. If you only have three — which is unfortunately common — you should be especially conservative about interpreting marginal results.

That's differential expression. The core statistical workflow of bulk RNA-seq. The tools are mature, the methods are well-validated, and the community has converged on best practices. Now let's talk about what to do with your list of differentially expressed genes.

---

\[BREAK\]

After we come back from the break, we'll pick up with what to do with a list of differentially expressed genes — gene set enrichment, pathway analysis — then alternative splicing, then quality control, then long-read RNA-seq, then bulk versus single-cell, then clinical applications and the public datasets. Take ten minutes.

---

## SEGMENT 10 — Gene set enrichment and pathway analysis — GSEA, GO, the second-order view

Welcome back. We left off with a list of differentially expressed genes — say, 247 of them, at FDR less than 5%. Now what? Staring at a list of 247 gene symbols is not, by itself, biology. You want to know what those genes _do_. You want to know whether they cluster into pathways, into cellular processes, into shared functions. This second-order analysis — moving from individual genes to pathways and gene sets — is where bulk RNA-seq results actually become interpretable biology.

There are two broad approaches: **over-representation analysis** and **gene set enrichment analysis**. Let me describe each.

**Over-representation analysis** asks: among my list of differentially expressed genes, is any annotated pathway or gene set represented more often than you'd expect by chance? Concretely: take my 247 DE genes. How many of them are in the "cell cycle" pathway from the KEGG database? Say it's 40. If I'd randomly drawn 247 genes from the whole genome, how many would I expect to be in "cell cycle"? Maybe 20. The chance of 40 by random draw — calculated by the hypergeometric distribution — is very small. So "cell cycle" is over-represented in my DE gene list, suggesting that cell cycle biology is changed in my experimental condition.

This is the simplest pathway analysis and is implemented in many tools. The standard databases are **KEGG** (the Kyoto Encyclopedia of Genes and Genomes, which has curated metabolic and signaling pathways), **Reactome** (a more granular pathway database from EMBL-EBI), and **GO** (the Gene Ontology, which classifies genes into hierarchical functional categories — biological process, molecular function, cellular component). Tools like **DAVID**, **Enrichr**, and **clusterProfiler** (an R package) run over-representation analysis against these databases and produce ranked lists of enriched pathways.

The limitation of over-representation analysis is that it depends on your gene list cutoff. Genes that are biologically meaningful but just above your FDR threshold get excluded; genes just below it get included; the signal is noisy at the boundary. There's a better approach.

\[Pause.\]

**Gene set enrichment analysis — GSEA** — takes a different angle. Instead of cutting your gene list at a threshold, you use all your genes, ranked by their differential expression statistic. Then for each gene set in a database, you ask: are the members of this gene set clustered at the top of the ranked list (meaning they tend to be upregulated), at the bottom (downregulated), or scattered randomly throughout? GSEA computes an enrichment score by walking down the ranked list and accumulating a running sum that goes up when you hit a gene set member and down when you hit a non-member. The maximum (or minimum) of this running sum is the enrichment score, and its statistical significance is computed by random permutation.

GSEA was developed by Aravind Subramanian, Jill Mesirov, and colleagues at the Broad Institute in the mid-2000s — originally for microarray data, then adapted for RNA-seq. The Broad maintains a curated database called **MSigDB — Molecular Signatures Database** — which contains thousands of curated gene sets organized into collections: hallmark pathways (the H collection, fifty broad pathway signatures), curated gene sets (C2, including KEGG, Reactome, BioCarta), motif gene sets (C3), computational gene sets (C4), GO terms (C5), and so on. MSigDB is the standard input for GSEA.

The advantage of GSEA over over-representation analysis is that it uses the full ranking, not just the top hits. It can detect coordinated up- or down-regulation of a pathway even when no individual gene crosses the significance threshold. This matters a lot when the biological signal is broadly distributed across many genes, each with a small effect.

\[Pause.\]

Here's the analogy. **GSEA is the second-order analysis. Instead of asking "is this single gene differentially expressed?" — which can miss broad patterns — you ask "is this pathway or module up or down as a whole?"** It's a different question, and it's often the more biologically meaningful one. A pathway might be coordinately upregulated by 1.3-fold across all its 100 member genes, with no single gene crossing the differential expression threshold — but GSEA will pick this up clearly. Over-representation analysis won't.

A few practical notes. **Use both methods.** Over-representation analysis on your significant DE genes, GSEA on your ranked statistic. They give complementary views. **Pick your gene sets carefully.** MSigDB has too many collections to use all at once. The Hallmark collection (50 broad pathways) is a great place to start. Reactome and KEGG add metabolic and signaling resolution. GO Biological Process gives you functional categories. Don't dump everything in at once — you'll have multiple testing problems at the gene-set level too.

**Cell type signatures matter.** Many MSigDB collections include cell-type-specific signatures derived from single-cell or sorted-cell experiments. Enrichment in a "CD8 T cell" signature, in a bulk RNA-seq sample from a tumor, might mean the tumor is more T-cell-infiltrated, not that the cancer cells have become more T-cell-like. This is the cellular composition confound that bulk RNA-seq has, and we'll come back to it in Segment 18 when we discuss deconvolution.

The output of pathway analysis is the form in which bulk RNA-seq results are usually presented in a paper. Volcano plot of individual DE genes, then a table or barplot of enriched pathways. The pathway view is what makes the biology readable. "Five hundred genes are differentially expressed" is too much for any human reader. "Cell cycle is upregulated and oxidative phosphorylation is downregulated" is a finding you can think about.

---

## SEGMENT 11 — Alternative splicing analysis — rMATS, SUPPA, and MAJIQ

A point that's often missed in introductory RNA-seq courses: **bulk RNA-seq sees splicing**. Every read that crosses a splice junction carries information about which exons were joined together. By counting reads at splice junctions versus reads within exons, you can detect alternative splicing — the same gene producing different isoforms in different conditions. This is one of the most powerful things bulk RNA-seq does that microarrays could not, and it's underused.

Alternative splicing is the process by which a single gene produces multiple distinct mRNA isoforms by selectively including or excluding exons during pre-mRNA processing. The human genome has about 20,000 protein-coding genes, but those genes produce something like 100,000 to 200,000 distinct protein isoforms through alternative splicing. The diversity is huge. Splicing changes are central to development, to cancer, to neurodegeneration. Drugs that target splicing — like Spinraza for spinal muscular atrophy — are showing the clinical importance. If you're doing RNA-seq, you should at least check whether splicing is changing.

The categories of alternative splicing events are: **exon skipping**, where an exon is sometimes included and sometimes excluded; **alternative 5-prime splice sites**, where the start of an exon is shifted; **alternative 3-prime splice sites**, where the end of an exon is shifted; **intron retention**, where an intron sometimes fails to be spliced out and stays in the mature mRNA; and **mutually exclusive exons**, where one of two alternative exons is included but not both. Each can be detected and quantified separately.

\[Pause.\]

The standard tools for splicing analysis are **rMATS**, **SUPPA**, and **MAJIQ**.

**rMATS** — replicate Multivariate Analysis of Transcript Splicing — was developed in Yi Xing's lab. It takes BAM files as input, identifies splicing events from a reference annotation, counts reads supporting included versus excluded isoforms, and computes a statistic called **PSI — Percent Spliced In** — for each event in each sample. Then it tests for significant changes in PSI between conditions. rMATS is fast, well-validated, and handles biological replicates correctly. It's the default for most differential splicing studies.

**SUPPA** is a faster, transcript-quantitation-based tool. It uses Salmon's transcript-level abundance estimates and computes PSI from those, rather than re-counting reads. SUPPA is much faster than rMATS and gives comparable results for most events. It's well-suited for high-throughput screening of splicing changes.

**MAJIQ — Modeling Alternative Junction Inclusion Quantification** — from Yoseph Barash's lab, takes a more flexible approach. Instead of categorizing events into fixed classes (exon skipping, intron retention, etc.), MAJIQ identifies "local splicing variations" — any local choice between alternative splice junctions — and quantifies them. MAJIQ is more flexible but more complex to interpret. It's particularly useful for novel or non-canonical splicing.

Each of these tools produces a list of splicing events with their inclusion levels in each condition and a statistical test for differential splicing. The output looks similar to a differential expression result, but at the event level rather than the gene level.

\[Pause.\]

One important practical point: **splicing analysis requires deeper sequencing than expression analysis**. To get reliable PSI measurements, you need many reads spanning each splice junction. For standard differential expression, 20-30 million reads per sample is usually enough. For splicing, you want 50-100 million reads per sample, ideally 150 bp paired-end so that more reads span junctions. If you only sequenced 20 million reads, you can still attempt splicing analysis, but your power to detect events with moderate PSI changes will be limited.

A second point: **gene-level differential expression and event-level differential splicing are different questions, and you need to look at both**. A gene can be unchanged in total expression but have its isoforms switched — say, increasing one isoform while decreasing another by the same amount. The gene's total RNA stays the same; differential expression analysis says nothing changed. But the protein products are different, and the biology has changed. Splicing analysis catches this; expression analysis misses it.

The most spectacular biology in bulk RNA-seq, in my opinion, often comes from splicing. The neural-specific splicing program. The cancer-specific exon inclusion events. The drug-induced splice switches. If you have RNA-seq data and you've only looked at gene-level differential expression, you've left a lot of biology on the table.

---

## SEGMENT 12 — Library design — strandedness, paired-end, and depth

Before we move on, I want to spend a segment on the practical library design decisions that affect what you can do with your data. These are choices made at the start of the experiment, and you can't easily undo them later. The three big ones are strandedness, paired-end versus single-end, and sequencing depth.

**Strandedness.** I mentioned in Segment 7 that modern libraries are typically stranded — they preserve information about which strand of the RNA the original read came from. Why does this matter? Because in many regions of the genome, there are overlapping genes on opposite strands. Without stranded information, you can't tell whether a read came from the gene on the plus strand or the gene on the minus strand. With stranded information, you can. For organisms with lots of overlapping or antisense transcription — basically all eukaryotes — stranded libraries are the right choice and have been the standard since around 2012.

There are two strand orientation conventions, and they cause endless confusion. **Forward-stranded** means the read corresponds to the same strand as the mRNA. **Reverse-stranded** means the read corresponds to the opposite strand. Most modern kits — Illumina TruSeq Stranded mRNA, NEB Ultra II Directional — produce reverse-stranded libraries. You have to tell your counting tool which convention your library uses, or you'll count the wrong strand. The convention is sometimes called "first-strand" (reverse) versus "second-strand" (forward). The naming is confusing. The practical advice: check your kit's documentation carefully, and verify the strandedness empirically with a tool like RSeQC after sequencing.

\[Pause.\]

**Paired-end versus single-end.** A single-end read is just one read from one end of the fragment. A paired-end read is two reads, one from each end of the same fragment, with an inferred insert size between them. Paired-end provides more information per fragment, at roughly the same cost per fragment, so for most applications it's the right choice.

For bulk RNA-seq specifically, paired-end matters most for splicing analysis — the second read often spans a different junction than the first, giving you twice the junction-spanning information per fragment. For differential expression at the gene level, single-end can be sufficient if you're trying to save money. For splicing, structural variant detection, or novel transcript discovery, paired-end is essentially required.

The standard modern bulk RNA-seq protocol is paired-end 150 base pair reads — written as "2x150" or "PE150." Some core facilities run 2x75 to save cost and get more samples per flow cell. Some run 2x100. The right choice depends on what you're doing. For most differential expression studies, 2x50 or 2x75 is plenty. For splicing studies, 2x150 is preferred. Few applications benefit from longer reads than 150 — Illumina chemistry degrades past that point, and longer reads are best done on long-read platforms (Segment 14).

\[Pause.\]

**Depth.** How many reads per sample do you need? This depends on the biology and the question. The rough guidelines are:

- **Bulk differential expression**, focused on protein-coding genes: 20-30 million reads per sample is sufficient. Diminishing returns set in past 50 million.

- **Splicing analysis**: 50-100 million reads per sample. More reads spanning junctions means more reliable PSI estimates.

- **Novel transcript discovery, lncRNA quantitation**: 50-100 million reads, ideally with rRNA depletion rather than poly-A selection.

- **Allele-specific expression** (looking at expression from each parental allele in a hybrid or heterozygous sample): 100 million reads or more per sample.

- **Very low-abundance transcripts, ultra-deep biology**: 200 million reads or more per sample. Diminishing returns are real, but for some questions you need extreme depth.

Most published bulk RNA-seq experiments are in the 20-50 million range per sample. That's the modern standard. Going much deeper rarely changes the conclusions for standard differential expression.

A practical point about cost. Sequencing cost is roughly proportional to depth. Doubling your reads doubles your cost. So depth decisions have real budget consequences. For a typical study with, say, 24 samples at 30 million reads each — that's 720 million reads total, which fits on roughly a third of a NovaSeq lane. Total sequencing cost in the few-thousand-dollar range. Library prep cost on top, in the low thousands. The total cost for a 24-sample bulk RNA-seq study is in the $5,000-$15,000 range, depending on the institution. That's why bulk is the workhorse — at that price point, you can run hundreds or thousands of samples for the cost of one big single-cell experiment.

That's library design. Strandedness yes, paired-end yes, depth at 20-30 million for most applications. Reasonable defaults; deviate from them only when you have a specific reason to.

---

## SEGMENT 13 — Quality control — FastQC, PCA, batch effects, and ComBat-Seq

Quality control is the part of RNA-seq analysis that separates careful work from sloppy work. There are about a dozen checks you should run on every dataset, before and after analysis. I want to walk through the most important ones, because skipping QC is the leading cause of papers that get retracted or quietly contradicted.

**Per-sample read quality — FastQC.** The first thing you do, before any alignment, is run FastQC on each FASTQ file. FastQC produces a report with about a dozen plots: the per-base quality scores across the read, the GC content distribution, the duplication level, the adapter contamination level, the overrepresented sequences. You're looking for any sample that looks dramatically different from the others — a sample with very low quality scores past base 50, or a sample with bizarre GC content, or a sample where 30% of reads are PCR duplicates. These samples are suspect. Sometimes the right answer is to re-prepare the library; sometimes you have to drop the sample. Always look.

**Adapter trimming.** Sometimes reads are longer than the original fragment, and the read extends past the end of the fragment into the sequencing adapter. These adapter-contaminated reads need to be trimmed before alignment, or they won't align properly. Tools like Trim Galore, Trimmomatic, and fastp do this automatically. Most modern pipelines trim adapters as a first step. Always check the trimming summary — if your kit is generating a lot of short fragments and your trimming is removing 30% of read content, that's a sign your library prep wasn't optimal.

**Alignment rate.** After alignment, check how many of your reads aligned successfully. For a well-prepared bulk RNA-seq library, you expect 85-95% of reads to align uniquely to the genome. If you're below 75%, something is wrong — maybe contamination from another organism, maybe the wrong reference genome, maybe a degraded library. STAR and HISAT2 report alignment statistics in their log files. Check them. Look at the unmapped reads. Are they ribosomal RNA that escaped depletion? Mitochondrial transcripts? Foreign organism DNA? Each of these has a different remediation.

\[Pause.\]

**Per-sample summary metrics.** After alignment and counting, run a sample-level QC. Standard metrics include: fraction of reads in protein-coding genes (should be 70-90%); fraction in rRNA (should be under 5%); fraction in mitochondrial genes (high values indicate cell death or stress); 3-prime versus 5-prime coverage bias (a uniform distribution is ideal; strong 3-prime bias suggests RNA degradation); duplication rate (high values suggest low input). Tools like Picard's CollectRnaSeqMetrics, RSeQC, and MultiQC aggregate these metrics across all your samples into a single report. Always look.

**Sample clustering — PCA and distance heatmaps.** Now you have your count matrix. The most important QC step is to ask: do my samples cluster the way I expect? Run principal component analysis on the normalized counts. Plot the first two principal components, colored by experimental condition. Ideally, samples from the same condition should cluster together, and samples from different conditions should separate. If a tumor sample is sitting in the middle of the normal samples, something is wrong — either the sample was mislabeled, or it's a real biological outlier, or there's a batch effect.

**Batch effects** are the silent killer of RNA-seq experiments. A batch effect is any technical variation that correlates with experimental condition by accident. The classic example: you process all your control samples on Monday and all your treated samples on Tuesday. Now any technical difference between Monday and Tuesday — slight differences in reagent lots, ambient temperature, the technician's mood, anything — gets confounded with the treatment effect. Your differential expression analysis can't distinguish "the treatment did this" from "Tuesday's reagents were different." This is the silent killer because the data looks fine; the statistics work; but the conclusions are wrong.

The defense against batch effects is **randomization at the experimental design stage**. When you process samples, mix the conditions across batches — don't do all controls on day one and all treated on day two. Make sure each batch contains a mix of conditions. Then, in the analysis, include the batch as a covariate in your model, so DESeq2 can adjust for it.

\[Pause.\]

When you can't fully randomize — common in clinical studies where samples come in over years — you use a batch correction tool. **ComBat-Seq**, developed by Yuqing Zhang and Jeff Leek, is the modern standard. It takes raw counts and batch information, and produces batch-corrected counts that you can feed into DESeq2. ComBat-Seq was specifically designed for count data, unlike the original ComBat which was designed for microarray data. There's also **RUV — Remove Unwanted Variation** — which estimates unknown technical factors from control genes. And **SVA — Surrogate Variable Analysis** — which finds latent factors in the data and adjusts for them. All of these are valid; ComBat-Seq is the most common starting point.

Here's the rule of thumb for batch effects. **If your principal component plot shows samples clustering by batch rather than by condition, you have a serious problem.** Either redo the experiment with better randomization, or apply batch correction carefully and document what you did. Don't ignore it.

**Other QC checks** that matter: sample swaps (use genotype-based concordance checks if you have genotype data from the same individuals); sex chromosome expression (XIST and Y-linked genes should agree with the reported sex); known marker gene expression (tissue-specific markers should be high in the right tissues). The community has built a lot of tools for this — including MultiQC, which aggregates all the QC outputs into a single HTML report. Run MultiQC on every project. Look at the report carefully.

QC is not optional. The papers that get published and then quietly contradicted are almost always the ones that skipped QC. Spend a day on this. It pays for itself many times over.

---

## SEGMENT 14 — Long-read RNA-seq — PacBio Iso-Seq and ONT direct RNA

Up to this point, I've been talking about Illumina short-read sequencing — reads of 50 to 150 base pairs from each end of a fragment, with the full transcript reconstructed bioinformatically by stitching short reads together. This is the dominant approach for bulk RNA-seq, but it has a fundamental limitation: with reads shorter than the transcript, you have to _infer_ which isoforms are present, rather than directly observing them. Different isoforms share exons; reads from shared exons could come from any isoform; bioinformatic deconvolution is required. This works pretty well in practice but is imperfect. For complex loci with many isoforms — common in cancer, in neural tissue, in immune cells — short-read RNA-seq cannot fully disambiguate the isoforms present.

Long-read RNA-seq solves this directly. Instead of fragmenting and reading short pieces, you read entire transcripts end-to-end, in one read, from poly-A tail to 5-prime cap. Each read is one full-length isoform. No inference, no deconvolution. The isoform is the read.

\[Pause.\]

The two major long-read RNA-seq platforms are **PacBio Iso-Seq** and **Oxford Nanopore direct RNA sequencing**.

**PacBio Iso-Seq** uses PacBio's single-molecule real-time (SMRT) sequencing platform, which we covered in detail in the PacBio lecture. The Iso-Seq protocol takes your RNA, converts it to full-length cDNA without fragmentation, and sequences each cDNA molecule as a single long read. PacBio HiFi sequencing — which uses circular consensus sequencing to read the same molecule many times — gives extremely accurate long reads, with error rates below 0.1%. For full-length transcripts up to about 10 kilobases, Iso-Seq is the gold standard. It directly tells you which isoforms are present and in what abundance.

**Oxford Nanopore direct RNA sequencing** is even more unusual: it sequences RNA directly, without converting to cDNA. The RNA molecule is threaded through a protein nanopore, and changes in ionic current as bases pass through the pore are read out as sequence. Direct RNA-seq has several unique advantages: no reverse transcription bias, the ability to detect RNA modifications (m6A methylation, pseudouridine, others) from the current signal, and read lengths up to the length of the original RNA. The accuracy is lower than PacBio HiFi — error rates of a few percent — but the unique features make it valuable for certain questions.

\[Pause.\]

Here's the analogy. **PacBio and Nanopore give you full-length transcripts, so you can directly observe each isoform instead of inferring it.** With short-read RNA-seq, you might read 100 base pairs from one end of an isoform and 100 from the other and infer that they came from the same molecule. With long-read RNA-seq, you read the whole isoform in one piece. No inference. The molecule is the read.

Long-read RNA-seq is currently more expensive per sample than short-read — easily five to ten times more expensive — and produces less depth. So it's not a wholesale replacement for Illumina short-read RNA-seq. The current best practice for complex isoform questions is **hybrid sequencing**: use Illumina short-read RNA-seq to get accurate, deep quantitative measurements of gene-level expression, and use PacBio Iso-Seq on a subset of samples to discover and characterize the actual isoforms. Then map your short-read data against the isoform catalog you built from long reads. This gives you the best of both: quantitative precision from short reads, isoform clarity from long reads.

Where long-read RNA-seq has been transformative is in **isoform discovery** — finding novel isoforms that don't appear in existing annotations. The GENCODE annotation is built largely from short-read data, plus historical EST sequencing, plus manual curation. It's missing a lot. Iso-Seq projects in cancer, neural tissue, and immune cells have shown that the real isoform catalog is much larger than what's in GENCODE — sometimes by an order of magnitude. The transcriptome is far more complex than we knew.

Another frontier: **single-cell long-read RNA-seq**. Combining the cell barcoding of single-cell methods with the full-length reads of PacBio or Nanopore. This is technically challenging — long reads are expensive, single-cell coverage is sparse, and combining them strains both budget and analysis. But it's coming. The pilot studies in 2022-2024 have shown that you can get cell-type-resolved isoform information. For the next decade, expect long-read single-cell to be where a lot of the interesting new biology gets discovered.

For most bulk RNA-seq users, long-read is not yet routine. But you should know it exists, when it's the right tool, and how it integrates with short-read pipelines. For specific applications — isoform discovery, RNA modification mapping, complex locus analysis — long-read is now essential.

---

## SEGMENT 15 — Bulk versus single-cell — when each is the right choice

This is the segment that the single-cell lecture didn't get to honestly: when do you actually need single-cell, and when is bulk enough? I want to walk through this carefully, because the answer is more nuanced than either community usually admits.

**Single-cell is the right choice when:**

You need to know which cell types are in your sample, and how they're changing in abundance between conditions. Bulk averages across all cell types; if your effect is a change in cellular composition rather than a change in any cell type's state, bulk will see it but won't tell you which cell type is responsible. Single-cell resolves this.

You're studying a rare cell population that's a small fraction of the tissue. A tumor stem cell that's 1% of the cells in a tumor will be diluted to invisibility in bulk; in single-cell, it can be identified and analyzed as a distinct cluster.

You want to discover novel cell types or cell states that haven't been characterized. The Human Cell Atlas's catalog of cell types has come almost entirely from single-cell work. Bulk can't see these distinctions.

You need to map cellular trajectories — pseudotime, developmental trajectories, RNA velocity. These require cell-level resolution.

You're studying cells that exist in distinct, transient states that interconvert. Bulk gives you the equilibrium mixture; single-cell shows you the individual states.

\[Pause.\]

**Bulk is the right choice when:**

You care about a tissue-wide signature — a biomarker, a disease classification, a treatment response prediction. Most clinical biomarkers are bulk signals, because clinical samples are usually homogenates and the question is whether the tissue as a whole is in state A or state B.

You have many samples — hundreds, thousands — and need to compare them at scale. Bulk's lower cost per sample makes large-scale studies feasible. GTEx has bulk RNA-seq on thousands of samples across dozens of tissues; the equivalent single-cell experiment is impractical.

You need precise quantitation of moderately and lowly expressed genes. Single-cell suffers from a problem called dropout — many genes register zero reads in a given cell even though they're expressed, because the cell only contributes a few thousand reads in total. Bulk pools across millions of cells and gives reliable counts even for lowly expressed genes.

You care about alternative splicing across the whole tissue. Single-cell sequencing has poor coverage of internal exons (most reads come from the 3-prime end of transcripts), so splicing analysis is hard. Bulk RNA-seq has uniform coverage and can do splicing well.

You're working with archived or fixed samples — FFPE blocks, frozen tissue — where you can't dissociate live cells. Single-cell requires fresh, viable cell suspensions. Bulk works on basically any RNA.

You have a limited budget. Bulk is 10-20x cheaper per sample. A small lab with $20,000 can run a bulk study with dozens of samples; a single-cell study with the same budget covers maybe a handful of samples.

\[Pause.\]

Here's the analogy that captures the trade-off. **Single-cell tells you which cells are present in the tissue. Bulk tells you the average across all of them. If you need cellular composition, single-cell. If you need a tissue-wide signature, bulk.** Most biological questions split cleanly along this axis. Tumor immune infiltration, where you want to know cell type proportions: single-cell. Pathway activation across a tumor, where you want a tumor-wide signature: bulk. Developmental trajectories: single-cell. Drug response biomarkers: bulk. Cell type discovery: single-cell. Splicing analysis: bulk.

The future is probably **both, in the same study**. Run bulk on every sample for cheap, scalable, quantitative measurements. Run single-cell on a representative subset to characterize the cellular composition and identify what cell types are present. Then use the single-cell data to inform interpretation of the bulk data — including using single-cell signatures to deconvolve bulk samples into estimated cell-type proportions, which we'll discuss in Segment 18.

A note on cost trajectories. Single-cell has been getting cheaper at about the same rate as Illumina sequencing — call it 2x cheaper every couple of years. At some point, the cost gap between bulk and single-cell will close enough that single-cell becomes the default for everything. We're not there yet — bulk is still 10-20x cheaper — but in five to ten years, it might be different. For now, bulk remains the workhorse.

---

## SEGMENT 16 — Bulk RNA-seq in clinical practice — biomarkers and tumor profiling

Bulk RNA-seq has become a routine clinical tool, and I want to spend a segment on the specific ways it's used in patient care, because the clinical context shapes which methods matter and how the data is interpreted.

**Tumor profiling** is the largest clinical use of RNA-seq today. When a patient is diagnosed with cancer, increasingly, their tumor is sequenced — both DNA (to find mutations) and RNA (to find expression patterns and fusion transcripts). The RNA-seq data is used for three main purposes.

**First**, **identifying gene fusions**. A gene fusion happens when two genes get joined together by a chromosomal rearrangement, producing a chimeric transcript that codes for a hybrid protein. Many cancers are defined by specific fusions — BCR-ABL in chronic myeloid leukemia, EML4-ALK in some lung cancers, ETV6-RUNX1 in some leukemias. RNA-seq detects fusions by finding read pairs where the two reads map to different genes — a signature of a chimeric transcript. Tools like **Arriba**, **STAR-Fusion**, and **FusionCatcher** automatically detect fusions from RNA-seq data. Fusion detection is now standard in clinical tumor profiling.

**Second**, **expression-based subtyping**. Many cancers can be classified into molecular subtypes based on gene expression patterns. Breast cancer has the well-known PAM50 classifier — luminal A, luminal B, HER2-enriched, basal — derived from expression of 50 marker genes. Glioblastoma has the proneural/mesenchymal/classical subtypes. Colorectal cancer has CMS1-CMS4. Each of these classifiers takes bulk RNA-seq data as input and assigns the tumor to a subtype, which informs treatment decisions. The classifiers were developed from large bulk RNA-seq cohorts — typically TCGA, which we'll discuss in Segment 17.

**Third**, **immune contexture and treatment response prediction**. Several immune-related signatures have been validated as predictors of response to checkpoint inhibitors like pembrolizumab. The "tumor inflammation signature" — an 18-gene signature developed by Merck and academic collaborators — predicts which tumors will respond to anti-PD-1 therapy. The "interferon-gamma signature" does similar work. These are bulk signatures, validated on bulk RNA-seq data, applied clinically to bulk samples. They illustrate how bulk RNA-seq translates into clinical decisions.

\[Pause.\]

**Tumor-normal comparisons** are the other major clinical use. Bulk RNA-seq from a tumor and adjacent normal tissue (or normal tissue from the same organ in different patients) lets you ask what's specifically different in the tumor — which pathways are upregulated, which are downregulated, which fusions are present, which alternative splicing events occur. This is the standard analytical workflow for translational cancer research and is increasingly used in personalized medicine workflows.

**FoundationOne RNA** and similar commercial products use bulk RNA-seq on FFPE tumor samples to produce a clinical report including gene fusions, RNA expression of key markers, and splice variants of clinical interest. These tests are reimbursed by insurance and used routinely in oncology decision-making.

**Other clinical applications** include diagnosing genetic diseases by detecting splicing defects (some Mendelian diseases are caused by mutations that disrupt splicing, detectable by RNA-seq when the underlying DNA mutation is ambiguous); characterizing transplant rejection by looking at immune infiltration signatures; monitoring response to therapy in cancer; and characterizing infectious diseases by detecting microbial RNA alongside host RNA.

A few practical considerations for clinical RNA-seq. **FFPE samples** are the standard in pathology, and FFPE RNA is degraded. Clinical RNA-seq protocols specifically use rRNA depletion (because poly-A selection fails on degraded RNA) and short-fragment library preps designed for fragmented input. Modern clinical kits can produce useful data from FFPE blocks that are decades old.

**Turnaround time** matters in the clinic. A research RNA-seq experiment can take weeks; a clinical RNA-seq test needs to deliver a report in a few days. This has driven the development of streamlined clinical pipelines — automated library prep, targeted sequencing panels (rather than whole transcriptome), rapid analysis pipelines optimized for specific clinical questions.

**Reproducibility and standardization** matter more in the clinic than in research. Clinical RNA-seq tests have to be validated, certified (CLIA in the US, CE in Europe), and produce results that don't drift between samples or over time. This means strict QC, controlled reference standards, and careful inter-laboratory standardization. It's the kind of operational work that doesn't make for exciting biology but is essential for the technology to actually help patients.

Bulk RNA-seq in the clinic is mature, validated, and growing. It's not a future thing. It's happening now, every day, in pathology labs around the world.

---

## SEGMENT 17 — Public datasets — GTEx, TCGA, ENCODE, GEO

One of the underappreciated facts about bulk RNA-seq is that an enormous fraction of all biological understanding comes from public bulk RNA-seq datasets — collections of thousands or tens of thousands of samples, freely downloadable, that any researcher anywhere can reanalyze. The public ecosystem is the foundation on which most modern biology is built. Let me walk through the major ones.

**GTEx — the Genotype-Tissue Expression project**, funded by the NIH, ran from 2010 to about 2017 and continues to be updated. GTEx collected post-mortem tissue samples from over 1,000 donors across 54 different tissue types — brain regions, heart, liver, kidney, every major organ. From each tissue, they performed bulk RNA-seq, generating somewhere over 17,000 samples in total. The data is publicly available through dbGaP (with controlled access for protected health information) and through the GTEx portal (for summary data).

What GTEx enables: a normal tissue expression atlas. If you want to know how much of gene X is expressed in liver versus heart versus brain, GTEx has the answer with hundreds of biological replicates per tissue. If you want to look at expression QTLs — genetic variants that affect gene expression — GTEx has matched genotyping and expression data from the same individuals, allowing eQTL mapping across all tissues. GTEx is the foundational normal tissue dataset. Every major modern study comparing disease to normal uses GTEx, somewhere, as a normal reference.

**TCGA — The Cancer Genome Atlas**, also NIH-funded, ran from about 2006 to 2014 and produced bulk RNA-seq (plus DNA sequencing, methylation, copy number, and clinical data) on roughly 11,000 tumor samples across 33 cancer types. Each cancer type has hundreds to over a thousand samples. The data is in dbGaP and also accessible through the cBioPortal and other interfaces.

What TCGA enables: an exhaustive characterization of solid tumors. Most modern cancer subtype classifications — breast cancer PAM50, glioblastoma subtypes, colorectal CMS — were derived from TCGA data. Every new cancer biomarker is validated against TCGA. Every drug response prediction model is trained on TCGA. TCGA is the cancer reference dataset.

\[Pause.\]

**ENCODE — Encyclopedia of DNA Elements**, also NIH-funded, ran from about 2003 (with a pilot phase) through several phases continuing today. ENCODE was designed to comprehensively characterize the functional elements in the human genome — not just expression, but also chromatin accessibility, transcription factor binding, DNA methylation, and many other epigenomic features. The bulk RNA-seq component of ENCODE is large — thousands of samples across human and mouse cell lines, tissues, and developmental stages, with various stranded and unstranded protocols, poly-A and total RNA, and other variants.

What ENCODE enables: a reference for cell-line and tissue-specific expression patterns, with deep epigenomic context. If you want to compare your data to a well-characterized reference cell line, ENCODE probably has matched RNA-seq and ChIP-seq and ATAC-seq data on it. ENCODE is the multi-omics reference dataset.

**GEO — the Gene Expression Omnibus**, maintained by the NCBI, is the catch-all repository for gene expression data from every publication. As a policy of most journals, when you publish a paper that involves expression data, you must deposit the data in GEO (or its European equivalent, ArrayExpress). GEO has accumulated over 200,000 individual studies and over 6 million samples. The vast majority is microarray data from the 2000s and early 2010s, but RNA-seq is a large and growing fraction.

What GEO enables: meta-analysis, replication, and reanalysis. If somebody publishes a study on, say, glioblastoma expression, you can download their raw data from GEO, reanalyze it with modern tools, combine it with other studies, and test new hypotheses. The whole field of computational biology runs on GEO data. It's free, accessible, and indispensable.

**SRA — the Sequence Read Archive** is GEO's sibling for raw sequencing reads. While GEO stores processed expression data and metadata, SRA stores the raw FASTQ files. For RNA-seq, you typically go to GEO to find studies of interest, then to SRA to download the raw reads if you want to reanalyze them yourself.

\[Pause.\]

Here's the analogy. **GTEx and TCGA are the public bulk RNA-seq libraries that biology runs on. Hundreds of thousands of samples, freely downloadable, with consistent processing pipelines so they can be compared and integrated.** If you want to do biology in 2026 and you don't know these datasets, you're working with one hand tied behind your back. The data is sitting there, free, ready to be combined with your own observations to answer questions that would be impossible from your own data alone.

A few more datasets worth knowing about. **Recount3** (and its predecessor recount2) is a project from Ben Langmead and colleagues at Hopkins that takes all of SRA's RNA-seq data — over 700,000 samples — and reprocesses it through a uniform pipeline. The result is a massive collection of consistently-processed expression data that you can use without worrying about pipeline differences between studies. **ARCHS4**, from the Ma'ayan lab at Mount Sinai, does something similar — uniformly processed RNA-seq across hundreds of thousands of samples, queryable through a web interface. **The DepMap project** at the Broad Institute has bulk RNA-seq on over 1,000 cancer cell lines, matched with drug sensitivity data, enabling drug response prediction modeling.

The public ecosystem is large enough that a meaningful fraction of biological discoveries today come from people who never generated their own data — they downloaded existing public data, applied a new analysis, and found something nobody had noticed. That's the power of the public RNA-seq commons. Every dollar spent making this data available has been repaid many times over in scientific discoveries.

---

## SEGMENT 18 — The frontier — deconvolution, spatial bulk, AI pipelines

Let me close with where bulk RNA-seq is going. The technology is mature, but the analytical methods are still evolving rapidly, and several frontiers are particularly exciting.

**Deconvolution — recovering cell-type composition from bulk RNA-seq.** One of the most active areas of computational research is the question: given a bulk RNA-seq sample, can you estimate the proportions of each cell type in it, using cell-type-specific signatures derived from single-cell data? The answer is yes, partially, and the tools are getting better.

The standard tool is **CIBERSORT**, developed by Aaron Newman in the Alizadeh lab at Stanford. CIBERSORT takes a bulk RNA-seq expression profile, a matrix of cell-type-specific signatures (derived from purified cell populations or single-cell data), and uses support vector regression to estimate the proportion of each cell type in the bulk sample. CIBERSORT was originally developed for immune cell deconvolution — separating bulk tumor expression into proportions of CD8 T cells, CD4 T cells, B cells, macrophages, etc. — and is now widely used in cancer immunology.

Newer methods like **CIBERSORTx**, **MuSiC**, **BayesPrism**, and **SCDC** improve on CIBERSORT in various ways — using single-cell references directly, handling batch effects between reference and bulk data, providing uncertainty estimates, scaling to many cell types.

\[Pause.\]

Here's why this matters. **Deconvolution gives bulk RNA-seq some of the resolution of single-cell, without the cost.** You can run bulk on thousands of samples — easy, cheap — and then deconvolve to estimate cell type proportions in each. You don't get the same resolution as single-cell, and the estimates are noisier, but for large-scale studies, deconvolution closes much of the gap. The clinical TCGA cohort, for example, has been deconvolved many times to estimate immune infiltration, fibroblast content, and other compositional features that the original bulk data couldn't directly show.

**Spatial bulk and spatial transcriptomics.** I want to be careful here because the single-cell lecture covered spatial transcriptomics in detail. But there's a bulk-style version that's worth mentioning. Technologies like **NanoString's GeoMx Digital Spatial Profiler** allow you to select regions of interest on a tissue section — defined by histology, antibody staining, or other criteria — and perform bulk RNA-seq specifically on the RNA from each selected region. So you're doing bulk RNA-seq, but spatially resolved — multiple bulk samples per tissue, with spatial location preserved. This is increasingly used in pathology research, where the architecture of the tissue matters.

**Visium HD**, from 10x Genomics, is positioned somewhere between bulk and single-cell — small spots, each containing a few cells, with whole-transcriptome RNA-seq per spot. It's sub-cellular spatial bulk. The data is bulk-like at each spot (averaging across the few cells in the spot) but spatial across the tissue.

\[Pause.\]

**AI-driven analysis pipelines** are the third frontier, and they're moving fast. Several developments are worth knowing.

**Foundation models for gene expression.** Large transformer models — trained on tens of millions of RNA-seq samples from public databases — are now being released by various groups. **scGPT**, **scFoundation**, **Geneformer**, **CellPLM**, and others learn representations of gene expression that capture biological structure and can be transferred to downstream tasks. While these were originally developed for single-cell data, they're being adapted for bulk data too. The idea is that a pre-trained model captures latent biology and can be fine-tuned for specific tasks — disease classification, drug response prediction, perturbation effect prediction — with much less labeled data than training from scratch.

**Automated pipeline platforms.** Tools like **nf-core/rnaseq**, **DolphinNext**, and various commercial platforms (DNAnexus, Terra) provide standardized, reproducible RNA-seq pipelines. You drop in your FASTQs, the platform runs alignment, QC, counting, and quality reports automatically, in a containerized environment that's reproducible across labs. The era of writing your own pipeline from scratch is ending — the community has converged on a small number of well-validated, well-tested pipelines that everybody uses.

**Multimodal integration.** The current frontier is integrating RNA-seq with other data modalities — DNA sequencing for mutations, methylation profiles, proteomics, clinical metadata, imaging. The bottleneck has shifted from generating data to integrating data across modalities. Tools for this integration are improving rapidly, often using AI/ML approaches.

**Better deconvolution and cellular composition inference.** As single-cell atlases get richer, deconvolution methods that use those atlases as references get more accurate. The combination of cheap bulk RNA-seq at scale and accurate deconvolution from rich single-cell references is the workflow that will dominate the next decade.

\[Pause.\]

The big picture for the future of bulk RNA-seq is: it's not going away. It's being augmented. The combination of bulk RNA-seq for scale and cost-efficiency, single-cell sequencing for ground-truth references, deconvolution methods to bridge them, and AI-driven analysis pipelines for interpretation — this is the modern transcriptomics workflow. Bulk RNA-seq sits at the center as the workhorse, with the other components feeding into it and out of it.

Sixteen years after Mortazavi 2008, RNA-seq is still the most widely used assay in molecular biology. The tools are mature, the analyses are well-validated, the public datasets are vast. If you walked into a wet lab tomorrow and ran a bulk RNA-seq experiment, you'd be following a recipe that's been refined by half a million prior experiments. You'd produce data that's directly comparable to GTEx, TCGA, and ENCODE. You'd analyze it with DESeq2 or edgeR, two of the most carefully validated statistical tools in computational biology. You'd visualize the results with tools that have been polished for over a decade. The infrastructure is there. The methods are there. The data is comparable to data from a thousand other labs.

That's what makes a workhorse. Not novelty. Not glamour. Reliability, comparability, scale, and the maturity that comes from a million prior runs. Bulk RNA-seq is the workhorse of transcriptomics. Long may it run.

\[Pause.\]

Thank you. That's where we'll stop. We've gone through the history, the workflow, the wet lab, the bioinformatics, the statistics, the QC, the clinical applications, the public datasets, the comparison to single-cell, and the frontier. Read a few RNA-seq papers this week. Look at the methods sections. See if you can identify what library prep they used, what aligner, what counter, what differential expression tool, what gene-set tool, what database. If you can read those methods sections and think "I know what they did, and I have an opinion about whether they should have done it differently" — then this lecture has succeeded.

---

## APPENDIX

A few additional topics that didn't fit cleanly into the main lecture but are worth knowing about.

**Bacterial and metagenomic RNA-seq.** I mentioned briefly that bacteria don't have poly-A tails, so bacterial RNA-seq requires rRNA depletion. The standard kit for bacterial rRNA depletion is Illumina's Ribo-Zero Plus with bacterial probe sets. For metagenomic RNA-seq — sequencing the RNA from a mixed community of microbes, like a gut microbiome — you face additional complications: you don't have a reference genome for most of the organisms, you have to assemble the sequences de novo, and you have to handle the fact that the community has very different abundance distributions than a clonal sample. Tools like **MetaTrans**, **SAMSA2**, and **HUMAnN** specialize in metagenomic RNA-seq analysis.

**Small RNA sequencing.** Bulk RNA-seq, as I described it, captures medium-sized RNAs — typically 100 to 10,000 base pairs. Small RNAs — microRNAs (~22 nt), piRNAs, tRNA fragments — are lost during standard library prep because the size selection step excludes them. Small RNA sequencing uses a different library prep that specifically captures these short species, with custom adapters that can handle very short inserts. Tools like **miRDeep2** and **mirgeFF** specialize in microRNA quantitation. If you're interested in regulatory small RNAs, you need a dedicated small RNA-seq experiment, not standard bulk RNA-seq.

**Ribosome profiling — Ribo-seq.** A clever variation on RNA-seq that captures only the RNA fragments that are being actively translated by ribosomes at the moment of cell lysis. You treat the cells with cycloheximide to freeze the ribosomes, lyse, digest the un-translated RNA with nucleases, and sequence the protected fragments. The result is a count, at codon resolution, of how many ribosomes were sitting on each part of each mRNA — a direct measure of translation, not just transcription. Ribo-seq is the gold standard for measuring translational regulation, and it's used to identify novel open reading frames, study ribosome pausing, and characterize codon-level translation efficiency.

**Allele-specific expression and RNA editing.** Bulk RNA-seq can measure differences in expression between the two alleles in a heterozygous individual — useful for studying imprinting, cis-regulatory effects, and allele-specific splicing. It can also detect RNA editing events (mostly A-to-I editing by ADAR enzymes) by looking for mismatches between the RNA reads and the genomic reference. Both applications require careful analysis and often deeper sequencing than standard differential expression.

**Spike-in controls.** For experiments where you suspect global expression changes — for example, drug treatments that shut down transcription — you can't rely on the standard library-size normalization, because that normalization assumes total RNA is roughly constant. The solution is to add a known quantity of exogenous RNA (typically ERCC spike-in controls from NIST) to each sample before extraction. The spike-in counts give you an external reference that doesn't depend on the biology. Spike-ins are essential for experiments measuring global transcription changes; they're optional for standard differential expression.

**The bulk RNA-seq vocabulary cheat sheet.**

- **FASTQ**: raw read file from the sequencer.
- **BAM**: aligned read file.
- **GTF**: gene annotation file.
- **Count matrix**: gene-by-sample matrix of read counts. The fundamental output.
- **RPKM/FPKM**: legacy normalization, length-normalized then library-size-normalized.
- **TPM**: modern normalization, length-normalized then sample-normalized to sum to one million.
- **DESeq2 / edgeR / limma-voom**: differential expression tools.
- **STAR / HISAT2**: splice-aware aligners.
- **Salmon / kallisto**: pseudoalignment-based quantifiers.
- **featureCounts / HTSeq**: counting tools.
- **PSI**: percent spliced in, the metric for alternative splicing.
- **rMATS / SUPPA / MAJIQ**: alternative splicing analysis tools.
- **GSEA**: gene set enrichment analysis.
- **MSigDB**: the standard gene set database.
- **GO / KEGG / Reactome**: pathway databases.
- **GTEx / TCGA / ENCODE / GEO**: the major public datasets.
- **CIBERSORT**: deconvolution tool, estimates cell type proportions from bulk data.
- **FFPE**: formalin-fixed paraffin-embedded, the standard clinical sample format.
- **RIN**: RNA integrity number, a quality metric.
- **ComBat-Seq**: batch correction tool for count data.
- **MultiQC**: aggregates QC outputs across a project.

**Reading list.** For deeper study, the canonical papers are: Mortazavi et al. 2008 (Nature Methods), Nagalakshmi et al. 2008 (Science), Wang et al. 2009 (Nature Reviews Genetics) — the methodological foundations; Love, Huber, Anders 2014 (Genome Biology) — DESeq2; Subramanian et al. 2005 (PNAS) — GSEA; the GTEx Consortium papers (multiple, in Nature) — the public datasets. For textbooks, look at Conesa et al. 2016 (Genome Biology) "A survey of best practices for RNA-seq data analysis" — still one of the best methodological overviews.

Bulk RNA-seq is mature, but the literature is huge. The right entry point is one specific question — your question — and the willingness to read the methods sections of a dozen papers carefully. That's how you become competent. That's how every working RNA-seq biologist learned the field.

---


