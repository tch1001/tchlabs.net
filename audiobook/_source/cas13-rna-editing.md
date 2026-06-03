# Cas13 and RNA Editing: The CRISPR That Targets RNA

**A 2-hour undergraduate molecular biology lecture on Cas13, REPAIR, RESCUE, SHERLOCK, and the RNA-editing therapeutic frontier — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, which gets you very close to two hours with a little room for questions. Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There is a planned break at the one-hour mark, after Segment 9, marked \[BREAK\]. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool. This lecture is the sequel to the CRISPR lecture, and ideally a companion to the RNAi and siRNA lecture. I will assume you have done CRISPR — I will not re-derive Cas9, guide RNAs, PAMs, or HNH and RuvC from scratch. I will assume you have at least heard of RNAi, because the contrasts will come up. The focus today is the CRISPR family that does not touch DNA at all — the family that targets RNA.

---

## SEGMENT 1 — Why RNA targeting matters — the central frame of the lecture

Alright. Let's begin. Today, for the next two hours, we are going to talk about a branch of the CRISPR universe that almost nobody outside molecular biology has ever heard of, even though parts of it have been in the news for years. I am talking about **Cas13** — a Cas protein that does not cut DNA. It cuts RNA. And out of that one mechanistic difference flows an entire alternate technology stack — RNA knockdown without genome editing, programmable RNA editing without permanent changes, ultrasensitive diagnostic platforms that lit up during COVID, and the entire business model of at least two biotech companies you should probably know about.

So here is the single sentence I want you to walk out of here with, and then I will spend two hours unpacking it. **Cas13 is the CRISPR that targets RNA.** Same logic as Cas9 — a guide nucleic acid points a programmable nuclease at a matching sequence — but the target is messenger RNA, or viral RNA, or any other transcript, instead of the chromosomal DNA in the nucleus. The protein is different. The mechanism is different. The therapeutic implications are different. The diagnostic implications are arguably even bigger than the therapeutic ones. And the family is younger — most of what we are going to talk about today was discovered or invented between 2016 and 2024, which is to say, after Cas9 had already gone famous.

\[Pause.\]

Let me frame this. When most people hear "CRISPR," they think of Cas9. Cas9 cuts double-stranded DNA. The CRISPR therapies that have made the news — the sickle cell cure, the in-vivo base editing trials for cardiovascular disease, the experimental knockouts for hereditary amyloidosis — those are all DNA editors, all working at the level of the genome. The whole magnificent edifice we built in the CRISPR lecture rests on the idea that a programmable nuclease finds and cuts a sequence in the three billion letters of your chromosomes, and then the cell's repair machinery does the rest.

But here is the thing. Most of what your cells are doing, in any given moment, is not about the DNA in your nucleus. It is about the RNA. The genome is the master library. The messenger RNAs floating around in your cytoplasm are the actual working copies — the books that have been checked out, the photocopies on the desk, the documents the ribosomes are reading right now. If you want to change what a cell is doing, you can either edit the master copy — change the DNA, change every future photocopy — or you can edit the photocopies that exist right now and let the master copy continue making more. Those are two very different interventions, and the second one — editing the working copies — has properties that turn out to be enormously useful.

\[Pause.\]

Cas13 is the CRISPR family that works on the working copies. And two things flow from that.

The first thing is therapeutic. If you target RNA instead of DNA, you can knock down or edit a transcript without permanently changing the genome. That means if you make a mistake, the cell makes more mRNA tomorrow and you are back to baseline. RNA editing is reversible by default — it is a soft eraser, where DNA editing is a chisel. For some diseases — viral infections, transient inflammatory states, certain kinds of dominant-negative genetic diseases — you do not actually want to make a permanent change. You want to dial something down for a while. RNA-level intervention gives you that knob.

The second thing is diagnostic. Cas13 has a quirk we are going to spend a lot of time on — when it finds its target RNA, it does not just cut the target. It goes berserk and starts chewing up nearby RNAs nonspecifically. We call this **collateral cleavage**. For a therapy, that is bad — collateral activity inside a cell can damage other transcripts. But for a diagnostic, it is incredible. If you load Cas13 with a guide RNA that matches, say, the genome of SARS-CoV-2, and you add a little fluorescent reporter RNA to the tube — when Cas13 finds the virus, it chews up everything, including the reporter, and the well lights up. You have just built a programmable molecular detector for any nucleic acid sequence you can imagine. That is what **SHERLOCK** is. That is what the Cas12-based **DETECTR** is. That is what Mammoth Biosciences was trying to build as a paper-strip COVID test in 2020. That whole family of diagnostic platforms — what we now call **CRISPR-Dx** — exists because of collateral cleavage.

\[Pause.\]

So here is what I want from you over the next two hours. If you can walk out of this room and do four things — first, sketch how Cas13 differs mechanically from Cas9, including what HEPN domains are and why there is no PAM; second, explain collateral cleavage and why it is simultaneously a therapeutic concern and the foundation of CRISPR-based diagnostics; third, walk through how Cas13 can be turned from a destroyer of RNA into a precise RNA editor by fusing it to ADAR or APOBEC, and why that gives you REPAIR and RESCUE; and fourth, look at any modern application — a SHERLOCK COVID test, a Tessera Therapeutics gene-writing platform, a Wave Life Sciences AIMer oligo — and tell me which mechanism it is built on and what the trade-offs are — then we have succeeded.

One last framing. The CRISPR world is bigger than Cas9. There are types I through VI of CRISPR systems, named in order of their effector-protein architecture, and the targeting biology varies across them. Cas9 belongs to type II. Cas12 belongs to type V. Cas13 belongs to type VI. Type VI is the RNA-targeting branch. Today we are spending the whole lecture inside type VI, and then we are going to step outside of CRISPR entirely — to Wave Life Sciences' AIMer technology — to compare what you can do at the RNA level with no Cas protein at all, just clever chemistry. That contrast will sharpen what Cas13 is uniquely good for, and where it is not the right tool.

Let me go get the discovery story.

---

## SEGMENT 2 — The discovery of Cas13 — from C2c2 to a new CRISPR type

The discovery of Cas13 starts the way a lot of CRISPR discoveries start — with somebody mining bacterial genome databases, looking for proteins that did not yet have names. By 2014 and 2015, the field had realized that the CRISPR-Cas universe was much bigger than the Cas9 paradigm. Cas9 was the famous one, but there were dozens, eventually hundreds, of related effector proteins encoded in different bacteria, doing related but different jobs. Some were Cas9-like. Some were not. Some had architectures nobody had ever seen before. There was a real sense, in the bioinformatics community, that we had named maybe ten percent of what was out there, and the remaining ninety percent was waiting in sequence databases for somebody to recognize it.

The lab that was best at this work — that had the deepest computational pipeline for mining CRISPR systems out of bacterial sequence data — was **Feng Zhang's lab** at the Broad Institute of MIT and Harvard. You remember Zhang from the CRISPR lecture — he was one of the two groups that showed Cas9 working in human cells in January 2013. By the mid-2010s, his lab had developed a routine: scan thousands of bacterial genomes, look for the signature of a CRISPR array — those repeat-spacer-repeat-spacer patterns — find the genes encoded next to the array, predict their function, and then go test the most interesting ones in the lab.

\[Pause.\]

In 2015 and into 2016, two of Zhang's collaborators — **Eugene Koonin's** computational group at the NIH and Zhang's own team — published a series of papers describing previously uncharacterized CRISPR effectors. Among them was a protein they initially called **C2c2** — class 2 candidate 2. The name was a placeholder, the kind of name you give to a gene when you have just found it in a database and you do not yet know what it does. C2c2 sat next to a CRISPR array in certain bacteria, so it was clearly part of a CRISPR system. But it looked weird. It did not have the RuvC and HNH nuclease domains that Cas9 had. Instead, it had two copies of a different domain called **HEPN** — Higher Eukaryotes and Prokaryotes Nucleotide-binding domain. HEPN domains were known to be associated with RNA cleavage, not DNA cleavage. Which was a hint.

The first big paper on C2c2 came out in **Science in 2016**, with first author **Omar Abudayyeh**, a graduate student in Zhang's lab who is going to come up again later in this lecture as one of the people who turned this discovery into both REPAIR and SHERLOCK. The paper was titled "C2c2 is a single-component programmable RNA-guided RNA-targeting CRISPR effector." Every word in that title is doing work. Single-component — one protein, not a complex. Programmable — guide-RNA-directed, like Cas9. RNA-guided — same as Cas9. RNA-targeting — and here is the new word. The target was not DNA. The target was RNA.

Let me say it plainly. **In 2016, Abudayyeh and Zhang showed that C2c2 is a CRISPR effector that cuts RNA instead of DNA.** That was the headline. Single guide, single protein, programmable cleavage of a target RNA sequence in vitro and in bacteria. Everything you knew about Cas9, but applied to a different molecule.

\[Pause.\]

Shortly after, the naming convention got cleaned up. C2c2 got renamed **Cas13** — making it the effector of the newly recognized **type VI** CRISPR systems. And just like Cas9 has variants from different bacteria — SpCas9 from _Streptococcus pyogenes_, SaCas9 from _Staphylococcus aureus_, and so on — Cas13 turned out to have a whole family of variants. We now talk about **Cas13a** — the original C2c2, found first in _Leptotrichia shahii_. We talk about **Cas13b** — discovered next, found in _Bergeyella zoohelcum_ and _Prevotella_ species, often with slightly different biochemical properties. We talk about **Cas13c**, **Cas13d**, **Cas13X**, **Cas13Y**, and the inventory keeps growing as people find new ones in metagenomic samples. The letters basically just mark when each subfamily was characterized.

Of these, the one that has mattered most for therapy is **Cas13d**, specifically the version from _Ruminococcus flavefaciens_, which goes by the abbreviation **RfxCas13d** or sometimes just **CasRx**. We will spend a whole segment on RfxCas13d later. The short version: it is small, it is potent, and it has lower collateral cleavage in mammalian cells than the earlier versions. For therapeutic RNA knockdown, RfxCas13d is the workhorse.

\[Pause.\]

I want to make a meta-point here, because it is going to come up again. The discovery of Cas13 is, in some sense, a story about computational mining of bacterial diversity. Nobody invented Cas13. Nobody designed it. It was already out there, in bacterial genomes, doing its bacterial job — which we will get to in a moment — for hundreds of millions of years. Humans found it by reading the sequence databases. This is, in retrospect, an enormously consequential point about how molecular biology now works. The lab is a tool for characterizing what computation has already predicted. The first step in finding a new tool is not "design a new protein from scratch" — it is "scan the database for natural proteins that already do what you want." That same pipeline is going to give us new Cas variants, new transposases, new base editors, new gene writers, every year for the foreseeable future. Cas13 was an early demonstration that this pipeline works.

Okay. We have the discovery, we have the naming, we have the family tree. Now let's open up Cas13 and look at the mechanics.

---

## SEGMENT 3 — The mechanism — HEPN domains, no PAM, and the protospacer flanking site

Before we get to the technology, I want to spend some time on how Cas13 actually works at the molecular level, because the mechanism is genuinely different from Cas9, and many of the downstream technological choices fall out of that difference.

