# Mouse Models and Knockout Mice: The Engineered Mammals Behind Modern Biomedicine

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — Why the mouse, and what we built on top of it

Alright, settle in. For the next two hours we are going to talk about mice. Not wild mice, not the field mice in your shed, not even the cute white ones in pet stores — although those are, distantly, the ancestors. We're going to talk about laboratory mice, and specifically about the engineered laboratory mouse: the knockout mouse, the conditional mouse, the humanized mouse, the cancer-prone mouse, the reporter mouse — the whole vast menagerie of genetically defined small mammals on which essentially all of modern biomedical research, from cancer biology to immunology to neuroscience to drug development, has been built. If you walk out of here remembering nothing else, I want you to walk out remembering this: **the engineered mouse is the closest mammalian whole-organism testbed we have. Same genes, mostly. Same organs. Many of the same diseases, working in many of the same ways. Not a perfect model — we'll spend a whole segment on its failures — but the best one we've got, and the one we've spent fifty years learning to manipulate at the level of single base pairs.**

Let me start with the analogy I'm going to come back to, because if you internalize it, half this lecture becomes intuitive. A mouse model is a **whole-organism testbed for mammalian biology**. Picture an aircraft hangar full of wind tunnels — different sizes, different shapes, each designed to ask a slightly different question about how air flows over a wing. Cell culture is a small bench-top wind tunnel; you can run a lot of experiments fast, but you only see a sliver of the real aerodynamics. A mouse is a much bigger, much more expensive wind tunnel, but it has the whole airframe in it — the bones, the blood, the immune system, the brain, the gut, the liver. You get to ask questions you simply can't ask in a dish. Does this gene matter for memory? Does this drug raise blood pressure? Does this tumor metastasize to the lung? You cannot answer those questions in a flask. You need a body.

And of all the bodies we could have used — and we have, historically, used many, from fruit flies to zebrafish to rats to dogs to monkeys — the mouse won the lottery. Not because it's perfect. Because of a particular combination of properties that, taken together, no other mammal can match.

\[Pause.\]

So why mice? Let me give you the list, because every one of these things is a reason the mouse became the central organism of biomedicine.

**One: their genome is similar to ours.** Mice and humans share a common ancestor about 75 million years back, and our genomes are roughly 85% identical at the protein-coding level. Of the roughly 22,000 genes in the mouse genome, the vast majority — well over 90% — have a recognizable human ortholog doing roughly the same job. The genes that build a mouse heart, a mouse pancreas, a mouse cortex, are largely the same genes, with the same regulatory logic, that build a human heart, pancreas, and cortex. So when you ask a question of a mouse — what does this gene do in a developing kidney? — there is a strong prior that the answer translates, at least roughly, to humans.

**Two: they breed fast and cheap.** A mouse goes from fertilized egg to sexually mature adult in about ten weeks. Generation time, ten weeks. A litter is six to twelve pups. You can keep a hundred mice in the space you'd need for two rats or one dog, and you can feed them on pellets that cost almost nothing. So an experiment that requires 50 animals, three generations, controlled genetic crosses, two years of follow-up — that experiment is _doable_ in a mouse. It would be financially and practically impossible in essentially any other mammal.

**Three: their development is forgiving.** Mice tolerate genetic manipulation. You can perturb major developmental genes and often the mouse still develops to viability, at least to a stage where you can study it. You can take a mouse embryo at the eight-cell stage, separate the cells, recombine them — the mouse will sort it out and grow into a normal adult. That kind of developmental robustness made the manipulation techniques we'll get to in Segments 3 through 5 _possible_ in the first place. They wouldn't have worked in a less forgiving animal.

**Four — and this one is the one people undersell — we have decades of community resources.** A century of mouse genetics, going back to the early 1900s. Stock centers like the Jackson Laboratory in Bar Harbor, Maine, that maintain tens of thousands of distinct mouse strains, ship them around the world, archive their cryopreserved sperm and embryos for decades. Genome databases. Antibody catalogues. Behavioral assays. Surgical techniques. A worldwide community of veterinarians, technicians, and researchers who all know how to handle a mouse. If you want to start working with, say, the naked mole-rat tomorrow, you can — but you'll have to invent half the infrastructure yourself. The mouse comes with the infrastructure pre-built.

\[Pause.\]

And then, on top of all that, came the engineered mouse. Because here is the conceptual leap that turned the mouse from "a small mammal we study" into "a programmable mammalian system." Starting in the late 1980s, a handful of laboratories — primarily Mario Capecchi at Utah, Oliver Smithies at North Carolina, and Martin Evans at Cardiff, all of whom won the 2007 Nobel Prize in Physiology or Medicine for this work — figured out how to take a specific gene in the mouse genome and **deliberately delete it, replace it, or rewrite it**. They figured out how to do _in vitro_ genetic surgery on a mouse stem cell, swap one gene allele for an engineered version, and then put that cell back into a mouse embryo and let it grow into a mouse. The mouse that resulted carried, in its DNA, a deliberate edit specified by the scientist. That mouse could be bred. The edit was heritable. You could now ask: what happens when I take this specific gene out of a whole organism, from the very beginning? You could ask causal questions about gene function in a way nobody had ever asked them before.

That technique — gene targeting in embryonic stem cells — is the technology this whole lecture is built around. It changed biology. The 2007 Nobel for Capecchi, Smithies, and Evans marks the moment biology officially recognized it. And then, more recently, CRISPR has come along and made the whole workflow about ten times faster — collapsing a project that used to take a year into one that takes three months. We'll get there in Segment 11.

\[Pause.\]

So here is the contract for the next two hours. By the end, you should be able to do three things. **One:** explain, with the testbed analogy, why we use mice and what kinds of questions a mouse model can answer that a dish of cells cannot. **Two:** walk through, in rough terms, how a researcher goes from "I have a hypothesis about gene X" to "I am holding a live mouse that lacks gene X" — that whole pipeline. And **three:** look at a paper, a press release, or a news article about a new disease model, a new humanized mouse, or a new mouse-based drug discovery effort, and have real intuition for what's underneath. Because every one of those announcements, somewhere, rests on the foundations we're about to lay.

Let's start where the field actually started — not with the engineering, but with the animals themselves. Because before you can edit a mouse, you have to understand what kind of mouse you're editing. And the answer to that question is one of the strangest and most beautiful pieces of 20th-century genetics.

---

## SEGMENT 2 — The inbred strain: why every C57BL/6 is the same C57BL/6

When you read a paper that says "we used C57BL/6 mice" or "we used BALB/c mice" or "129/Sv mice" — what do those letter-number codes actually mean? They look like license plates. They aren't. They are the names of **inbred strains**, and an inbred mouse strain is one of the most important conceptual objects in 20th-century biology, because it solves a problem that, if you don't solve it, makes mammalian genetics essentially impossible.

Here is the problem. If you and I both take a wild mouse, and we ask, "Does this drug lower its blood pressure?" — and I get a yes and you get a no — what just happened? Maybe the drug works and my mouse responded. Maybe the drug doesn't work and your mouse was sick. Maybe my mouse had a genetic variant that made it sensitive to the drug and yours didn't. We cannot tell. Every wild mouse is genetically different from every other wild mouse, the same way every human is genetically different. So if you want to ask whether a gene matters, or a drug works, the **variation between individual mice** completely swamps the variation caused by your experiment. Every experiment is hopelessly noisy.

The solution, worked out beautifully in the early 1900s by a handful of mouse geneticists — chief among them Clarence Cook Little, who would later found the Jackson Laboratory — was to **inbreed**. You take a pair of mice, brother and sister, and you mate them. Their offspring are siblings, and you mate _those_ siblings. And so on, brother to sister, brother to sister, generation after generation. After about 20 generations of strict brother-sister mating, something remarkable happens. The genome, which started as a normal mammalian mix of alleles inherited from many ancestors, collapses. At every gene locus, you've been driving the mice toward homozygosity. After 20 generations, **essentially every gene in the mouse is identical on the two chromosomes** — they're homozygous everywhere. After 40 generations, the entire strain is genetically uniform. Every C57BL/6 mouse alive today is, to within a handful of new mutations, **a genetic clone of every other C57BL/6 mouse**.

The analogy here is irresistible. An inbred mouse strain is **a biological standard, like a kilogram or a meter**. The strain is defined by its genetic identity, the same way the meter used to be defined by a platinum bar in Paris. You buy a C57BL/6 mouse from Jackson Labs in Maine, and you buy a C57BL/6 mouse from a colleague in Tokyo, and at the level of nuclear DNA they are the same animal. Same alleles at every gene. Same coat color. Same baseline behavior. Same susceptibilities. If your drug works on the mouse in Maine, it should work the same way on the mouse in Tokyo, because at the genetic level they are not two mice — they are one mouse, replicated.

\[Pause.\]

This is what makes mouse experiments _reproducible_. Or, at least, this is what makes them reproducible _in principle_. Because if every mouse in the experiment is genetically identical, then the only thing varying between animals is the experimental treatment. Sources of biological noise that would dominate a wild-mouse experiment — different alleles, different backgrounds, different histories — disappear. You get clean dose-response curves. You get statistical power with ten animals instead of a thousand. You can publish a paper that someone else can replicate, because the genetic substrate is identical from lab to lab.

There are dozens of inbred mouse strains, each one its own genetic island, each one with its own characteristic biology. Let me name the four you'll see most often in the literature, because you should know them on sight.

**C57BL/6**, often written B6 or "black six." A black-furred strain, founded in 1921. The single most widely used mouse in biomedical research today. Genome sequenced first, used as the reference. Tolerant of genetic manipulation. The default background for most knockouts.

**BALB/c**, an albino strain — white fur, pink eyes — founded in 1923. Particularly important in immunology and antibody research. Many monoclonal antibodies were originally raised in BALB/c.

**FVB**, an albino strain often used for making transgenic mice because of a particular property: FVB embryos have unusually large, prominent pronuclei, which makes them easier to inject. We'll come back to that in Segment 9.

**129**, a family of strains — 129/Sv, 129/Ola, 129/SvJae and several others — that are historically important because the first reliable mouse embryonic stem cells, the ones used in the original knockout experiments, came from 129 mice. Almost every classical knockout you read about from the 1990s was made on a 129 background, and then bred onto C57BL/6.

\[Pause.\]

And here's a subtlety that's going to come back later. The different inbred strains are not equivalent. They have **different baseline biology**. C57BL/6 mice get fat on a high-fat diet; BALB/c mice resist diet-induced obesity. C57BL/6 mice mount strong Th1 immune responses; BALB/c mice mount strong Th2 responses. C57BL/6 mice have terrible memory in certain behavioral tests; FVB mice can barely see, because they carry a retinal degeneration mutation. **The strain is part of the experiment.** If you knock out a gene on a 129 background and observe a phenotype, and someone else knocks out the same gene on a C57BL/6 background and gets a different phenotype, the discrepancy may not be a contradiction — it may be that the gene interacts with strain-specific modifier genes that differ between 129 and B6. We are going to come back to this in the reproducibility segment.

The big idea to leave this segment with: the inbred strain is **the foundation on which all reproducible mammalian biology rests**. Before you can engineer a mouse, you need a mouse whose unmodified background is genetically defined. The inbred strain gives you that background. It is a hundred years of patient brother-sister mating, frozen in genetic amber, distributed worldwide by stock centers — and it is the substrate on which every knockout, every transgenic, every conditional we discuss today gets built.

Now let's go meet the technique that turned this defined genetic substrate into something programmable.

---

## SEGMENT 3 — Gene targeting: in vitro genetic surgery on a stem cell

