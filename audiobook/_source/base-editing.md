# Base Editing

**A 2-hour undergraduate molecular biology lecture on the David Liu lab's base editors — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, which lands comfortably inside a two-hour slot. (Read faster, about 140 wpm, and you'll have generous room for questions and board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The one-letter edit, and why not cutting the genome is the whole point

Alright, let's get started. Good morning, everyone. This lecture assumes you have already had the CRISPR talk — that you know what Cas9 is, what a guide RNA is, what a PAM is, and what happens when the cell repairs a double-strand break. If any of that is rusty, read the CRISPR chapter first and come back. We are not going to redo that material. We are going to start from the assumption that you can sketch Cas9 finding a target and snipping both strands of the double helix, and we are going to go somewhere different.

Here is the sentence I want you to walk out of here with. **Base editing is the technology that changes a single letter of DNA without cutting the double helix.** That's the whole thing. Read it twice if you need to. Notice everything that sentence does not say. It does not say "without using Cas9" — base editors use a modified Cas9. It does not say "without binding DNA" — base editors absolutely bind DNA. It says specifically that it changes one letter without **cutting**. Without making a double-strand break. Without breaking the molecule in two.

And the reason that distinction matters — the reason an entire subfield of genome editing has grown up around the idea of "don't cut" — is that double-strand breaks are dangerous. We don't usually phrase it that way in the introductory CRISPR lecture, because the cell does an extraordinary job of repairing the breaks Cas9 makes most of the time. But "most of the time" is doing a lot of work in that sentence. Some of the time, the repair is messy. Some of the time, the cell decides the broken chromosome is too damaged to bother fixing and triggers a self-destruct program. Some of the time, two breaks in different parts of the genome get stitched together wrong, and you get a translocation. Some of the time, an entire chromosome gets pulverized and reassembled in a chaotic event called chromothripsis. And the cell, sensing all that damage, often phones the genome guardian — the p53 protein — which can stop cell division entirely or push the cell into apoptosis.

So if all you want to do is correct one mistake — one single-letter typo in a three-billion-letter document — cutting both strands of the DNA helix is, in some real sense, overkill. You are using a sledgehammer where you needed a pencil eraser. The genome doesn't need to be torn in half to fix one letter. It just needs that one letter changed.

\[Pause.\]

That intuition is what David Liu, at the Broad Institute and Harvard, started chewing on around 2014. By then, the CRISPR-Cas9 revolution was three years old. Everyone in genome editing was building variants of cutting Cas9, optimizing guide RNAs, trying to improve specificity, working on delivery. Liu took a different angle. He asked: what if we don't cut at all? What if we use Cas9 only for what it's good at — finding a specific spot in the genome — and we attach to it something else, some chemistry that can change one letter in place, while the DNA backbone stays intact?

That question, asked in his lab, produced over the next three years two new classes of editing enzymes. In April of 2016, his lab published the cytosine base editor, **CBE**. It does C-to-T conversions. In October of 2017, they published the adenine base editor, **ABE**. It does A-to-G conversions. Both of them work by attaching a deaminase enzyme to a Cas9 that has been disabled from doing a double-strand cut. Both of them avoid the dangerous double-strand break. Both of them are now in human clinical trials. And both of them have been used in research labs around the world to edit thousands of mutations in thousands of contexts, from animal disease models to crop plants to human cell therapies. The base editor became a routine bench tool in about four years.

\[Pause.\]

Here is the analogy that I want you to keep in your head for the next two hours. **Cas9 cuts and tears the paper. Base editing erases and corrects without tearing.** If you have ever proofread a typed document — actual paper, with actual ink — you know that there are two ways to fix a typo. You can rip the misspelled word out and tape in a corrected word. That's Cas9 plus a repair template — messy, error-prone, sometimes the tape doesn't hold. Or you can take a careful pencil eraser, rub out the wrong letter, and write the right letter in its place. Same page, no rip, no tape. That's base editing. The page is the genome. The eraser-and-pencil is the deaminase-on-Cas9. The GPS that finds the right word on the page is still the guide RNA, still hunting for its PAM, still forming an R-loop. But once it gets there, instead of bringing scissors, it brings a different tool.

If you walk out of here in two hours and can do four things — first, explain in plain English why avoiding a double-strand break matters and what the cell does when one happens; second, sketch the mechanism of CBE and ABE and tell me what enzyme is fused to what flavor of Cas9 and what chemistry happens to which base; third, articulate why only four of the twelve possible base-to-base swaps are reachable by current base editors and why CBE and ABE between them cover only two of the four transitions; and fourth, look at a clinical trial like Verve's VERVE-101 and tell me what disease it's treating and what edit it's making and why a one-shot infusion could replace a daily pill — then we have succeeded.

Today's lecture is, at its core, a story about a single insight: that you can keep the targeting precision of CRISPR and throw away the part that makes it dangerous, by replacing the scissors with a chemistry that operates on one nucleotide at a time. That's the typewriter that changes one letter without breaking the page.

---

## SEGMENT 2 — Why Cas9 alone is not enough — the messiness of cellular repair

I want to spend this segment on a topic the CRISPR introduction necessarily glossed over, because we have to be honest about it before we can appreciate what base editing buys us. We need to talk about what happens after Cas9 cuts.

You will remember from the CRISPR lecture that once Cas9 forms an R-loop and both blades close, you have a clean blunt-ended double-strand break. The DNA is in two pieces. From the cell's point of view, this is a five-alarm fire. Double-strand breaks are among the most dangerous lesions a genome can suffer, because if the two ends drift apart, or if a different break elsewhere in the genome opens up at the same time and the wrong ends get joined together, you can lose an entire arm of a chromosome or end up with a fusion that drives cancer. Cells take double-strand breaks very, very seriously.

There are two main repair pathways that cells throw at a double-strand break. The first and most common is called **non-homologous end joining**, or NHEJ. It's quick and dirty. Two repair proteins grab the broken ends, trim them a little, and stitch them back together. Most of the time, NHEJ produces a small **indel** — an insertion or deletion of one or a few bases at the cut site. That's how Cas9 is used to **knock out** a gene: you cut, NHEJ misrepairs, the resulting indel shifts the reading frame, and the protein that gene encoded no longer gets made correctly.

The second pathway, **homology-directed repair** or HDR, is the precise one. If you provide the cell with a template — a piece of DNA matching the sequence around the break, but carrying whatever change you want to install — the cell can sometimes copy from that template and incorporate your change. That's how you replace one sequence with another. The catch is that HDR is rare. It happens efficiently only in dividing cells, and even there it loses badly to NHEJ in terms of frequency. In most human cell types of medical interest — neurons, hepatocytes, cardiomyocytes — HDR essentially doesn't happen. So if you want to make a specific, defined edit in a non-dividing cell, vanilla Cas9 plus a template is mostly useless.

\[Pause.\]

That's the textbook version. Here is what doesn't usually make the textbook.

When Cas9 cuts, what NHEJ actually produces is not a single clean outcome but a distribution. Some cells get a one-base insertion. Some get a one-base deletion. Some get a five-base deletion. Some get a forty-base deletion. A small but real fraction get much larger deletions — kilobases of sequence missing. An even smaller but still real fraction get translocations — pieces of the cut chromosome stitched onto a different chromosome that happened to be broken at the same time, perhaps because Cas9 cut an off-target site too. In immortalized cell lines we count alleles and we report indel percentages, but the long tail of the distribution — the kilobase deletions, the translocations, the more chaotic rearrangements — is real and not nothing.

And then there is **chromothripsis**, which is the most dramatic failure mode. Chromothripsis means "chromosome shattering." It's a phenomenon in which an entire chromosome, or a large piece of one, gets pulverized into many fragments and then crudely reassembled, often with pieces missing, inverted, or in the wrong order. It was first described in cancer genomes, where pathologists noticed that some tumors had chromosomes that looked like they had been shattered and stuck back together by a child with glue. In 2021, a paper in _Nature Genetics_ from the Pellman lab showed that Cas9 cutting in some contexts can trigger chromothripsis at the cut chromosome. Not in most cells, not most of the time, but at low frequencies that are easy to measure if you look for them. That was a wake-up call for the therapeutic community. We were no longer in a place where we could say "Cas9 cuts cleanly and the cell tidies up." Sometimes the cell tidies up. Sometimes it doesn't.

\[Pause.\]

There is a third complication, and it has a name that should sound familiar from a cell biology class: **p53**. P53 is the cell's damage sensor. Among many other things, it watches for double-strand breaks. When p53 detects a break, it activates a program that pauses cell division until the damage is repaired, or, if the damage is too severe, pushes the cell to die by apoptosis. That program is, in healthy cells, exactly what you want. It keeps damaged cells from passing on broken chromosomes to their daughters.

But for genome editing, p53 is a problem. If you are trying to use Cas9 to fix a genetic defect in a population of patient cells — say, hematopoietic stem cells you've taken out of the patient's bone marrow, edited in a dish, and plan to put back — the cells with the most intact, healthiest p53 response are the ones that **least tolerate** Cas9 editing, because their p53 stops their growth or kills them. The cells that grow out, that you get back in your dish to put into the patient, are enriched for cells with **dysfunctional p53**. Cells with dysfunctional p53 are, by definition, cells in which a critical tumor suppressor has been knocked down. That's not the population you want to be reinfusing into a patient.

This finding — that Cas9 cutting selects against p53-competent cells — was published in 2018 from Sam Behjati's group at Sanger and from the Karolinska, and it made everyone in the cell-therapy community pause. It didn't kill CRISPR-based therapies, because the magnitude of the effect is debated and because there are workarounds. But it sharpened the question: what if you could edit without making a double-strand break in the first place? P53 doesn't activate on simple single-strand nicks the way it does on double-strand breaks. Chromothripsis doesn't happen without breaks. Large deletions don't happen without breaks. Translocations don't happen without breaks. If you could change a letter without ever creating that catastrophic-looking lesion, you would dodge an entire class of problems.

That's the motivation for base editing. Not a marginal improvement. A different category of edit.

---

## SEGMENT 3 — Liu's insight — fuse Cas9 to a deaminase, and don't cut

Now to the original insight. Picture David Liu sometime in 2014 or 2015, looking at the CRISPR field and asking the question I posed in Segment 1: what if we use Cas9 only for the targeting, and bring our own chemistry for the actual edit?

The first thing Liu's lab had to decide was: what variant of Cas9 do we use? Wild-type Cas9 cuts both strands — that's the whole problem. There are two well-known modifications you can make to neutralize the cutting.

The first is **dCas9** — dead Cas9, sometimes called catalytically dead Cas9. You mutate both of Cas9's nuclease domains — HNH and RuvC, which you met in the CRISPR lecture — so that neither one can cut. The protein still binds the guide RNA. It still scans the genome for the PAM. It still forms the R-loop and grips its target sequence. But once it's there, it just sits. It does not cut either strand. dCas9 was already, by 2014, a workhorse tool for things like CRISPR interference, where you use dCas9 to physically block transcription of a gene. So Liu had a known, well-behaved targeting module that could deliver a payload to any spot in the genome without cutting.

The second option is **nCas9** — nickase Cas9. You mutate just one of the two nuclease domains. nCas9 still cuts one strand of the DNA. It does not cut both. A nick — a cut in only one strand — is repaired by the cell much more conservatively than a double-strand break. Nicks happen all the time during normal DNA replication and repair; cells barely notice them. So nCas9 is in between dCas9 and full Cas9 in terms of disruption to the genome.

Liu's lab tried both, and as we'll see, the architecture that won — the architecture used in essentially every modern base editor — uses nCas9. The nick on one strand turns out to do something useful: it pushes the cell to use the **unedited** strand as the template for repair, which biases the outcome toward keeping the edit. We'll come back to this.

