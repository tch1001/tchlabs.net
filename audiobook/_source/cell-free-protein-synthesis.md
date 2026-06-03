# Cell-Free Protein Synthesis: PURE, TXTL, and the Broader Cell-Free Toolkit

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — What cell-free protein synthesis is, and why it matters

Alright, let's get started. Good morning, everyone. For the next two hours, we are going to talk about something that, when you first hear about it, sounds like a magic trick. We are going to talk about making protein — real, folded, functional protein, the kind your cells make every second of your life — in a clear plastic tube, on a benchtop, with no living cell anywhere in sight. Just a small volume of liquid, a pipette tip of DNA, a few hours of patience, and protein appears. No bacteria. No yeast. No mammalian cells. No cell at all.

The technique has a few names. The most common is **cell-free protein synthesis**, abbreviated **CFPS**. You will also hear it called **in vitro transcription-translation**, or just **TX-TL** for short — TX for transcription, TL for translation. They all refer to the same general idea, which I want to give you as the bumper sticker for the entire lecture. **Cell-free protein synthesis is the practice of making protein in a tube, without a living cell — you assemble all the necessary components in a reaction mix, you add your DNA template, and you let the machinery work.** That is it. That is the field. Every other thing we discuss today — PURE systems and crude lysates, freeze-dried paper diagnostics and synthetic minimal cells, unnatural amino acids and membrane proteins and on-demand vaccines — every single one is a downstream consequence of taking that one sentence seriously.

If you walk out of here today and a friend asks you what cell-free protein synthesis is, I want you to be able to say: people figured out, decades ago, that the entire molecular machinery a cell uses to make protein — the ribosomes, the transfer RNAs, the polymerases, the energy molecules, the amino acids, the dozens of accessory factors — can be taken out of the cell and put into a tube, and that machinery will, given a piece of DNA telling it what to build, just build it. The cell, as a container, is in some sense optional. The chemistry can happen anywhere it has the parts.

\[Pause.\]

Let me put a sharper edge on why anyone cares. The traditional way to make a protein is to take the gene for that protein, put it on a plasmid, push the plasmid into a bacterium or a yeast or a mammalian cell, grow that cell up in big numbers, induce expression, wait, lyse the cells open, and purify your protein out of the resulting soup. That workflow has been the workhorse of biotechnology since the 1970s. It is how insulin gets made. It is how monoclonal antibodies get made. It is how almost every recombinant protein on the market today gets made. And it works beautifully when it works.

But it has problems. Cells grow at their own pace, not yours; you wait overnight, you wait two days, sometimes a week for the slow-growing eukaryotes. Cells care about their own survival; if the protein you want to make is toxic to the cell, the cell will reject it, suppress it, or simply die before you collect anything useful. Cells have their own metabolism, full of thousands of other proteins; when you lyse the cells you have to purify your protein away from all of that biological background. Cells have a particular set of biochemistry; if you want to use amino acids that no living cell uses — unnatural amino acids with click chemistry handles or fluorescent side chains — you have to do elaborate gymnastics to persuade a living cell to incorporate them. Cells, in other words, are general-purpose factories that come with the entire factory attached, and when all you want is the one machine that makes one product, dragging the whole factory along is a lot of overhead.

Cell-free skips the factory. You take just the machine. You put it in a tube. You feed it DNA. You collect protein.

\[Pause.\]

Now let me give you the four advantages of cell-free, because they are going to come up over and over again and you should be able to recite them. **One: no cells to die.** If your protein is toxic — a pore-forming antimicrobial peptide, a snake venom component, a protein that punches holes in membranes — a living cell cannot make it, because the cell would die before it finished. In a tube, with no cell to kill, the protein just gets made. **Two: no growth bottleneck.** You skip the overnight culture, the induction, the harvest. A typical cell-free reaction runs to completion in two to six hours. You can be holding milligram quantities of a brand-new protein the same afternoon you start. **Three: designer protein-only environment.** You control exactly what goes into the tube. You can leave out enzymes you do not want, add cofactors you do want, change pH and salt and crowding agents to suit your particular protein. The cell never offered you those knobs. **Four: easy to add unnatural amino acids or unusual building blocks.** Because there is no living cell with its own metabolism to fight against, you can throw in a non-canonical amino acid, an engineered tRNA, a phosphorylated residue, a fluorescent dye, and the machinery will use it. The cell-free reaction is, in this sense, the most permissive form of protein synthesis we have.

\[Pause.\]

So that is the destination. Here is the contract for the next two hours. By the end of this lecture, you should be able to do three things. **First**, explain what cell-free protein synthesis is, using the test-tube-without-cells framing, and explain why anyone bothers when we already have perfectly good cells for the same job. **Second**, walk a friend through the two dominant flavors of cell-free — the **PURE** system, which is fully reconstituted from purified components, and the **TXTL** system, which uses a crude bacterial lysate — and explain when you would reach for one versus the other. **Third**, look at a modern application of cell-free — a paper-based diagnostic, an on-demand vaccine, a synthetic minimal cell, a metabolic engineering project — and have actual intuition for what is happening underneath. Everything I do today will be in service of those three goals.

One more framing note. Cell-free protein synthesis is not new. It is older than most of you and older than most of your professors. It dates back, in its primordial form, to the very moment the genetic code was being cracked, in 1961. We will spend Segment 2 on that history, because the field's modern revival makes much more sense once you know how it began. The story arcs from a Nobel-Prize-winning experiment in a basement of the National Institutes of Health, through decades of commercial kits that nobody outside the lab really noticed, into a current renaissance in which cell-free systems are powering everything from outbreak diagnostics to attempts to build a synthetic cell from scratch. The same idea, the same chemistry — but the applications have exploded as the engineering tooling around it has matured.

Let's go meet the founders.

---

## SEGMENT 2 — Historical roots: Nirenberg, the codon-cracking experiment, and the first cell-free extract

To understand why cell-free is a serious field rather than a curiosity, you have to know that the entire genetic code — the dictionary that tells you which triplet of bases codes for which amino acid — was cracked, in the early 1960s, using cell-free extracts. The cell was not the hero of that story. The tube was.

Let me set the scene. It is 1961. Watson and Crick have known about the double helix for eight years. People are starting to figure out that DNA gets transcribed into messenger RNA, and that mRNA gets translated, somehow, into protein. But the **code** — the mapping from RNA triplets to amino acids — is completely unknown. Nobody knows whether UUU codes for an amino acid, and if so, which one. People are speculating. They are arguing about whether the code is overlapping, whether it has commas between codons, whether it is the same in every organism. It is one of the great open problems of twentieth-century biology, and it looks like it is going to take a generation to solve.

Then **Marshall Nirenberg**, a young biochemist at the National Institutes of Health, working with a postdoc named **Heinrich Matthaei**, does an experiment that is so straightforward, so brutal, and so beautiful that it cracks the entire problem open in a single afternoon. Here is what they do. They take _E. coli_ bacteria, grind them up, spin out the debris, and keep the supernatant — the soup of dissolved cellular contents. That soup contains ribosomes, tRNAs, the enzymes that charge tRNAs with amino acids, the energy molecules ATP and GTP, and all the accessory factors a cell uses to translate mRNA into protein. It is, in effect, the cell's translation machinery, in a tube, still working.

Then they add a synthetic piece of RNA. Not a real biological mRNA — that would have been too complicated, because real mRNAs have many different codons in them. They add **poly-U** — a stretch of RNA made entirely of uracil bases, U after U after U after U, the simplest possible test sequence. And they ask: if this poly-U RNA is treated as a messenger by the ribosomes in our tube, what protein will get built?

The answer is **poly-phenylalanine**. A protein made of nothing but phenylalanine residues, one after another. The ribosomes, reading UUU codons one after another, build a chain of nothing but phenylalanine. That single experiment, in a single tube, with no living cell, established that **UUU codes for phenylalanine**. The first letter of the genetic code had been read. And the technique was so generalizable — make any synthetic RNA you want, add it to the cell-free extract, see which amino acid gets polymerized — that within a few years the entire codon table had been worked out. Nirenberg shared the 1968 Nobel Prize in Physiology or Medicine for this work, along with Har Gobind Khorana and Robert Holley.

The analogy I want you to carry: **Nirenberg's poly-U experiment was the founding moment of the field — UUU decoded as phenylalanine, all in a cell-free extract; the genetic code was cracked without ever growing a cell for the purpose.** The cell-free system, far from being a curiosity, was the instrument by which we understood translation in the first place. Every subsequent cell-free experiment, in some sense, descends from that 1961 tube.

\[Pause.\]

Now there is a beautiful conceptual point hiding in here that I want to surface. Why did the experiment work at all? Why didn't the ribosomes, removed from the cell, just stop working? The reason is that ribosomes do not actually need a cell to translate. A ribosome is a chemical machine; given an mRNA, given charged tRNAs, given GTP for energy, it will read codons and build peptide bonds. The cellular context is convenient — it provides energy generation, it keeps everything concentrated, it manages waste products — but the core chemistry of translation is contained entirely within the ribosome and its cofactors. Take those out of the cell, supply them with what they need, and they keep going. That insight — that translation is portable, that the machinery does not require its native habitat — is the conceptual seed of cell-free protein synthesis as a discipline.

The same is true of transcription. RNA polymerase, given a DNA template with the right promoter, given nucleotide triphosphates, will transcribe the DNA into RNA in a tube. Combine transcription and translation in one tube, and you have a system that takes DNA in and gives protein out. That coupled system — **TX-TL**, as we call it now — is the modern descendant of Nirenberg's extract. The components are more sophisticated, the yields are higher, the applications are wilder, but the lineage is direct.

\[Pause.\]

For the rest of the 1960s and into the 1970s, cell-free extracts were the workhorses of mechanistic biochemistry. Anyone trying to figure out how translation worked — how initiation factors recognized start codons, how elongation factors hydrolyzed GTP, how termination released the finished peptide — was doing it with cell-free extracts. The technology was, in the language of computer science, the **debugger** for the cell's translation machinery. You could pause the reaction, remove components, add components, see what broke, and learn what each piece was for. That tradition produced an enormous fraction of what we know about how protein synthesis works.

Then, in the 1970s and 1980s, the field bifurcated. On one branch, basic mechanistic biochemistry kept using cell-free systems but increasingly with very specialized, purified components — single ribosomes, single tRNAs, single factors — to study individual steps in atomic detail. On the other branch, applied protein production turned almost entirely toward living cells, because once you wanted to make milligrams or grams of a protein for research or for drug development, fermentation in _E. coli_ or yeast or mammalian cells was vastly more economical than any cell-free method available at the time. Cell-free systems became a niche tool — useful for mechanistic studies, useful for special cases like toxic proteins, but not the way you made protein at scale.

That niche status lasted, roughly, until the 1990s and 2000s, when a series of technical improvements — better extract preparation, better energy regeneration, better understanding of what was limiting yield — started to push cell-free yields high enough that the technology became practical for a wider range of applications. And in 2001, a single paper from a Japanese lab changed the field forever. We will get to that paper in Segment 5. But before we get there, we need to look at the commercial cell-free systems that were available in the meantime, because they shaped what working biochemists thought cell-free was for.

---

## SEGMENT 3 — Reticulocyte lysate, wheat germ extract, and the commercial in vitro translation kits

If you walked into a molecular biology lab in 1995 and you wanted to translate an mRNA in a tube — maybe because you had a cloned cDNA and you wanted to see whether it actually made a protein of the expected size, or maybe because you wanted to study what happened to the protein after translation, or maybe because you wanted a radiolabeled version of the protein for some assay — you did not, in general, buy a cell-free system and assemble it from scratch. You opened the fridge in your lab and pulled out a Promega kit.

For a generation of biochemists, **rabbit reticulocyte lysate** was the answer to "I need to translate this in vitro." Reticulocytes are immature red blood cells. They are interesting from a biochemist's point of view because they have an enormous concentration of ribosomes and translation machinery — they are essentially specialized factories for making hemoglobin, the only protein your red blood cells need to produce. You can take a rabbit, give it phenylhydrazine to induce a reticulocyte boost, draw blood, separate out the reticulocytes, and lyse them. What you get is a thick reddish soup absolutely saturated with translation machinery. With a few additions — energy sources, amino acids, perhaps a translation-enhancing factor or two — that lysate will translate any eukaryotic mRNA you add to it.

The kit became, in the analogy I want you to carry, **the classic commercial cell-free product — Promega has been selling it for decades; works on any eukaryotic mRNA**. You ordered a vial, you thawed it on ice, you added your mRNA, you added a radioactive amino acid like 35S-methionine, you incubated at 30 degrees for an hour, and you got a small amount of translated protein labeled in a way you could detect on a gel by autoradiography. It was an enormously useful workflow for confirming that your cloned gene actually encoded a translatable open reading frame.

The wheat germ system — **wheat germ extract** — was the parallel option for people who wanted a plant-based system, or who needed slightly different translational characteristics. Wheat germ is the embryonic part of the wheat seed, the part with all the developmental potential, and like reticulocytes it is unusually rich in translation machinery. You grind it up, extract it, treat it with nucleases to destroy endogenous mRNAs, and you have another in vitro translation system. The Coupled Wheat Germ Extract system from Promega and similar products from other vendors were standard tools for decades.

