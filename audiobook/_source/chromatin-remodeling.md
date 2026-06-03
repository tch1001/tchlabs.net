# Chromatin Remodeling Complexes — SWI/SNF (BAF), ISWI, CHD, and INO80

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for board work or discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The chromatin remodeler problem

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about a class of molecular machines that, when I started thinking about how to frame this lecture, I realized are weirdly underappreciated in the introductory molecular biology curriculum. They are the chromatin remodelers — the ATP-dependent enzyme complexes that physically move nucleosomes around. They slide them. They eject them. They swap one histone for another. They restructure the chromatin so that the rest of the machinery — transcription factors, polymerases, repair enzymes — can either get to the DNA or be blocked from it. They are constantly working, in every nucleus of every cell, every second of every day that you are alive. And when they break, you very often get cancer.

Let me start by framing the problem they exist to solve, because if you internalize the problem, the machines fall out of it almost inevitably.

We have spent earlier lectures talking about chromatin, but let me remind you of the picture. DNA in eukaryotic cells is not naked. It is wrapped, systematically and tightly, around protein spools called nucleosomes — eight histone proteins arranged into a disk-shaped octamer, with about 147 base pairs of DNA wrapped one and three-quarter turns around the outside. The nucleosomes are spaced every couple of hundred base pairs along the genome, with short linker DNA between them, and then folded into higher-order structures, fibers, loops, and ultimately the densely packed regions we call heterochromatin. That packaging is what lets you cram two meters of DNA into a nucleus ten microns across. Without it, you simply cannot fit the genome inside the cell.

But here is the problem. Nucleosomes are, structurally, in the way. If you want to transcribe a gene, RNA polymerase has to physically traverse the DNA, base by base, and it cannot do that while the DNA is wrapped around a nucleosome — the path is blocked, the geometry is wrong, the helix isn't accessible. If you want a transcription factor to land on its sequence motif, that motif has to be exposed; if it's pressed against the surface of a histone octamer, the transcription factor can't see it. If you want to repair a double-strand break, the repair machinery has to get to the broken ends and the DNA around them, and if those ends are wrapped on nucleosomes, the repair enzymes simply can't reach them. Everything that needs to happen on DNA — transcription, replication, repair, recombination — happens in the face of nucleosomes that are sitting in the way.

\[Pause.\]

So how does the cell solve this? It could, in principle, just never put nucleosomes on the regions that matter. But that doesn't work, because the regions that matter today might be different from the regions that matter tomorrow. A gene that is silent in your liver cell is wildly active in your immune cell. An enhancer that is quiet in one developmental stage is screaming hot in the next. The genome has to be packaged tightly enough to fit in the nucleus, but the packaging has to be dynamically reconfigurable, so that any given region can be opened or closed on demand, depending on what the cell needs to do at that moment. The packaging has to be both stable and flexible. It has to keep most of the genome locked down most of the time, while letting specific regions be unlocked precisely when and where they're needed.

The cell's solution is a fleet of ATP-burning machines whose job is, quite literally, to move nucleosomes around. These are the chromatin remodelers. They consume ATP — which is the cell's universal energy currency, the same molecule that powers your muscles and your kidney pumps — and they use that energy to do mechanical work on chromatin. They grip a nucleosome, they pump DNA through it, and they shift the position of the histone octamer along the DNA. Sometimes they slide a nucleosome a few base pairs to the left or right, opening up a transcription factor binding site that was previously buried. Sometimes they eject the nucleosome entirely, leaving a stretch of bare DNA where machinery can land. Sometimes they swap out one of the histone proteins for a different variant, changing the chemical identity of the nucleosome without moving it. They are, in the simplest possible description, **the bouncers and rearrangers of chromatin**.

Here's the analogy I want you to hold for the next two hours. Imagine your genome as a vast library — three billion books, organized on shelves, with most of the shelves locked behind glass cases. The histones are the spools the books are rolled around. The nucleosomes are the rolled-up books. The chromatin remodelers are the librarians who, on demand, walk over to a particular shelf, unlock the case, slide a book a few inches over, or pull a book off the shelf entirely, or swap one book for a different edition. They are constantly walking around the library, rearranging which books are on display and which are tucked away. The cell decides what to read by deciding where to send the librarians. The librarians don't care what's written in the books. They just rearrange access.

If you walk out of here in two hours and you can do three things — one, name the four families of ATP-dependent chromatin remodelers and explain in plain English what each one does and how they're related; two, explain why mutations in chromatin remodeler subunits are some of the most common cancer driver events in the entire human genome, even though hardly any oncology textbook from before 2010 mentions them; three, look at any modern paper or news story about a SWI/SNF mutation, a BAF complex inhibitor, an INO80 cryo-EM structure, or a synthetic-lethal drug targeting BRG1 or BRM, and have a real intuition for what's being claimed and why it matters — then we've succeeded. Everything else hangs off those three.

\[Pause.\]

One more orienting thought before we dive in. This lecture sits naturally between two others. In the ChIP-seq lecture, we asked: where in the genome is a specific protein bound? In the ATAC-seq lecture, we asked: where in the genome is the chromatin open enough that proteins could be bound? **ChIP-seq tells you what's bound. ATAC-seq tells you what's open. Chromatin remodelers are the machines that OPEN and CLOSE access.** They are what makes the ATAC-seq peaks appear and disappear. They are why the binding sites you map with ChIP-seq are accessible in one cell type and inaccessible in another. They are the kinetic, mechanical, energy-burning layer that sits underneath all the static maps you can draw with sequencing. If you want to understand why a gene is on here and off there, you usually end up tracing the answer back to which remodelers were active in which cell, doing what at which moment.

So that's the contract. Two hours, four families of remodelers, one set of conserved ATP-driven motors, and a cancer story that nobody saw coming until the genomic age. Let's start in 1984, in a yeast genetics lab in Cambridge, Massachusetts, with a graduate student studying sugar metabolism.

---

## SEGMENT 2 — The 1984 SWI/SNF discovery — sucrose nonfermenting yeast

The chromatin remodeling field, as a field, did not start with chromatin. It started with yeast that couldn't eat sugar. This is a wonderful example of how the most important molecular biology often comes out of genetic screens that were aimed at completely different questions, where the experimenters had no idea what they were going to uncover.

The two key labs were those of Marian Carlson at Columbia University, and earlier the lab of Fred Winston at Harvard, working in the early 1980s on the budding yeast _Saccharomyces cerevisiae_. The biology they were studying was straightforward. Yeast normally prefers to eat glucose. When glucose runs out, yeast can switch to eating other sugars — sucrose, galactose, maltose — by turning on the genes for the enzymes that metabolize those alternative sugars. The mating-type switching system in yeast — the SWI genes — was another set of regulated genes, controlling how yeast cells flip between mating types. Both of these regulated systems required the genome to turn specific genes on at the right time.

Marian Carlson and her colleagues ran a genetic screen for yeast mutants that could not grow on sucrose as their sole carbon source. They isolated dozens of mutant strains, plated them on sucrose, and picked the colonies that failed to grow. These mutants had a defect somewhere in the pathway that lets yeast switch from glucose to sucrose. Carlson and her team called them **SNF mutants** — for **s**ucrose **n**on**f**ermenting. SNF1, SNF2, SNF3, SNF4, SNF5, and so on, numbered in the order they were discovered. The genes were cloned and the proteins identified over the next several years.

Simultaneously, Ira Herskowitz and Fred Winston were studying the SWI genes — short for **swi**tching — which were required for mating-type switching in yeast. They isolated SWI1, SWI2, SWI3, and so on. SWI2 turned out to be the same gene as SNF2. SWI3 the same as SNF6. The two screens, looking at completely different biology — sugar metabolism versus mating-type switching — were converging on the same set of genes. The same proteins were needed for both processes.

\[Pause.\]

Now, this convergence was the first clue that what these genes were doing was not specific to sucrose, and not specific to mating-type switching, but instead something more general — something that affected how many different genes were regulated, in many different contexts. By the late 1980s, biochemists in the labs of Roger Kornberg, Bob Kingston, and others started purifying the SWI/SNF proteins from yeast, asking what they did biochemically. And what they found, in a series of landmark papers in the early-to-mid 1990s, was that SWI and SNF were not separate proteins doing separate things. They were subunits of a single large multi-protein complex — a megadalton-scale assembly of more than ten different proteins, working together as a unit.

And the function of this complex, in vitro, was to do something that nobody had ever seen before. It could take a nucleosome — a piece of DNA wrapped around a histone octamer — and, in the presence of ATP, move the nucleosome along the DNA. Slide it left or right. Push it off the end of a short DNA template. Make DNA that was previously buried inside the nucleosome accessible to enzymes that couldn't otherwise reach it. It was, in modern language, a chromatin remodeler. The first one ever identified.

The biochemical proof was beautiful. Carl Wu's lab, Craig Peterson's lab, Kornberg's lab, and Kingston's lab — all working through the 1990s — showed that SWI/SNF complexes, when added to reconstituted chromatin in a test tube, would change the position of nucleosomes in an ATP-dependent way. Burn ATP, move nucleosomes. No ATP, no movement. The energy of ATP hydrolysis was being converted into mechanical work on chromatin structure. This was the discovery of an entire new class of molecular machine.

\[Pause.\]

The name SWI/SNF stuck, even though by the time the field understood what the complex actually did, the original sugar and mating-type connections were just historical curiosities. **SWI/SNF** — pronounced "switch-sniff" — is the name everyone uses, and it carries with it a little echo of the 1980s yeast genetics that started everything. The yeast SWI/SNF complex contains, depending on how you count, eleven to twelve different subunits. The catalytic ATPase at the heart of the complex is Snf2 — also called Swi2 — and the other subunits include Snf5, Swi3, Swi1, Swp82, Snf6, Snf11, and several others. They assemble into a single rigid complex with a defined architecture, and the whole thing acts as one mechanical machine.

The yeast genetics also revealed something else important. When you knock out a SWI/SNF subunit in yeast, the cells survive — they don't die — but a specific set of genes fails to be properly regulated. The SWI/SNF complex is required for the activation of a subset of genes that need to be turned on under specific conditions. Most genes don't need it. But the ones that do — including the sucrose metabolism genes Carlson originally found — are absolutely dependent on it. This was the first hint that chromatin remodelers are not universally required for transcription. They're targeted machines. They get recruited to specific genes by specific transcription factors, and they do their work at those genes. They are part of the regulatory wiring of the cell, not just a generic background activity.

By the late 1990s, the field had a clear picture. SWI/SNF was an ATP-dependent chromatin remodeling complex. It was conserved across eukaryotes. And the same machine, or something very much like it, was almost certainly working in mammals. The question was: what does the human version look like, and what is it doing in our cells? That's where we go next.

---

## SEGMENT 3 — BRG1, BRM, and the mammalian BAF complex

The discovery of the mammalian SWI/SNF complex unfolded in parallel with the yeast work, through the early-to-mid 1990s, primarily in the labs of Bob Kingston at Harvard, Gerry Crabtree at Stanford, and several others. The story has a beautiful symmetry: the same complex, with the same architecture, the same ATPase mechanism, the same role in opening up chromatin for transcription factors — but with mammalian-specific subunits that gave it new biological flavors that didn't exist in yeast.

The mammalian catalytic ATPase came in two flavors, encoded by two paralogous genes. One was called **BRG1**, for **Br**ahma-**r**elated **g**ene 1, encoded by the gene **SMARCA4** in the modern naming. The other was called **BRM**, for **Br**ah**m**a, encoded by **SMARCA2**. These two ATPases are paralogs — they arose from a gene duplication early in animal evolution — and they are mostly interchangeable in terms of biochemical activity, though they have distinct roles in different cell types. Brahma itself was originally named in _Drosophila_, where it was identified as a regulator of homeotic genes. The mammalian versions inherit the name.

