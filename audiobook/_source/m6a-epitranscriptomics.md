# m6A and the Epitranscriptome

**A 2-hour undergraduate genomics lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for board work or discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There is a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — RNA is not just four letters, and why that took fifty years to matter

Alright, let us get started. Good morning. For the next two hours we are going to talk about a part of molecular biology that, until about fifteen years ago, was a quiet backwater — a topic that biochemists studied as a curiosity of transfer RNA structure and that almost nobody else in genomics thought very hard about. And then, in 2012, two papers came out within a few months of each other, both showing the same thing — that you could map a particular chemical modification on messenger RNA, called **N6-methyladenosine**, abbreviated **m6A**, across the entire transcriptome of a cell. And in the years since, that quiet backwater has erupted into one of the most active fields in RNA biology. We now know that messenger RNA, the central currency of gene expression, is decorated with chemical modifications that profoundly affect how it gets handled, translated, and destroyed. We now call this layer of biology the **epitranscriptome**, by direct analogy with the epigenome. And we now know that mutating the enzymes that read, write, and erase m6A is lethal — embryos die, stem cells fail to differentiate, leukemias depend on it. Today is your tour of that field.

Let me start with a fact that should reorient your thinking about RNA. In an introductory biochemistry class you learn that RNA is made of four bases — adenine, uracil, guanine, cytosine — A, U, G, C — and you spend most of your time thinking about the sequence of those four letters. The mRNA codes for protein in codons of three; the four letters are the alphabet; that is the picture. Now hold that picture, and let me tell you what we actually know. There are, at last count, more than **170 distinct chemical modifications** that have been documented on natural RNA across all domains of life. Not four letters. One hundred and seventy-plus. Methylations, hydroxylations, deaminations, isomerizations, sugar modifications, base substitutions. A real RNA molecule in a real cell is not a polymer of four canonical nucleotides; it is a polymer studded with chemical decorations, some abundant, some rare, some functionally critical, most still poorly understood.

\[Pause.\]

Now, most of those 170-plus modifications are on transfer RNA and ribosomal RNA, where they have been known for decades. The tRNA in your cells is something like ten to twenty percent modified — small specialty bases that fine-tune codon recognition and folding. The ribosome itself is a heavily decorated RNA-protein machine, with pseudouridines and 2′-O-methylations clustered at the catalytic core. We have known this since the 1960s. And for a long time, the assumption was that mRNA — the messenger, the working transcript that goes to the ribosome and gets translated — was essentially unmodified beyond the 5′ cap and the poly-A tail. mRNA was assumed to be the clean, plain, four-letter polymer that the textbook drew.

That assumption turned out to be wrong, and the modification that broke it open is **N6-methyladenosine** — m6A. m6A is a tiny chemical decoration: a methyl group, just CH3, attached to the nitrogen at position six of an adenine ring. It is about as small a chemical change as you can make to a base. It does not alter base pairing — m6A still pairs with U, just like ordinary A. It does not change the codon. It is invisible to standard sequencing. But it is read by specific proteins in the cell, and those proteins decide whether the mRNA carrying it gets translated fast, translated slow, or destroyed entirely. m6A is, in functional terms, **RNA's punctuation mark — a small chemical tag that does not change the letters but changes how the cell reads the message.**

If you walk out of here in two hours and you can do three things — one, sketch what m6A is chemically, name the writers METTL3 and METTL14, the erasers FTO and ALKBH5, and the readers YTHDF1, 2, and 3, and explain in plain English what each set does; two, describe the MeRIP-seq workflow and explain why it was the breakthrough that opened the field in 2012, plus name the modern improvements that get you single-nucleotide resolution; three, look at a modern paper that says "we mapped the m6A epitranscriptome and identified differentially methylated transcripts" and have a real intuition for what is being claimed, what the noise looks like, and what the biological interpretation is — then we have succeeded. Everything else hangs off those three.

\[Pause.\]

One last orienting thought before we dive in. The story of m6A is, in many ways, a deliberate echo of the story of DNA methylation. If you took the bisulfite lecture, you heard about 5-methylcytosine — a single methyl group on a single base, deposited by writer enzymes, erased by other enzymes, read by binding proteins, regulating gene expression at the chromatin level. The m6A story is structurally identical. A single methyl group on a single base, on a different polymer, deposited by writer enzymes, erased by other enzymes, read by binding proteins, regulating gene expression at the post-transcriptional level. The architecture of the system is the same. The molecules are different, the consequences are different, but the conceptual frame — writers, erasers, readers, dynamic deposition, regulatory function — maps cleanly from DNA to RNA. Here is the slogan I want you to hold for two hours. **DNA methylation is the chromatin-level on-off switch — it decides whether a gene is transcribed in the first place. RNA m6A is the post-transcriptional handling instruction — it decides whether the mRNA, once made, gets translated fast, slow, or destroyed.** Two layers of methyl-based regulation, sitting on top of the same genetic code, working at different stages of the gene expression pipeline. Today we are climbing up to the second layer.

So that is the contract. Two hours, one modification, and a tour through the biology, the chemistry, the methods, the diseases, and the still-dark frontier of what we are calling the epitranscriptome. Let us start by widening the lens to all of RNA modification, because m6A did not arrive in a vacuum — it arrived into a field that had been quietly cataloging chemical decorations on RNA for half a century.

---

## SEGMENT 2 — The deep history: tRNA, rRNA, the cap, and the modifications nobody talked about

Before m6A became the star of the show, RNA modification was already a deep, mature field — it just was not on the mRNA side. Let me give you the history, because it matters for understanding why the mRNA breakthrough in 2012 felt so revolutionary even though the underlying chemistry had been studied for decades.

In the 1950s and 1960s, as biochemists started purifying RNA in quantities they could analyze chemically, they noticed something puzzling. When you hydrolyze RNA down to its constituent nucleosides and run them on a chromatogram, you do not get four clean spots corresponding to A, U, G, and C. You get four big spots, and then a constellation of smaller spots — minor nucleosides that, on closer chemical analysis, turned out to be modified versions of the canonical four. The first one identified was **pseudouridine**, abbreviated with the Greek letter **psi (Ψ)**, which is an isomer of uridine where the uracil base is connected to the sugar through a carbon-carbon bond rather than the usual carbon-nitrogen bond. Pseudouridine was so abundant in tRNA and rRNA that biochemists called it "the fifth nucleotide." It changes the rigidity and the hydrogen-bonding repertoire of the base, and it is found at conserved positions across all domains of life.

\[Pause.\]

The list of tRNA modifications grew through the 1970s and 1980s into the dozens. **Inosine**, which is adenosine deaminated to a base that pairs promiscuously with U, C, and A — that is the wobble base that lets a single tRNA recognize multiple codons. **1-methyladenosine (m1A)**, **7-methylguanosine (m7G)**, **5-methylcytidine (m5C)**, **2′-O-methylations** of the ribose sugar at various positions. Each tRNA molecule in your cells carries somewhere between a handful and a dozen of these modifications, deposited by a dedicated army of modifying enzymes, fine-tuning the structure and decoding behavior of the tRNA. The field that studied this is called **tRNA modification biology**, and it is a deep, sophisticated discipline with its own journals and conferences, mostly populated by structural biochemists who could tell you the exact position of every modification in every tRNA in their favorite organism.

Ribosomal RNA, too, is heavily modified. The two large ribosomal RNAs in your ribosome — the 28S and 18S — carry over a hundred pseudouridines, dozens of 2′-O-methylations, and a small number of base methylations, all clustered around the catalytic peptidyl transferase center and the decoding center. These modifications are deposited by small nucleolar RNAs, snoRNAs, that act as guide molecules pointing the modifying enzymes to the right positions. Disrupt the modifications and the ribosome works poorly. Some ribosomopathies — diseases of ribosome function — trace back to defects in rRNA modification.

So far, none of this is news in the 1980s. The dogma is: tRNA is modified, rRNA is modified, mRNA is essentially not modified except at the 5′ cap. Let me say a word about the cap, because it is the one mRNA modification that was always known.

\[Pause.\]

Every eukaryotic mRNA, immediately after transcription, gets a structure added to its 5′ end called the **7-methylguanosine cap** — abbreviated **m7G cap** or sometimes just **the cap**. The cap is a guanosine nucleotide that is methylated at the seven-nitrogen position and attached to the rest of the mRNA through an unusual 5′-to-5′ triphosphate linkage. The cap is essential for almost every aspect of mRNA biology: it protects the mRNA from being chewed up by exonucleases, it is recognized by the ribosome to initiate translation, it is required for proper splicing, and it gets recognized by export machinery to move the mRNA out of the nucleus. The cap was discovered in the 1970s by Aaron Shatkin and Yasuhiro Furuichi, and it is the first and best-known mRNA modification. In some organisms, additional methylations are added — m6A or 2′-O-methyl modifications on the first or second nucleotide downstream of the cap — and these have their own regulatory consequences.

But the cap is one modification at a defined position. What about internal modifications, scattered through the body of the mRNA, far from the cap? The textbook answer, from the 1970s through about 2010, was: there are not any to speak of. Some old radioactive labeling studies from the 1970s — Fritz Rottman and others — had detected radiolabeled methyl groups on bulk poly-A-selected RNA, suggesting that mRNA did contain some internal m6A. But because there was no way to map where those methyl groups were, the observation went nowhere. It became a footnote. For thirty years.

What changed in 2010 to 2012 was the invention of a method to actually map m6A across the transcriptome. The chemistry of m6A had been known since the 1970s; the existence of internal m6A on mRNA had been known since the 1970s; what had not been known was where. Where on which transcripts? In what regions of those transcripts? In what context, with what dynamics, with what regulatory consequence? You could not answer any of those questions without a method to read m6A at single-transcript or single-position resolution. And until 2012, no such method existed.

\[Pause.\]

