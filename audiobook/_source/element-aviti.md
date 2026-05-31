# Element Biosciences AVITI and Avidity Sequencing

**A 2-hour undergraduate genomics lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — Why a credible Illumina challenger matters

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about a company called Element Biosciences and the sequencing chemistry they invented, which is called avidity sequencing. Element is a young company — they were founded in 2017, they shipped their first commercial instrument in 2022, and as of this lecture they are private, well-funded, and growing. They have, depending on how you count, somewhere between two and five percent of the global short-read sequencing market. That is a small number. So your first reasonable question, sitting in this room, is — why are we spending two hours on a small company with a single benchtop instrument when we just spent two hours last week on Illumina, the eighty-percent gorilla that already runs essentially all the sequencing data in the world?

The answer is that Element is the first credible challenger to Illumina's short-read dominance in roughly fifteen years. And "credible" is doing a lot of work in that sentence. There have been other challengers. There was Complete Genomics, which got bought by BGI. There was Ion Torrent, which we covered separately. There was Qiagen's GeneReader, which quietly disappeared. There were various Chinese platforms. Most of these challengers either occupied a niche, got absorbed by a larger player, or simply failed to deliver the combination of accuracy, throughput, and per-base cost that you need to be a real alternative to a NovaSeq. Element is different in a way that matters. They have a new chemistry — a genuinely new one, not a tweak of sequencing-by-synthesis — that on paper produces data with a lower error rate than Illumina at a lower reagent cost. They have a benchtop instrument that competes head-to-head with Illumina's NextSeq line. They have founders who came directly out of the senior ranks of Illumina and Pacific Biosciences, which is to say they were built by people who knew, intimately, every constraint that the incumbent technology has to live with, and they designed around those constraints. And they showed up at a moment — the early 2020s — when the patents that built the moat around Illumina's reversible-terminator chemistry started to expire, which is a structural opening that didn't exist a decade earlier.

\[Pause.\]

Here's the analogy I want you to hold in your head for the next two hours. Imagine you're a customer who has been buying one brand of car for twenty years. The brand is reliable. The brand has all the dealerships. The brand has the only mechanics who know how to service it. The brand sets the prices, and you pay them, and you grumble but you pay because there's nothing else. Now imagine that a small group of former senior engineers from that brand quit, started their own company, and built a car that uses a completely different engine design — one they think is structurally cleaner — and they price it twenty or thirty percent below the incumbent. They don't have the dealership network yet. They don't have the brand recognition. Half their potential customers have never heard of them. But the car works, and a handful of independent reviewers say it actually drives better than the incumbent. What happens to the incumbent's pricing power, two years out, five years out?

That's Element. The incumbent is Illumina. The independent reviewers are academic core facilities — places like UC Davis, the University of Arizona genomics core, large medical centers — that have started running Element instruments alongside Illumina ones and publishing comparisons. The new engine is avidity sequencing, which we'll spend most of this lecture unpacking. The pricing pressure, even before Element captures a large share, is already changing the market — Illumina has lowered its per-genome reagent costs on the NovaSeq X partly in response to credible competition, and the entire sequencing ecosystem is now in a phase where customers, for the first time in years, can play vendors against each other.

If you walk out of here in two hours and you can do three things — one, sketch the avidity sequencing cycle on a whiteboard and explain why decoupling the binding step from the incorporation step is the central conceptual insight; two, explain in plain English why a multivalent polymer holding multiple labeled bases produces cleaner signal than a single labeled nucleotide; three, look at any modern short-read sequencing paper and have an opinion about whether the data was produced on an Illumina or an Element box, and what that choice implied about cost, error rate, and lab context — then we've succeeded. Everything else hangs off those three.

\[Pause.\]

One more orienting fact before we go deeper. The reason a credible challenger matters is not primarily about Element making money, though that's how the company keeps the lights on. It's about what happens to the rest of biology when there's a real second supplier. For two decades, the entire global sequencing industry has been a near-monopoly. When Illumina raises prices, customers pay. When Illumina chooses not to develop a particular application, the application doesn't get developed. When Illumina decides which instruments to retire and which to support, labs reshape their workflows around those decisions. A monopoly slows down because it doesn't have to move fast. Competition is what forces a market to keep getting cheaper, faster, and better. The arrival of a real second player in short-read sequencing is — for the entire downstream world of clinical genomics, agricultural genomics, microbial genomics, and basic research — a structural change that should, over the next decade, push prices down and innovation up. That's why we care about Element even if you, the working scientist, never personally touch an AVITI. The pressure on the incumbent benefits you regardless.

So that's the contract. We're going to spend two hours on one company and one chemistry, and we're going to do it the way you'd want to understand any new technology challenging an incumbent — by getting the chemistry right, then the engineering, then the economics, then the adoption barriers, then the strategic outlook. Let's start with the people who built it.

---

## SEGMENT 2 — The Element founders and the founding insight

Element Biosciences was founded in 2017 by three people: Molly He, Mike Previte, and Matthew Kellinger. All three were chemists or biochemists with senior or near-senior positions at established sequencing companies before they left to start Element. The combined résumé matters here, because it's not the usual startup story of three graduate students in a garage. It's three mid-career industrial scientists, each with seven or eight years of experience at a sequencing-platform company, who looked at the constraints of the chemistry they were working on, decided they could do better with a clean slate, and walked out.

Molly He is the CEO. Her doctorate is in structural biology, and before Element she spent about seven years at Illumina, where she ran chemistry R&D — meaning she was the senior person responsible for the very sequencing chemistry we covered in the Illumina lecture. Before Illumina, she spent two years at Pacific Biosciences, which is the long-read company we covered in another lecture. So her career has been a tour of essentially every major short-read and long-read platform that exists, at the level of the person who decides which chemistry experiments to fund. When you talk to people who knew her at Illumina, the consistent description is that she was the chief scientist who knew, in fine detail, what was wrong with the reversible-terminator chemistry — every compromise, every workaround, every place where the chemistry had to be patched to keep working at scale. She left, and a year later she had a company.

Mike Previte is the CTO. His doctorate is in physical chemistry, and he spent about six years at Illumina as a principal scientist working on next-generation sequencing platforms. Before Illumina, he was at Life Technologies — the company that eventually became part of Thermo Fisher — working on single-molecule sequencing. He holds a stack of patents in optical detection and chemistry for sequencing instruments. He is, in the small world of people who can actually build a sequencer from scratch, one of the maybe fifty people on Earth qualified to do so.

Matthew Kellinger is the VP of Biochemistry. His doctorate is in biochemistry, and he spent about five years at Illumina working on the enzyme chemistry that makes reversible-terminator sequencing run — the polymerases, the binding kinetics, the nucleotide analogs. He's the deep enzyme person on the founding team.

\[Pause.\]

So here's the picture. You have three people who collectively spent close to twenty person-years inside Illumina, at senior levels, working on every layer of the sequencing chemistry stack — structural biology, optics, enzyme engineering, instrument design. They knew where every bone in the body was buried. And in 2017, they left, together, to start a competing sequencing company. That kind of founding team is rare. It almost never happens in life sciences, because the people senior enough to start a credible competitor are usually too senior to want to take the risk. It happened here because, as Molly He has said in interviews, the three of them looked at the future of the sequencing market — at the throughput plateau, at the per-base cost plateau, at the patent expiry calendar — and concluded that there was about to be a window. They had two-to-five years to design a clean-slate chemistry that would be ready when that window opened. They took the window.

The founding insight — and this is the part you need to internalize, because it organizes everything else in this lecture — is structural. It goes like this. The Illumina chemistry, sequencing-by-synthesis with reversible terminators, asks one molecule to do two completely different jobs at the same time. That one molecule is a fluorescent nucleotide. It has to be the right nucleotide — meaning it has to base-pair with the template, and only the correct one of the four bases should do so — and it has to get incorporated by the polymerase into the growing strand. Both jobs have to happen in the same chemical step, with the same molecule. And those two jobs, it turns out, pull in different chemical directions.

Why? Because the molecular features that make a nucleotide bind selectively and tightly — high binding affinity, slow off-rate, careful base-pairing geometry — are not the same features that make it a good substrate for the polymerase. The polymerase wants a small, simple, unmodified nucleotide that it can grab and incorporate quickly. The binding step wants something bulky enough to carry a fluorescent dye and a chemical blocker. The incorporation step wants something clean enough to slide through the polymerase active site and form a clean phosphodiester bond. These are not compatible asks. Every fluorescent nucleotide that ships in an Illumina kit is a compromise — a molecule that's good enough at both jobs to work, but not optimal at either.

And every compromise costs you something. It costs you raw signal — because the dye has to be small enough not to interfere with incorporation, so it's dimmer than it could be. It costs you incorporation speed — because the blocked, dye-loaded nucleotide is bulkier than a natural one, so the polymerase works slower. It costs you reagent — because the binding affinity isn't as high as you'd like, you have to use the nucleotides at relatively high concentrations to drive the chemistry forward, and at high concentrations the unincorporated nucleotides also generate background signal that you have to wash away. And it costs you accuracy — because at high concentrations, the wrong nucleotide occasionally binds too, and gets miscalled.

\[Pause.\]

The founders' insight was — what if we separated the two jobs? What if we used one molecule for the binding-and-imaging step, and a completely different molecule for the incorporation step? Then we could optimize each one independently. The binding molecule could be huge and bright and tight-binding, with no concern for whether the polymerase likes it, because the polymerase isn't going to incorporate it. The incorporation molecule could be small and clean and fast, with no dye attached at all, because the imaging has already happened by the time we ask the polymerase to extend the strand. Two molecules. Two jobs. Each one optimized for its own purpose. No compromise.

That is the entire conceptual move at the heart of avidity sequencing. Decouple binding from incorporation. Everything else — the avidite polymer, the polony, the two-step cycle, the Q40 accuracy claim — is implementation detail on top of that one insight. And once you see the insight, it becomes hard to understand why nobody did it earlier. The answer is partly that it took twenty years of working inside Illumina's chemistry to see the constraint with that kind of clarity, and partly that the engineering required to build the alternative — synthesizing the multivalent polymer, getting the imaging to work cleanly, building an instrument and the software stack — is non-trivial and took the founders five years even with their pedigree.

