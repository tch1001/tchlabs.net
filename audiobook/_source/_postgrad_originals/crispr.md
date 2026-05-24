# CRISPR

**A 2-hour undergraduate-to-postgraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 14,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to two hours, plus a mid-point break. (Read faster, ~140 wpm, and it lands nearer 100 minutes, leaving room for questions or board work to reach the full two hours.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — Programmable scissors and why this changed biology in one decade

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about CRISPR. And I want to set the scene properly, because CRISPR is one of those topics where the technology has moved so fast that the textbook chapter you read three years ago is already half out of date, and the textbook chapter you'll read three years from now is going to look at our current best practices the way we look at gel-purified plasmids — a little quaint.

So let me begin with the central conceptual claim, the one thing I want you to carry out of this room. CRISPR — and we'll define that acronym properly in a moment — is, in its most useful form, a **pair of programmable scissors for DNA**. You tell it where to cut by handing it a short piece of RNA. The RNA finds the matching DNA sequence in the genome. A protein riding along with the RNA cuts the DNA at that spot. And then the cell tries to repair the cut, and in the process of trying, either disrupts the gene or — if you've handed it a template — copies your edit into the chromosome.

That sentence — _RNA-guided DNA cleavage_ — is the whole idea. Everything else, the base editors, the prime editors, the dCas9 fusions, the diagnostics, the screens, the therapeutics — every one of those grows out of the same core fact. A short RNA tells a protein where to go on the genome. Once you can do that reliably, programmably, cheaply, in any organism, in any lab, you have changed biology.

And I want you to feel why that is the case, because if you grew up in a world where CRISPR was always available, it can be hard to appreciate what it replaced. Before CRISPR, if you wanted to disable a specific gene in a mouse — just one gene, in one organism — you spent a couple of years of a postdoc's life and tens of thousands of dollars on embryonic stem cell electroporation, drug selection, blastocyst injection, chimera breeding, germline transmission, the whole agonizing pipeline. If you wanted to do the same thing in a cell line, you might use zinc finger nucleases or TALENs — and those worked, but each one was a custom protein-engineering project costing thousands of dollars per target, taking months to design, and frequently failing. The barrier to entry for genome editing was so high that essentially only well-funded core facilities did it.

After CRISPR — and I mean specifically after 2013, when the first mammalian demonstrations landed — a single graduate student could order a custom guide RNA from a vendor for thirty dollars, clone it into a plasmid in an afternoon, transfect cells the next day, and have edited cells the day after. The cost per target dropped by three to four orders of magnitude. The time dropped from months to days. And the skill required collapsed from "specialist core facility" to "first-rotation graduate student." That is what I mean when I say CRISPR changed biology in one decade. It didn't introduce a brand-new capability that nobody had before. It took a capability that existed but was rare, painful, and expensive, and made it routine. And routine is what changes a field.

\[Pause.\]

If you walk out of this room in two hours and you can do three things — one, sketch how the bacterial CRISPR-Cas system actually works as an immune system, including what spacers are and where they come from; two, walk a confused colleague through how Cas9 finds its target and makes a cut, including the role of the PAM and the role of the two nuclease domains; three, look at any flavor of CRISPR technology — a base editor, a prime editor, a dCas9-KRAB, a Casgevy patient infusion — and tell me what's been bolted onto the core platform and why — then we've succeeded. Everything else is decoration on those three.

One more framing, then we'll dig in. CRISPR is two stories braided together, and I want you to keep both threads in your head the whole time. One thread is **basic biology** — bacteria fighting viruses with an adaptive immune system built out of arrays of viral DNA, and the molecular machinery they evolved to do that. That story is genuinely beautiful in its own right and would be worth a lecture even if no human ever picked the tools up. The other thread is **technology** — the realization, in 2012, that one component of that bacterial immune system could be reprogrammed to cut any DNA sequence of your choosing, and the cascade of derivative tools and clinical applications that has followed. The first story explains the second. You can't really understand why Cas9 needs a PAM, or why base editors exist, without understanding the bacterial system Cas9 came from. So we will start where the discovery actually started — not in a biotech lab, but in a piece of routine bacterial sequencing.

---

## SEGMENT 2 — The bacterial discovery: from odd sequences to immune system

The first observation that anyone made about what we now call CRISPR was made by a Japanese microbiologist named **Yoshizumi Ishino**, working at Osaka University in 1987. Ishino was not looking for an immune system. He was not looking for a genome editing tool. He was sequencing a particular gene — the iap gene — in _E. coli_, because his lab was interested in the enzyme it encoded, an alkaline phosphatase isozyme converter.

While he was sequencing the regions flanking iap, he noticed something odd. There was a strange repetitive pattern in the DNA — a short, roughly 29-base-pair sequence that appeared multiple times in a row, with each repeat separated from the next by a roughly 32-base-pair stretch of completely different sequence. So you had repeat, spacer, repeat, spacer, repeat, spacer — a tandem array of identical repeats interspersed with unique spacers. He published the observation, said essentially "this is weird, I don't know what it means," and moved on. The biological function was completely opaque. And for a decade, no one knew what to make of it.

In the 1990s, as more bacterial and archaeal genomes were sequenced, the same kind of arrays kept showing up — in lots of different organisms, all unrelated, but all with this same pattern. Repeat, spacer, repeat, spacer. The repeats within any one array were highly similar to each other. The spacers, though, were all different. And the arrays were often flanked by clusters of conserved genes that no one could assign a function to.

The person who put a name on this was a Spanish microbiologist named **Francisco Mojica**, working at the University of Alicante. Mojica had been studying these arrays in halophilic archaea — salt-loving organisms — since the early 1990s, and by the late 1990s he was convinced they were a fundamental feature of prokaryotic life. In 2000 he proposed a name for them: **CRISPR**, which is an acronym for Clustered Regularly Interspaced Short Palindromic Repeats. Clustered — they appear in clusters. Regularly Interspaced — the spacing between repeats is regular. Short Palindromic Repeats — the repeat units are short and often palindromic, meaning they can fold into hairpins. The acronym is, I'll admit, a little tortured, but it stuck, and it has the great virtue of being pronounceable. CRISPR.

Now, the harder question — the one that had been hanging since 1987 — was: what do these arrays _do_? Mojica started looking at the spacers carefully. The spacers were the unique sequences between the repeats. He began running BLAST searches, asking the database whether any of these spacer sequences matched anything else in any known genome. For years, the answer was no. The spacers looked random. But then, in 2003, with better databases and more sequenced genomes, the answer started to change.

Mojica found, with genuine astonishment, that the spacers matched **viral sequences**. Specifically, sequences from bacteriophages — the viruses that infect bacteria. And the bacteria carrying a particular spacer were resistant to the phage that the spacer matched. Across many examples, in many organisms, the pattern held. The spacers were pieces of phage DNA, stored in the bacterial chromosome, and they correlated with immunity to those phages.

In 2005, Mojica published this. Independently, a French microbiologist named **Gilles Vergnaud**, working at Paris-Sud, published essentially the same finding the same year, having come at it from a different angle — he had been using CRISPR arrays as a typing tool for _Yersinia pestis_, the plague bacterium, and noticed the spacer sequences matched plague phages. Two independent groups, the same year, the same conclusion. CRISPR arrays are a record of past viral infections. The bacterium had, somehow, captured pieces of phage DNA, filed them away in its own chromosome, and was using them as immune memory.

This was a stunning hypothesis. Bacteria were supposed to have only innate immunity — restriction enzymes that chew up foreign DNA based on simple recognition of unmethylated sequences. The idea that prokaryotes had an _adaptive_ immune system, capable of memory and capable of being updated by experience, was new. It needed experimental proof.

The proof came in 2007, from a yogurt company. I am not joking. **Rodolphe Barrangou** and **Philippe Horvath**, working at Danisco — a dairy starter culture company — were studying _Streptococcus thermophilus_, the bacterium used to ferment yogurt and cheese. Phage infections were a major industrial problem; they would kill the starter cultures and ruin entire batches. Danisco wanted to understand what made some _S. thermophilus_ strains resistant.

Barrangou and Horvath did the cleanest possible experiment. They took a phage-sensitive _S. thermophilus_ strain. They challenged it with a phage. A few rare survivors emerged — bacteria that had become resistant. They sequenced the CRISPR arrays of those survivors and compared them to the parent strain. And in the survivors, brand-new spacers had appeared — spacers whose sequences exactly matched fragments of the phage genome the bacteria had just been challenged with. Furthermore, if you experimentally added a spacer that matched a particular phage, the bacterium became resistant to that phage. If you deleted the spacer, it became sensitive again. Cause and effect, demonstrated cleanly. CRISPR was an adaptive immune system. The spacers were memory. The system actively acquired new memories when challenged.

And the genes adjacent to the CRISPR array — those mysterious **cas genes**, **CRISPR-associated genes** — were the machinery. Different combinations of cas genes did the acquisition step, the RNA processing step, and the actual chopping-up-of-invading-DNA step.

\[Pause.\]

So just take stock of where the field was at the end of 2007. We knew bacteria had an adaptive immune system. We knew it was made of an array of viral memories and a set of associated proteins. We knew the system worked. But — and this is the important part for what comes next — we did not yet know, in molecular detail, how any one of those Cas proteins actually cut DNA, or whether any of them could be reprogrammed to cut a DNA sequence of our choosing. That was still five years away. But the foundation was laid. The system was real. The race was on to figure out the mechanism.

---

## SEGMENT 3 — The CRISPR-Cas immune system: arrays, spacers, and the three-step cycle

Before we get to Cas9 specifically, I want you to have the full picture of how a bacterial CRISPR-Cas system functions as an immune system, because Cas9 is just one piece of one type of one of the systems, and the broader picture explains why things are the way they are. So let me build the immune system end to end.

The bacterial CRISPR-Cas immune system works in **three stages**, and these stages map onto everything an immune system needs to do: it needs to acquire memory, it needs to express that memory in a useful form, and it needs to use the memory to attack invaders. The three stages are: **adaptation**, **expression**, and **interference**. Memorize those three words.

Stage one — **adaptation**. A phage injects its DNA into the bacterium. Cas proteins, specifically a complex called **Cas1-Cas2** in most systems, find a fragment of that incoming foreign DNA, chop out a roughly 30-base-pair piece, and insert it as a new spacer at one end of the CRISPR array — usually the leader end, the upstream end. The array grows by one repeat-spacer unit. Importantly, the system has to distinguish self from non-self when grabbing these fragments, because if it accidentally grabbed a piece of the host chromosome and filed it as a spacer, the bacterium would later target its own genome and commit suicide. The system uses several mechanisms to enforce self-non-self discrimination, including a preference for fragments next to a specific short motif called a **protospacer adjacent motif**, the **PAM** — and we'll come back to the PAM in detail when we talk about Cas9, because it is one of the most consequential features of the whole system.

Stage two — **expression**. The CRISPR array, sitting in the bacterial chromosome, is transcribed by the cell's RNA polymerase from a promoter in the leader sequence. The result is a long precursor RNA called the **pre-crRNA** that runs across the whole array — repeat, spacer, repeat, spacer, repeat, spacer. This long RNA then gets chopped up at the repeats by processing enzymes, producing many small **mature crRNAs** — CRISPR RNAs — each one containing a single spacer flanked by short pieces of repeat sequence. Each mature crRNA is a guide. It carries the memory of one past invader.

Stage three — **interference**. The mature crRNA loads onto a Cas effector protein — or in some systems, a Cas effector complex of multiple proteins — and the resulting ribonucleoprotein patrols the cell. When the bacterium is re-infected by a phage carrying DNA that matches one of the stored spacers, the crRNA base-pairs with the matching sequence in the invading DNA — that matching sequence is called the **protospacer** — and the Cas effector cuts the foreign DNA, destroying the infection. The bacterium has used a stored memory to identify and destroy a repeat invader. That is adaptive immunity.

Now, here is where the field had to sort out a real mess of diversity, because not all bacterial CRISPR-Cas systems look the same. In fact, they vary enormously. The current classification, refined by Eugene Koonin's group and others over the last decade, divides them into **two classes** and **six types**, with many subtypes.

**Class 1** systems use a _multi-protein effector complex_ for interference — the crRNA loads onto a complex of several different Cas proteins working together. Class 1 includes Type I systems, which use a complex called Cascade for target recognition and a separate nuclease called Cas3 for cutting; Type III systems, which target both DNA and RNA; and Type IV systems, which are less well characterized.

**Class 2** systems use a _single large effector protein_ for interference — one Cas protein does the whole job of loading the crRNA, finding the target, and cutting. Class 2 includes Type II systems, whose effector is **Cas9** — the workhorse of genome editing; Type V systems, whose effector is **Cas12** — also a DNA cutter, but with different properties; and Type VI systems, whose effector is **Cas13** — and this one is interesting because Cas13 targets _RNA_ rather than DNA, which is why it shows up later in the diagnostics segment.

For genome editing, Class 2 is what we care about, because a single-protein effector is dramatically easier to deliver and use than a multi-protein complex. You can put one gene on a plasmid; you can package one protein into a vector. Cas9, Cas12, Cas13 — those are the names you'll see in every modern CRISPR paper, and they are all Class 2 effectors. The Class 1 systems are biologically fascinating and probably the most ancient form of CRISPR, but for most engineering purposes they're inconvenient. So when I say "CRISPR" for the rest of this lecture without further qualification, I am, like most of the field, defaulting to Class 2 — and usually to Cas9 specifically.

\[Pause.\]

One more important conceptual point before we move on. The bacterial immune system, as I've described it, requires _both_ the crRNA — the guide — and the Cas effector protein. Neither one alone does anything useful. The crRNA without Cas9 is just a small RNA floating around. Cas9 without a crRNA has no idea what to cut. They have to be combined, and once combined, the crRNA dictates the target and the Cas9 does the cutting. That programmability — the fact that the targeting specificity is encoded in a short, easy-to-synthesize RNA rather than in the protein itself — is the entire reason this system became a tool. Zinc finger nucleases and TALENs each had to be re-engineered as proteins for every new target. CRISPR just needs a new piece of RNA. That is the whole technological revolution in one sentence.

---

## SEGMENT 4 — The 2012 paper: Jinek, Chylinski, Charpentier, Doudna

Alright. Now we come to the paper. The 2012 paper. If you're going to read one original research paper from the CRISPR era, this is the one. It came out in _Science_ in August 2012. The first author is **Martin Jinek**. The co-second author is **Krzysztof Chylinski**. The senior authors are **Emmanuelle Charpentier**, then at Umeå University in Sweden, and **Jennifer Doudna**, at UC Berkeley. The paper is titled "A Programmable Dual-RNA-Guided DNA Endonuclease in Adaptive Bacterial Immunity." Read that title carefully. _Programmable_. _Dual-RNA-Guided_. _DNA Endonuclease_. Every word is doing work.

To understand what the paper showed, you need a little more context about the Type II CRISPR system in _Streptococcus pyogenes_, the source of the workhorse Cas9. Charpentier had been studying small RNAs in _S. pyogenes_, and a few years earlier her group had discovered that the Type II system uses, in addition to the crRNA, a _second_ small RNA called the **trans-activating crRNA**, the **tracrRNA**. The tracrRNA is encoded elsewhere in the bacterial genome, not in the CRISPR array. It contains a stretch that is complementary to the repeat portion of the pre-crRNA, and it base-pairs with the pre-crRNA to form a duplex. That duplex is then recognized by a host RNase — RNase III — which chops the pre-crRNA into mature crRNAs while they're still annealed to the tracrRNA. So in the Type II system, the mature guide is actually a _two-RNA complex_: a crRNA paired with a tracrRNA, and both of them are required to load onto Cas9 and to make Cas9 active.

Charpentier and Doudna had started collaborating. Doudna's group brought deep structural and biochemical expertise on RNA. Charpentier brought the _S. pyogenes_ biology. Jinek, a postdoc in Doudna's lab, and Chylinski, in Charpentier's, set up an in vitro reconstitution experiment. They purified Cas9 protein. They made the crRNA and the tracrRNA in vitro. They mixed everything together with a piece of DNA carrying a sequence that matched the crRNA. And they asked, simply: does it get cut?

It did. Cleanly. The Cas9 protein, loaded with crRNA and tracrRNA, cut the DNA at the position dictated by the crRNA spacer sequence, producing a blunt-ended double-strand break three base pairs upstream of a particular short motif — that motif being the **PAM**, which I keep promising to explain and which I will get to in the next segment.

But Jinek and Chylinski went further, and this is the move that turned a basic biology finding into a technology. They reasoned: if the crRNA and tracrRNA form a duplex in nature, and that duplex is what Cas9 binds, why couldn't we just fuse the two RNAs into _one_ RNA molecule? Take the spacer-containing end of the crRNA, link it via a short loop to the tracrRNA, and synthesize the whole thing as a single chimeric guide. They tried it. They called it the **single guide RNA**, the **sgRNA**. And it worked. Cas9 plus sgRNA cut DNA exactly the same way Cas9 plus crRNA plus tracrRNA did. One protein, one RNA. The two-component system became a two-_molecule_ system: Cas9 plus sgRNA equals programmable nuclease.

That was the punchline. In one paper, the field had: the biochemistry of Cas9, the dual-RNA mechanism, the demonstration that the cut site is dictated by the spacer sequence and can be reprogrammed by simply changing the spacer, and the engineering of a single guide RNA to simplify the system to two components. Every modern CRISPR experiment, every CRISPR-based therapy, every base editor and prime editor — every one of them descends from that paper.

Now, a fair historical aside. The 2012 paper showed Cas9 cutting DNA in a test tube. It did not show editing in a mammalian cell. That step — applying Cas9 plus an sgRNA to a human or mouse cell genome and getting a functional edit — was demonstrated a few months later, in January 2013, by two groups independently: **Feng Zhang's lab** at the Broad Institute and **George Church's lab** at Harvard. Both groups published in _Science_ on the same day. Both groups showed that Cas9 plus an sgRNA, expressed from plasmids in human cells, could cut chosen sites in the human genome and produce edits. We'll talk about the consequences of this for the patent fight in Segment 8, because the question of who really invented mammalian genome editing with CRISPR is going to become a long, expensive legal argument. But scientifically, the picture by January 2013 was complete. The tool was real. It worked in mammalian cells. The field exploded.

\[Pause.\]

---

## SEGMENT 5 — Cas9 mechanism: PAM, R-loop, HNH and RuvC

Let me now open up Cas9 and show you exactly how it works, mechanistically. Because once you understand the mechanism, every later design choice — every Cas9 variant, every base editor architecture, every off-target consideration — falls into place.

Cas9 from _Streptococcus pyogenes_ — usually called **SpCas9** to distinguish it from orthologs in other species — is a big protein. About 1,400 amino acids, 158 kilodaltons. It is, by the standards of the molecule it cuts, enormous. The protein has a bilobed architecture: a **recognition lobe** that grips the guide RNA and helps with target recognition, and a **nuclease lobe** that contains the two nuclease domains. Connecting the two lobes are flexible hinges that allow the protein to undergo major conformational changes between its inactive and active states.

The two nuclease domains are called **HNH** and **RuvC**. These names come from sequence motifs that identify them as members of broader nuclease families. The HNH domain is a compact single-metal-ion nuclease. The RuvC domain belongs to a family of nucleases first identified in the bacterial RuvC enzyme that resolves Holliday junctions. Each of these two domains cuts one strand of the DNA. HNH cuts the strand that base-pairs with the guide RNA — the **target strand**. RuvC cuts the other strand — the **non-target strand**. Both cuts happen three base pairs upstream of the PAM, on opposite strands at the same position, producing a **blunt-ended double-strand break**.

Now let me walk you through how Cas9 actually finds its target. Apo Cas9 — Cas9 with no guide loaded — is essentially inactive. It binds DNA only very weakly, non-specifically, and its conformation is closed. Loading the guide RNA — the sgRNA in our engineered system — causes a major conformational rearrangement: Cas9 opens up, the recognition lobe rotates, and a positively charged groove is formed that can sample DNA. The guide-loaded Cas9 ribonucleoprotein is now ready to search.

The search is not random. Cas9 doesn't crawl along the DNA looking at every possible position. Instead, it uses what we call **PAM-licensed sampling**. The protein has a specific binding pocket for the **protospacer adjacent motif** — the PAM — which for SpCas9 is the sequence **NGG**, where N is any base. The protein dives in and out of the DNA at high speed, and at each landing it checks: is there an NGG here? If no, it pops off immediately. If yes, it pauses, and only then does it attempt to verify the guide RNA's match to the adjacent sequence.

This PAM-first strategy is a thing of beauty. It massively reduces the search space. The human genome is three billion base pairs. Without a PAM, Cas9 would have to attempt RNA-DNA pairing at every single position — three billion attempts, most of them futile. With the NGG PAM requirement, only about one position in eight even gets the verification attempt, because only about one in eight random sites contains an NGG. The PAM is the bouncer at the door; the guide RNA is the ID check that happens once you're inside.

Once Cas9 has landed at a PAM, it attempts to invade the DNA double helix from the PAM-distal end. It tries to melt open the DNA right next to the PAM and form base pairs between the guide RNA spacer and the DNA target strand. If the first few bases pair correctly — the so-called **seed region**, the roughly 8-12 nucleotides immediately adjacent to the PAM — the invasion propagates. RNA-DNA base pairing extends across the entire 20-nucleotide spacer, displacing the original DNA non-target strand into a single-stranded loop. The resulting three-stranded structure — guide RNA paired with target DNA strand, and non-target DNA strand looped out — is called the **R-loop**, with R standing for RNA. R-loop formation is the central recognition event in CRISPR.

If the spacer doesn't match the DNA — if there are too many mismatches, especially in the seed region — the invasion fails, the R-loop never forms, Cas9 falls off, and it moves on. This is the specificity check. The PAM gets you to the right kind of neighborhood; the seed region commits you; the full 20-nucleotide pairing confirms you have the right address.

If the R-loop does fully form, Cas9 undergoes another conformational change. The HNH domain, which until now has been positioned in an inactive state, docks against the target DNA strand. The RuvC domain is already in position to cut the non-target strand. Both cuts happen, three base pairs from the PAM, on opposite strands at the same position, blunt. Cas9 then sits on the cut DNA for a while — sometimes a long while, minutes to hours — before releasing.

That sitting is consequential. It means that once Cas9 has cut, it tends to occupy and shield the cut site for some time, which affects which repair pathway gets access first. We'll come back to this.

\[Pause.\]

Let me also draw out the PAM consideration more fully because it has a profound consequence you should appreciate. The **NGG** PAM of SpCas9 means that to target a specific site in the genome, you need that site to be immediately followed by NGG on one strand or the other. That sounds restrictive, but in practice it's quite permissive — NGG occurs roughly every 8 base pairs in random DNA, and Cas9 can cut on either strand, so the effective density of accessible targets is around one every four base pairs. For most coding genes, there are plenty of NGG PAMs to choose from. But for some applications — disrupting a specific transcription factor binding site, editing a particular base inside a regulatory element, hitting a SNP at exactly one position — the PAM constraint can be limiting. There just isn't always an NGG where you need one. This is why people have spent the last decade hunting for orthologous Cas9 proteins with different PAM requirements, and engineering SpCas9 variants with relaxed PAMs. We'll come back to that.

So the full mechanism, end to end: Cas9 loaded with sgRNA scans the genome for NGG PAMs, attempts R-loop invasion at each PAM-licensed site, commits if the seed pairs, fully verifies if the rest pairs, then HNH and RuvC each cut one strand, producing a blunt double-strand break three bases upstream of the PAM. The DNA is now broken. The cell has a problem to solve. How it solves it determines what kind of edit you get.

---

## SEGMENT 6 — Repair: NHEJ versus HDR, and what each one gives you

So Cas9 has made a double-strand break. Now the cellular DNA repair machinery takes over, and what happens next is entirely a property of the cell, not of CRISPR. CRISPR made the cut. The cell decides the outcome. Understanding the two main repair pathways is therefore essential, because they give you fundamentally different kinds of edits.

Pathway one — **non-homologous end joining**, **NHEJ**. NHEJ is the cell's default, all-purpose, always-available double-strand break repair pathway. It is active in essentially every cell at every phase of the cell cycle. The way it works is conceptually simple: a complex of proteins called Ku70-Ku80 binds the two broken DNA ends and holds them together; DNA-PK and additional factors process the ends; and DNA ligase IV stitches the ends back together.

The crucial property of NHEJ for our purposes is that it is **error-prone**. Before ligation, the ends often get chewed back a few nucleotides, or get extended a few nucleotides, or microhomologies are exposed and used for alignment. The result is that the rejoined DNA frequently has **small insertions or deletions** at the joint — what we call **indels**. Usually one to ten base pairs. Sometimes larger.

Now here's the key insight: if the cut was in the coding region of a gene, an indel that is not a multiple of three will shift the reading frame downstream of the cut, producing a frameshift that almost always introduces a premature stop codon and leads to either a truncated, non-functional protein or no protein at all because the mRNA is destroyed by nonsense-mediated decay. So NHEJ-mediated repair of a CRISPR cut in a coding exon produces, with high probability, a **gene knockout**.

This is the workhorse of CRISPR. You want to disable a gene. You design a guide that targets an early exon. You deliver Cas9 plus guide. Cas9 cuts. NHEJ repairs, sloppily. About two-thirds of the time the resulting indel is a frameshift. You select edited cells. The gene is knocked out. Done. The whole process can take a week. Before CRISPR, this was a year of mouse breeding or a month of TALEN engineering. Now it's a week.

But indels are not predictable. You don't know what indel you'll get at any given cell. You'll get a distribution — some 1-base insertions, some 3-base deletions, some 7-base deletions, and so on. For knockouts that's fine; you don't care which indel as long as it disrupts the protein. But if you wanted to make a specific, defined change — say, change a particular codon from one amino acid to another, or introduce a specific point mutation that's found in a patient — NHEJ won't do it. You need the other pathway.

Pathway two — **homology-directed repair**, **HDR**. HDR uses a homologous template — normally the sister chromatid in a dividing cell — to repair a double-strand break with high fidelity. The broken ends get resected to expose single-stranded 3' overhangs, those overhangs invade the homologous template, the missing sequence gets copied off the template using the template's information, and the result is a perfectly accurate repair.

For genome editing, we hijack HDR by providing an **exogenous donor template** — a piece of DNA we hand to the cell, designed with the same sequence as the cut site but carrying our desired edit. The cell, given the choice between using the sister chromatid and using our donor, sometimes uses our donor, and the edit gets copied in. The donor can be a long double-stranded DNA, or a synthetic single-stranded oligonucleotide for small edits.

HDR gives you **precise, programmable edits** — exactly the change you encoded in your donor, at exactly the site you targeted. That sounds wonderful. The problem is that HDR is hard. It is much less efficient than NHEJ, often ten to one hundred times less efficient. And it is restricted to dividing cells, because it requires the late S and G2 phases of the cell cycle when sister chromatids are available and the resection machinery is active. In post-mitotic cells — neurons, mature muscle, most adult tissues — HDR is essentially absent. NHEJ is everywhere; HDR is selective.

So the picture is: NHEJ is universal, fast, sloppy, and good for knockouts. HDR is restricted, slow, accurate, and good for precise edits if you can get it to work.

\[Pause.\]

This pathway split has shaped the entire trajectory of CRISPR technology development. Two enormous bodies of work have flowed from it.

One body of work has been to try to **boost HDR** and **suppress NHEJ** so you can make precise edits more often. People have tried small molecule inhibitors of NHEJ components like Scr7 (a putative DNA ligase IV inhibitor; the actual mechanism is debated). People have timed Cas9 delivery to specific cell cycle phases. People have fused Cas9 to factors that recruit HDR proteins. The gains have been real but incremental, and HDR remains the bottleneck for many therapeutic applications.

The other body of work has been to **go around the problem entirely**. Instead of making a double-strand break and praying for HDR, build a tool that makes the desired edit directly, without ever cutting both strands. That's what base editing and prime editing are. Those tools, which we'll meet in Segments 11 and 12, exist precisely because HDR is hard and indels are imprecise. They are designed responses to the limitations of the NHEJ/HDR pathway split. So when you hear about base editing later, remember: it exists because someone got tired of HDR not working.

One more thing to note about the indels themselves. People used to think indels were essentially random — a roughly Gaussian distribution of insertion and deletion sizes. It turns out the distribution is much more structured than that. The actual indel outcomes at any given site depend in predictable ways on the local sequence — particularly the four nucleotides immediately flanking the cut site. Microhomologies within those flanking sequences bias the repair toward particular deletions. Machine learning models — inDelphi, FORECasT, and others — can now predict, with reasonable accuracy, what indel distribution you'll get at any given Cas9 target site. This matters because in some cases you actually want a specific indel — say, a 1-base insertion that restores the reading frame of a gene with a deletion. Knowing the local sequence rules lets you pick guide RNAs that give you the indel you want, with reasonable frequency, even without HDR. So even the "imprecise" pathway turns out to have a learnable structure, and the field has gotten quite sophisticated at exploiting it.

Alright. We've now built the core platform: bacterial discovery, mechanism, the cut, the repair. From here, we start expanding into the technology layer.

---

## SEGMENT 7 — SpCas9 in mammalian cells: the 2013 demonstrations and its limits

So we have an in vitro system, demonstrated in August 2012. The next obvious question is: does this thing work in a human cell? Because a bacterial protein and a synthetic RNA have to do a lot of new things to function inside a mammalian nucleus. They have to get expressed. The Cas9 protein has to be translated, fold correctly, and find its way into the nucleus. The sgRNA has to be produced in the right form. The complex has to navigate mammalian chromatin, which is wrapped around histones, often compacted, often nucleosome-occluded. None of these things were guaranteed.

In January 2013, two papers landed in _Science_ on the same day, and a third was already in press at _eLife_. The two _Science_ papers came from **Feng Zhang's group** at the Broad Institute of MIT and Harvard, and from **George Church's group** at Harvard Medical School. The _eLife_ paper came from Doudna's lab. All three showed essentially the same thing: deliver Cas9 from _Streptococcus pyogenes_ along with an sgRNA into human cells, and you get targeted DNA cleavage and editing at the chosen locus.

The Zhang and Church papers were particularly influential because they were rigorous, multi-target demonstrations. Zhang's paper used a Cas9 codon-optimized for mammalian expression, fused with two nuclear localization signals at the N- and C-termini, and an sgRNA driven by the U6 promoter — a Pol III promoter that produces RNA without a cap or poly-A tail, which is what you want for a short non-coding RNA. The design was simple and worked. Edit rates of 10-25% at target sites in human 293 cells and mouse cells. Multiplexed editing of several genes simultaneously by co-expressing multiple sgRNAs. The recipe was clean enough that any molecular biology lab could replicate it within weeks.

And they did. The number of CRISPR papers per year went from a few dozen in 2012 to several hundred in 2013 to several thousand in 2014. Plasmid repositories like Addgene started shipping SpCas9 and sgRNA vectors to every lab on Earth. By 2015, CRISPR was a standard tool. Today it's like a pipettor.

Now let me give you a clear-eyed accounting of what SpCas9 is good at and what it isn't, because if you only know "CRISPR works," you don't yet know enough to design an experiment competently.

**SpCas9 is good at**: knocking out genes via NHEJ in dividing mammalian cells. Generating pools of edited cells for screens. Cutting at almost any chosen locus, as long as you can find an NGG PAM nearby. Tolerating multiplexing — you can have multiple sgRNAs in one cell hitting multiple targets simultaneously. Working in essentially every organism anyone has tried — human cells, mouse cells, zebrafish embryos, _Drosophila_, plants, fungi, even single-celled algae.

**SpCas9 is not as good at**: precise edits via HDR — which, as we discussed, is intrinsically a hard pathway and remains the bottleneck. Editing in post-mitotic cells, where HDR is essentially absent. Avoiding off-target cuts at sites that resemble the on-target by a few mismatches. Being delivered via AAV — at 4.2 kilobases of coding sequence, SpCas9 plus a guide RNA plus regulatory elements is at the very upper limit of what fits in a single AAV vector. And working at sites where the only available PAMs are inconveniently placed.

Each of those limitations has motivated a research direction. HDR limits motivated base and prime editing. Off-target concerns motivated high-fidelity Cas9 variants. The AAV size limit motivated the search for smaller Cas9 orthologs. The PAM constraint motivated both ortholog hunting and PAM-engineered variants. So when you see, in a current paper, "we used SpCas9-NG with relaxed PAM," or "we used SaCas9 packaged into AAV," what you're looking at is someone navigating the limits of the workhorse by choosing a better-suited variant. The choice is always context-dependent. There is no one Cas9 to rule them all.

\[Pause.\]

One last point about the early days that matters for what's coming. The 2013 mammalian papers established two facts that became contested in the patent fight. One: that SpCas9 plus sgRNA works in mammalian cells. Two: which group first achieved that. These two are not the same question. The first is settled science. The second is a question of priority, dates, lab notebooks, conference presentations, manuscripts in review — and that is where the lawyers came in.

---

## SEGMENT 8 — The patent fight and the 2020 Nobel

Let me tell you a story that's about science, but also about money, and about how the modern academic-commercial system actually works. The CRISPR patent fight is one of the most consequential intellectual property disputes in biotechnology history. Tens of millions of dollars in legal fees. Years of litigation. Hundreds of millions of dollars — eventually billions — at stake in licensing revenue. And to this day the story is not fully resolved.

The basic shape of the dispute. In May 2012, before the August _Science_ paper was even published, the **University of California**, on behalf of Doudna and Charpentier, filed a provisional patent application covering the use of CRISPR-Cas9 for programmable DNA cleavage, including its anticipated use in eukaryotic cells. The application was broad. It claimed the system as a tool, not just as a bacterial finding.

In December 2012, after seeing the August paper and starting his own work, **Feng Zhang and the Broad Institute** filed their own patent application, focused specifically on the use of CRISPR-Cas9 in eukaryotic cells — including human cells. The Broad paid for expedited examination, and their patent was granted first, in April 2014. The UC application was still pending.

Now you can see the legal question. UC had filed first, with a broad claim that included eukaryotic use as an obvious extension of the in vitro system. The Broad filed second, with a narrower but more specific claim about actually doing it in eukaryotic cells, with experimental data. UC argued: our claim covers the use of CRISPR in any cell, including eukaryotic — Zhang's work was an obvious application of what we had already disclosed. The Broad argued: applying CRISPR to eukaryotic cells was _not_ obvious, it required substantial new work and innovation, and our patent is therefore valid as an independent invention.

This went to interference proceedings at the US Patent and Trademark Office. In February 2017, the Patent Trial and Appeal Board ruled in favor of the Broad — they found that the use of CRISPR-Cas9 in eukaryotic cells was not an obvious extension of the in vitro work, and therefore the Broad's eukaryotic patents were valid and did not interfere with the UC application. UC appealed; the Federal Circuit upheld the ruling in 2018. UC and the Broad both ended up holding patents — UC has patents covering CRISPR-Cas9 use generally, in many jurisdictions including Europe, and the Broad has patents covering specifically eukaryotic use in the US. The result is a complicated licensing landscape where companies often need licenses from both parties depending on jurisdiction and application.

This is not just lawyerly drama. The commercial implications are huge. Therapeutic CRISPR companies — Editas Medicine, founded by Zhang and Church; Intellia Therapeutics, founded by Doudna; CRISPR Therapeutics, co-founded by Charpentier — each had different exclusive licenses to different patent families. The patent estate determines which company can develop which applications. Casgevy, the first approved CRISPR therapy, came out of CRISPR Therapeutics' license. NTLA-2001, the in vivo TTR therapy, came out of Intellia's. The patent fight is, in a real sense, partly what determines who profits from each clinical breakthrough.

Now, against that backdrop, the **Nobel Prize**. In October 2020, the Royal Swedish Academy of Sciences awarded the Nobel Prize in Chemistry to **Emmanuelle Charpentier and Jennifer Doudna** "for the development of a method for genome editing." Just the two of them. No share for Zhang. No share for Mojica or Horvath or Barrangou, whose discoveries made everything possible. No share for Church, whose lab independently demonstrated mammalian editing in 2013.

The Nobel committee's logic, as I read it, was that the conceptual breakthrough — recognizing that this bacterial system could be turned into a programmable genome editing tool, designing the sgRNA, demonstrating reprogrammable cleavage — was the central invention, and that was the 2012 paper, and that paper has those two senior authors. The mammalian demonstration was technically important but it was the application, not the discovery. So the prize honored the conceptual move, not the engineering follow-through.

You can argue about this either way. I think there's a real case that Zhang should have shared — making CRISPR work in mammalian cells was harder than the Nobel committee implied and was the practical foundation of the clinical applications. I also think there's a case that the discovery scientists, Mojica especially, were robbed by the limit of three awardees and the bias toward recent applied work. The Nobel Prize is a coarse instrument applied to a continuous chain of discovery, and it never makes everyone happy. What I want you to take away is: the 2012 paper was the conceptual fulcrum. The 2013 papers were the engineering payoff. Both matter. Both have patents. Only one set of authors got the Nobel.

\[Pause.\]

\[BREAK — One-hour mark. Take ten minutes. Stretch, hydrate, check email, complain about the weather. Reconvene for the second half: practical design rules, engineered variants, base editing, prime editing, delivery, therapeutics, diagnostics, screens, dCas9, and the ethics frontier.\]

---

## SEGMENT 9 — Guide RNA design rules: efficiency and specificity

Welcome back. The first hour built the foundation: discovery, mechanism, repair, the major players. The second hour is going to be largely about engineering — what people have built on top of the platform, and how it's being used in research and in the clinic. We'll start with the most practical question a working CRISPR experimentalist faces: how do I design a guide RNA that actually works?

Because here's a fact that the early literature glossed over and the next generation of work made painfully clear. **Not all guide RNAs are equally good.** Two guides targeting two different sites in the same gene, both with 20-nucleotide spacers, both with perfect PAMs, both delivered identically — one will edit 80% of cells, the other will edit 5%. Why?

There are two largely independent questions you need to answer for any candidate guide. The first is **efficiency**: will Cas9 loaded with this guide actually cut the target DNA effectively? The second is **specificity**: will this guide also cause Cas9 to cut other sites in the genome that resemble the target — the off-target problem? You optimize both, and good design tools balance them.

Let's start with efficiency. The pioneering work here came from **John Doench and colleagues** at the Broad, who in 2014 and again in 2016 published systematic screens of thousands of guide RNAs against known genes, measured the knockout efficiency of each, and then fit machine learning models to predict efficiency from the spacer sequence alone. The 2014 model is called **Rule Set 1**. The 2016 model is **Rule Set 2**, and it's the one most current tools still use as a baseline.

The rules Rule Set 2 identifies are actually quite interpretable. A few highlights you should know:

**Position-specific nucleotide preferences**. The base immediately 5' of the PAM — position 20 of the spacer, the one closest to the PAM — strongly prefers a G. The position just inside the PAM — the N of NGG — also has preferences. Certain positions in the seed region prefer certain bases.

**GC content**. Overall GC content of the spacer should be moderate — too low or too high reduces efficiency. The sweet spot is roughly 40-60% GC.

**Avoiding homopolymer stretches**. A run of four or more identical nucleotides — TTTT, GGGG — reduces efficiency, partly because TTTT acts as a termination signal for the U6 Pol III promoter that drives sgRNA expression, killing transcription.

**Avoiding secondary structure**. The spacer should not fold into a stable hairpin that would compete with sgRNA-DNA pairing.

**Local chromatin and DNA accessibility**. Cas9 is bad at cutting in dense nucleosome-occluded regions. Open chromatin works better. This isn't strictly part of the sequence, but it's a strong predictor of in-cell activity, and modern tools incorporate ATAC-seq or DNase-seq data when possible.

For specificity — the off-target question — the field developed a separate set of metrics. The most widely used is the **CFD score**, the **Cut Frequency Determination** score, also from Doench's group, which assigns a per-mismatch penalty for each position in the spacer based on empirical data of how Cas9 tolerates each kind of mismatch at each position. CFD lets you, given a candidate guide, scan the genome for all near-matches, score each one, and predict the cumulative off-target risk.

The key empirical finding about specificity, demonstrated in many studies starting around 2013-2014, is that Cas9 is much more tolerant of mismatches at the **PAM-distal end** of the spacer — positions 1-10 from the 5' end — and much less tolerant at the **PAM-proximal seed** — positions 11-20, near the PAM. So an off-target site that differs from your intended target by three mismatches in the seed is unlikely to be cut. An off-target that differs by three mismatches at the PAM-distal end may very well be cut anyway. When you scan for off-targets, you weight the positions accordingly.

A workflow you should know. For any new editing experiment: enter your gene of interest into a design tool — CRISPick, Benchling's guide design, CHOPCHOP, CRISPOR, any of several. The tool will enumerate all possible spacers in your gene of interest, score each one for predicted efficiency using something like Rule Set 2, and score each one for specificity by scanning the whole genome for near-matches and computing a CFD-derived risk score. Pick the top three or four guides by combined score, order them as oligos, clone them into your sgRNA vector, deliver, validate. If you're doing a knockout, you target an early exon — usually exon 2 or 3 — so that a frameshift kills the protein with high probability. You also avoid alternative splicing regions where a knockout in one isoform might leave another intact. Three to five guides per gene is the standard for important experiments — different guides at different positions give you redundancy and reduce the risk that one anomalous guide gives a misleading phenotype.

This sounds tedious in description. In practice, designing guides for a new target now takes about 15 minutes total, end to end, including ordering the oligos. The tools have gotten that good.

---

## SEGMENT 10 — Engineered Cas9 variants and orthologs

Now let's talk about the menagerie of engineered and orthologous Cas9 proteins that have proliferated in the last few years, because the workhorse SpCas9 is not always the right tool, and you should know what your options are.

The two big problems people have engineered around are **specificity** and **size**.

On specificity — the off-target problem — several groups have engineered SpCas9 variants with reduced tolerance for mismatches. The first widely adopted variant was **eSpCas9** — enhanced specificity Cas9 — from Feng Zhang's group in 2016. They reasoned that the non-target DNA strand, the one that gets displaced into the R-loop, makes contacts with positively-charged residues in Cas9 that probably contribute energetically to stabilizing imperfect R-loops at off-target sites. By mutating those positively-charged residues to neutralize them, they reduced the energy that Cas9 could extract from non-target strand binding, which destabilized imperfect R-loops more than perfect ones. eSpCas9 with three mutations in the relevant residues showed dramatically reduced off-target editing while preserving on-target activity.

Within a few months, **David Liu's group** at Harvard reported **SpCas9-HF1** — high-fidelity Cas9 — using a similar logic but targeting different contacts, mutating four residues that make hydrogen bonds with the target DNA strand. Again, weaken the protein's grip on imperfect R-loops, raise the specificity threshold, preserve on-target activity. Both variants are widely used. Several more have followed: HypaCas9, evoCas9, Sniper-Cas9. They differ in details but they share a core design philosophy: weaken Cas9's contacts with DNA just enough that perfect R-loops still form but imperfect ones don't.

A separate engineering line has tackled the **PAM constraint**. SpCas9 needs NGG. That's often fine but sometimes limiting. So people have engineered SpCas9 variants with relaxed PAMs. **xCas9** from David Liu's lab tolerates NG, GAA, and GAT. **SpCas9-NG** from Osamu Nureki's group tolerates NG broadly. **SpRY** — also from Liu's lab — is nearly PAMless, tolerating essentially any NRN PAM with reasonable activity. The trade-off is usually some reduction in efficiency and increase in off-targets, but for applications where you absolutely need to cut at a specific position with no nearby NGG, the relaxed-PAM variants are essential.

On size — the AAV problem — the search has been for naturally smaller Cas9 proteins from other bacteria. SpCas9 is 1,368 amino acids. The total coding region plus regulatory elements plus a guide RNA exceeds the ~4.7 kilobase packaging limit of AAV. People got it to work by using minimal promoters and squeezing, but it's tight, and it usually requires a dual-vector approach where Cas9 and the guide are in separate AAVs, dramatically reducing efficiency in vivo.

The smaller orthologs that have become standard:

**SaCas9** from _Staphylococcus aureus_, 1,053 amino acids, identified and characterized by Feng Zhang's group in 2015. PAM is NNGRRT, which is more restrictive than NGG but still workable. SaCas9 plus a guide fits comfortably in one AAV, making it the workhorse for in vivo AAV-delivered editing.

**CjCas9** from _Campylobacter jejuni_, even smaller at 984 amino acids. PAM is NNNNRYAC. Restrictive but again workable, and the smaller size leaves more room in AAV for regulatory elements and reporters.

**Nme2Cas9** from _Neisseria meningitidis_, 1,082 amino acids, PAM is NNNNCC. The Nme2 variant has an unusually high intrinsic specificity — it discriminates against off-targets more strictly than SpCas9 — and has been advanced into therapeutic development.

And then there are the **Cas12** family proteins — also Class 2 effectors but Type V rather than Type II. Cas12a, originally called Cpf1, is a single-protein effector like Cas9 but with several different properties: it uses only a crRNA, no tracrRNA needed; it has a T-rich PAM, TTTV, which is on the opposite side of the protospacer compared to Cas9; and it makes staggered cuts producing 5' overhangs rather than blunt ends. The staggered cut and the T-rich PAM make Cas12a useful in certain applications, particularly editing in AT-rich genomes, plant genomes, and contexts where you want sticky ends for HDR.

So the toolbox is not Cas9. The toolbox is _a family of Cas9 and Cas12 proteins and engineered variants_, each tuned for particular use cases. A modern paper will tell you exactly which variant it used and why, and you should always read that choice as a deliberate one, not a default.

\[Pause.\]

---

## SEGMENT 11 — Base editing: precise edits without a break

Now we get to one of the most consequential extensions of the CRISPR platform. To motivate it, let me restate the limitation that drove its invention. We want to make a precise single-base change in the genome — say, correct a pathogenic point mutation. The standard CRISPR approach is: cut with Cas9, supply an HDR donor with the corrected base, hope HDR happens. As we discussed, HDR is inefficient, restricted to dividing cells, and most of the time you instead get NHEJ-mediated indels, which destroy the gene rather than correct it. For therapeutic correction of point mutations, this is a poor tool.

In 2016, **David Liu's lab** at Harvard published a fundamentally different design. The paper was titled "Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage." Read that title carefully. _Editing of a target base._ _Without double-stranded DNA cleavage._ This is a tool that does what you wanted Cas9 plus HDR to do, but achieves it through completely different chemistry.

The system Liu built is called the **cytosine base editor**, **CBE**. Here is the architecture, and you need to understand each piece.

You take Cas9, and you inactivate one of its two nuclease domains by point mutation. Specifically, you mutate the RuvC domain — the H840A and surrounding mutations — so it can no longer cut the non-target strand. The HNH domain is left intact. The resulting protein is called **Cas9 nickase**, or **nCas9** — it makes a single-strand nick on the target strand rather than a double-strand break.

You fuse to the N-terminus of nCas9 a deaminase enzyme — specifically, **APOBEC1**, a cytidine deaminase that converts cytosine to uracil by removing an amine group. APOBEC1 normally acts on single-stranded RNA in cells, but it can also act on single-stranded DNA. Importantly, it can't act on double-stranded DNA — it needs the substrate to be unpaired.

You also fuse to the C-terminus of nCas9 a **uracil DNA glycosylase inhibitor**, **UGI**. UGI blocks the cellular enzyme UDG, which normally recognizes uracils in DNA and removes them as part of base excision repair. Blocking UDG prevents the cell from undoing your edit before it gets fixed in.

So the full construct is: APOBEC1 — nCas9(D10A) — UGI. We'll call it **BE3** in its original form, then BE4 with slight improvements.

Now watch how this works at the target. You design an sgRNA for the desired locus. The Cas9-APOBEC-UGI fusion loads the guide, finds the target, forms the R-loop. The non-target strand — the one displaced into the loop — is now single-stranded for a window of a few nucleotides, and APOBEC1, sitting on the N-terminus of the Cas9, is positioned right at that single-stranded window. APOBEC deaminates any cytosines it can reach within that window — typically positions 4-8 from the PAM-distal end of the spacer, what's called the **editing window**. Each deamination converts a C to a U. Meanwhile, the HNH domain nicks the target strand opposite the edits. The cell now has a U-containing strand and a freshly nicked complementary strand. Normal cellular DNA repair will use the U-containing strand as the template to repair the nick, putting in an A opposite the U. After one round of DNA replication or repair, the U gets replaced with a T. Net result: **C-to-T conversion** at the targeted base. No double-strand break. No HDR required.

This was a transformative tool. C-to-T conversion alone covers a huge fraction of human pathogenic point mutations. But it was only half the story. A year later, in 2017, Liu's lab followed up with the **adenine base editor**, **ABE**, which converts A to G. Adenine deaminases that act on DNA didn't exist in nature — there were RNA-targeting adenine deaminases like ADAR, but no known DNA-targeting one. So they evolved one. They took _E. coli_ tRNA adenine deaminase, **TadA**, which deaminates adenine on a specific tRNA, and put it through directed evolution in _E. coli_, selecting for variants that could deaminate single-stranded DNA. After several rounds of evolution they had a variant that worked. Fuse the evolved TadA to nCas9, follow the same architecture, and you get **A-to-G base editing** at the targeted base.

C-to-T and A-to-G are called the **transition mutations** because they change a purine to a purine or a pyrimidine to a pyrimidine. Together, the two base editors can install all four transition edits — C-to-T, G-to-A on the other strand, A-to-G, T-to-C on the other strand. That covers, by some estimates, around 60% of pathogenic point mutations in human disease. Not all — base editors can't do **transversions** like C-to-A or A-to-T. For those, you need the next tool.

A few subtleties worth knowing. The editing window — those few nucleotides where deamination can happen — is a window, not a single base. If there are multiple Cs (for CBE) or As (for ABE) within the window, you may get multiple simultaneous edits, called **bystander edits**, which can be a problem if the bystander changes are pathogenic or change a different amino acid. Modern base editor variants have been engineered with narrower or differently-shaped windows to mitigate this. Also, the original APOBEC variant has some off-target activity on RNA — it can deaminate cellular mRNA cytidines somewhat. Engineered APOBEC variants with reduced RNA activity have been developed. Like everything in this field, version 1.0 had issues; version 2.0 and beyond address them.

The therapeutic implications were immediate. Many human point mutation diseases — sickle cell, beta-thalassemia, various metabolic disorders, certain cardiovascular conditions — are now in clinical development with base editors as the editing modality. We'll come back to one — Verve Therapeutics' VERVE-101 for cardiovascular disease — when we discuss therapeutics.

---

## SEGMENT 12 — Prime editing: the search-and-replace tool

Liu's lab wasn't done. Base editors did transitions but not transversions. They couldn't do insertions or deletions. They couldn't make multi-base edits. There were whole classes of changes that were still out of reach.

In 2019, the same group published **prime editing**, which is the most ambitious extension of the platform to date. The paper, by Andrew Anzalone and colleagues from Liu's lab, described a tool that — in principle — can install any of the 12 possible base-to-base conversions, as well as small insertions and deletions of up to about 40 base pairs, at any chosen site, all without a double-strand break, all programmable by RNA.

Here is the architecture. Take the same Cas9 nickase, nCas9(H840A) — note this one nicks the _opposite_ strand from the CBE/ABE nickase. Fuse it at the C-terminus to a **reverse transcriptase** — specifically, an engineered variant of the Moloney murine leukemia virus reverse transcriptase. So you have nCas9 fused to RT.

The guide RNA is also extended. Instead of a normal sgRNA, you design a **prime editing guide RNA**, or **pegRNA**. The pegRNA contains, at its 3' end, two extra sequence elements. The first is a **primer binding site (PBS)**, which is complementary to a few nucleotides on the non-target strand right at the nick site — those nucleotides are exposed when Cas9 nicks the non-target strand. The second is a **reverse transcription template** that encodes the desired edit, in reverse-complement form, with flanking homology to the genomic sequence on either side.

Now the cycle. The prime editor — Cas9 nickase fused to RT, loaded with the pegRNA — finds the target via normal PAM and seed recognition. The nickase cuts the non-target strand (note: opposite from the base editors). The nicked end now has a free 3' OH that is exposed and single-stranded. The PBS portion of the pegRNA base-pairs with that exposed 3' end. The reverse transcriptase, sitting on the C-terminus of Cas9, now uses the pegRNA's RT template as a template and extends the nicked DNA 3' end — synthesizing new DNA that includes the desired edit.

The result is a 3' flap on the genomic DNA that contains the edited sequence, alongside the original 5' flap that contains the unedited sequence. The cell's natural flap-resolution machinery (often FEN1) chews off one of the two flaps. To bias the cell toward keeping the edited flap, the original prime editing constructs were paired with an additional sgRNA (called PE3) targeting the unedited strand for a second nick — this nudges the cell to use the edited strand as the template for resolution.

The net effect: the edit encoded in the RT template gets written into the genome. Any base-to-base swap, small insertion, or small deletion you encoded in the pegRNA shows up at the target. All 12 possible point mutations — C-to-A, C-to-G, C-to-T, A-to-C, A-to-G, A-to-T, G-to-A, G-to-C, G-to-T, T-to-A, T-to-C, T-to-G — are accessible. Small insertions, small deletions, the works. Without a double-strand break. Without HDR.

When the prime editing paper came out, the field reacted strongly. Some called it a "search-and-replace" tool for the genome. Others were more cautious — early prime editing efficiencies were lower than base editing, and the design of pegRNAs was more demanding than sgRNA design. But the versatility was real. Prime editing was, conceptually, the most general programmable editor anyone had built.

Subsequent improvements have addressed the efficiency. **PE4** and **PE5** added additional components — including a dominant-negative form of MLH1, a mismatch repair factor that otherwise tends to undo prime edits. **Enhanced pegRNAs** added structured RNA motifs to stabilize the pegRNA against cellular nucleases. **Twin prime editing (twinPE)** uses two prime editors at the same site to install larger insertions. **PASTE** combines prime editing with a serine integrase to install kilobase-scale insertions. The platform has continued to evolve.

The first clinical prime editing trial entered humans in 2024, for chronic granulomatous disease — a primary immunodeficiency caused by point mutations in the NADPH oxidase complex. Prime Medicine, the company David Liu co-founded around the technology, is developing the program. Early data are still emerging as I'm giving this lecture.

\[Pause.\]

So now you have the full toolkit of editors: **standard Cas9** for knockouts via NHEJ; **HDR plus Cas9** for precise edits in dividing cells when you can afford the inefficiency; **base editors** for the four transition mutations without breaks; **prime editors** for any small edit, including transversions and small indels, also without breaks. Each tool has its window of applications. Modern editing strategy is largely a matter of choosing the right tool for the desired edit. The field's collective understanding of which tool is best for which application is still being refined, but the toolkit is rich enough now that the right answer is almost always available, somewhere in the catalog.

---

## SEGMENT 13 — Delivery: getting the editor into the right cell

We have spent a lot of time on what the editor _does_. Let's now talk about how you get it _into the cell_, because for therapeutic applications this is at least as hard as the editing chemistry itself. A great editor that cannot be delivered to the target tissue is not a therapy.

There are three broad delivery paradigms, and a working scientist needs to know all three.

**Paradigm one: viral delivery.** Use a viral vector to deliver DNA encoding the Cas9 and the guide. The cell expresses the Cas9 and guide from the delivered DNA, and editing happens. Viral vectors used in CRISPR delivery include:

**Adeno-associated virus (AAV)** — the workhorse for in vivo gene therapy. AAV is a small single-stranded DNA virus with a roughly 4.7 kilobase packaging capacity. As we noted, SpCas9 alone is 4.2 kb and barely fits — guide RNA and regulatory elements have to be squeezed in. Smaller orthologs like SaCas9 fit more comfortably. AAV has multiple serotypes with different tissue tropisms — AAV2 broadly transduces many tissues, AAV8 prefers liver, AAV9 crosses the blood-brain barrier and reaches CNS, AAV-PHP.eB is engineered for even better brain delivery. The advantage of AAV is its excellent safety profile and long-lasting expression in non-dividing tissue; the disadvantage is the size constraint and pre-existing immunity in many humans (many people already have anti-AAV antibodies from prior natural exposure).

**Lentivirus** — derived from HIV-1, can integrate into the genome of dividing and non-dividing cells, carries a larger payload (~8 kb). Useful primarily for ex vivo applications where you modify cells outside the body and re-infuse them. Used heavily for CAR-T cell engineering.

**Adenovirus** — large payload (~30 kb), transient expression, strong immune response. Useful in some preclinical contexts but generally less favored than AAV for human therapeutics because of the immune response.

**Paradigm two: non-viral delivery of nucleic acids.** This usually means **lipid nanoparticles (LNPs)** — the same delivery technology that proved itself at scale with the COVID mRNA vaccines. LNPs are nanoscale lipid vesicles, formulated with an ionizable cationic lipid, cholesterol, a helper phospholipid, and a PEGylated lipid for stability. The ionizable cationic lipid is the key: at the slightly acidic pH used during formulation, it's positively charged and packages negatively-charged RNA; at the physiological pH of blood, it's neutral and circulates safely; in the acidic late endosome after cellular uptake, it becomes positively charged again and disrupts the endosomal membrane, releasing the RNA payload into the cytoplasm. Brilliant chemistry, hard-won over decades.

For CRISPR, LNPs can carry **mRNA encoding Cas9** plus a chemically modified synthetic guide RNA, or the Cas9 plus guide pre-assembled as a ribonucleoprotein. The mRNA approach gives transient Cas9 expression — the cell translates Cas9 from the mRNA for a day or two, edits happen, and then the mRNA degrades and Cas9 protein is cleared. This transient kinetics is actually a major safety advantage compared to viral delivery, which often produces prolonged Cas9 expression that increases off-target risk over time.

LNP-CRISPR has been the breakthrough delivery method for in vivo editing. The first FDA-approved CRISPR therapy used ex vivo editing, but the most exciting in vivo trials — Intellia's NTLA-2001 for transthyretin amyloidosis being the leading example — are LNP-delivered mRNA encoding Cas9. LNPs targeting the liver naturally accumulate there after intravenous infusion because of the size and surface properties of the particles; for other tissues, active targeting via surface ligands or engineered lipid composition is an active area of development.

**Paradigm three: direct protein delivery.** Deliver pre-formed Cas9 protein, with its guide already loaded, as a **ribonucleoprotein (RNP)**. The protein is purified, mixed with the synthetic guide in vitro to form an active complex, then introduced into cells. The advantage is that the RNP is active immediately upon entry, edits, and then is degraded by the cell within a day. No DNA is delivered, no risk of random integration, and the duration of Cas9 activity is shorter than with any other modality — minimizing off-targets that accumulate over time.

For ex vivo applications, RNPs are typically delivered by **electroporation** — a brief high-voltage pulse that transiently permeabilizes the cell membrane and lets the protein in. This is the standard approach for ex vivo CAR-T engineering and for the manufacturing of Casgevy, which we'll discuss next. For in vivo applications, getting an active protein-RNA complex into cells in the body is harder. Some progress with engineered LNPs and other carriers, but RNP delivery in vivo is still an area of active research.

\[Pause.\]

The choice of delivery is intimately tied to the application. If you're editing patient cells outside the body and re-infusing them — like a CAR-T or like Casgevy's sickle cell treatment — you have the luxury of electroporation and RNP delivery, which are highly efficient and safe in vitro. If you're editing in vivo, you need something that gets to the right tissue at the right concentration with acceptable safety — and right now that means either AAV (for tissues that don't divide rapidly and where you want long expression) or LNP-mRNA (for liver, primarily, and for other tissues as delivery technology improves). The delivery is not a footnote. The delivery is half the therapy.

