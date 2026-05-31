# Single-Cell Sequencing

**A 2-hour undergraduate genomics lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The bulk problem — why averaging across cells hides the biology

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about single-cell sequencing — a technology that, in the space of about a decade, has fundamentally changed what biologists can ask of a sample. Not "what is the average gene expression of this tissue," which is what we could already do. But "what cells are in this tissue, in what proportions, in what states, and how does each individual cell differ from its neighbors." That shift — from average to individual — sounds modest. It is not. It is the difference between knowing the mean income of a country and knowing the actual distribution of incomes, household by household. It changes every question you can ask.

So let me start with an analogy that I want you to hold onto for the next two hours.

Imagine you have a fruit salad. A real fruit salad — strawberries, grapes, blueberries, kiwi, mango, the works. You want to know what's in it. There are two ways you could find out. Option one: throw the whole bowl into a blender, hit puree, and analyze the resulting smoothie. You measure sugars, acids, pigments, fibers — and you get back an average. The smoothie is forty percent strawberry sugar, twenty percent grape, fifteen percent mango, and so on. Useful, in a limited sense. But you've lost something profound. You can't see the individual fruits anymore. You can't tell whether there are two kinds of grapes or one. You can't find the single weird piece of dragon fruit that's only one percent of the mass. You can't see structure.

Option two: pick the fruit salad apart, piece by piece. Strawberry — it's a strawberry. Grape — it's a grape. Repeat for every piece. Now you have a list — this many strawberries, this many grapes, three pieces of mango, one piece of dragon fruit. You can see the rare types. You can see whether the grapes are red or green. You can see the actual composition of the bowl, not just an average.

\[Pause.\]

That is the difference between bulk RNA sequencing and single-cell RNA sequencing. Bulk RNA-seq, which we'll come back to, is the smoothie approach. You take a piece of tissue — say, a chunk of mouse brain, or a tumor biopsy, or a tube of blood — you lyse all the cells together in one tube, you extract the RNA from the pool, and you sequence it. What you get back is the average gene expression of every cell in that sample, weighted by how much RNA each cell contributed. It's useful. It's been the workhorse of molecular biology for fifteen years. But it has one terrible limitation: it cannot tell you which cells were there. A tumor biopsy is not one cell type. It's tumor cells, plus immune infiltrate, plus stromal fibroblasts, plus endothelial cells from blood vessels, plus dying cells, plus a few stem cells if you're lucky. Bulk RNA-seq blends them all together and gives you a number that doesn't correspond to any real cell in the sample. It's the smoothie.

Single-cell RNA-seq is the fruit-salad approach. You take that same tissue, but instead of pooling, you physically separate the cells from each other, label each one with its own molecular tag, and then sequence them. At the end you get back not one expression profile but tens of thousands — one per cell. You can see the tumor cells separately from the immune cells. You can see that there are actually three sub-populations of immune cells, not one. You can find the rare population that's only one percent of the sample. You can ask questions that bulk could not answer, because bulk was already averaging the answers together before you ever saw them.

\[Pause.\]

If you walk out of here in two hours and you can do three things — one, explain in plain English why bulk RNA-seq fundamentally cannot answer questions about cell type composition, and how partitioning plus barcoding solves that problem; two, sketch the inside of a 10x Chromium droplet and tell me what each component is doing and why; three, look at any modern paper that says "we performed single-cell RNA-seq" and have a real intuition for what the data looks like, what the limitations are, and what biological questions it can and cannot answer — then we've succeeded. Everything else hangs off those three.

One orienting fact before we go deeper. Single-cell sequencing is not a sequencing chemistry. It is a sample-preparation technology. The actual reading of bases is still done on an Illumina instrument, or sometimes on a long-read platform, using exactly the same sequencing-by-synthesis chemistry we covered when we talked about Illumina. What changes is everything upstream of the sequencer. What changes is how you prepare the sample, how you label each cell's RNA before pooling, how you turn the resulting reads back into per-cell measurements. Single-cell sequencing sits on top of next-generation sequencing the way an operating system sits on top of a CPU — it uses the underlying hardware to do something the hardware alone couldn't have done. The whole conceptual breakthrough is in the library preparation, not the sequencing.

And the conceptual breakthrough is, in one phrase, **partition and barcode**. Separate the cells from each other physically, so each one is in its own compartment. Inside each compartment, tag every molecule with a unique cell-specific zip code. Then pool everything back together, sequence it on a normal Illumina machine, and use software to sort the reads back by their zip codes. That's it. That's the whole trick. Everything else is engineering.

Let me tell you where it came from.

---

## SEGMENT 2 — The 1990s precursor — pioneering single-cell PCR, hand-isolated cells

Single-cell sequencing did not arrive fully formed in 2015. It had a long prehistory, going back to the late 1980s and early 1990s, when a few stubborn investigators tried to pull a single cell off a microscope slide with a glass micropipette and ask what was inside it. The answer at the time was: very little, because the technology to amplify and read tiny amounts of nucleic acid was barely starting to exist. But the ambition was there. The question was there. The methods would catch up.

The earliest experiments were single-cell PCR. You would take a fresh tissue slice — a slice of neural cortex, say — visually identify a particular neuron under the microscope, then aspirate that single cell into a glass pipette by suction. Maybe a hundred picoliters of cell volume, drawn into a glass tube. You would deposit that cell into a PCR tube, add reagents, and amplify whatever gene you cared about — maybe one gene, maybe a small panel. From the amount of product you got, or the sequence of the product, you would learn something about that one cell. Was this neuron expressing a particular ion channel? Did this leukemia cell carry a particular mutation? These were one-cell, one-gene experiments, painful, slow, but real.

The next leap, in 1992, came from James Eberwine's lab at the University of Pennsylvania. Eberwine and colleagues figured out how to amplify all the messenger RNA from a single neuron, not just one gene. The trick used a method called **linear amplification by T7 RNA polymerase** — you reverse-transcribe the cell's mRNA into cDNA, you tack a T7 promoter onto the ends, and then you use T7 polymerase to make many RNA copies of every cDNA in proportion to its starting abundance. The output was a tube containing amplified RNA representing, in rough proportion, the transcriptome of one neuron. You couldn't sequence it then — you'd hybridize it to a Northern blot or a microarray, when those came along. But for the first time, you had a way to look at all the genes expressed in a single cell, simultaneously.

\[Pause.\]

For the next fifteen years, single-cell work continued in this slow, artisanal mode. Hand-isolated cells, sometimes one a day, sometimes one a week, with very careful technique, producing a small number of single-cell transcriptome measurements per laboratory per year. The throughput was tiny. The cost per cell was huge. The data was noisy. And so single-cell methods sat in a corner of molecular biology, used by specialists, ignored by everyone else. The dominant paradigm was bulk — homogenize the tissue, extract the RNA, run a microarray, then later run RNA-seq. Bulk was cheap, bulk was easy, bulk gave clean averages. The fact that those averages were misleading was a problem most people preferred not to think about.

Then, in 2009, a paper came out that should mark the start of the modern era. **Fuchou Tang and colleagues**, working in the lab of Azim Surani at the Gurdon Institute in Cambridge, published the first complete single-cell mRNA sequencing experiment. They took a single mouse blastomere — a cell from a very early embryo — performed reverse transcription and amplification, and sequenced the resulting library on a next-generation sequencer. One cell, the whole transcriptome, on an Illumina-style machine. The Tang protocol was technically demanding. It worked on a few cells at a time, not thousands. But it proved the principle: you could take one cell and read its entire RNA content using next-generation sequencing.

What followed was a wave of refinements over the next five years. Better reverse transcription chemistries that captured more of the RNA. Better template-switching reactions that captured the full length of each transcript. Better automation, so you could do dozens of cells in a day instead of one. The methods went by names you'll still see: Tang 2009, STRT (single-cell tagged reverse transcription, from Sten Linnarsson in Stockholm, in 2011), CEL-seq from Itai Yanai in 2012, **Smart-seq** in 2012 and **Smart-seq2** in 2013 from Rickard Sandberg's lab in Stockholm. Each of these processed cells one at a time, in tubes or in 96-well plates. Each could give you a beautiful, deep transcriptome of an individual cell. None of them could give you ten thousand cells in an afternoon. That was the gap. And it would take a different technology — droplets — to close it.

\[Pause.\]

But before we get to droplets, I want you to feel why the conceptual breakthrough that came next was so important. In the plate-based era — Smart-seq and its cousins — you spent a week doing single-cell library prep for maybe a hundred or a few hundred cells. Each cell got its own physical tube, its own physical aliquot of enzyme, its own column for cleanup, its own slot on a sequencing flow cell. Everything was per-cell. The cost scaled linearly with cell count. If you wanted ten thousand cells, you needed ten thousand times the labor and reagent of one. That ceiling was hard. And it kept single-cell experiments small.

The breakthrough that broke the ceiling wasn't about doing the chemistry faster. It was about figuring out how to put a unique identifier — a molecular zip code — on every transcript from every cell, in parallel, so that you could pool all the cells together into one tube and process them as a single library. Suddenly your reagent costs are flat instead of linear. Suddenly the only thing that scales with cell count is the sequencing depth at the end. Suddenly ten thousand cells is no harder than a hundred. That's what barcoding did. That's the move that turned single-cell from artisanal to industrial. Let me tell you exactly how it works.

---

## SEGMENT 3 — The conceptual breakthrough — barcoding to distinguish cells in a pool

Here is the central conceptual move, and if you understand only one thing from today's lecture, understand this one. I want to give you an analogy first, and then I'll show you the mechanism.

Imagine you run a mail-sorting facility, and one day a hundred thousand letters arrive in a single enormous pile, all loose, no envelopes. Just paper. Your job is to figure out which house each letter came from. Impossible, right? You have no information about origin. The letters are unlabeled. You can read what each letter says, but you can't know which letter came from which house. This is the problem with bulk sequencing. You sequence a pool of RNA molecules and get back the molecules, but every read is unlabeled. You have no way to know which cell each read came from.

Now imagine the same hundred thousand letters, but with one change. Before the letters left their houses, every house in town was given a unique zip code — a number stamped onto every letter that house produced. House one stamps zip code AAAA on every letter. House two stamps BBBB. And so on. Now the letters arrive at the sorting facility in one enormous pile, but every single letter carries its zip code, written right there at the top. You can read each letter, read its zip code, and immediately sort it back into the right pile. Suddenly the pool of letters is not unsortable. It is exquisitely sortable. You can recover, for every house, exactly which letters came from it. The pile itself didn't change. What changed is that you put information into the pile before it became a pile.

That is single-cell sequencing in one analogy. **Every cell gets its own zip code attached to every transcript it produces. When you sequence the pool, you can sort reads back to their cell of origin by reading the zip code.**

\[Pause.\]

Mechanically, the zip code is a short stretch of DNA — typically twelve to sixteen base pairs long — appended to the start of every cDNA molecule made from a particular cell's mRNA. The barcode is the same for every transcript in that cell. The barcode is different between cells. When the sequencer reads each molecule, the first sixteen bases of the read are the barcode, telling you which cell. The rest of the read is the actual transcript sequence, telling you what gene. With both pieces of information together, every read becomes a per-cell, per-gene measurement. That's the data type. That's what comes out of a single-cell experiment.

How do you actually accomplish this physically? How do you make sure that all the mRNA molecules from one specific cell get tagged with one specific barcode, and a different cell gets a different barcode? The answer is: you have to physically isolate each cell into its own tiny reaction chamber, while the barcoding happens, then pool back together once the barcodes are securely attached.

