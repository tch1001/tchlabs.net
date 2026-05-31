# Sanger Sequencing: Reading the Genetic Alphabet

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — Why sequencing matters

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about Sanger sequencing — the chain-termination method that Frederick Sanger published in 1977 — and I want to tell you up front that this is, in my opinion, one of the most elegant tricks in the entire history of biochemistry. It is also the technique that, more than any single other piece of laboratory craft, built modern biology. The Human Genome Project ran on it. Every gene you've ever read about in a textbook was, at some point in its history, sequenced by this method. And here is the part that surprises students every year: it is still in use. Today. In real labs. Not as a museum piece, but as a working tool. Even in a world of next-generation sequencing, of nanopores, of Illumina runs that produce a trillion bases overnight — Sanger sequencing keeps its corner of the bench, because for certain jobs it is still the right answer. So before you can understand any of the modern techniques you've probably heard of, you have to understand this one. It is the foundation on which everything else was built.

Let me start by telling you what the problem is, because the problem is the thing that motivates the cleverness of the solution. DNA is a long polymer made out of four kinds of subunit — four nucleotides, the famous A, T, G, and C. The order of those four letters along the strand is, essentially, the entire genetic information content. Where in your DNA there's an A versus a T versus a G versus a C is the difference between making insulin and making hemoglobin, between brown eyes and blue eyes, between healthy and sick. To know what a piece of DNA does, you have to know its sequence. You have to be able to read the letters in order.

\[Pause.\]

Now, that sounds straightforward when I say it like that, but stop and think for a second about what you're actually being asked to do. A typical gene is a thousand letters long. A bacterial chromosome is a few million letters. The human genome is three billion letters. And these letters are not printed on a page; they are hidden inside a molecule about two nanometers wide, packaged as a double helix, wound up inside a cell, and the four letters themselves differ from each other only by a single nitrogen here, a single oxygen there. They are chemically almost identical. Telling them apart is hard. Telling them apart _in order_, one after another, along a strand, with no errors — that's the problem.

The analogy I want you to hold in your head for this whole lecture is this. DNA sequencing is **reading the genetic alphabet, one base at a time**. You have a book. The book is written in a four-letter alphabet. You can't see the letters with your eyes, you can't see them with a regular microscope, and the print is so small that the letters themselves are smaller than the wavelength of visible light. You can't just look. You have to invent a chemistry that translates the position of each letter on the strand into a physical signal you can detect. That's the central design problem. And there have been many attempts at solving it over the years, but the one that won — the one that worked, the one that was good enough to keep using for forty years — is Sanger's chain-termination method.

\[Pause.\]

If you walk out of here in two hours and you can do three things — one, explain in plain English the chain-termination trick and why it produces a ladder of every possible length of DNA fragment; two, look at a Sanger chromatogram — those four-colored peaks you've probably seen in a lab report — and tell me what each peak means and what its height tells you about confidence; three, articulate why we still use Sanger sequencing in 2026, in an era of cheap massively-parallel sequencing, and what the specific jobs are where it remains the right tool — then we've succeeded. Everything else will hang off those three.

One more piece of motivation before we dive in. Frederick Sanger, the man who invented this method, is one of only a handful of scientists in history to have won two Nobel Prizes. His first, in 1958, was for figuring out the amino acid sequence of insulin — that is, for inventing protein sequencing. His second, in 1980, was for inventing DNA sequencing — the very method we are about to spend two hours dissecting. Two Nobels. Both of them for the same fundamental contribution: figuring out how to read the sequence of a biological polymer, letter by letter. He worked, by all accounts, in a small lab, quietly, almost obsessively, on this single problem — how do you read a sequence — for most of his career. He didn't run a giant empire of postdocs. He did the bench work himself. And he changed biology twice. We're going to spend a few minutes on him in the next segment, because the human story matters here, and because the way he thought about the problem is itself a lesson in scientific taste.

But the headline I want you to walk away from Segment 1 with is this. **Sanger sequencing is the technique that made it possible to read the genetic instructions of life — directly, accurately, base by base.** Everything we know about gene structure, protein evolution, disease genetics, microbial diversity, drug targets, ancient DNA, forensic identification — all of it traces back to this one chemical trick, invented in a Cambridge basement in the mid-1970s. And the trick itself, when you finally see it, is so elegant that you'll wonder why nobody thought of it sooner. That elegance is the story I want to tell you today.

---

## SEGMENT 2 — Fred Sanger and the two Nobels

So let's spend a few minutes with Fred Sanger himself, because the man's story is genuinely worth hearing, and because the way he worked tells you something about why this technique came out as elegant as it did.

Frederick Sanger was born in England in 1918, the son of a country doctor. He went to Cambridge as an undergraduate to study natural sciences, and after a stretch as a conscientious objector during World War II — he was a Quaker — he stayed at Cambridge for his PhD and, essentially, for the rest of his career. He worked at the same institution, the MRC Laboratory of Molecular Biology, for nearly five decades. He retired at sixty-five, in the early 1980s, and reportedly never set foot in a lab again. He took up gardening. He lived another thirty years, perfectly content, never publishing another paper. By all accounts a thoroughly modest, thoroughly unflashy man, who happened to have done some of the most important work in twentieth-century biology.

His first big problem, in the 1940s and 1950s, was protein sequencing. At the time, nobody knew whether proteins even had a defined sequence. The dominant view was that proteins were essentially polymers of amino acids stuck together in some kind of repeating or statistical pattern — not unique sequences, more like rubber or starch, which are polymers with characteristic compositions but no specific order. Sanger picked insulin — a small protein, fifty-one amino acids in total, freely available from slaughterhouses — and over the course of about a decade he worked out, residue by residue, the complete amino acid sequence. The technique he invented for this involved chopping insulin up with various enzymes, separating the fragments, labeling the ends with a reagent we now call **Sanger's reagent** — dinitrofluorobenzene — and reading the sequence of each fragment by Edman degradation and chromatography. It was painstaking, brutal work, and at the end of it he had proved, definitively, that insulin had a unique, specific amino acid sequence, the same in every insulin molecule, the same in every cow, reproducible to the last residue. **Proteins were defined sequences.** That was the discovery — and the Nobel Prize in 1958.

\[Pause.\]

Now here is the thing I want you to notice about this. Sanger could have rested. He had a Nobel, tenure, security, the respect of his entire field. Most scientists at that stage start a big lab, manage other people, fade gracefully into administrative respectability. Sanger instead kept doing bench work, and he started thinking about a much harder problem: could you do for DNA what he had just done for protein? Could you sequence a nucleic acid?

This was, at the time, considered nearly impossible. DNA has only four kinds of letter, which sounds easier than proteins with their twenty, but in fact it's harder. Proteins have twenty kinds of amino acid, which means each one has fairly distinctive chemistry, distinctive solubility, distinctive behavior in a column. You can separate them. DNA's four letters — A, T, G, C — are chemically much more similar to each other. They are all nucleotides, all with the same sugar-phosphate backbone, differing only in the base. Separating them is much harder. And DNA molecules are also much longer than proteins. A typical protein is a few hundred amino acids. A typical gene is a thousand base pairs, and a whole genome is millions. The scale was intimidating, and the chemistry was unhelpful.

Sanger spent the entire 1960s and most of the 1970s on this problem. His first method, called **plus-and-minus sequencing**, came out in 1975 and was clever but slow and not very accurate. He kept thinking. And then, in 1977, he and his colleagues published a paper titled "DNA sequencing with chain-terminating inhibitors," which introduced the method we now call Sanger sequencing — the dideoxy method — and it was so much better than everything else available that within a couple of years it had essentially replaced all other approaches. By 1980 he had his second Nobel.

\[Pause.\]

I want to draw out two things from this human story.

First, Sanger spent essentially his entire career on one question: how do you read the sequence of a biological polymer? He solved it for proteins, then he solved it again for DNA. He didn't change topics, didn't chase fashion, didn't build a giant lab. He just kept his eye on the one problem and kept inventing better and better chemistry to crack it. That focus is, I think, the reason both methods ended up so clean. He had been thinking about the abstract structure of the sequencing problem for thirty years by the time he invented the dideoxy method, and the solution shows the depth of that thought.

Second — and this is the conceptual point that matters for the rest of the lecture — when you look at the chain-termination idea, you can see Sanger reusing a piece of structural intuition from his protein work. In protein sequencing, the basic move is to chemically label one end of a polymer and then read what's there — and then repeat. In DNA sequencing, the basic move he invented is even cleverer: instead of reading one end at a time, you _make a population of every possible length of the polymer_, and you read them all at once by sorting them by length. He flipped the problem from sequential reading to parallel reading, by generating a controlled distribution of truncated copies. That is the move. And it is the move we are going to spend the next several segments unpacking.

So that's Fred Sanger. Quiet, focused, English, Quaker, gardener, two Nobels, the inventor of sequencing — both flavors. Now let's get into how the chain-termination trick actually works.

---

## SEGMENT 3 — The chain-termination idea

Okay. The chain-termination trick. Sit forward for this one, because if you understand the next ten minutes, you understand the entire technique. Everything else is engineering on top of this core insight.

Let me set the scene. You have a piece of DNA — let's say, a single-stranded template, a thousand bases long, whose sequence you want to know. You also have, in a tube, a few ingredients: DNA polymerase, which is the enzyme that copies DNA; a short DNA primer, complementary to one end of your template, which gives polymerase a place to start; and a mix of the four normal nucleotides — dATP, dTTP, dGTP, dCTP — the building blocks. If you put all that together, polymerase will sit down on the primer, and starting from there, it will march along the template, reading one base at a time, and adding the complementary nucleotide to a growing new strand. It will keep going until it reaches the end of the template. At the end of the reaction, you have a complete copy of your template strand. That is just standard, vanilla DNA replication, in a tube. PCR uses the same logic. Plasmid replication uses the same logic. It's the central enzyme of molecular biology doing its job.

Now here is Sanger's twist. What if, in addition to the normal four nucleotides, you also added a tiny pinch of saboteur nucleotides? Nucleotides that look, to the polymerase, exactly like the normal ones — they have the right base, the right sugar, the right triphosphate, they fit into the active site beautifully — but they are subtly broken in one specific way. Specifically: they are missing the **3' hydroxyl group**. The 3'-OH. Just that one little oxygen, on the sugar.

Why does that matter? Because the 3'-OH is the chemical anchor point that polymerase uses to add the _next_ nucleotide. When polymerase brings in a new nucleotide, it makes a bond between the phosphate of the incoming nucleotide and the 3'-OH of the previous one. That's the **phosphodiester bond** that chains nucleotides together into a strand. No 3'-OH, no bond. No bond, no extension. If a saboteur nucleotide gets incorporated into the growing strand, polymerase has nothing to attach the next base to. It is stuck. The chain is terminated, right there, at exactly the position where the saboteur slipped in.

That saboteur nucleotide is called a **dideoxynucleotide**, or **ddNTP**. The name is precise. A normal DNA nucleotide is a deoxynucleotide — it's missing the 2' hydroxyl that RNA has, hence "deoxy." A dideoxynucleotide is missing _both_ the 2' hydroxyl and the 3' hydroxyl. Two hydroxyls gone, hence "dideoxy." It is otherwise identical to the normal nucleotide. The polymerase cannot tell the difference at the moment of incorporation. Only afterward, when it tries to add the next base and finds nothing to attach to, does the consequence become clear: the strand is dead.