Element raised about thirty million in seed money to start. They went on to raise something like seven hundred million dollars in total venture funding through 2024, in five rounds, with their most recent round in mid-2024 — a Series D of two hundred and seventy-seven million dollars — valuing the company at about a billion dollars. They are profitable on a gross-margin basis, growing fast, and widely expected to file for an IPO when public-market conditions improve. As of this lecture they are still private. But the funding history tells you that serious institutional capital believes the avidity-sequencing thesis is real.

Now let's actually look at the chemistry — first by understanding, in more detail, exactly what the Illumina compromise is that they're attacking.

---

## SEGMENT 3 — The Illumina-chemistry compromise — one molecule doing two jobs

Let me re-tell the Illumina chemistry from the perspective of the founders of Element, which is the perspective of "what is wrong with this picture." This is going to be a refresher on Illumina sequencing for those of you who took the Illumina lecture, but I want you to listen with new ears, because we're listening for the compromises rather than the elegance.

The Illumina chemistry, you'll remember, is a four-step cycle. Wash in a mix of all four fluorescent reversible-terminator nucleotides. The polymerase, sitting at the end of the growing strand on each cluster on the flow cell, finds the correct one of the four and incorporates it. The blocker on the three-prime hydroxyl group prevents the polymerase from extending further. Wash away the unincorporated nucleotides. Image the flow cell — laser light, four colors, four photographs, one base at each cluster. Then chemically cleave off the dye and the blocker simultaneously, exposing a fresh three-prime hydroxyl ready for the next round. Repeat. Incorporate, image, cleave, repeat.

Now let's look at that fluorescent reversible-terminator nucleotide. It's a single small molecule. It has, attached to it, four functional features. First, the nucleobase — A, T, G, or C — that determines which template base it pairs with. Second, the deoxyribose-triphosphate sugar-phosphate backbone, which is the substrate the polymerase actually grabs. Third, a chemical blocker on the three-prime hydroxyl, which physically prevents the polymerase from adding the next base after this one is incorporated. Fourth, a fluorescent dye, tethered to the base, which carries the color the camera reads. Four functional pieces on one tiny molecule.

\[Pause.\]

Now think about what each of those pieces wants. The base wants to pair selectively with its complement. Pairing in solution is driven by hydrogen bonds and base-stacking energies. A small, clean nucleotide pairs cleanly. A nucleotide festooned with bulky modifications pairs less cleanly, because the modifications can sterically interfere with the geometry of base pairing. The blocker, sitting right next to the chemical handle the polymerase needs, has to be small enough that the polymerase will still accept the modified nucleotide as a substrate. The dye has to be small enough and tethered far enough from the active site that it doesn't interfere with incorporation. And the whole molecule has to be water-soluble at high concentrations, stable through dozens of wash cycles, and cleavable by mild chemistry that doesn't destroy anything else on the flow cell.

These constraints are all in tension. If you make the dye bigger and brighter, it interferes more with incorporation, and the polymerase slows down or rejects the nucleotide. If you make the blocker bigger and more reliable, you make the cleavage step harder, and you get fewer cycles before the chemistry breaks down. If you make the nucleotide bind tighter to the template — by, say, modifying the base to be a better pairing partner — you risk also making it bind the wrong template, because tighter binding is less discriminating. Every dial you turn to fix one problem makes another problem worse.

The result is that the actual Illumina nucleotide is a careful, hard-won engineering compromise that took the original Solexa team years to settle on, and that Illumina has refined incrementally ever since. The compromise works. It works well enough to run twenty thousand human genomes a year through a single NovaSeq X. But every compromise leaves performance on the table. And the performance left on the table shows up in three measurable places.

\[Pause.\]

First place: **read length**. Illumina chemistry tops out at about 300 base pairs per read, paired-end, on most instruments — 150 bases from each end of a fragment. The reason it tops out is that every cycle of incorporation-image-cleave introduces a small amount of error. Some clusters fail to incorporate. Some get an extra incorporation. The blocker doesn't always cleave perfectly, so sometimes the next cycle adds the wrong base. The dye doesn't always cleave perfectly, leaving residual signal that confuses the next cycle's call. These errors accumulate cycle by cycle. By cycle 150, the signal-to-noise has degraded enough that reads beyond that point are unreliable. The chemistry can't keep up.

Second place: **error rate at the end of reads**. The same accumulation problem means that the quality of base calls drops as you go further into a read. The first fifty bases of a 150-base Illumina read have very low error rates — somewhere around one in a thousand bases wrong. The last fifty bases have substantially higher error rates, sometimes one in a hundred. The drop is gradual but real, and it's a direct consequence of the chemistry compromise. Every cycle the dye doesn't cleave perfectly, every cycle the blocker doesn't remove cleanly, you accumulate ghost signal.

Third place: **reagent cost**. The fluorescent nucleotides are expensive to make. They're complex organic molecules with multiple chemical modifications, and they have to be used at relatively high concentrations — micromolar — because the binding affinity isn't as high as it could be. High concentration times complex synthesis times millions of cycles times billions of clusters equals a meaningful chunk of the per-sample cost. Every dollar Illumina charges for a sequencing kit is, to a first approximation, the cost of those nucleotides plus a margin.

Now, all three of these — read-length cap, end-of-read quality drop, expensive reagents — are not absolute physical limits. They are consequences of the specific chemical compromise that Illumina settled on. A different chemistry, with different compromises, could in principle do better. And that is exactly what Element set out to build.

Let's see how.

---

## SEGMENT 4 — Avidity sequencing — decoupling binding from incorporation

Here is the avidity-sequencing cycle, in its simplest form. You have a flow cell with millions of clusters of DNA — we'll call them polonies, because that's the Element-specific term and we'll get to why in the next segment — each one a tight collection of identical copies of a starting template, just like an Illumina cluster. At the start of each cycle, the polymerase is sitting at the end of the growing strand on each polony, waiting to extend by one base.

Step one: wash in a reagent called the avidite mix. The avidite mix contains four distinct multivalent polymers, one for each base. Each polymer is decorated with multiple copies of a single labeled nucleotide — a polymer carrying many A-nucleotides with one color, a polymer carrying many T-nucleotides with a different color, and so on for G and C. The polymerase at each polony grabs the cognate avidite — the one whose nucleotides pair with the next template base — and holds onto it through multiple polymerase molecules on the same polony, because there are many polymerases and many template strands at each polony, and the avidite is multivalent enough to be held by several of them simultaneously. We'll get into the geometry of that in the next segment. The point right now: the avidite is held in place at each polony by the cognate base, with a binding strength that is enormously stronger than a single nucleotide would have because multiple binding sites act in parallel.

Step two: image. Wash away the unbound avidites. The remaining bound avidites, one per polony, glow in their characteristic color. The camera takes a photograph. From the color at each polony's position, the instrument calls the base. This is the read.

Step three: remove the avidites. A wash strips the bound avidites off, leaving the polony in its original state — with the polymerase still sitting at the end of the growing strand, having identified the correct next base but having not yet incorporated it. The polymerase has, so to speak, been shown the right answer but not allowed to write it down yet.

Step four: extend. Now you wash in a completely separate reagent — a mix of four ordinary reversibly-terminated nucleotides, with no dyes attached, at relatively low cost because they're chemically simpler. The polymerase incorporates the correct one — and only the correct one will incorporate, because the polymerase still has selectivity, it's just that the previous binding step has already pre-selected the right answer and made the incorporation faster and cleaner. The blocker on the three-prime hydroxyl prevents further extension. Wash, chemically cleave the blocker, and you're ready for the next cycle.

\[Pause.\]

So that's the four-step avidity cycle: avidite-bind, image, strip, extend. Notice what's different from the Illumina cycle. In Illumina, the imaging step and the incorporation step happen in one combined operation — the polymerase grabs the labeled nucleotide, incorporates it, and the dye gets read out from the incorporated base. The dye is physically attached to the base that just got added to the strand. In Element, those two steps are physically and chemically separate. The reading happens with one molecule (the avidite), and the extending happens with a completely different molecule (a plain unmodified-except-for-the-blocker nucleotide). The reading molecule never gets incorporated. The incorporating molecule never gets imaged. Two molecules, two jobs, fully decoupled.

Now let me give you the analogy. **Illumina sequencing is like asking a single person to simultaneously hold up a colored sign with the answer to a question AND write the answer down in the official log book. The person has only two hands. One hand holds the sign, one hand writes. The sign has to be small and light enough to hold while writing, and the writing has to be done while keeping the sign visible. The compromise is real.**

**Avidity sequencing is like splitting that job between two people. Person one — the avidite — holds up an enormous, brightly colored sign with the answer. They have nothing else to do. The sign can be as big and bright as you want. Person two — the unmodified nucleotide — comes in afterward, sees the answer that was just displayed, and writes it down in the log book. They have nothing in their hands but a pen. The writing is fast and clean. Each person is optimized for their one job.**

\[Pause.\]

What does decoupling buy you, concretely? Three things, corresponding directly to the three Illumina compromises we identified.

It buys you brighter signal. The avidite can carry many dye molecules — Element's design typically has on the order of four to twenty fluorescent labels per avidite, depending on the version — because there's no constraint that the polymerase has to accept this molecule as a substrate. Brighter signal means cleaner base calls, which means lower error rates per cycle.

It buys you tighter binding. The avidite uses multivalency — multiple base-pairing interactions in parallel — to achieve effective binding affinities that are roughly a hundred times stronger than a single labeled nucleotide. Tighter binding means you can use the avidite at much lower concentrations — nanomolar instead of micromolar — which dramatically reduces background fluorescence from unbound molecules in solution, and also reduces the amount of reagent you have to ship in every kit.

It buys you cleaner incorporation. The extending nucleotide is small, simple, and unencumbered. The polymerase grabs it and adds it to the strand fast, with high accuracy, and the blocker chemistry can be optimized purely for clean cleavage without having to also accommodate a tethered dye. Cleaner incorporation means fewer phasing errors — fewer clusters out of sync because they failed to incorporate, or incorporated twice — which means the signal stays clean for longer, which means longer reads with lower error rates at the end.

