# Long Noncoding RNAs — The Regulatory Dark Matter of the Genome

**A 2-hour undergraduate genomics lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There is a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — Two percent of the genome — the central surprise of modern transcriptomics

Good morning. For the next two hours we are going to talk about a part of the genome that, fifteen years ago, almost nobody believed was important — a vast territory of DNA that gets transcribed into RNA but never gets translated into protein, and that for most of the molecular biology era was dismissed, variously, as junk, as noise, as transcriptional spillover, or as a kind of evolutionary trash heap that the cell tolerates because it cannot be bothered to clean up. That dismissal turns out to have been wildly premature. Among the noncoding transcripts of the human genome are some of the most important regulatory molecules we know. One of them silences an entire X chromosome in every female cell, for life. Another sits at the heart of nuclear bodies that organize splicing. A third is one of the top-ten most abundant transcripts in many of your cells, conserved across all mammals, and we still cannot really tell you what it does. Today is the tour of that territory. The territory is called the **long noncoding RNAs** — lncRNAs — and they are, collectively, the regulatory dark matter of the genome.

Let me start with the number that sets the stage. The human genome is about three billion base pairs of DNA. Of those three billion, only about **two percent** — roughly sixty million base pairs — actually code for protein. That is the entire protein-coding repertoire of a human being, twenty thousand or so genes, the part of the genome the Human Genome Project most carefully cataloged. The other ninety-eight percent is, in the strict protein-coding sense, noncoding. For decades the working assumption was that most of that noncoding ninety-eight percent was inert — regulatory elements scattered through it, sure, promoters and enhancers and insulators, but the vast majority was thought to be evolutionary detritus, transposon corpses, pseudogenes, and structural padding. It was Susumu Ohno who first used the phrase "junk DNA," in 1972, to describe this fraction. The phrase stuck.

\[Pause.\]

Then, starting in the late 1990s and accelerating dramatically through the 2000s, a series of unsettling observations began to undermine the junk story. Tiling microarrays, and later high-throughput sequencing, showed that an astonishing fraction of the noncoding genome was actually being **transcribed**. Not just a little. A lot. By the time the **ENCODE consortium** — the Encyclopedia of DNA Elements project — published its major results in 2012, it could claim that **somewhere between seventy and eighty percent of the human genome shows some evidence of being transcribed** in at least one cell type, at some level, at some point. That is an enormous fraction. It means the cell is producing RNA from regions of the genome that have no protein-coding function whatsoever. Most of those transcripts are not the famous well-known noncoding RNAs you learned about in undergraduate biochemistry — not the transfer RNAs, not the ribosomal RNAs, not the small nuclear RNAs of the spliceosome. Most of them are something else: long, mRNA-like molecules transcribed from intergenic regions, from the antisense strands of protein-coding genes, from introns, from regions that look like enhancers, from regions that look like nothing in particular. The genome, it turned out, is **pervasively transcribed**, and most of what it transcribes does not code for protein.

This is the central surprise. It is worth sitting with for a moment. The textbook picture from the 1980s — gene transcribed, mRNA exported, protein translated, biology happens — is not wrong, but it captures only the tip of the transcriptional iceberg. Underneath that tip is a vast layer of RNA species that the cell is making, often in low amounts, sometimes in huge amounts, sometimes briefly, sometimes constitutively, almost always with regulatory or structural roles that we are still trying to puzzle out. The slogan I want you to carry through this lecture is this. **Only two percent of the genome encodes protein. Much of the rest is transcribed into RNAs that do not code for anything. Some of those noncoding RNAs are crucial regulators of cell biology. Many of them probably do nothing. Telling the two apart is one of the central unsolved problems of modern genomics.**

\[Pause.\]

If you walk out of here in two hours and you can do three things — one, define what a long noncoding RNA is, sketch how it differs from an mRNA, and name the four or five canonical examples that everybody in the field should know; two, describe at least three distinct mechanisms by which lncRNAs are thought to act — scaffolds, guides, decoys, enhancer-like elements — and give a concrete example of each; three, look at a modern paper that says "we identified a novel lncRNA that regulates pathway X" and have real critical intuition for the evidence — is the lncRNA conserved, is there a knockout phenotype, has anyone done a CRISPR screen, is the mechanism plausible — then we have succeeded. Everything else hangs off those three.

A quick orientation on what is coming. We are going to start with the definition of lncRNA and the early discoveries — H19 in 1990, XIST in 1991 — that established the category. Then we will spend serious time on XIST, the prototype regulatory lncRNA, and on HOTAIR, the scaffold lncRNA, because together they define the mental models for how the field thinks. We will visit the abundant mysteries — MALAT1 and NEAT1 — that nobody can fully explain. We will look at how the field categorizes the thousands of lncRNAs that have been catalogued — intergenic, antisense, intronic, divergent, enhancer-derived. We will confront the hard question of what fraction of these transcripts are actually functional, and the modern empirical answer that CRISPR screens are starting to give. We will tour the mechanisms, the disease connections, and the relatively new world of circular RNAs. And we will end on the frontier — single-cell lncRNA biology, large-scale functional screens, and lncRNAs as drug targets.

Let us start with the definition, because the field's definition of "long noncoding RNA" is, in fact, slightly embarrassing in how arbitrary it is.

---

## SEGMENT 2 — What counts as a lncRNA — definitions, lengths, and a slightly arbitrary cutoff

The term **long noncoding RNA**, abbreviated **lncRNA**, has a definition that is partly biological and partly bureaucratic. Let me give you the biological side first and then the bureaucratic side, because if you do not understand both you will be confused when you read the literature.

The biological side is straightforward in principle. A long noncoding RNA is an RNA molecule that is **transcribed by RNA polymerase II**, that **does not produce a functional protein**, and that is **longer than some arbitrary length cutoff** — almost always taken to be **two hundred nucleotides**. That is it. Three criteria. Pol II transcription, no protein product, more than 200 nt long.

Each of those criteria is worth unpacking. Pol II transcription means that lncRNAs are made by the same enzyme that makes messenger RNA — not by RNA polymerase I, which makes ribosomal RNA, and not by RNA polymerase III, which makes transfer RNAs and certain other small RNAs. Because they are made by Pol II, lncRNAs share a lot of features with mRNAs. They get a five-prime cap — the m7G cap, same as messenger RNA. They often get polyadenylated at the three-prime end. They often have introns and get spliced. If you took a lncRNA and showed it to a biochemist without telling them what it was, they might mistake it for an mRNA. The shape is the same. The processing is the same. The only thing that distinguishes a lncRNA from an mRNA, at the level of the molecule itself, is that the mRNA gets loaded onto a ribosome and translated into protein, and the lncRNA does not.

\[Pause.\]

The second criterion — no protein product — is where things get genuinely tricky. How do you prove that an RNA molecule does not code for protein? You cannot prove a negative. What you can do is look for **open reading frames** — stretches of sequence that, if translated, would produce a protein of reasonable length — and ask whether the candidate lncRNA has any. Most lncRNAs have short open reading frames, less than a hundred codons, that look statistically random — they do not show the signs of selection that real coding sequences do. There are bioinformatics tools — CPAT, CPC2, PhyloCSF — that calculate a "coding potential" score from a transcript's sequence and codon composition, and they can flag transcripts as probably noncoding. But "probably" is doing a lot of work in that sentence. A growing body of work has shown that some so-called lncRNAs actually encode small peptides — sometimes called **smORFs**, for small open reading frames — that have real biological function. The lncRNA called LINC00961, for instance, turned out to encode a tiny peptide called SPAR that regulates muscle regeneration. So the line between "noncoding RNA" and "coding RNA that makes a small protein" is fuzzy and getting fuzzier the harder people look. The current state of play is that some fraction of annotated lncRNAs probably encode short peptides, that fraction is uncertain, and the field is actively trying to figure out which ones.

The third criterion — the two-hundred-nucleotide length cutoff — is the bureaucratic one. Why two hundred? Because that was a convenient number that happened to separate the lncRNAs from the smaller, better-characterized noncoding RNA classes: transfer RNAs are about seventy to ninety nucleotides, microRNAs are about twenty-two, small nuclear RNAs are typically under two hundred. So if you draw a line at two hundred nucleotides, you exclude all those known small species and define a category of "everything else." It is a definition by exclusion. It says nothing about function and almost nothing about biology. Some lncRNAs are 250 nucleotides; some are tens of thousands of nucleotides. XIST, which we will meet shortly, is about seventeen kilobases long. The 200-nt cutoff is not a meaningful biological threshold; it is a curatorial convenience.

\[Pause.\]

So here is the slogan for the definition. **A lncRNA is any RNA polymerase II transcript longer than two hundred nucleotides that does not appear to encode a protein. It looks like an mRNA — capped, often spliced, often polyadenylated — but instead of being translated, it does its job as RNA. The two-hundred-nucleotide line is arbitrary; the noncoding part is partly arbitrary too because some lncRNAs sneak in a small peptide. The category is defined more by what these molecules are not than by what they are.**

A few words on naming, because the names are going to come up constantly. There is an official nomenclature run by the HUGO Gene Nomenclature Committee, the HGNC, that assigns names to lncRNAs. The convention is that intergenic lncRNAs — the ones that do not overlap any protein-coding gene — get names of the form **LINC0000X**, for "Long Intergenic Non-Coding RNA, number such-and-such." So you will see thousands of LINC names in the catalogs: LINC00152, LINC00467, LINC01234, on and on. Some lncRNAs that were characterized before this naming scheme retained their original idiosyncratic names — XIST, HOTAIR, MALAT1, NEAT1, H19. These early names usually came from the lab that discovered them and reflect what the lab thought the molecule did. XIST is "X-inactive specific transcript." HOTAIR is "HOX antisense intergenic RNA." MALAT1 is "metastasis-associated lung adenocarcinoma transcript 1." H19 was the nineteenth fraction in a fractionation experiment. The naming is a historical pastiche. Once you know the conventions, you can navigate it.

Now let us go back to where the field began — to the early 1990s, when the first two lncRNAs were stumbled upon, by accident, in studies that were not really looking for them.

---

## SEGMENT 3 — Before the field had a name — H19 and XIST in 1990 and 1991

The story of lncRNAs as a recognized class of molecules begins, oddly, with two transcripts that were discovered before the term "long noncoding RNA" existed. Both were found in the early 1990s. Both were puzzles to the people who found them. Both turned out, eventually, to be exemplars of the kinds of biology that lncRNAs are good at. Their names are **H19** and **XIST**.

H19 was first identified in 1990 by Shirley Tilghman's lab at Princeton. Tilghman was working on a phenomenon called **genomic imprinting** — the observation that some genes are expressed only from the copy inherited from one parent, not from both copies as the textbook says. Imprinting was a puzzle in the 1980s. Why would the cell silence one of two genetically identical copies of a gene? The phenomenon turned out to be epigenetic, regulated by DNA methylation differences between the maternal and paternal alleles. Tilghman's group was studying the imprinted region around the **IGF2** gene, which is expressed only from the paternal allele, and they noticed that just upstream sat another gene, transcribed from the opposite strand, that was expressed only from the **maternal** allele. They called it H19, for the fraction it came out of in their cDNA library. The H19 transcript was a long, capped, polyadenylated, spliced RNA, looking for all the world like an mRNA — but when they searched for open reading frames, the longest one was just a hundred codons or so, and when they tried to find a protein product, there was none. H19 was an mRNA-like molecule that did not make protein. Tilghman published the paper in 1990 and the molecular biology community essentially said "huh, weird, file that away" and moved on. H19 was a curiosity. Nobody yet had a category to put it in.