\[Pause.\]

So let me give you the analogy now, and I want you to really feel it. Imagine you are building a chain by clipping LEGO bricks together. Each LEGO brick has a stud on top and a hole on the bottom. The hole on the bottom of each new brick snaps onto the stud on top of the previous brick. That stud — that's the 3'-OH. As long as each brick has a stud on top, you can keep building.

Now imagine someone sneaks into your pile of bricks and adds a few defective bricks. These defective bricks look identical from below — they have the hole on the bottom, they snap onto the previous stud just fine. But the top of the defective brick is _smooth_. No stud. Once you snap a defective brick into your chain, there's no stud for the next brick to attach to. The chain stops. Right there. Whatever position you happened to be at when you grabbed the defective brick — that's where your tower ends.

If only one in a hundred bricks in your pile is defective, you'll usually get through a lot of normal bricks before you happen to grab a defective one. But _eventually_ you will. Maybe at position twelve. Maybe at position eighty-seven. Maybe at position four hundred and sixteen. Each individual tower you build will be a different length, ending at whatever position the defective brick happened to slip in.

Now run this experiment billions of times in parallel. Imagine billions of identical builders, each starting at the same position, each building the same kind of tower from the same shared pile of bricks. Each builder will terminate at a different position — because the saboteur bricks slip in randomly. The result, across the entire population of builders, is a population of towers of _every possible length_. Some terminated at position three. Some at position seventeen. Some at position eight hundred and forty. Every length is represented, in a different builder.

\[Pause.\]

That, in essence, is what happens in a Sanger sequencing reaction. You put your template in a tube with primer, polymerase, normal nucleotides, and a small dose of dideoxynucleotides. The reaction starts. Each individual polymerase molecule sits down on a template, starts copying, and proceeds until — by chance — it grabs a ddNTP instead of a normal dNTP. At that point, that particular nascent strand is terminated. But there are billions of polymerase molecules in your tube, each working on its own copy, and they terminate at all different positions. The result is a tube containing a **ladder of incomplete copies** — every possible length of partial extension product, all mixed together.

And here is the most important conceptual move in the entire technique. **You do not sequence one molecule. You sequence a population.** You generate, in a single tube, a controlled distribution of truncated copies, and you read out the sequence by sorting them by length and looking at what's at the end of each length.

That move — from reading one molecule to reading a population — is the genius of the method. Trying to read one molecule directly was, in the 1970s, impossible. The signal is too small, the chemistry too delicate. But making a billion copies, each broken at a different position, and then sorting them by length to read the sequence — that you can do. The ladder of incomplete copies converts a chemical problem (what base is at position 142?) into a physical problem (how do I separate molecules of length 142 from molecules of length 141 and 143?). And by the 1970s, we had tools for separating DNA fragments by length — gel electrophoresis was already mature, well understood, and quantitative.

We'll see in the next segment how Sanger originally ran the trick — with four separate tubes, one for each base, and radioactive labels. And then in Segment 6 we'll see how the four-tube version got collapsed into a one-tube fluorescent version that automated the whole process. But the underlying logic — sprinkle in saboteurs, generate every length, sort by length, read out — never changed. The molecular biology of the next forty years was, in a real sense, the engineering of better and better ways to execute Sanger's original idea.

\[Pause.\]

One more conceptual note before we move on. The ratio of normal nucleotides to dideoxynucleotides in the reaction is critical, and it's something you tune carefully. If you have too few ddNTPs, then most strands run to the end of the template without ever being terminated, and you don't get useful short fragments. If you have too many ddNTPs, then every strand terminates after just a few bases, and you don't get useful long fragments. The sweet spot is something like one ddNTP per hundred or two hundred normal dNTPs, which gives you a population of terminated strands distributed roughly evenly across the length range you care about — from about fifty bases out to about eight hundred or nine hundred. That ratio determines your usable read length, and we'll see in Segment 9 why the read length eventually hits a wall no matter how cleverly you tune the ratio. But the principle stays the same: a population of truncations, sorted by length, read by base.

---

## SEGMENT 4 — The original four-tube method

Now let me walk you through what Sanger's original 1977 protocol actually looked like, because the physical staging of the experiment is itself instructive — and because once you see how clunky the original was, you'll appreciate the dye-terminator revolution we'll cover in Segment 6.

In 1977, fluorescent labeling chemistry was not yet practical for this kind of work. Sanger needed some way to detect the DNA fragments on a gel, and the standard label of the day was radioactivity. So he labeled the nucleotides with a radioactive isotope — usually phosphorus-32 or sulfur-35 — and read the gel out by laying photographic film over it and letting the radiation expose the film. Dark bands on the film told you where the DNA was.

But there's a problem. If all your fragments are labeled with the same radioactive tag, and they're all running on the same gel, then when you look at a band you have no way of knowing which base it corresponds to. You can tell that a fragment is, say, a hundred and forty-two bases long, but you can't tell whether the terminating base at the end is A, T, G, or C. The radioactivity all looks the same.

So Sanger's solution was beautifully literal: **run four separate reactions, in four separate tubes, each containing only one of the four dideoxynucleotides.**

Tube one gets ddATP plus all four normal dNTPs. Every fragment that comes out of tube one will end in A — because A is the only ddNTP in there, so it's the only thing that can terminate the chain. Whatever length that fragment is, you know its last base is an A.

Tube two gets ddTTP plus the four normal dNTPs. Every fragment from tube two ends in T.

Tube three gets ddGTP. Every fragment ends in G.

Tube four gets ddCTP. Every fragment ends in C.

Four tubes, four reactions, four ladders of truncations, each ladder pure for one terminating base.

Now you take all four reactions and you run them side by side on a polyacrylamide gel — a slab gel, big rectangular thing, set up vertically, with four lanes loaded across it. You apply an electric field; the negatively charged DNA migrates down through the gel, and as it migrates, the shorter fragments move faster, the longer fragments move slower. After a few hours of running, the fragments have separated by length into a series of bands all the way down the gel — like a barcode.

Then you take the gel, lay X-ray film over it, leave it overnight, and develop the film. What you see in the morning is four parallel ladders of dark bands. Each ladder is a different lane. Lane one — the A lane — has dark bands at every position where there's an A in the sequence. Lane two has bands at every T. Lane three at every G. Lane four at every C.

To read the sequence, you start at the bottom of the gel — the shortest fragments, which are the bases closest to the primer — and you work your way up. You look across the four lanes at each rung of the ladder. At rung one, which lane has the band? Maybe the C lane. So position one is C. Move up to rung two. Which lane has the band? Maybe the A lane. Position two is A. Up to rung three. T lane has the band. Position three is T. And so on, all the way up the gel. By the time you reach the top, two or three hours of squinting later, you have written out a sequence of maybe two hundred to four hundred bases.

\[Pause.\]

Let me give you the analogy. Imagine you have four basketball hoops at four different heights on a wall, and four bins of balls, where each bin only has balls that bounce up to one specific height. You drop the balls and watch which hoop each ball goes through. By looking at which hoops fire and in what order, you can reconstruct what was in which bin. The four-tube Sanger method is essentially that: four separate reactions, each producing only the fragments that end in one specific base, and the lengths of those fragments tell you the positions of that base along the sequence.

This original method worked. It was tedious — running and reading gels by hand, working with radioactive isotopes, eye-straining your way through hundreds of bands per gel — but it worked, and it worked well enough to produce, in 1977, the first complete genome sequence ever determined: the genome of bacteriophage φX174, a small DNA virus, 5,386 bases long. That was the first time anyone had ever read every base of an entire organism's genetic material. The paper, by Sanger and his colleagues, is one of the most cited in biology.

And from there, things accelerated. By the mid-1980s, labs around the world were sequencing genes routinely, one piece at a time, by exactly this method — four tubes, slab gel, X-ray film, eyeball reading. A graduate student could expect to read a few hundred bases per day. The first bacterial chromosome wouldn't be fully sequenced until 1995, almost two decades later, because at four hundred bases a day per person, three million bases is a lot of person-years. The technique worked, but it was hand-cranked. Industrializing it — turning it from artisanal to factory-scale — was the next conceptual leap, and we'll get to that.

\[Pause.\]

But first I want to mention the competition, because Sanger's method wasn't the only show in town in 1977. There was a rival, equally clever in its own way, that came out almost simultaneously, and for a while the field genuinely couldn't decide which approach would win. Spending five minutes on the loser is worth it, because it tells you why the winner won — and the answer is not what you'd expect.

---

## SEGMENT 5 — Maxam-Gilbert chemical sequencing

So in 1977, the same year Sanger published his chain-termination paper, two researchers at Harvard — Allan Maxam and Walter Gilbert — published a completely different method for sequencing DNA. It's called Maxam-Gilbert sequencing, or sometimes **chemical sequencing**, because where Sanger uses enzymes (polymerase) to make a ladder, Maxam and Gilbert use pure chemistry — specific chemical reactions that cleave DNA at specific bases.

Here's the rough idea. You take your DNA, you radioactively label one end of it — so every molecule has a tag on the same end. Then you split your DNA into four tubes, and in each tube you treat it with a different chemical that preferentially attacks one specific base. One tube gets a reagent that breaks DNA at G's. Another at A's and G's. Another at C's. Another at C's and T's. You tune the chemistry so that, on average, each DNA molecule gets cleaved at just one or two positions — not at every G, but at one randomly chosen G out of all the G's in the molecule. That gives you, across the population, fragments cut at every possible G position, every possible A position, and so on.

Then, just like Sanger, you run the four reactions side by side on a gel. The radioactively labeled end of each fragment gives you a band on the X-ray film. The position of the band tells you the distance from the labeled end to the cleavage site. By reading the ladder of bands across the four lanes, you read out the sequence.

Same fundamental logic as Sanger, in a sense — generate a population of fragments terminating at every possible position of each base, separate by length, read across the lanes. The output is even structurally similar; both methods give you a four-lane gel that you read by inspection.

\[Pause.\]

For a few years, the two methods competed head to head. Maxam-Gilbert had some real advantages. It didn't require a primer, which mattered in the early days when synthetic oligonucleotides were expensive and hard to make. It could be applied directly to native DNA fragments, without the need to first clone the DNA into a vector. And the chemistry, in some hands, was more reproducible.

But Sanger had bigger advantages, and they compounded.

First, Sanger's reagents were _safer_. Maxam-Gilbert relies on hydrazine and dimethyl sulfate, which are nasty mutagens and respiratory toxins. The lab atmosphere working through a Maxam-Gilbert protocol was not pleasant, and the long-term risks to lab workers were real. Sanger uses enzymes and nucleotides, all benign. If you've ever wondered why most molecular biology labs eventually standardized on enzymatic, rather than chemical, approaches to almost everything — this is a recurring theme. Enzymes are gentle. Chemistry, the harsh kind required to cleave DNA at specific bases, is not.

