# Hi-C and 3D Genome Architecture — Mapping How DNA Folds Inside the Nucleus

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion or board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The 3D problem: two meters of DNA inside a ten-micron nucleus

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about Hi-C and the 3D genome — the family of techniques that, over the last fifteen years or so, has completely changed how we think about what a genome actually is and how it works. And I want to start with a number, because the number is the whole motivation for the technique. The number is two meters.

Two meters of DNA. That's how much DNA is in every diploid cell in your body. If you took the DNA out of a single one of your cells and stretched it end to end — every chromosome, lined up, double helix straightened — it would be about two meters long. Six feet, six inches. Taller than most of you in this room. That much polymer, packed into a nucleus that's about ten micrometers across — roughly the diameter of a speck of dust. Ten micrometers is one hundred-thousandth of a meter, so we are talking about cramming two hundred thousand nucleus-lengths of DNA into one nucleus. The packing ratio is staggering. And the packing is not — this is the whole point — not random.

\[Pause.\]

Here's the analogy I want you to hold in your head for the next two hours. **Imagine two meters of yarn — a long string, about the diameter of dental floss — stuffed into a ping-pong ball. It's not random. It's folded with structure. And the structure matters, because parts of the yarn that look distant when you trace along its length may be touching each other in three dimensions. Two letters that are a million base pairs apart on the linear sequence may be sitting right next to each other inside the nucleus.** That's the 3D genome. That's what this lecture is about. The linear sequence — the string of A's, C's, G's, and T's that you read out with Illumina or Sanger or Nanopore — is missing something. It's missing the folding. And the folding is biology.

Why do we care about folding? Because regulation depends on it. A gene's promoter — the stretch of DNA right at its start — is typically controlled by enhancers, regulatory sequences that bind transcription factors and crank the gene up or down. But here's the thing about enhancers: they don't have to be next to the gene they control. An enhancer can sit a hundred kilobases away, half a megabase away, sometimes more than a megabase away from its target promoter on the linear genome. In 3D, though, the enhancer and the promoter are kissing. They're touching. The intervening DNA forms a loop that brings them into physical proximity, and that loop is what allows the enhancer to actually deliver its activating effect to the promoter. If you only have the linear sequence, you have no idea which enhancers control which genes, because the linear distance tells you nothing about the 3D contact. The 3D folding is the regulatory wiring diagram, and without it, you don't understand the regulation.

\[Pause.\]

So here's the question Hi-C is built to answer. **Given the genome, can we measure — in an unbiased, genome-wide way — which pairs of locations are physically in contact in three dimensions?** Not just one pair at a time. All of them. Every-against-every. The full 3D contact map of the genome, derived from a population of cells, read out as data we can analyze on a computer. That's the goal. And the technique that delivered it — Hi-C, invented in 2009 by Erez Lieberman-Aiden, Job Dekker, and colleagues — is one of the most beautiful applications of next-generation sequencing in modern biology. We're going to spend the next two hours unpacking it.

If you walk out of here in two hours and you can do three things — one, sketch the Hi-C protocol on a whiteboard and explain what each step does, especially the proximity ligation step that is the heart of the whole thing; two, look at a Hi-C contact heatmap and identify the major features — the diagonal, the compartments, the TADs, the loops — and explain in plain English what each one means about the underlying biology; three, look at any modern paper that says "we performed Hi-C" or "we found that this enhancer contacts this promoter in 3D" and have a real intuition for how that data was generated, what its limits are, and what conclusions are or aren't supported by it — then we've succeeded. Everything else hangs off those three.

\[Pause.\]

One more orienting fact. The 3D genome is, right now, one of the hottest areas in molecular biology. There are entire research institutes built around it. There are major textbooks being rewritten because of what Hi-C has shown us. The discovery of topologically associating domains, or TADs, which we'll cover in Segment 6, was a moment of conceptual reorganization comparable to the discovery of operons in bacteria — it told us that the genome is not a flat string of regulatory elements but a structured hierarchy of regulatory neighborhoods. The discovery of loop extrusion as the mechanism that builds those neighborhoods, which we'll cover in Segment 7, is one of the most beautiful examples in modern biology of theoretical prediction meeting experimental confirmation. Hi-C and its descendants are the techniques that let us see all of this. So let's see how they work.

---

## SEGMENT 2 — The lineage of methods: 3C in 2002, then 4C, 5C, and finally Hi-C in 2009

Hi-C didn't appear from nowhere. It is the genome-wide endpoint of a lineage of methods that started smaller and got progressively more ambitious. Understanding the lineage matters, because each step in the lineage solved a specific limitation of the previous one, and the logic of those solutions is the same logic that drives all of modern chromatin biology. So let's trace the family tree.

The original method, the ancestor, is called **3C — chromosome conformation capture**. It was invented in 2002 in the lab of Job Dekker, who at the time was a postdoc working with Nancy Kleckner at Harvard. The paper appeared in _Science_ in February 2002. The idea is simple, and it's the idea that underlies every single technique we'll discuss today, so I want you to hold it carefully.

\[Pause.\]

Here's the idea. Take a population of cells. Treat them with formaldehyde — a chemical fixative — which covalently crosslinks proteins to other proteins and to DNA at their points of contact. Anything that was touching in 3D is now glued together. Open the cells, expose the chromatin, and digest the DNA with a restriction enzyme — an enzyme that cuts the DNA at specific sequence sites, generating fragments with defined sticky ends. Now you have a mess of crosslinked chromatin, with DNA fragments held together by protein bridges, where the fragments stuck together are the ones that were in physical contact when you fixed the cells. Next — and this is the magical step — you dilute the sample enormously and add a DNA ligase. Ligase is the enzyme that joins compatible DNA ends together. Because the sample is so dilute, ligation events between fragments from _different_ original crosslinked complexes are very rare. Ligations happen overwhelmingly between fragments that were stuck together by the crosslinking — fragments that were in physical contact. After ligation, you reverse the crosslinks by heating the sample and digesting the protein, and you're left with a pool of DNA fragments where each ligation junction represents a pair of regions that were physically touching inside the original cell.

In 3C, the readout was PCR. You designed a pair of primers — one for region A, one for region B — and asked, by PCR, whether the ligation product joining A to B existed in your library. If it did, you got a band; A and B were in contact. If it didn't, no band; A and B weren't in contact. **3C was a one-against-one assay. You picked two regions in advance and asked whether they touched.** It was powerful — it gave the first quantitative measurements of long-range chromatin contacts at specific loci — but it was painfully limited. To map the contacts of one region against the whole genome, you'd need millions of primer pairs.

\[Pause.\]

The next step in the lineage was **4C — circular chromosome conformation capture, or sometimes "one against all."** Developed around 2006 by several groups independently, 4C extended 3C by adding a second round of digestion and ligation to produce circular DNA molecules, which could then be sequenced or PCR-amplified using primers pointing outward from a single "bait" region. The result was that, for one chosen bait sequence, you could measure its contacts with _every other_ region in the genome in a single experiment. 4C was a major step. But it was still one bait at a time. Want to know the contacts of a hundred different baits? Run a hundred experiments.

Then came **5C — chromosome conformation capture carbon copy.** This was developed in Dekker's lab in 2006. 5C used pools of primers covering many regions of interest, and a ligation-based readout, to measure contacts between many regions and many regions in a single experiment. It was "many against many." 5C was the first technique that could give you a contact matrix for a whole genomic region — say, a one-megabase locus — with reasonable resolution. But it still required you to design and synthesize the primers up front, and it could only cover regions you'd targeted in advance. It scaled to maybe a few hundred kilobases of regions of interest, not to whole genomes.

\[Pause.\]

The breakthrough — the moment "many against many" became "everything against everything" — was **Hi-C**, published in October 2009 in _Science_ by Erez Lieberman-Aiden, Nynke van Berkum, Louise Williams, Maxim Imakaev, Tobias Ragoczy, Agnes Telling, Ido Amit, Bryan Lajoie, Peter Sabo, Michael Dorschner, Richard Sandstrom, Bradley Bernstein, M.A. Bender, Mark Groudine, Andreas Gnirke, John Stamatoutos, Leonid Mirny, Eric Lander, and Job Dekker. That's a lot of authors, but the senior team — Lieberman-Aiden, Mirny, Lander, Dekker — anchored the work, and Lieberman-Aiden, then a young graduate student, was the driving force. The Hi-C paper showed how to make 3C work without picking any regions in advance. No primers, no baits, no targeting. Crosslink the cells, digest with a restriction enzyme, then add a clever new step — biotin labeling of the cut ends — that marks every ligation junction so it can be pulled down at the end. Ligate under dilute conditions. Reverse crosslinks. Shear the DNA. Pull down the biotin-marked fragments — those are the ones containing ligation junctions. Sequence them on Illumina, paired-end. Each read pair now tells you: this end of the fragment came from region A; the other end came from region B; A and B were physically in contact in some cell at the moment of crosslinking.

That's Hi-C. **It is 3C scaled up to the whole genome by adding a biotin pulldown step and a sequencing readout instead of PCR.** Every-against-every, all in one experiment. The 2009 paper used Hi-C to produce the first whole-genome contact map of a human cell, and it discovered, in the same paper, two of the foundational features we'll spend much of today on: compartments (A and B) and the fractal globule polymer model. So the same paper that introduced the technique also introduced two of the key findings about 3D genome structure. That is rare and beautiful.

\[Pause.\]