There are basically three families of ways to make these tiny isolated reaction chambers. The first is **plate-based** — put one cell into each well of a 96-well or 384-well plate, do the chemistry, then pool. This is Smart-seq and its descendants. The second is **droplet-based** — encapsulate each cell into a tiny water-in-oil droplet, do the chemistry inside the droplet, then break the droplets and pool. This is Drop-seq, inDrops, and 10x Chromium. The third is **nanowell-based** — etch tens of thousands of nanoliter-sized wells into a chip, load cells into them by gravity, do the chemistry on the chip. This is BD Rhapsody and a few others. We'll focus on plates and droplets, because those dominate the field.

But across all three approaches, the principle is the same. Physical isolation, so that the barcoding reaction in one chamber can't contaminate the barcoding reaction in another. A different barcode delivered to each chamber. Then pool everything and let sequencing read it all back out. The chamber is the source of the partitioning. The barcode is the source of the identity. Together, they let you reconstruct a per-cell measurement from a pooled library.

\[Pause.\]

Now, why does this matter so much? Why does this one engineering move open up so much new biology? Let me give you the answer in three forms.

First, **rare cells become visible**. In a bulk RNA-seq experiment, a cell type that represents one percent of your sample contributes one percent of the signal. It is drowned out by the other ninety-nine percent. You literally cannot find it in the data; the average has erased it. In single-cell, every cell is a separate measurement. The one-percent population shows up as its own cluster of cells with its own distinct expression profile. Rare populations — stem cells, rare neuron types, the one tumor cell out of a hundred that's resistant to chemotherapy — become trivially findable.

Second, **heterogeneity within a type becomes visible**. Bulk RNA-seq of a tumor biopsy tells you the average. But the tumor cells in that biopsy are not uniform. Some are dividing, some are quiescent. Some are stem-like, some are differentiated. Some have one mutation, some have another. Bulk averages over all of them. Single-cell shows you the distribution. You can see whether the tumor has two states or twenty, whether the states change after treatment, which states predict outcomes.

Third, **mixed tissues become decomposable**. A piece of tissue is never just one cell type. Brain tissue contains dozens of cell types — many flavors of neurons, several flavors of glia, vascular cells, immune cells. Bulk RNA-seq smears them all together. Single-cell lets you decompose the tissue into its component cell types and study each one separately. This is the foundation of every cell atlas project, every developmental trajectory, every tissue-wide map of a disease state.

These three things — rare cells visible, heterogeneity visible, mixtures decomposable — are why single-cell took over biology. They're the answers you couldn't get from bulk, no matter how hard you tried. The barcoding trick made them all suddenly accessible. Now let me show you the methods that put the trick into practice, starting with plates.

---

## SEGMENT 4 — Plate-based methods — Smart-seq, Smart-seq2, depth over breadth

The first family of single-cell methods to really mature was plate-based. The setup is conceptually simple. You take a multi-well plate — typically 96 wells, sometimes 384 — and you sort one cell into each well, usually using a fluorescence-activated cell sorter, FACS, which spits cells one at a time into target wells based on whatever markers you're sorting on. Now each well contains exactly one cell, suspended in a few microliters of buffer with lysis reagents. From there, every well is its own miniature single-cell library prep. Reverse transcription happens in the well. PCR amplification happens in the well. Library tagmentation happens in the well, or right after. Then, before sequencing, you pool the contents of all the wells together — with sample indexing so you know which read came from which well — and load the pooled library onto an Illumina flow cell.

The most successful version of this approach is called **Smart-seq**, and especially its second-generation refinement **Smart-seq2**, published in 2013 by Rickard Sandberg's group in Stockholm. SMART, in this name, stands for Switching Mechanism At the 5' end of RNA Template — and it refers to a clever trick involving a particular reverse transcriptase enzyme that, when it reaches the 5' end of an mRNA, adds a few extra cytosines as overhang, allowing a complementary template-switching oligo to bind and let the enzyme keep going. The upshot is that you can capture the full length of each transcript, end to end, in a single reverse-transcription reaction. That's the key feature of Smart-seq2: **full-length transcript coverage**, not just the three-prime end.

Why does full-length matter? Two reasons. First, it lets you detect splice variants — different isoforms of the same gene that include or skip particular exons. If you only sequence the three-prime end, all isoforms look the same. With full-length, you see which exons are present in each transcript and you can tell isoforms apart. Second, full-length captures more total signal per transcript. You get more reads per gene, you can detect lower-abundance transcripts, you can call mutations within the coding sequence. Smart-seq2 typically detects something like five thousand to ten thousand genes per cell, with high sensitivity and low dropout. That's a deep, rich per-cell profile.

\[Pause.\]

Here is the analogy I want you to hold for Smart-seq2 and the plate-based methods in general. **Plate-based is the high-coverage alternative — one cell per well, full-length cDNA, more transcripts per cell, but vastly fewer cells per experiment. When you need depth, not breadth.**

What do I mean by depth versus breadth? Depth means: how much do you learn about each individual cell? How many genes do you detect per cell? How accurately can you measure low-abundance transcripts? How well can you distinguish splice isoforms or mutations? Breadth means: how many cells do you process in one experiment? Is it a hundred, a thousand, ten thousand, a hundred thousand, a million?

These two dimensions trade off against each other, given a fixed sequencing budget. Sequencing is expensive. Every read you assign to one cell is a read you can't assign to another. If you want very deep coverage of each cell, you have to give each cell a lot of reads, which means you can only afford to process a small number of cells. If you want a lot of cells, you have to spread your reads thin, giving each cell less coverage. Plate-based methods sit firmly on the depth side. You get a few hundred cells per plate, with maybe a million reads per cell, detecting most of each cell's transcriptome with high quality. Droplet methods, which we'll get to, sit firmly on the breadth side. You get tens of thousands of cells per run, with maybe twenty thousand reads per cell, detecting only a slice of each cell's transcriptome but capturing the diversity of the population.

The right choice depends on the question. If you want to characterize a small number of rare cells in fine detail — say, you've FACS-sorted out a hundred putative stem cells from a tissue, and you want to know what makes them tick — Smart-seq2 is your tool. Deep, full-length, mutation-callable transcriptomes of a hundred cells. If you want to make an atlas of a whole tissue, characterizing tens of cell types and their relative proportions, droplets are the tool. Shallow but broad.

\[Pause.\]

The newer evolution of plate-based methods is **Smart-seq3**, published in 2020, which adds unique molecular identifiers — UMIs — to the full-length data, so you get both the depth advantages of Smart-seq2 and the molecule-counting capability of droplets. We'll come back to UMIs in Segment 8 because they deserve a segment of their own. For now, the point is that plate-based has not stood still. It continues to be developed for the use cases where depth matters more than throughput.

One more practical note. Plate-based methods, because each well is its own physical reaction, are easier to integrate with other measurements on the same cell. You can image the cell before lysing it. You can patch-clamp it to record its electrical activity, then sequence its RNA — that's a technique called Patch-seq, very valuable in neuroscience for linking electrophysiology to transcriptome. You can FACS-sort cells based on surface markers, putting only the cells you care about into each well. Plates give you a level of per-cell control that droplets, by their nature, cannot match. Droplets are statistical and bulk-flow; plates are deterministic and individual. Each has its place.

But for sheer scale — for the kinds of cell-atlas projects that catalogued every cell type in the human body — plates were too slow. The field needed something that could process a hundred thousand cells in an afternoon, with one technician and one machine. That something was the droplet. And it arrived, in two papers back-to-back, in May 2015.

---

## SEGMENT 5 — Drop-seq and inDrops (2015) — the academic microfluidic explosion

May 21, 2015. The journal _Cell_ publishes two papers, back to back, from two different academic labs, that together announce the arrival of high-throughput droplet-based single-cell RNA sequencing. The first paper, from Evan Macosko and Steve McCarroll's lab at Harvard, describes a method called **Drop-seq**. The second, from Allon Klein and Marc Kirschner's lab also at Harvard, describes a method called **inDrops**. Both methods solve essentially the same problem in essentially the same way, using microfluidic devices to encapsulate single cells in water-in-oil droplets together with barcoded primers, then doing the reverse transcription inside the droplets so each cell's transcripts come out tagged with that cell's barcode. The simultaneity of the two papers — independent groups arriving at the same solution at the same time — is the field's signal that an idea has come of age.

Let me focus on Drop-seq, because it's the cleaner pedagogical example, and because the engineering of Drop-seq is essentially what 10x Chromium would later commercialize at scale.

Here's the setup. You have a microfluidic chip — a piece of polymer the size of a postage stamp, with channels etched into its surface, like a tiny plumbing diagram. There are three inputs to the chip. From one input, you flow in a suspension of single cells in buffer. From a second input, you flow in a suspension of **barcoded beads** — these are about the same size as a cell, made of a soft gel-like material, with millions of copies of a DNA primer attached to each bead's surface. From the third input, you flow in oil, the carrier fluid that will form the droplets. The three streams meet at a junction where they pinch off into discrete water-in-oil droplets — picture little spherical pearls of water, each containing whatever happened to be in the water at the moment of pinch-off, suspended in a continuous stream of oil. Each droplet is about a nanoliter in volume.

The dilution of cells and beads in their respective streams is carefully tuned so that, on average, each droplet contains zero or one cell, and zero or one bead. Most droplets contain neither — they're just empty pearls of buffer in oil. A small fraction contain one cell and one bead together — and those are the productive droplets, the ones that will give you data. Empty droplets get discarded computationally at the end. Droplets with two cells or two beads are problems we'll discuss in Segment 10 as "doublets."

\[Pause.\]

Now here is the critical part: what's on the bead, and what happens inside the droplet?

Each bead carries millions of copies of a short DNA primer. Every primer on a single bead has the same sequence, and that sequence has four functional pieces. From the bead surface outward: first, a **PCR handle** — a constant sequence that lets you amplify the products later. Second, a **cell barcode** — twelve nucleotides, the same for every primer on this bead, but different from every other bead. This is the zip code. Third, a **UMI** — eight degenerate nucleotides, randomly synthesized so they're different on every primer, even on the same bead. We'll discuss what UMIs do in Segment 8. Fourth, an **oligo-dT tail** — thirty thymines that will hybridize to the poly-A tail of any messenger RNA, since eukaryotic mRNAs all carry poly-A tails. The bead, in other words, is a chemistry kit on a sphere. Every primer is ready to grab an mRNA by its tail, tag it with the bead's cell barcode and a per-molecule UMI, and start a reverse transcription reaction.

How are the bead-specific cell barcodes manufactured? Through a beautiful technique called **split-and-pool synthesis**. You start with a pool of beads, all blank. You split the pool into four sub-pools — one for each of the four DNA bases, A, T, G, C — and in each sub-pool you chemically attach one of those bases to every bead. Then you re-pool and mix everything back together. Now split into four again, attach the next base, repool. After twelve rounds of split-pool-extend, every bead has a twelve-nucleotide barcode that's, with high probability, unique to that bead, because each bead followed a random path through the splits. Four to the twelfth power is about sixteen million possible barcodes, more than enough to label every bead in a Drop-seq run uniquely. Split-and-pool is how you cheaply manufacture millions of distinct barcoded beads without ever individually addressing each one.

\[Pause.\]

So now you have a stream of droplets, most empty, some containing one cell plus one bead. What happens inside the productive droplets? The cell lyses, immediately, because the droplet buffer contains a lytic detergent. Lysis releases the cell's mRNA — thousands of polyadenylated transcripts — into the tiny droplet volume. The oligo-dT primers on the bead's surface, which are millions of them, grab the poly-A tails of the mRNAs. Each captured mRNA is now physically attached to a primer that carries the bead's cell barcode and a unique UMI. The droplets are collected, then broken — the oil is removed, the aqueous contents pooled — and reverse transcriptase is added to convert each captured mRNA into cDNA. After reverse transcription, every cDNA molecule from a single cell carries the same cell barcode (because they all touched the same bead) and a unique UMI (because each primer molecule had its own). Different cells' molecules carry different cell barcodes. The pool is now barcoded, and from here on you can treat it like any other Illumina library — amplify it, fragment it, sequence it.