Second, and more important — Sanger's method was much easier to **automate**. The four-tube enzymatic reaction was, fundamentally, a polymerization. Just an extension reaction, with some clever additives. You could automate it by automating the pipetting, the cycling, the gel loading. There was a clear path from the manual benchtop version to a machine. Maxam-Gilbert required handling toxic reagents and running multi-step chemical workflows that resisted automation. So when the time came, in the late 1980s, to industrialize sequencing — to build instruments that could run hundreds of reactions a day without human babysitting — Sanger was the obvious platform to build on. The whole infrastructure of sequencing followed the enzymatic route, and Maxam-Gilbert essentially disappeared from working labs by the mid-1990s. It's now of largely historical interest, taught in graduate courses for completeness, but not used in practice.

\[Pause.\]

There's a lesson in this transition that I want to make explicit. **The technique that wins is rarely the one with the best chemistry on day one. It's the one that scales.** Maxam-Gilbert was, on paper, a perfectly elegant method. It would have given you the same sequence as Sanger, in the same length of run, with roughly the same accuracy. But it couldn't be automated. Sanger could. And the moment you start asking how many bases per day a single machine can produce, automation eats elegance for breakfast. This pattern repeats over and over in biotech. The PCR cyclers, the next-generation sequencers, the synthesis platforms — they all win on throughput times automation, not on theoretical purity of method. Keep that in mind as you go through your careers. The technique that scales is the technique that wins.

Walter Gilbert, by the way, shared the 1980 Nobel Prize with Sanger for his contribution — the prize was actually a three-way split, with the third recipient being Paul Berg for separate work on recombinant DNA. So in a sense, both sequencing methods were Nobel-recognized as fundamental advances. But within five years of the prize, the field had voted with its feet, and the feet went toward Sanger. The one that automated. The one that scaled.

Now let's go to the moment where it actually scaled — the four-color dye-terminator revolution.

---

## SEGMENT 6 — The four-color dye-terminator revolution

So through the early-to-mid 1980s, Sanger sequencing was running, but it was running in the four-tube, radioactive, slab-gel, hand-reading format. Each sequencing reaction took up a quarter of a gel lane. A researcher could read maybe a few hundred bases of sequence per gel, and a gel ran for half a day. The throughput was on the order of a few thousand bases per person-month, with a lot of staring at film.

Then came a series of innovations that, taken together, transformed the technique into something a machine could do. The biggest single conceptual leap was the **four-color dye-terminator** trick, introduced by Leroy Hood's group at Caltech in the mid-1980s and commercialized by Applied Biosystems, who released the first automated DNA sequencer — the ABI 370A — in 1987.

Here's the trick. Instead of using a single radioactive label and running four separate tubes for the four bases, **what if you labeled each ddNTP with a different colored fluorescent dye and ran them all together in one tube?**

Let me say what that means concretely. You take ddATP and you chemically attach a fluorescent dye that emits red light when illuminated. You take ddTTP and attach a green dye. ddGTP, yellow. ddCTP, blue. Now you put all four dye-labeled ddNTPs into a single reaction, along with the normal dNTPs, polymerase, primer, and template. The reaction proceeds exactly as before — polymerase elongates the strand, and occasionally a ddNTP slips in and terminates it — but now every terminated fragment is _color-coded by which base it terminated on_. Fragments ending in A glow red. Fragments ending in T glow green. Fragments ending in G glow yellow. Fragments ending in C glow blue.