The lineage in summary: 3C in 2002 — one against one. 4C in 2006 — one against all. 5C in 2006 — many against many. Hi-C in 2009 — all against all. Each step expanded the scope of the question you could ask. After Hi-C, the field exploded. Over the next decade, there were a half-dozen further variants — in situ Hi-C, single-cell Hi-C, Micro-C, capture Hi-C, Pore-C, and others — each refining the resolution, the cell types accessible, or the kinds of contacts visible. We'll meet many of them in later segments. But the conceptual core — crosslink, digest, ligate, sequence — is the 3C idea, faithfully carried forward. The proximity ligation step is the heart of the whole field.

Now let's open up the Hi-C protocol itself and look at it step by step.

---

## SEGMENT 3 — The Hi-C protocol: crosslink, digest, biotin, ligate, sequence

Let's walk through the Hi-C protocol the way you would actually do it at the bench. Six steps, each one essential, each one with its own pitfalls. By the end of this segment you should be able to sketch the protocol on a whiteboard and explain what each step accomplishes and why.

\[Pause.\]

**Step one: crosslink.** You take your cells — could be a culture flask of HeLa cells, could be embryonic stem cells, could be a freshly dissociated tissue sample — and you treat them with formaldehyde. Formaldehyde is a small, reactive aldehyde that covalently crosslinks amine groups on proteins to other amine groups on proteins, and to DNA bases. The crosslinks form quickly — within a minute or two — and they're short-range; the formaldehyde itself is small, and the crosslinks it makes only span a few angstroms. Anything that was within molecular distance of anything else at the moment of fixation is now stuck together by a covalent bridge. Two minutes of formaldehyde treatment, typically at one percent concentration, then you quench with glycine to soak up the unreacted formaldehyde. Your cells are now fixed. The 3D structure of the chromatin is frozen in place. **Think of formaldehyde as a molecular Polaroid — you press the shutter and the picture freezes. Whatever was touching when you pressed the shutter is now glued together.**

**Step two: digest.** You lyse the cells and isolate the nuclei, which still contain the crosslinked chromatin. Then you add a restriction enzyme. The classical choice in the original Hi-C protocol was **HindIII**, a six-cutter that recognizes the sequence AAGCTT. Six-cutters cut, on average, every four thousand or so base pairs in the genome, giving you fragments of that length. Later variants use four-cutters like **MboI** or **DpnII**, which recognize GATC and cut every few hundred base pairs on average — much finer fragments, much higher resolution. The choice of restriction enzyme is, structurally, the main resolution knob of Hi-C: smaller fragments mean you can localize contacts more precisely on the genome. The enzyme cuts wherever it finds its recognition site, leaving sticky ends — short single-stranded overhangs — at each cut. Importantly, the chromatin is still crosslinked, so the fragments don't drift apart; they stay tethered together through the protein bridges, in roughly the same 3D arrangement they had inside the cell.

\[Pause.\]

**Step three: biotin fill-in.** This is the step that makes Hi-C work as a genome-wide assay. After digestion, every cut site has a short single-stranded overhang. You add a DNA polymerase — typically the Klenow fragment — along with a mixture of nucleotides that includes one biotin-labeled nucleotide. The polymerase fills in the overhang, incorporating the biotinylated nucleotide as it goes. The result: every cut end now has a biotin tag sticking out of it. Crucially, in the original Hi-C protocol, the biotinylated nucleotide is biotin-dCTP, because the four-base overhangs left by HindIII contain a G that pairs with C — so the fill-in incorporates biotin. The choice of biotinylated nucleotide depends on which restriction enzyme you used and which base shows up in the fill-in. The biotin tag is small and doesn't interfere with the next step. **The biotin tag is the breadcrumb — it marks every cut end so we can find the ligation junctions later.**

**Step four: proximity ligation.** Now the critical step. You dilute the sample dramatically — typical Hi-C uses concentrations where individual chromatin complexes are well separated in solution — and add T4 DNA ligase. The ligase joins compatible blunt ends back together. But here's the thing: in a Hi-C library, after the biotin fill-in, the ends are now blunt (not sticky, because the overhang has been filled in), and blunt-end ligation is inefficient. So you give the ligase a long time — typically four hours or overnight — at low temperature, and let it work. Within each crosslinked complex, the fragments that are physically tethered together in 3D space are essentially captive — they have nowhere else to go. So they ligate to each other. Ligation events between fragments from _different_ complexes are very rare because the dilution makes them improbable. The result: a population of chimeric DNA molecules, each one a fusion of two fragments that were physically in contact at the moment of crosslinking. **Every ligation junction is a 3D contact, recorded in DNA.**

\[Pause.\]

Here's the analogy. **Hi-C is a molecular Polaroid combined with a chimera factory. The formaldehyde takes the snapshot. The restriction enzyme cuts the DNA into fragments while keeping the snapshot intact through protein bridges. The biotin fill-in marks every cut end. The dilution-and-ligation step glues together pairs of ends that were physically next to each other, generating chimeric DNA molecules. You now have a library where every chimeric junction is a record of a 3D contact.** The conceptual trick is that ligation is a local process — it can only join ends that are within a few nanometers of each other — so by ligating under dilute conditions, you preferentially join ends that were already tethered together through the protein bridges of the crosslinked chromatin.

**Step five: pull down and sequence.** You reverse the crosslinks by heating the sample to sixty-five degrees Celsius overnight in the presence of a protease that digests the proteins. The DNA is released, free of the protein bridges that held it together. You shear it to short fragments — typically a few hundred base pairs — using sonication or some similar method. Now you have a pool of short DNA fragments, most of which are ordinary fragments that don't span a ligation junction, and a minority of which span a ligation junction and therefore carry a biotin tag in the middle. To enrich for the junction-containing fragments, you add streptavidin-coated magnetic beads. Streptavidin binds biotin with one of the strongest non-covalent interactions in biology, so the biotin-tagged fragments stick to the beads, and you wash away everything else. The pulled-down DNA is your Hi-C library — enriched for ligation junctions. You prepare it for Illumina sequencing — add adapters, do PCR amplification, the usual stuff — and load it onto a sequencer for paired-end sequencing.

**Step six: analyze.** After sequencing, you get paired-end reads where each read pair has the structure: read 1 comes from one side of a ligation junction, read 2 comes from the other side. Bioinformatic pipelines align the two reads to a reference genome separately and record the pair as a contact between the position where read 1 mapped and the position where read 2 mapped. Aggregate over millions or billions of read pairs and you have a contact map — a record of which positions in the genome were observed in contact, and how often. That's the raw output of Hi-C.

\[Pause.\]

A few practical numbers. A modern Hi-C experiment uses something like ten million cells as input — sometimes fewer with the in situ variant we'll discuss later. The sequencing depth required is enormous: to get a meaningful contact map at five-kilobase resolution, you need a few billion read pairs per sample. That's tens of NovaSeq lanes per sample. Hi-C is data-hungry. It's also one of the most expensive sequencing applications you can run, primarily because of the deep sequencing required. The library preparation itself, while finicky, is relatively cheap; the sequencing is what eats your budget. This is why many Hi-C experiments target specific regions with capture-based enrichment, or use sub-megabase resolution analyses to keep costs manageable.

The end result, conceptually, is a list of pairs — many billions of pairs — where each pair is two genomic coordinates that were observed in contact in some cell at the moment of crosslinking. That list is the raw output. The next segment is about how we turn that list into a picture.

---

## SEGMENT 4 — The contact matrix and the heatmap visualization

Now we have a list of contact pairs. Each row is a single observed contact: chromosome 1, position 35,200,000, contacted chromosome 1, position 35,750,000. Multiplied by billions of rows. How do we visualize that? How do we turn this list into a picture that reveals structure?

The answer is the **contact matrix**, sometimes called the Hi-C heatmap. Here is the construction. Take the genome and divide it into bins of some fixed size — typical choices are one megabase for low-resolution views, one hundred kilobases for medium-resolution, ten kilobases for high-resolution, five kilobases or finer for the highest-resolution experiments. The total number of bins for the human genome at one megabase resolution is about three thousand. At ten kilobase resolution, it's about three hundred thousand. Now build a square matrix where rows and columns are bins. Cell (i, j) of the matrix contains the number of contacts observed between bin i and bin j — that is, how many read pairs in your Hi-C data had one end in bin i and the other end in bin j. Fill in the matrix from your contact list. Symmetric, of course, because contacts are unordered pairs.

\[Pause.\]

To visualize the matrix, we render it as a heatmap. Color each cell by the contact count, on a logarithmic scale — typically red for high contact counts, blue or white for low, with shades in between. The result is a square image where every pixel represents the contact frequency between two genomic regions. For a single chromosome, the matrix is a square the size of the chromosome's bin count. For the whole genome, it's a much larger matrix where each chromosome occupies a sub-block along the diagonal.

Here is what you see when you look at a Hi-C heatmap. First, **the diagonal is intensely red**. Every bin contacts itself, and adjacent bins contact each other extremely often, because regions that are close on the linear genome are almost always close in 3D as well — the chromatin fiber is continuous, and proximity in linear sequence implies proximity in 3D space at short distances. The diagonal fades out as you move away from it; the further apart two regions are on the linear genome, the less often they contact each other. This monotonic decay is called the **distance-dependent contact frequency** and it follows a power law — typically as the negative one-power of linear distance for the close range, with a steeper falloff at longer distances. We'll see in Segment 14 that this power law is a clue to the polymer physics of chromatin.

\[Pause.\]