---

## SEGMENT 14 — Therapeutic CRISPR: Casgevy and beyond

In December 2023, the FDA approved **Casgevy** — **exagamglogene autotemcel**, exa-cel for short — for the treatment of sickle cell disease in patients 12 and older. Several weeks later, in January 2024, it was also approved for transfusion-dependent beta-thalassemia. Casgevy is the first CRISPR-based therapy ever approved by any regulatory agency. It is a landmark moment, and the way the therapy works is worth understanding in detail because it illustrates how a successful CRISPR therapy actually gets to patients.

The disease. Sickle cell is caused by a single point mutation in the beta-globin gene — an A-to-T transversion that converts a glutamate to a valine at position 6 of the beta-globin chain. Hemoglobin made with this mutated beta-globin polymerizes under low-oxygen conditions, deforming red cells into the characteristic sickle shape, which causes vaso-occlusion, pain crises, organ damage, and reduced lifespan.

The obvious CRISPR approach would be to **correct the point mutation directly** — go in, fix the base, restore normal hemoglobin. This is technically possible with base editors or prime editors, and several such approaches are in clinical development. But Casgevy took a different and elegant path: instead of fixing the broken adult hemoglobin, **reactivate fetal hemoglobin**.

Here's the biology. Before birth, human red cells express fetal hemoglobin — made of alpha-globin paired with gamma-globin (not beta-globin). Fetal hemoglobin is fully functional, has slightly higher oxygen affinity (useful in the placenta), and is _not_ affected by the sickle mutation, because gamma-globin is a different protein from beta-globin. After birth, expression of gamma-globin is switched off and beta-globin takes over. The master switch that turns gamma-globin off is a transcription factor called **BCL11A**, expressed in red cell precursors in adults.