Let's start with the architecture. Cas13 is, like Cas9, a large multi-domain protein — about 1,200 amino acids for Cas13a, somewhat smaller for Cas13d. It has a recognition lobe that grips the guide RNA, and a nuclease region. But here is where it diverges from Cas9. The nuclease activity of Cas13 is not located in two separate domains analogous to HNH and RuvC. It is located in **two HEPN domains** that come together at a single active site. Both HEPN domains contribute catalytic residues — typically arginine and histidine residues — to one shared pocket. The pocket cuts single-stranded RNA. Mutate the key residues in either HEPN domain and the protein loses its cleavage activity entirely. The two HEPN domains together are the scissors.

So let me give you the first key contrast. **Cas9 has two nuclease domains, HNH and RuvC, each of which cuts one strand of a DNA double helix. Cas13 has two HEPN domains that come together at a single active site and cut single-stranded RNA in one place.** The targets are different shapes — DNA is a double helix, RNA in the cytoplasm is mostly single-stranded — and the cutting machinery has evolved accordingly.

\[Pause.\]

Now, the guide RNA. Cas13's guide RNA is shorter than Cas9's, and it does not use a tracrRNA-crRNA pair the way Cas9 does. The Cas13 crRNA is a single piece of RNA, typically 50 to 70 nucleotides total, with a defined hairpin structure at one end — that's the part Cas13 grips — and a spacer region of about 28 to 30 nucleotides on the other end — that's the targeting part. Change the 28 to 30 letters in the spacer, change the target. Same programmability principle as Cas9.

So how does Cas13 find its target? Well, similar to Cas9, it scans for a matching sequence using base-pairing between the spacer in the guide and the target RNA. When the spacer finds a region of complementary sequence in an RNA molecule floating around in the cytoplasm, base-pairing locks in, and the HEPN active site activates and cuts.

But here is the second key contrast. **Cas13 does not require a PAM.** Remember the PAM from the CRISPR lecture — the protospacer adjacent motif, the three-letter password that Cas9 has to see right next to its target before it will cut. The PAM was crucial for Cas9 in two ways: it was the bouncer that made the search efficient, and it was the self-versus-non-self signal that kept the bacterium from cutting its own CRISPR array. Cas13 does not have a PAM.

Now, Cas13 does have something kind of similar, called a **protospacer flanking site** or **PFS**. Some Cas13 variants — particularly Cas13a from _Leptotrichia shahii_, the original one — strongly prefer their target RNA to have a non-G nucleotide immediately flanking the protospacer region. But this is not strictly required, the rules vary by Cas13 variant, and many Cas13s — including the therapeutically important RfxCas13d — have no PFS preference at all. They will target essentially any RNA sequence you point them at.

\[Pause.\]

I want you to feel why this matters. With Cas9, your guide design is constrained by the requirement to have an NGG PAM right next to your target. That means there are gaps in the genome where you cannot effectively target with SpCas9 — stretches that happen to lack NGG sequences in the right places. With Cas13, especially Cas13d, you have essentially complete freedom. Any RNA, any sequence. The molecule has way fewer constraints on where you can aim.

There is a third key contrast — and this is the one that turns Cas13 from a curiosity into both a therapy platform and a diagnostic platform. **Cas13 has collateral activity.** When Cas13 binds and cuts its specific target RNA, the activation of the HEPN active site does not switch off afterward. The HEPN domains stay open, and Cas13 starts cutting other, unrelated single-stranded RNAs that bump into it nonspecifically. This is the famous **collateral cleavage** activity, sometimes called **bystander activity** or **trans-cleavage**.

Think of it this way. Cas9 cuts its target and is done. It cuts cleanly, in one place, and then it falls off — eventually. Cas13, by contrast, cuts its target — and then keeps cutting things. It is an enzyme that, once activated, becomes a generalized RNase for a while. Bacteria use this for defense — when a phage infects them, Cas13 activates on the viral RNA, then degrades all the RNA in the cell, which arrests cell growth and stops the phage from completing its replication cycle. It is essentially a controlled cell-suicide pathway. The bacterium does not survive, but neither does the phage spread.

We will come back to collateral activity in detail in Segment 4, because it is the most consequential single property of Cas13. It is bad for therapy, it is great for diagnostics, and it is the thing that has shaped almost everything about how this family of proteins gets deployed in humans.

\[Pause.\]

One more piece of the mechanism. Where does Cas13 do its work? Cas9 works in the nucleus, because that is where DNA lives. Cas13 works in the cytoplasm, because that is where mRNA mostly lives after it has been spliced and exported from the nucleus. This matters for delivery. Getting a protein into the cytoplasm is a different problem from getting it into the nucleus. For an AAV-delivered Cas13, the protein gets translated in the cytoplasm and just stays there — it does not need a nuclear localization signal. That actually simplifies some design decisions, though delivery to specific tissues is still hard, as it is for any large protein cargo.

Okay. Recap. Cas13 is a single-protein RNA-guided RNase. It cuts single-stranded RNA at sequences specified by a 28-to-30-nucleotide spacer in its crRNA. It uses two HEPN domains that come together at one active site. It generally does not require a PAM. And it has a property — collateral cleavage — that makes it both dangerous and useful in ways we are about to explore.

---

## SEGMENT 4 — Collateral cleavage — the quirk that is bad for therapy and great for diagnostics

I want to spend a whole segment on collateral cleavage, because it is the single most consequential feature of Cas13, and you cannot understand anything else in this lecture without understanding it.

Let me re-state the phenomenon. When Cas13 finds its target RNA and cuts it, the protein does not return to a resting state. The HEPN nuclease active site stays open, and Cas13 begins to cut other, unrelated single-stranded RNAs that diffuse past it. We say the protein is **activated** by target binding, and it remains activated, chewing up bystander RNAs, until something — degradation, dilution, the end of the experiment — turns it off.

The cleavage of bystanders is not sequence-specific. The activated Cas13 is essentially a promiscuous single-strand RNase. It will cut anything single-stranded that comes near. We call this **trans-cleavage**, in contrast to the **cis-cleavage** of the original target. Cis means "on the same side as," trans means "on the other side of." Cis cleavage is what the guide RNA tells Cas13 to do. Trans cleavage is what happens after that, indiscriminately.

\[Pause.\]

Okay. So why is this bad for therapy?

Imagine you want to knock down a single oncogenic transcript in a tumor cell. Say, KRAS messenger RNA. You design a Cas13 guide against KRAS, you deliver the system to the tumor cell, Cas13 finds KRAS mRNA and cuts it. Great. But now Cas13 is activated, and it starts chewing up other random mRNAs in the cell. Some housekeeping mRNAs get cut. Some ribosomal RNAs get cut. The cell's protein synthesis machinery starts to falter. The cell either dies — sometimes this is the goal, sometimes it is not — or it activates stress responses that confound your interpretation of what knockdown you achieved.

For mammalian cells, the magnitude of collateral cleavage varies substantially across Cas13 variants. The early ones — Cas13a, Cas13b — show pronounced collateral activity in mammalian cells. RfxCas13d, the favored therapeutic variant we mentioned, was initially reported to have lower collateral activity in mammalian cells, which is part of why it became the workhorse. But there has been a fair bit of back-and-forth in the literature about exactly how much collateral activity each variant has in mammalian cells versus in vitro — some 2022 and 2023 papers have shown that even RfxCas13d, under certain conditions, exhibits measurable collateral effects that depress cell fitness. The field is still working out which variants, in which contexts, are clean enough for therapeutic use.

The upshot is that **for in-vivo therapy, collateral cleavage is a real concern**, and active engineering — variant choice, engineering of the HEPN domain, guide design, dose control — has to be applied to minimize it. This is one of the central challenges facing Cas13-based therapeutics. It is one of the reasons Cas13 therapies have lagged Cas9 therapies, despite the in-principle advantages of RNA targeting.

\[Pause.\]

Now, why is collateral cleavage great for diagnostics?

Here is the conceptual flip. In a cell, collateral cleavage of all your other RNAs is bad. In a test tube, where you have no other functions to disturb, collateral cleavage is a free signal-amplification mechanism. If you can rig the system so that the "other RNAs" being cleaved are a fluorescent reporter that you added to the tube on purpose, then **collateral cleavage becomes the readout**. The presence of the target RNA is reported by the chewing up of the reporter, which lights up the tube.

Let me make this concrete. You want to detect whether a patient sample contains SARS-CoV-2 RNA. Here is what you do. You take the sample. You add Cas13, loaded with a guide RNA matching the SARS-CoV-2 genome. You also add a little molecular beacon — a short RNA strand with a fluorophore on one end and a quencher on the other. While the molecular beacon is intact, the quencher sits next to the fluorophore and absorbs its light — the tube is dark. If Cas13 finds SARS-CoV-2 RNA in the sample, it cuts it — and then its collateral activity kicks in and starts cutting the molecular beacon. Once the beacon is cut, the fluorophore and quencher separate, the quencher floats away, and the fluorophore lights up. The tube goes from dark to bright. **A positive result is a glowing tube.**

\[Pause.\]

That is the entire conceptual basis of CRISPR-based diagnostics. The collateral activity is the signal amplification. One activated Cas13 enzyme can chew up thousands of reporter molecules in a few minutes — so a tiny amount of target RNA, even one or a few molecules per sample, can produce a strong fluorescent signal because the Cas13s that activate then go on to chew up enormous numbers of reporters. The amplification is built into the biology.

This is what the platform called **SHERLOCK** is built on. We will come to SHERLOCK in detail in Segment 10. But hold the picture now. **Cas13's collateral activity is a bug for therapy and a feature for diagnostics.** It is the same biological behavior — cut everything single-stranded once activated — but the consequences depend on whether you are inside a cell, where everything single-stranded matters, or in a tube, where the only thing single-stranded is the reporter you added.

This duality is going to come up repeatedly. Keep it in mind. The thing that makes Cas13 a difficult therapy is the same thing that makes it an exquisite diagnostic. The applications split on that axis.

---

## SEGMENT 5 — Cas13d, RfxCas13d, and the small one favored for therapy

Let's spend a segment specifically on **Cas13d**, because this is the variant that has mattered most for in-vivo therapeutic applications, and you need to know why.

Cas13d was characterized in 2018 by **Patrick Hsu's lab**, then at the Salk Institute. Hsu was a former Zhang lab postdoc — there is a real lineage here, almost all the major Cas13 work traces back to either Zhang's lab directly or to people trained in it. The Cas13d paper was published in _Cell_, with first author **Silvana Konermann**, and it identified a previously uncharacterized type VI subfamily found in a bunch of bacteria including _Ruminococcus flavefaciens_ — a gut bacterium. The variant from _R. flavefaciens_ became known as **RfxCas13d**, or by the slightly catchier name **CasRx**, the name Hsu's group gave it as a branded variant.

\[Pause.\]

The point about RfxCas13d, and the reason it became the favored variant, is fundamentally about size. Cas13a, the original Cas13, is about 1,200 amino acids. Cas13b is about 1,100. RfxCas13d is about **930 amino acids**. The DNA coding sequence is about 2.8 kilobases. That matters enormously for one specific reason: **AAV delivery**.

Recall the AAV lecture, or what you may remember about gene therapy delivery. AAV — adeno-associated virus — is the workhorse delivery vehicle for getting genetic cargo into cells in vivo. AAV has a packaging limit of about 4.7 kilobases of DNA, total, including all the promoters and regulatory elements you need. Subtract a promoter, a polyA signal, and a guide RNA expression cassette, and you have maybe 3.5 kilobases left for the protein-coding sequence. The original SpCas9 is 4.2 kilobases — too big to fit comfortably in a single AAV with a guide and a promoter. People work around this with split-Cas9 systems, dual-AAV approaches, smaller Cas9 orthologs like SaCas9, or non-AAV delivery vehicles. But the size constraint is real.

