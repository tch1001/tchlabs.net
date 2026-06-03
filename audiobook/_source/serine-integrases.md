# Serine Integrases: Bxb1, phiC31, and the Unidirectional Recombinases

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool. This lecture is a companion to our Cre-Lox lecture, our CRISPR lectures, our base editing and prime editing lectures, and our AAV and lentivirus vector lectures — we will not re-teach those systems from scratch. We are here to look at the **other** great family of site-specific recombinases, the one that runs in only one direction, and to understand why a unidirectional recombinase is exactly the tool you want when you need to insert a large piece of DNA into a known location in a chromosome and trust that it will stay there.

---

## SEGMENT 1 — The other recombinase family

Alright, let's get started. Good morning, everyone. Today, for the next two hours, we're going to talk about a family of enzymes called **serine integrases** — phage-derived recombinases with names like Bxb1, phiC31, R4, TP901-1, and a growing parade of orthologs. If you've been with us for the Cre-Lox lecture, you already know one site-specific recombinase. Cre, with its loxP sites, is the famous one — the workhorse of conditional mouse genetics, the tool every neuroscientist and cancer biologist knows by name. Cre is a tyrosine recombinase. It cuts and re-ligates DNA between two identical, 34-base-pair sites called loxP, and — this is the key fact — the reaction Cre does is fundamentally **reversible**. If you have loxP sites and Cre in the same place, you get a dynamic equilibrium. Things get cut out; things get put back in. The system oscillates. Most of the time, in practice, we make it look one-directional by ensuring that one product diffuses away or gets diluted, but the chemistry itself is symmetric.

Serine integrases are the **other** family — the unidirectional cousins. They are also site-specific recombinases. They also cut DNA at defined sequences and re-ligate it at defined sequences. But they do it differently, and the difference matters enormously for genome engineering. Let me give you the headline before we go anywhere else.

**Serine integrases work between two different sites — called attB and attP — and they make products called attL and attR that are not substrates for the same enzyme. The reaction runs forward only. To reverse it, you need a completely separate protein called an RDF, a recombination directionality factor, which is usually not provided.**

That's it. That's the whole reason these enzymes exist in our toolkit and the whole reason this lecture is its own thing rather than a footnote to the Cre-Lox lecture. **Unidirectional.** Once recombination happens, it stays happened. The DNA you put into a chromosome with a serine integrase stays in the chromosome. There is no back-reaction worth worrying about.

\[Pause.\]

If you walk out of here in two hours, I want you to be able to do three things. One: explain the conceptual difference between tyrosine recombinases like Cre and serine integrases like Bxb1, including why the asymmetric attB-versus-attP architecture gives you irreversibility while Cre's symmetric loxP-times-two architecture gives you reversibility. Two: sketch the landing-pad workflow — install an attB sequence into a chromosomal site once, with CRISPR or with PASTE, and then dock attP-cargo plasmids in over and over again — and explain why this is the gold-standard approach for industrial cell-line engineering. Three: read a 2022-or-later paper that uses Bxb1 for kilobase-scale gene insertion — whether that's PASTE for therapeutic applications, CHO landing-pad engineering for antibody production, or synthetic-biology genetic circuits — and tell me what's been built and why it works. Those three things. Everything else is decoration.

\[Pause.\]

Now, why does any of this matter? Let me frame the field problem.

If you've been with us through the gene therapy lectures, you know the central tension of large-payload delivery. AAV — adeno-associated virus, the dominant gene therapy vector — has a packaging limit of about 4.7 kilobases. That is small. There are diseases where the gene you want to deliver is bigger than that. Duchenne muscular dystrophy: dystrophin is 11 kilobases of coding sequence. Hemophilia A: factor VIII is over 7 kilobases. Cystic fibrosis: CFTR is 4.4 kilobases of coding sequence, which fits in AAV only barely, with no room for a real promoter or regulatory elements. The list goes on. For these diseases, AAV by itself is too small to do the job. Lentivirus stretches you to about 8 to 10 kilobases, which is bigger, but lentivirus has its own problems — semi-random integration, insertional mutagenesis risk, manufacturing complexity.

What you'd really like is a tool that says: "I'll insert exactly the cargo you specify into exactly the chromosomal location you specify, with kilobase-scale capacity, no off-targets, and a single defined integration event per cell." That is what serine integrases give you. Not by themselves — by themselves they need to know what site to integrate into. But coupled to a way of pre-installing the docking site, they give you almost ideal large-cargo delivery.

The coupling tool used to be CRISPR plus homology-directed repair, or HDR — cut the genome with Cas9, then provide a donor with homology arms and an attB site, and let HDR install the attB into the chromosome. That works, but HDR is inefficient in many cell types. Then in 2022, the David Liu lab combined prime editing with Bxb1 to make a system called **PASTE** — Prime-editing Assisted Site-specific Integration — which lets you install the attB landing site using prime editing instead of HDR, and then dock kilobase cargo on top of it with Bxb1. That combination unlocked a whole new design space for gene therapy.

We're going to walk through all of this. The biology of serine integrases — where they come from, how they work, the attB-attP-attL-attR cycle. The two famous ones, phiC31 and Bxb1, and why Bxb1 won. The landing-pad workflow that has become the industrial standard for CHO antibody production. PASTE. The synthetic-biology angle — using serine integrases as molecular logic gates and biological memory. The frontier — newer integrases, AI-discovered orthologs, controlled reversal with engineered RDFs.

Let's begin.

---

## SEGMENT 2 — A recap of site-specific recombinases: tyrosine versus serine

Let me set the table by going back over what a site-specific recombinase is, because the distinction between the two families is the whole story.

A **site-specific recombinase** is an enzyme that recognizes a particular short DNA sequence and catalyzes recombination between two copies of that sequence — or between two related sequences. Recombination here means cutting the DNA at the recognition sites and re-ligating the cut ends to new partners. The enzyme is both the scissors and the glue, the cut and the stitch. The reaction does not require ATP, because the enzyme conserves the energy of the phosphodiester bond in a covalent enzyme-DNA intermediate during the cut, and reuses that energy in the re-ligation. The whole thing happens in one self-contained chemical step.

There are two great families of site-specific recombinases in biology, named for the amino acid residue in the enzyme's active site that forms the covalent intermediate with DNA. The **tyrosine recombinases** use a tyrosine residue — the hydroxyl group of the tyrosine side chain attacks the DNA phosphate and forms a 3'-phosphotyrosine bond. The **serine recombinases** use a serine residue — the hydroxyl group of the serine attacks the phosphate and forms a 5'-phosphoserine bond. Those are the two great mechanistic clans.

\[Pause.\]

The tyrosine recombinases include Cre — from bacteriophage P1, the star of the Cre-Lox lecture — and Flp, from yeast 2-micron plasmid, which is the runner-up tool of conditional genetics. The tyrosine recombinases also include lambda integrase, the integrase of bacteriophage lambda, which is the granddaddy of all site-specific recombinase research and what taught molecular biologists what site-specific recombination even was, back in the 1970s. Tyrosine recombinases tend to be **bidirectional**. The enzyme reaches an equilibrium between substrate and product, and unless something perturbs that equilibrium — concentration changes, product diffusion, additional factors — the reaction runs both ways.

The serine recombinases include two functional subfamilies. There are the **resolvases and DNA invertases** — small enzymes like Gin, Hin, Tn3 resolvase, gamma-delta resolvase — that handle local recombination events in bacterial transposons and phages. These are well-studied biochemically and gorgeous in their own right but mostly not used as engineering tools, because they require complex accessory factors and supercoiled substrates that don't work in mammalian cells.

And then there are the **serine integrases** — large serine recombinases, sometimes called LSRs — which are integrases from temperate phages. These are the tools we care about today. They have names like Bxb1, phiC31, R4, TP901-1, A118, U153. They are 500 to 600 amino acids long, about twice the size of the small serine resolvases. And — this is the killer feature — they are **strongly unidirectional** without needing supercoiling, without needing accessory factors. You give them DNA with the right sites, and they recombine in the forward direction. They do not recombine in the reverse direction. Period.

\[Pause.\]

Here is the analogy I want you to carry for the rest of this lecture.

**Cre-Lox is a pair of identical revolving doors. The doors look the same from either side; you can push them open going in or going out; the system is symmetric, and you have to engineer asymmetry around the edges if you want one-way traffic. Serine integrases are a pair of differently-shaped docks — say, a square peg socket and a round peg socket — that snap together into a single fused joint, and once snapped, the joint geometry is no longer either a square or a round; it's a new shape that the enzyme can't grab. To unsnap, you'd need a different tool — a key, an unlocker — that nobody is providing. So the joint stays.**

In other words: Cre-Lox's symmetric site architecture is what makes the reaction reversible, because the product of recombination is the same kind of site as the substrate, and the enzyme can re-do the reaction in reverse. Serine integrases' asymmetric site architecture is what makes the reaction unidirectional, because the product is a fundamentally different kind of site that the enzyme cannot productively engage with.

That asymmetry is the central design feature. Spend a moment on it, because everything else flows from it.

Cre-Lox uses **two copies of loxP** — same 34-base-pair sequence, twice — and the two products of recombination are **two copies of loxP again**. Substrate equals product. The enzyme can act on either one with equal chemistry. The forward and reverse reactions are mechanistically symmetric. The thermodynamics is essentially flat.

Serine integrases use **one attB site and one attP site** — two different sequences, with different lengths, different protein-binding properties, different geometries — and the two products are **attL and attR**, which are again two different sequences, distinct from both attB and attP and from each other. Substrate does not equal product. The enzyme is built to grab attB and attP and assemble them into a productive synaptic complex; it is not built to grab attL and attR and undo the reaction. The forward reaction is favored thermodynamically and the reverse reaction is essentially kinetically forbidden, because the enzyme cannot productively engage the products.

This is the central insight. Hold onto it. Everything follows.

---

## SEGMENT 3 — Phages, integration, and the natural life of attB and attP