The complex that BRG1 or BRM sits inside is called **BAF** — for **B**RG1- or BRM-**a**ssociated **f**actors. The yeast SWI/SNF complex and the mammalian BAF complex are evolutionary cousins, sharing a common ancestor, with most of the core subunits one-to-one related. BAF in mammals contains roughly twelve to fifteen subunits depending on the variant, including the ATPase BRG1 or BRM, the structural subunit SMARCB1 (also called BAF47 or SNF5 by analogy with yeast), the ARID-domain subunit ARID1A or ARID1B, the actin-related proteins ACTL6A and ACTL6B, and several others. The complex is megadalton scale — well over a million daltons — making it one of the largest enzymes in the nucleus.

\[Pause.\]

What does BAF do in mammalian cells? Functionally, it does the same thing yeast SWI/SNF does, but expanded across a vastly more complex regulatory landscape. It gets recruited to specific genomic locations by transcription factors and by chromatin marks. It uses ATP to move or eject nucleosomes, opening up DNA at those locations. It is required for the activation of thousands of genes across hundreds of cell types. Without functional BAF, large swaths of the regulatory genome simply cannot be properly read out. Transcription factors land on closed chromatin and can't open it. Genes that should be on stay off. The cell's identity, its differentiation state, its responses to signals — all depend on BAF doing its job.

The recruitment logic is elegant. A transcription factor — say, the master regulator of a particular cell lineage — binds to its sequence motif at a candidate enhancer or promoter. But the motif is in a region of chromatin that is partially closed; nucleosomes are sitting near or on it. The transcription factor, by itself, can bind transiently to its motif even on or near a nucleosome — this is the so-called "pioneer factor" behavior — but it cannot fully open up the region. So it recruits BAF. The BAF complex is brought to the site through direct protein-protein contacts between its subunits and the transcription factor, or sometimes via chromatin marks like specific histone acetylations that BAF subunits read. Once BAF arrives, it goes to work. ATP gets burned. Nucleosomes get slid or evicted. The region opens up. Other transcription factors can now bind. The full transcriptional program can be initiated.

\[Pause.\]

There's a beautiful study from Gerry Crabtree's lab in the 2000s that I want to mention briefly because it set the conceptual frame for thinking about BAF as a developmental switch. Crabtree's group showed that the subunit composition of BAF changes systematically during development. In embryonic stem cells, BAF contains one set of subunits — what we now call esBAF. In neural progenitors, it swaps in different subunits — npBAF. In differentiated neurons, it swaps in yet others — nBAF. Each version of BAF, with slightly different subunit compositions, has slightly different recruitment patterns and slightly different functional roles. The complex is not a static machine; it's a modular system whose composition is tuned to the cell's developmental stage. This was a hint of something much bigger — that BAF is not a single enzyme but a family of related enzymes, each tuned to specific contexts. We'll come back to the variants — cBAF, pBAF, GBAF — in Segment 13.

The big-picture lesson from Segments 2 and 3 is this. SWI/SNF in yeast was the first ATP-dependent chromatin remodeling complex ever discovered. Its mammalian relative, BAF, does essentially the same thing — moves nucleosomes in response to recruitment by transcription factors, opening up regulatory regions for transcription — but in a vastly more elaborate, developmentally regulated, cell-type-specific way. The conservation from yeast to humans is striking: the catalytic ATPase, the core subunit architecture, the dependence on ATP, the mechanism of moving nucleosomes by translocating DNA. The differences are in the regulation: mammals have many more subunits, many more variants, many more recruitment partners, and as a result, the BAF complex is woven into virtually every developmental and regulatory decision a mammalian cell makes.

And as we'll see in the second half of the lecture, this is exactly why BAF is so central to cancer. When you have a machine that's required for the proper regulation of thousands of genes, breaking it has consequences. Big consequences. Cancer-driver-event-level consequences. But first, let's meet the other three families.

---

## SEGMENT 4 — The ISWI family — keeping nucleosomes in order

SWI/SNF was the first remodeler family discovered, but it was not the only one. As biochemists in the 1990s and 2000s started looking systematically for ATP-dependent nucleosome remodeling activities in cell extracts, they found that there were several distinct families, each built around a different catalytic ATPase, each doing slightly different things to nucleosomes. The second family to be discovered, and the second one we'll discuss today, is called **ISWI** — for **i**mitation **swi**tch, because its catalytic ATPase imitates the Swi2/Snf2 ATPase but with different surrounding domains and different functional specialties.

ISWI was identified in the mid-1990s, primarily by Carl Wu's group at the NIH and by Peter Becker's group in Munich, both working on _Drosophila_ chromatin remodeling activities. They isolated complexes containing an ATPase that looked similar to Swi2/Snf2 in its catalytic domain but had different flanking domains — most notably a C-terminal region called HAND-SANT-SLIDE, abbreviated **HSS**, which is the distinguishing structural signature of the ISWI family. The mammalian versions of ISWI are SNF2H and SNF2L — encoded by **SMARCA5** and **SMARCA1** — and they form the catalytic core of a set of multi-protein complexes including NURF, ACF, CHRAC, RSF, and several others.

What does ISWI do? The classical description, and the one I want you to hold onto, is that ISWI is the **chromatin-spacing family**. Its job is to make sure that nucleosomes are arranged at regular intervals along the DNA. If you start with a region of chromatin where nucleosomes are clumped together unevenly, ISWI will, in an ATP-dependent way, slide them apart so that the spacing becomes regular — typically with linker DNA of a consistent length between each pair of adjacent nucleosomes. ISWI does not eject nucleosomes; it doesn't dramatically open up large regions of chromatin the way SWI/SNF does. It just nudges nucleosomes along the DNA, evening out their spacing, like a stage manager arranging chairs in a row.

\[Pause.\]

The analogy I want you to hold for ISWI is this. **ISWI is the spacer family — it keeps nucleosomes regularly spaced, like organizing books on a shelf at consistent intervals.** Or, even better, imagine someone whose job it is to walk down a long row of parked cars and make sure every car has the same amount of space in front and behind. They're not towing cars away. They're not changing which cars are parked where in any dramatic way. They're just making sure the spacing is even — nudging this one forward, nudging that one back. That's ISWI. The arrangement matters because the higher-order folding of chromatin depends on consistent spacing; if nucleosomes are clumped or stretched apart unevenly, the folded fiber gets distorted, and downstream functions like replication and transcription get disrupted.

Where does ISWI matter most? Two places. First, after DNA replication. When a chromosome is replicated, the parental nucleosomes get distributed onto the two daughter strands, and new histones are deposited to fill in the gaps. The initial spacing of these freshly deposited nucleosomes is often irregular — clumped here, sparse there. ISWI comes in after replication and evens out the spacing, restoring the regular nucleosomal array that the cell wants on its newly replicated DNA. Knock out ISWI complexes and the daughter chromatin is poorly organized, with consequences for chromosome segregation and gene expression in the next cell cycle.

Second, at heterochromatin boundaries and at silent chromatin regions. ISWI tends to be associated with the maintenance of closed, well-organized chromatin — the opposite role of SWI/SNF in some senses. While SWI/SNF opens chromatin for transcription, ISWI often consolidates closed chromatin to maintain its silenced state. The two families work in opposition, in some contexts, and the balance between them helps determine whether a region of chromatin is going to be open and active or closed and silent.

\[Pause.\]

The HAND-SANT-SLIDE domain on the C-terminus of the ISWI ATPase is doing the recognition work. The SANT and SLIDE domains, in particular, bind to the unmodified histone H4 tail — specifically, the basic patch of residues at the N-terminus of H4. This makes ISWI specifically responsive to nucleosomes whose H4 tails are unmodified — that is, not acetylated. Acetylation of H4 lysines, which is associated with active chromatin, blocks ISWI binding. So ISWI is excluded from acetylated, active chromatin and concentrated on unmodified, silent chromatin. This is a beautiful piece of chemical logic: the same modification that recruits other readers and machinery to active chromatin simultaneously excludes the spacing machinery that consolidates closed chromatin. The two systems are mutually exclusive at the chemical level.

So to summarize ISWI: the second remodeler family, built around an ATPase with the distinctive HAND-SANT-SLIDE C-terminus, primarily doing chromatin spacing — keeping nucleosomes at regular intervals along the DNA — with a particular role in restoring chromatin organization after DNA replication and in maintaining the structure of closed, silent chromatin. Its mechanism is the same fundamental ATP-driven DNA translocation that all chromatin remodelers use, but applied in small, careful nudges rather than dramatic openings. The shelf organizer of the chromatin world. Not glamorous, but essential.

---

## SEGMENT 5 — The CHD family — riding with RNA polymerase II

The third family is the **CHD** family — short for **c**hromodomain-**h**elicase-**D**NA-binding. The name comes from the distinctive structural feature of these remodelers: in addition to the conserved Swi2/Snf2-like ATPase domain in the middle of the protein, they have two **chromodomains** at the N-terminus and a DNA-binding domain at the C-terminus. The chromodomain is a small protein module — about fifty amino acids — that specifically binds to methylated histone lysines. It is one of the canonical "reader" domains of the epigenetic code, recognizing modifications like H3K4me3 (associated with active promoters) and H3K9me3 (associated with silenced heterochromatin).

There are nine members of the CHD family in mammals, named CHD1 through CHD9, and they fall into three subfamilies based on their structural details. CHD1 and CHD2 are the simplest. CHD3, CHD4, and CHD5 are the components of the NuRD complex — a large multi-protein assembly that combines chromatin remodeling with histone deacetylation, doing both at once. CHD6, CHD7, CHD8, and CHD9 are the most divergent subfamily, with additional domains and more specialized roles, several of which are critical for development.

What does CHD do? The defining property of the CHD family is that they work in association with active transcription, and specifically with RNA polymerase II as it traverses the body of an actively transcribed gene. **CHD is the gene-body family — it works on the body of actively transcribed genes, often paired with RNA pol II.** As polymerase ploughs through a gene, transcribing it base by base, it encounters nucleosomes in its path. These nucleosomes have to be moved aside so the polymerase can pass, and then often re-deposited behind the polymerase so the chromatin structure is preserved. CHD remodelers help manage this dance. CHD1, in particular, is recruited to the bodies of active genes through its chromodomains, which bind to H3K4me3 — a histone mark that decorates the 5' ends of transcribed genes — and then it works as a kind of grooming machine, sliding nucleosomes out of the way as polymerase advances.

\[Pause.\]

The CHD family has a more complex relationship with chromatin than ISWI does, in some ways. While ISWI is mostly about spacing, CHD is about coordinating remodeling with the actual reading of the genome. CHD1 binds H3K4me3, which puts it at promoters and 5' gene bodies of active genes. CHD2 deposits the histone variant H3.3 at active genes. CHD3, CHD4, and CHD5, in the NuRD complex, do the opposite — they read other marks and combine remodeling with histone deacetylation to silence regions. So the CHD family spans both opening and closing functions, depending on which member you're looking at and which marks it's reading.

I want to spend a moment on **CHD8**, because this gene has come into the spotlight in the last decade for a reason that nobody could have predicted. CHD8 is one of the most strongly implicated autism risk genes in the entire human genome. Genome-wide sequencing studies of children with autism spectrum disorder have identified, repeatedly, that loss-of-function mutations in CHD8 are among the highest-confidence autism risk variants known. The mutations are typically de novo — meaning they arose in the affected individual, not inherited from a parent — and they disrupt the function of the CHD8 chromatin remodeler in developing neurons. The resulting changes in chromatin regulation, particularly during brain development, contribute to the autism phenotype.

