# Cancer Mutational Signatures — Extracting the Fingerprints of Mutational Processes from Cancer Genomes

**A 2-hour undergraduate genomics lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which lands comfortably inside a two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving more room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The genome remembers — why mutations have fingerprints

Good morning, everyone. For the next two hours, we're going to talk about one of the most beautiful ideas in modern cancer genomics — an idea that took roughly thirty years of accumulating data and one extraordinary mathematical insight to bring into focus. The idea is this: **every mutational process that has ever damaged a cell's DNA leaves a characteristic fingerprint in the genome, and if you collect enough cancer genomes, you can read those fingerprints back out.**

Let me say that again, because it's the whole lecture in one sentence. The genome is not a passive carrier of random damage. It is an archive. When ultraviolet light from the sun hits a skin cell and crosslinks two adjacent thymines into a pyrimidine dimer, and the cell's repair machinery botches the fix and installs a wrong base — that mutation is not random. It has a shape. It is C-to-T at a particular position, in a particular sequence context, and it occurs more often at certain neighboring bases than at others. When the polycyclic aromatic hydrocarbons in tobacco smoke bind covalently to guanines in a lung cell's DNA, the resulting mutations are also not random. They're predominantly G-to-T transversions, and they cluster preferentially in certain trinucleotide neighborhoods. When the APOBEC family of cytidine deaminases — which, in their day job, are part of your antiviral defense — go rogue in a tumor and start deaminating cytosines in single-stranded DNA, _those_ mutations also have a fingerprint. Specifically, they hit cytosines preceded by a thymine. Three completely different mutagens. Three completely different fingerprints. All recorded, faithfully, in the DNA of the cells they damaged.

This is the central claim of mutational signature analysis, and it is, when you really sit with it, an astonishing claim. It says: hand me a cancer genome — just a list of the mutations in it, nothing else — and I will tell you, with reasonable confidence, what mutagens that cell was exposed to over its lifetime. Was it sun damage? Tobacco smoke? A particular chemotherapy drug given to the patient three years ago? A defect in a specific DNA repair pathway? The genome encodes all of that, in the patterns of where mutations sit and what bases sit next to them. We just had to learn how to read it.

If you walk out of here in two hours and you can do three things — one, explain to a friend without jargon what a mutational signature is and why different mutagens leave different patterns; two, list the half-dozen most clinically important COSMIC signatures and what each one tells you about the patient; three, sketch on a whiteboard the 96-class substitution framework and explain why we use trinucleotide contexts rather than just six substitution types — then we've succeeded. Everything else is detail hung onto that scaffold.

\[Pause.\]

Now, let me give you the analogy I want you to carry through this whole lecture. **Mutational signatures are the molecular fingerprints of carcinogens.** Just as a human fingerprint is a unique pattern of ridges and whorls that identifies a person, every mutagenic process — ultraviolet light, tobacco smoke, APOBEC enzymes, defective mismatch repair, defective homologous recombination, alkylating chemotherapy, aflatoxin, aristolochic acid, even the slow ticking of cellular metabolism over decades — leaves a unique pattern of mutations in the DNA it damages. The genome records its own history. Every cell in a tumor is a paleontological dig site. The mutations are the bones. And the signatures are the species the bones belonged to.

That analogy is going to do a lot of work for us. Carry it.

Here's the second thing to know up front. This field essentially did not exist in 2012. The mathematical framework that lets us extract signatures from cancer genomes was published in a single landmark paper in 2013, by Ludmil Alexandrov, Serena Nik-Zainal, Michael Stratton, and colleagues at the Wellcome Sanger Institute in Cambridge, England. Before that paper, people had _noticed_ patterns in cancer mutations — they knew, qualitatively, that lung cancers from smokers had a lot of G-to-T transversions, and that melanomas had a lot of C-to-T transitions at dipyrimidines. The patterns were real. But nobody had a principled mathematical method to take a heterogeneous pile of cancer genomes, where each tumor had been shaped by multiple different mutagenic processes mixed together, and decompose the pile into its underlying basis patterns. That's what Alexandrov and Stratton did. They used a technique called non-negative matrix factorization — we'll spend a whole segment on that — and they extracted twenty-one signatures from about seven thousand cancer genomes. Each signature corresponded, with hindsight, to a specific mutational process. The field exploded.

And it kept exploding. The Catalogue Of Somatic Mutations In Cancer — COSMIC, run out of the Sanger Institute — became the central repository. COSMIC version 2, released in 2018, contained thirty single-base substitution signatures. Version 3, released in 2020, added indel signatures and doublet substitution signatures, and refined the SBS list. Version 3.4, released in 2024, contains roughly a hundred signatures across all categories. The field has gone from "we suspect cancer mutations have patterns" to "we have a comprehensive atlas of nearly a hundred distinguishable patterns, many of them with known causes, and we use them clinically to guide treatment."

That's the trajectory. From qualitative observation in the 1990s, to mathematical extraction in 2013, to clinical application by 2020. In one undergrad lecture, we'll walk the whole arc.

\[Pause.\]

A few orienting facts before we go deeper. A typical cancer genome carries somewhere between a thousand and a hundred thousand somatic point mutations — the exact number depends enormously on the cancer type. A pediatric leukemia might have just a few hundred. A pancreatic adenocarcinoma might have ten thousand. A lung cancer from a long-term smoker might have fifty thousand or more. A melanoma from chronically sun-exposed skin can exceed a hundred thousand. A hypermutated colon cancer with mismatch repair deficiency can blow past a million. The range is enormous, and the range itself is informative — a high mutation burden tells you something about the mutational history. A cancer with a million mutations did not get there by random accident; some specific mutational process was operating at high intensity.

And here's the thing. Most cancers are not driven by a single mutational process. They're driven by several, layered on top of each other, with different intensities at different times during the tumor's evolution. A smoker's lung cancer has tobacco signature mutations, but it also has the slow aging signature that all cells accumulate, plus maybe an APOBEC signature on top, plus, if the patient was treated with platinum chemotherapy, a platinum signature added in the late stages. The genome is a layered palimpsest of every mutagenic process that touched it. The job of signature analysis is to peel the layers apart.

That peeling-apart is what non-negative matrix factorization does. It is a mathematical operation that takes a mixture and decomposes it into its components, under the constraint that none of the components can be negative — which makes biological sense, because you can't have a negative number of mutations. We'll go deep on NMF in Segment 4. For now, just hold the image: the cancer genome is a smoothie, and signature analysis is the chemical procedure that lets you reconstruct which fruits went into the blender.

So that's the contract for the next two hours. We're going to build the framework — the 96-class substitution scheme, the NMF math, the COSMIC database — then walk through the half-dozen most clinically important signatures one by one, then talk about how they're being used in clinical decision-making today, and end with the frontier. Let's start where the field started: by realizing that the six basic substitution types are not enough.

---

## SEGMENT 2 — Six substitutions are not enough — the 96-class framework

If you take a base in the genome and you replace it with a different base, there are exactly twelve possible substitutions. A can become C, G, or T. C can become A, G, or T. G can become A, C, or T. T can become A, C, or G. Twelve directional substitutions. But the DNA is double-stranded, and we don't usually know which strand a mutation originally occurred on — when we see a C-to-T mutation on the Watson strand, that's equivalent to a G-to-A mutation on the Crick strand. So we collapse the twelve down to six, by convention always reporting the substitution with respect to the pyrimidine base — C or T — on one of the two strands. The six categories are:

**C-to-A** (which is the same as G-to-T on the opposite strand).
**C-to-G** (same as G-to-C).
**C-to-T** (same as G-to-A).
**T-to-A** (same as A-to-T).
**T-to-C** (same as A-to-G).
**T-to-G** (same as A-to-C).

Six categories. Every single nucleotide substitution in any cancer genome falls into one of these six bins.

Now, in the 1990s and early 2000s, people would publish papers saying things like "lung cancers have an excess of C-to-A mutations compared to other cancers." That's true. It's a real signal — tobacco smoke causes a lot of C-to-A mutations, equivalently G-to-T mutations on the strand where the bulky tobacco adduct sits on the guanine. So you'd look at the six-class histogram, and lung cancers had a tall C-to-A bar.

But six categories is too coarse. The trouble is that very different mutational processes can produce mutations in the same six-class category, and the six-class histogram can't tell them apart. UV light produces C-to-T mutations. Spontaneous deamination of methylated cytosines also produces C-to-T mutations. Alkylating chemotherapy also produces C-to-T mutations. APOBEC deamination also produces C-to-T mutations. Five completely different mutational processes, all dumping their output into the same C-to-T bin. If your only resolution is six categories, you have a serious confusion problem.

\[Pause.\]

Here's the key insight that Alexandrov and Stratton built their whole framework on. Even when two processes produce the same substitution — say, both produce C-to-T — they tend to produce it in _different sequence contexts_. UV light prefers to make C-to-T at TCN sites and especially at CC dipyrimidines. Spontaneous CpG deamination produces C-to-T specifically at CpG sites — that is, where the C is followed by a G. APOBEC makes C-to-T at TCW sites, where W is A or T. Each mutational process has not just a preferred substitution but also a preferred neighborhood. The substitution and the neighborhood together tell you which process did it.

So the obvious move is to expand the classification to include the neighborhood. The simplest way to do that is to look at the bases immediately on either side of the mutated base. One base to the left, one base to the right. That's the **trinucleotide context**. For a given mutated base, there are four possibilities for the base to the left (A, C, G, or T) and four for the base to the right. Four times four is sixteen possible trinucleotide contexts for any single substitution.

Six substitution types times sixteen trinucleotide contexts equals **ninety-six classes**.

Ninety-six. Memorize that number. It is the foundational unit of mutational signature analysis. Every single base substitution in a cancer genome gets sorted into one of ninety-six bins. The bins are written in a specific notation. You write the trinucleotide with the mutated base in the middle, in square brackets showing the substitution. So **T\[C>T\]A** means: a C-to-T substitution where the C is flanked by a T on the five-prime side and an A on the three-prime side. **C\[C>T\]C** means a C-to-T where both flanking bases are C — that's a C-to-T at a CCC trinucleotide. There are ninety-six such labels. You sort every mutation into its bin, you count the bin sizes, and you get a histogram with ninety-six bars. That histogram is the mutational profile of the tumor.

Let me give you the analogy. **The 96-class framework is just building a histogram. For each substitution in the cancer genome, look at the bases on either side; six substitutions times sixteen contexts equals 96 categories; build a histogram.** That's it. The whole computational front end of signature analysis is just sorting mutations into 96 bins and counting them. Anyone who can do this in Excel can do mutational signature analysis at the data-preparation step.

\[Pause.\]

Now, why ninety-six? Why not look at five-base contexts, or seven-base, or just the single base? It's a tradeoff. Bigger contexts give you finer resolution — five-base contexts would give you 1,536 classes (six substitutions times sixteen times sixteen) — but they also fragment your data more finely, so you need more mutations per genome to see clear patterns above noise. Smaller contexts — say, just one base on one side — give you less resolution but more statistical power per bin. The trinucleotide context turns out to be a sweet spot. It captures the most important neighborhood preferences of essentially all known mutational processes, while leaving enough mutations in each bin to make the statistics tractable for individual tumors with a few thousand mutations. Ninety-six is the Goldilocks number. The field has converged on it, and basically all SBS — single-base substitution — signatures in COSMIC are defined as probability distributions over these ninety-six classes.