Now: people with naturally occurring genetic variants that reduce BCL11A activity continue to express fetal hemoglobin into adulthood — a benign condition called **hereditary persistence of fetal hemoglobin (HPFH)**. People with HPFH who _also_ have the sickle mutation are largely protected from sickle cell disease, because the fetal hemoglobin compensates. This was the clue. If you can turn off BCL11A in a sickle patient's red cell precursors, you can reactivate gamma-globin, restore fetal hemoglobin expression, and treat the disease — without ever touching the sickle mutation itself.

The Casgevy strategy. Take CD34+ hematopoietic stem cells from the patient's bone marrow, ex vivo. Electroporate them with a Cas9 RNP whose guide RNA targets the **GATA1 binding site in the +58 enhancer of the BCL11A gene** — a specific erythroid-lineage-restricted regulatory element that drives BCL11A expression only in red cell precursors. Cas9 cuts, NHEJ produces indels, the enhancer is disrupted, BCL11A is no longer turned on in red cell precursors. The edited stem cells are infused back into the patient — who has first been conditioned with chemotherapy to clear their existing hematopoietic stem cells. The edited cells engraft, repopulate the bone marrow, produce red cells with reactivated fetal hemoglobin, and the patient is functionally cured.

Clinical results have been striking. Most treated patients have not had a single pain crisis since treatment. The vast majority no longer need transfusions. Engineering a CD34+ population to disrupt one regulatory enhancer, performing autologous transplant — a cure for what was, until very recently, a life-shortening genetic disease for which there were essentially no curative options outside of risky allogeneic bone marrow transplant.