So picture the field at the start of the 2010s. tRNA modifications, mature and well-studied. rRNA modifications, well-mapped because rRNA is one molecule per species and you can sequence it directly. The 5′ cap, a one-position story everyone learned in graduate school. And then, in the middle of the mRNA, a known-but-unmapped methyl mark — m6A — that was suspected to exist at low levels on most messenger RNAs but that nobody could find at base resolution because the chemistry to detect it did not exist. The stage was set. The question was: how do you map a single chemical modification, on a polymer that is in a thousand different sequences at a thousand different copy numbers, across an entire transcriptome? The answer came from immunoprecipitation. And once it came, the field exploded.

---

## SEGMENT 3 — The m6A renaissance — Jaffrey, He, and MeRIP-seq in 2012

In May 2012, a paper appeared in the journal *Cell* from Samie Jaffrey's lab at Weill Cornell, titled "Topology of the human and mouse m6A RNA methylomes revealed by m6A-seq." A few months later, a near-simultaneous paper from Gideon Rechavi's group in Israel, published in *Nature*, showed essentially the same thing using a different naming convention — **MeRIP-seq**, which stands for **Methylated RNA Immunoprecipitation followed by sequencing**. These two papers, together with a third paper from Chuan He's lab at the University of Chicago a few months earlier that had identified the first m6A demethylase (we will come back to FTO in Segment 5), opened the floodgates. Within a year the m6A field went from a backwater to a torrent of papers. Within five years it was one of the hottest areas in RNA biology. Within ten years it was a clinical drug target.

Let me explain what MeRIP-seq actually did, in plain terms. The chemistry of m6A — a methyl group on the N6 position of adenosine — is the same in any RNA. And because it is a defined chemical structure, you can raise an antibody against it. You take a synthetic oligonucleotide containing m6A, you inject it into a rabbit, you collect the antibodies the rabbit produces, you screen for ones that specifically recognize m6A but do not recognize unmodified A. By the late 2000s such antibodies were commercially available. The trick that Jaffrey and Rechavi pulled was to use these anti-m6A antibodies as a fishing rod to pull down all the RNA fragments in a cell that contained the modification, and then sequence those fragments.

\[Pause.\]

The workflow looks like this. You take total RNA from your sample. You poly-A select, so that you are looking at mRNA rather than the much more abundant rRNA. You fragment the mRNA to short pieces — typically 100 to 200 nucleotides — so that an antibody pulldown produces small, sequenceable fragments rather than entire mRNAs. You take that fragmented RNA, you split it into two pools: one is your immunoprecipitation pool, the other is your input control. To the IP pool you add the anti-m6A antibody, you incubate, you capture the antibody on protein-coated beads, and you wash away anything that did not bind. The fragments that come off the beads are enriched for those containing m6A. To the input control, you do not add antibody — you just sequence the fragmented mRNA as a background reference. Then you make Illumina libraries from both pools, sequence them, and align the reads to the transcriptome.

The output is, for every transcript, two coverage tracks: an IP track and an input track. Where the IP track shows a sharp peak that is not present in the input — a region of the transcript that is enriched in the IP relative to input — you call an **m6A peak**. That peak is your map of where m6A is on that transcript. Do this for every transcript in the cell, and you have a transcriptome-wide m6A map.

Here is the analogy. **MeRIP-seq is the bisulfite of RNA — except instead of using a chemistry that distinguishes modified from unmodified bases, you use an antibody that physically pulls down the fragments containing the modification, and then you sequence what you pulled down. It is conceptually closer to ChIP-seq for chromatin marks than to bisulfite for DNA methylation, but the function is the same: a genome-wide, or in this case transcriptome-wide, map of where a chemical modification is found.**

\[Pause.\]

What the 2012 papers found was, in retrospect, the foundation of the entire field. First, m6A is **everywhere**. It is on the majority of mRNA transcripts in human and mouse cells — somewhere between a quarter and a half of all expressed mRNAs carry at least one m6A peak. Across the transcriptome, the total fraction of adenosines that are methylated is small — roughly **0.1 to 0.4 percent of all adenosines in mRNA** — but because each mRNA has thousands of adenosines, that low percentage adds up to most mRNAs carrying multiple m6A marks.

Second, m6A has a **strong sequence preference**. The methylated adenosines almost always sit inside a short consensus motif, originally written as **DRACH** — where D is A, G, or U; R is A or G; the methylated A is the underlined one; C is C; and H is A, C, or U. The simpler version of this motif is **GAC** or **AAC**, and you should think of it as "m6A likes to sit in an A that is preceded by a purine and followed by a C." The writers — we will get to them in a minute — recognize this motif and only methylate adenosines in this context. So the m6A modification is not random; it is sequence-encoded, in the sense that the cell can predict from the mRNA sequence which adenosines are eligible for methylation.

Third, m6A has a **distinctive distribution along transcripts**. It is not uniform across the mRNA. It is enriched in two specific places: near **stop codons** — the boundary between the coding sequence and the 3′ untranslated region — and in **long internal exons**. This is one of the most striking and reproducible features of the m6A landscape. If you plot the density of m6A peaks along a meta-transcript, where you have averaged across all expressed mRNAs, you see a clean enrichment right at the stop codon. Why there? The answer is still incomplete, but it relates to splicing, polyadenylation, and the fact that the writers tend to act on the last exon before termination.

\[Pause.\]

Fourth, m6A is **dynamic**. Different cell states, different tissues, different developmental stages have different m6A profiles. The same gene can be unmethylated in one cell type and heavily methylated in another. This was the observation that turned m6A from a static curiosity into a regulatory mark. If the modification changes with cell state, then it must be doing something — it must be a substrate for regulation.

So that is what MeRIP-seq told us in 2012. m6A is everywhere on mRNA, sits at a defined sequence motif, is enriched near stop codons, and changes across cell states. The field could now ask: who puts it on, who takes it off, who reads it, and what does it do? Let us go meet the cast.

---

## SEGMENT 4 — Writers: METTL3, METTL14, and the methyltransferase complex

The writers of m6A — the enzymes that actually catalyze the methylation reaction — turn out to be a small protein complex centered on two related enzymes called **METTL3** and **METTL14**. Both are methyltransferases of the canonical SAM-dependent family — they use S-adenosylmethionine as the methyl group donor, the same cofactor that DNA methyltransferases use for 5mC. METTL3 was actually purified and identified back in the 1990s by Fritz Rottman's group, based on its ability to methylate adenosine in an in vitro assay. But for almost two decades nobody knew what its biological substrate was, because there was no way to map where its product — m6A — actually ended up in cells. Once MeRIP-seq made the modification mappable in 2012, METTL3 became immediately interesting.

Here is the structure of the writer complex, as worked out over the last decade. **METTL3 is the catalytic subunit** — it contains the active site that actually transfers the methyl group from SAM to the N6 of adenosine. **METTL14 is its partner**, structurally related to METTL3 but catalytically dead — it cannot catalyze methylation on its own. METTL14's role is to bind RNA and to stabilize the catalytic geometry of METTL3. The two of them form an obligate heterodimer; you need both for activity. Knock out METTL3, and you lose almost all m6A on mRNA. Knock out METTL14, same result. They are bound together, and they function as a unit.

\[Pause.\]

The complex is rounded out by a third protein called **WTAP** — Wilms tumor associated protein — which does not contribute to catalysis but is essential for targeting the complex to the right places on RNA. WTAP recruits the METTL3-METTL14 dimer to nuclear speckles, the regions of the nucleus where splicing and other RNA processing happens, and helps the complex find its substrates. There are additional cofactors — VIRMA, RBM15, HAKAI, ZC3H13 — each contributing to substrate selection and localization. The whole assembly is sometimes called the **m6A writer complex** or **MAC** (methyltransferase-associated complex).

There are a few other writers worth knowing about. **METTL16** is a separate, more specialized methyltransferase that deposits m6A on a small set of structured RNA substrates, most famously the U6 spliceosomal RNA and the MAT2A mRNA, the latter of which is a feedback regulator of SAM levels. **ZCCHC4** is a methyltransferase that deposits m6A on 28S rRNA, separate from the mRNA writer system. So there is some diversity, but for mRNA m6A, METTL3-METTL14-WTAP is the main act.

What does the writer complex actually do mechanistically? It reads the RNA, looks for the DRACH consensus motif, and methylates eligible adenosines — but not all of them. The selection of which DRACH motifs get methylated and which do not is the central unsolved question of writer biology. There are far more DRACH motifs in any given mRNA than there are m6A marks; the writer is making a choice. That choice depends on context — chromatin context during transcription, secondary structure of the RNA, presence or absence of co-transcriptional binding factors, and probably many other things we do not yet understand.

\[Pause.\]

Here is one of the more elegant findings from the last decade. The m6A writer complex is **physically coupled to transcription**. METTL3 rides along with RNA polymerase II as it transcribes a gene, and the local chromatin environment — including specific histone marks like H3K36me3 — recruits the writer to specific transcripts and specific regions. This means that m6A is deposited co-transcriptionally and that the chromatin state of the gene being transcribed influences how its mRNA gets methylated. There is a direct mechanistic link between the epigenome on the DNA and the epitranscriptome on the resulting RNA. The slogan: **the epigenome talks to the epitranscriptome through co-transcriptional recruitment.**

Hold the writer picture. **METTL3 is the catalyst, METTL14 is the partner that stabilizes catalysis, WTAP is the cofactor that targets the complex to nuclear speckles, and the whole assembly rides along with RNA polymerase II to deposit methyl groups on DRACH motifs as transcripts are being made.** That is the upstream side of the m6A system. Now let us meet the erasers.

---

## SEGMENT 5 — Erasers: FTO and ALKBH5, and the obesity gene that turned into a demethylase

The discovery that m6A could be actively erased was, in retrospect, the moment the field exploded — and the story of how that discovery happened is one of the most beautiful examples in modern biology of how an unsolved clinical mystery and an obscure biochemistry question collide and solve each other.