These three effects compound. Brighter signal lets you push the camera harder. Tighter binding lets you use less reagent. Cleaner incorporation lets you read longer. The aggregate result, on paper, is a chemistry that produces lower-error data at lower per-base cost than Illumina, with comparable or better read lengths. That is the avidity-sequencing pitch, in the abstract. Now let's look at the actual avidite — the multivalent polymer that does the binding work — because the design of that molecule is where most of the cleverness lives.

---

## SEGMENT 5 — The multivalent avidite — multi-point binding for clean signal

The avidite is the central molecule of avidity sequencing. It's the thing the whole company is named after. So let me describe it carefully, because the shape of the molecule explains why the binding works the way it does.

Picture, please, a small central core — a chemical scaffold, like a tiny molecular hub — with multiple flexible arms extending outward from it. Each arm ends in a single labeled nucleotide. So if there are four arms, the avidite has four labeled nucleotides hanging off the central core, all of the same base — say, all A's. If there are six arms, you have six A's, and so on. The core also carries the fluorescent dyes — multiple dye molecules attached to the scaffold itself or to the bases — so the whole avidite is a single multi-armed, brightly-fluorescent object roughly the size of a small protein.

Here's the analogy. **Imagine a hand with four fingers. Each fingertip has a small magnet on it. The magnets are all of the same polarity — all north, say. Now imagine a metal surface dotted with patches that are either north-attracting or south-attracting. If the surface has north-attracting patches in the right arrangement, all four fingers can grip simultaneously and the hand sticks firmly. If the surface only has one matching patch in reach, the hand barely grips at all — a single magnet isn't strong enough on its own. The hand sticks well only when multiple fingers can grip in parallel.**

That's the avidite. The hand is the polymer core. The fingers are the arms. The fingertip magnets are the labeled nucleotides. The metal surface is the polony — a dense cluster of identical DNA template strands, each one offering up the same next base for binding. When the avidite floats over a polony, if the polony's next template base matches the avidite's nucleotides, then multiple polymerases on multiple template strands within the polony can simultaneously grab the avidite's multiple arms. The avidite is anchored by multiple binding events in parallel. That parallel binding is called **avidity** — hence the name of the company. It's the cumulative strength of many cooperative weak interactions.

\[Pause.\]

Why does multivalency matter so much? It's about binding kinetics. A single nucleotide pairing with its complement is a weak interaction — the binding energy is a few kilocalories per mole, the dissociation constant is in the micromolar range, and at any given moment a single nucleotide binds for a few microseconds before falling off again. To get reliable single-nucleotide binding for imaging, you'd need micromolar concentrations of nucleotide in solution, which produces a lot of unbound background fluorescence and washes slowly.

When you make the binding multivalent — when one molecule offers four binding sites simultaneously to four matching anchors — the effective binding strength is the product of the individual binding strengths, not the sum. If a single binding has a dissociation constant of one micromolar, then four parallel bindings give an effective dissociation constant in the nanomolar or even picomolar range, depending on the geometry. The binding becomes essentially irreversible on the timescale of the imaging cycle. The avidite, once bound to the correct polony, stays put long enough for the camera to take a clean picture. And because the avidite binds so tightly, you only need to put a tiny amount of it in solution — nanomolar concentrations — to get reliable binding. The low concentration means almost no unbound background fluorescence. The image is dark everywhere except where the avidites are bound. Clean signal, low noise, high contrast.

Multivalency also buys you specificity. If only one of the four arms binds — say, three of the four template bases in the polony are A but one is something else — the binding is weak and the avidite falls off quickly. Only when all the arms find their matching bases does the avidite stick reliably. This means the system is highly discriminating against mismatches. A polony where the next base is mostly A but has a few errors won't strongly bind the A-avidite, and even if it weakly binds, the avidite dissociates fast and gets washed away. Only polonies with a clean, uniform population of the same next base across all the template copies produce a strong, stable signal. This is one of the key reasons avidity sequencing achieves such low error rates — multivalent binding is, by its physics, a high-fidelity selector.

\[Pause.\]

There's a subtle but important point about the polymer geometry. The arms have to be the right length and flexibility for the binding sites to actually reach multiple polymerases on a polony simultaneously. If the arms are too short, the geometry doesn't work — only one arm can engage at a time. If the arms are too long and floppy, the avidite acts more like a loose collection of independent nucleotides than a single cooperative unit. Element spent years tuning the polymer architecture — the choice of scaffold chemistry, the length of the linkers, the spacing of the arms, the number of arms per avidite — to optimize for the geometry of their polonies, which themselves have a specific size and density. The avidite and the polony are co-designed. Neither would work as well with the other one's parameters changed.

Why is it called an "avidite" rather than just "a multivalent labeled nucleotide"? The name is a deliberate echo of "avidin" — the protein that binds biotin with one of the strongest non-covalent affinities known in biology, partly because each avidin molecule has four binding sites that can all engage simultaneously. Avidin's name comes from the Latin _avidus_, meaning "eager" or "greedy" — a molecule that grabs onto its target with greedy multi-point attachment. The avidite is the same idea applied to nucleotide-on-template binding. The name positions the chemistry in the lineage of multivalent binders, which is exactly the right place to put it conceptually.

Now, the avidite is only one of the two halves of the chemistry. The other half is the polony — the clonally amplified DNA cluster on the flow cell. Element doesn't use Illumina's bridge amplification to make their clusters. They use a different method called rolling circle amplification, which produces a different kind of cluster. Let's look at that, because the polony structure is what makes multivalent binding work in the first place.

---

## SEGMENT 6 — The two-step cycle — read with avidite, then extend with clean nucleotide

Before we go fully into how polonies get made, let me complete the picture of the sequencing cycle itself, because I want you to have the full rhythm in your head before we get into the engineering details.

The Element AVITI sequencing cycle, end to end, looks like this. Picture a flow cell — Element calls it a "flow cell" too, like Illumina, and it's roughly similar in scale: a glass surface with millions of microscopic features, each one a polony, sitting in a fluid channel through which reagents flow. At the start of a sequencing run, the flow cell has been loaded with a library of DNA fragments, the fragments have been clonally amplified into polonies by rolling circle amplification, and primers have been annealed to each polony so that a polymerase can extend from the primer using the polony's template strands.

Cycle starts. Step one: wash in the avidite mix — all four avidites at nanomolar concentrations, plus polymerase. The polymerase at each polony grabs the cognate avidite and forms a stable ternary complex: polymerase bound to template, holding the avidite by multivalent base-pairing. The avidite is not incorporated. It's just held in place. Step two: wash away excess avidite, image the flow cell, read out the color at each polony. The color tells you which base is the next one to be added at that polony. Step three: another wash to strip the bound avidites off — this is a chemical step that disrupts the avidity binding and releases the avidite from the complex, leaving the polymerase still sitting at the end of the growing strand. Step four: wash in the extension mix — four ordinary nucleotides, each carrying a reversible blocker on the three-prime hydroxyl, but no dyes. The polymerase incorporates the correct one. The blocker stops further extension. Step five: a final wash and a cleavage step to remove the blocker, opening up the three-prime hydroxyl for the next cycle.

That's one full cycle of avidity sequencing. Avidite-bind, image, strip, extend, cleave. Five steps if you count the cleavage separately, four if you fold it in. Repeat this cycle 150 or 300 times, depending on how long a read you want, and you get a sequence read at every polony on the flow cell.

\[Pause.\]

The total number of distinct chemical reagents you have to ship to a customer for one sequencing run is therefore larger than for Illumina — you've got four avidites plus four extension nucleotides plus polymerases plus wash buffers plus cleavage reagents — but the dollar cost per cycle is lower, because the avidites are used at nanomolar concentrations (tiny amounts) and the extension nucleotides are chemically simpler than Illumina's combined dye-plus-blocker-plus-base nucleotides. The economic logic of the chemistry is that you're trading molecular complexity in any one reagent for total reagent simplicity, and the trade comes out favorably.

Here's another way to think about it. **In Illumina, every cycle uses one expensive chimeric molecule that has to do everything. In Element, every cycle uses two cheaper molecules, each of which does one thing. Two cheap things together cost less than one expensive thing that combines them.** That's the structural argument for why Element's per-base reagent cost should, in steady state, be lower than Illumina's. And it appears to hold up in published comparisons — Element's reagent cost per gigabase is roughly thirty to forty percent lower than Illumina's equivalent benchtop instruments, at the time of this lecture.

\[Pause.\]

There's one more design feature of the two-step cycle worth flagging, because it has implications for accuracy. In Illumina, the imaging happens after the nucleotide has been incorporated. By the time you take the picture, the base is already locked into the strand. If the picture says "this base is A" and you call A at that position, but actually the polymerase incorporated a T and the dye signal was noisy, you've made a permanent error — the wrong base is in the strand, and the next cycle will extend from a wrong base, and you may get a chain of phasing errors.

In Element, the imaging happens before incorporation. You read the avidite, see what the polymerase chose to bind, and then in a separate step the polymerase actually does the incorporation. This separation gives the system, at least in principle, an opportunity to be more conservative. If the avidite binding signal at a particular polony is weak or ambiguous — if no single color clearly dominates — the software can flag that cycle for that polony as a low-confidence call, and the extension step still proceeds, but the base call carries an explicit "I'm not sure" quality score. The decoupling of binding from incorporation also means that the binding chemistry can be more discriminating without slowing down the incorporation, because the two steps don't compete for the same molecular features.

This is part of why the Q40-and-beyond accuracy numbers that Element advertises are credible — the architecture of the chemistry just makes it easier to read out signal with high confidence, separate from the question of whether the polymerase will actually add the right base. We'll talk about what Q40 means and what it buys you in the next segment.

But before we get there, let me close this segment by emphasizing the architectural symmetry. The avidity-sequencing cycle has four conceptual moves: bind to read, image to decide, strip to reset, extend to advance. The Illumina cycle has three: incorporate-and-bind in one move, image, cleave-and-reset. Element added a step, but the step they added — the strip — is what gives them the freedom to optimize the binding chemistry and the extension chemistry independently. The added step is the price of the architectural cleanness. And the architectural cleanness is what produces the accuracy and the cost numbers that make Element a real competitor.

