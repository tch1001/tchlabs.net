# Liquid Biopsy: Reading the Body From a Tablespoon of Blood

**A 2-hour undergraduate biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, landing comfortably inside a two-hour slot. (Read faster, ~140 wpm, and you'll have generous room for questions.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. This lecture assumes the listener has done the PCR, qPCR/digital PCR, and cancer lectures in this series — when we talk about ddPCR, NGS read depth, or hallmarks of cancer, we'll move briskly. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The central idea: read the body from a blood draw

Alright, let's get started. Good morning, everyone. For the next two hours we are going to talk about liquid biopsy. And I want you to hold a single image in your head for the entire lecture, because everything we cover hangs off this one frame.

Your body, right now, is leaking. Not in a dramatic way, not in a way you can see — but at the molecular level, every tissue in your body is constantly shedding little fragments of itself into your bloodstream. Cells die. They die by the billions every day, as part of normal turnover. When a cell dies, its DNA gets chopped up by enzymes into small fragments, and a fraction of those fragments leak out into the blood. They float around in your plasma for an hour or two, get filtered out by the liver and kidneys, and are replaced by fresh fragments from the cells dying right now.

So at any given moment, your plasma contains a little soup of DNA fragments. We call this **cell-free DNA**, or cfDNA. It's not inside any cell. It's just floating, free, in the liquid part of your blood. And here is the astonishing thing: if you collect that DNA — about a tablespoon of blood gets you enough — and you read it, you can figure out _which cells in your body are dying right now_. You can tell that a pregnant woman is carrying a fetus, because some of the cfDNA in her plasma is from the placenta. You can tell that a transplant recipient is rejecting their new kidney, because cfDNA from the donor organ is rising. You can tell that a cancer survivor has microscopic disease coming back, because cfDNA carrying tumor-specific mutations is starting to reappear. You can tell, in some cases, that a person who feels perfectly healthy has a tumor somewhere in their body that hasn't caused any symptoms yet — and you can even predict which organ it's in.

All of that, from a blood draw. No needle in the tumor. No biopsy of the placenta. No transplant biopsy. Just a vial of blood, a centrifuge, and a sequencer.

That is liquid biopsy. **You read the body's status from a tablespoon of blood instead of a needle in the tumor.**

\[Pause.\]

Now let me tell you why this matters, and why the field has exploded in the last fifteen years.

A traditional biopsy — what we now call a tissue biopsy to distinguish it — involves taking an actual physical sample of tissue. For a lung tumor, that means a needle through the chest wall, into the lung, into the tumor, to grab a few millimeters of tissue. For a breast tumor, a core needle through the breast. For a brain tumor, surgery. These procedures are uncomfortable at best and dangerous at worst. They can cause bleeding, infection, pneumothorax, occasionally even spread cancer cells along the needle track. They sample one spot in one tumor at one point in time — so if the tumor is heterogeneous, or if there are multiple tumor sites, you only see a slice. And you can't easily repeat them. You don't biopsy a lung tumor every two weeks to see how chemotherapy is working. The patient wouldn't tolerate it.

A liquid biopsy has none of those problems. A blood draw takes thirty seconds. It costs almost nothing in the materials. It samples — in a sense — every tissue in the body simultaneously, because every tissue is shedding into the same blood. And you can repeat it as often as you want. Weekly. Daily, if you wanted. You can watch a tumor's molecular profile evolve in real time as treatment pressures select for resistant clones.

That is a fundamentally different kind of medicine. The old way — diagnose once, biopsy once, treat, hope — is being replaced by a continuous-monitoring paradigm where the blood is the readout and the molecular state of the body is updated as often as you care to check.

If you walk out of here in two hours and you can do three things — one, explain what cell-free DNA is, where it comes from in healthy people and pregnancy and cancer, and why those sources can be distinguished; two, describe the major clinical applications — NIPT, ctDNA monitoring, MRD detection, multi-cancer early detection, transplant rejection, infectious disease — and roughly which assay does which; three, look at a headline about a "blood test that detects cancer" and have an honest sense of what's real, what's marketed, and what's still aspirational — then we've succeeded. Everything else is detail hung onto that scaffold.

Let's build the scaffold.

---

## SEGMENT 2 — cfDNA biology: 150-base-pair fragments and a two-hour half-life

Before we get to applications, we need to understand the molecule itself. What exactly is cell-free DNA? Where does it come from, physically? How long does it stay around? How much of it is there?

Let me start with the size, because the size turns out to be one of the most beautiful and informative features of cfDNA.

If you take a blood sample, spin it down, collect the plasma, extract the DNA, and look at the size distribution on a high-resolution instrument — a Bioanalyzer, say, or a Tapestation — you do not see a smear of random sizes. You see a sharp peak at about **166 base pairs**, with smaller peaks at integer multiples — 332, 498, and so on, fading rapidly. The DNA is not in random-sized chunks. It is in a very specific, quantized fragmentation pattern.

Why? Because of nucleosomes.

You'll remember from molecular biology that DNA in eukaryotic cells is not naked. It's wrapped around histone proteins. The basic unit is the **nucleosome** — eight histone proteins forming a spool, with about 147 base pairs of DNA wrapped around the spool roughly 1.7 times. Plus a few base pairs of linker DNA between nucleosomes. Total footprint per nucleosome, about 150 to 170 base pairs.

When a cell dies, particularly by apoptosis, an enzyme called **caspase-activated DNase** — CAD — is released. CAD chews up the cell's DNA. But it can't chew through nucleosomes, because the histones protect the DNA they're wrapped around. So CAD attacks the **linker regions** between nucleosomes, and what's left behind is a population of DNA fragments where each fragment is exactly the size of the DNA wrapped around one nucleosome. 166 base pairs, give or take.

That is the **digest signature** of cell death. **DNase chews around nucleosomes, and you can tell the cell of origin from the fragment-size pattern.** This is going to become enormously important when we get to DELFI in Segment 14 — the discovery that cancer changes the nucleosome positioning, and therefore the fragment-size distribution, in ways you can detect even without ever sequencing a mutation. The size of the fragments is itself a signal.

\[Pause.\]

How much cfDNA is there in healthy plasma? Roughly **10 nanograms per milliliter**. That's a tiny amount. A tube of blood — say 10 milliliters — gives you maybe 4 to 5 milliliters of plasma after spinning, which means you're working with 40 to 50 nanograms of total cfDNA. Compare that to a saliva sample or a buccal swab, which can easily give you tens of thousands of nanograms. cfDNA is precious. You don't waste it.

In disease states, cfDNA goes up. In advanced cancer, plasma cfDNA can rise to 100 nanograms per milliliter or more. In sepsis, in severe trauma, in massive tissue injury — anywhere there's a lot of cell death — cfDNA spikes. So a simple measure of total cfDNA concentration is, in itself, a crude marker of "is there a lot of cell death happening somewhere?" It's nonspecific, but it's not zero.

And then there's the half-life. Once a cfDNA fragment enters the blood, how long does it stay around? The answer is: not long. **About one to two hours.** The fragments get cleared by the liver, the spleen, the kidneys, and by nucleases in the blood itself. Within about four hours of a tissue injury, the cfDNA from that injury is gone, replaced by the next wave.

This short half-life is both a feature and a bug. The bug is obvious: you have to catch the signal while it's there. If a tumor briefly stops shedding, you may not see it. If you mishandle the sample — let it sit at room temperature too long, let white blood cells lyse and dump their DNA into the plasma — you contaminate the signal. The feature is more subtle and very powerful: because the cfDNA pool refreshes every couple of hours, what you measure today is _today's_ status. It's not stale signal from a week ago. It's a near-real-time snapshot of which cells in your body are dying right now. That makes cfDNA an ideal molecule for monitoring — for treatment response, for relapse, for transplant rejection. You're not measuring history. You're measuring the present.

So that's the biology. **150-ish-base-pair nucleosomal fragments, about 10 nanograms per milliliter in healthy plasma, half-life of one to two hours, nonspecific increase in any condition with lots of cell death.** Hold that.

---

## SEGMENT 3 — Where does cfDNA come from? Mostly your blood cells

So whose DNA is it, exactly? Whose cells are dying and shedding into the plasma?

The answer surprises most people the first time they hear it. In a healthy adult, the overwhelming majority of cfDNA — somewhere between 70 and 90 percent — comes from **hematopoietic cells**. Blood cells. Specifically, dying white blood cells and the precursor cells in the bone marrow.

Why? Because the hematopoietic system has the highest cell turnover in your body. You make roughly 100 billion blood cells every single day, and roughly the same number die every day. Neutrophils, the most common type of white blood cell, have a circulating half-life of less than a day. They're born, they patrol for a few hours, they die. Multiply 100 billion deaths a day by however much DNA each cell contains, and even a small leakage fraction adds up to dominating the cfDNA pool.

A small contribution — maybe 10 percent in total — comes from various solid tissues: liver, lung, intestinal lining, skin. These tissues have lower turnover than blood, but they're large, so they still contribute. You can actually figure out the tissue of origin of cfDNA by looking at **methylation patterns**, which we'll come back to in the Galleri segment — because different tissues have characteristic methylation signatures that survive in the cfDNA fragments.

So the baseline is: cfDNA is mostly blood. Anything else — fetal DNA in pregnancy, tumor DNA in cancer, donor DNA in transplant, microbial DNA in infection — is a **minority signal sitting on top of a large hematopoietic background**. And that minority signal can be very small. Fetal DNA is roughly 10 percent of total cfDNA in maternal plasma. ctDNA in early-stage cancer can be 0.01 percent or less of total cfDNA. Donor DNA in a stable transplant can be under 1 percent.

This is the central technical challenge of liquid biopsy. **You are looking for a needle in a haystack, and the haystack is yourself.** Every method we're going to discuss — every assay, every protocol, every machine — is, at heart, a different strategy for pulling a tiny signal out of an enormous background of normal human DNA.

\[Pause.\]

Let me also mention the mechanisms of cfDNA release, because there are a few and they matter for interpretation.

The dominant mechanism, as I said, is **apoptosis** — programmed cell death. Apoptotic cells get cleanly chopped by caspase-activated DNase into the nice 166-bp fragments we just talked about. Apoptosis is the normal way cells die during turnover, and it produces the clean nucleosomal ladder.

A second mechanism is **necrosis** — messy, unprogrammed cell death from injury, infection, ischemia. Necrotic cell death produces larger, more variable cfDNA fragments, because the DNase activity is less controlled. If you see a smear of high-molecular-weight cfDNA, you're seeing necrosis somewhere.

A third mechanism, more recently appreciated, is **NETosis** — a specific form of neutrophil death in which neutrophils literally throw their own DNA out as a sticky web to trap bacteria. NETs — neutrophil extracellular traps — release a lot of DNA, and that DNA ends up in cfDNA. In sepsis, in autoimmune disease, NETosis can dominate the cfDNA pool.

And there's a small contribution from **active secretion** — cells appear to package some DNA into exosomes or other vesicles and release it intentionally. This is a smaller and less well-understood source.

For our purposes — clinical liquid biopsy — apoptosis is the dominant relevant source, and the 166-bp nucleosomal fragmentation is what we'll be working with for the rest of the lecture. Keep necrosis and NETosis in mind as confounders: they can elevate cfDNA in ways that don't reflect the disease you're looking for.

---

## SEGMENT 4 — The 1997 Dennis Lo discovery

Now we come to a moment in medical history. 1997. A Hong Kong physician-scientist named Dennis Lo publishes a paper in The Lancet that, in retrospect, opened the door to everything we'll talk about for the rest of this lecture.

The question Lo asked was simple and old. People had known for decades that a pregnant woman, in some sense, carries her fetus's biology — fetal cells had been found in maternal blood as far back as the 1960s. But the cells were extremely rare, maybe one in a million, and isolating them reliably for prenatal diagnosis had defeated everyone who tried.

Lo had an insight. What if you forget the cells? What if, instead of trying to fish out the rare intact fetal cells, you look at the cell-free DNA in maternal plasma? Maybe the placenta — which is genetically fetal tissue — is shedding cfDNA into the mother's bloodstream all the time. Maybe that fetal cfDNA is sitting right there, easily accessible, hiding in plain sight in millions of maternal blood samples drawn every day.

He tested it. He took blood from pregnant women carrying male fetuses, extracted plasma cfDNA, and ran PCR for Y-chromosome sequences — sequences that could only come from the male fetus, because the mother had no Y chromosome. And he found Y-chromosome DNA in the maternal plasma. The fetal signal was there. He could read it.

Better yet, he could quantify it. Roughly **10 percent of total cfDNA in maternal plasma comes from the placenta** — and therefore from the fetus. (The exact number rises slightly through pregnancy and varies by individual, but 10 percent is a good rule of thumb.) That is a much higher fraction than anyone had expected. It is enormous compared to the fraction of intact fetal cells in maternal blood. Suddenly, prenatal genetic testing did not require an amniocentesis.

\[Pause.\]

I want you to sit with what this means, because it became the template for the entire field.

**The 1997 Dennis Lo discovery — about 10 percent of maternal cfDNA comes from the placenta; the basis of every NIPT done today.** Lo had shown that an organ — the placenta — was constantly leaking its DNA into the bloodstream of a connected host. By reading that DNA, you could learn about the organ without ever touching it. That same insight, applied to a tumor, becomes ctDNA monitoring. Applied to a transplanted kidney, becomes AlloSure. Applied to bacterial cells circulating in sepsis, becomes Karius. The fetus-in-the-mother turned out to be the easiest case — the highest signal fraction, the most accessible application — but it was the conceptual prototype for everything else.

Lo's discovery sat for about a decade before sequencing technology caught up. Sanger PCR could detect the presence of a Y chromosome, but to actually count chromosomes — to ask "does this fetus have one extra copy of chromosome 21?" — you needed a way to count millions of DNA fragments and notice that the fraction coming from chromosome 21 was slightly higher than expected. That capability arrived around 2007–2008 with massively parallel short-read sequencing. By 2011, the first commercial NIPT tests had launched. By 2020, NIPT was the standard of care for prenatal aneuploidy screening across most of the developed world.

That is the trajectory: scientific discovery in 1997, enabling technology in 2008, commercial product in 2011, standard of care by 2020. About two decades. Hold that timeline in mind when we talk about cancer applications, which are running about ten to fifteen years behind NIPT on the same curve.

---

## SEGMENT 5 — NIPT in practice: counting chromosome 21

Let's make NIPT concrete. How does the test actually work? What does the lab do when your blood arrives?

The standard NIPT workflow is, at a high level, almost embarrassingly simple to describe. The complexity is all in the analysis.

Step one: blood draw. Usually around 10 weeks of pregnancy, sometimes earlier. Two tubes of blood, drawn into special preservative tubes — usually Streck tubes — that stabilize the cfDNA and prevent white blood cells from lysing and contaminating the sample with maternal genomic DNA. Preanalytics matter; we'll come back to this in Segment 17.

Step two: spin. Centrifuge the blood to separate plasma from cells. Plasma goes forward. Cells are discarded.

Step three: extract cfDNA. Use a kit — silica column, magnetic beads, whatever — to pull cfDNA out of the plasma. You get maybe 5 to 30 nanograms total, including the 10 percent or so that's fetal.

Step four: library prep and sequencing. Build a sequencing library from the cfDNA — add adapters, amplify gently — and run it on an Illumina sequencer. The clever bit: you don't need deep coverage. You don't even need to identify specific mutations. You just need to count fragments and figure out which chromosome each fragment came from. A few million reads, mapped to the human genome, is enough. Total cost per sample: well under $100 in 2026.

Step five: count. For each chromosome, count what fraction of your reads mapped there. In a normal sample, the fraction of reads mapping to chromosome 21 should be a particular number — let's call it _p_₂₁ — that you've calibrated from reference samples. In a pregnancy where the fetus has trisomy 21 — three copies of chromosome 21 instead of two — and where 10 percent of the cfDNA is fetal, the fraction of reads from chromosome 21 will be slightly elevated. Specifically, you'll see roughly _p_₂₁ × (1 + 0.05) — about a 5 percent relative increase, because the fetal contribution to chromosome 21 reads is 50 percent higher than normal (three copies instead of two) and the fetus contributes 10 percent of total reads.

A 5 percent shift in the read fraction of one chromosome sounds small. It is small. But if you have a few million reads and you've calibrated the assay well, that shift is enormously statistically significant. The standard deviation of the read fraction is tiny when you have that many reads, and a 5 percent shift is many standard deviations away from normal. You can call trisomy 21 with sensitivity above 99 percent and a false positive rate below 0.1 percent.

\[Pause.\]

NIPT has become **the original mass-market liquid biopsy — trisomy 21 screening from a blood draw, replaced amniocentesis for most patients.** Before NIPT, the standard prenatal screening was a combination of maternal serum markers and ultrasound, which would identify high-risk pregnancies that were then offered amniocentesis — a needle through the abdomen, into the amniotic sac, to collect fetal cells for karyotyping. Amniocentesis is invasive, carries a small but real risk of miscarriage, and is uncomfortable. NIPT replaced it for the vast majority of patients. Today, most pregnant women in the developed world get an NIPT instead of, or before, an amnio. Amnio is now reserved for confirmation of a positive NIPT, or for cases where you need to test things NIPT can't easily address.

By 2026, NIPT accounts for roughly **10 percent of all clinical liquid biopsy testing** by volume — it's the largest single application of cfDNA technology. Hundreds of millions of tests have been run worldwide. It also paid for, in a real sense, the development of the sequencing infrastructure and laboratory protocols that the rest of the field — cancer cfDNA, transplant cfDNA — now uses. Without NIPT, the economic case for industrial-scale cfDNA processing would have been much weaker.

NIPT also tests for trisomy 18 and trisomy 13 (less common, more severe), sex chromosome aneuploidies, and — depending on the panel — some larger structural variants. We'll see in Segment 14 that the panel keeps expanding, toward single-gene disorders and eventually whole-genome fetal sequencing from the same blood draw.

---

## SEGMENT 6 — ctDNA: the cancer signal in the blood

Now we pivot from pregnancy to cancer. Same biology, different organ, different stakes.

Tumor cells, like all cells, die. In fact, they die at high rates — tumor microenvironments are hypoxic, nutrient-poor, often inflammatory, and the tumor's own rapid growth outruns its blood supply, creating constant cell death even as the population expands. When tumor cells die, they shed cfDNA into the bloodstream just like any other dying cell. We call this fraction of cfDNA **circulating tumor DNA, or ctDNA**.

Now here is the critical thing that distinguishes ctDNA from the surrounding cfDNA: ctDNA carries **tumor-specific mutations**. A breast tumor that has a PIK3CA mutation will shed DNA fragments carrying that PIK3CA mutation. A lung adenocarcinoma with an EGFR T790M mutation will shed fragments carrying the T790M variant. These mutations are not in any of your normal cells. They originated in the tumor lineage and they are biomarkers of the tumor.

So even though ctDNA is a tiny fraction of total cfDNA — often much less than 1 percent — it is **molecularly distinguishable** from the background. You don't need to enrich for it physically. You just need to look for the mutation. If you sequence the cfDNA deeply enough to detect the mutant allele, you can quantify ctDNA without ever isolating it.

That is the cancer signal. **Tumor cells shed mutant DNA into blood; detect the mutation in plasma, track tumor burden in real time.**

\[Pause.\]

The landmark paper that quantified all this in a systematic way was published in 2008 by Bert Vogelstein's group at Hopkins. Vogelstein and his collaborators took blood samples from patients with various cancers, used PCR-based methods to look for known tumor mutations in the cfDNA, and showed two things: first, that ctDNA was detectable in the great majority of patients with metastatic disease; second, that ctDNA levels scaled with tumor burden. Patients with more tumor had more ctDNA in their blood. Patients responding to chemotherapy saw their ctDNA drop. Patients progressing saw their ctDNA rise.

That paper, and a series of follow-ups over the next five years, established ctDNA as a real and useful biomarker. By 2013, there were commercial liquid biopsy assays. By 2016, the FDA approved the first ctDNA companion diagnostic — the cobas EGFR Mutation Test v2, which detects EGFR mutations in plasma cfDNA from lung cancer patients to guide treatment with EGFR inhibitors. By 2020, ctDNA testing was standard practice in non-small-cell lung cancer, colorectal cancer, breast cancer, and increasingly in other tumor types.

The applications fall into roughly three categories, and I want to name them now because we'll spend most of the rest of the lecture inside them.

**One: genotyping.** Use ctDNA to figure out what mutations the tumor carries, so you can match the patient to a targeted therapy. This is what the cobas test does for EGFR. It's useful when you can't easily biopsy the tumor — maybe it's in the lungs in a fragile patient, maybe there are multiple lesions and you want a "composite" genotype, maybe you've already biopsied once and the tumor has evolved.

**Two: monitoring.** Use ctDNA to track tumor burden over time. Is the patient responding? Is the disease coming back? Has a resistance mutation emerged? These questions used to require serial imaging — CT scans every few months — but ctDNA can answer them in days, with much higher temporal resolution and at lower cost.

**Three: detection.** Use ctDNA to find cancer that hasn't been diagnosed yet — either as minimal residual disease after curative-intent surgery, or as screening in apparently healthy people. This is the hardest case, because the tumor fraction in the cfDNA is lowest, but it's where the field is heading hardest.

We'll do detection methods next, then walk through each application.

---

## SEGMENT 7 — Detection methods: ddPCR for hotspots, NGS for the rest

So you've drawn a tube of blood, you've extracted the cfDNA, and you have maybe 30 nanograms of DNA in your hand — perhaps a few percent of which is from the tumor, perhaps much less. How do you actually detect the ctDNA?

The answer depends on what you know in advance. And the field has split, roughly, into two technological camps.

**Camp one: digital PCR.** If you already know what mutation you're looking for — say, the patient's lung tumor was biopsied and shown to carry an EGFR L858R mutation, and you want to monitor that specific mutation in plasma over time — then digital PCR (ddPCR, droplet digital PCR) is the right tool. You design primers and probes that distinguish wild-type EGFR from L858R-mutant EGFR, you partition your cfDNA into 20,000 tiny droplets, you run PCR in each droplet, and you count the number of droplets that light up for mutant versus wild-type. ddPCR can detect mutant alleles down to roughly 0.01 to 0.1 percent allele fraction — meaning you can find one mutant DNA molecule among 1,000 wild-type molecules. It's fast, cheap, quantitative, and beautiful for tracking known mutations.

The limitation is in the name: you have to know what you're looking for. ddPCR is a targeted assay. Each assay tests one or a small handful of mutations. If the tumor evolves a new resistance mutation in a place you weren't watching, ddPCR will miss it entirely.

**Camp two: next-generation sequencing.** If you don't know what to look for — say, you've never biopsied the tumor, or the tumor might have multiple mutations across many genes, or you want to detect novel resistance mechanisms — you need NGS. The challenge is depth. To reliably detect a mutation at 0.1 percent allele fraction with NGS, you need to sequence each base in the region of interest at least a few thousand times, and ideally tens of thousands of times. That's deep sequencing, and it's expensive in raw read counts.

Modern targeted-NGS cfDNA panels — Guardant360, FoundationOne Liquid CDx, and others — sequence a panel of a few hundred cancer-relevant genes at very deep coverage, often 5,000x to 50,000x raw, with **unique molecular identifiers** (UMIs) to distinguish real low-frequency mutations from sequencing errors. The UMI trick is critical: you tag every original cfDNA molecule with a unique random barcode before amplification. If you see a putative mutation that appears in multiple PCR copies of the same original molecule (same UMI), it's real. If you see it in only one PCR copy among many copies of that molecule, it's a sequencing or PCR error. UMIs effectively let you correct out the noise of amplification and sequencing, which is what makes detection down to 0.1 percent allele fraction possible from a 30-nanogram input.

For the deepest detection — minimal residual disease, which we'll get to in Segment 9 — even targeted panels aren't enough. The state of the art is **tumor-informed assays**, where you've previously sequenced the tumor itself and designed a personalized panel that watches for the specific mutations that patient's tumor carries. We'll discuss those next.

\[Pause.\]

For now, hold the framework. **ddPCR for known hotspots, NGS for de novo discovery.** Both have their place. Both are getting cheaper. And the boundary between them is blurring as multiplexed digital PCR and shallower-but-broader NGS converge.

---

## SEGMENT 8 — Tumor-informed vs tumor-uninformed assays

This brings us to one of the most important conceptual splits in modern liquid biopsy, especially for the application we're about to discuss — minimal residual disease detection. The split is between **tumor-informed** and **tumor-uninformed** assays.

A **tumor-uninformed assay** does not require any prior knowledge of the patient's tumor. You draw blood, you sequence a fixed panel of cancer-relevant genes, and you look for any cancer-associated mutation. Guardant360, FoundationOne Liquid CDx — these are tumor-uninformed. They use the same gene panel for every patient. The advantage is convenience: you don't need a tissue sample. The disadvantage is sensitivity. Because you're looking at a fixed panel of well-known cancer mutations, and you're looking at modest depth across many genes, your sensitivity at very low ctDNA fractions is limited. Tumor-uninformed assays are great for genotyping advanced cancers and reasonable for monitoring high-burden disease. They struggle with MRD.

A **tumor-informed assay** flips the script. First, you sequence the patient's actual tumor — typically by exome or whole-genome sequencing of a tissue biopsy. You identify the specific mutations that patient's tumor carries — usually 20 to 50 mutations chosen for being clonal, well-distributed across the genome, and easy to assay. Then you build a **personalized PCR panel** for that patient, with assays for those specific mutations. Then you sequence the patient's plasma cfDNA using only that personalized panel.

Because you know exactly what mutations to look for, and because you're focusing all your sequencing depth on those few targets, you can achieve enormous depth per target — tens or hundreds of thousands of reads per locus — and detect ctDNA at parts-per-million allele frequencies. The most established commercial tumor-informed MRD assay is **Signatera**, from Natera. **Adaptive Biotechnologies' clonoSEQ** does the analogous trick for blood cancers, tracking patient-specific B-cell or T-cell receptor rearrangements down to one cell in a million. There are others — RaDaR from NeoGenomics, Inivata's RaDaR — but Signatera is the dominant brand in solid tumor MRD.

\[Pause.\]

The trade-off is straightforward. Tumor-informed is more sensitive but requires tumor tissue and bespoke panel design. Tumor-uninformed is more convenient but less sensitive. For applications where you have tissue — postoperative monitoring of a resected cancer, for example — tumor-informed wins. For applications where you don't — pre-treatment genotyping of an inaccessible tumor, or screening of apparently healthy people — tumor-uninformed (or methylation-based, which we'll get to) is the only option.

