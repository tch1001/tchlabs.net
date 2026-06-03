# Minimal Genomes: JCVI-syn1.0, syn2.0, syn3.0 — Building a Cell from Scratch

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, around 140 wpm, and it lands nearer 85 minutes, leaving more room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The question: what is the minimum gene set for a living cell?

Alright, let's get started. Good morning, everyone. For the next two hours, we are going to talk about minimal genomes, and specifically about a remarkable run of experiments done at the J. Craig Venter Institute between roughly 2007 and 2016 — experiments which, depending on how you squint, either built a living cell from scratch or didn't, but which in any case represent the most serious effort anybody has ever made to answer a deceptively simple question.

Here is the question. **What is the minimum gene set required for a living, self-replicating cell?**

That's the bumper sticker for today. We are going to spend two hours unpacking it. But that single sentence is the whole show. How many genes does a cell need? Not how many does a particular cell happen to have — _E. coli_ has about 4,500, you have about 20,000 — but how few could you possibly get away with and still call the thing alive? Is there an irreducible minimum? Is it a hundred genes? Five hundred? A thousand? Does the answer depend on the environment? On what you mean by "alive"? On whether you let the cell cheat by importing nutrients its ancestors used to make for themselves?

If you walk out of here today and a friend asks you what the minimal genome project was, I want you to be able to say something like this. There is a free-living bacterium called _Mycoplasma_ that already has one of the smallest natural genomes on Earth — a few hundred to a thousand genes, depending on the species. Craig Venter's team took _Mycoplasma_, chemically synthesized its entire genome from scratch in a chemistry lab, transplanted that synthetic genome into the empty shell of a different _Mycoplasma_ cell, and watched the cell boot up and start dividing. That was 2010. They called it JCVI-syn1.0 — the first cell whose entire genome had been written, not copied. Then over the next six years they started deleting genes, asking which ones the cell could live without, until in 2016 they arrived at a stripped-down version called JCVI-syn3.0, which has only 473 genes. Smallest known genome of any self-replicating organism. And the punchline — the part that makes the story funny and humbling at the same time — is that of those 473 genes, somewhere around 149 of them have completely unknown function. The cell needs them. Delete any one of them, and it dies. But we have no idea what they do.

\[Pause.\]

So that is where we are headed. Let me give you the structure of the lecture before we start digging in.

We are going to begin by asking why this question — what is the minimum gene set — is even an interesting question to ask. Then we are going to meet _Mycoplasma_, the genus of bacteria that nature has already minimized for us. We will follow the chronology of the JCVI work: the 2008 demonstration that you could chemically build a bacterial chromosome and propagate it in yeast, the 2010 demonstration that you could transplant a synthetic chromosome into a recipient cell and have it take over, the 2016 demonstrations of syn2.0 and syn3.0 and the surprisingly weird-looking syn3A. Along the way we will dig into what kinds of genes survive the cull — replication, transcription, translation, metabolism, membrane, division — and which kinds don't. We will spend a whole segment on the 149 mystery genes, because they are, in my opinion, the most philosophically interesting part of the whole project. Then we will pull back and talk about the broader context: the GP-write project, the synthetic yeast chromosome project, the difference between editing biology and writing biology, the industrial use of streamlined genomes, and the ethical and philosophical questions about what it means to "create life." We will end at the frontier — recoded organisms, designer chassis cells, the next twenty years.

Three things I want you to be able to do by the end. First: explain to a curious friend what JCVI-syn3.0 is and why it matters, in a couple of sentences, using the analogies I'm going to teach you. Second: name roughly which gene categories survive the cull to 473 and give an honest answer about which ones we still don't understand. Third: when you next read a press release about somebody having "created a synthetic cell," you should be able to read between the lines and tell what they actually did. Because that phrase — "synthetic cell" — has been used to mean a half-dozen different things, and most of them are misleading in some way.

\[Pause.\]

Now let me give you the analogy I'm going to come back to over and over again today. It is this. **Think of building a minimal genome as the biological equivalent of figuring out the smallest possible operating system.**

You sit down at your laptop. The thing has gigabytes of operating system on it. Most of that code is not strictly necessary for the machine to run. There are drivers for printers you don't own, support for languages you don't speak, accessibility features you've never enabled, networking protocols you've never used. Underneath all that is something much smaller — the kernel — the actual core that handles memory, scheduling, hardware, the irreducible bits of OS-ness without which the machine cannot function at all. People have, in computer science, spent decades trying to minimize kernels. There are research kernels with a few thousand lines of code. The question of how small you can make a useful kernel and still call it an operating system is a real and recurring problem in software engineering.

Now apply that exact framing to biology. A normal bacterium — _E. coli_, _Bacillus subtilis_ — has thousands of genes. Most of those, in any given environment, are not being used. There are genes for living in cold conditions, for using exotic carbon sources, for responding to stresses the cell may never encounter, for fighting off viruses that may not be present, for competing with other bacteria. In a comfortable lab medium, with all the nutrients provided, the cell is dragging around an enormous amount of evolutionary baggage. So the question becomes: what's the kernel? What is the absolute irreducible minimum software the cell needs in order to just _live_ — replicate its DNA, copy its DNA into RNA, translate that RNA into proteins, maintain a membrane, generate energy, divide?

That's the question Venter and his collaborators set out to answer experimentally. And the way they answered it was, in the deepest sense, by writing the kernel down — by chemically synthesizing the DNA letter by letter and trying it in a cell.

Let's go meet the organism they chose.

---

## SEGMENT 2 — Meet Mycoplasma: nature's already-minimal bacterium

If you wanted to start a project to find the minimal genome of a cell, you would not start with _E. coli_, and you certainly would not start with anything fancier than that. Four and a half thousand genes is too many. You'd be deleting one gene at a time for the rest of your career and your grandkids' careers, and the search space — which subsets of those 4,500 are essential, conditional on every other choice — is unmanageable. You want to start with an organism that is already small. You want to start with something where evolution has already done most of the trimming for you.

The genus _Mycoplasma_ is the answer. _Mycoplasma_ is a group of tiny, parasitic bacteria. They live inside other organisms — in human respiratory tracts, in goat udders, in plant phloem — feeding off the nutrients the host is producing. Because they live in such rich environments, they have evolved a remarkable amount of laziness. Their hosts make amino acids for them, so they have lost the genes for making amino acids. Their hosts make nucleotides for them, so they have lost the genes for making nucleotides. Their hosts handle most of the chemistry of living. _Mycoplasma_ just imports the finished products and uses them.

The result is that _Mycoplasma_ species have, by far, some of the smallest genomes of any free-living organisms on Earth. _Mycoplasma genitalium_, a human pathogen, has roughly 525 genes. _Mycoplasma mycoides_, a goat pathogen, has about a thousand. By comparison, the bacterium in your gut, _E. coli_, has about 4,500. Yeast has about 6,000. You have about 20,000. _Mycoplasma_ is, in genomic terms, a stripped-down economy car. Most of the parts have been removed because the engine doesn't need them when the road is downhill all the way.

A few other features of _Mycoplasma_ that make it a great starting point for a minimal-genome project, and a few that make it a pain in the neck.

The great features. _Mycoplasma_ has no cell wall. Most bacteria are wrapped in a tough peptidoglycan armor; _Mycoplasma_ has just a membrane, like an animal cell. That makes it easier to manipulate physically. It uses an unusual genetic code — UGA, which is normally a stop codon, codes for tryptophan in _Mycoplasma_. We will come back to this, because it matters for the synthesis story. And, critically, _Mycoplasma_ has a tiny genome, in the range of half a million to a million base pairs, which is small enough to actually contemplate synthesizing.

The painful features. _Mycoplasma_ grows slowly. Some species take days to form a colony, where _E. coli_ takes hours. _Mycoplasma_ is finicky about its nutrients — you have to provide it with a rich medium full of amino acids, nucleotides, lipids, and fatty acids that it cannot make for itself. And _Mycoplasma_ has poor genetic tools. The community has spent decades developing the techniques that _E. coli_ researchers take for granted — transformation, selection, mutagenesis — and many of those techniques work badly or not at all in _Mycoplasma_. So you are choosing a bug whose genome is small but whose laboratory tractability is, frankly, terrible.

\[Pause.\]

Here is the analogy. **Take _Mycoplasma_ as the simplest free-living bacteria you can find, and start removing genes until it dies.** That is, in essence, the strategy. Start with something small, then trim further. The question is how to trim — and there are two basic approaches.

The first approach is what's called **transposon mutagenesis**. You take a transposable element — a piece of DNA that can hop around the genome and insert itself randomly — and you let it insert into thousands of cells. In each cell, some random gene gets disrupted by the transposon. If the disrupted gene is essential, that cell dies. If the disrupted gene is non-essential, the cell survives. Then you sequence which transposon insertions you find in the surviving cells, and the genes that never have a survivor with an insertion in them are, by inference, essential. The genes that have lots of insertions in them are non-essential. This is called Tn-seq, or transposon sequencing, and it gives you a list of essential genes — but with caveats. A gene might be essential in this medium but not in another. A gene might be redundant with another, so disrupting either one alone is tolerated but disrupting both is lethal. Transposon mutagenesis gives you a guide, not a final answer.

The second approach is the one Venter's team eventually committed to, and the one that gives this lecture its drama. **You design what you think a minimal genome should look like, you chemically synthesize that genome from scratch, and you put it into a cell to see if it works.** That is the synthesis approach. Instead of editing an existing genome by deletion, you _write_ a new one. The advantage is that you can change anything you want — you can swap codon usage, you can rearrange gene order, you can leave watermarks in the DNA. The disadvantage is that you have to synthesize, on the order of, half a million to a million base pairs of DNA, which in 2007 was at the very edge of what was technically possible and frankly cost a great deal of money.

The Venter team did both. They used transposon mutagenesis to figure out which genes were essential, they iterated their designs, and then they wrote out their best guess at a minimal genome and stuffed it into a cell. We are going to walk through that whole process across the next several segments, but let me give you the headline up front, because it'll help orient you.

In 2008, they showed they could chemically build the genome of _Mycoplasma genitalium_ — about 583,000 base pairs — out of synthetic oligonucleotides, assembling it inside yeast cells. That was the first proof of concept. In 2010, they showed they could take a synthesized genome of _Mycoplasma mycoides_ — about 1.08 million base pairs — transplant it into a recipient _Mycoplasma capricolum_ cell, and have that cell start producing _M. mycoides_ proteins and dividing as if it had become a different species. That was the famous "first synthetic cell." JCVI-syn1.0. Then over the next six years they iteratively whittled it down, and in 2016 they published JCVI-syn3.0, with 473 genes, the smallest known self-replicating genome.

So the genus _Mycoplasma_ is, in this story, the raw material. The biological clay. The cells we are going to start with, and the cells we are going to try to minimize, are members of this very small, very fastidious, very awkward little group of organisms that nature has already half-prepared for us. Now let's go meet the first big technical leap, in 2008.

---

## SEGMENT 3 — 2008: Building a bacterial chromosome in a yeast cell