The original Drop-seq paper demonstrated the method by sequencing forty-four thousand cells from a mouse retina and recovering thirty-nine distinct cell populations — many already known, some new — in a single experiment. That had never been done before. Before Drop-seq, characterizing thirty-nine cell types from a tissue would have been a multi-year project. After Drop-seq, it was a week. The throughput leap was something like a hundredfold over plate-based, at maybe a tenth the cost per cell. The field went a bit crazy.

inDrops, the parallel paper from the Kirschner lab, did essentially the same thing with slightly different bead chemistry — they used hydrogel beads with photo-cleavable primers, released by UV light inside the droplet. The biology was the same; the bead engineering was different. Both methods worked. Both opened the floodgates.

What was missing was commercialization. Drop-seq and inDrops were academic protocols — you could build the microfluidic chip yourself if you had access to a soft-lithography facility, you could synthesize the beads, you could tune the flow rates, but it was real labwork. Not every biology lab in the world has microfluidics expertise. For single-cell sequencing to spread to every lab on Earth — for it to become the default tool of modern biology — somebody needed to take the Drop-seq idea and turn it into a boxed product. That somebody was 10x Genomics.

---

## SEGMENT 6 — 10x Genomics Chromium — the commercial workhorse

10x Genomics was founded in 2012 by Serge Saxonov, Ben Hindson, and Kevin Ness, in Pleasanton, California. Hindson had come from QuantaLife, a digital-PCR company that was acquired by Bio-Rad — so he brought deep expertise in droplet microfluidics. Saxonov had been an early employee at 23andMe; Ness had been at Verinata. The original product idea, going back to 2014 and 2015, was actually not single-cell — it was something called Linked-Reads, a clever way of using droplets to barcode long stretches of genomic DNA so that short Illumina reads from the same long molecule could be computationally linked back together. Linked-Reads was a real product, briefly, but it would be surpassed by long-read sequencing platforms. The company's real future was in single-cell.

In early 2016, 10x launched the **Chromium Controller** — a refrigerator-sized benchtop instrument that automated droplet generation for single-cell RNA-seq. The first chemistry was a 3'-end counting assay, similar in concept to Drop-seq, but with proprietary bead chemistry, optimized microfluidic chips, and a fully turnkey workflow. You load your cell suspension, your reagent mix, and the bead suspension into a microfluidic chip. The Chromium machine drives the chip's pumps for a few minutes. Out comes an emulsion — a tube of barcoded droplets, ready for downstream library prep. The whole droplet-generation step takes about eight minutes per sample. The machine processes up to eight samples in parallel.

The genius of 10x's commercial move was the combination of three things. First, **engineering** — their droplets are more uniform, their beads are more reliable, their cell capture rate is higher than the academic methods. Drop-seq might capture five to ten percent of input cells; Chromium captures sixty to seventy percent. That's a big difference when you're trying to recover rare populations. Second, **integration with software** — they shipped a software package called **Cell Ranger** that takes raw sequencing reads and produces a fully analyzed per-cell gene-expression matrix, with no bioinformatics expertise required. We'll discuss Cell Ranger in Segment 9. Third, **business model** — they sell the instrument once, and then they sell consumables — the chips, the bead kits, the reagent kits — every time you run an experiment. The instrument is the razor; the chips are the blades. The recurring revenue from consumables is what built 10x Genomics into a multi-billion-dollar company.

\[Pause.\]

Here's the analogy that captures the relationship between academic and commercial single-cell. **Drop-seq is a homemade microfluidic device plus barcoded beads. Chromium is the boxed product version, with better engineering and worse pricing. Same biological idea.** This is the standard pattern in any laboratory-technology field. Academic groups invent something; a startup commercializes it; the commercial version becomes the standard tool because most labs would rather pay for reliability than build their own. 10x didn't invent single-cell sequencing. They invented the version of it that anyone can run on Tuesday afternoon without crying.

The price tag, in 2024, looks roughly like this. The Chromium Controller costs somewhere between fifty and a hundred thousand dollars to buy. Each Chromium chip — single-use, one chip per sample — costs a few hundred dollars. The reagent kits add another fifteen hundred to two thousand dollars per sample. Then sequencing — typically a billion or more reads, depending on how many cells — adds another thousand to several thousand. So a single 10x experiment on one tissue sample, with maybe ten thousand cells recovered, costs roughly five thousand dollars all-in. That's not cheap. But it's vastly cheaper than the equivalent amount of Smart-seq2 data, which would cost tens of thousands of dollars and take months.

In 2017, 10x launched the **Chromium V2** chemistry, which improved cell capture and reduced ambient RNA contamination. In 2019, V3 chemistry, with another sensitivity improvement. In 2020, they launched the **Next GEM** chip design with better droplet uniformity. In parallel, they expanded the product line. Single-cell ATAC-seq for chromatin accessibility, launched in 2018. Single-cell V(D)J for immune-repertoire profiling. The Chromium X instrument, in 2022, which can process up to a million cells per run. The Chromium iX, a smaller version for low-throughput labs. And in 2018 they acquired Spatial Transcriptomics, a Swedish company that became the **Visium** product line for spatial single-cell sequencing — we'll cover that in Segment 16. The company went public in September 2019 at a valuation of about three billion dollars and now does over six hundred million dollars in annual revenue.

\[Pause.\]

What I want you to take from this segment is the lineage. The conceptual idea — partition cells into droplets, give each droplet a unique barcoded bead, do reverse transcription inside the droplet — is academic. Macosko, McCarroll, Klein, Kirschner, all in 2015. The commercial execution that put the idea in every lab on Earth is 10x's. Both pieces are necessary. Without the academic invention, there's nothing to commercialize. Without the commercial execution, the academic invention reaches a few hundred labs instead of tens of thousands. That's the pattern. And it's why, when you read a single-cell paper today, in something like nine cases out of ten the data was generated on a Chromium instrument. The competing droplet platforms — BD Rhapsody, the older Fluidigm C1, Parse Biosciences' split-pool approach — exist and have niches. But 10x is the workhorse. When people say "we did scRNA-seq," they overwhelmingly mean "we did 10x scRNA-seq."

Now let me open the hood and show you what's actually happening inside a Chromium droplet.

---

## SEGMENT 7 — Inside a Chromium droplet — barcoded gel beads + cell + RT mix

Let's slow down and look at one droplet. I want you to picture this clearly, because the whole platform is just billions of these tiny chambers, each running the same little reaction in parallel.

Here's the analogy. **A Chromium chip is like an ice-cube tray that makes a hundred thousand tiny water-in-oil droplets, each containing one cell and one barcoded gel bead. Inside each droplet, the bead releases its unique zip-code primer and starts barcoding the cell's mRNAs.** Hold that. An ice-cube tray. Tiny cubes. Each cube its own little reaction.

Now the details. The Chromium chip has eight parallel channel networks etched into it, one per sample. Each channel network has three inputs and one output. Input one: the cell suspension — a few thousand to tens of thousands of cells in buffer. Input two: the bead suspension — gel beads, each one a soft sphere of polyacrylamide hydrogel with millions of oligonucleotide primers chemically tethered to its surface. Input three: oil, with surfactants that stabilize the emulsion. The output is a single channel where the three streams meet at a junction. At that junction — a microscopic T-shape or cross-shape — the oil flow pinches off the aqueous stream into discrete droplets, one after another, at a rate of thousands per second. Each droplet is about a nanoliter — roughly the size of a fine grain of sand, suspended in oil.

The dilutions are tuned according to a statistical model called **Poisson loading**. Cells go in at low density, so the probability of any given droplet containing a cell is small — maybe ten percent. Most droplets contain no cell at all. A small fraction, mathematically determined by the Poisson distribution, contain two cells — these are the doublets we'll discuss later. The bead suspension is loaded at higher density — most droplets contain exactly one bead — because the beads themselves act as a Poisson-buster: they pack closely in the input channel, and the geometry of the chip ensures roughly one bead per droplet on average. The combination — cells loaded sparsely, beads loaded near-deterministically — gives you the productive combination of one cell plus one bead in a tunable fraction of droplets.

\[Pause.\]

Now the chemistry inside the droplet. As soon as the droplet forms, three things happen, in fast sequence.

First, the cell lyses. The aqueous buffer contains a lytic detergent that breaks open the cell membrane within seconds. The cell's cytoplasm — its mRNA, its proteins, its small molecules — diffuses out into the droplet's nanoliter volume. The cell's nuclear membrane usually stays largely intact, so nuclear RNA stays mostly inside, but the mature cytoplasmic mRNA is released and freely diffusible.

Second, the gel bead dissolves. Chromium beads are not solid spheres — they're polyacrylamide hydrogel, cross-linked with bonds that can be chemically cleaved. The buffer contains a reducing agent — typically dithiothreitol, DTT — that breaks those cross-links. As the bead dissolves, the millions of primer molecules that were tethered to it are released into the droplet's aqueous volume. Each primer is a single-stranded DNA molecule about a hundred nucleotides long, carrying — from one end to the other — a Read 1 sequencing primer site, the cell barcode (sixteen bases, identical across all primers from this one bead), a UMI (twelve bases, randomly different on every primer), and a poly-T tail that will grab any poly-A-tailed mRNA.

Third, the freed primers diffuse to the released mRNAs and hybridize via the poly-T to poly-A interaction. Now every captured mRNA has a primer hybridized to its tail, ready for reverse transcription. The reverse transcriptase enzyme, which was also present in the buffer, walks down each mRNA, synthesizing a complementary cDNA strand that has the cell barcode and UMI built into its 5' end. By the time reverse transcription is done — maybe ten or fifteen minutes — every cDNA from this cell carries this bead's cell barcode and a different UMI per molecule. The cell's identity is now permanently encoded in the chemistry.

\[Pause.\]

After droplet generation and reverse transcription, you take the emulsion off the instrument and break it. Breaking the emulsion means destabilizing the oil-water interface so the droplets coalesce back into a single bulk aqueous phase. You add a chemical that destabilizes the surfactants, you spin briefly in a centrifuge, the oil separates as a layer, and you collect the aqueous phase from below. That aqueous phase now contains billions of cDNA molecules, all in one tube — pooled. But every cDNA carries a cell-specific barcode, so the pooling has not lost the per-cell identity. From here, you do PCR amplification, fragmentation, adapter ligation, and sample indexing, all in bulk, in standard library-prep formats. The final library is loaded onto an Illumina instrument and sequenced like any other library. The barcodes are read out as part of the sequence.

So the whole droplet phase — the part that's distinctive about Chromium — takes about eight minutes of instrument time, plus a few hours of reverse transcription and library prep. The sequencing afterward is the same Illumina chemistry we covered before. The data that comes back gets demultiplexed by sample index, then further sorted by cell barcode using software. We'll go through that flow in Segment 9.

One more thing about the droplet biochemistry that's worth understanding. Inside a droplet, the concentrations of mRNA and primer are very high — a single cell's worth of RNA, plus millions of primers, in a nanoliter volume. That's chemically very different from a normal reverse-transcription reaction in a tube, where you have the same molecules in microliters. The high local concentration is what makes the reaction efficient enough to work at all on a single cell's tiny RNA payload. A single mammalian cell typically contains about a picogram of mRNA, maybe two hundred thousand individual molecules. You're trying to convert as many of those as possible to cDNA before the reaction stops. In practice, current Chromium chemistries capture somewhere between five and twenty percent of a cell's mRNA molecules — meaning, for an average cell, you detect maybe twenty to forty thousand individual transcripts, corresponding to a few thousand distinct genes. That's a fraction. It's the dropout problem, which we'll come back to in Segment 17. But it's enough to characterize the cell's identity and state. The droplet hands you a useful, if imperfect, snapshot.

