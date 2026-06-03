# Mitochondrial Gene Editing: DdCBE and Beyond

**A 2-hour undergraduate molecular biology lecture on editing the other genome — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, which lands comfortably inside a two-hour slot. (Read faster, about 140 wpm, and you'll have generous room for questions and board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The other genome, and the tool that couldn't reach it

Alright, let's get started. Good morning, everyone. This lecture builds directly on two earlier ones — the TALEN lecture, where we worked out how a protein can be programmed to read DNA one base at a time, and the base-editing lecture, where we met David Liu's cytosine and adenine base editors that change one letter of DNA without cutting the helix. If either of those is hazy, go back and read them. We're going to assume you can sketch a TALE array recognizing a DNA target, and that you remember what a deaminase is and what it does to a cytosine. Today we're going to take those two ideas and apply them to a part of your body that, until 2020, was completely off-limits to genome editing. Your mitochondria.

Here is the sentence I want you to walk out of here with. **Every one of your cells contains a second, smaller, separate genome inside its mitochondria, and for almost a decade after CRISPR arrived, that genome was untouchable — until a bacterial toxin and a TALE-based deaminase opened the door.** Read that twice. Notice what it implies. There is a genome in your cells that is not your chromosomes. That genome has its own diseases. And for years, the most powerful editing technology humans have ever built — CRISPR-Cas9 — simply could not work there. Not because we didn't try. Because the geometry of the mitochondrion physically excluded the tool.

The reason this matters, the reason an entire small subfield of genome editing has now grown up around the question of how to edit mitochondrial DNA, is that mitochondrial diseases are real, common enough to fill clinics, devastating to the patients who have them, and have essentially no good treatments. There are children in pediatric neurology wards right now with conditions caused by single-letter mutations in their mitochondrial DNA. We have known what those mutations are for thirty years. We have known how to read the sequence. We have known, in principle, exactly what letter we would change if we could. We just could not get our editing tool inside the organelle.

\[Pause.\]

The 2020 breakthrough that changed this came from an unusual collaboration. On one side was David Liu's lab at the Broad Institute, fresh off the base-editing revolution. On the other side was Joseph Mougous's lab at the University of Washington, which studies bacterial warfare — the molecular weapons that bacteria use to kill each other. Mougous's lab had discovered a toxin produced by a bacterium called _Burkholderia cenocepacia_ that does something no other enzyme on Earth had been known to do: it deaminates cytosines on intact, double-stranded DNA. Not single-stranded DNA, which all the deaminases we used in nuclear base editing prefer. Double-stranded DNA. With both strands paired. As you find it sitting in the genome.

That toxin is called **DddA** — DNA deaminase A, sometimes written as the longer DddA_tox to indicate it's the toxic catalytic fragment. And in 2020, the Liu lab took DddA, split it in half so it would be safe in human cells, fused each half to a TALE protein programmed to recognize the flanking DNA, added a uracil glycosylase inhibitor to lock the edit in, and produced the first targeted edit of mitochondrial DNA in a human cell. They called the construct **DdCBE** — DddA-derived cytosine base editor. It was published in _Nature_ in July 2020, by Beverly Mok as first author, and it cracked open the field.

\[Pause.\]

If you walk out of here in two hours and can do five things — first, explain in plain English what mitochondrial DNA is, why every cell has hundreds to thousands of copies of it, and what heteroplasmy means; second, name three pathogenic mitochondrial DNA mutations and the diseases they cause; third, explain exactly why CRISPR-Cas9, despite being the most powerful editor ever built, cannot edit mitochondrial DNA; fourth, sketch the architecture of DdCBE — DddA split halves, TALE arms, UGI — and walk me through how the edit gets installed; and fifth, articulate the current limits of mitochondrial editing and the therapeutic path forward, including the heteroplasmy threshold and the adenine version called TALED — then we have succeeded. That's the menu.

Here is the analogy I want you to keep in your head for the next two hours. **Mitochondrial DNA is the cell's other genome — bacterial-sized, maternally inherited, a separate set of 37 genes dedicated almost entirely to making ATP, sitting inside a double-membraned organelle that the rest of the cell treats like a foreign country.** It has its own customs, its own border crossings, its own postal codes. Things that work fine in the cytoplasm and the nucleus don't necessarily get a visa to enter the mitochondrion. CRISPR-Cas9, for all its power, doesn't have the right paperwork. The guide RNA gets stopped at the border.

DdCBE works because it doesn't need a guide RNA at all. It uses a TALE protein for targeting — and proteins, unlike RNAs, have well-understood pathways for crossing the mitochondrial double membrane. You give the protein a targeting peptide, you fuse it to your editor, and the cell's own import machinery walks the whole thing inside. Then the deaminase does its work on double-stranded mtDNA, no nicking required, no R-loop required, no single-stranded substrate required. The chemistry happens in the geometry the genome was already in.

Today's lecture is, at its core, the story of how a bacterial toxin and an old plant-pathogen DNA-binding domain teamed up to give us access to a genome we'd been locked out of, and what we're starting to do with that access now.

---

## SEGMENT 2 — Mitochondria as bacterial ancestors and your cellular power plants

Before we talk about editing mitochondrial DNA, we need to talk about why mitochondrial DNA exists at all. Because the very existence of a second, separate genome inside your cells is, when you think about it, a strange thing. Why would evolution maintain two genomes, in two different locations, with two different sets of replication and transcription machinery, when one would seem to be enough?

The answer is endosymbiosis, and I want to spend a few minutes on this because it sets up everything else.

Roughly two billion years ago — and the exact number is debated, but the order of magnitude is solid — a free-living bacterium got engulfed by another single-celled organism. This kind of engulfment happens all the time. Usually, the bacterium gets digested and the engulfer takes the nutrients and moves on. But in this case, for reasons we don't fully understand, the bacterium wasn't digested. Instead, it survived inside its host. It kept dividing. It started producing energy in a way that benefited the host. The host kept it around. Generation after generation, host and bacterium became inseparable. The host couldn't function without the bacterial endosymbiont's energy production. The bacterium couldn't function without the host's protection and nutrients.

Over hundreds of millions of years, the bacterium gave up its independence entirely. Most of its genes — and ancient bacteria had a few thousand genes — got transferred, one by one, to the host's nucleus. The host evolved a system for shipping the resulting proteins back into the bacterial compartment, where they were still needed. The bacterium itself shrank, kept only a small core set of genes that for various reasons couldn't be moved to the nucleus, and turned into what we now call a mitochondrion.

Every mitochondrion in every cell of every animal, plant, fungus, and protist alive today is a descendant of that ancient bacterial engulfment. Your mitochondria are, quite literally, the streamlined, domesticated, two-billion-year-old descendants of free-living bacteria. They still have their own DNA. They still divide by something resembling binary fission. They are still bounded by two membranes — the inner one inherited from the bacterium itself, the outer one wrapped around it by the host. They're a fossil of one of the most consequential events in the history of life on Earth, and you have, depending on the tissue, anywhere from a few dozen to several thousand of them in every one of your cells.

\[Pause.\]

Here is the analogy. **The mitochondrion is a former independent country that has been absorbed into a larger empire, but that still maintains some of its own laws, its own currency, and, crucially, a small library of its own books.** Most of the empire's records are kept in the capital — the nucleus. But there's a regional archive, much smaller, still inside the mitochondrial province, with copies of the books that have always been kept locally. Those local books are mitochondrial DNA.

Now let me put numbers on this. Your nuclear genome is about 3.2 billion base pairs and contains roughly 20,000 protein-coding genes. Your mitochondrial genome — the same in every one of your mitochondria — is **16,569 base pairs**. Read that number. Sixteen thousand five hundred and sixty-nine base pairs. That is approximately two hundred thousand times smaller than your nuclear genome. It encodes exactly 37 genes. Of those, 13 encode proteins, all of which are subunits of the oxidative phosphorylation machinery — the molecular complexes that sit in the inner mitochondrial membrane and produce ATP. The other 24 encode the RNA machinery — 22 transfer RNAs and 2 ribosomal RNAs — that the mitochondrion uses to translate those 13 proteins on its own internal ribosomes.

That's the whole mitochondrial genome. Thirteen proteins for ATP production, plus the translation machinery to make them. Every other mitochondrial protein — and there are about 1,500 of them — is encoded in the nucleus, made on cytoplasmic ribosomes, and imported into the mitochondrion through specialized membrane channels. The mitochondrial genome is a tiny holdout, a residual archive of just the genes that couldn't be moved to the nuclear capital.

\[Pause.\]

Why couldn't those 13 be moved? The answer most cell biologists give is: hydrophobicity. The 13 proteins encoded on mtDNA are all extremely hydrophobic — they're full of long stretches of nonpolar amino acids designed to embed in the inner mitochondrial membrane. Hydrophobic proteins are difficult to ship across membranes. The cell's protein-import machinery has trouble translocating them. So those 13 stayed where they could be made next to where they need to be inserted. The rest got moved.

Why does this matter for what we're about to discuss? Because every one of those 13 genes is essential — without them, oxidative phosphorylation doesn't work, ATP production collapses, and the cell starves. So a single-letter mutation in any of those 13 genes, if it disrupts the protein, can cause a mitochondrial disease. And we'll see in a minute exactly which mutations matter and what they cause.

\[Pause.\]

One more property of mitochondrial DNA, before we move on. **It's maternally inherited.** When a sperm fertilizes an egg, the sperm contributes nuclear DNA — 23 chromosomes — and essentially nothing else of consequence to the embryo's genome. The egg, by contrast, contributes 23 chromosomes plus the entire cytoplasm, which contains all the mitochondria. Sperm do have a few mitochondria — they need them for energy to swim — but those sperm mitochondria are tagged for destruction by the egg, ubiquitinated and chewed up shortly after fertilization. The embryo's mitochondrial DNA comes entirely from the mother.

This has a beautiful consequence for population genetics: mitochondrial DNA tracks the maternal line back through time, mother to grandmother to great-grandmother and so on, without ever recombining with paternal DNA. It's a clean genealogy. The "mitochondrial Eve" you may have heard about — the most recent common matrilineal ancestor of all living humans — is a fact of this inheritance pattern. Every human alive today inherited their mtDNA from a single woman who lived in Africa roughly 150,000 to 200,000 years ago.

But it also has a darker consequence for disease genetics. **A pathogenic mtDNA mutation gets passed from mother to all her children, indefinitely down the female line.** If your mother carries a damaging mtDNA mutation, you carry it. So does your sister. So does your brother — but a male carrier won't pass it on to his children, because his mitochondria don't enter the embryo. The disease propagates through women and stops with men. That asymmetry shapes which families are affected and which family members can pass the disease on.

That's the geometry of mtDNA inheritance. Now let me explain heteroplasmy, which is the part of mitochondrial genetics that makes everything else complicated.

---

## SEGMENT 3 — Heteroplasmy, mutation load, and why mitochondrial genetics is unlike nuclear genetics

Here is the single most important concept in mitochondrial genetics, and it has no analog in nuclear genetics. Your cells contain many copies of mtDNA — not one, not two, but typically hundreds to thousands of copies per cell. The exact number depends on the tissue. A skin fibroblast might have 200. A muscle cell might have 5,000. An oocyte — an egg — might have 100,000 to 500,000. The number scales roughly with how much ATP the cell needs to make.

Now here is the consequence. **Within a single cell, those many copies of mtDNA can have different sequences.** Some copies can carry a mutation while other copies are wild-type. The cell isn't homozygous or heterozygous in the simple Mendelian sense; it's a mixture. The technical term for this mixture is **heteroplasmy** — _hetero_ for different, _plasm_ for the cytoplasmic location. A heteroplasmic cell has multiple sequence variants of mtDNA coexisting. A cell with only one variant is **homoplasmic** — all wild-type, or all mutant.

\[Pause.\]

Here is the analogy I want you to hold. **Your nuclear genome is two books — one from each parent — both held in the cell's central library, and every cell has the same two books. Your mitochondrial genome is a fleet of paperback copies — say 500 of them — scattered across the cell's many mitochondrial buildings, all originally photocopies of your mother's book, and some of those photocopies have typos.** A heteroplasmic cell is one where, of its 500 paperback copies, maybe 300 are clean and 200 have the typo. Or 450 clean and 50 typo. Or 50 clean and 450 typo. The ratio is what we call the **mutation load** or **heteroplasmy level**.

This ratio is what determines whether a heteroplasmic cell functions normally or shows a disease phenotype. A cell with 10% mutant mtDNA usually works fine — the 90% wild-type copies are enough to supply the protein subunits the cell needs, and the few defective copies get diluted out. A cell with 90% mutant mtDNA usually doesn't work — there isn't enough functional protein being made, the oxidative phosphorylation complexes assemble incorrectly, ATP output crashes, and the cell either limps along or dies. Somewhere between those extremes, for each particular mutation, there's a **threshold** — usually quoted around 60% to 90% mutant — above which the cell starts to fail.

This threshold is the entire game for mitochondrial disease, and we'll come back to it many times. Patients with the same mutation can have radically different disease severities depending on what fraction of their mtDNA is mutant. And different tissues within the same patient can have different heteroplasmy levels, because mtDNA isn't distributed perfectly evenly during development — it gets sorted somewhat randomly into daughter cells when cells divide. So a patient might have 30% mutant mtDNA in their blood, 70% in their muscle, and 95% in their retina, and the symptoms will track the tissue-specific load.

\[Pause.\]

This has a consequence that I want you to internalize, because it shapes everything we're going to say about therapy. **You don't need to fix every copy of mtDNA to cure a mitochondrial disease. You need to get the heteroplasmy below the disease threshold.** If a patient is 90% mutant and 10% wild-type, and the disease threshold for their mutation is 80%, you don't need to flip every mutant copy back to wild-type. You need to flip enough of them — maybe a third, maybe half — to push the wild-type fraction above 20%, which moves the cell out of the failure zone. Partial editing, if it's the right partial editing, is enough.

That's actually wonderful news for an editing technology like DdCBE, which, as we'll see, typically edits 5% to 50% of mtDNA copies per treatment. In the nuclear genome, if you can only edit 5% of cells, that's usually not a clinical win — most cells are still defective. But in mitochondrial editing, 5% of _copies per cell_ can be a clinical win, because you've shifted the heteroplasmy ratio toward wild-type in essentially every cell in the tissue. You're not asking each cell to fix all its mutant copies. You're asking each cell to fix enough of them.

\[Pause.\]

There's a second consequence of heteroplasmy that's worth flagging, because it surprises people the first time they hear it. **Heteroplasmy can shift between generations and within a single individual over time.** This is called the **mitochondrial bottleneck**. During the development of the oocyte, the number of mtDNA copies in the precursor cells drops sharply at a certain stage — from many thousands down to maybe a few hundred — before it grows back up. This bottleneck means that the heteroplasmy ratio in the mature egg is essentially a random sample from a small subset of the original copies. If a mother has 50% mutant mtDNA, her individual eggs can have anywhere from near 0% to near 100% mutant, depending on how the sampling went. Her children, who develop from those eggs, will have heteroplasmy ratios that reflect that sampled set — and the resulting disease severity can vary wildly between siblings.

That's why mitochondrial disease genetic counseling is so hard. A mother with mild symptoms — say, 40% mutant load — can have a severely affected child if the egg that became that child happened to draw 95% mutant copies. And vice versa. You cannot, from the mother's heteroplasmy alone, predict the child's. This makes prenatal counseling much harder than for typical Mendelian disorders, and it's one of the reasons we've explored radical interventions like mtDNA replacement — pronuclear transfer, the "three-parent baby" technique, which we'll come to in Segment 15.

So that's heteroplasmy. Hundreds to thousands of copies per cell. A mixture of variants is the norm, not the exception. Disease threshold depends on the mutation but is usually high — you need a lot of mutant copies before the cell fails. Partial editing can be therapeutically meaningful. And the heteroplasmy distribution shifts unpredictably between generations through the bottleneck.

Now let's name some actual diseases.

---

## SEGMENT 4 — The mitochondrial diseases — Leigh, MELAS, MERRF, and the price of a single letter

There are dozens of mitochondrial diseases caused by mtDNA mutations, and the encyclopedia of them is overwhelming when you first dive in. I'm going to walk you through three of the most famous, because together they give you a sense of the range of how a single-letter change in this tiny genome can ruin a life.

The first one is **Leigh syndrome**. Leigh syndrome is a devastating pediatric neurodegenerative disease that typically appears in the first two years of life. Children with Leigh syndrome develop normally for a while, then begin to regress. They lose motor skills. They develop muscle weakness. They have trouble eating, breathing, and moving their eyes. Brain MRIs show characteristic lesions in the brainstem and basal ganglia — bilateral, symmetric, in regions that have very high energy demand. Most children with Leigh syndrome die in early childhood, often from respiratory failure when the brainstem regions that control breathing degenerate. There are no curative treatments. We can offer supportive care — feeding tubes, ventilation, physical therapy — but we cannot reverse the disease.

Leigh syndrome has many causes — it's really a clinical syndrome rather than a single genetic entity — but a substantial fraction of cases are caused by a mutation called **T8993G** in the mitochondrial gene **MT-ATP6**, which encodes one subunit of ATP synthase, the molecular machine that actually produces ATP from the proton gradient across the inner mitochondrial membrane. The mutation changes a single base — a T to a G — at position 8993 of the mitochondrial genome. That single base change alters one amino acid in the ATP6 protein, which jams the rotation of ATP synthase, which collapses ATP production in cells that rely heavily on oxidative phosphorylation — most prominently neurons. The brain runs out of energy. The child regresses.

The disease threshold for T8993G is high — patients with around 70% to 90% mutant load can be relatively mildly affected, sometimes presenting as a milder condition called NARP (neuropathy, ataxia, retinitis pigmentosa) rather than full Leigh syndrome. Once mutant load crosses about 90%, you get full Leigh syndrome. The difference between a child who walks and a child who dies in infancy can be 80% versus 95% mutant load.

\[Pause.\]

The second disease is **MELAS** — Mitochondrial Encephalopathy, Lactic Acidosis, and Stroke-like episodes. MELAS typically appears in childhood or young adulthood. Patients have recurrent stroke-like events — episodes of focal neurological dysfunction that look like strokes on imaging but don't follow normal vascular patterns. They have lactic acidosis — buildup of lactate in the blood because pyruvate isn't getting metabolized properly through the impaired mitochondria, so it overflows into lactate. They often have hearing loss, diabetes, short stature, and progressive cognitive decline.

The most common cause of MELAS is a mutation called **A3243G** in the mitochondrial gene **MT-TL1**, which encodes the transfer RNA for leucine — specifically the one used to read the UUR codon family. That tRNA-leucine, encoded entirely in mtDNA, is needed for translating every mitochondrial protein that contains leucine at a UUR codon. The A3243G mutation destabilizes the tRNA's secondary structure, so the tRNA doesn't fold correctly, doesn't accept its amino acid efficiently, and translation of mitochondrial proteins is impaired across the board. The downstream consequence is a general crash in oxidative phosphorylation, with the cells that need it most — neurons, muscle, cochlear hair cells — being the most affected.

MELAS is one of the more common mtDNA diseases. A3243G alone, the most common single mtDNA mutation, is estimated to occur in about 1 in 400 people in some populations — though most of those carriers have low enough heteroplasmy that they're asymptomatic or have only mild symptoms like diabetes or hearing loss in adulthood. Full MELAS, with the stroke-like episodes, requires high heteroplasmy in the affected tissues.

\[Pause.\]

The third disease I want to name is **MERRF** — Myoclonic Epilepsy with Ragged-Red Fibers. The "ragged-red fibers" part is the histopathology: when you biopsy the muscle of a MERRF patient and stain it, you see muscle fibers with abnormal accumulations of dysfunctional mitochondria — they look ragged and stain red — clustered around the periphery of the cell. The clinical picture is myoclonus (sudden involuntary muscle jerks), epilepsy, ataxia (loss of coordination), and progressive muscle weakness.

MERRF is most commonly caused by **A8344G** in the mitochondrial gene **MT-TK**, which encodes the transfer RNA for lysine. Same general mechanism as MELAS — a tRNA gets disrupted, mitochondrial translation falls apart, oxidative phosphorylation crashes — but with a different tissue distribution and a different clinical presentation, for reasons that are still not fully understood but probably reflect tissue-specific differences in heteroplasmy and protein-synthesis demand.

\[Pause.\]

Let me give you a number for the overall burden. The combined prevalence of mitochondrial DNA disease is estimated at roughly **1 in 4,300 people** in adult populations — and that's a conservative estimate, because mild and atypical cases are underdiagnosed. That's not a rare disease in the way that some single-gene disorders are; that's about as common as Huntington's disease or cystic fibrosis. There are tens of thousands of patients in the United States alone. Hundreds of thousands globally. Most of them have no good treatment.

The therapeutic landscape, until 2020, was bleak. You could offer **coenzyme Q10** and other "mitochondrial cocktail" supplements that arguably do a little bit of good but don't reverse disease. You could offer **dichloroacetate** to try to push pyruvate metabolism. You could try ketogenic diets in some Leigh syndrome cases. You could do mitochondrial replacement therapy in eggs — which prevents transmission but doesn't help existing patients. But there was no way to actually correct the mutation in the patient's existing tissues. The mutation sat there, in every mitochondrion in every affected cell, and there was no tool that could go in and change it.

\[Pause.\]

Now I want you to feel the weight of this gap. We knew, by the late 1980s, that T8993G in MT-ATP6 caused Leigh syndrome. We had the sequence. We had the position. We had, in a notebook somewhere, the exact letter we would change if we could. We had nuclear genome editing tools — first zinc finger nucleases, then TALENs, then CRISPR — that were rapidly getting better at targeting specific positions in nuclear DNA. For thirty years, every advance in editing technology raised the same question: can we use this for mitochondria? And for thirty years, the answer was always essentially no.

The reason is the geometry of the organelle and the chemistry of the import machinery. Let me explain why CRISPR, the most powerful editor we'd ever built, simply couldn't reach inside.

---

## SEGMENT 5 — Why Cas9 fails in the mitochondrion — the guide RNA can't get in

Recall how CRISPR-Cas9 works. You have a protein — Cas9 — and a single guide RNA. The protein and the RNA assemble in the cytoplasm or nucleus. The assembled ribonucleoprotein complex scans DNA, finds a PAM, forms an R-loop, and cuts. Two pieces are required for the system to function: the Cas9 protein, and the guide RNA. Both have to be present at the target. Both have to be in the same compartment as the DNA you want to edit. Both have to be there at the same time.

In the nucleus, this works because the cell has standard mechanisms for getting both proteins and RNAs into the nucleus. Cas9 has a nuclear localization signal — a short peptide tag — that the nuclear import machinery recognizes and uses to drag the protein through the nuclear pore. The guide RNA, transcribed in the nucleus from a Pol III promoter, simply stays where it was made. Both components are in the nucleus, both can find each other, both can find the DNA. The system works.

In the mitochondrion, you immediately hit a problem.

\[Pause.\]

The mitochondrion is enclosed by two membranes — the outer membrane and the inner membrane. Between them sits the intermembrane space. Crossing both membranes requires going through specific protein channels. There are two major import complexes: **TOM**, the translocase of the outer membrane, and **TIM**, the translocase of the inner membrane. Together they form a sort of conveyor belt that pulls proteins through both membranes into the mitochondrial matrix, where mtDNA lives.

The substrate for TOM/TIM is **protein**. Specifically, proteins that carry a mitochondrial targeting sequence — a short, positively charged, amphipathic alpha-helical peptide at their N-terminus. That sequence is the postal address. If a protein has it, the TOM/TIM machinery grabs the protein, threads it through both membranes, and dumps it into the matrix. The targeting sequence is then cleaved off by a matrix-resident protease. The mature protein is now inside.

This works beautifully for proteins. Hundreds of mitochondrial proteins are imported this way every minute in every cell of your body. The system is highly efficient and well-characterized. You can take an arbitrary protein, slap a mitochondrial targeting sequence onto its N-terminus, and it will go to the mitochondrion. That part is solved.

The problem is RNA. **The TOM/TIM machinery does not import RNA.** There is no general mechanism for getting RNA molecules into the mitochondrial matrix. There are a few exceptions — some small RNAs in some organisms have been reported to enter mitochondria via specialized pathways, but for a synthetic guide RNA, particularly the roughly 100-nucleotide single guide RNA that Cas9 uses, there is no established import pathway. Even with extensive engineering — sticking various RNA tags on the guide, attaching it to import-competent proteins, fusing it to known RNA-binding domains — getting useful amounts of intact, functional guide RNA into the mitochondrial matrix has proven extraordinarily difficult.

\[Pause.\]

So picture the disaster. You take Cas9, you fuse a mitochondrial targeting sequence to its N-terminus, you express it in a cell, and the cell dutifully imports the Cas9 protein into the mitochondrion. Cas9 is now in the matrix, next to the mtDNA, ready to work. But it has no guide RNA. Without a guide, Cas9 is inert. It can't find a target. It can't cut. The protein sits there uselessly, an unloaded gun in the right room.

You try, separately, to express the guide RNA. The guide RNA is transcribed in the nucleus. It exits the nucleus through the nuclear pore. It floats around the cytoplasm. It does not enter the mitochondrion. It cannot find its way through TOM/TIM. The guide and the protein are in different compartments. The system is broken.

People have tried hard to solve this. There are papers from the mid-2010s reporting various tricks — RNA aptamers fused to import-competent proteins, alternative guide-RNA architectures, even claims of small amounts of guide RNA reaching the matrix. Some of these reports show low levels of mitochondrial editing in tightly controlled experiments. But none of them produced a robust, reliable, broadly useful CRISPR-based mitochondrial editing platform. The field tried for years and ended up with, essentially, nothing.

\[Pause.\]

This is a beautiful illustration of a general principle in biology. **A tool isn't just the catalytic part. It's the delivery, the targeting, the cofactors, and the geometry of the place it needs to work.** Cas9 the protein is brilliant. Cas9 the system — protein plus guide RNA — depends on both components being able to assemble at the target. Change the target compartment to one that won't let the guide in, and the whole system collapses, regardless of how powerful the protein is.

The mitochondrion, by virtue of its double membrane and its protein-only import machinery, is exactly that kind of compartment for CRISPR. So the field had to ask a different question. Not "how do we get CRISPR into the mitochondrion" — that road was blocked. The question became: **what targeting modality already works in mitochondria, and can we attach the chemistry we want to that?**

The answer, when it came, was the TALE protein. Because a TALE is a protein. It targets DNA using protein-DNA contacts alone, with no RNA cofactor. It doesn't need to drag an RNA across a membrane. You can fuse a mitochondrial targeting sequence to a TALE's N-terminus, the cell imports the whole protein into the matrix, and the TALE binds its DNA target inside the mitochondrion. People had actually shown this years earlier, with constructs called **mitoTALENs** — TALE-FokI fusions targeted to mitochondria that introduced double-strand breaks in mutant mtDNA. We'll talk about mitoTALENs in Segment 16, because they're the older approach that DdCBE replaced. But the key insight for now is: **the TALE was the targeting modality that already worked in mitochondria.** What we needed was a chemistry to attach to it that didn't require single-stranded DNA, because nothing inside the mitochondrion was going to provide an R-loop or a Cas9 nickase. We needed a deaminase that worked on intact double-stranded DNA.

That deaminase didn't exist. Until Joseph Mougous's lab found one in a bacterial toxin.

---

## SEGMENT 6 — DddA — the bacterial toxin that broke a chemistry rule

Joseph Mougous's lab at the University of Washington studies a phenomenon called **interbacterial antagonism**. Bacteria, when they're competing for resources, often kill each other with secreted toxins. There's a whole family of these — some are pore-forming, some are nucleases, some hit cell wall synthesis, some hit the membrane. Mougous's lab has been characterizing these toxins, especially those delivered by the **Type VI secretion system**, which is a kind of molecular spear that one bacterium uses to inject toxins directly into a neighboring bacterium.

In 2019, Mougous and collaborators were characterizing a toxin from _Burkholderia cenocepacia_ — a pathogenic bacterium that lives in soil and can infect humans with weakened immune systems, especially patients with cystic fibrosis. The toxin in question is delivered via the Type VI system into rival bacteria, where it kills them. The Mougous lab wanted to know how.

When they purified the toxin and tested it biochemically, they found something startling. The toxin was a **cytidine deaminase**. That is, it converted cytosines to uracils — the same chemistry that APOBEC1 does in nuclear base editing. But unlike every other cytidine deaminase that had been described, this one had an unusual preference. It worked on **double-stranded DNA**.

\[Pause.\]

Let me stop and explain why that single property — double-strand activity — was so important.

In the nuclear base-editing system, we use APOBEC1 (or one of its relatives) fused to Cas9 nickase. APOBEC1 strongly prefers single-stranded DNA. Why? Because that's what the cell normally exposes it to in its natural context. APOBEC1 evolved to edit mRNA, which is single-stranded. The broader APOBEC family — APOBEC3A, APOBEC3G, AID — all of them act on single-stranded DNA in their natural biology, where they're part of antiviral defense or antibody diversification, and the substrate they encounter is usually a single-stranded intermediate during DNA replication or RNA synthesis.

When you bring APOBEC1 to genomic double-stranded DNA, it can't get at the cytosines on the intact double helix. The bases are tucked inside the duplex, hydrogen-bonded to their partner guanines, geometrically hidden from the enzyme's active site. To deaminate them, you need to open up the helix and expose the cytosine as a single-stranded loop. Cas9 nickase, on the nuclear base editor, does exactly that — when it forms the R-loop, the non-guide-strand DNA pops out as a single-stranded loop, and APOBEC1 reaches in. The single-stranded substrate is created on the spot by the targeting module.

But in the mitochondrion, you don't have Cas9. You don't have a guide RNA. You don't have an R-loop. The mtDNA inside the matrix is sitting as intact double-stranded DNA most of the time, with no single-stranded loops on offer. If you brought APOBEC1 into the mitochondrion, it would have nothing to act on.

\[Pause.\]

So a cytidine deaminase that works on double-stranded DNA — that just reaches into the duplex and pulls the cytosine out of its base pair on its own, without needing a pre-existing single-stranded substrate — was a chemistry that, before Mougous's discovery, didn't exist in the toolbox. It had been considered theoretically problematic. Most biochemists would have said: a deaminase that can attack double-stranded DNA on its own would be incredibly toxic, because it would deaminate cytosines all over the genome indiscriminately. Evolution doesn't make such things, because they'd kill their host.

But _Burkholderia cenocepacia_ does make one. The reason is that the toxin is not designed to live in the bacterium that produces it. It's a weapon, exported via Type VI secretion, designed to kill the receiving bacterium. So it doesn't matter if it's pan-genome toxic — that's the point. The producer protects itself with an immunity protein that binds and neutralizes its own toxin. The recipient, lacking immunity, gets its genome shredded by indiscriminate cytidine deamination, accumulates so many C-to-U lesions that DNA repair can't keep up, and dies.

The toxin's name is **DddA** — DNA deaminase A. And to use it as a base-editing tool, the trick is going to be: don't let it act freely. Tame it. Make it only work when and where you want it to.

\[Pause.\]

Here's the analogy. **DddA is a wild dog. Useful, powerful, capable of doing something no other dog can do — chew through a tough chain that other dogs can't even bite. But left unleashed, it bites everything.** If you want to use it, you can't just turn it loose in a cell, because it'll deaminate every C in the mitochondrial and probably nuclear genome and the cell will die. You need a leash. And the leash, in the DdCBE design, is going to be: split the dog in half, so neither half alone can bite, and tether each half to a TALE arm so the two halves only come together at one specific spot in the genome.

That's the architectural insight that turned DddA from an interesting bacterial toxin into a usable mitochondrial editor. Let me walk you through how it works.

---

## SEGMENT 7 — DdCBE architecture — split halves, TALE arms, and the 2020 Mok paper

The 2020 paper that launched mitochondrial base editing was published in _Nature_ in July of that year. The title is "A bacterial cytidine deaminase toxin enables CRISPR-free mitochondrial base editing." The first author is Beverly Mok, a postdoctoral fellow in David Liu's lab. The senior authors are Liu and Mougous. Read the title carefully — it tells you the whole story. A bacterial cytidine deaminase toxin (that's DddA, from Mougous). Enables (it makes possible) CRISPR-free (notice the word "free" — they're explicitly stepping outside CRISPR) mitochondrial base editing.

Let me walk you through the architecture they built, piece by piece.

The first design problem was the toxicity. DddA, as we just said, is a wild deaminase that attacks double-stranded DNA promiscuously. If you express full DddA inside a human cell — even targeted to mitochondria — it'll start deaminating cytosines randomly across the mtDNA and potentially the nuclear DNA too. That's the opposite of a targeted editor. The Liu lab needed a way to keep DddA inert until it was localized to a specific site.

Their solution was elegant: **split DddA into two halves.** They identified the protein's catalytic core and found a position where you could cut the polypeptide chain into two non-overlapping fragments. Neither fragment, on its own, has any deaminase activity — the active site requires both halves to come together. But when the two halves are brought into close proximity, they reassemble and catalysis resumes. They split it at two different positions, and called the resulting halves the **N-terminal fragment** and the **C-terminal fragment**.

\[Pause.\]

Now the question is: how do you get the two halves to come together at one specific spot in mtDNA and nowhere else? The answer is to tether each half to its own programmable DNA-binding domain, positioned on opposite sides of the target. If each half has its own targeting arm, and the arms bind sequences flanking the cytosine you want to edit, then the two halves get brought into proximity only when both arms are bound to their flanking sites. Anywhere else in the genome, the halves don't meet, and no deaminase activity occurs.

For the targeting arms, they used TALEs. Not Cas9 — Cas9 needs a guide RNA, which can't get into mitochondria. TALEs are pure protein, and as we established, proteins can be imported across the double membrane via the TOM/TIM machinery. Each TALE arm gets a mitochondrial targeting sequence at its N-terminus, the cell imports the whole construct, and inside the matrix the TALE arm finds its DNA target via the modular Boch-Moscou code we worked through in the TALEN lecture — one repeat per base, HD-NG-NI-NN reading C-T-A-G.

So the construct looks like this. **Two separate polypeptides.** Each polypeptide is, from N-terminus to C-terminus: a mitochondrial targeting sequence, then a TALE array (the targeting arm), then one half of split DddA, then a uracil glycosylase inhibitor — UGI — to block the cell's uracil DNA glycosylase from undoing the edit. (Same UGI trick from nuclear base editing, same logic — when DddA deaminates a C to a U, the cell's UDG would normally recognize the U as foreign DNA and excise it; UGI blocks that, locking the edit in.) The two TALE arms are designed to bind sequences on opposite sides of the target cytosine — typically one binds the top strand to the left of the target, the other binds the bottom strand to the right of the target, with a spacer of about 14 to 18 base pairs between them where the cytosines that get edited live.