Here is the puzzle that occupied a handful of obsessive scientists through the 1980s. We knew, by then, how to manipulate DNA in test tubes — restriction enzymes, ligases, plasmids, all the tools you've heard about in other parts of this course. We knew how to grow mammalian cells in dishes. We could even put new DNA into those cells using various tricks. But what nobody knew how to do was: take a specific gene in the mammalian genome — say, the mouse insulin gene, or the mouse beta-globin gene — and, while leaving the rest of the genome completely untouched, **deliberately edit just that one gene**. We could deliver new DNA, but it would land at random in the genome. Sometimes it would happen to land near the gene you wanted, but mostly it would land somewhere irrelevant. There was no way to target.

The breakthrough — the technique that the 2007 Nobel recognized — came from three groups working in parallel in the mid-to-late 1980s. **Mario Capecchi** at the University of Utah and **Oliver Smithies** at the University of North Carolina each independently showed that you could use a phenomenon called **homologous recombination** to direct DNA edits to a specific location in the mammalian genome. And **Martin Evans** at Cambridge, working separately, had figured out how to derive and culture **mouse embryonic stem cells** — pluripotent stem cells that could be grown in a dish and then put back into a mouse embryo to contribute to a live mouse. Put those two innovations together and you have the recipe for the knockout mouse.

Let me walk you through the logic, because once you see it, the whole thing is gorgeous.

**Homologous recombination** is a natural cellular process. Cells use it during DNA repair and during meiotic recombination. If a cell has two pieces of DNA that share long stretches of identical sequence, the cell's repair machinery can line those two pieces up, swap material between them, and resolve the swap into the chromosome. The key word is _homologous_: the swap only happens between sequences that match. So if you design a piece of DNA that **matches the sequence of the gene you want to edit, but contains your designed modification in the middle**, the cell will sometimes — rarely, but sometimes — line your DNA up against the matching gene in its genome, swap your modified version in, and discard the original. You have, in effect, performed surgery on the genome. Replaced one allele with another. Without ever touching the rest of the chromosome.

The analogy I love: gene targeting is **in vitro genetic surgery**. You take a stem cell out of the embryo, you put it in a dish, you give it your engineered DNA construct, and you let the cell's own repair machinery do the precision work of swapping the engineered version into the correct chromosomal address. Then you take that surgically modified cell and put it back into a developing mouse embryo, and let it grow up into a mouse. The mouse you get carries the edit you designed, in every cell of its body.

\[Pause.\]

But here's the catch — and it's a big one. Homologous recombination, in mammalian cells, is **rare**. It happens maybe one in a million times when you deliver DNA to a cell. Far more often, the DNA either gets degraded, doesn't integrate at all, or integrates randomly somewhere else in the genome. So even if your construct is perfectly designed, the vast majority of cells you treat will either be untouched or have your DNA inserted in the wrong place. The challenge is: out of a million cells, how do you find the one that did the right thing?

The answer involves a very clever **selection scheme** built into the construct itself, which we'll spell out in detail in the next segment. But here's the basic idea. Embed inside your engineered DNA an **antibiotic resistance gene** — typically neomycin resistance, often abbreviated _neo_. After you treat your cells with the construct, you add the antibiotic G418 to the culture medium. Only cells that integrated the construct, anywhere in their genome, survive — because only those cells have the resistance gene. That alone gets you from one in a million to maybe one in a hundred. Then you screen those survivors to find the rare ones where the integration was at the right place — at the homologous locus — rather than at random. That second screening step traditionally used a clever counter-selection trick called **thymidine kinase negative selection**, which we'll discuss next segment, plus PCR or Southern blot screening of individual colonies. With both selections layered on, you can routinely find correctly targeted clones at a rate of maybe one in a hundred to one in a thousand survivors. Still rare, but tractable.

\[Pause.\]

Now the second piece of the puzzle. Even once you've got a correctly modified stem cell, you don't have a mouse. You have a single cell in a dish. To turn that cell into a mouse, you need to put it back into an embryo and let an embryo carry it through development. This is where **mouse embryonic stem cells** — ES cells — become critical.

Martin Evans's contribution was figuring out how to derive these cells. ES cells are pluripotent, meaning they can become any cell type in the body. You make them by taking a very early mouse embryo — a blastocyst, about 3.5 days after fertilization, when the embryo is a hollow ball of about 100 cells — and culturing the inner cell mass under conditions that keep the cells from differentiating. If you treat them right, they grow forever as undifferentiated stem cells. You can edit them, you can clone them, you can pick individual colonies — all the things you'd want to do with cells in a dish. And then, crucially, **when you put them back into a host blastocyst, they reintegrate into the developing embryo and contribute to every tissue of the resulting mouse, including, if you're lucky, the germline**.

That last bit — "including the germline" — is the part that matters. Because if your edited ES cells contribute to the gonads of the resulting mouse, then that mouse's sperm or eggs will carry your edit. And then you can breed that mouse, and its offspring will inherit the edit clean, in every cell of their bodies, including their own germlines. You've now got a heritable, breedable mouse line carrying the exact genetic edit you specified.

We'll spell out the breeding logic in Segment 5. For now, just plant this: **in vitro genetic surgery on a stem cell, followed by reinsertion into an embryo, followed by breeding for germline transmission**. That is the classical knockout recipe. Capecchi, Smithies, Evans. Nobel Prize 2007. The technique that turned the mouse from an animal we studied into an animal we programmed.

Next, let's open up the construct itself.

---

## SEGMENT 4 — The targeting vector: homology arms, neo, and thymidine kinase

So the central piece of equipment in classical gene targeting is the **targeting vector** — the piece of engineered DNA you deliver to the ES cells to make the edit happen. The targeting vector is, essentially, a plasmid designed with a very particular architecture, and once you understand that architecture, you understand the molecular logic of how the whole knockout process works.

A targeting vector has, at a minimum, four components. Let me walk through them in order.

**Component one: the 5-prime homology arm.** This is a piece of DNA, typically a few kilobases long, that exactly matches the sequence of the mouse genome just _upstream_ of the gene you want to edit. So if you're knocking out gene X, the 5-prime arm matches the genomic sequence on the left side of gene X. This is one of the two "alignment guides" that tells the cell's recombination machinery where to make the swap.

**Component two: the modification cassette.** This is the part in the middle — the part that's different from the wild-type genome. In a classical knockout, the modification cassette is a **neomycin resistance gene**, _neo_, inserted right into the middle of the gene you want to disrupt. The _neo_ cassette does two jobs simultaneously. First, it serves as the selectable marker — cells that have integrated the construct become resistant to the antibiotic G418, which lets you select for them. Second, by virtue of being plopped down in the middle of the gene of interest, it **physically disrupts that gene** — the resulting messenger RNA is broken, no functional protein is made, and you have achieved your knockout. The _neo_ cassette is both the recipe ingredient and the dish.

**Component three: the 3-prime homology arm.** Same as the 5-prime arm but on the other side — matching the genomic sequence just _downstream_ of the gene you're knocking out. The two arms together flank the modification cassette, and they're what tells the cell's recombination machinery: "swap this whole middle region between the two arms into the genome at the position the arms specify."

**Component four — and this is the cleverest bit — the thymidine kinase counter-selection gene.** Sitting just _outside_ the homology arms — usually at the very end of the construct, beyond the 3-prime arm. This needs some explanation.

Here's the issue the thymidine kinase gene solves. Homologous recombination, when it works, swaps in **just the part between the two homology arms**. The flanking pieces of the construct — including anything outside the arms — get discarded in the recombination. But what about cells that didn't do homologous recombination at all, and instead just stuffed the entire construct, end to end, into a random spot in the genome? Those cells have the _neo_ gene and so they survive G418 selection. But they're not what you want. You want only the cells that did the proper homologous swap.

This is where thymidine kinase, abbreviated TK, comes in. TK is an enzyme that, in the presence of a drug called ganciclovir, converts ganciclovir into a toxic product that kills the cell. So if a cell expresses TK, and you add ganciclovir to the medium, the cell dies. If the cell doesn't express TK, ganciclovir is harmless. So now imagine: you put TK _outside_ the homology arms in your construct. A cell that does proper homologous recombination swaps in only the bit between the arms, and **the TK gene falls off** — it's not integrated. That cell has _neo_ but not TK. It survives G418 (yes resistance) and survives ganciclovir (no TK). Both green lights. A cell that instead just stuffs the whole construct into a random spot keeps everything, including TK. That cell has _neo_ (survives G418) but also TK (gets killed by ganciclovir). Killed.

The analogy: thymidine kinase is **the dead man's switch on the construct**. If you integrated the whole thing willy-nilly, TK comes along and kills you. If you integrated only the part you were supposed to integrate — the bit between the arms — TK got left behind, and you live. **Positive selection on neo, negative selection on TK.** Together, the two of them dramatically enrich for cells that did proper homologous recombination, from maybe one in a million up to one in a hundred or one in a thousand of the survivors.

\[Pause.\]

So a typical knockout targeting vector looks, in order along the DNA, like this. You have a long backbone — a plasmid frame for growing the construct up in _E. coli_, with the usual origin of replication and ampicillin resistance, exactly like Segment 4 of the plasmids lecture. Then the linear piece you actually use for targeting is excised from the backbone. That linear piece, reading from left to right, has the TK gene, then the 5-prime homology arm, then the _neo_ cassette in place of the gene you're killing, then the 3-prime homology arm. You linearize it, you electroporate it into ES cells, you wait two days, you put on G418 and ganciclovir, and you sit on it for ten to fourteen days while colonies grow. Each surviving colony is a clone — every cell in it descended from a single founder cell that survived both selections. You pick the colonies into wells of a 96-well plate, expand them, and then screen them by PCR or Southern blot to confirm that the swap actually happened at the right genomic address rather than something weird.

A typical Capecchi-era knockout campaign in the 1990s might involve electroporating a few tens of millions of ES cells, picking a few hundred surviving colonies, and finding maybe five to ten that genuinely carried the targeted edit. Those five to ten clones — each one a piece of in vitro genetic surgery, confirmed at the molecular level — were your raw material for the next step.

\[Pause.\]

The big idea to leave this segment with: the targeting vector is **a piece of engineered DNA whose architecture encodes both the desired edit and the selection scheme for finding the rare cells that did the edit correctly**. Two homology arms tell the cell where to swap. The _neo_ cassette does the disruption and the positive selection. The TK gene outside the arms provides the counter-selection that filters out random integrations. Pull one of those elements out and the whole thing collapses; the rare correct event becomes invisible against the background. The whole design is a tribute to selection logic — exactly the same logic that makes plasmid cloning possible, scaled up to the mammalian genome.

Now let's take the targeted ES cell and turn it into a mouse.

---

## SEGMENT 5 — From edited cell to founder mouse: blastocyst injection, chimeras, and germline transmission

You have, in a 96-well plate, an ES cell colony that carries your edit. Now what? The cell is a single line of stem cells sitting in a dish. To get a mouse out of it, you have to put those cells back into an embryo and let the embryo's developmental program turn the whole thing into an animal. This step — the transition from cells in a dish to a living, breeding mouse — is the part that requires actual technical wizardry, and it took years to work out.

Here's the procedure, in the order it actually happens.

**Step one: harvest blastocysts from a host strain.** You superovulate a few female mice — give them hormones to make them release many eggs — mate them, and then surgically harvest the resulting embryos at the blastocyst stage, about 3.5 days post-fertilization. By convention, you use a host strain whose coat color will visibly differ from your ES cell strain. The classic recipe: host blastocysts from C57BL/6 (black mice), and ES cells from a 129 strain (agouti coat color, which looks brownish-tan). The coat color contrast is going to matter in a minute.

