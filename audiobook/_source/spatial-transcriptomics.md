# Spatial Transcriptomics

**A 2-hour undergraduate genomics lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The address problem — what you lose when you dissociate a tissue

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about spatial transcriptomics — a family of methods that measures gene expression in a tissue while preserving the physical location of every measurement. You already know single-cell sequencing. You know how to take a piece of tissue, dissociate it into a soup of cells, barcode each cell, sequence them, and get back a list of which cell types are present and in what proportions. That technology, as we discussed, was a revolution. It changed every question you could ask about a tissue.

But there is one question single-cell sequencing fundamentally cannot answer. And it's a question biologists desperately want to answer. The question is: **where were these cells**? When you dissociated the tissue, you destroyed its architecture. You took a beautiful three-dimensional arrangement of cells — neurons in their cortical layers, immune cells infiltrating a tumor margin, fibroblasts arranged around a blood vessel — and you turned it into a homogeneous slurry. Every cell came out the other side as a single dot in some abstract expression space, completely divorced from its neighbors, its tissue, its anatomical context. You know which cells were there. You have no idea where.

Spatial transcriptomics is the technology that puts the address back on every measurement. It tells you not just "this is a T cell, this is a tumor cell, this is a fibroblast," but "this T cell was sitting right next to this tumor cell, and this fibroblast was three cell-diameters away, and the macrophages were clustered in this corner of the section while the B cells lined the edges." It is single-cell with the address attached. The cells become not just types but tenants of a place. And in biology, place is everything.

\[Pause.\]

Here is the analogy I want you to hold for the next two hours. Imagine you walk into a city — let's say Paris — and you want to understand what kinds of people live there. Option one: you round up every Parisian, blindfold them, drive them to a single warehouse, and conduct a survey. You learn that the city contains bakers, lawyers, taxi drivers, students, retirees, tourists, in roughly such-and-such proportions. Useful, in a limited way. But you have no idea where in Paris each person lives or works. You don't know whether the lawyers cluster in one arrondissement, whether the bakers are evenly distributed or concentrated near the markets, whether the tourists are mostly in the Marais. You have a list of categories but no map. That is single-cell sequencing.

Option two: you walk the streets, go house by house, and record what each person does for a living and where their house sits on the map. Now you have not just a list but a geography. You can see the bakers concentrated near the boulangeries. You can see the lawyers clustering near the courts. You can see the tourists in tight rings around the monuments. You can see neighborhoods — coherent groups of people that occupy specific places and interact with each other. That second method — the door-to-door survey with addresses — is spatial transcriptomics. You preserve the geography. You get the map.

\[Pause.\]

If you walk out of here in two hours and you can do three things — one, sketch the two main families of spatial methods, sequencing-based and imaging-based, and explain what each one trades off; two, look at a Visium experiment and explain what a "spot" is, why it's about fifty-five microns across, and what it means to put a tissue section on top of a barcoded slide; three, look at any modern paper that says "spatial transcriptomics was performed" and immediately understand whether they used an array-based method or an imaging-based one, what the resolution is, and what they can and cannot conclude — then we've succeeded. Everything else hangs off those three.

A grounding fact before we go deeper. Spatial transcriptomics is built on top of single-cell sequencing the way single-cell was built on top of bulk sequencing. The chemistries are similar. The downstream computational tools are extensions of Seurat and Scanpy. The conceptual move, again, is **partition and barcode** — but this time the partition is by physical location in the tissue rather than by isolation into a droplet. Each spot on a spatial array has its own zip code, just like each droplet in 10x Chromium has its own zip code. The difference is that the spatial zip code corresponds to an X-Y coordinate on a slide, not to a cell in a tube. The barcode tells you where on the slide a transcript came from. Combine that with the H&E image of the same slide, and you know which transcripts came from which piece of tissue.

The field has two main families, and they have almost opposite trade-offs. **Sequencing-based methods** — Visium, Slide-seq, Stereo-seq — use a barcoded grid printed onto a slide. You lay tissue on top, the mRNAs leak down, hybridize to nearby barcodes, get reverse-transcribed, and you sequence the whole pool. You get the entire transcriptome — every gene the tissue was expressing — but the resolution is coarse, on the order of microns to tens of microns, often capturing several cells per spot. **Imaging-based methods** — MERFISH, seqFISH, Xenium, CosMx — use sequential rounds of fluorescent probes. You design a panel of probes that target specific transcripts, hybridize them to the tissue in rounds, image after every round, and decode the combinatorial barcode at every fluorescent dot. You get exquisite, sub-cellular resolution — you can see individual mRNA molecules at known positions inside individual cells — but you only see the genes you put on the probe panel, typically a few hundred to a few thousand at most.

Two families. Opposite trade-offs. Untargeted transcriptome at low resolution, or targeted panel at high resolution. Both went commercial between 2019 and 2023, and the field exploded. Today, no serious tissue biology paper — no atlas, no tumor microenvironment study, no developmental map — is published without at least one of these methods playing a role. Let me show you where they came from and how they work.

---

## SEGMENT 2 — Patrik Ståhl 2016 — the original "Spatial Transcriptomics" paper

The phrase "spatial transcriptomics" — the actual term, capitalized, that you'll see in the literature — was coined in 2016, in a paper from a group at the Royal Institute of Technology in Stockholm. The first author was **Patrik Ståhl**, and the senior authors were **Joakim Lundeberg** and **Jonas Frisén**. The paper appeared in Science, and although it was not the first method to attempt some form of spatial gene expression measurement, it was the first to demonstrate, in a clean and reproducible way, the central trick that all sequencing-based spatial methods now use: a slide pre-printed with a regular grid of spots, each spot carrying a unique DNA barcode that encodes its position.

The 2016 method was elegantly simple in concept. You take a glass microscope slide and you print onto its surface a grid of tiny spots. Each spot — a hundred microns across in the original method, later shrunk substantially — contains millions of copies of a synthetic DNA oligonucleotide. Every oligo in spot number one carries the same barcode sequence, call it AAAA. Every oligo in spot number two carries barcode BBBB. And so on, for every spot on the grid. The barcode at each spot is unique, and the position of each spot on the slide is recorded in advance, so a lookup table relates barcode AAAA to position (X1, Y1), barcode BBBB to position (X2, Y2), and so on for every spot.

Now you take a thin section of frozen tissue — maybe a ten-micron slice from a mouse brain — and you lay it on top of the slide. The tissue is in physical contact with the array of spots. You permeabilize the tissue with a mild detergent, which makes the cell membranes leaky, and the mRNA molecules inside the cells begin to diffuse outward and downward, contacting the surface of the slide. Each oligo on each spot has, at its free end, a stretch of poly-T — a string of T nucleotides. The poly-T captures the poly-A tail of every mRNA molecule that lands on the spot. A reverse-transcription reaction then synthesizes a cDNA copy of each captured mRNA, with the spot's barcode covalently attached to the cDNA's 5-prime end.

\[Pause.\]

When you've finished the reverse transcription, every cDNA molecule on the slide carries two pieces of information: the sequence of the original transcript, and the barcode of the spot it landed on. You collect all the cDNAs into a tube, perform the rest of a standard Illumina library prep — adapter ligation, PCR amplification, indexing — and sequence the whole library on a standard Illumina flow cell. Software then reads the spot barcode from the start of every read, looks up the X-Y position of that spot, and assigns the read's gene identity to that position on the slide. After processing millions of reads, you have, for every spot on the original grid, a complete expression profile — counts of every gene expressed in whatever cells happened to overlie that spot.

Combine that gene-expression-per-spot data with the H&E-stained image of the tissue section — taken just before or just after the spatial reaction — and you have a spatial map. You can color the spots by the expression of any gene you want and watch the gene's expression pattern light up across the tissue's anatomy. You can identify clusters of spots with similar profiles and call them regions or zones. You can ask which genes are differentially expressed between regions. You can do all the analysis you would do in a single-cell experiment, plus a layer of geography on top.

The Ståhl 2016 paper was, by today's standards, modest. The original spots were a hundred microns in diameter, which is much larger than a typical cell — each spot captured many cells' worth of RNA at once. The capture efficiency was low; only a fraction of the tissue's transcripts were recovered. The slide had only about a thousand spots total, covering a small area. But the principle worked. It was reproducible. And critically, the team patented the technology and licensed it to a company called Spatial Transcriptomics AB, which was acquired in 2018 by **10x Genomics** — the same 10x that built the Chromium droplet platform for single-cell. 10x took the Stockholm technology, scaled it dramatically, polished the chemistry, and relaunched it in 2019 as **Visium**.

\[Pause.\]

I want to dwell on the lineage for a moment, because it tells you something about how this field works. The Stockholm team built a clever piece of academic technology and proved a principle. A larger company with manufacturing scale, distribution channels, and engineering depth bought it, productized it, and made it accessible to thousands of labs around the world. Five years after the original paper, Visium had become the most widely used spatial transcriptomics platform on Earth. The path from academic invention to commercial dominance was, by biotech standards, fast — about five years, which is about the same timeline as 10x's earlier acquisition and productization of the GemCode droplet technology that became single-cell Chromium. The pattern is the same.

There's a broader pattern here too. Almost every dominant tool in genomics today went through a similar pipeline: an academic group invents the principle, a company acquires the IP and engineers it to scale, a few flagship papers in high-profile journals demonstrate the technology, the cost drops by orders of magnitude over five to ten years, and the technology becomes a routine assay. Illumina sequencing followed this trajectory. Single-cell Chromium followed this trajectory. Spatial transcriptomics followed it too. If you understand the pattern, you can almost see what's coming next — and we'll come back to that at the end.

For now, the headline of this segment: spatial transcriptomics, as a named technology, started in Stockholm in 2016 with a printed barcoded slide. The barcode-per-position trick is the conceptual core. Everything that came after in the sequencing-based family is variations on that theme — more spots, smaller spots, denser arrays, better chemistry, sharper resolution. Let's look at what 10x did with it.

---

## SEGMENT 3 — Visium — the workhorse barcoded slide

Visium launched in late 2019. By 2021 it was the dominant spatial transcriptomics platform in academic and commercial labs alike. If you read a spatial paper today and the methods say "Visium," this is what they used. Let me describe exactly what a Visium experiment looks like, because the workflow is now the de facto standard that other methods get compared to.

A Visium slide is a glass slide about the size of a standard microscope slide, with four capture areas printed on it. Each capture area is a square region about 6.5 by 6.5 millimeters, into which the Visium chemistry has printed a regular grid of barcoded spots. In the original Visium, each spot is **55 microns in diameter**, with spots arranged in a hexagonal pattern, and adjacent spots' centers are about a hundred microns apart. There are roughly **5,000 spots per capture area**, so 20,000 spots per slide if you use all four capture areas. Each spot carries millions of identical oligos, each with the same spot-specific barcode, plus a poly-T capture sequence at the free end. The barcodes are pre-printed during manufacturing, the positions of every barcode are known to 10x, and the lookup table — barcode to X-Y position — comes with the kit.