You run all this on a single gel lane (or, later, in a single capillary — we'll get to that next segment), and the fragments separate by length as before. But now, as each fragment crosses the detector at the bottom of the gel, you don't just see "there's a band here" — you see what _color_ that band is. And the color tells you the base.

\[Pause.\]

Sit with this for a second, because it's beautiful. You have collapsed four tubes into one. You have collapsed four gel lanes into one. You have replaced the human reading of a gel — the eye-straining "compare bands across four lanes" exercise — with a machine that reads a stream of colors at a single detector. The information content is the same. The presentation is wildly more efficient.

The analogy I like for this is **a runner with a colored bib**. Imagine a long-distance race. Hundreds of runners, all carrying different colored bibs — red, green, yellow, blue. The finish line has an observer with a camera. As each runner crosses, the camera records the color of the bib and the time of crossing. By the end of the race, you have a list: at minute one, a blue runner crossed. At minute one-point-five, a red runner crossed. At minute two, a green runner crossed. And so on. You've read out a string of colors in time order. That string of colors, in Sanger sequencing, _is_ the sequence. Each color is a base; each finishing time corresponds to a position in the sequence.

The chemistry to make this work was nontrivial. The fluorescent dyes have to be attached to the ddNTPs without interfering with the polymerase's ability to incorporate them — and polymerase, which has evolved over billions of years to discriminate against unnatural nucleotides, doesn't always cooperate. The early dye-terminator chemistry was finicky, and you'd see uneven peak heights — fragments terminated by one particular base would consistently be brighter or dimmer than the others, which made the reads harder to call accurately at low signal. Applied Biosystems' big commercial breakthrough was a chemistry called **BigDye terminators**, introduced in the late 1990s, which used a clever two-piece dye system — a donor dye and an acceptor dye linked by a spacer, exchanging energy via fluorescence resonance energy transfer — that gave much more even peak heights and much brighter signal across all four bases. BigDye is the chemistry that almost all modern Sanger sequencing still uses. If you send DNA to a Sanger sequencing core in 2026, the reaction in the back room is almost certainly running BigDye terminators on an ABI machine.

\[Pause.\]

And there's a parallel innovation worth naming here. The original Sanger method also required separately labeling the _primer_ with radioactivity or fluorescence. In the four-color dye-terminator version, the label is on the ddNTP itself, so the primer is unmodified — which means you can use any primer you want, off the shelf, without custom labeling. That simplified the workflow enormously. You design a primer, order it from a synthesis company for a few dollars, mix it with your template and the BigDye reaction mix, and you're ready to go. The whole front-end of the sequencing experiment became trivial.

So by the late 1990s, Sanger sequencing had transformed from a four-tube radioactive slab-gel artisanal process into a one-tube fluorescent reaction that could be loaded into a machine and forgotten about. The reaction mix went in; a chromatogram — that's the four-colored peak trace — came out a few hours later. The human role had shrunk to designing the primer and interpreting the chromatogram. The actual sequence reading was machine work.

But to fully realize that automation, you needed one more piece of engineering: a way to run the fragment separation itself inside the machine, without slab gels, without manual loading, without anyone touching it. That's capillary electrophoresis, and that's the next segment.

---

## SEGMENT 7 — Capillary electrophoresis

So we have, by the mid-1990s, one-tube fluorescent Sanger chemistry. The reaction in a single tube gives you a population of fragments, each terminated by a colored ddNTP. The next problem is: how do you separate that population by length, fast, reproducibly, with the laser detector built into the machine? And the answer that Applied Biosystems and a few competing instrument makers landed on is **capillary electrophoresis**.

Let me back up and explain why this was such a big deal, because if you've only ever worked with the modern instruments, the contribution of the capillary may not be obvious.

The original Sanger gels were **slab gels**. A flat rectangular plate of polyacrylamide, maybe thirty centimeters tall, half a centimeter thick, with a comb at the top that formed wells for loading samples. You poured the gel between two glass plates, let it polymerize for an hour, loaded your sample into a well at the top, applied a voltage across it, and waited. The DNA migrated downward through the gel toward the positive electrode. Smaller fragments moved faster, larger fragments slower, and after a few hours the fragments separated into bands distributed down the length of the gel. To read the fragments out, you either exposed an X-ray film over the gel (old radioactive version) or you scanned a laser across the bottom of the gel and recorded the fluorescence as fragments migrated past (early automated version, the ABI 370A and 373A).

Slab gels worked, but they were a pain. You had to pour them. You had to load them manually with a pipette. Loading is fiddly — the wells are tiny, the gel is fragile, neighboring lanes can cross-contaminate. You could only run a limited number of samples per gel — maybe 24 or 48 at most. The gel itself took up bench real estate inside the machine. And the throughput per machine, even with automation, capped out at a few hundred reads per day.

\[Pause.\]

Capillary electrophoresis does the same thing — separate DNA fragments by length using an electric field through a polymer matrix — but instead of doing it in a flat slab, it does it inside a **very thin glass tube**. Picture a piece of glass capillary tubing, about thirty centimeters long, with an inner diameter of fifty microns — that's about the thickness of a human hair. You fill the tube with a viscous polymer solution that serves the same sieving function as the polyacrylamide in a slab gel. You dip one end of the capillary into a tiny well containing your sample, you apply a voltage, and the DNA gets pulled into the capillary and migrates down through the polymer toward the detector at the other end. At the detector end, a laser shines through the capillary, the dyes attached to the passing fragments fluoresce, and a photodetector records the color and timing of each pulse of fluorescence.

The advantages over a slab gel are dramatic.

First, much faster heat dissipation. The thin capillary geometry has an enormous surface-to-volume ratio, which means heat from the electrophoresis voltage flows out efficiently into the surrounding air. That means you can run at much higher voltages without melting the gel — which means you get faster separations. A slab gel run might take three or four hours. A capillary run takes about half an hour, sometimes less.

Second, no manual gel loading. The capillary just sips up a sample from a well in a microplate. The plates can be loaded by a robot, the capillaries can be auto-refilled with fresh polymer between runs, and the whole instrument can run unattended for hours, processing plate after plate of samples.

Third, you can run many capillaries in parallel. The flagship instrument of the Human Genome Project era — the **ABI 3700**, and later the **ABI 3730** — had 96 capillaries running side by side, each reading a different sample. That meant 96 sequences per half-hour run, which adds up to several thousand reads per day per machine. Stack a building with these machines and you have a sequencing factory.

\[Pause.\]

The analogy I want you to hold for capillary electrophoresis is **a long thin race track**. The starting line is the loading well. The finish line is the laser detector. The runners — your DNA fragments — line up at the starting block, the voltage gun goes off, and they start migrating down the track. The short fragments are the fast runners; the long fragments are slow. As each fragment crosses the finish line, the laser reads the color of its bib — the color of the ddNTP terminator — and a computer records both the time of crossing and the color. The result, after the longest fragments have finally limped across, is a list of colors in time order: red at 12.3 minutes, green at 12.4 minutes, blue at 12.5 minutes, yellow at 12.6 minutes — and so on, for hundreds of bases. That list of colors, converted to letters, is your sequence.

The output that the machine produces, by the way, is what's called a **chromatogram** — a graph of fluorescence intensity versus time, with one trace for each of the four colors. You see four squiggly lines, mostly flat, but with peaks rising one after another in sequence. Each peak corresponds to a base in your sequence: a tall blue peak followed by a tall green peak followed by a tall red peak means C, then T, then A. We'll spend a whole segment, Segment 12, looking at chromatograms and how to read them. For now, the picture I want you to leave with is: capillary in, electric field on, laser at the far end, four-colored peaks coming out one after the other, sequence reconstructed in real time.

The ABI 3730 — the workhorse capillary instrument that came out around 2002 — is still the workhorse of Sanger sequencing today. Many of the sequencing cores at universities are running 3730s that are fifteen or twenty years old at this point, because the technology was so mature, so reliable, so deeply optimized, that there hasn't been much pressure to replace it. If you send a tube of DNA off for Sanger sequencing tomorrow, you can bet at very good odds that the actual electrophoresis is happening in a 3730. The chemistry is BigDye, the separation is capillary, and the readout is a chromatogram — that's the entire modern Sanger pipeline, essentially unchanged for two decades.

---

## SEGMENT 8 — The Human Genome Project

So now we have, by the late 1990s, a mature, automated, high-throughput sequencing technology. The chemistry is BigDye terminators in one tube. The separation is capillary electrophoresis, 96 lanes at a time. The readout is a digital chromatogram. A single ABI 3700 can produce something like a thousand reads per day. And in 1990, anticipating where this technology was heading, the world's biology funders had launched the most ambitious biology project in history: the **Human Genome Project**.

The goal was to sequence the entire human genome — three billion bases — from end to end, every chromosome, every gene, every regulatory region, every stretch of repetitive junk in between. The project was budgeted at three billion dollars. The timeline was fifteen years. It was an open international consortium, with major labs at the Sanger Centre in Cambridge UK (named, of course, after the man himself), the Broad and MIT in Boston, the Baylor College of Medicine in Houston, Washington University in St. Louis, and others around the world. And it ran, almost entirely, on Sanger sequencing.

\[Pause.\]

Let me give you some concrete numbers, because the scale of this project tells you both how powerful Sanger had become by then and how much pure brute force it took to get a human genome done with it.

Three billion bases of sequence. Each Sanger read is roughly 700 to 800 bases. So at one read per genome position, you'd need about four million reads to cover the genome once. But for accuracy, you need every position covered by multiple independent reads — typically eight to ten times coverage was the working standard, called **eightfold coverage**. So that's something like thirty to forty million reads, total. At a thousand reads per machine per day, that's thirty to forty thousand machine-days. Spread across hundreds of instruments running 24/7 in big factories at the major centers, that's a few years of solid sequencing. Add the time required for sample preparation, the cloning of every chunk into a vector, the physical mapping, the data assembly, the quality control, and the gap-closing — and you get to thirteen years from project start to project finish.

The first draft of the human genome was published in February 2001 — actually two drafts, one from the public consortium and one from Celera Genomics, the private company run by Craig Venter that had been racing the consortium for the prize. The "complete" genome — finished, gap-closed, error-corrected to a high standard — was published in 2003, exactly fifty years after Watson and Crick had described the double helix. Three billion dollars, thirteen years, mostly Sanger sequencing on capillary instruments. That was the cost of the first human genome.

\[Pause.\]

Now I want to make a couple of points about this that are easy to miss if you weren't around at the time.

First, the Human Genome Project was a triumph of engineering, not just of biology. The technology that made it possible was the industrialization of Sanger sequencing — the moving of an artisanal benchtop technique into a factory format, with robot-loaded plates, capillary sequencers running around the clock, climate-controlled rooms full of identical machines, software pipelines that automatically called bases from chromatograms and assembled reads into contigs. The biology — the chemistry — hadn't fundamentally changed since 1977. What had changed was the scale of execution. The Genome Project was Sanger sequencing's apotheosis: the moment when this technique, scaled up to factory size, completed the largest piece of biological data production in history.

Second — and this is where things get interesting — even at full industrial scale, Sanger sequencing was straining. Three billion dollars to sequence one human is _enormous_. If we wanted to sequence the next person, it would still cost something close to that. Sanger had taken biology as far as it could go in terms of throughput per dollar. To get to a world where you could sequence a person's genome for a thousand dollars — which is roughly where we are today — you needed a fundamentally different technology, not just more capillary machines. That's the door that next-generation sequencing walked through, and we'll talk about why in Segment 9.

But it's worth pausing to say: the very fact that we now have cheap NGS, and that an Illumina machine can sequence a human genome for a few hundred dollars in a day, is _because_ the Human Genome Project happened. The genome that NGS reads are mapped back to — the **reference genome** that every modern sequencing project uses as its backbone — was made by Sanger sequencing during the Genome Project. Without that reference, all those short Illumina reads would be impossible to assemble into anything meaningful. So in a real sense, modern sequencing stands on Sanger's shoulders, even though it doesn't use his chemistry. The reference genome is Sanger's last and greatest gift to the field.

\[Pause.\]

There's a third point I want to make, and it's a sociological one. The Human Genome Project created a workforce. It created a generation of researchers who knew how to think at the scale of whole genomes, how to manage massive sequencing pipelines, how to write software that could handle billions of bases of data, how to interpret variation across populations. When the technology shifted to NGS in the mid-2000s, that workforce was ready. The factories that had been built for the Genome Project just retooled for the new machines. The Sanger Centre still exists — it's now the Wellcome Sanger Institute — and it's still one of the world's biggest sequencing centers, running Illumina and Oxford Nanopore now, but using all the infrastructure and human expertise built up during the Sanger era. The technology moved on; the institutions persisted.

So the headline for this segment: the Human Genome Project was the high-water mark of Sanger sequencing as a primary technology. Three billion bases, three billion dollars, thirteen years, mostly with the chain-termination method. The reference genome it produced is still the foundation that every modern sequencing platform builds on. And the moment the project completed, around 2003, was also the moment when the limits of Sanger became impossible to ignore — and the search for a replacement began in earnest.

---

## SEGMENT 9 — Why Sanger reaches a wall

So let's talk about why, despite all its elegance and all its industrial polish, Sanger sequencing eventually hit a wall — and why the next wave of sequencing technologies had to be invented from scratch rather than just by adding more capillary machines.

There are three fundamental limits to Sanger that you can't engineer your way past, no matter how clever your chemistry. Let me take them in order.

First: **read length**. A single Sanger reaction can read, at best, about 800 to 1000 bases. Most production runs are more like 500 to 700. Why is that the limit?

It comes down to the basic physics of the chain-termination reaction. Remember, the sequence is read by separating fragments of different lengths in a capillary, and the longer fragments take longer to migrate. As the fragments get longer, the difference in migration time between, say, a 900-base fragment and a 901-base fragment gets smaller and smaller — they're nearly the same size relative to each other, and the resolving power of the gel matrix gets worse. The peaks start to merge. You can't tell which one came first.

There's also the issue of signal. The longer the fragment, the rarer it is — because the ddNTP termination is a probabilistic event, and the chance of any given polymerase getting all the way to position 1000 without being terminated earlier is small. So the long fragments are sparse, the peaks are dim, and they get drowned out by noise as you go further.

And there's also polymerase processivity. The polymerases used in Sanger sequencing are good — modified versions of T7 DNA polymerase, optimized for ddNTP incorporation — but they're not infinite. They occasionally fall off the template, especially in regions of unusual secondary structure or repetitive sequence. The longer the read, the higher the chance the polymerase has dropped off somewhere in the middle.

Add it all up and you get a hard ceiling around 800 to 1000 bases. You can't push it much further with the chemistry as it exists. And for a three-billion-base genome, 800-base reads is a lot of reads. Thirty to forty million of them, as we said.

\[Pause.\]

Second: **throughput per dollar**. Each Sanger read costs something like a few dollars all-in — chemistry, primer, machine time, technician time, the per-reaction cost of the capillary instrument and its consumables. Modern Sanger costs have come down with time, but they're still in the range of $5 to $10 per read at most academic core facilities. So a human genome — forty million reads at five dollars each — would cost two hundred million dollars in raw sequencing alone, even with all the modern Sanger infrastructure. That is wildly more expensive than what NGS does. An Illumina NovaSeq, in 2026, can sequence a whole human genome at thirty-fold coverage for a few hundred dollars in consumables. That is a six-orders-of-magnitude improvement in cost per genome. Sanger simply can't get there. The fundamental cost per base of running an enzymatic reaction in a capillary, with manual sample handling at the front end, doesn't scale below a certain floor.

Third: **parallelism**. A capillary instrument runs 96 reactions at a time, and a single run takes about half an hour. That's two hundred reactions per hour per machine, or a few thousand per day. NGS, by contrast, runs _billions_ of reactions in parallel on a single chip. The Illumina flow cell is a small piece of glass, the size of a microscope slide, with maybe a billion DNA molecules attached to its surface, each being sequenced simultaneously by imaging cycles. The whole flow cell takes a day or two to run; the output is a few hundred billion bases of sequence. The factor of difference between Sanger and NGS in raw parallelism is something like seven or eight orders of magnitude. There is no way to parallelize Sanger to compete; you would need millions of capillaries, each loaded individually, each with its own chemistry tube — the physical infrastructure just doesn't make sense.

\[Pause.\]

So Sanger reaches a wall on read length (around 800-1000 bases), on cost per base (way too expensive for whole genomes), and on parallelism (can't run more than 96 things at once per machine). NGS broke through all three walls simultaneously, by switching to a totally different paradigm — instead of generating a population of length-truncated fragments and separating them by size, NGS reads each base of a single DNA molecule in place by cycling chemistry across an imaging surface. It traded off read length (early NGS reads were only 50-100 bases, much shorter than Sanger) for massive parallelism. The deal was: short reads, but billions of them at once. That trade unlocked the entire modern genomics revolution.

But here's the thing — and this is the part that matters most for the second half of this lecture — **Sanger didn't disappear**. It got displaced from the high-throughput, whole-genome end of the market, where NGS owned it. But for a whole class of jobs at the low-throughput, high-accuracy end, Sanger is still the best tool we have. We're going to spend the second hour of this lecture on what those jobs are, why Sanger is still right for them, how the technique actually gets used in modern labs day to day, and what the future of this old technology looks like in a world where everything else has moved on.

So let's take a break.

\[BREAK\]

---

\[Resume after break.\]

Welcome back. In the first hour we built up the chemistry of Sanger sequencing from the chain-termination idea through the four-color dye terminator chemistry, the capillary instruments, the Human Genome Project, and the limits that eventually forced the field to move beyond Sanger for large-scale work. In this second hour, we'll spend our time on how Sanger is actually used today, in real labs, for real problems — because despite the rise of NGS, this technique is alive and well, and learning to use it competently is a basic skill for any working molecular biologist. We'll cover the modern workflow, how to read chromatograms, the clinical uses, the microbiology applications, accuracy comparisons with NGS, the economics, the rare attempts to push read length further, and finally what Sanger's legacy means for sequencing in general. Let's go.

---

## SEGMENT 10 — Sanger today

So if Sanger is no longer the technique you'd reach for to sequence a whole genome — and it isn't — what is it the right tool for? Let me give you the working answer that any practicing molecular biologist would give you in 2026.

Sanger sequencing today is the technique you use when you need to read **a small, specific piece of DNA**, with **high accuracy**, at **low cost per sample**, and you don't need to read very many samples. That's the niche. And it turns out to be a huge and important niche, because the daily work of most molecular biology labs involves exactly that kind of question.

Let me give you concrete examples.

**Verifying a cloned construct.** You spent two weeks building a plasmid in the lab — cutting and pasting your gene of interest into a vector, ligating it together, transforming it into bacteria, picking colonies. Before you use that plasmid for anything, you want to confirm that the sequence is correct — that the gene is in the right orientation, that the junctions are clean, that no errors crept in during the cloning. The standard quality-control move is to send the plasmid for Sanger sequencing with a couple of primers that flank the insert. You get back a chromatogram for each primer, you align it to the expected sequence, and you confirm that everything is as designed. Total time: overnight. Total cost: maybe ten dollars per primer reaction. This is the bread and butter of every cloning lab in the world, and it has been since the 1990s.

**Confirming a CRISPR edit.** You designed a guide RNA to target a specific site in a gene, you delivered it to your cells along with Cas9, and the cells should now have a mutation at that site — either a small insertion or deletion, or a precise edit if you supplied a repair template. To confirm that the edit happened, you PCR-amplify the targeted region from the edited cells and send the PCR product for Sanger sequencing. The chromatogram tells you what's at that site. If you see a clean single sequence matching your intended edit, you have a successful edit. If you see overlapping double peaks starting at the cut site, you've got a heterozygous edit or a mixture of edited and unedited cells. If you see no change, the edit didn't take. Cheap, fast, definitive. Almost every CRISPR validation in the world uses Sanger.

**Validating a single variant.** A patient comes into a clinical lab with a suspected genetic disease. Whole-exome or whole-genome sequencing on NGS has flagged a candidate variant — a single base change in a particular gene, possibly disease-causing. Before reporting that variant to the patient's doctor, the clinical lab typically confirms it by Sanger sequencing the relevant region from the patient's DNA. NGS has, despite its accuracy improvements, a small but real false-positive rate at single-base resolution, and Sanger — being a fundamentally different chemistry with different failure modes — provides an independent confirmation. The clinical standard, in many labs and many jurisdictions, is "NGS finds it, Sanger confirms it." Sanger has the role of the trusted second opinion.

**Sequencing a small region from many samples.** You're a microbial ecologist studying the bacterial diversity in soil samples. You PCR-amplify the 16S ribosomal RNA gene — a roughly 1500-base marker gene that's standard for bacterial identification — from each sample, clone it, pick colonies, and Sanger-sequence each colony. Each read gives you the identity of one bacterium in your sample. You can get reasonable diversity profiles from a few hundred Sanger reads per sample. We'll come back to this in detail in Segment 14.

\[Pause.\]

The unifying logic of all these uses is: **the unit of interest is small (a few hundred to a thousand bases), the number of samples is modest (one to a few hundred), the accuracy required is high, and you need the answer in a day or two with minimal infrastructure.**

NGS, by contrast, makes sense when the unit of interest is huge (whole genomes, transcriptomes, metagenomes) and the cost per base needs to be at the absolute floor. If you've only got one little region you care about, paying to run a whole Illumina lane for it is overkill — it costs more, takes longer to get the data processed, and produces vastly more data than you need. The fixed costs of running an NGS lane are high; the marginal cost per read is low. The opposite is true of Sanger: low fixed cost, higher marginal cost per read. Sanger wins at low volume; NGS wins at high volume.

There's a useful analogy here. **Sanger is the postcard. NGS is the freight container.** If you want to send one personal note to one friend, you write a postcard, you put a stamp on it, you drop it in the mail. Cheap, fast, one-to-one. If you want to ship ten thousand identical packages across the Pacific, you load a freight container onto a ship. Per-package cost is tiny, but you'd be insane to use a freight container for a single postcard. The fixed cost of loading the container, sailing the ship, unloading at the dock, dwarfs whatever you're moving. Match the technology to the volume of the job. That's why both Sanger and NGS coexist, and probably will for decades to come.

---

## SEGMENT 11 — The Sanger workflow in a modern lab

Let me walk you through, step by step, what it actually looks like when a researcher in a modern lab uses Sanger sequencing. This will give you a concrete picture of the technique as a working tool, and it'll set up the chromatogram-reading we'll do in the next segment.

Step one: **template preparation**. You need clean DNA, and a lot of it relative to what NGS needs. For a Sanger reaction, you typically want somewhere between 50 nanograms and 500 nanograms of high-quality double-stranded DNA per reaction — that's a lot more than NGS's nanogram-or-less requirements, but it's trivial to obtain for most templates. The two most common template types are plasmids (you mini-prep a few micrograms from an overnight culture) and PCR products (you amplify your region of interest, then clean up the PCR with a column or enzymatic treatment to remove leftover primers and dNTPs). The template needs to be reasonably pure — leftover salts, ethanol, primers, or proteins can all interfere with the sequencing reaction or the capillary run.

Step two: **primer design**. Sanger sequencing requires a primer to give polymerase a place to start. The primer is a short single-stranded DNA, usually 18 to 25 bases long, complementary to a region on your template just upstream of the sequence you want to read. If you're sequencing a plasmid, you typically use a primer that anneals to a known vector sequence — every standard cloning vector has its sequencing primer sites built in, and the most common ones (M13 forward, M13 reverse, T7, T3, SP6) are sold by every primer vendor as pre-made standard products. If you're sequencing a PCR product, you can often just reuse one of the PCR primers as your sequencing primer. If you need a custom primer for an unusual region, you design one to be 18-25 bases, with a melting temperature around 55-60°C, balanced GC content, no hairpins, no primer-dimer self-complementarity. There are free online primer design tools that do this for you.

The primer is critically important because the first 15-40 bases of any Sanger read are generally garbage — the chromatogram is noisy right at the start, before the polymerase has settled into a steady cadence and before the shortest fragments have separated cleanly. So you design your primer to be 40 to 50 bases upstream of the region you actually care about, so that by the time the chromatogram becomes readable, you're past the noise and into your region of interest.

\[Pause.\]

Step three: **the sequencing reaction itself**. This is what your sequencing core does in the back room, or what you do at the bench if your lab runs its own machine. You mix template, primer, and BigDye terminator mix (which contains the polymerase, the buffer, the four normal dNTPs, and the four colored ddNTPs) in a small PCR tube, total volume around 10-20 microliters. You put the tube in a thermocycler and run a program that cycles temperature: denature at 96°C to melt the template, anneal at 50-60°C to let the primer bind, extend at 60°C to let the polymerase synthesize. About 25-30 cycles of this. Each cycle generates more terminated fragments, building up the population we talked about in Segment 3. This is sometimes called **cycle sequencing**, because it borrows the temperature cycling logic of PCR — though unlike PCR, it's linear amplification rather than exponential, because only one primer is used per reaction and only one strand is being copied.

Step four: **cleanup**. After cycle sequencing, the reaction contains a lot of unincorporated fluorescent ddNTPs floating around in solution. If you put that directly on the capillary, the unincorporated dyes would create a massive blob of signal at the front of the run and obscure everything. So you clean up the reaction first — typically by ethanol precipitation, a magnetic bead method, or a small spin column — to remove the unincorporated dye terminators while keeping the labeled DNA fragments. The cleaned-up reaction is what gets loaded onto the capillary instrument.

Step five: **capillary electrophoresis**. The capillary machine sips your cleaned-up reaction into a capillary, applies the voltage, separates the fragments by size, reads the colors as they cross the laser detector, and saves the result as a data file — typically an **AB1 file** or a **SCF file**, both standard formats that contain the four-color trace data and the metadata (primer name, instrument run info, etc.). Run time per capillary is about half an hour to an hour, depending on the read length you've requested.

Step six: **base calling and trace inspection**. The instrument's software (or downstream programs like Phred, which is the classic base-calling tool, or any of a dozen modern equivalents) reads the chromatogram and converts the colored peaks into a string of A's, T's, G's, and C's. Each base call comes with a quality score — typically Phred-style, with higher values meaning higher confidence — that estimates the probability the call is wrong. Phred 20 means a 1% chance of error; Phred 30 means 0.1%; Phred 40 means 0.01%. The middle of a good Sanger read is typically Phred 40 or better, which is extraordinarily high accuracy. The ends are lower.

Step seven: **interpretation**. You open the chromatogram in a viewer — common ones are SnapGene, Geneious, ApE, or the free 4Peaks — and you align your read to your expected sequence. You confirm the bases match. You look at any disagreements between read and reference and ask yourself: is that a real difference (a mutation, an edit, a variant), or is it a sequencing artifact? That judgment call is the part of Sanger sequencing that still requires a human, and it's the topic of the next segment.

\[Pause.\]

Total time from sending a sample to getting back a readable chromatogram: typically overnight at most academic sequencing cores, sometimes same-day if you submit in the morning. Total cost: $5 to $15 per reaction, depending on the core's pricing. Total expertise required to read the result: an undergraduate molecular biologist with about half an hour of training can become competent at reading a clean trace.

That's why Sanger persists. The workflow is short, cheap, mature, well-understood, and gives you an answer about a specific small piece of DNA in a day. For the questions it answers, nothing else is as fast and as simple.

---

## SEGMENT 12 — Reading a chromatogram

Okay. Let's actually look at a chromatogram. I want you to be able, by the end of this segment, to pick up a Sanger trace, look at it, and tell me what's going on — what's a clean call, what's a suspicious call, what's an artifact, what's a real biological signal.

A chromatogram is a graph. The x-axis is time, or equivalently fragment length — going from short fragments on the left to long fragments on the right. The y-axis is fluorescence intensity. There are four overlaid traces, one for each dye color: typically green for A, red for T, black or yellow for G, blue for C. (The exact color conventions vary slightly by software, but those are the most common.) As each fragment crosses the detector, you see a peak rise in one of the four colored traces, and then fall back to baseline as the fragment passes. The next fragment causes the next peak. And so on. The sequence of peak colors, left to right, gives you the sequence of bases.

A **clean, healthy** chromatogram has these features. The peaks are tall and sharp. They are roughly evenly spaced. They are roughly equal in height across the four colors — no one color is dramatically dimmer than the others. The baseline between peaks is flat and near zero. There is one peak per position — no secondary peaks under the main one. The first 20-40 positions look noisy or unevenly resolved (that's the dead zone right after the primer), then the trace stabilizes into a beautiful run of evenly spaced bright peaks that you can read off effortlessly, and somewhere out past 700 or 800 bases the peaks start to broaden, lose intensity, and become hard to distinguish — that's the end of the useful read.

You can read a good trace by eye. Each position has one dominant color; you call the base by the color; you write down the sequence. The base-calling software does the same thing, automatically, and assigns a quality score based on how confidently it could pick the dominant color at each position. In the middle of a clean read, the software is essentially never wrong. Where it gets harder is at the ends, in repetitive regions, and at positions of biological complexity — and that's where you, the human, have to look.

\[Pause.\]

Let me walk through the common things you'll see that aren't clean single peaks, and what each one means.

**Double peaks at a single position** — that is, two different colored peaks of comparable height stacked on top of each other at the same point in the trace. This means the template at that position is a mixture of two different bases. The classic biological interpretation is **heterozygosity**: you have a diploid template (say, human genomic DNA) where the two chromosomes have different bases at this position, and Sanger reads both at once. A heterozygous SNP shows up as a double peak. This is, in fact, one of Sanger's superpowers — heterozygosity is visible at a glance — and we'll come back to this in Segments 13 and 15.

**Double peaks starting at one position and continuing for the rest of the read.** This usually means your template is a mixture of two sequences that align cleanly up to a certain point and then diverge — most commonly because you've got a CRISPR-edited population where some cells have an indel at the cut site and some don't. The trace reads clean up to the cut site, then becomes a superposition of the edited and unedited sequences from the cut site onwards. This is so common, in modern CRISPR labs, that there are specific software tools — TIDE, ICE, Synthego ICE — that quantify the editing efficiency by deconvolving the mixed-trace region. They take your Sanger trace from edited cells, compare it to a Sanger trace from unedited cells, and back out the percentage of cells that have each edit type. It's a fast, cheap, semi-quantitative way to measure CRISPR efficiency without going to NGS.

**A peak that's substantially shorter than its neighbors.** This usually doesn't indicate a problem — peak heights are inherently variable, particularly because the BigDye chemistry has slightly different incorporation efficiencies for the four bases, and the local sequence context matters. As long as the dominant color at that position is clearly higher than the other three colors, the base call is usually fine. The software's quality score will reflect the lower confidence.

**A long stretch where every peak looks the same color, then suddenly things go to garbage.** This is the classic signature of a **homopolymer run** — a stretch of the same base, like AAAAAAA. Sanger handles short homopolymer runs (up to maybe 8 or 10) reasonably well, but at longer runs the polymerase can slip during synthesis, generating fragments that are off by one or two bases in the homopolymer length. The trace downstream of a long homopolymer becomes a confused superposition of the slipped and unslipped products. If your sequence has a 15-base poly-A tract, expect the trace after the tract to be unusable. This is a well-known limitation; it bites people every once in a while.

**A gradual decay in peak height and resolution starting around base 600-800.** This is just the end of the useful read length. The polymerase has gotten as far as it can; the long fragments are too rare and too poorly resolved. You'll see the peaks broaden, the baseline rise, the quality scores drop. The conventional rule is to trust the trace from about base 30 to about base 700 as your "good" region, and treat anything outside that with skepticism.

**Sudden noise spikes or huge baseline jumps.** Usually instrument artifacts — a bubble in the capillary, a salt crystal in the sample, a brief problem with the laser. These typically affect one or two positions and are pretty obviously not real biology. The base-caller usually flags them with low quality scores.

\[Pause.\]

The mental model I want you to have for chromatogram reading is this. Sanger gives you a **direct, visual representation of the underlying sequence as a one-dimensional plot of colored peaks.** Most of the time, the bases are obvious — the peaks are clean, the colors are clear, the call is unambiguous. The interesting cases are the deviations: double peaks (heterozygosity or mixtures), homopolymer slippage, the decay at the ends. Learning to read those deviations — to recognize what they mean biologically — is what separates a Sanger user who just reads off the called sequence from one who actually understands what their trace is telling them.

And one more practical note: **always look at the trace**. Don't just trust the base-called text file. The text says "GATC" because the software made a call; the trace tells you whether to trust that call. In the rare but important cases where the trace disagrees with what the software wrote, the trace is right, and the software is wrong. Build the habit of opening the AB1 file in a viewer and scrolling through it. It takes thirty seconds, and it has saved many labs from publishing papers based on miscalled bases. A bad call in the middle of a clean trace is hugely suspicious; a borderline call in a noisy region you should treat with caution. The trace is the truth; the text file is an interpretation. Always go to the source.

---

## SEGMENT 13 — The Sanger trace as a clinical document

Now let me sharpen the chromatogram discussion by walking into a clinical context — because in a diagnostic lab, the Sanger trace is not just a research artifact, it's a legal document that gets reported to a patient's doctor, and the standards for reading it are correspondingly high.

The setup: a patient with a suspected inherited disease comes into a clinical genetics service. Maybe a family history of breast cancer; we're checking BRCA1 and BRCA2. Maybe a child with intellectual disability; we're looking at the genes on a developmental disorder panel. The lab takes blood, extracts DNA, and either (in the modern workflow) runs a targeted gene panel by NGS first, or (in some labs and for some specific genes) directly Sanger-sequences the genes of interest. Either way, Sanger plays a role: either as the primary sequencing method, or as the confirmatory step after an NGS finding.

The pattern of peaks the lab is looking for tells specific biological stories. Let me walk you through three of them, because they cover most of what clinical Sanger interpretation actually involves.

\[Pause.\]

First: **heterozygous SNPs**. A heterozygous variant at a single base — say, the patient has one copy of the reference C and one copy of a variant T at a particular position — shows up on Sanger as a clean double peak at that position. Half the template molecules give a C peak; the other half give a T peak. The two peaks are roughly equal in height, sitting side by side at the same x-axis position. The base-caller will usually call this position with a IUPAC ambiguity code — Y, in this case, for "C or T" — and the trace will be unambiguous. This is the gold standard heterozygous-variant signature in Sanger. NGS data, by contrast, would show this same variant as a pile of reads where roughly 50% have C and 50% have T at this position — that's the same information, but it's presented as a statistical summary across many independent observations rather than as a single visual readout. The Sanger trace is, in a real sense, more intuitive: you can _see_ the heterozygosity in the shape of the peak. It's a beautiful display of a beautiful piece of biology.

Second: **allele dropout**. This is a failure mode you have to know about. Allele dropout happens when, for some reason, one of the two chromosomal copies isn't amplified or sequenced as efficiently as the other — maybe there's a SNP under the primer that prevents the primer from annealing to one allele, so PCR only amplifies the other allele. The Sanger trace then shows a clean single peak at the variant position, looking homozygous, even though the patient is actually heterozygous. You miss the variant entirely. This is a real and documented problem in clinical sequencing, and the standard mitigation is to use two independent primer sets and confirm that they give consistent results, or to combine Sanger with another technique (like NGS) that has different amplification biases. Allele dropout is the silent killer of clinical Sanger interpretation, because the trace looks beautiful — it just happens to be reporting only half the truth.

Third: **deletion signatures**. If the patient has a heterozygous deletion of a few bases at a particular position, the Sanger trace shows something distinctive. Up to the deletion site, the trace is clean. From the deletion site onwards, the trace becomes a superposition of two reading frames — the reference sequence and the deleted sequence — offset by however many bases were deleted. So instead of clean single peaks, you see overlapping double peaks at every position downstream of the deletion. This is the same pattern you see with mixed-population CRISPR edits, for exactly the same reason: you're reading two sequences simultaneously, and they're offset. The presence of this signature, in a clinical context, immediately tells you there's an indel — and you can often work out the size of the indel by looking at where the trace "re-syncs" with the reference, if you know the sequence well enough. Software tools like Mutation Surveyor and Indigo and CRISP-ID are designed to deconvolve these mixed traces and report the underlying indels.

\[Pause.\]

The point I want to make in this segment is that **the Sanger trace, properly read, is an extraordinarily rich source of clinical information.** It tells you not just what bases are there, but in what proportions, and in what configuration. The heterozygous double peak, the allele dropout, the deletion signature — these are all directly readable from the trace by a trained eye. Clinical labs employ certified molecular pathologists whose specific job is to interpret these traces, and the interpretation involves a combination of trace reading, comparison to the reference, knowledge of the gene's variant landscape, and clinical context.

In a world where NGS dominates the production of raw variant data, Sanger remains the technique that lets you _look_ at a specific position with your own eyes. It's the diagnostic equivalent of going from a CT scan back to the original X-ray to confirm a finding — you go back to the simpler, more direct technique because you can see what's there without trusting a complex pipeline to summarize it for you. The clinical community trusts Sanger because the chain of inference is short: the trace shows you the bases, the bases tell you the genotype, the genotype tells you the diagnosis. Nothing is hidden in software.

---

## SEGMENT 14 — Sanger for microbiology and pathology

Let me spend some time on another huge domain where Sanger sequencing remains absolutely central: microbiology, particularly the identification of bacteria, fungi, and other microorganisms.

The fundamental tool here is a concept called **marker gene sequencing**, sometimes called **amplicon sequencing**. The idea is that you can identify what species an organism belongs to by sequencing a single specific gene — a gene that's present in every member of the group, but whose sequence varies just enough between species to give each species a unique signature. You amplify that gene by PCR, sequence the PCR product by Sanger, and look up the resulting sequence in a reference database. The hit you get back is the species ID.

The most famous marker gene, by far, is the **16S ribosomal RNA gene** in bacteria. The 16S rRNA gene is about 1500 base pairs long, present in every bacterium, and has a structure that mixes highly conserved regions (which let you design universal primers that work on every bacterial species) with variable regions (which provide the species-specific signature). PCR-amplify the 16S gene from an unknown bacterium using universal primers, Sanger-sequence the amplicon with a few internal primers covering its length, blast the resulting sequence against the **SILVA** or **GreenGenes** or **NCBI 16S** databases, and you get a species ID — or at least a genus ID — within hours. This is the standard technique used in clinical microbiology labs to identify pathogenic bacteria, in food safety labs to identify contaminants, in environmental labs to characterize microbial communities, in research labs to identify whatever bacterium turned up in some unusual sample.

For fungi, the equivalent marker is the **ITS** region — the internal transcribed spacer between the ribosomal RNA genes. Universal fungal primers amplify the ITS region, Sanger sequences it, and a database lookup gives you the species. For other groups there are other markers: the **COI** gene (cytochrome oxidase I) for animals — that's the basis of DNA barcoding programs that identify insects, fish, and other animals from tissue samples. The **rbcL** and **matK** genes for plants.

\[Pause.\]

There's a related concept called **MLST**, multi-locus sequence typing, which is used in clinical microbiology to distinguish strains within a species — say, different lineages of Staphylococcus aureus that might be circulating in a hospital. MLST involves Sanger-sequencing several housekeeping genes (typically seven) from a bacterial isolate and combining the sequences into a strain-specific profile. Each unique combination of allele sequences across the seven genes gets a sequence type number, and the type lets you track strains epidemiologically across hospitals, countries, and years. The Sanger sequencing for MLST is straightforward — seven amplicons per isolate, each a few hundred bases, all readable in a day. The whole MLST infrastructure for the major pathogens was built on Sanger and is still mostly run that way, though NGS-based alternatives are encroaching.

Why does Sanger keep winning these applications even in the age of NGS? Several reasons.

First, the per-sample cost. If a clinical lab gets one positive blood culture and needs to ID the bacterium, paying for a whole NGS run is overkill. A single Sanger reaction on a 16S amplicon, costing $10, gives them the answer.

Second, the turnaround time. A Sanger reaction can be loaded onto a capillary instrument and read out in a few hours. NGS typically takes a day or more, sometimes longer when you factor in batch scheduling and library prep. For clinical workflows where you want the bacterial ID by the end of the same day, Sanger is faster.

Third, the analysis pipeline. Sanger gives you a single read per sample. You blast it against the database. You're done. NGS gives you millions of reads per sample, and the analysis to turn those reads into a species ID — particularly in a mixed sample with multiple organisms — is computationally and methodologically complex. For routine single-organism identification, that complexity is unnecessary.

\[Pause.\]

There's a more recent development in this space worth mentioning: NGS-based 16S sequencing (sometimes called **amplicon NGS**) is now standard for studies of microbial communities — like the gut microbiome — where you need to identify hundreds or thousands of bacterial species simultaneously in a single complex sample. In that context, Sanger can't compete; you'd have to pick and Sanger-sequence each colony individually, and most gut bacteria can't be cultured. NGS-based amplicon sequencing lets you skip the culturing step entirely and read the bacterial diversity of the whole sample in one go. So NGS owns the microbiome end of the market. But for the everyday clinical microbiology question — "I have a pure isolate, what is it?" — Sanger is still standard, and probably will be for a long time. The infrastructure is mature, the cost is low, the turnaround is fast, and the answer is unambiguous.

The unifying point of this segment: Sanger isn't just the workhorse of the molecular biology lab — it's also the workhorse of clinical and environmental microbiology, by way of marker gene sequencing. Whenever the question is "what specific known organism is this," and you have a pure or near-pure sample to work from, Sanger via 16S, ITS, COI, or MLST is the standard answer. The technique is so embedded in the workflows of these fields that it'll take a long time to displace, even as NGS keeps getting cheaper.

---

## SEGMENT 15 — Sanger's accuracy compared to NGS

Let me spend a segment on accuracy, because this is one of those topics where the popular narrative — "NGS is more accurate because you get many reads per position" — is misleading in interesting ways, and the truth is more nuanced.

A single Sanger read is accurate to about 99.99% in the high-quality middle region of the trace — that's Phred 40 or better. That means in a typical 700-base read, you expect maybe one error in the well-resolved region. The errors are non-random: they cluster in homopolymer runs, in regions of unusual secondary structure, and at the ends of the read. But in the main body of a clean trace, Sanger is essentially error-free.

A single NGS read, by contrast, has a per-base error rate of maybe 0.1% to 1% depending on the platform — much higher than Sanger. But NGS makes up for this by reading every position many times. If you have 30 independent NGS reads at a position, you can average them out, demand a consensus, and reach effectively Sanger-level accuracy or better in the aggregate. So in a typical NGS pileup, the per-position accuracy is excellent, even though each individual read is much less accurate than a single Sanger read.

That's the basic statistical story. Now let's get to the nuances.

\[Pause.\]

The first nuance is **heterozygous sites**. At a heterozygous position in a diploid sample, the truth is that 50% of the molecules have one allele and 50% have the other. Sanger reads this as a single double peak — directly, visually, in one read. NGS reads it as a pileup where roughly half the reads at that position carry one allele and half carry the other. In principle, both methods detect the heterozygosity. But in practice, NGS reads have noise. The reads at a position rarely split exactly 50/50; they might be 48/52 or 30/70 due to sampling variation, sequencing errors, mapping bias, or PCR bias. To call a heterozygous variant from NGS reliably, you typically want depth around 20-30x and an allele fraction in some reasonable range — and the noise floor for "is this really a heterozygous variant or just sequencing noise" sits around 5-10% allele fraction in most pipelines.

Sanger, by contrast, can call a heterozygous variant from a _single read_, because the visual signature of two equal-height peaks at the same position is unambiguous. Sanger is, in a real sense, a better single-shot heterozygous variant caller than NGS at depth 30. Where NGS catches up, and surpasses, is in its ability to detect **low-frequency variants** — say, a mutation present in 5% of cells in a tumor sample, where Sanger would just see a hint of a secondary peak buried in the noise. For mosaic variants, subclonal cancer mutations, low-frequency drug resistance mutations in viral populations, NGS is dramatically better. Sanger's detection limit for minor variants is around 15-20% allele fraction; below that, you can't reliably distinguish the secondary peak from baseline noise.

So the comparison is: **Sanger wins at clean heterozygous calls from single reads; NGS wins at low-frequency variants and mass-scale calling.** That's why clinical genetics labs often use both — NGS to scan for variants across hundreds of regions cheaply, Sanger to confirm specific findings unambiguously, especially heterozygous ones.

\[Pause.\]

The second nuance is **systematic error**. Both Sanger and NGS have characteristic places where they get the answer wrong, and the error modes are different — which is actually a good thing, because it means the two methods are independent and can cross-check each other.

Sanger's systematic errors: homopolymer runs (slippage), regions of strong secondary structure (mid-trace dropouts), GC-extreme regions (uneven amplification), the first 30 and last 100 bases of the read (poor signal). If you sequence the same template multiple times with the same primer, you'll get the same errors every time, because the errors are property of the trace, not random fluctuation.

NGS's systematic errors: depend on the platform. Illumina has trouble with homopolymers too (similar reasons), with low-complexity regions, with GC-extreme regions (PCR bias during library prep), with certain quad-base motifs that the chemistry slightly mis-incorporates. Ion Torrent has worse homopolymer issues. PacBio and Nanopore have higher per-base error rates but the errors are more random and average out faster with depth.

The implication is that when Sanger and NGS agree on a result, you can be _very_ confident — they have different error modes and would have to be wrong in the same way, which is extremely rare. When they disagree, both are sometimes right, depending on the specific error context. The discipline in modern molecular biology is to use multiple independent techniques whenever a result really matters.

\[Pause.\]

The summary I want you to take from this segment: **Sanger is not less accurate than NGS — it's accurate in a different way.** A single Sanger read in its good region is more accurate per base than a single NGS read. A pileup of many NGS reads beats a single Sanger read by averaging out noise. Sanger sees heterozygous variants directly in one read; NGS sees low-frequency variants and rare events better with depth. The two methods are complementary, and for the specific question of "is there a particular variant at a particular position in this sample, and am I sure?", many clinical and research workflows combine both — NGS to find, Sanger to confirm. The methods aren't rivals so much as collaborators.

---

## SEGMENT 16 — The economics

Let me put concrete numbers on the cost comparison, because the economics of Sanger versus NGS is what really determines which technology gets used for which job in practice.

A Sanger sequencing reaction at an academic core facility in 2026 costs somewhere between $5 and $15, depending on the institution. That covers the chemistry, the capillary instrument time, the basic data delivery. You submit a tube of DNA with a primer. A day later, you get back a chromatogram. The per-sample turnaround time is usually 24 hours. There is no batch minimum; you can submit a single sample and get a single result. Setup time on your end: maybe ten minutes to set up the reaction, label the tube, fill out the submission form.

An NGS run, by contrast, has significant fixed costs. A single MiSeq run might cost $1500-$2000 in consumables, regardless of how many samples are on it. A NovaSeq run might cost $10,000-$20,000. To bring the per-sample cost down, you have to multiplex many samples on the same run — typical numbers are 96 samples per MiSeq run, or hundreds per NovaSeq. The per-sample cost amortized across a fully-loaded run can be impressively low — maybe $30-$100 per sample for a basic application — but only if you can fill the run.

Library prep adds further cost. Each NGS sample needs to be turned into a sequencing library by a separate biochemical workflow — typically $50-$150 per sample in reagents, plus a day or two of bench time. That cost is per sample regardless of how cheap the run is.

\[Pause.\]

The bottom line is that **Sanger is cheaper than NGS for small jobs**, where "small" means: one to maybe a few hundred samples, each interrogating a region under about 1000 bases. At that scale, Sanger's $10 per sample beats NGS's $50-100 per sample plus the wait for a batched run.

NGS dominates at large scale: thousands of samples, or whole-genome questions, or applications where you need millions of reads per sample (RNA-seq, single-cell, ChIP-seq, etc.). At that scale, NGS's amortized per-base cost is unbeatably low.

The crossover is somewhere around the range where you have, say, 50-100 samples each of which needs a single region sequenced. At that scale, the economics are close to a wash, and the choice often comes down to other factors: how fast you need the answer (Sanger is faster for small batches), how confident you need to be in heterozygous calls (Sanger is more visual), what your local infrastructure looks like (do you have an NGS core nearby?), and so on.

There's also a fascinating long tail of one-off applications where Sanger is just hopelessly cheaper than anything else. Need to verify a single clone? $10 in Sanger. Need to confirm a single CRISPR edit in a single cell line? $10. Need to ID a single bacterium from a blood culture? $10. The marginal cost of one more Sanger reaction is so low that, for these one-shot questions, NGS would have to drop another order of magnitude in price before it could compete.

\[Pause.\]

Conversely, there are applications where Sanger is hopelessly slow regardless of cost. Need to sequence a whole bacterial genome? Sanger would take 5,000 reactions and weeks of work. NGS does it in a single run. Need to characterize the gut microbiome of 100 patients? Sanger via 16S clone libraries is theoretically possible but would take person-years; NGS via 16S amplicon sequencing is a week's work. Need to find rare variants in a tumor sample? Sanger can't see them; NGS with deep sequencing can.

The mental model I want you to leave with: **think of Sanger as the unit-cost-optimized technology for the small-question end of the market, and NGS as the bulk-shipping-optimized technology for the large-question end.** Match the tool to the volume. There's no shame in using a forty-year-old technology for the jobs it's still best at; there's also no excuse for using Sanger when the question is large enough that NGS would do it ten times faster and cheaper. The mature molecular biologist learns to size the question first and pick the tool second.

And one more economic note: NGS keeps getting cheaper. Every year, the per-base cost of NGS drops by some fraction. Sanger's per-sample cost has been roughly flat for fifteen years — the technology is mature, the infrastructure is amortized, there's no driving force to lower the cost much further. So the crossover point keeps shifting in NGS's favor. Twenty years from now, Sanger may have shrunk further into a smaller niche — but I suspect it'll still be there, doing the bread-and-butter clone verifications and edit confirmations, because the workflow is so simple and the per-sample cost is already so low that it's hard to beat for the small stuff. We'll see.

---

## SEGMENT 17 — Long-read Sanger? Pushing the read length envelope

A natural question, given everything we've talked about, is: can Sanger be pushed to longer read lengths? If we could get Sanger to read, say, 3000 or 5000 bases per reaction instead of 800, that would significantly extend its utility — and people have tried.

The short answer is: yes, with effort, you can get Sanger reads out past 1000 bases, sometimes even close to 1200 bases, but it's not really worth it. Let me explain why.

The fundamental limit on Sanger read length is the resolving power of capillary electrophoresis. As fragments get longer, the difference in migration time between adjacent lengths gets smaller and smaller. The relationship is roughly logarithmic: the resolution between two fragments scales as a function of their length ratio, not their absolute size difference. So a 1% size difference between 100-base fragments is easy to resolve; a 0.1% difference between 1000-base fragments is hard; a 0.05% difference between 2000-base fragments is essentially impossible with conventional capillary chemistry.

People have pushed against this limit with longer capillaries, more dilute polymer matrices, lower running voltages, longer run times, and modified BigDye chemistries. Each of these helps a little. With optimization, a really good run on a modern instrument with a long capillary and an extended run protocol can push the useful read length out to perhaps 1100-1200 bases. But you're paying for it: each run takes hours instead of half an hour, the throughput per machine drops, and the chemistry costs more.

\[Pause.\]

And here's the killer fact: if you really need long reads — multi-kilobase reads, tens of kilobases, sometimes hundreds of kilobases — there are entire technologies now that do this natively. **PacBio HiFi sequencing** gives you reads of 15,000 to 25,000 bases each, at Sanger-comparable per-base accuracy. **Oxford Nanopore sequencing** gives you reads that can stretch into the hundreds of thousands of bases, at lower accuracy per read but with massive average length. Both of these technologies are essentially designed to do what Sanger can't: read very long stretches of DNA without breaking them up.

For the applications where long reads matter — assembling complex genomes, resolving structural variants, sequencing through repetitive regions, phasing variants across long distances — PacBio and Nanopore have just eaten that part of the market. Sanger never really competed there, even after the read-length optimization push. The chemistry just doesn't scale that far.

So the answer to "can we make long-read Sanger?" is "we tried, we got an incremental improvement, but the fundamental physics of capillary separation puts a ceiling on it that competing technologies have already blown through by orders of magnitude." Sanger lives comfortably in the 500-900 base range. That's its sweet spot. Trying to stretch it further is fighting against the physics, and the other technologies do that battle better.

\[Pause.\]

There is a related question that's more interesting: can we make Sanger _better_ in its existing range — same read length, but cleaner traces, higher accuracy, better automation, lower cost? And here there has been steady incremental progress over the years. The BigDye chemistry has gone through multiple generations, each with slightly more even peak heights and slightly cleaner signal. The capillary instruments have gotten more reliable and easier to maintain. The base-calling software has improved at handling the tricky positions. Each of these improvements has been small in isolation, but cumulatively, a modern Sanger trace from a 2026 ABI 3730 with current chemistry is meaningfully better than a Sanger trace from a 2005 ABI 3730 with first-generation BigDye. The wall, though, is still in roughly the same place — about 800 bases of usable sequence per read.

So my honest assessment is: Sanger's read length has plateaued, and it's not going much higher. The technology will continue to incrementally improve in accuracy and cost, but the read-length frontier is owned by other platforms, and Sanger will continue to occupy its current niche — the short, accurate, cheap, single-sample workflow. That niche isn't going anywhere, but it isn't growing either.

---

## SEGMENT 18 — The legacy

Let me close this lecture by zooming out and asking: what has Sanger sequencing taught us about sequencing in general, and how do its ideas live on in every modern platform?

Here's my answer, and it's structured around three deep ideas that Sanger gave the field, all of which persist in modern sequencing even when the chemistry has been completely replaced.

\[Pause.\]

**Idea one: sequencing is reading a population, not a molecule.** Sanger's central insight was that you can't directly read a single DNA molecule with 1970s technology — but you can read a population of molecules, each broken at a different position, and reconstruct the sequence from the length distribution. That move — from single-molecule to population-level inference — was the conceptual unlock.

Modern Illumina sequencing does the same thing, but in a different way. Each spot on an Illumina flow cell is a clonal cluster — a few hundred to a few thousand identical copies of the same DNA molecule, all sequenced together, with the chemistry detecting the consensus signal across the cluster. You're not reading one molecule; you're reading a population of identical molecules, just like in Sanger you're reading a population of differently-truncated molecules. The principle of "amplify to a population, read the population, average out the noise" persists. Even single-molecule sequencing platforms like PacBio HiFi work by reading the same molecule many times in a circular template and averaging — the population is now a population of repeated reads of the same molecule, but the averaging logic is identical.

**Idea two: sequencing is fundamentally a chemistry-to-signal transduction problem, and the chemistry has to encode position into a detectable physical event.** Sanger encoded position into fragment length, and used capillary separation to read out length as a time-domain signal. Illumina encodes position into successive cycles of single-base extension, and uses imaging to read out each cycle's incorporated base. Nanopore encodes position into the changing ionic current as a DNA strand threads through a pore. Different chemistries, different signals, but the architecture is the same: design a chemistry where the bases in sequence produce a temporally-ordered signal, and build an instrument to record that signal. That architecture was first demonstrated in Sanger. Every modern platform is a variant on the same theme.

**Idea three: base-by-base accuracy at small scale enables every downstream interpretation at large scale.** This is the part that often gets forgotten in the NGS hype. Every modern sequencing run produces variants that need to be confirmed. Every reference genome was built by piecing together accurate Sanger reads from clone libraries. Every clinical NGS report cross-checks ambiguous calls against Sanger. The high accuracy of Sanger at the individual-read level set the bar that all later technologies have to meet, in aggregate, to be useful. NGS gets to that bar by averaging across many less-accurate reads; PacBio HiFi gets there by averaging across many passes of the same molecule; Nanopore is still climbing toward it. But the standard they're climbing toward is the standard Sanger established in 1977: a clean, unambiguous, base-by-base read that you can trust.

\[Pause.\]

There's also a more subtle legacy I want to mention, which is **the institutional and intellectual infrastructure** Sanger created. The first reference genomes — bacteriophage φX174, then larger viruses, then bacteria, then yeast, then the human genome — were all Sanger products. Those reference genomes are the maps that all modern sequencing reads are aligned against. Without them, you'd have nothing to map your billions of short Illumina reads to. The reference for every species in the public databases — every plant, every microbe, every model organism — was bootstrapped by Sanger. NGS is a fantastic tool for re-sequencing things relative to a reference; it's much harder to use de novo to build a reference from scratch, especially for complex genomes with lots of repeats. Sanger built the maps; NGS uses them. We're still living in a world built on top of Sanger reference sequences, even though most of the new data being generated is NGS.

The intellectual infrastructure is similar. The tools we use to think about sequence — sequence alignment, multiple sequence alignment, phylogenetics, sequence variant annotation, all the bioinformatics that sits on top of raw reads — was all developed during the Sanger era, on Sanger data. When NGS arrived, the bioinformatics community didn't reinvent these tools; they adapted them to the new data types. The conceptual frameworks of sequence biology were forged in the Sanger era, and they've persisted across the platform shift largely unchanged.

\[Pause.\]

So when I tell you that Sanger sequencing is the foundation of modern biology, I'm not being romantic — I'm being literal. The reference genomes, the variant calling pipelines, the clinical confirmation workflows, the microbial identification standards, the CRISPR validation methods, the bioinformatics frameworks — all of these have Sanger sequencing somewhere in their lineage. The technique that Fred Sanger published in 1977 didn't just give us a way to read DNA. It gave us the entire vocabulary, the entire conceptual scaffolding, on which we built molecular biology as we know it.

And here we are, almost fifty years later, still using it. In the academic core facility down the hall, an ABI 3730 is humming away right now, running BigDye reactions on capillaries, producing chromatograms that researchers will use to verify their constructs and validate their edits. The chemistry is unchanged in any deep sense from what Sanger published. The Nobel-winning insight from 1977 is still doing work, still indispensable, still elegant.

If you walk out of here today with one image to hold onto, let it be this. **A pinch of saboteur nucleotides in a tube, the random truncations they produce, the ladder of every possible incomplete copy, sorted by length, read by color** — that's the trick. That's the whole game. Fred Sanger figured it out in a basement lab in Cambridge, sitting at a bench, working on the same kind of problem he'd been thinking about for thirty years. And it changed the world.

That's Sanger sequencing. Thank you. We've got a few minutes left — let's take questions.

\[Pause.\]

---

## APPENDIX

**Glossary of key terms.**

- **Sanger sequencing** — DNA sequencing method based on chain termination by dideoxynucleotides; published by Frederick Sanger in 1977.
- **Chain termination** — the central trick: incorporating a ddNTP into a growing DNA strand stops further extension, producing a terminated fragment of defined length.
- **ddNTP (dideoxynucleotide)** — a nucleotide analog missing the 3'-hydroxyl group, which prevents addition of the next base; the "saboteur" nucleotide.
- **dNTP (deoxynucleotide)** — the normal building block of DNA: dATP, dTTP, dGTP, dCTP.
- **Primer** — a short single-stranded DNA, usually 18-25 bases, complementary to the template, providing a starting point for polymerase.
- **Polymerase** — the enzyme that copies DNA by adding nucleotides to a growing strand; in Sanger, typically a modified T7 polymerase optimized for ddNTP incorporation.
- **BigDye terminators** — the dominant commercial chemistry for fluorescent Sanger sequencing, using paired donor-acceptor dye systems for even peak heights.
- **Capillary electrophoresis** — separation of DNA fragments by size in a thin polymer-filled capillary under an electric field; the dominant Sanger readout platform since the late 1990s.
- **Chromatogram** — the output of a Sanger sequencing run: four overlaid colored traces showing fluorescence intensity over time, one per base.
- **Phred score** — a quality score assigned to each base call by the base-calling software; Phred 20 = 1% error, Phred 30 = 0.1%, Phred 40 = 0.01%.
- **AB1 file** — the standard binary file format produced by Applied Biosystems instruments; contains the four-color trace data and metadata.
- **Cycle sequencing** — the linear amplification reaction used in modern Sanger; uses thermal cycling like PCR but with only one primer.
- **Maxam-Gilbert sequencing** — the contemporary chemical-cleavage alternative to Sanger, published in 1977; lost out to Sanger due to toxic reagents and poor automatability.
- **Heterozygous double peak** — the chromatogram signature of a heterozygous variant: two equal-height peaks of different colors at the same position.
- **Allele dropout** — the failure to amplify one of two heterozygous alleles, leading to a false homozygous appearance on the trace.
- **16S rRNA gene** — the universal bacterial marker gene used for species identification by Sanger sequencing.
- **ITS** — the internal transcribed spacer region used for fungal identification.
- **MLST** — multi-locus sequence typing; Sanger-based strain typing using several housekeeping genes.
- **Next-generation sequencing (NGS)** — the family of massively-parallel sequencing platforms that displaced Sanger for large-scale work in the late 2000s; includes Illumina, PacBio, Oxford Nanopore.

**Suggested further reading.**

- Sanger F, Nicklen S, Coulson AR (1977). "DNA sequencing with chain-terminating inhibitors." _Proc. Natl. Acad. Sci. USA_ 74(12): 5463-5467. The original paper. Short, clear, and remarkably readable.
- Sanger F (1988). "Sequences, sequences, and sequences." _Annual Review of Biochemistry_ 57: 1-28. Sanger's personal retrospective on his career. A model of scientific autobiography.
- International Human Genome Sequencing Consortium (2001). "Initial sequencing and analysis of the human genome." _Nature_ 409: 860-921. The Human Genome Project paper.
- Smith LM, Sanders JZ, Kaiser RJ, et al. (1986). "Fluorescence detection in automated DNA sequence analysis." _Nature_ 321: 674-679. The original dye-terminator chemistry paper from Leroy Hood's group.
- Shendure J, Ji H (2008). "Next-generation DNA sequencing." _Nature Biotechnology_ 26: 1135-1145. The standard review of the post-Sanger era.

**Timing notes for the lecturer.**

- Segments 1-9: roughly one hour of lecturing at 120 wpm.
- Break: about 10-15 minutes.
- Segments 10-18: roughly another hour.
- Total: about two hours, with room for questions.
- If you're running short on time, the segments that can be compressed most safely are 5 (Maxam-Gilbert), 17 (long-read attempts), and parts of 16 (economics). The core conceptual segments — 3 (chain termination), 6 (four-color), 7 (capillary), 12 (chromatograms), 18 (legacy) — should be preserved at full length.
- If running long, the appendix glossary can be skipped in the spoken lecture and provided as a handout.

---

_End of script._