**Step two: inject the edited ES cells into the host blastocyst.** This is done under a microscope with extremely fine glass needles. You aspirate maybe ten to fifteen of your edited ES cells into a needle, you puncture the blastocyst, you inject those cells into the cavity in the middle of the blastocyst, and you withdraw. The host blastocyst now contains, mixed in with its own inner cell mass, ten to fifteen of your edited stem cells. Both populations of cells are pluripotent. Both will contribute to the developing embryo.

**Step three: transfer the injected blastocysts into a foster mother.** You take a separate female mouse, hormonally induced to be pseudo-pregnant — meaning her uterus is in the receptive state for implantation, even though she wasn't actually mated to produce her own embryos — and you surgically transfer your injected blastocysts into her uterus. The foster mother carries the embryos to term. About three weeks later, she gives birth to a litter of pups.

\[Pause.\]

Now here is the crucial bit. The pups born to that foster mother are **chimeras**. A chimera, in biology, is **a single organism made up of cells from two genetically different sources**. Each of your pups developed from a blastocyst that contained two populations of cells: the original host inner-cell-mass cells, which are C57BL/6 black, and your injected edited ES cells, which are 129 agouti. As the embryo developed, the cells from both sources mixed together and contributed to all the tissues — skin, gut, brain, blood, gonads. Different tissues, even different parts of the same tissue, end up being patchwork mixtures of cells from the two original sources.

The analogy: a chimera is **a mouse with two different sets of cells**. Your engineered ES cells contributed some tissues; the original blastocyst contributed others. If you're very lucky, your cells made it into the germline — meaning the gonads, the sperm-producing or egg-producing tissue, were colonized by your edited ES cells. If that happened, then this mouse, when it breeds, will produce offspring some of whom inherit your edit cleanly in every cell of their bodies.

You can often tell, just by looking, which of your chimeras have a strong contribution from your ES cells. Because the coat is a patchwork of black (host) and agouti (ES-derived) fur. A heavily chimeric mouse looks like a tortoiseshell cat — patches of black and patches of brown. A mouse with no ES cell contribution looks fully black. The more agouti you see, the more your cells contributed to the embryo, and the better your odds that they also contributed to the germline.

\[Pause.\]

**Step four: test for germline transmission by breeding.** You take your chimeric founder mouse — let's say a male, because males are easier to test, since they produce thousands of sperm — and you mate him to a C57BL/6 female. You wait three weeks, the female gives birth, and you look at the pups. If the father's germline is entirely C57BL/6 host-derived, all the pups will be fully black, because the cross is C57BL/6 dad × C57BL/6 mom. If the father's germline contains your edited ES cells, then some of the pups will be agouti — and **every agouti pup is a candidate carrier of your edit**. Because every agouti pup got its agouti allele from the father's 129-derived sperm, and that sperm came from an ES cell that carried your engineered modification.

You then genotype the agouti pups — PCR them, Southern blot them, whatever — to confirm they carry the edit at the right genomic location. Typically about half of the agouti pups will be heterozygous for the edit, which is exactly what you'd expect: the ES cells were heterozygous (you only edited one of the two alleles), so half their gametes carry the edit and half carry wild-type.

You now have, in your hand, **heterozygous founder mice carrying your edit, fully germline transmitted**. They look mostly normal, because they have one functional copy of the gene plus one knocked-out copy. To get the actual phenotype of full gene loss, you breed two heterozygotes together. Their offspring will be 25% wild-type homozygous, 50% heterozygous, and 25% **homozygous knockout** — both copies of the gene gone. Those homozygous knockout pups are the mice you've spent two years making. Their phenotype is your experiment.

\[Pause.\]

A typical timeline, in the classical era: design the targeting vector, three months. Electroporate ES cells, select, pick clones, characterize, four months. Inject blastocysts, foster, identify chimeras, three months. Breed for germline transmission, three months. Intercross to homozygosity, three months. Total: about sixteen months, from idea to first homozygous knockout mouse. A year and a half. That was the cost of a single gene's worth of causal inquiry in a whole mammal.

The big idea: the chimera step is the magic that takes _in vitro_ surgery on a cell and turns it back into an _in vivo_ organism. It works because ES cells are pluripotent, and because the embryo's developmental machinery is happy to accept additional founder cells, mix them in, and let them participate in building the body. Once the cells make it into the germline, the edit becomes heritable, and the mouse becomes a strain — a defined, breedable, reproducible genetic line that can be shipped around the world and used by anyone.

Now we've made a knockout. The gene is gone from the entire mouse, from the moment of fertilization. That's powerful — but it's also limited. What if your gene is essential for development, and the knockout pup dies in utero? Or what if you want to ask, "what does this gene do _in adult brain_, after it's already done its job in development?" For those questions, you need a much more refined tool: the conditional knockout.

---

## SEGMENT 6 — The conditional knockout: floxed alleles and Cre-Lox

Up to this point, every knockout we've described has been what we call a **constitutive knockout** — the gene is deleted from every cell of the mouse, from the moment of fertilization, for the entire life of the animal. That's a powerful experiment when you want a clean answer to "what does this gene do, period." But constitutive knockouts have two big limitations.

**Limitation one: embryonic lethality.** Many genes are essential for early development. If you knock them out from fertilization, the embryo dies in the womb, often very early, and you never get an adult mouse to study. You've learned only that the gene is essential — which is fine, but it's frustrating, because what you really wanted to know is what the gene does in the adult heart, or the adult brain, where you suspected it had some interesting role. The constitutive knockout never lets you ask that question, because the mouse is dead before it has an adult heart.

**Limitation two: tissue specificity.** Many genes do different jobs in different tissues. The protein insulin-degrading enzyme, for example, may have one role in pancreatic beta cells and a completely different role in neurons. If you constitutively knock it out, both roles vanish at once, and you can't tell which phenotype came from which tissue. You need a way to say: delete this gene only in the pancreas. Or only in mature neurons. Or only in skin cells. Or only in T cells.

To solve both of these problems, we built **the conditional knockout** — a mouse in which the gene of interest is deleted only in a specific cell type, often at a specific time, leaving the rest of the body untouched. And the molecular tool that made conditional knockouts possible — that turned them from an exotic curiosity into a routine technique — is the **Cre-Lox system**.

I want to be brief about Cre-Lox today because there is a whole separate book in this series devoted to it; if you want the full mechanistic story, read the Cre-Lox lecture. But you need the basics here, because conditional alleles are now the dominant form of mouse engineering and you can't get through this lecture without understanding them.

\[Pause.\]

Here's the system, in one paragraph. **Cre** is a recombinase enzyme — a protein that, when present in a cell, recognizes a specific 34-base-pair DNA sequence called a **loxP site** and excises whatever DNA sits between two loxP sites pointing the same direction. So if a piece of DNA in your genome is flanked by loxP sites — we call this being _"floxed"_ — then in any cell expressing Cre, that flanked piece will be cut out and removed. In any cell not expressing Cre, the floxed piece sits there indefinitely, intact and functional. Cre is a tissue-specific genetic scissors. Wherever Cre is on, the scissors snip. Wherever Cre is off, nothing happens.

So the conditional knockout strategy goes like this. Instead of knocking the gene out for real, you engineer a mouse in which the gene is flanked by loxP sites — a **floxed allele**. The floxed allele is **functionally identical to the wild-type allele**, because the loxP sites are short and don't disrupt anything. The mouse that carries it looks completely normal. The gene works fine.

Then you cross that floxed mouse to a second mouse, called a **Cre driver line**, that expresses Cre recombinase only in the tissue you care about. Maybe the Cre driver expresses Cre only in liver cells, controlled by a liver-specific promoter. Maybe it expresses Cre only in oligodendrocytes. Maybe in mature B cells. Whatever the tissue you want. There are now hundreds of well-characterized Cre driver lines, distributed by stock centers, each one targeting a different cell type.

When you cross the floxed mouse to the Cre driver, the offspring carry both: the floxed gene and the Cre transgene. In every cell of those offspring, the floxed gene sits there intact — except in the specific cells where the Cre driver is active. In those cells, Cre gets made, finds the loxP sites, and excises the flanked region of the gene. The gene is now functionally knocked out **in that tissue only**. The rest of the mouse is wild-type.

The analogy: **knockout deletes the gene everywhere from birth; conditional deletes it only in a specific tissue, often only when you flip a switch.** It's the difference between turning off the electricity to the whole house versus flipping just one light switch in one room.

\[Pause.\]

And there's a further refinement that's now standard practice: **inducible Cre**. The plain tissue-specific Cre we just described turns on whenever the tissue-specific promoter turns on, which might be early in development. That's not always what you want. Sometimes you want the gene to be present during development, and only deleted later, in the adult animal, on a day you choose.

The trick: a version of Cre called **CreER**, which is a fusion protein of Cre and a mutated estrogen receptor. CreER, when made by the cell, sits inactive in the cytoplasm — the estrogen receptor portion holds it captive. The only way to activate it is to give the mouse a drug called **tamoxifen**. Tamoxifen binds the engineered estrogen receptor, releases CreER, and lets it move into the nucleus where it can act on its loxP sites. So in a mouse carrying a CreER driver, the floxed gene stays intact until you give the mouse tamoxifen. The day you inject tamoxifen — typically a few days of injections — is the day the gene gets deleted. Before that, the mouse is normal. After that, the gene is gone in whichever cells were expressing CreER.

This gives you **temporal control on top of spatial control**. Delete the gene only in mature neurons, and only after the mouse is six months old. Delete it only in beta cells, and only on the day you start the diet experiment. The conditional knockout has gone from a coarse tool to a precision instrument.

\[Pause.\]

The big idea to leave this segment with: floxed alleles plus Cre drivers — possibly inducible Cre drivers — have transformed mouse genetics. The constitutive knockout is now the exception rather than the rule. For most genes that have been seriously studied in the past fifteen years, the relevant mouse model is a floxed allele plus a panel of Cre drivers, allowing the researcher to interrogate gene function in any tissue, at any time, in adult animals that develop normally before the perturbation begins.

Now let's spend a little more time on the Cre driver lines themselves, because they are a community resource of staggering scale, and they're worth a segment.

---

## SEGMENT 7 — Inducible Cre, tissue-specific drivers, and the catalog of cell types

A conditional knockout is only as good as the Cre driver you cross to. The floxed allele is half the equation; the Cre driver is the other half, and it's the one that determines where and when your gene actually gets deleted. So the question of "what Cre drivers exist?" turns out to be a really practical question. The answer, in the modern era, is "an enormous number, indexed by cell type, distributed by stock centers, characterized in great detail."

Let me give you a taste of what's out there.

The simplest Cre drivers use a tissue-specific promoter to express Cre. Take the **albumin** promoter, which is active essentially only in hepatocytes — liver cells. Put Cre downstream of the albumin promoter, integrate that construct into the mouse genome as a transgene, and you have a mouse line that makes Cre only in liver. That line is called **Alb-Cre**. Cross it to any floxed mouse and you get a liver-specific knockout. Want a knockout in neurons? Use **Nestin-Cre** (early neural progenitors) or **Syn1-Cre** (mature neurons) or **CamKII-Cre** (forebrain excitatory neurons). Want one in T cells? **Lck-Cre** (early T-cell lineage) or **CD4-Cre** (mature CD4 T cells). Want it in cardiomyocytes? **Myh6-Cre**. In skeletal muscle? **MCK-Cre**. In intestinal epithelium? **Villin-Cre**. In glia? **GFAP-Cre**.

For each of these, the promoter drives Cre expression specifically in the indicated cell type, and only in that cell type. There are now well over a thousand Cre driver lines deposited in mouse repositories, characterized for which tissues they target, when in development they turn on, how complete the recombination is in different cell populations. You can essentially shop for the cell type you want to perturb. The Allen Brain Institute alone maintains an enormous catalogue of Cre lines targeting different neuronal subtypes — interneurons, projection neurons, specific brain regions, specific developmental windows.

