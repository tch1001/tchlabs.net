# Antibodies

**A 2-hour undergraduate-to-postgraduate immunology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 14,500 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to two hours, plus a mid-point break. (Read faster, ~140 wpm, and it lands nearer 105 minutes, leaving room for questions or board work to reach the full two hours.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The central problem: recognizing an infinite world

Alright, let's get started. Good morning, everyone. For the next two hours, we are going to talk about antibodies. And I want to begin not with a structure, not with a sequence, not with a Nobel Prize — though we'll get to all of those — but with a problem. A problem that, if you really sit with it, is breathtaking.

Here is the problem. At some point in the next week, you are going to be exposed to something your body has never seen before. Maybe it's a new strain of influenza. Maybe it's a novel bacterium on a doorknob. Maybe it's a synthetic chemical that has never existed on this planet before — never, in the entire four-billion-year history of life — and your immune system, within about two weeks, is going to make a protein that binds that chemical with exquisite specificity. A protein _designed_ for a target that no ancestor of yours, no organism anywhere, has ever encountered. And not just one such protein — your body can in principle make a protein against essentially any shape you can throw at it. The number of distinct molecular shapes your immune system can recognize is conservatively in the billions. Some estimates put the potential repertoire at ten to the eleventh, ten to the twelfth, ten to the sixteenth. Numbers that don't fit in your head.

How? How does a finite genome — about 20,000 protein-coding genes, fewer genes than an onion — produce a near-infinite recognition system? That is _the_ central question of antibody biology. Everything we do today is, in one way or another, an answer to that question. The structure of the molecule is an answer. The genetics of V(D)J recombination is an answer. The cellular choreography of the germinal center is an answer. And the entire two-hundred-billion-dollar industry of therapeutic monoclonal antibodies — rituximab, trastuzumab, the checkpoint inhibitors — is, at bottom, humans figuring out how to harness that same answer for ourselves.

If you walk out of this lecture in two hours and you can do three things — one, explain to a colleague how a finite genome produces a near-infinite repertoire, and walk them through V(D)J recombination, somatic hypermutation, and class switching as the three layers of diversity; two, look at an antibody molecule and tell me which part binds the antigen, which part talks to the rest of the immune system, and how the isotype changes the message; three, take any therapeutic monoclonal antibody on the market — rituximab, trastuzumab, pembrolizumab, blinatumomab, T-DXd — and tell me what it binds, what it does, and what engineering choices went into making it — then we've succeeded. Everything else is decoration on those three.

\[Pause.\]

Let me also tell you why this matters, beyond being intellectually striking. The antibody molecule is, in three different senses, the most important protein in modern medicine. First, biologically: antibodies are how you survive almost every infection you don't die of. The adaptive immune system's specificity arm runs through them. Second, diagnostically: every pregnancy test, every COVID lateral flow, every ELISA in every clinical lab, every Western blot you'll ever run, is a workaround for the same problem — "I have a sample; is this thing in it?" — and the answer is almost always "use an antibody." Third, therapeutically: of the top ten best-selling drugs in the world, the majority are now monoclonal antibodies. The blockbusters of the twentieth century were small molecules — statins, antihypertensives, antidepressants. The blockbusters of the twenty-first century are antibodies. That shift is generational, and it's not slowing down.

So this is not a niche topic. This is the molecule that ties together evolution, genetics, structural biology, cell biology, and drug development into one continuous story. Let's start at the beginning.

---

## SEGMENT 2 — A short history: from horse serum to hybridomas

Before we get into structures, I want to spend a few minutes on where the antibody concept came from, because the history is genuinely instructive — it teaches you how the field thinks, and it sets up several of the conceptual moves we'll make later.

The story really starts in the 1890s, in Germany, with Emil von Behring and Kitasato Shibasaburo, working in Robert Koch's lab in Berlin. They were studying two terrifying diseases: diphtheria and tetanus. Both kill not by the bacterium itself spreading, but by a soluble toxin the bacterium secretes. Von Behring and Kitasato had a clever idea. They injected sub-lethal doses of toxin into animals — guinea pigs, then horses — and the animals survived. And then, crucially, they drew blood from those surviving animals and showed that the _serum_ — the clear liquid you get if you let blood clot and pour off the cells — could be transferred into a second, naive animal and _protect_ that animal against a lethal dose of toxin.

Something in the serum was carrying the protection. They called that something **antitoxin**. The principle was generalized into what we call **passive immunity** — protection conferred by transferring serum from an immune donor — and von Behring won the very first Nobel Prize in Physiology or Medicine in 1901 for it. Diphtheria antitoxin became a clinical product. Children's lives were saved. And the molecular nature of the active ingredient was, at that point, completely unknown. It was just "something in serum."

That something, we now know, was antibodies. The word **antibody** — _Antikörper_ in German — came into general use around the turn of the century, alongside the more generic **immunoglobulin**, which is the term you'll see in protein chemistry and biochemistry — abbreviated **Ig**. Same molecule, different historical naming traditions.

Then comes Paul Ehrlich, also working in Germany, who proposed in 1900 the **side-chain theory** — a beautifully prescient idea that cells carry pre-formed receptors on their surface, and that exposure to an antigen selects for cells displaying receptors that happen to fit, and those receptors get shed into the blood as antibodies. Almost every word of Ehrlich's specific mechanism turned out to be wrong, but the _shape_ of the idea — pre-existing diverse receptors, selected by antigen — is essentially correct. We now call that **clonal selection**, and it's the foundational theorem of adaptive immunity. Ehrlich shared a Nobel with Élie Metchnikoff in 1908.

Skip forward to the 1940s and 1950s. Biochemists started to figure out what an antibody actually _is_. Rodney Porter in Britain used the enzyme papain to chop antibodies into fragments and showed they fell into pieces with distinct functions. Gerald Edelman in the United States showed they were built of multiple polypeptide chains held together by disulfide bonds. Together they worked out the four-chain structure — two heavy, two light — and they shared the Nobel in 1972. We'll spend an entire segment on that structure shortly.

And then the great theoretical puzzle: clonal selection was elegant, but where did the diversity come from? In the 1950s and '60s, immunologists fought over this. One camp said the diversity was germline — that you inherited a separate gene for every possible antibody, and there were just an enormous number of them. The other camp — led by people like Joshua Lederberg and later Niels Jerne — said it had to be somatic, generated during the life of the individual from a smaller starting set. Susumu Tonegawa settled the question in the late 1970s with a single set of experiments comparing germline DNA to the DNA of antibody-producing B cells, and proving that the antibody gene segments physically rearrange during B-cell development. Diversity, he showed, is built in the soma from a finite genome, by cutting and pasting. He won the Nobel in 1987, the only person to win an unshared Nobel in Physiology or Medicine in the modern era, which tells you how singular the achievement was. We'll walk through V(D)J recombination in Segment 4.

And in parallel with all that basic biology, a clinical and industrial revolution. In 1975, Georges Köhler and César Milstein in Cambridge worked out **hybridoma technology** — they figured out how to take a single antibody-producing B cell from an immunized mouse, fuse it to an immortal myeloma cell, and produce a culture line that secretes one antibody — _one_ — of defined specificity, forever. That made it possible, for the first time, to mass-produce a single defined antibody molecule. They shared the Nobel in 1984, alongside Niels Jerne. We'll do hybridomas properly in Segment 9.

And then the molecular biology revolution rolled through immunology in the 1980s and '90s. Greg Winter, again in Cambridge, figured out how to humanize antibodies — to take a useful mouse antibody and graft its binding loops onto a human framework, so the molecule wouldn't be rejected as foreign by a human patient. John McCafferty and Winter developed **phage display**, a way to make antibody libraries in bacteria and select binders directly, bypassing immunization entirely. Winter and George Smith shared the chemistry Nobel in 2018 for that work.

And the therapeutic story exploded. Rituximab approved 1997. Trastuzumab approved 1998. Infliximab approved 1998. By 2010 these were among the best-selling drugs on the planet. Ipilimumab approved 2011, the first checkpoint inhibitor, opening the cancer immunotherapy era. Pembrolizumab and nivolumab a few years later, with Jim Allison and Tasuku Honjo winning the Nobel in 2018. And then the antibody-drug conjugates, the bispecifics, the CAR-Ts engineered from antibody fragments — the field is moving so fast that any list I give you will be out of date by the time you graduate.

So that's the arc: serum therapy, structure, clonal selection, V(D)J recombination, hybridomas, humanization, phage display, the therapeutic explosion. Hold that arc loosely in mind, because every segment from here on slots into it somewhere.

\[Pause.\]

---

## SEGMENT 3 — Structure: heavy chains, light chains, and the immunoglobulin fold

Alright. With the history laid down, let me draw you the molecule, because the rest of this lecture lives or dies on whether you can picture it.

A canonical antibody — let's use IgG, which is the workhorse, the one drawn on every textbook cover — is a Y-shaped molecule. About 150 kilodaltons, roughly 1500 amino acids in total. It is built from four polypeptide chains: two identical **heavy chains** and two identical **light chains**. The heavy chains are big, about 50 kilodaltons each. The light chains are small, about 25 kilodaltons each. The two heavy chains pair with each other along their length and form the spine of the Y, and a light chain pairs with each heavy chain at the upper arms of the Y. So the stoichiometry is two heavies, two lights, arranged with twofold symmetry.

Now hold up your hands and make a Y shape — two fingers up forming the arms, your wrists and forearms together forming the stem. The two upper arms of the Y are called the **Fab regions** — fragment, antigen-binding. The stem of the Y is called the **Fc region** — fragment, crystallizable, so-named historically because it crystallized readily during Porter's early experiments. Between the arms and the stem there's a flexible hinge. That's the molecule. Two Fabs, one Fc, a hinge in between.

The two Fabs each contain one antigen-binding site, at the very tip of the arm. So a single IgG molecule has **two** identical antigen-binding sites — it is **bivalent**. That bivalence matters enormously, and we'll come back to it when we talk about avidity.

Now let me give you the chain architecture. Each light chain is built of two **immunoglobulin domains** — one **variable** domain, **V_L**, at the N-terminus, and one **constant** domain, **C_L**. Each heavy chain is built of four immunoglobulin domains — one variable, **V_H**, and three constant, **C_H1, C_H2, C_H3**. (For IgM and IgE, there's an extra constant domain, but ignore that for now.) The Fab arm contains V_L paired with V_H at the tip — that's where the antigen binds — and C_L paired with C_H1 just below. The Fc stem contains C_H2 and C_H3 from each heavy chain, paired with each other. The hinge sits between C_H1 and C_H2.

Each immunoglobulin domain — and there are roughly twelve of them per IgG molecule — has the same fold. It is called the **immunoglobulin fold**, and it is one of the most common protein folds in all of biology. About 110 amino acids, arranged as a sandwich of two antiparallel beta-sheets, held together internally by a single conserved disulfide bond between two cysteines on opposite faces. The Ig fold is so successful evolutionarily that it shows up not just in antibodies but in T-cell receptors, MHC molecules, cell-adhesion molecules like ICAM and VCAM, the muscle protein titin — there are tens of thousands of Ig-fold domains in the human proteome. The antibody molecule is, in a sense, a particular elaboration of a much more general structural theme.

Now the disulfides — the molecular glue holding it all together. Each Ig domain has its own internal disulfide; that's the intra-domain stitch. Then there are **inter-chain** disulfides: one between each light chain and its paired heavy chain, near the bottom of the Fab, and then disulfides in the hinge holding the two heavy chains together. In IgG1, the most common subclass, there are typically two hinge disulfides; other subclasses have different numbers. If you reduce all those disulfides — break them chemically with something like DTT or beta-mercaptoethanol — the molecule falls apart into its constituent chains, and you see this in any SDS-PAGE gel of an antibody.

Here's a vocabulary point I want to drive home, because students confuse it constantly. **Variable** and **constant** refer to amino acid sequence variation _between different antibodies_. The variable domains differ enormously from one antibody to the next — that's where the diversity lives, that's how different antibodies recognize different antigens. The constant domains are nearly identical across all antibodies of the same isotype — they're the boilerplate part. So within one antibody molecule, V_H is just as physically rigid and well-folded as C_H1; "variable" doesn't mean floppy or unstructured. It means "this region's sequence varies across the antibody repertoire."

And within the variable domains, the variation is not uniformly distributed. If you align thousands of V_H sequences, you find that most positions are reasonably conserved — the structural scaffold positions — and a few positions are wildly variable. Those wildly variable positions cluster into three short loops at one end of the Ig fold. Those loops are called **complementarity-determining regions**, or **CDRs**. Three on the heavy chain — CDR-H1, H2, H3 — and three on the light chain — CDR-L1, L2, L3. When V_H and V_L pair to form the Fab tip, the six CDR loops come together into a single contiguous surface that forms the antigen-binding site. Six loops, one binding surface, sitting at the tip of each Fab arm. CDR-H3 is by far the most variable of the six and usually contributes most of the binding contacts — we'll see why when we get to V(D)J recombination.

The rest of the variable domain — the conserved scaffolding around the loops — is called the **framework**. Framework regions provide the structural support that holds the CDRs in the right geometry. When we get to antibody humanization in Segment 11, the whole game will be: keep the CDRs from the mouse, swap in a human framework, and pray the loops still bind.

So picture it: a Y, four chains, twelve Ig folds, hinge in the middle, two Fab arms with binding sites at their tips, one Fc stem at the bottom. Six CDR loops per binding site, doing the recognition. That's the molecule. Tape a picture of it to the inside of your eyelids.

\[Pause.\]

---

## SEGMENT 4 — V(D)J recombination: how a finite genome makes a near-infinite repertoire

Now we are going to confront, head-on, the central problem I opened with. How does a 20,000-gene genome produce a recognition repertoire of, conservatively, ten to the eleventh distinct antibodies? The answer, worked out by Tonegawa in the 1970s, is **V(D)J recombination**, and it is one of the most elegant and consequential pieces of molecular biology you will ever learn.

Here is the core insight. In your germline genome — the DNA you inherited from your parents, present in every cell in your body except your B and T lymphocytes — the antibody heavy-chain locus is not a single gene. It is a long array of **gene segments**, sitting on chromosome 14 in humans, organized into four kinds: **V** segments, **D** segments, **J** segments, and **C** segments. Roughly 40-some functional V segments, 25 or so D segments, 6 J segments, and then a tandem array of C segments downstream — one C segment for each isotype: Cμ for IgM, Cδ for IgD, Cγ for IgG (with four subclasses), Cε for IgE, Cα for IgA (with two subclasses).

The light-chain loci are similar but simpler. The kappa light-chain locus on chromosome 2 has V and J segments — no Ds — plus a single C segment. The lambda light-chain locus on chromosome 22 likewise has V and J, no D, with several C segments. A given B cell uses either kappa or lambda, never both — that's called **light-chain isotype exclusion**.

In a developing B cell in the bone marrow, before that cell ever sees its first antigen, the DNA at the antibody loci gets _cut and pasted_. One V segment, one D segment, and one J segment — chosen essentially at random from the array — get spliced together at the DNA level, with all the intervening DNA deleted out as a circle. So the heavy chain locus goes from V1-V2-V3-...-D1-D2-D3-...-J1-J2-...-Cμ-Cδ-Cγ... to, for example, V17-D9-J4-Cμ. That rearranged V-D-J unit is now the variable region of the heavy chain. The light chain undergoes the same process but with just V to J — no D.

The cutting and pasting is done by a pair of enzymes called **RAG1 and RAG2** — the recombination-activating genes. RAG1/2 recognize specific signal sequences flanking each V, D, and J segment — called recombination signal sequences, RSSs, with a conserved 12-base-pair or 23-base-pair spacer — and they only recombine a 12-spacer with a 23-spacer (the **12/23 rule**), which is what ensures you never join a V directly to a J, skipping D. RAG cuts the DNA precisely between the signal sequence and the coding segment, then the general DNA repair machinery — the non-homologous end joining pathway, with players like Ku70/80, DNA-PKcs, Artemis, and DNA ligase IV — sticks the coding ends back together.

Now let's count the diversity that comes out of this.

**Combinatorial diversity.** If you have 40 V segments, 25 D segments, and 6 J segments at the heavy-chain locus, the number of possible VDJ combinations is roughly 40 × 25 × 6 = 6,000. At the light-chain locus, with maybe 40 V kappa segments and 5 J kappa segments, you get about 200 combinations. Combine one of 6,000 heavy chains with one of 200 light chains, and you get roughly 1.2 million different antibodies just from picking different segments. Already not bad.

**Junctional diversity.** But the real magic happens at the joins. When RAG cuts between the V and D and J segments, the joining is sloppy. The enzyme Artemis opens hairpin intermediates at variable positions, generating short **palindromic** P-nucleotides. An enzyme called **terminal deoxynucleotidyl transferase**, **TdT**, then templatelessly adds random nucleotides — **N-nucleotides** — at the junctions. And nibbling exonucleases can chew back the ends. So every V-D and D-J join is a small region of essentially random sequence, with random additions and random deletions. This junctional diversity multiplies the combinatorial diversity by another factor of, roughly, ten to the seventh or so — enough to push the total naive repertoire to somewhere in the neighborhood of ten to the eleventh or ten to the twelfth different antibody sequences possible in principle.

And here's where CDR-H3 comes back. CDR-H3 sits right at the V-D-J junction. It is the loop that gets sculpted by all that junctional diversity. That's why CDR-H3 is the most variable of the six CDRs, and it's why CDR-H3 usually dominates antigen contact: it sits at the center of the binding site, and it is the loop with the most unique sequence in each B cell.

Now, this entire system has one terrifying feature, which I want you to appreciate. RAG1/2 is, mechanistically, a transposase — it is an enzyme that deliberately makes double-strand breaks in your DNA. In your bone marrow. In hundreds of thousands of developing B cells per day. The fact that this almost always works correctly, and only rarely produces translocations that cause lymphoma, is a testament to how tightly the system is regulated. When it goes wrong, you get the characteristic chromosomal translocations of certain B-cell lymphomas — the c-Myc/IgH translocation of Burkitt lymphoma, for instance — where a RAG-mediated cut at the antibody locus ends up joined to an oncogene. So V(D)J recombination is the engine of immune diversity, and it is also, occasionally, the engine of lymphomagenesis.

One more concept before we leave: **allelic exclusion**. You have two copies of every chromosome, so you have two heavy-chain loci and four light-chain loci (two kappa, two lambda). A given B cell needs to express only _one_ heavy chain and _one_ light chain — otherwise its specificity would be ambiguous. So as soon as a productive heavy-chain rearrangement happens on one allele, the cell shuts down rearrangement at the other allele. Same with light chains. The mechanism involves feedback signals from the expressed protein. The result is **one B cell, one antibody specificity** — the cellular embodiment of the clonal selection principle Ehrlich and Lederberg and Jerne had been chasing for fifty years.

\[Pause. Let it land.\]

So that's the answer to the central problem. Combinatorial diversity from picking segments. Junctional diversity from sloppy joining and TdT. Allelic exclusion ensuring one cell, one antibody. A finite genome, infinite-ish repertoire.

---

## SEGMENT 5 — Somatic hypermutation, class switching, and the germinal center

V(D)J recombination gets you a naive repertoire — every B cell in your bone marrow making one unique antibody, ready to be deployed. But the naive repertoire is, frankly, mediocre. The affinities of naive B-cell receptors for their cognate antigens tend to be in the micromolar range — okay, but not great. Yet by two weeks after an immunization, the antibodies circulating in your blood against that antigen will have affinities in the nanomolar or even picomolar range — a thousand- to a million-fold tighter binding than what we started with. How does the body _improve_ on the naive repertoire?

The answer is the **germinal center**, and the two molecular processes that happen inside it: **somatic hypermutation** and **class-switch recombination**. Both are driven by a single enzyme — **AID**, activation-induced cytidine deaminase — and both are central to making the antibody response actually useful.

Let me set the scene. When a naive B cell in a lymph node encounters its cognate antigen — say, on the surface of an infected cell or in soluble form being presented by follicular dendritic cells — and also receives help from a T helper cell, that B cell migrates into a structure called a **germinal center**. The germinal center is a transient anatomical structure in lymph nodes and spleen, with two zones: a **dark zone** where B cells are rapidly proliferating, and a **light zone** where they are being selected. B cells cycle back and forth between the zones, dozens of times, undergoing rounds of mutation and selection. The germinal center is, essentially, a Darwinian evolution machine running inside your lymph node, at high speed, on the timescale of days.

**Somatic hypermutation** — SHM — is what happens in the dark zone. The enzyme AID, expressed at high levels in germinal center B cells, deaminates cytosine residues in single-stranded DNA, converting them to uracil. Uracil in DNA is a mistake — it doesn't belong there — and the cell's repair machinery comes in to fix it. But the repair pathways used here are mutagenic: the uracil base excision repair pathway, when combined with translesion synthesis by error-prone polymerases like polymerase eta, introduces point mutations not just at the original C but in a window of surrounding nucleotides. The net result: mutations get introduced into the variable-region DNA at a rate of about 10^-3 per base pair per cell division — a million times the normal somatic mutation rate. AID is targeted specifically to the V regions of immunoglobulin genes — it largely leaves the rest of the genome alone — and the mutations accumulate, generation after generation, in the proliferating dark-zone B cells.

Then the B cells move to the light zone, and selection happens. In the light zone, B cells re-encounter antigen displayed on follicular dendritic cells, and they compete with each other for binding. Higher-affinity mutants bind better, take up more antigen, present more of it to T follicular helper cells, get more help, and survive to re-enter the dark zone for another round. Lower-affinity mutants — or worse, mutants with deleterious mutations that destroy binding entirely — fail to get help, and die by apoptosis. So mutation in the dark zone, selection in the light zone, then back again, and again, and again. After many rounds, the surviving B cells carry variable regions with anywhere from a handful to thirty or more amino acid substitutions relative to the starting germline sequence, and their affinities for antigen have improved by orders of magnitude. This whole process is called **affinity maturation**, and it is one of the most beautiful examples of evolution by natural selection occurring on a timescale of weeks, inside your own body.

\[Pause.\]

Now, **class-switch recombination** — CSR. This is the other thing AID does, and it's logically separate from affinity maturation. Class switching changes which constant region — which isotype — a B cell uses, without changing the variable region.

Remember the layout of the heavy-chain locus: a rearranged VDJ at the front, then a tandem array of constant-region exons — Cμ, Cδ, Cγ3, Cγ1, Cα1, Cγ2, Cγ4, Cε, Cα2 — in that order, give or take. A naive B cell expresses IgM and IgD by using the upstream Cμ and Cδ exons via alternative splicing. After activation, with the right cytokine signals from T helper cells, the cell can switch to using one of the downstream C-region exons. Cytokine IL-4 pushes switching to IgG1 or IgE; IFN-gamma pushes to IgG3 or IgG2; TGF-beta combined with other signals pushes to IgA. The cytokine environment, set largely by the T helper cell subtype, dictates the isotype.

Mechanistically, switching works by AID deaminating cytosines in repetitive **switch regions** — long stretches of DNA upstream of each C region (except Cδ). The deaminations get processed into double-strand breaks. The break at the upstream Sμ switch region and the break at the downstream switch region — say, Sγ1 — get joined together by non-homologous end joining, with the intervening DNA looping out and being deleted as a circle. The result: the same VDJ is now sitting directly upstream of, say, Cγ1, and the cell now makes IgG1 instead of IgM. The intervening Cδ, Cγ3, etc., are physically deleted from the chromosome. Switching is irreversible. Once you've gone from IgM to IgG1, you can switch further downstream — to IgA, say — but you can never go back upstream.

Why does this matter? Because the isotype is the **effector module**. The variable region — what you bind — stays the same through class switching. But the Fc region changes, and the Fc region is what talks to the rest of the immune system. Switching from IgM to IgG changes how long the antibody persists in serum (IgG much longer), whether it crosses the placenta (IgG yes, IgM no), what receptors it engages on macrophages and NK cells, whether it activates complement, where in the body it shows up. The same specificity, rewired for a different job. The germinal center is therefore not just an affinity-tuning machine; it is also a deployment-options machine.

So those are the two AID-driven processes: SHM tightens the binding, CSR changes the effector function. Plasma cells differentiating out of the germinal center are now making high-affinity, isotype-appropriate antibody for the pathogen at hand. And some germinal center B cells exit as **memory B cells**, ready to respond faster and harder if the same antigen ever shows up again. Which is exactly the cellular basis of every vaccine you've ever received.

\[Pause.\]

---

## SEGMENT 6 — Antigen binding: paratopes, epitopes, and the affinity-avidity distinction

Alright. We have a structure. We have a way to generate diversity. We have a way to refine affinity. Now let's talk about what it actually _means_ for an antibody to bind an antigen, because the vocabulary here is going to come up over and over, and I want it precise in your head.

The portion of the antigen that the antibody actually touches is called the **epitope**. The portion of the antibody that does the touching — that constellation of six CDR loops at the tip of the Fab — is called the **paratope**. Epitope and paratope are complementary surfaces, like a key and a lock, except that proteins are flexible, so it's more accurate to say "key and lock that both deform a little to fit each other."

Epitopes come in two flavors. A **linear epitope** is a short continuous stretch of amino acid sequence — say, residues 110 through 118 of some protein — that the antibody recognizes as a contiguous peptide. A **conformational epitope** — also called a discontinuous epitope — is made up of residues that are far apart in the linear sequence but come together in three-dimensional space when the protein folds. Most antibodies against native, folded proteins recognize conformational epitopes. This is why an antibody that beautifully recognizes a protein in its native conformation often fails to recognize the same protein in a Western blot, where the protein has been denatured and stretched out — the conformational epitope no longer exists on the linear chain. And vice versa.

A typical protein-protein epitope buries about 800 to 1500 square angstroms of surface area on each side. That's roughly 15 to 20 amino acid residues from the antigen contacting roughly 15 to 20 residues from the antibody — five or six per CDR loop, give or take. The interaction is held together by hydrogen bonds, van der Waals contacts, salt bridges, and water-mediated bridges. No covalent bonds — antibody-antigen binding is entirely non-covalent.

\[Pause.\]

Now the quantitative vocabulary. The **affinity** of an antibody for its antigen is the strength of binding at a single binding site — one paratope, one epitope. It's measured by the equilibrium dissociation constant, **K_D**, which has units of molarity. A lower K_D means tighter binding. Naive B-cell receptors typically have K_D in the micromolar range (10^-6 M). Antibodies after affinity maturation are in the nanomolar range (10^-9 M). The best-engineered therapeutic monoclonals can hit picomolar (10^-12 M) or even femtomolar (10^-15 M) affinities. That's a span of nine orders of magnitude, from a mediocre naive receptor to a state-of-the-art therapeutic.

But K_D is itself the ratio of two rate constants: **k_off divided by k_on**. The on-rate, k_on, is how fast the antibody and antigen come together; it's usually diffusion-limited, in the range of 10^5 to 10^6 per molar per second. The off-rate, k_off, is how fast they come apart once bound. K_D is k_off over k_on, so for a given on-rate, tighter binding means a slower off-rate. For therapeutic applications, k_off often matters more than K_D itself, because what you care about clinically is **residence time** — how long the antibody stays bound to its target, blocking it from doing whatever it does. A drug with a very slow off-rate keeps the target occupied for longer, even between doses. That's why surface plasmon resonance — Biacore measurements — give you both k_on and k_off separately, not just K_D, and the off-rate is often the more interesting number.

\[Pause.\]

Now the most important conceptual distinction in this segment: **affinity versus avidity**.

**Affinity** is the strength of a single antibody-antigen interaction — one paratope, one epitope. It's an intrinsic molecular property.

**Avidity** is the total binding strength when multiple interactions are engaged simultaneously. Remember, IgG has two binding sites — it's bivalent. IgM, which we'll see in detail next segment, is a pentamer — it has _ten_ binding sites. If an antigen is multivalent — for example, if there are many copies of the epitope on the surface of a bacterium or a virus — then a single IgG can engage two epitopes at once, and an IgM can engage ten. Once one binding site engages, the local effective concentration of the other epitope nearby is enormous, and the avidity — the apparent affinity of the whole molecule — can be many orders of magnitude tighter than the intrinsic affinity of a single site. This is sometimes called the **avidity effect**, and it is why IgM, which has individually weakish binding sites, can still be highly effective against pathogens like bacteria with repeating surface antigens: ten sites of mediocre affinity collectively act like one site of crushing affinity.

The practical upshot: when you read a paper or a drug brochure quoting a K_D, ask whether that's the intrinsic affinity of a single site (measured against a monomeric soluble antigen) or the apparent avidity against a multivalent target (a cell surface, a virus). The two numbers can differ by a thousand-fold or more, and conflating them has tripped up many a drug development program.

\[Pause.\]

One last point on binding. The CDR loops are flexible, and when antigen binds, both the antibody and the antigen often undergo small conformational adjustments — this is called **induced fit**. So the bound conformation of the CDRs is not always exactly the conformation they adopt in the unliganded antibody. This matters for structure-based antibody design: you can't always trust the apo crystal structure to tell you what the bound form will look like. It also matters conceptually, because it tells you that the lock-and-key picture is a useful first approximation but reality is more like a glove fitting a hand — both surfaces flexible, both deforming slightly to maximize contact.

Okay. We have structure, diversity, affinity maturation, and the language of binding. Now let's talk about what happens after the antibody actually binds — the effector functions encoded in the Fc.

---

## SEGMENT 7 — Isotypes and Fc-mediated effector functions

We have spent a lot of time on the Fab end of the molecule — the part that does the recognizing. But binding the antigen is, in most cases, just step one. The antibody also has to _do_ something — neutralize a toxin, mark an infected cell for destruction, trigger inflammation, transport itself across a membrane. That doing is encoded in the **Fc region**, and it is set by the **isotype**. Different isotypes have different Fc regions, and therefore different effector functions. So let me walk you through the five major human isotypes — IgM, IgG, IgA, IgE, IgD — and what each one is for.

**IgM** is the first antibody made in a primary immune response, before class switching has happened. A naive B cell expresses IgM (and IgD) on its surface as the B-cell receptor; upon activation, the cell secretes IgM. Secreted IgM is unusual structurally: it is a **pentamer** — five Y-shaped subunits joined at their Fc ends by a small additional protein called the **J chain**, held together by inter-subunit disulfides. So secreted IgM has ten antigen-binding sites and a molecular weight around 970 kilodaltons — a beast of a molecule. Because it is so big, IgM is largely confined to the bloodstream — it doesn't readily diffuse into tissues. Its main job is early-response, complement-fixing, agglutinating antibody. It is brilliant at activating the **classical complement pathway**, because a single pentameric IgM binding a multivalent antigen can engage the complement component C1q very efficiently. It is also superb at agglutinating particles — clumping bacteria together with all those binding sites. Affinities of individual IgM binding sites are usually modest, because IgM appears before affinity maturation has had time to work, but the avidity from ten sites compensates. Detection of IgM specific for a pathogen in a patient's blood is a clinical clue that the infection is recent — current or very recent — because IgM is the first responder.

**IgG** is the workhorse. The most abundant antibody in serum, roughly 75% of total serum immunoglobulin. Four subclasses in humans — IgG1, IgG2, IgG3, IgG4 — which differ in their Fc properties. IgG1 and IgG3 are strong at activating complement and engaging Fc-gamma receptors on phagocytes and NK cells; IgG2 is weaker; IgG4 is unusual in being a poor effector recruiter and can also undergo something called **Fab-arm exchange**, where two different IgG4 molecules can swap heavy chains in vivo to become functionally monovalent. The Fc of IgG is what binds to **FcRn**, the neonatal Fc receptor, which I want you to remember because it's central to how therapeutic antibodies are dosed. FcRn rescues IgG from lysosomal degradation by recycling it back to the cell surface, giving IgG a serum half-life of about 21 days — much longer than any other isotype, much longer than any small-molecule drug. That long half-life is why IgG-based therapeutics can be dosed every two weeks, every month, sometimes every six months. We will come back to this.

IgG also crosses the placenta — actively, via FcRn on syncytiotrophoblast cells — and that is how a newborn baby acquires maternal antibodies. For the first three to six months of life, while the infant's own immune system is still ramping up, that maternal IgG is essentially the entirety of their humoral immunity. It is also why we vaccinate pregnant women against, for example, pertussis and influenza — to flood the maternal blood with high-titer IgG, some of which will reach the fetus.

IgG mediates three classical effector functions you must know. **Opsonization** — coating a pathogen with IgG so that phagocytes (macrophages, neutrophils) recognize the Fc tails via Fc-gamma receptors and eat the pathogen. The word _opsonin_ comes from the Greek for "to prepare for the table" — the antibody is salt and pepper, making the bacterium edible. **Complement activation** — IgG bound to a surface can trigger the classical complement cascade, leading to lysis of the target (membrane attack complex formation, **CDC**, complement-dependent cytotoxicity) and additional opsonization with complement fragments like C3b. **Antibody-dependent cellular cytotoxicity** — **ADCC** — natural killer cells express FcγRIIIa (CD16), and when an NK cell finds a target cell coated in IgG, it engages multiple Fc tails through its CD16 receptors, gets activated, and releases perforin and granzymes that kill the target. Trastuzumab killing HER2-positive breast cancer cells works in large part through ADCC. Rituximab killing CD20-positive B cells works through ADCC, CDC, and direct signaling. These three — opsonization, CDC, ADCC — are the bread-and-butter Fc effector functions, and most therapeutic IgGs are engineered around tuning them up or down.

**IgA** is the antibody of mucosal immunity. Made in enormous quantities — by mass, more IgA is produced daily in your body than any other isotype — IgA is secreted across mucosal surfaces into the gut lumen, the respiratory tract, the genitourinary tract, and into breast milk, tears, saliva. In serum, IgA is usually monomeric; at mucosal surfaces, it's a **dimer**, two Y-shaped subunits held together by a J chain. Mucosal IgA is transported across epithelial cells via the **polymeric Ig receptor** (pIgR), which carries the dimer from the basolateral surface to the apical surface, then is cleaved, leaving a portion called the **secretory component** attached to the IgA, which protects it from proteolytic degradation by gut enzymes. **Secretory IgA** — that's the molecule sitting in your gut lumen right now, neutralizing bacterial toxins, blocking bacterial adhesion, preventing pathogen translocation across the epithelium. It is largely a **neutralizing** antibody — it doesn't strongly activate complement or recruit phagocytes — and that's appropriate to the mucosal context, where you don't want huge inflammatory responses in the lumen of the gut. Breast-fed infants receive enormous quantities of maternal secretory IgA, which protects their gut from infection during the months their own mucosal immunity is developing.

**IgE** is the antibody of allergy and antiparasite immunity. Present at vanishingly low concentrations in serum — orders of magnitude less than IgG — but enormously potent. IgE binds with extraordinarily high affinity to **FcεRI**, the high-affinity IgE receptor, on mast cells and basophils. When an allergen crosslinks IgE on a mast cell surface, the cell degranulates explosively, releasing histamine, leukotrienes, prostaglandins — that's the immediate hypersensitivity reaction. Hives, anaphylaxis, allergic asthma, hay fever — all IgE-driven. Evolutionarily, IgE almost certainly exists for parasite defense, particularly against helminths, where the eosinophil-mediated, IgE-driven response is a key clearance mechanism. In modern hygienic environments, the system seems to get misdirected onto innocuous environmental antigens — that's the hygiene hypothesis, broadly. Therapeutic implication: **omalizumab** is a monoclonal antibody that binds free IgE and prevents it from engaging FcεRI, and it's used for severe allergic asthma.

**IgD** is the strange one. Co-expressed with IgM on naive B-cell surfaces as a B-cell receptor, but secreted at very low levels. We genuinely don't fully understand what IgD does. There is some evidence it has a role in respiratory mucosal immunity and in basophil activation. For our purposes today, just know it exists as the fifth isotype, and let it be.

\[Pause.\]

So those are the five isotypes. The variable region tells you _what_ the antibody binds. The isotype tells you _what happens_ when it binds — which cells get recruited, where in the body the antibody acts, how long it lasts, whether it activates complement, whether it crosses the placenta. Same specificity, different deployment. When we get to therapeutic antibodies, almost every one is built on an IgG1 or IgG4 backbone, because those give the longest half-life and the most controllable effector function, but the engineering choices around Fc properties are now a huge part of antibody drug development. We'll come back to that in Segment 17.

---

## SEGMENT 8 — B cell biology: from bone marrow to plasma cell

We've been talking about antibodies as if they float around in serum by themselves. They do, of course, but they are made by cells — by **B lymphocytes**, B cells. And the life history of a B cell is what determines what antibodies you end up with. Let me walk you through it.

B cells are born in the **bone marrow**, from a common lymphoid progenitor. As a developing B cell — a pro-B cell, then a pre-B cell, then an immature B cell — it goes through the sequential steps we've already discussed: heavy-chain rearrangement first (with D-to-J joining, then V-to-DJ), then light-chain rearrangement. The cell tests its heavy-chain rearrangement by pairing it with a surrogate light chain — a placeholder made of two proteins called VpreB and lambda5 — to form a **pre-B-cell receptor**. If that pre-BCR signals properly, the cell proliferates and proceeds to light-chain rearrangement. If the heavy-chain rearrangement is non-productive — frameshifted, premature stop, fails to fold — the cell tries the other allele. If both alleles fail, the cell dies. Same logic at the light-chain step: try kappa first, on each allele in turn, then lambda. Productive rearrangement on any of the four light-chain alleles, and the cell becomes an immature B cell expressing IgM as a surface BCR with its newly minted specificity.

Now comes a critical checkpoint: **central tolerance**. Because V(D)J recombination is random, some newly made B cells will inevitably have receptors specific for self-antigens — for your own DNA, your own membrane proteins, whatever. Letting those cells out into the periphery would be a recipe for autoimmunity. So in the bone marrow, immature B cells are screened: if their BCR binds strongly to a self-antigen present in the bone marrow microenvironment, several things can happen. The cell can undergo **receptor editing** — re-activating RAG and trying to rearrange a different light chain that won't have the autoreactive specificity. If that fails, the cell undergoes **clonal deletion** — it dies by apoptosis. Some weakly self-reactive cells become **anergic** — alive but functionally unresponsive. The net effect: the majority of grossly self-reactive B cells are eliminated before they ever leave the bone marrow. This is not perfect — autoimmunity exists — but it's strikingly effective most of the time.

B cells that pass central tolerance leave the bone marrow as **transitional B cells**, traffic to the spleen, mature further, and become **naive mature B cells** — recirculating between blood and secondary lymphoid organs (lymph nodes, spleen, Peyer's patches), surveilling for their cognate antigen. A naive B cell expresses IgM and IgD on its surface — the same VDJ specificity, two isotypes via alternative splicing — and waits.

When a naive B cell encounters its cognate antigen, two things must happen for it to be activated into a full immune response. First, antigen binding to the BCR delivers signal one. Second, it needs help from a CD4+ T helper cell that recognizes a peptide derived from the same antigen, presented by the B cell on MHC class II. That T-cell help — via CD40-ligand engaging CD40 on the B cell, plus cytokines — provides signal two. Together, signal one and signal two activate the B cell, which proliferates and differentiates along one of two paths.

Some activated B cells become **short-lived plasmablasts** — they start secreting low-affinity IgM almost immediately, providing the early wave of antibody in the first few days of infection. These cells don't live long, and they don't undergo class switching or affinity maturation, but they provide rapid coverage.

The rest of the activated B cells migrate into a B-cell follicle in the lymph node and seed a **germinal center**, which we've already discussed — the structure where SHM, affinity maturation, and CSR all happen. Germinal centers persist for weeks. B cells exiting the germinal center differentiate into two final fates.

**Plasma cells** are the antibody factories. A fully differentiated plasma cell is a remarkable specialized creature: it has an enormous rough endoplasmic reticulum, an expanded Golgi, and is essentially a single-purpose biosynthetic engine for cranking out secreted immunoglobulin — tens of thousands of antibody molecules per cell per second. Plasma cells largely lose surface BCR expression — they're not antigen-sampling anymore, they're just secreting. Some plasma cells are short-lived, living a few days in lymphoid tissues. Others — the **long-lived plasma cells** — home to specialized niches in the bone marrow, where they can persist for years to decades, continuously secreting antibody. The reason your antibody titer against measles, decades after vaccination, is still detectable is because of long-lived plasma cells in your bone marrow steadily producing measles-specific IgG.

**Memory B cells** are the other fate. Memory B cells don't secrete much antibody at baseline. They circulate in a resting state, with high-affinity, often class-switched BCR on their surface, waiting. If the same antigen ever reappears, memory B cells respond much faster and more potently than naive B cells — that's the secondary response, and it's why a booster vaccine produces such a rapid, large antibody surge: the memory cells are pre-positioned, pre-tuned, ready.

So that's the cellular pipeline: bone marrow rearrangement, central tolerance, peripheral maturation, antigen encounter with T-cell help, germinal center reaction, then plasma cells and memory cells. Disruption at any point causes disease — block early rearrangement and you get severe combined immunodeficiency; lose central tolerance and you get autoimmunity; lose T-cell help and you get the failed antibody responses seen in advanced HIV; lose memory cells and your second exposure feels just as bad as your first.

\[Pause.\]

---

## SEGMENT 9 — Polyclonal antibodies and the hybridoma revolution

For the first eighty years of antibody science, every antibody used in research or therapy was a **polyclonal** preparation. Let me explain what that means, and then I'll tell you about the breakthrough that changed everything.

If you immunize a rabbit with a protein — say, human serum albumin — the rabbit's immune system mounts a response. Many different B-cell clones get activated, each making an antibody with a different specificity against a different epitope on the albumin. Some recognize one region of the molecule, some another. Different affinities. Different isotypes. After a few weeks, you bleed the rabbit, collect the serum, optionally purify the IgG fraction, and you have **polyclonal antibody** — a heterogeneous mixture of dozens or hundreds of different antibody molecules, all recognizing the same antigen but in different ways. That polyclonal antibody is the reagent you use in your Western blot, your ELISA, your immunohistochemistry. For decades, every commercial antibody catalog was essentially a catalog of polyclonal sera from rabbits, goats, sheep, donkeys, chickens.

Polyclonals have advantages. They're easy to make. They tend to be robust — because they bind multiple epitopes, denaturing one epitope doesn't kill the reagent; other epitopes still bind. They have built-in avidity from multiple simultaneous binding events. Polyclonal antibodies are still used in immunology research and in some therapies — antivenoms are polyclonal, intravenous immunoglobulin (IVIG) is polyclonal pooled human IgG, anti-thymocyte globulin used in transplant immunosuppression is polyclonal.

But polyclonals have crippling limitations for both science and medicine. Every batch is different — when the original donor animal dies, the reagent is gone, and the next animal will produce a different mix. Specificity is impure: there are always some antibodies that cross-react with off-target proteins. Quantification is hard. And for therapeutics, defining the active ingredient is essentially impossible — a polyclonal preparation is by definition a heterogeneous biological extract, not a defined molecular drug.

What everyone wanted was a way to take a single antibody-producing B cell and turn it into an immortal cell line that would produce that one antibody, forever, in unlimited quantity. The problem is that primary B cells don't divide in culture for long. They differentiate into plasma cells, secrete antibody for a few days, and die.

\[Pause.\]

In 1975, in a lab in Cambridge, England — the MRC Laboratory of Molecular Biology, on the same corridor where Crick and Watson had worked — Georges Köhler, a German postdoc, and César Milstein, an Argentine principal investigator, solved this problem. The solution was **hybridoma technology**, and it was a beautiful piece of cell biology.

Here's how it works. You immunize a mouse with your antigen of interest. Wait a few weeks for the immune response to mature. Then you sacrifice the mouse, harvest its spleen, and dissociate it into single cells. The spleen is full of B cells — including, somewhere in there, B cells making the antibody you want. But those B cells will die in culture within a few days.

Separately, you maintain a culture of **myeloma cells** — a B-cell tumor line that has been adapted to grow indefinitely in culture. Myelomas are immortal. But they don't make the antibody you want; they were derived from some unrelated patient's tumor. Crucially, the line used for hybridoma fusion is engineered with a defect — it lacks a functional copy of the enzyme **HGPRT** (hypoxanthine-guanine phosphoribosyltransferase), which means the myeloma cells can't make purines via the salvage pathway. They can still use the de novo pathway, so they grow fine in normal media. But in a special medium called **HAT medium** — hypoxanthine, aminopterin, thymidine — aminopterin blocks the de novo pathway, forcing cells to rely on salvage. HGPRT-deficient myeloma cells die in HAT medium.

Now you mix the immune mouse spleen cells with the HGPRT-deficient myeloma cells and add **polyethylene glycol**, PEG — a chemical that fuses cell membranes. A small fraction of cells will fuse: B cell to B cell (useless), myeloma to myeloma (useless), and a few B cells fused to myeloma cells. Those B cell-myeloma fusions are the **hybridomas** — they get immortality from the myeloma partner and antibody-production capability plus a working HGPRT gene from the B-cell partner.

Plate the fusion mix in HAT medium. Unfused myeloma cells die — no HGPRT. Unfused B cells die naturally over a few days. Only the fused hybridomas survive: they have both immortality and HGPRT. So HAT selection cleans up the mess and leaves you with a forest of hybridoma colonies, each one descended from a single B cell-myeloma fusion event, each one making one antibody.

Now you screen. Take supernatants from each clone, test them against your antigen (typically by ELISA), pick the ones that bind, expand those clones, subclone to ensure you have a single cell-derived line, and you have a **monoclonal antibody** — a single defined antibody molecule, of one specificity, one isotype, one sequence, produced indefinitely in culture from one cell line.

Köhler and Milstein published this in _Nature_ in 1975. The first two paragraphs of the discussion contain the line — and I'm paraphrasing — "such cultures could be valuable for medical and industrial use." That sentence is one of the great understatements in biology. They didn't patent it. The technology was free for the world to use, and within a decade hybridoma-derived monoclonal antibodies were transforming research immunology, diagnostics, and — eventually — therapy. Köhler and Milstein shared the Nobel Prize in 1984.

Why did it change everything? Because for the first time you had a defined molecular reagent. A monoclonal antibody is a defined sequence — you can produce it forever, in unlimited quantity, with batch-to-batch consistency. You can use it to detect one specific protein in a complex mixture. You can use it to neutralize one specific target in a patient. You can engineer it. You can sequence it. It became a tool, in the engineering sense — a piece of standardized biotechnology you could pick up and use.

The first therapeutic monoclonal antibody was approved in 1986 — **muromonab-CD3**, a mouse anti-CD3 antibody used to prevent organ transplant rejection. It worked, but it had a serious problem: it was a mouse protein, and human patients quickly mounted an immune response against it — the **HAMA** response, human anti-mouse antibodies. Repeat dosing didn't work, because the patient's immune system neutralized the drug. The mouse-ness of hybridoma-derived antibodies was a fundamental barrier to chronic therapeutic use. Solving that barrier — making antibodies that look human — is the subject of Segments 10 and 11.

\[Pause. Let it land.\]

Alright. We've done structure, V(D)J, somatic hypermutation, class switching, binding, isotypes, B-cell biology, polyclonals, and hybridomas. That's the foundation. Let's take a break here — the back half is going to be all about engineering, humanization, and therapeutic antibodies, where the field has moved in the last thirty years. Stretch, and I'll see you in a few minutes.

---

\[BREAK — approximately 1 hour elapsed\]

---

## SEGMENT 10 — Phage display and recombinant antibody libraries

When we left off, we had hybridomas — defined monoclonal antibodies, but from mice. Mouse antibodies in human patients trigger immune responses that neutralize the drug. So in the late 1980s, the field was hunting for ways to make antibodies that were either fully human or sufficiently human-ized that they wouldn't provoke that response.

There were two general strategies. One was to take mouse antibodies and engineer them to look more human, which is the humanization story we'll do in Segment 11. The other was to bypass mice entirely and find a way to generate human antibodies directly, from scratch, in a system where you didn't need to immunize anyone. That second path led to **phage display**, and it deserves its own segment because it represented a fundamental conceptual shift in how the field thought about antibody discovery.

The basic idea, in one sentence: instead of immunizing an animal and pulling antibodies from a B-cell pool, build a huge library of antibody-encoding genes inside bacterial viruses, display each antibody on the outside of its corresponding virus, mix the library with your antigen of choice, fish out the viruses that bind, and amplify them. You have, in effect, replaced the immune system with a bacterial culture and a panning protocol. You have made antibody discovery into a piece of molecular cloning.

Here's how it actually works. You start with a library of antibody variable-region genes. You can get these in various ways: amplify V_H and V_L gene segments from human B cells by PCR, or synthesize libraries with synthetic CDR diversity. You assemble them into a format called a **single-chain Fv** — **scFv** — which is a fusion protein consisting of V_H linked to V_L by a flexible polypeptide linker, typically a stretch of glycines and serines. An scFv is just the variable domains, connected, with no constant regions — it's the smallest unit that retains antigen-binding capability, about 25 kilodaltons. You clone the scFv library into a bacteriophage genome, in fusion with one of the phage coat proteins — typically pIII, the minor coat protein at one end of the filamentous M13 phage. When the phage gets packaged in bacteria, it displays the scFv on its surface, fused to pIII.

Now you have a library of, say, 10^9 to 10^11 different phages, each one displaying a different antibody on its outside and carrying the gene for that antibody on its inside. That linkage — the same physical particle carries both the protein and the gene encoding it — is the central trick. It's called **genotype-phenotype coupling**, and it's what makes the whole approach work.

You take that library, you add it to a tube coated with your antigen of choice, you wash away the phages that don't bind, you elute the phages that do bind — typically with a pH shock or competitive elution — and you infect fresh bacteria with the eluted phages to amplify them. Then you do it again. Each round enriches for phages displaying antibodies with higher affinity. After three or four rounds — called **biopanning** — you have a population dominated by binders. You pick individual phage clones, sequence them, express the antibodies, and characterize them.

The beautiful thing about phage display is that it gives you complete control. You can pan against any antigen you can immobilize in a tube — proteins, peptides, sugars, even small molecules. You can pan under non-physiological conditions — high salt, extreme pH, in the presence of competitors. You can do **affinity maturation in vitro** by introducing additional mutations into a starting binder and re-panning under more stringent conditions to enrich for higher-affinity variants. You can mine the natural human B-cell repertoire — make a library from B cells of a human donor and select binders directly. You can build entirely synthetic libraries with designed CDR diversity. None of this requires immunizing an animal. None of it requires a working immune system. And the output is a fully human (if you used human gene segments) antibody sequence with no mouse content whatsoever.

The seminal paper was John McCafferty, Andrew Griffiths, Greg Winter, and David Chiswell in _Nature_ in 1990. Within a few years, multiple companies — Cambridge Antibody Technology, MorphoSys, Dyax — had built businesses around phage-displayed antibody libraries and were generating clinical candidates. **Adalimumab** — Humira — was the first fully human therapeutic monoclonal antibody derived from phage display, approved in 2002 for rheumatoid arthritis. It went on to become the best-selling drug in the world for years, generating well over a hundred billion dollars in cumulative sales. That's the commercial validation of phage display: the highest-grossing drug in pharmaceutical history was discovered with a bacterial virus and a panning protocol.

Greg Winter shared the 2018 Nobel Prize in Chemistry with George Smith — Smith for inventing phage display itself in 1985 as a way to display arbitrary peptides on phages, Winter for adapting it specifically to antibodies and showing how to do directed evolution of binders for therapeutic targets. Frances Arnold shared that Nobel for directed evolution of enzymes, which is a parallel story in a different protein class.

There are now multiple in vitro display platforms — yeast display, ribosome display, mammalian display, mRNA display — each with trade-offs around library size and screening conditions, but the conceptual move is the same: decouple antibody discovery from the immune system, put it into a test tube where you have control over every parameter.

\[Pause.\]

---

## SEGMENT 11 — Humanization and fully human antibodies

The other path to fixing the mouse-antibody problem was to take mouse antibodies generated by hybridomas and engineer them to look human. Let me walk you through how the field iterated, because it's a useful case study in protein engineering.

Generation one was the **chimeric antibody**. You take a useful mouse monoclonal — say, the original mouse anti-CD20 antibody — and you graft its entire variable domains, V_H and V_L, onto human constant regions. So you keep the entire mouse Fab variable part and fuse it to human C_H1, hinge, C_H2, C_H3, and human C_L. The result is roughly 65% human (the constant regions) and 35% mouse (the variable regions). Chimeric antibodies get a generic-name suffix of **-ximab** — _ri-tu-ximab_, _in-fli-ximab_, _ce-tu-ximab_ — that's the etymological tell. They are substantially less immunogenic in humans than fully mouse antibodies, but the mouse variable regions can still elicit human anti-chimeric antibody (HACA) responses, especially with repeated dosing.

Generation two was **humanization**, often credited to Greg Winter and colleagues in the late 1980s. The idea: don't keep the entire mouse variable region. Keep _only_ the mouse CDR loops — the six loops that actually contact antigen — and graft them onto a human variable-region framework. So you take the V_H and V_L sequences of a human antibody, identify their CDRs, surgically replace those CDRs with the mouse CDRs of interest, and you have a variable region that is mostly human (the framework) but retains the binding specificity of the mouse antibody (the CDRs). This is called **CDR grafting**, and humanized antibodies get the suffix **-zumab** — _tras-tu-zumab_, _be-va-cizumab_, _pem-bro-li-zumab_. They are typically about 90-95% human in sequence.

CDR grafting sounds simple but in practice it is fiddly. The CDR loops sit in a specific framework geometry, and not every human framework will hold the mouse CDRs in exactly the right conformation. You often need to retain a few specific mouse framework residues — called **Vernier zone** residues, by analogy with the engineering term — that pack against the CDRs and influence their geometry. Choosing which residues to keep is a computational and experimental optimization, and getting humanization right while preserving affinity can take many rounds of mutagenesis.

Generation three was the **fully human antibody**. Two main routes. The first we just discussed: phage display libraries built from human V-gene segments give you fully human sequences with no animal involvement. The suffix is **-umab** — _ad-a-li-mumab_, _i-pi-li-mumab_, _ni-vo-li-mumab_, _gol-i-mumab_.

The second route is transgenic mice. In the 1990s, two companies — GenPharm with the **HuMAb-Mouse** and Cell Genesys with the **XenoMouse** — engineered mice in which the mouse immunoglobulin loci were inactivated and replaced with the corresponding human loci. So when you immunize these mice, their B cells rearrange human V, D, and J segments, undergo somatic hypermutation in their germinal centers, class-switch through human constant regions, and produce hybridomas making fully human antibodies. You can do all the things you'd do with regular hybridoma technology, but the output is fully human in sequence. Panitumumab (anti-EGFR) and ipilimumab (anti-CTLA-4) both came from XenoMouse; many others from HuMAb. Modern variants like the Velocimmune mouse have refined the system further.

The generic-name suffixes — _-ximab_, _-zumab_, _-umab_ — used to tell you at a glance how humanized a therapeutic antibody was. The naming system has actually been revised by the WHO recently to a new scheme using suffixes like _-tug_ and _-bart_ and others that signal target class rather than origin, but the older names are still everywhere and you should recognize them.

So the historical arc: mouse → chimeric (65% human) → humanized (90-95% human) → fully human (100% human sequence). Each generation reduced immunogenicity, expanded chronic dosing potential, and opened more therapeutic applications.

\[Pause.\]

A practical aside: even fully human antibodies can sometimes elicit immune responses in patients — called **anti-drug antibodies**, ADAs. The sequence being human doesn't guarantee tolerogenicity, because the unique CDR sequences are essentially neoantigens — your immune system has never seen these specific CDR combinations before. Therapeutic antibody developers now do extensive **immunogenicity prediction** — looking for T-cell epitopes embedded in the variable region — and de-immunization engineering to minimize ADA responses. It's an active area of work and a major contributor to drug attrition.

---

## SEGMENT 12 — Therapeutic monoclonal antibodies: three case studies

Alright. We have the technology. Now let me walk you through three specific drugs that illustrate, very differently, how monoclonal antibodies actually work as therapeutics. These three together — rituximab, trastuzumab, infliximab — were approved within about a year of each other in the late 1990s, and together they essentially created the modern therapeutic antibody industry.

**Rituximab — anti-CD20.** Approved in 1997 for B-cell non-Hodgkin lymphoma, then expanded to chronic lymphocytic leukemia, rheumatoid arthritis, ANCA-associated vasculitis, and a long list of other B-cell-mediated diseases. Rituximab is a chimeric IgG1 antibody targeting CD20, a tetraspanning membrane protein expressed on almost all mature B cells — from late pre-B through memory B cells — but not on hematopoietic stem cells, not on plasma cells, and not on any non-B-cell lineages. So if you deplete CD20-positive cells, you wipe out almost the entire mature B-cell compartment but leave the stem cells intact to repopulate, and you spare plasma cells, which maintain residual humoral immunity.

How does it kill the cells? Three mechanisms, all of them Fc-mediated, which is why the IgG1 backbone matters. **ADCC** — NK cells engaging the bound rituximab Fc via FcγRIIIa and killing the B cell. **CDC** — complement activation triggered by surface-bound rituximab. **Direct signaling** — CD20 crosslinking by rituximab can trigger apoptosis-like signaling in the target B cell, though the contribution of this is debated. In lymphoma patients, after a course of rituximab, circulating B cells are essentially undetectable in blood within days, and recovery takes six to nine months. For a B-cell-driven disease, that's the entire point — eliminate the cell population that is doing the damage and let the immune system reset.

Rituximab demonstrated, for the first time, that an antibody could be the entire therapy for a major cancer. Before rituximab, lymphoma treatment was cytotoxic chemotherapy. After rituximab, the standard for many B-cell lymphomas became R-CHOP — rituximab plus the CHOP chemo regimen — and the response rates improved dramatically. It was the first major demonstration that you could think about cancer therapy not as poisoning all dividing cells but as targeting a specific surface marker on the cancer cell. That conceptual shift opened the door for everything that came after.

**Trastuzumab — anti-HER2.** Approved in 1998 for HER2-positive metastatic breast cancer, then for HER2-positive early breast cancer in the adjuvant setting. Trastuzumab is a humanized IgG1 antibody targeting HER2 (also called ERBB2, also called neu), a member of the EGFR family of receptor tyrosine kinases. In about 15-20% of breast cancers, the HER2 gene is amplified, leading to massive overexpression of the HER2 protein on the cell surface — sometimes a million copies per cell. Pre-trastuzumab, HER2-amplified breast cancer was the worst breast cancer subtype, with the most aggressive course and the shortest survival.

Trastuzumab binds the extracellular domain of HER2 and works through multiple mechanisms. It blocks HER2 signaling — both ligand-independent dimerization and downstream pathways like PI3K-AKT. It triggers HER2 internalization and degradation, reducing surface HER2 levels. And it engages Fc-gamma receptors on immune cells, driving ADCC. The relative contribution of these mechanisms is debated — there are arguments for ADCC being the dominant in vivo mechanism in many patients — but the net effect is profound: HER2-positive breast cancer went from the worst-prognosis subtype to one with outcomes approaching, in early-stage disease with trastuzumab-containing therapy, the outcomes of HER2-negative cancer. A complete reversal of prognostic significance, driven by one antibody.

Trastuzumab also established the principle of **biomarker-driven therapy** in oncology. You only give trastuzumab to patients whose tumors are HER2-positive — you have to test, by immunohistochemistry or fluorescence in situ hybridization. That linkage of a companion diagnostic to a targeted therapy became the template for essentially every targeted oncology drug since. We will see this principle again with checkpoint inhibitors, where PD-L1 staining and tumor mutational burden serve as biomarkers.

**Infliximab — anti-TNF.** Approved in 1998 for Crohn's disease, then for rheumatoid arthritis, ankylosing spondylitis, ulcerative colitis, psoriasis, psoriatic arthritis, and many other inflammatory diseases. Infliximab is a chimeric IgG1 antibody targeting tumor necrosis factor alpha, TNF-α, a soluble cytokine that is a central driver of inflammation in many autoimmune diseases. TNF was identified in the 1980s as a key pro-inflammatory mediator, and the hypothesis that blocking TNF would treat rheumatoid arthritis was bold — TNF does many things in the body, and blocking it could have all manner of consequences.

Infliximab works by **neutralization** — it binds soluble TNF and prevents it from engaging TNF receptors on responding cells. It also binds membrane-bound TNF on the surface of activated immune cells, and through Fc-mediated effector functions can deplete those cells in the gut, which is part of why infliximab is effective in Crohn's disease specifically. The result: in many patients, inflammation drops dramatically, joint damage slows, gut mucosa heals. For severe rheumatoid arthritis, the change was transformative — patients who had been on the path to wheelchair-bound disability went into clinical remission.

Infliximab proved that you could treat chronic, complex, multi-organ autoimmune disease by neutralizing a single cytokine. That principle is the foundation of the entire modern autoimmune-disease drug class — anti-TNF agents (adalimumab, etanercept which is actually a receptor-Fc fusion not a true antibody, golimumab, certolizumab), anti-IL-6 (tocilizumab), anti-IL-17 (secukinumab), anti-IL-23 (ustekinumab, guselkumab), and on and on. Each one is targeting a single cytokine or cytokine receptor, neutralizing the signal, breaking the inflammatory loop. And almost all of them are monoclonal antibodies.

These three case studies — depleting target cells via Fc effector functions (rituximab), blocking a receptor while also engaging effector functions (trastuzumab), neutralizing a soluble cytokine (infliximab) — illustrate the three broad therapeutic strategies that monoclonal antibodies use. Almost every antibody drug on the market uses one or some combination of these. Now we are going to turn to a fourth and newer strategy, which is releasing the brakes on the immune system itself.

\[Pause.\]

---

## SEGMENT 13 — Immune checkpoint inhibitors and the cancer immunotherapy revolution

For most of the twentieth century, cancer immunotherapy was a graveyard of failed ideas. The notion that the immune system could be enlisted to kill tumors was attractive — Coley's toxins in the 1890s, BCG in bladder cancer, IL-2 for melanoma — but nothing worked reliably across cancer types. By the 1990s, most oncologists had quietly given up on immunotherapy as a credible strategy. Chemotherapy and targeted small molecules were the future; immunotherapy was a backwater.

Two basic immunologists changed that. Jim Allison in the United States, working on CTLA-4. Tasuku Honjo in Japan, working on PD-1. Both were studying inhibitory receptors on T cells — molecular brakes that, in normal physiology, prevent the immune system from over-responding and damaging self. The insight that turned biology into medicine was the realization that tumors exploit these brakes. By engaging inhibitory receptors on tumor-infiltrating T cells, cancers keep the immune response damped down enough to survive. _Release_ the brake — block the inhibitory receptor with an antibody — and the T cells, many of which were already tumor-reactive but suppressed, regain function and start killing the cancer.

The breakthrough was a complete inversion of the prior strategy. Pre-checkpoint immunotherapy had focused on stepping on the gas — giving cytokines like IL-2 to amp up the immune response. That worked occasionally but caused massive toxicity. Checkpoint blockade focused on releasing the brakes — letting the pre-existing tumor-specific T cells do what they were already trying to do. Different mechanism, profoundly different outcome.

**CTLA-4** — cytotoxic T-lymphocyte antigen 4 — is an inhibitory receptor expressed on T cells after activation. It competes with the costimulatory receptor CD28 for binding to CD80/CD86 on antigen-presenting cells, and CTLA-4 binds those ligands more tightly than CD28 does. So CTLA-4 acts as a dominant brake at the priming stage of T-cell activation. Allison's group showed in mouse models in 1996 that blocking CTLA-4 with an antibody could induce tumor rejection. The clinical antibody **ipilimumab** — a fully human IgG1 from XenoMouse — was approved in 2011 for metastatic melanoma after demonstrating, for the first time, durable survival benefit in a cancer that had previously had essentially no effective therapy.

**PD-1** — programmed death-1 — is an inhibitory receptor expressed on exhausted or chronically activated T cells. It binds two ligands, PD-L1 and PD-L2, which are often expressed on tumor cells and on infiltrating immune cells in the tumor microenvironment. Engagement of PD-1 by PD-L1 dampens T-cell function. So PD-1 acts as a brake at the effector stage, in the tumor itself. Honjo's group cloned PD-1 in 1992 and worked out its inhibitory role over the following decade. Antibodies targeting PD-1 — **pembrolizumab** (humanized IgG4), **nivolumab** (fully human IgG4), **cemiplimab**, **dostarlimab** — and antibodies targeting PD-L1 — **atezolizumab**, **durvalumab**, **avelumab** — have, between them, transformed the treatment of melanoma, lung cancer, kidney cancer, bladder cancer, head and neck cancer, Hodgkin lymphoma, microsatellite-instability-high tumors across many sites, and a steadily growing list of others.

The clinical results are sometimes staggering. In metastatic melanoma, before checkpoint inhibitors, five-year survival was around 5%. With ipilimumab plus nivolumab in front-line metastatic melanoma, five-year survival is now in the range of 50%. That is not an incremental improvement. That is reclassifying a disease.

Allison and Honjo shared the Nobel Prize in Physiology or Medicine in 2018. The citation was for "the discovery of cancer therapy by inhibition of negative immune regulation," which is, frankly, a perfect summary.

A note on isotype engineering, because it matters here. Ipilimumab is IgG1, which has full Fc effector function — it can engage Fc-gamma receptors and trigger ADCC. There's evidence that ipilimumab depletes CTLA-4-high regulatory T cells in the tumor microenvironment via ADCC, which contributes to its mechanism. The PD-1 antibodies, by contrast, are typically engineered on IgG4 backbones, with additional mutations to suppress Fc effector function entirely. The rationale: you do not want to deplete the very T cells you are trying to reinvigorate. So the choice of isotype, and additional Fc engineering, is dictated by mechanism. Same general drug class — checkpoint inhibitors — but two very different Fc strategies.

Of course, releasing the brakes on the immune system has predictable costs. Checkpoint inhibitors cause **immune-related adverse events** — colitis, dermatitis, hepatitis, pneumonitis, thyroiditis, hypophysitis, and rarer but severe events like myocarditis. These are essentially mini-autoimmune diseases triggered by the same brake-release that enables tumor killing. Managing irAEs has become an entire subspecialty of oncology.

\[Pause.\]

---

## SEGMENT 14 — Antibody-drug conjugates: the guided missile

Conventional chemotherapy is brutal because it kills any rapidly dividing cell — cancer cells, yes, but also bone marrow, gut epithelium, hair follicles. The dream, dating back to Paul Ehrlich's "magic bullet" concept in 1900, was to use the targeting specificity of a tumor-binding molecule to deliver a cytotoxic payload directly to cancer cells, sparing the rest. Antibodies are the targeting half of that dream. Cytotoxic small molecules are the payload. Bolt them together with a chemical linker, and you have an **antibody-drug conjugate** — an ADC.

The architecture is conceptually simple. Take an antibody that binds a tumor-associated antigen — ideally an antigen that is heavily expressed on tumor cells and rapidly internalized after antibody binding. Conjugate a number of cytotoxic small-molecule payloads — typically two to eight — to the antibody via chemical linkers. The conjugate is administered intravenously, circulates as an antibody, binds its target on tumor cell surfaces, gets internalized into endosomes and then lysosomes, where the linker is cleaved (or the antibody is digested), releasing free payload inside the tumor cell to do its cytotoxic work. The targeting comes from the antibody. The killing comes from the payload. The antibody concentrates the drug at the tumor.

The execution is fiendishly hard. Three components have to be optimized together.

The **target antigen** has to be highly expressed on tumor cells, low or absent on critical normal tissues, and importantly, must be internalized efficiently after antibody binding — because the payload has to get inside the cell to act. CD30, CD22, CD33, HER2, Trop2, Nectin-4, FRα, and BCMA are some of the validated ADC targets.

The **payload** has to be cytotoxic at very low concentrations, because each antibody can only deliver a handful of payload molecules. So ADC payloads are not standard chemotherapeutics — they are ultra-potent toxins, often a thousand-fold more cytotoxic than conventional cytotoxics. The main classes are tubulin disruptors (auristatins like MMAE, maytansinoids like DM1, DM4), DNA damagers (calicheamicins, duocarmycins, pyrrolobenzodiazepine dimers), and topoisomerase I inhibitors (DXd, the payload in trastuzumab deruxtecan and several other modern ADCs).

The **linker** is the chemistry that holds them together, and it is where most of the engineering subtlety lives. Linkers have to be stable in circulation — if they break in plasma, you release free toxin systemically and lose the targeting advantage — but cleavable inside the target cell. **Cleavable linkers** use chemistries that release payload in the lysosome (cathepsin-cleavable peptide linkers, acid-cleavable hydrazones, disulfides that reduce in the cytosol). **Non-cleavable linkers** rely on complete proteolytic digestion of the antibody, leaving the payload attached to a single linker-conjugated amino acid; the payload has to be active in that form.

A subtle but powerful property: the **bystander effect**. After internalization and payload release, if the payload is cell-permeable, it can leak out of the target cell and kill neighboring cells, including target-negative cells in the same tumor mass. This is useful for tumors with heterogeneous target expression — you don't need every cell to express the target. The cell-permeable payload DXd is unusually good at this, which is part of why trastuzumab deruxtecan works in HER2-low tumors where T-DM1 does not.

A few case studies. **Brentuximab vedotin** (CD30 ADC with MMAE payload) — approved 2011 for Hodgkin lymphoma and CD30-positive lymphomas, the first really successful modern ADC. **Trastuzumab emtansine** (T-DM1, HER2 ADC with DM1 payload) — approved 2013 for HER2-positive breast cancer, demonstrated the principle in solid tumors. **Trastuzumab deruxtecan** (T-DXd, HER2 ADC with topoisomerase I inhibitor DXd, higher drug-to-antibody ratio, strong bystander effect) — approved 2019 and rapidly expanded to HER2-low breast cancer, gastric cancer, lung cancer; widely regarded as a generational advance in ADC engineering.

There are now dozens of ADCs in clinical use or development. The principle scales — every internalizing tumor antigen is a potential ADC target, every potent payload is a potential warhead, every linker chemistry is a potential lever. The ADC field is in something like its third generation now, with major refinements in payload class, drug-to-antibody ratio, linker design, and site-specific conjugation (using engineered cysteines or unnatural amino acids to make homogeneous conjugates rather than the heterogeneous mixtures produced by random lysine conjugation). It is one of the most active areas in oncology drug development.

\[Pause.\]

---

## SEGMENT 15 — Bispecifics and BiTEs: redirecting T cells

A conventional antibody binds one target. Both Fab arms have the same specificity. A **bispecific antibody** is engineered to have two different specificities — one Fab binds target A, the other Fab binds target B. This unlocks therapeutic strategies that no monospecific antibody can achieve, because you can physically bring two different proteins, or two different cells, into close proximity.

The killer application, the one that has driven the entire field, is **T-cell redirection**. T cells have enormous killing power but they only kill cells whose antigens they recognize via their T-cell receptor. If you could artificially trick T cells into recognizing tumor cells regardless of TCR specificity, you could redirect any T cell in the body to kill any tumor cell expressing your target of choice. That's exactly what a T-cell-engaging bispecific does. One arm binds CD3 on T cells. The other arm binds a tumor antigen. When the bispecific brings a T cell and a tumor cell into contact, the CD3 engagement triggers T-cell activation, and the T cell kills the tumor cell. No need for the T cell to recognize a tumor peptide on MHC. No need for prior priming. The bispecific creates a synthetic immune synapse.

The canonical example is **blinatumomab**, approved in 2014 for B-cell acute lymphoblastic leukemia. Blinatumomab is a **BiTE** — bispecific T-cell engager — and structurally it is unusual. It is not a full-length antibody. It is two scFvs joined by a short linker, one scFv recognizing CD3 on T cells and the other recognizing CD19 on B cells. Total molecular weight about 55 kilodaltons, no Fc region. Because there's no Fc, blinatumomab has a very short serum half-life — only a few hours — and has to be given as a continuous intravenous infusion via a portable pump, for weeks at a time. That's logistically painful. But it works: in relapsed/refractory B-ALL, blinatumomab produces durable remissions in a substantial fraction of patients who had no other options.

The BiTE format taught the field that T-cell engagement was viable. The next wave of bispecifics has used full-length IgG-like architectures to give longer half-life and easier dosing, while preserving the T-cell engagement. Examples include **teclistamab** (BCMA × CD3) for multiple myeloma, **mosunetuzumab** and **glofitamab** and **epcoritamab** (CD20 × CD3) for B-cell lymphomas, **tarlatamab** (DLL3 × CD3) for small-cell lung cancer, **tebentafusp** (gp100 × CD3) for uveal melanoma. There are now CD3 bispecifics targeting essentially every major hematologic malignancy antigen, and the field is rapidly expanding into solid tumors, with the central challenge being identification of tumor antigens that are sufficiently tumor-specific to allow safe T-cell redirection without on-target off-tumor toxicity.

Engineering bispecific antibodies is non-trivial. The challenge is producing the molecule cleanly. A full-length IgG has two heavy chains and two light chains; if you mix two different heavy chains and two different light chains in one cell, you get up to ten different mispaired species, only one of which is the desired bispecific. The field has developed elegant solutions — **knobs-into-holes** mutations that force heteromeric heavy-chain pairing; common light-chain strategies; the CrossMab format that swaps domains to enforce correct light-chain pairing; controlled Fab-arm exchange leveraging the natural IgG4 chain-swapping mechanism. Each platform has trade-offs, and most major pharma companies now have a proprietary bispecific format.

Bispecifics aren't limited to T-cell engagement. There are bispecifics that engage two receptors on the same cell to enhance signaling specificity (faricimab for diabetic eye disease binds Ang-2 and VEGF), bispecifics that engage NK cells (NK cell engagers, similar logic to BiTEs), bispecifics that target two cytokines in autoimmune disease, and bispecifics that combine cell targeting with FcRn-mediated half-life extension. The format is general — any time you want to bind two things in concert, a bispecific is a tool.

\[Pause.\]

---

## SEGMENT 16 — Antibody fragments: Fab, scFv, and the camelid nanobody

We have been talking, mostly, about full-length IgG molecules. But a lot of modern antibody engineering uses **fragments** — smaller pieces of the antibody that retain antigen binding but lack the Fc. Let me walk through the menu, because the trade-offs matter.

**Fab fragments** — about 50 kilodaltons, V_L plus C_L paired with V_H plus C_H1, held together by the inter-chain disulfide. Monovalent (one binding site). No Fc, so no Fc effector functions and a very short serum half-life. Used clinically when you want binding without Fc activity — for example, **abciximab**, a Fab fragment targeting platelet GPIIb/IIIa to prevent platelet aggregation during cardiac interventions; or **ranibizumab**, a Fab targeting VEGF for wet age-related macular degeneration, where you want intravitreal penetration and no systemic effects.

**F(ab')_2 fragments** — two Fabs joined at the hinge by disulfide, bivalent, no Fc. Useful when you want two binding sites for avidity but no Fc.

**Single-chain Fv (scFv)** — about 25 kilodaltons, V_H linked directly to V_L by a flexible peptide linker (typically (Gly_4Ser)_3), no constant regions at all. Monovalent. The smallest format that retains intact antigen binding from a conventional antibody. scFvs are the workhorses of phage display libraries, as we discussed, and the targeting module in CAR-T constructs and many bispecifics like blinatumomab.

**Nanobodies** — also called single-domain antibodies or VHH fragments — are a different beast entirely, and they come from a strange evolutionary accident. In the 1980s, a group in Brussels was teaching a student lab on camel blood and noticed something odd in the immunoglobulin profile. Camelids — camels, llamas, alpacas — produce, in addition to conventional four-chain antibodies, an unusual class of antibodies that have **no light chains at all**. The heavy chains pair with each other and bind antigen using only the V_H domain. That single V_H domain — about 15 kilodaltons, less than one-tenth the size of a full IgG — has been adapted to function without a light-chain partner. The hydrophobic surface that normally pairs with V_L is replaced with hydrophilic residues, and a longer CDR3 loop often folds across that face.

When you clone just the V_H domain — the **VHH** — you have a tiny, stable, easy-to-produce single-domain binder that can be expressed in bacteria, has remarkable thermal stability, can access epitopes (like enzyme active sites or viral canyons) that larger antibodies can't reach, and can be readily multimerized or fused to other proteins. Nanobodies have been a research workhorse for two decades and are now entering the clinic. **Caplacizumab**, a nanobody targeting von Willebrand factor for acquired thrombotic thrombocytopenic purpura, was approved in 2018, the first therapeutic nanobody. Others are in development for cancer, infectious disease, neurology.

The advantages of fragments — small size, good tissue penetration, no Fc complications, often easier to manufacture — come with the cost of short half-life (without Fc, kidney filtration removes them within hours), monovalence (unless engineered otherwise), and loss of Fc effector functions. Whether those are bugs or features depends entirely on the application. For an ophthalmology drug injected into the vitreous, short half-life and small size are advantages. For a chronic systemic therapy, you want the long half-life that the Fc provides, and you go with full IgG. Engineering can bridge the gap — Fc fusion, PEGylation, albumin binding — but the fundamental trade-off is between size and persistence.

---

## SEGMENT 17 — Antibody engineering: Fc engineering, glycoengineering, and half-life extension

We have been talking about antibody engineering in pieces throughout the lecture. Let me now consolidate the topic of **Fc engineering** specifically, because it has become one of the most important and subtle dimensions of therapeutic antibody design.

The Fc region does several distinct things, and you can engineer each independently. It binds **FcRn** — neonatal Fc receptor — for half-life. It binds **Fc-gamma receptors** (FcγRI, FcγRIIa, FcγRIIb, FcγRIIIa, FcγRIIIb) on immune cells for ADCC, ADCP (antibody-dependent cellular phagocytosis), and other effector functions. It binds **C1q** for complement activation. Each binding interaction maps to specific residues on the Fc, and structure-guided mutagenesis can tune each interaction up or down.

**Half-life extension via FcRn.** FcRn binds IgG in acidic endosomes (pH around 6) after non-specific pinocytosis, then releases IgG back into the extracellular space at neutral pH. This recycles IgG instead of letting it be degraded in lysosomes. Engineering the Fc-FcRn interaction to be tighter at acidic pH — mutations like **YTE** (M252Y/S254T/T256E) or **LS** (M428L/N434S) — extends serum half-life from the natural ~21 days to 30-90 days. Half-life-extended antibodies like **nirsevimab** (anti-RSV F protein for prophylaxis in infants) leverage this so a single dose lasts an entire RSV season.

**Effector function enhancement.** For ADCC-dependent oncology antibodies, increasing affinity for FcγRIIIa on NK cells boosts killing. This is achieved by either point mutations in the Fc (e.g., S239D/I332E) or by **glycoengineering** — specifically **afucosylation**. The Fc region carries a conserved N-linked glycan at Asn297 on each heavy chain. The structure of that glycan modulates Fc receptor binding. In particular, removing the core fucose residue increases FcγRIIIa binding by 10-100 fold, with corresponding enhancement of ADCC. Cell lines engineered to produce afucosylated antibodies — by knocking out the FUT8 fucosyltransferase, for instance — yield therapeutic antibodies with dramatically enhanced ADCC. **Obinutuzumab**, an afucosylated anti-CD20 antibody approved for chronic lymphocytic leukemia, is one example. **Mogamulizumab**, an afucosylated anti-CCR4 antibody for cutaneous T-cell lymphoma, is another.

**Effector function silencing.** Sometimes you want the opposite — an antibody that binds its target but does not engage Fc receptors, because effector function would cause toxicity or counteract the therapeutic mechanism. Checkpoint inhibitors targeting PD-1, for example, are usually built on IgG4 backbones with additional mutations (S228P to block Fab-arm exchange; sometimes L235E or other variants) precisely so they don't deplete the very T cells they're trying to activate. Other silenced Fc variants — LALA (L234A/L235A), LALA-PG (adds P329G), DANA (D265A/N297A) — knock out Fc receptor binding while preserving FcRn binding for half-life.

So a therapeutic antibody is no longer just a binding domain on a generic chassis. The Fc is a piece of engineering real estate that gets actively designed for each indication. For an oncology depletion antibody, you might go afucosylated IgG1 with ADCC-enhancing mutations. For a checkpoint inhibitor, you go IgG4 with effector silencing. For a long-acting prophylactic, you add YTE for half-life. The same variable region, three different Fc strategies, three different drugs.

Beyond Fc engineering, there's V-region engineering. **Affinity maturation in vitro** via random mutagenesis or focused CDR mutagenesis followed by phage/yeast display. **Stability engineering** to reduce aggregation, which is a major liability for manufacturing. **De-immunization** to remove predicted T-cell epitopes from the variable region. **Specificity engineering** to remove off-target binding. Each of these is now a routine part of antibody drug development — the antibody that enters Phase I clinical trials has typically been through dozens of rounds of engineering on every dimension.

\[Pause.\]

---

## SEGMENT 18 — The frontier: broadly neutralizing antibodies, computational design, and CAR-T

We have come a long way — from horse serum to engineered Fc variants. Let me close with a survey of where the field is going right now, because the pace of development is staggering and the next decade is going to look very different from the last.

**Broadly neutralizing antibodies — bnAbs.** Some viruses — HIV, influenza, hepatitis C, and now SARS-CoV-2 — have such high sequence variability across strains that vaccines and conventional antibodies struggle to provide broad protection. But within infected individuals, a small fraction develop antibodies that recognize conserved structural features common to many or most strains — broadly neutralizing antibodies. For HIV, after years of work, the field has identified dozens of bnAbs targeting conserved sites on the gp120/gp41 spike — the CD4 binding site (antibodies like VRC01, 3BNC117), the V1/V2 apex, the V3 glycan supersite, the membrane-proximal external region, the fusion peptide, the gp120-gp41 interface. These bnAbs typically have heavily mutated variable regions — far beyond what germline encodes — reflecting extreme somatic hypermutation in the donor. For influenza, bnAbs against the conserved hemagglutinin stalk region have been identified. For SARS-CoV-2, the antibodies that retained activity across variants like Omicron tend to target conserved sites on the receptor binding domain or the S2 stalk.

The frontier here is two-fold. As **therapeutics**, bnAbs can be combined in cocktails to suppress HIV or treat severe respiratory virus infection — though the rapid emergence of resistant variants for SARS-CoV-2 made all the early COVID-19 monoclonal antibody therapies clinically obsolete within a year or two, a cautionary tale. As **vaccine templates**, bnAbs guide the design of immunogens intended to elicit similar antibodies through germline-targeting vaccination — engineered antigens that engage rare naive B cells with the right germline configuration to mature into bnAb producers. The mRNA vaccine platform has dramatically accelerated this iterative design.

**Computational antibody design.** For most of antibody engineering history, design has been empirical — make a library, select, sequence, repeat. The promise of fully computational design — sit down at a computer, choose your target, generate an antibody sequence that will bind — was distant for decades. It is no longer distant. Deep learning approaches like AlphaFold for structure prediction, RoseTTAFold and ESM-based protein language models, and generative models like RFdiffusion are now producing computationally designed binders, including antibody-like scaffolds, with measurable affinity right out of the computer. The field is not yet at the point where you can fully replace experimental discovery — affinities from purely computational design are still typically modest, often requiring experimental affinity maturation — but the gap is closing year by year. The next generation of antibody discovery will almost certainly be heavily computational, with experimental selection used to refine and validate computational designs rather than to discover from scratch.

**Multispecific and conditionally activated antibodies.** Beyond bispecifics, trispecific antibodies engaging three different targets simultaneously are entering clinical development. **Probody** formats — antibodies with masked binding domains that are unmasked only by tumor-associated proteases — aim to confine activity to the tumor microenvironment and reduce on-target off-tumor toxicity. **pH-dependent antibodies** that release their target in the acidic endosome and recycle to bind another target are extending the per-molecule potency of antibody therapeutics. The combinatorial space of antibody-format engineering is vast and not yet fully explored.

**CAR-T cells.** This is where the antibody story meets cellular therapy. A **chimeric antigen receptor** — CAR — is a synthetic receptor that combines an antibody-derived scFv as the extracellular antigen-binding domain with intracellular T-cell signaling domains. When a T cell expresses a CAR, it can recognize and kill any cell bearing the cognate antigen, independent of TCR-MHC restriction. Take T cells from a patient, transduce them with a lentiviral vector encoding a CD19-specific CAR, expand them, and infuse them back — those T cells now hunt and kill the patient's CD19-positive B cells, including the leukemia. Four CAR-T products targeting CD19 are FDA-approved for B-cell malignancies (tisagenlecleucel, axicabtagene ciloleucel, brexucabtagene autoleucel, lisocabtagene maraleucel); two BCMA-targeted CAR-Ts are approved for multiple myeloma (idecabtagene vicleucel, ciltacabtagene autoleucel). For relapsed/refractory B-ALL and certain lymphomas, CAR-T has produced complete remissions in patients with otherwise terminal disease. The scFv at the front of every CAR is, in a literal sense, the legacy of all the antibody engineering work we've discussed — Köhler-Milstein hybridomas, phage display, humanization, affinity maturation, all funneled into a single binding domain on a synthetic receptor on an engineered cell.

The next frontier in CAR design includes **allogeneic** CAR-T cells (off-the-shelf instead of patient-specific), **logic-gated** CARs that fire only when multiple antigens are present (to improve tumor specificity), CARs in **NK cells** instead of T cells (potentially safer), and CARs engineered into **macrophages** (CAR-M) for solid-tumor applications. Every one of these takes the antibody binding domain as its specificity module. The antibody has become, in addition to a drug, a programmable specificity component in cellular and gene therapy.

\[Pause. Let it land.\]

So. We started with a Y-shaped molecule and a problem — how to recognize an essentially infinite world of foreign shapes with a finite genome. The answers, in order: a modular protein built of variable and constant domains, with diversity concentrated in six CDR loops at the binding site. A genetic system — V(D)J recombination — that builds those variable regions combinatorially from cassette gene segments, with junctional sloppiness adding orders of magnitude more diversity. A cellular system — the germinal center — that runs Darwinian evolution at high speed to refine affinity and switch effector class. A repertoire of effector functions encoded in the Fc that decides what happens after binding. And in our hands as engineers, a sequence of inventions — hybridomas, humanization, phage display, transgenic mice, ADCs, bispecifics, Fc engineering, checkpoint blockade, CAR-T — that have made the antibody the most versatile molecular platform in modern medicine.

The molecule that arose to defeat pathogens is now the molecule we use to defeat cancer, autoimmune disease, and an expanding list of conditions that nature never trained it for. That's a remarkable arc. Every monoclonal you'll meet in clinic, every reagent in your lab, every assay in the diagnostic suite is the descendant of a single B cell that, somewhere, once met its antigen. Hold onto that picture. It will serve you well.

Thank you. We'll take questions.

---

## APPENDIX — Quick-reference summary (not for reading aloud)

**Structure**

- Y-shaped, ~150 kDa IgG: 2 heavy chains + 2 light chains; held by inter-chain disulfides at hinge (heavy-heavy) and at C_L–C_H1 (light-heavy).
- Each light chain: V_L + C_L (2 Ig domains). Each heavy chain: V_H + C_H1 + C_H2 + C_H3 (4 Ig domains; IgM/IgE have an extra C_H4).
- Two Fab arms (V_L/V_H/C_L/C_H1) + one Fc stem (C_H2/C_H3 dimer) joined by flexible hinge.
- Antigen binding: 6 CDR loops (H1, H2, H3 from V_H; L1, L2, L3 from V_L) at Fab tip; CDR-H3 most variable, dominates contacts.
- Ig fold: ~110 aa beta-sandwich with intra-domain disulfide; one of the most common folds in the proteome.

**Diversity generation**

- **V(D)J recombination** in bone marrow B cells: RAG1/RAG2 cut at RSS sequences (12/23 rule); NHEJ rejoins; combinatorial × junctional (TdT-added N-nucleotides, P-nucleotides, exonuclease nibbling) → ~10^11–10^12 naive repertoire.
- **Somatic hypermutation (SHM)** in germinal center dark zone: AID deaminates C→U in V regions; mutagenic repair → ~10^-3 mut/bp/division; selection in light zone → affinity maturation, K_D from μM → nM/pM.
- **Class-switch recombination (CSR)** in germinal center: AID deaminates switch regions; deletion-joining swaps constant region (IgM → IgG/IgA/IgE) while V region constant; cytokine-directed.

**Binding vocabulary**

- Paratope (antibody surface) binds epitope (antigen surface); linear vs conformational epitopes.
- Affinity = single-site strength, K_D = k_off/k_on (units M). Avidity = total multivalent binding strength (IgG bivalent, secreted IgM pentameric/decavalent).
- Residence time (1/k_off) often more important than K_D for therapeutic effect.

**Isotypes and Fc effector functions**

- **IgM**: pentamer, first response, strongest complement activator, agglutination, recent infection marker.
- **IgG** (4 subclasses): ~75% of serum Ig, ~21-day half-life via FcRn recycling, crosses placenta; mediates opsonization (FcγR), ADCC (FcγRIIIa on NK cells), CDC (C1q). Workhorse for therapeutics.
- **IgA**: mucosal, dimeric secretory form with J chain + secretory component via pIgR; neutralizing, low effector function; in breast milk.
- **IgE**: anti-parasite/allergy; binds FcεRI on mast cells → degranulation on crosslinking; very low serum levels.
- **IgD**: BCR on naive B cells; secreted role poorly understood.

**B-cell life history**

- Bone marrow: pro-B → pre-B (heavy-chain rearrangement + surrogate light chain) → immature B (light-chain rearrangement). Central tolerance: receptor editing → deletion → anergy.
- Periphery: naive B cell (IgM+IgD surface) → antigen + T-cell help (CD40/CD40L + cytokines) → short-lived plasmablast OR germinal center reaction (SHM + CSR + selection) → long-lived plasma cell (bone marrow niche, decades) or memory B cell.

**Reagent evolution**

- **Polyclonal**: serum from immunized animal; heterogeneous, batch-variable; still used for antivenoms, IVIG, ATG.
- **Hybridoma (Köhler & Milstein 1975, Nobel 1984)**: immune mouse spleen B cells × HGPRT-deficient myeloma + PEG fusion + HAT selection → monoclonal, defined, immortal.
- **Phage display (McCafferty/Winter 1990; Smith/Winter Nobel 2018)**: scFv libraries on M13 phage pIII; biopanning against immobilized antigen; fully human if human V-genes used. Yields adalimumab and many others.

**Humanization spectrum (suffix → mouse content)**

- **-omab** = fully mouse (muromonab-CD3); HAMA response.
- **-ximab** = chimeric (~65% human): rituximab, infliximab, cetuximab; mouse V, human C.
- **-zumab** = humanized (~90-95% human): trastuzumab, bevacizumab, pembrolizumab; CDR-grafted mouse loops on human framework.
- **-umab** = fully human (phage display or transgenic mice — HuMAb, XenoMouse): adalimumab, ipilimumab, nivolumab.

**Therapeutic mechanism classes**

- **Cell depletion via Fc**: rituximab (anti-CD20) — ADCC + CDC + signaling; B-cell lymphoma, autoimmunity.
- **Receptor blockade + Fc**: trastuzumab (anti-HER2) — signaling block + internalization + ADCC; HER2+ breast cancer.
- **Cytokine neutralization**: infliximab (anti-TNF) — soluble + membrane TNF; Crohn's, RA, psoriasis.
- **Checkpoint blockade**: ipilimumab (anti-CTLA-4, IgG1, depletes Treg in tumor); pembrolizumab/nivolumab (anti-PD-1, IgG4 silenced); Allison & Honjo Nobel 2018.
- **ADCs (guided missile)**: brentuximab vedotin (CD30-MMAE); T-DM1 (HER2-DM1); T-DXd (HER2-DXd, bystander effect, HER2-low). Linker chemistry, payload class, DAR, internalization efficiency.
- **Bispecifics / T-cell engagers**: blinatumomab (CD19×CD3 BiTE, two scFvs, no Fc, continuous infusion); teclistamab (BCMA×CD3); growing list. Knobs-into-holes, CrossMab, common light chain formats.

**Fragments**

- **Fab** (50 kDa), **F(ab')_2**, **scFv** (25 kDa, V_H–linker–V_L, no constants), **VHH/nanobody** (15 kDa, single camelid V_H domain, exceptional stability) — small, tissue-penetrating, no Fc, short half-life unless engineered. Examples: abciximab (Fab), ranibizumab (Fab), caplacizumab (nanobody).

**Fc engineering**

- **Half-life extension** (FcRn-binding ↑ at pH 6): YTE, LS mutations → 30–90-day half-life.
- **ADCC enhancement**: S239D/I332E mutations; afucosylation (FUT8 KO) → 10–100× FcγRIIIa binding (obinutuzumab, mogamulizumab).
- **Effector silencing**: IgG4 with S228P (block Fab-arm exchange); LALA, LALA-PG, DANA Fc mutations — preserve FcRn (half-life) but remove FcγR/C1q binding (checkpoint inhibitors).

**Frontier**

- **bnAbs** (HIV: CD4bs, V1/V2 apex, V3 glycan, MPER, fusion peptide; influenza HA stalk; SARS-CoV-2 RBD/S2) — heavy SHM; therapeutic and vaccine-design templates.
- **Computational design**: AlphaFold, RoseTTAFold, RFdiffusion, protein language models — generative antibody design narrowing gap to experimental affinities.
- **CAR-T**: scFv targeting domain + intracellular T-cell signaling; CD19 CARs (tisa-cel, axi-cel, brexu-cel, liso-cel) for B-cell malignancies; BCMA CARs (ide-cel, cilta-cel) for myeloma. Next: allogeneic, logic-gated, CAR-NK, CAR-M.

**Two organizing principles**

1. Finite genome → infinite-ish repertoire via three layers of diversity: V(D)J recombination, junctional sloppiness, somatic hypermutation.
2. Variable region decides _what_ binds; Fc/isotype decides _what happens_ — therapeutic antibodies are engineered on both axes independently.
