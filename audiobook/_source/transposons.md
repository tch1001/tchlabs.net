# Transposons as Genetic Engineering Tools: Sleeping Beauty, PiggyBac, Tol2

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool. This lecture is a companion to our lentivirus and AAV lectures; we will not re-teach those vector systems from scratch. We are here to look at the third great class of integrating gene-delivery tool — engineered DNA transposons — and to compare it head-to-head with viral vectors. The retrotransposon/SVA story is covered separately in the milasen and retroviruses books; today is strictly about DNA-class cut-and-paste transposons that have been domesticated for mammalian gene delivery.

---

## SEGMENT 1 — Jumping genes on a leash

Alright, let's get started. Good morning, everyone. Today, for the next two hours, we're going to talk about transposons — specifically, the small, weird, oddly beautiful class of DNA elements that we have taken out of fish and moth genomes, put on plasmids, and turned into one of the three big competing technologies for permanent gene delivery into a human cell. The other two are lentivirus and AAV, which you've already met. By the end of this lecture, you should be able to explain, to anyone who asks, why a clinical immunologist running a CAR-T trial might choose to put their chimeric antigen receptor on a Sleeping Beauty transposon instead of on a lentivirus, and what tradeoffs that choice carries.

Let me start with the analogy I want you to carry around for the next two hours. A transposon is a **jumping gene** — a stretch of DNA that has the molecular machinery to physically pick itself up out of one location in a genome and drop itself back down somewhere else. Cells generally do not like this. From the cell's point of view, jumping genes are vandals — pieces of DNA that punch holes in your chromosomes, sometimes disrupting essential genes, sometimes turning on cancer genes, sometimes doing nothing at all but always introducing genomic instability. Cells have spent billions of years evolving defenses to silence them. About half of your own genome — yes, half, I'm not exaggerating — is the fossilized graveyard of jumping genes that have been hopping around in our ancestors since before we were mammals, and most of those copies are dead, methylated, silenced, defanged. The cell polices transposons relentlessly.

But here is the trick. If you can find a transposon and rebuild its enzyme — the **transposase** — so that the system actually works, and then put it under your own control, you have something genuinely powerful. You have a piece of DNA that, when you deliver it to a cell, will efficiently and permanently splice itself into the chromosome. No virus required. No packaging cell line. No biosafety level 2 production suite. Just two plasmids — one carrying the cargo, one expressing the transposase — and an electroporator. We have, in effect, taken these wild jumping genes and put them on a leash. They used to threaten genomes; now we walk them where we want them to go.

\[Pause.\]

If you walk out of this lecture in two hours and you can do three things — one, sketch from memory the two-component transposon system, showing the donor plasmid with the inverted terminal repeats flanking the cargo and the helper plasmid expressing the transposase, and explain how the two come together in the cell; two, name and contrast the three workhorse mammalian transposon systems — Sleeping Beauty, PiggyBac, and Tol2 — and tell me what each is good for; three, look at a CAR-T clinical trial announcement that says "Sleeping Beauty platform" and tell a colleague what that means about the manufacturing logistics and the cost — then we have succeeded. Everything else is decoration on those three.

Now, let me frame the why. Why would you ever choose a transposon over a lentivirus? The lentivirus lecture made the case that HIV-derived vectors are the workhorse of integrating gene delivery for very good reasons — they enter non-dividing cells, they integrate durably, they have well-characterized safety profiles, they have decades of clinical track record. So what's left for transposons to do?

The answer comes down to three things. First, **manufacturing**. To make clinical-grade lentivirus, you need a GMP production suite with packaging cell lines, sterile fermentation, ultracentrifugation, titration, lot release — the cost-to-clinic for a lentiviral product can run into the millions of dollars per batch before the first patient is dosed. To make a clinical-grade transposon product, you need two plasmids and an electroporator. The plasmids are made by the same bacterial fermentation we use for any DNA product. That's a dramatic difference. For an academic medical center that wants to manufacture its own autologous CAR-T cells without paying a contract manufacturer, transposons are vastly cheaper. Second, **cargo capacity**. Lentivirus tops out around 8 to 10 kilobases. Transposons — particularly Tol2 — can carry tens of kilobases without much fuss. If you're trying to deliver a large gene, a multi-cistronic cassette, or a regulatory landscape with all its native elements, transposons stretch farther. Third, **non-immunogenicity and no infectious particles**. There's no viral protein in a transposon delivery. There's no envelope to provoke an antibody response. There's no infectious agent at all — the cargo plasmid and the helper plasmid are just naked DNA. For some patient populations and some manufacturing contexts, that simplicity matters.

The price you pay is efficiency. Transposons, even the best of them, do not integrate as efficiently per delivery event as lentivirus does. You have to electroporate, which is harder on cells than viral transduction, and the integration rate per cell is typically lower. So if absolute efficiency is your bottleneck — if you can only get a tiny number of stem cells out of a patient and you need every one of them to take up the gene — lentivirus may still win. But if you have plenty of cells, and what you don't have is money or time, transposons become very attractive.

\[Pause.\]

That's our framing. Now let's actually look at what a DNA transposon is.

---

## SEGMENT 2 — What a DNA transposon actually is: inverted terminal repeats and the transposase

Let me draw the molecular anatomy of a DNA transposon, because it's beautifully simple once you see it.

Picture a piece of DNA, somewhere in the middle of a chromosome. The two ends of the transposon are short sequences, typically 20 to 250 base pairs each, called **inverted terminal repeats**, or **ITRs**. "Inverted" because the sequence at the left end and the sequence at the right end are mirror images of each other — if you read the left ITR 5' to 3' on the top strand, you get the same sequence as if you read the right ITR 5' to 3' on the bottom strand. They're palindromic across the element. These ITRs are the addresses, the recognition sites — they are what the transposase enzyme grabs onto.

In between the two ITRs sits the cargo. In a wild-type, naturally occurring DNA transposon, the cargo is just the **transposase gene** itself — the gene encoding the enzyme that recognizes the ITRs, cuts the transposon out of the donor site, and pastes it into a new site. So a wild transposon is, at its simplest, a self-contained molecular module: two recognition sites at the ends, and the gene for the enzyme that recognizes those sites in the middle. The transposon literally encodes its own machinery. That's the elegance of it — and it's also why, evolutionarily, transposons spread. Every time the transposon jumps to a new genomic location, it carries the transposase gene with it, so it can jump again from the new site whenever the enzyme is around.

Now here is the engineering trick. We split that arrangement in two. We take the **ITRs** and put them on one plasmid — the donor plasmid — flanking whatever cargo we actually want delivered. Maybe a CAR transgene. Maybe a clotting factor. Maybe a fluorescent reporter. The donor plasmid has the ITRs as bookends and our gene of interest sandwiched between them. And then we take the **transposase gene** and put it on a separate plasmid — the helper plasmid — where it's expressed transiently from a strong mammalian promoter. When you co-deliver these two plasmids into a cell, the helper plasmid expresses the transposase enzyme, the enzyme finds the ITRs on the donor plasmid, recognizes them, cuts the transposon out of the donor plasmid, and pastes the cargo permanently into the cell's chromosome. The helper plasmid, having done its job, then gets diluted out as the cell divides — it doesn't integrate, because it doesn't have ITRs flanking its transposase gene. Within a couple of weeks, the transposase is gone from the cell entirely, and what's left behind is just the cargo, stably integrated into the genome, with no transposase activity anywhere to move it again.

\[Pause.\]

This separation between cargo and enzyme is the **two-component system**, and it is the fundamental design pattern of transposon-based gene delivery. Think of it like glue and applicator. You provide both. They self-assemble in the cell. The applicator does its work, then evaporates. The glue stays where it was applied.

Now, mechanistically, how does the transposase cut and paste? The enzyme, once expressed, dimerizes. Two molecules of transposase bind to the two ITRs of the transposon, hold them together to form what's called a **synaptic complex** — picture the two ends of the transposon being pulled into proximity, held there by the bound enzyme. Then the transposase makes a double-strand break at each end, cutting the entire transposon out of the donor plasmid as a single linear DNA fragment with the ITRs at its ends and the bound enzyme still clamped on. That excised transposon-enzyme complex then scans the genome for a target site, the enzyme makes a staggered cut at the target, and pastes the transposon in. The end result: the transposon DNA, with everything between the ITRs intact, is now integrated into the host chromosome. The donor plasmid, which has lost its cargo, is degraded by the cell as junk DNA.

This whole process — cut from one site, paste into another — is what we call **cut-and-paste transposition**. It is the defining mechanism of the DNA transposon class. And it's important to contrast it with the other broad class, the **retrotransposons**, which we cover elsewhere. Retrotransposons work by copy-and-paste — they transcribe themselves into RNA, reverse-transcribe that RNA back into DNA at a new location, and the original copy stays put. One retrotransposon becomes two after it jumps. DNA transposons, by contrast, literally pick up and move — they cut from one site and paste at another, with no net increase in copy number per jump. The cell ends up with the transposon at one location at a time per event. That's a meaningful distinction for genome engineering: DNA transposons, properly designed, give you a clean single-copy integration per event, without amplifying anything.

\[Pause.\]

A few more details about the cut-and-paste mechanism that will matter later. First, after the transposon excises, it leaves behind a **double-strand break** in the donor DNA. The cell repairs that break by non-homologous end joining, and the repair often introduces small insertions or deletions at the site. So the donor location is not necessarily restored cleanly — there's usually a small "footprint" left behind. We'll see in a moment that PiggyBac is special in that it leaves *no* footprint, and that's why people love it for certain applications. Second, when the transposon inserts at the target site, the transposase makes a staggered cut — typically a 2- to 8-base-pair offset, depending on the system — and after the transposon is inserted, the gap is filled in. This produces a small duplication of the target site sequence on either side of the inserted transposon. That target-site duplication is the molecular signature of a transposition event — if you sequence around an insertion site, you can see the duplicated target sequence as proof of how the integration happened. Third, the transposase has some specificity about *where* it pastes — it prefers certain target sequences. Sleeping Beauty mostly prefers TA dinucleotides, PiggyBac specifically requires TTAA, and Tol2 has a more relaxed target preference. Those preferences shape the genome-wide distribution of insertions, which matters for safety, as we'll see in Segment 16.