\[Pause.\]

And then there's the inducible layer. Many of the most useful Cre drivers in modern research are not plain Cre but **CreER** — the tamoxifen-inducible version. **Ubc-CreER**, expressed broadly but inactive until tamoxifen. **Cdh5-CreER**, active in endothelial cells. **Pdx1-CreER**, active in pancreatic progenitor cells, often used to delete genes specifically in the pancreas at chosen times. The naming convention is generally that the gene name appears first, followed by Cre or CreER to indicate the recombinase variant.

The combinatorial power here is enormous. You have a floxed allele of gene X. You can cross it to Alb-Cre and ask, "what happens when X is missing from the liver?" Same allele, cross to CD4-CreER, give tamoxifen at three months: "what happens when X is acutely deleted from adult T cells?" Same allele, cross to Nestin-Cre: "what happens when X is missing from the developing nervous system?" Each cross is a different experiment. The floxed allele is a chassis, and each Cre driver is a different question you can ask of it.

\[Pause.\]

There's a beautiful corollary to all this, which I want to flag because it explains a lot of what you see in the modern literature. Once a community-funded floxed allele exists for a gene, every lab in the world can ask their own custom question about it just by selecting a different Cre driver. So when the International Mouse Phenotyping Consortium — which we'll meet in Segment 14 — generates a floxed allele for a gene, they aren't producing one knockout. They're producing the raw material for a hundred different conditional knockouts, each one waiting for someone to think of the right Cre cross. The floxed mouse is the platform; the Cre crosses are the apps.

There are even further layers of sophistication. **Tetracycline-inducible systems**, where gene expression can be turned on and off with doxycycline. **Two-component Cre systems**, where Cre activity requires both a tissue-specific promoter _and_ a drug, giving you double specificity. **Split-Cre systems**, where Cre is reconstituted only in cells that express both halves of the protein, allowing intersection of two cell types. The Cre-Lox system has, over thirty years, accumulated a whole ecosystem of variants that allow finer and finer control over where and when genes are deleted.

\[Pause.\]

The big idea: the Cre driver toolkit is **the operating system layer on top of the floxed-allele substrate**. The floxed allele tells you _what_ to delete. The Cre driver tells you _where_ and _when_. Modern mouse genetics is, in large part, the art of combining the right floxed allele with the right Cre driver to ask the right question. And that combinatorial space is now vast — thousands of Cre drivers, thousands of floxed alleles, all interbreedable.

Now let's expand the toolkit a different way. What if you don't just want to delete a gene — what if you want to **replace** it with something else?

---

## SEGMENT 8 — Knockins: replacing one gene with another, and reporter alleles

So far we've been talking about subtraction — taking a gene out of the genome. But the same gene-targeting machinery you use to knock a gene out can equally well be used to swap one gene **in**. This is called a **knockin**, and it's the other major use of homologous recombination in mouse engineering.

The targeting vector for a knockin looks just like the one for a knockout, except that the modification cassette in the middle, instead of being a simple disrupting _neo_, is whatever you want to insert. Maybe it's a point mutation in the gene — you want to know what happens when you swap an alanine for a glycine at residue 42, the way it appears in a human disease. Maybe it's an entirely different gene altogether — you want to put the human version of the gene into the mouse, so that the mouse expresses the human protein from the natural mouse regulatory elements. Maybe it's a reporter gene — you want every cell that would have expressed gene X to instead make a fluorescent protein or an enzyme you can stain for, so you can track which cells in the mouse express this gene at what times.

The mechanism is identical to the knockout. You design homology arms flanking your desired insertion. You include a selection cassette so you can find correctly targeted cells. You do everything the same way Capecchi and Smithies did. The only difference is what you put between the arms.

\[Pause.\]

The reporter knockin deserves its own moment, because it's been transformative. The classical reporter is **lacZ**, the bacterial gene encoding beta-galactosidase — exactly the same enzyme that gives blue-white screening on agar plates. If you knock _lacZ_ into a mouse gene, replacing the gene's own coding sequence with the lacZ coding sequence, then every cell in the mouse that would have transcribed gene X now transcribes lacZ instead. You can take a piece of that mouse's tissue, fix it, stain it with a chromogenic substrate called X-gal — yes, the same X-gal as on the bacterial plate — and any cell that's expressing your knockin will turn vivid blue. You can map, with single-cell resolution, exactly where in the mouse this gene was active and at what stage of development.

The fluorescent equivalent — and now the more common one — is **GFP** or one of its colored variants. Knock GFP into the mouse gene, and every cell expressing the gene glows green. Add a confocal microscope, you can watch these cells in living tissue. Add a flow cytometer, you can sort them out for further analysis. Whole atlases of gene expression have been built this way: take every interesting gene, knock GFP into one allele, look at the mouse. The Allen Brain Institute's neural cell atlases, the Gene Expression Database at Jackson, much of developmental gene expression mapping — all built on knockin reporters.

There's a subtlety worth noting. A **knockin reporter** can be designed in two ways. **One**, where the reporter completely replaces the gene's coding sequence — you've created a reporter and a knockout at the same time, because the gene is no longer functional. The mouse, heterozygous for the reporter, can still express the gene from its remaining wild-type allele; the homozygous reporter mouse is a knockout. **Two**, where the reporter is added to the gene without disrupting it — using a 2A peptide linker, or an internal ribosome entry site, or fusing the reporter to the gene's own protein. In that case the gene is still functional; you just get a fluorescent readout of its activity. Both strategies are used; which one you pick depends on whether you care more about gene function or about labeling.

\[Pause.\]

And then there's the humanization knockin, which is going to come back when we talk about humanized mice in Segment 12. You can replace the mouse coding sequence of a gene with the human coding sequence of the same gene, leaving all the mouse regulatory elements — the promoter, the enhancers, the introns — intact. The result is a mouse that expresses the human protein from the natural mouse regulatory environment, in the same tissues at the same times as the mouse would have expressed its own version. This is enormously useful for drug development. If you're making a therapeutic antibody that targets a human protein, you need a mouse expressing that human protein in order to test the antibody. A knockin that swaps mouse for human gives you exactly that.

The big idea: knockin is the symmetric partner to knockout. **Knockout subtracts; knockin substitutes.** Both use the same _in vitro_ surgery on ES cells, the same homologous recombination logic, the same selection schemes. They're two flavors of the same fundamental capability — write-access to a defined locus in the mammalian genome. With knockouts you ask "what does the gene do when it's gone?" With knockins you ask "what does the gene do when it's something else?" Both questions become answerable through the same machinery.

Now let's step back in time, because there's an older mouse engineering method that predates all of this — and which is still in use today for certain kinds of experiments. It's called transgenesis, and we'll meet it next.

---

## SEGMENT 9 — Transgenic mice: pronuclear injection and random integration

Before gene targeting in ES cells became practical in the late 1980s, there was an older technique for putting new DNA into mice. It was simpler, faster, and less precise — and it's still in use today when you don't need the precision of homologous recombination. It's called **transgenesis by pronuclear injection**, and the resulting animals are called **transgenic mice**. It's important to distinguish "transgenic" from "knockout" in your head — they get conflated colloquially, but they're different techniques with different capabilities.

The procedure, worked out in the early 1980s by Brinster, Palmiter, Gordon, Ruddle and several others, goes like this. You take a fertilized mouse egg — a single-cell embryo, where the male and female pronuclei have just come together but not yet fused. You hold the egg in a glass pipette under a microscope. With a much finer needle, you puncture the egg, slide the needle into one of the pronuclei, and inject a tiny volume — picoliters — of DNA solution. The DNA you inject is the gene you want to add: typically a piece of foreign DNA with its own promoter, capable of expressing a protein. You withdraw the needle, release the egg back into the dish, and let it continue developing. You then transfer it into a foster mother and wait three weeks for the pups.

Most pups born from this procedure are wild-type — the injected DNA was lost, degraded, or simply didn't integrate. But in a small fraction of pups, the injected DNA integrated **randomly** into the mouse genome, at some location the experimenter didn't choose, and the pup carries this new piece of DNA as a heritable addition to its chromosomes. These are the **transgenic founders**. You can identify them by PCR — you screen each pup for the presence of your injected DNA. You breed each transgenic founder to expand the line.

\[Pause.\]

The big distinction from gene targeting: transgenic mice have your DNA inserted at a **random location** in the genome. You did not choose the address. The mouse's endogenous version of the gene is still there, untouched. You've just added an extra copy of something, somewhere. So transgenesis lets you _add_ a gene to a mouse — overexpress it, express it in a place it normally wouldn't be, express a mutant version alongside the wild-type — but it cannot replace or delete the endogenous gene. That's the limitation.

And there's a more subtle limitation. Because integration is random, the **chromosomal context** of your transgene varies from one founder line to another. One founder might have your transgene inserted in a region of open chromatin where the local environment supports robust expression; another might have it inserted in a region of heterochromatin where expression is silenced. Two founder lines that look genetically identical on paper — both carrying your transgene — can behave very differently as mice, because of where the transgene happened to land. This is called **position effect**, and it's the chronic headache of transgenesis. You typically have to make several independent founder lines and test each one, picking the one with the cleanest, most reproducible expression pattern.

The targeting precision is sloppy. The expression behavior is variable. So why is anyone still using transgenesis at all?

Two main reasons. **One: it's much faster than gene targeting**, at least in the pre-CRISPR era. You can make a transgenic mouse in about three months — pronuclear injection one day, foster mother three weeks, screen founders one week, breed up the line. No ES cells, no homologous recombination, no two-year timeline. **Two: it's the natural way to introduce regulatory elements driving the expression of a transgene**. If you want to overexpress GFP under the control of a specific promoter — exactly what you do to make a Cre driver line, by the way — transgenesis is the obvious method. You just inject the promoter-Cre construct, screen for founders, characterize their expression patterns, and pick the line where the promoter works as expected.

In fact, **most Cre driver lines are transgenic, not gene-targeted**. The Alb-Cre line, the Nestin-Cre line, most of the classical drivers — these were made by pronuclear injection of a promoter-Cre construct. The randomness is mostly fine, because what you care about is that the construct expresses Cre with the right tissue specificity, not that it's at any particular genomic address.

\[Pause.\]

The big idea to leave this segment with: transgenesis is **the older, simpler, additive technique**. You inject DNA, it integrates randomly, you get an extra copy of something added to the mouse. It cannot delete or replace the endogenous gene — for that you need gene targeting — but it can add new genes, add reporters, add Cre drivers, add overexpression constructs. It's been quietly central to the field for forty years, and it's worth understanding because you'll see it constantly in mouse model papers, often paired with gene-targeted alleles in the same experiment.

We've now covered the two foundational mouse engineering methods: gene targeting via homologous recombination in ES cells, and transgenesis via pronuclear injection. Everything else in this lecture is going to build on those two. We're going to take a break here, because we've covered the historical and conceptual foundations, and the rest of the lecture turns to specific applications — humanized mice, cancer models, the consortia, the limitations, the frontiers. When we come back, we'll start with the biggest recent shift in the field: how CRISPR has compressed the whole workflow.

\[BREAK\]

---

## SEGMENT 10 — BAC transgenics and the move toward more physiological expression

Welcome back. Before we hit CRISPR — the technology that compressed the workflow — I want to fill in one more piece of the classical-era toolkit, because it bridges the gap between the random transgene of Segment 9 and the precision allele of Segments 4 and 8. That bridge is the **BAC transgenic**.