There are caveats. Casgevy requires the same conditioning chemotherapy as any bone marrow transplant — high-dose busulfan, which is itself toxic and has long-term risks including infertility. The treatment is currently priced at over two million dollars per patient. Access in low- and middle-income countries — where the burden of sickle cell disease is highest — is essentially zero. So Casgevy is both a triumph and a reminder that breakthrough therapies that don't reach the patients who need them most are an incomplete victory.

\[Pause.\]

Beyond Casgevy, several other CRISPR therapeutics are in clinical development. Let me highlight the most important.

**NTLA-2001** from Intellia Therapeutics is the leading **in vivo CRISPR therapy** — meaning the editor is delivered intravenously and the editing happens inside the patient's body, no ex vivo cell manipulation. The target is **transthyretin (TTR)**, a liver-produced protein that, in patients with mutations or as a feature of aging, misfolds and forms amyloid deposits in nerves and heart muscle, causing TTR amyloidosis. The therapy is an LNP carrying mRNA encoding Cas9 plus a guide targeting TTR. Injected intravenously, the LNP traffics to the liver, Cas9 is expressed, the TTR gene is disrupted in liver hepatocytes, and serum TTR levels drop by ~90% within weeks. Patients have shown durable reductions, and the disease has been functionally treated by knocking out the protein that causes it. This was the first in vivo CRISPR therapy to show clinical efficacy, and it represents the proof of concept for using LNP-CRISPR for any liver-expressed gene.

