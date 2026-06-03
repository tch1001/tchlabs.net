# Directed Evolution

**A 2-hour undergraduate molecular biology lecture on engineering proteins by iterated mutation and selection — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, which lands comfortably inside a two-hour slot. (Read faster, about 140 wpm, and you'll have generous room for questions and board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — Why we evolve proteins instead of designing them

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about **directed evolution** — the technology, and really the philosophy, of engineering proteins not by sitting down at a whiteboard and designing them from first principles, but by mimicking what Darwin and four billion years of biology already worked out the slow way. We're going to build a protein the way nature builds a protein, except we're going to do it in a week instead of a million years, and we're going to point evolution at whatever target we want.

Let me start with a confession. Biochemists, structural biologists, computational chemists — we have been trying for fifty years to design proteins from scratch. Look at a substrate, draw the active site we'd need around it, pick the amino acids whose side chains would line that pocket in just the right geometry, fold the polypeptide backbone to put those amino acids in just the right positions, and presto — a custom enzyme. That's the dream. And to be fair, in the last few years, with AlphaFold and ProteinMPNN and the rest, we're actually getting somewhere on that dream. We can now design small proteins that fold the way we predicted. We can design binders to some targets de novo. We're getting better.

But here's the painful truth that ruled the field from the 1970s until roughly the day before yesterday. **We were, and largely still are, terrible at designing proteins from first principles.** Proteins are systems of mind-numbing complexity. A typical enzyme is three hundred amino acids long. Each amino acid has a side chain that can rotate, twist, hydrogen-bond, stack, displace water. The whole chain folds into a three-dimensional structure where atoms forty residues apart in sequence are touching each other in space. Change one amino acid in the active site and you might improve the enzyme — or you might break the fold entirely, because that amino acid was secretly holding two helices together, fifteen Angstroms from where you thought it was doing chemistry. Allostery — long-range communication through the protein — surprises us constantly. Side chains that look perfectly placed in a crystal structure turn out to be moving, sampling alternative rotamers, exchanging on millisecond timescales we can't see. The energy landscape is a fractal mountain range.

\[Pause.\]

So here's the dirty secret of protein engineering: most attempts at rational redesign — sit-down-and-think-it-through redesign — failed. The improvement you predicted didn't happen. The mutation you installed knocked out the protein. The active-site repaint produced something that no longer folded. People did this for decades, published the few successes, drawered the many failures, and slowly accumulated a sinking feeling that maybe protein engineering wasn't a science, wasn't an art, was something in between that nobody really had a handle on.

Then, in the early 1990s, a chemical engineer at Caltech named **Frances Arnold** got tired of waiting for the rational-design dream to mature. And she did something that, at the time, sounded like cheating, or like giving up. She said: forget designing from first principles. Forget understanding _why_ a protein does what it does. Let's just borrow the algorithm Darwin already debugged. Let's make a library of random variants of our protein. Let's apply a selection pressure for whatever property we want — heat tolerance, organic-solvent tolerance, a new substrate, anything. Let's pluck out the winners. Let's use those winners as the parents for the next round of mutation and selection. And let's just iterate, the way nature iterates, except in our hands the cycle takes a week, and the selection pressure is whatever we decide it is.

\[Pause.\]

Here is the analogy I want you to keep in your head for the next two hours. **Directed evolution is Darwin in a test tube — random mutation plus selection, in iterated rounds, just sped up by a factor of a million.** Nature does this with whole organisms over geologic time. We do it with single proteins, in single tubes, over single weekends. The fundamental algorithm is identical. Make variants. Cull the bad ones. Let the good ones reproduce. Repeat. The only thing we've changed is the scale, the speed, and the fact that _we_ get to pick the fitness function.

Frances Arnold and her lab spent the 1990s and 2000s showing that this approach works — and works, and works. They evolved enzymes to be more heat-stable. They evolved enzymes to function in organic solvents. They evolved enzymes to accept substrates they had never seen in nature. They evolved enzymes that, after a few rounds of directed evolution, did chemistry that no enzyme on Earth had previously done — installing carbon-silicon bonds, for instance, which is a reaction that doesn't exist in nature. By the time the Nobel Committee got around to her work, in 2018, directed evolution was no longer an exotic technique. It was the default way to engineer an industrial enzyme. It is responsible, today, for an enormous fraction of the laundry detergents you use, the enzymes that bleach your jeans, the catalysts that make your statin drug, the enzymes that turn corn starch into the high-fructose corn syrup in your soda. Frances Arnold won the 2018 Nobel Prize in Chemistry, sharing it with George Smith and Greg Winter, who developed a related technique called phage display — which we covered, briefly, in the antibodies lecture, and which we'll revisit today.

If you walk out of here in two hours and you can do four things — first, sketch the directed-evolution cycle and tell me what happens at each stage and why; second, explain in plain English the difference between mutagenesis methods like error-prone PCR, site-saturation mutagenesis, and DNA shuffling; third, articulate the difference between selection and screening and when you'd use each; and fourth, walk me through at least one textbook directed-evolution case study, ideally the TadA evolution for the adenine base editor, well enough to tell me what the starting enzyme was, what the selection pressure was, and what the endpoint enzyme does — then we have succeeded. Everything else hangs off those four.

This is, in a sense, the most important lecture in protein engineering — because directed evolution is the workhorse that produced almost every engineered enzyme you'll meet in industry, in medicine, in the lab. And it's a beautiful philosophical idea. We didn't out-design nature. We borrowed nature's method, pointed it at problems nature never cared about, and let it cook.

---

## SEGMENT 2 — The rational-design failure mode — why proteins resist our intuitions

Before we get into the directed-evolution cycle in detail, I want to spend this segment on why rational design — the thing we _wish_ we could do — is so hard. Because if you don't feel the difficulty of rational design, you won't appreciate why directed evolution was such a breakthrough. And you might be tempted, as a smart undergraduate, to think "well, with AlphaFold and modern computers, can't we just design these proteins directly now?" And the answer is: getting better, but still not there for most problems. So let me sketch why.

The first issue is **the size of the search space**. A typical protein is, let's say, three hundred amino acids long. Each position can be one of twenty different amino acids. So the number of possible sequences of length three hundred is twenty to the three-hundredth. That's a number with about three hundred and ninety zeros after it. The number of atoms in the observable universe has about eighty zeros after it. So the space of possible three-hundred-amino-acid proteins exceeds the number of atoms in the universe by something like ten to the three-hundred-tenth. Nature has explored a vanishingly small fraction of this space. We're not going to enumerate it. We're not going to grid-search it. And we can't, with any current method, simulate the fold-and-function of every variant in any meaningful subset. The search space is, for practical purposes, infinite.

The second issue is **the folding problem**. Even if you could sample sequences cleverly, you still have to predict, for each one, what three-dimensional shape it folds into. Until very recently — about 2021, with the publication of AlphaFold 2 — protein structure prediction from sequence alone was one of the great unsolved problems in computational biology. We could not, reliably, tell you what shape a given amino acid sequence would adopt. AlphaFold changed that for most "normal" proteins, but it changed it for the case where the protein evolved over a long time in a real cell — where the protein has homologs in databases, where there are evolutionary constraints we can read. For a designed protein that doesn't look like anything natural, AlphaFold's predictions are less reliable, and even when the prediction is right, knowing the structure doesn't immediately tell you whether the protein _works_ — whether it catalyzes the reaction you wanted, whether it binds the partner you wanted, whether it's stable enough to survive a manufacturing process.

\[Pause.\]

The third issue, and this is the one that breaks the most rational-design hearts, is **side-chain motion**. When you look at a crystal structure of a protein, you see a beautiful, clean, frozen snapshot. Each side chain has a specific orientation. The picture suggests that you could draw the active site as a static arrangement of atoms, and design changes to that static arrangement, and the protein would behave the way the picture suggests.

But proteins are not static. They breathe. Side chains rotate on nanosecond timescales. Loops sample multiple conformations on microsecond timescales. Whole domains hinge open and closed on millisecond timescales. The active site you see in the crystal structure is one of many configurations the protein samples. The protein does its job by sampling a distribution of states, some of which catalyze the reaction, others of which don't. When you mutate a residue, you change that distribution — sometimes in ways that are obvious from the structure, often in ways that are completely surprising. A mutation thirty Angstroms from the active site changes the dynamics of a loop that closes over the substrate, which changes the catalytic rate by a factor of a hundred. Nobody could have predicted that from the structure.

The fourth issue is **allostery**, which is related but worth naming on its own. Many proteins have functional sites that communicate with each other across the molecule. A binding event at one site changes the shape at a distant site. The substrate binds here; the cofactor releases over there. This long-range communication runs through the protein along pathways that we still, in 2026, do not really understand. We have models — networks of contacts, dynamical correlations, coevolutionary signals — but predicting allosteric effects of point mutations is a research problem, not a tool. When you change a residue in a rationally designed protein, you might inadvertently disrupt an allosteric pathway you didn't even know was there.

\[Pause.\]

So put all this together. The search space is enormous. The folding rules are subtle and only recently tractable. Side chains move. Allostery surprises us. The result is that, until directed evolution came along, protein engineering by rational design had a low hit rate. People would carefully think through an active-site redesign — picking residues based on the crystal structure, simulating the change in a computer — and then they'd actually build the mutant, and it would fold wrong, or it would fold right but catalyze nothing, or it would catalyze the original reaction but slightly worse than wild-type. Failure modes everywhere.

The directed-evolution insight is, in a sense, deeply humble. It says: we don't understand the protein well enough to redesign it. But we don't have to. We can make a library of random variations and let selection tell us which variations work. The selection doesn't care _why_ a variant is better. It only cares _that_ it's better. And that's enough. The protein itself is the oracle. We ask it questions, and it answers — through fitness, through survival, through the rate at which it converts substrate, through the brightness with which it fluoresces.

This is, philosophically, the same move that machine learning made when it gave up on hand-engineered features and started learning from data. We gave up on hand-engineered protein designs and started learning from selection. The protein knows more than we do. We let it teach us.

---

## SEGMENT 3 — The basic cycle — parent gene, library, selection, winners, repeat

Alright. Let's get concrete about what a directed-evolution experiment actually looks like. If you remember nothing else from this lecture, remember the cycle, because every directed-evolution experiment ever done has been some variation on this cycle.

Step one: **start with a parent gene**. You pick a protein you want to improve. Maybe it's a wild-type enzyme that does the reaction you want, but does it too slowly. Maybe it's an enzyme that does a similar reaction and you want to push it toward a new substrate. Maybe it's a binder — an antibody, a peptide — that almost grabs your target but not tightly enough. Whatever it is, you have a DNA sequence — a gene — that encodes this starting protein.

Step two: **make a library of variants**. You introduce mutations into the gene, somehow — and we'll spend the next segment on the various somehows. The point is that you take your one parent gene and you make a collection of millions, or billions, of slightly different versions of it. Most of these variants will be worse than the parent, because most random mutations to a protein are deleterious. Some will be neutral — no change in function. A few, by sheer luck, will be better in the way you care about. The library is a giant lottery, and you've bought a lot of tickets.

Step three: **express the variants**. You get your library of mutant genes into cells, or onto ribosomes, or into some system where each mutant gene is translated into protein. The point is to turn the DNA library into a protein library, because the proteins are the things you're going to test.

Step four: **select or screen**. You apply pressure that picks out the variants you want. We'll spend a whole segment on the distinction between selection and screening. For now, just hold the idea that you have some way of separating the winners from the losers. The winners are the variants whose protein has the property you wanted — better catalysis, tighter binding, higher stability, whatever.

Step five: **recover the winners**. You go back from protein to DNA. You sequence the winners. You isolate the genes that encoded the protein variants that survived. Now you have a smaller library — sometimes just a handful of clones, sometimes thousands of clones — that are enriched for the property you were selecting for.

Step six: **use the winners as parents for the next round**. You take the winning genes, and you do it again. Mutagenize them. Express. Select. Recover. The next round starts from a population that's already better than wild-type. The improvements compound.

And then you iterate. Maybe seven rounds. Maybe twenty rounds. Each round, the protein gets a little better. Each round, the selection pressure can be tightened — make the substrate concentration lower, raise the temperature, demand more catalytic turnovers per minute. Eventually you reach a protein that does the job you wanted, with mutations scattered across the sequence — some in the active site, some far from it, some doing things you understand and some doing things you don't.

\[Pause.\]

That's the cycle. Mutate, express, select, recover, repeat. Six steps. The whole edifice of directed evolution, at the level of an undergraduate lecture, is filling in the details of each of those six steps.

Now let me make one important point about the cycle. **The information flow goes one way: from selection back to DNA.** The mutations don't know in advance which mutations are good. Selection doesn't care which mutations are good either, in a sense — it just lets the good ones survive. The good mutations are discovered, not designed. And once discovered, they propagate.

That's a profound point and worth dwelling on. In rational design, we tried to predict, ahead of time, which mutations would help. In directed evolution, we don't predict — we test. We test in parallel. We test millions of variants in a single experiment. Most of them are wrong. A few are right. We pull out the few that are right, and we don't worry about understanding why they're right. The protein, again, knows more than we do. We're just doing experiments fast enough, and in parallel enough, that we can find what the protein wants us to do.

\[Pause.\]

Let me give you a small case study to make this concrete, before we go into the methods in detail. Suppose you have an enzyme that catalyzes a reaction at thirty degrees Celsius. You want it to work at sixty degrees, because you're going to use it in an industrial process that runs hot. Wild-type enzyme, at sixty degrees, denatures — falls apart — in five minutes. Useless.

Round one of directed evolution. You make ten thousand random mutants of the enzyme. You express them in E. coli. You take culture aliquots, heat them to sixty degrees for thirty minutes, then assay for activity. Most aliquots show zero activity — the protein died. A few show some activity — those variants survived the heat better. You isolate the survivors. Sequence them. Maybe twenty variants survived, each carrying one or two mutations. Some of those mutations are in the same place — a residue near a flexible loop, say, that was the weakest point in the fold. Other mutations are scattered.

Round two. You take the twenty survivors and use them as parents. Make another library of ten thousand mutants, but starting from the round-one winners instead of wild-type. Now you heat to seventy degrees. Some of these variants survive the higher temperature. You isolate them.

Round three. Heat to seventy-five degrees. Round four, eighty. Each round, you ratchet the selection pressure tighter. Each round, the surviving variants accumulate more mutations. After seven rounds, your enzyme tolerates ninety degrees — twice the wild-type's tolerance — and carries fifteen mutations scattered across the sequence. Some of those mutations were predictable from the structure. Most were not. But all of them were selected for, by the cycle, without anyone needing to understand why they worked.

That's the directed-evolution cycle in action. Now let's open up the toolbox.

---

## SEGMENT 4 — Mutagenesis methods — error-prone PCR, site-saturation, DNA shuffling

So how do you actually introduce mutations into a gene? The answer is that there are several methods, each with different strengths, and modern directed evolution often combines them. Let me walk you through the three big ones.

The first and most fundamental is **error-prone PCR**, usually abbreviated **epPCR**. You remember PCR — polymerase chain reaction, the technology that lets you copy a gene a billion-fold in a few hours, using a thermostable DNA polymerase like Taq. Normal PCR is highly accurate, because Taq has decent fidelity and we run it under conditions that promote accuracy. Error-prone PCR is exactly the same reaction, but you sabotage the polymerase. You raise the magnesium concentration, you add manganese, you bias the dNTP pool — and the polymerase starts making mistakes. Random base substitutions get introduced as it copies the template. You can tune the conditions so that, on average, each copy of the gene picks up two or three mutations, or fifteen mutations, or whatever you want.

The beauty of epPCR is that it's brain-dead simple. You set up the PCR, you let it run, you get a library out. The library is unbiased — every position in the gene has roughly equal probability of getting mutated. The mutations are point substitutions — single-letter changes — which is exactly what you want for fine-tuning. And you can generate libraries of essentially arbitrary size; you're limited only by how many bacteria you can transform with the resulting library.

The cost is that epPCR is unbiased in a way that's both a strength and a weakness. Most positions in the gene don't matter for the property you care about. Mutations there are wasted lottery tickets. And the codon table has its own structure — single-base mutations in DNA can produce some amino-acid changes more easily than others. You can't, with single-base epPCR, change residue 47 from a tryptophan to a valine in one step, because that swap requires multiple base changes in the same codon. So epPCR explores a constrained slice of sequence space.

The analogy I want you to keep is that **mutagenesis is scrambling the recipe a little — and error-prone PCR is shaking salt all over the recipe page, randomly, without looking at which ingredients are critical.** You'll occasionally land good additions of salt, but you waste a lot of effort salting things that didn't need it.

\[Pause.\]

The second method is **site-saturation mutagenesis**. Here, instead of scattering mutations randomly across the whole gene, you pick a small number of specific positions — say, the residues lining your active site — and you make a library that explores all twenty amino acids at each of those positions. The library is much smaller — a few thousand variants per position, easily covered — but it's much more focused.

You design oligonucleotide primers with degenerate codons at the target positions — "NNK" codons, where N is any base and K is G or T, which together encode all twenty amino acids with reasonable bias. You incorporate these primers into a PCR or a cloning step, and the result is a library that, at the chosen positions, contains every possible amino acid.

Site-saturation is the right tool when you already have some structural intuition. You know — or you guess — that the residues lining the substrate pocket are the ones that matter. You don't want to waste tickets on the rest of the protein. So you site-saturate the pocket, screen the library, find the winners. This is a more directed kind of directed evolution — you're using rational knowledge of where the relevant residues live, but you're not trying to predict _which_ amino acid is best at each position. You let the screen tell you.

Sometimes people do **combinatorial site-saturation**, where they saturate several positions at once — say, three positions in the active site, twenty amino acids at each, giving eight thousand combinations. That library is small enough to screen exhaustively but large enough to explore meaningful combinations. The catch is that as you saturate more positions simultaneously, the library size grows exponentially, and you start losing the ability to screen every member.

\[Pause.\]

The third method, and this one is the most beautiful, is **DNA shuffling**, developed by **Willem "Pim" Stemmer** at a company called Affymax in 1994. We'll come back to Stemmer in his own segment later — Segment 9 — because the technique is important enough to spend a whole segment on. But let me sketch it here.

Imagine you've done two rounds of directed evolution. You have, say, ten winning variants from each round. These variants each carry several mutations, scattered across the gene. Some of the mutations help in one way — maybe stabilizing a loop. Others help in another way — maybe rebuilding the active site. What if you could combine, say, the active-site mutations of one winner with the loop-stabilizing mutations of another winner? Sometimes the combination is better than either parent — synergy.

DNA shuffling is a way to recombine winning variants. You take the genes of your winners, you chop them into random fragments with a DNase enzyme, you mix the fragments together, and you reassemble them by PCR. The PCR uses the fragments as both primers and templates, so it stitches them together into full-length genes. But because the fragments come from different parents, the reassembled genes are mosaics — each gene carries pieces of several parents, glued together in random combinations.

The analogy is that **DNA shuffling is two winning chefs swapping pages of their cookbooks — sometimes the combination of one chef's pasta dough and another chef's sauce is better than either chef's original dish.** You take the recipes that were already pretty good, you mix and match the pages, and you let selection tell you which mosaic recombinations are best. Stemmer showed in 1994 that this dramatically accelerates directed evolution. We'll see why in Segment 9.

For now, just remember the toolbox: epPCR scatters point mutations across the whole gene; site-saturation explores all twenty amino acids at specific positions; DNA shuffling recombines winners. Different tools for different stages of an evolution campaign. Often, modern protocols use them in combination — epPCR for the early rounds to explore broadly, site-saturation for the middle rounds to fine-tune specific positions, DNA shuffling to combine winners after a few rounds of accumulation.

---

## SEGMENT 5 — Selection versus screening — survival of the fittest versus taste-test everything

Now we need to talk about the most important conceptual distinction in directed evolution. There are two fundamentally different ways to find the variants you want in a library, and they have very different scaling properties. Let me draw the distinction clearly.

The first is **selection**. In a selection, you set up a system where _only_ the variants with the property you want survive. You don't have to look at each variant individually. You don't have to test each one. You just impose the selection pressure on the whole library at once, and the losers die. Whatever's left after the dust settles — those are your winners. The cost of evaluating each variant is, in principle, zero, because the variants evaluate themselves. They live or they don't.

The classic example, which we covered in the antibodies lecture, is **phage display panning**. You make a library of phages, each displaying a different protein variant on its surface. You pour the whole library over a column with your target molecule immobilized on it. Variants whose displayed protein binds the target stick to the column; variants that don't bind get washed off. You collect the stickers, amplify them in bacteria, and pan again. Three rounds of panning enrich your library for binders by something like a factor of a million. You never looked at any individual variant. The selection looked for you.

Selection scales beautifully. You can select on libraries of a billion variants, or ten billion, or a hundred billion. The throughput is limited only by how many phages you can grow in a flask, or how many cells you can sort in a day. The library size is essentially unbounded.

The cost of selection is **flexibility**. To select on a property, you have to find a way to make that property survival-relevant. Binding is easy — you can set up panning. Catalysis is harder — you have to engineer a system where the cell needs the catalysis to survive. For example, if you're evolving an enzyme to degrade an antibiotic, you can plate cells expressing your library on antibiotic-containing media — only the cells with active enzyme survive. But if your reaction is something more exotic — say, an enzyme that installs a specific stereochemistry on an organic molecule — you can't easily make stereochemistry survival-relevant. The selection has to be cleverly designed, and for many properties, designing a selection is the hardest part of the whole experiment.

\[Pause.\]

The second method is **screening**. In a screen, you evaluate each variant individually. You take your library, you plate it out as individual colonies, you pick each colony into its own well of a 96-well plate, you grow it, and you assay it. You measure the property of each variant — catalytic activity, fluorescence, whatever — and you rank them. The winners are the variants with the best assay reading.

Screening is much more flexible than selection. You can measure any property you can assay. You can use mass spectrometry to check stereochemistry. You can use HPLC to check enantiomeric excess. You can use fluorescent dyes that report on whatever you want. Anything you can put in a 96-well plate and measure, you can screen for.

The cost is throughput. A 96-well plate holds 96 variants. A 1536-well plate holds 1536. Even with high-throughput robotic screening, you're looking at, maybe, ten thousand to a hundred thousand variants per day for a serious lab. That's tiny compared to selection. You cannot screen a billion variants. You can barely screen a hundred thousand.

The analogy I want you to keep is: **selection is "only the survivors reproduce" — you don't taste the bad food, you just let the bad chefs starve. Screening is "we taste-test every dish" — you go through the kitchen one plate at a time, assigning a score to each one.** Selection is high-throughput but inflexible. Screening is low-throughput but flexible. The choice depends on the property you're evolving.

\[Pause.\]

In practice, most modern directed-evolution campaigns combine both. The early rounds use selection — phage display, yeast display, growth-coupled selection in E. coli — to enrich a huge library down to maybe ten thousand variants that have the rough property you want. Then the later rounds switch to screening — pick the top ten thousand into plates, assay each one for the specific property, rank them, and iterate from the top tier.

Sometimes you can convert a screen into a selection by clever engineering. The most famous example is **fluorescence-activated cell sorting** — FACS. If you can make your activity readout fluorescent — for example, by linking your enzyme's reaction to the production of a fluorescent product — then you can do screening at selection-like throughputs. A flow cytometer can sort tens of thousands of cells per second based on fluorescence. Pour your library through, gate on the bright cells, recover the winners. That's a million-cell screen done in a couple of hours. We'll see this in detail in the yeast-display segment.

The general principle is: **a good directed-evolution campaign matches the breadth of the library to the breadth of the assay**. If your assay is high-throughput, make the library big. If your assay is low-throughput, focus the library tighter — fewer positions mutated, smaller library, better odds per ticket. The art is in the balance.

---

## SEGMENT 6 — Phage display — the canonical selection platform

We covered phage display in the antibodies lecture, so I'm going to keep this segment short. But it's worth revisiting in the directed-evolution context, because phage display is the textbook example of a selection platform — and because George Smith won the 2018 Nobel for inventing it, alongside Frances Arnold, in the same prize.

Quick refresher. A bacteriophage — usually M13, a filamentous phage that infects E. coli — has a coat made of several proteins. The pIII protein, in particular, sits at one end of the phage and is fairly tolerant to having a foreign protein fused to it. George Smith's insight, in 1985, was that if you fuse your protein of interest to pIII, you get a phage particle that **displays** your protein on its surface, while also **carrying inside** the DNA that encodes that protein. The phage is a one-particle linkage between the protein and the gene. Display the protein, sort by binding, recover the gene by amplifying the phage. That's the trick.

\[Pause.\]

For directed evolution, phage display is most often used to evolve binders — antibodies, single-domain antibodies, peptides, designed scaffolds. You make a library of pIII fusions, each carrying a different protein variant. The library is huge, often a billion or more distinct phages. You pour the library over an immobilized target. Phages with binding fusions stick; phages with non-binding fusions wash off. You elute the stickers, amplify them in E. coli, and pan again.

After three or four rounds of panning, your library is enriched a millionfold for binders. You pick individual phages, sequence them, and characterize the binders. If the affinity isn't good enough, you mutagenize the winning binders — epPCR, site-saturation in the binding loops, whatever — and pan again. Affinity maturation by directed evolution.

For enzymes, phage display is harder, because catalysis isn't as easy to select for as binding. But there are clever phage-display setups for enzymes too. The general approach is to link the enzyme's substrate to the phage particle itself, so that when the enzyme acts on the substrate, the phage particle gets modified in a way that can be captured. For instance, if your enzyme cleaves a peptide bond, you can attach a substrate to the phage that, when cleaved, releases a tag — and you select for phages that have lost the tag. Catalytic phage display. Niche, but it works for some reactions.

The Nobel committee in 2018 cited Smith for inventing phage display, and Greg Winter for adapting it to antibody libraries. Winter's contribution was to take human antibody genes — V, D, and J segments — synthesize them into a library, fuse them to pIII, and pan against any target you wanted. Suddenly you could make human antibodies to any target without ever immunizing an animal. That technology produced the first wholly human therapeutic antibodies, including Humira, the best-selling drug in human history. So phage display is not just an academic curiosity; it built a multi-billion-dollar industry.

\[Pause.\]

For our purposes today, the takeaway is that phage display is the canonical selection platform — the one that made directed evolution of binders an industrial-strength technology. Its limitations — small fusion partners, the fact that the protein has to fold properly when expressed on phage, the dependence on E. coli compatibility — pushed people to invent other display platforms, which we'll go through in the next two segments. Yeast display. Ribosome display. mRNA display. Each one a different trade-off between library size, fold quality, and assay flexibility.

But the philosophical move — link the protein to its gene through some kind of display, do parallel selection on the whole library, recover the winners — that move was George Smith's, in 1985, and it's the foundation of everything we'll discuss for the next three segments.

---

## SEGMENT 7 — Yeast display — surface-anchored proteins, FACS sorting on activity

Phage display has one big weakness, and it became apparent in the 1990s as people pushed phage display to evolve more complex proteins. The weakness is that phage assembly happens in the bacterial periplasm, in a chemically unusual environment, and many eukaryotic proteins — particularly things with disulfide bonds, glycosylation, or complex folds — don't fold properly when displayed on phage. You can make the library, but most of the displayed proteins are misfolded, and your library is full of garbage that doesn't represent the protein you wanted to evolve.

The fix, developed in the late 1990s primarily by Dane Wittrup at Caltech and then MIT, was **yeast display**. Instead of displaying your protein on a phage, you display it on the surface of a yeast cell. Specifically, you fuse your protein to a yeast cell-wall protein called **Aga2p**, which is naturally secreted and anchored to the outer surface of the yeast cell. The fusion gets exported through the yeast's eukaryotic secretory pathway — through the ER, through the Golgi, with chaperones and quality control all the way — and ends up displayed on the cell wall, properly folded, disulfide-bonded if relevant, glycosylated if relevant.

The library, in yeast display, is a population of yeast cells, each displaying a different protein variant on its surface. Each yeast cell contains the plasmid that encodes its variant — so the link between protein and gene is maintained within the cell.

\[Pause.\]

The selection method in yeast display is where it really shines. You can stain the cells with two fluorescent reagents at once. First, you stain with an antibody against an epitope tag attached to your protein — this tells you how much of your protein is being displayed on each cell. Cells that don't display your protein at all light up dim in that channel. Cells that display lots of protein light up bright. Second, you stain with your target — labeled with a different fluorophore. Cells whose displayed protein binds the target light up bright in the target channel. Cells whose displayed protein doesn't bind stay dim.

Now you put the stained cells through a **flow cytometer** with sorting capability — a FACS machine. The machine analyzes each cell, one at a time, at rates of tens of thousands per second. For each cell, it measures fluorescence in both channels. You set a gate that says "high display, high binding" — cells that are both expressing the protein and binding the target. The FACS sorter physically diverts those cells into a separate tube, while throwing away the rest. After a few hours, you have a tube of winners — cells whose displayed protein expressed well and bound the target well.

This is selection with quantitative readouts. You can simultaneously normalize for display level and rank by binding affinity. Cells that don't express the protein well — which would be confounders in phage display — are explicitly gated out. The result is a clean library of binders, ready for the next round.

\[Pause.\]

Yeast display can also be used for enzyme evolution. If you can link the enzyme's activity to a fluorescent signal — for example, a fluorogenic substrate that becomes fluorescent only when the enzyme acts on it — you can sort cells by enzyme activity. Cells displaying high-activity enzyme glow brighter. FACS picks the glowing ones. This is **activity-based screening at selection-like throughputs** — millions of variants per day.

The Wittrup lab and others have used yeast display to evolve T-cell receptors for cancer therapy, to engineer antibodies for higher affinity, to develop scaffold proteins as alternatives to antibodies, and to evolve enzymes for industrial applications. It's now a workhorse platform, complementary to phage display rather than replacing it. Phage display when your library is huge and your protein folds in bacteria; yeast display when your protein needs eukaryotic folding or when you want quantitative FACS-based readouts.

The takeaway is that yeast display is the canonical platform for **fluorescence-based selection** of properly folded eukaryotic proteins. It combines the throughput of selection with some of the flexibility of screening — anything you can stain a fluorophore onto, you can sort on. And it does so in a folding environment that's much more forgiving than the bacterial periplasm.

---

## SEGMENT 8 — Ribosome display and mRNA display — cell-free, gigantic libraries

The next step beyond yeast display is to get rid of the cell entirely. Phage and yeast display both require that the protein be expressed inside a living organism — bacteria or yeast — which limits the library size to the transformation efficiency of that organism. Even with the most heroic electroporation, you can't get more than about ten-to-the-tenth distinct variants into bacteria or about ten-to-the-eighth into yeast. For some applications, that's plenty. For others — particularly when you're trying to evolve completely new function from scratch, where the starting hit rate might be one in ten-to-the-twelfth — you need a bigger library.

Enter **ribosome display** and **mRNA display**, two closely related cell-free platforms that can build libraries of ten-to-the-thirteenth or larger.

The idea behind ribosome display, developed in the late 1990s by Plückthun and others, is delicious. Instead of using the cell to link protein to gene, you use the **ribosome itself** as the linker. Here's the trick. You take your library of DNA variants, transcribe it to mRNA in a test tube, and translate it on ribosomes — also in a test tube, using a cell-free translation extract. But you engineer the mRNA so that there's no stop codon at the end. The ribosome translates all the way to the end of the mRNA and then stalls there, because there's no stop signal to tell it to release.

The result is a particle consisting of three things, all attached to each other: the **ribosome**, the **mRNA** it's been translating, and the **nascent protein** that's been emerging out of the ribosome. The mRNA encodes the protein. The protein is folded and accessible. The whole complex is the unit. Display the protein on the surface of this ternary complex, panning the way you would in phage display, and when you recover a winner, you can amplify the mRNA — by reverse transcription, then PCR — to get the gene back.

\[Pause.\]

The analogy I want you to keep is that **ribosome display is the protein never leaving its own RNA — the whole complex of ribosome, RNA, and protein is the unit, and because everything is done in a test tube without cells, the library size can be much, much bigger.** No transformation step. No bottleneck of getting plasmids into cells. You can make libraries of ten-to-the-thirteenth or fourteen variants — orders of magnitude beyond what any cell-based system can do.

The cost of ribosome display is that it's fiddly. The ternary complex is fragile. The ribosome can dissociate during panning. You need to keep magnesium concentrations right, keep temperatures low, work carefully. And the protein has to be able to fold while still attached to the ribosome — which constrains the kinds of proteins you can evolve.

\[Pause.\]

**mRNA display**, developed around the same time by Jack Szostak, Rich Roberts, and Hiroshi Yanagawa independently, uses a slightly different trick. Instead of stalling the ribosome on the mRNA, you covalently link the protein directly to the mRNA that encoded it, using a small chemical adapter called **puromycin**. Puromycin is an antibiotic that looks like an aminoacyl-tRNA and tricks the ribosome into attaching it to the growing peptide chain. If you put puromycin at the end of an mRNA, the ribosome translates the mRNA, hits the puromycin, and covalently attaches the puromycin — and through it, the whole mRNA — to the nascent protein.

The result is a peptide-mRNA chimera. The protein is now covalently fused to its own mRNA. You can do panning with this — pulldown on a target, recover the bound chimeras, amplify the mRNA, sequence the gene. Library sizes can again reach ten-to-the-thirteenth.

mRNA display is more robust than ribosome display because the linkage is covalent rather than mediated by a stalled ribosome. It's been used to evolve peptide binders to targets that are hard to drug — protein-protein interaction surfaces, intracellular targets — and to do massive scans of peptide libraries.

For our purposes, ribosome display and mRNA display represent the high end of the library-size spectrum. When you absolutely need to sample the largest possible space — when you're going after a needle in a haystack with one in a trillion odds — these are the platforms you reach for. The trade-off is fragility and operational complexity. Most labs don't run mRNA display every week. But for the right problem, it's the only thing that can find the hit.

---

## SEGMENT 9 — DNA shuffling — Stemmer's 1994 recombination trick

We come now to the technique I teased in Segment 4, and the one I want to give its own segment because it changed directed evolution. **DNA shuffling**, also called **sexual PCR**, was published by **Willem "Pim" Stemmer** in _Nature_ in 1994, and again in _PNAS_ in a more detailed paper later that year. It is, in my view, one of the most beautiful techniques in molecular biology.

Here's the problem Stemmer was solving. In a standard directed-evolution campaign — error-prone PCR, screen for winners, take the winners forward — you accumulate beneficial mutations slowly, one or two per round. Each round, you take a few of the best variants from the previous round and use them as the parents for the next round. But each parent only contributes _its_ mutations. If parent A has a beneficial mutation at position 47 and parent B has a beneficial mutation at position 162, you can't easily get both mutations into one offspring, because in conventional epPCR you take one parent at a time, copy it with errors, and you don't recombine.

Sex — biological sex, the kind eukaryotes do — solves this problem in nature. Two parents recombine. Their chromosomes cross over. The offspring carry mosaics of both parents' genomes. Beneficial mutations from one parent get combined with beneficial mutations from another. Sexual reproduction massively accelerates evolution exactly because it lets independent beneficial mutations combine in one lineage, instead of having to arise serially in the same lineage.

Stemmer's insight was: do that for genes. In a test tube. Recombine your winning variants. Let beneficial mutations combine.

\[Pause.\]

Here's how DNA shuffling works, mechanically. You take the genes from your winning variants — say, ten or twenty of them, each carrying a few mutations relative to the parent. You mix them in a tube. You digest them with DNase I — a fairly nonspecific endonuclease that chops DNA into small fragments, maybe 50 to 200 base pairs each. Now you have a tube full of fragments, derived from all your parents, mixed together.

Now you do a PCR — but without primers. You just run the thermocycler. In each cycle, the fragments melt apart, then reanneal. Because the parents are highly similar to each other — they only differ by a few point mutations — the fragments from one parent can anneal to fragments from a different parent in regions where the sequences are identical. The two fragments overlap, the polymerase extends, and you've stitched a piece of parent A onto a piece of parent B. After enough cycles, the fragments reassemble into full-length genes — but each full-length gene is now a mosaic of multiple parents, with crossover points wherever the polymerase happened to switch from one fragment to another.

You then add real primers to the outside of the gene, do a normal PCR to amplify the full-length mosaics, and clone the resulting library. Your library is now a collection of recombinant genes, each carrying a combination of mutations drawn from your various parents. The beneficial mutations that were scattered across the parent lineage now have a chance to co-occur in single offspring.

The analogy I keep coming back to is that **DNA shuffling is two winning chefs swapping pages of their cookbooks — sometimes the combination of one chef's pasta dough and another chef's sauce is better than either chef's original dish.** Beneficial mutations from independent lineages combine, sometimes additively, sometimes synergistically. The library you get out is dramatically more enriched in functional variants than what you'd get from epPCR alone.

\[Pause.\]

Stemmer demonstrated DNA shuffling in his 1994 paper using a model evolution of TEM-1 beta-lactamase — an enzyme that degrades beta-lactam antibiotics — to evolve resistance to cefotaxime, a third-generation cephalosporin. Wild-type TEM-1 confers low resistance. After several rounds of error-prone PCR with shuffling, Stemmer's lab evolved variants that conferred sixteen-thousand-fold higher resistance. That kind of improvement — four orders of magnitude — was not achievable with epPCR alone in the same time frame. Shuffling was the accelerant.

DNA shuffling spawned a whole industry. Stemmer founded a company called **Maxygen** that built an entire pipeline around shuffling, evolving enzymes for industrial customers — herbicides, vaccines, biofuels. Maxygen spun off a series of subsidiaries. Codexis, which we'll meet in Segment 13, is one of the descendant companies that uses shuffling-derived technology. And shuffling concepts — recombination of mutations from independent lineages — are now baked into essentially every serious directed-evolution campaign.

A note before we leave Stemmer. Pim Stemmer died young, in 2013, of leukemia. He was one of the great inventors in molecular biology, and his technique is one of the things you should know about him. When the Arnold Nobel came in 2018, many in the field felt that Stemmer would have shared it if he had lived. His shadow is on every directed-evolution paper published today.

---

\[BREAK\]

\[A planned pause here, about one hour in. Stand up, stretch, step out. We come back in ten minutes with the Frances Arnold lab story, the TadA evolution case study, and the industrial applications.\]

---

## SEGMENT 10 — The Arnold lab — subtilisin, lipases, and the founding of a field

Welcome back. The first half of this lecture was, in a sense, the toolkit — the methods of directed evolution, the platforms, the mutagenesis tricks, the selection-versus-screening distinction. The second half is the stories. The case studies. The actual proteins that have been evolved, why people evolved them, what the evolutions taught us, and what they led to.

We start with the lab where it all came together — **Frances Arnold's lab at Caltech**, beginning in the early 1990s and continuing to this day.

Arnold was a chemical engineer by training. She did her PhD at Berkeley in chemical engineering, not biochemistry. She came to protein engineering from the outside — and that outside perspective, I think, is part of why she saw directed evolution clearly when others didn't. Biochemists were committed to the rational-design dream. Arnold saw an engineering problem: I want a protein that does X, I don't know how to design it from scratch, so what's the highest-throughput way to find one?

Her first major directed-evolution paper, in 1993, was on **subtilisin** — a bacterial protease, widely used in laundry detergents — and the goal was to make subtilisin work in **organic solvents**. Wild-type subtilisin works in water; in organic solvents it falls apart, because the protein's hydrophobic core gets disrupted, the hydrogen-bond network collapses, and the fold dies. But for many industrial applications, you want enzymes that work in organic solvents — the substrates are organic, the reaction conditions need to be anhydrous, water is a problem rather than a solvent.

So Arnold's lab did directed evolution. They generated random mutants of subtilisin by error-prone PCR. They expressed the variants. They assayed each variant's activity in the presence of a particular organic solvent — dimethylformamide, DMF. The winners were the variants that retained activity in DMF longest. They took the winners forward to the next round, increased the DMF concentration, repeated. After three rounds, they had a subtilisin variant that worked in much higher DMF concentrations than wild-type — and carried a handful of mutations on the protein surface, far from the active site, that stabilized the fold against organic solvent.

This was a proof of concept, and it landed. Nobody had thought you could evolve an enzyme for a property as exotic as organic-solvent tolerance — a property that the enzyme had never been under selection for in nature. Arnold showed you could. Selection pressure is whatever you make it. The protein evolves accordingly.

\[Pause.\]

From there, the Arnold lab evolved everything. **Lipases** — fat-cleaving enzymes — to work at higher temperatures and in nonaqueous solvents. **Cytochromes P450** — heme-containing oxidases — to perform regio- and stereo-selective hydroxylations on substrates they had never evolved to see. **Halohydrin dehalogenases** for chiral chemistry. **Transaminases** for pharmaceutical synthesis. By the mid-2000s, the Arnold lab had become a paradigm — a way of doing protein engineering that consistently produced useful enzymes for problems where rational design had failed.

The lab's most spectacular more recent work has been on **carbene transfer chemistry**. Carbenes are highly reactive carbon species that are extremely useful synthetically — you can use them to insert carbons into bonds, form new C-C bonds, do all kinds of chemistry that's hard to do in water. But carbenes are not a natural enzyme substrate. No enzyme evolved to handle them. They're synthetic.

Arnold's lab took cytochrome P450 — a natural enzyme that handles oxygen-transfer reactions — and asked: can we evolve it to do carbene transfer? They engineered the starting variant with a few rational mutations to push it in the right direction, then they applied directed evolution. After several rounds, they had cytochrome P450 variants that catalyzed carbene transfer onto a wide variety of substrates, with high enantiomeric excess — meaning they produced one mirror-image form of the product preferentially, which is exactly what you want for making chiral drugs.

In 2017, the lab published the evolution of an enzyme that installs **carbon-silicon bonds** — a reaction that exists nowhere in nature. The starting point was a heme protein from a thermophilic bacterium called _Rhodothermus marinus_. After three rounds of directed evolution, the enzyme catalyzed C-Si bond formation with high selectivity. Arnold called this "expanding the genetic code of chemistry" — using directed evolution to push enzymes into chemical space that nature never explored.

\[Pause.\]

The pattern across all of this work is the same. Pick a starting enzyme that's close to what you want — same fold, similar chemistry, ideally a thermostable scaffold. Generate libraries. Screen or select for the new property. Take the winners forward. Iterate. The whole campaign might take a year, might take five years. The result is an enzyme that does something no enzyme on Earth did before, and that you couldn't have designed from first principles, but that you found by letting evolution do its work.

The Arnold Nobel in 2018 was specifically for directed evolution as a method, with citations to subtilisin and the broader enzymology. Sharing the prize with George Smith and Greg Winter recognized that phage display and directed evolution are part of the same intellectual movement — the move from rational design to combinatorial methods. Different platforms, same principle. The Nobel was a recognition that this approach — the iterated-mutation-and-selection approach — had moved from a niche technique to the dominant paradigm in protein engineering.

---

## SEGMENT 11 — TadA evolution for ABE — Liu's textbook case study

Now for the case study I want you to know cold. If you took the base-editing lecture, you'll remember that the adenine base editor — ABE — is a fusion of a Cas9 nickase with an adenine deaminase, and the deaminase converts an adenine to an inosine, which gets read as guanine. The result is an A-to-G edit, installed without cutting the DNA. ABE, with CBE, makes up the two foundational base editors of the David Liu lab.

What I want to dwell on here is **how the adenine deaminase came to be**. Because the deaminase in ABE is not a natural protein. It's an evolved protein. It's the product of seven rounds of directed evolution, carried out in the Liu lab in 2016 and 2017, taking a bacterial tRNA-modifying enzyme and pushing it, by iterated mutation and selection, into a DNA-modifying enzyme that didn't exist anywhere in biology.

Here's the starting point. The lab needed an adenine deaminase that worked on DNA. They surveyed nature. There are plenty of adenine deaminases — but they all act on RNA, or on free adenosine, or on adenine nucleotides. None of them act on DNA. The natural enzymes that come closest are the **tRNA adenosine deaminases**, called **TadA**, which deaminate a specific adenosine in the anticodon loop of certain tRNAs. TadA modifies tRNAs; it does not touch DNA.

Liu's lab took **E. coli TadA** as the starting scaffold. It's small — about 170 amino acids. It uses a zinc-dependent deaminase mechanism, similar to APOBEC. It's well-characterized structurally. And it has the same chemistry the lab needed — deamination of an adenosine ring. The only problem was that TadA acts on tRNA, not on DNA, and it has very strict substrate requirements — it cares about the loop structure, the surrounding nucleotides, all of which are tRNA-specific features that DNA doesn't have.

\[Pause.\]

So the lab set up a directed-evolution campaign. The goal: evolve TadA to deaminate adenine in single-stranded DNA, while being delivered to its target by a Cas9 nickase.

The selection system was clever. The lab built a plasmid carrying a defective antibiotic-resistance gene — specifically, a gene where a critical residue had been mutated from an active form to an inactive form by a single A-to-G change. The plasmid, in its starting state, did not confer resistance to chloramphenicol. But if TadA could deaminate the adenine in the DNA at the right position, the resulting inosine would be read as G during replication, restoring the original active codon and reactivating the resistance gene. Cells whose TadA variant did this efficiently would survive on chloramphenicol media. Cells whose TadA didn't work would die.

That's a classic growth-coupled selection. The TadA library was made by error-prone PCR. Variants were expressed in E. coli alongside a guide RNA and a Cas9 nickase that targeted the defective resistance gene. The cells were plated on chloramphenicol. The survivors had functional DNA-deaminating TadA.

Round one. The lab made a library. They selected on low chloramphenicol. A few survivors emerged, carrying mutations that gave TadA some ability to deaminate DNA — much weaker than the activity on tRNA, but nonzero. They sequenced the winners. The winners' TadA variants were called **TadA*1** — the first evolved generation.

Round two. The TadA*1 variants were used as parents. Another library was generated. The selection was tightened — higher chloramphenicol, demanding more active editing. The winners became TadA*2.

And on, and on. By round seven, the lab had **TadA*7.10** — a variant carrying about fourteen mutations relative to wild-type _E. coli_ TadA. TadA*7.10 efficiently deaminated adenines in single-stranded DNA, at the editing window exposed by Cas9 nickase. It was published in 2017 as the deaminase in the canonical ABE — specifically, **ABE7.10**, which became the first widely used adenine base editor.

\[Pause.\]

Later work by the Liu lab — published in 2020 — pushed the evolution further with additional rounds, using more sophisticated selection schemes, and produced **TadA*8e**, an even more active and broadly competent DNA adenine deaminase. TadA*8e is now the workhorse deaminase in modern adenine base editors. When you read a paper that uses ABE8e, that's TadA*8e doing the chemistry, evolved through what is now closer to ten rounds of directed evolution.

The pattern is exactly the textbook directed-evolution pattern. Start with a natural enzyme close to what you want. Set up a selection that rewards the new behavior. Run rounds. Tighten the selection. Run more rounds. Eventually you have an enzyme that does something the starting enzyme didn't do, that doesn't exist anywhere in nature, that was discovered — not designed — by iterated mutation and selection.

The analogy I keep using is that **TadA evolution for ABE is Liu's textbook case — started with a bacterial tRNA-A deaminase, evolved seven generations until it worked on DNA, ending at TadA*8e which is the workhorse of modern adenine base editors**. The protein that does the chemistry inside every clinical ABE, including the trials targeting sickle cell disease, hypercholesterolemia, and rare metabolic disorders, is an evolved protein. Not a designed protein. Not a natural protein. A directed-evolved protein, with a lineage you can trace through seven rounds of mutation and selection in a Liu lab freezer.

If someone asks you, after this lecture, "give me one example of directed evolution producing a clinically important protein," this is the example. The deaminase in every modern adenine base editor. It's a clean story, it's well-documented, and it shows the full power of the approach — from a bacterial tRNA enzyme to a human gene-therapy tool, in less than two years of evolution.

---

## SEGMENT 12 — The 2018 Nobel — Arnold, Smith, Winter

Let me spend a short segment on the 2018 Nobel Prize in Chemistry, because it's a useful organizing event for everything we've discussed. The prize was split: half to Frances Arnold, "for the directed evolution of enzymes," and the other half jointly to George Smith and Greg Winter, "for the phage display of peptides and antibodies."

Notice how the Nobel committee carved the prize. Three winners, three contributions, all united by the same intellectual move. Arnold showed that you could do iterated mutation and selection on enzymes, and produce industrial-grade catalysts. Smith invented phage display — the technique that links protein to gene through a phage particle, enabling massive parallel selection. Winter adapted phage display to antibodies, producing the first wholly human therapeutic antibodies. All three were doing variations of the same thing: combinatorial protein engineering by selection, rather than rational design.

\[Pause.\]

Arnold's prize was the one that crystallized "directed evolution" as a recognized methodology. Smith and Winter had been doing directed evolution all along, in some sense — phage display is just directed evolution on binders — but the field didn't always use that terminology for them. Arnold's framing was broader: directed evolution as a general methodology, applicable to any protein property you can select or screen for, with all the platforms — phage, yeast, ribosome, mRNA, growth-coupled selection — as different tactical implementations of the same strategic idea.

The prize was also, in a sense, a recognition that protein engineering had grown up. For decades, the field had been embarrassed by its inability to reliably design proteins from first principles. Directed evolution had given the field a method that worked — not on every problem, but on enough problems that it had transformed industry. The Nobel was an acknowledgment that the workaround had become the dominant approach.

Frances Arnold remains active. Her lab continues to publish, continues to evolve enzymes, continues to push the frontier. She's also been involved in policy, in mentorship, in popularizing the field. The Arnold lab graduates have populated half the protein-engineering groups in academia and industry. When you see "Codexis," "Genomatica," "Provivi," and many other biotechs in the synthetic-biology space, you're often looking at Arnold-trained alumni.

George Smith continues his quiet life at the University of Missouri. Greg Winter co-founded Cambridge Antibody Technology, which produced Humira and other antibody therapeutics, and was later acquired by AstraZeneca. The phage-display platform spawned an entire industry of antibody-discovery companies — Morphosys, Dyax, Adimab, and others.

The 2018 Nobel is, for our purposes, the canonical date marker. Before 2018, directed evolution was the dominant approach. After 2018, it was the dominant approach _with_ the imprimatur of the Nobel Committee. Nothing about the methods changed; the recognition changed. But the recognition matters for funding, for tenure decisions, for how people frame their grant proposals. The prize cemented directed evolution as a first-class scientific discipline.

\[Pause.\]

The next segment, Segment 13, is about the industrial applications — Codexis, Novozymes, and the broader use of directed evolution in chemistry and detergent manufacturing. That's where directed evolution really shows its commercial impact, beyond the academic results.

---

## SEGMENT 13 — Industrial applications — Codexis, Novozymes, the chemicals industry

Now we get to the part of the story that most undergraduates have never been told. The reason directed evolution matters is not just academic. It is that an enormous fraction of the chemistry that runs our modern industrial economy — pharmaceutical synthesis, detergent manufacturing, food processing, biofuels — is being done by enzymes that were evolved in directed-evolution campaigns, not enzymes that were taken straight from nature.

Let me give you the textbook case. **Sitagliptin** is a drug — brand name Januvia — that treats type 2 diabetes. It's a billion-dollar molecule, made by Merck, taken by millions of patients. To make sitagliptin, you need to install a specific amine group on a specific carbon, with specific stereochemistry — meaning the molecule has to be the right mirror-image form, not the wrong one. The wrong mirror image doesn't work, or worse, has side effects.

The original synthesis of sitagliptin, developed by Merck in the 2000s, used a metal-catalyzed asymmetric hydrogenation — a chemical reaction involving a rhodium catalyst, high pressure, and a specialized chiral ligand. It worked, but it required heavy metal, high-pressure equipment, and some of the steps gave only modest enantiomeric excess, so you had to purify the right stereoisomer afterward. The process worked, but it was expensive and not very green.

Merck partnered with a company called **Codexis** to find an enzymatic alternative. Codexis is a directed-evolution company; their whole business is evolving enzymes to do industrial reactions. The target reaction was a **transaminase** — an enzyme that transfers an amine group from a donor to an acceptor carbon. There are many natural transaminases, but none of them accepted the sitagliptin precursor as a substrate. The starting transaminase showed essentially zero activity on the actual substrate Merck needed to convert.

\[Pause.\]

Codexis ran directed evolution. They used DNA shuffling, they used site-saturation in the active site, they used high-throughput screening on the actual sitagliptin substrate. After eleven rounds of evolution — multiple parallel campaigns running for over a year — they produced a transaminase variant carrying twenty-seven mutations relative to the starting natural enzyme. The evolved variant accepted the sitagliptin precursor as a substrate, with high activity, high enantioselectivity, and tolerance to the organic-solvent conditions Merck needed.

The result was published in _Science_ in 2010 — a paper titled "Biocatalytic asymmetric synthesis of chiral amines from ketones applied to sitagliptin manufacture." Merck switched its sitagliptin manufacturing to the Codexis-evolved transaminase. The process eliminated the rhodium catalyst, eliminated the high-pressure step, and gave higher enantiomeric excess in fewer steps. The environmental footprint of sitagliptin manufacture dropped significantly. The economics dropped. The amount of solvent waste dropped. And the patient gets the same drug, made differently.

That paper is, I think, the most cited industrial directed-evolution paper of all time. It established that directed evolution could compete head-to-head with — and often beat — traditional chemistry for pharmaceutical synthesis. Codexis went on to evolve enzymes for atorvastatin (Lipitor), montelukast (Singulair), and dozens of other drugs. Many of the small-molecule pharmaceuticals you take, the active ingredient was at some point made — or could now be made — by a directed-evolved enzyme.

\[Pause.\]

The other industrial giant in directed-evolution-derived enzymes is **Novozymes**, a Danish company that dominates the world market for laundry-detergent enzymes. When you wash a load of dirty clothes in a modern detergent, the protein stains are dissolved by proteases, the fat stains by lipases, the starch stains by amylases, and the cellulose softeners and brighteners by other enzymes. Almost every one of those enzymes started as a natural enzyme that was then evolved by Novozymes for the specific conditions of laundry — high pH, presence of bleach, presence of surfactants, temperatures from cold-water wash to hot.

The directed-evolution campaigns at Novozymes have produced subtilisin variants — descendants of the same subtilisin Frances Arnold worked on — that are stable in concentrated bleach, that tolerate the alkaline pH of detergent, that retain activity at cold-water temperatures. Each variant is a directed-evolution lineage. The progress over decades has been incremental — small percentage improvements year over year — but the cumulative effect is enormous. Modern laundry detergents use a third of the energy that 1970s detergents did, partly because cold-water washing works thanks to evolved cold-active enzymes.

Similar stories play out across the chemicals industry. Codexis, Novozymes, Genomatica, Provivi, Arzeda, and dozens of other companies have built businesses on directed evolution. Bulk chemicals — adipic acid, butanediol — produced by fermentation with evolved enzymes. Specialty chemicals — flavors, fragrances, pesticides — produced by evolved enzymes. The chemicals industry, which used to be entirely about metal catalysts and harsh conditions, is gradually shifting toward biocatalysis. Directed evolution is the engine of that shift.

The takeaway is that directed evolution is not an academic curiosity. It is the dominant method for producing industrial-grade biocatalysts, and it's responsible for a quietly enormous fraction of the chemistry that makes modern life possible. When you swallow a pill, when you wash your clothes, when you eat a piece of bread, you're benefiting from enzymes that were evolved in directed-evolution campaigns. Most people don't know this. Now you do.

---

## SEGMENT 14 — Directed evolution of biosynthetic pathways — multi-enzyme cascades

So far we've been talking about directed evolution of single enzymes. One protein, one selection, one cycle. But many of the most interesting things you'd want to make are not made by a single enzyme. They're made by **pathways** — chains of enzymes, each one taking the product of the previous one and converting it to the next intermediate, building up a complex natural product step by step.

Think about an antibiotic like erythromycin. It's not made by one enzyme. It's made by a chain of about a dozen enzymes — a polyketide synthase — that builds the molecule one carbon at a time, adding small chemical groups, reducing certain positions, oxidizing others, methylating, glycosylating. The natural pathway in _Saccharopolyspora erythraea_ took millions of years to evolve. The product is exquisitely tuned for its biological function. But if you wanted to make a slight variant of erythromycin — say, one with a different sugar attached, or with a hydroxyl group in a different position — you'd need to alter multiple enzymes in the pathway, in coordinated ways, while keeping all the intermediate steps functional.

This is the problem of **pathway-level directed evolution**. And it's substantially harder than single-enzyme evolution, because the search space is bigger and the selection has to act at the pathway level.

\[Pause.\]

The general approach is to express the entire pathway in a host organism — usually E. coli or _Saccharomyces cerevisiae_ — and to evolve the pathway as a whole. You can do this several ways.

One approach is to evolve each enzyme separately, optimizing it for the specific substrate the previous enzyme produces. This is "modular" pathway evolution. You take the first enzyme, evolve it for whatever you want — better activity, modified product. Then you take the second enzyme, give it the new substrate the modified first enzyme produces, and evolve it to accept the new substrate. And so on down the pathway. This is conceptually clean but operationally slow — each enzyme evolution is its own multi-round campaign.

Another approach is to evolve the whole pathway at once. You make libraries that vary multiple enzymes simultaneously. You couple production of the final product to a fluorescent or selectable readout — for example, the final product binds a sensor protein that activates a fluorescent reporter. Then you select or screen on the final product. The libraries are vast, because every enzyme can be varied, but the selection acts on the entire pathway as a unit.

The Christopher Voigt lab at MIT, the Jay Keasling lab at Berkeley, the John Dueber lab also at Berkeley, the Hal Alper lab at UT Austin — these are some of the groups that have pushed pathway-level directed evolution. Keasling's lab famously engineered yeast to produce **artemisinic acid**, the precursor to the antimalarial drug artemisinin, by reconstructing a plant pathway in yeast and then evolving the whole thing for high titer. The result, after multiple campaigns, was a microbial source of artemisinin precursor that competes with plant agriculture for cost — and it was deployed at scale by Sanofi.

Other targets include opioids — the Smolke lab evolved a yeast pathway to make hydrocodone — and a wide variety of natural products that are hard to source from plants or fungi. The general approach is the same: assemble the pathway, couple the product to a selection or screen, run directed evolution on multiple enzymes at once, harvest the variants that produce the most product.

\[Pause.\]

The most ambitious work in this area combines directed evolution with **modular DNA assembly methods** — like Golden Gate, like MoClo, like the various synthetic-biology toolkits — that let you mix and match variants of multiple genes quickly. You build a library that varies, say, three different enzymes in the pathway, with ten variants of each. That gives you a thousand combinations. You assemble all thousand combinations in parallel using one-pot assembly. You transform them into yeast. You screen for product. You take the top combinations forward. You can iterate this in a few weeks per round.

Pathway-level directed evolution is still maturing. It's harder than single-enzyme evolution, but the payoff — making complex natural products in fermenters instead of from rare biological sources — is enormous. The recent successes with cannabinoids, with rare terpenes, with novel-to-nature small molecules, all rest on directed evolution at the pathway level. As selection methods and assembly methods continue to improve, this is probably where directed evolution will have its biggest commercial impact over the next decade.

---

## SEGMENT 15 — Machine-learning-assisted directed evolution

We come now to the frontier — the place where directed evolution is right now in 2026, where the methods of the last thirty years are being augmented by machine learning, and where the next decade of protein engineering is being built. This is the part of the lecture that will date the fastest, so take it with appropriate caution. But the broad strokes are clear.

Here's the basic move. Directed evolution, classically, generates random libraries and screens or selects them. Most of the variants in a random library are useless — they fold wrong, they catalyze nothing, they bind nothing. Maybe one in a thousand is even mildly interesting. Most of your tickets are wasted.

What if you could make a better starting library? What if, instead of generating random variants, you generated variants that an ML model predicts are likely to be functional — variants in the "good" part of sequence space, before you even start screening? Then your library would have a much higher hit rate. The screen would find winners more easily. The whole campaign would compress from dozens of rounds to a handful.

\[Pause.\]

The Arnold lab itself has been pushing in this direction. The general approach is called **machine-learning-assisted directed evolution**. You generate an initial small library and screen it carefully, getting high-quality activity measurements for each variant. You use that data to train an ML model that predicts activity from sequence — typically a neural network operating on the protein language. The model has now learned, from your data, what makes a good variant.

Now you use the model to generate the next library. Instead of random mutations, you ask the model: which mutations does it predict will be functional? You generate a library biased toward the model's predictions. You screen the new library — and because the model has shifted the library toward good variants, the hit rate is much higher. You add the new screen data to the training set, retrain the model, generate a better library, screen again. Each round, the model gets smarter, the library gets better, the screen finds better winners.

The papers by **Bedbrook, Tyo, and Arnold**, and by other groups like Yang and Wu, have shown this work in practice. ML-assisted directed evolution can reach the same endpoint enzyme in many fewer rounds than classical directed evolution, with smaller libraries, with less screening labor. The ML model effectively transfers learning across rounds — what we discover in round one biases what we propose in round two.

\[Pause.\]

The analogy I want you to keep is that **ML-assisted directed evolution is the ML proposing a good starting library, and the lab evolving it the rest of the way — the two compound**. The ML doesn't replace evolution; it accelerates it. The ML proposes; evolution disposes. Each method covers a weakness of the other.

The ML's weakness is that it can only predict what it's been trained on. If you're trying to evolve a brand-new function — a chemistry no enzyme has ever done — the ML model has nothing to go on. Evolution can blunder into novel function through random exploration; ML can only interpolate within what it knows.

Evolution's weakness is that it's slow and expensive. Each round of mutation, expression, and screening takes a week or two. If you can compress ten rounds into three rounds by using ML to focus the libraries, the savings are huge.

So the combination is greater than the parts. ML for the structured parts of sequence space where you already have data; evolution for the unstructured frontier where ML can't predict. Modern protein-engineering campaigns at the cutting edge use both, and the trend is clearly toward tighter integration — ML proposing libraries, automated platforms generating and screening them, ML retraining on the new data, generating the next library, and so on.

Some groups have started calling this **closed-loop protein engineering**. The lab is a feedback loop: ML proposes, the wet lab tests, the data feeds back into the ML, the ML proposes better, the wet lab tests better. The loop tightens. The cycle time drops from weeks to days. The number of variants needed drops from millions to thousands. The skilled human work shifts from designing variants to designing experiments — what to measure, how to measure it, what selection pressure to apply. The variants themselves are increasingly machine-proposed.

This is where protein engineering is going. The exact form is still being worked out — different labs use different ML architectures, different library-generation strategies, different screening platforms — but the meta-pattern of closed-loop ML-plus-evolution is clearly the future.

---

## SEGMENT 16 — Deep mutational scanning — mapping the whole landscape

Let me describe one more method that's worth its own segment, because it's the modern face of directed evolution in many academic labs. The method is **deep mutational scanning**, or DMS, developed primarily by **Doug Fowler** and **Stan Fields** at the University of Washington starting around 2010.

Classical directed evolution is, in a sense, evolving toward one peak. You start somewhere, you climb, you end at a better place. But you only ever sample the variants on the path you took. You don't know what the rest of the landscape looks like. There might be a better peak you didn't find, because no random library you generated happened to point toward it.

Deep mutational scanning takes a different approach. Instead of evolving toward one peak, you map the **entire local landscape**. For a protein of, say, three hundred amino acids, there are nineteen possible point mutations at each position — so the total number of single-mutation variants is three hundred times nineteen, or roughly 5,700. You can make a library that contains all 5,700 single-mutation variants. You can also, with a bit more effort, make a library of every double-mutation variant — maybe 16 million combinations — though that's harder.

You express the library, you apply a selection or screen, and you measure the abundance of each variant before and after selection. Using next-generation sequencing, you read out the frequency of each variant in the input library and the output library. The change in frequency tells you the effect of each mutation on the function.

The output is a **heat map** of the protein, where each cell shows the fitness effect of substituting one amino acid for another at one position. You can see, at a glance, which positions are tolerant of any substitution, which positions are critical, which substitutions improve function, which destroy it. The whole protein, fully mapped at single-mutation resolution.

\[Pause.\]

The analogy I want you to keep is that **deep mutational scanning is instead of evolving toward one peak, you map the whole landscape — every single mutation tested in parallel, all the way up to combinations**. Where classical directed evolution finds you one path up the mountain, DMS gives you a topographic map of the whole region. You learn things you can't learn from evolution — which positions are dispensable, which mutations are nearly equivalent, which combinations are likely to be additive versus epistatic.

DMS has been applied to GFP, to BRCA1, to influenza hemagglutinin, to ACE2, to literally hundreds of proteins. The Fowler lab has built it into a routine analysis. The data are valuable both as fundamental biology — telling us how proteins work — and as input for downstream engineering. If you want to evolve a protein and you have a DMS map of it, you know exactly which positions to target and what substitutions to make. Your library design is informed by the map.

DMS is also informative for **disease variant interpretation**. When a patient has a mutation in some clinically important gene, the doctor needs to know whether that mutation is pathogenic. The classical answer involves family pedigrees, structural modeling, and educated guesswork. DMS gives you a different answer: just look up the mutation on the heat map and read off its fitness effect in a relevant assay. If the mutation is mild on the map, it's probably benign. If the mutation destroys function, it's probably pathogenic. The Fowler lab and Lea Starita's group have published DMS maps for clinically important genes — BRCA1, PTEN, several others — that are being integrated into variant-interpretation pipelines.

\[Pause.\]

DMS sits at the boundary between directed evolution and characterization. It's not exactly evolution — you're not iterating, you're not climbing — but it uses the same library-plus-selection-plus-sequencing infrastructure that directed evolution uses. And it produces a kind of data that ML models love — comprehensive, quantitative, and dense. DMS data is often the training data for the ML models that then drive ML-assisted directed evolution.

So DMS is the modern face of directed evolution in many academic labs. Instead of doing six rounds of evolution to optimize a protein, you do one round of DMS to understand the protein, then a focused evolution to push it where you want. The map plus the journey, instead of the journey alone.

---

## SEGMENT 17 — Negative selection and counter-selection — engineering for specificity

So far we've been talking about positive selection — selecting variants that do something better. But there's another kind of selection that's essential when you want to engineer for **specificity**, not just for activity. The technique is **negative selection** or **counter-selection**, and it's the second selection pressure you can apply alongside positive selection.

Here's the problem. Suppose you're evolving an enzyme to act on substrate A. Positive selection rewards variants that act on A. But often, in the process, you'll evolve variants that also act on similar substrates — say, substrate B, which is structurally close to A. If you only select on A, you don't notice that B is also getting eaten. Your evolved enzyme has high activity on A, but it's not specific — it eats anything that looks roughly like A.

This is bad. In therapeutic contexts especially, you want enzymes and binders that act on the right target and only on the right target. An antibody that binds your cancer antigen but also binds healthy tissue is going to cause autoimmune side effects. A base editor with high on-target activity but high off-target editing is going to cause cancer-driving mutations. You need specificity, not just activity.

\[Pause.\]

Negative selection adds a second filter. You design your selection so that variants are rewarded for acting on the target you want **and punished for acting on the targets you don't want**. The two pressures together push the protein toward specificity, not just activity.

The mechanics depend on the system. In phage display, you can do negative panning — pour the library over an immobilized version of the **off-target** first, throw away whatever sticks (those are the non-specific binders), and then pan the remaining library on the on-target. The on-target binders that survive are the ones that don't also bind the off-target — true specifics.

In growth-coupled selection, you can engineer a counter-selection that kills cells expressing variants that act on the off-target. For example, you couple action on the off-target to expression of a toxic gene. Cells with on-target-only enzymes survive; cells with promiscuous enzymes die. The two pressures, applied simultaneously, evolve a specificity profile, not just an activity level.

In FACS-based screening, you can stain with both the on-target and off-target labeled with different fluorophores, and gate on cells that are bright in the on-target channel but dim in the off-target channel. That's negative selection by FACS gating.

\[Pause.\]

Counter-selection is particularly important for **genome editing tools**, where off-target editing is a clinical concern. The Liu lab has used counter-selection extensively in evolving Cas9 variants with higher specificity, in evolving prime editors with cleaner editing windows, in evolving deaminases with reduced bystander activity. Counter-selection has also been important in evolving antibodies for therapeutic use — you want the antibody to bind the tumor antigen but not the healthy tissue that shares some structural features.

The general principle is: **the protein doesn't know what you want unless you tell it**. If you only set up positive selection, the protein evolves to satisfy that selection, often by becoming promiscuous. If you set up positive and negative selection together, the protein evolves to satisfy both — which usually means specificity.

This is, in a sense, a deep point about directed evolution. The evolutionary outcome depends entirely on the fitness function. If you forget to penalize off-targets, you get off-target activity. If you forget to demand stability, you get unstable winners. The selection pressures you apply are everything. Designing a good selection — one that captures all the properties you care about, positive and negative — is often the hardest part of the experiment, and a bad selection can produce technically successful evolutions that fail in the actual application because they were optimized for the wrong thing.

The principle generalizes to ML-driven evolution too. If you train your ML model only on positive activity data, the model will propose promiscuous variants. If you include off-target data and train the model to predict specificity, you get more specific proposals. The fitness function — whether implemented as physical selection in a tube or as a loss function in a neural network — determines what you get.

---

## SEGMENT 18 — Frontier — generative ML, PACE, and the continuous-evolution future

Let me close with the frontier. What are the most active research directions in directed evolution right now, in 2026? What's likely to be in textbooks five years from now that isn't quite in them yet? I'll give you three big themes.

The first is **generative ML protein design combined with directed evolution loops**. We've talked about ML-assisted directed evolution — the loop where ML proposes libraries and evolution refines them. The newer move is to have ML _generate_ protein sequences de novo — not just propose mutations on a starting protein, but design whole new proteins from scratch — and then refine those designs with directed evolution.

Tools like **ProteinMPNN**, developed in the Baker lab, take a desired backbone structure and propose amino acid sequences that should fold into that structure. **ESM-fold** and other large language models for proteins predict structure from sequence and can also be inverted to generate sequences for a target. These tools produce starting designs that are typically pretty close to functional — folded, but maybe not quite active enough, or active but not selective enough. Directed evolution then refines them the rest of the way.

The combination is powerful. Generative ML covers the broad design — getting close to the right shape, the right active-site geometry, the right rough function. Directed evolution covers the local optimization — turning a marginally functional design into a high-performance enzyme. The two methods cover each other's blind spots. Generative ML can't tell you which specific residues will catalyze fastest; directed evolution can't tell you what novel backbone might fold into a good enzyme.

You see this in recent work from the Baker lab, from David Baker's spin-out companies, from Justas Dauparas's work on ProteinMPNN, from labs that combine RFdiffusion with directed evolution. The pattern is: design a protein de novo, evolve it to optimize, ship it. It's a different workflow than anything that existed five years ago. It's starting to produce real results.

\[Pause.\]

The second theme is **continuous evolution** — running directed evolution without manual rounds, in a chemostat or bioreactor, with selection pressure tightening automatically. The canonical method here is **PACE — Phage-Assisted Continuous Evolution** — developed by David Liu's lab around 2011.

Here's the trick. You set up a flow reactor — a chemostat — with E. coli growing inside. The cells contain a special plasmid called the accessory plasmid, which encodes a piece of phage machinery that the phage needs to replicate. The cells also contain selection circuitry — say, a gene whose expression depends on the activity of the protein you're evolving. When the protein works well, the cells produce more of the missing phage machinery, and phages can replicate more. When the protein works poorly, the phages can't replicate.

You inject a phage into the chemostat. The phage encodes the protein you're evolving. The phage tries to replicate. Variants of the phage carrying a functional version of your evolving protein replicate faster than variants carrying poor versions. The chemostat continuously dilutes — fresh media in, old media out — so variants that don't replicate fast enough get washed out. Variants that replicate faster persist and dominate.

The phage genome is engineered to mutate at a higher rate than usual — you can use a mutator phage strain that introduces errors as it replicates. So each generation of phage carries new mutations. Selection acts continuously. Within days, the phage population shifts toward variants encoding better versions of your protein.

\[Pause.\]

The analogy I want you to keep is that **PACE is running directed evolution continuously, in a chemostat, no manual rounds — phages replicate, selection pressure tightens automatically, and the experimenter just sets the flow rate and the selection design**. The cycle time drops from a week per round to hours per round. The number of generations the protein passes through in a week of PACE can equal months of conventional directed evolution.

PACE has been used to evolve aminoacyl-tRNA synthetases, RNA polymerases, Cas9 variants, base editors, and many other proteins. It's not appropriate for every problem — the selection has to be coupleable to phage replication, which constrains the design — but for problems where you can set it up, PACE is dramatically faster than classical directed evolution.

The Liu lab has continued to develop continuous-evolution methods, including PANCE — a less stringent version useful for early-stage evolution — and various adaptations for specific problems. Other labs have built analogous continuous-evolution systems based on yeast, on mammalian cells, on cell-free extracts. The general trend is toward making evolution _faster_ by removing the human-in-the-loop bottleneck.

\[Pause.\]

The third theme, briefly, is **multi-property optimization**. Classical directed evolution optimizes one property at a time — activity, or stability, or specificity, or expression. But real proteins, especially industrial and therapeutic proteins, need to be good at many properties simultaneously. They need to be active, stable, soluble, non-immunogenic, easy to manufacture, specific. Single-objective selection often improves one property at the cost of others.

Modern campaigns increasingly use multi-property selection — measuring or selecting on multiple properties at once. ML helps a lot here, because ML models can predict multiple properties from sequence and propose variants that score well on all of them simultaneously. Closed-loop ML-plus-evolution campaigns can navigate multi-dimensional fitness landscapes that would be hard to navigate with classical evolution alone.

This is where the field is heading. Generative ML for design. Continuous evolution for speed. Multi-property selection for real-world relevance. Closed-loop integration of all three. The protein engineer of 2030 will look much more like an experimental designer and ML practitioner than like a wet-lab cloner. The actual variants will be machine-proposed, machine-evolved, machine-characterized. The skilled human will be choosing the problem, designing the selection, interpreting the results.

\[Pause.\]

Let me end with the philosophical point I made in Segment 1. Directed evolution is, fundamentally, an admission of humility. Proteins are too complex to design from first principles. So we borrow Darwin's algorithm — random mutation plus selection — and we point it at problems Darwin never cared about. We let the protein teach us what works. We don't have to understand why the winning mutations are winning. We only have to recognize them as winners.

That humility is, I think, the deepest lesson of the field. The most successful approach to protein engineering, the one that produced industrial enzymes, the one that produced therapeutic antibodies, the one that produced the deaminase in every clinical base editor — that approach is the one where we gave up on understanding and started just running experiments fast. We outsourced the design to evolution. The protein found answers we couldn't have designed. And we got out of the way and let it cook.

That, in two hours, is directed evolution. Iterated mutation and selection. Darwin in a test tube. The Frances Arnold Nobel of 2018. The TadA evolution for ABE. The Codexis sitagliptin transaminase. The Novozymes detergent enzymes. The pathway engineering for artemisinin. The ML-assisted closed loops. The PACE chemostats. The deep mutational scans. All of it variations on the same simple, profound idea: make a library, select the winners, repeat. The rest is implementation.

Thank you. I'll take questions.

---

## APPENDIX

A short list of references, terms, and notes for the curious reader. None of this needs to be read aloud. It's here as a study aid.

**Key papers and dates.**

- Frances Arnold, "Tuning the activity of an enzyme for unusual environments: Sequential random mutagenesis of subtilisin E for catalysis in dimethylformamide" — _PNAS_, 1993. The first systematic demonstration of directed evolution of an enzyme.
- George Smith, "Filamentous fusion phage: novel expression vectors that display cloned antigens on the virion surface" — _Science_, 1985. The phage-display paper.
- Greg Winter and colleagues, adapting phage display to antibody libraries — series of papers from Cambridge, late 1980s and 1990s.
- Willem (Pim) Stemmer, "Rapid evolution of a protein in vitro by DNA shuffling" — _Nature_, 1994. And "DNA shuffling by random fragmentation and reassembly: in vitro recombination for molecular evolution" — _PNAS_, 1994. The DNA shuffling papers.
- Dane Wittrup and Eric Boder, "Yeast surface display for screening combinatorial polypeptide libraries" — _Nature Biotechnology_, 1997. Yeast display.
- Andreas Plückthun and others, on ribosome display, late 1990s.
- Roberts and Szostak; and Yanagawa group — on mRNA display, 1997.
- David Liu lab, "Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage" — _Nature_, 2016 (CBE).
- David Liu lab, "Programmable base editing of A·T to G·C in genomic DNA without DNA cleavage" — _Nature_, 2017. The ABE paper, with TadA evolved through seven rounds.
- David Liu lab, ABE8e paper, 2020 — further evolution of TadA to TadA*8e.
- Codexis and Merck, "Biocatalytic asymmetric synthesis of chiral amines from ketones applied to sitagliptin manufacture" — _Science_, 2010.
- Liu and Esvelt, on PACE (Phage-Assisted Continuous Evolution), 2011 and later papers.
- Frances Arnold Nobel Lecture, December 2018, Stockholm. Available on the Nobel Foundation website.

**Key terms.**

- _epPCR_ — error-prone PCR. Mutagenesis by sabotaging the polymerase.
- _Site-saturation_ — exhaustive replacement of one or a few positions with all twenty amino acids.
- _DNA shuffling_ — Stemmer recombination of winning variants.
- _Phage display_ — display of protein on filamentous phage coat protein, usually pIII.
- _Yeast display_ — display of protein on yeast cell wall via Aga2p.
- _Ribosome display_ — cell-free display via stalled ribosome on no-stop-codon mRNA.
- _mRNA display_ — cell-free display via puromycin covalent linkage of protein to mRNA.
- _FACS_ — fluorescence-activated cell sorting.
- _PACE_ — phage-assisted continuous evolution.
- _DMS_ — deep mutational scanning.
- _Counter-selection / negative selection_ — selection that punishes off-target or off-property variants.

**Key labs as of 2026.**

- Frances Arnold (Caltech) — the canonical directed-evolution lab.
- David Liu (Broad / Harvard) — base editors, PACE, continuous evolution.
- David Baker (UW) — generative design + directed evolution.
- Doug Fowler, Stan Fields, Lea Starita (UW) — deep mutational scanning.
- Dane Wittrup (MIT) — yeast display.
- Jay Keasling (Berkeley / JBEI) — pathway-level evolution.
- Codexis (industry) — enzyme evolution for pharma and chemicals.
- Novozymes (industry) — enzyme evolution for detergents and biocatalysis.

**For further reading.**

The Arnold Nobel Lecture is the best single accessible overview of the field. The Liu lab review on base editors and continuous evolution (various _Nature Reviews_ pieces) is good for the genome-editing side. The Wittrup yeast-display review in _Nature Protocols_ is the practical bible for that platform. The Fowler-Fields _Nature Methods_ review on DMS is the place to start for that topic.

**End of script.**