So where do serine integrases come from in the wild, and why does nature need them? Let me give you the phage biology, because once you see the natural function, the engineering use cases will be obvious.

Temperate bacteriophages — phages that can either kill their host immediately or insert into the host chromosome and lie dormant — face an interesting molecular problem. When a temperate phage infects a bacterium, it has a choice. It can go into **lytic mode**, replicating its genome and bursting out as fresh virions; or it can go into **lysogenic mode**, where it inserts its DNA into the host chromosome and rides along as a passive passenger, called a **prophage**, for many generations of host cell division. The lysogenic decision is reversible — under stress, a prophage can excise out of the chromosome and switch back to lytic mode — but it requires precise, defined insertion and excision events. You can't just randomly stuff phage DNA into the host genome; that would interrupt host genes, kill the host, and lose the cargo. You need to insert at a specific, defined spot — a "safe harbor" location in the host genome — and you need to be able to excise cleanly when the time comes.

This is what serine integrases do, natively, for their phage hosts. The phage genome carries a sequence called **attP** — short for "attachment site, phage." The bacterial chromosome has a sequence called **attB** — "attachment site, bacterial." When the phage decides to go lysogenic, it expresses its integrase. The integrase finds attP on the circular phage genome, finds attB at the safe-harbor location in the bacterial chromosome, brings them together, and catalyzes recombination. The result: the entire circular phage genome is now linearly inserted into the host chromosome, flanked by two new sites called **attL and attR** — attachment sites Left and Right of the inserted prophage. The phage is now a stable passenger.

\[Pause.\]

Notice the topology. You took a circular piece of DNA (the phage) and a linear piece of DNA (the host chromosome), brought together two distinct sites (attP on the phage, attB on the host), and you ended up with the two pieces fused into one continuous piece, with attL on the upstream side of the insertion and attR on the downstream side. The two original sites — attB and attP — are gone. They've been recombined into two new sites — attL and attR — and the enzyme that made attL and attR cannot, by itself, take those products and recombine them back into attB plus attP.

That's the unidirectionality. The integrase alone goes attB-plus-attP-to-attL-plus-attR. To go the other way — attL-plus-attR-to-attB-plus-attP — the phage has to express a second protein, a small accessory factor called the **recombination directionality factor**, or **RDF**, sometimes also called an **excisionase**. The RDF binds to the integrase and changes its specificity — now the integrase-plus-RDF complex grabs attL and attR instead of attB and attP, and the excision reaction proceeds. Without the RDF, the integrase is stuck in the integration direction.

This is beautiful biology. The phage gets a one-way insertion under normal conditions — committed, stable, lysogenic — and a controlled excision when the RDF is expressed in response to stress. The directionality of the entire lysogeny-to-lysis switch is encoded in whether or not one extra small protein is around. The integrase by itself does integration; the integrase plus RDF does excision; nothing happens spontaneously.

\[Pause.\]

For us, as engineers, the punchline is this: **if we use the integrase alone, without the RDF, we get one-shot integration that cannot reverse.** That is exactly the property we want for landing-pad cloning. We provide attB and attP, we provide the integrase, the cargo is inserted at the chromosomal site, and because we never provide the RDF, the insertion is locked in. Permanent. Stable across cell divisions, across selection cycles, across whatever downstream manipulation we want to do. The serine integrase is, by design, a one-shot precision welding tool.

Let me say a little more about what attB and attP actually look like, because the asymmetry is real and the lengths are different.

Different serine integrases have different att site lengths and sequences, but the pattern is conserved across the family. **attB is short** — typically 30 to 50 base pairs. It's a simple bipartite sequence with two half-sites flanking a small central crossover region. The integrase binds to the two half-sites as a dimer; the crossover region is where the DNA is cut and re-joined. attB is short because in the host chromosome, the integrase doesn't need to do anything fancy — it just needs to identify a docking position.

**attP is longer and more complex** — typically 40 to 60 base pairs, sometimes longer, with additional binding motifs that don't exist in attB. The integrase binds attP with higher affinity than attB, and the structural arrangement of integrase on attP is what determines the directionality. The recombination synaptic complex — the four-integrase tetramer that brings attB and attP together for the cutting and re-joining — is geometrically built to be a productive engagement for the attB-attP combination and an unproductive engagement for the attL-attR combination.

After recombination, **attL** consists of the left half of attB fused to the right half of attP, and **attR** consists of the left half of attP fused to the right half of attB. The two products are chimeric — each is half of one parent and half of the other. Neither attL nor attR looks like attB; neither attL nor attR looks like attP. The integrase, sitting on attL or attR, can't form the productive synaptic complex it would need to run the reaction in reverse. The geometry is wrong. Hence the irreversibility.

You don't need to memorize the exact base sequences. What you need to carry is: **two different sites in, two different sites out, and the products are not substrates.** That's the architecture.

---

## SEGMENT 4 — phiC31 — Calos, Heuer, and the first mammalian-cell-active serine integrase

Let me tell you the historical arc of how serine integrases got into mammalian genome engineering, because the story is a good one and it explains why Bxb1 ended up displacing the first-generation tool.

In the late 1990s and early 2000s, the field of mammalian genome engineering was dominated by Cre-Lox and Flp-FRT — the two tyrosine recombinases. Both are excellent for **conditional manipulation** of pre-installed sites: flox a gene, deliver Cre to a specific cell type, watch the gene get deleted. Both are wonderful for excising loxP-flanked or FRT-flanked cassettes. But both have a serious limitation when it comes to **integration** — inserting a piece of foreign DNA into a chromosome at a specific spot. The integration reaction is the reverse of the excision reaction, and because Cre-Lox and Flp-FRT are reversible, the integration step is fighting its own reverse reaction the whole time. You end up with very low net integration efficiencies — most of the cargo gets excised back out about as fast as it gets inserted.

People knew this and wanted a tool that did one-way integration. Bacterial integrases like lambda integrase, the original site-specific recombinase, are unidirectional in their native context — but lambda integrase is a tyrosine recombinase that requires multiple host accessory factors (IHF, FIS, supercoiling) that don't exist in eukaryotic cells. You can't easily port lambda integrase into a mammalian cell because the supporting cast isn't there.

What you wanted was a unidirectional recombinase that did not need any cofactors — that could be ported into a mammalian cell as a single protein and work alone. That's the description of a serine integrase.

\[Pause.\]

Enter Michele Calos, a biochemist at Stanford, and her postdoc Bettina Heuer. In the late 1990s and the early 2000s, Calos and Heuer and collaborators were systematically surveying phage-derived integrases — looking for one that would work in mammalian cells without needing bacterial accessory factors. They focused on **phiC31** — pronounced "phi-C-thirty-one" — a temperate phage that infects *Streptomyces*, the soil bacterium genus that makes most of our antibiotics. The phiC31 integrase had been characterized biochemically; it was known to be a member of the large serine integrase family; it was known to be cofactor-independent.

In 2000 and 2001, Groth, Olivares, Thyagarajan, and Calos published the landmark papers — first in *Proceedings of the National Academy of Sciences*, then in *Molecular and Cellular Biology* — showing that phiC31 integrase, expressed in human cells, would recombine an attB-containing plasmid into a chromosomal attP site. And, in the other direction, it would recombine an attP-containing plasmid into a chromosomal attB site. The reaction was efficient. The reaction was unidirectional. The reaction worked without any *Streptomyces* accessory factors. This was the first demonstration of a working serine integrase in mammalian cells.

It was a big deal. For the first time, you could imagine installing a defined att site into a chromosomal location and then docking large cargo into that site repeatedly, with confidence, with no need for the inefficient back-reaction-fighting that plagued Cre-Lox-based integration. The phiC31 system was immediately taken up by gene therapy researchers, by transgenic mouse builders, by anyone who wanted to insert big payloads into a defined genomic spot.

\[Pause.\]

For a few years, in the early 2000s, phiC31 looked like it was going to be the universal landing-pad tool. The Calos lab and others applied it to gene therapy for muscular dystrophy, for hemophilia, for retinal disease, for skin disease. Wonderful demonstrations of permanent transgene expression after integrase-mediated insertion. Then — and this is where the story takes a sharp turn — a problem emerged that none of the early work had anticipated. We'll get to that problem in Segment 5, and it will explain why phiC31, despite its trailblazing role, is not the integrase you'd choose today for most applications.

But before we get to the problem, let me make sure the phiC31 mechanism is clear in your head, because it's representative of the whole family.

phiC31 integrase is a 605-amino-acid protein. It binds as a dimer to attB, which is about 34 base pairs, and as a dimer to attP, which is about 39 base pairs. When attB-integrase and attP-integrase complexes come together, they form a synaptic tetramer — four integrase molecules holding the two sites together. The catalytic serines in each of the four monomers attack the four DNA phosphates at the crossover region, forming covalent 5'-phosphoserine intermediates and producing four single-stranded cuts arranged as a staggered double-strand break with a 2-base 3' overhang on each side. Then — and this is the famous "subunit rotation" mechanism — half of the synaptic complex rotates 180 degrees relative to the other half, swapping the cut ends so that they re-anneal to new partners. The 5'-phosphoserine bonds are then resolved by re-ligation, releasing the integrase from the DNA and leaving the recombined products, attL and attR, with the cargo cleanly inserted.

That subunit rotation step is what makes serine integrases serine integrases. The whole synaptic complex literally pivots around its central axis to swap the strands. It's one of the most spectacular pieces of conformational choreography in all of enzymology — Martha Stark and others have produced gorgeous crystal structures showing the rotated and unrotated states. You don't need to draw it for any exam, but if you ever see a paper showing the structure of a serine integrase mid-reaction, you're looking at one of the most beautiful molecular machines we know.

\[Pause.\]

So that's how phiC31 works. Now: why did it fall out of favor?

---

## SEGMENT 5 — The pseudo-attP problem — phiC31's cautionary tale