Recall the limitation of standard transgenesis. You inject a small DNA construct — usually a few kilobases of promoter plus the gene you want to express — and it integrates randomly. The expression of the transgene depends on the local chromatin environment at the integration site. Position effects make different founder lines behave differently. And, importantly, your transgene only contains the regulatory elements you bothered to include. If you used the first two kilobases of the promoter, you got those two kilobases of regulation — but the gene's natural expression pattern probably depends on enhancers that sit fifty kilobases or a hundred kilobases away in the natural locus, enhancers you didn't include. Your transgene expression is, at best, a partial caricature of the natural gene's expression.

The fix, developed in the late 1990s, was to use **bacterial artificial chromosomes** — BACs — as the carrier for your transgene. A BAC is a low-copy plasmid in _E. coli_ that can stably hold very large pieces of DNA — typically 100 to 300 kilobases. Big enough to contain not just the gene of interest, but most or all of its flanking regulatory elements, including distant enhancers. You can engineer a BAC in _E. coli_ to make precise modifications — knock in GFP, knock in Cre, swap mouse for human — and then take the entire 200-kilobase BAC and inject _that_ as your transgene.

The advantage: because the BAC contains all the natural regulatory context, **expression of the BAC transgene tends to recapitulate the endogenous gene's expression pattern much more faithfully** than a short transgene would. The position effects of random integration matter less, because the BAC itself has so much of the natural genomic neighborhood that it's largely insulated from the surrounding chromatin. A BAC transgenic for, say, a neuronal subtype-specific gene tends to express in exactly the right neurons, at the right developmental time, at roughly the right levels.

\[Pause.\]

BAC transgenics have been particularly important for **neuronal Cre drivers**. The brain is full of cell types defined by exquisite combinations of gene expression — interneurons, projection neurons, dopamine neurons, neurons of particular cortical layers — and getting Cre to express in just one of those subtypes requires the full natural regulatory context, not just a stub of promoter. The Gensat project at Rockefeller and the Allen Brain Institute's Cre line collection are full of BAC transgenic lines, each one targeting Cre to a specific neuronal subtype with high fidelity.

The mechanism for engineering a BAC, by the way, isn't classical restriction-enzyme cloning — the BAC is too big for that. It's done by a technique called **recombineering** — recombination-mediated genetic engineering — where you use phage-derived recombination enzymes inside _E. coli_ to make precise edits to the BAC. There's a whole separate book in this series on recombineering; if you want the details, look there. The relevant point here is that BACs are engineered, in bacteria, and then the whole engineered BAC is injected pronuclearly into mouse zygotes as the transgenic construct.

\[Pause.\]

The big idea: BAC transgenesis is **the upgrade from short-construct transgenesis that gives you more physiological expression**, at the cost of a more elaborate engineering process. It's a workhorse for reporter lines, Cre drivers, and any application where you want a transgene to behave as much like the endogenous gene as possible. It's still in widespread use today, even alongside CRISPR-edited knockins, because for some applications — particularly large reporter cassettes or full humanizations — sticking the whole 200-kilobase context onto a transgene is simpler than trying to knock it all into the endogenous locus.

Now let's get to the technology that, more than any other in the past decade, has changed how mouse models are made.

---

## SEGMENT 11 — CRISPR in the zygote: the 10x speedup

If gene targeting in ES cells was the technique that turned mice into programmable mammals, then **CRISPR in the zygote** is the technique that turned the programming from a sixteen-month project into a three-month project. It is, by most measures, the single biggest practical advance in mouse model production in the past thirty years. Let me walk you through what changed.

The classical workflow, as we've laid out: design a targeting vector with homology arms and selection cassettes, transfect ES cells, select for G418 resistance and against TK, pick colonies, screen for correct integration, inject correct colonies into blastocysts, foster, identify chimeras, breed for germline transmission, intercross to homozygosity. Sixteen months. Multiple cell-culture steps, multiple selection steps, multiple breeding rounds, multiple opportunities for things to go wrong.

The CRISPR workflow, in its simplest form: design a guide RNA targeting your gene of interest. Mix the guide RNA with the Cas9 protein and, if you want a knockin, a piece of donor DNA carrying your desired edit. **Inject the whole mix directly into a fertilized one-cell mouse zygote.** Transfer the zygote into a foster mother. Wait three weeks. The pups born from that foster mother — the **founders** — carry edits directly in their germline, because the editing happened in the very first cell of the embryo, before any of the lineage decisions had been made. Skip ES cells entirely. Skip the chimera step entirely. Skip the breed-for-germline-transmission step entirely. You go straight from "I have a hypothesis" to "I have a heritable edit in a live mouse," in about three weeks of work plus the gestation period.

The compression is remarkable. **A 16-month project becomes a 3-month project.** Sometimes faster.

\[Pause.\]

Let me explain the molecular logic so you see why it works. CRISPR-Cas9, which has its own dedicated lecture in this series, is a bacterial system in which a protein — Cas9 — uses a short RNA molecule — the guide RNA — to find a specific 20-base-pair sequence in DNA and cut both strands. You design the guide RNA to match the sequence in the gene you want to edit. Cas9 makes a double-strand break at that position. The cell, faced with a double-strand break, repairs it using one of two pathways: **non-homologous end joining**, which sloppily seals the cut, usually inserting or deleting a few base pairs and thereby disrupting the gene — this gives you a knockout; or **homology-directed repair**, which uses an external piece of donor DNA as a template to repair the break precisely — this gives you a knockin.

So if you inject Cas9 plus guide RNA into a zygote, the zygote's DNA gets cut at your target, and the cell's own repair machinery makes the edit. If you want a knockout, you don't even need to supply donor DNA — the sloppy NHEJ repair will introduce small indels that disrupt the gene. If you want a precise knockin, you co-inject a single-stranded or double-stranded donor with the desired sequence and flanking homology, and HDR uses it as the template.

\[Pause.\]

The key thing — the thing that makes this so much faster than the ES cell route — is that **the edit happens in the zygote itself**. The very first cell of the embryo. Which means that when that zygote divides and develops, every cell in the resulting mouse is derived from a single edited cell. The mouse is, with high probability, a clean carrier of the edit throughout its body, including the germline. No chimera. No selection for germline transmission. The founder mouse you get is already, in effect, a heterozygous (or sometimes homozygous, if both alleles got edited) carrier ready to breed.

There are wrinkles, of course. CRISPR in zygotes is not perfectly clean. Sometimes the editing happens at the 2-cell or 4-cell stage rather than the 1-cell stage, producing a mosaic founder — different cells in the mouse carry different versions of the edit, like a chimera but at finer grain. You usually have to breed the founder to a wild-type mate and look at the offspring to confirm a clean, heritable edit. There are also **off-target effects** — the guide RNA can sometimes direct Cas9 to cut at similar sequences elsewhere in the genome, causing unintended edits. Modern protocols use carefully designed guides, high-fidelity Cas9 variants, and sequencing checks to minimize and detect these.

But despite the wrinkles, the speedup is real. **Three months instead of sixteen.** And it's not just speed — it's also cost, and accessibility. Pronuclear injection facilities and ES cell facilities used to be specialized resources at major institutions; CRISPR zygote injection is now within reach of smaller labs and core facilities everywhere. The number of new mouse models being produced per year has gone up by roughly an order of magnitude in the past decade, and a substantial fraction of that increase is CRISPR.

The analogy I love: CRISPR mouse making is **the ten-x speedup. Instead of months in ES cells, you electroporate or inject Cas9 into a zygote and grow up the founder mice in three weeks instead of a year.** The whole intermediate detour — ES cell culture, selection, chimeras, germline transmission — gets compressed into the zygote itself.

\[Pause.\]

A few things to flag. First, ES cell targeting is not dead. For very complex edits — multi-kilobase knockins, conditional alleles where you need precise loxP placement, situations where you want extensive characterization of the targeted clone before going to mice — gene targeting in ES cells remains useful. CRISPR works best for relatively small edits: knockouts via small indels, point mutations, modest-sized knockins. For the biggest, most elaborate edits, the ES cell pipeline still has advantages.

Second, the combination of CRISPR and ES cells is its own thing. You can use CRISPR _inside_ ES cells to vastly accelerate the targeting step. Then the cells get injected as usual. That hybrid approach is now common for complex alleles.

Third — and this is conceptually important — CRISPR has made it practical to edit **multiple genes simultaneously**. With ES cells, putting three edits into one mouse meant either doing three sequential rounds of targeting or breeding three single-edit mice together over multiple generations. With CRISPR, you can inject guides for three different genes into a single zygote, and a substantial fraction of the resulting founders will carry edits in all three. Multi-gene mouse models — which used to take five or six years to construct — now take months.

The big idea: CRISPR-in-the-zygote has compressed the mouse model production pipeline by an order of magnitude. It has democratized model making, expanded the scale of what's possible, and made multi-gene experiments routine. Combined with the floxed-allele/Cre-driver substrate, it represents the modern toolkit. Almost every new mouse model being made today is made with CRISPR somewhere in the workflow.

Now let's move to a particular kind of mouse that's become especially important in modern medicine: the humanized mouse.

---

## SEGMENT 12 — Humanized mice: NSG and the immuno-oncology workhorse

Here is a question that drives a substantial fraction of modern biomedical research. You're developing a drug that activates the human immune system — say, a checkpoint inhibitor antibody, the class of drugs that has revolutionized cancer immunotherapy. The drug binds to a specific human immune receptor. The mouse has its own version of that receptor, but it's different enough from the human one that your drug doesn't bind. How do you test the drug _in vivo_, in a real mammalian body, when the target you care about is human-specific?

The answer is the **humanized mouse**, and the workhorse of the field is a strain called **NSG**, which stands for **NOD scid gamma**. This is a mouse strain whose own immune system has been crippled by a combination of mutations — the NOD background, the scid mutation, and the gamma chain knockout — so that the mouse cannot mount any of its own immune responses. T cells: gone. B cells: gone. Natural killer cells: gone. The mouse is essentially immunocompromised to an extreme degree.

That sounds bad. But here's the thing. An immunocompromised mouse can be **engrafted with human cells** without rejecting them. Take human hematopoietic stem cells — bone marrow stem cells from a human donor — and inject them into an NSG mouse. Because the mouse has no immune system of its own, it doesn't reject the human cells. The human stem cells colonize the mouse's bone marrow, differentiate into all the various blood cell lineages, and over a period of weeks **reconstitute a functional human immune system inside the mouse**. The mouse now has human T cells, human B cells, human dendritic cells, human macrophages — circulating in mouse blood, populating mouse lymph nodes, doing human immune things inside a mouse body.

The analogy: a humanized mouse is **an immunodeficient mouse reconstituted with a human immune system — a mouse host carrying a human passenger that runs the immune compartment.** It lets you test human-specific immunotherapy in a mouse animal model.

\[Pause.\]

The use cases are enormous, and they explain why NSG mice have become one of the highest-volume specialty strains in the world. Cancer immunotherapy: implant a human tumor into a humanized mouse, then treat with your checkpoint inhibitor and watch the human T cells attack the human tumor in a living animal. HIV research: humanized mice can be infected with HIV, which doesn't normally infect mice because it requires human CD4 and CCR5 — but in a humanized mouse with human T cells, HIV infects, replicates, and depletes those T cells exactly the way it does in patients. Hepatitis C research: similarly, HCV requires human hepatocytes, so humanized livers in NSG mice enable HCV studies. Stem cell research, vaccine testing, hematological malignancies — the list goes on.

The variants are proliferating. **NSG-SGM3**, which carries human cytokines knocked into the mouse genome to support better human myeloid cell engraftment. **MISTRG mice**, with multiple human cytokines for fully reconstituted human innate immunity. **HLA-transgenic NSG mice**, where the mouse also carries human HLA genes to support proper antigen presentation. **PDX models** — patient-derived xenografts — where you take a tumor directly from a patient and grow it in an NSG mouse, retaining the original tumor's heterogeneity for personalized drug screening. Each of these is a refinement of the basic idea: a mouse host carrying defined human components, used to probe human biology in a whole-organism context.