\[Pause.\]

The very next year, 1991, the second great early lncRNA appeared, and this one really got people's attention because it was tied to one of the most dramatic regulatory phenomena in mammalian biology: **X chromosome inactivation**. In every female mammalian cell — every cell of every female mouse, every female human, every female cat — one of the two X chromosomes is transcriptionally silenced. The silencing is set up during early embryogenesis and then maintained for the life of the cell and all its descendants. In a female calico cat, the orange-and-black patches are visible evidence of X-inactivation: each patch is the descendant lineage of a single embryonic cell that randomly chose to silence one X chromosome over the other, and the patch carries that choice through every cell division. X-inactivation had been described phenotypically by Mary Lyon in the early 1960s — "Lyonization," it was called. By 1991, biologists knew it happened. They knew it was developmental, random per cell, clonally maintained. What they did not know was the molecular trigger.

The trigger came in 1991, when two groups independently — Carolyn Brown working with Hunt Willard at Stanford, and Neil Brockdorff and colleagues at the MRC in London — identified a single gene on the X chromosome that was expressed **only from the inactive X**. Every other gene on the inactive X was silent; this one was loud. They called it **XIST**, for "X-Inactive Specific Transcript." When they cloned the cDNA and characterized the molecule, they found exactly the same pattern Tilghman had found for H19: a long, capped, spliced, polyadenylated transcript with no protein-coding open reading frame. XIST was a giant mRNA-like molecule that produced no protein.

\[Pause.\]

But the function of XIST was not a mystery for long, because the genetics nailed it down. Delete XIST from one of the X chromosomes in a mouse, and that X chromosome can no longer be inactivated. Force XIST expression from an autosome — a non-X chromosome — and that autosome gets silenced. XIST is the molecule that triggers and maintains X chromosome inactivation. It is, in modern terms, the prototype regulatory lncRNA — the example everyone goes back to when they want to argue that noncoding transcripts can do massive, indispensable regulatory work.

What I want you to take from this segment is two things. **First, the first two famous lncRNAs were stumbled into rather than searched for.** H19 came out of an imprinting study; XIST came out of an X-inactivation study. Nobody in 1990 was looking for "long noncoding RNAs" as a category. The category did not exist. These molecules were oddities that did not fit. **Second, both of them turned out, eventually, to be deeply functional — H19 in imprinting and IGF2 regulation, XIST in dosage compensation across the entire X chromosome.** That set a precedent. It established the possibility that long, mRNA-like, noncoding transcripts could be doing serious biology. It planted the seed that the rest of the noncoding territory — most of the genome, really — might be hiding more such molecules. It took twenty more years and a lot of next-generation sequencing for the field to mature, but the seed was planted in 1990 and 1991, with two oddball transcripts in two unrelated labs.

Let us now spend a full segment on XIST, because XIST is the molecule everyone in the field uses to explain what a lncRNA can do.

---

## SEGMENT 4 — XIST and X-inactivation — the prototype regulatory lncRNA

XIST is the lncRNA everyone learns first. If you only remember one lncRNA from this lecture, remember XIST. It is the molecular textbook example of what a noncoding RNA can do at scale — silencing not one gene, not ten genes, but an entire chromosome of about a thousand genes, in a way that is set up once in early development and maintained for life.

Let me sketch the biology. In a female mammalian embryo, very early on — around the implantation stage in mice, the morula-to-blastocyst transition — every cell faces a problem. There are two X chromosomes, and the cell needs to dial expression of X-linked genes down to roughly the same level as male cells, which have only one X. This is called **dosage compensation**. Mammals solve it by inactivating one of the two X chromosomes in every female somatic cell. Which one gets inactivated is random per cell — each cell independently chooses, then commits, then passes that choice to all its daughter cells. Once a cell is committed, the choice is irreversible. That is why female mammals are mosaics of two X-expression states; that is why calico cats exist.

\[Pause.\]

XIST is the molecular switch that makes the choice happen. Here is the canonical model, built up over thirty years of work in many labs.

When a female cell decides to inactivate one of its X chromosomes, it dramatically upregulates XIST from that chromosome only. The XIST RNA — about seventeen kilobases long, capped, spliced, polyadenylated — does not leave the nucleus. Instead, it stays in the nucleus and physically **coats the X chromosome from which it was transcribed**. You can see this in fluorescence microscopy: stain a female cell with a probe against XIST RNA and you see a single bright cloud, painted across an entire chromosome, marking the inactive X. The coating is not just an association — it is a tight physical wrapping, with XIST molecules spreading from the locus of their transcription out across the rest of the chromosome, finding contact points all over the chromosomal territory.

Once XIST has coated the X chromosome, it recruits a series of silencing machinery. First, **Polycomb Repressive Complex 2 — PRC2** — which deposits the repressive histone mark H3K27me3 across the chromosome. Then **PRC1**, which deposits H2AK119ub. Then heterochromatin proteins, DNA methyltransferases that lay down 5-methylcytosine on promoter CpG islands, histone deacetylases that remove activating acetylation marks. The cumulative result is that the entire chromosome gets compacted into a transcriptionally inert state, visible as a dense **Barr body** under the microscope. The chromosome is shut down. It stays shut down for the life of the cell and through every subsequent cell division.

\[Pause.\]

Here is the analogy I want you to hold. **XIST is the X-shutdown switch. One cell, two X chromosomes. Early in development, the cell flips a coin. XIST gets expressed from one X. It physically coats that X like a tarp thrown over a piece of furniture, recruits the silencing machinery — Polycomb, DNA methylation, repressive chromatin proteins — and shuts the chromosome down. That cell is committed for life. Every descendant carries the same choice.** That is the prototype regulatory lncRNA at work. Not catalysis, not coding — a giant RNA molecule acting as a physical scaffold and a recruitment platform, deployed to do an enormous regulatory job.

A few additional features of XIST that matter for the larger picture. XIST contains several distinct functional domains along its length. The **A-repeat** at the five-prime end is critical for silencing — delete it and the rest of XIST still coats the chromosome, but the coating no longer leads to silencing. The A-repeat is the part that recruits the silencing machinery. The other repeats — B, C, D, E, F — contribute to chromosome coating, spreading, and the recruitment of other binding partners. So XIST is a **modular** molecule. Different stretches of sequence do different jobs. The molecule is more like a Swiss army knife of regulatory motifs than a single-function tool.

The story of XIST also includes its own regulatory network. The choice of which X to inactivate is controlled in part by a counter-transcript called **TSIX**, transcribed from the opposite strand of the same locus. TSIX antagonizes XIST on the chromosome that is going to stay active. There are additional players — RepA, JPX, FTX — also lncRNAs, all woven into the regulatory circuit that controls which XIST gets turned on and when. The entire X-inactivation control region is, in fact, a dense cluster of long noncoding RNAs interacting with each other to make a single binary developmental decision. It is one of the most lncRNA-rich regions of any mammalian genome, and it is the cleanest example we have of how the cell can use noncoding transcripts to implement a complex regulatory logic.

\[Pause.\]

XIST is also notable for being **conserved across placental mammals but absent in marsupials and monotremes**, which have their own non-XIST mechanism for dosage compensation called **RSX**. So XIST is not the universal solution; it is the placental-mammal solution. This matters for the larger conservation debate we will get to in Segment 15. XIST is conserved across the lineage in which it functions; it is not a universal regulatory module. Most lncRNAs, as we will see, are even less conserved than XIST, and that is one of the big reasons it is hard to know which of them are functional.

So XIST establishes the proof of concept. A long noncoding RNA can do enormous regulatory work — silencing an entire chromosome, recruiting epigenetic machinery, propagating its effect through every cell division. The field, once XIST was understood, started looking for other lncRNAs that might do similar kinds of work. The most famous of those finds came in 2007, from a graduate student named John Rinn, and its name is HOTAIR.

---

## SEGMENT 5 — HOTAIR — Rinn 2007 and the scaffold model

In 2007, a graduate student named John Rinn, working in Howard Chang's lab at Stanford, published a paper in the journal Cell that reframed how the community thought about long noncoding RNAs. The paper was titled "Functional demarcation of active and silent chromatin domains in human HOX loci by noncoding RNAs," and it introduced a lncRNA called **HOTAIR** — for **HOX Antisense Intergenic RNA**. HOTAIR became, alongside XIST, one of the most studied and most argued-about lncRNAs in the field, and it introduced a mechanistic model — the **scaffold model** — that has shaped how people think about lncRNA function ever since.

Here is the background. The **HOX gene clusters** are four clusters of homeobox transcription factors — HOXA, HOXB, HOXC, HOXD — sitting on four different chromosomes in mammals, that pattern the body plan during development. They are some of the most famous and most regulated genes in biology. The HOX clusters are tightly silenced in non-relevant tissues and tightly activated in specific developmental contexts, and that silencing is enforced by Polycomb complexes that deposit H3K27me3 across the cluster. Polycomb is the same complex that XIST recruits to the X chromosome; it is the master silencer of developmental genes.

\[Pause.\]

What Rinn and Chang noticed, when they tiled the HOX clusters with custom microarrays designed to detect noncoding transcription, was that the HOX regions were full of noncoding RNAs — long transcripts, antisense and intergenic, scattered through and around the clusters. One of those transcripts, sitting in the **HOXC** locus, antisense to the HOXC genes, was particularly interesting. It was expressed in specific tissues, it was a long capped polyadenylated RNA with no protein product, and it was expressed in cells where the **HOXD** cluster — on a totally different chromosome — was silenced. That is the strange observation. A noncoding RNA at the HOXC locus seemed to correlate with silencing at the HOXD locus. The two are on different chromosomes. They are not even near each other.

When Rinn and Chang functionally tested HOTAIR — knocked it down, looked at gene expression, did chromatin immunoprecipitation for the silencing marks — they found that HOTAIR was required for proper silencing of HOXD genes on the distant chromosome. Knock down HOTAIR, and the H3K27me3 mark at HOXD goes down, and the silenced genes pop up. The mechanism, they proposed, was that HOTAIR physically binds **PRC2** — the Polycomb Repressive Complex 2 that lays down H3K27me3 — and serves as a recruitment platform that brings PRC2 to specific target loci in the genome. HOTAIR was acting **in trans**, regulating genes far from where it was transcribed, by serving as a molecular adapter between PRC2 and target chromatin.

\[Pause.\]

Here is the analogy. **HOTAIR is the molecular scaffold. PRC2 is the silencing machinery — it lays down repressive histone marks but does not know where to go. HOTAIR is the address tag. The lncRNA binds PRC2 on one end and binds a specific genomic region on the other end, and so it physically delivers the silencing complex to the right address. Like a freight train assembling cargo at a station: the locomotive is PRC2, the cargo is the silencing mark, the lncRNA is the assembly platform that decides what goes where.** That mental image — lncRNA as a multi-protein scaffold that brings together complexes that would otherwise not find each other — became one of the dominant mechanistic models in the field.