So when you see a published "mutational signature" — say, COSMIC Signature 4, the tobacco signature, or Signature 7, the UV signature — what you're looking at is a histogram with ninety-six bars, with the heights summing to one. It's a probability distribution. It says: if this mutational process is the one that produced a mutation in your genome, here's the probability that the mutation falls into each of the 96 categories. Tobacco's distribution is heavy in the C-to-A category, with specific peaks at certain trinucleotide contexts. UV's distribution is heavy in the C-to-T category, with very high peaks at certain dipyrimidine contexts. Each signature has its own characteristic shape, and the shapes are distinguishable by eye once you've looked at a few of them.

That's the framework. Now let's talk about why it took until 2013 for somebody to make it computationally tractable.

---

## SEGMENT 3 — 2013 — Alexandrov, Stratton, and the paper that changed everything

In August of 2013, a paper appeared in the journal Nature with the title "Signatures of mutational processes in human cancer." The first author was Ludmil Alexandrov, then a PhD student at the Wellcome Trust Sanger Institute. The senior author was Michael Stratton, the Sanger's director, who had spent his career on cancer genetics — he was one of the people who originally identified BRCA2 in 1995. The paper analyzed somatic mutations from approximately seven thousand cancer genomes and exomes across thirty cancer types, and it extracted twenty-one distinct mutational signatures.

I want to spend a few minutes on this paper, because it's foundational. Everything we do now in mutational signature analysis traces back, conceptually and often computationally, to this 2013 work.

The challenge Alexandrov and Stratton faced was this. They had thousands of cancer genomes. Each genome had a 96-class mutation histogram. The histograms were obviously not all the same — a melanoma's histogram looked different from a lung cancer's, which looked different from a colon cancer's. But each individual histogram was also clearly a mixture. A melanoma histogram had a huge UV-looking spike, yes, but it also had a baseline of other patterns layered underneath. A smoker's lung cancer had the tobacco spike, but also baseline aging mutations and sometimes APOBEC peaks. Every individual cancer was a cocktail of several mutational processes, and the relative concentrations of the processes were different from cancer to cancer.

The math problem was: given a few thousand mixture histograms, recover the small number of basis histograms — the pure signatures — and the mixing proportions for each cancer. This is a classic problem in unsupervised machine learning, and it has a name. The technique they used is called **non-negative matrix factorization**, or NMF.

\[Pause.\]

Let me give you NMF in plain English. Imagine you have ten thousand smoothies. Each smoothie was made from some combination of, let's say, strawberries, blueberries, bananas, and spinach — four base ingredients. You don't know what the recipes were. All you have is a chemical analysis of each finished smoothie — say, the levels of vitamin C, anthocyanins, potassium, and chlorophyll in each one. Your job is to figure out: (1) what were the four base ingredients, in terms of their chemical fingerprints? And (2) for each smoothie, what was the recipe — what proportion of each ingredient went in?

NMF does exactly that, mathematically. You arrange the data as a matrix where each row is a category — vitamin C, anthocyanins, et cetera — and each column is a smoothie. NMF factorizes that matrix into two smaller matrices. One matrix has rows for categories and columns for ingredients — that's the "what does each base ingredient look like" matrix. The other matrix has rows for ingredients and columns for smoothies — that's the "how much of each ingredient is in each smoothie" matrix. When you multiply these two smaller matrices together, you reconstruct, approximately, the original data matrix. The factorization is constrained so that no entries can be negative — you can't have negative strawberries — which turns out to be the constraint that makes the answer biologically meaningful.

For mutational signatures, the matrix is even more direct. Each column of the data matrix is a cancer genome. Each row is one of the 96 trinucleotide categories. Each entry is the count of mutations of that category in that genome. NMF factorizes this matrix into a "signature matrix" — 96 rows, k columns, where k is the number of signatures you're trying to extract — and an "exposure matrix" — k rows, one column per genome. The signature matrix tells you the shape of each pure signature. The exposure matrix tells you how active each signature was in each individual tumor.

**The basis patterns ARE the signatures.** Read that again. The mutational signatures are literally the columns of the matrix that NMF spits out. The biological interpretation — "oh, that one looks like UV" or "that one is clearly tobacco" — is something humans do afterwards, by comparing the extracted shapes to known mutagen patterns. NMF itself doesn't know about UV or tobacco. It just finds the basis patterns that best decompose the input.

So here's the analogy. **Signature extraction is: given the histograms from 1,000 cancers, mathematically decompose them into a small set of basis patterns using non-negative matrix factorization; the basis patterns are the signatures.**

\[Pause.\]

A few details about how Alexandrov actually did it in 2013. He didn't run NMF once. He ran it hundreds of times, with different random initializations, and selected the most stable solutions. He varied the number of signatures k, looking for the value of k that produced reproducible, stable signatures across runs — too few signatures and you can't fit the data; too many and you start splitting real signatures into noisy fragments or fitting random noise. The choice of k turned out to be about twenty-one for the dataset he had. With more data, more signatures could be reliably extracted — and that's exactly what happened in subsequent years.

When the twenty-one signatures came out, the interpretation was striking. Some signatures had instantly recognizable shapes. **Signature 7** had a huge C-to-T peak at TCT and CCT contexts — that's UV. **Signature 4** had a strong C-to-A pattern at NCN contexts — that's tobacco. **Signatures 2 and 13** had a peak at TCW contexts — that's APOBEC. **Signature 6** had a broader C-to-T pattern at multiple contexts — that's mismatch repair deficiency. Some signatures matched known mutagens immediately. Others — like Signature 1, the slow aging signature with C-to-T at CpG sites — matched well-known biochemistry (spontaneous deamination of methylated cytosine). Still others, especially in early versions, had no known cause and were just labeled with numbers, awaiting future biological characterization.

A handful of signatures, however, turned out to be artifacts of sequencing errors or sample processing — Signature 7 in v1 was real UV, but Signatures 9 and 16 in early versions later got reinterpreted, and a few were quietly retired in subsequent COSMIC versions. The field had to build standards for distinguishing real mutational processes from technical artifacts. We'll come back to that limitation in Segment 17.

The 2013 paper essentially defined the field. It established the 96-class framework, the NMF method, the practice of extracting signatures from large pan-cancer datasets, and the convention of numbering them. Every subsequent advance built on that foundation.

---

## SEGMENT 4 — The COSMIC database — version 2, version 3, version 3.4

The Sanger Institute, which had hosted Alexandrov's work, formalized the signature catalog into a public database called COSMIC — the Catalogue Of Somatic Mutations In Cancer. COSMIC had existed since 2004 as a database of cancer mutations in general, but starting around 2015, it added a dedicated section for mutational signatures. The signature catalog now sits at cancer.sanger.ac.uk/signatures, and it has gone through multiple versions, each one expanding the catalog as more data became available and as the field's methods matured.

**COSMIC version 2**, released in 2015 and consolidated by 2018, contained thirty single-base substitution signatures. These were extracted from a much larger dataset than Alexandrov's original — by 2018, the field had whole-genome or whole-exome data on tens of thousands of cancers from many international consortia. The original twenty-one signatures from 2013 were refined, several were split into more specific subcomponents, and new signatures appeared as more rare cancer types were added. By v2, the signatures were numbered Signature 1 through Signature 30, and most of them had at least tentative biological attributions — UV, tobacco, APOBEC, mismatch repair deficiency, BRCA1/2 deficiency, alkylating agent chemotherapy, aflatoxin, aristolochic acid, polymerase epsilon mutations, and so on.

**COSMIC version 3**, released in 2020, was a major expansion. The team — by then led by Alexandrov, who had moved to UC San Diego as a faculty member — re-extracted signatures from a much expanded dataset, the Pan-Cancer Analysis of Whole Genomes (PCAWG) consortium data of about 2,700 whole cancer genomes. They expanded beyond single-base substitutions to include **doublet base substitution signatures** — DBS signatures — for cases where two adjacent bases mutate together, and **indel signatures** — ID signatures — for small insertions and deletions. They also introduced **structural variant signatures** — SV signatures — for large-scale chromosomal rearrangements. And they renamed the SBS signatures to use the prefix "SBS" — so the old Signature 7 became SBS7, the old Signature 4 became SBS4, et cetera, with subtypes added (SBS7a, SBS7b, SBS7c, SBS7d for the four UV sub-signatures).

**COSMIC version 3.4**, released in 2024, is the current state of the art. It contains roughly a hundred signatures total across all categories — about 60 SBS signatures, 18 indel signatures, 11 doublet substitution signatures, and several copy-number and structural variant signatures. Many signatures have now been confirmed in controlled experimental systems — for example, by treating cell lines with a specific mutagen and showing that the resulting mutation pattern matches the predicted signature. The catalog has become a true reference, and the database now also flags which signatures are considered "well-established" with known causes versus those that are still preliminary or have unknown etiology.

\[Pause.\]

I want to emphasize one practical thing. When you read modern cancer genomics papers and you see references to "Signature 3" or "SBS3" or "SBS7a" — those are pointers into the COSMIC catalog. The catalog defines the canonical reference shapes. Any new tumor's mutation profile can be **fit** to the catalog — that is, decomposed as a weighted combination of the known reference signatures — using a procedure called signature fitting, which is just constrained least-squares with the reference shapes held fixed. This is different from signature extraction, which is the unsupervised NMF discovery procedure. In modern clinical practice, you almost always do fitting — you have a tumor, you want to know which known signatures are active in it — rather than extraction, which is what you do when you're trying to find new signatures in a research cohort.

There's a key tool here called **SigProfiler**, developed by Alexandrov's group. There's also **deconstructSigs** in R, and **MutationalPatterns**, also in R, and various others. We'll come back to the tools in Segment 13. For now, just know that there's a small ecosystem of software that handles both extraction and fitting against COSMIC, and any cancer genomics lab can run these tools on a new tumor sample in an afternoon.

So that's the database side of the story. We've now built the conceptual scaffold: the 96-class framework, NMF for extraction, COSMIC as the catalog. Time to walk through the signatures themselves, one by one, starting with the most visually striking one. Sunlight.

---

## SEGMENT 5 — Signature 7 — the UV fingerprint, written by the sun

Of all the COSMIC signatures, the one I want to start with is Signature 7 — now formally SBS7, which in v3 was split into four sub-signatures, SBS7a through SBS7d. This is the UV signature. It is the signature of ultraviolet light. And it is, perhaps, the most diagnostic of all signatures — when you see Signature 7 in a tumor, you can be virtually certain that the tumor cell's DNA was exposed to UV.

Let me give you the biochemistry first, because the chemistry explains the pattern.

