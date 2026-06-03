# RNAi and siRNA Therapeutics: From a Worm Experiment to a Cholesterol Shot

**A 2-hour undergraduate lecture on RNA interference and the siRNA drug platform — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, landing comfortably inside a two-hour slot. (Read faster, ~140 wpm, and you'll have generous room for questions or board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool. This lecture is the companion to the milasen lecture on antisense oligonucleotides — I will assume you have done milasen and I will not re-derive ASO mechanism from scratch. We will need it as the contrast point, but the focus today is the sister modality.

---

## SEGMENT 1 — Why RNAi matters — the central question of the lecture

Alright. Let's begin. Today, for the next two hours, we are going to talk about a class of drug that does not exist in nature as a drug, but that is built out of a mechanism that has existed in nature for hundreds of millions of years. The mechanism is called **RNA interference**, or **RNAi**. The drugs built on top of it are called **small interfering RNAs**, or **siRNAs**. There are, as of this lecture, five of them approved by the FDA. The first one, patisiran, was approved in 2018. The most recent of the five, vutrisiran, was approved in 2022. There are dozens more in clinical trials. One of them, inclisiran, is shaping up to be the most important new cholesterol drug since statins, and Novartis paid nine point seven billion dollars to acquire the company that owned it, which gives you a sense of where the field thinks this is going.

So that is where we are headed. But the story does not start in a pharmaceutical company. It does not start in a clinic. It starts in a worm. In a roundworm called **Caenorhabditis elegans**, in a lab at the Carnegie Institution in Baltimore, with a 1998 paper in the journal **Nature** by Andrew Fire and Craig Mello. Two scientists who had absolutely no idea, when they did the experiment, that they were sketching the outline of a future class of medicines. They were trying to figure out why their negative controls were behaving strangely. That is how almost every important discovery in molecular biology actually starts. Somebody's negative control does something weird. They have the patience and the curiosity to ask why.

\[Pause.\]

Here is the claim I want you to hold for the next two hours. **RNAi is the cell's built-in antivirus.** That's the first analogy of the lecture, and we are going to come back to it many times. Every cell in your body, every cell in a worm, every cell in a plant, every cell in a fungus, carries inside it a machine that watches for **double-stranded RNA** floating around in the cytoplasm. Double-stranded RNA, in nature, is almost always bad news — it means a virus is replicating, because most RNA viruses produce double-stranded RNA intermediates as part of their life cycle. The cell sees double-stranded RNA, treats it as a foreign invader, and starts shredding any matching messenger RNA in the vicinity. That shredding is RNA interference. It is, in evolutionary terms, an antiviral defense system. It is hundreds of millions of years old. And in the late 1990s, we figured out how to hijack it.

The story of how we hijacked it, and then how we turned the hijacked mechanism into a class of medicines, is the story of this lecture. Three protagonists. Three breakthroughs. Three eras. The first is the basic-science era — Fire and Mello in worms, Tom Tuschl in mammalian cells — running from the late 1990s into the early 2000s. The second is the delivery era — the lipid nanoparticle, the long search for a way to actually get siRNAs into a patient's cells — running from the early 2000s into the mid-2010s. The third is the GalNAc era — the molecular trick that finally made siRNA drugs into something you can inject under the skin twice a year — running from about 2014 to the present and arguably just beginning.

\[Pause.\]

If you walk out of here in two hours, I want you to be able to do four things. One: explain, in plain English, what RNAi is, where it comes from in nature, and the difference between RNAi and the antisense oligonucleotide mechanism you learned in the milasen lecture. Two: walk through, step by step, the molecular dance of Dicer, the RISC complex, and Argonaute-2 — the three protein machines that actually carry out RNAi inside a human cell — and explain why an siRNA drug is a passenger on that machinery, not a stand-alone tool. Three: explain what GalNAc is, what ASGPR is, and why those two letters — that one little sugar attached to that one little receptor — turned siRNAs from a fragile laboratory curiosity into an injectable drug class. And four: list the five FDA-approved siRNA drugs, what each one targets, what disease it treats, and why the company that owns most of them — Alnylam Pharmaceuticals — is now the most successful single-platform biotech of the post-monoclonal-antibody era.

That is our contract for the next two hours.

\[Pause.\]

One more thing before we move forward. Some of you took the milasen lecture last week, where we walked through antisense oligonucleotides — ASOs — and a specific drug called milasen, a splice-switching ASO designed for a single patient. Today's modality is the sister of that one. ASOs and siRNAs are siblings. They were born in the same broad family of "antisense" technologies. They use chemically similar building blocks — modified nucleotides, phosphorothioate linkages, the same kind of solid-phase synthesis on the same kind of machine. They both work, at the end of the day, by Watson-Crick base pairing between a designed oligonucleotide and a target messenger RNA. But the machinery they exploit inside the cell is different, and the route they took to the clinic was different, and the diseases they treat are increasingly different too. The way I want you to think about it is: **ASOs are individual messengers. siRNAs hijack the cell's existing courier service.** The cell already has a service for chopping up RNA — that's RISC. An siRNA is a guide molecule that tells RISC what to chop. We do not have to deliver the cleavage machinery. The cell has it. We just deliver the wanted poster.

That distinction is going to come up again and again. Hold it. Let's go meet the worms.

---

## SEGMENT 2 — Fire and Mello — the 1998 Nature paper that started it all

Picture C. elegans. The roundworm. About a millimeter long. Transparent. It lives in soil, eats bacteria, has exactly 959 somatic cells in the adult hermaphrodite — every one of them mapped, every one of them named, every cell division in development traced out. It is the model organism that the molecular biologists who care about animal development and neurobiology have spent fifty years building tools for. If you want to know what a particular gene does in a worm, you have a remarkable toolkit. You can knock it out. You can image it. You can watch the lineage of every cell that expresses it. C. elegans is the closest thing in animal biology to a fully understood multicellular organism.

In the mid-1990s, one of the standard tricks for figuring out what a gene did in a worm was to **inject RNA into the worm**. Specifically, you would synthesize, in a test tube, a single-stranded RNA matching the sequence of your gene of interest — that's the **sense strand**, the same sequence as the mRNA — and you would inject it into the worm, and sometimes that would cause the worm to behave as if the gene had been knocked down. The phenotype would look like a loss of function. This was being used in labs around the world, by many people, and it was working well enough that people were publishing with it, but nobody really understood why it worked. Why would injecting more of the mRNA sequence into a worm make the gene act like it was broken? That's the opposite of what you'd expect from a normal flooding-the-system thought experiment.

In some labs, people had also tried injecting the **antisense strand** — the complementary RNA, the sequence that would base-pair with the mRNA. That also sometimes caused knockdown. Which made a little more sense, because the antisense strand could in principle pair with the endogenous mRNA and block it. But the effects were inconsistent, the strengths were variable, and nobody had a clean mechanistic story for any of it.

\[Pause.\]

Andrew Fire was, at the time, at the Carnegie Institution of Washington in Baltimore. Craig Mello was at the University of Massachusetts Medical School in Worcester. They were collaborators, both working on C. elegans genetics, both interested in this strange RNA-injection phenomenon. And they decided to do a careful controlled experiment. They were going to inject sense, antisense, and a mixture of sense plus antisense — which, when you mix two complementary single strands together, anneals into **double-stranded RNA** — into worms, and compare the effects of each on a target gene. The target gene they picked was **unc-22**, which encodes a muscle protein. Loss of unc-22 in a worm produces a very obvious phenotype: the worm twitches. Continuously. It can't hold still. You can score the phenotype just by looking at the dish under a dissecting scope.

They did the injections. They watched the worms. And the result, when they looked at it, was striking and clear. The single-stranded sense RNA, injected alone, produced a very weak twitching phenotype. Almost nothing. The single-stranded antisense RNA, injected alone, also produced a very weak twitching phenotype. Almost nothing. But the mixture — sense and antisense together, which had annealed into double-stranded RNA before injection — produced a strong, unambiguous, dose-dependent twitching phenotype, at concentrations more than ten times lower than either single strand alone.

\[Pause.\]

That was the moment. The double-stranded RNA was many times more potent than either single strand individually. Which meant the active species — the molecule that was actually doing the gene-silencing — was not single-stranded sense, and was not single-stranded antisense. It was the duplex. The double-stranded form. The single-stranded effects people had been seeing in their labs for years had probably been artifacts of trace contaminating duplex — small amounts of double-stranded RNA contaminating the preparations of single-stranded RNA, doing all the actual work, and being mistaken for an effect of the single-stranded molecule.

Fire and Mello published this in the February 19, 1998 issue of Nature. The paper is titled "Potent and specific genetic interference by double-stranded RNA in Caenorhabditis elegans," and if you have not read it, you should — it is one of those rare scientific papers that is short, clear, and obviously historically important on first reading. They named the phenomenon **RNA interference**, abbreviated RNAi, and they made several observations that turned out to be foundational. First, the effect was potent — a few molecules of double-stranded RNA per cell were enough to silence the target gene. Second, the effect was specific — only the gene matching the injected RNA was silenced, not any other genes. Third, the effect spread through the worm — you could inject double-stranded RNA into one part of the worm and see silencing in distant cells, even in the next generation of progeny. This suggested an active, possibly enzymatic, mechanism. Just a small amount of dsRNA was making a big effect, which meant something was catalytically amplifying the signal.

In 2006, Andrew Fire and Craig Mello shared the Nobel Prize in Physiology or Medicine for this work. Eight years after the paper. That is a remarkably short interval between publication and Nobel by historical standards — comparable only to the recognition timeline for CRISPR. The Nobel committee understood, very quickly, that this was going to be huge.

\[Pause.\]

Now, here's something important to say about Fire and Mello's experiment. They identified the phenomenon. They proved it was double-stranded RNA, not single-stranded RNA, that mattered. They proved it was specific to the gene whose sequence was injected. They proved it was catalytic — small input, big effect. But they did not, in the 1998 paper, identify any of the protein machinery that actually carries out the silencing. They had not discovered Dicer. They had not discovered RISC. They had not discovered Argonaute. All they knew was that something inside the worm cell was reading the double-stranded RNA, finding the matching mRNA, and destroying it. The machinery would have to be found by other labs, over the next several years. That work — the dissection of the actual molecular machinery of RNAi — is what Segment 3 is about.

But hold this picture, because it's the picture the rest of the lecture is going to build on. **Double-stranded RNA in the cytoplasm causes specific, potent, catalytic destruction of any mRNA matching its sequence.** Fire and Mello discovered the phenomenon. Now we figure out how the cell does it.

---

## SEGMENT 3 — The molecular machinery — Dicer, RISC, Argonaute-2

Over the next several years after the Fire and Mello paper, multiple labs around the world raced to figure out the molecular machinery that carries out RNAi. By around 2001 to 2004, the broad outline was clear, and it's the outline that I want to walk you through now. There are three main players. One enzyme that processes the double-stranded RNA into the right size. One complex that uses the processed RNA to find the target. And one catalytic core inside that complex that actually cuts the messenger RNA. Those three players are called **Dicer**, **RISC**, and **Argonaute-2**, abbreviated **AGO2**.

Let me walk you through them in order, because each one has a job, and the jobs hand off cleanly from one to the next.

\[Pause.\]

**Dicer** is, as the name suggests, an enzyme that dices things. Specifically, it dices long double-stranded RNA into short double-stranded RNA. Dicer has a recognizable structural fold — it's an RNase III family enzyme, which means it's a member of a broader family of enzymes that cut double-stranded RNA at specific positions — and it works processively along a long dsRNA substrate, cutting it into uniform pieces of roughly twenty-one to twenty-three base pairs in length, with a characteristic two-nucleotide overhang at the 3' end of each strand. That length — twenty-one to twenty-three — is not arbitrary. It is set by the geometry of the Dicer enzyme itself; the enzyme has, structurally, a kind of molecular ruler that determines exactly where the cuts get made relative to the ends of the dsRNA.

Here is the analogy. **Dicer is a molecular kitchen knife. It takes a long double-stranded RNA — like a baguette — and chops it into bite-sized 21-nucleotide pieces, each one identical in length.** Bite-sized, because the next machine in the pathway — RISC — only loads RNAs of about that length. A bigger piece won't fit. A smaller piece won't have enough sequence to find a specific target. Twenty-one nucleotides is the sweet spot. Long enough for specificity, short enough for the machinery to handle.

The bite-sized pieces that Dicer produces are called **small interfering RNAs**. The siRNAs. Each one is a short double-stranded RNA, with a two-nucleotide overhang at each 3' end. They are the substrate for the next stage of the pathway.

\[Pause.\]

**RISC** stands for **RNA-induced silencing complex**. It is a multi-protein complex — the exact composition varies by organism and by context, but in mammalian cells the catalytic core is always **Argonaute-2**, which is one of four Argonaute proteins encoded in the human genome. The other Argonautes — AGO1, AGO3, AGO4 — have similar structures, but only AGO2 has the catalytic slicing activity we care about for siRNA drugs. AGO2 is the version of the protein that actually cuts.

Here is what RISC does. It receives the siRNA duplex from Dicer. It loads the duplex into a specific binding pocket. Then it does something critical: it picks one of the two strands and discards the other. The strand it keeps is called the **guide strand**. The strand it throws away is called the **passenger strand** — sometimes the **sense strand**, sometimes the **star strand**, written with an asterisk. The selection of which strand becomes the guide and which becomes the passenger is not random. It's based on the thermodynamic stability of the two ends of the duplex — the strand whose 5' end sits in a less thermodynamically stable position gets selected as the guide. This is a structural detail, but it matters enormously for drug design, because when you design an siRNA drug you want to make sure that the strand you intended to be the guide actually ends up as the guide, and not the other way around. We will come back to this in Segment 9 when we talk about chemistry.

\[Pause.\]

Once RISC has selected a guide strand, the guide strand is held in place inside the AGO2 binding pocket, with its sequence exposed and ready to base-pair with anything matching it that floats by. **The guide strand is the wanted poster.** It tells the rest of the complex what to look for.

Here is the next analogy. **The RISC complex is the assassin. It picks up one strand of the chopped dsRNA, uses it as a wanted poster, and goes hunting through the cytoplasm for the matching mRNA. When it finds an mRNA whose sequence matches the wanted poster across the right number of bases, the assassin acts.**

The acting is done by **AGO2**, the catalytic core. AGO2 has, inside it, a domain called the **PIWI domain**, which is structurally similar to RNase H — the same enzyme family that we used to chop mRNA with ASOs in the milasen lecture. The PIWI domain is the actual blade. When the guide strand inside AGO2 has paired with a target mRNA across a stretch of perfect or near-perfect complementarity, the PIWI domain catalyzes a cut in the target mRNA at a very specific position — between nucleotides 10 and 11 from the 5' end of the guide strand. Always at the same position. The geometry of AGO2 holds the guide and the target in exactly the right alignment, and the PIWI domain reaches in and cuts.

After the cut, the target mRNA is broken into two pieces. Those pieces are then chewed up by other cellular exonucleases — XRN1, the exosome, all the normal RNA-degrading machinery of the cytoplasm — and the mRNA is gone. The protein that mRNA would have made never gets made. The gene has been silenced at the post-transcriptional level. Meanwhile, the RISC complex, with its guide strand still loaded, is released and ready to find the next target mRNA. This is the catalytic part of the story. One guide strand can direct cleavage of many mRNAs in succession before it gets degraded. That is why such a small amount of input siRNA can produce such a large effect.

\[Pause.\]

Let me give you the analogy for the cut itself. **AGO2 is the actual blade. It cuts the target mRNA at a specific position — 10 to 11 nucleotides from the 5' end of the guide.** Not anywhere along the duplex. At one specific position, every time. That position is set by the structural geometry of AGO2 — the protein holds the guide and target in a precise alignment, and the catalytic residues of the PIWI domain are positioned right at base 10-11 of the guide. You could design an siRNA that, in principle, paired perfectly along a target mRNA for thirty bases, and AGO2 would still cut at the same position relative to the 5' end of the guide. The position is determined by the enzyme, not by the substrate.

So now you have the full mechanism. Long dsRNA gets cut by Dicer into 21-nt siRNAs. The siRNAs load into RISC. RISC selects one strand as the guide. The guide directs AGO2 to find any mRNA matching the guide's sequence. AGO2 cleaves that mRNA at position 10-11 from the 5' end of the guide. The mRNA is degraded. The gene is silenced. The RISC complex moves on to find the next target.

That is the molecular machinery of RNAi. Discovered in worms, dissected biochemically in human cells, conserved through evolution from plants and fungi through animals. It is, as I said at the start, the cell's built-in antivirus system, repurposed by drug developers as a programmable mRNA-silencing tool.

The next step is figuring out how to make this work in human cells with a chemically synthesized siRNA, rather than relying on the cell to dice a long dsRNA into siRNAs for us. That is Tom Tuschl's contribution.

---

## SEGMENT 4 — Tom Tuschl and the synthetic siRNA — making RNAi work in mammals

There was a problem with applying RNAi to mammalian cells. The problem was the **interferon response**. Mammalian cells, unlike worms and plants, have a robust innate immune system that recognizes long double-stranded RNA as a sign of viral infection and responds violently. The response is triggered by sensor proteins — PKR, OAS, RIG-I, MDA5 — that bind to double-stranded RNA above a certain length threshold, typically around thirty base pairs and longer. When these sensors fire, they trigger interferon production, which shuts down protein synthesis globally, slows down cell division, and in many cases triggers apoptosis. From an evolutionary standpoint, this makes perfect sense — long dsRNA is almost always a sign of viral replication, and shutting down the cell is a reasonable defensive response.

But this was, for mammalian RNAi research, an enormous problem. If you injected long double-stranded RNA into a worm, the worm's cells would dice it with Dicer and silence the matching gene. If you injected the same long dsRNA into a mammalian cell, the cell would respond not with specific gene silencing but with a global interferon-mediated shutdown of protein synthesis. Everything would go off. Not just the target. You couldn't see gene-specific silencing because you couldn't even see the target gene amid the global noise.

Through the late 1990s and into 2000, several labs tried various tricks to get around this. Some used very small doses of dsRNA, below the interferon threshold. Some used cell types that had defective interferon responses. Some tried in vitro systems with purified components. The results were spotty. RNAi in mammals was, in 2000, considered theoretically possible but practically very difficult.

\[Pause.\]

Then in May 2001, a paper came out in Nature from Thomas Tuschl, then at the Max Planck Institute in Göttingen, that solved the problem. The paper was titled "Duplexes of 21-nucleotide RNAs mediate RNA interference in cultured mammalian cells." The trick was elegant. Instead of trying to deliver long double-stranded RNA — which would trigger the interferon response — you skipped that step entirely. You delivered **pre-diced siRNAs**. Twenty-one nucleotide duplexes, made by chemical synthesis in a test tube, with the same two-nucleotide 3' overhangs that Dicer would have produced if it had diced a longer substrate.

Twenty-one nucleotides was below the threshold for the interferon sensors. The cell did not see the short duplex as a viral signal. But the short duplex was exactly the substrate that RISC was waiting for. So if you transfected synthetic 21-nt siRNAs into a mammalian cell, you bypassed both Dicer — because the siRNAs were already the right length — and the interferon response — because the siRNAs were too short to trigger it — and you got clean, specific, gene-targeted silencing.

Tuschl's paper showed this with multiple target genes in multiple human cell lines. The silencing was potent. It was specific. It was reproducible. It was, suddenly, a tool. You could design an siRNA against any gene you wanted to study, synthesize it on a DNA synthesizer with the appropriate ribose chemistry, transfect it into your cells, and knock down that gene. The doors to mammalian RNAi were open.

\[Pause.\]

I want to pause here because the historical importance of the Tuschl paper is sometimes underrated next to the Fire and Mello paper, but it shouldn't be. Fire and Mello identified the phenomenon. Tuschl figured out how to actually use the phenomenon as a research and therapeutic tool in human cells. Without Fire and Mello, Tuschl's experiment would not have been possible. But without Tuschl, the entire pharmaceutical project of turning RNAi into drugs would have been stillborn, because you cannot make a drug out of a phenomenon that triggers a massive interferon response every time you administer it.

The next several years, from 2001 through roughly 2005, were a kind of golden era of RNAi as a research tool. Every academic molecular biology lab in the world started using synthetic siRNAs. Companies like Dharmacon and Ambion sprung up to sell pre-designed siRNAs against every gene in the human genome. Library-scale siRNA screens — where you knock down every gene in the genome one at a time and ask which knockdowns produce a phenotype of interest — became a standard tool of cell biology and cancer research. We will come back to research-scale RNAi in Segment 12.

But the much more interesting question, the one that gripped a small number of entrepreneurs and chemists, was: can we turn this into a drug? Can we synthesize an siRNA, put it in a vial, inject it into a patient, and silence a disease-causing gene?

That question is the rest of the lecture. It turned out to be enormously harder than anyone expected.

---

## SEGMENT 5 — The delivery problem — naked siRNAs don't get into cells

Here is the issue. A synthetic siRNA in a test tube, in cell culture, works beautifully. You can transfect it into cells using a cationic lipid reagent — Lipofectamine is the classic one — and the lipid wraps around the negatively charged siRNA, fuses with the cell membrane, dumps the siRNA into the cytoplasm, and the cell silences the target gene. This is how every academic RNAi experiment is done.

But Lipofectamine is not a drug. It's a reagent. It works on cells in a dish because you can apply it directly. You cannot inject Lipofectamine-coated siRNAs into a patient and expect them to reach the right cells in the right organ at the right concentration. The mass of intravenously administered Lipofectamine that would be required to dose a human patient would be toxic. The pharmacokinetics would be terrible. The biodistribution would be uncontrolled.

So you have a beautiful mechanism, you have a beautifully synthesizable drug substance, and you have no idea how to get it from a vial in your hand into the right cell in a patient's body. **That, in one sentence, was the central problem of the siRNA drug industry for fifteen years.**

\[Pause.\]

Let me give you the specifics of why naked siRNAs don't work as drugs. Several reasons, stacking on top of each other.

First, **they get cleared from the bloodstream extremely fast**. Free siRNA in the blood has a half-life of minutes. It gets filtered through the kidneys, broken down by serum nucleases, taken up by tissue macrophages, and excreted. By the time you take a single deep breath, most of your injected siRNA is gone.

Second, **they don't cross cell membranes on their own**. A 21-nucleotide RNA duplex carries about 42 negative charges, from the phosphates of its sugar-phosphate backbone. Lipid bilayers — the membranes of cells — strongly exclude highly negatively charged molecules. The siRNA bounces off the cell surface. It has no way in.

Third, **even if it gets near a cell, it has no signal to be picked up**. The cell does not have a receptor on its surface that recognizes "free siRNA." There's no docking station. The molecule has no business getting into the cell, from the cell's point of view, so the cell doesn't take it up.

Fourth, **if you somehow forced it into the cell — for example, through endocytosis from a delivery vehicle — it would end up in an endosome**, which is a membrane-bound compartment that will eventually fuse with a lysosome and degrade everything in it. To actually silence a target gene, the siRNA has to escape the endosome into the cytoplasm before the endosome matures into a lysosome. Endosomal escape is, to put it mildly, hard.

Add it up. Short blood half-life. No membrane permeability. No receptor on the cell surface. No endosomal escape. A naked siRNA injected into a patient is going to be cleared, never enter cells, and never reach the cytoplasm where RISC lives.

\[Pause.\]

The history of siRNA drug development from roughly 2002 to roughly 2018 is, in large part, the history of solving these four problems. There were two main approaches. The first was **lipid nanoparticles**, abbreviated **LNPs** — exactly the kind of particle, conceptually, that would later carry the mRNA in the COVID vaccines. The second was **conjugates** — chemically attaching the siRNA to a targeting ligand that would route it to a specific tissue. The LNP approach got the first siRNA drug approved. The conjugate approach — specifically, the **GalNAc conjugate** approach — turned siRNAs into a real drug class. We will spend the rest of the first half of the lecture on these two approaches.

Let's start with LNPs and patisiran.

---

## SEGMENT 6 — Patisiran, the LNP, and the first FDA-approved siRNA drug

Patisiran is the brand name **Onpattro**. It was approved by the FDA on August 10, 2018, making it the first siRNA drug approved anywhere in the world. The company that developed it is **Alnylam Pharmaceuticals**, based in Cambridge, Massachusetts. We will spend an entire segment on Alnylam in Segment 8. For now, just know that Alnylam was founded in 2002 specifically to commercialize RNAi as a drug platform, and they spent sixteen years and several billion dollars getting to that approval.

Patisiran is an siRNA that targets the **TTR gene** — transthyretin — in hepatocytes. Hepatocytes are the cells of the liver. TTR is a protein made by the liver, secreted into the blood, that normally carries thyroxine and retinol-binding protein around the body. In a subset of people who carry a mutation in the TTR gene — there are over a hundred different mutations that cause this — the TTR protein misfolds, aggregates into amyloid fibrils, and deposits in tissues. The disease is called **hereditary transthyretin amyloidosis**, abbreviated **hATTR amyloidosis**. There are two main clinical forms — one that primarily affects peripheral nerves and produces a progressive polyneuropathy, and one that primarily affects the heart and produces a progressive cardiomyopathy. Both are devastating. Both are progressive. Both lead to early death.

The therapeutic logic is straightforward. Misfolded TTR is causing the disease. If we can stop the liver from making TTR — both the mutant version and the normal version, since both contribute to the amyloid — the disease should slow or stop. Patisiran is an siRNA designed to silence TTR mRNA in hepatocytes.

\[Pause.\]

But how does patisiran actually get into hepatocytes? It can't get in on its own — we just established that, in Segment 5. Patisiran is delivered in a **lipid nanoparticle**. The LNP is a tiny particle, about 80 to 100 nanometers across, made of four lipid components: an **ionizable cationic lipid** that becomes positively charged at acidic pH, a **PEGylated lipid** that gives the particle a hydrophilic coat and prevents rapid clearance, a **phospholipid** that helps form the bilayer structure, and **cholesterol** that stabilizes the bilayer. Inside the particle, packed into the interior, are thousands of copies of the siRNA, encapsulated and protected from the bloodstream.

When you infuse patisiran into a patient — and this is important, patisiran is delivered as an **intravenous infusion**, given over about 80 minutes once every three weeks, with premedication to prevent infusion reactions — the LNPs circulate through the bloodstream. They pick up a coating of serum proteins, including apolipoprotein E, or ApoE. ApoE is recognized by the LDL receptor on hepatocytes. The liver has a lot of LDL receptors — it's the main organ for clearing LDL particles from the blood. So the ApoE-coated patisiran LNPs get taken up preferentially by hepatocytes, through receptor-mediated endocytosis. Inside the hepatocyte, the LNP is in an endosome. The endosome acidifies. The ionizable cationic lipid in the LNP, designed to switch from neutral to positively charged at acidic pH, protonates and destabilizes the endosomal membrane. The endosome ruptures. The siRNA escapes into the cytoplasm. RISC picks it up. The TTR mRNA is silenced. TTR protein levels in the blood drop by about 80 percent.

That is the LNP delivery story, and it is impressive. The clinical trial for patisiran, called APOLLO, showed that hATTR amyloidosis patients on the drug had stabilization or improvement in neuropathy scores compared to patients on placebo, who continued to worsen. The drug worked. The mechanism worked. RNAi was, finally, a real therapeutic modality.

\[Pause.\]

But — and this is the "but" that drives the next era of the field — patisiran has some serious limitations that come from the LNP delivery vehicle. The LNP is large. It triggers the complement system. It causes infusion reactions in a meaningful fraction of patients, which is why you have to pre-medicate with steroids, antihistamines, and acetaminophen before every dose. It can only be given by intravenous infusion, in an infusion clinic, with medical supervision. The dosing schedule is every three weeks, indefinitely. It is, to put it bluntly, an inconvenient drug. It works, but it costs the patient an infusion clinic visit every three weeks for the rest of their life.

And here is the broader problem. If every siRNA drug requires an LNP, and every LNP requires intravenous infusion with premedication and an infusion clinic, then the siRNA drug class will always be a hospital-administered, rare-disease, intravenous specialty product. It will never be something you self-inject in your kitchen once every six months. It will never be a chronic-disease drug class on the scale of statins or antihypertensives. The LNP makes the modality work, but it caps its ambitions.

Alnylam knew this. Even as they were running the patisiran trials, they were betting heavily on a different delivery strategy — a strategy that would not require an LNP at all, that would be deliverable by subcutaneous injection, that would be storage-stable, that would be dramatically cheaper to manufacture. That strategy was **GalNAc conjugation**. And it is, in my view, the single most important practical breakthrough in the history of the siRNA drug class.

That is the topic of Segment 7.

---

## SEGMENT 7 — The GalNAc breakthrough — a sugar that finds the liver

Here is the chemistry. **N-acetylgalactosamine**, abbreviated **GalNAc**, is a sugar. It's a simple monosaccharide — a six-carbon ring, related to galactose, with an acetylated amine group at the 2-position. You can buy it by the gram. It's nothing exotic.

But GalNAc has a very specific biological recognition. There is a receptor on the surface of hepatocytes — and almost exclusively on the surface of hepatocytes — called the **asialoglycoprotein receptor**, abbreviated **ASGPR**. The asialoglycoprotein receptor evolved to clear from the bloodstream a class of glycoproteins that have lost their terminal sialic acid residues, exposing the underlying galactose or GalNAc residues. ASGPR sees the exposed sugars, binds them, internalizes the glycoprotein via clathrin-mediated endocytosis, and the protein gets degraded in the lysosome. It's a clearance mechanism. The liver uses it to take out the trash — to clear desialylated proteins from circulation.

Now here is the trick. ASGPR is enormously abundant on hepatocytes. There are about half a million copies of ASGPR per hepatocyte. It cycles between the cell surface and the endosomal compartment with a turnover time of about ten to fifteen minutes — meaning every ten to fifteen minutes, every single ASGPR receptor on the surface gets internalized, dumped into an endosome, and recycled back to the surface. The throughput of this receptor is staggering. If you can attach a cargo to a GalNAc — any cargo — and float that conjugate in the bloodstream, the liver will hoover it up with extraordinary efficiency, route it into the endosomal compartment of hepatocytes, and do this at a rate of literally millions of internalization events per cell per day.

\[Pause.\]

Here is the analogy. **ASGPR is the sugar mailbox on the front of every hepatocyte. It is a delivery van that only stops at houses with a specific mailbox flag — and that flag is GalNAc. If you attach GalNAc to your package, the van picks it up. If you don't, the van drives right past.** Hepatocytes have this enormous fleet of sugar-recognizing receptors that exists, primarily, to clean up desialylated glycoproteins. We just hijack that fleet. We attach GalNAc to our siRNA. The siRNA looks, to ASGPR, like a desialylated glycoprotein cargo. The receptor binds it, internalizes it, dumps it in an endosome. Now the siRNA is inside the cell. The endosomal escape happens — slowly, at low efficiency, but enough — and the siRNA reaches the cytoplasm, finds RISC, and silences its target.

The structure of a GalNAc-siRNA conjugate is specific. To get really good binding to ASGPR, you don't just attach one GalNAc to the siRNA. You attach **three** GalNAc residues, arranged on a branched tri-antennary scaffold, sometimes called **GalNAc3** or **trimer GalNAc**. The reason is that ASGPR binds best to trivalent ligands — three GalNAc residues clustered together bind much more tightly than one alone, because three ASGPR molecules on the cell surface can simultaneously grab three GalNAc residues, with each interaction reinforcing the others. This is called the cluster glycoside effect. The affinity of trivalent GalNAc for ASGPR is something like a thousand times higher than the affinity of monovalent GalNAc. So Alnylam, and other companies, attach a trivalent GalNAc cluster to one end of the siRNA — typically to the 3' end of the passenger strand, so it doesn't interfere with the guide strand's function — and that gives them the high-affinity, hepatocyte-targeted siRNA conjugate they need.

\[Pause.\]

The credit for actually figuring out how to put this together as a practical drug platform belongs to a chemist at Alnylam named **Muthiah Manoharan** and his colleagues, who spent years optimizing the linker chemistry, the spacing of the three GalNAc groups, the attachment point on the siRNA, and the chemical modifications of the siRNA itself to make it stable in circulation. The result was a platform called **Enhanced Stabilization Chemistry**, or **ESC**, and a later iteration called **ESC+**. We will talk about ESC chemistry in Segment 9. For now, just know that the combination of GalNAc conjugation plus ESC chemistry turned siRNAs from a drug class that required IV infusion and an LNP into a drug class that you can self-administer as a **subcutaneous injection** under the skin, in the abdomen or thigh, with a small-volume syringe, no premedication required.

The first GalNAc-siRNA to be approved was **givosiran**, brand name **Givlaari**, in November 2019, about a year after patisiran. That approval kicked off the GalNAc era. Within three years, three more GalNAc-siRNAs were approved: inclisiran in 2021, lumasiran in 2020, and vutrisiran in 2022. The whole landscape of the field shifted. By the early 2020s, anyone running an siRNA drug company who was still trying to do LNP delivery for liver targets was considered behind the curve. GalNAc had won. The convenience advantage — subcutaneous injection twice a year versus IV infusion every three weeks — was decisive. And once you had a delivery vehicle that was that convenient, you could think about treating much larger patient populations, including chronic diseases that affect millions, not just rare diseases that affect thousands.

We'll come to the approved drugs in Segment 8 and to inclisiran specifically — the most commercially important of the bunch — in Segment 14. First, let me give you a proper introduction to the company that made all of this happen.

---

## SEGMENT 8 — Alnylam Pharmaceuticals — the company that bet everything on RNAi

Alnylam Pharmaceuticals was founded in 2002 in Cambridge, Massachusetts. The founding scientific team is worth knowing about, because it tells you something about how seriously the academic community took RNAi as a drug platform from the very beginning. The founders included **Phillip Sharp**, MIT professor, Nobel laureate for the discovery of RNA splicing; **Tom Maniatis**, then at Harvard, one of the foundational figures of molecular cloning; **Phillip Zamore**, at UMass Medical School, one of the key biochemists who dissected RISC; **David Bartel**, at MIT and the Whitehead Institute, the foremost academic expert on microRNAs; and a few others. The company was, from day one, a who's who of the academic RNA biology community converting their basic science into a commercial drug platform.

The business model was, in retrospect, audacious to the point of recklessness. Alnylam said: we are going to bet the entire company on the proposition that siRNA can be turned into a drug class, despite the fact that no one has ever done this, despite the fact that delivery is unsolved, despite the fact that the chemistry is brand new, despite the fact that we will probably have to develop a dozen drugs in parallel to find the few that work. They raised hundreds of millions of dollars, then billions over time, on the strength of that bet. They burned through cash for sixteen years before their first FDA approval. They came close to running out of money more than once. And they made it.

\[Pause.\]

The patisiran approval in 2018 was a turning point. Before that, Alnylam was a story stock — a biotech without an approved product, trading on the promise of RNAi. After patisiran, Alnylam was a real pharmaceutical company with a real revenue stream and, importantly, with the credibility to convince investors that the next four approvals — givosiran, lumasiran, inclisiran, vutrisiran — were going to come quickly. They did. By 2022, Alnylam had four wholly owned approved drugs and a fifth — inclisiran — out-licensed to Novartis. The platform had been validated. The early bet had paid off.

I want to flag one specific thing about Alnylam's strategy that I think is generalizable to other emerging drug modalities. Alnylam did not try to develop one drug. They developed a **platform**. The platform was: GalNAc-conjugated, ESC-chemistry-modified siRNA, targeted to liver-expressed genes. Within that platform, the chemistry is largely the same for every program — the GalNAc cluster, the modification pattern, the synthesis route, the formulation. What changes from program to program is the twenty-one-nucleotide sequence of the siRNA itself. The target gene differs. The disease differs. The clinical trial design differs. But the underlying drug substance is built on the same molecular chassis. This means that once you have the platform working, your development cost per new drug drops dramatically. You don't have to reinvent the chemistry every time. You just pick a new target gene, design an siRNA against it, manufacture it on the same equipment, and go.

That is the platform play. It's the same logic that ultimately made monoclonal antibodies a category — once you have the IgG framework working, every new antibody is just a different set of CDR loops on the same scaffold. The Alnylam GalNAc-siRNA platform is, conceptually, a similar play. And it is starting to produce drugs at a much faster clip than the early years suggested it would.

\[Pause.\]

There is one more thing I want to say about Alnylam that is more philosophical than scientific. The company's existence proves something about the right way to commercialize a new academic mechanism. RNAi was discovered in 1998. The first FDA-approved drug came in 2018. That is twenty years from discovery to drug. The first phase of that twenty-year arc was basic science — Fire and Mello, Tuschl, the dissection of Dicer and RISC. The second phase was the founding and slow burn of Alnylam — building a company specifically around the modality, on the bet that delivery would be solved. The third phase was the delivery breakthroughs — the LNP for patisiran, the GalNAc conjugates for everything that followed.

The lesson, if there is one, is that you cannot do this kind of work inside a traditional pharmaceutical company. Big pharma does not have a twenty-year time horizon. Big pharma is structured around development of drugs against known mechanisms with known delivery. A new mechanism with no delivery is too speculative, too risky, too long-cycle. The company you need to build, to commercialize something genuinely new, is a single-platform biotech that is willing to bet everything on one technology and burn cash for a decade or more before it produces a return. Alnylam is the archetype. Moderna is the same archetype for mRNA. Vertex was the same archetype for cystic fibrosis. The platform biotechs are how new modalities actually reach the clinic.

Okay. Let's stop talking about the company and start talking about the chemistry. Because there is a specific set of chemical modifications that make these siRNAs actually work as drugs, and we need to walk through them.

---

## SEGMENT 9 — Chemistry that keeps siRNA alive — 2'-O-methyl, 2'-fluoro, phosphorothioate, ESC

Take a 21-nucleotide RNA duplex with no chemical modifications. Inject it into a patient. It will be degraded within minutes. Serum has nucleases — RNase A, RNase H, RNase L, exonucleases — that chew up unmodified RNA on contact. The plasma half-life of an unmodified siRNA is on the order of single-digit minutes. That is not a drug. That is a snack.

So you have to chemically modify the siRNA, at every position, to protect it from the nucleases — and also to improve its binding affinity to the target mRNA, to reduce its immunogenicity, to enhance its loading into RISC, and to improve its endosomal escape. The chemistry of these modifications is the topic of this segment.

\[Pause.\]

There are three main classes of modification that matter, and I want you to know them by name.

**One: 2'-O-methyl.** This is a methyl group attached to the 2' oxygen of the ribose sugar. In an unmodified RNA, the 2' position carries a free hydroxyl — the OH that distinguishes ribonucleotides from deoxyribonucleotides. The free 2'-OH is the chemical feature that makes RNA reactive — it is involved in self-cleavage at high pH, and it is recognized by many nucleases as the substrate. Methylating the 2'-OH gets rid of that reactivity. The modified nucleotide is more stable. It also has slightly different base-pairing geometry, which can improve duplex stability. 2'-O-methyl is the workhorse modification of siRNA chemistry.

**Two: 2'-fluoro.** This replaces the 2'-OH entirely with a fluorine. Fluorine is small, electronegative, and chemically inert. The 2'-fluoro modification produces an even more stable nucleotide than 2'-O-methyl, with slightly different effects on duplex thermodynamics and RISC loading. Modern siRNA designs typically use a combination of 2'-O-methyl and 2'-fluoro modifications, at specific positions in the duplex, chosen to optimize stability, RISC loading, and target affinity.

**Three: phosphorothioate.** This is a modification to the **phosphate backbone** rather than to the sugar. In an unmodified RNA, the phosphate group has four oxygens — two of them in the phosphodiester linkage to the adjacent sugars, one as a double-bonded oxygen, and one as a free oxygen carrying the negative charge. In a phosphorothioate, you replace one of the non-bridging oxygens with a sulfur. The resulting linkage is much more resistant to nucleases. Phosphorothioate linkages are typically placed at the ends of the siRNA strands — usually a couple of phosphorothioates at each 3' end — where exonuclease attack is most likely.

\[Pause.\]

These three modifications — 2'-O-methyl, 2'-fluoro, phosphorothioate — are the toolkit. Every modern siRNA drug uses all three. The pattern of which positions are 2'-O-methyl, which are 2'-fluoro, and which carry phosphorothioate linkages, is the proprietary art of each company. Alnylam's pattern, optimized through years of empirical screening, is what they call **Enhanced Stabilization Chemistry**, or **ESC**. A more recent refinement is **ESC+**, which incorporates additional modifications including, in some cases, glycol nucleic acid analogs that further stabilize the duplex. The detailed pattern is published in patents and in some primary literature, and the design choices reflect both biophysical optimization and patent landscape considerations — companies use slightly different patterns partly for performance and partly to avoid each other's intellectual property.

The analogy I want to give you for ESC chemistry is this. **The ESC chemistry is the survival kit. It is the set of modifications that lets a naked siRNA survive in blood, get into cells via GalNAc, escape endosomes, and stay around long enough to silence its target.** Without ESC, the siRNA degrades in serum and never reaches its target. With ESC, the siRNA can persist in hepatocytes for weeks to months after a single dose. The chemistry, plus the GalNAc, plus the storage in a cellular compartment that hepatocytes are slow to clear, combine to produce a drug that you can dose subcutaneously twice a year and have a sustained pharmacodynamic effect on the target mRNA.

That last point — the duration of effect — is worth dwelling on. The fact that a single subcutaneous dose of a GalNAc-siRNA can suppress a target gene for months, in some cases years, is biologically remarkable. It is not just that the siRNA itself persists. The siRNA, once loaded into RISC, can cycle through many target mRNA cleavage events. The RISC complex itself is long-lived. Hepatocytes do not divide much in healthy adults, so once you have loaded RISC with a guide strand in a hepatocyte, that hepatocyte will continue to silence the target mRNA for as long as the RISC complex remains functional, which can be a very long time. This is the molecular basis for **twice-yearly dosing** in drugs like inclisiran. The pharmacology is built into the cell biology.

\[Pause.\]

Let me also flag the contrast with ASOs, since I promised in Segment 1 we would come back to this. ASOs typically use a different modification chemistry — phosphorothioate backbones throughout, often with 2'-MOE (2'-O-methoxyethyl) modifications on flanking nucleotides, with a central window of unmodified DNA in a "gapmer" design that supports RNase H recruitment. siRNAs use a different toolkit — 2'-O-methyl and 2'-fluoro on RNA, with phosphorothioates only at the ends. The chemistries are related but distinct, and they reflect the different requirements of the two modalities. ASOs need to be substrates for RNase H, so they have to be DNA-like in the central region. siRNAs are not substrates for RNase H — they go to RISC instead — so they can be fully modified throughout, which makes them more nuclease-resistant. The siRNA chemistry can be more aggressive than the ASO chemistry, in a sense, because it doesn't need to preserve any window of enzymatic substrate-compatibility in the middle. This is one of the reasons GalNAc-siRNAs achieve such long durations of action — they can be more thoroughly stabilized than ASOs and still work, because their mechanism of action is structural (RISC loading and target binding) rather than enzymatic (RNase H cleavage).

