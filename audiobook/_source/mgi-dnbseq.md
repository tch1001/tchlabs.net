# MGI / BGI DNBSEQ Sequencing

**A 2-hour undergraduate genomics lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool. This lecture assumes you've already seen a tour of Illumina sequencing by synthesis — we're going to compare and contrast with Illumina constantly, because the whole reason MGI matters is that it is the credible non-Illumina short-read alternative.

---

## SEGMENT 1 — The non-Illumina short-read story, and why a credible alternative matters

Alright, let's get started. Good morning, everyone. Today and for the next two hours we are going to talk about a sequencing platform that, until pretty recently, most people outside China had barely heard of, and that now produces — by some estimates — close to a quarter of all the short-read DNA sequencing done on Earth. The platform is called **DNBSEQ**, short for **DNA nanoball sequencing**. The company that makes the instruments is **MGI Tech**, a spin-out of the Chinese genomics giant **BGI**. And the technology underneath, even though the output looks essentially identical to Illumina data, is genuinely different at the chemistry level. That difference — and the politics around it, and the economics it has enabled — is what we are here to understand.

So let me start with the framing. For about fifteen years, "next-generation short-read sequencing" and "Illumina" were effectively synonyms. The other platforms of the late 2000s — 454 pyrosequencing, ABI SOLiD, Helicos true single-molecule — all collapsed, one after another, in the face of Illumina's relentless cost reductions and engineering. By around 2015, Illumina controlled something north of ninety percent of the global short-read market. It was, by any reasonable measure, a monopoly. And monopolies are bad for science. They set prices. They control the rate of innovation. They decide which experiments are economical and which are not. When the cost of running a sequencer drops by ten percent or rises by ten percent, the number of human genomes that get sequenced in the world changes by a comparable amount, and so does the rate at which medicine learns about rare diseases, cancer subtypes, microbial outbreaks, and population history. A single dominant sequencing vendor is, in a real sense, a single point of failure for genomic biology.

So when I tell you that as of the mid-2020s there is now a serious second player — a company that makes short-read instruments with comparable accuracy, comparable read length, and frequently lower per-base cost — you should hear that as a structurally important development for biology, not just a corporate horse race. The arrival of MGI as a credible alternative is changing the economics of genomics in the same way that the arrival of generic drugs changes the economics of pharmaceuticals. Prices come down. New experiments become possible. Smaller labs get to play.

\[Pause.\]

Here is the analogy I want you to hold in your head for the next two hours. You already know Illumina. On an Illumina flow cell, each starting DNA fragment grows into a **cluster** of about a thousand identical clonal copies, all anchored next to each other on the glass, via a process called bridge amplification. The whole cluster lights up together when the polymerase adds a base, and that combined glow is what the camera sees. **Now picture a completely different way to get a thousand copies of your fragment into one tiny glowing spot.** Instead of growing a clonal colony of a thousand separate molecules on the surface, you make a _single_ molecule that contains, all on one continuous strand, three hundred or so head-to-tail copies of your target sequence — and you let that single molecule fold up on itself into a tight little ball about two hundred nanometers across. One ball. One starting fragment. Three hundred copies, all on one polymer chain, curled together. When the polymerase adds a labeled base anywhere along that chain, three hundred dyes light up at once, in the same spot. The camera sees a bright dot, just like with an Illumina cluster — but the underlying object is structurally completely different. **A nanoball, not a cluster.** That's the picture. Hold it.

The difference matters, and we'll spend most of this lecture unpacking why. But the headline is: no bridge amplification, no exponential PCR step on the flow cell, no thousand-clonal-molecules-on-a-surface step. Just a circle of DNA, replicated round and round and round by a strand-displacing polymerase, producing one very long single-stranded concatemer that collapses into a sphere. That's the DNB. The "nanoball" name is literal — it is, structurally, a ball of DNA at the nanometer scale.

If you walk out of here in two hours and you can do three things — one, sketch how a DNA fragment becomes a nanoball via rolling circle amplification and explain why no PCR step happens on the flow cell; two, explain in plain English the difference between cPAL and cPAS chemistry, and why MGI moved from one to the other; three, look at a modern paper that says "sequencing was performed on a DNBSEQ-T7" and have a real intuition for what that means about cost, read length, accuracy, index hopping, and where the data lives geographically — then we've succeeded. Everything else hangs off those three.

\[Pause.\]

One last orienting fact. The output of an MGI machine, once you get past the chemistry, is essentially indistinguishable from Illumina output at the bioinformatics layer. FASTQ files. Paired-end reads. Read lengths typically around 100 to 150 base pairs. Quality scores in the Q30 range. Same downstream pipelines, same aligners — BWA, bowtie2 — same variant callers, the same everything. If I gave you a tube of FASTQ data and didn't tell you which instrument produced it, you would have to look pretty carefully to tell. There are subtle signatures — slightly different error profiles at the read ends, slightly different GC bias, the absence of certain Illumina-specific artifacts like index hopping — but the data is fungible. From the analyst's perspective, the two platforms are nearly interchangeable. From the chemist's and the chief financial officer's perspectives, they are deeply different. That gap, between what the data looks like and how it was produced, is the gap we're going to spend two hours filling in.

So that's the contract. Two hours, one platform — the credible non-Illumina alternative. We'll start with the history, because the history explains why this technology exists at all, why it is owned by a Chinese company, and why it took twenty years to become a serious competitor.

---

## SEGMENT 2 — Complete Genomics: the original DNB company, 2005 to 2013

DNBSEQ did not begin in China. It began in Mountain View, California, in 2005, in a startup called **Complete Genomics**. The company was founded by three people — **Clifford Reid**, a serial entrepreneur who became CEO; **Radoje Drmanac**, a Serbian-born molecular biologist who had been working on sequencing for almost two decades; and **John Curson**. The mission was crisp: build a sequencer designed from the ground up to read a human genome for under a thousand dollars, at a time when the cost was still in the millions. That target — the so-called "thousand-dollar genome" — was a kind of public goal in the field through the late 2000s, and Complete Genomics was one of several companies racing to hit it.

Where Complete Genomics differed from everyone else was in their business model. Most sequencing companies — Illumina, 454, ABI — sold instruments. They built a sequencer, sold it to a lab, and the lab ran samples on it. Complete Genomics built sequencers but did not sell them. Instead, they offered sequencing as a service. You shipped your DNA samples to Mountain View, they ran them on their proprietary instruments in their own facility, and they shipped you back the data. They were a sequencing factory, not a sequencer vendor. The advantage was that they could optimize the entire workflow — chemistry, instruments, software, analysis — for one purpose: reading human genomes at scale, in one place, under one roof. The disadvantage was that they had no flow of revenue from instrument sales, which meant they had to either build enormous volume in the service business or eventually pivot. They never quite got to the volume that would have made the service business profitable at the cost levels they could achieve.

\[Pause.\]

Technically, though, Complete Genomics was a remarkable achievement. In February 2009, they sequenced their first complete human genome and deposited the data publicly. In November 2009 they published a landmark paper in _Science_ titled, roughly, "Human genome sequencing using unchained base reads on self-assembling DNA nanoarrays." That title is a mouthful, but every word in it is doing work, and we'll unpack the whole thing over the next few segments. "Self-assembling DNA nanoarrays" means the nanoballs. "Unchained base reads" means a particular ligation chemistry — cPAL, the original Complete Genomics chemistry, which we'll meet in Segment 6. The paper demonstrated that you could sequence a human genome end to end with this approach, for several thousand dollars in reagent cost, with comparable accuracy to other platforms of the era. It was the first serious proof that DNB-based sequencing was real.

By 2010 and 2011, Complete Genomics had sequenced hundreds of human genomes for academic and pharmaceutical customers, and they had reduced their internal cost-per-genome to around four thousand four hundred dollars — a dramatic improvement, though still well above the cost trajectory Illumina was riding at the same time. They were a real competitor. They were also burning cash.

Here is where the story takes its decisive turn. In 2012, Complete Genomics, low on capital, put itself up for sale. Two suitors emerged. One was Illumina — yes, the dominant incumbent, interested in acquiring its closest technical competitor, presumably to either absorb the technology or shelve it. The other was **BGI**, the Beijing Genomics Institute, which had become by then the largest sequencing operation in the world by sheer instrument count but was entirely dependent on Illumina hardware. BGI wanted a sequencing platform of its own — for strategic, technological, and arguably geopolitical reasons — and Complete Genomics was the most plausible target on the market. The bidding war was short and not particularly pretty. BGI won. In March 2013, BGI acquired Complete Genomics for one hundred and eighteen million dollars, with regulatory approval from the United States Committee on Foreign Investment in the United States — known as CFIUS — which was, in retrospect, the last era when such a transfer of a sensitive American sequencing technology to a Chinese acquirer would have been approved without significant controversy. We'll come back to the geopolitics in Segment 16.

For our purposes today, the important point is this. The intellectual lineage of DNBSEQ runs through Mountain View, California, from 2005 to 2013. The chemistry, the nanoball idea, the patterned arrays, the original instruments — all American inventions, by a small team led by Reid and Drmanac. Then in 2013 the whole thing transferred, with its patents and personnel, to BGI in Shenzhen. The story since then is what BGI and later MGI have done with that foundation — refining the chemistry, scaling the instruments, building a global commercial business — but the bones of the platform were laid in California, by people who set out, almost twenty years ago, to break the thousand-dollar-genome barrier.

---

## SEGMENT 3 — Radoje Drmanac and the DNB idea — what problem was being solved

It's worth spending a segment specifically on Radoje Drmanac, because the DNB concept is unusually attributable to one person's long-running research program, and understanding what he was trying to solve clarifies what the technology is for.

Drmanac began working on sequencing in the 1980s, in Belgrade, on a related but distinct approach called **sequencing by hybridization**. The idea behind sequencing by hybridization was that if you had an array of every possible short DNA probe — every possible sequence of, say, eight or ten base pairs — and you let your target DNA hybridize against that array, you could in principle deduce the sequence of your target by which probes it stuck to. This was an alternative to sequencing by synthesis, which we've already met in the Illumina context. Drmanac developed sequencing by hybridization through the 1990s, eventually moving to the United States and founding a company called Hyseq, which had real scientific traction but never quite became a commercial product. The general lesson from that decade was that hybridization-based readout, while elegant in principle, has a stubborn signal-to-noise problem when you scale it up to large genomes — too many similar probes binding too many similar targets, with mismatches and bulges and off-target hybridizations that the system can't reliably distinguish.

But Drmanac took several ideas from that work into Complete Genomics in 2005. Two of them became core to DNBSEQ.

\[Pause.\]