---

## SEGMENT 8 — Unique Molecular Identifiers (UMIs) — counting molecules without PCR bias

Let me now take a segment to talk about UMIs, because they are one of the cleanest, most beautiful pieces of molecular bookkeeping in modern sequencing, and they matter for every single-cell experiment you'll ever look at.

Here's the problem they solve. PCR amplification is exponential. It doubles the number of copies of a molecule every cycle. After thirty cycles of PCR, a single starting molecule has become a billion copies, in theory. But the doubling is not perfectly uniform. Some molecules get amplified more efficiently than others — for reasons of GC content, secondary structure, primer affinity, random chance. So after PCR, the relative abundance of different molecules in your library doesn't perfectly match the relative abundance they started at. PCR introduces noise. PCR introduces bias.

This matters enormously for single-cell experiments, because the whole point is to count how many copies of each gene's mRNA were present in each cell. If PCR has distorted those counts — making some molecules look more abundant than they really were, others less — then your per-cell, per-gene expression matrix is contaminated by amplification noise. You're measuring the PCR, not the cell.

\[Pause.\]

Here's the trick UMIs use to solve this. **In addition to the cell zip code, every individual mRNA molecule gets a random serial number — that way if PCR amplification produces twenty copies of the same molecule, you only count it once.**

Picture it like this. You have a hundred coins in a jar. You want to count them, but the only way you have to look at them is to first photocopy each coin ten times, dump all the photocopies in a pile, and then count the pile. If you just count the pile, you'll get a thousand, not a hundred — you've counted the photocopies. But suppose before photocopying, you wrote a random three-digit number on each coin. Coin one has 472 written on it. Coin two has 819. Coin three has 305. And so on, all different. Now you photocopy each coin ten times. Every photocopy of coin one says 472. Every photocopy of coin two says 819. When you count the pile, instead of counting all the photocopies, you count the number of distinct numbers you see. Each distinct number corresponds to one original coin. You collapse the photocopies down to their originating originals, and you recover the true count of one hundred.

That's exactly what UMIs do. Before PCR amplification, every individual mRNA molecule captured in the droplet is labeled with a random short sequence — typically twelve nucleotides — that's the molecule's serial number. Four to the twelfth power is about sixteen million possible UMIs, far more than any single cell has mRNA molecules. So the chance of two different molecules in the same cell ending up with the same UMI is small. After PCR, you sequence the library, and for every cell-and-gene combination, you count the number of distinct UMIs you see. If you see twelve reads of gene X in cell Y, all carrying the same UMI, that's one original molecule, amplified twelve times. You count it as one. If you see twelve reads of gene X in cell Y, with twelve different UMIs, that's twelve original molecules. You count them as twelve. PCR amplification doesn't change your count, because you're counting distinct UMIs, not reads.

\[Pause.\]

UMIs were not invented for single-cell — they were a general molecular-counting trick first described around 2011 and 2012 by several groups, most influentially by Tomas Kivioja and colleagues. But single-cell adopted them immediately, because the single-cell problem is so much more sensitive to amplification bias than bulk. In bulk RNA-seq, you might have ten million mRNA molecules going into the library prep; even with PCR bias, the relative counts of common genes are pretty stable. In single-cell, you might have a thousand mRNA molecules per cell. Every molecule matters. Amplification noise can swamp the signal. UMIs make per-molecule counting feasible in that low-input regime.

When you analyze a 10x Chromium dataset, what you actually get out at the end is a **cell-by-gene matrix of UMI counts**. Each row is a cell, identified by its cell barcode. Each column is a gene. Each entry is the number of distinct UMIs you observed for that gene in that cell — that is, the number of original mRNA molecules of that gene that were captured from that cell. Not reads. Molecules. The UMI collapse has converted your raw read counts into molecule counts. That matrix is the fundamental data type of single-cell genomics. Everything downstream — the clustering, the cell type identification, the trajectory analysis — operates on that matrix.

There's a subtle but important point about UMIs that's worth mentioning. They only work if your sequencing reads cover the UMI position. In 10x Chromium chemistry, the UMI is at the 5' end of the cDNA, right after the cell barcode. The Read 1 sequencing read covers the cell barcode plus the UMI — that's typically twenty-eight bases of Read 1. The Read 2 sequencing read covers the actual transcript sequence — typically ninety bases. Cell barcode plus UMI on Read 1, transcript on Read 2. That's the read structure. When you look at FASTQ files from a 10x experiment, that's what you're seeing. The first twenty-eight bases of every Read 1 are the cell-identifying and molecule-identifying information; everything else is biology.

One last thing on UMIs. Because the UMI is random and short, occasionally two different mRNA molecules in the same cell happen to get the same UMI just by chance. This is called UMI collision. With twelve-base UMIs and a thousand molecules per cell per gene, collisions are rare but not zero. There are statistical corrections — the Lander-Waterman correction, applied to UMI counting — that adjust for the expected number of collisions and give you a more accurate molecule count. Most software handles this automatically. You don't need to think about it for most purposes; just know that the correction exists, and that very high-count genes are slightly under-counted by raw UMI counting before correction.

UMIs are one of those rare ideas that, once you've seen them, you wonder how anyone ever did molecular counting without them. They're cheap to add — just a random sequence appended to a primer — and they completely eliminate amplification bias from the count. Every single-cell platform now uses them. They're standard.

---

## SEGMENT 9 — From beads to FASTQ — the Cell Ranger / STARsolo bioinformatics flow

Let's walk through what happens to your data after sequencing comes back, because the bioinformatics flow is where a single-cell experiment becomes a cell-by-gene matrix you can actually look at.

You've run your Chromium experiment. You've sent the library to a sequencing facility, they've run it on a NovaSeq, and a few days later you have FASTQ files — gigabytes of compressed text, billions of reads, each with a unique identifier, a sequence, and a quality string. The FASTQs from a 10x experiment have a specific structure. There are typically three files per sample: an I1 file containing the sample index, an R1 file containing the cell barcode plus the UMI, and an R2 file containing the actual cDNA sequence. Software needs to parse these three files together, interpreting them according to the chemistry, to recover the per-cell, per-gene data.

The standard software for processing 10x data is called **Cell Ranger**, written and distributed by 10x Genomics. Cell Ranger is a pipeline that takes raw FASTQs and a reference genome and outputs a cell-by-gene UMI count matrix, plus a bunch of quality metrics and visualizations. It's free to use, though not open source until recently. You run it on a Linux server or cluster. It takes some hours per sample, depending on read depth and computational resources.

What does Cell Ranger actually do, under the hood? Five main steps.

\[Pause.\]

**Step one: barcode parsing.** Read the first twenty-eight bases of every R1 read. Split into cell barcode (the first sixteen) and UMI (the last twelve). Check the cell barcode against a known list of valid barcodes — there are about a million possible barcodes per chip, of which a typical experiment uses maybe a few hundred thousand. Discard or error-correct reads whose barcode doesn't match a known one.

**Step two: alignment.** Take the R2 read — the actual transcript sequence — and align it to the reference genome using a fast splice-aware aligner. Cell Ranger uses STAR, the same aligner used in bulk RNA-seq. The output is a position in the genome for every read that aligns. Reads that don't align, or that align ambiguously, are flagged.

**Step three: gene assignment.** Look up which gene each alignment falls within, using a gene annotation file. Each aligned read is now associated with a specific gene — or marked as intronic, intergenic, or ambiguous, depending on where it lands.

**Step four: UMI deduplication and counting.** For every cell barcode and every gene, look at all the reads assigned to that combination. Group them by UMI. Count the number of distinct UMIs — that's the molecule count for that gene in that cell. This is where the UMI magic actually happens computationally. Reads with the same cell barcode, the same gene assignment, and the same UMI are collapsed to one count.

**Step five: cell calling.** Out of the maybe million distinct cell barcodes the chemistry could have produced, only a small fraction — typically a few thousand to a hundred thousand — correspond to real cells. The rest are empty droplets that picked up trace amounts of ambient RNA from the buffer. Cell Ranger uses a statistical method, originally based on a knee-finding algorithm and more recently on a more rigorous Bayesian approach called EmptyDrops, to distinguish real cells from empty droplets based on the distribution of UMI counts per barcode. Real cells have hundreds to thousands of UMIs; empty droplets have a few. There's usually a clear gap in the distribution, which the cell-calling algorithm uses to set a threshold.

The output is a sparse matrix — most entries are zero, because most cells don't express most genes — stored in a compressed format called MatrixMarket or h5. Rows are cells; columns are genes; values are UMI counts. That matrix is what you load into a downstream analysis tool — typically Seurat in R, or Scanpy in Python — and start doing science with.

\[Pause.\]

There's a competing open-source tool worth knowing about, called **STARsolo**, which is built directly into the STAR aligner. STARsolo does essentially the same thing as Cell Ranger — barcode parsing, alignment, UMI counting, cell calling — but it's open source, more flexible, and substantially faster on most workloads. It also produces output that's compatible with downstream tools. Many academic labs have migrated to STARsolo for these reasons. Another fast alternative is **Salmon-Alevin** or its successor **Alevin-fry**, which uses pseudo-alignment rather than full alignment for speed. The choice between these tools doesn't usually change the biological conclusions, but it changes how long the pipeline takes and how much computational resource you need.

What does a typical 10x dataset look like, by the numbers? A standard run might give you ten thousand cells, with twenty thousand reads per cell, and detect three thousand to four thousand genes per cell on average. The cell-by-gene matrix is ten thousand by twenty thousand, but ninety-five percent of the entries are zero, because each cell only expresses a few thousand of the twenty thousand possible genes — and even among those, most have low enough UMI counts that they often show up as zero in any given cell. The matrix is sparse. The sparseness is real biology, but it's also exacerbated by dropout — the technical failure to capture every mRNA from every cell. We'll come back to dropout in Segment 17.

That matrix — sparse, cell-by-gene, UMI counts — is the universal data product of single-cell RNA-seq. Whatever the upstream chemistry, whatever the sequencing platform, the output that biologists actually work with is that matrix. Cell Ranger and its alternatives are the bridge from FASTQ to matrix. Everything downstream — and there is a lot downstream — operates on the matrix as input.

\[BREAK\]

---

## SEGMENT 10 — Quality control — droplets, doublets, ambient RNA, dying cells

Welcome back. We're going to spend the second half of the lecture on the analysis side and the biology that single-cell has unlocked, plus the limits. Let's start with the quality-control problems you need to handle before any analysis, because single-cell data has several characteristic artifacts that, if you don't deal with them, will make your downstream analysis lie to you in interesting ways.

The first artifact is **empty droplets** — droplets that received no cell, but picked up a small amount of ambient RNA floating in the cell suspension. Every single-cell experiment has some free-floating mRNA in the input — released by cells that died during sample preparation, leaking from membranes, contamination from the environment. That ambient RNA ends up distributed across all the droplets, including the empty ones. So an empty droplet might still have, say, fifty UMIs of background, all matching its cell barcode by chance because that's the barcode of the bead that happened to be in it. If you naively call every cell barcode that has any UMIs a "cell," you'll have a hundred thousand "cells," most of which are background. That's why cell calling, which we just discussed in Segment 9, is a critical step.

The second artifact is the one I want to dwell on, because it's the most insidious. **Doublets.** Sometimes two cells end up in the same droplet by accident — Poisson loading guarantees this happens at a predictable rate, typically about one percent doublets per thousand cells captured, scaling roughly linearly. Two cells in one droplet means both their transcriptomes get the same cell barcode. When you analyze the data, that droplet looks like a single cell with a hybrid transcriptome — a cell that expresses both T-cell markers and B-cell markers, or both neuronal markers and glial markers. A real cell would never have that combination. A doublet does.