That is the chemistry. Phosphoramidite synthesis, with modified phosphoramidites at every position, the whole thing made on the same kind of solid-phase synthesizer you learned about in the oligo synthesis lecture. The synthesis is essentially the same Caruthers chemistry from 1981, with a slightly bigger menu of monomers.

Now we are about an hour in. Let's take a break.

\[BREAK\]

---

## SEGMENT 10 — Givosiran, lumasiran, vutrisiran — the GalNAc-siRNA drugs

Welcome back. Let's continue.

We have now established the platform. GalNAc-conjugated, ESC-chemistry-stabilized, 21-nucleotide siRNA, delivered as a subcutaneous injection, taken up by hepatocytes via ASGPR, silencing a liver-expressed target gene for months from a single dose. The question now is: what diseases is this actually being used to treat? Let me go through them.

\[Pause.\]

**Givosiran**, brand name **Givlaari**, approved November 2019. The target is **ALAS1** — delta-aminolevulinate synthase 1 — which is the rate-limiting enzyme in heme biosynthesis in the liver. The disease is **acute hepatic porphyria**, specifically **acute intermittent porphyria** or AIP. In AIP, patients have a mutation in one of the downstream enzymes of the heme synthesis pathway, which causes accumulation of toxic intermediates — porphobilinogen and delta-aminolevulinic acid — that produce attacks of severe abdominal pain, neurological symptoms, and sometimes psychiatric symptoms. The therapeutic logic is to silence ALAS1, the upstream enzyme, so that less of the downstream toxic intermediate accumulates. Subcutaneous injection, once monthly. Substantially reduces attack rates. First GalNAc-siRNA approved.