\[Pause.\]

Why am I making you sit through this commercial history? Because it shapes what working biologists think cell-free is **for**. For a generation, cell-free meant "I want to translate a little bit of an mRNA to check something." It was a confirmation tool. It was a low-yield, special-purpose assay system. Nobody, in 1995, was thinking about cell-free as a way to **make** protein at scale — the yields were too low, the kits were too expensive per microgram of product, and living cells were vastly more economical for any application that actually needed protein in bulk.

The reticulocyte lysate kit, in a typical setup, gave you maybe a microgram of protein out of a 50-microliter reaction. That is fine if all you want to do is run a Western blot and confirm a molecular weight. It is hopeless if you want to crystallize the protein for X-ray diffraction, or run an enzymatic assay that needs milligrams, or do anything industrial. For two decades, that ceiling was what people thought "cell-free" meant.

The reticulocyte and wheat-germ systems also have a particular limitation worth flagging: they are **translation-only**. They expect you to bring your own mRNA. They cannot transcribe DNA. If you wanted to test a gene, you had to first transcribe it into mRNA using a separate in vitro transcription reaction, then add the purified mRNA to the lysate. That is a two-step workflow, and it is finicky — the mRNA is unstable, mRNA preparation is fussy, and the yields stack disappointingly. The dominant systems of the 1990s were, in a sense, half-systems: translation without transcription.

The next big move was to integrate transcription and translation in the same tube. And the system that made that move dominant — for a while, and arguably still — came not from rabbit blood or wheat germs but from the most well-understood organism on the planet: _E. coli_.

\[Pause.\]

There is also one more system from this era that deserves a mention before we move on, because it shows up in textbooks and you should not be confused by it. **Insect cell extracts** — specifically extracts from Spodoptera frugiperda, the fall armyworm — were developed for some specialty translation applications, particularly when you needed eukaryotic post-translational modifications that wheat germ could not provide. They were always a smaller market, but they existed, and they exist today as commercial kits. The pattern is the same: a eukaryotic organism with a lot of translation machinery in a particular tissue, lysed and packaged.

The big idea to leave this segment with: **for the first three decades of cell-free, the dominant systems were eukaryotic translation kits — reticulocyte lysate, wheat germ extract — used as confirmation tools at modest yields**. They were specialty products in specialty fridges. Nobody had built a cell-free system that could compete, head-to-head, with living-cell expression for the routine job of making milligram quantities of a protein.

That changed, slowly, with the development of bacterial cell-free systems in the 1990s and 2000s. Let's go there.

---

## SEGMENT 4 — The bacterial workhorse: E. coli S30 extract

Here is where the field gets practical. By the late 1980s and through the 1990s, a series of laboratories — most notably groups around **Alexander Spirin** in Russia and **James Swartz** at Genentech and later at Stanford — were systematically working on how to extract _E. coli_ translation machinery, optimize its yield, and turn cell-free protein synthesis from a kit-based assay into a real protein production technology. The system that emerged from this work is usually called **E. coli S30 extract**, or simply **S30**, after the centrifugation step that produces it.

Let me walk you through what S30 actually is, because the name is opaque if you have not seen it before. You take a culture of _E. coli_ — usually a special strain selected for low protease activity and high translation capacity — and you grow it to mid-log phase. You harvest the cells, you wash them, and you break them open. You can break them with a French press, with a bead beater, with sonication, or with a microfluidizer; the specific method matters for yield but the principle is the same. Inside the broken cells is everything the cell was using to live — ribosomes, tRNAs, enzymes, metabolites, membranes, DNA, RNA, the whole soup. Now you spin the lysate at 30,000 times gravity for half an hour. The heavy stuff — unbroken cells, cell membranes, cell wall debris — pellets at the bottom. The light stuff — the dissolved cellular machinery — stays in the supernatant. You take the supernatant. That supernatant is your **S30** — supernatant after a 30,000 g spin. It is, more or less, the soluble interior of _E. coli_ in a tube.

The S30 has, by itself, much of what you need to translate. The ribosomes are there. The tRNAs are there. The aminoacyl-tRNA synthetases — the enzymes that charge tRNAs with their corresponding amino acids — are there. The translation initiation, elongation, and termination factors are there. RNA polymerase is there too. But the S30 is missing the things the cell normally supplies on demand: the nucleotide triphosphates that get used up in transcription, the amino acids that get incorporated into protein, the ATP and GTP that power the whole process. You have to add those.

A complete S30 reaction, as it was practiced in the 1990s and 2000s, looks like this. You take a few microliters of S30 extract. You add a buffer that maintains physiological pH and provides the magnesium and potassium ions the ribosomes need. You add the four nucleoside triphosphates for transcription — ATP, GTP, CTP, UTP. You add all twenty amino acids. You add an energy-regenerating system, typically based on phosphocreatine and creatine kinase, or on phosphoenolpyruvate and pyruvate kinase, or on a series of glycolytic intermediates. The job of the energy system is to keep regenerating the ATP and GTP that the ribosome consumes, so the reaction does not stall when the initial ATP runs out. You add your DNA template — a plasmid carrying your gene of interest under a strong _E. coli_ promoter. And then you incubate at 30 to 37 degrees and let the machinery run for one to several hours.

\[Pause.\]

The yields from a well-tuned S30 system, by the early 2000s, were getting respectable. Hundreds of micrograms per milliliter were achievable, and with the further refinements that Swartz's group introduced — better energy regeneration using glucose or maltose as a metabolic substrate, better oxygen supply, better control of redox state — yields kept climbing through the decade. By the late 2000s, milligram-per-milliliter yields were within reach for well-behaved proteins. That is a dramatic improvement over the reticulocyte lysate ceiling, and it is the level at which cell-free starts to be competitive with bacterial fermentation for some applications.

The key insight that drove the yield improvements is a slightly counterintuitive one. Early S30 systems were treated like in vitro chemistry — you added the components, you let the reaction run, and you watched the yield plateau and stop. The plateau usually came from energy depletion: the ATP and GTP got used up, the energy regeneration system got exhausted, the reaction died. Swartz's group, and others, realized that you could extend the lifetime of the reaction dramatically by treating it more like a tiny fermentation than like a one-shot chemistry experiment. Add a metabolic substrate that the extract's residual enzymes could process — glucose, maltose, glutamate — and you got continuous energy regeneration through the glycolytic and oxidative phosphorylation pathways that the cell extract still possessed. The reaction kept going for hours instead of minutes. The yields climbed.

\[Pause.\]

There is a related variant called **S12 extract**, after a 12,000 g centrifugation — a milder spin that leaves more of the cellular debris in the supernatant. S12 retains more inner membrane vesicles, which is useful for some membrane-protein applications, and it retains some of the lipid and metabolic machinery that gets lost in S30. There are also linear DNA cell-free systems, in which you skip the plasmid and use PCR products as templates directly; that requires some additional protection against the cell extract's exonucleases that would otherwise chew up linear DNA, but it lets you go from a synthesized gene fragment to a protein in hours, without ever cloning. Each variant trades different things — yield, membrane handling, template format, complexity — for different application advantages.

For the rest of this lecture, when I say "extract-based cell-free" or "lysate-based cell-free," I am talking about systems descended from this _E. coli_ S30 lineage. The specific recipes vary; the principle is the same. Crude lysate plus energy plus amino acids plus DNA template plus time equals protein.

The big idea to leave this segment with: **bacterial cell-free, using crude S30 extract, became the workhorse of cell-free protein synthesis from the late 1990s onward**. Cheaper than reticulocyte lysate. Coupled transcription and translation in one tube. Compatible with the engineered plasmids that molecular biologists already knew how to build. Scalable, with some effort, to gram quantities. And — critically — open to systematic engineering improvements that drove yields up by orders of magnitude over the next two decades. That trajectory is what set the stage for the field's modern explosion.

But the S30 system has a weakness that we are about to confront. It is a crude lysate. You do not know exactly what is in it. There are thousands of proteins in there, doing things that may or may not interfere with your reaction. There are enzymes that degrade RNA, enzymes that degrade DNA, enzymes that hydrolyze ATP wastefully, enzymes that modify amino acids in ways you did not ask for. If you want a perfectly clean, fully understood, fully programmable cell-free system, S30 is not it. You want something where every component has been purified separately and added back in known quantities. That is the next generation, and it is one of the most beautiful pieces of engineering in modern biochemistry.

---

## SEGMENT 5 — PURE: every component purified, fully defined

In 2001, a Japanese biochemist named **Yoshihiro Shimizu**, working in the lab of **Takuya Ueda** at the University of Tokyo, published a paper in _Nature Biotechnology_ that did something extraordinary. He and his colleagues took the entire _E. coli_ translation system — every single protein required to convert mRNA into protein — purified each component separately, in pure form, and then assembled them back together into a working translation reaction in a tube. Every component was known. Every concentration was set deliberately. Every contaminating activity from the cellular background was, by construction, absent. The system was called **PURE**, which stands for **Pure protein synthesis Using Recombinant Elements** — or sometimes Reconstituted Elements, depending on which version of the acronym you encounter.

Let me give you the analogy first and then the details. **PURE is the chemistry-set version of cell-free protein synthesis. Every component purified, fully defined, expensive but clean.** Where the S30 system is a crude broth of cellular contents that happens to work, PURE is a carefully assembled minimal recipe in which every ingredient has been measured into the bowl with a teaspoon. If S30 is grandma's stew, PURE is the recipe a Michelin-starred chef wrote down with every gram weighed.

What is actually in PURE? The complete list, roughly, looks like this. **Ribosomes** — purified from _E. coli_, washed clean of contaminants, present at a defined concentration. **All twenty aminoacyl-tRNA synthetases** — the enzymes that charge each of the twenty amino acid types onto its corresponding tRNA. Each of the twenty has been purified separately, often as a recombinant histidine-tagged protein, and added back at a deliberate stoichiometry. **The full set of _E. coli_ tRNAs**. **Translation initiation factors** — IF1, IF2, IF3. **Elongation factors** — EF-Tu, EF-Ts, EF-G. **Release factors** — RF1, RF2, RF3. **Ribosome recycling factor**. **Methionyl-tRNA formyltransferase**, which formylates the initiator tRNA. **T7 RNA polymerase**, for transcribing your DNA template — this is the bacteriophage T7 polymerase, which only recognizes its specific T7 promoter, so it does not interfere with anything else. **The four nucleoside triphosphates**, **all twenty amino acids**, an **energy regeneration system** based on creatine phosphate and creatine kinase, and a **set of buffer components** providing the right magnesium, potassium, and pH conditions.

Count the protein components in that list and you are looking at somewhere around three dozen different purified proteins. Each one cloned, expressed, purified, quantitated, stored, and added back in the right amount. The original Shimizu paper did exactly that. They took the translation system apart into its constituent proteins, purified each one as a recombinant tagged version, and put it back together. The reconstituted system worked. It translated mRNAs. It made protein.

\[Pause.\]

Why bother? PURE is expensive. The reagents cost a small fortune per microliter. The yields, especially in the early versions, were lower than what a well-tuned S30 reaction could produce. If you just want to make protein in a tube, you would always rather use the cheap lysate. So what is PURE for?

The answer, in one word: **purity**. PURE has no nucleases of unknown identity contaminating it — because every nuclease that was in the original cell has been left behind during purification. PURE has no proteases — same reason. PURE has no random ATPases wasting your energy. PURE has no transcription factors regulating your gene in ways you did not expect. PURE has no chaperones folding your protein in ways you did not request. PURE has, by construction, only the things you put in. That cleanliness is what makes it useful for a whole class of experiments that would be impossible or unreliable in a crude lysate.

Think about it this way. If you want to study translation itself — if you want to know what the ribosome does, how the elongation factors work, how the initiation factors land on the start codon — you need a system in which everything is defined. If you put your ribosome in a crude lysate and you observe some interesting behavior, you cannot tell whether the ribosome is doing it or whether one of the thousand other proteins in the lysate is doing it. In PURE, the ribosome's behavior is the only behavior available. The system is a clean test tube. The science becomes legible.

Or think about it this way. If you want to incorporate an unnatural amino acid into a protein — a fluorescent amino acid, a click-chemistry handle, a phosphomimetic — you need to add an engineered aminoacyl-tRNA synthetase that charges your unnatural amino acid onto a tRNA, and you need to make sure no other synthetase in the system charges that tRNA with the wrong amino acid by accident. In a crude lysate, with twenty different endogenous synthetases floating around, that cross-talk is hard to control. In PURE, you can leave out a specific synthetase entirely, or you can substitute an engineered one, and you know with certainty that the only thing charging that tRNA is the enzyme you put in. The cleanliness is what makes the engineering tractable.

\[Pause.\]

There is one more dimension to PURE that I want to flag, because it points toward the most ambitious direction the field is going. **PURE is the closest thing we have to a fully defined translation system.** That means PURE is the system you would reach for if you were trying to build a synthetic minimal cell — a cell, encapsulated in a lipid vesicle, that contains only the components necessary for self-replication, with every component known. The synthetic cell project, which we will come back to in Segment 16 and beyond, leans heavily on PURE precisely because PURE's defined composition makes it possible to ask, with precision, what the minimal set of biochemical components needed to sustain protein synthesis actually is. You cannot ask that question with S30, because S30 contains thousands of unknown things. You can ask it with PURE, because PURE contains only what you put in.