The first idea was: **don't try to clonally amplify on a flow cell.** At the time, in the mid-2000s, Solexa — the company that would become Illumina — was perfecting bridge amplification, the technique we discussed last lecture, where one molecule on a flow cell becomes a thousand clonal molecules clustered next to each other via roughly thirty-five cycles of bridge formation. Bridge amplification is a beautiful technique but it has costs. It is exponential PCR, with all the biases that come with that — fragments with extreme GC content amplify poorly, very short and very long fragments amplify at different rates, and after thirty-five cycles small differences in efficiency become large differences in cluster brightness and density. Drmanac wanted a way to get clonal copies of a starting molecule without doing exponential amplification on the flow cell.

The second idea was: **make each readable unit a single molecule rather than a clonal colony.** If you could get a single physical particle that contained hundreds of copies of your target sequence — all carried by one DNA chain — then the readout would be from one molecule, with no risk of cross-contamination between neighboring clusters, and no compounded amplification bias from a colony of independently growing molecules. One ball, one starting fragment, no second-cycle errors.

These two ideas led, eventually, to the DNB concept. The mechanism for getting many head-to-tail copies of a sequence onto one molecule was already known in molecular biology — it is called **rolling circle amplification**, and we'll devote the next segment to it. The mechanism for getting those long single-stranded concatemers to condense into compact, regularly shaped particles was new, and required a lot of careful work on buffer conditions, oligonucleotide spacers, and the physics of single-stranded DNA folding. The mechanism for laying out the resulting nanoballs in a regular pattern on a flow cell — one ball per defined spot, no overlaps — was also new, and required developing patterned silicon wafers with positively charged binding spots that geometrically restrict where a ball can land. We'll cover that in Segment 5.

The deeper insight, though — the one I want you to absorb — is that DNBSEQ is fundamentally an answer to a problem Illumina solved differently. Both platforms have to get enough signal off each starting molecule to be detected by a camera. Illumina's answer is: make a clonal cluster of a thousand independent molecules through bridge amplification, accept the costs of doing exponential PCR on the flow cell. Complete Genomics' answer was: make one long molecule containing three hundred copies of your target via linear amplification of a circle, no exponential step. Both answers work. Both have been engineered to very high quality. But they are structurally different solutions to the same physics problem, and that structural difference is what gives DNBSEQ its distinctive set of trade-offs — which we'll see in Segments 12 and 13.

So: hold on to the picture of Drmanac, working for thirty years on the idea that you could read DNA without doing exponential PCR. Sequencing by hybridization didn't work for the reasons I mentioned. But the DNB-plus-sequencing-chemistry hybrid, which his team finally landed on at Complete Genomics, did. That's the lineage.

---

## SEGMENT 4 — Rolling circle amplification: how a single DNA molecule becomes a nanoball

Okay. Now let's open the hood and look at how a nanoball is actually built. This is the most distinctive piece of the whole platform, and it's a beautiful piece of biochemistry, and once you have it in your head, the rest of the chemistry follows.

You start with a library — DNA fragments, somewhere between two hundred and five hundred base pairs long, depending on the application — produced by the same kinds of library prep we discussed for Illumina. Fragmentation, end repair, A-tailing, adapter ligation. The same general workflow. The adapters MGI uses are specific to their platform — they have their own primer binding sites and their own anchor sequences — but the basic library construction is, at a high level, the same kind of thing you'd do for an Illumina run. You end up with a tube of double-stranded fragments, each one with adapters on both ends.

Now here is where DNBSEQ diverges sharply from Illumina. Instead of loading these linear fragments onto a flow cell and letting them bridge-amplify, the DNB workflow takes an extra in-tube step: **circularize each fragment.** A specific enzyme — a single-stranded DNA ligase — joins the two ends of each fragment together, through an intermediate splint oligo, so that what was a linear fragment becomes a small closed circle. Each circle is your original fragment, now joined head-to-tail with itself, with a single ligation junction.

\[Pause.\]

Why circularize? Because of what comes next, which is the magic. The circularized libraries are then fed into a reaction with a remarkable enzyme called **Phi 29 DNA polymerase**. Phi 29 is a polymerase from a bacteriophage — a virus that infects bacteria — and it has two properties that make it almost uniquely suited to this job. First, it is **highly processive**, meaning it can synthesize tens of thousands of bases without falling off the template. Second, and even more importantly, it has **strong strand displacement activity**, meaning that when it encounters double-stranded DNA in front of it, it doesn't stop or get stuck — it just peels the existing strand off the template and keeps going.

Now imagine what happens when you put Phi 29 on a small circular template. The polymerase grabs the circle, starts synthesizing a complementary strand around it, and goes once around. After one full lap, the polymerase encounters the strand it just finished — the first base it laid down is now in front of it. With a normal polymerase, that would be the end of the line. With Phi 29's strand displacement activity, the enzyme just peels its own previous lap off the template and keeps walking around the circle, leaving the displaced strand dangling out behind it. It does another lap. Then another. Then another. The polymerase walks around the circle hundreds of times, like a runner on a track, never stopping, leaving behind a single very long single-stranded concatemer of head-to-tail copies of the original circle.

This is **rolling circle amplification**, or **RCA**. The name is exact — the polymerase rolls around the circle, amplifying it linearly with each lap. After a few minutes of reaction, each starting circle has produced a single-stranded DNA molecule containing roughly three hundred copies of the original fragment sequence, all in a row, connected head to tail, with the original adapter sequences appearing at the boundary between every pair of copies.

\[Pause.\]

But that long single-stranded molecule is not yet a ball. It is just a long, floppy piece of single-stranded DNA — roughly one hundred thousand bases long, total — and if you left it in solution it would just flop around. What turns it into a ball is the next step, which is mostly physics rather than enzymology. The reaction conditions are tuned — salt, temperature, the presence of certain crowding agents — such that the long concatemer collapses, by its own internal hybridization and folding, into a compact ball roughly two hundred nanometers across. The exact ball-formation kinetics involve some clever buffer chemistry, but the principle is straightforward: a sufficiently long single-stranded DNA, in the right ionic conditions, naturally condenses into a compact spherical structure. The negative charges on the phosphate backbone make sure that the ball doesn't get too big — beyond a certain size, electrostatic repulsion limits further condensation — and they also make sure that the balls repel each other in solution, so they don't aggregate into clumps.

The end product is what gives the platform its name. A **DNA nanoball**. A single particle, on the order of two hundred nanometers in diameter, containing about three hundred head-to-tail copies of your starting fragment, all on a single covalent backbone. Three hundred copies, one molecule. **One nanoball is, structurally, one starting fragment amplified linearly, then folded up.** Contrast that with an Illumina cluster, which is roughly one thousand independent molecules, exponentially amplified in place, sitting next to each other on a glass surface. The Illumina cluster is a colony of clones. The DNB is a single molecule with internal redundancy.

The implications of this structural difference will show up over and over in the rest of the lecture. No exponential amplification, so no PCR bias from compounded efficiency differences. No clonal amplification of errors — if Phi 29 makes a mistake on one lap of the circle, it's one error out of three hundred copies, which gets outvoted in the consensus signal. No bridge amplification step on the flow cell at all, so loading is faster and the flow cell chemistry is simpler. And — this is the big one for clinical work — no opportunity for **index hopping**, the failure mode where adapter sequences from one sample get mistakenly attached to fragments from another during the on-flow-cell amplification step. We'll devote a whole segment to that in Segment 13.

So: take a circular DNA template. Add Phi 29 polymerase. Let it walk around the circle three hundred times, displacing its own previous strands. Watch the resulting concatemer fold into a ball. That's how a nanoball gets built. The whole reaction takes maybe twenty to thirty minutes in a tube, before any flow cell is involved. Now let's load those balls onto a surface.

---

## SEGMENT 5 — Patterned flow cells and one-ball-per-spot loading

We now have a tube full of nanoballs. Maybe a billion of them, suspended in buffer, each one about two hundred nanometers across, each one containing three hundred copies of one starting fragment. The next step is to get those balls onto a flow cell, in a regular pattern, one ball per spot, with no two balls overlapping. This is where the engineering of DNBSEQ flow cells gets clever and where the platform's distinctive advantages start to show up.

Let me first remind you of the Illumina situation, because the contrast is sharp. On an early Illumina flow cell — the kind used on the original Genome Analyzer and the early HiSeq instruments — the inner surface was uniformly coated with anchor oligos, with no spatial pattern. Library fragments bound to the surface at random positions. When clusters grew via bridge amplification, two clusters that happened to start too close together would overlap as they grew — and the camera would see them as one blurry signal, ruining both reads. To avoid this, you had to load the flow cell sparsely, so that the random binding positions were far enough apart that clusters didn't run into each other. Sparse loading meant you wasted most of the surface area of the flow cell. There was a hard physical ceiling on density, set by the random-positioning problem.

Around 2014, Illumina solved this with their own version of **patterned flow cells**. They etched the flow cell surface with regular arrays of tiny wells, each well containing the anchor oligos, surrounded by inert space where no DNA could bind. A single fragment, once it lands in a well, fills that well and clusters there; the next-nearest cluster is geometrically guaranteed to be far enough away to be optically distinct. The patterned-flow-cell trick let Illumina dramatically increase density on the HiSeq X and later instruments, and it is one of the reasons throughput per run jumped sharply in the mid-2010s.

\[Pause.\]

DNBSEQ flow cells use the same general principle — patterned spots with controlled spacing — but with a twist that fits the nanoball workflow. Here is how the MGI version works.

The flow cell surface is a silicon wafer, coated with layers of silicon dioxide, titanium, and other materials, then patterned through photolithography to create a regular grid of small spots, typically a few hundred nanometers across. Each spot is functionalized with **aminosilane**, a chemical that gives the spot a positive surface charge. The spaces between spots are coated with a different chemistry that is hydrophobic and uncharged — essentially repellent to DNA. Now think about what happens when you flow a suspension of nanoballs across this surface. The nanoballs are negatively charged on their outside, because of the phosphate backbones of all that single-stranded DNA. They are electrostatically attracted to the positively charged aminosilane spots, and they have no affinity for the regions in between. Each ball drifts onto a spot, sticks, and stays.

But here is the kicker: **the spots are sized to fit exactly one ball.** A ball that lands on a spot occupies that spot entirely. There is no room for a second ball to bind there — the geometry is wrong, the charge has been satisfied by the first ball, and any incoming nanoball just bounces off and lands somewhere else. So every spot ends up with at most one ball. The pattern fills evenly, one ball per spot, like a tray of eggs filling up an egg carton. This is what MGI calls **size-exclusion patterned arrays**, and it gives you a very high density — billions of spots per flow cell — with very clean spatial separation between every neighbor.