The HOTAIR paper opened the floodgates. Within a few years, dozens of other lncRNAs had been proposed as PRC2 scaffolds, or as scaffolds for other chromatin complexes. **ANRIL** — antisense noncoding RNA in the INK4 locus — was proposed to recruit Polycomb to silence the CDKN2A tumor suppressor. **KCNQ1OT1** was shown to recruit silencing complexes to the imprinted KCNQ1 cluster. **AIRN** was shown to do the same for the imprinted IGF2R locus. The scaffold model became one of the workhorse explanations for lncRNA function: lncRNA binds chromatin-modifying complex, lncRNA tethers complex to a specific genomic location, complex modifies chromatin, target gene is regulated.

That picture has held up partly, but it has also been challenged. A series of careful biochemical studies in the mid-2010s pushed back on the idea that PRC2 has highly specific RNA binding partners — PRC2 turns out to bind almost any RNA in vitro, with similar affinity for many sequences, which raises the question of whether the specific lncRNA-PRC2 interactions reported in HOTAIR-style models are really as selective as initially claimed. There has been a long-running debate about HOTAIR's mechanism specifically — some labs have failed to reproduce strong HOTAIR knockout phenotypes, and there is real uncertainty about how much of the original model is correct. So HOTAIR is, depending on whom you ask, either a beautifully worked-out example of a scaffold lncRNA or a cautionary tale about how easy it is to over-interpret in vitro RNA-protein interactions. Probably some of both. The truth is messy.

\[Pause.\]

What I want you to take from this segment is the mental model, regardless of whether HOTAIR specifically delivers on it. **The scaffold model says: a long noncoding RNA can act as a physical platform that brings together protein complexes — typically chromatin-modifying complexes — and delivers them to specific genomic addresses. The lncRNA has different domains for binding different partners. It functions, in this model, like a flexible molecular adapter.** That model is real for some lncRNAs. It may be wrong for others. It is one of the major mechanistic frameworks the field uses to think about how a noncoding RNA could matter.

We will revisit mechanisms in detail in Segment 10. For now, let me take you to two other famous lncRNAs that do not fit the scaffold model — two molecules that sit at the center of nuclear bodies, are wildly abundant, and remain partly mysterious after twenty years of study.

---

## SEGMENT 6 — MALAT1 and NEAT1 — the abundant mysteries

MALAT1 and NEAT1 are two lncRNAs that, by sheer abundance and conservation, ought to be doing something fundamental. Both are among the most highly expressed transcripts in many human cell types — MALAT1 is routinely in the top ten by molecule count in nuclei. Both are deeply conserved across mammals, with stretches of sequence that have been preserved for over a hundred million years. Both have well-described subcellular localizations to specific nuclear bodies. And both are, in some meaningful sense, still mysterious — neither has a simple knockout phenotype that explains why the cell is making so much of them.

Let me take them one at a time. **MALAT1** — Metastasis-Associated Lung Adenocarcinoma Transcript 1 — was first identified in 2003 by a group at Heidelberg, looking for transcripts associated with metastatic spread in non-small-cell lung cancer. They found that MALAT1 was upregulated in metastatic samples and predicted poor prognosis. The transcript was about 8.7 kilobases long, transcribed from chromosome 11, with no protein-coding open reading frame. Its abundance was astonishing — MALAT1 RNA is so plentiful in many cells that if you do a Northern blot it lights up like a beacon. Its localization, when people did fluorescence in situ hybridization, was striking — MALAT1 sits in **nuclear speckles**, the dense subnuclear compartments where splicing factors are concentrated. So MALAT1 is a speckle-localized, super-abundant, conserved, cancer-associated noncoding transcript.

\[Pause.\]

What does MALAT1 do? This is where the story gets uncomfortable. Multiple groups have generated MALAT1 knockout mice, expecting to find serious developmental phenotypes given the abundance and the conservation. What they found was that **the mice are mostly normal**. The knockouts are viable, fertile, and grossly indistinguishable from wild-type at first inspection. Closer phenotyping has revealed subtle effects — changes in alternative splicing of some transcripts, modest changes in cell proliferation under stress, increased sensitivity to certain stimuli — but there is no dramatic, "the mouse cannot survive without MALAT1" phenotype. This is the great MALAT1 paradox. **MALAT1 is one of the most abundant transcripts in many cells, conserved across all mammals, localized to a specific subnuclear compartment, upregulated in cancer — and the knockout mouse is fine.** The molecule looks like it ought to be essential. Empirically, it is not.

People have proposed many models for what MALAT1 does. The most credible current view is that MALAT1 contributes to the organization and function of nuclear speckles — perhaps as a kind of scaffolding component, perhaps as a sponge for splicing factors, perhaps as a regulator of alternative splicing of a specific subset of target transcripts. There is real evidence that loss of MALAT1 perturbs alternative splicing patterns, and there is real evidence that MALAT1 is important in certain cancer contexts. But the underwhelming knockout phenotype keeps the field humble. **Abundant does not equal essential. Conserved does not equal essential. MALAT1 is the standing reminder of both.**

\[Pause.\]

**NEAT1** — Nuclear Enriched Abundant Transcript 1 — is MALAT1's near-neighbor in many ways. It is transcribed from the same general region of chromosome 11, also long, also noncoding, also super-abundant, also localized to a specific nuclear body — in this case the **paraspeckle**. Paraspeckles are subnuclear compartments distinct from speckles, with their own protein composition and proposed functions in nuclear retention of certain RNAs. NEAT1 is essential for paraspeckle assembly. If you knock down NEAT1, paraspeckles disappear. If you express NEAT1 in a cell that does not normally make it, paraspeckles form. NEAT1 is the architectural RNA of the paraspeckle.

NEAT1 exists in two isoforms — a shorter form called NEAT1_1 and a longer form called NEAT1_2. The long form is the one essential for paraspeckle integrity; the short form is more puzzling. The paraspeckle, as a structure, is thought to be involved in sequestering certain RNAs and proteins — in particular, RNAs containing inverted Alu repeats that get hyper-edited by ADAR enzymes and are then retained in paraspeckles rather than exported to the cytoplasm. There is a model in which paraspeckles serve as a sink for these edited RNAs, buffering their cytoplasmic abundance.

Again, the NEAT1 knockout mouse is **mostly viable**. NEAT1 null mice can be generated, they survive to adulthood, they show some subtle phenotypes — reduced female fertility under certain conditions, altered responses to stress — but there is no dramatic embryonic lethal phenotype. NEAT1 sits in the same uncomfortable space as MALAT1: hugely abundant, beautifully localized, structurally important for a specific organelle-like body, and yet not clearly essential for whole-organism survival.

\[Pause.\]

The slogan. **MALAT1 and NEAT1 are the abundant mysteries — the super-expressed, deeply conserved, nuclear-body-resident lncRNAs that ought, by all the criteria we use to flag importance, to be essential. The knockout mice are mostly normal. Either the assays are not sensitive enough to detect the real phenotypes, or these molecules have functions that are robust to loss because the cell has parallel pathways, or — possibly — the criteria of abundance and conservation are misleading us about what "essential" means.** Whatever the resolution, MALAT1 and NEAT1 are constant reminders that the field's intuitions about lncRNA function are still developing.

These two molecules also introduce a feature of lncRNA biology that is going to come up again: many lncRNAs work through **subcellular localization**. They are not floating around the cell at random; they sit in specific compartments — speckles, paraspeckles, the nucleolus, the chromatin associated with their gene of origin, the cytoplasm near certain organelles. The localization is part of the function. We will come back to this when we discuss mechanisms in Segment 10.

For now, we have met the four canonical lncRNAs that every undergraduate in this field is expected to know — XIST, HOTAIR, MALAT1, NEAT1 — plus H19 from the early imprinting story. Together they span the major mechanistic categories: chromosome silencing, chromatin-complex scaffolding, nuclear body organization, and imprinting control. The next question is: how many more lncRNAs are out there? How do we categorize them? And how on earth do we figure out which ones are real?

---

## SEGMENT 7 — Categories of lncRNAs — intergenic, antisense, intronic, divergent, enhancer

Once the field accepted that long noncoding RNAs were a real thing and started cataloging them at scale, it became clear that they were not a uniform class. They came from many different parts of the genome, in many different relationships to nearby protein-coding genes. The community developed a vocabulary for these positional categories, and you need to know it to read the literature.

Let me walk through the five main categories. They are mostly defined by **where in the genome the lncRNA is transcribed from, relative to nearby protein-coding genes**. They say nothing about function. They are a positional classification only.

**Category one: long intergenic noncoding RNAs**, abbreviated **lincRNAs**. These are lncRNAs transcribed from regions of the genome that do not overlap any protein-coding gene. They sit in the gaps between genes — sometimes far from any neighbor, sometimes nestled close to one. HOTAIR is a lincRNA — it sits in the intergenic region of the HOXC cluster. Many of the LINC0000-named transcripts are lincRNAs by definition. These are the cleanest category in the sense that they are not entangled with any coding gene, so any phenotype you see from manipulating them is more easily attributed to the lncRNA itself rather than to perturbation of a neighboring coding gene.

\[Pause.\]

**Category two: antisense lncRNAs**. These are transcribed from the strand opposite to a protein-coding gene, so the lncRNA and the mRNA overlap each other in genomic coordinates but are read in opposite directions. XIST has an antisense partner called TSIX that is exactly this kind of transcript — TSIX overlaps XIST in the genome and is transcribed from the opposite strand. ANRIL, the antisense lncRNA in the INK4 tumor suppressor locus, is another example. Antisense lncRNAs are intriguing because they can in principle directly base-pair with the sense mRNA, which gives them an obvious regulatory mechanism — but most antisense lncRNAs do not seem to act by direct duplex formation; they act in other ways.

**Category three: intronic lncRNAs**. These are transcribed entirely from within an intron of a protein-coding gene. The host gene's exons get spliced together to make the mRNA; the intron in between encodes an additional, separately transcribed lncRNA. Sometimes the intronic lncRNA is regulatory for the host gene; sometimes it operates independently. There is real ambiguity here about how to tell a bona fide intronic lncRNA from a piece of unprocessed intronic RNA that got sequenced before it was degraded.

**Category four: divergent lncRNAs**, sometimes called **bidirectional** or **promoter-associated** lncRNAs. These are transcribed from the **opposite strand** of the same promoter that drives a protein-coding gene, in the opposite direction. So the promoter fires in both directions — one direction produces the mRNA, the other direction produces the lncRNA. Many active human promoters do this. The divergent lncRNAs are typically short, often unspliced, often unstable, and many of them may be incidental products of bidirectional transcription rather than functional molecules in their own right. But some divergent lncRNAs have real regulatory functions and act in cis to influence the partner protein-coding gene.

**Category five: enhancer RNAs**, abbreviated **eRNAs**. These are transcribed from active enhancer elements — the regulatory regions that loop to promoters to activate transcription. We will spend a full segment on eRNAs in Segment 12; for now, just register that active enhancers in mammalian cells produce short, often bidirectional, often unspliced RNA transcripts, and that these eRNAs are sometimes classified as a subtype of lncRNA and sometimes treated as their own category.