Commercially, PURE is available from a few vendors. The original Japanese group commercialized it as **PUREsystem** through GeneFrontier. New England Biolabs sells a version called **PURExpress**, which has become the standard reference product in most academic labs that use it. The kits are expensive — typically a few hundred dollars per microliter of reaction, in some configurations — but they are useful enough that biochemists keep buying them. For certain applications, there is no substitute.

The big idea to leave this segment with: **PURE, from Ueda and Shimizu in 2001, was the first cell-free system in which every component was a defined, purified protein**. It made cell-free legible. It made the engineering of translation tractable. It opened doors that the crude lysate systems could not open. And it set up a contrast — clean and expensive on one side, messy and cheap on the other — that defines the cell-free landscape to this day.

Now let me introduce you to the other side of that contrast in its modern form.

---

## SEGMENT 6 — TXTL: Noireaux's extract and the homecook revolution

If PURE is the chemistry-set version of cell-free, then **TXTL** is the homecook version. TXTL — transcription plus translation, often spelled with hyphens as TX-TL — is the term that has come to refer specifically to a family of _E. coli_-extract-based cell-free systems developed and championed by **Vincent Noireaux**, a physicist-turned-biologist at the University of Minnesota, starting in the mid-2000s and continuing to the present.

Let me give you the analogy first. **TXTL is the homecook version of cell-free — cell lysate with a few additives, cheaper, messier but works. PURE is precision biochemistry; TXTL is biological cooking.** Both produce edible meals; they just take different routes to get there.

Noireaux's recipe, in its essence, takes an _E. coli_ lysate prepared by methods similar to the classical S30 procedures, but then it adds a specific set of supplementations that turn out to dramatically expand what the extract can do. The two most important supplementations are extra **sigma-70** — the principal sigma factor that directs _E. coli_ RNA polymerase to most of the cell's own promoters — and an additional **nucleotide and amino acid energy mix** tuned for sustained reactions. Adding extra sigma-70 means that the cell-free reaction can transcribe from natural _E. coli_ promoters, not just from the bacteriophage T7 promoter that most other cell-free systems rely on. That sounds like a small detail. It is not. It is what makes TXTL into a platform for cellular genetics and synthetic biology, because the same promoters and regulatory parts that work in living _E. coli_ work, in TXTL, in a tube.

Here is what that opens up. If you have a genetic circuit you have designed for _E. coli_ — say, a toggle switch or a repressilator or a logic gate — you can clone it onto a plasmid and put it into a TXTL reaction, and the circuit will run. The repressors will be made, the promoters will be regulated, the dynamics will play out. You can watch the circuit run in vitro, with all the parts you would have used in vivo, without ever putting it into a cell. You can iterate on the design ten times in a day instead of once a week. You can characterize behavior without dealing with cell growth, cell viability, or the metabolic burden the circuit places on a living host. TXTL becomes a **breadboard** for synthetic biology — the equivalent of the prototyping board an electrical engineer uses to test a circuit before committing it to a printed circuit board.

\[Pause.\]

Noireaux's other key contribution was making the system **cheap**. The original S30 protocols required specific strains, careful growth, expensive equipment for cell lysis, and a long list of reagents. The TXTL protocols, as they have evolved through Noireaux's lab and through commercial vendors like Arbor Biosciences and Tierra Biosciences, have been progressively simplified and standardized. You can now buy a TXTL kit in a freezer-stable form, thaw it, add your DNA, incubate, and have protein in a few hours, at a cost per reaction that is a fraction of what PURE costs. The accessibility has democratized cell-free in a way the earlier systems never managed.

The catch, of course, is that TXTL is a crude lysate. It contains thousands of _E. coli_ proteins. It contains residual genomic DNA. It contains nucleases that will chew up your linear templates if you do not protect them. It contains all the metabolic machinery of _E. coli_, which can do useful things (regenerate energy, recycle nucleotides) but can also do annoying things (consume your substrates, modify your proteins in unexpected ways). For applications that demand the cleanliness of PURE, TXTL is the wrong tool. For applications that just need a lot of protein from a lot of designs, fast and cheap, TXTL is the right tool.

\[Pause.\]

Let me draw the contrast explicitly, because if you understand only one thing about the cell-free landscape, this should be it. **PURE is fully defined, made entirely of purified components, expensive, lower-yield, ideal for mechanistic studies and for synthetic-cell work. TXTL is a crude lysate plus additives, made from intact cellular contents, cheap, higher-yield for most proteins, ideal for prototyping circuits and for high-throughput screening.** They are the two ends of a spectrum, and most working cell-free labs have both in the freezer for different purposes.

There is a beautiful methodological reason both systems have flourished. PURE answers the question "what is the minimum that translation requires?" TXTL answers the question "what is the maximum we can get done with a cell extract?" Both questions are interesting. Both have driven important science. Neither would have happened without the other forcing it into existence, because each system's weaknesses are the other system's strengths. The cell-free field, as a research community, is in some sense the productive tension between Ueda's purity and Noireaux's pragmatism.

\[Pause.\]

I want to mention one more piece of the TXTL ecosystem before we move on. Noireaux's group, and a number of other groups that have built on his work, have invested heavily in making the system **predictable**. Cell-free reactions used to be famous for batch-to-batch variability — the protein you made on Monday with batch number 7 was not quite the same as what you made on Friday with batch number 8, and nobody could quite say why. Modern TXTL protocols, with careful attention to lysate preparation, freezing, and reagent quality, have brought that variability down dramatically. The system is approaching the reliability of an electronics part. That reliability is what makes TXTL usable for the kinds of applications we are about to discuss — diagnostics, vaccines, on-demand manufacturing — where you cannot afford to have your reaction work three days out of five.

The big idea to leave this segment with: **TXTL, championed by Vincent Noireaux from the mid-2000s onward, took the bacterial cell-free system, supplemented it with sigma-70 and a tuned energy mix, and turned it into a cheap, accessible, fast platform for synthetic biology**. It is not as clean as PURE. It is not as well-characterized at the molecular level. But for a working synthetic biologist who wants to test ten variants of a circuit before lunch, TXTL is the tool that made that workflow possible.

Now let's open the hood and look at what actually happens inside a cell-free reaction when you set one up.

---

## SEGMENT 7 — Anatomy of a cell-free reaction: what's in the tube

I want to walk you through, concretely, what a cell-free protein synthesis reaction looks like in practice. Not in the abstract — in actual quantities, in actual microliters, in actual time. Because I have found that students get a much better intuition for the field once they can picture, physically, what is happening in the tube on the benchtop.

You start with a small reaction. A typical cell-free reaction is somewhere between five microliters and fifty microliters in total volume. A few drops. Less than a teardrop. You set it up in a small plastic PCR tube or in a well of a multiwell plate, and that small volume is everything — the entire factory, the entire raw material supply, the entire product, all sitting in that little drop.

Into that drop, you add the components in roughly the following order. **First, the extract or the reconstituted mix** — your S30, your TXTL, or your PURE, depending on which system you are using. This is typically the largest single component of the reaction, maybe a third to half the final volume. The extract supplies the ribosomes, the tRNAs, the synthetases, the polymerases, and the soluble factors that do the actual work.

**Second, the energy mix.** This is the pre-formulated cocktail of ATP, GTP, CTP, UTP, an energy regenerator like creatine phosphate or phosphoenolpyruvate, and the corresponding regeneration enzyme like creatine kinase or pyruvate kinase. The energy mix is the fuel and the fuel-recycling system, bundled together. It is what keeps the ribosomes spinning long after the initial ATP would have been consumed.

**Third, the amino acid mix.** All twenty proteinogenic amino acids, dissolved at concentrations sufficient to support translation for hours without depletion. In a typical kit, this comes pre-formulated; in a custom system, you mix it yourself from stock solutions.

**Fourth, the magnesium and potassium and other salt cocktail.** Translation requires a very specific ionic environment — typically around 10 millimolar magnesium, around 100 millimolar potassium, and a pH near 7.5. Too much magnesium and translation gets inaccurate; too little and the ribosomes do not assemble properly. Most kits supply these in pre-formulated buffers.

**Fifth, your DNA template.** This is your gene of interest, on a plasmid, or in some systems as a linear DNA fragment with proper promoter and terminator sequences. The amount is typically in the range of one to ten nanograms of DNA per microliter of reaction. That is a tiny amount of DNA — micrograms total in the whole reaction — but it is enough, because each DNA molecule gets transcribed many times into many mRNAs, and each mRNA gets translated many times into many proteins.

**Sixth, optional additives.** Maybe a chaperone, if your protein has a tendency to misfold. Maybe a disulfide bond formation system, if your protein needs disulfide bonds and the extract lacks the right redox environment. Maybe a fluorescent dye precursor, if you want real-time monitoring. Maybe a microsomes or liposomes preparation if your protein is a membrane protein. Maybe an RNase inhibitor if you are worried about RNA degradation. The optional additives are where you tune the reaction for your particular protein.

\[Pause.\]

Once everything is mixed, you incubate. The temperature is typically 30 degrees for _E. coli_-derived systems, sometimes 25 for stability-sensitive proteins, sometimes 37 for faster reactions. The time is typically two to six hours, though some systems can be productively run for up to a day or longer with periodic feeding of fresh nutrients. You can incubate in a thermal cycler, in a water bath, in a plate reader if you want real-time fluorescence readouts, or just on the bench in a temperature-controlled room.

What happens during those hours, mechanistically, is exactly what would happen inside a living cell, except concentrated and uninterrupted. Your DNA template gets bound by RNA polymerase, which transcribes it into messenger RNA. The mRNA, as it emerges from the polymerase — and in many bacterial reactions, even before transcription is complete — gets bound by ribosomes, which start translating. Aminoacyl-tRNA synthetases keep charging tRNAs with their cognate amino acids. The energy regeneration system keeps converting AMP and ADP back into ATP, and GDP back into GTP, so the ribosomes never run out of GTP for their elongation steps. The protein chains grow, one amino acid at a time, at a rate of around twenty amino acids per second per ribosome, which is roughly the same rate the cell achieves in vivo. The proteins fold, either spontaneously or with the help of any chaperones in the mix. After a few hours, you have accumulated a substantial amount of folded protein, and the reaction either runs to depletion or you stop it deliberately.

\[Pause.\]

At the end of the reaction, what do you have? You have a small volume — still those few microliters to tens of microliters — containing your protein, mixed with all the other components of the reaction. If your protein has a purification tag, like a hexahistidine tag, you can run the entire mix over a nickel affinity column and capture your protein away from the background. If your protein has a fluorescent fusion partner, you can read fluorescence directly without further purification. If you have engineered a cleavable signal, you can do an in-tube assay of the protein's activity without ever isolating it. Different downstream applications need different levels of purity, and one of cell-free's advantages is that, depending on the application, you often need less downstream purification than you would after a fermentation, simply because the background of unrelated proteins is much smaller.

The whole workflow — from "I have a piece of DNA encoding the protein I want" to "I have the folded protein in hand" — can be completed in a single working day. Set up the reaction in the morning. Incubate through lunch. Run a gel or do an assay in the afternoon. That speed, compared to the days-to-weeks cycle of fermentation-based protein production, is one of the most compelling practical features of the field.

The big idea to leave this segment with: **a cell-free reaction is a small, finite, self-contained chemistry** — DNA template, extract, energy, amino acids, salts, optional additives, four hours of incubation, protein out. Once you have the kit in your freezer, the labor and elapsed time required to produce a new protein are dramatically lower than in any living-cell approach. That speed advantage is what enables many of the downstream applications we are about to discuss.

But the question that always comes next is: how much protein? Is this enough to matter? Let's address that head-on.

---

## SEGMENT 8 — Yield: how much protein can a cell-free reaction make?

For decades, the polite answer to "how much protein does cell-free make" was "well, enough to confirm a band on a gel." The yields from classical reticulocyte lysate kits were a microgram or so per fifty-microliter reaction — fine for an autoradiogram, useless for almost anything industrial. That ceiling is what gave cell-free its reputation as a niche technique. People who needed real protein quantities went to fermentation.

The modern answer is dramatically different. Well-tuned _E. coli_ cell-free systems can now produce, for well-behaved proteins, in the range of **one to two milligrams of protein per milliliter of reaction**. That is not a typo. A milliliter of cell-free reaction can yield a couple of milligrams of finished protein, which is comparable to what you would get from a substantial _E. coli_ fermentation per equivalent volume. Some specific systems and specific proteins go higher. The Swartz group and the industrial groups at companies like Sutro Biopharma have reported yields above five milligrams per milliliter for some constructs. The ceiling has, in effect, moved up by three to four orders of magnitude over the last forty years.

How did we get there? It is worth understanding the engineering trajectory, because it tells you what is actually happening when a cell-free reaction succeeds or fails.

\[Pause.\]

The first major lever, as I mentioned in Segment 4, was **energy regeneration**. Early systems ran out of ATP within minutes. Modern systems use multi-stage energy regeneration based on metabolic substrates that the extract's residual enzymes can process — glucose, maltose, glycolytic intermediates like phosphoenolpyruvate. These substrates keep regenerating ATP for hours instead of minutes, and that single improvement is responsible for a large fraction of the yield gain.