That's the anatomy and the mechanism. Now let's meet the three big systems that have been domesticated for mammalian work, and we'll start with the one that has the most romantic origin story.

---

## SEGMENT 3 — Sleeping Beauty: the frozen prince

The story of Sleeping Beauty begins in the mid-1990s in Konstanz, Germany, in the lab of Zoltán Ivics and Zsuzsanna Izsvák. The problem they were trying to solve was a deep one. There were lots of DNA transposons known in invertebrates — flies, worms, moths, mosquitoes — and these were powerful tools in those organisms. But in vertebrates, particularly in mammals and fish, all of the DNA transposons people had found were **dead**. They had ITRs, they had transposase genes, but the transposase genes were riddled with stop codons, frameshifts, deletions — the products of millions of years of mutational decay after the transposons had been silenced by the host genome. The fossils were there, but none of the engines would start.

This is, by the way, the normal fate of a DNA transposon in a vertebrate genome. The cell silences the element by methylation, the transposase stops being expressed, selection on the gene relaxes, mutations accumulate, and within a few million years the gene is unrecognizable as functional. It's still detectable by sequence similarity, but the protein it would encode is broken. There's no working DNA transposon in the human genome, for example — every one of them is fossilized. There's none in the mouse genome. None in the rat. None in any vertebrate alive today, with one or two exceptional fish species being the partial exceptions.

So if you wanted a DNA transposon that would work in a mammalian cell — and Ivics and Izsvák did — you couldn't just clone one out of nature. The natural ones were broken. You had to rebuild one.

\[Pause.\]

Their approach was both clever and slightly poetic. They aligned dozens of inactive copies of a particular family of transposons called Tc1/mariner — specifically, the salmonid subfamily — from the genomes of various fish. Every individual copy was broken. But the broken copies were broken in *different places*. One copy had a stop codon at position 50; another had a frameshift at position 200; a third was missing a chunk in the middle. The mutations were distributed randomly across the copies, because each lineage had accumulated its own mutations independently after the original active version went extinct.

If you align all those broken copies and ask, at each position, *what was probably there in the active ancestor before any of the mutations occurred*, you can reconstruct the consensus sequence — the most likely original. At each position, you take the most common nucleotide across the copies. Most of those most-common nucleotides will reflect the ancestral state; the mutations, being independent and rare, won't have hit the same position in every lineage. By voting position by position, you can build a synthetic gene that is your best guess at what the ancestral, *functional* transposase looked like before it went extinct.

Ivics and Izsvák built that consensus sequence in 1996 and 1997 — they synthesized the predicted ancestral transposase gene, paired it with the ITRs from the same family, dropped it into vertebrate cells, and watched. And it worked. The synthesized enzyme, expressed in human cells, recognized the ITRs and cut and pasted the transposon. They had taken a gene that had been dead in nature for somewhere between ten and fifty million years, reconstructed it from fossil sequences, and brought it back to life. The 1997 paper, published in *Cell*, introduced the system, and they named it **Sleeping Beauty** — because, like the fairy-tale princess, it had been asleep in the genome for an age, and they had woken it up. Some sources also note the cute additional pun that the inactive copies looked like a prince frozen in a fossil bed, and the alignment plus consensus reconstruction was the kiss.

\[Pause.\]

Sleeping Beauty became the first DNA transposon that worked efficiently in vertebrate cells, and that fact alone made it explosively useful. Within a few years, labs were using it for stable transgenesis in mouse embryonic stem cells, for gene delivery in cultured human cells, for insertional mutagenesis in mouse genetics, for transgenic zebrafish. The system was a member of the Tc1/mariner superfamily, which meant its target site preference was simple — it inserts into TA dinucleotides, and TA dinucleotides are scattered roughly uniformly across mammalian genomes. So Sleeping Beauty's integration profile is, compared to viral vectors, relatively unbiased. It doesn't strongly prefer transcribed genes, it doesn't strongly prefer promoter regions, it just goes more or less randomly to TA sites. We'll come back to integration site profiles in Segment 9 and Segment 16, but flag that as a notable advantage of Sleeping Beauty over, say, gammaretroviral vectors.

The cargo capacity of the original Sleeping Beauty system is meaningful but not unlimited. The element tolerates inserts of up to about 10 kilobases reasonably well, with efficiency dropping noticeably for larger cargos — the bigger the transposon, the harder it is for the transposase to physically grab both ends and excise the whole thing. That's a real limit, but it's still comparable to lentivirus and meaningfully larger than AAV.

Let's pause on the conceptual point, because it's beautiful. Ivics and Izsvák didn't engineer Sleeping Beauty by random mutagenesis or by computational design. They engineered it by **evolutionary reconstruction** — they used the principle that, given enough fossil copies of a once-functional gene, you can statistically average out the random damage and recover something close to the original. That same principle is now used routinely to reconstruct ancestral enzymes for all kinds of biotechnology applications, but Sleeping Beauty was the first major proof-of-concept that you could resurrect a long-dead gene this way and have it work. The phrase "ancestral sequence reconstruction" appears in textbooks today, and Sleeping Beauty is the canonical example.

That's the first system. Now let's see how Sleeping Beauty went from a useful tool to a *good* one — through directed evolution.

---

## SEGMENT 4 — From SB10 to SB100X: the directed-evolution arc

The original Sleeping Beauty transposase, as reconstructed by Ivics and Izsvák in 1997, is called **SB10** — the "10" reflecting some details of how the consensus was built. SB10 worked, but it wasn't spectacularly active. In human cells, the rate of stable transposition per delivery was maybe a few percent of cells in some assays, lower in others. Good enough to demonstrate the principle. Not great for industrial-scale applications like making CAR-T cells, where you really want to maximize the fraction of cells that end up with the cargo permanently integrated.

So a series of labs, mostly the Ivics-Izsvák group again and collaborators, set out to **make the enzyme better**. The approach was directed evolution — make random mutations across the transposase gene, screen for variants that transpose more efficiently, recombine the best mutations, screen again, iterate. This is essentially the same protein-engineering loop that has been used to improve every other industrial enzyme — only here, the readout is whether a piece of cargo gets stably integrated into a cell's chromosome, which you can measure with a fluorescent reporter or a drug resistance assay.

Over roughly a decade of iterative improvement, the field produced a series of hyperactive Sleeping Beauty variants — SB11, SB12, HSB1 through HSB17, and finally, in 2009, the variant that essentially everyone uses today: **SB100X**. The "100X" denotes that this enzyme is approximately 100 times more active than the original SB10 reconstruction. A hundred-fold improvement is a lot. With SB100X, transposition rates in primary human T cells can hit several tens of percent per delivery, which makes the enzyme genuinely competitive with lentivirus for CAR-T manufacturing.

\[Pause.\]

How did they get to a hundredfold improvement? The SB100X paper, by Mátés, Chuah, Ivics, and Izsvák in 2009 in *Nature Genetics*, reports a screen of essentially the entire transposase coding sequence for mutations that boost activity. The final variant has on the order of ten amino acid substitutions, scattered across multiple domains of the enzyme. Some of the substitutions appear to stabilize the protein. Some appear to enhance its binding to ITRs. Some accelerate the catalytic step itself. The cumulative effect, after combining the beneficial mutations, is dramatic.

The conceptual lesson here is one you should hold onto, because it applies to every engineered protein you'll meet in this course: **the first version of an engineered system is rarely the best version**. Ivics and Izsvák gave us a working transposase in 1997. It took twelve more years of incremental improvement to get to the version that the clinic uses. That trajectory — from proof-of-concept, to incremental optimization, to hyperactive variant suitable for industrial deployment — is the normal arc for any new biotechnology. Don't be fooled into thinking the first published version of a tool is the version you should be using. There's almost always a better one a decade later.

There are also continuing improvements to the ITR side. The original Sleeping Beauty ITRs have been replaced in modern vectors with optimized "pT2" or "pT4" ITRs, which include sequence improvements that increase transposition efficiency further. The combination of SB100X transposase plus optimized ITRs is what's used in essentially every modern Sleeping Beauty application. If you read a clinical trial protocol that says "Sleeping Beauty," they almost certainly mean SB100X plus pT4 or similar.

Now let's meet the second great system, which comes not from a fish but from a moth.

---

## SEGMENT 5 — PiggyBac: the moth gene that leaves no footprint

PiggyBac was discovered by Malcolm Fraser at Notre Dame in the early 1980s, but the story of how it became a vertebrate gene-delivery tool really begins in the 2000s. Fraser was studying baculoviruses — large DNA viruses that infect insects — and he noticed that occasionally, baculovirus genomes picked up extra DNA insertions that had clearly come from the host insect's genome. One of these insertions was a 2.4-kilobase element from the cabbage looper moth, *Trichoplusia ni*. The element had short inverted terminal repeats and a transposase gene in the middle. Fraser named it **PiggyBac**, because it had hitched a ride on the baculovirus genome — riding piggyback, so to speak.

For about twenty years, PiggyBac was an obscure insect transposon. Then, around 2005, several labs independently tested it in vertebrate cells, and to everyone's slight surprise, it worked beautifully right out of the gate. Unlike Sleeping Beauty, PiggyBac had never been a vertebrate transposon, so it hadn't accumulated millions of years of vertebrate-specific suppression — there was no host machinery in mammalian cells that recognized it and silenced it. The natural moth transposase, expressed in human cells, was already pretty active. With some optimization, including a hyperactive variant called **hyPB** developed by Yusa, Bradley and colleagues in 2011, the system became competitive with Sleeping Beauty for most applications.