RfxCas13d, at 2.8 kilobases of coding sequence, fits comfortably in an AAV with room to spare for a guide expression cassette and regulatory elements. **The whole therapy fits in one AAV.** That is a big deal, practically. It is one of the reasons that companies thinking seriously about in-vivo Cas13-mediated knockdown picked Cas13d as the variant to push.

\[Pause.\]

There is a second reason Cas13d became favored, which is that the initial reports suggested it had **lower collateral activity in mammalian cells** than the earlier variants. I said in Segment 4 that this picture has gotten more complicated since 2022 — newer work suggests that even RfxCas13d has more collateral activity in mammalian cells than the original 2018 paper implied, especially under conditions of high target expression or high effector expression. But the general consensus is that, all else equal, RfxCas13d is somewhat cleaner than Cas13a or Cas13b in mammalian cells. It is still the variant that most therapeutic programs choose. It is just an open and active question how aggressively the field needs to engineer it to push collateral activity down further.

A third reason — and this one is a feature in a different sense — is **specificity through guide design**. Konermann and Hsu's 2018 paper showed that RfxCas13d achieves remarkable knockdown of target RNAs in mammalian cells. The degree of knockdown — often 80, 90, sometimes 95 percent — was comparable to, or better than, the best siRNA designs against the same target. And unlike Cas9, which requires the NGG PAM and is therefore constrained in guide design, RfxCas13d has no PFS preference at all. You can target any sequence of any RNA you want.

\[Pause.\]

One more thing about Cas13d. There is a flavor called **dCas13d** — catalytically dead Cas13d. Just like dCas9 — dead Cas9 — is used in genome editing for non-cleavage applications like transcriptional activation, repression, or imaging, dCas13d is used for non-cleavage RNA applications. Mutate the catalytic residues in the two HEPN domains and you get a Cas13d that still binds RNA at the spot specified by the guide but does not cut it. This is the platform for everything we are about to talk about in REPAIR and RESCUE — programmable RNA editing — because the editing tools fuse an editing enzyme to dCas13. The dCas13 brings the editing enzyme to the right spot on the right RNA. The editing enzyme does the chemistry. Cas13 just plays GPS, not nuclease.

So to summarize the favored variant. **RfxCas13d is small enough for AAV. It has relatively low collateral activity in mammalian cells. It needs no PAM, so guide design is free. And in its catalytically dead form, it is the chassis for programmable RNA editing.** That is why almost every Cas13-based therapeutic platform you will hear about — Tessera Therapeutics, the Mass General Brigham programs, the various academic spinouts working on cardiac disease, dystrophy, ALS — uses RfxCas13d as the base, or a closely related variant.

Okay. We have the variant. Now let's talk about what you can actually do with it, starting with the default behavior — knockdown — and then graduating to the more sophisticated thing — RNA editing.

---

## SEGMENT 6 — Knockdown by default, editing by fusion

So you have RfxCas13d. You load it with a guide RNA against your target — say, the messenger RNA for some disease-causing protein. You deliver Cas13d-plus-guide to the cell. What happens?

By default, what happens is the most boring thing Cas13 can do: **the target RNA gets cut**. Cas13 is still a nuclease. Its default behavior, in the absence of any engineering, is to find the target and chew it up. The cut RNA then gets degraded by the cell's normal exonucleases — XRN1, the exosome, all the standard cytoplasmic RNA-degrading machinery — and the target transcript is gone. The corresponding protein doesn't get made. **The gene is knocked down at the post-transcriptional level.**

This is the parallel to what siRNA does, biologically. siRNAs use the RISC complex, with Argonaute-2 at its core, to find and cut a target mRNA. Cas13 uses its own protein machinery, with HEPN domains as the cutter, to find and cut a target RNA. Both produce post-transcriptional knockdown. Both are reversible — the genome is unchanged, so the cell can transcribe more mRNA whenever you stop applying the system. Both can be very potent — 80, 90 percent knockdown is achievable.

\[Pause.\]

The differences between Cas13-mediated knockdown and siRNA-mediated knockdown are worth pausing on, because they are not the same thing and the choice between them matters for any practical application.

First, **size and delivery**. siRNAs are small chemically synthesized molecules — about 21 to 23 base pairs long — that can be conjugated to GalNAc and injected into a patient subcutaneously. Cas13 is a protein-plus-guide system that has to be delivered as either a protein-RNA complex, an mRNA encoding the protein plus a separate guide RNA, or a DNA cassette in an AAV. Cas13 delivery is therefore harder. siRNAs are years ahead in clinical delivery. As of 2026, five siRNA drugs are FDA-approved. No Cas13-based therapeutics are approved yet — they are all in earlier preclinical and clinical development.

Second, **the cellular machinery used**. siRNAs hijack an existing endogenous pathway — every mammalian cell already has Dicer and RISC and Argonaute-2 running, and the siRNA drug is just another passenger. Cas13 imports the whole machinery — Cas13 is a foreign bacterial protein that the cell does not normally have, and you have to deliver the protein along with the guide. The siRNA pathway is built in. The Cas13 pathway is bolted on.

Third, **collateral activity**. siRNAs don't have collateral activity. Once RISC cuts the target mRNA, it releases and goes looking for another target. Cas13, by contrast, has the collateral problem we already discussed. This is one of the reasons that for pure knockdown applications, where you just want to lower the expression of one gene, siRNA is generally a cleaner mechanism. Cas13 has potential advantages — bigger payload of edits, no PAM constraint, can be delivered as a heritable construct — but for the specific job of "knock down one gene," siRNA has been winning.

\[Pause.\]

Now. Here is where Cas13 starts to do things siRNA cannot. The Cas13 protein is much bigger than RISC components, and it can be **engineered**. You can mutate the HEPN domains to kill the cleavage activity, giving you **dCas13** — catalytically dead Cas13 that still binds RNA at the spot specified by the guide but does not cut it. And then, because dCas13 is a programmable, sequence-specific RNA-binding protein, you can fuse it to other things. You can hand it any enzyme you want, and the fusion protein will deliver that enzyme to whichever RNA your guide points it at.

This is exactly the same trick we played with dCas9 in the CRISPR lecture, where dCas9 was used as a programmable DNA-binding scaffold for transcriptional activators, repressors, imaging tags, base editors, and prime editors. Now we are playing the same trick with dCas13, but on RNA.

\[Pause.\]

What kinds of enzymes do you fuse to dCas13? Well, that depends on what you want to do to the RNA. If you fuse dCas13 to a translational repressor, you can block ribosome scanning at a particular mRNA. If you fuse it to a translational activator, you can boost translation. If you fuse it to a splicing factor, you can shift the alternative splicing of a particular exon. There is an entire menu of RNA-modulating fusions in the literature.

But the most consequential fusions, and the ones that have driven the most therapeutic interest, are the **RNA editing fusions**. Specifically, fusions of dCas13 to **ADAR** — for A-to-I editing — and to **APOBEC** — for C-to-U editing. ADAR fusions give you a platform called **REPAIR**. APOBEC fusions give you a platform called **RESCUE**. These are the headline RNA-editing technologies of the Cas13 era, and they are about to take us into a different conceptual space — programmable single-base editing of RNA without any cleavage at all.

Let me set up the contrast. Cas13's default behavior is destruction — find the target, chew it up. Cas13's engineered behavior, via fusion to a deaminase, is **rewriting** — find the target, change one letter, leave everything else intact. That is the move that takes Cas13 from "RNA knockdown tool that overlaps with siRNA" to "RNA editing platform that does something siRNA fundamentally cannot." And it is the move that has gotten the most therapeutic attention, because it opens up the possibility of correcting a disease-causing mutation at the level of the message, transiently, without ever touching the genome.

That is what the next two segments are about.

---

## SEGMENT 7 — REPAIR — Cas13-ADAR fusions for A-to-I RNA editing

Let me take you to **REPAIR**, which stands for **RNA Editing for Programmable A to I Replacement**. The acronym is, frankly, a stretch — the "P" is doing some work — but the name is memorable, which is what matters. REPAIR was published in _Science_ in 2017, with first author **David Cox** and senior author Feng Zhang. The paper title was "RNA editing with CRISPR-Cas13." That's the cleanest possible description. And what it described was the first system that could make a programmable, sequence-specific single-base edit in a target mRNA inside a mammalian cell, without cutting the RNA, without touching the DNA, and without permanent changes.

To understand REPAIR you need to understand the editing enzyme it uses, which is called **ADAR**. ADAR stands for **adenosine deaminase acting on RNA**. ADARs are a family of human enzymes — ADAR1, ADAR2, and ADAR3 — that are part of normal mammalian biology. They edit your own RNA, naturally, all the time, every day, in essentially every cell of your body. The job of ADAR is to chemically convert an adenosine — the A in RNA — into inosine — denoted I. The conversion happens by deamination — the enzyme removes the amino group from the adenosine base — and the resulting inosine is structurally very similar to guanosine. **The ribosome reads inosine as G.** So functionally, ADAR converts A to G in the messenger RNA.

\[Pause.\]

This is enormously useful biology that you probably did not know was happening. ADAR-mediated A-to-I editing is widespread in your own transcriptome — there are tens of thousands of edited sites, many of which alter the coding sequence of the resulting protein, in ways that subtly diversify your cellular function. The most famous example is the editing of the glutamate receptor GluR-B mRNA in your neurons, where ADAR2 converts a single A to I, changing one amino acid in the receptor and dramatically altering its calcium permeability. Disrupt ADAR2 in mice, and the mice have seizures because the unedited receptor lets too much calcium into the neuron. This is not exotic biology. This is everyday RNA editing, happening in your brain right now.

The natural substrate of ADAR is **double-stranded RNA**. ADAR specifically binds dsRNA regions in the cell, and it edits adenosines within those dsRNA regions. The double-stranded structure is the recognition motif. In nature, dsRNA forms in transcripts that have hairpins, or in regions where a sense transcript overlaps with an antisense transcript — those are the natural editing sites.

Now here is the move. **What if you could create a dsRNA structure at any spot on any mRNA you wanted, on demand?** What if you could deliver a designed guide RNA that base-pairs with a particular mRNA at a particular spot, creating a designer dsRNA region with one specific adenosine sitting at the center of it — and then bring ADAR to that spot, so it deaminates exactly that one adenosine and nothing else? You would have programmable, single-base RNA editing.

\[Pause.\]

That is exactly what REPAIR does. The system has two components. First, **dCas13b** — catalytically dead Cas13b, the variant Cox picked for REPAIR — fused to the deaminase domain of **ADAR2**. This is the editing protein, a sequence-targeted ADAR. Second, a **guide RNA** designed to base-pair with the target mRNA across a region of about 50 nucleotides, with the specific adenosine to be edited positioned at a particular spot opposite a mismatched cytidine in the guide. The mismatch is important — ADAR prefers to edit adenosines that are paired across from a cytidine, because the cytidine creates a slight local distortion in the duplex that flips the adenosine into the active site. The guide is designed so that the C in the guide sits exactly opposite the A you want to edit.

When you deliver this whole system to a cell, here is what happens. The guide RNA pairs with the target mRNA across the 50-nucleotide region, creating a designer dsRNA stretch with one specific A-C mismatch in the middle. The dCas13b-ADAR fusion binds the structure — dCas13b grips the guide via its normal crRNA scaffold, ADAR sees the dsRNA region and the A-C mismatch. ADAR deaminates the targeted adenosine to inosine. The ribosome eventually reads the edited mRNA and treats the inosine as guanosine. **A single A has been changed to G in the message.** No DNA editing. No cleavage. Just chemistry on the mRNA.