When UV photons — specifically UVB, in the 280-to-315-nanometer range — hit DNA, they have a specific photochemical effect. They cause two adjacent pyrimidine bases — two C's, two T's, or a C and a T — to crosslink. The crosslink is called a **pyrimidine dimer**. There are two main types: cyclobutane pyrimidine dimers (CPDs) and 6-4 photoproducts. Both distort the DNA double helix at the site of the lesion. If the cell doesn't repair the dimer before the next round of DNA replication — which it usually does, via the nucleotide excision repair (NER) pathway — then when the replication fork comes through, the polymerase has to choose what bases to put across from the distorted lesion. The polymerase is bad at reading dimers correctly, and it tends to insert adenines opposite the dimerized cytosines. An adenine opposite a cytosine is a mismatch. After another round of replication, the mismatched A pairs with a T on the next round, and you end up with a **C-to-T** mutation.

If both bases in the dimer were Cs, you can end up with a **CC-to-TT** double substitution — two adjacent C's both flipped to T's in one shot. CC-to-TT mutations are essentially pathognomonic for UV exposure. No other known mutational process produces CC-to-TT at meaningful frequency. If you see a tumor with CC-to-TT mutations, it has UV damage in its history.

\[Pause.\]

Now what does this look like in the 96-class framework? UV produces predominantly C-to-T substitutions — that's one of the six categories. And within the C-to-T category, the substitutions are concentrated at trinucleotide contexts where the mutated C is flanked by another pyrimidine — that is, T\[C>T\]N and C\[C>T\]N contexts. The dipyrimidine constraint comes directly from the biochemistry: dimers form between adjacent pyrimidines, so the mutations cluster where the C had a T or another C as its five-prime neighbor.

If you go look at the COSMIC SBS7 plot — search for it online, it's a beautiful image — you'll see a histogram with ninety-six bars and a really obvious set of tall peaks in the C-to-T section, specifically at the trinucleotides starting with T or C. The other categories are nearly empty. It's a sparse, peaked signature. Distinctive. Once you've seen it, you'll recognize it instantly on any future tumor profile.

The analogy. **Signature 7 — CC-to-TT at dipyrimidines — is pathognomonic for sun exposure. Every melanoma has it. Almost no other tumor type has it. The molecular fingerprint of the sun on your skin cells.**

What does this mean clinically? It means a few things. **First**, the presence and intensity of SBS7 in a tumor confirms a UV etiology. For melanoma — the cancer of melanocytes, the pigment cells in skin — SBS7 is essentially universal. Melanomas from chronically sun-exposed body sites have very high SBS7 burden, sometimes hundreds of thousands of mutations dominated by this signature. Melanomas from sun-shielded sites — palms, soles, mucosal melanomas in the eye or in body cavities — have much lower SBS7 and rely on other mutational processes for their genomic damage. The signature literally lets you read off, from the genome, whether the tumor's progenitor cell saw the sun.

**Second**, SBS7 burden correlates with the tumor's neoantigen load — the number of mutant proteins on its surface that the immune system might recognize as foreign. High-SBS7 melanomas tend to be **immunogenic**, which is one major reason why melanoma was the first cancer where checkpoint inhibitor immunotherapy succeeded dramatically. The same UV that caused the tumor also gave it lots of mutations, which gave it lots of neoantigens, which made it visible to a properly enabled immune system. The therapeutic relevance of mutational signatures connects directly to immunotherapy responsiveness, and we'll return to this in Segment 16.

**Third**, the signature has public health implications. SBS7 in non-melanoma skin cancers — basal cell carcinomas, squamous cell carcinomas — confirms what dermatologists have been saying for decades: sun exposure causes these tumors, and prevention via sun protection is real prevention. The genome of a basal cell carcinoma will literally show you the sun damage. The signature is the receipt.

So that's the UV signature. Distinctive shape, clear biochemistry, clear etiology, clear clinical interpretation. Now let's do the other classic environmental signature — tobacco smoke.

---

## SEGMENT 6 — Signature 4 — the tobacco fingerprint, written by smoke

Signature 4 — now SBS4 — is the second great environmental mutational signature. It is the signature of tobacco smoke, specifically of the polycyclic aromatic hydrocarbons in cigarette smoke that get inhaled into the lungs and metabolized into reactive species that bind covalently to DNA.

The biochemistry. When you inhale cigarette smoke, your lung tissue is exposed to a soup of carcinogenic chemicals — over a hundred of them, with the major actors being polycyclic aromatic hydrocarbons (PAHs) like benzo\[a\]pyrene. The PAHs themselves are not directly mutagenic; they're inert hydrocarbons. But your body, in trying to detoxify them, processes them through enzymes in the cytochrome P450 family — particularly CYP1A1 and CYP1B1 — which oxidize them into highly reactive epoxide intermediates. The intermediates, particularly **benzo\[a\]pyrene diol epoxide** (BPDE), bind covalently to the N7 or N2 position of **guanine** bases in DNA, forming a bulky DNA adduct. The adduct distorts the helix.

When DNA replication encounters the adduct, the polymerase tends to misincorporate an adenine opposite the adducted guanine — instead of inserting a C opposite G, which would be correct, it inserts an A opposite G. Then on the next replication round, the A pairs with a T, and you end up with a **G-to-T transversion**. By the six-class convention — we report on the pyrimidine strand — this is a **C-to-A** mutation.

So SBS4 is a C-to-A-dominated signature. And, like UV, it has trinucleotide preferences. The strand-specific bias of the bulky adduct, and the preferred sequence contexts of CYP1A1 metabolism, mean that the mutations cluster at certain neighborhoods — particularly NCN and CCN contexts, with a strand bias that favors the non-transcribed strand (because the transcribed strand gets preferentially repaired by transcription-coupled NER).

\[Pause.\]

The COSMIC SBS4 plot shows a broad C-to-A pattern, with most of the C-to-A bars filled and several other categories showing a baseline contribution. It's a less "peaked" signature than SBS7 — UV is a few sharp spikes, tobacco is a broader distribution — but it's still distinctive once you've seen it. You can pattern-match it by eye after a little practice.

The analogy. **Signature 4 — G-to-T transversions at NCN contexts, one in every 200 bases of a smoker's lung cancer. The molecular receipt for every cigarette ever smoked.**

The intensity of SBS4 in a tumor correlates almost perfectly with the patient's lifetime smoking history. A lung cancer in a heavy long-term smoker — pack-a-day for forty years — will have tens of thousands of SBS4 mutations, sometimes dominating the entire mutational profile. A lung cancer in a non-smoker — yes, those exist, especially in East Asian populations and among women, often driven by EGFR mutations — will have essentially no SBS4. The signature lets you read smoking status off the genome with extraordinary fidelity.

This has a few implications. **First**, it confirms, at the molecular level, what epidemiology has known since the 1950s — that smoking causes lung cancer through direct genomic damage. We don't need to argue from correlations and statistics anymore. We can point at the genome and say: the mutations were caused by the smoke. Every C-to-A at a tobacco-context site is a molecular receipt for a cigarette. **Second**, SBS4 is found in tissues other than just the lung — esophageal cancers in smokers, oral cancers in smokers, bladder cancers in smokers all show SBS4 contributions, because the carcinogens reach those tissues either through swallowed smoke or through systemic circulation. **Third**, SBS4 distinguishes smoker lung cancers from non-smoker lung cancers, which turn out to be biologically and clinically distinct diseases — non-smoker lung cancer is enriched for actionable driver mutations like EGFR, and benefits from different first-line therapies than smoker lung cancer. The mutational signature can be used as a biomarker of likely smoking history when the clinical history is uncertain.

And — fourth, and most poignantly — SBS4 mutations are essentially **permanent**. Once a smoker quits, no new SBS4 mutations are added, but the existing ones remain in the genome of every progenitor cell that was hit. This is part of why the lifetime risk of lung cancer drops slowly, not immediately, after smoking cessation. The damage is done; it sits in the DNA; it can fuel a future tumor decades later. The receipts don't go away. That's a sobering fact to share with patients, and one that mutational signatures made tangible.

So those are the two classic environmental signatures — UV and tobacco. Now let's pivot to a signature that doesn't come from an external mutagen but from a broken DNA repair pathway. This is where mutational signatures really start to drive treatment decisions.

---

## SEGMENT 7 — Signature 3 — the BRCA fingerprint and PARP inhibitors

Signature 3 — now SBS3 — is, in my opinion, the single most clinically important mutational signature in oncology today. It is the molecular fingerprint of **homologous recombination deficiency**, often abbreviated HRD. Tumors that show SBS3 have lost the ability to repair DNA double-strand breaks through the high-fidelity homologous recombination pathway. The classic cause is biallelic loss of **BRCA1 or BRCA2** — the same tumor suppressor genes that, when inherited in mutated form, give families their multi-generational pattern of breast and ovarian cancer. But other HR-pathway genes — PALB2, RAD51C, RAD51D, ATM in some contexts — can also produce SBS3 when both copies are lost.

The biochemistry is a little more subtle than UV or tobacco, because SBS3 doesn't come from a specific mutagen. It comes from the cell's inability to repair a particular kind of damage. When a double-strand break happens — and they happen all the time, from replication stress, from reactive oxygen species, from collisions with transcription, from random chance — the cell normally has two main options for repair. Homologous recombination uses the sister chromatid as a template and produces a clean, error-free repair. Non-homologous end joining (NHEJ) and microhomology-mediated end joining (MMEJ) are faster but sloppier — they just stick the ends back together, sometimes losing a few nucleotides or adding errors. When HR is broken, the cell has to rely on the sloppy pathways, and the resulting repairs leave a characteristic pattern of point mutations, small deletions, and structural rearrangements scattered across the genome.

The SBS3 substitution signature, in the 96-class framework, looks **flat**. It's a relatively uniform distribution across many of the 96 categories, without the sharp peaks of UV or the strong directional bias of tobacco. This flatness is itself diagnostic — most signatures are peaked; a flat signature stands out by being unpeaked. It says: the mutations were not produced by a specific chemical lesion in a specific context; they came from broken repair scattering low-level errors across the genome.

\[Pause.\]

The analogy. **Signature 3 — the molecular hallmark of homologous-recombination deficiency. Tells you the patient will respond to PARP inhibitors.**

Let me unpack the PARP-inhibitor connection, because it is one of the cleanest examples in all of oncology of how a molecular finding translates into a treatment decision.

PARP1 is an enzyme — poly(ADP-ribose) polymerase — that, among many jobs, helps repair single-strand breaks in DNA. If you inhibit PARP, single-strand breaks accumulate. Single-strand breaks, during DNA replication, can be converted into double-strand breaks at the replication fork. Normally, the cell handles those double-strand breaks via homologous recombination — clean, error-free repair. But if homologous recombination is already broken — because BRCA1 or BRCA2 has been knocked out in the tumor — then the cell can't repair the double-strand breaks cleanly. It dies.

This is called **synthetic lethality**. Loss of PARP alone is survivable. Loss of BRCA alone is survivable (at the cellular level — the cell is mutator-prone but alive). But the combination is lethal. So if you have a tumor where BRCA is already gone, you can selectively kill it by giving the patient a PARP inhibitor — the normal cells, which still have functional BRCA, tolerate PARP inhibition fine, but the tumor cells, which already lost BRCA, can't survive the additional hit.

PARP inhibitors — olaparib, niraparib, rucaparib, talazoparib — are now standard therapy for ovarian cancers with BRCA mutations, for some BRCA-mutated breast cancers, for BRCA-mutated metastatic prostate cancer, and increasingly for BRCA-mutated pancreatic cancer. They are some of the few targeted therapies whose use is driven by a specific biomarker.