PiggyBac has two distinctive features that make it special. The first is its **target site**: PiggyBac requires a specific four-base-pair sequence, **TTAA**, at the integration site. It will only insert where there's a TTAA. TTAA sites are common in the genome — they appear on average every couple hundred base pairs, scattered widely — so this isn't a severe restriction. But it does constrain the integration profile in interesting ways. TTAA sites tend to be enriched in certain genomic regions, particularly near transcription start sites and within gene bodies. So PiggyBac, more than Sleeping Beauty, biases toward inserting in or near active genes. We'll come back to whether that's a problem in Segment 9.

\[Pause.\]

The second distinctive feature, and the one that makes PiggyBac unique among all known transposons used in gene therapy, is that it leaves **no footprint** when it excises. Remember from Segment 2 that most transposons, when they jump out of a donor site, leave behind a double-strand break that gets repaired sloppily, often introducing small indels. PiggyBac, when it excises, restores the original TTAA target site exactly. The repair is perfect. You can excise a PiggyBac transposon from a genomic location and end up with the exact same sequence at that location as if the transposon had never been there.

Why does this matter? Because it gives you **reversibility**. If you put a transgene into a cell's genome on a PiggyBac transposon, and later you want to *remove* that transgene, you can — by transiently re-expressing the transposase. The enzyme finds the ITRs, cuts the transposon out, and the cell repairs the gap so cleanly that there's no scar. The cell ends up genomically identical to its starting state, except that it has, during the interim, been transformed by whatever the transgene was doing.

This footprint-free excision is what made PiggyBac the star tool for **iPSC reprogramming**, which we'll cover in detail in Segment 13. The short version: to make induced pluripotent stem cells, you have to deliver the Yamanaka reprogramming factors — Oct4, Sox2, Klf4, c-Myc — to a somatic cell. If you deliver them on a lentivirus, you get permanent integration of the reprogramming cassette, which is a safety problem because c-Myc is an oncogene. If you deliver them on a PiggyBac, you can integrate them long enough to do the reprogramming, then excise the entire cassette cleanly and end up with iPSCs that have no leftover transgenes in their genomes. That's a huge advantage for making clinical-grade pluripotent stem cells.

\[Pause.\]

The PiggyBac analogy I want you to remember: the TTAA target site is the **bookmark**. Wherever there's a TTAA in the genome, the transposase can grab and insert the cargo. And when the cargo is later removed, the bookmark is restored — the TTAA reappears, untouched, as if the page had never been folded. Sleeping Beauty's TA sites are also bookmarks in a sense, but Sleeping Beauty's are smudged on the way out — the TA gets damaged by the repair after excision. PiggyBac's bookmarks are pristine. That difference is what makes PiggyBac the scarless choice.

PiggyBac's cargo capacity is also somewhat larger than Sleeping Beauty's — it can handle inserts of up to about 14 kilobases reasonably efficiently, and somewhat larger if you're willing to accept a drop in efficiency. So for moderately large cargos that don't quite fit in a lentivirus but where you don't need to go all the way to Tol2's enormous capacity, PiggyBac sits in a useful middle range.

Now let's meet the third system, which is the cargo champion.

---

## SEGMENT 6 — Tol2: the medaka fish transposon with enormous cargo capacity

The third major mammalian-active transposon system comes from another fish — the medaka, *Oryzias latipes*, a small freshwater Japanese fish that has been used as a model organism for over a century. In the late 1990s, Koichi Kawakami, working at the National Institute of Genetics in Mishima, Japan, identified a DNA transposon in the medaka genome called **Tol2**. Tol2 is a member of the hAT (hobo-Activator-Tam3) superfamily, a different evolutionary lineage from both Sleeping Beauty's Tc1/mariner family and PiggyBac's standalone lineage. So Tol2 brings a third, independent enzymology to the table.

Tol2 is unusual among vertebrate-derived DNA transposons in that the natural copies in the medaka genome are still active. Most DNA transposons in vertebrates, as we discussed, are dead fossils. Tol2 is an exception — Kawakami was able to clone an autonomous, functional copy directly out of the medaka genome, no consensus reconstruction required. That makes Tol2 easier to engineer in some ways, because you don't have to guess at the ancestral sequence; the active version is right there.

Tol2's killer feature is its **cargo capacity**. The standard Sleeping Beauty system handles up to about 10 kb comfortably. PiggyBac extends to about 14 kb. Tol2 can carry, with reasonable efficiency, transposons of **over 50 kilobases** — and even up to about 200 kilobases in some BAC-based applications, though efficiency drops at the high end. That's an enormous payload. It's larger than any single mammalian gene other than truly massive ones like dystrophin, and it lets you carry not just a coding sequence but an entire regulatory landscape — promoter, enhancers, introns, polyA signals, even multi-gene cassettes — within a single transposon.

\[Pause.\]

Why does Tol2 tolerate such large inserts? The honest answer is we don't fully know, but the working hypothesis involves the geometry of how the transposase grabs the ends. Some transposases require their ITRs to be in fairly close proximity for the synaptic complex to form efficiently, which limits how much DNA can be between them. The Tol2 transposase appears to be more tolerant — it doesn't care as much how far apart the ITRs are; it just needs to recognize them. That looser geometry lets you pack much more in.

Tol2 has been a workhorse of zebrafish transgenesis for two decades. If you want to make a transgenic zebrafish with a complex genetic construct — for example, a tissue-specific reporter that uses native enhancers to mark a particular cell type during development — Tol2 is the standard tool. You inject Tol2 transposon plus transposase mRNA into a fertilized zebrafish egg, the transposon integrates somewhere in the embryo's chromosomes, and the resulting fish carries the transgene stably into adulthood and the germ line. The technique is so robust and standardized that essentially every developmental biology lab working in zebrafish uses Tol2 routinely.

In mammalian cells, Tol2 is less dominant than Sleeping Beauty or PiggyBac, mostly because the original transposase wasn't quite as efficient in human cells out of the box. Hyperactive variants have been engineered — the most recent generation, sometimes called Tol2 Variant or hyperTol2, is competitive. But for most non-large-cargo mammalian applications, Sleeping Beauty or PiggyBac remain the defaults. Tol2 comes into its own when you specifically need to deliver a large payload — say, a complete genomic locus with all its regulatory elements — or when you're working in a model organism like zebrafish where Tol2 is the lingua franca.

\[Pause.\]

The conceptual point: the three systems — Sleeping Beauty, PiggyBac, Tol2 — are not redundant. They each occupy a slightly different niche.

Sleeping Beauty: the most uniform integration profile across the genome, the most clinical-trial history, the largest installed base in CAR-T applications.

PiggyBac: footprint-free excision for reversible integration, moderate-to-large cargo, the iPSC reprogramming favorite, the choice when you may want to remove the cargo later.

Tol2: the cargo champion, the zebrafish standard, the choice when you absolutely need to carry a very large payload.

If you have one cargo and one application, you pick the system that matches your constraints. If you're building a generalist gene-delivery toolkit, you keep all three on the shelf. Now let's look more carefully at the molecular architecture you actually use in the lab — the two-component delivery system.

---

## SEGMENT 7 — The two-component system: donor plasmid and helper plasmid

Let me draw this out in detail, because the two-component design is the practical centerpiece of how you actually use these systems in a lab or a clinic.

You have two plasmids. They are physically separate pieces of DNA. They are usually prepared by routine bacterial maxiprep — grown in *E. coli*, harvested, purified by column or by cesium chloride gradient if you need ultra-high purity. There's nothing exotic about the production; this is plasmid biology you already know from the plasmids lecture.

The first plasmid is the **donor plasmid**, sometimes called the transposon plasmid. Its architecture, walking from one end to the other, is: bacterial backbone (origin of replication, antibiotic resistance for growing it in *E. coli*), then a left ITR, then your cargo (promoter + transgene + polyA signal, or a multi-cistronic cassette, or whatever you want delivered), then a right ITR, then back to the bacterial backbone. The two ITRs flank the cargo. The bacterial backbone — the origin and the resistance gene — sits outside the ITRs and never gets transposed; it stays on the donor plasmid and gets thrown away after the transposition has happened.

The second plasmid is the **helper plasmid**, sometimes called the transposase plasmid. Its architecture is much simpler: bacterial backbone, then a strong mammalian promoter (typically CMV or CAG), then the transposase coding sequence, then a polyA signal. No ITRs. The transposase gene is just expressed transiently from this plasmid; it does not get integrated into the genome because it's not flanked by ITRs.

\[Pause.\]

Now think about what happens after you deliver both plasmids to a cell. The standard delivery method for primary cells is electroporation — you pulse the cells with a brief high-voltage electric field that transiently permeabilizes the membrane, and the plasmids diffuse into the cytoplasm. From the cytoplasm, both plasmids traffic to the nucleus, partly by passive diffusion and partly because they have sequence elements that engage cellular nuclear import machinery.

Once inside the nucleus, the helper plasmid gets transcribed. The transposase mRNA travels back to the cytoplasm, gets translated into transposase protein, and the protein traffics back to the nucleus — transposase has its own nuclear localization signal built in. Now the transposase protein is in the same compartment as the donor plasmid. It scans the donor plasmid, finds the ITRs, dimerizes, brings the two ITRs together into a synaptic complex, makes the double-strand breaks at each end of the transposon, and excises the entire cargo as a free linear DNA fragment bound by transposase. Then the enzyme-DNA complex scans the genome for a target site — a TA dinucleotide for Sleeping Beauty, TTAA for PiggyBac, a relaxed target for Tol2 — and integrates the transposon at one such site.

That's one round. In practice, in a single cell you get one or a small handful of integration events, scattered across different chromosomes — the transposase is promiscuous about *which* TA or TTAA site it picks, so each integration ends up in a different location. After a few days, the helper plasmid runs out of fuel — its mRNA gets degraded, the protein gets degraded, the plasmid itself gets diluted out as the cell divides — and transposase activity disappears. From that point on, the integrated cargo is stable. There's no enzyme around to move it again.

