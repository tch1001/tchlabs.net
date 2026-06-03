# mRNA Therapeutics: Delivering the Recipe Instead of the Meal

**A 2-hour undergraduate lecture on the modality that exploded during COVID and is now extending to protein replacement, cancer vaccines, and gene editing delivery — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, landing comfortably inside a two-hour slot. (Read faster, ~140 wpm, and you'll have generous room for questions or board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The central idea — deliver the recipe, not the meal

Alright. Let's begin. Today, for the next two hours, we are going to take apart a class of medicine that, until about five years ago, almost no working physician had ever administered, almost no patient had ever received, and almost no investor would touch with a ten-foot pole. And then, in a roughly twelve-month window between January of 2020 and the early months of 2021, that same class of medicine was injected into the upper arms of something like a billion human beings, all over the world, and it kept a substantial fraction of them out of intensive care units during a global pandemic. The class of medicine is **mRNA therapeutics**, and the story of how it went from a thirty-year scientific curiosity nobody wanted to fund into the fastest-deployed pharmaceutical platform in the history of biology is one of the most important stories in modern medicine.

I want to start with the central idea, because if you carry one sentence out of this lecture, I want it to be this one. **Instead of delivering a protein drug, you deliver the recipe for the protein, and you let the patient's own cells make the protein for you.**

\[Pause.\]

Think about what every other class of biological drug does. Insulin? You manufacture insulin in a bioreactor full of yeast or _E. coli_, you purify it, you concentrate it, you stick it in a vial, and you inject the finished insulin protein directly into the patient. Monoclonal antibody? You grow it in Chinese hamster ovary cells, you run it through a half-dozen purification columns, you formulate it, and you infuse the finished antibody protein directly into the patient. Erythropoietin, growth hormone, interferon, Factor VIII for hemophilia — every one of these is the same workflow. **You make the meal. You package the meal. You deliver the meal. The patient eats the meal.** The drug is the finished protein.

That workflow has been the entire game of biologics for forty years, and it has built an industry worth hundreds of billions of dollars. But it has fundamental limits. Manufacturing a protein in a bioreactor is slow, expensive, and protein-specific — every new protein requires a new manufacturing process to be developed from scratch, often taking years. Some proteins, particularly very large ones or very hydrophobic ones or proteins that require complex post-translational modifications, are genuinely hard or impossible to make this way. And once you've made the protein and injected it, it floats around in the bloodstream and gets cleared and degraded by the patient's body, often within hours or days, requiring repeated dosing.

mRNA therapeutics turns this entire workflow on its head. Instead of making the protein in a factory and shipping the protein to the patient, you make the **messenger RNA** that encodes the protein — the recipe — and you ship the recipe to the patient. The recipe gets into the patient's cells. The patient's own ribosomes — every cell has them, billions of them, sitting there idle most of the time — read the recipe and assemble the protein, fresh, on demand, inside the patient's own body. **The patient's kitchen makes the meal.** Then, after a few hours or a few days, the recipe degrades, the cell stops making the protein, and the whole event leaves no lasting trace in the genome. No integration. No edit. No permanent change. Just a brief, controlled, transient burst of protein production, sourced entirely from inside the patient.

\[Pause.\]

If you walk out of here in two hours and you can do three things — one, sketch on a napkin what an mRNA drug actually is, the four chemical features that make it work, and how it differs from DNA-based gene therapy; two, walk through what Katalin Karikó and Drew Weissman figured out in 2005 about pseudouridine and why nobody listened to them for fifteen years; and three, articulate why mRNA worked for COVID and what it can and cannot do in the next decade for cancer, rare disease, and gene editing — then we have done our job. Everything else hangs off those three.

And one framing question I want you to hold throughout the entire lecture, because it is the question this whole field is structured around: **mRNA therapeutics took roughly thirty years to go from idea to first approved drug, and then went from drug to global scale in eleven months.** Thirty years of slow, patient, mostly-ignored basic science. Eleven months of pandemic-driven deployment. The platform that emerged on the other side of those eleven months is, in 2026, being used to design treatments for cancer, for rare metabolic diseases, for in vivo gene editing, for personalized vaccines, and for things that didn't exist as ideas five years ago. The question is: how did that happen? What had to be true, scientifically and industrially, for a class of medicine to be unrecognized for three decades and then explode? That's the story we're about to walk through.

---

## SEGMENT 2 — Why this was supposed to be impossible — RNases, immune response, cell uptake

Before we get to the heroes of this story, I want to spend a moment on the villains, because to understand what Karikó and Weissman accomplished, you have to understand the wall they were running into. And the wall was tall.

If you took naked messenger RNA — the kind you make in a test tube from a DNA template, exactly as it comes off your in vitro transcription reaction — and you injected it into a person, three things would happen, very quickly, all of them bad.

The first thing that would happen is that the RNA would be **shredded by ribonucleases**. Ribonucleases, or **RNases**, are enzymes that cut RNA into pieces. Your body is absolutely lousy with them. They are in your blood. They are in your skin. They are on every surface in the lab — on the bench, on your gloves, on your pipette tip, on your own hands. RNases are some of the most stable, persistent, indestructible enzymes in biology. You cannot autoclave them all away. You cannot bleach them all away. Every working RNA biologist knows the curse — leave your RNA on the bench for ten minutes and it is gone, degraded, smeared into mononucleotides. In the bloodstream of a living human, the half-life of unprotected mRNA is on the order of minutes. **The recipe gets ripped up before it ever reaches a cell.**

\[Pause.\]

The second thing that would happen is that whatever mRNA survived would trigger a furious **innate immune response**. Your cells are not stupid. They have evolved, over hundreds of millions of years, to recognize foreign RNA as a sign of viral infection — because that's exactly what foreign RNA is, when it shows up in the wrong compartment. Many viruses are RNA viruses, and when they infect a cell, RNA from the virus appears in the cytoplasm, often in forms — double-stranded, or with unusual chemical features — that the cell has learned to detect.

The detection machinery has names. **TLR3**, **TLR7**, and **TLR8** — toll-like receptors — sit inside endosomes and watch for RNA that looks viral. **RIG-I** and **MDA5** sit in the cytoplasm and watch for RNA with structural features characteristic of viral replication. **PKR** — protein kinase R — gets activated by double-stranded RNA and shuts down translation across the entire cell. When any of these sensors fire, the cell launches a cascade — interferon production, inflammatory cytokines, recruitment of immune cells, sometimes apoptosis. The cell, suspecting infection, sounds the alarm and torches the infected tissue.

If you inject naked, unmodified mRNA into a person, every cell that takes it up sounds the same alarm. The systemic response is a flu-like illness — fever, malaise, fatigue, body aches — and at high enough doses it can be dangerous. Worse, the antiviral response also shuts down translation, which means the very recipe you just delivered cannot be read, because the cell has shut its ribosomes off as a defensive measure. The drug, in effect, tells the body "I am a virus," and the body responds by both attacking the drug and refusing to make any protein from it. Useless on both counts.

The third thing that would happen — actually the first thing, in some sense — is that the mRNA, even if it survived the RNases and didn't trigger the immune system, simply **cannot get into a cell**. The cell membrane is a lipid bilayer. mRNA is a long, negatively charged, hydrophilic polymer. Lipid bilayers do not let long, negatively charged, hydrophilic polymers cross them. Period. You can mix mRNA with cells in a dish all day long, and almost none of it will ever enter the cytoplasm where the ribosomes are. The recipe is sitting outside the kitchen, and the door is locked.

\[Pause.\]

So when, in the late 1980s and early 1990s, a few stubborn scientists started saying "I think we should make mRNA drugs," the reaction from the broader biomedical community was something like: "That is, mechanically, impossible. The molecule is too fragile. The immune system will reject it. It cannot enter cells. Pick another modality." The skepticism wasn't unreasonable. It was, on the basis of what was then known, correct.

What had to happen for mRNA therapeutics to become real was not one breakthrough but four, stacked on top of each other, each one solving a different piece of the impossibility. You had to figure out how to keep RNases off the molecule long enough to deliver it. You had to figure out how to make the molecule chemically invisible to the innate immune system. You had to figure out how to package the molecule in something that could actually deliver it into a cell. And you had to figure out how to make the molecule, once it was inside the cell, look enough like a real, native human mRNA that the ribosome would translate it efficiently and the cell wouldn't degrade it immediately.

Each of those four problems had a different solution, developed by different people, over roughly the same fifteen-year window from about 1990 to 2005. We are going to walk through each one. But the punchline is the same in all four cases: **the wall was tall, and it took an enormous amount of detailed, patient, often-thankless chemistry to climb it.** What looks, in hindsight, like an obvious platform was, at the time it was being built, a series of obscure technical problems being solved by people whose grant applications kept getting rejected.

---

## SEGMENT 3 — Pseudouridine and the Karikó-Weissman breakthrough

Let me tell you about a chemical letter. Just one letter. And how changing one letter in mRNA — and only one — turned out to be the trick that made an entire class of medicine possible.

The letter is called **pseudouridine**, written with the Greek letter psi, Ψ. To understand what it is, you need to remember the four letters of RNA: A, G, C, and U — adenine, guanine, cytosine, and uracil. Uracil is the one that's different from DNA, where instead of U you have T, thymine. In normal mRNA, you see U at every position where uracil shows up. That's the ordinary, textbook chemistry.

But here is the thing biology doesn't usually tell you in the textbook. Inside your cells, RNA molecules are constantly being **chemically modified** after they are made. There are over a hundred different known chemical modifications to RNA bases — methyl groups added, hydroxyl groups added, sometimes whole rearrangements of the base. These modifications appear in transfer RNAs, in ribosomal RNAs, and to a lesser but real extent in messenger RNAs themselves. The most abundant modification of all — present at thousands of positions across the cell's RNA — is pseudouridine, which is uracil with the linkage to the sugar moved from one nitrogen to a carbon. Same atoms, slightly different connectivity. Almost identical from the outside. But subtly, importantly different.

\[Pause.\]

Now, in the late 1990s and early 2000s, a researcher at the University of Pennsylvania named **Katalin Karikó** had been trying for years to get synthetic mRNA to work as a therapeutic. She was, by all accounts, one of those scientists who simply refused to give up on a problem that everyone else had decided was unsolvable. She had been demoted at Penn. She had been denied tenure. She had been told, repeatedly, by reviewers and program officers and department chairs, that mRNA was a dead end and she should pick another field. She would not. She kept making mRNA, kept injecting it into cells, kept watching it provoke the inflammatory response that everyone knew it would provoke, and kept trying to figure out a way around it.

She teamed up with an immunologist named **Drew Weissman**, also at Penn. Weissman had access to dendritic cells — the immune cells that are particularly good at sounding the alarm in response to viral RNA — and the two of them started systematically asking: what if we change the chemistry of the RNA? What if we replaced the standard ribonucleotides with chemically modified versions, the same kinds of modifications that exist naturally in cellular RNA? Would the immune system still see it as foreign?

They tested a panel of modifications. Methylated cytosine. Methylated adenine. 5-methyluridine. And pseudouridine. They synthesized mRNAs in which one of the four standard letters had been completely replaced by its modified counterpart at every position — so every U replaced by Ψ, for instance — and they exposed dendritic cells to each version and measured the inflammatory cytokine output.

The result, published in 2005 in the journal **Immunity**, was striking. **mRNAs with pseudouridine in place of uridine did not trigger the inflammatory response.** The TLRs that normally fired when they saw foreign RNA simply did not fire. The interferon cascade stayed quiet. The cells took up the modified mRNA, translated it into protein, and did not sound the alarm. The chemistry of the molecule had been changed just barely enough — a single bond rearrangement on a single base — that the pattern-recognition machinery of the innate immune system could no longer tell it was foreign.

\[Pause.\]

Here is the analogy I want you to keep. **Pseudouridine is the chemical trick that lets mRNA fly under the radar of the innate immune system.** Natural cellular RNA already has some Ψ scattered through it, especially in ribosomal RNA and tRNA. The TLRs have, in effect, evolved to ignore Ψ-containing RNA because Ψ-containing RNA is normal, while foreign viral RNA tends to be Ψ-free. By inserting Ψ at every U position in your synthetic mRNA, you make the mRNA look chemically more like a piece of native cellular RNA, and the immune system stops seeing it as a threat. **You've put on the right costume.**

This was the 2005 paper. And the response from the broader scientific community to this absolutely critical discovery was, more or less, silence. Karikó and Weissman published their finding, they patented the modified-nucleotide approach, and they continued to publish follow-ups for the next decade. The papers were read by a small number of specialists. They were largely ignored by the field. Grant applications continued to get rejected. The patent ended up being licensed, eventually, by two small companies — a Boston startup called **ModeRNA Therapeutics** and a German company called **BioNTech** — both of which were, at the time, marginal operations with marginal funding and marginal credibility. Karikó eventually moved from Penn to BioNTech, where she would, fifteen years later, find her work injected into the arms of a billion people.

I want you to remember this story. Not just the chemistry. The structure of it. The most important pharmaceutical chemistry insight of the early twenty-first century was published in 2005, ignored for fifteen years by the establishment, kept alive by two small biotech companies on the margin, and then deployed at global scale in the year of a pandemic. Drug discovery does not work the way you'd imagine it works. The big breakthroughs do not come from the big institutions reading the big papers. They come from people the field has, mostly, written off, working on problems the field has, mostly, given up on, with chemistry that the field has, mostly, decided is impossible.

In 2023, Karikó and Weissman shared the Nobel Prize in Physiology or Medicine.

---

## SEGMENT 4 — Lipid nanoparticles and the ionizable lipid trick

So pseudouridine solved one of the four problems — the immune-recognition problem. The mRNA no longer triggered an alarm. But the other three problems were still there. The mRNA still got chewed up by RNases. It still couldn't enter cells. And if you somehow got it to enter, it still had to escape from the endosomes — those little vesicles cells use to internalize material — and reach the cytoplasm where the ribosomes live.

The solution to all three of these was the same: **package the mRNA in a tiny droplet of lipid.** Not just any lipid, and not just any droplet. A very specific, carefully engineered class of particle called a **lipid nanoparticle**, or **LNP**.

Let me describe what one of these things looks like, mechanically. Picture a roughly spherical bubble, about a hundred nanometers across. That's a hundred-millionth of a meter — much smaller than a cell, comparable in size to a virus. The shell of the bubble is made of a mixture of four lipid components in carefully tuned ratios. In the interior, sequestered inside the bubble, packed in with the lipids in a complex structure, is your mRNA. The bubble protects the mRNA from RNases. It carries the mRNA through the bloodstream. When it encounters a cell, it gets taken up by endocytosis, and once inside the endosome, it does something clever that we'll get to in a moment.

The four lipid components are: an **ionizable lipid**, a **helper phospholipid**, **cholesterol**, and a **PEG-lipid**. Each plays a different role, and the magic — the whole reason LNPs work at all — is in the ionizable lipid.

\[Pause.\]

Let me explain the ionizable lipid, because this is the cleverest piece of chemistry in the whole platform and it took roughly two decades of work to get right.

An ionizable lipid is a molecule that has a head group whose charge depends on the pH of the surrounding solution. At neutral pH — pH 7.4, the pH of your blood — the head group is uncharged, electrically neutral. At low pH — pH 5 or 6, the pH inside an acidified endosome — the head group picks up a proton and becomes positively charged. So the same lipid is neutral outside the cell and positively charged inside the endosome.

Why does that matter? Two reasons. First, in the bloodstream, you do not want a lot of positive charge on the surface of your nanoparticle, because positively charged particles get rapidly cleared by the liver and the reticuloendothelial system. Neutral particles circulate longer. So a neutral particle in blood is good. Second, inside the endosome, once the cell has taken up the LNP, the endosome acidifies. The ionizable lipid becomes positively charged. The positively charged head groups then interact with the negatively charged phospholipids of the endosomal membrane, the membrane gets destabilized, the endosome ruptures, and the mRNA is released into the cytoplasm. **The lipid bubble that smuggles the mRNA into the cell becomes a tiny demolition charge that breaks open the endosome from inside.**

\[Pause.\]

Here is the analogy I want you to take with you. **The LNP is the lipid bubble that smuggles the mRNA across the cell membrane. The ionizable lipid is the trick — neutral at blood pH, so it circulates safely; positively charged at endosomal pH, where it fuses with the endosomal membrane and dumps the cargo out into the cytoplasm.** The particle is a delivery vehicle with a built-in detonator that only goes off in the right room.

The history of ionizable lipids is its own saga. The first commercial ionizable lipid that really worked was called **DLin-MC3-DMA**, developed by a Canadian company called **Tekmira**, later split into two companies, **Acuitas** and **Genevant**. MC3 was used in the first FDA-approved RNA-LNP drug, **patisiran**, an siRNA therapy for transthyretin amyloidosis, approved in 2018. MC3 was good, but for mRNA delivery in vaccines, two newer lipids turned out to be even better: **SM-102**, developed and used by Moderna, and **ALC-0315**, developed by Acuitas and used by Pfizer/BioNTech. The chemistry of these molecules looks, on the page, like complicated branched hydrocarbon tails attached to an amine head group, and there is a whole graduate course's worth of structure-activity relationship work that went into figuring out which branch patterns and which head groups give the best in-vivo expression with the lowest toxicity.

But the conceptual principle is exactly the one I just described. Neutral outside, positive inside. Lipid bubble, with a switch. That switch is what makes the whole platform deliverable.

The other three lipid components matter too. The helper phospholipid — typically DSPC, distearoylphosphatidylcholine — provides structural integrity to the particle. Cholesterol stabilizes the lipid bilayer and helps with membrane fusion. The PEG-lipid is a polyethylene glycol chain attached to a lipid anchor, sitting on the outside of the particle; it prevents the particles from aggregating with each other and shields them, partially, from immune detection. The four components together — in ratios of roughly fifty percent ionizable lipid, ten percent helper, thirty-eight percent cholesterol, and one to two percent PEG-lipid — assemble themselves spontaneously when you mix them with mRNA in the right way. The mRNA, because it is negatively charged, snuggles up against the positively charged ionizable lipid at low pH during the mixing step, and the whole package crystallizes into the nanoparticle.

If you want to understand mRNA drugs, you need to understand both halves: the mRNA chemistry that makes the recipe readable, and the LNP chemistry that gets the recipe across the cell membrane. Without either half, you have nothing. With both halves, you have a platform that can deliver any protein-coding instruction to a cell in vivo.

---

## SEGMENT 5 — The 5' cap and CleanCap — keeping the immune system quiet, telling the ribosome to start

So we have a delivery vehicle. We have a chemistry — pseudouridine — that keeps the immune system from screaming. Now we need to make sure the mRNA, once delivered, actually gets translated. Efficiently. By the ribosome. The way a normal cellular mRNA would be.

That requires getting the **ends of the molecule** right. Both ends. The 5' end gets a structure called a **cap**. The 3' end gets a string of A's called a **polyA tail**. Both of these features are required for the ribosome to recognize the mRNA as a real, native, translatable message. Get them wrong and either the ribosome won't bind, or the message gets degraded almost immediately, or — worse — the cell sounds the alarm again, because uncapped RNA, just like Ψ-free RNA, looks viral.

Let me start with the cap.

The 5' cap of an mRNA is a chemical structure that gets added to the very first nucleotide of the message. It is not just another nucleotide — it is a modified guanosine, specifically a **7-methylguanosine**, linked to the rest of the RNA by an unusual 5'-to-5' triphosphate bridge instead of the standard 5'-to-3' phosphate linkage you find everywhere else in nucleic acids. So if you imagine the mRNA molecule as a long rope, the very first knot on the rope is tied backwards — head to head instead of head to tail — and that backwards knot is a chemically modified G with a methyl group on its nitrogen-7.

\[Pause.\]

Why? The cap is the cell's tag for "this is a real, native, eukaryotic mRNA, please translate me." A protein called **eIF4E** — the eukaryotic initiation factor 4E — binds specifically to the cap, recruits the rest of the translation initiation machinery, and lines the ribosome up to start reading. Without a cap, the ribosome will not initiate. The message just sits there, untranslated, and is gradually degraded by exonucleases that chew on uncapped ends.

The cap also serves a second function, which is just as important. A properly capped mRNA is recognized as "self" by the cell's RNA-sensing machinery. An uncapped 5' end with a free triphosphate group — which is what you get straight out of an in vitro transcription reaction with no cap added — is a signature of viral RNA, and it is detected by RIG-I, the cytoplasmic viral RNA sensor. So an uncapped mRNA is both untranslatable and immunostimulatory. Doubly bad.

In the early days of mRNA therapeutics, the way you got a cap onto your in vitro-transcribed mRNA was to do the reaction in two steps. You transcribed the RNA from a DNA template using T7 RNA polymerase, which gives you uncapped RNA with a free triphosphate at the 5' end. Then you took the uncapped RNA and treated it with a separate enzyme — a vaccinia-virus capping enzyme — that added the cap structure after the fact. This worked, but it was slow, expensive, and only capped about eighty percent of the molecules. The other twenty percent stayed uncapped, untranslatable, and immunostimulatory.

A clever trick was developed called **ARCA** — anti-reverse cap analog. The idea was to add the cap structure directly during the transcription reaction by including a synthetic cap analog molecule in the reaction mix. The polymerase would, sometimes, incorporate the cap analog at the very first position of the RNA, giving you a capped product without a separate enzymatic step. ARCA worked, but it had its own efficiency problems, and the polymerase didn't always orient the cap analog correctly — sometimes it got incorporated backwards.

The current state of the art is a product called **CleanCap**, developed by a company called TriLink. CleanCap is a clever cap analog that gets incorporated efficiently and in the correct orientation during transcription, giving you nearly one hundred percent capped product in a single step. CleanCap was used in both the Pfizer/BioNTech and Moderna COVID vaccines. It is, by most accounts, the highest-quality cap chemistry currently available, and it has made the manufacturing of capped mRNA dramatically simpler than it used to be.

\[Pause.\]

There is a further refinement worth mentioning. The cap I described — 7-methylguanosine connected by 5'-to-5' triphosphate, with a methyl group on the 2'-O of the next nucleotide — is called a **Cap1** structure. An older version, just the methylguanosine without the methyl on the next nucleotide, is called Cap0. Both Cap0 and Cap1 are translatable. But Cap0 turns out to still be mildly immunostimulatory — it is recognized by certain cellular sensors that distinguish self from viral RNA. Cap1 is essentially indistinguishable from native mammalian mRNA caps and is invisible to those sensors. So the highest-quality mRNA therapeutics are all Cap1, made with CleanCap or equivalent chemistry.

Think of the cap as the molecule's identification badge. **A Cap1 structure on the 5' end is the badge that says "I am a normal eukaryotic mRNA. Translate me. Don't sound the alarm."** Without the badge, or with the wrong badge, security stops you at the door. With the right badge, the ribosome welcomes you in and starts reading.

---

## SEGMENT 6 — UTRs and polyA — the parts of the recipe that aren't the protein

We've talked about the cap on the 5' end. Now I want to talk about everything between the cap and the actual protein-coding sequence, and everything between the end of the protein-coding sequence and the polyA tail at the 3' end. These regions are called the **untranslated regions** — UTRs — and they are some of the most overlooked, most engineering-intensive parts of an mRNA therapeutic.

Let me sketch the structure of a complete mRNA molecule. From 5' to 3', it goes: cap — 5' UTR — start codon — coding sequence — stop codon — 3' UTR — polyA tail. The cap and the polyA tail are the bookends. The 5' UTR and 3' UTR are the regions immediately inside the bookends but outside the protein-coding sequence. They do not encode any amino acids. They are not read by the ribosome to make protein. But they powerfully influence how well the mRNA is translated and how long it survives in the cytoplasm before being degraded.

\[Pause.\]

The 5' UTR is, mechanically, the runway where the ribosome lands and starts to taxi before it hits the start codon. The translation initiation factors — eIF4E binding the cap, eIF4G scaffolding, the small ribosomal subunit scanning down the message — all interact with the 5' UTR before they ever reach the protein-coding region. If the 5' UTR is the wrong length, has the wrong sequence features, or folds into the wrong secondary structure, the ribosome stalls or fails to initiate. If the 5' UTR is just right, translation initiation is fast and efficient.

Different cell types and different physiological states have different translational preferences, and a good 5' UTR for an mRNA drug is one that's been optimized for the cell type you're targeting. For instance, the mRNA vaccines for COVID — designed to be translated by muscle cells and antigen-presenting cells in the injection site — borrow their 5' UTRs from highly-expressed cellular mRNAs known to translate efficiently in those cells. Moderna's vaccines use a 5' UTR derived from human alpha-globin. BioNTech's COVID vaccine uses a sequence engineered from human alpha-globin too. These are battle-tested sequences that the human translation machinery handles beautifully.

\[Pause.\]

The 3' UTR has a different, but equally important, role. The 3' UTR is where the stability of the mRNA gets controlled. mRNAs have natural half-lives ranging from a few minutes to several days, and most of that variation is driven by features in the 3' UTR. There are sequences in the 3' UTR that recruit decay-promoting proteins — short motifs that, when present, tell the cell "degrade this message quickly." And there are sequences that recruit stabilizing proteins — motifs that, when present, tell the cell "keep this message around longer."

For an mRNA therapeutic, you usually want the message to survive for hours or days, not minutes. So the 3' UTR is engineered to remove destabilizing motifs and to include stabilizing motifs. The Moderna COVID vaccine, for instance, uses a 3' UTR derived from human beta-globin, which is the same UTR your own red blood cells use to make their hemoglobin chains last for the lifetime of the cell. Hemoglobin mRNA is famously stable. By copying its 3' UTR, you inherit some of that stability.

Some mRNA therapeutics use even more sophisticated 3' UTR designs — combinations of motifs from multiple highly-stable cellular mRNAs, sometimes including tandem copies of stabilizing sequences. This is an area of ongoing optimization, and different companies have their own proprietary UTR designs that they treat as trade secrets.

\[Pause.\]

Finally, the **polyA tail**. The polyA tail is a long stretch of adenosine residues — typically about a hundred to a hundred and twenty A's in a row — added at the 3' end of the mRNA, immediately after the 3' UTR. Native mammalian mRNAs all have polyA tails. The tail is added in the nucleus by a polyadenylation machinery. For in vitro-transcribed therapeutic mRNAs, you have two options: you can either encode the polyA tail directly in your DNA template — putting a hundred and twenty A's in a row in the DNA, so that when the polymerase transcribes through them, you get a hundred and twenty A's in the RNA — or you can add the polyA tail enzymatically after transcription.

The polyA tail has two main functions. First, it provides binding sites for **polyA-binding proteins**, which decorate the tail end and physically bridge the 3' end of the mRNA to the 5' cap, forming a closed loop that promotes efficient translation. The capped, polyadenylated mRNA literally folds into a circle, with the 5' end and the 3' end held in close proximity by a protein complex. This circularization helps the ribosome that finishes translating the message recycle directly to the start of the next round, increasing the rate of translation. Second, the polyA tail is gradually shortened by exonucleases over the lifetime of the mRNA, and when the tail is depleted, the message becomes targeted for degradation. The starting length of the polyA tail therefore sets, in effect, a timer on how long the message survives. A longer tail means a longer-lived mRNA.

Modern mRNA therapeutics typically use polyA tails of around a hundred to a hundred and twenty A's, sometimes with a "linker" sequence — a few non-A residues in the middle of the tail — that, paradoxically, can increase tail stability by interfering with certain decay pathways. The exact tail design is, again, something companies treat as proprietary optimization.

The takeaway from this segment is that an mRNA drug is not just "the protein-coding sequence." Almost half of the engineering effort goes into the parts of the message that don't code for any amino acids — the cap, the 5' UTR, the 3' UTR, and the polyA tail. Get those wrong, and the protein-coding sequence in the middle doesn't matter, because the message either doesn't get translated, doesn't survive, or triggers the immune system. Get them right, and you have a recipe the cell reads beautifully.

---

## SEGMENT 7 — How you actually make the stuff — IVT, T7, and linearized templates

We've talked about what the molecule looks like. Now let me talk about how you actually make it, because the manufacturing process for therapeutic mRNA is one of the things that makes this platform so attractive. It is, by the standards of biological manufacturing, breathtakingly fast.

The core process is called **in vitro transcription**, or **IVT**. The principle is simple. You take a DNA template that encodes your mRNA — including the 5' UTR, coding sequence, 3' UTR, and the encoded polyA tail — you put the DNA in a tube with an RNA polymerase enzyme, nucleotide triphosphates, and a buffer, and you let the polymerase run. The polymerase reads the DNA template and synthesizes RNA from it. After a few hours, you have, in your tube, a vast quantity of newly synthesized mRNA. You purify the RNA away from the DNA template and the enzyme, you cap it (or you cap it during the reaction with CleanCap), and you have your drug substance.

The polymerase used for IVT, in essentially every commercial mRNA manufacturing process, is **T7 RNA polymerase**. T7 is a viral polymerase, originally isolated from a bacteriophage — a virus that infects bacteria — and it has been a workhorse of molecular biology for forty years. T7 has several properties that make it ideal for therapeutic manufacturing. It is extremely processive — it can transcribe a template thousands of bases long without falling off. It is fast — it can produce on the order of two hundred nucleotides per second. It is highly specific — it only initiates transcription at a particular short DNA sequence called the **T7 promoter**, which means you can control exactly where transcription starts. And it can incorporate modified nucleotides, like pseudouridine, with reasonable efficiency, which is essential for making the immune-quiet mRNAs we discussed in Segment 3.

\[Pause.\]

The DNA template needs a few specific features. First, it needs a T7 promoter sequence at the start, so the polymerase knows where to begin. Second, it needs your encoded mRNA sequence — 5' UTR, coding sequence, 3' UTR, and the polyA tail encoded as a long stretch of A's. Third, and this is the subtle part, the template needs to be **linearized** at the end of the polyA tail. If the template were a circular plasmid, the polymerase would just keep running around the plasmid forever, producing endless concatameric RNA that contains the encoded sequence plus a bunch of extra plasmid-derived sequence on the back end. By cutting the plasmid at a specific restriction site immediately after the polyA tail, you give the polymerase a defined endpoint. It runs off the end of the linear template and stops.

The DNA template is usually produced by growing the plasmid in _E. coli_, purifying it, and then linearizing it with a restriction enzyme. This is well-established, gram-scale, decades-old technology. The template can be produced and stored indefinitely. When you need to make mRNA, you thaw out template, mix it with polymerase and nucleotides, and start the reaction. A single liter-scale IVT reaction can produce on the order of grams of mRNA. Industrial-scale reactors can make kilograms. That's enough mRNA for tens of millions of vaccine doses from a single batch.

\[Pause.\]

Here is the part that, more than anything else, made COVID-scale mRNA manufacturing possible. **The IVT reaction is the same regardless of what protein you're encoding.** Same polymerase. Same nucleotides. Same buffer. Same reaction conditions. Same purification process. Same fill-finish. The only thing that changes between an mRNA drug for COVID and an mRNA drug for a cancer vaccine and an mRNA drug for a rare metabolic disease is the **DNA template** — the specific sequence on the plasmid. The rest of the manufacturing pipeline is, in principle, completely interchangeable.

Compare this to traditional biologics. A new monoclonal antibody requires a whole new manufacturing campaign — a new CHO cell line stably producing the new antibody, with development times of one to two years, capacity scale-up taking another year or two, and total time from molecule selection to commercial supply often four or five years. A new mRNA drug can, in principle, be designed on a computer on Monday, ordered as a DNA template on Tuesday, manufactured as mRNA the following week, and tested in animals the week after that. The manufacturing time scale collapses from years to weeks.

This is the deepest reason mRNA is called a **platform** and not just a class of drugs. A platform, in pharmaceutical parlance, is a system where the underlying chemistry, manufacturing, and quality control are reusable across many different products. You build the platform once, you validate it once, and then you deploy it for many different target proteins. mRNA is the closest thing biologic medicine has ever had to such a platform. **The protein you're encoding changes. The factory doesn't.**

\[Pause.\]

There is one more piece of the manufacturing puzzle worth flagging, because it is one of the dirtier corners of the IVT reaction. T7 RNA polymerase, despite being the workhorse of the field, has a problematic side reaction. Roughly one in every few hundred transcripts produced is not the desired single-stranded RNA but a **double-stranded RNA** contaminant — an artifact of the polymerase template-switching or producing antisense RNA from spurious initiation. Double-stranded RNA is a powerful immunostimulant; it triggers TLR3 and MDA5 and produces exactly the inflammatory response that pseudouridine was supposed to eliminate.

So a critical step in commercial mRNA manufacturing is the **removal of dsRNA contaminants**. This is done by cellulose-based purification, by HPLC, or by other chromatographic techniques that separate single-stranded from double-stranded RNA on the basis of subtle structural differences. Getting the dsRNA contamination below a certain threshold — usually parts-per-million levels — is essential for a clean drug product. Moderna and BioNTech each developed proprietary purification processes; the details of those processes are some of the most closely guarded secrets in the industry, because they are what separates a tolerable mRNA drug from one that gives every patient a high fever.

The takeaway: IVT manufacturing is fast, flexible, and platform-friendly, but it requires careful downstream purification to get rid of immunostimulatory byproducts. Once that pipeline is set up, switching from one product to another is a matter of changing the DNA template. That fact is what made COVID-scale deployment possible in the first place.

---

## SEGMENT 8 — Moderna's early years — the thesis nobody quite believed

Let me tell you the company story now, because the science of mRNA therapeutics is inseparable from the corporate history of two companies that bet everything on it when essentially nobody else would.

**Moderna** was founded in 2010 in Cambridge, Massachusetts. The founding insight came from a Harvard stem cell biologist named Derrick Rossi, who in 2010 published a paper showing that synthetic modified mRNA could be used to reprogram adult cells into induced pluripotent stem cells — that is, you could give a fibroblast mRNAs encoding the Yamanaka reprogramming factors, and the fibroblast would, transiently, make those proteins and revert to a pluripotent state. The paper showed that mRNA was a serious tool for in-cell protein expression in a way that, until then, only DNA vectors had been. Rossi got together with a Harvard professor named Tim Springer, a biotech investor named Bob Langer, and a venture capitalist named Noubar Afeyan, and they founded a company on the thesis that synthetic mRNA could be used not just for reprogramming in the lab but as a therapeutic platform — a way to make a drug for any protein you wanted, by encoding it as mRNA and delivering it.

In 2011 they hired a CEO named **Stéphane Bancel**. Bancel had been the CEO of a French diagnostics company. He had no background in mRNA. What he did have was an almost unsettling confidence that the technology was going to be transformative, combined with the willingness to raise enormous amounts of money on the basis of a thesis that almost nobody in the established pharmaceutical industry believed.

\[Pause.\]

The Moderna thesis, as Bancel and the founders articulated it in the early years, was something like this: mRNA is a software platform. Once you have the chemistry working, you can write a new program — a new mRNA sequence — for any protein you want to express in a patient. Each program is a new drug. The chemistry and the manufacturing are the same across all programs. So a single company can have, in principle, dozens of drugs in development simultaneously, all sharing the same underlying technology, with the marginal cost of each new program being just the cost of designing a new sequence.

This is, in retrospect, the right thesis. It is exactly what happened. But at the time — and "the time" means roughly 2011 through 2019 — almost nobody in the establishment believed it. The arguments against it, articulated by skeptical scientists and equally skeptical investors, were the ones we walked through in Segment 2. mRNA is too fragile. The immune response is intractable. The delivery problem is unsolved. The manufacturing won't scale. And even if it works, why would you build a whole company around mRNA when you can just make the protein you want as a traditional biologic?

Moderna's response to this skepticism was to raise vast amounts of money, hire vast numbers of people, and stay completely silent about what they were actually doing. The company was famously secretive in its early years. They published almost no papers. They gave almost no scientific presentations. They had something like forty internal programs simultaneously but disclosed essentially nothing about any of them. The scientific community largely treated Moderna with a mixture of derision and curiosity — derision because the secrecy was unusual for a biotech, curiosity because the money raised was staggering. By 2018, when they went public, they had raised about 2.6 billion dollars and were valued at over 7 billion, with not a single approved product and only a handful of small early-stage clinical trials.

\[Pause.\]

I want to be honest with you about something here, because the temptation in telling this story is to make Moderna look prescient and the skeptics look foolish. That is not the right framing. The skepticism was, in many ways, correct. mRNA really was too immunostimulatory, before pseudouridine. The delivery problem really was unsolved, before LNPs were mature. The platform really did not work, for several years, in the early clinical trials Moderna ran for things like flu vaccines, where immune responses were disappointing. There was a real possibility, all the way through 2019, that Moderna was simply burning cash on a technology that, despite the founders' confidence, was never going to work as a general platform.

What changed was COVID. We'll get there. But in the years leading up to 2020, Moderna was, in the eyes of many in the industry, a company built on a thesis that had not yet proven itself, raising and spending astronomical amounts of money on the basis of a bet that almost no one else was willing to make. The thesis turned out to be right. But it was, in early 2020, still a thesis.

---

## SEGMENT 9 — BioNTech — a cancer vaccine company that happened to be ready

The other company in this story is **BioNTech**, and BioNTech's origin is, in a real sense, even less expected than Moderna's. Because BioNTech was not founded to make COVID vaccines, or vaccines of any kind. BioNTech was founded to treat cancer.

BioNTech was founded in 2008 in Mainz, Germany, by a husband-and-wife team of physician-scientists: **Uğur Şahin** and **Özlem Türeci**. Şahin and Türeci were both children of Turkish immigrant families in Germany, both trained in oncology and immunology, and both had spent their academic careers working on a deeply unfashionable idea — that you could treat cancer by stimulating the patient's own immune system to attack tumor cells, specifically by vaccinating the patient against mutations unique to their tumor. This idea, which we now call **personalized cancer vaccination** or **neoantigen vaccination**, sounded in 2008 like science fiction. The conventional view at the time was that the immune system couldn't reliably distinguish tumor cells from normal cells, that the mutations in any given tumor were too random to predict, and that vaccinating against tumor antigens had been tried in the 1990s and largely failed.

Şahin and Türeci disagreed. They believed that with modern sequencing, you could identify the specific mutations in an individual patient's tumor; that with modern immunology, you could predict which of those mutations would be likely to be recognized by the patient's T cells; and that with the right delivery platform, you could vaccinate the patient against those mutations and direct an immune response specifically at the tumor.

The delivery platform they bet on was mRNA.

\[Pause.\]

Why mRNA? Because of what we just discussed — the platform-ness of it. If your business model is "make a unique vaccine for every individual cancer patient," you cannot afford to develop a unique manufacturing process for every patient. You need a manufacturing process that can produce a different drug for a different patient by just changing a DNA template. mRNA, almost uniquely among biologic modalities, has that property. You sequence the tumor on Monday. You pick the mutations on Tuesday. You design the mRNA on Wednesday. You order the DNA template on Thursday. You manufacture the personalized vaccine the following week. Every patient gets a different shot, but the factory is the same.

BioNTech spent its first decade quietly building this platform — developing the mRNA chemistry, the LNP delivery, the bioinformatic pipelines for predicting tumor neoantigens, the manufacturing for small-batch personalized doses. They had collaborations with Genentech and Pfizer on the cancer vaccine work. By 2019, they had early clinical data — small studies, mostly in melanoma — showing that the platform worked: you could biopsy a patient's tumor, design and manufacture a personalized mRNA vaccine in a few weeks, dose the patient, and detect strong T-cell responses against the targeted tumor mutations. The data was promising, but the field was still in its infancy, and BioNTech, like Moderna, was a relatively obscure mRNA company with a long-term thesis and no approved products.

\[Pause.\]

What's worth pausing on is the convergence. Moderna and BioNTech, two completely independent companies — one in Boston, one in Mainz, with different founders, different scientific cultures, different initial therapeutic focuses — both spent the 2010s building, in parallel, essentially the same platform. Both were investing in pseudouridine-modified mRNA. Both were investing in LNP delivery. Both were investing in IVT manufacturing. Both were largely ignored by the pharma establishment. Both were sitting, by late 2019, on a platform that had been built for very different purposes — Moderna for protein replacement and infectious disease vaccines broadly, BioNTech for personalized cancer vaccines — but was, in mechanical terms, essentially interchangeable.

When the SARS-CoV-2 sequence was published on January 11, 2020, both companies were, by accident of history, sitting on essentially the only platform in the world that could plausibly design a vaccine fast enough to make a difference in a pandemic. Other vaccine technologies — protein subunit vaccines, attenuated virus vaccines, viral vector vaccines — had longer development timelines because the manufacturing for each new target had to be developed largely from scratch. mRNA vaccines did not. Change the template; the factory keeps running.

The fact that this convergence happened — that two small, obscure, mRNA-focused companies, neither of which had been founded with pandemic preparedness in mind, both happened to be sitting on essentially the right platform at exactly the moment a pandemic broke out — is one of the great accidents of scientific history. It was not planned. It was not foreseen. It was the result of two stubborn bets, made in the 2000s and 2010s, on a technology nobody else wanted to fund, paying off because of a virus nobody saw coming. The timing is, frankly, miraculous.

\[BREAK\]

---

## SEGMENT 10 — The COVID demonstration — designed in January, dosed in March, approved in December

Welcome back. I want to spend this segment walking through the single most extraordinary year in the history of pharmaceutical development. Because what happened between January and December of 2020, with mRNA vaccines for COVID-19, is something that should be impossible by the conventional rules of drug development, and the fact that it happened is the strongest possible proof that the mRNA platform is real.

Here is the timeline. Pay attention to the dates.

**January 10, 2020.** A Chinese researcher named Yong-Zhen Zhang and his collaborators publish the genome sequence of a novel coronavirus — SARS-CoV-2 — extracted from one of the first identified patients in Wuhan. The sequence is uploaded to a public database. Within hours, scientists around the world have downloaded it.

**January 13, 2020.** Three days after the sequence is public, **Moderna and the NIH design the mRNA sequence for what will become mRNA-1273**, the Moderna COVID vaccine. Around the same time — historians of the field still debate the exact day — BioNTech designs the mRNA for what will become **BNT162b2**, the Pfizer/BioNTech vaccine. The protein they have chosen to encode is the **spike protein** of SARS-CoV-2, with two specific mutations we'll discuss in the next segment that lock it in a particular conformation. Both companies have, within days, gone from "novel pandemic pathogen" to "drug candidate designed."

**February 7, 2020.** Moderna ships the first batch of mRNA-1273 to the NIH for animal testing. Less than a month from sequence to manufactured drug.

**March 16, 2020.** The first dose of mRNA-1273 is administered to a human participant in a Phase 1 trial in Seattle. Sixty-three days from sequence publication to first dose in a human being. By traditional drug development standards, this is essentially instantaneous. Vaccines have historically taken five to ten years from candidate identification to first human dose. mRNA-1273 took two months.

\[Pause.\]

**April 23, 2020.** Pfizer/BioNTech BNT162b2 enters Phase 1 trials in Germany. Within a few weeks, both vaccines are in expanded Phase 1/2 trials, and by midsummer, both are in Phase 3 trials with tens of thousands of participants across multiple continents.

**November 9, 2020.** Pfizer/BioNTech announce that BNT162b2 is approximately ninety-five percent effective at preventing symptomatic COVID-19 in their Phase 3 trial. The number is so high that even the most optimistic projections of the development team are exceeded. **November 16.** Moderna announce essentially identical results for mRNA-1273.

**December 11, 2020.** The FDA issues an Emergency Use Authorization for BNT162b2. **December 18.** The FDA does the same for mRNA-1273. Vaccination campaigns begin within days.

\[Pause.\]

Let me put this timeline in context, because if you are not used to drug development timelines, the speed will not register with you the way it should. A typical vaccine, going through the standard development pipeline, takes about ten to fifteen years from initial concept to FDA approval. Multiple phases of clinical trials. Manufacturing scale-up. Regulatory review. Each phase serially, with reviews in between. The fastest vaccine ever developed before COVID, mumps in the 1960s, took four years.

mRNA-1273 went from sequence to authorized vaccine in **eleven months**. BNT162b2 in essentially the same time frame. Both products were, by the end of 2021, being injected into hundreds of millions of arms per month around the world. The total scale of vaccine deployment was in the billions of doses within eighteen months of the pathogen's genome being sequenced.

Here is the analogy I want you to hold. **Pfizer and Moderna designed the spike mRNA on January 13, 2020, dosed the first humans in March, and got FDA Emergency Use Authorization on December 11. The mRNA platform paid back thirty years of skepticism in eleven months.** Every dollar that had been spent on Karikó's pseudouridine work in the 2000s, every dollar Tekmira and Acuitas had spent on ionizable lipids in the 2010s, every dollar Moderna and BioNTech had spent on platform development that the establishment had mocked — all of that investment returned its dividends, with interest, in a single year, because a pandemic happened to need exactly the technology that had been quietly maturing in the corners of the field.

\[Pause.\]

Two things are worth pausing on. First, the speed was not a violation of safety. The trials were not shortened. Phase 1, Phase 2, and Phase 3 were all conducted with their full participant numbers — tens of thousands of subjects in Phase 3 — and the data was reviewed by the FDA and independent advisory committees with the usual rigor. The speed came from doing things **in parallel** that would normally be done **sequentially**, from manufacturing being staged before approval at financial risk to the companies (a risk underwritten in part by government commitments like Operation Warp Speed), and from the platform itself collapsing the early development phase from years to weeks. The safety review was not compromised. The discovery and manufacturing phases were just dramatically accelerated.

Second, COVID was not just a vaccine win for mRNA. It was a **proof of concept for the entire platform**. Every other application of mRNA therapeutics — for cancer, for rare disease, for gene editing delivery — depends, in part, on the demonstration that mRNA can be manufactured at scale, delivered safely, and translated into functional protein in human beings. Before COVID, that was a hypothesis. After COVID, with billions of doses administered, it is a fact. The platform works. Everything else is engineering.

---

## SEGMENT 11 — The 2P mutation — freezing the spike in its "before" shape

Let me spend a segment on a piece of protein engineering that is, in many ways, the unsung hero of the COVID vaccines. The mRNA platform got most of the public attention, but the specific protein the mRNA encodes — the SARS-CoV-2 spike protein, engineered with two specific amino acid substitutions — is itself a triumph of structural biology, and without those substitutions, the vaccines almost certainly would not have worked as well as they did.

Here is the problem. The spike protein of a coronavirus is a fusion machine. Its job is to bind to a receptor on the target cell — for SARS-CoV-2, that receptor is ACE2 — and then undergo a dramatic conformational change that pulls the viral membrane and the cell membrane together so they fuse, allowing the virus to enter the cell. The protein exists in two main shapes: a **prefusion** shape, before binding to the receptor, in which the spike is in a tall, complex, mostly-folded conformation with the receptor binding site exposed; and a **postfusion** shape, after the membrane fusion event, in which the protein has rearranged into a long, narrow, completely different conformation.

For a vaccine, you want to teach the patient's immune system to recognize the spike protein **in its prefusion shape**, because that's the shape the spike is in when it's sitting on the surface of an incoming virus particle. Antibodies that bind to the prefusion shape can block the virus from binding to its receptor and prevent infection. Antibodies that bind to the postfusion shape are essentially useless, because by the time the spike is in the postfusion shape, the virus has already gotten in.

\[Pause.\]

But here's the catch. The prefusion shape is metastable. It's a high-energy conformation that wants to collapse into the lower-energy postfusion shape. If you just take the gene for the spike protein and express it on its own, the protein, once expressed, tends to spontaneously rearrange into the postfusion shape — which is then the shape your immune system gets exposed to, which is then the shape your antibodies recognize, which means your antibodies bind to a shape that doesn't exist on the incoming virus, which means your vaccine doesn't work very well.

This is exactly the problem that plagued vaccine development for **RSV** — respiratory syncytial virus — for decades. RSV is a major cause of severe respiratory illness in infants and the elderly. Multiple attempts to develop an RSV vaccine in the twentieth century failed, in part because the vaccine antigens — different forms of the RSV F protein, the fusion protein on the viral surface — kept collapsing into the postfusion shape, and the resulting antibodies were not protective.

In 2013, a structural biologist named **Jason McLellan**, then working at the NIH Vaccine Research Center under Barney Graham, solved this problem for RSV. McLellan, working from a high-resolution structure of the RSV F protein in its prefusion shape, identified specific amino acid positions where introducing **proline** mutations — substituting the amino acid proline for whatever was normally there — would lock the protein in its prefusion conformation. Proline is special: it is structurally rigid, it disrupts the formation of certain kinds of secondary structure, and it can be used like a chemical staple to hold a flexible protein in a specific shape. By introducing two prolines at carefully chosen positions, McLellan was able to make RSV F protein that was locked in the prefusion shape and stable enough to be used as a vaccine antigen.

This was a major advance. It led, eventually, to the first FDA-approved RSV vaccines, decades after the problem had stymied the field.

\[Pause.\]

And — here is the punchline — when SARS-CoV-2 emerged in late 2019, McLellan and Graham and their collaborators recognized that the same trick could be applied to the SARS-CoV-2 spike protein. The spike has the same basic structural problem as RSV F: a metastable prefusion shape that wants to collapse into a postfusion shape. By introducing two proline mutations at the equivalent structural positions in the SARS-CoV-2 spike — at amino acid positions 986 and 987, replacing the native lysine and valine with prolines — you can lock the spike in its prefusion shape and prevent the collapse.

This is the **2P mutation**, or **K986P/V987P**, and it is encoded into both the Pfizer/BioNTech and Moderna COVID vaccines. When the mRNA gets translated in the patient's cells, the resulting spike protein has the two prolines, stays in the prefusion shape, gets displayed on the cell surface and in secreted form, and the patient's immune system makes antibodies against the correct shape — the shape that matters for blocking viral infection.

Here is the analogy. **The 2P mutation is freezing the spike in its "before" shape, so the antibodies see the right epitopes. It is the same Jason McLellan trick, originally developed for RSV, that turned out to be exactly the trick the COVID spike needed.**

The 2P trick is now used in essentially every coronavirus vaccine antigen in development, and increasingly in vaccine antigens for other viral fusion proteins. It is a small, beautiful piece of structural-biology-informed protein engineering, and without it, the COVID vaccines almost certainly would not have hit ninety-five percent efficacy. The mRNA platform delivered the message. The 2P mutation made the message worth delivering.

---

## SEGMENT 12 — Post-COVID — flu, RSV, CMV, Zika

So the COVID vaccines worked. The platform was proven. The question, almost immediately after the dust started to settle in 2021, was: what else can we make mRNA vaccines for? And the answer turned out to be: a lot of things. Pretty much any infectious disease where the immune response target is a known protein.

Let me walk through a few of the major programs that are either approved or in late-stage development as of 2026.

**Influenza.** Flu has been a vaccine target for nearly a century, and traditional flu vaccines have a well-known limitation: they're made in eggs or in cell culture, the manufacturing takes about six months, and by the time a season's vaccine is rolled out, the circulating flu strains may have drifted away from the strains the vaccine was designed against. mRNA vaccines, in principle, can be redesigned and remanufactured much faster than egg-based flu vaccines. Moderna's mRNA flu vaccine, **mRNA-1010**, has been in late-stage trials for several years; BioNTech and Pfizer have their own programs. The efficacy results have been somewhat mixed — flu turns out to be a tougher target than COVID, partly because the natural flu virus is much more antigenically variable, partly because the immune response to flu shows complicated phenomena like "original antigenic sin" — but the manufacturing flexibility is a real advantage, and combination vaccines targeting flu plus COVID plus RSV in a single shot are in development.

**RSV.** Moderna's RSV vaccine, **mRNA-1345**, was approved by the FDA in 2024 for adults sixty and older. It encodes a 2P-stabilized prefusion form of the RSV F protein — exactly the McLellan stabilization we talked about in the last segment — delivered via LNP. mRNA-1345 was, after COVID, the second approved mRNA vaccine product, and it is now a major commercial product for older adults entering RSV season.

**CMV.** Cytomegalovirus is a herpesvirus that most people pick up at some point in childhood and that lives quietly in your cells for the rest of your life. For most people it causes no problems. But for a few populations — pregnant women, where CMV can be transmitted to the fetus and cause severe congenital disabilities; and immunocompromised patients, where reactivation of latent CMV can cause life-threatening disease — CMV is a serious threat. No CMV vaccine has ever been approved, despite decades of work. Moderna's mRNA CMV vaccine, **mRNA-1647**, encodes the major CMV envelope glycoproteins and is in Phase 3 trials. If approved, it would be the first CMV vaccine ever, and it would represent a significant public health advance.

\[Pause.\]

**Zika.** During the Zika outbreak of 2015-2016, multiple mRNA Zika vaccine candidates were developed by various groups. Several reached clinical trials. The outbreak subsided faster than the vaccines could be approved, and the regulatory and commercial path for a Zika vaccine in the absence of an active outbreak has been complicated. But the demonstration that an mRNA vaccine could be designed and tested against a novel emerging pathogen on a one-year timescale was an important early proof of concept for the platform — one of the things that gave Moderna and BioNTech confidence, going into 2020, that they could move fast against SARS-CoV-2.

**HIV.** Moderna and a few collaborators have been working on mRNA-based HIV vaccines, though HIV is famously one of the hardest vaccine targets in all of immunology — the virus mutates rapidly, hides in latent reservoirs, and the immune correlates of protection are not well understood. mRNA-based approaches are giving researchers new tools to test ideas about immunogen design, but no mRNA HIV vaccine is close to approval.

**Rabies, Ebola, Lassa, Nipah, and other emerging pathogens** — there is an entire category of mRNA vaccine work focused on diseases that don't have approved vaccines but might become more important as global travel and climate change shift epidemiological patterns. The mRNA platform is uniquely suited to this category because, once a pathogen sequence is available, you can design and manufacture a vaccine candidate in weeks. That is exactly what we'd want in a pandemic-preparedness context.

\[Pause.\]

The broader pattern here is that mRNA vaccines are not just one product. They are a **modality** — an underlying technology that can be aimed at many different infectious-disease targets, with the same manufacturing and the same regulatory framework, by changing only the encoded sequence. The COVID vaccines were the first major demonstration, the RSV vaccine was the second, and the next decade is going to see, almost certainly, a steady accumulation of additional approved mRNA vaccines for diseases where traditional vaccine approaches have struggled.

But infectious disease vaccines are, in some sense, the easy application. They're the warm-up. The harder, and arguably more transformative, applications of mRNA therapeutics are not in vaccines at all. They are in cancer treatment, in protein replacement therapy, and in the delivery of gene editing tools. We turn to those next.

---

## SEGMENT 13 — Personalized cancer vaccines — a different shot for every patient

I want to spend this segment on what may turn out to be, in the long run, the most important application of mRNA therapeutics: **personalized cancer vaccines**. This is the application BioNTech was founded to pursue, the one that nobody much believed in for the first decade of the 2010s, and the one that is now, in 2026, producing some of the most exciting late-stage clinical data in oncology.

Let me set up the problem first. Cancer is, fundamentally, a disease of accumulated mutations. A tumor starts as a single cell that picked up a critical mutation in a gene controlling growth or differentiation, and then, as that cell and its descendants proliferate, they accumulate additional mutations — sometimes hundreds, sometimes thousands of them. Many of those mutations alter proteins in ways that create **neoantigens** — short protein fragments that did not exist in the patient's normal cells. Because these neoantigens are genuinely new — they are not present in the thymus, where the immune system learns what's "self" — they can, in principle, be recognized by the patient's T cells as foreign. The patient's own immune system has, theoretically, the tools to identify and kill the tumor cells.

The reason the immune system usually fails to do this is complicated. Tumors actively suppress immune responses in various ways. T cells often fail to find the right neoantigens among the many normal proteins they're presented with. Most tumor neoantigens are weakly immunogenic to start with. So even though the immune system could, in principle, attack the tumor, in practice it often doesn't, or it does so weakly and ineffectively.

\[Pause.\]

The personalized cancer vaccine approach tries to fix this by, in effect, telling the patient's immune system exactly which neoantigens to look for. Here is the workflow.

Step one: biopsy the patient's tumor. Take a small piece of tumor tissue. Sequence its DNA and RNA, comparing the tumor sequence to the patient's normal (germline) DNA from blood. Identify every position where the tumor has a mutation that the normal cells do not.

Step two: for each tumor mutation, computationally predict whether the mutated protein fragment is likely to be presented on the surface of cells by the patient's own MHC molecules — the immune system's display cases — and whether that presented fragment is likely to be recognized by T cells. This prediction uses both classical immunology and modern machine learning models trained on enormous datasets of MHC peptide binding. The output is a ranked list of candidate neoantigens — typically a few hundred mutations are surveyed, of which the top thirty to fifty are selected as the most likely to be immunogenic.

Step three: design an mRNA encoding a single polypeptide that contains all the selected neoantigen sequences, joined together by short linker sequences. Each neoantigen is included as a short stretch of about twenty-five amino acids, centered on the mutated residue. The full mRNA encodes thirty or so neoantigens in a single message.

Step four: manufacture the mRNA, formulate it in an LNP, and inject it into the patient. Several doses over several months.

\[Pause.\]

Here is the analogy I want you to carry. **Personalized cancer vaccines are: biopsy the tumor, sequence it, pick thirty to fifty likely-neoantigen mutations, make a custom mRNA encoding those peptides, inject the patient. Every patient gets a different shot.** It is, almost literally, a different drug for every patient. The DNA template is unique to that one tumor. The mRNA is manufactured in small batches, often just for that one patient. The dose is delivered only to that one patient. And then for the next patient, the entire process starts over with their own tumor sequence and their own predicted neoantigens.

The fact that this is even logistically possible is a consequence of the mRNA platform. You could not do this with monoclonal antibodies — developing a custom antibody for one patient would take years and cost millions of dollars. You can barely do it with peptide vaccines, which require synthesizing and purifying dozens of peptides for each patient. But with mRNA, the entire personalized manufacturing process — from biopsy to dose — can be done in about six to eight weeks for a few hundred thousand dollars per patient. It is fast enough and cheap enough to be clinically practical, in a way that no other personalized-medicine modality has ever been.

\[Pause.\]

The clinical data so far has been striking. The most-discussed program is **Moderna's mRNA-4157**, a personalized cancer vaccine being developed in combination with Merck's checkpoint inhibitor **Keytruda** (pembrolizumab). The combination was tested in a Phase 2 trial in patients with high-risk melanoma who had had their tumors surgically removed and were at risk of recurrence. Patients who received Keytruda alone had a certain recurrence rate. Patients who received Keytruda plus the personalized mRNA vaccine had a substantially lower recurrence rate — the relative reduction was around forty-four percent in the published Phase 2 data, with statistical significance and clinically meaningful absolute differences. The combination is now in Phase 3 trials in melanoma and is being expanded into other indications including non-small-cell lung cancer.

BioNTech has parallel programs in partnership with Genentech, focused initially on pancreatic cancer, which has historically been one of the most lethal solid tumors with the worst prognosis. Early data in pancreatic cancer has shown that patients who mount a T-cell response to the personalized vaccine have substantially better recurrence-free survival than those who don't. The trial is small and not yet definitive, but the signal is real and the data is being followed closely.

If these programs continue to deliver in Phase 3, **personalized cancer vaccines will be the second major commercial application of mRNA therapeutics**, after infectious disease vaccines. And unlike the infectious disease application — which is an extension of a well-established product category — personalized cancer vaccines are a genuinely new modality, only possible because of the mRNA platform's unique ability to produce a different drug for every patient.

---

## SEGMENT 14 — Protein replacement — IV mRNA for rare metabolic disease

Let me now turn to a category of mRNA therapeutic that has had less public attention than vaccines but represents, in some ways, the original founding thesis of Moderna and the most direct demonstration of what "deliver the recipe" can do. This is **protein replacement therapy** via mRNA, particularly for rare inherited metabolic diseases.

Consider the situation of a patient with a recessive loss-of-function disease in some critical metabolic enzyme. They inherited two broken copies of a gene that makes some enzyme — let's say **ornithine transcarbamylase**, or OTC, an enzyme in the urea cycle that helps the liver dispose of nitrogen waste from protein metabolism. Without functional OTC, ammonia builds up in the bloodstream. Severe OTC deficiency presents in newborns with life-threatening hyperammonemia. Even with current management — strict dietary protein restriction, ammonia-scavenging drugs, sometimes liver transplant — many patients have devastating neurological damage from ammonia crises in infancy.

What you'd really like to do, ideally, is just give the patient functional OTC enzyme. But OTC is a liver enzyme. It works inside hepatocytes. You can't just inject OTC protein into the bloodstream — the protein won't get inside the cells where it needs to be. You could try gene therapy, putting a corrected copy of the OTC gene into the patient's liver cells with an AAV vector. But AAV gene therapy has its own problems — immune responses to the viral capsid, limits on cargo size, and the fact that you can usually only dose a patient with a given AAV serotype once, because they develop antibodies that block subsequent doses.

mRNA offers a third path. **You give the patient, intravenously, an LNP carrying an mRNA encoding functional OTC. The LNP, when given IV, accumulates preferentially in the liver.** This is because the liver is the major filtration organ for the bloodstream, and the lipid nanoparticle, once it picks up a coat of plasma proteins called apolipoprotein E, gets recognized by hepatocyte surface receptors and taken up specifically by liver cells. The mRNA is delivered into hepatocytes. The hepatocytes translate the mRNA into functional OTC. The OTC enzyme does its job for as long as the mRNA persists — typically a few days to a couple weeks. The ammonia gets metabolized. The crisis passes.

\[Pause.\]

This is exactly the strategy Moderna has been pursuing in its rare disease pipeline. **mRNA-3927** is an mRNA therapy for **propionic acidemia**, a rare inherited disorder caused by deficiency in the enzyme propionyl-CoA carboxylase. **mRNA-3705** is for **methylmalonic acidemia**, caused by deficiency in methylmalonyl-CoA mutase. **mRNA-3745** is for OTC deficiency. Each of these drugs delivers, intravenously, an LNP carrying an mRNA encoding the missing enzyme. Each dose produces a transient burst of functional enzyme in the patient's liver, allowing them to metabolize the toxic substrate that has been accumulating. Patients then need to be re-dosed regularly — every few weeks — because the mRNA degrades and the enzyme expression fades.

The clinical data on these programs, as of 2026, is early but promising. Patients in the propionic acidemia and methylmalonic acidemia trials have shown reductions in the toxic metabolites that drive their disease, and in some cases dramatic reductions in the frequency of metabolic crises. Whether the long-term clinical outcomes — neurological development, life expectancy, quality of life — improve substantially compared to standard care remains to be seen, but the molecular evidence is unambiguous: you can dose a patient with an LNP-mRNA encoding a missing enzyme, the enzyme is made in their liver, and the metabolic abnormality measurably corrects.

\[Pause.\]

There is something philosophically interesting about this kind of therapy that I want you to notice. With protein replacement, you are not editing the patient's genome. You are not making a permanent change. You are giving them a recipe that their cells use, briefly, to make a protein they cannot make themselves. The recipe degrades. The protein expression fades. A few weeks later, the patient needs another dose. **It is a maintenance therapy, like insulin for type 1 diabetes, except the cargo is RNA instead of protein.** You are, in effect, lending the patient the missing instruction, every few weeks, indefinitely.

That has trade-offs. Compared to a one-shot gene therapy that permanently delivers a corrected gene, mRNA-based protein replacement requires lifelong dosing, which is expensive and inconvenient. But it has its own advantages: it is reversible — if there's a problem, you stop dosing and the effect fades — and it avoids the permanent genome modification that some patients and regulators consider riskier. The trade-off between transient mRNA and permanent gene therapy is one of the central design questions in rare disease therapeutics right now, and different diseases are going to land in different places on that spectrum.

For some diseases, transient mRNA will be the right answer. For others, permanent gene editing will be. The mRNA platform is, increasingly, being used as a tool for both — sometimes as the therapeutic itself, sometimes as the delivery vehicle for a one-shot gene-editing event. Which brings us to our next topic.

---

## SEGMENT 15 — mRNA as CRISPR delivery — Verve and PCSK9

Here is one of the more elegant applications of mRNA therapeutics, and one of the ones that I think will, in retrospect, look most obvious. You can use mRNA — packaged in LNPs, delivered IV — to deliver the components of a **gene editing system** into a patient's cells, edit their genome at a single dose, and then have the editing components disappear, leaving behind only the edit.

Let me walk through what this looks like mechanically. The most-studied example is the work being done by a company called **Verve Therapeutics** on a base-editing therapy for cardiovascular disease.

The target is a gene called **PCSK9**. PCSK9 is an enzyme that controls how many LDL-cholesterol receptors are present on the surface of liver cells. People with naturally low PCSK9 — including a small fraction of the population who happen to have loss-of-function mutations — have very low LDL cholesterol and dramatically reduced rates of cardiovascular disease. PCSK9-blocking monoclonal antibodies, like Repatha (evolocumab) and Praluent (alirocumab), have been on the market for several years and demonstrably reduce LDL cholesterol and cardiac events. But the antibody therapies require subcutaneous injection every two to four weeks, indefinitely, which is expensive and which most patients eventually stop taking.

Verve's idea: what if, instead of repeatedly inhibiting PCSK9 with an antibody, you just **edit the patient's PCSK9 gene** so it's permanently turned off? One shot. Permanent reduction in LDL cholesterol. No more need for ongoing therapy.

\[Pause.\]

To do that editing, you need three molecular components delivered into the patient's liver cells: a **base editor** — a fused protein that combines a Cas9 enzyme modified to nick but not cut DNA with a cytidine deaminase that chemically converts a C to a T in the target sequence — and a **guide RNA** that directs the editor to the specific PCSK9 sequence you want to modify.

How do you deliver all three components? You package them in an LNP. Specifically: the base editor protein is delivered as the **mRNA encoding the base editor**, not as the protein itself. The guide RNA is delivered as a chemically modified RNA molecule. Both are co-packaged in an LNP, given IV, and the LNP delivers its cargo to liver cells.

Inside the liver cell, the mRNA gets translated. The cell makes the base editor protein. The base editor protein binds to the guide RNA. The complex finds the target site in the PCSK9 gene. The cytidine deaminase deaminates a specific C in PCSK9, converting it to a U, which during DNA replication gets read as a T, permanently altering the PCSK9 sequence. The specific edit Verve targets converts a critical splice site in PCSK9, eliminating functional PCSK9 protein from those cells.

Within a few days, the mRNA degrades. The base editor protein degrades. The guide RNA degrades. All the editing machinery is gone. **What remains is the edit.** The PCSK9 gene in the edited liver cells is permanently modified. Those cells, and their descendants, will produce less PCSK9 for the rest of the patient's life. LDL cholesterol drops. The cardiovascular risk drops.

\[Pause.\]

Verve's clinical trials of this approach — **VERVE-101** and the subsequent program — have been ongoing since 2022. Early human data showed that single-dose IV LNP delivery of mRNA encoding a base editor, plus guide RNA, produced sustained reductions in LDL cholesterol of around fifty percent in treated patients, with effects lasting at least a year and probably much longer. The data is early, the safety profile is still being evaluated, and the regulatory path for in vivo gene editing is complex. But the demonstration is striking: **a one-time intravenous infusion of an LNP, carrying an mRNA and a guide RNA, can produce a permanent therapeutic edit in a patient's liver cells.**

This is a fundamentally new pattern of medicine. The drug is delivered once. The therapeutic effect is permanent. The drug itself is gone within days. **The mRNA is the delivery vehicle for a one-shot edit; the LNP carries the recipe for the editor, the editor does its work, then everything degrades and only the edit remains.**

Other companies are using essentially the same architecture — LNP-delivered mRNA encoding CRISPR machinery, plus guide RNAs — for other diseases. Intellia has a program for hereditary ATTR amyloidosis, where the target is the TTR gene in the liver. CRISPR Therapeutics has programs in similar territory. The whole approach is sometimes called **in vivo gene editing with mRNA-LNP delivery**, and it is one of the most active areas of biotech investment in 2026. It would not be possible without the underlying mRNA platform that COVID validated.

---

## SEGMENT 16 — Self-amplifying mRNA — a recipe that makes copies of itself

Now let me describe an interesting next-generation variant of mRNA therapeutics that, depending on which problems you care about, may or may not turn out to matter. It's called **self-amplifying mRNA**, or **saRNA**, sometimes also called **replicon RNA**.

The basic idea is this. A standard mRNA drug encodes only the protein you want to make. Once it's in the cell, the ribosome translates it; over the next few days, it gets degraded; the protein expression peaks and fades. You get a transient burst of protein, and that's that.

A self-amplifying mRNA does something more clever. It encodes not just your protein of interest, but also a **viral RNA replicase** — a four-protein enzyme borrowed from an alphavirus, like Sindbis or Venezuelan Equine Encephalitis virus, whose normal job is to copy viral RNA inside infected cells. When the saRNA is delivered into a cell, the cell translates the replicase along with your protein of interest. The replicase then begins copying the saRNA itself, making more copies of the same RNA template. Those new copies are themselves templates for more protein synthesis and more replication. **The recipe makes copies of itself.**

\[Pause.\]

The result is that a single delivered saRNA molecule can produce, inside a cell, hundreds or thousands of copies of itself over the course of about a week, leading to far more total protein production per delivered dose than you'd get from a standard mRNA. The expression also persists longer — often a couple weeks instead of a few days — because the self-replication keeps making fresh template even as old template is degraded.

Here is the analogy. **Self-amplifying mRNA is a self-photocopying recipe. The recipe encodes both the dish you want to cook and the photocopier. As soon as the recipe arrives in the cell, the photocopier starts making more copies of the recipe. You get the same protein output for a much lower starting dose, and the output lasts longer.**

This has practical implications. A standard mRNA vaccine for COVID required something like a hundred micrograms of mRNA per dose. A self-amplifying mRNA vaccine might be effective at one to ten micrograms per dose — ten to a hundred times less material. That matters for manufacturing capacity (more doses per kilogram of mRNA produced) and for cold-chain logistics (lower lipid-mass dose may mean easier storage and transport).

The first approved saRNA vaccine was **ARCT-154**, a COVID-19 booster developed by Arcturus Therapeutics and approved in Japan in 2023. It demonstrated that saRNA could be deployed at population scale and that the safety profile was acceptable. Several other saRNA programs are in clinical trials for flu, RSV, and various cancer applications.

\[Pause.\]

There are limitations. The replicase machinery encoded in an saRNA, even though it's been domesticated for therapeutic use, is still potently immunostimulatory — saRNAs tend to provoke more interferon response than standard mRNAs, because the replication process produces double-stranded RNA intermediates that the cell's antiviral sensors recognize. Some of this can be mitigated with engineering, but saRNA chemistry is still less mature than standard mRNA chemistry, and the higher inflammation may limit some applications.

Also, the cargo of an saRNA is constrained. The replicase takes up a substantial chunk of the molecule — about seven kilobases of sequence — so the protein-coding payload has less room. This is fine for vaccine antigens, which are usually small, but it makes saRNA less suitable for delivering very large proteins.

In the next few years, saRNA will probably find its niche in applications where dose-sparing matters most — pandemic preparedness, infectious disease vaccines for low-resource settings, and contexts where you want longer-lasting expression than a standard mRNA. It is unlikely to replace standard mRNA entirely. It is more of a tool in the toolbox.

---

## SEGMENT 17 — Circular RNA — the next-generation competitor

Let me describe one more variant of the basic mRNA architecture, because it represents a different approach to the same set of problems and is being aggressively developed by a handful of companies. It's called **circular RNA**, or **circRNA**.

The basic insight is this. The reason mRNA degrades quickly inside cells is, in large part, that the exonucleases — the enzymes that chew on RNA — attack from the ends. A 5' exonuclease chews from the 5' end; a 3' exonuclease chews from the 3' end. Both ends are gates of attack. The 5' cap and the 3' polyA tail protect the ends to some extent, but the protection is imperfect, and eventually the ends erode and the RNA is destroyed.

What if your RNA had **no ends**? What if it were a circle? Then exonucleases would have nothing to attack, and the molecule could, in principle, persist in the cell for much longer than a linear mRNA.

\[Pause.\]

Circular RNAs do exist in nature. They are produced by an alternative form of splicing called **back-splicing**, where instead of joining one exon to the next downstream exon, the splicing machinery joins an exon to an upstream exon, forming a covalently closed circle. Naturally occurring circular RNAs have been known for decades but were originally thought to be junk; in the last fifteen years they've been recognized as a real category of cellular RNA, with regulatory functions in some cases.

Synthetic circular RNAs can be made in vitro by chemistry or by enzymatic ligation, or — more elegantly — by including in your IVT template a pair of self-splicing intron sequences from a Group I intron (often borrowed from Anabaena or Tetrahymena). When the IVT RNA is produced, the self-splicing introns cut themselves out and ligate the flanking exons together into a circle. The resulting molecule is a covalently closed circular RNA carrying your protein-coding sequence.

The translation of circular RNA works a little differently than linear mRNA. Without a 5' cap, you can't use the normal cap-dependent initiation pathway. Instead, you have to include an **internal ribosome entry site**, or **IRES**, in the circular RNA — a structured RNA element, typically borrowed from a virus, that recruits ribosomes directly without needing a cap. The IRES sits upstream of the protein-coding sequence in the circle, and the ribosome lands there and begins translating.

\[Pause.\]

The advantage, in principle, is **dramatically longer half-life**. A circular RNA can persist in cells for a week or more, compared to one to three days for typical linear mRNA. The same dose produces more total protein over time. And because there are no ends, you don't need to engineer the cap, the polyA tail, or any of the end-protection chemistry. The molecule is simpler in some ways.

The disadvantages are real too. IRES-driven translation is generally less efficient than cap-dependent translation, so per molecule, less protein is made per unit time. The manufacturing is more complex, because you need to add the splicing steps. And the chemistry for incorporating pseudouridine into a circular RNA produced by self-splicing is more constrained, because the Group I intron splicing machinery is finicky about modified nucleotides at certain positions. So immune evasion is a harder problem with circular RNA than with linear modified mRNA.

Several companies are working on this. **Orna Therapeutics**, founded around 2020, is one of the largest. **Laronde**, another startup, has been pursuing similar architectures. The clinical data on circular RNA is, as of 2026, very early — most programs are still in IND-enabling work or early Phase 1. Whether circular RNA will become the dominant next-generation mRNA modality, a niche application, or a footnote, is genuinely unclear right now.

The thing to take away from this segment is that **mRNA therapeutics is not a static field**. The chemistry of the molecule is being actively reworked. Self-amplifying mRNA, circular RNA, capped vs. uncapped, different modifications, different LNP compositions — there is a whole landscape of variants being explored, each with different trade-offs in expression level, duration, immunostimulation, and manufacturability. The version of mRNA we use in 2030 may look meaningfully different from the version we used in 2020. The platform is still being built.

---

## SEGMENT 18 — The frontier — beyond the liver

I want to close with a brief tour of the frontier, because the next ten years of mRNA therapeutics are not going to be a slow extension of what we've already done. They are going to be a series of attempts to solve problems that the COVID-era platform did not solve.

The single biggest problem, by everyone's account, is **extra-hepatic delivery**. With current LNP chemistry, when you inject mRNA-LNP intravenously, it goes to the liver. Almost entirely. The liver is where the LNP picks up its apolipoprotein E coat, gets recognized by hepatocyte receptors, and is taken up. For some applications — protein replacement for liver enzymes, gene editing of PCSK9, treatment of liver-expressed amyloidosis — that's fine. The liver is exactly where you want the drug to go.

But for many other applications, the liver is not where you want the drug. You want to target T cells, or B cells, or hematopoietic stem cells, or neurons, or muscle, or lung epithelium, or specific subsets of immune cells in lymph nodes, or tumor cells, or kidney cells. None of these are easy to reach with current LNPs. Getting an mRNA to a non-liver tissue, at meaningful expression, with low off-target liver expression, is one of the major unsolved engineering problems in the field.

Several approaches are being pursued. One is **SORT lipids** — Selective Organ Targeting lipids — which add an additional component to the LNP formulation that biases delivery toward lung, spleen, or other organs depending on the chemistry. Daniel Siegwart's lab at UT Southwestern has done influential work in this area. Another approach is **antibody-targeted LNPs**, where antibodies against specific cell-surface receptors are conjugated to the LNP surface to direct it to the desired cell type. A third is **inhaled mRNA** for direct delivery to the airway, bypassing the bloodstream entirely. Each of these is at varying stages of preclinical and early clinical development.

\[Pause.\]

A related frontier is **oral mRNA**. The dream is to be able to take an mRNA drug as a pill, like aspirin, instead of getting it injected. The barriers are substantial — the stomach is full of nucleases and a strongly acidic pH, the intestinal mucosa is hostile to nanoparticle absorption, and even if the mRNA got into the bloodstream from the gut, the first-pass effect through the liver would clear most of it. Researchers are working on encapsulating LNPs in protective layers, designing nanoparticles that survive the GI tract, and exploiting natural transcellular transport pathways in intestinal cells. Nothing close to clinical use exists yet, but the field is moving.

Another frontier is **in vivo CAR-T via mRNA**. CAR-T cell therapy is one of the most powerful cancer treatments available, but it requires extracting a patient's T cells, engineering them in a lab to express a chimeric antigen receptor, expanding them, and reinfusing them — an expensive, complex, weeks-long process available only at specialized centers. If instead you could inject an LNP-mRNA encoding a CAR directly into a patient, target it specifically to T cells in the bloodstream, and have those T cells transiently express the CAR — you would have an **in vivo CAR-T**, with no extraction, no engineering, no infusion. Several companies are pursuing this, with Capstan Therapeutics being one of the more visible. Early animal data has shown that this is mechanically possible. Whether it can be made effective and safe in humans is still an open question.

A fourth frontier is **mRNA-encoded bispecific antibodies and other complex biologics**. Bispecific antibodies — engineered antibodies that bind two different targets simultaneously, often used to bridge a T cell to a tumor cell — are notoriously hard to manufacture as proteins. They have stability issues, expression issues, and complex purification. If you could deliver them as mRNA, having the patient's own cells make them, you'd bypass the manufacturing problem entirely. Multiple companies are pursuing this; some early data suggests it can work, though dosing and pharmacokinetics are tricky.

\[Pause.\]

And there is a final, more speculative direction: **mRNA for protein degraders**. Some of the most exciting current work in pharmacology is around targeted protein degradation — small molecules called PROTACs that hijack the cell's protein-degradation machinery to destroy specific disease-causing proteins. mRNA could, in principle, be used to deliver custom-designed protein degraders, including bispecific molecules that link a target protein to the cellular degradation machinery. The chemistry is early, but the conceptual fit with the mRNA platform is good.

The broader point is that mRNA therapeutics, in 2026, is not a solved technology. It is a platform that has been validated for one major application — vaccines for infectious disease — and is now being extended, problem by problem, to dozens of other applications. Some of those extensions will succeed. Some will fail. The fundamental chemistry of the platform — pseudouridine-modified mRNA, LNP delivery, IVT manufacturing — is going to remain recognizable. But the specific applications and the specific engineering required for each one are going to keep evolving for the rest of your careers.

If you want to do something important in medicine over the next thirty years, mRNA therapeutics is one of the modalities to learn deeply. Because the platform is real, the manufacturing is real, the clinical proof has been demonstrated at planetary scale, and the list of problems it can be applied to is just beginning to be enumerated. The recipe-not-the-meal idea, after thirty years of slow, often-ignored development, has become one of the most important tools in modern medicine. And we are still, almost certainly, very early in figuring out what it can do.

\[Pause.\]

Thank you. We'll take questions for the rest of the session.

---

## APPENDIX — Glossary, key dates, and further reading

**Glossary of key terms used in this lecture:**

- **mRNA — messenger RNA.** The molecule that carries the protein-coding instruction from the DNA in the nucleus to the ribosomes in the cytoplasm, where it is translated into protein.
- **IVT — in vitro transcription.** The enzymatic process of making RNA from a DNA template in a test tube, using a polymerase such as T7.
- **T7 RNA polymerase.** A viral RNA polymerase, originally from bacteriophage T7, used in essentially all commercial therapeutic mRNA manufacturing. Initiates at a specific short DNA promoter sequence and synthesizes RNA at high speed and high processivity.
- **Pseudouridine (Ψ).** A chemically modified form of uridine in which the base-sugar linkage is rearranged from N-glycosidic to C-glycosidic. Naturally present in cellular RNAs. Substituting Ψ for U in synthetic mRNA reduces innate immune recognition and is the key chemistry discovered by Karikó and Weissman.
- **5' cap.** A modified 7-methylguanosine attached to the 5' end of an mRNA by a 5'-to-5' triphosphate linkage. Required for efficient translation and to prevent recognition as foreign RNA. Cap1 structures (with additional 2'-O methylation on the next nucleotide) are the gold standard for therapeutic mRNA.
- **CleanCap.** A commercial cap analog from TriLink that allows efficient co-transcriptional capping in a single IVT step.
- **ARCA — anti-reverse cap analog.** An earlier cap analog approach that allowed co-transcriptional capping but with lower efficiency than CleanCap.
- **UTR — untranslated region.** Sequence at the 5' or 3' end of the mRNA that flanks the protein-coding region but is not translated. Affects translation efficiency and mRNA stability.
- **PolyA tail.** A stretch of about 100-120 adenosine residues at the 3' end of the mRNA. Required for stability and efficient translation.
- **LNP — lipid nanoparticle.** A roughly 100 nanometer particle composed of an ionizable lipid, helper phospholipid (typically DSPC), cholesterol, and PEG-lipid, encapsulating mRNA. The delivery vehicle that protects mRNA in circulation and enables cellular uptake.
- **Ionizable lipid.** The key functional component of an LNP. Neutral at blood pH (7.4), positively charged at endosomal pH (5-6). Drives endosomal escape and cytoplasmic release of mRNA. Examples: DLin-MC3-DMA, SM-102 (Moderna), ALC-0315 (Pfizer/BioNTech).
- **Endosomal escape.** The process by which an internalized LNP destabilizes the endosomal membrane and releases its mRNA cargo into the cytoplasm.
- **TLR — toll-like receptor.** A family of innate immune sensors. TLR3, TLR7, and TLR8 detect viral RNA. Pseudouridine modification reduces signaling through these receptors.
- **RIG-I, MDA5, PKR.** Cytoplasmic sensors of foreign RNA. Trigger interferon responses and shutdown of translation when activated.
- **2P mutation.** Two proline substitutions (K986P, V987P) in the SARS-CoV-2 spike protein, originally developed by Jason McLellan for the homologous RSV F protein. Locks the spike in the prefusion conformation.
- **Neoantigen.** A tumor-specific peptide arising from a somatic mutation in the tumor that is not present in normal cells. The target of personalized cancer vaccines.
- **saRNA — self-amplifying mRNA.** An mRNA that encodes both a payload protein and a viral RNA replicase, allowing the molecule to replicate inside the cell. Enables lower doses and longer expression.
- **Circular RNA (circRNA).** A covalently closed RNA without 5' or 3' ends, translated via an internal ribosome entry site (IRES). Potentially much more stable than linear mRNA.
- **CAR — chimeric antigen receptor.** An engineered T-cell receptor used in cancer immunotherapy. "In vivo CAR-T" refers to making CARs by injecting mRNA-LNP directly into patients rather than extracting and engineering T cells ex vivo.

**Key dates:**

- **1961.** Discovery of messenger RNA by Brenner, Jacob, Meselson, and others.
- **1984.** First demonstration of in vitro transcription using T7 RNA polymerase (Studier and colleagues).
- **1990.** Jon Wolff and colleagues show that injecting naked mRNA into mouse muscle leads to detectable protein expression — the first demonstration that mRNA could, in principle, work as a drug.
- **2005.** Karikó and Weissman publish in _Immunity_ that pseudouridine-modified mRNA evades innate immune detection. Largely ignored.
- **2008.** BioNTech founded in Mainz, Germany, by Uğur Şahin and Özlem Türeci.
- **2010.** Moderna founded in Cambridge, Massachusetts. Derrick Rossi shows mRNA reprogramming of fibroblasts.
- **2013.** Jason McLellan and Barney Graham publish the prefusion-stabilizing 2P approach for RSV F protein.
- **2018.** First FDA approval of an RNA-LNP therapeutic: patisiran for transthyretin amyloidosis (siRNA, not mRNA, but the LNP platform is essentially the same).
- **January 10, 2020.** SARS-CoV-2 genome sequence released publicly.
- **January 13, 2020.** Moderna and NIH design mRNA-1273. BioNTech designs BNT162b2 around the same time.
- **March 16, 2020.** First human dose of mRNA-1273 in Phase 1 trial.
- **December 11, 2020.** FDA Emergency Use Authorization for Pfizer/BioNTech BNT162b2.
- **December 18, 2020.** FDA Emergency Use Authorization for Moderna mRNA-1273.
- **2023.** Karikó and Weissman awarded the Nobel Prize in Physiology or Medicine.
- **2023.** First approved self-amplifying mRNA vaccine (ARCT-154, Japan).
- **2024.** FDA approval of Moderna mRNA-1345 for RSV — the second approved mRNA vaccine.
- **2024-2026.** Phase 3 trials of personalized cancer vaccines (mRNA-4157, BioNTech-Genentech) report positive data.

**Suggested further reading:**

- Karikó, K. et al. (2005). "Suppression of RNA recognition by Toll-like receptors: the impact of nucleoside modification and the evolutionary origin of RNA." _Immunity_ 23(2): 165-175. The foundational pseudouridine paper.
- Pardi, N., Hogan, M.J., Porter, F.W., Weissman, D. (2018). "mRNA vaccines — a new era in vaccinology." _Nature Reviews Drug Discovery_ 17(4): 261-279. The pre-COVID review article that, in retrospect, anticipated the platform's potential.
- Polack, F.P. et al. (2020). "Safety and efficacy of the BNT162b2 mRNA Covid-19 vaccine." _New England Journal of Medicine_ 383(27): 2603-2615. The Pfizer/BioNTech Phase 3 paper.
- Baden, L.R. et al. (2021). "Efficacy and safety of the mRNA-1273 SARS-CoV-2 vaccine." _New England Journal of Medicine_ 384(5): 403-416. The Moderna Phase 3 paper.
- Pallesen, J. et al. (2017). "Immunogenicity and structures of a rationally designed prefusion MERS-CoV spike antigen." _PNAS_ 114(35): E7348-E7357. The McLellan/Graham 2P paper for coronavirus spike, building on the earlier RSV work.
- Rohner, E., Yang, R., Foo, K.S., Goedel, A., Chien, K.R. (2022). "Unlocking the promise of mRNA therapeutics." _Nature Biotechnology_ 40(11): 1586-1600. A comprehensive review of the platform beyond vaccines.
- Verve Therapeutics PCSK9 clinical updates (2023-2025) — primary source for in vivo gene editing data.

This concludes the lecture. The next time you take an mRNA vaccine — or read about an mRNA cancer therapy, or hear about a one-shot LNP gene edit — you should know what's in the bottle, why it's hard, and why it took thirty years to get there. The platform is real. The science is beautiful. And, in 2026, we are very early.

---




