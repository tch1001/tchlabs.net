# Prime Editing: Find-and-Replace That Goes Beyond One Letter

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool. This lecture assumes you've already heard the CRISPR lecture and the base editing lecture — we won't re-derive Cas9, sgRNAs, or how a deaminase swaps a C for a T. We're building on top of those.

---

## SEGMENT 1 — From base editing to prime editing: why we needed something more

Alright, let's get started. Good morning, everyone. Today we're going to talk about prime editing — the genome editor that the David Liu lab unveiled in October of 2019, and which I think is, technically, the most beautiful piece of molecular engineering of the entire CRISPR era. Buckle in. This one is dense.

Let me start the way I always start, with the single sentence I want you to walk out of here with. Then I'll spend two hours unpacking it.

**Prime editing is find-and-replace for the genome — but find-and-replace that can change a whole word at once, not just one letter, and that does it without ever breaking the double helix all the way through.**

That's it. That's the whole thing.

If you walk out of here in two hours, I want you to be able to do three things. One — explain in plain English what prime editing can do that base editing can't, and why that matters. Two — sketch the prime editor on the board: a Cas9 nickase fused to a reverse transcriptase, programmed by an extended guide RNA called a pegRNA, and walk a confused friend through the editing cycle step by step. Three — look at any frontier of the prime editing literature — PE3, PE5, PEmax, twinPE, PASTE, the Prime Medicine clinical trials — and tell me what's been changed and why. Everything else we cover today is decoration on those three.

\[Pause.\]

Let me ground us first. In the base editing lecture, we built a tool that could chemically convert one DNA letter into another, in place, without cutting the helix. The cytosine base editor, CBE, can swap a C for a T. The adenine base editor, ABE, can swap an A for a G. Together they can do C-to-T and A-to-G, plus their complements on the opposite strand, which gives you G-to-A and T-to-C. That's four of the twelve possible base-to-base swaps. Four out of twelve. Roughly a third.

Now ask yourself the question that David Liu and his group asked themselves around 2017, after base editing was working and they'd had a moment to look at it. What about the other eight swaps? What about C-to-A, C-to-G, A-to-C, A-to-T, T-to-A, T-to-G, G-to-C, G-to-T? Those eight swaps — the so-called transversions, where a purine becomes a pyrimidine or vice versa — are inaccessible to base editing, because no enzyme on Earth deaminates a base in a way that gives you those products. The chemistry doesn't exist in nature.

And it's not just the eight missing transversions. Base editing also can't do **insertions**. It can't do **deletions**. It can't do **multi-base substitutions** where you want to change, say, three letters at once. It can disable a single bad letter in a disease gene. It cannot install a new short peptide tag. It cannot fix an out-of-frame deletion. It cannot replace a five-letter motif with a different five-letter motif.

\[Pause. Let it land.\]

Here is the analogy I want you to carry. **Base editing is four cars sitting in a parking lot. Prime editing is the whole motor pool.** Base editing can do four of the twelve single-letter swaps — and that's it. Prime editing can do all twelve single-letter swaps, plus small insertions of up to forty or fifty nucleotides, plus small deletions, plus combinations of all of the above in a single edit at a single site. And crucially, like base editing, it does this **without making a double-strand break in the DNA**. The helix stays mostly intact. The cellular repair system doesn't see a chromosome severed in two — it sees a small lesion on one strand, which is the kind of thing the cell routinely fixes without making a mess.

Or here's another analogy. Cas9 by itself is a sledgehammer. It makes a clean, blunt, two-strand break, and then it walks away and prays that the cell's repair machinery does something useful — which, as we discussed in the CRISPR lecture, it often doesn't. Indels show up. The reading frame shifts. You get knockouts more reliably than you get edits. Base editing is more like a hand drill. Precise, doesn't break the wall, can punch one small hole exactly where you want it — but only one specific kind of hole, in one specific kind of material. Prime editing is more like a screwdriver. Slower than the sledgehammer. Smaller scale of action. But it can do a much wider range of jobs, and it does them without any collateral damage to the surrounding structure.

\[Pause.\]

Here's a useful number. About 90% of the pathogenic mutations in the human gene catalog ClinVar are small substitutions, small insertions, or small deletions — and base editing, in principle, can address roughly thirty percent of those. Prime editing, in principle, can address something like ninety percent of them. The fraction of the human disease landscape that is theoretically addressable jumps by a factor of three when you move from base editing to prime editing. That is why this tool matters.

So here's what we're going to do over the next two hours. We're going to start by understanding what prime editing solves — the universe of edits that base editing left on the table. Then we'll open up the prime editor itself: the Cas9 nickase, the reverse transcriptase, the extended guide RNA called a pegRNA. We'll walk through the editing cycle step by step, slowly, because it's a beautiful little molecular dance and you need to see every move. Then we'll go through the generations of the tool — PE1, PE2, PE3, PE3b, PE4, PE5, PEmax — and at each step we'll ask what got better and why. Then we'll get to the frontier — twinPE for larger payloads, PASTE for kilobase insertions using integrases, prime editing in animals and crops, and the first clinical trials. And we'll close with the limitations, the design tools, and the open problems.

Let's begin.

---

## SEGMENT 2 — What base editing couldn't do, and the universe of edits prime editing opens up

Let me spend a little more time on the gap, because the gap is the reason prime editing exists.

Recall how base editing works. A catalytically dead Cas9, or a Cas9 nickase, is fused to a base-modifying enzyme — a cytidine deaminase for CBE, or an evolved adenosine deaminase for ABE. The whole assembly is targeted to a stretch of DNA by an ordinary sgRNA. When it gets there, Cas9 splits the double helix into an R-loop. The non-target strand is now single-stranded and bulged out — and within a small window on that bulged-out strand, the deaminase enzyme attacks the exposed bases. Cs become Us. Adenines become inosines. The cell, when it copies that strand, reads the U as a T, and the I as a G. The edit is installed.

That mechanism gives you exquisite control in one specific scenario: a C-to-T edit or an A-to-G edit at a single site, with no double-strand break. It is, for that one job, almost ideal.

But notice everything that mechanism cannot do.

It cannot install an **insertion**. There is no deaminase that adds a base. Chemistry simply doesn't allow it.

It cannot install a **deletion**. There is no deaminase that removes a base.

It cannot do a **transversion**. Cytosine deaminated becomes uracil — that's a pyrimidine becoming a pyrimidine. Adenine deaminated becomes inosine — that's a purine becoming something the cell reads as a purine. Neither flips the type. The eight transversions — C-to-A, C-to-G, A-to-C, A-to-T, T-to-A, T-to-G, G-to-C, G-to-T — are mechanistically off-limits.

It cannot install a **multi-base substitution**. If you have three letters wrong in a row and you want to fix all three to something specific, base editing will not do that as a single coherent edit. You can sometimes target adjacent bases within the editing window, but you're picking up uncontrolled bystander edits as a side effect, and the chance that you get exactly the three letters you want is low.

It cannot do **combinations**. You can't, with base editing, install a one-letter substitution and a two-letter insertion at the same site in a single coordinated event.

\[Pause.\]

Now let me show you why those gaps matter clinically.

Sickle cell disease, which we've talked about, is caused by an A-to-T transversion. The wild-type sequence has a GAG codon at position six of the beta-globin gene, coding for glutamic acid. The disease version has a GTG codon, coding for valine. To fix sickle cell at the source — to turn the disease allele back into the healthy allele — you need a T-to-A transversion. A transversion. Base editing can't do that. Prime editing can.

Cystic fibrosis has dozens of disease-causing mutations in the CFTR gene. The most common one, F508del, is a three-base-pair deletion that removes a phenylalanine codon. To fix it, you need to insert three bases back. Base editing can't insert. Prime editing can.

Tay-Sachs disease, in its most common form, is caused by a four-base-pair insertion in the HEXA gene that throws the reading frame off. To fix it, you need to delete four bases. Base editing can't delete. Prime editing can.

And then there are the diseases where the pathogenic change is a substitution that base editing could in principle do — but where bystander editing is unacceptable, where you'd be modifying surrounding bases that need to stay exactly where they are. Prime editing operates on a completely different mechanism and doesn't have the same bystander problem, which I'll explain in detail later.

\[Pause.\]

So the gap is huge. Roughly two-thirds of single-base swaps are off-limits to base editing. All insertions and deletions are off-limits to base editing. Multi-base substitutions are essentially off-limits. Combinations are off-limits. The only way to address those — without making a double-strand break and relying on HDR, which we already discussed doesn't work in most cells — is to invent a completely different chemistry. A mechanism that doesn't rely on a base-modifying enzyme. A mechanism that can write arbitrary new sequence into the genome, in place, with no cut all the way through.

That's the problem David Liu's lab took on. And the elegant solution they arrived at was — and this is the moment that makes the whole thing click — **don't try to chemically modify the existing bases. Instead, write the new sequence using a reverse transcriptase, with a template that the user designs and provides as part of the guide RNA itself.**

