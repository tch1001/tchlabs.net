# Phage Display

**A 2-hour undergraduate molecular biology lecture on selecting binders from billion-member libraries displayed on bacteriophage — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, which lands comfortably inside a two-hour slot. (Read faster, about 140 wpm, and you'll have generous room for questions and board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The central idea — linking genotype to phenotype on a virus

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about **phage display** — what is, in my opinion, one of the three or four most beautiful experimental ideas of the late twentieth century, and one of the most consequential. It is the technology that turned antibody discovery from an art into an engineering discipline. It is the technology behind Humira, the world's best-selling drug at its peak. It won half of the 2018 Nobel Prize in Chemistry, shared by George Smith, who invented it in 1985, and Greg Winter, who pushed it from a clever trick to an industrial pipeline. And the core idea behind it — once you see it — is so simple that you may catch yourself wondering why nobody thought of it sooner.

So let me state the problem first, because if you don't feel the problem, the solution doesn't feel like genius.

Here's the problem. Suppose you have a target — say, a human protein involved in inflammation, like tumor necrosis factor alpha, TNF-alpha. You want a molecule that binds it tightly, specifically, and ideally blocks it from doing its inflammatory job. That molecule, in the modern era, is almost certainly going to be an antibody, or some other protein-based binder. So you need to find, out of all possible protein binders in the universe, the one that fits this particular target the best. That is a search problem of staggering size. The space of possible binder sequences is, as we discussed in the antibodies lecture and the directed-evolution lecture, vast beyond comprehension. The number of possible ten-amino-acid peptides is twenty to the tenth — about ten trillion. The number of possible variable-region antibody sequences is bigger than the number of atoms in the solar system. You cannot enumerate this space. You cannot guess your way through it. You need a way to ask all the candidates the question — "do you bind this target?" — in parallel, and pull out only the ones that say yes.

\[Pause.\]

Here's the analogy I want you to hold in your head for the next two hours. **Phage display is throwing billions of darts at a board, all at once, and only keeping the ones that stick.** That's the elevator pitch. Each dart is a different protein variant. The board is your target. You throw the whole library at once, you wash off everything that didn't stick, and what's left — what's still clinging to the board — is your hit. You don't have to know in advance which dart will fly true. You just have to set up the throw so that every dart gets a fair chance, and you have to have some way of recovering and identifying the winners.

That's the throwing part. Now here's the recovering and identifying part — and this is where the genius really lives. **Each dart, each protein variant, is physically tethered to a tiny DNA scroll that contains the recipe for that exact protein.** When you pluck the dart off the board, you don't just have the protein — you have the gene that encoded it, riding along with it. You can sequence the gene. You can clone the gene. You can make more of the protein. You can mutate the gene and try again. The recovery problem — going from "this thing bound" to "this is the sequence that bound" — is solved automatically, because every binder carries its own blueprint.

That tethering — linking the **genotype** (the DNA sequence) to the **phenotype** (the displayed protein) on a single physical particle — is the central trick of phage display. Once you have that tether, everything else falls into place. The library is whatever protein library you choose to display. The selection is whatever target you choose to coat on a plate. The result is a recipe for whichever variants bound. The cycle can repeat — enrich, amplify, mutate, re-select — until you have driven the population to whatever degree of binding you want.

If you walk out of here in two hours and you can do four things — first, sketch the phage display cycle and tell me what happens at each step and why; second, explain in plain English why the genotype-phenotype linkage is the crucial trick and how M13 phage achieves it; third, walk me through one panning experiment in enough detail that, if I handed you a recombinant phage library and a coated dish, you'd know what to do; and fourth, articulate why phage display, despite being forty years old, is still the workhorse of antibody discovery in 2026 — then we have succeeded. Everything else, the historical context, the molecular details, the comparison to yeast display and ribosome display and mRNA display, the modern combinations with deep sequencing and machine learning, hangs off those four.

Now let me set the scene historically. The year is 1985. George Smith, a molecular biologist at the University of Missouri — not a famous lab, not a household name — is working on a project to map epitopes. He wants to know which part of a protein an antibody is recognizing. He's tinkering with M13 filamentous bacteriophage, a workhorse virus that he's been using for unrelated cloning purposes. And he has the idea: what if I take a small piece of foreign DNA, insert it into the gene for one of the M13 coat proteins, so that the foreign peptide gets displayed on the surface of the phage particle? Then I could pan that phage past antibodies, and the antibody would pick out phages displaying peptides it recognizes. The phages carry their own DNA. So I'd have, in one step, both the binder and its sequence.

He published it that year. _Science_, 1985, a five-page paper titled "Filamentous fusion phage: novel expression vectors that display cloned antigens on the virion surface." Single author. The technology was born. It would take about a decade — and the genius of Greg Winter and the founding of Cambridge Antibody Technology — to turn the trick into an industry. By the time the Nobel Committee got around to it in 2018, phage display had given the world Humira and a dozen other antibody drugs, had transformed how peptide ligands are discovered, and had become a standard tool in essentially every protein-engineering lab on Earth.

That's where we're going. Buckle in.

---

## SEGMENT 2 — M13 filamentous phage — the perfect chassis

To understand why phage display works, you have to understand a little about M13 — the specific virus George Smith picked, and the one that, with rare exceptions, every phage display experiment since has used. M13 is not a coincidence. M13 has an extraordinary collection of properties that make it almost custom-designed for this application, even though, of course, evolution didn't design it for this application at all. We just got lucky that this particular phage happened to be sitting in the molecular biology toolbox when Smith needed it.

So let me tell you about M13. M13 is a **filamentous bacteriophage** — meaning, a virus of bacteria, and specifically a virus shaped like a long thin filament rather than the icosahedral spaceships you may have seen in textbook diagrams. Picture a strand of cooked spaghetti, about a micron long and about six nanometers in diameter — long, thin, and floppy. That's the shape of an M13 particle. It infects _E. coli_, and only _E. coli_ that carry a particular kind of pilus called the F pilus, because the virus uses the F pilus as its entry receptor.

Inside the filament is a single-stranded DNA genome — and this is one of the first nice features. M13 carries circular **single-stranded DNA**, about 6.4 kilobases long. Single-stranded, not double — which matters, because it makes the genome compact and easy to package into the thin filament. The genome encodes eleven proteins. Five of them are structural — the coat proteins of the particle itself. The others are involved in replication and packaging.

\[Pause.\]

Here's the second nice feature, and this one is critical. **M13 does not lyse its host cell.** Most phages you may have learned about — T4, lambda, phiX174 — they infect a cell, replicate inside, assemble new viruses, and then burst the cell open to escape. The cell dies. M13 doesn't do that. M13 establishes a chronic, non-lytic infection. The infected _E. coli_ keeps growing — slower than normal, maybe two-thirds the rate — and continuously secretes new phage particles out into the medium. The particles thread out through a dedicated channel in the bacterial membrane, like wet noodles being extruded from a pasta maker, and the host cell never dies. You can grow infected cultures essentially indefinitely, harvesting phage from the supernatant.

Why does this matter for display? Because it means you can amplify your library. After you pan a phage library against a target and pull out the binders, you need to make more of them — many more, billions more, so you can do the next round of panning. With M13, amplification is trivial: you just infect _E. coli_ with the recovered phage, let it grow overnight, and harvest the supernatant. The cells don't lyse. The titer climbs to ten to the eleventh or twelfth particles per milliliter, easily, in a single overnight shake flask. If M13 lysed its host, the amplification step would be much messier and less robust. The fact that it doesn't lyse is the difference between an industrial pipeline and a lab curiosity.

Now let's look at the structural proteins of the M13 particle, because these are the candidates for where you can display foreign peptides. There are five coat proteins, named by historical convention pIII, pVI, pVII, pVIII, and pIX — the Roman numerals coming from the order in which the genes were discovered, not their position on the particle. They sit in distinct locations on the filament. **pVIII** is the major coat protein — there are about 2,700 copies of it, and they form the long cylindrical shaft of the particle, like the scales on a snake covering its entire body. **pIII** sits at one end of the filament — the tip — with about three to five copies. **pVI** is also at the same tip as pIII, also in low copy number, and serves as a sort of adaptor. **pVII** and **pIX** sit at the other end, the head, again in low copy number.

For our purposes, the two important ones are **pIII at the tip** and **pVIII along the shaft**. These are the two display surfaces. You can, in principle, fuse a foreign peptide to either of them and have it displayed on the particle. Smith's original 1985 trick used pIII. Most modern phage display still uses pIII. Why pIII and not pVIII? Because of the geometry and the multivalency.

\[Pause.\]

Here's the key tradeoff. **pIII display puts the displayed peptide at the tip of the phage, in just three to five copies. pVIII display puts the displayed peptide all over the shaft, in thousands of copies.** That's a huge difference in display valency, and the implications run through every later choice in phage display.

Low valency — pIII display — means that when a phage binds a target, it's typically a one-on-one interaction. One displayed peptide grabs one target molecule. The binding affinity you measure in the selection is the intrinsic, monomeric affinity of the displayed protein for the target. If the displayed peptide is weak, only the strong binders survive — the weak ones can't hold on, because there's no second copy to grab simultaneously. Low valency gives you **high stringency** and **clean affinity discrimination**.

High valency — pVIII display — means that when a phage binds a target, it's typically a multivalent interaction. The thousands of copies of the displayed peptide grab thousands of target molecules at once, in something called **avidity binding**. Even a very weak monomeric interaction looks strong, because so many of them are happening simultaneously. This is great for fishing out very weak first hits — first-pass binders that wouldn't survive the stringency of pIII display — but it's bad for affinity discrimination. Everything binds. The signal-to-noise gets ugly.

For most modern phage display, we want clean affinity discrimination. We want to find the high-affinity binders, not just any binder. So pIII is the standard choice. The displayed peptide sits at the tip, in low copy number, and the panning conditions reward true affinity. The analogy I want you to keep is that **pIII display is like having a single grappling hook at the tip of an arrow — if it grips, it grips because of one well-aimed contact; pVIII display is like having a sticky-tape arrow that grabs at everything it touches.** For finding the best key for a particular lock, the single grappling hook wins.

There are also intermediate strategies — pIII display in low copy number but engineered to be even lower, by using **helper phage systems** and **phagemid vectors**, which I'll describe in the next segment. The general principle, though, is set. M13 is the chassis. pIII is the primary display surface. The tip of the filament carries the displayed peptide, the rest of the filament is structural, the DNA inside encodes everything. Now let's see how the fusion is actually built.

---

## SEGMENT 3 — The pIII fusion — Smith's 1985 trick

Let me walk you through, in some molecular detail, what George Smith did in 1985 and what every phage display experiment since has done in some variation. The trick is to take the gene encoding the pIII coat protein, splice your peptide of interest into that gene at the right place, and let M13 do the rest. When the phage assembles, the chimeric pIII gets incorporated into the particle just like normal pIII, and the foreign peptide rides along on the outside of the tip, where binding partners — antibodies, target proteins, whatever you're panning against — can see it.

Here's the protein architecture you need to understand. The pIII protein has two functional domains, separated by a flexible linker. The N-terminal half — the part that ends up sticking out away from the phage tip — is responsible for binding the F pilus of _E. coli_ during infection. This is the part of pIII that mediates the virus's attachment to its host. The C-terminal half is anchored in the phage particle itself, embedded in the membrane during assembly and then incorporated into the final virion.

For display, you insert your foreign peptide at the very N-terminus of pIII, or sometimes between the two domains via the flexible linker. The result is a fusion protein: foreign peptide — pIII N-terminal domain — linker — pIII C-terminal domain. When the phage assembles, this fusion gets packaged just like wild-type pIII. The foreign peptide is now physically attached to the tip of the phage particle, with its sequence dictated by the DNA that the same particle carries internally. **Genotype meets phenotype on the same physical object.**

\[Pause.\]

Now there's a subtlety here. If you replace _every_ copy of pIII in the phage with your fusion construct, you have a problem. The fused pIII is no longer good at binding the F pilus, because the foreign peptide is blocking the binding site. Phage with all-fused pIII can't infect _E. coli_ efficiently. They can't be amplified. They're dead in the water after one round.

Smith's original solution was to leave the foreign insertion small — short peptides, just six to twelve amino acids, where the F-pilus-binding function of pIII could still work around the inserted peptide. That works for small peptides but not for big proteins like antibody Fab fragments.

The solution that emerged in the early 1990s, and became the standard, is the **phagemid system**. The idea is: don't put the fusion gene on the phage genome itself. Put it on a small plasmid, a **phagemid**, that has the M13 packaging signal so it can be encapsidated like phage DNA. The phagemid carries the gene for your fused pIII, plus selection markers and a bacterial origin of replication. The _E. coli_ host carries the phagemid. Then you superinfect the cell with **helper phage** — a defective M13 that provides all the wild-type structural proteins and replication machinery but is poor at packaging its own genome.

What happens is beautiful. The helper phage provides the structural backbone — including a full complement of wild-type pIII, which means the resulting phages are infectious. The phagemid contributes its own fused pIII, which gets mixed in with the wild-type pIII at assembly. The phagemid's DNA gets preferentially packaged because the packaging signal is engineered to favor it. Result: phages that have a mix of wild-type pIII (preserving infectivity) and fused pIII (carrying the display), with phagemid DNA inside (encoding the fusion). Typically only one out of every five pIII copies on a phagemid-displayed phage is the fused version. So you've got, at most, one fusion per particle — extreme low valency, ideal for affinity selection.

This is, in 2026, how essentially all serious phage display is done. The phagemid system gives you the genotype-phenotype linkage with the lowest possible valency, the cleanest affinity discrimination, and the cleanest amplification. The cost is one extra step — the helper phage superinfection — but that step is routine. You order helper phage from a catalog. You add it to your culture. You wait overnight. You harvest. You have a library of monovalent display phage.

\[Pause.\]

Let me restate the central concept now that you have the molecular picture. **Each phage particle is, simultaneously, a displayed protein on its tip and a DNA molecule encoding that exact displayed protein in its interior.** When the phage binds a target through its displayed peptide, recovering the phage automatically recovers the DNA. When you sequence the DNA, you have the protein sequence. When you re-introduce that DNA into _E. coli_, you can make more phage displaying the same protein, in any quantity you want. The phage particle is a self-contained unit of selection, sequencing, and amplification. It is the perfect medium for evolutionary engineering of proteins.

The analogy I want you to keep, and I'll repeat it because it matters, is that **the phage carries the DNA that encodes the displayed peptide; recover the phage, you recover the gene, you can sequence and reproduce it**. That is the move that makes phage display a technology rather than just a clever observation. Without that loop, you'd be back to one-at-a-time biochemistry. With that loop, you can do billion-fold parallel selection in a single tube and walk away with a recipe at the end.

---

## SEGMENT 4 — Panning — the binding tournament

So now we have the chassis. We have the display. We have the genotype-phenotype linkage. Time to walk through the actual experimental workflow — the cycle of selection that goes by the lovely name **panning**, after the gold-panning analogy. You pour a slurry over a sluice, the heavy stuff (the gold) stays behind, the light stuff (the dirt) washes away. In phage display, the heavy stuff is the binders, the light stuff is the non-binders, the sluice is your coated dish, and the slurry is your library. Let me walk you through one round.

\[Pause.\]

**Step one: coat your target.** You take an immunoassay plate — a flat-bottomed plastic dish with maybe 96 wells, the same kind you use for ELISA — and you coat the wells with your target molecule. If your target is a protein, you dilute it in buffer at maybe one to ten micrograms per milliliter and let it adsorb to the plastic overnight at four degrees. The protein sticks to the plastic by passive adsorption. After coating, you block the wells with a non-target protein — bovine serum albumin, casein, milk powder — to coat any remaining sticky plastic and prevent non-specific binding. The well is now your panning surface: target presented to the world, plastic blocked from accidental binding.

**Step two: add the library.** You take your phage library — typically ten to the tenth or eleventh phage particles, each displaying a different peptide or antibody fragment — and you dump it into the coated well. Volumes are small, maybe a hundred microliters. Concentrations are high; you have a lot of phage. You let it incubate at room temperature for an hour or two, with gentle shaking. During that incubation, every phage in the library has a chance to encounter the target on the well surface. The phages that display a binder for the target will dock onto the target and stay there. The phages that don't display a binder will just float around in solution and never adhere.

**Step three: wash, wash, wash.** Now you take the plate to the sink and you wash. You pour off the supernatant — taking with it all the phages that didn't bind. You add fresh buffer with a little detergent, swirl it around, dump it out. Then again. Then again. Then ten more times. Each wash strips off phages that were weakly attached or non-specifically stuck. The phages with high-affinity displayed binders, the ones that gripped the target tightly, stay attached even after vigorous washing. The wash is the **stringency knob** of the selection — wash gently and you keep weak binders too; wash aggressively and you keep only the tightest binders. In a typical first round, you wash gently, because you don't want to throw away every binder before you've enriched. In later rounds, you wash more aggressively, ratcheting the stringency tighter.

**Step four: elute the survivors.** After washing, the phages that remain are bound to the target through their displayed peptides. You need to get them off. The traditional method is to add a low-pH buffer — glycine-HCl at pH 2.2 — for a few minutes, which disrupts most protein-protein interactions and pops the phage off the target. You then quickly neutralize the elution with a Tris buffer at pH 9. Alternative elution methods include high pH, high salt, competition with free target, or — if the target is itself attached via a cleavable linker — proteolytic cleavage. The point is to recover the surviving phages into solution.

\[Pause.\]

**Step five: amplify.** You take the eluted phage and infect a fresh culture of _E. coli_. As we discussed in Segment 2, M13 doesn't lyse, so the cells just chug along and secrete new phage into the medium overnight. By morning, you have a billion-fold amplification of whatever phages survived the panning. The amplified pool is enriched for binders, because only binders survived elution, and now you have plenty of them to use in the next round of panning.

**Step six: repeat.** You take the amplified pool and pan it again. The second round starts from a library that's already enriched for binders, so the binders win an even larger share. You typically do three to five rounds of panning. With each round, the fraction of binders rises geometrically, and by the end, the population may be ninety percent or more genuine binders to your target. The ratio of binders to non-binders, called the **enrichment ratio**, typically increases by ten- to a thousand-fold per round. Three rounds of thousand-fold enrichment is a billion-fold total enrichment. That's enough to find the needle in a haystack of any reasonable size.

**Step seven: identify the winners.** After the final round, you spread the eluted phage on agar, pick individual plaques or colonies, and sequence the displayed peptide or antibody gene from each. You typically pick a few dozen to a few hundred clones — though, as we'll see in Segment 16, modern practice replaces the picking-and-sequencing step with next-generation sequencing of the entire post-panning population, which is much more informative. Either way, you end up with a list of sequences, ranked by their abundance after panning, that represent your top binders.

\[Pause.\]

That is the basic panning cycle. Coat, add library, wash, elute, amplify, repeat. Five to seven days per cycle, three to five cycles per campaign, a couple of weeks total. The output is a panel of binders to your target, each with a defined sequence, each amenable to further characterization. The analogy I want you to keep is that **panning is a binding tournament — you coat your target on a dish, you add the library, you wash everything else off, the survivors carry the DNA recipe to make more of themselves, and over a few rounds the population converges on the best binders.**

Notice how much work the genotype-phenotype linkage is doing here. You never have to figure out which sequence corresponds to which binder during the panning. The binders carry their own sequence inside them. You can amplify, mutate, re-select — and at every step, the population's behavior tells you what's working, and the DNA tells you why. It's evolution in a dish, with the fitness function chosen by you.

There are subtleties and tricks layered on top of the basic cycle — negative selections, depletion against close homologs, on-cell panning for membrane targets, kinetic off-rate selections to find the slowest dissociating binders — and we'll talk about those in Segment 14. But the core cycle is just what I described. Coat. Add. Wash. Elute. Amplify. Repeat.

---

## SEGMENT 5 — Library sizes — what billions of variants buys you

Let me dwell for a moment on library size, because the numbers here are genuinely staggering, and the size of the library is one of the things that makes phage display so powerful and so distinct from other protein-engineering methods.

\[Pause.\]

A typical modern phage display library contains somewhere between ten to the ninth and ten to the eleventh distinct variants. Let's say ten billion, for concreteness. **Ten billion distinct protein sequences, each present as a few hundred to a few thousand individual phage particles, all in a single milliliter of fluid.** You can hold the entire library in a test tube. You can pipette it. You can mix it. You can pan it. It's an absurd density of biological diversity.

To get a feel for that number, think about how it compares to natural antibody repertoires. Your own body has, at any moment, maybe ten billion to a hundred billion B cells, each making a slightly different antibody. So a phage display library is in the same ballpark as your entire immune system's antibody diversity, in a single test tube. That's the scale we're talking about.

Now, where does the library come from? There are two main routes.

**Route one: natural source.** You take B cells from a human donor — say, peripheral blood mononuclear cells — extract the messenger RNA, reverse-transcribe it to cDNA, and PCR-amplify the antibody heavy-chain and light-chain variable regions. The result is a library of antibody V-region sequences that reflect the actual antibody diversity of that donor's immune repertoire. You clone those V-regions into a phagemid display vector, transform _E. coli_, and there you go — a library of ten billion phages, each displaying an antibody Fab whose sequence came from a real human B cell. Greg Winter's early Cambridge Antibody Technology libraries were built this way, often from multiple donors pooled together, to maximize diversity.

**Route two: synthetic.** Instead of capturing what nature made, you design the library from scratch. You start with a known antibody scaffold — say, the human germline V-region framework — and you randomize the CDR loops, the parts that actually contact antigen, using degenerate codons. You can choose which CDR positions to randomize, which amino acids to allow at each position (full twenty? Reduced alphabet? Bias toward residues common in natural antibodies?), and how many positions to vary. The library you build can be as large as ten to the eleventh distinct sequences, all carrying the same framework, all differing only in the parts that matter for binding. This is the strategy behind libraries like **HuCAL** (Human Combinatorial Antibody Library, MorphoSys) and many others.

\[Pause.\]

Why does library size matter? Because the bigger your library, the better the binders you find. There's a rough rule of thumb in phage display: the affinity of the best binder you can pull out scales roughly with the cube root of the library size. So a tenfold bigger library, on average, gives you a slightly better best-binder. A thousandfold bigger library gives you a substantially better one. This is why people push library sizes to the practical limits.

What sets the practical limits? Two things, mainly. The first is **transformation efficiency**. To build a phage display library, you have to transform the phagemid into _E. coli_, and the number of independent transformants you can get is limited by how much DNA you can electroporate into how many cells. The state-of-the-art is around ten to the eleventh transformants per microgram of DNA, with a lot of fiddling. So a library bigger than about ten to the eleventh is hard to build by standard methods.

The second is **library quality**. A library of ten billion is only useful if those ten billion are mostly correct, in-frame, full-length sequences. Many synthetic libraries suffer from errors during oligonucleotide synthesis or PCR, producing sequences with frameshifts, stop codons, or truncations. If half your library is junk, you've effectively halved your library size. Modern oligo synthesis, with curated codon choices, helps a lot.

So in practice, ten billion is a typical library size, ten to the eleventh is a heroic library, and getting much bigger requires moving beyond _E. coli_ transformation as the bottleneck. That's part of why **ribosome display** and **mRNA display**, which we'll cover in Segment 12, are interesting — they break the transformation bottleneck entirely, and can in principle produce libraries of ten to the thirteenth or fourteenth.

But ten billion is enough for most things. Ten billion variants is enough that the probability of finding a strong binder against any reasonable target is high. The hits from a typical phage display library against a typical antigen are binders with affinities in the nanomolar range — already pharmaceutically interesting on the first pass, before any affinity maturation. With one round of affinity maturation, as we'll discuss, you can get into picomolar territory, which is essentially the limit of what biological binders achieve.

The analogy here is just **librarianship at the scale of the dictionary of life**. A natural language has, what, a million distinct words at most. A phage library has ten thousand times more entries than the largest dictionary, packed into a milliliter of saltwater. And you can search the whole thing in an afternoon.

---

## SEGMENT 6 — Greg Winter and the antibody pipeline

So Smith invented the technology in 1985 for peptide display. Phage display as Smith described it was a clever trick for mapping antibody epitopes — show small peptides on phage, pan against antibodies, find the peptides each antibody recognizes. Useful for basic research, but not yet a drug discovery platform. The drug discovery transformation came from **Greg Winter** at the MRC Laboratory of Molecular Biology in Cambridge, England, starting in the late 1980s and accelerating through the 1990s.

Greg Winter was already a major figure in antibody engineering before phage display. In the 1980s, he had pioneered **antibody humanization** — the technique of taking a mouse antibody and grafting its CDRs onto a human antibody framework, to make a therapeutic that wouldn't trigger anti-mouse immune responses in patients. That work led to the first humanized antibody drug, daclizumab, and to the entire generation of humanized antibodies — trastuzumab (Herceptin), bevacizumab (Avastin), and so on. Winter was, by the late 1980s, the world's expert on the engineering of antibody molecules for clinical use.

When Smith's phage display paper came out, Winter saw immediately what it could become. Peptide display was nice. But what if you could display **antibody Fab fragments** on phage? An Fab is the antigen-binding fragment of an antibody — the variable region of a heavy chain paired with the variable region of a light chain, the whole thing about fifty kilodaltons, encoded by about a thousand base pairs of DNA. That's big — way bigger than Smith's six-to-twelve amino acid peptides — but it's still small enough to display, in principle, on the tip of a phage. If you could get Fab display working, you could pan whole antibody libraries against any target, fish out human-quality binders directly, and bypass the entire mouse-immunization-and-humanization pipeline.

\[Pause.\]

The technical hurdles were nontrivial. Fab fragments are heterodimers — heavy and light chain separately encoded, joined non-covalently in the periplasm. You had to figure out how to co-express both chains in _E. coli_, get them folded correctly in the periplasm, and get the heavy chain fused to pIII while the light chain associated with it through normal pairing. Winter and his collaborators — notably John McCafferty and Hennie Hoogenboom at MRC — worked through the engineering through 1990 and 1991. The first papers describing Fab display on phage appeared in 1990 and 1991. The era of antibody libraries on phage had begun.

In 1989, before all the Fab work was even published, Winter co-founded a company to commercialize the technology: **Cambridge Antibody Technology**, **CAT**. The pitch was: we'll build huge phage libraries of human antibody Fabs, drawn from human B cell repertoires; we'll pan them against any disease target a pharma partner brings us; we'll deliver fully human antibody drug candidates without ever needing to immunize a mouse or do humanization grafts. It was an industrial reframing of antibody discovery, and it changed the field.

The most famous CAT product, by far, is **adalimumab**, brand name **Humira**. Humira is a fully human monoclonal antibody against TNF-alpha, the inflammatory cytokine. It was developed in collaboration between CAT and BASF (later acquired by Abbott, then spun out as AbbVie), with the antibody itself coming out of CAT's phage display libraries in the early 1990s. Humira was approved by the FDA in 2002 for rheumatoid arthritis, and over the following two decades was approved for an expanding list of inflammatory conditions — Crohn's, ulcerative colitis, psoriasis, ankylosing spondylitis, juvenile arthritis, hidradenitis suppurativa, more. By the late 2010s, Humira was the **best-selling drug in the world**, with annual sales above twenty billion dollars. A single antibody, discovered from a phage library in the early 1990s, generated more revenue than the entire GDP of some small countries.

\[Pause.\]

CAT had other successes too. **Belimumab** (Benlysta), an antibody against BLyS for lupus, was discovered using CAT's libraries — the first new lupus drug in fifty years when it was approved in 2011. CAT's libraries also contributed to **ranibizumab** (Lucentis), an antibody fragment against VEGF for wet macular degeneration, although ranibizumab's discovery involved multiple steps including affinity maturation by phage display of a humanized starting antibody.

CAT was acquired by AstraZeneca in 2006, becoming the core of what is now MedImmune. The CAT libraries — or libraries descended from them — are still in active use. But the broader point is that Winter showed phage display could be industrialized. You could set up an antibody discovery pipeline that, for any new target, ran through library panning, hit identification, affinity maturation, lead optimization, and out the other end came a developable human antibody. Same pipeline, different targets. The era of "fishing for antibodies" had begun.

The analogy I want you to keep is that **Cambridge Antibody Technology was phage display scaled to industrial antibody discovery — Humira, the world's best-selling drug at one point, came out of CAT phage libraries.** Phage display turned antibody discovery from an art into an assembly line. That assembly-line scalability is what won Winter half of the Nobel Prize.

In parallel with CAT, other companies were building competing phage-based antibody platforms — Dyax, MorphoSys (with its HuCAL synthetic library), BioInvent. All of them pulled on the same fundamental technology Smith demonstrated in 1985. The path from a 1985 _Science_ paper to a $20 billion-a-year drug runs straight through Greg Winter's CAT.

---

## SEGMENT 7 — Chain shuffling and the path to affinity maturation

When you pull binders out of a naive phage display library, they're usually decent — nanomolar affinities are typical — but they're not at the limit of what antibodies can achieve. For a therapeutic, you often want picomolar affinity, two or three orders of magnitude tighter. Getting there is called **affinity maturation**, and phage display has a specific, elegant trick for it called **chain shuffling**.

Here's the idea. An antibody Fab is a heterodimer — heavy chain plus light chain. The binding surface is contributed by both, with CDRs from each forming the antigen contact. Suppose you've found a hit in your library, a phage displaying a Fab with heavy chain A and light chain B. The combination AB binds your target at, say, ten nanomolar. Could you do better? Almost certainly — but where do you look?

\[Pause.\]

Chain shuffling says: take the heavy chain A and pair it with every light chain in your library. Make a sub-library where the heavy chain is fixed and the light chain is varied. Pan that against your target with tight stringency, lower target concentration, longer washes. The new winners are AB' combinations, where B' is some light chain that pairs with A even better than the original B did. You've discovered a better light-chain partner for your heavy chain.

Then you flip it. Fix the new light chain B' and shuffle through every heavy chain. Pan again. The winners are A'B' combinations with improved heavy chains.

A couple of rounds of light-chain shuffling and heavy-chain shuffling can move the affinity from ten nanomolar into the high picomolar range. Each shuffle is a focused exploration of one half of the binding surface, holding the other half constant. It's evolution by **partial recombination** — taking advantage of the natural modularity of the Fab to explore each chain separately, instead of trying to mutate both simultaneously, which would blow up the library size impossibly.

\[Pause.\]

This is, in essence, a phage-display flavor of directed evolution. The analogy I want you to keep is that **affinity maturation by chain shuffling is the Darwinian polish — take your best hit, swap one chain against a library of partners, re-pan under tighter conditions, keep the winners; then flip and do the other chain.** It's the same iterate-mutate-select loop that drives natural antibody maturation in germinal centers, but the "mutation" is whole-chain reshuffling rather than point substitutions.

The other phage-display affinity maturation strategies — CDR-walking, where you randomize one CDR loop at a time and re-pan; full random mutagenesis of one chain via error-prone PCR; targeted saturation mutagenesis of contact residues identified from a crystal structure of the hit — all follow the same pattern. Make a focused sub-library starting from your hit. Pan with high stringency. Keep the winners. Iterate. Two or three rounds of any of these methods, layered on top of the original library pan, typically gets you the affinity you need for a clinical candidate.

This is what made phage display industrially viable. Discovery from a naive library gives you a starting point. Affinity maturation, by chain shuffling or its variants, gets you to the finish line.

---

## SEGMENT 8 — HuCAL and the synthetic library era

The early CAT libraries were built from natural B-cell repertoires — heavy chains PCR-amplified from human donor B cells, light chains amplified from the same donors, then recombined more or less at random in the cloning step. Natural-source libraries have one big virtue and one big vice. The virtue: every sequence in the library has, in principle, already been vetted by the donor's immune system as a viable folding antibody. The vice: the diversity is biased — heavily shaped by what those particular donors had been exposed to, by germline gene usage in the population, by all the quirks of immune history.

The synthetic library era began in the late 1990s, when groups asked: what if we just design the library? Pick a single high-quality antibody framework — one we know folds well, expresses well in _E. coli_, has manufacturing properties we like — and synthesize CDR loops onto that framework using degenerate codons that explore the amino acid space we want. The result is a library where every member is a slight variation on a known-good chassis, with diversity precisely where it should be (the contact loops) and uniformity precisely where it should be (the framework).

\[Pause.\]

The most famous example is **HuCAL** — the **Human Combinatorial Antibody Library**, developed by **MorphoSys** in the late 1990s. HuCAL uses a small set of carefully chosen human germline framework scaffolds, combined with synthetic CDR cassettes that explore diversity in the binding loops. The library size is around ten billion. The framework engineering means that hits from HuCAL are easier to develop into manufacturable drugs — they fold predictably, express in bacteria and mammalian cells at high yield, and don't carry the developability quirks of arbitrary natural antibodies.

Other synthetic libraries followed — Genentech's synthetic libraries built on the trastuzumab framework, the Tomlinson libraries from MRC, the Ylanthia library, and many proprietary platforms inside pharma. They all share the same philosophy: a controlled framework, designed diversity, predictable behavior.

The choice between natural-source and synthetic libraries is a strategic one. Natural libraries give you a wider range of binding modes, because the donor immune systems explored evolutionary corners we haven't imagined. Synthetic libraries give you a narrower range of binding modes but better developability and reproducibility. Modern practice often combines them — discovery from a large naive-or-natural library, then transplantation of the discovered CDRs onto a synthetic framework for the maturation and lead optimization steps.

The point I want you to take away is that the library is **engineered** in modern phage display. The days of "whatever B cells we pulled out of a donor" are largely gone for serious commercial work. Today, the library is a designed object, every position considered, every diversity choice tuned for the application. Phage display is still the search engine. But the database it searches is no longer raw nature — it's a curated, optimized space of high-quality candidates.

---

## SEGMENT 9 — The 2018 Nobel — Smith, Winter, Arnold

The 2018 Nobel Prize in Chemistry was awarded "for the directed evolution of enzymes" to **Frances Arnold**, and "for the phage display of peptides and antibodies" to **George Smith** and **Greg Winter**. Half the prize to Arnold, the other half split between Smith and Winter. It was the first time the chemistry Nobel had been awarded to a triad of protein engineers in this way, and it was widely seen as a long-overdue recognition that **evolutionary methods** — using mutation and selection rather than rational design — had become the dominant paradigm in protein engineering.

\[Pause.\]

Let me unpack what each got recognized for, because the citations are clean and worth hearing.

**Frances Arnold** got the prize for directed evolution of enzymes — the work we covered in the directed-evolution lecture. Starting in the early 1990s, she developed the methods and the conceptual framework for evolving enzymes by iterated mutation and selection — taking a wild-type enzyme, making a library of variants, selecting for improved properties (thermostability, new substrates, organic-solvent tolerance), and using the winners as parents for the next round. Her work showed that directed evolution could solve protein engineering problems that rational design couldn't. By 2018, her methods were industrial workhorses, producing enzymes for laundry detergents, pharmaceutical synthesis, biofuels, and a hundred other applications.

**George Smith** got the prize for the original invention of phage display — the 1985 _Science_ paper we discussed in Segment 1. Smith's contribution was the genotype-phenotype linkage on a phage particle, the proof that you could fuse foreign peptides to pIII and pan them against antibodies to find epitopes. He pioneered the technique but did not, himself, push it into therapeutic antibody discovery. He spent the rest of his career at the University of Missouri doing fundamental research with phage display tools.

**Greg Winter** got the prize for adapting phage display to therapeutic antibody discovery — the Fab display systems, the CAT libraries, the path to Humira and other drugs. Winter took Smith's peptide-display trick and turned it into the dominant platform for human antibody discovery, with all the downstream commercial and clinical impact that followed.

\[Pause.\]

The Nobel was, in a sense, a recognition of a **philosophy**: that evolutionary search beats rational design for engineering complex biological molecules. Arnold made the case for enzymes. Smith and Winter made the case for binders. Together, their methods underpin essentially every protein-engineering company on Earth in 2026. When you read the news about a new biologic drug, an industrial enzyme, a designed binder for a research tool, the probability is high that either directed evolution or phage display (or both, layered together) was somewhere in the discovery path.

The 2018 Nobel was also a generational marker. Arnold was 62 when she won, Smith was 77, Winter was 67. The work being honored was from the late 1980s and early 1990s — three decades old. That's typical for Nobels. The technologies they invented had had time to ripple through the field, prove themselves repeatedly, become the new normal. By the time the Stockholm announcement came, phage display was as standard as PCR. The prize confirmed what working scientists had long known.

\[BREAK\]

---

## SEGMENT 10 — Peptide phage display — back to Smith's original use

Let's circle back to the original Smith application, because it's still in heavy use, and it's a cleaner pedagogical example than the antibody work.

When Smith built the first phage display vector in 1985, he wasn't trying to find drugs. He was trying to map **antibody epitopes** — the specific small region of a protein antigen that a particular antibody recognizes. The traditional way to map an epitope was painful: you'd take the protein, cleave it into fragments, test each fragment for antibody binding, narrow down to the smallest binding piece, then make synthetic peptides and refine further. Slow, low-throughput, and limited to linear epitopes.

Smith's idea was: build a library of short peptides — say, six to twelve amino acids, all possible sequences — fused to pIII. Pan that library against the antibody. The peptides that survive panning are the ones the antibody recognizes. Sequence the surviving phages, and you've mapped, at single-residue resolution, the peptide motif your antibody binds.

\[Pause.\]

This is still a workhorse application in 2026. You can buy commercial peptide phage display libraries — Ph.D.-7, Ph.D.-12, Ph.D.-C7C from New England Biolabs are the standards, with libraries of 7-mer, 12-mer, and cyclic 7-mer peptides displayed on M13 pIII. You order the library, pan against your target of interest, sequence the winners. The whole workflow can be done in a couple of weeks.

The applications go far beyond epitope mapping. **Drug-discovery starting points**: pan a peptide library against a receptor and you get peptide ligands, which can be developed into peptide drugs directly or used as starting points for small-molecule mimics. **Targeting motifs**: pan against a tumor cell and you might find peptides that home preferentially to that tumor — useful for tumor-targeted drug delivery. **Material binders**: pan against inorganic surfaces — gold, silicon, titanium — and you find peptides that adhere to those surfaces, useful for bio-nano interfaces. **Functional motifs**: pan against an enzyme and you may find peptide substrates, inhibitors, or activators.

The peptide library approach is, in some ways, the purest application of the phage display idea. The library is simple to build — degenerate oligos encoding random peptides, cloned into pIII. The selection is whatever target you can stick on plastic. The output is short, easy-to-sequence sequences. No protein folding to worry about, no chain pairing, no developability quirks. Just sequence-function mapping at scale.

It's worth remembering that this is what Smith got the Nobel for, really. The antibody pipeline is Winter's contribution. Smith's contribution was the original demonstration that the trick worked at all, using these peptide libraries. Everything else came later, built on the foundation he laid.

---

## SEGMENT 11 — Non-antibody scaffolds — DARPins, Affibodies, monobodies

Antibodies are not the only protein scaffold you can put on phage. In fact, one of the more interesting developments in the post-CAT era has been the emergence of **non-antibody binding scaffolds** — small, robust, single-chain proteins that can be diversified at exposed loops and selected for binding, often with advantages over conventional antibodies.

Why bother? Antibodies are big — about 150 kilodaltons for full IgG, 50 kD for Fab, 25 kD even for the smallest single-chain variable fragment, scFv. They contain disulfide bonds that complicate _E. coli_ expression. They're heterodimers that require chain pairing. Their pharmacokinetics are dominated by their Fc region. For some applications — intracellular targets, very small targets, applications where you want a binder that's cheap and easy to manufacture — a smaller scaffold is better.

\[Pause.\]

**DARPins** — Designed Ankyrin Repeat Proteins — are derived from ankyrin repeats, a small protein fold that occurs all over nature as a protein-protein interaction module. A DARPin scaffold has multiple repeating units, each about 33 amino acids, and the binding surface is contributed by variable residues on the concave face of the stack. They're about 14 kD, single-chain, no disulfides, fold rapidly, express to grams per liter in _E. coli_, and can be selected by phage display or ribosome display for tight binding to almost any target. Molecular Partners, a Swiss company, has commercialized them; abicipar pegol was a DARPin against VEGF for macular degeneration that reached late-stage trials.

**Affibodies** are based on a three-helix bundle from the Z domain of protein A. They're tiny — about 6 kD — and the binding surface is contributed by 13 residues on two of the helices. Phage display libraries of Affibodies have produced binders to HER2, TNF-alpha, and other targets, mostly in imaging and research-tool applications.

**Monobodies** (also called adnectins) are based on the 10th fibronectin type III domain. About 10 kD, single-chain, no disulfides, and the binding surface is on a set of loops that mimic antibody CDRs in topology but in a much simpler scaffold. Adnectin Therapeutics (now Bristol Myers Squibb) developed several adnectin-based drugs; the FDA-approved BCMA-targeting CAR-T construct uses a monobody as its binding domain.

There are others — **Anticalins** from lipocalins, **Affimers**, **Knottins**, **Avimers** — but you get the idea. The common thread is: any small, stable protein with surface loops you can diversify can, in principle, be put on phage and selected for binding to any target. The phage display infrastructure is scaffold-agnostic. The same panning workflow that works for antibody Fabs works for DARPins or monobodies. The only thing that changes is what you fuse to pIII.

This has been one of the unsung benefits of phage display: it democratized binder discovery to scaffolds that the immune system never produced. If you can build a library on the scaffold and clone it into a phagemid, you can pan it. The technology stack is the same.

---

## SEGMENT 12 — Beyond phage — yeast, ribosome, mRNA display

Phage display is the oldest and still most widely used display platform, but it's not the only one. Several alternative display systems have emerged, each with its own strengths, and modern protein engineers often use them in combination.

**Yeast display**, developed by **K. Dane Wittrup** while at MIT and now at UC Davis, displays proteins on the surface of _Saccharomyces cerevisiae_ via fusion to the yeast cell-wall protein Aga2p. The library size is smaller than phage — yeast transformation efficiency caps you around ten to the seventh or eighth — but the readout is different. **Each yeast cell can be analyzed by flow cytometry, sorted by FACS based on binding affinity directly.** You incubate the yeast library with fluorescently labeled target, sort on fluorescence intensity, and recover cells displaying the tightest binders.

\[Pause.\]

The analogy I want you to keep is that **yeast display is bigger, can do FACS sorting on affinity — continuous instead of binary, better for fine discrimination; phage display is simpler infrastructure, bigger libraries.** Phage display gives you survival panning — bind or don't bind, with the stringency knob adjusted by washes. Yeast display gives you a continuous quantitative readout — every cell has a measurable affinity, and you can sort the population on quantitative criteria. For fine affinity maturation, yeast display often outperforms phage. For initial discovery from huge libraries, phage wins on library size.

**Ribosome display** is even further down the path of breaking the cell entirely. The idea: do the whole thing _in vitro_, in a cell-free translation system. You take a library of mRNAs encoding your proteins, translate them in a cell extract without a stop codon, and the ribosome stalls at the end of the mRNA, leaving a complex of mRNA, ribosome, and nascent protein all physically linked. You pan this ternary complex against your target. Survivors are recovered by extracting the mRNA, reverse-transcribing, and reamplifying. No cells, no transformation, library sizes up to ten to the twelfth or thirteenth.

**mRNA display**, developed by **Rich Roberts** and **Jack Szostak** in the late 1990s, takes the cell-free principle even further. The idea: covalently link each peptide to its own mRNA via a small-molecule linker called **puromycin**. Puromycin mimics the 3' end of a tRNA and gets attached to the C-terminus of the nascent peptide when the ribosome encounters it. If you put puromycin at the 3' end of your mRNA, the ribosome, upon translating to the end, transfers the nascent peptide onto the puromycin, covalently linking the peptide to its own mRNA. You now have a peptide-mRNA covalent fusion. Library sizes can reach **ten to the fourteenth**, completely shattering the transformation bottleneck.

The analogy I want you to keep is that **mRNA display is the cell-free extreme — link peptide to its own mRNA via puromycin; library sizes up to 10^14.** That's a hundred trillion variants in a single tube, far more than any cell-based system can achieve.

**Bacterial display** — displaying proteins on the surface of _E. coli_ or other bacteria using outer-membrane protein fusions — exists too, and is used in some specialized applications. It has similar tradeoffs to yeast display: smaller libraries, FACS-amenable, cellular context.

Each platform has its niche. Phage display remains dominant for antibody discovery from large naive libraries. Yeast display is the go-to for high-precision affinity maturation and for displays requiring eukaryotic post-translational modifications. Ribosome and mRNA display dominate when you need the absolute biggest libraries, particularly for peptide discovery against tough targets.

---

## SEGMENT 13 — Affinity maturation as directed evolution

I want to dwell for a segment on the deep connection between phage display and directed evolution — because affinity maturation in phage display is, structurally and philosophically, just directed evolution applied to binders.

The directed-evolution cycle is: parent, mutagenesis, expression, selection, recovery, repeat. In phage display affinity maturation, the parent is your initial hit. The mutagenesis can be error-prone PCR across the variable region, site-saturation of contact residues, CDR walking through each loop in turn, or chain shuffling. The expression is automatic — the phage system displays whatever DNA you cloned in. The selection is panning under increasingly stringent conditions. The recovery is built into the phage particles. And then you repeat.

\[Pause.\]

The stringency knobs you turn between rounds are the equivalent of cranking up the fitness pressure in any directed-evolution experiment. **Lower the target concentration on the coated plate** — now phages with weak displayed binders can't grab on, and only the tightest survive. **Increase the wash duration** — phages that dissociate quickly get washed away, leaving phages whose displayed binders have slow off-rates. **Add a competitor** — soluble target in the wash buffer competes with plate-bound target, raising the threshold for survival. **Use a kinetic off-rate selection** — bind the library briefly at high target concentration, then incubate with excess unlabeled target for an extended period to compete off any weak binders, then recover only the strong residual binders.

Each of these tricks is a way to make the selection pressure tighter as your population gets better, so that the next generation has to improve to survive. Without ratcheting the pressure, you'd plateau at the affinity of your starting library — selection can only enrich what's already there. Ratcheting forces the population to evolve, in real time, toward the affinity ceiling your scaffold can support.

The endpoint of phage-display affinity maturation is typically picomolar affinity — Kd values in the 10 to 100 picomolar range, equivalent to the tightest affinities natural antibodies achieve after full somatic hypermutation in germinal centers. You're doing in two to three rounds of panning, over a few weeks, what the immune system does in two to three weeks of in vivo affinity maturation. Same evolutionary algorithm, different substrate. The principle, again, is the principle of all directed evolution: you don't have to know which mutations are good; you just have to set up the selection so that the good ones survive and the bad ones don't.

---

## SEGMENT 14 — Panning subtleties — negative selection and depletion

Let me come back to the panning workflow and talk about some of the layered tricks that turn an okay phage display campaign into a great one.

The first is **negative selection**, also called **depletion**. Suppose you want a binder to receptor X, but receptor X has a close homolog Y that you absolutely don't want your binder to cross-react with. Naive panning against X alone will produce a population of binders, many of which will also bind Y, because the binding surfaces of X and Y are similar. You need to **deplete** the library against Y first.

The trick is straightforward. Before you pan against X, you incubate the library with Y — usually coated on beads or on a separate plate. Any phage displaying a binder for Y gets pulled out of the library and discarded. You keep the supernatant — the phages that didn't bind Y — and pan that depleted library against X. The binders you recover are biased toward those that specifically recognize features unique to X, because the Y-binders have been removed.

\[Pause.\]

You can layer multiple depletions. Pan against X but deplete against Y, Z, and W — three different homologs you want to avoid cross-reactivity with. The library that emerges from the depletion is small but precise: phages whose binders are specific for what makes X uniquely X. This is essential for therapeutic antibody discovery, where you often need pinpoint specificity against a target without hitting closely related family members.

The second subtlety is **conformational selection**. Some targets exist in multiple conformations — open and closed, active and inactive, bound and free. You may want a binder specific to one of those conformations. You can engineer the panning to favor that. For example, if you want an antibody that recognizes the active conformation of a kinase, you might coat the plate with the kinase trapped in its active state by a stabilizer drug, and pan only against that. Alternatively, you can do a depletion against the inactive state first, then pan against the active state — what you get is enriched for binders specific to active.

The third subtlety is **panning on cells**. Sometimes your target is a membrane protein that won't fold or behave right in isolation. You can pan the phage library against intact cells displaying your target on their surface. The downside: there are millions of irrelevant antigens on the cell, so the off-target binding is huge. The trick is heavy depletion against an isogenic cell that doesn't express your target — same cell line, gene of interest knocked out. Pan against target-expressing cells, deplete against knockout cells. What's left is target-specific.

The fourth subtlety is **elution by target binding**. Instead of using harsh low-pH elution, you can elute the bound phages with a specific competitor — a soluble form of your target, or a known ligand. This is a clever way to pre-filter for phages whose binders interact with a particular site on the target — only those phages will be eluted by the competitor, because only those have a binding surface the competitor competes with.

These layered tricks are what separate good phage display campaigns from average ones. The basic cycle gives you binders. The careful layering of positive selection, negative depletion, conformational biasing, and competitive elution gives you the right binders.

---

## SEGMENT 15 — What phage display does well, and what it doesn't

Forty years on, it's worth taking stock of where phage display sits in the landscape. What does it do well? What doesn't it do?

**What it does well**: discovering binders against targets that can be presented as a stable, accessible folded protein in vitro. Soluble proteins. Extracellular domains of membrane receptors. Toxins. Cytokines. Peptide hormones. If you can purify the target or display it cleanly on a plate, phage display will probably find you a binder.

**What it doesn't do well**: a few things, and they're important.

\[Pause.\]

**Intracellular targets.** Phage display happens outside cells, in the periplasm of _E. coli_ during phage assembly. The displayed protein faces the external world. If your therapeutic target is an intracellular protein — a transcription factor, a signaling kinase that's hidden inside the cell — phage display can still find a binder against the protein in vitro, but the binder won't naturally get inside cells. You need additional engineering (cell-penetrating peptides, intrabodies, alternative delivery) to use the binder for an intracellular target. The discovery is fine; the delivery is the problem.

**Conformational discrimination of dynamic targets.** Phage panning is essentially a survival assay — bind or don't bind. It's a binary readout (with stringency adjustments). It doesn't naturally give you fine quantitative discrimination between conformations or kinetic states. Yeast display, with its FACS readout, handles this better. For very fine conformational selection, phage may not be the right tool.

**Targets that don't behave on plastic.** Phage panning typically requires the target to be coated on a surface, which can distort the structure, occlude epitopes, or present the target in non-physiological orientations. On-cell panning helps for membrane proteins. Solution-phase panning with biotinylated targets and streptavidin pull-downs helps too. But there are targets — particularly multi-pass membrane proteins, GPCRs — where getting clean phage display is a multi-year engineering project.

**Targets that require post-translational modifications.** _E. coli_ doesn't glycosylate proteins, doesn't do many modifications eukaryotic targets need. If your target is heavily glycosylated and the glycans matter for the epitope, you need to provide properly modified target from a eukaryotic expression system. The phage library itself is fine — antibodies and small scaffolds don't generally need post-translational modifications to bind — but the target preparation can be limiting.

These limitations are real, but they're known and worked around. Modern phage display campaigns combine on-cell panning, depletion strategies, recombinant target engineering, and downstream yeast-display refinement to handle most cases. The technology has matured into a flexible toolkit rather than a single rigid protocol.

---

## SEGMENT 16 — Phage display plus NGS — the modern upgrade

The single biggest change to phage display practice in the last fifteen years has been the marriage of panning with **next-generation sequencing**. The change is so consequential that it deserves its own segment.

In the classical workflow, after your final round of panning, you spread the eluted phage on agar, pick a few dozen plaques, sequence them by Sanger, and call those your hits. You get maybe twenty to fifty sequences out of a panning campaign. You bias the picking toward dominant clones, you miss rare clones, you have no idea what the population structure of the whole post-panning library looks like.

\[Pause.\]

With NGS, you do the panning the same way — but at the end, instead of picking plaques, you PCR-amplify the displayed-protein-encoding region from the entire eluted population and submit it for deep sequencing. Illumina or NovaSeq gives you ten million to a billion reads. You get the **entire population frequency distribution** of every variant that survived panning. Not twenty sequences but ten million.

This changes everything. You can now compute, for every variant, an **enrichment ratio** — how its frequency in the post-panning pool compares to its frequency in the input library. Variants that were rare in the input but common after panning are the real hits. Variants that were common in both didn't get enriched and aren't real binders. You can rank variants by enrichment with statistical confidence, instead of guessing from a handful of picks.

You can also do **comparative panning**: pan the same library against several different targets, sequence each output, and find variants enriched in one panning but not the others — those are target-specific hits. Or pan against your target with and without a competitor, sequence both, and find variants whose binding is competed away — those bind at a specific site.

The analogy I want you to keep is that **phage display plus NGS is the modern upgrade — instead of picking twenty clones to sequence, sequence the whole post-panning population; enrichment ratios per variant, comprehensive mutagenesis maps.** It turns phage display from a binary "did we find binders" experiment into a quantitative deep-mutational-scanning experiment that maps the binding fitness of millions of variants.

The combination is especially powerful for **affinity maturation by deep mutational scanning**. Generate a library where every single position in your CDR loops is mutated to every possible amino acid (a single-mutant library, sometimes 50,000 variants). Pan with stringent conditions. NGS the output. Compute enrichment for every single-mutant variant. The resulting map tells you, at every position, which mutations improve binding, which hurt, which are neutral. You then combine the best mutations rationally into a single multi-mutant design. This approach — sometimes called **DMS-guided design** — has become a standard tool in modern antibody engineering.

NGS plus phage display also enables **machine-learning** approaches. The deep-sequencing data is the perfect training set for sequence-activity models. Train a model on the enrichment data, then use the model to predict the activity of variants you never tested. Iterate. The combination of phage display data and ML is one of the most active areas in protein engineering in 2026.

---

## SEGMENT 17 — Clinical successes — the antibody pipeline

Let's take stock of what phage display has delivered to medicine. The list is impressive and growing.

**Adalimumab (Humira)** — anti-TNF-alpha, approved 2002, the canonical CAT phage display drug. Treats rheumatoid arthritis, Crohn's, ulcerative colitis, psoriasis, ankylosing spondylitis, juvenile arthritis, hidradenitis suppurativa, uveitis. Best-selling drug in the world for most of the 2010s. Over $20 billion annual peak sales. Now off-patent with biosimilars on the market.

**Ranibizumab (Lucentis)** — anti-VEGF Fab for wet age-related macular degeneration, approved 2006. Started as a humanized antibody and was affinity-matured by phage display to picomolar binding. The first effective treatment for the leading cause of blindness in the elderly.

**Belimumab (Benlysta)** — anti-BLyS for systemic lupus erythematosus, approved 2011. Discovered using CAT phage libraries. First new lupus drug in fifty years.

**Necitumumab (Portrazza)** — anti-EGFR for squamous non-small-cell lung cancer, approved 2015. From Dyax's phage display platform.

**Raxibacumab and obiltoxaximab** — anti-anthrax protective antigen antibodies, both phage-derived, for treatment and prophylaxis of inhalation anthrax.

**Ramucirumab (Cyramza)** — anti-VEGFR2 for gastric and lung cancers, approved 2014, with phage display in its discovery lineage.

\[Pause.\]

And the pipeline is full of additional candidates — anti-cytokine antibodies for inflammatory diseases, immune-checkpoint modulators for cancer, antibodies against infectious targets including SARS-CoV-2 spike protein (multiple phage-derived candidates were developed during the pandemic), bispecific antibodies built from phage-derived arms, antibody-drug conjugates whose targeting arms came from phage panning. The cumulative impact on medicine is huge and ongoing.

The interesting historical note is that the early CAT, Dyax, and MorphoSys companies — the first-generation phage display companies — have all been acquired by big pharma. CAT became MedImmune within AstraZeneca. Dyax was acquired by Shire and then Takeda. MorphoSys was acquired by Novartis in 2024. The technology is now embedded in big pharma's antibody discovery groups rather than living in independent specialty companies. That's a sign of technological maturity — phage display is no longer a competitive edge, it's table stakes.

What hasn't changed is the productivity. New phage-derived drugs continue to enter clinical trials every year. The pipeline shows no sign of slowing. As long as the field needs binders to new targets — and the demand for binders is essentially unlimited — phage display will keep producing them.

---

## SEGMENT 18 — Frontier — phage display plus machine learning, the AI-displaced future

So where is phage display going in 2026 and beyond? Two directions are interesting, and they pull in opposite directions.

The first direction is the **integration with machine learning** for de novo binder design. As I mentioned in Segment 16, NGS-quantified panning data is great training data for sequence-to-function models. You pan a library, deep-sequence the output, train an ML model that predicts which sequences will bind, then use the model to design new variants that have never been in any library. Test those in another round of phage display, retrain. This active-learning loop — phage display as the experimental oracle, ML as the design engine — is producing better binders, faster, than either approach alone.

\[Pause.\]

There are now papers showing phage-display-trained ML models that can design picomolar binders against targets in a couple of design-test cycles. The libraries get smarter as the rounds progress. Instead of throwing random variants at the wall, you're throwing ML-proposed variants — variants the model thinks will bind based on what it learned from previous rounds. The hit rate goes up, the affinities go up, the development timelines go down. Phage display, in this picture, is the high-throughput functional assay, and ML is the brain that decides what to test next.

The second direction is more existentially interesting: **AI-driven de novo binder design** that may eventually obsolete phage display entirely. Tools like RFdiffusion, AlphaFold-based design pipelines, and the new generation of binder-design models from the Baker Lab and others can now, in some cases, design binders to novel targets without any library screening at all. You put in the target structure, the AI proposes binders, you express and test maybe a hundred designed variants, and you find hits. No panning. No library. No phage at all.

In 2026, this AI design approach works well for some easy targets — small soluble proteins with well-defined binding pockets — and less well for others. Phage display still dominates for hard targets, for naive discovery against targets without good structures, for complex epitopes, for situations where you need to explore broad diversity. But the AI side is catching up fast. It is plausible that within a decade, AI de novo design will handle the easy two-thirds of binder discovery, and phage display will be reserved for the hardest one-third — the targets the AI can't crack.

\[Pause.\]

But here's the funny thing. Even in a world where AI design becomes dominant, phage display will still be the **validation engine**. AI proposes a hundred designs; you express them and test them; you need a fast, scalable, low-cost way to assay binding. Phage display, with its built-in genotype-phenotype linkage, is already the natural infrastructure for high-throughput testing. The AI may design the libraries instead of random mutagenesis designing them, but the libraries still need to be screened, and phage display screens libraries beautifully.

And there's a parallel future where phage display is used for things AI is bad at — selection in complex environments, in vivo selections in living animals, on-cell panning in disease tissues, selection for activities that depend on subtle dynamics. The intersection of phage display and complex selection environments may keep the technology relevant indefinitely, even as the easy cases shift to in silico design.

Peptide drug discovery in 2026 is another active area where phage display remains central. The peptide drug market — drugs like GLP-1 analogs for diabetes and obesity, peptide hormones for cancer — is growing fast, and the discovery of new peptide ligands still depends heavily on phage and ribosome display. AI is starting to help here too, but the libraries remain the workhorse.

So the picture is: phage display has been one of the foundational protein-engineering technologies of the last forty years. It produced the most successful drug ever marketed. It transformed antibody discovery. It won a Nobel Prize. And it continues to evolve, hybridizing with NGS and ML, surviving the rise of AI design by becoming the testing infrastructure for AI designs. It is, in 2026, both a mature technology and an actively reinventing one. The principle — link genotype to phenotype on a particle, pan a library against a target, recover the survivors — is as fresh as it was in 1985. Only the libraries, the targets, and the downstream sequencing have changed.

If you remember nothing else from this lecture, remember that. **Phage display is darts on a board, with each dart carrying its own recipe.** Throw billions, keep the stickers, sequence the survivors. Iterate. That's the core of it. The rest is engineering.

---

## APPENDIX

**A few terms and references for the curious, with annotations.**

\[Pause.\]

**Smith, G.P. (1985).** "Filamentous fusion phage: novel expression vectors that display cloned antigens on the virion surface." _Science_ 228: 1315-1317. The founding paper. Five pages, single author, no buzz at the time, Nobel Prize 33 years later.

**McCafferty, J., Griffiths, A.D., Winter, G., Chiswell, D.J. (1990).** "Phage antibodies: filamentous phage displaying antibody variable domains." _Nature_ 348: 552-554. The first antibody phage display paper from Winter's group. The beginning of CAT.

**The 2018 Nobel Prize in Chemistry citation.** Awarded jointly: half to Frances Arnold for the directed evolution of enzymes, the other half divided between George Smith and Greg Winter for the phage display of peptides and antibodies. The official Nobel lectures are available online and are accessible to undergraduates.

**Adalimumab (Humira).** Brand name for adalimumab, the anti-TNF-alpha monoclonal antibody developed by CAT and BASF/Abbott. Approved 2002. Peak global sales: over $20 billion per year in 2018-2019. Off-patent since 2023 in the US.

**M13 bacteriophage.** Filamentous phage of _E. coli_, 6.4 kb single-stranded DNA genome, 11 encoded proteins, non-lytic chronic infection, particles assembled by extrusion through the bacterial membrane. The chassis for essentially all phage display.

**pIII coat protein.** Minor coat protein at one tip of M13, 3-5 copies per particle, the standard display surface in phage display. N-terminal domain binds the F pilus during infection; foreign peptides are typically fused at the very N-terminus.

**Phagemid.** Plasmid with M13 packaging signal, used to provide the displayed-protein gene; superinfected with helper phage to provide structural backbone for packaging. The standard modern phage display vector.

**Panning.** The selection workflow: coat target on plate, add library, wash, elute, amplify, repeat. Three to five rounds typical.

**Affinity maturation.** Post-discovery improvement of binding affinity by iterated mutation and selection. In phage display, chain shuffling, CDR walking, and error-prone PCR are the main mutagenesis tools.

**HuCAL.** Human Combinatorial Antibody Library, MorphoSys, the canonical fully-synthetic phage display antibody library. Tenth-billion variants on engineered scaffolds.

**Yeast display.** Alternative display platform using _S. cerevisiae_ and the Aga2p anchor. Developed by K. Dane Wittrup. Smaller libraries than phage but FACS-sortable for quantitative affinity.

**Ribosome display.** Cell-free display platform; stalled ribosomes hold mRNA-protein complexes for selection. Library sizes up to 10^12.

**mRNA display.** Cell-free display platform; puromycin links peptide to its own mRNA. Library sizes up to 10^14. Developed by Roberts and Szostak.

**DARPin, Affibody, Monobody, Adnectin, Anticalin, Affimer.** Non-antibody scaffolds amenable to phage display. Each derived from a different small protein fold.

\[Pause.\]

**Suggested reading.** For history and human stories: Greg Winter's Nobel lecture, available on the nobelprize.org site, is the best single short read on the antibody phage display story. For technical depth: Hoogenboom's reviews of phage display (multiple, through the 2000s) remain the technical gold standard. For the modern NGS+ML integration: recent papers from the Tessier lab and the Marks lab on deep mutational scanning of phage-displayed antibody libraries are good entry points to the current state of the art.

And one last reminder. The technology is forty years old. The Nobel was given seven years ago. Phage display is, in protein engineering, the old reliable — the workhorse you build new ideas around, not the new shiny thing. But every new shiny thing in binder discovery still ends up using phage display for some critical step. That's what foundational means. That's what got it the Nobel. That's why we spent two hours on it.

\[Pause.\]

Thank you. Questions.
