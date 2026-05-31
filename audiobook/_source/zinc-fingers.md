# Zinc Finger Nucleases: The First Programmable Scissors

**A 2-hour undergraduate genome editing lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — Before CRISPR, there were zinc fingers

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about zinc finger nucleases — and to tell that story properly we're going to talk about the whole zinc finger toolkit, the proteins these were built on, the company that bet everything on them, and the strange, beautiful, frustrating decade and a half when zinc fingers were the only game in town for editing the human genome.

I want to start with a confession, or maybe a warning. If you came into this room knowing one thing about gene editing, it's probably CRISPR. CRISPR is in the news. CRISPR won the Nobel Prize in 2020. CRISPR is what your friends have heard of. And CRISPR, fairly enough, is the technology that has democratized genome editing — made it cheap, fast, and available to any graduate student with a freezer and a few hundred dollars. CRISPR is, I will concede, the better tool for most jobs today.

But CRISPR didn't appear out of nowhere. The idea that you could program a protein to find a specific sequence in a three-billion-base human genome and cut it — the idea that you could, in principle, perform surgery on DNA at single-nucleotide resolution — that idea was already old by the time CRISPR arrived. It had been proven. It had been turned into a drug. It had been infused into patients in clinical trials. And the technology that did all of that — the technology that demonstrated, for the first time, that programmable genome editing in human cells was not science fiction but engineering — was zinc finger nucleases.

So today's lecture is, in part, a history lesson. It's the story of how a beautiful little protein motif that crystallographers stumbled into in the 1980s became, by the 2000s, the foundation of an entire industry, and then how a different technology came along and ate that industry's lunch — but not before zinc fingers proved that the whole enterprise was possible. And it's also a working knowledge of the technology itself, because zinc fingers are not dead. Quietly, in clinical pipelines and in certain niches where CRISPR struggles, zinc fingers are still doing the work. There are patients alive today, in 2026, who are being treated with zinc finger therapies. There is a base editor on the bench that uses zinc fingers instead of Cas9 for its targeting. The field has not abandoned them. It has just stopped talking about them in headlines.

\[Pause.\]

Here's the analogy I want you to hold for the next two hours. Imagine the human genome as a library — three billion letters long, bound in twenty-three pairs of volumes, sitting on shelves inside every cell of your body. You want to walk into that library, find a single specific sentence, and either underline it, cross it out, or replace it with a different sentence. That is the genome editing problem.

Before zinc finger nucleases, we had no good way to do this. We had ways to add genes to cells, but they inserted randomly — like throwing a new page into the library and letting it land wherever gravity took it. We had ways to delete genes in mice, using a slow, painful process called homologous recombination that worked maybe one time in a million and took years. We could do a lot of biology, but we could not, in any practical sense, _edit_ a specific gene in a living human cell.

Zinc finger nucleases changed that. A zinc finger nuclease is — and hold this image — **a pair of three-fingered hands joined to a tiny pair of molecular scissors**. The hands grip the DNA. They each grip a specific stretch of letters. When both hands have found their targets on opposite sides of the same sentence, the scissors close, and the DNA gets cut. The cell, presented with a cut chromosome, panics, and tries to repair it — and we use that panicked repair to introduce the edit we want. That, in a sentence, is what a ZFN does.

If you walk out of here in two hours and you can do three things — one, sketch a zinc finger nuclease and tell me what each part does and why; two, explain in plain English why ZFN design is hard and why engineering them remained an artisanal craft for so long; three, tell me the story of how this technology got into a human being's vein and treated a real disease — then we've succeeded. Everything else hangs off those three.

And let me give you the line I want you to remember when you leave this room. **Before CRISPR, before TALENs, there were zinc fingers.** Zinc fingers proved that programmable genome editing was possible. Everything that came after stood on that proof.

Now let's go meet the protein itself, because the molecular details are gorgeous and they explain almost everything that came later.

---

## SEGMENT 2 — The Klug discovery — a tiny hand with three fingers

So let's go back to 1985. The setting is the MRC Laboratory of Molecular Biology in Cambridge, England — a kind of holy site for structural biology, the place where the double helix had been figured out three decades earlier. And the man at the center of this story is **Aaron Klug**, a South African-born crystallographer who had already won the Nobel Prize in 1982 for his work on developing electron crystallography of biological macromolecules. Klug is one of those scientists who shows up in three or four different chapters of any honest history of molecular biology, because he kept stumbling into important things.

Klug was working on a transcription factor — a protein that controls when genes get turned on — from the African clawed frog, _Xenopus_. The protein is called TFIIIA, and it binds to a specific DNA sequence in the gene for 5S ribosomal RNA. Klug and his colleague Jonathan Miller were trying to figure out the structure of this protein, and they noticed something odd in their biochemistry. The protein contained a lot of zinc — far more than you'd expect for a typical protein, which usually contains zero. And it contained the zinc in a very repetitive pattern. Every roughly thirty amino acids, the protein had the same arrangement: two cysteine amino acids, then twelve other residues, then two histidine amino acids. Cysteine-cysteine, gap, histidine-histidine. Over and over again. Nine times in this one protein.

\[Pause.\]

Cysteine and histidine, for those of you who haven't seen amino acids in a while, are the two amino acids in the standard biological toolkit that are best at grabbing metal ions. Cysteine has a sulfur atom. Histidine has a nitrogen ring. Both of them are happy to coordinate a metal — to wrap around it and hold it in place. And in this protein, you had pairs of cysteines and pairs of histidines, arrayed at exactly the spacing you'd need for them to grab a zinc ion together — two cysteines on one side, two histidines on the other, and a zinc ion held in the middle like a marble in a tiny clamp.

Klug proposed that each of these repeating units — what we now call a **Cys2-His2 zinc finger** — was a small, independent folding unit, a little protein module about thirty amino acids long, held in shape by a single zinc atom. The amino acids that weren't part of the zinc-coordinating set could fold into a small alpha helix and a tiny beta sheet, making a compact little structure shaped vaguely like — well, vaguely like a finger. Hence the name. Zinc finger. A small fingerlike loop of protein, stabilized by a zinc ion, that could stick out from the rest of the molecule and touch DNA.

Here's the analogy that I want you to hold. A zinc finger is **a tiny hand with one finger — a single finger of protein, with a zinc atom inside it like the bone in the joint**. Without the zinc, the finger collapses; it can't fold. With the zinc in place, the finger holds its shape, and that shape is rigid enough to fit snugly against the DNA double helix.

And critically — this is the part that took another few years to nail down — **one zinc finger touches three base pairs of DNA**. Three letters. That's it. The finger nestles into the major groove of the double helix, and the side chains of three or four specific amino acids on the surface of the finger make contact with three consecutive bases on one strand of the DNA. So you have a tiny protein module — one finger — that reads three letters of the genetic code.

\[Pause.\]

Now, three letters by themselves is not very specific. The human genome has three billion letters; a three-letter sequence will appear, on average, every sixty-four bases. If you only had one finger, you'd bind everywhere and you'd bind nothing usefully. But that frog protein, TFIIIA, didn't have one finger. It had _nine_. And those nine fingers were arranged in a row, like fingers on a hand — except a hand with nine fingers — each one reading its own three-letter block, all of them lined up along the DNA. Nine fingers times three letters per finger equals twenty-seven letters of contact. Twenty-seven letters is more than enough to specify a unique address in the genome. Four to the twenty-seventh power is about eighteen million billion possible sequences, vastly more than the three billion that exist in your genome. A nine-finger array, if it could be designed well, could specify a single unique site.

Klug's insight, more than anything else, was that **zinc fingers are modular**. Each one is a self-contained reader. Each one reads three bases. You could imagine, in principle, mixing and matching them — picking up a finger that reads a particular three-letter codeword and snapping it onto another finger that reads a different three-letter codeword, building up a custom protein that recognizes whatever sequence you want.

Klug himself didn't quite see all the way through to this engineering future in 1985. But within a few years, other groups had picked up the thread and started asking the obvious question — if zinc fingers are modular DNA-recognition Lego blocks, can we build them to order? Can we design a protein that grips, say, the exact twenty-seven bases inside a human disease gene, and only that gene, out of three billion possibilities?

That's the question we'll spend the rest of the lecture answering. Spoiler: the answer is "yes, but it's much harder than it looks." But before we get to the engineering, let me say one more thing about the natural biology, because it's important context. Cys2-His2 zinc fingers are not a weird rare thing. They are, in fact, the **most common DNA-binding domain in the entire eukaryotic genome**. About three percent of all human genes encode proteins that contain at least one zinc finger. The transcription factors that turn your genes on and off, in cell type after cell type, throughout your development and your adult life, are dominated by zinc finger proteins. Your body is using zinc fingers, right now, in every cell, to decide which genes get expressed. Evolution discovered this DNA-reading motif a billion or so years ago and has been reusing it ever since.

So when we engineer ZFNs in the lab, we're not inventing a new chemistry. We're hijacking a chemistry that was already in the cell, that the cell already knew how to fold, that the cell's quality-control systems already recognized as legitimate. That turned out to be one of the reasons ZFNs worked in human cells when other approaches failed. They were already speaking the cell's native language.

---

## SEGMENT 3 — One finger, three bases — the modular reading dream

So we've got this beautiful picture. A zinc finger is a tiny protein module. It reads three bases of DNA. You can string several together to read longer sequences. If each finger is a Lego block, then in principle you should be able to assemble any DNA-binding protein you want, just by picking the right fingers and snapping them together.

That is the dream. Let me tell you about how people tried to make the dream real, because the story is more interesting — and more cautionary — than the rosy version you'll see in textbook diagrams.

The first big push happened in the early 1990s, primarily in the lab of **Carl Pabo** at MIT (later at Caltech and Harvard), with Pabo's student **Yen Choo** doing a lot of the foundational work, and in parallel in the lab of **Jeremy Berg** at Johns Hopkins. They asked the basic structural question: when a zinc finger binds DNA, which amino acids on the finger actually touch which bases on the DNA? And can we figure out a code — a translation table — that tells us, "if you want to read this three-letter sequence, use these amino acids at these positions on the finger"?

Through a combination of solving crystal structures and doing painstaking binding experiments, they worked out a rough version of this code. The key positions turn out to be on the alpha helix of the finger, at amino acid positions that are conventionally numbered minus-one, two, three, and six. The amino acid at position minus-one tends to contact the third base of the three-letter binding site. The amino acid at position three contacts the middle base. The amino acid at position six contacts the first base. Position two does some helper contacts. So you have, roughly, three or four amino acids on each finger that determine which three bases that finger prefers.

\[Pause.\]

Here's the analogy. Think of each zinc finger as a **little hand with three fingers, and each finger has a different fingerprint — a different chemical preference for one of the four DNA letters**. By changing the fingerprint — by mutating the amino acid at the relevant position — you change which letter that fingertip likes to grip. Pick the right combination of fingerprints, and you build a hand that grips exactly the three-letter sequence you want.

This was the **modular assembly** dream. The idea was: build a library of well-characterized fingers, each one optimized to read a particular three-letter codeword — a finger for GAA, a finger for CTG, a finger for AAT, and so on, ideally all sixty-four possible three-letter codes. Once you had this library, designing a ZFN became a problem of looking up your target sequence in a table, picking the right fingers from the shelf, snapping them together with a short flexible linker, and you'd have a custom DNA-binding protein ready to go.

Several groups built such libraries and made them public, including a really important one published by the **Zinc Finger Consortium** in the mid-2000s. The consortium was a deliberate open-science effort, led by people like **Carlos Barbas** at Scripps and **Toni Cathomen** in Germany and **Keith Joung** at Harvard, to put zinc finger reagents into academic hands without the patent thickets that surrounded the commercial efforts. The consortium published designs, distributed plasmids — many of them through Addgene, the nonprofit plasmid repository that's now a quiet backbone of academic molecular biology — and tried to make ZFNs accessible to labs that couldn't pay licensing fees.

\[Pause.\]