\[Pause.\]

The next question was: what chemistry do you bring? You want something that changes one specific base into a different base, without breaking the backbone. You want it to happen on DNA. And, ideally, you want it to happen on single-stranded DNA, because — and here is a beautiful piece of leverage — when Cas9 binds its target and forms the R-loop, the strand that does **not** pair with the guide RNA is displaced as a loop of single-stranded DNA. That single-stranded loop hangs there for as long as Cas9 is sitting on the target. If your enzyme prefers single-stranded DNA, the R-loop hands you exactly the substrate you want, exactly where you want it, for free.

The class of enzymes that fits this description is called **deaminases**. A deaminase is an enzyme that removes an amine group — an NH2 — from a base. In DNA, the bases with amine groups that can be removed are cytosine and adenine. If you remove the amine from cytosine, you turn it into uracil. If you remove the amine from adenine, you turn it into hypoxanthine, which the cell reads as guanine. So in principle, deamination of cytosine gives you a C-to-U change (and U is read like T), and deamination of adenine gives you an A-to-G change (because the cell reads hypoxanthine as G when it replicates the DNA).

C to T. A to G. Two of the simplest chemical conversions you can do on a nucleobase. Both produced by enzymes that nature already evolved for other purposes. Both, in principle, capable of editing DNA in place without ever breaking the backbone.

\[Pause.\]

Here is Liu's insight in one sentence. **Fuse a single-strand-specific deaminase to a Cas9 nickase, and you have a programmable, no-cut, single-letter editor.** The deaminase rides on the back of Cas9. Cas9 navigates to the target, opens up the R-loop, and the deaminase reaches over and chemistry-edits a base in the single-stranded loop. Once Cas9 falls off, the cell's normal repair machinery sees the edited base, does what it usually does with that lesion, and the edit is installed permanently in the genome.

Notice what this design buys you. The guide RNA still picks the target — so the precision of CRISPR is preserved. The deaminase does single-letter chemistry — so you get clean conversions, not random indels. The DNA backbone is not severed — so NHEJ doesn't run, HDR doesn't have to run, large deletions don't happen, p53 doesn't activate the way it does at a double-strand break, and chromothripsis doesn't happen. The whole catastrophe of the cellular damage response, which Cas9 alone provokes, simply doesn't fire.

The design is so clean, in retrospect, that it sounds inevitable. But you have to remember that in 2015, nobody in the world had attached a deaminase to a Cas9. Nobody had shown that the R-loop's single-stranded loop was accessible to a fused enzyme. Nobody knew which deaminase would work, what linker to use, where on Cas9 to attach the enzyme, how big the editing window would be, what off-target editing would look like, or whether the whole concept would do anything at all in a real cell. All of that had to be worked out experimentally. And the first version — cytosine base editor, version 1 — was the proof of concept that the whole architecture worked.

---

## SEGMENT 4 — The cytosine base editor — APOBEC1, the eraser, and the UGI trick

Let me walk you through the cytosine base editor in some detail, because it was the first base editor published, and because the architecture of the cytosine base editor — affectionately called **CBE** — established the template that every subsequent base editor built on.

The 2016 paper, in _Nature_, was titled "Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage." That title is doing exactly the same kind of work as the Doudna-Charpentier title did in 2012 — every word counts. "Programmable" means you can aim it. "Target base" means single-letter resolution. "Without double-stranded DNA cleavage" means the central design choice.

The deaminase the Liu lab chose was **APOBEC1** — apolipoprotein B mRNA editing enzyme, catalytic polypeptide-like 1. APOBEC1 normally lives in your intestine, where it edits a single C in the messenger RNA for apolipoprotein B, turning it into a U, which changes a codon, which makes a truncated version of the protein. The relevant detail for us is that APOBEC1 is a **cytidine deaminase** — it removes the amine from cytosine, converting C to U — and it prefers single-stranded substrates. Exactly what we need.

The first version, BE1, was just APOBEC1 stuck to the N-terminus of dCas9 — that's the fully dead, double-mutant Cas9 that doesn't cut either strand — with a short flexible linker between the two proteins. The architecture, drawn on a board, looks like this: APOBEC1 box on the left, linker squiggle, dCas9 box on the right. The whole fusion is delivered to the cell along with a guide RNA. Cas9 navigates, R-loop opens, APOBEC1 reaches over from its tethered position and grabs the single-stranded loop, and any cytosine within reach gets deaminated. C becomes U.

\[Pause.\]

In a test tube, on naked DNA, BE1 worked beautifully. About 25 to 40 percent of target Cs converted to U. The chemistry was unmistakable. C in, U out. No backbone breaks. No indels. The first proof was clean.

But in a living cell, BE1 was disappointing. Editing efficiency dropped to a few percent, sometimes less than one percent. The reason is something that the test tube didn't see, but that the cell does brilliantly. The cell has a dedicated enzyme called **uracil DNA glycosylase**, or UDG, whose entire job is to recognize uracil in DNA and remove it. From the cell's point of view, uracil in DNA is a mistake — it doesn't belong there, it's a sign of damage, get rid of it. UDG comes along, snips out the U, and base-excision repair restores the original C. The base editor edits, the cell unedits, equilibrium settles back at C, and you have done nothing.

The solution Liu's lab came up with is one of the most elegant tricks in genome engineering. They went looking for an inhibitor of UDG, and they found one already pre-evolved by — of all things — a bacteriophage. Some phages, when they infect bacteria, need to protect their own DNA from being attacked by the bacterium's UDG. So phages encode a small protein called **uracil glycosylase inhibitor**, or **UGI**, that binds UDG and shuts it off. The phage's own little immune evasion module.

Liu's lab took the phage UGI and fused it to the cytosine base editor. The architecture of the next version, BE2, became: APOBEC1 - linker - dCas9 - linker - UGI. Three modules. The APOBEC1 does the chemistry. The dCas9 does the targeting. The UGI blocks the cell from undoing the chemistry. With UGI in the construct, editing efficiency in human cells jumped roughly tenfold.

\[Pause.\]

There was one more move, and this is where the design choice of nickase versus dead Cas9 comes in. BE3, which became the canonical first-generation CBE, replaced dCas9 with an **nCas9** — specifically, an nCas9 that nicks the strand opposite the one being edited. The strand opposite the one where APOBEC1 has just turned a C into a U.

Why nick the opposite strand? Because of how the cell repairs base mismatches. Once APOBEC1 turns C into U, you have a U paired with G — a U:G mismatch, which the cell recognizes as a problem. The cell's mismatch repair machinery will fix the mismatch, but it has to decide which strand is the right one. If it picks the U-bearing strand as "wrong," it will excise the U and restore the C — same problem as before, you've done nothing. If it picks the G-bearing strand as "wrong," it will excise the G and replace it with an A across from the U — and now you have U:A, which after replication becomes T:A, and the edit is locked in: C-to-T conversion, done.

Cells use, among other signals, the presence of nicks to decide which strand to repair. The newly synthesized strand during DNA replication has nicks; the parental strand doesn't. So the cell, by default, treats the nicked strand as the one that needs fixing. By engineering nCas9 to nick the **non-edited strand** — the one with the G that should become an A — the base editor tricks the cell into rewriting the G to match the U, instead of the other way around. The cell does our job for us. Smart.