Back up to 2007. A consortium of human genetics groups, doing one of the first major genome-wide association studies for common obesity, identified a strong signal at a locus on chromosome 16 — a gene called **FTO**, for "fat mass and obesity associated." People carrying certain common variants of FTO weighed, on average, two or three kilograms more than people with the other variants. This was the first robust GWAS hit for common adult obesity, and FTO got a lot of attention. But there was a problem: nobody knew what FTO did. The protein it encoded had no obvious function. It was predicted, based on sequence similarity, to be a member of the **AlkB family of dioxygenases** — enzymes related to a bacterial DNA repair enzyme — but its substrate was unknown.

\[Pause.\]

For about five years, the FTO story sat there. Major GWAS hit, mechanism unknown, lots of frustration. Then in 2011, Chuan He's group at the University of Chicago published a paper in *Nature Chemical Biology* showing that FTO is, in fact, a demethylase — and that its substrate is **m6A on RNA**. FTO takes a methylated adenosine, uses molecular oxygen as a cofactor, and oxidatively removes the methyl group, regenerating an unmodified A. The first GWAS hit for obesity, the gene that everyone had been studying for five years without a function, turned out to be the first known RNA demethylase. Suddenly, the assumption that m6A was a static modification — written once, never removed — was wrong. m6A was dynamic. There was a real eraser. And the fact that the eraser was associated with obesity suggested that the dynamic regulation of m6A was relevant to mammalian physiology in ways nobody had imagined.

Here is the analogy I want you to hold for the FTO discovery. **FTO is the first GWAS hit for obesity reinterpreted. The whole field had been looking at a protein it could not understand for years, asking how it could possibly affect body weight. The answer turned out to be: it is an m6A demethylase, and m6A is a major regulator of metabolic gene expression. The obesity association is real; it works through the epitranscriptome. The clinical genetics led the way to a fundamental discovery in RNA biology, and the RNA biology led back to a mechanism for the clinical observation.** That is a kind of intellectual loop that happens rarely, and it is part of why FTO is such a beloved story in the field.

\[Pause.\]

A year later, in 2012, the same Chuan He group plus collaborators identified a second m6A eraser: **ALKBH5**, another member of the AlkB family, with a different tissue distribution from FTO. ALKBH5 is most highly expressed in the testis, where m6A regulation is essential for spermatogenesis — knock out ALKBH5 in mice and the males are sterile. Both FTO and ALKBH5 use the same chemistry: they are alpha-ketoglutarate and iron-dependent dioxygenases that oxidatively remove the methyl group, going through intermediate hydroxymethyl and formyl forms before yielding the demethylated product.

There has been some debate over the years about how broadly active FTO is on m6A versus other related modifications. In particular, FTO seems to prefer **m6Am** — a closely related modification that sits on the first nucleotide of mRNAs just downstream of the cap and adds both a methyl on N6 and a methyl on the 2′ ribose. The current consensus is that FTO acts on both m6A and m6Am, with different efficiencies depending on context. ALKBH5, by contrast, is more specific to internal m6A. The exact substrate landscape of each enzyme is still being refined.

What is the big picture? Just as in DNA methylation you have writers (DNMTs), erasers (TETs), and readers (MBDs), in m6A you have writers (METTL3-METTL14-WTAP), erasers (FTO and ALKBH5), and readers — which we are about to meet. The system is dynamic, regulated, and the levels of m6A on any given transcript reflect the balance between writing and erasing. Disrupt the balance — knock out a writer, knock out an eraser, mutate them — and you change which mRNAs get marked, which alters their fate, which changes the cellular phenotype. The whole architecture mirrors the DNA methylation system, which is why the slogan **writers, erasers, readers** got immediately adopted from epigenetics into epitranscriptomics. It is the same conceptual frame applied to a different polymer.

\[Pause.\]

Now, one cautionary note. The field has gone through some controversy about how active FTO actually is on internal m6A in vivo — some careful follow-up work suggests that FTO mainly works on m6Am near the cap and on m6A in snRNAs, with less activity on bulk internal m6A than the original 2011 paper implied. ALKBH5 is more clearly the major internal m6A demethylase. This kind of revisionism is normal in a fast-moving field; the basic principle that m6A is reversible stands, but the precise division of labor between FTO and ALKBH5 is still being worked out. As a student looking at the field, you should know that "m6A is dynamically regulated by writers and erasers" is solid, while "FTO removes most internal m6A on mRNA" is shakier than the textbook treatment sometimes implies.

So we have writers and we have erasers. The marks go on, the marks come off, the system is dynamic. Now the question is: what does the cell do with a mark on its mRNA? The answer is the readers, and the readers are where m6A becomes regulatory.

---

## SEGMENT 6 — Readers: YTHDF1, YTHDF2, YTHDF3, YTHDC1, and the IGF2BPs

The readers are the proteins that bind methylated adenosines on RNA and decide what happens next. They are where the regulatory consequence of the modification gets implemented. A methyl group sitting on an adenosine, all by itself, does almost nothing — it does not change base pairing, it does not change codon meaning, it does not directly affect ribosome reading. It only does something because a protein binds it specifically, and that protein then recruits machinery that changes the fate of the RNA. The readers are the readout.

The main family of m6A readers contains a small protein domain called the **YTH domain** — named after the founding member, YT521-B, identified in the late 1990s by Stefan Stamm's group as a splicing factor of unknown function. The YTH domain turns out to be a hydrophobic pocket that specifically recognizes the methyl group on m6A — it has an aromatic cage of three tryptophan residues that perfectly accommodates the small methyl decoration, and it binds m6A-containing RNA about a hundred times more tightly than unmodified RNA. There are five YTH-domain proteins in humans, and they are the canonical m6A readers.

\[Pause.\]

The three cytoplasmic readers are **YTHDF1, YTHDF2, and YTHDF3** — collectively the YTHDF family. They all share the same YTH domain at their C-terminus and similar but slightly different N-terminal regions that recruit different downstream machinery. Originally these three were thought to do very different things — YTHDF1 was supposed to promote translation, YTHDF2 was supposed to promote decay, YTHDF3 was supposed to do a bit of both. The more recent picture, refined over the last few years, suggests that all three may have largely overlapping functions and that their main job is to recruit a common destabilization machinery — the **CCR4-NOT deadenylase complex** — to m6A-marked mRNAs, accelerating poly-A tail shortening and triggering decay. The functional split between the three YTHDF paralogs is now contested in the field, with some labs arguing they are redundant and others insisting on distinct roles. Either way, the headline is that the cytoplasmic YTHDFs predominantly destabilize their target mRNAs.

The nuclear YTH reader is **YTHDC1**, which has the same YTH domain but is restricted to the nucleus. YTHDC1 is involved in m6A-dependent regulation of **splicing** — it recruits splicing factors like SRSF3 to m6A-marked nascent transcripts and influences exon inclusion. It also regulates nuclear export of certain m6A-marked mRNAs. YTHDC1 is essential — knock it out in mice and the embryos die very early. There is a second nuclear YTH protein, **YTHDC2**, with somewhat different function involving translation of meiotic transcripts in the germline; knock out YTHDC2 and mice are sterile.

\[Pause.\]

A second family of m6A readers, identified in 2018 by Richard Gregory's group at Harvard, are the **IGF2BP proteins** — IGF2BP1, IGF2BP2, IGF2BP3 — which use a different RNA-binding architecture (KH domains rather than YTH domains) to recognize m6A in a sequence-dependent context, and which, unlike the YTHDFs, **stabilize** their target mRNAs rather than destabilize them. The IGF2BPs are oncofetal — highly expressed in embryos and many cancers, low in normal adult tissues — and they tend to bind m6A-marked transcripts encoding cell cycle regulators and growth factors, protecting them from decay and promoting proliferation. The IGF2BPs are part of why some m6A-marked mRNAs are stabilized rather than destabilized; which reader binds determines the outcome.

There are still more candidate readers being characterized. **HNRNPA2B1**, **HNRNPC**, **PRRC2A**, and others have been proposed as direct or indirect m6A readers in various contexts. The picture is not as clean as "three writers, two erasers, five readers." The reader landscape is more like a graph, with different proteins binding different m6A-marked transcripts in different cell types and tissues, integrating m6A signals into many different downstream pathways.

Here is the conceptual frame I want you to hold. **Writers, erasers, readers — METTL3 puts m6A on, FTO and ALKBH5 take it off, YTHDF proteins read it in the cytoplasm and mostly destabilize, YTHDC1 reads it in the nucleus and affects splicing, IGF2BPs read it and stabilize, all together forming the modification toolkit that decides the fate of every m6A-marked transcript in the cell.** That is the toolkit. Now let us talk about what the toolkit actually does to gene expression.

---

## SEGMENT 7 — What m6A actually does: stability, translation, splicing, export

We have a writer system, an eraser system, and a reader system. Now the question is, what is the functional output? When an mRNA gets methylated, what changes about its life? Let me walk through the four main consequences, because these are the headlines that the field has converged on, and they are what every m6A paper is ultimately trying to measure.

**Consequence one, the dominant one: m6A destabilizes most mRNAs.** This is the most reliable functional rule in the field. The majority of mRNAs that carry m6A marks are degraded faster than they would be without them. The mechanism is the cytoplasmic YTHDF reader proteins binding the m6A-marked mRNA, recruiting the **CCR4-NOT deadenylase complex**, accelerating poly-A tail shortening, and triggering the cap removal and 5′-to-3′ decay pathway. The result is that an m6A-marked mRNA has a shorter half-life — sometimes by a factor of two or three — than an unmarked version of the same transcript. If you knock out METTL3, so that no m6A is deposited, the mRNAs that would normally have been marked become more stable, accumulate to higher steady-state levels, and the cell's transcriptome shifts accordingly.

Why would a cell want to destabilize its own messages? The leading hypothesis is **kinetic regulation of gene expression** — m6A marking allows the cell to install a built-in timer on certain mRNAs, so that they are translated for a short burst and then destroyed. This is especially important in contexts where the cell needs to rapidly switch its transcriptome — embryonic development, immune activation, stress response, cell cycle progression. The mRNAs that are most heavily m6A-marked tend to be the ones associated with cell state transitions, where you want fast on-off dynamics rather than steady-state expression. Stable housekeeping mRNAs, by contrast, tend to be relatively m6A-poor.