The biomarker can be tested in two ways. **Way one**: direct genetic testing for BRCA1 and BRCA2 mutations in the tumor. If you find a loss-of-function mutation in both copies, you predict PARP responsiveness. **Way two**: mutational signature analysis. If the tumor's SBS profile shows strong SBS3 contribution — that is, if the genome shows the fingerprint of HRD activity — you can predict PARP responsiveness even if no specific BRCA mutation was found, because there are many ways to lose HR (other HR genes mutated, epigenetic silencing of BRCA, partial loss-of-function variants). SBS3 detects the functional consequence — broken HR — regardless of which gene was responsible.

This second way is sometimes called **mutational signature-based HRD testing**, and several commercial assays now incorporate it. The most famous is the Myriad myChoice CDx test, which combines SBS3-like measures with structural variant signatures and large-scale genomic alterations to produce an "HRD score" — a single number that predicts PARP-inhibitor response. The FDA has approved this kind of testing for guiding PARP inhibitor use in ovarian cancer.

\[Pause.\]

The takeaway. **Signature 3 → BRCA-like deficiency → PARP inhibitor response.** That chain is one of the cleanest applications of mutational signature analysis to clinical decision-making, and it has changed how ovarian cancer is treated. Tens of thousands of women are alive today, or living longer than they would have, because their tumors were tested for HRD by either direct sequencing or by signature analysis, and they got PARP inhibitors as a result. That is real, tangible benefit, traceable to the 96-class histogram.

OK. We've done UV, tobacco, and BRCA. Three signatures down. Let's now look at the family of signatures from an enzyme that, weirdly, evolved to fight viruses but ends up causing cancer mutations — APOBEC.

---

## SEGMENT 8 — Signatures 2 and 13 — APOBEC and the rainfall of kataegis

Signatures 2 and 13 — now SBS2 and SBS13 — are the fingerprints of the **APOBEC family** of enzymes. APOBEC stands for **apolipoprotein B mRNA editing enzyme, catalytic polypeptide-like**. The name is a mouthful and a historical accident — the first member of the family was discovered for its role in editing apolipoprotein B mRNA in the intestine. The relevant enzymes for mutational signatures are APOBEC3A and APOBEC3B, two members of a larger family that evolved as part of the antiviral innate immune system. Their job, in normal biology, is to deaminate cytosines in single-stranded DNA — most importantly, in the single-stranded DNA of retroviruses like HIV during reverse transcription. By deaminating viral C's into U's, APOBEC3 enzymes mutate the viral genome into oblivion. It's a brilliant antiviral defense.

The problem is that APOBEC enzymes don't always confine themselves to viral DNA. In some cancers, APOBEC3A or APOBEC3B becomes inappropriately active in the nucleus and starts deaminating cytosines in the cell's own DNA. The deaminated cytosine — now a uracil — is normally recognized and removed by the base excision repair pathway, leaving an abasic site that gets faithfully restored to a C. But sometimes the U slips past repair and gets replicated as a T (because U pairs with A like T does), producing a **C-to-T** transition. Other times, the cell's translesion polymerases see the abasic site and insert a C across from it, producing a **C-to-G** transversion. So APOBEC produces a mixture of C-to-T and C-to-G mutations at the sites it deaminated.

The substrate specificity is what makes the signature distinctive. APOBEC3 enzymes preferentially deaminate cytosines in a specific sequence context: **TCW**, where W is A or T. That is, the C must be preceded on the five-prime side by a T. So APOBEC mutations are concentrated at T\[C>T\]A, T\[C>T\]T, T\[C>G\]A, and T\[C>G\]T trinucleotides.

\[Pause.\]

When Alexandrov and Stratton extracted signatures in 2013, two of them — Signatures 2 and 13 — turned out to share this TCW context preference. Signature 2 is the C-to-T at TCW component. Signature 13 is the C-to-G at TCW component. Both are produced by APOBEC, but the relative balance between the two depends on which APOBEC family member is active and on cellular conditions. They almost always appear together — find SBS2, you'll usually find some SBS13, and vice versa.

There's one more thing about APOBEC mutations that is visually striking. They often appear in **clusters**. When APOBEC gets activated — say, by replication stress or by certain kinds of DNA damage that expose single-stranded regions — it can hit many cytosines in a small region of the genome in a short window of time. The result is a local burst of mutations, dozens of them within a few kilobases. If you make a plot of intermutation distance — the distance between successive mutations along the genome, sorted by position — you'll see the global background as a smooth curve, but APOBEC clusters appear as sudden dips, where many mutations are crammed close together. These clusters are called **kataegis** — the Greek word for "thunderstorm" — and the plot is often called a **rainfall plot** because the pattern looks like a downpour against a normal drizzle.

The analogy. **Signature 2/13 — kataegis (rain) of clustered C-to-T or C-to-G in TCW contexts; you can SEE the clusters on a rainfall plot.**

Kataegis was first described by Stratton's group in 2012 — slightly before the main signature extraction paper — and the kataegis observation was actually one of the discoveries that led to the realization that mutational processes had spatial as well as substitutional signatures.

\[Pause.\]

APOBEC signatures are unusual because they appear in many different cancer types, not just one. SBS2 and SBS13 show up in breast cancers (especially HER2-positive and triple-negative subtypes), bladder cancers, cervical cancers (where APOBEC is sometimes triggered by HPV infection — the cell is trying to deaminate HPV viral DNA and starts hitting its own genome by accident), lung cancers, head and neck cancers, and various others. APOBEC is the most pan-cancer of the major mutational processes. It is, in some sense, an endogenous mutator — it doesn't require an external carcinogen, just the inappropriate activation of an enzyme that's already in your cells.

The clinical implications of APOBEC signatures are still being worked out. **First**, the kataegis phenomenon — local hypermutation — can sometimes create driver mutations directly, by hitting an oncogene or tumor suppressor in a cluster. **Second**, APOBEC activity might correlate with tumor heterogeneity and treatment resistance — late mutations during therapy can be APOBEC-driven, generating resistant subclones. **Third**, very high APOBEC activity raises the tumor's overall mutation burden, which may improve immunotherapy responsiveness (because higher mutation burden generally means more neoantigens). Several trials are now investigating whether APOBEC-high tumors respond particularly well to checkpoint inhibitors.

So that's APOBEC. A self-inflicted mutational process, ubiquitous across cancers, distinctive because it leaves spatial clusters as well as a substitution-context fingerprint. Now let's do a chemotherapy-induced signature, which makes a different kind of point — that human-administered drugs can leave fingerprints just as clearly as nature-administered carcinogens.

---

## SEGMENT 9 — Signature 11 — when chemotherapy itself leaves a fingerprint

Signature 11 — now SBS11 — is the signature of **temozolomide**, an alkylating chemotherapy agent commonly used to treat glioblastomas and some other brain tumors. It is one of the most striking demonstrations that mutational signatures can record not just environmental exposures but also the marks of medical treatments.

Temozolomide is a methylating agent. Its mechanism, when active, is to attach a methyl group to the O6 position of guanine bases in DNA — producing an O6-methylguanine adduct. Normally, the cell repairs O6-methylguanine using a protein called MGMT — O6-methylguanine DNA methyltransferase — which directly removes the methyl group. If MGMT is functional, temozolomide damage gets repaired and the drug isn't very effective. But many glioblastomas have epigenetically silenced MGMT (via promoter methylation), which makes them vulnerable to temozolomide — the O6-methylguanine sits in the DNA, gets misread by polymerases, and triggers cell death. That's the therapeutic principle.

But here's the thing. The same lesion that triggers cell death also, in cells that survive, produces a characteristic mutation. O6-methylguanine is misread by DNA polymerases as adenine instead of guanine, so it pairs with thymine on the next replication round. The result, after two rounds, is a **G-to-A** transition — which by the pyrimidine convention is a **C-to-T**. The context preferences are specific to alkylation chemistry, producing a particular shape in the 96-class histogram, with peaks at certain trinucleotide contexts.

\[Pause.\]

The clinically important observation is this. If a glioblastoma patient is treated with temozolomide and develops a recurrence — which is unfortunately common — the recurrent tumor often shows **massive amounts of SBS11**. The treatment itself has hypermutated the surviving tumor cells. In some cases, the SBS11 mutation burden in a recurrent glioma can exceed the original mutation burden by an order of magnitude. The chemotherapy literally writes its name on the genome of the cells that resisted it.

This has several implications. **First**, the high mutation burden may make the recurrent tumor more visible to the immune system, which is one rationale for combining temozolomide with checkpoint inhibitors in some experimental glioma protocols. **Second**, the recurrent tumor's mutational landscape may be very different from the original — with a few of those new mutations potentially driving resistance or further malignancy. **Third**, the signature lets you confirm, from a recurrence biopsy, that temozolomide was contributing to mutation accumulation — which is informative for understanding tumor evolution under therapy.

Other chemotherapy-induced signatures have been identified. **Platinum chemotherapy** — cisplatin, carboplatin, oxaliplatin — produces its own signature (SBS31 and SBS35 in COSMIC), characterized by certain context preferences for C-to-T and C-to-A. **5-FU** treatment leaves a different signature. **Cytotoxic agents** of various kinds have all been catalogued. So mutational signatures provide a kind of treatment archaeology — you can read off, from a metastasis or recurrence, what chemotherapies the patient was treated with, even if the records are incomplete.

The take-home is that mutagens don't have to come from cigarettes or the sun. They can come from your oncologist. Therapy itself reshapes the genome, leaving traceable fingerprints. This is a bittersweet fact — we are saving lives with these drugs while simultaneously seeding new mutations — and one that motivates much current research into less mutagenic alternatives.

\[Pause.\]

OK. We've done UV, tobacco, BRCA, APOBEC, and temozolomide. Five signature families, each with a distinctive shape, clear biology, and growing clinical use. Let's take a breath here — this is the planned midpoint of the lecture. When we come back, we'll do mismatch repair signatures, polymerase-mutant hypermutators, the indel and structural-variant frameworks, the software tools, the clinical applications in depth, signatures in normal tissue, and the cutting edge.

\[BREAK\]

---

## SEGMENT 10 — Signatures 6, 15, 20, 26 — mismatch repair deficiency and MSI

Welcome back. Let's pick up with one of the most clinically actionable signature families in all of cancer genomics — the signatures of **mismatch repair deficiency**, often abbreviated MMR-d or dMMR. In COSMIC notation, the relevant signatures are SBS6, SBS15, SBS20, SBS26, and a couple of others added in v3. They are a family — overlapping but distinguishable — and they all reflect the same underlying biology: the cell has lost its ability to fix replication errors using the mismatch repair pathway.