\[Pause.\]

Picture this on the board. DNA running horizontally, double-stranded. Left TALE arm bound to a 16-base-pair stretch on the top strand. Right TALE arm bound to a 16-base-pair stretch on the bottom strand, downstream of the left arm. Between them, a gap of 14 to 18 base pairs. Each TALE arm carries one half of DddA on its inward-facing end — the N-terminal half on one arm, the C-terminal half on the other. When both arms are bound, the two DddA halves are held in proximity over the gap, reassemble into a functional deaminase, and start deaminating Cs in the spacer region. The chemistry happens on the intact double-stranded DNA — no R-loop, no nick, no opening of the helix required, because DddA can attack dsDNA on its own.

After deamination, you have a U in place of a C. The cell's mismatch repair machinery, after several rounds of mtDNA replication, propagates the U as if it were a T. The end result is a C-to-T conversion on one strand, with the complementary G on the other strand becoming an A. Single-letter edit, no double-strand break, locked in by UGI.

The paper showed editing efficiencies of about 5% to 50% at multiple target sites in the mitochondrial genome of human cells. They edited cytosines in the MT-ATP6 gene, in the MT-ND4 gene, in MT-ND5, in the displacement loop region — multiple positions across the mitochondrial genome, each with its own pair of TALE arms designed to flank the target. The platform was modular: design a new TALE pair, get a new mtDNA edit. Just like TALENs in the nuclear genome, but for mitochondria, and base-editing rather than cutting.