The analogy I want you to hold: **a patterned DNB flow cell is an array of grippy little spots, each one just big enough for one nanoball, no more, no less. Pour the balls on, they self-assemble into a regular grid, no overlaps, no waste of surface area.** That's the loading step. It takes a few minutes, and at the end of it the flow cell has — depending on the instrument — somewhere between two billion and ten billion individual nanoballs anchored, each in its own well, each ready to be read.

\[Pause.\]

There are two important consequences of this loading geometry, and they're worth noting because they distinguish DNB workflows from Illumina workflows operationally.

First, **loading is fast and deterministic.** You don't need a lengthy cluster generation step at the start of the run, because the nanoballs were already built in a tube before they were loaded. Once the flow cell is loaded, you can begin sequencing within minutes. An Illumina run, by contrast, spends a couple of hours on the instrument doing bridge amplification before the first base is read. The DNB workflow front-loads that step into the tube, where you can do it in parallel for many samples and at higher throughput.

Second, **loading density is essentially calibrated by the pattern, not by the user.** On an unpatterned flow cell you have to load the right amount of library — too much and clusters overlap, too little and you waste capacity. With size-exclusion patterning, the chip itself enforces a ceiling on how many balls can bind. If you flood it with library, the extras just wash away. This makes the loading step more forgiving and reduces the kind of run-quality variation that operators of older Illumina instruments are familiar with.

Now we have a loaded flow cell. Billions of nanoballs, each one a single molecule containing three hundred copies of a different starting fragment, anchored on a regular grid. We have to actually read them. That's the sequencing chemistry, and DNBSEQ has used two different chemistries over its history — the older cPAL, and the modern cPAS. We'll do them in historical order.

---

## SEGMENT 6 — cPAL: the original Complete Genomics chemistry, sequencing by ligation

The first generation of Complete Genomics instruments — the ones running between roughly 2009 and the mid-2010s — did not use polymerase-based sequencing at all. They used a fundamentally different chemistry called **combinatorial probe-anchor ligation**, abbreviated **cPAL**. cPAL is now obsolete on commercial MGI instruments, replaced by cPAS, which we'll get to next. But understanding cPAL is worth a few minutes for two reasons: it's a clever piece of chemistry in its own right, and the historical reasons it was replaced tell you something real about why the modern platform looks the way it does.

The big idea of cPAL is to read bases by **DNA ligation** rather than by polymerase-mediated synthesis. Here is how it works.

Each adapter on each end of each starting fragment contains a known constant sequence. On the nanoball, those adapter sequences appear at every junction between copies — three hundred copies, three hundred adapter junctions per ball. You can use those adapters as **anchor points**. Specifically, you flow in a short single-stranded DNA called an **anchor probe**, complementary to the adapter sequence. The anchor probe binds to the adapter on every copy in the ball, leaving its 3-prime or 5-prime end positioned at a known offset from the adapter — for example, exactly five bases into the unknown insert sequence.

Now you bring in a pool of **interrogation probes** — short, partially degenerate oligonucleotides, each one carrying a fluorescent dye at one specific position. The position you're trying to read — say, base five of the insert — is encoded in the probe at a specific spot, and the dye color tells you which base is there. The probes that match perfectly to the local sequence on the nanoball will hybridize, and a DNA ligase enzyme will ligate them onto the anchor. The mismatched probes — the ones whose interrogated position doesn't match the template — won't ligate properly. Wash away the unligated probes, image the flow cell, see what color is at each nanoball position, and you've just read base five at every nanoball in parallel.

\[Pause.\]

Then you wash the ligated probe off, bring in a new anchor probe positioned at a different offset, and read a different position. By varying the position of the dye within the interrogation probe — sometimes one base away from the anchor, sometimes two, sometimes three, and so on — you can read out a series of positions around each anchor. With cPAL, you typically read about ten bases on either side of each adapter junction, then move to the next adapter junction on the other end of the insert, and read another ten or so bases from there. The total read length you can get this way is around thirty-five to fifty bases per end of the insert, with **gaps** between the readable positions where no probe could reach.

That gappy structure is what the Complete Genomics 2009 _Science_ paper meant by "unchained base reads." The reads were not contiguous stretches of sequence the way Illumina reads are. They were a few short sub-reads, separated by gaps, with the positions known but the intervening bases unsequenced. You could still align them to a reference genome and call variants, because the spaced sub-reads gave you enough constraint, but the workflow felt different from Illumina, and the resulting data was awkward to use with off-the-shelf alignment tools designed for contiguous reads.

The advantages of cPAL were real. Ligation-based reading has different error modes than synthesis-based reading — there is no compounded "phasing" error from the polymerase falling behind, because each cycle is independent. Reads of any one base do not depend on the success of the previous base read. The chemistry is very robust. And the original Complete Genomics instruments produced quite accurate calls — comparable to Illumina of the same era for SNP calling.

\[Pause.\]

But cPAL had two big disadvantages, and they were the reasons it eventually got replaced.

First, **the gappy reads were annoying.** The bioinformatics ecosystem of the 2010s was being built around contiguous Illumina-style reads — ten-base anchors with gaps in between didn't fit cleanly into BWA, bowtie, or any of the standard aligners. Complete Genomics had to provide their own analysis pipeline, which kept them outside the mainstream of NGS analysis tooling. For a platform trying to compete with Illumina, that ecosystem mismatch was a serious drag.

Second, **read length was hard to extend.** With cPAL, every additional base of read length required a separate anchor probe positioned further from the adapter, with a separate cycle of ligation and imaging. The chemistry didn't scale gracefully past a few tens of bases per end. As Illumina pushed read lengths past one hundred and fifty base pairs in the early 2010s, cPAL fell behind, and the gap was structural — not something you could close with engineering improvements alone.

These two problems — gappy reads and short reads — made cPAL look increasingly outdated by about 2014, just as BGI was integrating Complete Genomics. The strategic decision was made, fairly early after the acquisition, to develop a new chemistry that would produce **contiguous Illumina-compatible reads at competitive read lengths**, while keeping the DNB structural advantages — no flow-cell amplification, no PCR bias, no index hopping. That new chemistry is cPAS, and we'll cover it next.

---

## SEGMENT 7 — cPAS: combinatorial probe-anchor synthesis, the modern MGI chemistry

The modern MGI chemistry is called **combinatorial probe-anchor synthesis**, abbreviated **cPAS**. The name preserves the "probe-anchor" lineage from cPAL, but the "synthesis" replaces "ligation." That single word change is the whole story. cPAS is, at its core, **sequencing by synthesis with reversible terminator nucleotides** — the same chemical strategy Illumina has used since the Solexa days — performed on a DNA nanoball instead of an Illumina cluster.

Let me walk through a cPAS cycle. You have a flow cell loaded with nanoballs. Each nanoball has hundreds of head-to-tail copies of the insert, with adapter sequences at every junction. The first step is the **anchor**: you flow in a short single-stranded DNA primer that is complementary to the adapter region, and it hybridizes to every adapter copy in every nanoball. Once the primer is in place, you've created a free 3-prime hydroxyl right at the boundary between the adapter and the insert — the starting line for the sequencing reaction.

Now you flow in a mix of four fluorescent reversible-terminator nucleotides — A, C, G, and T — each labeled with a different colored dye, each carrying a chemical blocking group on the 3-prime hydroxyl. You add a DNA polymerase. The polymerase, working from the anchor primer, incorporates exactly one nucleotide at each starting position. The 3-prime blocker prevents extension past the first base. You wash away the unincorporated nucleotides, illuminate the flow cell with laser light, and take a series of images. Each nanoball's spot shows one of four colors, corresponding to the base just added. Then you chemically cleave off both the dye and the 3-prime blocker, restoring an unblocked hydroxyl. The polymerase is now ready for the next cycle. **Incorporate, image, cleave, repeat.** If that sounds exactly like the Illumina master rhythm — well, that's because it is.

\[Pause.\]

The differences are in the details, and the details matter.

First, **what gets imaged.** On an Illumina flow cell, the imaged unit is a cluster of about a thousand clonal molecules, all extending in lockstep. On a DNB flow cell, the imaged unit is a single nanoball containing about three hundred head-to-tail copies, all extending in lockstep from three hundred anchor primers, one per copy. Both produce a bright dot in the camera image. The DNB dot is dimmer, all else equal, because it has fewer fluorophores — three hundred versus a thousand — but the spots are more compact and the spatial separation between neighbors is better controlled by the patterned array, so the imaging system can pick out individual signals reliably even at high density.

Second, **the polymerase and the nucleotides.** MGI uses their own proprietary engineered polymerase and their own proprietary set of reversible-terminator nucleotides, with chemistry that is broadly analogous to Illumina's but distinct in detail — different blocking group, different linker chemistry, different cleavage reagents. The intellectual property here is genuinely separate from Illumina's, which has been important in the patent litigation we'll cover in Segment 16. The net behavior, however, is similar: each cycle adds exactly one base, the dye is read out, the dye and the blocker are cleaved off, the next cycle begins.

Third, **the synchronization across copies within a ball.** On an Illumina cluster, the thousand clonal molecules are all independent — some of them might fall a base behind during a cycle, due to incomplete cleavage or incorporation, and over many cycles this "phasing" error builds up, making the cluster signal smear across multiple bases. On a DNB, the three hundred copies are physically linked into one continuous polymer, but they extend independently from their anchor primers, so phasing behaves similarly to Illumina — bounded by the same per-cycle error rates. In practice, both platforms manage phasing to comparable levels, and both top out at read lengths in the one-hundred-fifty-to-three-hundred-base range before quality starts degrading seriously.

\[Pause.\]

What cPAS gives you, compared to cPAL, is two big things. **Contiguous reads**, because the polymerase walks forward one base at a time, base by base, without the gaps that cPAL's anchor-positioning scheme imposed. And **longer read lengths**, because polymerase-driven extension can run for one hundred and fifty cycles, or two hundred, or three hundred, in a way that ligation-based reading cannot. Modern MGI instruments routinely produce paired-end one-hundred-fifty-base reads — the workhorse format of human genome sequencing — and several models can do paired-end three-hundred-base reads for applications like 16S rRNA microbiome work where longer is helpful.

What cPAS gives you compared to Illumina is, conceptually, the same chemistry on a different substrate. The reaction is sequencing by synthesis with reversible terminators. The substrate is a DNA nanoball on a patterned flow cell, not a bridge-amplified cluster on an Illumina flow cell. The downstream consequences of that substrate choice — no PCR bias, no index hopping, simpler loading, slightly different error profiles — are what give the platform its distinct character. The core chemistry of base reading is, broadly, comparable.