That's prime editing in one sentence. Reverse transcribe new DNA into the genome, from a template that rides along on the guide RNA. We'll spend most of the rest of this lecture unpacking what that means.

---

## SEGMENT 3 — The architecture: Cas9 nickase plus reverse transcriptase plus pegRNA

Let me sketch the prime editor itself. There are three components, and you need all three together.

**Component one** is a **Cas9 nickase**. Specifically, the version of Cas9 carrying a mutation called H840A. We met this nickase briefly in the base editing lecture. Let me remind you what it does. Recall that wild-type Cas9 has two nuclease domains — HNH and RuvC — and each cuts one strand of the DNA. HNH cuts the target strand, the one that base-pairs with the guide RNA. RuvC cuts the non-target strand, the one that's displaced into the single-stranded loop. Together they make a double-strand break.

If you kill HNH with the H840A mutation, you have a Cas9 that only cuts one strand — the non-target strand, via the still-active RuvC. This is called the H840A nickase, and the strand it cuts is the strand that's _not_ paired with the guide RNA. The other strand — the one that is paired with the guide — stays intact. So when this nickase finds its target, it makes a single-stranded nick, not a double-strand break, and the cell's repair machinery treats that very differently. Single-strand nicks are common, easy to fix, and don't trigger the same emergency response as a double-strand break.

The Liu lab used the H840A nickase, not the D10A nickase. The choice matters. We'll come back to why.

**Component two** is a **reverse transcriptase** — usually abbreviated RT. A reverse transcriptase is an enzyme that does the opposite of normal transcription. Normal transcription reads DNA and writes RNA. Reverse transcription reads RNA and writes DNA. Reverse transcriptases are best known from retroviruses — HIV, for example, uses a reverse transcriptase to copy its RNA genome into DNA after it infects a cell. The reverse transcriptase that the Liu lab landed on is from a different retrovirus called Moloney Murine Leukemia Virus, or M-MLV. The wild-type M-MLV RT was the starting point. They then engineered it heavily — we'll see how — for stability, activity, and fidelity in the prime editing context.

The RT is fused to the C-terminus of the Cas9 nickase. So the prime editing protein is a single polypeptide: Cas9-H840A nickase at the front, M-MLV-derived reverse transcriptase at the back, joined by a flexible linker. One protein. Two enzymatic activities. Both targeted to the same place by the third component, which is —

**Component three**, the **pegRNA** — the **p**rime **e**diting **g**uide **RNA**. This is the most clever piece of the whole system. The pegRNA is not an ordinary sgRNA. It's an extended sgRNA. At its 5' end, it has the standard spacer sequence — the twenty letters that base-pair with the genomic target, just like in regular CRISPR. Then it has the standard scaffold — the part that folds up and grips the Cas9 protein. Then, instead of ending there the way a normal sgRNA does, it continues at the 3' end with two extra functional elements.

The first of those extra elements, immediately after the scaffold, is the **RT template**. This is a short stretch of RNA — typically ten to twenty nucleotides — that encodes the new sequence you want to write into the genome. The RT will read this RNA template and synthesize DNA from it. So the edit is literally encoded in the guide RNA. You design the pegRNA, the cell makes the edit, and the new DNA sequence is whatever you wrote in the RT template region.

The second extra element, at the very 3' end of the pegRNA, is the **primer binding site**, or PBS. The PBS is a very short stretch — usually about eight to fifteen nucleotides — whose sequence is complementary to the genomic sequence just upstream of the nick site, on the strand that gets nicked. When the nickase cuts that strand, the 3' end of the cut DNA is free, single-stranded, and exposed. The PBS region of the pegRNA then base-pairs with that exposed 3' end — like a primer annealing to a template — and the RT extends from there, copying the RT template region of the pegRNA into new DNA.

\[Pause.\]

So the pegRNA is a guide and a tape measure and a writing template, all rolled into one piece of RNA. The guide says: here's where to go. The PBS says: here's where to start writing. The RT template says: here's what to write. One piece of RNA encodes all three.

Here's the analogy. **The GPS finds the spot. The nickase makes a small cut. The reverse transcriptase writes the new sequence from a template embedded in the guide RNA itself.** The pegRNA carries the GPS coordinates and the new text both. It's a guide and a script in one molecule.

Or think of it like this. A standard sgRNA tells Cas9 where to go and what to recognize. A pegRNA tells the prime editor where to go, where to start writing once the nick is made, and what new letters to write. The recipe is in the guide. The guide is the program. That is what makes prime editing so flexible — to change the edit, you change the RNA. The protein stays exactly the same.

This is the same logic that made base CRISPR programmable in the first place — encoding all the variable information in a cheap, swappable piece of RNA. But now the RNA carries not just an address, but also a payload. The pegRNA is the most information-dense engineered piece of RNA in the entire CRISPR toolkit.

---

## SEGMENT 4 — The editing cycle in detail: nick, prime, extend, flap, repair

Now let me walk you through what actually happens when a prime editor docks onto its target. Slowly. Step by step. Because there are a lot of moving parts and the geometry matters.

\[Pause.\]

**Step one.** The prime editor — Cas9 nickase with the RT fused on, loaded with the pegRNA — scans the genome looking for a PAM next to a sequence matching the pegRNA spacer. Just like ordinary Cas9. It hops along the DNA, checking for the three-letter NGG password, and at each candidate site it tries to form an R-loop with its guide. If the seed matches, the R-loop locks in. Same biology as any Cas9. No surprises yet.

**Step two.** Now the Cas9 nickase activates its RuvC domain — the one cutting domain that hasn't been killed by the H840A mutation — and it cuts the **non-target strand**. That's the strand displaced into the single-stranded loop. The cut happens three bases upstream of the PAM, just like a regular Cas9 cut would, but only on one strand. The target strand — the one paired with the pegRNA — stays intact. So we now have a structure where the helix is mostly intact, the guide RNA is base-paired to the target strand, and the non-target strand has a single-stranded nick.

\[Pause.\]

**Step three.** The cut creates a free 3' hydroxyl on the non-target strand — a 3'-OH, the chemical handle that DNA polymerases use to add new bases. This freed 3' end is the key. Until it's freed, none of the downstream chemistry can happen. The nick is what unlocks everything.

Now here's the trick. The pegRNA has been waiting for exactly this moment. Its 3' end — the primer binding site — has a sequence complementary to the freed 3' end of the nicked DNA. As soon as the 3' OH is liberated, the PBS folds around and base-pairs with it. The genomic DNA, the part just upstream of the nick, anneals to the PBS portion of the pegRNA. You have just built, in place, a tiny primer-template complex — where the genomic DNA is the primer and the pegRNA is the template.

**Step four.** The reverse transcriptase, which is right there, tethered to the Cas9 nickase by the linker, now goes to work. It binds the primer-template complex. It extends the 3' end of the genomic DNA by reading along the RT template region of the pegRNA, synthesizing new DNA one nucleotide at a time. It walks up the pegRNA in the 5' direction, copying the RNA template into a complementary strand of DNA. The DNA it synthesizes contains the edit. Whatever you wrote in the RT template — a single-base change, a five-base insertion, a transversion, a small deletion encoded by skipping bases — that's what gets written into the new DNA.

\[Pause.\]

Let me say that more slowly, because it's the heart of the whole mechanism. **The new DNA strand is synthesized by the reverse transcriptase, from a template encoded in the pegRNA, primed by the 3' end of the freshly nicked genomic strand.** The new DNA is now attached to the genome — covalently, by the original phosphodiester backbone — at its 5' end. It dangles out into space at its 3' end, like a flap.

The reverse transcriptase eventually disengages. The pegRNA peels off. What's left behind is a piece of DNA where the non-target strand has been cut, and from that cut, a new flap of DNA — the freshly synthesized "edit-containing" DNA — sticks out.

**Step five.** Now you have what's called a **flap equilibrium**. The 5' end of the original non-target strand — the end that was cut and is now sitting upstream of the nick — is the **5' flap**, the old sequence. The newly synthesized DNA, dangling from the upstream end of the cut, is the **3' flap**, the new sequence. These two flaps are competing to occupy the same position in the helix. Both could, in principle, base-pair with the target strand. Only one wins.

Whichever flap loses gets clipped off by cellular flap endonucleases — enzymes like FEN1, which is the cell's normal flap-cleaving machinery for DNA replication and repair. The flap that wins gets ligated back into the backbone, and now that strand of the helix carries either the original sequence (if the old flap won) or the edited sequence (if the new flap won).

\[Pause.\]

The equilibrium isn't fifty-fifty by accident. The newly synthesized 3' flap, the one carrying the edit, is designed to match the target sequence almost perfectly except for the few edited bases. So the new flap base-pairs with the target strand with only a small mismatch at the edit position. The old 5' flap base-pairs perfectly. So naively, the old flap wins more often, and the edit doesn't install. This is one reason that prime editing efficiency, even in the best designs, is much less than one hundred percent — there's a thermodynamic and kinetic competition at the flap equilibrium step, and the deck is slightly stacked against the edited strand.