\[Pause.\]

A few additional positional categories show up in the literature. **Sense overlapping lncRNAs** overlap the exons of a coding gene on the same strand, in the same direction. **Pseudogene-derived lncRNAs** are transcribed from pseudogenes — degraded former protein-coding genes — and sometimes regulate their parent coding gene. **Circular RNAs** — circRNAs — are a different topology entirely, where the RNA molecule is covalently closed into a loop. We will spend a whole segment on circRNAs in Segment 13.

So the field has a vocabulary for where lncRNAs come from. But the positional classification does not predict function. A lincRNA might be a scaffold, a decoy, an enhancer-like element, or nothing at all. An antisense lncRNA might regulate its sense partner through base-pairing, or recruit chromatin modifiers, or do something completely different. The categories are a sorting system, not a mechanistic framework.

Here is the slogan. **lncRNAs are classified by genomic position relative to coding genes — intergenic, antisense, intronic, divergent, enhancer — but these categories say nothing about what the molecule does. The position tells you where it lives. The mechanism is a separate, harder question.**

Now that you know the categories, the natural next question is: how many lncRNAs are there in total? And the answer to that comes from a project that defines modern functional genomics — ENCODE.

---

## SEGMENT 8 — ENCODE, GENCODE, and the seventeen-thousand-lncRNA catalog

In 2003, with the human genome sequence essentially finished, the National Human Genome Research Institute launched a follow-on project to figure out what was actually functional in those three billion base pairs. The project was called **ENCODE** — the Encyclopedia of DNA Elements — and its job was to map every region of the genome that does something: every promoter, every enhancer, every transcribed region, every protein binding site, every chromatin state, in many human cell types. ENCODE was a huge international consortium that ran in phases through the 2000s and 2010s. The first major results came out in 2007. The headline 2012 release filled an entire issue of the journal Nature with thirty papers. The project is still ongoing.

ENCODE is the source of the famous and controversial claim that **eighty percent of the human genome is biochemically active** — by which the consortium meant that eighty percent of bases lie within at least one element that shows transcription factor binding, chromatin modification, DNase hypersensitivity, or transcription in at least one of the cell types they assayed. That number, eighty percent, was widely picked up in the press and widely contested by evolutionary biologists, who pointed out that "biochemical activity" is a low bar for "functional." We will come back to that debate in Segment 9.

\[Pause.\]

For our purposes today, the most important ENCODE deliverable is the transcript catalog — the list of every gene and every transcript variant produced by the human genome. The catalog is maintained by a sister project called **GENCODE**, which is the official human and mouse transcript annotation project, run jointly by the Sanger Institute, UCSC, and other centers. GENCODE releases a new version every few months. The version current at the time this lecture is being prepared annotates somewhere around **twenty thousand protein-coding genes** and a similar order of magnitude of noncoding RNA genes — specifically, around **seventeen to twenty thousand long noncoding RNA genes**.

Let that number sink in. **There are about as many long noncoding RNA genes in the human genome as there are protein-coding genes.** The ratio depends on which catalog you use — RefSeq is more conservative, GENCODE more inclusive, NONCODE more inclusive still — and the count keeps drifting upward as new transcripts get added and old ones get reclassified. The current order of magnitude, though, is firmly in the tens of thousands. If you trust the most permissive catalog, the human genome encodes more lncRNAs than protein-coding genes.

How did these catalogs get assembled? The basic recipe is to take very deep RNA-seq data from many human tissues and cell types, assemble the reads into transcripts, filter out the ones that overlap known protein-coding genes or known small noncoding RNAs, filter for transcripts longer than two hundred nucleotides, apply coding potential predictors to exclude likely small-ORF coding genes, and call whatever survives a lncRNA. Different catalogs use different stringency in each of these steps. **NONCODE**, the most permissive, has annotated over a hundred thousand human lncRNA transcripts when you count all isoforms across all cataloged species. **GENCODE**, the consensus mid-stringency catalog, sits in the seventeen-thousand range. **RefSeq**, the most stringent, annotates closer to ten thousand. The differences reflect honest disagreements about how much evidence a putative lncRNA needs before it gets into the catalog.

\[Pause.\]

Here is the analogy. **The lncRNA catalogs are like field guides to a recently discovered family of organisms. Some field guides include every reported sighting; some only include species with confirmed breeding populations. The number depends on the stringency, and the right number is the subject of active debate.** When you read a paper that says "there are twenty thousand human lncRNAs," what it really means is "twenty thousand entries in a particular curated catalog, assembled with a particular set of inclusion criteria." That number is not a count of functional regulatory molecules. It is a count of cataloged transcripts.

There are some structural facts about the lncRNA catalog that are worth knowing. lncRNAs, on average, are **shorter** than mRNAs — typical length around one to two kilobases, versus three to four for mRNAs. They have **fewer exons** — typically two or three, versus eight or ten for mRNAs. They are **less abundant** than mRNAs in any given cell — most lncRNAs are expressed at one to a few molecules per cell, where most mRNAs are tens to thousands. They are **more cell-type-specific** than mRNAs — a typical lncRNA is expressed in only a few cell types, where a typical mRNA is expressed across many. And they are **less conserved** across species than mRNAs, which is the big issue we will get to.

So the lncRNA universe, as cataloged, is a vast collection of mostly low-abundance, cell-type-specific, short-ish, lightly-spliced transcripts that look superficially like mRNAs but do not produce proteins. The catalog is large. The functional fraction is unknown. And that brings us directly to the central debate of the field: how many of these things actually do anything?

---

## SEGMENT 9 — The functional fraction debate — what fraction of lncRNAs matter?

This is the segment where we confront the question that hangs over the entire lncRNA field. Of the seventeen thousand or more cataloged human lncRNAs, **how many are actually functional**? How many are doing real regulatory work that the cell needs, and how many are essentially **transcriptional noise** — low-level, incidental products of a leaky RNA polymerase II that the cell ignores?

There is no clean answer. There are camps. There is data. There is a long history of argument that is still ongoing. Let me lay out the positions.

**The maximalist position** says that most of those seventeen thousand lncRNAs are doing something, that the cell does not waste energy transcribing molecules for no reason, that the diversity and cell-type specificity of lncRNA expression patterns implies regulation, and that as the field develops better functional assays we will keep finding functions for transcripts that look uninteresting today. This position is associated with the ENCODE consortium's broader "eighty percent is biochemically active" claim and with many lncRNA labs that have built careers around the assumption that lncRNAs are deeply important.

**The minimalist position** says that the genome is leaky — RNA polymerase II is a promiscuous enzyme that initiates transcription from many cryptic promoters and produces RNA from many places it should not — and that the bulk of cataloged lncRNAs are exactly the kind of low-abundance, poorly conserved, weakly expressed transcripts you would expect from such leakiness. On this view, perhaps a few hundred to a few thousand of the cataloged lncRNAs are genuinely functional, and the rest are noise. The minimalist position is associated with evolutionary geneticists who emphasize sequence conservation as the gold standard for functionality and who point out that most cataloged lncRNAs show essentially no conservation outside primates.

\[Pause.\]

The honest answer is probably **somewhere in between**, and the field is in the slow process of moving from theology to empiricism on this question. Here is what we know.

**First**, there is real evidence that some lncRNAs do important regulatory things — XIST is the unambiguous example, and there are dozens more where loss-of-function studies show real phenotypes. So the functional fraction is not zero.

**Second**, there is real evidence that many transcripts in the catalogs are unstable, low-abundance, and likely incidental. When you do careful steady-state measurements of lncRNA copy number per cell, many cataloged lncRNAs show up at less than one copy per cell on average, which is hard to reconcile with a regulatory function. If your "regulator" is present in fewer copies than the cells it is supposed to regulate, the math gets hard.

**Third**, sequence conservation is informative but not decisive. Many lncRNAs that are clearly functional in one species — XIST, for example, in placental mammals — have little or no conservation outside their immediate lineage. So lack of conservation does not prove lack of function; it just makes function harder to argue for. Conversely, presence of conservation is a strong positive signal: if a noncoding sequence has been preserved across a hundred million years of evolution against the constant drift of point mutations, something is keeping it that way, and that something is probably function.

**Fourth**, and most importantly, the modern empirical test is **CRISPR screens**. With CRISPR interference and CRISPR activation tools, you can now selectively suppress or activate the transcription of thousands of lncRNAs in parallel and ask which ones, when perturbed, cause a measurable cellular phenotype — growth defects, drug resistance, differentiation changes, anything you can score in a pooled screen. Several large-scale CRISPR screens of lncRNAs have now been published — from Stanley Qi's lab, from Eric Lander's lab, from Jonathan Weissman's lab, from others. The general pattern is that **a meaningful minority of lncRNAs show a phenotype in any given screen — perhaps five to fifteen percent of those tested, depending on the assay**. The rest do not show measurable effects under the conditions tested.

\[Pause.\]

Here is the slogan. **The ENCODE-era claim that most of the genome is biochemically active does not mean most of the genome is functional. Many lncRNA transcripts are probably noise. Some are clearly crucial. The exact fraction is unknown and depends on how you define "functional." CRISPR screens are starting to give empirical estimates: typically a single-digit to low-double-digit percentage of cataloged lncRNAs show measurable phenotypes under any specific assay condition. That fraction might be an underestimate — context-specific lncRNAs may not score in standard screens — or it might be an overestimate — some hits may be artifacts. The honest answer is: some big, some small, and we are still figuring out which is which.**

What I want you to take from this segment is intellectual honesty. The lncRNA field has been, for the last decade, in the same kind of overheated phase that the microbiome field went through ten years ago — wild claims, rapid promotion of new transcripts to importance, papers that overstate functional inferences, hype cycles followed by reproducibility concerns. That does not mean the underlying biology is fake. It means the field is young, the methods are immature, and the signal-to-noise ratio in published papers is, frankly, lower than in well-established areas of cell biology. As an educated consumer of this literature, you should approach claims of lncRNA function with the same critical mindset you would bring to any new area: ask for the loss-of-function evidence, ask whether the lncRNA is conserved, ask whether the phenotype is rescued by re-expression, ask whether the mechanism has been tested orthogonally. The good lncRNA papers do all of those things. The hyped ones often do not.

We are now at the one-hour mark of this lecture. Let us take a break.

\[BREAK\]

---

## SEGMENT 10 — Mechanisms — scaffolds, guides, decoys, and the four-mode model

Welcome back. Now that we have surveyed the lncRNA landscape — definitions, famous examples, catalog size, functional uncertainty — let us go deeper into the mechanisms. **How** does a long noncoding RNA actually do its job? The field has converged on roughly four mechanistic modes, and most proposed lncRNA functions can be classified into one or more of these modes. They are not mutually exclusive — a single lncRNA can act through multiple mechanisms simultaneously — but they are a useful mental framework.

**Mode one: scaffold.** A scaffold lncRNA serves as a physical platform that brings together multiple proteins or complexes that need to be co-localized in space. HOTAIR is the textbook scaffold — it binds PRC2 on one end and LSD1 on another end and brings these two chromatin-modifying complexes together at target loci. The lncRNA does not do the chemistry; it organizes the machinery. NEAT1 is another scaffold — its long isoform is the structural backbone of the paraspeckle, holding together the protein components of that nuclear body. The scaffold mode is fundamentally about **bringing things together**. The lncRNA is the assembly hub.