**Lumasiran**, brand name **Oxlumo**, approved November 2020. The target is **HAO1** — hydroxyacid oxidase 1 — which makes glyoxylate in the liver. The disease is **primary hyperoxaluria type 1**, or PH1, a rare genetic disease in which mutations in another enzyme cause the liver to overproduce **oxalate**. Excess oxalate combines with calcium in the urine to form calcium oxalate crystals, which deposit in the kidneys and ultimately destroy renal function. Patients often need combined liver and kidney transplants. The therapeutic logic is to silence HAO1, the upstream enzyme that makes the glyoxylate substrate, so that less oxalate gets produced. Subcutaneous injection, once monthly initially, then once quarterly for maintenance.

**Vutrisiran**, brand name **Amvuttra**, approved June 2022. The target is again **TTR** — the same target as patisiran. The disease is the same hATTR amyloidosis we already discussed. But the formulation is dramatically improved. Vutrisiran is a GalNAc-siRNA. No LNP. Subcutaneous injection, given once every three months — quarterly — instead of patisiran's every-three-week IV infusion. Same target. Same efficacy on TTR knockdown. Vastly better convenience. This is the proof that GalNAc-conjugation can directly replace LNP-delivered siRNAs for liver targets, with massive convenience gains and no loss of efficacy.