Onward — let's understand what Q40 actually means, because the accuracy claim is a big part of Element's pitch, and you should know how to read it skeptically.

---

## SEGMENT 7 — The Q40 accuracy claim — what 1 error per 10,000 bases buys you

Let me give you the standard way the sequencing field talks about error rates, because the jargon is opaque and you need it to read any sequencing-platform comparison. The unit is called a **Q-score**, short for quality score, and it comes from a logarithmic scale invented in the early days of Sanger sequencing and inherited by everything since.

The scale works like this. A Q-score of Q10 means a one-in-ten chance the base call is wrong. Q20 means one-in-a-hundred. Q30 means one-in-a-thousand. Q40 means one-in-ten-thousand. Q50 means one-in-a-hundred-thousand. Q60 means one-in-a-million. Every ten points up the scale, the error rate drops by a factor of ten. The relationship is just Q equals minus-ten times log-base-ten of the error probability.

The reason Q-scores matter is that they let you compare technologies on a common scale, and they let you set thresholds for downstream analysis. Most variant-calling pipelines, for example, default to discarding any base call below Q20 as too unreliable to use. Cancer genomics pipelines, which are looking for rare variants in a background of mostly normal cells, typically require Q30 or higher. And the very-low-frequency-variant world — looking for a single tumor mutation in a background of ten thousand normal cells — needs Q40 or Q50 minimum, because below that the error rate of the sequencer is higher than the signal you're looking for.

\[Pause.\]

So here's the headline comparison. Illumina's standard advertised quality is around Q30 — meaning across an average run, the bulk of the bases come in at or above one-in-a-thousand accuracy. Some bases are higher quality, some lower; the distribution depends on the instrument, the chemistry, the read position, and the local sequence context. Illumina advertises that "≥85% of bases above Q30" is a typical benchmark for their instruments. Most of the data that comes off an Illumina run is Q30-quality.

Element's standard chemistry, called Cloudbreak — the one that ships on the AVITI as of 2024 — advertises "routinely exceeds Q40." That is one full order of magnitude lower error rate. About 90% of bases come in at Q40 or higher. And their high-end chemistry, called Cloudbreak UltraQ, advertises ≥70% of bases at Q50 or higher and ≥90% of bases at Q40 or higher. Q50 is one error per hundred thousand bases. Two orders of magnitude better than Illumina's Q30.

These are advertised numbers. Always discount advertised numbers somewhat. Independent benchmarking from places like the UC Davis core facility has largely confirmed that Element runs do produce substantially higher Q-scores than Illumina runs on the same samples, by something like a half to a full order of magnitude on most metrics. The Q40 claim is real. The Q50 claim is achievable on well-prepared libraries. The chemistry is, on the accuracy axis, genuinely better than Illumina by a meaningful margin.

\[Pause.\]

Now, what does an order of magnitude lower error rate actually buy you? This is the question that determines whether anyone cares.

For a routine application like a whole-genome sequence of a healthy person to detect a known disease variant, the difference between Q30 and Q40 is mostly invisible. The disease variant either is present or it isn't; downstream filtering and consensus calling from multiple reads at the same position will catch and correct errors at either quality level. For routine clinical genotyping, Q30 is plenty, and Q40 doesn't change the answer.

For a more demanding application — calling rare variants in a tumor sample, for example, where you might be looking for a mutation present in only one percent of the cells — the error rate of the sequencer starts to matter a lot. At Q30, you expect about one error per thousand bases. If you're trying to detect a variant present at one percent frequency, you have ten true variants per thousand bases of relevant position; the error rate is one tenth of the signal, which is uncomfortable but workable. At Q40, the error rate drops to one in ten thousand, which is one-hundredth of the signal. The signal-to-noise ratio just got ten times better. Variant callers that were marginal at Q30 are robust at Q40. False positives drop dramatically.

For the truly extreme application — circulating tumor DNA, where you might be looking for a tumor mutation present at 0.01% frequency in a blood sample — Q40 to Q50 is the difference between "this is possible" and "this is hopeless." At Q50, your sequencer error rate is one in a hundred thousand, which is finally below the variant frequencies you're trying to detect. You can pull out signal that's literally below the noise floor of an Illumina run. This is the application where Element's accuracy pitch matters most, and we'll come back to it in Segment 17.

\[Pause.\]

There's a subtle additional benefit to higher per-base quality, which is that you need less coverage to achieve a confident call. In sequencing, "coverage" means how many times you read the same position. If you have 30x coverage, you've read each base in the genome thirty times on average. Variant callers compare the reads at each position and take a consensus — if 28 out of 30 reads agree on A and 2 say T, you call A with high confidence. Higher per-base quality means you need fewer reads to reach the same confidence, because each individual read carries more information.

In practice, this means an Element run at 20x coverage may give you variant calls of comparable confidence to an Illumina run at 30x. Which means you can sequence more samples on the same instrument-run, or fewer instrument-runs for the same sample count. The accuracy advantage translates directly into throughput, in a way that's not obvious unless you've thought about how coverage and confidence trade off.

So Q40 to Q50 versus Q30 is not a small marketing tweak. It is a real, measurable, downstream-relevant improvement in data quality that opens up applications and changes economics. Whether it's worth switching platforms for, in any particular lab, depends on what that lab is doing — and we'll get into that in Segment 14 when we talk about adoption barriers. But the technical claim is sound.

Now let's talk about the other half of the pitch: the cost.

---

## SEGMENT 8 — Cost-per-Gb economics — Element's pitch vs Illumina's price list

Element's commercial pitch has two pillars. The first is accuracy, which we just covered. The second is cost. And cost in sequencing is measured in dollars per gigabase — that is, dollars per billion base pairs of output. A human genome at 30x coverage is about 90 gigabases of raw data. A whole-exome at 100x coverage is about 5 gigabases. RNA-sequencing for differential gene expression might be 0.5 to 2 gigabases per sample, depending on the depth you need. Whatever your application, you can convert it into a number of gigabases, and then convert it into a dollar cost by multiplying by your platform's cost-per-Gb.

Illumina's NovaSeq X, the high-throughput flagship, advertises around two dollars per gigabase at full utilization. That is the cheapest sequencing in the world, and it's why NovaSeq X is the workhorse of population-scale genomics projects. But to hit that price, you have to fill the flow cell — eighty billion reads per run — which means you need to batch samples up to a scale that most labs can't generate on their own.

Illumina's NextSeq 2000, the mid-throughput benchtop, is more like seven to ten dollars per gigabase. Their MiSeq, the small benchtop, is closer to a hundred dollars per gigabase — which is why MiSeq is used for small experiments and not for production.

Element's AVITI, with the original chemistry, advertised around six to eight dollars per gigabase at full utilization. With the Cloudbreak chemistry that shipped in 2024, the cost has come down further — Element is now advertising around four to five dollars per gigabase on the high-throughput kits, with the company having publicly guaranteed not to raise reagent prices for the lifetime of the instrument. That's a meaningful gesture — a price guarantee is rare in the instrument business — and it speaks to Element's strategy of competing on cost transparency as much as on cost level.

\[Pause.\]

So let's put those numbers side by side. At benchtop scale — meaning a small-to-mid lab, not a population-genomics center — Element's AVITI runs at roughly four to five dollars per gigabase. Illumina's NextSeq 2000, the comparable benchtop, runs at roughly seven to ten dollars per gigabase. That's a thirty-to-forty percent cost advantage for Element. And Element is offering the price guarantee on top of it.

Now, an honest comparison has to include a few caveats. First, instrument cost matters too. The AVITI lists at about two hundred and fifty thousand dollars; the NextSeq 2000 lists at about three hundred and thirty-five thousand. So Element is also cheaper on the box itself, though depreciation over the instrument's lifetime is a smaller line item than reagents over time, for any high-utilization lab.

Second, throughput matters. AVITI tops out at about a billion to two billion reads per run, which is roughly 200 to 600 gigabases depending on the read length. NovaSeq X tops out at 80 billion reads per run, or many terabases. At very high throughput, Illumina's per-Gb cost on NovaSeq X is unbeatable — Element can't compete with a refrigerator-sized instrument when you're running a Genome England-scale project. Element's pitch is explicitly at the benchtop and mid-throughput tier, not at the NovaSeq tier. They are not trying to displace NovaSeq X for population genomics; they are trying to displace NextSeq 2000 for everyday lab and clinical work.

Third, total cost of ownership includes things that don't show up in the per-Gb sticker price — library prep kits, support contracts, training, software, integration with existing workflows. Illumina has a vast ecosystem of all of these, built up over twenty years. Element is building theirs. For a brand-new lab buying their first sequencer today, the per-Gb cost is the headline number; for an established lab with twenty Illumina libraries already in production, switching to Element means redoing protocols, retraining staff, and validating clinical assays from scratch. The switching cost can dwarf the per-run savings for several years. We'll come back to this in Segment 14.

\[Pause.\]

Here's the analogy. **Element's cost pitch is like a new airline that prices tickets twenty percent below the incumbent, runs only out of mid-sized airports the incumbent has been quietly underserving, and offers a no-fare-increase guarantee for the next decade. The incumbent can still beat them on the New-York-to-LA megaroute by sheer scale. But on Phoenix-to-Sacramento at lunchtime on a Wednesday, the upstart is cheaper, the planes are newer, and the customer can plan their budget. Over time, that adds up.**

The cost economics of avidity sequencing trace back, ultimately, to the chemistry. The avidite is used at nanomolar concentrations instead of micromolar. The extension nucleotide is chemically simpler than Illumina's combined dye-plus-blocker nucleotide. Rolling-circle amplification — Element's clustering method — requires fewer cycles of expensive enzymes than Illumina's bridge amplification. Every layer of the cost stack benefits from the chemical decoupling. That's how a smaller company with a tenth of Illumina's R&D budget can ship reagents at a lower per-Gb price: the molecules are cheaper to make.

Now let me show you the instrument itself, because the AVITI is a real piece of hardware and you should know what it looks like before we go further.

---

## SEGMENT 9 — The AVITI instrument — flow cells, throughput, room footprint