\[Pause.\]

Let me restate the design choices, because there's a clean logic running through them and I want it in your head.

**Why TALEs and not Cas9?** Because Cas9 needs a guide RNA that can't cross the mitochondrial double membrane. TALEs are pure protein and can be imported.

**Why DddA and not APOBEC1?** Because APOBEC1 needs single-stranded DNA, which there's no way to expose at a specific site inside the mitochondrion without Cas9. DddA works on double-stranded DNA directly.

**Why split DddA?** Because full DddA is a toxin that would shred the genome. Splitting it into halves that only reassemble when both TALE arms are bound is the leash that makes it specific.

**Why UGI?** Same as in nuclear cytosine base editing — to block uracil DNA glycosylase from excising the U and resetting the edit.

**Why two separate polypeptides, not one?** Because the geometry of binding two flanking sites requires two independently positioned arms. A single chain wrapping around the DNA would be much harder to engineer.

The whole construct is a beautiful piece of molecular plumbing. Every design choice solves a specific problem. The combined system gives you, for the first time, targeted C-to-T editing inside the mitochondrion. After thirty years of knowing the sequences of the disease-causing mutations and being unable to touch them, we had a tool that could touch them.

---

## SEGMENT 8 — Editing efficiency, heteroplasmy as readout, and what "5 to 50 percent" actually means