\[Pause.\]

There's an alternative formulation that's increasingly used clinically, particularly for CAR-T applications: instead of delivering the transposase as a plasmid, you deliver it as **mRNA**. The helper "plasmid" is replaced by in-vitro-transcribed messenger RNA encoding the transposase. The cell takes up the mRNA, translates it directly in the cytoplasm, and the protein goes to work just as it does in the plasmid-based system. This has two advantages: first, no risk that the helper plasmid itself integrates somewhere (it's not flanked by ITRs, so the risk is already low, but mRNA delivery eliminates it entirely); and second, the transposase pulse is more transient, because mRNA gets degraded within a few hours, while plasmid DNA can persist for days. A shorter transposase pulse means a tighter window of activity, which reduces the chance of late, off-target events. The Sleeping Beauty CAR-T platform used in the SBcellect and CARAMBA trials uses mRNA-delivered SB100X transposase, paired with the cargo on a minicircle DNA donor.

\[Pause.\]

There's one more refinement worth mentioning: the **minicircle**. A standard donor plasmid contains the bacterial backbone — origin, resistance gene, regulatory elements — alongside the transposon. That bacterial DNA does not get integrated, but it can provoke immune responses in target cells, particularly through unmethylated CpG motifs that look like bacterial DNA to the innate immune system. To reduce that immune response, you can convert the donor plasmid into a **minicircle** — a small circular DNA that contains only the transposon (ITRs plus cargo), with the bacterial backbone removed by an enzymatic recombination step before delivery. Minicircle technology has become standard for clinical Sleeping Beauty applications, and the cleaner DNA gives better expression and lower toxicity in primary T cells.

Two plasmids, or one minicircle plus mRNA, depending on the application. Either way, the design pattern is the same: cargo and enzyme on separate molecules, both delivered together, the enzyme excises and pastes the cargo, the enzyme then evaporates. Donor and helper, glue and applicator.

Now let's compare this entire approach to viral vectors head-on.

---

## SEGMENT 8 — Why a transposon, not a virus? The advantages

Let me lay out the case for transposons over viral vectors explicitly, because if you're a clinician or a developer making the choice for a new program, this is where the decision lives.

**First advantage: manufacturing cost and simplicity.** To make clinical-grade lentivirus, you need a packaging cell line — usually HEK293T grown in suspension culture under GMP conditions — co-transfected with three or four plasmids, harvested over multiple days, concentrated by ultracentrifugation or tangential flow filtration, titered, sterility-tested, lot-released. The whole process takes weeks and costs millions of dollars per batch. To make clinical-grade transposon reagents, you need bacterial fermentation of two plasmids, plasmid purification by chromatography, and either standard DNA quality control or, for the helper component, mRNA synthesis. That's it. The same bacterial fermentation that makes any clinical plasmid product makes your transposon donor and helper. The cost-to-clinic is at least an order of magnitude lower, often more.

For an academic medical center that wants to manufacture autologous CAR-T cells on-site without paying a contract manufacturer, that cost differential is the whole game. The MD Anderson group running Sleeping Beauty CAR-T trials makes the point explicitly: they can manufacture a patient's CAR-T product on-site, in their own GMP suite, for a fraction of the cost of a virally-produced commercial product, because they don't need a virus suite. The cost-to-clinic argument is the single most important commercial driver of clinical interest in Sleeping Beauty.

**Second advantage: no packaging size limit, within reason.** Lentivirus tops out at about 8 to 10 kilobases of cargo. AAV is much more restrictive at about 4.7 kilobases. Transposons — even Sleeping Beauty, the most constrained of the three — handle 10 kilobases routinely, and PiggyBac and Tol2 extend significantly larger. If you need to deliver a big gene, or a multi-protein cassette, or a gene with its native regulatory elements, transposons stretch farther.

**Third advantage: no infectious particles, ever.** A lentiviral vector is a virus. Even though it's replication-incompetent, it is biologically an infectious particle. It enters cells, it integrates DNA, it can in principle be inhaled or absorbed by personnel. Manufacturing facilities have to be biosafety level 2. Disposal protocols have to handle the virus appropriately. With a transposon, none of this applies. The reagents are DNA and protein. There's no infectious particle in the manufacturing process or in the final product. The biosafety burden is dramatically reduced.

**Fourth advantage: less pre-existing immunity.** Many patients have pre-existing antibodies against AAV capsids — particularly for the common serotypes like AAV2 — which can block transduction or, worse, cause adverse reactions to a viral product. Lentivirus-related immunity is less of a problem because the vector enters cells before the immune system gets a clear look at it, but anti-VSV-G antibodies can develop after repeat dosing. Transposons have no viral capsid. There's no pre-existing immunity in any patient. You can re-dose the same patient with the same cargo and the same transposase without immunological complications.

**Fifth advantage: speed of iteration.** If you want to change your cargo — swap the CAR for a different target, add a co-stimulatory domain, change a promoter — with a viral system, you have to go through the whole packaging and titering pipeline again. Weeks. With a transposon, you reclone the donor plasmid in bacteria, prep new DNA, and you're ready to test in a few days. For early-stage research and for fast clinical iteration, the agility of the transposon system is genuinely useful.

\[Pause.\]

These are real advantages. Let me give you the vs-lentivirus analogy I want you to walk away with: **transposons are like skipping the cookie factory and just delivering the dough and the recipe**. With lentivirus, you have a big industrial bakery that takes weeks to set up and produces a thousand identical cookies that you then ship out. With transposons, you skip all that. You hand the cell two ingredients — a donor and a helper — and you let the cell bake the cookies in-house. The cost-to-clinic is dramatically lower because you don't pay for the factory.

Now the question is, what do you give up? Because nothing this good comes free.

---

## SEGMENT 9 — The disadvantages: efficiency, integration bias, delivery

Here's the honest accounting. Transposons are not a free lunch. There are real reasons that lentivirus remains the dominant clinical integrating vector despite all the advantages I just listed.

**First disadvantage: efficiency.** Even with hyperactive variants like SB100X and hyPB, the rate at which a cell that has received the donor and helper plasmids ends up with a stable integration is lower than the rate of lentiviral transduction at high MOI. With a state-of-the-art Sleeping Beauty CAR-T protocol, you might get 20 to 40 percent of T cells to express the CAR stably. With an optimized lentiviral CAR-T protocol, you can reach 60 to 80 percent or more. The gap has narrowed dramatically over the past decade, but it has not closed.

For some applications, that gap doesn't matter. CAR-T cells expand enormously after infusion — even starting from 20 percent CAR-positive cells, the CAR-positive population will outgrow the negative cells in the patient because the CAR-positive ones are the ones doing the killing and getting the cytokine signals. So you don't need a high starting fraction. But for applications where starting cell number is precious — say, hematopoietic stem cell gene therapy, where the patient has only so many CD34-positive cells in their bone marrow — every percentage point of efficiency matters, and lentivirus still wins.

**Second disadvantage: delivery method.** Transposons enter cells as naked DNA. To get naked DNA across a cell membrane, you have to use electroporation, nucleofection, or in some cases lipid-based transfection. All of these methods are harsh on cells — electroporation kills a substantial fraction of cells during the pulse, and surviving cells often take days to recover. Lentivirus, by contrast, enters cells through receptor-mediated fusion, which is biologically gentle — the cell barely notices. For fragile cell types, particularly primary hematopoietic stem cells, the harshness of electroporation is a real disadvantage. You lose cells in the process.

\[Pause.\]

**Third disadvantage: integration site bias.** This is the one we have to discuss carefully, because it has safety implications.

Different transposon systems have different preferences for where in the genome they insert. Sleeping Beauty, as I mentioned, prefers TA dinucleotides, and TA sites are scattered fairly uniformly across the genome. So Sleeping Beauty's integration profile is the most random of the three — its insertions are distributed across the genome with only weak preferences. There's still some bias toward open chromatin and active regions, but compared to most other systems it's modest. Sleeping Beauty is the cleanest transposon from an integration-site-safety standpoint.

PiggyBac requires TTAA, and TTAA sites are not uniformly distributed. They're somewhat enriched near transcription start sites and in gene bodies. PiggyBac's integration profile, as a result, has a meaningful bias toward inserting in or near active genes. That's not necessarily catastrophic, but it does mean PiggyBac insertions are statistically more likely to land near a regulatory region of a real gene than Sleeping Beauty insertions are. If you happen to integrate near a proto-oncogene's promoter, you could in principle disrupt its regulation.

Tol2 has the loosest target preference of the three, but it shows a bias toward intronic regions and transcription start sites as well.

\[Pause.\]

For comparison: lentivirus prefers the bodies of actively transcribed genes — it tends to land somewhere in the middle of an active gene, often in an intron. This is generally considered relatively safe, because integration into the middle of an intron usually doesn't disrupt the gene's expression, and the integrated provirus has its own SIN-modified LTRs that don't drive expression of neighboring genes. Gammaretrovirus, by contrast, preferred to integrate right at transcription start sites and right next to promoters, which is exactly what made the SCID-X1 trial go wrong — gammaretroviral LTRs sitting next to the LMO2 promoter switched LMO2 on and caused leukemia.

Where do transposons sit on the safety spectrum? Roughly: Sleeping Beauty is comparable to or somewhat safer than lentivirus, by virtue of its more random integration profile. PiggyBac is a little riskier, by virtue of its TSS bias. Both are clearly safer than gammaretrovirus. There has been one published case of suspected insertional oncogenesis in a Sleeping Beauty preclinical mouse experiment, but no clinical events to date in the human Sleeping Beauty CAR-T trials, even with years of follow-up across hundreds of patients. So the empirical safety record, while still much shorter than lentivirus's, is encouraging.

The bottom line on disadvantages: transposons are less efficient than lentivirus per delivery event, harsher on cells during delivery, and carry a small theoretical integration-site risk that's mostly comparable to viral vectors. None of these is a showstopper. All of them are real considerations. The choice between transposon and virus for any given application depends on which set of tradeoffs matters most for the specific situation.

\[Pause.\]

\[BREAK — One hour mark. Take 5 to 10 minutes. When you come back, we will spend the second half of the lecture on specific applications — CAR-T manufacturing, mouse genetics, iPSC reprogramming, CRISPR-associated transposases, and the commercial landscape of who is actually building this in the clinic.\]

---

## SEGMENT 10 — Sleeping Beauty CAR-T: the affordable cell therapy

Welcome back. Let me start the second half of the lecture with what is, I think, the most important application of engineered transposons in the clinic today — CAR-T cell therapy made using Sleeping Beauty.

Quick recap on CAR-T cells, since this lecture isn't focused on them. A chimeric antigen receptor — CAR — is a synthetic receptor you put on a patient's T cells to redirect them against a tumor. The receptor combines an antibody-derived extracellular domain that recognizes a tumor antigen, a transmembrane region, and intracellular signaling domains that activate the T cell when the receptor binds its target. You harvest the patient's T cells, you introduce the CAR gene into those cells so they express the receptor stably, you expand the cells in culture, and you infuse them back into the patient. The CAR-expressing T cells then find and kill the patient's cancer.

For CD19-targeted CAR-T against B-cell leukemias and lymphomas, this approach has produced some of the most dramatic responses in the history of cancer therapy — durable complete remissions in patients with previously refractory disease. The first commercial CAR-T products, Kymriah from Novartis and Yescarta from Kite, were both approved by the FDA in 2017. Both use lentiviral or gammaretroviral vectors to deliver the CAR gene to T cells.

The problem with lentiviral CAR-T, from a commercial perspective, is **cost**. Kymriah's list price at launch was $475,000 per patient. Yescarta's was $373,000. Most of that cost is the manufacturing — the GMP lentivirus production, the cell engineering, the QC. The viral manufacturing alone, before any cell handling, can run a hundred thousand dollars or more per patient.

\[Pause.\]

Enter Sleeping Beauty. If you can deliver the CAR gene with two plasmids and an electroporator instead of with a lentiviral vector, you cut the manufacturing cost dramatically. The MD Anderson Cancer Center group, led by Laurence Cooper, was the first to bring Sleeping Beauty CAR-T into human clinical trials. Their approach, sometimes called the "non-viral CAR-T platform," uses SB100X transposase delivered as mRNA, combined with a CAR transgene on a minicircle DNA donor with Sleeping Beauty ITRs. T cells are harvested from the patient, electroporated with both reagents, expanded for a couple of weeks in culture with antigen stimulation, and infused.

The first MD Anderson trials of SB-based CD19 CAR-T, published in the early 2010s, showed both feasibility and clinical activity in patients with relapsed B-cell malignancies — comparable response rates to viral CAR-T products, but with dramatically lower manufacturing cost. Subsequent trials have refined the protocol and extended the approach to other targets.

The comparison I want you to internalize: lentivirus is like a delivery van that you have to manufacture in a dedicated factory before every shipment. Sleeping Beauty is two plasmids and an electroporator. The plasmids come from the same bacterial fermentation that makes any plasmid product. The electroporator costs as much as an industrial freezer. The total capital expenditure to set up a Sleeping Beauty CAR-T manufacturing capability is a small fraction of what it costs to set up lentiviral manufacturing. For an academic medical center, for a country without a domestic biopharma industry, for any context where cost-to-clinic is the binding constraint, Sleeping Beauty is the answer.

\[Pause.\]

The commercial landscape around Sleeping Beauty CAR-T has been turbulent. Ziopharm Oncology, which had licensed the MD Anderson Sleeping Beauty technology, has had multiple corporate changes — it went through bankruptcy and reorganization in the early 2020s and emerged as Alaunos Therapeutics, then went through further changes. Precision BioSciences took a different non-viral approach using ARCUS gene-editing nucleases rather than transposons. Cellectis used TALEN-based gene editing. The competitive landscape for non-viral CAR-T is complicated, with several technologies — transposons, ARCUS, TALEN, CRISPR, plus newer delivery methods like lipid nanoparticles — all competing to be the platform that displaces viral CAR-T on cost.

What's settled, though, is that Sleeping Beauty CAR-T works. The clinical responses are real. The manufacturing economics are real. The platform is here to stay even if the specific commercial entities continue to shuffle.

---

## SEGMENT 11 — CARAMBA, SBcellect, and the European Sleeping Beauty clinical effort

Let me tell you about two specific clinical trials that have shaped the European Sleeping Beauty CAR-T landscape, because they illustrate how the technology is being deployed outside the United States and what the clinical results actually look like.

**CARAMBA** stands for "CAR T cells for the immunotherapy of multiple myeloma using Sleeping Beauty." It's a European Union-funded consortium trial, coordinated out of Würzburg, Germany, by Hermann Einsele and colleagues, that uses Sleeping Beauty to manufacture autologous CAR-T cells targeting SLAMF7, an antigen expressed on multiple myeloma cells. The trial opened around 2020 and has been enrolling patients with relapsed or refractory multiple myeloma. Early results, presented at European Hematology Association meetings, have shown safety and clinical activity comparable to viral CAR-T programs targeting BCMA, the other major myeloma antigen. The manufacturing is done in-house at academic GMP facilities at participating European sites, leveraging exactly the cost advantage we just discussed — these are publicly-funded trials at academic centers, and the lower cost of Sleeping Beauty manufacturing is what makes them feasible.

**SBcellect** is a related effort, a Sleeping Beauty platform initially developed by Ivics, Izsvák, and collaborators with the explicit goal of clinical translation. It encompasses optimized SB100X transposase mRNA, optimized minicircle donors with pT4 ITRs, and standardized manufacturing protocols designed to be deployable in academic GMP facilities without requiring viral vector production capabilities. The system has been licensed to multiple commercial and academic partners and forms the basis of several ongoing trials.

\[Pause.\]

The conceptual point worth emphasizing: the Sleeping Beauty clinical effort has been driven substantially by **public funding and academic infrastructure**, not by commercial biopharma. The EU Horizon 2020 grant funding CARAMBA, the German federal grants supporting Sleeping Beauty development, the academic GMP facilities at Würzburg and elsewhere — this is a different funding model from the commercial CAR-T programs that brought Kymriah and Yescarta to market. The cost advantage of Sleeping Beauty is part of why this academic-driven model is viable. You can run a publicly-funded CAR-T trial out of a university hospital because the manufacturing cost is low enough that academic budgets can absorb it. You probably could not do that with lentiviral CAR-T at commercial scale.

That's a meaningful structural observation about how cell therapy gets developed. Lower manufacturing costs open new actors. They open new countries. They make academic medical centers viable as their own CAR-T manufacturers, which changes who gets to play in the field. The implications go beyond cost-per-dose; they go to who has the standing to develop new cell therapies at all.

\[Pause.\]

Now let's leave the clinic for a few segments and look at the other big application of transposons — basic research. Specifically, mouse genetics.

---

## SEGMENT 12 — Mouse forward genetic screens: finding cancer driver genes by random insertion

There's a classic problem in cancer biology that goes like this. You have a mouse model of cancer — say, a mouse that develops T-cell leukemia. You can see the disease. You can study the tumors. But you don't know which mutations, out of the dozens or hundreds present in each tumor, are actually *driving* the cancer versus just along for the ride. The mutations a cancer cell carries are a mix of drivers — mutations that genuinely cause the cancer phenotype — and passengers — mutations that happened to occur in the same cell but don't contribute to malignancy. Distinguishing them is a hard problem.

One powerful approach: **insertional mutagenesis with transposons**. Here's the idea. You build a transposon that contains strong promoters and splice acceptors and other regulatory elements designed to disrupt or activate genes wherever it inserts. You put this transposon, along with its transposase, into a transgenic mouse. The transposon hops around the genome at random, landing in different genes in different cells. In most cells, the insertion doesn't matter — the disrupted gene isn't important. In a small fraction of cells, the insertion happens to land in or near a gene that, when disrupted or activated, gives the cell a growth advantage. Over months, those rare cells with growth-promoting insertions expand into tumors.

You then take the tumors, sequence the transposon insertions in each one, and ask: which genes do the insertions hit *more often than expected by chance*? Those genes are statistically enriched as targets of transposon insertion across many tumors — which means they're the genes whose disruption or activation contributed to tumor formation. They're the drivers.

\[Pause.\]

This approach was pioneered by Adam Dupuy, Nancy Jenkins, Neal Copeland, and others, initially using a Sleeping Beauty system engineered specifically as an oncogenic mutagen. The transposon was loaded with strong viral promoters and splice acceptors that would activate downstream oncogenes or disrupt tumor suppressors when inserted. The mouse models that arose from this approach — particularly the SB-T2/Onc and SB-T2/Onc2 lines — generated thousands of tumors across many tissue types, and the meta-analysis of insertion sites identified hundreds of new candidate cancer driver genes, many of which had not been previously implicated in cancer.

A consortium effort called **SLIM** — Sleeping beauty for Large-scale Insertional Mutagenesis — and various other large-scale efforts including ones using PiggyBac built comprehensive catalogs of insertion sites across tumor types. The PiggyBac systems were used particularly for solid tumor models, because PiggyBac's TTAA target preference and slightly different bias profile complemented Sleeping Beauty's. Between the two systems, the field generated something like the equivalent of a CRISPR screen for cancer — except using transposons as the mutagen, in vivo, in real tumors, in real mice.

This work directly contributed to the identification of cancer driver genes that were subsequently validated as relevant in human cancers and, in some cases, became drug targets. The transposon-driven mouse genetics, in other words, fed directly into human oncology drug development. That's a powerful example of how a basic-research application of transposons can have eventual therapeutic impact.

\[Pause.\]

The conceptual analogy: imagine you have a haystack — the mouse genome — and a single rare needle hidden in it, where the needle is a cancer driver gene. Looking for the needle by sequencing every gene is hard because every tumor has many incidental mutations. Looking for the needle by transposon insertion is easier, because if you generate enough tumors with random transposon insertions, the genes that get hit repeatedly across independent tumors *are* the needles — by definition, those are the genes where disruption gives a growth advantage often enough to be statistically detectable. The transposon turns a needle-in-haystack problem into a counting problem.

That's mouse forward genetic screens. Now let's look at another famous application — making induced pluripotent stem cells without leaving any leftover transgenes.

---

## SEGMENT 13 — PiggyBac and footprint-free iPSC reprogramming

Induced pluripotent stem cells, iPSCs, were introduced by Shinya Yamanaka in 2006. The basic discovery: if you take a differentiated cell — say, a fibroblast from a patient's skin — and force-express four transcription factors (Oct4, Sox2, Klf4, and c-Myc, often called the Yamanaka factors), a small fraction of those cells reprogram all the way back to a pluripotent state, indistinguishable from embryonic stem cells. From those iPSCs you can then re-differentiate into any cell type — neurons, cardiomyocytes, hepatocytes, whatever you need. This is the foundation of a vast amount of modern regenerative medicine and disease modeling research.

In the original 2006 work and many subsequent applications, the Yamanaka factors were delivered using viral vectors — typically gammaretrovirus or lentivirus — which integrate the factor genes permanently into the genome. This gets the job done, but it leaves you with iPSCs that have multiple integrated copies of strong viral promoters driving Yamanaka factor expression. For research applications this is acceptable; for any clinical application, it's a problem. c-Myc is an oncogene. You don't want a clinical iPSC product, or anything differentiated from one, to carry permanently integrated c-Myc cassettes that could potentially reactivate.

So there was a big push, starting around 2008 and continuing through the early 2010s, to develop **footprint-free** reprogramming methods — ways to get the Yamanaka factors into a cell long enough to do the reprogramming but then remove them entirely. Several approaches emerged: episomal plasmids that don't integrate (used by Yamanaka's group in 2008-2009), Sendai virus that's purely cytoplasmic and doesn't enter the nucleus, mRNA reprogramming, and — the approach we care about today — **PiggyBac**.

