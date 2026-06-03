# ATAC-seq — Assay for Transposase-Accessible Chromatin Using Sequencing

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for board work or discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The accessibility question and why it matters

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about ATAC-seq — the Assay for Transposase-Accessible Chromatin using sequencing. It's a technique that, in the dozen years since it was invented, has rewritten how the field thinks about gene regulation, and has done so with an experimental footprint so small that you can run it on a tube of patient blood cells, on a few thousand sorted neurons, on a slice of tumor biopsy that no other method of its era could have touched. We're going to spend two hours unpacking how it works, why it became standard so fast, and what it tells you that no other technique tells you quite the same way.

But before we get to any of that, I want to start with the question the technique is built to answer. Because if you internalize the question, the method falls out of it almost inevitably.

Here is the question. You have a cell — say, a human T cell, or a mouse neuron, or a hepatocyte from someone's liver biopsy. Inside that cell there is about two meters of DNA crammed into a nucleus ten microns across. Six billion base pairs of sequence, packaged tightly around histone proteins into the structure we call chromatin. Now, here is the thing that matters. Most of that DNA, at any given moment, is closed. It is wrapped on nucleosomes, folded into higher-order fibers, balled up into dense, inaccessible regions. The proteins of the cell — transcription factors, polymerases, repair enzymes — cannot get to most of it. They can't even reach down and touch most of the genome, at most moments, in most cells.

But some of it is open. Some of it — usually just one to three percent of the genome in any given cell — is accessible. The nucleosomes are evicted, or sliding around, or pushed apart. The DNA is bare or lightly decorated. Proteins can land on it. Transcription factors can read its sequence. RNA polymerase can start a transcript there. This open fraction — the accessible chromatin — is where almost all the regulatory action happens. The promoters of active genes are open. The enhancers driving cell identity are open. The places where transcription factors are sitting, where the cell is making decisions about what gene to turn on next, are open. Open chromatin is the regulatory genome in action.

\[Pause.\]

So the central question is this: **where in the genome is the chromatin open?** Not in general. Specifically. Which positions, in which cells, in which conditions, at which moment. That's it. That's the question. ATAC-seq is the technique that answers it.

Here's the analogy I want you to hold for the next two hours. Imagine the genome as a vast, dark city at night — three billion buildings, most of them locked up tight, shutters down, doors bolted. A few — maybe a few thousand to a few hundred thousand — have their lights on. Those are the open ones. Those are the addresses where things are happening. You want to know which addresses, exactly, are lit. You could try to walk down every street and check each door — that would take you years. Or you could send out a fleet of tiny scouts, each of them carrying a small piece of luminescent paint, with the property that they can only physically squeeze in through unlocked doors. The scouts that find an open door go inside, splash a bit of paint on the doorframe with a tracking tag on it, and leave. At the end of the night, you collect every painted doorframe, read the address off the tag, and you have a complete map of every door in the city that was open that night. That's ATAC-seq. **The scout is Tn5 transposase. The paint with a tracking tag is a sequencing adapter. The unlocked doors are open chromatin.** The whole method, in one analogy.

If you walk out of here in two hours and you can do three things — one, sketch the ATAC-seq workflow on a whiteboard and explain what each step does and why; two, explain in plain English what Tn5 transposase is doing chemically and why it is so beautifully suited to mapping accessibility; three, look at any modern paper that mentions ATAC-seq and have a real intuition for what the peaks mean, what the size distribution histogram is showing, and how the technique fits into the broader landscape of regulatory genomics — then we've succeeded. Everything else hangs off those three.

\[Pause.\]

One last orienting thought before we dive in. ATAC-seq is, in a meaningful sense, the natural sibling of ChIP-seq — the technique we covered in detail in an earlier lecture. ChIP-seq asks, "where in the genome is this specific protein bound?" You need an antibody. You're asking about one protein at a time. ATAC-seq asks a different and complementary question: "where in the genome is the chromatin open, regardless of which proteins are there?" You don't need an antibody. You're protein-agnostic. You map accessibility itself, and then you infer which transcription factors are likely binding the open regions based on the DNA sequences underneath. Both techniques are reading the same chromatin. They're just reading it from different angles. ChIP-seq is a directed search — "I am looking for protein X." ATAC-seq is a broad sweep — "show me everywhere that's currently accessible." Together, they give you a far more complete picture of regulatory genomics than either does alone. We'll come back to the comparison many times.

So that's the contract. Two hours, one technique, the central question of regulatory accessibility. Let's start by unpacking what chromatin actually looks like and what "accessible" really means at the molecular level.

---

## SEGMENT 2 — Chromatin, nucleosomes, and what "open" means

Before we can talk about mapping open chromatin, we have to be precise about what chromatin is and what we mean by open versus closed. A lot of the intuition for ATAC-seq depends on getting this picture right, so let me build it carefully.

DNA, inside a living human cell, is not naked. It does not float around as a long floppy string. It is wrapped, systematically and tightly, around protein spools called nucleosomes. Each nucleosome is a small disk-shaped assembly built from eight histone proteins — two copies each of H2A, H2B, H3, and H4. Around that octamer the DNA wraps for about one and three-quarter turns, which corresponds to roughly 147 base pairs of DNA per nucleosome. Between nucleosomes, there's typically a short stretch of linker DNA — anywhere from 20 to 80 base pairs depending on the cell type and the region of the genome. So if you took a chromosome and stretched it out and zoomed in, the first thing you'd see is the beads-on-a-string structure: nucleosomes every couple hundred base pairs along the DNA, separated by short open linkers.

Now, most of the genome is not just sitting in this beads-on-a-string conformation. Most of it is folded into higher-order structures — fibers, loops, and ultimately the dense, inaccessible domains we call heterochromatin. Heterochromatin is the genome's dark side: closed, packed, transcriptionally silent. The other side of the spectrum, euchromatin, is the open, accessible, transcriptionally engaged compartment. Most of the action of gene regulation happens in or at the edges of euchromatin.

\[Pause.\]

But here's the crucial point. Even within euchromatin, not every base pair is equally accessible. Most of the DNA is still wrapped on nucleosomes, even in active regions. The accessible fraction — the part where proteins can actually reach down and bind — is the linker DNA between nucleosomes, plus a special class of regions where the nucleosomes have been actively evicted or pushed aside. These nucleosome-depleted or nucleosome-free regions, often called NDRs or NFRs, are where the most important regulatory events happen. They're the gaps in the chromatin packaging. They're the windows through which the regulatory machinery can see the genome.

Where do you find nucleosome-free regions? You find them at three main classes of location.

**First, at the promoters of active genes.** Just upstream of where transcription begins on an active gene, the nucleosomes have been cleared out, leaving a stretch of bare DNA — usually about 100 to 200 base pairs — that transcription factors and RNA polymerase can bind to. The clearance is dynamic and regulated, and the size and position of the nucleosome-free region at a promoter is a reasonable indicator of how active the gene is.

**Second, at enhancers.** Enhancers are the distal regulatory elements — sometimes thousands or tens of thousands of base pairs away from the genes they control — where cell-type-specific transcription factors bind to drive cell-type-specific gene expression. Like promoters, active enhancers have nucleosome-free regions over them, with characteristic flanking nucleosomes that often carry distinctive histone modifications.

**Third, at transcription factor binding sites generally.** When a transcription factor is sitting at its sequence motif, it displaces or disturbs the local nucleosome, opening up a small footprint of accessible DNA. Many of the accessible regions in a genome are essentially the footprints of transcription factors in action.

So the accessible chromatin landscape — the set of open windows in the genome — is largely a map of the active regulatory machinery. Promoters, enhancers, transcription factor binding sites. Map those, and you have a map of what the cell is doing regulatorily. Map them in different cell types, and you have a map of what makes one cell type different from another.

\[Pause.\]

Now, here's where it gets interesting and why ATAC-seq matters. The number of accessible regions in a typical human cell is on the order of fifty thousand to a few hundred thousand peaks. That's a tiny fraction of the genome — maybe one to three percent of the total sequence. But these peaks are the parts of the genome where the regulatory action is concentrated. If you want to understand how a cell is regulated — which genes are on, which enhancers are driving them, which transcription factors are at work — these accessible regions are where to look. They're the addresses of activity. The closed, heterochromatic 97 percent is mostly quiet, structurally important, but regulatorily inert at any given moment.

So a method that gives you a genome-wide map of accessibility is, in effect, a map of regulatory hotspots. That's the prize. And the question that ATAC-seq solves — better, faster, and cheaper than every prior method — is how to draw that map without needing huge amounts of starting material, complicated multi-step protocols, or specialized antibodies for every protein you might care about. Let me show you what came before, so the leap of ATAC-seq becomes clear.

---

## SEGMENT 3 — Before ATAC-seq — DNase-seq, FAIRE-seq, MNase-seq

The accessibility question is old. People have been trying to map open chromatin since the 1970s, when researchers first noticed that the DNA in active regions of the genome was more sensitive to digestion by nucleases than the DNA in inactive regions. The reasoning was simple: if a nuclease can chew up a piece of DNA, that DNA must be exposed. Nucleosome-wrapped DNA is shielded; nucleosome-free DNA is vulnerable. So if you treat a nucleus with a nuclease and ask which regions get cut, you're effectively mapping which regions are open. That insight is the conceptual seed of every chromatin accessibility assay ever invented, including ATAC-seq. The differences are all in the engineering.

The classical method, and for decades the gold standard, was **DNase-seq** — short for DNase hypersensitive site sequencing. The idea, going back to work by Carl Wu, Mark Groudine, and others in the late 1970s and 1980s, is this. You take a nucleus, treat it with the enzyme DNase I — a non-specific endonuclease that cuts double-stranded DNA — at a carefully calibrated low concentration, so that only the most accessible DNA gets cut, while the rest of the chromatin stays intact. The cut sites — called **DNase hypersensitive sites**, or DHSs — mark the locations of accessible chromatin. In the original implementations, DHSs were mapped one locus at a time using Southern blots, and they became one of the first widely used proxies for active regulatory elements. By the mid-2000s, with the rise of sequencing, the method evolved into DNase-seq: digest with DNase I, isolate the small fragments left over, sequence them, and map them genome-wide. The DNase footprint analysis — looking at the sub-peak structure of cuts within accessible regions, which can hint at where individual transcription factors are sitting — was a beautiful refinement that gave the technique additional resolution.

DNase-seq works. It produced foundational data. The ENCODE consortium used it extensively in the 2010s to map accessible chromatin across hundreds of human cell types and tissues. But it had some serious practical limitations. **First**, the input requirement was enormous — you needed millions of cells, often tens of millions, to get a high-quality library. **Second**, the protocol was long and finicky — multiple enzymatic steps, multiple purifications, careful calibration of DNase concentration, often spanning days from cells to sequencing-ready library. **Third**, the enzyme had some sequence biases of its own, which had to be corrected computationally. And **fourth**, the dynamic range of DNase-seq peaks was sometimes compressed in ways that made it hard to compare between samples without careful normalization.

\[Pause.\]