The mechanism here is still being worked out, but the basic picture is that CHD8 is required for the proper expression of many genes during brain development, and when it's broken, the developmental program goes off the rails in ways that affect neuronal connectivity and circuit formation. This is one of the cleanest examples of how a chromatin remodeler mutation, in a non-cancer context, can have a major neurological phenotype. The connection from "ATP-dependent nucleosome slider" to "autism risk gene" was not obvious until the genomics caught up to the biology.

\[Pause.\]

So CHD family, summarized: nine members, all built around a Swi2/Snf2-like ATPase with N-terminal chromodomains that read methylated histones, several of them coupled to RNA polymerase II during transcription, several others involved in repressive complexes like NuRD, and at least one — CHD8 — implicated in autism spectrum disorder through its role in neurodevelopment. The CHD family connects chromatin remodeling to the active state of the gene, riding along with the transcriptional machinery and grooming the chromatin in real time.

---

## SEGMENT 6 — The INO80 and SWR1 family — the histone variant swappers

The fourth and final family is the **INO80** family, which also includes the related complex **SWR1**. These two complexes — INO80 in particular and SWR1 separately — share a common ancestral ATPase and have distinct but related functions. In mammals, the INO80 ATPase is encoded by the gene **INO80**, and the SWR1-related complex is built around the ATPase **SRCAP** (Snf2-related CREBBP activator protein). Both are large, multi-subunit complexes containing the ATPase plus around a dozen accessory proteins, including several actin-related proteins and structural subunits.

The defining property of the INO80/SWR1 family is something genuinely new compared to the other three families. **INO80 and SWR1 are the histone variant swappers — they exchange canonical H2A for the variant H2A.Z, and back.** Let me unpack what this means.

Most of the genome is wrapped on nucleosomes containing the canonical histones — H2A, H2B, H3, and H4 — in their standard amino acid sequences. But there are histone variants, encoded by separate genes, with slightly different amino acid sequences that confer slightly different chemical properties on the nucleosomes that contain them. **H2A.Z** is one of the most important variants. It's encoded by separate genes from canonical H2A, has a distinctive C-terminal tail, and is deposited specifically at certain locations in the genome — most notably at active promoters and at enhancer regions. Nucleosomes containing H2A.Z have slightly different stability and slightly different interaction properties than canonical H2A nucleosomes, and the presence of H2A.Z marks a region as regulatorily important.

\[Pause.\]

The question is: how does H2A.Z get into nucleosomes at the right places? It can't just diffuse in. Nucleosomes are stable structures; the histones don't spontaneously swap out. You need a machine to do the swap. That machine is SWR1 in yeast, and SRCAP and related complexes in mammals. They use ATP to physically pry the canonical H2A-H2B dimer out of a target nucleosome and replace it with an H2A.Z-H2B dimer. The reverse swap — taking H2A.Z out and putting canonical H2A back in — is done by the INO80 complex, working in the opposite direction. Together, these two complexes maintain the proper distribution of H2A.Z across the genome, with deposition at active regulatory regions and removal everywhere else.

The other major function of INO80 is in **DNA double-strand break repair**. When a chromosome breaks — which happens regularly, due to replication errors, radiation, or programmed events like meiotic recombination — the cell has to detect the break, recruit repair machinery, and put the chromosome back together. The chromatin around a double-strand break is heavily modified during this process. Specific histone variants are deposited. The histone variant H2A.X gets phosphorylated, marking the break. And the INO80 complex is recruited to the break site, where it helps remodel the surrounding chromatin so that repair enzymes can access the broken ends and so that the DNA can be properly resected, processed, and joined.

INO80's role in DNA damage response is critical. Cells with defective INO80 are radiation-sensitive — they can't properly repair double-strand breaks, so they accumulate damage and die when exposed to DNA-damaging agents. This is one of the reasons mutations in INO80 subunits are sometimes seen in cancers, particularly in the context of treatment-resistant or radiation-resistant tumors.

\[Pause.\]

The INO80 family also has roles in transcription, replication, and chromatin organization more broadly, but the headline functions are histone variant exchange and DNA repair. **SWR1 puts H2A.Z in. INO80 takes it out. Both help repair broken DNA.** The variant-swapping activity is unique to this family — none of the other three families (SWI/SNF, ISWI, CHD) can exchange histones in this way. So if you want to know how H2A.Z gets deposited at your favorite active enhancer, the answer is: SRCAP (the mammalian SWR1) showed up, used ATP to pry out the H2A-H2B dimer, and put in an H2A.Z-H2B dimer. The chromatin at that enhancer now has slightly different chemical properties as a result, and is poised for the kind of dynamic, regulated activity that promoters and enhancers exhibit.

So now you have all four families. **SWI/SNF (BAF)**: opens chromatin for transcription factors, the big dramatic remodeler, the most mutated in cancer. **ISWI**: spaces nucleosomes evenly, maintains chromatin order, especially after replication. **CHD**: grooms the chromatin in the bodies of active genes, rides with RNA polymerase II, includes the autism-associated CHD8. **INO80/SWR1**: swaps canonical H2A for variant H2A.Z and back, helps repair DNA double-strand breaks. Four families. All conserved from yeast to humans. All built around the same fundamental ATP-driven motor. All essential for life in eukaryotic cells. In the next segment, I want to unpack what that fundamental motor actually does at the molecular level, because the conservation of the core ATPase across all four families tells you something deep about how these machines work.

---

## SEGMENT 7 — The conserved ATPase mechanism — DNA translocation

Here's something that's worth pausing on for a whole segment, because once you see it clearly, an enormous amount of the chromatin remodeling field falls into place. All four families of chromatin remodelers — SWI/SNF, ISWI, CHD, and INO80 — share a common catalytic ATPase. Not the same gene; each family has its own ATPase. But the ATPase domains are evolutionarily related, structurally homologous, and mechanistically the same. They all do the same fundamental chemistry. The differences between the families are in the surrounding domains and the associated subunits, which determine where the ATPase gets recruited and what it does once it gets there. But the core motor is one motor, conserved across all four families.

That motor belongs to a much larger family of enzymes called the **Superfamily 2 helicases**, or SF2 helicases. The classical members of this family are DNA helicases — enzymes that unwind double-stranded DNA into single strands, using ATP energy to walk along one strand and pry the other strand off. Helicases are essential for replication, transcription, and repair. The chromatin remodeler ATPases are evolutionary cousins of these helicases. They have the same fundamental architecture — two RecA-like domains that grip DNA and use ATP hydrolysis to move along it — but their function has been retooled. Instead of unwinding DNA, they translocate along it without unwinding.

\[Pause.\]

The analogy I want you to hold for the chromatin remodeler ATPase is this. **The ATPase is a DNA translocase — the same fundamental motor as helicases, but instead of unwinding it pulls DNA past the histones.** Think of a helicase as a machine that grips a double helix, walks forward, and uses its forward motion to separate the two strands. Now imagine a related machine that grips the double helix but doesn't separate the strands; instead, it just walks forward along the duplex, pulling the DNA through itself like a winch pulling a rope through a pulley. That's a DNA translocase. That's what chromatin remodeler ATPases do.

Now apply this to a nucleosome. The ATPase domain of a chromatin remodeler binds to the nucleosomal DNA at a specific position — typically about two helical turns away from the dyad axis, which is the symmetric center of the nucleosome. From this binding site, the ATPase grips the DNA and starts pumping. ATP gets hydrolyzed; with each cycle of ATP hydrolysis, the ATPase moves the DNA a few base pairs through its grip. The DNA, being wrapped around the histone octamer, can't just be pulled away in space — it's constrained by the wrap. So what happens instead is that the wrap shifts. The DNA on one side of the nucleosome gets pulled in toward the ATPase; the DNA on the other side gets correspondingly released and slides out. The net effect is that the histone octamer ends up in a new position relative to the underlying DNA sequence. The nucleosome has been slid.

\[Pause.\]

This is the universal mechanism. Every chromatin remodeler, in every family, uses this fundamental trick: bind to nucleosomal DNA at a specific position, pump DNA through the binding site with ATP, and shift the position of the histone octamer along the underlying sequence. The differences between the families come from what else the complex does on top of this basic translocation.

**SWI/SNF (BAF)** uses the translocation to dramatically move or evict nucleosomes — pumping enough DNA through fast enough that the entire octamer falls off, or gets pushed far away from its starting position. The complex is designed for big, dramatic movements that fully open up regions of chromatin.

**ISWI** uses the same translocation but in small, careful steps — moving nucleosomes by just a few base pairs at a time, with built-in regulatory mechanisms that stop the movement once the spacing is even. The HAND-SANT-SLIDE domain on the ATPase reads the linker DNA length and shuts off the motor when the linker reaches the target length.

**CHD** uses the translocation to keep up with RNA polymerase II — sliding nucleosomes out of the polymerase's path as it advances, and redepositing them behind. The chromodomains direct the complex to actively transcribed regions where this grooming is needed.

**INO80 and SWR1** use the translocation not to slide nucleosomes but to destabilize them transiently, creating an opening through which an H2A-H2B dimer can be extracted and a different dimer (containing H2A.Z) inserted. The histone variant exchange is essentially a tightly controlled application of the same DNA translocation mechanism.

\[Pause.\]

One more important detail. The ATPase doesn't translocate along bare DNA in some random direction. It is positioned, on the nucleosome, at a specific location relative to the histone octamer — bound to the surface of the histones as well as to the DNA. This positioning is what determines the geometry of the translocation. When the ATPase is properly engaged, it pumps DNA in one direction, sliding the octamer in the other direction. The chemistry of ATP hydrolysis is converted into a mechanical force on the DNA, which is translated into a directional motion of the nucleosome along the genome.

This whole picture — the conserved ATPase, the DNA translocation, the resulting nucleosome movement — was worked out over decades of biochemistry, from the 1990s through the 2010s, by labs including those of Bob Kingston, Craig Peterson, Brad Cairns, Geeta Narlikar, Tim Richmond, and many others. Single-molecule biophysics — using optical tweezers to watch individual chromatin remodelers walking along DNA in real time — confirmed that these enzymes really do pump DNA, base pair by base pair, against measurable forces. The mechanism is now textbook. But for a long time it was very hard to visualize directly, because the enzymes are large and conformationally dynamic, and the older techniques of structural biology couldn't capture them in action. That changed dramatically with cryo-electron microscopy, which is where we go next.

---

## SEGMENT 8 — Cryo-EM and finally seeing the machines

For about three decades, from the 1990s through the late 2010s, we knew a lot about what chromatin remodelers did biochemically, but we couldn't see them clearly. The reason was structural. These complexes are enormous — megadalton scale — and conformationally heterogeneous. They have flexible subunits, multiple states, and they bind to nucleosomes in dynamic ways that defy easy crystallization. X-ray crystallography, the gold standard of structural biology for most of the 20th century, simply could not handle them. You could crystallize individual subunits, or small fragments, or the isolated ATPase domain — but you could not crystallize the whole BAF complex bound to a nucleosome with ATP in its active site. The full machine, in action, was inaccessible.