\[Pause.\]

Let me make the analogy explicit. **Instead of letting Cas13 destroy the message, you fuse it to ADAR. ADAR converts A to I, which is read as G. Cas13 brings ADAR to the right spot on the right mRNA.** That is REPAIR. Cas13 is no longer a destroyer. It is a transporter. It carries the editing enzyme to the address specified by the guide, and lets the editing enzyme do its chemistry.

The Cox 2017 paper showed that REPAIR worked. Specific A-to-G edits were made in target mRNAs at efficiencies of around 20 to 40 percent in mammalian cells. The team demonstrated correction of pathogenic mutations — mutations that, in DNA, cause disease — by editing the corresponding mRNA so the protein came out with the right amino acid. Specifically they showed correction of mutations associated with Fanconi anemia and X-linked nephrogenic diabetes insipidus, two genetic diseases. The point was proof of principle. REPAIR could edit disease-causing transcripts in human cells.

But there was a problem. The version of ADAR used in the original REPAIR — ADAR2's deaminase domain — turned out to have substantial off-target editing. ADAR's natural substrate is dsRNA, and the cell has lots of dsRNA. When you over-express ADAR fused to Cas13, the ADAR domain wants to edit other dsRNA regions too, even when Cas13 is busy parked somewhere else. The off-target editing pattern was widespread and bothersome.

The Zhang lab addressed this in 2018 with **REPAIRv2**, which used an engineered, hyperactive but more substrate-specific ADAR domain. REPAIRv2 dramatically reduced off-target editing while preserving on-target activity. There have been further generations since — better-engineered ADARs, smaller fusion proteins, codon-optimized constructs, different guide formats. The platform has matured. But the core conceptual move is what was published in 2017. **You can do programmable A-to-I — effectively A-to-G — RNA editing in mammalian cells using dCas13 fused to ADAR.** That is REPAIR.

---

## SEGMENT 8 — RESCUE — engineering ADAR to do C-to-U RNA editing

REPAIR gives you A-to-G editing on RNA. That is one out of twelve possible nucleotide conversions — A to G, A to C, A to U, C to A, C to G, C to U, G to A, G to C, G to U, U to A, U to C, U to G. If you want to broaden the menu of disease-causing mutations you could correct, you need more chemistry. The natural next question is whether you can do the other obviously useful single-base conversion: **C to U**.

C-to-U editing is the parallel of A-to-G in some sense — it is a deamination, like ADAR's chemistry, but on a different base. There is a family of human enzymes that do C-to-U editing on DNA, called **APOBECs**. APOBEC stands for **apolipoprotein B mRNA editing catalytic polypeptide**, named for the first member of the family that was characterized — APOBEC1, which edits the APOB messenger RNA to produce a shorter form of the apolipoprotein B protein in the intestine. So APOBEC1, in nature, is actually doing C-to-U editing on RNA. But most of the other APOBECs in your genome act primarily on DNA — they are part of antiviral defense, deaminating cytidines in viral DNA during reverse transcription.

You might think, then, that the obvious move for C-to-U RNA editing is to fuse dCas13 to APOBEC1, the natural RNA C-to-U editor. People have tried this, and it works to some extent, but APOBEC1 has its own substrate preferences and limitations.

\[Pause.\]

There is a cleverer move, which is what Zhang's lab — with first author **Omar Abudayyeh** — published in 2019. The paper described **RESCUE**, which stands for **RNA Editing for Specific C to U Exchange**. Same acronym style as REPAIR. The same naming convention.

Here is what RESCUE does. Instead of bolting APOBEC onto Cas13, the team took **ADAR2** — the same A-to-I deaminase used in REPAIR — and engineered its active site to deaminate cytidines instead of adenosines. They used directed evolution — they made libraries of ADAR2 variants with mutations in the active site, expressed them in cells along with a reporter that read out cytidine deamination activity, and selected the variants that gave the strongest C-to-U editing signal. After several rounds of selection, they had ADAR2 variants that had been re-engineered to act on cytidine.

So **RESCUE is dCas13 fused to an engineered ADAR variant that performs C-to-U editing on RNA.** Same scaffold, same guide RNA design principles, same mechanism of bringing the deaminase to a target site via base pairing with a guide. Just a different deaminase chemistry.

\[Pause.\]

Why does this matter? Because the menu of disease-causing mutations that REPAIR plus RESCUE together can address is substantially larger than what REPAIR alone covers. Many disease-causing mutations involve G-to-A or C-to-T transitions in the genome — those are the transitions that happen when DNA is damaged in particular ways, and they are common. To correct a G-to-A mutation at the mRNA level, you need A-to-G editing — that is REPAIR. To correct a C-to-T mutation, you need U-to-C editing — and U-to-C is the reverse of C-to-U, so RESCUE in that form doesn't directly do it; but C-to-U editing can correct certain other classes of disease mutations or modulate amino acid identity in specific ways. The point is that having two orthogonal editing chemistries — A-to-G and C-to-U — addresses a meaningfully broader swath of mutational space than having just one.

The off-target picture for RESCUE was worse than REPAIR — the engineered ADAR2 variant retained some A-to-I activity in addition to its new C-to-U activity, so you got a mix of edits in some contexts. There has been substantial subsequent engineering to improve the specificity. As of the mid-2020s, the field has multiple generations of A-to-I and C-to-U Cas13-deaminase fusions, with improving specificity profiles.

\[Pause.\]

I want to step back and underscore a conceptual point. The REPAIR-and-RESCUE story is, in a sense, the same conceptual story as the **base editing** story in DNA — which we covered in the CRISPR lecture, with David Liu's work on cytidine and adenine base editors. In both cases, the move is the same. You take a catalytically dead Cas protein, you fuse it to a deaminase, you target the fusion with a guide, and you change one base without cutting both strands of the polymer. The difference is just which polymer you are editing. DNA base editors edit chromosomes — the changes are permanent. RNA base editors edit messenger RNA — the changes are transient.

The same scientific group — Liu's lab on the DNA side, Zhang's lab on the RNA side — was thinking about the same idea at roughly the same time, in 2016 and 2017. Liu published cytidine base editing on DNA in 2016 with first author Alexis Komor; Zhang published REPAIR on RNA in 2017 with Cox. The two technologies are siblings. They share intellectual DNA. They are both expressions of the same insight, which is that **once you have a programmable nucleic-acid-binding scaffold, you can hand it any enzyme you want, and the fusion will do that enzyme's chemistry at a programmable address.**

That insight is one of the most important conceptual moves in modern molecular biology. It is the reason base editors exist. It is the reason prime editors exist. It is the reason REPAIR and RESCUE exist. It is the reason there are now Cas13 fusions to translation factors, to splicing factors, to RNA modification enzymes — to almost anything you can imagine wanting to do at a specific RNA address. The scaffold is universal. The cargo is whatever chemistry you need.

---

## SEGMENT 9 — Why RNA editing matters — the soft eraser argument

We have spent two segments on the mechanics of RNA editing — REPAIR for A-to-G, RESCUE for C-to-U. Let me now step back and tell you why this whole branch of technology matters at all, when DNA editing exists. Why would you ever choose to edit RNA, with all its messiness and transience, when you could edit DNA and make the change permanent?

There are three answers, and they are all really aspects of the same thing, which is that **transience is sometimes the goal**.

\[Pause.\]

The first answer is **safety**. DNA edits are permanent. If you make an unintended edit at an off-target site in the genome, that edit is there for the life of the cell. It will be replicated and inherited by every daughter cell every time that cell divides. If the off-target edit happens to be in an oncogene, you have just created a mutation that could give rise to a tumor years from now. The DNA editing field spends an enormous amount of effort minimizing off-targets precisely because there is no recourse if an off-target happens. With RNA editing, by contrast, an off-target edit lasts as long as that particular mRNA molecule lasts — usually hours, sometimes a day. Then it gets degraded by the normal turnover of cellular RNA, and the next freshly transcribed mRNA from the genome has no edit at all. **An RNA off-target is a self-erasing mistake.** That is a profound safety property for any therapy where you are worried about mis-targeting.

The second answer is **reversibility**. Some diseases are caused by transient or dynamic states — viral infections, acute inflammation, transient elevations of a particular protein. For these, you actively want a knob you can dial up and dial down. DNA editing is a chisel — once you cut, the change is set in stone. RNA editing is more like a thermostat — you set the level, and when you stop applying the system, the level returns to baseline. For chronic but controllable conditions — for example, if you wanted to lower expression of a particular protein during a specific phase of disease and then restore normal expression later — RNA-level intervention is the right tool.

The third answer is **post-mitotic cells**. Recall from the CRISPR lecture that the cell's precise repair pathway, HDR — homology-directed repair — only works in dividing cells. In post-mitotic cells like neurons, mature cardiomyocytes, and adult muscle, HDR is essentially unavailable. So if you want to install a precise DNA edit in those cells, you are stuck with base editing or prime editing — both of which have their own limitations, particularly for adenine and cytidine base editing where you are constrained to specific transitions. RNA editing, by contrast, works in post-mitotic cells just fine, because mRNA transcription and editing happen continuously regardless of cell-cycle state. **If you want to make a correction in a neuron, RNA editing may be the easiest option.**

\[Pause.\]

Here is the analogy I want you to hold. **RNA editing is a soft eraser. Reversible, transient, no permanent changes. If you make a mistake, the cell makes more mRNA tomorrow and you are back to baseline.** DNA editing is a chisel — precise, permanent, no take-backs. They are different tools for different jobs. For genetic diseases where you want to install a correct gene for the life of the patient, you want a chisel. For transient interventions, off-target-sensitive contexts, or post-mitotic cells, you want a soft eraser.

The trade-off, of course, is that an RNA edit has to be re-administered periodically, because the edited mRNAs get degraded and the genome keeps producing new unedited mRNAs. RNA editing is not a one-shot therapy in most cases. It is a periodic dosing schedule, like siRNA drugs, where you re-treat every few weeks or months to maintain the edit at the population level. For some indications that is a feature — it gives you control. For others — for example, a disease where you want a one-shot lifetime cure — it is a bug. The trade-off depends on the indication.

\[Pause.\]

This soft-eraser framing also explains why **RNA-targeting therapies in general** — including siRNA, antisense oligonucleotides that recruit RNase H, and now Cas13-mediated knockdown and Cas13-ADAR editing — have a different risk-benefit profile than DNA editing therapies. The whole RNA-level family of medicines shares the property that the genome is unchanged. That is a real safety advantage, and it has driven the rapid clinical advance of siRNAs and ASOs over the last decade. Cas13-based therapies inherit that same advantage, and that is why several large biotechs are willing to bet substantial capital on developing them, despite the fact that no Cas13-based therapy has yet reached FDA approval.

We are now at the one-hour mark in this lecture, and I want to pause here, before we shift gears and talk about the diagnostic side of Cas13 — SHERLOCK, DETECTR, the COVID test, and the broader CRISPR-Dx universe. So let's take a break. Stand up, get water, talk to the person next to you. I'll see you back in ten minutes.

\[BREAK\]

---

## SEGMENT 10 — SHERLOCK and SHERLOCKv2 — turning Cas13 into a diagnostic

Welcome back. Let's switch gears completely. We have spent the first hour on Cas13 as a therapeutic tool — knockdown, REPAIR, RESCUE, the soft-eraser framing. Now we shift to the diagnostic side, which arguably matters more in the short term and which has already produced one FDA-authorized product and a generation of academic and commercial activity.