**Step six.** Assume the new flap wins — the edited sequence is now incorporated into the non-target strand. The cell now has a small mismatch on the helix: the target strand still has the original sequence, but the non-target strand has the edited sequence. The cell's mismatch repair machinery sees this mismatch, picks one of the two strands as the "correct" template, and copies that strand's sequence to fix the mismatch.

If the cell picks the edited strand as the template — it copies the edit onto the target strand, and now both strands of the helix carry the new sequence. The edit is permanent. Done.

If the cell picks the original strand as the template — it overwrites the edit, copying the original sequence back onto the non-target strand, and the edit is lost.

So the second major hurdle is which strand the mismatch repair machinery decides to use as the template. By default, the cell tends to use the original, unnicked strand — because in normal mismatch repair, the unnicked strand is treated as the "parental" template and the nicked strand is treated as the "daughter" copy that needs to be corrected. This is biology that prime editing has to work against. The cell's bias is, unfortunately, exactly the wrong direction for the editor.

\[Pause. Let it land.\]

So to summarize the editing cycle: scan for the target, nick the non-target strand, anneal the pegRNA's PBS to the freed 3' end, reverse-transcribe the edit-containing DNA from the pegRNA template, resolve the flap equilibrium so the new flap wins, then survive mismatch repair so the edit is propagated to both strands. Each of those steps is a place where the edit can fail. The total efficiency is the product of the efficiencies at each step. Prime editing is hard precisely because it's a long chain of dependent steps, each one imperfect.

But — and this is the key — when it works, **it leaves no double-strand break, no indels, no bystander edits at unrelated bases, no cargo from a separate donor template**. The edit is precise, programmable, and limited only by what you wrote into the RT template of the pegRNA. That precision is what makes the inefficiency tolerable. We'll see how the field has spent the past several years improving each one of those efficiency-limiting steps.

---

## SEGMENT 5 — PE1, PE2, PE3, PE3b: how the original paper laid out a progression of improvements

The 2019 paper from the Liu lab is titled "Search-and-replace genome editing without double-strand breaks or donor DNA." Lead author **Andrew Anzalone**. Senior author **David Liu**. Published in _Nature_ in October 2019. It is, in my opinion, the single best CRISPR engineering paper of the post-Cas9 era, and you should read it if you have any interest at all in this field. Beautiful experiments, beautifully presented.

Now what I love about this paper is that it doesn't just announce a tool. It announces a progression — a sequence of versions, each one solving a specific weakness of the previous one. Walking through that progression teaches you, in one paper, almost every principle of prime editing engineering. Let me take you through it.

\[Pause.\]

**PE1.** The first version of the prime editor. PE1 is the Cas9-H840A nickase fused to the **wild-type M-MLV reverse transcriptase**. Nothing fancy. Just the unmodified retroviral RT, tethered to a Cas9 nickase, driven by an ordinary mammalian expression promoter, delivered as a plasmid into human cells along with a pegRNA targeting a chosen site.

PE1 worked. That's the punchline. In human HEK293 cells, the Liu lab showed PE1 installing all twelve possible single-base substitutions at chosen sites, plus small insertions and deletions. The first time anybody had demonstrated transversions or indels by a CRISPR-based system without making a double-strand break. The paper could have stopped there and it would have been a hit.

But PE1 was slow. Editing efficiencies hovered in the very low single-digit percent range. One or two percent of cells, often less, actually had the desired edit. Not good enough for serious use. The Liu group started engineering.

**PE2.** The Liu group then took the M-MLV RT and engineered it for better activity in the prime editing context. They introduced five mutations into the RT — changes designed to increase its **thermostability**, its **processivity**, and its **fidelity**. The mutations are D200N, T306K, W313F, T330P, and L603W, for those of you who like specifics. The wild-type M-MLV RT evolved to work inside a retrovirus particle, at modest temperature, on long stretches of viral RNA. Inside a human cell nucleus, at 37 degrees, fused to a 1400-amino-acid Cas9, working on a short template — that's a very different operating environment. The five mutations adapt the enzyme to this new context.

PE2, the Cas9-H840A nickase fused to the engineered M-MLV RT, gave editing efficiencies typically two to ten times higher than PE1, depending on the site. Now you're seeing 5-15% editing across many sites. Better. Still not great. The bottleneck was no longer the RT activity — it was downstream. It was the mismatch repair step.

\[Pause.\]

**PE3.** This is where the design gets clever. Remember the mismatch repair problem? The cell, after the edit is installed on the non-target strand, sees a mismatch and uses the unnicked strand as the template, often overwriting the edit. The unnicked strand is the original sequence. So the cell's natural repair bias is against the edit.

The Liu lab's solution: **also nick the other strand**. Make a second nick, on the target strand — the one that until now had been intact — using a separate, ordinary sgRNA. This separate sgRNA is delivered along with the pegRNA, and it instructs the same Cas9 nickase to nick the target strand at a nearby position. Now both strands have a nick. The mismatch repair machinery has to choose a template — and it now has reasons to choose either strand. The bias against the edit is removed.

In practice, with PE3, the editing efficiency jumps another two to four times relative to PE2. You're now seeing 20-50% editing efficiencies at many sites in cultured human cells. That's getting into territory where you could imagine clinical use.

The analogy I always use: **by also nicking the other strand, you bias the cell's repair toward keeping your new sequence.** The cell, when both strands have nicks, can no longer tell which one is the "parental" template. Without that bias, the new strand has a fair shot at being kept.

**PE3b.** A variant of PE3. The problem with PE3 is that the additional nick on the target strand is made at the same time as the original nick — so for a window of time, the cell has a double-stranded break. That's not great. Double-strand breaks are exactly what we were trying to avoid. So in PE3b, the additional nicking guide is designed so that it only nicks the target strand **after** the edit has been installed — specifically, the additional guide is designed to match the edited sequence, not the original sequence. So Cas9 can't form an R-loop and nick until the edit has been written into the new strand. This timing — first install the edit, then nick the other strand to bias the repair — minimizes the window of time during which the cell has nicks on both strands.

PE3b is harder to design than PE3. You need a site where the edited sequence creates a new sgRNA target while leaving the original sequence un-targeted. Not every site allows it. But where it works, PE3b gives editing efficiencies comparable to PE3 with much lower indel byproducts, because the moment of double-strand break is much shorter.

\[Pause.\]

That's the progression from the original paper. PE1: the prototype. PE2: better RT. PE3: opposite-strand nick to break the mismatch repair bias. PE3b: timed opposite-strand nick to minimize the double-strand-break window. Each step gets you closer to a tool that's both efficient and clean.

Notice that the protein is the same in PE1, PE2, PE3, and PE3b — except for the RT changes between PE1 and PE2. PE3 and PE3b differ from PE2 only by the addition of a second guide RNA. The protein is held constant. The guides do almost all the engineering work. This is the same principle we keep seeing in CRISPR: keep the protein simple, let the guide RNA carry the variability.

---

## SEGMENT 6 — PE4, PE5, PEmax: engineered RT and Cas9 variants for higher efficiency

The 2019 paper laid the foundation. The next several years of work, mostly from the Liu lab and a few collaborators, pushed efficiency much further.

\[Pause.\]

**PE4 and PE5.** In a 2021 paper, the Liu group identified another bottleneck: **the cell's mismatch repair machinery itself**. We've already noted that mismatch repair sometimes overwrites the edit. What if you could partially suppress mismatch repair, just temporarily, just during the editing window?

The solution they landed on was to co-express a dominant-negative form of **MLH1**, a key protein in the mismatch repair pathway. MLH1 dn — the dominant-negative variant — acts as a poison pill in the mismatch repair complex. It assembles with the rest of the complex but stops it from functioning. So in cells where you transiently express MLH1 dn alongside the prime editor and pegRNA, the cell's mismatch repair machinery is briefly inhibited, the edited strand is much less likely to be overwritten, and editing efficiency goes up.

**PE4** is PE2 plus MLH1 dn. **PE5** is PE3 plus MLH1 dn — so it's the dual-nick version with mismatch repair inhibition. PE5 typically gives editing efficiencies twice to three times higher than PE3 at the same sites. In some sites, you start to see editing rates north of 70% in cultured cells. That's a serious tool.

\[Pause.\]

You might worry: doesn't suppressing mismatch repair cause genome-wide mutations? Mismatch repair is one of the cell's main defenses against accumulating random mutations during DNA replication. If you suppress it, won't the cell accumulate damage?

This is a real concern. In practice, the Liu group showed that the suppression is transient — MLH1 dn is delivered alongside the prime editor and pegRNA, and once those expression vectors are diluted out, mismatch repair returns to normal. The window of suppression is hours to a few days. In that window, the cell does have a slightly elevated mutation rate at unrelated sites — measurable, but small. For research use, this is fine. For clinical use, it's a tradeoff that has to be weighed.