With UGI to block UDG, with nCas9 to nick the right strand, BE3 routinely achieved 30 to 50 percent C-to-T conversion at target sites in human cells, with low indel rates (because there's no double-strand break) and clean, single-letter outcomes. The cytosine base editor was born.

\[Pause.\]

Let me state the analogy one more time, now with the parts named. CBE is a **guided pencil with a C-to-T eraser**. The GPS that finds the spot is nCas9 plus the guide RNA. The eraser is APOBEC1, which erases the amine off the C and leaves a U behind. The pencil — what actually writes the new letter — is the cell's own DNA repair machinery, redirected by the UGI block and the strand nick to put a T where the C used to be. C in, T out. G across the helix becomes A. The edit is permanent. The backbone never broke.

That was the proof of concept for base editing as a category. Now the obvious question — the one that defined the next year of Liu's lab — was: can we do the same trick for adenine?

---

## SEGMENT 5 — The adenine base editor — and an enzyme that didn't exist in nature

When Liu's group asked whether they could build an adenine base editor analogous to CBE, they ran into a problem that almost killed the project. The problem is that **no enzyme that deaminates adenine in DNA exists in nature**.

That's worth pausing on. Read it again. No naturally occurring enzyme that you can find in any organism, anywhere on Earth, does to adenine on DNA what APOBEC1 does to cytosine. Lots of enzymes deaminate adenine in other contexts — there are adenine deaminases that act on RNA, there are adenine deaminases that act on free adenosine molecules, there are enzymes that deaminate adenine in tRNA. The chemistry exists in biology. But no enzyme, that anyone had identified by 2015, performed adenosine deamination on DNA. The substrate didn't exist for evolution to bother with.

So if you wanted to build an adenine base editor by following the CBE recipe — find a natural deaminase, fuse it to Cas9, optimize the construct — you couldn't. There was no natural enzyme to recruit. The whole architecture had no first ingredient.

What Liu's team did instead is the part of this story that I find most thrilling, and that I want you to remember in your bones because it is going to happen again and again in modern biotech. **They evolved an enzyme that does not exist in nature.** They took an enzyme that does the closest related chemistry — deaminating adenine in tRNA — and they pushed it through round after round of laboratory directed evolution until it gained the new activity they wanted: deaminating adenine in DNA. That enzyme is called **TadA**.

\[Pause.\]

Let me tell you what directed evolution is, because the term gets thrown around and it's worth knowing exactly. Directed evolution is the laboratory version of natural selection. You take a starting enzyme, you generate millions of variants of it by randomly mutating its DNA, you put the variants into bacteria or yeast under a selective pressure that only the variants with your desired new activity can survive, the survivors multiply, you take their enzymes, you mutate again, you select again, and you do this for round after round. You are pretending to be evolution. You are choosing what gets to survive — in this case, the variants that show even a tiny amount of DNA adenine deamination activity — and you let beneficial mutations accumulate over generations. Frances Arnold won the Nobel Prize in Chemistry in 2018 for pioneering exactly this technique. It is one of the most powerful tools in modern biology.

Liu's team started with **TadA from E. coli**, the bacterial enzyme that normally deaminates adenosine at position 34 of tRNA. They engineered a clever bacterial selection in which the survival of the bacterium depended on TadA being able to deaminate an adenine in a piece of DNA. Wild-type TadA could not. They mutagenized the TadA gene, plated billions of bacteria, and looked for the rare survivors. They sequenced the TadA gene in the survivors. They took those slightly improved versions, mutagenized again, and selected again. They did this for round after round.

After seven rounds, they had a variant they called **TadA\*7.10**. Several mutations away from the parent. Now able to deaminate adenine in DNA, in a sequence-defined way, with reasonable efficiency. They fused this evolved TadA to nCas9, added a wild-type TadA as a partner — TadA likes to dimerize, and the heterodimer of wild-type-plus-evolved turned out to work better than evolved alone — and they had the first **adenine base editor**, ABE7.10. It was published in _Nature_ in October of 2017.

ABE7.10 converts A to inosine. Inosine, when the cell reads it during DNA replication or repair, is interpreted as guanine. So the net effect is **A-to-G conversion**. The thymine across the helix from the original A becomes a cytosine, because the cell pairs C with the new inosine/G. So the genomic outcome is A:T becomes G:C. Just like CBE, but on the other transition.

\[Pause.\]

ABE7.10 was a real reagent. It worked in human cells, with editing efficiencies in the same ballpark as CBE — sometimes 50 percent or more at favorable target sites. And every subsequent round of evolution improved it. Several years later, Liu's lab produced **TadA-8e**, with additional mutations that made it faster and more processive. ABE8e, the editor based on TadA-8e, can edit some targets with 80 to 90 percent efficiency in cell culture. It is the workhorse adenine base editor in current research and in essentially every adenine-base-editing clinical trial running today.

I want to land the point one more time. The TadA in ABE is not a natural enzyme. There is no organism on Earth whose ancestors evolved TadA-7.10 or TadA-8e. Those enzymes exist because human beings, in a Boston lab, used directed evolution to drag a tRNA-editing enzyme out of its evolutionary niche and force it to acquire an activity that no organism, in three and a half billion years of life on this planet, had ever evolved.

That is, in a sentence, the analogy. **ABE is an evolved enzyme that doesn't exist in nature — Liu's team made it because no natural enzyme would do A-to-I on DNA.** When you read about ABE in a clinical trial — and you will, because ABE-based therapies are now in human trials — remember that the active ingredient in that drug is an enzyme that natural selection never produced. Directed evolution produced it. Liu's team produced it. In a lab.

---

## SEGMENT 6 — The four-of-twelve problem — why we can't do A-to-T yet

Now I want to do some elementary counting, because the counting tells you the limitations of the current base editing toolkit in a really clean way, and it helps you understand why prime editing — which we'll touch on at the very end — was needed.

DNA has four bases: A, T, G, C. The number of ways to swap one base for a different one is twelve — A to T, A to G, A to C, T to A, T to G, T to C, G to A, G to T, G to C, C to A, C to G, C to T. Twelve possible single-letter changes. Twelve possible point mutations a genetic disease could be caused by, and therefore twelve possible point mutations you might want to correct with a base editor.

How many of those twelve are within reach of CBE and ABE? Let me walk through it.

A cytosine base editor, CBE, converts C to T. That's one. But — and this is a subtle point — when CBE edits a C on one strand, the G on the other strand becomes an A through the repair process. So if you target a CBE to a sequence where, on the strand you care about, you want G-to-A conversion, you can use a CBE pointed at the other strand. In other words, CBE handles **C-to-T conversion on the edited strand, which is equivalent to G-to-A on the other strand**. Same chemistry, just read from a different angle. So CBE covers two of the twelve: C-to-T and G-to-A.

An adenine base editor, ABE, converts A to G. By the same logic, an ABE pointing at the opposite strand of a target gives you **T-to-C on the strand you care about**. ABE covers A-to-G and T-to-C. Two more.

Total reach of CBE plus ABE: four of the twelve. C-to-T, G-to-A, A-to-G, T-to-C.

\[Pause.\]

Notice something. The four reachable changes are all the same biochemical category. They are all **transitions**. Transitions, in genetics, are mutations between two purines (A and G) or between two pyrimidines (C and T). All four reachable changes are within those categories — purine to purine, or pyrimidine to pyrimidine.

The other eight possible swaps are called **transversions**. They are purine to pyrimidine or pyrimidine to purine. Going from A to T, or A to C, or G to T, or G to C — those are transversions. The two amine groups don't line up. The chemistry of removing one amine and replacing it with the right other group is much harder.

Out of those eight unreachable transversions, the one that everyone wants most is **A to T**. A whole lot of genetic disease — including a class of mutations called nonsense mutations, where an amino acid codon gets converted into a stop codon by a single-base change — would be reversible if we could do A-to-T or its equivalents. We can't. Not with CBE. Not with ABE. Not with the natural chemistry of deamination.

This is one of the central limitations of base editing as a category. **CBE handles two of the twelve. ABE handles two of the twelve. The other eight are unreachable by deamination chemistry.** For those, you need a different technology — and prime editing, which I'll mention in the last segment, is one of the answers Liu's lab has come up with.

\[Pause.\]

Now to be fair, the four reachable transitions are not equally rare in disease genetics. **About sixty percent of known pathogenic point mutations are transitions.** The C-to-T direction in particular is dramatically over-represented in human genetic disease, because methylated cytosines spontaneously deaminate at a non-trivial rate, producing C-to-T mutations as a chronic mutational pressure across evolution. So the fact that CBE plus ABE between them can address roughly half of all known pathogenic point mutations is genuinely huge. We are not painting from the full palette. We are painting from half of it. But the half we have is the half with the most mutations on it.

Let me give you the rough numbers. Of the variants in ClinVar — that's the main public database of disease-associated genetic variants — flagged as pathogenic single-nucleotide variants, roughly thirty to forty percent could in principle be corrected by an adenine base editor and roughly fifteen to twenty percent by a cytosine base editor. Together they cover roughly half. Half of every pathogenic point mutation in a public database is, in principle, within reach of a CBE or an ABE today. That is the scale of what these two tools opened up.

The other half — the transversions — will need different chemistry. Some progress has been made; we'll cover the newer C-to-G base editors in Segment 17. But the basic four-of-twelve fact is the structural limitation of base editing as it stands. Knowing it will save you from making promises base editing can't keep.

---

## SEGMENT 7 — The editing window — Goldilocks zone, positions 4 through 8

Now I want to talk about precision in a different sense. We've talked about which letter changes a base editor can install. The other dimension is: **where exactly does the base editor act**, within the target sequence?

You'll remember that in standard Cas9, the protein cuts at a defined position relative to the PAM — three letters in from the PAM end. That's a sharp, defined cut. Base editing, by contrast, has a window — a region within the target sequence where the deaminase can reach. Not a single position. A small range of positions.

The reason is geometric. The deaminase is tethered to one end of Cas9 — usually the N-terminus, opposite from where the PAM is. The R-loop, that single-stranded loop of displaced DNA, hangs out below Cas9. The deaminase can only reach so far. So it can edit bases that are close to its tether, but not bases that are too close to the PAM (which are at the other end of the R-loop) and not bases that are too far past the end of the R-loop (which are outside the loop entirely).

In practice, for the standard CBE and ABE architectures, **the editing window sits at roughly positions 4 through 8** of the twenty-base target sequence, counting from the end opposite the PAM. Position 1 is the far end. Position 20 is the base immediately next to the PAM. The window — the set of positions where a base in the editable category is likely to be modified — is approximately positions 4 to 8. The bases right at the PAM end of the target, positions 15 to 20, are out of reach. The bases at the very far end, positions 1 to 3, are also poorly edited.

\[Pause.\]

This is the editing window analogy I want you to keep. **The deaminase has only a short reach from the Cas9 nickase, so only bases 4 to 8 from the PAM get touched.** Imagine you are holding a long string with a small magnet attached three inches from the end. The magnet can grab any metal object within an inch of where it dangles. Anything outside that inch — you can wave it around, but the magnet won't reach. The base editor is exactly that. The Cas9 is the string. The deaminase is the magnet. The editing window is the inch where it can reach.

Now this is a constraint, but it is also a designable parameter. You can move the editing window. By engineering different deaminases with different reach geometries, by changing the linker length between deaminase and Cas9, by mutating residues in the deaminase that determine substrate preference, you can produce variants whose window is shifted toward the PAM-distal end, or toward the PAM-proximal end, or narrowed to a smaller region. Liu's lab and others have published dozens of variants with custom windows. The current toolkit lets you choose a base editor whose window aligns with the base you want to edit.

But here is the catch — and we will see it again in Segment 12 when we get to bystander editing. The window is a window, not a point. **If there is more than one editable base in the window, all of them get edited.** If you point a CBE at a target that has two cytosines at positions 5 and 7, both will get converted to T. You can't pick one and skip the other. The deaminase is sequence-context-influenced — it has some preference — but it doesn't reach in and pick out the specific letter you wanted. It edits the ones it can reach. Plural.

This is fundamentally different from how Cas9 cuts. Cas9 cuts at one position. Base editing edits one **window**, with potentially multiple bases changed inside it. That asymmetry is the source of the bystander problem, and it is one of the active engineering frontiers in the field.

\[Pause.\]

Let me also tell you what the editing window looks like from the design end. When a clinician or a research scientist wants to install a particular edit, they go to their target sequence, find the spot where the edit needs to happen, scan outward looking for a PAM, and check whether placing the target so the edit lands in positions 4 to 8 is even possible. Most of the time it is, because PAMs are common. Sometimes it isn't — sometimes there's no PAM placed correctly to put the target base in the editing window — and in those cases the editor either needs a variant of Cas9 with a different PAM (we have several), or the edit needs to be made by a different technology entirely.

So when you read a paper saying "we corrected mutation X with a base editor," what you should hear is: "there was a Cas9 PAM positioned at the right distance from the mutation that we could land it in the editing window, and there were no other bases of the same identity in the window that would have given us bystander edits we didn't want." Every base editor application is constrained by both of those geometric requirements. The reach of the technology is enormous, but it is not yet universal.

---

## SEGMENT 8 — Off-targets — DNA off-targets and the surprise of RNA off-targets

Time to talk about off-targets, because every editing technology has them, and you need to know what they look like for base editors.

There are two main classes of off-target editing with base editors. The first is the one you'd expect, the one we already worry about with Cas9: **DNA off-targets**. The second is one that didn't come up with cutting CRISPR at all, and that took the base editing community by surprise around 2019: **RNA off-targets**.

Let me take them in order.

DNA off-targets in base editing arise the same way they do in Cas9 editing. The guide RNA in a base editor uses the same recognition rules as it does in Cas9 — same PAM requirement, same R-loop formation. If there's a site somewhere else in the genome that matches the guide RNA closely enough — same PAM, similar sequence — Cas9 may bind there too. And if Cas9 binds, the deaminase rides along, and editing happens at the off-target site. The mechanism is exactly what you'd predict.

So everything you learned in the CRISPR lecture about reducing Cas9 off-targets applies to base editors as well. Use high-fidelity Cas9 variants. Use shorter guide RNAs that punish mismatches harder. Use chemically modified guides. Use careful guide RNA design with bioinformatic tools that avoid sequences with close matches elsewhere in the genome. All of that carries over. Multiple high-fidelity base editor variants exist that combine high-fidelity Cas9 modifications — like HiFi Cas9 or eSpCas9 — with the deaminase architecture.

Empirically, DNA off-target editing by base editors is in the same ballpark as DNA off-target activity by Cas9 — usually low at well-designed targets, occasionally significant at problematic ones, manageable with engineering.

\[Pause.\]

Now the RNA off-targets. This one is, scientifically, more interesting, and it's the kind of finding that should make you appreciate why drug development takes so long even after a technology works in a dish.

Here is the issue. The deaminase fused to your Cas9 is a real enzyme. It's not magically inert when it isn't tethered to a target. APOBEC1 deaminates cytosines on single-stranded substrates. TadA-8e deaminates adenosines on single-stranded substrates. As long as they are in the cell, they are doing chemistry on anything they can reach — including the cell's messenger RNAs, which are full of single-stranded regions exposed during translation and processing.

In 2019, two papers — one from Keith Joung's lab and one from Junzhou Wu and Erwei Zuo — reported that base editors edit cellular RNA at thousands of sites genome-wide. Not just the target DNA. Cytosines in mRNAs were being converted to uracils by CBEs. Adenosines in mRNAs were being converted to inosines (which get read as G) by ABEs. The deaminase, riding along on Cas9 in the cell, was acting promiscuously on RNA whenever it ran into a single-stranded substrate it liked.

This was a real concern. Editing thousands of RNA bases all over the cell's transcriptome means you are subtly changing the protein output across many genes. If you do this in a patient's cells, you don't know which changes might cause toxicity, immune reactions, or other unexpected effects. RNA off-target activity went from "issue we didn't think about" to "issue we have to address" in a single year.

The response from the field has been mostly engineering. Several groups, including Liu's, have generated deaminase variants with mutations that **reduce RNA activity while preserving DNA activity**. The trick is that the geometry of how the deaminase grabs a substrate is slightly different for RNA versus DNA — RNA has a 2-prime hydroxyl on the sugar, DNA doesn't — and so it's possible to mutate residues that contact that hydroxyl to disfavor RNA binding without crippling DNA binding. The current generation of clinical base editors, including the ones in Verve's trials, use deaminases engineered for low RNA off-target activity.

\[Pause.\]

A few more things to put on your radar.

There is a class of editing artifacts called **sgRNA-independent off-target editing**, which is the technical name for the RNA editing and, more rarely, for DNA editing at sites that aren't guided by the sgRNA but that the deaminase finds and acts on anyway. The defining feature is that this kind of editing doesn't go away when you change the guide RNA, because it has nothing to do with the guide. It's the deaminase being a deaminase. This is the most insidious form of off-target activity, because the standard "control with a non-targeting guide RNA" experiment doesn't catch it.

There is also the question of **collateral damage during editing** — what happens if Cas9 lingers, the deaminase keeps working, and bases near the target outside the canonical window get nicked or edited at low rates. This is a chronic concern at high doses and long incubations.

And finally there is the question of **immunogenicity** — your immune system recognizing the bacterial Cas9, or even the deaminase, as foreign. We won't dwell on this; it's mostly a delivery problem, and the field has workarounds. But it is on the list of things clinical trials have to monitor for.

The summary is: base editors are dramatically cleaner than Cas9 in terms of indels and large deletions, but they have their own off-target spectrum — DNA off-targets familiar from CRISPR, RNA off-targets newly characterized — and engineering them down has been a major focus of the past five years of work. The current clinical-grade base editors are very, very different beasts from the first BE1 published in 2016. Better deaminases, tighter windows, lower RNA promiscuity, higher fidelity. The technology has matured.

---

## SEGMENT 9 — The first clinical trials — Verve, PCSK9, and a one-shot cholesterol drug

We have spent eight segments on the biochemistry and the engineering. Time to talk about people. The first base editors are now being given to human beings in clinical trials, and the trial I want to anchor this on is **VERVE-101**, run by **Verve Therapeutics**, targeting the gene **PCSK9** to lower LDL cholesterol.

Let me set the scene. PCSK9 — proprotein convertase subtilisin/kexin type 9 — is a protein made by the liver that, when it circulates, binds to LDL receptors on the surface of liver cells and triggers their degradation. LDL receptors are the molecules that pull LDL cholesterol out of the bloodstream into the liver where it can be processed. So if you have a lot of PCSK9, you have fewer LDL receptors, and your blood LDL cholesterol stays high. If you have less PCSK9, you have more LDL receptors, and your blood LDL cholesterol goes down.

This was discovered around 2003 to 2005 through human genetics. Researchers found families with very low LDL cholesterol and identified loss-of-function mutations in PCSK9 that ran in those families. People with these natural variants had LDL levels in the 30s and 40s — about half of normal — and their cardiovascular event rates were dramatically lower. They were essentially walking around with built-in heart attack protection. The genetic experiment had already been done by nature: lose PCSK9, lower cholesterol, lower heart disease risk.

The pharmaceutical industry responded by developing antibody drugs that bind and neutralize PCSK9 — alirocumab and evolocumab, the PCSK9 inhibitors. They work. They lower LDL substantially. The catch is that they have to be injected, typically every two to four weeks, indefinitely, for the rest of the patient's life. And they are expensive. Daily statins remain the workhorse cholesterol-lowering drugs because they are pills, they are cheap, and they are reasonably effective. But statins don't get LDL low enough for many patients, especially patients with familial hypercholesterolemia, where one of the two LDL receptor copies is broken from birth and LDL runs catastrophically high.

\[Pause.\]

Verve's idea was different. Instead of repeatedly injecting an antibody to mop up PCSK9 every few weeks for life, **edit the PCSK9 gene in the liver once, with a base editor, so it stops being made.** One infusion. Lifetime effect. The patient's PCSK9 gene gets a single A-to-G conversion at a splice site, the gene's mRNA can no longer be properly produced, the protein stops being made, the LDL receptors stop being degraded, and the patient's LDL cholesterol drops. Permanently.

VERVE-101 — and the program has since been refined into VERVE-102 and VERVE-201 with different delivery formulations — uses an **adenine base editor** delivered to the liver in **lipid nanoparticles**, the same delivery technology you know from the COVID mRNA vaccines. The lipid nanoparticles are infused intravenously. They home to the liver, where most LNPs naturally accumulate. Inside hepatocytes, they release the mRNA encoding the base editor and the chemically synthesized guide RNA. The cell translates the base editor, the base editor loads the guide, finds the PCSK9 splice site, makes the A-to-G edit. PCSK9 mRNA can no longer be made correctly. Within weeks, the patient's circulating PCSK9 protein levels are dramatically lower, and their LDL cholesterol drops.

The first patient was dosed in 2022, in New Zealand. The early Phase 1b data, reported at the American Heart Association meeting in November 2023, showed dose-dependent reductions in PCSK9 protein and LDL cholesterol in patients with heterozygous familial hypercholesterolemia. At the highest doses, LDL fell by roughly 55 percent, and that reduction has been maintained at follow-up. The trial had a serious adverse event in one patient — a cardiac event that was investigated extensively and judged not to be attributable to the drug itself — but the program is moving forward.

\[Pause.\]

I want you to feel the scale of what this could mean if it works in larger trials. **One shot. Lifetime lower LDL. If it scales, it could replace daily statins for tens or hundreds of millions of people.** Heart disease is the single biggest killer of adults in the developed world. LDL cholesterol is one of the most modifiable risk factors. A one-and-done treatment that durably lowers LDL by 50 to 60 percent in the broad population — if it can be delivered safely and at scale and at a price patients can access — is a public health intervention of enormous potential magnitude.

That is what the first major base editing clinical trial is testing. Not a niche disease for a handful of patients. A program aimed at one of the largest patient populations in medicine. The bet Verve is making is that base editing has matured enough — that the off-targets are low enough, that the delivery is good enough, that the editing efficiency in liver is high enough — to be deployed in adults with a chronic but non-fatal condition. That is a higher bar than treating a fatal disease where the risk-benefit math is more forgiving. If it works, it changes what genome editing is for: not just last resort for the desperate, but routine intervention for the common.

Other base editing programs are running, of course. **CRISPR Therapeutics**, which built Casgevy/exa-cel — the first approved CRISPR-based therapy for sickle cell — uses cutting Cas9, not base editing, for its current approved product. We'll talk about that in the next segment. But Beam Therapeutics has multiple base editing programs in early clinical trials too, including BEAM-101 for sickle cell, which is a base-edited alternative to the cutting Cas9 approach. So the clinical pipeline is real and growing.

That's the first chapter of base editing in patients. PCSK9, liver, LNP delivery, one-shot. We will see how it pans out. But we are no longer talking about a technology in mice and dishes. We are talking about a technology in human beings.

\[BREAK\]

\[This is the planned mid-point break. Stretch, drink water, take questions, come back in ten minutes. When you return, we pick up with the sickle cell story, where base editing is staging its second clinical chapter alongside cutting CRISPR.\]

---

## SEGMENT 10 — Casgevy, exa-cel, and what base editing could replace

Welcome back. I want to spend this segment on the most famous CRISPR therapy in the world right now — **Casgevy**, also known by its development name **exa-cel** — and on why the base editing community is racing to build a base-edited alternative to it, even though Casgevy already works.

Casgevy is the world's first approved CRISPR-based gene therapy, approved by the FDA in December 2023 for sickle cell disease and shortly after for transfusion-dependent beta thalassemia. It was developed by **Vertex Pharmaceuticals** in partnership with **CRISPR Therapeutics**. The strategy is one of the great molecular tricks in modern hematology.

Sickle cell disease is caused by a single point mutation in the beta-globin gene — a glutamic acid to valine change at position 6 of the beta-globin protein — which causes the hemoglobin molecule to polymerize under low-oxygen conditions, distorting red blood cells into the sickle shape that gives the disease its name. Sickled cells clog small blood vessels, causing pain crises, organ damage, and premature death. The obvious therapeutic target is the beta-globin gene itself. Fix the point mutation, restore normal hemoglobin, cure the disease.

But Casgevy doesn't target the beta-globin gene. It targets a completely different gene, called **BCL11A**. Why? Because of an old observation in hematology. Humans make two forms of hemoglobin. Adult hemoglobin uses beta-globin chains — the protein that, in sickle cell patients, carries the disease-causing mutation. Fetal hemoglobin, which we make in utero and for the first few months after birth, uses **gamma-globin** chains, encoded by a different gene that the sickle cell mutation does not affect. After birth, BCL11A gets turned on and represses the gamma-globin gene, switching us over to adult beta-globin. That's why some people with sickle cell disease who happen to have a natural genetic variant that keeps gamma-globin on into adulthood have much milder disease — their fetal hemoglobin compensates for their broken adult hemoglobin.

Casgevy hijacks this. It uses Cas9 to cut a specific spot in BCL11A — an enhancer that drives BCL11A expression in red blood cell precursors — so that NHEJ creates disruptive indels, BCL11A is knocked down in those cells, and gamma-globin stays on into adulthood. The patient now makes fetal hemoglobin in adult red blood cells, which is unaffected by the sickle cell mutation, and the disease is functionally cured. Brilliant. Indirect, but brilliant.

\[Pause.\]

The catch is the process. Casgevy is what's called an _ex vivo_ therapy. The patient's hematopoietic stem cells — the cells in the bone marrow that make all blood cells — are removed from the body, edited in a dish with the Cas9 reagents, then infused back into the patient. Before the infusion, the patient receives high-dose chemotherapy to wipe out their existing bone marrow, making room for the edited cells to engraft. This is the same procedure used in standard bone marrow transplants, and the conditioning chemotherapy carries serious risks — infertility, infection, organ damage, and in rare cases secondary cancers. The whole protocol takes months, requires a hospital stay, and at present costs around 2.2 million dollars per patient.

Now ask yourself the question that motivates the base editing alternative. Casgevy works by Cas9 cutting BCL11A and letting NHEJ make a mess of the cut site. That's the entire point — you want to disrupt the gene. But cutting introduces all the risks we discussed in Segment 2: large deletions, chromosomal rearrangements, p53 activation, even chromothripsis at low rates. Stem cells are a particularly sensitive context because they can divide for the rest of the patient's life. An aberration introduced at the editing step can be carried by every blood cell the patient ever makes.

What if you could **disrupt BCL11A without cutting**? A base editor pointed at the BCL11A enhancer could install a single C-to-T or A-to-G change that disrupts the binding site for the transcription factor that drives BCL11A expression. The functional outcome is the same — BCL11A goes down, gamma-globin comes up, sickle cell is cured — but no double-strand break is ever made. The genome is not torn. The stem cells go back into the patient without any of the rare-but-real risks of cutting.

That is exactly the strategy of **Beam Therapeutics' BEAM-101**, in early clinical trials. Same disease as Casgevy. Same target gene. Different editing chemistry. A cytosine base editor instead of cutting Cas9. The first patients have been dosed; initial results presented at the American Society of Hematology meeting in 2023 and 2024 have shown robust gamma-globin elevation and clinical benefit, with the editing event being a clean single-letter conversion rather than a NHEJ scar.

\[Pause.\]

You can see why this matters. Casgevy is a real therapy and it really cures sickle cell. But it is also a heavy, expensive, risky procedure. If a base-edited version can match its efficacy with lower editing-related risk, simpler manufacturing, and eventually maybe even _in vivo_ delivery without the bone marrow conditioning, it could replace Casgevy. That's the bet behind BEAM-101 and similar programs.

There is also work, at **Boston Children's Hospital** and at academic centers, on directly correcting the sickle cell mutation itself with a base editor — that is, using an adenine base editor to convert the A in the disease codon back toward a near-normal codon. The challenge there is that the available chemistry doesn't perfectly reverse the sickle cell mutation; you can only convert A to G, not G to A, and the sickle cell mutation is in the opposite direction from where ABE goes. So instead, researchers use base editors to convert the sickle mutation into a known **anti-sickling variant** called Makassar — a different naturally occurring beta-globin variant that is benign and that ABE can produce. The patient ends up with Makassar hemoglobin instead of sickle hemoglobin, the red blood cells don't sickle, and the disease is functionally treated.

The sickle cell story is therefore, in the base editing era, a story about multiple competing strategies. Casgevy uses cutting Cas9 to disrupt BCL11A. BEAM-101 uses CBE to disrupt BCL11A without cutting. Makassar-style approaches use ABE to convert sickle hemoglobin to a benign variant directly. All three are running in trials. The next five years will tell us which approach — or which combination — wins on efficacy, safety, and cost.

That is the second clinical chapter of base editing. Same disease as the first approved CRISPR therapy, different chemistry, possibly cleaner outcome. The race is on.

---

## SEGMENT 11 — Beam Therapeutics — Liu's company, and the pipeline

Now I want to step back and talk about the company that exists because of David Liu's lab work, because the institutional context shapes which therapies actually move into trials. The company is **Beam Therapeutics**.

Beam was founded in 2017 by Liu along with Feng Zhang and J. Keith Joung — three of the most prominent names in the modern genome editing field. Liu brought the base editing technology. Zhang brought additional editing platforms and capital networks. Joung brought deep expertise in editing specificity and clinical translation. The company went public in 2020 and has been one of the central players in clinical base editing ever since.

The pipeline tells you what the technology can actually do at present. Beam's leading programs include:

**BEAM-101** for sickle cell disease and beta thalassemia — the cytosine-base-editing program for BCL11A disruption I described in the previous segment. Currently in Phase 1/2 trials.

**BEAM-201** for T-cell acute lymphoblastic leukemia — a multiplex base editing program in which patient T cells are edited with multiple base editors simultaneously to remove multiple immune recognition markers, creating off-the-shelf CAR-T cells. This program is one of the demonstrations that base editing can do **multiplex edits** — editing more than one gene at a time in the same cell, without the catastrophic risk of cutting at multiple sites simultaneously, which can produce translocations.

**BEAM-302** for alpha-1 antitrypsin deficiency — an _in vivo_ base editing program delivered via lipid nanoparticle to the liver, designed to correct the most common pathogenic mutation in the SERPINA1 gene that causes alpha-1 antitrypsin deficiency. This program is one of the cleanest demonstrations of single-letter correction of a specific disease-causing mutation by base editing _in vivo_. First-in-human dosing began in 2024, and early data from 2025 have shown the edit being installed in patient hepatocytes at meaningful efficiency, with corresponding restoration of functional alpha-1 antitrypsin in serum.

**BEAM-301** for glycogen storage disease type 1a — another _in vivo_ liver program, this one targeting a single specific mutation in the G6PC gene.

These are the public programs. Beam has more in earlier development, including programs for the central nervous system, where delivery is hard but where genetic diseases — Friedreich's ataxia, certain epilepsies, certain leukodystrophies — represent enormous unmet need.

\[Pause.\]

The pattern in the pipeline is worth naming. Beam is not just doing one thing. Beam is, in effect, demonstrating that base editing can address several **different kinds** of therapeutic problems with a common platform.

You have _ex vivo_ editing of hematopoietic stem cells for blood disorders — BEAM-101 — where the editing happens outside the body and the patient gets back edited cells. You have multiplex _ex vivo_ editing of T cells for cancer — BEAM-201 — where you're making several precise edits in the same cell to engineer a cell therapy product. And you have _in vivo_ delivery via LNP to liver — BEAM-302 — where the editing reagents are infused into the bloodstream and the patient's own liver cells get edited where they sit.

Three different therapeutic paradigms. One underlying technology. That's the bet Beam is making: that base editing is a **platform**, not a one-off, and that the same chemistry — base editor protein, guide RNA, suitable delivery — can be retargeted across many indications.

Verve, which we met in Segment 9 with the PCSK9 program, is also a base editing company, with significant intellectual property licensed from Liu's lab. Verve's focus is on cardiovascular disease — PCSK9, lipoprotein(a), and other liver-expressed targets that affect cardiovascular risk. So between Beam and Verve and a few smaller players, Liu's lab has effectively spun off a small industry. The base editing field, in clinical terms, is now larger than just the academic group that invented it.

\[Pause.\]

I'll add one observation. The structure of base editing as a clinical platform looks, in some ways, like the structure of the mRNA vaccine platform after 2020. Once you have a base editor that works and a delivery system that works, the marginal cost of going after a new target is low. You design a new guide RNA. You order it from a vendor. You test it in mice. If it works in mice, you can usually move to clinical trials within a couple of years. The same is true of mRNA vaccines: once Moderna and BioNTech had their platforms, generating a vaccine for a new pathogen became a matter of designing a new mRNA sequence and plugging it in.

Whether base editing is going to scale at that vaccine-platform pace remains to be seen. There are real differences. Genome editing has a much higher safety bar — you are making permanent genomic changes, not transient protein expression. Delivery to most tissues remains harder than delivery to liver. Off-targets need to be re-characterized for each new guide. But the platform structure is there. If the bet pays off, the rate at which we develop new genetic therapies could accelerate sharply.

That is the company story of base editing. The lab that invented it has produced two public companies and a clinical pipeline of more than a half-dozen programs in human beings. By the standards of academic-to-clinic translation, this is fast. Cas9 was first published as a tool in 2012. The first base editor was published in 2016. The first clinical trial of a base editor began in 2022. Ten years from concept to patient. That is faster than essentially any prior molecular medicine platform.

---

## SEGMENT 12 — The bystander edit problem — when the eraser is too wide

Now back to the chemistry, because I told you in Segment 7 that we were going to come back to the bystander problem, and this is where we do.

Recall the editing window. The deaminase tethered to nCas9 can reach bases within roughly positions 4 to 8 of the target. Within that window, any base of the right type — any cytosine for CBE, any adenine for ABE — is a substrate. The deaminase doesn't pick. It edits everything it can reach.

This is fine if there's only one editable base in the window. But often there isn't. Often there are two cytosines, or two adenines, sitting within the editing window, and you want to change only one of them. The base editor doesn't know which one you wanted. It edits whatever is in reach. So you get the intended edit at one position, and an **unintended bystander edit** at another position nearby.

\[Pause.\]

Here is the analogy. **The eraser is wide. If there are two Cs in the editing window, both get changed.** Imagine you have a soft, broad pencil eraser, and the word you want to fix is "carve" but you wanted to change it to "narve" — change just the c at the start. You bring your eraser down, and the eraser is wider than one letter. It erases the c, but it also smudges the a next to it. Maybe you can write your new letter cleanly over the c. But the a is now a smudge. You didn't want to change the a. The eraser didn't care.

In a real base editing experiment, bystander edits look like this. You target an A at position 5 of the spacer for an A-to-G edit. There happens to also be an A at position 7, also within the editing window. The deaminase reaches over and edits both. You wanted A-to-G at position 5; you got A-to-G at positions 5 and 7. The position 7 edit is the bystander. Sometimes it's silent — it doesn't change a coded amino acid, or it falls in an intron, or it changes an amino acid that doesn't affect function. Sometimes it's not silent, and you have inadvertently introduced a second mutation alongside your intended one.

For therapeutic applications, bystander edits matter. If you are trying to correct a disease-causing mutation and your base editor also installs an unwanted amino acid change next door, you might have just exchanged one mutation for two. The new mutation might be benign. It might be subtly harmful. It might be unpredictable. Regulators want to know what every off-target and bystander edit does, at what frequency, in patient cells.

\[Pause.\]

How does the field deal with bystander editing? Three strategies.

The first is **target selection**. Before you commit to using a base editor at a specific spot, you look at the sequence and check whether there are bystander candidates within the editing window. If there are, and they would be tolerable — say, they're synonymous changes that don't alter the protein, or they're in noncoding sequence — fine, proceed. If they're not tolerable, you pick a different target spot, perhaps using a different PAM variant of Cas9 to place the editing window differently, or you switch to a different editing strategy altogether.

The second is **narrower-window base editor variants**. Liu's lab and others have engineered base editor variants with much narrower windows — sometimes only one or two bases wide. By engineering mutations in the deaminase that restrict its substrate scope, or by changing the linker, you can produce editors where only the very specific intended position is touched. The trade-off is usually some loss of efficiency: a narrow-window editor edits less efficiently overall, but the editing is more precise.

The third is **deaminase context preferences**. APOBEC1 and the various TadA variants have sequence-context preferences — they prefer to edit cytosines or adenines in certain local contexts. APOBEC1, for instance, prefers TCW contexts, where W is A or T. TadA variants have their own preferences. By choosing a deaminase whose preferences match your target and disfavor your bystanders, you can sometimes get clean editing even in a multi-substrate window.

In practice, all three strategies get used together. A clinical base editing program will spend a lot of design effort picking the right deaminase, the right Cas9 variant, the right guide, and the right precise target spot to minimize bystander editing. By the time a program is in human trials, the bystander spectrum has usually been characterized in cell culture and animal models, and the team can tell you exactly what fraction of editing events install just the intended edit, what fraction also install bystanders at specific neighboring positions, and what the expected protein-level consequences are.

\[Pause.\]

It is worth saying: bystander editing is not unique to base editors. Cas9 itself has off-target editing. Prime editors have their own error modes. ZFN and TALEN editors had theirs. Every editing technology installs the intended change with some characteristic distribution of unintended changes. The base editor's distribution is unusual mostly in that bystander edits sit right next to the intended edit, within a few bases, rather than off elsewhere in the genome. That's a different shape of problem than Cas9's distant off-targets, but it is still a manageable problem, and the engineering has come a long way.

---

## SEGMENT 13 — High-fidelity variants — narrowing the window, taming the deaminase

This is the appropriate place to dive into the **engineered variants** more thoroughly, because the original BE3 and ABE7.10 are now museum pieces. The base editors used in clinical trials today are several generations down the engineering tree from the original publications, and the differences matter.

Let me describe the dimensions along which the field has improved the base editors over the past eight years.

**Efficiency.** ABE7.10, the first adenine base editor, could edit at favorable sites with about 50 percent efficiency in cell culture. ABE8e, several generations later, can edit some sites at 80 to 95 percent. CBEs have followed a similar trajectory. Better deaminases — through additional directed evolution rounds and rational design — have substantially improved the rate at which the intended edit gets installed.

**Window narrowing.** Original BE3 had an editing window roughly five bases wide. Variants like A3A-BE3 and engineered tighter-window deaminases have produced editors whose windows are effectively one or two bases. These are useful when bystander concerns dominate, at the cost of some efficiency.

**PAM relaxation.** Standard SpCas9 requires an NGG PAM. The editing window position depends on where the PAM is. By engineering Cas9 variants with different PAMs — SpCas9-NG, SpRY, others — and by adopting Cas9 orthologs from other bacteria with different PAMs entirely — SaCas9, Cas12a — the field has expanded the set of genomic positions where the editing window can be placed. There are now base editor variants that can land their editing window at almost any genomic position, given enough PAM flexibility.

**Reduced RNA off-targets.** I mentioned this in Segment 8. Engineered deaminases — APOBEC variants with mutations that reduce RNA binding while preserving DNA activity, evolved TadA variants similarly tuned — have brought RNA off-target editing down by orders of magnitude. The current clinical-grade base editors are dramatically cleaner than the first published versions.

**Reduced DNA off-targets.** Combining the base editor architecture with high-fidelity Cas9 variants — eSpCas9, HiFi Cas9, SpCas9-HF1 — reduces guide-RNA-dependent DNA off-target editing. Most current clinical base editors use one of these high-fidelity Cas9 backbones.

\[Pause.\]

The naming convention for base editor variants is, frankly, a mess. The literature is full of acronyms — BE4, BE4max, AID-BE3, A3A-BE3, ABE7.10, ABE8e, ABE9, ABE-V106W, NG-ABE8e, SaABEmax, and on and on. Each one specifies a particular deaminase, Cas9 backbone, and engineering choices. For purposes of this lecture, you do not need to memorize them. You need to know that **the toolbox is large**. If you are designing a base editing experiment and your first choice doesn't have the right window position or the right efficiency or the right specificity, there is almost certainly a variant in the literature that does.

What I do want you to remember is that **the variants are not interchangeable for clinical purposes**. Each variant has its own off-target spectrum that has to be characterized for each new target. Each has its own efficiency curve. Each has its own delivery constraints — some are bigger than others, which matters when you're trying to fit them into a viral vector or formulate them as mRNA in a lipid nanoparticle. Picking the right variant for a clinical application is a careful engineering decision, and once you've picked, you generally don't switch — switching means redoing all the preclinical characterization.

\[Pause.\]

There is one more dimension of improvement worth flagging: **delivery formats**. Base editors are big. The combined APOBEC1-nCas9-UGI fusion is about 1700 amino acids, encoded by roughly 5 kilobases of DNA. ABE is similar. That's too big to fit comfortably into the most popular gene therapy vector, adeno-associated virus, which has a packaging capacity around 4.7 kilobases. The field has gotten around this with several tricks. One is **split intein delivery**: you split the base editor in half, deliver each half on a separate AAV, and the protein halves auto-splice back together inside the cell using a clever protein chemistry tool called an intein. Another is **mRNA delivery via LNP**: instead of encoding the editor in DNA, you deliver mRNA, which doesn't have the packaging constraint. Verve's PCSK9 program uses LNP-mRNA delivery. So does Beam-302.

The delivery format ends up being almost as important to clinical success as the base editor itself. A perfect base editor that you can't get into the right cells does nothing. Delivery is the front line of base editing engineering in 2025.

That's the engineering picture. The base editors in clinical trials today are highly engineered descendants of the original 2016 and 2017 publications, optimized along multiple axes for efficiency, specificity, and deliverability. We are not using BE1.

---

## SEGMENT 14 — Base editing in agriculture — wheat, rice, tomato

Let me leave the clinical sphere for a segment and talk about agriculture, because base editing has been adopted enthusiastically by plant biologists, and the agricultural story is, in many ways, ahead of the clinical story.

Plants are easier targets than humans for several reasons. The regulatory bar is different. The off-target tolerance is different — a few extra edits in a wheat plant matter less than they would in a human patient. And the delivery problem is simpler — plant tissue can be transformed by Agrobacterium or by gene gun, and tissue culture techniques can regenerate whole plants from a few edited cells.

So plant biologists have been deploying base editors against agricultural targets since shortly after the first publications. Let me run through some highlights.

**Wheat.** Wheat is a notoriously hard plant to edit because it is hexaploid — most varieties carry six copies of every gene, three pairs of homologous chromosomes. To knock out a gene, you have to edit all six copies. Cas9 can do this, but at low efficiency. Base editing has been used to convert specific cytosines in wheat genes affecting disease resistance, herbicide tolerance, and grain quality. In 2018, a Chinese group used CBE to install specific point mutations in wheat genes controlling response to a fungal pathogen. The edited plants showed improved resistance. This is essentially impossible to do with conventional cross-breeding in a reasonable time frame, because the genetics are too complex.

**Rice.** Rice has been a major workhorse for base editing in plants. Chinese and Japanese groups have used CBE and ABE to modify genes affecting grain yield, herbicide tolerance, and plant architecture. One particularly clean example: ABE has been used to install single-letter changes in the rice gene OsACC1, conferring resistance to a class of herbicides that previously could not be used safely on rice fields. The base-edited rice plants are functionally indistinguishable from natural mutants except for the precision and speed of how they were generated.

**Tomato.** Base editing in tomato has been used to alter fruit ripening genes, sugar content, and pathogen resistance. One notable program from Sanwen Huang's group in China used base editing to install multiple precise mutations simultaneously across tomato lines to compress decades of breeding into a single generation.

\[Pause.\]

The agricultural use case for base editing has a feature that the clinical use case does not. Many countries — including the United States, Japan, Argentina, and Brazil — have regulatory frameworks under which **a plant edited with CRISPR or base editing, but containing no foreign DNA** is treated as not a transgenic organism. It's not regulated as a GMO. It can be commercialized through the same regulatory pathway as a conventionally bred plant. This is because the final plant is genetically indistinguishable from a plant that might have arisen by natural mutation — the same single-letter change could have happened spontaneously — and the editing reagents are not retained in the final plant.

This regulatory feature has enormous practical consequence. A base-edited herbicide-resistant rice variety can, in many countries, be commercialized without going through the years-long, hundreds-of-millions-of-dollars GMO regulatory pathway. A transgenic herbicide-resistant rice variety, with a foreign gene installed, would face that pathway. Same trait, different regulatory destiny, just because of how the trait was installed.

This has accelerated adoption. In 2021, the first commercial CRISPR-edited food — a high-GABA tomato in Japan — reached the market. It's expected that more will follow. Base-edited rice, wheat, and other crops are in active commercial development. The first generation of these products targets traits like disease resistance, herbicide tolerance, and modest improvements in nutritional content. Future generations are likely to push further.

\[Pause.\]

I will flag one tension you should be aware of. The regulatory distinction between "edited but not transgenic" and "transgenic" is technical, but the public reaction is not necessarily aligned with it. Some consumers and some advocacy groups treat any application of CRISPR or base editing as falling under the same umbrella as conventional genetic engineering, regardless of whether foreign DNA was introduced. The European Union, for example, has historically taken a more cautious regulatory stance, although the legal framework has been actively re-evaluated. Whether the lighter regulatory treatment of edited but non-transgenic plants will hold across jurisdictions, and whether consumer markets will accept these products, are open questions.

For the purposes of this lecture, the takeaway is that base editing in agriculture is real, commercial, and accelerating, with regulatory frameworks in many countries treating edited plants like conventionally bred ones. The technology has moved out of the lab and into the field.

---

## SEGMENT 15 — Base editing in animals — pigs, monkeys, mice, and human disease models

Now to animals. Base editing has been used extensively in animal research, and it has been used in two distinct contexts that I want to keep separate in your mind.

The first context is **creating animal models of human disease**. If you want to study a disease in a mouse, you traditionally engineer a mouse with the relevant genetic lesion — knock out a gene, install a point mutation, whatever — and study its phenotype. Cas9 has been used for this since 2013, with the limitation that Cas9-introduced mutations are NHEJ-generated indels rather than the specific point mutations seen in human patients. Base editing lets you install the **exact** human disease mutation in a mouse, with the actual single-letter change, without indel noise. This produces cleaner, more faithful animal models.

A 2018 paper from Liu's group, in collaboration with the Joung and Anderson labs, used base editing in mouse embryos to install a single point mutation that causes a human metabolic disease. The mice developed the disease phenotype faithfully. Many such studies have followed. Base editing in mouse zygotes is now a routine technique in mouse genetics, allowing precise installation of patient-specific mutations for disease modeling.

The second context is **agricultural and biomedical animal applications** — editing animals not just as research models but for practical purposes.

**Pigs.** Pig genetics has gotten a lot of attention because of the prospect of xenotransplantation — transplanting pig organs into human patients. The main barriers are immunological: pig organs express certain sugars and proteins that human immune systems reject violently. Genome editing has been used to knock out the relevant pig genes. Cas9 has been the workhorse for this so far, but base editing is being used for additional fine-tuning of pig genetics for transplantation. In 2024, a kidney from a genome-edited pig was transplanted into a human patient at Mass General Hospital — a landmark in xenotransplantation. Subsequent transplants have followed.

**Cattle and other livestock.** Base editing has been used to install specific genetic variants in cattle related to disease resistance and meat quality. The polled (hornless) trait in cattle can be installed with base editing, which is welfare-relevant because dehorning is currently done surgically.

**Non-human primates.** And here we get to the most ethically charged application. Monkey models of human disease are sometimes necessary because mouse models do not faithfully recapitulate certain human conditions — particularly neurodegenerative diseases and cognitive disorders. Several Chinese groups have used base editing to install specific point mutations in monkey embryos, generating monkey models of Parkinson's disease, Huntington's disease, and other neurodegenerative conditions. These models are used to study disease mechanism and to test potential therapies.

The ethics of generating non-human primate disease models is contested, and reasonable people disagree about whether the scientific value justifies the harms. I will note the practice exists, that base editing has made it more accessible than it was before, and that anyone seriously studying genome editing as a field needs to grapple with the ethical questions it raises in primate research.

\[Pause.\]

There is one more animal context I want to mention, because it's strange and important: **somatic base editing in living adult animals**. Most base editing in mice happens in zygotes — single-cell embryos that develop into mice with the edit in every cell. But you can also deliver base editors to specific tissues in adult mice — by injection, by LNP, by AAV — and edit those tissues in situ. This is closer to what would happen in a human clinical application.

A particularly striking experiment, from Liu's group in 2020, used adenine base editing in adult mice to correct a single-letter mutation in the dystrophin gene — the gene affected in Duchenne muscular dystrophy. The base editor was delivered systemically by AAV. Dystrophin protein expression was partially restored in muscle. Muscle function improved measurably. This is one of the cleanest demonstrations that base editing can correct a disease-causing mutation in an adult animal in vivo, with functional benefit.

More recent work has extended this to in vivo base editing in the **liver, heart, lung, and central nervous system** of adult animals. The PCSK9 work behind Verve's clinical program came out of exactly this kind of preclinical demonstration: an adenine base editor delivered to adult monkey liver via LNP produced sustained PCSK9 knockdown and LDL lowering, providing the proof of concept that justified moving into human trials.

So the animal story is: base editing is a workhorse in mouse genetics, has been adopted in pig and cattle agriculture and in xenotransplantation, is being used to make non-human primate disease models, and has been demonstrated to work in adult animals for therapeutic applications. The bridge from animal proof-of-concept to human clinical trial is exactly what the clinical programs we discussed earlier have been crossing.

---

## SEGMENT 16 — Mitochondrial base editing — the corner Cas9 can't reach

I want to spend an entire segment on a development I find astonishing — the extension of base editing into a part of the genome that CRISPR cannot reach at all. I am talking about the **mitochondrial genome**, and the technology is called **DdCBE**, also from Liu's lab, published in 2020.

Let me set up why this is interesting. Mitochondria, the organelles in your cells responsible for energy production, have their own DNA. It's a small circular chromosome — about 16,500 base pairs — encoding 37 genes critical for energy metabolism. Mutations in mitochondrial DNA cause a family of severe inherited diseases called **mitochondrial disorders**. MELAS, Leigh syndrome, mitochondrial encephalomyopathies, certain forms of inherited blindness, deafness, diabetes — many of these are caused by point mutations in the mitochondrial genome. They are devastating, lifelong, often fatal diseases, and they are rare but not vanishingly rare. Affecting roughly 1 in 5,000 people.

If you wanted to correct one of these mutations with CRISPR, you would run into a wall. **Guide RNAs do not get into mitochondria.** The mitochondrial membrane has its own protein import machinery, and that machinery is not set up to ferry guide RNAs. Even if you could deliver Cas9 protein into mitochondria — which is itself difficult — you couldn't deliver the guide RNA. And without a guide RNA, Cas9 has no targeting. So CRISPR base editing, in its standard architecture, simply doesn't work in mitochondria.

For a long time, this meant mitochondrial diseases were out of reach for genome editing. We could edit the nuclear genome of patient cells. We could not edit the genome inside their mitochondria. That entire class of disease was locked out of the gene editing revolution.

\[Pause.\]

In 2020, Liu's lab — together with Vamsi Mootha's group at Mass General — published a workaround. The paper, in _Nature_, was titled "A bacterial cytidine deaminase toxin enables CRISPR-free mitochondrial base editing." The technology is called **DdCBE**, which stands for "DddA-derived cytosine base editor."

Here is how it works. The team identified a bacterial toxin called **DddA**, produced by the bacterium _Burkholderia cenocepacia_. DddA is a cytidine deaminase, like APOBEC1 — but unlike APOBEC1, it acts on **double-stranded DNA**. It can deaminate a cytosine in dsDNA without needing the substrate to be in a single-stranded loop. This is unusual; most cytidine deaminases want single-stranded substrates. DddA's ability to work on dsDNA is what makes the whole mitochondrial approach possible, because there is no R-loop in this system to provide single-stranded DNA. We are not bringing Cas9 along.

The targeting, instead, comes from **TALE proteins**. TALEs — transcription activator-like effectors — are DNA-binding proteins from a different bacterial system, with the useful property that you can program their DNA-binding specificity by stringing together short modules, each of which recognizes a single DNA base. TALEs were used as genome editing scaffolds before CRISPR existed; they are bigger and harder to engineer than CRISPR, which is why CRISPR mostly replaced them. But TALEs have one critical feature: they are proteins. They can be delivered to mitochondria by attaching a **mitochondrial targeting sequence**, a short peptide that the mitochondrial import machinery recognizes. The cell's own import machinery hauls the TALE protein into the mitochondrion.

So the DdCBE architecture is: two TALEs, designed to bind on either side of the cytosine you want to edit, each fused to half of a split DddA enzyme, plus a UGI module. The two TALEs land on the mitochondrial DNA at flanking sites, the two halves of DddA come together between them, reconstitute the active enzyme, and deaminate the cytosine sitting in the gap. UGI blocks repair undoing it. The result: a programmed C-to-T edit in mitochondrial DNA, made by proteins that can be imported into mitochondria — without any RNA component, without CRISPR, without Cas9.

\[Pause.\]

This is one of the most creative pieces of genome editing engineering I know of. Read it again. They had a problem — Cas9 can't get into mitochondria. They had a constraint — no guide RNA could ride along even if the protein could. They found a deaminase from a bacterial toxin that works on dsDNA, split it in half so it would only be active when the two halves came together, used TALEs as the targeting modules because TALEs are proteins that can be imported into mitochondria, and built a non-CRISPR base editor that works in the one part of the genome CRISPR can't reach.

The analogy is: **mitochondrial base editing is the corner of the genome that Cas9 can't reach, because guide RNAs don't get into mitochondria — so DdCBE uses TALE proteins instead of Cas9 to deliver the deaminase.** Different targeting technology, different deaminase, same overall concept of a programmable base editor.

DdCBE works. In the original paper, the team showed C-to-T conversion at mitochondrial targets in cultured human cells at substantial efficiency. Subsequent work has extended this to disease-relevant mitochondrial mutations and to animal models. In 2022, multiple groups reported mitochondrial base editing in zebrafish, mice, and pig embryos. Adenine mitochondrial base editing — converting A to G in mitochondrial DNA — has been engineered by combining DddA-like deaminases with the TadA chemistry, producing TALE-based adenine editors for mitochondria. The toolset is rapidly expanding.

The therapeutic implications are still early. Editing mitochondrial DNA in vivo at therapeutic efficiency is hard — mitochondria are present in many copies per cell, you have to edit enough of them to dilute out the disease phenotype, and delivery into the right tissues is challenging. But the technology now exists. For the first time, the mitochondrial genome is editable. That entire class of inherited diseases is, in principle, addressable.

I want you to feel the elegance of the move one more time. The base editing concept — fuse a deaminase to a targeting module — is so general that it can be ported across targeting technologies. Cas9 for nuclear DNA. TALE for mitochondrial DNA. The core architecture is the same. The site of action follows the targeting module. Liu's lab generalized the idea well past its original CRISPR scaffold.

---

## SEGMENT 17 — C-to-G and A-to-C — expanding the chemistry

Now back to the four-of-twelve problem from Segment 6, because in the past several years, the field has begun to expand the chemistry beyond the original deamination repertoire.

Recall: CBE does C-to-T (and G-to-A on the opposite strand). ABE does A-to-G (and T-to-C). That's four transitions. The other eight changes — the transversions — are not within reach of standard deamination chemistry.

But here is a clever observation that the Liu lab and others made starting around 2020. When CBE deaminates C to U in the DNA, there are actually two ways the cell can repair the resulting U:G mismatch. The one we discussed earlier — replicate or repair to install T:A — is the one CBE is engineered to favor, with UGI blocking the alternative pathway. But there is another pathway: if you let UDG remove the uracil but **then** the cell's repair machinery installs a different base at the abasic site, you can sometimes get a C-to-G or even a C-to-A outcome instead of the standard C-to-T. The intermediate — an abasic site, a position in DNA where the base has been removed but the backbone is still intact — is a branch point from which the cell can go multiple ways depending on which repair pathway gets there first.

\[Pause.\]

Liu's lab and several others have exploited this to engineer **C-to-G base editors** — CGBEs — that produce C-to-G outcomes instead of C-to-T. The trick is to deliberately allow UDG to remove the uracil, creating the abasic site, while suppressing certain repair pathways and recruiting others, so that the abasic site gets resolved as G:C instead of as T:A. The architecture typically includes the cytidine deaminase, nCas9, and modulators of base excision repair — sometimes a UNG enzyme included on purpose, sometimes specific DNA repair proteins fused in. The outcome distributions are messier than CBE — you get C-to-T, C-to-G, and C-to-A in some mixture, with engineered variants biased toward C-to-G as the predominant outcome.

The 2020-2021 papers from Liu's lab and from the Erwei Zuo and Liang Xu groups demonstrated CGBE chemistry, and subsequent engineering has produced variants with C-to-G as the dominant outcome at substantial efficiency.

The practical consequence: **C-to-G is now within reach of base editing.** That gives us one more of the twelve possible single-letter changes. Combined with the four transitions, we are now at five-of-twelve. With ongoing work on the equivalent A-to-T and A-to-C chemistries — using adenine glycosylase variants and engineered repair recruitment — the toolkit will likely continue to expand over the next few years.

\[Pause.\]

But here is the honest assessment. The transversion base editors — C-to-G, and the under-development A-to-Y editors — are less clean than the original transition editors. The outcome distributions are messier. The efficiency is lower. The bystander spectrum is broader. For specific clinical applications they may not be ready yet, even when the chemistry is available.

For applications that genuinely require a transversion edit — and there are many disease-causing mutations that fall into this category — there is another technology that has emerged from Liu's lab, called **prime editing**, which I will discuss briefly in the final segment. Prime editing can install any of the twelve possible single-letter changes, plus small insertions and deletions, by an entirely different mechanism. It is harder to deliver, harder to engineer, and slower to reach the clinic than base editing — but it has wider reach.

So if you ask "what is the full toolkit for installing a specific single-letter genomic change without making a double-strand break," the answer in 2025 is: base editing for the easy transitions and C-to-G, prime editing for everything else. The two technologies are complementary. They cover different parts of the design space. The Liu lab built both.

\[Pause.\]

One more observation about chemistry. The development of CGBE and the in-progress development of other transversion editors illustrates something important about how genome editing has matured as a field. The early work — Cas9, base editing — was about finding and adapting natural enzymes for genome editing purposes. The later work — TadA-8e via directed evolution, the engineered transversion editors — is about creating chemistries that don't exist in nature, by mining the natural enzyme world, evolving variants under selection, and combining domains to produce activities we want. We have moved from genome editing as molecular discovery to genome editing as molecular engineering. The pace of new chemistry coming out is now limited by engineering creativity, not by what evolution happens to have made available.

---

## SEGMENT 18 — The frontier — epi-editing, in vivo trials, and prime editing's reach

We are at the final segment. Let me take you to the frontier — three areas where base editing is currently expanding, where active research is rewriting what the technology can do.

First: **epigenetic base editing**. Cellular phenotype is determined not just by DNA sequence but by **chemical modifications** to DNA bases that don't change the sequence — methylation of cytosine being the most famous. Methylated DNA is read by the cell as silenced; unmethylated DNA is read as active. The pattern of methylation across the genome is one of the major levers controlling which genes are expressed in which cell types.

There are now base-editor-style tools that don't change the sequence but instead change the **modification state** of bases at a specific spot. You fuse a DNA methyltransferase to dCas9, target a specific spot, and you can install methylation at that spot. You fuse a DNA demethylase, you can remove methylation. You can install or remove other modifications too. These are sometimes called **epi-editors**, by analogy with base editors, although the chemistry is different. The targeting is the same — Cas9 plus guide. The payload is different — a chromatin or methylation modifier instead of a deaminase.

In 2023 and 2024, several groups published epi-editing tools that can durably silence specific genes by installing methylation patterns that the cell then maintains across cell divisions. **Epigenome editing inc., Tune Therapeutics, and others** are developing these as therapeutic platforms. The advantage is that the DNA sequence is never altered; the disadvantage is that the silencing may not be as permanent as a sequence change. The mechanism is closer to natural gene regulation than to genome editing. The field is rapidly working out which applications are best served by each approach.

\[Pause.\]

Second: **in vivo base editing trials**. We talked about Verve's PCSK9 program and Beam's BEAM-302 for alpha-1 antitrypsin. These are the leading edge of a wave of in vivo base editing programs that will hit the clinic over the next several years. Targets include other liver-expressed genes (many cardiovascular targets, additional metabolic diseases), targets reachable by other LNP formulations as the chemistry improves, eventually possibly targets in muscle, central nervous system, and elsewhere.

The technological gates here are mostly about delivery. The base editing chemistry has matured. Getting the editor reliably into the right cells in the right tissues at the right dose, without off-target distribution and without immune complications — that's where most of the engineering work now lives. Lipid nanoparticles for liver are well-developed. LNPs for other tissues are being engineered. Viral vectors for nervous system are improving. The next decade will be one where delivery technology and editing technology co-mature, and where we learn which combinations work for which diseases.

\[Pause.\]

Third: **prime editing** and the frontier of single-letter editing. Prime editing was published by Liu's lab in 2019, three years after CBE. It is a different architecture entirely. Instead of fusing a deaminase to nCas9, you fuse a reverse transcriptase, and you provide a different kind of guide RNA — a prime editing guide RNA, or pegRNA — that contains both the targeting sequence and a template for the desired edit. The nCas9 nicks one strand, the reverse transcriptase uses the pegRNA template to synthesize a new piece of DNA carrying the edit, and the cell incorporates the edit into the genome.

Prime editing can install any single-letter change. Any of the twelve. Plus small insertions and small deletions. It is the most flexible single-letter editing technology available. The catch is that it is harder to make work efficiently than base editing, the delivery is harder because the construct is larger, and the off-target characterization is less mature. But the field is closing in. Prime editing programs are beginning to enter clinical trials in 2024 and 2025, particularly in academic centers and at a company called **Prime Medicine**.

The relationship between base editing and prime editing in the clinic is going to be one of complementary roles. For the easy transitions where base editing is efficient and clean, base editing will probably remain the workhorse. For the transversions and small indels where base editing struggles, prime editing will likely take over. Each technology has its niche; together they cover most of the design space for single-letter and small genomic edits.

\[Pause.\]

Let me leave you with the synthesis I want you to walk out with.

David Liu's lab took the CRISPR revolution and asked: what if you don't cut? They built two new tools — cytosine base editor and adenine base editor — that change one letter at a time without breaking the double helix. The cytosine editor adapted a natural deaminase, APOBEC1, and overcame the cell's repair machinery with a clever phage-derived inhibitor. The adenine editor required directed evolution of an enzyme that doesn't exist in nature, producing TadA variants that now do chemistry no organism on Earth had ever evolved. Both editors are tethered to nCas9 with a small editing window, both produce clean single-letter outcomes most of the time, and both have moved from publication to mouse to monkey to human in less than a decade.

The technology has spread. Plant biology, animal breeding, mitochondrial editing, in vivo therapy, agriculture, xenotransplantation — base editing is now a workhorse across applications. It has spawned at least two clinical-stage companies, several smaller players, dozens of academic programs, and a chemistry expansion that is now reaching the transversions. Some of the most important medical interventions of the next decade will probably be base editing therapies, in particular Verve's cardiovascular programs if they hold up at scale.

But base editing is also constrained. Four of twelve possible changes only — five now with CGBE. An editing window that is wide enough to make bystander edits a real concern. RNA off-target editing that needs continued vigilance. Delivery that works for liver but is much harder elsewhere. These constraints are why prime editing exists, why epi-editing exists, why the toolbox is being expanded along multiple axes.

If I had to summarize the lecture in one sentence: **base editing changes one letter of DNA without ever tearing the page, and that distinction — between editing and breaking — is what has carried base editors from the bench to patients in under a decade, and what makes them one of the most important new chemistries in modern medicine.**

That's the lecture. Take a break, look back through your notes, and let's open it up to questions.

---

## APPENDIX

### Key dates

- **2012** — Doudna and Charpentier publish the Cas9 mechanism paper. Base editing does not yet exist.
- **2014–2015** — David Liu's lab begins exploring deaminase-Cas9 fusions.
- **April 2016** — Komor, Kim, Packer, Zuris, and Liu publish the first cytosine base editor (BE1, BE2, BE3) in _Nature_. The paper is titled "Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage."
- **October 2017** — Gaudelli, Komor, Rees, Packer, Badran, Bryson, and Liu publish the first adenine base editor (ABE7.10) in _Nature_. The paper is titled "Programmable base editing of A•T to G•C in genomic DNA without DNA cleavage."
- **2018** — Beam Therapeutics founded by David Liu, Feng Zhang, and J. Keith Joung.
- **2019** — Discovery of significant RNA off-target editing by base editors. Engineering response begins. Prime editing also published this year (Anzalone et al., Liu lab).
- **2020** — Mok, de Moraes, Zeng, Sastry, Mootha, and Liu publish DdCBE for mitochondrial base editing in _Nature_.
- **2020** — Beam Therapeutics IPO.
- **2021–2022** — First C-to-G base editors (CGBEs) published.
- **July 2022** — First patient dosed in Verve's VERVE-101 trial for PCSK9 in New Zealand.
- **November 2023** — Verve reports Phase 1b data: dose-dependent LDL reduction in patients with familial hypercholesterolemia.
- **December 2023** — Casgevy (exa-cel) approved by FDA for sickle cell disease, the first approved CRISPR therapy. Casgevy uses cutting Cas9, not base editing, but is the context against which base-edited alternatives (like BEAM-101) are being developed.
- **2023–2024** — BEAM-101 (CBE for sickle cell), BEAM-201 (multiplex base-edited CAR-T), and BEAM-302 (in vivo ABE for alpha-1 antitrypsin deficiency) enter or continue clinical trials.
- **2024** — First human kidney xenotransplant from a genome-edited pig at Mass General.

### Cast of characters

- **David R. Liu** — Harvard / Broad Institute. Inventor of base editing. Founder of Beam Therapeutics and several other companies.
- **Alexis Komor** — First author of the 2016 CBE paper, now PI at UC San Diego.
- **Nicole Gaudelli** — First author of the 2017 ABE paper, now at Beam Therapeutics.
- **Andrew Anzalone** — First author of the 2019 prime editing paper, now at Prime Medicine.
- **Beverly Mok** — First author of the 2020 DdCBE mitochondrial base editing paper.
- **Vamsi Mootha** — Co-author on DdCBE, Mass General and Broad. Mitochondrial biology expert.
- **Frances Arnold** — Caltech. 2018 Nobel Laureate in Chemistry for directed evolution, the methodology that made ABE possible.
- **Sekar Kathiresan** — CEO of Verve Therapeutics, formerly cardiovascular geneticist at Mass General.
- **John Evans** — CEO of Beam Therapeutics.
- **J. Keith Joung** — Mass General. Co-founder of Beam. Specificity and off-target characterization.

### Key terms

- **Base editor (BE)** — A protein fusion of a DNA-modifying enzyme (typically a deaminase) to Cas9 nickase or dead Cas9, plus accessory factors, that installs a single-base change without making a double-strand break.
- **CBE** — Cytosine base editor. Converts C to T (and G to A on the opposite strand).
- **ABE** — Adenine base editor. Converts A to G (and T to C on the opposite strand).
- **CGBE** — C-to-G base editor. Newer variant that converts C to G instead of T.
- **DdCBE** — DddA-derived cytosine base editor. TALE-based, non-CRISPR, for mitochondrial DNA.
- **Deaminase** — An enzyme that removes an amine (-NH2) group from a base. APOBEC1 deaminates cytosine; TadA deaminates adenine.
- **APOBEC1** — A natural mammalian cytidine deaminase used in CBE.
- **TadA / TadA\*7.10 / TadA-8e** — Evolved variants of bacterial TadA, the deaminase used in ABE. The starred and 8e versions are products of directed evolution; they do not exist in nature.
- **UGI** — Uracil glycosylase inhibitor. A small phage protein that blocks the cell from removing uracil from DNA after CBE acts. Essential for CBE efficiency.
- **nCas9** — Nickase Cas9. Cuts one strand instead of two. Used in most base editors to bias repair toward installing the edit.
- **dCas9** — Catalytically dead Cas9. Cuts neither strand. Used in some base editor variants.
- **Editing window** — The range of positions within the target sequence where the deaminase can reach. Typically positions 4 to 8 from the PAM-distal end.
- **Bystander edit** — Unintended editing of a neighboring base in the same editing window as the intended edit.
- **R-loop** — The three-stranded structure formed when the guide RNA pairs with one DNA strand and displaces the other strand into a single-stranded loop. The single-stranded loop is the substrate for the deaminase.
- **Transition / transversion** — Categories of point mutation. Transitions are purine-purine or pyrimidine-pyrimidine (A↔G, C↔T). Transversions are purine-pyrimidine (A↔T, A↔C, G↔T, G↔C). Base editors do transitions and C-to-G; transversions other than C-to-G require prime editing.
- **Chromothripsis** — Catastrophic shattering and chaotic reassembly of a chromosome, sometimes triggered by Cas9 cuts at low rates.
- **Prime editing** — Liu lab technology, 2019, that uses a reverse transcriptase fused to nCas9 and a template-bearing guide to install any single-letter change plus small indels.
- **TALE / DddA** — Targeting protein (TALE) and deaminase toxin (DddA) used in the mitochondrial base editor.
- **LNP (lipid nanoparticle)** — Lipid-based delivery vehicle used to deliver base editor mRNA (and guide) to liver in clinical applications. Same technology family as COVID mRNA vaccines.

### Further reading

- Komor A.C., Kim Y.B., Packer M.S., Zuris J.A., Liu D.R. "Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage." _Nature_ 533, 420–424 (2016). [The original CBE paper.]
- Gaudelli N.M., Komor A.C., Rees H.A., Packer M.S., Badran A.H., Bryson D.I., Liu D.R. "Programmable base editing of A•T to G•C in genomic DNA without DNA cleavage." _Nature_ 551, 464–471 (2017). [The original ABE paper.]
- Anzalone A.V. et al. "Search-and-replace genome editing without double-strand breaks or donor DNA." _Nature_ 576, 149–157 (2019). [Prime editing.]
- Mok B.Y. et al. "A bacterial cytidine deaminase toxin enables CRISPR-free mitochondrial base editing." _Nature_ 583, 631–637 (2020). [DdCBE for mitochondria.]
- Rees H.A., Liu D.R. "Base editing: precision chemistry on the genome and transcriptome of living cells." _Nature Reviews Genetics_ 19, 770–788 (2018). [A solid review by the Liu lab.]
- Newby G.A. et al. "Base editing of haematopoietic stem cells rescues sickle cell disease in mice." _Nature_ 595, 295–302 (2021). [Sickle cell base editing.]
- Musunuru K. et al. "In vivo CRISPR base editing of PCSK9 durably lowers cholesterol in primates." _Nature_ 593, 429–434 (2021). [The preclinical basis for Verve's program.]
- Lim K., Cho S.I., Kim J.S. "Nuclear and mitochondrial DNA editing in human cells with zinc finger deaminases." _Nature Communications_ 13, 366 (2022). [Alternative mitochondrial editing scaffolds.]

### Questions for discussion

1. Imagine you are designing a base editing therapy for a specific point mutation that has been identified in patients. Walk through the design questions you would need to answer before moving to mouse experiments: which deaminase, which Cas9 variant, where to position the editing window, what bystander edits to look for, what off-targets to test, and how to deliver the editor.
2. Verve's VERVE-101 targets PCSK9 to lower LDL cholesterol in patients with familial hypercholesterolemia. Should this kind of one-shot edit ever be offered to people with ordinary high cholesterol who do not have a genetic syndrome — that is, to the broader population at cardiovascular risk? What ethical and practical considerations weigh on the answer?
3. Mitochondrial base editing with DdCBE uses TALE proteins instead of Cas9 because guide RNAs cannot enter mitochondria. What other parts of the cell, or what other targets, might be reachable by reusing the base editing chemistry on a different targeting scaffold? Speculate about what new scaffolds you would want and why.
4. Base editing covers only four of the twelve possible single-letter changes (five with CGBE). For the remaining seven, prime editing is the leading alternative — but prime editing has its own efficiency and delivery challenges. If you were running a biotech company, would you focus your pipeline on base editing programs (faster to the clinic, narrower chemistry) or on prime editing programs (slower, broader chemistry)? What disease portfolio would each strategy favor?
5. Casgevy uses cutting Cas9 and works as a sickle cell cure today. BEAM-101 uses base editing and is in earlier trials. If both prove safe and effective, what would have to be true about cost, durability, off-target risk, and patient experience for a base-edited therapy to displace a cutting-Cas9 therapy that is already approved?
6. The first generation of base editors was published in 2016 and 2017. The first clinical trial began in 2022. Five years from publication of the original tool to first patient. Compare this timeline to the analogous timeline for other genome editing technologies — TALEN, ZFN, Cas9 — and discuss what made base editing translate so quickly.