\[Pause.\]

**Consequence two: a minority of m6A-marked mRNAs are stabilized, not destabilized.** When the IGF2BP family of readers binds m6A, instead of recruiting decay machinery, they recruit RNA-binding cofactors that protect the mRNA from degradation. Many of the IGF2BP targets are oncogenes and cell cycle regulators, which is one of the reasons m6A is so important in cancer — heavy IGF2BP expression in tumors stabilizes m6A-marked transcripts for genes like MYC, leading to higher protein levels and proliferation. So the outcome of m6A marking depends on which reader binds, and which reader binds depends on cell type, context, and the surrounding sequence environment of the modification. The same chemical mark can have opposite functional consequences.

**Consequence three: m6A affects translation efficiency.** Independent of mRNA stability, m6A can influence how efficiently ribosomes translate the marked transcript. Some m6A marks in the 5′ untranslated region of an mRNA enhance cap-independent translation, by recruiting initiation factors directly to the methylated nucleotide. This is particularly important under stress conditions — heat shock, oxidative stress, viral infection — where global cap-dependent translation is shut down and the cell relies on selective, m6A-driven translation of specific stress-response messages. m6A in the coding sequence, conversely, can slow ribosome elongation, because the methyl group slightly alters the geometry of codon-anticodon pairing. The net effect of m6A on translation depends on its position within the transcript and the cellular context, but it is unambiguously a real translational input.

\[Pause.\]

**Consequence four: m6A affects splicing and nuclear processing.** Through the nuclear reader YTHDC1, m6A marks deposited co-transcriptionally on nascent pre-mRNA influence which splice sites get used and which exons get included. m6A also affects 3′ end processing and choice of polyadenylation site, partly through its enrichment near stop codons. And m6A in introns, especially in long introns, may influence the rate of intron removal and the fidelity of splicing. The nuclear arm of the m6A system is generally less well-characterized than the cytoplasmic stability arm, but it is real and biologically important.

Now, putting all of this together, here is what m6A is doing at a system level. **m6A is the post-transcriptional handling instruction.** Every mRNA that comes out of the nucleus carries a pattern of m6A marks deposited co-transcriptionally based on its sequence, its chromatin context, and its co-transcriptional binding factors. That pattern is read by cytoplasmic and nuclear reader proteins that decide the mRNA's downstream fate — does it get translated fast, does it get translated slow, does it get spliced this way or that, does it get destroyed in an hour or in a day. The mark is not a binary on-off switch like DNA methylation at a promoter — it is more like a setting on a dimmer that tunes the kinetics of mRNA handling. The whole epitranscriptome is a layer of post-transcriptional control sitting on top of the transcript output.

Hold the functional summary. **m6A primarily destabilizes mRNAs through YTHDF readers and the CCR4-NOT complex; in some contexts it stabilizes them through IGF2BPs; it tunes translation efficiency depending on position; and it affects splicing and nuclear processing through YTHDC1.** Now let us talk about how you actually measure m6A in an experiment, because the methods are where the field really lives.

---

## SEGMENT 8 — The MeRIP-seq workflow in detail, and its strengths and weaknesses

We have talked about MeRIP-seq in passing as the technique that opened the field in 2012. Now let me walk through the workflow carefully, because if you are going to read papers in this area — or, eventually, do experiments — you need to understand exactly what the method does, what its outputs look like, and where its limitations lie. This is the section that will let you read a Methods section critically.

Start with your sample. You need RNA — and you need quite a lot of it. MeRIP-seq is not a sensitive technique; the original protocols required tens or hundreds of micrograms of total RNA per immunoprecipitation. Newer optimized protocols have brought that down to a few micrograms, but the method is still incompatible with single-cell or very small clinical specimens. So your starting material is bulk RNA from a cell pellet or a tissue, typically 1 to 100 million cells.

\[Pause.\]

**Step one: isolate total RNA and enrich for mRNA.** You start with a TRIzol or column-based total RNA extraction. The majority of total RNA in a cell — usually more than 90 percent — is ribosomal RNA, and rRNA carries its own m6A and other modifications that you probably do not want contaminating your mRNA signal. So you either poly-A select using oligo-dT beads, which captures the polyadenylated mRNAs, or you do ribosomal depletion using probes that subtract out the rRNA. Most m6A studies use poly-A selection, on the assumption that you care primarily about mRNA m6A and not about modifications on rRNA or noncoding RNA.

**Step two: fragment the mRNA.** You need short fragments — typically 100 to 200 nucleotides — for two reasons. First, the antibody pulldown is more specific when the fragments are short, because long fragments containing a single m6A also contain a lot of unmarked sequence that the antibody can bind nonspecifically. Second, Illumina sequencing reads are short, and you need fragments that are roughly comparable to the read length. Fragmentation is done either with heat in the presence of magnesium ions, which catalyzes phosphodiester bond hydrolysis at random positions, or with a controlled RNase treatment. The output is a population of short RNA fragments, randomly distributed across the original mRNA sequences.

**Step three: split into IP and input pools.** You take your fragmented mRNA and divide it. A small fraction — typically 10 percent — you save as your input control, and process directly into a sequencing library. The rest you take forward to immunoprecipitation.

\[Pause.\]

**Step four: immunoprecipitate with anti-m6A antibody.** You add your anti-m6A antibody to the IP pool, incubate at low temperature for a few hours so that antibody binds m6A-containing fragments, then add magnetic beads coated with protein A or protein G that capture the antibody. You wash extensively to remove unbound RNA, then elute the bound RNA either by competition with free m6A nucleoside or by denaturing the antibody. The eluted RNA is enriched in m6A-containing fragments — typically by a factor of 10 to 50, though this varies by protocol and antibody.

**Step five: make Illumina libraries from both IP and input pools.** Standard RNA-seq library prep — adapter ligation, reverse transcription, PCR amplification. Both pools get the same treatment, generating libraries that can be sequenced on the same flow cell.

**Step six: sequence and align.** Standard Illumina sequencing, typically paired-end 75-base reads, with 30 to 50 million reads per library. Align the reads to the transcriptome or genome using a standard splice-aware aligner like STAR or HISAT2. The IP library reads will pile up at positions enriched in m6A; the input library reads will distribute uniformly across the transcripts. The difference is your m6A signal.

**Step seven: call peaks.** You use software designed for this purpose — **MACS2**, originally written for ChIP-seq, can be adapted; or dedicated tools like **MeTPeak**, **exomePeak**, **m6Anet** — to identify regions where the IP coverage is significantly enriched over the input coverage. Each enriched region is called a peak. You output a list of peaks per gene per condition, with coordinates and significance scores.

\[Pause.\]

What does the output look like? You get tens of thousands of m6A peaks across the transcriptome, distributed predominantly in coding sequences and 3′ UTRs, with characteristic enrichment around stop codons. You can then compare peaks between conditions — wild-type versus METTL3 knockout, for example — to identify differentially methylated transcripts. You can compare peaks across cell types or developmental stages. You can ask whether genes in particular pathways are enriched for m6A marks.

Now the limitations. **First, resolution is poor.** Each peak is typically 100 to 200 nucleotides wide — about the length of the fragments — and inside that peak you do not know which specific adenosine is the methylated one. A peak might contain multiple DRACH motifs, and conventional MeRIP-seq cannot tell you which one carries the modification. You can guess based on motif analysis, but the resolution is not really single-nucleotide. This is the analog of the resolution problem in ChIP-seq versus single-base bisulfite sequencing — the antibody pulldown gives you regions, not positions.

**Second, the antibody is the entire experiment.** Anti-m6A antibodies vary in specificity, sensitivity, and cross-reactivity with related modifications like m6Am, m1A, and methylated DNA. Different commercial antibodies give different peak calls on the same sample. This has been a real reproducibility problem in the field. Two papers using two different antibodies on the same cell line can report partially non-overlapping peak sets, and there is no easy way to determine which is correct. The community has tried to standardize on a few well-characterized antibodies, but the antibody dependence is a persistent limitation.

**Third, MeRIP-seq is not quantitative in a clean way.** You get a peak height for each m6A region, which reflects some combination of how many transcripts of that gene are present, what fraction of those transcripts carry the modification, and how well the antibody pulled down that particular fragment. Disentangling those three contributions requires careful normalization to the input, and even then the absolute methylation fraction at a given site is poorly estimated. You can say a site is "more methylated" in condition A than in condition B with confidence; you usually cannot say that 30 percent of transcripts at site X carry m6A with any precision.

\[Pause.\]

**Fourth, MeRIP-seq needs a lot of input.** As I mentioned, typically several micrograms of mRNA, which translates to tens of millions of cells. This is fine for cell lines and bulk tissues but rules out small clinical samples, single-cell experiments, and many in vivo applications.

So MeRIP-seq is the foundational method, the technique that opened the field, and still the workhorse of most m6A studies — but it is resolution-limited, antibody-dependent, semi-quantitative, and material-intensive. Every advance in m6A methodology over the last decade has been an attempt to solve one or more of these limitations. Let us meet the next generation.

---

## SEGMENT 9 — Toward single-nucleotide resolution: miCLIP, m6A-CLIP, m6A-SAC, GLORI

The first major improvement on MeRIP-seq was an idea borrowed from a completely different field — the CLIP family of methods originally developed for mapping RNA-binding protein footprints by Robert Darnell and colleagues. The core trick of CLIP — for **cross-linking immunoprecipitation** — is to use ultraviolet light to covalently crosslink protein to RNA before pulling down with the antibody, so that when you sequence the resulting library, the position of the crosslink is preserved as a sequence signature — typically a mutation or a deletion at the crosslink site.