Then there was **FAIRE-seq** — Formaldehyde-Assisted Isolation of Regulatory Elements followed by sequencing. FAIRE, developed by Jason Lieb and colleagues in the late 2000s, took a clever indirect approach. The idea is that if you crosslink cells with formaldehyde, the nucleosome-bound DNA gets glued to the histones, while the nucleosome-free DNA — the open regions — stays relatively free. If you then fragment the chromatin, do a phenol-chloroform extraction, and ask which DNA partitions into the aqueous phase — well, the free DNA, the open chromatin DNA, ends up in the aqueous phase, while the protein-bound DNA stays trapped in the organic phase. You sequence the aqueous-phase DNA and you have, in principle, a map of accessibility. No enzyme needed. Just chemistry.

FAIRE-seq is elegant in concept but has its own issues. It tends to be noisier than DNase-seq, the peaks are broader, and the signal-to-noise is generally lower. It also still requires substantial input — millions of cells — and the formaldehyde fixation introduces its own complications. FAIRE-seq found a niche, but it never became dominant.

Then there's **MNase-seq** — micrococcal nuclease sequencing — which is, in a way, the opposite of DNase-seq. Where DNase-seq maps open DNA by cutting in the open regions, MNase-seq maps **nucleosomes** by cutting away the linker DNA between them. MNase preferentially digests exposed DNA — the linker between nucleosomes — leaving the nucleosomes themselves protected. After heavy digestion, what's left is a population of DNA fragments that are exactly 147 base pairs long — the size of a nucleosome. Sequence these, and you get a map of where the nucleosomes are sitting. This is the inverse problem: rather than mapping the gaps, you map the beads. From that, you can infer the gaps. MNase-seq is a very different tool, more for studying nucleosome positioning than accessibility per se, but it sits in the same family of nuclease-based methods.

\[Pause.\]

So the chromatin accessibility toolbox in 2012 looked like this. **DNase-seq**: the gold standard, very thoroughly characterized, but needing millions of cells and days of protocol. **FAIRE-seq**: chemically clever but noisy, also needing lots of cells. **MNase-seq**: powerful for positioning nucleosomes but conceptually inverted from what you want for accessibility. And all of these methods had been built around the same constraint: you needed bulk biological material, lots of it, and you needed days of careful enzymatic or chemical work to extract a usable library.

This was fine if you were studying a cell line. HeLa cells, K562 cells, mouse embryonic stem cells — these you could grow in unlimited quantities and harvest by the tens of millions. The early accessibility maps of the human genome were dominated by these immortalized cell types because they were the only ones from which you could routinely get enough material.

But here is the problem. The biology that biologists most wanted to study — the biology of disease, of development, of cell-type-specific regulation — was almost never about cell lines. It was about primary cells: patient samples, sorted populations of rare immune cells, embryonic tissues, biopsy slices, cells dissociated from a single fly embryo, neurons from a particular brain region. These you couldn't grow in unlimited quantities. You had what you had. A few thousand cells. A few tens of thousands. Maybe a hundred thousand if you were lucky.

DNase-seq couldn't touch most of these samples. The input was too low. The protocol was too lossy. The mapping of primary, biologically interesting tissues was effectively gated behind the input requirement of the available methods. The field had a map of accessibility in well-characterized cell lines, and almost nothing for the cells that mattered most.

That was the problem ATAC-seq was about to solve. In one fell swoop.

---

## SEGMENT 4 — Buenrostro and Greenleaf — the 2013 paper

The breakthrough came from a Stanford lab in 2013. The paper was titled "Transposition of native chromatin for fast and sensitive epigenomic profiling of open chromatin, DNA-binding proteins and nucleosome position," published in _Nature Methods_ in October 2013, by Jason Buenrostro, Paul Giresi, Lisa Zaba, Howard Chang, and William Greenleaf. The corresponding authors were Howard Chang and Will Greenleaf, both at Stanford. Jason Buenrostro, then a graduate student in Greenleaf's lab, was the first author and the driving force behind the development.

The paper had a simple, audacious thesis. Take the existing accessibility problem — millions of cells, days of protocol, DNase or FAIRE — and replace it with a one-step reaction using a hyperactive transposase loaded with sequencing adapters. The transposase, when added to permeabilized nuclei, would preferentially insert into accessible chromatin, simultaneously cutting the DNA and ligating in the adapters needed for sequencing. The whole sample-prep step, from nuclei to sequencing-ready library, would collapse into a single tube, taking about thirty minutes of enzyme work and a few hours of PCR. The input would drop from millions of cells to tens of thousands. Same biology. Vastly less material. Vastly less time.

It worked. The original paper showed accessibility maps from 50,000 cells, with comparable or better quality than DNase-seq libraries from millions of cells. The signal-to-noise was clean. The peaks corresponded to known regulatory regions. And the whole thing took about four hours, from cells to library, on a benchtop.

\[Pause.\]

The conceptual insight here is worth pausing on, because it's a beautiful example of how a single piece of clever biochemistry, repurposed from another context, can collapse a hard problem into an easy one. The enzyme at the heart of ATAC-seq — Tn5 transposase — was not invented for ATAC-seq. It came from a totally different lineage. Tn5 is a bacterial transposase, isolated from the bacterial transposon Tn5, originally discovered in the 1970s as a mobile genetic element that bacteria use to spread antibiotic resistance genes. The wild-type enzyme has, as its natural function, the ability to recognize specific DNA sequences at the ends of its own transposon, excise the transposon, and insert it into a new genomic location — a cut-and-paste mechanism. It's a transposition machine, evolved over hundreds of millions of years to move DNA around.

In the 1990s and 2000s, biochemists — particularly William Reznikoff at the University of Wisconsin — worked extensively on Tn5 and produced a **hyperactive variant**, called E54K/M56A/L372P, that transposes about a thousand times more efficiently than the wild-type. This hyperactive Tn5 became a workhorse for in vitro transposition reactions, used for things like generating random insertion libraries in bacterial genomes.

Then, in the late 2000s, Illumina engineers had the further idea to use Tn5 for sequencing library prep. The trick was to load the transposase, in vitro, with synthetic DNA adapter molecules — short pieces of DNA carrying the sequences Illumina needs at the ends of any sequencing library — instead of with its natural transposon ends. When this adapter-loaded Tn5 attacks a piece of genomic DNA, it cuts the DNA in half and simultaneously ligates an adapter to the cut end. One reaction. One step. From genomic DNA to adapter-flanked fragments, ready for sequencing. This is the Nextera library prep, launched by Illumina in 2010, and it was a quiet revolution in how sequencing libraries get made.

So when Buenrostro and Greenleaf were thinking about how to map chromatin accessibility, they had a piece of biochemistry sitting on the shelf — adapter-loaded Tn5, originally developed for ordinary library prep — that, by its very nature, prefers to insert into accessible DNA. The bulky transposase, with its adapter cargo, is physically too large to invade nucleosome-wrapped DNA. It can only get into the gaps. It can only attack the open regions. If you take that enzyme and dump it onto a nucleus, it will preferentially cut and adapter-tag the accessible chromatin, ignoring the closed regions entirely.

\[Pause.\]

The leap, then, was this: don't use Tn5 to fragment purified genomic DNA. Use it on intact nuclei, where the chromatin structure is preserved. Let the enzyme decide for itself which parts of the genome to cut, based on what it can physically access. The cut sites become the map of accessibility. The adapter ligation happens in the same step. Amplify by PCR, sequence, map the reads, and you have your accessibility profile.

This is one of those ideas that, in retrospect, feels obvious — but the moment of recognition required someone to see Tn5 not as a library prep tool but as a sensor of chromatin structure. That recognition, made cleanly in the Greenleaf lab in 2012 and demonstrated in the 2013 paper, is the founding insight of the technique.

I want to single out a few things about the 2013 paper. **First**, the input requirement: they showed clean data from 500 to 50,000 cells, with the headline number around 50,000. That's two orders of magnitude lower than DNase-seq. **Second**, the time: under four hours from cells to library, against multiple days for DNase. **Third**, the multi-modal output: the technique gives you, simultaneously, a map of accessibility, a map of nucleosome positions (from the fragment size distribution, which we'll discuss in detail in Segment 7), and the possibility of inferring transcription factor binding from the footprints in the data. Three readouts from one experiment. This was a striking efficiency gain.

The paper was widely read, widely adopted, and within about three years ATAC-seq had become the default accessibility assay in the field. DNase-seq is still used, particularly for legacy compatibility with the enormous ENCODE catalog, but ATAC-seq is the technique most new labs reach for when they want to map open chromatin in a new sample. The shift was clean. By 2017, the majority of accessibility papers in major journals were using ATAC-seq. By 2020, single-cell ATAC-seq had become a routine extension of the method, which we'll get to in Segment 12.

So the lineage is: Tn5 transposase from a 1970s bacterial transposon, engineered into a hyperactive variant in the 1990s, loaded with sequencing adapters by Illumina in 2010 for library prep, and then in 2013 redirected by Buenrostro and Greenleaf onto intact nuclei to read out chromatin accessibility. Each step builds on the last. The history is the technique.

---

## SEGMENT 5 — Tn5 transposase — the molecular ninja

Let me spend a whole segment on Tn5, because if you understand what this enzyme is doing chemically, you understand why ATAC-seq works the way it does, including all its strengths and all its idiosyncrasies. The enzyme is the heart of the assay. Get the biochemistry right and everything else falls into place.

Tn5 transposase is a bacterial protein, about 53 kilodaltons in size, originally found in the transposon Tn5 in _E. coli_. The transposon itself encodes resistance to several antibiotics — kanamycin, neomycin, bleomycin — and uses Tn5 transposase to jump between locations in the bacterial chromosome and between chromosomes and plasmids. The natural reaction is what's called a "cut-and-paste" transposition: the enzyme recognizes specific 19-base-pair sequences at the ends of its own transposon, called inverted repeats or "mosaic ends," cuts the transposon out as a single piece, and inserts it into a new location, leaving a small target-site duplication around the insertion site.

The chemistry of the insertion is precise and beautiful, and it's the chemistry we exploit in ATAC-seq. Tn5 functions as a dimer — two copies of the protein form a complex, each one holding onto one end of the transposon. When the dimer attacks a target DNA molecule, it inserts the transposon into the target in a specific geometry: the two ends of the transposon insert at positions exactly nine base pairs apart on the two strands of the target DNA. The result is what's called a **staggered cut** — both strands of the target are cleaved, but at sites offset by nine base pairs, leaving short single-stranded overhangs.

\[Pause.\]

Now here's the key. When the transposase has finished, the inserted DNA is covalently joined to the target DNA on both sides — but only on one strand at each junction. The other strand has a nine-base-pair gap. In a natural transposition, the bacterial repair machinery fills in this gap and ligates it shut, producing the characteristic nine-base-pair target-site duplication around the insertion.

For ATAC-seq, we don't care about the gap repair. We care about the fact that the transposase, in a single coordinated reaction, has done two things at once: it has cut the target DNA, and it has ligated a new piece of DNA to the cut ends. In our adapter-loaded version, the new piece of DNA isn't a transposon — it's a short synthetic adapter carrying the sequences Illumina needs at the ends of a sequencing library. So in a single enzymatic step, on a single molecule of target DNA, the transposase cuts and adapter-ligates. **One reaction, one step, two operations.**