\[Pause.\]

The limitations are also real. Humanized mice are not humans. The engrafted human immune system never quite functions as it does in a person — the cytokine environment is partly mouse, the lymph node architecture is mouse, the bone marrow niches are mouse. The reconstitution is variable from animal to animal depending on the donor cells, the age of the recipient, the conditioning regimen. The myeloid lineages — macrophages, neutrophils, dendritic cells — engraft much less well than the lymphoid lineages, which is why so much work has gone into adding human cytokine knockins. And of course the rest of the mouse — the liver, the lungs, the gut, the nervous system — is still all mouse, so any human-specific biology that requires interaction between the immune system and other tissues is going to be an imperfect approximation.

But it's the best we have. For a huge swath of immunology and immuno-oncology research, the humanized mouse is **the bridge between cell-culture experiments and human clinical trials**. Drugs that work in humanized mice are far more likely to work in patients than drugs that work only in conventional mouse models. The whole field of cancer immunotherapy, which has produced the most important new oncology drugs of the past fifteen years, has been driven in large part by humanized mouse studies.

The big idea: the humanized mouse is the engineered solution to the species-specificity problem. **An immunocompromised mouse, plus human stem cells, equals a mouse-bodied animal carrying a human immune compartment.** Limited but powerful. The immuno-oncology workhorse.

Now let's look at another specialty class of engineered mice that has been just as transformative in cancer research: the GEMM, the genetically engineered mouse model of tumor formation.

---

## SEGMENT 13 — GEMMs: induced cancer in a defined genetic context

A GEMM — **genetically engineered mouse model** — is a mouse engineered to develop cancer in a controlled way. Specifically, a mouse in which one or more well-known oncogenes or tumor suppressor genes have been engineered into the genome in a form that lets the experimenter trigger tumor formation at a chosen time, in a chosen tissue. GEMMs are the workhorses of modern preclinical cancer research, and the design philosophy behind them is one of the most elegant applications of the Cre-Lox machinery we discussed earlier.

Let me walk through the canonical example, because once you see one, you see all of them. Tyler Jacks's laboratory at MIT, in the early 2000s, built a series of GEMMs based on the K-Ras oncogene, one of the most commonly mutated genes in human cancer. The version of K-Ras that's oncogenic carries a specific mutation: glycine at position 12 changed to aspartate, glutamate, or some other amino acid. This **KrasG12D** allele drives uncontrolled cell proliferation when expressed. Inject a piece of KrasG12D DNA into any cell and you might transform it into something tumor-like.

But you can't just constitutively turn KrasG12D on in a mouse from fertilization — the mouse would die in utero, because activated Ras during development is catastrophic. You need to keep the oncogene silent during development, and turn it on only when and where you want a tumor. The Cre-Lox trick is perfect for this.

Here's the construct. The Jacks lab built a knockin allele where, sitting in front of the KrasG12D coding sequence, there's a **loxP-flanked transcriptional stop cassette** — a piece of DNA with a strong polyadenylation signal that aborts transcription. In an unmodified cell, transcription starts, runs into the stop cassette, and terminates. No Kras protein is made from that allele. The gene is functionally silent.

Now, deliver Cre to a cell. Cre recognizes the loxP sites flanking the stop cassette and excises it. The stop signal disappears. Transcription now runs through the gene and produces full-length KrasG12D protein. The oncogene is on. The cell starts proliferating.

The whole construct is sometimes written as **Kras-LSL-G12D**, where LSL stands for "lox-stop-lox" — the floxed stop cassette. In any cell that gets Cre, the LSL is removed and KrasG12D turns on. In any cell without Cre, the allele is silent.

\[Pause.\]

The application: you cross Kras-LSL-G12D mice to a Cre driver line, and you get a mouse in which KrasG12D turns on specifically in the Cre-driver tissue. Or — and this is the more common modern approach — you don't even use a Cre driver line. Instead, you take an adult mouse carrying just the Kras-LSL-G12D allele, and you **deliver Cre directly to a tissue using a virus**. For lung cancer, you intratracheally instill a Cre-expressing adenovirus into the mouse's lungs. The adenovirus infects a small patch of lung epithelial cells, those cells express Cre transiently, Cre excises the LSL cassette in those cells, and KrasG12D turns on. A few weeks later, those cells have proliferated into lung adenocarcinomas — tumors that look, histologically and molecularly, remarkably like human lung adenocarcinoma. You have, in effect, induced lung cancer in adult mice in a defined genetic background, at a defined time, in a defined tissue. You can now study how that cancer grows, what drugs slow it, what immune responses it triggers.

The Jacks lab papers using this exact strategy from the early 2000s are foundational. They allowed cancer biologists to do, in mice, experiments that previously could only be done in xenograft models — implanted human tumors — which lack the natural microenvironment, the natural immune context, and the natural temporal development of cancer. The GEMM has the cancer arising from the mouse's own cells, in the mouse's own tissue, in the mouse's own immune environment. It is much closer to how cancer actually emerges in patients.

\[Pause.\]

The toolkit has expanded enormously. You can combine multiple LSL-controlled oncogenes and conditional tumor suppressor knockouts in the same mouse. The classic combo is KrasG12D-LSL plus a floxed p53 allele — Cre delivery activates Kras and deletes p53 simultaneously in the same cells, producing more aggressive tumors that recapitulate the genetics of human lung adenocarcinoma even more closely. Pancreatic cancer GEMMs do the same with KrasG12D plus floxed Ink4a/Arf. Brain tumor GEMMs use Trp53 plus various oncogenes activated by intracranial Cre virus injection. You can essentially write the genetic recipe of the human cancer you want to model and execute it as a series of conditional alleles in a mouse.

These are autochthonous tumors — tumors that arose in place in the mouse, in the natural tissue, in the natural immune environment — as opposed to transplanted tumors. They develop with the same kinetics as human tumors. They invade and metastasize like human tumors. They respond to drugs in ways that, while not perfect, are far more predictive than xenograft data. Every major modern cancer drug program uses GEMMs somewhere in its preclinical pipeline.

The big idea: a GEMM is **a mouse engineered with conditional oncogenic alleles that can be turned on in a chosen tissue at a chosen time, producing autochthonous tumors in a defined genetic background**. The Cre-Lox machinery makes this possible: LSL cassettes silence oncogenes until Cre arrives. The result is a mouse that doesn't just have cancer — it has the kind of cancer you specified, in the place you specified, on your schedule. That has been transformative for preclinical oncology.

Now let me zoom out and talk about the largest single coordinated effort in mouse genetics: the global project to knock out every gene in the mouse genome.

---

## SEGMENT 14 — KOMP and IMPC: the project to knock out every gene

Here's a question worth asking. The mouse genome has roughly 22,000 protein-coding genes. By the late 1990s, after about a decade of classical gene targeting, the community had knocked out maybe a thousand of those genes — a few percent of the total. Each knockout was a multi-year project by a single lab. At that rate, knocking out the whole genome would take the entire 21st century. And meanwhile, the genome sequence had just been completed, and the field was suddenly looking at a vast catalog of genes whose functions were entirely unknown. The bottleneck was not the genome; it was our ability to ask, gene by gene, what each gene does in a whole organism.

The proposed solution, articulated in the early 2000s, was audacious. **Knock out every gene in the mouse genome.** Build a knockout for every single protein-coding gene. Distribute the resulting mouse lines, or cryopreserved embryos, or targeted ES cells, to the community. And in parallel, run each knockout through a standardized phenotyping pipeline so that every gene gets a baseline characterization. Make the data freely available. Let every researcher who's interested in any specific gene start their work from the existing knockout line rather than spending two years making one.

This is the **Knockout Mouse Project**, or KOMP, in the United States, with parallel efforts called EUCOMM in Europe and NorCOMM in Canada. Together with subsequent phenotyping efforts, they're now part of the **International Mouse Phenotyping Consortium**, the IMPC, which coordinates the global effort.

The scale is genuinely impressive. Over the past two decades, KOMP and its sister consortia have generated targeted ES cell lines for essentially all of the mouse's protein-coding genes — over 20,000 genes. They've converted thousands of those ES cell lines into actual mice. They've phenotyped those mice through a standardized battery of tests — body weight, organ weights, blood chemistry, behavior, X-ray imaging, behavioral assays — and they've made the data publicly searchable. You can go to the IMPC website right now, type in any gene name, and find out whether a knockout exists, what its phenotype is, and how to order it.

\[Pause.\]

The distribution networks are themselves a community resource of staggering depth. The **Jackson Laboratory** in Bar Harbor — Jax for short — distributes thousands of strains, ships mice and frozen embryos worldwide, and serves as the institutional memory of mouse genetics. The **MMRRC** — Mutant Mouse Resource and Research Centers — is a federally funded network of stock centers that holds knockout lines that other labs have made. The **EMMA** — European Mouse Mutant Archive — does the same in Europe. **MARC** in Japan. **CARD** in southern Japan, the Centre for Animal Resources and Development. Each of these is a repository of mouse strains, accessible to any researcher, with documented genetics.

The analogy: KOMP and the phenotyping consortia are **a community effort to knock out every gene in the mouse genome — over 20,000 lines now, distributed by Jackson Labs, MMRRC, EMMA**. It's the mouse equivalent of the Human Genome Project: a massive coordinated effort to systematically catalog something that was previously being attacked piecemeal.

There are several practical consequences of this. **One**: when you want to study a gene, your first stop should be the IMPC database. Is there already a knockout? Has it already been phenotyped? Often the answer is yes, and you can save a year of work by starting from someone else's mouse. **Two**: large-scale phenotyping has revealed lots of unexpected biology. Genes that nobody had paid attention to turn out to have important functions. Genes that everyone assumed were essential turn out to be dispensable. The systematic approach has been a productive complement to the hypothesis-driven approach of individual labs. **Three**: the consortium-generated alleles are usually **conditional-ready** — they're floxed alleles, not constitutive knockouts. Which means that even for genes where embryonic lethality would have blocked classical knockouts, you have a floxed allele you can cross to any Cre driver to get a tissue-specific knockout.

\[Pause.\]

There are limits. The standardized phenotyping pipeline catches some things and misses others. A gene that causes a subtle behavioral phenotype only when the mouse is challenged with a specific stress might be reported as "no phenotype" because the standard battery didn't include that stress. The mice are characterized on a C57BL/6 background, so strain-specific effects aren't captured. And of course, some genes' phenotypes only show up in specific disease contexts that aren't part of the baseline screening. But as a starting point, IMPC data is enormously valuable.

The big idea: KOMP and IMPC have transformed mouse genetics from a cottage industry — one lab makes one knockout — into a centralized resource — every gene has a knockout, accessible to everyone. The combination of large-scale knockout production with standardized phenotyping is a model that other fields are now copying — the equivalent for human cells is the IGNITE and ENCODE-style genome-scale CRISPR screens, the equivalent for protein structures is AlphaFold's predictions for every protein. Systematic, comprehensive, openly distributed.

Now let's get to a more uncomfortable topic. We've spent thirteen segments celebrating what mouse models can do. It's time to talk about what they can't.

---

## SEGMENT 15 — When the mouse is wrong: the translation gap

There is a running joke in pharmaceutical research that goes something like this: "we have cured cancer in mice many times." It's funny because it's true. There are thousands of papers showing that some intervention shrinks tumors in mice. The vast majority of those interventions then go on to fail in human clinical trials. Estimates vary, but it's commonly stated that **roughly 80% of drugs that work in mouse cancer models fail in human trials**. The translation gap from mouse to human is huge, and any honest discussion of mouse models has to grapple with it.