In 2015, Samie Jaffrey's group adapted CLIP for m6A in a method they called **miCLIP** — m6A individual-nucleotide-resolution crosslinking and immunoprecipitation. The same year, Christopher Mason's group published a closely related method called **m6A-CLIP**. The idea in both: UV-crosslink the anti-m6A antibody to the RNA fragment it is binding, so that when you reverse transcribe the bound RNA into cDNA, the polymerase encounters the crosslinked amino acid residue and either stops or introduces a characteristic mutation at the position of the m6A. You sequence, you look for the characteristic mutation or truncation pattern, and you call m6A positions at single-nucleotide resolution.

\[Pause.\]

miCLIP and m6A-CLIP were a real advance. Instead of 100-nucleotide peaks, you got individual nucleotide positions — specific adenosines marked as m6A. The number of high-confidence sites identified per cell line went from tens of thousands of peaks to hundreds of thousands of individual sites. The map of m6A on the transcriptome became much sharper.

But miCLIP has its own problems. The crosslinking is inefficient — only a small fraction of antibody-RNA pairs get UV-crosslinked, so you need even more input RNA than MeRIP-seq, which already needed a lot. The mutation signature is not perfectly specific to m6A; some background mutations occur at random positions. And, fundamentally, you are still using an antibody, so antibody-dependence and the associated cross-reactivity issues persist.

The next generation of methods tried to escape antibodies entirely, using chemistry instead. The most successful of these to date is **m6A-SAC** — **m6A-selective allyl chemical labeling and sequencing** — developed by Chuan He's group in 2022. The trick of m6A-SAC is to use an engineered version of the bacterial methyltransferase MjDim1 that, instead of using SAM as a cofactor, uses an analog of SAM that transfers an allyl group instead of a methyl group. The engineered enzyme specifically allylates adenosines that already carry an m6A mark, leaving unmodified A untouched. The allyl group is then chemically modified into a stable adduct that causes a base mis-incorporation during reverse transcription, producing a characteristic sequence signature at the m6A position. The result is single-nucleotide-resolution m6A mapping without antibodies, with much better quantitative accuracy than MeRIP-seq.

\[Pause.\]

A second antibody-free chemistry, called **GLORI** — **glyoxal and nitrite-mediated deamination of unmethylated adenosines** — was published by Chengqi Yi's group, also in 2022. GLORI uses a chemical reaction that selectively deaminates unmethylated adenosines to inosines, which are read as G during sequencing — much like bisulfite deaminates unmethylated cytosine to uracil. m6A adenosines resist the deamination and continue to read as A. So after GLORI treatment, every adenosine that still reads as A in the sequencing output is m6A; every position that was originally A but now reads as G was unmodified. This is, in essence, **the bisulfite of m6A** — a chemical conversion that distinguishes modified from unmodified bases by reading out as a sequence difference.

The analogy is exact. **Bisulfite turns unmethylated C into T while leaving 5mC alone, so you read out the methylation state of every cytosine in the genome at single-base resolution. GLORI turns unmethylated A into G while leaving m6A alone, so you read out the methylation state of every adenosine in the transcriptome at single-base resolution.** It is the same conceptual move, applied to a different base on a different polymer. And the implications are similar: a true single-base-resolution, quantitative, antibody-free epitranscriptome map.

GLORI and m6A-SAC are recent — both from 2022 — and they have not yet fully displaced MeRIP-seq, partly because they require more specialized chemistry and partly because most labs already have MeRIP-seq pipelines in place. But the field is clearly moving toward antibody-free, single-nucleotide-resolution methods, and within a few years these are likely to become the standard. We are entering the era of true single-base epitranscriptomics, and the methodological landscape is going to look very different in five years from how it looks today.

\[Pause.\]

That is a natural place to break.

---

\[BREAK\]

\[About one hour in. Take ten minutes. Get water. When you come back, we are going to talk about Nanopore direct RNA sequencing — a completely different technological approach to reading modifications that may eventually displace all the chemistry-based methods we have discussed. Then we will get into m6A in cancer, stem cells, viruses, the other modifications beyond m6A, and the frontier of the field.\]

---

## SEGMENT 10 — Nanopore direct RNA sequencing and the dream of universal modification detection

Welcome back. We spent the first hour on the antibody-and-chemistry world of m6A detection — MeRIP-seq, miCLIP, m6A-SAC, GLORI. Every one of those methods works by converting the chemical modification into a sequence-readable signal somewhere in a standard Illumina pipeline. Now I want to introduce you to a completely different approach — one that bypasses all that conversion chemistry and reads the modification directly from the physical RNA molecule. The technology is **Oxford Nanopore direct RNA sequencing**, and it has the potential to fundamentally restructure the entire epitranscriptomics field. Whether it actually will is still an open question, but the promise is enormous and worth understanding deeply.

Here is how nanopore sequencing works. A nanopore is a tiny protein channel embedded in a thin membrane. You apply a voltage across the membrane. Ions flow through the pore, generating a measurable ionic current. If you thread a single-stranded nucleic acid molecule through the pore, the molecule physically obstructs the ion flow, and the resulting drop in current depends on which nucleotide is currently inside the constriction zone of the pore. Different bases — A, U, G, C — produce different characteristic current signatures. You record the current trace over time, you feed it into a neural network basecaller, and the basecaller translates the current pattern back into a sequence of bases.

\[Pause.\]

Oxford Nanopore's direct RNA sequencing platform, released around 2017, can do this for RNA. You take a polyadenylated RNA molecule, you ligate an adapter to the poly-A tail, you load the library onto a flow cell, and the molecules thread through the pores, three-to-five-nucleotides at a time, generating current traces that the basecaller converts into sequences. No reverse transcription, no PCR amplification, no fragmentation — you are reading the native RNA molecule directly.

Here is the part that matters for epitranscriptomics. **A modified base produces a different current signature than the corresponding unmodified base.** An m6A in the constriction zone obstructs ion flow slightly differently than an A does. The current trace at the m6A position has a measurably different shape. If you train a basecaller — or, more often, a separate downstream classifier — to recognize the modification-specific current signature, you can call m6A directly from the raw current trace, at single-nucleotide resolution, on the native RNA molecule, without any chemistry at all.

Here is the analogy I want you to hold. **Nanopore is the natural reader of RNA modifications. Direct RNA sequencing reads the ionic current that differs for modified bases. No antibody, no chemical conversion, no enrichment — just better basecallers trained to recognize the current signatures of each modification.** That is the promise. In principle, with a sufficiently well-trained classifier, you could read all 170-plus RNA modifications from a single nanopore run, on every transcript in the cell, at single-nucleotide resolution.

\[Pause.\]

In practice, getting to that promise is hard. The current signal at any one position is influenced by the four or five neighboring bases — the constriction zone is wider than a single nucleotide — so the modification signature is convolved with the local sequence context. The signal-to-noise ratio for any one modification call is moderate; you need many reads through the same position to confidently call modification status. The basecaller training requires labeled data — RNA molecules where you know which positions are modified and which are not — and generating that training data is itself a major experimental undertaking. And different modifications have signal differences of different magnitudes — m6A is moderately distinguishable from A; some modifications like 2′-O-methylation are very subtle and hard to call.

The current state of the art, as of the mid-2020s, is that nanopore direct RNA can call m6A at single-nucleotide resolution with sensitivity around 70 to 90 percent and specificity around 80 to 95 percent, depending on the tool used. Tools like **m6Anet**, **EpiNano**, **Tombo**, **xPore**, **CHEUI** — each takes a different approach to extracting modification signal from nanopore current traces. The performance is improving rapidly as more training data becomes available and as basecaller architectures get more sophisticated. For some applications — comparing m6A levels between two conditions on the same transcripts — nanopore is already competitive with or better than MeRIP-seq.

What nanopore is particularly good at, beyond just modification calling, is connecting modifications to other features of the transcript that bulk methods cannot capture. Because you are reading entire intact mRNA molecules from cap to poly-A tail, you know which m6A marks co-occur on the same molecule, you know the poly-A tail length of every modified versus unmodified molecule, you know the splice isoform of every read, you know whether two distant modifications are coupled. This "long-range information" — the joint distribution of modifications, splicing, and processing on individual molecules — is essentially invisible to MeRIP-seq, which fragments everything into short pieces before sequencing.

\[Pause.\]

So nanopore is the future, probably — or at least one possible future. The chemistry-based methods like GLORI may dominate for a while because the technology is more mature and the analysis is more straightforward, but nanopore has structural advantages that should win out as the basecallers and training data improve. The dream is a single nanopore run that reads every transcript in a cell, calls every modification at every position, and reports the joint state of the epitranscriptome at single-molecule resolution. We are not there yet, but we are closer than we were five years ago, and the trajectory is clear.

Now let us pivot from methods to biology. Let us talk about what m6A is doing in disease, starting with the disease that has driven more m6A drug development than any other: cancer.

---

## SEGMENT 11 — m6A in cancer, and the METTL3 inhibitors in clinical trials

Cancer cells are obsessed with proliferation, and proliferation requires fast, dynamic mRNA turnover. The hypothesis, going back to the early m6A days, was that cancers might be especially dependent on m6A machinery — that the writers, erasers, and readers might be more critical in tumors than in normal cells, making them attractive drug targets. Over the past decade, that hypothesis has been substantially validated, and m6A is now one of the most actively pursued new target classes in oncology.

Let me give you the clearest example: **acute myeloid leukemia**, AML. Several papers, starting around 2017, showed that AML cells are unusually dependent on METTL3 and METTL14. Knocking out METTL3 in AML cell lines or in mouse models of AML dramatically slows proliferation, induces differentiation, and reduces leukemic burden. Normal hematopoietic cells, by contrast, tolerate METTL3 loss reasonably well, at least in adult mice. The differential dependence — cancer needs METTL3 more than normal cells do — is exactly the kind of therapeutic window you want for a cancer drug.

\[Pause.\]

The mechanism, as best we understand it, is that AML cells rely on a small set of m6A-marked transcripts — including transcripts for transcription factors that maintain the undifferentiated leukemic state — and that loss of m6A on those transcripts destabilizes the leukemic phenotype and pushes the cells toward differentiation or death. The IGF2BP readers, in particular, seem to play a role in stabilizing oncogenic transcripts in AML, and the writer-reader axis becomes essential for tumor maintenance.