\[Pause.\]

The 2009 paper from Andras Nagy's group at Mount Sinai in Toronto, and parallel work from Allan Bradley and Kosuke Yusa at the Sanger Institute, demonstrated PiggyBac-based iPSC reprogramming. The approach: put all four Yamanaka factors on a single PiggyBac transposon, deliver it with PiggyBac transposase, get stable integration, get the cell to reprogram into an iPSC. Then — and here's where the footprint-free part comes in — re-express the transposase. The transposase finds the ITRs flanking the Yamanaka cassette, excises the entire cassette, and the TTAA target site is restored without scar. You select for cells that have lost the transposon (you can include a selection marker that becomes toxic when the cells are switched to certain media, so only cells that have excised the cassette survive), and you end up with iPSCs that have been reprogrammed but no longer carry the integrated reprogramming cassette.

The end-state iPSC is, at the genomic level, indistinguishable from one that had never received any transgene — except for the TTAA site that briefly hosted the cassette, which is restored to its original sequence. No leftover c-Myc. No constitutive promoters. No safety risk from re-expression of the Yamanaka factors. For clinical-grade iPSC manufacturing, this footprint-free property is enormously valuable.

\[Pause.\]

The analogy I want you to hold: PiggyBac iPSC reprogramming is **deliver the package, do the reprogramming, then take the package back**. You use the transposon to deliver the Yamanaka factors. Once the cell has reprogrammed — once the endogenous pluripotency genes are switched on and self-sustaining — you don't need the transgene factors anymore. The cell maintains its own pluripotency. So you re-express the transposase, the transposon excises cleanly because the target site is restored to its pristine TTAA, and you end up with a clean iPSC that has all the reprogramming benefit and none of the genomic baggage.