The Element AVITI is a benchtop instrument. It's roughly the size of a desktop laser printer or a small refrigerator — about thirty-some inches wide, two feet deep, two and a half feet tall, weighing on the order of three hundred and fifty pounds. It sits on a lab bench. It plugs into a standard wall outlet and a standard Ethernet jack. It does not require special HVAC or a cleanroom; a normal molecular biology lab can install one with about a day of setup. In every physical dimension, it is comparable to Illumina's NextSeq 2000, which is the benchtop instrument it's designed to compete with directly.

The architectural feature that distinguishes the AVITI from Illumina's benchtops is the dual flow cell layout. The instrument has two independent flow cell slots, each one accepting a flow cell that runs its own sequencing experiment, with its own reagents, its own start time, its own read configuration. You can put two different experiments in the same instrument at the same time, one on each side, and they run completely separately. That is genuinely useful for a busy core lab — it doubles the scheduling flexibility, because you don't have to wait for one run to finish before you can start the next.

Each flow cell holds on the order of a billion reads per run, with paired-end reads of up to 300 bases on each end — so the total output per flow cell is up to about 600 gigabases at the longest read length. Two flow cells full-utilization means up to about 1.2 terabases per run across the whole instrument. A run takes between roughly 24 hours and 48 hours, depending on the read length you choose.

Inside each flow cell, the surface chemistry is patterned with what Element calls "individually addressable" features — meaning each polony sits in a predefined spot, rather than landing randomly the way Illumina's clusters do. This is patterned-flow-cell technology, similar to what Illumina pioneered with the NovaSeq, where the flow cell has a regular grid of nanowells and each well captures one starting molecule. Patterned flow cells produce much more uniform polony spacing and avoid the polony-overlap problem you get on un-patterned surfaces where two molecules occasionally land too close to each other and contaminate each other's signal.

\[Pause.\]

The read configurations available on the AVITI span a wide range. At the short end, you can run 2 by 75 — paired-end reads of 75 bases each, total 150 bases of data per fragment, which is enough for many transcriptomic and microbial applications. At the long end, 2 by 300 — paired-end reads of 300 bases each, total 600 bases per fragment, which is competitive with the longest Illumina read configurations. Most everyday applications run somewhere in the middle, at 2 by 150 or 2 by 250. The choice of read length affects the run time and the per-Gb cost — longer reads take longer and cost more per cycle, but produce more usable bases per fragment for applications like variant calling and assembly.

A NovaSeq X is meaningfully bigger — about the size of a large home appliance, with a price tag of about a million dollars. A MiSeq i100 — Illumina's newer smaller benchtop, launched in 2024 — is smaller than an AVITI, with a much lower throughput. So the AVITI sits squarely in the middle of the Illumina lineup in terms of size and throughput, designed explicitly to compete with the NextSeq 2000, which is Illumina's most popular benchtop and the workhorse of essentially every mid-sized genomics lab on the planet.

\[Pause.\]

Why does the form factor matter? Because of where the customer is. The big population-scale genomics centers — the Broad Institute, Genome England, the all-of-us program — they buy NovaSeq X, full stop. They have the throughput demands and the budget to use a million-dollar refrigerator at full utilization, and the per-Gb cost on a fully-utilized NovaSeq X is so low that nothing else competes. Element knows this and is not trying to play in that segment.

The segment Element is going after is the mid-sized lab. A clinical genomics core at a regional medical center. A pharmaceutical company's R&D sequencing facility. An agricultural genomics outfit. A microbial-genomics lab tracking foodborne outbreaks. A cancer hospital running tumor profiling. These are labs that need several billion reads per week, not several trillion, and that can't afford to dedicate a million-dollar instrument to one experiment at a time. For these labs, the NextSeq 2000 has been the default for the last five years. The AVITI is the first credible alternative — same throughput tier, lower cost per Gb, higher per-base accuracy, dual-flow-cell flexibility, and a vendor that isn't the dominant monopolist.

That positioning — go for the mid-market, leave the high end to Illumina, leave the entry-level to the old MiSeq tier — is strategically smart. It's the classic "attack from below" approach that disruption theory teaches. Win the middle, build cash flow, build the customer base, and then extend up over time as the chemistry matures.

Now let's pause here, because we've covered half the lecture and you've been concentrating hard. After the break we'll come back and look at library prep, the Cloudbreak chemistry, where Element fits in actual lab workflows, the head-to-head comparison with Illumina's lineup, the adoption barriers, Element's commercial trajectory, the patent landscape, the applications where avidity really shines, and where the field is going. Let's take fifteen minutes.

\[BREAK\]

---

## SEGMENT 10 — Library prep: Element-specific kits and Illumina-library compatibility

Welcome back. Let's pick up with library prep, because everything we've talked about so far has assumed that you have a properly prepared library ready to load onto an AVITI flow cell, and now we need to talk about how you get one.

Library prep for the AVITI follows the same general logic as library prep for Illumina, with a few important differences. The general logic, which we covered in detail in the Illumina lecture, is: take your starting DNA, fragment it, repair the ends, ligate adapter sequences onto both ends of each fragment, and add sample-specific index barcodes. The output is a tube full of DNA fragments, each with synthetic adapters on the ends that the sequencing instrument can recognize.

For Element, those adapter sequences are different from Illumina's. The adapters carry the binding chemistry that Element's flow cell surface recognizes, and they carry primer-binding sites that match the avidity-sequencing primer chemistry rather than Illumina's. So an AVITI library, made from scratch with Element's kits, is not identical to an Illumina library — the synthetic ends are different.

This raises an obvious customer-experience problem. Most labs have years of investment in Illumina library prep. They have validated protocols, established cost structures, trained staff, automated liquid handlers configured for Illumina kit volumes. Asking a lab to throw out all of that and adopt Element-native kits is a major switching cost. Element knew this from the start, and they did something clever: they designed the AVITI to be compatible with Illumina-style libraries, with a small workflow adapter step in between.

\[Pause.\]

The compatibility solution comes in two flavors. The first is a workflow Element calls **Elevate**, where an Illumina library is enzymatically converted into an Element-compatible library through a single additional reaction step. You take your already-prepared Illumina library, run it through the Elevate kit, and you get a library that loads onto the AVITI flow cell as if it had been made native. This adds a small amount of time and reagent cost to each library, but it preserves the lab's existing Illumina library prep infrastructure.

The second flavor is called **Adept**, which is an alternative compatibility solution for different starting library types. And then there's **Cloudbreak Freestyle**, the newer chemistry that ships with adapter-flexible kits, allowing direct loading of linear libraries without conversion. The technical details vary but the strategic principle is consistent: do not force the customer to rebuild their library prep workflow from scratch in order to evaluate or adopt the AVITI. Make the switch as low-friction as possible.

This is, I want to point out, a very different approach from what most challenger sequencing platforms have historically taken. Pacific Biosciences requires a completely different library prep — long fragments, specific adapter chemistry, no Illumina compatibility. Oxford Nanopore requires its own library prep too. Each of those platforms made customers do a full redesign to adopt. Element deliberately chose to be backwards-compatible with the dominant standard, recognizing that the friction of redoing library prep is one of the largest reasons customers don't try competing platforms. The Elevate workflow is a deliberate strategic concession to the customer-inertia problem, and it appears to have been effective in getting labs to evaluate AVITI alongside their existing Illumina runs.

\[Pause.\]

For labs that want to build native Element libraries from scratch, the AVITI ecosystem offers a growing portfolio of kits. There are kits for whole-genome sequencing, exome sequencing, RNA-sequencing, single-cell sequencing, methylation sequencing, low-input clinical samples — basically the standard menu that Illumina also offers. These native Element kits typically outperform the Elevate-converted libraries on metrics like duplicate rate and adapter contamination, because they're designed specifically for the AVITI chemistry. So over time, as labs commit more to the platform, the natural path is to move from Illumina-libraries-via-Elevate toward Element-native libraries.

A subtle but important point: because Element uses rolling-circle amplification on the flow cell rather than PCR-based bridge amplification, libraries that go through the AVITI are subject to less amplification bias than equivalent libraries on Illumina. PCR amplification can over- or under-represent fragments with certain GC contents or secondary structures; rolling-circle amplification, which uses a different enzymatic mechanism, tends to be more uniform. This shows up in published data as more even coverage across the genome, especially in GC-extreme regions where Illumina sometimes drops out. For applications that demand even coverage — clinical exome sequencing where you need to confidently call variants in every exon, for example — this is a real benefit.

The index hopping problem is also reduced on Element. Index hopping is a failure mode where, during pooled multiplexed sequencing, the sample-identifying indices from different libraries accidentally swap places, causing reads to be assigned to the wrong sample. On Illumina, particularly on the patterned-flow-cell instruments, index hopping rates can be a fraction of a percent — typically not a problem, but in extreme cases enough to confuse rare-variant calls in low-abundance samples. Element's chemistry, because of the rolling-circle amplification approach and the avidity binding step, has substantially lower index-hopping rates. For multiplexed clinical assays where contamination between samples is a regulatory issue, this matters.

Now let's talk about Cloudbreak, the next-generation chemistry that landed in 2024 and represents Element's first major chemistry upgrade after the original AVITI launch.

---

## SEGMENT 11 — Cloudbreak — the 2024 next-gen chemistry

The original AVITI launched in 2022 with what we now call the first-generation avidity-sequencing chemistry. It worked, it delivered the accuracy and cost numbers we discussed, and it got Element into customer labs. But it was a starting point, not an end state. Like every sequencing platform, the chemistry was always going to evolve. The first major evolution arrived in 2024 with a chemistry release that Element calls **Cloudbreak**.

Cloudbreak is, depending on how you count, the second or third generation of avidity sequencing reagents. It is not a fundamentally new architecture — the polony, the avidite, the two-step cycle are all the same — but it is a substantial upgrade in the engineering of every component. New polymer scaffolds for the avidites that improve the binding kinetics and the signal-to-noise ratio. Refined extension nucleotides that incorporate faster and more cleanly. Improved primers and surface chemistry on the flow cell that produce denser polonies with cleaner separation. New imaging algorithms that extract more information from each photograph. The aggregate effect is better accuracy, longer reads, lower cost per Gb, and shorter run times.