**PEmax.** Also from a 2021 paper. PEmax is a re-engineered prime editor protein that incorporates a stack of further improvements: an improved Cas9 nickase with better expression and nuclear localization, an additional NLS for better nuclear import, codon optimization throughout the entire protein, and a redesigned linker between the Cas9 and the RT. The protein-level improvements add up to a roughly two-fold further efficiency boost on top of PE2/PE4 in most contexts.

You can combine PEmax with the dual-nick strategy (giving PEmax-PE3) and with MLH1 dn co-expression (giving PEmax-PE5). The current state-of-the-art prime editor in cultured cells, as of about 2024, is PEmax with PE5-style mismatch repair suppression and an optimized pegRNA — which we'll get to in a moment. With that whole package, you can routinely see editing efficiencies of 50-90% at well-designed sites in cultured human cells.

\[Pause.\]

There's one more piece of protein engineering I should mention: **engineered pegRNAs**. The pegRNA itself, as originally designed, is somewhat unstable in cells. Its 3' end — the RT template plus PBS — is exposed and is rapidly degraded by cellular exonucleases. So the lifetime of a pegRNA in the cell is short, and only a small fraction of pegRNAs make it to the prime editor still intact.

The Liu lab and others have engineered the pegRNA itself to be more stable. The most influential design is the **engineered pegRNA**, or **epegRNA**, which adds a structured RNA element — typically a tevopreQ1 pseudoknot or an mpknot — to the 3' end of the pegRNA, downstream of the PBS. This pseudoknot is a small folded RNA structure that resists exonuclease attack. The pegRNA, with this structured 3' addition, is much more stable in cells. Editing efficiencies typically go up another two-fold or so with an epegRNA over an unmodified pegRNA.

So the stack of improvements is impressive. From PE1 in 2019 — single-digit-percent editing — to PEmax-PE5 with epegRNAs in 2024 — sometimes 90% editing. Three orders of magnitude of improvement in five years, just by careful, iterative engineering of each component of the system. The protein got better. The RT got better. The guides got better. The strategy of using the cell's repair machinery got cleverer. None of these individual improvements were revolutionary, but stacked together, they turned a proof-of-concept into a serious tool.

---

## SEGMENT 7 — twinPE: paired pegRNAs for larger insertions and deletions

Up through PE5, the size limit of prime editing has been pretty modest. Insertions and deletions of up to about 50 base pairs work reasonably well. Beyond that, the RT can't process the longer template efficiently, the flap equilibrium gets messier, and the editing efficiency drops to nearly zero. For a lot of applications — installing a single point mutation, fixing a small indel disease allele, adding a short tag — 50 base pairs is plenty. But if you want to install a whole reporter gene, a whole therapeutic transgene, or even a moderate-sized exon, you need more.

The first answer the field developed for this size problem is called **twinPE**, published by the Liu lab in 2022.

\[Pause.\]

Here's the idea. Instead of using one pegRNA, use two — targeting opposite strands, flanking the region you want to modify. The two pegRNAs each install their own edit on their own strand. The two newly synthesized 3' flaps are designed so that they're complementary to each other at their tips. After both edits are written, the two new flaps anneal to each other in the middle, displacing both of the original strands. The cell repairs around the new joined strands. The result: the region between the two cut sites is effectively replaced with the sequence encoded by the two pegRNA RT templates.

So with twinPE you can do larger, more dramatic edits — replacing a 100-base-pair region with a different 100-base-pair sequence, deleting a 1-kilobase region cleanly, inserting a few-hundred-base-pair sequence. You're not limited to the 50-base-pair window of a single pegRNA, because the writing is split across two pegRNAs operating on opposite strands.

The mechanism is a bit harder to design — you need both pegRNAs to be efficient, you need their RT templates to terminate in complementary sequences, and you need the two flap-annealing geometries to work out. But when it does work, twinPE opens up edit sizes that were previously inaccessible. Several-hundred-base-pair deletions, several-hundred-base-pair insertions, large multi-base substitutions, all in a single editing reaction.

The key analogy: **with one pegRNA, you're trying to write one short message on one strand. With two pegRNAs on opposite strands, you can rewrite a whole region by writing on both strands at once and letting the two new strands find each other in the middle.**

twinPE is still limited to a few hundred bases of new sequence. The RT can only process so much pegRNA template, and the flap-annealing geometry can only work for so far. For really large insertions — full-gene insertions, kilobase-scale cargo — you need something more. That something more is the next big advance.

---

## SEGMENT 8 — PASTE: prime editing meets serine integrases for kilobase insertions

PASTE — **P**rime-editing **A**ssisted **S**ite-specific **T**argeted **E**ndogenous integration — was published by **Omar Abudayyeh** and **Jonathan Gootenberg**'s group at MIT in 2022 and refined by the Liu lab and others since then. PASTE is the most ambitious extension of prime editing so far, and it's the answer to the question: how do you put a whole gene into a specific spot in the genome, without using HDR, without making a double-strand break, and without random integration?

\[Pause.\]

Here's the trick, which I find genuinely brilliant once you see it. The Liu group's twinPE could install a few hundred bases of new sequence. What if you used prime editing — twinPE, specifically — not to install your therapeutic gene itself, but to install a **landing pad** — a short sequence that a completely different enzyme can recognize and use to dock a much larger payload onto?

Such enzymes exist. They're called **serine integrases**, and they come from bacteriophages. A serine integrase recognizes a specific short DNA sequence — called an **attB** site — and a corresponding short sequence on a separate piece of DNA — called **attP** — and it catalyzes a site-specific recombination event between them. The end result is that whatever is on the donor DNA gets stitched into the genome at the attB site. Bacteriophages use this naturally to integrate their entire genomes into bacterial chromosomes after infection.

The integrase doesn't care what's on the donor DNA. It only cares about the attP recognition sequence. So if you can get an attB sequence — typically about 40 base pairs — installed at a specific spot in the genome, and you can deliver a separate DNA molecule carrying an attP site plus your payload of interest, then the integrase will dock the payload onto the genome at the attB site. The payload can be enormous — kilobases, tens of kilobases, in principle a whole therapeutic gene.

PASTE puts these two pieces together. **Use prime editing to install the attB landing pad. Use the integrase plus a donor DNA to install the payload.**

The whole assembly is delivered as a single set of components: a prime editor (Cas9 nickase + RT), a pegRNA encoding the attB landing pad at the chosen genomic site, the serine integrase enzyme, and a donor DNA molecule carrying the attP site plus the payload. Inside the cell, in sequence, the prime editor writes the landing pad, then the integrase docks the payload, then everything ligates up. You've installed kilobases of new DNA at a precisely chosen genomic site, with no double-strand break.

\[Pause.\]

The analogy: **prime editing builds a landing pad, then a separate integrase enzyme docks a payload onto it.** Prime editing on its own can install up to a few hundred bases. PASTE extends that to kilobases by handing the heavy-lifting integration job to an evolved enzyme that's optimized for that exact task. Each enzyme does what it's best at — prime editing handles precision targeting and small modifications, integrase handles large payload delivery.

PASTE in its first published version installed payloads up to about 36 kilobases at chosen sites in human cells, with efficiencies in the low double digits in cultured cells. That is — and I want you to feel this — the equivalent of replacing the entire dystrophin gene with a corrected version at its native chromosomal location. We are now talking about a delivery system for full-length therapeutic transgenes that doesn't rely on viral random integration, doesn't make a double-strand break, and targets a chosen site. This is enormous.

The Liu lab and Prime Medicine and others have continued to refine PASTE since 2022. Different integrases have been swapped in — different ones work better at different sites, have different specificities, have different payload size preferences. The pegRNA designs have been optimized. The donor DNA designs have been optimized. As of 2024, PASTE is one of the most promising approaches to genuinely site-specific large-payload genome integration in human cells.

---

## SEGMENT 9 — Prime editing in the clinic: Prime Medicine and the CGD trial

Let me bring this all the way down to the bedside. Because prime editing isn't an academic curiosity any longer — it's in patients.

\[Pause.\]

In 2019, David Liu and a group of co-founders launched a company called **Prime Medicine**, headquartered in Cambridge, Massachusetts. The mission, stated bluntly: turn prime editing into therapies for genetic diseases. Prime Medicine has built out a pipeline of programs over the past several years, targeting various diseases, in various tissues, with various delivery modalities — lipid nanoparticles for liver, ex vivo editing of hematopoietic stem cells for blood disorders, AAV for some tissues — and the company has been pushing several programs toward the clinic.

The first prime editing therapy to enter a clinical trial — and this is the milestone the field has been waiting for — is for **chronic granulomatous disease**, or **CGD**.

Let me explain what CGD is, because it's a particularly elegant disease to target with prime editing. CGD is a rare inherited immunodeficiency caused by mutations in the genes encoding the **NADPH oxidase complex** — the enzyme complex that white blood cells use to generate reactive oxygen species during the killing of bacteria. White blood cells of CGD patients can't make those reactive oxygen species — so they can phagocytose bacteria, but they can't kill them efficiently. Patients get recurrent, severe bacterial and fungal infections, often life-threatening, throughout life.

