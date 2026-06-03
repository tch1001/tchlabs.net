# Bispecific T-cell Engagers (BiTEs) and the Redirected-T-cell Toolkit

**A 2-hour undergraduate immuno-oncology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, landing comfortably inside a two-hour slot. (Read faster, ~140 wpm, and you'll have generous room for questions.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The central idea: a piece of tape with two sticky sides

Alright, let's get started. Good morning, everyone. For the next two hours we are going to talk about a class of cancer drugs that, in my opinion, do not get nearly enough attention given how clever they are and how rapidly they are reshaping the treatment of blood cancers. We are going to talk about **bispecific T-cell engagers**, the **BiTEs**, and their slightly bigger cousins, the **Fc-containing bispecific antibodies**. By the end of the day, you should understand what these molecules are, why they work, why they almost work but not quite for solid tumors, and how they fit alongside CAR-T and checkpoint inhibitors in the immuno-oncology toolkit.

I want to begin with one picture, before any names, before any drugs, before any history. Here is the picture.

Imagine a tiny piece of **double-sided sticky tape**. Just a sliver of tape, the size of a postage stamp, with adhesive on both sides. One side of the tape is sticky for one specific kind of surface — let's say it sticks to dish soap. The other side is sticky for another specific kind of surface — let's say it sticks to brick. Most objects in the world, that tape will not touch. But if you bring a brick and a bottle of dish soap close to that little piece of tape, the tape grabs both, and now the brick and the soap bottle are physically welded together, forced into contact. They can't get away from each other.

\[Pause.\]

That is, conceptually, the entire BiTE design. A BiTE is a small antibody-derived molecule with **two binding arms**. One arm binds a molecule on the surface of every T cell in your body — specifically, **CD3**, a component of the T cell receptor signaling complex. The other arm binds a molecule on the surface of cancer cells — say, **CD19** on B-cell leukemia, or **BCMA** on multiple myeloma cells, or **CD20** on lymphoma cells. When you put the BiTE into the patient's bloodstream, the molecule wanders around, and whenever it happens to be near both a T cell and a tumor cell at the same time, it grabs both. It forces them into intimate, physical contact. And — here is the magic — the act of grabbing CD3 on the T cell side _activates_ that T cell. The T cell wakes up, looks at what it is touching, sees the cancer cell glued to its face, and does what T cells do when they are activated and pointed at something: it kills it. Perforin. Granzymes. The cancer cell goes into apoptosis. The T cell, having had a snack, detaches and goes looking for the next one.

That is the central idea. **A BiTE is matchmaking on a molecular scale.** It takes any random passing T cell — a T cell that has no idea what cancer looks like, a T cell whose own receptor is specific for, who knows, a flu virus from 1998 — and it hands that T cell a target. It says: this cell. Right here. Kill this one. And because the molecule is built around CD3, which is on _every_ T cell, you don't need a special T cell. You don't need the patient's T cells to have been pre-trained against the cancer. You don't need to know what tumor-specific antigens the patient's TCR repertoire happens to recognize. You just need T cells — any T cells, drifting through the patient's bloodstream — and the BiTE drags them into the fight.

\[Pause.\]

This is a deeply different conceptual move from what checkpoint inhibitors do, and it's worth pausing on the difference, because the contrast tells you a lot. A checkpoint inhibitor, remember, works by **removing a brake** that the cancer has installed on T cells. It assumes that somewhere in the patient's body, there are T cells that have already recognized the cancer — they have found it, they have started to engage it — and the cancer has shut them down by displaying PD-L1 or some other inhibitory signal. The checkpoint inhibitor takes that inhibitory signal off the table, and the T cells, which were already there, already targeted, get back to work. Checkpoint inhibitors do not _create_ new anti-tumor T cells; they liberate the ones that already exist.

A BiTE makes a different move. A BiTE does not liberate existing anti-tumor T cells. A BiTE **manufactures** an anti-tumor interaction, on the spot, between any T cell and any tagged tumor cell. It doesn't care what the T cell's own specificity is. It hands the T cell its target and provides the activation signal at the moment of contact. It is a chemical matchmaker.

If you walk out of here in two hours and you can do three things — one, sketch a BiTE molecule and tell me what each arm does and why CD3 specifically; two, explain in plain English why BiTEs work beautifully for B-cell leukemia and multiple myeloma but have struggled in solid tumors; three, compare a BiTE to a CAR-T cell and tell me when you'd reach for each one — then we've done our job. Everything else is engineering detail hanging off those three.

\[Pause.\]

Let me set up the structure of the rest of the lecture. We'll start with the **molecule itself** — the architecture, the two scFvs glued together, the size, why size matters, the half-life problem. Then we'll tell the **blinatumomab story** — the original BiTE, the proof of concept, the operational headache of the continuous infusion pump, the eventual approval for ALL in 2014. Then we'll talk about the **Fc-containing bispecifics** — the upgrade that gives you a normal IgG-like dosing schedule and which now dominates the newer approvals. Then we'll walk through the **CD20 x CD3 trio** for lymphomas — mosunetuzumab, glofitamab, epcoritamab — three drugs, same target class, fierce competition. Then we'll do the **BCMA x CD3 gold rush** in multiple myeloma — teclistamab, elranatamab, and the related GPRC5D-targeting talquetamab. Then **CRS in BiTEs**, the price you pay for redirected T-cell activation. Then the big one: **BiTE versus CAR-T**, the off-the-shelf-versus-autologous tradeoff that defines the commercial landscape. Then the frontiers — **NK engagers**, **trispecifics**, **solid-tumor bispecifics**, **conditionally activated bispecifics**, and the **AI-designed scaffolds** that are starting to show up.

That's the map. Now let's build the molecule.

---

## SEGMENT 2 — The BiTE molecule: two scFvs on a string

So what does a BiTE actually look like? If you've sat through the antibodies lecture, you remember the basic Y-shaped antibody — two arms, one stem, four chains, around 150 kilodaltons of protein. A BiTE is much, much smaller than that, and the smallness is not a bug; it is a design feature. Let me build the molecule up from parts.

You remember that the **Fab arm** of an antibody — the gripping hand — has its specificity concentrated at the very tip, in six little CDR loops, three on the heavy chain and three on the light chain. You remember that immunologists figured out, back in the eighties and nineties, that you could strip away most of the antibody and keep just the variable domains of the heavy and light chains, glued together with a short flexible peptide linker, and the result — called a **single-chain Fv**, or **scFv** — would retain the binding specificity of the original antibody, in a molecule about a sixth the mass of an IgG. An scFv is about 25 kilodaltons. It is one polypeptide chain, folded into a little binding module, that grips its target.

\[Pause.\]

Now here's the BiTE trick. You take two scFvs — let's say one scFv specific for CD19 and one scFv specific for CD3 — and you connect them with another short flexible peptide linker. You glue them end to end. The result is a single polypeptide chain, expressed from a single gene, that has _two_ binding heads on it. One end grips CD19. The other end grips CD3. The flexible linker between them lets the two ends move independently in space, so the molecule can wrap around two cells at once, one head on each.

That's it. That's a BiTE. Two scFvs, one linker, one chain, around 55 kilodaltons total. **About one-third the size of a full antibody.** It is the smallest practical molecule you can build that still has the ability to grab two different targets at once.

I want you to hold that picture clearly. Most antibody-based drugs are Y-shaped, 150 kilodalton, IgG-class molecules. A BiTE looks nothing like that. A BiTE looks like a barbell — two binding heads on a flexible stick. It has no Fc region. It has no Y. It is a stripped-down, function-only molecule designed to do one job: physically bridge a T cell and a target cell.

\[Pause.\]

Why design it this small? Two reasons, and they are in tension with each other.

The first reason — the good reason — is **tumor penetration**. A full IgG antibody at 150 kilodaltons has a hard time getting deep into solid tumor tissue. Tumors are not nicely vascularized like normal tissue. They have leaky, chaotic blood vessels, high interstitial pressure, dense extracellular matrix. A big floppy antibody crawls in slowly, decorates the outermost rim of the tumor, and often never reaches the cells in the middle. A small molecule like a BiTE, at one-third the mass, diffuses much more readily through tumor tissue. It gets where it needs to go. For a drug whose mechanism depends on physically bridging two cells, you want it to be able to reach the cells that are actually in the tumor mass, not just the ones near the surface.

The second reason — which is more accident than design — is that small antibody fragments without an Fc region were what the technology of the late nineties and early two-thousands could reliably make. Engineering two different arms onto a single IgG-like scaffold, with the correct light-chain pairing, was a much harder protein-engineering problem at the time. Sticking two scFvs together with a linker was easy. So the BiTE format was, in part, the first thing that worked.

\[Pause.\]

But here's the cost. Small proteins **get cleared from the bloodstream extremely fast.** Your kidneys filter out anything smaller than about 60 kilodaltons. A 55 kilodalton BiTE has a half-life in human plasma of around **two hours**. Two hours. By comparison, a normal IgG antibody has a half-life of around three weeks. That's a difference of about two hundred and fifty-fold. The reason for the difference is mostly that IgG antibodies have an Fc region, and there is a specialized receptor called **FcRn** — the neonatal Fc receptor, named because it was first identified in neonatal gut, but it is in adults all over the place — that picks up IgGs from inside cells and recycles them back into circulation. Without an Fc region, no FcRn rescue, and the kidney filters you out.

So you have a beautifully designed bridging molecule that gets out of the patient's system in a couple of hours. If you give it as a single IV push, it does its job for an hour or two and then it's gone. The cancer is not gone. The cancer is still there. So how do you keep the drug present long enough to actually work?

The answer, for first-generation BiTEs, was operationally absurd, and we'll talk about it in detail in Segment 4. The short version: you don't give it as a single push. You give it as a **continuous IV infusion**, twenty-four hours a day, for **twenty-eight days**, through a pump the patient carries around with them. We will return to this. It is the most striking single feature of how blinatumomab is used in the real world, and it is the reason the field has spent fifteen years trying to engineer the half-life problem away.

The newer bispecifics — the Fc-containing ones we'll meet later — solve this problem by putting an Fc region back onto the molecule, accepting some loss of tumor penetration in exchange for a much longer half-life. But the original BiTE platform, as Amgen built it, was small-and-fast by design, and the clinical workflow had to accommodate the consequences.

---

## SEGMENT 3 — Why CD3 specifically — the universal activation handle

I want to spend a few minutes on why the T-cell-engaging arm of a BiTE grips **CD3**, specifically, and not something else. Because there were other options, and the choice tells you a lot about the design logic.

T cells have lots of surface molecules. They have the T cell receptor itself — the TCR — which is the highly specific recognition complex that distinguishes one T cell's specificity from another's. They have CD4 or CD8, which mark helper versus cytotoxic lineage. They have CD28, the co-stimulatory receptor. They have CD25, CD45, dozens of others. If you wanted to engage a T cell with one arm of an antibody, you could in principle pick any of these. Why CD3?

\[Pause.\]

Here's the thing about CD3. The T cell receptor — the actual specific binding complex — is a heterodimer of two chains, alpha and beta, sitting on the T cell surface. But alpha and beta have very short intracellular tails. They cannot, by themselves, signal anything to the inside of the cell. To signal, the alpha-beta TCR is _associated_ with a cluster of additional chains — the CD3 complex — which sits next to it in the membrane. The CD3 complex consists of several subunits: CD3-gamma, CD3-delta, CD3-epsilon, and the CD3-zeta chain. These are the **signaling machinery** of the T cell receptor. When the TCR engages its specific target on another cell, the binding event is transmitted to the inside of the T cell through CD3 and especially through the long cytoplasmic tail of CD3-zeta, which contains the signaling motifs that ignite the killing program.

So CD3 is not the specificity-determining part of the TCR. CD3 is the activation-delivery part. And — this is the key — CD3 is the **same on every T cell**. CD3-epsilon, the part most BiTEs target, looks identical on a T cell whose TCR happens to recognize flu and on a T cell whose TCR recognizes tetanus and on a T cell whose TCR recognizes nothing in particular. It's invariant. It's the universal activation handle.

\[Pause.\]

If you grab the TCR-alpha or TCR-beta chain — the specific bit — you can only engage T cells with that particular specificity, and there are essentially zero of them. If you grab CD3-epsilon, you can engage **every T cell in the patient**. You are tapping the universal "wake up and kill" wire.

And there's a subtlety. The CD3 complex doesn't actually require its associated TCR to have recognized something legitimate. The TCR-CD3 module is wired such that **physical cross-linking of CD3** — clustering several CD3 molecules together by an external agent — is itself an activating signal. The cell interprets clustering as "your TCR has engaged a target, signal now." This was originally discovered as an experimental tool — biologists would activate T cells in a dish by coating beads with anti-CD3 antibodies and letting the beads cluster the receptors. The cells thought they were seeing antigen and activated. Cross-linking equals activation.

A BiTE exploits exactly this. When the BiTE molecule grabs CD3 on a T cell on one side and a tumor antigen on the cancer cell on the other side, multiple BiTE molecules end up tethered across the same patch of contact, clustering CD3 in that region of the T cell membrane. The T cell reads the clustering as "this is a target, fire," and the killing machinery fires — at whatever is sitting directly across the synapse, which is the cancer cell.

This is, when you think about it, a kind of beautiful immunological hack. You are co-opting the natural activation pathway of the T cell, but you are bypassing the specificity check. The T cell is being told "you have engaged a target" not by its own discriminating receptor but by an external antibody-shaped tool that you, the drug designer, brought to the party. The T cell trusts the activation signal. It doesn't ask questions. It kills.

\[Pause.\]

Now, you might worry: doesn't this make T cells dangerous? If you can activate any T cell against anything just by physically clustering CD3, what stops the BiTE from activating T cells against random things? And the answer is that the BiTE only triggers full activation when **both arms are engaged simultaneously** — when CD3 is being held in proximity to a cell that is also presenting the tumor antigen. A BiTE floating in solution, with one arm dangling, doesn't activate anything. A BiTE bound only to CD3, with the tumor arm free, also doesn't strongly activate anything, because the activating cluster requires the other side of the molecule to be anchored. It's the dual engagement that does it. It's a logical AND gate: T cell **AND** tumor cell **AND** they are right next to each other. That's when you get killing.

This is what makes BiTEs selectively cytotoxic. They don't activate T cells indiscriminately. They activate T cells _where the antigen is_, and that's where the cancer is, and that's where you want killing to happen.

---

## SEGMENT 4 — Blinatumomab: the proof of concept

So now we have the molecule and the rationale. Let's tell the story of the first one to make it through to FDA approval, because it is the proof of concept for the whole field, and because the operational details of how it is used are kind of wild.

The drug is **blinatumomab**. Trade name **Blincyto**. Made by Amgen, originally developed by a small German biotech called Micromet, which Amgen acquired in 2012 for around a billion dollars largely on the strength of this one molecule. Approved by the FDA in December 2014 for relapsed or refractory **B-cell acute lymphoblastic leukemia** — B-ALL — in adults, and later expanded to pediatric ALL. It was the first FDA-approved BiTE, and it remains the canonical example of the class.

\[Pause.\]

The targets are **CD19** on the tumor side and **CD3** on the T cell side. CD19 is a B-cell surface marker — it is expressed on B cells from the pre-B stage all the way through mature B cells, and it is expressed on essentially every B-cell leukemia and lymphoma. It is, in many ways, the perfect tumor antigen for B-cell malignancies: high expression, present on essentially all malignant cells, and present only on B cells, which are a lineage you can afford to lose because B cells turn over and the bone marrow makes new ones from CD19-negative precursors. We will see CD19 again as the canonical CAR-T target; the same antigen drives both fields, for the same reason.

So blinatumomab is a CD19 x CD3 bispecific. When you give it to a patient with B-ALL — who has lots of CD19-positive leukemic blasts in their bone marrow and blood — the drug circulates, finds T cells and leukemia cells in close proximity (which, given how packed the marrow is, is essentially constantly), bridges them, and the T cells kill the blasts.

The clinical results in the pivotal trials were striking. In adults with relapsed or refractory ALL — patients who had failed multiple prior lines of chemotherapy and whose disease was usually fatal within months — complete remission rates with blinatumomab were around 40 to 45 percent. Not curative on its own, but enough to bridge patients to stem-cell transplant, which can be curative. It was the first new therapy for this disease in a generation, and it worked through a completely new mechanism.

\[Pause.\]

But here is the operational reality, and this is where the story gets memorable. Because blinatumomab has a half-life of about two hours, you cannot give it as a once-daily injection or even a once-every-few-hours injection. The dose drops off too fast between injections, and the drug concentration in the patient swings up and down too dramatically — and at low concentrations the drug doesn't engage enough T cells, while at high concentrations you can trigger dangerous cytokine release. To get a stable, therapeutic concentration in the patient, you have to give it as a **continuous intravenous infusion**, twenty-four hours a day, for **twenty-eight days straight**. That's one full cycle.

In practice, this means the patient gets a central venous catheter placed, attaches it to a small portable IV pump that fits in a fanny pack or a shoulder bag, and walks around with the pump running continuously for four weeks. The pump is small and battery-powered. The patient changes the drug bag every couple of days. They go home, they live their lives — with a pump on their hip and a line into their chest, slowly dripping bispecific antibody into their bloodstream around the clock.

I want you to picture this. A leukemia patient, walking around their house, with a portable IV pump going twenty-four hours a day for four weeks, because the drug has a two-hour half-life. This is the operational consequence of designing the molecule small enough to penetrate tumor tissue and active enough to engage T cells, but too small to escape kidney filtration. The pharmacology defines the workflow.

\[Pause.\]

This continuous-infusion requirement is, more than any clinical efficacy detail, what motivated the whole next generation of bispecifics. Patients hated the pump. Pumps fail. Lines get infected. Patients can't easily travel. The drug works, but the dosing is a logistical nightmare. So the field set itself the goal: build a bispecific that doesn't need continuous infusion. Build one with a normal IgG-like half-life. Build one you can give every one to three weeks as a regular subcutaneous injection or short IV.

That goal is what produced the **Fc-containing bispecific** platform, which is where the field has been going for the last decade, and which has produced essentially every major new approval since 2022. That's the next segment.

---

## SEGMENT 5 — Putting the Fc back on: the half-life extension upgrade

So let's talk about the upgrade. If the BiTE platform is "scFv plus scFv on a linker, small and fast," the newer platform — what people now mostly just call **bispecific antibodies** or **T-cell engagers with Fc** — is "scFv plus scFv plus an Fc region, larger and slower." Let me show you what that looks like.

You take your two binding modules — the CD3 binder and the tumor binder — and instead of just stringing them together on a small linker, you graft them onto a more antibody-like scaffold. Different companies do this differently, and the field has produced a zoo of architectures, but the unifying feature is **the molecule contains an Fc region** — a normal-looking IgG stem at the bottom, holding the two specificities together at the top.

\[Pause.\]

You might wonder: if you have an Fc and two specificities, isn't that just a normal antibody with one arm changed? Sort of, yes. But here's the engineering problem. A normal IgG has two _identical_ Fab arms, made by two pairs of one heavy chain and one light chain pairing up. In a bispecific, you want the two arms to be _different_. One should be the CD3-specific Fab. The other should be the tumor-specific Fab. Getting two different heavy chains and two different light chains to assemble correctly — pairing the right heavy with the right light, on each side, and getting the two different heavy chains to pair up across the middle — is a hard protein-engineering problem. Mispairing produces useless mongrel antibodies with two of the wrong specificity or with hybrid arms that don't bind anything.

A whole subfield of protein engineering exists to solve this pairing problem. There are platforms with names like **knobs-into-holes** — where you engineer complementary bulges and cavities into the two heavy chains so they preferentially pair with each other and not with themselves — and **CrossMab**, **DuoBody**, **CrossOver-Mab**, **common light chain**, and a dozen others. Each is a different molecular trick for forcing the right four chains to come together in the right combination at industrial scale.

Once you've solved the pairing problem, the resulting bispecific antibody looks, at first glance, almost like a normal IgG. It has a Y shape. It has an Fc region at the bottom. It has two arms at the top — but those two arms are different from each other. One side grips CD3. The other side grips, let's say, CD20. The Fc region in the middle does what Fc regions do: it binds FcRn and gets recycled, which is to say, it gives the molecule a **long half-life**.

\[Pause.\]

How long? A typical Fc-containing bispecific has a half-life on the order of **one to three weeks** in human plasma, depending on the exact construct. That's two to three orders of magnitude longer than blinatumomab's two hours. Practically, it means you can dose these drugs every one to three weeks, like a normal monoclonal antibody, instead of running a continuous pump for a month. Patients come into clinic, get an injection, go home, come back in three weeks. That's a profoundly different patient experience.

There is, of course, a cost. The Fc-containing bispecific is bigger — back up around 150 kilodaltons, like a normal IgG. Tumor penetration is worse than with a small BiTE. The molecule does not diffuse through dense tumor tissue as readily. For blood cancers, where the tumor cells are sitting in the bloodstream or the marrow and the drug can reach them easily, the loss of penetration doesn't matter much. For solid tumors — pancreatic, lung, breast — the loss of penetration is one of several reasons why this format has struggled to translate. We'll come back to that in Segment 16.

There is also an Fc-related consideration around **Fc effector functions**. A normal IgG-Fc binds to Fc-gamma receptors on macrophages and NK cells and can trigger ADCC and complement. For a T-cell engager, you do _not_ want that — you don't want the Fc to randomly activate macrophages or recruit complement at sites of T-cell engagement, because it muddies the mechanism and adds toxicity. So bispecific designers almost always use an **Fc-silenced** Fc region — they introduce mutations that abolish Fc-gamma receptor binding while preserving FcRn binding. The result: long half-life, no off-target effector recruitment, clean T-cell-mediated killing as the only mechanism.

\[Pause.\]

The Fc-containing bispecific is the architecture you should picture for almost every approved drug we talk about from here on out. Mosunetuzumab. Glofitamab. Epcoritamab. Teclistamab. Talquetamab. Elranatamab. They are all variations on this theme — IgG-like scaffolds with one anti-CD3 arm, one anti-tumor arm, and an Fc-silenced stem. Blinatumomab is the outlier — the only major small-format BiTE still in widespread clinical use, and it remains the only one that requires the continuous pump.

The shift from blinatumomab's format to the newer Fc-containing format is one of the central engineering stories of the last decade in this field. It's why, in 2014, you had one approved BiTE and it required a pump for a month; and in 2026, you have seven or eight approved T-cell engagers and most of them are subcutaneous injections every couple of weeks. The molecule got better. The dosing got humane. The mechanism stayed the same.

---

## SEGMENT 6 — The CD20 x CD3 trio: lymphoma's bispecific moment

Now let's talk about the first big wave of Fc-containing bispecifics, which hit the market in lymphoma. We are going to talk about three drugs that are all CD20 x CD3 bispecifics, all approved within about a year of each other, all going after similar B-cell lymphoma populations, all from major pharma companies competing fiercely with each other. This is the **CD20 x CD3 trio**: mosunetuzumab, glofitamab, epcoritamab.

\[Pause.\]

Let me set the stage on the target first. **CD20** is a B-cell surface protein, expressed on essentially all mature B cells and on essentially every B-cell lymphoma — follicular lymphoma, diffuse large B-cell lymphoma, mantle cell lymphoma, marginal zone lymphoma. It is, like CD19, a near-perfect tumor antigen for B-cell malignancies. It has been the target of **rituximab** — the first cancer-approved monoclonal antibody, approved in 1997, which transformed lymphoma treatment by simply binding CD20 and recruiting complement and macrophages to kill the B cells. Rituximab is one of the most successful cancer drugs ever made. CD20 is, by any measure, the most well-validated tumor antigen in oncology.

So if you are building a T-cell engager for lymphoma, CD20 is the obvious tumor-arm target. It is on every malignant cell. It has been hit successfully by antibodies for thirty years. Pairing CD20 with CD3 to make a T-cell engager was the obvious next step. The question, in the 2010s, was who would get there first and with the best molecule.

Three companies all got there, almost simultaneously.

\[Pause.\]

**Mosunetuzumab**, trade name **Lunsumio**, from Roche / Genentech. Approved by the FDA in December 2022 for relapsed or refractory follicular lymphoma after at least two prior therapies. Follicular lymphoma is a slow-growing, generally incurable B-cell lymphoma that responds to treatment but tends to come back, and patients can go through five, six, seven lines of therapy over decades. Mosunetuzumab gave these patients a new option. The pivotal trial showed complete response rates around 60 percent in third-line-and-later follicular lymphoma — a population where standard chemotherapy regimens give maybe 15 percent complete responses. The drug is given as a series of IV infusions, with the first cycle structured to ramp up the dose slowly — what's called **step-up dosing** — to minimize cytokine release. After the first cycle, it's a manageable, intermittent IV regimen, not a continuous pump.

**Glofitamab**, trade name **Columvi**, also from Roche / Genentech. Approved by the FDA in June 2023, but for a different patient population: relapsed or refractory **diffuse large B-cell lymphoma**, the aggressive cousin of follicular lymphoma. Glofitamab has a striking design feature — it has **two CD20-binding arms and one CD3-binding arm**, making it not a 1+1 bispecific but a 2+1, with bivalent CD20 engagement for higher avidity on the tumor side. The two CD20 arms grip the lymphoma cell more tightly, more cooperatively, the way a normal antibody's two arms grip — but the third arm engages CD3. In the pivotal trial in DLBCL after two prior lines, complete response rates were around 40 percent and, importantly, a large fraction of those complete responses were durable for over a year. For aggressive DLBCL after CAR-T failure, glofitamab is now a standard option.

**Epcoritamab**, trade name **Epkinly**, from Genmab and AbbVie. Approved by the FDA in May 2023 for relapsed DLBCL. The distinguishing feature of epcoritamab is the route of administration: it is given as a **subcutaneous injection**, not an IV. The patient gets a shot under the skin of the abdomen, weekly initially and then less frequently. The subcutaneous route is much more convenient than IV — no central line, no infusion chair, can in principle be given at home — and that's the operational advantage Genmab and AbbVie pushed hardest on. Efficacy in DLBCL is broadly in the same range as glofitamab. The competition between these two for the same DLBCL niche has been fierce, and pricing, dosing convenience, and CRS profiles are the differentiators more than any dramatic efficacy gap.

\[Pause.\]

So you have three drugs, all CD20 x CD3, all approved within a year of each other, all going after relapsed B-cell lymphoma. **Same mechanism, three different molecules, three different dosing schedules, three different companies.** This is what a maturing therapeutic class looks like. The first BiTE for B-cell cancer was blinatumomab, in 2014, and it took ten years for the lymphoma side of the B-cell-cancer market to see equivalent products. But once the technology had matured — once Fc-containing bispecifics could be reliably built — the floodgates opened, and within a year there were three competitors in the same space.

The clinical lesson from the trio is that **T-cell engagement against CD20 works in lymphoma**. Not as a single magic bullet — these are not curative therapies in most cases, the way CAR-T can sometimes be — but as a durable, repeatable, off-the-shelf treatment that produces meaningful complete responses in patients who have failed everything else. And, critically, they are **off-the-shelf**. A vial of glofitamab sits on the shelf at the cancer center. When a patient walks in needing it, you draw the dose, you give the injection, and they're on therapy that afternoon. That is a completely different operational profile from CAR-T, which we'll spend Segment 14 contrasting. The off-the-shelf nature is the BiTE field's central commercial advantage, and the CD20 x CD3 trio is the first place where you can really see it playing out at scale.

---

## SEGMENT 7 — The BCMA gold rush: bispecifics meet myeloma

Now let's move to multiple myeloma, which is the other major hematologic malignancy where bispecifics have transformed treatment in the last few years. Myeloma is a cancer of **plasma cells** — the antibody-producing terminal differentiation of B cells, the cells that live in your bone marrow and pump out IgG molecules at industrial rates. When plasma cells become malignant, they pile up in the marrow, secrete a useless monoclonal antibody that gums up the kidneys, and eat through bone, causing the characteristic lytic lesions and fractures of advanced myeloma.

For decades, myeloma was treated with combinations of proteasome inhibitors (bortezomib, carfilzomib), immunomodulators (lenalidomide, pomalidomide), and anti-CD38 antibodies (daratumumab). These drugs have extended median survival from about three years in the 1990s to closer to ten years today. But essentially every patient eventually relapses, and patients who have run through all the standard classes — what's called "triple-class refractory" or "penta-refractory" disease — have very limited options.

\[Pause.\]

Enter the BCMA target. **BCMA**, the B-cell maturation antigen, is a surface receptor expressed at high levels on plasma cells and on essentially every multiple myeloma cell. Like CD19 for B-ALL or CD20 for lymphoma, BCMA is a near-ideal tumor antigen for myeloma: it is uniformly expressed on the malignant population and minimally expressed elsewhere. Plasma cells are the only normal cells with high BCMA, and we can afford to lose plasma cells temporarily — patients survive with low antibody levels for months at a time and can be supplemented with IVIG if needed.

So BCMA became the great target of the late twenty-tens for myeloma. The first BCMA-directed drugs were antibody-drug conjugates (belantamab mafodotin) and CAR-Ts (idecabtagene vicleucel — Abecma — and ciltacabtagene autoleucel — Carvykti). And then the bispecifics arrived.

\[Pause.\]

**Teclistamab**, trade name **Tecvayli**, from Janssen. Approved by the FDA in October 2022 for relapsed or refractory multiple myeloma after at least four prior lines of therapy. Teclistamab is a BCMA x CD3 bispecific antibody — Fc-containing, IgG-like scaffold, anti-CD3 on one arm, anti-BCMA on the other arm, Fc-silenced stem holding it all together. It is given as **subcutaneous injection** weekly initially, then less frequently as patients respond. The pivotal trial — MajesTEC-1 — showed overall response rates around 63 percent and complete response rates around 40 percent in penta-refractory myeloma patients whose median survival on prior regimens was measured in months. For a patient population with essentially no remaining options, teclistamab was a transformative addition.

**Elranatamab**, trade name **Elrexfio**, from Pfizer. Approved by the FDA in August 2023, also for relapsed or refractory myeloma after four prior lines. Elranatamab is _also_ a BCMA x CD3 bispecific. Same mechanism, same target, slightly different molecule, also subcutaneous. The pivotal trial — MagnetisMM-3 — showed broadly comparable efficacy to teclistamab. The two drugs compete head-to-head for the same patient population.

This is what a **target gold rush** looks like in modern oncology. Once BCMA was validated — by belantamab, by the CAR-Ts, by the early teclistamab data — every major bispecific platform pivoted to develop a BCMA x CD3 candidate. Janssen got there first by a year. Pfizer got there second. Other competitors are still in trials. The clinical differences between teclistamab and elranatamab, in efficacy and safety, are quite small. The differences in pricing, supply, dosing convenience, and which payer's formulary they end up on matter as much as the molecule itself.

\[Pause.\]

There's an important clinical wrinkle in the myeloma BiTE story, which is **what to do when BCMA stops working**. Patients on a BCMA-directed therapy — whether a CAR-T or a bispecific — often relapse with **BCMA-low or BCMA-negative disease**. The malignant cells, under selective pressure from the BCMA-targeting drug, downregulate or lose BCMA. The drug stops binding. The tumor escapes. This is the cancer's version of the bacterial antibiotic-resistance problem — selective pressure produces escape mutants.

So the field needs a second myeloma antigen. Something you can pivot to when BCMA fails. Something that the same patient who has just relapsed on teclistamab can be put on, with reasonable hope of response.

That second antigen turned out to be **GPRC5D**. And the drug that targets it is **talquetamab**, which gets its own segment.

---

## SEGMENT 8 — Talquetamab and the GPRC5D target: a second shot at myeloma

**Talquetamab**, trade name **Talvey**, from Janssen — the same company that makes teclistamab — was approved by the FDA in August 2023 for relapsed or refractory multiple myeloma after at least four prior lines. It is a bispecific T-cell engager, IgG-like Fc-containing format, with one anti-CD3 arm and one anti-**GPRC5D** arm. It is given subcutaneously.

Let me explain GPRC5D, because it is a genuinely interesting target and it tells you something about how the next wave of bispecifics is being designed.

\[Pause.\]

GPRC5D is **G-protein-coupled receptor class C group 5 member D**. It is an orphan receptor — meaning we don't really know what its natural ligand is or what it does normally — that happens to be expressed at high levels on plasma cells, including myeloma cells. It is also expressed in **hair follicles, the tongue, and nail beds**. That tissue distribution is important and we'll come back to it.

The discovery that GPRC5D is a usable myeloma target came from systematic surface-protein profiling of myeloma cells, looking for things that were (a) high enough in expression to make a viable target, (b) restricted enough to non-essential tissues to be safe, and (c) different from BCMA so that patients who lost BCMA could still respond. GPRC5D ticked all three boxes — high on myeloma, present only on plasma cells and a few skin / mucosal lineages, biologically independent from BCMA.

\[Pause.\]

The clinical importance of talquetamab is the **independence from BCMA**. In the pivotal trial — MonumenTAL-1 — talquetamab worked in patients who had failed BCMA-directed therapy, including patients who had failed BCMA CAR-T and patients who had failed teclistamab. Overall response rates in this BCMA-pretreated population were around 60 percent, which is remarkable for a fifth-or-later line of therapy. The drug gave patients who had run out of options on BCMA a real second shot at remission, by simply pointing T cells at a different antigen on the same tumor.

This is going to be a recurring pattern in the bispecific field. **One antigen is not enough**. Tumors escape by losing the antigen. The clinical strategy is sequential targeting — hit BCMA first, when it fails hit GPRC5D, and so on. The bispecific platform makes this easy in principle: you keep the CD3 arm constant and you swap out the tumor arm for a different antigen. The T cell stays the same; the matchmaking partner changes.

\[Pause.\]

About the side-effect profile: because GPRC5D is also on hair follicles, tongue, and nail beds, **talquetamab causes some very characteristic toxicities** that BCMA-targeting drugs don't. Patients lose their hair, sometimes dramatically. They get **dysgeusia** — distortion of taste — because GPRC5D-expressing taste-related cells get killed. They get nail dystrophy and skin changes. None of these are life-threatening, but they are striking and they are direct, predictable consequences of where the antigen is expressed. When a patient on talquetamab tells you that everything tastes like cardboard, that's not a coincidence — that's the T cells doing exactly what the drug is designed to make them do, in a place where you'd rather they didn't.

This kind of **on-target, off-tumor toxicity** — where the drug does exactly what it's supposed to do, but in a tissue you didn't want it to — is the central safety puzzle for redirected-T-cell therapies. We will see it again with solid-tumor bispecifics, where the consequences are usually much worse because the targets are often expressed on tissues you cannot afford to lose. With GPRC5D, the toxicities are tolerable because the affected tissues are non-essential and largely recoverable. With a target like HER2 or carcinoembryonic antigen, expressed on the gut or the heart, the same mechanism produces lethal toxicity. The art of bispecific design for solid tumors is choosing targets where the on-target off-tumor expression is survivable.

---

## SEGMENT 9 — Cytokine release syndrome: the price of T-cell engagement

So we have spent six segments admiring how clever these molecules are. Now let's talk about what goes wrong, because there is a characteristic toxicity that you have to manage with every redirected-T-cell drug, and it is the central reason these therapies are still given in specialized centers and not, say, prescribed by primary care.

The toxicity is **cytokine release syndrome**, abbreviated **CRS**. You will have met it in the CAR-T lecture; it is the same syndrome, with the same mechanism, with the same management strategy. Bispecifics produce CRS for exactly the same reason CAR-T cells do: because when you activate large numbers of T cells simultaneously against a target that is widely present in the patient's body, those T cells release massive amounts of inflammatory cytokines, and the cytokine storm itself causes a systemic inflammatory illness.

\[Pause.\]

Let me describe what CRS actually looks like in a patient. Within hours of the first dose of a BiTE or bispecific, the patient develops **high fever** — often 39 or 40 degrees Celsius. Their blood pressure starts to drop. Their heart rate goes up. They feel awful — flu-like, exhausted, sometimes confused. In severe cases, their oxygen levels drop and they need supplemental oxygen, sometimes mechanical ventilation. Their kidneys can shut down. Their liver enzymes go up. In the most severe cases — grade 4 CRS — they go into multi-organ failure and need intensive care.

What is causing this? When the BiTE crosslinks T cells with tumor cells at the first dose, a huge number of T cells get activated essentially simultaneously, especially if the tumor burden is high. Those T cells dump their granules — that's the killing program — and also start secreting cytokines: **IL-6, IFN-gamma, TNF-alpha**, and others. The cytokines diffuse into the blood, hit endothelial cells everywhere, cause vasodilation (low blood pressure), drive macrophages to release _more_ cytokines (positive feedback), and produce a systemic inflammatory state that looks a lot like sepsis. The body is, in effect, suffering an immune-mediated illness whose target is itself.

\[Pause.\]

How do you manage it? Two main strategies.

First, **step-up dosing**. The first cycle of a bispecific is not given at full dose. It is given as a series of fractional doses, with the first dose perhaps a thousandth of the eventual target dose, and each subsequent dose two or three times bigger, building up to full dose over a week or so. The idea is to engage a smaller number of T cells initially, get some tumor cells killed, lower the tumor burden a bit, let the patient's inflammatory state cool off, and then escalate. By the time you reach full dose, the tumor burden is lower and the patient's T cells are partly desensitized to the activation signal — so the cytokine storm is much milder.

Second, **tocilizumab**. Tocilizumab is a monoclonal antibody that blocks the IL-6 receptor. IL-6 is the central cytokine in CRS — it is both produced in large amounts during the storm and is itself the main driver of the downstream vasodilation, fever, and acute-phase response. Block IL-6 signaling, and you blunt the cytokine storm dramatically. Tocilizumab works fast — sometimes patients go from grade 3 CRS, requiring pressors, to feeling fine within hours of a tocilizumab dose. It is now standard to have tocilizumab ready at the bedside for any patient starting a bispecific T-cell engager, and protocols specify exact thresholds — typically, treat grade 2 CRS or higher with tocilizumab promptly.

\[Pause.\]

Here is the important comparison with CAR-T. **CAR-T CRS is generally worse than bispecific CRS.** The peak severity, the rate of grade 3 and 4 events, the rate of ICU admission — all higher for CAR-T. Why?

A few reasons. CAR-T cells expand. You give a few million CAR-T cells, and over the next two weeks they divide and multiply into billions inside the patient. The peak T-cell activity comes days after the infusion, when the cell numbers are maximal. With a bispecific, you control the dose. You give a certain amount of drug, it has a certain half-life, and you can stop giving it at any time. There's no expansion. There's no runaway feedback. If the patient is getting too sick, you stop the drug, the drug clears, the engagement stops. With CAR-T, you can't take the cells out. They're already inside, dividing.

Bispecific CRS is also more easily managed by step-up dosing, because the dose is in your control at every step. Step-up dosing with CAR-T doesn't really work, because you give all the cells at once and they decide on their own when to expand.

So the practical reality is that bispecific CRS is real, it is managed with step-up dosing and tocilizumab, it requires the first few doses to be given in a hospital with close monitoring, but it is usually much milder than CAR-T CRS. After the initial dose-escalation phase — usually a week or two — patients typically tolerate ongoing bispecific dosing as outpatients with minimal CRS recurrence.

This difference in CRS severity is one of the major reasons bispecifics have been adopted in community oncology practice more readily than CAR-T. A community hospital that cannot manage grade 4 CRS can usually manage grade 2 CRS, and bispecifics mostly stay in the grade 1 to 2 range after step-up dosing is complete. That is a meaningful operational advantage.

\[Pause.\]

There is also a milder version of neurotoxicity with bispecifics, analogous to what CAR-T people call ICANS — immune effector cell-associated neurotoxicity syndrome — though again, generally less severe than with CAR-T. Patients can get headaches, confusion, occasionally seizures. Management is dexamethasone and supportive care. It is uncommon for bispecific neurotoxicity to reach grade 3 or 4 in modern protocols with proper step-up dosing.

\[BREAK\]

---

## SEGMENT 10 — BiTE versus CAR-T: the off-the-shelf-versus-custom tradeoff

Welcome back. We are now at the most important comparison in this entire field — the comparison between **bispecific T-cell engagers** and **CAR-T cell therapy**. These two modalities both work by redirecting T cells onto cancer, but they go about it in radically different ways, and the practical differences shape essentially everything about how they're developed, manufactured, priced, and used.

Let me draw the contrast cleanly.

\[Pause.\]

**CAR-T cell therapy** works like this. You take the patient's own T cells out of their blood by leukapheresis. You ship them to a manufacturing facility — usually run by the drug company, sometimes a third-party manufacturer. There, the T cells are genetically engineered with a viral vector that inserts a CAR gene into their genome. They're expanded in culture for a couple of weeks. They're quality-controlled, frozen, shipped back. Meanwhile, the patient gets lymphodepleting chemotherapy to make room. Then the engineered T cells are thawed and infused. They expand in the patient. They kill the cancer. They persist for months to years.

The total time from leukapheresis to infusion is **three to six weeks**. The cost of the product is **around 400,000 to 500,000 dollars** per dose. The cost of the surrounding hospitalization, lymphodepletion, monitoring, and management of CRS often pushes the total to over a million dollars per patient. Each dose is bespoke — manufactured for one specific patient and not transferable to anyone else. If the manufacturing fails — and it does, in something like 5 to 10 percent of attempts — you have to start over, and the patient, who is critically ill, may not have time to wait.

\[Pause.\]

**BiTE / bispecific antibody therapy** works like this. You sit a vial on the pharmacy shelf. The vial was made in a bioreactor at industrial scale, like any monoclonal antibody — thousands of doses per batch, from a single cell line. The patient comes in. The pharmacy draws up the dose. The nurse gives the injection. The patient goes home that afternoon.

The total time from prescription to infusion is **hours**. The cost of the product is **around 30,000 to 80,000 dollars** per cycle, and patients usually need multiple cycles, so the cumulative cost over a treatment course might be **150,000 to 400,000 dollars**, depending on duration of response. Still expensive! But typically one-half to one-third the cost of CAR-T. And the vial in the pharmacy is the same vial that would be used for any other patient with the same indication — fully off-the-shelf, fully transferable, infinitely scalable.

The contrast can be summarized as:

**CAR-T**: Custom. Autologous. Manufactured per patient. Three weeks to make. $500K. Higher response rates in some settings. More durable remissions in some settings. Higher CRS severity. ICU-capable hospital required.

**BiTE / bispecific**: Off-the-shelf. Allogeneic in concept (a vial works on anyone). Manufactured in bulk. Same-day initiation. $50K per cycle. Generally lower complete response rates but real responses nonetheless. Lower CRS severity. Manageable in community oncology.

\[Pause.\]

So which one is better? The honest answer is that it depends on what you mean by better, and the field is still working out the right sequencing.

In **B-ALL**, the comparison has been studied head-to-head. CAR-T (tisagenlecleucel — Kymriah) in pediatric ALL produces durable complete responses in roughly 60 to 70 percent of relapsed / refractory patients, with about half of responders remaining in remission years later. Blinatumomab produces complete responses in around 40 to 45 percent of relapsed / refractory adult patients, mostly as a bridge to stem-cell transplant. CAR-T appears more durably curative in this setting. But blinatumomab is available immediately, doesn't require manufacturing time, and costs a fraction as much. For a patient whose disease is rapidly progressing and who can't wait three weeks for CAR-T, blinatumomab is the right answer. For a patient who has time and access, CAR-T may be more durably effective.

In **DLBCL after CAR-T failure**, the bispecifics — glofitamab, epcoritamab — have a clear role, because CAR-T is already off the table. The cancer has already escaped the engineered T-cell approach; the bispecific gives you another redirect with a different molecular strategy.

In **multiple myeloma**, the CAR-T products (Carvykti, Abecma) appear to produce more durable remissions than the bispecifics (teclistamab, elranatamab). But CAR-T has manufacturing constraints — Carvykti slot availability is genuinely a bottleneck — and patients can die waiting. The bispecifics give same-day access. Many myeloma centers now use bispecifics as the first BCMA-targeting therapy for patients who can't wait for CAR-T, and reserve CAR-T for patients who can.

\[Pause.\]

There is also a sequencing question that the field is actively working out. **What happens if you give a BiTE first, then CAR-T later?** Or CAR-T first, then a bispecific later? Do they interfere with each other? Does prior bispecific exhaustion of T cells reduce CAR-T efficacy? The data are still emerging, but the early signal is that BiTE-pretreated patients can still respond to CAR-T, and CAR-T-pretreated patients can still respond to bispecifics — especially if the second therapy targets a different antigen (e.g., BCMA CAR-T followed by GPRC5D bispecific). The redirection toolkit is becoming a layered, sequential strategy rather than a single magic shot.

The conceptual frame I'd want you to walk away with is this. **Bispecifics are the off-the-shelf cousins of CAR-T.** Same mechanism — redirected T cells, CD3-mediated activation, perforin / granzyme killing — but delivered as a small-molecule-like drug instead of as a manufactured cell product. They are cheaper, faster, and more scalable. They are also, on average, less durably effective. Whether that tradeoff is the right one depends on the patient, the disease, and how long they can wait. Both modalities are here to stay. They are going to be used in combination, in sequence, and as alternatives, for years to come.

---

## SEGMENT 11 — Beyond CD3: NK engagers and co-stim engagers

So far we have talked about T-cell engagers — molecules with one arm against CD3 and one arm against a tumor antigen. But the underlying idea — physically tethering a killer cell to a tumor cell — does not require T cells specifically. You can use the same trick to redirect any cell type with surface receptors you can grab and that has cytotoxic potential.

The most active alternative is **NK cells** — natural killer cells. NK cells are innate lymphocytes that kill virally infected and malignant cells using the same perforin / granzyme machinery T cells use, but without needing a specific TCR-mediated recognition step. NK cells already have a tolerance for "kill anything that looks wrong." They are easier to redirect, in a sense, because you do not need to bypass an exquisite specificity check.

\[Pause.\]

**NK cell engagers**, sometimes abbreviated **NKCEs** or **TriKEs** (tri-specific NK engagers), grab NK cells on one arm and tumor cells on the other arm. The NK-cell-binding arm typically targets **CD16**, the Fc-gamma receptor expressed on NK cells, or **NKG2D**, an activating receptor characteristic of NK cells. The tumor arm targets whatever antigen you choose.

A representative example is **AFM13**, an anti-CD30 x anti-CD16 bispecific from Affimed, in trials for CD30-positive lymphomas (Hodgkin lymphoma and some T-cell lymphomas). The molecule grips CD30 on the lymphoma cell and CD16 on the NK cell, bringing them together. NK cells, activated through CD16 cross-linking, kill the lymphoma cell. Why use an NK engager instead of a T-cell engager? The argument is that NK cells produce a different cytokine profile when activated — less IL-6, less of the TNF / IFN storm — and so the CRS profile may be milder. Also, NK cells don't expand or persist the way T cells do, which makes the duration of action more controllable.

\[Pause.\]

A different direction is **co-stimulation engagers**. These molecules don't engage the primary T-cell activation signal at CD3; instead they engage a **co-stimulatory** receptor like **4-1BB (CD137)** or **OX40**. In normal T-cell biology, you need signal 1 (TCR + antigen) AND signal 2 (co-stimulation) for full activation. If you give a T cell signal 1 alone, you tend to get anergy or exhaustion rather than productive killing.

The idea behind co-stim engagers is to **add a second, co-stimulatory signal at the tumor site**, complementing whatever T-cell activation is already happening locally (whether from a separate CD3 engager, from CAR-T cells, or from endogenous tumor-specific T cells). A 4-1BB x tumor-antigen bispecific delivers 4-1BB ligation specifically where the tumor antigen is, so the co-stim doesn't broadly activate T cells everywhere — it boosts whatever T cells happen to be engaging in the tumor microenvironment.

The intellectual appeal of co-stim engagers is in **combinations**. Imagine giving a CD3 x tumor BiTE _and_ a 4-1BB x tumor co-stim engager together. The first molecule pulls T cells into contact and provides signal 1. The second provides signal 2 at the same site. The combination produces robust, sustained T-cell activation precisely at the tumor, while sparing systemic immunity. Several such combinations are in clinical trials, with mixed but promising early results.

There are also **PD-1 x co-stim** bispecifics — molecules that block PD-1 on one arm (removing the brake) and engage 4-1BB on the other arm (pressing the gas), with both activities focused at the tumor site by tumor-antigen anchoring or by tumor-restricted activity. These are conceptual hybrids of checkpoint inhibitor and T-cell engager logic, and they are part of the broader thinking about how to push immune activation toward the tumor without producing systemic autoimmunity.

---

## SEGMENT 12 — The solid-tumor wall: why this is so hard

Now we get to the great unsolved problem of the field. Why don't bispecific T-cell engagers work for solid tumors? Not yet, anyway. There are dozens of bispecifics in clinical trials for breast cancer, lung cancer, pancreatic cancer, colorectal cancer, prostate cancer, ovarian cancer. There are some encouraging signals. There are no clear home runs. The hematologic-malignancy bispecifics are crushing it, with multiple approvals per year. The solid-tumor bispecifics are mostly struggling.

Why?

\[Pause.\]

The answer comes in three pieces, and they all stem from the same root cause: **tumor antigen selection is hard for solid tumors.**

**First piece: solid tumors lack lineage antigens.** B-cell cancers can be targeted by CD19 or CD20 because CD19 / CD20 are B-cell lineage markers — present on every B cell, malignant or not. You target CD19, you kill every B cell, malignant or normal, and you accept the loss of normal B cells because the patient can live without them temporarily. Multiple myeloma can be targeted by BCMA for the same reason — BCMA is plasma-cell specific, plasma cells are lineage-restricted, you kill them all and you accept the cost.

Solid tumors don't have this kind of lineage marker. There is no protein that is uniformly expressed on every pancreatic cancer cell and absent from every normal tissue. The cancers arose from epithelial cells; epithelial cells are everywhere. The antigens shared between the cancer and its tissue of origin are also expressed on the tissue of origin elsewhere — which is essential tissue. You can't just kill it.

**Second piece: on-target, off-tumor toxicity is much harder to manage.** When CD19-targeted CAR-T kills normal B cells along with the leukemia, the patient gets B-cell aplasia, which is annoying but survivable. When a HER2-targeted bispecific kills HER2-expressing cells everywhere — and HER2 is on cardiomyocytes, on gastric mucosa, on a bunch of essential tissues — the patient gets cardiotoxicity, GI toxicity, and potentially dies. The on-target off-tumor distance is much shorter for solid tumors because the target antigens are shared with essential tissues.

\[Pause.\]

There have been dramatic, fatal cases. Early trials of CAR-T against MAGE-A3 (a melanoma-associated antigen) killed patients within days due to cross-reactivity with titin in cardiac muscle. Early HER2 CAR-T trials produced fatal lung toxicity from low-level HER2 expression on lung epithelium. Each of these disasters taught the field that **antigen selection is the gating problem** for solid-tumor redirected T-cell therapy. You cannot proceed clinically until you have an antigen with enough tumor specificity that the inevitable killing of antigen-expressing normal cells does not exceed survivable limits.

**Third piece: the tumor microenvironment is immunosuppressive.** Solid tumors are surrounded by stroma, by suppressive immune cells (regulatory T cells, myeloid-derived suppressor cells, tumor-associated macrophages), by physical barriers (dense ECM, high interstitial pressure, hypoxia), and by soluble inhibitors (TGF-beta, adenosine, IDO metabolites). Even when a T-cell engager successfully bridges a T cell to a tumor cell, the local environment dampens the T-cell killing response. T cells get exhausted. They get suppressed. They die. The bispecific delivered them, but the environment shut them down.

\[Pause.\]

Different companies are taking different shots at this. **Bicycle Therapeutics** is using small peptide-based bispecific scaffolds — much smaller than antibody bispecifics, designed for better tumor penetration — to target Nectin-4 and other solid-tumor antigens. **Amgen** has bispecifics against **DLL3** for small-cell lung cancer (tarlatamab — recently approved) and against **PSMA** for prostate cancer. **Other companies** are working on **MUC16** for ovarian cancer, **EpCAM** for various carcinomas, **HER2-low** in breast cancer.

The DLL3 / small-cell lung cancer story is worth a moment. **Tarlatamab**, trade name **Imdelltra**, from Amgen, was approved by the FDA in May 2024 for extensive-stage small-cell lung cancer after platinum chemotherapy. It is a DLL3 x CD3 BiTE — a small-format BiTE, in the blinatumomab style — and it produced overall response rates around 40 percent in a disease where second-line therapies historically have response rates in the single digits. DLL3 turned out to be that rare solid-tumor antigen with reasonable specificity — present at high levels on small-cell lung cancer cells, low on normal tissues. The on-target off-tumor toxicity, while real, is manageable. This is the **first solid-tumor BiTE approval**, and it gives the field a foothold to argue that, with the right antigen, the redirected-T-cell approach can work in epithelial cancers.

But notice — tarlatamab succeeded because DLL3 happened to be a usable antigen for one specific cancer. The general problem of finding usable antigens for every solid tumor is far from solved. Each cancer has to be approached as its own antigen-hunt project, and most of those hunts have not yet produced a winner.

---

## SEGMENT 13 — Trispecifics: a third arm in the design

Now I want to talk about a design move that the field has started making in earnest: adding a third binding arm to the molecule. **Trispecific antibodies.** The idea is exactly what it sounds like — instead of two binding heads, you build three, each pointed at a different target.

Why would you do this? Three reasons.

\[Pause.\]

**First**, you might want to engage two different tumor antigens simultaneously, so that if one antigen is lost (the tumor escape problem we keep coming back to), the molecule still binds. A BCMA / GPRC5D / CD3 trispecific would engage T cells against myeloma cells that express either BCMA or GPRC5D — covering both populations, and remaining active against escape variants that have downregulated one antigen. A few such trispecifics are in early clinical trials.

**Second**, you might want to add a co-stimulation arm alongside the CD3 and tumor arms — building a single molecule that delivers signal 1, signal 2, and tumor targeting all at once. A 4-1BB / tumor / CD3 trispecific would in principle deliver fully productive T-cell activation precisely at the tumor, without the limitations of partial activation that single-bispecific T-cell engagers sometimes show.

**Third**, you can use the third arm for **half-life extension**. This is the approach that **HPN217**, from Harpoon Therapeutics, takes. HPN217 is a BCMA x CD3 x **albumin** trispecific. The third arm grips serum albumin — the most abundant protein in human blood, with a half-life of about three weeks. By tethering the bispecific to albumin in circulation, the molecule inherits albumin's pharmacokinetics, getting a much longer half-life without needing a full Fc region. The result is a small, deeply tissue-penetrant trispecific (no IgG-sized bulk) that nonetheless has a long enough half-life for once-weekly subcutaneous dosing. This is the kind of clever engineering hybrid the field is now producing — picking and choosing properties from antibody scaffolds and albumin biology and small-format BiTE design to get exactly the pharmacology you want.

The trispecific frontier is technically harder than bispecific design. You have three chains that have to pair correctly, three specificities that have to fold and bind without interfering with each other, and the resulting molecule is bigger and more complex to manufacture than a 2-arm bispecific. But the conceptual logic — more targets, more functions, one molecule — is appealing enough that essentially every major bispecific company has a trispecific program in early clinical development.

---

## SEGMENT 14 — Conditionally activated bispecifics: prodrug logic

Another frontier idea is **conditionally activated bispecifics** — sometimes called **probody bispecifics** or **tumor-activated bispecifics**. The motivating problem is the on-target off-tumor toxicity we've been talking about. If a bispecific binds CD3 and a tumor antigen, but the tumor antigen is also expressed at low levels on some essential normal tissue, then the bispecific kills the normal tissue too, and you can't use the drug. What if you could make the bispecific **inactive everywhere except inside the tumor**?

\[Pause.\]

Here's the concept. You build a bispecific with the CD3-binding arm partially blocked by a peptide mask — a little floppy peptide attached to the molecule by a **protease-cleavable linker**. While the mask is in place, the CD3 arm is sterically blocked and cannot engage T cells. The molecule is, in effect, a prodrug — inactive while circulating in normal tissue.

But inside the tumor microenvironment, certain proteases — like **matrix metalloproteinases (MMP-2, MMP-9)** or **urokinase plasminogen activator (uPA)** — are dramatically upregulated. These proteases cleave the linker on the mask, the mask falls off, the CD3 arm becomes exposed, and the bispecific switches on. Now it can engage T cells, kill tumor cells, do its job. Outside the tumor, in normal tissue with low protease activity, the mask stays on and the molecule stays inactive.

The therapeutic window opens up dramatically. You can target antigens that would otherwise be too dangerous, because the drug only activates where the tumor's biochemistry allows. This is the **probody platform** that CytomX has developed; several probody bispecifics — CX-904 (CD3 x EGFR), CX-2029 (CD71-targeted) — are in clinical trials. Early data are encouraging in terms of widening the tolerable dose, though no clear approval has emerged yet.

Variations on this theme include **pH-conditional** bispecifics (active only in the acidic tumor microenvironment), **redox-conditional** activation, and **dimerization-conditional** activation (where the molecule is in two halves that only come together in the tumor). The unifying logic is the same: the tumor microenvironment is biochemically different from normal tissue, and you can exploit that difference to make a drug that's only active where you want it.

---

## SEGMENT 15 — Checkpoint-engaging bispecifics: combining mechanisms

A different design direction is to combine **checkpoint blockade** with **T-cell engagement** in a single molecule. We talked, in the checkpoint inhibitor lecture, about drugs like **opdualag** — a fixed-dose combination of nivolumab (anti-PD-1) and relatlimab (anti-LAG-3), packaged together but as two separate molecules. The natural next step is to do the same thing in a single bispecific antibody: one arm anti-PD-1, one arm anti-LAG-3 (or anti-TIGIT, or anti-TIM-3), and now you have a single drug that hits two checkpoints simultaneously.

Several checkpoint-checkpoint bispecifics are in development. **Cadonilimab** (anti-PD-1 x anti-CTLA-4), from Akeso, is approved in China for cervical cancer and is in trials globally. The clinical rationale is to capture the synergy of dual checkpoint blockade with a single drug, simpler dosing, and potentially reduced toxicity compared to giving the two antibodies separately.

\[Pause.\]

Even more interesting are **checkpoint-on-tumor-arm bispecifics** — molecules that block PD-1 on one arm and engage a tumor antigen on the other, focusing checkpoint blockade specifically at the tumor site. This restricts the immune activation to the tumor microenvironment and may reduce systemic immune-related adverse events. **Ivonescimab** (anti-PD-1 x anti-VEGF), from Akeso and Summit Therapeutics, is one such molecule — it combines PD-1 blockade with VEGF blockade in one antibody, and recent trials have shown striking efficacy in non-small-cell lung cancer, including a head-to-head trial against pembrolizumab where ivonescimab was reportedly superior. If these data hold up, the checkpoint-targeting bispecific frontier could rewrite the standard of care in some indications.

This is a frontier worth watching. Combining mechanisms in a single antibody molecule — checkpoint blockade plus T-cell engagement, or checkpoint blockade plus co-stim, or T-cell engagement plus angiogenesis blockade — is one of the most promising design directions in current immuno-oncology drug discovery.

---

## SEGMENT 16 — AI-designed bispecific scaffolds

The last frontier I want to mention is **computational design** of bispecific molecules. We are now five years into the era of AlphaFold and related deep-learning protein structure tools, and the molecular biology of antibody engineering is being transformed by it. For bispecifics specifically, the central engineering problem — getting two different specificities to fold correctly, to pair correctly across the molecule, and to not interfere with each other sterically — is the kind of problem that machine learning is well-suited to attack.

\[Pause.\]

Several companies — **Generate Biomedicines**, **Absci**, **EvolutionaryScale**, **Cradle**, **Profluent**, others — are now offering computationally designed bispecific antibody scaffolds. The pitch is essentially: you tell us the two targets you want to hit, we use deep-learning models to design a scaffold that holds both binders in the correct geometry, and we deliver you a molecule that's been pre-optimized for stability, expression, and binding without the months of trial-and-error iteration that traditional protein engineering requires.

The early outputs are promising. Computationally designed bispecifics have entered preclinical and early clinical development at multiple companies. Whether they ultimately produce better drugs than human-designed ones is still an open question — the technology is too new to evaluate by clinical outcomes — but the **speed of generation** is undeniably faster. What used to take a year of antibody engineering can now sometimes be done in weeks of compute time.

I want to flag this not as a finished story but as an arrow pointing forward. The field of bispecifics is, in 2026, where the field of monoclonal antibodies was in the late nineties — past the proof-of-concept phase, with multiple approved drugs, but still iterating rapidly on scaffold design. AI-driven design is going to shape the next decade of bispecific discovery, both by accelerating known formats and by enabling entirely new molecular geometries that human designers wouldn't have thought to try.

---

## SEGMENT 17 — Putting it all together: the redirected-T-cell toolkit

We have covered a lot of ground. Let me step back and put the whole landscape into one mental map.

The **redirected-T-cell toolkit** consists of three main modalities, all of which point T cells at cancer cells they wouldn't otherwise recognize.

\[Pause.\]

**One: CAR-T cell therapy.** Autologous engineered T cells. Custom, expensive, slow to manufacture, sometimes durably curative. Best when the patient has time and access. Six approved products in the U.S. as of 2026, all for blood cancers, all built on the CD19 or BCMA antigen platform, with newer products against GPRC5D and other targets in development.

**Two: bispecific T-cell engagers.** Off-the-shelf small molecules (or IgG-like Fc-containing molecules) that grip CD3 on T cells and a tumor antigen on the cancer. Cheaper, faster, more scalable, generally less durable per cycle but repeatable. Blinatumomab for B-ALL. Mosunetuzumab, glofitamab, epcoritamab for lymphomas. Teclistamab, elranatamab for myeloma. Talquetamab for myeloma after BCMA. Tarlatamab for small-cell lung cancer. Many more in trials.

**Three: checkpoint inhibitors.** Antibody-based brake-release. Doesn't redirect T cells onto new targets; it liberates existing tumor-specific T cells. Pembrolizumab, nivolumab, ipilimumab, atezolizumab, and the rest. The largest oncology drug class by revenue, used across dozens of indications.

\[Pause.\]

These three modalities are increasingly used **together**, in combination and in sequence, as part of an integrated immuno-oncology strategy. Checkpoint inhibitor first, then a bispecific if checkpoint fails. CAR-T followed by a bispecific against a different antigen. Bispecific bridge to CAR-T. Trispecific T-cell engager plus checkpoint inhibitor. The combinations multiply.

The conceptual through-line — what I'd want you to keep in mind when you read any new immuno-oncology paper — is that the immune system has trillions of cells that could potentially kill cancer, but most of them either don't know the cancer is there, can't engage it for specificity reasons, or have been told to stand down by the cancer's brake-pressing. The therapeutic strategies of the last fifteen years have been about systematically removing each obstacle. Checkpoint inhibitors remove the brake. CAR-T provides a new specificity by engineering. Bispecifics provide a new specificity by chemical matchmaking, on the spot, without engineering. Each modality solves a different piece of the puzzle. Combined, they convert what used to be untreatable cancers into manageable diseases — at least for blood cancers, and increasingly, with effort, for solid tumors too.

---

## SEGMENT 18 — Where the field is going

Let me close with a quick scan of the horizon. Where is the bispecific field going in the next five to ten years?

\[Pause.\]

**First**, the **solid-tumor problem** is going to keep getting attention. Tarlatamab opened the door in small-cell lung cancer. Several other solid-tumor bispecifics are deep in trials. The answer is probably not going to be one breakthrough molecule; it's going to be a slow accumulation of targets, each with its own clinical niche. HER2-low in breast cancer. PSMA in prostate. Claudin-18.2 in gastric. EGFR variants in head-and-neck. The targets are being mapped one by one, with each successful target opening a new indication.

**Second**, the **antigen escape problem** is going to drive the development of **multi-target bispecifics and trispecifics**. Sequential single-target therapy — BCMA, then GPRC5D, then something else — will increasingly be replaced by molecules that engage multiple tumor antigens simultaneously. The expectation is fewer escape mutants and more durable responses.

**Third**, **conditionally activated bispecifics** — probodies, pH-sensitive, protease-activated — are going to widen the addressable target space. Antigens that are currently too dangerous to target because of on-target off-tumor toxicity will become accessible if the drug can be made tumor-conditionally active.

**Fourth**, **AI-driven design** is going to accelerate the discovery cycle. Companies that can computationally generate, optimize, and prioritize bispecific candidates will iterate faster than companies relying on traditional methods. Whether this produces better drugs or just faster ones is an open empirical question.

**Fifth**, the **operational side** of bispecific delivery — subcutaneous formulation, home administration, less frequent dosing — is going to keep evolving. The blinatumomab pump was the original operational nightmare; the current state of the art with weekly subcutaneous injections is much better; the future state with monthly or quarterly injections via long-acting formulations is the next milestone. The clinical workflow matters as much as the molecular design.

**Sixth**, the **cost question** is unsolved. Bispecifics are cheaper than CAR-T but still expensive — typically tens of thousands of dollars per cycle. Health systems are struggling with the cumulative cost of indefinite bispecific therapy in chronic conditions like myeloma. The drug development industry will need to find ways to make these therapies affordable at scale, or the access problem that already shadows immunotherapy will get worse.

\[Pause.\]

We have come a long way from blinatumomab and its 28-day pump. The class of drugs we've discussed today — bispecific T-cell engagers and their relatives — went from a single approval in 2014 to nearly a dozen approvals by 2026, with hundreds in clinical trials. They have transformed the treatment of B-cell leukemia, lymphoma, and multiple myeloma. They have begun, with tarlatamab, to make inroads into solid tumors. They sit alongside CAR-T and checkpoint inhibitors as one of the three pillars of modern immuno-oncology.

The core idea remains the same as it was in 2014: a tiny piece of double-sided sticky tape, one side gripping CD3 on a T cell, the other side gripping a tumor antigen, forcing them together, letting the T cell do what T cells do. Everything else — the Fc engineering, the trispecifics, the probodies, the AI design — is variation on that one idea. The simplicity of the central concept is, in retrospect, why the field has moved so fast. Once you understand the matchmaking principle, every new approval and every new target slots into the same framework.

Thank you all for your attention today. That's the lecture.

---

## APPENDIX — Quick-reference summary (not for reading aloud)

**Central idea**: a bispecific T-cell engager is a small antibody-derived molecule with two binding arms — one for CD3 on T cells, one for a tumor antigen. It physically tethers any passing T cell to a tagged cancer cell, forcing them together. CD3 crosslinking activates the T cell, which kills the cancer cell. No prior T-cell specificity required.

**Architectures**:
- **BiTE (small format)**: two scFvs on a flexible linker, ~55 kDa, no Fc. Short half-life (~2 h). Requires continuous IV infusion. Example: blinatumomab.
- **Fc-containing bispecific**: IgG-like scaffold with two different arms and an Fc-silenced stem. ~150 kDa. Long half-life (1–3 weeks). Weekly to monthly dosing. Most newer approvals.

**Why CD3 specifically**: invariant signaling component of the TCR complex; expressed on every T cell; clustering CD3 itself activates the T cell regardless of natural TCR specificity. Universal activation handle.

**Approved BiTEs / bispecifics (representative, 2014–2026)**:
- **Blinatumomab (Blincyto)**, 2014, Amgen — CD19 x CD3 for B-ALL. Continuous IV pump for 28 days.
- **Mosunetuzumab (Lunsumio)**, 2022, Roche/Genentech — CD20 x CD3 for follicular lymphoma. IV.
- **Teclistamab (Tecvayli)**, 2022, Janssen — BCMA x CD3 for myeloma. Subcutaneous.
- **Glofitamab (Columvi)**, 2023, Roche/Genentech — CD20 x CD3 (2+1 with two CD20 arms) for DLBCL. IV.
- **Epcoritamab (Epkinly)**, 2023, Genmab/AbbVie — CD20 x CD3 for DLBCL. Subcutaneous.
- **Elranatamab (Elrexfio)**, 2023, Pfizer — BCMA x CD3 for myeloma. Subcutaneous.
- **Talquetamab (Talvey)**, 2023, Janssen — GPRC5D x CD3 for myeloma. Subcutaneous.
- **Tarlatamab (Imdelltra)**, 2024, Amgen — DLL3 x CD3 for small-cell lung cancer. First solid-tumor BiTE approval.

**Cytokine release syndrome (CRS)**:
- Driven by mass T-cell activation and IL-6 release.
- Managed by **step-up dosing** (gradual dose escalation in first cycle) and **tocilizumab** (anti-IL-6R antibody).
- Generally milder than CAR-T CRS because the dose is controllable.

**BiTE vs CAR-T tradeoff**:
- CAR-T: autologous, custom-manufactured, $500K+, 3-week wait, more durable responses, higher CRS.
- Bispecific: off-the-shelf, $50K per cycle, same-day initiation, repeatable, generally less durable per course.
- Used in sequence and combination; not purely competitors.

**Frontiers**:
- **NK engagers**: CD16 or NKG2D on NK cells x tumor antigen. Milder cytokine profile.
- **Co-stim engagers**: 4-1BB or OX40 x tumor antigen. Combine with CD3 engagers.
- **Trispecifics**: three arms (e.g., HPN217 = BCMA x CD3 x albumin for half-life extension).
- **Conditionally activated (probody) bispecifics**: masked CD3 arm unblocked by tumor proteases.
- **Checkpoint-bispecifics**: PD-1 x VEGF (ivonescimab), PD-1 x CTLA-4 (cadonilimab), PD-1 x LAG-3.
- **AI-designed scaffolds**: Generate Biomedicines, Absci, EvolutionaryScale, others.

**Solid-tumor barrier**:
- No lineage antigens (no equivalent of CD19/BCMA).
- On-target off-tumor toxicity often lethal.
- Immunosuppressive tumor microenvironment.
- Tarlatamab/DLL3 is the first solid-tumor BiTE approval (2024).

**Analogy summary**:
- BiTE = double-sided sticky tape, one side CD3, one side tumor antigen.
- BiTE vs CAR-T = off-the-shelf vial vs custom-manufactured cell product.
- Continuous infusion (blinatumomab) = operational headache of small-format short-half-life BiTEs.
- Fc-containing bispecifics = the half-life-extension upgrade enabling weekly/monthly dosing.
- BCMA gold rush = teclistamab and elranatamab racing for the same myeloma niche.
- GPRC5D (talquetamab) = the second shot when BCMA fails.
- Solid-tumor frontier = antigen selection is the gating problem; tarlatamab/DLL3 is the foothold.