Based on this preclinical work, a company called **STORM Therapeutics**, spun out of the University of Cambridge by Tony Kouzarides, developed small-molecule inhibitors of METTL3. Their lead compound, **STM2457** in the published preclinical literature, is a competitive inhibitor of METTL3's catalytic site — it competes with SAM for binding and prevents the methyl group transfer. In preclinical AML models, STM2457 dramatically reduced leukemic burden, prolonged survival, and showed an acceptable safety profile. A successor compound entered Phase I clinical trials around 2022 for relapsed and refractory AML, and as of the mid-2020s the trials are ongoing, with early signals of activity in patients.

This is a really important moment for the field. It is the first time an epitranscriptomic enzyme has been directly drugged in humans. If METTL3 inhibitors prove out in AML — and the early signals look genuinely encouraging — then the entire model of the epitranscriptome as a clinical target class is validated. Other companies are now pursuing inhibitors of FTO, ALKBH5, the YTH readers, and the IGF2BPs, and the m6A drug development pipeline is one of the most active in RNA biology.

\[Pause.\]

m6A is implicated in many other cancers beyond AML. **Glioblastoma** depends on ALKBH5 expression for stem-like tumor cells. **Hepatocellular carcinoma** is sensitive to METTL3 manipulation. **Breast cancer** shows altered m6A patterns associated with metastatic potential. **Pancreatic cancer** depends on IGF2BP2 for proliferation. The picture across tumors is that different cancers depend on different parts of the m6A machinery, with the dependency pattern reflecting the specific oncogenic transcripts that need to be stabilized or destabilized to maintain the malignant state.

A note of caution. The cancer-m6A literature has, like many cancer-biology fields, suffered from overinterpretation, from cell-line-specific findings that did not generalize, and from contradictory results from different labs. The field is real, and METTL3 inhibitors are a real drug class, but you should read individual papers critically — particularly the ones that claim a specific m6A site on a specific transcript explains a specific cancer phenotype. Those mechanistic specificity claims are sometimes oversold.

Still, the clinical trajectory is clear. The epitranscriptome is now a druggable layer of biology, alongside the genome (cancer mutations), the transcriptome (RNA-targeted therapeutics), and the proteome (kinase inhibitors and the like). Within the next few years, we will see whether m6A drugs make it from Phase I into approved cancer therapeutics. If they do, the field will have validated itself in the only way that ultimately matters in biomedicine — by improving patient outcomes.

---

## SEGMENT 12 — m6A in stem cells and embryonic development: the lethal knockouts

Outside of cancer, the most striking domain where m6A turned out to be essential is **embryonic development and stem cell biology**. The basic finding is simple and dramatic: knock out METTL3, or any of the core m6A writer components, and the embryo dies. m6A is not optional; it is required for the most fundamental cell fate transitions of mammalian development.

The first really clear demonstration of this came from the labs of Jacob Hanna and Rupert Fray, around 2015. They generated mice lacking METTL3 specifically in mouse embryonic stem cells. The cells were viable in their undifferentiated, pluripotent state — they grew, they divided, they expressed pluripotency markers. But when the researchers tried to induce them to differentiate by withdrawing pluripotency factors, the cells failed. They could not exit the pluripotent state. They remained stuck as stem cells, unable to commit to any of the three germ layers — ectoderm, mesoderm, endoderm — that normal embryonic stem cells are supposed to be able to make.

\[Pause.\]

The mechanism, worked out subsequently by several labs, is that the mRNAs encoding pluripotency factors — NANOG, OCT4, SOX2 — are themselves m6A-marked, and that marking targets them for destabilization through the YTHDF readers. In normal stem cells with intact m6A machinery, the pluripotency mRNAs are constantly being made and constantly being degraded, with the dynamic balance set so that pluripotency factor levels can drop quickly when the cell decides to differentiate. Without m6A, the pluripotency mRNAs become too stable, the cell cannot lower its pluripotency factor levels, and differentiation cannot proceed. The cell is locked in the stem cell state because its mRNA handling instructions are broken.

This is the cleanest demonstration in the field of the post-transcriptional handling interpretation of m6A. The modification is not deciding whether the gene is on or off — the pluripotency genes are transcribed either way. It is deciding how fast the mRNA is destroyed, and that kinetic control is essential for the cell state transition. The transcription program looks unchanged; the proteome cannot keep up. That gap between transcription and translation is where m6A lives.

The whole-embryo phenotype, from full-body METTL3 knockouts, is early embryonic lethality. Mouse embryos lacking METTL3 die around the implantation stage, with severe defects in lineage specification. The same is true for METTL14 and WTAP knockouts. m6A is essential for the earliest cell fate decisions in mammalian development, and without it, life literally cannot proceed past the first few days post-fertilization.

\[Pause.\]

Beyond pluripotency, m6A is essential in many other developmental and stem cell contexts. **Hematopoietic stem cells** require METTL3 for proper differentiation into blood lineages. **Neural stem cells** need m6A for correct neurogenesis; conditional knockouts in the developing brain produce severe cortical defects. **Germ cells** need m6A — both writers and erasers — for proper spermatogenesis and oogenesis; knockouts of ALKBH5 cause male infertility, as I mentioned earlier. **The maternal-to-zygotic transition** in early embryos — the handoff from maternally deposited transcripts to embryonically transcribed transcripts — depends on m6A-mediated destabilization of maternal mRNAs.

The pattern across all these contexts is the same: m6A enables fast mRNA turnover, fast turnover enables rapid changes in the proteome, and rapid changes in the proteome enable cell state transitions. Wherever cells need to change their identity quickly — which is essentially all of development and all of stem cell biology — m6A is essential. In tissues where cells are stable and not transitioning — say, a mature hepatocyte humming along in steady state — m6A is less critical, and partial knockdown is better tolerated.

So m6A is the modification that makes the cell fate transitions of development possible. Without it, the mammalian body plan cannot be built. With it, you get the dynamic, kinetic regulation of mRNA half-lives that enables fast, reversible cell state changes. The next domain we will look at — viral infection — uses exactly the same machinery, but for the virus's purposes rather than the host's.

---

## SEGMENT 13 — m6A on viral RNA and the host-virus interface

Viruses are obligate parasites of cellular machinery, and viral RNAs — both the genomes of RNA viruses and the mRNAs that DNA viruses produce — are made and handled by the same cellular machinery that handles host transcripts. That includes the m6A writer, eraser, and reader system. Starting around 2016, a series of papers showed that the genomes and transcripts of major human pathogens — **HIV**, **hepatitis B and C**, **influenza**, **Zika**, and later **SARS-CoV-2** — carry m6A marks, and that those marks are functionally important for viral replication.

For HIV, the story is particularly clean. The HIV genomic RNA carries multiple m6A sites, deposited by host METTL3-METTL14 acting on the viral transcript as it is made by host RNA polymerase II. The host YTHDF readers bind those marks and modulate viral gene expression and replication efficiency. Some marks are important for the Rev-dependent export of unspliced viral RNA from the nucleus; others affect translation of viral proteins. Knock down METTL3 in infected cells and viral replication drops. Knock down FTO and viral replication is altered in the opposite direction. The virus has been co-opting the host m6A system for its own purposes.

\[Pause.\]

For SARS-CoV-2, similar findings emerged during the pandemic. The coronaviral genome carries m6A marks, host METTL3 is involved in their deposition, and viral replication depends on the marks. The pattern of m6A on the viral genome differs from the pattern on host transcripts, suggesting that the virus has evolved its sequence to engage host m6A machinery in specific ways. Drugs targeting the host m6A system could, in principle, have broad-spectrum antiviral effects, because all these viruses use the same host machinery.

Here is the analogy. **Viruses use the same mark for their own replication; this opens druggable host-virus interfaces. Instead of targeting a viral protein, which the virus can evolve to evade, you target a host protein that the virus depends on, which the virus cannot easily route around. m6A inhibitors might end up being antiviral as well as anticancer drugs, attacking the host machinery that viruses commandeer.**

This is still early. No m6A-targeted antiviral has entered the clinic. But the conceptual framework — that the host epitranscriptome is an interface that pathogens exploit, and therefore a place where you can intervene therapeutically — is genuinely novel, and it is one of the more exciting frontiers of antiviral pharmacology.

---

## SEGMENT 14 — Beyond m6A: m5C, pseudouridine, m1A, ac4C

m6A is the headline modification, but it is not alone. Several other internal mRNA modifications are now being mapped and studied, and the epitranscriptomic landscape is expanding to include a richer cast of characters. Let me run through the main contenders.

**m5C — 5-methylcytosine on RNA.** This is the RNA cousin of the famous DNA methylation mark. m5C is deposited on tRNA, rRNA, and at lower levels on mRNA by the **NSUN family of methyltransferases**, principally NSUN2 and NSUN6, and also by DNMT2. m5C on mRNA is detected by bisulfite sequencing of RNA — the same chemistry as for DNA — and by enzymatic and metabolic labeling methods. The abundance of m5C on mRNA is much lower than m6A, and the field is still working out whether it has consistent regulatory functions or is mostly noise from the tRNA-targeting enzymes. A reader called ALYREF has been proposed for m5C on mRNA, linking it to nuclear export.

\[Pause.\]

**Pseudouridine (Ψ).** The most abundant modification in tRNA and rRNA, pseudouridine is now also recognized as present on mRNA. It is deposited by the **pseudouridine synthase (PUS) family** of enzymes, principally PUS7 and PUS1, plus a snoRNA-guided system involving dyskerin. Mapping pseudouridine on mRNA is harder than mapping m6A because pseudouridine does not change base pairing at all — it just changes the geometry slightly. The chemical method **CMC labeling** marks pseudouridines specifically and stops reverse transcription, giving single-base resolution. The biological functions of mRNA pseudouridines are still being characterized, but they appear to include effects on translation efficiency, codon recognition, and mRNA stability.