The most common form of CGD, called X-linked CGD or X-CGD, is caused by mutations in the **CYBB** gene on the X chromosome. The mutations are heterogeneous — many different point mutations, small insertions, small deletions can disrupt CYBB and cause disease. Some of those mutations are addressable by base editing, but many — particularly the small insertions, the small deletions, and the transversions — are not. Prime editing, by contrast, can in principle address essentially all of them.

\[Pause.\]

Prime Medicine's approach for CGD is the same approach pioneered in the sickle cell space: take a patient's blood, extract their hematopoietic stem cells, edit those cells ex vivo using prime editing to fix the CYBB mutation, and infuse the corrected cells back into the patient after a conditioning regimen. The corrected stem cells repopulate the bone marrow and, over time, give rise to corrected white blood cells that can finally kill bacteria properly.

In late 2024 and into 2025, Prime Medicine began enrolling patients in the **PM359 trial**, the first-ever clinical trial of a prime editing therapy in humans. Early reports from the first treated patients have shown that the editing process can produce hematopoietic stem cells with the desired correction at high efficiency, that those cells can be infused back into patients, and that the corrected cells engraft in the bone marrow and produce functional white blood cells. The first-in-human data have been promising. As of this lecture in mid-2026, we still have relatively short follow-up on the first treated patients, but the proof of principle has held: prime editing works in a human, in a clinical context, on a real disease.

This is, in many ways, the first real clinical test of prime editing in humans. The analogy you should hold: **the CGD trial is to prime editing what the Casgevy sickle cell approval was to CRISPR.** It's the moment when an academic tool became a real medicine. The path from PE1 in a culture dish in 2019 to a corrected cell in a patient in 2025 is a remarkable six years. Most therapies take twenty.

There are other Prime Medicine programs at various stages — Wilson disease, in vivo liver edits, retinitis pigmentosa, others — and we'll come back to those at the end. But CGD is the one that broke the seal. The first prime-edited human cells in a treated patient.

\[Pause. Let it land.\]

\[BREAK\]

\[Take ten minutes. Stretch. Drink water. When you come back, we shift gears from clinical applications to the broader landscape: prime editing in animals and crops, off-target behavior, design tools, the bleeding edge.\]

---

## SEGMENT 10 — Prime editing in agriculture and in animal models

Welcome back. Let me start the second half by widening the lens beyond human medicine. Prime editing is also having a substantial impact in agriculture and in animal model creation, and the reasons are interesting and worth understanding.

\[Pause.\]

Let's start with crops. Conventional CRISPR-Cas9 with a double-strand break is now a routine tool in plant biology. You make a guide, you deliver Cas9, you cut, NHEJ produces a knockout, you select for the edit, you regenerate plants. It works. Many of the first wave of commercially approved gene-edited crops — the high-oleic soybean, the non-browning mushroom, various disease-resistant cereals — were made this way.

But for the same reason as in human cells, there are many edits in plants that you want to make that aren't simple knockouts. You want to install specific point mutations that confer herbicide tolerance. You want to fix specific recessive disease alleles in elite cultivars. You want to introduce small insertions that change protein function. Base editing in plants has been adopted, but it has the same limitations as in human cells — only some swaps, only some sites, plus the agricultural concern that the cellular environment of plant cells is different from mammalian cells and base editors often work less well there.

Prime editing in plants was first demonstrated in rice and wheat in 2020, within months of the original Anzalone paper. Since then, prime editing has been used in rice, wheat, maize, tomato, potato, soybean, and several other crops. Editing efficiencies have been generally lower than in mammalian cells — a few percent in the best cases, sometimes much less — but for crop applications, even a few percent is workable, because you can screen many regenerated plants and pick the ones with the edit. The regeneration bottleneck, not the editing efficiency, is usually rate-limiting in plants.

The first commercial uses of plant prime editing are now appearing. Companies are developing prime-edited rice with herbicide tolerance traits, prime-edited tomatoes with engineered ripening properties, prime-edited wheat with improved yield. Because prime editing doesn't make a double-strand break and doesn't introduce foreign DNA into the final product, prime-edited crops are sometimes regulated more favorably than transgenic crops in jurisdictions that distinguish between the two. This regulatory advantage is one of the practical reasons prime editing is being adopted commercially in agriculture, even though efficiency is lower.

\[Pause.\]

Now let's turn to animal models. Mouse model creation is one of the largest applications of CRISPR — every research mouse with a specific genetic alteration is, somewhere in its lineage, the product of a genome editing event. The traditional approach is to inject Cas9 plus a guide RNA into a fertilized mouse egg, let CRISPR cut, hope HDR happens with an injected donor template, and screen the resulting pups for the desired edit. The efficiency of HDR in mouse embryos is low — single-digit percent in many cases — which means you screen many litters to find the few correctly edited animals.

Prime editing in mouse embryos was first demonstrated by several groups in 2019-2020. The efficiency, even in early experiments, was often higher than HDR, because prime editing doesn't need HDR. You inject the prime editor mRNA plus the pegRNA into the embryo, it edits in place, no donor required. You get founder mice with the desired edit at higher frequency, with fewer indels, and with cleaner editing outcomes.

For specific kinds of edits — small substitutions, small insertions, small deletions, especially anywhere mid-gene — prime editing has become the preferred tool for mouse model creation in many labs. For larger edits, like full transgene insertions, viral integration or HDR with longer donors is still often used. But for the bread-and-butter mouse model — a specific point mutation in a specific gene, recreating a human disease allele — prime editing has rapidly become the default.

The same is true in rat models, and increasingly in livestock — there's been prime editing demonstrated in pigs, in cattle, and in several other agricultural species. The principle scales: any model organism where Cas9 works, you can apply prime editing, as long as the delivery and the regeneration work out.

---

## SEGMENT 11 — The off-target landscape: how specific is prime editing?

Now let's talk about specificity, because this is where prime editing genuinely shines compared to ordinary Cas9 and even compared to base editing.

\[Pause.\]

Recall the off-target problem with Cas9. Cas9 finds its target by matching the guide RNA's 20-letter spacer to a sequence in the genome. But the match isn't required to be perfect. Mismatches, especially outside the seed region, are tolerated. So Cas9 will sometimes cut at sites in the genome that are similar to the intended target but not identical. These off-target cuts can disrupt unintended genes, cause translocations between off-target cut sites, and generally create headaches.

The off-target problem has been studied exhaustively for Cas9. Various engineered Cas9 variants — eSpCas9, SpCas9-HF1, HiFi Cas9, and others — have been developed to reduce off-target activity. But ordinary Cas9, even at its best, has a real off-target footprint that you have to characterize for any clinical application.

Base editing inherited part of this problem, plus a new one. The targeting specificity of a base editor is the targeting specificity of its Cas9 component. But base editors have an additional, separate source of off-target activity: **the deaminase can attack any single-stranded DNA**, even if the Cas9 is just transiently parked at an unrelated site, or even when the deaminase escapes the editor and acts on its own. Base editors have been shown to cause measurable off-target deaminations across the transcriptome and even on RNA — this last point being a major concern, because RNA-level edits accumulate quickly and can affect cellular state in ways that are hard to predict.

Prime editing, in contrast, has an interesting and largely favorable off-target profile.

\[Pause.\]

First, the **R-loop** off-targets. Cas9 still has to form an R-loop at any potential target site, which means the standard sgRNA-spacer match-up rules apply. Prime editing's R-loop specificity is comparable to Cas9 with the same spacer.

Second, and this is the crucial point: **prime editing requires two matches, not one.** The pegRNA has to match the genomic target at the spacer level — that's the R-loop step. AND the pegRNA's primer binding site has to match the freshly nicked 3' end of the genomic strand — a second matching step, with its own short matching requirement. If the spacer matches an off-target site but the PBS doesn't, no editing happens. The off-target is checked twice, by two different sequence-matching events.

This double-check substantially reduces off-target editing relative to ordinary Cas9. Genome-wide off-target studies of prime editors have shown that the off-target editing rate at sites that match the spacer is dramatically lower than the rate of Cas9 cleavage at those same sites — often by orders of magnitude. The double match is a real specificity gain.

Third, the **deaminase off-target problem is absent**. Prime editing doesn't use a deaminase. It uses a reverse transcriptase, which is template-directed — the RT can only write the sequence encoded in the pegRNA template, and only at sites where the PBS has annealed. There's no analog of the deaminase-attacks-random-DNA problem.

So the summary is: **prime editing is generally more specific than Cas9, and substantially more specific than base editing on average.** You still need to characterize off-targets for any clinical application — there's no genome editor that is genuinely off-target-free — but the off-target burden of prime editing is, on average, lower than the alternatives. This is a major reason why prime editing is being pursued so aggressively for clinical use despite its lower efficiency. Specificity matters more than raw efficiency when the goal is a safe therapy.