The first thing the JCVI team had to prove was that you could chemically build an entire bacterial chromosome — not a single gene, not a short stretch, but the whole thing. Until then, the largest piece of DNA anybody had ever assembled from synthetic oligonucleotides was a few tens of thousands of base pairs. A _Mycoplasma genitalium_ genome is 583,000 base pairs. That's an order of magnitude bigger than anything that had been done before. It was, in 2007, an open question whether the existing techniques could be scaled up to that range at all.

Let me walk you through how they did it, because the strategy is beautiful, and it tells you a lot about how modern DNA assembly works.

You start with synthetic oligonucleotides. These are short pieces of DNA — typically a few tens to a few hundred base pairs long — that you can order from a commercial supplier. A machine somewhere chemically synthesizes them one base at a time. The technology is well established, and in 2007 it was already affordable enough to order tens of thousands of oligonucleotides for a single project. That gave the JCVI team their building blocks.

Now, individually, those oligonucleotides are far too short. You can't just stitch hundreds of thousands of them together in a single reaction; it would never work. So you do it in stages. You take, say, fifty oligonucleotides that overlap with each other and span about 5,000 base pairs of your target sequence. You mix them together with some enzymes, and they self-assemble — the overlaps find each other, polymerase fills in the gaps, ligase seals the seams — and out comes a 5,000-base-pair piece. You repeat that with a different set of oligonucleotides, and you get a different 5,000-base-pair piece. Do that 100 times and you have 100 different 5,000-base-pair pieces.

Now you do the assembly again, one level up. You take groups of those 5,000-base-pair pieces, each set chosen so that adjacent pieces overlap, and you assemble them into 25,000-base-pair pieces. Now you have a smaller number of larger pieces. Do it again: 25,000 becomes 75,000. Do it again: 75,000 becomes 200,000. Do it again: 200,000 becomes 600,000.

This is called **hierarchical assembly**. It is exactly like how you build a large building out of smaller parts: you don't try to fit every brick in place in one pass, you make wall panels, you make rooms, you make floors, you make wings, you stack the wings to make the building. At each stage you check that the piece is correct before moving on. The advantage is that at every level, the components are still small enough to handle with established lab techniques — small enough to clone into bacterial plasmids, small enough to verify by sequencing, small enough to PCR if you need to.

\[Pause.\]

But here is the catch the JCVI team ran into. Once your assembled pieces get past about 150,000 to 200,000 base pairs, _E. coli_ — the bacterium normally used to clone things — does not want to hold them anymore. The plasmids get too big. They become unstable. The cells either lose them or rearrange them. You can't reliably propagate a half-megabase circle of DNA inside _E. coli_; it was a brick wall.

So the JCVI team did something elegant. They moved up to a different host: **yeast**. _Saccharomyces cerevisiae_, baker's yeast, will happily carry around enormous pieces of DNA as so-called yeast artificial chromosomes. Yeast has its own native chromosome-handling machinery, with origins of replication and centromeres and telomeres, and it doesn't seem to mind if you hand it a few hundred kilobases of extra DNA — it'll treat it like one of its own chromosomes, replicate it during cell division, and pass it down. Even better, yeast has an extraordinary capacity to perform DNA assembly inside itself. If you give yeast a bunch of DNA fragments with overlapping ends, yeast's own homologous recombination machinery will glue them together inside the cell. You can hand yeast a couple dozen fragments and let the yeast assemble them, in vivo, into one giant molecule. The yeast does the work for you.

So the final stages of the _Mycoplasma genitalium_ assembly happened inside yeast cells. They took six big chunks of the chromosome — about 100,000 base pairs each — handed them all to a yeast cell, let the yeast recombine them into one circular molecule, and then verified that the resulting molecule was the full 583,000-base-pair _Mycoplasma_ chromosome. It worked. It was published in _Science_ in January 2008.

That paper, by Gibson and colleagues, established something profound: **you could now build, from chemical building blocks, a chromosome the size of a bacterial genome.** Not just a gene. Not just a cluster. A whole chromosome. The technology stack — oligonucleotide synthesis, hierarchical assembly, yeast as the final integrator — could in principle scale to even larger genomes.

\[Pause.\]

A small but important detail about that 2008 paper. The team did not just copy the _Mycoplasma genitalium_ sequence letter for letter. They put **watermarks** into the DNA. They encoded short messages — names of the lab members, identifying tags — using base substitutions in non-essential parts of the genome. They picked spots where the changes would not break the genes, and they used a custom encoding to translate text characters into DNA letters. So the assembled chromosome was identifiable, by sequencing, as the synthetic version rather than the natural version. If a stray sample got mixed up in a lab somewhere, you could tell which one was theirs.

That's a small detail in 2008, but it foreshadows the much more famous version of it that we'll see in the 2010 paper. The watermarks are, in the analogy I am going to come back to, **a signature in the DNA**. The point is not just that you can build a chromosome, the point is that you can make it _yours_, identifiably so, by writing things into it that no natural process would ever have produced. It is the equivalent of carving your initials into a tree, except the tree is alive and the carving is in its DNA.

Now, in 2008, the chromosome built inside yeast had not yet been put into a cell to see if it would actually function. It was sitting there as a passive molecule. The next question — the much harder question — was whether you could transplant such a chromosome into a recipient cell and have it take over. That's the 2010 story, and it's where the lecture gets dramatic.

---

## SEGMENT 4 — 2010: JCVI-syn1.0 and the "first synthetic cell"

So in 2008, the Venter team had shown that they could build a bacterial chromosome from scratch. The chromosome existed in a yeast cell. But it had not done anything biological yet — it hadn't replicated, hadn't been transcribed, hadn't produced proteins. To turn that synthetic chromosome into a synthetic cell, they had to get the chromosome out of yeast and into a recipient _Mycoplasma_ cell, where the chromosome's genes could actually be expressed.

This is the **genome transplantation** problem, and it is much harder than it sounds. You're trying to take an enormous, fragile piece of DNA — over a million base pairs in a single circular molecule, easily snapped if you so much as look at it the wrong way — and physically transfer it from one cell type into another. The recipient cell already has its own genome. You have to somehow get yours in there and have the recipient's machinery start reading your DNA instead of its own. You have to convince the recipient cell to, in effect, undergo a genetic transplant — change species — based on the DNA you handed it.

The JCVI team had actually done a smaller version of this trick back in 2007. They'd shown that you could transplant a natural _Mycoplasma mycoides_ chromosome — extracted from a _Mycoplasma mycoides_ cell, intact, by very gentle handling — into a _Mycoplasma capricolum_ recipient, and the recipient cell would, after a generation or two, become indistinguishable from _Mycoplasma mycoides_. The species change worked, with a natural chromosome. But that proved it could be done. The next question was whether it would work with a synthetic chromosome — one that had been built in a chemistry lab, propagated in yeast, and then extracted.

The 2010 paper, also led by Dan Gibson and published in _Science_, was the answer. They built a synthetic version of the _Mycoplasma mycoides_ genome — 1.08 million base pairs — using the same hierarchical assembly approach as the 2008 paper, ending in yeast. They extracted the synthetic chromosome from yeast. They transplanted it into a _Mycoplasma capricolum_ recipient cell whose own genome had been destroyed. And they watched. The recipient cell, with the synthetic chromosome now inside it, started reading the new genome, making _M. mycoides_ proteins, replicating, dividing. The cells changed color on the agar. They acquired the surface antigens of _M. mycoides_. After enough divisions, every component of the cell — every protein, every membrane lipid built by an enzyme encoded on the new chromosome — was a product of the synthetic genome. The cell was, in a real sense, running on synthetic software.

They called it **JCVI-syn1.0** — the J. Craig Venter Institute synthetic cell, version 1.0. And the world's press, with some encouragement from the Venter Institute's publicity machine, called it the first synthetic cell. The headlines were enormous. President Obama asked his bioethics commission to weigh in. The Vatican issued a statement. Magazine covers all over the world had pictures of bacterial colonies with captions like "Created by humans."

\[Pause.\]

Let me unpack what is and is not true about those headlines, because the language really matters here.

What is true: the genome was synthetic. Every base pair of the DNA that was now driving the cell had been chemically synthesized in a lab. The DNA had been written, not copied from a parent cell. It had been put into a recipient through human intervention. The cell that came out the other end was running on software that humans had typed into a computer and then realized in chemistry.

What is not true: the cell was not built from scratch. The recipient _Mycoplasma capricolum_ cell — the cellular shell that received the synthetic DNA — was a normal, naturally evolved cell. Its membrane, its ribosomes, its enzymes, its metabolites, all of those existed before the synthetic DNA arrived. The synthetic genome had to boot up by being read by pre-existing machinery. So in the strictest sense, what was created was a cell with a synthetic _genome_, not a cell built from synthetic parts. The genome was synthetic; the cell was a hybrid.

This distinction matters. There's a real difference between "we built the DNA from scratch" and "we built the whole cell from scratch." The 2010 paper did the first thing. Nobody has yet done the second. And there's a reasonable argument that doing the second thing — assembling an entire functioning cell from individually purified molecular components — would be much, much harder than what was actually done. Cells are not just DNA. Cells are a self-sustaining choreography of molecules, and the choreography itself takes a parent cell to set up. The synthetic genome was the script for the play; the recipient cell was the theater, the actors already on stage, the props in their right places. You can swap scripts. You can't, yet, build a theater from blueprints.

But headlines being what they are, "first synthetic cell" is what stuck.

\[Pause.\]

Now let's talk about the watermarks. Because this is where the story acquires a kind of personality.

When the JCVI team designed the synthetic _M. mycoides_ genome, they did the same trick they'd done in 2008, but on a grander scale. They encoded **four explicit watermarks** into the DNA, in non-functional intergenic regions, using a custom alphabet that mapped letters and punctuation to particular DNA sequences. The watermarks contained, among other things: the names of the 46 scientists who had contributed to the project. An email address. A URL. And three quotations — one from James Joyce ("To live, to err, to fall, to triumph, to recreate life out of life"), one from J. Robert Oppenheimer's biographer ("See things not as they are, but as they might be"), and one from Richard Feynman ("What I cannot build, I cannot understand").

These watermarks are pure flourish. They serve no biological function. They were placed deliberately in positions where they wouldn't disrupt any genes. The cells were just as alive with the watermarks as they would have been without. But Venter put them there, and the entire scientific and journalistic world spent weeks decoding them, and they made the synthesis story into something more like art than like industrial chemistry.

The analogy I want to give you for the watermarks: **Venter encoded names, quotes, and email addresses in the synthetic DNA — proof of intent, a signature in the genome.** It is the assertion, written in the cell itself, that this was a designed thing. The decoding key was published. Anyone could check. The cell carried its own provenance in its DNA. If you found a colony of these bacteria growing in a sample, you could sequence it and read out "Daniel Gibson" or "What I cannot build, I cannot understand" in the chromosome. That has never been true of any other cell on Earth.

