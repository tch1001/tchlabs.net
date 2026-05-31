# Adeno-Associated Virus: The Shipping Container of Modern Medicine

**A 2-hour undergraduate molecular medicine lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to two hours, plus a mid-point break. (Read faster, ~140 wpm, and it lands nearer 90 minutes, leaving room for questions or board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9, marked \[BREAK\]. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — Why AAV won: the gene-therapy delivery vehicle the field converged on

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we are going to talk about a virus. But not in the way you probably expect. We are not going to spend our time worrying about how this virus makes people sick, because — and I want you to sit with this for a second — this virus, the one we're talking about today, doesn't make people sick at all. It infects most of you, sitting in this room, right now. Roughly seventy percent of adults carry antibodies to it. And almost none of you have ever heard its name, because in its natural life cycle, **it doesn't do anything noticeable**. It just sort of shows up, sits in your cells for a while, gets cleared, and moves on.

The virus is called **adeno-associated virus**, or **AAV**. The name is a historical accident — it was first noticed in the 1960s as a contaminant of adenovirus preparations, a little extra particle hanging around in the test tube wherever adenovirus was growing. The scientists at the time thought, "oh, that's some kind of helper that's coming along for the ride." Turns out it was the other way around. AAV is the one that needs the help. It can't replicate on its own. It needs adenovirus — or some other helper — to provide the missing tools. And so it got the unglamorous name "adeno-associated," meaning "the virus that's hanging out near adenovirus," and that name has stuck for sixty years.

I want you to understand, by the end of these two hours, why this small, helpless, mostly invisible virus has become **the most clinically successful gene therapy vehicle of the modern era**. Why, when you read a news story about a one-time treatment that cures a child of a fatal genetic disease — Zolgensma for spinal muscular atrophy, Luxturna for inherited blindness, Hemgenix for hemophilia B — almost without exception, the molecular machine doing the delivery is AAV. Why, of all the viruses biology had on offer, this one became the workhorse. And why, when researchers today imagine the future of medicine — fixing genetic diseases at their source by walking a healthy copy of a gene into the right tissue — they reach for AAV more often than for any other tool we have.

\[Pause.\]

Let me give you the analogy I want you to hold in your head for the next two hours. AAV is a **shipping container**. A tiny one. Picture a little intermodal container the size of a tea cup, painted a particular color, designed to carry a small but well-protected payload, and engineered to know exactly which neighborhoods of the city to deliver to. The container itself is unobtrusive. It doesn't make noise. It doesn't blow anything up. It glides into the target neighborhood, hands off its contents, and disappears. And if you change the paint job on the outside — what we'll later call the **capsid** — you can change which neighborhoods it gets past security to enter. Red containers go to liver. Blue ones go to brain. Green ones go to retina. Same container, different exterior, different destination.

That's AAV in one image. A small, well-tolerated, surprisingly precise delivery vehicle whose exterior you can paint to choose where it goes. The payload inside is a piece of DNA — a healthy copy of a gene, or a CRISPR system, or whatever genetic message you want delivered. The vehicle takes it to the cells that need it. The cells unpack it. The gene gets expressed. The patient, if everything works, gets a functional copy of a protein their body has been missing — sometimes for the rest of their life, from a single dose.

\[Pause.\]

If you walk out of here in two hours and you can do three things — one, sketch an AAV particle and tell me what each part does, including why ITRs are special and why the capsid is what determines tissue tropism; two, explain in plain English how we make AAV in a dish, what the size limit is, and why we sometimes have to split a gene across two containers; and three, look at any of the approved AAV gene therapies and tell me roughly what tissue it targets, what gene it delivers, and why AAV was the right tool for that job — then we've succeeded. Everything else, all the molecular detail, hangs off those three.

One more thing before we open the box. AAV is not the only gene-delivery virus in the toolkit. We also use **lentivirus**, which integrates into the chromosome and is good for permanent modification of dividing cells like the T cells in CAR-T therapy. We use **adenovirus**, which holds a lot of cargo and is great for vaccines but provokes a strong immune response. We use **herpes simplex-based vectors**, which can carry enormous payloads. Each of these has its place. But for the specific job of **walking a therapeutic gene into a long-lived non-dividing cell — a neuron, a retinal photoreceptor, a hepatocyte — and getting durable expression with a tolerable safety profile**, AAV has won, and the rest of the field is essentially trying to catch up. By the end of today, you'll see exactly why.

---

## SEGMENT 2 — The wild virus: small, single-stranded, helper-dependent, mostly harmless

So let me introduce you to AAV as it lives in nature, before any human ever tried to engineer it.

Wild AAV is a member of a viral family called the **Parvoviridae** — the parvoviruses. Now, you may have heard of parvovirus B19, which causes a mild childhood illness called fifth disease. Or canine parvovirus, which is a serious problem in puppies. Those are cousins of AAV. The parvoviruses share certain features: they are very small, they have single-stranded DNA genomes — which is unusual; most viruses use double-stranded DNA or RNA — and they package that genome into a simple, sturdy protein shell with no envelope around it. No lipid membrane. Just a bare protein capsid, like a tiny seed.

AAV in particular lives in a sub-family called **Dependoparvovirus**, and the name tells you the central oddity of its biology. Dependo — as in dependent. AAV is dependent on another virus to do anything. Specifically, it depends on a co-infection by adenovirus, or by herpes simplex virus, to provide a set of helper functions that AAV's own genome doesn't encode. Without that helper around, AAV gets into a cell, parks its DNA in the nucleus, and sits there. Quietly. Sometimes for years. It might integrate into a specific spot in human chromosome 19 — a region called the **AAVS1 site** — and just live there as a stowaway, doing nothing. Then, one day, if the cell happens to also get infected by adenovirus, AAV wakes up. It reads its own genes, makes more copies of itself, packages them, and bursts out into new particles. The helper provided the wake-up signal and the missing molecular tools, and AAV cashed in.

\[Pause.\]

I want you to feel the strangeness of this. Most viruses are autonomous. They get into a cell, they hijack the cell's machinery directly, they replicate, they leave. AAV cannot. AAV is, in a sense, a **conditional virus** — it carries a complete replication strategy in its genes, but the strategy is wired to require an external trigger. The genes for the trigger live in another virus entirely. So in the wild, AAV is a hitchhiker, riding along whenever adenovirus shows up.

Here is why that helper-dependence matters for medicine, and I want you to lock this in because it's one of the most important properties for understanding why we chose this virus. **Helper-dependence is a safety feature.** When we engineer AAV for gene therapy, we strip it down even further — we remove almost all of its genome, keeping only the bare minimum needed for packaging — and we deliver it to a patient. Once inside the patient's body, the engineered AAV particle gets into target cells, hands off its DNA, and then has no ability to make more copies of itself. It can't replicate. There's no helper virus around. The patient isn't co-infected with adenovirus. So the AAV vector delivers its message, the message persists, and the vector itself can't multiply, can't spread, can't shed, can't infect anyone else. **It's a one-and-done delivery.** Contrast that with a virus that can replicate freely in its host — you've created a much harder safety problem. AAV's natural inability to replicate without help means that when we put it into a patient, we get the delivery without the propagation. That's a built-in containment system, and it's one of the main reasons regulatory agencies have been willing to approve AAV-based gene therapies for use in humans.

\[Pause.\]

The other feature of wild AAV that turns out to be a gift is its **pathogenicity**, or rather, its lack of one. As far as we can tell, infection with wild-type AAV doesn't cause any human disease. Period. Not a sniffle. Not a fever. Not a rash. We've been carrying AAV around in our species for as long as we've been a species, and it doesn't make us sick. That is an extraordinarily favorable starting point for a therapeutic vehicle. When you administer engineered AAV to a patient, the patient's body is encountering a particle whose evolutionary lineage has been refined over millions of years to **not provoke a destructive response**. The immune system will notice it — we'll spend a whole segment on that, because pre-existing immunity is a real clinical challenge — but the response is typically not the kind of cytokine storm that you get from administering, say, a high dose of adenovirus.

So you have a virus that is small, structurally simple, naturally helper-dependent, and naturally non-pathogenic. From an engineering standpoint, that's already most of what you want. Now, what's actually inside the particle? That's the next segment.

---

## SEGMENT 3 — Anatomy of an AAV particle: a 25-nanometer capsid wrapped around single-stranded DNA

Let me draw an AAV particle for you. If you take nothing else from this segment, take the size and the architecture, because the size dictates almost everything that follows.

An AAV particle is **roughly 25 nanometers in diameter**. Let me put that number in context, because numbers without context are useless. A nanometer is a billionth of a meter. A human hair is about 80,000 nanometers across. A single red blood cell is about 7,000 nanometers. A typical bacterium is about 1,000 to 2,000 nanometers. So AAV is roughly forty times smaller than a bacterium. It is, in absolute terms, one of the smaller viruses ever discovered. For comparison: an adenovirus particle is about 90 nanometers across, a herpes virus is about 200 nanometers, and influenza is around 100 nanometers. AAV is comfortably the smallest of all the major viral vectors. **It is, quite literally, a tiny shipping container.**

That small size has consequences. The interior volume of a 25-nanometer sphere is, geometrically, very limited. There just isn't much room inside. And that limitation is what sets the famous packaging cap — roughly 4.7 kilobases of DNA, no more — that we'll spend Segment 5 unpacking. The physical box only holds so much.

\[Pause.\]

Now, what is the box made of? The AAV capsid is built from exactly **sixty protein subunits**, arranged with icosahedral symmetry — the same symmetric pattern you see in a soccer ball or a geodesic dome. Sixty identical-looking little wedges interlocking around a hollow center, forming a closed, sturdy shell. Icosahedral symmetry is hugely popular among viruses for the same reason it's popular among architects: it uses the minimum amount of protein to make the maximum volume of enclosed space with the maximum structural strength. It's efficient. Evolution has found this design over and over.

The sixty subunits, though, aren't all the same protein. They come in three flavors, called **VP1, VP2, and VP3** — VP standing for "viral protein." VP3 is the most common; VP2 is intermediate; VP1 is the least common. Roughly the ratio is 1:1:10 — for every one copy of VP1 in the capsid, there's one VP2 and ten VP3s, summing to sixty subunits total. All three proteins are encoded by a single gene called **cap**, and they are produced in different ratios by a clever combination of alternative start codons and alternative splicing. The three VPs share most of their amino acid sequence, but VP1 and VP2 have extra bits at one end that stick into the interior of the particle and do specific jobs during the infection process — like punching the particle out of an internal cellular compartment after the virus has been taken into a cell. We won't dwell on that machinery. The big idea is: **three proteins, sixty copies, one elegant shell**.

\[Pause.\]

Now, what's inside the shell? A **single strand of DNA**, about 4.7 kilobases long. That's it. One single-stranded DNA molecule, linear, with a special sequence at each end that we'll get to in the next segment.

Single-stranded DNA — let me dwell on that for a second, because it's unusual and it matters. Most of the DNA you've ever met in this course has been double-stranded — two complementary strands wound around each other in a double helix. The DNA in your chromosomes is double-stranded. The DNA in most viruses is double-stranded. But AAV packages just one strand, and the choice of which strand — the so-called "plus" strand or "minus" strand — is essentially random; about half the particles carry one, half carry the other. When AAV delivers its DNA into a cell nucleus, that single strand has to be converted into double-stranded DNA before the cell's transcription machinery can read it and make RNA. The conversion happens by the cell's own DNA polymerase, using the single strand as a template to synthesize the complementary strand.

And here is a wrinkle that turns out to be biologically important and a source of practical engineering: **that second-strand synthesis step is a rate-limiting bottleneck**. AAV particles can sit in a cell with their single-stranded DNA in the nucleus for a long time — days, weeks — before the cell gets around to converting them to double-stranded form. The gene only starts being expressed once the conversion happens. So there's a built-in delay between AAV delivery and the onset of gene expression, and that delay is sometimes a clinical problem. We will see in Segment 11 that a clever trick called **self-complementary AAV** sidesteps this bottleneck by pre-loading a double-stranded payload — at the cost of half the cargo space. Trade-offs.

\[Pause.\]

So now you have the basic picture. AAV is a 25-nanometer icosahedral protein shell, built from sixty copies of three related proteins, enclosing a single linear strand of DNA about 4.7 kilobases long. There is no membrane, no envelope, no lipid layer. It's a bare protein particle, like a tough little seed. That bareness is part of why AAV is so stable — you can freeze it, thaw it, store it at four degrees Celsius for months, ship it across continents, and it largely survives. Enveloped viruses, by contrast, are fragile; their lipid membranes break down easily. AAV is built like a cargo container in part because it has to survive moving through environments — including, ultimately, intravenous administration through a syringe — that would destroy more delicate particles. **Small, sturdy, simple, stable.** That's the architecture.

Now let's look at what's special about the two ends of the DNA strand inside.

---

## SEGMENT 4 — ITRs: the only viral sequence we keep in our vector

Inside that capsid, the AAV DNA strand has a structure at each end that we have to talk about, because when we engineer AAV vectors for gene therapy, **the ITRs are essentially the only piece of viral DNA we keep**. Everything else — the genes for the capsid proteins, the genes for the replication proteins, the whole guts of the natural virus — we throw away. We replace it with our own cargo. But we keep these two little terminal sequences, one at each end of the strand, because without them, AAV's packaging machinery doesn't know what to package, and the whole system falls apart.

The sequences are called **Inverted Terminal Repeats**, or **ITRs**. Each one is about **145 base pairs** long. There's one at each end of the AAV genome — they're called "inverted repeats" because the sequence at one end is the reverse complement of the sequence at the other end. If you read one ITR from outside in, then go to the other end of the genome and read its ITR from outside in, you get essentially the same letters. They're mirror-image bookends.

But the ITRs aren't just sequences sitting flat on a strand. They have a remarkable property: each ITR can **fold back on itself** to form a hairpin structure, like a T-shape, because the sequence is internally palindromic — segments within each ITR are complementary to other segments within the same ITR. So each end of the AAV genome, when you look at it under an electron microscope or in a structural model, doesn't just trail off as a single strand. It folds into a little hairpin pin-shape.

Why does this matter? Because those hairpin structures are the **starting points for DNA replication**. In the natural life cycle of AAV, when the virus is replicating inside a co-infected cell, the cell's DNA polymerase uses the folded-back hairpin at one end of the genome as a primer to start copying the strand. That's an unusual replication strategy — most viruses provide their own primer or use other tricks — but AAV's terminal hairpins serve as their own self-primers. The ITRs are, in addition to being origins of replication, also the **labels the packaging machinery recognizes**. When the AAV capsid is being assembled and DNA is being threaded into it, the system looks for these ITR sequences. DNA that has an ITR at each end gets packaged. DNA without ITRs doesn't.

\[Pause.\]

Here is the analogy. Imagine you have a sophisticated automated shipping warehouse. The warehouse has a strict rule: it will only put items into shipping containers if the items have the correct **shipping labels** on each end. Items without labels get ignored. Items with labels get scanned, picked up by the robots, and packed neatly into containers. The labels tell the robots, "this is cargo; package me."

The ITRs are those labels. They are the **packaging signal** that tells the AAV capsid assembly machinery, "this strand of DNA is cargo, please package it." If we want to put our own gene — say, a healthy copy of the dystrophin gene, or a CRISPR system, or a fluorescent reporter — into an AAV particle, we have to flank our gene with ITRs at both ends. The packaging machinery sees the ITRs, recognizes them as the legitimate packaging signal, and packages whatever DNA happens to be between them — whether that DNA is the natural AAV genome or our entirely artificial therapeutic construct. The packaging machinery doesn't care what's between the ITRs. It just cares that the ITRs are there.

That is **the central trick of AAV vector engineering**. We have a packaging system that is sequence-blind to the cargo and sequence-aware only at the boundaries. So we put our therapeutic gene in the middle, surround it with ITRs at the two ends, and the cell's machinery does the rest. We have, in effect, hijacked the packaging system to put our message in their container.

\[Pause.\]

A few important details about ITRs in practice. The ITRs we use in lab and clinical AAV vectors are almost always the **AAV2 ITRs** — the ITRs from serotype 2, the most studied AAV. Why AAV2 ITRs specifically? Because they were the first to be characterized, they're well-understood, and crucially, the Rep proteins that recognize and process them — the proteins encoded by the natural AAV _rep_ gene — work efficiently on AAV2 ITRs regardless of which capsid serotype you're packaging into. So you can take a transfer plasmid carrying your gene flanked by AAV2 ITRs and package that DNA into an AAV2 capsid, or an AAV9 capsid, or an AAV-PHP.eB capsid — the capsid doesn't care, because the capsid recognizes the Rep proteins, not the ITRs. The ITRs are universal across serotypes in the way we use them.

Another practical point: ITRs are notoriously **annoying to clone with**. Because their sequences are so internally palindromic, they form hairpins not just in the packaged virus but also in any plasmid that carries them. Those hairpins can be cut by certain restriction enzymes that bacteria use as defense systems, and they can be recombined out by the bacterial DNA repair machinery, especially in certain _E. coli_ strains. So when you grow up a plasmid containing ITRs, you often find that one or both ITRs has been mysteriously partially deleted by the bacterium during propagation. This is one of those things that nobody warns you about in the textbooks, but anybody who's actually built an AAV vector has spent some afternoon staring at a sequencing trace going, "wait, where did half my ITR go?" The fix is to use special _E. coli_ strains that are deficient in recombination — strains with names like Stbl3 or SURE — that handle ITR-containing plasmids more gently. You also confirm the integrity of your ITRs by cutting your prepped plasmid with a restriction enzyme like SmaI or AhdI that specifically diagnoses ITR loss.

The take-home is: **ITRs are the only viral sequence we keep in our final therapeutic vector**. They're the packaging label and the replication primer, all in 145 base pairs at each end. Everything between them is up to us. That's the canvas we paint on.

---

## SEGMENT 5 — Cargo: what fits, what doesn't, and the 4.7-kilobase limit

So now we get to the fundamental constraint of the AAV world. **The packaging limit.** This single number — 4.7 kilobases — shapes more design decisions in AAV gene therapy than any other parameter, and you have to internalize it to understand why so much of the field looks the way it looks.

Remember, the AAV capsid is only about 25 nanometers across. The interior volume holds only so much DNA. The natural AAV genome is, conveniently, very close to the maximum that can be packaged — about 4.7 kilobases, including the two ITRs. So when you engineer an AAV vector by replacing the natural genome with your own construct, you have **about 4.7 kb of total space** to work with, ITRs included. Once you subtract the two ITRs (about 145 bases each, plus some surrounding sequence — call it 300 bases total), you have around **4.4 to 4.5 kb of effective cargo space** for your actual gene of interest plus its regulatory elements.

And that needs to include _everything_. A promoter to drive expression of your gene — typically 200 to 800 base pairs depending on the promoter. The gene itself — the coding sequence, which can range from a few hundred bases for a small protein to many kilobases for a large protein. A polyadenylation signal at the end to properly terminate the mRNA — typically 100 to 500 base pairs. Maybe a small intron to boost expression. Maybe some regulatory enhancers. All of it has to fit in that 4.5 kilobases between the ITRs.

\[Pause.\]

Here's the analogy. The AAV capsid is a **car trunk**. A small one. A Mini Cooper trunk, not an SUV. You can fit some grocery bags in there. You cannot fit a couch. You cannot fit a refrigerator. You have to plan your shopping with the trunk size in mind. **If your gene plus its regulatory sequences is bigger than the trunk, you simply cannot use a single AAV vector — you have to either shrink your cargo, find a different vehicle, or split your cargo across two trunks and reassemble at the destination.**

Now let me give you a feel for what fits and what doesn't, with real examples. The gene for **factor IX**, which is missing in hemophilia B, is about 1.5 kilobases. That fits easily in a single AAV; the FDA-approved therapy Hemgenix uses a single AAV to deliver factor IX. The gene for **SMN1**, missing in spinal muscular atrophy, is about 1.5 kilobases — fits in one AAV; that's Zolgensma. The gene for **RPE65**, the retinal gene whose loss causes one form of Leber congenital amaurosis, is about 1.6 kilobases — fits in one AAV; that's Luxturna.

Now the harder ones. **CFTR**, the cystic fibrosis gene, is about 4.4 kilobases. That barely fits, and once you add a promoter and a polyA, you're over. **Cas9**, the workhorse CRISPR enzyme from _Streptococcus pyogenes_, is about 4.2 kilobases. Plus a promoter, plus a polyA, plus an sgRNA, and you've blown past the limit. **Dystrophin**, the gene missing in Duchenne muscular dystrophy, is the real heartbreaker — its coding sequence is around 11 kilobases. That's more than twice the AAV capacity. You cannot fit dystrophin in an AAV, period.

\[Pause.\]

So what do you do when your gene doesn't fit? Three main strategies, and we'll spend a whole segment on them later, but let me give you the headlines now.

**Strategy one: shrink the gene.** Sometimes you can engineer a smaller version of the protein that still works. The dystrophin field famously developed **micro-dystrophins** — engineered shortened versions of dystrophin that are only 4 kilobases and fit in an AAV. They don't have the full function of natural dystrophin, but they have enough to be therapeutic, and several micro-dystrophin AAV products have entered clinical trials or been approved. For Cas9, there are smaller versions from other bacteria — **SaCas9** from _Staphylococcus aureus_ at about 3.2 kb, or **CjCas9** from _Campylobacter jejuni_ at about 2.9 kb — that fit comfortably in AAV with room to spare for an sgRNA.

**Strategy two: split the gene across two AAV particles.** Make one particle carry the first half of the gene, another particle carry the second half, co-administer both, and let the cell reassemble them — either at the DNA level (concatamerization or trans-splicing) or at the protein level (split-intein protein splicing). We'll go deep on this in Segment 16. It works, but with reduced efficiency, because both halves have to land in the same cell to produce a functional product.

**Strategy three: use a different delivery vehicle.** If your cargo is truly too large for any AAV strategy to handle, you might use a lentivirus (which can hold around 8-10 kb of cargo), or HSV-derived vectors (which can hold 30+ kb), or non-viral delivery like lipid nanoparticles (which can hold pretty much arbitrary cargo at lower efficiency). Each comes with its own trade-offs around immune response, integration risk, duration of expression, and manufacturability.

\[Pause.\]

The reason the 4.7 kilobase limit is so unyielding is that it's set by **physics**, not by engineering. The capsid is a fixed-volume box. You cannot stuff more DNA into it than the volume allows. There has been some interesting recent work on engineered capsids with slightly expanded packaging capacity — pushing the limit to maybe 5.2 kilobases by tweaking capsid geometry — but the gains are modest and come with reduced yield. You can sometimes overstuff the natural capsid a little — packaging 5 or even 5.5 kilobases — but at the cost of getting incomplete particles, fragmented genomes, and lower titer. The hard physical wall is around 4.7, and the practical clean wall is around 4.5.

So when you sit down to design an AAV vector, the first question is always **does my construct fit**. You count the base pairs of your promoter, your gene, your polyA, your ITRs, you add them up, and if the total is over 4.7 kilobases you have to redesign. Sometimes that means using a shorter promoter — switching from the full CMV promoter at 800 bases to a minimal one at 200 bases. Sometimes it means using a tissue-specific small promoter to save space and to confer cell-type specificity at the same time. Sometimes it means dropping an intron you would have liked to include. The 4.7 kb limit is a constant pressure on every design decision.

And it is, simultaneously, **the single biggest weakness of AAV as a delivery platform**. Every other major property of AAV is favorable. Safety: favorable. Immunogenicity: tolerable. Manufacturing: getting better. Durability of expression in non-dividing cells: excellent. But the trunk space — that's the bottleneck. If we had an AAV variant with twice the cargo capacity, the field would be transformed overnight. Many of the diseases we can't currently address with AAV — large-gene disorders like full-length dystrophin replacement, multi-gene constructs, big regulatory cassettes — would suddenly come into reach. People have been trying to expand the limit for thirty years, with only modest success. The geometry resists.

For now, we live with 4.7 kilobases. And we have built an entire field of clever engineering around that constraint.

---

## SEGMENT 6 — Capsid serotypes: AAV1 through AAV13 and what each likes

Okay. We've talked about the package as if it were one thing. But it isn't. There are many different AAVs in nature — different serotypes, isolated from different sources, with different capsid shells. And as it turns out, **the capsid is what determines almost everything about where the virus goes**. Same ITRs, same packaging machinery, same single-stranded DNA inside — but change the capsid shell, and you change which cells the virus can enter, which tissues it accumulates in, and how efficiently it delivers its cargo.

Let me first explain what we mean by "serotype." A **serotype** is a version of a virus that is antigenically distinct from other versions — that is, antibodies raised against one serotype don't necessarily neutralize another. Practically, for AAV, different serotypes have meaningfully different amino acid sequences in their capsid proteins, especially on the outer surface where the capsid contacts cells and where antibodies can bind. Two AAV serotypes might share, say, 80% of their capsid amino acid sequence — they're clearly related — but the 20% that's different is concentrated on the surface, and that 20% changes which cell-surface receptors the virus binds and which tissues it enters.

\[Pause.\]

Here is the analogy. Imagine our shipping container has a particular color and texture on the outside. The security checkpoints at different neighborhoods of the city — the cell-surface receptors on different tissues — have been trained to recognize specific colors. The red checkpoints let in red containers. The blue checkpoints let in blue containers. A container painted the wrong color for a given neighborhood gets stopped at security, turned away, never enters. **Different capsid serotypes are different paint jobs**, and each paint job grants entry to different tissues.

Numerically, there are about thirteen natural AAV serotypes that have been seriously characterized — they're called AAV1 through AAV13, in roughly the order they were discovered or sequenced. Plus a slew of related "primate" AAVs that aren't usually given simple numbers but instead names like **AAVrh10** (from a rhesus monkey isolate), **AAV-DJ** (a synthetic hybrid we'll discuss), and engineered variants like **AAV-PHP.eB** that don't exist in nature at all. Let me walk through the ones you'll actually encounter, with what each is good for.

**AAV1** — broadly transduces muscle, central nervous system, salivary gland. One of the first to enter clinical use; an early approved AAV product called Glybera, for lipoprotein lipase deficiency, used AAV1. Glybera was later withdrawn from the market for commercial reasons, but it was a historical milestone.

**AAV2** — the most extensively studied serotype, the one whose ITRs we use universally, the one most lab work has historically defaulted to. AAV2 binds **heparan sulfate proteoglycans** on the cell surface, which are abundant on many cell types, so AAV2 has fairly broad tropism. It's particularly good for transducing the retina (subretinal injection) and certain brain regions (direct injection). It's also the capsid used in Luxturna, the first FDA-approved AAV gene therapy.

**AAV5** — binds **sialic acid** (specifically N-linked sialic acid) on cell surfaces. Good for retina, airway epithelium, central nervous system.

**AAV6** — closely related to AAV1 but distinct. Particularly good for skeletal and cardiac muscle, and for hematopoietic cells. The go-to capsid for transducing primary human T cells _ex vivo_, which makes it important in some CAR-T and gene-edited cell therapy workflows.

**AAV7** — good for muscle, especially after intramuscular injection.

**AAV8** — **the liver capsid**. AAV8 has a remarkable tropism for hepatocytes. Inject it intravenously, and almost all of it accumulates in the liver and gets taken up by hepatocytes very efficiently. This is the capsid behind Hemgenix, the hemophilia B therapy, which delivers factor IX to the liver so that the liver becomes the patient's factor-IX-producing factory. AAV8 is also good for skeletal muscle, heart, and certain CNS applications.

**AAV9** — **the systemic broad-tropism capsid**, and notably the one that **crosses the blood-brain barrier** in many species. Inject AAV9 intravenously and you get widespread transduction of heart, skeletal muscle, liver, and — uniquely — neurons in the central nervous system. AAV9 is the capsid behind Zolgensma, the spinal muscular atrophy treatment, which delivers a healthy SMN1 gene to motor neurons via intravenous injection. The fact that AAV9 crosses the blood-brain barrier well enough to reach motor neurons is what makes intravenous gene therapy for SMA possible at all — without that property, you'd need direct injection into the spinal cord, which is a very different clinical proposition.

**AAVrh10** — from rhesus monkey. Good for CNS, particularly via intrathecal or intracerebroventricular administration.

**AAV-DJ** — not a natural serotype; an engineered hybrid created by **DNA shuffling** of multiple natural serotypes (specifically a chimera of AAV2, AAV8, and AAV9 capsid sequences) and selection for broad tropism. AAV-DJ transduces a very wide variety of cell types in culture, which makes it popular for in vitro research.

**AAV-PHP.eB** — also engineered, also not natural. Selected from a library of capsid variants for the property of efficient blood-brain barrier crossing in mice. Inject PHP.eB intravenously in a mouse and you get spectacular labeling of neurons throughout the brain — the kind of thing that previously required injecting directly into brain tissue. Caveat: PHP.eB works much better in mice than in non-human primates or humans, which has been a major frustration for the field, and we'll talk about it in Segment 18.

\[Pause.\]

The key intuition I want you to take from this list is that **the capsid is the address label**. By picking a different capsid, you change where the virus goes. Your therapeutic gene is the message in the package; the capsid is the postal sorting code. And because the capsid is interchangeable in the production process — you just swap which Rep/Cap plasmid you put into your producer cells — you can take the same therapeutic construct and package it into AAV2 for retina, or AAV8 for liver, or AAV9 for systemic delivery, or PHP.eB for brain (in mice), without changing your transgene at all.

This modularity is one of the most beautiful things about the AAV platform. **One cargo. Many possible envelopes. Choose the envelope to choose the destination.** The cargo is your gene, the envelope is the capsid, and the postal system is the host's circulatory and tissue architecture. You design the cargo once, then test it in multiple envelopes to find which one delivers most efficiently to the tissue you care about.

We're going to spend the next segment going deeper on the question of how serotypes find their target tissues — what the molecular handshake looks like — and on which serotypes are practically used in the clinic for which tissues. But you should now have, in your head, the foundational picture: AAV is a modular system in which the capsid determines the destination, and changing capsid is as simple as changing one ingredient in the production recipe.

---

## SEGMENT 7 — Tissue tropism: AAV9 to brain, AAV8 to liver, AAV2 to retina

So we've established that different capsids go to different tissues. Now I want to spend a segment on _why_ — what's the molecular mechanism by which an AAV capsid "decides" which tissues to enter — and on the practical tissue-by-tissue map that you'll use when you're picking a capsid for a project.

The mechanism, in broad outline, is this. The cell surface of any tissue is covered with thousands of different proteins, sugars, and glycolipids — the **glycocalyx**, the sticky outer coat of a cell. Different tissues have different cell-surface compositions. The AAV capsid surface displays patches that bind certain of those cell-surface molecules with reasonable affinity. If a tissue presents the right molecule on its surface, the capsid binds, the cell internalizes the bound particle (typically via clathrin-mediated endocytosis or similar pathways), and the virus enters the cell. If the tissue doesn't present the right molecule, the capsid doesn't stick, and the virus circulates past.

So tissue tropism is really **receptor matching**. Each serotype has evolved to bind one or a few specific cell-surface molecules, and the distribution of those molecules across tissues determines where the virus accumulates.

\[Pause.\]

A few concrete examples to fix this in your mind.

**AAV2 binds heparan sulfate proteoglycans (HSPG)** as its primary cell-surface attachment receptor. HSPGs are highly expressed on many cell types, which is why AAV2 has fairly broad tropism in cell culture, but in vivo the distribution and accessibility of HSPGs varies — and in addition to HSPG, AAV2 needs a co-receptor (like the fibroblast growth factor receptor or integrins) to actually be internalized efficiently. So even though HSPG is everywhere, AAV2's in vivo tropism is more restricted than you might predict, and it has been particularly successful for delivery to the eye via subretinal injection.

**AAV5 binds sialic acids** — specifically N-linked sialic acids on glycoproteins. Sialic acid distribution shapes its tropism toward retina, airway epithelium, and certain CNS tissues.

**AAV6 binds both sialic acids and HSPG**, which combined with some post-entry properties makes it good for muscle and hematopoietic cells.

**AAV8** and **AAV9** were both originally found to bind a particular glycan called **N-linked galactose** as their primary receptor, although there's also a protein receptor called **AAVR** (a multi-pass transmembrane protein, technically KIAA0319L) that nearly all AAVs require for productive entry. AAVR is on the surface of most cell types, so it's not the main determinant of tropism, but it's required — knock out AAVR in cells, and almost no AAV serotype can transduce them. Then on top of AAVR, each serotype has its own preferred attachment molecule that biases it toward particular tissues. AAV9's galactose binding, combined with its ability to cross certain endothelial barriers, gives it the systemic and CNS distribution that makes it so clinically useful.

\[Pause.\]

Now let me give you the practical tissue map. If you're a researcher or a clinician trying to pick a capsid for a particular tissue, here is roughly what the field uses today.

**Liver** — AAV8. Or AAV5, or AAV-LK03 (a hybrid). AAV8 is the workhorse; intravenous injection puts the vast majority of dose into hepatocytes. This is why so many of the inherited metabolic and clotting disorders — hemophilia A and B, ornithine transcarbamylase deficiency, various lysosomal storage diseases — have been targeted with AAV8-based therapies.

**Retina** — AAV2 for retinal pigment epithelium (RPE) via subretinal injection. AAV8 for photoreceptors. Engineered variants like **AAV2.7m8** for intravitreal injection that better penetrates the retinal layers without requiring subretinal surgery. The retina is small, immune-privileged, and easy to inject locally with very small AAV doses, which has made it the first really successful clinical target.

**Central nervous system, broad** — AAV9 via intravenous, intrathecal, or intracerebroventricular routes for systemic CNS coverage. In mice, AAV-PHP.eB via tail vein gives spectacular brain-wide labeling, but as I'll repeat in Segment 18, PHP.eB doesn't translate well to primates.

**Central nervous system, focal** — direct injection of AAV2, AAV5, or AAVrh10 into specific brain regions. Used for things like delivering aromatic L-amino acid decarboxylase into the striatum for Parkinson's-related trials, or delivering gene therapy directly into the basal ganglia.

**Skeletal muscle, focal** — AAV1, AAV6, AAV8, AAV9 via intramuscular injection.

**Skeletal muscle, systemic** — AAV9, AAVrh74, or engineered "myotropic" capsids like AAV-MYO via intravenous injection. Used in Duchenne muscular dystrophy trials.

**Heart** — AAV9, AAV6, AAV1 via intracoronary or intravenous administration.

**Lung** — historically a hard target. AAV6 has some lung tropism. Engineered variants are being developed.

**T cells (_ex vivo_)** — AAV6 is the standard for ex vivo transduction of primary T cells, used in some next-generation gene-edited cell therapies.

\[Pause.\]

A practical note about how dose interacts with tropism. When we say AAV8 is "the liver capsid," we don't mean every single particle goes to the liver. We mean that when you administer a clinical-size dose intravenously, **a very large fraction** of the particles end up in hepatocytes — maybe seventy or eighty percent or more — and the remainder distributes to other tissues at much lower levels. Tropism is a statistical bias, not a deterministic address. And it can be modulated by the route of administration — direct intramuscular injection of AAV8 puts the dose in muscle, even though intravenous AAV8 would have gone to liver. The route is part of the targeting strategy.

It can also be modulated by the dose. At very high doses, the tropism-defining receptor on the preferred tissue gets saturated, and "spillover" to other tissues becomes significant. Clinical AAV gene therapies are typically administered at doses of **10^13 to 10^14 vector genomes per kilogram of body weight** — that's between ten trillion and a hundred trillion particles per kilogram, which for an adult means between 10^14 and 10^16 particles total in a single intravenous dose. Those numbers are enormous, and at those doses you do get distribution to multiple tissues even with the most selective capsids. The tropism wins on average, but the tails of the distribution matter.

Last point on tropism: it differs between species. AAV9 crosses the blood-brain barrier well in mice and reasonably well in non-human primates and infant humans, but adult human BBB penetration is more modest. AAV-PHP.eB, again, works astonishingly in mice but barely at all in primates. **Always check that the capsid tropism you're relying on has been validated in the species you actually care about.** Mouse-to-human translation of capsid tropism is one of the leading sources of clinical disappointment in AAV gene therapy.

---

## SEGMENT 8 — Production: triple transfection in HEK293 cells

Alright, theory aside. How do you actually _make_ AAV in a lab or in a factory? This is one of the most important practical pieces of the field, and the standard method is one of those beautiful pieces of biotech engineering that, once you see it, feels almost obvious. It's called **triple transfection**, and it works like this.

The strategy is: you take a producer cell — almost always **HEK293** or its derivative **HEK293T**, the same cultured human kidney cell line that does so much of biotech's heavy lifting — and you give that cell three plasmids all at once. Each plasmid carries a different piece of what the cell needs to make AAV. Individually, no one plasmid is sufficient. Together, the three plasmids supply everything required for the cell to build complete, infectious AAV particles. The cell does all the work. You just supply the ingredients and provide the kitchen.

\[Pause.\]

Here's the analogy. Triple transfection is like **baking a cake by giving three different mixing bowls to a kitchen and letting the kitchen combine them**. Bowl one has the flour and sugar — the cargo you want in the final product. Bowl two has the eggs and butter — the structural components of the cake. Bowl three has the leavening — the helper functions that make the rest react. You dump all three into the kitchen, walk away for a few days, and come back to find baked cakes. Except instead of cakes, the products are AAV particles, and instead of one cake per batch, you get something like 10^11 to 10^14 viral particles per liter of cell culture, depending on how well-optimized your process is.

Let me walk you through the three plasmids.

**Plasmid one: the transfer plasmid.** This is your therapeutic construct, the one you actually care about. It contains your gene of interest, flanked by the AAV2 ITRs, plus whatever promoter, polyadenylation signal, and other regulatory elements you've designed. The transfer plasmid is essentially "the cargo plus the packaging labels." When the cell makes AAV particles, it's the DNA between the ITRs on this plasmid that gets cut out, replicated, and packaged into the capsids. Everything between the ITRs ends up inside the final virus.

**Plasmid two: the Rep/Cap plasmid (also called the packaging plasmid).** This carries the natural AAV genes _rep_ and _cap_, but with their natural ITRs removed. Why is this important? Because without the ITRs flanking _rep_ and _cap_, this plasmid's DNA cannot itself be packaged into capsids — only DNA flanked by ITRs can be packaged, and only the transfer plasmid has the ITRs. So _rep_ and _cap_ get expressed as proteins, those proteins do their jobs (replicating the transgene from the transfer plasmid and assembling capsids), but the genes for those proteins do not end up inside the final viral particles. **The capsid genes are the factory, not the product.** That separation — putting the production machinery on one plasmid and the cargo on another — is what makes the final AAV particles **replication-incompetent**. They have the capsid proteins on their outside, the therapeutic gene on their inside, but they do not carry the genes needed to ever make more of themselves. Critical safety feature.

The Rep/Cap plasmid is also where you choose your serotype. To make AAV2, you use a Rep/Cap plasmid where _cap_ encodes AAV2 capsid proteins. To make AAV9, you use one where _cap_ encodes AAV9 capsid proteins. To make PHP.eB, you use one with the engineered PHP.eB _cap_ gene. Same procedure, different recipe ingredient, different output.

**Plasmid three: the helper plasmid.** This provides the adenoviral helper functions that AAV naturally requires for productive replication. Specifically, the helper plasmid carries the adenovirus genes **E2A, E4, and VA RNA**, which together support AAV replication and capsid assembly. It does _not_ carry the adenoviral gene E1, which would be a serious safety issue — instead, E1 is supplied by the HEK293 cell line itself, because HEK293 cells were originally created by stably integrating a piece of adenovirus DNA containing E1 into their genome. So the cell line provides one piece of the helper, and the helper plasmid provides the rest. This was an extremely clever piece of engineering — in the early days of AAV production, people used to co-infect cells with actual adenovirus to provide helper functions, which meant their final AAV preps were contaminated with infectious adenovirus. Replacing the live helper virus with a helper plasmid that supplies only the necessary genes — and not the genes that would let adenovirus replicate — eliminated that contamination.

\[Pause.\]

So you dump these three plasmids onto your HEK293 cells, typically using polyethylenimine (PEI) or calcium phosphate as the transfection reagent. The cells take up the plasmids. Within a few hours, the cells start expressing _rep_ and _cap_ from the Rep/Cap plasmid, and the helper functions from the helper plasmid. Rep proteins recognize the ITRs on the transfer plasmid, start replicating the transgene cassette, and produce many copies of single-stranded DNA flanked by ITRs. Cap proteins assemble into empty capsid shells. Then the single-stranded transgene DNA gets threaded into the empty capsids — Rep proteins doing the threading — and you end up with full AAV particles containing your transgene.

Two or three days after transfection, you have producer cells full of AAV particles. Some particles are released into the culture medium; many are still inside the cells. You harvest both — typically by lysing the cells (freeze-thaw cycles, detergent, or osmotic shock) to release the intracellular virus, then combining the cell lysate with the spent medium and processing the whole mixture for purification. That processing is the next segment.

\[Pause.\]

A few practical numbers to fix your intuition. A typical research-scale prep starts with a few large flasks or roller bottles of HEK293 cells — let's say 200 million cells total — and produces something like 10^11 to 10^12 vector genomes after purification, enough for a few mouse experiments. A clinical-scale prep, run in suspension culture in bioreactors of 200 or 2000 liters, can produce 10^16 to 10^17 vector genomes per batch. The yield per cell, though, has been frustratingly hard to push up — somewhere around 10^4 to 10^5 functional particles per cell, depending on conditions, with a lot of variation between serotypes and constructs. AAV manufacturing yield is a major area of active engineering, because the doses required for systemic gene therapy in adult humans are enormous, and meeting those doses at scale and at affordable cost is one of the main bottlenecks of the entire field. We'll come back to that in Segment 17.

---

## SEGMENT 9 — Purification: iodixanol gradients, AEX chromatography, and what the prep looks like

So you have your transfected cells, three days post-transfection, full of AAV particles. Now what? You can't just inject crude cell lysate into a patient. You have to **purify** the virus — separate the actual AAV particles from everything else in the soup. Everything else includes: cellular debris, cellular DNA and proteins, residual plasmid DNA, free capsid proteins that didn't assemble, **empty capsids** that assembled but didn't package any DNA, partially packaged capsids, helper-plasmid-derived proteins, and so on. Purification is about isolating the full, intact, transgene-containing AAV particles from that complex mixture.

There are two main approaches that the field uses, often in combination: **density gradient ultracentrifugation** and **ion exchange chromatography**. Let me describe each.

\[Pause.\]

**Density gradient ultracentrifugation.** The principle is that AAV particles have a characteristic density — they sink to a specific level when spun in a density gradient. A "density gradient" is a tube of liquid where the density increases from top to bottom — light at the top, heavy at the bottom. You load your crude virus prep on top, you spin the tube at very high speed (around 350,000 g) for several hours, and gravity drives every particle in the mixture to the position in the gradient that matches its own density. AAV particles, having a particular protein-to-DNA ratio, settle at a specific density and form a visible band in the gradient. You stick a needle in the side of the tube, pull off the band, and you have purified AAV.

The classical material used for this gradient is **cesium chloride** — CsCl — which forms beautiful, well-resolved gradients but has the unfortunate property of being mildly toxic to cells, so you have to dialyze it out before using the virus. More recent practice has moved to **iodixanol**, sold under the trade name OptiPrep, which forms equally good gradients but is non-toxic and approved for clinical use as a contrast agent. An **iodixanol step gradient** — where you layer solutions of 15%, 25%, 40%, and 60% iodixanol on top of each other in a centrifuge tube, then load your crude prep on top and spin — has become the standard research-lab purification method. The AAV particles end up at the interface between the 40% and 60% layers, and you pull off that interface with a syringe.

One of the most useful things about iodixanol gradients is that they actually **separate full capsids from empty capsids**. A full capsid — one that contains a vector genome inside — is denser than an empty capsid, because DNA is denser than the equivalent volume of empty space inside a protein shell. So full and empty capsids settle at slightly different densities and you can preferentially harvest the full ones, which are the only ones that will actually deliver your gene. This matters because **AAV preps are typically a mixture of full and empty capsids**, and the empty ones are essentially worthless cargo — they take up dosing capacity, they trigger immune responses, but they deliver no transgene. The full-to-empty ratio in a typical research prep might be anything from 10% full to 90% full depending on the construct and conditions. Clinical-grade preps target a high full-capsid fraction, often >70%, because empty capsids contribute to immunogenicity without contributing to therapy.

\[Pause.\]

**Ion exchange chromatography**, abbreviated **AEX** for anion exchange chromatography in the AAV context. The principle here is that AAV capsids have a net negative charge at neutral pH (so do empty ones, but with subtly different surface charge distribution than full ones). You pass your prep over a column packed with a positively charged resin — the resin holds onto the negatively charged capsids while letting most other contaminants flow through. Then you elute the bound capsids by raising the salt concentration of your buffer, which competes with the capsid for binding to the resin. As you ramp salt slowly, different things elute at different salt concentrations, and — if you've optimized the column and the gradient — full capsids elute at a slightly different salt concentration than empty capsids. So AEX can also enrich for full capsids.

AEX is the preferred method for **scalable, GMP-compliant production** because it doesn't require ultracentrifuges — which are limited in capacity and difficult to operate at clinical scale — and it lends itself to flow-through manufacturing. Most clinical AAV production processes use some combination of chromatography steps: affinity chromatography (with a resin that specifically binds AAV capsids) for capture, followed by AEX for polishing and full-empty separation, followed by buffer exchange and concentration.

\[Pause.\]

What does a purified AAV prep look like, physically? Honestly, it looks like a tiny bit of clear liquid. AAV is so small that even at concentrations of 10^12 particles per milliliter — which is high — you can't see any cloudiness or color. A typical research-scale prep is a few hundred microliters of clear, slightly viscous solution. You wouldn't know there was anything in it by looking. To verify that there's actually virus in there, you have to do molecular assays — and that's the topic of Segment 10.

Before we break, let me give you a brief sense of quality control. A clinical AAV product is characterized by a battery of analytical tests: **vector genome titer** (qPCR or ddPCR), **capsid titer** (ELISA), **full-to-empty ratio** (often by analytical ultracentrifugation, charge-detection mass spectrometry, or electron microscopy), **identity** (confirming the right transgene by sequencing or restriction digest), **purity** (host cell protein, residual plasmid DNA, residual helper proteins), **potency** (does the virus actually transduce cells and produce the expected protein), and **safety** (replication-competent AAV testing, sterility, endotoxin). That QC battery has gotten extremely sophisticated as the field has matured, because regulatory agencies want to know exactly what you're injecting into patients.

Alright. We are now an hour in, more or less. We have covered: why AAV won, the wild virus, the anatomy of the particle, the ITRs as the packaging label, the 4.7 kb cargo limit, the serotypes and capsid as address label, the practical tissue tropism map, the triple transfection production scheme, and how we purify what comes out. That is, broadly, **how AAV exists and how we make it**. The second half of the lecture is going to shift toward how we engineer and use it in the clinic: titering and quality, self-complementary AAV, capsid engineering and directed evolution, the immunity problem, the approved gene therapies, AAV for CRISPR, dual-vector strategies for big genes, the manufacturing bottleneck, and where the field is heading. Take ten minutes. Stretch, drink water, ask me anything when we come back.

\[BREAK\]

---

## SEGMENT 10 — Titering AAV: qPCR vs ELISA vs functional

Welcome back. Let's restart with what is, on the surface, a boring topic — how we measure how much AAV is in a tube — but which turns out to be one of the most consequential and most argued-about subjects in the entire field. Because **the number you put on a tube of AAV depends on how you measured it**, and different methods give different numbers, sometimes by an order of magnitude. If you dose a mouse or a patient based on the wrong number, you've either under-dosed (no effect) or over-dosed (toxicity). So titering matters more than it sounds.

There are three main approaches, and they measure three different things.

\[Pause.\]

**Method one: qPCR or ddPCR.** This measures **vector genomes** — the number of copies of your transgene DNA in the prep. You release the DNA from the capsids by treating with proteinase (or just by heating), then run a quantitative PCR reaction with primers that amplify a known region of your transgene (often within the ITRs or within the transgene's coding sequence). The amount of amplification, calibrated against a standard curve of known DNA quantities, gives you the number of genome copies per microliter. **ddPCR (digital droplet PCR)** is a more recent variant that partitions the reaction into thousands of tiny droplets, counts positive droplets, and gives you an absolute count without needing a standard curve. ddPCR has become the gold-standard titering method because it's more reproducible across labs.

What does the number tell you? It tells you **how many vector genomes are in your prep**. That's typically reported in units of **vector genomes per milliliter** (vg/mL), with research preps commonly in the 10^12 to 10^13 vg/mL range and clinical lots being made in much larger volumes at similar concentrations. Doses to patients are reported in **vector genomes per kilogram** (vg/kg) of body weight; Zolgensma, for example, is dosed at approximately **1.1 × 10^14 vg/kg**, meaning roughly 7.5 × 10^15 vector genomes for an average 7 kg infant. Those are extraordinary numbers.

But here's the catch: **qPCR counts every vector genome, regardless of whether it's in a functional capsid or not**. Free DNA, partially packaged genomes, fragmented genomes — they all contribute. So qPCR is a measure of "how much transgene DNA is in this tube" — not necessarily "how many functional particles."

**Method two: ELISA for capsid protein.** This measures **total capsids** — full plus empty plus everything in between. You use an antibody specific to your AAV capsid serotype (commercial ELISA kits are available for the common ones — A20 antibody for AAV2, ADK8 for AAV8, ADK9 for AAV9, etc.) to detect and quantify capsid protein. The number you get is **capsid particles per milliliter** (cp/mL). Critically, **this includes both full and empty capsids**, because the antibody binds the outside of the capsid and doesn't care whether there's DNA inside.

The ratio of capsid titer (from ELISA) to vector genome titer (from qPCR) tells you the **full-to-empty ratio of your prep**. If you have 10^13 cp/mL by ELISA and 10^12 vg/mL by qPCR, then only one in ten of your capsids is full. That's a not-great prep. If they match — 10^13 cp/mL and 10^13 vg/mL — every capsid carries a genome, which is essentially impossible in practice but is the theoretical ideal. Most clinical preps target full fractions of 50% or higher.

**Method three: functional or transducing titer.** This actually measures **biological activity**. You take your AAV prep and apply it to a cultured cell line, wait a day or two, and count how many cells express the transgene (if your transgene is GFP, you count green cells; if it's a reporter enzyme, you measure the enzyme activity). You report the result as **transducing units per milliliter** (TU/mL). This number is almost always lower than the genome titer or capsid titer, because not every full capsid actually succeeds in transducing a cell — many particles get internalized but never deliver their DNA to the nucleus, or deliver it but the gene never gets expressed.

The ratio of transducing units to vector genomes is your **particle-to-infectivity ratio**, and for AAV this ratio is typically very poor — somewhere between 10:1 and 1000:1 vector genomes per transducing unit, depending on cell type, serotype, and assay conditions. That means **the vast majority of your AAV particles are not biologically active** in the assay. Some of that is the limit of the assay; some is real biology — most AAV particles dead-end in the cell somewhere along the entry pathway. This is one of the reasons we have to dose at such high vector-genome numbers.

\[Pause.\]

So when somebody hands you a tube and says "this is 10^13 of AAV," your first question should be: **10^13 of what?** Vector genomes? Capsids? Transducing units? Each of those numbers is meaningful, but they describe different things, and the right one depends on what you're trying to do. For dosing in animals or patients, vector genomes (qPCR/ddPCR) is the universal standard. For understanding how good your prep is, the ratio of vector genomes to capsids tells you about full-to-empty. For predicting how well your virus will work biologically, the transducing titer is closest to what you actually care about, but it's also the noisiest measurement.

This sounds like obsessive detail, but it's the source of an astonishing amount of confusion in the literature. Two papers reporting "similar doses" of AAV may, depending on titering methods, actually have used doses that differ by ten-fold. The field has slowly converged on ddPCR for vector genome quantification as the standard reporting unit, but you still have to read papers carefully to know what you're really comparing.

---

## SEGMENT 11 — Single-stranded vs self-complementary AAV: speed versus cargo

I mentioned earlier — back in Segment 3 — that AAV packages a single-stranded DNA genome, and that when the virus enters a cell, that single strand has to be converted to double-stranded DNA before the gene can be expressed. That conversion is rate-limiting, and it introduces a delay between AAV delivery and the onset of gene expression. For many applications, that delay is fine. For some applications, it's a problem. So the field developed a clever workaround called **self-complementary AAV**, abbreviated **scAAV**, that bypasses the second-strand synthesis bottleneck by pre-folding the cargo into double-stranded form before packaging. The trade-off, as you might expect, is in cargo capacity.

Let me explain how scAAV actually works, because the idea is elegant and worth grasping.

\[Pause.\]

In normal single-stranded AAV — **ssAAV** — the construct between the two ITRs is, well, the construct: a promoter, your gene, a polyA, all in normal arrangement, packaged as a single strand of about 4.7 kb. Once that single strand enters a cell, the cell has to make a complementary strand using its own DNA polymerase, and only then does the now-double-stranded DNA become a template for transcription.

In self-complementary AAV, you do something different. You make a construct between the two ITRs that is **a tandem inverted repeat of itself** — your promoter-gene-polyA cassette, immediately followed by the reverse complement of the same cassette. So the construct reads, conceptually, "cassette → mutated middle ITR → cassette-reverse-complement." When this construct gets packaged and delivered to a cell, the single strand that comes out of the capsid contains, at one end, your gene cassette, and at the other end, the reverse complement of the same cassette. **Because those two halves are complementary to each other, the single strand spontaneously folds back on itself and base-pairs into a double-stranded hairpin**. No DNA synthesis required. The cell immediately has double-stranded DNA available for transcription, and gene expression starts very fast — sometimes within hours rather than days.

The mutated middle ITR I mentioned is the key engineering trick. In normal AAV replication, the natural process involves resolving certain replication intermediates at the ITR. If you cripple the ITR's resolution site (by a specific small mutation), the replication intermediate fails to resolve, and you end up packaging a double-length, self-complementary structure into the capsid. So the engineering is: mutate one ITR's terminal resolution site, design your construct as a single cassette, and AAV's own replication machinery folds it into a double-stranded product during packaging.

\[Pause.\]

Here's the analogy. **Self-complementary AAV is preassembled cargo.** Imagine you're shipping a piece of furniture that normally arrives as a flat box of parts that the recipient has to assemble — that's ssAAV; the cell has to do work to make it usable. Self-complementary AAV is the same furniture but pre-assembled at the factory and shipped ready to use. The recipient saves time. But pre-assembled furniture takes up more shipping volume — you can't fit as many of them in a truck. So scAAV uses up the same packaging capacity for half the unique cargo, because both halves of the strand are essentially the same information, mirror-imaged.

Specifically, the effective cargo capacity of scAAV is about **2.4 kilobases**, roughly half of the 4.7 kb of ssAAV. So scAAV is great when (a) your gene is small enough to fit in 2.4 kb with regulatory sequences and (b) you want fast onset of expression. It's not an option when your gene is larger than that.

When is scAAV preferred clinically? Several of the approved AAV gene therapies use it. **Zolgensma** uses scAAV9 to deliver SMN1 to motor neurons — SMN1 is small enough (about 1.5 kb) and fast onset of expression is desirable for treating a rapidly progressive disease. **Luxturna** uses single-stranded AAV2 (RPE65 is closer to the size limit at 1.6 kb, plus regulatory elements). The choice between ss and sc depends on size constraints and onset speed.

A subtler point: scAAV tends to give **higher peak expression** per vector genome than ssAAV, because every particle that enters a cell can immediately express, whereas with ssAAV many particles get stuck waiting for second-strand synthesis and may never express within the relevant time window. So for the same dose in vector genomes, scAAV often produces more protein. But again — only for small enough genes.

\[Pause.\]

Self-complementary AAV is one of the cleverest pieces of vector engineering in the entire AAV story. It exploits the natural replication mechanism — specifically the ITR resolution step — to deliver a pre-doubled product, simply by deliberately breaking one of the resolution sites. It's the kind of trick that you look at once and think, "of course." It also illustrates a recurring theme: AAV engineering is often a matter of **finding small modifications that work with the natural biology rather than against it**. The virus's own machinery does most of the work; you just nudge it.

---

## SEGMENT 12 — Capsid engineering and directed evolution: redesigning the shipping container

We've talked about the natural serotypes. Now I want to talk about how we go beyond nature — how we design and select new capsids that nature never produced, that target tissues nature never optimized for, and that solve problems the natural serotypes can't solve.

The motivation is straightforward. The natural serotypes are good at some things. AAV8 is great for liver. AAV9 is great for systemic CNS, in some species. But the natural repertoire doesn't perfectly cover every clinical need. There are tissues — adult human brain via intravenous administration, kidney, lung, certain populations of immune cells — where no natural serotype works really well. There are situations where you want a capsid that **evades pre-existing antibodies** against the natural serotypes. There are situations where you want **enhanced specificity** for a single cell type to reduce off-target effects. Capsid engineering is the toolbox for going after these goals.

\[Pause.\]

There are two main approaches: **rational design** and **directed evolution**, and most of the interesting work uses some combination.

**Rational design** means: you know something specific about capsid biology, you make a targeted modification based on that knowledge, you test the result. Example: you know that AAV2 binds heparan sulfate via specific arginine residues on the capsid surface. You mutate those arginines and your capsid loses heparan sulfate binding, which redirects its tropism away from heparan-rich tissues. Or: you know that certain capsid surface loops are recognized by neutralizing antibodies. You swap those loops with sequences from a different serotype, and you get a capsid that escapes antibodies against the parent serotype. Rational design is powerful when you have specific knowledge to act on, but it's slow and limited by what you can predict in advance.

**Directed evolution** is more like rolling dice — many, many dice. You generate an enormous library of randomly varied capsid sequences, you put that library into your selection system, and you let the system pick the winners. The library can be generated in several ways. **DNA shuffling** takes the capsid genes from multiple natural serotypes, chops them up into small fragments, and reassembles them into chimeric capsid genes that draw bits from each parent — like genetic decoupage. The product is a library of chimeric capsids, each one a different mix of pieces from the parents. **Random mutagenesis** introduces point mutations throughout the capsid gene by error-prone PCR. **Peptide insertion** systematically inserts random short peptide sequences into specific surface-exposed loops of the capsid, displaying a different little "decoration" on each variant.

Once you have your library — typically containing 10^6 to 10^9 different capsid variants — you put it through a **selection** that rewards variants with the property you want. For tissue tropism selection, you inject the library into an animal, wait, harvest the target tissue, and PCR-amplify out the capsid genes from particles that successfully reached that tissue. Then you take those enriched genes, package them again, and do another round. After several rounds of selection-and-amplification, the library has been winnowed down to the variants that are best at reaching your target tissue. You sequence the top survivors, characterize them individually, and pick a winner.

\[Pause.\]

Here is the analogy. Directed evolution is **redesigning the container's surface by making millions of slightly different ones, painting each one a slightly different shade, dropping them all into the city, and seeing which ones slip past customs into the neighborhoods you couldn't previously reach**. You don't have to know in advance which shade will work. You just have to be able to recover the winners after the fact. The Darwinian search does the design for you.

The most famous example, and one of the most important capsids in modern neuroscience research, is **AAV-PHP.B and its descendant AAV-PHP.eB**. These were produced by Viviana Gradinaru's lab using a method called **CREATE** (Cre-recombination-based AAV targeted evolution). The idea: you make a peptide-insertion library on the AAV9 capsid, you inject it into mice that express Cre recombinase in a specific cell type (in this case, GFAP-Cre mice with Cre in astrocytes throughout the brain), and any AAV that delivers its genome into a Cre-expressing cell gets its genome recombined into a form that can be selectively PCR-amplified back out. So you preferentially recover the capsid genes from particles that successfully reached the target cell type. After several rounds, you have a winning capsid. PHP.B, and especially the second-generation PHP.eB, transduce neurons throughout the mouse brain after a simple intravenous tail-vein injection at a previously unthinkable efficiency. That capability transformed mouse neuroscience — you can now deliver an opsin or a calcium indicator brain-wide without doing brain surgery.

Other notable engineered capsids: **AAV-DJ**, produced by DNA shuffling of eight different serotypes, with very broad in vitro tropism. **AAV-7m8**, produced by random peptide insertion and selection on the retina, which enables intravitreal-injection-based gene delivery to photoreceptors without requiring subretinal surgery. **AAV-Anc80**, a "reconstructed ancestral" capsid built by computational inference of what the common ancestor of modern AAV serotypes might have looked like — and it turns out the ancestral form has excellent properties for cochlea and inner ear, which has applications in genetic deafness. And dozens of others, with new ones being reported regularly.

\[Pause.\]

A practical caveat I have to repeat: **capsid tropism that's been selected in one species often doesn't translate to another**. PHP.eB is the cautionary tale. In mice, it is a miracle. In macaques, it doesn't cross the blood-brain barrier nearly as efficiently. In humans, it has essentially the same poor BBB penetration as AAV9. The reason turned out to be that PHP.eB's enhanced mouse tropism depends on binding to a specific mouse cell-surface protein — **LY6A**, a mouse-specific GPI-anchored protein — that doesn't exist in primates. The capsid was evolved on a mouse-specific receptor that happens to be present at the blood-brain barrier, and that receptor doesn't exist in humans. The lesson: if you want a capsid that works in humans, you have to either select on a human-relevant model (which is hard — humanized mice, non-human primates, in vitro human tissue models) or include human-specific selection steps in your evolution scheme. This is a very active area of capsid engineering today, and the next generation of PHP-like capsids — selected on primate or human tissue from the start — are starting to deliver on the original promise.

Directed evolution of AAV capsids is, in a sense, **biotechnology recapitulating natural evolution at industrial speed**. Natural evolution shaped the existing serotypes over millions of years for the particular ecological niches AAV inhabits. We're doing the same thing — variation and selection — but compressed into months, and aimed at niches that have nothing to do with AAV's natural lifestyle and everything to do with what humans want to deliver where. It's a beautiful blending of evolutionary biology and engineering.

---

## SEGMENT 13 — Pre-existing immunity and neutralizing antibodies: the dosing problem

I want to spend this segment on what is, arguably, the single biggest clinical headache in AAV gene therapy today. It's not the cargo limit. It's not the manufacturing yield. It's the **immune system**, and specifically, the fact that **most adult humans have already met AAV before**, and their immune systems remember.

Here is the issue. Wild AAV — the non-pathogenic version of the virus we discussed in Segment 2 — circulates in the human population. Most of us encounter it during childhood. Our immune systems respond to it: we make antibodies against the AAV capsid. Those antibodies persist, often for the rest of our lives. So by the time you're an adult, depending on which serotype and which population, somewhere between **30% and 70% of people have detectable circulating antibodies** that can neutralize AAV. For some serotypes — AAV2 especially — the seroprevalence is extremely high. For others, like some of the less common serotypes, it's lower but still substantial.

Now imagine you administer engineered AAV — packaged in, say, AAV9 capsid — to a patient whose immune system has antibodies against AAV9. What happens? The antibodies grab the capsid in the bloodstream before it can reach the target tissue. The capsid gets opsonized, taken up by macrophages, destroyed. The therapeutic dose never arrives where it needs to go. **The shipping container gets intercepted at the border**.

\[Pause.\]

This is a real, hard, clinically important problem. Almost every approved AAV gene therapy has, in its product labeling, an exclusion criterion for patients with anti-capsid antibodies above a certain titer. Patients are screened for neutralizing antibodies before treatment, and seropositive patients are usually excluded. In Hemgenix trials, for example, patients with detectable anti-AAV5 antibodies were screened out. This means a substantial fraction of patients who would otherwise benefit from these therapies cannot receive them, simply because their immune systems have already met AAV.

Worse, **once you've received an AAV-based therapy, you become highly seropositive to that capsid**. The dose itself is so large — 10^13 to 10^14 particles per kilogram — that even patients who started seronegative develop robust neutralizing antibody titers within weeks. So **AAV gene therapies are typically one-time treatments**. You can't redose with the same capsid, because the patient now has antibodies. If a therapy wears off — and some do, slowly, as cells turn over — you may not be able to give the patient another dose, ever. This is a deeply uncomfortable property for a class of drugs to have.

\[Pause.\]

What are the strategies for dealing with pre-existing immunity?

**Switch serotype.** If a patient has antibodies to AAV2 but not AAV8, you use an AAV8-based vector. Antibodies are mostly serotype-specific (though there is some cross-reactivity). This strategy works for individual patients but doesn't fundamentally solve the population-level problem, because every patient has a different antibody profile.

**Use engineered capsids that evade common antibodies.** This is one of the active applications of directed evolution. You can select capsid libraries against pooled human serum — keep only the variants that aren't bound by the antibodies in the serum. The product is a capsid that escapes pre-existing immunity. Several such "immune-evasive" capsids are in development.

**Transiently suppress the immune system.** Pretreat the patient with immunosuppressive drugs around the time of dosing, to prevent both pre-existing antibodies from acting and new antibodies from forming. This is used in some trials, but it carries its own risks.

**Plasmapheresis.** Physically remove antibodies from the patient's blood before dosing, by filtering plasma through a column that captures immunoglobulins. This works but is invasive and short-lived.

**Engineered Fc-degrading enzymes.** Inject an enzyme (like the bacterial IdeS, marketed as imlifidase) that specifically cleaves IgG molecules, transiently eliminating circulating antibodies for a window of hours to days, during which you administer the AAV. This is in clinical development.

\[Pause.\]

Beyond the antibody problem, there's also a **T-cell response** to AAV capsids that can clear AAV-transduced cells weeks after administration. This was famously observed in early hemophilia B trials with AAV2, where treated patients had transient factor IX expression that then declined as T cells, recognizing capsid peptides displayed on transduced hepatocytes, killed those cells. The field has partially addressed this by using transient prophylactic steroids around the dosing period, which has substantially improved durable expression in current hemophilia trials.

And there's the issue of **complement activation** at very high IV doses, which has been implicated in some serious adverse events including thrombotic microangiopathy. The high-dose AAV9 used for Zolgensma in older, heavier patients has been associated with rare cases of severe complement-mediated complications, including a small number of fatalities, which has led to refinements in patient selection and prophylactic regimens.

The bottom line is that **AAV is well-tolerated by the standards of viral vectors, but it is not invisible to the immune system**, and managing that response is one of the central clinical challenges. The field has gotten much better at it over the past decade, but immunity is still the single biggest factor limiting which patients can receive AAV gene therapy and how effective those therapies are.

---

## SEGMENT 14 — Approved AAV gene therapies: Luxturna, Zolgensma, Hemgenix, Roctavian

Let's now talk about the proof. The reason AAV is taken seriously as a clinical platform is that it has actually cured people. Not in trials, not in mice — in patients, with FDA-approved products. Let me walk through the major approvals and what each tells us.

\[Pause.\]

**Luxturna (voretigene neparvovec)**, approved by the FDA in 2017, was the first gene therapy of any kind to receive full FDA approval for an inherited disease. It treats a form of **Leber congenital amaurosis** caused by biallelic mutations in the **RPE65** gene, which encodes a retinal protein essential for the visual cycle. Patients with this disease are born with severely impaired vision and progress toward complete blindness. Luxturna delivers a healthy copy of RPE65 via **AAV2** by **subretinal injection** — the surgeon literally lifts up the retina and injects the virus into the subretinal space, where it transduces the retinal pigment epithelium cells underneath. After treatment, patients regain meaningful vision, often dramatically — children who couldn't navigate obstacles in dim light can suddenly see.

Luxturna was important not just because it worked, but because it demonstrated that the regulatory pathway was tractable. The eye was a sensible first target — it's small (so the required dose is tiny, maybe 10^11 vector genomes), it's immune-privileged (so anti-capsid responses are blunted), and there are clear functional readouts (vision tests). The success of Luxturna opened the door for everything that followed.

\[Pause.\]

**Zolgensma (onasemnogene abeparvovec)**, approved in 2019, treats **spinal muscular atrophy type 1**, a devastating disease in which infants lack functional **SMN1** protein, leading to progressive motor neuron death and, untreated, death within two years. Zolgensma delivers a healthy SMN1 gene via **self-complementary AAV9** by a single **intravenous infusion**. The AAV9 capsid carries the gene across the blood-brain barrier (well enough in infants — pediatric BBB penetration is better than adult) to motor neurons in the spinal cord, where SMN1 expression rescues the cells. Treated infants survive and meet motor milestones their untreated peers do not.

Zolgensma is also famous as **the most expensive drug ever sold** — list price around 2.1 million dollars per dose. The economics of one-time gene therapies are still being worked out. The cost reflects, in part, the difficulty of manufacturing the enormous dose required for a systemic treatment in even a small infant.

\[Pause.\]

**Hemgenix (etranacogene dezaparvovec)**, approved in 2022, treats **hemophilia B** by delivering a hyperactive variant of **factor IX** via **AAV5** to the liver, by intravenous administration. The liver becomes a factory for the patient's own factor IX. A single treatment can free patients from regular prophylactic factor IX infusions for years.

**Roctavian (valoctocogene roxaparvovec)**, approved in 2022, is the analogous product for **hemophilia A**, delivering **factor VIII** via **AAV5** to the liver. Factor VIII is a larger protein than factor IX, and squeezing the gene into AAV capacity required substantial engineering — using a truncated B-domain-deleted variant of factor VIII to fit within the 4.7 kb limit.

There are several more recently approved AAV gene therapies — **Elevidys** for Duchenne muscular dystrophy (delivering a micro-dystrophin via AAVrh74), **Beqvez** as a second hemophilia B therapy, and a steady stream of new approvals. The field is going from "first one ever approved" in 2017 to a regular cadence of new approvals each year.

\[Pause.\]

The pattern across all of these is the same. **A genetic disease where loss of a single small protein causes the problem. A tissue that AAV can access. A capsid that targets that tissue. A gene small enough to fit. A single dose, delivered once.** When those conditions line up, AAV gene therapy can be transformative. Children who would have been blind, can see. Infants who would have died of SMA, walk. Hemophilia patients who needed weekly infusions, live without them.

These are the proofs that the platform works. **Inherited disease can be cured by walking a healthy gene into the right tissue with the right vehicle.** That is the promise of gene therapy made real, and AAV is the vehicle that finally delivered on it.

---

## SEGMENT 15 — AAV for CRISPR delivery: fitting Cas9 into the trunk

Now let's talk about a use of AAV that is rapidly becoming the second major application after gene replacement: **delivering CRISPR**. The combination of AAV as a vehicle and CRISPR as a payload is one of the most promising therapeutic platforms in development today, but it runs immediately into the cargo limit problem we've been discussing.

Here's the issue. The standard Cas9 enzyme — **SpCas9** from _Streptococcus pyogenes_, the workhorse of the CRISPR revolution — is about **4.2 kilobases** of coding sequence. Add a promoter (200-800 bp), a polyadenylation signal (100-500 bp), the U6 promoter for the sgRNA (~250 bp), and the sgRNA itself (~100 bp), and you blow past the 4.7 kb AAV limit. So you cannot fit a complete SpCas9 + sgRNA expression cassette in a single AAV. Period.

What do you do? Three strategies, all in active clinical use or development.

\[Pause.\]

**Strategy one: use a smaller Cas9.** Other bacteria have Cas9 variants that are substantially smaller. **SaCas9** from _Staphylococcus aureus_ is about 3.2 kb — small enough to fit in a single AAV with a promoter and sgRNA. **CjCas9** from _Campylobacter jejuni_ is even smaller at about 2.9 kb. These smaller Cas9s have somewhat different PAM (protospacer adjacent motif) requirements — meaning they recognize different short sequences adjacent to the target — so they're not always a drop-in replacement for SpCas9, but for many editing applications they work well. Editas Medicine's clinical program for sickle cell disease uses SaCas9 in AAV6 for ex vivo editing of hematopoietic stem cells.

**Strategy two: use two AAVs in parallel.** Put SpCas9 in one AAV particle and the sgRNA(s) in another. Co-administer both. Cells that get both will edit; cells that get only one won't. The efficiency penalty for needing both vectors to land in the same cell is meaningful but not catastrophic, especially at high doses where most target cells get multiple particles. This is a workable strategy for in vivo delivery and is used in several preclinical programs.

**Strategy three: use base editors or prime editors, which are bigger but enable different chemistry.** These Cas9-fusion enzymes are typically too big for single AAV (often >5 kb), so they require dual-AAV strategies, which brings us to the next segment.

\[Pause.\]

Beyond Cas9 delivery, AAV is also used for **non-editing CRISPR applications**: catalytically dead Cas9 (dCas9) fused to transcriptional activators (CRISPRa) or repressors (CRISPRi) for tunable gene expression modulation; epigenetic editors that modify chromatin without changing DNA sequence; and various combinations. Each comes with its own size challenges and requires careful AAV design.

The convergence of CRISPR and AAV is creating a new class of therapies that go beyond simple gene replacement. **Instead of adding a healthy copy of a gene, you can repair the broken copy in place.** This matters because for many diseases, regulatory expression of the gene from its native locus is important — you can't just blast in a constitutive overexpression cassette. In vivo CRISPR via AAV is the technology that lets you do precise, targeted, native-context gene correction in the actual tissue where the disease lives. There are now early clinical trials using AAV-delivered CRISPR for inherited retinal diseases (Editas/Allergan's EDIT-101 for CEP290-related LCA, using SaCas9 in AAV5 by subretinal injection), and the next decade will tell us how broadly the platform can deliver.

---

## SEGMENT 16 — Dual AAV strategies for large genes: split protein, intein, trans-splicing

So your gene is too big for one AAV. Now what? This is the **dual AAV** problem, and the field has developed three increasingly clever approaches to solve it. Let me walk through them.

\[Pause.\]

**Approach one: dual-vector trans-splicing.** Split your gene at the DNA level. Put exons 1 through N on one AAV, exons N+1 through end on another AAV. Each AAV also carries a splice donor or splice acceptor sequence at the split point. When both AAVs enter the same cell, the cell's DNA repair machinery can join the two DNA fragments end-to-end (a process called **concatemerization**, very common with AAV genomes), and the cellular splicing machinery then splices the resulting concatamer at the engineered splice sites, producing a single mRNA that encodes the full-length protein. **The cell does the assembly for you, at the RNA level.** Efficiency is moderate — maybe 5-10% of single-AAV efficiency — but it works.

**Approach two: dual-vector homologous recombination.** Similar idea, but with overlapping sequence at the split point. The two AAVs share, say, several hundred bases of identical sequence in the middle. When both land in the same cell, homologous recombination between the overlapping regions joins them into a single full-length cassette. Efficiency is generally lower than trans-splicing — under 1% in many cell types — but it produces a cleaner product.

**Approach three: split inteins.** This is the most elegant. **Inteins** are naturally occurring protein elements that splice themselves out of host proteins post-translationally, joining the flanking sequences with a normal peptide bond. **Split inteins** come in two halves, each fused to half of a protein. When the two halves come together in the cell, they reconstitute, splice themselves out, and leave behind a fully reconstituted, full-length protein with no intein remnant — just a single covalent peptide bond at the join. So you put the first half of your therapeutic protein, fused to an N-terminal intein, on one AAV; the second half of the protein, fused to a C-terminal intein, on the other AAV; co-administer; both halves get expressed, the inteins find each other, the protein gets assembled at the protein level. **Split intein efficiency can be very high — often comparable to single-AAV delivery of a small gene.** This is the strategy used in several Duchenne muscular dystrophy programs that aim to deliver larger versions of dystrophin than fit in a single AAV.

\[Pause.\]

Here's the analogy I want to leave you with for this segment. **Single AAV is delivering an item that fits in one trunk. Dual AAV is shipping a couch as two halves in two trucks, with instructions for assembly at the destination.** Trans-splicing assembles at the RNA level. Homologous recombination assembles at the DNA level. Split inteins assemble at the protein level. Each works, with different efficiencies and trade-offs.

Dual-AAV strategies have brought into reach diseases that would otherwise be locked out of AAV therapy by cargo size. Dystrophin in Duchenne. Stargardt disease (where the gene **ABCA4** is about 6.8 kb, too big for one AAV but reachable with dual). Usher syndrome (where the gene **MYO7A** is about 6.7 kb). The list goes on. The cost is reduced efficiency per dose, which translates to needing higher total doses to achieve the same biological effect — pushing harder against the manufacturing and immunogenicity constraints we've already discussed.

---

## SEGMENT 17 — Manufacturing scale-up: the bottleneck of the field

We've talked about science. Now let's talk about engineering, because the future of AAV gene therapy depends not just on whether the science works — it does — but on whether we can **manufacture enough virus, at high enough quality, at low enough cost, to treat the patients who need it**. And this is, frankly, the single biggest practical bottleneck of the entire field today.

Here are the numbers that should worry you. A typical AAV gene therapy dose for a systemic indication in an adult is on the order of **10^15 to 10^16 vector genomes**. Per patient. Once. For Zolgensma in an infant, the dose is around 10^15 vector genomes total; for adult systemic indications like Duchenne muscular dystrophy with AAV9, doses can approach 10^16 or more. Now think about how much virus that is, physically. AAV is small, but 10^16 particles weighs measurably — roughly a milligram of virus per dose, give or take. To treat a population of, say, 10,000 patients with a one-time gene therapy, you need on the order of **10^20 vector genomes total**. That's an extraordinary number.

\[Pause.\]

Current production approaches give yields that vary, but research-scale triple transfection might give you 10^4 to 10^5 functional particles per producer cell. Even in the largest current bioreactors — 200 to 2000 liters of HEK293 cells in suspension — a single batch produces 10^16 to 10^17 vector genomes. That's maybe ten to a hundred patient doses per batch. For diseases that affect tens of thousands or hundreds of thousands of patients, you would need thousands of batches, and current global manufacturing capacity for clinical-grade AAV is simply not enough.

There are three main avenues being pursued to address this.

**Improve yield per cell.** Optimize the producer cell line, the transfection conditions, the timing of harvest, the construct design. Move from adherent HEK293 cultures to suspension culture, which scales more easily. Develop **stable producer cell lines** that have the Rep/Cap and helper functions integrated into the genome (sometimes under inducible control), so you only need to transfect with the transfer plasmid — or, in some systems, no transfection at all, just induction. Stable producer lines could potentially eliminate the cost and variability of triple transfection and dramatically improve yield.

**Improve full-to-empty ratio.** A typical prep is 30-70% empty capsids. If you can shift that to 90% full, you effectively triple your functional yield without changing anything else. This is being worked on at the level of the production process (modifying transfection ratios, harvest timing) and at the level of capsid engineering (capsids designed for better packaging efficiency).

**Switch production system.** Beyond HEK293 in mammalian culture, there are two main alternative platforms. **Insect cell production using baculovirus** (the so-called Sf9/baculovirus system) can produce AAV at very high titer in suspension culture; one of the major commercial AAV products is made this way. **Producer cell line systems in HEK293 derivatives** are converging toward higher productivity. There are also experimental yeast and bacterial systems, though these are not yet at clinical scale.

\[Pause.\]

The other half of the manufacturing challenge is **purification**. The downstream processing — purifying AAV from the harvest, separating full from empty, formulating for clinical use, fill-finish — is also a bottleneck and a major contributor to cost. Affinity chromatography resins specific for individual AAV serotypes have transformed downstream processing but are expensive. AEX polishing steps for full-empty separation require careful optimization. Final formulation has to maintain virus stability through shipping, storage, and administration.

The whole package — upstream and downstream — has driven the cost of a single dose of approved AAV gene therapies to **the $1-3 million range**. Some of that is the cost of recouping development. But a substantial fraction is the genuine cost of producing the virus, especially at clinical-quality standards. **Bringing that cost down by an order of magnitude is the central challenge for the next decade of the field.** Until it comes down, AAV gene therapy will be reserved for the most catastrophic diseases where the economics can be justified by avoided downstream costs of chronic disease management. It will not yet reach the much larger populations of patients with less catastrophic but still serious genetic conditions.

I want you to leave this segment with the right level of optimism. The science is solid. The clinical efficacy is proven. The bottleneck is **manufacturing**, and manufacturing problems are, historically, the kind of problems that engineering can solve — slowly, expensively, but reliably. The bottleneck will yield, eventually, just as the bottleneck of producing monoclonal antibodies in the 1980s yielded to better cell culture and better bioreactor design. AAV will get cheaper. The patient pool will expand. But the timeline is years to decades, not months.

---

## SEGMENT 18 — Frontier: improved capsids for CNS, IV-administered brain delivery, evading immunity

Finally, let me end with where the field is heading, because the next ten years of AAV are going to look quite different from the last ten. Several technological frontiers are converging.

\[Pause.\]

**Frontier one: capsids for adult human CNS via intravenous administration.** This is the single biggest unsolved problem. AAV9 works for pediatric SMA because infant blood-brain barriers are permeable enough. But for adult brain diseases — Alzheimer's, Parkinson's, Huntington's, ALS — we don't yet have a capsid that crosses the adult human BBB at high enough efficiency to deliver therapeutic doses without invasive direct injection. PHP.eB looked like the answer in mice, but turned out to depend on LY6A, a mouse-specific receptor. The next generation of capsids — selected on primate or humanized models, sometimes engineered around specific human BBB receptors like **transferrin receptor** or **LRP1** — is now in development. Capsids like **BI-hTFR1** target human transferrin receptor and show real BBB crossing in non-human primates. **AAV.CAP-B10** and related variants from Caltech are showing promise in primate models. The first one that really works in adult humans will be a transformative reagent for neurology.

There's also a related but smaller capsid called **AAV-BR1**, originally selected for brain endothelial cell binding, which delivers transgenes specifically to brain capillaries and offers a different angle on CNS delivery — turning the brain vasculature itself into the therapeutic delivery target.

**Frontier two: capsids that evade pre-existing immunity.** Selecting capsid libraries against pooled human serum to remove variants recognized by common antibodies. This is being done at several labs and companies, and the early results suggest that engineered capsids can substantially reduce neutralization by pre-existing immunity. Combined with strategies like IdeS-mediated antibody clearance, immune evasion could substantially expand the patient population eligible for AAV gene therapy.

**Frontier three: re-dosing.** Currently, once you've received AAV gene therapy, you cannot be re-dosed with the same capsid because of induced immunity. Strategies to enable re-dosing include capsid switching (use AAV8 first, AAV5 next), immunosuppression around dosing windows, and possibly induced tolerance protocols. If re-dosing becomes feasible, the durability concerns around AAV therapy in proliferating tissues (where the episomal AAV genome dilutes out as cells divide) become much less worrying — you could just redose periodically.

**Frontier four: cell-type-specific capsids.** Going beyond tissue-level tropism to actual cell-type selectivity. A capsid that hits only dopaminergic neurons, only beta cells in the pancreas, only Sertoli cells in the testis. Combined with cell-type-specific promoters in the cargo, this could give surgical precision in vivo — modify exactly the cells you want, leave the rest alone. Active area, with promising results in mice that need translation to humans.

**Frontier five: AAV plus CRISPR plus everything else.** The combination of AAV as delivery, CRISPR as molecular surgery, and base/prime editing for precise nucleotide changes is opening therapeutic possibilities that didn't exist five years ago. Imagine in vivo gene correction for inherited diseases that currently have no treatment. Imagine epigenetic modulation in tissues that currently can't be reached. The combinatorial space is enormous, and AAV will be the delivery workhorse for most of it.

\[Pause.\]

We are, I think, in the early-to-middle innings of the AAV era. The first decade was about proving it could work — that you could safely deliver a gene to a tissue and durably restore function. That's done. The second decade — the one we're now in — is about expanding the platform: better capsids, larger payloads via dual vector strategies, immune evasion, cheaper manufacturing, more diseases addressed. The third decade will, with luck, be about reaching the diseases and the patient populations that current AAV can't yet serve.

And throughout all of it, the underlying principle stays the same. **You take a small, naturally helper-dependent, naturally non-pathogenic virus. You strip out its genes and keep only the packaging labels. You paint its outside to choose where it goes. You load it with a therapeutic message. You inject it into a patient. The patient's body unpacks the message in the right tissue, the message gets expressed, and the disease gets treated.** That is the most clinically successful gene therapy strategy of the modern era, and it is built on a tiny shipping container with a 4.7 kilobase trunk and a paint job you can change at will.

That is AAV. Thank you for your attention. We'll take questions for the rest of the hour.

---

## APPENDIX

A short reference list of key terms, numbers, and clinical landmarks for review.

**Key numbers.**
- AAV particle diameter: ~25 nm (one of the smallest viral vectors)
- AAV capsid composition: 60 protein subunits (VP1:VP2:VP3 ≈ 1:1:10)
- AAV genome size: ~4.7 kb, single-stranded linear DNA
- ITR length: 145 base pairs each
- Effective cargo capacity, ssAAV: ~4.5 kb between ITRs
- Effective cargo capacity, scAAV: ~2.4 kb
- Typical clinical dose: 10^13 to 10^14 vector genomes per kg body weight
- Typical research prep concentration: 10^12 to 10^13 vg/mL
- Adult seroprevalence to common serotypes: 30-70% depending on serotype

**Key serotypes and preferred tissue targets.**
- AAV1: muscle, CNS
- AAV2: retina (RPE, via subretinal), CNS (focal); binds HSPG
- AAV5: retina, airway, CNS; binds sialic acid
- AAV6: muscle, T cells (ex vivo)
- AAV8: liver (workhorse), muscle
- AAV9: systemic, CNS (crosses BBB in infants/mice)
- AAVrh10: CNS
- AAV-DJ: broad in vitro (engineered hybrid)
- AAV-PHP.eB: brain-wide via IV in mice (does not translate to primates)
- AAV-7m8: retina via intravitreal injection
- AAV-Anc80: cochlea, inner ear

**Key components of a triple transfection.**
- Transfer plasmid: transgene flanked by ITRs (the cargo)
- Rep/Cap plasmid: AAV rep and cap genes without ITRs (the factory)
- Helper plasmid: adenoviral E2A, E4, VA RNA (the activation signal; E1 supplied by HEK293)

**Titering methods.**
- qPCR / ddPCR: vector genomes per mL (vg/mL); the universal clinical standard
- ELISA: capsid particles per mL (cp/mL); reveals full-to-empty ratio when paired with qPCR
- Functional / transducing assay: transducing units per mL (TU/mL); closest to biology

**Approved AAV gene therapies (selected).**
- Luxturna (2017): AAV2, subretinal, RPE65 for Leber congenital amaurosis
- Zolgensma (2019): scAAV9, IV, SMN1 for spinal muscular atrophy type 1
- Hemgenix (2022): AAV5, IV, factor IX for hemophilia B
- Roctavian (2022): AAV5, IV, factor VIII (B-domain-deleted) for hemophilia A
- Elevidys (2023): AAVrh74, IV, micro-dystrophin for Duchenne muscular dystrophy
- Beqvez (2024): AAV variant, IV, factor IX for hemophilia B

**Strategies for cargo exceeding 4.7 kb.**
- Shrink the gene (e.g., micro-dystrophin, SaCas9, CjCas9)
- Dual AAV with trans-splicing (at the RNA level)
- Dual AAV with homologous recombination (at the DNA level)
- Dual AAV with split inteins (at the protein level, generally highest efficiency)

**Open challenges.**
- Adult human BBB-crossing capsid for systemic CNS delivery
- Pre-existing and induced immunity limiting patient eligibility and re-dosing
- Manufacturing scale and cost for population-scale application
- Cargo capacity beyond ~4.7 kb without dual-vector inefficiency
- Cell-type-specific (not just tissue-specific) capsid engineering

---