**Mode two: guide.** A guide lncRNA directs a protein complex to a specific location in the genome or in the cell. XIST is the prototype guide — it physically coats the X chromosome and recruits silencing complexes to that specific location. Many of the chromatin-associated lncRNAs that recruit Polycomb or other modifiers to particular target loci are operating in guide mode. The guide mode is fundamentally about **delivering machinery to an address**. The lncRNA is the homing beacon.

\[Pause.\]

**Mode three: decoy.** A decoy lncRNA soaks up other molecules — proteins or RNAs — and prevents them from acting on their normal targets. The most famous example is the **competing endogenous RNA** model, abbreviated **ceRNA**, in which a lncRNA contains binding sites for a microRNA and acts as a sponge that sequesters the microRNA away from its mRNA targets. By soaking up the microRNA, the lncRNA effectively derepresses the microRNA's normal targets. There has been a lot of debate about whether the ceRNA mechanism is real at physiologically relevant lncRNA abundances — for the sponge to work, you need enough lncRNA molecules to titrate enough microRNAs to make a difference, and for most lncRNAs the math does not check out. But for high-abundance lncRNAs in particular contexts, the decoy mechanism is plausible. Decoys can also work against proteins — a lncRNA can sequester a transcription factor away from its DNA targets, for example.

**Mode four: enhancer-like.** A subset of lncRNAs appear to function as transcriptional activators in cis or in trans, often through interactions with mediator complex or with cohesin, often through influencing the three-dimensional organization of chromatin. Many enhancer RNAs — which we will discuss in detail in the next segment — fall into this category. Enhancer-like lncRNAs often work in cis, meaning they influence the expression of genes near where they are transcribed, by promoting chromatin loops or by stabilizing the assembly of transcription machinery at nearby promoters.

\[Pause.\]

Here is the slogan I want you to carry. **Scaffolds bring things together. Guides deliver things to addresses. Decoys soak things up. Enhancer-like lncRNAs activate transcription. Most lncRNA mechanistic models fit into one of these four modes, and many lncRNAs probably combine them.** That four-mode framework is not a complete biology — there are mechanisms outside it, including direct catalytic roles for some noncoding RNAs and structural roles in subnuclear bodies — but it is the dominant mental model in the field.

A few things to keep in mind as you read mechanistic papers. **First, demonstrating a mechanism is hard.** A typical lncRNA mechanism paper does some combination of: knock down the lncRNA and look for phenotypes, immunoprecipitate proteins and look for associated RNAs, immunoprecipitate the RNA and look for associated proteins or chromatin, do crosslinking experiments to find direct binding sites, do reporter assays to test functional regions, and try to rescue the phenotype by re-expressing wild-type or mutant lncRNA. Each of these steps has technical pitfalls. RNA-protein interactions especially are easy to detect in vitro at concentrations that may not reflect cellular conditions. The HOTAIR-PRC2 story has been challenged on exactly these grounds: some labs have argued that PRC2 binds many RNAs nonspecifically and that the proposed HOTAIR-PRC2 specificity has been overstated.

**Second, mechanism papers often overreach.** It is common to see a paper that demonstrates an lncRNA is required for a phenotype, demonstrates a physical interaction with some protein complex, and then concludes that the lncRNA acts by recruiting that complex — without demonstrating that recruitment is the actual causal mechanism. Loss-of-function plus interaction is not the same as loss-of-function-due-to-loss-of-interaction. Establishing that requires more rigorous experiments — point mutations in the lncRNA that disrupt the interaction but not the molecule, rescue experiments that separate the binding function from other functions, careful kinetics. These rigorous follow-ups are not always done.

**Third, the mechanistic categories can blur.** A lncRNA can be a scaffold for one complex and a guide for another and a decoy for a microRNA, all simultaneously. The categories are useful for teaching but should not be applied too rigidly when reading the primary literature.

\[Pause.\]

The mechanistic toolkit for lncRNA biology is also tightly intertwined with subcellular localization. **Where in the cell a lncRNA goes shapes what it can do.** Nuclear lncRNAs tend to work as scaffolds and guides for chromatin and nuclear bodies. Cytoplasmic lncRNAs tend to work as decoys for microRNAs and as regulators of mRNA stability or translation. Chromatin-associated lncRNAs work in cis on their gene of origin. Membrane-associated lncRNAs can regulate signaling pathways. The mechanism follows the address.

So with the mechanisms in hand, let us look at how lncRNAs show up in disease, because that is where a lot of the field's clinical attention has been focused.

---

## SEGMENT 11 — lncRNAs in disease — imprinting disorders, cancer, and clinical relevance

lncRNAs show up in disease in two general ways. First, **mutations in lncRNA genes** can cause inherited disorders or contribute to disease susceptibility. Second, **changes in lncRNA expression** are widespread in cancer and other diseases, sometimes as drivers and sometimes as bystanders.

Let me give you the major examples.

**H19 and imprinting disorders.** Remember H19, the first early lncRNA from 1990? H19 is part of the imprinted IGF2-H19 locus on chromosome 11p15, one of the most heavily studied imprinting regions in the human genome. The locus contains, at minimum, the protein-coding gene IGF2, expressed from the paternal allele, and the lncRNA H19, expressed from the maternal allele, with a complex regulatory machinery involving CTCF binding, differential methylation, and several long-range interactions. Disruption of this imprinting machinery causes two opposite developmental syndromes. **Beckwith-Wiedemann syndrome** is an overgrowth disorder, with macroglossia and increased cancer risk, caused by loss of imprinting that leads to biallelic IGF2 expression. **Silver-Russell syndrome** is the mirror image — a growth-restriction disorder caused by abnormalities that reduce IGF2 expression. H19 is a central player in the regulatory circuit of this locus, and changes to H19 expression and methylation are direct biomarkers of these disorders.

\[Pause.\]

**MALAT1 in cancer.** MALAT1 was first identified through its association with metastasis in non-small-cell lung cancer, and its name reflects that origin. Across many subsequent studies, MALAT1 expression has been correlated with aggressive cancer behavior in lung, breast, colorectal, prostate, and many other tumor types. Whether MALAT1 is a driver of metastasis or just a passenger marker is debated — the knockout mouse studies suggest the molecule is not strictly required for normal physiology, but in tumor contexts elevated MALAT1 may contribute to invasive behavior through effects on alternative splicing of pro-metastatic transcripts. MALAT1 is one of the few lncRNAs that has been seriously pursued as a therapeutic target — there are antisense oligonucleotide programs in preclinical and early clinical development that aim to knock down MALAT1 in tumors.

**HOTAIR in cancer.** HOTAIR overexpression has been reported in many cancers, particularly breast cancer, where high HOTAIR expression correlates with aggressive disease and poor prognosis. The proposed mechanism is that HOTAIR redistributes PRC2 to abnormal target loci, causing inappropriate silencing of tumor suppressor genes. As with many lncRNA cancer associations, the causality is debated — is high HOTAIR a cause of cancer aggressiveness or a consequence of it? Some papers argue cause; others argue marker. The biology is real; the precise interpretation is contested.

**PVT1, ANRIL, GAS5, and a long list of others.** There is a growing catalog of lncRNAs that have been associated with cancer, cardiovascular disease, neurodegeneration, and other conditions. Some of these associations are robust and mechanistically plausible. Some are based on a single underpowered study and have not held up to replication. The general state of the lncRNA-in-disease literature is similar to the broader functional fraction debate: many associations, variable evidence quality, some clearly real, some probably not.

\[Pause.\]

**lncRNAs and GWAS.** One of the more striking observations from human genetics is that **a large fraction of common disease-associated genetic variants identified by GWAS fall in noncoding regions of the genome**, and many of these noncoding regions contain or are near lncRNAs. The variants typically do not change protein sequence; they modulate regulatory elements, often affecting expression of nearby genes — which can include lncRNAs. So lncRNAs are increasingly being considered as the mediators between genetic variation and disease, even when they themselves are not directly mutated. ANRIL, mentioned earlier, sits at the chromosome 9p21 locus that is one of the strongest GWAS hits for coronary artery disease, and the variants are thought to act in part through effects on ANRIL expression and function.

Here is the slogan. **lncRNAs are deeply entangled with human disease — through direct mutations in imprinted regions like H19, through expression changes in cancer for transcripts like MALAT1 and HOTAIR, and through their role as the likely mediators of many GWAS signals in the noncoding genome. The clinical relevance of lncRNAs is real, but the field is still in the early stages of distinguishing the lncRNAs that are causal drivers from those that are correlated markers.**

The clinical relevance also drives therapeutic interest. Because lncRNAs are RNAs, they can in principle be targeted with antisense oligonucleotides and small interfering RNAs — the same kinds of molecules that have been developed as drugs for protein-coding genes. We will come back to that therapeutic angle in Segment 14. For now, let us step over to a category we have only mentioned in passing — enhancer RNAs.

---

## SEGMENT 12 — Enhancer RNAs — functional or noise from open chromatin?

Enhancer RNAs, abbreviated **eRNAs**, are a category of short noncoding transcripts produced at active enhancer elements. They were noticed in the late 2000s and described in earnest starting around 2010, in particular through work from Michael Rosenfeld's lab at UCSD and Tom Maniatis's lab at Columbia. The basic observation is that when you map nascent RNA — RNA being actively transcribed, captured by techniques like GRO-seq or PRO-seq — you find that **active enhancers are themselves sites of bidirectional RNA polymerase II transcription**. The enhancer fires Pol II in both directions, producing short, unstable, often unspliced and non-polyadenylated RNA transcripts. These are the eRNAs.

eRNAs are different from canonical lncRNAs in some important ways. They are typically **shorter** — often a few hundred to a few thousand nucleotides. They are typically **unstable** — they get degraded quickly by the exosome and the nuclear surveillance machinery, so steady-state levels are low. They are typically **bidirectional** — produced in both directions from the same enhancer locus. They are typically **unspliced and unpolyadenylated**, or only weakly so. They look more like transcriptional byproducts than like processed transcripts.

\[Pause.\]

The big question for eRNAs is: are they functional, or are they noise?

The case for function rests on several lines of evidence. eRNAs are tightly correlated with enhancer activity — strong enhancers produce more eRNA than weak enhancers. eRNA production tracks the kinetics of target gene induction — when an enhancer activates its target gene, the eRNA appears quickly. Some careful knockdown experiments have shown that knocking down a specific eRNA reduces expression of the enhancer's target gene, suggesting the eRNA itself is contributing to the activating function. There are proposed mechanisms — eRNAs might stabilize the cohesin complex at chromatin loops, might help recruit mediator, might function as scaffolds for transcription factor assembly at enhancers.

The case for noise rests on the alternative interpretation. **Once an enhancer is open and decorated with active chromatin marks, RNA polymerase II is going to land on it and transcribe it incidentally**, because Pol II is a promiscuous enzyme that initiates at any reasonably permissive chromatin state. On this view, the eRNA is simply the byproduct of the enhancer being active — a kind of transcriptional smoke from the fire — and the eRNA itself is not functional. The cohesin and mediator effects of "knocking down" an eRNA may instead reflect physical perturbation of the enhancer DNA itself, which would happen whether or not the RNA mattered.