Here's the analogy. **A Hi-C contact matrix is a 2D map of the genome contacting itself. The diagonal is local contacts — the bright red band of nearby regions touching each other. The off-diagonal pattern is long-range contacts. The diagonal is the dominant feature. But the patterns off the diagonal are where the biology lives.**

Off the diagonal, you see structure. You see square blocks along the diagonal — clusters of regions that contact each other more than expected. We'll call these TADs in Segment 6. You see a checkerboard pattern at large scales — alternating bins that contact each other more or less than expected, in a pattern that segregates active from inactive chromatin. We'll call this the compartmentalization pattern in Segment 5. You see dots — sharp, focal, off-diagonal points of intense contact between specific pairs of regions, often megabases apart. These are loops, and we'll meet them in Segment 8. And you see, occasionally, dramatic blocks of contact between regions on different chromosomes, which can indicate translocations or other large-scale rearrangements.

\[Pause.\]

A practical detail about visualization. When you plot a Hi-C contact matrix as a heatmap, the conventional orientation is with the diagonal running from the top-left to the bottom-right of the image, and the matrix flipped so that the upper-triangle is shown. Sometimes people show only the upper-triangle as a triangular plot, with the diagonal at the bottom — this is the "pyramid" or "triangle" view that you'll see in papers, particularly for visualizing TADs along a region. The pyramid view is easier to overlay with linear annotations like gene tracks and ChIP-seq signal, so it's common in publications that compare Hi-C to other regulatory genomics data.

Another practical detail: the raw matrix has biases. Some regions in the genome are more accessible to the restriction enzyme than others. Some regions PCR-amplify more efficiently than others. These biases distort the apparent contact frequencies, so we have to normalize the matrix before interpreting it. Standard normalization methods — iterative correction, or ICE; vanilla coverage normalization; KR normalization — adjust the matrix so that each row and column sums to the same total, on the assumption that any deviations from a uniform distribution are due to bias rather than biology. After normalization, what's left is the structure.

\[Pause.\]

When you look at a clean, well-normalized Hi-C heatmap of a human chromosome at, say, twenty-five-kilobase resolution, you see a hierarchy. At the largest scale, there's the checkerboard pattern of compartments — regions tens of megabases across that contact each other more than expected, regardless of linear distance. At the megabase scale, there's the block structure of TADs — squares along the diagonal that mark the boundaries of contact neighborhoods. At the finer scale, there are focal contact dots — loops between specific points. The hierarchy is real. It is reproducible across experiments. And each level corresponds to a different mechanism for organizing chromatin in 3D. The next several segments are going to unpack each level in turn, starting with compartments.

---

## SEGMENT 5 — Compartments A and B: the checkerboard at the megabase scale

The first major discovery from Hi-C — discovered in the very same 2009 paper that introduced the technique — was the existence of two large-scale compartments of the genome, which the authors called **compartment A** and **compartment B**. This is a feature you see when you look at a Hi-C contact matrix at a low-resolution, whole-chromosome view. You see a striking **checkerboard pattern**. Some regions of the chromosome preferentially contact other regions of the same chromosome, even across tens of megabases of linear separation. Other regions preferentially contact a different set. The two sets segregate into a checkerboard.

How did Lieberman-Aiden and colleagues find this? They applied a technique called **principal component analysis**, or PCA, to the Hi-C contact matrix. PCA, in this context, asks: what is the dominant pattern of variation in the matrix, after correcting for the trivial distance-dependent decay? The first principal component of a Hi-C matrix — the strongest non-trivial pattern — turned out to be a striking bipartite structure. Each bin of the genome got a positive or negative value on the first principal component, and bins with the same sign preferentially contacted each other, while bins with opposite signs avoided each other. Two communities. A and B.

\[Pause.\]

Here's the analogy. **Compartments A and B are like a checkerboard pattern at the megabase scale. A is gene-rich, active, open chromatin — euchromatin. B is gene-poor, repressed, closed chromatin — heterochromatin. They segregate within the nucleus, like oil and water. Two regions that are both in compartment A contact each other more than expected, regardless of how far apart they are on the linear genome. Two regions in compartment B do the same. But a region in A and a region in B mostly avoid each other.**

What makes a region compartment A versus compartment B? When the authors of the 2009 paper compared the PCA-defined compartments to other genomic features, the correspondence was striking. Compartment A regions are enriched for active genes, for transcriptionally active chromatin marks like H3K4me3 and H3K36me3, for DNase hypersensitivity sites — basically, all the hallmarks of open, transcribed, regulatory-active chromatin. Compartment B regions are gene-poor, enriched for heterochromatic marks like H3K9me3, late-replicating, near the nuclear periphery. The two compartments correspond, in essence, to the two great divisions of chromatin we've known about since the days of cytological staining: euchromatin and heterochromatin. Hi-C made it quantitative.

\[Pause.\]

The physical interpretation is appealing. Inside the nucleus, active chromatin tends to cluster in the interior, often in compartments enriched for transcription factories and splicing speckles. Inactive chromatin tends to be peripheral, often associated with the nuclear lamina, a meshwork of intermediate filaments that lines the inner surface of the nuclear envelope. The compartmentalization you see in Hi-C is, at the molecular level, this separation of active and inactive chromatin into different sub-nuclear neighborhoods. Two A regions on opposite arms of a chromosome contact each other not because they're spatially adjacent in the linear sense, but because they're both swimming in the same active-chromatin nuclear pool, the same neighborhood, and so they bump into each other more often than they bump into B regions that are partitioned away.

A finer point: subsequent work — particularly in Suhas Rao's 2014 paper, which we'll come back to in Segment 9 — refined compartments A and B into subcompartments. Using higher-resolution Hi-C data, Rao and colleagues found that A could be split into A1 and A2, and B into B1, B2, B3, and B4, with each subcompartment corresponding to a distinct set of chromatin marks and gene expression patterns. The hierarchy of nuclear organization, even at the largest scale, is finer than just two boxes. But the bipartite A-versus-B distinction is the foundational one, and it's the right place to start.

\[Pause.\]

How robust are compartments across conditions? Compartments are largely stable across cell types — most regions of the genome stay in the same compartment whether you look in liver cells, neurons, or stem cells. But there are exceptions, and the exceptions are interesting. Some regions switch compartments between cell types — a region that's compartment B (inactive) in one tissue and compartment A (active) in another typically contains tissue-specific genes that are turned on in the second tissue. The compartment switch is correlated with the transcriptional activation. Whether the compartment switch _causes_ the activation, or vice versa, is an open question in many cases — it's correlation, not necessarily causation — but the correlation itself is highly suggestive that the large-scale 3D organization of the genome and the gene expression program are deeply intertwined.

The compartmentalization phenomenon was the first non-trivial structural feature Hi-C revealed. It told us that the nucleus is not a random soup — it's spatially organized at the megabase scale. But there's another, more local level of organization that was discovered three years later, and it turned out to be even more consequential for understanding gene regulation. That's TADs, and that's the next segment.

---

## SEGMENT 6 — TADs: topologically associating domains, discovered in 2012

In 2012, two papers published nearly simultaneously — one from Bing Ren's lab at UCSD, with first author Jesse Dixon, and another from Edith Heard's lab in Paris, with first author Elphege Nora — described a new level of 3D genome organization at a finer scale than compartments. They called the structures **topologically associating domains**, or **TADs**.

Here is the picture. When you look at a Hi-C contact matrix at high enough resolution — say, forty-kilobase bins along a chromosome — you see square blocks along the diagonal. Each block is a region, roughly one megabase across, within which contacts are dense — every position contacts every other position frequently. Outside the block, contacts drop off sharply. The boundary of the block is a sharp transition: contacts within the block are common, contacts crossing the boundary are rare. These blocks are TADs. **Sub-megabase units within which most contacts happen. Beyond the boundary, contacts mostly cease.**

\[Pause.\]

Here's the analogy. **TADs are like rooms in a house. Chromatin within a TAD interacts freely — anything in the same room can touch anything else in the same room. Chromatin in a neighboring TAD is mostly isolated — it's in a different room, separated by a wall, and contacts across the wall are rare. The whole genome is divided into rooms, each room about a megabase across.** The walls between rooms are the TAD boundaries.

How many TADs are there? About two thousand to three thousand in the human genome, depending on how you count. They cover the entire genome — there's essentially no part of the genome that isn't in some TAD. The boundaries are sharp, well-defined, and reproducible across experiments and across cell types. The same TAD boundaries appear in mouse liver, mouse embryonic stem cells, human fibroblasts, human B cells — the locations vary somewhat, but the average TAD structure is roughly conserved across cell types and even across mammalian species.

\[Pause.\]

The TAD discovery was a conceptual breakthrough because it provided a structural unit of gene regulation. Within a TAD, enhancers and promoters interact freely — an enhancer can find and contact any promoter inside the same TAD. Across a TAD boundary, enhancer-promoter interactions are dramatically reduced. The TAD is the **functional regulatory neighborhood**: the unit within which a gene can be regulated by elements nearby in 3D, even if they're hundreds of kilobases away on the linear sequence.

This has profound implications. It means that the regulatory wiring of the genome isn't dictated solely by sequence — by which transcription factors bind where — but also by the structural boundaries imposed by TADs. Two genes a hundred kilobases apart on the linear genome can be in completely different regulatory worlds if a TAD boundary separates them. And conversely, two genes a megabase apart can be in the same regulatory neighborhood if they're inside the same TAD.

\[Pause.\]

