# AlphaFold and protein structure prediction

**A 2-hour undergraduate computational biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to two hours, plus a mid-point break. (Read faster, ~140 wpm, and it lands nearer 90 minutes, leaving room for questions or board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — A fifty-year-old problem, suddenly solved

Alright. Settle in. Today and for the next two hours, we are going to talk about AlphaFold — what it is, what it solved, why people in this field have been walking around for the last few years in a kind of mild daze about it, and what it actually means, mechanically, that a deep learning system from a London AI lab essentially closed a problem that occupied tens of thousands of biologists for five decades. This is one of those lectures where the punchline already happened, and the rest is figuring out what just happened and why it matters.

Let me start with the problem.

You have a protein. A protein is a chain of amino acids — a linear string, written as a sequence of letters from a twenty-letter alphabet. Methionine, alanine, lysine, glycine, and so on. You can store a protein as a text file. The text file might be a few hundred characters long, or a few thousand. It is, at that point, a one-dimensional object. A sequence.

But in your cells, the protein doesn't sit around as a string. The moment that string is made, it folds. It collapses, in milliseconds, into a specific three-dimensional shape — a globular blob, or a long fiber, or a doughnut, or a sheet, or some intricate machine with hinges and pockets. And that shape is what the protein _does_. The shape determines whether it cuts DNA, or catches photons, or pumps ions, or grabs a virus, or pulls a muscle. Function follows form. The sequence determines what gets folded, and what gets folded determines what the protein can do.

\[Pause.\]

Here is the problem, and I want you to hold this in your mind for two hours. **Given the sequence of letters, predict the three-dimensional shape the protein folds into.** That is the protein folding problem. That sentence, eighteen words, is the grand challenge that biology spent fifty years not solving.

Why is it hard? Because a chain of a few hundred amino acids has, in principle, an astronomical number of possible three-dimensional configurations. You could rotate every bond a little. You could fold it this way or that way. The number of possible shapes is — and people calculated this — something like ten to the three hundredth power for a moderately-sized protein. That's a number with three hundred zeros after it. There are not that many atoms in the observable universe. There are not even close to that many anything in the observable universe. And yet the protein, somehow, finds the right shape in milliseconds. Every time. The same sequence always folds the same way, in your cells, in your mother's cells, in every cell of every mouse and yeast and bacterium on Earth.

That contradiction — there are too many possibilities to search, and yet the answer is unique and found instantly — is called **Levinthal's paradox**, and it haunted the field for decades. The resolution is that proteins don't search the space randomly; they slide down energy landscapes, funnels really, that channel them toward the right shape. But knowing _that_ is not the same as being able to _compute_ the answer. The protein folds itself in milliseconds. We had been trying to compute the shape for decades and we kept getting it wrong.

\[Pause.\]

Now, why does this matter? Why do we care about the shape?

Because the shape is biology's master variable. If you have the shape of a protein, you can do basically anything. You can design a drug that fits into a pocket on the protein and shuts it off. You can engineer the protein to do something it doesn't normally do — change its specificity, make it more stable, make it work at higher temperatures. You can predict how it interacts with other proteins, how mutations in patients with disease will affect function, how a virus will or won't bind a receptor. Without the shape, you are reading a recipe in a language you can sort of decode but you don't know what the dish looks like. With the shape, the recipe and the dish are one thing.

And experimentally getting a shape — historically — was expensive. The classical methods are X-ray crystallography, NMR, and more recently cryo-electron microscopy. Each one takes months to years for a single protein, requires significant infrastructure, often fails for proteins that don't crystallize or don't behave, and costs hundreds of thousands of dollars per structure. By 2020, after sixty years of crystallography, the world's protein databases contained maybe a hundred and seventy thousand experimentally determined structures. That sounds like a lot. It isn't. There are over two hundred million known protein sequences in the public databases. So we had structures for less than one in a thousand of the proteins biology cares about. The rest were sequence only — text files with no picture.

The dream had always been: solve the prediction problem, and you can get a structure for any protein, instantly, for free, just by typing in the sequence. That dream was the Rubik's cube grand challenge of computational biology for fifty years. Every five years someone would write a triumphant paper claiming progress, and the field would inch forward. But by 2018, the honest assessment was: we are nowhere close. Maybe in another fifty years.

Then, in 2020, the problem was essentially solved. By a team at a London-based AI lab called DeepMind. With a deep neural network they called AlphaFold2. At a competition called CASP14. And in the four years after that, the same team and others extended the result to almost every flavor of biomolecule you might care about, released two hundred million structures into a free public database, won the Nobel Prize in Chemistry, and changed every downstream discipline that uses protein structure.

That's the story.

\[Pause.\]

If you walk out of here in two hours and you can do four things — one, explain in plain English what the protein folding problem is, why it was hard, and what "solved" means in context; two, sketch the high-level architecture of AlphaFold2 and tell me why multiple sequence alignments are the secret signal it learned to read; three, describe what AlphaFold can and cannot do, including the limitations the cheerleading press releases tend to skip; and four, place this whole thing inside the broader story of machine learning entering biology, which is now an unstoppable wave — then we've done our job. Everything else hangs off those four.

I want to be honest with you about the tone here. There are technological developments that you read about in the news, and a few months later, when you look around, basically nothing has changed. AlphaFold is not one of those. AlphaFold is a development that quietly rearranged the daily working life of every structural biologist, every drug designer, every protein engineer in the world. People who had spent twenty years grinding out structures by crystallography woke up one morning and realized that for many of their targets, the answer was now a button click. That was simultaneously thrilling and disorienting, in roughly equal measures. We'll get to the disorientation.

But first, we need to understand what made the problem hard. Let's go back, all the way back, to the experiment that started the whole field.

---

## SEGMENT 2 — Anfinsen's hypothesis — sequence determines structure

To understand why the protein folding problem is even a problem, we need to know that it should be possible at all. That is not obvious. You could imagine a world in which the shape of a protein depended not just on its sequence, but on the cell that made it, on the chaperone proteins around it, on the temperature, on the phase of the moon. In such a world, prediction from sequence alone would be hopeless — there would simply not be enough information in the sequence to determine the answer.

That is not the world we live in. And we know that because of a beautiful experiment done by a man named Christian Anfinsen, in the late 1950s and through the 1960s.

\[Pause.\]

Here's the experiment. Anfinsen took a small protein called ribonuclease A — a hundred and twenty-four amino acids long, a digestive enzyme, well-studied. In its native state, ribonuclease A is folded into a compact globule, with several internal disulfide bonds holding the structure together, and it has enzymatic activity — it cuts RNA.

Anfinsen unfolded it. He treated it with a chaotropic agent called urea, which disrupts the weak forces holding proteins together, and with a reducing agent that broke the disulfide bonds. The result was a denatured protein — a floppy random chain. Spaghetti. No structure. No enzymatic activity. The protein was, functionally, dead.

Then he removed the urea and the reducing agent — slowly, gently, by dialysis. And the protein refolded. Spontaneously. With no help from any other molecule. The disulfide bonds reformed, in exactly the right places. The structure came back. The enzymatic activity came back. The unfolded spaghetti turned itself back into the original working enzyme, all by itself, just because the conditions allowed it to.

That experiment — published in 1961 and refined through the decade — established what is now called **Anfinsen's hypothesis**. It says: the three-dimensional structure of a native protein, under physiological conditions, is determined entirely by the amino acid sequence. The sequence contains all the information needed to fold the protein. There is no extra ingredient. No mystical folding force from the cell. No template. The protein is a self-folding molecule, and the instructions for folding are encoded entirely in its own sequence.

Anfinsen got the Nobel Prize in Chemistry for this in 1972. And the implication was electrifying. It meant that, in principle, if you understood the physical forces governing protein folding well enough, you should be able to take any sequence — even a sequence you had never seen before — and compute its three-dimensional structure from first principles. The information is there. We just have to read it.

\[Pause.\]

But — and this is the painful part — knowing that the information is there is not the same as knowing how to extract it. Anfinsen's hypothesis told us the prediction problem was well-posed. It did not tell us how to solve it. The forces involved — hydrogen bonds, hydrophobic effects, van der Waals interactions, electrostatics — are individually well-understood, but combining them across a chain of a few hundred amino acids and finding the global energy minimum turned out to be computationally intractable. People tried for decades. With Monte Carlo simulations. With molecular dynamics. With clever heuristics. And the field made progress, sometimes nice progress, but no one could reliably predict structure for proteins they hadn't been told the answer for in advance.

Let me give you the analogy that I think captures it. Anfinsen's hypothesis was like proving that, in principle, you can deduce the contents of a sealed box by listening to it being shaken. The information is there, in the sounds. But knowing the information is there doesn't tell you how to interpret it. You still have to actually figure out how to listen. And for fifty years, we couldn't quite hear the right thing.

\[Pause.\]

There's one more thing about Anfinsen's experiment that matters, because it sets up something we'll come back to in the limitations segment. Anfinsen's ribonuclease was a small, well-behaved protein. Its native state is a single, stable, globular fold. It refolds reliably to one shape. Many proteins are like that. But many proteins are not — some require chaperone proteins to fold correctly in the cell, some have multiple stable conformations they switch between, some are intrinsically disordered and don't have a single fixed shape at all. Anfinsen's hypothesis is a beautiful general principle, but the messy reality is that biology has lots of exceptions. AlphaFold, when it eventually arrived, was extraordinary at predicting the kind of structure Anfinsen's hypothesis describes — the well-folded ground state — and it has, predictably, more trouble with everything else.

But that's getting ahead of ourselves. For now: Anfinsen showed us the problem was, in principle, solvable. The next sixty years were the field trying, mostly failing, sometimes inching forward. And the way the field kept score, the gold standard, the place you went to demonstrate that you had genuinely made progress, was a competition called CASP. Let's talk about CASP.

---

## SEGMENT 3 — CASP — the World Cup of structure prediction

Imagine, for a moment, that you are a researcher in 1994 who has just developed a new method for predicting protein structures from sequence. You write a paper. You test your method on, say, ten proteins whose structures are already in the database. You report that your method got, let's say, six of them roughly right. You publish.

There is a problem with this. The problem is: how do we know you didn't, consciously or unconsciously, tune your method on those same proteins? How do we know you aren't just memorizing answers and reporting them back? In machine learning we call this "training on the test set," and it's one of the cardinal sins. But even in pre-machine-learning structural biology, the issue was the same — if your benchmark proteins have known structures, there is no way to be sure you didn't peek.

In 1994, a structural biologist named John Moult got fed up with this problem and proposed a clever solution. He said: let's run a competition where the answers are genuinely unknown to the predictors. Every two years, we'll collect a set of proteins whose structures are about to be experimentally determined — measured by X-ray crystallography or NMR or, later, cryo-EM — but whose structures have not yet been released to the public. We'll announce just the sequences. We'll give the prediction community a few months. They'll submit their best predicted structures, blind. Then, once the experimental structures are published, we'll score each prediction against the truth.

That competition is called **CASP** — the Critical Assessment of Structure Prediction. It has run every two years since 1994. CASP1 was a tiny pilot. By the 2000s, hundreds of groups from around the world participated in each round. CASP became, and remains, the **World Cup of protein structure prediction** — the place where you go to prove, blind, that your method works on proteins nobody has seen before.

\[Pause.\]

The scoring matters, and I want to spend a minute on it. The main metric CASP uses is called **GDT_TS** — Global Distance Test, Total Score. The details are a little hairy, but the intuition is simple. You take your predicted structure. You superimpose it onto the experimental structure as best you can. Then you ask: what fraction of the alpha carbons — the backbone of the protein — are within one ångström of the truth? Within two? Within four? Within eight? You average those fractions. You get a number between zero and one hundred. A GDT_TS of one hundred means your prediction matches the experimental structure essentially perfectly. A GDT_TS of zero means your prediction is no better than random. A GDT_TS of around fifty is the rough threshold where people say the prediction is "useful" — you've got the overall fold right, even if many details are off. A GDT_TS above ninety is roughly considered competitive with experimental accuracy — the differences between your prediction and the experimental answer are within the noise of experimental measurement itself.

CASP categorizes targets by difficulty. Easy targets — where there's a similar protein with a known structure that you can build a model off — are called template-based or TBM. Hard targets — where no good template exists, where you really do have to predict from sequence — are called template-free or FM, for "free modeling." The hard targets are the real test. Anyone can do reasonably well on easy ones by copying from the database. The free-modeling category is where the field's progress has been measured for two decades.

\[Pause.\]

Here's the historical context that makes the punchline land. From CASP1 in 1994 through CASP12 in 2016 — that's twenty-two years, twelve rounds — the median GDT_TS on the hardest targets crept up slowly. From maybe twenty in the early rounds to maybe forty by 2016. Slow grinding progress. The kind of progress you write modest papers about. People got better at incorporating physics, at using databases of small structural fragments to build longer pieces, at picking templates cleverly. But no one was breaking the problem. No method could reliably predict a hard target's structure to high accuracy.

In 2018, at CASP13, something changed. A team you'd never heard of in a structural biology context — DeepMind, the AI lab inside Google that had just famously beaten human champions at Go — showed up to CASP13 with a new method called AlphaFold. And they didn't just win. They won by a substantial margin. The median GDT_TS on the hard targets jumped from the high thirties to about fifty-eight. That's a single round, single team, double-digit improvement on a benchmark where the field had been gaining a couple of points per round for twenty years.

The structural biology community, when this happened, didn't quite know what to make of it. There was excitement, there was suspicion, there was the awkward feeling of a community of grizzled veterans realizing that some kids who had never run a column or grown a crystal had just produced the year's most important result. CASP13's commentary, if you read the actual papers, is restrained but obviously rattled. Things were changing.

But CASP13's AlphaFold — what we now call AlphaFold1 — was good, not great. It was a real advance but it didn't solve the problem. The structures were better than anything before, but still substantially worse than experimental. You couldn't yet treat its outputs as ground truth.

Then came CASP14, in 2020. The same DeepMind team came back. They had spent the intervening two years rebuilding the system from scratch, with a radically different architecture. And what happened at CASP14 wasn't an incremental improvement. It was the kind of result that ends a competition. We'll get there in two segments. First, I want to lay out what the world of structure prediction looked like just before AlphaFold landed, because the contrast is what gives the story its shape.

---

## SEGMENT 4 — The pre-AlphaFold landscape — what we had

So you're a biologist in 2017. You've got a protein sequence. You want a structure. You haven't won the lottery, so you don't have your own crystallography facility. What do you do?

You go to one of three families of computational methods. Let me walk you through each one, because each one represents a strategy that gave us, at the time, our best non-experimental shot at getting a structure.

\[Pause.\]

**Family one: homology modeling.** The idea is simple and powerful. Maybe your protein doesn't have a known structure, but maybe a similar protein does. Maybe your protein is a kinase from some obscure organism, and there's already a structure for a kinase from yeast that has, say, forty percent sequence identity to yours. If two proteins have similar sequences — and especially if they have similar amino acids at the positions that matter — they almost always have similar three-dimensional structures. This is one of the deep regularities of biology: structure is far more conserved than sequence. So if you can find a "template" — a known-structure protein similar enough to yours — you can build a model by essentially threading your sequence onto the template's backbone, and then adjusting locally to accommodate the differences.

The dominant homology modeling tool, used by thousands of biologists worldwide, was a program called **Modeller**, developed by Andrej Sali. You give it your sequence, you give it a template, and it builds you a model. For closely related proteins, Modeller works beautifully. For more distant relationships, it works less well. And if your protein has no close-enough template — if it's a really novel fold — Modeller can't help you at all.

By the late 2010s, maybe forty percent of human proteins had a usefully-close template in the database. So homology modeling could get you something for that forty percent. The other sixty percent — including many of the proteins biologists most cared about — were essentially out of reach.

\[Pause.\]

**Family two: template-based modeling without a clear template.** This is the same idea as homology modeling, but stretched. What if there's no obviously related protein in the database, but there are scraps — short fragments that look like pieces of known structures? In that case, you can try to identify weak similarities through more sophisticated sequence comparisons — hidden Markov models, sequence profiles, deep evolutionary databases — and patch together a model from multiple weak templates. The methods in this category were creative but unreliable. Sometimes they worked. Often they didn't.

**Family three: ab initio, or "from first principles."** This is the dream that Anfinsen's hypothesis pointed toward — predict structure directly from sequence, without any template, using physics. Or quasi-physics. The most successful tool in this family was called **Rosetta**, developed by David Baker's lab at the University of Washington. Rosetta took a hybrid approach: it didn't try to fold the protein from pure physics, which would be hopeless. Instead, it broke the target sequence into short fragments — three to nine residues at a time — and, for each fragment, searched the database for short pieces of known structures with similar local sequence. Then it assembled the fragments into candidate structures using a Monte Carlo procedure, scoring each assembly with a knowledge-based energy function and keeping the lowest-energy candidates.

Rosetta worked, surprisingly well, for small proteins — under, say, a hundred amino acids — and it was the dominant ab initio method for over a decade. It launched a whole subfield, including the citizen science game **Foldit**, where players around the world fold proteins manually in a graphical interface and sometimes beat the algorithm. David Baker's lab also extended Rosetta toward design — using the same framework not just to predict structure from sequence, but to design sequences that would fold into a chosen structure. That'll be relevant when we get to David Baker and the 2024 Nobel.

\[Pause.\]

So that was the landscape, in 2017. You had homology modeling for the lucky cases. You had stretched template methods for the in-between cases. You had Rosetta and friends for small proteins from scratch. And for everything else — large proteins with novel folds, multi-domain proteins, anything really tricky — you had nothing, basically. Your sequence sat on the page, unfolded, untreated.

There's one more idea I want to plant now, because it'll come back in a big way. Through the 2010s, a slow-building line of research was suggesting that **evolutionary information** — patterns of mutation across many related sequences — might contain information about protein structure that pure single-sequence methods couldn't access. The idea, which we'll spend a whole segment on, was this: if you take your protein and find hundreds or thousands of homologs of it across species, and you line them all up, you can sometimes see that certain pairs of positions in the alignment mutate together. When position twenty-three changes, position eighty-eight tends to change too. That co-mutation, that **coevolution**, is a hint that positions twenty-three and eighty-eight are physically near each other in the folded structure — that one is compensating for the other. Methods that extracted these coevolutionary signals — methods with names like direct coupling analysis, EVfold, PSICOV, RaptorX — were getting better through the 2010s and were beginning to predict contact maps with useful accuracy.

But contact maps are not structures. Knowing that residue twenty-three is near residue eighty-eight is a useful constraint, but you still have to turn many such constraints into an actual three-dimensional model. That last step, the conversion from contact information into a coherent structure, was a hard combinatorial problem that nobody had quite cracked.

That's where things stood. Homology modeling for the lucky. Rosetta for the small. Coevolution-based contact prediction for the brave. And a slowly-growing sense, in the literature, that maybe — maybe — a sufficiently good machine learning method that could integrate all these signals would crack the whole problem. Several groups were trying. Nobody had succeeded.

Then DeepMind showed up at CASP13.

---

## SEGMENT 5 — AlphaFold1 — the first warning shot

In December 2018, the results of CASP13 came out. And the structural biology community, gathered at the meeting in Cancún, watched with a mixture of curiosity and wariness as a team from DeepMind — a London AI lab famous for building systems that played video games and beat humans at Go — presented their first protein structure prediction system, called AlphaFold.

The result was striking. On the hardest CASP targets, the free-modeling category — proteins where no good template existed — AlphaFold scored a median GDT_TS of around fifty-eight. The next-best group scored about fifty-two. The gap was modest in absolute terms, but in the slow-grinding world of CASP, a six-point lead from a team that had never before submitted to the competition was the kind of result that turned heads.

Let me say something about what made AlphaFold1 work, because the architecture is important context for understanding the much larger leap AlphaFold2 represented two years later.

\[Pause.\]

AlphaFold1 was, in essence, a deep convolutional neural network applied to the coevolution problem. Here's the setup. You take your target protein sequence. You search the public sequence databases — UniProt, the giant repository of every known protein sequence — and pull out hundreds or thousands of homologs. You align all those sequences into a **multiple sequence alignment** — an MSA. The MSA is a matrix: rows are sequences, columns are positions in the protein. Looking down any column, you see the variation at that position across evolution.

AlphaFold1 took that MSA, extracted statistical features from it — including coevolutionary signals between pairs of columns — and fed them into a deep convolutional neural network. The network's job was to output a **distogram**: a probability distribution, for every pair of residues in the protein, over the distance between them. Not just "are residues twenty-three and eighty-eight in contact" — that's a yes/no question — but "what is the probability distribution over the distance between residues twenty-three and eighty-eight?" Distance binned into discrete buckets. Much richer than a binary contact map.

Then, given the predicted distogram, AlphaFold1 did a second step: it used a separate optimization procedure to find a three-dimensional structure consistent with those predicted distances. This second step was actually fairly conventional — gradient descent on a structure under the constraint that pairwise distances should match the distogram.

So AlphaFold1 was, architecturally, a two-stage system: predict distances with a deep net, then build a structure from the predicted distances. The convolutional network was big — many layers, lots of parameters, trained on the entire Protein Data Bank — but it was, at heart, a sophisticated version of what other groups had been doing. The novelty was scale, training data, careful engineering, and excellent execution.

\[Pause.\]

The reaction in the community, after CASP13, was mixed. There was admiration for the result, but also some skepticism. A lot of people pointed out — correctly — that AlphaFold1 wasn't a fundamentally new idea. It was a better-engineered version of the coevolution-plus-deep-learning approach several groups had been pursuing. The improvement was real but not revolutionary. CASP13's predictions, while better than the field, were still substantially worse than experimental structures. You couldn't yet plug an AlphaFold1 model into a downstream pipeline and trust it the way you'd trust a crystal structure.

What CASP13 did do, definitively, was put DeepMind on the map. It signaled that this London AI lab, with its enormous compute budget and its world-class machine learning team, had decided to take protein structure seriously. And it caused everyone in the prediction community to start asking: what would DeepMind do if they really doubled down on this problem? With another two years and a redesigned architecture?

The answer, when it arrived in 2020, was AlphaFold2. And AlphaFold2 was not an incremental improvement on AlphaFold1. It was an architectural rebuild, almost from scratch, around a set of ideas that turned out to be transformatively better. It is the architecture we need to spend the next two segments on, because understanding it — at least at the conceptual level — is the difference between treating AlphaFold as a magic black box and treating it as a comprehensible piece of engineering.

So let's open the box.

---

## SEGMENT 6 — Inside AlphaFold2 — the Evoformer

AlphaFold2 was unveiled in 2020, at CASP14, and the architecture was described in detail in a Nature paper that came out in July 2021. The paper is one of the most-cited biology papers of the decade. It is also dense. I'm going to take you through the key ideas at a level where you understand the design, not at a level where you could implement it tomorrow.

\[Pause.\]

AlphaFold2 has two big components. The first is called the **Evoformer**. The second is called the **structure module**. They're connected in series, and the whole thing iterates — the output of the structure module feeds back into the Evoformer, which produces a refined representation, which feeds the structure module again, several times. Iterative refinement, learned end-to-end. We'll talk about the structure module in the next segment. This segment, the Evoformer.

Here is the central design insight of the Evoformer. Up to 2018, the standard approach was: take the MSA, extract some statistics from it — a covariance matrix, a contact prediction, that kind of thing — feed those statistics into a neural network, and let the network figure out the rest. The MSA itself was preprocessed away before the network ever saw it. The Evoformer says: don't preprocess. Let the neural network see the MSA directly and let it learn what statistics to extract.

The Evoformer maintains two representations of the protein, side by side. The first is the **MSA representation** — basically the multiple sequence alignment itself, kept as a matrix where each row is a homologous sequence and each column is a position. The network can update entries in this matrix as it processes information. The second is the **pair representation** — a matrix indexed by pairs of residues in the target protein, where each entry encodes everything the network has learned about the relationship between those two residues: how far apart they probably are, what angle they meet at, whether they're in contact, all encoded in a high-dimensional learned vector.

Two representations, side by side: a representation of the sequences-across-evolution, and a representation of the pairs-of-residues. And the Evoformer's job, layer after layer, is to make them consistent with each other.

\[Pause.\]

Here is the analogy I want you to hold for this. The Evoformer is the heart of AlphaFold2 — it alternates between updating an **alignment-of-sequences representation** and a **pair-of-residues representation**, repeatedly, until both converge on a consistent picture. It's like having two people working on a jigsaw puzzle from different sides of the table, and after each new piece, they compare notes and adjust. One person is reading evolution — looking at which positions vary together across species, which positions are conserved, which combinations seem allowed. The other person is building a structural map — which residues should be near each other, at what distances, at what angles. The two keep talking. The evolutionary observations inform the structural map. The structural map informs how to interpret the evolutionary observations. After enough back-and-forth, they converge on a coherent answer.

How does the back-and-forth actually work? Through a series of operations that the AlphaFold paper describes in detail, but at the conceptual level they fall into a few categories.

There are **row-wise attention** operations, where the network looks at each sequence in the MSA and asks: which positions in this sequence inform each other? This catches local sequence context — for example, that two residues close in primary sequence often influence each other's identity. There are **column-wise attention** operations, where the network looks at each column of the MSA — each position in the protein — and asks: how do the variants of this position across species relate to the variants at other positions? This is where coevolutionary signal lives. There are **triangular updates**, where the network looks at three residues at a time in the pair representation and enforces a kind of geometric consistency — if residue A is close to residue B, and residue B is close to residue C, then residue A and C should be at a constrained distance. This triangular logic mimics the way real geometry works in three dimensions and pushes the pair representation toward physically plausible configurations.

The two representations exchange information at every layer. The MSA representation passes information up into the pair representation. The pair representation passes information back down into the MSA representation. After forty-eight Evoformer blocks — that's the number AlphaFold2 uses — the two representations have been refined into something the structure module can use to produce coordinates.

\[Pause.\]

A few things to flag here. First, the Evoformer is, fundamentally, a **transformer-based** architecture. The "attention" operations I just described are the same kind of attention that powers GPT and other large language models. AlphaFold2 was one of the first really high-profile demonstrations that the transformer architecture, originally invented for natural language, could be adapted to a totally different domain — structural biology — with extraordinary results. The architecture is not language-specific. It's about processing relationships between items in a set, and proteins are sets of residues whose relationships matter.

Second, the Evoformer is **trained end-to-end**. You don't tell it what features to extract from the MSA. You don't tell it what statistics matter. You give it the raw MSA, you give it a true experimental structure as the target, and you let backpropagation figure out what representations to build. The fact that the system learned, on its own, to attend to coevolutionary signals — that it discovered, through gradient descent, the patterns of variation that humans had been hand-coding for years — is one of the deep ML-philosophical points the paper makes. Modern deep learning, given enough data and a flexible enough architecture, can rediscover the features that hand-crafted methods were extracting, and then go beyond.

Third, the iterative refinement matters. The Evoformer's output is passed to the structure module, the structure module produces a draft 3D structure, and then — here's the clever part — that draft is fed back into the Evoformer as additional input, and the whole pipeline runs again. AlphaFold2 typically does this three or four times. Each cycle, the structural information sharpens the Evoformer's pair representation, which sharpens the structure module's output, which sharpens the next cycle. It is, in effect, the network thinking out loud and refining its own answer.

That's the Evoformer. The MSA-and-pair tango, attention-based, end-to-end trained, iteratively refined. Next, we have to talk about the second half of the architecture — how the Evoformer's representations get converted into actual three-dimensional coordinates. That's the structure module.

---

## SEGMENT 7 — The structure module and invariant point attention

So the Evoformer has done its work. It has produced two refined representations — an MSA representation and a pair representation — that encode, in some highly abstract way, everything the network has figured out about the protein. Now we need to turn that abstract knowledge into actual three-dimensional coordinates. That's the structure module's job.

Here's the design problem the structure module had to solve. You want to place every atom of the protein in space — backbone atoms, side chain atoms, the works. There are a few thousand atoms in a typical protein. Each atom has three coordinates, x y z. You want the placement to be consistent with all the relationships the Evoformer has learned. And — crucially — you want the placement to be **equivariant** with respect to rotation and translation.

What does equivariant mean? It means that if you rotate the input — say, you imagine the same protein floating in space at a different orientation — the output should rotate the same way. The structure is the same structure; only the reference frame has changed. A neural network that didn't respect this would be a network that thought a protein at one orientation was a different protein from the same one at another orientation, which is obviously wrong.

\[Pause.\]

To get equivariance, the AlphaFold team invented a mechanism they called **invariant point attention**, or IPA. The details are technical, but the conceptual idea is this. Instead of representing each residue by an absolute position in some fixed reference frame, you represent each residue by a **local frame** — a tiny coordinate system attached to that residue, with its own origin and its own axes. The structure module operates in terms of how these local frames are positioned and oriented relative to each other. Because everything is described in terms of relative positions and orientations, the answers don't depend on what global reference frame you happen to be using. Equivariance, baked into the architecture.

The structure module starts by placing all residues at the origin, with arbitrary orientations. Then, through eight layers of invariant point attention, it iteratively updates the position and orientation of every residue's local frame. Each update is informed by the pair representation from the Evoformer — the pair representation says "residue A and residue B should be at this distance and this relative orientation," and the IPA layer adjusts the frames to be more consistent with that. After eight layers, the frames have settled into positions that are, collectively, the predicted backbone of the protein.

Once the backbone frames are in place, a separate side-chain prediction step places the side chains. For each residue, the network predicts the dihedral angles — the rotamer — of the side chain, and the atoms are placed accordingly. The end result, after the structure module has done its work, is a complete 3D structure: every atom of every residue, in coordinates, ready to be saved as a PDB file and visualized.

\[Pause.\]

I want to flag one more thing about this architecture, because it ties into the iterative refinement we discussed in the previous segment. The structure module's output is not the final answer. The predicted structure is fed back into the Evoformer, which uses it to refine the pair representation, which feeds the structure module again. This iterative loop — Evoformer to structure module to Evoformer to structure module, a few cycles deep — is what lets AlphaFold2 converge on really good predictions. The first pass might get the general topology right; the second pass refines local geometry; the third pass nails the details. The network is, effectively, thinking and rethinking, sharpening its answer each time around.

Finally, alongside the structure prediction, the network also predicts its own **confidence** — for every residue, how confident it is in the placement, and for every pair of residues, how confident it is in the relative positioning. These confidence outputs are the famous plDDT and PAE scores, which we'll dedicate a whole segment to later, because they are critical to using AlphaFold sensibly.

So to summarize the whole architecture: the MSA goes into the Evoformer, the Evoformer produces refined MSA and pair representations, the structure module turns those into 3D coordinates, and the whole pipeline iterates a few times. End-to-end, it's about thirty million parameters — modest by modern language model standards, but very large by biology standards. Trained on the entire Protein Data Bank — a hundred and seventy thousand experimental structures, plus distillation from predicted structures. Total training cost: substantial. Total compute to predict a single new protein: a few minutes on a single GPU. That is the leap. The training is expensive once; inference is cheap forever.

Now let's talk about why the MSA input — the multiple sequence alignment — was the key signal. Because this turns out to be the conceptual key to the whole thing.

---

## SEGMENT 8 — Why MSAs matter — coevolution as a structural signal

I've been mentioning multiple sequence alignments and coevolution in passing for a few segments now, and you might be wondering: why does this matter so much? Why are we so excited about lining up homologous sequences? What's the signal we're actually extracting?

Let me walk through this carefully, because the coevolution insight is one of the most beautiful ideas in modern structural biology, and AlphaFold's success would have been impossible without it.

\[Pause.\]

Here's the setup. You have a protein — say, an enzyme, three hundred amino acids long. That enzyme exists in every species you'd care to look at — humans, mice, yeast, fish, plants, bacteria. In each species, the enzyme has slowly drifted over evolutionary time. The amino acid at position fifty might be a valine in humans but a leucine in fish and an isoleucine in bacteria. The amino acid at position one hundred and twenty might be an arginine in mammals and a lysine in everything else. Across thousands of species, every position has its own pattern of variation.

Now here's the key observation. Take any two positions in the protein, say position twenty-three and position eighty-eight. Look at the variation at those two positions across all species. Sometimes you'll find that the two positions vary completely independently — twenty-three changes for its own reasons, eighty-eight changes for its own reasons, and the changes don't correlate. But sometimes you'll find that the two positions vary **together**. When twenty-three becomes a positive charge, eighty-eight becomes a negative charge. When twenty-three reverts to neutral, eighty-eight reverts too. The two positions co-vary across evolution.

Why would two positions co-vary? Because they interact physically. If position twenty-three is right next to position eighty-eight in the folded structure — touching it, hydrogen-bonding to it, electrostatically attracted to it — then a mutation at position twenty-three that disrupts that interaction would be bad for the protein. The protein would fold less well, or function less well, and natural selection would weed it out. But — and this is the elegant part — if there's a compensating mutation at position eighty-eight that restores the interaction, the double mutant is fine. So over evolutionary time, you tend to find double mutations that compensate, even when single mutations would be selected against. The result: positions that are physically close tend to show correlated variation across evolution.

\[Pause.\]

Here's the analogy I want you to hold for this. Imagine that you and a partner are dancing in a crowded ballroom — close together, hands touching. You can't see well; the room is dim. But across many ballrooms, in many evenings, your hand and your partner's hand always end up at the same height — not because either of you can see the other's height, but because you have to be touching, and you adjust to each other. To an outside observer, watching pairs of dancers across many ballrooms, the heights of your hands appear coupled. The observer doesn't see the touching directly; she just sees the correlation. But the correlation reveals the contact.

That, almost exactly, is the structural signal in an MSA. By looking at the same protein across many species, you can see which pairs of positions move together — and those pairs of positions, the ones that mutate together, are the ones that are physically close in the folded structure. Coevolution reveals contacts. The MSA is, in effect, a record of evolution's experiments — every species is a slightly perturbed version of the protein, and the patterns of which perturbations propagate together encode which residues touch each other in three dimensions.

Researchers had been trying to extract this signal for over a decade before AlphaFold. The early methods — direct coupling analysis, EVfold, PSICOV, others — used statistical techniques to disentangle direct correlations between pairs of positions from indirect correlations (transitive effects where A correlates with B because both correlate with C, but A and B don't actually touch). Those methods produced contact maps with useful but limited accuracy. AlphaFold absorbed and surpassed them — its Evoformer reads the MSA directly and extracts a far richer set of signals than any of the older statistical methods could.

\[Pause.\]

But there's a wrinkle. The coevolution signal only works if you have enough sequences. If your protein has only ten known homologs, your MSA is too small — the statistical signal is too noisy, the coevolution patterns can't be reliably detected. If your protein has ten thousand homologs spanning all of life, your MSA is rich, the coevolution patterns are clear, and the prediction is great.

This dependence on MSA depth has practical consequences. For abundant proteins from common protein families — kinases, GPCRs, ATPases, transcription factors — there are huge numbers of homologs in the databases, and AlphaFold's predictions are extraordinary. For rare, lineage-specific proteins — say, a protein found only in one obscure organism, with no detectable homologs — AlphaFold has much less to work with, and the predictions are correspondingly weaker. Single-sequence prediction, where you have no homologs at all, is the hardest case. AlphaFold2 still does something useful in this case — better than older methods — but its real magic is concentrated where the MSAs are deep.

This MSA dependence motivated, in 2022, a different approach from the team at Meta AI, called ESMfold, which we'll get to later. ESMfold tries to predict structure from a single sequence by leveraging a large protein language model that has, in effect, internalized the patterns of evolution from its pre-training. For now, just hold onto the picture: AlphaFold's secret weapon is the multiple sequence alignment, and the structural signal it extracts is the pattern of co-mutation across evolution. The protein folded itself in milliseconds in your cells; AlphaFold reads the record of how that folding has been refined across billions of years of life on Earth, and reverse-engineers the shape from the record.

---

## SEGMENT 9 — CASP14 — the moment AlphaFold solved it

December 2020. CASP14 results are released. Pandemic. Everyone is on Zoom. The protein structure community gathers virtually to see how this round went. And what happens is, by any reasonable accounting, the most important single moment in the fifty-year history of computational structural biology.

\[Pause.\]

Let me give you the numbers. The median GDT_TS on the hardest CASP14 targets — the free-modeling category, no good templates available — was about **92** for AlphaFold2. Ninety-two. On a scale of zero to a hundred. To put that in context: the next-best group scored around seventy. CASP13's best — AlphaFold1 two years earlier — had scored around fifty-eight. Two years of work had taken DeepMind from fifty-eight to ninety-two. The field had gone from "promising progress" to "essentially solved" in a single round.

But the GDT number, by itself, doesn't quite convey the situation. What does ninety-two actually mean? It means that, for most of the hard targets, AlphaFold's predictions were **within the experimental error** of the crystal structures they were being compared against. The differences between AlphaFold's predicted structure and the experimental gold-standard structure were on the order of one ångström — about the same as the differences you'd see if you crystallized the same protein twice in different conditions and got two crystal structures. You could not, just looking at the numbers, distinguish an AlphaFold prediction from an experimental structure.

For a problem the field had been working on for fifty years, where every CASP round saw incremental improvement of a few points and people wrote papers about it — to have a single team show up and post a result that was indistinguishable from experimental accuracy was, frankly, hard to take in. The conference, by accounts from the people there, was a mix of awe, congratulations, mourning, and some uncomfortable jokes. John Moult, the founder of CASP, gave a statement saying, in effect, the protein folding problem is solved. He had earned the right to say it.

\[Pause.\]

Let me give you a specific example, because I think it makes the point concrete. One of the CASP14 targets was a protein called ORF8 from SARS-CoV-2 — yes, the coronavirus, the same one that was at that point shutting down the world. ORF8 is a small viral protein with no close homologs in the database — a hard target by any measure. AlphaFold predicted its structure. Months later, the experimental crystal structure came out. The two were essentially identical. A prediction from sequence had matched a hard-won crystal structure of a brand-new virus.

Multiply that across hundreds of targets, and you have the situation that hit structural biologists in late 2020. For most of what they were doing — most kinds of proteins, most kinds of domains, most folds — the prediction problem was solved. You could type in a sequence and get a structure that was good enough to use for almost any downstream purpose: visualization, drug design, mutagenesis planning, mechanistic hypothesis generation. The structure was no longer the bottleneck. The bottleneck had moved to whatever question came next.

This is the moment, in our story, that the field changed character. After CASP14, every conference talk in structural biology had a slide on AlphaFold. Every grant proposal had to address whether the proposed work was now trivially doable. Every lab had to ask whether their multi-year crystallography project was still worth completing, or whether the answer was already in a model server somewhere. Some labs pivoted. Some doubled down on the hard targets AlphaFold couldn't handle. Everyone adjusted.

\[Pause.\]

I want to take a moment here, because I think it matters. There's a temptation, when a long-standing problem in a field gets solved by an outside group, to be either too triumphant or too defensive about it. To say "we did it!" — or to say "well, it doesn't really matter because of these limitations." Both reactions miss the point.

What happened at CASP14 was something the field had been trying to do for fifty years, and a team of mostly machine learning researchers — not classical structural biologists, mostly not biologists at all — succeeded by bringing in a different toolkit. Deep neural networks at scale. End-to-end training. The willingness to throw enormous compute at a problem. A culture of empirical experimentation rather than theoretical elegance. They built on top of decades of work the structural biology community had done — without the Protein Data Bank, without the painstakingly built MSA databases, without the coevolution insights from the previous decade, AlphaFold would not have been possible. But the synthesis, the architecture, the result — that was them, and they earned every bit of the credit they received.

This kind of intellectual humility, on both sides, is the right response. Biology needs machine learning now. Machine learning needs biology too — without rich, well-curated experimental data, none of these models would work. The interesting question, going forward, is not "are biologists obsolete" — they are not — but "what does the working life of a biologist look like in a world where most structural questions have computational answers, and where the most interesting biology is at the edges and frontiers where the models still struggle?"

We'll come back to that question in the final segments. For now, just hold onto the moment. December 2020. Median GDT_TS of ninety-two. The fifty-year-old problem, solved. And then, the year after, the open-source release and the database that changed everything downstream.

But we've been going hard for an hour. Let's take a break.

\[BREAK — about ten minutes. When we return, we'll talk about what happened after CASP14: the open source release, the AlphaFold Protein Structure Database, AlphaFold-Multimer, and then AlphaFold3 — and then we'll get into the practical questions: limitations, confidence metrics, how to actually use an AlphaFold model in your own work. See you in ten.\]

---

## SEGMENT 10 — The 2021 release and the database that broke biology open

Welcome back. We left off in December 2020, with AlphaFold2 having just essentially solved the protein structure prediction problem at CASP14. The next question — and it was an open question, in late 2020 — was: what would DeepMind do with this?

There were a few possibilities. They could keep it proprietary, license it for a fee, commercialize it. They could publish a paper but not release code, leaving the rest of the world to try to reproduce the work from scratch — which would have been a serious project, given the architectural complexity. Or they could open-source the whole thing, release the trained model, and turn the academic community loose. Different parts of the corporate machine learning world had taken each of these paths in other domains. Which would DeepMind choose for AlphaFold?

In July 2021, the answer came. They chose the third path. They published the AlphaFold2 paper in Nature — "Highly accurate protein structure prediction with AlphaFold," Jumper et al., July 15, 2021. Open access. They released the code on GitHub under an open license. They released the trained model weights. They made it possible, for any reasonably equipped lab in the world, to run AlphaFold on its own machines.

And then, a week later, they did something even bigger. They announced a partnership with the European Bioinformatics Institute — EMBL-EBI, the European public bioinformatics resource — to host an enormous database of pre-computed AlphaFold predictions, freely available to anyone with a web browser. The initial release, in July 2021, included structures for the entire human proteome — every protein encoded in the human genome, about twenty thousand of them — plus the proteomes of twenty other model organisms: mouse, fly, worm, yeast, Arabidopsis, malaria parasite, tuberculosis bacterium, and so on. About three hundred and sixty thousand predicted structures, total. All free. All searchable. All openly licensed.

\[Pause.\]

That database, called the **AlphaFold Protein Structure Database**, then kept growing. By 2022, it had been expanded to cover almost all of UniProt, the central protein sequence repository. The total, by mid-2022, was over two hundred million predicted structures. Two hundred million. The Protein Data Bank, after sixty years of experimental work, contained about two hundred thousand structures. The AlphaFold database, after about one year, contained a thousand times as many.

Here is the analogy that I think captures it. The AlphaFold Protein Structure Database is **two hundred million predicted structures — every protein in UniProt, free, indexed, instantly accessible**. If you are a biologist studying a protein for which there is no experimental structure, you used to face a multi-year project to get one. Now you type the UniProt ID into a website, and three seconds later you have a 3D model on your screen, with confidence metrics, ready to download. The transformation in the working life of bench biologists who needed structures was immediate and total.

I want to flag the decision to release this openly, because I think it was one of the most consequential acts of scientific generosity in the last decade. DeepMind could have made a lot of money charging for predictions. They didn't. They built the database, they made it free, they licensed it permissively, and they let the world have it. Demis Hassabis, DeepMind's CEO, has been pretty public about this being a deliberate choice — to make AlphaFold accessible to everyone, including resource-poor research labs in countries that couldn't afford a structural biology facility of their own. The downstream impact has been enormous and is still unfolding. Drug discovery programs in low-income-country malaria research, for example, have benefited disproportionately, because for the first time their target proteins have structures.

\[Pause.\]

The release also kicked off a wave of open-source reimplementations and extensions. Researchers at Columbia released **OpenFold**, a faithful open-source PyTorch reimplementation of AlphaFold2 that became the basis for further academic work. Researchers in academia and at other companies built variants — UnifiedFold, MegaFold, FastFold — that optimized for speed, for memory, for special use cases. The Baker lab at Washington — David Baker's group, of whom much more in a few segments — released **RoseTTAFold**, an AlphaFold-inspired but architecturally distinct prediction system, which was actually published a week before AlphaFold's Nature paper appeared, and was the first really competitive open-source response.

The point of all of this is that the 2021 release didn't just give the world AlphaFold; it gave the world an entire ecosystem of fast, accurate, free protein structure prediction tools, with active development across academia and industry. By the end of 2021, predicting protein structures had gone from a research problem to a standard tool — the way alignment or BLAST had been standard tools for the previous twenty years.

We'll come back to the broader ecosystem — RoseTTAFold, ESMfold, the Baker lab's design work — in a later segment. For now, hold onto the picture: by mid-2021, AlphaFold was open-source, the database was free and growing, and the world's biologists had, more or less overnight, gained access to a structural model for essentially any protein they cared to look up.

---

## SEGMENT 11 — Beyond single proteins — AlphaFold-Multimer and complexes

The original AlphaFold2 was trained to predict the structure of a single protein chain — a single polypeptide, folded into its three-dimensional shape. That's a substantial capability, but it leaves out something biology cares about deeply, which is that most proteins don't function alone. They function as **complexes** — assemblies of two or more protein chains, sometimes from different genes, that come together to do their job. Hemoglobin is four chains. Ribosomes are eighty. The proteasome is a barrel of fourteen subunits. Antibodies are four chains. Signaling complexes can be dozens of proteins. Single-chain predictions, however accurate, can't tell you how proteins assemble with each other.

Within a few months of the 2021 release, the DeepMind team and others started extending AlphaFold to handle complexes. The first official extension was called **AlphaFold-Multimer**, released in late 2021. It was, conceptually, a fairly straightforward adaptation: instead of running the network on a single sequence, you run it on the concatenated sequences of all the chains in the complex, with some special tokens to mark the boundaries between chains, and you train it on experimentally determined complex structures so it learns to predict not just the fold of each chain but how the chains pack against each other.

AlphaFold-Multimer worked, with caveats. For complexes where the individual subunits had well-determined folds and the interface between them was a standard kind of protein-protein interaction surface, it predicted the assembly accurately. For very large complexes, for complexes with low-affinity transient interactions, for complexes where the binding interface involved conformational change, it struggled. It was a good first step, not a complete solution.

\[Pause.\]

I want to spend a moment on why complex prediction is harder than single-chain prediction, because the difficulty reveals something interesting about what these models are doing.

For a single protein, the MSA gives you very strong evolutionary signal. Across thousands of species, the same protein appears with conservation patterns that scream the structure. For a complex of two proteins, you need not just MSAs for each protein but a way to figure out which sequences across species are the partners of which other sequences — which protein A in species X interacts with which protein B in species X — and to build a **paired MSA** where the rows correspond to actual partner pairs, not random pairings. The signal you want is the co-mutation _between_ the two proteins, across species, at the binding interface. That signal is rich when you can pair the sequences correctly; it's noisy or absent when you can't.

For permanent obligate complexes — pairs of proteins that always interact — the pairing is unambiguous and the signal is good. For transient or weak interactions, where any given species might have a different binding partner, the pairing is unreliable, and the signal degrades. So AlphaFold-Multimer's accuracy turns out to be very dependent on the type of interaction. Stable, evolutionarily-coupled complexes — great. Transient, opportunistic complexes — much worse. The pattern of strengths and weaknesses comes directly from what kinds of evolutionary signal can be reliably extracted from the available data.

\[Pause.\]

There's a related class of problems AlphaFold-Multimer couldn't really touch, which is interactions with non-protein molecules. Real biology is full of these. Proteins bind DNA. Proteins bind RNA. Proteins bind small molecules — substrates, drugs, cofactors like ATP, metal ions, lipids. These interactions are central to drug discovery and enzymology. AlphaFold2 and AlphaFold-Multimer, trained only on protein-protein and protein-itself, had no way to predict where a small molecule would bind in a protein pocket, or how a transcription factor would clamp onto DNA, or how an RNA-binding protein would recognize its target.

That gap, the gap between protein-only prediction and the rich heterogeneous world of biomolecular interactions, was the obvious next frontier. And in 2024, DeepMind closed it, with AlphaFold3. Let's go there next.

---

## SEGMENT 12 — AlphaFold3 — biomolecular interactions in one framework

In May 2024, DeepMind and their drug-discovery spinoff company Isomorphic Labs published a paper in Nature called "Accurate structure prediction of biomolecular interactions with AlphaFold 3." This was the next big jump. AlphaFold3 — the third major version of the system — was trained to predict not just protein structure, but the structures of essentially any biomolecular assembly you might care about: proteins, protein complexes, protein-DNA complexes, protein-RNA complexes, protein-small molecule complexes, complexes with covalent modifications, complexes with metal ions, complexes with multiple types of biomolecules at once. One unified framework. One model. Sequence input, structure output, for the entire heterogeneous biomolecular zoo.

\[Pause.\]

The analogy I want here is: AlphaFold3 is **the upgrade — handle DNA, RNA, ligands, protein complexes in one unified framework, diffusion-based, like the image-generation models of 2024**. If AlphaFold2 was a system that took the language of biology — protein sequences — and produced shapes, AlphaFold3 is a system that takes the entire alphabet of biomolecular chemistry — nucleotides, amino acids, small molecule SMILES strings, modifications — and produces shapes of assemblies.

How is the architecture different? Several ways. The Evoformer of AlphaFold2 has been replaced with something simpler, called the **Pairformer**, which still maintains a pair representation but de-emphasizes the heavy reliance on multiple sequence alignments — partly because for non-protein components like ligands and DNA, MSAs don't apply, and the architecture had to be generalized.

The biggest change is in the structure module. Whereas AlphaFold2 had the invariant point attention machinery that directly produced atom coordinates, AlphaFold3 replaced that with a **diffusion-based** structure prediction. Diffusion models, in machine learning, work by starting with random noise — random positions in space — and iteratively denoising them, step by step, toward a coherent output. This is the same family of methods that powers modern image generation — DALL-E, Stable Diffusion, Midjourney. You give the model a description, it starts with noise, and through twenty or fifty or a hundred denoising steps, the noise resolves into a clean image. AlphaFold3 does the same thing for atom coordinates: it starts with all atoms at random positions, and iteratively denoises them, conditioned on the input sequences and chemistry, until they settle into a coherent biomolecular structure.

The diffusion approach has some elegant properties. It naturally handles heterogeneous inputs — proteins, DNA, RNA, small molecules — by treating each one as just another set of atoms to be placed, with chemistry-aware constraints. It can produce multiple plausible structures by running the diffusion with different random initializations, which gives a sense of uncertainty. And it integrates well with the rest of the network's reasoning, because the diffusion is guided by representations that the earlier parts of the network have produced.

\[Pause.\]

The results were striking. On protein-protein complexes, AlphaFold3 substantially outperformed AlphaFold-Multimer. On protein-DNA and protein-RNA complexes, AlphaFold3 set the new state of the art — by a wide margin, since prior methods for these tasks were specialized tools, and AlphaFold3 absorbed the capability into its unified framework. On protein-small molecule prediction — what the field calls protein-ligand docking, central to drug discovery — AlphaFold3 matched or exceeded specialized docking tools that had been developed and refined for two decades.

The integration was the point. Before AlphaFold3, if you wanted to predict a protein structure you used AlphaFold2; if you wanted to dock a ligand into the predicted protein, you used a separate tool like AutoDock or Glide; if you wanted to predict how DNA bound to the protein, you used yet another tool; and stitching the results together was your problem. After AlphaFold3, you could in principle do all of this in one model, with one inference pass, with self-consistent results.

There's a wrinkle worth mentioning, which is that AlphaFold3, unlike AlphaFold2, was not initially released as open-source code. Isomorphic Labs, DeepMind's drug discovery spinoff, kept the model proprietary for inference, releasing only a free web server with usage limits. This caused some controversy in the open-science community. As of late 2024 and into 2025, the policy was being adjusted under community pressure, with weights eventually being released for non-commercial academic use. There were also rapid open-source reimplementations and competitors — including from David Baker's lab — that approached the AlphaFold3 capability. The full picture is still settling.

But the scientific message is clear: by 2024, the unified prediction of biomolecular structures — proteins, complexes, with ligands and nucleic acids, all at once — had become not just possible but standard. AlphaFold3 was, in many ways, the natural extrapolation of what AlphaFold2 had started, and it closed many of the remaining gaps in computational structural biology.

Now — and this is where the lecture has to slow down a little and become more honest — we need to talk about what AlphaFold can _not_ do. Because the press releases and the news coverage have sometimes been a little exuberant, and the working practice of using these tools requires understanding their failure modes as much as their successes. Let's go there.

---

## SEGMENT 13 — Limitations — what AlphaFold gets wrong

If you read the news coverage of AlphaFold, you might come away with the impression that protein structure is a fully solved problem and that any structural question you might want to ask can be answered by typing a sequence into a server. This is, to put it gently, an overstatement. AlphaFold is extraordinary. It also has well-defined and important limitations, and a competent practitioner has to understand them.

Let me walk you through the limitations in roughly the order they bite you in practice.

\[Pause.\]

**Limitation one: dynamics and conformational change.** AlphaFold gives you one structure — a single static snapshot, the network's best guess at the ground-state conformation. But many proteins are not static. They are machines. They open and close. They bind ligands and change shape. They cycle through multiple distinct states — active and inactive, open and closed, monomeric and oligomeric. AlphaFold is not, fundamentally, a model of motion. It is a model of a single equilibrium structure. If your protein has multiple functional conformations, AlphaFold will give you one of them — usually the most common, sometimes a weird hybrid, and not necessarily the one you care about.

For an enzyme that needs to open up to admit a substrate and close around it for catalysis, AlphaFold might give you the open form, or the closed form, or something in between, depending on which form is best represented in its training data. It cannot tell you that the protein switches between two states, or how often, or what triggers the switch. Dynamics — the time dimension — is not what AlphaFold predicts.

**Limitation two: allostery.** Allostery is the phenomenon where binding at one site on a protein changes the structure at a distant site. It is central to how many regulatory proteins work — hemoglobin's cooperative oxygen binding, kinase activation by upstream signals, the regulation of metabolic enzymes by metabolites. Allostery requires the protein to exist in multiple conformations and to transition between them in response to binding events. AlphaFold, again, gives you one snapshot. It cannot in general predict that a mutation at residue fifty will change the structure at residue two hundred, because the two are connected by an allosteric network — that's exactly the kind of subtle, multi-state behavior the model doesn't capture.

**Limitation three: intrinsically disordered regions.** Not every protein has a fixed structure. Many proteins, or many regions within proteins, are intrinsically disordered — they don't fold into a single stable shape, they exist as ensembles of constantly-shifting configurations. Disordered regions are common — maybe thirty to forty percent of human proteins have substantial disordered segments — and they often matter functionally, especially in signaling and regulation. AlphaFold can identify disordered regions, because it assigns them low confidence scores, but it cannot tell you anything meaningful about what they do or what shapes they sample. The model is built for ordered structure; disordered protein is largely outside its scope.

**Limitation four: post-translational modifications.** In real cells, proteins are decorated, after they're made, with chemical modifications — phosphate groups, glycans, acetyl groups, ubiquitin chains, and dozens of others. These modifications often profoundly change the structure or function of the protein. AlphaFold2, trained on protein sequence input, doesn't know about modifications. AlphaFold3 handles some, but the comprehensive prediction of how a protein looks with its real cellular modifications is still mostly out of reach.

**Limitation five: mutations far from wild-type.** AlphaFold's accuracy is best when the input is similar to sequences in its training data — sequences that exist in nature or close to it. If you input a heavily mutated protein, especially a designed protein with many simultaneous changes, the model's predictions become less reliable. It hasn't seen variants like that during training, and it doesn't always extrapolate well. This is a real issue for protein engineering, where the whole point is to make non-natural variants.

**Limitation six: membrane proteins.** Membrane proteins — the ones that sit in cell membranes, including most drug targets — are systematically underrepresented in the Protein Data Bank because they're hard to crystallize. AlphaFold's training data is correspondingly sparser for them, and its predictions for membrane proteins, while still useful, are on average somewhat less accurate than for soluble proteins. This is improving — better methods for membrane proteins are an active research area — but it's a persistent gap.

\[Pause.\]

The honest summary is: **AlphaFold gets most of the structure right, most of the time, for most proteins.** That's not "all" of the structure, not "all of the time," not "all" proteins. It's a probabilistic statement about a model that, on average, is fantastically useful but has clear failure modes. The competent way to use it is to look at every prediction with its confidence scores in hand, to be skeptical of low-confidence regions, to cross-check important predictions against any experimental data you can get, and to remember that the model gives you one frozen snapshot of a molecule that, in reality, lives a much richer dynamic life.

The cheerleading narrative that "protein structure is solved" should really be "the ground-state structures of most folded soluble proteins, given enough homologs, can now be predicted to near-experimental accuracy." That is still an absolutely transformative result. It's just not the same as solving all of structural biology.

Which brings us to a tool that every AlphaFold user needs to know how to read: the confidence metrics.

---

## SEGMENT 14 — Reading the model — plDDT and PAE

When AlphaFold gives you a predicted structure, it doesn't just hand you coordinates. It also hands you two confidence metrics, and learning to read them is the difference between using AlphaFold competently and using it dangerously.

\[Pause.\]

The first metric is called **plDDT** — predicted local distance difference test. It's a number between zero and a hundred, assigned to every residue in the predicted structure. The number is the model's estimate of how accurate it thinks the local structure around that residue is, in terms of distances to neighboring atoms. Higher is better.

Here's how to interpret plDDT in practice. **Above ninety**, the prediction is considered very high confidence — local structure can be trusted, including details like side chain orientations. The model is essentially saying: I am very sure about this region, and you can use it the way you'd use a high-quality experimental structure. **Between seventy and ninety**, confidence is good — backbone is reliable, side chains are mostly trustworthy, you can use the structure for most purposes but be aware that subtle details may be off. **Between fifty and seventy**, confidence is low — the backbone topology might be roughly right, but local geometry is uncertain. Use with caution. **Below fifty**, the prediction is essentially a guess — the model doesn't know what's going on here. Below-fifty regions are often disordered regions, or regions where the MSA was poor, or regions where multiple conformations exist.

When you open an AlphaFold model in a viewer, the structure is typically colored by plDDT — blue and dark blue for high confidence, yellow and orange for medium, red for low. You learn to scan the structure and look at the colors. A protein that's mostly blue with a few orange loops on the surface — that's a confident prediction with some uncertainty in flexible regions, which is what you'd expect. A protein that's mostly red and orange — that's a prediction you shouldn't trust without further evidence.

\[Pause.\]

Here's the analogy I want for plDDT. **It's the per-residue confidence — high (above ninety) means trust the local structure; low (below fifty) means the model isn't sure**. It's like a weather forecast that gives you a probability of rain for each hour of the day. You don't just look at the forecast and assume it's right; you look at the confidence, and you make decisions accordingly.

\[Pause.\]

The second metric is called **PAE** — predicted aligned error. While plDDT tells you about local structure around each residue, PAE tells you about the relative positioning of pairs of residues. For any two residues i and j, PAE is the model's estimate, in ångströms, of how confident it is in their relative position — if you aligned the structure at residue i, how far off in space might residue j be from its true position?

PAE is typically displayed as a two-dimensional matrix — rows and columns are residues, color encodes the predicted error. Low PAE (green or dark) means the model is confident about the relative position of those two residues. High PAE (red or bright) means the model isn't sure.

Why does PAE matter, given that we already have plDDT? Because they tell you different things. A protein might have two domains, each of which is locally well-predicted — high plDDT throughout — but the relative orientation of the two domains might be uncertain. The PAE matrix would show that beautifully: each domain shows up as a green block (residues within a domain are confidently positioned relative to each other), but the cross-blocks between domains are red (residues across domains have uncertain relative positions). That's the signal that the protein has a flexible inter-domain hinge and that the model can't commit to one orientation over another.

For multimer predictions — complexes of multiple chains — PAE is especially important, because it tells you whether the model is confident that the two chains are interacting in the predicted way. Low PAE between residues of chain A and residues of chain B means the model is sure about the interface. High PAE there means the model has placed the chains in some configuration but isn't confident about which.

\[Pause.\]

In practice, the workflow looks like this. You get an AlphaFold prediction. You open it in a viewer — PyMOL or ChimeraX or some web tool. You color by plDDT and look at where the model is confident and where it's not. You pull up the PAE matrix and look at which parts of the structure are confidently placed relative to each other. You decide, based on what you see, which parts of the prediction to trust and which to be skeptical of. You design your downstream work accordingly — maybe you build a drug-design pipeline around the high-confidence pocket, and you don't take the flexible disordered tail too seriously.

This kind of literacy — being able to look at an AlphaFold model and read its confidence — is a basic skill in modern structural biology, on the same footing as being able to read a sequence or interpret an alignment. If you're going to use these tools in your own work, you need to learn it. It is not optional.

---

## SEGMENT 15 — The impact on biology

We have spent a lot of time on the technical details of AlphaFold — what it is, how it works, where it falls short. Now I want to zoom out and talk about what its existence has meant for biology, day to day, in 2021 through today. Because the technical accomplishment is one thing; the downstream impact has been remarkable and is still unfolding.

\[Pause.\]

**Impact one: instant structural models for any sequence.** This is the obvious one, but it's worth saying clearly. Before AlphaFold, if you wanted to know what your protein looked like, you either did months of experimental work, or you found a homolog, or you didn't know. Now you get a model in seconds. The result is that structural thinking has been integrated into routine biology in a way it never was before. PhD students who don't consider themselves structural biologists now routinely pull up AlphaFold models of the proteins they're studying, look at the structures, design mutants, plan experiments. The structural context is just there, available, the way sequence information has been available for thirty years.

**Impact two: drug discovery.** Most drugs work by binding to specific pockets on specific proteins — usually inhibiting an enzyme, blocking a receptor, or interfering with a protein-protein interaction. The first step in drug design is having a structure of the target protein, ideally with the binding site clearly visible. AlphaFold has, in many cases, given drug-discovery groups structures of targets that they previously had no structure for, or had only crude models of. This is especially valuable for what the field calls "undruggable" targets — proteins that historically resisted crystallography. Many of those targets now have AlphaFold models, which has reopened drug discovery campaigns that had been stalled.

A particularly active area is **structure-based virtual screening**, where you take an AlphaFold model of a target protein and dock millions of small molecules into its binding site computationally, looking for hits. Combined with AlphaFold3's improved protein-ligand prediction, this kind of computational drug discovery has accelerated dramatically.

**Impact three: enzyme engineering.** If you want to engineer an enzyme to do something it doesn't normally do — accept a different substrate, work at a higher temperature, catalyze a different reaction — you need to understand the active site. AlphaFold gives you the active site, with confidence metrics. The result is faster and more rational enzyme engineering programs across academia and industry. This connects to the **directed evolution** workflow we'll cover in a later book — AlphaFold doesn't replace directed evolution, but it changes where you start, because you can rationally design a much smarter starting library than you could before.

**Impact four: antibody design.** Antibodies, those Y-shaped immune molecules we covered in another lecture, are a major class of drugs, and antibody engineering is a substantial industry. AlphaFold has been less transformative for antibodies than for many other classes — the CDR loops that determine antibody binding are highly variable, AlphaFold has trouble with them, and dedicated antibody-specific prediction methods often outperform general AlphaFold for antibody structures. But for antibody framework prediction, for predicting antibody-antigen complexes, and for antibody design pipelines that combine AlphaFold with other methods, it's still been a substantial improvement.

\[Pause.\]

**Impact five: variant interpretation.** Patients with genetic diseases often have mutations in protein-coding genes — point mutations that change a single amino acid. The clinical question is: is this mutation likely to be pathogenic? Does it disrupt the structure? Does it affect a binding site? AlphaFold-derived methods like AlphaMissense have started to be used for variant effect prediction at scale, classifying single amino acid changes as likely benign or likely damaging based on predicted structural impact. This has potential clinical relevance for hundreds of thousands of variants that show up in patient genomes.

**Impact six: evolutionary and ecological biology.** When you can predict structures for any protein, you can predict them for all the weird proteins from understudied organisms — from environmental microbiomes, from extremophiles, from organisms that biologists hadn't gotten around to studying because the proteomes were too unfamiliar. The structural classification of life expands, and we can ask new questions about how protein folds are distributed across the tree of life.

**Impact seven: education.** I would be remiss not to mention this. Every introductory structural biology course now uses AlphaFold models as part of the teaching toolkit. Students who would once have struggled to understand a single crystal structure can now compare structures across dozens of related proteins effortlessly. The kind of intuition that took graduate students years to develop is now accessible to undergraduates. The downstream consequences for the next generation of biologists are still being worked out.

\[Pause.\]

The shorthand for all of this is something like: AlphaFold reset the cost of structure from a multi-year project to a button click. Anything in biology that was bottlenecked by getting a structure has moved faster. And many things, downstream, that were bottlenecked by structure but didn't admit it have, in hindsight, turned out to have been waiting on AlphaFold the whole time.

We'll spend one more segment on the broader ecosystem — the related tools and the way AlphaFold fits with experimental methods — and then a few segments on the frontier and the Nobel Prize and where the field is going.

---

## SEGMENT 16 — The ecosystem — RoseTTAFold, ESMfold, OpenFold, and experimental hybrids

AlphaFold did not exist in a vacuum. The success of AlphaFold catalyzed a wave of related developments, and by 2023 and 2024 there was a genuine ecosystem of structure prediction tools, each with its own strengths and use cases. Let me walk through the main players, because if you're going to do any of this work, you'll encounter all of them.

\[Pause.\]

**RoseTTAFold**, from David Baker's lab at the University of Washington, was the first major open-source response to AlphaFold2. It was published in Science in July 2021, the same month AlphaFold2's Nature paper appeared. Architecturally, RoseTTAFold is similar in spirit to AlphaFold — it uses MSA inputs, it maintains paired representations, it uses attention — but it differs in some specifics, notably in maintaining three parallel representational tracks rather than two. Its accuracy was somewhat behind AlphaFold2 at launch but closed the gap rapidly. The Baker lab has since released RoseTTAFold-NA for nucleic acid prediction, RoseTTAFold-AllAtom for general biomolecular complexes (a counterpart to AlphaFold3), and most importantly RFdiffusion, which we'll get to in the frontier segment, for protein design.

**OpenFold**, developed at Columbia and Open Source Initiative, is a faithful open-source PyTorch reimplementation of AlphaFold2 — same architecture, retrained from scratch, made fully open and modifiable. OpenFold has become the basis for a lot of academic work, particularly variants that retrain or fine-tune AlphaFold-style models on specialized datasets, and is the lingua franca of academic AlphaFold-style research.

**ESMfold**, from Meta AI's research team, took a different angle. Instead of relying on MSAs at inference time, ESMfold uses a large protein language model — called ESM — that was pre-trained on hundreds of millions of protein sequences across all of life. The language model has, in effect, internalized the patterns of evolution from its pre-training. ESMfold then uses the language model's learned representations to predict structures from a single input sequence, no MSA required. The trade-off is that ESMfold is somewhat less accurate than AlphaFold2 on average, especially for proteins with deep MSAs available, but much faster — sometimes orders of magnitude faster — and works on proteins with no detectable homologs at all. For applications where you need lots of predictions fast, or where MSAs aren't available, ESMfold is the tool of choice. Meta also used ESMfold to predict structures for over six hundred million metagenomic proteins, releasing them in the ESM Metagenomic Atlas in 2022, a complement to the AlphaFold Protein Structure Database.

There are others — Boltz from MIT (an open implementation in the AlphaFold3 lineage), Chai from Chai Discovery, ColabFold from a community of researchers (which wraps AlphaFold in a Google Colab notebook for accessibility), and many more. The ecosystem is rich and growing. The point is that you have choices now, and the choice depends on what you're trying to do.

\[Pause.\]

I want to spend the rest of this segment on something different: how AlphaFold integrates with experimental methods. Because despite all the prediction power, experiments are not going away — they're just being repositioned, and the synergy between prediction and experiment is itself a major development.

**Cryo-EM hybrid workflows.** Cryo-electron microscopy is now the leading experimental method for getting structures, especially of large complexes that don't crystallize. Cryo-EM gives you a 3D density map — a blob of electron density in space — and your job is to figure out which atoms go where inside the density. Historically, this was a painstaking interpretation process. Now, you predict structures with AlphaFold first, and then **fit** the predicted structure into the experimental density. AlphaFold gives you the model; the cryo-EM map tells you where the model belongs in space and confirms or refutes details. The two are powerfully complementary: AlphaFold's predictions are most trustworthy where the density is clearest, and the density resolves ambiguities that the prediction couldn't.

**X-ray crystallography phasing.** In X-ray crystallography, getting from raw diffraction data to a structure requires solving the "phase problem" — the data tells you the amplitudes of diffracted waves but not their phases. To solve the phases, crystallographers use a variety of methods, one of which is **molecular replacement** — using a similar known structure as a starting point. Historically, you needed a structurally similar protein with at least thirty or forty percent sequence identity to your target. Now, you can use an AlphaFold model of your target as the molecular replacement search model, and it works for proteins that previously had no usable starting point. Crystallography hasn't gone away, but the bottleneck has shifted — getting a crystal that diffracts well is now often the limiting step, not figuring out what the diffraction data means.

**NMR.** Nuclear magnetic resonance gives you, classically, a network of distance and angle restraints between atoms. Combining NMR restraints with an AlphaFold starting model gives you a structure that's far more accurate than either alone, especially for small proteins where NMR shines and AlphaFold has slightly weaker training data.

The pattern across all of these is: prediction and experiment are now collaborators. The prediction gives you a high-quality starting model. The experiment grounds it in reality, fills in dynamic information, validates the prediction, and reveals where the prediction is wrong. That hybrid workflow is now standard in structural biology.

---

## SEGMENT 17 — De novo design and the 2024 Nobel

In October 2024, the Nobel Prize in Chemistry was announced. It was split between three people. Half went to David Baker of the University of Washington, "for computational protein design." The other half was split between Demis Hassabis and John Jumper of DeepMind, "for protein structure prediction" — that is, AlphaFold.

This is the prize that, in some sense, this whole lecture has been building toward. So let me spend a segment on what it acknowledged and on the David Baker side of the story, which is a different but closely related story we haven't really covered yet.

\[Pause.\]

The prize honored two complementary achievements. AlphaFold solved the **prediction** problem — given a sequence, predict the structure. Baker's lab, over decades, solved a related but inverse problem: given a desired structure, design a sequence that will fold into it. This is **de novo protein design** — designing proteins from scratch, not copying nature, to do specified tasks. And while AlphaFold's headline achievement is more recent, the design work has been going on quietly since the early 2000s and has accelerated explosively in the AlphaFold era.

Why are design and prediction connected? Because, in a deep sense, they are inverse problems sharing the same physics. If you can score how well a sequence matches a given structure — which is what good prediction methods can do — you can also reverse the question: given a target structure, find sequences that score well for that structure. The Baker lab's Rosetta software, which we mentioned in Segment 4, was used for both prediction and design from the beginning. And as prediction methods improved — first Rosetta, then RoseTTAFold, then AlphaFold-derived approaches — design methods improved in lockstep.

The list of things David Baker's lab has designed, over the years, is striking. They've designed enzymes that catalyze reactions evolution never invented. They've designed self-assembling protein cages, like little molecular soccer balls, useful as vaccine scaffolds. They've designed binders for specific therapeutic targets — small designed proteins that grip a chosen surface, like custom antibodies but with simpler architecture. They've designed proteins that fold into shapes that don't exist in nature — totally novel folds. And in the last two or three years, with the integration of diffusion-based generative models (more on those in the next segment), they've been designing proteins for almost arbitrary specifications, with remarkable success rates.

\[Pause.\]

The connection to AlphaFold is that the prediction tools and the design tools have become essentially the same toolkit, going in opposite directions. AlphaFold, when you run it backward — when you treat its prediction as a scoring function for "how well does this sequence fold to this structure" and search through sequence space to optimize the score — becomes a design tool. RFdiffusion, the Baker lab's recent design tool, is in a similar relationship to RoseTTAFold. The same neural network architectures that read evolution to predict structure can be flipped around and made to invent new sequences that fold to specified shapes.

There's an analogy worth holding: prediction is to design as reading is to writing. For a long time, biology had only the reading direction — analyzing existing proteins. Design tools, now coming into their own, give us the writing direction — making new proteins. The 2024 Nobel honored both halves of that capability.

\[Pause.\]

A note on Nobel etiquette. The chemistry committee, in awarding this prize, made an interesting choice. The work it honored is, in some sense, machine learning work — the structure prediction half is unambiguously deep learning. The committee placed it in chemistry rather than in some hypothetical "computational science" category, because the impact is on chemistry — specifically on protein chemistry. This signaled that machine learning, when it produces transformative results in a domain like chemistry, will be recognized within that domain's Nobel category. It's the same year as another Nobel for machine learning — the 2024 Physics Nobel went to Geoffrey Hinton and John Hopfield for foundational ML work — and both were widely interpreted as the Nobel committees acknowledging that ML has become central to modern science.

The Baker side of the prize, in particular, also signals something about how design will likely shape biology in the coming decades. We are entering an era in which we don't just understand natural proteins but invent new ones to do things evolution never did. Therapeutic proteins designed from scratch. Industrial enzymes designed for chosen reactions. Diagnostics. Materials. A whole new bestiary of human-designed molecules. This is the frontier the next lecture in this series will cover in detail. For now, just hold onto the picture: AlphaFold reads protein structure; Baker's design tools write it; and as of 2024, both halves of that capability are essentially in place and the field is racing forward.

Which brings us to the final segment — what's happening at the frontier right now, and where this is all going.

---

## SEGMENT 18 — The frontier and where this is going

We have come a long way in this lecture. We started with Anfinsen, in the 1960s, establishing that the sequence determines the structure. We walked through fifty years of slow progress. We arrived at the AlphaFold moment in 2020, the open-source release in 2021, AlphaFold3 in 2024, and the Nobel later that year. Now I want to spend our last segment on what's happening at the frontier right now, in 2024 and 2025, because the field is far from done.

\[Pause.\]

**Diffusion models for design.** I mentioned RFdiffusion in passing. Let me unpack it slightly. RFdiffusion is a generative model — like the image-generation models we discussed in Segment 12, but for proteins. You specify a target — say, "design a protein that fits onto this surface of this target protein with high affinity," or "design a small protein that holds these three residues in a specific geometric configuration to form an enzyme active site" — and RFdiffusion generates candidate proteins, by starting with random noise in coordinate space and iteratively denoising it into a coherent structure, subject to the constraints you specified. The denoising is guided by a network derived from RoseTTAFold, repurposed from prediction to design.

The success rates are striking. RFdiffusion can design binders to specified protein targets at rates that, two years ago, would have been considered fantasy — sometimes thirty to fifty percent of designed proteins actually bind their target in experimental tests, where previously the rate was a fraction of a percent. The Baker lab and others have been generating tools at a remarkable clip, and the broader field of generative protein design — with related tools like **Chroma**, **ProteinMPNN**, **ESM3**, and others — is now one of the most active in computational biology.

**AlphaFold-Latest and continued improvement.** DeepMind and Isomorphic continue to develop the AlphaFold series. AlphaFold-Latest, mentioned in various 2024 communications, represents continued iteration on the AlphaFold3 framework — improving accuracy on the categories where AlphaFold3 still struggles, improving handling of conformational diversity, expanding the range of biomolecular contexts. As of this lecture, the frontier model is a moving target.

**Membrane proteins.** Several groups are training AlphaFold-style models with additional data and tricks specifically tuned for membrane proteins, addressing the data-scarcity problem we discussed in the limitations segment. Progress is real and continuing.

**Complexes with disordered regions.** The interplay between ordered and disordered regions — including conditional folding, where a disordered region folds upon binding to a partner — is being modeled with newer methods that go beyond static structure prediction. This is a frontier area.

**Conformational landscapes.** Rather than predicting one structure, newer methods aim to predict the **ensemble** of conformations a protein can sample — capturing dynamics, allostery, multi-state behavior. Methods called things like AlphaFlow, AlphaMissense, distillation-based ensemble models, and others are working on this. Whether any of them will achieve the kind of single-result revolution that AlphaFold2 did, or whether progress will be more incremental, is an open question.

**Functional prediction.** Predicting structure is one thing. Predicting what a protein _does_ from its sequence and structure is another. New models are tackling this — predicting catalytic activity, binding partners, cellular localization, all from sequence and structure. The dream is a unified model that takes a sequence and outputs a complete description of biological function. We're not there yet, but the trend lines are interesting.

\[Pause.\]

Let me close with a broader observation. What AlphaFold demonstrated, more than anything, is that large-scale deep learning, applied with care to a well-defined biological problem, can produce results that fifty years of conventional approaches could not. This lesson is being applied across biology now. Protein function prediction. Drug-target interaction prediction. Single-cell transcriptomics interpretation. Genome annotation. Cell type identification. Pathology image analysis. The list goes on. AlphaFold was the first major demonstration that deep learning could solve a grand-challenge biology problem; it has not been the last, and the floodgates have opened.

This raises real questions for the field. What does it mean to be a structural biologist when structure prediction is largely solved? The answer, I think, is that the field is shifting — toward the problems prediction doesn't solve (dynamics, function, ensembles, design), toward the integration with experiment, toward the new questions that become tractable when structures are free. The skills that matter increasingly include data fluency, model literacy, computational thinking — alongside the wet-lab skills that remain essential. The biologist of 2030 will probably have a different toolkit than the biologist of 2010, in much the way the biologist of 2010 had a different toolkit than the biologist of 1990.

And — to come back to where we started — Anfinsen's hypothesis, the deep claim that sequence determines structure, was the seed from which all of this grew. Without Anfinsen's experiment in 1961, no one would have believed the problem was even solvable. With Anfinsen's hypothesis, the field had a north star, and it took fifty-nine years of grinding work plus a transformative deep learning advance to actually reach it. The pattern of how science moves — slow accumulation of foundational ideas, followed by a few high-leverage moments where everything finally clicks — is on perfect display in this story.

\[Pause.\]

Three things you should walk out of here with. One: the protein folding problem was the central computational problem of biology for fifty years, and it was essentially solved in 2020 by AlphaFold2, with the breakthrough being the combination of deep learning, multiple sequence alignment inputs revealing coevolutionary structural signals, and end-to-end training on the Protein Data Bank. Two: AlphaFold isn't magic — it has well-defined limitations around dynamics, intrinsic disorder, multi-state proteins, post-translational modifications, and proteins far from natural sequences, and you need to read its confidence metrics (plDDT and PAE) to use it sensibly. Three: this is the beginning, not the end. Generative design models, multi-modal biomolecular prediction, ensemble methods, function prediction, and ML applied across biology are all accelerating, and the field looks quite different in 2025 than it did in 2019.

If you take this lecture seriously — if you go and try AlphaFold on a protein you care about, look at the structure, look at the confidence, think about what it tells you and what it doesn't — you will join a generation of biologists for whom predicted structure is a routine starting point, not an extraordinary capability. That, in itself, is the legacy.

That's the lecture. Thanks for staying with it. Questions in a moment, but first let's give the topic itself a moment of respect. Fifty years of effort. A Nobel Prize in 2024. Two hundred million predicted structures, freely available to anyone with an internet connection, anywhere in the world. The protein folding problem, the Rubik's cube grand challenge of biology, solved within most of our lifetimes. It is, by any reasonable measure, one of the great scientific stories of our age.

\[Pause. End of lecture.\]

---

## APPENDIX — Quick-reference summary (not for reading aloud)

**The problem.** Given a protein sequence (a string of amino acids), predict the 3D shape it folds into. Sequence determines structure (Anfinsen's hypothesis, 1961, Nobel 1972). Function follows shape, so structure is biology's master variable. Search space is astronomical (~10^300 conformations), but proteins find the answer in milliseconds. Computing the answer eluded the field for ~50 years.

**Why it matters.** Drug design, enzyme engineering, antibody design, variant interpretation, mechanism elucidation. Experimental structure determination (X-ray, NMR, cryo-EM) is slow and expensive; pre-2020 only ~170K experimental structures existed vs ~200M known sequences.

**CASP.** Critical Assessment of Structure Prediction. Biannual blind competition founded by John Moult in 1994. Predicts structures of proteins whose experimental answers are pending release. Main metric: GDT_TS (0-100, higher better). Free Modeling (FM) category is the hard test — no templates allowed.

**Pre-AlphaFold methods.**
- Homology modeling (Modeller) — copy from similar known structures
- Template-based modeling — distant similarities, multiple weak templates
- Ab initio (Rosetta, David Baker) — fragment assembly, knowledge-based scoring
- Coevolution-based contact prediction (EVfold, PSICOV, RaptorX) — extract structural signal from MSAs

**AlphaFold1 (CASP13, 2018).** Convolutional net predicts distance distributions (distograms) from MSA features. Median GDT_TS ~58 on FM (next-best ~52). First DeepMind structure-prediction system.

**AlphaFold2 (CASP14, 2020; Nature 2021).** Median GDT_TS ~92 on FM. Two-stage architecture:
- Evoformer: MSA representation + pair representation, attention-based, iteratively refined across 48 blocks. Reads coevolutionary signal directly from MSA.
- Structure module: invariant point attention (IPA), produces 3D coordinates equivariantly. Recycles structure back into Evoformer for iterative refinement.
- Trained end-to-end on PDB (~170K structures + self-distillation).
- Open-sourced July 2021. AlphaFold Protein Structure Database (with EMBL-EBI): >200M predicted structures, freely accessible.

**The coevolution signal.** Pairs of residues physically close in 3D tend to co-mutate across evolution (compensatory mutations maintain interaction). MSAs reveal this. Deeper MSA = better prediction.

**AlphaFold-Multimer (2021).** Adaptation for protein-protein complexes. Works well for stable obligate complexes, less well for transient interactions.

**AlphaFold3 (2024).** Unified prediction for proteins, DNA, RNA, ligands, modifications, ions. Replaces Evoformer with Pairformer; replaces IPA structure module with diffusion-based structure prediction. Matches/exceeds specialized tools (docking, nucleic acid prediction). Initially closed-source for inference, weights later released for non-commercial use.

**Confidence metrics.**
- plDDT (per-residue, 0-100): >90 = trust; 70-90 = good; 50-70 = caution; <50 = guess. Often colors AlphaFold structures by default.
- PAE (per-residue-pair, matrix of predicted aligned error in Å): tells you about relative positioning across the structure. Important for multimers and multi-domain proteins.

**Limitations.** Dynamics; allostery; intrinsically disordered regions; post-translational modifications; mutations far from wild-type; membrane proteins (somewhat); single-conformation snapshot rather than ensemble.

**Ecosystem.**
- RoseTTAFold (Baker lab, 2021) — open-source AlphaFold-style, extended to nucleic acids, all-atom
- OpenFold (Columbia) — open PyTorch reimplementation of AlphaFold2
- ESMfold (Meta) — language-model-based, no MSA at inference, fast, ESM Metagenomic Atlas (600M+ structures)
- ColabFold, Boltz, Chai, and others — varied open implementations

**Experimental integration.** Hybrid workflows with cryo-EM (model fit into density), X-ray (molecular replacement using AlphaFold model), NMR (restraints + AlphaFold prior).

**De novo design (Baker lab + others).** Inverse of prediction. RFdiffusion, ProteinMPNN, Chroma, ESM3 — generative models for designing new proteins. Designed binders, enzymes, cages, novel folds.

**2024 Nobel Prize in Chemistry.** Half: David Baker (computational protein design). Half: Demis Hassabis + John Jumper (AlphaFold / structure prediction). Acknowledged both the prediction and the design halves of the modern toolkit.

**Frontier.** Ensemble and dynamics prediction (AlphaFlow, others). Variant effect prediction (AlphaMissense). Membrane proteins. Complexes with disordered regions. Functional prediction from sequence. Generative design for therapeutic and industrial applications.