\[Pause.\]

Here is the analogy. **eRNAs are transcribed at active enhancers, in both directions, at relatively low and unstable abundance. Either they are functional regulatory transcripts that help the enhancer do its job, or they are essentially the exhaust of the enhancer — the enhancer is open, Pol II passes through, a bit of RNA gets made on the way past. The truth is probably some of both, with the balance depending on the specific enhancer and the specific cell context.**

There is real biology in some eRNAs — a handful have been carefully demonstrated to act as functional molecules required for enhancer function. There is also strong reason to suspect that many eRNAs are byproducts of enhancer activity rather than themselves regulatory. The field has moved toward a nuanced position: eRNA production is a useful marker of enhancer activity, even when the eRNA itself is not the active molecule. Looking at eRNA in genome-wide assays is now a standard way to identify which enhancers are firing in which cell types, regardless of whether the RNA itself is the functional output.

eRNAs are also clinically relevant in a specific way. **Cancer-associated variants in noncoding regions often fall in or near enhancers, and those variants are often detected through their effects on eRNA production.** Some recent work has used eRNA mapping as a way to identify the regulatory consequences of cancer-associated noncoding mutations.

One last note on eRNAs. The line between "enhancer RNA" and "long noncoding RNA" is fuzzy. Some lncRNAs originate from enhancer-like elements; some eRNAs are stable enough to look like proper lncRNAs. The two categories overlap. Some authors lump them together; others insist on distinguishing them. As a reader of the literature, just know that the boundary is blurry and that an "eRNA" in one paper might be a "lncRNA" in another.

That concludes our tour of the canonical lncRNA territory. Next we are going to leave the linear world entirely and look at a class of RNA molecules that came as a surprise — RNA molecules where the 3 prime end is ligated back to the 5 prime end, forming a covalent loop.

---

## SEGMENT 13 — Circular RNAs — the 2013 surprise and the back-splicing twist

In 2013, two papers — one from Nikolaus Rajewsky's lab at the Max Delbruck Center in Berlin, the other from Julia Salzman at Stanford — independently reported a class of RNA molecules that had been hiding in plain sight in RNA-seq data. The molecules were called **circular RNAs**, or **circRNAs**, and they had a topology that violated the textbook picture of how RNA processing works. In a circRNA, the 3 prime end of one exon is covalently joined to the 5 prime end of another exon in such a way that the resulting molecule has no free ends — it is a covalently closed loop.

The mechanism by which this happens is called **back-splicing**. In conventional splicing, the spliceosome joins the 3 prime end of an upstream exon to the 5 prime end of a downstream exon, moving linearly through the pre-mRNA from 5 prime to 3 prime. In back-splicing, the spliceosome instead joins the 3 prime end of a downstream exon to the 5 prime end of an upstream exon — reversing the normal direction — producing a circle. Back-splicing is favored in certain genomic contexts, particularly where intronic Alu repeats flank the participating exons and can base-pair with each other to bring the donor and acceptor sites into proximity.

\[Pause.\]

The reason circRNAs went unnoticed for so long was that they did not show up in standard RNA-seq analyses. Most RNA-seq pipelines select poly-A-tailed RNAs, and circRNAs have no poly-A tail because they have no free 3 prime end. They also do not get cataloged by alignment software that assumes a linear transcript geometry — a back-splice junction looks weird to a standard aligner and often gets discarded as an artifact. It took specialized analyses that explicitly looked for back-splice junctions to reveal that circRNAs are everywhere. Tens of thousands of circRNAs have now been cataloged in human and other species. Some genes produce more circRNA than linear mRNA from their loci. CircRNAs are particularly abundant in the brain, where they accumulate to high levels in neurons.

Here is the analogy. **CircRNAs are the topology surprise. The cell had been making RNA molecules with closed loops — no free ends, no poly-A tail — and we missed them for decades because our methods assumed RNA had ends. Once people looked specifically for back-splice junctions, circRNAs turned out to be ubiquitous, abundant in some tissues, and present in essentially every cell type examined.**

What do circRNAs do? Several functions have been proposed, with varying levels of evidence.

\[Pause.\]

**Function one: microRNA sponges.** The most famous example is **CDR1as**, also called **ciRS-7**, a brain-enriched circRNA that contains over seventy binding sites for microRNA miR-7. Because of its high abundance and the density of miR-7 sites, CDR1as is thought to act as a sponge that titrates miR-7 away from its mRNA targets. This is the cleanest example of the microRNA-sponge mechanism in any noncoding RNA, and it provided early evidence that circRNAs could have real regulatory functions through the decoy mechanism.

**Function two: protein scaffolds.** Some circRNAs have been shown to bind specific proteins and to act as scaffolds that bring those proteins together, similar to the scaffold mode for linear lncRNAs.

**Function three: peptide translation.** Several circRNAs have been shown to be translated, despite lacking a 5 prime cap, through internal ribosome entry sites or through m6A-dependent cap-independent translation mechanisms. The peptides produced are typically short and the biological significance is in many cases unclear, but the phenomenon is real — circRNAs can serve as templates for small peptide production.

**Function four: still mysterious.** Many circRNAs have no known function. They are present at appreciable levels, they are stable — circles resist exonucleases because there are no ends to chew — and they are produced in specific patterns across tissues, but no one has yet figured out what they do. The same functional fraction debate that applies to linear lncRNAs applies to circRNAs.

\[Pause.\]

CircRNAs have one feature that makes them clinically attractive: **stability**. Because they lack free ends, they are resistant to the exonucleases that degrade linear RNAs, and they tend to be more stable than their linear mRNA counterparts. This makes circRNAs interesting both as biomarkers — circulating circRNAs in blood are being explored as cancer diagnostics — and as therapeutic platforms. Synthetic circular RNA constructs are being engineered for vaccine and protein-replacement applications, taking advantage of their stability.

The slogan for circRNAs. **CircRNAs are the surprise topology — RNA molecules where the 3 prime end is ligated back to the 5 prime end through back-splicing, forming a covalent loop with no free ends. Some sponge microRNAs, some scaffold proteins, some translate into small peptides, and many remain mysterious. They were missed for decades because our standard methods assumed linear RNA geometry. Once we looked, they were everywhere — especially in the brain.**

---

## SEGMENT 14 — lncRNAs as therapeutic targets — ASOs, RNAi, and the MALAT1 trials

The realization that lncRNAs are involved in disease has driven serious interest in therapeutically targeting them. Unlike protein targets, which require small molecules or biologics that bind specific protein structures, RNA targets can be hit with a generic class of molecules called **antisense oligonucleotides**, abbreviated **ASOs**. ASOs are short, chemically modified DNA-like molecules that are designed to base-pair with a specific RNA target. When an ASO binds its target RNA, it can either recruit the cellular enzyme **RNase H**, which cleaves the RNA in the RNA-DNA hybrid, or it can block the function of the RNA through steric interference. ASO drugs are now a mature pharmaceutical class — there are FDA-approved ASOs for spinal muscular atrophy (nusinersen), Duchenne muscular dystrophy (eteplirsen), and other genetic diseases. The same chemistry can in principle be turned against lncRNAs.

The most advanced lncRNA-targeting therapeutic program has been against **MALAT1**. Because MALAT1 is so abundant and so often upregulated in tumors, several biotech and pharma groups have developed ASOs that target MALAT1 for degradation. Preclinical studies in mouse cancer models have shown that MALAT1 knockdown can reduce metastasis in some tumor settings. Early-stage clinical work has been pursued by groups including Ionis Pharmaceuticals, which has expertise in ASO development. As of the early 2020s, MALAT1-targeting ASOs were in or approaching clinical trials, though the field has not yet produced a clear approved drug against any lncRNA target.

\[Pause.\]

The therapeutic targeting of lncRNAs has some genuine attractions and some genuine challenges.

**On the attractive side**, lncRNAs are often cell-type-specific in their expression, which means an ASO targeting a lncRNA can in principle act selectively on the cell types that express it, with less off-target activity in normal tissues. lncRNAs are often dysregulated in disease, which provides a clean therapeutic rationale. ASO chemistry is mature, the development path is well-trodden, and the technology for delivering oligonucleotides to specific tissues — particularly the liver, where lipid nanoparticles and GalNAc conjugates have been very successful — is improving rapidly.

**On the challenging side**, many lncRNAs are nuclear, and getting ASOs into the nucleus efficiently is harder than getting them to cytoplasmic targets. Many lncRNAs are present at low copy numbers, which raises the question of whether modest knockdowns will have meaningful biological effects. The functional uncertainty around many lncRNAs makes target validation harder than for protein-coding genes — if you cannot say with confidence what a lncRNA does, you cannot easily predict what knocking it down will accomplish. And the conservation issue makes it harder to validate targets in animal models — a lncRNA that is interesting in humans may not exist in mice in a recognizable form, which complicates preclinical development.

\[Pause.\]

There is also active interest in lncRNAs as **biomarkers** rather than as therapeutic targets. Because lncRNAs are often cell-type-specific, the presence of a particular lncRNA signature in a blood sample, urine sample, or tumor biopsy can serve as a diagnostic indicator of disease type, stage, or response to treatment. Several lncRNA-based diagnostic tests have been developed and commercialized, particularly in oncology, although none has yet become a standard-of-care clinical test on the scale of, say, the protein-based PSA test for prostate cancer.

The therapeutic and diagnostic interest in lncRNAs feeds back into the basic-science discovery pipeline. When a lncRNA shows promise as a target, more resources flow into understanding its mechanism, and that understanding can refine the therapeutic strategy. The bidirectional flow between mechanism and medicine is one of the things that has kept the lncRNA field active even through the periods when the basic biology was contested.

Here is the slogan. **lncRNAs can be drugged. ASOs and RNAi are the natural therapeutic modalities for RNA targets, and the chemistry is mature. MALAT1-targeting ASOs are in clinical development. The challenges are nuclear delivery, target validation, and the conservation gap between human and animal models. The opportunity is large, and the field is still very early.**

We turn now to the conservation question itself, which sits at the heart of why lncRNA biology has been so contested.

---

## SEGMENT 15 — The conservation puzzle — why most lncRNAs do not conserve across species

If a noncoding RNA is doing something important, you would expect natural selection to preserve its sequence across evolutionary time. That is the standard logic of comparative genomics. Conserved sequence implies functional constraint; rapidly evolving sequence implies relaxed constraint, which in turn implies that mutations to that sequence do not have meaningful fitness consequences. By this logic, you would expect functional lncRNAs to show clear sequence conservation across mammals, just as functional protein-coding genes do.

But here is the awkward empirical fact. **Most cataloged lncRNAs show essentially no sequence conservation outside primates.** Some are not even conserved across closely related primate species. If you take the GENCODE catalog of seventeen thousand human lncRNAs and ask how many of them have recognizable orthologs in mouse, the answer is something like **fifteen to twenty percent** — small fraction. The protein-coding gene equivalent of that comparison would yield closer to **ninety-five percent** orthology between human and mouse. Coding genes are deeply conserved across mammals. Most lncRNAs are not.