And here is where I have to give you the catch, because if modular assembly had just worked, this would be a much shorter lecture. **It didn't quite work.** Or rather, it worked, but with a much lower success rate than the dream had promised. When researchers picked fingers from the library, assembled them according to the lookup table, and tested the resulting protein on its predicted DNA target, only a fraction — perhaps thirty percent, maybe less — actually bound their target with useful affinity and specificity. The rest either bound weakly, bound the wrong sequence, or didn't bind at all.

Why? Because of something we'll dedicate a whole segment to in a moment, called **context dependence**. The short version is: a zinc finger doesn't just read its own three bases in isolation. Its behavior depends on which fingers are sitting next to it. Two fingers that work fine independently can interfere with each other when placed adjacent. The finger on the left changes the geometry of the DNA, or makes a stray contact with the finger on the right, or its preferred orientation conflicts with what the right finger wants. The Lego analogy turned out to be too clean. Real zinc fingers behave less like Lego and more like — I don't know — bickering siblings in the back seat of a car. Put two together, fine. Put three together, somebody's elbow is in somebody's face.

That insight took years to fully understand, and the workarounds — which we'll get to in Segment 5 — are the reason ZFN design remained, until quite recently, an art that only a handful of labs could do reliably. It's also a huge part of why CRISPR, when it came along with its much simpler guide-RNA targeting, was so devastatingly attractive. CRISPR didn't have a context-dependence problem at all. You wrote down the twenty-letter target sequence, you ordered an oligonucleotide of the matching RNA, and it worked. With zinc fingers, you wrote down the sequence, you assembled the fingers, you tested the construct in a yeast or bacterial reporter, and there was a sixty-percent chance you'd be back at the drawing board.

But — and this is the point I want to leave you with before we move on — **the modular reading idea was not wrong, it was just incomplete**. Zinc fingers really do read three bases at a time. The fingerprint idea really does work, in the limit. The problem is the elbows. Once you understand the elbows, you can engineer around them. And that engineering, painful as it was, eventually produced the ZFNs that went into human patients. So hold this picture — fingers reading three bases, in a line, like stacked hands gripping a rope — but be ready to add the complication.

---

## SEGMENT 4 — Engineering zinc finger arrays — picking and stacking hands

Okay. So we've got the basic motif. A single zinc finger reads three bases. You can stack several in a row to read more bases. And there's some context dependence that complicates things. Let's now talk concretely about how people actually built zinc finger arrays in practice, because the engineering choices shaped the whole field.

The first decision is **how many fingers you want**. The math is straightforward. Each finger reads three bases. If you string together three fingers, you read nine bases. Four fingers, twelve bases. Six fingers, eighteen bases. The longer the recognition site, the more specific your protein is — but also the harder it is to engineer, because more fingers mean more interfaces between fingers, and more places for the context-dependence problem to bite you.

In practice, the sweet spot for zinc finger arrays in the early ZFN era was **three to four fingers per protein**. Three fingers gives you nine bases of recognition; four fingers gives you twelve. A twelve-base sequence is expected to appear about once every sixteen million bases by chance — so in a three-billion-base human genome, you'd expect about two hundred random matches to any twelve-base sequence. That's still a lot. Which is one reason ZFNs ended up working in pairs, so that the two halves together specified a much longer site. We'll get to that in Segment 6. For now, hold the picture: three to four fingers, stacked head-to-tail, gripping a stretch of nine to twelve bases.

\[Pause.\]

Here's the analogy I want you to hold. Imagine you're trying to grab a long rope, and your hands are tiny — each one can only grip about three inches of rope. You want to grab a foot of rope, securely. The natural thing to do is **stack your hands along the rope, one above the other, each hand grabbing its own three-inch section, all aligned along the length of the rope**. That's what a zinc finger array looks like. Three or four little hands, in a column, each gripping its own three-base stretch, all running along the DNA double helix.

The hands are connected by short flexible loops of protein called **linkers** — typically a sequence like TGEKP, "Thr-Gly-Glu-Lys-Pro," which is a kind of canonical zinc finger linker that allows the next finger to sit properly oriented relative to its neighbor. The linker length and sequence matter. Too short, and the next finger can't quite reach its proper position on the DNA. Too long, and the fingers flop around and lose specificity. The TGEKP linker, found in natural zinc finger proteins, turned out to be a good general-purpose choice, and most engineered ZFNs use it or a close variant.

So the assembly recipe, in practice, looks like this. You decide on your target sequence — say, twelve bases of DNA inside the gene you want to edit. You break it into four three-base codewords. For each codeword, you go to your library of pre-characterized fingers and pick the finger that's been validated to bind that codeword. You synthesize a gene encoding the four fingers in order, connected by the TGEKP linker, all under the control of a promoter that will express the protein when you put the gene into a cell. You put this synthetic gene into a plasmid. You put the plasmid into bacteria, grow them up, harvest the plasmid, and now you have a piece of DNA that encodes your custom zinc finger array.

\[Pause.\]

There were several major libraries of fingers to choose from. The Barbas lab at Scripps published a widely-used library based on a single scaffold finger — the third finger of a transcription factor called Sp1 — into which they had introduced different combinations of mutations at the recognition positions. They covered most of the sixty-four possible three-base codewords, with multiple fingers per codeword for redundancy. The Joung lab at Harvard, in collaboration with Cathomen and others, published a different system called **OPEN** — Oligomerized Pool Engineering — which used a bacterial selection step to find fingers that actually worked well in the context of their final intended array, rather than just picking from a context-free library.

And then there was a clever method called **CoDA** — Context-Dependent Assembly — developed by Joung's group, which acknowledged the context-dependence problem head-on. CoDA built arrays from pre-validated _pairs_ of fingers rather than individual fingers, on the theory that the two-finger units would already have their inter-finger geometry sorted out. CoDA had higher success rates than naive modular assembly, though it required a more limited set of pre-validated pairs and so could only target a subset of possible genomic sites.

Commercially, the dominant player — Sangamo Therapeutics, who we'll talk about extensively in Segment 8 — had its own proprietary library and its own proprietary assembly process. The details were trade secrets, but the basic outline was similar: a library of pre-characterized fingers, plus a lot of empirical testing of candidate arrays, plus iterative optimization when the first attempt didn't quite work. Sangamo's process worked, but it was slow and expensive — a single custom ZFN took weeks of skilled labor to build and validate, and cost on the order of tens of thousands of dollars. Compare that to a CRISPR guide RNA, which costs about ten dollars and arrives in your mailbox the next day. You can see, already, where the competitive pressure was going to come from.

But in 2005, in 2008, in 2010 — none of those CRISPR comparisons existed yet. ZFNs were the only programmable nuclease in town, and the labs that could build them well were the only labs that could do site-specific genome editing in human cells at all. That capability, expensive as it was, was worth the cost.

---

## SEGMENT 5 — The catch — why context dependence makes ZFN design hard

I've been promising you a deeper look at the context dependence problem. Let's do it now, because it's the central technical reason ZFNs were hard, and understanding it tells you a lot about why molecular engineering in general is harder than it looks on paper.

Here is the basic problem, restated. A single zinc finger, in isolation, has a preferred three-base binding site. You can measure that preference in a biochemical experiment — for example, by asking the finger to bind a library of random sequences and seeing which ones it picks. From those experiments, you can write down a kind of preference profile: this finger prefers GAA over CTG over AAT, and so on. Good. Now you take that finger, you snap it next to another finger, and you ask the same question: what does the array now prefer? And the answer is — it doesn't quite prefer what you'd predict from just adding up the individual preferences. The array's overall binding behavior is _influenced_ by which fingers sit next to which, in ways that are partially predictable but partially not.

\[Pause.\]

Here's the analogy. Imagine each zinc finger as a person trying to grip a section of rope. **The problem is that the people are standing very close together — close enough that their elbows touch, their shoulders bump, and the way one person tilts their hand changes how the next person can position theirs.** A grip technique that worked beautifully when the person was alone might not work at all when squeezed between two neighbors. And a grip that's awkward in isolation might actually work better when the neighbors are pressing in, because the neighbors are bracing the grip.

That's the molecular reality. Adjacent zinc fingers physically contact each other. Their alpha helices are close in space, their side chains can interact, and the geometry of the DNA itself — its width, its groove depth, its degree of bending — depends on the sequence and on what's bound to it. So a finger that reads GAA cleanly when sitting alone might, when placed next to a finger that reads CTG, find that its own preferred binding geometry is incompatible with the CTG finger's preferred geometry, and the whole array binds poorly.

There are a few specific mechanisms behind this, and it's worth knowing them at least by name. One is **synergistic recognition** — sometimes the contact a finger makes with its three bases is actually a four-base contact, where the side chain of one residue spills over and touches the first base of the _next_ finger's binding site. So you can't really treat the binding sites as independent three-base units; they overlap at the edges. Another is **DNA bending** — different sequences bend the DNA helix to different degrees, and binding by one finger can change the local geometry enough to alter the binding of its neighbor. A third is **steric clash** — sometimes the side chains of two adjacent fingers are physically in each other's way, and one or both fingers has to compromise its preferred conformation.

\[Pause.\]

The practical upshot, in the early 2000s, was that **modular assembly worked maybe one time in three**. You'd pick your fingers, snap them together, test the array on its target, and most of the time the array would bind weakly, or bind the wrong site, or not bind at all. The labs that succeeded with modular assembly were the ones that built in a testing step — they'd assemble several candidate arrays per target, screen them, throw out the failures, and keep the winners. That gave you a working ZFN about two-thirds of the time, which is good but slow.

The OPEN and CoDA systems we mentioned a moment ago were attempts to engineer around the context-dependence problem. OPEN selected fingers in the context of the array they'd actually be used in — you'd build a partially-randomized library, screen it in bacteria for binding to your target, and select winners that had the right geometry for that particular context. CoDA used pre-validated finger pairs, so the two-finger units came with their inter-finger geometry already sorted. Both approaches had higher success rates than naive modular assembly, but both had limitations — OPEN was technically demanding, and CoDA was limited to a finite menu of targetable sites.

Sangamo, the commercial player, had what was widely considered the most reliable design process, and they got it by being absolutely systematic. They had spent fifteen years building and characterizing a proprietary library, validating thousands of fingers, mapping out which fingers worked well together and which didn't, and accumulating a vast trove of empirical knowledge that wasn't published. That knowledge was their moat. It was also part of why competitors couldn't easily catch up — you couldn't just read a paper and replicate Sangamo's success; you needed the institutional knowledge that came from a decade of hands-on building.

\[Pause.\]

I want to draw out a more general moral here, because it applies to a lot of biology. **When you design proteins, the parts do not behave independently of each other.** Lego works because each brick is rigid and the connections are standardized. Proteins are not rigid; they wiggle, they fold, they make incidental contacts with their neighbors, and their behavior depends on context in ways that are genuinely difficult to predict from first principles. The dream of "design any protein you want by snapping together pre-characterized domains" is a real dream — people are still pursuing versions of it today, with much better computational tools — but it has always been harder than it looked, and zinc fingers were the field's first big lesson in just how hard.

The lesson is also why CRISPR was such a relief when it arrived. CRISPR's targeting is done by an RNA molecule that base-pairs with the DNA. Base pairing is, to a first approximation, context-independent — A pairs with T, G pairs with C, and the rules don't change based on what's next door. So CRISPR sidestepped the entire context-dependence problem by moving the recognition step from protein-DNA contact to RNA-DNA base pairing. That was the technical breakthrough that made genome editing democratic. Until that breakthrough, you needed Sangamo or you needed Joung's lab or you needed a small handful of other expert groups, because nobody else could reliably build the targeting domain.

But now we have a programmable DNA-binding protein, however awkwardly built. The next question is — what do we attach to it to actually edit the genome? Because a DNA-binding protein by itself doesn't edit anything. It just sits on the DNA. We need to give it a tool. And the tool the field landed on, beautifully, was a pair of scissors. Let's go meet them.

---

## SEGMENT 6 — Fusing fingers to FokI — making the scissors

Here is the conceptual move that turned zinc fingers into zinc finger _nucleases_. It was made in 1996 by a researcher named **Srinivasan Chandrasegaran** at Johns Hopkins, and it is the foundational insight of the entire programmable-nuclease era.

