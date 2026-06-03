# Gene Synthesis: How We Write DNA From Scratch, At Scale

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to a hundred minutes, plus a mid-point break, which lands comfortably inside a two-hour slot. (Read faster, ~140 wpm, and you'll have room for questions or board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. This lecture assumes you have already worked through the oligonucleotide synthesis script — we will not re-derive phosphoramidite chemistry here. We are going to start one layer up, at the point where you can already buy short pieces of DNA, and ask: how do we get from short pieces of DNA to long pieces of DNA, and what industry has grown up around that question?

---

## SEGMENT 1 — Two eras, and the line between them

Alright. Good morning. Let's get started. Today, for the next two hours, we are going to talk about **gene synthesis** — the commercial industry that lets you, sitting at a bench in 2026, type out a fifteen-hundred-base-pair gene on a website, click submit, pay a hundred dollars or so, and receive, in a vial in the mail a week and a half later, a tiny pellet of DNA containing exactly the sequence you specified, inside a plasmid, ready to drop into bacteria.

I want to make a claim right at the start, and I want you to hold onto it for the next two hours. The claim is this. Somewhere between, roughly, 2010 and 2015 — that five-year window — molecular biology went through a paradigm shift that almost nobody outside the field has heard of, and that even people inside the field tend to underweight. Before that window, if you needed a specific gene for an experiment, you had to **clone it** — meaning you had to find a source of the gene in nature, design primers, do a PCR, run a gel, cut out the band, ligate it into a vector, transform bacteria, pick colonies, mini-prep, sequence-verify, and if anything went wrong at any step you started over. After that window, for an ever-growing fraction of projects, the cheaper and faster option was simply to **synthesize the gene from scratch**. Type the sequence into a website. Pay. Wait. Open the vial.

That sounds like a minor logistical improvement. It is not. It is a categorical change in how molecular biology gets done. Because once it is cheaper to write DNA than to find DNA, the entire mental model of the field starts to invert. You no longer think of yourself as a hunter, going out into nature to track down a particular gene from a particular organism. You think of yourself as a writer. You sit at a keyboard, you compose the sequence you want — possibly a sequence that has never existed in any organism, ever — and you commission a vendor to print it for you. The bench work that used to take a graduate student three months to do, the cloning of a single gene, collapses to two weeks of waiting and a half-hour to verify the package arrived intact.

\[Pause.\]

So if you walk out of here at the end of these two hours, here is what I want you to be able to do. One: explain, in plain English, what it means to "synthesize a gene" and how that differs from "synthesizing an oligo" — because they are different things, and the difference matters. Two: walk through the workflow that turns a typed sequence on a screen into a verified plasmid in a tube — design, oligo split, synthesis, assembly, cloning, sequence verification — and explain what could go wrong at each step. And three: look at a press release from Twist Bioscience, or IDT, or Genscript, or one of the enzymatic-DNA-synthesis startups, and have a real intuition for what the company actually does, what its competitive advantage actually is, and where the field is going next.

That's the contract.

Let me start with the analogy I am going to come back to over and over. Think about the difference between **photocopying a book** and **printing a custom book from scratch**. If you want a specific existing book, the easiest thing is to photocopy it. You find a copy in a library, you photocopy each page, you bind the copies, you walk away with a duplicate. That is, in the molecular biology metaphor, what cloning is. You find the gene in a natural source — a tissue sample, a cell line, another lab's plasmid — and you photocopy it using PCR. The original has to exist. You are reproducing it.

But what if the book you want **doesn't exist yet**? What if you've written a manuscript, and you want a printed copy of it? You can't photocopy anything, because there's nothing to copy from. You have to type out the manuscript and send it to a print-on-demand service, which takes your text file and prints a real, physical, bound book and ships it to you. That is gene synthesis. The DNA sequence you want lives in a text file on your computer — maybe it's a gene you designed by combining domains from three different proteins, maybe it's a codon-optimized version of a viral gene, maybe it's just a wild-type human gene that nobody in your lab has a physical source for — and you send the text file to a vendor, and they manufacture the physical molecule for you.

The shift between 2010 and 2015 is that for most genes, somewhere between five hundred and three thousand base pairs in length, print-on-demand became cheaper and faster than photocopying. That is the paradigm shift. And the industry that delivered it is what we're going to spend the rest of today understanding.

\[Pause.\]

One more framing point before we get into the mechanics. Yesterday's lecture — the oligonucleotide synthesis one — was about how we make short pieces of DNA, fifteen to maybe two hundred bases long, using phosphoramidite chemistry on a solid support. Gene synthesis **sits on top of** oligo synthesis. Every gene synthesis run, anywhere in the world, ultimately starts with a pile of short oligonucleotides that were made by phosphoramidite chemistry on a column or a chip. The gene synthesis problem is fundamentally an **assembly** problem: given that I can make pieces up to two hundred bases long, how do I stitch them together into a thousand-base gene, or a ten-thousand-base operon, or a hundred-thousand-base chromosome arm? That is the question we will spend most of the next two hours on. The chemistry under the chemistry — the phosphoramidite cycle — we are going to take as given. If you need to refresh on that, go back to the oligo synthesis script.

Now let's go meet the workflow.

---

## SEGMENT 2 — The workflow, end to end

Let me walk you, before we go into any of the chemistry or the companies, through the actual end-to-end workflow of what happens when you order a gene today. This is the picture I want you to have in your head as a scaffold. We will fill in the details over the rest of the lecture, but I want you to see the whole arc first.

Step one: **design**. You sit at your computer and you compose the DNA sequence you want. Maybe it's a gene from your favorite organism that you want to express in _E. coli_. Maybe it's a protein you designed in a structure-prediction program and you need the DNA that encodes it. Maybe it's a synthetic regulatory element, or a guide RNA scaffold, or a humanized version of an antibody. Whatever it is, the output of step one is a text string — a sequence of A's, T's, G's, and C's — that lives in a file on your computer. Maybe it's twelve hundred bases long. Maybe it's three thousand. You'll often also specify some flanking pieces: cloning sites, ribosome binding sites, tags. The whole thing, including flanking pieces, you package up into a single sequence.

Step two: **submit**. You paste the sequence into a vendor's website — Twist, IDT, Genscript, Eurofins, whoever. The website immediately does several things. It checks the sequence for problematic features — long repeats, extreme GC content, hairpins — that might be hard to synthesize. It runs a **biosecurity screen** to make sure you're not ordering a chunk of a smallpox genome or a ricin toxin sequence. It often offers you, automatically, a **codon-optimized** version of your sequence tuned for whatever host organism you've specified. You confirm what you want, you choose a delivery format — usually a plasmid, sometimes a linear fragment — you put in your credit card or a purchase order number, and you click submit.

Step three: **oligo design and synthesis at the vendor**. Now things start happening in the vendor's facility. Your fifteen-hundred-base gene gets fed into their assembly-design software. The software splits your gene into a set of overlapping oligos — typically somewhere between thirty and a hundred short oligos, each maybe fifty to two hundred bases long, with carefully designed overlaps where adjacent oligos share twenty or thirty bases of identical sequence. That overlap is what will let them anneal to each other during assembly. The vendor's synthesizers — either column synthesizers or, more commonly now, chip-based oligo arrays — manufacture all of those oligos in parallel.

Step four: **assembly**. The vendor takes that pile of overlapping oligos, mixes them together in a tube, and runs an assembly reaction. The dominant chemistries here are **polymerase cycling assembly** (PCA), **Gibson assembly**, and **Golden Gate**. We'll go into all three. The point of any of them is to take that soup of short, overlapping pieces and zipper them up into a single long molecule that matches your designed sequence end to end.

Step five: **cloning into a vector**. The assembled long fragment is then ligated, or recombined, into a plasmid vector — typically a generic cloning plasmid with a selectable marker and an origin of replication, the kind of thing you saw in the plasmids lecture. The product is transformed into _E. coli_, plated on selection, and bacterial colonies grow up overnight.

Step six: **verification**. This is the step everyone forgets to think about, and it's the step that determines whether you actually got what you ordered or not. The vendor picks individual colonies, mini-preps them, and sequences the plasmid. If the sequence matches your design, that clone is shipped to you. If not, that clone is discarded and another one is checked. Usually they pick several colonies to maximize their odds of finding at least one perfect match.

Step seven: **ship**. The verified plasmid, dried down into a tiny pellet of about a microgram of DNA, is sealed in a tube, dropped in a padded envelope, and shipped to your lab. You open the envelope, you resuspend the pellet in a little water, you transform a fresh batch of _E. coli_ with it, and now you have an unlimited supply of your designed gene.

\[Pause.\]

Total time, today, for a typical gene: somewhere between four business days and three weeks, depending on the vendor and the length and the difficulty. Total cost: somewhere between fifty and three hundred dollars for a fifteen-hundred-base gene in a standard cloning vector. A grad student doing the same job by traditional cloning, finding the gene from a tissue source and PCR-cloning it, is looking at three to eight weeks of bench work and a much larger consumable budget. That is the reason the industry has, in fifteen years, become a billion-dollar business serving every academic and biotech lab on the planet.

\[Pause.\]

A few things I want to flag about that workflow, that we are going to come back to over and over.

First: the **oligo synthesis step** — step three — is the rate limiter and the cost driver. Everything downstream is cheap and fast once you have the oligos. Most of the innovation in this industry, including the entire rise of Twist Bioscience as a company, has been about making that oligo synthesis step cheaper per base. We'll see how.

Second: the **assembly step** — step four — is where there's interesting chemistry. PCA, Gibson, Golden Gate, Type IIS-based assembly, MoClo, Loop assembly — all of these are different molecular strategies for solving the same problem of "take a soup of short pieces and zipper them together." Each has tradeoffs. We'll see those.

Third: the **verification step** — step six — is where most of the customer's quality experience comes from. The error rate in raw oligos is small but nonzero. By the time you've assembled a fifteen-hundred-base gene from forty oligos, the probability that the assembled product has at least one wrong base somewhere is high enough that you absolutely cannot ship the first colony you pick. You have to sequence. That's why a vendor's pricing typically includes "sequence-verified" in the description, and that's why a verified gene costs more than a raw assembly. We'll spend a whole segment on the error rate and verification math, because it is fundamental.

Fourth: the **biosecurity screen** in step two is, philosophically, kind of remarkable. The major gene synthesis companies have voluntarily — and now, in some jurisdictions, legally — agreed to screen incoming orders against databases of dangerous pathogen sequences. If you try to order the genome of variola major, or large stretches of the 1918 flu hemagglutinin, your order gets flagged and reviewed before it ships, or it doesn't ship at all. The companies have, in effect, become biosecurity infrastructure for the world. That is a story unto itself and we will come back to it in the final segment.

Okay. That's the workflow at thirty thousand feet. Now let's drop down and look at how the assembly actually works.

---

## SEGMENT 3 — Polymerase Cycling Assembly: the original assembly chemistry

The original idea for stitching short oligos into a long gene — the one that everything else is a refinement of — is called **polymerase cycling assembly**, or PCA. It dates from the mid-1990s, though variants of it had been kicking around in different labs for a few years before. The most-cited paper is Stemmer, Crameri, Ha, Brennan, and Heyneker in 1995. The chemistry is so simple, and so elegant, that once you see it you will wonder why anyone needed to invent anything else. (They did, for reasons we'll get to, but PCA was the proof of concept.)

Here is the picture. Imagine you want to make a thousand-base-pair gene. You design the gene as a sequence of, say, twenty oligos — call them oligo 1, oligo 2, oligo 3, all the way up to oligo 20. The oligos alternate between the top strand and the bottom strand of the double helix. Oligo 1 is from the top strand and covers bases 1 through 60. Oligo 2 is from the bottom strand and covers bases 40 through 100 — meaning it overlaps oligo 1 by twenty bases at its 5' end. Oligo 3 is from the top strand and covers bases 80 through 140 — overlapping oligo 2 by twenty bases. And so on, marching down the gene, each adjacent oligo sharing about twenty bases of overlap with its neighbor, alternating between top and bottom strand.

When you mix all twenty oligos together in a tube, with a thermostable DNA polymerase and dNTPs and the usual PCR buffer, and you cycle the temperature up and down — denature, anneal, extend, denature, anneal, extend, just like a PCR — something beautiful happens. At each annealing step, every oligo finds its complementary overlap partner. Oligo 1 anneals to the leftmost end of oligo 2. The 3' end of each oligo is now sitting on a template — the other oligo it overlapped with — and the polymerase extends it, filling in the gap until it falls off the other end. After a few cycles, you have fragments that are roughly two oligos long. After a few more cycles, fragments four oligos long. And so on. The pieces zipper up. After twenty or thirty cycles, you have a small but real population of full-length molecules — molecules that span the entire designed gene, from base 1 all the way through base 1000.

The analogy I want you to hold for PCA is **puzzle pieces with overlapping edges**. Imagine you cut a long picture into pieces, but instead of cutting them with clean edges, you cut them with overlapping tabs — each piece has a chunk of its neighbor's image at each end. If you dump those pieces on a table and shake them, the overlapping edges will tend to find each other because they're the same image. Now imagine you have a robot — the polymerase — that, whenever it sees a tab from one piece resting on top of the matching region of an adjacent piece, comes along and glues that tab down and extends it across to the next piece. After enough rounds of shaking and gluing, you have reassembled the whole picture in one continuous sheet.

That is PCA. The oligos are puzzle pieces with twenty-base overlapping tabs. The polymerase is the robot that walks along the joins and extends each tab into the next region. The thermal cycling — the denature-anneal-extend cycle — is the shaking that gives the pieces a chance to find each other and the gluing motion that locks them together.

\[Pause.\]

A few practical notes that you should hold onto.

First, the **overlap length** matters enormously. Too short, and the oligos won't find their partners reliably during annealing; the assembly will be slow and the yield will be low. Too long, and you're using a lot of oligo per base of final gene — your oligo cost goes up, and your error rate goes up because every overlap region is, by construction, getting synthesized twice (once on each strand) and the error in either copy can propagate. Vendors today have heavily optimized this; the typical overlap is around twenty bases, sometimes thirty, with the GC content matched across overlaps to keep the melting temperatures uniform.

Second, **after PCA you typically run a second amplification step** — a regular PCR — using just two terminal primers that bind to the ends of the designed gene. PCA itself produces a tiny amount of full-length product. The terminal PCR amplifies that tiny amount up by a factor of a million or so, so you have a usable working stock.

Third, PCA is **fragile** in characteristic ways. If any one of your twenty oligos has a problem — a deletion in the middle, a stretch with low yield, a secondary structure that prevents it from annealing — the entire assembly fails or produces low yield. The assembly is a chain, and the chain is only as strong as its weakest oligo. Modern vendors run elaborate QC on every oligo before assembly to catch this, but in the early days, PCA was notorious for stochastically failing on long genes and the failure could be hard to diagnose.

Fourth — and this is the killer property — **PCA works without a physical template**. You don't need an existing copy of the gene. The oligos themselves are the template, and they were synthesized from scratch from your typed sequence. So PCA is genuinely "writing DNA from scratch." That's the property that makes it the foundational chemistry of the gene synthesis industry. Everything else — Gibson, Golden Gate, all the more elaborate modern methods — is a refinement of this idea, optimized for particular kinds of constructs or particular kinds of error profiles or particular kinds of throughput. But the basic move — short oligos with designed overlaps, thermal cycling, polymerase extension — is the move.

\[Pause.\]

I want to give you one historical anecdote that I think is illuminating, because it captures something about how this technology has actually been used.

In 2002, a group at Stony Brook led by Eckard Wimmer published a paper in _Science_ in which they synthesized, from scratch, the entire genome of poliovirus — about 7,400 base pairs — using PCA from oligos ordered out of a catalog. They then put the synthesized RNA-equivalent into a cell-free extract and produced infectious poliovirus particles. The paper was hugely controversial and politically explosive — it was the first time anyone had built a real pathogen entirely from synthetic DNA, with no living source involved. It was a deliberate provocation, intended to make policymakers take seriously the implications of cheap DNA synthesis. The chemistry they used was, essentially, PCA exactly as Stemmer described it in 1995, scaled up. The fact that two grad students with a credit card could, in 2002, order oligos and assemble a working pathogen genome was a wake-up moment for the field. It is one of the events that, much later, led to the biosecurity screening programs that the major synthesis companies run today.

So PCA is not just a chemistry. It's a chemistry that made certain kinds of things possible — and certain kinds of things unsettling — and the whole modern conversation about biosecurity is, in some sense, downstream of how easy and cheap PCA made gene assembly.

Now let's look at the chemistry that has, in most modern workflows, replaced PCA — or supplemented it for certain kinds of joins. That is Gibson assembly.

---

## SEGMENT 4 — Gibson assembly: the molecular Velcro

In 2009, Daniel Gibson — then working at the J. Craig Venter Institute, in the middle of a multi-year project to synthesize a complete bacterial genome — published a one-pot DNA assembly method that has, in the years since, become the de facto standard for joining DNA fragments in molecular biology labs and a workhorse step in commercial gene synthesis. It is universally called **Gibson assembly**, and it is so widely used that people use the name as a verb — "I Gibsoned the insert into the vector last night."

The chemistry is gorgeous. It is a single-tube, isothermal, three-enzyme reaction. Three enzymes — that's it. And the assembly happens in one step at one temperature, fifty degrees Celsius, in about an hour. No thermal cycling. No design of cloning sites or restriction enzyme sites. No ligation step that you have to set up separately. You mix your DNA fragments with the enzyme master mix, you incubate, you transform. Done.

The trick is that, like PCA, Gibson assembly relies on **overlapping ends**. You design your fragments — whether they came from oligos, PCR products, or restriction digests — so that adjacent fragments share twenty to forty bases of identical sequence at their boundaries. The fragments arrive in the tube as double-stranded DNA with blunt ends or sticky ends, doesn't really matter, with the overlap regions buried inside the duplex. Then the three enzymes do their dance.

Enzyme one is a **5' exonuclease**. This enzyme chews back the 5' end of each strand at every cut site, exposing the 3' end of the opposite strand as a single-stranded overhang. So a double-stranded fragment, which arrived with paired ends, now has single-stranded tails sticking out at both ends — tails that include the overlap region.

Enzyme two is **DNA polymerase**. We'll come back to this in a moment.

Enzyme three is **DNA ligase**. We'll come back to this too.

Once the 5' exonuclease has chewed back the ends and exposed single-stranded 3' overhangs, the magic happens. Two adjacent fragments — call them fragment A and fragment B — have, by design, complementary 3' single-stranded overhangs at the boundary where they're supposed to join. Those single-stranded tails find each other in solution and **anneal**, forming a new base-paired join between the two fragments. This is the moment where I want you to picture **molecular Velcro**. Two strips of cloth coming together, the little hooks on one strip finding the little loops on the other strip, and clicking into place.

Now, after annealing, there are still small gaps in the duplex — places where the exonuclease chewed too far back, leaving short stretches of single-stranded DNA between the annealed overlap and the rest of the fragment. That's where **DNA polymerase** comes in. It fills in those gaps, using each strand as a template for the other, producing a fully duplex stretch. And then **DNA ligase** comes in and seals the remaining nicks, the single-stranded breaks in the phosphate backbone, turning the assembled product into a covalently closed double-stranded molecule.

Three enzymes. One pot. One temperature. One hour. And the output is an assembled DNA fragment, ready to transform.

\[Pause.\]

The elegance here is that the three enzymes work in a kind of choreographed sequence even though they're all in the tube at once. The exonuclease is most active at first, chewing back ends until the ends are short enough and the overlaps long enough that the polymerase can take over. The polymerase has 3'-to-5' proofreading and 5'-to-3' polymerase activity but it doesn't chew through annealed duplex efficiently, so once a join has been made the polymerase doesn't undo it. The ligase only acts on perfectly paired nicks, so it only fires once a join has been correctly annealed and filled. The reactions are temporally separated by their substrate preferences, not by you adding things at different times. That's why it's a one-pot reaction.

The other thing I want you to appreciate about Gibson is that the design is **sequence-agnostic in the boundary**. Unlike a restriction-enzyme-based ligation, where the junction has to contain a specific restriction site, a Gibson junction can be at any sequence you want. You just design the overlap on either side to include the bases of the junction you want, and after assembly the junction is seamless — there's no leftover scar sequence in the final product. This is a huge advantage for any application where you can't tolerate extra bases at a join. You want to fuse two protein domains together at a precise residue? Gibson. You want to swap a single base in the middle of a long gene? Gibson. The junction can be anywhere because the junction is defined by your overlap design, not by any pre-existing recognition site in the DNA.

\[Pause.\]

Now, where does Gibson fit into the commercial gene synthesis workflow? Two places.

The first place is at the **mid-level assembly step**, where you take pre-assembled chunks — maybe three or four PCA-assembled subfragments, each five hundred base pairs long — and Gibson them together into a full-length two-thousand-base-pair gene. PCA is great for joining oligos because each oligo is short and the overlaps are short. Gibson is better for joining larger pieces because the overlaps can be longer, the specificity higher, and the failure modes — especially for repetitive sequences — different.

The second place is at the **cloning step**, where you take the assembled gene and stitch it into a vector. Gibson assembly is, for many vendors, the default cloning chemistry. You take the assembled linear gene with twenty- or thirty-base overlaps to the vector's cloning site, you linearize the vector by PCR or restriction digest, you mix everything together with the Gibson master mix, you incubate at fifty degrees for an hour, and you transform. The vector now contains your gene with no extra restriction sites or scar sequences.

There is a competitor — Golden Gate assembly — that uses a fundamentally different chemistry to achieve a similar outcome with different tradeoffs. Let's go there next.

---

## SEGMENT 5 — Golden Gate: Type IIS enzymes and scarless assembly with hierarchy

Golden Gate assembly is a different solution to the same problem of "join multiple DNA fragments in one pot, in any order, scarlessly." It was published by a German group — Engler, Kandzia, and Marillonnet — in 2008, and it has become hugely popular in synthetic biology, particularly for applications where you need to assemble many fragments at once or where you need to do the same assembly over and over with different combinations of parts.

The trick that makes Golden Gate work is a special class of restriction enzymes called **Type IIS enzymes**. Most of the restriction enzymes you know about — EcoRI, BamHI, HindIII, all the classics — are Type II enzymes. They recognize a specific palindromic sequence in the DNA and they cut **inside** that sequence. So if you cut with EcoRI, the cut leaves an EcoRI recognition site at each end of every fragment, with a four-base overhang in the middle. The leftover recognition sites are sometimes called **scars** — they're little stretches of fixed sequence that you didn't necessarily want but that you can't get rid of without an extra step.

Type IIS enzymes are different. They recognize a specific sequence in the DNA, but they cut **outside** their recognition sequence — typically a few bases downstream of it. The most-used Type IIS enzyme in Golden Gate is BsaI, which recognizes the seven-base sequence GGTCTC and cuts one base downstream, leaving a four-base overhang **whose sequence you specify**. Because the cut is outside the recognition site, and the recognition site itself ends up on the discarded fragment, the cut piece carries no leftover scar. The four-base overhang can be any four bases you want, because BsaI doesn't care what's downstream of the recognition site — it just cuts there.

That property — a programmable four-base overhang — is what makes Golden Gate work. You design each of your fragments so that, at every junction where two adjacent fragments are supposed to meet, both fragments have a BsaI site oriented so that cutting releases them with matching four-base overhangs. You design each junction with a **unique** four-base overhang — different from every other junction in the assembly. So fragment A's right overhang matches fragment B's left overhang and nothing else. Fragment B's right overhang matches fragment C's left overhang and nothing else. And so on.

Now you mix all your fragments together in a tube with BsaI and T4 ligase. The BsaI cuts every fragment, releasing each piece with its designed overhangs. The ligase joins adjacent fragments wherever overhangs match. Because each junction has a unique four-base overhang, fragments can only join in the correct order. The assembly is **directional and ordered** without you having to do anything other than design the overhangs properly.

And here is the killer detail: once a junction has been ligated, the BsaI site is gone — because, remember, the BsaI sites were on the discarded outer pieces, and the inner pieces, now joined, have no BsaI site left. So the assembled product is **immune** to further BsaI cutting. But unligated fragments — fragments that haven't yet joined — still have BsaI sites and can still be re-cut. So you can run the reaction at a single temperature, with BsaI and ligase active simultaneously, and the reaction drives itself to the assembled product as a thermodynamic sink. Anything that's correctly assembled is safe. Anything that isn't gets re-cut and gets another chance.

\[Pause.\]

The result is an extraordinarily efficient one-pot, one-temperature assembly that can join, in principle, ten or fifteen fragments at once in a single defined order. You can throw the parts into a single tube, run a single Golden Gate reaction, transform, and pick out a colony in which all the parts have come together in the right order. The same chemistry can be repeated hierarchically — assemble several Level 1 modules, then assemble them into Level 2 modules using a different Type IIS enzyme, then assemble Level 2 modules into Level 3, and so on, up to entire pathways and synthetic chromosomes. That hierarchical version is the MoClo (Modular Cloning) system, which dominates plant synthetic biology, and a closely related system called Loop assembly does similar things in different application areas.

Where does Golden Gate fit relative to Gibson? Both are scarless. Both are one-pot. Both work for any sequence at the junction. The tradeoffs:

Golden Gate requires that **none of your fragments contain internal BsaI sites** (or whatever Type IIS enzyme you're using). If your gene has a GGTCTC in the middle of it, BsaI will cut there too, and your assembly fails. So you have to pre-process your design to eliminate internal recognition sites — usually by silent codon swaps if the site is in a coding region. This is a real annoyance for designs that happen to contain the site naturally.

Gibson, by contrast, doesn't care about internal sequence at all. There are no forbidden motifs. The exonuclease chews everything equally. So Gibson is the more general tool when you're joining a small number of large pieces with no constraints on internal sequence.

Golden Gate, by contrast, scales beautifully to many small pieces with no upper limit on the number of junctions, because the unique-overhang design means each junction is unambiguous even if you have fifteen of them in the same tube. So Golden Gate is the better tool when you want to do combinatorial assembly — mixing and matching parts to build a library of variants in a single reaction.

Different tools for different jobs. Most modern gene synthesis vendors use both, picking the assembly chemistry based on the specifics of each order. When you submit a gene order, you generally don't know or care which chemistry was used — you just see the verified plasmid arrive in the mail. Inside the vendor's facility, though, that decision has been made by an algorithm based on your sequence's properties, and the resulting reaction was run by a liquid-handling robot.

Now let's talk about where the oligos themselves come from — because if you want to make a thousand-base-pair gene from forty oligos, that's forty oligos per gene, and if a vendor is doing five thousand genes a day, that's two hundred thousand oligos a day, and you cannot make two hundred thousand oligos a day on the kind of column synthesizers we talked about in the oligo lecture. You need a fundamentally different platform.

---

## SEGMENT 6 — Chip-based oligo arrays: the silicon revolution

Here's where the whole industry changed. In the early 2000s, several groups — at Affymetrix, at Agilent, at academic labs in California and Massachusetts — figured out how to do phosphoramidite chemistry not in a column, but on a **flat surface**. A silicon wafer or a glass slide, an inch or two on a side, patterned into hundreds of thousands or millions of microscopic spots, each one only a few micrometers across. The same phosphoramidite chemistry you learned about in the oligo lecture — deprotect, couple, cap, oxidize — runs on every spot in parallel. But each spot can be **commanded to synthesize a different sequence**, because the chemistry can be directed spatially using either light or inkjet-style fluid deposition.

I want you to internalize this analogy because it is the central technological move of the modern gene synthesis industry. **A column synthesizer is to a chip-based synthesizer as a typewriter is to a printing press**. The column makes one oligo at a time. The chip makes a hundred thousand oligos at the same time, on the same piece of silicon, in the same reaction vessel, with each oligo being a different sequence. That parallelism — that throughput per square inch — is what dropped the cost of an oligo by an order of magnitude in the early 2010s and made commercial gene synthesis cheap enough to be the default option.

\[Pause.\]

Let me give you a slightly more detailed picture of how this actually works, because the geometry matters.

Imagine a small square of silicon, say one inch by one inch. The surface has been chemically derivatized — coated with a linker — so that phosphoramidite chemistry can be initiated on it. Now imagine that surface divided into a fine grid of microscopic wells, like the wells of a microtiter plate but much smaller — typically a few micrometers across, with millions of wells per chip. Each well is, in effect, a tiny isolated reaction vessel where one oligo will be built.

To synthesize one base on one specific well, the machine has to do two things: deliver the right phosphoramidite to the right well, and deprotect the growing chain at the right moment so that coupling only happens where you want it.

In the **inkjet** version of this technology — which is the approach Agilent pioneered, and which Twist Bioscience refined — each well is addressed by a tiny inkjet head that can spray a specific phosphoramidite into a specific well at a specific moment. The chip has a uniform flush of deprotection reagent, then the inkjet sprays the next base to whichever wells need an A here, then to whichever wells need a T, then G, then C, and only then does the chip get the next round of capping and oxidation. Over many cycles, each well builds up its own unique sequence, base by base. The number of distinct sequences you can make in one run is roughly the number of wells on the chip, which can be tens of thousands to over a million.

In the **light-directed** version — pioneered at Affymetrix using a chemistry analogous to photolithography in semiconductors — the deprotection step is the spatially addressed one rather than the delivery step. The chip is bathed in one phosphoramidite at a time, and a programmable mirror array shines UV light only on the wells where you want that base to be added in this cycle. Wells that received light get deprotected and accept the base. Wells that didn't stay protected and skip this cycle. By patterning the light through twenty-five cycles times four bases, you can synthesize, in principle, arbitrarily many different sequences in parallel on the chip.

\[Pause.\]

Now, here's the thing that has to be appreciated. The chemistry on a chip is the same chemistry as in a column — phosphoramidite chemistry, the same four-step cycle, the same reagents, the same protecting groups. The molecular biology is identical. What's different is the **geometry** and the **throughput**. A column synthesizer might make ninety-six oligos in a run, in parallel, on ninety-six columns. A modern chip makes hundreds of thousands of oligos in a run, in parallel, on hundreds of thousands of wells. That's a thousand-fold improvement in parallelism per machine.

But — and this is the crucial caveat — the **per-oligo yield** on a chip is much, much lower than on a column. A column synthesis run might produce tens of nanomoles of oligo, easily enough for hundreds of PCR reactions or many cloning experiments. A chip synthesis run might produce attomoles — that is, a factor of ten-to-the-seventh less — of each individual oligo. Each well on the chip is only a few square micrometers, and the amount of material that can be built in such a tiny well is correspondingly tiny.

So the chip is incredible for applications where you need **many different sequences, each in small quantity**. Gene synthesis is exactly such an application: you need forty different oligos to assemble one gene, but you only need a few picomoles of each. Other applications, like custom oligo pools for hybridization capture in sequencing, are similar — many sequences, tiny per-sequence quantity. But if you need lots of one specific oligo — say, you need a kilo of an antisense oligonucleotide drug — the chip is the wrong tool. You need a column, or for very large scale, you need a bulk batch synthesizer.

So the modern oligo industry has bifurcated. Column synthesis dominates for high-amount applications: individual PCR primers ordered one at a time, clinical-scale oligonucleotide drugs, manufacturing-scale runs. Chip synthesis dominates for high-diversity applications: gene synthesis, oligo pools, library construction, DNA data storage. Twist Bioscience built its company entirely on the chip side. IDT, the older incumbent, made its name on columns and has only recently moved into chip-based work.

\[Pause.\]

One more thing I want to flag about chip-based synthesis: the **error rate per base** on a chip is typically somewhat higher than on a column. The chemistry is fundamentally the same, but the surface effects on a flat chip, the smaller reaction volumes, the difficulty of achieving uniform reagent delivery to every well, all push the per-cycle yield down a little. A column synthesis might run at 99.5% coupling yield per cycle. A chip synthesis might run at 99% or 98% per cycle. That doesn't sound like much, but as we will see in two segments, it matters enormously when you're stitching forty oligos together into a gene. The error rate compounds. Chip-based gene synthesis is great economically, but it forces you to take the verification step much more seriously than column-based synthesis did.

That's the chip. Now let's go meet the company that bet its whole existence on the chip getting cheap enough.

---

## SEGMENT 7 — The error rate problem and why you must verify

Before we get to the companies, I want to spend a segment on the most important single concept in commercial gene synthesis, which is the **error rate problem**. If you understand this segment, you will understand why every gene synthesis vendor's price list distinguishes between "gene fragment" and "sequence-verified gene in a vector," why those two products cost very different amounts, and why error correction is the single most active area of R&D in this industry.

Here is the basic fact. Phosphoramidite chemistry, even at its best, makes mistakes. The coupling reaction at each cycle has a yield somewhere between 98% and 99.5%. Yield, recall, means the fraction of growing chains that successfully add the next base. The rest of the chains — the failures — get capped, so they don't continue and don't generate insertions, but they do represent **truncation errors**. The chain that should have been thirty bases long ends up only twenty bases long. There are also **substitution errors**, where the wrong base gets coupled because of contamination or impure phosphoramidite. And there are **deletion errors** that slip past capping for various subtle chemical reasons. The overall **per-base error rate** of a high-quality oligo synthesis run is around one error per thousand bases, sometimes a little better, sometimes worse depending on the chemistry and the platform.

Now here is the math you need to do, in your head, every single time you think about gene synthesis. If the per-base error rate is one in a thousand — call that p — and your gene is L bases long, then the probability that any given full-length copy of the gene is **perfect**, with no errors anywhere, is approximately (1 - p) to the L power. For a hundred-base oligo at one-in-a-thousand error, that's about 90% perfect. For a five-hundred-base gene, that's about 60% perfect. For a fifteen-hundred-base gene, that's about 22% perfect. For a three-thousand-base gene, that's about 5% perfect. For a ten-thousand-base assembly, the perfect fraction is essentially zero — every molecule has at least one error somewhere.

Internalize this. **If you assemble a fifteen-hundred-base-pair gene from oligos and you pick a random colony, there is about a seventy-eight percent chance that colony has at least one wrong base in it.** Not one in a hundred. Not one in ten. Almost four chances out of five. The first colony you pick is more likely than not to be wrong.

\[Pause.\]

This is the error rate problem, and it is the central truth that shapes the commercial gene synthesis industry. The customer wants a perfect gene. The synthesis chemistry produces, at best, an enriched mixture of mostly-correct genes. The gap between those two things has to be bridged by **screening** — by sequence verification of individual clones. That step is where most of the cost of a "sequence-verified" gene actually comes from. The vendor synthesizes the oligos, assembles them, transforms the assembly into bacteria, picks several colonies, mini-preps each one, runs each through Sanger sequencing or short-read sequencing, throws away the bad ones, and ships you a clone they have proven by sequencing to be perfect.

The number of colonies they have to pick to find a perfect one is a direct function of the per-clone error probability. For a five-hundred-base gene where 60% of clones are perfect, picking three colonies gives you a 94% chance that at least one is right. For a fifteen-hundred-base gene where 22% are perfect, you need to pick about ten colonies to get a 90% chance of finding a good one. For a three-thousand-base gene where 5% are perfect, you need to pick maybe sixty colonies. The cost of picking, mini-prepping, and sequencing all those colonies is the dominant cost of long gene synthesis — it scales with gene length much more aggressively than the cost of the oligos themselves.

\[Pause.\]

So one of the central R&D problems in the industry is: **how do we reduce the error rate before screening, so that we have to screen fewer clones?** Two strategies dominate.

The first is **MutS-based error correction**. MutS is an enzyme from the bacterial mismatch repair system that recognizes and binds to mismatched base pairs in double-stranded DNA — places where a G is paired against a T, or an A against a C, instead of the proper Watson-Crick pairing. After assembly, you melt and re-anneal your gene preparation. Most molecules pair up with copies of themselves (perfect duplex), but molecules with errors sometimes pair up with copies that have the error in a different place, producing mismatches. You add MutS, which binds to the mismatches. You then filter out the MutS-bound DNA — either physically, by pulling MutS down on a bead, or by cleavage, using an enzyme that cuts at the mismatch. What's left is enriched for perfect duplexes. The error rate of the surviving DNA drops by an order of magnitude or more. This is called **consensus shuffling** in some implementations, and it was one of the first scalable error correction strategies the industry adopted.

The second strategy is **NGS-verified pooled cloning**. Here, you don't try to reduce the error rate in solution — you let the error rate be what it is, you clone everything, and then you use next-generation sequencing to find the rare perfect clone in a haystack of imperfect ones. You assemble the gene, clone it into a vector, transform into bacteria, plate, and then pool a thousand colonies, prep their DNA together, and run a long-read sequencer over the whole mixture. The sequencer tells you which colonies were perfect. You go back to the plate, you re-grow just the perfect colonies, you ship one of those. This brute-force strategy has become economically viable as sequencing has gotten cheap. It's particularly powerful for **clonal libraries** — where you want one perfect example of each of a thousand different designed variants — because you can do all thousand assemblies in one pool, clone them all together, and let sequencing sort out which colony goes with which design.

These two strategies — pre-cloning error reduction with MutS, and post-cloning identification with NGS — are the workhorses. Different vendors use different combinations. The whole game is to drive the per-base error rate of the delivered product down as low as the customer needs it, at the lowest possible cost.

\[Pause.\]

One more conceptual point. The error rate problem is the reason that **the cost of synthesizing DNA does not scale linearly with length**. If you just count the oligos, a three-thousand-base gene is about twice as many oligos as a fifteen-hundred-base gene, so you'd expect the cost to be about twice as much. But because the error rate compounds with length, the screening cost scales much faster than linear. The fraction of colonies you have to screen to find a perfect one goes up exponentially with length. So in practice the cost per base creeps up as the gene gets longer, and at very long lengths — five thousand bases, ten thousand bases — the cost per base can be two or three times what it is at the sweet spot around one thousand bases. This is why some vendors offer different pricing tiers based on length, and why above a certain length, vendors typically deliver "gene fragments" that you assemble further yourself, rather than a single verified clone. The economics of verification dominate above a few kilobases.

Okay. Now let's talk about the cost trajectory, because the story of gene synthesis over the past twenty-five years is, more than anything, a story about price.

---

## SEGMENT 8 — The cost trajectory: ten dollars a base to seven cents

Let me put numbers on the table. These numbers matter because they define when gene synthesis became viable and what's possible at each historical moment.

In **1990**, when ad-hoc gene synthesis projects were being done in academic labs using the best column synthesizers and PCA assembly, the effective cost of a verified synthetic gene was somewhere around **ten dollars per base pair**. A thousand-base-pair gene cost ten thousand dollars and took a month or two of labor. Almost nobody did it. If you needed a gene, you cloned it.

By **2003** — around the year the Human Genome Project finished — commercial gene synthesis was just becoming a thing, with companies like Blue Heron Biotechnology and others offering custom synthesis. The effective cost was around **four dollars per base pair**. A thousand-base-pair gene was four thousand dollars, took six weeks, and was used only when cloning was truly impossible — for unusual organisms, codon-optimized variants, or genes that didn't exist in any natural source.

By **2010**, with the rise of newer companies — DNA 2.0, GeneArt (later acquired by Thermo Fisher), Gen9 — the cost had dropped to about **thirty cents per base pair**, an order of magnitude lower than 2003. A thousand-base-pair gene was three hundred dollars, took three to four weeks. This is the cost at which gene synthesis became competitive with cloning for the first time. If you valued your bench time even modestly, paying three hundred dollars to skip a month of cloning work started to look like an obvious trade.

By **2015**, with Twist Bioscience just coming online and pushing chip-based synthesis hard, the cost dropped to about **ten cents per base pair**. A thousand-base-pair gene was a hundred dollars, took two weeks. At this price, the calculation flips completely. It is, for an average gene, **cheaper to synthesize than to clone**. Even if you ignore the labor and only count consumables, paying a hundred dollars beats running a PCR, a digest, a ligation, a transformation, several mini-preps, and a Sanger run. The graduate student calculus, the price comparison everyone does in their head, fully crossed over.

Today, in **2026**, the floor for bulk commercial gene synthesis is around **seven cents per base pair** for standard genes, with Twist sometimes promoting promotional pricing even lower for high-volume orders. A thousand-base-pair gene is seventy dollars. Time to delivery is under two weeks for standard orders and under one week for express service. Some vendors will quote you, for short standard products, turnaround in a few business days.

\[Pause.\]

I want you to sit with that curve for a second. From ten dollars a base in 1990, to thirty cents in 2010, to seven cents today. That is roughly a hundred-and-fortyfold drop in cost over thirty-five years. Faster, in fact, than Moore's law over the same period — Moore's law gave you about a thirtyfold cost-per-transistor drop over the same window. Synthetic DNA has been **outpacing semiconductors** in cost reduction for the entire post-2010 era.

The reason it's outpaced Moore's law isn't that DNA synthesis chemistry has become twentyfold better — it hasn't, fundamentally. The reason is that the **format shifted**. We moved from columns to chips. The columns had been the technology since 1981 and they got marginally better year by year, but the cost-per-base curve was nearly flat for two decades. Then the chips arrived around 2010, and they didn't make oligos a little cheaper — they made them ten times cheaper, immediately, by changing the form factor entirely. And then chip yields kept improving, chip sizes kept growing, and the cost curve resumed its slide.

There's a moment in this history I want to single out, because I think it captures something. It's sometimes called, semi-jokingly, the **IBM-to-MIT moment**, though the names don't quite literally fit. The point of the joke is that there was a transition, around 2012 to 2014, when the cost of commissioning a gene from a vendor crossed below the cost of having a graduate student make it. Up to that point, the cheap thing was always for the grad student to do the molecular biology — clone, PCR, ligate — by hand at the bench. After that point, the cheap thing was to order the gene from the vendor and have the grad student do something else with the time. The labor of bench cloning hadn't gotten more expensive. The cost of the gene had gotten cheaper. The crossover was inevitable once it crossed below grad student labor cost. And once it crossed, the field reorganized. Cloning skills became less central to graduate training. Design skills became more central. The ratio of "thinking about a sequence" to "physically handling DNA" tilted radically toward thinking.

\[Pause.\]

A few framing thoughts on what this cost trajectory enables, beyond the obvious "cheap genes for everyone."

First, **library construction at scale**. If a single gene is seventy dollars, and a library of a thousand designed variants is seventy thousand dollars, you can fund a directed-evolution campaign or an antibody-discovery campaign on a single grant. Before 2015, those campaigns required either error-prone PCR — which gave you mutations you didn't choose — or massive cloning operations that took years. Now you can specify, base by base, exactly which thousand variants you want and order them as a single library. That has fundamentally changed how protein engineering is done.

Second, **synthetic genomes**. When the Venter Institute synthesized the first bacterial genome in 2010 — a million base pairs — it cost them roughly forty million dollars and four years of work. At today's prices, the same project would cost roughly seventy thousand dollars in raw synthesis and could be done in months. That's three orders of magnitude reduction in a decade and a half. Whole-genome synthesis projects that were unthinkable in 2010 are now routine for organisms up to the bacterial scale, and people are seriously talking about synthetic plant genomes, synthetic yeast genomes (already substantially done in the Sc2.0 project), and eventually synthetic mammalian chromosomes.

Third, **DNA data storage**. At seven cents a base, the cost of storing one bit of digital data in DNA is somewhere around one hundredth of a cent — still way more expensive than tape storage, but only an order of magnitude or two off, and dropping fast. DNA data storage was a curiosity in 2012. It's now a serious commercial proposition with multiple companies racing to make it practical. We'll come back to this in the final segment.

The cost trajectory, in other words, doesn't just save grad students some money. It opens up entire categories of experiments and entire industries that simply couldn't exist at the old price. Now let's go meet the companies that are actually pushing the price down.

---

## SEGMENT 9 — Twist Bioscience: the silicon wafer bet

Twist Bioscience was founded in 2013 by Emily Leproust, a chemist who had previously led the oligo array program at Agilent, and two co-founders. The bet they made was simple and aggressive. They believed that the entire gene synthesis industry was running on inefficient hardware — column synthesizers and first-generation oligo chips — and that if you redesigned the synthesis platform from the ground up around a silicon wafer with picoliter wells, you could cut the cost of gene synthesis by an order of magnitude and capture the whole market.

That bet, in retrospect, was correct. Twist went public in 2018, captured a substantial fraction of the global gene synthesis market over the following five years, and as of the mid-2020s is widely regarded as the largest pure-play DNA synthesis company in the world. Whether or not Twist remains the leader long-term is a separate question — we'll come back to that — but the company's early thesis was vindicated thoroughly enough that the entire industry shifted to chip-based synthesis in response.

Let me describe the Twist platform in more detail, because the specifics are interesting.

The Twist core technology is a **silicon wafer**, fabricated using semiconductor-industry equipment, on which the company etches an array of microscopic wells. Each well is on the order of ten micrometers across — small enough that the company can pack roughly **one million wells onto a single wafer**. Each well is sealed at the bottom and open at the top, and the wafer is functionalized so that phosphoramidite chemistry can run on the inside walls of every well.

The synthesis is done by **inkjet-style deposition**. The wafer is positioned under an array of inkjet heads, each addressed to a specific subset of wells. To add a base at any given cycle, the inkjet heads spray the appropriate phosphoramidite into the wells that should receive it. Different bases get sprayed at different moments to different wells in the same cycle. Then the wafer is flushed with capping, oxidation, and deprotection reagents in sequence, all wells in parallel. Then the next cycle. Over twenty to two hundred cycles, each well builds up its own programmed oligonucleotide sequence.

The economic magic is that **the wafer is the unit of throughput**, not the column. One wafer makes a million oligos in one run. A column synthesizer of comparable size and reagent consumption makes ninety-six oligos in a run. The ratio is a factor of ten thousand in parallelism. That ratio is, to first approximation, also the ratio of cost reduction Twist achieved — modulo the fact that chip oligos are smaller and noisier and need more downstream processing.

The analogy I want you to hold for Twist is **the move from typewriters to integrated circuits in computing**. Before chips, computers were built from discrete components. Each component was made one at a time, by hand, and assembled into a machine. Then somebody figured out that if you could deposit thousands of components onto a single silicon wafer in a single fabrication process, the per-component cost dropped by orders of magnitude and the per-machine cost followed. That insight — **integration onto a single wafer of many small parallel things that used to be made one at a time** — is exactly the move Twist made for DNA synthesis. The phosphoramidite chemistry didn't change. The form factor did. And the form factor is where almost all the cost lives.

\[Pause.\]

A few specific competitive moves Twist has made over the years that are worth understanding.

First, Twist invested heavily in the **assembly and verification pipeline** downstream of the wafer. The oligos come off the chip with low per-oligo yield and a real error rate, and Twist's assembly software, error correction, and NGS-based verification turn that noisy oligo soup into a verified gene. The chip is a necessary condition for Twist's pricing, but it's not sufficient. The verification pipeline is where the customer experience lives.

Second, Twist has aggressively diversified beyond gene synthesis into **oligo pools** (for hybridization capture, CRISPR libraries, and similar applications), **NGS target enrichment products**, **antibody discovery services**, and **DNA data storage research**. The thesis behind that diversification is that the chip is a horizontal platform — it makes oligos, full stop, and you can apply those oligos to many different downstream products. The chip is more like a manufacturing capability than a specific product, and the company has tried to monetize that capability across as many product lines as possible.

Third, Twist has invested in **biosecurity screening** infrastructure as a competitive moat. The company screens every incoming order against a database of dangerous pathogen sequences and the company has been a leading advocate for industry-wide screening standards. The pitch to customers — and to regulators — is that ordering from Twist is safe in a way that ordering from less-scrutinized vendors might not be. We'll come back to biosecurity in the final segment, but I want to flag here that, for a company in this business, biosecurity isn't just a regulatory obligation. It's a competitive positioning.

Twist is not without competitors and not without challenges. Their margins have been pressured by the broader market, by competition, and by the considerable capital cost of running a fab-style facility. Whether their next decade is as dominant as their first is an open question. But the bet they made in 2013 — that the entire industry would shift to chip-based synthesis — was the right bet, and they were the first company to scale it.

Now, before we break, let me set up where we're going in the second half. We've covered the workflow, the chemistry of assembly, the chip-based oligo platform, the error rate problem, the cost curve, and the company that bet on chips. In the second hour, we'll cover the competitive landscape — IDT, Genscript, Eurofins, the defunct Gen9, the rest of the gene synthesis ecosystem — and then we'll move into the more specialized topics: variant libraries, codon optimization, clonal versus pooled output, the economics of when you should synthesize versus clone, and finally the next frontier: enzymatic DNA synthesis, which threatens to do to phosphoramidite chemistry what phosphoramidite did to Khorana's chemistry fifty years ago.

Take ten minutes. Stretch your legs. See you back here at the top of the hour.

\[BREAK\]

---

## SEGMENT 10 — IDT: the older incumbent and the gBlock

Welcome back. Let's start the second hour with a company that, in many ways, was the dominant force in synthetic DNA before Twist showed up — and which is still, by most measures, the largest manufacturer of synthetic DNA in the world, even if Twist has won the gene synthesis subcategory. That company is **Integrated DNA Technologies**, or IDT.

IDT was founded in 1987 by Joseph Walder, a biochemist at the University of Iowa. The company started as a small custom oligo provider, making PCR primers and other short oligos for academic labs in the Midwest. Over the next twenty-five years, IDT grew into the world's largest custom oligo company by relentlessly executing on three things: turnaround time, quality, and customer service. By the early 2010s, IDT was shipping millions of oligos a year to tens of thousands of labs, with same-day or next-day delivery for standard primers and a customer-facing brand that academic labs trusted reflexively. The acquisition by Danaher in 2018 priced the company at $1.9 billion, which was a measure of how dominant the position was.

IDT's core technology, historically, has been **column synthesis** — the same chemistry described in the oligo lecture, run on banks of automated column synthesizers in industrial-scale facilities. Column synthesis produces high-quality oligos at high per-oligo yield, with relatively low per-base error rates compared to chips. For a primer that you'll use a thousand times in PCR over the next year, you want a column oligo. For a probe that has to work reliably in a clinical assay, you want a column oligo. For an antisense drug, you want a column oligo. IDT's column-based business has been, and remains, enormously profitable.

But IDT also recognized, by the early 2010s, that the gene synthesis market was going to grow and that some kind of intermediate product — a longer-than-primer, shorter-than-gene piece of synthetic DNA — was going to be valuable. So they introduced a product line called **gBlocks**.

\[Pause.\]

The gBlock is, in my opinion, one of the most important product introductions in commercial molecular biology in the last fifteen years, and it deserves a moment of attention.

A gBlock is a double-stranded synthetic DNA fragment, typically between 125 and 3000 base pairs long, delivered as a linear duplex, not in a vector. You order it like a long oligo — paste the sequence, click submit, receive in the mail in a few days — but you receive it as ready-to-use double-stranded DNA suitable for cloning, gene assembly, or direct use as a template. The gBlock occupies the conceptual niche between "an oligo" (short, single-stranded, no need to clone) and "a gene in a vector" (long, double-stranded, fully verified, ready to express). And for a huge class of molecular biology applications — building a small insert for Gibson assembly, making a custom CRISPR repair template, providing a defined template for a PCR, mocking up a synthetic regulatory element — the gBlock is the perfect product.

The genius of the gBlock as a product is that it **inverts the usual workflow**. Before gBlocks, if you needed a small piece of synthetic DNA for a Gibson assembly, you had to either order it as a gene (slow, expensive, fully sequence-verified, two weeks) or assemble it yourself from oligos (cheap if you had time, but a few days of bench work). The gBlock cuts that middle. You order a gBlock for thirty or fifty dollars, you receive it in a few days, and it's ready to drop into your assembly. You don't get the same sequence verification you'd get with a cloned gene — gBlocks are delivered as ensembles of synthesized molecules, not single sequenced clones — but for any application where you'll be doing your own cloning and your own sequencing downstream, that's exactly what you want.

The gBlock essentially **made small-scale custom DNA into a commodity**. It is now the default tool for assembling small constructs in most molecular biology labs. The product category has been imitated by every other vendor — Twist has a similar product called "Gene Fragments," Genscript has theirs, Eurofins has theirs — but IDT's gBlock got there first and remains the brand-name dominant version.

\[Pause.\]

A few competitive observations about IDT versus Twist.

IDT has the **customer relationships**. Twist is the platform innovator. Most academic labs reflexively order from IDT for oligos and gBlocks because they have for years and the service has been good. Twist has to win each customer by being cheaper for genes specifically. So IDT dominates the high-frequency, low-ticket business of routine oligos and small fragments, while Twist competes harder on the lower-frequency, higher-ticket business of full-length sequence-verified genes.

IDT has historically been **better at oligo quality** — column synthesis genuinely produces cleaner, longer oligos with lower error rates than chip-based synthesis. For applications where every base matters and you can't tolerate any contamination from truncated products, IDT's column oligos win. Twist has been closing this gap by improving chip QC, but IDT's quality reputation, in the oligo segment, is still meaningful.

Twist has, historically, been **cheaper per base for long genes**, where chip economics dominate. So the breakdown looks roughly like: small order, short oligos, fast turnaround, top quality — IDT. Large order, many long genes, lowest cost — Twist. Almost every lab in the world buys from both, choosing per order.

Now let's look at the next major player: Genscript, the Chinese-headquartered company that for a long time was the cost leader before Twist arrived.

---

## SEGMENT 11 — Genscript and the Chinese gene synthesis ecosystem

Genscript was founded in 2002 by Frank Zhang, a chemist with a PhD from the University of New Mexico who returned to China and set up shop in Nanjing. The company's initial pitch was straightforward: use the labor cost differential between China and the United States to undercut Western gene synthesis prices by a factor of two or three, while delivering equivalent product. Throughout the 2000s and into the 2010s, that pitch worked spectacularly well. Genscript captured a large share of the global academic gene synthesis market — particularly for cost-sensitive academic labs — and became, by some measures, the largest gene synthesis company in the world by sequence volume during the early 2010s, before Twist's chip-based platform changed the unit economics.

Genscript's underlying chemistry was, for most of its history, **column-based oligo synthesis combined with PCA assembly**, run in large-scale facilities with extensive automation and skilled human labor. The company invested heavily in process engineering — making each step of the gene synthesis workflow more efficient, more parallel, more automated — and in workflow software that allowed massive volumes of orders to be processed simultaneously. It also branched aggressively into adjacent markets: peptide synthesis, antibody production, recombinant protein expression, custom cell-line engineering. Today Genscript is best understood not as a gene synthesis company but as a **full-stack contract research organization** for molecular biology, with gene synthesis as the foundational service that brings customers in.

There is a broader Chinese gene synthesis ecosystem that has emerged behind and around Genscript. Companies like **GenScript**, **GENEWIZ** (now part of Azenta and majority-staffed in China), **Sangon Biotech**, **Tsingke**, **Sino Biological**, and a long tail of smaller players have built up enormous synthesis capacity in China at substantially lower cost structures than equivalent Western operations. For an academic lab in the United States or Europe ordering routine genes for an unfunded side project, ordering from a Chinese vendor can save thirty to fifty percent on the bill. For some labs and for some institutional purchasing rules, that matters.

\[Pause.\]

The picture is not without complications, and you should understand the complications as a working scientist.

First, **biosecurity oversight** of Chinese vendors has historically been less stringent than at the major US and European vendors. The International Gene Synthesis Consortium — the voluntary industry body that screens orders for dangerous sequences — has had a long-running effort to bring Chinese vendors into its screening framework, with mixed success. Some major Chinese vendors are now full participants in screening. Others are not. This is one reason why, for sensitive sequences or for orders subject to US export controls, large labs and government-funded projects often default to Western vendors.

Second, **intellectual property and data security** concerns have led some institutions, particularly in pharma and defense-adjacent research, to restrict gene synthesis orders to Western vendors. The argument is that submitting a proprietary protein sequence to a Chinese vendor for synthesis is, in effect, disclosing that sequence to the vendor — and the vendor's home jurisdiction may have different rules about what they're required to do with it. Whether you find these concerns proportionate or paranoid is a judgment call, but they are real and they shape ordering decisions in industry.

Third, **shipping times and customs** complicate the cost calculus. The unit price from a Chinese vendor may be lower, but if you have to wait an extra week for customs clearance, the effective speed disadvantage can outweigh the cost advantage for time-sensitive projects.

Fourth — and this is the interesting one for the future — **Chinese vendors have been investing aggressively in chip-based synthesis platforms of their own**. Tsingke, in particular, has built out massive chip-based oligo synthesis capacity in the last few years and is now a serious competitor to Twist on raw oligo cost, particularly in Asian markets. The dynamic that Twist exploited against the older incumbents — chip economics versus column economics — is now playing out in China, with Chinese chip-based vendors disrupting the Chinese column-based vendors. Genscript, in turn, has been investing in its own chip platform to keep pace.

So the Chinese ecosystem is not just a cost-arbitrage story. It is its own competitive landscape, with its own technology adoption curve, and it is increasingly capable of producing world-class platforms that compete with American and European companies on technology, not just on labor cost.

---

## SEGMENT 12 — Eurofins, ATUM, Gen9, and the rest

Let's round out the competitive landscape with the rest of the field, because there are several other players worth knowing about, and a couple of dead ones worth knowing about for the lessons they offer.

**Eurofins Genomics** is a European-headquartered services giant — the broader Eurofins group does food testing, environmental testing, clinical diagnostics, and many other things — and the Genomics division is one of the largest oligo and gene synthesis providers in Europe. Eurofins gobbled up several smaller European synthesis companies over the years, most notably MWG Biotech and Operon, and has positioned itself as the default vendor for European academic and pharma labs that prefer to source locally and pay in euros. The technology is similar to IDT — predominantly column-based oligos, conventional PCA and Gibson assembly for genes, an established Sanger and NGS verification pipeline — and the differentiator is logistical: European fulfillment, European data handling under GDPR, European customer service. For a lab in Munich or Lyon, ordering from Eurofins is the path of least resistance.

**ATUM**, formerly DNA 2.0, is a smaller US-based gene synthesis company that has carved out a niche in **codon optimization and design services**. They were one of the first companies to make codon optimization a marquee feature — not just synthesizing whatever sequence you specify, but explicitly redesigning the codon usage of your protein for optimal expression in your host of choice, using proprietary algorithms developed in-house. For high-value applications like biopharmaceutical protein production, where small improvements in expression yield translate to large improvements in manufacturing economics, that design layer is worth paying for. ATUM has remained smaller than Twist or IDT but has stayed competitive by emphasizing design expertise over raw synthesis cost.

**Gen9** is the one I want to spend a moment on, because Gen9 is the cautionary tale of the field. Gen9 was founded in 2009 by George Church (of the Harvard Wyss Institute), Joe Jacobson (of MIT), and Drew Endy (of Stanford), three of the most prominent names in synthetic biology. The company was founded explicitly on the thesis that chip-based gene synthesis was about to disrupt the industry — the same thesis Twist would adopt a few years later — and Gen9 had a head start, with technology developed in the founders' academic labs and a strong investor base. Gen9 spent the early 2010s building out chip-based gene synthesis infrastructure and launched commercial products in 2013 and 2014.

Gen9, in short, **was the company that should have been Twist**. They had the technology, they had the founders, they had the timing, they had the funding. And they got beaten in the market. Twist out-executed them on price, on customer service, on assembly chemistry, on verification, and on capital efficiency. Gen9 struggled commercially, did not scale at the pace its investors had hoped for, and in 2017 was acquired by Ginkgo Bioworks — the synthetic biology platform company in Boston — and effectively absorbed into Ginkgo's internal operations. The Gen9 brand no longer exists.

\[Pause.\]

The Gen9 story has several lessons. First, **technology by itself does not win this market**. The chemistry of chip-based synthesis is not actually that hard to copy. Twist had to build a real chip, real wafers, real reagents — but several other groups had also built real chips. What separated Twist from Gen9 was relentless execution on cost, quality, throughput, and customer experience, not the underlying physics. Second, **academic origins are a poor predictor of commercial success**. Gen9 had the most distinguished founder roster in the field. That did not translate into market dominance. Third, **the gene synthesis market is winner-takes-most**. Once Twist established price leadership and customer trust, the second-place company in chip-based gene synthesis was facing a structural disadvantage that was hard to escape.

The broader landscape also includes several smaller specialty companies worth mentioning briefly:

**Codex DNA** (formerly SGI-DNA, the synthesis arm of Synthetic Genomics, which was Craig Venter's company) sells the **BioXp** instrument — a benchtop gene synthesis machine that you can put in your own lab and use to print short gene fragments on demand. The pitch is that for the same money as ordering a few genes a month from Twist, you can amortize a benchtop machine that prints them in your own freezer in a couple of days. The product has found a niche in pharma and biotech labs that want maximum sample privacy and very fast turnaround. The chemistry inside the BioXp is, at heart, automated PCA from pre-loaded oligo cartridges.

**Ansa Biotechnologies**, **DNA Script**, **Molecular Assemblies**, and **Camena Bioscience** are the new generation of companies pursuing **enzymatic DNA synthesis** rather than phosphoramidite chemistry. We will spend a whole segment on these in Segment 17, because they represent the most credible threat to the chemistry that has dominated the industry since 1981.

That's the landscape. Now let's go into the more specialized topics.

---

## SEGMENT 13 — Custom gene libraries: variant libraries, directed evolution, antibody discovery

So far we've talked mostly about **single-gene synthesis** — one designed sequence, one verified clone, one tube. But there is an enormous and growing fraction of the commercial gene synthesis market that is something quite different: **variant libraries**. The customer orders not one designed gene, but a thousand designed variants of one gene — each variant differing from a reference by a defined set of changes, all of them synthesized in parallel and delivered as either a pool or as a plate of individually verified clones.

This product category did not exist, in any meaningful form, before chip-based synthesis. The reason is straightforward: making a thousand different genes one at a time on columns is prohibitively expensive. Making a thousand different genes from a single chip run, where each well synthesizes a different oligo set for a different variant, is essentially free per variant beyond the chip cost. The chip platform is a **library platform**, and the gene synthesis industry has spent the last decade building products around that fact.

\[Pause.\]

Let me give you three concrete examples of what variant libraries are used for in practice, because the applications are the most interesting part of this story.

The first application is **directed evolution of enzymes**. You have an enzyme that does something useful — say, an industrial enzyme used in detergent manufacture, or a metabolic enzyme used in a fermentation process — and you want to improve its activity, its stability, its substrate specificity. The traditional approach is error-prone PCR: introduce random mutations across the gene, screen for improved variants, repeat. The newer approach is **rationally designed libraries**: use protein structural information, evolutionary conservation data, and machine learning models to predict which positions in the protein are most likely to yield improvements, design a library of variants that explore the chemical diversity at those positions, order the library from Twist or Genscript, transform it into your screening host, and assay each variant. You get vastly more informative data per round of screening than random mutagenesis would give you, because the variants you're testing have been pre-selected for plausibility.

The second application is **antibody discovery**. You have a target protein you want to make an antibody against — say, a viral surface protein, or a cancer-associated receptor. The traditional approach is to immunize an animal, harvest the B cells, and isolate antibodies that bind the target. The newer approach uses **synthetic antibody libraries**: you design, in silico, a library of antibody variants — typically variants of the complementarity-determining regions (CDRs), the loops that make contact with the antigen — and you order the library as synthetic DNA, you express the antibodies in a display system like yeast or phage, and you select for binders. The whole pipeline can be done without animals, with full control over the diversity you're sampling, and with the ability to apply machine-learning models to design specific variants you think will work.

The third application is **synthetic regulatory element libraries**. You want to understand how the sequence of a promoter or an enhancer determines its activity in a particular cell type. You design a library of, say, ten thousand variant promoter sequences, each with defined mutations in particular positions, order them as a pool, attach a reporter gene downstream of each, transform into your cell line, and use sequencing-based reporter assays to measure the activity of every variant in parallel. This is sometimes called a **massively parallel reporter assay** (MPRA), and it has revolutionized how regulatory genomics is done. None of this would be possible without cheap, parallel, chip-based gene synthesis.

\[Pause.\]

The product packaging for libraries varies by application. Sometimes you want the library as a **pool** — all the variants mixed together in one tube, ready to transform en masse into a screening host, with the downstream assay handling identification of each variant. Sometimes you want it as a **plate of clones** — each variant individually cloned, sequence-verified, in a separate well, ready for individual assays. The pool is much cheaper per variant. The plate is much more useful when you want to do downstream characterization on each variant separately. Vendors offer both, and the price differential is roughly the cost of the cloning and sequencing overhead per variant. We'll come back to the pool-versus-clonal distinction in more detail in Segment 15.

The key conceptual point is that the **gene synthesis industry has shifted, in the last ten years, from selling genes one at a time to selling library platforms**. The library, not the individual gene, is increasingly the unit of commerce. The customer specifies the design rules for the library — what positions to vary, what changes to make at each position, how many variants to produce — and the vendor handles the parallel synthesis and the delivery format. This is not a minor add-on. For some vendors, library sales are now a substantial fraction of total revenue, and the operational sophistication required to deliver tens of thousands of correctly designed variants is itself a competitive moat.

---

## SEGMENT 14 — Codon optimization at scale

Let me spend a segment on a feature of the modern gene synthesis order that is easy to miss but worth understanding, because it shapes what your synthesized gene actually does when you express it. That feature is **codon optimization**.

Here's the basic biology, briefly. The genetic code is redundant. Most amino acids are encoded by multiple codons — three-letter sequences in the DNA — and the choice of codon does not change the protein you get. Leucine, for example, can be encoded by six different codons. Arginine by six. Serine by six. From a pure protein-encoding standpoint, those codons are interchangeable.

But they are not interchangeable from the **expression** standpoint. Different organisms use different codons at different frequencies. _E. coli_ uses some codons heavily and avoids others. Yeast uses a different distribution. Human cells use yet another. And the cell's ribosomes are tuned to translate the common codons quickly and the rare codons slowly, because the rare codons are matched by rare tRNAs that the ribosome has to wait around for. If you take a gene from a human source and try to express it in _E. coli_ without modifying the codons, you can run into problems: rare codons cause translation stalls, mRNA secondary structures form differently than expected, expression yields drop, and sometimes the protein folds incorrectly because translation rhythm matters for cotranslational folding.

The solution, going back decades, has been **codon optimization**: take the protein sequence you want to express, design a new DNA sequence that encodes the same protein but uses codons preferred by your expression host, and synthesize that optimized sequence instead of the natural one. If you're expressing a human gene in _E. coli_, you swap out human-preferred codons for _E. coli_-preferred codons throughout the gene.

In the cloning era, this was hard to do, because if you started with a natural gene from a human source you'd have to do site-directed mutagenesis on every codon you wanted to change — hundreds of separate edits, each one a small molecular biology project. Almost nobody did extensive codon optimization. People did targeted swaps for the worst offenders.

In the gene synthesis era, codon optimization is **free**. You're synthesizing the gene from scratch anyway. The vendor's software, when you submit a protein sequence, automatically generates a codon-optimized DNA sequence for your specified host, and that's what gets manufactured. You usually have the option to override or to specify particular codon-usage rules, but the default is codon-optimized for whatever host you indicated. Every single order is, in effect, codon-optimized at no additional cost.

\[Pause.\]

This sounds like a small technical detail. It is not. It has changed the economics of recombinant protein production in ways that are worth understanding.

Take a biopharmaceutical company that is producing a therapeutic protein in CHO cells — Chinese Hamster Ovary cells, the workhorse mammalian production host. The gene encoding the therapeutic protein was originally human. In the old days, you cloned the human gene, expressed it in CHO, and got whatever yield you got — maybe a gram per liter of culture, if you were lucky and the gene happened to express well. In the new days, you synthesize a codon-optimized version of the gene, tuned specifically for CHO expression, and you typically see expression yields **two to five times higher** than the unoptimized version. That difference, at industrial production scale where you're making kilograms of protein for clinical use, translates to enormous cost savings. The same fermentor produces more drug per run. The drug becomes cheaper to make. The manufacturing economics improve dramatically.

The same dynamic applies in academic research. Codon-optimized genes express better, more reliably, in heterologous hosts. The reason your last expression experiment worked the first time, instead of taking three rounds of optimization, is partly because the gene you ordered was codon-optimized when you submitted it, even though you may not have thought much about that checkbox on the order form.

\[Pause.\]

There's a subtle and slightly philosophical point I want to flag here. When a vendor codon-optimizes your gene, the **DNA sequence in your plasmid does not match the DNA sequence in any natural organism**. The protein it encodes is identical to the natural protein, but the DNA is a synthetic dialect — an _E. coli_ dialect or a yeast dialect or a CHO dialect of the same protein. This means that when you sequence the plasmid and search for the gene in a database like NCBI, you may not find a match. The protein sequence will match. The DNA sequence will look like nothing in nature. That's normal. It's actually a useful signature for "this was synthesized" versus "this was cloned from a natural source."

It also has implications for **patent law** and **biosecurity**. A codon-optimized version of a regulated sequence is, technically, a different DNA sequence than the natural version, even though it encodes the same protein. The biosecurity screening systems used by major vendors are aware of this and screen at the protein level, not just the DNA level — so codon-shuffling does not let you evade screens. But the legal and regulatory frameworks around synthetic biology have had to grapple with the fact that "the same protein" can be encoded by an astronomical number of different DNA sequences, and that distinction matters for various rules.

So codon optimization is one of those quiet features of modern gene synthesis that, once you know it's there, you see it everywhere. Every commercial gene order is, by default, a designed and codon-optimized sequence — never the natural sequence. That is a strange thing to think about, and a thing that simply was not true twenty years ago.

---

## SEGMENT 15 — Clonal versus pooled output: when you need one thing versus a million

Let me spend a segment on a distinction that, once you understand it, will shape how you think about ordering DNA for any complex experiment. The distinction is between **clonal output** and **pooled output**.

A **clonal product** is a single defined DNA sequence, delivered as a single homogeneous preparation. Every molecule in the tube is, ideally, identical. This is what you want when you're going to do a downstream experiment that requires one specific construct: a protein expression experiment, an enzyme assay, a CRISPR knock-in with a specific repair template. You need to know, with confidence, that the DNA in the tube is the exact sequence you designed. The vendor delivers this by synthesizing the gene, cloning it into a vector, picking a single colony, sequence-verifying that colony, and shipping you DNA from a clonal expansion of that single colony.

A **pooled product** is a heterogeneous mixture of many designed sequences, delivered as a single preparation that contains all of them together. You don't know, for any individual molecule, which variant it represents, but statistically the pool contains all your designed variants in roughly even ratios. This is what you want when your downstream experiment is going to apply some kind of selection or readout that distinguishes the variants from each other. You introduce the pool into your assay, the assay enriches or characterizes individual variants, and a sequencing readout at the end tells you which variants did what.

The cost difference between the two is enormous, and it tracks the verification step we discussed in Segment 7. For a clonal product, the vendor has to pick colonies, mini-prep them, sequence each one, and ship a verified clone. That's expensive. For a pooled product, the vendor synthesizes the oligos, assembles, transforms en masse, harvests the resulting bacterial population, and ships a DNA prep of the whole pool with no per-variant verification. That's vastly cheaper.

Concretely, if you want one specific gene at the highest verification level, you're paying maybe one hundred dollars at current prices. If you want a pool of ten thousand designed variants, you're paying maybe two thousand dollars total — so two dollars per variant, fifty times cheaper than one verified clone, even though there are ten thousand of them. The economics of pooled output are the economics that make modern high-throughput biology possible.

\[Pause.\]

Here is the conceptual point I want you to internalize. **The decision of whether to order clonal or pooled is the decision of where the downstream work is going to be done.** If you can characterize variants in parallel using a sequencing readout — phenotype them in bulk and read out the variant identities by sequencing each one — then you should order pooled. If you have to characterize variants individually, one at a time, in separate wells, then you have to order clonal.

This decision shapes experimental design. Many fields have, in the last decade, redesigned their assays specifically to be **sequencing-readable in pools**, because pooled gene synthesis is so much cheaper. Massively parallel reporter assays I mentioned in Segment 13 are exactly this: redesigned to make a pooled assay readable. Deep mutational scanning of proteins, in which thousands of variants are scored for function by a pooled fitness assay, is exactly this. The whole field of high-throughput functional genomics — saturation mutagenesis screens, large-scale CRISPR libraries, base-editing libraries — depends on the economics of pooled synthesis. None of those experiments would be tractable at one-hundred-dollar-per-variant clonal pricing. At two-dollar-per-variant pooled pricing, they become routine.

\[Pause.\]

The flip side of this is that pooled libraries have **quality control issues that clonal products don't have**. In a pool of ten thousand designed variants, some variants may be missing entirely because their synthesis failed. Some may be over-represented because they assemble more efficiently. Some may contain unintended deletions or substitutions that you only discover when you sequence the pool. Most modern library vendors offer **pool QC by deep sequencing**, in which they sequence the pool before shipping and provide you with a coverage report showing the abundance of each designed variant. You expect some skew — maybe most variants are within a five-to-tenfold abundance range — but if a third of your designed variants are missing entirely, that's a problem and the vendor will usually offer to remake the library.

The interaction between library design, pool QC, and downstream assay sensitivity is a substantial design challenge of its own, and a lot of the value-added work that modern gene synthesis vendors do is on the design and QC side, not the chemistry side. The chemistry is increasingly a commodity. The library design and verification expertise is increasingly the differentiator.

---

## SEGMENT 16 — Gene synthesis economics: when to make versus clone

Now let me spend a focused segment on the economics question that, for working scientists, is the most concrete and decision-relevant of any topic in this lecture. The question is: **for any given DNA construct, should I synthesize it or clone it?** Given current prices, current timelines, and current capabilities, where is the breakeven?

Let me lay out the variables. On the synthesis side, you have the per-base cost of synthesis — call it seven cents — and the turnaround time, call it ten business days for a standard order. On the cloning side, you have the cost of consumables (PCR enzymes, restriction enzymes, ligase, cloning kits, sequencing) and the cost of your time. The breakeven depends on a few key factors.

**Factor one: gene length.** For very short constructs — under three hundred base pairs — cloning is often faster and cheaper than synthesis, because you can knock out a single PCR and a Gibson assembly in two days for almost no consumable cost. Synthesis, at seven cents per base, would cost you twenty-one dollars and take ten days, which is a worse deal for short pieces. For medium-length constructs — five hundred to two thousand base pairs — synthesis is almost always cheaper, because cloning a thousand-base piece typically involves multi-step assembly and several rounds of verification. For long constructs — three thousand base pairs and up — synthesis remains feasible but expensive, and at very long lengths (over ten kilobases) you often build by assembling synthesized subfragments yourself rather than ordering the full construct.

**Factor two: source availability.** If you have, on hand, a plasmid containing the gene you need — from a previous experiment, from a collaborator, from a public repository like Addgene — cloning is dramatically faster and cheaper. You do a single PCR and a single Gibson, and you're done in a day. If you don't have a physical source — the gene is from an organism nobody in your lab works with, or it's a designed sequence that doesn't exist in nature, or it needs codon optimization for your host — synthesis is the only option, and the cost calculation is moot.

**Factor three: design complexity.** If the construct you want has lots of designed mutations relative to the natural sequence — point mutations, deletions, insertions, codon swaps for optimization, fusions with tags — every one of those changes is a separate molecular biology step if you're cloning. By the time you've done ten point mutations on a cloned construct, you've spent more on consumables and labor than you would have spent synthesizing the whole thing from scratch. Synthesis becomes preferred whenever the design diverges substantially from any available natural source.

**Factor four: throughput.** If you need fifty different variants of a gene, cloning fifty separate constructs is a graduate student's entire semester. Ordering fifty different synthesized variants is a single email to the vendor and ten days of waiting. Synthesis dominates absolutely on throughput.

\[Pause.\]

The rough rule of thumb that has settled out across most academic labs by 2026 is something like this: **if the construct is over a thousand base pairs, or has substantial designed differences from the natural sequence, or is needed in multiple variants, just synthesize it**. Otherwise, default to cloning. The threshold continues to shift toward synthesis every year as the per-base cost drops.

There are also non-economic factors that increasingly tilt toward synthesis. Cloning, even competent cloning, is a real skill that takes years to develop, and it requires hands-on training. Many modern molecular biology programs no longer teach traditional cloning as the default skillset — they teach synthesis-based workflows, where the bench work is restricted to the downstream assays and the gene-engineering work happens in silico. There is a generational shift underway in which graduate students in 2026 are far more comfortable designing in Benchling and ordering from Twist than they are running a restriction digest and a gel-extracted ligation. That shift is not, on balance, a loss of capability — but it is a change in what "doing molecular biology" feels like as a day-to-day practice.

\[Pause.\]

There is one more economic consideration worth flagging, which is **risk**. Cloning has a meaningful failure rate at every step. You can do a PCR that doesn't work. You can do a digest with the wrong star activity. You can do a ligation that fails. You can pick colonies that have the wrong insert. Each step has a tail risk of taking another week. Synthesis, by contrast, fails in a much smaller fraction of orders, and when it does fail the vendor remakes it at their cost. So even when synthesis is nominally more expensive per dollar, the **variance** of the timeline is much lower, which is itself valuable for projects on a deadline. A project manager budgeting time in a biotech company will often choose synthesis just for the variance reduction, even when cloning would be cheaper in expectation.

So the economics aren't just about price per base. They're about price plus variance plus opportunity cost of researcher time. Once you include all three, synthesis wins for an even larger fraction of constructs than the per-base pricing alone would suggest.

---

## SEGMENT 17 — Enzymatic DNA synthesis: the next leap

Okay. Now let's talk about the frontier. We have spent this whole lecture talking about phosphoramidite chemistry, the platform that has dominated DNA synthesis since 1981. There is a credible challenger emerging, and the next ten years of this industry may be defined by whether the challenger displaces phosphoramidite chemistry the way phosphoramidite displaced Khorana's chemistry fifty years ago.

The challenger is **enzymatic DNA synthesis**, often abbreviated EDS. The idea is to replace the four-step phosphoramidite cycle — deprotect, couple, cap, oxidize, all run in anhydrous organic solvents — with a single enzymatic step that adds one base at a time using a DNA polymerase, in water, at room temperature, with no toxic reagents.

The polymerase in question is called **terminal deoxynucleotidyl transferase**, usually shortened to **TdT**. TdT is an unusual polymerase, found naturally in vertebrate immune cells, that has one peculiar property: it adds nucleotides to the 3' end of a DNA strand **without requiring a template**. Almost every other polymerase in biology needs a template strand to read from. TdT does not. You give it a primer and a pool of nucleotides, and it just starts adding nucleotides at random to the 3' end of the primer, generating random sequence in the process.

Now, randomness is not what you want for synthesis. You want to add a specific base at a specific cycle. So the trick of enzymatic DNA synthesis is to use TdT in a controlled way: at each cycle, you provide it with **only one base** — say, an A — modified with a **3'-blocking group** that prevents TdT from adding more than one base at a time. After one base has been added to every strand, you wash, remove the 3'-blocking group, and provide the next base for the next cycle. The cycle is: add one modified base, deblock, add the next modified base, deblock. Just like phosphoramidite chemistry in structure — add, deblock, add, deblock — but using an enzyme in water instead of phosphoramidite chemistry in acetonitrile.

\[Pause.\]

The pitch for enzymatic DNA synthesis is several-fold.

First, **environmental**. Phosphoramidite chemistry consumes large quantities of acetonitrile, dichloromethane, tetrazole derivatives, and other solvents that have to be handled as hazardous waste. A large synthesis facility produces tons of solvent waste per month. Enzymatic synthesis is a water-based chemistry. The waste stream is mostly buffer salts. The environmental footprint is, in principle, ten or twenty times smaller.

Second, **length**. Phosphoramidite synthesis hits a wall at around two hundred bases because the compounded error rate per cycle limits how many cycles you can do before the truncation and mismatch population dominates. Enzymatic synthesis, if it can achieve very high per-cycle yield and very low per-cycle error, has a theoretical ceiling much higher — possibly into the thousands of bases per single synthesis run. That would skip the assembly step entirely, eliminating a whole layer of the gene synthesis workflow.

Third, **format flexibility**. Phosphoramidite chemistry requires anhydrous conditions, which means you have to do it in sealed reaction vessels, in nitrogen-purged environments, with carefully dried solvents. The format options are limited. Enzymatic synthesis works in standard aqueous biology buffers, which means it can in principle be miniaturized into microfluidic chips, integrated into automated pipettors, run on portable devices, and otherwise deployed in formats that phosphoramidite chemistry simply cannot reach.

Fourth, **biocompatibility**. The product of phosphoramidite chemistry has to be cleaved off the solid support, deprotected (a chemistry step involving strong base), purified, and resuspended before it can be used in any biology. The product of enzymatic synthesis comes off the surface already in biological buffer, ready to use. This shortens the path from synthesis to assay.

\[Pause.\]

The leading companies in enzymatic DNA synthesis as of the mid-2020s are:

**DNA Script**, a French company founded in 2014, which markets a benchtop enzymatic DNA synthesizer called the SYNTAX. The instrument prints oligos up to about eighty bases in length, in your own lab, with same-day turnaround. The pitch is that you can have a fully functional oligo synthesizer on your bench, eliminating the day or two of shipping time from ordering external oligos. DNA Script has been the commercial pioneer of enzymatic synthesis and has reached real customers at real revenue scale.

**Molecular Assemblies**, a US company founded in 2013, which is pursuing enzymatic DNA synthesis as a service business — making oligos and genes for customers using their proprietary enzymatic platform, with claims of longer reads and lower error rates than phosphoramidite chemistry.

**Ansa Biotechnologies**, founded in 2020 in California, which has demonstrated the longest single-molecule enzymatic syntheses to date — over a thousand bases in a single run, with low enough error to be useful — and is pursuing a service model targeting long gene synthesis specifically. Their pitch is essentially that phosphoramidite chemistry will never make a thousand-base oligo without assembly, but enzymatic synthesis can.

**Camena Bioscience**, a UK-based company pursuing a related but distinct approach.

\[Pause.\]

Now, here is the honest assessment of where the field is, as of when this lecture is being written. Enzymatic DNA synthesis is **promising but not yet displacing** phosphoramidite chemistry at scale. The per-cycle yields of enzymatic synthesis are improving but are not yet competitive with phosphoramidite for short, high-quality oligos. The error rates are getting better but are not yet as low as the best column synthesis. The cost per base, at commercial scale, is not yet lower than phosphoramidite. So enzymatic synthesis today is best understood as a **technology in the late R&D phase**, with real commercial pilot deployments but not yet a wholesale industry replacement.

The bet, however, is that enzymatic synthesis will continue to improve along all of those dimensions, while phosphoramidite chemistry — already heavily optimized for forty-plus years — will not. If that bet is right, somewhere in the late 2020s or early 2030s, enzymatic synthesis will become cheaper, longer, and cleaner than phosphoramidite chemistry, and the industry will undergo another platform shift comparable to the column-to-chip shift of the early 2010s. The companies that emerge from that shift could be a different set than the ones that dominate today. Twist's chip platform, optimized for phosphoramidite chemistry, could become a stranded asset if enzymatic chemistry takes over and doesn't need the same wafer format.

That is the structural risk to the current incumbents, and that is the bet the enzymatic synthesis companies are making. Time will tell which side wins. The analogy I want you to hold for this transition is: **enzymatic DNA synthesis is to phosphoramidite chemistry as electric vehicles are to internal combustion engines**. Not yet dominant. Clearly viable. Cleaner. Lower theoretical limits. Incumbents are scared but also positioned, with deep know-how and customer relationships, to make the transition if they choose. Whether the incumbents transition gracefully, get disrupted by upstarts, or co-exist with the new chemistry for a long time is a contingent question that the next decade will answer.

---

## SEGMENT 18 — The frontier: gigabase printing, DNA data storage, biosecurity

We are coming to the end. Let me close out by surveying three frontier topics that, in different ways, define where this industry is going next. They are: gigabase-scale synthesis, DNA data storage, and biosecurity screening.

**Frontier one: gigabase-scale synthesis.** The current commercial sweet spot for gene synthesis is one thousand to three thousand base pairs per construct. The current research frontier is one to ten million base pairs — entire microbial genomes, synthesized from scratch, assembled and booted up in a recipient cell. The Synthetic Yeast 2.0 project (Sc2.0), which I've mentioned, is rewriting the entire yeast genome — about twelve million base pairs — with designed redundancy reductions, codon swaps, and recoded sequences, and the project has reported substantial completion. The Venter Institute synthesized the first complete bacterial genome in 2010 at a cost of around forty million dollars. The same project today, with modern infrastructure, would cost on the order of two hundred thousand dollars. Within the next ten years, complete synthetic bacterial chromosomes will be a routine deliverable from commercial vendors, and synthetic plant and animal chromosomes — much larger and more complex — will move from research projects into vendor catalogs. The phrase "gigabase printing" — synthesizing a billion base pairs in a single project — is no longer absurd. It is the next decade.

**Frontier two: DNA data storage.** I've mentioned this in passing several times. The core idea is that DNA is, atom for atom, the densest known storage medium for digital information. One gram of dry DNA can in principle store an exabyte — a billion gigabytes — of data, and it remains readable for thousands of years at room temperature. The economics of DNA data storage are currently dominated by the cost of writing, which is to say, the cost of DNA synthesis. At seven cents per base, storing one bit of data costs about one and a half cents, which is several orders of magnitude more expensive than tape or hard drive storage. But the curve is moving fast. If enzymatic DNA synthesis brings the per-base cost down by another order of magnitude or two — which is plausible within ten years — DNA storage becomes competitive with archival magnetic tape for certain use cases, especially for ultra-long-term storage where the energy and refresh cost of conventional media starts to dominate. Companies like **Catalog DNA**, **Iridia**, **Twist** itself, and several startups are racing to commercialize this. The chemistry will be different — these applications often need many bases of low-quality, high-throughput synthesis rather than few bases of high-quality, low-throughput synthesis — and the formats may differ from gene synthesis as we know it. But it is the same fundamental technology stack: phosphoramidite or enzymatic, on a chip, scaled up to extraordinary throughput.

**Frontier three: biosecurity.** This is the one I want to dwell on for a moment because it is the place where the industry's technical trajectory and its societal responsibilities intersect most acutely.

\[Pause.\]

Every major gene synthesis vendor today screens incoming orders against databases of dangerous pathogen sequences. The screening is done by the **International Gene Synthesis Consortium**, a voluntary industry body whose members include Twist, IDT, Eurofins, ATUM, Genscript (partially), and several others. The IGSC maintains a curated database of sequences from regulated pathogens and toxins, and every member screens its incoming orders against that database before synthesis. If an order matches, the order is flagged. The vendor then attempts to verify the customer's identity, the customer's institutional affiliation, and the legitimate purpose of the order. If everything checks out, the order proceeds. If not, the order is refused and, in some cases, reported to authorities.

This is an entirely voluntary system. There is no global treaty requiring it. There is no global enforcement mechanism. In the United States, there is guidance from the Department of Health and Human Services recommending screening. In the European Union, there is similar guidance. In China and several other jurisdictions, the regulatory picture is more variable. The IGSC system is, in practice, the only thing standing between determined bad actors and synthetic versions of dangerous pathogens that no longer exist in nature.

The system has worked, mostly. To the public knowledge of this writing, there has not been a successful attempt to use commercial gene synthesis to produce a dangerous pathogen for malicious purposes. There have been **rehearsals** — academic and journalistic exercises in which researchers tried to order chunks of dangerous pathogens to test whether the screens would catch them — and the screens have, mostly, caught them. But the system has also been criticized as inadequate to the threats of the coming decade. As synthesis gets cheaper and faster, and as the design tools for engineering pathogens get more sophisticated (think AI-assisted protein design that can be applied to toxins as well as to medicines), the burden on the biosecurity screening system grows. The screens have to keep up with new pathogen variants, new functional domains, new ways of describing the same dangerous sequence to evade detection. It is a defender's game against an asymmetric and evolving threat.

There is an ongoing policy debate about whether voluntary screening should be replaced or supplemented by mandatory screening at the regulatory level — whether the major Western democracies should pass laws requiring all gene synthesis vendors operating within their borders to participate in a standardized screening regime, with audits, penalties, and international coordination. The arguments for are obvious. The arguments against include: regulatory burden, the risk of pushing customers to unscreened vendors in less-regulated jurisdictions, and the inherent difficulty of writing rules that keep up with a fast-moving technology. As of when this lecture is being written, the policy framework is in active flux, with proposed regulations in the US and EU at various stages of consideration.

\[Pause.\]

So that is where the industry stands, and where it is going. We started with the observation that, somewhere around 2010 to 2015, synthesizing a gene became cheaper than cloning it, and the field reorganized around that fact. We end with the recognition that gene synthesis is now a billion-dollar industry, a routine piece of biotech infrastructure, and a technology whose continued cost reduction is opening up entire new fields — directed evolution at scale, antibody libraries, synthetic chromosomes, DNA data storage — while simultaneously creating biosecurity challenges that the world is only just beginning to grapple with. The same technology that lets you order a gene for seventy dollars also lets a determined bad actor try to order a dangerous one. The screens are the only thing in between.

Let me close with one more analogy, the broadest one of the lecture. If oligonucleotide synthesis is, as I argued in the previous lecture, the most quietly important piece of infrastructure in molecular biology, then gene synthesis is the **mass production layer** built on top of that infrastructure. Oligo synthesis is the silicon wafer fab. Gene synthesis is the chip foundry that turns wafers into useful chips. And the application industries — pharmaceuticals, agriculture, materials science, data storage — are the consumer electronics that buy the chips. The whole tower stands because of phosphoramidite chemistry on a solid support, which lets us make defined-sequence DNA at all. But what we have built on top of that base, in the four and a half decades since Marvin Caruthers's chemistry, is an industry that has fundamentally restructured how biology is done.

When you walk out of this room, the next time you read a press release about a new biotech drug, a new gene therapy, a new mRNA vaccine, a new CRISPR application, a synthetic chromosome project, or a DNA-data-storage demo — somewhere underneath, almost certainly, there is a vendor in San Francisco or Coralville or Nanjing or Frankfurt or Paris who synthesized the DNA. They emailed back a tracking number. The package arrived in the mail. And the experiment that the press release describes started, fundamentally, with a pellet of synthetic DNA at the bottom of a tube.

That is what gene synthesis is. That is what it does. And that is why it matters.

Thank you. Questions?

\[Pause.\]

---

## APPENDIX — Glossary, key references, and further reading suggestions

The following items are not meant to be read aloud during the lecture. They are reference material for the instructor, and a starting point for students who want to follow up.

**Key terms used in this lecture:**

- **PCA (Polymerase Cycling Assembly):** A method for assembling a long DNA fragment from many short overlapping oligonucleotides using a thermostable polymerase and thermal cycling. The foundational gene synthesis assembly chemistry, first widely described by Stemmer and colleagues in 1995.
- **Gibson Assembly:** A one-pot, isothermal, three-enzyme method (exonuclease, polymerase, ligase) for joining DNA fragments with overlapping ends. Published by Daniel Gibson and colleagues in 2009.
- **Golden Gate Assembly:** A one-pot DNA assembly method using Type IIS restriction enzymes (most commonly BsaI) that cut outside their recognition sites, allowing for designed, scarless, hierarchical assembly. Published by Engler and colleagues in 2008.
- **Type IIS Enzyme:** A restriction enzyme that recognizes a specific sequence but cuts outside that sequence, allowing for programmable overhangs. BsaI, BbsI, SapI, and Esp3I are common examples.
- **Chip-Based Oligo Synthesis:** Phosphoramidite-based synthesis run in parallel on a flat substrate (silicon or glass) with thousands to millions of micro-wells, each producing a different oligonucleotide.
- **gBlock:** Trademark term used by IDT for a short (125-3000 bp) double-stranded synthetic DNA fragment delivered linearly. Comparable products exist from other vendors.
- **MutS-based Error Correction:** A strategy that uses the mismatch-recognition protein MutS to enrich for perfectly assembled DNA molecules by removing those with heteroduplexes.
- **NGS-Verified Cloning:** A strategy in which next-generation sequencing is used to identify perfect clones in large mixed pools, enabling cost-effective verification at scale.
- **Codon Optimization:** The redesign of a coding sequence to use codons preferred by a target expression host, while preserving the encoded protein sequence.
- **Clonal vs Pooled Output:** Whether a gene synthesis product is delivered as a single defined sequence (clonal) or as a heterogeneous mixture of designed variants (pooled).
- **Enzymatic DNA Synthesis (EDS):** Synthesis of DNA by a modified terminal deoxynucleotidyl transferase (TdT) enzyme using reversibly blocked nucleotides, in aqueous conditions, without phosphoramidite chemistry.
- **TdT (Terminal Deoxynucleotidyl Transferase):** A template-independent DNA polymerase used as the catalyst in enzymatic DNA synthesis.
- **IGSC (International Gene Synthesis Consortium):** A voluntary industry body whose members screen incoming gene synthesis orders against a curated database of regulated pathogen and toxin sequences.

**Companies referenced:**

- **Twist Bioscience** (Founded 2013, US). Chip-based gene synthesis at scale. Founder: Emily Leproust.
- **Integrated DNA Technologies (IDT)** (Founded 1987, US). Column-based oligos, gBlocks, broader synthesis services. Acquired by Danaher in 2018.
- **Genscript** (Founded 2002, China). Full-stack contract research with gene synthesis as core service.
- **Eurofins Genomics** (European division of Eurofins). Genes, oligos, and Sanger sequencing services with European fulfillment.
- **ATUM** (formerly DNA 2.0). Codon optimization and gene synthesis with design emphasis.
- **Gen9** (Founded 2009, US, defunct). Founded by George Church, Joe Jacobson, and Drew Endy. Acquired by Ginkgo Bioworks in 2017. Cautionary tale of the chip-based synthesis race.
- **Codex DNA** (formerly SGI-DNA). Benchtop gene synthesis via the BioXp instrument.
- **DNA Script** (Founded 2014, France). Benchtop enzymatic DNA synthesis (SYNTAX).
- **Molecular Assemblies** (Founded 2013, US). Enzymatic DNA synthesis service model.
- **Ansa Biotechnologies** (Founded 2020, US). Long-read enzymatic gene synthesis.
- **Camena Bioscience** (UK). Enzymatic synthesis approach.
- **Tsingke** (China). Chinese chip-based gene synthesis vendor.

**Key papers and historical references:**

- Stemmer WP et al. (1995). "Single-step assembly of a gene and entire plasmid from large numbers of oligodeoxyribonucleotides." Gene 164(1):49-53. The PCA founding paper.
- Gibson DG et al. (2009). "Enzymatic assembly of DNA molecules up to several hundred kilobases." Nature Methods 6(5):343-345.
- Engler C, Kandzia R, Marillonnet S (2008). "A one pot, one step, precision cloning method with high throughput capability." PLoS ONE 3(11):e3647.
- Cello J, Paul AV, Wimmer E (2002). "Chemical synthesis of poliovirus cDNA: generation of infectious virus in the absence of natural template." Science 297(5583):1016-1018.
- Gibson DG et al. (2010). "Creation of a bacterial cell controlled by a chemically synthesized genome." Science 329(5987):52-56.
- Carlson R. "On DNA and Transistors." Various essays from 2003 onward tracking the cost curve of DNA synthesis versus Moore's law.

**Further reading suggestions for students:**

For students who want to go deeper, the most accessible jumping-off points are: (a) Rob Carlson's "Biology Is Technology" book and his ongoing blog, which has tracked the cost curve of DNA synthesis longer than anyone; (b) the technical white papers published by Twist Bioscience, IDT, and the enzymatic synthesis startups, which are surprisingly readable; (c) the annual reports from the International Gene Synthesis Consortium, which document the state of biosecurity screening; (d) the Synthetic Yeast 2.0 project's published papers, which are the best worked example of large-scale designed genome assembly currently in the literature; and (e) the recent reviews on enzymatic DNA synthesis, of which there are several good ones from 2022 to 2024.

For students more interested in the policy and biosecurity side, the recent reports from the Nuclear Threat Initiative's Bio program, the Open Philanthropy biosecurity grant writeups, and the proposed regulatory texts in the US (HHS guidance) and EU (proposed Synthetic Biology Act drafts) are the best places to follow the active debate.

The field is moving fast enough that anything assigned as a textbook will be partially outdated within two years. Going to the primary literature, the company white papers, and the policy reports is the only way to stay current.

End of lecture.