\[Pause.\]

What do we make of this? There are essentially three positions.

**Position one: most lncRNAs are not functional.** This is the minimalist interpretation. If most lncRNAs do not conserve, that is because most of them are not under selection, which is because most of them do not do anything important. The handful of conserved lncRNAs — XIST being the prototype — are the real functional set, and the unconserved majority are noise. This view tends to be held by evolutionary geneticists and by people who think the ENCODE "biochemical activity" claim was an overreach.

**Position two: lncRNAs evolve faster than coding genes.** On this view, lncRNAs are functional but they evolve under different constraints than coding sequences. Because the functional unit of a lncRNA is often a short structural motif — a hairpin, a binding site, a localization signal — rather than a long colinear sequence like a protein coding region, much of the lncRNA can drift in sequence as long as the critical motifs are preserved. This is the **"conserved structure, not conserved sequence"** argument. Studies of lncRNAs like XIST have indeed shown that the sequence conservation is patchy, with conserved islands within an overall poorly conserved background, consistent with selection on specific functional regions.

**Position three: lncRNAs are often lineage-specific innovations.** On this view, lncRNAs are real regulators that evolve quickly because they sit at the cutting edge of regulatory innovation. New lncRNAs arise in particular lineages, take on functions in those lineages, and either get fixed or get lost over time. The lack of cross-species conservation reflects the fact that many lncRNAs are recent evolutionary additions, doing lineage-specific regulatory jobs. Human-specific lncRNAs might be doing human-specific things — perhaps contributing to human-specific brain features, for example.

\[Pause.\]

The honest answer is probably some of all three. Some lncRNAs are functional and conserved (XIST, NEAT1, some others). Some lncRNAs are functional but evolve quickly because their function depends on short motifs rather than long sequences. Some lncRNAs are lineage-specific innovations doing real but recent regulatory work. And some — probably a substantial fraction — are not functional in any meaningful sense.

Here is the slogan. **If a lncRNA is doing something important, you would expect it to be conserved across species. Most lncRNAs are not conserved. So either lncRNAs evolve fast — possible, if their function depends on short motifs rather than long stretches of sequence — or most of them are not doing much — also possible, and consistent with the broader noise-versus-signal debate.** The conservation puzzle does not have a single clean answer. It is one of the central tensions in the field.

This tension also shapes the choice of model systems. If you want to study a human lncRNA in a mouse, and the lncRNA does not exist in mouse, you have a problem. Either you have to humanize the mouse — introduce the human lncRNA gene into the mouse genome — or you have to do your functional work in human cells. Many of the recent CRISPR screens of lncRNAs have been done in human cell lines specifically because the mouse-to-human transfer is so difficult.

The conservation puzzle is one of the reasons that the basic-science lncRNA community has invested so heavily in **functional screening at scale**, which is the topic of our frontier segment. Before we get there, let me cover two more practical topics: the cataloging pipeline and the single-cell view.

---

## SEGMENT 16 — Naming, cataloging, and the LINC0000 pipeline

The bureaucracy of lncRNA cataloging is worth understanding because it shapes which transcripts you encounter in your data and how much you should trust them. There are several major catalogs, each with their own inclusion criteria and naming conventions, and they disagree with each other in instructive ways.

**RefSeq**, maintained by NCBI, is the most stringent of the major catalogs. RefSeq entries are manually curated, require evidence of consistent expression across multiple datasets, and are slow to add new lncRNAs. RefSeq lncRNAs are the safest bet — if a transcript is in RefSeq, it almost certainly exists as a real RNA molecule, even if its function is unknown. The total number of human lncRNAs in RefSeq is in the low ten thousands.

**GENCODE**, maintained jointly by Sanger, UCSC, and other centers, is the consensus catalog used by ENCODE and by most computational analyses. GENCODE is more inclusive than RefSeq — it adds new transcripts more readily based on RNA-seq evidence — but it still requires meaningful supporting data. GENCODE annotates around seventeen to twenty thousand human lncRNAs, depending on the release.

**NONCODE**, maintained by a Chinese consortium, is more permissive than GENCODE. NONCODE will include transcripts based on lower thresholds of evidence and aims to be a comprehensive catalog of all reported lncRNAs across species. The trade-off is that NONCODE includes many transcripts that may not be well-supported, and you need to apply your own filtering when working with NONCODE data.

\[Pause.\]

**LNCipedia** is another widely used catalog that aggregates lncRNAs from multiple sources and provides additional annotation. **MiTranscriptome**, **FANTOM CAT**, and **BIGTranscriptome** are other catalogs with different inclusion philosophies. The plurality of catalogs reflects the genuine uncertainty in the field about which transcripts deserve catalog status.

The naming convention for newly cataloged intergenic lncRNAs is the **LINC0000X** scheme — Long Intergenic Non-Coding RNA, with a sequential number. The HUGO Gene Nomenclature Committee assigns these names and maintains the official human gene name registry. Older lncRNAs, named before this scheme was established, retain their historical names — XIST, HOTAIR, MALAT1, NEAT1, H19, GAS5, ANRIL, PVT1, KCNQ1OT1, AIRN, and the like. The historical names are quirky and often reflect what the discoverers thought the molecule did. **HOTAIR** is "HOX Antisense Intergenic RNA," reflecting its discovery in the HOX cluster. **HOTAIRM1** is a related transcript at the HOXA cluster. **GAS5** is "Growth Arrest Specific 5," named for its upregulation when cells stop dividing. **PVT1** is "Plasmacytoma Variant Translocation 1," named for its location at a chromosomal breakpoint in cancer. Each historical name is a little window into the discovery story.

A practical point. **When you see a lncRNA name in a paper, the source catalog matters.** A LINC0000X name from GENCODE is a transcript that someone in the GENCODE process considered well-supported. A name in NONCODE alone may not have the same level of evidence behind it. When you cite a lncRNA, you should ideally cite the catalog and version you are using, just as you would cite a particular Ensembl release or a particular reference genome build.

\[Pause.\]

The cataloging process itself is worth a moment's reflection. **The lncRNA catalog is built by sequencing RNA from many cell types, assembling reads into transcripts, and applying inclusion filters.** The depth and diversity of the input RNA-seq matters — early catalogs missed transcripts that were only expressed in rare cell types or in specific developmental stages. As single-cell RNA-seq has revealed more cell-type-specific lncRNAs, the catalogs have grown. The catalog is a living document. The version you used yesterday may not be the version you use tomorrow.

Here is the slogan. **The lncRNA catalogs are field guides built from RNA-seq evidence, with different stringency from RefSeq through GENCODE to NONCODE. Modern intergenic lncRNAs get LINC0000X names from HGNC. Older lncRNAs keep their historical names. The catalog is large, growing, and partly inflated — caveat lector.**

With that practical orientation, let us look at how lncRNAs behave in the single-cell era, where their cell-type specificity becomes especially apparent.

---

## SEGMENT 17 — Single-cell lncRNAs — cell-type specificity dominates expression

One of the most striking features of lncRNA biology becomes apparent only at single-cell resolution. **Long noncoding RNAs are, on average, much more cell-type-specific in their expression than protein-coding genes are.** A typical protein-coding gene is expressed across many tissues and many cell types — sometimes at different levels, but detectable in most places. A typical lncRNA, in contrast, is expressed in only a handful of cell types, often at low levels even in those cells, and is essentially absent from the rest of the body.

This cell-type specificity has several implications. **First**, it makes lncRNAs interesting candidates for cell-type identification and classification. Single-cell RNA-seq data analyzed for lncRNA expression often shows that specific lncRNAs cleanly mark specific cell types. **Second**, it complicates the discovery and cataloging process — a lncRNA expressed only in, say, a specific subtype of cortical interneuron will never show up in bulk RNA-seq of whole brain, because its signal is diluted out. Many lncRNAs were missed by early bulk surveys precisely because they were too cell-type-specific to register against the noise of the bulk average.

\[Pause.\]

The single-cell era — which kicked off in earnest around 2015 with droplet-based platforms like 10x Chromium — has dramatically expanded our view of the lncRNA universe. Single-cell datasets routinely identify lncRNAs that are expressed in less than one percent of cells in a tissue but are highly expressed in those cells when they are expressed. Tissue atlases like the Human Cell Atlas project, which aims to comprehensively map every cell type in the human body, have included lncRNA characterization as part of their cell-type definitions.

There are some technical challenges in single-cell lncRNA analysis. Because lncRNAs are generally lower in abundance than mRNAs, they are more affected by single-cell dropout — the phenomenon where transcripts present at low copy number are sometimes missed in individual cells due to the inefficiency of single-cell capture chemistry. So a lncRNA that is truly present at one or two molecules per cell might be detected in only a fraction of the cells that actually express it. Statistical methods for handling dropout — imputation, denoising — are particularly important when analyzing lncRNA expression in single-cell data.

\[Pause.\]

Here is the slogan. **lncRNAs are, on average, much more cell-type-specific than protein-coding genes. Single-cell RNA-seq has been transformative for lncRNA biology because it lets us detect and characterize transcripts that are buried in bulk averages. Cell-type-specific lncRNAs are interesting as cell-type markers, as candidates for cell-type-specific regulatory functions, and as therapeutic targets where cell-type selectivity is desirable.**

The cell-type specificity also feeds back into the conservation and functionality debates. A lncRNA that is expressed only in a specific neuronal subtype may not be detectable in a mouse if that subtype is rare or different in mouse, even if the lncRNA exists in mouse. The lack of cross-species concordance may sometimes reflect technical limits rather than evolutionary divergence. And cell-type-specific lncRNAs are particularly hard to study with standard bulk functional assays — knocking down a lncRNA across a whole cell line averages over the cells that express it and the cells that do not, diluting any phenotype.

The combination of single-cell methods with CRISPR-based functional screens is one of the most active frontiers in lncRNA biology. Pooled CRISPR perturbations followed by single-cell readouts let you ask, in a single experiment, what happens to transcription, signaling, or differentiation across thousands of cells when each cell has a different lncRNA perturbed. The throughput and resolution that this combination provides was unimaginable a decade ago. We will close the lecture with a tour of these and other frontier methods.

---

## SEGMENT 18 — Frontiers — CRISPR screens, machine learning, and the road ahead

We have arrived at the frontier of lncRNA biology. The field is in an interesting place. The basic-science questions — how many of these transcripts are functional, what mechanisms they use, why most do not conserve across species — are still genuinely open. At the same time, the technologies for asking these questions have matured dramatically. Large-scale functional screens, single-cell methods, machine learning approaches to sequence-function relationships, and therapeutic targeting platforms are all converging on the lncRNA universe at once.

Let me walk you through what I see as the four most important frontier directions.

**Frontier one: large-scale CRISPR screens.** The most direct way to test whether a lncRNA matters is to knock it out and see if the cell cares. Modern CRISPR interference and CRISPR activation tools, combined with pooled library design and high-throughput readouts, let you do this for thousands of lncRNAs simultaneously. The earliest large-scale screens, including work from Stanley Qi and Daniel Lim's groups and the major effort from Eric Lander's lab at the Broad Institute, have begun to systematically test lncRNAs for phenotypes in cell proliferation, differentiation, drug response, and other endpoints. The general finding, as I mentioned in Segment 9, is that a meaningful but minority fraction of tested lncRNAs show phenotypes — typically single-digit to low-double-digit percentages. Each new screen adds to a growing list of functionally validated lncRNAs, and over time the field is building an empirical picture of which transcripts matter in which contexts.