The second lever was **inorganic phosphate management**. As ATP is hydrolyzed during translation, it releases inorganic phosphate. Phosphate accumulates in the reaction, and at high concentrations it inhibits translation. Newer systems use phosphate-scavenging or phosphate-precipitating strategies to keep that build-up under control.

The third lever was **redox state**. The cytoplasm of _E. coli_ is reducing — its disulfide bond formation is normally restricted. A cell-free reaction inherits that reducing environment from the extract. For proteins that need disulfide bonds — antibodies, many secreted proteins, many therapeutics — you have to add an explicit oxidizing system, typically a glutathione redox couple plus a disulfide isomerase like DsbC, to allow disulfide bonds to form correctly. Once that was figured out, a whole class of disulfide-containing therapeutic proteins became accessible to cell-free production.

The fourth lever was **strain engineering**. The _E. coli_ strain used to make the extract can itself be engineered. You can knock out proteases that would degrade your product. You can knock out competing enzymes that consume amino acids in side reactions. You can over-express factors that improve folding. The extract is, in effect, customizable at the source, by choosing the right starting strain and engineering it deliberately.

The fifth lever was **continuous-exchange formats**. In a batch reaction, you set up a fixed volume, you let it run, and you collect what you get. In a **continuous-exchange cell-free system** — CECF — you set up the reaction inside a small chamber separated from a much larger feeding chamber by a semipermeable membrane. Small molecules — energy substrates, amino acids — diffuse into the reaction chamber from the feed, while waste products diffuse out. The reaction sustains itself for much longer, and the yields climb correspondingly. CECF systems can run for twenty-four hours or more with cumulative yields well into the milligram-per-milliliter range.

\[Pause.\]

Now I should be honest about the asterisks. The headline yields of one to two milligrams per milliliter are achievable for **well-behaved proteins** — soluble, single-domain, no unusual folding requirements, no toxicity. For difficult proteins — membrane proteins, large multidomain proteins, proteins that need eukaryotic chaperones, proteins with complex post-translational modifications — yields are often much lower, sometimes by an order of magnitude or more. The advertised yields are the high end of the distribution, not the average.

Even at the high end, cell-free is not a wholesale replacement for fermentation in cost terms. If you need kilograms of a protein for a commercial drug, fermentation in a stirred-tank reactor at thousand-liter scale is, in most cases, still cheaper per kilogram. Cell-free shines at the small-batch end of the market — milligrams to grams, fast-turnaround, special applications. The cost per milligram of cell-free product, even with all the modern improvements, is still typically a few times higher than the cost per milligram from a well-optimized bacterial fermentation. The economics get more favorable for difficult proteins, for high-value low-volume products, and for applications where speed matters more than per-unit cost.

\[Pause.\]

What about scale? Cell-free reactions have been demonstrated at sizes ranging from sub-microliter droplets — in microfluidic devices, for high-throughput screening — up to **one hundred liters and beyond** in industrial settings. The companies that have commercialized cell-free for drug manufacturing have built reaction vessels of impressive size. Sutro Biopharma, which we will discuss in more detail in Segment 14, runs cell-free reactions at large industrial scale to produce antibody-drug conjugates with site-specifically incorporated unnatural amino acids. Greenlight Biosciences uses cell-free to produce RNA at agricultural scale for crop applications. The technology has scaled out of the lab and into manufacturing in a way that would have seemed implausible twenty years ago.

The big idea to leave this segment with: **modern cell-free can hit yields of one to two milligrams per milliliter for well-behaved proteins, which is competitive with bacterial fermentation per unit volume**, though still typically more expensive per milligram at very large scale. The yield gains have come from systematic engineering of energy regeneration, redox control, strain selection, and reaction format. Cell-free is no longer a kit-only technology limited to micrograms; it is a real protein production technology that can serve a real fraction of the protein production market, particularly at the small-batch, fast-turnaround, difficult-protein end.

Now let me start showing you what cell-free can do that living cells genuinely cannot. This is where the field gets exciting.

---

## SEGMENT 9 — Cell-free for unnatural amino acids

I want to start the second half of the cell-free toolkit story with the application that, in many ways, is cell-free's killer feature for protein engineers: the routine incorporation of **unnatural amino acids**, sometimes called **non-canonical amino acids**, abbreviated **ncAAs**.

Let me set up what this means. The standard genetic code uses twenty amino acids. Every protein in every living organism on Earth — with a handful of exotic exceptions — is built from those same twenty. Each amino acid is specified by particular codons in the mRNA, and the cell has, for each amino acid, a dedicated **aminoacyl-tRNA synthetase** enzyme that recognizes that amino acid and attaches it to a corresponding tRNA. The synthetase, the tRNA, the codon — together they form the machinery that links the genetic code to the chemistry of the protein.

For decades, protein engineers have wanted to add new amino acids to this code. Why? Because there are many useful chemical groups that the twenty canonical amino acids do not provide. A fluorescent amino acid would let you label a protein at a single specific position without disrupting its structure. A click-chemistry handle — an azide or an alkyne — would let you attach drugs, dyes, or polymers to a protein at a defined site, which is enormously useful for antibody-drug conjugates and for probing protein function. A photo-crosslinker would let you trap protein-protein interactions in living cells by shining light on them. A phosphomimetic amino acid would let you study phosphorylation effects without depending on a kinase. The list of useful chemical functionalities goes on, and none of them are accessible through the standard twenty amino acids.

The classical way to incorporate an unnatural amino acid into a protein, pioneered by **Peter Schultz** and his colleagues starting in the 1990s, is to engineer an **orthogonal aminoacyl-tRNA synthetase / tRNA pair**. You take a synthetase from one organism — typically a tyrosyl-tRNA synthetase from _Methanocaldococcus jannaschii_, a heat-loving archaeon — that does not cross-react with any of the host cell's natural synthetases or tRNAs. You mutate the synthetase's active site to recognize your unnatural amino acid instead of tyrosine. You pair it with its corresponding tRNA, which you have engineered to recognize a previously unassigned codon — typically the **amber codon**, UAG, which normally signals stop. Now, when your protein's mRNA contains an amber codon, the engineered tRNA delivers the unnatural amino acid to that position, and the ribosome incorporates it into the growing peptide chain. You have, in effect, added a twenty-first amino acid to your genetic code.

\[Pause.\]

Doing this in a living cell is hard. You have to express the orthogonal synthetase and tRNA at the right levels. You have to deliver the unnatural amino acid into the cell, which often means it has to be cell-permeable. You have to compete with release factor 1, which normally recognizes the amber stop codon and would terminate translation rather than letting your engineered tRNA win. You have to deal with the cell's own metabolism potentially degrading or chemically modifying your unnatural amino acid before it ever gets incorporated. It works — Schultz and many others have demonstrated impressive in-cell genetic code expansion — but it is a delicate biological art.

Doing this in cell-free is dramatically easier. The analogy I want you to carry: **for unnatural amino acids, you just throw the ncAA into the reaction; engineered aaRS-tRNA pairs incorporate it at amber codons; no live-cell genetic code expansion needed.** There is no cell membrane to cross. There is no cellular metabolism to compete with. There are no homeostatic mechanisms regulating the abundance of your engineered components. You add the synthetase, you add the tRNA, you add the unnatural amino acid, you add the DNA encoding your protein with the amber codon at the position you want modified, and the system does the rest. The incorporation efficiency, in well-tuned cell-free systems, can approach the efficiency of the natural twenty amino acids.

If you are using PURE, the cleanliness of the system makes ncAA incorporation even more tractable. You can leave out release factor 1 entirely, eliminating the main competitor for the amber codon. You can leave out the natural tyrosyl-tRNA synthetase if you are worried about cross-reactivity. You can dial the concentrations of the engineered components precisely. The system becomes a clean canvas on which you can paint a non-standard genetic code.

\[Pause.\]

Some specific demonstrations to give you a feel for what is possible. Cell-free systems have been used to incorporate **multiple different unnatural amino acids** at multiple different positions in the same protein, using engineered tRNAs that recognize different quadruplet codons or different rare codons. They have been used to incorporate **D-amino acids** — the mirror images of the natural L-amino acids — which produce proteins resistant to most proteases. They have been used to make **macrocyclic peptides** with non-natural backbones, which are interesting as a class of drug candidates that combine the specificity of antibodies with the cell-permeability of small molecules. They have been used in industrial workflows at companies like Sutro to make antibodies with site-specifically conjugated payloads, where the unnatural amino acid serves as the attachment point for a cytotoxic drug.

The Sutro example is worth pausing on because it shows the commercial maturity the field has reached. Sutro Biopharma manufactures antibody-drug conjugates — antibodies with cytotoxic small molecules covalently attached to them, designed to deliver the small molecule specifically to cancer cells. Traditional antibody-drug conjugates are made by chemical conjugation to lysine or cysteine residues on the antibody, which gives heterogeneous products because there are many such residues. Sutro uses a cell-free system to produce antibodies with a specific unnatural amino acid incorporated at a single defined position; the unnatural amino acid carries a click-chemistry handle; the drug payload is then attached, site-specifically, with high yield, to that one position. The product is homogeneous in a way conventional methods cannot achieve. The drug works, in part, because the manufacturing platform allows site-specificity. And the manufacturing platform is cell-free.

The big idea to leave this segment with: **cell-free is the most permissive environment we have for incorporating non-standard amino acids into proteins**. The membrane is not in the way. The metabolism is not in the way. The regulatory homeostasis is not in the way. You add the parts, the reaction runs, and your protein contains residues that no natural cell would ever make. For a substantial and growing fraction of protein engineering applications — fluorescent labeling, click chemistry, photo-crosslinking, drug conjugation, novel chemistries — cell-free is rapidly becoming the default platform.

\[BREAK\]

\[Suggested break point. About one hour in. If you are running this as a two-hour lecture with a mid-point pause, this is the place. Take ten minutes. Come back for the second half, where we move from PURE and TXTL as platforms into the applications they enable — membrane proteins, toxic products, diagnostics, vaccines, synthetic cells, and the frontier of where cell-free is going next.\]

---

## SEGMENT 10 — Cell-free for membrane proteins

Welcome back. We are going to spend the second half of the lecture on applications, because the applications are where the recent excitement in cell-free really lives. And I want to start with a class of proteins that has tormented biochemists for as long as biochemistry has existed: **membrane proteins**.

Membrane proteins, as the name suggests, are proteins that live in membranes. They span the lipid bilayer. They include ion channels, G-protein-coupled receptors, transporters, membrane-bound enzymes, components of the photosynthetic apparatus, components of the respiratory chain — roughly a quarter of all proteins in a typical organism. They are also overwhelmingly important as drug targets: by some estimates, more than half of all small-molecule drugs on the market today act on a membrane protein.

The problem is that membrane proteins are notoriously difficult to express. In a living cell, when you over-express a membrane protein, several bad things tend to happen. The cell's membrane gets overloaded with the new protein, which can disrupt cellular function and kill the cell. The protein-translocation machinery — the system that inserts new membrane proteins into the membrane as they are translated — gets saturated and starts dropping cargoes, which then aggregate in the cytoplasm into useless inclusion bodies. The cell, in self-defense, often shuts down expression of the offending protein, induces stress responses, or simply dies. Generations of biochemists trying to express a membrane protein for structural studies have come to dread the moment when, after weeks of work, the cells just stop growing because the protein they were supposed to make has become an existential threat to their hosts.

Cell-free sidesteps the entire problem. There is no cell. There is no membrane to overload. There is no translocation machinery to saturate. The protein is being synthesized in a tube of soluble extract, and the protein is, by default, going to come out either as a soluble misfolded aggregate or as a soluble functional protein, depending on how you set up the reaction.

\[Pause.\]

The trick — and this is the engineering insight that turned cell-free membrane protein expression from a curiosity into a useful technique — is to supply the membrane protein, during synthesis, with a mimic of the lipid environment it needs in order to fold properly. There are several ways to do this, and I will walk you through the main ones.

**Approach one: detergents.** You add a mild detergent to the cell-free reaction at a concentration above its critical micelle concentration. The detergent forms small micelles in solution, and the nascent membrane protein, as it emerges from the ribosome, finds itself in an environment where its hydrophobic surfaces can insert into the micelles instead of aggregating. The protein folds, more or less correctly, into a detergent-micelle-bound state, and you can purify it directly from the reaction. Different detergents — DDM, LMNG, OG, and so on — give different folding outcomes, and the choice of detergent often matters more than any other variable in the reaction.

**Approach two: liposomes.** You add small lipid vesicles — liposomes — to the cell-free reaction. The nascent membrane protein inserts into the lipid bilayer of the vesicle as it is being made, ending up as a properly oriented integral membrane protein in a real lipid environment. This is closer to the in vivo situation than the detergent approach and often gives better-folded protein, though it is more complex to set up and the yields can be lower.

**Approach three: nanodiscs.** Nanodiscs are small disc-shaped patches of lipid bilayer surrounded by a membrane scaffold protein, typically a truncated form of apolipoprotein A-I. They are around ten nanometers in diameter and provide a small, well-defined patch of bilayer that a membrane protein can insert into. You add empty nanodiscs to the cell-free reaction, and as the membrane protein is synthesized, it inserts into the nanodisc lipid bilayer. The result is a membrane-protein-in-nanodisc complex that is soluble, well-defined, and amenable to many downstream analyses including cryo-electron microscopy.