Let me give you the biology first. When DNA polymerase copies a strand, it makes mistakes — at a rate of maybe one per 10,000 to 100,000 bases, depending on which polymerase. Most of those mistakes are caught immediately by the polymerase's own proofreading domain, which excises the wrong base and tries again. But a small fraction slip past proofreading and get incorporated into the daughter strand as mismatches — a base that doesn't pair correctly with the template. The cell has a backup system called **mismatch repair** that catches these post-replication errors. The MMR machinery — built primarily from the proteins MLH1, MSH2, MSH6, PMS2, and a few accessory factors — scans newly replicated DNA, recognizes mismatches by their structural distortion, identifies which strand is the new one (because it's not yet methylated, in bacteria; in mammals, the mechanism is more complex), and removes the wrong nucleotide, allowing the polymerase to fill in the correct base. MMR cuts the post-replication error rate by another hundred to thousand fold. With MMR working, the genome-wide mutation rate is on the order of one in ten billion per base per division — astonishingly low.

When MMR breaks — when one of the core MMR genes is inactivated by mutation or by epigenetic silencing — the mutation rate goes up by a factor of 100 to 1,000. Tumors with MMR deficiency accumulate mutations rapidly. They are called **hypermutated**. They can have hundreds of thousands of point mutations, even millions.

\[Pause.\]

The substitution signatures of MMR deficiency are broad. SBS6, SBS15, SBS20, SBS26 — each one captures a slightly different aspect of the MMR-deficient mutation pattern — but they share a common feature: a broad distribution across multiple C-to-T contexts, with characteristic peaks. Each of the four sub-signatures has a slightly different shape, reflecting different combinations of MMR-pathway gene losses. SBS6 is the most common, often the dominant signature in colorectal cancers with MMR deficiency. SBS15 and SBS20 appear in stomach cancers and others. SBS26 in endometrial cancers. The classification is somewhat empirical — the signatures were extracted from the data, and the precise mapping to which specific MMR gene was lost is an active area of research.

But the most important clinical correlate of MMR deficiency is **microsatellite instability** — MSI. A microsatellite is a short tandem repeat in the genome — for example, a stretch of (CA)n repeats, where n might normally be ten or twenty. Microsatellites are particularly prone to replication slippage, where the polymerase loses count and adds or removes a repeat unit. Normally, MMR catches these slippage events and corrects them. When MMR is broken, the slippage errors persist, and microsatellites become unstable in length — different cells in the same tumor have different numbers of repeats at the same microsatellite locus. This is **microsatellite instability**.

MSI can be measured by a clinical assay — typically PCR amplification of a panel of standard microsatellite loci, with comparison to matched normal tissue. If a tumor has unstable lengths at multiple loci, it's called **MSI-high** (MSI-H). MSI-H tumors are essentially synonymous with MMR-deficient tumors. They occur in roughly 15% of colorectal cancers, 25% of endometrial cancers, and smaller fractions of stomach, ovarian, and a few other cancers.

The analogy. **MMR deficiency signatures — SBS6, 15, 20, 26 — the high-mutation-burden patterns of mismatch repair loss; high MSI; predicts checkpoint inhibitor response.**

\[Pause.\]

Now, why is MMR deficiency clinically critical? Because of the connection to immunotherapy. We'll spend a whole segment on this in Segment 16, but here's the headline. MMR-deficient tumors have huge mutation burdens, which means they produce huge numbers of neoantigens — mutant proteins on the tumor cell surface that the immune system recognizes as foreign. They are, biologically, screaming "I'm a tumor!" at the immune system. The reason they grow at all is that they've usually figured out how to suppress the immune response, often by upregulating immune checkpoints like PD-L1.

Checkpoint inhibitor immunotherapy — drugs like pembrolizumab and nivolumab — releases the brakes on the immune system, letting the T cells that already recognize the tumor's neoantigens actually attack. The more neoantigens the tumor has, the more powerful the response. MMR-deficient tumors, with their enormous mutation burdens, respond beautifully to checkpoint inhibitors — sometimes with durable, complete responses lasting years.

This led to one of the most important regulatory decisions in oncology history. In 2017, the FDA approved pembrolizumab for **any** solid tumor with MMR deficiency or MSI-high status, regardless of tissue of origin. This was the first **tissue-agnostic** approval in cancer — the drug was approved based on a biomarker, not on a specific cancer type. A colon cancer, a uterine cancer, a stomach cancer, a brain cancer — if it's MMR-deficient, you can treat it with pembrolizumab. The biomarker is the indication.

And that biomarker can be detected three ways. **Way one**: immunohistochemistry, showing loss of MLH1, MSH2, MSH6, or PMS2 protein expression in the tumor. **Way two**: PCR-based MSI testing on microsatellite loci. **Way three**: mutational signature analysis showing strong SBS6/15/20/26 contribution and an elevated mutation burden. All three approaches detect the same underlying biology — broken MMR — and all three can guide therapy. Mutational signatures are now formally entering the clinical decision pipeline as a fourth modality for MSI/MMR-d detection.

So that's MMR. Common, life-threatening cancer biology that is now also a major treatment opportunity, with mutational signatures as one of the validated biomarkers. Now let's do the related but distinct phenomenon of polymerase mutant hypermutators.

---

## SEGMENT 11 — Polymerase epsilon and delta — the ultra-hypermutators

Some tumors carry mutations not in the mismatch repair genes, but in the proofreading domains of the DNA polymerases themselves — specifically, in the exonuclease domain of **POLE** (polymerase epsilon) or, more rarely, **POLD1** (polymerase delta). These are the two main replicative polymerases — POLE replicates the leading strand, POLD1 replicates the lagging strand. Both have intrinsic proofreading exonuclease activity that catches and corrects their own polymerase mistakes in real time. When the exonuclease domain is mutated, proofreading fails, and the polymerase's raw error rate is no longer corrected.

The result is **ultra-hypermutation**. POLE-mutant tumors can carry over a million point mutations — sometimes ten times more than even MMR-deficient hypermutators. They are among the most heavily mutated tumors known. POLE mutations are most commonly seen in endometrial cancers and colorectal cancers, often in young patients with no prior chemotherapy exposure.

The mutational signatures of POLE mutation are **SBS10a and SBS10b** in COSMIC. They have distinctive shapes — particularly a strong peak at the C-to-A category at TCT context, and at the C-to-T category at TCG context, reflecting the specific error preferences of an unproofread polymerase epsilon. POLD1 mutations produce a related but slightly different signature, SBS10c.

\[Pause.\]

The clinical significance is similar to MMR-deficient tumors. POLE-mutant tumors have such enormous mutation burdens that they produce massive numbers of neoantigens, and they respond beautifully to checkpoint inhibitors. POLE-mutant endometrial cancers, in particular, have a paradoxically excellent prognosis despite their alarming mutation burden — because the immune system can often control them. They are a textbook case of "high mutation burden equals high immunotherapy responsiveness."

POLE-mutant tumors are also a case where mutational signature analysis can clarify diagnosis. A tumor with a million mutations could be MMR-deficient or POLE-mutant or both. The signature profiles distinguish them — MMR deficiency produces SBS6/15/20/26; POLE mutation produces SBS10a/b. Sometimes both signatures are present simultaneously — a POLE-mutant tumor that also lost MMR — and the mutation burden is correspondingly extreme. The decomposition into signatures lets you read off the mechanism.

This is also a beautiful illustration of an important conceptual point. Mutational signatures detect **functional states**, not just genetic mutations. A POLE missense mutation in the exonuclease domain might or might not impair proofreading — there are many variants of uncertain significance. The signature tells you whether the variant is actually disrupting function. SBS10a in the genome means: this POLE variant, whatever it is, is producing the unproofread phenotype. The signature confirms the functional consequence in a way that genotyping alone can't.

---

## SEGMENT 12 — Beyond SBS — indel signatures, doublet substitutions, and structural variants

So far, every signature we've talked about has been a **single base substitution** signature — SBS. One base mutated to a different base. But mutations come in other flavors too. Small insertions and deletions — **indels** — are common. Two adjacent bases mutating simultaneously — **doublet base substitutions** (DBS) — happen, particularly with UV-induced CC-to-TT and platinum-induced events. Large-scale chromosomal rearrangements — **structural variants** (SV) — happen, especially in cancers with HR deficiency or with mechanical chromosome problems. Copy number alterations — gains and losses of chromosomal regions — happen pervasively.

The same conceptual framework applies to all of these. For each mutation type, you define a set of categories that captures the relevant contextual information, and you extract signatures via NMF from large datasets.

**Indel signatures** were formalized in COSMIC v3 as the **ID signatures**. The classification system distinguishes single-base insertions and deletions from longer ones, distinguishes the inserted or deleted base (C/T versus A/G), and crucially captures the context — particularly whether the indel occurs in a homopolymer tract (a run of the same base), in a microsatellite, or at a microhomology boundary. The full classification has eighty-three indel categories. NMF extraction has identified about eighteen distinct ID signatures.

Some ID signatures are familiar in their cause. **ID1 and ID2** capture small indels at long homopolymer tracts, which are common in mismatch repair-deficient tumors (MMR catches polymerase slippage at homopolymers; when MMR is gone, slippage errors persist as indels). **ID6 and ID8** capture larger deletions at microhomology, characteristic of HR-deficient tumors using microhomology-mediated end joining to repair their double-strand breaks. **ID3** is a tobacco-associated indel signature, parallel to SBS4. Each ID signature has its own attribution.

**Doublet base substitution signatures** — the DBS family — capture cases where two adjacent bases mutate together. DBS1 is the UV doublet signature, capturing the CC-to-TT events we discussed earlier. DBS2 is a tobacco-associated doublet signature. DBS5 is platinum chemotherapy. About eleven DBS signatures are catalogued.

**Structural variant signatures** are even more recent and still being formalized. The categories capture different kinds of large rearrangements — deletions, duplications, translocations, inversions — and their size distributions. SV signatures of HR deficiency, for example, are characterized by an excess of large tandem duplications (BRCA1 deficiency) or smaller deletions (BRCA2 deficiency).

\[Pause.\]

The analogy. **ID and SV signatures — the same logic applied to indels and structural variants; each process leaves its own fingerprint at each scale.** UV doesn't just leave SBS7 in the 96-class substitution histogram — it also leaves DBS1 in the doublet histogram. BRCA deficiency doesn't just leave SBS3 — it also leaves ID6/ID8 in the indel histogram and tandem duplications or small deletions in the SV histogram. Every mutational process operates at multiple scales simultaneously, and signature analysis at each scale gives you a more complete picture.

The combination is more powerful than any single scale. The Myriad HRD test, which we mentioned earlier, doesn't just use SBS3 — it combines an SBS-3-like measure with loss-of-heterozygosity counts, telomeric allelic imbalance, and large-scale state transitions, all of which are SV-flavor measurements. The composite score has higher predictive power for PARP inhibitor response than any single measure.

So when you read about modern signature analysis, you'll see references to SBS, ID, DBS, SV, and sometimes CN (copy number) signatures. Each one is a parallel system. The 96 substitution classes were just the start. Now we have the full multi-scale catalog.

---

## SEGMENT 13 — The decipherer workflow — SigProfiler and the software ecosystem

Let's get practical. If you have a cancer genome — or a thousand cancer genomes — and you want to do mutational signature analysis, what software do you actually use? What's the workflow?

The dominant tool is **SigProfiler**, an open-source Python package developed by Alexandrov's group at UCSD. SigProfiler is actually a suite of tools, with a few key modules:

**SigProfilerMatrixGenerator** takes a list of mutations (typically a VCF file from variant calling on tumor whole-genome or whole-exome sequencing) and converts them into the count matrices that signature analysis needs. It generates the 96-class SBS matrix, the 83-class ID matrix, the 78-class DBS matrix, and various others. This is the data preparation step.

**SigProfilerExtractor** runs NMF on a cohort of mutation matrices to extract de novo signatures. This is the unsupervised discovery step — useful when you have a large new dataset and want to find signatures that might be novel or different from the COSMIC reference. SigProfilerExtractor handles all the technical details of NMF — multiple random initializations, choosing the optimal number of signatures, computing stability metrics — that Alexandrov originally developed in 2013.

**SigProfilerAssignment** (formerly known as the SigProfilerSingleSample module, or sometimes called sigprofiler decompose) takes individual tumor mutation matrices and fits them to the COSMIC reference catalog, producing per-tumor exposure estimates for each known signature. This is the clinical step — useful when you have one new tumor and want to know which known signatures are active in it.

There are other tools in the ecosystem. **deconstructSigs** in R was an early and influential tool, particularly popular in clinical bioinformatics, that did per-tumor fitting against the COSMIC v2 catalog. **MutationalPatterns** in R is a flexible toolkit for both extraction and visualization. **SignatureAnalyzer** is a Broad Institute tool that uses a Bayesian variant of NMF. **MuSiCal** is a more recent tool that handles batch effects better. The field has converged on SigProfiler as the de facto standard, but multiple tools exist and produce broadly consistent results.

\[Pause.\]

The end-to-end workflow looks like this. **Step one**: sequence the tumor genome (usually whole-exome or whole-genome) and a matched normal sample (typically blood, to allow distinguishing germline variants from somatic mutations). **Step two**: align the reads, call somatic variants using a tool like Mutect2 or Strelka, and produce a VCF file of high-confidence somatic SNVs, indels, and ideally SVs. **Step three**: run SigProfilerMatrixGenerator to convert the VCF into mutation count matrices in the 96-class (SBS), 83-class (ID), and other formats. **Step four**: run SigProfilerAssignment to fit the tumor's mutation profiles against the COSMIC reference catalog, producing exposure estimates per signature. **Step five**: examine the exposure estimates, identify which signatures dominate the tumor, and interpret the biology and clinical implications.

For research cohorts where you want to look for novel signatures, you replace step four with SigProfilerExtractor on the whole cohort, then map the extracted signatures back to COSMIC for naming, and identify any that don't match anything in the catalog as potential novel signatures.

The whole pipeline can be run on a typical cancer genome in a few minutes on a workstation. The bottleneck is usually the upstream sequencing and variant calling, not the signature analysis itself. Once you have the mutation list, the signature analysis is fast.

A few practical issues to be aware of. **First**, signature analysis is sensitive to the variant calling. False positive variant calls — sequencing errors mistakenly called as mutations — can introduce spurious signatures, particularly artifact patterns at certain contexts. Quality control of the variant calls is essential. **Second**, low mutation counts produce unreliable signature assignments. If a tumor has only a few hundred mutations, signature analysis has limited statistical power and the exposure estimates have wide error bars. Whole-genome sequencing is preferred over whole-exome for this reason, when feasible. **Third**, the choice of reference catalog version matters. SBS-numbering has been stable across versions, but minor refinements have occurred, and a few signatures have been split, merged, or retired. Always report which COSMIC version you used.

Modern clinical pipelines — both research and increasingly clinical — incorporate signature analysis as one of the standard outputs of tumor genome sequencing. A clinical report from a comprehensive genomic profiling assay will typically include not just the list of driver mutations and the tumor mutation burden, but also the signature profile, with relevant signatures highlighted for clinical decision support. This is becoming the new standard of care for advanced cancers.

---

## SEGMENT 14 — Clinical applications — how signatures change treatment decisions

Let's bring all of this together and walk through the concrete clinical applications of mutational signature analysis as practiced today, in 2026. There are roughly half a dozen places where signature analysis is now actively influencing treatment decisions, and a few more where it's likely to in the next few years.

**Application one: HRD detection and PARP inhibitor selection.** We covered this in Segment 7. SBS3, combined with ID6/ID8 and SV signatures of HR deficiency, identifies tumors with functional homologous recombination defects. These tumors respond to PARP inhibitors regardless of whether a specific BRCA mutation was found. Applications include ovarian cancer (where PARP inhibitors are now standard maintenance therapy for HRD-positive disease), metastatic breast cancer, metastatic prostate cancer, and pancreatic cancer. Several FDA-approved companion diagnostic tests now include HRD signature-based components, including the Myriad myChoice CDx.

**Application two: MMR/MSI detection and checkpoint inhibitor selection.** We covered this in Segment 10 and will go deeper in Segment 16. SBS6/15/20/26 together with ID1/ID2 identify MMR-deficient tumors. These tumors respond to pembrolizumab and other checkpoint inhibitors, regardless of tissue of origin. Pembrolizumab has tissue-agnostic FDA approval for MMR-deficient tumors. Signature analysis is one of multiple modalities for detecting MMR deficiency.

**Application three: tobacco signature for early lung cancer risk.** SBS4 burden in lung tumors confirms a smoking-related etiology, which has implications for risk stratification, screening intensity, and counseling. Some research is exploring whether SBS4-like signatures might be detectable in liquid biopsies (cell-free DNA in blood) as an early-detection biomarker for smoking-related cancers, though this is not yet clinical.

**Application four: UV signature for skin cancer attribution and immunotherapy response.** SBS7 confirms UV etiology in melanomas and other skin cancers. High SBS7 burden correlates with high neoantigen load and predicts checkpoint inhibitor response — which is one reason melanoma was the first cancer where checkpoint inhibitors succeeded dramatically.

**Application five: chemotherapy-induced signatures in recurrence.** SBS11 in recurrent gliomas confirms temozolomide-driven hypermutation; platinum signatures confirm prior platinum exposure. These observations inform the choice of subsequent therapy — for example, a temozolomide-hypermutated recurrence may be a particularly good candidate for immunotherapy because of its high mutation burden.

**Application six: aristolochic acid and other geographic exposures.** SBS22 is the aristolochic acid signature, common in urothelial cancers in regions where the herb Aristolochia is consumed in traditional medicine (parts of Asia, particularly Taiwan and the Balkans). SBS22 confirms aristolochic acid exposure, which has public health implications and informs both patient counseling and prevention efforts.

\[Pause.\]

The clinical translation summary. **Signature 3 → BRCA-like deficiency → PARP inhibitor; MMR signatures → MSI-high → pembrolizumab. We're reading the tumor's history to predict treatment response.**

That sentence is the headline. The whole point of mutational signature analysis, clinically, is to read the tumor's history — what damaged its DNA, what repair pathways are working, what repair pathways are broken — and use that information to predict which treatments will work. The genome is the data source. The signatures are the readout. The treatment decision is the consequence.

This is, in some ways, the most concrete realization of the long-promised "precision medicine" framework. We're not just picking drugs based on what the tumor looks like under a microscope, or what tissue it came from. We're picking drugs based on what the tumor's DNA repair pathways are doing, as inferred from the pattern of mutations the tumor has accumulated. The mutations themselves — millions of them in some tumors, distributed across the genome in a complex pattern — encode the information we need to make the decision.

\[Pause.\]

I want to make one more clinical observation here. The economic and practical advantages of mutational signature analysis are significant. The same sequencing data that already gets generated for variant calling — to identify driver mutations and guide targeted therapy — can be repurposed for signature analysis at essentially zero additional cost. No new specimen, no new assay, no new tissue burden on the patient. Just additional analysis on data we're already collecting. This kind of cost-free additional information is rare in medicine, and it makes signature analysis particularly attractive for resource-constrained clinical settings.

The barrier to broader clinical use is not cost or technology. It's interpretation. Many clinicians don't yet know how to read a mutational signature report. The signature catalog is still expanding. The clinical guidelines for which signatures imply which treatments are still being formalized. Education and standardization are the rate-limiting steps. Five years from now, I expect signature interpretation to be a routine part of any oncologist's training. We're in the early years of clinical adoption.

---

## SEGMENT 15 — Mutational signatures in non-cancer tissue — the aging genome

Here's something that surprises people when they first hear it. Mutational signatures are not unique to cancer. They are present in **every cell in your body**, all the time. Your normal cells accumulate mutations throughout your life — slowly, mostly silently, never enough to cause cancer in most cases, but at a steady rate that mirrors the same biochemistry that drives the cancer signatures. The same processes that make cancer mutations make normal-cell mutations. Cancers are just cells where some of these mutations happened to hit growth-controlling genes.

This was nearly impossible to study until quite recently, because normal cells in tissue are clonal mixtures — many different lineages of cell, each with its own private mutation history. If you bulk-sequence a piece of normal liver, the mutation signal is averaged across thousands of independent lineages, and any single mutation is at one-in-thousands frequency, below the limit of standard variant calling. You can't see individual cell histories from bulk data.

The breakthroughs came from two directions. **First**, single-cell genome sequencing, particularly using whole-genome amplification or via in vitro expansion of single cells into clones for sequencing. **Second**, very deep targeted sequencing of normal tissue with sensitive variant callers that can detect low-frequency subclonal mutations. Together, these approaches let researchers — particularly the groups of Inigo Martincorena, Phil Jones, and others at the Sanger Institute and elsewhere — start to study the mutational landscapes of healthy tissues.

The findings have been remarkable. **Normal esophagus** in middle-aged adults harbors massive numbers of clonal expansions carrying driver mutations — NOTCH1, TP53, others — at high frequency. Many of these clones are large patches of macroscopically normal tissue. The clones are not cancer; they're carrying mutations but not yet enough to break growth control. **Normal skin** from sun-exposed body sites contains clonal patches with SBS7 (UV) signatures, exactly as you'd expect — your skin records your sun exposure even before any tumor forms. **Normal lung** in smokers contains clonal patches with SBS4 (tobacco) signatures, again as expected. Smoking damages your lung cells in patterns identical to lung cancer signatures, just usually without crossing the threshold to malignancy.

\[Pause.\]

There's also a class of signatures that appear in essentially every tissue, accumulating with age. The most prominent is **SBS1**, the clock-like aging signature — characterized by C-to-T transitions specifically at CpG sites. The biochemistry: cytosines in CpG dinucleotides are heavily methylated in mammalian genomes (about 70% of CpGs are methylated as 5-methylcytosine). Methylated cytosines spontaneously deaminate at a slow but steady rate, converting to thymine (because deamination of 5-methylcytosine produces T directly, not U; T isn't recognized as foreign by base excision repair). This produces C-to-T transitions at CpG sites at a roughly constant rate per cell division. SBS1 accumulates linearly with age in essentially every tissue. It is the closest thing we have to a true molecular clock.