The experimental workflow goes like this. You take a fresh-frozen tissue block and cryosection it to about ten microns thick. You place a section onto one of the capture areas of the Visium slide. You stain it with H&E, the standard pathology stain, and you image it under a brightfield microscope at high magnification. This image — the H&E image — is critical for downstream analysis, because it provides the anatomical context that you'll later overlay with the gene expression data. You photograph the section while the tissue is still intact on the slide.

Then you permeabilize the tissue. The standard protocol uses a mild enzyme treatment that punches holes in the cell membranes without disrupting the tissue's morphology. The mRNAs inside the cells, freshly liberated, begin to diffuse outward. Some of them — many of them, if the chemistry is working well — find their way down to the surface of the slide, where the poly-T capture sequences on the barcoded oligos grab them by their poly-A tails. A reverse-transcription mix is then added, and reverse transcriptase synthesizes cDNA copies of all the captured mRNAs, each cDNA now carrying the spot's barcode at its 5-prime end.

\[Pause.\]

From there, the workflow is essentially standard Illumina library prep. The cDNA molecules are released from the slide, amplified by PCR, ligated to sequencing adapters with sample indices, and pooled. You load the pooled library onto an Illumina flow cell — a NovaSeq, typically, for the read depth you need — and sequence it. The resulting reads carry the spot barcode at the start, followed by the gene-derived sequence. Software demultiplexes the reads by spot barcode, maps the gene portion against a reference transcriptome, and produces, for every spot on the slide, a list of which genes were captured and how many transcripts of each. The output looks just like single-cell data — a matrix of genes by spots, with counts in every cell — except that "spots" have known X-Y positions on the slide, so you can plot expression patterns geographically.

You then overlay the gene expression data on the H&E image. The Visium analysis software (Loupe Browser, Space Ranger, and various open-source equivalents) shows you the H&E image with each spot drawn as a colored circle, with the color encoding any gene's expression you choose. Click on hippocampus marker genes, watch the hippocampus light up. Click on white matter myelin genes, watch the white matter light up. Click on a cancer marker, watch the tumor regions light up while the surrounding stroma stays dark. You can do this for any gene in the transcriptome, because Visium is untargeted — it captures every poly-A mRNA the tissue produces, not just a pre-selected panel.

Here is the picture you should have. **Visium is the gridded barcode slide — a microscope slide ruled with thousands of tiny spots, each spot carrying its own zip code; you place tissue on top, mRNAs hybridize to nearby spots, you sequence, and you reconstruct a gene-expression map of the original tissue.** That's the platform.

\[Pause.\]

Let's talk about the limitations, because they're important. The original Visium spot is **55 microns** across. A typical mammalian cell is about ten to twenty microns across. That means every Visium spot, in most tissues, captures the RNA from **about one to ten cells at once**. You don't see individual cells; you see small pools of cells. If a spot covers a tumor cell, a fibroblast, and a T cell all at the boundary of a tumor, the spot's expression profile is a mixture of all three. This is sometimes called the **resolution problem**, and it's the central trade-off of the sequencing-based family. You get the whole transcriptome — good — but you get it averaged over a small handful of cells per measurement — limiting.

The other limitation is **capture efficiency**. Of all the mRNAs in the tissue, only a fraction make it down to the slide surface and get successfully captured by the poly-T oligos. The exact number depends on tissue type, fixation, permeabilization timing, and a dozen other parameters, but estimates run from a few percent to maybe twenty percent. This means Visium data is sparser per spot than single-cell data is per cell. Lowly expressed genes — transcription factors, signaling molecules — are often missed. You'll see strong signal for highly expressed genes — housekeeping, structural proteins, abundant lineage markers — but you'll often miss the regulators that distinguish closely related cell types.

These two limitations — resolution and capture efficiency — define what Visium is good for and what it's not good for. It's excellent for mapping broad anatomical regions, comparing major cell-type proportions across tissue zones, looking at gross expression changes between tumor and stroma. It's not ideal if you need single-cell resolution or if you care about lowly expressed transcripts. That's where the imaging-based family comes in, and we'll get there in Segment 8. But first, let me tell you about how Visium evolved to address the resolution problem.

---

## SEGMENT 4 — Visium HD — the 2024 high-density upgrade

In 2024, 10x launched **Visium HD**, which addressed the resolution limitation of the original Visium head-on. Where the original Visium had 55-micron spots, Visium HD shrinks the capture features to a continuous grid of **2-micron squares** — about thirty times smaller per dimension, and roughly seven hundred times smaller in area per feature. At 2-micron resolution, the capture features are smaller than most individual cells. You can, in principle, resolve sub-cellular spatial structure with a sequencing-based method.

Here's how the engineering works. Instead of discrete circular spots separated by gaps, Visium HD uses a **continuous grid** of 2-by-2-micron squares tiled across the entire capture area. There are no gaps. Every position on the slide is a capture feature. The slide carries millions of these tiny squares per capture area — on the order of six million 2-micron squares in a 6.5-by-6.5 mm capture area, compared to about five thousand 55-micron spots in the original Visium. The barcode chemistry is similar in principle — each square has its own unique barcode — but the manufacturing required to print barcodes at this density required substantial engineering, using methods adapted from semiconductor lithography.

The workflow is otherwise nearly identical to standard Visium. Place a tissue section on the slide. Image with H&E. Permeabilize. Capture transcripts with poly-T oligos. Reverse transcribe. Build a library. Sequence on Illumina. The difference is in the output: instead of a few thousand spot-level measurements per capture area, you get six million square-level measurements. Each square is small enough that, in many tissues, a single cell overlies multiple squares — so you can in principle attribute transcripts to individual cells, not just regions.

\[Pause.\]

Here is the analogy. **Visium HD is the 2024 upgrade — the same printed-barcode-slide concept, but with two-micron squares instead of fifty-five-micron spots. A much denser grid, near-single-cell resolution, the same untargeted whole-transcriptome chemistry on top.** You can now ask sequencing-based spatial questions at almost the resolution of imaging-based methods, without giving up the breadth of the untargeted transcriptome.

There are catches, as always. At 2-micron resolution, the data per square is much sparser than at 55 microns, because each tiny square captures the RNA from a much smaller volume of tissue. To get reliable signal, you typically need to **bin** adjacent squares together computationally — most analyses use 8-micron or 16-micron bins, which approximate single-cell or small-multi-cell resolution. The 2-micron raw data is the substrate; the binning step is part of the analysis. Sequencing depth requirements are also enormous — to fill in counts across six million features, you need on the order of tens of billions of reads per capture area, which means a substantial fraction of a NovaSeq flow cell per sample, and proportional cost.

The other catch is that capture efficiency, even with the improved chemistry, is still well below one hundred percent. Many transcripts are still lost in the diffusion-and-capture step. But for the transcripts that are captured, the spatial precision is unprecedented for a sequencing-based method.

Visium HD effectively closes much of the gap with imaging-based methods on the resolution axis. It does not — and this matters — close the gap on absolute capture efficiency, which is still much higher in MERFISH or Xenium, where every targeted transcript is directly imaged. The trade-off shifts but doesn't disappear: sequencing-based gives you the whole transcriptome with imperfect capture; imaging-based gives you perfect capture of the transcripts you pre-selected. Visium HD is a compromise that pushes the sequencing-based family substantially closer to single-cell resolution, while keeping the whole-transcriptome advantage.

For most labs starting a new spatial project today, the choice is no longer "Visium versus imaging" — it's "Visium HD versus imaging," and the choice depends on whether breadth or precision matters more for the biological question. We'll come back to that trade-off in detail in Segment 12.

---

## SEGMENT 5 — Slide-seq and Slide-seq V2 — randomly placed barcoded beads

In parallel with the Visium lineage, a different sequencing-based approach was developed in Boston, in the lab of Evan Macosko at the Broad Institute — the same Evan Macosko who, a few years earlier, had co-invented Drop-seq, the open-source droplet microfluidic method that inspired 10x Chromium. Macosko's spatial method, published in 2019 in collaboration with Fei Chen at the Broad, was called **Slide-seq**. Where Visium uses a regular grid of barcoded spots printed lithographically onto a slide, Slide-seq uses something simpler and cheaper: a monolayer of randomly distributed barcoded beads.

The idea is this. You take a large pool of beads — small spheres about 10 microns in diameter — and on the surface of each bead you synthesize a stretch of DNA carrying a unique barcode. The bead barcodes are generated by a split-pool combinatorial synthesis, the same chemistry that produces beads for Drop-seq. After synthesis, you have a large pool of beads, each carrying millions of copies of its own unique barcode oligo, with the bead's barcode being effectively random — you don't know which bead got which barcode until you read it later.

Now you take a coverslip and you spread the beads in a monolayer on its surface — packed densely but irregularly, like marbles dumped onto a flat surface and settled into a single layer. The beads are immobilized in place. This gives you a slide with about a million beads scattered randomly across a small area, each bead 10 microns across, each carrying its own unknown barcode.

The trick is in **barcode mapping**. Before you do any tissue experiment, you have to figure out, for every bead on the slide, what its barcode is and where it sits. The Slide-seq team developed a method called **in situ sequencing-by-ligation** to read out a few bases of every bead's barcode while the beads are still on the slide. By imaging the slide through cycles of ligation chemistry, they recover the barcode sequence of every bead and record its X-Y position. The output is a lookup table: bead at position (X1, Y1) has barcode A, bead at (X2, Y2) has barcode B, and so on. The lookup table is generated once per slide, then the slide is ready for the spatial experiment.

\[Pause.\]

From there, the workflow is similar to Visium. Place a tissue section on top. Permeabilize. The mRNAs diffuse to the beads. The bead-bound oligos capture them by poly-T hybridization. Reverse transcription attaches the bead's barcode to every cDNA. You pool, build a library, sequence on Illumina. Software reads each read's bead barcode, looks up the bead's position in the per-slide lookup table, and assigns the read to that X-Y coordinate. The output is a spatial gene expression map — same data structure as Visium, but with beads instead of spots and 10-micron rather than 55-micron resolution.

Here is the analogy. **Slide-seq is the same trick as Visium, but instead of a regular grid of printed spots, you've got irregularly placed barcoded beads — like marbles dumped on a slide. Cheaper to make, smaller features, but the geometry is irregular and you need a one-time barcode-mapping step.** The trade-off is mostly about manufacturing — printed grids are precise and reproducible but require lithographic infrastructure; random bead monolayers are easy to assemble but require an upfront mapping step.

**Slide-seq V2**, released in 2020, improved the chemistry substantially. The original Slide-seq had low capture efficiency — only a few percent of transcripts were recovered. V2 improved the reverse transcription chemistry and the bead chemistry to push capture efficiency closer to what Visium achieves, while keeping the 10-micron bead resolution. By 2021, Slide-seq V2 was the highest-resolution sequencing-based spatial method commercially available — until Visium HD took over that title in 2024.