**m1A — 1-methyladenosine on mRNA.** Another methylation on adenosine, but on a different ring nitrogen — N1 instead of N6. Unlike m6A, m1A blocks Watson-Crick base pairing, so it has a much more disruptive effect on the local structure of the RNA. m1A is deposited by the **TRMT family** of methyltransferases on tRNA, and at lower abundance on rRNA and mRNA. Mapping m1A is technically challenging because the mark is also subject to chemical conversion to m6A under harsh conditions (the Dimroth rearrangement). The biology of mRNA m1A is contested and the field is in flux.

**ac4C — N4-acetylcytidine.** A small acetyl group on the four-nitrogen of cytosine, deposited by the enzyme **NAT10**. ac4C is well-established on tRNA and rRNA, and is now reported on mRNA at low levels. It appears to enhance translation of marked transcripts, perhaps by stabilizing codon-anticodon interactions during elongation.

\[Pause.\]

And there are more — **m7G internal modifications** (separate from the cap), **2′-O-methylations** on internal residues, **A-to-I editing** by ADAR enzymes (an entire field of its own), and a long tail of rarer modifications. The picture emerging is that mRNA is decorated with a chemical alphabet that goes well beyond m6A. Each modification has its own writers, erasers, and readers — or at least its own enzyme machinery — and its own functional consequences. The epitranscriptome is plural.

How far this expansion will go depends on the technology. Most of these modifications are detected at low abundance and with high uncertainty by current methods. As single-molecule detection — particularly nanopore — matures, we will probably be able to map them more confidently and assess their biology more rigorously. For now, m6A is the well-characterized member of a large, mostly-still-mysterious family, and the next decade of epitranscriptomics will be partly about whether the other modifications turn out to have the same kind of regulatory richness that m6A has.

---

## SEGMENT 15 — Pseudouridine in mRNA vaccines: Katalin Karikó's quiet revolution

Of all the RNA modifications, the one with the largest direct impact on human health so far is not m6A. It is **pseudouridine**, or more specifically **N1-methylpseudouridine** — and the impact came not through endogenous biology but through a chemistry trick used in mRNA vaccines.

Here is the story. In the early 2000s, **Katalin Karikó**, a Hungarian-born biochemist working at the University of Pennsylvania with **Drew Weissman**, was trying to develop synthetic mRNA as a therapeutic platform. The basic idea — make synthetic mRNA in vitro, deliver it to cells, have the cells translate it into protein — was technically straightforward but had a major problem: synthetic mRNA, when introduced into cells, triggered massive innate immune responses, with toll-like receptors recognizing the mRNA as foreign and inducing inflammatory cytokine production. The cells thought the synthetic mRNA was a viral infection, and the inflammatory response was so severe that therapeutic use seemed impossible.

\[Pause.\]

In 2005, Karikó and Weissman published a paper showing that if you replaced uridine with pseudouridine in the synthetic mRNA, the innate immune response disappeared. The cells no longer recognized the mRNA as foreign. They translated the message efficiently into protein, without the inflammatory cytokine cascade. Subsequent work refined this further, showing that **N1-methylpseudouridine** — pseudouridine with an additional methyl on the N1 position — was even better, producing essentially silent immune evasion and even higher translation efficiency.

The mechanism is that the toll-like receptors in your innate immune system — TLR7 and TLR8 — recognize unmodified uridine-rich single-stranded RNA as a viral signature. Natural mammalian RNAs contain modifications, including pseudouridine, which evolved partly to distinguish self RNA from viral RNA. Synthetic mRNA without modifications looks like viral RNA. Synthetic mRNA with pseudouridine looks like self RNA. The immune system is fooled into letting it pass.

Here is the analogy. **Karikó's discovery — incorporating pseudouridine instead of uridine in mRNA vaccines hides the mRNA from innate immunity sensors. This is why mRNA-1273 (Moderna) and BNT162b2 (Pfizer-BioNTech) work as vaccines without triggering a catastrophic inflammatory response. Without the pseudouridine trick, mRNA vaccines as we know them would not exist.**

\[Pause.\]

For about fifteen years, this discovery was largely ignored outside a small circle of mRNA biotech enthusiasts. Karikó struggled to get funding, was demoted at Penn, and eventually left for BioNTech in Germany, where she helped develop the platform that became the Pfizer COVID vaccine. In 2023, she and Weissman won the Nobel Prize in Physiology or Medicine for the discovery, which by then had underpinned vaccines delivered to billions of people during the COVID-19 pandemic.

The vaccine application is not really epitranscriptomics in the endogenous biology sense — it is a synthetic chemistry trick borrowed from natural RNA modification. But it is the most consequential example to date of how the chemistry of RNA modifications can be exploited for human benefit. It also reframes the whole epitranscriptomic field: if a single modification at every uridine position can determine whether an RNA-based therapeutic works or fails, then the chemistry of RNA modifications is not just a regulatory curiosity but a fundamental design parameter for an entire class of medicines. mRNA-based vaccines, mRNA-based gene replacement therapies, mRNA-based cancer immunotherapies — all of them rely on engineered modifications to function. The epitranscriptome is no longer just something we study; it is something we engineer.

---

## SEGMENT 16 — m6A across the tree of life: plants, yeast, archaea

A quick comparative biology segment, because the universality of m6A says something important about its evolutionary depth. m6A is not just a mammalian or even just a vertebrate phenomenon. It is found across all of eukaryotic life, and in modified forms in prokaryotes too.

In **plants**, m6A was mapped on Arabidopsis mRNA shortly after the mammalian discoveries, by groups including Gordon Simpson's at Dundee. The plant METTL3 ortholog, called MTA, deposits m6A on plant mRNAs in patterns similar to but not identical to mammals — there is more enrichment in 3′ UTRs and less in the stop codon region. m6A is essential for embryo development in plants, and disruption of the writer complex causes severe developmental defects. Plants have their own YTH-domain readers and use m6A for similar regulatory purposes — mRNA stability, translation, response to environmental stress, particularly drought and salt.

\[Pause.\]

In **yeast** — specifically the budding yeast Saccharomyces cerevisiae — m6A is restricted to a meiotic context. Vegetative yeast cells, dividing in nutrient-rich medium, have essentially no m6A on their mRNAs. But during meiosis, a meiotic-specific methyltransferase called IME4 — the yeast METTL3 ortholog — deposits m6A on a subset of meiotic transcripts. Disruption of IME4 blocks meiosis. The yeast system is a stripped-down version of the mammalian system, used for a single developmental transition rather than for general regulation, and it provides a tractable system for studying the molecular details of m6A function.

In **fission yeast** and many other fungi, m6A patterns vary, sometimes with similar meiotic restriction and sometimes with broader use.

In **archaea and bacteria**, RNA modifications are abundant — bacteria in particular have a rich tRNA and rRNA modification landscape — but the system is not directly homologous to the eukaryotic m6A machinery. Bacteria have their own methyltransferases, their own functional contexts, their own regulatory logic. The deep evolutionary origin of m6A on mRNA is still being worked out, but the modification appears to predate the divergence of major eukaryotic lineages, making it at least a billion years old.

The point of this comparative section is that m6A is **deeply conserved**. It is not a mammalian invention or a vertebrate quirk. It is a fundamental feature of how eukaryotic cells handle their mRNAs, present from yeast through plants through animals, used differently in different lineages but built on the same conserved enzyme machinery. That conservation tells you the modification is doing something important — important enough to be retained across a billion years of evolution. Whatever we are discovering about m6A function in human cells is likely tapping into ancient cellular logic.

---

## SEGMENT 17 — Limitations and controversies: what the field still gets wrong

Before we get to the frontier, let me give you an honest accounting of where the m6A field is weakest. Every fast-moving field has a tendency to overclaim, and m6A has had its share of bad results, replication failures, and contested mechanisms. As a student or a reader of papers, you need to know where the soft spots are.

**Antibody dependence is real and serious.** Different anti-m6A antibodies, applied to the same samples, give partially non-overlapping peak calls. The original MeRIP-seq papers and many follow-up studies used antibodies whose specificities were not well characterized, and some of the m6A sites in the literature may actually be m6Am or m1A or other related modifications. The community has been moving toward more rigorous antibody validation, but a decade of literature was built on uncertain foundations.

\[Pause.\]

**Resolution remains a problem for most methods in use.** Even with miCLIP, the resolution is not single-nucleotide for every site. Most published m6A maps are at peak-region resolution, not at base resolution, and the precise adenosine that is methylated is often unclear. This makes comparing maps across studies hard, because peak boundaries differ between analyses.

**Quantification is poor.** What fraction of transcripts of gene X carry m6A at site Y? MeRIP-seq cannot answer this cleanly. m6A-SAC and GLORI can do better, but they are not yet standard. Most claims about "increased m6A in condition A versus B" are at best semi-quantitative, and absolute methylation fractions in the literature should be treated with skepticism.

**Reader specificity is murkier than the textbook suggests.** The clean story of YTHDF1 promotes translation, YTHDF2 promotes decay, YTHDF3 does both — that story has been challenged by careful follow-up work suggesting the three are largely redundant. The functional partitioning of readers is still an active area of debate, with some labs continuing to defend distinct functions and others arguing for unified models.

**FTO's role on internal m6A is contested.** As I mentioned earlier, FTO may be more important for m6Am near the cap than for internal m6A, even though much of the early FTO literature implicitly assumed broad internal activity. Reassessing those old claims is ongoing.

\[Pause.\]

**Functional studies often rely on knockouts of writer and eraser enzymes, which is a blunt instrument.** When you knock out METTL3, you change m6A on thousands of transcripts simultaneously, and you cannot easily attribute downstream phenotypes to specific m6A sites. The field has been working on site-specific manipulation — using catalytically dead Cas13 fused to METTL3 or FTO to manipulate m6A at single sites — but those tools are still being developed and validated. Most mechanistic claims in m6A papers rest on correlations between bulk modification changes and phenotype, which is suggestive but not definitive.