The field is converging on a clinical pattern that goes something like this: at initial diagnosis, you tissue-biopsy the tumor and sequence it. From that, you both pick a targeted therapy and design a personalized MRD panel. Post-treatment, you use the personalized panel to monitor for residual disease and recurrence. If recurrence is detected, you may re-sequence the new disease — by tissue biopsy if accessible, or by deep cfDNA — to look for new mutations driving resistance. The cycle continues.

That is the modern cancer-care workflow that liquid biopsy enables. It would have been science fiction in 2010.

---

## SEGMENT 9 — Minimal residual disease: the post-surgery early warning

Now we get to what I think is the single most exciting clinical application of ctDNA in 2026: **minimal residual disease detection**, or MRD.

Here is the clinical problem. A patient is diagnosed with, say, stage III colon cancer. They have surgery. The surgeon removes the tumor and the involved lymph nodes. The pathologist looks at the specimen and says "we got it all — the margins are clean." The patient goes home. Now what?

Some of those patients are cured by surgery alone. The surgeon really did get all the cancer. They will never relapse. They don't need any further treatment.

Other patients have microscopic disease left behind — a few cells in the bloodstream that have already seeded a distant site, or a small cluster of cells the surgeon couldn't see. These patients _will_ relapse, sometimes within months, sometimes within years. They benefit enormously from adjuvant chemotherapy — chemo given after surgery to mop up whatever's left.