A related signature, **SBS5**, is also clock-like but its etiology is less clear. SBS5 has a flatter shape than SBS1 and accumulates roughly linearly with age in many tissues, but the underlying biochemistry — which DNA damage events or repair imperfections produce it — is still debated. It might reflect a combination of polymerase errors and oxidative damage accumulated steadily over time.

The presence of these clock-like signatures in normal tissue has remarkable implications. It means that the genome of every cell in your body is, in some sense, an archive of your life — your sun exposure, your smoking history, your diet, your chemotherapy if you had any, your DNA repair pathways' performance, your age. All of it recorded. Most of it never read, in most people, in most cells. But the information is there.

This also means that the boundary between "normal cell" and "cancer cell" is fuzzier than the textbook picture suggests. A 60-year-old's skin contains thousands of clonal patches each carrying one or two cancer-driver mutations on top of a sun-damage signature background. Most of those patches never become tumors. A few do. The transition is stochastic and gradual, and mutational signatures let us see the intermediate steps that were invisible before.

\[Pause.\]

And there's a frontier here. Researchers have begun extracting signatures from somatic mutations in **single human neurons**, single colon crypts, single blood stem cells, single hepatocytes. Different tissues accumulate different signature profiles at different rates. Hepatocytes have a particular oxidative-damage signature. Spermatogonial stem cells have their own. Cardiomyocytes accumulate very few mutations because they don't divide much. Each tissue has its own mutational aging trajectory. We're starting to map the mutational geography of the entire human body, in healthy people, as a function of age. This is a new field — mutational aging — and it's deeply enabled by the same signature analysis framework that started in cancer.