The analogy: **mouse is not human — the running joke is that drugs that work in mice often don't work in humans, not because mouse biology is wrong, but because the question we asked the mouse wasn't the question patients are answering.**

Let me unpack some of the specific places where mouse and human diverge, because understanding those mismatches is essential for using mouse models well.

**Mouse immunology is meaningfully different from human immunology.** Mice and humans share most of the basic players — T cells, B cells, antibodies, MHC molecules — but the details differ in ways that matter clinically. Mouse and human MHC molecules present different peptides. Mouse and human cytokines often don't cross-react. Mouse T cells have somewhat different receptor repertoires. Mouse macrophages differentiate along somewhat different lineages. Drugs that target human immune molecules often don't target their mouse counterparts at all, which is why humanized mice exist. But even with humanized mice, the immune system never fully recapitulates the human one, because the supporting infrastructure — lymph nodes, stromal cells, cytokine milieu — is still mouse.

**Mouse aging is fast and weird.** A mouse lives two to three years, where a human lives eighty. The aging diseases that emerge in mice — cardiovascular changes, cancers, cognitive decline — overlap with human aging but on a vastly compressed timescale, and not in the same proportions. Atherosclerosis is rare in normal mice — you have to engineer a knockout, ApoE-/- or LDLR-/-, to get the kind of cholesterol-driven plaques that kill humans. Many human age-related diseases — Alzheimer's, Parkinson's, sarcopenia — have to be modeled in mice via genetic engineering rather than waiting for them to occur naturally, because mice don't live long enough.

**Mouse drug metabolism is different.** Mice and humans have different liver enzymes. The mouse cytochrome P450 enzymes have different specificities than the human ones, so a drug that's metabolized in one way in a mouse might be metabolized completely differently in a person. Toxicity profiles can be wildly different. A drug that's safe in mice can be toxic in humans, or vice versa. This is one of the most consistent sources of clinical surprise.

**Mouse cancer is structurally different from human cancer.** Mouse cancers grow fast, are usually homogeneous, often arise from a single oncogene activation, and rarely metastasize aggressively. Human cancers grow slowly, are heterogeneous, accumulate many mutations over decades, and metastasize. A mouse tumor model can't capture the **clonal evolution** that shapes human cancer over many years. You can compress timelines, but you can't reproduce the genetic complexity of a tumor that's been mutating for a decade in a fifty-year-old patient.

**Mouse behavior maps imperfectly onto human cognition.** Mice can do impressive things — they can remember complex spatial arrangements, learn associations, navigate mazes. But they don't have human cognition. Psychiatric diseases — depression, schizophrenia, autism — have been modeled in mice via genes implicated in the human disease, but the mouse phenotypes are pale shadows of the human syndromes. Whether a "depressed mouse" is meaningfully related to a depressed person is a question on which honest scientists disagree.

\[Pause.\]

The deeper issue, I think, isn't that mice are wrong. It's that **mouse models answer the questions you ask them**, and sometimes the question you ask isn't the one a patient is answering. A mouse cancer model with a single oncogene activated by Cre answers the question: "what does this oncogene do in this tissue when activated in isolation?" That's a different question than "what does it do in a human tumor that has accumulated 30 different mutations over 20 years in a 60-year-old patient with diabetes and a particular gut microbiome?"

A drug that works in the first question's context may not work in the second. Not because the mouse is wrong but because the biological system being interrogated is different.

So how do we use mouse models well, given all this? A few principles. **One**: use multiple models. If your finding holds in three different mouse models of a disease, it's much more likely to translate than if it only holds in one. **Two**: combine mouse data with human data — patient samples, organoids, clinical observations, genetic studies — and look for convergence. **Three**: be honest about what you're modeling. A KrasG12D-driven lung adenocarcinoma in a mouse is an excellent model of KrasG12D-driven lung adenocarcinoma. It's not necessarily a perfect model of all lung adenocarcinomas in humans. **Four**: when you cross into the clinic, expect surprises, and design your early-phase trials to detect them.

The big idea: mouse models are powerful tools but imperfect models. The mismatch with humans is real, varies by system, and is the source of much clinical disappointment. Using mouse models well requires acknowledging the gap and structuring your research strategy to bridge it rather than ignore it.

Now let's talk about a problem that's even closer to home — a problem in the reproducibility of mouse data itself.

---

## SEGMENT 16 — Reproducibility, vendors, and the mouse microbiome

I said earlier that inbred mouse strains are reproducible, because every C57BL/6 is genetically identical to every other C57BL/6. That's true at the level of the nuclear genome. But it's deceptive, because **a lot more than the nuclear genome shapes how a mouse behaves**, and many of those other things are not as well controlled as we'd like to believe.

Here are some of the surprises the field has had to confront over the past fifteen years.

**The same strain from different vendors can behave differently.** A C57BL/6 mouse from Jackson Labs is not, in every respect, identical to a C57BL/6 mouse from Charles River, or from Taconic, or from a Korean breeder. Yes, the nuclear DNA is essentially the same. But the genetic drift over decades of separate maintenance has introduced small differences — variant alleles that have accumulated in one colony but not another. These are typically called "substrain differences," and they can have surprisingly large effects. C57BL/6J from Jax and C57BL/6N from NIH, for example, differ at several loci, including an allele of Nnt that affects glucose metabolism, and a Crb1 variant that affects retinal degeneration. Cross experiments between papers that used different substrains can give frankly contradictory results, and the source of the discrepancy may be invisible unless you know to look for it.

**The mouse microbiome shapes phenotype.** Mice harbor enormous communities of bacteria in their gut, on their skin, in their lungs. Those communities differ between vendors, between rooms in the same animal facility, between cages within the same room. And the microbiome is now known to influence essentially everything — metabolism, immune function, behavior, drug response, tumor growth. Mice from different vendors have different microbiomes, and so they have different baseline biology, even when they're the same strain. A landmark paper in 2010 by Ivanov and colleagues showed that mice from Jackson Labs had very different gut-associated immune cell populations than mice from Taconic, all because of differences in their commensal bacteria — and you could swap the populations by co-housing the mice.

**The animal facility environment matters.** Lighting cycles, cage type, bedding, water source, handler stress, neighbors — all of these things can influence mouse biology in ways large and small. Two labs at two different institutions running ostensibly the same experiment can get different results because the mice were stressed by handling differences, or sleeping more in one facility than the other, or eating slightly different chow.

\[Pause.\]

These reproducibility issues have caused real and consequential problems. There are famous cases of mouse phenotype data that don't replicate between labs. There are cases where a knockout was reported as having a striking behavioral phenotype, and then a second lab failed to see it, and over time it became clear that subtle differences in housing, microbiome, or substrain were behind the discrepancy. The "reproducibility crisis" in biomedical research, which is a real phenomenon, has a substantial mouse-genetics component.

The field has responded in several ways. **Better reporting standards** — papers are now expected to specify the exact substrain, the vendor, the facility conditions, the microbiome status if relevant. The ARRIVE guidelines for reporting animal research try to standardize this. **Multi-site studies** — pre-registered experiments performed at multiple institutions simultaneously, with the same protocols, to test whether a finding is reproducible across facility differences. **Microbiome control** — some labs now use germ-free mice or mice with a defined microbiome, to remove that source of variability. **Genetic background standardization** — for any new knockout, breeders are expected to backcross to a defined background for at least 6 to 10 generations before publication, to ensure that flanking alleles from the targeting cell strain don't influence the phenotype.

\[Pause.\]

A subtler reproducibility issue, worth flagging: **the mouse on which a knockout was originally made is not the same mouse on which it's eventually phenotyped**. If you make a knockout in 129 ES cells and then breed the mouse onto a C57BL/6 background, the resulting "B6 knockout" mouse actually has a small region of 129 DNA flanking the knockout allele — DNA that came from the original ES cells and didn't get bred out, because it's genetically linked to the knockout itself. That linked region can contain unrelated polymorphic alleles that affect phenotype. So you have to be careful: the phenotype you observe may be partly due to the knockout and partly due to the flanking 129 alleles, and disentangling them requires careful breeding controls.

The big idea: **mouse data is not as cleanly reproducible as the inbred-strain framework would suggest**. Vendor differences, microbiome differences, facility differences, and linked-allele effects all contribute noise. Good experimental design controls for these where possible and acknowledges them where it can't. Reproducibility in mouse research is a problem the field is actively working on, with mixed but improving success.

Now let's spend a few minutes on the ethical dimension, because we've been talking abstractly about mice as scientific instruments, and they are also living animals.

---

## SEGMENT 17 — Ethics and the 3Rs

A few million mice are used in biomedical research every year in the United States alone, and many millions more worldwide. Each one of them is a living animal capable of pain, fear, and distress. The ethics of using animals in research is not a side topic — it's a central question that every researcher who works with mice has to think about, and the institutional structures around mouse research are designed to keep that question in the foreground.

The framework that has emerged over the past sixty years, and that now structures essentially all animal research in most countries, is called the **3Rs**: **Replace, Reduce, Refine**. Articulated originally by Russell and Burch in 1959, the 3Rs are a set of guiding principles that every animal research protocol is meant to consider.

**Replace** means: where possible, replace animal experiments with non-animal alternatives. Cell culture experiments instead of mouse experiments. Organoids — three-dimensional tissue cultures that mimic real organ structure — instead of mice. Computer models. Mouse-on-chip systems where engineered microfluidic devices simulate aspects of mouse or human physiology in silico. Not every question can be addressed without animals — many can't — but where they can be, the alternatives should be used.

**Reduce** means: use the minimum number of animals consistent with answering the question. This is largely a statistical question. If you can answer your question with 10 mice instead of 50, use 10. Power calculations are now expected in protocols — you predict in advance how many animals you'll need to detect the expected effect size, and you commit to using only that many. Pilot studies, careful controls, sharing of animals between labs, all reduce the total count.

**Refine** means: minimize the pain, distress, and suffering of the animals you do use. Better surgical techniques. Better analgesia. Enriched housing — cages with toys, nesting material, social companions. Endpoint criteria — predefined humane criteria for euthanizing animals before they become severely ill, even if it cuts the experiment short. Training of researchers in handling techniques that minimize stress.

\[Pause.\]

Every research institution that uses animals has an Institutional Animal Care and Use Committee — the IACUC in the US, and equivalent bodies elsewhere — that reviews and approves every protocol. The IACUC includes scientists, veterinarians, and lay members from the community. They scrutinize each proposed experiment for justification of the animal use, for adherence to the 3Rs, for endpoint criteria, for pain management. Protocols that don't pass IACUC review don't happen.

There are also national regulations. In the US, the Animal Welfare Act and the Guide for the Care and Use of Laboratory Animals set baseline standards. In Europe, Directive 2010/63/EU does the same, with somewhat stricter requirements in some areas. Facilities are inspected. Records are kept. The whole apparatus is designed to keep animal welfare in active consideration alongside scientific progress.

There are also debates within the field about whether the current balance is right. Some argue that too many experiments are still done in animals when alternatives exist. Others argue that excessive regulation slows research without proportional welfare benefits. Most working researchers, in my experience, hold both views in tension — they believe the 3Rs are right, they try to implement them seriously, and they also believe their work requires animals because the alternatives don't yet exist for the questions they're asking.

\[Pause.\]

There's a broader cultural point worth making, and it applies to how you, as a young researcher, should think about all this. **Mouse research is a moral undertaking, not just a scientific one.** Every protocol you write, every experiment you design, asks you to weigh scientific value against animal welfare cost. There is no formula that gives you the right answer. Different people, looking at the same protocol, will weigh it differently. The institutional process — IACUC, regulatory frameworks, peer review — is meant to provide a check, but the ultimate ethical responsibility rests with the researcher. You have to decide whether the question you're asking is worth the lives of the animals you're going to use.