The problem is: we can't tell the two groups apart. So historically, oncologists made educated guesses based on staging, lymph node status, tumor grade, and gave adjuvant chemo to a wide population that probably included the cure-now-no-chemo-needed group and the will-recur-needs-chemo group all mixed together. The result was that many patients got chemotherapy they didn't need — toxic, expensive, occasionally life-threatening — and some patients who actually needed it got it but received only modest benefit because by the time the tumor is detectable on a CT scan, it's often already too advanced for chemo to cure.

\[Pause.\]

MRD by ctDNA is the solution. Six to eight weeks after surgery, you draw blood. You run a tumor-informed cfDNA assay — Signatera, or an equivalent — that's looking for the specific mutations from that patient's resected tumor. If the assay is positive — if you detect ctDNA in the plasma — that patient has microscopic residual disease. They will almost certainly relapse without further treatment. They _should_ get adjuvant chemotherapy, and they should get it now, when the tumor burden is at its lowest and chemotherapy has the best chance of curing rather than just delaying.

If the assay is negative — and you can confirm with serial testing over a few months to be sure — that patient is, with high probability, cured by surgery alone. They can safely skip adjuvant chemotherapy. They will be spared months of toxic treatment they didn't need.

The data on this is now compelling. In colon cancer, multiple trials have shown that **ctDNA-positive post-surgical patients have a recurrence rate above 80 percent within two years; ctDNA-negative patients have a recurrence rate below 10 percent.** That is a massive separation. It is unprecedented in colon cancer staging. And the same pattern has been shown in bladder cancer, breast cancer, lung cancer, pancreas — basically every solid tumor where the trial has been run.