Slide-seq has been used heavily in academic labs for brain mapping, kidney biology, and immune-tissue studies. It never quite reached Visium's market penetration, partly because Visium had 10x's commercial infrastructure behind it and Slide-seq remained more of an open academic protocol with a smaller commercial footprint through a company called **Curio Bioscience**, which now sells Slide-seq-style slides under the brand name Curio Seeker. The technologies coexist; the choice between them in 2024 often comes down to local lab preference and the specific tissue.

The deeper point of this segment is that the sequencing-based family is not just Visium. There are multiple ways to print or arrange barcoded capture features on a slide, and the chemistry of capture-then-sequence is general enough that different bead or array geometries can all be made to work. The next major player took this in yet another direction — Stereo-seq, from BGI in China, used a completely different physical substrate: DNA nanoballs printed onto silicon chips. Let me show you.

---

## SEGMENT 6 — Stereo-seq — sub-cellular resolution from DNA nanoballs

In 2022, a group at the Beijing Genomics Institute — BGI, the Chinese sequencing giant we've mentioned in the context of MGI DNBSEQ — published a remarkable paper introducing a method called **Stereo-seq**, short for "spatial enhanced resolution omics sequencing." Stereo-seq pushed sequencing-based spatial resolution to a scale previously thought achievable only by imaging-based methods. The capture features in Stereo-seq are not microns across; they're about **220 nanometers** across, arranged on a regular grid with a feature pitch of 500 to 715 nanometers. That's sub-cellular by an order of magnitude. The technology was a tour de force, and although it's used less in Western labs than Visium, it has been the substrate for some of the most ambitious spatial atlases ever attempted, particularly in developmental biology.

How do you print barcodes at 220-nanometer resolution? The answer is that you don't print them lithographically. You use **DNA nanoballs**. Recall from the MGI lecture that a DNA nanoball is a tightly compacted blob of DNA, generated by rolling-circle amplification, with about a thousand tandem copies of a starting circular template all coiled into a single dense structure roughly 200 nanometers across. MGI uses nanoballs as their sequencing substrate — they're how DNBSEQ achieves its cluster density. The Stereo-seq team adapted the same nanoball technology for spatial transcriptomics: they generate barcoded nanoballs, deposit them onto a regular pattern of binding sites on a silicon chip, and use the resulting array as the spatial capture surface.

The chip is patterned at semiconductor scale. The binding sites are a regular grid spaced about 500 nanometers apart — far smaller than any printed lithography could achieve at scale. Onto each binding site, a single nanoball lands, carrying its unique barcode. Because the barcodes are random — generated combinatorially during synthesis — the team uses an in situ sequencing step to read out which barcode landed at each binding site, generating the per-chip lookup table that maps every position to its barcode.

\[Pause.\]