What defines a TAD boundary? The 2012 papers, and the follow-up work that came rapidly after, identified several molecular features that correlate with TAD boundaries. First, **boundary regions are enriched for the binding of a protein called CTCF** — CCCTC-binding factor — which we'll spend Segment 8 on. CTCF binds a specific DNA motif of about 19 base pairs, and these motifs are found at the great majority of TAD boundaries. Second, boundaries are enriched for **active transcription start sites**, particularly the promoters of housekeeping genes — genes that are expressed in almost all cell types. Third, boundaries are enriched for **highly transcribed genes** generally. The molecular composition of boundaries is distinctive.

The functional consequence: if you delete a TAD boundary, the two adjacent TADs partially merge, and enhancers from one TAD can now reach into and activate promoters in the previously separated neighboring TAD. This was demonstrated beautifully in a 2015 paper by Lupianez and colleagues, who showed that deletions of TAD boundaries at limb development loci caused enhancers to misregulate genes in the neighboring TAD, producing limb malformations. The TAD boundary was acting as a regulatory firewall, and disrupting it caused real developmental disease.

\[Pause.\]

We'll come back to this — the disease consequences of TAD disruption — in Segment 12, where we'll talk about enhancer hijacking in cancer. For now, hold the picture: the genome is divided into about 2,500 regulatory neighborhoods called TADs, each about a megabase across, separated by sharp boundaries. Within a TAD, enhancers and promoters can freely contact each other. Across a TAD boundary, those contacts are mostly forbidden. The TAD is the functional unit of regulatory organization in 3D.

But this raises an obvious question. How are TADs built? What is the molecular machinery that creates these sharp boundaries and produces the dense contact pattern within each TAD? The answer to that question is one of the most beautiful stories in modern molecular biology, and it's the subject of the next segment. It's called loop extrusion.

---

## SEGMENT 7 — Loop extrusion: the mechanism that builds TADs

I want to tell you the loop extrusion story because it is one of the cleanest examples in modern biology of theoretical prediction meeting experimental confirmation. The model was proposed before there was direct evidence for it, on the basis of polymer physics arguments about what could possibly produce the Hi-C contact patterns we were seeing. Then, over the following decade, every experimental test confirmed the model — including some heroic single-molecule experiments that visualized loop extrusion happening in real time. It's a beautiful piece of science.

Here is the model. The cell contains a protein complex called **cohesin** — a ring-shaped molecular machine made of several subunits, including SMC1, SMC3, RAD21, and either STAG1 or STAG2. Cohesin has been known about for decades for its role in sister chromatid cohesion during mitosis, but its role in interphase chromatin organization was unclear until Hi-C and the loop extrusion model came along. Cohesin binds chromatin — it loads onto the DNA fiber at random locations. Once loaded, **cohesin uses ATP hydrolysis to actively extrude a loop of chromatin through its ring**. The DNA threads through cohesin, and cohesin reels it in from both sides simultaneously, like a ring pulling slack through itself. The loop grows over time, getting larger and larger as cohesin processes more chromatin.

\[Pause.\]

Here's the analogy. **Cohesin is a ring that grabs chromatin and pumps loops out of itself. Imagine a ring sitting around a long rope. The ring uses energy to slide the rope through itself in both directions at once, gathering rope into a loop on one side. The loop grows and grows.** The loop is the structure. It's a topological structure — a base of the loop, where the two strands of chromatin enter the cohesin ring, and the rest of the loop arcing out from the base.

But cohesin doesn't extrude forever. It runs into roadblocks. The most important roadblock is the protein CTCF — CCCTC-binding factor — which binds specific 19-base-pair motifs scattered throughout the genome. When cohesin extruding along chromatin runs into a CTCF binding site, it stalls — but only in a specific orientation. CTCF motifs have a polarity; they point in one direction. Cohesin extruding from one side of a CTCF site stops if the CTCF motif is oriented away from it (specifically, pointing into the extruding chromatin), but passes through if it's oriented the other way. This is called the **convergent CTCF rule**: two CTCF sites that anchor a loop have their motifs pointing toward each other. The loop forms between the two convergently-oriented CTCF sites.

\[Pause.\]

So the full picture: cohesin loads onto chromatin somewhere, starts extruding a loop, and the loop grows until cohesin hits a CTCF site on one side. Cohesin stalls there. Extrusion continues from the other side until cohesin hits another CTCF site, oriented convergently. Now both sides are anchored. The loop is stable. It persists for some time — minutes — before cohesin is unloaded by a protein called Wapl, the loop collapses, and the process starts over somewhere else.

**The loop is the TAD. Each TAD is, on average, a loop that has been extruded between two convergently-oriented CTCF anchor sites. The boundaries of TADs are the CTCF sites. The dense contacts within a TAD are a consequence of all the chromatin within the loop being squished into the same small space by the topology of the loop. The sharp drop-off in contacts across a TAD boundary is a consequence of the CTCF anchor preventing chromatin on the other side from entering the same loop.**

\[Pause.\]

Why is this model so satisfying? Because it explains everything Hi-C sees in one stroke. The block structure of TADs along the diagonal: that's loop bases concentrating chromatin within each loop. The sharp boundaries: that's CTCF anchors stopping extrusion. The convergent CTCF rule: that's the directional behavior of cohesin stalling at CTCF. The focal loop dots in the corners of TADs: those are the bases of the extruded loops, where the chromatin is held by cohesin between two CTCF anchors. The model predicts all of these features. And it predicts more — features that hadn't been measured yet, like the kinetics of TAD formation and the consequences of removing cohesin or CTCF. Both of those predictions have since been tested experimentally and confirmed, which we'll cover in detail in Segment 15.

The loop extrusion model was first proposed in its modern form by Leonid Mirny and colleagues — actually in two independent theoretical papers in 2015 and 2016, one from Mirny's group at MIT and one from Nasmyth's group at Oxford. The model was on the basis of polymer simulations that asked: what kind of activity could a chromatin-binding protein perform to produce the Hi-C patterns we see? The answer that emerged was: extruding loops, with directional stalling at CTCF. The molecular machine that does the extruding, cohesin, was the obvious candidate because it was already known to be a ring-shaped ATP-powered chromatin-binding complex. The CTCF-as-roadblock idea fit the existing biology of CTCF.

\[Pause.\]

The single-molecule confirmation came in 2018 from the Yamamoto lab and the Greene lab, using a technique called DNA curtains — DNA stretched between two anchors in a microfluidic flow cell — and watching fluorescently labeled cohesin act on it. They could see cohesin loading onto DNA, then watch as it processively reeled DNA through itself, creating a visible loop that grew over time. Loop extrusion, observed directly. The model was no longer a model — it was an observation.

The loop extrusion story is one of the great triumphs of integrating theory and experiment in modern biology. The Hi-C data revealed a pattern. The polymer physics predicted a mechanism. The molecular biology identified the candidate machines. The single-molecule biophysics confirmed the mechanism in vitro. The CRISPR-based depletion experiments confirmed the mechanism in vivo. All the pieces fit. Every level of analysis gave consistent answers. That kind of convergence is rare and beautiful. When you see it, you know you're looking at something real.

---

## SEGMENT 8 — CTCF, cohesin, and the molecular basis of TADs

Let's spend a segment going deeper on the two molecular players that build TADs: cohesin and CTCF. Understanding these two proteins in detail is essential because every modern Hi-C paper will mention them, every perturbation experiment will target one or both of them, and the loop extrusion story we just told doesn't quite click until you have a picture of what these proteins actually look like and how they work.

**Cohesin first.** Cohesin is a member of a family of proteins called the SMC complexes — structural maintenance of chromosomes — that have an unusual architecture. Each SMC subunit is a very long polypeptide that folds back on itself in the middle, creating a long coiled-coil arm with a hinge at one end and an ATPase head at the other. Two SMC subunits — SMC1 and SMC3 — pair up at the hinge to form a V-shaped dimer. The two ATPase heads at the bottom of the V are bridged by another subunit called RAD21 (also known as SCC1), which closes the ring. There's also a STAG subunit (STAG1 or STAG2 in vertebrates) attached to the ring, and a few regulatory subunits like NIPBL and MAU2 that load cohesin onto DNA, and Wapl and PDS5 that unload it.

The geometry is striking: cohesin is a closed ring, roughly 35 nanometers across the long axis, with a hole in the middle large enough for a piece of double-stranded DNA — sometimes two pieces — to pass through. The ring is what gives cohesin its name in mitosis: it embraces two sister chromatids and keeps them together until anaphase. In interphase, the same ring is used differently — to extrude a loop of chromatin through its center.

\[Pause.\]

The ATP-driven extrusion is now thought to work by a kind of "scrunching" mechanism, where the cohesin ring repeatedly binds DNA at two positions, reels in the slack between them by ATP-powered conformational changes, then releases and re-binds. The biochemistry is still being worked out in detail, but the kinetics are roughly known: cohesin extrudes at a rate of about one kilobase per second, can produce loops up to about a megabase in size, and is constrained by collisions with CTCF or other cohesin complexes. Each cohesin spends maybe twenty minutes on chromatin before being unloaded.

**Now CTCF.** CTCF is a much simpler-looking protein. It's a transcription-factor-style protein with eleven zinc finger domains arranged in a row. The zinc fingers each recognize a few base pairs of DNA in sequence, and together they recognize a 19-base-pair consensus motif. CTCF binding sites — about fifty thousand of them in the human genome — are scattered across the genome at specific locations. Importantly, the CTCF motif has a polarity; it's not palindromic. A CTCF site has a "direction" defined by which way the motif reads. This directional asymmetry is critical to its role in loop extrusion.