Compare this to a conventional sequencing library prep. In a conventional prep, you have to fragment the DNA (typically by sonication or enzymatic shearing), then end-repair the fragments (filling in or chewing back the ragged ends with a polymerase or exonuclease), then add A-overhangs, then ligate adapters, then size-select, then PCR-amplify. That's six or seven steps over several hours. Tn5 collapses the first four or five steps into a single tube, taking thirty minutes. The remaining steps are size-selection and PCR. The efficiency gain is enormous.

\[Pause.\]

For ATAC-seq, the relevant point is not just that Tn5 is a fast library-prep enzyme. It's that **Tn5 is a sensor of chromatin structure**. Here's why. The transposase complex — the dimer with its bound adapter cargo — is a bulky object. It's a protein about a hundred kilodaltons in mass, with two prongs of DNA sticking out of it (the adapter ends), and it has to physically slide along a DNA strand looking for a place to insert. Nucleosome-wrapped DNA is physically inaccessible to this complex. The DNA is tightly bound to the histone octamer, the path along the DNA helix is blocked, and the transposase simply can't get in. It tries, it bounces off, and it moves on.

But in the gaps between nucleosomes — the linker DNA, the nucleosome-free regions at active promoters and enhancers — the DNA is exposed. The transposase can slide along it, find an insertion site, and complete its reaction. So the enzyme, by its sheer physical size and shape, is selective for accessible DNA. **It can only cut where it can fit.** And that's the magic of ATAC-seq. The selectivity comes from the geometry of the enzyme, not from any complicated experimental procedure. You don't have to engineer the selectivity. It's already built into the enzyme by virtue of how big it is and where it can physically go.

The analogy I want you to hold: **Tn5 is a molecular ninja with a calling card.** It can only slip into rooms that are unlocked. The locked rooms — the nucleosome-wrapped DNA — it can't enter. The unlocked rooms — the open chromatin — it can enter, and when it does, it leaves a calling card. The calling card is the sequencing adapter, with all the information you need to identify where the ninja was and what part of the DNA it touched. At the end of the night, you collect every calling card in the genome, read off the addresses, and you have a map of every unlocked room in the building.

\[Pause.\]

Two more details about Tn5 you should know, because they matter for interpretation and for some of the biases we'll discuss in Segment 16. **First**, the staggered cut. Because Tn5 cuts the two strands of the target DNA at positions exactly nine base pairs apart, the resulting reads from an ATAC-seq library carry a built-in nine-base-pair offset between the forward and reverse strand cuts. Modern peak callers correct for this offset by shifting the read positions appropriately — forward strand reads get shifted plus four base pairs, reverse strand reads get shifted minus five base pairs, to align them to the actual center of the cut site. If you don't apply this correction, your peak summits will be slightly off-center. ATAC-seq analysis pipelines handle this automatically, but it's worth knowing the chemistry behind it.

**Second**, the sequence preferences. Tn5 is not perfectly sequence-agnostic. It has a mild preference for certain dinucleotide combinations at its insertion sites — favoring some sequences slightly over others. This means that the raw insertion frequencies aren't a pure measure of accessibility; they're accessibility convolved with a small sequence bias. For high-resolution work, particularly transcription factor footprinting from ATAC-seq data, you need to model and correct for this Tn5 sequence bias. We'll come back to this in Segment 16. For most purposes — calling peaks, comparing samples, integrating with other data — the bias is small enough to ignore. But it's there.

So that's Tn5. A bacterial enzyme, engineered into a hyperactive variant, loaded with sequencing adapters, and applied to permeabilized nuclei where it preferentially inserts into accessible chromatin, simultaneously cutting and tagging the DNA in a single step. The enzyme's selectivity for open chromatin is a consequence of its physical size — it can only fit into the nucleosome-free gaps. Its output is a population of DNA fragments, each flanked by sequencing adapters, that report on where in the genome the chromatin was open at the moment the reaction happened. That output is the raw material of ATAC-seq.

---

## SEGMENT 6 — The protocol, end to end

Let me walk you through the modern ATAC-seq protocol, top to bottom, the way you'd actually do it in a lab today. The reason to do this carefully is that even though the protocol is short — four hours, give or take, from cells to sequencing-ready library — every step has its own pitfalls and optimization tricks. Let me name the five stages, then unpack each.

**Stage one: cell harvest and nuclei isolation.** **Stage two: the Tn5 reaction itself.** **Stage three: PCR amplification.** **Stage four: cleanup and size selection.** **Stage five: sequencing.** Five stages. The whole thing fits in a single afternoon.

**Stage one: cell harvest and nuclei isolation.** You start with your cells. They might come from a cell culture, a sorted population from a flow cytometer, a fresh tissue dissociation, a tumor biopsy — anywhere you can get a clean suspension of intact cells. The standard input range is 10,000 to 50,000 cells, though modern protocols and the single-cell variants can push this down further. You wash the cells in cold PBS to remove media and debris. Then you lyse the cell membrane gently — typically with a hypotonic buffer containing a mild detergent like Igepal or NP-40 — to release the nuclei while keeping the nuclear membrane and the chromatin inside it intact. The crucial point here is that you want to permeabilize the cells so Tn5 can get to the chromatin, but you do not want to disrupt the chromatin structure itself. The nucleosomes have to stay in place. The nucleus has to be morphologically intact. If you over-lyse, the chromatin spills out and decondenses, and Tn5 will start cutting everywhere — your accessibility signal collapses into noise.

The hypotonic lysis is calibrated for each cell type. Some cells, like immortalized cancer cell lines, lyse easily. Some, like primary tissues with tough membranes, need a bit more help. The original Buenrostro protocol uses 0.1 percent Igepal, ten minutes on ice. The Omni-ATAC variant, which we'll discuss in Segment 11, adds Tween-20 and digitonin to the lysis buffer to improve nuclei recovery from difficult tissues.

\[Pause.\]

**Stage two: the Tn5 reaction.** Once you have your clean nuclei, you resuspend them in a buffer containing adapter-loaded Tn5 transposase. The commercial source for this is typically Illumina's Tagment DNA Enzyme — the same enzyme used in Nextera library preps — which you can buy as a pre-loaded reagent. Some labs make their own Tn5 in-house, which is significantly cheaper and gives you more control over the adapter sequences, but requires that you maintain the enzyme expression and purification yourself.

You incubate the nuclei with the enzyme at 37 degrees Celsius for about 30 minutes. During this incubation, Tn5 enters the permeabilized nuclei, encounters the chromatin, and starts inserting into accessible regions. The enzyme is, by design, used at a concentration where it produces a population of cuts spread across the accessible chromatin — not so concentrated that it cuts everywhere even in closed regions, not so dilute that it misses real peaks. The optimization of this enzyme-to-nuclei ratio is critical. Too much enzyme and you over-tagment, getting tiny fragments and losing the nucleosomal size distribution; too little and you under-tagment, getting only a few fragments per nucleus. The standard ratio, for 50,000 cells, is about 2.5 microliters of Illumina Tagment Enzyme in a 50-microliter reaction. You can adjust up or down based on input.

After incubation, the reaction is stopped — typically by adding a buffer containing EDTA and SDS to denature the enzyme and release the DNA from the chromatin. At this point, you have a population of DNA fragments, each one flanked by Illumina adapters, ranging in size from short fragments derived from nucleosome-free regions to longer fragments that span one or more nucleosomes.

\[Pause.\]

**Stage three: PCR amplification.** The fragments at this point are adapter-flanked but present in very low quantities — picograms or low nanograms of DNA. To get enough material for sequencing, you PCR-amplify the library. The PCR uses primers that anneal to the Illumina adapter sequences and that also add the sample indices — short sequences that let you pool multiple samples on a single sequencing run and demultiplex them later by reading the indices. You typically do 10 to 13 cycles of PCR, depending on the input. More cycles give you more material but also amplify any biases — over-represented fragments get further over-represented, and PCR duplicates accumulate.

A useful optimization: do a small qPCR pilot first, on a fraction of your library, to determine the optimal number of cycles. The endpoint is when the qPCR curve hits about one-third of its maximum fluorescence — far enough into amplification to get enough material, not so far that you over-amplify and saturate.

**Stage four: cleanup and size selection.** After PCR, you clean up the library with magnetic beads — typically AMPure XP beads — to remove primer dimers, adapter dimers, and excessively long fragments. The size range you typically want for ATAC-seq is fragments from about 100 to 1000 base pairs. The very short fragments (under 100 bp) are mostly adapter dimers and not useful. The very long fragments (over 1000 bp) tend to be inefficiently sequenced on Illumina platforms and waste reads. The cleanup gives you a tight, well-sized library ready for the sequencer.

You can do a Bioanalyzer or TapeStation trace at this point to assess library quality. A high-quality ATAC-seq library shows a characteristic size distribution with a clear nucleosomal periodicity — peaks at roughly 100, 200, 400, and 600 base pairs, corresponding to fragments from nucleosome-free regions, single nucleosomes, di-nucleosomes, and tri-nucleosomes. We'll spend Segment 7 on this distribution because it's a beautiful piece of structural information that comes essentially for free from the assay.

**Stage five: sequencing.** This is identical to any other Illumina paired-end sequencing run. You pool your samples by their indices, load them onto a flow cell, and run paired-end 50 to 75 base pairs in each direction, which is plenty for ATAC-seq alignment. Typical sequencing depth is 25 to 50 million paired reads per sample, though for some applications you go deeper. The reads come off the sequencer as FASTQ files, get aligned to the reference genome with a tool like Bowtie2 or BWA, and end up as BAM files — the same file format you'd get from any other Illumina experiment.

That's the protocol. Five stages. Four hours total, give or take. From a tube of cells to a sequencing-ready library, with one enzymatic reaction at the heart of it. Compare this to the multi-day, multi-step protocols of DNase-seq and FAIRE-seq, and you can see why ATAC-seq took off the way it did. The biology is the same — same chromatin, same accessibility, same map at the end — but the engineering is dramatically simpler.

The remaining segments are about what to do with the data, what makes the technique special, where it shines, and where it has limits. Let me start with the fragment size distribution, because it's the most elegant feature of the assay and one that almost falls out of the design for free.

---

## SEGMENT 7 — The fragment size distribution and nucleosomal periodicity

One of the most beautiful things about ATAC-seq — and one of the features that distinguishes it from every other accessibility assay — is what you see when you plot a histogram of the fragment sizes in your library. The plot has structure. It is not a single peak, not a smooth bell curve. It is a multi-modal distribution with a sharp peak under 100 base pairs and then a series of progressively decaying peaks at roughly 200, 400, and 600 base pairs. These peaks have a name. They are the **nucleosomal periodicity**, and they are diagnostic, in two different ways, of whether your experiment worked and of what the biology is doing.

Let me explain where the peaks come from. Remember: Tn5 cuts the DNA in two places to release a fragment. The size of any given fragment is determined by the distance between two Tn5 insertion events. If both insertions happen in the same nucleosome-free region — say, in the open window at an active promoter — the fragment can be very short, maybe 50 to 100 base pairs. If one insertion happens on one side of a single nucleosome and the next insertion happens on the other side, the fragment spans the entire nucleosome and the linker regions on either side, giving a fragment of about 200 base pairs — which is roughly the 147 base pairs of the nucleosome itself plus about 50 base pairs of linker. If the cuts are separated by two nucleosomes, the fragment is about 400 base pairs. Three nucleosomes, about 600. And so on.