\[Pause.\]

Here's the analogy. **If two cells get into the same droplet by accident, their transcripts all get the same zip code and look like one weird hybrid cell. Solved statistically plus algorithmically post-hoc.**

How do you solve it? Two ways. First, **algorithmic detection**. Software tools like Scrublet, DoubletFinder, and Solo simulate fake doublets by computationally combining pairs of cells from your data, then look for real cells in the data that look like the simulated combinations. Suspected doublets are flagged and removed. This works reasonably well, catching maybe seventy to ninety percent of doublets, but not all.

Second, **multiplexing with antibody hashing or genetic demultiplexing**. If you tag different samples with different cell-surface antibody-oligo conjugates before pooling them and loading them into one Chromium run, then each cell carries the antibody tag of its original sample. If a droplet shows two different sample tags, that's a doublet between samples — you can confidently identify and remove it. Similarly, if you pool cells from two genetically distinct donors, single-nucleotide polymorphisms in the RNA reads can be used to identify which donor each cell came from, and droplets that show alleles from two donors are doublets. This approach — called demuxlet or Vireo, depending on the software — can identify inter-sample doublets with high confidence, though it doesn't catch intra-sample doublets.

The third artifact is **ambient RNA contamination of real cells**. Even the cells you correctly identify as real are not pure — they've absorbed a small amount of ambient RNA from the buffer, so their counts include a low-level background contribution from whatever was floating around. For most cells this is a minor problem, but for genes that are very highly expressed in one cell type and absent in another — say, hemoglobin genes from red blood cells contaminating other cell types — the ambient contribution can produce misleading low-level expression that looks biologically meaningful but isn't. Tools like SoupX and CellBender try to estimate the ambient profile and subtract it from each cell's counts. They help, but they're not perfect.

The fourth artifact is **dying or stressed cells**. Cells that were damaged during dissociation — by enzymatic digestion to separate them from tissue, by mechanical shear, by prolonged time on ice — will have abnormal transcriptomes. The classic signature is a high fraction of mitochondrial transcripts. In healthy cells, mitochondrial mRNAs make up maybe two to five percent of total mRNA. In dying cells, where the cytoplasmic membrane has been compromised and cytoplasmic mRNA has leaked out while the mitochondria are still intact, the mitochondrial fraction climbs to ten, twenty, fifty percent. So a standard QC filter is to remove any cell with more than a threshold fraction of mitochondrial reads — typically ten or twenty percent for most tissues. Cells that pass this filter are presumed healthy. Cells that fail are presumed dying and discarded.

\[Pause.\]

Then there are dissociation-induced stress signatures more broadly. The act of separating cells from tissue — usually with collagenase or similar enzymes at thirty-seven degrees for half an hour — triggers immediate-early genes like Fos and Jun. So every cell in your dataset is, to some extent, expressing stress-response genes that it wasn't expressing in vivo. You can identify cells where this is severe and remove them, or you can computationally regress out the stress signature, or you can do a different sample-prep protocol — for example, single-nucleus sequencing, where you start from frozen tissue and isolate nuclei rather than cells, which avoids the dissociation stress because the nuclei don't have the cytoplasmic machinery to mount a stress response. Single-nucleus sequencing — often called snRNA-seq — is now widely used for tissues where dissociation is difficult, like brain or heart muscle. The trade-off is that nuclei have fewer mRNA molecules than whole cells, so you get less signal per cell. But you avoid the dissociation artifacts.

The fifth artifact, common across all sequencing, is **batch effects**. Two single-cell experiments run on different days, by different operators, on different chips, with different reagent lots, will look subtly different even if the underlying biology is the same. The differences can be modest or severe. For an atlas project that integrates dozens of samples across labs, batch correction is a major analysis challenge. Tools like Harmony, BBKNN, scVI, and Seurat's integration anchors try to computationally align datasets so that the same cell types from different batches end up in the same place in the reduced-dimensional embedding. These methods are imperfect but essential for any cross-sample work.

QC is unglamorous. It's the part of single-cell analysis that you don't see in a finished paper, because by the time you see the paper, the bad cells have been filtered out and the doublets are gone. But every paper you read had to do this work. And if you're doing your own analysis, you have to do it too. A reasonable rule of thumb: expect to filter out somewhere between ten and forty percent of your initial droplets as either empty, doublets, or dying. Whatever's left is your real dataset.

---

## SEGMENT 11 — Dimensionality reduction and clustering — UMAP/t-SNE, how cell types pop out

So you have your cleaned cell-by-gene matrix. Ten thousand cells. Twenty thousand genes. How do you find the cell types?

Each cell is a point in twenty-thousand-dimensional space, where each dimension is one gene's expression level. You can't visualize twenty thousand dimensions. You can't easily cluster in twenty thousand dimensions, because most of those dimensions are noise. You need to reduce the dimensionality — find the few directions that actually capture the biological variation — and then look at the cells in that reduced space, where biologically similar cells will cluster together.

The standard workflow has three steps: normalize, reduce dimensions, cluster and visualize.

**Step one: normalize.** Different cells have different total UMI counts — some cells were captured better than others, some are bigger and have more mRNA. To compare cells fairly, you have to normalize. The simplest method is to divide each cell's gene counts by the cell's total UMI count, multiply by some standard value (typically ten thousand), and log-transform. The output is what people call **log-normalized expression**, where each value roughly represents the log of how concentrated that gene is in the cell. This puts cells on a common scale.

**Step two: dimensionality reduction.** Take the normalized matrix and run principal component analysis — PCA — to find the directions of greatest variance in the data. The first few dozen principal components typically capture most of the biological signal, while the remaining thousands of dimensions are noise. So you reduce from twenty thousand gene dimensions to maybe fifty PC dimensions. That's already a huge compression, and most downstream analysis happens in PC space.

But fifty dimensions still isn't visualizable. For visualization, you do a second nonlinear reduction from PC space down to two dimensions. The standard tools here are **t-SNE** (t-distributed stochastic neighbor embedding) and **UMAP** (uniform manifold approximation and projection). Both take high-dimensional points and project them into 2D in a way that tries to preserve local neighborhoods — cells that were close together in high dimensions end up close together on the 2D plot. UMAP has largely replaced t-SNE in modern usage because it's faster, preserves global structure better, and runs on bigger datasets.

The result is a 2D scatter plot — every cell a dot, with dots arranged in space such that biologically similar cells form visible clusters. When you've never seen one before, the first time you look at a UMAP of a tissue you've never characterized, with twenty colored clusters of cells in different regions of the plot, it feels like magic. You're literally seeing the cell types of the tissue as visible clumps, just because their gene expression patterns differ enough that they end up in different parts of the plot.

\[Pause.\]

**Step three: clustering.** UMAP is for visualization, but you also want a categorical assignment — which cluster does each cell belong to? For that, you run a clustering algorithm in the PC space, not the UMAP space. The standard is **graph-based clustering**, specifically the Leiden algorithm. You build a k-nearest-neighbor graph in PC space, where each cell is connected to its closest neighbors, then partition the graph into densely connected communities. Each community is a cluster. The clusters typically correspond to cell types or cell states.

Then comes the part that's still partly manual: **cell type annotation**. The software gives you clusters labeled "0," "1," "2," and so on. You have to figure out what each cluster is. The standard approach is to look at the genes that are differentially expressed in each cluster compared to the others — the marker genes — and match them against known cell-type marker gene lists. Cluster 3 expresses high CD3D, CD8A, CD8B — those are T-cell markers, so cluster 3 is CD8 T cells. Cluster 7 expresses MS4A1 and CD79A — those are B-cell markers. And so on. There are now automated annotation tools (CellTypist, SingleR) that do this matching by referencing curated databases of marker genes from previously annotated atlases. They work pretty well for common cell types in well-characterized tissues; they struggle for rare or unusual cell types where the markers aren't established.

The output of all this — UMAP plot, clusters, annotations — is the visual representation you see in every modern single-cell paper. The famous "rainbow blob" figure where each cell type is a colored island. That image, when you really understand it, is a compressed summary of an enormous amount of biological structure: which cells are present in this tissue, in what proportions, in what continuous or discrete states, with what relationships. Single-cell papers spend most of their figures unpacking what's in that UMAP. It's the gateway to everything else.

A subtle but important point: clusters in a UMAP are not necessarily real biological categories. They're produced by an algorithm that's trying to find structure, and it will always find some. If your tissue has continuous variation rather than discrete cell types — which is true for, say, neurons along a cortical column, or for cells differentiating along a developmental trajectory — the clusters will represent arbitrary cuts of a continuum rather than real categories. Be careful when you read papers that make strong claims about exactly how many cell types are in a tissue. The number depends on the resolution parameter of the clustering algorithm. It's not a fact of nature. It's a choice.

---

## SEGMENT 12 — The Human Cell Atlas — the global project, where it is now

Now we get to the project that single-cell sequencing made possible — and the project that, in turn, has driven a lot of the technology's development. The **Human Cell Atlas**, or HCA. The goal: a comprehensive reference map of every cell type in the human body. Started in 2016. Still ongoing. The biggest single-cell project in the world.

Here's the analogy. **Cell atlas projects are analogous to the Human Genome Project — the same kind of foundational reference resource, but for cell types instead of DNA sequence.** The Human Genome Project, completed in 2003, gave biologists a reference for what genes exist, where they sit, what they encode. Every subsequent piece of human genetics work has built on that reference. The Human Cell Atlas aims to do the equivalent for cells: a reference of what cell types exist in the human body, where they live, what they express, how they relate to each other. Every subsequent piece of cell biology, disease research, and tissue engineering can then build on that reference.

The HCA was conceived in 2016 at a meeting in London organized by **Aviv Regev**, then at the Broad Institute, and **Sarah Teichmann**, at the Wellcome Sanger Institute. The two of them recognized that single-cell technology had just crossed a threshold where systematic atlasing was feasible — the throughput of Drop-seq, the imminent Chromium platform, the rapid drop in sequencing costs all converged. They convened a few dozen leading scientists, agreed on the goals, and launched a global consortium. As of 2024, the HCA includes over thirty-six hundred scientists from more than a hundred countries, organized into eighteen Biological Networks, each focused on a particular tissue or organ system — the brain, the lung, the gut, the heart, the immune system, and so on.

\[Pause.\]

The numbers, as of 2024, are staggering. Approximately sixty-two million human cells have been mapped, with draft atlases completed for the lung, the nervous system, organoids, and the eye. The full human body contains roughly thirty-seven trillion cells, so even at sixty-two million, the project has profiled less than one-millionth of the total cells in a human body. But of course you don't need to profile every cell to characterize every cell type — once you've sampled enough representatives of each type, the type is described. The current estimate is that there are somewhere between a few hundred and a few thousand distinct cell types in the human body, depending on how finely you slice "type" versus "state." Cataloguing all of them is the achievable goal; cataloguing every individual cell is not.

The data is all public. The HCA Data Portal hosts the datasets, the annotations, the analysis tools, all free and openly accessible. Anyone can download the lung atlas — about two and a half million cells across hundreds of donors — and use it to interpret their own lung disease study. Anyone can download the immune atlas to figure out which subset of T cells they're seeing in their own dataset. This is foundational infrastructure for biology. It's the kind of thing that doesn't show up in spectacular individual papers, but enables thousands of subsequent papers.