**Approach four: SMA copolymers and related amphipathic polymers.** These are more recent additions to the toolkit. The polymers can wrap around small patches of membrane, holding them in solution while preserving the native lipid environment.

\[Pause.\]

The yields for cell-free membrane protein expression are typically lower than for soluble proteins — a fraction of a milligram per milliliter is more typical than two milligrams per milliliter — but the alternative is often zero milligrams per milliliter from a cell-based system that simply cannot tolerate the protein. So for many membrane proteins, cell-free has gone from "an interesting option" to "the only option that works."

The analogy I want you to carry: for membrane proteins, cell-free is "**you bypass cellular toxicity by adding the membrane mimic directly to the reaction; the protein never has to insert into a real cell membrane that the real cell would die from**." The lipid environment is no longer the cell's membrane; it is whatever mimic you choose to add. That decoupling of the membrane from the cellular host is what makes the impossible become routine.

Some specific demonstrations to give you a feel. Membrane proteins that have been successfully expressed in cell-free systems include bacterial ion channels (like the mechanosensitive channel MscL), G-protein-coupled receptors (which are notoriously hard in cell-based systems), pumps and transporters, photosynthetic reaction centers, and even multi-component complexes like the ATP synthase. The cell-free expression of multi-component membrane machines — entire functional rotors and transporters — assembled correctly inside nanodiscs or liposomes, is one of the more spectacular demonstrations of what the technology can do.

There is also a connection here to the synthetic-cell direction we will come back to in Segment 16. If you can express a membrane protein in cell-free and have it insert into a liposome, then you can use that liposome as the membrane of a synthetic cell — a cell-free reaction inside a vesicle, with engineered membrane proteins providing the boundary functions a real cell would need. The technology that solves the membrane-protein expression problem is also part of the toolkit for building synthetic life from scratch.

The big idea to leave this segment with: **cell-free is uniquely well-suited to membrane protein expression because the absence of a real cellular membrane means you can supply whatever membrane mimic the protein needs**. Detergent micelles, liposomes, nanodiscs, amphipathic polymers — all of them have a place in the toolkit, and the choice is dictated by what the protein needs to fold correctly. For a substantial fraction of difficult membrane targets, cell-free has become the production method of choice.

---

## SEGMENT 11 — Cell-free for difficult products: toxins, antimicrobials, kill-on-sight proteins

If cell-free's first killer feature is unnatural amino acids and its second is membrane proteins, its third is what I am going to call the **killer protein** problem — proteins that kill the cells that make them.

There is a substantial class of biologically important proteins that no living _E. coli_ can express, because the proteins are toxic to _E. coli_. Antimicrobial peptides — short cationic peptides that disrupt bacterial membranes — are toxic by design; that is what they do for a living. Bacterial toxins — diphtheria toxin, cholera toxin, the various pore-forming toxins — are designed by evolution to damage cells. Plant defense proteins, snake venom components, fungal toxins, various tumor-necrosis-factor-like proteins, restriction enzymes that cut DNA non-specifically — the list of useful proteins that any sane bacterium would refuse to make on its own behalf is long and growing.

The analogy I want you to carry: **for toxic products, cell-free is the killer feature — if your protein is lethal to _E. coli_, you cannot grow _E. coli_ to make it; in a tube, with no _E. coli_ to kill, no problem.** The cell that would die simply is not there. The protein gets made. The reaction runs to completion. You collect your toxic peptide and you have something useful for whatever application you had in mind — antimicrobial drug development, vaccine antigen production, toxicology research, biochemistry of pore formation, structural biology of the toxin itself.

\[Pause.\]

Let me give you a few concrete examples. **Antimicrobial peptides** are an active area of drug development as the antibiotic resistance crisis deepens. Many of them — defensins, magainins, the various LL-37 family peptides — are difficult to produce in living bacteria because they kill the producing bacteria. Cell-free systems have become a routine way to produce these peptides for activity testing, structure-activity relationship studies, and early-stage drug development. A library of antimicrobial peptide variants can be expressed in parallel in cell-free reactions, screened for activity against pathogens, and prioritized for further development — all without ever needing to grow a bacterium that is being asked to commit suicide.

**Pore-forming toxins** are another class. The mechanosensitive pore alpha-hemolysin from _Staphylococcus aureus_ is interesting as a tool for nanopore sequencing — Oxford Nanopore's sequencing technology depends on pore-forming proteins of related kinds. Producing these toxins in cell-free is easier than in cells, because the cell would otherwise have its membrane perforated by the very protein it is making.

**Diphtheria toxin** and related toxins are important as vaccine antigens. The detoxified versions — the toxoids — have historically been made by chemical inactivation of the natural toxin produced in tightly controlled fermentation. Cell-free offers a route to make the toxin or engineered variants of it without the biocontainment challenges of culturing toxigenic strains.

**Restriction enzymes** with broad or relaxed specificity can be toxic to _E. coli_ because they cut the _E. coli_ chromosome. Producing these in cell-free systems lacking exposed genomic DNA, or with the cell-free system's nucleic acid environment controlled, sidesteps the suicide problem.

**Channels and pumps** that disrupt cellular ion homeostasis — proton pumps from extremophiles, exotic ion channels with strong activity — are often toxic when expressed in living cells. Cell-free expression lets you produce them for biophysical characterization without dealing with the host's distress.

\[Pause.\]

The mechanism by which all of this works is, again, beautifully simple. The cell-free reaction does not care that the protein it is making would, in a different context, kill a cell. The ribosomes are doing their normal job. The energy regeneration system is doing its normal job. The amino acids are being incorporated as they always are. The fact that the resulting protein, once folded, would be toxic to a living organism is irrelevant to the chemistry of making it, because there is no living organism present. The protein accumulates, is folded, and sits in the tube waiting for you to collect it.

There is, however, a small caveat that is worth flagging. Some toxic proteins are toxic to the cell-free reaction itself. A restriction enzyme that cuts your DNA template will, if produced in your cell-free reaction, eventually cut up the template that is producing it, shutting down the reaction in a kind of molecular feedback. A protease that hydrolyzes its surroundings will hydrolyze your ribosomes. For these special cases, you have to set things up carefully — perhaps with the toxic activity sequestered through a tagged inactive form that you activate after the reaction, or with the reaction stopped early before the toxicity becomes self-defeating. But these are edge cases. For most toxic products, the simple fact that there is no living cell in the way is enough.

\[Pause.\]

There is a broader conceptual point here that I want to surface. **Living cells are general-purpose factories that come with strong opinions about what can be made.** A living _E. coli_ has spent billions of years evolving to survive, and one of the things it has evolved is the ability to refuse to commit suicide on demand. If you ask it to make a protein that would kill it, it will not, in general, cooperate. It may shut down expression. It may mutate your construct. It may die before you can collect anything. Living cells, in this sense, have ethical opinions about their products, and those opinions get in the way of certain kinds of engineering.

Cell-free has no opinions. The chemistry runs as instructed. The system has no self-preservation instinct because there is no self to preserve. This is, in some philosophical sense, the deepest reason cell-free has become important — it is the first protein production technology in which the production system itself has no stake in the outcome. That neutrality opens up product spaces that living cells fundamentally cannot reach.

The big idea to leave this segment with: **cell-free can make proteins that would kill any cell tasked with making them, because there is no cell to kill**. Antimicrobial peptides, bacterial toxins, restriction enzymes with relaxed specificity, ion channels that disrupt homeostasis — the whole catalog of dangerous-to-the-cell proteins becomes accessible. For a substantial set of important biological and pharmaceutical targets, this is the difference between possible and impossible.

---

## SEGMENT 12 — Synthetic Genomics, iGEM Marburg, and cell-free as a biology platform

I want to step back from specific applications for a moment and talk about how the cell-free framework has reshaped the way some communities think about biology itself. Cell-free is not just a way to make protein. Increasingly, it is a way to **think** about biological systems — as collections of biochemical functions that can be moved, in defined ways, between living and non-living contexts.

The clearest example of this conceptual shift is the work of the **Synthetic Genomics** community, most prominently associated with **J. Craig Venter** and his various institutes. Venter's group is famous for chemically synthesizing entire bacterial genomes and booting them up inside cells — the so-called "synthetic _Mycoplasma_" work that culminated in the JCVI-syn3.0 minimal cell published in 2016. That work is mostly cell-based, not cell-free, but the conceptual move it embodies — treating the genome as a piece of software you can rewrite from scratch — is deeply aligned with the cell-free worldview. If the genome is software, then the cell is hardware, and the question of whether to run that software in a living hardware platform or in a defined biochemical one becomes an engineering choice rather than a biological necessity.

Cell-free fits into this vision as a **defined hardware platform**. PURE, in particular, with its fully specified component list, lets you ask: what does this genome actually need in order to function? What is the minimal biochemical environment in which this set of genes can be expressed and the resulting proteins can do something useful? Those questions are essentially impossible to ask in a living cell, because the cell brings everything it has with it. They become tractable in a cell-free system, because you control what is in the tube.

\[Pause.\]

The **iGEM Marburg** team has been one of the more consistent and creative champions of cell-free as a platform for synthetic biology pedagogy and research. iGEM, as some of you will know from the genetic-circuits lecture, is the International Genetically Engineered Machine competition — an annual undergraduate-led contest in which teams from around the world design and build synthetic biology projects over a summer. The Marburg team has, year after year, used TXTL-based cell-free systems for projects that range from teaching kits to engineered diagnostics to systematic part characterization. They have made significant contributions to the open-source cell-free toolkit, including reagent recipes, plasmid designs, and protocols that have lowered the barrier to entry for new groups.

Why does this matter? Because cell-free is, in a sense, the ideal platform for **iterative undergraduate synthetic biology**. A team has a summer to design and test their project. With a living-cell workflow, each iteration takes days — clone, transform, grow, induce, harvest, assay. With a cell-free workflow, each iteration takes hours — set up the reaction, incubate, read out. A team can run dozens of experiments in the time a cell-based team could run a few. The feedback loop tightens. The learning accelerates. The students get a much more visceral feel for how genetic parts actually behave.

The same logic applies, at a more sophisticated level, in research labs around the world. Cell-free has become a routine **prototyping environment** for genetic circuits. You design a circuit, you build the DNA, you drop it into a TXTL reaction, you measure the response. You iterate. Only when the circuit is performing the way you want do you commit to putting it into a living cell, where the iteration cost is much higher. Cell-free has, in this sense, become to synthetic biology what a breadboard is to electronics — the fast, cheap, forgiving place where you work out the design before you commit it to the slow, expensive, finicky platform that is a living cell.

\[Pause.\]

There is also a broader vision, championed by various groups, of **cell-free as a biology operating system**. The idea is that, ultimately, the cell-free reaction is just a small piece of chemistry, and chemistry can be moved around. You could have a cell-free reaction running in a microfluidic chip, with hundreds of parallel small reactions doing different things, controlled by a computer. You could have a cell-free reaction freeze-dried onto paper, packaged in a small foil pouch, shipped anywhere in the world, and activated by adding a drop of water — we will talk about this specifically in Segment 13. You could have a cell-free reaction embedded in a wearable device that produces a therapeutic protein on demand in response to a sensor signal. You could have a cell-free reaction in a spaceship, producing proteins for astronauts during long-duration missions where carrying a refrigerator full of pre-made proteins is impractical. All of these are speculative-but-not-crazy applications that have been actively explored in the last decade.

The conceptual move that enables all of this is the move from thinking about biology as something that happens **inside cells** to thinking about biology as something that happens **anywhere the chemistry can be supported**. Cells happen to be one supporting environment. Tubes are another. Paper is another. Microfluidic chips are another. Liposomes are another. The cell is not the irreducible unit of biological function; the molecular machinery is. Once you internalize that, the entire engineering landscape of biology opens up.

\[Pause.\]

I want to flag one more piece of this conceptual shift before we move on. There is a longstanding philosophical question in biology about what counts as "alive." Most people's intuition says a cell is alive and a tube of chemistry is not. But a cell-free reaction is, at the molecular level, doing many of the things we associate with life — transcribing DNA, translating proteins, consuming energy, producing complex macromolecules. It is doing all of those things in a tube, with no membrane, no replication, no evolution. Is it alive? Most biologists would say no, because it lacks key features — self-reproduction, evolution, organizational unity. But it is a sharp reminder that the categories we use to think about life are not as clean as we sometimes imagine. The synthetic-cell work that we will get to in Segment 16 leans heavily into this ambiguity, trying to build, step by step, systems that progressively acquire more and more of the features we associate with life, starting from cell-free reactions as the foundation.

The big idea to leave this segment with: **cell-free is not just a protein production technology; it is a conceptual move that lets us treat biology as portable chemistry**. The synthetic-genomics community uses it to ask what is minimally required for a genome to function. The iGEM teams use it as a prototyping platform for genetic circuits. The frontier groups use it to build candidate synthetic cells. And the conceptual shift it embodies — from "biology is what happens in cells" to "biology is what happens wherever the molecules are" — is one of the genuinely new ideas the field has produced.