---

## SEGMENT 16 — The MMR-immunotherapy connection in depth

I promised in Segment 10 we'd return to the MMR-immunotherapy connection in more depth, because it is one of the most important stories in modern oncology and a beautiful case study in how mutational signatures connect to biology and therapy.

The story begins with the observation, in the early 2010s, that some cancers responded dramatically to checkpoint inhibitor immunotherapy while others didn't. The first checkpoint inhibitor, ipilimumab (anti-CTLA-4), was approved in 2011 for melanoma based on durable responses in a fraction of patients. Then pembrolizumab and nivolumab (anti-PD-1) emerged, with broader activity. By 2014, it was clear that some tumor types — melanoma, lung cancer (especially in smokers), some bladder cancers, MSI-high colorectal cancers — responded much better than others. Pancreatic cancer, glioblastoma, microsatellite-stable colorectal cancer mostly didn't respond.

The question was why. What made some tumors immunotherapy-responsive and others not?

The answer, worked out over the following years through a combination of clinical trials, immunology, and tumor genomics, was: **mutation burden and neoantigen production**. The more mutations a tumor had, the more chances it had to produce mutant proteins that the immune system would recognize as foreign. T cells could only attack what they could see, and the visible targets — neoantigens — were the mutant peptides displayed on the tumor cells' MHC molecules. High mutation burden equals lots of neoantigens equals lots of visibility equals strong immunotherapy response.

And which tumors had the highest mutation burdens? Melanomas (driven by UV — SBS7). Smoker lung cancers (driven by tobacco — SBS4). MMR-deficient tumors (driven by broken mismatch repair — SBS6/15/20/26). POLE-mutant tumors (driven by broken polymerase proofreading — SBS10a/b). The high-immunotherapy-responsive tumors were precisely the tumors with the highest signature-driven mutation burdens.

\[Pause.\]

This was, in some ways, the moment mutational signatures and immunotherapy converged into one unified picture. The mutational signature analysis tells you what kinds of mutational processes have been operating. The mutation burden tells you how many mutations there are. The neoantigen prediction tools (which take the list of mutations and predict which ones produce immunologically visible peptides) tell you which mutations are likely to be recognized by T cells. The clinical response tells you whether the patient's immune system is able to act on that visibility.

The MMR-immunotherapy connection is the cleanest case. In 2015, Le et al. published a landmark study in NEJM showing that MMR-deficient colorectal cancers had a 40% objective response rate to pembrolizumab, while MMR-proficient cancers had essentially no response. That single trial led, two years later, to the FDA's first tissue-agnostic approval — pembrolizumab for any solid tumor with MMR deficiency.

The signature side of the story is that MMR deficiency — detected by direct genotyping, by immunohistochemistry, by PCR-based MSI testing, or by SBS6/15/20/26 signature profile — predicts a population of tumors that will respond to checkpoint inhibitors. The signature is the predictor. The signature is the biomarker. The signature is what makes pembrolizumab worth giving to a particular patient.

The analogy. **MMR deficiency signatures imply MSI-high status, which predicts pembrolizumab response. The signature reads off the biology that predicts the treatment response.**

\[Pause.\]

This story is still expanding. POLE-mutant tumors with their SBS10a/b signatures also respond well to checkpoint inhibitors, by exactly the same logic — high mutation burden, high neoantigen load. There's growing interest in whether high APOBEC signature activity (SBS2/SBS13) is also predictive of checkpoint inhibitor response, particularly in bladder and lung cancers. Clinical trials are testing whether mutational signatures more broadly — beyond just mutation burden — predict immunotherapy response, since the *kind* of mutations a tumor has might matter as well as the number.

There is also the inverse story. Some signatures are associated with cold, immunotherapy-resistant tumors. Cancers driven primarily by SBS5 (aging) or SBS1 (CpG deamination) tend to have lower mutation burdens and weaker neoantigen profiles, and these are often the immunotherapy non-responders. Pancreatic cancer is the textbook example — relatively few mutations, weak immune visibility, poor checkpoint inhibitor response. The signature analysis tells you not just who will respond but also who probably won't.

The clinical impact is enormous. Checkpoint inhibitors are expensive — tens of thousands of dollars per course — and have real toxicity, including life-threatening autoimmune reactions. Being able to predict, from a signature analysis, which patients will benefit is genuinely valuable. And the prediction comes essentially for free, from sequencing data that's already being collected for other reasons.

---

## SEGMENT 17 — Limitations — what signature analysis cannot do

I want to be honest about the limitations of mutational signature analysis, because it would be unfair to leave you with the impression that this is a fully solved problem with clean answers in every case. It's not. Let me walk through the main caveats.

**Limitation one: small samples are noisy.** Signature analysis works best on tumors with lots of mutations — thousands or tens of thousands. When a tumor has only a few hundred mutations (as in many pediatric cancers, many indolent adult cancers, and many early-stage tumors), the signal-to-noise ratio in the 96-class histogram is poor. Individual context counts have wide Poisson uncertainty. Signature exposure estimates have wide confidence intervals. Sometimes the signature analysis can't reliably tell you anything beyond "this tumor has the slow aging signature and something else, maybe."

The cure for this is more data — whole-genome sequencing instead of whole-exome (about thirty-fold more mutations); pooling tumors of the same type for cohort-level analysis when individual tumors are too sparse. But for a single tumor with a single biopsy and a limited budget, sometimes signature analysis just can't give you a clean answer.

**Limitation two: signature overlap.** Some signatures are remarkably similar to each other, and distinguishing them is difficult. SBS1 (CpG deamination) and SBS5 (clock-like, unknown cause) both contribute roughly proportionally to age, with overlapping shape profiles, and they're often hard to separate. The MMR-deficient signatures (SBS6, SBS15, SBS20, SBS26) overlap with each other and with parts of POLE signatures. Different NMF runs with different parameters can apportion the mutations among similar signatures differently. The exposure estimates have real uncertainty.

The cosine similarity between similar signatures is often above 0.8 — meaning they share more than 80% of their shape — which is uncomfortably close. This is one reason why mutational signature analysis is best treated as a probability distribution over possible explanations rather than a definitive assignment.

\[Pause.\]

**Limitation three: novel signatures versus noise.** When you run signature extraction on a new cohort, NMF will produce however many signatures you ask for. If you ask for 20 signatures, it gives you 20. If you ask for 30, it gives you 30. How do you know whether a "novel" signature is a real new mutational process or just a noise artifact of overfitting? This is genuinely hard. The standard approach is to require reproducibility across multiple NMF runs with different random initializations, and to require the signature to appear in multiple independent cohorts. But even with these safeguards, some published "novel" signatures have later turned out to be artifacts — sometimes sequencing platform-specific errors, sometimes contamination patterns, sometimes batch effects.

This is a place where the field has had to develop critical hygiene over time. Early signatures were extracted with looser criteria; the COSMIC team has retired or merged several signatures across versions as more data clarified what was real and what was artifact. The current catalog is more conservative than early ones.

**Limitation four: causal versus correlative interpretation.** A signature is a pattern. The biological cause of the pattern is inferred from correlations — Signature 4 correlates with smoking history; Signature 7 correlates with sun-exposed body sites; et cetera. The causal interpretation is usually backed up by controlled experimental work — exposing cell lines to a candidate mutagen and reproducing the signature — but for some signatures, especially newer ones, the cause is uncertain or unknown. SBS5 is the most famous case of a major, prevalent signature whose etiology is still genuinely unclear.

**Limitation five: timing information is limited.** A mutational signature tells you that a particular process operated in the cell's history, but it doesn't tell you precisely when. A tumor with SBS4 had some tobacco exposure at some point, but the signature alone can't tell you whether the smoking was recent or decades old. With careful clonal reconstruction — examining whether signature-attributed mutations are present in early-arising clonal mutations or only in late-arising subclonal ones — you can extract some temporal information, but it requires deep, multi-region sequencing and sophisticated analysis. Most signature analyses provide a cumulative picture without precise timing.

**Limitation six: tissue context.** Some signatures appear differently in different tissues, with different intensities, possibly because of tissue-specific factors like transcription, chromatin state, or repair pathway expression. A signature extracted primarily from one tissue may not generalize perfectly to another. The COSMIC catalog tries to handle this by extracting signatures from diverse tissues and weighting tissue contributions appropriately, but tissue-specific effects can still confound interpretation.

\[Pause.\]

These limitations are not reasons to dismiss mutational signature analysis. They are reasons to use it carefully — to report exposure estimates with uncertainty, to interpret novel signatures cautiously, to require independent validation for clinical applications, to treat signature attribution as evidence rather than proof. With those caveats, signature analysis is still extraordinarily useful, but it is not a black box that spits out definitive answers. It's a tool that requires judgment.

---

## SEGMENT 18 — The frontier — PCAWG, single-cell signatures, and AI

Let's close with the frontier — what's happening at the cutting edge of mutational signature research right now, and what's likely to mature into clinical use over the next five to ten years.

**Frontier one: pan-cancer whole-genome atlases.** The Pan-Cancer Analysis of Whole Genomes (PCAWG) consortium, which published its main results in Nature in 2020, generated whole-genome sequencing data on about 2,700 cancer specimens across 38 tumor types. This is the dataset that drove much of COSMIC v3. The successor projects — including HMF (Hartwig Medical Foundation) in the Netherlands, with tens of thousands of whole-genome sequenced metastatic cancers; the 100,000 Genomes Project in the UK; and various others — are pushing the available data into the tens or hundreds of thousands of cancer genomes. With that much data, rarer signatures become detectable, smaller subclonal signature variations become resolvable, and rare combinations of mutational processes become statistically tractable. The catalog will keep growing.

**Frontier two: single-cell mutational signatures.** As single-cell genome sequencing technology improves — and it is improving rapidly — it's becoming feasible to extract mutational signatures from individual cells, including individual normal cells. This unlocks an entirely new view of tumor heterogeneity (different subclones in a tumor may have different signature profiles, reflecting different histories) and of normal tissue (the mutational geography of a single organ at single-cell resolution). The early papers in this area, from groups including the van Boxtel lab in the Netherlands, are showing that even single neurons have detectable signature profiles. This is a frontier that will likely transform our understanding of cellular aging and cancer initiation.