\[Pause.\]

One more thing worth knowing. Prime editing does have one off-target failure mode that's specific to it: **incorrect flap resolution at the on-target site**. Sometimes the new 3' flap is incorporated incorrectly, or the original 5' flap is retained but partially digested. These can produce small indels or partial edits at the on-target site itself. They're not classical off-targets, but they're on-target byproducts that you need to consider when assessing the cleanliness of a prime editing experiment. PE3 has slightly more of this kind of byproduct because of the second nick; PE3b reduces it; engineered pegRNAs reduce it further.

---

## SEGMENT 12 — Limitations of prime editing: efficiency, pegRNA design, and payload size

Let me be honest about what prime editing can't do well, because no tool is universal and the limitations matter.

\[Pause.\]

**Limitation one: efficiency.** Even with PEmax, PE5, epegRNAs, and every optimization in the book, prime editing is still less efficient at most sites than base editing or Cas9-based knockout editing. You routinely see 50-80% knockout efficiency with Cas9 plus NHEJ. You see 30-70% base editing at well-designed CBE or ABE sites. Prime editing in well-optimized cultured cells with the best modern tools often reaches 30-50% on average across sites — sometimes much higher, sometimes much lower, depending heavily on the local sequence context. In primary cells, in vivo, and in difficult cell types, the efficiency drops further. This is the central tradeoff: prime editing is more flexible and more precise than base editing, but it pays for that flexibility in efficiency.

**Limitation two: pegRNA design is genuinely hard.** A pegRNA has three functional regions that all have to work together. The spacer has to be specific and target-matching. The PBS has to anneal to the freshly nicked 3' end with the right strength — too short and it doesn't anneal stably, too long and it might invade off-target sites. The RT template has to encode the edit, terminate at a sensible position, and be free of secondary structures that would block the RT. And the whole pegRNA has to be stable in cells. Get any one of those wrong and the edit doesn't install.

The analogy: **the pegRNA is the hardest part of prime editing. You have to engineer the guide to be specific, the primer binding site to anneal, the RT template to encode the edit, and the whole thing to be stable — and you have to do all of those simultaneously.** A bad pegRNA can give you a thousand-fold lower editing efficiency at the same site as a good pegRNA. This is why so much engineering effort has gone into pegRNA design tools and into systematic screens of pegRNA designs.

**Limitation three: large payloads are still hard.** Even with twinPE, even with PASTE, even with the cleverest combinations, prime editing of large payloads — multi-kilobase insertions — is still much less efficient and much less flexible than what AAV-based gene addition or lentivirus-based gene addition can deliver. PASTE works, but the editing efficiency drops as the payload grows. The current sweet spot for prime editing is edits up to about 100 base pairs done by single pegRNAs or twinPE, plus rare large-payload installations using PASTE at lower efficiency.

**Limitation four: cell-type and delivery dependence.** Prime editing efficiency varies enormously by cell type. T cells edit well. Hematopoietic stem cells edit moderately well after extensive optimization. Liver cells in vivo edit at reasonable efficiency when prime editor mRNA is delivered by lipid nanoparticle. Neurons and other terminally differentiated cells edit poorly, partly because they're not dividing and many of the cellular repair machinery the editor uses is less active. So in vivo prime editing is still very much a tissue-by-tissue, delivery-by-delivery problem.

**Limitation five: protein size.** The prime editor — Cas9 nickase plus M-MLV RT — is a big protein. It's about 6.3 kilobases of coding sequence, which is too big to fit in a single AAV (whose payload limit is about 4.7 kilobases). This is a real delivery problem for in vivo applications. The Liu lab and others have developed split prime editors — where the Cas9 and the RT are delivered on two separate AAVs and reassembled by intein splicing inside the cell — but this adds complexity. Smaller Cas variants, like SaCas9, have been used as alternatives, but they have their own tradeoffs.

\[Pause.\]

I want you to understand: every one of these limitations is being actively worked on. The field is moving fast. The PE1-to-PEmax improvement was three orders of magnitude in five years. There's every reason to think the next five years will see further substantial improvements. But as of today, in mid-2026, prime editing is a powerful tool with real constraints. Knowing those constraints is what separates a thoughtful user from someone who'll burn a year on an experiment that was never going to work.

---

## SEGMENT 13 — pegRNA design tools: PrimeDesign, PrimeVar, and friends

Given that pegRNA design is hard, and given that small design choices can make a huge difference in editing efficiency, an entire ecosystem of pegRNA design tools has appeared. Let me walk you through the most important ones, because if you're ever going to actually run a prime editing experiment, these are what you'll use.

\[Pause.\]

**PrimeDesign**, from **Pinello lab** and the Liu lab, was released in 2021 and remains the most widely used general-purpose pegRNA design tool. You give PrimeDesign two inputs: the genomic sequence around your target site, and the edit you want to install — written as a simple before-and-after, like "change this T to this A" or "insert this sequence here." PrimeDesign enumerates all the possible pegRNA designs that could install your edit, given the available PAMs in the region. For each design, it generates the full pegRNA sequence — spacer, scaffold, RT template, PBS — and it scores each one based on several criteria: spacer specificity, PBS length, RT template length, expected efficiency from empirical models.

PrimeDesign isn't infallible — its efficiency predictions are good but not perfect, and you typically still need to test several designs experimentally — but it dramatically reduces the search space and the design effort. A pegRNA design that used to take a researcher an hour of careful manual sequence work now takes ten seconds in PrimeDesign.

**PrimeVar**, also from the Pinello group, takes things a step further. PrimeVar is a database of pegRNA designs for every known pathogenic variant in ClinVar. You type in a clinical disease variant — say, the F508del mutation in CFTR, or a specific BRCA1 mutation — and PrimeVar tells you, for that specific variant, what pegRNA designs exist to correct it, what their predicted efficiencies are, and whether they've been experimentally tested. This is, in effect, a precomputed library of how to fix every known human disease mutation with prime editing. Whether or not the edits would actually work in vivo is a separate question, but having the designs in hand is a huge starting point.

**PE-Designer**, **EnPrimer**, **Easy-Prime**, and several other academic tools have appeared, each with its own approach to designing pegRNAs and predicting their efficiency. The field has not yet converged on a single tool, partly because the efficiency predictors are still being refined as more empirical data accumulates. But the cumulative effect is that pegRNA design is no longer a barrier to entry — anybody with internet access and a target sequence can generate a reasonable pegRNA design in minutes.

\[Pause.\]

The empirical efficiency predictors deserve a brief mention. They're built by training machine learning models on datasets where thousands of pegRNAs were experimentally tested at many sites, and the model learns to predict editing efficiency from the pegRNA features. The most influential of these models is **DeepPrime**, published in 2023, which uses deep learning on a dataset of about a hundred thousand experimentally measured pegRNA-target pairs. DeepPrime can predict prime editing efficiency at new sites with reasonable accuracy — typically explaining 50-70% of the variance in measured efficiency, which is better than any analytical model.

These prediction tools matter because, at most sites, only a few of the dozens of possible pegRNA designs will be efficient. Picking the right one without empirical guidance is hard. Picking it with a good prediction model is much easier.

---

## SEGMENT 14 — High-throughput screens and PEGE: characterizing prime editing at scale

How do you know which pegRNA designs work and which don't? You test them. But testing one at a time is slow. The field has developed several high-throughput approaches for screening prime editing at scale.

\[Pause.\]

The general idea: instead of testing pegRNAs one by one, design a library of thousands of pegRNAs, deliver them all together to a population of cells, and use sequencing to read out both which pegRNA each cell received and what edit was actually installed. This way you can characterize thousands of pegRNA designs in a single experiment, and you can build training data for the design and prediction tools we just discussed.

**PEGE — Prime Editing Guide RNA Engineering by high-throughput screens** — and various variants of this idea have been used by several groups. The most influential implementation came from the Liu lab and several collaborators. The setup: build a synthetic library of paired pegRNAs and matched target sites in a single piece of DNA — so each library member contains both the guide and the sequence it's supposed to edit. Integrate the library into cells. Express the prime editor. Sequence the targets afterward to see which library members got edited and at what efficiency.

This approach has now characterized hundreds of thousands of pegRNA-target pairs, and it's the data backbone of the machine learning efficiency predictors I just mentioned. The principle is simple. The execution is sophisticated. The output is a quantitative map of prime editing efficiency across sequence space.

A related approach is **base-paired** screens, where you can compare base editing efficiency and prime editing efficiency head-to-head at the same sites, with the same delivery, in the same cells — generating a direct comparison of which sites favor which tool. These comparative datasets are valuable for telling you, for any given edit you want to install, whether base editing or prime editing is the better starting point.

The screens also illuminate which features of the pegRNA matter most. The findings, in broad strokes: PBS length matters, with an optimal range around 11-13 nucleotides; RT template length matters, with shorter templates generally working better than longer; spacer activity matters, just like ordinary Cas9; the local sequence context matters, particularly the bases immediately surrounding the nick site; and the secondary structure of the pegRNA matters, with structures that block the PBS or the RT template severely impairing editing. These design rules, distilled from screen data, are what the prediction tools have learned.