So when you read a paper that says "sequencing was performed on a DNBSEQ-G400" or "DNBSEQ-T7," what is happening inside that instrument is: library prep with circularization, rolling circle amplification to make nanoballs, loading onto a patterned silicon flow cell, anchor primer binding, then one hundred and fifty cycles of cPAS — incorporate a fluorescent reversible terminator, image, cleave the dye and the blocker, repeat — followed by a paired-end turnaround step where the second read is initiated from the other adapter, and another one hundred and fifty cycles. Total run time on the modern high-throughput instruments is around twenty-four to thirty hours. Output is FASTQ files, one read pair per nanoball, ready for downstream analysis. Same general flow as Illumina, different chemistry under the hood.

---

## SEGMENT 8 — The BGI acquisition of Complete Genomics, 2013: what happened next

Let's go back to the corporate story for a moment, because the period between 2013, when BGI acquired Complete Genomics, and 2016, when MGI Tech spun out as the equipment arm, is where the platform got reborn. The acquisition itself was negotiated in late 2012, closed in March 2013, and produced a wave of immediate consequences both technical and political.

On the technical side, BGI now owned a sequencing platform of its own for the first time. For the previous decade, BGI had been the world's largest user of sequencing — running enormous fleets of Illumina HiSeqs out of Shenzhen, Hong Kong, and a growing list of global offices — but they were entirely dependent on Illumina hardware, Illumina reagents, and Illumina pricing. Owning Complete Genomics gave them, in principle, the ability to manufacture their own sequencers, control their own consumables supply chain, and capture margins that had previously gone to a competitor.

In practice, the integration took years. Complete Genomics' instruments in 2013 were old, expensive to build, and used the cPAL chemistry that, as we've seen, was already becoming uncompetitive. BGI invested heavily — in engineering, in chemistry development, in manufacturing infrastructure — to turn the platform into something that could be sold globally. The chemistry switch from cPAL to cPAS was completed in roughly the 2015 to 2017 window. The mechanical instrument design was largely rebuilt around Chinese manufacturing supply chains, with cost-optimization at every stage. New instrument families were designed from scratch, targeting different throughput tiers, with the BGISEQ branding initially — BGISEQ-500, BGISEQ-50 — later renamed to DNBSEQ once MGI became the brand.

\[Pause.\]

On the political side, the acquisition raised eyebrows from the start. The CFIUS approval — the Committee on Foreign Investment in the United States, which reviews foreign acquisitions of American companies with strategic implications — was granted in early 2013, but the decision was controversial. Illumina, which had been the competing bidder, was reportedly unhappy. The American sequencing industry, accustomed to seeing major technology platforms remain in domestic hands, viewed the transfer of Complete Genomics' patent portfolio to a Chinese company with concern. Genomic data, after all, is sensitive — sequencing platforms produce data with implications for medical research, drug development, and increasingly, biodefense. The argument that won the day in 2013 was essentially that Complete Genomics was a small, struggling, service-business sequencing company with no military applications, and that letting it die without a buyer would do more harm to the field than allowing it to be acquired by BGI. By the late 2010s, that argument would have been a much harder sell.

What BGI got from the deal was not just the company. They got Radoje Drmanac, who stayed on as chief scientific officer of Complete Genomics after the acquisition and remains a senior technical figure in the MGI universe today. They got the patent portfolio — hundreds of patents covering DNB construction, patterned flow cells, rolling circle chemistry, and various aspects of cPAL and cPAS. They got the Mountain View facility, which remains MGI's largest US presence. And they got access, at least nominally, to the American customer base that Complete Genomics had been building, which provided an early commercial foothold outside China.

\[Pause.\]

In the immediate years after the acquisition — 2013, 2014, 2015 — BGI's strategy was to use the Complete Genomics technology to support BGI's own internal sequencing needs. Tens of thousands of human genomes were sequenced on the new BGISEQ instruments inside BGI's Shenzhen facilities, for population studies, clinical projects, and research collaborations. The platform was, in effect, beta-tested at industrial scale inside BGI before it was widely sold externally. By around 2016, the chemistry had matured to the point where BGI judged it ready for commercial sale, and the question was: how should the sequencing equipment business be organized, separately from BGI's massive sequencing-service business?

The answer, in 2016, was to spin out the equipment side into a separate subsidiary, called **MGI Tech**, with its own management, its own go-to-market strategy, and eventually its own public listing. That's the story of the next segment.

What I want you to take from this one is that the period from 2013 to 2016 was when the modern DNBSEQ platform actually got built. The Complete Genomics legacy provided the bones — DNB chemistry, patterned arrays, the core patent portfolio. The BGI investment provided the muscle — Chinese-scale manufacturing, the chemistry transition from cPAL to cPAS, the engineering effort to make the instruments cost-competitive, and the patient capital required for a multi-year platform rebuild. Neither half could have produced the modern platform alone. The combination is what we now call DNBSEQ.

---

## SEGMENT 9 — MGI Tech spin-out, 2016: the equipment arm becomes its own company

In 2016, BGI Group restructured. The sequencing-service business — running tens of thousands of genomes a year for paying customers — stayed as BGI proper. The sequencing-equipment business — building, selling, and supporting the DNBSEQ instruments — was carved out into a new subsidiary called **MGI Tech**, headquartered in Shenzhen, with US operations continuing to run out of the legacy Complete Genomics facility in San Jose, California. The name "MGI" is generally read as standing for something like "MGI Genomics Instruments" or simply as a brand mark; the company tends not to spell it out.

The strategic logic behind the spin-out was that selling instruments and selling sequencing services are very different businesses, with different sales cycles, different customer relationships, and different competitive dynamics. As long as the equipment business sat inside BGI, BGI's competitors — academic labs, biotech companies, hospital genomics programs — were reluctant to buy DNBSEQ machines from what was effectively a competing service provider. Spinning the equipment business out under a separate brand was a step toward making MGI a credible vendor to customers who were also running sequencing operations of their own. Same chemistry, same instruments, but now branded and sold by a stand-alone entity with its own commercial team.

\[Pause.\]

MGI's commercial expansion through the late 2010s and early 2020s was steady but cautious. The company first focused on building its position inside China, where regulatory approval was straightforward and where the strategic alignment with BGI provided enormous internal demand. Chinese hospitals, research institutions, and BGI-aligned service providers became the early adopter base. Then, gradually, MGI expanded outward — into Southeast Asia, the Middle East, Latin America, and Eastern Europe — markets where price sensitivity was higher and where the dominance of Illumina was less entrenched. By the early 2020s, MGI had a real installed base in the global south, and by mid-2020s it was beginning to break into clinical and research customers in Western Europe.

The United States was harder. Illumina is an American company. The American clinical and research markets were used to Illumina workflows, Illumina pricing, and Illumina support. There were also active patent disputes — Illumina sued MGI in the US in 2019, alleging infringement of multiple sequencing patents, and MGI countersued — and during the years those disputes were active, MGI was effectively blocked from selling certain instruments into the US market under preliminary injunctions. We'll come back to the litigation in Segment 16. As of the mid-2020s, the major US patent disputes have been resolved or settled, and MGI is again selling instruments into the American market, though with a much smaller commercial footprint than Illumina.

The financial story is worth a sentence. In May 2020, MGI raised approximately one billion dollars in a Series B funding round — at the time, one of the largest private financings in the genomics space ever. In 2022, MGI went public on the Shanghai Stock Exchange's STAR Market, a board oriented toward tech and biotech companies. The IPO was successful but the stock has been volatile — particularly during 2024, when US legislative proposals to restrict the transfer of American health data to China caused MGI's market capitalization to drop sharply. As of the time this lecture was written, MGI's market position is solid in China and parts of the emerging world, growing in Europe, and uncertain in the United States.

\[Pause.\]

The relationship between MGI and BGI today is somewhat complex. They are legally separate companies, with separate public listings, but they share founders, shared origins, overlapping leadership, and obvious strategic alignment. MGI remains BGI's primary instrument supplier — most of the sequencing capacity inside BGI's service business runs on MGI machines — and BGI remains, by some measures, MGI's largest single customer. In the United States, the two companies have sometimes been treated as effectively one entity for regulatory and policy purposes. In the genomics community, the distinction matters mostly for procurement: if you're buying an instrument, you buy from MGI; if you're shipping samples to a service provider, you ship to BGI. The chemistry inside the machine is the same either way.

So that brings us to the present. MGI Tech, the company, has been around since 2016 — though its technological lineage runs back to Complete Genomics in 2005 — and it now sells a full lineup of DNBSEQ instruments. We'll meet that lineup in detail after the break. For now, the high-level picture: a credible non-Illumina short-read platform, Chinese-owned, with deep American technical roots, growing globally, contested in the US, and producing data that is, at the bioinformatics layer, broadly interchangeable with Illumina output.

That's a lot. Let me give you a break. Let's take ten minutes. When we come back, we'll go through the instrument family — the actual machines you'd be choosing between if you were setting up a sequencing lab today — and then spend the second hour on the technical and economic comparisons with Illumina that determine when MGI is the right choice.

\[BREAK\]

---

## SEGMENT 10 — The DNBSEQ instrument family: G50, G99, G400, T7, T10x4, T20x2

Welcome back. Let's start the second hour with the instrument lineup, because if you're going to think about MGI as a sequencing platform, you need a feel for the actual range of machines on offer. Just as Illumina has a tiered lineup — MiSeq for small runs, NextSeq for mid-throughput, NovaSeq X for high-end — MGI has its own family, structured around two letter codes: **G**, for the gene/general-purpose instruments, and **T**, for the high-throughput "T-series" workhorses. Let me walk through them.

**DNBSEQ-G50.** The smallest and most affordable instrument in the current lineup. Roughly desktop-sized, suitable for a single technician in a small lab. Daily output in the range of tens of gigabases. The G50 is positioned as a benchtop instrument for targeted panels, microbial genomes, small RNA-seq experiments, and clinical workflows where you have a defined panel and don't need a huge volume of data per run. Think of it as the rough functional analog of Illumina's MiSeq — a small machine for small jobs, with the same per-base economics that don't really beat Illumina at that scale, but with the advantage of being available in markets where Illumina hasn't penetrated as deeply.

**DNBSEQ-G99.** A faster, smaller-volume instrument optimized for rapid clinical turnaround. Run times on the order of twelve to twenty-four hours, with output suited to targeted clinical panels or small genome workflows where speed matters more than absolute throughput. Positioned for hospital-based clinical labs.

**DNBSEQ-G400.** The workhorse mid-throughput instrument. Run times in the twenty-four to seventy-two hour range, depending on read length and flow cell choice. Daily output in the hundreds of gigabases, capable of producing tens of human-genome equivalents per run. The G400 is the rough functional analog of Illumina's NextSeq series — the instrument that mid-sized research labs and clinical genomics programs are most likely to actually buy, because it sits at the sweet spot of throughput, cost, and turnaround time for typical projects. Most published papers using MGI sequencing in the 2020s have been generated on G400 instruments.