\[Pause.\]

Cloudbreak comes in two main variants, and the difference between them matters for the customer decision.

The first variant is called **Cloudbreak Freestyle**. This is the everyday chemistry — the workhorse version, designed for the broad range of applications most labs run. Freestyle delivers reads that routinely exceed Q40 across the run, with the same kind of flow-cell flexibility the AVITI has always offered. The "Freestyle" name refers to the workflow flexibility — you can load Element-native libraries, Illumina-converted libraries, or various other library types directly onto the same chemistry, without needing different consumables for different library formats. It's the version Element wants most customers to use for most applications.

The second variant is called **Cloudbreak UltraQ**. This is the high-accuracy chemistry, designed for applications where every base needs to be right. UltraQ delivers ≥70% of bases at Q50 or higher, and ≥90% of bases at Q40 or higher. To put that in concrete terms: Q50 is one error per hundred thousand bases. Across an entire run, the vast majority of the data comes back at that quality level. UltraQ is the chemistry you reach for when you're doing ultra-low-variant-frequency cancer detection, when you're doing high-fidelity germline variant calling in clinically actionable genes, when you're building reference genomes that other labs will use as gold standards. UltraQ costs more per Gb than Freestyle, and it produces less raw throughput per run, because the chemistry runs slower in exchange for higher fidelity. The trade is real.

\[Pause.\]

Here's the analogy. **Cloudbreak Freestyle is the everyday family car — reliable, comfortable, good gas mileage, perfectly capable of getting you anywhere you need to go. Cloudbreak UltraQ is the precision-engineered sports car — slower around town, more expensive to fuel, but capable of performance at the edge that the family car can't match. You buy the family car for daily life and the sports car for the specific occasions when the precision matters. Most labs need both. Element ships both on the same instrument.**

The fact that both chemistries run on the same AVITI hardware is an important commercial detail. A lab doesn't have to buy a different instrument to switch between Freestyle and UltraQ — they just buy a different reagent kit, load it onto the same flow cells, and run with the appropriate software configuration. This kind of consumable-only differentiation is the right way to handle high-end versus everyday chemistries, because it lets the same lab serve both routine and high-precision applications without buying two instruments.

There is, beyond Cloudbreak, a system Element has shown at industry conferences called **AVITI24** — a successor instrument that adds onboard cell-profiling and multi-omics capabilities, allowing the same instrument to do both sequencing and certain protein-level assays on intact cells. AVITI24 is at the early commercial stage as of this lecture. It is a strategic bet that the future of biology is multi-omics — that customers will want to measure DNA, RNA, and protein from the same sample on the same instrument, rather than running three separate workflows on three separate platforms. Whether that bet pays off depends on whether the integrated workflow is meaningfully better than the alternative of running three best-in-class single-modality instruments. We'll come back to AVITI24 in the final segment.

For now, just note that the chemistry roadmap is active. Element is shipping a new chemistry every year or two, each one materially better than the previous. The pace is comparable to what Illumina did in their own first decade after the Solexa acquisition. A young company with a focused team can iterate fast.

---

## SEGMENT 12 — Where Element fits in a lab workflow — clinical NGS, low-frequency variants

Let me put the AVITI into the context of a real lab workflow, because so far we've talked about the chemistry and the instrument in isolation. The interesting question is: where in an actual sequencing pipeline does an AVITI sit, and what does using one feel like to the working scientist?

The standard sequencing pipeline, at a high level, has five stages. Sample collection. Nucleic acid extraction. Library preparation. Sequencing. Bioinformatics analysis. The AVITI plugs in at stage four. Stages one through three are completely independent of which sequencer you use — a blood draw is a blood draw, a DNA extraction is a DNA extraction, and library prep, as we just discussed, can be either Element-native or Illumina-style-with-Elevate-conversion. Stage five — bioinformatics — is mostly platform-agnostic too. The data that comes off an AVITI is in standard FASTQ format, just like Illumina data, and the standard tools for alignment, variant calling, expression quantification, and so on all work on AVITI data with minor tweaks.

So inserting an AVITI into an existing lab is mostly an operational change at stage four. You buy the instrument, you train your staff on the run setup software, you allocate bench space, and you start running experiments. The pipeline before and after is largely unchanged.

\[Pause.\]

The applications where Element's chemistry produces the biggest measurable advantage are the ones where data quality is rate-limiting. Let me walk through a few examples.

**Clinical whole-exome sequencing for diagnostic purposes.** When a patient comes in with a suspected rare genetic disease, the diagnostic workflow often calls for exome sequencing — reading just the protein-coding parts of the genome, which is about 1% of the total but where most disease-causing variants live. The clinical lab needs to confidently call variants at every exon, including ones with difficult sequence context — high GC content, repeats, low-complexity regions. Illumina exome data is good enough for most calls, but there are persistent dropouts in certain hard regions that lead to false negatives or low-confidence calls. AVITI exome data, because of the more uniform amplification and the higher per-base accuracy, has fewer dropouts and higher confidence in those hard regions. For clinical labs reporting diagnostic results, every additional confident call is one more diagnosis delivered to a patient. That matters.

**Circulating tumor DNA detection.** A patient who's been treated for cancer comes back for a follow-up blood draw. You want to know whether there are any residual tumor cells anywhere in their body, which you can detect by sequencing their plasma for tumor-specific DNA fragments. The challenge is that the tumor DNA, if it's there at all, is present at vanishingly low frequency — perhaps one molecule in ten thousand, or one in a hundred thousand. To detect it, your sequencer error rate has to be lower than the variant frequency you're looking for. Illumina at Q30 produces one error per thousand bases — way above the signal level. You can partially compensate with deep coverage and consensus calling, but the noise floor is real. Element at Q50 produces one error per hundred thousand — at or below the signal level for some of these very low-frequency variants. For ctDNA monitoring, where missing a true positive can mean a missed cancer recurrence, the accuracy difference can be clinically meaningful.

**Rare-variant detection in tumor heterogeneity studies.** A solid tumor isn't a clonal population — it's a mix of subclones, each carrying some shared mutations and some private ones. Mapping the full subclonal structure of a tumor requires detecting variants present at very low frequencies. Same logic as ctDNA: lower error rate means lower detection threshold, means more biology you can resolve.

**Microbiome and metagenomics.** When you sequence a complex community of microbes — gut, soil, ocean — you have to distinguish closely related strains, sometimes differing by only a handful of bases across thousands. Sequencer errors confuse strain-level resolution. Higher per-base accuracy means cleaner strain-level calls, which means better community characterization.

\[Pause.\]

In all of these applications, the question to ask is: is sequencer error rate the limiting factor in what I'm trying to measure? If yes, Element's chemistry potentially helps. If no — if you're doing routine genotyping where Q30 is plenty, or differential gene expression where you're averaging across thousands of reads per gene anyway — then the accuracy advantage doesn't really move the needle, and the choice between platforms comes down to cost, throughput, and convenience.

For most labs, the honest answer is mixed. Some of their applications benefit a lot from Element's accuracy; others don't. Which is why the most common adoption pattern, in labs that have brought AVITI on board, is to use it alongside an existing Illumina instrument — running the high-accuracy-sensitive applications on AVITI and the routine high-throughput applications on Illumina. The two instruments complement each other rather than directly substituting. Over time, as Element extends its throughput up and its cost down, the substitution dynamic may shift. For now, in most labs, AVITI is the second instrument, not the only one.

That's a key strategic point for Element. Their growth is currently driven less by labs ripping out Illumina and replacing it, and more by labs adding an Element instrument to their existing setup. Adoption-by-addition rather than adoption-by-substitution. Easier to sell, lower switching cost for the customer, but slower to build market share. Element seems comfortable with this — get the foot in the door first, let the customer fall in love with the accuracy and the cost, and let the substitution dynamic build naturally over many years.

---

## SEGMENT 13 — Comparison with NovaSeq X, NextSeq 2000, MiSeq i100

Let me lay the Illumina lineup next to the Element lineup, segment by segment, because if you're going to talk intelligently about platform choice you need to know where each instrument sits.

At the top of the Illumina range is the **NovaSeq X**. This is a refrigerator-sized instrument, priced at roughly a million dollars, that produces something like 80 billion reads per run — call it eight terabases of data over a couple of days. The cost per Gb at full utilization is around two dollars. This is the workhorse of population-genomics centers and large clinical-sequencing operations. Element does not directly compete in this tier. The AVITI tops out at maybe 1.2 terabases per run across both flow cells; the NovaSeq X is six or seven times higher in raw throughput, and the per-Gb cost gap at full utilization favors Illumina by maybe a factor of two. Anyone whose business is to sequence ten thousand human genomes a year buys NovaSeq X. Period.

In the middle is the **NextSeq 2000**. Priced around three hundred and thirty thousand dollars, with run throughputs of roughly 360 gigabases to 1.2 terabases depending on the configuration, the NextSeq 2000 has been Illumina's mid-market champion since 2020. This is the instrument the AVITI is directly competing with, and head-to-head, the AVITI is roughly comparable on throughput, cheaper on per-Gb reagent cost by roughly thirty percent, higher on per-base accuracy by roughly an order of magnitude in Q-score, and similar on form factor. The customer choice between AVITI and NextSeq 2000 is genuinely close, and it's where most of Element's commercial growth is happening.

At the bottom is the **MiSeq i100**, Illumina's small benchtop launched in 2024, replacing the long-running MiSeq line. The i100 is priced around forty-five thousand dollars, much smaller than either NextSeq or AVITI, and produces a few hundred million reads per run. It's an instrument for small experiments, training labs, and applications where throughput needs are modest. Element does not have a direct competitor in this tier; the AVITI is overkill for MiSeq-class applications, and a lab that only needs a hundred million reads a month will probably stick with the i100.

\[Pause.\]

So the competitive map is: Element loses at the top, wins or ties in the middle, and doesn't play at the bottom. That's a specific competitive posture, and it tells you where the company's commercial focus is going to be for the next several years. They are going to push hard in the mid-market, where they have a real chemistry advantage and a cost advantage and a price-guarantee story, and they are going to mostly leave the high and low ends alone until their roadmap catches up.