The breakthrough was **cryo-electron microscopy**, which I covered in detail in a separate lecture. The short version: cryo-EM lets you flash-freeze your sample in a thin layer of vitreous ice, take thousands of electron microscope images of single complexes in random orientations, and computationally reconstruct a high-resolution three-dimensional structure from the ensemble of two-dimensional projections. The "resolution revolution" of the mid-2010s — driven by improvements in direct electron detectors, motion correction algorithms, and software for image processing — pushed cryo-EM from a niche technique to the dominant method in structural biology for large macromolecular machines.

Chromatin remodelers were perfect targets for cryo-EM. Megadalton complexes, conformationally dynamic, ideal for the ensemble-based analysis that cryo-EM excels at. Starting around 2017 and accelerating through the early 2020s, structure after structure of chromatin remodelers bound to nucleosomes appeared in _Nature_, _Cell_, and _Science_. Yeast SWI/SNF in multiple states. Mammalian BAF complexes — including with cancer-associated mutations to see how they disrupt function. The ISWI remodeler ISWI itself, and ISWI complexes like RSC. Multiple CHD family members. INO80 and SWR1 caught in the act of exchanging histones. The structures, finally, gave us a direct view of what these machines look like and how they grip nucleosomes.

\[Pause.\]

What did we see? Several things that confirmed and extended the biochemistry.

**First**, we saw the position of the ATPase on the nucleosome. As predicted, the ATPase binds the nucleosomal DNA at a specific position roughly two helical turns away from the dyad — labeled "superhelix location 2" or SHL2 in the structural literature. This binding position is conserved across all the families. The ATPase grips both strands of the duplex at SHL2 and also makes contacts with the histone octamer surface.

**Second**, we saw how the rest of the complex wraps around the nucleosome. The BAF complex, for example, has a large lobe that extends outward from the ATPase and grips the nucleosome from multiple sides, with subunits like SMARCB1 reaching down to contact the acidic patch on the histone H2A-H2B surface — a crucial recognition site for many chromatin-binding proteins. The complex doesn't just touch the nucleosome at one point; it embraces it.

**Third**, we saw the conformational changes during ATP cycling. Cryo-EM lets you capture the same complex in multiple states, by collecting many images and computationally sorting them. Different ATP states — ADP-bound, ATP-bound, ATP-gamma-S bound, apo — give different conformations of the ATPase, and from this you can reconstruct the cycle of conformational changes that pumps DNA through the active site. The motor mechanism, long inferred from biochemistry, became directly visible.

**Fourth**, in the most striking cases, we saw exactly what a cancer mutation does to the structure. When you have a SMARCA4 mutation that's recurrent in lung cancer, you can put that mutation into a BAF complex, solve the structure by cryo-EM, and see precisely how the mutation disrupts the function — whether it weakens DNA binding, destabilizes a subunit interaction, or breaks the ATP active site. This kind of mechanistic interpretation, mutation by mutation, has guided drug design and has provided rationale for many of the synthetic-lethal therapeutic strategies that we'll discuss in Segment 11.

\[Pause.\]

I want to single out a few standout structural papers, because they're worth knowing about. The Cigler/Pan group, the Cramer group at Max Planck, the Bartholomew lab, the Patel lab, the He lab, and the Tan lab all contributed major cryo-EM structures of various chromatin remodelers from 2018 through 2024. Each structure illuminated something specific — how SMARCB1 sits on the nucleosome, how the actin-related proteins are positioned, how the INO80 complex captures an H2A-H2B dimer for exchange, how RNA polymerase II is positioned relative to a CHD remodeler in the bodies of transcribed genes. The cumulative effect is that, today, you can pull up a cryo-EM structure of essentially any chromatin remodeler family member bound to a nucleosome and look at where the ATPase is, where the accessory subunits sit, and how the whole machine engages its substrate. The structural picture, after decades of biochemistry, finally caught up.

The remaining frontier is dynamics. Cryo-EM gives you static snapshots — many of them, sometimes at different conformational states — but it doesn't directly capture motion. For that, you need single-molecule biophysics (which has been done extensively) or time-resolved cryo-EM (which is emerging). The combination of structural and single-molecule techniques is now giving us a remarkably complete picture of how chromatin remodelers actually work in real time, frame by frame, as they walk along DNA and reshape nucleosomes.

---

## SEGMENT 9 — BAF in cancer — ARID1A, SMARCA4, and the genomic surprise

Now we get to the part of the story that nobody saw coming. Through the 1990s and 2000s, while biochemists and structural biologists were working out how chromatin remodelers function, cancer geneticists were sequencing tumors. The major effort, starting in the mid-2000s and accelerating through the 2010s, was The Cancer Genome Atlas — TCGA — which systematically sequenced the genomes and exomes of tens of thousands of tumors across dozens of cancer types. The goal was to identify the genetic mutations that drive each cancer, so that targeted therapies could be developed.

For most of the classical cancer genes — _TP53_, _KRAS_, _BRCA1_, _EGFR_, _MYC_ — the TCGA results confirmed what was already known. These genes had been identified as cancer drivers through decades of focused research, and they showed up as mutated in the genomic datasets as expected. But TCGA also revealed something that no one had predicted: **chromatin remodeler subunits, particularly subunits of the BAF complex, are among the most frequently mutated genes across all of human cancer.**

The headline statistics are stunning. **Roughly 20 percent of all human cancers carry a mutation in at least one SWI/SNF (BAF) complex subunit.** That fraction makes BAF mutations more common than mutations in many of the classical cancer genes. In some specific cancers, the rate is much higher: ovarian clear-cell carcinoma has _ARID1A_ mutations in over 50 percent of cases. Lung adenocarcinomas with smoking histories have _SMARCA4_ (BRG1) mutations in roughly 10 percent. Gastric cancers, endometrial cancers, hepatocellular carcinomas, and many others show BAF subunit mutations at significant frequencies. Across the cancer landscape, BAF mutations are everywhere.

\[Pause.\]

Let me unpack which subunits matter and what their mutations do.

**ARID1A** — encoding the BAF subunit that contains an AT-rich interaction domain, used for DNA binding within the complex — is the most frequently mutated chromatin remodeler subunit in all of cancer. It's mutated in roughly 8 percent of all cancers across types, with particular concentration in ovarian clear-cell carcinoma (over 50 percent), endometrial cancer (about 30 percent), and gastric cancer (about 15-20 percent). The mutations are almost always loss-of-function — frameshift mutations, nonsense mutations, large deletions — meaning the cancer cells have lost one or both copies of ARID1A. The loss disrupts BAF complex composition and function, leading to widespread changes in chromatin accessibility and gene expression that contribute to tumor formation and progression.

**SMARCA4** — encoding the catalytic ATPase BRG1 — is the second most commonly mutated BAF subunit. It's mutated in about 5-10 percent of non-small-cell lung cancers, particularly in smokers and in certain rare aggressive subtypes called "SMARCA4-deficient thoracic sarcomas" where SMARCA4 loss is essentially defining. These mutations are also loss-of-function — they knock out the catalytic activity of the BAF complex entirely. Without BRG1, the BAF complex either falls apart or becomes catalytically dead, and the cells lose the ability to do BAF-mediated chromatin remodeling at many regulatory regions.

**SMARCB1** — encoding the structural subunit also called BAF47 or SNF5 — is the most dramatic case, and we'll cover it in detail in the next segment because it's worth its own treatment. But briefly: SMARCB1 loss is the defining mutation of malignant rhabdoid tumor, a pediatric cancer where almost every case is driven by loss of just this single subunit.

\[Pause.\]

The conceptual question is: why are chromatin remodeler mutations so common in cancer? The answer, in broad strokes, is that BAF is a master regulator of cell identity and proliferation. When you break BAF, you simultaneously disrupt many regulatory programs — the programs that maintain a cell's differentiated state, the programs that constrain proliferation, the programs that respond to growth-suppressive signals. Loss of BAF function tends to push cells toward a more "undifferentiated" state with reduced regulatory constraints. That undifferentiated, deregulated state is precisely what cancer cells want. So mutations that break BAF give cells a selective advantage during tumor evolution, and they accumulate.

The other thing worth noting is that BAF mutations are largely **loss-of-function**, which means they behave like classic tumor suppressors. You typically need to lose both copies of the gene (or one copy with a dominant-negative mutation in the other) to fully break the complex's function. Many of the cancers driven by BAF mutations also have loss of nearby tumor suppressors, and the combinatorial loss of multiple chromatin regulators can amplify the effect.

The analogy I want you to hold for the BAF cancer story is this. **ARID1A, SMARCA4, SMARCB1 — three of the most-mutated cancer genes are SWI/SNF subunits; nobody expected chromatin remodelers to be cancer drivers, but they're everywhere.** This was one of the big surprises of the genomic era of cancer biology. The classical model of cancer was that it was driven by mutations in oncogenes (like KRAS) and tumor suppressors (like TP53) — genes encoding signaling proteins, cell cycle regulators, and DNA damage response machinery. Nobody, in 2000, would have predicted that chromatin remodelers would turn out to be a cancer gene family on the same scale as the classical pathways. But here we are. The genomic data make it unambiguous. Chromatin remodelers are core cancer drivers, and the BAF complex in particular is one of the most heavily mutated functional units in the entire cancer genome.

The next segment is about a specific, dramatic case — SMARCB1 loss in rhabdoid tumors — and then we'll move into the therapeutic implications, which are where this story gets really interesting for what's happening in 2025 and 2026.

---

\[BREAK\]

\[This is the planned one-hour break. Take ten to fifteen minutes. When you come back, we resume with the SMARCB1 / rhabdoid tumor story, and then we move into the therapeutic landscape — synthetic lethality, PROTAC degraders, BRD9 inhibitors in synovial sarcoma — which is where chromatin remodeler biology is becoming a clinical reality.\]

---

## SEGMENT 10 — SMARCB1 loss in rhabdoid tumors

Welcome back. Let me start the second half with the single most dramatic case in all of chromatin remodeler cancer biology — SMARCB1 loss in pediatric rhabdoid tumors. This is a case that, once you understand it, will give you a deep appreciation for both the power and the precision of how chromatin remodelers function in cells, and how their loss can drive a specific, devastating disease.

**Malignant rhabdoid tumors** are a class of highly aggressive pediatric cancers that arise primarily in young children, usually under two years of age. They occur in several anatomical locations — in the kidney (where they're called malignant rhabdoid tumor of the kidney), in the brain (where they're called atypical teratoid/rhabdoid tumor or AT/RT), and in soft tissues elsewhere in the body. They are rare but devastating; until recently the prognosis was extremely poor, with five-year survival rates well below 50 percent even with aggressive multimodal therapy. The histological appearance is distinctive — large cells with eccentric nuclei and prominent eosinophilic cytoplasm reminiscent of rhabdomyoblasts, which is where the name comes from.

The genetics of rhabdoid tumors turned out, in a landmark series of studies starting in the late 1990s, to be remarkably simple. The work was led by Bernard Weissman, Charles Roberts, and others. They identified that the gene **SMARCB1** — which had also been independently identified as the BAF complex subunit also called SNF5, INI1, or BAF47, depending on the historical naming — was lost in the vast majority of rhabdoid tumors. Loss was typically biallelic: both copies of SMARCB1 were either deleted or mutated. The remaining gene product was either absent or non-functional. And, strikingly, the rest of the genome of these tumors was remarkably quiet. They had very low mutation burdens overall. The SMARCB1 loss was, in many cases, essentially the only major driver mutation.

\[Pause.\]

This was extraordinary. Cancer is almost always a multi-hit disease, requiring the accumulation of mutations in multiple genes over years or decades. The classical model of colorectal cancer, for example, posits a stepwise accumulation of mutations in APC, KRAS, SMAD4, TP53, and others, over many years. Pediatric cancers tend to have fewer mutations than adult cancers because the patients are young and the tumors haven't had time to accumulate many. But rhabdoid tumors are extreme — many of them have, in essence, **one major mutation**: SMARCB1 loss. Everything else about the cancer flows from that single event.