\[Pause.\]

And then there is the fifth approved drug, **inclisiran**, brand name **Leqvio**, which I am going to talk about separately in Segment 14 because it deserves its own treatment. Inclisiran targets **PCSK9** to lower LDL cholesterol. It is not for a rare disease. It is for a chronic disease that affects, potentially, tens of millions of patients. It is the drug that will determine, more than any other, whether siRNA becomes a major pharmaceutical category or remains a niche modality. So we will come back to it.

For now, the pattern across the four rare-disease drugs is clear. Pick a liver-expressed gene whose overexpression or normal expression contributes to a disease. Design an siRNA against it. Stabilize the siRNA with ESC chemistry. Conjugate it to trivalent GalNAc. Inject subcutaneously. Watch the target gene get silenced and the disease symptoms improve. That recipe has now worked four times in a row, with four different target genes, in four different rare diseases. The platform is real. The next question is whether the platform extends beyond rare diseases, and whether it extends beyond the liver.

---

## SEGMENT 11 — ASO vs siRNA — when do you use which?

Some of you may be wondering, as I have been hinting throughout this lecture, what the difference really is between an ASO and an siRNA, and when you would pick one over the other. Let me draw the contrast cleanly.

**Both ASOs and siRNAs are antisense in concept.** Both work by Watson-Crick base pairing between a designed oligonucleotide and a target messenger RNA. Both are synthesized on phosphoramidite chemistry. Both use chemically modified nucleotides to survive in biological media. Both can be designed against any target whose mRNA sequence is known. In those broad strokes, they are siblings.