\[Pause.\]

Now the T-series, which is where MGI has really pushed the throughput envelope.

**DNBSEQ-T7.** Introduced in 2019 and refreshed periodically since. This is MGI's first true high-throughput workhorse. The T7 has four independent flow cell slots, allowing you to run up to four different libraries simultaneously, and total daily output is in the range of six terabases per day at maximum capacity. That works out to something like sixty human genomes per day at thirty-fold coverage — comparable to a NovaSeq-class instrument in raw throughput, with a per-genome reagent cost that MGI has historically priced aggressively. The T7 was the instrument that first made MGI a serious global option for large-scale genomics projects.

**DNBSEQ-T10×4.** A higher-density evolution of the T-series, with ten flow cells running in parallel rather than four. Daily output climbs into the ten-to-fifteen-terabase range. This is the instrument MGI markets to national-scale sequencing programs — biobanks, population genomics initiatives, the kind of customer that wants to sequence tens of thousands of genomes per year and needs the unit economics of an industrial sequencing factory.

**DNBSEQ-T20×2.** Introduced in 2023, the T20×2 is MGI's flagship at the time of this lecture, and it is a genuinely impressive machine. With two T20 flow cells running in parallel, the instrument can produce up to fifty thousand human genomes per year at a sequencing cost — quoted by MGI in their marketing materials — of around one hundred dollars per genome. That is, if the numbers hold up under independent verification, the lowest reported per-genome cost on a commercial sequencer to date. It is positioned head-to-head against Illumina's NovaSeq X, which Illumina launched in 2022 with a similar throughput tier and a quoted two-hundred-dollar-per-genome cost. The throughput race between the T20×2 and the NovaSeq X is now the highest-stakes commercial competition in the sequencing industry.

\[Pause.\]

And then there are the newer 2025 instruments — the **DNBSEQ-T1+**, a mid-throughput refresh aimed at clinical applications with 24-hour turnaround, and the **DNBSEQ-T7+**, an updated T7 with claims of sequencing one human genome every ten minutes. Both of these are recent enough that the technical literature on them is still thin, but they show the direction of MGI's investment: continuing to push throughput and turnaround speed across the lineup.

Let me give you a mental model for choosing among these. **If you have a small lab with episodic sequencing needs**, you buy a G50 or G99 — small, cheap to own, modest output. **If you have a mid-sized research lab or a clinical genomics service**, you buy a G400 — most labs in this position buy at this tier. **If you are running a large-scale sequencing program — a biobank, a national initiative, a contract research organization with industrial throughput needs** — you buy a T7, or step up to the T10×4 or T20×2 as your volume justifies. The pattern is exactly the same as the Illumina lineup: small, mid, large, with cost-per-base falling sharply as you move up the tiers, and capital cost of the instrument rising correspondingly.

The MGI lineup is, in 2024-2025, structurally complete in the sense that there is an MGI instrument at essentially every throughput tier where Illumina sells a corresponding machine. The choice between the two is no longer a choice about which scale you need — it's a choice about price, vendor relationships, geography, and regulatory environment. That choice is what the rest of the lecture is about.

---

## SEGMENT 11 — Comparison with Illumina SBS: chemistry, output, accuracy, cost

Let's do the direct comparison. You have a sample, a budget, and a research question. You're choosing between an Illumina NovaSeq X and an MGI DNBSEQ-T20×2 — the flagship tier on both sides. Or you're choosing between a NextSeq and a G400. The comparison is structurally similar at every tier, so let me lay out the major axes.

**Chemistry.** Both platforms use sequencing by synthesis with reversible-terminator nucleotides. Both incorporate one base per cycle, image, cleave, repeat. The polymerase enzymes, the dye chemistries, the blocker designs, and the cleavage reagents are different in detail — MGI's are independently engineered and protected by their own patent portfolio — but the master rhythm is the same. The substrate is where the platforms diverge sharply. Illumina: bridge-amplified clonal clusters on a patterned flow cell. MGI: rolling-circle-amplified DNA nanoballs on a patterned silicon array. We covered both in detail in earlier segments. The takeaway: same chemistry, different physical objects being sequenced.

**Output format.** Identical, at the bioinformatics layer. Both produce FASTQ files with paired-end reads, typical lengths in the one-hundred-to-one-hundred-fifty-base range (with options up to three-hundred-base reads on some instruments), Phred-style quality scores, standard adapter sequences that get trimmed by the same tools. The output of either platform plugs into the same downstream analysis pipelines: BWA or bowtie2 for alignment, GATK or DeepVariant for variant calling, STAR for RNA-seq, the whole standard NGS analysis ecosystem. If you handed an experienced bioinformatician a tube of FASTQ data without telling them what produced it, they could probably guess — there are subtle signatures — but the data would run through their pipelines without modification.

**Accuracy.** Both platforms produce reads with overall error rates below one percent, with the bulk of called bases in the Q30 range (meaning the called base has a one-in-a-thousand or better chance of being wrong). Independent benchmarking studies through the late 2010s and early 2020s have generally found that the two platforms produce comparable variant-call accuracy for whole-genome sequencing, with each platform having slightly different error profiles. MGI tends to have slightly more uniform coverage across regions with extreme GC content — a consequence of avoiding the bridge-amplification PCR step. Illumina tends to have very slightly better raw per-base quality at the extreme read ends. The differences are small enough that, for most applications, either platform is fine.

\[Pause.\]

**Cost per gigabase.** This is the axis where MGI has historically had an edge, and the edge has grown over the past few years. At the high-throughput tier, MGI quotes per-genome costs roughly thirty to fifty percent below Illumina's quoted costs, depending on the comparison. The reasons are several: lower instrument capital cost in many cases, Chinese manufacturing scale advantages, and aggressive pricing as a market-entry strategy. Illumina has cut its own prices in response, and the gap is narrowing as Illumina rolls out the NovaSeq X, but as of the mid-2020s MGI remains the lower-cost option at the highest-throughput tier. At the mid-throughput tier — G400 versus NextSeq, roughly — the cost gap is smaller but generally still favors MGI. At the small-instrument tier — G50 versus MiSeq — pricing is broadly similar.

It is worth noting that the published per-genome cost figures from any sequencing vendor are best treated as marketing claims rather than rigorous accounting. The real cost of producing data in a real lab includes reagents, instrument depreciation, technician time, library prep, sample QC, data storage, and analysis time, in proportions that vary enormously from lab to lab. The vendor numbers typically only count reagents and consumables on the instrument itself. Still, the directional finding — MGI is cheaper per gigabase at high throughput — holds up consistently across independent assessments.

**Capital cost of the instrument.** MGI instruments are generally priced below their Illumina equivalents, sometimes substantially. A DNBSEQ-G400 typically sells for less than a NextSeq of comparable throughput. The flagship T20×2 is priced below a NovaSeq X, though both are in the multi-million-dollar range. For a lab making a capital expenditure decision, the up-front cost difference can be a meaningful factor, especially for smaller institutions and emerging-market customers.

\[Pause.\]

**Reagent supply chain.** This is a quieter axis but it matters operationally. Illumina reagents come from Illumina's own supply chain — primarily American and European manufacturing, with global distribution. MGI reagents come primarily from Chinese manufacturing. For labs in China, the MGI supply chain is local, fast, and well-supported. For labs in the United States, the MGI supply chain has historically been slower and less robust than Illumina's, though this has improved through the 2020s. Lead times on reagent orders, customs clearance for international shipments, and local technical support all play into the operational comparison in ways that don't show up on a per-base cost sheet.

**Service and support.** Illumina has decades of installed-base experience in every major sequencing market, with deep field service organizations, established training programs, and a vast user community for troubleshooting. MGI is younger and smaller, with strong support in China and growing support in other major markets. For a lab choosing between the two, the maturity of the support ecosystem can be a real consideration, especially for clinical applications where instrument downtime has direct patient-care implications.

The summary of all this: at the data layer, the platforms are nearly interchangeable. At the cost layer, MGI is often meaningfully cheaper, especially at high throughput. At the supply chain and support layer, Illumina remains more mature in Western markets, though MGI is catching up. The choice between them is increasingly a business and geography choice, not a technology choice.

---

## SEGMENT 12 — PCR-free DNB libraries: what no on-flow-cell amplification buys you

I want to pause on one specific advantage of the DNB architecture that has not gotten enough attention in the popular framing of the platform, because it speaks to a particular set of use cases where MGI has an edge that Illumina, by virtue of its bridge-amplification chemistry, structurally can't match.

The advantage is this: **the cPAS workflow involves no exponential amplification on the flow cell.** The library is loaded as nanoballs, which were produced by rolling circle amplification in a tube — a process that is linear, not exponential, in nature. The polymerase walks around the circle producing one copy per lap. Three hundred laps gives you three hundred copies, in a strictly proportional, low-bias way. There is no doubling-per-cycle PCR happening on the flow cell. Compare that with Illumina, where each of the thousand clonal molecules in a cluster has come from roughly thirty-five rounds of bridge amplification, each round doubling the population. After thirty-five doublings, small differences in amplification efficiency between fragments become large differences in cluster density — a kind of compounded bias that is structural to exponential PCR.

\[Pause.\]

For most applications this doesn't matter very much. Whole-genome sequencing of human samples produces enough redundancy that small biases in the per-fragment representation wash out in the averaged coverage. But there are specific applications where the absence of exponential amplification matters quite a lot.

**Application one: low-input samples.** If you start with very little DNA — a few cells, a circulating tumor DNA sample with picogram-level input, a forensic trace, an ancient DNA fragment — the difference between linear and exponential amplification can be the difference between recovering a usable library and not. Exponential amplification compounds early errors, so a polymerase mistake in cycle one becomes present in fifty percent of the final population. Linear amplification doesn't compound: a Phi 29 error on lap one is one error out of three hundred copies, easily outvoted in the consensus. For low-input applications, the linear-amplification character of DNB makes the platform meaningfully more accurate.

**Application two: PCR-free workflows.** For some applications — particularly germline variant calling in clinical genomics — labs prefer to avoid PCR entirely during library prep, because PCR introduces small but real biases that can affect rare-variant calling. Illumina supports PCR-free library prep for whole-genome sequencing, but the subsequent bridge amplification on the flow cell still happens. With MGI, you can do PCR-free library prep _and_ have no exponential amplification on the flow cell, which gives the cleanest possible representation of the input molecules. For high-fidelity clinical applications, this is a real advantage.