There's a secondary competitive question, which is the long-read tier. PacBio and Oxford Nanopore make long-read sequencers — instruments that read tens of thousands of bases per read, rather than Illumina's and Element's few hundred. Long reads solve different problems — genome assembly, structural variation, full-length transcript sequencing — and don't really substitute for short reads. Element's avidity sequencing is a short-read technology. It competes with Illumina, not with PacBio or Nanopore. The long-read platforms are complementary, not competitive.

---

## SEGMENT 14 — Adoption barriers — customer inertia, software ecosystem, support network

A technically superior platform does not automatically displace an incumbent. The history of technology is full of better mousetraps that lost to inferior ones because the better mousetrap couldn't overcome the network effects, switching costs, and ecosystem advantages of the entrenched product. Element's situation is exactly this kind of story, and you should understand the adoption barriers honestly, because they are the main reason a company with a better chemistry has only single-digit market share.

The first barrier is **customer inertia**. Most genomics labs have been buying Illumina for fifteen years. The protocols are written for Illumina. The pipelines are validated for Illumina. The publications cite Illumina data. The staff is trained on Illumina. Even labs that would like to try Element have to set aside time and money to bring a new instrument in, validate it against their existing workflows, get their clinical assays re-certified if they're regulated, and rebuild quality-control benchmarks. None of this is conceptually hard. All of it takes person-weeks or person-months that the lab usually doesn't have to spare. The default decision, in any given budget cycle, is to keep buying what they already buy. Inertia wins until something forces a change.

The second barrier is the **software and informatics ecosystem**. Illumina data formats are the de facto standard for short-read sequencing. Every aligner, every variant caller, every visualization tool, every cloud-based analysis pipeline was developed against Illumina data first, and only later adapted for other platforms. Element data is in FASTQ format, so most tools work — but there are subtle differences in quality score distributions, in error models, in adapter sequences, in the structure of paired-end data that can trip up tools that have implicit assumptions baked in. Element has worked hard to make their data look as Illumina-like as possible, and most modern tools have been updated to handle AVITI data correctly. But the ecosystem is still tilted toward Illumina, and there are corner cases where Element users have to do extra work to get their data through tools that were never explicitly tested on it.

The third barrier is the **support and service network**. Illumina has field-service engineers in essentially every major city in the world. When a NovaSeq goes down, an Illumina tech is usually on-site within twenty-four hours. Element is a much smaller company. Their service network exists, and customer reports suggest it's pretty good, but it doesn't yet have the breadth or the depth of Illumina's. For a clinical lab that cannot afford instrument downtime — because clinical samples have turnaround-time commitments to patients — the support network is a real consideration, and the conservative choice is the vendor with more techs in more places.

\[Pause.\]

The fourth barrier, which is more subtle, is the **regulatory and validation history**. Many clinical assays are FDA-cleared specifically on a particular sequencer. Switching the sequencer requires re-validation, sometimes re-clearance. Pharmaceutical companies running clinical-trial sequencing have historical data on Illumina platforms; switching introduces a data-comparability question that has to be addressed. None of these barriers is insurmountable, but each one adds friction and cost to switching, and the friction adds up.

The fifth barrier is sometimes called the **publication network effect**. When a lab publishes a paper, they want their methods to be replicable by other labs. If they used an Illumina instrument, every other lab can reproduce the work without buying a new platform. If they used an AVITI, replication requires that the other lab also have an AVITI, which most don't. This creates a small but real disincentive for labs to be the first AVITI publishers in any particular subfield. Over time, as more AVITIs ship, this disincentive fades, but it's a real factor in early adoption.

Element has addressed each of these barriers strategically. The Elevate workflow addresses the library-prep switching cost. The price guarantee addresses budget-cycle uncertainty. The expanding kit catalog and software ecosystem address the workflow lock-in. The growing field-service team addresses the support gap. None of these strategies make the barriers disappear, but each one lowers the activation energy for a lab to try an AVITI. The cumulative effect is that adoption is happening — slowly, lab by lab, but with a clear upward trajectory.

The right frame to hold here is that displacing an entrenched monopoly is a decade-long process even with a clearly better product. Element is in year three or four of that process. The trajectory looks good. The endpoint is uncertain.

---

## SEGMENT 15 — Element's commercial trajectory — IPO, key partnerships, customer wins

Let me give you the commercial story so far, because the financial trajectory tells you something about how the market is responding to the product.

Element raised about thirty million dollars in seed and Series A funding in 2017 and 2018, just enough to get the founding team through the initial chemistry-development phase. In 2020 they closed a Series B of about eighty million dollars, which funded the build-out of the AVITI prototype and the initial pilot manufacturing. In 2021 they raised a Series C of about two hundred and sixty million dollars, which paid for the commercial launch of the AVITI and the first customer shipments in 2022. In mid-2024 they closed a Series D of two hundred and seventy-seven million dollars, valuing the company at around a billion dollars, with participation from Wellington Management, Samsung Electronics, Fidelity, T. Rowe Price, Foresite Capital, and Venrock. Cumulative funding through Series D is over six hundred and eighty million dollars.

The investor list matters because it tells you something about who is betting on Element. Wellington, Fidelity, and T. Rowe Price are crossover investors — public-equity firms that invest in late-stage private companies as a setup for an eventual IPO. Their participation in a Series D is widely read as a sign that an IPO is being prepared, probably in the next twelve to twenty-four months from this lecture. Samsung's participation is interesting because Samsung is also a major manufacturer of optical and imaging components, and there's likely a strategic dimension to the relationship beyond pure financial investment.

\[Pause.\]

Customer wins, as of the last twelve to eighteen months, include major academic core facilities — UC Davis, the University of Arizona genomics core, Cold Spring Harbor, the Wellcome Sanger Institute on a pilot basis, several large clinical-genomics operations. Some Chinese genomics centers have purchased AVITIs as well, partly as a hedge against geopolitical risk in their Illumina supply chains. The customer base is now in the hundreds of installed instruments globally, a number that is growing at something like fifty to a hundred percent per year, off a small base.

The IPO question is the dominant strategic conversation around Element as I record this lecture. The company has crossed the revenue threshold where an IPO would be plausible — they're rumored to be running at perhaps eighty to a hundred and twenty million dollars in annual revenue, with strong growth rates. The market environment for life-sciences tools IPOs has been mixed, with several promising companies pulling planned IPOs in 2024 and 2025 due to public-market volatility. Element's situation suggests they'll go public when the window opens, probably in 2026, possibly later.

For us, sitting in this lecture, the financial trajectory matters because it determines whether Element has the staying power to actually become a true second-source in short-read sequencing. A well-capitalized, profitable, growing company can sustain the multi-year customer-acquisition campaign required to displace an incumbent. An undercapitalized one runs out of money before it gets there. Element looks, at the moment, like the well-capitalized version. Whether they execute is the next question.

---

## SEGMENT 16 — The patent landscape — what Element had to design around

A serious challenger in any technology field has to navigate the incumbent's patent portfolio. In sequencing, the relevant patents are mostly Illumina's, and they cover essentially every aspect of the SBS chemistry — reversible terminator design, fluorescent dyes, polymerase variants, bridge amplification, flow cell surface chemistry, cluster generation, base-calling algorithms. The patents stack on top of each other, with continuations and modifications extending the protection for individual elements out over twenty years and beyond.

The core Solexa reversible-terminator patents — the ones filed in the late 1990s by Balasubramanian and Klenerman — began to expire in the late 2010s. This was the patent cliff that Element's founders saw coming when they started the company in 2017. By the time AVITI launched in 2022, the foundational SBS patents had largely lapsed, opening the space for a new entrant to operate in chemistry adjacent to Illumina's without infringing.

But "adjacent" is doing real work. Element couldn't simply copy Illumina's chemistry. They had to design around the patents that remained, including continuations on specific dye structures, blocker chemistries, cleavage reagents, and flow-cell surface chemistries that were filed in the 2000s and 2010s. The avidity-sequencing architecture, with its multivalent polymers and decoupled binding-from-incorporation scheme, was partly motivated by the desire to be unambiguously outside Illumina's patent estate — to be a genuinely different chemistry, not a derivative.

\[Pause.\]

This is, incidentally, one of the strongest arguments for why Element's chemistry is genuinely novel rather than incremental. They could have built a "me-too" SBS platform using the now-expired core Solexa patents, and saved themselves years of chemistry development. They chose not to, in part because the design-around constraints pushed them toward something fundamentally different, and in part because the founders believed the fundamentally-different chemistry would be technically better. Both turned out to be right.

There have been no major patent-litigation events between Element and Illumina to date. This is unusual; Illumina has historically been aggressive in defending its IP, and they have sued or threatened other sequencing companies — most notably the BGI subsidiary Complete Genomics, with a years-long series of patent disputes that constrained BGI's US market entry significantly. The lack of major Element-Illumina litigation suggests either that Element's chemistry is sufficiently distinct that Illumina hasn't found a viable infringement claim, or that Illumina is choosing to compete on the product rather than on the courtroom. Probably both.

Element holds its own growing patent portfolio around avidity sequencing — the avidite polymer structures, the dual-step cycle, the specific extension and cleavage chemistries, the rolling-circle amplification protocols, the flow-cell surface designs. This portfolio is what protects Element's own moat once the chemistry is established. The defensive value of those patents will increase as the avidity-sequencing market grows and other potential entrants look at the space.

---

## SEGMENT 17 — Applications where avidity matters — circulating tumor DNA, ultra-low VAF

Let me come back, for a full segment, to the application where the avidity-sequencing accuracy story matters most: detecting rare variants at vanishingly low allele frequency. This is the use case that, more than any other, justifies the Q40-to-Q50 chemistry, and it's the use case where Element's commercial pitch is most compelling.

The clinical context is something called **minimal residual disease**, abbreviated MRD. A patient is treated for cancer — chemotherapy, surgery, radiation. The treatment appears to be successful; imaging is clean, the patient is in remission. But cancer is sneaky. A small number of tumor cells can survive, hiding somewhere in the body, below the resolution of imaging. If those residual cells are detected early — months or years before they grow into a clinically visible recurrence — the patient can be re-treated with curative intent. If they're missed, the recurrence is detected late, when it's much harder to treat.