\[Pause.\]

The convergent rule again: a loop forms between two CTCF sites whose motifs point toward each other. CTCF sites in divergent orientation — pointing away from each other — don't anchor loops together; they leave a gap. CTCF sites in tandem orientation — pointing the same direction — can sometimes anchor weaker contacts but rarely strong loops. The orientation rule was discovered by Rao and colleagues in 2014 by mapping the relative orientations of CTCF sites at the bases of loops in their high-resolution Hi-C data. The rule is sharp: about 80 percent of loop anchors are pairs of convergent CTCF sites. This was strong indirect evidence for loop extrusion, because no other proposed mechanism could naturally explain the orientation requirement.

How does CTCF actually stop cohesin? The current model — supported by a paper from Anders Hansen and Geeta Narlikar's groups around 2020 — is that CTCF doesn't just sit on the DNA; it physically interacts with the cohesin complex through specific surfaces. The interaction is orientation-specific: cohesin approaching CTCF from one direction encounters a binding surface that holds it; cohesin approaching from the other direction sees a different surface that lets it pass. The geometry of the interaction explains the convergent rule.

\[Pause.\]

Here's the analogy I want to leave you with for these two proteins. **Cohesin is a ring that crawls along chromatin, pumping loops out of itself. CTCF is a directional roadblock — like a one-way gate that stops the ring if it approaches from one side but lets it through if it approaches from the other. Loops form between pairs of one-way gates pointing toward each other, with cohesin trapped between them. That's how TAD boundaries are built.**

What about the chromatin _inside_ the TAD, the dense contact region you see in the Hi-C heatmap? That's the loop itself. When cohesin sits at the base of a loop, holding chromatin between two CTCF anchors, the chromatin within the loop is dynamically jostling against itself, occupying the same volume of nuclear space. Every region of the loop contacts every other region with higher probability than it would if the loop weren't there. That's where the dense contact block of a TAD comes from. The "room" in the house analogy is, mechanistically, the loop.

Two important details before we move on. First, cohesin loops are dynamic. The picture I've been drawing — cohesin stably anchored between two CTCF sites — is an average over a population of cells. In any individual cell, the loops are in flux. Loops are being extruded, reach their CTCF anchors, sit for a while, get unloaded, and the process restarts. The TAD as a static structure is a population average; in any individual cell, the loop structure is dynamic on the time scale of minutes. This is why we'll see, in Segment 10, that single-cell Hi-C reveals enormous cell-to-cell variability in loop architecture.

Second, cohesin is not the only loop-extruding machine in the cell. The closely related SMC complex **condensin** is responsible for compacting chromatin during mitosis — the dramatic 100-fold compaction that produces the X-shaped mitotic chromosomes you see in textbooks. Condensin also extrudes loops, but at a different scale and with different anchoring rules. We won't dwell on condensin today, but know that the loop-extrusion strategy is used at multiple scales by multiple machines, with cohesin handling interphase TADs and condensin handling mitotic compaction.

Now let's see how the technology has been refined since the original Hi-C in 2009. The next segment is about higher-resolution variants.

---

## SEGMENT 9 — Higher-resolution variants: in situ Hi-C, Micro-C, and beyond

The original 2009 Hi-C protocol, while groundbreaking, had limitations of resolution. The HindIII restriction enzyme cuts every four kilobases on average, so contacts could only be localized to within a few kilobases. The dilution-and-ligation step, which was done with chromatin in solution, was prone to producing some spurious ligations between unrelated complexes that happened to drift close together. And the sequencing depth required was enormous. Over the years, the field has produced several improved variants that address these issues.

\[Pause.\]

**In situ Hi-C** was introduced in 2014 in a landmark paper by Suhas Rao, Miriam Huntley, Neva Durand, Elena Stamenova, Ivan Bochkov, James Robinson, Adrian Sanborn, Ido Machol, Arina Omer, Eric Lander, and Erez Lieberman-Aiden in _Cell_. The key innovation: instead of doing the ligation step in solution, after the cells have been lysed and the chromatin extracted, do it _in situ_ — inside intact nuclei. The nuclei serve as a natural compartment that concentrates the chromatin in a small volume and prevents unrelated complexes from coming close enough to ligate spuriously. The result is a much cleaner library with far fewer false ligation events.

The in situ Hi-C protocol uses MboI or DpnII as the restriction enzyme — both four-cutters that cut GATC every few hundred base pairs — to achieve finer fragmentation. Combined with the deeper sequencing made possible by improvements in Illumina throughput, the 2014 paper produced Hi-C maps at one-kilobase resolution for several cell types, including the GM12878 lymphoblastoid line, which has become a standard reference for 3D genome studies. The paper identified about ten thousand chromatin loops with kilobase-precision anchors — the resolution at which loops as point-contacts in the heatmap could be clearly resolved. This is the data set that established the convergent CTCF rule and the subcompartment refinement we mentioned in Segment 5.

\[Pause.\]

**Micro-C** is the next major step. Introduced by Hsieh and colleagues in Oliver Rando's lab in 2015 (for yeast) and then extended to mammalian cells by Krietenstein, Abraham, Venev, and others in 2020, Micro-C replaces the restriction enzyme step entirely with digestion by **micrococcal nuclease**, or MNase. MNase is an enzyme that chews up DNA preferentially in the linker regions between nucleosomes, leaving the nucleosome-protected DNA intact. The result is that each fragment in a Micro-C library corresponds to a single nucleosome — about 147 base pairs of DNA wrapped around a histone octamer.

This is a major resolution win. Because nucleosomes are spaced every 200 base pairs or so on average, Micro-C gives you contact data at near-nucleosome resolution — about ten times finer than in situ Hi-C with a four-cutter restriction enzyme. The contact maps from Micro-C reveal a much richer pattern of fine-scale structure, including loops at the scale of individual gene bodies, smaller sub-TAD domains called "stripes" that arise from one-sided extrusion events, and the contact patterns at promoters and enhancers at nucleosome resolution.

\[Pause.\]

Here's the analogy. **If Hi-C is taking a photograph through a fogged-up window — you can see the broad strokes of the building, but the fine details are blurred — then Micro-C is wiping the window clean. The same building is visible, but the windowsills, the doorframes, the brick pattern, all sharpen into view. The same 3D genome, but at much finer resolution.**

The cost is that Micro-C requires significantly more sequencing depth than Hi-C to achieve the resolution payoff, and the MNase digestion is more sensitive to optimization than restriction digestion. But for high-resolution studies of specific loci or specific regulatory contacts, Micro-C is now often the technique of choice.

**Capture Hi-C** is another variant worth knowing. The idea: after preparing a Hi-C library, you don't sequence the whole thing. Instead, you do a hybridization-based capture step — like the targeted capture step in exome sequencing — to enrich for fragments that contain at least one read from a region of interest. If you're studying the regulatory contacts of, say, ten thousand promoters, you design capture probes to all of them, do the capture, and sequence the enriched library. The result is much deeper coverage of contacts involving the captured regions, at much lower sequencing cost than whole-genome Hi-C at equivalent depth.

Promoter Capture Hi-C, developed by Peter Fraser's group and others, is the variant where the capture probes are designed against all annotated promoters in the genome. This gives you, for every gene, a deep view of which regulatory elements contact its promoter in 3D. It's one of the most powerful ways to assemble enhancer-to-promoter maps at scale, and it's been used in dozens of studies linking GWAS variants — common genetic variants associated with disease — to the genes they regulate via 3D contacts.

\[Pause.\]

There are other variants we won't dwell on but you should know exist. **HiChIP** combines Hi-C with chromatin immunoprecipitation — you do a ChIP step in the middle of the Hi-C protocol to enrich for contacts mediated by a specific protein, like cohesin or a particular transcription factor. **PLAC-seq** is similar. **GAM** — genome architecture mapping — is a completely ligation-free alternative that uses cryosectioning of fixed cells to identify which regions co-localize in thin slices of the nucleus. **SPRITE** is another ligation-free method that uses split-and-pool barcoding to identify groups of co-localizing genomic regions. Each method has its strengths; the field is healthier for having multiple orthogonal techniques that can cross-validate each other's findings.

The progression from Hi-C to in situ Hi-C to Micro-C to capture-based variants reflects a general pattern in genomics: an initial breakthrough technique is refined over a decade into a family of variants, each optimized for a specific question or scale. The same thing happened to ChIP-seq, to single-cell RNA-seq, to ATAC-seq. The pattern is so reliable it's worth naming: one breakthrough, then ten years of refinement, then a textbook chapter. Hi-C is somewhere between the breakthrough and the textbook chapter right now.

\[BREAK\]

---

## SEGMENT 10 — Single-cell Hi-C: variability in chromatin architecture

Alright, welcome back. Now let's confront something that has been lurking under everything we've said so far. Every Hi-C contact matrix we've discussed is an _average_ over a population of cells — millions of nuclei, all fixed together, all contributing ligation events to the same library. The beautiful TADs and compartments and loops we see in the heatmap are the average behavior of many cells. The natural question is: what does any single cell look like? Is the population average a good description of individual cells, or are individual cells wildly different, with the average being a smoothed-out blur?

The answer turns out to be: individual cells are dramatically different from the average, and from each other.

\[Pause.\]