**Verve Therapeutics** is developing VERVE-101 (now VERVE-102), an in vivo base editor delivered by LNP to liver, targeting **PCSK9** for cardiovascular disease — knocking out PCSK9 lowers LDL cholesterol. This is the first clinical base editor and represents the move beyond cut-and-disrupt toward more precise edits.

**Editas Medicine** had been developing an in vivo AAV-delivered CRISPR for Leber congenital amaurosis type 10 (a form of inherited blindness), targeted to the retina; that program had clinical activity but was deprioritized for various reasons. Other ophthalmologic CRISPR programs continue.

And many ex vivo cell therapies — engineered allogeneic CAR-T cells where CRISPR is used to disrupt TCR genes for off-the-shelf use, hematologic disorders beyond sickle cell, and more — are in earlier-stage development.

The trajectory is clear. CRISPR therapeutics have moved from a 2012 paper to a 2023 approved drug in eleven years. That is, by drug development standards, very fast. The next decade will see substantial expansion: more in vivo applications, base and prime editors entering clinical use, and hopefully — though this is the hard part — a dramatic reduction in price and broader access.

---

## SEGMENT 15 — CRISPR diagnostics: SHERLOCK, DETECTR, and detecting nucleic acids

Now let me switch gears entirely. So far we've talked about CRISPR as a genome editing tool. But CRISPR can also be used as a **diagnostic** — a way to detect specific nucleic acid sequences in a sample. This is a completely different application of the same molecular machinery, and it has interesting properties.