So the histogram peaks are the structural fingerprint of the chromatin. The under-100 peak is fragments derived purely from nucleosome-free regions — the open windows where Tn5 had clear access and could insert multiple times within a small space. The 200 peak is mono-nucleosomal fragments — pieces that wrap around exactly one nucleosome. The 400 peak is di-nucleosomal, 600 is tri-nucleosomal. The peaks get progressively smaller because the probability of finding two Tn5 cuts separated by exactly N nucleosomes drops as N grows. The result is the characteristic comb-shaped distribution that anyone who's done ATAC-seq will recognize on sight.

\[Pause.\]

This periodicity is not a curiosity. It is a quality control marker. A well-prepared ATAC-seq library shows this clear nucleosomal pattern. If you don't see it — if your fragment distribution is smooth, with no nucleosomal peaks — something has gone wrong. Most often, the nuclei have over-lysed and the chromatin has decondensed, so Tn5 is cutting everywhere uniformly, including in regions that used to be nucleosomal. The structure is lost, and with it, the meaningful signal. Or you've used too much Tn5, and the enzyme has been able to cut even into nucleosomal DNA after overcoming the kinetic barrier. Either way, the absence of nucleosomal periodicity is a red flag, and you should remake the library.

Conversely, if you see strong, sharp nucleosomal peaks, you have evidence that the chromatin structure was preserved during the assay and that Tn5 was responding to it the way you wanted. The periodicity itself becomes a built-in quality control. You can run a Bioanalyzer trace at the library stage and immediately tell whether the experiment worked, just by looking at the size distribution. This is one of the under-appreciated charms of ATAC-seq — the assay reports on its own success.

\[Pause.\]

There's more you can do with the fragment size distribution beyond QC. The sub-nucleosomal fragments — the under-100 fraction — carry information about the nucleosome-free regions. The mono-nucleosomal fragments — the 150 to 250 range — carry information about where the nucleosomes are positioned. You can computationally split an ATAC-seq library into these two fractions and analyze them separately. The sub-nucleosomal fraction gives you a high-resolution map of accessibility. The mono-nucleosomal fraction gives you a map of nucleosome positions, similar in spirit to MNase-seq, but obtained as a free side-product of the same experiment.

This is one of the multi-modal outputs of ATAC-seq we noted earlier. From a single experiment, you get accessibility, nucleosome positioning, and — with some additional analysis — transcription factor footprints. Three readouts for the price of one. The nucleosomal periodicity is the feature that makes this multi-modality possible.

The analogy I want you to hold for this segment: **Tn5 cuts twice. The distance between the cuts tells you about the chromatin landscape between them.** Short distances mean the cuts were both inside a single nucleosome-free region — both insertions found open windows close to each other. Medium distances (around 200 bp) mean the cuts straddled one nucleosome. Larger distances mean they straddled more nucleosomes. The histogram of cut-to-cut distances reads out, structurally, how the chromatin is organized. You can see the nucleosomes in the data, even though Tn5 was avoiding them — because the avoidance itself leaves a signature. The peaks come from a kind of geometric resonance with the nucleosomal beads-on-a-string structure of the genome.

This is a property that DNase-seq does not have, at least not as cleanly. DNase-seq gives you only the cut positions, not the fragments. You don't get the nucleosomal periodicity, you don't get the built-in QC, you don't get the multi-modal output. ATAC-seq, by virtue of the paired-end nature of Tn5 cuts, contains structural information about chromatin that you wouldn't have thought to extract — and it's there in every library, for free.

---

## SEGMENT 8 — Why low input matters — primary samples and clinical biology

I want to spend a segment on why the low input of ATAC-seq is not just a technical convenience but a transformative property — one that changed which biological questions could be asked, not just how easily existing questions could be answered. The 50,000-cell input requirement of standard ATAC-seq, compared to the millions required by DNase-seq, opens up an enormous range of samples that were previously inaccessible to chromatin accessibility profiling. Let me walk you through what those samples are and why this matters.

**First, primary patient samples.** A clinician draws a tube of blood from a patient. From that tube, you can purify, by flow cytometry, a population of rare immune cells — say, regulatory T cells, or a specific subset of B cells, or circulating tumor cells. From a single patient sample, you might get a few hundred thousand cells of the type you care about. With DNase-seq, that's not enough. You can't run the assay. You'd need to pool samples across multiple patients, which loses the per-patient resolution that's often the entire point of clinical research. With ATAC-seq, 50,000 cells is plenty, and you can profile each patient individually. This is the difference between studying a generic immune cell type and studying that cell type in the context of a specific disease, a specific treatment response, a specific genotype. The clinical and translational potential of ATAC-seq is enormous, and it's been a major driver of its adoption.

**Second, sorted cell populations.** Modern cell biology relies heavily on cell sorting — using a FACS machine to isolate cells based on marker expression and study them as a defined population. The bottleneck has always been yield. You might pull two million cells out of a sort, but if you want a rare subpopulation — say, 1 percent of the input — you're working with tens of thousands. ATAC-seq is the first chromatin accessibility assay where these post-sort populations are large enough for the assay. Suddenly the regulatory landscape of every defined immunological subpopulation becomes mappable, and we've gained a much richer picture of immune cell diversity as a result.

**Third, biopsies and microdissected tissue.** A clinician cuts a small piece of tumor from a patient. After dissociation, you might get fifty thousand viable cells. Or less. Or, if it's a precious sample like a needle biopsy, just a few thousand. Pre-ATAC-seq, you couldn't profile accessibility from such samples — the input wasn't there. With ATAC-seq, you can. The Cancer Genome Atlas project, in fact, used ATAC-seq specifically because it was the only accessibility assay compatible with the size of tumor samples available. The 2018 TCGA ATAC-seq paper, which we'll talk about in Segment 13, mapped chromatin accessibility across 23 cancer types and over 400 tumors. None of that work would have been possible without the input reduction ATAC-seq provided.

\[Pause.\]

**Fourth, embryonic and developmental samples.** Developmental biology is full of beautiful but tiny samples. A dissected mouse embryonic limb bud at E10.5 might yield 100,000 cells. A single Drosophila embryo might give you tens of thousands of cells of any specific tissue. A particular structure in a zebrafish embryo might give you fewer than a thousand. Watching the chromatin landscape change as cells differentiate, as morphogenesis unfolds, as a developmental program executes — this requires being able to profile chromatin in small, specific structures at specific time points. ATAC-seq is the first method that makes this routinely possible. The developmental biology community embraced it for exactly this reason, and the segment-by-segment maps of embryonic regulatory programs you see in current papers are mostly ATAC-seq data.

**Fifth, neurons and other hard-to-isolate cell types.** Neurons are notoriously difficult to work with. They're hard to dissociate without damaging them. They die rapidly outside their natural environment. Different neuronal types in the brain are mixed together in complex circuits, and isolating a pure population requires either FACS sorting from genetically labeled animals or single-nucleus extraction protocols. Whatever you do, you end up with a small number of nuclei from any given population. ATAC-seq, particularly the single-nucleus variant we'll discuss in Segment 12, has been transformative for neuroscience because it lets you ask which regulatory elements are active in particular types of neurons in particular brain regions — a question that was effectively unanswerable before.

**Sixth, and this is the big one, single cells.** The lowest input you can possibly have is one cell. And, as we'll see in Segment 12, ATAC-seq adapts to single-cell resolution remarkably well. Single-cell ATAC-seq, snATAC-seq, has become one of the most powerful tools in the single-cell omics arsenal. It is technically possible largely because the bulk method was already designed for low input. Going from 50,000 cells to one cell is a relatively small leap, conceptually and technically, when your method is already optimized for tens of thousands of cells. DNase-seq and FAIRE-seq, by contrast, have never had viable single-cell extensions, because their inputs are too far from one cell to bridge.

\[Pause.\]

The framing I want you to hold: **ATAC-seq broke the input ceiling on chromatin profiling.** Before 2013, the question of which regulatory elements were open in any given cell type or tissue was a question you could only ask in well-established cell lines that you could grow indefinitely. Primary samples, patient tissues, sorted populations, developmental specimens — all of these were dark to the existing assays. ATAC-seq turned the lights on. Suddenly the chromatin atlas could include the cells that mattered, not just the cells that were easy to grow. The shift in what biological questions became answerable was as important as any improvement in throughput or cost. This is the kind of methods advance that doesn't just make things easier — it changes the shape of the field.

The companion fact you should pair with this is timing. Four hours from cells to library means you can run the assay on a fresh tissue sample the same day it arrives. You don't have to freeze, store, ship, batch. The biology is responsive — same-day data acquisition from a clinical or experimental sample. This matters for things like time-course experiments, for time-sensitive perturbations, for clinical decision-support workflows where a chromatin profile might inform a treatment choice. The combination of low input and short time is what makes ATAC-seq feel like a different kind of assay than its predecessors. It's not just better-engineered. It's deployable in contexts the others couldn't reach.

---

## SEGMENT 9 — Peak calling and the bioinformatics pipeline

Now let's talk about what you do with the data once it comes off the sequencer. The wet lab gives you a tube of library. The sequencer gives you a FASTQ file of paired reads. The remaining question is: how do you turn those reads into a map of accessibility — into a list of peaks, with positions, intensities, and identities — that you can interpret biologically? This is the bioinformatics half of ATAC-seq, and it has converged, over the past decade, on a standard pipeline that you'll see in most papers and that is now formalized in the ENCODE ATAC-seq pipeline.

Let me walk through the major steps.

**Step one: alignment.** You take your FASTQ reads — typically paired-end, 50 to 75 bp each — and align them to the reference genome with a standard short-read aligner. Bowtie2 is the most common choice for ATAC-seq, though BWA-MEM also works well. The output is a BAM file: a sorted, indexed list of every read and where it landed on the genome. Alignment is fast and unsurprising. The choices here are similar to ChIP-seq and RNA-seq.

**Step two: filtering.** You filter out reads you don't trust. PCR duplicates, identified by reads with identical mapping positions, are flagged and removed — typically with Picard MarkDuplicates or samtools markdup. Reads that map to multiple genomic locations (low mapping quality) are removed. Reads from the mitochondrial genome are removed — this is a big deal in ATAC-seq, and we'll talk about why in Segment 11. Reads from blacklist regions — known artifact-prone parts of the genome cataloged by ENCODE — are removed. After this filtering, you have a clean BAM file with reads you can trust.

**Step three: shifting for Tn5 offset.** Because Tn5 cuts the two strands of the target DNA at offset positions (the staggered cut we discussed in Segment 5), the actual center of the Tn5 insertion is not exactly where the read starts. You apply the standard correction: forward strand reads are shifted +4 bp, reverse strand reads are shifted -5 bp, to align the read positions to the actual Tn5 insertion centers. This step is small but important for high-resolution analysis, particularly for footprinting. Most pipelines do this automatically.

\[Pause.\]