This footprint-free property is, in fact, the dominant reason researchers use PiggyBac over Sleeping Beauty for reprogramming. Sleeping Beauty can also do reprogramming, but the excision leaves a small footprint at the donor site, and that residual genomic damage — even if it's only a few base pairs — disqualifies the cells from being truly footprint-free. PiggyBac's scarless excision is what wins this application.

Now let's look briefly at the model organism use case, which is dominated by Tol2.

---

## SEGMENT 14 — Tol2 and zebrafish: large-cargo transgenesis for developmental biology

Zebrafish, *Danio rerio*, has been a major vertebrate model organism for developmental biology since the 1980s. The fish embryos are transparent, develop externally in a few days, and are easy to inject with reagents. You can watch organs form in real time under a microscope. For studying vertebrate development — heart, brain, blood, eye, kidney — zebrafish is unbeatable.

To do modern zebrafish genetics, you need to be able to make transgenic fish — fish carrying foreign DNA stably in their germline. The dominant tool for this, for the past two decades, has been Tol2.

The workflow: take a Tol2 transposon plasmid carrying your transgene of interest — typically a tissue-specific promoter driving a fluorescent reporter, like GFP under a neuron-specific promoter — and co-inject it with transposase mRNA into a one-cell-stage zebrafish embryo. The transposon integrates into the chromosomes of the early embryonic cells. As the embryo develops, the integration is propagated to all the descendant cells. You raise the embryo to adulthood, breed it, and screen its offspring for ones that inherited the integrated transgene. Within a generation or two, you have a stable transgenic line that expresses your reporter in the tissue of interest.

Tol2's large cargo capacity is critical here. Many developmental biology applications require not just a coding sequence but a large genomic regulatory landscape — the promoter, multiple enhancers, introns — to drive tissue-specific expression faithfully. These regulatory landscapes can be tens of kilobases. With Tol2, you can put all of that in a single transposon and get stable integration. With Sleeping Beauty or PiggyBac, you'd hit cargo limits.

\[Pause.\]

The conceptual point: different transposons have different niches, and Tol2 owns the niche of "big payload, low constraints on cargo size." For zebrafish developmental biology, that's exactly what's needed. The community has converged on Tol2 the way it's converged on lentivirus for many mammalian applications — not because Tol2 is perfect, but because it's the standard, the protocols are mature, and everyone knows how to use it.

A side note: similar large-cargo transgenesis works in *Xenopus*, in chickens, in some agricultural fish species — Tol2 is broadly active across vertebrates. So the system has applications wherever you need to put a large transgene into a non-mouse vertebrate. The medaka transposon has, in effect, become the universal vertebrate transgenesis tool.

Now let's look at the most exciting recent development in the transposon field — the discovery that some CRISPR systems are themselves transposase-related, and that this opens the door to *programmable* transposition.

---

## SEGMENT 15 — CRISPR-associated transposases (CAST): programmable jumping

In 2019, two independent groups — Sam Sternberg's lab at Columbia and Feng Zhang's at the Broad — independently published the discovery of a remarkable hybrid: bacterial CRISPR systems that, instead of cleaving target DNA, *insert a transposon* at a CRISPR-guided target site.

Here's the system. Some bacterial transposons of the Tn7 family contain not just a transposase but also several CRISPR-associated proteins — Cas6, Cas7, Cas8, and various others — that together form what's called a Cascade complex. Cascade is the same complex that, in canonical Type I CRISPR systems, recognizes a target DNA sequence specified by a guide RNA and then recruits a nuclease to cleave it. But in these Tn7-associated systems, instead of recruiting a nuclease, Cascade recruits the *transposase*. The result is that the transposon inserts at the CRISPR-targeted site.

Think about what this means. In a conventional Type II CRISPR system — Cas9 plus a guide RNA — you can direct the Cas9 nuclease to make a cut at any DNA sequence specified by a 20-nucleotide guide. That's how CRISPR gene editing works. In a CAST system — CRISPR-Associated Transposase — you can direct an *insertion* at any sequence specified by the guide. Instead of cutting the DNA, you're inserting cargo at a programmable location.

\[Pause.\]

This is potentially huge. If you can develop CAST systems that work efficiently in human cells, you have a new class of gene-delivery tool: site-specific integration of a payload, programmable to any target site you want, with the cargo capacity of a transposon. That's a different beast from either lentivirus (random integration) or AAV (no integration). It would be the best of all worlds: programmable specificity plus integration.

The 2019 papers demonstrated the basic feasibility in bacterial cells. Subsequent work over the next several years has tried to port the systems to mammalian cells, and progress has been real but slow. The systems are inefficient in human cells out of the box — efficient enough to detect transposition, but not yet efficient enough to be a competitive gene-delivery tool. There has been substantial engineering effort, including engineering smaller, more compact CAST systems based on different bacterial sources, optimizing the guide RNAs, optimizing the protein components.

As of when this lecture is current, CAST systems in mammalian cells are research-stage. They are not yet a clinical tool. But the conceptual breakthrough is enormous, and the trajectory of progress suggests that within a few years, programmable transposition will be a real option in the gene-delivery toolkit.

\[Pause.\]

The analogy: conventional transposons jump *somewhere* — they pick their target sites based on simple sequence preferences (TA, TTAA), but they don't let you choose where. CAST systems jump *exactly where you tell them to*. They combine the cargo-carrying capacity of a transposon with the programmable targeting of CRISPR. If they can be made efficient enough in mammalian cells, they may eventually displace both random-integration tools (transposons, lentivirus) and non-integrating tools (AAV) for many applications.

Now let's come back to a safety question we've been circling around — how exactly do transposon integration sites compare to lentivirus, and what's the actual safety profile in the clinical experience to date?

---

## SEGMENT 16 — Integration site safety: comparing SB and PB to lentivirus and the LMO2 lesson

Let me come back to the central safety question for any integrating gene-delivery vector: where does it land, and could it cause cancer by accidentally activating an oncogene or disrupting a tumor suppressor?