Now let me show you the application of cell-free that I think has had the biggest direct impact on the world so far: paper-based diagnostics.

---

## SEGMENT 13 — Cell-free for biosensors: paper diagnostics and the Pardee-Collins work

In 2014 and again in 2016, two papers from the laboratories of **Keith Pardee** and **James Collins** — the same James Collins who, sixteen years earlier, had built the toggle switch with Tim Gardner — demonstrated something that has, to my mind, the strongest claim of any cell-free application to having changed the world in a directly visible way. They showed that cell-free protein synthesis reactions can be **freeze-dried onto paper**, stored at room temperature, shipped anywhere, and reactivated by adding a drop of water — at which point the reactions run and produce a visible color change in response to specific RNA inputs. In effect, they had created a **field-deployable diagnostic platform** that needed no refrigeration, no instrumentation, and no laboratory.

Let me walk you through what this means, because the elegance of the thing only becomes obvious when you understand the constraints it solves.

A traditional molecular diagnostic — say, a PCR test for a specific pathogen — requires a thermal cycler, sample preparation reagents, controlled storage of enzymes, and a trained operator. That is fine in a hospital or a public-health lab. It is a serious problem in a remote village in an outbreak zone, where there is no electricity, no refrigeration, no trained technician, and no time to set up complex equipment. For decades, the field of diagnostics has been trying to develop something that works under those conditions, and the gold standard for "works under those conditions" is the lateral-flow assay — the pregnancy-test-style strip that gives a yes/no answer with no power and no instruments. Lateral-flow assays work great when the target is a protein you can raise an antibody against. They do not work when the target is a specific RNA sequence — say, a particular viral genome.

The Pardee-Collins insight was this. If you take a cell-free reaction, with all its translation machinery and energy components, and you **freeze-dry** it — flash-freeze and then sublimate the water under vacuum — you get a dry pellet that contains all the components in inactive form. The dry pellet can be embedded in paper. The paper can be packaged in a foil pouch. The pouch can sit on a shelf for months. When you are ready to use it, you add a drop of water — possibly a drop containing your patient sample — and the freeze-dried components rehydrate, the reaction starts, and the system runs as if you had set it up fresh on a benchtop.

\[Pause.\]

The clever part is how they made the system **respond specifically to a particular RNA sequence**. They used a class of designed regulatory RNAs called **toehold switches**, developed in the Collins lab and the Yin lab. A toehold switch is an mRNA whose ribosome binding site is sequestered in a hairpin structure that prevents translation. The hairpin can be opened by base-pairing to a specific "trigger" RNA — when the trigger is present, it pairs with a single-stranded "toehold" region of the switch, the hairpin unfolds, the ribosome binding site becomes accessible, translation initiates, and downstream you make a reporter protein. No trigger, no protein. Trigger present, protein.

The reporter is typically an enzyme that turns a colorless substrate into a visibly colored product. **LacZ**, the beta-galactosidase enzyme we have mentioned in other lectures, can convert a yellow substrate into a purple product. So the readout is: dip the paper in a sample, wait a few minutes to an hour, look at the color. If the paper turns purple, the trigger RNA is present. If it stays yellow, it is not. Visible to the naked eye. No instrument required.

\[Pause.\]

The 2014 paper demonstrated the platform on a few test triggers. The 2016 paper — the one I want to call out specifically — applied it to **Zika virus**. The Zika outbreak in the Americas was at its height in 2015 and 2016, and there was urgent demand for rapid, deployable diagnostics. The Pardee-Collins group designed toehold switches that would respond to specific sequences in the Zika viral genome, embedded the cell-free reactions on paper, and demonstrated detection of Zika RNA from infected serum and even from infected mosquito tissue, at clinically relevant concentrations, all using nothing but the paper-based reaction and a smartphone camera as a quantification tool.

A few years later, when COVID hit, the same platform was rapidly adapted for SARS-CoV-2 detection. The lead time from "we need a test for this new virus" to "we have a paper-based cell-free test for it" was measured in weeks rather than months, because the cell-free chassis was already in place. Only the toehold-switch sequence needed to be redesigned to match the new virus, and toehold switches are short, computational designs that can be produced quickly. The platform demonstrated, in the middle of an actual pandemic, the kind of rapid-response capacity that the field had been promising for years.

The analogy I want you to carry: **Pardee-Collins paper diagnostics are cell-free TXTL freeze-dried onto paper — add sample, watch color change; you get a field-deployable diagnostic from no equipment, no refrigeration, no electricity.** The cell-free system is the chassis. The toehold switch is the programmable sensor. The color change is the readout. The whole thing fits on a strip of paper that can be mailed.

\[Pause.\]

I want to highlight a couple of design features that make this work in practice. **First, the cell-free reaction is freeze-dryable**, which is not obvious. Freeze-drying biological reagents typically requires careful formulation — sugars and excipients that protect proteins through the freezing and dehydration steps. The Pardee-Collins recipe uses sucrose and trehalose as cryoprotectants, and the resulting freeze-dried pellets retain activity for at least a year at room temperature. **Second, the toehold switch is robust.** It works with high specificity — a single nucleotide mismatch in the trigger can be discriminated, when the switch is properly designed — and the orthogonality between different toehold switches is good enough that you can run multiplexed assays detecting multiple targets in the same reaction. **Third, the color change is quantifiable.** A smartphone camera, with appropriate software, can convert the color intensity into a numerical concentration estimate, turning a yes/no test into a quantitative one without requiring any additional hardware.

The broader impact of this platform extends beyond infectious-disease diagnostics. The same approach has been applied to detection of antibiotic resistance markers, to gene expression profiling in low-resource settings, to environmental monitoring for contaminants, and to a number of other applications where you need a programmable molecular sensor that does not require a lab.

The big idea to leave this segment with: **the Pardee-Collins paper-based cell-free diagnostic platform demonstrates that the cell-free reaction can be packaged as a stable, shippable, refrigeration-free, instrument-free, field-deployable molecular sensor**. It is one of the cleanest demonstrations that cell-free is not just a research tool but a real piece of practical technology with direct applicability to public health. And it leans on the cross-pollination between cell-free as a chassis, toehold switches as programmable sensors, and freeze-drying as a packaging technology — three ideas that, combined, produce something none of them could produce alone.

---

## SEGMENT 14 — Cell-free for high-throughput protein expression: Sutro, Greenlight, and the commercial wave

If the previous segment was about cell-free's most visible humanitarian application, this segment is about its most visible commercial one. Over the last decade, a handful of companies have built businesses around cell-free protein synthesis at industrial scale. They are worth knowing about, because they represent the validation of the field's claims — when companies are willing to put hundreds of millions of dollars into building cell-free manufacturing facilities, the technology is no longer a research curiosity.

The clearest case is **Sutro Biopharma**, a company spun out of work originating in James Swartz's lab at Stanford. Sutro's platform is called **XpressCF**, and it is an _E. coli_-extract-based cell-free system optimized for therapeutic protein production at industrial scale. The company specializes in **antibody-drug conjugates** — antibodies with cytotoxic small molecules covalently attached to them, designed to deliver chemotherapy specifically to cancer cells. As I mentioned in the segment on unnatural amino acids, Sutro's competitive edge is the site-specific incorporation of an unnatural amino acid into the antibody that serves as a defined attachment point for the cytotoxic payload. This site-specificity gives homogeneous products that traditional chemistry-based conjugation cannot match.

Sutro runs cell-free reactions at the **hundred-liter to thousand-liter scale**. That is real industrial-scale chemistry, in stirred reactors, with the kind of process controls and quality systems that any pharmaceutical manufacturing requires. The company has multiple drug candidates in clinical trials, manufactured entirely on the cell-free platform. The technology has, in this sense, fully crossed the chasm from "interesting" to "supports real pharmaceutical development."

\[Pause.\]

Another important player is **GreenLight Biosciences**, which uses cell-free systems not to make protein but to make **RNA** — specifically, double-stranded RNA used as a pesticide that triggers RNA interference in target insect pests. The cell-free chassis is the same general TXTL-style _E. coli_-extract system; the product is a defined RNA species rather than a protein. GreenLight has scaled this technology to the kind of agricultural volumes you need for crop protection, which are orders of magnitude larger than pharmaceutical volumes. They have moved tons of cell-free-produced RNA through pilot manufacturing. The platform demonstrates that cell-free is not limited to high-value low-volume protein products; it can serve commodity-volume markets when the economics align.

A third class of company uses cell-free as a **high-throughput protein production engine** for early-stage drug discovery and antibody screening. Companies like **Tierra Biosciences** offer cell-free protein synthesis as a service — you send them DNA, they send you back protein, in a matter of days, for thousands of constructs in parallel. The customer is typically a pharmaceutical company that wants to screen a large library of antibody variants or enzyme variants without going through the time and cost of cloning, transforming, growing, and harvesting cells for each one. The cell-free workflow is dramatically faster for parallel small-batch production, and that speed is the basis of a real service business.

\[Pause.\]

There are also a number of academic-style platforms that have been developed and made available to the broader research community. **Federici** and others have published open-source TXTL protocols. **Christopher Voigt's** lab and several others have developed cell-free systems for systematic part characterization, where you express thousands of variants of a genetic part in cell-free, measure their performance, and use the resulting data to train computational models of how parts behave. This kind of high-throughput, systematic characterization is starting to give synthetic biology the kind of empirical foundation it has long needed, and cell-free is the practical engine that makes it tractable.

The pattern across all of these commercial and high-throughput academic applications is the same. **Cell-free wins at small batches, fast turnaround, parallel screening, and special products that living cells cannot easily make.** Cell-free loses, in pure cost terms, at very large volumes where fermentation is still cheaper. The market is settling into a stable division of labor where each technology serves the applications it is best suited for, and cell-free is securing a substantial chunk of the market that fermentation cannot serve efficiently.

\[Pause.\]

I want to mention one specific frontier of commercial cell-free that is worth watching: **on-demand manufacturing**. The vision here is that, instead of producing a drug or a vaccine at a centralized facility and distributing it through a cold chain, you could produce it where and when it is needed, using a small portable cell-free device fed with the appropriate DNA template. The military has been particularly interested in this for forward-deployed medical applications. Several companies and research groups have demonstrated prototype portable cell-free reactors that can produce small quantities of therapeutic protein from a freeze-dried kit and a DNA template, in remote settings, without the infrastructure of a traditional biopharmaceutical supply chain. The technology is not yet ready for routine clinical use, but the trajectory is clear, and the underlying capability — protein production from a portable device — is the kind of thing cell-free uniquely enables.

The big idea to leave this segment with: **cell-free has crossed the chasm from research tool to commercial manufacturing platform**. Sutro produces clinical-stage antibody-drug conjugates with site-specific unnatural amino acids on cell-free. GreenLight produces agricultural-scale RNA on cell-free. Service companies like Tierra produce thousands of proteins per week on cell-free for the pharmaceutical industry. The technology has been validated by the willingness of serious commercial actors to bet large sums of money on it, and the bet is, at this point, clearly paying off.

---

## SEGMENT 15 — Cell-free vaccine production: rapid prototyping for new pathogens

Vaccines are a special category of biological product, and cell-free has been making inroads here for several reasons. Vaccines often need to be developed quickly in response to new pathogens. Vaccines often need only modest quantities of protein per dose. Vaccines often involve antigens that are difficult to express in living cells. And the regulatory and manufacturing infrastructure for vaccines is mature enough to accommodate new production platforms when those platforms offer compelling advantages.

The pandemic showed everyone what fast vaccine development can look like, and the mRNA vaccines from Pfizer-BioNTech and Moderna were the headline technology. But cell-free protein synthesis has its own role to play in the vaccine landscape, particularly for **protein-based subunit vaccines** — vaccines that consist of a purified protein antigen, often one piece of a pathogen, formulated with an adjuvant to stimulate an immune response.

The classical workflow for a protein-based subunit vaccine looks like this. Identify the antigen — typically a surface protein of the pathogen. Clone the gene encoding the antigen. Express it in a production host — _E. coli_, yeast, insect cells, or mammalian cells, depending on the antigen's requirements. Purify the protein. Formulate it with adjuvant. Test in animals, then in humans. The expression-and-purification steps can take months to optimize for a new antigen, particularly if the antigen is difficult to produce. That months-long timeline is fine for vaccines against well-known pathogens, but it is a serious problem during an outbreak of a novel pathogen.

\[Pause.\]

Cell-free offers a dramatic shortcut. The genes can be synthesized in hours. The cell-free expression can be set up in hours. Variants of the antigen — different domains, different fusions, different mutations — can be produced and screened in parallel in a matter of days. The result is that you can go from "we have just sequenced this new pathogen's genome" to "we have a set of candidate antigens to test in animals" in a fraction of the time the traditional workflow requires.

Several groups have demonstrated cell-free vaccine antigen production for various pathogens. The **Pardee-Collins** group, in addition to their diagnostic work, demonstrated cell-free production of vaccine antigens including some viral surface proteins. Other groups have used cell-free to make antigens for malaria, for tuberculosis, for various respiratory viruses. The platform is particularly useful for **rapid prototyping** — testing dozens of variants of a candidate vaccine antigen to find the one with the best expression, folding, and immunogenicity profile.