The keyword here is **SHERLOCK**, which stands for **Specific High-sensitivity Enzymatic Reporter unLOCKing**. The acronym is again a stretch — but the brand has stuck. SHERLOCK was published in _Science_ in 2017 by Zhang's lab, with first author Jonathan Gootenberg and Omar Abudayyeh as co-first author. The same two trainees who were working on Cas13's basic biology and on REPAIR were simultaneously turning the collateral cleavage activity into a diagnostic platform. They were busy people.

\[Pause.\]

Let me describe SHERLOCK from scratch, building on what we already know about collateral cleavage. The conceptual move, as I sketched in Segment 4, is to put Cas13 in a tube along with three things. First, a **guide RNA** designed to match the target sequence you want to detect — say, the SARS-CoV-2 genome, or the Zika virus genome, or a specific human cancer mutation. Second, the **sample** you want to test — patient saliva, blood, swab. Third, a **fluorescent reporter RNA** — a short single-stranded RNA molecule with a fluorophore on one end and a quencher on the other. While the reporter is intact, the quencher absorbs the light from the fluorophore, and the tube reads dark.

If the target sequence is in the sample, Cas13 binds and cuts its target, gets activated, and then starts trans-cleaving everything single-stranded — including the reporter. The reporter is cleaved, the quencher floats away, the fluorophore shines. Tube reads bright. Positive result.

If the target sequence is not in the sample, Cas13 has nothing to activate it. Reporter stays intact. Tube reads dark. Negative result.

\[Pause.\]

Now, there is one more piece you need to get SHERLOCK to work at clinically useful sensitivity. The Cas13 reaction alone, even with the trans-cleavage amplification of the fluorescent signal, requires more target molecules than are typically present in a real clinical sample. To bring the sensitivity up to the level where you can detect, say, ten copies of viral RNA per microliter — which is the realm where you start competing with PCR for clinical utility — you need a pre-amplification step. SHERLOCK uses a technology called **RPA**, which stands for **recombinase polymerase amplification**. RPA is an isothermal nucleic-acid amplification method — meaning you run it at a constant temperature, no thermal cycling needed — that can amplify a target sequence about a million-fold in twenty minutes at 37 to 42 degrees Celsius.

So the full SHERLOCK workflow is: take the sample, do an RPA amplification of the target sequence, transcribe the amplified DNA to RNA using T7 polymerase, then run the Cas13-plus-guide-plus-reporter reaction on that RNA. The whole thing can be done in about thirty to sixty minutes, at constant temperature, with very simple equipment. Compare that to standard PCR, which requires thermal cycling, more expensive equipment, and typically a dedicated lab. SHERLOCK can be done in a field setting with a heat block and a fluorimeter — or, in the simplest implementations, with a paper strip you can read with your eyes.

\[Pause.\]

The paper-strip version is worth pausing on, because it is what makes SHERLOCK conceptually different from PCR as a deployment platform. The reporter in the simplest SHERLOCK format is a lateral-flow strip — like a pregnancy test — that has been functionalized so that cleavage of a reporter RNA by activated Cas13 changes which line on the strip lights up. Drop a few microliters of your reaction onto the strip, wait two minutes, look at it. Two lines means positive. One line means negative. **It is a CRISPR-based pregnancy test, but for any nucleic acid sequence in the world.**

That is the headline. SHERLOCK is a programmable, paper-strip diagnostic for arbitrary nucleic acid sequences, at clinically relevant sensitivity, with minimal equipment. Sherlock the detective. Hence the brand.

In 2018, Zhang's lab published **SHERLOCKv2**, which improved on the original in several ways. SHERLOCKv2 added multiplexing — different Cas13 variants from different bacteria have slightly different RNA cleavage preferences, so you can use one Cas13 with one reporter to detect one target, and another Cas13 with a different reporter to detect a different target, all in the same tube. SHERLOCKv2 also improved the quantitative readout — the original SHERLOCK was essentially binary, while v2 introduced ways to quantify how much target was in the sample. And SHERLOCKv2 added compatibility with the paper-strip lateral-flow format from day one.

\[Pause.\]

Here is the analogy that I want you to walk away with. **SHERLOCK is Cas13 plus a fluorescent reporter RNA. When Cas13 finds the virus, it chews up everything, including the reporter, and the well lights up.** That is the entire conceptual move. Take a quirky, somewhat embarrassing biochemical property — collateral cleavage — and engineer a system where that property is the readout you want. Bug becomes feature. Tube goes dark to bright. Diagnostic platform.

The Zhang lab spun out a company called **Sherlock Biosciences** to commercialize the platform. We will get to Sherlock and to its competitor Mammoth in a couple of segments.

---

## SEGMENT 11 — DETECTR and the broader CRISPR-Dx landscape

SHERLOCK was not the only CRISPR-based diagnostic platform that emerged in the late 2010s. Around the same time, a different group, working with a different Cas protein, came up with a closely related platform. The group was **Jennifer Doudna's lab** at UC Berkeley — yes, the same Doudna from the 2012 Cas9 paper — and the platform was called **DETECTR**, which stands for **DNA Endonuclease Targeted CRISPR Trans Reporter**.

DETECTR was published in _Science_ in 2018, with first author **Janice Chen**, who was a Doudna graduate student. The Cas protein was not Cas13. It was **Cas12a**, formerly known as Cpf1 — a different CRISPR effector, from type V, that targets DNA rather than RNA. Cas12a is also a programmable single-component nuclease, with a guide RNA, that cuts double-stranded DNA. So at first you might think Cas12a would not be useful for collateral-cleavage-based diagnostics, because DNA cleavage is sequence-specific in the same way Cas9 cleavage is.

But Chen and Doudna discovered something surprising. **Cas12a, after it cuts its specific double-stranded DNA target, also has collateral activity — but the collateral activity is single-stranded DNase activity, not RNase.** Once activated by binding and cleaving a target dsDNA molecule, Cas12a indiscriminately chews up nearby single-stranded DNA molecules. It is the DNA-version analog of Cas13's RNase collateral activity.

\[Pause.\]

So DETECTR is, in mechanism, the DNA-targeting counterpart of SHERLOCK. The platform uses Cas12a, with a guide DNA — sorry, a guide RNA targeting a DNA — and a single-stranded DNA reporter with a fluorophore-quencher pair. When the target DNA is in the sample, Cas12a finds it, cuts it, gets activated, and trans-cleaves the ssDNA reporter, lighting up the tube. With a pre-amplification step — typically RPA again, or sometimes another isothermal method called LAMP — DETECTR achieves the same kind of clinically relevant sensitivity as SHERLOCK.

The relationship between SHERLOCK and DETECTR is one of those cases in science where two competing groups discover essentially the same concept independently, around the same time, using closely related biology. The conceptual core is identical: target binding by a programmable Cas effector activates a sequence-nonspecific collateral nuclease activity that chews up reporter molecules in the same tube, generating a fluorescent signal that reports presence of the target. Cas13 does it for RNA targets via RNase collateral activity. Cas12a does it for DNA targets via ssDNase collateral activity. Both work. Both got commercialized.

The Doudna group spun out a company called **Mammoth Biosciences** to commercialize DETECTR. So now there are two companies — Sherlock Biosciences and Mammoth Biosciences — each named after their platform, each with venture funding, each in the CRISPR-diagnostics space. Their pipelines overlap. The competition between them has shaped a lot of the CRISPR-Dx commercial landscape.

\[Pause.\]

Beyond SHERLOCK and DETECTR, the broader CRISPR-Dx landscape includes a growing catalogue of platforms that exploit various flavors of Cas-protein collateral activity. There is **HOLMES**, a Cas12-based platform from a Chinese group. There is **STOPCovid**, a streamlined SHERLOCK variant developed in Zhang's lab during the early pandemic. There are platforms that combine CRISPR detection with newer amplification chemistries, with electrochemical readouts, with smartphone-based fluorescence imaging — the space has gotten genuinely diverse.

The conceptual point I want you to hold is that **CRISPR-Dx is a real category of nucleic acid diagnostics now**, alongside PCR, isothermal amplification methods like LAMP, and traditional immunoassays. It does not replace any of those — PCR remains the gold standard for high-throughput clinical labs, immunoassays remain the workhorses for antigen-based detection — but CRISPR-Dx occupies a useful niche, particularly for point-of-care detection with minimal equipment.

The two big advantages of CRISPR-Dx, conceptually, are **programmability** and **specificity**. Programmability: a new disease pops up, you sequence the pathogen, you design a new guide RNA, you have a diagnostic test in a week. Compare that to antibody-based tests, which require months of immunization, hybridoma generation, and characterization. Specificity: Cas13 and Cas12 can distinguish single-nucleotide differences in their target sequence, because R-loop formation is sensitive to mismatches in critical positions. So CRISPR-Dx can in principle distinguish closely related pathogen strains, or call out specific cancer mutations, in ways that broader nucleic acid detection methods struggle with.

---

## SEGMENT 12 — Cas13 and COVID — the Mammoth and Sherlock pandemic tests

The whole CRISPR-Dx space went from "interesting academic platform" to "actual product on the market" in early 2020, when COVID-19 hit and the demand for nucleic acid diagnostics exploded. SHERLOCK and DETECTR both pivoted their respective companies hard toward COVID detection, and within a few months, both had FDA Emergency Use Authorization for SARS-CoV-2 detection tests.

The Sherlock Biosciences product — **Sherlock CRISPR SARS-CoV-2 Kit** — received FDA Emergency Use Authorization in May 2020. It was the first CRISPR-based diagnostic to ever receive FDA authorization for any purpose. The test used SHERLOCK chemistry — RPA amplification followed by Cas13 detection with a fluorescent reporter — and was designed for use in clinical laboratories with appropriate equipment. It detected SARS-CoV-2 RNA at sensitivities competitive with PCR.

Mammoth Biosciences, similarly, developed a Cas12-based DETECTR test for SARS-CoV-2 and received Emergency Use Authorization a bit later, in collaboration with diagnostic partners. There were lateral-flow strip prototypes — paper-strip COVID tests using DETECTR chemistry — that were demonstrated in research labs and reported in papers. The dream of a paper-strip, 30-minute, point-of-care CRISPR COVID test was, briefly, a real and tangible thing in the pandemic.

\[Pause.\]

I want to be honest about how the CRISPR-Dx story played out in COVID, because the headline version of it is more triumphant than the reality. The reality is more nuanced. CRISPR-Dx tests for SARS-CoV-2 did get authorized. They did get deployed in some clinical settings. They demonstrated, for the first time at scale, that CRISPR-based diagnostics could compete with traditional methods. That is a real achievement, and the field should be proud of it.

But in absolute terms, the CRISPR-Dx tests did not dominate the COVID diagnostic landscape. The bulk of clinical COVID testing was done with conventional PCR, and the bulk of at-home consumer testing was done with antigen lateral-flow strips that detect SARS-CoV-2 nucleocapsid protein with antibodies — not nucleic acid at all. The CRISPR-Dx tests occupied a niche but did not become the standard. Why?

Several reasons. The CRISPR tests had to compete with PCR on sensitivity and with antigen tests on cost and ease of use, and they didn't have a decisive advantage on either axis. PCR was already widely deployed and had massive infrastructure behind it. Antigen tests were cheaper to manufacture at scale. The CRISPR tests had a real role — they could do programmable strain detection, they could in principle pick up new variants quickly — but they did not have an order-of-magnitude advantage on any single dimension that would have made them sweep the market.