The biological mechanism is now reasonably well understood, thanks to extensive work in mouse models and cellular systems. When SMARCB1 is lost, the BAF complex's composition and activity are dramatically altered. Some BAF complexes can still assemble without SMARCB1, but they have different subunit compositions and different functional specificities. Critically, the BAF complex's ability to activate certain key tumor suppressor genes — including the CDKN2A locus, which encodes the cell cycle inhibitors p16/INK4A and p14/ARF — is impaired. Without proper expression of these tumor suppressors, cell cycle control breaks down, and the cells proliferate inappropriately. Meanwhile, certain developmental and stem-cell-like gene expression programs become inappropriately activated, locking the cells into an undifferentiated, proliferative state. The result is a highly aggressive, undifferentiated tumor.

\[Pause.\]

What makes the SMARCB1 story so important conceptually is that it demonstrates that **a single chromatin remodeler subunit loss is sufficient to drive a specific human cancer.** This was, when it became clear in the early 2000s, a paradigm-shifting observation. The cancer field had to absorb the idea that chromatin remodelers weren't just one cofactor among many — they were core to maintaining the regulatory architecture that prevents cells from becoming cancerous. Lose the right chromatin remodeler subunit, and the regulatory architecture collapses, and cancer follows.

The therapeutic implications of the SMARCB1 story have been substantial. Once you know that a tumor is defined by loss of a specific BAF subunit, you can start asking: what does that loss make the tumor vulnerable to? Are there dependencies created by the loss that can be exploited therapeutically? This question has driven a lot of the synthetic-lethality work we'll discuss in the next segment, and it has led to specific clinical trials targeting BAF-mutant cancers. Some of these — particularly EZH2 inhibitors, which exploit a synthetic-lethal interaction between SMARCB1 loss and EZH2 dependency — have shown clinical activity in rhabdoid tumors and related malignancies. We'll come back to this in the therapeutics discussion.

For now, just hold onto this image. A small child, two years old, with a rapidly growing tumor. The tumor's genome is sequenced. One major mutation: both copies of SMARCB1, gone. From a single chromatin remodeler subunit loss, an entire devastating disease emerges. That's the cancer genetics of chromatin remodelers, in its purest form. And it's why understanding these complexes is not just an academic curiosity — it's directly relevant to the lives of patients.

---

## SEGMENT 11 — Synthetic lethality and BRG1/BRM paralog dependency

The discovery that BAF mutations are common cancer drivers raised an obvious therapeutic question. Can we target BAF-mutant cancers selectively? The challenge is that most BAF mutations are loss-of-function. You can't easily drug something that's already broken — you can't restore the function of an absent or mutated protein with a small molecule, not in any straightforward way. The classical pharmacological approach of inhibiting an oncogene doesn't apply when the cancer is driven by loss of a tumor suppressor.

The way around this problem is a concept called **synthetic lethality**. The idea, originally developed in yeast genetics in the 1940s and 1950s and adapted to cancer therapy in the 2000s, is this. Sometimes two genes have redundant or compensating functions. Loss of either one alone is tolerated — the other one provides the necessary function. But loss of both is lethal. If you have a cancer cell that has already lost one of the pair (through a cancer mutation), and you find a drug that inhibits the other one, you will selectively kill the cancer cell while leaving normal cells (which still have both genes) unharmed. The cancer mutation creates a vulnerability; the drug exploits it. The two interventions together are lethal in a way that neither one alone would be.

The classical proof-of-concept for synthetic lethality in cancer therapy is the PARP inhibitor story. BRCA1- or BRCA2-mutant tumors (which have defective homologous recombination repair) are selectively killed by PARP inhibitors (which block an alternative repair pathway). Normal cells, with intact BRCA function, tolerate PARP inhibition fine. The cancer cells, with their pre-existing BRCA defect, are killed. This is now a billion-dollar therapeutic class. The synthetic-lethality strategy works.

\[Pause.\]

The question for chromatin remodelers was: can we find synthetic-lethal partners for BAF subunit losses? And the answer turns out to be yes, in multiple cases. Let me give you the most important one — the BRG1/BRM paralog dependency.

Recall that the BAF complex has two paralogous catalytic ATPases: **BRG1** (encoded by SMARCA4) and **BRM** (encoded by SMARCA2). Most cells express both, and they are largely interchangeable in terms of catalytic function — either one can serve as the BAF ATPase, depending on context. In normal cells, you can lose either BRG1 or BRM, and the cell continues to function because the other paralog provides the necessary BAF ATPase activity.

But in cancer, things get interesting. Many cancers — particularly certain lung cancers — have lost BRG1 through inactivating mutations or deletions of SMARCA4. The remaining BAF complexes in these cancer cells are running entirely on BRM as their ATPase. If you now inhibit BRM, the cells lose all BAF ATPase activity, and they die. Normal cells, which still have functional BRG1, tolerate BRM inhibition fine because BRG1 compensates. The synthetic-lethal pair is: **lose BRG1, become dependent on BRM, and a BRM inhibitor selectively kills your BRG1-mutant tumor.**

The reverse also works. Some cancers — though less common — have lost BRM. These cells become entirely dependent on BRG1, and a BRG1 inhibitor would selectively kill them. The principle is symmetric.

\[Pause.\]

The analogy I want you to hold for the synthetic lethality story is this. **Lose BRG1, become dependent on BRM (and vice versa); if you can drug the surviving partner, you have a tumor-selective therapy.** It's like an airplane with two engines. Normally both work. If one fails, the airplane keeps flying on the other engine alone — but now it has zero redundancy. If you also disable the second engine, the plane crashes. Normal cells have both engines functioning; if you disable one, they still fly fine. Cancer cells, which already lost one engine, crash when you disable the second. The cancer mutation made the cell vulnerable; the drug pulls the trigger.

This insight has driven an enormous amount of drug development effort over the last decade. Several companies and academic groups have been racing to develop selective BRM inhibitors that can kill SMARCA4-mutant lung cancers without affecting normal cells. The challenge is that BRG1 and BRM are extremely similar in their ATPase domains — they're paralogs, after all — so making a drug that hits one but not the other is hard. Early efforts produced dual BRG1/BRM inhibitors that were too toxic for clinical use because they killed both normal and cancer cells indiscriminately. More recent efforts have focused on selective BRM inhibitors, leveraging subtle differences between the two paralogs to achieve selectivity.

As of 2025, several selective BRM (SMARCA2) inhibitors and degraders are in clinical trials, including FHD-909 from Foghorn Therapeutics and other candidates from Prelude Therapeutics, AbbVie/Roche, and others. The clinical readouts for these drugs in SMARCA4-mutant lung cancers are being closely watched, because if the synthetic-lethal hypothesis holds, this could become a new therapeutic class for one of the major lung cancer subtypes. The data is early but encouraging in some studies.

The broader principle here — exploiting paralog dependencies created by cancer mutations — is now a major theme in modern oncology drug development. Many cancers have lost one member of a paralog pair, and the surviving paralog is a synthetic-lethal target. Chromatin remodeler paralogs (BRG1/BRM, ARID1A/ARID1B, others) are particularly fertile territory for this approach because so many cancers carry chromatin remodeler subunit losses to begin with. The genomic data identified the vulnerabilities; now the chemistry is catching up.

---

## SEGMENT 12 — PROTAC degraders and the new pharmacology

The traditional way to inhibit a protein with a small molecule is to make a molecule that binds to the protein and blocks its function — sitting in its active site, blocking substrate binding, or causing a conformational change that prevents activity. This is how most drugs work. Aspirin inhibits cyclooxygenase by binding to its active site. Statins inhibit HMG-CoA reductase the same way. Imatinib inhibits BCR-ABL kinase by binding to its ATP-binding pocket. The drug is an inhibitor, and as long as it's bound to the target, the target can't function.

But there's a newer approach, called **targeted protein degradation** or PROTAC technology, that takes a different approach. Instead of just inhibiting the target, PROTAC drugs cause the target to be physically destroyed by the cell's own protein degradation machinery. The acronym PROTAC stands for **PRO**teolysis **TA**rgeting **C**himera. The molecule is bifunctional: one end binds to the target protein, and the other end binds to a component of the cellular ubiquitin-proteasome system — specifically, to an E3 ubiquitin ligase. By bringing the target and the E3 ligase together, the PROTAC causes the E3 ligase to ubiquitinate the target, marking it for destruction by the proteasome. The target gets chewed up. The cell now has less of it, or none of it.

The advantages of degradation over inhibition can be substantial. First, you only need transient binding — once the target is ubiquitinated, the PROTAC dissociates and can go bind another molecule of target. So the drug is catalytic, not stoichiometric. Second, you eliminate all of the target's functions, not just its catalytic activity. Many proteins have scaffolding or structural roles in addition to their enzymatic activity, and a classical inhibitor can leave those scaffolding functions intact while only blocking the enzyme — sometimes the scaffolding function is what's actually disease-relevant. A degrader gets rid of everything. Third, degradation can overcome certain resistance mechanisms that defeat inhibitors — like point mutations in the active site that block drug binding but don't affect overall protein function.

\[Pause.\]

PROTAC technology has been around since the early 2000s, when Craig Crews at Yale and others demonstrated the concept, but it has exploded in the last five years as the chemistry has matured. There are now multiple PROTAC degraders in clinical trials across many target classes. And chromatin remodelers are one of the most active target areas for this technology, because they're large, multi-domain proteins where the scaffolding function is often as important as the catalytic function, and where degradation cleanly eliminates both.

**Foghorn Therapeutics** is the most prominent company focused on chromatin remodeler degraders, founded specifically to apply targeted protein degradation to the BAF complex and related machinery. Their lead compound, FHD-909 (also known as LY4050784 in partnership with Eli Lilly), is a selective SMARCA2 (BRM) degrader designed to kill SMARCA4-mutant lung cancers by exploiting the synthetic-lethal paralog dependency we discussed in the previous segment. The drug is in Phase 1 clinical trials as of 2025. Other companies — Prelude Therapeutics, C4 Therapeutics, Arvinas, and several large pharma efforts — are pursuing similar strategies against various chromatin remodeler targets.

The analogy I want you to hold for PROTAC degraders is this. **PROTAC degraders are small molecules that recruit E3 ligases to chromatin remodeler subunits; instead of inhibiting, they degrade — a hot direction in 2025-2026 oncology.** A classical inhibitor is like a wrench you stick into a machine to jam its gears. A PROTAC degrader is like a tow truck that hauls the whole machine to the scrap yard. The machine is gone. Whatever the machine was doing — both its primary function and its secondary functions — is gone. The cell now has to live without it.

\[Pause.\]