Chandrasegaran asked a simple-sounding question. We have these zinc finger proteins that can be engineered to bind any DNA sequence we want. What if we attached, to that binding domain, an enzymatic domain that would actually do something to the DNA? Specifically — what if we attached a DNA-cutting enzyme? Then we'd have a protein that finds a specific sequence and cuts it. A programmable molecular scissors.

The cutting enzyme he chose was a domain from a bacterial restriction enzyme called **FokI**. Pronounced "fok-one." It comes from a bacterium called _Flavobacterium okeanokoites_, where it serves as part of a defense system against viral DNA. FokI is what's called a **type IIS restriction enzyme**, and the "S" matters. Most familiar restriction enzymes — the ones you may have used in a lab class, like EcoRI or BamHI — have their DNA-recognition and DNA-cutting activities fused together in a single domain that does both jobs at the same place. Type IIS enzymes are different. They have a DNA-recognition domain that finds a specific sequence, and a _separate_ cutting domain that cleaves the DNA at a defined distance _away_ from the recognition site. The recognition and cutting are spatially decoupled.

\[Pause.\]

This is the crucial feature for our story. Because the cutting domain of FokI doesn't have its own DNA sequence preference — it just cuts whatever DNA is presented to it, wherever it happens to be tethered — you can in principle chop off the natural FokI recognition domain and replace it with any other DNA-binding domain you want, and the cutting domain will faithfully cut wherever the new binding domain places it.

Chandrasegaran did exactly that. He chopped off the natural FokI recognition domain and fused, in its place, a three-finger zinc finger array. The result was a protein that found the DNA sequence specified by the zinc fingers and cut the DNA nearby. He published this in PNAS in 1996, and looking back, that paper is one of the truly foundational papers in genome engineering. He had built the first programmable nuclease.

Here's the analogy. The zinc finger array is **the targeting hand — it grips the DNA at the address you've specified**. The FokI domain is **a small pair of scissors stuck to the wrist of that hand**. The hand finds the right spot on the rope, and once it's there, the scissors come down and cut.

\[Pause.\]

Now there's one more wrinkle that turns out to be enormously important, and it goes back to a quirk of the FokI cutting domain's natural biology. The FokI cutting domain doesn't actually cut DNA on its own. It only cuts when **two copies of the cutting domain come together — dimerize — at the cut site**. One FokI domain is inert; two FokI domains, brought into close proximity on the DNA, cut.

This is a natural feature of FokI. In its wild-type bacterial form, FokI binds its recognition site, and through some conformational rearrangement, two FokI molecules can pair up at the site to perform the cleavage. The biochemistry was worked out by several groups including those of **Aggarwal** and **Halford** in the 1990s. The key point for us is: **one FokI domain cannot cut; two together can.**

When Chandrasegaran and others started building zinc finger nucleases for real applications, they realized this dimerization requirement was not a bug — it was an opportunity. Because if the cutting only happens when two FokI domains come together, then you can design your editing system to require **two separate zinc finger proteins, each with its own three-finger array, each targeted to a sequence on opposite sides of the spot you want to cut**. Each ZFN by itself binds its half-site but does nothing. Only when both ZFNs are simultaneously bound, on opposite strands of the DNA, with the right spacing between them, do the two FokI domains come into close enough contact to dimerize and cut.

This is the architecture that became standard. **A ZFN edit involves a pair of zinc finger nucleases, not just one.** One ZFN binds the left half-site; the other binds the right half-site; the two FokI domains meet in the middle, dimerize, and cut the DNA between the two binding sites — typically in a five-to-seven base spacer region.

And here's why this matters enormously for specificity. Each three-finger ZFN binds nine bases of DNA. Nine bases is not very specific in a three-billion-base genome — that nine-base sequence will appear, on average, every two hundred and sixty thousand bases, so you'd expect over ten thousand exact matches in the human genome. But you need _two_ ZFNs to bind, in the right orientation, with the right spacing between them, before any cutting happens. The combined specification is then nine bases plus nine bases plus the geometry of the spacer — call it eighteen bases of specific sequence with constraints on the spacing. That's much, much more specific. An eighteen-base sequence has only a few expected matches in the entire genome. So the dimerization requirement isn't just a quirk — it's the feature that makes ZFN cutting specific enough to actually use therapeutically.

\[Pause.\]

We'll explore the dimerization architecture in much more detail in the next segment, because there are clever engineering moves that have made it even better. But first let me make sure you have the basic ZFN picture in your head, because we're going to refer back to it constantly.

A ZFN pair consists of **two proteins**. Each protein has two parts: **a zinc finger array** at the front, made of three or four fingers, grabbing nine to twelve bases of DNA; and **a FokI cutting domain** at the back. The two proteins are designed to bind opposite strands of the DNA, on opposite sides of the target site. When both are bound, with the correct spacing between them — typically five to seven bases of DNA between the two binding sites — the two FokI domains meet in the middle of that spacer, dimerize, and introduce a **double-strand break** in the DNA. The cell then has to repair the break, and the repair process is what allows us to actually edit the gene. We'll spend a whole segment on that repair in a moment.

The image to hold: **two three-fingered hands gripping opposite strands of a rope, with the tips of their pinkies meeting in the middle, and where the pinkies meet, a pair of tiny scissors snaps shut and cuts the rope through both strands.** That's what a ZFN does, every time it works.

---

## SEGMENT 7 — The dimerization requirement and target site design

Let's dig into the dimerization architecture, because the engineering choices around it are genuinely clever and they explain a lot of how ZFNs got safer over time.

The basic problem the field had to solve was this: if any two FokI domains can dimerize with each other to cut DNA, then in a cell that contains two different ZFNs — call them ZFN-left and ZFN-right — you can in principle get three different productive dimer combinations. You can get left-with-right, which is the cut you want. But you can also get left-with-left, if two copies of the left ZFN happen to bind at two adjacent left-half-sites somewhere else in the genome. And you can get right-with-right, similarly. Those off-target homodimer cuts are bad. They happen at unintended sites where the ZFN binding domain happens to have multiple matches in a row, and they cause unwanted double-strand breaks that can lead to chromosomal rearrangements, deletions, and other genome damage.

\[Pause.\]

Here's the analogy. Imagine your ZFN pair is **a left hand and a right hand, and they're supposed to clap together to cut**. But the original wild-type FokI is sloppy enough that two left hands can also clap together. Two right hands too. Anywhere you happen to have a row of left-binding sites, you can get left-on-left cuts. You wanted a precise edit; instead you got random damage at sites that loosely match either of your halves.

The solution, worked out beautifully around 2007 by groups led by **Toni Cathomen** in Hannover and **Andrew Wood** at Sangamo, was to engineer the FokI cutting domain so that it could only dimerize with a _different_ FokI variant — not with itself. They introduced charge-swap mutations into the dimer interface — for example, changing a negatively charged glutamate on one FokI variant to a positively charged lysine, and changing a positive residue on the partner FokI to a negative residue. Now the two variants attract each other but neither can dimerize with itself, because two like-charged variants would electrostatically repel.

These engineered variants are called **obligate heterodimer FokI**. They come in matched pairs — versions like "ELD" and "KKR" being a common pairing — and modern ZFNs almost always use them. With obligate heterodimers, left-on-left and right-on-right cutting is essentially abolished. Only the productive left-with-right configuration produces a cut. The off-target damage from homodimer cutting dropped by orders of magnitude when this engineering was implemented, and the ZFNs that went into clinical trials after about 2008 essentially all use obligate heterodimer FokI variants.

\[Pause.\]

Now the other side of the target-site design problem. Where on the genome do you place your ZFN pair, given that you need a specific architecture? Here are the constraints, in case you're ever designing one of these yourself, or just want to read a ZFN paper intelligently.

You need a stretch of DNA, in your gene of interest, that has the following structure. **Half-site one** — nine to twelve bases that you can target with your left zinc finger array. **A spacer** — a short stretch, usually five to seven bases, of any sequence, that sits between the two binding sites. **Half-site two** — nine to twelve bases on the opposite strand, that you can target with your right zinc finger array. The two half-sites have to be on opposite strands so that the two ZFNs approach the DNA from opposite sides; that puts the two FokI domains on the same face of the DNA, where they can meet and dimerize.

The constraints on the spacer are not nothing. The five-to-seven base length is determined by the geometry of the FokI dimer — too short and the two FokI domains can't fit; too long and they can't reach each other. The exact length tolerance was worked out empirically and varies a bit depending on the linker between the zinc finger array and the FokI domain. Some engineered ZFNs tolerate spacers from four to eight bases; others are pickier.

Within those constraints, you need to find a site in your gene of interest where the left half-site sequence is one you can actually engineer fingers for. Remember the context-dependence problem from Segment 5 — not every nine-base sequence is equally easy to target. Some sequences fall in the "comfortable" zone of available finger combinations. Others require fingers that interact badly with each other and just don't yield working arrays. In the early ZFN era, this constraint was severe — researchers might want to edit a specific codon in a specific gene, only to find that no usable ZFN architecture could be designed to cut nearby. The site had to be flexible. Often you'd end up cutting a few bases away from your ideal target, then relying on the cell's repair machinery to introduce the edit at the right position through homology-directed repair using a donor DNA template, which we'll get to in Segment 12.

\[Pause.\]

The constraint pushed ZFN designers toward target genes where there were many candidate sites — long, well-studied genes where you could afford to pick the easiest sequence rather than the most important one. It's part of why early ZFN demonstrations focused on a handful of well-trodden targets — the CCR5 gene, the IL2RG gene, the AAVS1 safe-harbor site — where good cutting sites were known to exist.

Now I want to point out one more piece of the design that's easy to miss but matters in practice. Each individual ZFN, before it's been paired with its partner, is just a protein floating in the cell. It's going to spend most of its time _not_ at the target site, because the target site is one place out of three billion. The protein has to diffuse around the nucleus, sample many sequences, find the right one, and bind. This is exactly the same search problem that natural transcription factors have to solve, and ZFNs use exactly the same physics. They diffuse along the DNA, sliding and hopping, until they find a sequence that matches well. The whole search-and-bind process takes minutes to hours, depending on the concentration of the protein and how favorable the binding is.

So when you express a ZFN pair in a cell — typically by transfecting in mRNA or plasmid encoding both proteins — the cell makes a lot of both ZFNs, they diffuse around, they search, they find their respective half-sites, and at the rare lucky moments when both ZFNs are bound at the same target site with the right geometry, the FokI domains dimerize and cut. The cell then notices the double-strand break and starts the repair process. Multiply this over many cells in a culture, and over the few hours during which the ZFN proteins are present, and you can get edit rates in the range of ten to fifty percent — sometimes higher, sometimes much lower, depending on the ZFN, the target site, and the cell type.

Ten to fifty percent. Hold that number, because it'll be important when we compare ZFNs to TALENs and CRISPR later.

---

## SEGMENT 8 — Sangamo Therapeutics — the company that bet on zinc fingers

Now I want to tell you a story about a company. Because the academic history of zinc finger nucleases is interesting, but it can't quite explain why ZFNs ended up in human patients, in commercial-grade clinical trials, in the era before CRISPR. The reason that happened is one specific biotech company that bet everything on this one technology, for two decades, with remarkable patience. That company is **Sangamo Therapeutics**, founded in 1995, based in Richmond, California, originally called Sangamo BioSciences, later renamed Sangamo Therapeutics to reflect their pivot toward clinical applications.

Sangamo was founded by **Edward Lanphier** and a small team with a license to the foundational zinc finger patents — mostly the work of Aaron Klug and his colleagues at the MRC, plus follow-on work from Carl Pabo's lab and others. The bet, from day one, was that engineered zinc finger proteins would become a platform technology for both therapeutics and industrial biotechnology, and that Sangamo could be the company that owned the intellectual property estate around it.

For about the first decade of its existence, Sangamo was, frankly, not very impressive from the outside. They worked on **zinc finger transcription factors** — we'll talk about those in Segment 13 — trying to use engineered zinc fingers fused to gene-activator or gene-repressor domains to turn specific genes on or off in cells. Some interesting science came out of it, but no commercial success. The company traded at a low share price, burned cash steadily, and was not a Wall Street darling.

\[Pause.\]