\[Pause.\]

The lesson, in retrospect, is the lesson of every new diagnostic platform. Demonstrating that a new platform works is necessary but not sufficient. To displace incumbent platforms in clinical use, you need an order-of-magnitude advantage on something — cost, sensitivity, speed, ease of use — that the existing platforms cannot match. CRISPR-Dx demonstrated that it could match PCR on sensitivity, that it could match antigen tests on speed for some implementations, that it could do programmable detection in ways neither competitor could. But it did not have a single dimension where it was ten times better, and so it occupied a niche rather than replacing the incumbents.

Where CRISPR-Dx may yet prove its real value is in scenarios that play to its programmability strengths. **New pathogen emerges, you sequence it Monday, you design a guide RNA Tuesday, you have a diagnostic test by Friday.** That capability — fast platform reconfiguration in response to a new threat — is what CRISPR-Dx offers that PCR and antibody-based tests do not. PCR primers can be designed quickly too, but the depth of the assay-validation infrastructure for CRISPR-Dx platforms may eventually become a real differentiator for pandemic preparedness, biosurveillance, and detection of rare or novel pathogens.

Here is the analogy worth holding. **The SHERLOCK COVID test was the proof that CRISPR can do diagnostics: a paper strip, 30 minutes, sensitive enough to compete with PCR.** Whether that proof translates into the dominant diagnostic modality of the next decade is a separate question. But the door has been opened. The platform is real. The companies are still operating, still developing new tests, still pushing the limits of what programmable nucleic acid detection can do.

---

## SEGMENT 13 — Tessera Therapeutics and the RNA-editing therapeutic pipeline

Let me now take you to the therapeutic side of the Cas13 universe in detail, because there is a real biotech ecosystem trying to build drugs out of these tools, and you should know who is doing what.

The most visible single company working in Cas13-adjacent RNA editing space is **Tessera Therapeutics**, founded in 2018 by Flagship Pioneering — the same biotech incubator that founded Moderna. Tessera's pitch is not exactly Cas13, but it sits in the same conceptual neighborhood, and it is worth understanding how they have positioned themselves. Tessera's platform is called **Gene Writing**, and what they are pursuing is a class of programmable genetic engineering tools that combine recognition modules — including, in some constructs, RNA-guided components similar to CRISPR effectors — with **mobile genetic element machinery** like reverse transcriptases and integrases. The idea is to write large pieces of genetic information into the genome, or to make precise small edits, using engineered enzymes derived from natural mobile elements.

Tessera's pipeline has included both DNA-level and RNA-level programs. The RNA-level programs use what they call **RNA Gene Writers** — engineered enzymes that can install precise edits in RNA. While Tessera has been somewhat opaque about the exact mechanism of each program — they are a private company and proprietary about specifics — the general architecture pulls from the same conceptual well as REPAIR and RESCUE. Programmable RNA-binding scaffolds plus engineered editing chemistry, delivered via lipid nanoparticles or AAVs.

Tessera has raised something like a billion dollars in private financing through 2024. They have a substantial preclinical pipeline. They are pursuing what they describe as "writing" of large genetic information — possibly entire genes — in a sequence-specific way, using their gene-writer platforms. The exact balance of their pipeline between RNA-level and DNA-level programs has shifted over the years. As of 2024 and 2025, their RNA-editing assets remained part of their broader story, but the company's public narrative had increasingly emphasized DNA-writing capabilities.

\[Pause.\]

Beyond Tessera, there are several other companies and academic programs pursuing Cas13-based or Cas13-adjacent RNA editing therapeutics. Let me give you a survey, not exhaustive.

**Mass General Brigham** — the Boston hospital system — has an active research program around in-vivo RNA editing for genetic diseases, with academic collaborators at Harvard and MIT, much of it built on Cas13-deaminase chemistry. The therapeutic indications include both rare genetic diseases — where a single point mutation in a coding sequence causes disease, and you would like to correct it at the RNA level — and more common indications where you might want to dial down a transcript transiently.

**Korro Bio**, a public company founded around RNA editing, has been pursuing oligo-based RNA editing — closer to what we are about to discuss with Wave Life Sciences' AIMer — but they sit in the same therapeutic landscape and they are part of the conversation.

**Beam Therapeutics**, primarily a DNA base-editing company, has also discussed RNA editing in their pipeline at various points, although their main focus remains DNA.

**Various academic spinouts and smaller companies** are pushing Cas13-mediated knockdown for viral infections, for cancer indications, for neuromuscular diseases like Duchenne muscular dystrophy and ALS. These pipelines are mostly in preclinical or very early clinical phases as of 2026. None have yet reached FDA approval. The bar is high — the field has to demonstrate both safety, particularly around collateral cleavage and immune responses to bacterial Cas13 proteins, and durable efficacy. The clinical readout cycle is long.

\[Pause.\]

The big-picture point about the Cas13 therapeutic landscape is that it is **earlier than the Cas9 landscape**, by perhaps five to seven years. Cas9 therapies started reaching clinical trials in the late 2010s; the first one, Casgevy, was approved in 2023. Cas13-based therapies have not yet reached that milestone. The science is real, the companies are funded, the preclinical data is improving, but the field is in the position Cas9 was in around 2018 — proof of principle in animals, the first IND filings, the beginning of the regulatory conversation about a new modality.

This timeline lag matters for two reasons. First, it means that the regulatory pathway for Cas13 therapies is not yet well established. The FDA has experience with Cas9 therapies now; it does not yet have equivalent experience with Cas13-mediated knockdown or editing. The first Cas13 INDs will be the regulatory pioneers. Second, the lag means that there is still substantial room for improvement in the underlying tools. Better Cas13 variants with lower collateral activity, better ADAR domains with cleaner editing profiles, better delivery vehicles — all of these are improving year over year. The Cas13 therapies that reach the clinic in 2028 will be substantially better than the ones being designed in 2022. That is one reason the timeline lag may turn out to be a feature, not just a delay.

---

## SEGMENT 14 — AIMer and Wave Life Sciences — RNA editing without a Cas protein

Now I want to take you outside of CRISPR entirely, because there is a parallel RNA-editing technology that has been making faster clinical progress than Cas13-based RNA editing, and you should understand it. The technology is called **AIMer**, and the company developing it is **Wave Life Sciences**.

AIMer stands for **ADAR-mediated Inducing Modulator of editing for RNA**. Like a lot of biotech names, it is a bit of a stretch, but the platform is real and the clinical data is real. Here is the core idea.

Recall that ADAR — the human enzyme we use for A-to-I editing — is endogenous to your cells. It is already there, in your cytoplasm and in your nucleus, all the time, doing its normal job of editing dsRNA structures in your transcriptome. Its natural substrate is double-stranded RNA. ADAR sees a dsRNA region and edits adenosines within it.

So here is the move. **What if, instead of delivering a Cas13-ADAR fusion to a patient, you just delivered a chemically modified oligonucleotide that base-pairs with a target mRNA, creating a designer dsRNA structure that the cell's own endogenous ADAR will recognize and edit?**

\[Pause.\]

This is the AIMer concept. No Cas protein. No protein at all, in fact. Just a chemically modified single-stranded oligonucleotide, typically about 30 to 50 nucleotides long, designed to base-pair with the target mRNA at the spot you want to edit, with the target adenosine positioned opposite a mismatched cytidine in the oligo — same A-C mismatch principle as REPAIR. The oligo base-pairs with the mRNA, creating a local dsRNA region. The cell's endogenous ADAR sees this region, recognizes it as a substrate, flips the targeted adenosine into its active site, and deaminates it to inosine. The ribosome reads inosine as G. A single A has been edited to G.

Here is the analogy. **AIMer is skip-the-Cas RNA editing. Chemically modified oligos that recruit the cell's endogenous ADAR to a target site; no protein, just chemistry.**

\[Pause.\]

The key innovation that makes AIMer work in vivo is the chemistry of the oligonucleotide itself. Just like siRNAs needed extensive chemical modification — 2'-O-methyl groups, 2'-fluoro modifications, phosphorothioate linkages, GalNAc conjugation — to become stable enough and well-delivered enough to work as drugs, AIMer oligos need their own chemistry to function. Wave Life Sciences has developed proprietary chemical modifications, including stereochemically pure phosphorothioate linkages — they call this **stereopure chemistry**, where every chiral center in the phosphorothioate backbone is set deliberately rather than left as a racemic mixture — that give the oligos the right combination of nuclease stability, ADAR recruitment, and in-vivo pharmacokinetics.

Wave's AIMer pipeline as of 2024 and 2025 included clinical-stage programs in indications like alpha-1 antitrypsin deficiency — a genetic disease where a single point mutation in the SERPINA1 gene produces a misfolded protein that damages the liver. The disease-causing mutation is a single G that, in the messenger RNA, would need to become an A — but if you read the complementary strand, you can frame it as a G-to-A correction that becomes an A-to-G correction at the protein-coding level, which is exactly what ADAR can do. The AIMer approach delivers an oligo to the liver — using GalNAc conjugation for hepatocyte uptake, same trick as siRNA — that base-pairs with SERPINA1 mRNA and recruits endogenous ADAR to flip the disease-causing letter back to wild type. The patient's own ADAR does the chemistry. The drug is just the address label.

\[Pause.\]

This is, in some sense, the cleanest possible version of RNA editing. No bacterial protein. No immune response to a foreign Cas13. No AAV delivery problem. Just a chemically modified oligo, injected subcutaneously, that travels to the liver and recruits the cell's own editing enzyme. The closest analog in the existing approved-drug landscape is siRNA — same kind of oligo, same kind of delivery, just doing editing instead of knockdown.

The trade-off, compared to Cas13-based editing, is that AIMer is dependent on the cell having sufficient endogenous ADAR expression at the relevant site. The liver, where ADAR1 is abundantly expressed, is a great target tissue. Other tissues with lower ADAR expression are harder. Cas13-ADAR fusions can in principle work anywhere you can deliver them, because the editing enzyme is part of the cargo. AIMer can only work where the cell already has ADAR running. So AIMer is constrained by the natural expression pattern of ADAR. Cas13-based editing is constrained by delivery.

The two approaches are complementary. They occupy different niches in the RNA-editing therapeutic landscape. As of 2026, AIMer is clinically further along — Wave Life Sciences has reported clinical data from at least one AIMer program — but Cas13-based RNA editing has the potential to address tissues and indications that AIMer cannot reach. **The therapeutic future of RNA editing is almost certainly going to involve both modalities, in different contexts, for different patients.**

This is, I think, an important conceptual point about how new therapeutic modalities mature. They do not necessarily compete in a winner-take-all way. They specialize. The same general capability — programmable RNA editing — splits into multiple technological implementations, each best suited to particular tissues, particular indications, particular delivery requirements. You will have Cas13-ADAR fusions for some patients. You will have AIMer oligos for others. You will probably eventually have other implementations we have not yet built. The capability — change one letter in an mRNA without touching the genome — is the durable thing. The specific technology that implements that capability for any given patient will keep evolving.

---

## SEGMENT 15 — Cas13 in cancer and viral infection — the transient-therapy applications

I want to spend a segment specifically on therapeutic applications of plain Cas13-mediated knockdown — not RNA editing, just knockdown, the default behavior we covered in Segment 6. Because there are some classes of disease where transient, RNA-level knockdown is exactly the right intervention, and Cas13 has some advantages in those contexts.