**Step four: peak calling.** This is the heart of the analysis. You take your aligned reads and ask: where in the genome are reads piling up significantly above background? The piles of reads — the peaks — correspond to accessible regions. The tool of choice is **MACS2** — the same Model-based Analysis of ChIP-Seq software used in ChIP-seq analysis. MACS2 was originally written for ChIP-seq peak calling, but it works very well for ATAC-seq with a few parameter adjustments. The key flags for ATAC-seq are `--nomodel` (because there's no fragment-size model needed; the size is determined by the Tn5 cuts directly), `--shift` and `--extsize` (to define the cut-site extension), and `--call-summits` (to identify multiple peak summits within broad accessible regions).

MACS2 calls peaks by modeling the expected background of reads across the genome (typically a Poisson distribution at each position) and asking where the observed read counts significantly exceed the expected background. It assigns each peak a p-value and a fold-enrichment over background. A typical ATAC-seq sample yields somewhere between 30,000 and 200,000 peaks, depending on the cell type, the sequencing depth, and the stringency thresholds.

The output of peak calling is a BED file: a tabular list of peaks, with chromosome, start, end, peak name, score, and various metadata. This BED file is the primary data product of the ATAC-seq experiment. Everything downstream — motif analysis, integration with other data, differential accessibility — operates on the peak list.

\[Pause.\]

**Step five: quality control metrics.** Before you trust your peaks, you compute a battery of QC metrics. The TSS (transcription start site) enrichment is a standard one — you measure how much your reads pile up at known transcription start sites compared to the genome average. A good ATAC-seq library has a TSS enrichment of at least 6, often much higher (15 to 30). Low TSS enrichment indicates that your accessibility signal is weak relative to background. The fraction of reads in peaks (FRiP) is another standard metric — you want at least 20 percent, ideally 30 or more. Low FRiP means your reads are scattered diffusely rather than concentrated at real peaks, suggesting library quality issues.

You also look at the fragment size distribution (which we discussed in Segment 7 — the nucleosomal periodicity should be visible), the duplication rate (should be low, ideally under 20 percent), and the mitochondrial read fraction (should be low, ideally under 10 percent, which we'll talk about in Segment 11). If all these metrics check out, your library is good. If not, you might need to re-prep, increase sequencing depth, or apply additional filtering.

**Step six: peak annotation and downstream analysis.** With a peak list in hand, you can ask all sorts of questions. Which peaks overlap promoters of known genes (within, say, 2 kb of a transcription start site)? Which peaks are at putative enhancers (distal, but in the same genomic neighborhood as active genes)? Which peaks are differentially accessible between two samples (using tools like DESeq2 or edgeR adapted for ATAC-seq)? Which transcription factor motifs are enriched in your peaks (the topic of Segment 10)? Which peaks correlate with which gene expression patterns (the topic of Segment 11, when we discuss RNA-seq integration)?

The bioinformatics ecosystem around ATAC-seq is now mature. The ENCODE ATAC-seq pipeline, available on GitHub and runnable on a cloud platform, will take your raw FASTQ files and produce a full set of standard outputs — aligned BAM, filtered BAM, peaks in BED format, QC metrics, bigWig signal tracks for visualization. R packages like ATACseqQC, ChrAccR, and chromVAR provide additional analytical capabilities. Python packages like SnapATAC and SnapTools handle single-cell ATAC analyses. The tooling is good. The pipeline is fast. The data is interpretable. We'll come back to the ecosystem in Segment 17, but for now: the bioinformatics side of ATAC-seq is solidly built out.

\[Pause.\]

One important point about peak calling that's worth emphasizing. The peaks called by MACS2 (or any peak caller) are statistical inferences, not absolute truths. The boundaries of a peak are slightly fuzzy. The score reflects a confidence in there being a peak there, not the magnitude of accessibility per se. When you compare samples, you have to be careful — you typically merge peak sets across samples to create a common peak universe, then quantify reads in each peak in each sample, and ask which peaks are differentially accessible using a count-based statistical model. This is standard practice, but it requires care. The accessibility signal is quantitative, and the analytical tools have to be quantitative to match.

That's the pipeline. Align, filter, shift, call peaks, QC, annotate. Each step is well-understood, well-implemented, and well-documented. The end product is a list of accessible regions in your sample, scored and annotated, ready for the biological interpretation that comes in the next segments.

\[BREAK\]

---

## SEGMENT 10 — Motif analysis — inferring transcription factors from open chromatin

Welcome back. We've now covered the foundations: the question, the chromatin biology, the prior methods, the 2013 breakthrough, the enzyme, the protocol, the fragment size distribution, the low-input advantage, and the analytical pipeline. The remaining segments are about what you do with the data — the biological questions you ask, the extensions of the technique, and where the frontier is heading. We'll start with one of the most powerful inferences you can make from an ATAC-seq peak list: which transcription factors are sitting in those peaks, even though you didn't ChIP for any of them.

Here is the logic. An accessible peak is, almost by definition, a region where some transcription factor is binding (or has recently bound). Transcription factors don't just sit on random open DNA — they bind specific DNA sequence motifs, typically 6 to 12 base pairs long, that match the protein's preferred recognition sequence. So if you have a list of accessible peaks and you know the DNA sequences underneath them, you can ask: which transcription factor motifs are enriched in these sequences, compared to a background set of non-accessible sequences? The motifs that are over-represented in your peaks are the motifs of transcription factors that are likely binding your open chromatin.

This is **motif enrichment analysis**, and it is the standard first step in interpreting an ATAC-seq dataset. The tools are well-established. HOMER (Hypergeometric Optimization of Motif EnRichment) is a classic. MEME-suite, particularly the AME tool, is another standard. Newer tools like chromVAR work directly on single-cell ATAC-seq data. They all do roughly the same thing: scan your peak sequences for known transcription factor motifs (typically from the JASPAR or CIS-BP database), count how often each motif appears, and compare to a background distribution to identify the motifs that are most enriched.

\[Pause.\]

What does this tell you? Quite a lot, actually. If you do an ATAC-seq experiment on T cells and find that the peaks are enriched for the motifs of GATA3, TCF1, RUNX, and ETS family transcription factors — well, those are the transcription factors known to drive T cell biology. The motif enrichment recovers known regulators of the cell type. If you do ATAC-seq on liver cells and find HNF4 and FOXA motifs enriched, you've recovered the canonical hepatocyte master regulators. The motif analysis is a sanity check: it tells you whether your peaks are biologically sensible, and it also reveals the regulators driving the accessibility landscape.

But the analysis goes beyond sanity checks. If you compare ATAC-seq from two conditions — say, T cells at rest versus T cells activated by antigen — and ask which motifs are enriched in the **differentially accessible** peaks (peaks that gained accessibility upon activation), you can identify the transcription factors that are driving the cellular response. If NF-κB and AP-1 motifs jump out as enriched in the newly accessible peaks, you've identified the activation-induced regulators. This is causal reasoning from chromatin accessibility data. You're inferring what changed in the transcriptional regulatory program by looking at which regulatory elements opened up.

\[Pause.\]

There's a more sophisticated version of this called **footprinting**. The idea is that when a transcription factor is sitting on its DNA motif, it locally protects the DNA from Tn5 insertion — even within an otherwise accessible region. So within an ATAC-seq peak, you'll often see a sub-peak structure where Tn5 cuts are abundant in the flanking regions but depleted right over a transcription factor binding site. The TF is leaving a "footprint" in the data — a small dip in the cut frequency at the position where it's sitting.

Computationally, you can scan ATAC-seq data for these footprints and use them to infer not just which TFs are likely binding (from motif enrichment) but which TFs are actively bound in your specific sample (from the footprint signature). Tools like HINT-ATAC, TOBIAS, and others implement this analysis. The footprinting approach has been used to map transcription factor binding from ATAC-seq data without needing to do ChIP-seq for each factor individually — a kind of indirect, motif-based ChIP-seq surrogate.

The caveat is that footprinting is sensitive to Tn5 sequence biases, depth of sequencing, and the exact protocol used. It's an active area of methodological refinement, and the inference is not as clean as a real ChIP-seq for any given factor. But for surveying which factors might be bound where, it's a powerful approach, and one that goes far beyond what you'd think the assay could deliver.

\[Pause.\]

The analogy I want you to hold: **an ATAC-seq peak is the address of an active regulatory element, and the motifs underneath it tell you which tenants are likely living there.** You don't need to ChIP for each tenant individually — you can infer the tenant list from the sequence content of the open windows. This is one of the things that makes ATAC-seq so powerful as a stand-alone assay. From one experiment, you get the locations of regulatory elements, the structural fingerprint of nucleosomes, and the likely identity of the transcription factors driving the accessibility — without needing specific antibodies for any of them. It's a deeply economical assay in terms of information yield per experiment.

The complementarity with ChIP-seq, though, is real and worth emphasizing. ATAC-seq tells you which regions are open and gives you a hypothesis about which TFs might be there. ChIP-seq, for a specific TF, tells you with high confidence whether that TF is actually there. The combination — ATAC for the regulatory landscape, ChIP for the per-factor validation — is much more powerful than either alone. Modern regulatory genomics studies frequently combine them, using ATAC-seq for the broad map and targeted ChIP-seq (or its more recent variants like CUT&Tag, which we'll discuss in Segment 15) for the specific TFs of interest.

---

## SEGMENT 11 — ATAC-seq plus RNA-seq, Omni-ATAC, and the mitochondrial problem

Two important practical developments in the ATAC-seq story deserve their own segment. The first is the integration of ATAC-seq with RNA-seq — combining accessibility and expression data to get a more complete picture of regulation. The second is Omni-ATAC, a 2017 protocol refinement that dramatically improved data quality, particularly by reducing mitochondrial contamination — a problem that, if you've ever looked carefully at an ATAC-seq library, is impossible to ignore.

Let me start with the integration. ATAC-seq tells you where the genome is open. RNA-seq tells you which genes are being expressed. These are deeply related — open chromatin near a gene is a necessary (though not sufficient) condition for that gene to be expressed. If you do both ATAC-seq and RNA-seq on the same set of cells, you can ask which open regions correspond to expressed genes, and which open regions seem to be regulatory elements whose effects are felt at distance (enhancers).

The standard integration analysis goes like this. You take your list of ATAC peaks and your list of expressed genes (with their expression levels from RNA-seq). For each peak, you identify the nearest gene (or all genes within some window, say 100 kb). You then ask: do peaks correlated with highly expressed genes look different from peaks correlated with silent genes? The answer is yes. Peaks near active genes are more accessible, often broader, often more enriched for motifs of activator TFs. Peaks near silent genes might still exist (chromatin is often "poised" before activation) but are typically weaker, narrower, less enriched for activator motifs.

\[Pause.\]

When you do this integration across multiple conditions — say, comparing two cell types, or a treated versus untreated sample — you can identify peaks whose accessibility changes correlate with gene expression changes. These are the most likely **causal regulatory elements**: regions whose accessibility shifts seem to be driving (or at least correlated with) shifts in gene expression. This is one of the standard ways to identify cell-type-specific enhancers, treatment-responsive regulatory elements, and so on.

More sophisticated integration includes techniques like co-accessibility analysis (Cicero, for single-cell ATAC), where you ask which peaks tend to be open together in the same cells, which is suggestive of a regulatory connection — perhaps an enhancer-promoter interaction. You can also link peaks to genes using chromatin conformation data (Hi-C) when available, to identify which peaks are physically close to which promoters in 3D space. The ATAC-RNA integration provides the regulatory edges; the conformation data provides the topology.

The frontier here, which we'll come back to in Segment 18, is to do ATAC-seq and RNA-seq simultaneously in the same single cells — the 10x Multiome assay. That gives you the most fine-grained possible map of regulatory state and expression state in matched cells, and lets you make per-cell statements about which open elements are driving which transcripts. We'll get to that.

\[Pause.\]

Now, the second topic of this segment: the mitochondrial problem and how Omni-ATAC fixed it.

Here is the issue. When you do ATAC-seq on a cell, Tn5 enters the cell and starts cutting wherever it can fit. The nuclear chromatin is its main target, but there's another genome in the cell — the mitochondrial genome — which is much smaller (16.5 kb in humans), present in many copies per cell (tens to thousands), and almost entirely accessible to Tn5 because it's not wrapped on nucleosomes. Mitochondrial DNA is a circular, mostly naked genome, and Tn5 just hammers it.

The consequence is that in a standard ATAC-seq library, often 20 to 80 percent of the reads come from mitochondrial DNA, depending on the cell type. These mitochondrial reads are essentially noise — they don't carry information about nuclear chromatin accessibility, but they consume a huge fraction of your sequencing budget. You have to sequence five times more reads than you'd otherwise need, just to get enough nuclear reads for analysis. This was a significant practical problem in early ATAC-seq.

The Omni-ATAC protocol, developed by Mahmoud Eldridge and Will Greenleaf and colleagues in 2017, addressed this directly. The key change is a modified lysis buffer that uses a mixture of detergents — Tween-20, NP-40, and digitonin — rather than just NP-40 alone. This combination, plus an additional wash step, dramatically improves the recovery of intact nuclei while also reducing carryover of mitochondria into the Tn5 reaction. The result is libraries with much lower mitochondrial contamination — often under 10 percent rather than 50 percent — and correspondingly higher information yield per sequencing dollar.

\[Pause.\]

Omni-ATAC also improves data quality in a few other ways. The nucleosomal periodicity in the fragment size distribution is sharper. The TSS enrichment is higher. The peak calls are cleaner. The protocol is also more robust across cell types — Omni-ATAC works well on cell types where standard ATAC-seq was finicky, including some primary tissues, frozen samples, and difficult cell lines. Since 2017, Omni-ATAC has been the de facto standard protocol. If you read a paper that says "we performed ATAC-seq following the Omni-ATAC protocol," that's what's happening: a refined lysis step that gets you better nuclei and cleaner data.

A few other protocol variations have emerged. Fast-ATAC simplifies some of the steps for very rapid workflows. ATAC-seq for frozen samples, which uses additional fixation steps to preserve nuclear integrity in samples that have been stored at -80, has expanded the range of accessible biological material. ATAC-see is an imaging variant where you tag the Tn5 adapters with fluorescent dyes and image accessible chromatin in situ. The protocol space has been extensively explored, and you can usually find a variant suited to your sample type.

The take-home: ATAC-seq's bioinformatic and wet-lab pipeline has matured substantially since the original 2013 paper. Omni-ATAC is the current default. The mitochondrial problem is largely solved. Integration with RNA-seq is standard. The technique you'd run today is more refined, more robust, and more informative than the original.

---

## SEGMENT 12 — Single-cell ATAC-seq and the multiome era

If the bulk ATAC-seq story is one of taking a method designed for millions of cells and shrinking it to thousands, the single-cell ATAC-seq story is the next logical step: taking a method designed for thousands of cells and shrinking it to one. And remarkably, ATAC-seq adapts to single-cell resolution better than almost any other genomic assay. Single-cell ATAC-seq, often written **snATAC-seq** (for single-nucleus ATAC-seq), is now a routine technique, and combined with RNA-seq in the **10x Multiome** platform, it provides one of the most informative single-cell experiments available today.

Let me explain how it works. The conceptual challenge with any single-cell genomic assay is that you have to do the chemistry on one cell at a time, then label the resulting molecules with a cell-of-origin barcode, then pool everything together for sequencing. The barcode lets you, after the fact, demultiplex which read came from which cell. The standard approach in single-cell RNA-seq, popularized by 10x Genomics' droplet-based platform, is to encapsulate individual cells in microdroplets along with a barcoded bead, do the reverse transcription inside the droplet so each cell's mRNA gets the bead's barcode, and then break the droplets and sequence the pooled material.

For single-cell ATAC-seq, the trick is that you can't quite do this directly — the Tn5 transposition step is too quick and too efficient to confine inside a droplet for very long. So the standard snATAC-seq workflow does something cleverer. It does the Tn5 reaction in bulk first — on a pool of isolated nuclei, all at once — and then encapsulates the tagmented nuclei in droplets along with barcoded beads. Inside the droplet, a PCR reaction amplifies the tagmented fragments and incorporates the cell-of-origin barcode into the adapters. After the droplet step, the libraries from all cells are pooled and sequenced, and the barcodes let you assign each fragment to its cell of origin.

\[Pause.\]

The output of a single-cell ATAC-seq experiment is, conceptually, a peaks-by-cells matrix — analogous to the genes-by-cells matrix you'd get from single-cell RNA-seq, but where the rows are accessible regions instead of genes. Each entry tells you whether (or how many) Tn5 insertion events occurred in that peak in that cell. Because each cell has only a handful of insertions in any given peak (often just zero or one), the matrix is extremely sparse — much sparser than scRNA-seq data. This sparsity is one of the analytical challenges of scATAC-seq, and a lot of recent methods development has focused on handling it: dimensionality reduction with LSI (latent semantic indexing), motif-based aggregation with chromVAR, cell-cell similarity with cisTopic, and so on.

But once you've handled the sparsity, the single-cell ATAC data is extraordinarily informative. You can identify cell types from their accessibility profiles (different cell types have very different sets of open chromatin). You can identify cell states within a type (resting vs. activated, naive vs. memory, etc.). You can identify regulatory trajectories — paths through the cell-state space along which accessibility (and presumably gene expression) is changing as cells differentiate or respond to stimuli. You can ask which transcription factors are driving the differences between cells, by looking at motif activity per cell. The single-cell view of accessibility has given us a much richer picture of cellular heterogeneity than we ever had from bulk methods.

\[Pause.\]

The really powerful move is to combine ATAC-seq and RNA-seq in the same cells. This is the **10x Multiome** assay, launched commercially by 10x Genomics in 2020. The chemistry is intricate, but conceptually straightforward: in each droplet, with each cell, the platform does both a tagmentation reaction (capturing accessibility) and a reverse transcription reaction (capturing mRNA expression). The two libraries — one of ATAC fragments, one of cDNA — get separately processed but share the same cell-of-origin barcode. At the end, you have, for each cell, a paired measurement of its open chromatin and its expressed genes.

This is, in my view, the most informative single-cell experiment currently possible. For each cell, you know both what genes it's expressing — its current functional state, what proteins it's making — and what regions of its genome are open — its regulatory potential, what factors are binding, what enhancers are active. The integration of these two layers lets you ask questions that neither alone can answer. Which open regions are driving expression of which genes, in which cells? Which transcription factors are active in which cell states? How does the regulatory landscape coordinate with the expression landscape across a heterogeneous population? The 10x Multiome data has become the standard for studying cell-type-specific regulatory programs in heterogeneous tissues.

\[Pause.\]

The analogy I want you to hold: **for each cell, you know what genes it's expressing AND what regions of its genome are open.** That's the multiome promise. The regulatory state and the functional state, measured simultaneously, in matched cells, at single-cell resolution. The implications are still being worked out — the analytical methods for joint multiome data are an active area of research — but the experimental capability is now routine. A single Multiome run on a 10x Chromium instrument can profile 10,000 to 30,000 cells with paired ATAC and RNA, in roughly the same workflow as a standard scRNA-seq run.

A few extensions are worth mentioning briefly. **SHARE-seq** is an academic alternative to 10x Multiome that uses combinatorial indexing rather than droplets, allowing higher throughput at lower cost. **Paired-tag** is a variant that does ATAC and histone modification ChIP-like profiling in the same cells. **TEA-seq** combines ATAC, RNA, and antibody-derived tag (ADT) protein measurements in the same cells — three modalities at once. The trend is clear: more modalities, in the same cells, at single-cell resolution. ATAC-seq is one of the most modality-friendly assays, and it's frequently the chromatin layer in these multi-omic combinations.

The single-cell ATAC-seq frontier is changing the field of regulatory genomics in real time. Cell-by-cell maps of accessibility are now standard in atlas-scale studies — the Human Cell Atlas, the Brain Initiative Cell Census Network, the Encode 4 single-cell program all include single-cell ATAC as a core modality. The big picture: we are building, cell type by cell type, a comprehensive atlas of regulatory elements active in every cell type in the body, with per-cell resolution. This is the dream of regulatory genomics, and it's being realized largely on the back of ATAC-seq and its derivatives.

---

## SEGMENT 13 — ATAC-seq in cancer — enhancer activation in tumors

Let me turn to applications, and start with cancer, because ATAC-seq has had a particularly large impact on cancer genomics. The application is straightforward in concept: tumors have aberrant regulatory landscapes, and mapping which regions of the genome are open in a tumor versus matched normal tissue tells you something important about how the tumor is regulated, what transcription factors are active, and potentially what therapeutic vulnerabilities might exist.

The flagship study here is the 2018 TCGA ATAC-seq paper, published in _Science_, in which a consortium led by Howard Chang and colleagues at Stanford profiled chromatin accessibility across 23 cancer types — over 400 tumors in total. This was a heroic effort, and it was only possible because ATAC-seq's low input made tumor samples accessible to the assay. The result was the first pan-cancer atlas of regulatory elements, identifying tens of thousands of cancer-specific accessible regions, many of which corresponded to enhancers that were active in tumors but not in matched normal tissue.

\[Pause.\]

The biology that emerged is striking. Many cancers show what's called **enhancer reprogramming**: they activate a set of enhancers that are normally silent in the tissue of origin, often driving expression of oncogenes or pro-proliferative genes. The transcription factors driving this reprogramming are often the master regulators of cancer biology — MYC, AP-1, NF-κB, lineage-specific factors like FOXA1 in prostate cancer or PAX8 in ovarian cancer. ATAC-seq reveals the regulatory machinery of the tumor in a way that gene expression alone doesn't — it shows you where the regulatory action is happening, which is often more informative than just which genes are up or down.

ATAC-seq has also been applied to study **drug resistance** and **tumor evolution**. By comparing accessibility before and after treatment, you can identify regulatory programs that emerge in resistant cells — often the activation of bypass pathways or stress response programs. By comparing primary and metastatic tumors from the same patient, you can track how the regulatory landscape evolves during disease progression. These applications would have been essentially impossible with older methods because the sample sizes available (often hundreds of cells from a needle biopsy or microdissection) were too small.

A few specific clinical applications have emerged. In acute myeloid leukemia (AML), ATAC-seq from patient blast cells reveals distinct regulatory states that correlate with response to targeted therapies, providing potential biomarkers for treatment selection. In melanoma, ATAC-seq has identified resistance programs that emerge under BRAF inhibitor treatment. In breast cancer, ATAC-seq has mapped the regulatory landscapes of different molecular subtypes. The translation from chromatin map to clinical utility is still in early stages, but the technique is being increasingly woven into cancer biomarker and therapy development pipelines.

The take-home: ATAC-seq is one of the central tools of modern cancer genomics, complementing DNA sequencing (which tells you what mutations exist) and RNA sequencing (which tells you what's being expressed) with information about the regulatory landscape (which tells you why those expression patterns are happening and what transcription factors are driving them). Together with the multiome single-cell extensions, it's reshaping how we think about tumor heterogeneity and therapy resistance.

---

## SEGMENT 14 — ATAC-seq in developmental biology

Developmental biology was an early and enthusiastic adopter of ATAC-seq, for reasons we touched on in Segment 8: developmental samples are small, time-sensitive, and require methods that work with limited material. But beyond the technical fit, ATAC-seq has been transformative for developmental biology because it lets you watch the regulatory landscape change as cells differentiate — which is, in many ways, the central question of the field.

Differentiation is fundamentally a regulatory phenomenon. A pluripotent stem cell and a fully differentiated neuron have the same genome, but they express vastly different sets of genes. The difference is in which regulatory elements are active — which enhancers are open, which transcription factors are bound, which promoters are accessible. ATAC-seq, mapped across developmental time, shows you exactly which regulatory elements are gaining or losing accessibility as cells commit to a fate. The data is essentially a movie of the regulatory landscape, frame by frame across the developmental trajectory.

\[Pause.\]

Some of the most beautiful ATAC-seq studies in development have come from systems where you can pin down cell-fate decisions at high resolution. The work on hematopoietic differentiation — tracking how a hematopoietic stem cell decides to become a B cell versus a T cell versus a myeloid cell — has been particularly elegant, with ATAC-seq revealing lineage-specifying enhancers that open up at exact decision points. Similar studies in muscle differentiation, neural development, gut differentiation, and cardiac specification have built up a comprehensive picture of how regulatory landscapes reconfigure themselves during cell-fate determination.

The combination of ATAC-seq with single-cell methods has been especially powerful here. snATAC-seq across developmental time gives you a single-cell-resolution map of regulatory state at every developmental snapshot, and computational trajectory analysis lets you reconstruct the regulatory dynamics that connect them. The result is something close to a real-time view of how the chromatin landscape evolves as cells transit through differentiation states.

A complementary direction has been to use ATAC-seq to study **regulatory grammar** — the rules by which transcription factor combinations specify cell types. By correlating accessibility patterns with cell identity across many cell types, researchers can identify the combinations of motifs that specify each lineage. This is gradually building up to a quantitative understanding of how regulatory elements are decoded by the cellular machinery, which is a long-standing dream of regulatory genomics.

The take-home: developmental biology has been one of ATAC-seq's biggest success stories. From maps of zebrafish embryogenesis to trajectories of human iPSC differentiation, the technique has provided the dynamic, multi-stage regulatory landscape that the field needed to understand differentiation at a regulatory level. The same maps now serve as benchmarks for cellular engineering — when you're trying to reprogram one cell type into another, comparing your engineered cells' ATAC profile to the target cell type's ATAC profile is one of the most stringent tests of how good your reprogramming is.

---

## SEGMENT 15 — CUT&Tag versus ATAC — choosing the right tool

Now let me address a question that comes up constantly in modern regulatory genomics: ATAC-seq versus CUT&Tag. These are two recent low-input chromatin profiling methods that, on the surface, sound similar, but actually answer different questions. Knowing when to use each is one of the practical skills of a working chromatin biologist.

Let me describe CUT&Tag first. CUT&Tag — Cleavage Under Targets and Tagmentation — is a method developed by Steve Henikoff and colleagues in 2019. It builds on the same insight as ATAC-seq: load Tn5 with sequencing adapters and let it cut accessible DNA. But CUT&Tag adds an antibody-based targeting step. Instead of letting Tn5 cut wherever it can fit, you first incubate the cells with an antibody against a specific protein (a transcription factor, a histone modification, or a chromatin-associated factor). Then you bring in a secondary protein — a fusion of protein A or protein G with Tn5 — that binds the antibody. Now Tn5 is tethered to the antibody, which is tethered to the protein you care about. When you activate Tn5, it cuts only the DNA near where the antibody is bound. The result is a map of the genome around that specific protein — essentially a low-input alternative to ChIP-seq.

\[Pause.\]

So here's the distinction. **ATAC-seq is protein-agnostic.** You don't need an antibody. You map all accessible chromatin, wherever it is, regardless of which proteins are sitting there. **CUT&Tag is protein-specific.** You need an antibody for the protein you want to map, and you get a map of that one protein's binding sites — analogous to ChIP-seq, but with much lower input and a simpler protocol.

When do you use each? Use ATAC-seq when you want a survey of the regulatory landscape — which regions are open, which regulatory elements are active, which TFs might be there. ATAC-seq is your map of the accessibility universe in a given cell type. Use CUT&Tag when you want to map a specific protein — a particular transcription factor, a specific histone modification, an RNA polymerase. CUT&Tag is your low-input ChIP alternative.

In practice, the two are often complementary. ATAC-seq gives you the broad regulatory map; CUT&Tag fills in the details for specific factors. A modern regulatory genomics study might use ATAC-seq to identify all accessible regions, then use CUT&Tag for several master regulators to determine which TFs are actually binding at each accessible region. Together, they're more powerful than either alone.

There are other relatives in the same family. **CUT&RUN** — Cleavage Under Targets and Release Using Nuclease — is an older Henikoff lab method that uses MNase instead of Tn5 for the cutting step. It's similar in spirit to CUT&Tag but with different chemistry and slightly different practical characteristics. **CUT&Tag-direct** is a variant for very low input. **DiP-ATAC** and other methods explore other combinations of antibody-targeted and accessibility profiling. The space is rich, and the right tool depends on your specific biological question.

\[Pause.\]

The analogy I want you to hold: **ATAC-seq asks "where is the genome open?" CUT&Tag asks "where is this specific protein?"** Both methods use Tn5 transposase and adapter-loaded tagmentation, both work with low input, both produce similar-looking data files. But the question they answer is different, and the experimental design — particularly the need for a validated antibody in CUT&Tag — differs accordingly. ATAC-seq is the protein-agnostic accessibility map. CUT&Tag is the protein-specific binding map. Use both where you can. Use the one that matches your question where you can't.

---

## SEGMENT 16 — Biases, artifacts, and what can go wrong

Let me spend a segment on the things that can go wrong with ATAC-seq, and the biases that even a perfect experiment will carry. Every assay has its dark side, and ATAC-seq is no exception. Knowing the failure modes is part of being a critical reader of the literature.

**First, Tn5 sequence bias.** As I mentioned in Segment 5, Tn5 is not perfectly sequence-agnostic. It has mild preferences for certain dinucleotide contexts at its insertion sites — it favors some sequences slightly over others. This means that the raw insertion frequencies are accessibility convolved with a sequence preference. For most analyses (peak calling, sample comparison), the bias is small enough to ignore. For high-resolution analyses (transcription factor footprinting, sub-peak structure), the bias matters and you need to correct for it. Tools like HINT-ATAC and seqOutBias implement Tn5 bias corrections by modeling the expected insertion frequencies at each k-mer.

**Second, the mitochondrial problem.** As discussed in Segment 11, mitochondrial DNA gets heavily tagmented by Tn5 because it's not packaged on nucleosomes. Standard protocols had 20 to 80 percent mitochondrial reads, which wastes sequencing. Omni-ATAC dropped this to under 10 percent. Even with Omni-ATAC, some mitochondrial reads remain, and you should filter them in your pipeline.

\[Pause.\]

**Third, over-tagmentation.** If you use too much Tn5 relative to the number of cells, the enzyme starts cutting even in regions that should be closed — overcoming the kinetic barrier from nucleosomes through sheer concentration. The result is loss of selectivity: your library shows accessibility signal everywhere, with no clear distinction between open and closed regions. The nucleosomal periodicity disappears from the fragment size distribution. The data is essentially garbage. Avoiding this requires calibrating the enzyme-to-cell ratio carefully, which is one of the most important optimization steps in setting up the assay.

**Fourth, under-tagmentation.** The opposite problem: too little enzyme, and only a few insertions per cell, leading to sparse libraries with low peak coverage. This is less catastrophic than over-tagmentation but still costs you data.

**Fifth, lysis problems.** As mentioned in Segment 6, the cell lysis step is critical. Over-lysis destroys chromatin structure; under-lysis prevents Tn5 from reaching the nuclei. Either way, signal quality suffers.

**Sixth, batch effects.** ATAC-seq, like all sequencing assays, is sensitive to batch effects — variations between days, between operators, between reagent lots. When comparing samples across conditions, batch matching and randomization are essential. Failing to do this can lead to false positive differences that are actually just batch artifacts.

**Seventh, peak interpretation.** A peak in ATAC-seq is a region of accessibility. It is **not** necessarily a transcription factor binding site, an enhancer, or a regulatory element — though many peaks are these things. Some peaks are at sites of DNA damage. Some are at unusual chromatin structures. Some are artifacts of repetitive regions or sequencing biases. You should always interrogate your peak list with domain knowledge and validation experiments rather than treating every peak as biologically meaningful by default.

**Eighth, signal-to-noise variation across the genome.** ATAC-seq signal is not uniformly informative across all regions. Promoter regions tend to be brightly accessible and easy to call as peaks. Distal enhancers can be more subtle, particularly in primary tissues or rare cell types. The dynamic range of accessibility is wide, and statistical thresholds for peak calling may include some noise and exclude some real but weak signal. This is a quantitative issue that affects how you compare across regions and samples.

\[Pause.\]

The take-home: ATAC-seq is a powerful and relatively robust assay, but it is not foolproof. The biases are well-characterized and the failure modes are known. Good experimental design — calibrated enzyme-to-cell ratios, careful lysis, sequencing depth chosen for your application, attention to batch effects — and good analytical practice — proper QC, bias correction where needed, careful interpretation of peaks — will produce high-quality data. Sloppy work produces sloppy data. The technique is good but unforgiving of cut corners.

---

## SEGMENT 17 — Tools, pipelines, and the open ecosystem

One of the underappreciated strengths of ATAC-seq is that the analytical ecosystem around it is open, mature, and well-integrated with the rest of genomics. If you decide to run ATAC-seq today, you can use freely available pipelines and packages to handle everything from raw reads to downstream interpretation. Let me give you a tour of the landscape.

The flagship pipeline is the **ENCODE ATAC-seq pipeline**, developed by the ENCODE consortium and now hosted on GitHub. It takes FASTQ files as input and produces a standard output: aligned BAM files, filtered BAM files, peak calls in BED format, bigWig signal tracks for visualization, and a full set of QC metrics. The pipeline is implemented in Workflow Description Language (WDL) and can be run on any platform that supports WDL — including Cromwell on local servers, DNAnexus, Terra, and AWS. The pipeline is the de facto standard, and most published ATAC-seq datasets in major journals have been processed through it or something equivalent.

For peak calling, **MACS2** is the workhorse, as discussed in Segment 9. **Genrich** is an alternative peak caller designed specifically for ATAC-seq, with built-in handling of paired-end fragments and replicate consensus. Both are widely used.

\[Pause.\]

For downstream analysis in R, the **ATACseqQC** package provides QC tools. **ChrAccR** offers a comprehensive accessibility analysis framework. **chromVAR** is excellent for motif analysis, especially at single-cell resolution. **DiffBind** handles differential accessibility analysis. **ArchR** is a comprehensive single-cell ATAC-seq analysis suite, increasingly the standard for snATAC analysis. **Signac** is a Seurat-compatible single-cell ATAC analysis package, useful when you're integrating with single-cell RNA-seq.

In Python, **SnapATAC2** is the modern reference implementation for single-cell ATAC analysis, with efficient handling of large datasets. **MACS3** is the next-generation peak caller. **pyATAC** provides various ATAC-specific analyses.

For visualization, **IGV** (Integrative Genomics Viewer) is the standard for inspecting individual loci. **WashU Epigenome Browser** is excellent for sharing tracks and comparing across many samples. **deepTools** generates publication-quality plots of signal around features.

For motif analysis, **HOMER** is a classic with comprehensive motif databases. **MEME-suite** offers more flexible motif discovery and enrichment. **chromVAR** and **TOBIAS** specialize in ATAC-specific motif activity inference.

For trajectory analysis (relevant for differentiation studies), **scVelo**, **PAGA**, **Monocle**, and **Cicero** all handle ATAC data, often combined with RNA-seq data for joint trajectory inference.

\[Pause.\]

There's also a rich ecosystem of public datasets you can compare to. The **TCGA ATAC-seq** dataset (the 23-cancer-type atlas from Segment 13). The **ENCODE** ATAC-seq catalog (thousands of samples across cell types and conditions). The **Human Cell Atlas** ATAC subset. The **BICCN** (Brain Initiative Cell Census Network) ATAC profiles of brain cell types. The **Tabula Muris** and **Tabula Sapiens** single-cell atlas including ATAC. These public datasets serve both as comparison points (does my ATAC profile of cell type X look like the consensus profile?) and as resources for integrative analyses.

The take-home: the open ecosystem is one of the things that has made ATAC-seq so successful. You don't have to invent your analytical stack from scratch. The tools exist, they're well-documented, they interoperate, and a large community of users is actively maintaining and improving them. This is the genomics community at its best — open data, open tools, open standards, all built around an assay that turned out to be enormously enabling for biology.

---

## SEGMENT 18 — The frontier — spatial, multi-modal, AI-driven

We end with a look at where ATAC-seq is going. The technique is now more than a decade old, but it's still evolving rapidly, in three main directions: spatial extensions, multi-modal integration, and AI-driven analysis. Let me touch on each.

**Spatial ATAC-seq.** The newest extensions of ATAC-seq are spatial — measuring accessibility while preserving information about where each cell was in a tissue. The leading methods include spatial ATAC-seq from Rong Fan's lab at Yale (using a deterministic barcoding approach on a tissue slide) and various microdissection-based approaches. The idea is to take a tissue section, do ATAC-seq in situ with barcodes that encode physical position, and produce a map of accessibility that you can overlay on the tissue's morphology. This is enormously powerful for understanding regulatory landscapes in spatial context — for example, mapping the regulatory states of cells across a tumor's invasive front, or across the layers of the cerebral cortex, or in spatially organized embryonic structures. Spatial ATAC is still expensive and technically demanding, but it's likely to become a standard tool over the next few years.

\[Pause.\]

**Multi-modal single-cell methods.** We touched on these in Segment 12. The trend is to measure more modalities in the same cells. 10x Multiome (ATAC + RNA) is now standard. Newer methods like TEA-seq add antibody-derived tags (protein measurements) on top. SHARE-seq variants combine ATAC with various other modalities. The frontier is going toward "everything from the same cell" — DNA methylation, histone modifications, chromatin conformation, RNA, protein, and accessibility, all measured simultaneously at single-cell resolution. We're not there yet for every combination, but each year brings new combinations to the routine toolkit.

**AI and deep learning.** Machine learning has become an integral part of ATAC-seq analysis. Convolutional neural networks like **BPNet** and **DeepLIFT** can predict ATAC-seq signal from DNA sequence alone, revealing which sequence features drive accessibility. **Enformer** and **DragoNN** apply transformer architectures to the same problem. These models, once trained, can predict the regulatory consequences of mutations, identify the contributions of individual sequence motifs to accessibility, and even infer which transcription factors are likely binding without explicit motif scanning. The combination of accessible chromatin data and deep learning is one of the most active areas of methods development in regulatory genomics.

\[Pause.\]

A few other frontiers worth mentioning. **Long-read ATAC-seq**, using nanopore or PacBio for the readout, is being explored — it would let you connect accessibility to local sequence variation in haplotype-resolved fashion. **Chronic ATAC-seq** profiling — tracking accessibility in the same cells over time using metabolic labeling or other tricks — is starting to emerge. **Cross-species ATAC-seq atlases** are building up comparative regulatory landscapes that let us infer how regulatory elements evolve and diverge between species. **Disease-associated variant prioritization** using ATAC data is becoming standard in GWAS follow-up work — many disease-associated variants in non-coding regions fall within accessible chromatin, and ATAC maps in the relevant cell types help interpret which variants are likely functional.

The big picture: ATAC-seq has gone from a clever bench trick in 2013 to a foundational technique of modern regulatory genomics in 2026. Its strengths — low input, fast turnaround, simple protocol, multi-modal output, easy adaptation to single cells — have made it the default accessibility assay across nearly every application. Its extensions — spatial, multi-omic, AI-integrated — are pushing the frontier of what we can learn about regulatory biology. And its tooling — open pipelines, public datasets, mature analytical packages — has made it accessible to a wide range of labs that don't specialize in genomics.

If I asked you, ten years from now, what we will know about regulatory genomics that we don't know today, my guess is that a substantial fraction of the new knowledge will come from ATAC-seq and its derivatives. We will have accessibility maps of essentially every cell type in the body, in many disease states, at many developmental time points, at single-cell and spatial resolution. We will have AI models that predict accessibility from sequence and infer regulatory consequences of variants. We will have integrated multi-modal atlases that connect accessibility to expression, protein, methylation, and conformation. Whether the field gets there in ten years or fifteen depends on the pace of methods development, but the trajectory is clear.

That's where ATAC-seq is going. From one paper in 2013 to a foundational layer of regulatory genomics today, to a comprehensive multi-modal atlas tomorrow. The molecular ninja, with its calling card, has done quite well for itself.

Thank you. Let's open it up for questions.

---

## APPENDIX

**Key papers and milestones to remember**

- **Buenrostro, Giresi, Zaba, Chang, Greenleaf, 2013, _Nature Methods_** — "Transposition of native chromatin for fast and sensitive epigenomic profiling of open chromatin, DNA-binding proteins and nucleosome position." The foundational paper introducing ATAC-seq.
- **Corces, Buenrostro, et al., 2017, _Nature Methods_** — "An improved ATAC-seq protocol reduces background and enables interrogation of frozen tissues." The Omni-ATAC paper.
- **Cusanovich, Daza, Adey, et al., 2015, _Science_** — Single-cell ATAC-seq using combinatorial indexing.
- **Buenrostro et al., 2015, _Nature_** — Droplet-based single-cell ATAC-seq.
- **Corces, Granja, et al., 2018, _Science_** — The TCGA ATAC-seq pan-cancer atlas across 23 cancer types.
- **Kaya-Okur, Henikoff, et al., 2019, _Nature Communications_** — The CUT&Tag paper.
- **10x Genomics Multiome, 2020** — Commercial launch of joint ATAC + RNA single-cell profiling.

**Vocabulary**

- **Accessible chromatin (open chromatin)** — DNA in regions not tightly wrapped on nucleosomes, accessible to DNA-binding proteins.
- **Tn5 transposase** — Bacterial enzyme used to insert sequencing adapters into accessible DNA in a single step.
- **Tagmentation** — The combined cut-and-adapter-ligation reaction performed by adapter-loaded Tn5.
- **Nucleosome-free region (NFR)** — A stretch of DNA from which nucleosomes have been evicted, typically at active promoters and enhancers.
- **DNase hypersensitive site (DHS)** — Accessible chromatin region identified by DNase I sensitivity.
- **TSS enrichment** — Quality metric measuring read enrichment at transcription start sites.
- **FRiP** — Fraction of Reads in Peaks; a quality metric for ATAC-seq libraries.
- **Footprinting** — Inferring transcription factor binding from local depletion of Tn5 cuts within an accessible region.
- **snATAC-seq** — Single-nucleus ATAC-seq, the single-cell variant.
- **Multiome** — Joint profiling of ATAC and RNA in the same cells.

**The five-stage protocol summary**

1. Cell harvest and nuclei isolation (hypotonic lysis with mild detergent)
2. Tn5 reaction (30 min at 37°C with adapter-loaded transposase)
3. PCR amplification (10-13 cycles, with sample-indexing primers)
4. Cleanup and size selection (AMPure XP beads)
5. Sequencing (Illumina paired-end, 50-75 bp reads, 25-50M paired reads per sample)

**The four-step pipeline summary**

1. Align reads with Bowtie2 or BWA
2. Filter duplicates, low-MAPQ, mitochondrial, and blacklist regions
3. Call peaks with MACS2 (with `--nomodel`, `--shift`, `--extsize`)
4. QC with TSS enrichment, FRiP, fragment size distribution, duplication rate

**Quick comparison table**

| Method | Input | Time | Specificity | Output |
| --- | --- | --- | --- | --- |
| DNase-seq | Millions of cells | Days | Open chromatin | Accessibility peaks |
| FAIRE-seq | Millions of cells | Days | Open chromatin | Accessibility peaks (noisier) |
| MNase-seq | Millions of cells | Days | Nucleosomes | Nucleosome positions |
| ATAC-seq | 10K-50K cells | 4 hours | Open chromatin | Accessibility + nucleosome positions + footprints |
| CUT&Tag | 100K cells | 1-2 days | Specific protein | Protein binding sites |
| ChIP-seq | Millions of cells | Days | Specific protein | Protein binding sites |
| snATAC-seq | Single cells | 1-2 days | Open chromatin per cell | Per-cell accessibility |
| 10x Multiome | Single cells | 1-2 days | ATAC + RNA per cell | Per-cell accessibility + expression |

**Three things to walk out of this lecture knowing**

1. The ATAC-seq workflow on a whiteboard: nuclei → Tn5 tagmentation → PCR → sequencing → peak calling. The whole thing in five stages, four hours.
2. Why Tn5 transposase works as an accessibility sensor: the enzyme is physically too large to fit into nucleosome-wrapped DNA, so it can only cut where the chromatin is open. The selectivity is built into the enzyme's geometry.
3. How to read an ATAC-seq paper: identify the cell type, check the QC (TSS enrichment, FRiP, fragment size periodicity), look at peak overlap with regulatory elements, scan for motif enrichment, and interpret in the context of the biology being studied.

---
