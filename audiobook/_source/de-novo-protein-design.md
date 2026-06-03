# De novo protein design

**A 2-hour undergraduate computational biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to two hours, plus a mid-point break. (Read faster, ~140 wpm, and it lands nearer 90 minutes, leaving room for questions or board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The inverse problem

Alright. Settle in. If you sat through the AlphaFold lecture — and I'm going to assume most of you did, because this lecture leans hard on that one — you already know the headline. In late 2020 a team at DeepMind essentially solved the forward problem in structural biology. Sequence in, structure out. Type a string of amino acids into a model, get back a three-dimensional shape that, for most proteins, is indistinguishable from a crystal structure. Fifty years of grinding, closed in a single CASP round.

Today we are going to talk about the other direction. The harder direction, in some ways, although you'll see by the end that the two directions actually feed each other, and the modern field is one tangled loop where AlphaFold and de novo design have become inseparable tools.

\[Pause.\]

Here's the setup. AlphaFold answers the question: **given a sequence of amino acids, what shape will the protein fold into?** That's the forward problem. Nature gives you a sequence. You want to know the structure. You ask the model.

De novo protein design asks the opposite. **Given a desired structure — or, more usefully, a desired function — what sequence of amino acids will produce a protein that has it?** That's the inverse problem. You don't have a sequence. You have a job description. You want a protein that binds the spike protein of a coronavirus. You want a protein that displays an antigen in a tidy geometric pattern, like a vaccine. You want a protein that catalyzes a reaction nature doesn't normally catalyze. You want a protein that fits into a pocket on a drug target and shuts it off. You start from what you want the protein to do, and you ask: what sequence makes that protein?

Hold that asymmetry in your head, because it's the core of the whole lecture. AlphaFold reads. De novo design writes. AlphaFold is the literary critic, given the text and producing an interpretation. De novo design is the novelist, given the theme and producing the text.

\[Pause.\]

The analogy I want you to carry through the next two hours is: de novo design is **the inverse of AlphaFold — instead of asking "what shape does this sequence make?", you ask "what sequence makes this shape, or does this job?"** Both questions have the same alphabet, the same chemistry, the same physics underneath. But the difficulty profile is completely different. The forward problem has, in principle, a unique answer — one sequence folds to roughly one structure. The inverse problem is wildly degenerate — many different sequences can produce essentially the same fold, and even more sequences can produce different folds that all do the same job. The inverse problem is a search problem in a vast, mostly-empty space, and the trick is to find the rare sequences that actually work.

If you walk out of here in two hours and you can do four things — one, explain in plain English why the inverse problem is even harder, conceptually, than the forward problem, and why it's also more useful; two, tell me what David Baker's lab and the Rosetta software have been doing since the 1990s, and how that classical work made the modern revolution possible; three, sketch the modern workflow — RFdiffusion makes a backbone, ProteinMPNN gives it a sequence, AlphaFold checks that it folds, and the lab tests whether it works — and tell me why each step is there; and four, walk me through what designed proteins are currently doing in the real world, from anti-COVID minibinders to nanoparticle vaccines to designer enzymes, and what's still hard — then we've done our job. Everything else hangs off those four.

\[Pause.\]

Let me say one thing about tone, because this is a story that has been building for thirty years and just exploded in the last five. If you talk to a structural biologist who has been in the game since the nineties, the AlphaFold moment was disorienting. They lost the forward problem in a single CASP round. But the de novo design field was already there — quieter, less hyped, in one lab at the University of Washington, slowly building the tools to do the inverse problem from first principles using Rosetta. That lab — David Baker's lab — spent two decades designing proteins by hand, in software, and the field watched with polite interest. Then AlphaFold landed, and within eighteen months, design exploded too. Baker's lab and others trained diffusion models for backbones. They trained graph networks for sequence design. They glued these tools to AlphaFold for verification. By 2022 the entire pipeline was reproducible. By 2023 it was running on laptops. By 2024, David Baker shared the Nobel Prize in Chemistry with Demis Hassabis and John Jumper — half the prize for the forward problem, half for the inverse.

That is the arc. Forward and inverse. AlphaFold and Rosetta. Reading the text and writing it. Hassabis-Jumper and Baker. And we are now, in 2026, in the third year of the era where this stuff is actually changing how drugs get made.

Let me start at the beginning of the inverse story. Long before there was a neural network in sight.

---

## SEGMENT 2 — Rosetta and the pre-ML era

Let's go back to 1996. The internet exists but nobody uses it for science yet. AlphaGo will not exist for twenty years. Deep learning is a fringe field that most computer scientists think is dead. And at the University of Washington, a structural biologist named David Baker — a former Berkeley undergrad, a Berkeley PhD, freshly tenured, working on the protein folding problem — starts writing a piece of software called Rosetta.

\[Pause.\]

Rosetta's original purpose was the forward problem. Predict structure from sequence. This is the same problem AlphaFold would eventually solve, twenty-four years later, by completely different means. Baker's approach in the late nineties was what we'd now call classical biophysics, with heavy use of statistics extracted from the Protein Data Bank.

Here's the conceptual move. Baker observed that, even though the full conformation space of a protein is impossibly large, **short fragments** — three to nine amino acids at a time — tend to adopt only a small number of local shapes. A given three-residue sequence, looked up across all the structures in the PDB, tends to fold into one of maybe a handful of local conformations. Most three-residue patches are not surprising. They're like the syllables of protein structure — limited in number, drawn from a finite vocabulary.

So Rosetta's strategy was: break your target sequence into overlapping short fragments. For each fragment, look up in a precomputed library all the local conformations that similar fragments adopt in known structures. Then assemble the full structure by stitching these fragments together — using a Monte Carlo procedure that randomly substitutes one local conformation for another, scores the resulting structure with an energy function, and keeps the moves that lower the energy. Repeat for thousands of trajectories. The lowest-energy structures across all trajectories are your predictions.

\[Pause.\]

This is fragment assembly plus energy minimization, and it was, for over a decade, the state of the art for ab initio prediction. Rosetta routinely won the harder categories at CASP through the 2000s. Baker's lab grew into one of the largest computational biology groups in the world. Hundreds of PhDs and postdocs cycled through. The software became a multi-million-line code base, written largely in C++, maintained by a worldwide consortium called RosettaCommons. If you wanted to do serious computational protein work between 2000 and 2020 and you weren't a DeepMind employee, you were almost certainly running Rosetta.

And here is the part that matters for our lecture. Around 1999, Baker realized that Rosetta could be flipped. The same framework that searched conformations for a fixed sequence could also search sequences for a fixed conformation. You hold the backbone — the chain of alpha carbons — fixed in your desired shape. Then you ask the algorithm: at every position along this backbone, what amino acid minimizes the energy? You try every amino acid at every position, you let the side chains pack against each other, and you keep the combination that gives the lowest-energy folded structure.

This is **protein design**, in the Rosetta sense. The energy function doesn't know whether you're predicting structure or designing sequence; it just scores structures. You can let either the sequence or the backbone vary, and minimize. Baker called this **"protein folding upside down"** — same software, same energy function, problem flipped. Predict the structure given the sequence, or write the sequence given the structure.

The analogy I want for this is: Rosetta is **the OG — David Baker's energy-minimization software, designing proteins since the 1990s**. Long before machine learning, long before there was a single GPU in computational biology, Baker's lab was running Rosetta on clusters of CPUs, sampling sequences, scoring fits, and producing designed proteins that, when expressed in the lab, actually folded into the shapes the software said they would.

\[Pause.\]

There's one more piece of context that matters. Through the 2000s, Baker's lab developed a culture that turned out to be unusual in computational biology. They didn't just publish predictions. They **expressed every designed protein in the lab**. Every paper from Baker's group, almost without exception, ended with experimental validation — they synthesized the gene, they put it in E. coli, they purified the protein, they ran circular dichroism on it to check that it folded, and if possible they crystallized it and solved its structure. This experimental discipline turned out to be irreplaceable. Computational designs that look good on a screen are routinely terrible in real life — they don't express, they aggregate, they fold to the wrong shape, they're insoluble. The only way to know if your design works is to make it and test it. Baker's lab built that loop early and kept it running, and as a result they accumulated, over twenty years, an empirical understanding of what works and what doesn't that no other group had. When the deep learning revolution arrived in 2020, Baker's lab was the only one with both the computational tooling and the experimental pipeline ready to consume it.

That accumulated practice — Rosetta plus the wet lab plus thousands of designed proteins expressed and characterized — is the substrate the modern field grew on. Without the twenty years of Rosetta, the diffusion-model work of 2022 would have had nothing to stand on. So before we get to the modern era, we have to spend a segment on the proof of concept that, in 2003, shocked the field and convinced people that the inverse problem was actually solvable.

---

## SEGMENT 3 — Top7 — proof of concept

In 2003, Baker's lab published a paper in Science titled, more or less, "Design of a novel globular protein fold with atomic-level accuracy." The protein it described was called **Top7**, and Top7 is, in the history of de novo protein design, the moment the field stops being theoretical and starts being real.

\[Pause.\]

Here's what they did. They picked a fold that, to the best of anyone's knowledge, did not exist in nature. They designed it on paper — a target three-dimensional backbone, with five beta strands and two alpha helices in a particular arrangement that nobody had ever seen in any natural protein. Then they used Rosetta to search for an amino acid sequence — ninety-three residues long — that would, when expressed, fold into that exact backbone. They cycled through Rosetta's energy minimization, picked the best-scoring sequence, synthesized the gene for it, expressed it in E. coli, purified the protein, and crystallized it.

The crystal structure came out. Within a fraction of an ångström, it matched the design. The protein folded, in vitro, into the exact previously-nonexistent shape the software had specified. Sequence in, novel structure out, computationally specified, experimentally confirmed.

\[Pause.\]

The analogy I want here is: Top7 is **the proof of concept — a protein with a fold nature never invented, designed in silico, expressed in the lab, X-ray-solved, matched the prediction**. It is to de novo design what the Wright Brothers' first flight is to aviation. Short hop, small craft, but the principle was demonstrated. After Top7, it was no longer fair to say de novo design didn't work. It worked. It just didn't yet work on anything you'd really want to make.

Because Top7 was, functionally, useless. It was a beautiful blob that folded the way it was told to fold. It didn't bind anything. It didn't catalyze anything. It didn't do any of the things proteins normally do. It was a stable, designed scaffold and nothing more. From the perspective of biology, that was fine — the demonstration was the point. From the perspective of medicine or industry, it was a curiosity.

The decade after Top7 was the decade in which Baker's lab and a growing list of collaborators tried to extend the methodology from designing scaffolds to designing **function**. That turned out to be much harder. Designing a stable fold requires getting the hydrophobic core packed and the surface charges arranged sensibly — a tough problem but a tractable one. Designing a binding pocket that grabs a specific small molecule, or a catalytic site that accelerates a specific reaction by ten orders of magnitude — that requires getting the geometry of three or four key residues exactly right, in a stable scaffold that also tolerates those residues being where they are, in an orientation that matches the substrate. Many things have to align. Most designs failed.

\[Pause.\]

But there were partial successes. Through the 2000s and 2010s, Baker's lab and others published a steady stream of designed proteins with novel folds. Designed cytokine mimetics. Designed metal-binding proteins. Designed proteins with specific binding affinities to chosen targets. Some worked. Many didn't. The success rate, even in the late 2010s, was — to be candid — single-digit percentage. You'd design a thousand variants, you'd express a hundred of them, and one or two would do what you wanted. The throughput was set by the wet lab — you could only express and test so many designs a week — and the failure mode was bad enough that most academic groups, looking at the cost-benefit, stayed away.

What sustained the field through this period was, partly, persistence — Baker's lab is famously stubborn about long-term projects — and partly the slow expansion of the toolkit. Rosetta got better. Energy functions got better. Sampling algorithms got better. The lab developed specialized protocols for different design tasks: enzyme design, binder design, membrane protein design, symmetric assembly design. Each protocol was a hand-tuned pipeline of Rosetta moves, calibrated by what had and hadn't worked in previous projects.

And in 2008, in a move that I genuinely admire as both a science move and a cultural move, Baker's lab did something nobody else in computational biology had done. They turned the protein folding problem into a video game and let the internet play.

---

## SEGMENT 4 — Foldit — citizen science meets protein folding

In 2008, Baker's lab — in collaboration with Zoran Popović's group at UW's computer science department — released a game called **Foldit**. Foldit was, on its face, a puzzle game. You downloaded a client, you got a protein backbone on your screen — a wiggly, partially-folded chain — and your job was to drag it around with your mouse, twist its loops, pack its side chains, until you'd folded it into something that, according to the underlying Rosetta scoring function, was a low-energy structure.

You scored points for low-energy configurations. There was a leaderboard. Players formed teams. People who had never taken a biology class in their lives were spending evenings hunched over their monitors, fiddling with virtual proteins, climbing the rankings.

\[Pause.\]

The remarkable thing about Foldit is that it actually worked as science. Real protein folding problems were uploaded as puzzles, and human players, using their visual intuition and patience, were able to solve some of them faster or better than Rosetta's automated algorithms could. In 2011, Foldit players collectively solved the structure of an HIV-related enzyme that had stumped crystallographers and computational predictors for over a decade. The structure was published in Nature, with the Foldit players listed as co-authors — a Nature paper credited, in part, to a leaderboard of internet strangers. That paper was, I think, the first time a major scientific journal had to figure out how to cite "the Foldit contenders group."

Foldit kept running, kept being used for both prediction and design tasks, and provided, for a decade, a constant stream of evidence that human intuition about protein folding — the visual sense of "this doesn't look right; what if we tucked this loop here?" — captures something that algorithms were missing. That something, eventually, would be captured by deep learning. But for a window of years, it was best captured by humans clicking around in a Java client.

\[Pause.\]

I bring up Foldit not because it became the dominant tool — it didn't. I bring it up because it tells you something about Baker's lab and its style. They were willing to throw the protein folding problem at the entire internet and see what happened. They were willing to share the toolkit. They were willing to be embarrassed by amateurs when the amateurs beat them. That openness — and the corresponding culture inside the lab of distributing Rosetta widely, releasing protocols, publishing in detail — built a community.

And when, in 2020 and 2021, deep learning started to overtake classical methods, that community was already there to absorb the new techniques. Baker's lab pivoted to deep learning approaches within about eighteen months of AlphaFold2's release. They did it because the people in the lab — many of them PhD students and postdocs trained on Rosetta, but with one foot in the ML world — knew the field and knew the tools. The Rosetta years had built the infrastructure, the experimental pipelines, the trained-up people. The deep learning years grafted onto that.

We are about to get into the deep learning era. The next segment is the inflection point — the moment in late 2021 when Baker's lab released RoseTTAFold and, almost immediately, started using it backwards.

---

## SEGMENT 5 — Hallucination and inpainting — using folding networks in reverse

In July 2021, two papers came out essentially the same week. One was DeepMind's AlphaFold2 paper in Nature. The other was Baker's lab's response — a system called **RoseTTAFold** — published in Science. RoseTTAFold was an AlphaFold-style network, smaller and architecturally distinct but operating on similar principles: take a multiple sequence alignment, run it through a transformer-based deep network, output a predicted structure. RoseTTAFold's accuracy was roughly halfway between AlphaFold2 and the older Rosetta methods — not as good as AlphaFold2 on hard targets, but far better than anything that had come before in Baker's universe, and crucially, it was open-source code that the lab fully understood and controlled.

\[Pause.\]

What happened next, in the second half of 2021, is the conceptual move that opened the door to the modern era of de novo design. Researchers in Baker's lab — Sergey Ovchinnikov and others — realized that you could **run RoseTTAFold in reverse**.

What does that mean? RoseTTAFold takes a sequence and produces a structure. But the network is, mathematically, just a function — sequence in, structure out. You can pin the output to a target structure that you want, then use gradient descent on the input — the sequence — to find a sequence the network believes will fold to that target. The optimization is the same optimization a network does during training, but instead of updating weights to fit a training set, you update the input to make the network's output match your target.

The Baker lab called this approach **hallucination**. You give the network a structural target — say, an alpha-helical bundle, or a barrel, or a specific binding pocket geometry — and you ask: what sequence does this network believe would fold into that target? You let backpropagation run on the sequence, you optimize, and you get out a candidate sequence. Then you predict that sequence's structure independently — using a separate AlphaFold pass, say, on a fresh model — and see if AlphaFold agrees.

Often it did agree. The hallucinated sequences, when checked by AlphaFold, were predicted to fold to the target. When expressed in the lab, many of them folded for real. This was, in some sense, classical Rosetta design rebuilt on a deep learning substrate — same problem, same idea of optimizing sequence against a structural target, but now the energy function was a giant trained neural network instead of a physics-based score.

\[Pause.\]

The related technique was called **inpainting**, by analogy to image inpainting in computer vision. In image inpainting, you give the network an image with a missing patch, and the network fills in the patch consistent with the rest. In protein inpainting, you give the network a partial structure — say, you fix in place a known catalytic site, three or four residues in a specific geometric arrangement — and you ask the network to build the rest of the protein around it. The rest of the protein, the scaffold, is inpainted; the catalytic site is held fixed. This turned out to be incredibly useful for enzyme design, where you have a known active site geometry from a real enzyme and you want to graft it into a new scaffold that doesn't have the natural enzyme's other baggage.

Hallucination and inpainting together, by late 2021 and through 2022, gave Baker's lab a working pipeline that could, in principle, design proteins for arbitrary structural targets. The results were better than anything Rosetta had produced. The success rate — meaning, fraction of designs that expressed in the lab and folded correctly — jumped from single digits to double digits to, for some classes of design, the majority.

But there was a better approach coming. Hallucination, as a method, was clever but kind of indirect. It was using a model trained to predict structures, in reverse, to design them. What if you trained a model directly for design? What if, instead of running a folding network backwards, you built a model that was, from the start, a generative model for protein backbones?

That model arrived in 2022 and 2023, and it changed the field again. It's called RFdiffusion.

---

## SEGMENT 6 — RFdiffusion — Stable Diffusion for protein backbones

If you have been paying any attention to AI in the last few years, you have seen the image generation models. DALL-E. Stable Diffusion. Midjourney. You type a sentence — "a photo of a corgi wearing a top hat, in the style of Wes Anderson" — and out comes an image that has never existed before, generated by a diffusion model.

How do diffusion models work? At a high level, they're trained on a corpus of real images. The training procedure systematically adds noise to those images — a little noise, more noise, more noise — until they're indistinguishable from random static. Then the model is trained to undo the noise step by step. At inference time, you start with pure random noise, and you run the model backwards, denoising step by step, until what emerges is a coherent image. The model has learned, during training, what plausible images look like at every noise level, and at inference time it walks that learned manifold from noise to image.

\[Pause.\]

Now: do exactly the same thing, but instead of pixels, the data points are atomic coordinates of protein backbones. That's RFdiffusion.

The analogy I want here is: RFdiffusion is **Stable Diffusion for protein backbones — start with random noise, denoise toward a target structure**. Replace pixels with three-dimensional positions of alpha-carbon atoms. Replace "a photo of a corgi" with "a protein backbone, ninety residues long, with a binding pocket of this shape, presenting these three catalytic residues at this geometry." Run the diffusion. Out comes a coherent protein backbone that looks like a real protein and satisfies your structural specifications.

RFdiffusion was developed in Baker's lab, published in a series of preprints starting in late 2022, with the main Nature paper appearing in 2023. The architecture builds on top of RoseTTAFold — hence the "RF" in the name. The model was trained on the Protein Data Bank — every real protein backbone humans had ever solved experimentally — by adding rotational and translational noise to the residue frames, then training the model to denoise them back to real protein backbones.

\[Pause.\]

At inference time, you give RFdiffusion a specification — a "prompt," in the language of generative AI, although it's a structured specification, not free text. The prompt might be "generate a backbone for a hundred-and-twenty-residue protein, with these residues constrained to be at these positions" — for instance, you might pin a catalytic triad in place — "and the rest is free." You run the diffusion process — typically a hundred or two hundred denoising steps — and out comes a backbone, every residue placed in three-dimensional space, ready for the next step in the pipeline.

The capabilities that RFdiffusion unlocked were dramatic. You could specify a target protein you wanted to bind, and ask RFdiffusion to design a backbone that binds it — the model would, conditioned on the target's surface geometry, generate scaffolds that present a binding interface complementary to that surface. You could specify symmetric assemblies — give me a backbone that forms a tetrahedral cage with itself — and RFdiffusion would generate it. You could specify the geometric arrangement of three catalytic residues, and RFdiffusion would build a scaffold around them. You could specify a particular fold — "give me a TIM barrel" — and RFdiffusion would generate a TIM barrel.

The diversity of designs RFdiffusion could produce, conditioned on essentially any structural prompt you could specify, was extraordinary. And the success rate, when these designs were carried through the rest of the pipeline and tested in the lab, was high — substantially higher than what Rosetta or hallucination methods had produced for the same problems.

\[Pause.\]

There's a sibling project I should mention, called **Chroma**, developed by Generate Biomedicines — a Boston biotech startup that was, around the same time, also building diffusion models for protein design. Chroma uses similar principles but with a different architecture; it represents the protein as a graph and uses diffusion over that representation. The two approaches converged on similar capabilities from different directions, which is how you know an idea has actually been worked out — when independent groups using different architectures get to roughly the same place.

By 2023, then, the inverse problem had a generative model. You could specify what you wanted a backbone to look like, and the model would draw it. But a backbone — a chain of alpha-carbon positions — isn't actually a protein. You need amino acid identities at every position. You need side chains that pack together. You need a sequence. And that brings us to the second half of the modern pipeline. Once you have a backbone, how do you get a sequence that will fold into it?

That's what ProteinMPNN is for.

---

## SEGMENT 7 — ProteinMPNN — the sequence designer

ProteinMPNN was released by Baker's lab in 2022, in a paper led by Justas Dauparas. It's a deep neural network that does, in one inference pass, what Rosetta used to spend hours doing on a compute cluster. Given a fixed backbone — a three-dimensional arrangement of alpha-carbon positions — ProteinMPNN proposes an amino acid sequence that, when expressed, will fold into that backbone.

\[Pause.\]

Let me give you the analogy. ProteinMPNN is **the sequence designer — given a backbone shape, propose a sequence that will fold into it**. RFdiffusion makes the shape. ProteinMPNN gives it a name in the protein alphabet. Together they are the modern de novo design pipeline.

How does ProteinMPNN work, mechanically? It's a graph neural network. The protein backbone is represented as a graph — each residue is a node, with features describing its local geometry, and edges connect nearby residues. The network processes this graph through several layers of message passing, building up a representation at every position that captures the local structural context — what kind of secondary structure this residue is in, what neighbors it has, what the local geometry looks like. Then, for each position, the network predicts the probability distribution over the twenty amino acids — what residue should sit at that position to be compatible with the local structure.

The prediction is done **autoregressively**, like a language model. The network places residues one by one — though not strictly left to right; it can choose any order — and each new residue is conditioned on the residues it has already placed. This lets the model handle constraints like "two cysteines need to be placed in compatible positions to form a disulfide bond" or "two charged residues at this distance should have opposite charges" — constraints that emerge from local context.

\[Pause.\]

When ProteinMPNN was released, it immediately replaced Rosetta's sequence design protocol — which was a Monte Carlo optimization over the same problem, but slower and less accurate — for essentially every design project in the field. The numbers were striking. ProteinMPNN designs, when checked by AlphaFold, were predicted to fold to the target backbone something like fifty to seventy percent of the time, depending on the protein class. The old Rosetta sequence design was more like ten to twenty percent. And ProteinMPNN ran in seconds on a single GPU, where Rosetta needed hours on a cluster.

The speedup matters because de novo design is, in practice, a numbers game. You don't make one design and trust it. You make hundreds or thousands of candidate designs, you filter them, you pick the best handful, and you put those handful into the lab. ProteinMPNN turned the sequence design step from a bottleneck into a non-issue. You could generate ten thousand candidate sequences for a given backbone in an afternoon, score each one with AlphaFold, and pick the ones that scored best.

\[Pause.\]

There's a technical detail worth mentioning, because it touches on why ProteinMPNN works as well as it does. The original protein structure prediction problem — sequence to structure — is what AlphaFold solves. Predicting structure from sequence requires resolving the rich, evolutionarily-encoded signals about how the sequence folds. The reverse problem — sequence design — is, in some ways, easier. The network is given the answer (the backbone) and just needs to propose an alphabet that's consistent with it. The mapping from structure back to sequence is, in information-theoretic terms, lossy in the right direction: many sequences map to the same structure, so you don't need to find the unique sequence; you just need to find any of the many that work.

That redundancy — the many-sequences-to-one-structure mapping that makes design tractable — is what makes ProteinMPNN's outputs reliably useful. It's not finding the one true sequence; it's sampling from a large family of sequences that will all fold to roughly the same structure. As long as the family is dense enough and the model finds it, you've succeeded.

Okay. We have RFdiffusion making backbones. We have ProteinMPNN giving them sequences. The third piece of the modern pipeline is the verification step — checking that the sequences ProteinMPNN proposes actually fold the way we want. And that's where AlphaFold comes back into the story, this time on our side.

---

## SEGMENT 8 — The combined workflow — design, validate, build

Here is the modern de novo design pipeline. I am going to walk you through it in detail because it is the workflow that has become standard across the field. If you go into any de novo design lab today — Baker's, Generate Biomedicines, the Computational Vaccine Center, the various academic groups that have grown around this — they all do roughly this.

\[Pause.\]

Step one: **specify the target**. You decide what you want. Maybe you want a protein that binds the receptor-binding domain of SARS-CoV-2 spike — you've got the structure of the spike, you've identified the surface patch you want to grip. Maybe you want an enzyme that catalyzes a particular reaction — you specify the catalytic triad geometry, the substrate-binding pocket. Maybe you want a symmetric protein assembly that displays an antigen — you specify the symmetry group, the size of the cage, the position of the antigen attachment.

The specification can be structural, functional, or both. The richer your specification, the more constrained the design problem. The looser the specification, the more diverse the designs the pipeline will produce.

\[Pause.\]

Step two: **RFdiffusion makes the backbone**. You feed your specification into RFdiffusion. It runs the diffusion process — denoising backbones step by step — conditioned on your constraints. Out comes a candidate backbone, or, more often, a batch of candidate backbones — hundreds or thousands of them, each one slightly different, all satisfying your specifications. You filter them on whatever criteria you like — preference for certain folds, exclusion of unusual topologies, agreement with some structural metric.

The backbones at this stage are pure geometry. They have no amino acid identities. The alpha-carbon positions are placed, but there are no side chains.

\[Pause.\]

Step three: **ProteinMPNN gives the backbone a sequence**. For each backbone you've kept, you run ProteinMPNN. It assigns amino acid identities to every position — typically you generate several sequences per backbone, because ProteinMPNN samples stochastically and different runs give different sequences. So if you had a thousand backbones, you might generate ten thousand candidate sequences.

\[Pause.\]

Step four: **AlphaFold checks that the sequence folds back to the intended backbone**. This is the verification step, and it is the one that the whole pipeline depends on. You take each candidate sequence — every one of the ten thousand from the previous step — and you predict its structure using AlphaFold. Then you compare AlphaFold's predicted structure to the original RFdiffusion backbone. If they match, that sequence is plausible. If they don't, that sequence is rejected.

This filter is brutal and effective. Most of your candidate sequences fail it. The ones that pass it — typically a few percent, sometimes more if your design is easy — are the ones worth taking to the lab. The AlphaFold filter is, in effect, a free silicon-based wet lab. It rejects ninety percent of your designs at zero cost, leaving you with a much smaller, much more reliable shortlist.

The analogy I want for the whole flow is: **RFdiffusion makes the shape, ProteinMPNN makes the sequence, AlphaFold checks it folds, the lab expresses it and tests**. Four steps. Two AI models on the design side. One AI model on the verification side. Then a human-and-pipette step at the end. The whole computational portion runs on a modest GPU cluster in a day or two. The lab portion takes a couple of weeks per round.

\[Pause.\]

Step five: **the lab expresses and tests**. You take your shortlist — typically a few dozen to a few hundred candidates that passed the AlphaFold filter — and you synthesize the genes for them, you express them in E. coli or another expression host, you purify the proteins, you check that they're soluble and folded by circular dichroism or differential scanning fluorimetry, and you assay them for the function you wanted — binding, catalysis, assembly, whatever.

In the modern pipeline, even with all the AI filtering upstream, you still see a lot of dropout in the wet lab. Some designs don't express. Some aggregate. Some fold to the wrong structure. Some fold correctly but don't function. The success rate at the wet lab stage varies enormously by the difficulty of the target — for simple binding tasks against well-behaved targets, you might see ten or twenty percent of your shortlist actually work. For harder tasks like de novo enzymes, the rate might be one in a hundred. Compared to the pre-AI era, where the rate was often one in ten thousand, this is a transformation. Compared to natural evolution, which has had billions of years to optimize, we're still amateurs.

\[Pause.\]

There's one more loop in this workflow that I want to mention, because it's where the whole thing gets really interesting. If your first batch of designs fails to give you what you want — say, the binders you made don't bind tightly enough — you can iterate. You take the partial successes, you re-specify the target around them, you re-run RFdiffusion and ProteinMPNN with the partial successes seeded as starting points, you run AlphaFold again, and you get a new batch. Or you can do **rational** tweaking — mutate specific positions in the best designs, re-test, refine. The iteration is fast because the computational part is fast. You can do a design-build-test cycle in a few weeks, where in the Rosetta era it took months.

That iteration loop is what makes the modern pipeline actually useful for real engineering problems. The first generation of designs is often a starting point, not a finished product. The pipeline succeeds because it can iterate quickly, and because each iteration is cheap.

Okay. We've got the pipeline. Now I want to spend the next four segments showing you what people have actually built with it — what kinds of designed proteins are out in the world doing real jobs. Let's start with the example that, more than any other, put de novo design on the map. Anti-COVID minibinders.

---

## SEGMENT 9 — Designer protein binders — the COVID minibinders

In March 2020, the SARS-CoV-2 pandemic was beginning. Cities were locking down. The virus's spike protein structure had just been solved by cryo-EM. The whole world was looking for therapeutic options — vaccines, antibodies, antivirals, anything. And in Baker's lab at the University of Washington, a project began that would, by August of that year, produce a designed protein that bound SARS-CoV-2 spike about a thousand times tighter than the natural receptor it was trying to mimic.

\[Pause.\]

Here's the biology. SARS-CoV-2 — the virus — gets into your cells by using its spike protein to bind a receptor on your cell surface called ACE2. ACE2 is a normal human protein, with its own functions, but the virus has evolved to use a patch on the spike protein to grab ACE2 and pull the virus close to the cell membrane, where fusion can happen and the virus's genome gets injected. If you can block that spike-ACE2 interaction, you block infection at the very first step.

Antibodies that bind spike and block ACE2 binding were the basis of monoclonal antibody therapies that came out in late 2020. But antibodies are big — about a hundred and fifty kilodaltons — and they have to be manufactured in mammalian cells, which is slow and expensive. What if you could make something much smaller, much cheaper, that did the same job?

\[Pause.\]

That's what Baker's lab set out to do. They used Rosetta — this was pre-RFdiffusion — to design small proteins, around fifty to seventy amino acids long, with a binding surface complementary to the spike protein's ACE2-binding site. They generated thousands of candidate designs. They expressed a few hundred. They tested them for spike binding.

By summer 2020 — a few months in — they had several designs that bound spike tightly. They then carried the best candidates through optimization — affinity-matured them in silico, tested more variants, characterized the best ones. The result was a small designed protein, around sixty residues long, that bound SARS-CoV-2 spike with a sub-picomolar affinity — meaning, vastly tighter than the natural ACE2-spike interaction. It blocked the virus from infecting cells in culture.

The work was published in Science in September 2020 — about six months from project start to publication. The lead authors were Longxing Cao and other Baker lab members. The designed minibinder was, structurally, a small alpha-helical bundle with a shape that mirrored the ACE2 binding surface. It looked nothing like an antibody. It looked nothing like ACE2. It was a completely novel protein, designed in software, that happened to grip the spike protein very tightly.

\[Pause.\]

The analogy I want here is: the Baker COVID minibinder is **designed in weeks at the start of the pandemic, blocked SARS-CoV-2 spike binding to ACE2, the proof that de novo design could move at pandemic speed**. It was one of the first proofs that de novo design wasn't just a benchtop curiosity — it could produce molecules with real therapeutic potential, fast, in response to an emergency, by computation followed by lab testing. The minibinder eventually went into preclinical development as a potential inhaled COVID therapeutic.

It's worth noting what the minibinder result didn't quite achieve. It didn't make it to a marketed drug. The pandemic moved fast, vaccines worked well, and the regulatory pathway for a novel designed protein was long. By the time the minibinder could have been deployed, the urgency had shifted. But the demonstration was made. A novel computationally designed protein, tested against a real human pathogen, performed at therapeutic levels in cell-culture and animal models. That had not been done before.

\[Pause.\]

The minibinder result accelerated everything. After 2020, every funding agency wanted de novo design programs. Every biotech company started thinking about whether they could use these methods. The Baker lab's spinout activity went into overdrive. Within two years there were a dozen design-focused biotech companies. We'll get to the company landscape in a later segment.

For now, hold this. The first major demonstration of computationally-designed therapeutics-grade proteins happened during the COVID pandemic, in a lab that had been preparing for that moment for two decades, using software the lab had been writing since 1996. The Rosetta-era tools were just barely good enough; the post-AlphaFold tools, when they arrived a year later, would have made the same project much faster. But it worked, in 2020, on the eve of the deep learning era, as the last great achievement of pre-AI de novo design.

Now let's take a break.

\[BREAK — about ten minutes. When we return, we'll go through the rest of the application landscape: designer vaccines, designer enzymes, designer drugs, the 2024 Nobel, the startup wave, what's still hard, the rise of protein language models, the AlphaFold + design feedback loop, and what the frontier looks like in 2026. See you in ten.\]

---

## SEGMENT 10 — Designer vaccines and protein nanoparticles

Welcome back. We left off in the COVID minibinder world — small designed proteins that grip a target tightly. That's one category of designed protein. The next category I want to discuss is much bigger, in every sense, and it's one of the areas where Baker's lab has had the most surprising impact on real medicine. Designer vaccines, built from designer protein nanoparticles.

\[Pause.\]

Let's review the vaccine problem. A vaccine works by exposing your immune system to an antigen — a piece of a pathogen, or a representation of it — so that your B cells and T cells can mount a response, build memory, and be ready when the real pathogen arrives. The quality of the immune response depends, among other things, on how the antigen is presented. Antigens presented as isolated soluble proteins generate weaker responses than antigens presented in dense, repeating, organized patterns on a surface — because the immune system evolved to recognize the surfaces of viruses, which are by their nature repeating geometric arrays of antigen.

This is why virus-like particles — empty viral shells, with no genome, just protein — work so well as vaccine platforms. Hepatitis B vaccine. HPV vaccine. They're protein cages, decorated with viral antigens in regular patterns, and the immune system recognizes them as virus-like and responds vigorously.

But virus-like particles have limits. You're stuck with the geometry the virus evolved. You can't easily decorate them with arbitrary antigens. You can't tune the size or the symmetry to match what your immunological target wants. What you'd really want is the ability to design a protein cage from scratch, with the exact symmetry and size you specify, decorated with the exact antigens you choose, in the exact spatial arrangement you want.

\[Pause.\]

That's what Baker's lab — through its Computational Vaccine Center, also called the **Institute for Protein Design** at UW — has been working on for over a decade. They've designed **two-component protein nanoparticles**, where two different designed proteins self-assemble into a precise geometric cage. The cage might be a tetrahedron, an octahedron, an icosahedron — the same symmetries you see in real viruses, but built from proteins of your own design. Once assembled, the cage displays whatever antigen you've fused to the outside, in a regular geometric pattern, mimicking the surface of a virus.

The analogy I want is: designer vaccines are **Baker's lab designed protein nanoparticles that display antigens in regular geometric patterns — proteins that look like virus shells but are 100% engineered**. They're the platonic ideal of a vaccine antigen presentation system. You pick your symmetry, you pick your antigen, you pick your spacing, and the protein folds itself into the cage you specified.

\[Pause.\]

The technology has been used for real vaccines. The most prominent example is the **COVID nanoparticle vaccine** developed by the Institute for Protein Design in collaboration with SK bioscience, the Korean vaccine maker. The vaccine, called SKYCovione in some markets, displays the SARS-CoV-2 spike receptor-binding domain on a designed icosahedral nanoparticle. Phase 3 trials showed strong immunogenicity, and the vaccine was approved in South Korea and a few other markets in 2022.

That same platform has been deployed for other antigens — influenza, RSV, malaria — in clinical trials of varying stages. The general principle is reusable: design a cage, fuse your antigen of interest, get a stronger immune response than you would from soluble antigen alone. The Institute for Protein Design has, by now, dozens of vaccine programs at various stages, plus partnerships with major pharmaceutical companies.

\[Pause.\]

There's a meta-point I want to make about nanoparticle vaccines. The Baker lab work proves something interesting about what de novo design is good for. The strongest applications, so far, are not de novo enzymes or de novo therapeutics that have to bind a specific drug-grade target. They are de novo **scaffolds** — structural proteins whose job is geometric. Cages, scaffolds, fibers, sheets. The de novo design field is, for now, better at architecture than at function. Building a cage that holds a specific shape is something Rosetta-and-friends can do well. Building an enzyme that catalyzes a specific reaction at industrial efficiency is much harder. So the early commercial successes of de novo design have skewed toward applications where geometric specification is the main challenge.

That said — the enzyme work is getting interesting too. Let's talk about it.

---

## SEGMENT 11 — Designer enzymes — installing catalytic triads

An enzyme is a protein that accelerates a chemical reaction. The acceleration is often staggering — factors of ten to the tenth or more — compared to the same reaction in the absence of the enzyme. How does an enzyme do this? By providing a precisely shaped active site, where a small set of catalytic residues — typically three or four amino acids — are held in exactly the right geometry to bind the substrate, distort it toward the transition state of the reaction, and stabilize that transition state long enough for the chemistry to happen.

The geometric precision required is extraordinary. The catalytic residues have to be positioned to within fractions of an ångström. The substrate-binding pocket has to be the right size and the right shape. The electrostatics have to be tuned. Get any of these wrong by even small amounts, and the catalytic rate drops by orders of magnitude.

\[Pause.\]

Designing an enzyme de novo means specifying all of that, computationally, and getting a protein that, when expressed, actually does the chemistry. This is one of the hardest things you can ask a design pipeline to do. And it has been the white whale of Baker's lab for two decades.

The early work, in the late 2000s and 2010s, used a strategy called **active site grafting** combined with scaffold design. You'd start with a known catalytic motif from a natural enzyme — say, the catalytic triad of a serine protease, which is a serine, a histidine, and an aspartate arranged in a particular geometric relationship. You'd specify that geometry as a fixed constraint. Then Rosetta would search for a protein scaffold — any backbone, ideally one without other functional baggage — that could host this triad in approximately the right geometry. Then you'd optimize the scaffold sequence around the constraint, and you'd express the result.

\[Pause.\]

The most famous early result was the **Kemp eliminase** — a designed enzyme that catalyzes the Kemp elimination, a particular proton-abstraction reaction that has no natural enzyme catalyzing it but is a useful benchmark because the chemistry is well-understood. Baker's lab and collaborators published, in 2008, designed Kemp eliminases that had real catalytic activity — accelerations of several orders of magnitude over the uncatalyzed reaction. The activity was nowhere near what natural enzymes achieve — natural enzymes have rate enhancements of ten to the ninth or higher; the designed Kemp eliminases were closer to ten to the fourth or fifth — but the proof was made. You could design an active site into a scaffold and get measurable enzymatic activity from a protein nature had never built.

The Kemp eliminase work then sparked a long collaboration with directed evolution. Once you have a starting point with some activity — even crappy activity — you can let directed evolution take over: random mutagenesis, screening for improved variants, iterative refinement, exactly analogous to how somatic hypermutation refines antibody affinity. After many rounds of directed evolution on the designed Kemp eliminases, the rate enhancements climbed to nearly natural-enzyme levels. The designs provided the starting point that evolution could optimize from; evolution couldn't have found these scaffolds on its own.

\[Pause.\]

The modern era — post-RFdiffusion — has improved enzyme design substantially. With diffusion-based backbone generation conditioned on catalytic constraints, you can generate scaffolds that fit catalytic motifs much more cleanly than the older grafting approach. With ProteinMPNN, you can populate those scaffolds with sequences that fold correctly. With AlphaFold checking, you filter out the designs that don't fold. Recent work from Baker's lab has produced de novo enzymes — for various reactions — with rate enhancements that begin to approach natural enzymes after directed evolution refinement.

But enzymes remain the hardest single test of de novo design. Geometry is necessary but not sufficient. The dynamics matter — how the protein moves during catalysis, how it accommodates the substrate and releases the product. The current models don't capture dynamics well; they're trained on static crystal structures, and they design static scaffolds. Designing proteins that catalyze chemistry, at industrial enzyme rates, from scratch, without the helping hand of directed evolution, is still beyond the field. It's the next frontier.

---

## SEGMENT 12 — Designer drugs — peptide therapeutics

Most drugs are small molecules — aspirin, paracetamol, statins. A small fraction of drugs are biologics — antibodies, hormones, cytokines. There's an interesting middle category, called peptide therapeutics, that has been growing fast and that de novo design is now contributing to in a major way.

\[Pause.\]

A peptide is a short protein — typically twenty to fifty amino acids — that's small enough to be made by chemical synthesis rather than expression in living cells, but large enough to have real structural complexity. Peptides bridge the small-molecule world and the protein world. They can be designed to bind drug targets that small molecules can't engage well — surfaces of proteins, protein-protein interfaces, large flat patches without binding pockets.

The most famous peptide therapeutic class, right now, is the **GLP-1 receptor agonists** — drugs like semaglutide (Ozempic) and tirzepatide (Mounjaro) that have, by 2025, become some of the best-selling drugs ever made. These drugs are peptide analogs of GLP-1, a natural human hormone that regulates blood sugar and appetite. They were developed mostly by classical medicinal chemistry — modifying the natural peptide to make it more stable, longer-acting, more potent — but the underlying principle is peptide therapeutics: a designed short protein that engages a target the way a small molecule cannot.

\[Pause.\]

What de novo design adds is the ability to design entirely novel peptides — sequences that aren't variations on a natural hormone, but completely new molecules that engage targets natural peptides don't engage. The Baker lab and others have published designs for peptide inhibitors of various oncology targets, peptide cytokine mimetics that engage cytokine receptors without being natural cytokines, peptide enzyme inhibitors. Some of these are now in clinical trials.

A subclass that's particularly interesting is **cytokine mimetics**. Natural cytokines — IL-2, IL-15, IFN-gamma — are powerful immune signaling molecules with significant therapeutic potential but also major toxicity, partly because they engage receptors on multiple cell types and trigger broad responses. De novo designed cytokine mimetics can be tuned to engage specific receptor subtypes with biased signaling — for example, engaging the IL-2 receptor on certain T cells but not on others, achieving the desired immune-stimulating effect without the toxicity. Baker's lab has published a series of these "neoleukin" molecules, and at least one — neoleukin-2/15 — has entered clinical trials for cancer.

\[Pause.\]

There's a broader point here that I want to lock in. De novo peptide and protein therapeutics are not competing with small molecules. They're filling a gap. There are targets — protein-protein interfaces, allosteric surfaces, conformationally dynamic enzymes — that small molecules just cannot engage. There are pharmacokinetic profiles you can't achieve with small molecules. There are immune-modulating mechanisms that require the kind of precision only proteins can provide. De novo design is opening up drug development in those previously undruggable corners.

How big a market is this? Hard to say in 2026. The first wave of de novo design therapeutics — minibinders against viral targets, cytokine mimetics for cancer, designed peptides for various indications — are in early clinical trials. None has yet been approved, as of the time of this lecture. But there are now dozens of programs across academia and industry, and the pipeline is starting to look serious. By the end of the 2020s, my prediction is that at least one and probably several FDA-approved drugs will trace back, in part or whole, to de novo design.

That brings us, finally, to the broader recognition of this field, which arrived in October 2024.

---

## SEGMENT 13 — The 2024 Nobel — forward and inverse together

On October 9, 2024, the Royal Swedish Academy of Sciences announced the Nobel Prize in Chemistry. The prize was split in a way that, when you understood it, was elegant. Half went to **David Baker**, of the University of Washington, "for computational protein design." The other half was shared between **Demis Hassabis** and **John Jumper**, both of DeepMind, "for protein structure prediction." One year. One field. Two halves of the same problem.

\[Pause.\]

The analogy I want here is: the 2024 Nobel is **splitting the prize between forward and inverse — Hassabis and Jumper for AlphaFold (sequence to structure), Baker for design (structure to sequence)**. The Nobel committee, in their citation, made this duality explicit. They described the problems as mirror images. The forward problem — predicting structure — got the AI side of the prize. The inverse problem — designing function — got the academic-and-experimental side. Two complementary achievements, recognized together.

What did each laureate actually get the prize for? Let me unpack.

\[Pause.\]

**Hassabis** is the cofounder and CEO of DeepMind. He's a computer scientist and former neuroscientist, originally trained at Cambridge, with a background in video games — he built games as a teenager — and AI research. He cofounded DeepMind in 2010, was acquired by Google in 2014, and built the lab into one of the leading AI research organizations in the world. He was the strategic and scientific driver behind DeepMind taking on protein structure prediction as a major project, starting around 2016. The Nobel cited him for the scientific leadership and direction of the AlphaFold project.

**Jumper** led the AlphaFold2 team at DeepMind. He's the first author on the 2021 Nature paper. He's a chemist and physicist by training, with a PhD from the University of Chicago, who joined DeepMind in 2017 specifically to work on protein structure. The Nobel cited him for the architectural design and engineering of AlphaFold2 — the actual technical work that produced the model.

**Baker** is the founder and director of the Institute for Protein Design at the University of Washington. He's been working on protein folding and design since the 1990s, founded the Rosetta software, has trained generations of researchers in the field, and led the lab through the entire arc we've been discussing today — from Top7 in 2003 through nanoparticle vaccines through RFdiffusion. The Nobel cited him for "computational protein design" generally, with specific recognition for the development of methods to design novel proteins for desired functions.

\[Pause.\]

I want to spend a moment on what it meant for the prize to be shared this way. Nobel Prizes in Chemistry don't usually get awarded to AI work — most of the past awards have been for traditional bench chemistry, structural studies, organic synthesis. AlphaFold was the first major AI-driven Nobel in Chemistry, and it landed only four years after CASP14. That's an unusually fast turnaround for a Nobel, which historically lags the underlying work by ten or twenty years. The committee was making a statement: this work has so reorganized the field that we are not going to wait. We're recognizing it now.

And by splitting the prize with Baker, the committee was making a second statement: this is not just about prediction. The full transformation of computational structural biology requires both directions — reading and writing, forward and inverse. The 2024 Nobel was a Nobel for the entire field, taken as a single integrated achievement.

\[Pause.\]

There are some interesting omissions in the prize that I should mention for honesty's sake. The Nobel can only go to three living people. Many people contributed to AlphaFold beyond Hassabis and Jumper — the whole DeepMind team, which numbered in the dozens. Many people contributed to de novo design beyond Baker — entire generations of his lab, collaborators around the world, parallel efforts in other labs. Sergey Ovchinnikov, who pioneered hallucination methods. Justas Dauparas, who built ProteinMPNN. The full RFdiffusion team. None of these people got the prize. That's just how Nobels work — they recognize a small number of people who become symbols of the field. The reality is broader.

But the symbolic recognition mattered. After the Nobel, every funding agency in the world wanted protein design programs. Every biotech investor wanted to know about the field. The companies in this space — and there are many — saw a dramatic acceleration in attention, funding, and customer interest. Which brings us to the next segment.

---

## SEGMENT 14 — The startup wave — Generate, Profluent, Cradle, Xaira

In 2020, de novo protein design was essentially one academic lab — Baker's, at UW — and a few smaller groups elsewhere. By 2025, it was a multi-billion-dollar industry. Let me walk you through the landscape, because the speed of the build-out is itself a piece of evidence about where the field is going.

\[Pause.\]

**Generate Biomedicines** is one of the early movers. Founded in 2018 by Flagship Pioneering — the same firm that founded Moderna — Generate has built one of the largest computational and experimental protein design platforms in the industry. They developed Chroma, the diffusion-based design model I mentioned earlier, in parallel with Baker's RFdiffusion. By 2024 they had raised over a billion dollars, partnered with multiple large pharma companies, and had several internal drug programs in development. Their pitch is, essentially, the industrialization of de novo design — running the pipeline at scale, across many drug targets, with deep wet-lab integration.

**Profluent** was founded in 2022 by Ali Madani, a former Salesforce Research scientist who had built ProGen, one of the early protein language models. Profluent's approach leans more heavily on protein language models — large transformer models trained on protein sequences — and they've made noise both for their ML work and for designing genome-editing enzymes (CRISPR variants) computationally. They're smaller than Generate but technically distinctive.

**Cradle** is a European startup, headquartered in Amsterdam, founded in 2021 by Stef van Grieken and others. Cradle focuses less on de novo design from scratch and more on **protein optimization** — taking an existing protein and improving its properties (stability, expression, activity) using a combination of language models and design tools. Their business model is more like a contract platform; they work with bioprocess engineers and biotechs to improve the proteins they already have.

\[Pause.\]

**Xaira Therapeutics** is the new kid, founded in 2024 by ARCH Venture Partners and Foresite Capital, with one of the largest initial funding rounds in biotech history — over a billion dollars at launch. Xaira's distinctive feature is that David Baker himself is a founder, and the company is positioned as the commercial heir to the Baker lab's twenty-five-year accumulated knowledge. They've recruited heavily from the Institute for Protein Design and from DeepMind, and they're positioned as a full-stack drug discovery company built around de novo design.

There are many smaller players. **Diamond Age** for biomaterials. **EvolutionaryScale**, the Meta spinout that builds protein language models, founded by Alexander Rives and team after Meta closed their protein AI research division. **Iambic Therapeutics**, **Atomic AI**, **PostEra**, **Cyrus Bio**, and dozens of others — each with a different angle on the same underlying technology.

\[Pause.\]

The analogy I want for the startup landscape is: Generate, Profluent, Cradle, and Xaira are **the startup wave — what was a single academic lab in 2020 is now a multi-billion-dollar industry making real drugs**. Five years from one lab in Seattle to billions of dollars of venture capital across dozens of companies. Even by biotech standards, that's fast.

What are these companies all trying to do, in practice? Mostly: drugs. Designed binders, designed enzymes, designed vaccine antigens, designed peptide therapeutics. A few are trying applications outside therapeutics — protein engineering for industrial enzymes, designed proteins for diagnostics, designed proteins for cell-and-gene therapy components. But the bulk of the funding and the bulk of the headlines are about drugs.

Whether they'll succeed at the timescales their investors expect — three to five years to clinical data, eight to ten years to approval — is an open question. The field has not yet produced an FDA-approved drug from a fully de novo designed protein. That milestone is coming, probably in the late 2020s. When it lands, it will be the moment that validates the commercial model. Until then, the industry is operating on the strength of the science and the demonstrated capabilities, plus a lot of investor patience.

---

## SEGMENT 15 — What's still hard

Let me be honest about the limitations, because if you only listen to the press releases you'd think de novo protein design was a solved problem. It isn't. There are several classes of problems where the current methods still struggle, and understanding the failure modes is important for understanding where the field is headed.

\[Pause.\]

**Multi-state proteins.** Many proteins have to function in more than one conformation. A motor protein cycles between bound and unbound states as it walks along a track. A receptor has an inactive conformation and an active conformation; ligand binding switches between them. A transporter has an outward-open state and an inward-open state. Designing a protein that adopts one stable conformation is hard but tractable. Designing a protein that switches between two specific conformations on a specific trigger is much harder, and current methods are weak at this. RFdiffusion and ProteinMPNN are trained on single-state crystal structures. They learn to generate single-state proteins. Multi-state design is an active research frontier.

\[Pause.\]

**Catalysis at industrial rates.** I mentioned this in the enzyme segment. Designing a protein that catalyzes a specific reaction with rate enhancements approaching natural enzymes — ten to the ninth or higher — is still beyond the state of the art. Designed enzymes typically have rate enhancements of ten to the fourth or fifth out of the box, and even with directed evolution refinement, they often don't reach natural-enzyme levels. The geometry of the active site is necessary but not sufficient; you also need the right dynamics, the right substrate channels, the right product release, and these are dynamic properties that the current models don't capture.

\[Pause.\]

**Large complexes.** Designing two-protein interactions is now reliable. Three is harder. By the time you get to five or ten components that need to assemble into a specific structure, the current pipelines struggle. There's promising work on symmetric assemblies — protein cages, fibers — where the symmetry constrains the design problem. But arbitrary large complexes, with specific stoichiometry and asymmetric arrangement, are still difficult.

\[Pause.\]

**Intrinsically disordered proteins.** A significant fraction of the human proteome — maybe a third — is intrinsically disordered: proteins that don't have a single defined three-dimensional structure but instead flop around in many configurations, sometimes folding only when they bind a partner. Many of these are functionally important — they mediate signaling, they organize phase-separated cellular compartments, they regulate transcription. The current design methods are explicitly built around the assumption that proteins have a single defined structure. They have no good way to design disordered proteins or proteins with disordered regions. This is a wide-open frontier.

\[Pause.\]

**Membrane proteins.** Roughly thirty percent of proteins live in membranes — they cross the lipid bilayer, with hydrophobic regions embedded in the membrane and hydrophilic regions sticking out into the aqueous environment. Drug targets are disproportionately membrane proteins — GPCRs, ion channels, transporters. The structural and chemical environment of a membrane protein is fundamentally different from a soluble protein, and the current design methods, which are trained mostly on soluble protein structures, do not handle membrane proteins well. There's recent work — much of it from Baker's lab — designing transmembrane proteins for specific functions, but it's an order of magnitude harder than soluble protein design.

\[Pause.\]

**Designing for binding to specific small molecules.** Designing protein-protein binding interfaces, especially against well-characterized targets like viral spike proteins or cell-surface receptors, has become reliable. Designing a protein that binds a specific small molecule with high affinity and selectivity is still hard. The challenge is that small molecules don't have the rich evolutionary signal that protein-protein interactions have. You can't draw on coevolution. You have to design the pocket geometry from physical principles, and the success rate is still modest.

\[Pause.\]

These are real limitations. The field is acutely aware of them, and there's serious work on all of these fronts. But the cleared-from-the-list capabilities are still impressive: design a binder, design a scaffold, design a cage, design a moderately-sized assembly, design a peptide. Those are the things de novo design does well in 2026. The failures are the next decade's research program.

---

## SEGMENT 16 — Protein language models — the GPT-for-proteins angle

Up to this point I've focused on what I'd call the structural design branch of the field — the RFdiffusion + ProteinMPNN + AlphaFold pipeline, which is geometry-centric. But there's a parallel branch that treats proteins more like language, and it's been gaining ground fast. Let me spend a segment on it, because it's a different paradigm and it's where some of the most interesting recent work is happening.

\[Pause.\]

The basic idea is: a protein sequence is a string of letters from a twenty-letter alphabet. So is a sentence. The transformer architecture that powers GPT — trained on enormous amounts of text, learning to predict the next token — works just as well on protein sequences. You can train a transformer on the entire UniProt database — every protein sequence ever sequenced, hundreds of millions of sequences — by giving it the task of predicting masked or next-token amino acids. After training, the model has, in its weights, an enormous amount of implicit knowledge about what protein sequences look like, what's allowed, what isn't, what tends to go with what.

This was pioneered, in the protein context, by several groups around 2019-2020. The most prominent line of work is **ESM** — Evolutionary Scale Modeling — from Meta AI, then spun out as EvolutionaryScale. ESM is a series of protein language models, with the largest, ESM-2, having around fifteen billion parameters. There's also **ProGen** from Salesforce Research and now Profluent. There's **ProtGPT2** from academic groups. There's the protein language model component baked into AlphaFold3.

\[Pause.\]

What can a protein language model do? Several things. First, it learns representations of proteins — embeddings — that capture structural and functional information without explicit structural training. ESM-2's embeddings, fed into downstream classifiers, can predict whether a protein is an enzyme, what fold it has, where its active site is — all from sequence alone, without ever seeing a structure. The embeddings encode a lot of biology, learned implicitly.

Second, the language models can generate new sequences. Just as GPT can generate text, ESM and ProGen can generate protein sequences — sequences that are structurally plausible, that look like real proteins, that often fold to coherent structures when checked. You can prompt them with a partial sequence, or with conditioning information, and get out a full-length protein sequence.

Third — and this is the interesting result — protein language models can do **single-sequence structure prediction**. The team behind ESM built **ESMFold**, a structure prediction system that uses the ESM-2 language model in place of multiple sequence alignments. Recall that AlphaFold's secret sauce is the MSA — the patterns of variation across homologs. ESMFold replaces the MSA with the language model's learned implicit knowledge of evolution. You give it one sequence, the model attends to its own representation, and it produces a structure. Accuracy is somewhat below AlphaFold2-with-MSA for well-aligned proteins, but for orphan proteins with few homologs, ESMFold can match or beat MSA-based methods. And it's much faster, because it doesn't have to search sequence databases.

\[Pause.\]

The protein language model approach has implications for design too. You can train a language model conditionally — give it a description of the function you want, get out a sequence. You can fine-tune it on a specific protein family, then generate new family members with desired properties. You can use it as a scoring function — given a candidate sequence, what does the language model think is the likelihood of this sequence being a real protein? Sequences that score high are more likely to be foldable and functional.

The pipeline that's emerging combines these. RFdiffusion makes a backbone; ProteinMPNN gives it a sequence; protein language model evaluates the sequence; AlphaFold checks the structure; the lab tests the result. Each tool contributes a different kind of signal — geometric, sequential, language-statistical, structural — and combining them all gives better designs than any single tool alone.

\[Pause.\]

There's a philosophical point I want to flag. The structural design approach — RFdiffusion and friends — is geometric. It thinks about proteins as three-dimensional objects with specific shapes. The language model approach is sequential. It thinks about proteins as strings of letters with statistical patterns. These are different ontologies of the same underlying biology. Both work. The fact that both work, separately and together, tells you something about how much redundant information is in the protein universe — you can approach it from many angles, and they all converge on overlapping but not identical capabilities.

The current generation of best models — like AlphaFold3 — increasingly integrate both perspectives. They have both a structural understanding and a language understanding of proteins. The boundaries between the two paradigms are dissolving, and the field is converging toward a single integrated framework.

---

## SEGMENT 17 — Verification loops — using AlphaFold to score designs

I want to spend a focused segment on something I've mentioned in passing — the way AlphaFold has become a verification tool for de novo design — because the loop is more important than people realize, and it tells you something deep about how the modern pipeline works.

\[Pause.\]

Here's the setup. Suppose you generate a candidate de novo design. Backbone from RFdiffusion, sequence from ProteinMPNN. You'd like to know, before you spend money and weeks expressing this protein in a lab, whether the design is actually going to fold. You could try to predict that by physics — but physics-based folding simulations are slow and not always accurate. What you'd really like is a fast, reliable, structure-prediction model that takes your candidate sequence and tells you what shape it folds into.

Which is exactly what AlphaFold is. So you take your candidate sequence, you predict its structure with AlphaFold, and you compare AlphaFold's prediction to the backbone you originally designed. If they agree — meaning, AlphaFold thinks the sequence folds to the structure you wanted — then your design is plausible. If they disagree — AlphaFold thinks your sequence folds to something else — then your design is rejected.

This is the **AlphaFold filter**, and it has become the single most important step in the de novo design pipeline, after generation itself. Without it, your designs go to the lab with a high failure rate. With it, you can reject ninety percent of bad designs at zero cost, and only the good ones make it to expression.

\[Pause.\]

There's something philosophically interesting going on here. AlphaFold was originally built to solve the forward problem — predict structures from sequences. In the de novo design pipeline, it's being used in a totally different mode: not to discover unknown structures, but to **verify that designed structures match designed sequences**. It's a confidence-checking tool, deployed against the outputs of other models.

This is a pattern that you see more broadly in AI: you build a model for task A, and then someone realizes the same model is the perfect verifier for task B, and the model gets a second life. AlphaFold for verification is one of the most consequential examples of this in biology. Without AlphaFold as a verifier, the modern de novo design pipeline would not work nearly as well as it does. The success of RFdiffusion and ProteinMPNN is, in part, the success of having a free, fast, accurate filter on the outputs.

\[Pause.\]

The verification loop has another layer. Once you've made designs and tested them in the lab, you can use the lab results to **refine the design pipeline itself**. Designs that worked become positive training examples; designs that failed become negative examples. You can fine-tune the design models on your own results, making them better for your specific problem. This is **active learning** applied to protein design, and it's how design labs accumulate proprietary capability over time. The shared models — RFdiffusion, ProteinMPNN, AlphaFold — are open source. The fine-tuned versions, trained on the lab's own experimental data, are not. That's part of how startups in this space build moats.

\[Pause.\]

There's a deeper philosophical point too. Notice the symmetry of what we're doing. AlphaFold solves the forward problem; we use it to verify solutions to the inverse problem. We use forward solutions as filters for inverse solutions. The two problems are not separate; they're conjugate. Every advance in one helps the other. AlphaFold's improvement on the forward problem makes the filter better, which makes the inverse pipeline better, which lets us design more proteins, which can be added to AlphaFold's training data, which improves the forward model again. It's a virtuous cycle, and we're early in it.

The whole field, by 2026, looks like one big design-and-verify loop, with AI models on every side. Each model is good enough that, used correctly, it makes the next step easier. The cumulative effect is that de novo protein design has, in five years, gone from "barely possible for specialists with massive compute" to "a routine workflow that grad students can run on a laptop."

Which brings us to the frontier. What's next? Where is this going? Let's finish there.

---

## SEGMENT 18 — The frontier — agentic design, antibodies, vaccinology

We've covered the history, the methods, the applications, the people, the companies. Let me close with a forward-looking segment about where this field is going over the next five to ten years. Some of what I'll say is speculative. Some of it is already happening at the frontier, just not yet in the mainstream.

\[Pause.\]

**Fully agentic protein design.** The current pipeline — RFdiffusion + ProteinMPNN + AlphaFold + wet lab — requires a human in the loop at every step. A scientist specifies the target. A scientist filters the candidates. A scientist designs the experiments. The interesting question is: how much of this can be automated? Can you build an agentic system — an AI that takes a high-level functional goal, like "design a therapeutic for this disease," and runs the whole design loop autonomously?

Some labs are starting to build pieces of this. AI agents that read the literature, propose design strategies, run the design tools, plan the experiments, interpret the results, and iterate. None of this is fully working yet, but the pieces are coming together. Within five years, my prediction is that there will be agentic systems doing significant portions of protein design with minimal human supervision. The role of the human scientist will shift toward defining problems and verifying results, not running pipelines.

\[Pause.\]

**GLP-1-class designer therapeutics.** I mentioned semaglutide as an example of a peptide therapeutic that has become a blockbuster. The next generation of GLP-1-class drugs will, I think, include fully de novo designed peptides — molecules that don't trace to a natural hormone, but were designed from scratch to engage specific receptors with specific signaling profiles. Some of these are already in clinical trials. By the end of the decade, expect to see designed peptide drugs with multi-billion-dollar market potential.

\[Pause.\]

**Antibody design from scratch.** Antibody therapeutics are the largest class of biologics, with global sales over two hundred billion dollars a year. Almost all current antibody drugs come from immunization of animals followed by selection — natural antibodies, refined by experimental directed evolution. The dream is to design antibodies de novo, with specified binding properties, in days rather than months. The current state of the art is mixed — for some targets, de novo designed antibody mimics work; for others, the geometric specificity of natural antibody CDR loops is hard to replicate. But there's serious progress, and within the next decade, I expect some clinical-stage antibody therapeutics will be fully designed rather than discovered.

\[Pause.\]

**Computational vaccinology.** I spent a segment on protein nanoparticle vaccines, which are the current cutting edge of designed vaccines. The future is more ambitious: vaccines designed against pathogens before those pathogens have even emerged. Imagine a system that can take a viral sequence — even one from a new pandemic — and within days produce a designed vaccine candidate, including the antigen, the nanoparticle scaffold, the adjuvant configuration. Some of the building blocks exist. The Coalition for Epidemic Preparedness Innovations and other groups are explicitly funding work in this direction. The next pandemic will be the test — can de novo design produce a working vaccine candidate in weeks, not months?

\[Pause.\]

**The convergence of forward and inverse.** I've been treating the forward and inverse problems as conceptually distinct throughout this lecture, but the truth is they're already converging in the modern models. AlphaFold3 has design-like generative capabilities. Diffusion-based design models do implicit structure prediction. The next generation of models will probably not draw a sharp line between prediction and design. There will be one model, or one family of models, that takes any input — a sequence, a partial structure, a functional specification, a binding target — and produces any output. The field will become a single integrated platform for biomolecular reasoning.

\[Pause.\]

**Where does this leave biologists?** This is the question I think about most. AlphaFold and de novo design have, in five years, replaced large parts of structural biology with computation. They have made certain experimental skills — homology modeling by hand, fragment-based prediction, manual structure refinement — essentially obsolete. They have also opened up entirely new experimental and intellectual territory. Biologists are not being replaced; they are being redirected. The new center of gravity is in problem formulation, experimental validation of designed proteins, and the still-difficult territories that the models don't yet handle — dynamics, disorder, complex assemblies, in-cell behavior.

The bench biology of the next decade will be increasingly tightly coupled with computational design. The pipettes are still there. The cell culture is still there. But the design space is now searched in silicon before any pipette moves. The biologist's job is increasingly to specify good targets, validate good designs, and tell the truth about what worked and what didn't.

\[Pause.\]

We have covered a lot today. Let me try to summarize in one paragraph what I hope you take away.

De novo protein design solves the inverse problem in structural biology — given a desired function or shape, find a protein sequence that achieves it. The field began with David Baker's Rosetta software in the late 1990s, was demonstrated as principled in 2003 with the Top7 protein, slowly developed through the 2000s and 2010s using physics-based energy minimization, then exploded after AlphaFold2 catalyzed a shift to deep learning. The modern pipeline combines RFdiffusion for backbone generation, ProteinMPNN for sequence design, and AlphaFold for verification, with wet-lab validation closing the loop. Applications include anti-viral minibinders, nanoparticle vaccines, designer enzymes, and peptide therapeutics. The 2024 Nobel in Chemistry recognized Baker for design and Hassabis-Jumper for prediction, treating the forward and inverse problems as a single integrated achievement. The field is now an industry, with multiple billion-dollar companies, and the frontier is moving toward fully agentic design, antibody design from scratch, and computational vaccinology. The forward and inverse problems are converging into one unified framework, and the working life of structural biologists is being redefined accordingly.

That's the picture. That's de novo protein design as of 2026.

\[Pause.\]

Questions? We have a few minutes. Office hours this week if you want to dig deeper. Some references in the appendix to the printed version of these notes — papers, software repositories, the Institute for Protein Design's website is a good place to start, and if you want to play with RFdiffusion yourself there are open Colab notebooks that will run on free hardware. The barrier to entry has fallen dramatically. If you have a target and a hypothesis, you can run a design experiment in an afternoon. That's the privilege of the era we're in.

Thanks for your attention. See you next week.

---

## APPENDIX — references, resources, and a glossary

A short appendix to support the lecture. Not meant to be read aloud — provided for students working through the material on their own.

**Key papers, roughly in chronological order:**

- Anfinsen, "Principles that govern the folding of protein chains," Science, 1973. The founding paper for the idea that sequence determines structure. Required reading for understanding why the inverse problem is well-posed.
- Simons, Kooperberg, Huang, Baker, "Assembly of protein tertiary structures from fragments with similar local sequences using simulated annealing and Bayesian scoring functions," J. Mol. Biol., 1997. The original Rosetta paper.
- Kuhlman et al., "Design of a novel globular protein fold with atomic-level accuracy," Science, 2003. The Top7 paper.
- Cooper et al., "Predicting protein structures with a multiplayer online game," Nature, 2010. The Foldit paper.
- Cao et al., "De novo design of picomolar SARS-CoV-2 miniprotein inhibitors," Science, 2020. The COVID minibinder paper.
- Jumper et al., "Highly accurate protein structure prediction with AlphaFold," Nature, 2021. The AlphaFold2 paper.
- Baek et al., "Accurate prediction of protein structures and interactions using a three-track neural network," Science, 2021. The RoseTTAFold paper.
- Anishchenko et al., "De novo protein design by deep network hallucination," Nature, 2021. The hallucination paper.
- Dauparas et al., "Robust deep learning–based protein sequence design using ProteinMPNN," Science, 2022.
- Watson et al., "De novo design of protein structure and function with RFdiffusion," Nature, 2023.
- Abramson et al., "Accurate structure prediction of biomolecular interactions with AlphaFold 3," Nature, 2024.

**Software and resources:**

- RoseTTAFold and RFdiffusion: https://github.com/RosettaCommons (the Baker lab's open-source releases)
- ProteinMPNN: https://github.com/dauparas/ProteinMPNN
- AlphaFold2 and AlphaFold3 (academic): https://github.com/google-deepmind/alphafold
- ESM and ESMFold: https://github.com/facebookresearch/esm
- OpenFold (open reimplementation of AlphaFold): https://github.com/aqlaboratory/openfold
- Institute for Protein Design at UW: https://www.ipd.uw.edu
- Foldit: https://fold.it

**Glossary of acronyms used in the lecture:**

- **MSA** — multiple sequence alignment. The aligned set of homologous sequences for a given protein.
- **PDB** — Protein Data Bank. The public repository of experimentally determined protein structures.
- **CASP** — Critical Assessment of Structure Prediction. The biennial blind prediction competition.
- **GDT_TS** — Global Distance Test, Total Score. The standard CASP scoring metric.
- **CDR** — complementarity-determining region. The variable loops at the tip of antibody binding sites.
- **TIM barrel** — a common protein fold consisting of eight alpha helices and eight beta strands arranged as a barrel.
- **GPCR** — G-protein-coupled receptor. The most common class of drug targets.
- **GLP-1** — glucagon-like peptide 1. The natural hormone that Ozempic and similar drugs mimic.

**A note on the timeline:**

The lecture mentions dates ranging from Anfinsen's experiments in the late 1950s through 2026. The compression of activity in the period 2020-2024 is real. Roughly: AlphaFold1 in 2018, AlphaFold2 in 2020, AlphaFold open-sourced in 2021, RoseTTAFold in 2021, hallucination and inpainting in 2021-22, ProteinMPNN in 2022, RFdiffusion in late 2022 with peer-reviewed publication in 2023, AlphaFold3 in 2024, Nobel in October 2024. Four years of compressed transformation. If you are studying this material later, expect the frontier to have moved.

**On further reading:**

For a longer treatment of de novo design as practiced in the Baker lab, the annual reports of the Institute for Protein Design are publicly available and give a tour of current capabilities. For the broader machine-learning-in-biology context, the AlphaFold lecture in this series covers the forward problem in depth. For the experimental side — how to express a designed protein, characterize it, and validate function — any standard protein biochemistry textbook will get you started, and the lab manuals from the Institute for Protein Design are published and accessible.

End of lecture.