**The difference is in the cellular machinery they exploit.** An ASO is a single-stranded oligonucleotide, typically 18 to 22 nucleotides long, that base-pairs with its target mRNA in the nucleus or cytoplasm and recruits a cellular enzyme — usually **RNase H1** — to cleave the mRNA at the site of binding. The ASO itself is not catalytic. It is a guide and a binding partner; the cutting is done by an endogenous enzyme. Alternatively, an ASO can be designed not to recruit RNase H but to physically block a particular RNA element — a splice site, a 5' cap, a translation start codon — and modulate the processing or translation of the target mRNA without cleaving it. This is the splice-switching mode of action used by milasen. Either way, the ASO is a single strand. The machinery it recruits is RNase H or splicing machinery.

An siRNA is a double-stranded oligonucleotide, with a guide strand and a passenger strand, that is loaded into the RISC complex. RISC selects the guide strand, ejects the passenger strand, and uses the guide to find target mRNA. **Argonaute-2**, the catalytic core of RISC, cleaves the target mRNA at a specific position. The siRNA is the guide; the cutting is done by AGO2. So both modalities ultimately rely on an endogenous protein to cut, but they rely on **different** endogenous proteins. RNase H1 for ASOs. AGO2/RISC for siRNAs.

\[Pause.\]

That mechanistic difference has practical consequences. Let me enumerate.

**ASOs are typically more chemically aggressive in their backbone modifications.** Phosphorothioate throughout, often. They are taken up by cells, including extra-hepatic cells, through mechanisms involving cell-surface protein binding and gymnotic uptake — meaning, the ASO can be taken up by some cell types without any explicit delivery vehicle, just by virtue of the phosphorothioate backbone interacting with cell surface receptors. This is one of the reasons several FDA-approved ASOs target neurons after intrathecal delivery — nusinersen, tofersen, milasen — because the ASO can be dropped into the cerebrospinal fluid and get taken up by spinal motor neurons and other CNS cells directly.

**siRNAs are typically not gymnotically taken up.** They require a delivery vehicle — historically an LNP, now a GalNAc conjugate for liver targets. The natural cellular receptors that would internalize a free siRNA are limited. This is why the siRNA drug class has been, until recently, almost exclusively for liver targets. Other tissues do not have ASGPR. Other tissues do not have a comparably high-throughput, cell-surface-recycling, sugar-recognizing receptor. So extending GalNAc-style conjugation to other tissues is an open problem, and we will come back to it.

**ASOs can do splice modulation.** This is a unique capability that siRNAs do not have. Because an ASO can physically block a splice site without recruiting RNase H, it can be designed to make the cell include an exon it normally skips, or skip an exon it normally includes. This is how nusinersen — the SMA drug — works, by promoting inclusion of exon 7 of SMN2. siRNAs cannot do this. An siRNA paired with a pre-mRNA in the nucleus would not be cleaved by RISC efficiently, because RISC is mostly cytoplasmic, and even if cleavage happened it would just destroy the message rather than modulate its splicing. Splice modulation is an ASO-only capability.

**siRNAs typically achieve more potent knockdown per molecule at the target gene than ASOs.** This is because the catalytic mechanism — RISC cycling, with one guide strand directing multiple mRNA cleavage events — is more efficient than the sub-stoichiometric ASO mechanism, where each ASO molecule guides typically one RNase H cleavage event. For deep knockdown of a single target in the liver, the siRNA is often the better tool.

\[Pause.\]

So the heuristic is something like this. **If your target is in the liver, and you want deep, durable knockdown, with subcutaneous dosing every few months, siRNA with GalNAc is probably your best bet.** Inclisiran for PCSK9 is the example. **If your target requires splice modulation, or is in the CNS, or you want gymnotic uptake into tissues that don't have ASGPR, ASO is probably your best bet.** Nusinersen for SMN2 is the example. The two modalities are converging in some respects — GalNAc-conjugated ASOs are now being developed by Ionis and others, blurring some of the lines — but the broad pattern still holds.

One more thing. The two modalities have very different patent landscapes and very different IP holders. ASOs are largely the territory of Ionis Pharmaceuticals (formerly Isis Pharmaceuticals). siRNAs are largely the territory of Alnylam, with significant patents also held by Silence Therapeutics, Arrowhead, and others. The commercial story of the antisense field — which we will not dwell on here — is partly the story of two camps that started in the same place in the late 1980s and diverged into two different drug categories, both of which now have approved products. Both Ionis and Alnylam have been remarkably persistent in pushing their respective platforms to commercial reality, and both deserve credit for sticking with it through the long years when nothing was working.

---

## SEGMENT 12 — shRNA and RNAi as a research tool

I want to spend a segment on the other major form of RNAi that is widely used in molecular biology research, which is **short hairpin RNA**, or **shRNA**, delivered by viral vector. This is not, currently, a major therapeutic modality — although there are clinical trials — but it is everywhere in research, and you need to understand it to read the modern literature.

An shRNA is a single RNA molecule that folds back on itself to form a hairpin. The stem of the hairpin is double-stranded — typically 19 to 22 base pairs, the same length as an siRNA — and the loop at the top connects the two ends. When this hairpin is expressed inside a cell, it is recognized by Dicer, which cuts off the loop, releasing a double-stranded siRNA-like molecule that loads into RISC and silences the target gene exactly like a synthetic siRNA would.

The advantage of an shRNA is that it can be **encoded in DNA**. You can put the shRNA-encoding sequence under a promoter — Pol III promoters like H1 or U6 are common for this — and put the whole cassette into a plasmid, or a lentivirus, or an AAV. When the cassette is expressed inside a cell, the shRNA is transcribed continuously, diced by Dicer continuously, and loaded into RISC continuously. The knockdown is sustained for as long as the cassette is expressed. This is very different from a synthetic siRNA, which gets used up over time as the molecules are degraded and not replaced.