The key insight that enabled CRISPR diagnostics came from a property of certain Cas effectors called **collateral cleavage** or **trans-cleavage**. Two systems exploit this:

**SHERLOCK** — Specific High-Sensitivity Enzymatic Reporter unLOCKing — from Feng Zhang's group, uses **Cas13a** (originally called C2c2), a Type VI effector that targets single-stranded RNA. When Cas13a is loaded with its guide RNA and that guide finds its complementary RNA target, Cas13a cuts the target — but then it also enters an activated state in which it begins cutting _any other_ single-stranded RNA in the vicinity, indiscriminately. This is the collateral cleavage.

**DETECTR** — DNA Endonuclease-Targeted CRISPR Trans Reporter — from Jennifer Doudna's group, uses **Cas12a** (Cpf1), which targets double-stranded DNA. Similarly, when Cas12a finds and cuts its target DNA, it enters an activated state and begins indiscriminately cutting single-stranded DNA in the vicinity.

Both phenomena enable the same diagnostic trick. You design a guide for your target sequence — say, a piece of viral RNA from SARS-CoV-2, or a specific HPV sequence, or a particular bacterial pathogen. You add to the reaction a **reporter** — a short single-stranded RNA (for Cas13) or single-stranded DNA (for Cas12) carrying a fluorescent dye on one end and a quencher on the other. As long as the reporter is intact, the quencher absorbs the fluorescent signal, and no fluorescence is detected. But if the target sequence is present in the sample, the Cas effector finds it, cuts it, becomes activated, and starts chewing up the reporter — releasing the fluorophore from its quencher. The reaction now fluoresces.

So you have a system that says: "yes, the target sequence is here" by lighting up. Cas13 alone can detect a few hundred copies of an RNA in a sample; coupled to a nucleic acid amplification step (like RPA, recombinase polymerase amplification) it can detect single copies. The whole reaction can be done in an hour, at body temperature, with minimal equipment. The readout can be fluorescence, or it can be transferred to a paper lateral flow strip — like a pregnancy test — that shows a colored line if the target is present.

This is the basis for **CRISPR-based point-of-care diagnostics**. During COVID-19, both Sherlock Biosciences (commercializing SHERLOCK) and Mammoth Biosciences (commercializing DETECTR) developed and deployed CRISPR-based SARS-CoV-2 tests that received emergency use authorization from the FDA. The tests were not as widely used as standard PCR or rapid antigen tests, but they demonstrated the platform's clinical applicability. Subsequent applications have targeted other infectious diseases — HPV, malaria, Lassa fever — and the platform is particularly attractive for low-resource settings because of its simplicity.

