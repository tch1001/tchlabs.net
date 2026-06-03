# Targeted Protein Degradation: PROTACs, Molecular Glues, and the Tag-and-Destroy Revolution

**A 2-hour undergraduate biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, landing comfortably inside a two-hour slot. (Read faster, ~140 wpm, and you'll have generous room for questions.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — A new verb for pharmacology

Alright, settle in. For the next two hours we're going to talk about one of the most genuinely strange and exciting ideas to land in pharmacology in the last twenty years. It's an idea that, when you first hear it, sounds almost like a magic trick. And then, when you understand the mechanism, it sounds like the kind of thing that should have been obvious all along, and you can't quite believe nobody did it sooner.

Here's the idea, in one sentence. Instead of building a drug that sticks to a bad protein and holds its mouth shut, build a drug that grabs the bad protein by the collar and drags it over to the cell's garbage disposal, where the protein gets shredded into amino acids. Don't inhibit it. Destroy it. Tag and destroy.

That class of drugs is called, technically, a PROTAC — PROteolysis TArgeting Chimera, an acronym so awkward that everyone just says "protack." And the broader field is called targeted protein degradation, or TPD. By the end of this lecture you'll know what a PROTAC is, why it's different from every drug you've ever heard of, why the field has gone from a quirky academic curiosity in 2001 to a multi-billion-dollar industrial gold rush in 2025, and where it's going next.

\[Pause.\]

But first, let me give you the picture I want you to carry through the whole lecture, because almost everything we'll discuss is a variation on this one image.

Imagine you're trying to deal with a noisy heckler in a bar. There are two strategies. Strategy one: you find the heckler, walk up to them, and stand right in front of them with your hand over their mouth. As long as your hand stays on their mouth, they can't speak. The moment you let go, they start shouting again. You have to occupy their face, constantly, for as long as you want them quiet. This is what every traditional drug does. It's called the occupancy model of pharmacology. You bind to the bad protein, you cover its active site, and as long as the drug is bound, the protein can't do its job. The moment the drug falls off — or the protein gets remade from fresh — the trouble starts again.

Strategy two: instead of holding the heckler's mouth shut, you grab them by one arm, you wave at the bouncer with your other arm, you introduce the two of them, and then you walk away. The bouncer takes care of the rest. The heckler gets thrown out of the bar. They're not just quiet — they're _gone_. The bar's whole problem with that one person is solved, not paused.

That is exactly what a PROTAC does. It is a molecular bouncer. One end grabs the target protein — the heckler. The other end grabs the cellular janitor, called an E3 ubiquitin ligase — the bouncer. The janitor then tags the target for the trash, and the target gets dragged off to the proteasome, which is the molecular shredder of the cell. Once the target is shredded, the PROTAC molecule wanders away and finds another target, and another, and another. One PROTAC molecule can take out many copies of the target protein, in sequence, like a single bouncer ejecting heckler after heckler all night long.

That single image — bouncer, heckler, shredder — is the whole field. Everything else is detail hung on top of it.

\[Pause.\]

If you walk out of here in two hours and you can do three things — one, explain to a friend without jargon what a PROTAC is and how it differs from a normal drug; two, sketch the difference between a PROTAC and a molecular glue and tell me which one needs a linker; three, look at a news article that says "Arvinas reports positive Phase 2 data on ARV-471" and have an honest sense of what's actually happening molecularly — then we've succeeded. Everything else is detail hung onto that scaffold.

Let's build the scaffold.

---

## SEGMENT 2 — The inhibitor paradigm and its limits

Before we can appreciate what PROTACs do, we have to be honest about what the previous paradigm — the inhibitor paradigm — actually is and where it falls short. Because the inhibitor paradigm is most of pharmacology. Almost every drug on the shelves at your local pharmacy is an inhibitor in the broad sense — a small molecule that binds to a target and changes what that target can do.

The classical example is aspirin. Aspirin binds an enzyme called cyclooxygenase, sits in the enzyme's active site, and prevents the enzyme from doing its job of making certain inflammatory molecules. While aspirin is bound, the enzyme is quiet. When aspirin leaves, the enzyme goes back to work. The drug is, fundamentally, a plug. It plugs the keyhole on a particular molecular lock.

This works beautifully for some kinds of targets. If your target protein is an enzyme — meaning it has a well-defined active site that does chemistry — then plugging the active site shuts down the chemistry. Kinases, the enzymes that drive much of cellular signaling, are wonderful inhibitor targets, which is why most of the targeted cancer drugs from the last twenty years are kinase inhibitors. Drugs like imatinib for chronic myeloid leukemia, gefitinib for lung cancer, ibrutinib for B-cell lymphoma — these are all small molecules that slot into the active site of a specific kinase and obstruct it.

But here's the catch. The inhibitor paradigm has at least four major limitations, and once you see them all together, you can feel why the field was hungry for something new.

**Limit one: stoichiometry.** When you inhibit a protein, you need to occupy it. That means you need at least one molecule of drug per molecule of target, and in practice you need many more, because binding is an equilibrium and you have to drive that equilibrium with high drug concentrations. This is called stoichiometric pharmacology. It means you need a lot of drug in the patient, all the time, just to keep enough target occupied to matter. High doses mean high side effects, expensive manufacturing, and limited therapeutic windows.

**Limit two: undruggable proteins.** Many of the most important proteins in disease — transcription factors, scaffolding proteins, intrinsically disordered proteins — don't have a nice deep pocket where a small molecule can grab on. They have flat, featureless surfaces. There's nothing for a drug to bind to. The famous example, which we'll come back to, is MYC. Almost every cancer cell on Earth has dysregulated MYC. We've known this for forty years. We still don't have a good MYC inhibitor, because MYC doesn't have a good pocket. It's a flat, sloppy, mostly disordered protein. To the inhibitor paradigm, MYC is undruggable.

**Limit three: scaffolding functions.** Many proteins have day jobs you don't notice — they hold other proteins together. Even if you inhibit their main catalytic activity, they're still physically present, still touching their partners, still holding the molecular machine together. A kinase inhibitor can shut down the kinase part of a protein, and the patient still doesn't get better, because the same protein has another role that the inhibitor doesn't touch. The protein is still in the room, doing other things. You haven't gotten rid of it; you've just stopped one of its hands.

**Limit four: resistance.** When you inhibit a protein for long enough, evolution finds a way. Cancer cells, especially, will acquire a mutation in the active site that lets the protein keep working while no longer binding the drug. Your beautiful inhibitor stops working. You build a second-generation inhibitor for the mutant; cancer evolves a third mutation. This is the whole story of EGFR drugs in lung cancer — gefitinib, then erlotinib, then osimertinib, each one chasing the next resistance mutation.

\[Pause.\]

Now ask yourself: what would a drug have to do, mechanically, to escape all four of these limitations at once?

It would have to be catalytic, not stoichiometric — meaning one drug molecule could take out many targets. It would have to work on proteins without good pockets — because if you're going to destroy a protein, you only need to grab it somewhere, anywhere, even on a flat surface, just long enough to hand it to the disposal system. It would have to eliminate the whole protein, scaffolding and all, not just the catalytic site. And it would have to be harder for the cell to evolve around, because once the protein is gone, every function of the protein is gone, not just the one in the active site.

That is exactly the design specification for a PROTAC. The four limits of the inhibitor paradigm, lined up like dominoes, each get knocked down by the same trick: don't try to plug the keyhole. Throw the lock in the dumpster.

---

## SEGMENT 3 — The cell's garbage system: ubiquitin and the proteasome

To understand how a PROTAC actually drags a protein to its destruction, you need to know a little about the cell's protein disposal system. Because the PROTAC doesn't destroy the target by itself. It hijacks something the cell already has. The cell already has a magnificent, finely tuned system for finding old or damaged proteins and shredding them. The PROTAC just whispers in that system's ear: hey, that one. That one needs to go.

The system is called the ubiquitin-proteasome system, and Aaron Ciechanover, Avram Hershko, and Irwin Rose won the 2004 Nobel Prize in Chemistry for working out how it operates. It is, in my view, one of the most beautifully engineered subsystems in all of cell biology. Let me sketch how it works.

Every cell has, in its cytoplasm, thousands of barrel-shaped molecular machines called proteasomes. A proteasome looks, under the electron microscope, like a little tin can, hollow inside, with caps on both ends. The cap is the gatekeeper; the barrel is the shredder. When a protein enters the barrel, enzymes inside the barrel chop the protein up into little peptide fragments, six to twelve amino acids long. Those fragments come out the other end of the barrel and get recycled. The amino acids go back into the general pool. The cell uses the proteasome to constantly turn over proteins it doesn't want anymore — proteins that are old, proteins that misfolded, proteins that finished their job, proteins that are too plentiful.

But here's the question: how does the proteasome know which proteins to chew up? It doesn't grab everything at random — that would be catastrophic. The proteasome is selective. And the selection mechanism is called ubiquitin.

Ubiquitin is a small protein, only seventy-six amino acids long, that gets covalently attached to other proteins as a tag. Specifically, it gets attached to a particular amino acid called lysine on the surface of the target protein. And it doesn't get attached just once — it gets attached in a chain. Ubiquitin attached to ubiquitin attached to ubiquitin, like a string of beads. When a protein has a long enough chain of ubiquitin tags — typically four or more linked through a specific lysine of ubiquitin itself, called K48 — that's the "kill me" signal. The proteasome recognizes the ubiquitin chain, the cap of the proteasome grabs the tagged protein, the protein gets fed into the barrel, and the chain gets recycled.

So the proteasome is the shredder. Ubiquitin chains are the address labels that say "send to shredder." Make sense so far?

\[Pause.\]

Now the next question. Who decides which proteins get the address label?

This is the elegant part. The cell has a three-step assembly line for putting ubiquitin tags on proteins. The three steps are called, very originally, E1, E2, and E3. The E1 enzyme is called the ubiquitin-activating enzyme — it grabs a free ubiquitin and energizes it, using ATP, getting it ready to be transferred. The E2 enzyme is called the ubiquitin-conjugating enzyme — it accepts the activated ubiquitin from the E1, and holds it, ready to hand off. And then the E3 enzyme — the ubiquitin ligase — is the matchmaker. The E3 is the one that grabs the specific target protein, brings it close to the E2, and catalyzes the transfer of ubiquitin from E2 onto a lysine on the target.

The E3 ligase is the specificity step. It's the part of the system that decides _which_ protein gets ubiquitinated. The E1 doesn't care; it just activates ubiquitin. The E2 doesn't care much either; there are only a few dozen E2s in the human cell. But the E3s are gloriously varied. The human genome encodes about six hundred different E3 ubiquitin ligases. Six hundred. Each one is responsible for recognizing some specific set of target proteins and arranging for them to be ubiquitinated. The E3 ligases are the brain of the disposal system. They're the part that decides what gets thrown out and what stays.

And — this is the punchline — this is what a PROTAC hijacks. A PROTAC is a small molecule that artificially introduces a target protein to an E3 ligase, even though the E3 ligase wouldn't normally recognize that target on its own. The PROTAC is, essentially, a chemical introduction service. It says to the E3: "Hi, I'd like you to meet your new substrate. Please ubiquitinate it." And the E3, being a faithful little enzyme, does so. The ubiquitin chain goes on. The proteasome comes. The target gets shredded. The cell has lost one molecule of the bad protein. The PROTAC, meanwhile, is unchanged, and goes off to make another introduction.

Six hundred E3 ligases. Six hundred potential bouncers, each with slightly different specificity and slightly different cellular locations. Most of them, as of 2025, have never been touched by a drug. The PROTAC field is, in a real sense, only just starting to explore the keyboard.

---

## SEGMENT 4 — Crews and Deshaies, 2001: the original proof of concept

The PROTAC idea has parents. The two people most often credited with inventing the approach are Craig Crews, a chemist at Yale who went on to found a company called Arvinas, and Ray Deshaies, then at Caltech, who is now Senior Vice President for Discovery Research at Amgen. In 2001, they and their collaborators published a paper in the Proceedings of the National Academy of Sciences with the unwieldy but accurate title "Protacs: chimeric molecules that target proteins to the Skp1–Cullin–F box complex for ubiquitination and degradation."

Let me unpack what they actually did, because it's a beautiful piece of proof-of-concept work, and it tells you a lot about how scientific ideas mature from "wouldn't this be cool" to "this could change everything."

The target they chose was a protein called methionine aminopeptidase-2, or MetAP-2, which is involved in angiogenesis — the growth of new blood vessels. They picked it because there was already a well-known small molecule called ovalicin that bound MetAP-2 tightly. So they had one half of their bifunctional molecule for free.

For the other half — the E3 ligase recruiter — they didn't have a small molecule. In 2001, nobody had a small molecule that bound any E3 ligase. The whole concept was new. So instead, they used something cruder: a short peptide called I-kappa-B-alpha phosphopeptide, which is known to bind an E3 ligase called beta-TrCP. They knew this peptide would get the attention of beta-TrCP because that's exactly what happens to I-kappa-B-alpha in normal cells — it gets phosphorylated, recognized by beta-TrCP, ubiquitinated, and destroyed.

Then they did the synthesis. They took the ovalicin warhead — the MetAP-2 binder — and linked it chemically to the phosphopeptide — the beta-TrCP recruiter. They threaded the two halves together with a small chemical linker, like joining two halves of a barbell with a bar in the middle. The result was a chimeric molecule, hence the name PROTAC. One end binds MetAP-2; the other end recruits beta-TrCP.

They put this chimera into a test tube with all the components of the ubiquitin system — E1, E2, beta-TrCP, ubiquitin, ATP — and they showed two things. First, the PROTAC caused MetAP-2 to be ubiquitinated. Second, when they added a proteasome, MetAP-2 got degraded. The chimera was successfully introducing the target to the disposal system, and the disposal system was carrying out the disposal. The bouncer was, in a test tube, doing his job.

\[Pause.\]

Now, this first PROTAC was not a drug. It was a proof of concept. It had several practical problems that meant it was never going to make it into a patient. The phosphopeptide half was, well, a peptide — peptides don't cross cell membranes well, they get chewed up by proteases in the bloodstream, they're hard to dose orally. It was also a very large molecule by drug standards — roughly thirty atoms across the linker alone, in addition to the warhead and the peptide. Lipinski's famous "rule of five" for drug-likeness says molecular weight should be under five hundred Daltons; PROTACs are routinely twice that. The 2001 PROTAC was even worse, deep in the territory drug chemists call "beyond rule of five."

But none of that mattered for the point Crews and Deshaies were making. The point was: this works. The mechanism is real. If you can build a bifunctional molecule that bridges a target to an E3 ligase, the cell's own machinery will take care of the destruction. The chemistry to make this practical was a problem for later. The biology was sound.

It took roughly a decade for the chemistry to catch up. The first all-small-molecule PROTACs — no peptides, just chemistry — started appearing around 2008. The first PROTAC to enter clinical trials in humans was ARV-110, also called bavdegalutamide, in 2019. From 2001 to 2019. Eighteen years from proof of concept to first patient. That's a normal timeline for a genuinely new mechanism in drug development. It feels slow. It's actually astonishingly fast for an entirely new pharmacological paradigm.

And as of right now, in 2025, there are something like thirty PROTAC molecules in clinical trials, from twenty different companies, targeting a wide spectrum of cancers and a few other diseases. The Crews-Deshaies seedling has grown into a forest. We're going to spend most of this lecture in that forest.

---

## SEGMENT 5 — The chemistry shift: VHL and CRBN

The peptide-based PROTAC of 2001 worked but wasn't drug-like. The big chemistry breakthrough — the one that turned PROTACs from a curiosity into a real drug class — was finding small molecules that bind specific E3 ligases. Once you have a small-molecule E3 ligand, you can replace the floppy peptide half of the PROTAC with a tight, drug-like, cell-permeable chemical handle. The whole molecule shrinks. It becomes a real drug.

There are two E3 ligases that dominate the field, because they were the first two to get good small-molecule ligands. They are called VHL and CRBN. You should know both. Almost every PROTAC in clinical trials uses one of them.

**VHL — von Hippel-Lindau.** VHL is an E3 ligase complex named after a hereditary cancer syndrome, in which patients with germline VHL mutations get a variety of vascular tumors. Its normal job is to recognize a transcription factor called HIF-1-alpha, the master regulator of the cell's response to low oxygen, and degrade it when oxygen is plentiful. When oxygen is low, HIF-1-alpha doesn't get marked properly, VHL can't grab it, and HIF-1-alpha builds up and turns on genes for new blood vessels and metabolic adaptation. This is why people who go to high altitude make more red blood cells — HIF-1-alpha goes up, EPO genes turn on.

The reason VHL became a PROTAC darling is that in the early 2010s, Alessio Ciulli at the University of Dundee, working in part with Crews's group at Yale, designed the first proper small-molecule ligands for VHL. They took the snippet of HIF-1-alpha that VHL recognizes — a short bit of sequence containing a modified amino acid called hydroxyproline — and they shrank it, optimized it, made it stable and drug-like and tight-binding. By 2012 they had small molecules that bound VHL with high affinity and could be used as the E3-recruiting end of a PROTAC. The field had its first proper drug-like E3 ligand.

**CRBN — cereblon.** This is the other workhorse, and the story of how it got discovered as an E3 ligase is one of the great accidents in pharmacology. Cereblon was identified in the 1990s as a gene whose mutation caused a form of intellectual disability, hence the name — "cere" from cerebellum, "blon" not actually standing for anything specific. Its molecular function was unclear. Then in 2010, Hiroshi Handa's group in Japan published a paper showing that cereblon was the molecular target of thalidomide. And then, in 2014, a series of papers from Bill Kaelin, Ben Ebert, and others showed that cereblon was an E3 ubiquitin ligase, and that thalidomide and its derivatives — lenalidomide, pomalidomide — work by binding to cereblon and changing which proteins cereblon ubiquitinates.

I have to pause on this for a moment, because it's such a remarkable arc. Thalidomide was the drug, you may remember, that was prescribed to pregnant women in the late 1950s as a sedative and morning-sickness remedy, and that caused thousands of severe birth defects, especially limb malformations. It was withdrawn from the market in 1961. The whole modern drug regulatory system, with the FDA's strict requirements for evidence of safety, is in large part a response to the thalidomide disaster.

But thalidomide turned out to have an extraordinary second life. In the 1990s, it was rediscovered as a treatment for leprosy and then for multiple myeloma, a cancer of plasma cells. Nobody knew how it worked. The drug company Celgene built an entire franchise on thalidomide and its less-teratogenic derivatives — lenalidomide, brand name Revlimid, became one of the best-selling cancer drugs in the world. People were taking these drugs for myeloma, and they worked beautifully, and nobody knew why.

The why turned out to be: thalidomide and its derivatives bind to cereblon. And when they bind to cereblon, they change what cereblon does. Specifically, they make cereblon recognize and ubiquitinate proteins it wouldn't normally touch — proteins called IKZF1 and IKZF3, transcription factors that myeloma cells absolutely require to survive. With thalidomide bound to cereblon, IKZF1 and IKZF3 get degraded, and the myeloma cell dies.

That is the prototype of what we now call a molecular glue. We'll spend a whole segment on molecular glues in a moment. But here's the key insight: thalidomide didn't have a linker. It didn't have a separate warhead and an E3 ligand stuck together. It was a single small molecule that sat at the interface between cereblon and the target, gluing them together. Pharmacology had been doing targeted protein degradation by accident for fifty years before anyone realized it.

\[Pause.\]

And here's the second key insight, which had enormous practical consequences. The thalidomide structure became the starting point for designing CRBN-recruiting PROTACs. The drug-likeness was already proven — millions of patients had taken these IMiDs (immunomodulatory imide drugs) safely for myeloma. The binding pocket on cereblon was well-characterized. Chemists could take the thalidomide scaffold, link it to a warhead targeting some new protein of interest, and they had a CRBN-recruiting PROTAC. This is exactly what most PROTAC companies do today. CRBN-recruiting PROTACs are the dominant chemotype in the field, partly because CRBN expression is high in many tissues, partly because the IMiD chemistry is so well-validated.

So when you read about a clinical PROTAC, the question to ask is: which E3 ligase does it recruit? Usually the answer is VHL or CRBN. The exotic E3s — there are about six hundred of them in the genome — are still mostly waiting their turn. We'll come back to that opportunity in the last segment.

---

## SEGMENT 6 — Anatomy of a PROTAC: warhead, linker, and the E3 handle

Now let's actually look at a PROTAC, structurally, and name its parts. Because once you can see the anatomy clearly, you can predict a lot about how a PROTAC will behave — which targets it will work on, which ones it won't, why some are oral drugs and some have to be injected, why some have weird dose-response curves.

A PROTAC has three parts. Picture a barbell, but a very lopsided barbell, with the two heads doing different things.

**Part one: the warhead.** This is the end that binds the target protein — the protein you want destroyed. The warhead is typically a small molecule that came from previous drug discovery efforts. In many cases, it started life as an inhibitor of the target. Somebody, somewhere, already figured out a molecule that binds, say, the androgen receptor, or the estrogen receptor, or BRD9. The PROTAC chemist takes that molecule, lops off any bits that aren't critical for binding, and uses what's left as the warhead. So PROTAC design often piggybacks on years of prior inhibitor development. If you have a known inhibitor for your target, you have a starting warhead. If you have nothing, PROTAC design is much harder.

There's also an important relaxation here. A PROTAC warhead doesn't have to bind the target's active site. It doesn't have to inhibit the target's activity. It just has to grab the target somewhere — anywhere — long enough for the introduction to the E3 ligase to happen. This means PROTACs can use binders that would be useless as inhibitors. A weak binder, a binder to a totally inactive surface, a binder to an allosteric pocket far from the active site — any of these can work as a warhead, because all the warhead has to do is hold the target steady for a moment. This is one of the most important reasons PROTACs can drug targets that inhibitors can't.

**Part two: the linker.** This is the chemical chain connecting the warhead to the E3 ligand. The linker looks deceptively boring — it's typically a string of carbons with some oxygens, a polyethylene glycol chain, or a more rigid ringed structure. But the linker is, in many ways, the hardest part of PROTAC chemistry. Too short, and the warhead and E3 ligand are too cramped to both engage their partners simultaneously. Too long, and the geometry is loose — the target and the E3 ligase don't end up close enough for ubiquitin transfer to happen. The linker has to be just the right length, and just the right shape, and just the right flexibility. PROTAC chemists spend most of their time screening linker variants, because tiny changes in the linker can turn a non-degrader into a beautiful degrader, or vice versa.

The linker also dramatically affects the drug's physical properties. Long linkers make the molecule larger and more hydrophilic, hurting cell permeability. Rigid linkers can lock the molecule into a productive conformation. There's a whole subfield of medicinal chemistry now focused entirely on PROTAC linker design.

**Part three: the E3 ligand.** This is the end that grabs the cellular janitor. As we just discussed, in current clinical practice this is almost always a VHL ligand or a CRBN ligand — usually a thalidomide-derivative for CRBN, or a hydroxyproline-derivative for VHL. The E3 ligand is the conserved end of the molecule, the part that gets recycled across many PROTAC designs. Once a company has good chemistry for one E3 ligand, they can use it across their whole pipeline.

\[Pause.\]

So when a PROTAC molecule encounters its target, here's what happens, step by step.

Step one. The PROTAC molecule, floating in the cytoplasm, bumps into the target protein. The warhead end docks onto the target. The PROTAC is now hanging off the target, with the linker and the E3 ligand sticking out into the surroundings.

Step two. An E3 ligase molecule, also floating around, bumps into the dangling E3 ligand end of the PROTAC. The E3 ligase docks onto the PROTAC. Now you have a three-body complex: target protein, PROTAC, E3 ligase. This is called the ternary complex, and it's the magic moment.

Step three. With the target and the E3 ligase held close together, the E3 ligase does what it's evolved to do: it transfers a ubiquitin molecule from a nearby E2 onto a lysine on the surface of the target. The PROTAC is just a chaperone; the ubiquitination itself is the E3 doing its normal job, just on a substrate it wouldn't normally see.

Step four. The first ubiquitin is followed by a second, and a third, building up a polyubiquitin chain on the target. This usually happens before the ternary complex falls apart — the E3 ligase is sticky enough to ubiquitinate multiple times in one engagement.

Step five. Eventually the ternary complex falls apart. The PROTAC dissociates from the target. The target, now decorated with a polyubiquitin chain, is recognized by a passing proteasome. The proteasome grabs the chain, unfolds the target, feeds it into the barrel, and chops it into peptides.

Step six. The PROTAC, free again, finds another molecule of the target. The cycle repeats.

This is the catalytic cycle. One PROTAC molecule, many degraded target molecules. Estimates vary, but a single PROTAC molecule in a cell can drive the degradation of dozens of target molecules over the course of its lifetime in the cell. This is a fundamentally different stoichiometry from inhibitors, which work one-for-one. PROTACs are, in the chemistry sense, catalysts. They are not consumed by the reaction they enable.

That catalytic advantage is one of the most important practical features of PROTACs. It means you can dose much lower than you'd need for an inhibitor. It means a PROTAC can have lower affinity for its target than a comparable inhibitor would need, because it doesn't need to occupy the target — it just needs to bind transiently and introduce it to the E3. It means a PROTAC can keep working at low concentrations after the bulk of the drug has been cleared from the bloodstream, because each molecule keeps catalyzing destruction until something physically removes it from the cell. The pharmacokinetics of PROTACs are genuinely different from those of inhibitors, and most of those differences come from this one fact: PROTACs are catalytic.

---

## SEGMENT 7 — Molecular glues: the single-molecule cousin

Now we have to talk about PROTACs' close relative — what the field calls molecular glues. Because if you only learn about PROTACs, you'll have an incomplete picture of the field, and you'll be confused when people start mixing the two terms.

Here is the distinction in one sentence. A PROTAC is two binders connected by a linker — a chimeric molecule with two warheads sticking out, bridging the target and the E3. A molecular glue is a single small molecule with no linker — it sits in the interface between the target and the E3 and creates an artificial sticky surface, like dabbing a drop of glue between two pieces of wood.

Let me show you what this looks like, mechanistically. In a PROTAC, you have a target with one pocket for the warhead and an E3 with another pocket for the E3 ligand, and the linker spans the gap between them. The two proteins might not naturally like each other at all — they might never normally touch. The PROTAC forces them into proximity by being chemically attached to both.

In a molecular glue, by contrast, you have a single small molecule that binds to one protein — usually the E3 ligase — and reshapes its surface just enough that it now sticks to another protein it wouldn't normally recognize. The small molecule doesn't bind both proteins independently. It binds one protein, and as a side effect of being bound, it creates a new interaction surface on that protein that recruits the other. The glue is at the interface, but it's not bridging the two with a chemical chain. It's modifying one of them so that the two now stick to each other naturally.

The key practical difference is size and drug-likeness. A PROTAC is large — typically eight hundred to twelve hundred Daltons, well above the classical drug-weight range. A molecular glue is small — typically four hundred to six hundred Daltons, comfortably in normal drug territory. Molecular glues are oral, cross the blood-brain barrier in some cases, and behave like ordinary small-molecule drugs. PROTACs are awkward, large, hard to dose orally, and pose chronic chemistry problems. If you can find a molecular glue for your target, it's almost always preferable to a PROTAC.

The catch is: molecular glues are very hard to design rationally. PROTACs you can design — pick a warhead, pick an E3 ligand, link them together, tune the linker. Molecular glues require finding a small molecule that happens to reshape one protein's surface so it sticks to another. This is mostly serendipity. You can screen massive compound libraries against cells looking for molecules that degrade a target of interest, hoping to find a glue, but you don't really get to design the geometry from scratch. Glues are discovered, not invented.

\[Pause.\]

The prototypical molecular glue, as I mentioned in the last segment, is thalidomide and its derivatives — lenalidomide, pomalidomide, iberdomide, mezigdomide. These drugs were discovered without anyone knowing how they worked. Their mechanism was reverse-engineered after the fact. And what we now know is that they bind to cereblon, the E3 ligase, and they sit in a pocket on cereblon's surface, and they create a new sticky surface that recruits a specific class of zinc-finger transcription factors — proteins like IKZF1, IKZF3, SALL4, ZFP91, and others. These transcription factors don't normally interact with cereblon. With lenalidomide bound, they do. Cereblon ubiquitinates them. The proteasome degrades them. The cell loses them.

This is why lenalidomide works in multiple myeloma. Myeloma cells absolutely require IKZF1 and IKZF3 to survive. When lenalidomide arrives, IKZF1 and IKZF3 get degraded. The myeloma cells die. Patients respond. Multiple myeloma went from an essentially fatal disease in the 1990s to a chronic, manageable disease in 2020s, and lenalidomide is a major part of that story. The first molecular glue therapy in human medicine — and we didn't know it was a molecular glue until decades after it was approved.

There's a second famous molecular glue I want to mention, because it represents an important lineage and you'll hear about it. The drug indisulam, which was originally developed as an unsuccessful anticancer drug in the 1990s, turned out to be a molecular glue that recruits an RNA-splicing factor called RBM39 to a different E3 ligase called DCAF15. RBM39 gets degraded; certain cancers that depend on specific splicing patterns die. Indisulam was sitting in a drawer for fifteen years before someone figured out what it was actually doing. The pharmaceutical world is full of molecular glues nobody has identified yet.

So when you read a paper or a press release in this field, the terminology to listen for is: is the molecule chimeric, with two distinguishable warheads and a linker, or is it a single compact molecule that happens to glue a protein to an E3? Same broad strategy — induce degradation — but different chemistry and different design logic.

---

## SEGMENT 8 — The hook effect: when more drug is worse

Now I want to spend a few minutes on a curious feature of PROTACs that you should understand, because it's pedagogically interesting and because it'll come up if you ever read a paper on PROTAC pharmacology. It's called the hook effect.

For a normal inhibitor drug, the dose-response curve is monotonic. More drug means more inhibition, up to the point where every target molecule is bound, and then the curve flattens. You can't get more inhibition than 100%, and giving more drug doesn't undo what you've already accomplished. The curve is well-behaved.

For PROTACs, the dose-response curve is different. It's bell-shaped. Low doses give little effect, because there isn't enough drug to engage many targets. Medium doses give maximum degradation. But _high_ doses — concentrations above the optimum — actually give _less_ degradation. The drug starts to fail when you give too much of it. This phenomenon is called the hook effect, named for the way the dose-response curve hooks back down at high concentrations.

Why does this happen? Think about the ternary complex again. To get degradation, you need three things in the same place at the same time: target, PROTAC, E3 ligase. The PROTAC molecule has two ends. One end is bound to the target; the other end is bound to the E3. Both bindings have to happen on the same PROTAC molecule, simultaneously.

Now imagine you flood the cell with PROTAC. There are millions and millions of PROTAC molecules. Every target protein in the cell quickly gets a PROTAC molecule docked onto it via the warhead. Every E3 ligase in the cell quickly gets a PROTAC molecule docked onto it via the E3 ligand. But — here's the key — these are mostly _different_ PROTAC molecules. The target has a PROTAC sticking out of it, with the E3 ligand end exposed, but no E3 is going to come bind that end because there are no free E3s left — they all have their own PROTAC molecules docked. Similarly, the E3s have PROTACs sticking out with the warhead end exposed, but no targets to bind, because the targets are already occupied. The ternary complex can't form. Degradation drops.

It's a problem of statistics. At low PROTAC concentrations, both ends of any given PROTAC molecule are likely to find empty partners. At medium concentrations, the system reaches an optimum. At excessive concentrations, both ends of any given PROTAC are more likely to find _already-occupied_ partners, and the productive ternary complexes get rarer. You've drowned the matchmaking service in single people — but everyone's already on a date with somebody else.

\[Pause.\]

The hook effect has real clinical implications. It means PROTAC dosing has to be tuned carefully. You can't just give more drug to get more effect; at some point you'll be giving less effect. It means PROTAC trials sometimes show counterintuitive dose-response results, where lower doses work better than higher ones. It means combination dosing and pharmacokinetics matter in unusual ways. And it's one of the reasons PROTAC drug development has its own peculiar dynamics — clinicians and chemists have to relearn intuitions they built up over decades of working with inhibitors.

Molecular glues, by the way, don't have a hook effect, because they're not bridging two pre-existing binders. The glue binds one protein and reshapes its surface; there's no second binding event to compete with. This is another reason molecular glues, when you can find them, are often preferable to PROTACs.

---

## SEGMENT 9 — Picking the right target

Not every protein is a good PROTAC target. Some are. Some aren't. Understanding which is which is a major part of being a smart PROTAC chemist or a smart PROTAC investor, and it'll help you read the field intelligently.

The first criterion is that the target has to be a protein that drives disease when it's present. PROTACs work by removing the protein. If the disease is caused by the protein being present and doing something bad — an oncoprotein, a misfolded aggregator, a viral protein, an overactive receptor — then removing it should help. If the disease is caused by the absence of a protein, or by a normal protein doing too little of its normal job, a PROTAC won't help. You can't destroy your way to having more of a thing.

This is why almost all PROTACs in development are for cancer. Cancer is full of gain-of-function oncoproteins — mutant kinases, overexpressed transcription factors, stuck-on signaling proteins. Each of these is exactly the kind of "bad protein, please remove" scenario that PROTACs are designed for. There are also some PROTACs in development for neurodegenerative diseases involving toxic protein aggregates — tau in Alzheimer's, alpha-synuclein in Parkinson's — where the strategy is similar. Remove the bad protein. But by far the most fertile PROTAC field is oncology.

The second criterion is that the target has to recover from degradation only slowly. Here's why this matters. After you degrade a target with a PROTAC, the cell has lost that protein. But the cell can resynthesize the protein from its mRNA, given time. Translation happens constantly. Within hours, the cell can replace what it lost.

If the target is rapidly replaced — high translation rate, abundant mRNA, fast protein synthesis — then your PROTAC has to be in the cell constantly degrading the protein faster than the cell can make it. That can be done, but it raises the dosing requirements. If the target is slowly replaced — low translation rate, long half-life, hard to remake quickly — then a brief pulse of PROTAC can knock the target down for hours or days. Much easier from a pharmacology standpoint.

The good news is that many oncoproteins are exactly in the "hard to replace" category, especially when the cancer cell is in a stressed state.

The third criterion is that the target has to be ubiquitinable. The PROTAC introduces the target to the E3, but the E3 still has to actually transfer ubiquitin onto a lysine on the target's surface. The target needs accessible lysines, and the lysines have to be close enough to the E2 catalytic site when the ternary complex forms. Some proteins, for various reasons, are bad ubiquitin substrates even when you stick an E3 next to them. This is partly why PROTAC development always involves a phase of screening and validation — you can't always predict from the design whether a particular target will actually get degraded. Sometimes the geometry is wrong, sometimes the lysines are buried, sometimes the dynamics don't work out.

The fourth criterion is that the target's degradation has to be tolerable to normal cells. This sounds obvious but it isn't. If your target is also important in healthy tissues, degrading it will cause side effects. A target that's overexpressed in cancer but also abundant in healthy intestine, liver, and bone marrow is going to be problematic. The best PROTAC targets are proteins that cancer cells particularly depend on while normal cells can mostly do without — a property called synthetic dependency.

\[Pause.\]

A nice example of a target that meets all four criteria is the androgen receptor — AR — in prostate cancer. AR is a transcription factor that drives prostate cell growth in response to testosterone. Prostate cancer cells depend on AR for survival; many prostate cancers stay AR-driven even after years of treatment. AR turns over relatively slowly. AR has plenty of accessible lysines. And normal tissues can mostly tolerate temporary AR knockdown. AR is, in many ways, the model PROTAC target. So it's no accident that the first clinical PROTAC, ARV-110, targets AR. We'll come to it in Segment 10.

Another model target is the estrogen receptor — ER — in breast cancer. Same logic. ER drives breast cancer cell growth; breast cancer cells depend on it; the receptor turns over modestly; normal tissues mostly do okay with temporary ER reduction. The second-most-famous clinical PROTAC, ARV-471, targets ER. We'll come to that one too.

So when you read about a PROTAC program for some new target, ask yourself: is this protein bad when it's present, hard to resynthesize, ubiquitinable, and dispensable for normal tissue? If yes, it's plausibly a good PROTAC target. If no, you should be skeptical.

---

\[BREAK\]

\[This is the planned one-hour break. Take ten to fifteen minutes. Stretch, drink water, walk around. When you come back, we'll spend the second hour talking about the actual clinical PROTACs that are in trials now, the industrial landscape — Arvinas, C4, Kymera, Foghorn, and the rest — the chemistry challenges that make PROTAC drugs hard to develop, and the frontier where the field is going next: extracellular degraders, the inverse problem of stabilizing rather than destroying proteins, and the unexploited continent of six hundred E3 ligases waiting for a chemist to come visit.\]

---

## SEGMENT 10 — ARV-110: the first clinical PROTAC

Welcome back. Let me start the second half with the molecule that really put the PROTAC field on the map clinically. It's called ARV-110, also known by its non-proprietary name bavdegalutamide. It was developed by Arvinas — the company Craig Crews founded around 2013 to commercialize the PROTAC technology — and it entered Phase 1 clinical trials in 2019. ARV-110 was the first PROTAC ever administered to a human patient.

The target is the androgen receptor — AR. The clinical setting is castration-resistant metastatic prostate cancer. To understand why this combination of drug and disease matters, let me give you the prostate cancer story in a paragraph.

Prostate cancer is driven, at almost every stage, by androgen signaling. Testosterone and dihydrotestosterone, the male sex hormones, bind to the androgen receptor, which travels to the nucleus and turns on genes that drive prostate cell growth. The first-line therapy for metastatic prostate cancer is hormone deprivation — surgical castration, or drugs that block testosterone production, like leuprolide. This works, often beautifully, for a while. Prostate cancers regress, sometimes dramatically. But eventually, almost every case, the cancer comes back. The patient is castrate — they have no detectable testosterone — and yet the cancer is growing again. This is called castration-resistant prostate cancer.

Castration-resistant prostate cancer turns out to almost always still be AR-driven. The cancer has found ways to activate AR even without ligand. Sometimes the AR gene gets amplified — many extra copies. Sometimes AR gets mutated so it can be activated by other steroids, including weak androgens still circulating after castration. Sometimes AR gets mutated so it's constitutively active. Sometimes splice variants of AR appear that lack the ligand-binding domain entirely — they're active without needing any ligand at all. The cancer has co-opted AR to keep driving growth without the original signal.

The next-line drugs after castration are AR antagonists — enzalutamide, apalutamide, darolutamide. These small molecules sit in the ligand-binding pocket of AR and block it from being activated by the residual steroids. They work, but again, only for a while. The cancer evolves resistance, often by acquiring point mutations in the ligand-binding pocket that prevent the antagonist from binding — but importantly, these mutations leave the rest of AR intact. The cancer is now driven by a mutant AR that the inhibitors can't block.

This is where PROTACs come in. A PROTAC targeting AR doesn't care if the ligand-binding pocket has mutated, because the PROTAC only needs to grab AR somewhere — anywhere — long enough to ubiquitinate it. The PROTAC binds AR, recruits an E3, AR gets degraded. The fact that AR has been mutated to resist the inhibitor doesn't matter, because we're not inhibiting AR — we're destroying it. Once it's destroyed, every mutant variant and splice variant and amplified copy is gone.

\[Pause.\]

ARV-110 is a CRBN-recruiting PROTAC, meaning it uses a thalidomide-derivative as its E3 ligand and uses an AR-binding warhead at the other end. It's given orally — once a day. The Phase 1 trial enrolled patients with castration-resistant prostate cancer who had already failed multiple lines of therapy, including enzalutamide and abiraterone. These were patients essentially out of options.

The results were genuinely interesting. About 40% of patients showed reductions in PSA — prostate-specific antigen, the clinical biomarker for prostate cancer activity. Some of those reductions were dramatic, more than 50%. Notably, the patients who responded best were the ones whose tumors carried particular AR mutations — including a mutation called T878A, which is a known driver of enzalutamide resistance. The PROTAC was working in patients whose cancer had defeated the prior inhibitor, exactly as the mechanism predicted.

The trial wasn't perfect. There were side effects — gastrointestinal toxicity, fatigue. The drug had its hook effect to manage. And the overall response rate, while encouraging, wasn't dramatic enough to set off a regulatory parade. Arvinas eventually deprioritized ARV-110 in favor of a next-generation AR degrader, ARV-766, which has better drug properties and broader activity against resistant mutants. ARV-766 is now in Phase 3 trials and is the leading AR degrader candidate.

But the historical significance of ARV-110 is enormous. It was the first PROTAC ever to go into a human patient. It demonstrated that the mechanism worked in vivo, in real disease, with real biomarker readouts. It showed that PROTACs could overcome inhibitor resistance, exactly as the in vitro work had predicted. And it opened the floodgates for an entire field. Every PROTAC company that exists today exists in part because ARV-110 showed it was possible.

If you want to remember one drug name from this lecture, remember ARV-110. It's the moment the PROTAC field stopped being an academic curiosity and became a clinical reality.

---

## SEGMENT 11 — ARV-471: estrogen receptor in breast cancer

If ARV-110 is the proof-of-concept PROTAC, ARV-471 is the one that might actually become a commercially significant drug first. It's also from Arvinas — but now in partnership with Pfizer, who paid roughly $650 million up front for the partnership in 2021, plus billions in potential milestones. It targets the estrogen receptor — ER — in metastatic, ER-positive breast cancer.

The structural logic mirrors the AR story. Most breast cancers — about 70% — are estrogen-receptor-positive, meaning they have abundant ER and depend on it for growth. The standard first-line therapies are endocrine therapies that block ER signaling — tamoxifen, which is a selective estrogen receptor modulator, and aromatase inhibitors like letrozole, which block estrogen synthesis. These work well in early-stage disease.

In metastatic disease, the situation gets harder. Many tumors evolve resistance to tamoxifen and aromatase inhibitors. Sometimes resistance comes through mutations in ER itself — specifically a set of mutations in the ligand-binding domain, called Y537S, D538G, E380Q, and others, which make ER active even without estrogen. These mutations are essentially the breast-cancer analog of the resistant AR mutations in prostate cancer.

The next-generation ER drug is fulvestrant, which is technically a selective estrogen receptor _degrader_ — a SERD. Fulvestrant binds ER and somehow induces its degradation, although the mechanism is less clean and less catalytic than a PROTAC. Fulvestrant has been used for years in ER-positive metastatic breast cancer with mixed success. It works but it's awkward — it's given by intramuscular injection because it's not orally bioavailable, and its potency is limited.

ARV-471 is designed to be the rational, oral, potent successor to fulvestrant. It's a CRBN-recruiting PROTAC. One end binds ER; the other end is a thalidomide-derivative that recruits cereblon. ER gets ubiquitinated and degraded. The mutant ERs that escape tamoxifen still get degraded, because ARV-471 doesn't care about the active-site mutations.

\[Pause.\]

The clinical results have been substantial. Phase 1 data showed ER reductions in tumor biopsies of greater than 80% — a degree of target knockdown that fulvestrant has never achieved at standard doses. Phase 2 results in pretreated metastatic ER-positive breast cancer showed meaningful response rates and clinical benefit, especially in patients with ER mutations. Several large Phase 3 trials are now reading out, comparing ARV-471 against current standards of care in various lines of therapy. The trial called VERITAC-2 read out positively in 2024, showing improvement over fulvestrant in pretreated patients.

If ARV-471 succeeds in Phase 3 and is approved by the FDA, it will be the first PROTAC in widespread clinical use, for one of the most common cancers in the world. ER-positive breast cancer is enormous as a patient population — hundreds of thousands of women in the US alone, millions globally. A successful ARV-471 launch could be one of the biggest drug launches of the late 2020s, and it would establish the entire PROTAC class as commercially viable.

It's worth pausing on what this means. We went from a peptide-based proof-of-concept in 2001 to a likely blockbuster drug in 2025 — a span of less than twenty-five years for an entirely new pharmacological mechanism to mature from a single PNAS paper into a potential standard of care. That's faster than many people would have predicted, and it tells you something about how compounding scientific knowledge can accelerate when the underlying ideas are sound.

---

## SEGMENT 12 — IMiD chess and the molecular glue revolution

I want to back up now and tell a story that runs in parallel to the PROTAC story, because it's been just as important to the field. This is the molecular glue story, and specifically the immunomodulatory imide drug — IMiD — story that I touched on in Segment 5.

Recall that thalidomide and lenalidomide and pomalidomide were prescribed for myeloma for years before anyone understood why they worked. In 2010, Hiroshi Handa's group identified cereblon as the target. In 2014, several labs — including Bill Kaelin's, Ben Ebert's, and others — showed that cereblon was an E3 ligase, and that the IMiDs were causing cereblon to ubiquitinate and degrade certain transcription factors. The first targets identified were IKZF1 and IKZF3 — Ikaros and Aiolos — which were necessary for myeloma cell survival. The cancer killed myeloma by destroying the proteins the cancer couldn't live without.

What happened next was that the chemists started playing chess with the cereblon pocket. They realized that lenalidomide's structure could be tweaked — by adding chemical groups in particular positions, by changing the substituents on the ring system — to create new molecules that recruited cereblon but degraded _different_ targets. Each subtle change in the chemical structure changes which protein cereblon is now sticky to. The cereblon-IMiD complex is, essentially, a programmable degrader. You can dial in different target specificities by modifying the small molecule.

A landmark example is CC-885, a molecule that turned out to recruit cereblon to a protein called GSPT1 — G1 to S phase transition 1 — which is a translation termination factor essential for protein synthesis. Degrading GSPT1 kills cancer cells that depend on high protein synthesis rates. CC-885 itself was too toxic to develop into a drug, but it opened up a whole new target class. Now there are several GSPT1 degraders in clinical trials, mostly for AML and other blood cancers that have high translation demands.

Another example: CC-122, which was originally developed for myeloma but turned out to glue cereblon to a transcription factor called Aiolos, with somewhat different effects than lenalidomide. CC-220 — iberdomide — glues cereblon to both Ikaros and Aiolos with greater potency. Mezigdomide is the next generation. Each of these molecules is, structurally, a small variation on a theme. And each one has slightly different biology. The IMiD chess game is one of the most active and productive areas of pharmacology right now, partly because the IMiD scaffold is so well-validated and partly because cereblon turns out to be a remarkably tunable E3.

\[Pause.\]

But the real revolution from the molecular glue side came when people realized that you could go _looking_ for molecular glues that you didn't know existed. The strategy was: take large compound libraries — millions of molecules — and screen them against cells, looking for compounds that caused degradation of specific targets. Any hit might be a molecular glue acting through some unknown E3.

This is how Carolacton, a natural product, was identified as a degrader. It's how indisulam was understood. It's how a whole series of compounds called DCAF15 glues, DCAF16 glues, and DCAF11 glues were discovered. DCAFs are substrate receptors of the cullin-RING E3 ligase family — there are many of them, mostly unexplored as drug targets. Each new DCAF that gets engaged by a glue is essentially a new E3 ligase available for the field.

Companies like Monte Rosa Therapeutics have been built around exactly this approach — molecular glue discovery, often using novel chemistry that nobody had considered as drug-like before. The Monte Rosa pipeline includes glues for GSPT1, NEK7, and other targets, with leads in clinical trials. C4 Therapeutics, while initially focused on PROTACs, has expanded into molecular glues as well. The line between "PROTAC company" and "molecular glue company" is blurring rapidly. The whole industry is more accurately described as the targeted protein degradation industry, encompassing both approaches.

The molecular glue side of the field has one enormous practical advantage over PROTACs: glues are small molecules with normal drug properties. They're orally bioavailable, they cross membranes, they can hit blood-brain barrier targets. If you can find a molecular glue, you don't have to worry about the awful pharmacokinetics of a 1,200-Dalton bifunctional molecule. You have a real, normal drug. So while PROTACs have the design advantage — you can build them rationally — molecular glues have the drug-likeness advantage, and the field is increasingly hunting for both.

---

## SEGMENT 13 — Foghorn and the chromatin remodeling connection

I want to spend a segment specifically on chromatin remodelers as PROTAC targets, because this is where the targeted degradation field is solving a problem that the inhibitor paradigm couldn't touch. And it nicely cross-references material we covered in the chromatin remodeling lecture, if you took that one — and even if you didn't, the conceptual point is self-contained.

Chromatin remodelers are big multi-subunit machines that move nucleosomes around on DNA — they decide which parts of the genome get read and which parts stay buried. The most famous family is the BAF complex, also known as SWI/SNF, which has many subunits including SMARCA4, SMARCA2, BRD9, and others. About 20% of all human cancers carry mutations in some BAF subunit, making BAF mutations one of the most common categories of cancer drivers.

But BAF was considered undruggable for decades. The complex is huge — twelve to fifteen subunits, hundreds of kilodaltons. The catalytic subunit, the ATPase, has a pocket that you could in principle target, but the rest of the complex is mostly scaffolding, with no obvious drug pockets. And many of the cancer-relevant mutations are loss-of-function — meaning the protein is _missing_, not stuck on, so you can't inhibit your way back to function. Classical pharmacology was stuck.

PROTACs broke this open in several ways. The first was the discovery of synthetic lethality between SMARCA2 and SMARCA4. These two proteins are the two ATPases of the BAF complex — paralogs of each other. Cells normally have both. When a cancer mutation knocks out SMARCA4, the cancer cell becomes uniquely dependent on SMARCA2 to do the ATPase job. Normal cells, with both still present, are fine without SMARCA2 — but a SMARCA4-mutant cancer cell isn't. So a drug that degrades SMARCA2 would selectively kill SMARCA4-mutant cancers — including a substantial fraction of lung cancers.

Why a degrader and not an inhibitor? Because SMARCA2 has scaffolding functions beyond its ATPase activity. Inhibiting the ATPase alone might not be enough to kill the cells — you might need to actually remove the protein, scaffolding and all. This is a textbook case of where PROTACs do something inhibitors can't.

\[Pause.\]

Foghorn Therapeutics is the company most closely associated with this story. They were founded in 2018 specifically to develop drugs targeting chromatin remodelers, with a deep technical focus on the BAF complex. Their lead program is FHD-909, also called LY4050784 in partnership with Eli Lilly — a selective SMARCA2 degrader, designed to kill SMARCA4-mutant lung cancers via this synthetic-lethal mechanism. As of 2025, FHD-909 is in Phase 1 clinical trials. If it works, it could be the first targeted therapy for SMARCA4-mutant lung cancer, which represents tens of thousands of patients per year.

Foghorn has a second program — FHD-609 — that targets BRD9, a different BAF subunit, in a cancer called synovial sarcoma. Synovial sarcomas universally carry a chromosomal translocation called SS18-SSX, which corrupts the normal BAF complex and creates a unique dependency on a different BAF variant containing BRD9. Degrading BRD9 selectively kills synovial sarcoma cells. FHD-609 is in trials for synovial sarcoma patients as of 2025. Other companies — including C4 Therapeutics — have BRD9 degraders in development as well.

So PROTACs are doing for chromatin remodelers what nothing else could do. They're turning a famously undruggable target class into a clinical program. And they're doing it by exploiting two principles we've discussed: the catalytic, scaffolding-eliminating advantage of degradation, and the synthetic-lethal logic of paralog dependency. This is one of the cleanest examples of how PROTACs are expanding the druggable genome.

---

## SEGMENT 14 — The company landscape: the gold rush

Let me give you a brief tour of the industry, because to understand where this field is going you have to understand who's investing in it and what they're betting on.

The first wave of PROTAC companies was led by Arvinas, which Craig Crews co-founded in 2013. Arvinas is the brand name in the field — they took ARV-110 into the first clinical trial, they have ARV-471 in Phase 3, they have follow-on programs in AR, in KRAS, and in tau for Alzheimer's. They went public in 2018 and now have a multibillion-dollar market cap. Pfizer is their largest partner.

Right alongside Arvinas is **C4 Therapeutics**, founded in 2015, originally spun out of Dana-Farber Cancer Institute, with founders including Jay Bradner and Ben Ebert. C4 has programs targeting BRAF, IKZF, and others, with several molecules in clinical trials. Roche is their largest partner.

**Kymera Therapeutics** was founded in 2016 and has focused heavily on immunology and inflammation, in addition to oncology. Their programs targeting IRAK4 and STAT3 are notable. They went public in 2020.

**Nurix Therapeutics**, founded in 2009, was actually one of the earliest companies in the targeted protein degradation space. They have programs in BTK degradation for B-cell lymphomas and other targets. They have a substantial partnership with Gilead and another with Sanofi.

**Foghorn**, which we just discussed, focuses on chromatin remodelers.

**Monte Rosa**, founded in 2018, focuses on molecular glues — a related but distinct strategy.

**Plexium**, **Cullgen**, **Captor Therapeutics**, and many others are smaller players with various specializations.

\[Pause.\]

And then there's the big pharma layer. Almost every major pharmaceutical company now has a targeted protein degradation division. Pfizer, through its Arvinas partnership. Roche, through C4 and internal programs. Novartis, with internal degrader programs. AstraZeneca. GSK. AbbVie. Bristol-Myers Squibb. The BMS story is particularly interesting because BMS acquired Celgene in 2019 for roughly $74 billion — and that acquisition came with Celgene's entire IMiD pipeline, including lenalidomide and pomalidomide and the next-generation IMiDs like iberdomide and mezigdomide. BMS now has, in many ways, the deepest molecular glue pipeline in the industry, simply because they bought it.

Eli Lilly, partnered with Foghorn, is committed to the chromatin remodeler space. Genentech, AstraZeneca, and others have their own internal programs. Total investment in the field, including IPOs, partnerships, and venture funding, has run into the tens of billions of dollars over the last five years.

This is the gold rush. C4, Kymera, Arvinas, Nurix, Foghorn, Monte Rosa, Plexium, Cullgen — every major pharma now has a degrader division, every venture firm has at least one degrader investment, and the talent pool of medicinal chemists who specialize in PROTAC and glue design has grown from a few dozen people in 2015 to thousands today.

Whether this gold rush pays off in proportion to the investment is a question we won't know the answer to for several more years. The first wave of clinical trials is reading out now. Some are succeeding — ARV-471 looks like a real drug. Some are failing — several PROTAC programs have been quietly shelved after disappointing Phase 1 results. The field as a whole is maturing from "everything is exciting" to "we need to figure out which targets and which chemistries actually work."

But the underlying biology is sound. There are six hundred E3 ligases. Most of the genome is, in principle, eligible for degradation. The mechanism is real. The chemistry is improving. Even if half the companies fold and most of the programs fail, the technology is here to stay.

---

## SEGMENT 15 — Why PROTACs are hard: the chemistry challenges

I want to spend a few minutes on the practical chemistry challenges that make PROTACs hard to actually develop into drugs. Because if you only hear about the conceptual elegance, you'll miss the reason this field has taken decades to mature, and why molecular glues — when you can find them — are often preferred.

The fundamental problem is size. A standard PROTAC has a molecular weight of 800 to 1,200 Daltons. Compare that to aspirin, at 180 Daltons. Compare it to most oral drugs, which sit between 300 and 500. The pharmaceutical industry developed a set of empirical rules in the late 1990s, named after the chemist Christopher Lipinski, that predict whether a molecule will be orally bioavailable and well-behaved as a drug. The rule of five: molecular weight under 500, no more than 5 hydrogen bond donors, no more than 10 hydrogen bond acceptors, log P less than 5. Almost every successful oral drug obeys these rules. Almost every PROTAC violates them — often badly.

Why does this matter? Because to be an oral drug, a molecule has to cross the intestinal epithelium, survive the bloodstream, get into target cells, and ideally cross other barriers like the blood-brain barrier or the cell nucleus. Large molecules don't do these things well. They get pumped out by efflux pumps. They don't cross membranes. They get trapped in compartments. The bigger the molecule, the worse it generally behaves as a drug.

So PROTAC chemists spend a tremendous amount of effort on making their large molecules behave like smaller ones. They use rigid linkers to force the molecule into compact conformations. They balance polar and nonpolar surfaces carefully. They make the molecule's overall shape resemble a small drug from the perspective of membrane transporters and metabolic enzymes. This is called "beyond rule of five" chemistry, and it's its own subfield of medicinal chemistry. PROTAC chemists are, in a sense, drug-design chemists who have been told they can't use the simple rules anymore, and have to invent new ones as they go.

\[Pause.\]

The second challenge is **metabolic stability**. Large molecules with many functional groups have many places that liver enzymes can attack. The CYP450 enzymes in the liver chew up drugs by oxidizing them at various sites. The bigger the molecule, the more sites are available for oxidation, and the faster the molecule disappears from circulation. PROTACs often have short half-lives in vivo for this reason. You have to design around metabolic vulnerabilities, and sometimes you can't.

The third challenge is the **hook effect**, which we discussed earlier. PROTAC dose-response curves are non-monotonic, which is bad for therapeutic windows. You have to find a dose that's high enough to engage the system but not so high that you're past the optimum. In some PROTAC programs, this window is narrow.

The fourth challenge is **tissue distribution**. PROTACs work where their target E3 ligase is expressed. CRBN is broadly expressed, which is one reason CRBN-recruiting PROTACs are dominant. VHL is also broadly expressed. But you can imagine wanting tissue-specific degradation — say, degrading a target only in the liver, or only in cancer cells — and that requires either an E3 ligase that's tissue-restricted, or some other way to localize the drug. This is an active research area.

The fifth challenge is **resistance**. Yes, even PROTACs face resistance. Cancer cells can downregulate the E3 ligase the PROTAC depends on — if you reduce CRBN expression, CRBN-recruiting PROTACs stop working, even if the target is unchanged. Some early-phase PROTAC studies have already seen this. The cancer cell has lots of ways to mutate, and "stop making CRBN" is a clean way to escape a CRBN-recruiting drug. The field is responding by developing PROTACs that recruit different E3s — VHL-based PROTACs as alternatives to CRBN-based ones, and increasingly, PROTACs targeting more exotic E3 ligases like RNF4, RNF114, KEAP1, MDM2, and others.

So the path from idea to drug is genuinely hard. The conceptual elegance is real, but the practical chemistry is challenging. The field has had to invent its own chemistry, its own pharmacology, its own pharmacokinetics. The fact that we have any PROTACs in clinical trials at all is a testament to a lot of work by a lot of very talented chemists over the last fifteen years.

---

## SEGMENT 16 — LYTACs, AbTACs, and the extracellular frontier

So far everything we've talked about happens inside the cell. The PROTAC enters the cytoplasm, finds its target, recruits an intracellular E3 ligase, and the target gets degraded by the intracellular proteasome. The whole story plays out inside the cell membrane.

But many disease-relevant proteins live outside the cell — secreted proteins floating in extracellular fluid, or membrane proteins with their business end sticking outside the cell. Antibodies, cytokines, growth factors, viral envelope proteins. These don't have lysines accessible to the cytoplasmic ubiquitination machinery. They're outside the cell. The intracellular proteasome can't reach them.

This was, for a long time, a fundamental limitation of targeted protein degradation. Half the proteome is extracellular or membrane-bound, and PROTACs couldn't touch any of it. Until 2020, when Carolyn Bertozzi's group at Stanford — Bertozzi being one of the great chemical biologists of our generation, who won the Nobel Prize in 2022 for her work on bioorthogonal chemistry — published a paper introducing a new class of degraders called LYTACs.

**LYTAC** stands for LYsosome TArgeting Chimera. The idea is to take a bifunctional molecule, like a PROTAC, but instead of recruiting an intracellular E3 ligase, you recruit a different kind of cellular trash collector: a lysosomal trafficking receptor. These are receptors on the cell surface whose normal job is to bind extracellular molecules, internalize them via endocytosis, and route them to the lysosome — the cell's other major protein-degradation organelle, distinct from the proteasome.

The LYTAC is bifunctional. One end binds the extracellular target. The other end binds a lysosomal targeting receptor on the cell surface — typically a receptor that recognizes specific sugar modifications, like the cation-independent mannose-6-phosphate receptor or the asialoglycoprotein receptor. The LYTAC brings the target into contact with the receptor. The receptor internalizes the complex. The target gets trafficked to the lysosome and degraded.

This is a beautiful generalization of the PROTAC concept. PROTACs use the ubiquitin-proteasome system for intracellular targets; LYTACs use the lysosomal system for extracellular targets. Same idea, different machinery, different addresses for the trash.

\[Pause.\]

LYTACs are early in clinical development — much earlier than PROTACs. The first LYTACs have been demonstrated to degrade EGFR, PD-L1, and other membrane and secreted proteins in mice. Clinical translation is still a few years out for most programs. But the concept is sound and the field is now growing rapidly.

There's an even newer flavor called **AbTAC** — Antibody-based PROTAC — which uses an engineered antibody as the targeting half, rather than a small molecule. The antibody binds the extracellular target with high specificity, and the other end of the AbTAC recruits a cell-surface E3 ligase like RNF43, which can route the complex to the lysosome. AbTACs have the antibody advantages — exquisite specificity, long half-life — combined with the degrader logic. They're being developed by several companies.

A related concept is the **DUBTAC** — DeUBiquitinase TArgeting Chimera — which goes in the opposite direction. Instead of degrading a target, a DUBTAC stabilizes it. The molecule recruits a deubiquitinating enzyme — a DUB — to the target, which removes ubiquitin chains and prevents the target from being degraded. This is useful when you want to _increase_ the level of a protein that's pathologically being destroyed. The classic potential application is in cystic fibrosis, where mutant CFTR protein is rapidly degraded; a DUBTAC could stabilize it and rescue function. DUBTACs are early but conceptually striking — they show that the bifunctional-molecule design space is bigger than just degradation.

Together, LYTACs, AbTACs, DUBTACs, and other variants represent a generalization of the PROTAC idea: bifunctional molecules can recruit any cellular machinery to any target. The original PROTACs recruited E3 ligases to intracellular proteins. The descendants are recruiting lysosomal trafficking systems, deubiquitinases, phosphatases, kinases, and more. The field has discovered that "induced proximity pharmacology" — chemically forcing two cellular components together to enable a new function — is a generalizable principle, with PROTACs as just one application.

---

## SEGMENT 17 — The 600 E3 ligases and the AI frontier

Let me come back to a number I dropped earlier and put real weight on it: six hundred E3 ubiquitin ligases.

The human genome encodes about six hundred different E3 ligases. Each one is potentially a bouncer that could be hijacked by a PROTAC. Each one has different tissue expression, different substrate preferences, different cellular localization. Some are in the nucleus, some in the cytoplasm, some on the membrane. Some are highly expressed in cancer, some in immune cells, some only in specific tissues.

As of 2025, the PROTAC field has practically validated maybe a dozen E3 ligases. CRBN dominates. VHL is second. MDM2, IAP family members, RNF4, RNF114, DCAF15, DCAF16, DCAF11, KEAP1 — a handful of others have small-molecule ligands and have been used in degraders. The other roughly 590 E3 ligases? Largely unexplored. We don't have good small molecules that bind them. We don't know which ones would be useful drug targets. We don't know which ones could provide tissue-specific degradation, or which ones could avoid the CRBN-resistance pathways that early-generation PROTACs face.

This is, in many ways, the great frontier of the field. Imagine if instead of two E3 ligases to choose from, you had a hundred. You could pick the one whose tissue distribution matches your disease — a kidney-restricted E3 for kidney cancers, a liver-restricted E3 for liver disease, a brain-expressed E3 for neurological targets. You could pick the one whose subcellular localization matches your target — a nuclear E3 for nuclear transcription factors, a membrane-bound E3 for membrane proteins. You could rotate between different E3 ligases to combat resistance, the way oncologists rotate between different chemotherapy regimens.

To get there, you need small molecules that bind these other E3 ligases. And finding those is its own research program. Companies and academic labs are now systematically screening compound libraries against orphan E3 ligases, hoping to find drug-like ligands that can be turned into the E3-recruiting half of a PROTAC. This is sometimes called "E3 ligand discovery" and it's one of the hottest fields within the broader PROTAC ecosystem.

\[Pause.\]

The other frontier is AI-driven design of degraders. PROTAC design has been, for years, an art form: you screen many linkers, you test many warhead combinations, you hope to find a productive ternary complex. The geometry of the ternary complex matters enormously, but it's hard to predict from first principles. The same warhead and the same E3 ligand, connected by different linkers, can give wildly different degradation efficiency, because the linker determines whether the ternary complex puts a lysine on the target close enough to the E2 catalytic site.

Computational methods are starting to crack this. AlphaFold and its successors have made it possible to predict protein structures with reasonable accuracy. Newer models — like RoseTTAFold All-Atom, AlphaFold 3, and various PROTAC-specific tools — are starting to predict ternary complex structures, simulate degrader-induced binding poses, and rank linker variants by their predicted productivity. The first AI-designed PROTACs have entered preclinical testing. Companies like Insilico Medicine, Recursion, and Schrödinger have PROTAC discovery platforms that combine generative chemistry with ternary complex modeling. We're at the very beginning of this — none of these AI-designed PROTACs have reached the clinic yet — but the trajectory is clear. PROTAC design is becoming computational in a way that early PROTAC discovery never was.

If you put all this together — six hundred unexplored E3 ligases, increasingly powerful ternary complex prediction, expanding chemical libraries, growing investment in glue discovery — the targeted protein degradation field looks more like the early days of monoclonal antibodies than like a mature drug class. Antibodies started with a handful of approved drugs in the 1990s and grew into hundreds of approved therapies by the 2020s. PROTACs and glues might be on a similar trajectory. We have one or two clinical successes so far. We might have hundreds in twenty years.

---

## SEGMENT 18 — Pan-cancer pipelines and what to watch for

Let me close with the big-picture frame of where the field is going clinically. As of 2025, here's a snapshot you can carry with you.

In oncology, the PROTAC and molecular glue pipelines have expanded into nearly every major cancer type. Prostate cancer: AR degraders, with ARV-766 in Phase 3. Breast cancer: ER degraders, with ARV-471 in Phase 3. Lung cancer: KRAS degraders, EGFR degraders, SMARCA2 degraders. Hematologic malignancies: BTK degraders for B-cell lymphomas, BCL-XL degraders, GSPT1 degraders for AML, next-generation IMiD glues for myeloma. Synovial sarcoma: BRD9 degraders. Pancreatic cancer: KRAS G12C and G12D degraders. Colorectal: APC pathway degraders. Pan-cancer: MDM2 degraders that engage the p53 pathway, MYC-related degraders, transcription factor degraders that hit previously undruggable targets.

The most likely first approval is ARV-471, the estrogen receptor degrader in breast cancer, which is reading out Phase 3 data in 2025 and 2026. Closely behind are several BTK degraders and BCL-XL degraders for hematologic cancers. If you watch the field over the next two years, these are the readouts to follow.

Beyond oncology, there are emerging applications. Neurodegenerative disease: tau degraders for Alzheimer's, alpha-synuclein degraders for Parkinson's, huntingtin degraders for Huntington's. The blood-brain barrier is a real challenge — most PROTACs are too big to cross it — but molecular glues might be more tractable. Inflammation and autoimmunity: IRAK4 degraders, STAT3 degraders, with several in trials for rheumatoid arthritis, psoriasis, and other inflammatory conditions. Infectious disease: hepatitis B antigen degraders, viral protein degraders. Each of these areas is more speculative than oncology, but each has serious programs.

\[Pause.\]

The longer-term vision is more radical. Imagine a future where, for any disease driver protein, you can build a degrader. The undruggable proteome — transcription factors, scaffolding proteins, intrinsically disordered proteins, mutant proteins that resist classical inhibitors — all becomes accessible. You can degrade KRAS in pancreatic cancer, MYC in many cancers, tau in Alzheimer's, alpha-synuclein in Parkinson's. The list of historically untouchable targets — proteins that pharmacologists have spent decades calling undruggable — starts to shrink.

This isn't science fiction. The pieces are real and accumulating. The mechanism is validated in patients. The chemistry, while hard, is improving. The E3 ligase library is expanding. AI is helping design ternary complexes. Money is flowing into the field. The first commercial success — whether it's ARV-471 or some other molecule — will trigger the next wave of investment and the next generation of programs.

If you're going to remember three things from this lecture, make them these:

One. PROTACs flip the pharmacology paradigm from "occupy and inhibit" to "tag and destroy." This is a fundamentally different relationship between a drug and its target. The drug doesn't have to stay on the target; it just has to hand the target to the cellular trash collector, and walk away.

Two. PROTACs are bifunctional — warhead, linker, E3 ligand — and the architecture matters. Molecular glues are single small molecules that achieve the same result without a linker, by reshaping the E3 to recognize new substrates. Both approaches work. Both have advantages and limitations.

Three. The field is no longer experimental. ARV-110 entered patients in 2019. ARV-471 is in Phase 3 in 2025. The first commercial PROTAC approvals are imminent. Targeted protein degradation has crossed from "interesting idea" into "real drug class," and over the next decade it will probably reshape how we think about which proteins are drug targets at all.

The bouncer. The heckler. The shredder. One end grabs the target, the other end recruits the cellular janitor, the janitor tags the target for the trash, and the target is gone — not silenced, not inhibited, but physically destroyed. That's targeted protein degradation. That's what you should walk out of here knowing.

Thank you. Questions?

---

## APPENDIX

**Key terms.**

- **PROTAC** — PROteolysis TArgeting Chimera. A bifunctional small molecule with two binding ends connected by a linker: one end binds the target protein, the other end binds an E3 ubiquitin ligase. The chimera induces ubiquitination of the target and its destruction by the proteasome.
- **Molecular glue** — A single small molecule (no linker) that sits at the interface between an E3 ligase and a neo-substrate, inducing degradation. Thalidomide and its derivatives are the prototype.
- **Ternary complex** — The three-body complex of target protein, PROTAC, and E3 ligase that has to form for ubiquitination to occur. The geometry of this complex determines whether degradation actually happens.
- **Hook effect** — The bell-shaped dose-response curve of PROTACs, where too much drug actually decreases degradation because the warhead and E3 ligand ends saturate their partners separately and the ternary complex can't form.
- **E3 ubiquitin ligase** — One of about 600 enzymes in the human genome that recognize specific protein substrates and arrange for their ubiquitination. The "matchmaker" between the ubiquitin machinery and the target. Hijacked by PROTACs.
- **CRBN (cereblon)** — One of the two dominant E3 ligases used in PROTACs. The molecular target of thalidomide and its derivatives. Easy to recruit with IMiD-like small molecules.
- **VHL (von Hippel-Lindau)** — The other dominant E3 ligase for PROTACs. First small-molecule ligands developed by Ciulli's lab. Useful as an alternative to CRBN, especially for avoiding CRBN-resistance pathways.
- **IMiD (immunomodulatory imide drug)** — The drug class including thalidomide, lenalidomide, pomalidomide, iberdomide, mezigdomide. Discovered to work as molecular glues that recruit CRBN to neo-substrates like IKZF1/3.
- **LYTAC** — LYsosome TArgeting Chimera. Bertozzi's extracellular analog of PROTACs. Routes extracellular and membrane targets to the lysosome via cell-surface trafficking receptors.
- **AbTAC** — Antibody-based PROTAC. Uses an engineered antibody as the targeting half, combined with a cell-surface E3 recruiter, to degrade extracellular targets.
- **DUBTAC** — DeUBiquitinase TArgeting Chimera. The inverse of a PROTAC: stabilizes a target by recruiting a deubiquitinase that removes ubiquitin chains.
- **Beyond rule of five** — Medicinal chemistry territory occupied by PROTACs, which routinely violate Lipinski's classical rules for drug-likeness due to their size and complexity.
- **Catalytic mechanism** — The hallmark advantage of PROTACs: one drug molecule can degrade many target molecules in succession, unlike inhibitors which work one-for-one with their targets.

**Key people.**

- **Craig Crews** — Yale University. Co-invented PROTACs with Ray Deshaies in 2001. Founded Arvinas in 2013. The leading academic figure of the field.
- **Ray Deshaies** — Caltech (formerly), now Amgen. Co-invented PROTACs with Crews. Originally a ubiquitin biologist; brought deep mechanistic understanding of E3 ligases to the project.
- **Alessio Ciulli** — University of Dundee. Designed the first small-molecule VHL ligands in the early 2010s, enabling drug-like VHL-recruiting PROTACs.
- **Hiroshi Handa** — Tokyo Medical University. Identified cereblon as the molecular target of thalidomide in 2010.
- **Bill Kaelin and Ben Ebert** — Dana-Farber. Helped establish cereblon as an E3 ligase and worked out the molecular glue mechanism of IMiDs.
- **Carolyn Bertozzi** — Stanford. Invented LYTACs in 2020, extending degrader pharmacology to extracellular targets. Won the 2022 Nobel Prize in Chemistry for bioorthogonal chemistry.
- **Aaron Ciechanover, Avram Hershko, Irwin Rose** — Won the 2004 Nobel Prize in Chemistry for discovering the ubiquitin-proteasome system, the biological foundation that PROTACs hijack.

**Key dates.**

- 2001 — Crews and Deshaies publish the first PROTAC proof of concept in PNAS.
- 2004 — Nobel Prize for ubiquitin-proteasome system.
- 2008-2012 — First all-small-molecule PROTACs developed; VHL ligands discovered by Ciulli.
- 2010 — Cereblon identified as the target of thalidomide.
- 2014 — IMiDs shown to be molecular glues that recruit CRBN to neo-substrates IKZF1/3.
- 2013 — Arvinas founded by Craig Crews.
- 2015 — C4 Therapeutics founded.
- 2018 — Foghorn Therapeutics founded, focused on chromatin remodeler PROTACs.
- 2019 — ARV-110 enters clinical trials, becoming the first PROTAC ever administered to a human patient.
- 2020 — Bertozzi's group introduces LYTACs.
- 2021 — Arvinas-Pfizer partnership on ARV-471 announced, valued at $650 million up front.
- 2022 — Bertozzi shares Nobel Prize for bioorthogonal chemistry.
- 2024 — VERITAC-2 Phase 3 trial of ARV-471 reads out positively.
- 2025 — Multiple PROTACs in Phase 3 trials; first approvals anticipated.

**Companies to know.**

- **Arvinas** — Founded by Crews. Leading PROTAC company. ARV-471 (ER) and ARV-766 (AR) in Phase 3.
- **C4 Therapeutics** — From Dana-Farber. Multiple clinical-stage degraders.
- **Kymera Therapeutics** — Strong in immunology degraders. IRAK4 and STAT3 programs.
- **Nurix Therapeutics** — One of the earliest TPD companies. BTK degraders in trials.
- **Foghorn Therapeutics** — Chromatin remodeler-focused. SMARCA2 (FHD-909) and BRD9 (FHD-609) programs.
- **Monte Rosa Therapeutics** — Molecular glue specialist.
- **Plexium**, **Cullgen**, **Captor Therapeutics** — Smaller players, varied specializations.
- **Bristol-Myers Squibb** — Acquired Celgene in 2019; inherited the deepest IMiD molecular glue pipeline.
- **Pfizer**, **Roche**, **Eli Lilly**, **AstraZeneca**, **Novartis**, **AbbVie**, **GSK** — All have major partnerships or internal TPD programs.

**Further reading.**

- Sakamoto, Kim, Kumagai, Mercurio, Crews, Deshaies. "Protacs: chimeric molecules that target proteins to the Skp1–Cullin–F box complex for ubiquitination and degradation." PNAS 98(15), 2001. The original paper.
- Burslem and Crews. "Proteolysis-targeting chimeras as therapeutics and tools for biological discovery." Cell 181, 2020. Comprehensive review by the founder.
- Banik, Pedram, Wisnovsky, Ahn, Riley, Bertozzi. "Lysosome-targeting chimaeras for degradation of extracellular proteins." Nature 584, 2020. The LYTAC paper.
- Ciulli and colleagues — series of papers on VHL ligand discovery and PROTAC chemistry through the 2010s and 2020s.
- Ebert and colleagues — series of papers on cereblon mechanism and IMiD molecular glues.
- Trade press: Endpoints News, Fierce Biotech, and BioPharma Dive all cover the targeted protein degradation industry closely.