Single-cell Hi-C was pioneered by Takashi Nagano and Peter Fraser around 2013, and refined by Tim Stevens, Tom Lando, Aleksandra Pekowska, Wing Ho, and others in the following years. The technical challenge is significant: you have to perform the entire Hi-C protocol — crosslinking, digestion, ligation, biotin pulldown, library prep — on the chromatin of a single cell, which contains maybe a thousandth of the DNA you'd get from a typical bulk Hi-C input. The library complexity per cell is necessarily limited; a single-cell Hi-C library typically contains ten thousand to a few hundred thousand contacts, compared to billions in a bulk library.

What you see in single-cell Hi-C is striking. The compartment structure — A versus B — is broadly preserved in single cells; you can see it in the contact pattern of an individual nucleus. But the TAD structure is much more variable. Some TADs that look stable and well-defined in bulk data appear as fuzzy, transient, weakly-bordered structures in individual cells. Loop contacts that look like sharp dots in bulk Hi-C appear in individual cells only occasionally — present in some cells, absent in others. The picture is consistent with the loop extrusion model: in any individual cell, only a fraction of cohesin complexes are anchored at any given pair of CTCF sites, so any specific loop is present only in a fraction of cells at any given moment.

\[Pause.\]

The takeaway: **the 3D genome is dynamic at the single-cell level. The bulk Hi-C heatmap is a time-and-population average of a constantly shuffling structure. The TADs you see in the average are statistical features — regions where cohesin loops are likely to anchor — not stable architectures present uniformly in every cell. Compartments are more stable than TADs. Loops are the least stable.** This is a humbling correction to the intuitive picture of TADs as static rooms in a house — they're more like rooms that constantly disassemble and reassemble in slightly different configurations.

Single-cell Hi-C has also given us insight into how 3D structure changes through the cell cycle. In mitosis, the entire interphase TAD-and-loop structure dissolves and is replaced by a much more compact, uniform-looking compaction driven by condensin. As cells exit mitosis and re-enter interphase, the TADs reform over the course of the next several hours — first the compartments, then the TADs, then the fine loop structure. The cell cycle dynamics of 3D structure are themselves a rich area of study.

---

## SEGMENT 11 — Hi-C in development and X-inactivation

Hi-C has been transformative for developmental biology because it lets us watch the 3D genome reorganize as cells differentiate. As a stem cell becomes a neuron, or a fibroblast is reprogrammed to an iPSC, the gene expression program changes dramatically. The compartment structure changes too — regions that were compartment B in the stem cell can switch to compartment A in the neuron, and vice versa. The TAD structure is somewhat more conserved but shows local reorganization. Specific loops appear or disappear as cell-type-specific enhancers contact their target promoters.

One of the most beautiful systems for studying 3D genome dynamics is **X-inactivation**, the process by which female mammalian cells silence one of their two X chromosomes for dosage compensation. The inactive X chromosome — called the Xi — adopts a dramatically different 3D structure from the active X. In the active X, you see the normal TADs and compartments characteristic of an active chromosome. In the inactive X, the TAD structure is largely erased; the chromosome becomes a more uniformly compact, near-spherical structure with a few "mega-domains" of internal contacts separated by a boundary near the DXZ4 macrosatellite.

\[Pause.\]

X-inactivation is driven by a long non-coding RNA called **Xist**, which is transcribed from the future-Xi and coats the chromosome from which it's transcribed, recruiting silencing machinery. Hi-C studies of X-inactivation, by Edith Heard's group and others, have shown that as Xist coats the Xi during early development, the normal TAD structure dissolves over the course of a few hours, replaced by the mega-domain architecture. This is one of the cleanest examples of an RNA molecule reorganizing a chromosome's 3D structure.

Another beautiful application is **HOX cluster regulation**. The HOX clusters are arrays of developmental genes whose expression patterns determine body segments. The temporal and spatial order of HOX gene expression — called colinearity — is partly controlled by a 3D structural switch: in cells where the early HOX genes are active, they're in compartment A; the late HOX genes are in compartment B, silenced. As development progresses, the cluster's 3D structure flips, exposing the later genes and silencing the earlier ones. Hi-C lets us watch this in real time across embryonic stages.

\[Pause.\]

These examples illustrate a general principle: **the 3D genome is not a fixed scaffold but a dynamic, regulated structure that reorganizes with cell fate decisions and developmental transitions.** The same DNA sequence can be folded in many different ways, with profound consequences for which genes are expressed in which cells. Reading the linear sequence tells you the parts list; reading the 3D structure tells you which parts are currently assembled into which circuits.

---

## SEGMENT 12 — Hi-C in disease: enhancer hijacking in cancer

If TADs are regulatory neighborhoods built by CTCF anchors, then breaking those neighborhoods can have catastrophic consequences. This is the story of **enhancer hijacking** in cancer, and it is one of the most striking applications of Hi-C in disease biology.

Here's the basic picture. Cancer cells frequently carry large-scale structural rearrangements — deletions, inversions, translocations, duplications — that move chunks of DNA around the genome. Some of these rearrangements have obvious consequences, like fusing two genes into a single chimeric protein (think BCR-ABL in chronic myeloid leukemia). But many structural rearrangements don't fuse genes and don't obviously change anything in the protein-coding sequence. The puzzle for decades was: how could these rearrangements be oncogenic if they don't change any proteins?

Hi-C provided a striking answer. **A 3D mistake. The rearrangement places a previously-quiet gene next to a strong enhancer that was previously in a different TAD. The TAD boundary that separated them has been deleted or disrupted by the rearrangement. The enhancer can now reach the previously-quiet gene and turn it on inappropriately — sometimes turning it on hundreds of times above its normal expression level. The gene becomes an oncogene by being inappropriately activated, not by any change to the gene itself.**

\[Pause.\]

The classic example, demonstrated in a 2016 paper by Roel Hermans and colleagues, is the activation of TAL1, an oncogene in T-cell acute lymphoblastic leukemia. In some patients, a small deletion next to TAL1 — typically a few kilobases — removes a CTCF binding site that forms a TAD boundary. The deletion doesn't touch TAL1 itself. But by removing the boundary, the deletion lets a powerful enhancer from the neighboring TAD reach into the TAL1 locus and switch the gene on. TAL1 is normally silent in T cells. After the deletion, it's expressed at high levels, and the cell becomes leukemic. Same gene. Same enhancer. The only thing that changed is the wall between them.

A similar story has been told for many oncogenes — MYC activation by enhancer hijacking in various lymphomas; activation of EVI1 in acute myeloid leukemia; activation of GFI1 family genes by structural rearrangements. The pattern is the same: structural rearrangement, TAD boundary disrupted, neighboring enhancer activates inappropriate target.

\[Pause.\]

This insight has major clinical implications. It means that when we sequence a cancer genome and find structural rearrangements, we need to think about their 3D consequences, not just the linear ones. A deletion that removes a CTCF site can be as functionally consequential as a mutation in an oncogene. Hi-C profiling of cancer samples — which is increasingly being done in research and a few clinical settings — can reveal exactly which TAD boundaries have been disrupted and which inappropriate enhancer contacts have formed. This is starting to inform treatment selection in specific cancer subtypes.

The broader lesson: the 3D genome is a target of selection in cancer. Tumors that disrupt TAD boundaries to activate oncogenes have a fitness advantage. The set of "drivers" we should look for in cancer genomes is not just protein-changing mutations and copy-number alterations — it's also 3D structural disruptions that create new regulatory contacts. Hi-C is becoming part of the cancer genomics toolkit.

---

## SEGMENT 13 — Chromosome territories: each chromosome in its own neighborhood

I want to step back to the largest scale of 3D organization and discuss something that predates Hi-C but is illuminated by it: **chromosome territories**. The basic observation, made by light microscopy with fluorescent in situ hybridization (FISH) decades before Hi-C, is that **each chromosome occupies a distinct sub-region of the nucleus**. Chromosome 1 doesn't mingle uniformly with chromosome 2. They each have their own neighborhood, their own approximate location, and contacts between chromosomes are relatively rare compared to contacts within a chromosome.

Hi-C confirmed this in the contact data. When you look at the genome-wide contact matrix, with all chromosomes laid out as sub-blocks, the within-chromosome blocks are intensely populated with contacts (they form the bright squares along the diagonal of the whole-genome matrix). The between-chromosome blocks are much sparser. Two regions on the same chromosome contact each other much more often than two regions on different chromosomes, even when the linear distances are comparable. Each chromosome is largely confined to its own territory.

\[Pause.\]

How big are chromosome territories? Roughly the size you'd expect from a self-avoiding polymer collapsed into a globule occupying a fraction of the nucleus proportional to its DNA content. A small chromosome like chromosome 22 occupies a smaller territory than chromosome 1. The territories are not perfectly ball-shaped — they have irregular boundaries, with arms extending outward and pockets of inter-chromosome contact. But they are distinct enough that you can stain individual chromosomes and see them as separate regions under a microscope.

The territories themselves have substructure. The gene-rich, active end of a chromosome tends to be in the nuclear interior; the gene-poor, heterochromatic end tends to be peripheral. Large compartment A regions tend to face inward; large compartment B regions tend to face the nuclear lamina. The result is that within each chromosome territory, the chromosome has a polarized organization — active facing in, inactive facing out — that contributes to the larger nuclear organization of active chromatin in the interior.

\[Pause.\]

The chromosome territory observation is important conceptually because it tells us that **inter-chromosome contact is the exception, not the rule**. When a Hi-C experiment finds frequent contacts between two genomic locations on different chromosomes, that's biologically interesting because it deviates from the territory expectation. Frequent inter-chromosomal contacts can indicate translocations (the two regions are actually fused on the same chromosome in some cells), or genuine biological clustering (the two regions are part of the same transcription factory or nuclear compartment), or technical artifacts. Interpreting them requires care.