There is also active research into using cell-free systems for **virus-like particle** production. Virus-like particles are protein shells that mimic the structure of a virus without containing any viral genetic material, and they are used as a vaccine modality for several diseases — the HPV vaccine is the most prominent example. Cell-free systems can produce the structural proteins of virus-like particles, and in some cases the proteins self-assemble into virus-like-particle structures within the cell-free reaction itself.

\[Pause.\]

The connection to **on-demand manufacturing** that I mentioned in the previous segment is particularly relevant for vaccines. Imagine a scenario where a new pathogen emerges in a remote region, and you need to deploy a vaccine candidate to test in a small population without waiting for centralized manufacturing to ramp up. A portable cell-free reactor, fed with the DNA encoding the candidate antigen, could in principle produce vaccine doses on site. This is speculative for now, but it is the kind of vision that has motivated significant investment from defense agencies and from biosecurity-focused funders.

The mRNA vaccine technology that has gotten so much attention recently does not directly use cell-free protein synthesis — the mRNA in those vaccines is delivered into your own cells to be translated by your ribosomes, in vivo. But there is conceptual overlap: both mRNA vaccines and cell-free vaccines are platform technologies in which the antigen is encoded in a nucleic acid that is decoded by translation machinery, with the major difference being whether the translation happens in the patient's cells or in a manufacturing reactor. The flexibility of nucleic-acid-encoded antigens, combined with the speed of cell-free expression, points toward a future of more rapid vaccine response capacity than the traditional fermentation-based workflow allows.

\[Pause.\]

A few caveats worth flagging. Cell-free is not yet, to my knowledge, the production platform for any FDA-approved vaccine in routine use. The technology is being explored, prototyped, and demonstrated, but for licensed vaccines the regulatory pathway and manufacturing economics still favor traditional cell-based systems in most cases. The advantage of cell-free is most pronounced for early-stage development — for getting from sequence to testable antigen quickly — and somewhat less pronounced for the late-stage manufacturing of approved products. Whether cell-free becomes a dominant platform for licensed vaccines over the next decade depends on a lot of things, including the regulatory environment, the comparative economics, and the next pandemic's specific challenges.

The big idea to leave this segment with: **cell-free has a particularly strong fit with vaccine prototyping, where the ability to go quickly from pathogen sequence to candidate antigen is at a premium**. The platform shortens the timeline. It accommodates difficult antigens. It enables parallel testing of variants. And it offers a route, in principle, to portable on-demand vaccine production for outbreak response. Whether that potential is fully realized depends on continued engineering and regulatory development, but the trajectory is promising.

---

## SEGMENT 16 — Cell-free in liposomes: the protocell and synthetic-cell project

Now we get to one of the most intellectually thrilling things happening in the cell-free space, and one that, in some sense, is the field's grand challenge. I want to talk about the project of using cell-free reactions to **build something that approaches a living cell from non-living components**.

Here is the framing. A cell, abstractly, is a small volume of biochemistry enclosed in a membrane, capable of taking in nutrients, processing them, growing, and dividing into two daughters. The chemistry inside the cell is precisely the kind of chemistry that a cell-free reaction can do. The membrane is a lipid bilayer, which we can make synthetically as **liposomes** — small spherical vesicles enclosed by a lipid bilayer. So in principle, you could take a cell-free reaction, encapsulate it inside a liposome, and create a small object that does what a cell does, but built from purified parts in the lab.

The technical name for this project is **bottom-up synthetic biology**, sometimes called the **synthetic cell** or **artificial cell** project. The analogy I want you to carry: **cell-free in liposomes is the synthetic-cell direction — encapsulate cell-free machinery in a lipid vesicle, try to build a self-replicating system from purified parts.** The goal, in its most ambitious form, is to construct a system that can sustain itself, grow, divide, and pass on its information to the next generation, entirely from components that we put together in the lab.

\[Pause.\]

The state of the art is impressive but still well short of the ultimate goal. Researchers can now routinely encapsulate cell-free reactions — typically PURE, because of its defined composition — inside liposomes ranging from hundreds of nanometers to tens of micrometers in diameter. Inside those liposomes, the cell-free reaction can produce protein from an encapsulated DNA template, and the protein can do things — insert into the liposome membrane, catalyze metabolic reactions, even produce more lipid that gets incorporated into the membrane and makes the liposome grow.

Several specific milestones have been achieved or are being pursued. **Membrane protein synthesis and insertion**: cell-free reactions inside liposomes have been used to produce membrane proteins that insert into the surrounding liposome bilayer, in the correct orientation, with retained function. This is a key building block for any synthetic cell, because real cells depend on membrane proteins for transport and signaling. **Lipid synthesis**: groups have built cell-free reactions that produce phospholipids from precursors, with the resulting lipids getting incorporated into the encapsulating liposome. In principle, this gives a synthetic cell the ability to grow its own membrane. **DNA replication**: cell-free reactions containing purified DNA polymerases can copy DNA templates, providing a route to information inheritance. **Division**: physical division of liposomes has been demonstrated by various means, including osmotic stress and mechanical perturbation, though autonomous division driven by internal biochemistry remains a challenge.

The dream is to put all of these pieces together — protein synthesis, membrane protein insertion, lipid synthesis, DNA replication, division — in a single liposome, and have it function as a self-replicating system. We are not there yet. But the individual pieces have been demonstrated, and the rate of progress over the last decade has been substantial.

\[Pause.\]

Let me put this in a broader context. There are, roughly speaking, two approaches to building a synthetic cell. The **top-down** approach, exemplified by Craig Venter's group with the JCVI-syn3.0 minimal cell, starts with a living cell and progressively strips away non-essential components, asking what the minimal genome and minimal cellular machinery actually need to be. The **bottom-up** approach, exemplified by the various groups working in liposome-encapsulated cell-free systems, starts with purified components and progressively adds capabilities, asking what minimal set of biochemical functions, assembled from scratch, is sufficient to produce something cell-like.

The two approaches are complementary. The top-down work gives us a target: this is what the minimal living cell looks like, with this many genes and this many essential functions. The bottom-up work gives us a method: this is how we can build those functions from defined parts and assemble them into a working whole. Eventually, the two approaches should converge — somewhere between three hundred genes and a few hundred discrete biochemical functions, there is a system that could exist either as a stripped-down living cell or as a built-up synthetic cell, and once we have it from both directions we will understand minimal life with a precision we have never had before.

\[Pause.\]

There is a major international effort, called the **Build-A-Cell** consortium, that coordinates much of this work across labs in Europe, the US, and Japan. The Dutch and German groups have been particularly active, often using PURE-based systems inside giant unilamellar vesicles as their experimental chassis. The Build-A-Cell community has produced a series of roadmaps and milestones that lay out, in remarkable detail, the path from current cell-free capabilities to a hypothetical fully functional synthetic cell over the next decade or two. Whether that timeline is realistic depends on solving problems that may turn out to be deeper than they currently appear, but the seriousness of the effort and the steady accumulation of incremental advances are both real.

What is at stake intellectually? A lot. If we can build a synthetic cell, we will have demonstrated, definitively, that the cell is not a mystery requiring some kind of vital essence — it is a piece of chemistry, complicated but achievable, that can be reproduced from non-living parts. That would be one of the most important scientific demonstrations in the history of biology. It would also have practical implications: a synthetic cell would be a starting point for designed organisms that do specific industrial tasks, for chassis with reduced complexity that are easier to engineer than natural cells, and for a deeper understanding of what cellular life actually requires.

The big idea to leave this segment with: **cell-free reactions encapsulated in liposomes are the experimental substrate of the synthetic-cell project, an effort to build something like a living cell from purified non-living components**. The individual building blocks have been demonstrated. The integrated whole is still ahead. But the trajectory is real, the funding is serious, and the field is closer than most people outside it realize to building, from scratch, a cell-like object.

---

## SEGMENT 17 — Ribosome engineering: orthogonal ribosomes in cell-free

I want to spend a segment on one of the most beautiful and most technically demanding applications of cell-free, which is the engineering of the ribosome itself. This is the kind of work that you can only really do in cell-free systems, because in a living cell the ribosome is too essential to mess with on demand.

The ribosome is the molecular machine that translates mRNA into protein. It is large — about 2.5 megadaltons in bacteria, larger in eukaryotes — and it is made of three RNA molecules and about fifty different proteins, assembled into two subunits. Every living cell has thousands of ribosomes, all essentially identical, all required for life. If you try to mutate the ribosome in a living cell in a way that significantly alters its function, the cell typically dies, because all of its translation depends on the ribosome.

For a long time, this made ribosome engineering essentially impossible. You could mutate non-essential parts of the ribosome, you could swap in components from related species, you could study natural variation — but you could not really build a ribosome that does something fundamentally new, because such a ribosome would interfere with the cell's normal translation and kill the host.

The breakthrough came from work on **orthogonal ribosomes** — ribosomes that have been engineered to recognize a specific subset of mRNAs that the cell's normal ribosomes do not recognize, and vice versa. The classical implementation, developed by **Jason Chin** and his colleagues at the MRC Laboratory of Molecular Biology in Cambridge, involves engineering the small ribosomal subunit's anti-Shine-Dalgarno sequence to pair with an orthogonal Shine-Dalgarno sequence on engineered mRNAs. The orthogonal ribosome can be modified — even in ways that would normally be lethal — because the cell's natural ribosomes continue to handle the essential housekeeping translation. The engineered ribosome is, in effect, a parallel translation system that the cell tolerates because it does not interfere with cellular life.

\[Pause.\]

Cell-free systems push this further. In a cell-free environment, you can replace the ribosomes entirely with engineered variants, and there is no host to keep alive. You can design ribosomes that incorporate unnatural amino acids more efficiently, that use non-canonical genetic codes, that have novel catalytic activities. Some of the more exotic experiments have produced ribosomes with fused subunits — where the small and large subunits are covalently tethered together rather than being separate molecules. These tethered ribosomes can be engineered as a single unit, because the engineer can be confident that the two subunits will always be paired together rather than associating with the cell's natural subunits.

The Chin lab and others have used these approaches to build ribosomes that can decode quadruplet codons — four-base codons rather than the natural three-base codons — opening up an exponentially expanded genetic code with potentially thousands of new amino acid positions. They have built ribosomes that polymerize non-amino-acid monomers, producing chains that are not strictly peptides. They have built ribosomes that synthesize cyclic peptides, that incorporate D-amino acids, that handle proline mimetics and other unusual building blocks. Each of these capabilities, demonstrated in cell-free, opens up new chemical space for designed proteins and peptides.

\[Pause.\]

There is an even more ambitious direction here, which is the engineering of the ribosome at the level of its catalytic activity. The peptidyl transferase center — the part of the ribosome that catalyzes the formation of the peptide bond — is conserved across all life because the chemistry of peptide bond formation is fundamental. But it is, in principle, possible to engineer this center to accept substrates other than amino acids, to catalyze chemistry other than peptide bond formation, to produce polymers that have nothing to do with the natural protein chemistry of life. Doing this in a living cell is hopeless. Doing it in a cell-free system with engineered orthogonal ribosomes is at least conceivable, and several groups are actively pursuing it.

The implications, if this works, are large. A ribosome that can polymerize designed monomers in a sequence-defined way would give us a route to a whole new class of polymers — drug-like, structural, catalytic — that we currently cannot make in any defined way. Today's organic chemistry can produce small molecules with high precision, but the precision degrades rapidly as molecules get larger and more complex. The ribosome's ability to assemble long sequence-defined polymers is, in a sense, the most precise polymer synthesis chemistry in nature. Repurposing that chemistry for non-natural monomers, in cell-free, would be a major expansion of the toolkit.

\[Pause.\]

Cell-free is also the natural environment for **ribosome assembly** studies. The ribosome is not just a static machine; it is a self-assembling complex that has to be built from its components in a specific order, with specific intermediate states. Studying this assembly in vivo is difficult because the assembly is fast, transient, and entangled with all the other things the cell is doing. In cell-free, you can pause assembly at specific stages, add components one at a time, watch the process unfold. Some of the cleanest mechanistic understanding of how ribosomes are built has come from cell-free reconstitution experiments.

The big idea to leave this segment with: **cell-free systems enable a kind of ribosome engineering that is essentially impossible in living cells, because the cell cannot tolerate radical changes to its essential translation machinery**. Orthogonal ribosomes, engineered to do things natural ribosomes do not do — incorporate unnatural amino acids efficiently, decode expanded codons, polymerize non-natural monomers, eventually catalyze non-natural chemistry — are the leading edge of this work. The toolkit for designed protein-like polymers is being built, and cell-free is where it is being built.

---

## SEGMENT 18 — The frontier: metabolic pathways, AI-driven optimization, and where cell-free is going

Let me close with a survey of the frontier — where cell-free is going next, what the open problems are, and what to watch for over the next decade. These are the directions where the field is, right now, putting most of its energy.