The cautionary tale that the field never forgets is the SCID-X1 trial in the early 2000s. Gammaretroviral vectors carrying the gamma-chain cytokine receptor gene were used to treat boys with X-linked severe combined immunodeficiency. The treatment was clinically effective — most of the boys were cured of their immunodeficiency. But four of them, several years later, developed T-cell leukemia. Investigation traced the leukemias to gammaretroviral integrations that had landed near a gene called LMO2, an oncogene whose expression had been switched on by the gammaretroviral LTR. The LTR's enhancer reached over to the LMO2 promoter, activated it, and the cell began over-expressing LMO2, which contributed to malignant transformation.

This event reshaped the entire integrating-vector field. It led to the development of self-inactivating (SIN) lentiviral vectors, where the LTR enhancer is deleted so it can't activate nearby genes. It led to insertion-site analysis becoming a routine part of vector characterization. And it led to extreme scrutiny of any new integrating vector for its integration site preferences.

\[Pause.\]

How do transposons compare on this scale? Let me give you the empirical answer.

**Sleeping Beauty**'s integration profile, based on extensive analysis from multiple groups, is the most random of the three transposons we've covered. It distributes insertions across the genome with only modest preference for any particular feature. It does not strongly prefer transcription start sites the way gammaretrovirus did. It does not strongly prefer active gene bodies the way lentivirus does. It just goes more or less to TA sites, which are everywhere. From a pure integration-site-randomness standpoint, Sleeping Beauty is arguably the safest of the integrating vectors.

**PiggyBac**, with its TTAA preference, is more biased — TTAA sites are somewhat enriched near transcription start sites, so PiggyBac insertions are statistically more likely to land near a regulatory region. PiggyBac is not as random as Sleeping Beauty, but it's still less biased toward dangerous sites than gammaretrovirus was.

**Lentivirus**, as a comparison, prefers active gene bodies — usually inside introns — and has SIN-modified LTRs that don't drive expression of neighboring genes. This combination means lentiviral insertions, even when they land in active genes, usually don't cause transcriptional dysregulation of those genes.

**Tol2** sits somewhere between PiggyBac and lentivirus in its integration profile.

\[Pause.\]

What about the clinical experience to date? The Sleeping Beauty CAR-T trials, accumulating hundreds of patients over more than a decade, have not produced any reported insertional oncogenesis events. The PiggyBac iPSC applications, mostly used for research-grade rather than clinical-grade cells, have likewise not produced reported events. This is encouraging, though the sample size is still much smaller than the lentiviral experience.

The conceptual takeaway: **integration site safety is empirical**. You can predict, based on integration profile, that certain vectors should be safer than others. But you can't truly know until you have years of clinical follow-up across many patients. The lentiviral safety record, with decades of follow-up across thousands of patients across multiple indications, is the gold standard. The transposon safety record is shorter but encouraging. The CAR-T context, where the integrating cells are short-lived effector T cells rather than long-lived stem cells, is also more forgiving — even if an insertion landed near an oncogene in a T cell, that T cell would mostly die after eliminating its target, so the malignant clone would not necessarily persist.

For the long-lived stem cell applications, the situation is more delicate. Hematopoietic stem cells live for the patient's lifetime, and a malignant clone arising from a stem cell integration can take decades to manifest. This is why lentivirus remains the gold standard for stem cell gene therapy — its safety record is the longest, and its integration profile in stem cells is well-characterized. Transposons have not yet displaced lentivirus for hematopoietic stem cell applications, partly because the safety case has not yet been made over a long-enough timescale.

\[Pause.\]

Bottom line: transposons appear to be at least as safe as lentivirus on integration-site grounds, possibly somewhat safer for Sleeping Beauty, possibly somewhat less safe for PiggyBac due to its TSS bias. The empirical clinical record is short but clean. There is no known event of insertional oncogenesis from a clinical transposon application as of this lecture's currency. That's good news. It is not a guarantee.

Let's now look at who is actually building these systems commercially, because the landscape is more turbulent than the science would suggest.

---

## SEGMENT 17 — The commercial landscape: Ziopharm, Alaunos, Adaptimmune, and the academic platform

Let me walk you through who has actually built transposon-based products and what their commercial history looks like, because it tells you something about the maturity of the field.

**Ziopharm Oncology** was the company that, throughout the 2010s, was most prominently associated with bringing Sleeping Beauty CAR-T to commercial development. Ziopharm had licensed the MD Anderson Sleeping Beauty technology and announced ambitious plans to develop a portfolio of non-viral CAR-T products. They generated clinical data — particularly with a CD19-targeting Sleeping Beauty CAR-T product — and demonstrated feasibility. But the company struggled financially. There were management changes, strategic pivots, and ultimately financial restructuring. Ziopharm rebranded as **Alaunos Therapeutics** in 2022, then continued to face commercial pressures, going through further restructuring and ultimately winding down most of its clinical programs.

The lesson is uncomfortable but important: **a working technology does not automatically produce a successful company**. Sleeping Beauty CAR-T worked clinically. The manufacturing cost advantage was real. But Ziopharm/Alaunos struggled to translate that into a commercially viable product, partly because the established lentiviral CAR-T products — Kymriah, Yescarta, Breyanzi, Carvykti — had moved fast and captured the market, and partly because the cost advantage of Sleeping Beauty, while real for academic manufacturing, was harder to translate into a commercial pricing advantage at scale.

\[Pause.\]

**Adaptimmune** is a different story. Adaptimmune is a UK-based T-cell engineering company that has used various integration approaches, including Sleeping Beauty in some of its programs, alongside lentiviral approaches. Their flagship product, Tecelra (afami-cel), an engineered TCR-T cell therapy for synovial sarcoma, was approved by the FDA in 2024 and uses lentiviral integration. So Adaptimmune is not purely a transposon company, but transposons have been part of their technology stack.

**Cellectis** uses TALEN-based gene editing rather than transposons for their off-the-shelf CAR-T platform — a different approach to non-viral cell engineering. They are part of the broader competitive landscape for cost-effective cell therapy manufacturing, alongside transposon-based approaches.

**Precision BioSciences** uses their ARCUS gene-editing nuclease for similar purposes — directing genomic insertions and edits without viral vectors. Again, competing on the same cost-reduction thesis as transposons, but using a different molecular technology.

\[Pause.\]

In addition to these commercial entities, the **academic platforms** built around Sleeping Beauty deserve mention as commercial actors in their own right. The Ivics-Izsvák lab, originally at the Max Delbrück Center in Berlin, has developed extensive licensing arrangements with multiple partners. The MD Anderson program continues to develop Sleeping Beauty CAR-T products under various structures. The European CARAMBA and related consortium efforts continue to produce clinical data.

So the commercial picture is heterogeneous. There is no single dominant transposon-based commercial entity in the way that BioNTech and Moderna dominate mRNA therapeutics. Instead, there is a distributed network of academic platforms, regional consortia, and intermittent commercial vehicles that come and go. Whether this is a sign of immaturity or simply a different commercial model — more dispersed, more academic, more publicly-funded — depends on your perspective.

What's not in doubt is that the technology itself continues to mature, and the underlying advantages — manufacturing cost, cargo capacity, no infectious particles — continue to be real. Even if no current company captures dominant market share, the platform is unlikely to disappear. The next decade may see consolidation, or it may see continued fragmentation. Either way, transposons will continue to be a real option in the integrating-vector toolkit.

Now let's close with a look at where the field is going — what's beyond Sleeping Beauty, PiggyBac, and Tol2.

---

## SEGMENT 18 — Frontiers: serine integrases, programmable transposition, AAV-transposon hybrids

We are running short of time, so let me spend the final segment on three frontiers that, in my opinion, will define the next decade of integrating-vector engineering.

**First: engineered serine integrases.** The serine integrases are a family of bacterial enzymes — Bxb1 from a mycobacteriophage, phiC31 from a *Streptomyces* phage, and several others — that, unlike transposases, integrate DNA at very specific target sequences called *att* sites. The enzyme recognizes an attB site (a short sequence) and an attP site (the complementary partner), brings them together, and recombines them, with the result that DNA carrying the attB site gets stably inserted at the attP site. The integration is site-specific — at one well-defined location — rather than random.

In the natural bacterial systems, the attP sites exist in the bacterial chromosome and the attB sites are carried by the integrating DNA, or vice versa. In mammalian engineering applications, attP sites are introduced into specific safe-harbor loci in the genome (for example, the AAVS1 site, a well-characterized safe-harbor locus on chromosome 19), and then any payload carrying an attB site can be integrated there using the cognate integrase.

Bxb1 has emerged in the past several years as a particularly useful serine integrase for mammalian work. It's been used in CAR-T engineering, in iPSC line construction, in synthetic biology applications. Combined with CRISPR-based site introduction — first use CRISPR to put attP sites at safe-harbor loci, then use Bxb1 to insert payloads at those sites — you get a remarkably clean two-step engineering platform. The payload can be very large, and the integration is at exactly one predefined location with very low off-target activity.

phiC31 has a similar profile and has been used for years for transgenic engineering applications. There's been work on engineered serine integrases — modified versions with improved efficiency or altered target specificity — and this work is accelerating.

\[Pause.\]

**Second: programmable transposition through CAST.** We covered this in Segment 15 — the discovery of CRISPR-associated transposases that can be guide-RNA-directed to insert payloads at specified target sites. As CAST systems become more efficient in mammalian cells, they will compete with serine integrases as programmable-integration platforms. CAST has the advantage that the target can be any genomic site specified by a guide RNA, rather than requiring pre-installed att sites. The challenge is efficiency — CAST systems are still far less efficient in mammalian cells than they are in their native bacterial hosts.

There's also active research on combining CRISPR Cas9 nuclease activity with template-directed integration through engineered systems — prime editing, twin-prime editing, PASTE (programmable addition via site-specific targeting elements), and various other emerging platforms. These collectively represent a new generation of programmable-integration tools that occupy the conceptual space between traditional CRISPR gene editing and traditional transposon delivery.

\[Pause.\]