The most obvious application is **viral infection**. Many viruses store their genomes as RNA — coronaviruses, influenza, hepatitis C, dengue, Zika, polio, rabies, Ebola, HIV during certain phases — and a Cas13 system targeting the viral RNA can in principle cut up the viral genome directly, blocking replication. This is essentially using Cas13 as a programmable antiviral, where the guide RNA encodes which virus you are targeting.

Several academic groups and a few biotech startups have developed Cas13-based antiviral candidates. The most prominent academic work came from **Cameron Myhrvold's group**, then in the Sabeti lab at the Broad and then at Princeton, who developed **PAC-MAN**, which stands for **Prophylactic Antiviral CRISPR in huMAN cells**. PAC-MAN was a Cas13d-based antiviral targeting SARS-CoV-2 RNA, demonstrated in cells and in animals during the early pandemic. The idea was that you could deliver Cas13d plus guides against conserved regions of the viral genome — via AAV or LNP — and create cells that were resistant to viral replication.

PAC-MAN did not become a clinically deployed therapy during COVID. The delivery problem was hard, the antiviral landscape filled up rapidly with vaccines and antiviral small molecules, and PAC-MAN sits in the category of "interesting preclinical approach that did not displace the incumbents this time." But the concept — Cas13 as a programmable antiviral against RNA viruses — remains attractive for future pandemic preparedness. The next time a novel RNA virus emerges, the platform is ready in a way it was not in early 2020.

\[Pause.\]

The other big therapeutic category for Cas13 knockdown is **cancer**. Cancers are caused, in many cases, by overexpression or mutation of specific oncogenes — KRAS, MYC, BCL2, and many others. Lowering the expression of those oncogenes can sometimes shrink the tumor. siRNAs against oncogenes have been tried clinically, with mixed results — the delivery problem to tumor tissue is particularly hard. Cas13 against oncogenes offers some potential advantages: better tissue specificity through cell-type-specific promoters in AAV delivery; better long-term knockdown through stable expression of the Cas13 system in transduced cells; potential to combine multiple guides in one construct to hit several oncogenes at once.

Companies and academic groups working on Cas13-mediated knockdown for cancer have pursued various indications — particularly in cancers where there is a clear single dominant oncogene driving the disease. As of 2026, none of these have reached late-stage clinical trials, but the preclinical case is strong enough that the area continues to receive investment.

\[Pause.\]

There is a third category I want to mention, which is **dominant-negative genetic diseases**. Some genetic diseases — like certain forms of Huntington's disease, certain ALS variants, certain neurodegenerative diseases — are caused by a single mutant allele producing a toxic protein. The patient also has a healthy wild-type allele on their other chromosome, which produces functional protein. The disease is dominant-negative because the toxic mutant protein actively harms the cell, even in the presence of normal protein.

For these diseases, the therapeutic goal can be **allele-specific knockdown**. You want to lower the expression of the mutant allele while leaving the wild-type allele alone. Cas13, with its ability to distinguish sequence differences of as little as a single nucleotide under the right conditions, is in principle a candidate platform for this — you design a guide RNA that matches the mutant allele specifically, with a mismatch against the wild-type allele, and Cas13 should preferentially cut the mutant transcript.

In practice, the discrimination is hard. Single-nucleotide allele-specific knockdown has been demonstrated in cellular assays with Cas13, but achieving it robustly in patient tissues with adequate selectivity is an active research challenge. siRNAs and ASOs have been pursued for the same purpose with mixed success. The conceptual principle is sound; the engineering is hard.

---

## SEGMENT 16 — Off-targets in Cas13 — RNA versus DNA off-targets

Let me talk about off-targets, because the off-target story for Cas13 is genuinely different from the off-target story for Cas9, and you should understand the difference.

For Cas9 — recall from the CRISPR lecture — the main off-target concern is **unintended edits at genomic sites that are similar to but not identical to the target site**. A 20-nucleotide guide can tolerate some number of mismatches against an off-target genomic locus and still cut, especially if the mismatches are far from the PAM and far from the seed region. The unintended edits are permanent, because they are DNA edits, and they accumulate in the genome of every cell that gets exposed to the editing system. For DNA editing, off-targets are the single most important safety concern.

For Cas13, the off-target landscape splits into two different categories that you need to keep separate.

\[Pause.\]

The first category is **on-target sequence-specificity off-targets** — places where the Cas13 guide RNA, by Watson-Crick base pairing, matches an unintended transcript and cuts or edits it. This is the direct analog of Cas9 off-targets, but at the RNA level. It depends on how cleanly the guide discriminates between intended and unintended targets. Cas13 has, in general, somewhat better tolerance for distinguishing similar sequences than Cas9 does, because the guide is longer — 28 to 30 nucleotides versus Cas9's 20 — and because the geometry of the RNA-RNA duplex with Cas13 imposes some specificity constraints. Still, sequence-specific off-targets in the transcriptome do happen, and they have to be characterized for any clinical candidate.

The good news, as we discussed in Segment 9, is that **RNA off-targets self-erase**. An unintended cut in some random mRNA molecule just removes that one molecule from the cellular pool. The cell makes more of that mRNA tomorrow. The off-target effect is transient.

The second category is **collateral-cleavage off-targets** — the broader chewing-up of bystander RNAs that we discussed in Segment 4. This is unique to Cas13 (and to Cas12, in the diagnostic context). When Cas13 activates on its target, the HEPN domains open up and the protein becomes a generalized RNase for a while, cutting random single-stranded RNA in the vicinity. This affects transcripts that do not match the guide sequence at all — they just happen to be near the activated enzyme.

\[Pause.\]

Collateral off-targets are particularly concerning in mammalian cells because they can significantly perturb cellular RNA homeostasis, depress cell fitness, and induce stress responses that confound the interpretation of any therapy. A 2022 paper from the Levin lab — Jin-Soo Kim's group, actually — showed that several commonly used Cas13 variants, including RfxCas13d, caused measurable global RNA degradation and reduced cell viability in mammalian cells. The implication was that even the favored therapeutic variant was not as clean as the original 2018 paper had suggested.

The field's response to this has been to engineer Cas13 variants with reduced collateral activity. There are now multiple published variants — some from Zhang's lab, some from Hsu's lab, some from independent groups — that have engineered mutations in the HEPN domains or in the protein-RNA interface to dial down the trans-cleavage activity while preserving cis-cleavage. The engineering is ongoing and the variants are improving year over year. Whether the final Cas13 therapeutics will be cleaner than the current generation, by a meaningful margin, is one of the open questions for the field.

\[Pause.\]

There is a third off-target consideration that is specific to fusion proteins like REPAIR and RESCUE — the **fusion-protein off-targets**. When you fuse dCas13 to ADAR, the ADAR domain is a deaminase that has its own substrate preferences. It will edit adenosines wherever it can reach them. When the fusion is brought to a target by the guide RNA, the ADAR domain edits the intended adenosine. But the ADAR domain is also constantly bumping into other dsRNA structures in the cell — endogenous dsRNA, hairpins in other transcripts — and it can edit those too, even when the Cas13 part is not engaged. This is what is sometimes called **promiscuous deamination** or **fusion-protein off-target editing**, and it is a separate concern from the Cas13-driven off-targets.

The Zhang lab's REPAIRv2 paper, with the engineered ADAR domain, was specifically designed to address this kind of promiscuous editing. By engineering ADAR for higher activity at specific sites and lower activity at general dsRNA, they reduced the global off-target editing footprint substantially. The engineering has continued in subsequent generations.

So the takeaway. **Off-targets in Cas13 are different from off-targets in Cas9 in three important ways: they self-erase because they are at the RNA level; they include collateral-cleavage events that are non-sequence-specific; and for editing fusions, they include promiscuous editing by the fused deaminase domain.** The safety story is therefore different. The bar is in some ways lower — RNA off-targets are less catastrophic than permanent DNA off-targets — but the breadth of off-target concerns is wider, because there are more failure modes.

---

## SEGMENT 17 — Collateral cleavage — therapy concern versus diagnostic feature

Let me return one more time to the collateral cleavage story, because it deserves a careful summary segment. Collateral cleavage is the single most consequential biochemical feature of Cas13, and the story has two faces that need to be told together.

On the **therapy side**, collateral cleavage is a problem. We have discussed it. When activated Cas13 chews up bystander RNAs in a cell, the cell suffers. Housekeeping transcripts get cut. Ribosomal RNA gets cut. Translation falters. Stress responses fire. The cell either dies, or it survives in a depressed state, or — most dangerously — it survives in a state that confounds interpretation of your therapy. If you wanted to knock down KRAS in a tumor cell and you observed that the tumor cell died, was that because KRAS was knocked down, or because collateral cleavage killed the cell directly? You cannot tell. The collateral activity confounds the very mechanism you are trying to study.

For clinical therapy, this matters even more. If your Cas13 therapy works because of collateral toxicity in the targeted cell, rather than because of specific knockdown of the disease transcript, then your safety profile is essentially the safety profile of "Cas13 expressed in this cell type" — not the safety profile of "knocking down this specific target." That is a very different regulatory conversation. The whole point of programmable targeting is to achieve a specific effect. If the effect is non-specific, you are using an expensive bacterial nuclease to do the work that any RNase could do less precisely and more cheaply.

The engineering response has been to develop Cas13 variants with reduced collateral activity, as we discussed. The biological reality is that some level of collateral activity probably cannot be eliminated entirely, because the HEPN architecture is fundamentally built around target-binding-dependent activation of nuclease activity. There may always be some bystander cleavage. The question is whether the field can engineer it down to a level where the therapeutic ratio — on-target effect divided by off-target damage — is high enough for clinical utility.

\[Pause.\]

On the **diagnostic side**, collateral cleavage is the entire point. It is the signal-amplification mechanism. The whole CRISPR-Dx platform — SHERLOCK, DETECTR, and all the variants that came after — depends fundamentally on the fact that one activated Cas13 molecule can chew up many reporter molecules. That is what gives you the sensitivity to detect tiny amounts of target nucleic acid. Without collateral cleavage, you would have to detect each individual Cas13-target binding event directly, which is much harder and slower and less sensitive.

So the same biochemical feature — target-binding-dependent activation of nonspecific nuclease activity — is the central problem for therapy and the central virtue for diagnostics. **You cannot make Cas13 cleaner for therapy without making it less useful for diagnostics, and vice versa.** That is a real tension. The two communities — the therapeutic developers and the diagnostic developers — actually want opposite things from the same enzyme.

In practice, this means the engineered Cas13 variants split. Some Cas13 variants are engineered for low collateral activity, for therapeutic use. Some Cas13 variants are engineered for high collateral activity, for diagnostic sensitivity. Both populations of variants are being developed. The variant that ends up in a therapy will be different from the variant that ends up in a diagnostic. Same family of proteins, different optimization targets.

\[Pause.\]

I want to underscore why this is a beautiful instance of how biology works. Collateral cleavage was not designed by anyone. It was just what type VI CRISPR systems happened to evolve in bacteria, as part of their phage defense — when activated by a viral RNA, Cas13 chews up all the cellular RNA, the cell dies, the phage cannot complete its life cycle, the population survives. It is an altruistic suicide mechanism in bacterial defense.

When humans pulled this enzyme out of bacteria and started using it as a tool, that suicide mechanism came along for the ride. We did not ask for it. We did not design it. It was just there, encoded in the protein, a leftover of bacterial biology. And we have spent ten years figuring out which applications love it and which applications hate it. The diagnostic platform was, in a sense, the natural fit for this enzyme — because the bacterial cell-suicide function in nature is structurally just an amplification mechanism that takes a tiny amount of phage RNA and translates it into a large cellular response. We have repurposed exactly that amplification mechanism for our own readout.