Most researchers I know take this seriously. They think hard about the 3Rs. They design experiments to minimize animal use. They use endpoint criteria. They care about the welfare of the animals in their care. The popular image of researchers as indifferent to animal suffering is, in my experience, false. The reality is that the field is full of people who are aware of the moral weight of what they do and try to bear it responsibly.

The big idea: mouse research is bound by the 3Rs framework and by institutional oversight, but ultimately it depends on the ethical seriousness of individual researchers. Replace where possible, reduce where you can, refine always. This is the moral structure of the field, and it's not optional.

Now let's look forward. What's next for mouse models? What's coming?

---

## SEGMENT 18 — The frontier: humanized organs, mouse-on-chip, and AI-driven model selection

We've covered the classical era and the modern era — gene targeting, transgenics, conditional alleles, CRISPR, humanized immune systems, GEMMs, the consortia, and the limitations. Now let me sketch what's emerging at the frontier of mouse engineering today, because the field continues to evolve.

**Humanized organ mice.** We've talked about humanized immune systems. The natural next step is humanized organs — specifically, livers and lungs. Some labs have generated mice in which the mouse's own liver has been deliberately damaged through genetic engineering, then repopulated with human hepatocytes. The resulting mouse has a liver that is largely human — human hepatocytes doing human liver biochemistry inside a mouse body. These mice can metabolize drugs the way humans would, can be infected with hepatitis viruses that only target human liver, can support studies of human-specific liver biology in vivo. The FRG mouse (Fah-Rag2-Il2rg triple knockout) is the workhorse here. Similar approaches are emerging for human lung epithelium, human intestinal epithelium, and human kidney.

**Interspecies chimeras and xenotransplantation work.** A more radical direction: making mice that carry human cells not just in the immune system or in a single organ, but in deeper, more developmentally fundamental ways. Some experimental approaches involve injecting human pluripotent stem cells into mouse blastocysts at the right time, with the goal of having the human cells contribute to specific tissues during development. The technical and ethical issues are nontrivial, but the long-term promise is mice that carry humanized organs by design, generated through development rather than transplantation. This work is closely related to the broader xenotransplantation effort to grow human-compatible organs in pigs — another animal where the engineering tools have advanced rapidly.

**Mouse-on-chip alternatives.** On the other side, there's a push to **replace** mice for certain applications with microfluidic devices — "organ-on-chip" systems, and more recently "body-on-chip" systems — that simulate aspects of mammalian physiology using cultured human cells in engineered miniature environments. These won't replace whole-organism studies anytime soon, but for some toxicology and drug screening applications they're starting to compete with mouse models on cost and predictive value. The 3R "replace" pressure is real here.

**AI-driven model selection.** As the catalog of available mouse models has exploded — IMPC has data on tens of thousands of phenotyped lines, individual labs have specialized models for specific diseases — choosing the right model for a particular research question has become a complex problem. Machine learning approaches that can match the disease question to the most appropriate available model are starting to emerge. Given a description of a target disease state and a candidate intervention, which existing mouse model gives the best translation? Increasingly, that question is being addressed computationally rather than by intuition alone.

**CRISPR base and prime editing in zygotes.** The CRISPR workflow itself continues to evolve. Base editors, which can install single-base changes without making double-strand breaks, are now being used in mouse zygotes to introduce precise point mutations efficiently. Prime editors, which can install small insertions, deletions, and replacements with high fidelity, are being deployed similarly. These tools further refine the toolkit, allowing more precise edits with fewer off-target effects.

**Multi-gene combinatorial editing.** Combined with the speed of zygote injection, CRISPR is making it possible to construct complex mice — three, four, five edits at once — that would have been multi-year projects in the classical era. This is enabling the field to build mouse models that better approximate the genetic complexity of human disease, particularly cancer, where multiple mutations often need to be combined to recapitulate the disease state.

**Single-cell phenotyping at scale.** And finally, on the analysis side, advances in single-cell genomics and imaging are allowing researchers to phenotype mouse models at a resolution that wasn't possible before. Single-cell RNA sequencing of a whole knockout mouse can identify cell types affected by the knockout that classical histology would miss. Spatial transcriptomics maps the gene expression effects in their tissue context. Whole-animal imaging tracks dynamic biology over time. The mouse model is the same as it always was; the readouts are vastly more informative.

\[Pause.\]

Where is all this going? My honest answer is: the mouse will remain the central organism of biomedical research for the foreseeable future. The combination of genetic similarity to humans, fast generation time, community infrastructure, and a thirty-year accumulated toolkit makes it too valuable to abandon. But the mouse model is being refined, accelerated, and augmented. It is being combined with humanized components to address the translation gap. It is being supplemented — though not replaced — by in vitro and in silico alternatives. And the engineering tools that let us shape mice to our questions continue to get faster, cheaper, and more precise.

The big idea, to close this segment and this lecture: **the engineered mouse is a moving target, not a static tool.** It has been the workhorse of mammalian biomedicine for forty years, and it will likely remain the workhorse for at least another forty. But the workhorse keeps getting upgraded. CRISPR collapsed the timeline by 10x. Humanization addresses some of the translation gap. The data infrastructure has gone from labs trading mice by mail to international databases. Every researcher entering this field today inherits a vastly more powerful toolkit than the one Capecchi, Smithies, and Evans had to build it from scratch.

That accumulated toolkit is, in the end, what makes modern biomedical research possible. The mouse is the closest mammalian whole-organism testbed we have. The engineered mouse is what we've made of that testbed in fifty years of trying. And the mice now being made — humanized, conditional, multiply-edited, single-cell-phenotyped — are the foundation on which the next fifty years of biomedicine will be built.

---

## APPENDIX — Quick reference

A handful of terms, concepts, and resources, gathered for easy reference.

**Inbred strain**: a mouse strain maintained by 20+ generations of brother-sister mating, producing animals that are genetically identical at essentially every locus. Major examples: C57BL/6 (the reference strain), BALB/c (immunology, antibodies), FVB (transgenics), 129 (historical ES cell source).

**Embryonic stem cells (ES cells)**: pluripotent cells derived from the inner cell mass of an early blastocyst, capable of contributing to all tissues, including the germline, when reintroduced to a host embryo. The substrate for classical gene targeting.

**Gene targeting**: making a defined edit at a specific genomic location using homologous recombination, typically in ES cells. The technique recognized by the 2007 Nobel Prize (Capecchi, Smithies, Evans).

**Targeting vector**: an engineered DNA construct with homology arms flanking a modification cassette (typically including a selection gene like neo), often with an external counter-selection gene (typically TK). Used to direct homologous recombination to a specific locus.

**Knockout**: a mouse in which a gene has been deliberately disrupted, typically by inserting a selection cassette into the gene's coding sequence. The gene's protein is no longer made.

**Knockin**: a mouse in which a piece of designed DNA — a point mutation, a reporter gene, a humanized sequence — has been deliberately inserted into a specific locus, replacing or modifying the endogenous sequence.

**Transgenic**: a mouse carrying a piece of foreign DNA integrated randomly into its genome via pronuclear injection. Adds new genes; cannot delete or replace endogenous genes.

**BAC transgenic**: a transgenic mouse made with a bacterial artificial chromosome — a very large insert (100-300 kb) containing most of the natural regulatory context of a gene. More physiological expression than small-construct transgenics.

**Floxed allele**: a gene flanked by two loxP sites pointing in the same direction. Functionally identical to wild-type until Cre recombinase is introduced, at which point the flanked region is excised. The substrate for conditional knockouts.

**Cre-Lox**: a recombinase system using Cre protein and 34-base-pair loxP sites. Cre excises DNA between two loxP sites pointing the same direction. The workhorse of conditional genetics.

**Cre driver line**: a transgenic mouse expressing Cre recombinase under a tissue-specific or temporally controlled promoter. Crossing to a floxed allele produces tissue-specific (and optionally inducible) gene deletion.

**CreER**: a Cre-estrogen receptor fusion that requires tamoxifen for activation. Provides temporal control over Cre activity.

**Chimera**: an organism made up of cells from two genetically different sources. In mouse genetics, typically a mouse produced by injecting edited ES cells into a host blastocyst, where the resulting mouse contains cells from both origins.

**Germline transmission**: the criterion for converting a chimeric founder mouse into a heritable strain. Achieved when the edited ES cells contribute to the gonads, allowing the edit to pass to offspring.

**CRISPR-Cas9**: a bacterial DNA-cutting system adapted for genome editing. Used in mouse zygotes to make edits directly in the first cell of the embryo, bypassing ES cells. Compresses the workflow from ~16 months to ~3 months.

**Humanized mouse**: an immunodeficient mouse engrafted with human cells, typically human hematopoietic stem cells producing a functional human immune system. NSG mice are the canonical strain.

**GEMM**: genetically engineered mouse model, usually of cancer, with conditionally activated oncogenes (often via LSL-Cre logic) and/or conditionally deleted tumor suppressors. The pioneering example is Kras-LSL-G12D from the Jacks lab.

**LSL cassette**: a loxP-flanked stop cassette preceding a gene. The gene is silent until Cre removes the stop signal. Used to make oncogenes Cre-inducible.

**KOMP / IMPC**: international consortia that have generated targeted alleles for essentially all mouse protein-coding genes (~22,000) and phenotyped many of them through standardized pipelines. Data and lines are publicly available.

**Distribution centers**: Jackson Laboratory (Jax, US), MMRRC (US), EMMA (Europe), RIKEN BRC (Japan), CARD (Japan), among others. Maintain and distribute thousands of mouse strains.

**3Rs**: Replace, Reduce, Refine. The ethical framework governing animal research worldwide. Implemented through IACUC review and national regulations.

**Translation gap**: the phenomenon that drugs effective in mouse models often fail in human clinical trials, due to differences in immunology, drug metabolism, aging, cancer biology, and behavior between species.

**Substrain**: a sub-variety of an inbred strain that has diverged from its parent strain due to genetic drift over time. C57BL/6J (Jax) and C57BL/6N (NIH) are the canonical example, with documented allelic differences.

**Microbiome effect**: the influence of commensal bacteria on mouse phenotype, varying between vendors, facilities, and even cages. A major source of subtle reproducibility variation.

**Position effect**: in random integration transgenics, the influence of the surrounding chromatin environment on transgene expression. Causes founder-to-founder variability and motivates BAC transgenesis or targeted knockin strategies.

**ARRIVE guidelines**: reporting standards for in vivo animal research, designed to ensure that papers describe their methods in enough detail for replication.

**Pronuclear injection**: the classical transgenesis technique, in which DNA is injected directly into one of the pronuclei of a fertilized one-cell embryo. Used both for classical short-construct transgenes, BAC transgenes, and CRISPR delivery to zygotes.

**Blastocyst injection**: the classical gene targeting delivery technique, in which edited ES cells are injected into the cavity of a 3.5-day blastocyst, which is then transferred to a foster mother. Produces chimeras.

**FRG mouse**: a triple-knockout mouse (Fah-/-, Rag2-/-, Il2rg-/-) used to host human hepatocyte engraftment, producing humanized livers.

**Organoids**: three-dimensional cultured tissues that recapitulate aspects of organ structure. An emerging in vitro alternative to some animal experiments. Covered in a separate book in this series.

If you remember nothing else from this lecture, remember the testbed. The mouse is the closest mammalian whole-organism testbed we have. The engineered mouse is what fifty years of careful work made of it. And the next mouse — humanized, multi-edited, deeply characterized — is the foundation on which the next era of biomedical research will be built.

\[End of lecture.\]