---

## SEGMENT 15 — Dual pegRNAs and nuclease-pe combinations

We've already met twinPE in Segment 7 — a paired-pegRNA strategy for larger edits. But there are several other dual-pegRNA and combination strategies worth knowing about, because each opens up a different category of edit.

\[Pause.\]

**Quadruple-strand displacement designs**, where four pegRNAs are used simultaneously, have been explored for installing very large gene-sized inserts without needing an integrase. The mechanism is geometrically complex, but the idea is that four pegRNAs together can write across a much larger window than two can, by having each pair handle a portion of the new sequence. Editing efficiency is lower than two-pegRNA twinPE, and the designs are intricate, but for some specific applications, four-way prime editing has shown promise.

**Prime editing plus Cas9 nuclease at a distance** — sometimes called "PE-nuclease" or "homology-mediated prime editing" — uses a regular Cas9 cut at a nearby site to stimulate prime editing in cis. The double-strand break, made by a separate Cas9 plus an ordinary sgRNA, triggers the cell's repair machinery to look for templates, and the prime editing nick provides a 3' end that can act as a "template" for the broken DNA. This hybrid strategy can sometimes boost editing efficiency in cell types where prime editing alone is slow, at the cost of introducing the indel risk of the double-strand break.

**Prime editing plus base editing** — combining the two in the same experiment — has been used to install combinations of edits at the same site. The use case is rare but real: when you want a specific base change AND a specific small insertion at neighboring positions, neither tool alone can do it, but a coordinated PE-plus-BE delivery can.

**Cascade designs**, where a first prime editing event creates a new PAM that's then used by a second pegRNA to install a second edit, have been demonstrated as a proof of principle for multi-step edits. The idea is futuristic and the efficiency is currently low, but the principle works: prime editing can be programmed in sequence, with each edit setting up the next.

\[Pause.\]

The pattern across all these combination strategies is the same: each one trades simplicity for some specific extra capability. The base prime editor with one pegRNA is the simplest case. As you add more guides, more enzymes, more steps, you unlock new edit categories but lose efficiency and introduce more design complexity. For most applications, the simple one-pegRNA PE2 or PE3 case is the right starting point. The combination strategies are reserved for the cases where simpler approaches won't work.

---

## SEGMENT 16 — Prime editing in mitochondria: a hard problem with recent progress

The mitochondrial genome is a special case. Every cell in your body has, in addition to the nuclear genome, dozens to hundreds of copies of a small circular mitochondrial DNA — about 16,500 base pairs in humans — encoding 37 essential mitochondrial genes. Mutations in mitochondrial DNA cause a long list of diseases, ranging from Leber's hereditary optic neuropathy to MELAS syndrome to dozens of others. Treating these diseases by editing the mitochondrial genome would be transformative.

But mitochondrial DNA has historically been almost untouchable by CRISPR. The reason is delivery: **guide RNAs cannot be imported into mitochondria**. Mitochondria have their own internal protein import machinery, but they don't have an RNA import system. So you can express Cas9 in the cytoplasm all you want, and you can express guide RNAs, but you can't get the guide RNA into the mitochondrion. Without the guide, no editing.

For a long time, the mitochondrial genome was a frustrating exception to the CRISPR revolution. Then in 2020, the Liu lab published a paper introducing a tool called **DddA-derived cytosine base editor**, or **DdCBE** — a base editor that doesn't use CRISPR at all. Instead it uses a TALE-based DNA-binding domain (we covered TALEs in a previous lecture) fused to a split bacterial cytidine deaminase that only reassembles into active form when the two halves are brought together at adjacent TALE sites. DdCBE can edit mitochondrial DNA — installing C-to-T changes — because TALEs are proteins and proteins can be imported into mitochondria. No guide RNA needed.

DdCBE has been the workhorse for mitochondrial base editing since 2020. But it has the same limitations as nuclear base editing: only C-to-T (and now, with engineered variants, A-to-G), no transversions, no indels.

\[Pause.\]

Prime editing in mitochondria is much harder, because of the same RNA import problem. A pegRNA can't get into mitochondria. So you can't simply transplant the prime editor into the organelle.

Recent progress has come from several directions. One approach has been to develop **mitoPE** systems that use TALE-based DNA targeting, just like DdCBE, but combined with a tethered reverse transcriptase and a small DNA template (not RNA, but DNA, which can in principle be imported under certain conditions) to enable templated edits. This is conceptually a TALE-RT system, not a CRISPR-RT system, and it has been demonstrated in cells in proof-of-principle experiments published in 2023 and 2024. Efficiencies are still low — well under 5% in many cases — but the architecture works.

Another approach has been to engineer mitochondrial RNA import — to attach tags to guide RNAs that allow them to be transported through the mitochondrial membranes by repurposed protein-RNA carriers. This is much harder than it sounds, but several groups have made progress, and there are early reports of CRISPR-style prime editing succeeding in mitochondria when RNA import is solved.

As of mid-2026, mitochondrial prime editing is still an active research area, with no clinical-grade tool yet. But the principle has been established, and the field is moving. I expect that within the next several years, we'll see a clinical-grade mitochondrial prime editor that can install arbitrary edits in the mitochondrial genome. The first applications will likely be Leber's hereditary optic neuropathy and other well-characterized mitochondrial diseases.

---

## SEGMENT 17 — Adjacent extensions: translation, transcription, post-transcriptional prime-style editing

Prime editing as we've defined it edits DNA. But the underlying idea — using a template-directed enzyme tethered to a programmable nucleic-acid-binding domain to install precise changes — has been extended to several other contexts. Let me sketch a few of them, briefly, because they show how the prime editing concept is generalizing.

\[Pause.\]

**RNA prime editing analogs**. ADAR enzymes, which we covered when we talked about RNA editing, can be guided to specific RNA sites by complementary RNAs and induce A-to-I editing — essentially a base editor for RNA. The analog of prime editing for RNA — where you'd want to install arbitrary substitutions, insertions, or deletions into a specific transcript — doesn't quite exist yet in the same way, but several groups have demonstrated reverse-transcriptase-style RNA editing using protein-RNA chimeras. The idea is that you can guide a templated RNA editor to a specific transcript and rewrite a region of it. The tools are early-stage but the principle is workable.

**Transcriptional and epigenetic editing**. Dead Cas9 fused to transcriptional activators or repressors has been around for years — CRISPRa and CRISPRi. Dead Cas9 fused to epigenetic enzymes — DNA methylators, demethylases, histone modifiers — has been extensively explored. The "prime" version of this — combining a programmable epigenetic modifier with a guide-directed approach that's even more specific — is an active area, with several groups developing pegRNA-style guides that direct epigenetic enzymes to specific genomic locations with the same double-check (R-loop plus PBS-style match) specificity that prime editing offers for DNA.

**Reverse-transcriptase-based logging in cells**. A creative offshoot of prime editing is using the same prime editor architecture to **record information in cells** — not to fix disease alleles, but to write timestamps or experimental conditions into the genome of a cell, so you can later read out what the cell experienced over time. The Liu lab and others have developed systems called CHYRON, DOMINO, and others that exploit prime editing or related templated-write mechanisms for cellular logging. These are research tools, not therapies, but they're a nice illustration of how the prime editing platform generalizes.

**Translational and post-translational extensions**. Prime editing's core idea — a templated write made possible by tethering a writing enzyme to a targeting domain — has even been extended into translation. The CHO and others have explored prime-editing-style modifications of ribosomes, mRNAs, and protein products via tethered enzymes. These are speculative directions, not yet practical tools, but they hint at how the prime editing concept might keep expanding.

\[Pause.\]

The thread running through all of these adjacent extensions is the same. **A programmable targeting domain plus a templated writing activity, brought together at the right moment by guide-RNA-style sequence specificity.** The original prime editor is a Cas9 nickase plus an RT, programmed by a pegRNA. The next-generation tools swap pieces in and out — different targeting domains, different writing activities, different guide architectures — but the underlying logic is the same.

---

## SEGMENT 18 — The frontier: Prime Medicine trials, in vivo prime editing, expanding the cargo

Let me close by looking forward. Where is prime editing actually going, in the next few years?

\[Pause.\]

**Prime Medicine clinical trials.** The CGD trial that we discussed in Segment 9 is the leading edge. Prime Medicine has several other programs at various stages — Wilson disease, where the goal is to fix point mutations in the ATP7B gene that cause copper accumulation in the liver; retinitis pigmentosa, where small specific mutations in photoreceptor genes cause progressive blindness; a treatment for the most common form of cystic fibrosis, where the F508del three-base-pair deletion would be reversed; and several others. Each of these programs is at a different stage — some still in preclinical, some entering IND-enabling work, some closer to the clinic. Over the next two to five years, we should see clinical data on several of these programs, and the cumulative evidence will either consolidate prime editing as a major therapeutic platform or reveal limitations we haven't yet appreciated. I'm cautiously optimistic about the former.