**Application three: extreme-GC samples.** Fragments with very high or very low GC content amplify poorly during PCR — they form secondary structures, denature inefficiently, and underrepresent themselves in the final population. Bridge amplification has the same bias, compounded over thirty-five cycles. Rolling circle amplification, because it is linear and uses a polymerase that handles strand displacement aggressively, is less affected by GC bias. The practical consequence is that DNB-based whole-genome sequencing tends to produce more uniform coverage of high-GC regions — promoter regions, CpG islands, certain microbial genomes — than Illumina sequencing. The differences are not huge, but they are measurable, and for applications where extreme-GC coverage matters, they tilt the balance toward MGI.

\[Pause.\]

There is a fourth advantage that I want to flag here even though we'll devote the entire next segment to it: **no index hopping.** Index hopping is a failure mode specific to flow-cell amplification chemistries, where adapter sequences from one sample get mistakenly attached to fragments from another sample during the on-flow-cell amplification step, contaminating the demultiplexed output. Because DNBSEQ doesn't do amplification on the flow cell — the nanoballs were already built in a tube, with their adapters baked in, before they were loaded — there is no mechanism for index hopping to occur on a DNB instrument. This is a clean, structural advantage rooted in the platform's architecture, and it matters enough that we'll spend a whole segment on it.

Putting it all together: the absence of on-flow-cell exponential amplification is not just a curiosity of the chemistry — it is a real edge for a defined set of applications. Low-input samples, PCR-free workflows, extreme-GC regions, and clinical applications where index hopping is a concern. None of these are the typical bread-and-butter sequencing experiment, but they are increasingly important corners of the market, especially in clinical genomics. The DNB architecture, almost as a side effect of how it was originally designed, gives MGI a structural advantage in those corners that Illumina cannot easily match without redesigning its core chemistry.

---

## SEGMENT 13 — Why DNBSEQ has no index hopping: the structural reason

Let me spend a full segment on index hopping, because it is one of the cleanest examples of how a chemistry choice ripples out into a clinical and operational difference between platforms — and because it is one of the few places where MGI has a genuinely structural advantage over Illumina that Illumina cannot fix with engineering alone.

Recall, from the Illumina lecture, what an index is. When you multiplex many samples on one flow cell — say, ninety-six samples on a single NovaSeq run — each sample gets a unique short index sequence ligated into its adapters during library prep. Sample one gets index AAGCTT, sample two gets index TTCAGG, and so on. After sequencing, the analysis software reads the index portion of each read and uses it to demultiplex — to sort the reads back into per-sample bins. The whole multiplexing scheme depends absolutely on the index being faithful: a fragment that started life in sample one had better still be tagged with sample one's index by the time it gets sequenced.

\[Pause.\]

Here is the failure mode. During bridge amplification on an Illumina flow cell, the fragments are flowing across a surface densely covered with anchor oligos. Most of the time, each fragment binds, bridges, amplifies, and stays in place. But sometimes — at rates that vary from less than half a percent to several percent depending on instrument generation, sample preparation, and reagent batch — an adapter from one sample can detach from its fragment and re-anneal to a fragment from a different sample. The resulting hybrid fragment, with the original insert from sample two but the index from sample one, then bridge-amplifies normally, gets sequenced normally, and gets demultiplexed into sample one's bin. The result is a contaminating read — a read with sample two's biological content but tagged with sample one's identity.

This is **index hopping**. It was first widely characterized in 2017, when researchers running large pooled experiments on Illumina HiSeq 4000 and NovaSeq instruments noticed that they were getting unexpectedly high rates of "wrong sample" reads in their data. Investigation revealed that the bridge amplification step itself was the culprit: free adapters in the loaded library, plus the high density of fragments on the flow cell, plus the multiple cycles of denaturation and re-annealing during bridge formation, created the conditions for indexes to swap between fragments.

For research applications with hundreds of samples sequenced in a pool, an index hopping rate of one to two percent is annoying but tolerable. For clinical applications — especially cancer sequencing, where you might be looking for a variant present in a small fraction of reads — a one percent contamination rate from index hopping can be the difference between calling a variant correctly and producing a false positive. Illumina has worked hard on mitigations: dual indexing (so the chance of both indexes happening to hop coordinately is much lower), unique dual indexing (where each sample has a totally unique pair rather than from a fixed plate of combinations), and bead-based clean-up protocols that remove free adapters before loading. These mitigations reduce the problem but do not eliminate it, because the underlying mechanism — adapter swapping during flow-cell amplification — is fundamentally part of how bridge amplification works.

\[Pause.\]

Now consider what happens on a DNBSEQ instrument. The library is loaded as fully formed nanoballs. Each nanoball was constructed in a tube, by rolling circle amplification of a single circular template, before it ever touched the flow cell. The adapter sequences, including the indexes, are part of the circular template — they were ligated in during library prep, then locked in place by the circularization step, then physically built into the nanoball as part of the long single-stranded concatemer. By the time the nanoball is sitting on the patterned flow cell, ready to be sequenced, the index sequence is baked into three hundred head-to-tail copies on a single covalent molecule. There is no opportunity, on the flow cell, for an adapter from one nanoball to swap to a different nanoball — because no amplification is happening on the flow cell at all. The chemistry that would enable index hopping simply isn't there.

This is what I mean when I say it is a **structural** advantage. It is not that MGI has engineered a workaround. It is that the architecture of the platform — the choice to do amplification in a tube as RCA rather than on the flow cell as bridge amplification — makes the failure mode geometrically impossible. There is no adapter pool floating around on the flow cell. There is no re-annealing during cycles. There is just one ball, one starting molecule, one index, sequenced once.

The practical consequence: published index hopping rates on MGI instruments are essentially at the limit of detection — far below the rates measured on Illumina flow cells, with no mitigations needed. For clinical multiplexing — pooling many patient samples on one run for cost reasons, then demultiplexing back out — MGI offers a cleaner workflow. This matters most for cancer sequencing, somatic variant calling, low-allele-fraction detection, and any application where small fractions of contaminating reads matter to the conclusion.

\[Pause.\]

I want to flag a subtle point: index hopping is not the only kind of cross-sample contamination in sequencing. You can also get contamination during library prep itself — droplets crossing between wells during pipetting, evaporation and condensation in plate seals, sample mix-ups at the bench. These pre-flow-cell sources of contamination affect both platforms equally, and they are the dominant cross-sample contamination source in most real labs. The DNB structural advantage applies only to the flow-cell-amplification source of contamination. So when MGI marketing materials say "no index hopping," they mean "no flow-cell-amplification-induced index hopping," which is true, but it doesn't mean your samples cannot be contaminated by other means.

Still, the elimination of one entire class of contamination — for free, as a consequence of the chemistry choice — is a real and clean advantage. It is one of the reasons MGI has been adopted faster in certain clinical applications than its overall market share would suggest, particularly in oncology workflows where low-fraction variants are biologically important.

---

## SEGMENT 14 — Read length and accuracy: where MGI matches or beats Illumina

Let me give you a more detailed look at the read quality story, because this is where most of the head-to-head benchmarking happens and where the answers are sometimes surprising. The general framing — both platforms produce comparable data — is true at a high level, but the details have texture, and the texture sometimes favors MGI.

**Read length.** Both platforms cluster around the one-hundred-fifty-base paired-end format as the workhorse standard for human genome sequencing. Both can do shorter reads — fifty or one hundred — for applications like RNA-seq counting where read length is less important. Both can do longer reads — two hundred fifty or three hundred — on certain instruments for applications like 16S microbiome work. The maximum read lengths available on each platform are broadly comparable. Neither platform competes with the long-read platforms — Oxford Nanopore and PacBio — which produce reads in the tens of thousands of bases. The DNBSEQ-versus-Illumina comparison is a comparison between two short-read approaches.

**Per-base accuracy.** Both platforms report most bases at Q30 or higher quality — meaning the called base has a one-in-a-thousand or better chance of being wrong. Independent benchmarking studies — work by groups at the Garvan Institute, the Broad, the Wellcome Sanger Institute, and others — have found that the per-base error rates on MGI instruments are comparable to Illumina, with subtle differences in error mode. Specifically, MGI tends to produce slightly fewer GC bias errors and slightly more substitution errors at certain positions. Illumina tends to produce slightly more errors at the very ends of reads and at homopolymer runs. The net rate is similar.

\[Pause.\]

**Variant call concordance.** When you sequence the same sample on both platforms and run the same variant-calling pipeline, the concordance is high. Single-nucleotide variant calls — SNVs — match between the two platforms at rates typically above ninety-nine percent. Small insertion and deletion calls — indels — match at slightly lower rates, typically ninety-five to ninety-nine percent, with the disagreement reflecting genuine error-mode differences between the two platforms. For most clinical and research applications, the level of concordance is high enough that data from either platform is treated as equivalent.

**Coverage uniformity.** This is where MGI's advantage shows up most clearly. Across the genome, the depth of coverage at any position should ideally be uniform — every base sequenced at, say, thirty times on average, with the actual depth at each base close to thirty rather than veering between zero and one hundred. Coverage uniformity is degraded by GC bias, by PCR bias, by mapping difficulties in repetitive regions, and by various other technical factors. In direct comparisons, DNBSEQ tends to produce slightly more uniform coverage than Illumina, particularly in extreme-GC regions like promoters and certain microbial genomes. The difference is small — a few percent improvement in uniformity metrics — but it is consistent across multiple studies and it tracks directly to the absence of exponential amplification we discussed in Segment 12.

**Insert size distribution.** Both platforms can produce libraries with controlled insert size distributions. Both can handle inserts from short (around two hundred base pairs) to medium (around five hundred base pairs). Neither does well at very long inserts — for that, you want a long-read platform.

\[Pause.\]

The honest summary is that **MGI matches Illumina on most accuracy metrics and slightly beats it on a few, particularly coverage uniformity and the absence of index hopping**. There are no metrics on which MGI is dramatically worse than Illumina at the same throughput tier. Read length is comparable. Quality scores are comparable. Variant call accuracy is comparable. The platforms are, at the data layer, genuinely interchangeable for the vast majority of applications.

This has been one of the most important developments in genomics over the past five years — the maturation of MGI to the point where the technical comparison is essentially a wash. Five years ago, you could plausibly argue that Illumina was technically superior. Today, that argument is much harder to make. The choice between the two platforms is now overwhelmingly about cost, supply chain, support, and geography — not about which one produces better data.

That is a remarkable statement to be able to make, and it is the central reason MGI matters as a competitor. Not because MGI is somehow technically dominant, but because they have caught up to the point where, on technical merits, the two platforms are effectively tied. In a market where one player has been dominant for fifteen years, "tied on technical merits" is a transformative development. It opens the door to all the non-technical considerations — price, sovereignty, supply chain — that drive purchasing decisions in the real world.