The shift came around 2005, when Sangamo embraced the zinc finger _nuclease_ as its lead platform. The acquisition of expertise around ZFNs — partly through hiring, partly through licensing the Chandrasegaran patents — turned Sangamo into the dominant industrial ZFN designer. They built an in-house design pipeline, screened candidate ZFNs against essentially any target their partners requested, and offered the resulting reagents either as research tools or, increasingly, as the basis for clinical programs.

Here's the analogy. **Sangamo was the company that bet the farm on zinc fingers and proved gene therapy could be a real clinical product.** Their bet wasn't on a particular disease or a particular gene — it was on the platform itself, on the conviction that programmable genome editing would become a class of medicines, and that owning the IP for the first practical version of that class would be enormously valuable. They were right about the platform. They were partly right about the IP. And they ended up partially overtaken by CRISPR, which is a tragedy of timing as much as anything else.

What did Sangamo actually do, concretely, with their ZFN platform? Several things in parallel.

First, they built a **research reagent business**, in partnership with Sigma-Aldrich, selling custom-designed ZFNs to academic labs that wanted to edit specific genes. Under the brand name "CompoZr Custom Zinc Finger Nucleases," Sigma-Aldrich offered to take a customer's specified gene, design a ZFN pair against it, validate the construct, and ship the validated reagent — for somewhere in the range of twenty-five to seventy-five thousand dollars per target. This was good business; many academic labs paid the money because they had a specific gene to edit and no in-house ZFN expertise.

Second, they entered into **major industrial partnerships** with companies including Dow AgroSciences, Pfizer, Shire, and Biogen — partnerships where Sangamo would use ZFNs either to engineer crops, to modify cell lines for industrial protein production, or to develop therapeutic gene-editing approaches.

Third, and most importantly for the history of medicine, they began their own **clinical development programs**, taking ZFNs all the way from design through preclinical animal studies and into Phase 1 human trials. That's the program we'll spend the next segment on, because the first of those clinical trials — the CCR5-ZFN program for HIV — was the first time any programmable nuclease was ever used to edit a human gene therapeutically.

\[Pause.\]

I want to dwell for a moment on what it took to do this, organizationally. Building a zinc finger nuclease for a clinical trial in the 2000s was an immense undertaking. You had to design the ZFN. You had to validate it for on-target efficiency. You had to test it for off-target effects, which in those days meant essentially guessing at where the off-targets might be, since whole-genome assays for nuclease specificity were still being developed. You had to manufacture the ZFN — either as protein, mRNA, or DNA — under GMP conditions, in clean rooms, with documented quality control. You had to develop a delivery method to get the ZFN into the patient's cells. You had to get the whole package past the FDA. And you had to do all this knowing that if anything went wrong, your patent estate might be devalued and your bet might fail.

Sangamo did all of it. And while they never became Genentech, they did become the company that proved, in the late 2000s and early 2010s, that programmable gene editing was clinically feasible. That proof — not the specific drugs, the proof of concept — is arguably Sangamo's most important contribution to the field. They paid the cost of demonstrating that this whole thing was real, and that demonstration made it possible for CRISPR companies, later, to walk into investor meetings with a much shorter "this might work" story.

Today, Sangamo is still around. Their stock has bounced around. They have ongoing clinical programs in hemophilia, in sickle cell disease, in Fabry disease, in lysosomal storage disorders. Some have struggled commercially as CRISPR has matured. But the company is still developing zinc finger therapeutics, and as we'll see in Segment 13, they've been particularly successful with the non-cutting cousin of ZFNs — the zinc finger _transcription factor_, which doesn't cut DNA but turns genes up or down. That technology, ZFP-TFs, may end up being Sangamo's enduring contribution. We'll get to it.

But first, the headline clinical program. Let's talk about CCR5 and HIV.

---

## SEGMENT 9 — CCR5-ZFN — the first programmable nuclease in human trials

Okay. This segment is the historical centerpiece of the lecture, so I want to set the stage properly. The year is 2008. The technology is ZFNs. The disease is HIV. The biology is one of the most beautiful natural experiments in human medicine. And the trial that started in that year, run by Sangamo in collaboration with the University of Pennsylvania, was the first time in history that a programmable nuclease was used to edit a gene in a living human being for therapeutic purposes. That's a big deal. Let me walk you through it.

\[Pause.\]

Start with the biology. HIV — human immunodeficiency virus — infects a particular type of immune cell called the CD4 T cell. To get into a CD4 T cell, the virus needs to bind two receptors on the cell surface. One is CD4 itself; that's where the name comes from. The other is a **co-receptor**, and for the vast majority of HIV strains, that co-receptor is a protein called **CCR5** — C-C chemokine receptor type 5. The virus uses both CD4 and CCR5 together as a kind of double-key entry system. Without CCR5, the virus can't get in.

In the mid-1990s, researchers noticed something remarkable. There's a natural mutation in the CCR5 gene, called the **CCR5-delta-32 deletion**, that occurs at a moderate frequency in people of European ancestry — about one percent of the population are homozygous for it, meaning they carry two broken copies of CCR5. People homozygous for CCR5-delta-32 are **essentially resistant to HIV infection**. The virus shows up, tries to attach, can't find a CCR5 to grab, and bounces off. These individuals don't get infected even after repeated exposure. And crucially, having no functional CCR5 doesn't seem to cause any other significant health problem. The receptor exists, mostly, to do things HIV exploits — there's some immune signaling work, but its loss is well-tolerated.

This was a striking observation. It suggested an entirely new approach to HIV therapy. Instead of trying to kill the virus, what if you could **make a patient's immune cells HIV-resistant by knocking out the CCR5 gene**? You wouldn't be attacking the virus directly; you'd be removing the door the virus uses to get in. And there was a real-world proof of concept that emerged in 2008 — the so-called **Berlin patient**, Timothy Ray Brown, an HIV-positive man with leukemia who received a bone marrow transplant from a donor who happened to be homozygous CCR5-delta-32. After the transplant, his entire immune system was replaced with HIV-resistant cells, and he was, effectively, cured of HIV. The first cure ever documented. The transplant carried other risks and isn't a scalable therapy, but the principle was demonstrated.

\[Pause.\]

Now Sangamo's idea, in collaboration with Carl June and Bruce Levine at Penn, was to use a ZFN pair to do, in a patient's own cells, what the Berlin transplant had done by accident — disable the CCR5 gene. The clinical protocol looked like this. You take blood from an HIV-positive patient. You isolate the CD4 T cells from the blood. You expand them in culture for a few days, multiplying them up to a useful number. You electroporate the cells — that is, you apply a brief electrical pulse that opens transient holes in the cell membranes — and during that pulse, you let the cells take up mRNA or plasmid encoding a ZFN pair designed to cut the CCR5 gene. The ZFNs get expressed inside the cells, find the CCR5 gene, cut it, and the cell's repair machinery — through a sloppy process called non-homologous end joining, which we'll talk about more in a moment — patches the cut imperfectly, introducing small insertions or deletions that knock out the gene. The result is a population of patient cells, perhaps thirty or forty percent of which now have a disrupted CCR5 gene. You then infuse those cells back into the patient.

Here's the analogy. **The CCR5-ZFN program was the first time a programmable nuclease edited a human gene therapeutically.** That sentence is doing a lot of work. Before this trial, there had been gene _addition_ therapies — viruses that added new genes to patient cells — but no targeted _edit_ of an endogenous gene had ever been performed in humans for therapy. ZFNs, in this trial, demonstrated that you could pick a specific gene in a specific patient, disable it on purpose, and give those modified cells back to the patient safely. That demonstration cleared the entire regulatory and biological pathway for everything that came after, including the CRISPR-based therapies that are now reaching the clinic.

The first trial, published in the New England Journal of Medicine in 2014, treated twelve HIV-positive patients. The headline finding was that the procedure was safe and well-tolerated. There were modest reductions in viral load in some patients during analytical treatment interruptions, when the patients went off their antiretroviral drugs temporarily to see if the modified cells could control the virus on their own. The biology worked, partially. The CCR5-disrupted cells did show a survival advantage over unmodified cells in the presence of the virus, exactly as predicted. But the overall fraction of CCR5-disrupted cells in the body remained modest — typically a few percent, not enough to fully suppress the virus.

\[Pause.\]

The CCR5-ZFN program did not, ultimately, become a curative HIV therapy. The fraction of edited cells you can produce and infuse is limited by the engineering of the editing step and by how well those cells engraft and expand in the patient. The Berlin patient's cure was unusual because his whole immune system was replaced; the ZFN approach only modifies a fraction of cells and infuses them back, and that's been hard to push to the level of a cure.

But the historical importance of this program cannot be overstated. **CCR5-ZFN was the proof of concept for the entire programmable-nuclease therapeutic field.** It demonstrated that gene editing in humans was feasible. It established the regulatory pathway. It established the manufacturing pathway for ex vivo cell editing — take cells out, edit them in the lab, put them back — which is the same workflow now used for sickle cell disease therapies, for some forms of cancer immunotherapy, and for a growing list of other ex vivo gene therapies.

When the first CRISPR-based cell therapy for sickle cell disease was approved in 2023 — Casgevy, from Vertex and CRISPR Therapeutics — the regulatory and manufacturing playbook it followed had been written, in large part, by the Sangamo CCR5 program a decade earlier. That's the lineage. Zinc finger nucleases were not just an academic curiosity. They were the clinical pathfinder for an entire generation of gene therapies that are now reaching patients.

\[BREAK\]