There is also a darker thing being said by those watermarks. There is a claim, embedded in the decision to write a Feynman quote into a bacterium, that the act of synthesis is the act of understanding. If you cannot build it, you do not understand it. Venter is implicitly saying: we built this, therefore we understand it. We will come back to that claim in Segment 16, because as we are going to see, the syn3.0 results show that the claim is not quite true. We can build the thing and still not understand it. The watermarks were premature.

But that's for later. For now, the headline is this. In 2010, the JCVI team demonstrated, irrefutably, that you could chemically synthesize an entire bacterial chromosome and have it run a cell. The technology worked. The cells lived. The watermarks proved it. And the next question — the question they had been quietly working on for years — was whether you could now take this synthetic-genome platform and use it to ask the minimum gene set question. That's Segment 5.

---

## SEGMENT 5 — JCVI-syn2.0: the first serious trim

So now you have a platform. You can design a genome in a computer, synthesize it, transplant it into a cell, and watch the cell come to life. That's powerful. That means you can ask a particular question that you couldn't ask before. The question is: which genes can I leave _out_?

Suppose you delete a gene from your design before you synthesize. Then synthesize the trimmed genome. Then transplant it. If the resulting cell grows, that gene was not essential. If the resulting cell doesn't grow, that gene was essential. You have, in effect, a way to test whether a gene is essential by direct experiment. And not just one gene at a time — you can test combinations. You can delete a hundred genes at once, see if the cell still lives, and find out something about the overall budget of essential biology in a way that single-gene knockout experiments can never quite reach.

That's the strategy the JCVI team committed to. The 2010 syn1.0 was not the end product. It was the proof of concept. It proved that the platform — design, synthesize, transplant — actually worked. From 2010 onwards, the team's real goal was to use that platform to build the smallest possible genome that could still support a self-replicating cell. The minimal genome.

Their first serious attempt at the trim was a genome they called **JCVI-syn2.0**.

\[Pause.\]

Here is how the trim actually proceeded. It was not as simple as "look at the gene list, cross off the ones that look unnecessary, and synthesize what's left." That approach was tried and it didn't work. Many genes that look unnecessary turn out to be essential. Many essential genes are essential in ways that aren't obvious from the annotation alone. So the team took a more iterative approach.

They started with the syn1.0 genome — the synthetic _Mycoplasma mycoides_ chromosome, 1.08 million base pairs, about 901 genes. They divided the genome into eight roughly equal chunks. Then, for each chunk, they did an experiment: they used transposon mutagenesis on the syn1.0 cells to find which genes in that chunk were tolerant of disruption. Any gene that you could insert a transposon into, and have the cell still grow, was at least a candidate for being non-essential. They built a tentative list of candidates for deletion in each chunk.

Then they designed a trimmed version of that chunk, with the candidate non-essential genes removed. They synthesized the trimmed chunk. They mixed it into the synthetic genome — using the yeast assembly system — replacing the original chunk with the trimmed version. And they transplanted the resulting genome and asked: does it work?