---

## SEGMENT 15 — MGI in clinical genomics: adoption in China, regulatory approvals

Let me talk about clinical adoption specifically, because this is where the geography of the MGI versus Illumina competition is sharpest and where the implications for patients are most concrete.

In China, MGI is the dominant clinical sequencing platform. Chinese hospitals running clinical genomics programs — prenatal testing, cancer panels, hereditary disease panels, infectious disease workflows — overwhelmingly use MGI instruments, both for technical and policy reasons. The technical reason is that the instruments are good, the local support is excellent, and the consumables supply chain is reliable. The policy reason is that the Chinese government has, since around 2015, actively encouraged the use of domestic sequencing platforms in clinical settings, both for data sovereignty reasons (Chinese patient genomic data should be processed on Chinese-owned instruments) and for industrial-policy reasons (cultivating a domestic alternative to Illumina is a strategic priority).

The result is that MGI has accumulated something like a decade of large-scale clinical use experience in China, with millions of patient samples sequenced on DNBSEQ platforms in clinical contexts. The regulatory pathway in China — through the National Medical Products Administration, NMPA — has approved a wide range of MGI-based clinical applications: noninvasive prenatal testing (NIPT) panels for fetal aneuploidy detection, hereditary cancer panels, somatic tumor panels for treatment selection, and various infectious disease workflows. By volume, MGI processes more clinical sequencing reads in China each year than Illumina does worldwide.

\[Pause.\]

Outside China, the clinical adoption story is more cautious. In Europe, MGI received CE-IVD marking — the European clinical regulatory designation — for several of its instruments and reagent kits in the late 2010s and early 2020s, which has enabled adoption in European clinical labs. Major European hospital systems have begun integrating MGI into their clinical workflows, particularly for cost-sensitive applications like population-scale prenatal screening. The pace is slower than in China but the trajectory is steady.

In the United States, the regulatory and adoption picture is much more mixed. The FDA pathway for sequencing-based clinical assays is more demanding than the European pathway, and MGI's footprint in US clinical labs is correspondingly smaller. There have been FDA clearances of specific MGI-based assays — including, notably, COVID-19 sequencing applications during the pandemic — but the broader clinical adoption has been slow, in part because Illumina is so deeply entrenched in US clinical infrastructure, and in part because of the geopolitical sensitivities around Chinese-owned platforms processing American patient data.

\[Pause.\]

The data-sovereignty issue is worth dwelling on for a moment, because it cuts both ways and it is shaping the future of the platform competition.

In China, MGI's Chinese ownership is an advantage — Chinese hospitals do not want patient genomic data processed on American-owned instruments that, in some interpretations, could result in data flowing to American servers or being subject to American legal jurisdiction. In the United States and parts of Europe, the same Chinese ownership is a liability — American hospitals and regulators are increasingly cautious about patient genomic data being processed on Chinese-owned instruments that, in similar interpretations, could result in data flowing to Chinese servers or being subject to Chinese legal jurisdiction. The 2024 US BIOSECURE Act — a piece of legislation that would have restricted federal funding for genomic services connected to specific Chinese companies including BGI — was a direct expression of this concern. The act did not pass in its original form but it caused significant market reaction and signaled the direction of US policy thinking.

The honest assessment is that **clinical genomics is becoming geopolitically segregated**. MGI dominates clinical sequencing inside China and is growing in markets where data sovereignty concerns favor a non-American option. Illumina dominates clinical sequencing in the United States and most of the West. Some markets — Southeast Asia, the Middle East, parts of Europe and Latin America — are genuinely competitive. The result is a sequencing-market landscape that increasingly looks like the telecommunications-equipment landscape, where Huawei dominates in certain regions and Western vendors dominate elsewhere, with the boundaries drawn by geopolitics rather than technology.

For a clinical lab choosing between the platforms today, the considerations are: what regulatory approvals do you need (this strongly favors Illumina in the US, MGI in China, mixed in Europe)? what is your cost sensitivity (this favors MGI almost everywhere)? what is your institutional risk tolerance around Chinese-owned platforms (varies widely by institution)? The technical comparison, which used to be the dominant factor, is now often the least important factor in the clinical adoption decision.

---

## SEGMENT 16 — The patent litigation history: Illumina vs Complete Genomics vs BGI

Let me give you a quick tour of the patent litigation, because it is genuinely important for understanding both the past and the future of the MGI platform, and because it is one of the more dramatic legal stories in the history of biotechnology.

The basic structure of the disputes is that **Illumina holds a large portfolio of patents on sequencing-by-synthesis chemistry**, particularly on the reversible-terminator nucleotide designs that are central to both platforms' chemistries. MGI, as the inheritor of Complete Genomics' technology, holds a smaller portfolio focused on DNB construction, patterned flow cells, and ligation-based chemistries. The two portfolios overlap in the area of reversible-terminator chemistry, where Illumina's foundational patents arguably cover some of what MGI's cPAS does — or at least, Illumina has argued so, and MGI has disputed.

The litigation began in earnest around 2019, when Illumina sued MGI in multiple jurisdictions — the United States, Germany, Denmark, and others — alleging that MGI's reversible-terminator chemistry infringed Illumina's patents. MGI countersued, both defending its own chemistry as non-infringing and challenging the validity of certain Illumina patents.

\[Pause.\]

The outcomes have been mixed and have varied by jurisdiction. In Germany, Illumina won an injunction in 2020 that temporarily blocked MGI from selling certain instruments in the European market. In Denmark, similar injunctions were issued and then partially lifted. In the United States, the litigation went through multiple phases, with both sides winning and losing on different claims; by around 2022, the parties reached a settlement that resolved most of the active US disputes, allowing MGI to sell its instruments in the United States in exchange for cross-licensing arrangements and some financial terms that were not publicly disclosed.

The net effect of the litigation cycle was several years of legal cost, market disruption, and uncertainty for both companies, with the resolution roughly being that MGI is now free to sell its instruments globally subject to various licensing arrangements. The chemistry has continued to evolve on both sides, partly driven by efforts to design around patent claims. New nucleotide designs, new polymerase variants, new cleavage chemistries — some of these innovations have been motivated by patent strategy as much as by performance improvement.

\[Pause.\]

A subplot of the patent story is the relationship between Illumina and **Pacific Biosciences** — PacBio, the long-read sequencing company — which Illumina attempted to acquire in 2018, then was forced to abandon the acquisition under regulatory pressure in 2020. The reasoning of the regulators was that the merger would consolidate too much of the sequencing market under one vendor, which would harm competition. The very existence of the MGI counterargument — that MGI is a credible short-read alternative — was a factor in some regulatory analyses. So the existence of MGI as a competitor has, in a real sense, shaped the structure of the entire sequencing industry beyond just the head-to-head competition.

There has also been litigation in the other direction. MGI has sued Illumina, alleging Illumina's products infringe on patents inherited from Complete Genomics. Some of these counterclaims have produced settlements and licensing arrangements. The two companies are now in a complex web of cross-licensing relationships that, on the whole, allow both to continue developing and selling sequencing products without infringing each other's most fundamental claims.

The takeaway for our purposes: the patent fight is largely settled, MGI is selling globally, the chemistry on both sides continues to evolve, and the competitive battleground is shifting from intellectual property to market execution. That is a healthier state for the field than years of injunction-driven instability, and it has helped to enable the rapid expansion of MGI's commercial presence in the 2020s.

---

## SEGMENT 17 — Where MGI is winning: high-throughput at low cost, emerging markets

Let me consolidate where MGI has actually won market share over the past few years, because the picture is more nuanced than "Chinese company copying Illumina."

**Win one: high-throughput sequencing at the very top of the throughput pyramid.** The DNBSEQ-T7 and especially the T20×2 have, in the years since their introduction, captured significant share of the largest-scale sequencing customers — biobanks, national genomics initiatives, contract research organizations doing population-scale work. These customers buy sequencing by the terabase. Their unit economics are dominated by reagent cost per gigabase. MGI's aggressive pricing at this throughput tier has been compelling enough that even some traditional Illumina customers have shifted some or all of their high-volume sequencing to MGI. The UK Biobank, for instance, awarded a major contract to a service provider running MGI instruments in the early 2020s. Similar shifts have happened in other national-scale programs.

**Win two: clinical sequencing inside China and aligned markets.** As I covered in Segment 15, MGI dominates Chinese clinical sequencing, and that dominance is expanding into markets where Chinese soft power and regulatory alignment favor a non-American option — parts of Southeast Asia, the Middle East, Latin America. In raw volume, this is now the largest single chunk of MGI's commercial footprint.

\[Pause.\]

**Win three: cost-sensitive research applications.** Academic labs, particularly in countries where research budgets are tight and where the prestige of using a specific instrument matters less than the volume of data you can produce per dollar, have adopted MGI rapidly. A graduate student in Brazil or Vietnam or South Africa, given a choice between paying twice as much per gigabase to use an Illumina instrument or running on an MGI machine and getting twice as much data for the same budget, will increasingly choose the MGI machine. This is not a flashy market segment but it is large and growing, and it builds long-term relationships that translate into instrument purchases when those labs grow.

**Win four: specific clinical workflows where MGI's structural advantages matter.** Low-input applications, PCR-free workflows, applications where index hopping is a concern, applications where extreme-GC coverage is important. None of these are enormous markets individually, but together they have created several niches where MGI is genuinely the technically preferred platform and is winning purchases on that basis.

\[Pause.\]

**Where MGI has not yet won.** The flip side is worth being clear about. In the United States, MGI's overall market share remains small — somewhere in the single-digit percentages of installed sequencing capacity, probably. In Western European clinical settings, MGI is growing but still trails Illumina substantially. In specific high-prestige research applications — major US academic medical centers, the largest pharmaceutical company sequencing operations — Illumina remains entrenched, with deep workflow integrations and longstanding vendor relationships that are hard to dislodge. The shift toward MGI is real but uneven, and in many of the markets that matter most to Illumina's revenue, Illumina remains comfortably dominant.

**The trajectory matters more than the snapshot.** As recently as 2018, MGI had essentially no global market share outside China, and the platform was widely dismissed in Western genomics circles as a curiosity. By 2024, MGI was producing somewhere in the neighborhood of fifteen to twenty-five percent of the global short-read sequencing output by data volume — estimates vary, and the company doesn't disclose precise numbers — and the share was growing several percentage points per year. If that trajectory continues, MGI will be approaching Illumina's scale within five to ten years, particularly if Chinese demand continues to grow and if Western adoption picks up.