The workflow from there is the standard sequencing-based spatial recipe. Place a tissue section on the chip. Permeabilize. The mRNAs diffuse to the chip surface. The poly-T-equipped barcoded oligos capture them. Reverse-transcribe with the barcode now covalently attached to each cDNA. Pool, library prep, sequence on a BGI sequencer or an Illumina sequencer (BGI's MGISEQ in the original paper). Software demultiplexes by barcode, maps to position, generates the gene-by-spatial-location matrix.

Because the features are 220 nanometers across and packed at 500-nanometer pitch, a Stereo-seq chip can have billions of capture features per square centimeter. A typical experiment images and sequences across a large tissue area — a whole mouse embryo cross-section, in some of the original papers — at a resolution where you can resolve individual nuclei and even sub-cellular organelle-scale spatial structure if the capture efficiency cooperates.

The chip sizes get large too. Stereo-seq has been used to map whole mouse embryos, whole adult mouse brain sections, whole sections of human tissues — often at the centimeter-scale, with sub-cellular resolution. The data volumes are enormous. A single Stereo-seq experiment can generate tens of billions of reads and produce a gene expression map with billions of spatial features. The computational handling alone is a significant engineering challenge.

\[Pause.\]

Stereo-seq's flagship publications have been spatial atlases of developing organisms — whole mouse embryos at sequential developmental stages, axolotl brain regeneration, zebrafish development — where you want to see, simultaneously, the gene expression landscape and the morphological structure as it changes over time. These are atlas-scale projects, often run by national consortia, that produce open datasets used by the rest of the field for years. The Stereo-seq technology is well suited to this scale because the chips can be made very large, the cost per square centimeter is competitive once you amortize chip manufacturing, and the resolution is fine enough to capture cellular detail.

The trade-offs are roughly: Stereo-seq has the highest spatial resolution of any sequencing-based method that has reached substantial use, but the technology has been less accessible to Western labs because BGI's instruments and consumables have had restricted import paths in some countries. Most spatial labs in the US and Europe use Visium or Visium HD by default; Stereo-seq has had its biggest impact in Chinese academic labs and in large international atlas consortia where BGI provided the platform.

The conceptual point of Stereo-seq for our lecture is that the sequencing-based family is not capped at the resolution of printed barcodes. By using DNA nanoballs and semiconductor-style patterning, you can push the capture feature size well below the scale of an individual cell. This means the historical trade-off — "sequencing-based is low-res, imaging-based is high-res" — is not a fundamental physical limit. It's an engineering constraint, and engineering constraints can be pushed. Visium HD and Stereo-seq are both proofs that sequencing-based spatial transcriptomics can match or approach imaging-based methods on resolution, even as the chemistries remain very different.

---

## SEGMENT 7 — HDST and the high-density academic methods

Before we leave the sequencing-based family and move into the imaging side, I want to briefly mention a third high-resolution academic method, because it illustrates the path that led to Visium HD and Stereo-seq. The method is called **HDST**, for "high-definition spatial transcriptomics," published in 2019 by a team that included some of the same Stockholm group that started spatial transcriptomics in 2016. HDST is the academic precursor to all the high-density methods that followed.

HDST uses a similar concept to Slide-seq — random monolayers of barcoded beads — but with much smaller beads, about **2 microns in diameter**, packed onto a slide. The beads are pre-barcoded combinatorially, decoded by in situ sequencing, and then used as the capture substrate for a Visium-style spatial reaction. The 2-micron bead diameter is comparable to Visium HD's 2-micron square pitch, and the resolution is approaching single-cell.

The challenge with HDST and other early high-density methods was always **capture efficiency**. At 2-micron features, each capture spot covers a tiny volume of tissue, captures very few transcripts per spot, and produces sparse data. To get reliable signal, you had to sequence very deeply and bin spots computationally. The chemistry was demanding. The protocols were finicky. HDST never became a routine assay the way Visium did, partly because the data quality was hard to make reproducible at scale.

\[Pause.\]

But HDST mattered, because it proved that the high-density approach was feasible and pointed the way for both Visium HD and the Stereo-seq nanoball arrays. The lineage of high-resolution sequencing-based spatial transcriptomics runs roughly: Ståhl 2016 at 100 microns, Slide-seq 2019 at 10 microns, HDST 2019 at 2 microns, Visium HD and Stereo-seq in 2022-2024 at sub-cellular resolution. The resolution improvements have been steady, driven by both chemistry refinements and manufacturing improvements.

There are a handful of other sequencing-based methods I want to name in passing, because you may encounter them in the literature. **DBiT-seq** ("deterministic barcoding in tissue"), from Rong Fan's lab at Yale, uses microfluidic channels to deliver barcoded reagents in stripes — first horizontal, then vertical — generating a combinatorial grid of barcoded squares directly on the tissue. The resolution is around 10 to 50 microns depending on the channel width. **Pixel-seq** uses a polymer-coated barcoded surface. **GeoMx**, from NanoString, is a region-of-interest method where you select specific regions on a tissue section and recover transcripts from those regions — it's not a uniform grid like Visium, but a targeted-region tool useful for clinical samples.

The proliferation of methods speaks to how much demand there is for spatial gene expression data. Every two or three years a new sequencing-based method appears with some incremental advantage — slightly higher resolution, slightly better capture, slightly different geometry. The field has settled, for now, on Visium and Visium HD as the de facto standards for most academic and clinical work, with Stereo-seq carrying the high-end atlas applications. The basic chemistry of capture-then-sequence is shared. The variations are in how you arrange the barcodes on the surface and at what density.

Now let's turn to the entirely different family — imaging-based methods, which solve the spatial problem without sequencing at all. The chemistry is radically different. The trade-offs are nearly inverted. And the technological lineage starts with a brilliant Harvard physicist named Xiaowei Zhuang.

---

## SEGMENT 8 — MERFISH — multiplexed error-robust fluorescence in situ hybridization

If the sequencing-based family is "capture transcripts on a barcoded slide, then sequence," the imaging-based family is "hybridize fluorescent probes to transcripts in the intact tissue, then image." No sequencing. The reading happens optically, through a microscope, in the tissue itself. The transcripts never leave the cells. You just look at where they are and what color they're glowing.

The technique at the foundation of the modern imaging-based family is **MERFISH**, which stands for "multiplexed error-robust fluorescence in situ hybridization." It was published in 2015 by the lab of **Xiaowei Zhuang** at Harvard. Zhuang is a physicist-turned-biologist who had previously developed STORM, a super-resolution microscopy method. MERFISH grew out of her group's expertise in single-molecule imaging and their long-standing interest in using fluorescence in situ hybridization — FISH, a method that goes back to the 1980s — to count individual mRNA molecules inside cells.

The basic idea of FISH, classical FISH, is simple. You design a short DNA probe whose sequence is complementary to your transcript of interest. You attach a fluorescent dye to the probe. You apply the probe to a fixed tissue section, the probe hybridizes specifically to its target transcript, and you image the slide under a fluorescent microscope. Wherever the dye lights up, your transcript is present. By counting fluorescent dots — each dot being a single mRNA molecule, or sometimes a small cluster of them — you can quantify gene expression at the level of individual molecules in individual cells.

Classical FISH works beautifully, but only for a handful of genes at a time. You're limited by the number of distinct dye colors you can put on probes — typically four, maybe five with careful spectral unmixing. So you can image five genes per experiment. If you want to look at the spatial expression of a hundred genes, you'd need twenty experiments. If you want a thousand genes, two hundred experiments. You'd never finish. The throughput is impossible.

\[Pause.\]

The MERFISH insight was a combinatorial barcoding scheme that uses sequential rounds of imaging to encode many more genes than the number of available colors. Here's the trick. Instead of using a single dye color per gene, MERFISH assigns each gene a **binary barcode** — a string of zeros and ones, like 011010100111. The barcode is, say, sixteen bits long. To read out the barcode, you do sixteen rounds of imaging. In each round, you hybridize a set of fluorescent probes that target a specific subset of genes — the genes whose barcode has a "1" in that round's position. After each round, you image the sample, photo-bleach the dyes, strip the probes, and apply the next round's probes. The result is that every mRNA dot in the tissue has, across the sixteen rounds, a pattern of fluorescing (1) and not fluorescing (0) — which spells out its sixteen-bit barcode. The barcode identifies which gene that dot is.

A sixteen-bit barcode in principle encodes 65,536 distinct genes. In practice, MERFISH uses error-correcting codes — like Hamming codes from information theory — that build redundancy into the barcode so a missed round or a misread round doesn't lead to a wrong gene call. With error correction, a sixteen-round MERFISH experiment can confidently identify several hundred to a few thousand genes per panel. The original 2015 paper imaged 140 genes in a single human cell line. By 2019, the panels had grown to a thousand genes. By 2023, several-thousand-gene panels were achievable.

The resolution is exquisite. Each fluorescent dot in a MERFISH image corresponds to a single mRNA molecule, imaged with diffraction-limited microscopy. You can see, in a single cell, the spatial distribution of every transcript in your panel — clustered near the nucleus, distributed along axons, concentrated in specific organelles. You can see, across a tissue section, exactly which cells express which genes and exactly where each cell sits, with sub-cellular precision. The data is a list of molecules, each with X-Y-Z coordinates and a gene identity.

\[Pause.\]

Here is the analogy. **MERFISH is sequential FISH rounds with binary barcodes. Round one: this gene's barcode says "1," so it lights up red — OR not. Round two: gene's barcode says "1," lights up green — OR not. After sixteen rounds, the combinatorial pattern of lit-up versus dark uniquely identifies which gene each dot was.** The barcode is read off the molecule's optical history over many rounds. The number of genes you can decode grows exponentially in the number of rounds. That's the trick.

The trade-offs of MERFISH are mostly about throughput and target panel. You can image only the genes you put on the probe panel — typically a few hundred to a few thousand. You cannot, with MERFISH, discover new genes you didn't already know to look for. The targets must be pre-selected based on prior knowledge. The instrumentation is demanding — a custom microscope, fluidics for delivering probe rounds, image processing software for decoding the barcodes. The runtime per sample is long; a single MERFISH experiment may take a day or more of imaging, plus weeks of analysis.

But what you get is unmatched in any sequencing-based method: single-molecule resolution, sub-cellular localization, precise per-cell gene counts, and a complete spatial map of every transcript in your panel across the tissue. For questions that require single-molecule precision — RNA localization within cells, tight spatial colocalization of specific transcripts, single-cell quantification of regulatory genes — MERFISH is the gold standard.

Zhuang's lab built MERFISH into an open academic platform with detailed protocols. A company called **Vizgen**, founded in 2019 with Zhuang as a co-founder and scientific advisor, has commercialized the method as **MERSCOPE** — we'll come back to it in Segment 11. MERFISH and its variants now compete with other imaging-based methods in a crowded commercial space. Let me show you one of the most striking academic methods that pushed the gene-panel size even further, then turn to the commercial platforms.

---

## SEGMENT 9 — seqFISH and seqFISH+ — pushing panels to the whole transcriptome

The other major academic lineage in imaging-based spatial methods came out of **Long Cai's lab at Caltech**. Cai's group developed a family of methods called **seqFISH** ("sequential FISH"), starting in 2014 — actually predating MERFISH by a year — and culminating in a remarkable variant called **seqFISH+** in 2019 that pushed panel sizes to ten thousand genes per experiment. SeqFISH+ remains, as of 2024, one of the largest panel imaging-based spatial methods ever demonstrated.

The seqFISH concept is conceptually similar to MERFISH but uses a different combinatorial barcoding scheme. Instead of binary on/off codes, seqFISH uses a positional barcode: each gene is assigned a sequence of colors across multiple rounds — for example, gene X is "red in round 1, green in round 2, blue in round 3, yellow in round 4." If you have 4 dye colors and 4 rounds, you have 4 to the 4 = 256 possible color sequences, so you can encode 256 genes. With more rounds, the panel grows exponentially.

The challenge with seqFISH, as with MERFISH, is that as panels get larger, the optical density of probes in the tissue gets so high that individual mRNA dots start to overlap and become impossible to distinguish — a problem called **optical crowding**. SeqFISH+ solved this with an additional clever trick: it spreads each gene's signal across multiple "channels" of imaging using primary probes that don't carry the dye directly, but instead carry "readout" sequences that get hybridized by secondary probes in later rounds. By splitting the signal into more rounds and lower per-round densities, seqFISH+ can image up to 10,000 genes in a single tissue section without optical crowding.

\[Pause.\]

What this means in practice is that seqFISH+ approaches whole-transcriptome coverage with imaging-based resolution. Ten thousand genes covers essentially every expressed gene in most tissues — the dark matter of low-expression transcripts may be missed, but the bulk of the transcriptome is queryable. You get both the breadth advantage that sequencing-based methods have traditionally owned, and the single-molecule resolution advantage of imaging-based methods. In principle, seqFISH+ is the unified spatial transcriptomics platform — high-res, whole-transcriptome, single-cell precision.

The catch is that the seqFISH+ workflow is extraordinarily demanding. Hundreds of probe-and-image cycles. Custom microscopy. Weeks of imaging per sample. Petabytes of image data per experiment. Sophisticated image processing pipelines. SeqFISH+ has been demonstrated in elegant proofs of principle from Cai's lab and a few collaborator labs, but it has not been commercialized at the same scale as MERFISH. It remains an academic capability — extraordinarily powerful when you have the technical infrastructure and patience to run it, less accessible to the average lab.

The seqFISH lineage matters for two reasons. First, it set the technical ceiling — proving that imaging-based methods can scale to whole-transcriptome coverage if you're willing to invest in the engineering. Second, it influenced the design of subsequent commercial platforms, including some of the design choices in Xenium and CosMx, by showing what kinds of combinatorial barcoding schemes are robust at scale.

The pattern across academic spatial methods — Cai's seqFISH+, Zhuang's MERFISH, the Stockholm Visium lineage, Macosko's Slide-seq, BGI's Stereo-seq — is one of rapid academic invention followed by selective commercial adoption. The commercial platforms have chosen panels in the few-hundred to few-thousand gene range, which is a sweet spot for throughput, cost, and clinical utility. The 10,000-gene panels remain a research-grade capability. But the trajectory is clear: the panels will keep growing, the throughput will keep improving, and within a few years the distinction between "imaging-based limited panel" and "sequencing-based whole transcriptome" will continue to blur.

Let me pause here, because we're at the natural break point.

\[BREAK\]

This is the one-hour mark. If you're listening to this in one sitting, take ten minutes, stretch, get a coffee, look at the H&E image of any tissue section you can find online — pull up the Allen Brain Atlas, look at a slice of cortex, notice how much structure is in it that you'd want to map gene expression against. When you come back, we'll pick up with the commercial in situ sequencing platforms that have taken these academic methods and turned them into push-button assays.

---

## SEGMENT 10 — Xenium and CosMx — the commercial in situ sequencing platforms

Welcome back. Let's pick up by talking about the commercial platforms that have taken the imaging-based methods we just covered — MERFISH, seqFISH, and their relatives — and turned them into push-button instruments that ordinary labs can run without a custom microscope or weeks of in-house protocol development. There are two main players, and they launched within months of each other in 2023, in what was perhaps the most aggressive product cycle the spatial transcriptomics field has seen.

**Xenium** is the imaging-based spatial transcriptomics platform from **10x Genomics**, the same company that makes Visium. 10x had already dominated the sequencing-based spatial market with Visium, and in 2023 they launched Xenium to also compete in the imaging-based market. The Xenium platform consists of a benchtop instrument — the Xenium Analyzer — that automates the entire imaging-based workflow: probe hybridization, rounds of imaging, image acquisition, decoding, and per-cell quantification.

The chemistry inside Xenium is a kind of in situ sequencing variant — specifically, **padlock-probe-based rolling circle amplification followed by sequential decoding**, which is a chemistry that descends from earlier academic work in the labs of Mats Nilsson in Stockholm and others. Briefly: a "padlock" probe is a single-stranded DNA molecule with two ends that base-pair to adjacent positions on a target transcript, like a molecular handcuff that locks onto the RNA. When both ends bind, a ligase seals them into a circle. The circle gets amplified by rolling-circle amplification — the same chemistry used in MGI nanoballs and in Stereo-seq — generating a small dense ball of DNA at the location of the original target. Each rolling-circle product carries a barcode region that is then read out by sequential rounds of fluorescent probe hybridization, similar to MERFISH or seqFISH.

Xenium panels run from about **300 to 5,000 genes**, depending on the kit and the tissue. The resolution is **sub-cellular** — individual molecules localized to specific positions within cells. The throughput per instrument is one or two slides at a time, with a full run typically taking a day or two of imaging plus several hours of decoding. The output is a per-molecule table — every detected transcript with X-Y coordinates, a Z plane, and a gene identity — plus per-cell expression matrices generated by cell segmentation from the imaging data.

\[Pause.\]

**CosMx** is the competing imaging-based platform from **NanoString Technologies**. NanoString had earlier developed a region-of-interest spatial platform called GeoMx — which we mentioned briefly in Segment 7 — and in 2022-2023 they launched CosMx as their higher-resolution, single-cell-precision imaging-based platform. CosMx uses a chemistry similar to Xenium's in spirit, with hybridization-based detection and sequential rounds of fluorescent readout, but with NanoString's own probe and barcode design.

CosMx panels range from about **1,000 to 6,000 genes** for RNA, and the platform also supports a protein detection mode for ~70 proteins on the same tissue section. The resolution is sub-cellular, similar to Xenium. The instrument is a benchtop scanner, similar in form factor to Xenium. Run times are similar.

Both Xenium and CosMx have rapidly displaced the academic versions of MERFISH and seqFISH for routine spatial transcriptomics work, particularly in pharma and translational research labs that want reproducible, validated panels and standardized workflows without the burden of running custom academic protocols. The chemistry is essentially the in situ sequencing principle — read out short DNA barcodes attached to RNAs by rounds of fluorescent decoding — productized for an instrument.

\[Pause.\]

Here is the analogy. **Xenium and CosMx are the commercial in situ sequencing platforms. They automate the imaging-based approach — sequential rounds of probe hybridization and imaging — into a benchtop instrument with standardized panels, validated chemistries, and clinical-grade reproducibility. The same MERFISH-style combinatorial decoding, but as a kit you can buy instead of a paper you have to reimplement.** That's the move from academic to commercial.

The trade-offs versus the academic methods are mostly about flexibility versus reliability. With Xenium or CosMx, you choose a panel from a catalog — there are tissue-specific panels for brain, oncology, immuno-oncology, kidney, lung — and you run it. You don't design your own probes. You don't optimize your own imaging cycles. The chemistry is validated and the data quality is consistent. With academic MERFISH or seqFISH, you can put any gene on any probe and design custom panels for any biological question — much more flexible, but the per-experiment cost in time and expertise is much higher.

For most clinical and translational work today, the choice is between these two — Xenium or CosMx — and the choice often comes down to which instrument is already installed in your local core facility and which panels are best validated for your tissue of interest. The chemistries are different enough that data from the two platforms is not directly interchangeable, and there is active ongoing work in the bioinformatics community to harmonize Xenium and CosMx data for cross-platform comparisons.

One important practical detail: both Xenium and CosMx work on **FFPE tissue** — formalin-fixed, paraffin-embedded tissue, the same fixation type used for clinical pathology blocks. This is a huge clinical advantage. Most archived tumor samples, biopsies, and pathology specimens are stored as FFPE blocks. Methods that only work on fresh-frozen tissue cut you off from the vast archive of clinical material that's been collected over decades. Both Xenium and CosMx work on FFPE, which means you can apply spatial transcriptomics to retrospective clinical cohorts, link the data to long-term patient outcomes, and do the kind of large-scale translational research that wouldn't otherwise be possible. This is a major reason these platforms are so heavily adopted in oncology and immunology.

---

## SEGMENT 11 — MERSCOPE — Vizgen's commercial MERFISH

The third major commercial imaging-based platform is **MERSCOPE**, from a company called **Vizgen**. Vizgen was founded in 2019 with Xiaowei Zhuang — the inventor of MERFISH — as a co-founder and scientific advisor. The MERSCOPE platform is, essentially, MERFISH commercialized: the same combinatorial fluorescent barcoding chemistry that Zhuang's lab developed, now packaged in a benchtop instrument with standardized panels and automated fluidics.

MERSCOPE panels typically run from **140 to about 1,000 genes** depending on the kit, with sub-cellular resolution and the ability to image entire tissue sections at single-molecule precision. The instrument is the **MERSCOPE Platform**, a benchtop unit that handles probe hybridization, imaging, and data acquisition. The output is a per-molecule table — every detected mRNA with X-Y-Z coordinates and a gene call — plus standard per-cell quantification after cell segmentation.

Vizgen has positioned MERSCOPE primarily in the academic and research-translational market, while Xenium and CosMx have pushed harder into the clinical and pharma markets. The data quality from MERSCOPE is excellent — perhaps the highest spatial fidelity of any commercial imaging-based platform, owing to the maturity of the underlying MERFISH chemistry — but the throughput per instrument is somewhat lower than Xenium's, and the panel catalogs are narrower.

\[Pause.\]

The three-way competition between MERSCOPE, Xenium, and CosMx is the dominant commercial dynamic in the imaging-based spatial transcriptomics market today. All three platforms produce data of broadly similar structure — per-molecule X-Y-Z-gene tables, plus per-cell quantification — and the analysis pipelines downstream of the instrument are converging. The main differences come down to panel size and design flexibility, instrument throughput, FFPE versus fresh-frozen tissue compatibility, and price per sample.

A pattern worth noting: each of the three commercial platforms traces back to a specific academic origin. Xenium descends from the padlock-probe and in situ sequencing lineage that goes back to Mats Nilsson and his collaborators. CosMx draws on multiple academic chemistries integrated by NanoString. MERSCOPE is straightforwardly the commercialization of Zhuang's MERFISH. In each case, an academic invention took five to seven years to mature into a benchtop instrument that ordinary labs can run. This is roughly the same timeline as the Visium pipeline from Ståhl 2016 to commercial 2019, and the Chromium pipeline from Macosko's Drop-seq 2015 to commercial 10x Chromium 2017. The academic-to-commercial pipeline in genomics has a fairly consistent five-to-seven-year cadence.

There are also smaller imaging-based platforms in the market — **Resolve Biosciences' Molecular Cartography**, which uses a different probe chemistry, and a few academic systems that have spun out into small companies — but the dominant trio remains Xenium, CosMx, and MERSCOPE. If you're starting a spatial transcriptomics project today and you want imaging-based resolution, those are your three options, and the choice depends on your specific tissue, panel needs, and local infrastructure.

The thing to remember across all of these is that the underlying chemistry — combinatorial decoding of barcoded probes hybridized to mRNA targets in situ — is shared. The platform-specific details vary, but the principle is the MERFISH principle, with engineering variations. Understand MERFISH and you understand the commercial imaging-based family.

Now let me step back and tell you what to think about when you're picking between the sequencing-based and imaging-based families for any given experiment.

---

## SEGMENT 12 — The trade-offs — untargeted breadth vs targeted resolution

We've now seen both families of spatial transcriptomics in some depth. The sequencing-based family — Visium, Visium HD, Slide-seq, Stereo-seq — uses barcoded slides and Illumina sequencing as the readout. The imaging-based family — MERFISH, seqFISH, Xenium, CosMx, MERSCOPE — uses sequential rounds of fluorescent probes and microscopy as the readout. The two families have nearly opposite trade-offs, and choosing between them is one of the most consequential decisions in a spatial experiment. Let me walk through the trade-offs in detail.

**Trade-off one: transcriptome coverage.** Sequencing-based methods are **untargeted** — they capture every poly-A mRNA the tissue produces, regardless of whether you knew to look for it. You sequence everything. The output covers, in principle, the entire transcriptome. This is the foundational advantage of the sequencing-based family, and it inherits directly from bulk and single-cell RNA-seq. You don't need to know in advance which genes matter; you can discover new ones from the data.

Imaging-based methods are **targeted** — they only see the genes you put on your probe panel. The panel might be 300 or 1,000 or 5,000 genes, but it is not the whole transcriptome. If a biologically important gene wasn't on your panel, you won't see it. The panel design has to happen before the experiment, based on prior biological knowledge. This is the foundational limitation of the imaging-based family. You cannot discover unexpected genes; you can only confirm patterns of genes you already chose to look for.

**Trade-off two: spatial resolution.** Sequencing-based methods have historically been low-resolution. The original Visium spot was 55 microns — capturing multiple cells per measurement. Visium HD and Stereo-seq have improved this dramatically, down to 2 microns and 220 nanometers respectively, but the data is often binned to coarser scales for analysis. The capture step also has a small diffusion-based blurring effect — transcripts can drift a few microns from their cell of origin before they hit the capture surface.

Imaging-based methods are **inherently sub-cellular**. Each detected molecule is a single-molecule fluorescent dot, localized to better than the diffraction limit — sometimes hundreds of nanometers. You can see exactly where in a cell each transcript sits — clustered around the nucleus, distributed in the cytoplasm, concentrated in specific organelles. This is the foundational advantage of the imaging-based family. The resolution is essentially unlimited from below; the constraint is from above, by the size of the imaged field.

\[Pause.\]

**Trade-off three: detection sensitivity.** Imaging-based methods have very high **detection efficiency** per targeted transcript — typically 80% to 95% of the actually-present molecules of a target gene are detected. Sequencing-based methods have lower per-transcript detection efficiency — often 10% to 30% of transcripts are captured by the slide. The difference is fundamentally about whether you're imaging molecules at the position where they sit (high efficiency) versus capturing diffusing molecules onto a surface (lower efficiency).

This means: for any single gene that is on both a Visium array and a MERFISH panel, the MERFISH measurement will be more sensitive and precise per cell. But the Visium measurement covers the entire transcriptome, while MERFISH only covers the panel genes. You're trading transcript-level precision for transcriptome-level coverage.

**Trade-off four: cost and throughput.** Sequencing-based methods inherit Illumina's cost economics. A Visium experiment costs roughly a few hundred to a few thousand dollars per slide, including sequencing. The bottleneck is sequencing depth — to fill in the transcriptome at every spot, you need substantial reads, which costs proportionally. Imaging-based methods have different cost structures. A Xenium or MERSCOPE run costs roughly a few thousand dollars per sample including reagents and instrument time, with the dominant cost being the kit consumables. Per-sample costs are broadly comparable; the difference is that sequencing-based costs scale with sample number while imaging-based costs scale with instrument time.

**Trade-off five: data structure.** Sequencing-based data looks like a single-cell expression matrix — genes by spots — with each spot having an X-Y position. The analysis pipelines are straightforward extensions of Seurat or Scanpy single-cell workflows, with added spatial-coordinate metadata. Imaging-based data is fundamentally a list of molecules — each molecule with X-Y-Z coordinates and a gene call — that has to be aggregated into per-cell quantifications via a cell-segmentation step. The cell segmentation is itself a significant analytical challenge, particularly in densely packed tissues where cell boundaries are ambiguous.

\[Pause.\]

Here is the headline analogy I want you to leave with. **The two families have nearly opposite trade-offs. Sequencing-based gives you untargeted whole-transcriptome coverage at lower resolution. Imaging-based gives you sub-cellular resolution but only the genes you pre-selected in your probe panel.** Pick the family that matches your biological question.

For an exploratory study — "what cells are in this tissue, what's the gross organization, are there interesting regions I haven't anticipated" — Visium or Stereo-seq is usually the right choice. The untargeted coverage lets you discover patterns you weren't looking for.

For a targeted study — "I know the genes I care about, I want to see exactly where in the cell they sit, I want precise single-cell quantification" — Xenium or MERSCOPE or CosMx is usually the right choice. The sub-cellular precision and high detection efficiency let you do high-confidence cell typing and spatial pattern analysis on a known gene set.

For a comprehensive study at the highest resolution and breadth, the modern approach is often to do **both** — run Visium for the untargeted transcriptome, run Xenium with a panel designed to validate and refine the Visium findings, and integrate the two datasets computationally. This dual-platform approach is becoming standard in well-resourced labs and consortium projects.

One more practical note. Both families produce data that lives in the same downstream analytical ecosystem. The Scanpy and Seurat single-cell tools have been extended to handle spatial data — Scanpy has a spatial module called Squidpy, Seurat has spatial-data support natively, and there are dozens of spatial-specific tools we'll discuss in the next segment. The data formats are converging on a small set of standards. Cross-platform analysis is increasingly straightforward, even when the underlying chemistries are radically different.

Now let me show you how the analysis actually works — what you do with a spatial gene expression dataset once you have it.

---

## SEGMENT 13 — Analysis pipelines — Seurat, Scanpy, BayesSpace, SpaGCN

The data that comes out of a spatial transcriptomics experiment is, structurally, an extension of single-cell data. You have a matrix of genes by observations — where observations are spots, beads, or segmented cells — with counts in every entry, plus a per-observation X-Y coordinate. The first thing you do is run the same quality-control and normalization steps you'd do for single-cell data: filter out low-count observations, normalize by total counts, log-transform, identify highly variable genes, run dimensionality reduction with PCA, embed in two dimensions with UMAP or t-SNE, and cluster.

This is where the two big single-cell analysis ecosystems come in. **Seurat**, the R package from Rahul Satija's lab at the New York Genome Center, has had native spatial support since version 3. You load Visium data with one function call, get a Seurat object with the gene-by-spot matrix and the H&E image embedded, and proceed with all the standard Seurat workflows — normalization, clustering, differential expression — while preserving the spatial coordinates and the image. **Scanpy**, the Python equivalent from Fabian Theis's lab in Munich, has the same capabilities through an extension called **Squidpy** that handles spatial data structures, spatial graphs, and visualization. The choice between Seurat and Scanpy is the same R-versus-Python choice you make for single-cell work — both ecosystems do similar things, and most labs commit to one based on their existing infrastructure.

What spatial adds on top of standard single-cell analysis is a set of methods that explicitly use spatial coordinates. The simplest spatial analyses are visualizations — overlay any gene's expression on the H&E image and look at the pattern. But the field has developed a suite of more sophisticated methods that integrate spatial structure into the statistical models.

\[Pause.\]

**Spatially aware clustering** is the most important of these. Standard single-cell clustering treats each cell as an independent observation, but spatial data has a natural structure — nearby spots are usually similar because they cover similar tissue. Methods like **BayesSpace**, from the Gottardo lab at the Fred Hutchinson Cancer Center, and **SpaGCN**, from the Mingyao Li lab at Penn, use this prior to improve clustering. They explicitly model the spatial dependence — your cluster assignment is influenced not just by your own expression but also by your neighbors' expression. The result is cleaner spatial maps with more coherent regions, fewer salt-and-pepper artifacts where individual spots get assigned to outlier clusters, better discovery of anatomical zones.

**SpaGCN** is particularly elegant. It builds a graph where each spot is a node, edges connect spatial neighbors, and runs a graph convolutional neural network to learn embeddings that integrate both gene expression and spatial position. The output is a clustering that respects tissue anatomy without you having to tell it where the anatomy is. Anyone analyzing Visium data today reaches for SpaGCN or BayesSpace early in the workflow.

**Spatial deconvolution** is another important class of methods. The problem: a Visium spot at 55-micron resolution often covers multiple cell types. You'd like to know, for each spot, what mixture of cell types contributed to its expression profile. The standard approach is to use a single-cell reference dataset — single-cell sequencing data from the same tissue type — as a reference for what each cell type's expression profile looks like, then decompose each Visium spot's profile into a weighted mixture of those reference cell types. Methods like **cell2location**, from Vitalii Kleshchevnikov and others, and **RCTD**, from the Macosko lab, do this deconvolution and produce per-spot cell-type proportions. With Visium HD or imaging-based methods, this is less necessary because the resolution is closer to single cells, but for original 55-micron Visium it's essential.

**Spatial domain detection** asks: which regions of the tissue have coherent expression patterns? Methods like **STAGATE** and **GraphST** identify spatial domains — contiguous areas of tissue with similar gene expression — and label them automatically. Useful for finding novel anatomical regions you weren't expecting.

\[Pause.\]

**Spatially variable gene detection** identifies which genes have non-random spatial patterns — genes that are concentrated in specific regions versus genes that are uniformly expressed. Methods like **SpatialDE**, from Oliver Stegle's group, and **SPARK** use spatial statistics to score every gene by how much its expression pattern depends on spatial position. These are the genes worth visualizing and following up on — the genes whose expression patterns are the most informative about tissue structure.

The analytical landscape is moving very fast. New methods come out monthly. There's a healthy tension between methods that work elegantly on small datasets and methods that scale to the millions-of-spots regime that Visium HD and Stereo-seq produce. The benchmarking community — through papers comparing methods on standard datasets — is actively sorting out which methods are robust and which are overfit to specific use cases.

For someone starting to learn spatial analysis today, the practical advice is: pick Seurat or Scanpy based on your language preference, run BayesSpace or SpaGCN for spatial clustering, run cell2location or RCTD for deconvolution if you have low resolution, and use SpatialDE or SPARK to find spatially variable genes. That four-method toolkit will cover 80% of what you need for a typical spatial analysis. The rest is custom analysis built on top of that foundation.

The most important conceptual point of this segment is that spatial transcriptomics analysis is single-cell analysis plus a spatial coordinate layer. The single-cell concepts — clustering, marker genes, cell types, differential expression — all carry over. What changes is that you can now ask spatial questions: where are the cell types, what are the spatial domains, which genes have spatial patterns, and — critically, the topic of the next segment — which cells are near which other cells, and what does that say about their interactions.

---

## SEGMENT 14 — Cell-cell interaction inference — neighbors and receptor-ligand pairs

Here is the analytical question that is unique to spatial data, that you cannot ask of dissociated single-cell data, and that drives many of the most exciting biological applications of spatial transcriptomics. The question is: **which cells in this tissue are talking to which other cells, and what signals are they exchanging?**

Cell-cell communication in tissues happens primarily through ligand-receptor signaling. A cell secretes a ligand — a small protein like a cytokine, a chemokine, or a growth factor. A nearby cell expresses a receptor for that ligand on its surface. When the ligand binds the receptor, the receiving cell's intracellular signaling pathways activate, and the cell changes its behavior in response. Tumor cells secrete VEGF, which binds VEGFR on endothelial cells and triggers angiogenesis. T cells secrete IFN-gamma, which binds IFN-gamma receptors on macrophages and induces their activation. Hundreds of these ligand-receptor pairs operate simultaneously in every tissue, forming the molecular language by which cells coordinate.

In dissociated single-cell data, you can see which cells express ligands and which cells express receptors. You can infer that, in principle, T cells producing IFN-gamma could be signaling to macrophages expressing IFN-gamma receptors. But you have no way to know whether those cells are actually adjacent in the tissue and therefore actually exchanging the signal. Single-cell cell-cell communication inference, in dissociated data, is essentially a statistical guess based on co-occurrence: if you see both partners expressed in your sample, you guess they might be talking. The guesses are often wrong, because spatial proximity is the necessary precondition for paracrine signaling and you've thrown away the spatial information.

\[Pause.\]

Spatial transcriptomics gives you the spatial information back. You can now ask: which cells are physically adjacent to which other cells? And among those neighbors, which ligand-receptor pairs are co-expressed? That's the foundation of spatially informed cell-cell interaction inference.

Here is the analogy. **Cell-cell interactions in spatial data is the bonus you get for keeping the addresses. Adjacent cells in space are the candidates that probably talk to each other. If neighbor A expresses the ligand and neighbor B expresses the receptor, you can score that pair as a likely active signaling interaction. Receptor-ligand pair expression in actual spatial neighbors infers the signaling networks that organize the tissue.** That's the move.

Mechanically, the analysis goes like this. From your spatial data, you construct a **spatial neighbor graph** — every cell or spot is a node, and edges connect cells that are spatially adjacent (within some distance threshold, often 50 to 100 microns, or to the K nearest neighbors). For each edge in the graph, you look at the expression of every known ligand-receptor pair in the two connected cells. If cell A expresses ligand X and cell B expresses receptor X, you score that edge as a likely signaling event for pair X. Aggregate over the whole graph, and you get a tissue-level map of which cell types are signaling to which other cell types, through which pathways, in which regions.

A whole family of methods has been developed for this kind of analysis. **CellPhoneDB** is the most widely used database of ligand-receptor pairs and was originally developed for dissociated single-cell data; spatial extensions like **stLearn**, **NICHES**, and **CellChat** in spatial mode add the spatial constraint. **Spatial-CellChat** uses a graph of spatial neighbors to score interactions. **COMMOT** and **NicheNet** integrate spatial proximity with downstream signaling pathway analysis. The output is, typically, a list of cell-type-pair-interactions with statistical evidence — for example, "T cells and fibroblasts in the tumor margin are strongly enriched for CXCL12-CXCR4 signaling," or "tumor-associated macrophages are signaling to neighboring tumor cells via WNT5A-FZD2."

\[Pause.\]

These cell-cell interaction analyses have become one of the central reasons people do spatial transcriptomics in the first place. In the tumor microenvironment — which we'll come to in the next segment — the question of which immune cells are signaling to which tumor cells, in which spatial regions, has enormous therapeutic relevance. In developmental biology, the question of which cells are signaling to their neighbors to coordinate tissue morphogenesis is foundational. In neuroscience, the question of which neurons are wired to which other neurons functionally is partly addressable through spatial expression of receptors and their ligands.

A few caveats are important. First, spatial proximity is necessary for paracrine signaling but not sufficient — two cells can be neighbors without actually interacting. Second, ligand-receptor expression in two cells doesn't prove that the ligand is being secreted, the receptor is on the surface, and the binding is happening — you're inferring a likely interaction from RNA-level evidence, several layers above the actual molecular event. Third, the databases of ligand-receptor pairs are incomplete and biased toward well-studied pathways. So these analyses are best treated as **hypothesis generators** — they tell you where to look more carefully — rather than as definitive demonstrations of signaling activity.

But despite these caveats, the spatial cell-cell interaction analyses have generated remarkable biological insights. They've identified previously unsuspected immune-tumor interactions in melanoma. They've mapped neural circuits in the cortex. They've shown how stem cell niches operate by spatially constrained ligand-receptor signaling. The combination of single-cell resolution and spatial proximity, applied through these analytical methods, is one of the most powerful new lenses on tissue biology that biology has acquired in the last decade.

---

## SEGMENT 15 — Tumor microenvironment — the canonical use case

If you ask why spatial transcriptomics has become so important so fast — why it was adopted across thousands of labs within a few years of Visium's launch — the answer is, in large part, oncology. Specifically, the **tumor microenvironment**. The biology of cancer is not just the biology of the cancer cells; it is the biology of the cancer cells together with the immune cells that infiltrate them, the stromal cells that support them, the vasculature that feeds them, and the spatial geometry of how all these populations are arranged. Bulk RNA-seq cannot see this. Single-cell sequencing can see the cell types but cannot see the geometry. Spatial transcriptomics is the first technology that can see all of it at once.

The tumor microenvironment, or TME, is the surrounding ecosystem of a tumor. A solid tumor is not a homogeneous mass of cancer cells. It's a complicated tissue with a stratified structure. Toward the center, you often have necrotic regions where cells are dying from hypoxia. Around that, a hypoxic but still-alive zone. Further out, the proliferative zone where most cells are actively dividing. At the periphery, an invasive front where tumor cells are infiltrating into surrounding normal tissue. Throughout the tumor, vascular structures — blood vessels and lymphatic vessels — provide oxygen, nutrients, and access for circulating immune cells. And critically, immune cells are scattered through the tumor in patterns that vary from patient to patient and from region to region.

The immune infiltrate is the central object of modern immuno-oncology. The class of cancer drugs called **checkpoint inhibitors** — pembrolizumab, nivolumab, ipilimumab, and others — work by unblocking T cells so they can attack tumor cells. But they only work in patients whose tumors are infiltrated by T cells in the first place. A tumor with no T cell infiltrate (a "cold" tumor) is unresponsive to checkpoint inhibitors. A tumor heavily infiltrated by T cells (a "hot" tumor) often responds dramatically. Predicting which patients will respond is one of the most important open questions in oncology, and it depends on the spatial distribution of immune cells in and around the tumor.

\[Pause.\]

Here is where spatial transcriptomics is unique. With a Visium or Xenium experiment on a tumor section, you can see, simultaneously: where the tumor cells are, where the T cells are, where the macrophages are, where the regulatory T cells (which suppress immune responses) are, where the dendritic cells (which prime T cell responses) are, where the blood vessels are, where the stromal regions are. You can see, in a single H&E-image-plus-gene-expression view, the whole TME at once.

And from that view, you can ask the questions that matter clinically. Are the T cells actually infiltrating into the tumor, or are they stuck at the margin? Are they being suppressed by regulatory T cells in close proximity? Are tumor cells expressing PD-L1 specifically in the regions where T cells are abundant — a sign that immune pressure is selecting for immune evasion? Are there spatially organized "tertiary lymphoid structures" — small clusters of B cells and T cells that organize like miniature lymph nodes within the tumor — and do they predict response to therapy?

These are the questions that the spatial transcriptomics literature in oncology has been answering, and the answers have been striking. Several landmark studies have shown that the spatial organization of the TME predicts checkpoint inhibitor response better than any single cell-type proportion. Patients whose tumors have spatially organized T cell infiltrates close to tumor cells respond better than patients whose T cells are stuck at the margins. Patients with tertiary lymphoid structures inside the tumor have substantially better outcomes than patients without. These findings would be invisible to single-cell sequencing of the same samples, because single-cell sequencing loses the spatial information that makes the patterns visible.

\[Pause.\]

Here is the analogy. **Tumor microenvironment is the canonical use case for spatial transcriptomics. You see immune cells infiltrating around the tumor, you see where the T cells are blocked from getting in, you see where the regulatory T cells are suppressing them. You can predict where checkpoint inhibitors will work and where they won't — the central question in modern immuno-oncology.** That predictive power is why oncologists and pharma companies were among the first heavy adopters of spatial transcriptomics.

Beyond checkpoint inhibitors, spatial transcriptomics in oncology is being used for biomarker discovery, mechanism-of-action studies for new drugs, monitoring of immunotherapy response, and increasingly, clinical pathology applications where the spatial readout is integrated with H&E histology and immunohistochemistry to provide multi-layered tissue diagnostics. Several spatial transcriptomics platforms — particularly Xenium and CosMx — are working toward clinical lab certification that would allow their use in routine cancer diagnosis and treatment selection.

Oncology drove early adoption, but immuno-oncology drove the heaviest use. Other disease areas have followed. Spatial transcriptomics in autoimmune disease (looking at inflamed joints in rheumatoid arthritis, or inflamed gut in Crohn's), in cardiovascular disease (looking at atherosclerotic plaques, or post-MI heart tissue), in metabolic disease (looking at fatty liver, or pancreatic islets), and in infectious disease (looking at tissue responses to chronic infections) are all active applications. The general principle is the same: any disease that involves complex tissue ecosystems with multiple cell types organized in space is a candidate for spatial transcriptomics.

The oncology and immunology pull is the engine that's driving the field's commercial growth. Pharma companies are buying Xenium and CosMx instruments in large numbers for biomarker work. Academic medical centers are setting up spatial cores. Clinical pathology labs are starting to pilot spatial assays for diagnostic use. Within a decade, spatial transcriptomics may become as routine in tumor pathology as IHC is today — a standard tissue interrogation tool with clinical decision-making weight.

---

## SEGMENT 16 — Brain atlas applications — cortex layers and Allen Brain Atlas

The other major early-adopter community for spatial transcriptomics has been neuroscience. The brain is, structurally, the most spatially organized tissue in the body. Cortical neurons are arranged in stacked layers — six classical layers, each with characteristic cell types, each with characteristic gene expression patterns. Subcortical structures — the hippocampus, the striatum, the thalamus — have their own intricate cellular organization. The whole brain has a topographic logic that is invisible to dissociated single-cell methods but is revealed beautifully by spatial transcriptomics.

The Allen Institute for Brain Science, in Seattle, has been the central institution driving large-scale spatial mapping of the brain. The **Allen Brain Atlas**, started in the early 2000s, was originally an enormous in situ hybridization effort — they mapped the expression patterns of thousands of genes in the mouse brain, gene by gene, by ISH, building a comprehensive expression atlas that's been a community resource for two decades. The Allen Atlas was, in a sense, the first large-scale spatial transcriptomics dataset — though it was generated one gene at a time with classical FISH rather than multiplexed methods.

When modern spatial transcriptomics arrived, the Allen Institute was among the first heavy adopters. They've published Visium maps, MERFISH maps, and most recently Xenium maps of mouse and human cortical regions. Their **Allen Brain Cell Atlas**, published in 2023, integrates single-cell RNA-seq, MERFISH spatial data, and electrophysiology into a comprehensive cell-type catalog with spatial localization for every cell type. The dataset is open and has become a foundational reference for the field.

\[Pause.\]

The biological insights from spatial transcriptomics in the brain have been substantial. **Cortical layer organization** — the classical six-layer model of cortex — has been dramatically refined. Spatial transcriptomics has identified dozens of distinct excitatory neuron types stratified across cortical layers, with much finer gradients than the classical layer model suggested. Some "layers" are now understood as continuous gradients with subtle gene expression boundaries; others are sharply demarcated by specific transcription factor expression.

**Cell type diversity in non-neuronal populations** — astrocytes, oligodendrocytes, microglia — has been mapped with spatial precision. Astrocytes in cortex, for example, were long thought to be a relatively uniform cell type, but spatial transcriptomics has shown that astrocytes have substantial regional specialization, with different cortical regions and different cortical layers harboring distinct astrocyte subtypes.

**Brain region boundaries** — the borders between cortical regions, between hippocampal subfields, between thalamic nuclei — have been mapped with molecular precision. The classical anatomical boundaries based on cytoarchitecture (cell shape and density) are often consistent with the molecular boundaries from spatial transcriptomics, but in some cases the molecular boundaries reveal new structure not visible in cytoarchitecture alone.

\[Pause.\]

**Development and aging** are major areas where spatial transcriptomics has illuminated brain biology. Spatial maps of developing mouse and human brains, taken at sequential developmental stages, show how cell types arise, migrate, and differentiate in their proper anatomical positions. Spatial maps of aged brains show how cell-type-specific aging patterns differ across brain regions.

**Disease** — neurodegeneration, neurodevelopmental disease, psychiatric disease — is increasingly being studied with spatial methods. Alzheimer's disease pathology is heterogeneous across the brain, and spatial transcriptomics is mapping the molecular signatures of plaque-adjacent versus plaque-distal regions, of microglia in different activation states near pathology. Multiple sclerosis lesions are being characterized by their spatial gene expression signatures. Schizophrenia post-mortem brain samples are being analyzed to identify region-specific molecular signatures that may relate to symptom domains.

The brain is in many ways the ideal tissue for spatial transcriptomics. The anatomy is rich. The cell-type diversity is enormous. The questions about how cell types relate to circuits and behavior are open and important. The data, when you can get it, is beautiful. The Allen Institute's atlases, plus contributions from many academic neuroscience labs, have made brain spatial transcriptomics one of the most mature application areas in the entire field.

For students interested in entering spatial transcriptomics as a career, neuroscience and oncology are the two largest application communities, with broadly different cultures and emphases — neuroscience tends to focus on developmental biology and atlases; oncology tends to focus on translational and clinical questions. Both are active and well-funded. The technical skills are largely transferable. The biology is different, but the analytical toolkit is the same.

---

## SEGMENT 17 — Integration with H&E, IHC, and multiomics — rich-context tissue interrogation

One of the underappreciated strengths of spatial transcriptomics is that it doesn't replace other tissue interrogation methods — it integrates with them. A tissue section is a finite resource: you have a slide, you can put one set of stains on it. But the spatial transcriptomics workflows have been carefully designed so that the same section, or adjacent sections, can carry multiple layers of information that get co-registered in space. The result is what people sometimes call **rich-context tissue interrogation** — multiple molecular and morphological readouts from the same physical region, integrated into a unified view of the tissue.

The first and most important integration is with **H&E staining**. Every Visium and Xenium workflow includes an H&E image of the same section that gets sequenced or imaged. The H&E provides the morphological context — cell shapes, tissue architecture, recognizable pathology features like fibrosis, necrosis, immune infiltration zones. Pathologists can examine the H&E and provide expert annotations of tissue regions. Those annotations can then be overlaid on the gene expression data, allowing the molecular signatures of pathologist-defined regions to be extracted directly. This is increasingly important for clinical translation — the regulatory pathway for spatial transcriptomics in pathology depends on integrating its output with the morphological assessments that pathologists already do.

The integration with **immunohistochemistry (IHC)** is similarly natural. IHC uses antibodies to detect specific proteins in tissue sections. Spatial transcriptomics measures the mRNA. The two are highly complementary — mRNA is the input to protein synthesis, but protein is the actual functional molecule, and the two don't always correlate. Spatial transcriptomics on one section combined with IHC on an adjacent section can show, for example, that a region with high CD8 mRNA also has high CD8 protein (confirming the T cells are present and presumably functional), or that an mRNA-high region has unexpectedly low protein (suggesting post-transcriptional regulation).

\[Pause.\]

Many imaging-based spatial platforms — Xenium, CosMx, and several others — now offer **integrated protein detection** as a complementary readout to the RNA detection. CosMx, for example, can image about 70 proteins on the same section as its RNA panel, using fluorescently labeled antibodies in additional rounds of the imaging cycle. Xenium recently introduced a multi-modal capability that combines its RNA panel with selected protein markers. The result is a same-section, same-cell measurement of both RNA and protein for a curated set of targets — a degree of integration that until recently was not possible at single-cell or sub-cellular resolution.

The integration with **multiomics** is even broader. The same tissue block can yield serial sections, with different sections used for different assays — spatial transcriptomics, spatial proteomics (using imaging mass cytometry or CODEX), spatial metabolomics (using MALDI imaging), and spatial epigenomics (using spatial ATAC-seq or spatial Hi-C, both of which exist in early forms). The serial sections are co-registered to provide a multi-layer view of the same tissue region, with each layer providing a different molecular dimension. This is the cutting edge of tissue biology — multi-omic spatial maps that combine gene expression, protein levels, chromatin state, and metabolite distribution in a single integrated dataset.

\[Pause.\]

Cell-type-specific reference integration is another important kind of integration. When you have a high-quality single-cell RNA-seq atlas of a tissue — say, the Tabula Sapiens human cell atlas — you can use that reference to **deconvolve** spatial data (as discussed in Segment 13), to **label** clusters with cell-type identities, and to **map** spatial expression patterns onto known cell taxonomies. The single-cell atlas provides the cell-type identity; the spatial data provides the location. Combined, they tell you which cell types are where, with cell-type assignments grounded in the comprehensive single-cell taxonomies that the field has built over the last decade.

The pattern across all of these integrations is the same. **Spatial transcriptomics is the connective tissue of modern tissue biology.** It sits at the intersection of gene expression, morphology, pathology, and other molecular modalities, and provides the spatial coordinate system into which all the other data layers can be projected. This is why labs that adopt spatial transcriptomics often end up using it as a central platform around which they organize the rest of their tissue-based work.

For clinical applications, this multi-modal integration is particularly powerful. A tumor biopsy can be analyzed by spatial transcriptomics for the molecular characterization, by IHC for the protein-level confirmation, by pathologist review for the morphological assessment, and the three layers combined into a diagnostic report that's far richer than any one layer alone. This is the direction translational pathology is moving — toward integrated multi-modal tissue interrogation, with spatial transcriptomics as one of the foundational layers.

---

## SEGMENT 18 — Frontier — 3D spatial, live-cell, AI-driven interaction modeling

Let's close by looking forward. Spatial transcriptomics is, as of 2025, a young technology — about a decade old as a named field, about six years old as a commercial product category. The trajectory of improvement is steep. Resolution is rising. Throughput is rising. Cost is falling. Panel sizes are growing. Integration with other modalities is deepening. Let me sketch where the field is heading.

**Three-dimensional spatial transcriptomics** is the first major frontier. Almost all current spatial methods work on a single 2D tissue section. But tissues are three-dimensional, and the 2D section is always a slice through the full 3D structure. To reconstruct the full 3D organization, you can do serial sectioning — cut adjacent sections, run spatial transcriptomics on each, and computationally align them into a 3D stack. Several labs have demonstrated this approach, generating 3D maps of mouse brains, tumors, and whole embryos from dozens or hundreds of serial sections. The computational alignment is non-trivial, but increasingly tractable. Within a few years, 3D spatial atlases of whole organs at single-cell resolution will be standard. The field is also exploring **thick-section** approaches that image multiple Z-planes within a single thicker section, using light-sheet or confocal microscopy, with imaging-based spatial methods adapted for 3D readout.

**Live-cell spatial transcriptomics** is a more speculative frontier. All current methods are end-point measurements on fixed tissue — you sacrifice the sample to get the data. But many of the most important biological questions are about how gene expression changes over time, in living tissue. Several research groups are working on methods to image transcripts in live cells over time, using either RNA-targeting protein systems (like MS2-MCP coat protein) or RNA-detecting CRISPR variants (like Cas13-based RNA imaging). The current state of the art lets you watch a handful of transcripts in live cells, in real time, but at low throughput. Scaling this to whole-transcriptome live imaging is a research goal that may take a decade or more to mature. If it does mature, live-cell spatial transcriptomics will open completely new biology — watching gene expression dynamics in tissue, in real time, with cell-resolution.

\[Pause.\]

**AI-driven cell-cell interaction modeling** is perhaps the most active frontier. The cell-cell interaction methods we discussed in Segment 14 are based on ligand-receptor pair databases and simple neighbor graphs. They are essentially statistical hypothesis generators. The next generation of methods will use deep learning — graph neural networks, transformer architectures, foundation models — to learn complex multi-cell interaction patterns directly from large spatial datasets. Several groups are training "cellular foundation models" that take spatial data as input and learn embeddings of cells, tissues, and interactions that can be applied to many downstream tasks. The eventual goal is models that can predict, from a spatial input, things like drug response, disease progression, or cell-fate decisions, by integrating the spatial gene expression with learned representations of cellular biology.

**Spatial multiomics at scale** is another major direction. The early demonstrations of combined spatial RNA + protein, or spatial RNA + chromatin accessibility, are proof-of-concept. The next phase is making these multi-modal spatial methods routine and scalable, so that every spatial experiment can include multiple molecular layers without prohibitive cost or complexity. Both academic and commercial development on this is intense, and within a few years multimodal spatial assays will be standard rather than novel.

**Clinical adoption** is the major translational frontier. Spatial transcriptomics is moving rapidly toward FDA-cleared clinical assays. Several Xenium and CosMx panels are in regulatory review for specific oncology indications. The first clinical spatial transcriptomics tests — used to inform treatment decisions for cancer patients — are likely within the next few years. Once that bar is crossed, spatial transcriptomics will move from a research tool to a clinical pathology tool, and the volume of data generated will increase by orders of magnitude.

\[Pause.\]

The longer-term vision, often discussed in the field, is what people sometimes call the **whole-tissue, whole-transcriptome, single-cell, multi-time-point, multi-omic atlas**. The idea is that, eventually, you will be able to sample any tissue from any patient at any moment, run a single integrated assay, and get back a complete molecular description — every cell, every gene, every protein, every metabolite, every interaction, all spatially resolved. This is decades away in its full form. But each year, the technologies move closer. Visium HD got us closer on resolution. Xenium got us closer on imaging-based throughput. The combination of methods, integrated computationally, is approaching the vision asymptotically.

The pattern from the history we've discussed today suggests how this will continue to play out. Academic groups will invent new chemistries every two or three years. Commercial companies will license and engineer the most promising ones into push-button instruments on a five-to-seven-year cadence. Costs will fall on a Moore's-law-like curve as instrument volumes grow and chemistries mature. Within a decade, what's now a research tool restricted to well-funded labs will become a routine assay accessible to any hospital pathology department. The trajectory is the trajectory of all genomics technologies: from impossible to expensive to routine, over twenty years.

Where will you be in this story? If you're a student now, the next phase of spatial transcriptomics — clinical translation, AI-driven interpretation, 3D and live-cell extensions, integration with deep multi-omics — is the phase where the field will mature and where the careers will be made. The chemistry is settled enough that you don't need to be a chemist; the analysis is open enough that you don't need to be a methods developer. You can pick a biological problem — a disease, a developmental question, a tissue — and use the spatial toolkit to ask it, the same way molecular biologists in the 1990s could pick a question and use the (then-revolutionary) PCR toolkit to ask it. The technology is now mature enough to be the substrate of careers. The biology is still wide open.

That's the pitch. Spatial transcriptomics is the where-component that single-cell sequencing was missing. It has two main families with opposite trade-offs — sequencing-based for breadth, imaging-based for precision. It went commercial in 2019 to 2023, reshaping tissue biology in just a few years. It's now a core technology in oncology, immunology, neuroscience, and developmental biology. It integrates with H&E pathology, IHC, single-cell sequencing, and increasingly other omics. The frontier is 3D, live, multi-omic, AI-interpreted. And the next decade will be the decade of its clinical maturation.

Thank you. Questions.

---

## APPENDIX

**Key terms and definitions.**

- **Spatial transcriptomics**: any method that measures gene expression while preserving the X-Y (and sometimes Z) position of each measurement within a tissue section.
- **Sequencing-based spatial transcriptomics**: methods that capture transcripts onto a barcoded slide and read out gene expression by next-generation sequencing of the captured molecules. Examples: Visium, Visium HD, Slide-seq, Stereo-seq, HDST.
- **Imaging-based spatial transcriptomics**: methods that detect transcripts by sequential rounds of fluorescent probe hybridization and imaging, decoding gene identities from combinatorial color barcodes. Examples: MERFISH, seqFISH+, Xenium, CosMx, MERSCOPE.
- **Spot / capture feature**: in sequencing-based methods, a discrete region on a barcoded slide that captures transcripts at a known position. Visium spots are 55 microns; Visium HD features are 2 microns; Stereo-seq features are ~220 nanometers.
- **Capture efficiency**: the fraction of transcripts in the tissue that get successfully detected by the spatial method. Sequencing-based: ~10-30%. Imaging-based, per target gene: ~80-95%.
- **Panel**: in imaging-based methods, the set of genes targeted by the probe set. Typical panels run from 300 to several thousand genes.
- **Combinatorial barcoding**: the strategy of assigning each gene a multi-round on/off or color pattern, decoded over sequential rounds of imaging, used in MERFISH and seqFISH.
- **Cell segmentation**: the computational step of assigning each detected molecule (or pixel) to a specific cell, required for converting imaging-based per-molecule data into per-cell expression matrices.
- **Spatial neighbor graph**: a graph where each cell/spot is a node and edges connect spatially adjacent cells, used as the basis for spatially aware analyses.
- **Cell-cell interaction inference**: the analysis of co-expressed ligand-receptor pairs in spatially adjacent cells to infer paracrine signaling activity.
- **Deconvolution**: the computational decomposition of a multi-cell spot's expression profile into a mixture of single-cell-type contributions, using a single-cell RNA-seq reference.

**Selected platforms and developers.**

- **Visium** (10x Genomics, 2019): 55-micron spots, ~5000 spots/capture area, whole transcriptome, fresh-frozen + FFPE.
- **Visium HD** (10x Genomics, 2024): 2-micron continuous grid, near-single-cell resolution, whole transcriptome.
- **Slide-seq / Slide-seq V2** (Macosko/Chen, 2019/2020; commercial via Curio Bioscience): 10-micron beads, randomly placed.
- **Stereo-seq** (BGI, 2022): DNA-nanoball arrays, sub-micron features, very high resolution.
- **MERFISH** (Zhuang lab, 2015; commercial via Vizgen as MERSCOPE, 2021): combinatorial fluorescent barcoding, single-molecule resolution.
- **seqFISH+** (Cai lab, Caltech, 2019): up to 10,000-gene panels, sub-cellular resolution, research-grade.
- **Xenium** (10x Genomics, 2023): commercial in situ sequencing, 300-5000 gene panels, sub-cellular, FFPE-compatible.
- **CosMx** (NanoString, 2022): commercial imaging-based, 1000-6000 gene panels, RNA + protein, sub-cellular.

**Selected software tools.**

- **Seurat** (R) — single-cell + spatial workflows.
- **Scanpy** (Python) — single-cell + spatial workflows.
- **Squidpy** (Python) — spatial extensions to Scanpy.
- **BayesSpace** — spatially aware clustering.
- **SpaGCN** — graph-neural-network-based spatial clustering.
- **cell2location, RCTD** — spatial deconvolution.
- **SpatialDE, SPARK** — spatially variable gene detection.
- **CellPhoneDB, CellChat, stLearn, NICHES** — cell-cell interaction inference.
- **STAGATE, GraphST** — spatial domain detection.

**Recommended reading.**

- Ståhl et al., "Visualization and analysis of gene expression in tissue sections by spatial transcriptomics," Science 2016 — the founding paper of the named field.
- Chen et al., "Spatially resolved, highly multiplexed RNA profiling in single cells" (the MERFISH paper), Science 2015.
- Eng et al., seqFISH+, Nature 2019.
- Rodriques et al., Slide-seq, Science 2019.
- Chen et al., Stereo-seq, Cell 2022.
- 10x Genomics technical documentation for Visium, Visium HD, and Xenium — useful for understanding the exact engineering specifications of the current commercial systems.

**Three things to remember.**

1. **Spatial transcriptomics = single-cell + address.** Single-cell tells you which cells; spatial tells you where they sit. Both are required for tissue biology.
2. **Two families, opposite trade-offs.** Sequencing-based: untargeted whole transcriptome, lower resolution. Imaging-based: sub-cellular resolution, only your pre-selected panel.
3. **The cell-cell interaction map is the prize.** Spatial proximity + receptor-ligand expression gives you the signaling network. That's the analysis that single-cell alone cannot do, and it's why spatial transcriptomics changed tissue biology.

Thank you.