\[Pause.\]

Lentiviruses are particularly common shRNA delivery vehicles in research. You take your shRNA cassette, package it into a lentiviral vector, infect your cells of interest, and select for cells that have integrated the cassette. Now those cells, and all their daughter cells, express the shRNA constitutively and have the target gene knocked down constitutively. You can do this in cell lines, in primary cells, in mouse hematopoietic stem cells that get transplanted into mice — anywhere you can integrate a lentiviral cassette. **shRNA delivered by lentivirus is the workhorse method for sustained genetic knockdown in cells and tissues.**

For research, this is enormously useful. shRNA libraries — collections of lentivirally packaged shRNAs covering every gene in the human or mouse genome, often with multiple shRNAs per gene — became standard tools in the late 2000s for genome-wide loss-of-function screens. You infect a population of cells with a pooled shRNA library, apply a selection — for example, treat with a drug and ask which knockdowns confer resistance — sequence the surviving cells to identify which shRNAs they carry, and you have your hits. This was the dominant method for genome-wide loss-of-function screens until CRISPR-Cas9 came along around 2014 and largely replaced it for that purpose, because CRISPR knockouts are typically cleaner (full loss rather than partial knockdown) and the screens are more reproducible. But shRNAs are still widely used, especially for situations where you want partial knockdown rather than full knockout, or where you want to be able to titrate the knockdown level.

I should also mention earlier RNAi research tools, in particular **C. elegans and Drosophila loss-of-function screens** that exploited RNAi as the native phenomenon. In worms, you can knock down any gene just by feeding the worms bacteria that express double-stranded RNA matching that gene — the worm intestine takes up the dsRNA, processes it, and silences the target. This led to genome-wide RNAi screens in worms in the early 2000s that mapped most of the worm's gene functions. Similar screens were done in Drosophila cells with directly added dsRNA. These screens are an important chapter in the history of functional genomics, and they were possible only because RNAi was a natural cellular phenomenon that could be triggered easily in those organisms.

\[Pause.\]

One more research-era detail worth mentioning. Tuschl and others, after the 2001 paper, worked out empirical rules for designing effective siRNAs. The **Tuschl rules**, sometimes still called by that name in older literature, gave guidelines for choosing the 21-nucleotide stretch of a target mRNA to silence — preferences for certain bases at certain positions in the guide strand, target site features that predict good knockdown, GC content windows, secondary structure considerations. Modern siRNA design has moved well beyond the Tuschl rules, with machine-learning models and large empirical datasets driving the design choices, but the original rules are still pedagogically useful and they shaped a decade of siRNA design.

So that is research-mode RNAi. Synthetic siRNAs, transfected into cells in a dish, for short-term knockdown. shRNAs in lentiviruses, for sustained knockdown. RNAi screens in worms and flies, for functional genomics. The research toolkit is mature, has been mature for fifteen years, and is a routine part of the molecular biologist's repertoire. The therapeutic application is, as we have seen, much more recent and much harder, because of the delivery problem that research-mode RNAi doesn't have to deal with.

Now we are going to talk about something specific to siRNAs that you need to know about, and that is the issue of **off-target effects**.

---

## SEGMENT 13 — Off-target effects — the seed region problem

Here is a feature of siRNAs that is both biologically fascinating and pharmacologically inconvenient. The guide strand inside RISC does not actually need to pair perfectly with its target mRNA across all 21 nucleotides in order to direct cleavage or silencing. **The most important region for target recognition is a stretch of just six to eight nucleotides near the 5' end of the guide strand**, called the **seed region**, specifically positions 2 through 7 or 8.

Why? Because the structural geometry of the AGO2 protein presents the seed region in a particular orientation that maximizes its accessibility for pairing with target RNA. The seed region is, in a sense, the first contact point — the part of the guide that scans incoming mRNAs and tests them for complementarity. If the seed pairs well, the rest of the guide gets time to find its match. If the seed doesn't pair, the interaction comes apart quickly and the guide moves on.

This is exactly how endogenous **microRNAs** — miRNAs — work. miRNAs are the cell's own short regulatory RNAs, evolutionarily related to siRNAs, that pair imperfectly with their targets, typically only across the seed region, and silence those targets primarily by inducing translational repression and mRNA destabilization rather than by direct cleavage. miRNAs use the same RISC machinery as siRNAs — sometimes the same AGO proteins, sometimes a different mix — but the imperfect pairing means AGO2 doesn't typically slice. Instead, the bound mRNA gets shuttled to P-bodies, deadenylated, and degraded slowly. Each miRNA has hundreds of natural targets — any mRNA whose 3' untranslated region happens to contain a sequence complementary to the miRNA's seed region.

\[Pause.\]

Now here is the problem for siRNA drug design. **A synthetic siRNA, designed to perfectly match one specific target mRNA, will also have a seed region that will inevitably find complementary sequences in the 3' UTRs of many other, unintended mRNAs.** Those off-target mRNAs will be silenced too, miRNA-style, by translational repression and destabilization. The off-target silencing is typically modest in magnitude — you don't see massive knockdown of off-targets, the way you see massive knockdown of the intended on-target — but it is real, and it is reproducible, and in some cases it can produce toxicity by knocking down genes that, in aggregate, you didn't intend to touch.

Off-target effects mediated by the seed region are one of the major safety considerations in siRNA drug development. Mitigation strategies include: chemical modification of the seed region positions to weaken miRNA-like target binding while preserving on-target cleavage; selection of guide strands whose seed sequences have minimal overlap with abundant 3' UTR sequences in the target tissue; and careful preclinical screening of candidate siRNAs in cell lines or in vivo, looking for unexpected gene expression changes that suggest off-target activity.