The HCA has spawned tissue-specific child projects. The Allen Brain Atlas has been incorporated, the Tabula Sapiens project (a multi-tissue human atlas) overlaps, the Lung Cell Atlas integrates dozens of sites. There's a parallel Human Tumor Atlas Network — HTAN — that does the same for diverse cancer types. There's a Pediatric Cell Atlas for developing tissues. There's a Mouse Atlas, several mouse atlases actually, that serve as comparative references. The pattern is the same across all of them: large consortia, integrated single-cell data, open release, foundational reference.

\[Pause.\]

The impact has been broad. When you read a modern paper about a particular disease — say, idiopathic pulmonary fibrosis — chances are the authors performed single-cell sequencing on diseased and healthy lung tissue and then mapped their cells against the reference lung atlas to figure out which cell types are altered in disease, what new states they're in, what genes are differentially expressed. The atlas is the yardstick. Without the atlas, every disease study has to characterize its own healthy reference from scratch — slow, expensive, hard to compare across studies. With the atlas, you have a common reference everyone can use.

This is the deep payoff of single-cell. Bulk RNA-seq could never have produced a cell atlas, because bulk loses the per-cell information that the atlas needs. Plate-based methods alone couldn't have produced the atlas, because they're too slow to sample millions of cells. It took the convergence of high-throughput droplet methods, ubiquitous Illumina sequencing, robust computational analysis, and global coordination to make a project on this scale feasible. The HCA is the natural endpoint of the technology trajectory we've been tracing. And it's not done yet — it'll be a fifteen-year project at least, possibly longer.

Let me turn now to a few specific application areas where single-cell has changed the questions you can ask. We'll start with cancer.

---

## SEGMENT 13 — Tumor heterogeneity — what single-cell revealed about cancer

Cancer is the field where the bulk-versus-single-cell distinction was most consequential — and where the conceptual shift caused by single-cell has been most profound.

Here's the old picture, the one we had from bulk sequencing. You take a tumor biopsy, you sequence it, you find a set of mutations. You measure expression and find the tumor "type" — say, a particular molecular subtype of breast cancer or glioblastoma. You design a therapy based on those properties, you treat the patient, and the tumor either responds or it doesn't. When it doesn't, you say the tumor was "resistant." When the tumor initially responds and then comes back, you say it "developed resistance." The bulk view treats the tumor as a unit — one thing, with one set of mutations, one expression profile, one identity.

The single-cell view shattered this picture. A tumor, looked at one cell at a time, is not one thing. It is many things. Different tumor cells in the same biopsy have different mutations, different expression states, different responses to drugs. Some are dividing rapidly; some are dormant. Some are stem-like; some are differentiated. Some are sensitive to your drug; some, even before treatment starts, are intrinsically resistant. The tumor is a population, not an individual. And the population, like any population, evolves under selection pressure.

\[Pause.\]

The first really decisive single-cell tumor study, in many people's view, came from Itay Tirosh, Mario Suvà, and colleagues at the Broad Institute in 2016, who profiled melanoma and then glioblastoma tumors at single-cell resolution. What they found was that even within a single tumor, supposedly homogeneous by bulk measures, there were multiple coexisting cell states — proliferative, mesenchymal, stem-like — that bulk RNA-seq could not distinguish. Drug treatment shifted the proportions of these states without eradicating any of them. Resistance was not a property the tumor developed under treatment; it was a state that already existed in some cells before treatment, and selection enriched it.

This reframing changed how oncologists think about treatment. You can't just kill "the" tumor cells. You have to think about which subpopulations your drug hits and which it misses. You have to combine therapies that hit different subpopulations. You have to anticipate the resistant subpopulation that will expand once the sensitive one is gone. Combinatorial therapy, sequential therapy, adaptive therapy — these strategies all rest on the recognition that tumors are heterogeneous, and that heterogeneity is the engine of resistance. Single-cell sequencing is what made that heterogeneity visible, quantifiable, and trackable.

The tumor microenvironment is the other half of the picture single-cell unlocked. A tumor biopsy contains not just tumor cells but a complex ecosystem — infiltrating T cells, exhausted T cells, regulatory T cells, tumor-associated macrophages, cancer-associated fibroblasts, endothelial cells lining tumor vasculature. Bulk RNA-seq blends all of these into one signal, dominated by whichever cell type happens to be most abundant. Single-cell pulls them apart. You can ask: are there killer T cells infiltrating this tumor? Are they functional, or are they exhausted? Are the macrophages tumor-suppressive or tumor-promoting? Is the stroma immunosuppressive? These questions are central to modern immunotherapy. And they're answerable only with single-cell resolution.

The Human Tumor Atlas Network — HTAN, launched by the NIH in 2018 — is doing for cancer what the Human Cell Atlas is doing for healthy tissue. Systematic single-cell profiling of multiple tumor types across many patients, with longitudinal sampling before and after treatment. The goal is a reference for what tumors look like, in their full heterogeneous detail, that future studies can build on. Already, single-cell-driven insights are reshaping clinical trial design and biomarker discovery in oncology.

There is one technical limitation worth flagging. Single-cell RNA-seq tells you transcriptional states but not directly mutations — the cDNA capture is heavily biased to the three-prime end, so most coding mutations aren't covered. To get mutation calls per cell, you need either deep coverage at specific loci or specialized assays. Tools like DENDRO and Numbat infer copy-number alterations from single-cell RNA-seq, which helps with clonal structure but doesn't give you point mutations. For per-cell mutation calling, you typically need single-cell DNA-seq, which is a separate, less mature technology. The point is: single-cell RNA-seq is great for cell states but not great for genotypes. Don't expect both from one assay.

---

## SEGMENT 14 — Developmental trajectories — pseudotime, RNA velocity

The second area where single-cell changed the questions is developmental biology — the study of how cells differentiate, mature, and specialize over time, from a single fertilized egg to a complex organism with hundreds of cell types.

Here's the old problem. Development is a continuous process. A stem cell becomes a progenitor becomes a precursor becomes a differentiated cell, through intermediate states that have no names and no clean boundaries. Bulk RNA-seq, even when applied to tissues at different developmental stages, gives you population averages — useful for seeing big shifts, useless for resolving the continuous trajectory. To watch the trajectory, you need to see individual cells, ideally cells captured at many points along the path, and reconstruct the trajectory from the static snapshots.

Single-cell sequencing made this possible, in a beautiful way. The insight is that even when you collect cells at a single time point, the cells you collect represent every state along the developmental trajectory — some are still progenitors, some are partway differentiated, some are fully mature. If you can computationally order these cells along a trajectory based on their gene expression patterns, you've reconstructed the dynamics from static data. This computational ordering is called **pseudotime**.

\[Pause.\]

Pseudotime works like this. You have a cell-by-gene matrix. You cluster the cells. You see that one cluster looks like progenitors, another like partway-differentiated, another like terminal. You ask software — tools like Monocle, Slingshot, PAGA — to find a smooth trajectory through the data that connects the clusters in their developmental order. The software assigns each cell a pseudotime coordinate — a number representing how far along the trajectory it is, with low values for early progenitors and high values for terminal differentiated cells. You can then ask: which genes turn on as pseudotime increases? Which turn off? Which transcription factors mark each transition? The trajectory is the answer, reconstructed from one snapshot of mixed cells.

This was a revolution in developmental biology. Previously, characterizing a developmental trajectory required time-course experiments — collect cells at day one, day two, day three, and so on, characterize each time point, infer the trajectory from the time series. Slow, expensive, often impossible if you can't reliably get cells at every time point. With pseudotime, one cross-sectional sample at a moment when the developing tissue contains all stages simultaneously is enough. The static distribution of cells across the trajectory tells you the dynamics.

The technique took another leap with **RNA velocity**, introduced in 2018 by a group led by Sten Linnarsson. RNA velocity exploits a clever biochemical detail: most mRNAs in a cell exist in two flavors — unspliced precursors with introns still in them, and spliced mature mRNAs with introns removed. In a cell where a particular gene is being actively turned on, the ratio of unspliced to spliced rises, because new transcripts are being made faster than the splicing machinery can process them. In a cell where the gene is being turned off, the ratio falls. So by measuring the unspliced-to-spliced ratio for every gene in every cell, you can infer, for each cell, the direction in which its transcriptome is currently moving. You're not just placing cells along a trajectory — you're measuring, locally, which way each cell is heading.

The visual result is striking. Take a UMAP of your data. Overlay arrows on each cell pointing in the direction RNA velocity says the cell is moving. The arrows form a flow field that traces the developmental trajectories live, from progenitors to terminal states, with branch points where progenitors choose between alternative fates. It's like watching a satellite map of currents on the surface of an ocean. The flow tells you where development is going, in this very moment, from one snapshot of cells.

\[Pause.\]

There are caveats. RNA velocity is sensitive to noise, to choice of preprocessing, and to assumptions about splicing kinetics that don't always hold. Different parameter settings can produce different flows. Real-world velocity work requires care and validation. But when it works, it's a beautiful technique — it gives you, from a static experiment, a dynamic readout of cell-fate decisions.

Beyond pseudotime and velocity, single-cell has enabled lineage tracing. By introducing heritable barcodes — using CRISPR-edited scars at specific genomic loci, or transposon insertions, or lentiviral barcodes — you can give each ancestor cell a unique mark that gets inherited by its descendants. Then, in a single-cell RNA-seq experiment, you can read out both the gene expression of each cell and its lineage barcode, telling you not just what the cell is now but what it was. Tools like CARLIN and GESTALT have been used to reconstruct lineage trees of developing organisms — tracing, cell by cell, who came from whom — at unprecedented resolution.

The combined picture single-cell has given us of development is one of branching, continuous, often noisy trajectories — cells making fate decisions probabilistically at branch points, with intermediate states that don't always have clean names. The textbook view of development as a tree of discrete, well-defined cell types is giving way to a view of development as a flow on a high-dimensional landscape, with cells flowing along attractor trajectories that the gene regulatory network defines. Single-cell didn't just measure that landscape — it forced biology to think about development in landscape terms in the first place.

---

## SEGMENT 15 — Multi-omic single-cell — RNA + ATAC, CITE-seq for surface proteins

So far, everything we've discussed has been single-cell RNA. But RNA is only one layer of a cell's biology. There's the genome, the epigenome, the proteome, the chromatin state, the surface proteins, the secreted molecules. A real cell is all of those at once. The frontier of the field in the last several years has been measuring multiple layers in the same single cell — what people call **multi-omic** or **multimodal** single-cell sequencing. Let me cover the two most important examples.

The first is **single-cell ATAC-seq** combined with single-cell RNA-seq. ATAC-seq — assay for transposase-accessible chromatin using sequencing — measures, genome-wide, which regions of DNA are in open, accessible chromatin states, versus closed, packaged chromatin. Open chromatin is where transcription factors can bind, where enhancers are active, where the genome is currently being read. So ATAC-seq gives you a map of the regulatory landscape — the set of cis-regulatory elements actively used in a cell. RNA-seq tells you which genes are being transcribed. Together they tell you both what the cell is doing and what regulatory infrastructure is in place to enable it.

10x Genomics commercialized this in 2020 as **Chromium Multiome** — a chemistry that captures both RNA and ATAC from the same single cell in the same droplet. The cell nucleus is permeabilized, the transposase tags accessible chromatin in place, then the nuclear membrane is broken, mRNA is captured by the same bead chemistry as standard scRNA-seq, and the two libraries — RNA and ATAC — are sequenced separately but linked by cell barcode. The output: per-cell measurements of both gene expression and chromatin accessibility, simultaneously. This is enormously powerful for studying gene regulation, because you can see, cell by cell, which enhancers are open in cells where particular genes are being expressed, and infer the regulatory logic from the correlation.

\[Pause.\]