**MRD as the post-surgery early warning — patients with positive ctDNA after surgery relapse months before imaging shows anything; you can intervene earlier.** And not just "see the relapse coming earlier" — though that's already valuable. The bigger prize is being able to **escalate or de-escalate adjuvant therapy** based on MRD status. The DYNAMIC trial in colon cancer, published in 2022, showed that you can safely _withhold_ adjuvant chemotherapy from MRD-negative patients without compromising outcomes — sparing those patients toxicity. The IMvigor011 trial in bladder cancer showed that you can _add_ adjuvant immunotherapy specifically for MRD-positive patients with benefit. Trials in breast, lung, pancreas, gastric are all running on the same principle: stratify by MRD, treat by MRD.

By 2026, MRD testing is becoming standard of care in colorectal cancer, transitioning rapidly in lung, bladder, breast. It is fundamentally changing how adjuvant therapy is prescribed. And it is doing so with a blood test.

\[BREAK\]

\[End of first hour. Take a 10-15 minute break here. When you come back, we'll move from established applications — NIPT, ctDNA monitoring, MRD — into the frontier: multi-cancer early detection, fragmentomics, transplant rejection, infectious disease, and what the next decade looks like.\]

---

## SEGMENT 10 — Galleri and multi-cancer early detection

Welcome back. We left off with MRD — the post-surgery early warning that's reshaping how adjuvant therapy is given. Now let's turn to what is, in some ways, an even bigger ambition: using cfDNA to find cancer in apparently healthy people, before symptoms appear, before any single-cancer screening test would catch it.

This is **multi-cancer early detection**, or MCED. The flagship product in this space is **Galleri**, made by GRAIL — a company founded out of Illumina in 2016 specifically to chase this application.

The ambition is staggering. Galleri promises, from a single blood draw, to detect signal for **more than 50 cancer types** — many of which have no established screening test at all — and, when the signal is positive, to predict the **tissue of origin** with high accuracy, so the clinician knows where to look. Pancreatic cancer, ovarian cancer, esophageal cancer, liver, kidney, stomach — these have historically been diagnosed late because there's no good screening modality. If you could catch them at stage I or II from a routine blood test, the survival improvements would be enormous.

How does Galleri work? It does not look for mutations. Mutations are the wrong tool for this job, because at very low tumor burdens — the kind you'd see in early-stage occult cancer — the mutant allele fraction in plasma is below the detection limit of even the deepest sequencing. There's just not enough ctDNA to find a mutation reliably.

Instead, Galleri looks at **methylation patterns**. Every tissue in your body has a characteristic DNA methylation signature — a pattern of which CpG sites are methylated and which aren't, that's stable for that cell type. Cancer cells acquire characteristic methylation _changes_ — global hypomethylation, plus hypermethylation at specific promoter regions — that are recognizable as "this DNA came from a cancer, not a healthy cell." And, crucially, the methylation pattern still _retains_ residual signature of the original tissue type. So a methylation pattern in plasma cfDNA that shows cancer-like changes overlaid on a colorectal-like baseline tells you: there is a cancer signal, and it's probably colorectal.

\[Pause.\]

The Galleri workflow goes like this. Draw blood, extract cfDNA, perform **targeted bisulfite sequencing** (or one of the related chemistries that converts methylation status into sequence differences) across about a million informative methylation sites genome-wide. Run the resulting methylation patterns through a machine-learning classifier trained on tens of thousands of cancer and non-cancer samples. The classifier outputs two things: a binary cancer-signal-detected versus not-detected call, and — when positive — a top-ranked tissue of origin prediction.

The performance numbers, from GRAIL's pivotal CCGA-3 study, are roughly: **specificity above 99 percent** (false positive rate under 1 percent), **sensitivity around 50 percent across all stages and cancer types pooled**, with sensitivity climbing to about 75 percent for stage II and above and dropping to about 17 percent for stage I. **Tissue of origin prediction accuracy is around 90 percent** when the cancer signal is detected.

Those numbers need some interpretation. Fifty percent overall sensitivity sounds low — and it is, by single-cancer screening standards (mammography is ~85 percent, colonoscopy is ~95 percent for the cancers it can reach). But Galleri is hunting across 50+ cancer types, including many that have no other screening test, so the comparison isn't apples to apples. What Galleri offers that no other test does is **coverage** — even with modest sensitivity per cancer, it can detect cancers that would otherwise be invisible until symptomatic.

**Galleri as the multi-cancer screen — methylation patterns in cfDNA detect 50+ cancer types and predict tissue of origin; one blood draw, half the cancers in the world.**

The UK NHS is currently running the **NHS-Galleri trial**, a 140,000-person randomized study to see whether Galleri screening actually reduces late-stage cancer diagnosis and improves outcomes at population scale. Results are expected over the next few years. The outcome of that trial will determine whether MCED becomes a routine screening modality or remains a high-end add-on. We'll come back to this in Segment 18 when we talk about the frontier.

For now, the takeaway: Galleri exists, it works at meaningful sensitivity, it's commercially available in the US as a laboratory-developed test, and it represents a fundamentally new category of cancer screening — pan-cancer, methylation-based, ML-driven, from a blood draw.

---

## SEGMENT 11 — The FDA approval landscape for cfDNA tests

Let's talk regulation, because the regulatory pathway is doing a lot of work in determining which liquid biopsy assays are clinically usable and which are still in research.

In the US, cfDNA-based assays fall into several regulatory buckets, and the bucket matters.

**Bucket one: FDA-approved companion diagnostics.** These are tests that the FDA has formally approved as required for prescribing a specific drug. The first cfDNA companion diagnostic was the **cobas EGFR Mutation Test v2**, approved in 2016 for detecting EGFR mutations in plasma cfDNA to guide treatment with the EGFR inhibitor erlotinib in non-small-cell lung cancer. Since then, the list has grown: Guardant360 CDx, FoundationOne Liquid CDx, and others have FDA approval for various drug-mutation pairings across NSCLC, breast cancer, prostate cancer, colorectal cancer. By 2026, there are dozens of FDA-approved companion diagnostic indications for plasma cfDNA. This is the cleanest, most regulated end of the field.

**Bucket two: FDA-approved screening tests.** This is much rarer. In 2024, the FDA approved Guardant's **Shield** test as a primary screening option for colorectal cancer in average-risk adults — the first FDA-approved blood test for cancer screening. Shield uses a combination of mutation, methylation, and fragmentation features to detect colorectal cancer signal in plasma cfDNA. It's not as sensitive as colonoscopy, but it's a screening alternative for patients who refuse colonoscopy. The approval was a landmark — it established a precedent that cfDNA assays can clear the screening bar, not just the companion-diagnostic bar.

**Bucket three: Laboratory-developed tests (LDTs).** Many of the most clinically prominent cfDNA assays — including Signatera for MRD, AlloSure for transplant rejection, Galleri for MCED, Karius for infectious disease — are LDTs, not FDA-approved devices. They're regulated under the older CLIA framework, which governs the labs that perform the tests rather than the tests themselves. This pathway has historically been faster and cheaper for novel assays to reach the clinic, at the cost of less rigorous regulatory scrutiny. The FDA has spent the last several years trying to extend its authority over LDTs — the final LDT rule went into effect in 2024 — and as a result, many LDT-status liquid biopsy tests are migrating toward formal FDA approval. Signatera, for example, has been pursuing FDA approval for specific MRD indications.

**Bucket four: NIPT.** Interestingly, NIPT in the US has been almost entirely LDT-regulated for its entire history — there is no FDA-approved NIPT product as such, even though hundreds of millions of NIPTs have been performed. This has been a long-running source of debate. As the LDT rule changes, NIPT may also migrate to formal FDA approval.

\[Pause.\]

The pattern, if you squint, is this: **the regulatory infrastructure is catching up to the technology**, and the catch-up is accelerating. New therapeutic-context applications — MRD-guided adjuvant therapy decisions, for example — are increasingly being developed with FDA approval as the goal from day one, because reimbursement, clinical guideline incorporation, and physician adoption all flow more smoothly through the FDA-approved pathway than through LDT status.

For you, as a future scientist or clinician, the takeaway is that you cannot judge the maturity of a liquid biopsy test by whether it's marketed. You have to look at the regulatory status and the clinical evidence base. A test that's commercially available as an LDT may still be in active validation. A test that has FDA approval for one indication may not be approved for the use you actually want to put it to. Read the labels.

---

## SEGMENT 12 — DELFI and fragmentomics: when fragment size IS the signal

Let me come back to something I flagged way back in Segment 2 — the idea that the **size distribution** of cfDNA fragments is itself informative, independent of any specific mutations or methylation marks. This idea has grown, in the last several years, into an entire subfield called **fragmentomics**, and the landmark paper was **Cristiano et al. 2019**, which introduced an approach they called **DELFI** — DNA Evaluation of Fragments for early Interception.

The DELFI insight is this. Healthy plasma cfDNA, as we said, peaks at 166 base pairs and has a very specific, reproducible distribution of fragment sizes across the genome. The distribution reflects nucleosome positioning, which in turn reflects which genomic regions are open (less protected) and which are condensed (more protected) in the source cells. In cancer, two things change. First, the size distribution shifts — cancer-derived cfDNA fragments are subtly shorter on average than healthy-derived fragments, probably because tumor cells have somewhat disrupted nucleosome structure and somewhat different nuclease processing. Second, the size distribution **varies across the genome differently** — different regions show different shifts, in patterns that depend on which tissue the cancer is from and how aggressive it is.

DELFI captures these patterns by dividing the genome into 5-megabase windows and, for each window, computing the ratio of short to long cfDNA fragments. You get a "fragmentation profile" — basically a fingerprint of how fragmented the cfDNA is in each region. In healthy people, this profile is remarkably consistent across individuals. In cancer patients, the profile is shifted in characteristic ways.

The original DELFI paper showed that this fragmentation profile alone — without any mutation calls, without methylation, without anything else — could distinguish cancer patients from healthy controls with high specificity and roughly 70 percent sensitivity in stage I to III disease across seven cancer types. That is a stunning result, because it says: **even when ctDNA is too low to detect by mutation, the cfDNA fragmentation pattern still carries cancer signal**.

\[Pause.\]

**DELFI as the fragment-pattern trick — even if you can't see a mutation, the SIZE distribution of cfDNA fragments differs in cancer vs healthy; a free signal.**

The beauty of fragmentomics is that it's **orthogonal** to the mutation-based and methylation-based approaches. You can do shallow whole-genome sequencing — just 1x to 2x coverage of the genome — at low cost, and extract fragmentation features that are predictive of cancer. You don't need deep targeted sequencing. You don't need bisulfite conversion. You just need to know where each fragment maps and how long it is.

Even better, you can combine fragmentomics with methylation features and with low-frequency mutation calls into a single multi-feature classifier. The next generation of MCED tests — Galleri's next version, and competitors like Exact Sciences' CancerSEEK and others — are explicitly multi-modal, using fragmentation, methylation, mutation, and protein biomarkers all together. Each modality provides some signal; the combination provides more than any one alone.

Fragmentomics has also opened up applications beyond cancer. The fragmentation profile of cfDNA from a transplant recipient differs from baseline when the transplanted organ is being rejected. The profile from a pregnant woman shifts in characteristic ways with placental dysfunction. The profile during sepsis reflects the inflammatory state. We're at the beginning of an era where the cfDNA fragment-size distribution is treated as a rich multi-dimensional biosensor, not just as DNA that happens to be carrying some specific mutation we're trying to read.

---

## SEGMENT 13 — Limitations: what liquid biopsy cannot (yet) do

We've been bullish for a while. Let's take a sober pause and talk about what liquid biopsy still can't do well, because the limitations matter enormously for clinical interpretation and for understanding what the next decade of research has to solve.

**Limitation one: low-shedding cancers.** Not all tumors shed cfDNA at the same rate. Some cancers — colorectal, lung adenocarcinoma, breast — are relatively "leaky" and shed substantial ctDNA into plasma even at modest tumor burdens. Other cancers — primary brain tumors (glioblastoma, glioma), some prostate cancers, some sarcomas, low-grade or indolent disease — shed very little ctDNA, or shed it into compartments that don't communicate well with the bloodstream. For these cancers, plasma cfDNA assays are insensitive, and a negative result doesn't reliably mean no disease. You're not seeing it because it's not there, even if it is.

**Limitation two: the blood-brain barrier.** Primary brain tumors and brain metastases are the most dramatic example of this. The blood-brain barrier — the tight junctions of brain capillary endothelium — restricts not just drug entry, but cfDNA exit. Brain tumors release cfDNA preferentially into the **cerebrospinal fluid**, not into the blood. A patient with a known brain metastasis may have undetectable ctDNA in plasma but readily detectable ctDNA in CSF. So for neuro-oncology, the "liquid biopsy" is often a lumbar puncture, not a venipuncture. Same molecular logic, different compartment.

**Limitation three: early-stage low sensitivity.** This is the limitation that matters most for screening. The fundamental problem is one of basic biology: a small tumor sheds less DNA than a big tumor. For a stage I cancer of a few cubic centimeters, the ctDNA fraction in plasma may be parts per million or lower. Even the best current assays struggle below about 0.01 percent allele fraction. So screening sensitivity for true early-stage disease — the stage where catching the cancer would matter most for cure — is the hardest case for liquid biopsy. We saw this in the Galleri numbers: 17 percent sensitivity for stage I. That is much better than zero, but it is also not the screening test you'd want if you had a choice between Galleri and, say, a colonoscopy for a colon-cancer-only question.

**Limitation four: clonal hematopoiesis of indeterminate potential (CHIP).** As people age, their hematopoietic stem cells acquire mutations, and individual clones with growth advantage can expand to make up a significant fraction of circulating blood cells. These clones carry mutations in classic cancer genes — TP53, DNMT3A, TET2, others. Because most cfDNA comes from hematopoietic cells, **CHIP mutations show up in plasma cfDNA and can be misread as ctDNA**. A patient with a CHIP clone bearing a TP53 mutation has TP53 mutant DNA in their plasma, but no cancer. Tumor-informed assays avoid this trap by knowing which mutations actually came from the tumor. Tumor-uninformed assays have to filter against a paired whole-blood-cell sample to subtract out CHIP. This is a routine but real source of false positives.

\[Pause.\]

**Limitation five: false positives in screening.** When you're screening apparently healthy people with a test that has 99 percent specificity, you still get a 1 percent false positive rate — and at the scale of population screening, that's a lot of false positives, each one triggering a workup, imaging, anxiety, sometimes biopsies. The number-needed-to-screen and the harm of false positives is a real question for any MCED rollout. The NHS-Galleri trial will give us some hard numbers on this.

**Limitation six: tissue of origin failure.** Even when an MCED test correctly detects a cancer signal, the tissue-of-origin prediction can be wrong, sending the clinician looking in the wrong place. A signal flagged as "upper GI" that turns out to be a pancreas tumor, or vice versa, can delay diagnosis and waste workup.

**Limitation seven: not yet good for monitoring of resistance in real time.** ctDNA is good at detecting that a tumor is progressing, but for understanding the molecular basis of resistance — what new mutation is driving treatment failure — the assay needs to be deep enough and broad enough to catch a newly emerged variant at low fraction. Sometimes plasma is informative; sometimes you still need to rebiopsy.

These limitations are not death knells for the field. They are the active research frontier. Each limitation is a problem someone is working on. But they should make you humble about claims that the tissue biopsy is dead. It is not dead. It is shrinking in scope. For many applications, the liquid biopsy now suffices. For others, the tissue biopsy is still the right answer.

---

## SEGMENT 14 — NIPT extensions: single-gene disorders and beyond

Let's come back to NIPT, because the field has not stood still since the original trisomy 21 application. What's possible from a maternal blood draw has expanded substantially over the past decade, and the frontier is exciting.

**Standard NIPT** covers, as we discussed, trisomies 21, 18, and 13, plus the sex chromosome aneuploidies (Turner syndrome, Klinefelter, triple-X, XYY). That accounts for the majority of chromosomal abnormalities found in viable pregnancies. The technology has been refined so that even fetal fractions as low as 4 percent can give reliable calls, and twin pregnancies can be handled with appropriate adjustments.

**Expanded NIPT** has added screening for some recurrent microdeletion syndromes — DiGeorge syndrome (22q11.2 deletion), Prader-Willi, Angelman, Cri-du-chat, 1p36 deletion. The performance for microdeletions is more variable than for the major trisomies — sensitivity is lower because the affected region is smaller and the read-count signal is weaker — and microdeletion screening is offered with appropriate counseling about higher false-positive rates.

**NIPS-SGD — non-invasive prenatal screening for single-gene disorders.** This is a newer and more ambitious application. The idea is to detect specific point mutations or small indels causing single-gene disorders — cystic fibrosis, sickle cell, Tay-Sachs, achondroplasia, certain skeletal dysplasias — in fetal cfDNA. The technical challenge is severe: instead of counting chromosomes, you're looking for a specific mutation that may be present in only 10 percent of cfDNA molecules (the fetal fraction). This requires deep sequencing of targeted loci and sophisticated bioinformatics to distinguish fetal-derived variants from maternal background. Several commercial NIPS-SGD products exist by 2026 — Natera's Vistara, BillionToOne's Unity, and others — and the indications are expanding.

\[Pause.\]

**Whole-genome fetal sequencing.** This is the frontier. In principle, with enough sequencing depth and good enough bioinformatics, you could reconstruct the entire fetal genome from maternal plasma cfDNA. Several research groups have demonstrated this is technically feasible — Dennis Lo's group again, plus others. The practical and ethical challenges are substantial. Cost is high (though falling). Interpretation is hard — what do you do with hundreds of incidentally identified variants of unknown significance in a fetus? The ethical questions around prenatal testing for non-medical traits — eye color, predicted height, polygenic scores for cognitive traits — become acute. By 2026, whole-genome NIPT is starting to enter limited clinical use for very specific indications (suspected complex multigenic conditions, families with prior affected children, etc.), but it is not yet routine.

**Sequencing for fetal Rhesus status.** A separate elegant application: if the mother is Rh-negative and the father is Rh-positive, the fetus might be either Rh-positive (needing maternal anti-D prophylaxis to prevent hemolytic disease of the newborn) or Rh-negative (not needing it). cfDNA-based fetal Rh genotyping from maternal plasma lets you stratify management — only Rh-positive pregnancies need the prophylactic immunoglobulin shots. This has become standard in much of Europe and is increasingly adopted in the US.

So NIPT has evolved from "screen for trisomy 21" into "comprehensive non-invasive characterization of the fetus." The same underlying biology — fetal cfDNA in maternal plasma — is being exploited for an ever-broadening set of medical and genetic questions. And remember: this is all from a maternal blood draw. No needle in the amniotic sac.

---

## SEGMENT 15 — Donor-derived cfDNA in transplant rejection

Now let's switch organs entirely. From the placenta in the mother, to the transplanted kidney in the recipient.

The biology is the same. A transplanted kidney is, genetically, a foreign tissue. Its cells carry the donor's DNA, which is different from the recipient's at thousands of sites. When the recipient's immune system attacks the transplanted kidney — what we call **acute rejection** — donor cells die at elevated rates. Dying donor cells release donor-derived cfDNA into the recipient's bloodstream. **Donor cfDNA goes up when the kidney is being rejected.**

The clinical problem this addresses is non-trivial. After kidney transplant, the recipient has to be monitored for rejection. The gold standard for diagnosing rejection has historically been **kidney biopsy** — a needle through the skin into the transplanted kidney, with all the usual biopsy risks plus the special concern of damaging the very organ you're trying to save. Standard non-invasive markers — serum creatinine, urine protein — are insensitive and nonspecific. Creatinine rises only after substantial kidney injury has already occurred; by the time creatinine moves, rejection may have been going on for weeks.

**Donor-derived cfDNA (dd-cfDNA)** is the better non-invasive marker. The dominant commercial test in the US is **AlloSure** from CareDx. The protocol: draw blood from the recipient, extract cfDNA, sequence a panel of about 250 single-nucleotide polymorphisms that are common in the population. For each SNP, count the fraction of reads that match the recipient versus the donor allele. The donor-derived fraction is reported as a percentage.

In a stable post-transplant patient, donor-derived cfDNA is typically below 1 percent of total cfDNA. In active rejection, it rises — often above 1 percent, sometimes much higher. The threshold for concern is around 1 percent, and trial data have shown that elevated dd-cfDNA precedes serum creatinine rise by weeks, giving clinicians an early-warning window in which to intervene.

\[Pause.\]

**ctDNA in transplant as the surveillance modality — donor-derived cfDNA spikes when the rejected organ starts shedding cells; earlier than serum creatinine for kidney rejection.**

The same approach has been adapted to heart, lung, and liver transplant. AlloSure Heart and AlloSure Lung are commercial. Liver dd-cfDNA is more complicated because liver injury releases enormous amounts of hepatocyte cfDNA from a variety of insults, not just rejection — but the principle is the same.

By 2026, dd-cfDNA monitoring is standard of care in kidney transplant in the US and increasingly in heart transplant. It has substantially reduced the need for surveillance kidney biopsies, sparing patients an uncomfortable and risky procedure while improving early detection of rejection. It is also being explored as a tool for de-escalating immunosuppression — if dd-cfDNA stays low, perhaps the patient doesn't need as much immunosuppressive drug, with all its associated long-term toxicity.

The conceptual point I want to leave with you: the **same molecular logic** that lets you detect fetal DNA in maternal plasma lets you detect donor DNA in a transplant recipient. The mother and the recipient are, in cfDNA terms, both "hosts harboring foreign tissue that's shedding DNA." The technology platforms — extraction, sequencing, SNP genotyping, bioinformatic deconvolution — are essentially shared. NIPT and transplant cfDNA grew up in different clinical worlds but they are the same molecular technique applied to different questions.

---

## SEGMENT 16 — cfDNA in infectious disease: the Karius test

There's one more major cfDNA application I want to cover, because it stretches the framework in a useful way. So far, every application has been about reading **human** cfDNA — host DNA from cells dying in the host. What if you also read the non-human cfDNA?

In a healthy person, there's a small but nonzero amount of microbial cfDNA in the bloodstream — fragments from gut bacteria that translocated across the gut wall, fragments from skin commensals that got into a microscopic cut, fragments from oral bacteria. This is mostly noise. But in a person with an active infection — sepsis, endocarditis, pneumonia, meningitis, osteomyelitis — the bloodstream contains substantial microbial cfDNA from the actual pathogen. The pathogen's cells are dying — partly from the patient's immune response, partly from antibiotic exposure — and shedding their DNA into the blood.

If you sequence the entire cfDNA pool with metagenomic shotgun sequencing, and you map the reads against not just the human genome but also a comprehensive database of bacterial, fungal, viral, and parasitic genomes, you can identify which non-human organisms are in the blood. You can detect and identify pathogens without ever culturing them.

The dominant commercial product is the **Karius Test**, from Karius. The workflow: clinician orders the test on a sick patient with suspected infection of unclear etiology. Blood is drawn, plasma cfDNA is extracted, sequenced, and run through a metagenomic bioinformatic pipeline that reports back, within about a day, what pathogens are detectable and at what abundance. The test can identify over 1,000 pathogens — bacteria, fungi, DNA viruses, and certain eukaryotic parasites — from a single blood draw.

\[Pause.\]

Why is this valuable? Because traditional infectious-disease diagnostics are slow, narrow, and depend heavily on knowing what you're looking for. Blood cultures take days to grow out a pathogen and have notoriously low yield, especially in patients already on antibiotics. PCR-based pathogen tests are fast but require you to specify in advance which pathogen you're looking for. Karius — and the more general concept of **metagenomic cfDNA pathogen detection** — flips this. It says: tell me what's there, without me having to guess first.

Karius has been particularly useful in:

- **Immunocompromised patients** with fever of unknown origin, where the differential is broad and traditional workups often fail
- **Endocarditis** with negative blood cultures, where the pathogen may not grow but its cfDNA is present
- **Invasive fungal infections**, where culture is slow and serology is unreliable
- **Pediatric patients** where minimizing invasive testing matters

The challenges are real: false positives (commensals showing up as low-level signal), interpretation difficulty (is the detected organism causing disease or is it a bystander?), and high cost (the test is several thousand dollars). But the trajectory of the field is clear. As sequencing costs continue to fall and pathogen reference databases improve, cfDNA-based pathogen detection is becoming a standard tool in infectious disease diagnostics, especially for hard cases.

This also makes the philosophical point clear: cfDNA is a **universal sample**. Whatever is dying anywhere in your bloodstream's catchment is represented in your plasma cfDNA. You just have to know what to look for, or have an unbiased way to look at everything at once. The same blood draw that tells you about your tumor can tell you about your transplanted organ, your fetus, your microbiome, your sepsis. The boundary between specialties is dissolving at the level of the assay.

---

## SEGMENT 17 — Preanalytics: where most cfDNA studies fall apart

We've spent a lot of time on what cfDNA assays measure. Now I want to spend a segment on something less glamorous but, in practice, often the difference between a study that works and one that doesn't: **preanalytics**. How you collect, handle, and process the blood sample before any sequencing happens.

This matters more for cfDNA than for almost any other clinical assay, because of the central problem we keep coming back to: cfDNA is a minority signal in a sea of host genomic DNA, and the dominant contaminant — host genomic DNA from lysed blood cells — looks exactly like cfDNA except that there's a lot more of it. If your white blood cells lyse in the tube while waiting to be processed, they dump their genomic DNA into the plasma. That DNA gets co-purified with the actual cfDNA, dilutes your signal, and can make a tumor allele fraction of 1 percent look like 0.1 percent or less. Suddenly your MRD-positive patient looks MRD-negative.

So preanalytics for cfDNA is mostly about **preventing blood-cell lysis between draw and plasma separation**.

The standard approach uses **special preservative tubes** — Streck Cell-Free DNA BCT, Roche cfDNA Collection Tubes, and similar. These tubes contain a fixative that stabilizes blood cells and prevents lysis for up to a week at room temperature, giving you time to ship the sample to a central lab. Without these tubes — if you use regular EDTA tubes — you have to spin the blood within a few hours, ideally within one hour, or contamination becomes a serious problem.

\[Pause.\]

**Plasma versus serum.** Always plasma. Never serum. Why? Because serum is what's left after blood clots, and the clotting process activates and lyses white blood cells, releasing enormous amounts of genomic DNA into the serum. Serum has 5 to 10 times more total cfDNA than plasma from the same draw, but most of it is contaminating genomic DNA, not real cfDNA. Plasma — collected with an anticoagulant and processed before clotting — has cleaner cfDNA. All modern cfDNA assays use plasma. If a protocol calls for serum, run away.

**Centrifugation protocol.** Two-step centrifugation is standard. First spin removes red and white cells. Second spin (at higher speed) removes platelets and microparticles that can contaminate the plasma. Skip the second spin and you get particulate contamination that confuses downstream library prep.

**Freeze-thaw.** Plasma cfDNA is reasonably stable to freezing at minus-80, but each freeze-thaw cycle nibbles away at recovery and shifts the fragment size distribution slightly. Best practice: aliquot the plasma after the first thaw, refreeze in single-use aliquots. Don't refreeze the same aliquot multiple times.

**Input volume.** More plasma is better. The amount of cfDNA you can detect scales with the volume of plasma you process. A 10 mL blood draw giving 4 mL of plasma is the typical minimum for clinical assays. For very low-shedding cancers or for MRD applications, larger volumes (20 mL or more of blood) may be needed.

I'm going through this because if you ever find yourself running a cfDNA study, or interpreting cfDNA data, the preanalytic conditions are the first thing to check when results don't make sense. Most "failed" cfDNA experiments fail at the preanalytic stage. Beautiful sequencing on bad samples is just expensive nonsense.

The practical implication: **the lab that processes the blood is as important as the assay that reads the DNA.** Centralized reference labs with rigorous preanalytic protocols outperform local labs that occasionally do cfDNA work. This is part of why companies like Natera, Guardant, GRAIL, CareDx all operate centralized labs — sample shipping is more standardizable than asking every hospital to perfect its own cfDNA preanalytics.

---

## SEGMENT 18 — The frontier: population-scale screening and multi-omic liquid biopsy

We come to the last segment. Where is this all going?

Let me give you three big trends that I think will define the next decade of liquid biopsy.

**Trend one: pan-cancer screening at population scale.** Galleri is the leading edge of a wave of multi-cancer early detection tests that are aiming for routine use in apparently healthy populations. Competitors include Exact Sciences' next-generation tests, Guardant's Shield (already FDA-approved for colorectal screening, with broader-cancer ambitions), Freenome, and others. The big question, which the NHS-Galleri trial and other ongoing studies will answer, is whether **screening healthy people with these tests actually improves cancer mortality.** Early detection that's not actionable is not valuable; finding cancers earlier only helps if you can do something useful with that information. The pancreatic cancer caught at stage I that's now operable, the ovarian cancer caught before it spreads — those are the win cases. The thyroid microcarcinoma that would have been clinically silent forever but now triggers anxiety and surgery — that's overdiagnosis. The next decade will sort out the ratios. If population screening with cfDNA reduces cancer mortality by even a few percent, the public health impact will be enormous. If it does not, the field will retrench to high-risk populations and adjuvant settings where the benefit is clearer.

**Trend two: machine-learning-driven multi-omic liquid biopsy.** The current generation of assays generally rely on a single modality — mutations, or methylation, or fragmentation — and a relatively simple classifier. The next generation is **multi-modal**: combining mutation calls, methylation patterns, fragmentation features, protein biomarkers (CEA, CA-125, AFP, and others measured by immunoassay), and possibly even host immune-response signatures from cfRNA into a single integrated classifier built with modern machine learning. Each modality contributes some signal; the combination is more sensitive than any one alone. This is the direction CancerSEEK, Galleri version 2, and most serious MCED contenders are headed. Expect specificity and sensitivity to keep ratcheting up over the next five years as model architectures improve and training datasets grow.

\[Pause.\]

**Trend three: in vivo cfDNA dynamics as a real-time physiological monitor.** Right now, cfDNA is mostly measured at discrete clinical visits — a tube of blood every few weeks or months. But cfDNA half-life is one to two hours. In principle, you could measure cfDNA continuously, or at least daily, and watch the body's tissue-turnover dynamics in real time. A spike of liver cfDNA might be the earliest warning of drug-induced liver injury. A spike of cardiac cfDNA might predict an MI hours before troponin rises. A spike of brain cfDNA after a head injury might quantify neural damage. The technology for cheap, frequent cfDNA sampling — possibly even wearable or implantable — does not yet exist, but the molecular logic supports it. cfDNA could become to internal medicine what continuous glucose monitoring became to diabetes: a constant, high-resolution physiological readout that fundamentally changes how disease is detected and managed.

We are nowhere near that yet. But the trajectory is clear. **Liquid biopsy started with one application — fetal trisomy screening — and has expanded into every organ system, every clinical specialty, every disease state where cells die and shed DNA.** The shared molecular substrate — cfDNA in plasma — is among the most general clinical biomarkers ever discovered. The applications we've covered today, in order — NIPT, ctDNA monitoring, MRD, MCED, transplant, infectious disease — are not separate fields. They are facets of one underlying capability: **read the body's status from a tablespoon of blood**.

If, in 1997, Dennis Lo had shown you the lecture slides we just went through and told you it would all flow from that one paper about fetal Y-chromosome DNA in maternal plasma, you would not have believed him. But here we are, and the field is still accelerating. By 2036, the suite of things you can routinely learn from a blood draw will be larger and more granular than anything we've discussed today. The lecture I give to undergrads in 2036 will have segments we haven't thought to write yet.

That is, I think, the most exciting thing in clinical molecular biology right now. You are entering a field that is being reshaped, in real time, by the realization that the bloodstream is a window into every tissue, and that the window is much clearer than we ever imagined.

Thanks for staying with me for two hours. Questions.

---

## APPENDIX — Glossary, key papers, and study questions

### Glossary

- **cfDNA (cell-free DNA):** Short DNA fragments (typically ~166 bp, nucleosomal) circulating in plasma, derived from dying cells throughout the body. Half-life ~1-2 hours. Concentration ~10 ng/mL in healthy plasma.

- **ctDNA (circulating tumor DNA):** The fraction of cfDNA derived from tumor cells, carrying tumor-specific mutations. Variable from <0.01% to >10% of total cfDNA depending on tumor type and burden.

- **NIPT (non-invasive prenatal testing):** Screening for fetal aneuploidy (trisomy 21, 18, 13, and sex chromosome) from maternal plasma cfDNA, exploiting the ~10% placental contribution.

- **NIPS-SGD:** Non-invasive prenatal screening for single-gene disorders — detecting specific point mutations or indels in fetal cfDNA.

- **MRD (minimal residual disease):** Detection of small residual cancer after curative-intent treatment, increasingly done via tumor-informed cfDNA assays.

- **MCED (multi-cancer early detection):** Pan-cancer screening assays (e.g., Galleri) aiming to detect signal for many cancer types from a single blood draw.

- **Tumor-informed assay:** A personalized assay built from prior knowledge of the patient's tumor mutations (e.g., Signatera).

- **Tumor-uninformed assay:** A fixed-panel assay used without prior tumor sequencing (e.g., Guardant360).

- **dd-cfDNA (donor-derived cfDNA):** The fraction of cfDNA from a transplanted organ; rises in rejection.

- **DELFI:** DNA Evaluation of Fragments for early Interception — a fragmentomics approach using cfDNA fragment-size distributions to detect cancer.

- **Fragmentomics:** The study of cfDNA fragment-size patterns as biomarkers, independent of sequence content.

- **CHIP (clonal hematopoiesis of indeterminate potential):** Age-related expansion of mutant hematopoietic clones whose mutations can appear in plasma cfDNA and confound ctDNA interpretation.

- **UMI (unique molecular identifier):** Random barcode added to each original cfDNA molecule before amplification, enabling error correction in deep sequencing.

- **Karius:** Commercial metagenomic cfDNA test for pathogen identification in infectious disease.

- **AlloSure:** Commercial dd-cfDNA test (CareDx) for transplant rejection monitoring.

- **Galleri:** GRAIL's methylation-based MCED test detecting signal for 50+ cancer types.

- **Signatera:** Natera's tumor-informed MRD test.

- **clonoSEQ:** Adaptive Biotechnologies' MRD test for blood cancers, based on B-cell or T-cell receptor sequencing.

### Landmark papers (selected)

- Lo YMD et al. (1997). _Presence of fetal DNA in maternal plasma and serum._ The Lancet. — The founding paper.
- Diehl F, Vogelstein B et al. (2008). _Circulating mutant DNA to assess tumor dynamics._ Nature Medicine. — Quantitative ctDNA monitoring.
- Chiu RWK, Lo YMD et al. (2008). _Noninvasive prenatal diagnosis of fetal chromosomal aneuploidy by massively parallel genomic sequencing._ PNAS.
- Snyder MW et al. (2016). _Cell-free DNA comprises an in vivo nucleosome footprint that informs its tissues-of-origin._ Cell. — The nucleosome-positioning insight that enables fragmentomics.
- Cristiano S et al. (2019). _Genome-wide cell-free DNA fragmentation in patients with cancer._ Nature. — The DELFI paper.
- Klein EA, Liu MC et al. (CCGA-3, 2021). _Clinical validation of a targeted methylation-based multi-cancer early detection test._ Annals of Oncology. — Galleri validation.
- Tie J et al. (DYNAMIC trial, 2022). _Circulating tumor DNA analysis guiding adjuvant therapy in stage II colon cancer._ NEJM. — MRD-guided therapy.

### Study questions

1. Why is the 166-bp peak in the cfDNA size distribution so sharp, and what does its presence tell you about the dominant mechanism of cfDNA release?
2. A patient's plasma cfDNA shows a TP53 mutation at 2% allele fraction. They have no known cancer. List three possible explanations and how you would distinguish them.
3. Explain why tumor-informed MRD assays have higher sensitivity than tumor-uninformed assays, and why that advantage matters most in the post-surgical setting.
4. The Galleri test reports an overall sensitivity of ~50% pooled across cancer types and stages, but only ~17% for stage I disease. Why is stage I sensitivity so much lower, and what does that imply for the test's role in screening?
5. A transplant recipient has dd-cfDNA of 0.5% at month 3 and 2.1% at month 4. Their serum creatinine is unchanged. What is the most likely explanation, and what would you do next?
6. Describe how DELFI extracts cancer signal from cfDNA without ever sequencing a specific mutation. Why is this orthogonal to mutation-based detection?
7. The Karius test can identify >1,000 pathogens from a single blood draw. List two clinical scenarios where this is high-value and two reasons it can give clinically misleading results.
8. NIPT achieves >99% sensitivity for trisomy 21 from a fetal cfDNA fraction of only ~10%. Sketch the statistical argument for why this works despite the small fraction.
9. Explain the difference between plasma and serum for cfDNA assays, and why getting this wrong invalidates the experiment.
10. Speculate: if cfDNA could be measured continuously rather than at discrete time points, name three clinical applications that would benefit and why.

### Where to go next in this lecture series

- _PCR_ and _qPCR / Digital PCR_ — the upstream technologies that make cfDNA detection possible.
- _Cancer: How a Cell Forgets the Rules_ — the biology of the tumors whose ctDNA we're measuring.
- _Illumina_ and _Nanopore_ — the sequencing platforms behind modern cfDNA assays.
- _Bisulfite methylome_ — the methylation chemistry behind Galleri-class MCED tests.
- _Single-cell sequencing_ — the natural next layer for understanding which exact cell types are contributing to cfDNA.

\[End of lecture.\]
