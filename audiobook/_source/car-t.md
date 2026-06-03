# CAR-T Cell Therapy: Rewiring the Immune System to Hunt Cancer

**A 2-hour undergraduate biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, landing comfortably inside a two-hour slot. (Read faster, ~140 wpm, and you'll have generous room for questions.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The central idea: rewire the patient's own T cells

Alright, let's get started. Good morning, everyone. For the next two hours we're going to talk about one of the most dramatic cancer therapies of the last decade, and arguably the most dramatic single advance in cancer medicine since chemotherapy itself. It's called **CAR-T cell therapy**. CAR stands for **chimeric antigen receptor**, and T stands for T cell — the killer cell of your adaptive immune system. Put them together and you have the central idea of the entire field, which I want to give you in one sentence, right now, before any details, before any names, before any history.

Here it is. **We take the patient's own T cells out of their body, genetically engineer those T cells to express a new receptor that recognizes their cancer, grow up millions of these reprogrammed cells in a vat, and then infuse them back into the patient — where they hunt down and kill the cancer.**

That's it. That's the therapy. Everything we're going to talk about today — the receptors, the manufacturing, the side effects, the different generations of design, the different cancer targets, the move toward off-the-shelf cells — all of it is engineering and refinement and clinical detail built on top of that one idea.

\[Pause.\]

Now, think about how strange this is, when you stop and look at it. Every other cancer drug in history has been a _thing_. A small molecule. A monoclonal antibody. A protein. A pill. A bag of fluid to hang on an IV pole. CAR-T isn't a thing. **CAR-T is a population of living cells**, drawn from one specific patient, engineered for that one specific patient, and dosed once. The drug is alive. It divides. It persists. It can, in the best cases, expand a thousandfold inside the patient over a couple of weeks, eat through the cancer, and then settle down into a long-lived memory population that patrols the body for years, waiting for the cancer to come back. The drug is, in some real sense, _part of_ the patient now. You can't put it back in a vial. You can't recall it. It is the patient's own immune system, edited.

This is a genuinely new kind of medicine. We have a name for it — **cell therapy**, or more specifically, **adoptive cell therapy** — and CAR-T is its most successful product so far. There are now six FDA-approved CAR-T products on the market, all of them used to treat blood cancers — leukemias, lymphomas, multiple myeloma. The first FDA approval was in 2017. The Emily Whitehead case, which we'll spend an entire segment on, happened in 2010. So the entire field, from first patient to commercial therapy, is about fifteen years old as of this lecture. It is still moving.

\[Pause.\]

If you walk out of here in two hours and you can do three things — one, sketch a CAR molecule and tell me what each piece does; two, explain in plain English why this works for B-cell leukemia and why it doesn't yet work for pancreatic cancer; three, look at a news headline about a "new CAR-T approval" or a "new allogeneic CAR-T trial" and have an honest sense of what's new and what isn't — then we've succeeded. Everything else is detail hung onto those three.

Let me set up the structure of the rest of the lecture. We'll start with why **T cells** are the right starting point — the natural killer cells of the immune system, with built-in machinery for targeted assassination. Then we'll build the **CAR molecule itself**, piece by piece, and walk through the four generations of CAR design — the on-switch, the battery, the bigger battery, and the cytokine factory. Then we'll tell the **Emily Whitehead story**, because the whole field really does rest on a six-year-old's near-death and resurrection in a hospital in Philadelphia in the spring of 2012. Then the founders — Carl June, Bruce Levine, David Porter, Steven Rosenberg. Then the six approved drugs, in order. Then the manufacturing pipeline. Then the side effects — cytokine release syndrome and ICANS — which are the price you pay for unleashing a living drug. Then lymphodepletion, the chemo conditioning that makes CAR-T work. Then we'll spend the second half of the lecture on **what's hard and what's next** — solid tumors, allogeneic cells, BiTEs as the alternative, the cost problem, in vivo CAR-T.

That's the map. Now let's start with the cells themselves.

---

## SEGMENT 2 — Why T cells: the right vehicle for the job

To understand why CAR-T works at all, you have to understand why **T cells**, specifically, are the natural starting point for engineered cell therapy. Other immune cells exist. We have B cells, which make antibodies — we just spent a whole separate lecture on those. We have macrophages, neutrophils, natural killer cells, dendritic cells, mast cells. The body has a whole zoo of immune cells, each evolved for a specific job. So why did the field converge, almost from the beginning, on T cells as the cell to engineer?

The answer has four pieces, and I want you to hold all four together, because together they explain why T cells are such an unusually good substrate for this kind of work.

\[Pause.\]

**Piece one: T cells are natural killers.** Not "natural killer cells" — that's a different lineage, confusingly named. I mean: a subset of T cells, called **cytotoxic T cells** or **CD8-positive T cells**, are the body's professional cell-killing assassins. Their entire job, day in and day out, is to walk up to other cells, inspect them, and if those cells look infected or abnormal, kill them on the spot. They kill by punching holes in the target cell's membrane with a protein called **perforin**, then injecting enzymes called **granzymes** through the holes; the granzymes trigger apoptosis from inside the target. The whole assassination takes minutes. A single cytotoxic T cell can kill dozens of target cells in a row, like a hitman with a long contract list. This is not a passive surveillance role; T cells were literally evolved to do targeted killing of bad cells in your body. If you're going to engineer a cell to hunt cancer, you want a cell that already knows how to hunt and kill. T cells do.

**Piece two: T cells are specificity machines.** They don't just kill anything they bump into — they kill only cells that present a specific molecular signature, recognized by a receptor on the T cell's surface called the **T cell receptor**, or TCR. The TCR is exquisitely specific. Each T cell has its own unique TCR, generated by the same kind of V(D)J recombination dice-rolling that B cells use for antibodies — so each one recognizes a different molecular shape. Across the millions of T cells in your body, you have receptors covering essentially every shape a piece of foreign protein could plausibly take. So you have a cell type that combines built-in killing machinery with built-in targeting machinery, separately programmable. That's exactly the architecture you'd want if you were designing an engineered assassin cell from scratch. T cells got there first, by about four hundred million years.

**Piece three: T cells have memory.** When a T cell encounters its target, gets activated, and divides into an army of identical daughters, some of those daughters become short-lived **effector T cells** that go kill the targets and then die. But others become **memory T cells** — long-lived, quiet, persistent cells that circulate for years or decades, ready to re-mobilize instantly if the same target ever shows up again. This is exactly what you want from a cancer drug: durable, long-term protection. A traditional chemotherapy drug gets cleared from the blood in hours or days. A CAR-T product can persist in the patient for years, with the memory subset standing guard. There are Emily Whitehead-era patients who, more than a decade after their single infusion, still have detectable CAR-T cells in their blood. The drug is _still there_. That's the kind of pharmacology you cannot get with a small molecule. You can only get it from a cell that knows how to make memory of itself.

**Piece four: T cells are long-lived and divide in response to their target.** When a T cell sees what it's looking for, it expands. One cell becomes a thousand, then a million. The drug _amplifies itself_ in response to the disease. The more cancer there is for the CAR-T to find, the more CAR-T you end up with. This is a wild property — imagine if every aspirin tablet you took multiplied a thousandfold inside your body in response to your headache. It also means that a CAR-T infusion is a single-shot deal in most cases. You don't dose it every six weeks like a checkpoint inhibitor. You give it once, the cells expand, they do their work, and the surviving memory cells hang around. One infusion, and in the lucky cases, the patient is in remission for years.

\[Pause.\]

So put those four pieces together. T cells are natural killers. They're naturally targeted. They make memory. They self-amplify in response to disease. If you were going to build a "smart" cancer drug — one that finds the cancer, kills it, remembers what it killed, and keeps watching — you would design something that looks almost exactly like a T cell. Evolution did the hard work; the CAR-T field is mostly about giving those T cells a new targeting receptor pointed at cancer, instead of their natural ones pointed at infections.

And that brings us to the question of what, exactly, that new receptor looks like. Because the natural T cell receptor — the TCR — is a complicated, finicky, deeply evolved molecule that recognizes very specific kinds of targets in a very specific way. To redirect T cells onto cancer, the field needed a simpler, more modular receptor — one that could be designed by humans, swapped in, and pointed at arbitrary surface molecules on cancer cells. That receptor is the CAR, and we're going to build it next.

---

## SEGMENT 3 — Building a CAR: antibody on the outside, T cell on the inside

The chimeric antigen receptor is one of the most beautiful pieces of molecular engineering in modern biology, and I want you to leave this segment with a clear picture of it in your head — because once you see how the CAR is built, you understand essentially the whole field.

The word **chimeric** is the giveaway. A chimera, in Greek mythology, was a creature made of pieces of other creatures — a lion's head, a goat's body, a serpent's tail. In molecular biology, a chimeric protein is one that's been built by stitching together pieces of different natural proteins into a new combination that doesn't exist in nature. The CAR is exactly that. It's a Frankenstein protein, sewn together from parts of an antibody, a T cell receptor, and various signaling components, fused into a single chain of amino acids that the engineered T cell expresses on its surface.

\[Pause.\]

Here's the analogy I want you to hold. Imagine a syringe held by a hand. The needle of the syringe sticks outside the cell — it's the part that reaches out into the world and grabs the target. The hand is inside the cell, gripping the syringe — it's the part that does work, that translates the grab into action. The shaft of the syringe runs through the cell membrane, connecting the two. Outside — recognition. Inside — killing. The membrane in between is just the wall, with the syringe poked through it.

That's the CAR. It has three structural domains, in three layers — outside the cell, in the membrane, and inside the cell — and each layer was borrowed from a different natural protein.

**Layer one — the outside, the recognition end.** The part of the CAR that sticks out of the T cell and grabs cancer is, structurally, **a single-chain antibody fragment**. We call it an **scFv**, which stands for "single-chain variable fragment." Remember from the antibodies lecture: a normal antibody is a Y-shape with two arms, and the very tip of each arm — the antigen-binding pocket — is formed by a heavy-chain variable region and a light-chain variable region cradled together. The scFv takes just those two variable regions and connects them with a short flexible linker, so the whole antigen-binding pocket is collapsed into one continuous protein chain instead of two separate chains. It still has all six CDR loops at the tip. It still binds antigen with the same specificity as the original antibody. It's just been simplified into a single peptide chain so it can be encoded as one gene and fused to other things downstream. So the recognition end of the CAR is, essentially, **the tip of an antibody arm**, repurposed and minimized.

This is the part you swap when you want to point CAR-T at a different cancer. Want to hunt cells expressing CD19? Use an scFv derived from an anti-CD19 antibody. Want to hunt cells expressing BCMA? Use an scFv from an anti-BCMA antibody. The scFv is the targeting module. It's modular and interchangeable, and that modularity is essentially the entire engineering value of the CAR design.

**Layer two — the middle, the transmembrane domain.** The CAR needs to pass through the T cell's membrane, so there's a stretch of hydrophobic amino acids — typically borrowed from CD8 or CD28, two other T cell surface proteins — that forms an alpha-helix and embeds in the lipid bilayer. There's also a short **hinge** region connecting the scFv to the transmembrane segment, giving the receptor a little flexibility so it can swing around and find its target. The transmembrane and hinge are structural and not particularly exciting from a design standpoint, but they matter — different transmembrane choices subtly affect how the CAR clusters in the membrane, how strongly it signals, how the T cell behaves overall.

**Layer three — the inside, the signaling end.** This is where the magic of T cell biology gets reused. When a normal T cell receptor recognizes its target, it doesn't kill the target directly; instead, it triggers a complicated downstream signaling cascade inside the T cell that activates the killing machinery, the cytokine production, the division program — everything that turns a quiet patrolling T cell into an active killer. That signaling cascade starts with a protein chain called **CD3-zeta**, sometimes written as CD3ζ, which has three signaling motifs on its cytoplasmic tail called ITAMs — immunoreceptor tyrosine-based activation motifs. When the TCR is engaged, the ITAMs get phosphorylated, and that kicks off the whole activation cascade.

So when you build a CAR, you take the cytoplasmic tail of CD3-zeta — those activation motifs — and fuse them to the inside end of your chimeric receptor. Now, when the scFv outside grabs cancer, the CD3-zeta inside fires off the natural T cell activation cascade. You've borrowed the T cell's own kill switch and rewired it to a new doorbell.

That's a first-generation CAR — and as we'll see in the next segment, just CD3-zeta alone turned out not to be enough. But conceptually, the architecture is: antibody on the outside (specificity), T-cell signaling on the inside (killing), connected through the membrane. Outside, you tell the cell _what_ to grab. Inside, you tell the cell _how_ to react. **Frankenstein engineering. Antibody arm sewn onto T-cell signaling tail.** That's the CAR.

\[Pause.\]

One more thing about the architecture before we move to the generations. The CAR sits in the membrane as a single protein, but in practice it dimerizes or clusters when it engages target — multiple CARs come together, bringing multiple CD3-zeta tails into proximity, which amplifies the signal. This clustering is also why the **target antigen has to be a real surface protein on the cancer cell**, not something hidden inside. The CAR sees only what its scFv arms can physically reach from the outside. This is going to matter enormously when we talk about why solid tumors are hard — many of the most cancer-specific molecular markers are intracellular, hidden where a CAR scFv can never reach.

For now: outside scFv, transmembrane stalk, inside signaling. Three layers, one chimeric chain, one engineered T cell that hunts whatever the scFv points it at.

---

## SEGMENT 4 — The four generations of CAR design

The CAR I just described is what we call a **first-generation CAR**. It's the minimal design — scFv on the outside, CD3-zeta on the inside, and nothing else. The first wave of clinical trials, in the late 1990s and early 2000s, used first-generation CARs. They didn't work. Patients got CAR-T cells infused; the cells went into the body; and within a few days, the cells were gone. They didn't persist. They didn't expand. They didn't kill cancer in any meaningful way. The whole concept was almost written off as a failure.

The diagnosis, eventually, was this: **the T cells needed more than just an activation signal.** They needed what immunologists call a **co-stimulatory signal** — a second, simultaneous signal that says "yes, this activation is real, this is a legitimate target, commit to it, keep going, divide, survive, persist."

\[Pause.\]

Here's the analogy I want you to use for the four generations of CAR. Think of starting a car. A first-generation CAR is a car with only an ignition switch — turn the key and the engine fires up momentarily, but there's no battery, so it dies almost immediately. **Second generation adds a battery.** **Third generation adds a bigger, more complicated battery.** **Fourth generation builds in not just a battery but a small factory in the trunk that produces fuel for nearby cars too.**

Let me walk you through each.

**First generation — ignition only.** CD3-zeta and nothing else. The T cell gets activated when the CAR engages, but the activation is not sustained. The cells die, often by apoptosis, within days. As I said: doesn't work clinically. The historical role of first-generation CARs is to teach the field that activation alone is not enough.

**Second generation — ignition plus battery.** The key insight, around the mid-2000s, was to add a **co-stimulatory domain** to the intracellular tail of the CAR, in series with CD3-zeta. The co-stimulatory domain is another stretch of cytoplasmic signaling sequence, borrowed from a different natural T cell surface protein, that delivers the "persist and survive and divide" signal. Two domains have become the workhorses of the field: **CD28** and **4-1BB** (also called CD137).

CD28 co-stimulation drives fast, strong T cell expansion — the cells light up quickly, kill aggressively, and tend to burn out a bit sooner. 4-1BB co-stimulation drives slower, steadier expansion — the cells take a bit longer to ramp up, but they persist much longer in the patient. There's genuine biological difference here in how the metabolism of the engineered cells gets wired: CD28-CARs tend toward more glycolytic, effector-style metabolism, while 4-1BB-CARs lean toward more oxidative, memory-style metabolism that supports long-term persistence. There are real clinical trade-offs that follow from this choice.

Almost every approved CAR-T product on the market today is a second-generation CAR. Some use CD28 — Yescarta and Tecartus use CD28. Some use 4-1BB — Kymriah, Breyanzi, Abecma, Carvykti use 4-1BB. The field is still debating which is better for which indication, and the honest answer seems to be that both can work, and the choice interacts with everything else about the patient and the cancer.

**Third generation — ignition plus a bigger battery.** Why not stack _two_ co-stimulatory domains in series, to get even more persistence? Third-generation CARs have scFv-transmembrane-CD28-4-1BB-CD3-zeta, or some other combination — two co-stimulatory domains in the tail. The idea is to get the best of both, with maximally strong and durable activation. In practice, third-generation CARs have been mostly equivalent to second-generation in clinical trials so far, and they've been harder to manufacture and harder to characterize. They exist, they're being tested, but the field hasn't decisively moved to them yet. The marginal benefit of the second co-stimulator hasn't been worth the added complexity.

**Fourth generation — armored CARs, the TRUCKs.** This is where the design gets really clever. A fourth-generation CAR-T cell carries not just the receptor but also an additional engineered cargo — usually a gene that causes the cell to produce a **cytokine** when it's activated. The cytokine — typically IL-12 or IL-15 or IL-18 — is dumped into the local environment around the engineered cell when it engages target. The cytokine then activates and recruits other immune cells nearby, including other T cells, natural killer cells, macrophages. So a fourth-generation CAR-T isn't just a single assassin; it's an assassin that calls in reinforcements.

The acronym TRUCK — sometimes used for these — stands for "T cells Redirected for Universal Cytokine Killing." The name is a little tortured, but the idea is clean: turn each engineered cell into a portable cytokine factory that activates the rest of the immune system at the tumor site. Fourth-generation CARs are still mostly experimental, but they're particularly interesting for **solid tumors**, where the local tumor microenvironment is immunosuppressive and just sending T cells in is often not enough — they get shut down, exhausted. A CAR that secretes its own cytokine support can, in principle, push past that suppression.

\[Pause.\]

So the four generations, in summary: **first generation, on-switch only, didn't work**. **Second generation, added a battery — CD28 or 4-1BB — and the field came alive**. **Third generation, two batteries, marginal extra benefit, hard to scale**. **Fourth generation, the TRUCKs, on-switch plus battery plus cytokine factory, designed for harder problems including solid tumors**.

And then there are people who talk about fifth-generation CARs, which add yet another module — for example, a JAK/STAT signaling domain that gives the cell more cytokine independence. The numbering is becoming a little blurry as the field generates more variations. But the conceptual through-line is consistent: keep adding modules to the intracellular tail to give the engineered T cell more of what it needs to survive, expand, and kill in increasingly hostile environments.

What none of these designs change is the modular outside — the scFv. You can swap the targeting domain to point the same intracellular signaling architecture at any surface antigen of interest. That's the engineering payoff of the chimeric design. One signaling backbone, many possible targets.

---

## SEGMENT 5 — Emily Whitehead, 2010: the case that made the field

Now I want to slow down and tell you a story, because the entire CAR-T field, as a clinical reality and not just a theoretical exercise, rests on the shoulders of a single patient. Her name is **Emily Whitehead**, and in April 2012, when she was six years old, she became the first child in history to be cured of acute lymphoblastic leukemia — **ALL** — with CAR-T therapy.

Emily was diagnosed with B-cell ALL when she was five. ALL is, in most pediatric cases, a very treatable cancer — about 85% of kids with ALL are cured with standard chemotherapy. Emily was in the unlucky 15%. Two rounds of induction chemo. Relapse. Bone marrow transplant evaluated, but she relapsed again before it could happen. By early 2012, her cancer had come back twice, she had failed multiple chemo regimens, and her doctors at Children's Hospital of Philadelphia had run out of standard options. Six years old. Out of options.

\[Pause.\]

At that same moment, just across town at the University of Pennsylvania, a research group led by **Carl June** had been working on CAR-T for about a decade. They had treated three adults with chronic lymphocytic leukemia, CLL, with an anti-CD19 CAR-T product, and gotten remarkable results in two of them — durable remissions in patients who had also been considered out of options. Those three adult cases, published in 2011, had been the first solid evidence that CAR-T could actually work in humans. But no child had ever been treated. Pediatric ALL hadn't been touched.

Emily's family pushed for compassionate use. The CHOP pediatric oncology team, working with the Penn researchers, agreed to try. Emily's T cells were drawn from her blood, sent to the Penn manufacturing facility, engineered with the anti-CD19 CAR (using a lentiviral vector, exactly the kind of thing we covered in the lentivirus lecture), expanded over a couple of weeks, and on April 17, 2012, infused back into her.

What happened next is the part of the story that's now famous, and you should know it because it set the template for every CAR-T treatment that has happened since.

For about a week after infusion, things looked okay. Then Emily got sicker — much sicker. She spiked enormous fevers. Her blood pressure crashed. She went onto a ventilator in the pediatric ICU. Her multiple organ systems started failing. The clinical team was watching, in real time, the most severe case of cytokine release syndrome — CRS — that anyone had yet seen with CAR-T, although the term itself wasn't standardized at that point. Her engineered T cells, encountering an enormous tumor burden, were expanding explosively, killing leukemic B cells, and dumping huge quantities of inflammatory cytokines into her bloodstream. The cytokines were doing as much damage to her organs as the leukemia ever had. She was dying — but she was dying because the treatment was working too well.

Carl June and his team scrambled to find anything that might tamp down the inflammation. Someone — the story varies a bit on exactly who had the idea first — pulled a routine lab panel and noticed Emily's blood **interleukin-6** levels were astronomical. IL-6 is a master inflammatory cytokine. And there happened to exist an FDA-approved monoclonal antibody, **tocilizumab**, that blocked the IL-6 receptor — it had been approved for rheumatoid arthritis. The team got an emergency dose. They gave it to Emily.

She turned the corner within hours. The fever dropped. Her organs began to recover. Within days she was off the ventilator. Within weeks she was out of the hospital. And — here is the part that made the field — when they tested her bone marrow, the leukemia was **gone**. Not reduced. Not in partial remission. _Gone_. Undetectable. The engineered T cells had hunted down and killed every CD19-positive B cell in her body, including all the leukemic ones.

Emily Whitehead, as of this lecture in 2026, is in her early twenties. She has remained continuously in remission for more than a decade. She is, by any standard, cured. There is a foundation in her name. There's a photograph of her with President Obama at the White House. She is the first child, anywhere on earth, to be cured of refractory ALL by CAR-T.

\[Pause.\]

I want to dwell on this case for a moment because it does multiple jobs at once.

**First**, it's the existence proof. Until April 2012, CAR-T was a promising experimental therapy that had worked in three adults. After April 2012, it was a therapy that had pulled a six-year-old back from the brink and cured her of a previously incurable cancer. That changed the conversation entirely. Investment poured in. Trials expanded. The next several years saw CAR-T move from a couple of academic labs to a major industrial program.

**Second**, it taught the field how to manage CRS. Tocilizumab, which Emily got essentially by accident in 2012, is now the standard-of-care first-line drug for severe CAR-T-associated cytokine release syndrome. Every CAR-T center stocks it. Every protocol calls for it. The grading scale for CRS severity (Lee criteria, ASTCT criteria) was developed in part from Emily's case and others like it. We'll come back to CRS in detail in Segment 11.

**Third**, it established the **CD19 paradigm**. The molecule the CAR targeted on Emily's cancer was CD19 — a surface protein found on essentially all B cells, both normal and leukemic. The CAR-T killed her cancer, but it also killed all her normal B cells, which is a serious side effect (called **B-cell aplasia**) but a manageable one — you can give patients regular infusions of pooled antibodies (intravenous immunoglobulin, IVIG) to replace the antibody function. CD19 became, and remains, the most successful CAR-T target. Every approved CAR-T for B-cell leukemias and lymphomas targets CD19. The "ideal" target features that CD19 has — expressed on essentially all cancer cells, expressed on a non-essential normal cell lineage, and on the surface — became the template the field looks for in every new indication.

So when you read about CAR-T, anywhere, you're reading about a field whose entire credibility started with one infusion in April 2012 and one little girl who wouldn't have lived past her seventh birthday without it. That's the Emily Whitehead case. Remember it.

---

## SEGMENT 6 — The founders: Carl June, Steven Rosenberg, and the long road

CAR-T didn't appear in 2010 out of nowhere. The conceptual lineage stretches back to the late 1980s, and the people who built it spent decades being doubted, defunded, and dismissed before the field caught fire. I want to introduce you to four of the central figures, because the names will come up repeatedly when you read anything about cell therapy.

\[Pause.\]

**Carl June** is, fairly, the most famous name in the field today. He's at the University of Pennsylvania, where he runs the Center for Cellular Immunotherapies. June trained originally as a hematologist-oncologist and bone marrow transplant doctor. He spent the 1980s and 1990s at the Naval Medical Research Institute working on T cell biology, particularly on ways to grow large numbers of human T cells outside the body — work that came partly out of HIV research, where the dream had been to grow up healthy T cells and reinfuse them. He didn't invent the CAR concept, but his lab pushed the second-generation 4-1BB design into clinical reality, established the lentiviral manufacturing process at Penn, and led the team that treated Emily Whitehead. The CAR-T product that became Kymriah — the first FDA-approved CAR-T, in 2017 — came directly out of his work.

**Bruce Levine** runs the manufacturing side of June's group — he's the cell processing expert who actually figures out how to grow billions of engineered T cells reliably, in clean conditions, at clinical scale. The manufacturing problem is enormous and constantly underrated; we'll spend an entire segment on it. Without Levine and the engineers around him, the conceptual breakthrough wouldn't have become a therapy.

**David Porter** is the clinician at Penn who treated the first three adult CLL patients in 2011 — the cases that proved CAR-T could induce durable remissions in humans. He's the person who actually sat at the bedside as the field's first responders showed CRS, recovered, and then turned out to have eliminated their leukemias. His 2011 New England Journal paper, with June, was the publication that woke the field up.

**Steven Rosenberg** is the elder statesman of cell therapy — the founding figure of the entire field of adoptive cell transfer in cancer. Rosenberg, at the National Cancer Institute, has been working since the 1980s on the idea of taking immune cells out of cancer patients, manipulating them in the lab, and putting them back. He pioneered **tumor-infiltrating lymphocytes**, TILs, in melanoma — which we'll discuss in Segment 14 — and his group did some of the earliest work on engineering T cells with new receptors. He was working on these problems for almost two decades before the field had any real clinical success, and he is, in many ways, the godfather of the conceptual framework.

There are many others. **Zelig Eshhar**, at the Weizmann Institute in Israel, is generally credited with the original CAR concept — he published the first papers describing a chimeric receptor combining antibody and T cell signaling domains, in the late 1980s and early 1990s. He called them T-bodies, and the design was crude by modern standards, but the architecture was there. **Michel Sadelain**, at Memorial Sloan Kettering, was central to developing second-generation CAR designs using CD28 — his work on the design that became Yescarta runs in parallel to June's 4-1BB work at Penn. **Renier Brentjens** and **Isabelle Rivière**, also at MSK, were collaborators on much of that work and on early clinical trials in adult ALL.

\[Pause.\]

The reason I'm naming all these people is partly historical and partly cautionary. The history of CAR-T is sometimes told as a story about a single eureka moment — the Emily Whitehead infusion in 2012. That's a useful focal point, but it's misleading as history. The real story is decades of foundational immunology — figuring out how T cells work, how their receptors signal, how to grow them outside the body, how to deliver genes into them safely. The CAR concept itself is from the late 1980s. The lentiviral and gamma-retroviral vectors used to deliver the CAR gene took two decades of separate work to develop. The clinical infrastructure for handling cell products in hospitals had to be invented. The regulatory framework had to be built from scratch. None of this came easy and none of it came fast.

Carl June himself, in many interviews, has been candid that for years his work was funded mostly by his own department's discretionary money — major funders did not believe CAR-T would work. The early adult CLL trial that produced the first remissions was funded in significant part by the **Leukemia and Lymphoma Society** when the NIH was unwilling. There's a sociological story here about how transformative therapies that don't fit existing funding categories struggle for decades and then suddenly look obvious in retrospect.

There's also a personal story underneath. Carl June's first wife died of ovarian cancer in 2001. June has been open in interviews about how his work on T-cell engineering — work that initially had no obvious clinical payoff — became, for him, a long-running attempt to give other families what he couldn't give his own. The Emily Whitehead remission, in 2012, came eleven years after his wife's death.

I tell you these stories because medicine is made by people, and people are made by their lives. CAR-T is one of the rare cases where you can fairly point to a small group of named individuals and say: without these specific people, working on this specific problem for this specific length of time, this therapy would not exist today. That happens more often in science than the textbooks suggest, and it's worth remembering.

Now let's look at the products themselves. Six FDA-approved CAR-T drugs as of this lecture. Let's go through them.

---

## SEGMENT 7 — Kymriah: the first FDA approval

In August 2017, the FDA approved **tisagenlecleucel** — brand name **Kymriah** — manufactured by Novartis, for relapsed or refractory pediatric and young-adult B-cell ALL. It was the first CAR-T product, and the first gene therapy of any kind, ever approved in the United States. The price was set at $475,000 per infusion. The product was, in every important sense, the direct industrialization of the Penn CAR-T that had cured Emily Whitehead.

\[Pause.\]

Let me unpack what Kymriah actually is, because the structural details are the template for understanding the other approved products.

The targeting domain — the scFv on the outside — recognizes **CD19**, which as I mentioned is a pan-B-cell surface marker, expressed on essentially every B cell from early development through mature antibody-secreting cells. CD19 is not on stem cells, not on T cells, not on most other tissues — its expression is tightly restricted to the B lineage. This is exactly the profile you want in a CAR target: present on all the cancer cells, absent from essential non-cancer tissues, with the one tolerable side effect being loss of the normal B cells, which can be managed by replacement antibodies.

The intracellular tail uses **4-1BB co-stimulation** plus CD3-zeta. Second-generation design, 4-1BB flavor, which (as we discussed) tends to give slower, more durable T cell persistence — particularly useful in pediatric ALL where you want long-term protection against relapse.

The gene delivery vehicle — how the CAR gene actually gets into the patient's T cells — is a **lentiviral vector**. Lentiviruses (we have a whole separate lecture on these) are HIV-based vectors that have been gutted of their dangerous parts and rebuilt to deliver a chosen gene into a target cell's genome, where it gets stably integrated and expressed for the life of the cell. For Kymriah, the lentivirus carries the gene encoding the entire chimeric receptor — scFv plus transmembrane plus 4-1BB plus CD3-zeta — under a strong promoter, and integrates it into the T cell's chromosomes. The result is a T cell whose descendants all carry and express the CAR.

The approved indication, originally, was pediatric and young-adult B-cell ALL that had relapsed or failed at least two prior therapies. Kymriah was later also approved for relapsed/refractory diffuse large B-cell lymphoma (DLBCL) in adults, and then for follicular lymphoma. The pivotal trial — ELIANA — showed about an 81% overall remission rate at three months in heavily pretreated pediatric ALL patients, in a population where standard therapies basically didn't work at all. About half of those patients were still in remission a year later. These were genuinely transformative response rates for a previously incurable population.

\[Pause.\]

The $475,000 price tag was, and remains, one of the most controversial aspects of the whole CAR-T story. It made Kymriah, at the time of approval, one of the most expensive single doses of any drug ever. There were several reasons. The manufacturing is genuinely complex and expensive — every dose is custom-made from the individual patient's own cells, by a process that takes about four weeks and requires a clean-room facility and trained personnel. The patient population — relapsed pediatric ALL — is small, so the R&D and infrastructure costs have to be amortized over relatively few doses. And the durable cures, when they happen, do justify some kind of pricing premium compared to therapies that only delay progression by months.

Novartis tried to address the pricing controversy by offering an outcomes-based arrangement: they wouldn't charge the full price if the patient didn't achieve remission within a month. That helped a little politically but didn't really change the underlying problem, which is that autologous CAR-T is structurally expensive — and that cost problem is going to be the central issue for whether CAR-T can ever expand beyond niche blood cancers into the broader cancer population. We'll come back to it in Segment 17.

For now: Kymriah, August 2017, anti-CD19, 4-1BB second generation, lentiviral, autologous, $475K. The first of its kind, the direct descendant of the Penn academic program, and the proof that CAR-T could become a real registered medicine and not just an academic protocol.

---

## SEGMENT 8 — Yescarta and the CD28 lineage

Two months after Kymriah's approval, in October 2017, the FDA approved a second CAR-T product: **axicabtagene ciloleucel** — brand name **Yescarta** — manufactured by Kite Pharma, which had recently been acquired by Gilead. Yescarta's approved indication was relapsed or refractory **diffuse large B-cell lymphoma**, DLBCL, in adults. So the two products carved out adjacent niches — Kymriah owned pediatric ALL, Yescarta owned adult aggressive lymphoma — though both eventually expanded into overlapping indications.

\[Pause.\]

Yescarta's design differs from Kymriah's in two meaningful ways, both of which are worth understanding because they exemplify the two main "schools" of CAR-T design.

**Difference one: the co-stimulatory domain is CD28, not 4-1BB.** Remember from Segment 4 that CD28-based CARs tend to drive faster, more explosive expansion and stronger immediate effector function, at the cost of somewhat shorter persistence. The Yescarta approach trades long-term staying power for an early, aggressive burst of killing. For an aggressive adult lymphoma, where the immediate tumor burden is enormous and the patient may not have time to wait for slow, durable cell expansion, this trade-off makes some sense. The Yescarta CAR was originally developed at the **National Cancer Institute** in **Steven Rosenberg**'s lab — recall him from the founders segment — by a researcher named James Kochenderfer, and it carried the CD28 design from that line of work.

**Difference two: the gene delivery vehicle is a gamma-retroviral vector, not a lentivirus.** Both are retroviruses — they both reverse-transcribe their RNA into DNA and integrate it into the target cell's genome — but gamma-retroviruses (the original vector class) require the target cell to be actively dividing to integrate, whereas lentiviruses can integrate into non-dividing cells. For T cell engineering, this difference is less critical than for some other applications, because the T cells are being activated and pushed to divide before transduction anyway. But the historical lineage matters. The Penn/Novartis group built their manufacturing around lentivirus; the NCI/Kite group built theirs around gamma-retrovirus. Both work clinically. Both products got approved within two months of each other. The competition between the two designs has been a recurring theme of the field.

Yescarta's pivotal trial — ZUMA-1 — showed about an 82% overall response rate in heavily pretreated DLBCL, with a complete response rate of about 54%. About 40% of patients were still in remission at two years. Again, transformative in a population that had run out of standard options. Subsequent Yescarta approvals extended into follicular lymphoma, mantle cell lymphoma (sister product Tecartus — brexucabtagene autoleucel, also CD28-based), and second-line large B-cell lymphoma (replacing rather than following salvage chemo plus transplant, based on the ZUMA-7 trial which showed CAR-T was better than the prior standard).

The price for Yescarta was set at $373,000 — somewhat lower than Kymriah's $475K, partly because the indication was larger and the per-dose amortization is more favorable.

\[Pause.\]

I want to take a moment here to mention two other approved CD19-targeted CAR-T products, because they round out the CD19 landscape and they'll come up if you read anything in the field.

**Tecartus** — brexucabtagene autoleucel — Kite/Gilead, approved 2020 for mantle cell lymphoma and 2021 for adult ALL. Same CAR construct as Yescarta but with an additional manufacturing step to deplete circulating tumor cells from the starting material before manufacturing, which matters for cancers like mantle cell where the malignant B cells are present in the blood and would otherwise contaminate the CAR-T product.

**Breyanzi** — lisocabtagene maraleucel, or "liso-cel" — Bristol Myers Squibb (originally Juno Therapeutics), approved 2021 for relapsed/refractory large B-cell lymphoma. Breyanzi is a 4-1BB-based product, like Kymriah, but with a notable manufacturing distinction: the CD4 and CD8 T cell subsets are separated and engineered separately, then recombined in a defined 1:1 ratio before infusion. This was an attempt to control the composition of the product more precisely than the "whatever ratio happened to be in the patient's blood" approach of the earlier products. The clinical results are competitive with the others; whether the defined composition is meaningfully better is still debated.

So as of this lecture, the CD19-targeted CAR-T landscape for B-cell malignancies includes Kymriah, Yescarta, Tecartus, and Breyanzi — four products covering pediatric ALL, adult ALL, DLBCL, mantle cell lymphoma, follicular lymphoma, and chronic lymphocytic leukemia (which Breyanzi has been approved for in CLL more recently). All four target CD19. All four are autologous. They differ in co-stimulation (4-1BB vs CD28), in vector (lentiviral vs gamma-retroviral), and in manufacturing details, but the conceptual architecture is the same.

The CD19 era is the proof-of-concept era. The question for the rest of the field is: can we extend this to other targets in other cancers? The next big push has been into multiple myeloma, with a different target called BCMA.

---

## SEGMENT 9 — Abecma and Carvykti: CAR-T for multiple myeloma

**Multiple myeloma** is a cancer of plasma cells — the long-lived, antibody-secreting B-cell descendants we discussed in the antibodies lecture. Plasma cells live in the bone marrow, pumping out antibodies. When they become cancerous, they accumulate in the marrow, crowd out normal cell production, and secrete enormous quantities of a single useless antibody (an "M-protein" or paraprotein) that damages the kidneys and other organs. Myeloma is the second most common blood cancer in adults, kills about 12,000 people a year in the United States, and is — until quite recently — uniformly incurable. Patients live for years, sometimes a decade or more, on a sequence of chemotherapies, immunomodulators, proteasome inhibitors, and antibody therapies, but the cancer eventually finds a way around every line of treatment.

CD19 doesn't help here, because plasma cells have largely turned off CD19 by the time they're plasma cells. So myeloma needed a different target. The field converged on **BCMA** — B-cell maturation antigen — which is a surface protein highly expressed on plasma cells (and therefore on myeloma cells) and largely absent from other essential cell types. BCMA is the CD19-equivalent for myeloma: a tissue-restricted surface marker on a non-essential cell lineage that happens to encompass the cancer.

\[Pause.\]

Two BCMA-targeted CAR-T products are now FDA-approved.

**Abecma** — idecabtagene vicleucel, "ide-cel" — Bristol Myers Squibb and bluebird bio, approved March 2021. Second-generation 4-1BB CAR with an anti-BCMA scFv. The pivotal trial (KarMMa) showed about a 72% overall response rate in heavily pretreated multiple myeloma patients — patients who had already failed every available standard therapy. Median progression-free survival was around 8 to 12 months, depending on the dose. These are not the long-term cures we see with CD19 CAR-T in B-cell ALL — most myeloma patients eventually relapse — but the response rates and quality of remissions were genuinely transformative for a population with no remaining options.

**Carvykti** — ciltacabtagene autoleucel, "cilta-cel" — Janssen and Legend Biotech, approved February 2022. Carvykti has an unusual targeting design: instead of one scFv against BCMA, it has **two BCMA-binding domains** linked together, derived from llama-derived single-domain antibodies (nanobodies). The idea is that two binding sites per receptor give tighter, more avid engagement with the target, and also reduce the chance that a single mutation in BCMA could eliminate binding. Carvykti's pivotal trial (CARTITUDE-1) showed about a 98% overall response rate and very deep, durable remissions — the depth of response is unusually good even for CAR-T standards. The trade-off, observed in clinical practice, has been a higher rate of certain serious neurological toxicities, including a delayed parkinsonian syndrome in a small subset of patients.

Both products use lentiviral vectors. Both are autologous. Both are priced around $400-500K.

\[Pause.\]

The myeloma CAR-T story is interesting for several reasons. First, it proves the modular design: you swap the scFv from CD19 to BCMA, keep the second-generation 4-1BB-CD3-zeta backbone, and you have a working product against a totally different cancer. The platform generalizes. Second, the response rates are extraordinary by myeloma standards, but the durability isn't yet — relapses happen, often within a year or two. This raises a hard question: is this because BCMA itself isn't as good a target as CD19 (the cancer can apparently downregulate BCMA more easily), or because myeloma is intrinsically harder than ALL, with a more immunosuppressive bone marrow microenvironment? The honest answer is probably both. Third, the move into myeloma has driven an enormous wave of investment into BCMA-targeting therapeutics generally — including bispecific antibodies (which we'll cover later) and antibody-drug conjugates — most of which have followed the CAR-T approvals into the market.

Looking ahead, the next CAR-T targets being actively developed include **GPRC5D**, another plasma-cell-restricted surface receptor that's emerging as a myeloma target (a CAR-T product called talquetamab is in trials, though that one is actually a bispecific antibody — there are confusingly named pipeline assets in this space). **CLDN18.2** — claudin 18.2 — is a tight-junction protein that's restricted to gastric tissue and shows up overexpressed on certain gastric, esophageal, and pancreatic cancers. CAR-T products targeting CLDN18.2 are in early clinical trials and represent the most serious recent attempt to bring CAR-T into solid tumors. We'll come back to the solid tumor problem in Segment 13.

So the count: six FDA-approved CAR-T products as of this lecture. **Kymriah** (CD19, ALL, lymphoma). **Yescarta** (CD19, DLBCL). **Tecartus** (CD19, mantle cell, adult ALL). **Breyanzi** (CD19, large B-cell lymphoma, CLL). **Abecma** (BCMA, myeloma). **Carvykti** (BCMA, myeloma). All autologous. All for blood cancers. All priced in the $400K-$500K range. The field is essentially defined by these six products and the trials seeking to extend them.

\[BREAK — approximately 1 hour elapsed.\]

---

## SEGMENT 10 — Making the drug: leukapheresis to infusion in 28 days

Welcome back. Let's spend this segment on the **manufacturing process**, because CAR-T manufacturing is fundamentally different from anything else in pharma, and you can't understand the cost, scale, and constraints of the field without understanding how the drug actually gets made.

\[Pause.\]

The process begins not in a factory, but in the patient. The drug is _their cells_, so the starting material has to come out of their body. The procedure is called **leukapheresis**. Picture a dialysis-like machine: the patient sits in a chair, blood is drawn from one arm, run through a centrifuge that separates out the white blood cells, and the remaining blood — red cells, plasma, platelets — is returned to the patient's other arm. The white blood cell fraction is collected into a bag. The procedure takes three to six hours. The bag contains a mixture of all the patient's white blood cells — T cells, B cells, monocytes, NK cells — at concentrations of a few billion cells in total.

That bag of cells is the **raw material** for one batch of one patient's drug. There is no other source. If the apheresis fails — if the patient's T cell counts are too low because of prior chemo, or if there's a clogging issue, or if the bag gets dropped — you can't go to a back-up supply. You have to re-apherese, which may not even be possible. This single-source vulnerability is unlike anything in conventional pharma.

The bag is then shipped, under cold chain and tracked individually, from the hospital to a centralized manufacturing facility. Novartis, for Kymriah, has facilities in Morris Plains, New Jersey and in Switzerland. Kite, for Yescarta, has a facility in El Segundo, California. The shipping is part of the manufacturing — the cells have to survive transit, in many cases halfway across the country, before any processing can begin.

\[Pause.\]

Once at the facility, the manufacturing steps are roughly: **selection, activation, transduction, expansion, formulation, release.**

**Selection.** The T cells need to be separated from the rest of the white blood cells in the apheresis bag. Different products do this differently. Some use anti-CD3 and anti-CD28 antibody-coated beads (Dynabeads) to specifically grab T cells. Some use anti-CD4 and anti-CD8 beads to enrich the right subsets. Breyanzi, as I mentioned, separates CD4 and CD8 cells onto two parallel manufacturing tracks. The output of selection is a much purer T cell preparation, ready for the next step.

**Activation.** Resting T cells don't divide, and they don't take up viral vectors efficiently. To wake them up, the manufacturing process exposes them to activation signals — typically anti-CD3 plus anti-CD28 antibodies, often presented on those same Dynabeads, plus interleukin-2 in the culture medium. Within a day or two the T cells are blasting — large, metabolically active, dividing. That's the state in which they'll accept the CAR gene.

**Transduction.** The viral vector — lentivirus for Kymriah/Carvykti/Abecma/Breyanzi, gamma-retrovirus for Yescarta/Tecartus — is added to the culture. The virus particles dock onto the cells, enter, reverse-transcribe their RNA into DNA, and integrate that DNA into the cell's genome. The integrated DNA includes the CAR gene under a strong promoter. Within a couple of days, the engineered cells start expressing the CAR on their surface. Transduction efficiency is typically 20-50% — not every cell ends up with the CAR — but enough that the final product has a meaningful fraction of CAR-positive cells. (For lentiviral CAR-T, manufacturers also need to confirm the cells don't have replication-competent lentivirus, which is a regulatory requirement; the vectors are engineered to be self-inactivating but the QC has to be done.)

**Expansion.** The activated, transduced cells are now grown in bioreactors — typically WAVE bioreactors or G-Rex flasks or rocker-based systems — for somewhere between one and three weeks. The goal is to reach a target number of CAR-positive T cells, usually in the range of 100 million to a billion. The cells consume IL-2 and other cytokines in the medium and divide every couple of days. Expansion is the most variable part of the process — some patients' cells expand beautifully, others' cells (especially after heavy prior chemo) barely grow.

**Formulation.** Once the target cell count is reached, the cells are washed, concentrated, mixed with a cryoprotectant (typically DMSO), packaged into infusion bags, and frozen in liquid nitrogen.

**Release testing.** Before the product can go back to the patient, the manufacturer has to run a battery of QC tests — sterility, mycoplasma, endotoxin, identity (is it actually the right patient's cells), potency (do the cells kill target cells in vitro), purity (what fraction are CAR-positive), and viability (are the cells still alive after freezing). These tests take days. Only after all tests are passed is the product released for shipping.

The final, frozen product is shipped back to the hospital, where it sits in a special storage tank until the patient is ready to receive it.

**Total turnaround**, from apheresis to back at the hospital: typically **three to four weeks**, sometimes longer. During this time, the patient — who has refractory cancer — is waiting. Some patients are stable enough to bridge with low-dose chemotherapy. Some progress and become too sick to receive the CAR-T. Some die during the wait. The 3-4 week manufacturing window is one of the most consequential constraints in the whole therapy, and a lot of effort is going into compressing it.

\[Pause.\]

Once the product is back at the hospital, the patient receives a few days of **lymphodepleting chemotherapy** (we'll spend the next segment on why), and then the frozen CAR-T product is thawed at the bedside and infused over a few minutes through a standard IV line. The infusion itself is almost anticlimactic. A bag of cells. A drip. Twenty minutes. Done.

Then the patient is admitted to the hospital and watched for two to three weeks for the side effects we'll cover in Segment 11. The engineered T cells begin expanding inside the body, encountering the cancer, killing it, multiplying, releasing cytokines. The drug works, when it works, over the next few weeks. The final remission assessment comes at a month, and the long-term follow-up extends out for years.

The whole pipeline — leukapheresis, ship, manufacture, ship, infuse, expand, observe — is unprecedented in pharmaceutical history. Every dose is individually owned. The supply chain is essentially one-patient-to-one-product, beginning to end. It works. But it costs hundreds of thousands of dollars per patient and the throughput is limited by manufacturing capacity, not by demand. That manufacturing reality is the central constraint shaping the future of the field.

---

## SEGMENT 11 — Cytokine release syndrome and ICANS: the price of a living drug

Let's now talk about side effects, because CAR-T has some of the most dramatic, distinctive toxicities in all of oncology — toxicities that nobody had really seen before in this form, that required new clinical frameworks to manage, and that fundamentally come from the fact that the drug is _alive_ and _working_.

\[Pause.\]

The two big toxicity syndromes are **cytokine release syndrome**, CRS, and **immune effector cell-associated neurotoxicity syndrome**, ICANS. Let's take them in turn.

**Cytokine release syndrome — CRS.** Remember what's happening inside the patient after a CAR-T infusion. Engineered T cells, possibly millions of them, encounter the cancer. They engage. They activate. They release cytokines — IL-6, IFN-gamma, IL-2, TNF-alpha — into the surrounding tissue. They divide. They release more cytokines. The cancer cells, dying, release their own contents into the bloodstream. The local cytokine release recruits macrophages and other immune cells, which themselves release more cytokines. The whole system enters a feedback loop. Within a few days, the patient's bloodstream is filled with massive concentrations of inflammatory mediators.

Clinically, this looks like a severe systemic inflammatory response. Fever — sometimes very high. Low blood pressure. Tachycardia. Hypoxia. In severe cases, multi-organ failure — kidneys, liver, heart, lungs. The skin can develop a rash. Coagulation gets disturbed. In the worst cases, patients end up intubated in the ICU with vasopressors running and renal replacement. CRS is graded on a 1-4 scale (the ASTCT consensus criteria) based on fever, vasopressor need, and respiratory support. Grade 1 is "fever and not much else." Grade 4 is "in the ICU with multi-organ failure."

The analogy I want you to use: **CRS is the side effect that hospitalizes you because the drug is working so well it triggers a massive immune cyclone**. The engineered cells are doing exactly what they're supposed to — finding and killing cancer — and the inflammatory response to that killing becomes its own emergency. It's not toxicity in the usual sense, where a drug damages tissue directly. It's toxicity in a new sense, where the drug succeeds so dramatically that the resulting biological cascade overwhelms the patient's homeostatic systems.

The good news is that we know, thanks largely to the Emily Whitehead case, how to manage it. The first-line drug is **tocilizumab** — the anti-IL-6 receptor monoclonal antibody that pulled Emily back from the brink in 2012. Tocilizumab blocks IL-6 signaling, which interrupts the cytokine feedback loop. For severe or refractory CRS, second-line options include corticosteroids (which broadly suppress immune activation), and increasingly, anakinra (an anti-IL-1 receptor antagonist). Every CAR-T center now has tocilizumab pre-positioned in the pharmacy, ready to give within minutes of a severe CRS diagnosis.

CRS typically peaks within the first one to two weeks after infusion. It's almost always managed in the hospital, with the patient under close observation. Mortality from CRS, in the modern era with prompt tocilizumab use, is low — well under 5% in most series. In the early days, before tocilizumab was standard, severe CRS was much more often fatal.

\[Pause.\]

**Immune effector cell-associated neurotoxicity syndrome — ICANS.** This is the brain version of CRS, and it's the toxicity we understand least well. ICANS typically appears a few days to a week or two after infusion, sometimes overlapping with CRS, sometimes following it. The presentation can be subtle at first — confusion, difficulty finding words, tremor — and progress to severe encephalopathy: seizures, loss of consciousness, in worst cases cerebral edema and death. There's a grading scale (the ICE score — immune effector cell-associated encephalopathy) where the clinician asks the patient to name objects, follow commands, write a sentence, and so on; declining ICE scores trigger escalating interventions.

The mechanism of ICANS is genuinely not fully understood. Cytokines crossing the blood-brain barrier are part of it. CAR-T cells themselves entering the CNS may contribute. There's evidence that endothelial activation and blood-brain barrier breakdown are involved. The fact that we don't fully understand it makes it harder to design targeted treatments. For now, the management is largely **corticosteroids** — specifically dexamethasone, sometimes methylprednisolone — and supportive care. Tocilizumab, surprisingly, doesn't seem to help ICANS as much as it helps CRS; it may even worsen ICANS in some cases by allowing more IL-6 to pool in tissues. Anakinra is being explored for ICANS as well.

The frequency and severity of ICANS varies by product. Yescarta (CD28 co-stim) seems to cause more ICANS than Kymriah (4-1BB co-stim) — possibly related to the more explosive expansion kinetics of CD28-based CARs. Carvykti has been associated with delayed parkinsonian-like syndromes in a small subset of patients, which is a different and less well-characterized neurotoxicity. ICANS rates of grade 3 or higher run in the 20-30% range for many CD19 products in DLBCL trials.

The brain version of CRS — encephalopathy, sometimes life-threatening, mechanism still being worked out. That's ICANS in one sentence.

\[Pause.\]

A few other CAR-T side effects worth knowing.

**B-cell aplasia.** As I mentioned, CD19 CAR-T kills all the B cells, not just the cancerous ones. Patients lose the ability to make antibodies. This is managed by giving periodic infusions of IVIG — pooled antibodies from healthy donors. As long as you keep the IVIG going, patients are largely protected from infections; some patients have lived for years with no B cells and no apparent problem. The CAR-T cells eventually die out in some patients, B cells come back, and the patient can resume making antibodies again. In other patients (the ones with the most durable CAR-T persistence) the B-cell aplasia is permanent — which is actually a good sign, because it means the CAR-T is still there guarding against relapse.

**Tumor lysis syndrome.** When you kill an enormous tumor burden quickly, the dying cells dump their contents — potassium, phosphate, uric acid, nucleic acids — into the bloodstream faster than the kidneys can clear them. The result is metabolic chaos: high potassium, low calcium, kidney failure, cardiac arrhythmias. Prevented and managed with hydration, allopurinol or rasburicase, and close monitoring.

**Cytopenias.** Most patients have prolonged low blood counts after CAR-T — low neutrophils, low platelets, low red cells — partly from the lymphodepleting chemo and partly from the marrow disturbance of the engineered cells. Some patients require transfusions and growth factor support for months.

**Secondary cancers.** Rare, but a real concern. The CAR gene is integrated into the T cell's genome via the viral vector, and integration can theoretically disrupt other genes — including potentially activating an oncogene. The FDA in 2024 began requiring a boxed warning on all approved CAR-T products about the risk of T-cell malignancies arising from the CAR-T product itself. The actual incidence is very low (handful of cases out of tens of thousands of treated patients), but the warning underscores that integrating a foreign gene into a genome carries some residual risk.

So CAR-T toxicity is a serious and distinctive part of the therapy. It requires specialized centers, trained staff, prompt access to tocilizumab and steroids, and ICU backup. It's not a community oncology treatment. The patients who get CAR-T are getting it in hospitals that have built infrastructure specifically for managing CAR-T patients — which is one more reason the therapy is expensive and one more reason scaling it is hard.

---

## SEGMENT 12 — Lymphodepletion: clearing the field

There's one piece of the CAR-T regimen that I haven't yet explained, and it turns out to be essential to making the whole therapy work. Before the patient receives their CAR-T infusion, they receive a few days of **lymphodepleting chemotherapy** — typically a combination of **fludarabine** and **cyclophosphamide**, given for three to five days, ending a day or two before the CAR-T infusion. This is sometimes abbreviated "flu-cy."

Why do this? The patient is already getting an enormously expensive bag of engineered cells. Why on earth would you also give them more chemo first?

\[Pause.\]

The answer is one of the most beautiful pieces of immunology in the whole CAR-T story, and it's worth understanding because it explains a lot about how T-cell biology actually works.

Here's the analogy. **You wipe out the patient's existing T cells with chemo so the CAR-T cells have empty space to expand into.** Think of the immune system as a city with a fixed number of housing units — and those units are filled by all the existing T cells competing for the same limited supply of growth factors (mainly the cytokines IL-7 and IL-15). When you infuse new T cells into a patient whose immune system is already full, the new cells have no room. They can't get enough IL-7 or IL-15. They can't expand. They get crowded out by the existing T cells.

Lymphodepletion empties the city. The chemo kills off a substantial fraction of the patient's existing T cells (and other lymphocytes — B cells, NK cells). This does two things. First, it creates open niches in the lymphoid tissue. Second, and more importantly, it creates a sudden surplus of IL-7 and IL-15, because those cytokines are constantly being produced by stromal cells and consumed by existing T cells. With the existing T cells gone, the cytokines pool — and the newly infused CAR-T cells, dropping into this empty, cytokine-rich environment, expand explosively.

The biology of this was worked out in mouse experiments years before CAR-T existed — the term "homeostatic proliferation" describes how lymphocytes expand to fill the immune compartment when it's been emptied. The CAR-T field adopted lymphodepletion early because the empirical data was unambiguous: CAR-T cells infused into lymphodepleted patients expanded much better and persisted much longer than CAR-T cells infused into non-depleted patients. The trial data is clear — patients who got proper flu-cy conditioning had much better CAR-T expansion and clinical responses than patients who didn't.

\[Pause.\]

The combination of fludarabine plus cyclophosphamide is now the standard. Fludarabine is a purine analog — it gets incorporated into the DNA of dividing cells and triggers their death — and it's particularly potent against lymphocytes. Cyclophosphamide is a classic alkylating agent that crosslinks DNA. Together they reliably deplete lymphocytes for a few weeks. The cytokines accumulate. The CAR-T product is infused into the resulting open ground.

There are side effects to lymphodepletion, of course. Patients are profoundly immunosuppressed for a couple of weeks, vulnerable to infections. Cytopenias deepen. The chemo itself has nausea, fatigue, and other classic effects. But the lymphodepletion is essential — multiple trials have confirmed that skipping it or weakening it leads to poor CAR-T outcomes.

This is one of those places where the CAR-T story brings together very classical oncology (chemotherapy regimens with names from the 1960s) with very modern biology (engineered cell therapies). The conditioning that makes the most advanced therapy work is just chemo. You can't quite escape chemo even in the most futuristic corners of cancer care, because the fundamental immunology — that T cells need space and cytokines to expand — applies regardless of how clever your engineered cells are.

\[Pause.\]

One more thing about lymphodepletion. It also seems to **enhance the antigen-presenting function** of dendritic cells in the days after chemo — the residual myeloid cells become more activated as part of the immune compartment's resetting response. This may contribute to better CAR-T function by providing additional support signals to the infused cells. And lymphodepletion **kills off regulatory T cells** (Tregs), which are the immune system's natural braking cells — removing them removes one more layer of suppression that might otherwise have damped down the CAR-T expansion.

So the three-piece logic of lymphodepletion: empty the niche, accumulate the cytokines, and remove the brakes. Three days of chemo, ending two days before infusion. Then the CAR-T goes in. Then the engineered cells, dropped into an empty, growth-factor-rich, brake-free environment, expand explosively. Then they hunt cancer. Then, if everything goes well, they win.

---

## SEGMENT 13 — Why solid tumors are hard

Everything we've talked about so far — Kymriah, Yescarta, Abecma, Carvykti, all six approved CAR-T products — treats **blood cancers**. Leukemias, lymphomas, multiple myeloma. Liquid tumors. Not a single approved CAR-T treats a solid tumor — not breast, lung, colon, pancreatic, prostate, ovarian. The vast majority of cancer deaths come from solid tumors, which means that despite the dramatic success of CAR-T in B-cell cancers, the therapy has so far made essentially no dent in the cancers that kill the most people. Why?

\[Pause.\]

There are three big reasons, and I want you to hold all three of them, because they recur in every conversation about CAR-T in solid tumors and they explain why the field has spent the better part of a decade trying and largely failing to crack this problem.

**Reason one: antigen heterogeneity.** Recall that CD19 is essentially universally expressed on B-cell cancers. Every cell in a B-cell ALL or DLBCL displays CD19. Wipe out CD19-positive cells and you wipe out the cancer. Solid tumors are not like this. Within a single breast cancer or a single lung cancer, different cells often express different surface markers. A single tumor is genetically and molecularly heterogeneous, like a city neighborhood with different ethnic groups on different blocks. A CAR pointed at any one marker will kill the cells expressing that marker — and leave the rest of the tumor behind to repopulate. The cancer "escapes" by losing the targeted antigen, a process called **antigen escape**. Even in CD19 CAR-T, we see this — a chunk of B-cell ALL relapses are CD19-negative, suggesting the cancer cells that didn't express CD19 (or lost CD19 expression) survived and grew. In solid tumors, where heterogeneity is much higher to begin with, antigen escape is rampant.

This is also tied to a second issue: in solid tumors, finding any surface antigen that's _truly_ tumor-specific — present on cancer cells and absent from essential normal tissues — is genuinely hard. Most surface markers on solid-tumor cells are also expressed somewhere in normal tissue. If your CAR targets a marker that's also on heart muscle or lung epithelium or pancreas, you don't just kill cancer; you kill those normal tissues too. There have been deaths from CAR-T trials in solid tumors due to this — most famously, a patient in 2010 who received an anti-HER2 CAR-T at the NCI died within hours of infusion because the CAR-T attacked HER2 expression on lung epithelium and caused fatal pulmonary edema. The dose was probably too high, but the underlying issue — there's no truly tumor-specific surface marker for most solid cancers — remains.

**Reason two: the immunosuppressive tumor microenvironment.** Solid tumors don't just sit there waiting to be killed. They actively suppress immune attack. The tumor secretes immunosuppressive cytokines like TGF-beta. It recruits **regulatory T cells** (Tregs) and **myeloid-derived suppressor cells** (MDSCs) and **tumor-associated macrophages** of the M2 type — all of which actively shut down anti-tumor T cell function. The tumor's microenvironment is hypoxic, acidic, and metabolically hostile to T cells. It upregulates checkpoint molecules like PD-L1 that engage PD-1 on T cells and turn them off. By the time a CAR-T cell physically infiltrates a solid tumor, it's walking into a chemically hostile environment specifically designed to shut down T cells.

We have, in standard oncology, drugs that try to address this — checkpoint inhibitors (anti-PD-1, anti-PD-L1, anti-CTLA-4) lift some of these brakes. Combining CAR-T with checkpoint inhibitors is one approach being actively tested. So is engineering CAR-T cells themselves to be resistant to the tumor microenvironment — knocking out PD-1 in the CAR-T cells with CRISPR, for instance, or arming them with cytokine factories (the fourth-generation TRUCKs) that locally counteract the suppressive environment.

**Reason three: T-cell exhaustion.** When T cells are chronically stimulated — repeatedly engaging the same antigen over weeks or months — they enter a state called **exhaustion**, where they progressively lose their killing function, their proliferative capacity, their cytokine production. Exhaustion is the immune system's natural brake against autoimmunity from chronic stimulation. In a CAR-T context, when the engineered cells encounter a large solid tumor that they can't quickly clear, the constant low-level engagement drives them into exhaustion. They stop killing. The tumor wins. This is much less of a problem in liquid cancers, where the engagement is intense but the tumor cells get cleared quickly. In solid tumors, the cancer is right there persistently, and exhaustion takes hold.

\[Pause.\]

So the solid-tumor problem looks like this: **no clean target like CD19, an environment that shuts T cells down, and exhaustion of the engineered cells from prolonged engagement**. Each of those is a hard problem on its own. Together, they explain why CAR-T in solid tumors has been a graveyard of clinical trials for a decade now.

The field has not given up. There are CAR-T products in trials targeting **GD2** (a marker on neuroblastoma and some other tumors), **mesothelin** (mesothelioma, ovarian, pancreatic), **HER2** (gastric, breast, with more careful dosing now), **EGFRvIII** (a glioblastoma-specific EGFR variant), **CLDN18.2** (gastric, pancreatic — promising early results), **PSMA** (prostate cancer). Some of these are showing modest signs of activity. None have yet produced anything like the CD19 results. The solid tumor frontier is, as of 2026, the most active and the most difficult part of CAR-T research, and it's where most of the new design work — armored CARs, dual-targeting CARs, CRISPR-edited CARs, combinations with checkpoint inhibitors — is happening.

If CAR-T is going to extend its reach beyond niche blood cancers into the cancers that kill the most people, solid tumors are the bar it has to clear. As of this lecture, the bar has not been cleared. The next decade will tell us whether it can be.

---

## SEGMENT 14 — TILs and TCR-T: parallel paths to solid tumors

While the CAR-T field has struggled with solid tumors, two parallel **cell therapy** approaches have made more progress in certain solid cancers — and you should know about them, because they're related cousins of CAR-T, share a lot of conceptual and infrastructure overlap, and the boundary between "CAR-T" and "other adoptive cell therapies" is getting blurrier every year.

\[Pause.\]

**Tumor-infiltrating lymphocytes — TILs.** This is the older approach, going back to Steven Rosenberg's work in the 1980s. The idea is dead simple: in many solid tumors, especially melanoma, you can find T cells that have already infiltrated the tumor — they're sitting there inside the cancer, trying to attack it but failing because they're outnumbered or exhausted or suppressed. If you surgically remove a piece of the tumor, isolate those T cells, expand them in a culture dish with lots of IL-2, and reinfuse them into the patient after lymphodepletion, you can sometimes induce dramatic remissions. The TILs were already specific for the patient's cancer — they evolved that specificity inside the patient — so you don't need to engineer them. You just need to remove them from the suppressive tumor environment, grow them up to huge numbers in friendly conditions, and put them back.

TIL therapy works best in melanoma, where the tumors are unusually immunogenic and TILs are abundant. Rosenberg's group at the NCI showed durable complete responses in melanoma patients as far back as the 1990s, and that work eventually led to the 2024 FDA approval of **Amtagvi** — lifileucel — made by **Iovance**, for advanced melanoma. Amtagvi is the first TIL therapy ever approved. The response rate in heavily pretreated melanoma is around 31%, with durable responses in a meaningful fraction of responders. The price is around $515,000, comparable to CAR-T.

The TIL approach has the advantage of not requiring you to identify a specific target antigen — the T cells you collect are already specific for whatever mix of neoantigens the cancer happens to display. The disadvantage is that you need a surgically accessible tumor to harvest TILs from, and you need a cancer that actually has TIL infiltration to begin with (which limits the approach to particular cancer types — melanoma is the cleanest example).

\[Pause.\]

**T-cell receptor T cells — TCR-T.** A different approach: instead of engineering T cells with a chimeric CAR (which only recognizes surface antigens), engineer them with a full T-cell receptor (TCR) that recognizes peptides presented on MHC. This is closer to what natural T cells do — they recognize little chopped-up fragments of intracellular proteins displayed on HLA/MHC molecules on the cell surface. The advantage of TCR-T over CAR-T is that the target can be any protein in the cell, including the many intracellular tumor proteins (like cancer-testis antigens — proteins normally expressed only in testis and embryo but reactivated in some cancers — or mutant intracellular proteins).

The disadvantage is HLA restriction: a given TCR works only for patients who carry the right HLA type to present the target peptide. So TCR-T products are inherently population-restricted in a way CAR-T isn't.

The first TCR-T product was approved in August 2024: **Tecelra** — afamitresgene autoleucel, made by **Adaptimmune** — for synovial sarcoma, a rare soft-tissue cancer in adolescents and young adults. The TCR targets a cancer-testis antigen called MAGE-A4, presented on HLA-A*02:01 (so only patients with that HLA type qualify). The response rate in synovial sarcoma is around 40-45%, dramatically better than anything else available for that disease.

TCR-T is also being developed for a wider range of solid tumors — synovial sarcoma is the first beachhead, but trials targeting NY-ESO-1, MAGE-A1, and other targets in lung cancer, breast cancer, and others are ongoing. Adaptimmune, Immatics, and several other companies are leading these efforts.

\[Pause.\]

So step back and look at the landscape. **CAR-T**: engineered surface-antigen recognition, works great in liquid tumors, struggles in solid. **TIL**: unmodified tumor-infiltrating cells expanded outside the body, works in melanoma, expanding to other immunogenic solid tumors. **TCR-T**: engineered intracellular-antigen recognition via natural TCR machinery, HLA-restricted, first approval in synovial sarcoma, expanding into other solid tumors. All three are forms of adoptive cell therapy. All three involve harvesting patient cells, manipulating them, and reinfusing. The infrastructure overlaps heavily. The cost structures are similar. The regulatory framework is the same (FDA Center for Biologics Evaluation and Research, the same group that handles vaccines and blood products).

The big-picture story is that **cell therapy as a class** is growing, with CAR-T as the largest and most successful component, but with TILs and TCR-T expanding into the solid-tumor space that CAR-T hasn't been able to crack. Over the next decade, we'll likely see all three approaches converge and overlap, with combinations and hybrid designs becoming more common. The patient-derived autologous cell therapy paradigm is here to stay, even if no single one of these specific products dominates.

---

## SEGMENT 15 — Allogeneic CAR-T: the off-the-shelf dream

The biggest single structural problem with CAR-T as currently practiced is that **every dose is custom-made for one patient from that patient's own cells**. This is the "autologous" model. Autologous CAR-T means: leukapheresis the patient, ship the cells, manufacture for 3-4 weeks, ship them back, infuse. It works, but it's expensive (~$500K), slow (3-4 weeks during which the patient may deteriorate), and capacity-limited (the number of patients you can treat is bounded by manufacturing slots, not by demand). It's also high-risk operationally — every step is a single-source pipeline, and a failure at any stage means a delayed or impossible treatment.

The alternative everyone in the field is chasing is **allogeneic CAR-T**: cells from a healthy donor, manufactured at scale in big batches, frozen, stockpiled, and shipped to hospitals as needed. **Off-the-shelf. Ready to ship.**

\[Pause.\]

Here's the analogy you should hold. **Autologous CAR-T is bespoke tailoring** — one suit, one customer, custom measurements, four weeks of work, expensive. **Allogeneic CAR-T is the rack at a department store** — pre-made in standard sizes from common materials, ship it in the morning, wear it in the afternoon. Same fundamental product, totally different cost and accessibility.

But there's a problem with allogeneic that doesn't exist with autologous: **rejection in both directions**.

**Direction one: the patient rejects the donor cells.** This is the classical transplant problem. The donor T cells carry the donor's HLA — the molecular ID badges that distinguish self from non-self — and the patient's residual immune system recognizes those HLAs as foreign and attacks the donor cells, eliminating them before they can do their job.

**Direction two: the donor cells attack the patient.** This is **graft-versus-host disease** — GVHD — and it's the major cause of mortality in bone marrow transplants. T cells from the donor see the patient's tissues as foreign and attack them systemically. In a normal bone marrow transplant, GVHD is managed by HLA matching and immunosuppressive drugs. In an allogeneic CAR-T context, you can't HLA-match every patient to a specific donor (that would defeat the purpose of off-the-shelf), and immunosuppression would defeat the CAR-T as well.

So to make allogeneic CAR-T work, you have to engineer the donor cells to **eliminate both rejection directions**. Modern allogeneic CAR-T platforms typically use **gene editing** — usually CRISPR, sometimes TALENs — to knock out specific genes in the donor T cells before manufacturing:

**Knock out the TCR.** Eliminate the donor T cell's native T-cell receptor, so the donor cells can't recognize and attack the patient's tissues. No TCR, no GVHD risk. (The CAR is still there and still recognizes the cancer target — that doesn't go through the TCR.)

**Knock out HLA class I.** Eliminate the donor T cell's HLA molecules, so the patient's immune system can't see the cells as foreign and can't reject them. (This isn't quite enough — cells without HLA class I get attacked by natural killer cells, which use HLA expression as a "don't kill me" signal. So in practice, allogeneic platforms also engineer some form of NK protection — usually retaining HLA-E or expressing CD47 — to balance this.)

Companies pursuing allogeneic CAR-T include **Allogene Therapeutics**, **Caribou Biosciences**, **Cellectis** (which actually treated the first allogeneic CAR-T patient, a baby named Layla, with TALEN-edited cells in 2015 in London), **Fate Therapeutics** (using iPSC-derived NK cells with CAR — a related concept), **Precision BioSciences**, **CRISPR Therapeutics**. The pipeline is rich. The early clinical results have been encouraging in some indications but generally have shown shorter persistence of allogeneic cells than autologous — the patient's residual immune system, even with the HLA knockouts, tends to clear donor cells faster than autologous cells.

As of this lecture, no allogeneic CAR-T product has yet been FDA-approved. Several are in late-stage trials. The dream is to have an allogeneic CAR-T that can match autologous in efficacy while being available in days instead of weeks and priced at maybe a tenth of autologous. If that happens — and it's a real "if" — it would fundamentally change the economics and accessibility of the field.

\[Pause.\]

There are also more exotic donor sources being explored. **iPSC-derived T cells** — making engineered T cells from induced pluripotent stem cells, which can be expanded essentially indefinitely from a single starting line. **Umbilical cord blood-derived cells.** **NK cells** as the engineered effector (CAR-NK) instead of T cells, with the advantage that NK cells don't cause GVHD and don't need TCR knockout.

The allogeneic question matters enormously because it determines whether CAR-T stays a niche therapy for a few thousand patients a year or becomes a mainstream tool that could potentially be deployed against the much larger populations of patients with common cancers. Autologous is the proof of concept; allogeneic is the path to scale. The field is mid-way through that transition right now.

---

## SEGMENT 16 — BiTEs: the antibody alternative

Let me pull you sideways for a segment to introduce a completely different approach to the same fundamental problem CAR-T solves, because the two technologies coexist in the same clinical space and you need to understand the trade-off.

The approach is called a **BiTE** — a bispecific T-cell engager — and the simplest way to describe it is: an antibody-like molecule with two arms that grab two different things at once. One arm grabs a tumor antigen on the cancer cell. The other arm grabs CD3 on a T cell. By bridging the two cells together, the BiTE forces an artificial immune synapse — the T cell's CD3 gets triggered as if it were recognizing antigen via its TCR, and the T cell kills the cancer cell.

\[Pause.\]

The canonical BiTE — the one that proved the concept — is **blinatumomab**, brand name **Blincyto**, approved by the FDA in 2014 (so actually before any CAR-T). Blinatumomab is a small bispecific antibody with one arm against CD19 (the same target as the early CAR-T products) and one arm against CD3. You infuse it into a patient with B-cell ALL, and it physically tethers each circulating T cell to nearby leukemia cells, forcing the T cells to engage and kill them.

Compare this to CAR-T for the same indication (CD19-positive B-cell ALL):

**Blinatumomab**: An off-the-shelf, mass-produced drug. Comes in a vial. Continuous infusion (the molecule is small and gets cleared from the bloodstream quickly, so it has to be given as a constant IV drip for weeks at a time, which is awkward). Cost roughly $100K per cycle, much lower than CAR-T. Works in patients with low tumor burden. Has its own CRS and neurotoxicity, similar to CAR-T but generally milder.

**CAR-T (Kymriah, Tecartus) for the same indication**: Bespoke, patient-specific. Single infusion. Costs $400K+. Works in heavier tumor burden. More dramatic responses but more severe side effects.

For pediatric ALL, the clinical use case has evolved into something like a sequence: blinatumomab first, when the tumor burden is low and you can afford the time on continuous infusion; CAR-T later, when the patient has relapsed and you need a more aggressive approach. The two technologies are competitors in some senses and complementary in others.

\[Pause.\]

BiTEs (and the broader category of **bispecific antibodies**) have rapidly expanded beyond CD19. There are now FDA-approved bispecifics targeting BCMA (for multiple myeloma — teclistamab and elranatamab, both grab BCMA on the myeloma cell and CD3 on T cells), GPRC5D (talquetamab, for myeloma), HER2 (zanidatamab, for biliary cancer), and others. Several work in solid tumors, where CAR-T has so far failed — tarlatamab, a DLL3-targeted bispecific approved in 2024 for small cell lung cancer, is an early example of bispecifics succeeding where CAR-T hasn't been able to.

So the structural comparison is: **CAR-T is a living drug — a single infusion of engineered cells that expands and persists. BiTEs and bispecifics are a conventional protein drug — manufactured at scale, given by infusion, cleared from the body.** Both engage T cells against cancer. Both produce CRS-like toxicities. CAR-T has more dramatic responses when it works, with longer durability. BiTEs are simpler to manufacture, faster to access, dramatically cheaper, and easier to scale to large patient populations.

The honest assessment is that for any given cancer target, the question is increasingly: "should we develop a CAR-T product or a bispecific?" The bispecific approach has a lower barrier to scale and probably reaches more patients in total; the CAR-T approach reaches deeper responses in the subset that can access it. Both are now permanent features of the cancer therapy landscape.

In some ways, BiTEs prove that the fundamental insight of CAR-T — that T cells engaged against cancer surface antigens can produce dramatic responses — can be delivered through technologies much simpler than gene-modified cells. Whether the cell therapy paradigm or the protein drug paradigm wins more market share in the long run is genuinely uncertain.

---

## SEGMENT 17 — The cost and scale problem

Let's spend a segment squarely on the **cost and access problem**, because it's the elephant in the room for the entire CAR-T field, and any honest discussion of where the therapy is going has to engage with it.

\[Pause.\]

Autologous CAR-T costs roughly **$400,000 to $500,000 per dose** in list price. The total cost of treating one patient, including hospitalization, supportive care, complications, follow-up — frequently exceeds **a million dollars**. Insurance covers most of this in the U.S. and many European systems, but the budget impact on health systems is enormous and the per-patient cost is by far the highest in mainstream oncology.

Why so much?

**Manufacturing complexity.** Every dose is custom-made. Clean-room facilities. Trained personnel. Three to four weeks of culture per batch. Viral vector production at clinical grade. QC testing. Cold-chain logistics on both sides. This is not the same kind of cost as making a small molecule pill, which can be churned out by the ton.

**Low volumes.** Each indication is relatively small. Pediatric ALL is rare. Mantle cell lymphoma is rare. The total number of CAR-T doses produced in a year worldwide is in the tens of thousands, not millions. R&D and infrastructure costs spread over small populations push per-dose costs up.

**Value-based pricing.** Pharma companies argue that since CAR-T can produce durable cures in some patients — replacing a lifetime of chemotherapy or bone marrow transplant — the price reflects the value delivered, not just the cost of goods. There's some logic to this. But it's also a politically convenient framing for an industry that prices on what insurers will pay.

\[Pause.\]

The scale problem follows directly. Autologous CAR-T, as currently practiced, **cannot reach the patient populations of common cancers**. If you were to treat every patient who develops, say, diffuse large B-cell lymphoma in the United States each year — that's about 25,000 new cases — the existing global manufacturing capacity couldn't come close. And DLBCL is a relatively small indication compared to lung or breast cancer.

For CAR-T (or related cell therapy) to reach the patient populations of common cancers — hundreds of thousands or millions of patients globally per year — the unit cost has to come down by an order of magnitude, and the manufacturing capacity has to expand similarly. Neither is achievable with the autologous-bespoke-tailoring model. Hence the strategic urgency around **allogeneic** (Segment 15), which moves toward batch manufacturing.

There are also more incremental efficiencies being pursued. **Faster manufacturing**: Several companies are working on compressed manufacturing protocols — making the CAR-T product in 4-7 days instead of 28. The Penn group has developed a "rapid" Kymriah variant. **Automated manufacturing**: Closed-system bioreactors (like the Miltenyi CliniMACS Prodigy) that can manufacture one patient's CAR-T inside a single integrated machine, reducing labor and contamination risk. **Decentralized manufacturing**: Putting manufacturing capacity directly in hospitals, so leukapheresis-to-infusion can happen in one place, eliminating shipping. This is being trialed at academic medical centers.

Each of these helps at the margin. None solves the fundamental constraint that you're still making one custom product per patient.

\[Pause.\]

There's also a **clinical scale** problem on top of the manufacturing scale problem. CAR-T patients require treatment at specialized centers — centers with experienced staff, ICU backup, tocilizumab on hand, neurology support, and the regulatory authorization to handle the product. The number of CAR-T-certified centers worldwide is in the hundreds, not the tens of thousands of community oncology practices that handle most cancer treatment. Patients have to travel. Some patients can't travel. The geographical access problem compounds the cost problem.

For comparison: trastuzumab — Herceptin, the HER2-targeted antibody for breast cancer — can be given at any oncology practice. Any clinic can stock it. Any patient with insurance can access it. The drug is the same dose for every patient. Manufacturing happens in a few central facilities and ships globally. CAR-T cannot replicate this model with current technology.

This is the constraint pushing the field toward several long-term solutions:

**Allogeneic** (the off-the-shelf model from Segment 15).

**In vivo CAR-T** (Segment 18 — the dream of engineering T cells inside the body, without ex vivo manufacturing at all).

**Bispecific antibodies** (Segment 16, already happening — many indications that would otherwise have been CAR-T targets are being addressed by bispecifics, which scale much better).

Each of these is a partial solution. None has yet matched autologous CAR-T's clinical results in the patients it works for. The field's central trade-off, for the next decade, is going to be: how much do you give up in efficacy to gain accessibility?

There's no clean answer. There may be different products for different patient subsets — autologous CAR-T for high-risk, well-funded patients in academic centers; allogeneic CAR-T for the next tier; bispecifics for the broader population; and over time, in vivo CAR-T for everyone. That's the most plausible future. But it's a future that the field is, in 2026, only halfway through building.

---

## SEGMENT 18 — The frontier: in vivo CAR-T and what comes next

We've reached the end of the lecture, and I want to close with a look at the frontier — the directions the field is moving in that are most likely to define what CAR-T (and adoptive cell therapy more broadly) looks like a decade from now.

\[Pause.\]

The single most exciting and disruptive frontier is **in vivo CAR-T** — and to understand why, you have to grasp what it would change.

Right now, every CAR-T product is made outside the patient. You take cells out, engineer them, grow them, put them back. The "out, in" cycle is the entire reason autologous CAR-T is expensive and slow. What if you didn't have to take the cells out at all? What if you could inject a drug — a single shot — that would find the T cells inside the patient's body, deliver the CAR gene to them in place, and turn them into CAR-T cells without ever leaving the bloodstream?

That's in vivo CAR-T. **The future of the field, if it works, is the future where you inject mRNA-LNPs that engineer T cells inside the patient — no ex vivo manufacturing.**

The technology that makes this conceivable, today, is **mRNA-lipid nanoparticle delivery** — the same platform that delivered the COVID-19 vaccines. You can package an mRNA encoding the CAR construct into a lipid nanoparticle, and you can target that nanoparticle to T cells by decorating the lipid coat with anti-CD3 or anti-CD5 antibodies. The targeted nanoparticles bind T cells in circulation, get internalized, and dump their mRNA cargo into the cell's cytoplasm. The cell's own ribosomes translate the mRNA into CAR protein. The CAR appears on the cell surface within hours. The T cell, now expressing a CAR, can engage cancer and kill it.

The advantages of this approach are enormous: **No leukapheresis. No ex vivo manufacturing. No three-to-four-week wait. No bespoke per-patient product.** The drug is a vial of LNPs that anyone can ship to anywhere. It can be given to any patient on demand. The cost structure is closer to a vaccine than to current CAR-T.

There are major challenges. **The mRNA-encoded CAR is transient** — the mRNA degrades within days, so the CAR expression doesn't last like it does with integrated lentiviral CAR-T. You may need repeat dosing. **Off-target T cell engineering** — the LNPs might engineer T cells that you didn't want engineered, including regulatory T cells that you'd rather leave alone. **Manufacturing of the targeted LNP is itself complex** — you have to scale antibody-decorated nanoparticle production. **The persistence question** — does a transiently-CAR-expressing T cell expand and become memory, the way a lentivirally-engineered cell does? The biology isn't yet settled.

But the first in vivo CAR-T programs have entered clinical trials. **Capstan Therapeutics** (acquired by AbbVie in 2025) and **Umoja Biopharma** are among the leaders, with anti-CD19 in vivo CAR-T platforms in early human studies. Early data has shown that you can, in fact, generate CAR-expressing T cells inside patients with a single LNP injection, and those cells can detectably engage and reduce target cells. Whether this translates to clinically meaningful, durable responses is what the next few years of trials will tell us.

If in vivo CAR-T works, it could be the single technology that finally takes cell therapy from the niche it's currently in into mainstream cancer care. It would essentially erase the manufacturing problem, the cost problem, and the access problem in one move. That's a big "if." But the field is taking it seriously, and the technology is moving fast.

\[Pause.\]

A few other frontiers worth flagging.

**TIL evolution.** The TIL platform, fresh off Amtagvi's 2024 approval in melanoma, is expanding rapidly. Next-generation TILs are being engineered (some companies are CRISPR-editing PD-1 out of the TILs before expansion, or arming them with cytokine cassettes). The combination of unmodified-by-disease-history TILs with modern engineering tricks may produce a hybrid platform that gets the breadth of TIL with the potency of CAR-T.

**CRISPR-based custom CAR-T per patient.** A few groups are exploring the idea of designing a unique CAR for each individual patient's tumor — sequencing the tumor, identifying patient-specific surface antigens, designing a scFv against them, and manufacturing a one-off CAR-T for that patient. This is roughly the same logic as personalized neoantigen mRNA vaccines (which we covered briefly in the cancer lecture). It's the maximum-customization endpoint. It's also extraordinarily expensive, even by CAR-T standards, but the cost of bespoke biology has been falling fast and may eventually be tractable for high-priority patients.

**Combinations.** CAR-T plus checkpoint inhibitors. CAR-T plus bispecifics. CAR-T plus bone marrow transplant. CAR-T plus radiation. Almost every combination you can think of is being trialed somewhere. The combinations are largely empirical at this stage — we don't yet have a unified theory of which combinations will work for which patients.

**Beyond cancer.** This is genuinely exciting. CAR-T constructs targeting CD19 have been used to treat **systemic lupus erythematosus** and several other severe autoimmune diseases, with remarkable results — the CAR-T wipes out the patient's B cells, including the autoreactive ones, and when the B cells eventually come back they're reset to a non-autoreactive state. There are small but striking case series of refractory lupus, myasthenia gravis, and systemic sclerosis patients going into durable drug-free remission after CAR-T. If this holds up in larger trials, CAR-T may turn out to be useful in dozens of diseases beyond cancer, transforming the treatment landscape for autoimmunity. Several other engineered cell therapy approaches are being developed for HIV, for cardiac fibrosis (a CAR-T that targets activated cardiac fibroblasts has shown remarkable preclinical results), for transplant rejection.

\[Pause.\]

Step back and look at the arc. CAR-T started as a theoretical exercise in the late 1980s. It became a clinical reality with three adult CLL patients in 2011. It became a household name with Emily Whitehead in 2012. It became a registered medicine in 2017 with Kymriah. By 2026, six products are approved, dozens are in trials, and the technology is being extended into autoimmunity, solid tumors, and in vivo delivery.

It's still expensive. It's still hard to manufacture. It still mostly works only in blood cancers. But within those constraints, it has done something that almost no other cancer therapy in history has done: it has produced durable, drug-free remissions in patients who were previously incurable. Emily Whitehead, in her early twenties as I deliver this lecture, is one of thousands of people now alive because of CAR-T who would not have lived without it.

That's the bottom line. Engineered T cells, in the right patients, can do what chemotherapy and antibodies and small molecules could not — produce a living, persistent, evolving drug that hunts cancer the way the immune system was designed to hunt infection. The next decade of work will tell us how broadly that paradigm can be extended. But the core technology — the chimeric receptor, the autologous manufacturing, the lymphodepletion conditioning, the CRS management — is now mature enough to be the foundation for everything that comes next.

We'll stop there. Thanks for your attention. We'll pick up next week with checkpoint inhibitors, which are the other half of the modern immunotherapy revolution and which interact with CAR-T in interesting ways.

\[End of lecture.\]

---

## APPENDIX — Quick-reference summary (not for reading aloud)

**Core idea**: CAR-T cell therapy — engineer the patient's own T cells to express a chimeric antigen receptor (CAR) recognizing a cancer cell surface marker, then reinfuse the engineered cells to hunt and kill the cancer. A living drug; single infusion; persists for years in successful cases.

**Why T cells**: natural killers (perforin/granzyme), specifically targeted (TCR), make long-lived memory cells, self-amplify in response to target. Best natural substrate for engineered cell therapy.

**CAR architecture** (three layers):
- Extracellular: scFv (antibody single-chain variable fragment) — the targeting/recognition module, interchangeable.
- Transmembrane: hinge + transmembrane domain (CD8 or CD28-derived).
- Intracellular: CD3-zeta (activation) plus co-stimulatory domain(s).

**Generations**:
- 1st: CD3-zeta only → poor persistence, didn't work clinically.
- 2nd: + CD28 OR + 4-1BB co-stim → the workhorse, all approved products.
  - CD28: fast, strong, shorter-lived (Yescarta, Tecartus).
  - 4-1BB: slower, more durable persistence (Kymriah, Breyanzi, Abecma, Carvykti).
- 3rd: + two co-stims → marginal extra benefit, harder to manufacture.
- 4th (TRUCKs): + cytokine cassette (IL-12, IL-15, IL-18) → for harsher environments, solid tumors.

**Emily Whitehead, April 2012**: First pediatric ALL cured by CAR-T (Penn anti-CD19 4-1BB). Developed severe CRS, rescued by emergency tocilizumab (anti-IL-6R). Still in remission >10 years later. The field's existence proof.

**Founders**: Carl June (UPenn — Kymriah lineage); Bruce Levine (Penn manufacturing); David Porter (Penn clinician, first adult CLL patients 2011); Steven Rosenberg (NCI, TIL pioneer, Yescarta lineage); Zelig Eshhar (original CAR concept 1980s); Michel Sadelain, Renier Brentjens (MSK CD28 line).

**Six FDA-approved CAR-T products** (all autologous, all blood cancers):
- **Kymriah** (tisagenlecleucel, Novartis, 2017) — CD19, 4-1BB, lentiviral. Pediatric ALL, DLBCL, FL. $475K.
- **Yescarta** (axicabtagene ciloleucel, Kite/Gilead, 2017) — CD19, CD28, gamma-retroviral. DLBCL, FL. $373K.
- **Tecartus** (brexucabtagene autoleucel, Kite/Gilead, 2020) — CD19, CD28. Mantle cell lymphoma, adult ALL.
- **Breyanzi** (lisocabtagene maraleucel, BMS/Juno, 2021) — CD19, 4-1BB. Large B-cell lymphoma, CLL. Defined CD4:CD8 ratio.
- **Abecma** (idecabtagene vicleucel, BMS/bluebird, 2021) — BCMA, 4-1BB. Multiple myeloma.
- **Carvykti** (ciltacabtagene autoleucel, Janssen/Legend, 2022) — BCMA (dual nanobody), 4-1BB. Multiple myeloma; deepest responses, delayed parkinsonism risk.

**Manufacturing pipeline** (~3-4 weeks):
1. Leukapheresis (collect patient white blood cells).
2. Ship to central facility.
3. Selection (enrich T cells, e.g., anti-CD3/CD28 beads).
4. Activation (anti-CD3/CD28 + IL-2).
5. Transduction (lentivirus or gamma-retrovirus delivers CAR gene).
6. Expansion (bioreactors, 1-3 weeks).
7. Formulation/freeze.
8. Release QC (sterility, identity, potency, viability).
9. Ship back to hospital.
10. Lymphodeplete patient with flu-cy.
11. Thaw and infuse.

**Key toxicities**:
- **Cytokine release syndrome (CRS)**: massive inflammatory cytokine surge from successful CAR-T expansion. Fever, hypotension, multi-organ failure. Graded 1-4 (ASTCT). Managed with **tocilizumab** (anti-IL-6R) first-line, steroids, anakinra (anti-IL-1R) second-line.
- **ICANS** (immune effector cell-associated neurotoxicity syndrome): brain version of CRS — encephalopathy, confusion, seizures, cerebral edema. ICE score for grading. Steroids first-line; tocilizumab less effective. Mechanism not fully understood (cytokines crossing BBB, endothelial activation).
- **B-cell aplasia**: side effect of CD19 CAR-T; managed with IVIG replacement.
- **Tumor lysis syndrome**, prolonged cytopenias, rare secondary T-cell malignancies (FDA boxed warning 2024).

**Lymphodepletion**: fludarabine + cyclophosphamide (flu-cy), 3-5 days pre-infusion. Empties the lymphoid niche, accumulates IL-7/IL-15, removes Tregs → allows CAR-T expansion. Essential to efficacy.

**Solid tumor challenges**:
- Antigen heterogeneity (no clean CD19-equivalent target; antigen escape).
- Immunosuppressive microenvironment (Tregs, MDSCs, M2 macrophages, TGF-β, PD-L1).
- T-cell exhaustion from chronic antigen engagement.
- Risk of on-target/off-tumor toxicity (HER2 lung death case).
- Trials ongoing for GD2 (neuroblastoma), mesothelin, EGFRvIII (GBM), CLDN18.2 (gastric/pancreatic), PSMA (prostate).

**Parallel cell therapy approaches**:
- **TILs** (tumor-infiltrating lymphocytes): isolate, expand, reinfuse natural tumor-reactive T cells. **Amtagvi** (lifileucel, Iovance, 2024) — first FDA-approved TIL, melanoma. ~31% ORR.
- **TCR-T**: engineered T-cell receptor (vs CAR — accesses intracellular targets via MHC). HLA-restricted. **Tecelra** (afamitresgene autoleucel, Adaptimmune, 2024) — MAGE-A4 / HLA-A*02:01, synovial sarcoma.

**Allogeneic CAR-T** (off-the-shelf): donor-derived, gene-edited (CRISPR or TALEN) to knock out TCR (prevents GVHD) and HLA class I (prevents rejection), often with NK-protection mods. Companies: Allogene, Caribou, Cellectis (Layla case 2015), Fate, CRISPR Therapeutics, Precision BioSciences. No FDA approval yet; shorter persistence than autologous.

**BiTEs / bispecific antibodies**: protein drug, one arm tumor antigen + one arm CD3, forces T-cell engagement. **Blinatumomab (Blincyto)** — CD19xCD3, B-ALL, 2014 (predates CAR-T). Continuous IV infusion. Cheaper, scalable, shorter responses. Newer: teclistamab/elranatamab (BCMA myeloma), talquetamab (GPRC5D myeloma), tarlatamab (DLL3 SCLC). Direct competitor and complement to CAR-T.

**Cost/scale**: Autologous CAR-T ~$500K/dose, total cost often >$1M. Cannot scale to common cancers. Drivers: bespoke manufacturing, low volumes, value-based pricing. Solutions in progress: allogeneic, automation (CliniMACS Prodigy), faster manufacturing protocols, decentralized hospital manufacturing.

**Frontier**:
- **In vivo CAR-T** via targeted mRNA-LNPs (Capstan/AbbVie, Umoja). No ex vivo manufacturing; single injection engineers T cells in patient. Transient expression challenge.
- TIL evolution (engineered TILs, PD-1 knockout).
- Personalized neoantigen CAR-T per patient.
- Combinations with checkpoint inhibitors.
- **Beyond cancer**: CD19 CAR-T producing durable remissions in lupus, myasthenia gravis, systemic sclerosis. Cell therapy for HIV, cardiac fibrosis, transplant rejection.

**Two organizing principles**: (1) the CAR is a modular design — same intracellular signaling backbone, swappable scFv targeting head — which is why the platform generalizes across targets; (2) the autologous-bespoke model is the field's central constraint, and the entire trajectory of the field is determined by how successfully the move toward allogeneic, in vivo, or fundamentally different (BiTE) approaches reduces that constraint.