The therapeutic implications are still unfolding. The synthetic-lethal targets like SMARCA2/SMARCA4 are the obvious places to start, because the patient selection is clear: any tumor with a SMARCA4 mutation is a candidate for SMARCA2 degrader therapy. But PROTAC technology is being applied more broadly across the chromatin remodeler family — to BRD9 (which we'll discuss in Segment 14), to other BAF subunits, to specific isoforms of ATPases. The field is moving fast.

There's also a broader scientific point worth making. Chromatin remodelers were considered "undruggable" for a long time, because they're large complexes without obvious druggable pockets, and because many of their cancer-relevant mutations are loss-of-function rather than gain-of-function. The combination of synthetic-lethality logic (creating new vulnerabilities through paralog dependency) and PROTAC technology (degrading instead of inhibiting) has opened up an entire class of therapeutic targets that were inaccessible just a decade ago. This is one of the most important shifts in oncology drug development in recent years, and chromatin remodelers are at the center of it.

The remaining segments of this lecture will broaden the discussion further — looking at the variants of BAF (cBAF, pBAF, GBAF), the specific case of BRD9 in synovial sarcoma, the developmental roles of remodelers including the CHD8/autism connection from the other direction, the use of dCas9 fusions to programmably manipulate chromatin, the layered control system that integrates remodelers with histone modifications, and the frontier of where the field is headed in 2025 and beyond.

---

## SEGMENT 13 — cBAF, pBAF, and GBAF — the three flavors of BAF

I want to spend a segment on something that's actually quite important but tends to get glossed over in introductory treatments. When we talk about "the BAF complex," we're actually talking about a family of three closely related complexes that share a common core of subunits but differ in their specific compositions and functions. The three are called **cBAF** (canonical BAF), **pBAF** (polybromo BAF), and **GBAF** (also called ncBAF, for non-canonical BAF). All three are in the BAF family. All three are built around either BRG1 or BRM as the catalytic ATPase. But each has distinct accessory subunits that give it distinct functional roles.

The discovery that BAF comes in multiple flavors took a while to crystallize. Through the 1990s and 2000s, biochemists who purified BAF from mammalian cells noticed that different purifications sometimes had different subunit compositions, and there was some confusion about whether this reflected real biological variation or just preparation differences. Over time, primarily through work by Cigall Kadoch's lab at Dana-Farber, Brad Bernstein, Gerald Crabtree, and others, it became clear that mammalian cells produce three distinct BAF complexes with three distinct compositions, three distinct genomic recruitment patterns, and three distinct functional roles.

\[Pause.\]

**cBAF** — canonical BAF — is the most abundant variant in most cell types. It contains the catalytic ATPase (BRG1 or BRM), the ARID-domain subunit (ARID1A or ARID1B), SMARCB1, the actin-related proteins, and a set of shared core subunits. cBAF is recruited primarily to enhancers throughout the genome, where it works with transcription factors to open up enhancer chromatin and drive cell-type-specific gene expression. Most of the cancer mutations in BAF — the ARID1A and SMARCA4 mutations we discussed earlier — primarily affect cBAF.

**pBAF** — polybromo BAF — is built around different ARID-domain subunits (ARID2 instead of ARID1A/ARID1B) and contains the distinctive subunit **PBRM1**, which gives it its name (polybromo because PBRM1 has multiple bromodomains). pBAF is recruited preferentially to active promoters and to a subset of enhancers, with somewhat distinct functional roles compared to cBAF. PBRM1 mutations are themselves cancer drivers — PBRM1 is the second-most-commonly mutated gene in clear cell renal cell carcinoma, after VHL. So pBAF has its own cancer biology, distinct from cBAF.

**GBAF** — also called ncBAF or non-canonical BAF — is the most divergent variant. It contains a unique set of subunits including **BRD9** (a bromodomain-containing protein) and **GLTSCR1** (or its paralog GLTSCR1L). GBAF lacks SMARCB1 and lacks the ARID-domain subunits. It's recruited to a distinct set of genomic locations, particularly to CTCF binding sites and to certain promoters, with functional roles in maintaining chromatin organization at these specific elements. GBAF is the BAF variant that matters most for the BRD9 inhibitor story we'll discuss in the next segment.

\[Pause.\]

The three-flavor structure of BAF has significant implications for both basic biology and therapeutics. Different cell types express the three variants in different proportions. Different developmental stages emphasize different variants. Cancer mutations affect different variants differently — ARID1A loss disrupts cBAF specifically, while PBRM1 loss disrupts pBAF specifically. Drug targets like BRD9 are specific to GBAF, allowing for targeted therapies that affect one variant without disrupting the others.

When you read a paper or news story about "the BAF complex," it's worth asking which variant the work is referring to. Often the assays don't distinguish cleanly. But the more recent literature, particularly post-2018 when the three-variant structure became firmly established, has been increasingly precise about which complex is being studied and which variants are being affected by which perturbations. This matters because the three variants have non-overlapping functional roles, and treating them as a single entity can obscure important biology.

For the rest of this lecture, when I say "BAF" without qualification, I usually mean cBAF, because it's the most abundant and most studied. But keep in the back of your mind that the BAF family has three branches, and the therapeutic and biological landscape depends on knowing which branch you're working with.

---

## SEGMENT 14 — BRD9 inhibitors and synovial sarcoma

The BRD9 story is one of the cleanest examples of how chromatin remodeler biology has been translated into a specific oncology drug program, and it's worth a whole segment because it shows how the abstract framework — synthetic lethality, paralog dependency, variant-specific drug design — actually plays out in a real disease.

**Synovial sarcoma** is a relatively rare soft tissue sarcoma that primarily affects young adults, often in their teens and twenties. The defining genetic feature of synovial sarcoma — present in essentially every case — is a specific chromosomal translocation that fuses the gene **SS18** (also called SYT) to one of three SSX genes (SSX1, SSX2, or SSX4), creating an aberrant **SS18-SSX fusion protein**. This fusion protein, it turns out, drives the disease by hijacking the BAF complex.

The mechanism is striking. SS18 is normally a component of the cBAF complex — it sits inside the core architecture as one of the standard subunits. When the SS18-SSX fusion is produced from the translocated chromosome, the fusion protein gets incorporated into BAF complexes in place of (or alongside) normal SS18. But the SSX portion of the fusion protein has its own properties — it binds to specific chromatin states, particularly to regions marked with the repressive histone modification H2AK119ub, where it recruits the modified BAF complex inappropriately. The result is that BAF gets redistributed across the genome, activating gene expression programs that should not be active, including developmental programs that drive the sarcoma phenotype.

\[Pause.\]

So far this is a story about how a chromosomal translocation creates an aberrant BAF complex. Where does BRD9 come in? The answer is a beautiful piece of biology that was worked out primarily by Cigall Kadoch's lab. When the SS18-SSX fusion is incorporated into BAF complexes, it disrupts the normal cBAF complex but it doesn't disrupt GBAF complexes (which contain BRD9). In fact, the synovial sarcoma cells become highly dependent on GBAF — and specifically on BRD9 within GBAF — for their continued survival and proliferation. The aberrant cBAF complex is driving the cancer, but the GBAF complex is required to maintain the cancer state. If you knock out BRD9 or degrade BRD9, the synovial sarcoma cells die, while normal cells (which don't have the same dependency) survive.

This is synthetic lethality, but in a particularly elegant form. The cancer mutation (the SS18-SSX fusion) doesn't directly affect BRD9 — it affects cBAF. But it creates a state in which the cell becomes uniquely dependent on a different BAF variant (GBAF, containing BRD9). So a BRD9 inhibitor or degrader becomes selectively toxic to synovial sarcoma cells. This is the rationale for the BRD9 inhibitor program.

The first BRD9 inhibitors were small-molecule binders that targeted the bromodomain of BRD9, blocking its ability to recognize acetylated histones. These showed activity in synovial sarcoma cell lines but were limited in efficacy. More recently, **BRD9 degraders** — PROTAC molecules that target BRD9 for proteasomal destruction — have shown more dramatic activity. The lead clinical candidates include **FHD-609** (also from Foghorn Therapeutics) and several others. These compounds are in clinical trials in synovial sarcoma patients as of 2025, and the early data has been encouraging.

\[Pause.\]

What makes the BRD9 story important conceptually is that it's the **first BAF complex-targeted oncology drug program to advance into clinical trials.** It represents the practical realization of an entire framework — that chromatin remodelers are cancer drivers, that synthetic-lethal vulnerabilities can be exploited, that targeted protein degradation provides new pharmacological options, and that variant-specific drug design (targeting GBAF without affecting cBAF or pBAF) is achievable. If BRD9 degraders show robust clinical activity in synovial sarcoma, they will be the first SWI/SNF-targeted approved cancer drugs, opening up a path for many more such therapies.

Beyond synovial sarcoma, BRD9 is being investigated as a target in other cancers that might have similar dependencies, particularly other sarcomas with chromosomal translocations affecting BAF complex composition. The principle of variant-specific targeting — exploiting the fact that BAF comes in three flavors and that different cancers depend on different flavors — is now a general framework that the field is applying broadly.

The synovial sarcoma / BRD9 story also illustrates how chromatin remodeler biology connects directly to clinical practice. A young patient with synovial sarcoma walks into a clinic. Their tumor has the SS18-SSX fusion (essentially every synovial sarcoma does). That fusion creates a known dependency on BRD9. A BRD9 degrader is available (or in trial). The patient gets a therapy that is rationally designed to exploit their specific cancer's vulnerability. From discovery (SS18-SSX fusion identified in the 1990s, BRD9 dependency identified in the 2010s) to clinical application (BRD9 degraders in trials in 2024-2025), the timeline is about thirty years — fast by oncology drug development standards.

---

## SEGMENT 15 — Chromatin remodelers in development — BAF in heart, CHD8 in brain

Chromatin remodelers are not just cancer genes. They are essential developmental regulators, and their roles in development are at least as important biologically as their roles in cancer. I want to use this segment to highlight two cases — BAF in heart development, and CHD8 in brain development — because they illustrate the diverse ways that chromatin remodeler activity shapes the formation of complex organs.

**Heart development requires BAF.** The mammalian heart is one of the most complex organs to form during embryogenesis, requiring the precisely coordinated specification of multiple cardiac cell types — atrial cardiomyocytes, ventricular cardiomyocytes, conduction system cells, valve cells, and others — along with the structural assembly of a four-chambered organ that begins beating before the embryo is even fully formed. The transcriptional programs that drive cardiac development have been worked out in great detail over the last few decades, and they include master regulators like GATA4, MEF2C, NKX2-5, and TBX5. These transcription factors specify cardiac fate and drive cardiac gene expression.

But these transcription factors don't work alone. They depend on chromatin remodelers to open up the cardiac gene regulatory regions so that the transcription factors can bind. The BAF complex, in cardiac progenitor cells, contains a specific subunit composition — what's called **cardiac BAF** or cBAF (in the developmental sense, distinct from the canonical BAF abbreviation) — that includes a cardiac-specific subunit called BAF60c (encoded by SMARCD3). This cardiac BAF variant is recruited by cardiac transcription factors and opens up cardiac enhancers. Without it, the cardiac developmental program cannot execute properly, and the heart fails to form correctly.

Mutations in BAF subunits in humans can cause **Coffin-Siris syndrome**, a developmental disorder characterized by intellectual disability, distinctive facial features, and frequently congenital heart defects. The causative mutations affect various BAF subunits including ARID1A, ARID1B, SMARCA4, SMARCB1, and others. The phenotype directly reflects the developmental role of BAF — disrupted BAF function in the developing embryo leads to widespread regulatory failures across multiple organs, with the heart, brain, and craniofacial structures being particularly affected.

\[Pause.\]

**Brain development requires CHD8.** As I mentioned briefly in Segment 5, CHD8 is one of the strongest genetic risk factors for autism spectrum disorder. Loss-of-function mutations in CHD8 — usually de novo, meaning they arose in the affected individual rather than being inherited — are among the highest-confidence autism risk variants known. The phenotype in patients with CHD8 mutations typically includes autism, macrocephaly (enlarged head circumference), gastrointestinal problems, and other neurodevelopmental features.

The mechanism, as far as the field currently understands it, involves CHD8's role in regulating gene expression programs during neurodevelopment. CHD8 is highly expressed in neural progenitor cells during embryonic and early postnatal brain development, where it regulates the balance between proliferation and differentiation. Mouse models with reduced CHD8 expression show altered brain growth, altered cortical organization, and behavioral phenotypes reminiscent of autism. The molecular targets of CHD8 include many genes involved in neuronal differentiation, synaptic function, and cellular metabolism — exactly the gene categories that are dysregulated in autism.

This is one of the cleanest examples in modern neuroscience of how a chromatin regulator mutation in a single gene can produce a complex developmental phenotype. The cellular mechanism, the developmental timing, and the molecular targets are all being worked out. Therapeutic options remain elusive — we don't yet have ways to restore CHD8 function in patients — but the biological understanding is advancing rapidly, and the genetic identification of CHD8 as a major autism risk gene has opened up new research directions for understanding the neurobiology of autism more broadly.

\[Pause.\]

The general principle here is that chromatin remodelers, by virtue of their role in regulating thousands of genes simultaneously, are particularly important during development — when cells are being specified, when fates are being decided, when complex organs are being assembled. Mutations in chromatin remodelers tend to produce developmental disorders with broad, multi-system phenotypes, because the affected regulatory programs span many cell types and many functions. This is the developmental side of the chromatin remodeler story, complementing the cancer side. Both reflect the same underlying biology: these complexes are required for the proper regulatory architecture of cells, and breaking them has consequences.

There's also a deep evolutionary point worth making. The same chromatin remodeler families that build complex mammalian brains and hearts are present, in recognizable form, in yeast — where they regulate sugar metabolism and mating-type switching. The fundamental machines are ancient. What changed across evolution is the regulatory wiring — the transcription factors that recruit the remodelers, the histone modifications that direct them, the cell-type-specific subunits that tune them. The basic logic — ATP-driven nucleosome remodeling in response to recruitment signals — was solved early in eukaryotic evolution, and the same machinery has been redeployed and elaborated ever since to enable the regulatory complexity of plants, animals, and fungi.

---

## SEGMENT 16 — Programmable chromatin manipulation with dCas9 fusions

I want to spend a segment on a relatively recent development that has transformed how researchers can experimentally manipulate chromatin — the use of fusions between catalytically dead Cas9 (dCas9) and chromatin-modifying domains, including chromatin remodelers. This technology is changing how we test causal hypotheses about chromatin regulation, and it's opening up potential therapeutic applications that could complement small molecule and degrader approaches.

The starting point is **dCas9** — a version of the CRISPR-Cas9 protein in which the catalytic activity has been inactivated by mutations in the nuclease domains, but the DNA-binding activity (directed by a guide RNA) is retained. dCas9 can be targeted to any genomic location specified by a guide RNA, where it binds the DNA but does not cut it. By itself, dCas9 binding can have some effect on transcription (blocking polymerase, for example), but the real power comes when you fuse dCas9 to an effector domain — a domain that does something to the chromatin once dCas9 has anchored it to a specific location.

The earliest dCas9 fusions, going back to the mid-2010s, attached transcriptional activators (like VP64) or repressors (like KRAB) to dCas9, creating systems called CRISPRa (CRISPR activation) and CRISPRi (CRISPR interference). These allowed researchers to turn specific genes up or down by targeting dCas9 to their promoters with appropriate guide RNAs. They were transformative for functional genomics, and they remain widely used.

\[Pause.\]

The next generation of dCas9 fusions attached chromatin-modifying enzymes — methyltransferases, demethylases, acetyltransferases, deacetylases — allowing programmable manipulation of histone modifications and DNA methylation at specific genomic locations. You could target dCas9-DNMT3A (a DNA methyltransferase) to a specific promoter and methylate the DNA there, silencing the gene. You could target dCas9-p300 (a histone acetyltransferase) to a specific enhancer and acetylate the local histones, activating the enhancer. These tools made it possible to test, for the first time, whether specific chromatin modifications at specific locations are sufficient to drive specific gene expression changes — a question that had been difficult to address with traditional methods.

The most recent extensions of this approach attach chromatin remodeling activities to dCas9. Several groups have engineered dCas9 fusions with ISWI or SWI/SNF catalytic domains, allowing programmable nucleosome remodeling at specified genomic locations. The goal is to be able to say: "I want to open up the chromatin at this specific enhancer, regardless of whether it would normally be open in this cell type, and see what happens to the downstream gene expression." Or conversely, "I want to evict the nucleosome at this specific promoter and see whether that's sufficient to activate transcription."

These are experimental tools, primarily — they're used to dissect causal relationships between chromatin states and gene expression. But they also have therapeutic potential. Imagine being able to permanently silence a disease-causing gene by targeting dCas9-DNMT3A to its promoter and methylating it, or being able to reactivate a tumor suppressor by targeting dCas9-p300 to its enhancers. There are real efforts to develop these as therapies — most notably for diseases where the underlying defect is a gene that's been epigenetically silenced and needs to be reactivated.

\[Pause.\]

The most clinically advanced of these is the use of dCas9-based "epigenome editing" for diseases like sickle cell disease, where reactivating the silenced fetal hemoglobin gene (HBG) can compensate for defective adult hemoglobin. Multiple companies and academic groups are pursuing this strategy. The dCas9 fusion gets delivered to hematopoietic stem cells (using lentiviral vectors or other delivery methods), targets the HBG promoter, modifies the local chromatin to derepress HBG expression, and the resulting cells produce fetal hemoglobin that ameliorates the sickle cell phenotype.

For chromatin remodeler fusions specifically, the therapeutic applications are still in early stages, but the basic technology is being actively developed. The big challenge is delivery — getting the dCas9-remodeler fusion into the right cells, in sufficient quantity, with appropriate guide RNAs, and having it function correctly without off-target effects. The chromatin remodeling enzymes are large, the dCas9 is large, and the combined fusion is hard to package and deliver. But the conceptual framework is in place, and the field is converging on solutions.

The point I want to make is that dCas9-remodeler fusions represent a third pillar of how we manipulate chromatin remodelers therapeutically. The first pillar is small molecule inhibitors and degraders, which we've discussed. The second pillar is variant-specific targeting (like BRD9 in synovial sarcoma) that exploits cancer-specific dependencies. The third pillar is programmable epigenome editing, which uses synthetic biology to redirect chromatin remodeling activity to specific locations in specific cells. Each pillar has its strengths and limitations, and the future of chromatin therapeutics will probably involve combinations of all three.

---

## SEGMENT 17 — Layered control — remodelers in the context of histone modifications

I want to take a step back and put chromatin remodelers in their broader context, because they're one component of a larger system, and understanding how the components fit together is essential for thinking about chromatin biology as a whole.

The basic picture is that chromatin is regulated by multiple overlapping layers of control. Each layer has its own machinery, its own logic, and its own way of marking or modifying chromatin to influence its function. The layers interact constantly, with each layer providing information that the others read and respond to. The result is a richly integrated system, far more sophisticated than any single layer could provide on its own.

Let me name the major layers.

**Layer one: histone modifications.** The N-terminal tails of histones, sticking out from the nucleosome surface, get chemically modified by various enzymes — methylated, acetylated, phosphorylated, ubiquitinated, and others. These modifications are deposited by **writer** enzymes (like methyltransferases and acetyltransferases), removed by **eraser** enzymes (like demethylases and deacetylases), and recognized by **reader** proteins that bind to specific modifications via specialized domains (chromodomains, bromodomains, PHD fingers, and others). The combinatorial pattern of histone modifications — the so-called "histone code" — encodes information about the regulatory state of each region of the genome.

**Layer two: DNA methylation.** The cytosine bases of DNA, particularly at CpG dinucleotides, can be methylated by DNA methyltransferases (DNMT1, DNMT3A, DNMT3B) and demethylated by TET enzymes through an oxidative pathway. DNA methylation is generally repressive, associated with silenced genes and inactive regulatory regions, though the picture is more nuanced in detail.

**Layer three: histone variants.** As we discussed in Segment 6, the histone proteins come in canonical forms (H2A, H2B, H3, H4) and variant forms (H2A.Z, H2A.X, H3.3, macroH2A, and others). The variants have distinct properties and are deposited at distinct locations by specialized chaperone complexes.

**Layer four: chromatin remodelers.** The ATP-dependent enzymes — SWI/SNF, ISWI, CHD, INO80 — that physically move nucleosomes, eject them, or swap their histones.

**Layer five: three-dimensional organization.** The folding of chromatin into loops, topologically associating domains, and higher-order compartments, mediated by architectural proteins like CTCF and cohesin.

\[Pause.\]

These layers interact in deeply integrated ways. Chromatin remodelers are recruited to specific locations partly through recognition of histone modifications — for example, CHD1's chromodomains read H3K4me3, recruiting it to active promoters; ISWI's HAND-SANT-SLIDE reads unmodified H4 tails, recruiting it to silent chromatin. Once remodelers act, they can change the accessibility of regions, which in turn determines which transcription factors can bind, which in turn determines which writer enzymes get recruited to modify the local histones, which in turn affects which remodelers get recruited next. It's a continuous feedback system, with information flowing between the layers.

The analogy I want you to hold is this. **Readers, writers, erasers, and remodelers form a layered control system. Writers add marks. Erasers remove them. Readers recognize them. Remodelers respond to them and reshape the chromatin in response.** It's like a city's traffic system. Writers are the painters who put stripes on the road. Erasers are the cleaning crews who wash off old stripes. Readers are the drivers who follow the stripes. Remodelers are the construction crews who rebuild the roads in response to changing patterns of use. All four work together. None of them alone would produce a functional city. The system depends on the constant interaction of all the layers.

\[Pause.\]

There's a specific point worth making about the relationship between histone modifications and chromatin remodelers in cancer. Many chromatin remodeler mutations in cancer (like SMARCB1 loss in rhabdoid tumors) create dependencies on specific histone-modifying enzymes (like EZH2). The mechanism is that the remodeler loss disrupts the normal balance between activating and repressing chromatin states, leading to overactivity of certain repressive systems that the cancer cells then become dependent on. Targeting the dependent enzyme (EZH2, in this example) can selectively kill the cancer cells while sparing normal cells.

The EZH2 inhibitor story is worth a moment. EZH2 is the catalytic subunit of Polycomb Repressive Complex 2 (PRC2), which deposits the repressive histone modification H3K27me3. In SMARCB1-deficient rhabdoid tumors, PRC2 activity becomes dysregulated and certain tumor suppressor genes get inappropriately silenced by H3K27me3. EZH2 inhibitors — including tazemetostat, which is FDA-approved for certain rhabdoid tumors and follicular lymphomas — block EZH2 activity, removing the inappropriate repression and restoring tumor suppressor expression. This is a synthetic-lethal relationship between two layers of chromatin control: the remodeler layer (SMARCB1/BAF) and the histone modification layer (EZH2/PRC2). The integration of layers, exploited therapeutically.

The lesson is that you can't really understand chromatin regulation, or chromatin therapeutics, without thinking about all the layers together. Chromatin remodelers don't operate in isolation. They're embedded in a network of interactions with histone modifiers, DNA methylators, variant chaperones, and architectural proteins. The clinical successes (and failures) in targeting chromatin in cancer have largely come from understanding these interactions and finding combinations that exploit them.

---

## SEGMENT 18 — The frontier — clinical trials, AI, and the chromatin therapeutic pipeline

Let me close with a segment on where the field is right now, in 2025 and 2026, and where it's headed. The chromatin remodeler story has gone from basic discovery (1984 yeast genetics) to mechanistic understanding (1990s-2000s biochemistry) to clinical translation (2020s and ongoing). The pace of progress in the clinical translation phase has been rapid, and there are several specific developments worth knowing about.

**SWI/SNF degraders in clinical trials.** As of 2025, multiple PROTAC degraders targeting BAF complex subunits are in Phase 1 and early Phase 2 clinical trials. The lead programs include SMARCA2 (BRM) degraders for SMARCA4-mutant cancers (FHD-909 from Foghorn/Lilly, PRT3789 from Prelude Therapeutics, and others), BRD9 degraders for synovial sarcoma (FHD-609 and others), and SMARCA4 degraders for various cancers where direct BAF disruption might be therapeutic. The early clinical data is being closely watched. Some of these programs have shown encouraging signs of activity in patient subsets defined by their genetic backgrounds. The first FDA approvals of BAF-targeting degraders are anticipated within the next several years, which would establish an entirely new therapeutic class in oncology.

**EZH2 inhibitors and combination strategies.** Tazemetostat, the FDA-approved EZH2 inhibitor, has shown activity in INI1/SMARCB1-deficient cancers and in EZH2-mutant lymphomas. Newer EZH2 inhibitors with improved pharmacology are in development. Combination strategies — pairing EZH2 inhibitors with BAF-targeting drugs, with checkpoint inhibitors, with other chromatin modulators — are being explored across many cancer types.

**Broader chromatin therapeutic pipeline.** Beyond the SWI/SNF-focused programs, there are active drug development efforts targeting many other chromatin regulators: HDAC inhibitors (long established, with multiple approvals), BET bromodomain inhibitors (mixed clinical results but ongoing), DOT1L inhibitors (for MLL-rearranged leukemias), LSD1 inhibitors, KAT6A/B inhibitors, menin-MLL inhibitors (with recent approval for NPM1-mutated AML), and many others. The chromatin therapeutic landscape, which barely existed in 2010, now includes dozens of programs targeting many different chromatin regulators across many cancer types.

\[Pause.\]

**AI-driven structure prediction.** The success of AlphaFold and related structure prediction tools has had a major impact on chromatin remodeler biology. These complexes are large and conformationally complex, and traditional structural biology (even cryo-EM) is slow and expensive. AlphaFold and related tools can now predict the structures of individual subunits, of subunit complexes, and increasingly of large assemblies with reasonable accuracy. This is accelerating drug discovery — you can computationally identify potential binding pockets, model the effects of cancer mutations, and screen virtual compound libraries against predicted structures. The combination of cryo-EM (for high-confidence experimental structures) and AlphaFold (for rapid prediction across many variants and complexes) is dramatically expanding what's tractable structurally.

**Single-cell and spatial chromatin profiling.** Single-cell ATAC-seq, single-cell ChIP-seq variants, and spatial chromatin profiling methods are now letting researchers map chromatin states in individual cells within heterogeneous tissues, including tumors. This is revealing that chromatin remodeler activity is highly heterogeneous within tumors — some cancer cells have one BAF complex composition, others have another, and the heterogeneity contributes to treatment resistance. Understanding this heterogeneity, and developing therapeutic strategies that address it, is an active frontier.

**Time-resolved and dynamic measurements.** Beyond static snapshots of chromatin states, the field is developing methods to measure chromatin dynamics in real time — how quickly nucleosomes move, how often remodelers cycle on and off chromatin, how rapidly the chromatin landscape reconfigures in response to signals. Single-molecule imaging in live cells, MINFLUX microscopy, and other emerging techniques are pushing these measurements to higher and higher resolution. The static cryo-EM structures from the 2010s are being complemented by dynamic measurements that show the same machines in motion.

\[Pause.\]

**The integration with broader medicine.** Chromatin remodelers are increasingly recognized as relevant beyond cancer. The CHD8/autism connection is one example. Coffin-Siris syndrome and related developmental disorders driven by BAF mutations are another. There are emerging connections between chromatin remodeler dysregulation and aging, neurodegenerative disease, autoimmune disease, and cardiovascular disease. The therapeutic strategies developed for cancer applications may eventually translate to other diseases.

The big picture, looking forward, is that chromatin remodelers have moved from an obscure corner of basic biology in the 1990s, to a central focus of cancer genomics in the 2010s, to a major area of clinical drug development in the 2020s and beyond. The combination of accumulated biological understanding, new structural biology methods, new pharmacological approaches (especially PROTAC degraders), and the genomic identification of cancer dependencies has created a fertile field for therapeutic innovation. Patients with cancers driven by chromatin remodeler mutations — patients who had no targeted therapies just a decade ago — are now potentially within reach of treatments specifically designed for their disease.

I want to end where I began. Inside every nucleus of every cell in your body, right now, chromatin remodelers are working. They are sliding nucleosomes. They are ejecting them. They are swapping histones. They are constantly reshaping the regulatory landscape of your genome, in response to signals that tell each cell what to do at each moment. They are essential for life. They are central to development. They are major cancer drivers when they break. And, in the last few years, they have become some of the most exciting targets in modern oncology drug development. The four families — SWI/SNF, ISWI, CHD, INO80 — that we've spent two hours discussing are not just academic biochemistry. They are the working machinery of cellular regulation, and the drugs being designed against them now may be saving lives in the next decade.

That's chromatin remodeling. Thank you. I'll take questions.

---

## APPENDIX — Key facts, names, and further reading

**The four families at a glance:**

- **SWI/SNF (BAF in mammals)** — catalytic ATPases SMARCA4 (BRG1) and SMARCA2 (BRM); opens chromatin for transcription factors; three variants (cBAF, pBAF, GBAF); mutated in ~20% of human cancers; key subunits ARID1A, SMARCB1 (BAF47/SNF5), PBRM1, BRD9.
- **ISWI** — catalytic ATPases SMARCA5 (SNF2H) and SMARCA1 (SNF2L); HAND-SANT-SLIDE domain; chromatin spacing; complexes include NURF, ACF, CHRAC, RSF; reads unmodified H4 tail.
- **CHD** — nine members CHD1-CHD9 in mammals; tandem chromodomains read methylated histones; coupled to RNA pol II in active genes (CHD1); NuRD complex combines remodeling with deacetylation (CHD3-5); CHD8 is a major autism risk gene.
- **INO80/SWR1** — INO80 ATPase and SRCAP (mammalian SWR1 relative); histone variant exchange — SWR1 inserts H2A.Z, INO80 removes it; critical for DNA double-strand break repair.

**Historical milestones:**

- 1984: Marian Carlson identifies SNF mutants in yeast that cannot grow on sucrose.
- Late 1980s: Ira Herskowitz and Fred Winston identify SWI mutants required for mating-type switching; convergence with SNF mutants reveals shared subunits.
- Early 1990s: Biochemical purification of SWI/SNF complex; demonstration of ATP-dependent nucleosome remodeling in vitro.
- Mid-1990s: Identification of mammalian BAF complex with BRG1/BRM ATPases.
- 1998-1999: SMARCB1 (SNF5) identified as the gene lost in malignant rhabdoid tumors.
- Mid-1990s: ISWI family identified by Wu and Becker labs.
- Late 1990s-2000s: CHD family members characterized; NuRD complex purified.
- 2000s: INO80 and SWR1 complexes shown to exchange H2A.Z.
- 2010s: TCGA reveals BAF subunit mutations in ~20% of human cancers; ARID1A identified as one of the most-mutated cancer genes; Coffin-Siris syndrome linked to BAF subunit mutations.
- 2010s: CHD8 identified as major autism risk gene.
- 2017-2024: Cryo-EM revolution produces high-resolution structures of major chromatin remodeler complexes bound to nucleosomes.
- 2018: cBAF, pBAF, and GBAF (ncBAF) firmly established as three distinct BAF variants.
- 2020s: SMARCA2 (BRM) degraders enter clinical trials for SMARCA4-mutant cancers; BRD9 degraders enter trials for synovial sarcoma; first chromatin remodeler-targeted oncology drug class.

**Key terminology:**

- **Nucleosome** — the basic unit of chromatin: 147 bp of DNA wrapped around a histone octamer (two each of H2A, H2B, H3, H4).
- **Linker DNA** — the 20-80 bp of DNA between adjacent nucleosomes.
- **Euchromatin / Heterochromatin** — open / closed packaging states of chromatin.
- **DNA translocase** — an ATP-driven motor that pumps DNA past itself without unwinding; the core mechanism of chromatin remodelers.
- **Synthetic lethality** — situation where loss of two genes is lethal but loss of either alone is tolerated; basis for cancer therapy targeting paralog dependencies.
- **PROTAC (proteolysis targeting chimera)** — bifunctional small molecules that recruit E3 ubiquitin ligases to a target protein, causing the target to be degraded by the proteasome.
- **dCas9** — catalytically dead Cas9, used as a programmable DNA-binding scaffold for fusion proteins.

**Important diseases:**

- **Malignant rhabdoid tumor** — pediatric cancer driven by SMARCB1 loss; AT/RT is the brain version.
- **Synovial sarcoma** — driven by SS18-SSX fusion; treated experimentally with BRD9 degraders.
- **Ovarian clear-cell carcinoma** — >50% have ARID1A mutations.
- **Endometrial cancer** — ~30% have ARID1A mutations.
- **SMARCA4-deficient thoracic sarcoma** — aggressive lung cancer defined by SMARCA4 loss.
- **Clear cell renal cell carcinoma** — PBRM1 is the second-most-mutated gene (after VHL).
- **Coffin-Siris syndrome** — developmental disorder caused by BAF subunit mutations.
- **Autism spectrum disorder** — CHD8 is one of the strongest known risk genes.

**Approved and investigational drugs:**

- **Tazemetostat** — EZH2 inhibitor, FDA-approved for INI1/SMARCB1-deficient epithelioid sarcoma and follicular lymphoma; exploits SWI/SNF-PRC2 synthetic lethality.
- **FHD-909 (LY4050784)** — Foghorn/Lilly SMARCA2 (BRM) degrader, in Phase 1 for SMARCA4-mutant cancers.
- **FHD-609** — Foghorn BRD9 degrader, in Phase 1 for synovial sarcoma.
- **PRT3789** — Prelude Therapeutics SMARCA2 degrader, in Phase 1.
- Multiple HDAC inhibitors, BET bromodomain inhibitors, LSD1 inhibitors, DNMT inhibitors approved or in development for various cancers.

**Recommended further reading:**

- Clapier and Cairns, "The biology of chromatin remodeling complexes" — _Annual Review of Biochemistry_ (2009), and Clapier et al., updated review (2017). The standard mechanistic reference.
- Kadoch and Crabtree, "Mammalian SWI/SNF complexes in cancer" — multiple reviews, the authoritative source on BAF cancer biology.
- Helming et al., "ARID1B is a specific vulnerability in ARID1A-mutant cancers" — _Nature Medicine_ (2014). Synthetic lethality in BAF complex.
- Hodges et al., "The many roles of BAF (mSWI/SNF) and PBAF complexes in cancer" — _Cold Spring Harbor Perspectives_ (2016).
- St. Pierre and Kadoch, "Mammalian SWI/SNF complexes in cancer: emerging therapeutic opportunities" — _Current Opinion in Genetics & Development_ (2017).
- Mashtalir et al., "Modular organization and assembly of SWI/SNF family chromatin remodeling complexes" — _Cell_ (2018). Defines cBAF, pBAF, GBAF.
- Recent cryo-EM structural papers from the labs of Cigall Kadoch, Patrick Cramer, Karim-Jean Armache, and others (2018-2024).

End of script.