Some inter-chromosomal contacts are real and important. The clustering of ribosomal DNA loci from multiple chromosomes into the nucleolus is one well-known example. The clustering of olfactory receptor genes from many chromosomes into a single "olfactory receptor compartment" in olfactory neurons is another. The 3D genome violates the chromosome territory expectation in specific, regulated ways, and Hi-C is the technique that lets us identify those violations systematically.

---

## SEGMENT 14 — The polymer physics view: fractal globules and equilibrium models

I want to spend a segment on the polymer physics perspective, because the 3D genome is a polymer — a really long, really weird polymer — and the language of polymer physics gives us a framework for thinking about its structure that complements the molecular biology.

The basic question polymer physics asks about Hi-C is: what is the expected contact frequency between two regions of a polymer as a function of their linear distance? For an idealized polymer in three dimensions, the answer depends on the polymer's conformation. A polymer at thermodynamic equilibrium — fully relaxed, swimming in its own random configurations — has a contact frequency that decays as the negative three-halves power of linear distance. This is the "equilibrium globule" scaling. A different conformation, called the "fractal globule," predicts a decay as the negative one-power of linear distance.

\[Pause.\]

When Lieberman-Aiden and colleagues measured the actual contact frequency decay in human Hi-C data, they found that it followed the negative one-power scaling — consistent with a fractal globule conformation, not an equilibrium globule. This was a striking result. The fractal globule is a specific polymer conformation, originally proposed by Alexander Grosberg in the 1980s, that is dense, non-equilibrium, and has a kind of nested self-similar structure where loops contain sub-loops contain sub-sub-loops, organized so that the polymer is highly compact but never gets tangled with itself.

The fractal globule is an attractive model for chromatin for several reasons. First, it matches the observed contact frequency decay. Second, it's compact, packing the polymer into a small volume without overlap. Third, and crucially, it's _unknotted_ — chromosomes don't get tangled, which is essential because tangled chromosomes can't separate cleanly at mitosis. An equilibrium globule, by contrast, would be heavily knotted. Real chromosomes need to be foldable and unfoldable repeatedly without tangling, and the fractal globule conformation has the right topology.

\[Pause.\]

The polymer physics interpretation has been refined over the past decade by Leonid Mirny and others, who have developed sophisticated simulation models of chromatin that incorporate the loop extrusion mechanism. When you simulate loop extrusion by cohesin in a polymer model — randomly loading cohesin onto a chromatin polymer, having it extrude loops, blocking it at CTCF sites — the resulting polymer conformation reproduces the Hi-C contact maps observed experimentally. The TADs emerge naturally from extrusion. The fractal-globule-like decay emerges from the population statistics of loops at all scales.

This is one of the things that makes loop extrusion such a satisfying model — it provides a mechanism by which a dynamic process (active extrusion) produces an apparent equilibrium-like structure (the dense, unknotted, fractal-globule-like conformation) that matches the data. The 3D genome looks like a thermodynamic equilibrium structure, but it's actually a non-equilibrium dynamic steady state, maintained by active ATP-driven processes.

\[Pause.\]

The polymer physics view is also useful for distinguishing biology from physics in the Hi-C data. Some features — the distance-dependent decay, the rough magnitude of contact frequencies — are determined by polymer physics and are common to any polymer with similar properties. Other features — the specific positions of TAD boundaries, the identity of compartment A versus B, the specific loops between specific enhancer-promoter pairs — are biological, determined by the locations of CTCF sites, the chromatin marks, the transcription factor binding. Reading a Hi-C map well means separating the physics from the biology, and the polymer physics models are essential for that separation.

---

## SEGMENT 15 — Cohesin loss and TAD dissolution: proof of loop extrusion

Now let me return to the loop extrusion story and give you the punchline: the experiments that proved the model. I told you in Segment 7 that loop extrusion was proposed as a theoretical prediction, on the basis of polymer physics and Hi-C data. The model made specific predictions about what should happen if you perturb the system. Those predictions were tested in a series of beautiful experiments around 2017-2018, and all of them were confirmed.

The cleanest experimental test: **if you remove cohesin, TADs should dissolve.** The prediction follows directly from the model — TADs are loops extruded by cohesin, so removing cohesin should eliminate the loops and therefore the TADs. The experiment was done by several groups, most notably by Sridhar Rao and colleagues in Daniel Larson's lab and by Wibke Schwarzer and colleagues in Francois Spitz's group, using an auxin-inducible degron system to rapidly deplete cohesin in mammalian cells, then performing Hi-C before and after depletion.

\[Pause.\]

The result: TADs dissolved within an hour of cohesin loss. The sharp block structure on the Hi-C diagonal disappeared. The compartments, however, remained intact — A regions still preferentially contacted A regions across the chromosome; B regions still contacted B regions. Compartments are not built by cohesin; they're built by chromatin self-association based on chromatin state. But TADs vanished. The prediction was confirmed.

The flip side: **if you remove CTCF, the TAD anchors should move.** The prediction: CTCF defines where the loop boundaries are, so removing CTCF should leave cohesin still extruding loops but with no defined stopping points, leading to longer-ranging and less-anchored loops. This was tested by Elphege Nora and colleagues in 2017, using a degron system to rapidly deplete CTCF. The result: TADs didn't vanish — they were still there, but their boundaries were blurred and less sharp. Cohesin was still loop-extruding, but without CTCF as a roadblock, the loops were larger and more variable. Exactly as predicted.

\[Pause.\]

A third test: **if you remove Wapl — the cohesin-unloading factor — cohesin should stay on chromatin longer and produce larger loops.** This was tested by Yuko Haraguchi, Anders Hansen, and others. The result: when Wapl is depleted, cohesin accumulates on chromatin, loops become larger, and on the Hi-C map you see the "stripe" patterns characteristic of cohesin extruding past its normal stopping points and forming longer-range contacts. Again, the prediction confirmed.

**The triple convergence — remove cohesin, TADs dissolve; remove CTCF, TADs blur; remove Wapl, loops enlarge — was the experimental triumph of loop extrusion. All three predictions, made on theoretical grounds before the experiments were done, were confirmed by the experiments. This is the kind of scientific evidence that makes a model accepted as fact.** The loop extrusion model is now treated as established mechanism, not hypothesis.

\[Pause.\]

The cohesin-loss experiments also revealed something interesting and important about the biology. The genes whose expression changed after cohesin loss were not a random sample — they were specifically the genes regulated by long-range enhancer-promoter contacts within TADs. Genes regulated by short-range, intra-TAD-base contacts were largely unaffected. Genes regulated by very long-range contacts that crossed TAD boundaries were also unaffected. The cohesin-mediated TAD architecture is specifically required for the subset of regulatory contacts that occur within TADs at substantial distances. This is consistent with the view that TADs are the structural scaffold for enhancer-promoter interactions in a specific distance range — typically tens to hundreds of kilobases.

What about the genes that didn't change? Many promoters seem to be active regardless of TAD architecture, presumably because they're regulated by short-range elements within the same nucleosome neighborhood, or by trans-acting factors that don't depend on 3D folding. The 3D genome is essential for some regulation but not all. The picture that has emerged is nuanced: cohesin loops are one tool in the regulatory toolbox, important for some genes and dispensable for others.

---

## SEGMENT 16 — Hi-C for genome assembly: scaffolding contigs into chromosomes

Now I want to tell you about a beautiful, completely unexpected application of Hi-C that has nothing to do with regulation or disease. It's about genome assembly — the process of taking a pile of short DNA sequencing reads and reconstructing the genome they came from. Hi-C, it turns out, is one of the best tools we have for this, and it has changed how we assemble genomes for almost every non-model organism on Earth.

Here's the problem. When you sequence a new species' genome — say, a beetle, or a fungus, or an obscure plant — you don't start with a reference. You start with billions of short reads, you assemble them into contigs (contiguous sequences) using an assembler, and you end up with hundreds or thousands of contigs ranging from a few kilobases to a few megabases. These contigs are pieces of the genome, but you don't know which contigs belong on which chromosome, or what order they go in, or how they're oriented. Assembly stops at contigs because short reads can't bridge the long repetitive regions between them.

\[Pause.\]

Here's the trick. **Run Hi-C on the same organism. Hi-C tells you which regions of the genome are in physical contact in 3D. Contigs that are on the same chromosome will have many Hi-C contacts to each other, because everything on a chromosome is in the same chromosome territory. Contigs on different chromosomes will have very few Hi-C contacts to each other. So by clustering contigs based on their Hi-C contact frequencies, you can group them into chromosomes — and even order and orient them within each chromosome, because contigs that are linearly adjacent on a chromosome have stronger Hi-C contacts than contigs that are far apart.**

This is the analogy. **Hi-C scaffolding is the bonus. The technique was invented for studying 3D folding, but it turns out that the simple fact "contigs that share Hi-C contacts must be on the same chromosome" lets you scaffold any assembly for free. It's like buying a thermometer and finding out it also measures barometric pressure.**

The first major papers using this approach appeared around 2013, and by 2015 it had become the standard scaffolding tool. Today, almost every chromosome-scale genome assembly of a new species uses Hi-C scaffolding. Companies like Phase Genomics and Dovetail Genomics sell standardized Hi-C kits specifically for the genome-assembly use case. National-scale projects like the Earth BioGenome Project, which aims to sequence every eukaryotic species, depend heavily on Hi-C for producing chromosome-level assemblies.