When the Mok 2020 paper reported editing efficiencies of 5% to 50%, you need to understand what that percentage means in the mitochondrial context, because it's different from nuclear editing.

In the nuclear genome, when we report a base-editing efficiency, we typically mean: of the cells in the population, what fraction have the edit installed at the target locus? Or, since each cell has two alleles, sometimes: what fraction of alleles in the whole population carry the edit? Either way, you're sampling distinct chromosomes — typically two per cell — and asking how many got changed.

In the mitochondrial genome, each cell has not two but hundreds to thousands of mtDNA copies. When you report a mitochondrial editing efficiency, you're asking: across all those copies, in all the cells you assayed, what fraction now carry the edit? You're sampling a much larger pool. **The readout for mtDNA editing is heteroplasmy.** You sequence the mtDNA from the treated cells, you count how often you see the edited base versus the original base at the target position, and the ratio is your editing efficiency.

\[Pause.\]

So when the 2020 paper says they got 50% editing at a target site, what they're saying is: of the many thousands of mtDNA copies they sequenced from the treated cells, half of them now carry the edit. The other half are still wild-type. The cells, on average, have shifted from being homoplasmic for the original sequence to being 50:50 heteroplasmic for original and edited.

This is, as we discussed in Segment 3, exactly the kind of partial outcome that's clinically meaningful in the mitochondrial context. If you start with a patient whose tissue is 90% mutant and 10% wild-type, and you apply an editor that converts 30% of the mtDNA copies from mutant to wild-type — that doesn't sound like much in the nuclear context, but in the mitochondrial context, it shifts the heteroplasmy from 90:10 mutant:wild-type to roughly 60:40. That's potentially a huge clinical change, because you've moved across the disease threshold for many mutations. Cells that were failing because they only had 10% functional copies are now succeeding because they have 40%.

\[Pause.\]

But efficiency isn't the only thing you measure. You also have to measure specificity — both at the intended site and elsewhere. The question is: how often does DdCBE edit cytosines that you didn't intend to edit?

There are two flavors of off-target editing to worry about. The first is **bystander editing within the spacer**. The TALE arms bring the DddA halves to the spacer region — that 14-to-18 base-pair window between the two TALE binding sites. Any cytosine in that window is potentially a substrate for the reassembled DddA. If your target cytosine is the only C in the window, great — only it gets edited. If there are multiple Cs in the window, all of them might get edited, with various efficiencies. The unintended ones are bystanders. We'll come back to this in Segment 9, because the bystander problem is one of the biggest practical issues with DdCBE.

The second flavor is **off-target editing elsewhere in the mitochondrial genome, or in the nuclear genome.** This is the more worrying one for safety. DddA is a deaminase that can act on any double-stranded DNA — so even if you've split it into halves, if both halves happen to come close to each other at a non-target site (because the TALEs bind weakly to a mismatched site, or because the halves dimerize on their own at high concentrations), you can get off-target deamination. And mitochondrial-localized constructs can also leak into the nucleus, where they encounter the nuclear genome — and again, off-target editing can occur.

\[Pause.\]

The 2020 paper assessed off-targets at a modest scale and found them to be relatively low — a few sites in the mitochondrial genome with measurable bystander editing outside the spacer, and very low levels of off-target editing in the nuclear genome. But subsequent work has shown that the off-target landscape is more complex than initially appreciated. A 2022 paper from Daniel Bauer's lab and others, using more sensitive whole-genome bisulfite sequencing, found that DdCBE produces substantial off-target editing in the nuclear genome at sites that resemble the intended target sequence. The off-target signature reflects DddA's intrinsic preference for **TC** dinucleotides — that is, a C preceded by a T — which is the sequence context DddA evolved to attack.

Reducing these off-targets has become an active area of engineering, with newer variants of DddA that have either narrower sequence preferences or weaker intrinsic activity that requires more stringent TALE binding to trigger. We'll cover those in Segment 10. The take-home point for now is: **DdCBE works, but it's a first-generation tool, and like first-generation nuclear base editors, the specificity is good but not perfect, and the engineering effort to improve it is ongoing.**

\[Pause.\]

One more thing about heteroplasmy as a readout, because it has practical implications for experimental design. When you treat a population of cells with DdCBE, you're shifting the heteroplasmy distribution. But within that distribution, individual cells can have wildly different outcomes. One cell might end up 80% edited, the next cell 10% edited, the next cell 50% edited. The population average is the reported number, but the variance is real and matters.

This single-cell variation in editing outcome reflects two things: how many DdCBE proteins got into a given mitochondrion in that cell, and how that mitochondrion's mtDNA replicated and segregated during the time you were observing it. mtDNA is replicated by a dedicated mitochondrial polymerase, gamma-pol, and copies divide and segregate semi-randomly during mitochondrial fission. So even within a single cell, some mitochondria might end up enriched for edited mtDNA, others depleted. Over time, with selection and drift, the distribution can shift further — sometimes in the direction of the edit, sometimes against, depending on whether the edit confers any fitness advantage to the mitochondrion that carries it.

For a therapeutic application, you'd want to be sure that the edit is stable — that over many cell divisions in the patient's tissue, the heteroplasmy stays where you put it and doesn't drift back to the disease state. This is one of the open questions in the field, and we'll return to it in Segment 14 on limitations.

---

## SEGMENT 9 — The bystander problem — DddA's window and the TC dinucleotide preference

I mentioned the bystander problem in the last segment, but it deserves its own treatment, because it's the single most important practical limitation of DdCBE in its original form.