**Third: AAV-transposon hybrids.** A recently emerging direction is to combine the cell-entry advantages of AAV with the integration advantages of transposons. The idea: deliver the transposon donor and helper not as plasmid DNA but as AAV-packaged DNA. AAV is great at getting DNA into cells in vivo — it can be administered systemically, it crosses some tissue barriers, it can target specific organs. But AAV cargo doesn't normally integrate, so its expression dilutes out in dividing tissues. By packaging a transposon inside an AAV capsid, you potentially get the best of both: efficient in-vivo cell entry via AAV, plus stable integration via the transposon.

Several groups have demonstrated this in mice — AAV-delivered Sleeping Beauty or PiggyBac in vivo, with subsequent stable integration in the liver and other tissues. The data are early but encouraging. If this approach matures, it could open new in-vivo gene therapy applications that are out of reach for either pure AAV (because of dilution) or pure transposon (because of delivery limitations).

\[Pause.\]

Putting these frontiers together: the next-generation integrating-vector toolkit will likely include random-integration transposons (Sleeping Beauty, PiggyBac, Tol2) for applications where random insertion is acceptable; site-specific integrases (Bxb1, phiC31) for applications requiring predefined integration sites; CAST systems for fully programmable integration once efficiency catches up; and hybrid systems (AAV + transposon, lentivirus + integrase, etc.) that combine the strengths of multiple platforms.

The era of "viral vector or nothing" is ending. The era of integrating-vector specialization — where you choose your tool based on the specific demands of your application — is well underway.

\[Pause.\]

Let me end with the framing I want you to walk out with. Transposons are domesticated jumping genes. We took elements that used to threaten genomes — that the cell has spent billions of years policing — and we put them on a leash. We gave them addresses (the ITRs), we rebuilt their engines (the transposases, often resurrected from fossil sequences or harvested from non-vertebrate hosts), and we put them under our control in a two-component system. The result is a class of integrating gene-delivery tools that compete with viral vectors on cost, on cargo capacity, on manufacturing simplicity, and on accessibility.

Sleeping Beauty woke up in 1997, from a salmonid fossil sequence, by the kiss of consensus reconstruction. PiggyBac came piggyback from a moth via baculovirus. Tol2 came from a medaka fish, the cargo champion. SB100X was the directed-evolution upgrade. CARAMBA and SBcellect brought Sleeping Beauty CAR-T to the European clinic. Mouse forward genetic screens with SB and PB identified hundreds of cancer driver genes. PiggyBac iPSC reprogramming gave us footprint-free pluripotent stem cells. Tol2 in zebrafish gave us large-cargo transgenesis. CAST systems are giving us programmable transposition. Bxb1 and phiC31 are giving us site-specific integration. AAV-transposon hybrids are giving us in-vivo delivery with stable integration.

The whole field is, in retrospect, a sustained demonstration of a single principle: **the cell's own threats, properly engineered, become the cell's own tools**. The jumping gene that used to vandalize the genome now delivers therapy to it. The molecular machinery that evolution built to spread parasitic DNA, when domesticated, becomes the machinery we use to spread therapeutic DNA. The same biology, repurposed.

That's the lecture. Thank you for your attention. Questions in a moment.

\[Pause.\]

---

## APPENDIX — Key references, terminology, and further reading

**Foundational papers.**

- Ivics, Hackett, Plasterk, Izsvák (1997). "Molecular reconstruction of *Sleeping Beauty*, a Tc1-like transposon from fish, and its transposition in human cells." *Cell* 91:501-510. The original Sleeping Beauty reconstruction paper.
- Mátés, Chuah, Belay, ..., Ivics, Izsvák (2009). "Molecular evolution of a novel hyperactive Sleeping Beauty transposase enables robust stable gene transfer in vertebrates." *Nature Genetics* 41:753-761. The SB100X paper.
- Fraser, Smith, Summers (1983). "Acquisition of host cell DNA sequences by baculoviruses." *Journal of Virology* 47:287-300. Original PiggyBac discovery in the cabbage looper moth.
- Yusa, Zhou, Li, Bradley, Craig (2011). "A hyperactive *piggyBac* transposase for mammalian applications." *PNAS* 108:1531-1536. The hyperactive PiggyBac (hyPB) variant.
- Kawakami, Shima, Kawakami (2000). "Identification of a functional transposase of the *Tol2* element, an *hAT*-like element from the Japanese medaka fish." *PNAS* 97:11403-11408. Tol2 system establishment.
- Klompe, Vo, Halpin-Healy, Sternberg (2019). "Transposon-encoded CRISPR-Cas systems direct RNA-guided DNA integration." *Nature* 571:219-225. CAST discovery (Sternberg lab).
- Strecker, Ladha, Gardner, Schmid-Burgk, Makarova, Koonin, Zhang (2019). "RNA-guided DNA insertion with CRISPR-associated transposases." *Science* 365:48-53. Parallel CAST discovery (Zhang lab).
- Woltjen, Michael, Mohseni, ..., Nagy (2009). "*piggyBac* transposition reprograms fibroblasts to induced pluripotent stem cells." *Nature* 458:766-770. PiggyBac iPSC reprogramming.
- Dupuy, Akagi, Largaespada, Copeland, Jenkins (2005). "Mammalian mutagenesis using a highly mobile somatic *Sleeping Beauty* transposon system." *Nature* 436:221-226. SB insertional mutagenesis for cancer gene discovery.
- Singh, Manuri, Olivares, ..., Cooper (2008). "Manufacture of clinical-grade CD19-specific T cells stably expressing chimeric antigen receptor using *Sleeping Beauty* system and artificial antigen presenting cells." *PLoS ONE* 3:e3056. Early MD Anderson SB CAR-T methodology.

**Key terminology.**

- **DNA transposon**: a class of mobile genetic element that moves by cut-and-paste mechanism using a self-encoded transposase enzyme.
- **Transposase**: the enzyme that recognizes the inverted terminal repeats of a transposon and catalyzes excision and reintegration.
- **Inverted terminal repeats (ITRs)**: short DNA sequences at the ends of a transposon, in inverted orientation relative to each other, that the transposase recognizes.
- **Cut-and-paste transposition**: the mechanism by which DNA transposons move — the element is physically excised from one site and integrated at another, with no net amplification.
- **Copy-and-paste transposition**: the mechanism by which retrotransposons move — the element is transcribed, reverse-transcribed, and inserted at a new site while the original remains.
- **Target site duplication**: a short genomic sequence duplicated on either side of a newly inserted transposon, generated by repair of the staggered cut made by the transposase.
- **Sleeping Beauty (SB)**: a Tc1/mariner-family transposon system reconstructed in 1997 from inactive salmonid fish copies; SB100X is the hyperactive engineered variant.
- **PiggyBac (PB)**: a transposon system originally from the cabbage looper moth; uses TTAA target sites and excises footprint-free.
- **Tol2**: an hAT-family transposon system from the medaka fish; notable for very large cargo capacity.
- **Two-component system**: the standard engineered transposon delivery — donor plasmid carrying ITR-flanked cargo plus helper plasmid (or mRNA) expressing transposase.
- **Hyperactive transposase**: an engineered variant of a natural transposase with substantially increased catalytic activity, generated by directed evolution; examples include SB100X and hyPB.
- **Minicircle**: a small circular DNA molecule containing only the transposon (ITRs + cargo), with the bacterial backbone removed by enzymatic recombination; used for reduced immunogenicity in clinical applications.
- **CAST (CRISPR-Associated Transposase)**: a hybrid system in which CRISPR recognition machinery directs a transposase to insert at a guide-RNA-specified target site; discovered 2019.
- **Serine integrase**: a class of bacterial enzymes (e.g., Bxb1, phiC31) that integrate DNA at specific *att* sites; provides site-specific rather than random integration.
- **Footprint-free excision**: a property of PiggyBac in which excision of the transposon restores the original target site sequence without scar.
- **Insertional mutagenesis**: a forward-genetic technique in which random transposon insertions are used to disrupt genes across many cells, identifying genes whose disruption produces a phenotype of interest (e.g., cancer driver gene discovery).
- **SBcellect / CARAMBA**: European clinical Sleeping Beauty CAR-T platforms and trials.

**Comparison summary: integration profiles.**

| System | Target preference | Genomic bias | Cargo capacity | Footprint on excision |
|---|---|---|---|---|
| Sleeping Beauty (SB100X) | TA dinucleotide | Most random | ~10 kb | Small footprint |
| PiggyBac (hyPB) | TTAA | Modest TSS bias | ~14 kb | Scarless |
| Tol2 | Relaxed | Modest gene-body bias | >50 kb | Small footprint |
| Lentivirus | (none, random for entry) | Active gene bodies | ~8-10 kb | N/A (integrates rather than excises) |
| Gammaretrovirus | (none) | Strong TSS bias | ~7 kb | N/A |
| AAV | (none) | Non-integrating in episomal form | ~4.7 kb | N/A |
| Bxb1 / phiC31 | attB-attP pairs | Site-specific (predefined) | Large | N/A |

**Suggested further reading for students who want to go deeper.**

- Ivics and Izsvák, *Methods in Molecular Biology* series — multiple chapters on Sleeping Beauty methodology.
- Hudecek, Izsvák, Johnen, ..., Ivics (2017). "Going non-viral: the *Sleeping Beauty* transposon system breaks on through to the clinical side." *Critical Reviews in Biochemistry and Molecular Biology* 52:355-380. Comprehensive review of SB clinical translation.
- Tipanee, VandenDriessche, Chuah (2017). "Transposons: Moving forward from preclinical studies to clinical trials." *Human Gene Therapy* 28:1087-1104.
- Anzalone, Koblan, Liu (2020). "Genome editing with CRISPR-Cas nucleases, base editors, transposases and prime editors." *Nature Biotechnology* 38:824-844. Comparative review of all major editing/integration technologies.
- Chen, LaCava, Tsuji, Aravind, Burns (2024 and ongoing). Reviews of CAST mammalian applications and progress.

End of lecture. Thank you.