\[End of first hour. Take a ten-minute break. Drink water. Stretch. When we come back, we'll talk about how you actually deliver ZFNs into cells, how they compare to the technologies that came after, and the surprising places where zinc fingers are still winning.\]

---

## SEGMENT 10 — Delivering ZFNs into cells

Welcome back. Let's pick up where we left off. We've spent the first hour establishing what a zinc finger nuclease is, where it came from, why it's hard to design, and what the first clinical trial looked like. Now I want to zoom in on the practical engineering problem of getting these things into cells in the first place, because the delivery problem is half the battle for any gene-editing therapy and it's where some of the most interesting trade-offs live.

A ZFN is a protein. To get it to do its job inside a cell, you have to either deliver the protein directly, or you have to deliver something that the cell will translate into the protein — mRNA or DNA. Each option has trade-offs.

\[Pause.\]

The first and historically most common option is **DNA delivery** — specifically, delivering a plasmid that encodes the ZFN. You put the ZFN gene under the control of a strong promoter, you build the construct on a standard plasmid, and you deliver that plasmid into cells. The cell takes up the plasmid, transcribes it into mRNA, translates the mRNA into protein, and the protein does its work. DNA is cheap, stable, easy to manipulate, and you can get high expression. The downside is that the ZFN gets expressed for as long as the plasmid persists in the cell, which can be days or weeks, and prolonged expression of a nuclease increases the risk of off-target cuts. You want the ZFN to cut and then go away.

The second option is **mRNA delivery**. You synthesize the mRNA encoding the ZFN in a test tube — there's a well-established technique called in vitro transcription that uses a bacterial RNA polymerase to copy a DNA template into mRNA — and you deliver that mRNA directly into the cells. The cell translates it for a few hours, then degrades it. You get a transient pulse of ZFN expression that's enough to do the editing but doesn't linger long enough to cause much off-target damage. This is the approach that has come to dominate clinical ZFN protocols, including the CCR5 program.

The third option is **direct protein delivery**, sometimes called **RNP delivery** — though that term is more often used for CRISPR, with its ribonucleoprotein complex. With ZFNs, you can produce the ZFN protein in bacterial expression systems, purify it, and deliver it directly to cells. The protein has the shortest residence time of any delivery format — it does its work and then gets degraded by normal cellular protein turnover within hours. Direct protein delivery gives the cleanest editing window but is the most technically demanding, because purified ZFN protein is finicky, expensive to produce, and can be inactive if not handled correctly.

\[Pause.\]

How do you physically get any of these payloads into the cell? Several methods, depending on what you're editing.

**Electroporation** is the workhorse for ex vivo cell therapy. You take the cells out of the patient, suspend them in a buffer with your ZFN payload — DNA, mRNA, or protein — and apply a brief electrical pulse that creates transient pores in the cell membrane. The payload diffuses in through the pores during the pulse, and within minutes the pores reseal. Electroporation is brutal but effective; a significant fraction of the cells die from the procedure, but the survivors take up the payload at high efficiency. For CD4 T cells, hematopoietic stem cells, and other primary human cells that you can isolate, expand, and reinfuse, electroporation is the standard delivery method for ZFNs and for CRISPR alike.

For **in vivo** delivery — delivering ZFNs directly to cells inside a living patient — the most successful approach has been **viral vectors**, particularly **adeno-associated viruses**, or AAVs. AAV is a small virus that infects human cells naturally without causing disease; biologists have hollowed it out and use it as a gene-delivery vehicle for a wide range of therapies. You can engineer an AAV to carry a ZFN-encoding cassette and deliver it directly into the patient. Sangamo's in vivo clinical programs — including their hemophilia and lysosomal storage disorder programs — have used AAV delivery to bring ZFNs to the liver, where the AAV preferentially infects hepatocytes and the ZFN edits the patient's liver cells in place.

There are constraints. AAV has a small cargo capacity — about four to five kilobases of DNA, which is enough to fit a ZFN pair but not much more. So if you want to deliver a ZFN pair plus a donor DNA template for a knock-in, you may need multiple AAVs co-infecting the same cell, or you have to be clever about how you package things.

There's also lipid nanoparticle delivery — the same kind of technology that the COVID mRNA vaccines made famous — which can in principle deliver ZFN mRNA into cells in vivo. This is more recent, more experimental for ZFNs, and again competes with the more mature CRISPR delivery infrastructure.

\[Pause.\]

The delivery decisions matter enormously, because they determine what diseases you can treat. Ex vivo editing — take cells out, edit, put back — works for blood disorders, for immune disorders, for any disease where you can isolate the relevant cells. That's how CCR5-ZFN was done, and that's how the modern CRISPR sickle cell therapies are done. But it doesn't scale to diseases where the affected cells are spread throughout the body and can't be conveniently extracted.

In vivo editing — delivering the nuclease directly to cells in the patient — opens up a much wider range of diseases, but it's harder. You have less control over the dose, less control over which cells get edited, and more risk of immune responses to the delivery vehicle. Most of the current in vivo ZFN programs target the liver, because AAV-liver delivery is well-established and the liver has good tolerance for genetic interventions.

Whatever the delivery method, once the ZFN is inside the cell, the editing process itself is the same. The ZFN finds its target, cuts the DNA, and the cell's repair machinery takes over. The repair machinery is, in many ways, the most important and least appreciated piece of the editing puzzle, because **the ZFN doesn't do the edit — the cell does the edit. The ZFN just makes the cut, and the cell decides what to do about it.** Let's compare that to what other technologies do with the same machinery.

---

## SEGMENT 11 — ZFN versus TALEN versus CRISPR

Now that you understand ZFNs deeply, I want to put them in head-to-head comparison with the two technologies that succeeded them. This is the segment where I'll be honest about why CRISPR ate the world, and also where I'll explain why zinc fingers haven't gone away.

\[Pause.\]

All three technologies — ZFNs, TALENs, and CRISPR — do the same fundamental thing. They make a programmable double-strand break at a specific site in the genome. The cell then repairs the break, and the editing happens during the repair. The differences are in how each technology finds its target.

**ZFNs**, as we've discussed at length, use a protein-based DNA recognition domain — a stacked array of zinc fingers — fused to the FokI cutting domain. Specificity comes from the combined recognition of two ZFN halves, each gripping nine to twelve bases of DNA. Designing a new ZFN is hard because of context dependence; assembly is artisanal; costs are high; success rates are middling.

**TALENs** — transcription activator-like effector nucleases — were the next programmable nuclease to arrive, around 2010-2011. They use a different DNA-binding protein, derived from a family of plant-pathogen proteins called TAL effectors. The crucial feature of TAL effectors is that, unlike zinc fingers, they have an essentially one-to-one mapping between protein modules and DNA bases — **one TALE module reads one base, with no significant context dependence**. So you can build a TALEN that recognizes, say, an eighteen-base sequence by simply stringing together eighteen modules, one per base, picked from a small library of four module types — one each for A, T, G, and C. The modular assembly that didn't quite work for zinc fingers worked beautifully for TALENs, and for a brief moment in 2011-2012, TALENs looked like the future of genome editing.

But TALENs are big. Each TAL module is about thirty-four amino acids long, and you need one per base. A typical TALEN protein is about a thousand amino acids long, much larger than a typical ZFN. That makes them harder to deliver — you can't fit them in AAV without effort — and harder to clone. And TALENs also use FokI as their cutting domain, with the same dimerization requirement and the same need to engineer obligate heterodimers.

**CRISPR-Cas9** arrived in 2012-2013 and changed the calculus completely. CRISPR doesn't use a protein for DNA recognition at all. Instead, it uses a short RNA molecule — a **guide RNA**, about twenty bases long — that base-pairs with the target DNA sequence. The Cas9 protein is a generic DNA-cutting machine that does whatever the guide RNA tells it. To target a new sequence, you order an oligonucleotide encoding the new guide RNA. It costs about ten dollars. It arrives in two days. You clone it into your CRISPR plasmid, and you've got a new editing reagent.

Compare that to the weeks of work and tens of thousands of dollars required to build a new ZFN. The cost and time advantage of CRISPR is roughly three orders of magnitude. That difference is, all by itself, why CRISPR took over academic research within about three years of its publication.

\[Pause.\]

So if CRISPR is so much easier, why are zinc fingers still around? Several reasons.

First, **patent landscape**. Sangamo has a deep patent estate around zinc fingers that gives them clear freedom to operate for therapeutic ZFN development. The CRISPR patent landscape, by contrast, was famously contested between the Broad Institute and the University of California, with implications for who can commercialize CRISPR-based therapies for which applications. Companies building therapies have to think about IP, and zinc fingers offer a path that some companies have chosen.

Second, **size**. ZFN proteins are small enough to fit in AAV cargo with room for accessory elements. CRISPR-Cas9 is large — about four kilobases for the gene encoding Cas9 alone — and packaging it into AAV is tight. Newer compact Cas variants like Cas12 and CasX help with this, but for AAV-delivered in vivo editing, ZFNs still have a size advantage that matters for some applications.

Third, **specificity**. Well-designed ZFNs, particularly modern ones using obligate heterodimer FokI variants and carefully validated zinc finger arrays, can achieve very high specificity — possibly higher than first-generation CRISPR systems. Sangamo has invested heavily in this and their therapeutic ZFNs are typically validated to have undetectable off-target editing at thousands of candidate sites. That kind of specificity matters in clinical applications, where any unintended edit could have safety implications.

Fourth, **immunogenicity**. ZFNs are built mostly from human-derived sequences — the zinc finger scaffold is a common feature of human proteins, so the immune system is unlikely to mount a strong response to it. Cas9, by contrast, is a bacterial protein, and a significant fraction of the human population has pre-existing immune memory to it from natural exposure to the streptococci that Cas9 originally came from. For in vivo therapies that need to persist for any length of time, this matters.

Fifth, **regulatory experience**. ZFNs have been through clinical trials. The FDA has reviewed their safety packages. There's a known pathway. CRISPR is rapidly accumulating its own regulatory experience, but for the early companies that started programs before CRISPR was mature, ZFN regulatory experience was a real asset.

\[Pause.\]

So the practical division of labor today, roughly, looks like this. **For academic research where you need to edit a gene quickly and cheaply, CRISPR is the default.** It's just easier. **For clinical applications where you need maximum specificity, minimum immunogenicity, and where the IP situation favors zinc fingers, ZFNs remain in play.** They're not the dominant approach anymore, but they're not gone either.

And for some specific applications — particularly the non-cutting zinc finger transcription factors we'll discuss in Segment 13 — zinc fingers have advantages that CRISPR-based approaches haven't fully matched. The technology is alive. It's just no longer the headline.

---

## SEGMENT 12 — Precise edits — using ZFNs with homologous recombination

Let's now zoom in on what the cell does with a ZFN-induced cut, because this is where the actual editing happens and it determines what kinds of edits you can achieve.

When a ZFN cuts the DNA, the cell sees a double-strand break — a piece of damage that, if left unrepaired, would be lethal. The cell has two main repair pathways for double-strand breaks, and the choice between them is at the heart of every gene-editing application.

The first pathway is **non-homologous end joining**, often abbreviated NHEJ. NHEJ is the cell's fast, sloppy repair pathway. It grabs the two broken ends, trims them back a little, and rejoins them. The process is error-prone — small insertions or deletions, called **indels**, are introduced at the join site about thirty to seventy percent of the time. NHEJ is active throughout the cell cycle and is the default repair pathway in most cell types.

If you want to **knock out** a gene — disable it permanently — NHEJ is what you want. You target a ZFN to an early coding exon of the gene, the cut happens, NHEJ rejoins the ends with a small indel, and the indel disrupts the reading frame of the gene. The protein is no longer made properly, and the gene is functionally disabled. This is exactly how the CCR5-ZFN program worked — they targeted CCR5, cut it, let NHEJ patch the cut with indels, and the CCR5 gene became non-functional in the edited cells.

\[Pause.\]

The second pathway is **homology-directed repair**, or HDR. HDR is the cell's careful, template-based repair pathway. When the cell has a homologous template — usually the sister chromatid, in dividing cells — it can use that template to copy the correct sequence across the break, restoring the original DNA. HDR is much slower than NHEJ, much more restricted in when it operates — primarily in late S and G2 phase, when sister chromatids are available — and much rarer overall.

But here's the trick. **If you provide an external DNA template that matches the regions around the cut, the cell will sometimes use that template for HDR instead of its own sister chromatid.** And if your template has been engineered to carry a specific edit — a single-base change, a small insertion, a large insertion of a new gene — that edit will get copied into the genome at the cut site. HDR with an engineered template is how you do **precise gene knock-ins** — adding new sequences at defined locations, correcting specific disease mutations, inserting reporter genes at exact positions.

For example, you could use a ZFN to cut at a specific intron in a patient's beta-globin gene, and provide an HDR donor template that carries the correct sequence to replace a sickle-cell mutation. The ZFN cuts, HDR uses your donor template, the mutation is corrected. That's the conceptual basis for an entire class of gene-correction therapies.

\[Pause.\]

The catch is that HDR is rare. In a typical experiment, you might get a fifty percent indel rate from NHEJ but only a one or two percent HDR rate, even when you provide a perfect donor template. The cell just prefers NHEJ. Boosting HDR efficiency is one of the major ongoing challenges in genome editing, and many tricks have been developed — synchronizing cells in the right cell cycle phase, providing donor templates as single-stranded DNA, using small-molecule inhibitors of NHEJ to bias the choice toward HDR, and so on. None of these are silver bullets.

Sangamo and their academic collaborators have used HDR with ZFNs to do some genuinely impressive things. There's a program called **ZFN-mediated insertion at AAVS1**, where the AAVS1 site — a so-called "safe harbor" locus on chromosome 19 where insertions are well-tolerated — is targeted by a ZFN, and a therapeutic gene is inserted there by HDR. This approach has been used for delivering Factor IX, the missing clotting factor in hemophilia B, into patients' liver cells. The patient's hepatocytes get edited in vivo by AAV-delivered ZFNs and an AAV-delivered donor template, the Factor IX gene gets inserted at AAVS1, and the liver starts producing Factor IX. The clinical trial for this approach, run by Sangamo with partners, was one of the first in vivo gene-editing trials ever conducted.

The results were mixed. The approach was safe; ZFNs delivered to the liver via AAV did edit hepatocytes without significant off-target damage. But the levels of Factor IX produced were lower than hoped, and the program has been refined over the years. The CRISPR-based alternatives, including a competing program from another company, have also struggled with similar issues. The fundamental challenge — getting HDR to work efficiently enough in vivo to produce therapeutic levels of protein — is hard for any nuclease platform.

\[Pause.\]

But the principle, again, was established by ZFNs first. **ZFN knock-ins demonstrated that precise gene insertion at chosen sites in the human genome was clinically feasible.** Every CRISPR-based knock-in therapy now in development is built on top of that demonstration. The Sangamo programs showed how to manufacture the reagents, how to deliver them, how to monitor for safety, and what the limits were. They were the pioneers, even if the territory they pioneered is now being homesteaded by newer technologies.

So that's the ZFN editing toolbox, end to end. You design the ZFN. You deliver it into cells via electroporation or AAV or mRNA. The ZFN finds its target and cuts. The cell repairs the cut, either sloppily through NHEJ — giving you a gene knockout — or carefully through HDR using a template you provide, giving you a precise edit. Cells with the desired edit can be expanded, selected, returned to the patient, or left in place. The whole pipeline, end to end, was first built around ZFNs, and it's the pipeline every subsequent technology has inherited.

Now let's pivot to the other half of the zinc finger toolkit — the part that doesn't cut at all. Because some of the most interesting recent work in this space isn't about cutting genes. It's about controlling them.

---

## SEGMENT 13 — ZFP-transcription factors — gripping without cutting

I want you to take the picture you've built up of a ZFN — the two three-fingered hands gripping the DNA, with a pair of scissors meeting in the middle — and now perform a single mental edit on that picture. **Keep the hands. Remove the scissors. Replace the scissors with something else entirely.** Maybe a megaphone. Maybe a muffler. Maybe a bell. Whatever you swap in, the hands still find the same address on the DNA, they still grip it, but instead of cutting, the new attachment does whatever the new attachment does.

That's a **zinc finger protein-transcription factor**, or **ZFP-TF**, sometimes called a zinc finger transcription factor or an engineered transcription factor. The zinc finger array is the same — the same three-or-four-finger architecture, the same engineering challenges, the same DNA-targeting principles. What's different is what you fuse to it. Instead of FokI, you fuse a domain that controls gene expression — either an **activator** that turns the nearby gene up, or a **repressor** that turns it down.

\[Pause.\]

Here's the analogy I want you to hold. **A ZFN is a hand with scissors — it grips and cuts. A ZFP-activator is a hand with a megaphone — it grips and shouts "express this gene louder." A ZFP-repressor is a hand with a muffler — it grips and says "shhh, quieter." Same gripping mechanism. Different attached payload.**

The biology is actually quite straightforward, once you know that gene expression in eukaryotic cells is controlled by transcription factors that bind specific DNA sequences near genes and either recruit the transcription machinery (activators) or block it (repressors). Natural transcription factors do this all the time; the human genome is regulated by hundreds of them. The trick with ZFP-TFs is that you get to **choose where the transcription factor binds**, because you've engineered the zinc finger array to target any sequence you want.

The activator domain is typically borrowed from a natural activator — often the **VP64** domain, four copies of the activation domain from a herpes simplex virus protein called VP16, which is one of the strongest known activators in mammalian cells. The repressor domain is typically the **KRAB** domain — Krüppel-associated box — from a family of natural human zinc finger repressors. These are well-characterized off-the-shelf "loudness controls" that you can attach to your custom zinc finger array.

\[Pause.\]

So why would you ever use a ZFP-TF instead of a ZFN? Several reasons, and they're important enough that I want you to take them seriously.

First, **you don't have to cut the genome**. The ZFP-TF binds the DNA, recruits its activator or repressor partner, and modulates expression — all without introducing any DNA damage. No double-strand break. No risk of off-target cutting causing chromosomal rearrangements. No reliance on the cell's repair machinery, which can be imperfect. The DNA itself is unchanged. The change is in the expression pattern, not in the sequence. This is a major safety advantage for some applications.

Second, **the effect is reversible**. Because the genome hasn't been edited, removing the ZFP-TF returns the gene to its baseline expression level. You can in principle turn the therapy on and off by controlling when the ZFP-TF is present. This is harder to do with a ZFN, where the edit, once made, is permanent.

Third, **you can fine-tune the dose**. You can dial up or down the expression level by adjusting how much ZFP-TF you deliver. With a ZFN, the cell is either edited or not — binary. With a ZFP-TF, the modulation is graded.

Fourth, **some diseases want regulation, not editing**. If a disease is caused by a gene being expressed at the wrong level — too much or too little — then changing the expression level may be all the therapy you need. You don't have to edit the gene; you just have to turn the volume knob.

\[Pause.\]

Sangamo has been working on ZFP-TFs for as long as they've been working on ZFNs — actually longer, since the ZFP-TF work predates their ZFN era. And in recent years, ZFP-TFs have become one of Sangamo's most promising clinical platforms. Several of their most advanced clinical programs use this approach. There's a program for **tauopathies** — neurodegenerative diseases caused by abnormal tau protein, including some forms of Alzheimer's and frontotemporal dementia — where the strategy is to deliver a ZFP-repressor that turns down expression of the tau gene in neurons, reducing the toxic tau load. There's a program for **Huntington's disease** — caused by a toxic expansion of a CAG repeat in the huntingtin gene — where the strategy is to selectively repress the mutant allele while leaving the normal allele expressed.

This is a genuinely elegant therapeutic logic. Many neurodegenerative diseases are caused by toxic proteins that don't need to be present at all; reducing their expression would help. ZFP-repressors offer a way to do that with high specificity, delivered in a single dose via AAV, with effects that should last as long as the AAV genomes persist in the targeted neurons — potentially years.

CRISPR-based equivalents exist — they go by names like CRISPRi for inhibition and CRISPRa for activation — and they work on the same principle, replacing the cutting-domain Cas9 with a catalytically dead Cas9 fused to an activator or repressor. CRISPRi and CRISPRa are widely used in research, and there are clinical programs using them too. But ZFP-TFs have some advantages for in vivo therapy — they're smaller and easier to package in AAV, they're less immunogenic, and Sangamo's deep IP portfolio in zinc fingers gives them freedom to operate.

\[Pause.\]

I want to emphasize that this part of the zinc finger story is often missed in the genome-editing narrative. People hear "zinc finger nucleases" and think the cutting is the whole point. But the non-cutting cousin — the zinc finger transcription factor — may end up being the more enduring therapeutic platform for zinc finger technology, simply because it sidesteps the inherent risks of double-strand breaks. The same engineered gripping hands, with different payloads attached, can do different jobs. Some jobs are about editing the text; some jobs are about adjusting the volume of the text. Zinc fingers can do both.

---

## SEGMENT 14 — Zinc fingers in synthetic biology

Let's stay with the modular toolkit idea and zoom out a little, because zinc fingers have found a quieter niche in synthetic biology — the engineering field that builds new biological circuits from defined parts — and it's worth understanding what zinc fingers contribute there, even though synthetic biology hasn't been Sangamo's main business.

In synthetic biology, you frequently want to design transcription factors that target specific DNA sequences that don't naturally exist anywhere — synthetic promoters with synthetic binding sites, for example. You can build a circuit that has, say, a gene controlled by a promoter with a binding site you've designed yourself, and an engineered transcription factor that recognizes that site. Now you have a controllable gene: when the transcription factor is present, the gene turns on; when it's absent, off. Build several such circuits with different orthogonal binding sites and different transcription factors, and you can construct logic gates, feedback loops, oscillators — the building blocks of synthetic biology.

\[Pause.\]

Zinc fingers are an attractive substrate for this kind of work because of their modularity, the engineerable specificity, and the fact that you can in principle design many orthogonal zinc finger arrays — arrays that don't cross-react with each other's binding sites. Build a library of ten or twenty different zinc finger transcription factors, each with its own designed binding site, and you have a toolkit for building multi-component genetic circuits in which each transcription factor controls a different gene independently.

There has been steady work on this for over a decade, mostly in academic labs. Researchers including **Ahmad Khalil** at Boston University, **Tim Lu** at MIT, and others have built genetic circuits using engineered zinc finger transcription factors. Some of this work has been done in yeast, some in mammalian cells, some in plants. The orthogonality and the small size of zinc finger arrays makes them well-suited for packing multiple regulators into a single delivered construct, which is a common synthetic biology constraint.

CRISPR-based circuits, again, compete with zinc finger circuits for this niche, and they have advantages in terms of easy programmability. But zinc fingers have some advantages too — they don't require a separate RNA guide, they're typically faster-acting because they don't need to assemble a ribonucleoprotein complex, and their effects on the cell are generally smaller because they're smaller proteins. For some applications — particularly applications where you need many orthogonal regulators in the same cell — zinc fingers remain a competitive choice.

\[Pause.\]

There's also a less obvious application I want to mention. Zinc finger arrays have been used as **imaging probes** for specific DNA sequences in live cells. You fuse a fluorescent protein to a zinc finger array targeted to a specific genomic locus, and you can light up that locus in living cells and watch it move around the nucleus in real time. This kind of live-cell genome imaging is used to study, for instance, the dynamics of chromosome organization, the assembly of transcription factories, and the effects of cellular perturbations on genome architecture. CRISPR-based imaging using catalytically dead Cas9 fused to fluorescent proteins has largely taken over this application too, but zinc finger imaging probes still appear in the literature.

And then there's the more exotic territory of **zinc finger nickases** — variants where one of the two FokI domains has been mutated to be catalytically inactive, so the protein cuts only one DNA strand instead of both. A single-strand cut, called a nick, doesn't cause the same level of cellular alarm as a double-strand break, and it biases the repair pathway in particular ways. Zinc finger nickases have been used for some applications where you want gene editing without the full damage signature of a double-strand break.

The general pattern in synthetic biology is that zinc fingers have provided a slow, steady undercurrent of capability, often in applications where the higher-profile CRISPR approach is overkill or has the wrong properties. They're rarely the headline technology, but they're a reliable workhorse for people who need their specific properties.

---

## SEGMENT 15 — The IP landscape — Sangamo's patent estate

I want to spend a little time on intellectual property, because the patent situation around zinc fingers is genuinely interesting and it shaped how this technology developed in ways that aren't always appreciated. If you're going to work in genome editing as a professional, the IP landscape is one of the things you have to understand, and zinc fingers are a clean case study.

The foundational zinc finger patents — covering the design and use of engineered zinc finger proteins for site-specific DNA binding — were filed primarily in the 1990s, with key contributions from Aaron Klug and his colleagues at the MRC, from Carl Pabo's lab, from Carlos Barbas's lab, and from the FokI fusion work of Chandrasegaran at Johns Hopkins. The MRC's portfolio was largely licensed to **Gendaq**, a British company that was acquired by Sangamo in 2001, consolidating much of the foundational zinc finger IP under one roof. Subsequent improvements — the obligate heterodimer FokI variants, the optimized linkers, the validated finger libraries, the design software — were patented by Sangamo and by various academic institutions, with the most therapeutically useful inventions either originating at Sangamo or licensed to them.

The result, by the 2010s, was that **Sangamo had a dominant patent position around therapeutic ZFN development**. If you wanted to build a clinical ZFN program — for HIV, for hemophilia, for any disease — you basically had to either license from Sangamo or design around their patents, which was difficult given how broad the foundational claims were.

\[Pause.\]

This had two big consequences, and they pulled in opposite directions.

The first consequence was that **Sangamo could attract very large industrial partners**, because those partners knew they were getting clear IP rights to whatever therapy they developed. Pfizer, Biogen, Shire, Sanofi, and others all signed major partnerships with Sangamo over the years, in deals worth hundreds of millions of dollars in total. The partnerships brought capital into Sangamo and brought scale to the platform.

The second consequence was that **academic adoption of ZFNs was suppressed**. Academic researchers who wanted to use ZFNs typically had to either pay licensing fees, work through the Sigma-Aldrich/Sangamo CompoZr program at high cost, or use the open-source alternatives like the Zinc Finger Consortium's tools, which were lower-quality and less reliable. This meant that the number of academic labs doing serious ZFN work was much smaller than it would have been if the IP had been more open. The published academic literature on ZFNs is correspondingly thinner than you'd expect for such an important technology, because much of the practical know-how lived inside Sangamo and wasn't published.

Compare this to **CRISPR**, where the foundational publications by Doudna, Charpentier, Zhang, and others made the basic technology immediately available to anyone in the world, with the patent battles fought primarily over commercial use rather than research use. CRISPR's academic uptake was explosive — thousands of labs started using it within months of publication — precisely because the barriers to entry were essentially zero. ZFN academic uptake was slower and more selective.

\[Pause.\]

Was Sangamo's IP strategy good or bad? It depends on your perspective.

From Sangamo's perspective, it was rational. They had built the technology, they had invested heavily in it, and they captured value from it through their patent estate. They are a small-to-mid-cap public company; without strong IP protection, they would likely not have survived as an independent entity.

From the perspective of accelerating scientific progress, the strategy was suboptimal. ZFN technology might have advanced faster, with more academic contributions, if the IP had been more open. The slow accumulation of academic ZFN literature, compared to the explosion of CRISPR literature, is partly attributable to the IP barrier.

From the perspective of patients, the story is more complicated. Sangamo's IP-protected investment did produce real clinical programs that reached patients — programs that might not have been developed if ZFNs had been freely available, because no one would have had the commercial incentive to spend the hundreds of millions of dollars required to take a gene-editing technology through the regulatory pathway. The patent protection was, in a sense, the funding mechanism for clinical translation.

\[Pause.\]

I bring this up because **the IP situation is one of the main reasons CRISPR is the dominant academic technology and ZFNs are the more cautious clinical technology**. The two technologies are doing essentially the same biological work, but the legal architectures around them are very different, and those architectures shape who uses them, for what, and at what speed. When you read a paper or a news story about gene editing, the IP context is often invisible but is often determinative.

For the purposes of this lecture, the takeaway is just this: the slow academic uptake of zinc finger technology, relative to its scientific importance, is largely a story about patents — not about the science being lacking. The science is good. The science was always good. The IP landscape made it expensive to use.

---

## SEGMENT 16 — Why ZFNs faded — and where they remain dominant

So let's do an honest assessment of where zinc finger nucleases sit in the contemporary genome-editing landscape, and where they don't.

The clear story is that **academic adoption of ZFNs has largely been replaced by CRISPR**. If you walk into a random molecular biology lab in 2026 and ask which gene-editing tool they use, the answer is almost certainly CRISPR-Cas9 or one of the CRISPR variants. ZFNs are rare in routine research use. The cost, the design difficulty, the slow turnaround time, and the IP barriers all combined to push academic researchers toward the cheaper, faster alternative the moment it became available.

This isn't a tragedy. It's how technology adoption works. A better mousetrap beats an older mousetrap. CRISPR is the better mousetrap for most academic applications. Researchers who used to spend months building a ZFN now spend a week designing and ordering a CRISPR construct, and that productivity gain is enormous. The papers they can do, the experiments they can run, the questions they can ask — all of it scales up dramatically when the editing reagent is cheap and quick.

\[Pause.\]

But "academic research" is not the only place gene editing happens. And in several other places, **ZFNs remain competitive or even dominant**. Let me name them.

**Therapeutic development at Sangamo and their partners.** Sangamo's clinical pipeline is exclusively ZFN-based and ZFP-based. They have programs in late-stage development for sickle cell disease, beta thalassemia, Hunter syndrome, Hurler syndrome, Fabry disease, and others. These programs may eventually face commercial competition from CRISPR-based therapies for the same indications, and some of them have struggled, but they exist, and they're being actively developed.

**Plant and crop modification by certain biotech companies.** Dow AgroSciences and others have used ZFNs to edit crops, particularly for traits that are difficult to introduce with other methods. The agricultural biotech industry, which has its own regulatory considerations and its own preferences for proprietary technology, has often chosen ZFNs for specific applications.

**Industrial cell line engineering.** Companies producing biological drugs — antibodies, recombinant proteins — sometimes use ZFNs to modify the CHO cell lines used in manufacturing, optimizing their performance for production. The high specificity and long history of ZFNs make them attractive for regulated manufacturing applications where regulators have a longer track record with the technology.

**Live-cell imaging and certain synthetic biology applications**, as we discussed in Segment 14.

**Tauopathy, Huntington's, and other neurodegenerative ZFP-TF programs**, where the non-cutting approach has specific advantages and where Sangamo has been particularly active.

\[Pause.\]

And there's a more recent development worth flagging — there are now efforts to **build CRISPR-like simplicity into the zinc finger design pipeline**, with computational design tools that aim to lower the barrier to creating new ZFNs. If those tools mature to the point where you can specify a target sequence, click a button, and get a validated ZFN design in a day or two, the competitive landscape could shift. Companies like Sangamo and academic groups have been investing in this for years. The progress is real but slow.

There's also work on **ultra-compact ZFNs** with fewer fingers — some new variants use just two or three fingers but with higher per-finger specificity, which makes them faster to design while maintaining acceptable specificity. We'll talk more about these in Segment 17.

The honest assessment is that ZFNs are no longer the future of academic gene editing — that ship has sailed. But they are not extinct. They have a real and ongoing role in clinical development, in industrial applications, and in specific therapeutic niches where their properties are valuable. And in the broader sense of the zinc finger toolkit — including ZFP-TFs — the technology is genuinely thriving in places that don't get headlines.

The story of ZFNs is not the story of a failed technology. It's the story of a foundational technology that pioneered an entire field and was then partially displaced by a more convenient successor — but never fully replaced, because some of its properties remain valuable, and the cumulative investment in the platform still pays dividends.

---

## SEGMENT 17 — Recent ZFN improvements

Let's spend some time on what's been happening recently in the zinc finger world, because the technology has not been standing still. While CRISPR was eating the academic market, ZFN engineers were quietly improving their platform, and some of those improvements are interesting.

The first major improvement, which we've discussed already, was the **obligate heterodimer FokI variants** developed around 2007. These eliminated the homodimer off-target problem and made ZFNs dramatically safer.

The second major area of improvement has been in **enhanced FokI variants**. The wild-type FokI cutting domain is not the most active enzyme in the world; cuts happen reliably but not blazingly fast, and the efficiency of ZFN editing is often limited by the speed of cleavage once both ZFNs are bound. Directed evolution experiments have produced FokI variants with higher catalytic activity — including a variant called **Sharkey**, evolved in the lab of **David Liu** at Harvard, which has substantially higher cleavage activity than wild-type FokI. Combine Sharkey-style activity enhancements with obligate heterodimer architecture, and you get ZFNs that cut more efficiently while maintaining safety.

\[Pause.\]

The third area of improvement has been in **reducing the number of fingers required**. Early ZFNs typically used three or four fingers per protein, for a total of six to eight fingers per pair. More recent ZFNs have explored designs with fewer fingers per array but more careful engineering of each finger to be more specific. The trade-off is the engineering effort — fewer fingers means each one is doing more work, so each finger has to be more carefully designed and validated. The benefit is that fewer fingers means smaller ZFN proteins, which means easier delivery, lower immunogenicity, and faster expression.

A particularly clean version of this came from Sangamo itself, with a generation of ZFNs that use carefully optimized two-and-a-half or three-finger arrays with substantially higher per-finger specificity than the early modular-assembly designs. These newer ZFNs are smaller, more potent, and more specific than the early generation that went into the CCR5 trial. They're the basis for Sangamo's current clinical pipeline.

There has also been progress on **enhanced computational design tools**. The old way of designing a ZFN was to look up fingers in a hand-curated library and snap them together, then test the result in a reporter assay. The new way uses machine learning models trained on large datasets of ZFN performance to predict, in silico, which finger combinations are likely to work for a given target sequence. This shortens the design cycle and increases the success rate. Sangamo has invested heavily in this; academic groups have also published versions of this approach.

\[Pause.\]

And there have been some genuinely creative recent variants. **Compact ZFNs** that use new linker architectures to bring the two FokI domains closer together, requiring shorter spacers between binding sites — which expands the universe of targetable sites. **Tunable ZFNs** that can be controlled by small molecules or by light, so you can turn editing on and off in defined windows. **Self-cleaving ZFNs** that include sequences for their own degradation after they've done their work, reducing the time window for off-target cutting.

The general theme is that the basic ZFN architecture is mature, but the engineering details are still being refined. And as the details get better, the gap between ZFNs and CRISPR for specific applications narrows. For some applications — particularly clinical applications where specificity and immunogenicity matter most — modern ZFNs may actually outperform first-generation CRISPR systems.

There's also the integration of ZFN technology with **base editing**, which we'll cover in the next segment, because that's where some of the most exciting recent work has been happening.

\[Pause.\]

The pattern I want you to notice is that **mature technologies often get better through small, incremental engineering improvements that aren't headline-worthy individually but add up to substantial gains over time**. The original CCR5 ZFNs from the 2008 era and the modern ZFNs in Sangamo's current pipeline are both "ZFNs," but they're quite different in their detailed properties — much like the difference between a first-generation iPhone and a current one. The platform is the same; the implementation is dramatically improved.

This is true of all the gene-editing platforms, by the way. CRISPR-Cas9 today is not the CRISPR-Cas9 of 2013. It has higher specificity, lower off-target activity, broader targetable space, and better delivery options. TALENs have similarly improved. The whole field has matured. ZFNs are no longer ahead, but they are no longer the awkward early-generation technology people remember from the 2000s either. They're a refined and capable platform that occupies a specific niche.

---

## SEGMENT 18 — Frontier — re-engineered ZFNs for the clinic, and base editing fusions

For our final substantive segment, I want to look at the frontier of zinc finger technology — what's being developed right now, and what might come of it in the next decade.

The most exciting recent direction, I think, is the integration of zinc fingers with **base editing**. Base editing is a technique developed in David Liu's lab at Harvard around 2016-2017, which allows you to change a single DNA base — for example, converting a C to a T, or an A to a G — without making a double-strand break. Instead of cutting the DNA, a base editor uses a deaminase enzyme to chemically modify a base, converting one base into another within a small editing window. The cell processes the modified base through normal repair pathways, and the result is a precise single-letter edit.

The original base editors used CRISPR-Cas9 as the targeting domain — a catalytically dead or partially dead Cas9 that brings the deaminase to the right spot. But there's no reason in principle why you can't use a zinc finger array as the targeting domain instead, and several recent papers have demonstrated **zinc finger base editors** that work exactly this way. You fuse a zinc finger array to a deaminase, target it to your spot of interest, and a single base gets edited.

\[Pause.\]

Why is this exciting? Because zinc finger base editors are **much smaller than CRISPR base editors**, which makes them more deliverable. The whole package — a three-finger zinc finger array plus a deaminase plus a small protein-protein linker — can fit into a single AAV with room to spare. CRISPR base editors are large enough that fitting them into AAV is a serious constraint, often requiring split-construct delivery or other workarounds. Smaller payload means easier delivery, which means more diseases that can be addressed.

Companies and academic groups working in this space are pushing zinc finger base editors toward clinical applications, particularly for diseases caused by single-letter mutations that could be corrected with a single C-to-T or A-to-G edit. Some forms of sickle cell disease are addressable this way. Some forms of progeria — a rare premature-aging disease — are addressable this way. There's a whole landscape of single-letter genetic disorders, and a deliverable base editor would in principle address many of them.

\[Pause.\]

Beyond base editing, there's interesting work on **zinc finger prime editing** — using zinc finger arrays as the targeting domain for prime editors, which are an even more flexible class of editing tools that can introduce small insertions and deletions as well as point mutations. Again, the smaller size of zinc finger systems offers advantages for in vivo delivery.

There's also the broader **epigenetic editing** space — using zinc finger arrays fused to DNA methyltransferases or histone modifiers to alter the chromatin state of specific genes without changing the DNA sequence. This is closely related to the ZFP-TF work we discussed in Segment 13 but takes it further, into chemical modifications of the genome and the chromatin that can persist across cell divisions. Sangamo and academic groups have published interesting work on zinc finger epigenome editing for diseases including Alzheimer's and various forms of neurodegeneration.

\[Pause.\]

And then there's a quieter trend that I want to flag — the **renewed interest in zinc fingers for in vivo therapeutics specifically because of their size and immunogenicity advantages**. As the gene-editing field has matured, it's become clear that for in vivo therapies — therapies delivered directly to patients rather than to cells outside the body — the constraints of viral delivery and immune compatibility matter enormously. Cas9 is large and immunogenic. Zinc fingers are small and largely "self" to the human immune system. For diseases where you need to edit cells in vivo, with single-dose delivery, in patients who can't tolerate any immune reaction, zinc fingers may be a better fit than CRISPR — and several companies have noticed this and started building therapeutic programs around it.

So the frontier isn't a zinc finger renaissance, exactly. It's a quieter story of zinc fingers continuing to evolve, finding their niches, and remaining a viable platform for specific applications even as CRISPR dominates the headlines. The technology is alive. The chemistry is still beautiful. The engineering is still being refined. And the clinical programs are still treating patients, with some real successes and some genuine struggles.

\[Pause.\]

Let me close with a thought I want you to take away from this whole lecture. **Zinc finger nucleases were the first programmable scissors. They proved that human genome editing was possible. They went into patients before CRISPR existed. They built the regulatory pathway, the manufacturing pathway, and the conceptual framework that every subsequent gene-editing technology has inherited.**

That's a real achievement. It's the kind of achievement that often gets lost in the headlines, because the news cycle is dominated by whatever's newest. But the foundational technologies are often the most important, in the long run, because they prove what's possible. They show that the dream is real. They build the institutional knowledge — the labs, the companies, the regulators, the patients — that subsequent technologies can build on.

CRISPR didn't have to start from scratch when it arrived. It arrived into a world where Sangamo had already shown that programmable nucleases could be drugs, where the FDA had already approved clinical trials, where the manufacturing protocols had been worked out, where the patients had been treated and followed up. CRISPR inherited all of that. The CRISPR companies didn't have to convince anyone that gene editing was possible; they only had to convince people that their version was better. And they did. But the underlying conviction that this whole enterprise was real — that conviction was earned, in human clinical trials, by zinc finger nucleases.

So when you hear the CRISPR story in the future — and you will hear it told as the story of how genome editing came to humanity — remember that there was a chapter before that one. Before CRISPR, before TALENs, there were zinc fingers. They were the first. They were the proof. They built the road. The technologies that came after walked down a road that zinc fingers had paved.

That's the story I wanted to tell you today. Thank you for staying with it. We'll take questions for the last few minutes, and then I'll see you next week, when we move on to talking about TALENs — the technology that briefly looked like the future, before being eaten by CRISPR in turn. Have a good rest of your day.

---

## APPENDIX — Key terms, dates, and reference data

This appendix is meant as a quick-reference card for the technical and historical material covered in the lecture. It is not part of the spoken script; it is provided so that students can review the material in compact form before exams or while reading further.

**Aaron Klug** — South African-born British crystallographer, Nobel laureate in Chemistry 1982 for the development of electron crystallography of biological macromolecules. Discovered and characterized the Cys2-His2 zinc finger motif in the mid-1980s while studying the transcription factor TFIIIA from _Xenopus_.

**Cys2-His2 zinc finger** — A small protein folding unit, approximately 30 amino acids long, stabilized by a single zinc ion coordinated by two cysteine and two histidine residues. The most common DNA-binding motif in the eukaryotic genome; approximately 3% of human genes encode proteins containing zinc fingers. Each finger contacts approximately 3 base pairs of DNA in the major groove.

**Zinc finger array** — A linear arrangement of multiple zinc fingers connected by short flexible linkers (typically the TGEKP sequence), used to recognize longer DNA sequences. Three-finger arrays recognize 9 bases; four-finger arrays recognize 12 bases; six-finger arrays recognize 18 bases. Arrays of more than four fingers are uncommon in engineered ZFNs due to context dependence problems.

**Context dependence** — The phenomenon by which the DNA-binding behavior of one zinc finger is influenced by its neighbors in an array, due to inter-finger contacts, DNA bending, and overlapping binding contacts. The main reason why naive modular assembly of zinc finger arrays succeeds only about 30% of the time.

**Modular assembly** — The original approach to designing zinc finger arrays, based on snapping together pre-validated fingers from a library, one per target codon. Suffers from context dependence problems.

**OPEN** — Oligomerized Pool Engineering. An assembly method developed primarily in the Joung lab that uses bacterial selection to identify finger combinations that work well together for a given target.

**CoDA** — Context-Dependent Assembly. An assembly method developed by the Joung lab that uses pre-validated finger pairs rather than individual fingers, with higher success rates but more limited targetable space.

**FokI** — A type IIS restriction enzyme from _Flavobacterium okeanokoites_. Its cleavage domain operates independently of its DNA-recognition domain, making it useful as a generic cutting module that can be fused to any DNA-binding domain. The cleavage domain requires dimerization to cut.

**ZFN (Zinc Finger Nuclease)** — A chimeric protein composed of an engineered zinc finger array fused to the FokI cleavage domain. Used in pairs, with each ZFN binding one half of a target site on opposite strands, separated by a 5-7 base spacer. The FokI domains dimerize across the spacer to introduce a double-strand break. First demonstrated by Chandrasegaran's lab in 1996.

**Obligate heterodimer FokI** — Engineered variants of the FokI cleavage domain with charge-swap mutations at the dimer interface, designed to prevent homodimerization. The two variants only dimerize with each other, not with themselves. Substantially reduces off-target cutting. Common variant pairs include ELD/KKR. Developed around 2007.

**Sharkey** — A directed-evolution variant of FokI with enhanced catalytic activity, developed in the lab of David Liu at Harvard. Often combined with obligate heterodimer architecture in modern ZFN designs.

**NHEJ (Non-Homologous End Joining)** — The cell's fast, sloppy double-strand break repair pathway. Active throughout the cell cycle. Introduces small insertions or deletions (indels) at repair sites at a rate of approximately 30-70%. Used in ZFN gene-knockout applications.

**HDR (Homology-Directed Repair)** — The cell's careful, template-based double-strand break repair pathway. Active primarily in late S and G2 phases. Used in ZFN knock-in applications when an external donor DNA template is provided. Efficiency typically 1-5%, much lower than NHEJ.

**ZFP-TF (Zinc Finger Protein - Transcription Factor)** — An engineered transcription factor consisting of a zinc finger array fused to an activation domain (e.g., VP64) or a repression domain (e.g., KRAB). Modulates gene expression without cutting DNA. Used by Sangamo in clinical programs for tauopathies, Huntington's disease, and others.

**VP64** — A strong activation domain consisting of four tandem copies of the activation region of the herpes simplex virus protein VP16. Standard activator domain for ZFP-activator and CRISPRa constructs.

**KRAB** — Krüppel-associated box. A natural repression domain found in many human zinc finger proteins. Standard repressor domain for ZFP-repressor and CRISPRi constructs.

**CCR5** — C-C chemokine receptor type 5. A co-receptor used by most HIV strains to enter CD4 T cells. The target of Sangamo's first ZFN clinical program.

**CCR5-delta-32** — A natural deletion in the CCR5 gene that confers resistance to HIV infection in homozygous individuals. Approximately 1% of people of European ancestry are homozygous. The biological basis for the CCR5-ZFN therapeutic strategy.

**Berlin Patient (Timothy Ray Brown)** — HIV-positive man who was effectively cured of HIV in 2008 after receiving a bone marrow transplant from a donor homozygous for CCR5-delta-32. The first documented HIV cure. Proof of concept for the CCR5-disruption therapeutic approach.

**Sangamo Therapeutics** — Biotech company founded in 1995, based in Richmond, California. The dominant industrial developer of zinc finger nuclease technology. Pioneered the first clinical use of programmable nucleases in humans (CCR5-ZFN trial). Current clinical pipeline includes ZFN and ZFP-TF programs for sickle cell disease, beta thalassemia, Hunter syndrome, Hurler syndrome, Fabry disease, and tauopathies.

**Srinivasan Chandrasegaran** — Researcher at Johns Hopkins University who, in 1996, first fused a zinc finger array to the FokI cleavage domain, creating the first zinc finger nuclease. The foundational invention of the programmable nuclease era.

**Carl Pabo** — Structural biologist who established much of the molecular understanding of zinc finger-DNA recognition through crystallographic studies in the 1990s.

**Carlos Barbas** — Researcher at Scripps who published widely-used libraries of zinc fingers with characterized three-base specificities.

**Keith Joung** — Researcher at Harvard who developed the OPEN and CoDA assembly methods and contributed to the Zinc Finger Consortium's open-source efforts.

**Zinc Finger Consortium** — A collaborative academic effort, primarily in the late 2000s, to develop and distribute open-source ZFN reagents to bypass commercial IP barriers. Distributed reagents through Addgene and other channels.

**Addgene** — Nonprofit plasmid repository that distributes plasmids including many zinc finger and ZFN reagents to academic researchers worldwide.

**AAV (Adeno-Associated Virus)** — A small non-pathogenic virus used as a delivery vehicle for in vivo gene therapy. Cargo capacity approximately 4-5 kb. Used to deliver ZFNs to liver and other tissues in clinical programs.

**Electroporation** — A delivery method that uses brief electrical pulses to create transient pores in cell membranes, allowing uptake of DNA, mRNA, or protein. The standard delivery method for ex vivo ZFN editing of T cells and hematopoietic stem cells.

**Ex vivo editing** — A therapeutic workflow in which cells are removed from the patient, edited in the lab, and returned to the patient. Used for CCR5-ZFN and for most current CRISPR-based cell therapies.

**In vivo editing** — A therapeutic workflow in which the editing reagent is delivered directly to cells inside the patient, typically via viral vector. Used for some Sangamo programs targeting liver hepatocytes and central nervous system neurons.

**TALEN (Transcription Activator-Like Effector Nuclease)** — A programmable nuclease developed around 2010-2011 using TALE proteins from plant pathogens as the DNA-binding domain, fused to FokI. Easier to design than ZFNs due to a strict one-module-per-base architecture, but proteins are larger.

**CRISPR-Cas9** — RNA-guided programmable nuclease developed for genome editing around 2012-2013. Uses a guide RNA for DNA targeting instead of a protein-based recognition domain. Much easier and cheaper to design than ZFNs. The dominant academic gene-editing technology since the mid-2010s.

**Base editing** — A genome-editing technique that chemically modifies a single DNA base without making a double-strand break, using a deaminase fused to a catalytically impaired Cas9 or zinc finger. Allows precise single-letter edits. Developed in David Liu's lab at Harvard.

**Key dates:**

- **1985**: Klug and Miller describe the Cys2-His2 zinc finger motif in TFIIIA.
- **1991-1996**: Structural and biochemical work by Pabo, Berg, and others establishes the zinc finger DNA-recognition code.
- **1996**: Chandrasegaran's lab publishes the first zinc finger nuclease, fusing a three-finger array to the FokI cleavage domain.
- **1995**: Sangamo BioSciences founded.
- **2001**: Sangamo acquires Gendaq, consolidating zinc finger IP.
- **2005-2007**: Modular assembly libraries published by Barbas and others; OPEN and CoDA methods developed by Joung lab.
- **2007**: Obligate heterodimer FokI variants developed by Cathomen and Sangamo.
- **2008**: First CCR5-ZFN clinical trial begins.
- **2010-2011**: TALENs developed and published.
- **2012-2013**: CRISPR-Cas9 published as a programmable genome-editing tool.
- **2014**: NEJM publication of first CCR5-ZFN trial results.
- **2016-2017**: First in vivo ZFN clinical trial (Sangamo, hemophilia and Hunter syndrome programs).
- **2017**: Base editing published by David Liu's lab.
- **2023**: First CRISPR-based therapy approved (Casgevy for sickle cell disease).
- **2020s**: Ongoing development of ZFP-TF programs for neurodegenerative disease; zinc finger base editor development; renewed interest in zinc fingers for in vivo applications.

**Approximate sizing reference:**

- Single zinc finger: ~30 amino acids
- Three-finger zinc finger array: ~90 amino acids plus linkers, ~10 kDa
- FokI cleavage domain: ~200 amino acids, ~25 kDa
- Single ZFN protein: ~35 kDa total
- TALEN protein: ~120 kDa
- Cas9 protein: ~160 kDa
- Coding gene for single ZFN: ~1 kb
- Coding gene for Cas9: ~4 kb

**Approximate editing efficiencies (very rough, depend heavily on target and cell type):**

- NHEJ-mediated knockout with optimized ZFN: 30-70%
- HDR-mediated knock-in with optimized ZFN plus donor: 1-10%
- ZFP-TF activation or repression: 5-20 fold modulation of target gene expression

---