Here's the issue. DddA, like all base-editing deaminases, doesn't read DNA letter by letter. It can't tell you "edit the C at position 8993, leave the C at position 8995 alone." It sees a region of DNA, and it attacks any C in that region that's in a context it likes. The TALE arms determine where the deaminase gets positioned — they bring it to a particular spot — but once it's there, within the ~14-18 base-pair spacer between the two TALE arms, every C is a potential substrate.

Some Cs get edited more than others, depending on a few factors. The most important factor is **sequence context**. DddA has a strong preference for cytosines preceded by a thymine — the so-called **TC dinucleotide**. A C with a T immediately upstream gets edited efficiently. A C with an A, G, or C upstream gets edited much less efficiently, sometimes not at all. This preference comes from the structure of DddA's active site, which makes specific contacts with the nucleotide just 5' of the target C.

The second factor is **position within the spacer**. Cs near the center of the spacer tend to get edited more efficiently than Cs near the TALE binding sites, because the geometry of the reassembled DddA places its active site in the middle of the gap.

\[Pause.\]

Here's the practical consequence. **Suppose you want to install a specific C-to-T edit at a particular position in mtDNA, and your TALE arms place that position in the middle of the spacer.** Great. The target gets edited. But suppose, three bases away, there's another C in a TC context. It will also get edited, possibly at a similar rate. Now you've installed two edits, when you wanted one. Some mtDNA copies will have only the intended edit. Some will have only the bystander edit. Some will have both. Some will have neither. You've created a heterogeneous mess.

For some applications, the bystander is fine — for example, if the bystander C-to-T conversion is silent or in a non-coding region, you don't care. For other applications, the bystander is disastrous — for example, if the bystander edit changes another codon and produces a different mutation. You might fix the disease-causing mutation only to introduce a new one a few bases away.

This is why, when designing a DdCBE construct for a particular target, you have to look carefully at the sequence around your target. You ask: are there other Cs in the spacer? Are they in TC contexts? What happens if they get edited — silent, missense, nonsense? Can I shift my TALE arm positions to put those Cs outside the spacer, or to position them at less-preferred edges of the editing window?

For some disease-causing mtDNA mutations, the surrounding sequence cooperates, and you can install a clean edit with minimal bystander. For others, the surrounding sequence is unfortunate, and you face a hard design choice: live with the bystander, or wait for a more precise deaminase.

\[Pause.\]

This is exactly the same problem that first-generation nuclear cytosine base editors had. The editing window of CBE3 — the original Liu lab cytosine base editor — is about 5 base pairs wide, and any C in that window can be edited. Bystander editing has been a known issue in nuclear base editing since 2016, and the response from the field has been to engineer narrower-window variants — base editors with deaminases that have more stringent sequence preferences, smaller activity windows, or both. We've gotten quite good at this in the nuclear context. Variants like CBE4max with narrower windows, or YE1 and YEE deaminase variants with restricted sequence preferences, have made nuclear cytosine base editing much more precise than the original BE3.

The mitochondrial field is now repeating that engineering effort for DddA. The original DdCBE used the wild-type DddA active site, with its strong TC preference and broad editing window across the spacer. Subsequent papers have produced variants of DddA with **narrower sequence preferences** — variants that edit only at specific dinucleotide contexts and leave nearby Cs alone — and these are the variants that are starting to enable cleaner, more precise mtDNA editing. We'll cover those in Segment 10.

\[BREAK\]

---

