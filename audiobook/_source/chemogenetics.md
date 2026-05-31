# Chemogenetics

**A 2-hour undergraduate neuroscience lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to two hours, plus a mid-point break. (Read faster, ~140 wpm, and it lands nearer 90 minutes, leaving room for questions or board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — Controlling cells with drugs

Alright, let's get started. Good morning, everyone. For the next two hours we're going to talk about chemogenetics. And I want to begin, as I always do, with a problem — because chemogenetics, like every good tool in modern neuroscience, is the answer to a problem that wouldn't go away, and once you feel the shape of the problem you'll see why the tool looks the way it does.

Here is the problem. You are a neuroscientist. You have a brain in front of you — a mouse brain, say — and you have a hypothesis. You think that a specific small population of neurons, maybe a few thousand cells in a deep nucleus, is responsible for some behavior. Hunger. Fear. The decision to run rather than freeze. You want to test it. The cleanest test in all of biology is the perturbation experiment: turn the neurons off and see if the behavior goes away; turn them on and see if the behavior appears. If you can manipulate the cells and the behavior tracks, you've got something. If you can't, you've got correlations and arguments.

So the question becomes — how do you turn a few thousand neurons, deep in a live moving mouse, on and off, on demand, without touching anything else? That is a surprisingly hard request to satisfy. You can't just inject a drug; drugs don't know which neurons you mean. You can't just put a wire in; wires excite everything nearby. You can't kill the cells, because then the experiment ends and you can't reverse it. You need a switch that is **specific to the cells you care about, reversible, non-destructive, and triggerable from outside the animal**. Nothing in pharmacology, as it stood thirty years ago, gave you all four properties at once.

\[Pause.\]

Let me sharpen the difficulty. Suppose you decide to use a drug. You pick a drug that activates, let's say, dopamine receptors. You inject it into the mouse. The drug goes everywhere. It activates dopamine receptors in the striatum, in the cortex, in the spinal cord, in the gut, in the heart. Every cell in the body that expresses that receptor sees the drug. You haven't manipulated your few thousand neurons of interest; you've manipulated a few hundred million cells across the entire body. The behavior changes, sure, but you have no idea which population of cells caused the change. The drug is a sledgehammer when you needed a scalpel.

So the central design problem of chemogenetics is this: **how do you build a pharmacological switch that is, by design, off-target free?** How do you give a mouse a drug and have that drug activate exactly the cells you specified and nothing else? Every receptor that the drug might naturally hit is a contaminant. Every cell that expresses that receptor is a confound. To make a clean experiment, you need a receptor-drug pair that has no other reactions in the body — and that pair has to land, somehow, only in the cells you care about.

Hold the shape of that problem in your head. We are going to need two engineering moves to solve it. One is biological — we need a receptor that does not naturally exist in any cell anywhere in the body of the animal, so that wherever it appears, you put it there. Two is chemical — we need a drug that doesn't naturally bind anything in the body, so the only thing that responds to the drug is the receptor we made. Two parallel acts of design. A custom receptor and a custom drug, built to fit each other, and engineered to ignore everything else.

If you walk out of here in two hours and you can do three things — one, sketch the basic DREADD concept and tell me why both ends, receptor and ligand, have to be engineered together; two, explain the difference between chemogenetics and optogenetics in plain English and tell me when you'd pick each one; three, look at any neuroscience paper that uses chemogenetics and tell me, at least roughly, what the experimenters are claiming and what controls they should have run — then we've succeeded. Everything else hangs off those three.

\[Pause.\]

One more thing before we dive in. I want you to think of chemogenetics, throughout this whole lecture, in relation to its more famous sibling — **optogenetics**. Optogenetics is the technique that, in the 2000s, took neuroscience by storm — engineered light-gated ion channels that let you fire neurons with a pulse of laser light delivered through an optical fiber. You've probably heard of it. It's the technique that gets the cover stories.

Chemogenetics is the slower, longer-lasting cousin. Optogenetics flips neurons on and off with millisecond precision, but to do it you have to stick a fiber-optic cable into the brain, and the effect only lasts as long as the light is on. Chemogenetics doesn't need a cable. You give the animal an injection. The neurons stay altered for an hour, two hours, sometimes longer. There's no light, no fiber, no millisecond timing. You can manipulate cells in a freely behaving animal during a long task — through a maze, through a social interaction, through an entire night of sleep — without dragging hardware around with the mouse.

So think of it this way. **Optogenetics is the precision strike** — millisecond stimulation, surgical timing, but tethered to a fiber. **Chemogenetics is the mood adjustment** — hours of altered firing, no hardware, but blunter in time. Both are designer-receptor tricks. Both let you control specific cells. They are complementary, not competitive, and the very best modern papers use them together, which we'll get to in Segment 16. For now, hold the comparison: precision strike versus mood adjustment, fiber versus injection, milliseconds versus hours. That distinction is going to come back over and over.

Alright. Let me show you the trick.

---

## SEGMENT 2 — The DREADD idea

So how do you build a receptor that ignores everything the body has, and responds only to a drug the body doesn't otherwise care about?

Here is the analogy I want you to carry through this whole lecture. Imagine you are designing a doorbell for a house. There's a lock on the front door that the family can open with their keys, and there are also dozens of natural triggers that might cause a doorbell to ring — wind, falling leaves, animals brushing past, the mail carrier, neighbors knocking. A normal doorbell, sitting on the front porch, gets triggered by all of these. It's noisy. It rings all day.

Now imagine you want a doorbell that **only you** can ring, on purpose, when you mean to. You don't want it to ring when the wind blows. You don't want it to ring when a squirrel scampers past. You want it silent except when you press one specific button — a button that no one else in the world has.

The way to build this doorbell is in two steps. First, you change the doorbell itself so that none of the natural triggers — the wind, the leaves, the mail carrier — can activate it anymore. You harden it. You make it deaf to everything it would normally respond to. And second, you build a custom button with a custom signal — a radio code, a particular shape of magnetic key — that only your modified doorbell recognizes. Now you have a closed system. The doorbell ignores the world. Your button rings the doorbell. Nothing else does, and your button doesn't ring any other doorbell in town because none of them are tuned to your signal.

That is the DREADD idea, in concept. **DREADD** stands for **Designer Receptor Exclusively Activated by a Designer Drug**. The first D is the receptor — the doorbell that you've engineered. The second D is the drug — the custom button. The whole point of the name is to advertise that both ends have been redesigned to be private to each other. The receptor doesn't respond to anything that exists naturally in the body. The drug doesn't activate any receptor that exists naturally in the body. They form a closed conversation: drug-talks-to-receptor, receptor-listens-to-drug, and nothing else in physiology participates.

\[Pause.\]

Let me say plainly why this matters. Pharmacology, as a field, has spent over a century building drugs that target the receptors that exist in the body. Aspirin targets cyclooxygenase. Beta-blockers target beta-adrenergic receptors. Antipsychotics target dopamine receptors. The drugs are designed to fit the body's receptors as well as possible — that's why they work. But that's also exactly the problem, if you want to manipulate just one population of cells. Every drug that fits a natural receptor will hit every cell expressing that receptor, everywhere.

The DREADD strategy inverts the problem. Instead of finding a drug that hits a natural receptor, you build a receptor that doesn't exist naturally and a drug that doesn't bind anything naturally. Then you express the engineered receptor only in the cells you care about, using techniques we'll get to in Segment 9. When you give the drug, only those cells respond — because they're the only cells in the entire animal that have the receptor. Every other cell is invisible to the drug. The drug passes through them without effect. The off-target population, in principle, is zero.

That is the breathtaking move. You have, in principle, made a pharmacological switch that has no side effects, because the drug has no targets anywhere except the receptor you installed. The body's natural physiology never sees it. The mouse can walk around with this drug coursing through every tissue, and only the few thousand neurons that have your designer receptor will know the drug is there.

\[Pause.\]

I want to flag, before we go on, that the word "exclusively" in the name turned out to be aspirational rather than literal. The first generation of DREADDs were beautifully selective in cell culture, where you could control conditions, but in living animals, things got messier — and we're going to spend two full segments later on the messiness, because the messiness is itself one of the most important lessons in modern neuroscience. The original drug, **clozapine N-oxide**, turned out to be sneakier than anyone realized, and the field went through a painful but necessary recalibration around 2017. We'll get there. For now, take the principle: an engineered receptor-ligand pair designed to be private to itself. The promise was clean. The execution required work.

So we have a concept. Now let's see how the receptor was actually built — because the chemistry of how you engineer a receptor to ignore its natural ligand and listen to a synthetic one is one of the more elegant tricks in protein engineering, and it starts with a very deliberate choice of starting material.

---

## SEGMENT 3 — The muscarinic backbone

When the lab of **Bryan Roth**, at the University of North Carolina, set out in the mid-2000s to make a DREADD, they didn't start from a blank sheet of paper. Designing a brand-new receptor from scratch is hard, and there was no need — the body is already full of receptors, refined over hundreds of millions of years of evolution, that do exactly the kind of thing you want a chemogenetic switch to do. Roth's group chose to start with an existing receptor and modify it. The question was: which one?

The answer, after a lot of work, was the **muscarinic acetylcholine receptors** — a family of G-protein coupled receptors in the body that normally listen for the neurotransmitter acetylcholine. There are five of them in humans, named M1, M2, M3, M4, and M5. They are spread across the nervous system and the body. M3, M4 and the other muscarinic receptors regulate everything from heart rate to smooth muscle contraction to attention.

Why pick this family? Three reasons, and I want you to hear each one as a small piece of design wisdom.

\[Pause.\]

Reason one: **G-protein coupled receptors are the standard switching unit of the body**. About a third of all prescription drugs target GPCRs. They sit in the cell membrane, they sense things outside the cell, and they trigger signals inside the cell. If you put a GPCR into a neuron and activate it, you can predictably change the neuron's behavior — depolarize it, hyperpolarize it, change its sensitivity. Neurons already know how to interpret GPCR signals. You're not asking the cell to do anything alien. You're plugging into an interpretive machinery the cell already has.

Reason two: **the muscarinic receptors come in two flavors with opposite downstream effects, but identical overall architecture**. M1, M3, and M5 are coupled to a G-protein called Gq, which leads to depolarization — they're broadly excitatory. M2 and M4 are coupled to Gi, which leads to hyperpolarization and inhibition — they silence neurons. Both flavors use the same seven-transmembrane GPCR scaffold; they just connect to different internal partners. So by choosing different members of the same family, you can build both an "on" switch and an "off" switch, with very similar chassis. That'll matter in a moment.

Reason three, and this is the practical one: **the structure-activity relationships of the muscarinic receptors had been worked on for decades**. By the early 2000s, people had a pretty good idea of which amino acid residues lined the pocket where acetylcholine binds. That meant you could go in with mutations and rationally try to break the natural binding pocket — make it stop responding to acetylcholine — without destroying the receptor entirely.

\[Pause.\]

Here's the analogy. Think of the muscarinic receptor as a **car chassis** — a well-understood mechanical platform with the engine, the wheels, the transmission, all already worked out. Engineers don't redesign a car chassis every time they want to build a new model; they reuse the chassis and swap the body. Roth's lab picked the muscarinic chassis because it was well-understood, modular, and came in both excitatory and inhibitory flavors. The body — the part of the receptor that recognizes what to respond to — was going to be modified. The chassis — the part that delivers the signal downstream — was going to be left alone.

The strategy was: take the human M3 receptor, mutate the binding pocket so that acetylcholine, the natural ligand, can no longer bind. Then screen mutants to find one that has accidentally gained the ability to bind a different molecule — ideally, a molecule that isn't normally present in the body. The mutated receptor will be deaf to the natural neurotransmitter and tuned, instead, to the synthetic ligand. The downstream signaling — through Gq, leading to depolarization — will still work, because the chassis is intact.

The mutations they ended up needing were small. Two point mutations to the M3 receptor — one called Y3.33C, one called A5.46G, using a standard residue-numbering system for GPCRs — and the receptor's pocket changes its preferences. Acetylcholine, which used to fit, no longer fits. A new molecule, which we'll meet in the next segment, now fits and activates the receptor. Two amino acid changes, and you have **hM3Dq** — the human M3 muscarinic receptor, with the D for designer baked into the name, and a small q at the end to remind you that it still couples to Gq signaling.

Roth's lab made the corresponding mutations in the M4 receptor to get **hM4Di** — same trick, applied to the inhibitory chassis. And then variants in M1, M2, M5, eventually a stimulatory version using a different chassis called **GsD**, and even later, a receptor based on a different family entirely — the kappa-opioid receptor, giving us **KORD**, activated by a different drug entirely. We'll meet some of those later. But hM3Dq and hM4Di are the workhorses, and they're going to occupy the next two segments — one each, so you can really see what each one does.

\[Pause.\]

Take the conceptual lesson from this segment. **You build a DREADD by starting with an existing GPCR, breaking its natural binding pocket with a small number of mutations, and tuning the pocket to a new synthetic ligand while leaving the downstream signaling chassis intact.** The receptor still functions; it just listens for a different molecule. The cellular machinery never knows anything has changed. Whatever signal the chassis was designed to send, it still sends — but now only when you give the synthetic drug.

That's the engineering recipe. Now let's see what the two main DREADDs actually do, starting with the excitatory one.

---

## SEGMENT 4 — hM3Dq — the activating DREADD

Let's spend a full segment on hM3Dq, because once you understand it, hM4Di is going to be the mirror image.

hM3Dq is the **activating** DREADD. The "h" is for human, because the receptor backbone comes from the human M3 muscarinic gene. The "M3" tells you which muscarinic receptor we started with. The "D" is for designer. The "q" tells you it still signals through Gq, which is the G-protein it was naturally coupled to before the mutations.

When you express hM3Dq in a neuron, and then you give the animal the designer drug, three things happen in sequence. Let me walk through them, because the logic is going to repeat for every DREADD.

\[Pause.\]

First, the drug enters the bloodstream — usually by intraperitoneal injection, which is fast and easy in mice — and circulates through the body. It crosses the blood-brain barrier, if it's the right drug, and reaches the neurons in the brain. Most of the cells in the brain are invisible to the drug. They don't have hM3Dq. The drug washes past them and out the other side. But the cells that you have engineered to express hM3Dq — say, a few thousand neurons in a particular nucleus — have receptors on their surface that the drug can bind. The drug docks into the engineered binding pocket. The receptor activates.

Second, the activated receptor triggers Gq signaling inside the neuron. Gq is the G-protein that lives on the inside of the cell membrane, attached to the receptor; when the receptor activates, the Gq pops loose and runs off to do its job. Gq activates an enzyme called phospholipase C, which cleaves a membrane lipid into two pieces — one called IP3, which triggers calcium release from intracellular stores, and one called DAG, which activates a protein kinase. The calcium release is the key event for our purposes: it drives **depolarization** of the membrane. The neuron's voltage shifts in the direction that makes firing more likely.

Third, the neuron starts firing more. Not in a precisely timed millisecond pattern — Gq signaling is slow biochemistry, not the millisecond electrochemistry of an action potential. Instead, the neuron's baseline firing rate goes up, and it stays up, for as long as the drug is on board. Half an hour, an hour, two hours, depending on the drug's pharmacokinetics. The neuron is in a sustained excited state — not firing wildly, not seizing, but running hotter than it would otherwise.

So hM3Dq is a **gas pedal**. You press it — by giving the drug — and the neurons it's installed in run faster, for as long as the drug lasts. It's not a precise hand on the throttle; it's more like pushing the pedal halfway down and leaving it there for two hours. The effect is sustained, modest, biologically reasonable. The neuron doesn't burn out. It just runs at a higher rate.

\[Pause.\]

Now, what does that buy you experimentally? Suppose you suspect that a particular population of cells in the hypothalamus drives feeding behavior. You express hM3Dq in those cells, you give the drug, and you watch a mouse that wasn't hungry start to eat. The mouse keeps eating for an hour, while the drug is on board. Then the drug wears off, the receptors deactivate, the neurons return to baseline firing, and the mouse stops eating. You've shown that activating those neurons is sufficient to produce feeding. You've established a sufficiency claim, with a clean drug-and-only-drug manipulation.

That kind of experiment — the "I can produce the behavior on demand by activating these specific cells" experiment — was extraordinarily difficult before chemogenetics. You could do it with electrodes, but electrodes activate everything around them. You could do it with optogenetics, but optogenetics requires a fiber implanted in the brain, and the activation lasts only as long as the light is on. With chemogenetics, you give an injection, the mouse roams around freely, the behavior unfolds over a natural time scale, and you can watch the whole thing without hardware. The animal doesn't even know it's been manipulated.

\[Pause.\]

One more thing to notice about hM3Dq before we move on, because it leads us into a recurring theme. The receptor is not a perfect gas pedal. It has a small amount of activity even when the drug isn't present — what's called **constitutive activity** or **leak**. Real cells with hM3Dq expressed in them tend to be slightly more excitable than untransfected cells, even at baseline, because the receptor is always a little bit "on." That leak is usually small, and for most experiments it doesn't matter, but it's worth knowing about, because it's one reason why a properly designed chemogenetic experiment always includes the right controls — mice expressing the receptor but given vehicle instead of drug, mice given drug without expressing the receptor, and so on. We'll talk more about controls in Segment 17.

For now: hM3Dq is your activating DREADD. Human M3 muscarinic backbone, two point mutations to retune the pocket, still signals through Gq, sustained depolarization on the order of an hour. Gas pedal. Hold that image. Now let's flip it over and look at the brake.

---

## SEGMENT 5 — hM4Di — the inhibitory DREADD

Same chassis design, mirror function. hM4Di is your **inhibitory** DREADD — the brake to hM3Dq's gas pedal.

The naming follows the same pattern. The "h" is for human. The "M4" tells you the receptor was built on the human M4 muscarinic backbone. The "D" is for designer. The "i" tells you it couples to Gi — the inhibitory G-protein, the one that produces hyperpolarization and silencing.

The engineering is conceptually identical to hM3Dq. You take the human M4 muscarinic receptor, you introduce mutations that break the binding pocket for acetylcholine, you retune the pocket to the same synthetic ligand. The Gi chassis stays intact. What you end up with is a receptor that, when activated by the drug, silences the neuron rather than exciting it.

\[Pause.\]

Mechanistically, here's what happens when the drug binds hM4Di. Gi gets activated. Gi does two main things. One: it inhibits an enzyme called adenylate cyclase, which lowers the level of cyclic AMP inside the cell — that's the classical Gi effect. Two, and more important for our purposes: Gi opens potassium channels called GIRK channels — G-protein-coupled inwardly rectifying potassium channels. GIRK channels let potassium ions leak out of the cell, and when potassium leaks out, the inside of the cell becomes more negative. The membrane **hyperpolarizes**. The neuron becomes harder to fire.

In addition, Gi tends to inhibit calcium channels at the presynaptic terminal — the place where the neuron releases neurotransmitter onto the next cell. So even if the cell does manage to fire an action potential, less neurotransmitter gets released at its synapses. So hM4Di silences the neuron in two ways at once: it makes the cell harder to fire, and it weakens the cell's output even when it does fire.

The net effect: the neuron, while the drug is on board, goes quiet. It still exists. It hasn't been killed. It just isn't doing much. When the drug wears off, normal firing resumes. Reversible silencing, lasting an hour or two per dose.

\[Pause.\]

Same gas-pedal-versus-brake analogy now. **hM3Dq is the gas pedal, hM4Di is the brake**, same chassis — both built on the muscarinic GPCR family — different downstream signal. One pushes the neuron toward firing, the other pulls it away. The chemistry of building each one is nearly identical; the difference is just which muscarinic subtype you start from, because that determines which G-protein gets engaged.

And experimentally, this is the killer combination. With hM3Dq you can do sufficiency experiments — "activating these cells is enough to produce the behavior." With hM4Di you can do necessity experiments — "silencing these cells eliminates the behavior." If both work for the same cell population — activating them produces the behavior, silencing them eliminates it — you have very strong evidence that those cells are causally responsible for the behavior. Sufficiency plus necessity is the gold standard of causal claims in neuroscience, and chemogenetics lets you run both, in the same mouse line, with the same drug, just by changing which receptor you express.

\[Pause.\]

Let me also flag a subtlety that matters in real experiments. hM4Di silences neurons primarily by **hyperpolarizing them and weakening synaptic release**. It does not destroy the cell, it does not block all activity, and importantly, if you measure the cell with electrodes during DREADD activation, you'll see suppression of firing rate, but not zero firing. The cell can still spike, occasionally, if it's strongly enough driven. The hM4Di brake is a strong brake, but it is not an off-switch. For most purposes — driving a behavioral effect, eliminating the contribution of a circuit — it's plenty. For an experiment that requires absolute silence, you'd reach for something else, like a different chemogenetic tool we'll discuss in Segment 12.

So now you have the two workhorse DREADDs. hM3Dq: muscarinic chassis, Gq signaling, gas pedal, neurons fire more, drug lasts an hour or two. hM4Di: muscarinic chassis, Gi signaling, brake, neurons fire less or stop, drug lasts an hour or two. Same designer drug activates both. The choice of which receptor you express determines which direction the cells move. Beautiful, symmetric, modular.

Now let's talk about that designer drug — the molecule on the other end of the system — because the story of the drug is in many ways more dramatic than the story of the receptor, and it's where the field had its biggest scare.

---

## SEGMENT 6 — CNO as the original ligand

The original designer drug — the one that the first generation of DREADDs were built to respond to — is a molecule called **clozapine N-oxide**, almost always shortened to **CNO**.

Now, the choice of CNO was not arbitrary. To understand why it was chosen, you have to know where it came from. There's a drug called **clozapine**, used in psychiatry — it's an atypical antipsychotic, one of the more effective treatments for schizophrenia, especially for patients who don't respond to other antipsychotics. Clozapine has been around since the 1970s. When the body metabolizes clozapine, it produces a number of breakdown products, and one of those breakdown products is clozapine N-oxide. The N-oxide form is what's called an inactive metabolite — it was thought, at the time, to be biologically inert, just a chemical waste product on the way out of the body.

That apparent inertness was what made CNO attractive as a DREADD ligand. The molecule already existed. It was known to be relatively safe — it had been studied as a metabolite of an FDA-approved drug. It was, by all available evidence in the early 2000s, biologically silent in mammals. No receptor in the body seemed to care about CNO. So Roth's lab took CNO and went looking for mutated receptors that would respond to it, and they found — through directed evolution and rational design — the mutated muscarinic receptors that we now call DREADDs.

\[Pause.\]

Here is the analogy I want to use. CNO was supposed to be the **invisible key**. A molecule that, as far as the body was concerned, didn't exist — no native lock would turn for it, no native receptor would notice it. You could give it to an animal, and the body would treat it as a foreign chemical to be passed through and excreted, with no interesting biology happening along the way. Only the designer receptor — the mutated muscarinic — would recognize CNO as a key and let it in.

For roughly the first decade of chemogenetics — from the original DREADD papers in 2007 through about 2017 — CNO was the default activator, and the field used it in thousands of experiments. People expressed hM3Dq in this or that cell population, injected CNO, watched behaviors change. They expressed hM4Di in other populations, injected CNO, watched behaviors disappear. The field grew up around CNO. Every paper used it. It was the default, the workhorse, the ligand of record.

And for the receptor's job, CNO worked well. It bound hM3Dq and hM4Di with reasonable potency. It didn't bind native muscarinic receptors, by all the standard cell-culture tests. It activated the designer signaling at the doses people used. The mouse behavior tracked the predictions. Papers were published. Conclusions were drawn.

\[Pause.\]

But there was a slow accumulation of warning signs. People who looked carefully at the pharmacology started to notice things that didn't quite add up.

First, there were reports that CNO at high doses, given to mice that didn't express any DREADD at all, sometimes produced subtle behavioral effects. Locomotor changes. Changes in sleep architecture. Small but real. If CNO was truly inert, why was it producing any behavior in mice without DREADDs?

Second, careful measurements of CNO levels in mouse brains, after intraperitoneal injection, found something strange. CNO itself was present in the brain at very low concentrations — surprisingly low, because everyone had assumed the molecule crossed the blood-brain barrier well. But something else, **the parent drug clozapine itself**, was also present in the brain, at levels that, while small, were not negligible.

That observation should make you stop and worry. CNO is supposed to be the metabolite — the breakdown product — of clozapine. Why was clozapine showing up in the brains of mice that had been given pure CNO?

The answer, when it finally became clear, was that **CNO can be back-converted to clozapine** inside the animal. The chemistry that normally turns clozapine into CNO during metabolism can also run in reverse, in some animals and at some rates, turning a fraction of administered CNO back into clozapine. And once you have clozapine in the brain, you have a problem — because clozapine is an antipsychotic. It's a potent ligand at dozens of native receptors. It also, it turned out, binds the DREADDs themselves directly, with even higher affinity than CNO.

So the picture that emerged was this. When you injected CNO into a mouse, only a small fraction reached the brain as CNO. A larger or comparable fraction was back-converted to clozapine, which entered the brain and could either activate the DREADDs directly — fine, that's what you wanted — or activate the dozens of native receptors clozapine naturally hits, which is exactly the kind of off-target effect DREADDs were supposed to prevent.

The "exclusively" in Designer Receptor Exclusively Activated by Designer Drug had a quiet asterisk attached to it. The drug wasn't, in fact, exclusive. It was getting metabolized, in vivo, into a known psychoactive compound with broad receptor affinity. And the field had been doing experiments with this confound for ten years.

\[Pause.\]

The full reckoning came in 2017 — in a paper that's worth its own segment, because of both its scientific importance and the cultural moment it represents. So that's where we're going next.

---

## SEGMENT 7 — The CNO scandal of 2017

In August 2017, a group led by **Michael Michaelides** and colleagues — first author **Juan Gomez** — published a paper in _Science_ called "Chemogenetics revealed: DREADD occupancy and activation via converted clozapine." The paper was a piece of careful pharmacology. It did three things, in sequence, and each thing was a small fact, but together they reshaped how the field thought about chemogenetics.

\[Pause.\]

Thing one. The Gomez group used positron emission tomography — PET imaging, the same technology you've heard about for tracking tumors — to directly visualize where CNO went in the body, in real time, after injection. They labeled CNO with a radioactive tracer and watched it travel. And what they saw was that CNO, as a molecule, **does not cross the blood-brain barrier well in monkeys and humans, and only modestly in rodents**. Most of the injected CNO stays in the peripheral body. Only a small fraction reaches the brain. That alone was a surprise; the assumption for a decade had been that CNO got into the brain efficiently.

Thing two. They measured what _did_ end up in the brain after a CNO injection, and they found that a substantial fraction of the brain signal came not from CNO but from clozapine — the parent compound. The back-conversion they had suspected was real, and quantitatively, it was the dominant route by which the DREADDs were getting activated after CNO administration. The mice's livers were converting some fraction of administered CNO back into clozapine, the clozapine was crossing the blood-brain barrier easily — because clozapine does cross well, it's an antipsychotic, that's its job — and the clozapine was then binding the DREADDs in the brain.

Thing three, and this is the punchline. They showed that **direct, low-dose injections of clozapine itself** — at doses far below those used clinically — produced robust DREADD-mediated behavioral effects in DREADD-expressing animals. In other words, the actual active drug in many chemogenetic experiments was probably not CNO at all. It was clozapine, generated downstream by the animal's own metabolism, in unpredictable amounts.

\[Pause.\]

Now think about what this means for the published literature. Thousands of papers had used CNO. Some of those experiments were probably fine — the DREADD effect dominated, the back-conversion was small or didn't matter. But others might have had a serious confound. The CNO dose used in any given experiment determined how much clozapine ended up in the brain, and clozapine has affinity for **dozens** of receptors beyond the DREADDs — dopamine D2 receptors, serotonin 5HT2A receptors, histamine receptors, native muscarinic receptors, alpha-adrenergic receptors. Any of those could have been contributing to the observed behavioral effects. The "exclusively" in DREADD was, in retrospect, not literally true in many in vivo experiments.

This was, by the standards of neuroscience, a major scandal. Not because anyone had done anything fraudulent — Roth and the people who pioneered DREADDs had been admirably transparent about the pharmacology as it was understood — but because a foundational assumption about a hugely popular technique turned out to be wrong, and a lot of work had to be re-examined in light of the new understanding.

\[Pause.\]

What did the field do in response? Several things, and this is the cultural recovery story.

First, the standard of controls in chemogenetic experiments tightened immediately. After 2017, any well-done chemogenetic paper needs to include not just a vehicle control — saline injection — but a **CNO-without-DREADD control**: a separate group of mice that don't express the DREADD but get the same CNO injection. If those mice show the same behavioral effect as the DREADD-expressing mice, then your "DREADD effect" is actually a CNO effect, mediated by back-converted clozapine acting on native receptors. That control wasn't routinely done before 2017; it became mandatory after.

Second, the dose of CNO used in experiments got reconsidered. Lower doses produce less back-conversion in absolute terms; many labs dropped from doses of 5 or 10 milligrams per kilogram down to 1 or even 0.3 milligrams per kilogram, sacrificing some DREADD activation in exchange for less clozapine contamination.

Third — and this is the most important — the field began actively replacing CNO with **newer ligands** that don't back-convert. Compound 21, deschloroclozapine, JHU37160 — these are designer drugs developed after the CNO problem was understood, designed from the start to avoid metabolic conversion to a clozapine-like species. We'll cover them in detail in the next segment.

\[Pause.\]

I want to draw a broader lesson from this episode, because it's a more interesting lesson than just "CNO turned out to be sneaky." The Gomez paper is a **cautionary tale about assumptions in tool development**. When a new technique enters a field and works well enough that everyone adopts it, there's a strong incentive to treat the technique's assumptions as fixed and turn one's attention to the biology being studied. Nobody wants to spend three years re-validating their tool. But the assumptions are not always right, and when they're wrong, a decade of literature can be partially undermined in a single careful pharmacology paper.

The honorable scientific response — and the response the chemogenetics community largely showed — is to acknowledge the problem openly, design better tools, tighten controls, and reinterpret old results in light of the new understanding. That happened. The field didn't collapse. It got better. Many DREADD findings have been replicated with newer, cleaner ligands, and most have held up. Some haven't, and those have been quietly retracted or revised. That's how science is supposed to work, and chemogenetics is, in retrospect, a fairly clean example of a field that caught a major problem in its own foundations and rebuilt itself.

But the lesson stands. **A technique is only as clean as its dirtiest off-target effect.** And the dirtiest off-target effect is often something you haven't thought to check.

Now let's look at the new generation of ligands that the field built in response.

---

## SEGMENT 8 — Newer ligands: Compound 21, DCZ, JHU37160

After 2017, there was real pressure to find a better designer drug — one that activated the existing DREADDs cleanly, crossed the blood-brain barrier without help, and crucially, did not get back-converted to clozapine or to anything else with native receptor affinity. Several candidates emerged, and three of them are worth knowing by name.

\[Pause.\]

The first is **Compound 21**, sometimes just called C21. It was identified in a 2015 screen — published before the CNO controversy fully broke, but already with an eye toward CNO's issues — as a molecule that activates hM3Dq and hM4Di with good potency. The key feature of Compound 21 is that it's structurally distinct from clozapine. It doesn't get back-converted to clozapine. It crosses the blood-brain barrier reasonably well. And it has very low affinity for native receptors. So in principle, it's a cleaner replacement.

The catch with Compound 21 is that its potency at the DREADDs is somewhat lower than clozapine's, and its pharmacokinetics — how fast it's absorbed, how long it stays around — are different from what people had become used to with CNO. Switching from CNO to Compound 21 in an established protocol isn't free; you have to recalibrate doses and timings. Some labs use it. Others have moved on to even better options.

\[Pause.\]

The second, and probably the most popular replacement, is **deschloroclozapine**, almost always shortened to **DCZ**. The name tells you exactly what it is: clozapine minus a chlorine atom. The molecule was published in 2020 by a team in Japan led by **Takafumi Minamimoto** as a high-affinity, brain-penetrant DREADD agonist that retains the strong binding to hM3Dq and hM4Di that clozapine has, but lacks much of clozapine's promiscuous binding to other receptors.

DCZ is, in many ways, the closest thing the field has to a clean ligand. It's potent — you can use much lower doses than with CNO, often a hundredth as much. It crosses the blood-brain barrier easily, so almost all of what you inject ends up in the brain. It doesn't back-convert to clozapine, because it's already missing the chlorine. And at the low doses needed for DREADD activation, its off-target binding is minimal. Many labs that started with CNO have switched to DCZ, especially for primate work where the back-conversion problem was worst.

\[Pause.\]

The third class is the **JHU compounds** — JHU37160 and JHU37152, developed at Johns Hopkins, which is where the JHU comes from. These were published in 2019 by a group including some of the same people who'd shown the CNO problem. They were designed from the start as alternatives, with high affinity for hM3Dq and hM4Di, good blood-brain barrier penetration, and minimal back-conversion or off-target activity. They're particularly useful for PET imaging applications, because radio-labeled versions of these compounds can be used to non-invasively visualize where DREADDs are expressed in a living animal — which is enormously useful for primate work.

\[Pause.\]

Here is the take-home picture I want you to carry. **CNO is the original designer drug — and it turned out to have a back-conversion problem. The newer ligands — Compound 21, DCZ, JHU37160 — are the cleaner replacements, designed not to back-convert.** Any chemogenetic experiment done today should be designed with awareness of the ligand pharmacokinetics and should not default to CNO without thinking about it. If you're starting a new project, DCZ is probably the right first choice, with appropriate controls.

The broader lesson, again: the receptor was the elegant piece of engineering, but the **ligand is half the system**, and the field's first ligand wasn't good enough. The fix took ten years and required serious medicinal chemistry. That's how tool development goes. You don't get the whole solution at the start; you get it in pieces, and the field iterates until it works.

Now let me switch from the chemistry of the ligand back to the biology, because there's one more piece of the chemogenetic system we haven't talked about yet, and it's the piece that lets you put the receptor only in the cells you care about. Without it, none of this works.

---

## SEGMENT 9 — Cre-dependent DREADD expression

Everything I've described so far assumes you can get hM3Dq, or hM4Di, into exactly the population of cells you want to manipulate — and only those cells. If your DREADD ends up in every neuron in the brain, then giving the drug activates every neuron, and you've just made the same sledgehammer that motivated the field in the first place. The "exclusively" in DREADD applies not just to the ligand, but also to the cells. You need the receptor to be in your cells of interest and nowhere else.

So how do you put a gene into only some cells? This is one of the great workhorse problems of modern neuroscience, and the solution that dominates the chemogenetics literature is a combination of two technologies: **viral delivery** for getting the DNA into brain tissue at all, and the **Cre-lox system** for restricting expression to specific genetically defined cell types. Let me walk through both.

\[Pause.\]

The viral delivery part is fairly direct. You take an **adeno-associated virus**, or AAV — a small, harmless virus that's been engineered to be a delivery vehicle, not a real pathogen — and you load it with the DNA encoding your DREADD. You inject a small volume of this virus directly into the brain region you care about, using a fine needle through a tiny hole in the skull. The virus diffuses through the local tissue and infects nearby neurons. Once inside the cell, the DREADD-encoding DNA is delivered to the nucleus and starts being expressed. After a few weeks, the neurons that the virus reached are now studded with DREADDs on their membranes. Inject your designer drug, and those neurons respond.

That gets you spatial targeting — you can localize expression to one brain region by injecting only there. But it doesn't get you cell-type targeting. Within a single brain region, there are usually many kinds of neurons mixed together — excitatory and inhibitory, different developmental classes, different projection targets. A pure AAV injection hits all of them indiscriminately. If your hypothesis is about, say, parvalbumin-positive interneurons specifically, you don't want hM3Dq in every neuron in the region. You want it in the parvalbumin neurons only.

That's where Cre-lox comes in. And here's where the elegance really shows up.

\[Pause.\]

Here is the analogy. **Cre-dependent expression is the GPS** for DREADDs. Only neurons that meet a particular genetic criterion — neurons that already express the Cre enzyme in their nucleus — get the receptor. Every other neuron in the injection area gets the DNA, but doesn't turn it on. The Cre enzyme acts as the address check: if the cell has Cre, it expresses the DREADD; if it doesn't, the DREADD gene stays silent.

The mechanism is a clever piece of molecular biology. **Cre** is a recombinase enzyme from a bacterial virus. It recognizes specific short DNA sequences called **loxP sites** and cuts the DNA between any two loxP sites, joining the cut ends back together. If you put two loxP sites flanking a piece of DNA, Cre will excise that piece. If you put two loxP sites in opposite orientations flanking a piece of DNA, Cre will flip the piece. That's the trick.

The standard chemogenetic construct is called a **double-floxed inverted ORF**, abbreviated DIO, or sometimes a FLEX cassette — different names for essentially the same architecture. Here's what's in it. You take the gene encoding your DREADD — the open reading frame, the ORF — and you put it into the AAV genome **backwards**. Upside down. The wrong orientation for being read by the cell's transcription machinery. If you just injected this construct into a neuron, the cell would try to read the DREADD gene, fail because it's backwards, and make nothing. The DREADD doesn't get expressed.

Now you flank that backwards DREADD ORF with two pairs of loxP sites, arranged so that when Cre acts on them, it flips the ORF into the correct orientation and locks it there. **The construct is inert until Cre shows up.** No Cre, no flip, no DREADD. With Cre, the ORF gets flipped right-side-up and the cell starts making DREADDs.

\[Pause.\]

The brilliance is in how you get Cre into only the cells you want. The neuroscience community has, over the last twenty years, built up a huge collection of **Cre driver lines** — mouse lines in which the Cre gene has been inserted under the control of a cell-type-specific promoter. There's a parvalbumin-Cre line, in which Cre is expressed only in parvalbumin-positive interneurons. There's a Drd1-Cre line, with Cre only in dopamine D1 receptor-expressing neurons. There's a Vgat-Cre, a Vglut2-Cre, a tyrosine hydroxylase-Cre, and so on — dozens of these lines, each one giving you genetic access to a different cell type.

So the standard chemogenetic experiment now looks like this. You pick the cell type you care about. You pick a Cre line in which Cre is expressed in those cells. You take a mouse from that line. You inject AAV carrying a Cre-dependent DREADD construct — DIO-hM3Dq, say — into your brain region of interest. The virus infects all the local neurons. Only the ones expressing Cre — the parvalbumin neurons, in our example — flip the construct and start expressing the DREADD. Every other neuron remains DREADD-free. You wait a few weeks for expression to develop. Then you inject the designer drug.

When the drug arrives, only the parvalbumin neurons in your injected region respond. Every other neuron in the brain, including the parvalbumin neurons in other regions and the non-parvalbumin neurons in the injected region, is invisible to the drug. You have, in principle, **manipulated a single genetically defined cell type in a single anatomical region**, in a freely behaving animal, with an intraperitoneal injection. That is an extraordinary degree of precision.

\[Pause.\]

Two more refinements worth knowing about, because they come up in real experiments. First, you can use **two recombinases at once** — Cre plus another one called Flp — to require that a cell express both before it expresses the DREADD. This gives you "intersectional" targeting: you can label cells that express marker A _and_ marker B, but not cells that express either alone. Even finer cell-type specificity. Second, you can use **retrograde AAVs** that infect axon terminals and travel backwards to the cell body, letting you express DREADDs in only those neurons that project to a particular brain region. So you can manipulate not just a cell type, but a cell type defined by its projection target. The combinatorics are extraordinary.

Take the take-home: **Cre-dependent expression is the GPS that gives your DREADD an address. Without it, you've installed a gas pedal in every car in the city. With it, you've installed the gas pedal in exactly the taxi fleet you wanted, leaving every other car untouched.**

That's the technique stack. Receptor, ligand, targeting. Three independent pieces of engineering that have to all work together for a chemogenetic experiment to mean anything. Now let's take a break before we get into the behavioral and translational work that all this enables.

\[BREAK — approximately 1 hour elapsed.\]

---

## SEGMENT 10 — The behavioral experiment in chemogenetics

Welcome back. Before the break, we built up the chemogenetic toolkit piece by piece — the receptor, the ligand, the cell-type targeting. Now I want to spend a segment on what experiments actually look like, in practice, because the texture of chemogenetic experiments is genuinely different from optogenetic ones, and the difference matters for what kinds of questions you can ask.

\[Pause.\]

Here is the picture. You have a mouse. You've expressed hM4Di — the inhibitory DREADD — in a specific population of neurons in, let's say, the basolateral amygdala. The amygdala is involved in fear and anxiety. Your hypothesis is that these particular cells are required for sustaining fear-related behavior over long time scales — not just the millisecond response to a fear cue, but the lingering anxious state that follows a frightening experience.

You're going to test this by silencing these cells during a behavioral task. Here's how the experiment runs.

About thirty to forty-five minutes before the behavior, you inject the mouse with the designer drug. You wait. During that wait time, the drug is being absorbed, crossing into the brain, finding its way to the engineered receptors. The receptors activate. Gi signaling kicks in. The neurons in your population start to hyperpolarize and quiet down. By the time you start the behavior, the cells are silenced.

Now you put the mouse in the test chamber and run your task — say, a context where the mouse previously received a foot shock. You watch what happens for the next hour. The mouse explores. It freezes, or doesn't freeze. It approaches the wall, or stays in the center. You record everything. At the end of the session, you compare this mouse's behavior with that of control mice — mice that got the drug but don't express the DREADD, mice that express the DREADD but got vehicle, and so on.

Then, a few days later, you can run the same mouse again, this time with vehicle instead of drug — the DREADD-expressing neurons are now firing normally — and watch how that same mouse, off the drug, behaves in the same context. Within-subject comparison. Same animal, same neurons, with and without silencing. Powerful design.

\[Pause.\]

Now, contrast this picture with what an optogenetic experiment of the same hypothesis would look like. Optogenetics would let you silence the same neurons with millisecond precision, using a fiber-optic cable implanted into the brain delivering light pulses. You could silence the cells only during specific seconds of the behavior — only during the freezing episodes, say — and watch what happens. The temporal resolution is exquisite. But you'd have to surgically implant the fiber, tether the mouse to a light source during the behavior, and your manipulation would be timed in seconds rather than hours.

Chemogenetics gives you the **mood adjustment, not the precision strike**. You can't ask "what does this cell do during exactly this moment of the behavior?" — chemogenetics doesn't have that resolution. But you can ask "what happens to behavior over the course of an hour if this population of cells is silenced throughout?" That kind of long-time-scale question, in a freely behaving, untethered animal, is exactly what chemogenetics is for.

This is also why chemogenetics has been so important for studying behaviors that unfold over long time scales. Sleep architecture. Feeding patterns. Social behavior. Decision-making in extended tasks. Drug self-administration over hours. These are all things you can study chemogenetically that are awkward or impossible with optogenetics, because the relevant time scales are minutes to hours, the animals need to move freely without cables, and the question isn't about millisecond timing but about the sustained contribution of a circuit to a slowly unfolding behavior.

\[Pause.\]

There's also a practical advantage worth flagging. Chemogenetics is **technically much easier** than optogenetics in many setups. No fiber surgery. No light source. No tethering. No worries about light heating tissue. No issues with the fiber blocking video tracking. You inject the AAV once, wait a few weeks for expression, and from then on the experiment is "give an injection, run the behavior." For long longitudinal experiments — studying a mouse over weeks or months — chemogenetics is dramatically simpler to maintain. Many labs use chemogenetics as their first-pass tool and optogenetics only for the experiments that specifically require temporal precision.

The deeper point: the choice of tool should follow the question. If your question is millisecond-resolved — "what is the precise role of this circuit in the moment of this stimulus?" — go for opto. If your question is about sustained contributions to behaviors over minutes to hours — "is this circuit necessary for this state, this rhythm, this drive?" — go for chemo. Both are designer-receptor tricks, both are exquisitely cell-type-specific, both are reversible. They live in different parts of the temporal landscape, and the modern circuit neuroscientist keeps both in their toolkit.

---

## SEGMENT 11 — Chemogenetics in non-neural tissue

So far we've been talking exclusively about neurons. But there's no reason chemogenetics has to be restricted to brain cells. The DREADD machinery is just an engineered GPCR — and GPCRs work in essentially every cell type in the body. Once the field figured out that DREADDs could control neurons, people started asking, very naturally, what else they could control. The answer turned out to be: just about anything.

\[Pause.\]

Let me give you three examples to illustrate the breadth.

**Example one: pancreatic beta cells.** Beta cells in the pancreas secrete insulin in response to elevated blood glucose. They do this by depolarizing in response to glucose-driven changes in their internal metabolism, which triggers calcium entry, which triggers insulin release. Now imagine you want to control insulin secretion directly — not through glucose, but on demand, for experimental or eventually therapeutic purposes.

Express hM3Dq in beta cells. The Gq signaling that hM3Dq triggers depolarizes the beta cell exactly the way glucose-driven signaling does. Give the designer drug, and you've forced insulin secretion. Conversely, express hM4Di in beta cells, and you can shut down insulin release on demand. There are real research programs developing this as a tool both for understanding diabetes biology and, more speculatively, as a future therapeutic platform — a way to give patients dynamic control over their insulin secretion through a drug that activates beta-cell-specific DREADDs.

**Example two: immune cells.** Macrophages, T cells, and other immune cells can be engineered to express DREADDs as well. When you activate hM3Dq in a macrophage, you push it toward an activated, inflammatory state. When you activate hM4Di in the same cells, you tone down their activation. This has been used to dissect, in animal models of disease, what happens when specific subpopulations of immune cells are activated or silenced in specific tissues — useful for understanding autoimmune disease, cancer immunology, and infection biology.

**Example three: smooth muscle.** Blood vessels contract and relax based on signaling in their smooth muscle wall. Express DREADDs in vascular smooth muscle, and you can control vessel diameter — and therefore blood flow — on demand. Same trick has been done with airway smooth muscle, gut smooth muscle, and uterine smooth muscle. Any tissue whose function is governed by GPCR-style signaling is, in principle, a candidate for chemogenetic control.

\[Pause.\]

The point I want to make is conceptual. **Chemogenetics is not a neuroscience tool. It's a tool for controlling any cell type whose function can be modulated by GPCR signaling**, which is most cell types in the body. The reason it's mostly been deployed in neuroscience is partly accident — Roth is a neuropharmacologist, the techniques for cell-type-specific expression are most developed in the brain, the questions that motivated the development were neural — but the underlying technology travels. Any organ system where you can deliver an AAV and express a GPCR has, in principle, access to chemogenetic control.

This becomes especially exciting when you think about translational applications. Imagine being able to dynamically control insulin secretion in a diabetic patient, blood pressure in a hypertensive patient, immune activity in an autoimmune disease — all through engineered receptors that respond only to a specific synthetic drug. We're not there yet, for many reasons we'll discuss later, but the basic principle is in hand. The chemogenetic platform is, in principle, organ-agnostic.

For the rest of this lecture, we'll mostly stick to neuroscience examples, because that's where the literature is densest and the questions are clearest. But hold this expansion in your head: the toolkit extends, and the most interesting future applications may be outside the brain entirely.

---

## SEGMENT 12 — PSAMs and PSEMs

DREADDs are not the only chemogenetic tool. They are by far the most popular, but they have one important limitation that motivates a second-generation toolkit: they signal through G-proteins, which is biochemistry, which is slow. Even a "fast" hM3Dq response takes seconds to minutes to develop after drug arrival, because Gq signaling has to ripple through phospholipase C, IP3, calcium release, and so on. For experiments where you need faster control of neural activity — sub-second changes rather than minute-scale ones — DREADDs aren't ideal.

So a different class of chemogenetic tool was developed, based on a completely different chassis. Instead of engineering a GPCR, you engineer a **ligand-gated ion channel** — a receptor that, when bound by its ligand, opens directly to let ions flow. No second messengers, no cascade, just immediate ionic current. Much faster.

\[Pause.\]

The dominant example is the class called **PSAMs and PSEMs** — Pharmacologically Selective Actuator Modules, and the matching Pharmacologically Selective Effector Molecules. PSAMs are the engineered receptors; PSEMs are the engineered ligands. The naming is parallel to DREADDs and CNO, but the underlying molecule is different.

PSAMs were developed by **Scott Sternson** and colleagues, originally at Janelia Research Campus, and they're built on the ligand-binding domain of the alpha-7 nicotinic acetylcholine receptor. The alpha-7 nicotinic receptor is a natural ligand-gated ion channel — when it binds acetylcholine, it opens and lets ions through. The PSAM trick is to take the ligand-binding part of this receptor and mutate it so that it no longer responds to acetylcholine, but instead responds to a designer molecule called a PSEM. Then you fuse this engineered ligand-binding domain onto the ion-conducting part of a different channel — a glycine receptor channel, for instance — to control what kind of ion flows when the receptor opens.

So you can build a PSAM-glycine receptor: engineered binding domain, glycine receptor pore, opens to let chloride in when the PSEM ligand arrives. Chloride entering a neuron makes it harder to fire — you've silenced the cell, fast, in milliseconds, with a drug. Or you can build a PSAM-serotonin receptor: engineered binding domain, serotonin receptor pore, opens to let cations in when the PSEM arrives. Cations entering a neuron depolarize it — you've activated the cell, fast, with a drug. The modularity lets you build a small family of fast chemogenetic tools that complement the slower DREADDs.

\[Pause.\]

Here's the analogy I want you to carry. **DREADDs are the slower, biochemistry-driven first generation. PSAMs are the second-generation toolkit — ligand-gated ion channels instead of GPCRs, with custom pharmacology, and millisecond-scale kinetics rather than minute-scale.** Think of them as a different point in the speed-versus-simplicity trade-off space. DREADDs are simpler, more popular, slower. PSAMs are faster, more complicated to engineer, and have a smaller user base, but they fill the gap when speed matters.

The other advantage of PSAMs is that the off-target story is, in many ways, cleaner — the PSEM ligands like PSEM-89 or PSEM-308 are not based on a clinically used drug like clozapine, so they don't have a pre-existing problem with back-conversion to a psychoactive species. The pharmacology was designed from scratch with cleanliness in mind, after the CNO controversy had taught the field what to watch for.

PSAMs are less widely used than DREADDs, partly because the field had so much momentum behind DREADDs already, partly because the ion channel chassis is harder to engineer than the GPCR one. But for specific kinds of fast chemogenetic manipulation, they're the right tool. The takeaway: **chemogenetics is not just DREADDs. It's a family of techniques, with DREADDs as the popular eldest sibling and PSAMs as the speedier younger one.**

---

## SEGMENT 13 — Chemogenetic transcription factors

So far, every chemogenetic tool we've discussed acts on the membrane — receptors that change ion flow, or change short-term signaling, with effects that wash out when the drug clears. But there's another flavor of chemogenetics that operates at a completely different layer of the cell: at the level of **gene expression**.

The idea is to build a transcription factor — a protein that turns genes on — that is itself controlled by a designer drug. You can then put your gene of interest under the control of this drug-inducible transcription factor, and turn that gene on, in any cell type you want, by giving the drug. It's chemogenetics for the genome.

\[Pause.\]

The most famous example is the **Tet system** — short for tetracycline-controlled gene expression. The Tet system uses a modified transcription factor derived from a bacterial protein that naturally responds to the antibiotic tetracycline. In its engineered form, you have a transcription factor that, when tetracycline (or its derivative doxycycline) is present, either turns gene expression on or turns it off — depending on which variant of the system you're using. The Tet-On version turns genes on when doxycycline is given; the Tet-Off version turns them off.

The mechanism is a clean piece of evolved biology repurposed. The bacterial transcription factor binds to a specific short DNA sequence called a tet operator. You engineer that operator into the promoter region of the gene you want to control. You put the modified transcription factor into the cell. Give doxycycline, and the transcription factor either falls off the operator (Tet-Off) or binds to it (Tet-On), and gene expression changes accordingly.

Why is this useful? Because it gives you **temporal control of gene expression in a living animal**. You can engineer a mouse in which a particular gene — a fluorescent reporter, an oncogene to drive a tumor, a therapeutic protein — is only expressed when the mouse is on doxycycline. Take the doxycycline away, expression shuts off. The mouse becomes, in a sense, a switch.

\[Pause.\]

This is conceptually a different kind of chemogenetics than DREADDs. DREADDs are about controlling cell activity moment to moment. Inducible transcription systems are about controlling gene expression on time scales of hours to days. Both use designer drugs. Both achieve specificity by engineering a protein to respond to a molecule the body doesn't naturally produce. But the layer they operate on is different — membrane signaling versus genome activity.

Newer inducible systems extend the idea. **CreER** is a version of Cre recombinase that's been fused to a modified estrogen receptor; Cre only enters the nucleus and acts on DNA when you give the synthetic ligand tamoxifen. This lets you trigger Cre-mediated recombination at exactly the time point you choose, which is how a lot of modern conditional knockout experiments are done. **Light-inducible Cre**, **DREADDs that activate transcription factors instead of G-proteins**, and a whole expanding family of related tricks all play in the same conceptual space.

The unifying principle: **a drug can be used as a remote control not just for cell activity but for gene expression itself.** Anywhere in the cell where you can engineer a protein to respond to a designer ligand, you have, in principle, a chemogenetic tool. The toolkit is broader than just DREADDs, and at the boundaries it shades into the broader field of "controllable biology" that's reshaping experimental design across all of molecular biology.

---

## SEGMENT 14 — Optogenetics vs chemogenetics

I've been making the optogenetics-versus-chemogenetics comparison piecemeal through this whole lecture. Let me now do it explicitly, side by side, because the choice between these two tools is one of the most common decisions a circuit neuroscientist has to make, and getting the trade-offs right matters.

Both are designer-receptor techniques. Both let you control specific cell populations in a freely behaving animal. Both have transformed the field. They are complementary, not competing, and most modern circuit labs use both. The question is when you reach for which.

\[Pause.\]

Here is the full table, in narrative form.

**Timing.** Optogenetics is millisecond-precise. You can fire a neuron during one specific 5-millisecond window in a behavior and silence it during the next 5-millisecond window. Chemogenetics is minute-to-hour-scale. The drug takes 20 to 40 minutes to reach peak effect after injection, and the effect lasts 1 to 4 hours depending on the ligand. **Opto is the surgical scalpel of timing; chemo is the slow tide.**

**Hardware.** Optogenetics requires a fiber-optic cable implanted into the brain, connected to a laser or LED. The animal is tethered to the light source — modern systems use slip rings to let the mouse rotate, but the fiber is always present. Chemogenetics requires only that you can give the animal an injection. No implants beyond the initial viral injection (which leaves no residual hardware), no tethers, no fiber. **Opto is hardware-heavy; chemo is hardware-free.**

**Cell-type specificity.** Both use AAV plus Cre-dependent expression for cell-type targeting, so this is a wash — both can be exquisitely specific, both rely on the same set of Cre driver lines and viral tricks.

**Reversibility.** Both are reversible. Opto reverses the instant you turn off the light. Chemo reverses as the drug clears, over the course of an hour or two. Both let you run within-subject before/after comparisons.

**Off-target effects.** Optogenetics has very few off-target concerns in the brain itself — light doesn't activate native receptors. But the light itself can heat the tissue slightly, especially at high powers, which can independently affect neural activity. Chemogenetics has the off-target ligand problem we discussed at length — CNO back-conversion, and so on — which is why proper controls matter so much. **Opto's main confound is thermal; chemo's main confound is metabolic.**

**Behavioral access.** This is where the choice really matters. If your behavioral question requires manipulating cells with millisecond precision during a fast task — say, optimizing a decision in the middle of a perceptual judgment — you need optogenetics. If your question involves long behaviors in freely moving animals over hours — sleep, feeding, anxiety states, complex social interactions — chemogenetics is often a better fit. **Opto is the precision strike, deployed against a moment. Chemo is the mood adjustment, deployed across a session.**

\[Pause.\]

In practice, the best papers use both. A standard pattern is: use chemogenetics to establish the broad necessity or sufficiency of a circuit ("silencing these cells for an hour eliminates the behavior"), then use optogenetics to dissect the temporal dynamics ("silencing these cells specifically during the choice phase eliminates the effect, but silencing them during the approach phase doesn't"). The two tools answer different layers of the question. Chemogenetics tells you the circuit is involved. Optogenetics tells you when in the behavior it's doing its work.

Take the simple decision rule. **Need fast and timed? Use opto. Need long and free-moving? Use chemo. Need the full answer? Use both.** That's the modern standard.

---

## SEGMENT 15 — Chemogenetics in primates

A key reason chemogenetics has been so important in the broader translational pipeline is that it scales to primates much more easily than optogenetics does. And for any biology that ultimately wants to inform human therapy, primate work is often an essential intermediate step.

\[Pause.\]

Here's the problem with optogenetics in primates. Optogenetics requires fiber-optic implants in the brain, delivering light at high intensity to small volumes of tissue. In a rodent, you can implant a single thin fiber and reach a substantial fraction of a brain region. The primate brain is much larger — hundreds of times the volume of a mouse brain — and the relevant brain regions are correspondingly bigger. To get optogenetic activation across an entire functional region in a monkey, you need either multiple fibers spread out across the tissue, or extremely powerful light sources, or both. The surgery is much more invasive, the area you can reach is proportionally much smaller, and the practical challenges are serious.

Chemogenetics doesn't have any of those problems. A primate gets an injection of designer drug, the drug circulates through the whole brain, and every neuron expressing the DREADD — no matter how widely distributed across a large brain region — responds. There's no spatial limit imposed by light penetration. You can express DREADDs across whole nuclei, in multiple regions, in animals as large as you like, and a single injection activates all of them simultaneously.

That has made chemogenetics the dominant circuit manipulation tool in monkey neuroscience for the last decade. Labs working on monkeys to study learning, decision-making, social behavior, addiction — many of them now use DREADD-based approaches, often with DCZ as the activator because of its excellent properties at the doses primates need.

\[Pause.\]

This matters for the translational pipeline because, for any neural target that might eventually become a human therapy, you typically want primate evidence before you proceed. Monkey work is expensive, slow, and ethically demanding, but it's the closest model we have for the human brain, and demonstration of an effect in monkeys is a meaningful step toward eventual clinical application.

The translational dream — and it is still a dream, not yet a reality — is **therapeutic chemogenetics in humans**. The pitch would go something like this. A patient has Parkinson's disease, or treatment-resistant depression, or severe epilepsy. You identify a specific cell population in the patient's brain that, if its activity were modulated, would improve symptoms. You give the patient an AAV injection that delivers a Cre-dependent DREADD construct, restricted to that population through some genetic targeting strategy. The patient now has DREADDs in their target cells. To control their symptoms, they take a pill — a designer drug that activates the DREADDs and modulates the circuit on demand.

That dream is not yet reality. The obstacles are large — getting AAV safely into the human brain, achieving the right cell-type specificity in humans (where Cre lines don't exist), ensuring the designer drug is truly safe over long-term human use, regulating the whole package as a therapy. But the pieces are individually advancing. AAV-based gene therapy is now FDA-approved for several conditions, including some neurological ones. Cell-type-specific AAV serotypes for human use are being developed. And the chemogenetic platform itself is improving.

\[Pause.\]

So watch this space. **Chemogenetics in primates is the translational bridge** — the demonstration that the technique works in brains structurally similar to ours, paving the way for eventual clinical application. The first proof-of-principle human chemogenetic therapy is probably more than a decade away, but the trajectory is real, and the underlying tools are getting better every year.

For now, the primate work is where the technology is being stress-tested for translation. If chemogenetics works robustly and safely in monkeys over years of use — which is what the current generation of long-running primate studies is testing — then the case for human trials gets stronger. The field is, in a real sense, walking the tool from mouse to monkey toward man, and the stops along the way teach us what works and what needs fixing.

---

## SEGMENT 16 — Combining DREADDs with optogenetics

Now let me describe a class of experiment that's emerged in the last few years, where chemogenetics and optogenetics are used **in the same animal, at the same time, on different cell populations**, to control multiple variables at once. These are the kinds of experiments where modern circuit neuroscience flexes its full toolkit, and they let you ask questions that neither technique alone could answer.

\[Pause.\]

Here's the setup. Suppose you have two cell populations in two different brain regions, and you want to know how they interact. Population A is in cortex. Population B is in striatum. You suspect that A drives B during a particular behavior, and you want to test the contribution of each to the behavior, plus the dependence of B's activity on A's activity.

You could do this with chemogenetics alone, but you'd lose temporal resolution. You could do it with optogenetics alone, but you'd need two fiber implants in two regions, and you'd need to maintain millisecond-precise control of both populations during the entire experiment, which is hardware-intensive.

The clever modern approach: **use chemogenetics for the sustained background manipulation, and optogenetics for the precision query.** Express hM4Di in population A, the cortical cells. Express channelrhodopsin — the standard optogenetic activator — in population B, the striatal cells. Now, in a single experimental session, you can silence population A throughout — by giving the designer drug — and then ask, with optogenetic stimulation of population B, what happens to behavior when you fire B in isolation versus when B is silenced because its upstream input from A is gone.

The chemogenetic manipulation sets the background condition. The optogenetic manipulation queries within that background. You're controlling all the variables of interest — slow stuff with chemo, fast stuff with opto — in the same animal, in the same session.

\[Pause.\]

This is the "control all the variables" pattern, and it lets you ask much more incisive questions than either tool alone. You can ask, for instance: is the contribution of cortical input A to the behavior _via_ the activity of striatal cells B, or is it via some other pathway? If you silence A and optogenetically rescue B's activity, does the behavior come back? If yes, then A's job was just to drive B. If no, then A is doing something else as well.

You can also do the reverse pattern: chemogenetically activate one population while optogenetically silencing another at specific moments. Or use two different chemogenetic tools that respond to different drugs — DREADD plus KORD, for instance, since KORD responds to salvinorin B rather than CNO — to independently manipulate two populations on slow time scales without an optogenetic fiber. The combinatorics get rich.

\[Pause.\]

The broader principle is: **chemogenetics and optogenetics live in different parts of the time scale, and they can be used together rather than in competition.** A modern circuit-dissection paper might have three or four manipulations layered on each other, each addressing a different aspect of the circuit. That's the state of the field. The simplicity of the chemogenetic injection — no hardware, no fiber, just a drug — makes it easy to layer underneath an optogenetic experiment, providing the slow contextual manipulation while opto handles the fast queries.

If you're reading a paper that uses both techniques in the same animals, you're looking at the leading edge of modern circuit work. Five years ago this would have been remarkable; today it's becoming standard practice in well-equipped labs. The tools have matured to the point that experimental design is increasingly limited not by what's technically possible, but by what questions you can think to ask.

---

## SEGMENT 17 — Pitfalls

Let me spend a segment on the things that go wrong in chemogenetic experiments, because as a working scientist or as someone reading the literature, knowing the pitfalls is at least as important as knowing the strengths.

\[Pause.\]

**Pitfall one: leaky expression.** I mentioned earlier that DREADDs have a small amount of constitutive activity — they're a tiny bit "on" even without ligand. In most experiments this doesn't matter, but in some it does. If your hM3Dq is expressed at very high levels, even the small constitutive activity might be enough to noticeably depolarize the cells at baseline, changing their behavior even without drug. The proper control here is to compare baseline behavior of mice expressing the DREADD against mice that don't. If the DREADD-expressing mice differ from controls even before any drug is given, you have a leak problem and your interpretation needs to account for it.

A related leak issue: in Cre-dependent systems, occasionally a small number of cells flip the construct without having Cre — through low-level spontaneous recombination, or because Cre is leaky in some cells. So even in a Cre-driven targeted experiment, a few off-target cells might express the DREADD. Usually small enough to ignore, but worth checking with the histology in your final figures.

\[Pause.\]

**Pitfall two: off-target ligand effects.** We've discussed the CNO back-conversion story at length, but it's worth restating as a generalized lesson: any designer drug you use may have off-target effects you don't know about. The proper control is to give the drug to mice that don't express the DREADD and see if there's any behavioral effect. If the drug-without-DREADD group shows the same behavioral change as the drug-plus-DREADD group, your "DREADD effect" is just a drug effect. This control is non-negotiable. Any paper that doesn't include it is, in 2026, an under-controlled paper.

\[Pause.\]

**Pitfall three: pharmacokinetics.** The designer drug has a time course — it takes time to reach the brain, time to bind, time to clear. The peak effect typically arrives 20-40 minutes after intraperitoneal injection, and the effect lasts 1-4 hours depending on the ligand. If your behavioral test happens too soon after injection, the drug isn't fully on board yet. If it happens too late, the drug is wearing off. Bad timing produces apparent failures that have nothing to do with the underlying biology. The fix is to know the pharmacokinetics of your specific ligand — DCZ, CNO, Compound 21 all have different time courses — and run your behavior at the peak window. And run pilot experiments to verify.

\[Pause.\]

**Pitfall four: chronic compensation.** If you express a DREADD and give the drug repeatedly over days or weeks, the system may adapt. Receptors may downregulate, downstream signaling may compensate, the cells may shift their baseline excitability. Acute first-day experiments may not predict what happens after a week of repeated drug administration. For chronic experiments, you need additional controls and you need to know what's happening to the receptors and cells over time, not just behaviorally.

\[Pause.\]

**Pitfall five: anatomical drift.** AAV spreads through the tissue at the injection site, and different injections produce slightly different spread patterns. Two mice with the "same" injection may have meaningfully different populations of cells expressing the DREADD, just because the virus spread to slightly different regions. Histological verification of each animal's expression pattern is essential, and animals with off-target expression should be excluded.

\[Pause.\]

The meta-lesson from all of this: chemogenetics is a powerful tool, but it's not magic. It requires careful experimental design, the right controls, knowledge of the pharmacology, and attention to expression patterns. Done well, it gives you exquisite circuit-specific manipulation in a freely behaving animal. Done sloppily, it gives you ambiguous results and the risk of getting fooled by your tool. The difference between the two is in the controls.

\[Pause.\]

Here is a checklist you should carry. For any chemogenetic experiment, you want at minimum: a DREADD-plus-drug group, a DREADD-plus-vehicle group, a no-DREADD-plus-drug group, and a no-DREADD-plus-vehicle group. Four arms, two-by-two design. Each addresses a different alternative explanation. If your effect is real and your manipulation is clean, only the DREADD-plus-drug group should differ from the rest. Anything else is a confound.

That's the standard. Apply it to every paper you read, and to every experiment you ever design.

---

## SEGMENT 18 — Frontier

Let me close with three threads that point at where chemogenetics is going next, so you have a sense of the live frontier rather than just the established present.

\[Pause.\]

**Thread one: orthogonal receptor-ligand pairs.** The current DREADD family has a fundamental limitation — most of the popular DREADDs respond to the same family of ligands, the clozapine-derived compounds. That means if you want to independently manipulate two cell populations in the same animal, with two different drugs at different times, you have limited options. KORD plus DREADD gives you one such pair, because KORD responds to salvinorin B rather than CNO. But for richer multiplexed control — three or four independently controllable channels in the same animal — you'd want a family of receptor-ligand pairs that are each pharmacologically orthogonal to all the others.

There's active work on building such orthogonal sets. Receptors derived from different GPCR families, tuned to different synthetic ligands, none of which cross-talk to each other or to native receptors. If this work matures, you'll be able to run, in a single mouse, simultaneous independent control of cell type A with drug 1, cell type B with drug 2, cell type C with drug 3. The combinatorial possibilities for circuit dissection become enormous.

\[Pause.\]

**Thread two: peptide DREADDs and other novel chassis.** Most current DREADDs are based on small-molecule GPCRs — receptors that naturally respond to small molecules. But the GPCR superfamily also includes peptide-binding receptors — receptors that respond to short protein fragments. There's emerging work on engineering peptide-binding GPCRs as chemogenetic tools, with designer peptide ligands. This opens up new pharmacological space and new possibilities for tissue-specific or longer-lasting activation.

Beyond GPCRs and ion channels, there's work on engineering receptor tyrosine kinases — a completely different signaling family — to respond to designer ligands. Each new chassis gives you a different downstream effect: GPCRs give you ion channel and second messenger effects, RTKs give you growth and survival signaling, and so on. The chemogenetic toolkit is expanding into multiple signaling domains.

\[Pause.\]

**Thread three: in vivo translation toward human therapy.** This is the long-term goal, and it's still over the horizon, but the trajectory is real. To get from where we are now — DREADDs in mice and monkeys — to therapeutic chemogenetics in humans, several things have to converge.

You need safer, cleaner ligands than CNO. DCZ is a step in that direction. You need viral delivery systems that work safely in the human brain — and AAV gene therapy is now FDA-approved for some neurological conditions, so the regulatory pathway exists in principle. You need cell-type-specific expression strategies that work in humans, where the Cre driver lines used in mice don't apply — this might come from cell-type-specific AAV serotypes, or from designed regulatory elements that drive expression in specific human cell populations. And you need long-term safety data showing that engineered DREADD expression in human cells doesn't have hidden problems over years of use.

Each of these pieces is being worked on. None of them is solved. But all of them are advancing. The first chemogenetic human therapy will probably be for a specific neurological condition where the target population is well-defined and the AAV-based delivery is well-characterized — perhaps treatment-resistant epilepsy, or focal Parkinson's-related circuits. When and if that happens, it'll be a transformation comparable to the introduction of monoclonal antibodies as drugs — a whole new modality opening up for diseases that are currently intractable.

\[Pause.\]

So let me close the loop. We started two hours ago with a problem: how do you manipulate a specific population of cells, in a freely behaving animal, with off-target-free pharmacology? The answer, in concept, was the DREADD — a designer receptor exclusively activated by a designer drug, with both ends engineered to be private to each other. Two acts of design, one receptor and one drug, made to fit each other and to ignore everything else.

Then we walked through the engineering. The muscarinic chassis. The Gq and Gi flavors. The original ligand CNO, and the painful discovery that CNO was sneakier than the field had hoped. The newer ligands — Compound 21, DCZ, JHU37160 — designed to be cleaner. The Cre-lox targeting that lets you put DREADDs into exactly the cells you mean. The behavioral experiments, the non-neural applications, the PSAM second-generation toolkit, the transcription factor variants.

We compared chemogenetics to optogenetics — the slower cousin, the mood adjustment versus the precision strike — and saw that they're complementary, not competing. We saw how chemogenetics scales to primates in a way optogenetics struggles to, paving the way toward eventual human translation. We saw how chemo and opto get combined in the most sophisticated modern experiments, controlling all the variables at once.

And we closed on the frontier — orthogonal receptor-ligand pairs for richer multiplexing, peptide DREADDs and new chassis for new kinds of control, and the slow walk toward in vivo human therapy.

\[Pause.\]

The DREADD — that engineered receptor, ignoring the body's signals, listening only for a drug it was built to recognize — is one of the cleanest demonstrations in modern neuroscience that you can take a piece of evolved biology, redesign its inputs, and turn it into a remote control for specific cells in a living animal. It's not as flashy as optogenetics. It doesn't get the magazine covers. But for a huge class of questions — the slow, the sustained, the freely behaving, the deep-tissue, the primate, the eventual translational — it's the right tool, and it has reshaped what's possible in circuit neuroscience.

That's the field. That's the story. The doorbell that only your button rings — engineered, deployed, debugged, and now slowly walking from mouse to monkey toward man. Thank you.

\[Pause. End of lecture.\]

---

## APPENDIX — Quick-reference summary (not for reading aloud)

**The concept.** DREADD = Designer Receptor Exclusively Activated by a Designer Drug. An engineered receptor that ignores the body's natural ligands and responds only to a synthetic compound. The drug, in turn, doesn't activate any natural receptor. Pharmacological switch with, in principle, zero off-target effects.

**The chassis.** Most DREADDs are built on the human muscarinic acetylcholine receptors. Two point mutations (Y3.33C, A5.46G) in the binding pocket eliminate acetylcholine binding and enable activation by clozapine N-oxide and related compounds. The downstream G-protein signaling is left intact.

**The main DREADDs.**
- **hM3Dq** — activating, Gq-coupled. Depolarizes neurons. The "gas pedal."
- **hM4Di** — inhibitory, Gi-coupled. Hyperpolarizes neurons. The "brake."
- **GsD** — chimeric, Gs-coupled. Raises cAMP.
- **KORD** — kappa-opioid-receptor-derived inhibitory DREADD, activated by salvinorin B rather than clozapine derivatives. Enables multiplexing.

**Ligands.**
- **CNO (clozapine N-oxide)** — the original. Turned out to be back-converted in vivo to clozapine, a potent psychoactive with broad receptor affinity. Major confound discovered in Gomez et al., Science 2017.
- **Compound 21 (C21)** — alternative, doesn't back-convert. Lower potency than DCZ.
- **DCZ (deschloroclozapine)** — high-affinity, brain-penetrant, no back-conversion. Now the preferred ligand for many applications. Published 2020.
- **JHU37160 / JHU37152** — Johns Hopkins ligands, designed for clean pharmacology and PET imaging.
- **Salvinorin B** — for KORD.

**Cell-type targeting.** AAV delivery of a Cre-dependent DREADD construct (DIO / FLEX cassette: the DREADD ORF is inverted, flanked by loxP sites that flip it into the correct orientation only in Cre-expressing cells). Cre is restricted by being expressed under a cell-type-specific promoter in transgenic mouse lines. Result: DREADD expression in only those cells that express Cre, in only the region where AAV was injected.

**The CNO controversy.** Gomez et al. (Science, 2017) used PET imaging and pharmacology to show that CNO does not efficiently cross the blood-brain barrier; instead, peripheral metabolism back-converts CNO to clozapine, which crosses easily and activates DREADDs directly but also activates many native receptors. The "exclusively" in DREADD was, in vivo, only partially true. Field response: new ligands, lower doses, mandatory no-DREADD controls.

**Chemo vs opto.**
- Opto: millisecond precision, requires fiber implant, surgical timing, "precision strike."
- Chemo: minute-to-hour effects, no hardware beyond initial injection, freely behaving, "mood adjustment."
- Best papers use both.

**PSAMs / PSEMs.** Pharmacologically Selective Actuator Modules — engineered ligand-gated ion channels (based on alpha-7 nicotinic receptor binding domain fused to various ion channel pores), activated by designer ligands called PSEMs. Faster kinetics than DREADDs (milliseconds), more complex to engineer.

**Beyond neurons.** Chemogenetic control has been applied to pancreatic beta cells, immune cells, smooth muscle, and other tissues. Any cell type that responds to GPCR signaling is, in principle, accessible.

**Transcription-layer chemogenetics.** Tet-On/Tet-Off systems (doxycycline-controlled gene expression), CreER (tamoxifen-inducible Cre), and related tools control gene expression rather than cell activity, on time scales of hours to days.

**Required controls.** Minimum 2x2 design: DREADD-plus-drug, DREADD-plus-vehicle, no-DREADD-plus-drug, no-DREADD-plus-vehicle. The no-DREADD-plus-drug group is essential for catching ligand off-target effects (the CNO lesson).

**Frontier.**
- Orthogonal receptor-ligand pairs for multiplexed control of multiple populations.
- Peptide DREADDs and new GPCR/RTK chassis.
- Primate translation (already established) and eventual human therapy (still over the horizon, but advancing).