**Replication across labs has been spotty.** Some of the most prominent m6A findings — particular reader functions, particular disease associations — have not replicated cleanly when tested by independent groups. This is partly because of the technical issues above, partly because of biological variability between cell lines and conditions, and partly because the field grew so fast that quality control did not always keep up.

None of this means the field is wrong. The core picture — m6A is real, it is widespread, it is functional, writers and erasers and readers exist — is solid and not seriously contested. But the specific mechanistic claims in any individual paper should be read with appropriate skepticism, and when you see contradictory results from different groups, the right response is usually to assume both are partly right and the truth depends on context. The field is real, but it is still maturing, and the next five years of better methods and tighter validation will probably reshape a lot of what we currently believe.

---

## SEGMENT 18 — The frontier: full-transcriptome modification mapping, AI, and modification therapeutics

To finish, let me look forward. Where is the epitranscriptomics field going over the next five to ten years, and what should you watch for if you want to follow it?

**Full-transcriptome modification mapping at single-base resolution.** The chemistry-based methods like GLORI and m6A-SAC, combined with nanopore direct sequencing, are converging on the goal of complete, quantitative, single-nucleotide-resolution mapping of all major RNA modifications across the transcriptome. Within a few years, we should have datasets that report, for every adenosine on every transcript in a sample, what fraction of molecules carry m6A. That kind of comprehensive quantitative data will enable systems-level analyses that are impossible today.

\[Pause.\]

**Single-cell epitranscriptomics.** Current m6A methods need bulk RNA from millions of cells. The technology to push this to single cells is in development, using a combination of low-input chemistry, nanopore long-read sequencing, and molecular barcoding. Single-cell m6A profiling would let us ask how the epitranscriptome varies across cell types in a tissue, between single cells within a population, between healthy and diseased cells in a tumor. The first solid single-cell m6A papers have started appearing in the mid-2020s, and the field is moving fast.

**AI prediction of modifications from sequence.** Given enough training data — transcripts with experimentally validated modification sites — you can train deep learning models to predict modification status directly from sequence context. Tools like DeepM6A, m6Apred, and others already do this with reasonable accuracy for m6A. As single-base-resolution training data accumulates, sequence-based prediction will get more accurate, and eventually you may be able to infer the modification landscape of a transcript from its sequence alone, without needing to do an experiment. The same approach will be applied to the other modifications as data becomes available.

**RNA-modification therapeutics beyond the vaccine niche.** mRNA vaccines have established that engineered modifications work clinically. The next wave is mRNA-based therapeutics for non-vaccine indications — gene replacement, protein replacement, cancer immunotherapy — all of which use modified nucleosides to optimize translation and minimize immune response. The chemistry of those modifications, and the design rules for which modification works best in which context, is an active engineering frontier. Companies like Moderna, BioNTech, Arcturus, and many smaller players are developing modification-optimized mRNAs for dozens of clinical indications.

\[Pause.\]

**Small-molecule drugs targeting the m6A machinery.** As we discussed in Segment 11, METTL3 inhibitors are in clinical trials for AML. The pipeline is expanding to include FTO and ALKBH5 inhibitors, IGF2BP antagonists, and YTHDF inhibitors. If any of these prove out clinically, the m6A machinery becomes a validated drug target class, and the field expands rapidly into other diseases.

**Understanding the dark epitranscriptome.** Here is the honest closer. **We have over 170 known RNA modifications, and good detection methods for maybe five of them. Most of the epitranscriptome is still dark.** The minor modifications — m1A, ac4C, m7G internal, the various 2′-O-methylations, the rare bases that show up in tRNA and may also appear on mRNA — most of these are poorly mapped, poorly characterized functionally, and largely absent from current models of RNA regulation. As detection methods improve, particularly nanopore-based methods that can in principle distinguish all modifications at once, that dark epitranscriptome will start to illuminate. What we find there may be as significant as what we have already learned about m6A, or it may turn out that most of the minor modifications are biological noise. We do not know yet.

That uncertainty is the real frontier. m6A is the well-mapped continent in a vast, mostly uncharted ocean of RNA chemistry. The field's job over the next decade is to chart the ocean — to map all the modifications, all the enzymes, all the readers, all the functional consequences, and to weave them together into a coherent picture of how cells actually handle their RNAs. We are at the beginning of that program, not the end.

\[Pause.\]

So that is the lecture. We have walked from the four-letter alphabet of RNA to the 170-letter chemical reality. We have met m6A as the most abundant internal mRNA modification and traced its writers, erasers, and readers. We have walked through MeRIP-seq, miCLIP, m6A-SAC, GLORI, and nanopore direct RNA sequencing as successive technologies for reading the modification. We have seen m6A's role in mRNA stability, translation, splicing, cancer, stem cells, and viral infection. We have met pseudouridine as the engineered modification that made mRNA vaccines possible. And we have looked at the still-dark frontier of the broader epitranscriptome.

Hold the central picture. **RNA is not just A, U, G, C. It is a chemically decorated polymer carrying punctuation marks that change how the cell reads the message. m6A is the most-studied of those punctuation marks. The writers put it on, the erasers take it off, the readers decide the fate. The field is fifteen years old, the methods are still improving, the drugs are in trials, and the deepest discoveries are probably still ahead.** That is your tour of the epitranscriptome. Thanks for your attention.

---

## APPENDIX — Key terms, key methods, key papers

A reference list of the terms, abbreviations, and landmark publications mentioned in this lecture, organized for review.

**Modifications.**
- **m6A** — N6-methyladenosine. The most abundant internal mRNA modification. ~0.1-0.4% of all adenosines in mRNA.
- **m6Am** — N6,2′-O-dimethyladenosine. A cap-adjacent variant of m6A.
- **m5C** — 5-methylcytosine on RNA. The RNA cousin of DNA 5mC.
- **m1A** — 1-methyladenosine. Disrupts Watson-Crick pairing; common in tRNA, less so in mRNA.
- **m7G** — 7-methylguanosine. The mRNA cap; also occurs internally.
- **Ψ (pseudouridine)** — A uridine isomer; the most abundant modification in tRNA and rRNA, also on mRNA.
- **N1-methylpseudouridine** — A pseudouridine derivative used in mRNA vaccines.
- **ac4C** — N4-acetylcytidine.
- **Inosine** — Deaminated adenosine; created by ADAR enzymes; the wobble base.

**Writers (m6A).**
- **METTL3** — Catalytic methyltransferase.
- **METTL14** — Catalytically dead partner of METTL3; provides RNA binding and structural support.
- **WTAP** — Cofactor that targets the writer complex to nuclear speckles.
- **METTL16** — Specialized writer for U6 snRNA and MAT2A.
- **VIRMA, RBM15, HAKAI, ZC3H13** — Additional writer-complex components.

**Erasers (m6A).**
- **FTO** — First m6A demethylase identified; also GWAS hit for obesity.
- **ALKBH5** — Second m6A demethylase; major for internal mRNA m6A.

**Readers (m6A).**
- **YTHDF1, YTHDF2, YTHDF3** — Cytoplasmic YTH-domain readers; primarily destabilize mRNAs via CCR4-NOT.
- **YTHDC1** — Nuclear YTH reader; affects splicing and export.
- **YTHDC2** — Specialized reader for meiotic translation.
- **IGF2BP1, IGF2BP2, IGF2BP3** — Non-YTH readers that stabilize m6A-marked mRNAs; oncofetal.

**Methods.**
- **MeRIP-seq / m6A-seq** — Antibody-based pulldown of methylated RNA fragments followed by sequencing. The foundational method (2012).
- **miCLIP / m6A-CLIP** — CLIP-based methods for single-nucleotide-resolution m6A mapping using UV crosslinking and antibody-induced reverse transcription mutations.
- **m6A-SAC** — Antibody-free chemical labeling using engineered MjDim1 methyltransferase.
- **GLORI** — Chemical deamination of unmethylated A to inosine; the bisulfite equivalent for m6A.
- **Nanopore direct RNA sequencing** — Direct readout of ionic current differences for modified bases; antibody- and chemistry-free, single-molecule.
- **Tools for nanopore m6A calling** — m6Anet, EpiNano, Tombo, xPore, CHEUI.

**Landmark papers.**
- Dominissini et al., *Nature*, 2012 — MeRIP-seq introduction.
- Meyer et al., *Cell*, 2012 — m6A-seq, transcriptome-wide topology.
- Jia et al., *Nature Chemical Biology*, 2011 — FTO as m6A demethylase.
- Zheng et al., *Molecular Cell*, 2013 — ALKBH5 as second m6A demethylase.
- Liu et al., *Nature Chemical Biology*, 2014 — METTL3-METTL14 complex.
- Linder et al., *Nature Methods*, 2015 — miCLIP.
- Geula et al., *Science*, 2015 — m6A required for ES cell differentiation.
- Karikó et al., *Immunity*, 2005 — Pseudouridine evades innate immunity.
- Yankova et al., *Nature*, 2021 — METTL3 inhibitor STM2457 in AML.
- Liu et al., *Nature Biotechnology*, 2022 — GLORI single-base m6A mapping.

**Clinical and translational.**
- **STORM Therapeutics** — UK biotech; METTL3 inhibitor program in clinical trials for AML.
- **Moderna mRNA-1273** and **Pfizer-BioNTech BNT162b2** — COVID vaccines built on N1-methylpseudouridine chemistry.

**Concepts.**
- **Epitranscriptome** — The full set of chemical modifications on cellular RNA.
- **DRACH motif** — The sequence consensus for m6A: D (A/G/U), R (A/G), A (the methylated base), C, H (A/C/U).
- **Writers, erasers, readers** — The conceptual framework for any reversible chemical modification system, borrowed from epigenetics and applied to epitranscriptomics.
- **Co-transcriptional deposition** — m6A is added to RNA while it is still being transcribed by RNA polymerase II, linking the epigenome to the epitranscriptome.

End of lecture.