\[Mid-lecture break. Take ten minutes. When we come back, we're going to talk about how the field is engineering around the bystander problem with new DddA variants, how a second team built an adenine version called TALED to do A-to-G editing in mtDNA, and what the path from these laboratory tools to actual therapies for mitochondrial disease patients looks like.\]

---

## SEGMENT 10 — Engineered DddA variants — DddA6, DddA11, and narrowing the window

Welcome back. Let's pick up exactly where we left off: the bystander problem. The Liu lab and others recognized very quickly after the 2020 paper that wild-type DddA's TC preference, while real, was too permissive — it left enough Cs in the spacer accessible to editing that designing a clean single-letter edit was often impossible. The fix had to come from engineering DddA itself.

In 2022, the Liu lab published a series of evolved DddA variants in _Nature Biotechnology_. The first author, again Beverly Mok, ran the constructs through directed evolution — the same lab-scale natural selection technique we discussed in the base-editing lecture, the one Frances Arnold won the Nobel for. The Liu lab built bacterial selections that linked survival to specific deaminase activities, mutagenized DddA, picked survivors, and iterated.

Two important variants came out of this work. **DddA6** is a variant with substantially higher activity than wild-type DddA — about three times more efficient at editing in the original TC context. This matters because higher activity means you can get useful editing in cells that are hard to deliver to, or with constructs that have lower expression. DddA6 is the workhorse for applications where you want more editing without worrying about sequence preference.

**DddA11** is the more interesting variant for the bystander problem. DddA11 was selected to edit cytosines in contexts other than TC — specifically, it edits AC, CC, and GC cytosines in addition to TC. That sounds like it would make bystander editing worse, not better. And in some sense it does — DddA11 is broader. But the practical advantage is that DddA11 can target cytosines that DddA could never edit, opening up new disease mutations to therapy. For a pathogenic mutation in an AC or CC context, DddA11 is the only option, and the editing achieved in AC and CC contexts is high enough to matter clinically.

\[Pause.\]

The broader research effort has produced variants going in the opposite direction too — variants with **narrower** sequence preferences than wild-type DddA, designed specifically to reduce bystander editing. These typically work by introducing mutations in the DddA active site that make the enzyme more sensitive to the bases flanking the target C. The result is an editor that's more picky, edits fewer Cs in the spacer, and produces cleaner outcomes at the cost of lower overall editing efficiency.

There's a fundamental tradeoff here that you should internalize, because it shows up over and over in base editing. **You can trade specificity for efficiency, but you can't get both perfectly.** A deaminase that only edits Cs in a very specific context will, by definition, edit fewer Cs total — including, sometimes, the target C if its context is suboptimal. A deaminase that edits many contexts will edit your target well but will edit bystanders too. There is no free lunch. You design your editor based on the priorities of the application — do I need very clean single-letter editing, or do I need high efficiency on a hard-to-edit site?

\[Pause.\]

A second line of engineering has focused not on the deaminase itself but on the **linker** between the TALE arm and the DddA half. The geometry of where the DddA halves meet is partly controlled by how long and how flexible the linker is. A short, rigid linker constrains the halves to meet at a specific position in the spacer; a long, flexible linker lets them meet over a broader window. By tuning the linker, you can adjust the editing window — make it narrower if you want a tight target, wider if you want flexibility. Optimal linker design is now a routine part of designing a new DdCBE construct.

And a third line of engineering has focused on the **TALE arms themselves**, with researchers exploring whether you can use other DNA-binding scaffolds — like zinc finger arrays — in place of TALEs. We'll come back to this in Segment 17 when we discuss zinc-finger-deaminase fusions. But for now, the variant most commonly used in mitochondrial editing experiments is a DdCBE with optimized TALE arms, DddA6 or a narrow-window evolved variant, an engineered linker, and UGI. That's the second-generation mitochondrial editor, circa 2024.

---

## SEGMENT 11 — TALED — the adenine version of the story, and another impossible enzyme

Now I want to tell you a story that parallels exactly what happened in the nuclear base editing world, but for mitochondria. Remember from the base-editing lecture how, after CBE was published, the obvious question was: can we do this for adenine? And remember how the answer was almost no, because no enzyme that deaminates adenine in DNA exists in nature, and the Liu lab had to evolve one — TadA — from a tRNA-modifying enzyme through directed evolution? That's the famous ABE story.

The same exact problem reappeared for mitochondrial editing. After DdCBE was published in 2020, everyone immediately asked: can we do an adenine version, for A-to-G editing in mtDNA? Because many disease-causing mtDNA mutations are A-to-G changes that would need to be reverted, and many other pathogenic mutations could be repaired by a different A-to-G edit elsewhere. Like nuclear ABE, an adenine mitochondrial base editor would massively expand the targetable disease space.

But the same problem applied. **No naturally occurring adenine deaminase that works on double-stranded DNA exists.** Just like for nuclear ABE in 2016, there was no starting material from nature to fuse onto a TALE arm. The chemistry had to be engineered.

\[Pause.\]

The breakthrough came in 2022 from a Korean team led by Jin-Soo Kim at the Institute for Basic Science in Daejeon, with Hyunji Yoo and others as co-authors. They published a construct they called **TALED** — TALE-linked deaminase, where the D stands for adenosine deaminase. The architecture is essentially the same as DdCBE — two TALE arms flanking the target, mitochondrial targeting sequences for import — but with adenosine deaminase chemistry instead of cytidine deaminase chemistry.

The deaminase they used was a variant of **TadA8e** — the highly evolved version of TadA that Liu's lab had developed for nuclear adenine base editing. TadA8e normally requires single-stranded DNA, just like APOBEC1. Bringing it to mitochondria, you'd think, would have the same problem we had with cytidine deaminases — no single-stranded substrate available, no editing.

The Kim lab's trick was to **combine TadA8e with a split DddA scaffold** that didn't actually do the cytidine deamination. Specifically, they used a catalytically inactive version of DddA — a DddA that still binds and processes DNA but doesn't deaminate cytosines — and showed that this inactive DddA, when split between two TALE arms, generates enough local single-strandedness on the dsDNA to allow TadA8e to deaminate an adenine in the spacer. The DddA halves serve as a kind of helix-opening assistant, not as a deaminase. The actual catalytic chemistry is done by TadA8e on the briefly single-stranded patch that the DddA halves create.

The result is **A-to-I editing in mtDNA**, where the inosine is read as G by the cell's replication machinery — so the net effect is **A-to-G**. The same chemistry as nuclear ABE, just delivered to mitochondria via the TALE/DddA-scaffold approach instead of via Cas9.

\[Pause.\]

The 2022 TALED paper, published in _Cell_, showed targeted A-to-G editing in mtDNA at multiple sites in human cells, with editing efficiencies in the same range as DdCBE — roughly 5% to 50%. Combined with DdCBE for C-to-T edits and TALED for A-to-G edits, the mitochondrial editing toolkit now covers two of the four transition mutations, which is the same coverage that ABE plus CBE provide in the nuclear genome.

Note what TALED required that no one had appreciated at first. You needed not just an adenine deaminase, but a **helix-opening accessory** to expose the adenine for editing. The split inactive DddA serves exactly this role — it doesn't edit, but it opens a local single-stranded patch by virtue of how it engages the duplex. Without that accessory, TadA8e would have no substrate. The TALED design effectively uses two different enzymatic activities — DddA's helix engagement and TadA8e's adenine deamination — in a coordinated single construct. It's a beautiful piece of biochemical engineering, and it extends the platform from C-to-T to A-to-G coverage.

\[Pause.\]

I want to flag one thing about TALED that's still under active investigation. Some early reports raised concerns about TALED's off-target editing in the nuclear genome and in the mitochondrial transcriptome — specifically, that TadA8e in the TALED construct might edit RNA as well as DNA, since TadA8e's parent enzyme TadA evolved to edit tRNA. This kind of RNA off-targeting has been a known concern with nuclear adenine base editors as well, and it's an area where the engineering community is working on cleaner variants. The TALED story is genuinely promising but, as of the most recent literature, still being refined.

So between DdCBE and TALED, we now have two complementary mitochondrial editors. C-to-T and A-to-G. The same two transitions that nuclear base editing covers. The mitochondrial genome, locked away for thirty years, is now editable for those two chemistries.

---

## SEGMENT 12 — The mouse model proofs — DdCBE-corrected mitochondrial disease in vivo

Editing in cultured cells is necessary but not sufficient for clinical relevance. To know whether DdCBE could plausibly become a therapy, the next step was to show that it works in a whole animal, ideally in a model of actual mitochondrial disease, ideally with measurable rescue of disease phenotype.

By 2023, multiple groups had begun publishing mouse studies, and these are where the therapeutic promise of DdCBE started to take concrete shape.

The most striking of these studies came out of the same Liu lab and several collaborators. They used a mouse model of mtDNA disease — mice carrying a heteroplasmic pathogenic mtDNA mutation — and delivered DdCBE constructs in vivo, primarily to muscle and heart tissues, using adeno-associated virus (AAV) vectors. AAV is a well-established gene therapy delivery vehicle that can be packaged with the DdCBE coding sequences. You inject the AAV, the virus enters the target tissue, the cell makes the DdCBE protein, the protein gets imported into mitochondria, and editing occurs.

The results showed measurable heteroplasmy shifts in vivo. Mouse muscle that started with high mutant load shifted toward more wild-type after AAV-DdCBE treatment. In some cases, the shift was clinically meaningful — bringing the mutant load below the disease threshold for that mutation — and was associated with biochemical rescue of mitochondrial function, with improvements in respiratory chain activity and ATP production in the treated tissues.

\[Pause.\]

This is the proof of principle the field needed. **It is possible, in a living mammal, to deliver a DdCBE construct to disease-relevant tissues, install targeted edits in mtDNA, shift heteroplasmy toward wild-type, and rescue biochemical phenotypes of mitochondrial disease.** That's a long sentence, but every clause in it was, just three years before, completely unproven.

Several caveats. The mouse models aren't perfect recapitulations of human mitochondrial disease — they're engineered systems where researchers introduced specific mutations to enable the experiments. The tissue distribution of editing is uneven — muscle and heart edit reasonably well after intravenous AAV, but the central nervous system, where Leigh syndrome wreaks its worst damage, is harder to reach with AAV. And the magnitude of heteroplasmy shift — usually a few tens of percent — is enough to rescue some phenotypes but not enough to fully correct severe disease.

Still, the directional evidence is real. Editing works in vivo. It shifts heteroplasmy. It rescues function. The platform isn't a theoretical curiosity anymore — it's a candidate therapy in the very early stages of translational development.

\[Pause.\]

A second important class of in vivo experiments has used DdCBE not to correct existing mutations but to **install new mutations** in animal models, to create reliable models of mitochondrial disease for further research. This is a much easier experiment than correcting a disease — you're using DdCBE in its most natural mode, installing a single C-to-T at a specific position — and it's been done successfully in mice, rats, and other organisms. The result has been a flowering of new mtDNA disease models that didn't exist before, because there was no way to make targeted mtDNA mutations in animals.

For example, several groups have used DdCBE in mouse embryos to install the mouse equivalents of known human pathogenic mutations, then bred the founders to establish lines that recapitulate the human disease at the mtDNA level. These models will support the next decade of mitochondrial disease research, drug screening, and therapy development. So even before DdCBE becomes a therapy itself, it's already a tool that's reshaping the research landscape for mitochondrial disease.

---

## SEGMENT 13 — Therapeutic prospects — Precision Bio, Editas, and the clinical path

So where does this go commercially? In 2024 and into 2025, several companies have announced programs exploring DdCBE-style mitochondrial editing as a therapeutic platform. The two most visible in the U.S. context have been **Precision BioSciences** and **Editas Medicine**, both of which have published preclinical work on mitochondrial editing and indicated interest in moving programs forward.

The clinical path for mitochondrial editing is going to look different from the clinical path for nuclear base editing, and you should understand why.

For nuclear base editing, the lead clinical program — Verve Therapeutics' VERVE-101, targeting PCSK9 in the liver for cardiovascular disease — uses an in vivo lipid nanoparticle delivery to the liver. You infuse the LNP, it goes to hepatocytes, the editing happens there. That's clean: one target tissue, well-understood delivery, well-understood biology. Verve started human trials in 2022.

For mitochondrial editing, the target tissue depends on the disease. Leigh syndrome's worst damage is in the brain — you need to deliver to neurons, which is hard. MELAS affects muscle, brain, and metabolism — you need to hit multiple tissues. MERRF involves muscle and brain. Each disease has its own delivery problem, and unlike the liver, which is easy to deliver to with lots of well-characterized vectors, the brain and skeletal muscle are challenging delivery targets.

\[Pause.\]

The most likely first clinical applications will probably be in tissues that are easier to deliver to. Eye and ear are candidates — both are accessible by direct injection, both are affected in some mitochondrial diseases (Leber's hereditary optic neuropathy is an mtDNA disease of the retinal ganglion cells; some forms of mitochondrial hearing loss affect cochlear hair cells). Muscle is reasonably accessible by systemic AAV delivery. The brain, particularly deep brain structures like the brainstem, is the hardest, and will require novel delivery approaches.

There's also the question of **ex vivo versus in vivo editing**. For some mitochondrial diseases, you might be able to take a patient's hematopoietic stem cells out of their bone marrow, edit them in a dish with DdCBE, expand them, and put them back. The patient's blood would then be edited. But most mitochondrial diseases aren't fundamentally blood diseases, so ex vivo HSC editing is only useful for the narrow set of conditions where mitochondrial dysfunction in blood matters.

For most mitochondrial diseases, you'll need to deliver in vivo to the affected tissue. AAV is the leading candidate, but each tissue requires its own optimization of capsid serotype, dose, and route of administration. The clinical development path for any specific mitochondrial editing therapy will therefore be longer and more bespoke than the clinical path for a liver-targeted nuclear edit.

\[Pause.\]

Still, the trajectory is clear. **DdCBE is positioned to be the first generation of approved mitochondrial editing therapies.** Whether the first approval comes in the late 2020s for a specific tissue-accessible disease, or in the early 2030s for a more challenging delivery scenario, the technology is now real enough that the regulatory framework around it has to be built. The FDA has begun discussions on what evidence would be needed to support clinical trials for mtDNA editing — what heteroplasmy shift counts as a meaningful endpoint, what safety data is required, how long-term follow-up should be structured.

If you're a student now and you're thinking about going into mitochondrial medicine, the field is in roughly the same state nuclear base editing was in 2018 — proof of concept established, first companies forming, clinical translation a few years off, the tools rapidly improving. That's a great time to enter a field.

---

## SEGMENT 14 — Limitations — heteroplasmy thresholds, delivery, and the long-term durability problem

Let me now lay out, honestly, the limitations of mitochondrial editing as it stands. Because every revolutionary technology has them, and the limitations are where the next decade of research will be focused.

The first limitation is the **heteroplasmy threshold**. As we discussed in Segment 3, the clinical benefit of mitochondrial editing depends on shifting heteroplasmy across a disease-specific threshold. Different mutations have different thresholds — some can be partially compensated below about 60% mutant load, others tolerate up to about 90% before showing symptoms. To get clinical benefit, your editing has to push the heteroplasmy to the correct side of the threshold in enough cells in the affected tissue.

The empirical efficiency of DdCBE, in vivo, is typically 5% to 30% in the most accessible tissues. That's enough to shift heteroplasmy meaningfully, but only if the starting heteroplasmy is in the right range. A patient who is 95% mutant is going to be very hard to get below threshold with current editors — you'd need to flip about 30% of their mtDNA copies, which is at the high end of what's been achieved. A patient who is 70% mutant is much easier — a 15% shift gets you below most disease thresholds.

This means that **mitochondrial editing therapy may be most useful for patients with intermediate heteroplasmy who are deteriorating but not yet at the worst end of the disease spectrum.** That's actually a clinically relevant population, but it's not the population with the highest unmet need — which is the severely affected patients with very high heteroplasmy.

\[Pause.\]

The second limitation is **tissue-of-interest delivery**, which I touched on in Segment 13. Even with optimal editing in a dish, you don't help a patient unless your editor reaches the affected cells. For a brain-predominant disease like Leigh syndrome, you need to deliver to neurons and glia in specific brain regions, which is still a delivery problem nobody has solved well, even for nuclear gene therapy.

The third limitation is **long-term durability**. Edits installed in mtDNA are propagated as the mtDNA is replicated by the mitochondrial polymerase. mtDNA replicates throughout the life of the cell, and edited copies are subject to whatever selective forces affect mtDNA copy maintenance. In some cases, edited copies might be at a fitness advantage and increase in frequency over time. In other cases, they might be neutral, and the heteroplasmy stays where you put it. In yet other cases, they might be at a disadvantage, and the heteroplasmy drifts back toward the original state.

We don't yet have great long-term follow-up data on DdCBE-treated cells. The available data, mostly from short-term cell culture and few-month animal studies, suggests that edits are generally stable, with some sites showing slight drift in either direction. But whether the heteroplasmy a year after treatment will resemble the heteroplasmy at one week is, for most contexts, an open question.

\[Pause.\]

The fourth limitation is **off-target editing**, which we discussed in Segment 8. DdCBE has measurable off-target activity in the nuclear genome, particularly at TC sites that partially match the intended target. Some of these off-targets might be benign — silent mutations, intronic, in non-coding regions — but some might not be. The safety profile of mitochondrial editing therapies will depend on demonstrating that off-target effects are below a tolerable threshold for clinical use, and the toolbox for measuring and reducing off-targets is still developing.

The fifth limitation is **the chemistry of what you can edit**. DdCBE does C-to-T. TALED does A-to-G. That covers two of the four transition mutations. But many disease-causing mtDNA mutations are transversions — C-to-G, A-to-T, A-to-C, and so on — and these are not currently editable by either platform. You also can't do insertions, deletions, or replacements. So if your disease is caused by a transversion or a small indel, current mitochondrial base editing doesn't help. We'll come back to this in Segment 18 when we discuss frontier work on mtDNA writers.

\[Pause.\]

Take all five limitations together, and the honest assessment is: **mitochondrial base editing is a real and powerful new capability, but it's not yet a broad clinical solution.** It opens a door that was firmly shut. It enables therapies for a meaningful subset of patients. It provides research tools for understanding mtDNA disease. And it sets up the next decade of engineering effort to broaden the scope, improve the efficiency, and reduce the off-target burden.

I want you to leave today with respect for both what's been achieved and what remains. Five years ago, mitochondrial editing was effectively impossible. Today, it's a real tool with clinical programs forming around it. Five years from now, it'll be more precise, more efficient, and addressing a wider range of mutations. The trajectory is steep. The work is real.

---

## SEGMENT 15 — Mitochondrial DNA replacement therapy — pronuclear transfer and the three-parent baby alternative

Before we leave the clinical picture, I want to spend a segment on the **older alternative** to mitochondrial editing — a completely different approach to mitochondrial disease that doesn't edit mtDNA at all, but replaces it. This is sometimes called **mitochondrial replacement therapy** or **mitochondrial donation**, and in the popular press it's known as the **three-parent baby** technique. It was approved for clinical use in the UK in 2015, and a handful of children have been born using it. It's worth understanding because it's the comparator that DdCBE-style therapies are implicitly competing with for the most severe cases.

Here's the idea. The problem with maternally transmitted mtDNA disease is that a mother with pathogenic mtDNA will pass it to all her children. If you can't fix the mother's mtDNA, but you can replace it before fertilization, then her child can be born free of the disease. The replacement happens at the level of the egg.

In **pronuclear transfer**, you fertilize the affected mother's egg with the father's sperm in vitro, producing an early embryo with two pronuclei — one from each parent — that haven't yet fused. You also fertilize a donor egg, from a woman with healthy mtDNA, with the same father's sperm. Then you remove the pronuclei from the donor's fertilized egg, leaving an enucleated donor cell with healthy cytoplasm and healthy mtDNA. You insert the affected mother's pronuclei into this enucleated donor cell. The resulting embryo has nuclear DNA from the mother and father, and mtDNA from the donor. The mother's pathogenic mtDNA has been replaced.

The child born from this embryo has three genetic contributors — nuclear DNA from two parents, mtDNA from a third (the donor). Hence the "three-parent baby" name. The mtDNA contribution is tiny — 16,569 base pairs out of 3.2 billion, less than 0.001% of the total genome — and encodes only the 37 mitochondrial genes. The donor doesn't share other traits with the child. But she does share that small slice of inheritance.

\[Pause.\]

A related technique is **maternal spindle transfer**, which does the same thing but at an earlier stage. You take the affected mother's egg, isolate the spindle apparatus (which contains the maternal chromosomes), and transfer that spindle into an enucleated donor egg. Then you fertilize the resulting reconstituted egg with the father's sperm. The biology is the same — nuclear DNA from the parents, mtDNA from the donor — but the technical steps differ.

The UK Parliament approved mitochondrial replacement therapy in 2015 after extensive ethical and scientific review. The first births under the program have been reported quietly since then, with limited public detail but generally positive outcomes. Mexico, Greece, and Ukraine have also seen children born from mitochondrial donation procedures, sometimes outside formal regulatory approval. In the United States, the FDA does not currently authorize clinical mitochondrial donation, though research is permitted.

\[Pause.\]

So when DdCBE is being considered as a therapy, the implicit comparison for prevention of maternal mtDNA disease transmission is mitochondrial replacement therapy. Here's the comparison.

Mitochondrial replacement therapy works at the embryo level — it prevents the disease in the child but does nothing for existing patients. The child grows up healthy because their cells have donor mtDNA, but the mother still has her disease, and her siblings, parents, and any existing affected family members are not helped.

DdCBE-style therapy works at the tissue level in living patients — it potentially helps people who already have the disease, by shifting heteroplasmy in their existing cells. It does not prevent transmission in the same clean way that mitochondrial replacement does, though if applied to oocytes, it could in principle reduce the mutant load enough to make transmission safer.

The two approaches are complementary rather than competing. For preventing transmission, mitochondrial replacement is the established option where it's approved. For treating existing disease, mitochondrial editing is the new option. The clinical and ethical frameworks are different, the patient populations served are different, and the regulatory paths are different.

\[Pause.\]

There's an interesting third option that's been explored — using **DdCBE in oocytes themselves**, as a way to reduce mutant heteroplasmy in eggs before they're fertilized. This could be a less ethically fraught alternative to mitochondrial replacement, because the resulting child would still have only two genetic parents — no donor cytoplasm involved — but with reduced mutant load thanks to editing. This work is in very early stages and faces all the usual concerns about embryonic editing safety, but it's an example of how the new editing platform might integrate with, or substitute for, the older replacement technologies.

---

## SEGMENT 16 — mitoTALEN and the era before DdCBE — selective destruction of mutant mtDNA

I want to step back and acknowledge that mitochondrial editing did exist, in a different form, before DdCBE. From roughly 2008 onward, several groups had been using **mitoTALEN** — and earlier, **mitoZFN** — constructs to introduce double-strand breaks specifically into mutant mtDNA copies, with the goal of triggering their destruction. These approaches don't make targeted edits — they don't change one letter to another. They destroy specific mtDNA copies based on sequence, leaving wild-type copies intact. The net effect is a shift in heteroplasmy: mutant copies down, wild-type copies up.

The mechanism relies on a key property of the mitochondrion. **Mitochondria don't have robust homologous recombination repair, and they don't tolerate double-strand breaks in mtDNA well.** When you introduce a DSB into an mtDNA molecule, the mtDNA molecule is generally degraded rather than repaired. The mitochondrion essentially gives up on that copy and lets it be broken down. The remaining intact copies — those that weren't cut — replicate to restore the total copy number.

If you can target your TALEN or ZFN to cut only mutant mtDNA, leaving wild-type alone, then over time the mutant copies get destroyed and replaced by the proliferating wild-type copies. The heteroplasmy shifts. The cell ends up with a higher fraction of wild-type mtDNA.

\[Pause.\]

This approach was developed and refined over a decade, with significant contributions from Carlos Moraes's lab at the University of Miami and others. By 2018, mitoTALEN had been used to shift heteroplasmy in mouse models of mtDNA disease — installing the human disease-causing mutation in mouse mtDNA, then using a mitoTALEN to selectively cut the mutant copies and shift heteroplasmy back toward wild-type. The proof of concept for therapeutic mtDNA heteroplasmy shifting was established years before DdCBE, with mitoTALEN as the tool.

So why hasn't mitoTALEN become a major therapeutic platform? Several reasons.

First, **mitoTALEN only works when there's a sequence difference between mutant and wild-type that you can target.** If the disease is caused by a single base change, you need a TALEN that distinguishes that single base — which is hard, because TALEN cleavage tolerates some mismatches. So selectivity for the disease allele over the wild-type allele is imperfect, and you end up cutting both, which is bad.

Second, **mitoTALEN reduces total mtDNA copy number transiently**, because cutting destroys copies before replication can replace them. This can stress the cell, and the recovery phase has its own issues.

Third, **mitoTALEN can't repair mutations — it can only remove them**. If your patient has 95% mutant and 5% wild-type, mitoTALEN can shift that to 50:50 or 30:70 by selective destruction, but it can't generate new wild-type copies. The 5% you start with has to multiply to fill the gap. DdCBE, in contrast, can convert mutant copies directly into wild-type copies, creating new wild-type from old mutant. That's a more efficient route.

Fourth, **mitoTALEN can't install a useful mutation or correct a polymorphism for research purposes** — it's an allele-destroyer, not an allele-changer.

\[Pause.\]

That said, **mitoTALEN remains a useful tool** for the contexts in which it works well — particularly when the disease-causing mutation creates a substantially different sequence from wild-type that's easy to distinguish, and when destruction rather than correction is acceptable. There are also therapeutic strategies in clinical development that use mitoTALEN-like approaches, particularly through companies like Stoke Therapeutics and others working on mtDNA-related platforms.

There's also an interesting variant called **PESCAR**, and related approaches that fuse a sequence-specific binding domain to a mtDNA-degrading nuclease. The same general logic — find and destroy mutant copies — with different molecular implementations.

So the picture you should hold is: **before DdCBE, the mitochondrial editing toolkit was destructive — cut mutant mtDNA, let wild-type take over. With DdCBE and TALED, the toolkit becomes constructive — directly convert mutant letters to wild-type, without needing to destroy.** That's a categorical change in what's possible, and it's the reason 2020 marks the genuine birth of mitochondrial editing as a therapeutic field.

---

## SEGMENT 17 — Zinc finger deaminase fusions and the broader mtDNA toolkit

While DdCBE used TALE arms for targeting, there's no fundamental reason the targeting has to be TALE-based. Any protein-only sequence-specific DNA-binding domain that can be imported into mitochondria can in principle serve. The two main alternatives that have been explored are **zinc finger arrays** and **engineered meganucleases**.

**Zinc finger arrays**, which we discussed briefly in the TALEN lecture, are small protein modules that each recognize about three bases of DNA. They're more compact than TALE arrays, which matters for delivery — particularly for AAV, which has a packaging limit of about 4.7 kilobases that can be a tight fit for full TALE-based constructs. A zinc-finger version of DdCBE — let's call it ZF-DdCBE, though different groups use different names — would be smaller and potentially more deliverable.

The downside of zinc fingers, as we covered before, is that they're harder to design. Each zinc finger doesn't behave fully independently — context matters, neighboring fingers can interfere, design takes more iteration. But for some specific targets, zinc finger arrays have been successfully engineered and fused to split DddA, producing functional mtDNA cytosine base editors with the targeting compactness advantage.

Several papers have reported **zinc-finger-DddA fusions** for mtDNA editing, with comparable editing efficiencies to TALE-based DdCBE at sites where the zinc fingers were successfully designed. As zinc finger design becomes more reliable with computational tools and as the AAV size constraint pushes toward more compact constructs, zinc-finger-based mtDNA editors may take over from TALE-based ones for some applications.

\[Pause.\]

**Engineered meganucleases** — proteins like I-CreI variants that naturally cut very long DNA sequences and have been re-engineered to cut new targets — have also been used as the targeting arm of mtDNA editing constructs in some experimental work. These are an interesting middle ground between zinc fingers (compact but hard to engineer) and TALEs (easy to engineer but bulky). They haven't seen as much traction as the other approaches, but they're part of the broader toolkit.

There's also been work on **mitochondrial CRISPR systems** despite the guide-RNA-import problem. Some groups have continued to try to crack the RNA import problem with engineered guide RNAs that piggyback on protein imports, with mixed results. The Pollack lab and a few others have published reports of mtDNA editing using CRISPR-Cas9 or Cas12 with engineered guide-RNA delivery, but the editing efficiencies remain low and the consistency between labs has been an issue. CRISPR-based mtDNA editing is still a much smaller and more uncertain field than TALE-DddA based mtDNA editing.

\[Pause.\]

There's a beautiful general principle here that I want you to take away. **A molecular tool is a composition of three components: a targeting module, a chemistry module, and an delivery module. You can swap any one of these independently as long as the others are compatible.** In nuclear editing, we've swapped Cas9 variants for different PAMs, Cas12 for compactness, Cas13 for RNA editing — all while keeping the deaminase chemistries (APOBEC1, TadA) constant. In mitochondrial editing, we're now swapping TALE for zinc finger for meganuclease, while keeping DddA (or its derivatives) constant as the chemistry. The modularity of these systems — recognized at the design level — is what makes the engineering tractable.

For your mental model: the mitochondrial editing toolkit is a **family**, not a single tool. DdCBE is the founding member. TALED is the adenine cousin. Zinc-finger-DddA fusions are the compact-delivery cousin. mitoTALEN is the older destructive cousin. They share the underlying logic of protein-only targeting and DddA-based or DddA-scaffolded chemistry. They differ in the specific modules they use. The family will continue to grow.

---

## SEGMENT 18 — The frontier — chloroplast editing, mtDNA writers, and what comes next

Let me end by sketching where the field is going next, because this is one of the fastest-moving areas of molecular biology right now, and the lecture you'd hear two years from now would already be different from this one.

The first frontier is **chloroplast editing in plants**. Chloroplasts are, like mitochondria, descendants of an ancient bacterial endosymbiosis — in their case, a cyanobacterium engulfed by a eukaryotic cell that became the ancestor of all plants and algae. Chloroplasts have their own DNA, their own genome of roughly 100 to 200 genes, their own protein-only import machinery, and the same problem mitochondria had: no good way to do targeted editing because the guide RNA can't get in.

DdCBE-style approaches — using TALEs and split DddA fused to chloroplast targeting sequences — have been successfully demonstrated in plants by several groups, with the Liu lab and others publishing chloroplast editing in lettuce, tomato, and other crops by 2023 and 2024. This opens up plant chloroplast biotechnology in a major way — chloroplasts are important for photosynthesis, herbicide resistance, vitamin biosynthesis in fortified crops, and recombinant protein production. A targeted editor for chloroplasts is potentially transformative for agriculture and plant synthetic biology.

\[Pause.\]

The second frontier is **mtDNA writers** — editors that can do insertions and deletions, not just substitutions. Right now, DdCBE and TALED can do C-to-T and A-to-G — point mutation corrections. But many disease-causing mtDNA changes are not simple substitutions. mtDNA can have deletions (chunks of the 16,569 base pairs missing, causing diseases like Kearns-Sayre syndrome) and, rarely, insertions. Correcting these requires not just deamination chemistry but the ability to add or remove sequence.

In the nuclear genome, **prime editing** — another David Liu lab tool, where a Cas9 nickase is fused to a reverse transcriptase that templates in new sequence from a guide-RNA-encoded template — has solved much of this problem. But prime editing requires Cas9 and a guide RNA, both of which fail in mitochondria for the reasons we've discussed. Building a mitochondrial equivalent of prime editing — call it mtDNA prime editing, or mitoPE — is a frontier challenge. Some early concepts have been proposed; whether they can be made to work robustly is an open question for the next few years.

Beyond prime editing, there's interest in **mtDNA recombineering** — using bacterial recombination machinery imported into mitochondria to facilitate larger-scale changes — and in **mtDNA-targeted polymerase variants** that could in principle introduce specific changes during replication. These are speculative, but the precedents from bacterial systems are real.

\[Pause.\]

The third frontier is **broader applications of DddA-based editing beyond organelles**. Now that we have a deaminase that works on intact dsDNA, can we use it for nuclear editing in contexts where Cas9 or its R-loop is problematic? Some researchers have explored DddA-based editing platforms that use TALE or zinc-finger targeting in the nucleus, as alternatives to Cas9-based base editors. These might have different specificity profiles, different windows, different bystander patterns — useful for some specific editing problems.

DddA-based editors might also be useful in **bacterial editing**, where the toxin originally came from. Some groups are exploring DddA-based tools for engineering bacterial genomes, particularly in organisms where CRISPR systems are toxic or unavailable.

\[Pause.\]

The fourth and final frontier is the integration of mitochondrial editing into **multi-organelle, multi-genome therapies**. Imagine a future therapy for a disease caused by both nuclear and mitochondrial defects — perhaps a metabolic disease where nuclear and mtDNA mutations together cause the phenotype. The therapy might use Cas9-based nuclear base editing and DdCBE-based mtDNA editing in parallel, in the same cell, in the same patient. The clinical machinery to handle this kind of combined editing doesn't exist yet, but the molecular components do, and we'll see this kind of integration emerge in the next decade.

\[Pause.\]

Let me close. Five years ago, in 2020, the mitochondrial genome was unreachable. CRISPR couldn't touch it. The disease-causing mutations were a list we could read and write down but couldn't edit. Children with Leigh syndrome and MELAS and MERRF were stuck with the genetic hand they were dealt.

Today, that has changed. **DdCBE — David Liu's lab, Joe Mougous's bacterial toxin, the marriage of TALE-based targeting with bacterial-toxin-derived deaminase chemistry — opened the door.** TALED followed with adenine. Engineered variants improved specificity. Mouse models proved the concept. Clinical programs are starting to form. Chloroplast editing has extended the same logic to plants. Prime editing and DNA writing for mtDNA are the next frontier.

You are going to live through, possibly participate in, the maturation of this technology. By the time you're in mid-career, mitochondrial editing therapies will likely be in standard clinical use for at least some mitochondrial diseases, and the technical questions we're worrying about today — the bystander problem, the delivery problem, the heteroplasmy threshold — will have refined answers. The field that didn't exist in 2019 will be a textbook chapter by 2035.

That's the arc. A bacterial toxin nobody had heard of, in a Burkholderia strain on a soil bacterium, turned out to be the chemistry that unlocked a genome we'd been locked out of for thirty years. Biology is full of these stories — tools sitting in obscure corners of nature, waiting for someone to recognize what they could be used for. The 13 mitochondrial proteins encoded in your mtDNA are powering your brain right now as you sit in this room. They are powering it because they're being made by ribosomes inside organelles whose genomes we now know how to edit. That's where we are. Thank you for your attention, and let's take questions.

---

## APPENDIX — Reference notes for the speaker

This appendix is for the lecturer, not to be read aloud. It collects the key dates, papers, names, and numerical claims used in the lecture, along with notes on contested points and suggestions for board work.

**Foundational papers and dates.** The 2020 _Nature_ paper introducing DdCBE is Mok BY, de Moraes MH, Zeng J, et al., "A bacterial cytidine deaminase toxin enables CRISPR-free mitochondrial base editing," _Nature_ 583:631-637 (2020). The senior authors are David R. Liu (Broad Institute / Harvard) and Joseph D. Mougous (University of Washington). The 2022 _Cell_ paper on TALED is Cho SI, Lee S, Mok YG, et al., "Targeted A-to-G base editing in human mitochondrial DNA with programmable deaminases," _Cell_ 185:1764-1776 (2022), from Jin-Soo Kim's group at the Institute for Basic Science in Korea. The 2022 Mok et al. paper on evolved DddA variants is in _Nature Biotechnology_ — Mok BY, Kotrys AV, Raguram A, et al., "CRISPR-free base editors with enhanced activity and expanded targeting scope in mitochondrial and nuclear DNA," _Nat Biotechnol_ 40:1378-1387 (2022). The off-target characterization paper from the Bauer lab is Lei Z et al. on mtDNA editor off-targets, with subsequent corrections and refinements published over 2022 and 2023.

**Disease prevalence and mutation positions.** Mitochondrial DNA disease combined prevalence is conventionally cited at approximately 1 in 4,300 adults, based on Gorman et al., _Ann Neurol_ 77:753-759 (2015), with regional variation. T8993G in MT-ATP6 is the canonical Leigh/NARP mutation. A3243G in MT-TL1 (the leucine tRNA, UUR family) is the canonical MELAS mutation; the carrier frequency cited in the lecture (1 in 400 in some populations) is from population studies in Australia and the UK and is on the upper end of estimates. A8344G in MT-TK (the lysine tRNA) is the canonical MERRF mutation. The mitochondrial genome length of 16,569 base pairs is the revised Cambridge Reference Sequence (rCRS) for human mtDNA.

**Numerical claims to double-check before lecturing.** The "5% to 50% editing efficiency" range for DdCBE is a fair summary of the original 2020 paper's reported efficiencies and subsequent follow-up work, but specific sites vary substantially. The "60% wild-type threshold for clinical benefit" is a useful generalization but is mutation-specific; the actual threshold for any particular mutation should be looked up before quoting in a clinical context. The mitochondrial DNA copy numbers per cell (a few dozen to several thousand, depending on tissue) are broadly accurate but tissue-specific.

**Suggested board work.** During Segment 7 on DdCBE architecture, draw a horizontal double-stranded DNA with two TALE arms binding flanking sequences on opposite strands, with split DddA halves on the inner ends of each arm reassembling over the spacer. Label the mitochondrial targeting sequences at the N-termini and UGI at the C-termini. During Segment 11 on TALED, modify the same diagram to show TadA8e replacing one DddA half, with the inactive DddA half providing local helix opening. During Segment 3 on heteroplasmy, draw a single cell with a few hundred dots representing mtDNA copies, some red (mutant) and some green (wild-type), and show how the ratio shifts after editing.

**Common student questions and how to answer them.** "Why can't we just import the guide RNA?" — explain TOM/TIM specificity for protein with N-terminal targeting peptides; RNA has no analogous import pathway, and the engineering attempts have not produced a robust solution. "Is mitochondrial editing germline editing?" — only if applied to oocytes or embryos; somatic mtDNA editing in adult patients is not germline editing in the inheritance sense, because edits would not transmit unless they reached the patient's eggs. "How is DdCBE different from CRISPR-Cas9?" — emphasize the protein-only targeting (TALEs), the dsDNA-active deaminase (DddA), and the absence of nicking or R-loop formation, all of which are necessary because the mitochondrion can't host the CRISPR system. "What about prime editing for mitochondria?" — note that it's a frontier area, not yet solved, and explain why the Cas9-and-guide-RNA architecture of nuclear prime editing fails in mitochondria for the same reasons regular CRISPR fails.

**Pacing notes.** Segments 1 through 9 are intended for the first hour, with the break landing at the one-hour mark. Segments 10 through 18 fill the second hour. If you are running long, Segment 17 on zinc-finger fusions can be compressed without losing the core argument. If you are running short, expand Segment 12 with more detail on specific mouse model results, or Segment 13 with more detail on the clinical landscape. Segment 15 on mitochondrial replacement therapy is a useful place to invite student discussion about ethics, since the three-parent baby topic is naturally interesting to undergraduates.

**Resources for further reading.** The David R. Liu lab website at the Broad Institute maintains an up-to-date publications list including all DdCBE-related papers. Joe Mougous's lab page at the University of Washington has the DddA discovery papers. For mitochondrial disease clinical background, the United Mitochondrial Disease Foundation (UMDF) has accessible patient-facing materials. For the regulatory and ethical context of mitochondrial replacement therapy, the UK Human Fertilisation and Embryology Authority (HFEA) has published extensively on the framework that approved the three-parent baby technique.

---

_End of lecture script._