\[Pause.\]

**In vivo prime editing.** Most of the prime editing therapies in development today are ex vivo — you take cells out of the patient, edit them in a dish, and put them back. That's the model that works for blood disorders. But many diseases — Wilson's, hemophilia, familial hypercholesterolemia, dozens of others — can only be cured by editing cells in place, in the patient's organs, without taking them out. That requires in vivo prime editing.

Lipid nanoparticles encoding the prime editor mRNA plus a pegRNA, delivered intravenously, have been shown to edit liver hepatocytes in vivo in mice and non-human primates with reasonable efficiency. The liver is a relatively easy target — LNPs naturally accumulate there. Other tissues are harder. AAV-delivered split prime editors have been used to edit eye, brain, and muscle, with varying efficiency. The delivery problem is the same delivery problem that the entire gene therapy field is wrestling with, and prime editing is no exception. Solving in vivo delivery, for diverse tissues, is one of the major frontiers.

\[Pause.\]

**Expanding the cargo.** PASTE took prime editing from ~50-base-pair edits to kilobase-scale insertions. Can we go further? Can we install whole genes at chosen sites with high efficiency? The answer, in 2026, is "sometimes, slowly, with optimization." The answer in 2030 may well be "routinely, in many tissues." The trajectory suggests that cargo size will continue to expand — first with refined PASTE designs, then with new integrase systems with better payload size and specificity, then potentially with new templating mechanisms we haven't yet seen.

The implication is large. If you can put a whole, optimized therapeutic gene at a chosen site in a patient's genome, without making a double-strand break and without random integration, you have a fundamentally better gene therapy than today's lentivirus or AAV-based approaches. Those approaches have served the field well — they enabled the early successes in sickle cell, in SMA, in retinal dystrophy — but they have real safety and efficacy limitations. A site-specific large-payload prime-editing-based gene therapy would represent a generational step forward.

\[Pause.\]

**Combinations with other tools.** Prime editing isn't going to replace Cas9-based editing or base editing or HDR or AAV-delivered gene therapy. Each tool has its niche. The future likely involves clinicians and researchers picking the right tool for each application — Cas9 for clean knockouts, base editing for simple substitutions where bystander edits are acceptable, prime editing for precise complex edits, PASTE for full-gene installation, AAV for large-payload delivery when site specificity isn't required. The toolkit is filling out, and competence with the whole toolkit is going to be more valuable than expertise in any single tool.

\[Pause. Let it land.\]

**The bigger picture.** When I look back at the last decade and a half of genome editing — from the first programmable nuclease, through ZFNs, TALENs, CRISPR-Cas9, base editing, and now prime editing — what I see is a remarkably consistent trajectory of improvement. Each generation of tools has expanded what kinds of edits are possible, reduced the collateral damage, and made the platform more useful in the clinic. The progression from "we can cut DNA at a chosen site, but only sometimes, and we can't really predict what happens after" to "we can install an arbitrary small edit at a chosen site, in a patient, with high efficiency and low off-target activity" is the central achievement of the field.

Prime editing, as of mid-2026, is the most flexible, most precise, and most challenging-to-deliver of all of these tools. It is the closest thing we have to true find-and-replace for the genome. And it's just getting started — the engineering improvements of the last six years have been dramatic, the clinical trials are only just beginning, and the next decade will tell us how far this particular tool can go.

If you go away from this lecture remembering one thing, let it be this. **Prime editing is the molecular tool that finally delivers on the original CRISPR promise — find-and-replace at any letter, with any change, in any sequence — without making the cell pay for it with a broken chromosome.** That's the gift David Liu's lab handed the field in 2019, and that's the gift that's now being unwrapped, piece by piece, in laboratories and clinics around the world.

\[Pause. Let it land. End.\]

Thanks for sticking with me through all of that. Take your questions home. Sleep on the editing cycle — draw it out by hand a couple of times if it didn't quite click. And come find me if you want to talk about specific applications. There's nothing more fun than designing a pegRNA for a real disease allele and seeing it work.

---

## APPENDIX

### Quick reference: the prime editing toolkit

**PE1** — Cas9-H840A nickase + wild-type M-MLV RT + pegRNA. The prototype. Low efficiency (single-digit %).

**PE2** — Cas9-H840A nickase + engineered M-MLV RT (5 mutations: D200N, T306K, W313F, T330P, L603W) + pegRNA. Higher efficiency than PE1. The standard starting point.

**PE3** — PE2 + a second sgRNA that nicks the non-edited strand at a nearby site. Biases mismatch repair toward keeping the edit. ~2-4× higher efficiency than PE2.

**PE3b** — PE3 variant where the second nicking guide only cuts after the edit is installed, by targeting a sequence created by the edit itself. Fewer indels.

**PE4** — PE2 + co-expression of dominant-negative MLH1 to suppress mismatch repair.

**PE5** — PE3 + co-expression of dominant-negative MLH1. Currently the highest-efficiency standard configuration.

**PEmax** — A re-engineered prime editor protein with improved Cas9 expression, additional NLS, codon optimization, and a redesigned linker. Combinable with PE3/PE5 strategies for further gains.

**epegRNA** — Engineered pegRNA with a structured 3' element (tevopreQ1 pseudoknot or mpknot) that resists exonuclease degradation. Roughly 2× efficiency boost over unmodified pegRNAs.

**twinPE** — Pair of pegRNAs targeting opposite strands. Enables larger edits (up to ~few hundred bp) by writing new sequence on both strands and resolving via flap annealing.

**PASTE** — twinPE-installed attB landing pad + serine integrase + attP-containing donor DNA. Enables kilobase-scale insertions at precise genomic sites.

### Key references (recommended reading order)

1. Anzalone et al., _Nature_, 2019. "Search-and-replace genome editing without double-strand breaks or donor DNA." The original paper.
2. Chen et al., _Cell_, 2021. "Enhanced prime editing systems by manipulating cellular determinants of editing outcomes." Introduces PE4 and PE5.
3. Nelson et al., _Nature Biotechnology_, 2022. "Engineered pegRNAs improve prime editing efficiency." Introduces the epegRNA.
4. Anzalone et al., _Nature Biotechnology_, 2022. "Programmable deletion, replacement, integration and inversion of large DNA sequences with twin prime editing." twinPE.
5. Yarnall et al., _Nature Biotechnology_, 2023. "Drag-and-drop genome insertion of large sequences without double-strand DNA cleavage using CRISPR-directed integrases." PASTE.
6. Hsu et al., _Nature Biomedical Engineering_, 2021. "PrimeDesign software for rapid and simplified design of prime editing guide RNAs." The design tool.

### Common mistakes to avoid

1. Designing a pegRNA without trying multiple PBS lengths. The optimal PBS length is target-dependent and varies between 8 and 17 nucleotides. Always test a panel.

2. Using PE3 in a context where the second nick will create a long-lived double-strand break. Either use PE3b (with the post-edit-only second nick) or accept the indel risk.

3. Co-expressing MLH1 dn (PE4/PE5) in cells that will be expanded for a long time after editing. The transient suppression of mismatch repair is fine for editing windows but can cause cumulative damage if cells continue to express it.

4. Targeting a site too close to an essential sequence. Prime editing's flap resolution sometimes produces small unintended changes within a few base pairs of the nick. If the surrounding sequence cannot tolerate any change, choose a different target.

5. Forgetting that the H840A nickase nicks the non-target strand. The PBS must match the freshly nicked end on the non-target strand, NOT the target strand paired with the pegRNA. Reversing this is the most common pegRNA design error.

### Three-question diagnostic for any prime editing experiment

**If editing efficiency is low:**
1. Is the spacer efficient? Test it with regular Cas9 first.
2. Is the PBS the right length? Test 9, 11, 13, 15 nt variants.
3. Is the pegRNA stable? Try an epegRNA design.

**If editing efficiency is okay but byproducts are high:**
1. Are you using PE3 with an aggressive second nick? Try PE3b or move to a non-dual-nick strategy.
2. Is the RT template too long? Shorter RT templates generally give cleaner edits.
3. Is the local sequence prone to flap-resolution errors? Move the nick site if possible.

**If everything looks fine but the cell type won't edit:**
1. Is the prime editor protein expressed at high enough level? Try mRNA delivery or codon-optimized constructs.
2. Is the cell type dividing? Some prime editing is cell-cycle-sensitive.
3. Is mismatch repair very active in this cell type? Try PE4/PE5 with MLH1 dn.

### Where to send students

For the keenest students, send them to:
- The Liu lab website at the Broad Institute for the latest tool versions.
- Prime Medicine's pipeline page for clinical-translation updates.
- The Pinello lab tools (PrimeDesign, PrimeVar) for design.
- Addgene's prime editing collection for plasmids.
- And the original Anzalone 2019 paper — every CRISPR course should require it.

\[End of script.\]