\[Pause.\]

The cost is modest — one Hi-C library, sequenced to a few hundred million reads, is sufficient to scaffold a typical animal or plant genome — and the result is dramatic, turning a fragmented assembly of thousands of contigs into a chromosome-level reference with a few dozen sequences. The technique works because chromosome territories are real and robust: contigs from the same chromosome always have more Hi-C contacts to each other than contigs from different chromosomes, regardless of the species, as long as the cells were properly fixed.

This is one of my favorite results in modern genomics, because it illustrates the principle that a tool invented to answer one question often turns out to answer another, unrelated question even better. Hi-C as a regulatory genomics tool is important. Hi-C as a genome assembly tool may turn out to be even more consequential in the long run, because it's how we will assemble the genomes of millions of species over the coming decades.

---

## SEGMENT 17 — Hi-C in clinical samples: tumor chromothripsis detection

A more recent application is Hi-C in clinical cancer samples for detecting complex structural rearrangements. Cancer genomes are messy. They often contain dozens of structural variants — translocations, inversions, deletions, complex rearrangements where many things happen at once. The most extreme version is called **chromothripsis** — literally "chromosome shattering" — where a single chromosome gets fragmented into dozens of pieces and reassembled in a chaotic order, sometimes in a single catastrophic event.

Detecting chromothripsis from short-read sequencing alone is hard. You can identify individual rearrangement junctions, but reconstructing the overall topology — which fragments are now adjacent, in what order, on what derivative chromosome — is genuinely difficult. Hi-C makes it much easier. **The contact map of a chromothriptic chromosome shows obvious off-diagonal blocks of contact connecting fragments that came from different parts of the original chromosome. The structure is laid out visually in the heatmap. You can see chromothripsis the way you would see a constellation in the night sky.**

\[Pause.\]

This has clinical applications. In certain cancers — particularly pediatric brain tumors like medulloblastoma, certain leukemias, and Sonic-hedgehog-pathway-driven tumors — chromothripsis is a major driver, often the initiating event of the cancer. Identifying it precisely matters for prognosis and for understanding which oncogenes are being activated by the rearrangement. Hi-C profiling of tumor samples has become a research tool for this kind of structural analysis, and clinical implementations are starting to appear.

The same logic applies to identifying enhancer hijacking events we discussed in Segment 12. Cancer Hi-C can reveal that a specific oncogene has been brought into a TAD with a powerful enhancer that wasn't its normal neighbor. The diagnostic value of this — knowing which mis-regulated oncogene to target therapeutically — is meaningful in research settings and is beginning to inform clinical decisions for specific cancer subtypes.

\[Pause.\]

The cost and complexity of Hi-C have limited its clinical adoption so far — it's expensive, the bioinformatics is specialized, and short-read structural variant callers can detect most rearrangements without needing Hi-C. But for samples where the structural landscape is unusually complex, where you suspect chromothripsis or want to map regulatory consequences of rearrangements, Hi-C provides information that no other technique provides as directly. In the next decade, I expect Hi-C to become a standard part of the cancer genomics workflow for selected cases, particularly where 3D regulatory consequences of structural variants are clinically actionable.

---

## SEGMENT 18 — The frontier: Pore-C, spatial omics, real-time chromatin imaging

We'll close with a survey of the frontier — what's emerging now that may define the next decade of 3D genomics.

**Pore-C** is a recent technique that combines proximity ligation with Oxford Nanopore long-read sequencing. Standard Hi-C produces pairs of contacts — two regions that were in contact. Pore-C produces **multi-way contacts** — sets of three, four, five, or more regions that were all in contact simultaneously in the same crosslinked complex. The mechanism: instead of ligating pairs and sequencing short reads, Pore-C does concatemeric ligation of all the fragments within each crosslinked complex into a long chimeric molecule, then sequences the entire concatemer on a long-read sequencer. Each long read reports a set of regions that were co-located in the same complex. This gives you a much richer picture of higher-order 3D structure — you can detect, for instance, when three enhancers all simultaneously contact a single promoter, or when a transcription factory pulls together many genes at once. It's the natural extension of Hi-C beyond pairwise contacts.

\[Pause.\]

**Spatial omics integration** is another major frontier. Techniques like MERFISH and seqFISH use multiplexed in situ hybridization to image hundreds or thousands of specific genomic regions in single nuclei, providing direct 3D coordinates rather than indirect contact frequencies. Combining these imaging methods with Hi-C contact data gives a more complete picture — Hi-C says which regions contact which, and imaging says where each region is in the nucleus. The two together provide a much more constrained, more direct view of 3D genome structure than either alone.

**Real-time chromatin imaging** in living cells, using techniques like CRISPR-Cas9 with fluorescent guide RNAs that mark specific genomic locations, is starting to let us watch chromatin folding happen dynamically. We can see specific loci diffuse through the nucleus, encounter and contact specific other loci, and dissociate, all in real time in living cells. The kinetics that we previously inferred indirectly from population-averaged Hi-C — loops forming and dissolving on the timescale of minutes — can now be observed directly. The molecular biology of cohesin and CTCF can be married to live-cell dynamics in ways that were impossible a decade ago.

\[Pause.\]

**Cell-type-resolved 3D genomics** is another active frontier. Single-cell Hi-C, while existing, is still limited in resolution per cell. New approaches combining barcoded ligation with massively parallel sequencing — analogous to the way droplet-based single-cell RNA-seq works — are pushing the throughput up to hundreds of thousands of cells per experiment. As these methods mature, we'll get cell-type-specific 3D genome maps across tissues, developmental stages, and disease states at scale.

**Causal manipulation of 3D structure** is starting to be possible. Techniques like CRISPR-based recruitment of loop-anchoring proteins to specific genomic locations can force or prevent specific 3D contacts, letting us test directly whether a given enhancer-promoter contact is necessary for a given gene's expression. The 3D genome is moving from a descriptive map to a perturbable system.

\[Pause.\]

The grand vision — and this is where the field is heading — is a complete map of every regulatory contact in every cell type, with quantitative dynamics, integrated with all the other regulatory genomics data (ChIP-seq, ATAC-seq, transcription factor binding, expression). The 3D genome is the integrating layer that connects the linear sequence to gene expression. As we map it more completely, we will understand cell identity, development, and disease in ways that the linear genome alone has never permitted.

Hi-C, in fifteen years, has taken us from "the linear sequence is the whole genome" to "the linear sequence is just the parts list; the 3D folding is the actual circuit diagram." That is a paradigm shift, and it is still unfolding. The next decade will see this picture sharpen dramatically. You're going to read papers your whole careers that are downstream of the Hi-C revolution, and now you know how it works.

Thanks for staying with me through two hours.

---

## APPENDIX

**Key terms.** 3C — original chromosome conformation capture, 2002 Dekker. 4C — one-against-all variant. 5C — many-against-many variant. Hi-C — genome-wide, 2009 Lieberman-Aiden et al. In situ Hi-C — 2014 Rao et al., ligation inside intact nuclei. Micro-C — MNase-based, near-nucleosome resolution. Capture Hi-C — hybridization-enriched. HiChIP — Hi-C combined with ChIP. Pore-C — multi-way contacts via nanopore.

**Key features in a Hi-C heatmap.** Diagonal: local contacts (always strong). Off-diagonal squares along diagonal: TADs. Checkerboard at large scale: compartments A and B. Focal dots in corners of TADs: loops. Inter-chromosomal blocks: translocations or biological clustering.

**Key molecules.** Cohesin: SMC1, SMC3, RAD21, STAG1/2. Ring-shaped ATP-powered loop extruder. NIPBL loads it; Wapl unloads it. CTCF: 11-zinc-finger DNA-binding protein, binds 19-bp motif with polarity. Acts as directional roadblock for cohesin. Convergent CTCF rule: loop anchors are pairs of convergently-oriented CTCF sites.

**Key papers.** Dekker et al. 2002 (3C). Lieberman-Aiden et al. 2009 (Hi-C, compartments, fractal globule). Dixon et al. 2012 and Nora et al. 2012 (TADs). Rao et al. 2014 (in situ Hi-C, loop catalog, convergent rule). Hsieh et al. 2015 (Micro-C). Sanborn et al. 2015 and Fudenberg et al. 2016 (loop extrusion theory). Schwarzer et al. 2017 and Nora et al. 2017 (cohesin/CTCF degron, TAD dissolution).

**Resolution scales.** 1 megabase: compartments. 100 kb-1 Mb: TADs. 10-100 kb: loops. Sub-10 kb: fine structure, requires Micro-C and deep sequencing.

**Typical experimental scale.** Bulk Hi-C: ~10 million cells input. Sequencing depth: billions of read pairs for kilobase resolution. Cost: thousands of dollars per sample in sequencing alone.

**Things Hi-C cannot do.** Tell you whether a contact is functional (regulatory) versus structural (incidental). Tell you the dynamics of contacts (need single-cell or live-cell imaging). Distinguish very rare contacts from noise. Detect contacts that depend on non-formaldehyde-crosslinkable interactions.

**Recommended further reading.** Misteli T. (2020) "The Self-Organizing Genome: Principles of Genome Architecture and Function." Cell 183:28-45. Mirny LA and Solovei I. (2024) "Keeping chromatin in the right place: chromosome territories and beyond." Nature Reviews Molecular Cell Biology. Dekker J, Mirny L. (2016) "The 3D Genome as Moderator of Chromosomal Communication." Cell 164:1110-1121.

---