**Frontier one: cell-free metabolic pathways.** The original cell-free work focused on protein synthesis. But the same conceptual move — take cellular biochemistry out of the cell and reassemble it in a tube — applies to other kinds of biochemistry. **Cell-free metabolic engineering** takes the enzymes of a biosynthetic pathway, purifies them or expresses them in cell-free reactions, and uses the resulting enzyme system to produce a target chemical in a tube, without involving living cells. The advantages mirror those of cell-free protein synthesis: no host cell to keep alive, no toxic intermediates to worry about, no off-target metabolism, full control over substrate and cofactor concentrations. Groups around **Michael Jewett** at Northwestern (now Stanford) and **Yi-Heng Percival Zhang** at Virginia Tech have pioneered approaches to cell-free metabolism for chemicals ranging from sugars to terpenes to high-value pharmaceuticals. The economics are challenging, but for some specialty products the cell-free metabolic approach can outperform fermentation.

**Frontier two: integration with microfluidics.** Cell-free reactions are small. Microfluidic chips can run thousands of small reactions in parallel, with precise control over mixing, timing, and readout. The combination is natural. Microfluidic cell-free systems are being used for ultra-high-throughput screening — testing tens of thousands of designs in a day — and for studying single-cell-level biochemistry in defined droplet compartments. The technology is increasingly accessible, with commercial droplet generators and chip fabrication services that did not exist a decade ago.

**Frontier three: AI-driven cell-free optimization.** Cell-free reactions have many tunable parameters — extract source, energy substrate, magnesium concentration, salt composition, additive choices, template design, and so on. The combinatorial space is enormous, and traditional one-variable-at-a-time optimization is hopelessly slow. Machine learning approaches — Bayesian optimization, active learning, neural network surrogate models — are being deployed to navigate this space more efficiently. The basic workflow is: train a model on a few hundred experimentally measured cell-free reactions, use the model to suggest the next batch of conditions to test, repeat. This kind of closed-loop ML-driven optimization has been demonstrated to find conditions for yield improvements that human intuition would have missed. As the data sets grow and the models improve, AI-driven cell-free is positioned to become a routine part of the workflow.

\[Pause.\]

**Frontier four: novel chassis.** Most cell-free work to date has used _E. coli_ extracts or PURE-style reconstituted systems built from _E. coli_ components. But other organisms have their own translation machinery, with different properties. Cell-free systems have been developed from **Vibrio natriegens** (a fast-growing marine bacterium), from **Bacillus subtilis**, from **Streptomyces** (for natural product biosynthesis), from various **archaea**, and from yeast and mammalian sources. Each chassis brings different capabilities — different codon preferences, different chaperone repertoires, different membrane biochemistry, different post-translational modifications. The diversification of cell-free chassis is opening up new application spaces that the _E. coli_-only era could not access.

**Frontier five: cell-free for genome-scale design.** As DNA synthesis gets cheaper and gene-design tools get better, the prospect of designing and testing entire pathways or even synthetic genomes in cell-free becomes more practical. You can prototype a multi-gene circuit in cell-free in a day, measure its behavior, iterate. This kind of rapid genome-scale prototyping is what cell-free uniquely enables, and it is starting to be used at the genome-scale-design scale.

**Frontier six: cell-free for in situ applications.** I mentioned wearable and implantable cell-free reactors earlier. The idea here is that cell-free reactions, encapsulated in biocompatible materials and connected to sensors, could produce therapeutic proteins on demand in response to physiological signals. Researchers have demonstrated prototype implantable cell-free systems that respond to specific input signals by producing a defined protein output. The technology is far from clinical use, but it represents a long-term vision of cell-free as a real-time therapeutic platform integrated with the body.

\[Pause.\]

**Frontier seven: the synthetic cell, fully realized.** I gave the synthetic cell its own segment, but I want to flag it again as an active frontier. The Build-A-Cell consortium and its constituent labs are systematically working toward the integration of all the pieces needed for a self-sustaining synthetic cell. Each year, more pieces are demonstrated. The convergence with the top-down minimal-cell work, exemplified by Venter's group, gives the project a clear target. If a synthetic cell built from cell-free reactions in a liposome is ever demonstrated as a working entity that can grow and divide, that will be one of the major scientific milestones of the century.

**Frontier eight: hybrid systems.** There is interesting work on systems that combine living cells with cell-free reactions in defined ways — say, a living cell that produces a signal that triggers a cell-free reaction in an adjacent compartment, or a cell-free reaction that produces a protein that is then taken up by a nearby living cell. These hybrid systems blur the boundary between living and non-living biology in ways that may turn out to be useful for both research and applications.

\[Pause.\]

Let me close with a more reflective observation. Cell-free protein synthesis started, in 1961, as a tool to crack the genetic code. For decades it lived as a niche specialty in eukaryotic kits. It was reinvented in the 1990s and 2000s by a combination of better extract preparation, better energy regeneration, the introduction of PURE in 2001, and the championing of TXTL by Noireaux. Now, in the late 2020s, it is a serious commercial manufacturing platform, a routine prototyping environment for synthetic biology, a chassis for paper diagnostics, a vehicle for the synthetic-cell project, and an enabling technology for protein engineering applications that living cells cannot handle. The arc of the field, viewed across six decades, is the steady move from "cells are the only place biology happens" to "biology happens wherever the molecules are." Each generation has pushed that frontier a bit further. The current generation is pushing it harder than ever.

If you go into a biology lab anywhere in the world in the next decade, you are likely to find someone using cell-free for something — testing a circuit, making a difficult protein, prototyping a vaccine antigen, screening unnatural amino acid variants, building a synthetic minimal cell, or doing something none of us currently imagine. The technology is, in this sense, no longer optional. It has become part of the standard molecular biology toolkit, alongside cloning, sequencing, and CRISPR. And the applications that you, the current undergraduates, are going to invent over the next twenty years will probably be wilder than anything we have discussed today.

The big idea to leave this segment with: **cell-free is an active frontier across multiple dimensions — metabolic pathways, AI-driven optimization, diversified chassis, genome-scale design, in situ applications, the synthetic cell, hybrid systems**. The field has gone from a curiosity to a platform to a manufacturing technology to an enabling chassis for the next generation of biological engineering. Where it goes next depends on the next generation of practitioners, and that includes, very plausibly, some of you.

\[Pause.\]

We are at the end of the lecture. We have come a long way from Nirenberg's poly-U experiment in 1961, through reticulocyte lysate kits and bacterial S30 extracts, through PURE and TXTL, into membrane proteins and unnatural amino acids and paper diagnostics and vaccine prototyping and orthogonal ribosomes and synthetic cells. The unifying thread, if there is one, is that the cell is not a sacred container. Translation, transcription, biochemistry — they are portable. You can take them out of the cell, you can engineer them, you can deploy them in tubes and on paper and in liposomes and in microfluidic chips and, eventually, in synthetic cells of our own design. That portability is the deep idea of the field, and it is, I think, one of the most consequential ideas modern biology has produced.

Thank you for your attention. I am happy to take questions.

---

## APPENDIX

### A.1 — Glossary of key terms

**CFPS** — Cell-Free Protein Synthesis. The general term for making protein in a tube without using a living cell.

**TX-TL or TXTL** — Transcription-Translation. A coupled cell-free system that performs both transcription (DNA to RNA) and translation (RNA to protein) in one reaction. Often used specifically to refer to Vincent Noireaux's _E. coli_-extract-based system.

**PURE** — Protein synthesis Using Recombinant (or Reconstituted) Elements. The fully defined cell-free system developed by Ueda and Shimizu in 2001, in which every component is a separately purified protein.

**S30 extract** — The _E. coli_ cell lysate prepared by a 30,000 g centrifugation, retaining the soluble translation machinery. The classical bacterial cell-free workhorse.

**S12 extract** — A milder version of S30, prepared at 12,000 g, retaining more membrane vesicles.

**Reticulocyte lysate** — A cell-free translation system derived from rabbit reticulocytes (immature red blood cells), historically used as a commercial kit for in vitro translation of eukaryotic mRNAs.

**Wheat germ extract** — A cell-free translation system derived from wheat germ, used as a plant-based alternative to reticulocyte lysate.

**Aminoacyl-tRNA synthetase (aaRS)** — The enzyme that attaches a specific amino acid to its corresponding tRNA. There are twenty in any organism, one for each standard amino acid. Engineered orthogonal versions can charge unnatural amino acids onto engineered tRNAs.

**Ribosome** — The molecular machine that translates mRNA into protein. Made of three RNAs and around fifty proteins in bacteria.

**Toehold switch** — A designed mRNA whose ribosome binding site is sequestered in a hairpin until opened by a specific trigger RNA. Used as a programmable RNA sensor in cell-free diagnostics.

**Liposome** — A spherical lipid bilayer vesicle, used as a synthetic cell membrane in bottom-up synthetic biology.

**Nanodisc** — A small disc-shaped patch of lipid bilayer surrounded by a membrane scaffold protein, used to solubilize membrane proteins in defined lipid environments.

**Continuous-exchange cell-free (CECF)** — A reaction format in which the cell-free reaction is separated from a larger feed chamber by a semipermeable membrane, extending reaction lifetime and yield.

**Amber codon** — The UAG stop codon, frequently reassigned to encode unnatural amino acids by engineered tRNA-synthetase pairs.

**Unnatural amino acid (ncAA)** — Any amino acid not in the standard twenty, incorporated into proteins via engineered orthogonal translation components.

### A.2 — Suggested reading

For the original Nirenberg cell-free experiments, see Nirenberg and Matthaei, _PNAS_ 1961, "The dependence of cell-free protein synthesis in _E. coli_ upon naturally occurring or synthetic polyribonucleotides."

For the foundational PURE paper, see Shimizu et al., _Nature Biotechnology_ 2001, "Cell-free translation reconstituted with purified components."

For the modern TXTL system, see Garamella, Marshall, Rustad, and Noireaux, _ACS Synthetic Biology_ 2016, "The all _E. coli_ TX-TL toolbox 2.0: a platform for cell-free synthetic biology."

For paper-based cell-free diagnostics, see Pardee, Green, Ferrante, Cameron, DaleyKeyser, Yin, and Collins, _Cell_ 2014, "Paper-based synthetic gene networks." Follow up with Pardee et al., _Cell_ 2016, for the Zika application.

For unnatural amino acid incorporation in cell-free, the Schultz lab and the Jewett lab have extensive review literature. See Bundy and Swartz, _Bioconjugate Chemistry_ 2010, for one of the early demonstrations at scale.

For the synthetic cell project, see the Build-A-Cell consortium's published roadmaps, as well as review articles from the Danelon, Sundmacher, and Schwille groups.

For ribosome engineering and orthogonal translation, the Chin lab's review articles in _Annual Review of Biochemistry_ are the canonical entry point.

For commercial cell-free manufacturing, see Sutro Biopharma's published descriptions of XpressCF and GreenLight Biosciences' descriptions of their RNA platform.

### A.3 — A few exam-style questions to test yourself

1. Why is cell-free protein synthesis particularly well-suited for producing toxic proteins? What would happen if you tried to produce the same protein in a living _E. coli_ culture?

2. Contrast PURE and TXTL on at least four axes: composition, cost, yield, and typical application. When would you reach for one rather than the other?

3. Explain how a toehold switch enables cell-free diagnostic detection of a specific RNA. What roles do the cell-free reaction, the toehold switch, and the reporter enzyme each play in producing the visible color change?

4. Describe how unnatural amino acids are incorporated into proteins using orthogonal aaRS-tRNA pairs. Why is this easier to do in a cell-free system than in a living cell?

5. List three approaches to expressing membrane proteins in cell-free systems. What does each approach do to provide the lipid environment the protein needs to fold correctly?

6. What is the synthetic-cell project, and how does cell-free fit into it? What are the major remaining challenges between current capabilities and a working self-replicating synthetic cell?

7. Estimate the yield of protein from a 50-microliter cell-free reaction at the modern state of the art for a well-behaved soluble protein. Compare to the yield from a reticulocyte lysate kit circa 1995.

8. Explain how energy regeneration works in a cell-free reaction. Why was this a critical engineering improvement over early cell-free systems?

### A.4 — Closing notes for the lecturer

This lecture pairs naturally with the lectures on Plasmids and on Genetic Circuits and Synthetic Biology in this series. Cell-free is, in a sense, the third pillar of practical molecular engineering, alongside the plasmid-based cloning toolkit and the circuit-design framework. Students who have already absorbed those two lectures will find that many of the parts vocabulary — promoters, ribosome binding sites, repressors, fluorescent reporters — transfers directly into the cell-free context.

The Pardee-Collins paper diagnostic work in Segment 13 connects directly to the toehold switch and the broader RNA-circuit toolkit discussed in the genetic circuits lecture; you can reinforce the cross-reference if your students have just covered that material.

The synthetic-cell discussion in Segment 16 connects to the bottom-up synthetic biology and minimal cell themes that appear in some genome engineering courses; you can decide whether to expand or compress that material based on what your students have already seen.

For lab demonstrations, the easiest entry point is a commercial TXTL kit with a GFP-encoding plasmid. Students can set up the reaction in twenty minutes, incubate during a lecture, and observe fluorescent protein production by the end of the same class period. The visceral experience of seeing protein produced in a tube, with no cells anywhere, is one of the most effective ways to make the abstract real.

For further depth, the original publications listed in section A.2 are all accessible to motivated undergraduates and provide direct contact with the primary literature.

End of lecture. Total spoken duration approximately 90 to 100 minutes at standard lecturing pace, plus a mid-point break after Segment 9 and appropriate time for questions.