When it worked, they kept the trim. When it didn't, they had to figure out which deletion they had made was the killer, restore it, and try again. This process took years. It is not glamorous work. It is years of failed cells, ambiguous results, transplants that didn't take, designs that needed to be retried. The team came up with a clever vocabulary to describe what was happening — they referred to genes as "essential," "quasi-essential" (cells could live without them but grew poorly), and "non-essential" (cells didn't care). Many of the difficult judgement calls were about quasi-essential genes. Did you really want to keep them? They cost genome space. But removing them gave you a cell that limped along instead of growing.

\[Pause.\]

JCVI-syn2.0 was the result of about three or four years of this iterative trimming. It was published as part of the same 2016 paper as syn3.0, but it represents an earlier stage of the trim. Syn2.0 has about 576 genes — down from syn1.0's roughly 901, so a serious reduction, but still much larger than what was about to come.

Syn2.0 is a useful intermediate because it tells you something about how the trim went. The first 325 or so genes were comparatively easy to remove. Many of them were straightforwardly non-essential — duplicated transporters, unused metabolic enzymes, genes for stress responses the cell wasn't going to encounter in the lab. Stripping those out brought the gene count from 901 to about 576 without any major drama. The cell grew slowly but it grew.

But once you got to syn2.0, the trim got dramatically harder. Every additional deletion was now in a gene that was either essential or essential-in-context. And many of the obvious candidates — the genes that, by their annotations, looked like they should be removable — turned out to be quietly important for things the team hadn't predicted. The slope of "genes removed per month" flattened out. The team had hit the part of the genome where every gene mattered, or seemed to matter.

This is, in the analogy I'm building, **the point in operating system minimization where you've removed all the bloat and the only things left are the kernel and the things you don't quite understand about the kernel.** Removing the printer drivers is easy. Removing parts of the scheduler is hard. Removing the memory manager is essentially impossible without breaking everything. Syn2.0 was the cell with the printer drivers removed. The kernel was still mostly intact.

To go further, the team had to be more aggressive — and more clever. They had to design from the inside out, not just trim from the outside in. They had to combine transposon mutagenesis data, careful manual annotation, and a willingness to delete genes whose function they did not understand and see if the cell died. That last willingness — to delete the mystery genes and risk it — turned out to be both necessary and, in important ways, frustrating. We'll get to that in Segment 7. But first, let me tell you about syn3.0, which is what came out the other side of all that work.

---

## SEGMENT 6 — JCVI-syn3.0: 473 genes, the minimum so far

So in March of 2016, the JCVI team published a paper in _Science_ — Hutchison, Chuang, Noskov, and colleagues — titled "Design and synthesis of a minimal bacterial genome." That paper announced **JCVI-syn3.0**. Four hundred seventy-three genes. About 531,000 base pairs of DNA. The smallest known self-replicating genome of any organism ever characterized.

Let's pause and absorb that number. **Four hundred seventy-three genes.** A free-living self-replicating cell with fewer than five hundred genes. That's smaller than _Mycoplasma genitalium_, the natural champion of small genomes at 525 genes. It's a third of what _Mycoplasma mycoides_ — the starting point — had. It is about a tenth of what _E. coli_ has. It is about a fortieth of what you have.

This is what the analogy I keep coming back to looks like in practice. **You took _Mycoplasma_, the simplest free-living bacteria, and started removing genes until it almost died. Four hundred seventy-three is where it almost dies. Take out any one more, and it does.**

Now, "the minimum" needs a careful asterisk. JCVI-syn3.0 is the smallest known genome _for a cell grown in a rich laboratory medium, given every nutrient it could possibly need, with no environmental stress_. If you put syn3.0 in any natural environment, it would die instantly. It cannot make most of the amino acids it needs. It cannot make most of its lipids. It cannot deal with temperature changes or pH changes or competition from other organisms. The minimal genome is minimal _conditionally_ — conditional on a particular environment. Move the cell to a different environment, and the minimum becomes a different number. That conditional has been a sore point in some of the press coverage, where "smallest genome" got reported as if it were an absolute biological floor. It isn't. It's the floor _for this environment_.

\[Pause.\]

Still, even with that asterisk, 473 is an astonishing number. And the question that everybody — the team, the press, the field — wanted to know is: **what's in it?**

What does the irreducible core of a cell consist of? When you boil biology down to the absolute minimum, what's left?

The answer, in broad strokes, is what you'd expect, plus one big surprise. The genes in JCVI-syn3.0 break down into about six categories.

**Category one: DNA replication and repair.** A cell has to copy its DNA. So you need DNA polymerase, you need primase, you need helicase, you need single-strand binding protein, you need ligase, you need topoisomerase. You need the proteins that load the polymerase onto the DNA. You need the proteins that handle the lagging strand. Syn3.0 has all of these. About 35 genes, roughly seven percent of the genome, dedicated to DNA replication and repair. This is non-negotiable. A cell that can't copy its DNA can't divide. A cell that can't repair damage will accumulate mutations and die.

**Category two: transcription.** A cell has to copy its DNA into RNA. So you need RNA polymerase. You need the sigma factors that target the polymerase to the right promoters. You need termination factors. Syn3.0 has these, about 20 or so genes' worth, including a minimal RNA polymerase and the most essential sigma factor.

**Category three: translation.** A cell has to translate RNA into protein. This is by far the biggest category in the minimal genome. You need all 20 amino acid aminoacyl-tRNA synthetases — the enzymes that load amino acids onto tRNAs. You need a full set of tRNAs. You need ribosomal RNAs. You need the dozens of ribosomal proteins — about 50 of them, give or take. You need initiation factors, elongation factors, release factors. Syn3.0 has the whole apparatus. Translation accounts for roughly 40% of the minimal genome — almost two hundred genes — which tells you something important. **The protein synthesis machine is the single biggest commitment any cell makes.** It is, by gene count, the largest subsystem of life.

**Category four: metabolism and energy.** A cell has to generate ATP, build the bases for DNA and RNA from whatever precursors it can import, and handle the basic biochemistry of being alive. Syn3.0 is, as I said, parasitically dependent on its environment for most of its building blocks, so it doesn't need full biosynthesis pathways. But it does need glycolysis. It does need a few salvage pathways for nucleotides. It does need the basics of lipid handling. About 80 genes' worth, roughly 17%, dedicated to keeping the cell's chemistry running.

**Category five: cell membrane.** A cell needs a membrane. The membrane needs proteins to handle nutrient uptake, to handle waste export, to maintain ionic balance, to do quality control on misfolded membrane proteins. About 80 genes for the membrane, including the transporters that bring in all the precursors syn3.0 cannot make for itself.

**Category six: cell division.** A cell has to divide. You need at least some of the machinery — FtsZ, the bacterial tubulin homolog that forms the contractile ring at the division site, and a handful of associated proteins. Syn3.0 has these. Although, as we'll see in Segment 10, the division machinery in syn3.0 turned out to be weirdly incomplete.

\[Pause.\]

So that's roughly five of the six categories. About 80% of the 473 genes have known biochemical functions. They are doing the things you'd expect a cell to do. Replication, transcription, translation, metabolism, membrane maintenance, division. Add them up, and you get a story that mostly fits with our textbook picture of what a cell does.

But then there's the last category, which I have been saving as a punchline, and which is the part of syn3.0 that I think makes the whole project unforgettable.

**Category seven: 149 genes whose function nobody knows.**

About a third of the minimal genome — 149 out of 473 — is genes of unknown function. They have no clear homologs in well-studied organisms. They don't fit any known biochemical pathway. They don't have characteristic protein domains we recognize. We just have a sequence of DNA, predicted to encode a protein of some particular length, and we know — because deleting it kills the cell — that the protein is essential. But we don't know what it does. We don't know what reaction it catalyzes, what structure it forms part of, what process it regulates. We just know the cell can't live without it.

That number, 149, is what I want you to remember. **One third of the minimum gene set for a living cell is genes we do not understand.**

That is the great mocking punchline of the whole minimal-genome project, and we are going to spend most of the rest of this lecture grappling with it.

But first, let me give you a sharper version of the analogy. **JCVI-syn3.0 is the irreducible minimum currently known. Four hundred seventy-three genes. Replication, transcription, translation, metabolism, membrane, division. Plus 149 mystery genes we can't delete but don't know why.** That's the cell. That's what we got down to.

The first half of this lecture has been about how we got there. The second half is about what that gets us. Let's start by going deeper into the 149.

---

## SEGMENT 7 — What's actually in syn3.0: a tour of the kernel

Let's slow down and look at the 473 genes in a little more detail, because I want you to come away with a real feel for what a minimal cell actually has in it, not just a list of categories. Imagine I'm walking you around the inside of a syn3.0 cell with a flashlight. Let me show you what you see.

The cell is small. Even by bacterial standards, _Mycoplasma mycoides_ is small — about half a micrometer across — and syn3.0 is, if anything, smaller and more irregular. We'll come back to the morphology problem in Segment 10. For now, picture a roughly round sack of cytoplasm, a few hundred nanometers across, surrounded by a single lipid membrane.

Now let's go through what's inside.

The largest single complex by mass, probably, is the **ribosome population**. The cell makes ribosomes constantly. Each ribosome is a machine of about 50 proteins plus three pieces of ribosomal RNA, the entire assembly being a couple of megadaltons of protein-RNA hybrid. In syn3.0, roughly 90 to 100 of the 473 genes are dedicated entirely to making ribosomes and the things they need to function — that's the ribosomal proteins, the rRNA genes, the tRNAs, the aminoacyl-tRNA synthetases that charge the tRNAs with amino acids, the initiation factors, the elongation factors. Translation is the single biggest expense in the cell's gene budget. If you tried to compress the cell further, the first place you'd look — and the first place you'd fail — is here. The translation machinery is highly evolved, highly interlocked, and stubborn. You cannot easily remove an aminoacyl-tRNA synthetase, because then one amino acid won't get loaded onto its tRNA, and every protein containing that amino acid will fail to be made, and the cell will die in seconds. You cannot easily remove a ribosomal protein, because the ribosome will misassemble. The translation apparatus is the part of the cell that is most evolutionarily ancient and least amenable to redesign.

Around that ribosome population is the **transcription apparatus**. RNA polymerase, with its associated subunits, is sitting on the DNA. Sigma factors are guiding it to the right promoters. Terminators are stopping it at the right places. About 10 to 15 genes' worth of machinery, all in service of getting RNA out of the DNA.

The DNA itself — the 531,000-base-pair circular chromosome — is sitting in a loose tangle in the cytoplasm. _Mycoplasma_ has no nucleus, no formal chromosome packaging the way bigger cells do, just the DNA loosely associated with some small DNA-binding proteins. Around the DNA you have **the replication apparatus**, which the cell deploys whenever it's time to copy itself: a DNA polymerase, a helicase, a primase, the single-strand binding proteins, the ligase, the topoisomerase. About 35 genes. Together, all these are the minimal kit you need to replicate a circular bacterial chromosome.

\[Pause.\]

Now the cytoplasm is full of metabolic enzymes. Let me list a few of the most important ones, because they tell you what kind of life syn3.0 is set up for.

It has glycolysis. The full ten-step pathway, from glucose to pyruvate, is present. Glycolysis produces ATP — that's how syn3.0 gets most of its energy. It does not have a citric acid cycle. It does not have oxidative phosphorylation. It does not have a true respiratory chain. Energy in syn3.0 comes almost entirely from glycolysis, and the cell handles its electron flow with simpler systems, including a pathway that produces lactate as a waste product. This is a fermentative organism. It is anaerobic in spirit even when oxygen is around.

It has a minimal set of nucleotide salvage enzymes. Syn3.0 can't make purines and pyrimidines from scratch — those biosynthesis pathways have been removed because the lab medium provides nucleosides directly. The cell has just enough enzymes to phosphorylate those imported nucleosides into the triphosphates that DNA and RNA polymerases need. About 15 to 20 genes here.

It has lipid handling. Syn3.0 has lost most of fatty acid biosynthesis — it imports fatty acids from the medium. It has the enzymes needed to assemble those fatty acids into the phospholipids of its membrane. It can recycle membrane components. About a dozen genes' worth of lipid metabolism.

It has chaperones. When proteins get misfolded — which happens all the time, especially under stress — the cell needs proteins whose job is to refold the bad ones or destroy them. Chaperones like the GroEL/GroES system, and proteases like Clp and FtsH, are in syn3.0. Without them, misfolded proteins would accumulate and the cell would die.

And then there are the **membrane transporters**. Syn3.0 has lost almost all biosynthesis, which means it has to import almost everything. Amino acids, nucleosides, lipids, vitamins, ions — all of them are coming in through transporters. The cell has, roughly, 80 genes' worth of transport machinery embedded in its membrane. That's a striking number. The cell that has the smallest known genome has dedicated about a sixth of its genes to the problem of moving stuff across its outer envelope. That's because, of course, when you are a parasite, your defining characteristic is that you depend on someone else's chemistry, and the way you tap into that chemistry is through transporters.

\[Pause.\]

What's _not_ there is almost as interesting as what is. Syn3.0 has no flagella. It cannot move. It has no chemotaxis. It cannot sense or respond to gradients. It has only a vestigial set of stress responses; it cannot, in any meaningful sense, react to environmental change. It has no defense against viruses — no restriction-modification system, no CRISPR. It has no quorum sensing, no biofilm formation, no competence for natural transformation. It has none of the things that bacteria normally use to make their living in nature. It is, in every sense, a stripped-down lab organism. It can do exactly two things: live and divide. Everything else has been removed.

In the operating system analogy, **syn3.0 is what you get when you remove every driver, every application, every utility, every networking stack, and you are left with only the bits that boot the kernel and copy it forward in time.** It's the kernel. Just the kernel. Nothing else.

Now, with the kernel laid out, let's go look more carefully at the genes inside it whose function we don't understand. That's Segment 8.

---

## SEGMENT 8 — The 149 mystery genes: biology's mocking reminder

So here is, in my view, the most important and most underappreciated finding of the whole JCVI minimal genome project. Out of 473 essential genes, **about 149 have no known function**. They are essential — delete any one of them and the cell dies — but we cannot tell you what they do.

That's roughly 30% of the genome. A third of the minimum kit for being a living cell is, as of the date of this lecture, biochemical mystery.

Let me give you the analogy that the JCVI authors themselves used, more or less. **The minimal genome is biology's mocking reminder.** We thought, going into this project, that if we built the minimal genome, the act of building it would itself constitute understanding it. After all, if a list of 473 genes is sufficient to make a cell, surely we know what those 473 genes are for. Surely a list that short, derived through painstaking iterative deletion, would have been thoroughly characterized. Surely we would know.

We do not know.

What does it mean that a gene has "unknown function?" Several things, slightly different. Sometimes it means the gene encodes a protein whose sequence has no homologs anywhere else in the databases — there's nothing like it in _E. coli_, in yeast, in humans. Just a stretch of amino acids that fold into something, that does something, but we have no clue what. Sometimes it means the protein has a sequence homolog in another organism, but that homolog is _also_ uncharacterized — the same shrug across multiple genomes. Sometimes it means the protein has a recognized domain — say, a kinase domain — but we don't know what it phosphorylates, or when, or why. We can give it a vague functional class but no biological role.

The JCVI team did not solve this problem when they published syn3.0. They published the list. They flagged the unknowns. They said, in effect, _we know we need them, we don't know what they do_. And they invited the community to come help figure it out.

\[Pause.\]

Now, why is this important? Because it tells us something profound about the state of biology.

For decades, the implicit assumption of molecular biology — and especially of the genome sequencing era — has been that knowing the genome means understanding the organism. Get the sequence, predict the genes, look at the homologs, assign functions, and you have a parts list. Then you build up understanding from there. The genome is the foundation.

What syn3.0 shows is that this assumption is false, even at the minimum. Even for a cell with fewer than 500 genes — a cell deliberately stripped down to its essence — about a third of the essential biochemistry is opaque to us. We have the parts list, and a third of the parts have labels like "MMSYN1_0033" instead of "DNA polymerase." We don't know what 0033 does. We just know the cell dies without it.

Why is this? A few reasons.

First, **biology is enormous and our experimental coverage is patchy.** We've studied _E. coli_, yeast, and a handful of other organisms intensely. Anything that doesn't have homologs in those organisms is, in a deep sense, unstudied. _Mycoplasma_-specific genes are exactly the kind of thing that falls into this gap. They're real, they're essential, but they don't show up in our model organisms because our model organisms have replaced their function with something else.

Second, **gene annotation is brittle.** The standard pipeline for assigning a function to a gene relies on sequence similarity to a previously characterized gene. If no similar gene has been characterized — and many haven't — the pipeline assigns "hypothetical protein" or "unknown function" and moves on. The assignment is not wrong; it is just an admission that we don't know. But it accumulates. There are millions of "hypothetical proteins" in the public databases. Many of them are, like the syn3.0 unknowns, essential to their host cells.

Third, **functions can be invisible without the right assay.** A protein might be essential because it modulates the function of another protein, or because it stabilizes a membrane structure, or because it performs a reaction that nobody has ever specifically looked for. Until you happen to do the experiment that catches it in the act, the function is opaque even when the protein is in front of you.

\[Pause.\]

Now, since the syn3.0 paper came out in 2016, there has been steady progress on these unknown genes. Several labs — at JCVI, at the National Institutes of Standards and Technology, at a number of universities — have been working through the list, trying to figure out what these proteins do. As of the date of this lecture, a meaningful fraction of the original 149 have been at least partially characterized. Some turned out to be membrane proteins involved in lipid handling. Some turned out to be involved in cell division — we'll come back to this in Segment 10. Some turned out to be RNA modifiers, or proteins involved in ribosome biogenesis, or factors involved in the maturation of other essential machines.

But — and this is the key point — the count of fully characterized mystery genes is still well under half of the original 149. Most of them are still poorly understood. We have inklings. We have suspicions. We have biochemical assays in progress. But the headline number — about 30% of the minimal cell is biochemical mystery — has not changed dramatically in the years since 2016.

The deeper lesson, the one I want you to carry away from this segment, is **a humility about the state of biology**. We can build a minimal cell. We can write its genome from scratch. We can transplant it, run it, watch it divide. We can do all of that with engineering precision that would have astonished biologists thirty years ago. And we still cannot explain a third of what's in the thing we built. The act of building is not the same as the act of understanding. Venter's Feynman quote — "What I cannot build, I cannot understand" — was an aspiration. It was never quite a fact. Syn3.0 shows you that the implication does not run the other way. Building does not imply understanding. You can build something and still not know what it does.

That's the punchline of the minimal genome project, and it is the great gift of the project to the rest of biology. It is a beautifully clean, unambiguous demonstration that the work of figuring out what cells are made of is not, as some had begun to claim, mostly done. There are 149 essential genes, in the smallest cell anyone can build, waiting for someone to figure out what they do. The minimal genome turned out to be a research program, not a destination.

---

## SEGMENT 9 — JCVI-syn3A: adding genes back to fix what we broke

So syn3.0 was, at the time of its publication, the smallest known self-replicating genome. But it was not, in some important ways, a happy organism. It grew slowly — much more slowly than the parental _Mycoplasma mycoides_. Its doubling time was around three hours, where wild-type _M. mycoides_ doubles in about an hour. Its cells looked weird — irregular, sometimes elongated, sometimes joined in chains, often misshapen, often the wrong size. And one specific problem stood out as a thing the team hadn't predicted and didn't want: **syn3.0 had impaired cell division.**

When syn3.0 cells went to divide, they often didn't do it cleanly. Instead of two equal daughter cells separating from each other, you'd get long filaments of attached cells that hadn't finished pinching off from each other, or you'd get strangely lobed shapes, or chains, or vesicle-like protrusions that didn't seem to have a clear role. The cells were dividing, but the geometry was off.

Now, this was both surprising and not surprising. Surprising, because the team had specifically retained the genes for the core division machinery — FtsZ, the contractile ring forming protein, and its main partners. Not surprising, because they had aggressively deleted a lot of accessory genes whose functions they couldn't predict, and apparently some of those accessory genes turned out to be important for proper division geometry, even though their molecular function was not yet known.

So what the team did was a sensible thing. They went back. They identified 19 genes that they had deleted from syn3.0 — genes they had thought were non-essential — but whose absence seemed to be causing the division problems. They added some of those genes back. Not all 19, but a subset of them. They reassembled, retransplanted, and got a slightly larger genome that, importantly, divided properly and grew much faster.

They called it **JCVI-syn3A**.

Syn3A is syn3.0 plus 19 extra genes — so 492 genes instead of 473 — and it grows roughly three times as fast as syn3.0, and it divides into recognizable, fairly normal-looking cells. Syn3A is, in some sense, the more practical organism. It's a working minimal cell. Syn3.0 is the absolute minimum; syn3A is the minimum that's actually useful.

\[Pause.\]

What does it mean that adding 19 genes fixed the problem? It means, partly, that the 19 genes the team had deleted were not really non-essential. They were _quasi-essential_, to use the team's own vocabulary. The cell could live without them, in the sense that it could still grow and divide. But it couldn't do it well. The cells were impaired. So the line between essential and non-essential is, in biology, not a sharp line. There are genes you cannot lose at all. There are genes you can lose, but the cell pays for it. And there are genes you can really lose with no cost. The boundary is fuzzy, and where you draw it depends on what you mean by "alive" and what counts as "growing."

Most of those 19 genes — and you can probably guess where this is going — are genes whose function was, and in many cases still is, only partially known. Some of them encode proteins that affect membrane structure. Some encode proteins that interact with the FtsZ division ring. Some encode proteins that handle DNA segregation at division. Some encode proteins whose role is genuinely unclear but whose absence wrecks division anyway.

In other words, **the genes the team had to add back were largely from the 149 mystery genes.** When they reached into the bag of "essential but unknown function" and pulled out 19 specific ones, those turned out to be crucial for fixing the division defect. So a slice of the mystery genes are now known to be involved, somehow, in division — even though we still don't know exactly how.

This is a useful pattern to notice. Adding back genes is a productive way to figure out what they do. If you delete a gene and the cell dies, you don't learn much. If you delete a gene and the cell grows weirdly, you have a phenotype, and a phenotype is a starting point for figuring out function. Syn3A is, in this sense, a more powerful tool than syn3.0. It's the minimal cell with the division phenotype fixed, and as a research platform, it lets you compare a wild-type minimal cell to mutants that lack specific genes and see what changes. The community has been doing this kind of work for several years now.

\[Pause.\]

I'm going to flag one more thing about syn3A and then we're going to take a break. The team has been characterizing syn3A in extraordinary detail. They have measured every protein in the cell. They have measured every metabolite. They have measured the cell's growth dynamics under a variety of conditions. They have built whole-cell computational models that predict, from the gene list and the measured protein abundances, how the cell should behave — and they have compared those predictions to experiments. The level of quantitative characterization is the kind of thing that has historically only been possible in much simpler systems, like single proteins or short pathways. With a minimal cell, suddenly the whole organism is tractable for that kind of analysis. You can, in principle, _account_ for every atom going in and every atom coming out. That's a remarkable scientific opportunity, and it's part of why syn3A is now becoming the workhorse of the field rather than syn3.0.

So that's where we are at the end of the first half. The JCVI team took _Mycoplasma_, synthesized it, transplanted it, trimmed it, hit a floor at 473 genes that didn't quite work, added back 19 to make a usable platform at 492 genes, and the result is the smallest self-replicating cell anybody has ever characterized. And about a third of the genes inside it are still poorly understood. With that in mind, let's take a break.

\[BREAK\]

---

## SEGMENT 10 — The morphology problem: syn3.0 was a weird-looking cell

Welcome back. I want to start the second half with a topic that sounds almost cosmetic but turns out to be deep, which is **the shape of the minimal cell**.

When the JCVI team first looked at syn3.0 cells under the microscope, they saw something they had not expected. Wild-type _Mycoplasma mycoides_ cells are small, round, fairly uniform in size. They look like more or less standard tiny bacteria. Syn3.0 cells, by contrast, were a mess. They were not all the same size. Some were very small, some were enormous, some were elongated, some were in chains, some had weird protrusions, some had what looked like membrane blebs, some appeared to be conjoined twins that hadn't separated. Under the microscope, syn3.0 was a circus of irregular shapes.

The team published photographs of this in the 2016 paper, and they were striking. The pictures became, in some quarters, a source of mild embarrassment — "you built the minimal cell and it looks like a deformed blob" — but they were also, scientifically, very informative. They told us something about what the deleted genes had been doing.

\[Pause.\]

To appreciate why the morphology problem matters, you need to think about what determines the shape of a bacterial cell. Most bacteria have rigid cell walls that constrain them to a particular geometry — rods, cocci, spirals. _Mycoplasma_, having no cell wall, has nothing rigid holding its shape. Its shape is determined entirely by the cytoskeleton and the membrane itself. There are proteins inside the cell that organize the membrane into a particular geometry — for instance, by forming a ring at the future division site, or by anchoring certain regions of the membrane to certain regions of the DNA. Without those organizing proteins, the cell becomes a kind of free-form membrane sack, whose shape depends on whatever physical forces happen to be acting on it at the moment.

When the team deleted the genes they thought were non-essential, they apparently also deleted, by accident, some of these organizing proteins. The cells could still live. They could still copy their DNA. They could still grow. But they had lost the molecular scaffolding that imposed shape and division geometry. The result was the deformed cells.

When the team added back 19 genes to make syn3A, the morphology came back. Syn3A cells look much more like wild-type _Mycoplasma_ — round, fairly uniform, dividing cleanly into two equal daughters. So somewhere in those 19 genes were the missing scaffolding proteins. The team has been working out which is which since 2016, and a couple of them have been identified specifically as morphology factors. But not all of them. Some of those 19 are still doing something to shape, in ways we don't fully understand.

\[Pause.\]

I want to flag this because it illustrates a broader point about minimal cells that's easy to miss if you focus only on the gene counts. **You can delete genes and still have a living cell, but the cell you end up with may not be a normal cell.** Living is a low bar; living _well_, in the way evolution has shaped wild-type cells to live, requires more.

In a way, the morphology defect in syn3.0 was a free experiment that the project gave us, almost by accident. By stripping the genome down to its absolute floor, the team produced cells whose physical appearance was, for the first time, dictated by an explicitly designed gene list rather than by the evolutionary history of _Mycoplasma_. The cells came out looking strange. That's biology telling you that something matters even when you couldn't see it before.

It also tells you something about the limits of pure deletion as a discovery method. You can delete genes and discover what each one was for by what breaks. But what breaks is sometimes subtle — a slightly slower growth, a less perfect division, a shape that's a bit off. Those subtle phenotypes are easy to miss in a first round of analysis. The team had to go back and look again, in detail, before they spotted them. And many subtle phenotypes are surely still hidden in syn3.0 — small effects on metabolism, small effects on signaling, small effects on responses to perturbation, that we haven't carefully looked for yet.

So if you take nothing else from this segment, take this. **The minimal cell is not just smaller. It is, in many ways, less competent.** It has fewer redundancies. It has fewer fallbacks. It has fewer of the small features that make a normal cell normal. Engineering a minimal cell is not just about counting genes; it's about deciding what you're willing to give up in exchange for a smaller genome, and recognizing that some of what you give up will only become visible after you've already lost it.

---

## SEGMENT 11 — A chassis for engineering: what syn3.0 is good for

Okay, let's pivot. We've spent a lot of time on what syn3.0 is and how it was built. Let's now ask the practical question: **why?** What's the point of building a minimal cell? What is it good for?

The honest answer is that nobody is yet using syn3.0 or syn3A as an industrial workhorse. There is no biotech company manufacturing drugs using syn3A. There is no fermentation plant producing biofuels with a minimal cell at the bottom of the tank. The minimal cell is, today, primarily a research tool, not a manufacturing platform.

But there is a vision behind the project — a vision that has been articulated by Venter, by Dan Gibson, by various people in the synthetic biology community — and the vision is this. **The minimal cell is meant to be a chassis.**

"Chassis" is a word that comes from the automotive industry. The chassis is the frame and structural elements of a car, before any of the optional features are added. You can take the same chassis and use it to build a coupe, a station wagon, a truck, a van. The chassis is the part that doesn't change; what changes is what you bolt on top.

Applied to biology, the chassis idea is this. You take a minimal cell — a cell whose genome contains only the irreducible essentials of being alive — and you treat it as a platform. The chassis. Then, for whatever application you want, you bolt on a payload of additional genes. Producing a drug? Add the drug biosynthesis pathway. Sensing a chemical in the environment? Add a sensor and an output gene. Performing a complex computation? Add the synthetic circuits we talked about in the genetic circuits lecture. The chassis stays minimal. The application changes.

\[Pause.\]

The analogy is, of course, **an OS for biology — install only the kernel, and add your application on top**. That's the synthetic biology pitch for the minimal cell. Don't waste your time engineering an organism with thousands of irrelevant genes that might interfere with what you're trying to do. Start with the smallest possible cell, add only what you need, and have a clean, predictable, well-characterized platform.

The promise of a clean chassis is that engineering becomes more predictable. Today, when synthetic biologists add a circuit to _E. coli_, they have to contend with all of _E. coli_'s own regulatory networks. The added gene might be repressed by some native repressor. It might be degraded by some native protease. It might compete with native metabolism for resources. The cell, in effect, has its own opinions about what's going on, and it tends to push back on whatever you're trying to engineer. The phrase you'll hear in the field is "context dependence" — what works in one strain doesn't work in another, because the context is different.

If you start with a minimal cell, the hope is that there's less context to worry about. Fewer regulatory networks. Fewer competing pathways. Fewer surprises. Your engineered gene gets to operate in a cleaner environment.

\[Pause.\]

That's the promise. The reality, so far, is mixed.

The minimal cell does turn out to be more predictable for some applications. Researchers have shown, for instance, that adding a fluorescent reporter to syn3A gives more consistent expression levels — fewer cell-to-cell differences — than adding the same reporter to _E. coli_. The reduced regulatory complexity does pay off in some measurable ways.

But syn3A also has new problems. It grows slowly. It's fragile. It needs an enriched medium. It can't tolerate stress. It produces less protein per gene than _E. coli_ does, because its translation machinery is, well, minimal. So the chassis is cleaner, but it's also weaker.

The practical engineering question, in 2025 and beyond, is whether the cleanness wins out over the weakness. There's an argument that it will, eventually, once we figure out how to add genes back into the minimal cell to give it just the strengths we want for our application — boost the protein production, harden it against stress, speed up its growth — without putting back the regulatory complexity. A designed strength, rather than the messy evolved strength of a natural organism.

\[Pause.\]

There's another, more ambitious framing of the chassis idea that I want to mention, because it tells you where the field is going. **The minimal cell is supposed to be a starting point for designed life that doesn't have to look like evolved life.**

Evolved cells are constrained by their history. They use the genetic code they have because their ancestors did. They use the metabolic pathways they have because those pathways were established billions of years ago. They have layers and layers of vestigial machinery — left over from some ancient ancestor's lifestyle — that got carried forward by inertia, never quite removed by selection. _E. coli_ has hundreds of genes whose only apparent function is to do something useful in some environment _E. coli_ never visits in the lab. Those genes are dead weight in any industrial application, but you can't easily get rid of them, because they're entangled with the rest of the genome.

A minimal cell, in principle, lets you start over. The minimal cell has had its evolutionary baggage stripped. What you build on top of it is, in some sense, designed from the ground up rather than inherited from a distant past. You get to decide what regulation looks like. You get to decide what the metabolism looks like. You get to decide what the protein-protein interaction network looks like. You don't have to fight the evolved structure of the cell; the evolved structure is mostly already gone.

This is, admittedly, more aspiration than reality. Nobody has yet built a synthetic cell with a designed regulatory network that's fundamentally different from what the natural cell had. But the chassis is at least the platform on which that kind of work becomes thinkable. It's the framework you'd need if you wanted to ask, "what if cellular biology had been engineered, rather than evolved?"

The answer to that question is going to take decades. But you can see, in syn3A, the beginning of the experimental setup that would let you find out.

---

## SEGMENT 12 — GP-write: the mirror image of the Human Genome Project

Now I want to broaden the lens. JCVI-syn3.0 is one specific instance of a much larger movement in biology, which is the movement to write genomes, not just read them. Let me give you some context.

The **Human Genome Project**, completed in 2003, read the human genome. About three billion base pairs of DNA, sequenced from end to end, published in the open scientific literature. That was a defining intellectual achievement of the late 20th century — it took fifteen years, cost about three billion dollars, and involved labs all over the world. The result was a reference sequence that every biologist now uses every day. We took an enormous genome and we _read_ it.

The next obvious question, in the years after, was: **can we write one?** Can we, instead of reading genomes, synthesize them? Can we build chromosomes the way we built proteins — letter by letter, from scratch, to specifications?

In 2016, around the same time as syn3.0 was being published, a group of scientists led by Jef Boeke, George Church, and others announced a project called **GP-write** — the Genome Project Write. The vision was explicit: do for genome writing what the Human Genome Project did for genome reading. Drive down the cost of synthesizing whole genomes. Establish the technology, the standards, the methods. Eventually, write entire genomes — including human genomes, eventually — from scratch.

\[Pause.\]

The analogy I want you to take away here is exactly the one in the project's name. **GP-write is the Human Genome Project's mirror image. Instead of reading a 3 Gb genome, write one.**

Now, GP-write is much earlier in its life than the Human Genome Project was. The Human Genome Project, at its peak, was processing millions of base pairs per day at industrial scale. GP-write is still figuring out what the right milestones and benchmarks should be. The cost of synthesizing DNA is dropping but not as fast as the cost of sequencing it. Synthesizing a megabase of DNA in 2016 cost on the order of a hundred thousand dollars. By the mid-2020s, it's down to roughly ten thousand dollars per megabase. By the time the field has the kind of cost curve sequencing had, you'll be talking about a few hundred dollars per megabase — and at that point, writing entire small genomes routinely becomes feasible.

What would you actually do with a written genome? Several things, depending on the project.

You could **recode** an organism — change the genetic code itself. If you take a bacterium and reassign one of its codons — say, use TAG (which is normally a stop codon) to mean a non-natural amino acid instead — you create an organism whose biochemistry is subtly different from anything that has ever existed in nature. We'll talk about this more in Segment 18, because it's an area where George Church's lab has been particularly active.

You could **streamline** an organism — strip out the dead weight, the way the JCVI team did with _Mycoplasma_, but on a larger scale, with industrial workhorses like _E. coli_ or _Bacillus subtilis_ or yeast. We'll get to this in Segment 15.

You could **rewrite** an organism — keep the gene content the same, but rearrange it, reorganize it, modularize it, to make it easier to work with. The synthetic yeast project, which I'll discuss in the next segment, does exactly this.

You could **design** an organism — write a genome from scratch, with chosen properties, not based on any existing organism. This is the most futuristic version of the GP-write vision, and nobody is quite doing it yet, but the minimal cell work is the closest existing approximation.

\[Pause.\]

A few words about the politics of GP-write, because it's been controversial. When the project was first announced, in 2016, there was a substantial pushback from bioethicists and from some segments of the scientific community. The objection was, in essence: if the goal is eventually to write a human genome — and the announcement explicitly named the human genome as an eventual target — then the project is asking the public to fund work toward synthesizing humans, with all the implications that has for cloning, designer babies, the meaning of personhood. The pushback caused the GP-write organizers to walk back the framing somewhat. The current emphasis is on writing genomes generally — including microbial, plant, and animal genomes — with the human genome as a distant, philosophical possibility rather than an immediate goal.

That's a sensible adjustment. The interesting technical questions in genome writing are, today, mostly about microbes, yeast, and small animal genomes. The human genome is a long way off. But the ethical questions don't disappear just because the technology isn't there yet, and we'll come back to them in Segment 16.

For the rest of this lecture, I want to focus on what GP-write is enabling now, in 2025. And the single best example of a working genome-writing project is the synthetic yeast project — Sc2.0 — which is also the subject of the next segment.

---

## SEGMENT 13 — Sc2.0: the synthetic yeast chromosome project

While the JCVI team was working on _Mycoplasma_, another group of scientists — led by Jef Boeke, then at Johns Hopkins and now at NYU, with collaborators all over the world — was working on something parallel but different. They were rewriting the genome of baker's yeast, _Saccharomyces cerevisiae_, one chromosome at a time. The project is called **Sc2.0** — Saccharomyces cerevisiae version 2.0.

Yeast has 16 chromosomes and about 12 million base pairs of DNA — bigger than _Mycoplasma_ by an order of magnitude, but still small enough that whole-genome synthesis is plausible with modern technology. Sc2.0 set out to synthesize each yeast chromosome from scratch, replace the natural chromosome with the synthetic one, and end up with a yeast cell that had a fully synthetic genome.

The first synthetic chromosome — synIII — was published in 2014. Over the next several years, more chromosomes followed. As of 2023, all 16 chromosomes had been synthesized in various labs around the world, and the final integration — putting all 16 synthetic chromosomes into a single yeast cell — was the culminating experiment of the project. That work was published in 2023, with a paper in _Cell_ from Boeke's group and collaborators announcing what they called the "synthetic yeast genome consortium" had achieved its goal.

\[Pause.\]

What makes Sc2.0 interesting is not just that the genome is synthetic. It's that the synthetic genome is **different** from the natural genome in carefully designed ways. The Sc2.0 team didn't just resynthesize what was already there. They made a series of deliberate changes throughout the genome, each one motivated by a particular design principle. Let me list the main ones, because they tell you what "writing" a genome makes possible.

**One: they removed transposable elements.** Natural yeast has a few hundred transposons scattered around the genome — selfish genetic elements that have inserted themselves over evolutionary time and that occasionally hop around. Sc2.0 removed all of them. The synthetic genome has no transposons.

**Two: they removed tRNA genes from their chromosomal locations** and consolidated them onto a separate "neo-chromosome." Natural yeast scatters its tRNA genes across all 16 chromosomes; Sc2.0 puts them all in one place. This makes the rest of the genome more modular.

**Three: they recoded the stop codon TAG.** In natural yeast, TAG functions as one of three stop codons; in Sc2.0, every TAG has been changed to TAA, leaving TAG free for future use. The idea is that you could, in the future, reassign TAG to code for a non-natural amino acid, giving the cell a 21st amino acid it can incorporate into proteins.

**Four: they added loxP sites throughout the genome.** loxP sites are recognition sequences for the Cre recombinase enzyme — you might remember them from earlier lectures on conditional genetics. The Sc2.0 team put thousands of loxP sites between non-essential genes throughout the synthetic genome. When you turn on Cre, you can randomly delete, invert, or duplicate stretches of the genome at the loxP sites. This is called SCRaMbLE — Synthetic Chromosome Rearrangement and Modification by LoxP-mediated Evolution. It lets you, in effect, generate huge numbers of slightly different genome variants from one starting point, and then select among them for whatever property you want.

\[Pause.\]

The contrast with the JCVI minimal genome project is illuminating. JCVI-syn3.0 is about asking _how few genes do you need_. Sc2.0 is about asking _what if you redesigned the genome you've got_. Different question. Different approach. Both rely on whole-genome synthesis. Both treat the genome as an engineering object rather than a sacred natural artifact. But the minimal-cell people are stripping down, while the Sc2.0 people are rewriting in place.

In the analogy: **JCVI-syn3.0 is asking what the kernel is. Sc2.0 is asking what would happen if you took the operating system you've already got and refactored it for clarity, modularity, and future flexibility.** Both projects, in different ways, are demonstrating that genome writing is real and useful — that you can synthesize entire chromosomes, integrate them into living cells, and get organisms that work.

The Sc2.0 project also revealed, like syn3.0, that we don't understand as much as we think we do. Early versions of the synthetic chromosomes had subtle problems — the cells grew, but not always optimally, and figuring out why required careful detective work. Sometimes a removed transposon turned out to be doing something useful that nobody had predicted. Sometimes a moved tRNA gene turned out to need its original neighborhood. The same humility lesson from syn3.0 applies here: you can build the thing, and the build itself teaches you about your ignorance.

---

## SEGMENT 14 — Writing biology versus editing biology

I want to take a step back and frame what we've been talking about as a conceptual shift in how biologists relate to genomes. There is a real distinction — and an important one — between **editing** biology and **writing** biology, and the minimal-genome project sits firmly on the writing side of that distinction.

For most of the last fifty years, the operational mode of molecular biology has been editing. You take a natural genome that already exists, and you change a few things. You knock out a gene. You introduce a mutation. You insert a transgene. You modify a regulatory element. The genome you start with is a given — it's whatever the organism happened to have — and your work consists of small, targeted modifications. CRISPR is the latest and most powerful tool in this mode. Cre-lox is in this mode. Mutagenesis is in this mode. Almost all of classical molecular biology operates this way.

Editing has the enormous advantage of being incremental and tractable. You don't have to understand the whole genome to make a single edit; you just need to understand the local context around the edit. You can build up complexity gradually. You can iterate. Editing is the mode you can actually do at scale.

\[Pause.\]

Writing is different. Writing means starting with a blank computer screen, designing what you want the genome to be, and then synthesizing that design into physical DNA. The natural genome is, at most, a reference. You may copy most of it, but you are not constrained to copy it. You can rearrange, redesign, remove, replace. The synthesis step decouples your design from any pre-existing physical molecule.

What writing gets you, and editing can't easily get you, is the ability to make many changes simultaneously, in non-local ways, in a coordinated design. If you want to change every TAG codon to TAA in a genome, that's hundreds or thousands of edits, scattered across the chromosome. With editing tools, you'd have to do each one separately, or in small batches, and you'd have to verify that none of them interfered with anything else. With writing, you just design the new genome with all the changes baked in, synthesize it, and there it is. You can also make changes that aren't possible by editing at all — wholesale redesigns of regulatory architecture, insertions of entirely new pathways at chosen locations, codon-by-codon optimization throughout the genome.

\[Pause.\]

The analogy I want to give you here is from software. **Editing is like patching an existing program. Writing is like refactoring the whole codebase.** Patches are local. Refactors are global. You do patches when the existing code mostly works and you just want to fix something specific. You do refactors when you've decided that the existing structure has gotten in the way and the cleanest path forward is to rewrite. Both have their place.

For most of biology, editing remains the right tool. We don't yet have the cost structure or the design knowledge to write whole genomes routinely. CRISPR is a tremendous boon precisely because it makes editing easier, and editing is what we do nine times out of ten. But for the questions where editing isn't enough — what's the minimum gene set, what would the genome look like if you redesigned it from scratch, what if you reassigned codons throughout — writing is the only tool that gets you there.

JCVI-syn3.0 is the cleanest demonstration that writing is possible at the scale of an entire bacterial genome. Sc2.0 is the cleanest demonstration that writing is possible for a eukaryotic chromosome. Together, they establish that genome writing is, in 2025, a real engineering capability — not yet routine, not yet cheap, but no longer speculative.

The next decade is going to be about pushing genome writing further. Cheaper synthesis. Faster assembly. Better design tools. More target organisms. The minimal cell and Sc2.0 are the proof of principle. What comes next is the systematic exploitation of that capability for both science and industry.

---

## SEGMENT 15 — Industrial genome reduction: Mesoplasma florum and friends

So far we've talked about the academic minimal-genome project — what's the irreducible minimum, what does it teach us about cellular biology. But there is a parallel, much less publicized, and arguably much more economically important strand of work in industry, which is **genome reduction for industrial use**.

The basic idea is this. Industrial microbes — the bacteria and yeast used by biotech companies to manufacture drugs, chemicals, food ingredients — typically have full natural genomes. They were domesticated for their useful properties, but they still carry around all the genetic baggage that any natural organism carries: stress responses, defense systems, regulatory networks, redundant pathways. When you put such an organism into a fermenter and ask it to produce a target molecule, it's spending a substantial fraction of its energy and resources on running all that natural machinery. Energy spent on regulation is energy not spent on product. Genes used for stress response are genes that take up space and resources without contributing to the bottom line.

If you could remove a substantial fraction of the unnecessary genes, you'd get a more focused, more efficient producer. The cell wouldn't grow as well in the wild, but it would do better in the controlled environment of an industrial fermenter, because all of its resources would be channeled into the things you actually want it to do.

\[Pause.\]

There have been several attempts at this for industrial microbes. Reduced-genome _E. coli_ strains have been built — the so-called MG1655 derivatives — where about a fifth of the natural genome has been deliberately deleted, removing transposons, defunct prophages, and other genetic baggage. Those strains, in some applications, do produce more of a target product per gram of fermentation broth than wild-type _E. coli_. They're also more genetically stable, because there are fewer mobile elements jumping around.

A more aggressive example, and one that's been getting attention recently, is the work on **_Mesoplasma florum_** — another small-genome bacterium, related to _Mycoplasma_, that some industrial groups have been investigating as a chassis. _Mesoplasma florum_ has a natural genome of about 800 kilobases and around 700 genes. It's small to start with, like the _Mycoplasma_ species, and it has some industrial-friendly properties — it's faster-growing than _Mycoplasma_, easier to work with, and it has a more conventional genetic code. Several groups have been developing tools to delete genes from _Mesoplasma florum_ and reduce its genome further, aiming for an industrial minimal cell that's optimized for biomanufacturing applications.

The economics here are interesting. A typical industrial fermentation involves growing tens of thousands of liters of bacterial culture. Tiny improvements in efficiency — a percent or two per kilogram of product — translate into millions of dollars over the lifetime of a process. So even modest genome reductions, if they improve productivity, are worth investing in. Industrial minimal cells don't have to be as minimal as syn3.0 to be valuable. They just have to be _better_ than the conventional industrial organism.

\[Pause.\]

A few realistic caveats about industrial genome reduction. First, the gains have been more modest than the most ambitious early predictions. The cells with the most aggressive genome reductions often grow slowly or are fragile, which means the production gains get eaten up by the lower biomass yields. Second, every industrial process is different. A strain optimized for one product might be terrible at another. Third, designing the right reduction is hard — knowing in advance which genes to delete requires either extensive empirical testing or much better cellular models than we currently have.

But the trend is real. The industrial use of streamlined genomes is one of the more concrete payoffs of the whole minimal-cell research program. Even without a fully redesigned organism, the techniques developed in the minimal-cell project — large-scale gene deletion, transposon-based essentiality screening, modular reassembly of genomes — have made their way into the toolkits of industrial bioengineers. The minimal cell is not, today, a product. But the methods that produced it are showing up in products.

In the broader context of synthetic biology, this is the bridge between academic curiosity and economic value. JCVI-syn3.0 is, in some sense, a research curiosity — a thing built to answer a basic science question. But the methods are spilling over into industry, and industry is starting to use them. That's the standard pattern for ambitious basic research: the curiosity-driven work establishes the techniques, and then industry adapts the techniques to make money.

---

## SEGMENT 16 — Have we created life? The ethics and philosophy

I want to spend a segment on the question that the press wrestled with when syn1.0 came out, and that has lingered ever since: **have we created life?** What does it mean that we built a cell from a synthetic genome? Is it artificial? Is it alive? Is it ours, in some sense that natural organisms are not?

Craig Venter himself, in interviews around 2010, was characteristically blunt. He said yes, we created life. The cell is alive. Its genome was once a string of letters in a computer file. It is, in his framing, the first living organism whose parent is a computer. That was the headline he wanted to project, and it largely worked. The "first synthetic cell" framing got coverage everywhere from _The New York Times_ to _The Daily Mail_.

There were, predictably, pushback responses. Some scientists pointed out the recipient cell problem — that the synthetic genome was placed into a pre-existing cellular shell, not built from scratch. Some philosophers asked whether running synthetic DNA in an evolved cell counts as creating life, or whether it's more accurately described as a very elaborate form of genetic engineering. Several religious groups issued statements. The Vatican said it was acceptable as long as it didn't lead to attempts to engineer human beings. Some Protestant theologians said it was an acceptable extension of human dominion over nature. Some opposed it on principle, arguing that the act of constructing genomes crosses a moral line.

The bioethics commission that President Obama convened in response to the 2010 paper held hearings and eventually published a report saying, in effect, that the research was important and could continue under appropriate oversight. The political response was mostly muted. Within a few years, the "first synthetic cell" had faded from the front pages and become just another piece of biology, with neither the doomsday consequences some had feared nor the transformative impact others had promised.

\[Pause.\]

I want to give you my honest take on the philosophical question. **Whether you call syn1.0 "creating life" depends almost entirely on how you define your terms.** Venter's definition makes it true. Most thoughtful biologists' definitions make it ambiguous. Most thoughtful philosophers' definitions make it false.

Here's the analogy I find clarifying. **Have we created life? Venter says yes; the cell is alive, but its genome was once data; everyone has an opinion.** That last clause is the important one. The answer to the philosophical question depends on what you think life is — and we don't have a consensus definition.

Life, in the broadest sense, is a self-replicating, self-maintaining, evolving chemical system. Syn1.0 and syn3A check most of those boxes. They self-replicate. They self-maintain, given the right inputs. They could, in principle, evolve, although they probably wouldn't last long in the wild because they'd be outcompeted by anything natural. By that definition, they are alive.

But that definition, by itself, also makes a thermostat alive in some weak sense, and people argue endlessly about where the actual cutoffs are. The argument is not, in the deepest sense, settleable, because "life" is a folk concept and not a sharp scientific definition. You can call it what you want.

What I'd urge you to focus on is not the labels but the underlying capability. **The JCVI team demonstrated that a designed sequence of DNA, written by humans, can run a cell.** That's the fact. Whether that fact constitutes "creating life" is a semantic question. Whether the fact is interesting and important is not. It is. And it shifts the relationship between human intention and biological organism in a permanent, irreversible way.

\[Pause.\]

The ethics, separately, are real but bounded. The JCVI cells are not dangerous. They are wildly less competitive than any natural organism — they would die in any environment outside a carefully controlled medium. They are not, in any meaningful sense, a biosecurity threat. The watermarks make them trivially identifiable. The technology, applied to existing organisms — taking a known pathogen and resynthesizing its genome — would be more concerning, and there are biosecurity regulations addressing exactly that scenario. But the minimal cell itself is among the most harmless organisms that has ever existed.

The harder ethical questions kick in once you start thinking about extending the technology. Recoding human cells. Synthesizing human chromosomes. Designing organisms with substantially redesigned biology. Those are not the minimal cell project, but they are the trajectory the technology is on, and the bioethics conversation that started with the 2010 paper is going to continue for as long as the technology develops. Your generation of biologists is going to be the one that has to draw the lines.

---

## SEGMENT 17 — The limits: a minimal cell is still a cell

Let me take a segment to push back on the most ambitious framings of the minimal-genome project, because some of the popular accounts have suggested things that are, to my mind, not quite right, and you should know where the limits really are.

There's a recurring narrative in popular science writing that goes something like this. The minimal cell is the first step toward fully synthetic biology. We built the kernel. Soon we'll be building cells from scratch, from purified molecular components, the way we build proteins from synthesized peptides. The minimal genome is the prelude to the wholesale reconstruction of life from its parts.

This narrative is, I think, somewhere between premature and confused. Let me explain.

\[Pause.\]

**A minimal cell is still a cell.** The whole point of the JCVI project was to identify a minimum gene set for a cell that already exists — to start with a working _Mycoplasma_, trim its genome, and end up with a smaller _Mycoplasma_ that still works. At no point in the project did anyone construct a cell from molecular components. The cells were always alive. The genome got smaller, but the cellular envelope, the ribosomes, the membrane, the metabolism, the choreography of living — all of that was inherited from the parent cell. The synthetic genome ran inside an evolved cell.

If you tried to build a cell from scratch — from purified lipids, purified ribosomes, purified enzymes, purified DNA, and so on — you would not succeed. There are research efforts in this direction; the field of **bottom-up synthetic biology** or **synthetic cells** (in the strict sense) is trying to do exactly this. People are building lipid vesicles that contain transcription-translation systems. They are getting those vesicles to express proteins. Some of them are getting the vesicles to divide. But none of them are getting the vesicles to do anything close to autonomous, sustained, evolving life. The gap between "lipid vesicle that can express GFP" and "self-replicating chemical system" is enormous, and the minimal-genome project does not close that gap. It addresses a different question.

The analogy I want to give you here is this. **The goal isn't to recreate biology from molecules. The goal is to figure out the minimum software a cell needs.** Those are different goals, and conflating them confuses people.

\[Pause.\]

What syn3.0 actually accomplishes is more modest, and in some ways more interesting. It demonstrates that you can write the genome of a living cell from scratch, and that you can systematically minimize that genome by deletion. It tells you which genes are essential in a particular environment. It gives you a chassis that is easier to engineer than a natural cell, for some purposes. It exposes the surprising number of essential genes whose function we don't understand.

What it does not do is solve the problem of how to construct a cell from non-cellular components. That problem — the strict synthetic cell problem — is much harder, and as of 2025, it's still mostly an open research area, with progress measured in small steps.

So the appropriate frame, when you read about minimal cells in the press, is this: **a minimal genome is an enormous achievement at the level of genome design and engineering. It is not the construction of life from scratch.** The synthetic cell, in the strictest sense, has not yet been built. What has been built is a cell with a synthetic genome, which is a different thing and an easier thing, and which already teaches us a great deal.

\[Pause.\]

I want to end this segment with one more honest concession. Even with all of these limits in mind, the JCVI project is still, by a wide margin, the most ambitious genome-design achievement in biology. We can argue about whether to call it "synthetic life." We can quibble about what the recipient cell does and doesn't contribute. We can ask whether the minimal genome is the right floor. But the technical accomplishment — designing, synthesizing, transplanting, and running a million-base-pair genome, then progressively minimizing it down to 473 genes — is a real and durable contribution. It establishes that whole-genome design is possible. It establishes that genome reduction is possible. It establishes a research platform that didn't exist before.

That's plenty. We don't need to overclaim.

---

## SEGMENT 18 — Frontier: recoded organisms, expanded codes, designer chassis

To close, let me look forward. Where is this all going? What does the next decade or two of work on minimal cells and synthetic genomes look like? Let me give you three frontiers that I think are the most exciting, and that you should expect to hear about over the rest of your careers.

**Frontier one: recoded organisms.** I mentioned earlier that you can rewrite the genetic code itself. The most influential work here has come from George Church's lab at Harvard. In a 2013 paper, Church and his colleagues took _E. coli_ and replaced every instance of the stop codon TAG with TAA, across the entire genome. That's hundreds of changes, made simultaneously, using a technique called **MAGE** — multiplex automated genome engineering — which is a form of large-scale editing. They then deleted the release factor that normally recognizes TAG, so TAG was no longer a functional codon at all. The cell could no longer make TAG-containing proteins, because it had no TAG-containing proteins to make.

What this gives you is a cell with a **free codon** — a codon that doesn't mean anything anymore. You can then reassign that codon to mean something new. If you introduce an artificial tRNA that recognizes TAG and is charged with a non-natural amino acid, every TAG in your engineered gene now gets translated into that non-natural amino acid. You have, in effect, given the cell a 21st amino acid. You can incorporate exotic chemistries into proteins — fluorescent groups, click-chemistry handles, photoreactive crosslinkers — that no natural organism can produce.

Church's group has since extended this work, building strains with multiple recoded codons, even strains where, in principle, you could code for multiple non-natural amino acids simultaneously. This is well beyond the minimal-cell work — it's about expanding the code, not minimizing the genome — but it's part of the same conceptual landscape. Both are about treating the genome as an engineering object that you can redesign.

\[Pause.\]

**Frontier two: designer chassis cells.** This is the natural extension of the syn3.0 idea. If a minimal cell is a chassis, what do you put on top of it? Several groups, in academia and industry, are working on chassis cells with specific applications in mind. Cells optimized for producing membrane proteins. Cells optimized for biosensors. Cells optimized for high-throughput protein evolution. The idea is that for each application, the right chassis isn't a stripped-down general-purpose cell, but a cell that's been deliberately tuned — with specific gene additions, specific deletions, specific regulatory adjustments — for the task at hand.

The minimal cell is the starting point for that work, because it gives you a clean baseline. But the production-grade chassis cells of the future will probably not be syn3A. They'll be its descendants — minimal cells with carefully chosen additions, optimized over many generations of engineering, designed for one purpose each.

\[Pause.\]

**Frontier three: synthetic genomes for non-microbial systems.** Yeast is the current ceiling. Sc2.0 represents the synthesis of a 12-megabase eukaryotic genome. The next step up is plant and animal genomes, which are in the gigabase range — hundreds of times bigger. Nobody is close to writing a plant or animal genome from scratch yet. But the technology trajectory suggests that within twenty years or so, it should be feasible. People are already working on synthesizing individual mammalian chromosomes; the human chromosome 21, being the smallest, is a frequent target. The eventual writing of a fully synthetic mouse genome, or even — more distantly — a fully synthetic human genome, is the kind of long-term goal that GP-write contemplates without quite committing to.

Whether those long-term goals are wise, achievable, or ethical is a conversation for another lecture. But the underlying capability — synthesis at megabase scale, assembly through yeast intermediates, the kind of design work that JCVI did with _Mycoplasma_ — is only going to get cheaper and more accessible.

\[Pause.\]

Let me circle back to where we started. The single sentence I asked you to walk out of here with was: **what is the minimum gene set required for a living, self-replicating cell?**

The answer, as of 2025, is: **about 473 genes, give or take, for a cell grown in a rich laboratory medium, with about a third of those genes having unknown function.** That's JCVI-syn3.0. That's the floor as we currently know it. The floor will probably get lower over time, as we figure out what the mystery genes do and as we discover unexpected redundancies that let us cut further. But it will not get _much_ lower. The 473 number is, I think, in the right ballpark for the irreducible minimum.

What we have learned from getting to that number is not just a number. We have learned that genome writing is possible. We have learned that minimal cells are still mysterious. We have learned that the act of building is not the same as the act of understanding. We have learned that there is a real distinction between editing biology and writing biology, and that both have their place.

If you carry away three things from this lecture, let them be these. First: the minimal cell is a chassis, a kernel, a stripped-down platform on which the next century of cellular engineering will probably be built. Second: about a third of the minimum gene set is biochemical mystery, and that mystery is one of the deepest unresolved puzzles in modern biology. Third: the technology of whole-genome synthesis is real now, and the implications — for engineering, for medicine, for our understanding of life — are going to ripple out for decades.

Thank you. Now we'll take some questions.

---

## APPENDIX

**Key dates and milestones**

- **2007.** First demonstration of genome transplantation between Mycoplasma species (Lartigue et al., _Science_), using natural _M. mycoides_ chromosome transplanted into _M. capricolum_ recipient.
- **2008.** First chemical synthesis of a complete bacterial chromosome (Gibson et al., _Science_) — the _Mycoplasma genitalium_ genome, 583 kb, assembled in yeast.
- **2010.** JCVI-syn1.0 — first cell with a fully synthetic genome (Gibson et al., _Science_). Synthetic _M. mycoides_ genome (~1.08 Mb) transplanted into _M. capricolum_; cells acquired _M. mycoides_ properties. Featured the embedded watermarks (names, email, URL, three quotations).
- **2014.** First synthetic yeast chromosome — synIII — published by the Sc2.0 consortium (Annaluru et al., _Science_).
- **2016.** JCVI-syn2.0 and JCVI-syn3.0 published (Hutchison et al., _Science_). Syn3.0 has 473 genes (~531 kb), the smallest known self-replicating genome. Approximately 149 genes of unknown function.
- **2016.** GP-write project publicly announced.
- **2016 onwards.** JCVI-syn3A — 19 genes added back to syn3.0 to restore normal cell division and faster growth. ~492 genes total.
- **2023.** Sc2.0 consortium reports final integration of all 16 synthetic chromosomes into a single yeast cell.

**Gene count comparisons**

| Organism | Approximate gene count |
|----------|------------------------|
| JCVI-syn3.0 | 473 |
| JCVI-syn3A | 492 |
| _Mycoplasma genitalium_ (natural) | ~525 |
| _Mycoplasma mycoides_ (natural) | ~900 |
| _Mesoplasma florum_ | ~700 |
| _Escherichia coli_ | ~4,500 |
| _Saccharomyces cerevisiae_ (yeast) | ~6,000 |
| _Homo sapiens_ | ~20,000 |

**The breakdown of syn3.0's 473 genes (approximate)**

- Translation (ribosome, tRNAs, synthetases, factors): ~195 genes
- Metabolism and energy: ~80 genes
- Membrane and transport: ~80 genes
- DNA replication and repair: ~35 genes
- Transcription: ~20 genes
- Cell division and other: ~14 genes
- Unknown function: ~149 genes

**Frequently asked questions**

- _Was syn1.0 really "the first synthetic cell"?_ The genome was synthetic; the recipient cellular shell was not. A more precise label would be "first cell with a fully synthetic genome."
- _Could syn3.0 survive in the wild?_ No. It depends on a rich laboratory medium for nearly all of its building blocks.
- _Will the 473 number ever decrease?_ Probably modestly. As we characterize the 149 mystery genes, some may turn out to be conditionally essential and removable in alternate designs. But 473 is approximately the floor for this lineage.
- _Is syn3A the same as syn3.0?_ No. Syn3A has 19 additional genes added back to restore proper cell division and faster growth.
- _What's the difference between JCVI-syn3.0 and synthetic cells made by bottom-up reconstitution?_ Syn3.0 is a top-down minimization of an existing cell. Bottom-up synthetic cells are attempts to assemble cells from purified molecular components; they are far less developed.

**Suggested further reading**

- Gibson et al., 2010, "Creation of a bacterial cell controlled by a chemically synthesized genome," _Science_.
- Hutchison et al., 2016, "Design and synthesis of a minimal bacterial genome," _Science_.
- Boeke et al., 2016, "The Genome Project–Write," _Science_.
- Annaluru et al., 2014, "Total synthesis of a functional designer eukaryotic chromosome," _Science_.
- Lajoie et al., 2013, "Genomically recoded organisms expand biological functions," _Science_ (Church lab).
- Breuer et al., 2019, "Essential metabolism for a minimal cell," _eLife_ (whole-cell model of syn3A).