\[Pause.\]

The CRISPR screen approach is the gold standard for the field right now. It is also imperfect — screens detect only the phenotypes you assay for, and a lncRNA that has subtle effects on, say, a specific stress response or a developmental transition might not score in a standard proliferation screen. Screens also depend on efficient knockdown, which can be technically challenging for lncRNAs that are present in low copy number or that have important regulatory elements at their transcription start sites. The data are getting better, but they are still a work in progress.

**Frontier two: machine learning for sequence-function prediction.** As the catalog of functionally validated lncRNAs grows, there is increasing interest in training machine learning models to predict lncRNA function from sequence alone. The hope is that a well-trained model could take a new lncRNA sequence and predict its likely subcellular localization, its likely protein binding partners, its likely chromatin associations, even its likely functional mode. This is a hard problem — lncRNA sequence is less constrained than protein sequence, and the relationship between sequence and function is more indirect — but rapid progress in protein language models like ESM and AlphaFold suggests that similar approaches applied to RNA could yield useful predictions. RNA structure prediction tools, RNA-protein interaction predictors, and lncRNA function predictors are all under active development. Whether these tools will achieve the kind of usefulness that AlphaFold has for protein structure is an open question; the consensus is cautious optimism.

\[Pause.\]

**Frontier three: lncRNAs as drug targets.** We covered this in Segment 14, but it deserves another mention here. The convergence of mature ASO chemistry, improved delivery technologies, and a growing list of functionally validated lncRNA targets is opening up therapeutic possibilities. The MALAT1 program is the most advanced, but other lncRNA targets are being pursued for cancer, cardiovascular disease, and other indications. The path from lncRNA discovery to clinical drug is still long, but it is no longer hypothetical. Several lncRNAs are now in active drug development pipelines, and the first approved lncRNA-targeting drug is probably a matter of years rather than decades.

**Frontier four: integration with other regulatory layers.** lncRNAs do not act in isolation. They interact with chromatin, with proteins, with other RNAs, with nuclear bodies, with the three-dimensional organization of the genome. Understanding what a lncRNA does in a cell requires placing it in the context of all these other regulatory systems. The integration of lncRNA studies with chromatin profiling — ChIP-seq, ATAC-seq, Hi-C — with epitranscriptomic mapping like m6A profiling, with proteomic profiling of lncRNA-bound proteins, and with single-cell multi-omic methods, is producing a much richer picture than any single technique alone. The lncRNA field is becoming part of a broader integrative regulatory biology, rather than its own siloed subdiscipline.

\[Pause.\]

A few more things I want you to keep an eye on as the field develops. **Small ORFs.** As I mentioned in Segment 2, some lncRNAs encode small peptides through short open reading frames. Better methods for detecting translated smORFs — ribosome profiling at single-codon resolution, mass spectrometry of small peptides — are revealing that the line between "noncoding" and "coding-with-tiny-peptide" is fuzzier than the field used to think. Some fraction of lncRNAs will likely be reclassified as coding genes for small proteins as the data improve.

**RNA modifications on lncRNAs.** The epitranscriptomics field, which you might know from the m6A lecture in this series, has revealed that mRNAs and other RNAs carry chemical modifications that affect their function. lncRNAs also carry these modifications — m6A in particular has been mapped to lncRNAs and shown to regulate their stability and function. The epitranscriptome adds another layer to lncRNA biology that we are just starting to characterize.

**Cross-species lncRNA discovery.** Even though most lncRNAs are not conserved across species, there are interesting lncRNAs in many species that have not been well-studied. Comparative lncRNA biology — looking at how lncRNAs work in non-model organisms, how they evolve, how they shape lineage-specific traits — is an open area with relatively little crowding.

\[Pause.\]

Here is the closing slogan. **The frontier of lncRNA biology is empirical and integrative. Large CRISPR screens are sorting the functional from the noisy. Machine learning is trying to predict function from sequence. Therapeutic targeting is moving lncRNAs from basic science to drug development. And integration with chromatin, splicing, modification, and 3D genome data is placing lncRNAs in their proper context as one layer of a multi-layered regulatory system. The field has moved past its initial overheated phase. It is settling into a more mature, more empirical, more integrative posture, and the next decade should produce a much clearer picture of which lncRNAs do what.**

Let me close with the framing I gave you at the start. **Only about two percent of the genome encodes protein. Much of the rest is transcribed into noncoding RNAs. The long noncoding RNAs — the mRNA-like transcripts longer than two hundred nucleotides that do not produce proteins — are the regulatory dark matter. Some of them are essential and beautifully characterized: XIST silences a chromosome, NEAT1 organizes a nuclear body, HOTAIR scaffolds chromatin complexes. Most are still mysterious: cataloged but unfunctional, present but unproven, abundant but unexplained. The field is doing the slow, careful work of separating signal from noise. It is one of the most exciting and most contested areas in modern molecular biology, and you are arriving at exactly the right moment to participate in it.**

Thanks for your attention. Take some questions, and then we are done.

---

## APPENDIX — Quick reference, key references, terms, and common confusions

This appendix collects a few items that you, the speaker, may want to have at hand for questions and follow-up.

**Key historical references** (these are the canonical citations you should know):

- **H19 discovery** — Brannan, Dees, Ingram, and Tilghman, *Molecular and Cellular Biology*, 1990. The first characterization of H19 as a noncoding transcript in the imprinted IGF2 region.
- **XIST discovery** — Brown, Ballabio, Rupert, Lafreniere, Grompe, Tonlorenzi, and Willard, *Nature*, 1991. The identification of XIST as the X-inactive-specific transcript. Brockdorff's group published their parallel identification in *Cell* the same year.
- **HOTAIR** — Rinn, Kertesz, Wang, Squazzo, Xu, Brugmann, Goodnough, Helms, Farnham, Segal, and Chang, *Cell*, 2007. The introduction of HOTAIR and the scaffold model.
- **MALAT1** — Ji, Diederichs, Wang, Bohm, Pahl, Bruderlein, Schmitt, Heiss, Reichle, Lochmuller, Hofstaedter, Hofmann, and Mertens, *Oncogene*, 2003. The original characterization of MALAT1 in lung adenocarcinoma metastasis.
- **NEAT1 and paraspeckles** — Clemson, Hutchinson, Sara, Ensminger, Fox, Chess, and Lawrence, *Molecular Cell*, 2009. The demonstration that NEAT1 is required for paraspeckle assembly.
- **Circular RNAs** — Memczak, Jens, Elefsinioti, Torti, Krueger, Rybak, Maier, Mackowiak, Gregersen, Munschauer, Loewer, Ziebold, Landthaler, Kocks, le Noble, and Rajewsky, *Nature*, 2013. And Salzman, Gawad, Wang, Lacayo, and Brown, *PLoS ONE*, 2012. The papers that revealed widespread circular RNA expression.
- **ENCODE main paper** — The ENCODE Project Consortium, *Nature*, 2012. The flagship paper with the eighty-percent biochemical activity claim.

**Glossary of the key terms**:

- **lncRNA** — Long noncoding RNA. RNA polymerase II transcript longer than two hundred nucleotides that does not encode a protein.
- **lincRNA** — Long intergenic noncoding RNA. A lncRNA that does not overlap any protein-coding gene.
- **eRNA** — Enhancer RNA. A typically short, often unstable, often bidirectional transcript produced from an active enhancer element.
- **circRNA** — Circular RNA. An RNA molecule with no free ends, formed by back-splicing.
- **PRC2** — Polycomb Repressive Complex 2. The chromatin-modifying complex that lays down the H3K27me3 silencing mark; a frequent proposed binding partner for lncRNAs.
- **XIST** — X-Inactive Specific Transcript. The lncRNA that triggers and maintains X chromosome inactivation in placental mammals.
- **HOTAIR** — HOX Antisense Intergenic RNA. The scaffold lncRNA from the HOXC cluster that recruits PRC2 to HOXD in trans.
- **MALAT1** — Metastasis-Associated Lung Adenocarcinoma Transcript 1. A highly abundant, conserved, speckle-localized lncRNA.
- **NEAT1** — Nuclear Enriched Abundant Transcript 1. The architectural lncRNA of the paraspeckle.
- **GENCODE** — The consensus human and mouse transcript annotation catalog used by ENCODE.
- **LINC0000X** — The HGNC naming convention for newly cataloged intergenic lncRNAs.
- **DRACH** — The sequence motif for m6A deposition; not lncRNA-specific but relevant because lncRNAs also carry m6A modifications.
- **Back-splicing** — The non-canonical splicing event in which a downstream donor is joined to an upstream acceptor, producing a circular RNA.
- **ceRNA** — Competing Endogenous RNA. The hypothesis that some lncRNAs act by sponging microRNAs away from their mRNA targets.

**Common confusions to clarify in Q&A**:

- *Are all noncoding RNAs lncRNAs?* No. lncRNAs are specifically Pol II transcripts longer than two hundred nucleotides. Smaller noncoding RNAs — tRNAs, rRNAs, microRNAs, snoRNAs, snRNAs, piRNAs — are separate categories with their own machinery and functions.
- *Are lncRNAs the same as untranslated regions?* No. UTRs are the noncoding portions of mRNAs — the regions flanking the coding sequence on the same molecule. lncRNAs are separate, standalone RNA molecules that do not have a coding sequence at all.
- *If a lncRNA is in the catalog, does that mean it does something?* Not necessarily. Catalog presence indicates that the transcript was detected with some confidence; it does not guarantee biological function. Functional validation requires loss-of-function studies, CRISPR screens, or mechanistic characterization.
- *Does the eighty-percent biochemical activity claim from ENCODE mean eighty percent of the genome is functional?* No. "Biochemically active" means transcribed, bound by transcription factors, in open chromatin, or otherwise showing some assay-detectable activity. Functionality in the evolutionary sense — under selection — applies to a much smaller fraction.
- *Are circRNAs a type of lncRNA?* They overlap. Many circRNAs are derived from exons of protein-coding genes and so are not strictly "noncoding" in the lncRNA sense. Some circRNAs translate into peptides. They are usually treated as a separate category but with overlap into the lncRNA world.

**Suggested further reading for motivated students**: the reviews by John Rinn and Howard Chang in the *Annual Review of Biochemistry*, the more skeptical reviews by Harm van Bakel and Tim Hughes on transcriptional noise, the Lander lab CRISPR screen papers on lncRNA functional importance, and the original ENCODE papers and their critiques. The field moves fast; recent reviews should be preferred to older ones for current consensus.

**Timing notes for the speaker**: this script runs about 12,000 words. At 120 words per minute it is approximately one hundred minutes of spoken material plus the planned break after Segment 9. Adjust pacing as needed. The marked \[Pause.\] beats are deliberate; use them. The mid-point \[BREAK\] is your audience's water-and-bathroom moment — typically five to ten minutes is right. Good luck.