Whether the trajectory continues depends on factors that have nothing to do with sequencing chemistry. The US-China relationship, US regulatory policy on Chinese genomic platforms, Illumina's own pricing and product strategy, and the broader trajectory of clinical genomics as a market — all of these will shape the next decade of competition. The technology, at this point, is essentially settled. The competition is now about geography, regulation, and execution.

---

## SEGMENT 18 — The future: DCS Lab, SBX Nanowell, where MGI is going technically

Let me close with a forward look at where MGI is investing technically, because the platform is not standing still and some of the new directions are quite interesting.

**Direction one: even higher throughput.** The DNBSEQ-T20×2 already represents an industrial-scale sequencing factory in a single instrument. MGI's roadmap continues to push throughput higher — the recently announced T7+ instrument, with its claimed one-genome-per-ten-minutes throughput, is an iterative improvement, but the trajectory points toward instruments that can process tens of thousands of human genomes per year in a single rack-sized footprint. The engineering challenges are mostly in optics, software, and reagent delivery rather than in chemistry — the cPAS chemistry itself is mature and scales well.

**Direction two: spatial genomics.** MGI has invested in a product line called **DCS Lab** (DNBelab C Series, in the full nomenclature) — a benchtop platform for single-cell sequencing and spatial transcriptomics, integrating microfluidic sample preparation with downstream DNBSEQ readout. The concept is similar to what 10x Genomics has built around Illumina sequencing, but with MGI controlling the whole stack. Single-cell sequencing — assigning each transcript to the individual cell it came from — and spatial transcriptomics — preserving the geographical location of each transcript within a tissue — are two of the fastest-growing areas of genomics research, and having a fully integrated solution from sample prep through sequencing is a strategic play to capture share in those segments.

\[Pause.\]

**Direction three: nanowell-based sequencing, "SBX Nanowell."** MGI has announced research efforts on a new sequencing chemistry — going by various working names including "Stoichiometric Sequencing by Synthesis Expansion" and "SBX Nanowell" — that aims to push read accuracy and throughput beyond what cPAS can deliver. The technical details are still emerging and not all of it is in the peer-reviewed literature yet, but the general direction involves sequencing individual molecules in nanofabricated wells, with chemistry that pushes per-base accuracy toward levels suitable for direct calling of single-molecule variants without the multi-copy averaging that DNBs provide. If this works at commercial scale, it would represent a significant chemistry jump for the platform — analogous in scope to the jump from cPAL to cPAS — and would position MGI competitively against single-molecule and long-read approaches as well as against Illumina.

**Direction four: long-read integration.** MGI has been investing in approaches to extend the effective read length of DNB-based sequencing through computational and biochemical means — things like stLFR (single-tube long fragment read), which barcodes long fragments before short-read sequencing in a way that allows the resulting short reads to be assembled into long virtual reads. The published 2019 stLFR paper from Complete Genomics demonstrated that this approach can produce read information equivalent to fragments tens of kilobases long, from short-read sequencing data. This is not a true long-read platform — Oxford Nanopore and PacBio still own that space — but it extends the reach of DNB-based workflows into applications where long-range linkage information is important.

\[Pause.\]

**Direction five: clinical and consumer applications.** MGI continues to push into clinical workflows, regulatory approvals in new jurisdictions, and consumer-adjacent applications. They have invested in user-friendly small instruments designed for hospital and clinical-lab settings rather than research-grade environments. They have also begun discussions about consumer-genomics-style applications, though this remains a smaller part of their strategy.

The broader picture: MGI is investing across the full range of technical and commercial directions you would expect from a mature sequencing platform vendor. Higher throughput, lower cost, single-cell, spatial, longer effective read length, new chemistries, new clinical applications. They have the manufacturing scale, the capital, and the patent freedom to operate to pursue all of these in parallel. Whether they execute well on all of them remains to be seen, but the technology base and the company structure now support a credible long-term competition with Illumina across the whole landscape of short-read genomics.

\[Pause.\]

So let me close with the question I want you to leave with. Twenty years ago, sequencing a human genome cost millions of dollars and took months. Today, on a DNBSEQ-T20×2 or a NovaSeq X, the same job costs around a hundred dollars and takes a day. Five years from now, with whatever comes after the T20×2 and the NovaSeq X, the cost will be lower and the throughput higher. The question is no longer whether we can read DNA. The question is what we do with the data — how we interpret variants, how we predict disease risk, how we develop drugs, how we protect patient privacy, how we manage the geopolitical implications of a technology whose dominant platform is now contested between American and Chinese vendors.

The technical story we have spent two hours on — DNA nanoballs, rolling circle amplification, patterned flow cells, cPAS chemistry, the lineage from Complete Genomics to BGI to MGI — is the foundation. The next decade of genomics will be built on top of platforms like this one, in factories like the ones MGI and Illumina run. Understanding the foundation matters because the foundation shapes what is possible, what is affordable, and who controls access. That, in the end, is why you should care about this platform — not because it is technically dazzling (though it is), but because it is one of the two pillars on which the entire next era of biology is being built.

Thanks. Take a break. We'll do questions in five minutes.

---

## APPENDIX

**Key terms.**

- **DNB** — DNA nanoball. A single DNA molecule, produced by rolling circle amplification of a circular template, containing roughly three hundred head-to-tail copies of the original fragment, folded into a compact sphere about two hundred nanometers across. The fundamental sequencing unit on a DNBSEQ instrument.
- **RCA** — Rolling circle amplification. The Phi 29 polymerase-driven process that produces the long single-stranded concatemer that becomes a nanoball. Linear, not exponential, amplification.
- **Phi 29** — A bacteriophage-derived DNA polymerase with strong strand displacement activity and high processivity. The workhorse enzyme of DNB production.
- **cPAL** — Combinatorial probe-anchor ligation. The original Complete Genomics sequencing chemistry, used from 2009 to roughly 2016. Ligation-based, produced gappy non-contiguous reads. Now obsolete.
- **cPAS** — Combinatorial probe-anchor synthesis. The modern MGI sequencing chemistry. Polymerase-based, uses fluorescent reversible-terminator nucleotides, produces contiguous reads of one hundred fifty bases or more. Functionally analogous to Illumina SBS but on a DNB substrate.
- **Reversible terminator** — A modified nucleotide carrying both a fluorescent dye and a chemical blocker on the 3-prime hydroxyl. After incorporation, the polymerase cannot extend until the blocker is chemically cleaved. Used by both Illumina SBS and MGI cPAS.
- **Patterned flow cell** — A flow cell with a regular array of nanoscale spots, each one sized to bind exactly one sequencing unit (one cluster for Illumina, one nanoball for MGI). Provides high density without spatial overlap.
- **Aminosilane** — The positively charged surface chemistry used on DNBSEQ flow cell spots to electrostatically attract negatively charged nanoballs.
- **Index hopping** — A failure mode of bridge-amplification platforms where adapter sequences from one sample swap to fragments from another during flow-cell amplification, contaminating demultiplexed output. Does not occur on DNBSEQ because no amplification happens on the flow cell.
- **Multiplexing / Demultiplexing** — Pooling many samples on one flow cell using sample-specific index sequences (multiplexing), then sorting reads back into per-sample bins after sequencing using those indexes (demultiplexing).

**Instrument cheat sheet.**

- **DNBSEQ-G50** — Small benchtop, low throughput, targeted panels and microbial work. Analog of Illumina MiSeq.
- **DNBSEQ-G99** — Fast small instrument for clinical panels.
- **DNBSEQ-G400** — Mid-throughput workhorse, the most common MGI instrument in published research. Analog of Illumina NextSeq.
- **DNBSEQ-T7** — High-throughput, four parallel flow cells, multiple terabases per day.
- **DNBSEQ-T10×4** — Higher-density T-series, ten parallel flow cells.
- **DNBSEQ-T20×2** — Current flagship, two T20 flow cells, up to fifty thousand human genomes per year at roughly one hundred dollars each. Direct competitor to Illumina NovaSeq X.
- **DNBSEQ-T1+** and **T7+** — 2025 refreshes targeting faster turnaround and increased throughput.

**Timeline.**

- **2005** — Complete Genomics founded in Mountain View, California, by Clifford Reid, Radoje Drmanac, and John Curson.
- **2009** — Complete Genomics publishes the first DNB-based human genome in _Science_.
- **2010** — Complete Genomics demonstrates per-genome cost around $4,400 using cPAL chemistry.
- **2013** — BGI Group acquires Complete Genomics for $118 million; CFIUS approval granted.
- **2015-2017** — Transition from cPAL to cPAS chemistry; BGISEQ instrument family introduced.
- **2016** — MGI Tech spun out as the equipment-arm subsidiary of BGI.
- **2019** — Illumina v. MGI patent litigation begins in multiple jurisdictions.
- **2019** — DNBSEQ-T7 introduced.
- **2020** — MGI raises $1 billion Series B.
- **2022** — MGI Tech goes public on Shanghai STAR Market.
- **2022** — Major US patent disputes settled; MGI free to sell in the US.
- **2023** — DNBSEQ-T20×2 announced with $100-per-genome target.
- **2024** — US BIOSECURE Act introduced (does not pass in original form); MGI stock loses over a third of market capitalization.
- **2025** — DNBSEQ-T1+ and T7+ refresh instruments announced.

**Suggested further reading.**

- Drmanac et al. (2010). "Human genome sequencing using unchained base reads on self-assembling DNA nanoarrays." _Science_. The foundational paper introducing DNB-based sequencing on the Complete Genomics platform.
- Wang et al. (2019). "Efficient and unique cobarcoding of second-generation sequencing reads from long DNA molecules enabling cost-effective and accurate sequencing, haplotyping, and de novo assembly." _Genome Research_. The stLFR paper.
- Reviews comparing DNBSEQ and Illumina platforms have appeared regularly in _Briefings in Bioinformatics_, _Nature Biotechnology_, and _BMC Genomics_ from the late 2010s onward.

**One-sentence summaries.**

- **The chemistry.** DNB sequencing reads short DNA fragments by rolling-circle-amplifying each fragment into a nanoball containing three hundred head-to-tail copies, loading the nanoballs one-per-spot on a patterned silicon flow cell, and reading them by sequencing-by-synthesis with reversible-terminator nucleotides (cPAS) — functionally similar to Illumina SBS but on a structurally different substrate.
- **The company.** MGI Tech is a 2016 spin-out of the Chinese genomics giant BGI, built on technology acquired from California-based Complete Genomics in 2013, and is now the dominant short-read sequencing platform in China and a growing competitor to Illumina globally.
- **The competition.** At the data layer, MGI and Illumina are nearly interchangeable; at the cost layer MGI is often meaningfully cheaper, especially at high throughput; the choice between them is increasingly about geography, regulation, and supply chain rather than technology.

---