Here's where the phiC31 story turns into a cautionary tale, and where the field had to learn an important lesson about sequence specificity in mammalian genomes.

phiC31's native attP is a specific 39-base-pair sequence — sharp, defined, easily searched for. In the *Streptomyces* host genome, there is one attB site, also sharp and defined. In the engineered mammalian use case, we'd install one attB in a known chromosomal location and dock attP-cargo plasmids there. So far so good. The model is: one attB, one attP, one integration site, perfect precision.

But the human genome is three billion base pairs. And it turns out that within that vast sequence landscape, there are **dozens to hundreds of sequences that look enough like phiC31's native attP to be recognized by the integrase**. These are called **pseudo-attP sites**, sometimes just **pseudo sites**. They are not perfect matches to the canonical 39-base attP — they differ at multiple positions — but they share enough of the structural features that phiC31 integrase can engage them and catalyze recombination, at reduced efficiency, into a delivered attB-containing plasmid.

What this means in practice is: when you transfect a mammalian cell with a phiC31 integrase plasmid and an attB-containing donor plasmid, hoping that the donor will integrate at your designated attB landing pad, you instead see substantial integration at a wide range of off-target chromosomal locations — at all those pseudo-attP sites scattered through the genome. The pioneering Chalberg, Portlock, Olivares, Calos, and others paper in 2006 in the *Journal of Molecular Biology*, plus follow-up work, characterized these pseudo sites systematically. They estimated somewhere between 10 and 100 pseudo-attP sites in the human genome at which phiC31 will integrate detectably. The exact number depends on how you define "detectable," but the order of magnitude is clear and worrying.

\[Pause.\]

For some applications, off-target integration at a handful of sites is acceptable — if you're making a research cell line and you're just trying to get the cargo in *somewhere* and you don't care exactly where, phiC31 plus its pseudo sites is fine. For gene therapy, however, off-target integration at a random subset of unknown genomic locations is **exactly** the kind of thing you don't want. The whole reason you're using a site-specific integrase is to get a single, defined, predictable integration event — to avoid the insertional mutagenesis risk that comes with random integration. If phiC31 is going to drop your cargo into one of fifty different "almost-good-enough" sites in any given cell, you've thrown away the main advantage of using a site-specific tool. You might as well use lentivirus, which at least has been characterized for safety in many trials.

The pseudo-attP problem essentially killed phiC31 as a serious clinical gene therapy candidate. There are still groups using it, and there are engineering efforts to reduce its promiscuity by mutating the integrase to require a closer sequence match — directed-evolution work to make phiC31 more specific. But the field, by around 2010 to 2012, started looking for an alternative — a serine integrase that did the same one-shot integration trick but **without** the pseudo-site problem. An integrase whose native attP sequence happens not to look like any naturally-occurring stretch of mammalian DNA. An integrase you could trust to put cargo exactly where you wanted and nowhere else.

That alternative was Bxb1.

\[Pause.\]

Let me pause on the pseudo-attP story for a moment, because it teaches a general lesson about porting molecular tools across kingdoms of life. phiC31 evolved in *Streptomyces*. Its native attP was tuned to be specific within a bacterial genome of, let's say, 8 megabases — eight million base pairs of fairly low-complexity sequence. Within that genome, the 39-base attP sequence was sharp enough to specify one location. When you port the same enzyme into the human genome — three billion base pairs of complex sequence with all sorts of repeated motifs and partial sequence matches — what looked like a sharp recognition specifier in the bacterial context turns out to be loose enough to catch dozens of off-targets. This is a general phenomenon: tools designed by evolution to be specific in a small genome are often not specific enough for a large one. We saw the same thing in early CRISPR — the spacer-protospacer matching that works fine in a 2-megabase bacterial genome catches enough off-targets in the human genome that you have to engineer high-fidelity variants. Same lesson.

For phiC31, the lesson was: an integrase whose native attP just *happens* to be uncommon in human DNA would be much better than an integrase whose native attP has many close relatives. You couldn't really know which way that would shake out without testing. Bxb1, fortunately, turned out to be on the lucky side of that distribution. Let's meet it.

---

## SEGMENT 6 — Bxb1 — Brown's gift to the field

Bxb1 — written B-x-b-1 — is a serine integrase from a mycobacteriophage. **Mycobacteriophages** are phages that infect mycobacteria — the genus that includes the tuberculosis bacillus, *Mycobacterium tuberculosis*, and the leprosy bacillus, and many harmless soil mycobacteria. Bxb1 specifically was isolated from a soil sample by Graham Hatfull's group at the University of Pittsburgh as part of a long-running undergraduate-driven mycobacteriophage discovery program. There are thousands of mycobacteriophages catalogued today, with whimsical names like Halo, Corndog, Cheetobro, and L5; Bxb1 is one of the better-characterized members, and its integrase turned out to be a gift.

The Bxb1 integrase was characterized biochemically by Pauline Mehbiri, Graham Hatfull, and others through the late 1990s and early 2000s as a member of the large serine integrase family. It was Margaret Brown, Pauline Mehbiri, Graham Hatfull, and their collaborators in 2011 in *Proceedings of the National Academy of Sciences* who showed that Bxb1 integrase works efficiently in mammalian cells — and, crucially, with **far higher specificity** than phiC31. When you survey the human genome for pseudo-attP sites recognized by Bxb1, you find essentially none — or, at most, a small handful at very low efficiency. The native Bxb1 attP and attB sequences happen to be sufficiently uncommon in human DNA that the off-target landscape is essentially empty.

\[Pause.\]

This is, I want to emphasize, a stroke of luck combined with smart selection. Bxb1's native attP is 38 base pairs, similar in length to phiC31's. The two attP sequences are completely different in primary sequence. The reason Bxb1's attP doesn't have abundant pseudo-sites in mammalian DNA is essentially that the specific motif Bxb1 looks for doesn't happen to recur frequently in mammalian sequence. There's no deep biological reason for this; it's a property of the specific 38 bases Bxb1 evolved to recognize. The mycobacteriophage just happened to land on a recognition sequence that, when ported to mammalian cells, turned out to be highly specific.

What this means in practice: Bxb1 can be trusted, in a mammalian cell, to recombine attB-containing donor DNA into an attP landing pad **and essentially nowhere else**. The off-target rate is below the detection limit of most assays. That property — combined with the unidirectionality that comes for free with the serine integrase architecture — makes Bxb1 the workhorse of the field. If you read a paper from 2015 onward that uses a serine integrase for landing-pad cloning, mammalian-cell engineering, or PASTE-based gene insertion, almost certainly the integrase is Bxb1.

Bxb1's mechanism is the standard serine integrase mechanism. The protein is 500 amino acids, smaller than phiC31. Bxb1 dimers bind to attB and attP; the four-monomer synaptic tetramer assembles; subunit rotation swaps the strands; the products are attL and attR; the reaction is unidirectional without an RDF. All standard. The reason Bxb1 won was not a mechanistic innovation — it was simply that its native sequence specificity happens to translate cleanly to the mammalian context.

\[Pause.\]

A few practical Bxb1 facts worth knowing:

The Bxb1 attB sequence is 38 base pairs. The Bxb1 attP sequence is 50 base pairs. (Different groups quote slightly different "minimum functional" lengths depending on what they're measuring — these are the canonical full-length sites.) When attB and attP recombine, the products attL and attR are roughly 44 base pairs each. Those numbers don't need to be memorized but help you size up oligonucleotide orders if you're building a landing pad.

The Bxb1 integrase gene can be delivered as a plasmid, as an mRNA, as a ribonucleoprotein, or — increasingly — as a self-cleaving polyprotein included in the same delivery vehicle as the donor DNA. Different applications use different delivery formats. For prime-editing-coupled work (PASTE), the integrase mRNA is often co-delivered with the prime editor as a single lipid nanoparticle payload.

Bxb1 is **not** efficient at intermolecular integration into circular plasmid DNA in *E. coli* the way it is in mammalian cells. There's a complex story here about how the substrate topology and the presence of competing host nucleases affect efficiency, and a workaround involving in vitro assembly — but for our purposes, the headline is that Bxb1 works extraordinarily well in mammalian and other eukaryotic cells, which is exactly where we want it.

Bxb1's RDF — the protein needed to reverse the reaction — has been identified. It's a small phage-encoded protein called Bxb1 gp47, or Bxb1 RDF. Co-expressing the RDF with the integrase allows engineered excision of integrated cassettes, which is occasionally useful for marker removal but is not commonly built into standard workflows.

That's Bxb1 in a nutshell. Now let's see how it gets used.

---

## SEGMENT 7 — The landing-pad workflow — install once, dock forever

This is the heart of the practical application of serine integrases. Let me walk through the landing-pad concept slowly, because it is the dominant industrial use of these enzymes today and once you see it, you'll see it everywhere.

The basic problem the landing pad solves is **reproducibility of cell-line engineering**. Imagine you're working in a biotech company, and your job is to engineer Chinese hamster ovary (CHO) cells to express a monoclonal antibody. The conventional approach, for decades, has been: deliver the antibody-expression cassette by random integration — transfect a linearized plasmid and let it integrate wherever it lands in the genome — then screen tens of thousands of clones to find a few that happen to have landed in a favorable genomic location with high, stable, sustained expression. The good clones are gold. The bad clones are noise. The screening takes months. The successful clones are unique to that one engineering campaign — if you want to make a different antibody next year, you have to repeat the whole random-integration-plus-screening process from scratch, because the location of the new antibody's integration is unrelated to the location of the old one.

\[Pause.\]

This is wasteful. The good integration sites are the same good integration sites every time — the favorable, transcriptionally-active, stably-expressing chromosomal locations that exist in the CHO genome. What if, instead of rediscovering them every time by random integration plus screening, you found a good site **once**, installed a "landing pad" at that site — a defined docking sequence — and then for every future engineering project, just delivered new cargo to that same defined site?

That is the landing-pad workflow. Here's how it works.

**Step one: Find a good chromosomal site.** This is a one-time investment. You characterize the CHO genome (or whatever cell line you're using), identify chromosomal locations that give strong, stable expression and don't disrupt anything important — sometimes called "safe harbor" sites, with names like AAVS1 in human cells, ROSA26 in mouse cells, or proprietary equivalents in CHO. This characterization takes time but only needs to be done once for a given cell line.

**Step two: Install the landing pad.** Using CRISPR plus HDR — Cas9 to cut at the chosen safe-harbor site, plus a donor template with homology arms flanking an attB sequence (or attP, depending on the design) — install the att site into the chromosome at the chosen location. This is the hard step, because HDR is inefficient and you have to screen for clones that incorporated the landing pad correctly, but again, it's a one-time investment. You make a clone — let's call it the **master cell line** — that carries the attB landing pad at the safe-harbor site, and you bank it. Frozen vials. Validated. Sequenced. Documented. This is your foundation cell line, and every future engineering project starts from these vials.

**Step three: Dock cargo via Bxb1.** Now, for any future engineering project — any new antibody, any new protein product, any new cassette you want to express — you simply transfect the master cell line with two things: the Bxb1 integrase (as a plasmid or mRNA) and a donor plasmid carrying your cargo flanked by attP sites that match the attB landing pad. The Bxb1 integrase recombines the attP-cargo into the attB landing pad, depositing your cargo at the exact same chromosomal location every time. Select for clones that took up the integration (using a selection marker on the cargo), and within a few weeks you have a stable, high-expressing, characterized cell line — without any random integration, without any clone screening, without any campaign-specific search for the good integration site.

\[Pause.\]

The savings are enormous. What used to be a six-month screen of tens of thousands of clones becomes a two-week transfection-and-selection of dozens of clones, all of which have the cargo in the same predictable, characterized location. The CHO cell line engineering industry — billions of dollars a year of monoclonal antibody production — has largely transitioned to landing-pad-based workflows, with Bxb1 or related serine integrases as the docking enzyme. Companies like Lonza, Wuxi Biologics, Catalent, and others offer "platform" CHO cell lines built around proprietary landing-pad systems.

This is the analogy I want you to hold for the workflow. **A random-integration cell line is like throwing darts at a board to find the bullseye, and then having to throw all over again for every new dart. A landing-pad cell line is like nailing a piece of Velcro to the bullseye once, and then every future dart just snaps onto the Velcro automatically.**

Or, in slightly different language: **the landing pad is a one-time investment that pays an industrial dividend on every subsequent engineering project. You're amortizing the cost of finding-and-validating a good chromosomal site across every product you'll ever make at that site.**

\[Pause.\]

A few more details about landing-pad design that you'll see in papers:

**Single-site landing pads** have one attB at the chromosomal site, and the cargo plasmid has one attP. After integration, the entire cargo plasmid backbone — including the bacterial origin of replication and the selection marker — ends up in the genome, flanked by attL and attR. This is simple but somewhat wasteful: you've installed a bunch of irrelevant bacterial DNA into your mammalian chromosome.

**Cassette-exchange landing pads (RMCE — recombinase-mediated cassette exchange)** are smarter. The chromosomal landing pad has two different att sites — say attB and attP — flanking a placeholder cassette (often a fluorescent reporter or a counter-selectable marker). The cargo plasmid has the complementary sites — attP and attB — flanking the payload. When Bxb1 acts, it exchanges the placeholder cassette for the payload cassette, leaving the backbone of the cargo plasmid behind. The result: clean integration of just the payload, with the bacterial backbone never entering the genome. We'll have a whole segment on RMCE later.

**Inducible landing pads** add a regulatory element — a tetracycline-responsive promoter, for example — so that the cargo's expression can be turned on and off after integration. This is useful for studying toxic gene products or for tightly regulating therapeutic expression.

**Multiplexed landing pads** install several different att sites (recognized by different orthogonal serine integrases — say Bxb1's site at one location and phiC31's at another) so that multiple cargo cassettes can be docked independently at multiple locations in the same cell. This is powerful for building complex synthetic-biology circuits where different parts need to live at different chromosomal addresses.

That's the landing-pad workflow. It is the dominant practical use of serine integrases today, and it's the foundation on which PASTE is built — which is the next segment.

---

## SEGMENT 8 — PASTE — the Liu lab marriage of prime editing and Bxb1

Now we get to one of the most elegant pieces of integrative thinking in the recent CRISPR-era engineering literature. The system is called **PASTE** — **P**rime-editing **A**ssisted **S**ite-specific Integration with **E**xchange — published by Eric Anzalone, Andrew Anzalone, David Liu and collaborators in late 2022 in *Nature Biotechnology*. (David Liu is the same lab that gave you base editing and prime editing, both of which we have covered in their own lectures.)

PASTE answers a problem that the landing-pad workflow only partially solved. The landing-pad workflow gives you fantastic reproducibility **after** you've installed the landing pad, but installing the landing pad in the first place requires either embryonic stem cell gene targeting (slow, laborious, mostly only used in mice) or CRISPR + HDR (inefficient in most cell types, especially primary and post-mitotic cells like neurons, hepatocytes, muscle fibers). HDR works passably in dividing cell lines but really doesn't work well in differentiated cells in vivo. So the landing-pad approach has historically been a cell-culture and cell-line tool, not a tool for in vivo gene therapy in adult tissues.

PASTE's insight is: **use prime editing, not HDR, to install the attB landing pad.** Prime editing — which we covered in detail in its own lecture — is a CRISPR-derived tool that can install short defined sequences (up to about 50 base pairs) into a chromosomal location with high precision, without requiring HDR, and crucially with reasonable efficiency in non-dividing cells. The Bxb1 attB site is only 38 base pairs. Prime editing can install it. So the PASTE strategy is:

**Step one:** Use prime editing to install a 38-base Bxb1 attB sequence at the desired chromosomal location. Prime editing works in many cell types where HDR doesn't, including primary hepatocytes, primary neurons, and many other clinically-relevant differentiated cells.

**Step two:** Deliver Bxb1 integrase and an attP-flanked cargo plasmid (or AAV, or whatever delivery vehicle) to the same cells. Bxb1 docks the cargo at the newly-installed attB.

**Net result:** A kilobase-scale cargo (the Bxb1 reaction has no realistic upper size limit — payloads of 10, 20, 30 kilobases have been demonstrated) is now stably and precisely integrated at the chromosomal location specified by the prime editor's guide RNA. No HDR. No random integration. No double-strand break of the chromosome. The entire process is achievable in differentiated, non-dividing cells in vivo.

\[Pause.\]

Let me put this in perspective. AAV — the dominant gene therapy vector — has a payload limit of about 4.7 kilobases. That limit excludes therapeutic genes like dystrophin (11 kb), full-length factor VIII (7 kb), full-length ABCA4 (6.8 kb), and many others. The conventional workarounds — dual-AAV split-intein systems, minigene cassettes, oversized AAV — are all unsatisfying compromises. PASTE offers, for the first time, a route to integrating cargo of essentially **arbitrary size** at a precise chromosomal location in differentiated tissues. The delivery mechanism (AAV, lipid nanoparticles, electroporation) still has to physically transport the components into the cell, but the integrated cargo size is not capped by the packaging limits of any one vector — it's capped by what you can deliver as a separate piece of DNA, which can be quite large.

The PASTE paper demonstrated insertion of payloads up to 36 kilobases into multiple genomic loci in multiple cell types, including primary human hepatocytes. They showed therapeutic-relevant insertions for diseases like phenylketonuria, where a full-length copy of the PAH gene (plus regulatory elements) was installed at a safe-harbor location. The efficiencies are not perfect — typical PASTE rates run in the range of a few percent to ~30% of cells receiving a complete integration, depending on cell type and locus — but they are competitive with other in vivo gene therapy delivery strategies and miles ahead of HDR-based integration.

\[Pause.\]

Here is the analogy I want you to carry for PASTE.

**Prime editing installs the landing site with single-nucleotide precision — like screwing a metal anchor into exactly the right spot in a wall. Bxb1 then docks the cargo at the anchor — like clipping a heavy load onto the anchor. Together, they let you hang a kilobase-scale payload at any specified address in the genome, in differentiated cells, in vivo.**

PASTE is being pursued commercially by a company called Prime Medicine, the David Liu lab spinout, and there are pre-clinical and early-clinical programs for various inherited diseases. There are also academic competitors and adaptations — variants called PASTE-on-AAV, PASTE-LNP, twin-PE-PASTE — that further refine the delivery and the editing efficiency. The general principle is now established and is one of the most exciting design patterns in the entire genome-engineering field.

A subtle but important point: PASTE separates the *targeting* problem from the *integration* problem. The targeting problem — getting to the right chromosomal location — is solved by prime editing's guide RNA, which can be programmed to virtually any sequence in the genome. The integration problem — actually depositing the cargo — is solved by Bxb1's well-characterized, unidirectional, high-specificity recombination. By cleanly separating these two functions and using the best tool for each, the Liu lab built something better than either prime editing alone (which can't install kilobase cargo) or Bxb1 alone (which needs an attB to already be present somewhere) could do.

This is, in my opinion, one of the cleanest examples of integrative engineering in modern molecular biology. Hold onto it.

---

## SEGMENT 9 — Cargo capacity and the AAV ceiling

Let me dwell for a minute on cargo capacity, because it's central to why serine integrases matter for therapy and not just for synthetic biology.

The packaging limits of the major gene therapy delivery vehicles are well-characterized and they shape the entire therapy design landscape:

**AAV — adeno-associated virus.** Payload limit: approximately 4.7 kilobases of single-stranded DNA between the inverted terminal repeats. This is the workhorse of in vivo gene therapy — used in approved products for spinal muscular atrophy (Zolgensma, an AAV9 carrying SMN1), retinal disease (Luxturna, an AAV2 carrying RPE65), hemophilia B (Hemgenix, AAV5 carrying factor IX), and others. But 4.7 kb is small. Many therapeutic genes don't fit.

**Lentivirus.** Payload limit: about 8 to 10 kilobases. Bigger than AAV, but lentivirus integrates semi-randomly into the genome — which is fine for ex vivo applications like CAR-T and CRISPR-modified cells, where you can characterize the integration profile of the patient's modified cells, but is less ideal for in vivo gene therapy where you can't easily monitor where the integrations land.

**Adenovirus.** Payload limit: about 35 kilobases for the high-capacity "gutless" version. Big payloads possible, but adenovirus is highly immunogenic and is used mostly for vaccines and short-term applications, not for permanent gene replacement.

\[Pause.\]

Now consider what serine integrases enable, in combination with these vectors.

A **Bxb1-plus-landing-pad** strategy lets you deliver your cargo via any vehicle that can carry the cargo plus the integrase — and the cargo size is limited only by the delivery vehicle, not by the integration mechanism. If you can squeeze a 20-kilobase cargo into a delivery system (and there are systems that can — lentivirus stretches that far, adenovirus easily, lipid nanoparticles increasingly), you can integrate it into a defined chromosomal location with Bxb1.

A **PASTE** strategy lets you deliver in two parts — a small prime-editor component that installs the landing pad, and a larger cargo delivery that contains the actual therapeutic gene plus Bxb1 mRNA. The two-part delivery can be staged in time (give the prime editor first, then the cargo a few days later) or co-delivered. Either way, the cargo size is not capped by AAV.

This is genuinely transformative for the design of gene therapies. Consider Duchenne muscular dystrophy. The dystrophin gene is 11 kilobases of coding sequence. AAV can't carry it. The current AAV-based DMD strategies use "micro-dystrophin" — a heavily truncated version, only a few kilobases, that retains some of dystrophin's function but is fundamentally a compromise. Patients getting micro-dystrophin therapy get partial restoration of dystrophin function — better than nothing, but not full rescue. With a PASTE-style strategy, you could install the full 11-kilobase dystrophin coding sequence with appropriate regulatory elements at a chromosomal landing pad in muscle stem cells, and the patient would express genuine, full-length dystrophin. The clinical implications are significant.

\[Pause.\]

Or consider phenylketonuria (PKU), the inherited metabolic disorder caused by loss-of-function mutations in PAH, the phenylalanine hydroxylase gene. PAH is small enough to fit in AAV, but the regulatory elements that give appropriate tissue-specific and physiologically-regulated expression don't fit alongside it. With PASTE, you can install PAH plus its native regulatory landscape at a chromosomal location, and get genuine physiological expression rather than the dysregulated, constitutive overexpression that conventional AAV-based gene therapy delivers.

Or consider cystic fibrosis. The CFTR gene is 4.4 kilobases of coding sequence — fits in AAV only barely, with no room for a real promoter. CF gene therapy with AAV has been technically frustrating for decades partly because of this packaging constraint. PASTE could deliver CFTR with appropriate regulatory elements at a safe-harbor location.

These therapeutic applications are speculative for now — most of them are in pre-clinical development or earlier — but the design space they open is real and important.

There's a parallel argument from the cell engineering side. Industrial CHO antibody production cells often have multiple integrated copies of the antibody gene, plus a glutamine synthetase selection cassette, plus regulatory elements, plus various other modifications. The total integrated cargo can be 20 or 30 kilobases. Random integration of such a large piece is messy. Landing-pad integration with Bxb1 deposits the whole thing cleanly at one defined location.

The cargo capacity advantage is one of the two great gifts of serine integrases — alongside the unidirectionality. Hold both.

---

\[BREAK\]

---

## SEGMENT 10 — Bxb1 plus AAV for gene therapy

Let me spend a segment on the specific design pattern of **Bxb1 plus AAV** for gene therapy, because it's an active area of clinical development and the engineering tradeoffs are interesting.

The basic challenge: AAV can deliver components efficiently to many in vivo tissues — liver, eye, muscle, central nervous system — and is the dominant in vivo vector. But AAV's 4.7-kilobase payload limit is the bottleneck. Bxb1 can integrate large cargo at a defined site, but only if (a) the cargo is somehow delivered into the cell, and (b) a landing pad attB sequence is somehow installed at the chosen chromosomal location.

The clever solution: **split the work across multiple AAV particles or other vehicles**. Use one AAV (or a lipid nanoparticle) to deliver the prime editor that installs the attB. Use a second AAV (or LNP) to deliver Bxb1 integrase mRNA. Use a third AAV (or, more commonly, a non-viral delivery) to deliver the therapeutic cargo flanked by attP sites. Each individual component fits in AAV; the combined system, working sequentially in the same cell, accomplishes the large-cargo integration that no single AAV could do.

\[Pause.\]

There are several flavors of this approach in development:

**Two-AAV PASTE.** One AAV carries the prime editor (pegRNA + nickase-RT fusion) and the Bxb1 integrase. The other AAV carries the cargo flanked by attP sites. Both are co-injected; the prime editor installs the attB; the integrase docks the cargo. Demonstrated in mouse models of various diseases.

**LNP-PASTE.** Lipid nanoparticles (the COVID-vaccine technology) deliver the prime editor as mRNA plus the pegRNA. A separate dose, or the same dose, delivers Bxb1 mRNA. The cargo is delivered as a separate plasmid or DNA nanostructure. LNP delivery has the advantage that it doesn't trigger anti-AAV immune responses that limit re-dosing, and it allows much larger pegRNA and mRNA payloads than AAV.

**Hybrid AAV-plus-naked-DNA.** An AAV delivers the prime editor and integrase; the cargo is delivered as naked DNA, an electroporated plasmid, or another non-viral form. This is more applicable to ex vivo modification of cells, where you have direct access for electroporation.

**Self-circularizing AAV cargo.** The AAV-delivered cargo is designed to circularize after delivery, providing the topology that Bxb1 prefers as a substrate. There are clever molecular tricks involving intramolecular self-ligation to convert the linear AAV genome into a circle that Bxb1 can grab.

Each of these has tradeoffs in efficiency, scalability, and regulatory complexity. The field is in active development and no single approach has dominated yet.

\[Pause.\]

There's a related design pattern worth flagging: **"Twin-PE" or "PEDAR" approaches** that use prime editing to install **two** att sites (an attB upstream and an attB downstream of a region you want to replace), and then use Bxb1 plus attP-flanked cargo to do a cassette exchange — replacing the region between the two attBs with the cargo. This is more sophisticated than single-attB-plus-integration but allows clean deletion of a problematic region (say, an exon containing a dominant-negative mutation) and replacement with a healthy version. The combination of prime editing's flexibility for site installation and Bxb1's clean recombination chemistry gives you a much richer set of possible edits than either tool alone.

This whole design space — prime editing as the targeting tool, serine integrases as the integration tool, AAV and LNPs as the delivery tools — is one of the most active areas of gene therapy R&D today. Several companies, including Prime Medicine, Beam Therapeutics, and others, have programs in this space.

The big remaining bottlenecks are delivery efficiency (getting all the components into enough cells), expression of all the components in the right ratio (you need the prime editor to act first, then the integrase), and the rate of complete integration (currently in the few-percent range for in vivo work, which is enough for some diseases but not for others). All of these are active engineering targets.

---

## SEGMENT 11 — Industrial CHO cell line engineering for antibody production

Let me pivot to the industrial application that has, frankly, been the dominant economic use of serine integrases: **monoclonal antibody manufacturing in CHO cells**.

Chinese hamster ovary cells — CHO cells — are the standard host cells for industrial production of recombinant therapeutic proteins. The global biopharmaceutical industry makes hundreds of billions of dollars a year of monoclonal antibodies (Humira, Keytruda, Herceptin, Rituxan, dozens of others), and the overwhelming majority of those products are made by engineered CHO cells in bioreactors. The economics of antibody manufacturing depend critically on the **titer** — how many grams of antibody you can produce per liter of cell culture per day. Higher titers mean cheaper drugs. Higher titers also mean smaller bioreactors for the same output, faster scale-up, lower capital costs.

For decades, the workflow for making a high-titer CHO cell line went like this: design the antibody-expression plasmid; transfect into CHO cells; rely on random integration of the plasmid into the CHO genome; select for cells that took up the plasmid (using a drug-resistance marker); amplify the integrated copies using methotrexate selection of an integrated dihydrofolate reductase gene (gene amplification by selection); screen hundreds to thousands of resulting clones for the rare ones with high, stable expression. The whole process took six to twelve months per antibody, was unpredictable in outcome (you might or might not find a great clone), and had to be repeated from scratch for every new antibody.

\[Pause.\]

The landing-pad approach has been transformative. The current state-of-the-art workflow at most major biopharmaceutical companies looks like this:

**One-time foundation work:** Engineer a CHO master cell line carrying a Bxb1 attP landing pad at a well-characterized, high-expressing chromosomal location. (Different companies use different exact sites — some use proprietary CHO safe-harbor sites identified by genome-scale screens, others use orthologs of mammalian sites like AAVS1.) Validate the master cell line for growth, stability, titer potential. Bank vials. This is your platform.

**Per-product workflow:** For each new antibody, design the antibody-expression cassette flanked by Bxb1 attB sites. Transfect the master cell line with this cassette plus Bxb1 integrase mRNA. Select for integration. Within four to six weeks, you have stable, high-expressing CHO cell lines producing the new antibody — at predictable titers similar to other antibodies expressed at the same landing-pad site, with no need to screen thousands of clones, with no variability between projects.

The savings are roughly: six-to-twelve months becomes one-to-two months. Thousands of clones screened becomes dozens. Antibody titer becomes predictable rather than a gamble. The capital required to set up a new manufacturing process drops substantially.

\[Pause.\]

This is, in pure economic terms, probably the most valuable use of serine integrases in human civilization right now. The fact that monoclonal antibody manufacturing is faster, cheaper, and more predictable today than it was fifteen years ago is in significant part due to the landing-pad workflow built on Bxb1 (and to a lesser extent on other serine integrases). When you take a dose of a recent monoclonal antibody drug — Keytruda for cancer, Skyrizi for psoriasis, Dupixent for atopic dermatitis — there's a reasonable chance that the CHO cells in the bioreactor that made your drug had a Bxb1-integrated cassette at a defined landing pad in their genome.

A few more practical CHO-engineering details worth knowing:

**Multiple integration events per cell:** Some advanced systems install multiple landing pads at multiple safe-harbor sites and allow multiple copies of the antibody cassette to be integrated, with different orthogonal serine integrases handling each site. This boosts titer beyond what a single-copy integration can achieve.

**Bicistronic expression:** Monoclonal antibodies have two chains — heavy and light — that need to be expressed in balanced ratios. Landing-pad cassettes typically encode both chains, often separated by an IRES or a 2A self-cleaving peptide, so that one integration event produces both chains in correct stoichiometry.

**Stability over fermentation:** Because the integration is at a defined, well-characterized site, the expression is stable over the many cell generations of a 14-day fed-batch fermentation. Random-integration clones often show "production rundown" — declining titer over the course of a run — that landing-pad clones don't.

This industrial application is, I'll say again, the largest single use of serine integrases by economic value. It rarely gets the attention that gene therapy gets, but it touches every patient on a modern biologic drug.

---

## SEGMENT 12 — Agricultural biotech applications

Let me briefly cover the agricultural biotech side, because serine integrases are increasingly used there too, and the use cases illustrate some different design considerations.

In plant biotechnology, the conventional way of installing a transgene has been Agrobacterium-mediated transformation — using the natural gene-transfer machinery of *Agrobacterium tumefaciens*, which evolved to transfer DNA into plant cells, as a delivery vehicle for engineered T-DNA cassettes. Agrobacterium delivers transgenes efficiently but integrates them more or less randomly in the plant genome. As in mammalian cell engineering, random integration produces variable expression — some integration sites give high stable expression, others give silenced or unstable expression — and screening for good integration events is laborious.

The landing-pad approach is increasingly used in plant systems too. Install an attB site at a characterized, well-expressing chromosomal location in the crop genome (rice, maize, soybean, wheat) — using CRISPR + HDR or another precise editing approach — and then dock new agronomic traits in via Bxb1 or another serine integrase. The benefits are the same as in CHO cells: reproducibility across engineering campaigns, predictable expression, faster product development cycles.

\[Pause.\]

There are some plant-specific wrinkles:

**Transgene stacking.** Modern transgenic crops often need to carry multiple traits — herbicide tolerance, insect resistance, drought tolerance, nutrient enhancement, all in one crop. Conventional stacking by sequential transformation and crossing is slow and produces unpredictable interactions between integration sites. Landing-pad approaches with multiple orthogonal serine integrases (Bxb1 at one site, phiC31 at another, R4 at a third) allow clean, predictable, sequential addition of traits at known locations. This is sometimes called "trait stacking" or "molecular stacking" and is a major area of crop biotechnology R&D.

**Marker removal.** Crop transgenes typically include selection markers — antibiotic resistance or herbicide resistance — that are needed during the engineering process but are undesirable in the commercial product. Serine integrases with RDFs can be used to excise the marker after the trait integration is complete, leaving a clean, marker-free transgenic line. (This is similar to how Cre-Lox is used for marker removal in animal genetics, but with serine integrases the excision can be triggered independently from the integration, since the two reactions require different protein factors.)

**Regulatory and public acceptance.** Plant biotech has unique regulatory and public-perception considerations. Site-specific, predictable integration with no off-targets and clean marker removal is much easier to characterize for regulatory submission than random integration with multiple unknown insertion events. Several major agbiotech companies — Corteva, Bayer Crop Science, Syngenta — have invested heavily in serine-integrase-based engineering platforms for this reason.

Serine integrases have also been used in algae biotechnology, in fungal engineering for industrial enzyme production, and in various microbial-cell-factory applications. The general principle — install a landing pad once, dock cargo repeatedly with high predictability — translates across kingdoms of life.

\[Pause.\]

The agricultural use case isn't as glamorous as gene therapy, and it isn't as economically dominant as monoclonal antibody manufacturing, but it touches global food production and is a quietly significant area of integrase deployment. If you eat genetically modified crops in the next decade — and most people do — there's an increasing chance that the relevant traits were installed via landing-pad-and-serine-integrase workflows rather than older random-integration approaches.

---

## SEGMENT 13 — Genetic memory and logic — biological permanent storage

Let me shift gears now and talk about a completely different use of serine integrases — one that's less about installing genes for protein production and more about using the recombination reaction itself as a **bit of computational state** in a synthetic-biology circuit.

The basic insight is this. A serine integrase reaction takes DNA in one state — attB plus attP, separately — and converts it irreversibly to a different state — attL plus attR, fused. The two states are distinguishable by sequencing. The conversion is one-way. **That is exactly the operational definition of a memory bit.** The unrecombined state is, say, "zero." The recombined state is "one." Once you flip a bit from zero to one, it stays flipped. Read it out at any time later by amplifying the locus and sequencing.

You can do more than one bit. Use Bxb1 at one locus and phiC31 at another and R4 at a third — each with its own orthogonal att sites — and each integrase flips its own bit independently. Three integrases, three bits, eight possible states. Sequence the cell's DNA, read out the state, know the history.

\[Pause.\]

This is the basic idea behind a body of synthetic-biology work that goes back to roughly 2013, with foundational papers from the labs of Drew Endy at Stanford, Christopher Voigt at MIT, Tim Lu at MIT, and Jérôme Bonnet at the French CNRS in Montpellier. These groups built up the conceptual framework: serine integrases as bits, integrase expression controlled by transcription factors, transcription factors controlled by environmental signals — so the cell's DNA literally records, in its base sequence, the history of signals it has experienced.

The classic demonstration, from the Bonnet, Yin, Subsoontorn, and Endy paper in *Science* in 2013, was a one-bit DNA-based switch implemented with the Bxb1 integrase. They built a construct in *E. coli* where Bxb1 expression was placed under the control of an arabinose-inducible promoter. Without arabinose, no Bxb1, the substrate stays in the unrecombined state. With arabinose, Bxb1 is expressed, recombines the substrate, locks in the new state — and crucially, even after the arabinose is removed and Bxb1 is no longer expressed, the substrate stays in the recombined state, because the integrase reaction is unidirectional. The cell has remembered, in its DNA, that it once saw arabinose. Removing the signal doesn't erase the memory.

\[Pause.\]

You can stack these to make more sophisticated devices. Use two different integrases triggered by two different signals, and the cell's DNA records which combinations of signals it has experienced. With four orthogonal integrases, you get sixteen possible states, corresponding to the sixteen possible histories of four binary inputs. Bonnet's group and others have built integrase-based **logic gates** — devices where the DNA state encodes a logical function of which signals have been seen. AND gates, OR gates, NOT gates, XOR gates, more complex multi-input gates. All implemented with site-specific recombinases acting on engineered DNA substrates.

The Voigt lab and collaborators pushed this further with multi-integrase circuits that perform calculations. A 2016 paper showed circuits with seven or more integrases simultaneously, each triggered by a different input, producing DNA-encoded readouts of the computational result. Synthetic-biology language calls these "permanent memory circuits" or "DNA-based logic" or "biological state machines."

\[Pause.\]

The analogy I want you to hold is this. **Conventional gene expression — turning a gene on and off in response to signals — is like RAM. The state is held in the concentration of a protein or RNA, and it's lost when the signals go away or the cell dies. Serine-integrase-based DNA memory is like flash memory. The state is encoded in the actual base sequence of DNA, and it persists indefinitely — through cell divisions, through quiescence, through environmental changes. You can read it back at any time by sequencing.**

This has been used for some elegant applications. Cell lineage tracing — tag cells with integrase circuits that flip bits over time, so that the developmental history of a cell population is recorded in the integrase pattern, recoverable by sequencing individual cells later. Environmental sensing — engineer bacteria that record exposure to particular chemicals in their DNA, then recover the bacteria and sequence them to determine where in an environment certain compounds existed. Diagnostic biosensing — cell-based sensors that detect disease biomarkers and lock in a DNA-encoded record of the detection event.

The promise of "biological permanent memory" — that you can use cells as physical recording devices that persist beyond their own lifetime if you sequence the DNA — has been explored extensively in the synthetic-biology literature. It's not yet a mainstream technology, but the principle is established, and serine integrases are the workhorse molecular components.

---

## SEGMENT 14 — The wider family — R4, TP901-1, A118, and orthogonality

Let's broaden the cast. Bxb1 and phiC31 are the famous two, but the serine integrase family includes dozens of members, each from a different phage, each with its own attB and attP sequences. Several of these have been characterized and engineered for use in mammalian and synthetic-biology contexts. Let me give you a quick tour of the main ones, and explain why having multiple orthogonal integrases matters.

**R4** is a serine integrase from a *Streptomyces* phage (different from phiC31, also from a *Streptomyces* phage but a different one). R4 was one of the early serine integrases characterized for mammalian use, alongside phiC31. Its attB and attP sequences are different from phiC31's and from Bxb1's, so R4 is "orthogonal" to both — meaning R4 recognizes only R4 sites, Bxb1 recognizes only Bxb1 sites, etc. R4 has been used in landing-pad systems and in synthetic-biology circuits.

**TP901-1** is a serine integrase from a phage of *Lactococcus lactis*, the dairy bacterium. TP901-1 has been characterized for mammalian-cell use and is one of the workhorse orthogonal integrases in synthetic-biology applications. Its native attB-attP system is well-studied and engineered for high efficiency.

**A118** is a serine integrase from a *Listeria* phage. Less commonly used than the above, but characterized and available for orthogonal-integrase designs.

**Wβ (Wbeta)** is from a *Bacillus anthracis* phage — yes, anthrax — and is one of the orthologs being explored more recently for its unique sequence specificity.

**SPβc2** is from a *Bacillus subtilis* phage and has been characterized for synthetic-biology applications.

There are many more — TG1, BL3, MR11, KovV, and others. Several papers have surveyed dozens of orthologs to identify ones that work cleanly in mammalian cells and that have site sequences that don't cross-react with each other.

\[Pause.\]

Why does **orthogonality** matter? Two main reasons.

First, in **multiplexed landing-pad designs**, you can install multiple landing pads at multiple chromosomal locations in the same cell, each recognized by a different integrase. Then you can dock different cargo at each location independently — Bxb1 docks cargo A at landing pad 1, phiC31 docks cargo B at landing pad 2, R4 docks cargo C at landing pad 3, all in the same cell, with no cross-contamination. This is essential for building complex multi-component circuits and for the kind of trait stacking we discussed in the agricultural-biotech segment.

Second, in **synthetic-biology logic circuits**, multiple orthogonal integrases let you implement multi-input logic with each integrase responding to a different input signal. Without orthogonality, you couldn't reliably build anything more complex than a single-bit memory.

The serine-integrase community has invested significant effort in characterizing orthologs and engineering them for clean orthogonality. A paper from the Yarnall and others in *Nature Biotechnology* in 2023 — from the Liu lab — surveyed hundreds of newly-identified integrases bioinformatically and benchmarked them in mammalian cells, identifying several new high-activity, orthogonal candidates. This is an ongoing field. The expectation is that as more integrases are characterized, the "library" of orthogonal site-specific tools available to mammalian engineers will grow from a handful to dozens, opening up much more complex synthetic-biology designs.

\[Pause.\]

A practical note: not every newly-identified integrase works well in mammalian cells. Many phage integrases evolved in bacterial intracellular conditions and don't fold, localize, or function efficiently in eukaryotic cells. Even when an integrase works, its efficiency in mammalian cells is often much lower than its efficiency in its native bacterial host. Engineering an integrase for high mammalian-cell activity — codon optimization, nuclear localization signals, expression-cassette tuning, sometimes directed evolution for higher activity — is its own subfield. The integrases that have become widely used (Bxb1 above all, then phiC31, then TP901-1) are ones that, by luck or by engineering, function efficiently in the mammalian context.

---

## SEGMENT 15 — RMCE — recombinase-mediated cassette exchange

Let me devote a segment to the **RMCE** design pattern, because it's both elegant and widely used and you'll see it referenced in many landing-pad papers.

I introduced RMCE briefly in the landing-pad segment. The basic idea: instead of using a single attB-attP pair (which leads to integration of the entire cargo plasmid, backbone and all), use **two different orthogonal attachment sites** flanking a placeholder cassette in the chromosome, and have the cargo plasmid carry the complementary sites flanking the payload. The reaction then **swaps** the placeholder cassette for the payload cassette, depositing only the payload (without plasmid backbone) into the chromosome.

\[Pause.\]

Let me walk through the molecular geometry. The chromosomal landing pad looks like this:

`...chromosomal-DNA — attB-1 — placeholder-cassette — attB-2 — chromosomal-DNA...`

Here, attB-1 and attB-2 are two different attB sequences, recognized by two different integrases — or, in many implementations, by the **same** integrase but using engineered orthogonal variants of the att sites that recombine only with their cognate partners and not with each other.

The cargo plasmid looks like this:

`plasmid-backbone — attP-1 — payload-cassette — attP-2 — plasmid-backbone (circular)`

The two attP sites flank the payload, on the same plasmid, with the plasmid backbone closing the circle.

When integrase is supplied, two recombination reactions happen: attB-1 with attP-1, and attB-2 with attP-2. The geometry is such that the two reactions, together, **exchange** the chromosomal placeholder for the plasmid payload. After the dust settles, the chromosome contains:

`...chromosomal-DNA — attL-1 — payload-cassette — attR-2 — chromosomal-DNA...`

And the placeholder cassette has been released, along with the plasmid backbone, as a separate circular product that gets diluted out as the cell divides.

\[Pause.\]

Notice what RMCE achieves. The chromosome now carries only the payload, flanked by recombined att sites (now attL and attR). The plasmid backbone — with its bacterial origin of replication, its antibiotic resistance marker, all the stuff you needed for plasmid propagation but don't want in the mammalian genome — is **not** integrated. The placeholder cassette that used to be at the landing pad is gone. The exchange is clean.

This is a much more elegant outcome than the simple single-attB-plus-single-attP integration, which would leave the entire plasmid integrated as a contiguous insertion. RMCE gives you backbone-free, marker-free, clean payload integration at a defined location. It's the gold standard for cell-line engineering.

For implementation, RMCE has been done with various pairs of orthogonal integrases and with orthogonal variants of the same integrase. Bxb1 has engineered "GT" and "GA" variant att sites (named by the dinucleotide identity at the central crossover position) that recombine only with their cognate partners, providing the two orthogonal channels needed for RMCE within a single Bxb1-based system. This is convenient because you only need one integrase rather than two.

\[Pause.\]

RMCE has been used in many published cell-line engineering platforms. The Flp-FRT system can also do RMCE with three different FRT variants, and many older transgenic mouse and cell-line systems use Flp-FRT-RMCE. The serine-integrase-based RMCE has the advantage of unidirectionality — once exchanged, the cassette stays exchanged, with no risk of reversion if integrase happens to be expressed later — which is why newer systems tend to use Bxb1-based RMCE.

If you encounter a paper that describes a cell line as having a "Bxb1-RMCE landing pad" or "phiC31-RMCE master line," you now know exactly what that means: two orthogonal att-site pairs at a defined chromosomal location, allowing clean payload-for-placeholder exchange via integrase action.

---

## SEGMENT 16 — Re-targeting — fusing integrases to zinc fingers and TALEs

Let me briefly mention an interesting line of work that tried to make serine integrases more flexible by **re-targeting** them to arbitrary chromosomal sequences. The native integrase only acts at its native att site sequence. If you want the integrase to act at some other chromosomal location of your choosing, the conventional approach is to install an att site there (with CRISPR + HDR or with PASTE). But what if you could make the integrase itself programmable — re-target it to a sequence of your choice without needing to pre-install a landing pad?

This is the question Andrew Anzalone, Russell Brewer-Jensen, Michele Calos, and others — independent groups in the late 2000s and 2010s — explored by fusing integrases to programmable DNA-binding domains. The two main programmable DNA-binding architectures of that era were **zinc fingers** (engineered three- and four-finger proteins that bind 9- to 12-base-pair sequences) and **TALEs** — transcription-activator-like effectors (modular proteins from plant pathogens that recognize DNA one base at a time and can be designed to bind any sequence). By fusing one of these programmable DNA-binding domains to an integrase, you could in principle direct the integrase to a chromosomal location of your choice, where it would then catalyze recombination of an incoming attB-flanked donor.

\[Pause.\]

The chimeric proteins worked, in proof-of-principle experiments. Zinc-finger-phiC31 fusions and TALE-phiC31 fusions both showed re-targeted integration at chosen genomic loci. The problem was that the **integration efficiency was much lower** than at the native att site — typically one or two orders of magnitude lower. The reason is that the integrase's catalytic activity is intimately tied to the structure of the synaptic complex it forms on its native att sites; tethering the integrase to a different sequence via a DNA-binding fusion partner gets it to the right location but doesn't necessarily set up the productive synaptic geometry needed for efficient catalysis.

This re-targeting approach was largely superseded by the rise of CRISPR — once you could cut at any sequence with Cas9, the question "how do I direct integration to any sequence" was answered more cleanly by Cas9 + HDR for landing-pad installation, and then standard integrase chemistry for the docking step. PASTE is the modern manifestation of this design: use prime editing (CRISPR-derived) for the targeting, use Bxb1 (native chemistry, full efficiency) for the integration. The targeting and the integration are cleanly separated rather than fused into a single chimeric protein.

That said, some recent work — notably from the Liu lab and from the Gersbach lab at Duke — has revisited integrase-fusion approaches with CRISPR-Cas9 nickases as the DNA-binding domain. These chimeric "Cas9-integrase" systems are an area of active investigation, and may yet provide a different route to programmable site-specific large-cargo insertion. For now, the dominant approach is the pre-install-a-landing-pad model.

---

## SEGMENT 17 — Limitations — efficiency, context, and the price of unidirectionality

Let me close out the technical content with an honest accounting of the limitations of serine integrases as engineering tools. Every tool has tradeoffs; serine integrases have theirs.

**Efficiency is variable and context-dependent.** Bxb1 in mammalian cells is efficient, but "efficient" still typically means 10 to 50 percent of cells receiving a successful integration in a transfection experiment — not 100 percent. The efficiency depends on the cell type, the chromatin state of the landing-pad site, the delivery method, the relative ratios of integrase to donor DNA, and other factors. For ex vivo work where you can select for integrated clones, the efficiency is rarely a bottleneck. For in vivo work where you can't easily select, the efficiency directly determines what fraction of cells in the target tissue are successfully edited, and below some threshold the therapy doesn't work.

**Host context matters.** Some chromosomal locations are more permissive for serine-integrase action than others. A landing pad in a transcriptionally-active region of the genome is generally more recombinogenic than one in a heterochromatic region. This is why landing-pad sites are usually chosen in well-characterized "safe harbors" with known favorable chromatin contexts.

**Integration is unidirectional but cleanly defined.** This is mostly a feature, but it can be a limitation. If you make a mistake — install the wrong cargo at the landing pad, or want to swap it out for a different version — you can't easily undo it without expressing the RDF and excising. RDF availability and the engineering of controlled excision is an area of ongoing work.

\[Pause.\]

**Off-target action exists but is mostly low.** Bxb1 has essentially no detectable off-targets in human and most mammalian genomes, which is its great advantage. phiC31 has the pseudo-attP problem we discussed. Newer orthologs vary in their off-target profiles, and the off-target landscape always needs to be characterized for any new integrase being deployed for clinical work.

**Delivery of the integrase itself is its own engineering problem.** The integrase has to be present in the cell at the same time as the cargo, and at a sufficient level. Plasmid delivery, mRNA delivery, ribonucleoprotein delivery, and viral-vector delivery of the integrase have all been tried; each has tradeoffs in efficiency, persistence, and immunogenicity.

**Pre-installation of the landing pad is required.** This is the central limitation of the landing-pad approach as a clinical tool. Unlike Cre-Lox, which requires only that loxP sites be installed somewhere in the genome (which can be done germline in transgenic mice), serine-integrase landing pads typically need to be installed in adult tissues for therapeutic applications. PASTE solves this in many cell types, but only for cell types and chromosomal locations where prime editing works efficiently. For some tissues and some loci, prime editing is still hard, and the landing-pad approach is correspondingly hard.

**Cargo design constraints.** The cargo plasmid carries att sites and may need to be in a particular topological form (circular vs linear) to be efficiently recombined. Plasmid size, sequence content, and methylation state can all affect efficiency. These are tractable engineering issues but they do require attention.

\[Pause.\]

Despite these limitations, serine integrases remain the cleanest, most predictable, most reliable tool we have for large-cargo site-specific integration. The combination of unidirectionality, sequence specificity (in the case of Bxb1), no requirement for ATP or accessory factors, and reasonable mammalian-cell efficiency makes them indispensable for landing-pad cell-line engineering and for the emerging PASTE-based gene therapy approaches.

---

## SEGMENT 18 — The frontier — newer integrases, AI-discovered orthologs, controlled reversal

Let me close with a look at where the field is going.

**More orthologs.** The number of characterized serine integrases is growing rapidly. Bioinformatic surveys of metagenomic phage sequences have identified thousands of putative integrases that have never been functionally tested. The Innovative Genomics Institute at Berkeley, the Liu lab at the Broad Institute, the Hatfull lab at Pittsburgh, and others are systematically expressing and characterizing these candidates in mammalian cells. The hope is to find ones with higher efficiency, cleaner specificity, or unique properties that the current workhorse Bxb1 doesn't have.

**AI-discovered integrases.** This is genuinely new. Recent work using protein language models — like ESM and related deep-learning architectures trained on protein sequences — has been applied to the problem of predicting which uncharacterized phage proteins are likely to be active integrases with novel sequence specificities. The 2023 *Nature Biotechnology* paper from the Liu lab and collaborators used such a computational pipeline to discover several novel orthologs that turned out to have favorable properties in mammalian cells. As protein-prediction tools get better, expect more integrase discoveries this way.

\[Pause.\]

**Engineered specificity.** Directed evolution and rational design are being used to alter the sequence specificity of existing integrases — to retarget them to sequences other than their native att sites. The challenge here is that the integrase's catalytic activity is intimately tied to the synaptic-complex structure, which depends on the native site sequence. Altering specificity without losing activity is hard. But there's progress, including some examples of engineered Bxb1 variants that recognize altered att sequences with reasonable efficiency.

**RDF engineering for controlled reversal.** The natural RDFs that excise integrase-integrated cassettes are mostly poorly-characterized and expressed at low levels. Engineering RDF expression — putting it under tight inducible control, fusing it to other proteins, optimizing its co-expression with integrase — is an area where useful tool development is happening. The goal: provide users with the option to excise a landing-pad-integrated cassette on command, for instance to remove a therapeutic gene after a treatment regime is complete, or to switch a synthetic-biology circuit from one state back to another.

**Larger payloads.** PASTE has demonstrated 36-kilobase insertions; can we go bigger? The integrase reaction itself has essentially no upper size limit — it's just cutting and re-ligating at the att sites, regardless of how much DNA sits between. The bottleneck is delivery — getting a 50-kilobase cargo into a cell efficiently. As delivery technologies advance (engineered AAV variants, larger-capacity lipid nanoparticles, electroporation, DNA nanostructures), the practical payload size will grow.

**In vivo PASTE in more tissues.** Current PASTE work is most efficient in liver, where AAV and LNP delivery is well-developed and prime editing works reasonably well. Extending to other in vivo tissues — muscle, central nervous system, retina, lung — will depend on advances in delivery and in prime-editing efficiency in those tissues. Multiple companies and academic groups are working on each.

\[Pause.\]

**Coupling to base editing and other CRISPR tools.** Many emerging gene therapy designs combine multiple CRISPR-era tools: base editing to fix one mutation, prime editing to fix another, integrase-mediated insertion to add a large cargo, all in the same therapy. The toolkit is becoming modular, and serine integrases are one of the modules. The integrative thinking that produced PASTE — combining prime editing and Bxb1 — is being extended to other combinations.

**Clinical translation.** As of 2025-2026, several PASTE-based programs and other integrase-based therapies are in pre-clinical and early-clinical development. Prime Medicine has programs for several genetic diseases. Tessera Therapeutics is developing "gene writers" — a related class of large-cargo integration tools. Various academic gene therapy programs are using Bxb1 landing pads for ex vivo cell engineering. The next five years will likely see the first FDA approvals of serine-integrase-based gene therapies for human disease.

\[Pause.\]

If you take one image away from this segment, take this: **serine integrases are quietly becoming as foundational to large-cargo precision integration as CRISPR has been to small-edit precision modification.** They are the irreversible welder to CRISPR's precise cutter. They are the docking apparatus that makes "permanent installation at a chosen location" actually work. As gene therapy moves toward more ambitious payloads and more demanding precision requirements, serine integrases are increasingly the tool of choice.

That's the field. Now let's wrap up and look at how it ties to everything else you've learned in this course.

---

## APPENDIX — Synthesis, takeaways, and where to read next

Let me close with the synthesis I want you to carry out of this lecture.

**The two families.** Site-specific recombinases come in two great clans. The **tyrosine recombinases** — Cre, Flp, lambda integrase — use a tyrosine residue in the active site, recombine between identical sites (loxP, FRT), and run reversibly. The **serine recombinases** — Bxb1, phiC31, R4, TP901-1, and family — use a serine residue, recombine between two different sites (attB and attP), and run unidirectionally without an accessory factor. The unidirectionality of the serine integrases is the central architectural difference and the central engineering advantage for landing-pad applications.

**The asymmetry-makes-irreversibility insight.** Cre-Lox is symmetric: loxP plus loxP gives loxP plus loxP. The chemistry runs both ways. Serine integrases are asymmetric: attB plus attP gives attL plus attR, which are different sites that the enzyme can't productively re-engage. The asymmetry is what makes the reaction unidirectional. Hold this. It's the deep architectural point.

**The landing pad as industrial workflow.** Install an attB once in a chromosomal safe-harbor site (with CRISPR + HDR, or with prime editing via PASTE). Then dock attP-flanked cargo in over and over again, reproducibly, with Bxb1. This workflow is the dominant approach for industrial CHO cell engineering for monoclonal antibody production, and it's increasingly the approach for plant trait engineering and for emerging gene therapy applications. It amortizes the cost of finding a good integration site across every product you'll ever make.

**PASTE as the design pattern of the moment.** Prime editing installs the landing pad with single-nucleotide precision. Bxb1 docks the cargo. Together, they enable kilobase-scale precision insertion in differentiated cells in vivo, breaking the AAV size barrier. Watch for clinical translation in the next five years.

**Bxb1 as the workhorse.** Of all the serine integrases, Bxb1 — from a mycobacteriophage isolated by an undergraduate-driven discovery program at Pittsburgh — happens to have the lowest off-target rate in mammalian genomes, and is consequently the dominant integrase in modern landing-pad and PASTE applications. phiC31 was the trailblazer but is mostly displaced for clinical use because of its pseudo-attP problem.

**Synthetic biology beyond integration.** Beyond their use as integration tools, serine integrases are increasingly used as **DNA-encoded memory and logic** components in synthetic-biology circuits. Each integrase reaction is a flip-once memory bit. Orthogonal integrases let you build multi-bit circuits. The state is recorded in DNA and persists indefinitely. This is the basis of "biological permanent memory" and various lineage-tracing and biosensing applications.

\[Pause.\]

**Where to read next.** If you want to go deeper, the foundational papers worth knowing:

- Groth, Olivares, Thyagarajan & Calos (2000-2001) — the first phiC31-in-mammalian-cells papers.
- Brown, Mehbiri, Hatfull et al. (2011) — Bxb1 in mammalian cells, establishing its specificity advantage.
- Bonnet, Yin, Subsoontorn & Endy (2013) — Bxb1 as a single-bit DNA memory device in *E. coli*.
- Anzalone et al. (2019) — the original prime editing paper, the prerequisite for PASTE.
- Anzalone, Yarnall et al. (2022) — the PASTE paper introducing Prime-editing Assisted Site-specific Integration with Exchange.
- Yarnall et al. (2023) — large-scale survey of new serine integrase orthologs for mammalian use.

And of course the companion lectures in this course — Cre-Lox for the tyrosine recombinases, prime editing for the targeting tool used in PASTE, AAV and lentivirus for the delivery context, CRISPR for the broader genome-editing landscape.

\[Pause.\]

**One final image to walk out with.**

CRISPR taught us to cut DNA at any sequence we want. Base editing and prime editing taught us to make small edits without cutting all the way through. Serine integrases — and especially Bxb1 in the PASTE configuration — teach us to **install kilobase-scale cargo at any sequence we want, with confidence that it will stay there.** That is a different capability from cutting, from base-swapping, from small-edit-installing. It is the capability of building. Of permanent, defined, large-scale construction in a chromosome.

If CRISPR is the scalpel and base editing is the pen and prime editing is the typewriter, then serine integrases are the bricklayer. They lay heavy load at a known address, and once laid, the brick stays put.

That's the lecture. Thank you. Questions?

---