Diagnostic applications continue to expand. There are CRISPR-based methods for detecting circulating tumor DNA, for identifying specific cancer-associated mutations, for screening for pathogens in agriculture and food safety. The platform's specificity is genuinely useful — a single-base mismatch between guide and target can prevent detection, which means you can distinguish closely related strains or alleles.

\[Pause.\]

So when you think of CRISPR, expand your mental model. It is not only an editor. It is also a programmable nucleic acid detector. Same molecular logic — RNA-guided sequence recognition by a Cas protein — applied to a different end. The 2012 paper showed Cas9 cutting DNA at a programmed site. The diagnostic systems show Cas12 and Cas13 cutting at a programmed site _and then_ exploiting that recognition event to amplify a signal. Different chemistry, same conceptual core.

---

## SEGMENT 16 — CRISPR screens: perturbing the genome at scale

Now another major application: using CRISPR to do genetics at genome scale. This has transformed functional genomics in a way I want you to fully appreciate.

A **CRISPR screen** is a strategy in which you introduce a library of CRISPR guides into a population of cells — each cell gets one guide, hitting one gene — and you use selection to find which genes' knockouts cause some phenotype of interest. Conceptually it's like a classical mutagenesis screen, but it's targeted, complete (you can have a guide for every gene in the genome), and you can read out which guide is in which cell by sequencing the guide itself, which serves as a barcode.

The first genome-scale CRISPR knockout libraries were published in 2014. **GeCKO** — Genome-scale CRISPR Knock-Out library — from Feng Zhang and colleagues, contained around 65,000 guides targeting around 18,000 human genes, three to four guides per gene. **Brunello**, from John Doench and colleagues at the Broad in 2016, was the improved successor — around 76,000 guides, four guides per gene, with guides selected based on the improved Rule Set 2 efficiency scoring we discussed. Brunello is now the most widely used human knockout library; the mouse version is called **Brie**.

The standard workflow. You produce the library as a pool of lentiviral vectors, each carrying one guide RNA expression cassette plus Cas9. You transduce a large population of cells — typically a hundred million or more — at low multiplicity of infection so that most cells get exactly one guide. You select for transduced cells with an antibiotic resistance marker on the vector. You apply your selection — drug treatment, viral challenge, growth competition, FACS sorting on some marker, whatever your screen is. After selection, you sequence the guide cassettes from surviving cells and from a baseline reference, and you count the abundance of each guide in each population. Guides whose target gene knockouts were necessary for survival drop out of the selected population. Guides whose target gene knockouts were beneficial enrich.

This is a generic platform for **finding genes whose loss affects any selectable phenotype**. Used to find essential genes (those that drop out in any cell). Used to find drug-resistance genes (those whose loss makes cells resistant or sensitive to a drug of interest). Used to find genes required for a particular cellular process (with a fluorescent reporter for that process and FACS sorting). Used to find host factors required for viral infection. The list of phenotypes you can screen is essentially the list of phenotypes you can select for.

A massive ongoing project at the Broad, called the **Cancer Dependency Map (DepMap)**, has applied this strategy to over a thousand cancer cell lines, identifying which genes are essential in which cancers — providing a systematic catalog of cancer vulnerabilities and revealing previously hidden synthetic lethalities. This is a public resource. Every time someone in oncology is looking for a new drug target, DepMap is the first stop.

Beyond knockout screens, two adjacent technologies extend the platform:

**CRISPRi screens** — using dCas9-KRAB (which we'll discuss in the next segment) to knock down rather than knock out gene expression. Useful when you want to titrate gene activity rather than eliminate it, or when knockouts are too toxic for cells to survive.

**CRISPRa screens** — using dCas9 fused to activators to upregulate gene expression. The flip side of knockouts: now you're asking which genes' overexpression confers a phenotype.

And then there's **Perturb-seq**, developed in 2016 independently by Aviv Regev's and Jonathan Weissman's groups. Perturb-seq combines CRISPR perturbations with single-cell RNA sequencing. Each cell gets a guide that perturbs one gene, then you do single-cell transcriptomics on the perturbed population. The readout isn't survival — it's the entire transcriptional response to each perturbation, measured in thousands of cells. This is, in principle, the most informative possible genetic screen: for each gene perturbation, you see the global cellular response. Recent expansions of Perturb-seq have profiled perturbations of every essential gene in a cell, building a "phenotype map" of essential gene perturbation at single-cell resolution.

The conceptual point. Before CRISPR, doing systematic genome-scale genetics in mammalian cells was either impossible or required RNA interference — which is noisy and incomplete. CRISPR screens let you do, in a few months, what would have taken decades by classical approaches. Functional genomics — actually knowing what every gene in the genome does — went from an aspirational long-term project to a tractable, ongoing enterprise. You can imagine the next generation: comprehensive maps of all gene-gene interactions, all gene-drug interactions, all gene-environment interactions, built CRISPR screen by CRISPR screen.

---

## SEGMENT 17 — CRISPRi and CRISPRa: transcriptional control without cutting

Let me back up to the technology behind those CRISPRi and CRISPRa screens, because it's both elegant and broadly used outside of screens. It's also conceptually the cleanest illustration of a fundamental engineering move: **CRISPR is not just a cutter; it's a programmable DNA binder, and you can put anything you want on the binding event.**

The starting point is **dCas9** — **dead Cas9** — a Cas9 protein in which both nuclease domains have been inactivated by point mutation. HNH is killed by H840A. RuvC is killed by D10A. Both together produce a protein that still binds DNA at PAM-licensed, sgRNA-specified sites with full sequence specificity, but no longer cuts. It just sits there. Programmed to a specific site, doing nothing.

That's the perfect chassis for adding new functions. Whatever protein domain you fuse to dCas9 gets recruited to whatever genomic site your guide RNA specifies. The cut is gone; what's left is a programmable recruitment system.

**CRISPR interference (CRISPRi)** is the application of this for gene silencing. The original CRISPRi system, developed by Jonathan Weissman's group in 2013, used dCas9 alone, simply targeted to a promoter or early coding region — by sitting on the DNA, dCas9 physically blocked RNA polymerase from transcribing the gene. This worked but was modest. The improved version, also from the Weissman lab, fused dCas9 to **KRAB** — a Krüppel-associated box, a domain from zinc finger transcription factors that recruits the powerful KAP1 corepressor complex, which in turn recruits heterochromatin-forming machinery including HP1 and the histone methyltransferase SETDB1. The result: dCas9-KRAB targeted to a gene's promoter recruits heterochromatin formation, silencing the gene with high efficiency and durability.

CRISPRi has several advantages over knockout for gene silencing studies. It's **titratable** — you can get partial knockdown by varying guide efficiency or expression level. It's **reversible** — turn off dCas9-KRAB expression and the gene comes back. It's **non-mutagenic** — no permanent DNA changes. And it works at **essential genes** that you can't knock out at all because the cells die before you can characterize them.

**CRISPR activation (CRISPRa)** is the opposite operation. Fuse dCas9 to a transcriptional activator domain and target it to a promoter or upstream regulatory region, and you upregulate the gene. The original CRISPRa used **VP64** — four tandem copies of the herpesvirus VP16 activation domain — fused to dCas9. This worked, but was modest.

Several enhanced CRISPRa systems followed. **SAM** — **Synergistic Activation Mediator** — from Feng Zhang's group, takes a multi-component approach. dCas9 is fused to VP64. The sgRNA is modified to include MS2 RNA aptamer loops that recruit additional MS2-coat-protein fused activators: **p65** (the activation domain of NFkB) and **Rta** (an Epstein-Barr virus activator). The combination of three different activator domains at the same site produces synergistic activation — often 100-fold or more upregulation of the target gene. Other variants — **SunTag** (which recruits multiple copies of VP64 via repeat-bound antibody-scFvs) and **VPR** (a single fusion of VP64-p65-Rta) — achieve similar potencies through different routes.

CRISPRa is a powerful tool because it lets you ask the opposite of the classical knockout question. Knockout asks: what does loss of this gene do? Activation asks: what does overexpression of this gene do? Both are necessary to fully characterize gene function, and CRISPRa makes the activation question as tractable as the loss-of-function question.

And dCas9 has many other applications beyond transcriptional control. Fuse dCas9 to a fluorescent protein and you can **image specific genomic loci** in living cells. Fuse it to a chromatin modifier — a methyltransferase, a demethylase, a histone acetyltransferase — and you can **edit the epigenome** at a specific locus. Fuse it to a nuclease — wait, that's just regular Cas9, never mind. The point is: dCas9 is a programmable handle, and the field has bolted a remarkable number of cargo proteins onto it. **Epigenome editing** with dCas9-DNMT3A or dCas9-TET1 to install or remove specific DNA methylation marks; **chromatin loop engineering**; **3D genome organization perturbation** — all of these are dCas9-based tools, all of them inheriting the programmability of CRISPR while replacing the cutting with something more nuanced.

This is the larger lesson. The original CRISPR technology was about cutting. But the more general technology is about **programmable molecular addressing** — putting any function you want at any DNA site you want, with the guide RNA as the address book. Once you internalize that, every dCas9 fusion paper makes sense, and you can probably predict the next several before they're published.

\[Pause.\]

---

## SEGMENT 18 — Ethics, the frontier, and the questions left unsettled

We are nearly done. I want to spend the final segment on the ethical and frontier questions, because no honest treatment of CRISPR can stop at the technology without addressing the harder questions about what we should and shouldn't do with it.

In November 2018, a Chinese scientist named **He Jiankui** announced that he had used CRISPR-Cas9 to edit the genomes of **human embryos** that had been implanted, carried to term, and resulted in the birth of twin girls — known by the pseudonyms Lulu and Nana. He had targeted the **CCR5** gene, attempting to install a deletion similar to the natural CCR5-Δ32 allele, with the stated goal of conferring resistance to HIV (the father was HIV-positive).

The announcement detonated the scientific community. It was, by every reasonable standard, a catastrophic violation of research ethics. The procedure had not been peer-reviewed, the parents' consent process was deeply problematic, the rationale was medically unjustifiable (there are far better ways to prevent vertical HIV transmission than germline editing of the child), the editing itself was technically poor (the edits were not clean replicas of CCR5-Δ32 and may have produced unknown off-target effects), and crucially the edits would be **inherited** by any future descendants — heritable germline modification of the human genome, a line that the global scientific community had agreed not to cross.

He Jiankui was condemned by essentially every relevant scientific organization. He was sentenced to three years in prison in China for "illegal medical practice" in 2019. He was released in 2022. The twin girls are now young children, presumably being raised in privacy, with unknown long-term consequences of the editing.

The episode focused the world's attention on a question the field had been treating as comfortably hypothetical. **Should we ever do heritable germline editing in humans?** Most major scientific organizations have called for a moratorium on clinical germline editing while broader societal deliberation happens. The 2020 report from the International Commission on the Clinical Use of Human Germline Genome Editing established a framework that, in principle, would permit germline editing only for serious genetic diseases with no alternatives, only with extensive preclinical validation, and only with broad societal consensus — conditions that effectively no one currently meets.

The deeper question, of course, is whether the moratorium will hold as the technology continues to mature, as costs drop, and as some country eventually decides the potential benefits — disease prevention, possibly enhancement — outweigh the consensus. This is not a settled question. It is a live, ongoing global debate, and the answer will be shaped by all of you — by your generation of scientists and citizens — as much as by anyone else.

\[Pause.\]

Beyond germline editing, there are other frontiers worth flagging.

**Prime editing's scope is expanding rapidly**. The original 2019 paper installed edits of up to about 40 base pairs. More recent prime editing variants — **twinPE**, **PASTE**, and others — install kilobase-scale insertions by combining prime editing with serine integrases or with secondary recombinases. This is starting to approach the long-standing dream of programmable **gene replacement** — taking an entire defective gene out of the genome and replacing it with a functional version, all in situ, without integration into random sites. If that dream is fully realized, it will represent a level of genome engineering precision substantially beyond what we currently have.

**Programmable proteins beyond cutting** is another frontier. We've talked about base editors, prime editors, dCas9 fusions for transcription, dCas9 fusions for imaging and epigenome editing. Continued protein engineering — including, increasingly, AI-driven protein design — is generating new RNA-guided enzymes with capabilities that don't exist in nature. **OMEGA systems** — RNA-guided nucleases derived from transposon-associated TnpB and IscB proteins, ancestors of the CRISPR effectors — are smaller than Cas9 and could be more deliverable. Engineered fusion proteins combining CRISPR with site-specific recombinases enable larger-scale rearrangements. The toolbox is still expanding, fast.

**The patent and access debates continue**. As I write this lecture, the CRISPR patent disputes are still being litigated in various jurisdictions. The licensing landscape remains fragmented. And the broader question of access — who can afford CRISPR therapies, who can deploy CRISPR-based diagnostics, who has the regulatory infrastructure for in vivo editing — is, if anything, more urgent now that Casgevy is approved than it was when the technology was still in development. A two-million-dollar cure for sickle cell that reaches a few hundred wealthy patients while millions in sub-Saharan Africa continue to die is not, by any reasonable definition, a success. The next decade of CRISPR therapeutics will be judged not only by the molecular performance of the editors, but by whether the field finds delivery models, manufacturing models, and pricing models that actually reach the people who need them.

**Resistance and immunogenicity**. Cas9 from _Streptococcus pyogenes_ is a bacterial protein, and many humans have circulating antibodies and pre-existing T-cell responses against it, because _S. pyogenes_ is a common human pathogen (strep throat). For in vivo CRISPR therapies, this immune recognition can cause clearance of edited cells or inflammatory responses. The field is actively working on this — engineered Cas9 variants with reduced immunogenicity, transient delivery to minimize exposure, and choice of orthologs from less common bacteria.

**Off-targets remain a concern, even with all the engineering**. The high-fidelity Cas9 variants and the unbiased detection methods (GUIDE-seq, CIRCLE-seq, DISCOVER-seq, and others) have made off-target risks measurable and minimizable, but never zero. For therapeutic applications, especially in vivo where you can't pre-screen the edited population, off-target tolerance is a critical safety question. Each new therapy goes through extensive off-target characterization before clinical use, and the field's understanding of acceptable off-target burdens is still being refined.

\[Pause.\]

So that's where we are. A bacterial immune system, discovered slowly across two decades, reprogrammed in 2012, demonstrated in mammalian cells in 2013, exploded into ten thousand laboratories within five years, produced an approved therapy in eleven years. A handful of variants, an explosion of derivative tools, a Nobel Prize, a patent fight, a moratorium, and a long list of unsettled ethical questions.

If you take only one thing from this lecture, take this. CRISPR was not predicted. The discovery that bacteria have an adaptive immune system built out of arrays of viral DNA was made by people who weren't trying to invent a genome editing tool. They were sequencing genes for unrelated reasons, or trying to make yogurt fermentation more reliable, or curious about strange repetitive sequences in archaea. The technology that has reshaped biology grew out of basic curiosity-driven research into questions that no one would have called urgent or applied. Mojica spent years asking what those repeats meant when most of the field considered them a curiosity. Barrangou and Horvath were trying to keep yogurt from going bad. Charpentier was characterizing small RNAs in a bacterium most people would have considered a niche pathogen.

The lesson, I would argue, is that the future of biology is going to come from places we can't predict, asked by people working on questions that don't currently look important. The job of a scientist is not to solve the problems that look pressing today. The job of a scientist is to follow the curious threads wherever they lead, because some of those threads will, in twenty years, turn out to be the foundation of the next revolution. CRISPR is the most spectacular recent example. There will be others. Be prepared to notice them — and, like Fleming with his contaminated plate, like Mojica with his odd archaeal repeats, like Temin with his actinomycin D paradox, be prepared to bother to look.

Thank you. We'll take questions.

---

## APPENDIX — Quick-reference summary (not for reading aloud)

**Core idea**: CRISPR-Cas is a bacterial adaptive immune system in which short guide RNAs (crRNAs, derived from a CRISPR array of spacers) direct Cas effector proteins to cleave matching foreign DNA (or RNA). Reprogrammed as a tool, it provides **RNA-guided, programmable nucleic acid editing**.

**Discovery timeline**: Ishino 1987 (odd repeats in _E. coli_ iap region) → Mojica 2000 (CRISPR named) → Mojica + Vergnaud 2005 (spacers match phage DNA — immune hypothesis) → Barrangou + Horvath 2007 (experimental proof in _S. thermophilus_) → Jinek/Chylinski/Charpentier/Doudna 2012 (Cas9 + crRNA + tracrRNA → sgRNA, in vitro programmable cleavage, _Science_) → Zhang and Church 2013 (mammalian editing, _Science_ same day) → Doudna + Charpentier Nobel Chemistry 2020 → Casgevy FDA approval 2023.

**Bacterial system architecture**: 3 stages — **adaptation** (Cas1-Cas2 acquire new spacers, PAM-licensed self/non-self discrimination), **expression** (pre-crRNA transcribed, processed to mature crRNAs), **interference** (crRNA-loaded Cas effector cleaves matching foreign DNA). 2 classes (multi-protein vs single-protein effectors), 6 types: I/III/IV (Class 1, multi-protein); II = **Cas9**, V = **Cas12**, VI = **Cas13** (Class 2, single-protein).

**SpCas9 mechanism**: 1,368 aa, bilobed (recognition + nuclease). **PAM = NGG**. **HNH** cuts target strand, **RuvC** cuts non-target strand, **blunt DSB 3 bp upstream of PAM**. PAM-licensed scanning → seed pairing (positions 11–20, PAM-proximal) → full R-loop → cut. Sits on cut for minutes.

**Repair pathways**: **NHEJ** (Ku70/80 → DNA-PK → ligase IV; error-prone; indels; cell-cycle independent; knockout workhorse). **HDR** (resection → strand invasion of homologous template; precise; requires S/G2 phase and donor; inefficient).

**Engineered/ortholog Cas9 variants**:
- High-fidelity: **eSpCas9** (Zhang), **SpCas9-HF1** (Liu), HypaCas9, evoCas9, Sniper-Cas9.
- Relaxed PAM: **xCas9**, **SpCas9-NG**, **SpRY** (near-PAMless).
- Smaller orthologs (AAV-friendly): **SaCas9** (1,053 aa, PAM NNGRRT), **CjCas9** (984 aa), **Nme2Cas9** (1,082 aa, PAM NNNNCC).
- **Cas12a** (Cpf1): single crRNA, TTTV PAM, staggered cuts (5' overhangs).

**Base editing** (Liu, 2016/2017): nCas9(D10A, RuvC-dead) fused to a deaminase, no DSB.
- **CBE** = APOBEC1–nCas9–UGI → **C→T** (and G→A on opposite strand). Editing window ≈ positions 4–8 from PAM-distal end.
- **ABE** = evolved TadA–nCas9 → **A→G** (and T→C). Together cover 4 transitions, ~60% of pathogenic point mutations.

**Prime editing** (Liu, 2019): nCas9(H840A) fused to MLV reverse transcriptase + **pegRNA** (spacer + scaffold + PBS + RT template). Nicks non-target strand → PBS primes RT → new DNA flap encodes edit → flap resolution incorporates edit. All 12 base-to-base conversions + small indels (~40 bp). PE2 → PE3 (second nick) → PE4/PE5 (MLH1dn) → enhanced pegRNAs → twinPE/PASTE for larger insertions.

**Guide design**: efficiency via **Rule Set 2** (Doench 2016, position-specific nucleotides, GC ~40-60%, avoid TTTT, avoid hairpins, prefer open chromatin); specificity via **CFD score** (mismatch penalties weighted by position; seed positions 11-20 most stringent). Target early exon for knockouts. 3-5 guides per gene for important experiments.

**Delivery**:
- **Viral**: AAV (4.7 kb limit — tight fit; serotypes for tropism; AAV8 liver, AAV9 brain), lentivirus (integrates, ex vivo CAR-T), adenovirus (large payload, immunogenic).
- **Non-viral**: LNPs (mRNA-Cas9 + sgRNA, transient; liver-tropic by default).
- **RNP**: pre-formed Cas9-guide protein, electroporation (ex vivo standard), shortest activity window → fewest off-targets.

**Therapeutics**:
- **Casgevy (exa-cel)** — sickle cell + β-thal, FDA Dec 2023/Jan 2024. Ex vivo CD34+ stem cells, RNP electroporation, Cas9 cuts **BCL11A +58 erythroid enhancer** → derepresses γ-globin → fetal hemoglobin compensates. Requires busulfan conditioning; ~$2M.
- **NTLA-2001** (Intellia) — in vivo LNP-mRNA Cas9, liver, knocks out **TTR** for transthyretin amyloidosis; ~90% serum TTR reduction.
- **VERVE-101/-102** (Verve) — in vivo LNP base editor targeting **PCSK9** for hypercholesterolemia.
- Prime editing first-in-human 2024 — chronic granulomatous disease (Prime Medicine).

**Diagnostics** (collateral cleavage):
- **SHERLOCK** (Zhang) — **Cas13a** targets RNA, trans-cleaves ssRNA reporter. RPA amplification + Cas13 + fluorescent/lateral flow readout. Used in COVID detection.
- **DETECTR** (Doudna/Mammoth) — **Cas12a** targets dsDNA, trans-cleaves ssDNA reporter.

**Screens**: pooled lentiviral sgRNA libraries — **GeCKO** (2014), **Brunello** (human, Doench 2016, 76k guides), **Brie** (mouse). One guide per cell, select, sequence guides as barcodes. **DepMap** = cancer dependency map across 1000+ cell lines. **CRISPRi/a screens** use dCas9-KRAB or dCas9-activator libraries. **Perturb-seq** (Regev/Weissman 2016) = CRISPR + scRNA-seq, transcriptional readout per perturbation.

**dCas9 platforms** (D10A + H840A, binds but doesn't cut):
- **CRISPRi**: dCas9-KRAB recruits KAP1 → heterochromatin. Reversible, titratable, works at essential genes.
- **CRISPRa**: dCas9-VP64; **SAM** (VP64 + MS2-aptamer–recruited p65 + Rta); SunTag; VPR. Up to ~100× activation.
- Epigenome editing (DNMT3A, TET1, p300, LSD1 fusions), live-cell locus imaging (dCas9-GFP), 3D genome perturbation.

**Ethics frontier**:
- **He Jiankui 2018** — CCR5 germline editing of twins; widely condemned; 3-year prison sentence; global moratorium reaffirmed.
- 2020 ICCUHGGE framework: germline editing only for serious diseases with no alternatives + extensive preclinical + societal consensus.
- Frontier: kilobase prime editing (twinPE, PASTE), OMEGA / TnpB / IscB smaller RNA-guided nucleases, AI-designed editors, Cas9 immunogenicity engineering, access/pricing for global therapeutic equity.

**One-sentence summary**: RNA-guided DNA cleavage made what used to be impossible routine — from a bacterial defense against phage, to a programmable nuclease, to base and prime editors, to approved cures and point-of-care diagnostics, in a single decade.