The second is **CITE-seq** — Cellular Indexing of Transcriptomes and Epitopes by sequencing. Published in 2017 by Marlon Stoeckius and colleagues at the New York Genome Center, CITE-seq adds protein measurement to single-cell RNA-seq. The trick is clever. You take a panel of antibodies — say, fifty antibodies against fifty different cell-surface markers — and you conjugate each antibody to a short DNA oligo. The oligo has a unique sequence identifying which antibody it's attached to, plus the same sequence features (polyA tail, PCR handle) that allow it to be captured by the same single-cell bead chemistry that captures mRNA. Stain your cells with the antibody-oligo panel before loading into Chromium. Inside the droplet, the antibody oligos get captured alongside the mRNAs by the bead, get barcoded with the same cell barcode, get sequenced in the same library. After sequencing, you can count both mRNA UMIs per gene per cell and antibody UMIs per protein per cell. You measure RNA and surface protein simultaneously.

This is huge for immunology, where surface marker expression is the traditional way of defining cell types — CD4, CD8, CD19, all those familiar T-cell and B-cell markers. With CITE-seq, you get both the surface marker readout (matching decades of flow cytometry literature) and the transcriptome (telling you the cell's state in much richer detail), and you can correlate them. You can ask: among cells that look like CD8 T cells by surface protein, what transcriptional substates exist? CITE-seq has become standard for immune profiling.

There are now many flavors of multi-omic single-cell. SHARE-seq for joint RNA and ATAC. SNARE-seq for the same. Methylome plus transcriptome assays. Spatial multi-omics. Single-cell whole-genome plus transcriptome. The trend is clear: every individual molecular layer that can be measured in bulk is being adapted to single-cell, and every single-cell assay is being combined with every other. The end state will be assays that measure all relevant molecular layers in every cell, which would give an almost complete molecular description of each individual cell's state. We're not there yet — most multimodal assays still come with trade-offs in sensitivity or throughput — but the trajectory is clear.

\[Pause.\]

One more multimodal note worth mentioning: **TCR and BCR sequencing**. The T-cell receptor and B-cell receptor genes are the immune repertoire — the V(D)J-recombined receptors that we covered in the antibodies lecture. 10x has a dedicated chemistry, **Chromium Single Cell V(D)J**, that captures full-length TCR or BCR sequences from the same cells whose transcriptomes you're profiling. This lets you ask: for each individual T cell or B cell, what receptor does it carry, and what transcriptional state is it in? You can track clonal expansion — same TCR across many cells means they all came from one progenitor — and link clone identity to functional state. This has been transformative for vaccine response studies, tumor immunology, autoimmunity research. The TCR is the cell's identity tag in the immune system; pairing it with transcriptional state gives you the cell's identity and its current job, simultaneously.

The pattern across all multimodal methods is the same: same cell, multiple measurements, linked by cell barcode. The bead-in-droplet architecture lends itself to this naturally, because every molecule that gets captured by the bead inherits the bead's barcode, regardless of what the molecule is. RNA, antibody-derived tags, chromatin fragments, TCR mRNAs — all get the same cell label, all end up in the same per-cell row of the final matrix. The cell barcode is the glue that ties multimodal measurements together. It's a beautiful piece of engineering, and we're still finding new things to glue onto it.

---

## SEGMENT 16 — Spatial transcriptomics — Visium, Slide-seq, MERFISH, the spatial revolution

Now for the next frontier, the one that's currently reshaping the field again: **spatial transcriptomics**. Single-cell sequencing, in its standard form, requires you to dissociate your tissue — break the cells apart, suspend them in a tube, load them into droplets. In doing so, you destroy all spatial information. You no longer know where, in the original tissue, each cell was sitting. You don't know which cells were neighbors, what tissue architecture they were part of, what region they came from. For many questions, this loss is fine — if you just want to know which cell types are present, dissociation is acceptable. But for many other questions, where the spatial organization is the biology — the layered structure of the cortex, the architecture of a tumor with its core, edge, and invading front, the relationship between immune infiltrate and tumor cells — losing spatial information is losing the question.

Here's the analogy. **Spatial single-cell is the next generation — single-cell resolution plus the spatial location of each cell in the original tissue.** Instead of a list of cells with no addresses, you get a map.

There are two main families of spatial transcriptomics technologies, and they make different trade-offs.

\[Pause.\]

**Family one: sequencing-based spatial.** The original was published in 2016 by Patrik Ståhl, Joakim Lundeberg, and colleagues in Sweden, who built a slide with a regular grid of capture spots — each spot containing oligonucleotides with a known, position-specific barcode. Lay a tissue slice on the slide, permeabilize the tissue so RNA can diffuse out of the cells, capture the RNA on the underlying barcoded spots, then sequence. The barcodes tell you which spot each transcript was captured at — that is, where in the tissue the RNA originated. The Swedish team was acquired by 10x Genomics in 2018 and became the **Visium** platform, which is now the standard commercial sequencing-based spatial tool.

Visium has a resolution of about fifty-five microns per spot — each spot captures RNA from one to ten cells, depending on cell density. That's not true single-cell resolution. The next generation — **Visium HD** launched in 2024, plus competing platforms like **Slide-seq** from the Broad Institute, **Stereo-seq** from BGI, and **Curio Seeker** — push the resolution down to ten microns or even one micron, true subcellular resolution, while still using a barcoded surface to capture RNA. The trade-off is sensitivity: smaller spots capture fewer molecules each, so per-spot data is sparser.

**Family two: imaging-based spatial.** Rather than capturing RNA on a barcoded surface and sequencing it, imaging-based methods detect specific RNA molecules in their original location in the tissue using fluorescence microscopy. The pioneer is **MERFISH** — multiplexed error-robust fluorescence in situ hybridization — developed by Xiaowei Zhuang's lab at Harvard around 2015. You hybridize tens of thousands of small fluorescent probes to a tissue slice, where each probe binds a specific transcript at its real location in the cell. You image, photobleach, hybridize again with a new round of probes, image again. Over many rounds of hybridization and imaging, each transcript species gets a unique combinatorial barcode of which rounds it lit up in, allowing identification of hundreds to thousands of distinct transcripts per cell, in their original locations, at true single-molecule resolution. Variants and competitors include **seqFISH+**, **HybISS**, and the commercial **Xenium** platform from 10x Genomics, **CosMx** from NanoString, and **MERSCOPE** from Vizgen.

The two families have complementary strengths. Sequencing-based spatial (Visium, Slide-seq) gives you transcriptome-wide coverage — you measure every gene — but at lower spatial resolution and lower per-cell sensitivity. Imaging-based spatial (MERFISH, Xenium) gives you true single-molecule, single-cell resolution and beautiful images of where each transcript sits, but only for a pre-defined panel of a few hundred to a few thousand genes — you have to choose your targets ahead of time. For atlas-style discovery work, sequencing-based is the natural fit; for hypothesis-driven characterization of known cell types in tissue context, imaging-based is the natural fit.

\[Pause.\]

What has spatial transcriptomics actually enabled? It's letting biologists ask questions about tissue architecture that single-cell could never answer. In a tumor, where exactly are the exhausted T cells relative to the cancer cells — are they infiltrating the tumor mass or stuck at the edge? In a developing brain, how does the layered cortex assemble — which progenitors give rise to which layers, in which spatial order? In a fibrotic lung, where do the disease-associated cell types localize relative to airways and vasculature? These are spatial questions, and spatial transcriptomics answers them.

Combined with dissociated single-cell data — for the depth of transcriptome coverage — spatial data is becoming the standard reference layer for tissue biology. The Human Cell Atlas and the Tumor Atlas Network are both moving aggressively into spatial. Many recent papers combine multiple modalities: dissociated scRNA-seq for cell type discovery, then spatial transcriptomics for in-tissue localization, then validated with imaging-based confirmation. The future is multimodal and spatial together.

This is a field moving so fast that anything specific I say today may be out of date by next year. But the direction is clear. The destruction of spatial information that bulk and dissociated single-cell required is being undone. We're getting closer to assays that measure every molecule in every cell in its real tissue location, simultaneously. That's the asymptote. We're not there, but the trajectory is unmistakable.

---

## SEGMENT 17 — Limitations — dropout, batch effects, mRNA-only sees a slice of biology

I have spent the last fifteen segments telling you why single-cell sequencing is transformative. Now I want to spend one segment telling you, honestly, what it cannot do — because every paper you read should be read with these limits in mind.

The first and most important limitation is **dropout**. We touched on it earlier. Current single-cell methods capture only a small fraction of the mRNA molecules present in each cell — typically five to twenty percent for droplet methods, somewhat higher for plate-based. The rest of the mRNA is missed. For abundant transcripts — say, a gene expressed at five hundred copies per cell — capturing ten percent gives you fifty copies, plenty to measure reliably. For rare transcripts — say, a transcription factor expressed at five copies per cell — capturing ten percent gives you, on average, half a copy. Which rounds down to zero most of the time. That's dropout: genes that are really expressed in a cell but show up as zero in the data, just because they didn't happen to get captured.

The consequence is that single-cell expression matrices are full of false zeros. Some zeros are real biology — the gene really isn't expressed. Some zeros are technical — the gene is expressed but not captured. Distinguishing the two is hard. Methods like MAGIC, SAVER, and scVI try to impute the missing values by borrowing information from similar cells. Whether the imputed values are real or smoothing artifacts is a matter of debate. The honest answer is: low-abundance gene expression is undermeasured in single-cell data, and you should be cautious about claims that depend on small numbers of UMIs in individual cells.

\[Pause.\]

The second limitation is **batch effects**, which we mentioned in the QC segment but bears repeating. Cross-sample, cross-lab, cross-platform integration is a major analysis challenge. Even when you do everything carefully, two datasets generated in different conditions will not be perfectly comparable. Batch correction methods help, but they can also over-correct — erasing real biological differences along with the technical ones. Any single-cell paper that compares conditions across batches should be scrutinized for how the batch correction was done and whether it might have suppressed real signal.

The third limitation is that **single-cell RNA-seq sees mRNA, and mRNA is only one layer of biology**. The cell's actual functional state depends on protein levels, post-translational modifications, metabolite concentrations, ion channel states, organelle distribution. mRNA is a useful but imperfect proxy. The correlation between mRNA level and protein level for any given gene is moderate — typically around 0.4 to 0.6 — meaning a lot of variation in protein is not predicted by variation in mRNA. So when a single-cell paper says "this cell type expresses high X," what it actually means is "this cell type has high X mRNA." Whether the protein is also high, whether the protein is active, whether the protein is doing what you think it's doing — all that is downstream and not directly measured.

Multi-omic methods help — CITE-seq adds proteins, single-cell proteomics is emerging, methylation can be measured per cell. But each added layer comes with its own technical compromises. Comprehensive single-cell multi-omics on the same individual cells, across all relevant molecular layers, with full sensitivity, is still a distant goal.

\[Pause.\]

The fourth limitation is **dissociation bias and snapshot bias**. The act of dissociating tissue, as I mentioned in Segment 10, alters the cells you measure. Some cell types are fragile and don't survive dissociation — neurons in some brain regions, large adipocytes, polyploid hepatocytes — so they're underrepresented or absent in scRNA-seq data. The cells that do make it through are biased toward the ones that survived. Single-nucleus sequencing partially addresses this but introduces its own biases (lower per-cell mRNA, mostly nuclear transcripts). The data you get is never a perfectly representative sample of the tissue you started with.

And the snapshot problem: a single-cell experiment captures one moment in time. Cell states change on timescales of minutes to days; gene expression fluctuates; cells respond to stimuli. One snapshot is one moment. To study dynamics, you need either time-course sampling (expensive) or computational inference like RNA velocity (noisy). Single-cell sees the static distribution but only weakly the temporal flow.

The fifth limitation, more philosophical, is that **cell type is a fuzzy concept**. Single-cell sequencing produces clusters, which we tend to call cell types. But cell type, cell state, and cell substate are not well-distinguished concepts in biology. Is a CD8 T cell a cell type? Or are exhausted CD8 T cells and memory CD8 T cells different types, or different states of the same type? Different clustering resolutions give different answers. There's no biological gold standard. The field has converged on rough conventions — tied to lineage, function, transcriptional pattern — but they're conventions, not facts. When a paper says "we identified twelve cell types," that's a useful summary, but the twelve is somewhat arbitrary. Be careful when comparing numbers across papers and tissues.

\[Pause.\]

The sixth limitation, finally, is **cost and scale**. Even at current prices, sequencing one tissue sample at single-cell resolution costs several thousand dollars. Sequencing dozens of samples across a clinical study costs hundreds of thousands. Sequencing thousands of patients — the kind of scale you'd want for population genetics or large clinical trials — costs millions. This is much cheaper than it used to be, but it's still a constraint. The Human Cell Atlas is feasible only because of consortium funding and global collaboration. Routine clinical use of single-cell sequencing — for, say, every cancer patient at diagnosis — is not yet economical. Bulk sequencing remains far cheaper and is still the standard for most clinical applications. Single-cell is a research tool, mostly. It's slowly entering clinical use for specific high-value applications, but it has not yet become routine.

These limitations are not reasons to dismiss single-cell. They're reasons to read single-cell papers critically. Every method has limits. Knowing the limits is what separates real understanding from cargo-cult method-citing.

---

## SEGMENT 18 — The future — long-read single-cell, single-cell methylation, in-situ sequencing

Let me close with what's coming next. Predictions in a field this fast-moving are dangerous, but a few trends are clear enough to call.

**Long-read single-cell.** The Illumina short-read backbone that all current single-cell methods rely on has limitations — it can't easily resolve full-length isoforms, structural variants, or distantly-paired sequences within a single transcript. Long-read platforms — PacBio HiFi and Oxford Nanopore — can read full-length transcripts in one go, capturing splice patterns, gene fusions, allele-specific expression. Combining long-read sequencing with single-cell barcoding is now feasible, though expensive. The 10x Single Cell Long Read kit, the ScNanoGPS approach, and other emerging methods are bringing full-length transcript resolution to single-cell. Expect this to become standard for isoform-level questions over the next few years.

**Single-cell methylation, chromatin, and 3D genome.** DNA methylation patterns per cell, captured by bisulfite-converted single-cell sequencing (snmC-seq and variants). Single-cell Hi-C, capturing 3D genome organization per cell. Single-cell repli-seq, capturing replication timing. Each of these adds a new molecular layer at single-cell resolution. The field is steadily expanding the set of measurements you can make on individual cells.

**Single-cell proteomics.** Mass spectrometry-based proteomics at single-cell resolution is moving from heroic experiment to feasible technique. Methods like SCoPE-MS and SCoPE2 from Nikolai Slavov's lab, plus emerging commercial platforms, can quantify a few thousand proteins per cell. The throughput is far lower than scRNA-seq — tens to hundreds of cells per day, not tens of thousands — but it's improving. Eventually, single-cell proteomics will give the protein-level readout that complements the mRNA readout we've focused on today.

\[Pause.\]

**In-situ sequencing.** The logical endpoint of the spatial transcriptomics trajectory. Methods like in-situ sequencing (ISS), STARmap, and others sequence transcripts in their original cellular location, by performing the chemistry on the fixed tissue itself rather than capturing onto a slide. Currently these methods can detect a few hundred to a thousand transcript species per cell with subcellular spatial resolution. Pushed to its limit, in-situ sequencing would let you read every transcript in every cell in a tissue slice, in its real three-dimensional location. We're not there yet, but it's the direction.

**AI-driven analysis.** Foundation models trained on hundreds of millions of single cells — scGPT, Geneformer, scFoundation — are starting to enable transfer learning across tissues, species, and conditions. These models learn general representations of cell state that can be fine-tuned to specific tasks: cell type prediction, perturbation response prediction, cross-species mapping. They're early stage, but they suggest a future where a vast accumulated single-cell corpus serves as background knowledge for any new study, the way pretrained language models do for natural language. Whether this lives up to the hype is yet to be seen.

**Perturbation single-cell.** Methods like Perturb-seq, CROP-seq, and SHARE-seq with CRISPR screens link genetic perturbations to single-cell phenotypes at massive scale. You can perturb a thousand genes, one per cell, in a million-cell screen, and read out the transcriptional consequence of each perturbation at single-cell resolution. This is changing functional genomics from low-throughput one-gene-at-a-time biology to high-throughput parallel screens with rich readouts. It's one of the most active areas of methods development.

\[Pause.\]

**Clinical translation.** The slow but real move of single-cell from research tool to clinical assay. Diagnostic applications in hematology (myelodysplasia, leukemia classification), in transplant rejection monitoring, in cancer immunotherapy response prediction. Some are already used in specific contexts; many more are in development. The cost has to come down further, the workflow has to standardize, the analysis pipelines have to become turnkey enough for clinical labs. All of those are happening, just slowly.

The unifying theme across all of these is **more measurements per cell, more cells per experiment, more dimensions integrated into one picture**. Single-cell as it exists today is already a fundamental advance over bulk. Single-cell as it will exist in ten years will look like a different field again — multimodal, spatial, perturbational, long-read, with foundation models providing analytic glue. The bulk era is over. The single-cell era is barely starting.

If you walk out of here with one big idea, let it be this: when biology moves from averages to distributions, the questions you can ask change qualitatively, not just quantitatively. Bulk RNA-seq told you the mean expression of a tissue. Single-cell tells you the population structure. Once you have population structure, you can see rare cells, heterogeneity, trajectories, ecosystems, spatial architecture. None of those questions were even askable before. They're all askable now, and the field is in the middle of asking them. Cell atlases of every organ. Maps of every tumor. Trajectories of every developmental decision. The technology that opened all of that up is exactly the thing we've been talking about for the past two hours — partitioning plus barcoding, droplets plus beads, UMIs plus sequencing, integrated through software into per-cell measurements. A sample-prep trick on top of Illumina chemistry that fundamentally changed what biology could ask of itself.

That's the story. Thank you for staying with me. Questions are welcome. The appendix follows.

---

## APPENDIX

A short reference of names, dates, and orienting facts mentioned in this lecture, plus a few additional notes useful for further reading.

**The foundational papers and people.**

- _Tang et al., 2009._ Fuchou Tang, working in Azim Surani's lab at the Gurdon Institute in Cambridge, published the first complete single-cell mRNA sequencing experiment, using a mouse blastomere. This is the conventional starting point of the modern scRNA-seq era.
- _STRT, 2011._ Sten Linnarsson and colleagues in Stockholm published single-cell tagged reverse transcription, an early barcoded scRNA-seq method.
- _CEL-seq, 2012._ Itai Yanai's group introduced linear amplification by T7 polymerase as an alternative to PCR-based methods, reducing amplification bias.
- _Smart-seq, 2012; Smart-seq2, 2013; Smart-seq3, 2020._ Rickard Sandberg's group in Stockholm. Plate-based, full-length, deep single-cell transcriptome profiling. The standard for depth-over-breadth experiments.
- _Drop-seq, 2015._ Evan Macosko, Steven McCarroll, and colleagues at Harvard. Droplet-based, barcoded-bead scRNA-seq. Published in _Cell_ on May 21, 2015. Demonstrated on the mouse retina.
- _inDrops, 2015._ Allon Klein, Marc Kirschner, and colleagues at Harvard. Published back-to-back with Drop-seq in the same issue of _Cell_. Hydrogel beads with photo-cleavable primers.
- _10x Chromium launch, 2016._ Founded 2012 by Serge Saxonov, Ben Hindson, Kevin Ness. Chromium Controller launched 2016 for single-cell. Visium acquired 2018 from Spatial Transcriptomics (Lundeberg/Ståhl). Multiome launched 2020. Xenium launched 2022.
- _Human Cell Atlas, 2016 onward._ Co-led by Aviv Regev (Broad Institute, later Genentech) and Sarah Teichmann (Wellcome Sanger Institute). Founded at a London meeting in October 2016. Global consortium of 3,600+ scientists, 100+ countries.
- _CITE-seq, 2017._ Marlon Stoeckius and colleagues at the New York Genome Center. Antibody-DNA conjugates for simultaneous protein and RNA measurement.
- _RNA velocity, 2018._ Gioele La Manno, Peter Kharchenko, Sten Linnarsson, and colleagues. Spliced/unspliced ratio inference of transcriptional dynamics.
- _MERFISH, 2015 onward._ Xiaowei Zhuang's lab at Harvard. Multiplexed error-robust fluorescence in situ hybridization.

**Key numbers.**

- Mammalian cell: roughly 200,000 mRNA molecules total, perhaps a picogram of mRNA mass.
- Capture efficiency in droplet methods: 5-20% of mRNA molecules.
- Typical 10x Chromium experiment: 5,000-20,000 cells per channel, 20,000-50,000 reads per cell, 1,500-4,000 genes detected per cell on average.
- Chromium V3 cell barcode length: 16 bases. UMI length: 12 bases. Theoretical barcode space: ~4 billion, of which ~6 million are used per chip.
- Visium spot size: 55 micrometers. Visium HD bin sizes: 2 and 8 micrometers.
- Human Cell Atlas as of 2024: ~62 million cells mapped, 18 biological networks, 3,600+ scientists in 100+ countries.

**Tools and software.**

- _Cell Ranger:_ 10x Genomics' standard processing pipeline (FASTQ to count matrix).
- _STARsolo:_ Open-source alternative built into the STAR aligner.
- _Alevin-fry / Salmon-Alevin:_ Fast pseudo-alignment alternatives.
- _Seurat:_ Standard analysis package in R (Rahul Satija's lab).
- _Scanpy:_ Standard analysis package in Python (Fabian Theis's lab).
- _Monocle, Slingshot, PAGA:_ Trajectory and pseudotime tools.
- _scVelo:_ RNA velocity implementation.
- _Harmony, BBKNN, scVI:_ Batch correction and integration.
- _Scrublet, DoubletFinder, Solo:_ Doublet detection.
- _SoupX, CellBender:_ Ambient RNA correction.
- _CellTypist, SingleR:_ Automated cell type annotation.

**A note on dissociation versus nucleus protocols.**

- scRNA-seq: whole-cell suspension, requires gentle dissociation, captures cytoplasmic and nuclear mRNA. Higher molecule count per cell. Dissociation stress is a concern.
- snRNA-seq: isolated nuclei from frozen or fresh tissue, no dissociation stress, captures mostly nuclear mRNA, especially unspliced. Lower molecule count per cell but works on hard-to-dissociate tissues (brain, heart, muscle) and on archived frozen samples.

**Further reading.**

- The Tang 2009 paper in _Nature Methods_ for the original demonstration.
- The Macosko 2015 and Klein 2015 papers in _Cell_ for the droplet revolution.
- _Single-cell RNA sequencing technologies and statistical methods_ by Stegle, Teichmann, Marioni (2015) for an early review.
- The Human Cell Atlas white paper, on the HCA website, for the project's goals and structure.
- _Eleven grand challenges in single-cell data science_ by Lahnemann et al. (2020) for an honest list of open analytical problems.
- The Seurat and Scanpy tutorials, online, for hands-on practice with real data.

That's the lecture. The technology is younger than most of you in the room. Its inventors are still active. The atlases are still being built. You are stepping into a field whose foundational period is still happening, which means the work you do over the next decade may itself become part of the foundational literature. Use the technology wisely, read papers critically, and remember the smoothie versus fruit-salad distinction every time you look at a tissue sample. That, more than any specific tool or chemistry, is the lesson worth keeping.

Thank you.