There are also off-target effects mediated by **innate immune sensing**. Even short siRNAs can, under some conditions, trigger interferon responses through receptors like TLR7, TLR8, and others. Specific sequence motifs — particularly GU-rich sequences — are more likely to trigger immune activation. Modern siRNA drugs are designed to avoid these motifs and incorporate modifications (especially 2'-O-methyl) that suppress immune recognition. This is part of the chemistry-as-survival-kit story.

\[Pause.\]

The miRNA-like off-target effect is, in many ways, an unavoidable feature of the siRNA modality. It is a consequence of the fact that we are hijacking a piece of cellular machinery that evolved to do exactly this kind of imperfect-pairing-based regulation. We are using AGO2's slicing activity, which requires near-perfect pairing across the guide; but the same molecule, in the same RISC complex, is also competent to do miRNA-style imperfect pairing, and we cannot fully prevent that. Good drug design minimizes it. Perfect drug design probably cannot eliminate it. Anyone designing siRNA therapies needs to take seed-mediated off-target effects seriously, and the field has gotten pretty good at managing them, but they remain a feature of the modality.

This is, by the way, one of the conceptual reasons why some people think CRISPR-Cas9 will eventually overtake RNAi for many applications where you want clean loss of function. CRISPR doesn't have a seed-region problem in the same way — its specificity comes from a longer guide and a different kind of pairing. But CRISPR makes permanent DNA edits, which is not what you always want; sometimes you want reversible, tunable knockdown rather than permanent knockout. For those applications, RNAi remains the better tool. Different jobs, different modalities.

---

## SEGMENT 14 — Inclisiran — the cholesterol drug that could change the modality

Now let's talk about inclisiran.

Inclisiran, brand name **Leqvio**, is a GalNAc-conjugated siRNA targeting **PCSK9**. It was developed by The Medicines Company, which licensed the molecule from Alnylam, and it was approved by the EMA in December 2020 and by the FDA in December 2021. It is administered as a single subcutaneous injection — about 1.5 mL, given in the abdomen or thigh by a healthcare professional — at month zero, month three, and then **every six months thereafter, indefinitely**. Twice a year. For the rest of your life. For LDL cholesterol management.

That dosing schedule is the headline. **Twice a year, subcutaneous, for cholesterol.** Think about what that means in the context of cardiovascular medicine.

\[Pause.\]

PCSK9 is a protein that regulates the LDL receptor on the surface of hepatocytes. The LDL receptor is what takes LDL particles out of the bloodstream. PCSK9 binds to the LDL receptor and targets it for degradation, reducing the number of receptors on the cell surface, which raises blood LDL. People with genetic variants that produce loss of PCSK9 function have, naturally, very low LDL and dramatically lower cardiovascular disease risk. This was the discovery that triggered PCSK9 as a drug target — the human genetics pointed at PCSK9 as a place where knocking it out would lower LDL and reduce heart attacks.

There are two classes of PCSK9-targeting drugs already on the market. **Monoclonal antibodies** — evolocumab (Repatha) and alirocumab (Praluent) — are injected every two weeks or every four weeks and physically bind circulating PCSK9 protein, preventing it from interacting with the LDL receptor. They work well. They cause big LDL reductions. But the dosing schedule is bi-weekly or monthly, and the cost is high, and patient adherence to bi-weekly injections in a chronic asymptomatic condition like high cholesterol is famously poor.

Inclisiran is the other approach. Instead of blocking the PCSK9 protein after it's made, inclisiran silences the PCSK9 gene in hepatocytes, so the liver makes much less PCSK9 to begin with. The net effect on LDL is similar to the antibodies — about 50 percent reduction in LDL on top of statin therapy. The differentiator is the dosing schedule. Twice a year. Two injections per year, in your doctor's office, for the rest of your life.

\[Pause.\]

Here is the analogy. **Inclisiran is twice-a-year cholesterol therapy versus daily statins. The convenience and adherence advantage is enormous.** Cardiovascular disease is the leading cause of death in the developed world. Statins are wildly effective at preventing it. But statin adherence, in real-world data, is notoriously bad — after one year on a daily statin, somewhere between 30 and 50 percent of patients have stopped taking it, depending on the population studied. Daily pills, for an asymptomatic condition, with vague concerns about muscle side effects, get abandoned. A twice-yearly injection administered by a clinician completely sidesteps the adherence problem. If your doctor injects you twice a year, you get a hundred percent adherence to that injection schedule.

The bet behind inclisiran — and the reason **Novartis paid 9.7 billion dollars to acquire The Medicines Company in 2020** specifically to get this one drug — is that inclisiran can become a major cardiovascular medication, prescribed broadly to patients with LDL above goal despite statins, and ultimately perhaps to a larger population of patients at cardiovascular risk. The market opportunity is in the tens of billions of dollars per year if inclisiran is widely adopted. Novartis's price tag implies they thought it was worth that bet.

As of this lecture in 2026, inclisiran adoption is real but not yet at the scale Novartis projected. The drug is being prescribed. Cardiovascular outcomes trials are underway — the big one is **ORION-4** — to demonstrate that the LDL reduction translates into reduced heart attacks and strokes. If those outcomes data come in clean — and as of now, the field expects they will — inclisiran becomes a major drug.

\[Pause.\]

The reason inclisiran matters to this lecture, beyond its commercial significance, is what it proves about the modality. **Inclisiran is the proof-of-concept that RNAi can be a chronic-disease drug class, not just a rare-disease tool.** The first four GalNAc-siRNAs — givosiran, lumasiran, vutrisiran, and patisiran/Onpattro — all treat rare diseases with high unmet need and small patient populations. They are important drugs, they have changed those patients' lives, but they are not chronic-disease drugs at population scale. Inclisiran is the first siRNA drug that is being deployed against a chronic disease that affects tens of millions of patients. If inclisiran works — meaning, if it produces clean cardiovascular outcomes data and gets prescribed broadly — then RNAi has joined the small set of drug modalities that can plausibly compete with small molecules for chronic-disease indications. Not just rare diseases. Not just IV-infusion specialty drugs. A real, broad-market, chronic-disease tool.

The implications of that, if it pans out, are significant. Companies are looking at GalNAc-siRNAs for hypertension (angiotensinogen as a target — zilebesiran is in trials), for hypertriglyceridemia (APOC3), for hepatitis B (HBV transcripts), for non-alcoholic steatohepatitis, for various complement-mediated conditions, for chronic inflammation. The pipeline of liver targets is enormous. And every one of them gets to ride on the same GalNAc platform, with the same chemistry, the same delivery, the same dosing schedule. The platform is, in 2026, just starting to be used to its potential.

---

## SEGMENT 15 — Beyond the liver — extra-hepatic delivery

So if siRNA-with-GalNAc works so well for the liver, the obvious question is: can we extend it to other tissues? The liver is great, but most diseases are not liver diseases. Neurodegenerative diseases are in the brain. Muscular dystrophies are in muscle. Cancers are everywhere. To turn siRNA into a broadly useful modality, we need to get out of the hepatocyte.

This is the current frontier of the field. It is unsolved. There are partial solutions. Let me describe where the field is.

\[Pause.\]

**CNS delivery.** Alnylam and other companies are developing siRNAs for delivery to the brain by **intrathecal injection** — directly into the cerebrospinal fluid. This is the same delivery route used by ASOs like nusinersen for SMA and milasen. Intrathecally administered, chemically modified, lipophilic siRNAs can reach neurons and glia in the brain and spinal cord. Alnylam has CNS programs in clinical trials for Huntington's disease, Alzheimer's disease, ALS, and other indications. The chemistry is different from GalNAc-siRNAs — different modification pattern, often a lipid conjugate at one end rather than GalNAc, optimized for CNS uptake rather than hepatocyte uptake. The route of administration is intrathecal, not subcutaneous, which is less convenient but acceptable for serious neurological diseases.

**Muscle delivery.** Several groups are working on siRNA conjugates that target muscle tissue, often using **antibody conjugates** that bind a muscle-specific receptor (like the transferrin receptor or specific muscle surface antigens). Avidity Biosciences and Dyne Therapeutics are two companies pursuing this aggressively, with programs in myotonic dystrophy, facioscapulohumeral dystrophy, and other muscle diseases. These are not yet approved, but several are in mid-stage clinical trials.

**Tumor delivery.** RNAi for cancer has had a long, frustrating history. The early Alnylam programs included cancer-targeted siRNAs, none of which worked at the time. The challenges are particularly hard for tumors — heterogeneous tissue, uncertain biodistribution, complex immune environment, mutational diversity. Several companies are trying again, with newer delivery platforms, but as of 2026 there is no approved siRNA cancer drug.

**Eye delivery.** The eye is a relatively privileged compartment — you can inject directly into the vitreous, and the volume needed is small, and the drug stays in the eye for a long time. Several siRNAs have been tested for age-related macular degeneration and other retinal diseases, with mixed clinical results. The field is still working on this.

\[Pause.\]

The general principle that is emerging from extra-hepatic delivery efforts is that you need a **targeting ligand specific to the tissue you want to reach**. GalNAc works for the liver because ASGPR is the right receptor — abundant, hepatocyte-specific, recycling rapidly, sugar-recognizing. For other tissues, you need to identify a comparable cell-surface receptor that is abundant, tissue-specific, and capable of internalizing a conjugate cargo into a productive endosomal compartment from which escape is possible. The receptors that have shown promise include transferrin receptor (CNS and muscle), various integrins, certain cell-surface antigens recognized by antibodies, and folate receptors (for cancer). None of them are as good as ASGPR is for the liver. The liver is, in some sense, the easiest tissue to deliver to, and we got lucky that ASGPR exists at the surface of hepatocytes in such abundance. Most other tissues do not have a comparable convenience receptor.

The development of new conjugate chemistries for extra-hepatic delivery is, in my view, the single most important open problem in siRNA drug development. If we solve it — if we can get siRNAs to deliver efficiently to neurons, to muscle, to immune cells, to tumors, with the same convenience as the GalNAc-liver story — then RNAi becomes a modality that can address the majority of human disease, not just liver-expressed targets. If we don't solve it, RNAi will remain primarily a liver-targeting modality, with niche extensions into the CNS and eye. The next ten years will tell us which way it goes.

---

## SEGMENT 16 — shRNA-AAV — sustained RNAi for in vivo gene therapy

I mentioned earlier that shRNAs are commonly delivered to cells by lentivirus. There is a closely related approach that uses **adeno-associated virus**, AAV, instead of lentivirus, and that is increasingly being explored as a therapeutic strategy.

The idea is this. AAV is a small, non-pathogenic, single-stranded DNA virus that has become the workhorse of in vivo gene therapy. AAV vectors can be engineered to carry small genetic cargoes, packaged with capsids that target specific tissues (the AAV9 serotype crosses the blood-brain barrier and reaches neurons; the AAV8 serotype is hepatotropic; the AAV2 serotype targets the retina), and delivered systemically or by direct injection into the target tissue. AAV-delivered transgenes can persist for years — possibly decades — in non-dividing cells, providing essentially permanent expression of whatever cargo you packaged.

If you package an shRNA cassette into an AAV — a short hairpin under a Pol III promoter, plus whatever other regulatory elements you need — and deliver it to the target tissue, the cells you transduce will express the shRNA constitutively. Dicer in those cells will process the shRNA into siRNA-like duplexes. RISC will load them. The target gene will be silenced, for as long as the AAV-delivered cassette persists. **AAV-shRNA is the in vivo analog of lentiviral shRNA in cell culture — sustained, integrated-style knockdown of a target gene in the tissue you delivered to.**

\[Pause.\]

There are several clinical programs using AAV-shRNA in trials right now. Huntington's disease is a major target — there are AAV-delivered shRNAs against mutant huntingtin (HTT) in clinical trials, designed to lower HTT levels in striatal neurons after intracranial injection. ALS programs targeting SOD1 are similar. There are also AAV-shRNA programs for various rare metabolic diseases and for some forms of inherited retinal dystrophy.

The advantages of AAV-shRNA are real. You get sustained knockdown from a single administration. You can target tissues that GalNAc cannot reach. You can deliver to cell types where you can engineer AAV tropism but where there is no good chemical conjugate. The disadvantages are also real. AAVs trigger immune responses against the capsid, which can limit re-dosing. The knockdown is, by design, hard to reverse — once you've delivered the cassette, you can't easily turn it off. Some early shRNA-AAV programs have had toxicity, possibly because high constitutive shRNA expression saturates the endogenous miRNA machinery and disrupts normal miRNA-mediated regulation. Designing shRNAs that knock down efficiently without overwhelming Dicer and AGO2 is a real engineering challenge.

But it is a promising approach, and it is one of the ways that RNAi is being extended into tissues where the conjugate approach has not yet worked. It is also a place where RNAi competes head-to-head with CRISPR-based approaches, since AAV-delivered CRISPR can do similar things — permanent knockout of a target gene in a specific tissue. The competition between AAV-shRNA and AAV-CRISPR for in vivo knockdown of specific genes will play out over the next decade.

---

## SEGMENT 17 — Competitive landscape — Arrowhead, Dicerna, Silence, and the rest

Alnylam is the dominant siRNA drug company by a substantial margin. They invented the GalNAc platform. They have the most approved drugs. They have the deepest clinical pipeline. But they are not the only player, and the competitive landscape is worth knowing.

**Arrowhead Pharmaceuticals**, based in Pasadena, California, is probably Alnylam's most direct competitor. Arrowhead developed their own GalNAc-siRNA chemistry — distinct from Alnylam's ESC pattern, with their own modifications and linkers, designed in part to avoid Alnylam's patents. Arrowhead has clinical programs in hepatitis B (JNJ-3989, partnered with Janssen), in cardiovascular disease (olpasiran for Lp(a), partnered with Amgen, and plozasiran for hypertriglyceridemia), and in alpha-1 antitrypsin deficiency (fazirsiran, partnered with Takeda). Arrowhead's strategy has been more about partnering specific assets with bigger pharmas than about being a fully integrated commercial company, but they have a strong scientific platform and a respectable clinical pipeline.

**Dicerna Pharmaceuticals**, which was acquired by **Novo Nordisk** in 2021 for about 3.3 billion dollars, developed a different siRNA chemistry — called **GalXC**, with a specific tetraloop hairpin architecture — also conjugated to GalNAc. Dicerna had a robust pipeline of GalNAc-siRNAs, including programs in primary hyperoxaluria (nedosiran, approved 2023), in hepatitis B, and in metabolic diseases. The Novo Nordisk acquisition was driven primarily by the diabetes and metabolic disease applications, which fit Novo's commercial focus.

**Silence Therapeutics**, based in London and Berlin, has been working on siRNAs since the early 2000s, with their own GalNAc-conjugate platform (mRNAi GOLD). They have programs in transthyretin amyloidosis, in iron overload disorders, and in cardiovascular disease.

\[Pause.\]

There are also several earlier-stage companies — **Avidity Biosciences** focused on antibody-conjugated siRNAs for muscle, **Dyne Therapeutics** with similar muscle-targeting programs, **Verve Therapeutics** with base-editing approaches that overlap conceptually but use a different mechanism — and a long list of academic spinouts working on novel delivery approaches.

The competitive dynamics are interesting. Alnylam has the broadest platform and the most approvals, but they have a lot of overlap with the other players in terms of obvious targets. There are only so many hepatocyte-expressed genes you would actually want to silence to treat a disease. Several companies have been independently pursuing similar targets — TTR, AGT for hypertension, APOC3 for triglycerides, HBV transcripts, complement factors — and the competitive races on each target have been intense. The IP landscape is thick with patents on chemistry, on conjugate structures, on specific target genes, on combinations. Litigation has been a real and ongoing feature of the industry; Alnylam and several competitors have been in patent disputes for years.

The longer-term picture, I think, is that there will be several siRNA drug companies that survive and prosper, each with their own platform variation and their own pipeline of indications, much like there are now several monoclonal antibody companies. RNAi has become a real drug category, and there is room for multiple players to develop multiple drugs. Alnylam will probably remain the leader, but the modality is now broad enough to support a competitive industry.

---

## SEGMENT 18 — Frontiers — RNAi vaccines, RNAi in agriculture, the next decade

Let me close with the frontier — what is being worked on now that might define the next decade of RNAi.

\[Pause.\]

**RNAi-based vaccines** are an interesting concept that has had some research-stage attention. The idea is to use siRNAs to silence specific immune regulatory genes — for example, to silence checkpoint inhibitor genes locally at a vaccination site — to potentiate an immune response to a co-delivered antigen. This is early-stage. Nothing is approved. But the conceptual space is being explored, particularly for cancer immunotherapy applications.

**RNAi in agriculture** is, perhaps surprisingly, actually a real category, with at least one approved product. **Calantha** is a foliar spray developed by GreenLight Biosciences (now part of Syngenta) that contains double-stranded RNA targeting an essential gene of the **Colorado potato beetle**. When the beetles eat the treated potato leaves, they ingest the dsRNA. Their gut cells take it up, process it through their RNAi machinery, silence the target gene, and the beetles die. The product was approved by the EPA in 2023 and represents the first sprayable RNAi pesticide on the market in the United States. The category is potentially transformative for agriculture — you can imagine RNAi-based pesticides that are exquisitely species-specific, targeting only the pest species and sparing beneficial insects, with rapid environmental degradation and no chemical residue concerns. The technical and regulatory challenges are real, but the conceptual potential is large.

\[Pause.\]

**Beyond gene silencing — RNAi-related RNA therapeutics.** There is a broader space of RNA-based drug modalities adjacent to siRNA, and the boundaries are increasingly fluid. We have ASOs. We have siRNAs. We have **microRNA mimics** and **anti-miRs** (oligonucleotides that block specific endogenous microRNAs) — a small clinical category. We have **mRNA therapeutics** (the COVID vaccines, plus a growing pipeline of mRNA-encoded proteins for various indications). We have **CRISPR-based therapeutics**, both ex vivo (the first approved CRISPR drug, Casgevy for sickle cell, was approved in late 2023) and in vivo. And there are blurred-boundary technologies like **CRISPR-Cas13** — a CRISPR system that targets RNA rather than DNA, conceptually similar in effect to RNAi but mechanistically completely different.

The broader RNA-drug space is, in 2026, the most active area of pharmaceutical innovation. The set of approved RNA drugs grew from zero in 2015 to many in 2026. Within that growing category, siRNA is one of the more mature subcategories, with a proven platform (GalNAc) and a track record of approvals. ASOs are similarly mature. mRNA is rapidly maturing. CRISPR is at the very early commercial stage. All of these are pieces of the same big picture: we have learned to engineer cellular RNA-handling machinery for therapeutic purposes, and the diseases that we can now address with these tools are, in aggregate, transforming.

\[Pause.\]

The specific frontier for the siRNA platform, as I have said, is extra-hepatic delivery. If conjugate chemistries can be developed that route siRNAs efficiently into neurons, muscle, immune cells, tumors, and other tissues, the platform expands enormously. Alnylam has CNS programs in clinical trials. Avidity and Dyne are working on muscle. Multiple academic and industry groups are working on other tissue targets. The next decade of RNAi will be defined, more than anything else, by how well that extra-hepatic delivery problem gets solved.

I will close with one observation. If you had told a molecular biologist in 1998, in the weeks after Fire and Mello's Nature paper came out, that within twenty-five years there would be five FDA-approved drugs based on the mechanism they had just described, that one of them would be a twice-yearly subcutaneous injection for cholesterol management, and that the company that bet on the modality would be worth billions of dollars — they would have laughed. The path from "interesting worm phenomenon" to "drug class" took twenty years and required solving problems — the interferon response, the delivery question, the chemistry of nuclease resistance — that nobody in 1998 even knew were going to be problems. But the path got walked. The drugs got made. The patients are being treated.

That is the story of how a discovery in C. elegans about double-stranded RNA became a class of medicines for the liver. It is, I think, one of the great translational stories in modern molecular biology, comparable to the development of monoclonal antibodies in the 1980s or the development of CAR-T cells in the 2010s. And it is, as I have been saying throughout this lecture, still in its early innings. The first FDA approval was in 2018. We are eight years into the commercial life of an entirely new drug modality. The next twenty years are going to be remarkable.

\[Pause.\]

Thank you for staying with me through all of this. Questions?

---

## APPENDIX — Key terms, dates, and references

**Key dates:**

- 1998 — Fire and Mello publish "Potent and specific genetic interference by double-stranded RNA in Caenorhabditis elegans," Nature, February 19. Defines RNA interference.
- 2001 — Tom Tuschl publishes "Duplexes of 21-nucleotide RNAs mediate RNA interference in cultured mammalian cells," Nature, May 24. Opens the door to mammalian RNAi.
- 2002 — Alnylam Pharmaceuticals founded in Cambridge, Massachusetts.
- 2006 — Andrew Fire and Craig Mello awarded the Nobel Prize in Physiology or Medicine for the discovery of RNAi.
- 2018 — Patisiran (Onpattro) approved by FDA, August 10. First siRNA drug approved.
- 2019 — Givosiran (Givlaari) approved by FDA, November 20. First GalNAc-siRNA drug approved.
- 2020 — Lumasiran (Oxlumo) approved by FDA, November 23.
- 2020 — Inclisiran (Leqvio) approved by EMA, December.
- 2020 — Novartis acquires The Medicines Company for 9.7 billion dollars, primarily for inclisiran.
- 2021 — Inclisiran (Leqvio) approved by FDA, December 22.
- 2021 — Novo Nordisk acquires Dicerna Pharmaceuticals for about 3.3 billion dollars.
- 2022 — Vutrisiran (Amvuttra) approved by FDA, June 13.
- 2023 — Calantha approved by EPA. First sprayable RNAi pesticide in the United States.

**Key terms:**

- **RNAi** — RNA interference. The cellular mechanism by which double-stranded RNA triggers sequence-specific silencing of matching mRNAs.
- **siRNA** — Small interfering RNA. A short (typically 21-nucleotide) double-stranded RNA that loads into the RISC complex and directs cleavage of matching mRNAs.
- **shRNA** — Short hairpin RNA. A single RNA that folds into a hairpin, processed by Dicer into an siRNA-like duplex.
- **miRNA** — MicroRNA. Endogenous short regulatory RNAs that typically pair imperfectly with target 3' UTRs and silence by translational repression and destabilization.
- **Dicer** — RNase III family enzyme that cleaves long double-stranded RNA into 21-nt siRNAs.
- **RISC** — RNA-induced silencing complex. Multi-protein complex that uses siRNAs and miRNAs to find and silence target mRNAs.
- **AGO2** — Argonaute-2. The catalytic core of RISC; cleaves target mRNAs at a specific position between positions 10 and 11 from the 5' end of the guide strand.
- **Guide strand** — The strand of the siRNA duplex retained by RISC and used to find the target mRNA.
- **Passenger strand** — The strand of the siRNA duplex ejected from RISC during loading.
- **Seed region** — Positions 2–7 or 2–8 of the guide strand; the primary determinant of target recognition.
- **GalNAc** — N-acetylgalactosamine. A sugar recognized by ASGPR.
- **ASGPR** — Asialoglycoprotein receptor. A clearance receptor on hepatocytes that binds GalNAc-bearing ligands.
- **ESC** — Enhanced Stabilization Chemistry. Alnylam's proprietary pattern of chemical modifications for GalNAc-siRNA drugs.
- **2'-O-methyl / 2'-fluoro / phosphorothioate** — Three principal chemical modifications used to stabilize siRNAs against nucleases.
- **LNP** — Lipid nanoparticle. The first-generation delivery vehicle for siRNAs (and now for mRNA vaccines).
- **AAV** — Adeno-associated virus. A small DNA virus used as a gene therapy vector; can deliver shRNA cassettes for sustained in vivo knockdown.

**FDA-approved siRNA drugs (as of 2026):**

- **Patisiran (Onpattro)** — LNP-delivered siRNA against TTR, for hereditary transthyretin amyloidosis. Alnylam. 2018.
- **Givosiran (Givlaari)** — GalNAc-siRNA against ALAS1, for acute hepatic porphyria. Alnylam. 2019.
- **Lumasiran (Oxlumo)** — GalNAc-siRNA against HAO1, for primary hyperoxaluria type 1. Alnylam. 2020.
- **Inclisiran (Leqvio)** — GalNAc-siRNA against PCSK9, for hypercholesterolemia. The Medicines Company / Novartis (originally from Alnylam). 2021 (FDA).
- **Vutrisiran (Amvuttra)** — GalNAc-siRNA against TTR, for hereditary transthyretin amyloidosis. Alnylam. 2022.
- **Nedosiran (Rivfloza)** — GalNAc-siRNA against LDHA, for primary hyperoxaluria type 1. Dicerna / Novo Nordisk. 2023.

**Suggested reading:**

- Fire A, Xu S, Montgomery MK, Kostas SA, Driver SE, Mello CC. "Potent and specific genetic interference by double-stranded RNA in Caenorhabditis elegans." Nature 391:806–811 (1998).
- Elbashir SM, Harborth J, Lendeckel W, Yalcin A, Weber K, Tuschl T. "Duplexes of 21-nucleotide RNAs mediate RNA interference in cultured mammalian cells." Nature 411:494–498 (2001).
- Setten RL, Rossi JJ, Han SP. "The current state and future directions of RNAi-based therapeutics." Nature Reviews Drug Discovery 18:421–446 (2019). — A thorough review of the field at the moment of its commercial emergence.
- Adams D et al. "Patisiran, an RNAi Therapeutic, for Hereditary Transthyretin Amyloidosis." NEJM 379:11–21 (2018). — The APOLLO trial publication.
- Ray KK et al. "Two Phase 3 Trials of Inclisiran in Patients with Elevated LDL Cholesterol." NEJM 382:1507–1519 (2020). — The ORION trials.
- Companion lecture in this series: **Milasen** (antisense oligonucleotides, ASO mechanism, splice-switching, N-of-1 medicine). The siRNA lecture above is best understood after the milasen lecture.
- Companion lecture in this series: **Oligonucleotide Synthesis** (phosphoramidite chemistry, solid-phase synthesis). The siRNA drugs are made on the same kind of synthesizer with modified phosphoramidite monomers.

---