\[Pause.\]

**Frontier three: AI-driven signature extraction.** NMF is, in some sense, a relatively simple machine learning approach. More sophisticated methods are now being applied — deep learning models, variational autoencoders, Bayesian neural networks — that can potentially extract more nuanced signatures, handle batch effects better, incorporate contextual information beyond trinucleotides, and integrate signatures from different mutation scales (SBS, ID, DBS, SV) into joint factorizations. Several groups, including Alexandrov's at UCSD and others, are publishing new methods on essentially a quarterly basis. The signature analysis toolkit five years from now will probably look quite different from today's SigProfiler.

**Frontier four: liquid biopsy signature detection.** Most signature analysis today is done on solid tumor biopsies. But circulating tumor DNA — cfDNA released by tumor cells into the bloodstream — is now sequenceable in many cancer patients, providing a less invasive way to monitor the tumor's genome. Initial work suggests that mutational signatures can be extracted from cfDNA, opening the door to non-invasive signature monitoring over time. This could be useful for tracking signature changes during therapy (does platinum chemotherapy add SBS31 to the genome over the course of treatment?), for early detection (does an emerging SBS4 signature in cfDNA indicate a developing lung lesion?), and for response monitoring.

**Frontier five: prophylactic and lifestyle implications.** This is less a research frontier and more an applied frontier. Because signatures are causally linked to specific exposures, they make the consequences of lifestyle choices tangible and visible. The genome of a smoker's lung literally shows SBS4. The genome of a sun-overexposed skin lesion shows SBS7. As more people get their cancers sequenced — and as costs continue to drop — these signatures become visible to patients, who can see, in their own DNA, the imprint of their exposures. There's a powerful public health communication here. "Smoking causes cancer" is a statement based on epidemiological correlations. "Your tumor's genome literally contains the SBS4 fingerprint of tobacco smoke" is a statement that someone can see, in their own data.

The analogy. **Signature 4 equals smoking. The genome is the receipt for every cigarette.** This is the kind of personal, vivid evidence that public health communication has lacked. Whether it changes behavior more than statistical evidence remains to be seen, but the visceral impact of seeing a UV signature in your own melanoma, or a tobacco signature in your own lung cancer, is real and personal in a way that abstract statistics are not.

\[Pause.\]

**Frontier six: integration with other -omics layers.** Mutational signatures are inferences from DNA alone. But cancer is a multi-layered phenomenon — DNA mutations, epigenetic changes, transcriptional reprogramming, protein expression, tumor microenvironment. The next generation of analysis is integrating mutational signatures with other -omics layers — methylation signatures (which capture epigenetic aging), transcriptional signatures of pathway activation, immune microenvironment characterization, et cetera. The synthesis will give a richer, more multi-dimensional portrait of each tumor than any single layer alone.

**Frontier seven: causal experimental confirmation.** For many signatures, the biological cause is still tentative — inferred from correlations rather than directly demonstrated. A growing effort is using controlled experimental systems — exposing cell lines or organoids to specific putative mutagens, sequencing the resulting genomes, and verifying that the expected signature appears — to nail down causal attributions for the remaining unattributed signatures. Several papers in the last few years have closed the loop on signatures whose causes were uncertain. The catalog is becoming more biologically grounded over time.

\[Pause.\]

Let me wrap up.

When you walked into this room two hours ago, you might have thought of cancer mutations as random — bad luck, accumulated damage, with no particular structure. After this lecture, I hope you see it differently. Every mutation is a record. Every cancer genome is an archive. Every mutagenic process — environmental, endogenous, iatrogenic — leaves a characteristic fingerprint that we can read mathematically out of the data using the 96-class framework, NMF, and the COSMIC catalog.

We've gone from qualitative observations in the 1990s ("smokers have a lot of G-to-T mutations") to a fully quantitative atlas of nearly a hundred distinguishable signatures by 2024, with clear biological attributions for most of them, clinical applications for several, and an expanding set of tools and databases that make the analysis routine. In one human generation, we went from "cancer mutations are random damage" to "cancer mutations are a structured record of the cell's history that we can decode and use to guide treatment."

The headline applications. **HRD signatures predict PARP-inhibitor response. MMR-deficiency signatures predict checkpoint inhibitor response. Tobacco signatures confirm smoking etiology. UV signatures confirm sun damage. Chemotherapy signatures track treatment-induced mutagenesis.** Each one is a place where reading the signature changes what we do for the patient.

The broader vision. **Mutational signatures are the molecular fingerprints of carcinogens, recorded by the genome itself, decoded by mathematics, and used to guide both prevention and treatment.** The genome remembers. We've learned to read what it remembers. And what it remembers is helping us treat cancer more precisely than ever before.

Thank you for your attention.

\[Pause.\]

---

## APPENDIX — Glossary and quick-reference summary of key signatures

This appendix is a quick reference for the key terminology and major COSMIC signatures discussed in the lecture. Use it as a study aid or a quick lookup when reading cancer genomics papers.

**Key terminology.**

**Mutational signature** — A characteristic pattern of mutations produced by a specific mutational process, represented as a probability distribution over mutation categories (typically the 96 trinucleotide-context SBS classes).

**96-class SBS framework** — The standard categorization of single-base substitutions, with six substitution types (C-to-A, C-to-G, C-to-T, T-to-A, T-to-C, T-to-G) crossed with sixteen possible trinucleotide contexts (the bases immediately five-prime and three-prime of the mutated base). Total: 96 categories.

**NMF — Non-negative matrix factorization** — The mathematical technique used to extract mutational signatures from cohorts of cancer genomes. Decomposes a mixture matrix into a signature matrix (the basis patterns) and an exposure matrix (how active each signature is in each tumor), with the constraint that no entries can be negative.

**COSMIC** — The Catalogue Of Somatic Mutations In Cancer, hosted by the Wellcome Sanger Institute. Maintains the canonical mutational signature reference catalog. Current version (as of 2024) is v3.4.

**SBS, ID, DBS, SV** — Categories of mutational signatures: Single-Base Substitution, Insertion/Deletion, Doublet Base Substitution, Structural Variant. Each operates on its own classification framework.

**Signature extraction** — The unsupervised discovery of signatures from a cohort via NMF.

**Signature fitting (signature assignment)** — Decomposition of a single tumor's mutation profile into known reference signatures from COSMIC.

**SigProfiler** — The dominant software toolkit for mutational signature analysis, developed by Alexandrov's group.

**HRD — Homologous recombination deficiency** — Loss of the high-fidelity HR pathway for DSB repair; classic cause is biallelic BRCA1/BRCA2 loss; predicts PARP inhibitor response.

**MMR-d, dMMR — Mismatch repair deficiency** — Loss of the post-replication MMR pathway; causes hypermutation; manifests as MSI-high; predicts checkpoint inhibitor response.

**MSI-high, MSI-H** — Microsatellite instability detected at multiple short tandem repeat loci; clinical marker of MMR deficiency.

**Tumor mutation burden (TMB)** — The total number of somatic mutations per megabase of sequenced genome; a major predictor of immunotherapy response.

**Kataegis** — Spatial clusters of localized hypermutation, typically APOBEC-driven, visible on rainfall plots as bunches of mutations close together along the genome.

**Rainfall plot** — A plot of intermutation distance versus genomic position; reveals spatial clustering of mutations such as kataegis.

\[Pause.\]

**Quick-reference summary of major signatures.**

**SBS1** — Spontaneous deamination of 5-methylcytosine at CpG sites; clock-like; accumulates with age; ubiquitous low-level signature in all tissues.

**SBS2** — APOBEC family C-to-T at TCW contexts; pan-cancer; clustered as kataegis.

**SBS3** — Homologous recombination deficiency (BRCA1/BRCA2 deficiency); flat distribution across 96 classes; breast, ovarian, pancreatic, prostate cancers; predicts PARP inhibitor response.

**SBS4** — Tobacco smoke (polycyclic aromatic hydrocarbons); C-to-A at NCN contexts; lung, head and neck, esophageal, bladder cancers in smokers.

**SBS5** — Clock-like, etiology unclear; relatively flat; accumulates with age in many tissues.

**SBS6, SBS15, SBS20, SBS26** — Mismatch repair deficiency; broad C-to-T patterns; correlated with MSI-high; predicts pembrolizumab response.

**SBS7a/b/c/d** — UV light; C-to-T at TCN and CCN dipyrimidine contexts; CC-to-TT doublet substitutions; melanoma and other skin cancers; correlates with high mutation burden and good immunotherapy response.

**SBS10a/b** — POLE proofreading mutation; ultra-hypermutator; endometrial and colorectal cancers; predicts checkpoint inhibitor response.

**SBS11** — Temozolomide chemotherapy; alkylation-induced C-to-T; common in recurrent glioblastomas after temozolomide treatment.

**SBS13** — APOBEC C-to-G at TCW contexts; paired with SBS2.

**SBS22** — Aristolochic acid; urothelial cancers in regions with traditional medicine exposure.

**SBS31, SBS35** — Platinum chemotherapy (cisplatin, carboplatin, oxaliplatin); appears in post-treatment metastases.

**DBS1** — UV doublet substitutions; CC-to-TT; pathognomonic for sun exposure.

**ID1, ID2** — Small indels at homopolymer tracts; MMR deficiency.

**ID3** — Tobacco-associated indels.

**ID6, ID8** — Deletions at microhomology; HR deficiency; co-occurs with SBS3.

\[Pause.\]

**Clinical decision summary.**

If a tumor shows **SBS3 plus ID6/ID8 plus large-scale structural variants** consistent with HRD → consider PARP inhibitor therapy.

If a tumor shows **SBS6/15/20/26 plus ID1/ID2 plus high mutation burden** consistent with MMR deficiency → consider pembrolizumab or other checkpoint inhibitor.

If a tumor shows **SBS10a/b plus ultra-high mutation burden** consistent with POLE-mutant hypermutator → consider checkpoint inhibitor.

If a tumor shows **SBS7 with high mutation burden** (typical of melanoma) → consider checkpoint inhibitor; UV etiology confirmed.

If a tumor shows **SBS4** in lung tissue → confirms tobacco etiology; informs counseling and risk stratification.

If a recurrent tumor shows **SBS11** in glioma context → confirms temozolomide-driven hypermutation; informs subsequent therapy choice.

\[Pause.\]

**Recommended further reading.**

Alexandrov, L. B. et al. (2013). Signatures of mutational processes in human cancer. Nature 500, 415-421. — The foundational paper.

Alexandrov, L. B. et al. (2020). The repertoire of mutational signatures in human cancer. Nature 578, 94-101. — The PCAWG-era expansion paper.

The COSMIC website at cancer.sanger.ac.uk/signatures — Current reference catalog with interactive visualizations of all signatures.

The SigProfiler GitHub repository — Software tools for mutational signature analysis in Python.

\[Pause.\]

That concludes the lecture and the appendix. Thank you again. The genome remembers. Now you can read what it remembers.

---