The way you detect MRD is by sequencing the patient's plasma for circulating tumor DNA — small fragments of DNA shed by tumor cells into the bloodstream. If you know what mutations the original tumor carried — from a sequencing of the surgical specimen — you can design a personalized assay that looks specifically for those mutations in the plasma. Find any of them, and you've detected residual disease.

\[Pause.\]

The problem is that the residual tumor DNA, if it's there at all, is present at vanishingly low frequency in the plasma. We're talking variant allele frequencies of 0.01% or lower — one mutant molecule per ten thousand normal ones. To detect a variant at 0.01% you need a sequencer that produces error rates below 0.01%. That is Q40 territory at minimum, Q50 is much better.

At Illumina Q30 accuracy, you have a roughly 0.1% error rate per base. If you're looking for a variant at 0.01% frequency, your noise floor is ten times higher than your signal. Every position in the genome has, on average, a few false-positive "variants" purely from sequencer error. You can partially mitigate this with deep coverage and statistical filtering — by demanding that a variant appear in multiple independent reads, and by modeling the error distribution to subtract out systematic biases — but you're fighting the noise floor every step of the way.

At Element Q50 accuracy, the error rate per base is 0.001%. Now you're a hundred times below the variant frequency you're trying to detect. Variants at 0.01% pop out of the noise cleanly. Variants at 0.001% — one tumor molecule per hundred thousand normal — become detectable. The sensitivity of the entire assay drops by an order of magnitude, which translates directly into earlier MRD detection, earlier intervention, and — in clinical studies — better patient outcomes.

\[Pause.\]

This is a real clinical story, not a marketing one. There are commercial MRD assays running on AVITI instruments today, and clinical evidence accumulating that ctDNA-based MRD monitoring at the sensitivity afforded by avidity sequencing changes which patients get re-treated and when. The market for MRD testing is, by some estimates, a multi-billion-dollar opportunity over the next decade, and Element's chemistry is well-positioned to capture a significant share of the sequencing-platform component of that market.

Related applications include early cancer detection — looking for tumor signals in the blood of asymptomatic patients before any tumor is clinically visible — which requires the same ultra-low-VAF detection capabilities, and is one of the most exciting frontiers in oncology. Multi-cancer early detection assays, such as the ones Grail and similar companies are developing, depend on sequencer accuracy at the extremes. If Element can get to Q60-class accuracy in future chemistry generations, the addressable applications expand further.

There are also non-cancer applications. Organ transplant rejection can be monitored by sequencing the recipient's plasma for donor-derived DNA fragments — same low-frequency-detection problem, same benefit from high-accuracy sequencing. Fetal aneuploidy detection from maternal plasma is another. Any application that's looking for a needle in a sequencing haystack benefits from a haystack with fewer needles in it by mistake.

These are the applications where the chemistry pays off most clearly. If your work is in any of these spaces, the choice of platform genuinely matters, and Element has a real technical edge.

---

## SEGMENT 18 — The future — Cloudbreak and beyond, what's next for low-cost short-reads

Let me close by zooming out. Element is one company, AVITI is one instrument, avidity sequencing is one chemistry. The broader question this lecture is really about is: what happens to short-read sequencing over the next decade, now that there's a credible second supplier?

The answer, I think, is that we are at the beginning of a competitive era in short-read sequencing that mirrors what happened in long-read sequencing a few years ago when PacBio and Oxford Nanopore began to seriously compete with each other. Competition will drive the per-Gb cost down faster than the monopoly era did. It will drive accuracy and read length up. It will push the form factors toward smaller, cheaper, more portable. It will expand the range of applications where sequencing is economically viable.

Specifically, here's what I'd watch for over the next five years.

**Continued chemistry iteration on both sides.** Element will release more Cloudbreak versions, pushing Q-scores higher and per-Gb costs lower. Illumina will respond with their own chemistry upgrades — the post-NovaSeq-X chemistries are already in development. The pace of incremental chemistry improvement on both platforms will be much faster than it was during the monopoly years.

**A real fight over the mid-market.** This is where Element and Illumina will collide most directly, with the AVITI versus the NextSeq 2000 and whatever Illumina ships to replace it. Pricing will drop. Feature sets will expand. Customers will get to play the two vendors against each other in a way they couldn't five years ago.

**Element's IPO and continued capital raises.** The financial side of the company matters because sustained competition requires sustained capital. An Element IPO would give the company the war chest to push hard into international markets and into the high-throughput tier.

**AVITI24 and the multi-omics bet.** Whether Element can extend their instrument platform from pure sequencing into integrated multi-omics — DNA, RNA, and protein on the same box — will determine whether they're a sequencing company or a broader life-science tools company over the long run. The integrated multi-omics thesis is unproven; whether customers want one box that does many things, or many best-in-class boxes that each do one thing, is an open question.

\[Pause.\]

**Continued progress in the patent expiry cliff.** More Illumina patents will lapse over the next five years, opening the door for additional entrants. Whether anyone else successfully threads the technical and capital needle that Element threaded is uncertain, but the IP space is opening, not closing.

**Pressure on the high end from new architectures.** Quantum sequencing, nanopore-array short-read systems, and other exotic approaches are all in various stages of development. Most of them will fail. Some might not. The future of short-read sequencing in 2035 may not be a chemistry we've talked about today.

\[Pause.\]

The takeaway is this. For twenty years, "next-generation sequencing" meant Illumina. The platform was so dominant that the technology and the company became synonymous in the working scientist's mind. That era is ending. There is now a second viable supplier with a genuinely different chemistry, and the structural conditions exist for a real competitive market to develop. Whether Element grows into a co-leader or remains a niche second-source, the very existence of the competition changes the dynamics of the field. Prices will fall faster. Innovation will move faster. The applications that sequencing enables will broaden.

For you, as a working scientist or future working scientist, the practical implications are: pay attention to what platform your data is coming from. The error model differs. The cost model differs. The application fit differs. Five years from now, the standard advice to "just run it on Illumina" will be quaint. You'll have to think about which platform is right for which question, and that's a more interesting and a more demanding intellectual exercise than the monopoly era required.

Element is the first company to make that thinking necessary. They probably won't be the last.

That's the lecture. Thank you for your attention.

\[Pause.\]

---

## APPENDIX

A few additional notes and references that don't fit cleanly into the spoken script but are useful for follow-up reading and for the more technically curious.

**Key technical paper.** The original peer-reviewed description of avidity sequencing is Arslan et al., "Sequencing by avidity enables high accuracy with low reagent consumption," _Nature Biotechnology_ 42, 132–138 (2024). The paper is the canonical reference for the avidite chemistry, the polony architecture, and the original accuracy and throughput benchmarks. All of the authors are or were Element employees, so the data should be read with the usual caution that goes with vendor-published benchmarks — but the broad strokes have been independently confirmed by academic core facilities that have published their own AVITI vs Illumina comparisons.

**Independent benchmarks.** UC Davis DNA Technologies Core, the University of Arizona Genomics Core, and the University of Minnesota Genomics Center have all published comparisons of AVITI versus Illumina data on the same or matched samples. The consistent finding is that AVITI produces somewhat lower error rates than NextSeq 2000 on most metrics, with more uniform coverage in GC-extreme regions and lower index-hopping rates. The magnitude of the accuracy advantage varies with the specific chemistry and application.

**Key vocabulary.**
- **Avidite**: Element's multivalent polymer carrying multiple labeled nucleotides of the same base. The reading molecule in avidity sequencing.
- **Polony**: A clonal cluster of identical DNA copies on the flow cell, produced by rolling-circle amplification rather than bridge amplification. The Element equivalent of an Illumina cluster.
- **ABC**: Avidite Base Chemistry. Element's marketing term for the overall chemistry stack.
- **Cloudbreak**: The 2024 generation of avidity-sequencing reagents. Comes in Freestyle (workhorse) and UltraQ (high-accuracy) variants.
- **Elevate, Adept**: Element's library-conversion workflows that let labs use Illumina-prepared libraries on AVITI instruments without re-doing library prep.
- **Q-score**: Logarithmic quality score for base calls. Q30 means 1 error per 1,000; Q40 means 1 per 10,000; Q50 means 1 per 100,000.
- **MRD**: Minimal Residual Disease. The clinical application most often cited as benefiting from avidity sequencing's accuracy.

**Founders.**
- **Molly He**, CEO. PhD in structural biology. ~7 years at Illumina in chemistry R&D leadership; ~2 years at PacBio before that.
- **Michael Previte**, CTO. PhD in physical chemistry. ~6 years at Illumina as Associate Principal Scientist on sequencing platforms; prior experience at Life Technologies on single-molecule sequencing.
- **Matthew Kellinger**, VP of Biochemistry. PhD in biochemistry. ~5 years at Illumina on enzyme chemistry for SBS.

**Funding history (approximate, cumulative).**
- Seed/Series A (2017–2018): ~$30M
- Series B (2020): ~$80M
- Series C (2021): ~$260M
- Series D (2024): $277M (Wellington, Samsung, Fidelity, T. Rowe Price, Foresite, Venrock)
- Cumulative through 2024: ~$680M+
- Valuation post-Series D: ~$1B+
- IPO: anticipated but not yet filed as of this lecture

**Instrument quick-reference.**
- AVITI: benchtop, two flow cells, dual independently-addressable lanes, ~1B reads per flow cell, up to 2x300 paired-end, list price ~$249–289K, reagent cost ~$4–8/Gb depending on chemistry.
- AVITI24: successor instrument with onboard multi-omics capabilities (sequencing plus cell profiling). Early commercial stage.

**Suggested further reading.**
- The Element Biosciences website (elementbiosciences.com) for current product specifications, application notes, and chemistry white papers.
- GenomeWeb's ongoing coverage of the short-read sequencing market for industry context.
- The original Solexa/Illumina papers (Bentley et al., Nature 2008) as a contrast point — same fundamental problem, very different chemical solution.
- For the broader competitive landscape: the PacBio, Oxford Nanopore, and 454 Pyrosequencing lectures in this series put avidity sequencing into the full historical context of next-generation sequencing.

End of script.