The lesson is that **natural enzymes have their own opinions about what they want to do**, and the applications we build around them are partly a discovery of those opinions. Cas13 is happy to be a diagnostic enzyme. Cas13 is unhappy being a clean therapeutic nuclease. Engineering can push it in either direction, but the gradient is set by the biology.

---

## SEGMENT 18 — The frontier — RNA editing, viral knockdown in vivo, and the post-Cas13 landscape

We are nearing the end of the lecture. Let me give you the frontier — where Cas13 and the broader RNA-targeting CRISPR field is going, and what to watch for in the next decade.

\[Pause.\]

The first frontier is **clinical RNA editing for genetic disease**. As of 2026, this is a real and active area, with Wave Life Sciences' AIMer programs in clinical trials and several Cas13-based RNA editing programs in advanced preclinical or early clinical development. The major question for the next five years is whether any of these programs produce durable clinical benefit in patients with serious genetic diseases. If yes, RNA editing becomes a real therapeutic modality, joining DNA editing in the gene-medicine toolkit. If no — if the programs all fail for efficacy, safety, or delivery reasons — the field will need to regroup. The clinical readout cycle is long, but the next half-decade should produce informative results.

The second frontier is **Cas13 for in-vivo viral knockdown**. The PAC-MAN concept — a programmable Cas13-based antiviral, deliverable on demand against any RNA virus — remains one of the most attractive long-term applications of the platform. If we can solve the delivery problem and the safety problem, you can imagine a world where, when a novel viral pandemic emerges, we sequence the virus, design Cas13 guides, manufacture a delivery vehicle, and have a programmable antiviral therapy in the clinic within months. That would be a transformative pandemic preparedness capability. We are not there yet. Whether we get there in the next decade depends on whether the delivery problem for nucleic acid therapeutics continues to improve — which it has been, driven by mRNA vaccine technology and lipid nanoparticle advances.

The third frontier is **the post-Cas13 CRISPR-Dx landscape**. SHERLOCK and DETECTR proved that CRISPR-based diagnostics can compete with PCR. The question now is whether the platforms can find indications where they have a decisive advantage — point-of-care detection, pandemic surveillance, low-resource clinical settings, multiplexed pathogen detection. The companies are still developing new tests. The technology is still improving. Watch this space.

\[Pause.\]

The fourth frontier, and perhaps the most interesting scientifically, is the **continued mining of natural CRISPR diversity**. Cas13 was found in 2016. Cas13d was characterized in 2018. Cas13X and Cas13Y were described in subsequent years. There are almost certainly other RNA-targeting CRISPR effectors waiting to be discovered in bacterial genomes. There may be effectors with better collateral profiles, better delivery characteristics, better targeting properties, that we have not yet identified. The Zhang lab and others continue to mine sequence databases. Every couple of years, a new natural variant gets characterized that pushes the state of the art forward.

Beyond the natural variants, there is **engineered diversity** — directed evolution of existing Cas13 variants to improve their properties. This is the same kind of engineering that produced the engineered ADAR variants used in REPAIRv2 and RESCUE. Applied to Cas13 itself, directed evolution can produce variants with reduced collateral activity, improved specificity, enhanced delivery characteristics, or other useful properties. The engineering campaigns are ongoing in multiple labs and several companies.

\[Pause.\]

And the fifth frontier, which I think is the most important conceptually, is the **broader category of programmable RNA-level interventions**. Cas13 is one tool. AIMer is another. siRNA is a third. ASO-based mechanisms are a fourth. Each one occupies a different niche, with different chemistry, different delivery, different cellular machinery. The therapeutic future probably involves a portfolio of RNA-level interventions, used in combination or in sequence for different patients and different diseases. The capability — programmable, reversible, transient modulation of specific transcripts — is the durable thing. The specific tool used for any given patient is the variable.

This is, in some sense, the same lesson the DNA editing field has learned. Cas9 was the first universal genome editor. Then came base editors, prime editors, dCas9 fusions, alternative Cas systems. The whole landscape diversified. The same diversification is happening at the RNA level, and Cas13 is the foundational tool that opened the space.

\[Pause.\]

Let me close with the picture I want you to walk out with.

The CRISPR universe is bigger than DNA. Most of what your cells are doing, in any given moment, is at the level of messenger RNA — the working copies, the photocopies on the desk. Cas13 is the CRISPR family that lets you reach in and modify those working copies, programmably, by sequence, without ever touching the master genome. Out of that one capability flows knockdown of disease transcripts, programmable RNA editing via REPAIR and RESCUE, diagnostic platforms like SHERLOCK that turn a quirky biochemical bug into a beautiful signal-amplification mechanism, and an entire commercial biotech sector — Tessera, Mammoth, Sherlock Biosciences, Wave, Korro, and others — building therapeutic and diagnostic products on top of that foundation.

The field is younger than the Cas9 field. The first FDA-approved Cas13-based therapeutic has not yet happened. The first FDA-approved Cas13-based diagnostic happened in 2020, during the pandemic. Most of what is going to happen with this platform is still ahead of us, not behind us. If you are starting in molecular biology today and you want to work on a tool that is going to keep evolving and finding new applications for the next twenty years, RNA-targeting CRISPR is a very good choice.

That is the lecture. Thanks for listening. Questions?

---

## APPENDIX

This appendix collects a few items that come up in questions but did not fit cleanly into the main spoken script. Use them as backup material for office hours, or as references for further reading.

**Key papers to read in chronological order.**

The first big Cas13 paper is Abudayyeh et al., 2016, _Science_, "C2c2 is a single-component programmable RNA-guided RNA-targeting CRISPR effector." This is the paper that established Cas13 (then called C2c2) as an RNA-targeting CRISPR effector. Read it for the biochemistry and for the introduction of the collateral activity.

Konermann et al., 2018, _Cell_, "Transcriptome Engineering with RNA-Targeting Type VI-D CRISPR Effectors." This is the Cas13d / RfxCas13d / CasRx paper from Hsu's lab. Read it for the case that smaller Cas13 variants are more useful for therapy.

Cox et al., 2017, _Science_, "RNA editing with CRISPR-Cas13." This is REPAIR — the first programmable A-to-I RNA editing with dCas13b-ADAR fusions. Read it for the conceptual move of bringing ADAR to a target via dCas13.

Abudayyeh et al., 2019, _Science_, "A cytosine deaminase for programmable single-base RNA editing." This is RESCUE. Read it for how directed evolution turned ADAR2 into a C-to-U editor.

Gootenberg et al., 2017, _Science_, "Nucleic acid detection with CRISPR-Cas13a/C2c2." This is SHERLOCK. Read it for the diagnostic platform built on collateral cleavage.

Gootenberg et al., 2018, _Science_, "Multiplexed and portable nucleic acid detection platform with Cas13, Cas12a, and Csm6." This is SHERLOCKv2. Read it for the multiplexed and lateral-flow versions.

Chen et al., 2018, _Science_, "CRISPR-Cas12a target binding unleashes indiscriminate single-stranded DNase activity." This is DETECTR — the Cas12-based diagnostic. Read it for the parallel story to SHERLOCK on the DNA side.

**Vocabulary you should know cold.**

HEPN domain — Higher Eukaryotes and Prokaryotes Nucleotide-binding domain; the RNase domain that does the actual cutting in Cas13. Two of them come together at one active site.

PFS — protospacer flanking site; Cas13's loose equivalent of a PAM, but generally weaker and absent entirely in some variants like RfxCas13d.

Collateral cleavage — the nonspecific RNase activity that activated Cas13 exhibits against bystander RNAs. The defining quirk of the protein. Bad for therapy, great for diagnostics.

cis-cleavage versus trans-cleavage — cis is on-target cleavage of the guided RNA; trans is collateral cleavage of bystander RNAs.

REPAIR — RNA Editing for Programmable A to I Replacement. dCas13-ADAR fusion for A-to-G RNA editing.

RESCUE — RNA Editing for Specific C to U Exchange. dCas13 fused to an engineered ADAR variant that does C-to-U.

SHERLOCK — Specific High-sensitivity Enzymatic Reporter unLOCKing. Cas13-based nucleic acid detection platform with RPA pre-amplification.

DETECTR — DNA Endonuclease Targeted CRISPR Trans Reporter. The Cas12a-based parallel of SHERLOCK.

AIMer — ADAR-mediated Inducing Modulator of editing for RNA. Wave Life Sciences' Cas-free RNA editing platform that recruits endogenous ADAR via chemically modified oligonucleotides.

CasRx / RfxCas13d — the small, low-collateral, AAV-compatible Cas13 variant from _Ruminococcus flavefaciens_; the workhorse for therapy.

**Frequently asked questions.**

_Q: Can Cas13 target nuclear RNA, like pre-mRNA or non-coding RNAs?_ A: In principle yes, if you fuse it to a nuclear localization signal. In practice this has been done in academic papers but is less common in therapy because most disease-relevant mRNAs are in the cytoplasm. Some labs use nuclear-localized Cas13 for studying splicing and nuclear non-coding RNAs.

_Q: Is Cas13 immunogenic in humans?_ A: It is a bacterial protein, so yes, it can elicit immune responses. This is a real concern for chronic or repeated dosing. The same problem affects Cas9 therapies. Strategies include immunosuppression during dosing, transient delivery via mRNA so the protein is expressed only briefly, and engineering of less immunogenic variants. As of 2026 it remains an active issue for both Cas9 and Cas13 therapeutics.

_Q: How does RNA editing efficiency compare across REPAIR, RESCUE, and AIMer?_ A: Depends heavily on the target, the cell type, and the formulation. Rough numbers in well-optimized cellular systems: REPAIR 20 to 60 percent editing at the target adenosine; RESCUE somewhat lower, 10 to 40 percent; AIMer in liver hepatocytes, with optimized chemistry, can reach 50 to 80 percent. These are not directly comparable across platforms and the numbers improve year over year.

_Q: Why isn't there a Cas13 base editor analogous to base editors for DNA?_ A: There kind of is — that's what REPAIR is. REPAIR is the RNA-level analog of an adenine base editor. The conceptual move is identical: a catalytically dead Cas protein fused to a deaminase, targeted by a guide. The differences come from RNA versus DNA biology rather than from differences in design philosophy.

_Q: Could you combine Cas13 with other editing chemistries beyond ADAR and APOBEC?_ A: In principle yes. There are demonstrations of Cas13 fused to various RNA-modifying enzymes — m6A demethylases, pseudouridine synthases, others. The space of "programmable RNA modifications" is much larger than just A-to-I and C-to-U. The therapeutic applications of those other modifications are mostly still preclinical.

_Q: Why didn't CRISPR-Dx tests dominate COVID testing?_ A: They were not order-of-magnitude better than PCR on any single dimension. PCR was already deployed, antigen tests were cheaper. CRISPR-Dx had real but not decisive advantages, so it occupied a niche rather than replacing incumbents. The longer-term value may be in scenarios that play to programmability, like rapid response to new pathogens.

_Q: Is Cas13 the only RNA-targeting CRISPR effector?_ A: It is the main one, but there are others. Cas7-11 is another type VI-related RNA-cutter discovered more recently, with somewhat different properties — notably, it appears to have less collateral activity than Cas13, which is interesting for therapy. There may be other RNA-targeting CRISPR variants discovered in coming years from continued database mining.

That is the appendix. Good luck.



