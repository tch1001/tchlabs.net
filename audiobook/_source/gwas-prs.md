# GWAS and Polygenic Risk Scores — Reading the Common-Variant Genome

**A 2-hour undergraduate genomics lecture — full spoken script**

---

_How to use this script: This is written to be read aloud at a conversational pace of roughly 130 to 140 words per minute. The full transcript runs about twelve thousand words, which lands somewhere between ninety and one hundred minutes of speech with the marked pauses observed. Treat the bracketed pause directions as real beats — count two for a short \[Pause.\], five for a longer one. The mid-point \[BREAK\] after Segment 9 is a natural place to stop if you are splitting the recording into two episodes. The voice is second-person undergraduate lecture: you are speaking to a room of students who know what a SNP is, who have heard the phrase "polygenic risk score" in a magazine, and who want a working model of what GWAS actually is, why it works for some things and fails for others, and where the field is heading. Lean into the analogies. Slow down for the numbers. The story is dramatic — it has a 2005 origin moment, a missing-heritability mystery, and an equity problem that the field is still trying to repair — let it be dramatic._

---

## SEGMENT 1 — Why GWAS matters, and the fishing-trip frame

\[Pause.\]

Alright. Let's get started. Good morning, everyone. For the next two hours we are going to talk about a single experimental design — genome-wide association studies, GWAS, pronounced "gee-wass" — and the per-person risk numbers that come out of them, polygenic risk scores, PRS. These two ideas together define how human geneticists, in the year 2026, take a soup of common DNA variants and try to turn it into something useful — a discovery of disease genes, an estimate of someone's lifetime risk for coronary artery disease, a public-health screening tool, a drug target.

Here is the first thing you need to know. GWAS is not a sequencing experiment. GWAS is a statistical experiment. The data come from genotyping chips — Illumina or Affymetrix arrays that read off something like one million pre-chosen SNP positions across the genome at a cost of about fifty dollars a sample. The chip does not read your whole genome. It reads a curated panel of common variants — variants that more than one in a hundred people in the population carry — and then asks a single, sharp, statistical question: do disease cases carry one allele of this SNP more often than healthy controls?

That is the entire experimental premise. Take ten thousand people with heart disease and ten thousand people without, genotype them all on the same chip, and at each of a million SNP positions, count up the alleles. If the A allele shows up in fifty-two percent of the cases but only forty-eight percent of the controls, you have a candidate. Multiply that by a million SNPs, throw out everything that does not survive a brutal statistical threshold, and you have your hits.

\[Pause.\]

Here is the analogy I want you to hold for the next two hours. **GWAS is the genome-wide fishing trip.** You cast a million SNPs into the case-control sea, you reel everything in, and you see which ones come back disease-associated. Most of the lines come back empty — random noise, no association, the SNP frequency is the same in cases and controls. A few lines come back with something on the hook — a SNP whose frequency is genuinely different between the two groups, beyond what chance can explain. Those are your hits. You did not have a hypothesis about which SNP would matter. You cast a million lines blind, and you let the data tell you which ones caught fish.

That hypothesis-free, brute-force, scan-everything design is what makes GWAS different from candidate-gene studies that came before it. In the 1990s and early 2000s, geneticists studying disease would pick a gene they suspected — say, ApoE for Alzheimer's, or the dopamine receptor for schizophrenia — and they would genotype variants in that one gene, and most of the time their hypothesis would not replicate. The candidate-gene literature from that era is, charitably, a graveyard of false positives. GWAS solved that problem by refusing to have a candidate. It tests every common SNP, applies a savage multiple-testing correction, and only the strongest signals — the ones that survive a threshold of five times ten to the minus eight — get to claim a discovery.

If you walk out of here in two hours and you can do three things — one, sketch a Manhattan plot on a whiteboard and explain why the x-axis is chromosomes, the y-axis is minus log ten p-value, and the line at the top is at five times ten to the minus eight; two, explain in plain English what a polygenic risk score is and why a PRS for height works pretty well but a PRS for type-two diabetes is mediocre and why a PRS calibrated on Europeans performs about three times worse in someone of African ancestry; three, look at any genomics paper that says "we performed a GWAS for trait X and identified N loci, with a polygenic risk score explaining R-squared of Y percent of variance" and have a real intuition for what those numbers mean — then we have done our job. Everything else hangs off those three.

\[Pause.\]

One more orienting fact before we go deeper. The NHGRI-EBI GWAS Catalog — the central database of published GWAS results, maintained jointly by the National Human Genome Research Institute and the European Bioinformatics Institute — contained as of early 2026 over two hundred and fifty thousand cataloged SNP-trait associations across more than seven thousand published studies. Two hundred and fifty thousand. In 2008, the same catalog held a few hundred. In twenty years, we went from a handful of GWAS hits to a quarter of a million. That growth curve, which we will revisit in Segment 7, is one of the steepest in the history of biology, and it tells you something about both the power and the limits of the design. The power: you really can find disease-associated variants by brute-force scanning. The limit: most of what you find are tiny effects — odds ratios of one-point-one, one-point-two, one-point-three — that individually do almost nothing but in aggregate, summed across hundreds or thousands of hits, start to add up to a useful risk prediction. That summation is the polygenic risk score. We will spend a third of this lecture on it.

So the contract for today. We are going to start with the GWAS idea, then walk through the prerequisites that had to be in place before GWAS was possible — HapMap, 1000 Genomes, the biobanks — then we will dissect the Manhattan plot, walk through the 2005 origin paper, talk about the significance threshold and why it is what it is, get serious about linkage disequilibrium, look at the catalog, talk effect sizes, confront missing heritability, get into PRS construction and validation, look at clinical applications, talk about the equity problem, learn what Mendelian randomization is, and finish at the frontier — multi-ancestry meta-analyses, deep-learning PRS, the population-screening question. That is the menu. Let us eat.

---

## SEGMENT 2 — The prerequisites: HapMap, 1000 Genomes, and the biobanks

\[Pause.\]

GWAS did not just appear in 2005. It became possible because three separate scientific infrastructure projects, each one a multi-year, multi-million-dollar effort in its own right, finally lined up. I want to walk you through them, because the dependency chain matters — if you do not appreciate what had to exist before GWAS could exist, you will not appreciate why it is so hard to do GWAS in populations that those infrastructure projects neglected.

The first prerequisite is **the reference human genome**, which we covered in the Human Genome Project lecture. By 2003 there is one — a single, finished, reference assembly. Without a reference, you have no coordinate system. You cannot say "the SNP at chromosome nine, position twenty-two million" because there is no chromosome nine, position twenty-two million. The reference is the map on which everything else is drawn.

The second prerequisite is a **catalog of common variation** — a list of where the common SNPs are in the human genome and how they are arranged. This is what the International HapMap Project produced. HapMap ran from 2002 to 2005 in its first phase, and through 2009 in its third. The goal was to genotype several hundred individuals from a handful of reference populations — Yoruba from Ibadan, Nigeria; Han Chinese from Beijing; Japanese from Tokyo; northern and western Europeans living in Utah, the CEPH samples — at millions of SNP positions, and from that, work out which SNPs travel together on the same chromosomal segments. We are going to spend a whole segment on that "travel together" property — it is called linkage disequilibrium, LD, and it is the geometric trick that makes GWAS work — but for now, the headline is that HapMap was the catalog. It told the field: here are roughly ten million common SNPs in the human genome, here are their allele frequencies in our reference populations, and here are the LD blocks they fall into.

\[Pause.\]

HapMap is what allowed Illumina and Affymetrix to design **genotyping chips** — the physical microarrays that read off a curated panel of about a million SNPs per sample. Here is the trick. There are about ten million common SNPs in the human genome, but you do not need to genotype all of them. Because of LD, many SNPs are highly correlated with their neighbors — if you know the allele at one SNP, you can predict the allele at several nearby SNPs with high accuracy. So you choose a smaller set of "tag SNPs" — maybe five hundred thousand or a million — that capture the variation at the other nine million by virtue of being in LD with them. That is what a SNP chip is. A clever panel of tag SNPs, selected from HapMap, that lets you reconstruct a person's common-variant genotype across the whole genome by directly genotyping only ten percent of it.

The third prerequisite is **1000 Genomes**, which ran from 2008 to 2015. Where HapMap genotyped a few hundred people at a few million SNPs, 1000 Genomes sequenced — actually sequenced, not just genotyped — about twenty-five hundred individuals across twenty-six populations to identify essentially every variant that occurs at greater than one percent frequency anywhere in the human population. This produced a vastly more complete catalog of common variation, and crucially, it produced a reference panel that you could use for **imputation**. Imputation is a beautiful trick. Your subject was genotyped on a million-SNP chip. But because their haplotypes — their chromosomal segments — match haplotypes in the 1000 Genomes reference panel, you can statistically infer their alleles at tens of millions of SNPs that were never on the chip. You go from one million genotyped SNPs to about twenty million imputed SNPs per person. Same chip, twenty times the resolution. Imputation, powered by 1000 Genomes and its successors, is one of the quiet workhorses of the GWAS era.

\[Pause.\]

The fourth prerequisite, and arguably the one that turned GWAS from a niche tool into an industrial activity, is the **biobank**. Statistical power in GWAS scales roughly with sample size. To detect a SNP with an odds ratio of one-point-one — that is, a SNP that increases your disease risk by ten percent — at genome-wide significance, you need tens of thousands of cases. To detect an odds ratio of one-point-zero-five — a five-percent increase — you need hundreds of thousands. The early GWAS in 2005 and 2006 had a few thousand cases and controls and could only find the strongest signals. To find the small ones, the field needed populations.

The first big one was **deCODE** in Iceland, founded by Kári Stefánsson in 1996, which assembled genetic data on a large fraction of the Icelandic population — a few hundred thousand individuals — linked to medical records and genealogical records going back centuries. Iceland's relative population homogeneity and exhaustive recordkeeping made it a uniquely powerful natural laboratory. deCODE published some of the foundational GWAS of the late 2000s.

Then came **UK Biobank**, which is, depending on how you count, the most important single dataset in human genetics today. UK Biobank recruited five hundred thousand UK residents between 2006 and 2010, took blood samples, genotyped them all on custom arrays, and linked their genetic data to their NHS medical records, lifestyle questionnaires, imaging studies — MRI brain, MRI abdomen, retinal photos, echocardiograms — and now, in a rolling release, whole-exome and whole-genome sequencing data. UK Biobank made data available to qualified researchers at low cost, and the result was an explosion of GWAS publications. Half of the papers published in human genetics in the last decade rely on UK Biobank in some way. It is the workbench.

Other biobanks followed. **All of Us**, the NIH program launched in 2018, is aiming for a million participants in the United States with a deliberate emphasis on recruiting from ancestry groups underrepresented in UK Biobank — Black, Hispanic, Native American, Asian American. **FinnGen** in Finland, **Estonian Biobank**, **BioBank Japan**, **Million Veteran Program** at the U.S. Department of Veterans Affairs — there is now a global archipelago of biobanks, each with its own population focus, and the sum of them is the raw material for modern GWAS.

So the dependency chain. Reference genome, then HapMap, then SNP chips, then 1000 Genomes plus imputation, then biobanks. Each step took years and cost hundreds of millions of dollars. By about 2010 to 2012, all of those pieces were in place, and the GWAS era was off the rails.

Now let us look at the experimental design itself.

---

## SEGMENT 3 — The GWAS idea: case-control comparison, scaled to the whole genome

\[Pause.\]

Here is the GWAS experimental design in its simplest form. You have two groups of people. Group A is cases — people with the disease or trait of interest. Group B is controls — people without it. You genotype everyone in both groups at the same set of SNPs across the genome. At each SNP, you count alleles in the two groups, and you ask: is the allele frequency in cases significantly different from the allele frequency in controls?

If the disease has a genetic basis, some SNPs near disease genes should show a frequency difference. If the disease is purely environmental, no SNP should show a difference greater than chance. The whole logic is a simple two-by-two comparison — disease allele present or absent, case or control — multiplied by millions of independent tests.

Let me make this concrete. Suppose you are studying type-two diabetes. You have twenty thousand diabetics — cases — and twenty thousand non-diabetics — controls. At a particular SNP, call it rs7903146, in the gene TCF7L2, the T allele has a frequency of about thirty-three percent in the European population. In your case group, you observe the T allele at thirty-seven percent. In your controls, you observe it at twenty-nine percent. That difference — thirty-seven versus twenty-nine — is bigger than what you would expect by chance with samples this large. Run a chi-square test, get a p-value of, let us say, ten to the minus fifty. That SNP just hit genome-wide significance. The T allele of rs7903146 is associated with type-two diabetes. The odds ratio is about one-point-four — meaning each copy of the T allele increases your odds of being diabetic by forty percent. That, by the way, is a real result. TCF7L2 is one of the strongest type-two diabetes hits in the literature.

\[Pause.\]

Now, multiply that procedure by every SNP on your chip. About a million SNPs. For each SNP you run the same chi-square test — or the equivalent logistic regression, which lets you adjust for covariates like age, sex, and principal components of ancestry — and you get a p-value. You end up with a million p-values, one per SNP. If none of the SNPs were truly associated with the disease, you would expect, just by chance, about fifty thousand SNPs to have p-values below zero-point-zero-five, and about ten to have p-values below ten to the minus seven. So you cannot use the standard zero-point-zero-five threshold. You will be flooded with false positives. You need a much stricter threshold, and we will discuss exactly what it is and where it comes from in Segment 5. Spoiler: it is five times ten to the minus eight.

The other thing you have to control for is **population structure**. Suppose your cases happen to be sampled from one geographic region and your controls from another. The two regions have slightly different allele frequencies at thousands of SNPs simply because of ancient population history — not because of disease. If you naively run the comparison, every one of those frequency differences will look like a disease association. This is called population stratification, and it can completely poison a GWAS. The fix, worked out in the mid-2000s by people like Alkes Price and Mark Daly, is to compute principal components of the genotype matrix — basically, the top axes of genetic variation across your samples — and include those as covariates in the regression. The first few PCs capture continental ancestry, the next few capture finer geographic structure, and adjusting for them strips out the spurious signal. PCA correction is standard in every GWAS now.

\[Pause.\]

The basic statistical machinery is, in spirit, simple. For each SNP, you fit a model where disease status is the outcome and genotype, plus age, sex, PCs, is the predictor. You read off the regression coefficient — that is your **effect size**, usually reported as a log odds ratio for binary traits or a beta for continuous traits — and you read off the p-value. Then you plot the negative log ten of the p-value for every SNP against its chromosomal position, and that plot is the **Manhattan plot**. Segment 4. Let us go.

But before we plot, let me dwell on what is conceptually radical about this design. The GWAS approach throws away every prior assumption about which gene or pathway is involved. It does not ask "is this an autoimmune disease, so we should test HLA?" or "this affects metabolism, so we should test the insulin receptor." It tests _everything_. And one of the great empirical findings of the GWAS era is that disease genes are often _not_ the ones you would have guessed. The strongest GWAS hits for schizophrenia are in complement genes that immunologists have studied for years for other reasons. The strongest hits for inflammatory bowel disease are in autophagy genes that nobody thought were involved in gut inflammation. Hypothesis-free works precisely because human intuition about which genes matter for which diseases has, historically, been poor. You let the genome speak. The genome says things you did not expect.

---

## SEGMENT 4 — The Manhattan plot: the visual hallmark of GWAS

\[Pause.\]

If you have ever seen a GWAS paper, you have seen a Manhattan plot. It is the visual hallmark of the field. Every GWAS paper has one. They are recognizable from across the room.

Here is what a Manhattan plot is. The x-axis is the genome — twenty-three chromosomes lined up left to right, chromosome one starting at the left, chromosome twenty-two and X at the right. Each SNP gets a single dot. The horizontal position of the dot is its chromosomal location. The vertical position is the negative log ten of its p-value.

Why negative log ten? Because p-values span many orders of magnitude. A SNP with a p-value of zero-point-one is uninteresting. A SNP with a p-value of ten to the minus fifty is a major hit. Plotted linearly, those would be indistinguishable — both essentially zero on a linear axis. Take the negative log ten, and zero-point-one becomes one, ten to the minus fifty becomes fifty. Now you can see the dynamic range. The bigger the negative log ten, the more significant the hit. The hits rise. The non-hits sit near the bottom in a fuzzy carpet.

\[Pause.\]

Here is the analogy. **A Manhattan plot is a city skyline.** Chromosomes are blocks of city, spread across the bottom. Most SNPs are at street level — uninteresting, near zero, the noise floor of the experiment. Some SNPs rise off the ground. A few rise high. And occasionally, at a locus where the disease association is strong and there are many SNPs in LD with the causal variant, you get a tower of dots reaching up into the sky — a Manhattan skyscraper. The name of the plot is not a coincidence. It looks like the Manhattan skyline. Most of the city is low buildings, a few clusters are skyscrapers, and the iconic ones rise hundreds of stories above the rest.

The horizontal red line you usually see across the top of a Manhattan plot is the genome-wide significance threshold — five times ten to the minus eight, which on a negative log ten scale is at y equals seven-point-three. Any SNP whose dot is above that line is a significant hit. The dots that just barely poke above the line are the borderline hits, and the towers that go all the way to the top of the plot — sometimes negative log ten p-values of one hundred or two hundred for the very strongest hits — are the unmissable, definitely-real associations.

You will also often see a second horizontal line, lower down, at five times ten to the minus six or one times ten to the minus five. That is the "suggestive" threshold, which is used to flag loci that did not quite reach genome-wide significance but might be real and worth following up in a replication study.

\[Pause.\]

A few features of Manhattan plots that you should know how to read. First, the dots are often colored to alternate by chromosome — chromosome one in dark blue, chromosome two in light blue, chromosome three in dark blue again, alternating — to make the chromosomal boundaries visually clear. The colors are not meaningful in themselves; they are just a visual aid.

Second, you will sometimes see "spikes" — vertical columns of dots above the threshold, sometimes containing dozens or hundreds of SNPs, all rising together in a tight chromosomal region. That is not a hundred independent hits. That is one signal, smeared across a region of LD. The actual causal variant is somewhere in that smear, and every SNP in LD with it shows up as a hit because every SNP in LD with it has a correlated allele frequency difference. We will deal with this in Segment 6 when we get serious about LD. For now, just understand: spikes are signal regions, not independent loci.

Third, you will often see a separate plot called a **QQ plot** — quantile-quantile — paired with the Manhattan plot. The QQ plot shows the observed p-value distribution against the expected p-value distribution under the null hypothesis. If your GWAS is well-controlled — meaning population structure is properly corrected for — most of the QQ plot should lie on the diagonal y-equals-x line, indicating that most SNPs behave as expected under the null, with only the top tail deviating upward because of the real signals. If the entire QQ plot lifts off the diagonal, that is a red flag — it usually means you have residual population structure or some other confounding inflating all your p-values, and your top hits cannot be trusted. The QQ plot is the diagnostic; the Manhattan plot is the result.

Memorize the Manhattan plot. Chromosomes on the x-axis. Negative log ten p on the y-axis. Red line at five times ten to the minus eight. Towers rising above the line are your hits. That is the language of GWAS, and every paper speaks it.

---

## SEGMENT 5 — The 2005 AMD GWAS: the origin moment

\[Pause.\]

Now let me tell you about the paper that proved the design could work. Without this paper, GWAS would have remained a theoretical exercise for several more years. With it, the floodgates opened.

The paper is Klein and colleagues, _Science_, 2005. The disease is age-related macular degeneration — AMD — the leading cause of irreversible blindness in adults over fifty in the developed world. The first authors were Robert Klein and Caroline Zeiss; the senior authors were Josephine Hoh and Jurg Ott at Rockefeller and Yale. The paper is short. The result is enormous.

What they did was, by modern standards, almost laughably small. They genotyped one hundred and sixteen thousand SNPs across the genome in ninety-six cases of AMD and fifty controls. That is one hundred and forty-six total subjects. By 2026 standards, that is an underpowered candidate-gene study, not a GWAS. But this was 2005. SNP chips with a hundred thousand SNPs were the state of the art. Sample sizes in the hundreds were standard. And remember — they had no idea if this design would work at all. The whole point of the paper was to test the proposition.

\[Pause.\]

What they found was a single SNP — rs380390, in an intron of the complement factor H gene, CFH, on chromosome one — whose allele frequency was dramatically different between cases and controls. The p-value was, after correcting for the hundred thousand tests they had run, four times ten to the minus eight. Genome-wide significant. The variant — a tyrosine-to-histidine substitution at amino acid position 402 of CFH — was carried by about thirty-five percent of European chromosomes. People homozygous for the risk allele had roughly seven times the odds of developing AMD compared to people homozygous for the protective allele. Seven times. That is a colossal effect by GWAS standards. Most GWAS hits today have odds ratios in the one-point-one to one-point-three range. CFH for AMD was about seven.

The discovery was confirmed in days. Three other groups, working independently and in parallel, had found the same variant. The follow-up papers came out within weeks. CFH was real, AMD was a complement-system disease, and the GWAS design had proved itself.

\[Pause.\]

Two things about this paper to remember. First, the biological insight was unexpected. Before 2005, AMD was thought of as primarily an oxidative-damage disease of the retinal pigment epithelium. Nobody had a strong prior that the complement cascade — part of the innate immune system, the part that punches holes in invading bacteria — would be central. CFH is a major regulator of the alternative complement pathway, and the Y402H variant impairs its function, leading to chronic low-grade complement activation in the choroid layer beneath the retina. The GWAS hit redirected the entire AMD research field toward inflammation and complement biology, and a generation of drugs followed. As of 2026, there are FDA-approved complement-inhibitor injections — pegcetacoplan, avacincaptad pegol — for the geographic atrophy form of AMD, and they exist because the 2005 GWAS pointed there.

Second, the AMD GWAS worked partly because AMD is a disease with unusually large common-variant effects. The CFH Y402H variant carries an odds ratio of about seven; that is large enough that you can detect it in a sample of a few hundred. Most disease-associated common variants do not work like that. They have odds ratios of one-point-one, and you need fifty thousand cases to detect them. AMD was lucky — there was a big-effect common variant hiding in plain sight. The field would later learn that for most complex diseases, the big-effect common variants are rare and the small-effect ones are the rule.

But the 2005 paper did its job. It proved that scanning the genome could find disease genes. That was enough.

---

## SEGMENT 6 — Genome-wide significance: where 5e-8 comes from

\[Pause.\]

I want to dwell on the threshold. Because if you do not understand where five times ten to the minus eight comes from, you cannot really understand GWAS, and you certainly cannot understand why some claimed associations are real and others are not.

The basic problem is **multiple testing**. If you run one statistical test at a p-value threshold of zero-point-zero-five, you have a five-percent chance of a false positive under the null. That is fine for one test. But if you run a million tests at threshold zero-point-zero-five, you expect fifty thousand false positives by chance alone. Obviously, you cannot use zero-point-zero-five as your threshold. You have to correct.

The standard correction is the **Bonferroni correction** — divide your desired family-wise error rate by the number of independent tests. If you want a five-percent false-positive rate across your whole experiment, and you ran a million independent tests, you divide zero-point-zero-five by a million, getting five times ten to the minus eight.

But here is the subtle point. SNPs are not independent. SNPs in LD with each other carry overlapping information; testing all of them is like testing the same hypothesis multiple times. So the question becomes — how many _independent_ tests are there in the human genome's common-variant landscape?

\[Pause.\]

Several groups in the mid-2000s — most notably Pardis Sabeti, Jonathan Pritchard, and the Wellcome Trust Case Control Consortium — worked through this. The conclusion, repeatedly arrived at by different methods, was that there are roughly one million independent common-variant loci in the genome. Some calculations give half a million; some give two million. But to a first approximation, one million is the right order of magnitude. Apply Bonferroni at the one-million-tests level, and you get the threshold of five times ten to the minus eight.

This number, five times ten to the minus eight, has stuck. It is now the universal standard for declaring a GWAS hit. Whether your study tested half a million SNPs or twenty million imputed SNPs, the threshold is five times ten to the minus eight. The reasoning is that you are sampling from the same one-million-independent-test space, regardless of how many of the dependent SNPs you happen to genotype. This is a convention, not a theorem, but it is so deeply baked in that papers reporting hits at p-values of one times ten to the minus seven get called out — those are suggestive, not significant.

\[Pause.\]

There are a few things to note about this threshold.

First, it is **conservative**. It treats every common variant as equally likely to be associated _a priori_. If you have a strong biological prior — say, you are studying autoimmune disease and you have reason to focus on HLA — you can use a less stringent threshold for that region. But for genome-wide claims, five times ten to the minus eight is the convention.

Second, it does not adjust for the number of _traits_ you are studying. If you run a hundred GWAS for a hundred different traits, you are doing a hundred times a million tests, and a strict Bonferroni would push your threshold to five times ten to the minus ten. In practice, this is ignored — each GWAS is treated as a separate experiment — but it is a source of false positives across the literature.

Third, the threshold may need to be revised for **multi-ancestry** GWAS or for studies using **whole-genome sequencing** rather than chips. WGS captures rare variants that are not in the standard one-million-independent-test framework, and the effective number of tests may be much larger. Proposed thresholds for WGS-era GWAS run as low as one times ten to the minus nine.

But for the next two hours, hold the number five times ten to the minus eight in your head. It is the line above which a dot in a Manhattan plot becomes a hit. Below it, you have a story. Above it, you have a result.

---

## SEGMENT 7 — Linkage disequilibrium: the indirect-association problem

\[Pause.\]

Here is something that will, the first time you grasp it, change how you read GWAS papers. Almost none of the SNPs that show up as GWAS hits are the actual causal variants. They are nearby SNPs that happen to be statistically correlated with the causal variant — riding along on the same chromosomal haplotype — and therefore show the same allele frequency difference between cases and controls. The GWAS hit is the SNP's neighbor, not the SNP itself.

This phenomenon is called **linkage disequilibrium**, LD, and it is one of the deepest pieces of population-genetic furniture in the entire field. Let me build the concept from scratch.

When chromosomes recombine during meiosis, they swap segments. Over many generations, this recombination breaks up associations between distant variants — alleles that were on the same chromosome a hundred generations ago are very unlikely to still be on the same chromosome today, because so many crossovers have happened in between. But over short distances, recombination is rare. Two SNPs that are physically close on a chromosome — say, ten kilobases apart — are very likely to still be on the same chromosomal segment, because the probability of a crossover in those ten thousand bases per meiosis is tiny.

So nearby SNPs travel together. If a population has two ancestral haplotypes — one carrying the A allele at SNP one and the C allele at SNP two, and another carrying the G allele at SNP one and the T allele at SNP two — those associations persist across generations as long as the SNPs are close enough that crossovers do not break them up. When you genotype an individual at SNP one and find the A allele, you can predict with high confidence that they also carry the C allele at SNP two. The two SNPs are in linkage disequilibrium.

\[Pause.\]

Here is the analogy. **LD is the GWAS catch.** You cast a million lines into the genome-wide sea. You reel one in with a fish on it. But the fish is rarely the SNP you actually caught; the fish is the variant a few thousand base pairs away that your SNP is correlated with. Your SNP just happens to be holding onto the same chromosomal segment, and the actual causal variant — the one that is biologically doing the work — is somewhere on that same segment, tagged by your SNP but not necessarily the same SNP.

This has practical consequences. When a GWAS reports a hit at, say, rs12345678 in some intergenic region of chromosome twelve, the message is not "this exact SNP is the causal variant." The message is "somewhere in the LD block containing rs12345678, there is a causal variant." That block might span ten kilobases or two hundred kilobases. Inside it, there may be ten or fifty or a hundred SNPs, all in tight LD with the lead hit, all showing roughly the same association statistic. Figuring out which one is the actual cause — the variant whose presence actually changes the biology — is a separate, much harder problem called **fine-mapping**, which we will come back to in Segment 17.

\[Pause.\]

The structure of LD across the genome is not uniform. The genome is organized into **LD blocks** — chunks of chromosomes a few kilobases to a few hundred kilobases long, where SNPs within a block are tightly correlated, separated by short regions called **recombination hotspots** where recombination is unusually frequent and LD drops off. The HapMap project's central output was a map of these blocks. SNP chips are designed to put one or two tag SNPs in each block — those tags then capture the variation of every other SNP in their block, because they are all correlated.

LD structure differs between populations. African populations have shorter LD blocks, because they are older — more generations of recombination have occurred since their common ancestor — and so each haplotype has been broken up more times. European and East Asian populations have longer LD blocks, because they descend from smaller founder groups that went through bottlenecks, freezing in long shared haplotypes that have not yet had time to fully recombine. This is one of the reasons GWAS results from European samples do not transfer perfectly to African samples — even for the same true causal variant, the tag SNP that captured it in Europeans may not be in LD with it in Africans, and the GWAS hit may simply disappear when you go to an African cohort. We will return to this when we get to the equity problem.

\[Pause.\]

So when you read "GWAS identified rs9999 at chromosome eleven q-twenty-two associated with trait X," you should hear: "Somewhere in the LD block at chromosome eleven q-twenty-two, there is a variant affecting trait X. We do not yet know which one. The lead SNP is the most strongly associated one in our data, but in a different population, a different SNP in the same block might be the lead. Fine-mapping required to identify the causal variant."

That mental translation is the second great fact about GWAS, after the existence of a multiple-testing threshold. GWAS finds LD blocks, not causal variants. Causal variants require additional work. Most GWAS papers tell you a locus, and that locus is the start of a research project, not the end.

---

## SEGMENT 8 — The GWAS Catalog: 250,000 associations and counting

\[Pause.\]

Let me give you a sense of scale. The **NHGRI-EBI GWAS Catalog**, maintained at the European Bioinformatics Institute in Hinxton, England, and jointly curated with the National Human Genome Research Institute in Bethesda, Maryland, is the canonical database of published GWAS results. Every GWAS paper that hits genome-wide significance for some trait gets ingested into the catalog. Each entry contains the SNP, the trait, the lead p-value, the effect size, the study, the population, and links back to the original paper.

The catalog started in 2008 with a few hundred entries. By 2010 it had a few thousand. By 2015 it had crossed twenty thousand. By 2020, around a hundred thousand. As of early 2026, the count is north of two hundred and fifty thousand SNP-trait associations, drawn from over seven thousand studies, covering several thousand distinct traits and diseases.

Two hundred and fifty thousand associations. Think about that. Twenty years ago, the field had zero. Today, every common disease of any consequence has been GWASed many times, often in cohorts of hundreds of thousands of cases, and the resulting maps of disease-associated loci are extraordinarily detailed.

\[Pause.\]

The traits covered are everything — height, body mass index, blood pressure, cholesterol, every common cancer, every psychiatric disorder, autoimmune diseases, neurological diseases, metabolic disorders, infectious-disease susceptibility, response to drugs, even behavioral phenotypes like educational attainment, age of menarche, alcohol consumption, and morningness or eveningness. If you can measure it and have a sample size in the tens of thousands, you can GWAS it.

A few examples of where the numbers have landed.

**Height**, the canonical complex trait, has been studied in samples of millions and now has over twelve thousand independent genome-wide-significant loci — basically, every common variant on the chip with even a tiny effect on height has been detected. We will come back to this in Segment 13 when we talk about the height PRS.

**Body mass index** has on the order of nine hundred associated loci.

**Type-two diabetes** has more than five hundred.

**Coronary artery disease** has around four hundred.

**Schizophrenia** has about three hundred, in the latest meta-analysis from the Psychiatric Genomics Consortium with around eighty thousand cases.

**Educational attainment** — a controversial phenotype, basically years of schooling — has around four thousand associated loci, with effect sizes so tiny that individually they explain almost nothing but in aggregate explain a few percent of variance.

\[Pause.\]

The catalog grows roughly exponentially because each new biobank release, each new meta-analysis, finds new hits. The pattern that has emerged across traits is consistent. For most complex traits, the answer to "how many causal common variants are there?" is "thousands to tens of thousands," and the answer to "how big are the individual effects?" is "almost all of them are tiny."

This is the **polygenic architecture** of common disease, and it took the field about a decade of GWAS to fully internalize it. The expectation in 2005, when the first GWAS hits were coming in, was that each disease would have a handful of moderately-sized common-variant effects, plus environment, plus some rare big-effect variants — basically, a Mendelian-flavored picture. What the data revealed instead, slowly and painfully across thousands of papers, is that complex traits are influenced by thousands of small-effect common variants spread across the whole genome, plus rare variants of larger but population-level minor effect, plus environment, plus interactions. The genome is densely sprinkled with weak signals, not punctuated by a few strong ones.

That picture is what makes polygenic risk scores both possible and limited. If the effects are tiny and there are thousands of them, no single hit predicts much, but their sum might. The PRS is the mathematical embodiment of that idea. Let us get there.

---

## SEGMENT 9 — Effect sizes: why most hits move risk by ten or twenty percent

\[Pause.\]

Before we sum them up, you need to feel the size of an individual GWAS hit. Because the numbers, when you first encounter them, are smaller than your intuition expects.

Effect sizes in GWAS are reported in two main ways. For continuous traits like height or BMI, you report a **beta** — the number of trait units per copy of the effect allele. So you might see "the C allele of rs98765 is associated with an increase in height of one-point-one millimeters per copy." A SNP that adds one-point-one millimeters of height when you have one copy, and two-point-two millimeters when you have two. That is a typical effect size for a height SNP. There are about twelve thousand of them, each adding a millimeter or two, and they sum.

For binary traits like disease yes-or-no, you report an **odds ratio**, OR. An OR of one means no effect. An OR of two means doubled odds of disease per copy of the effect allele. Most GWAS hits for common diseases have ORs between one-point-zero-five and one-point-three. A SNP with an OR of one-point-one increases your odds of the disease by ten percent per allele. With two copies, that compounds to about twenty-one percent. That is the typical magnitude of a GWAS hit.

\[Pause.\]

Why are the effects so small? Two reasons.

First, by selection. Variants with large effects on common diseases tend to be selected against — if a SNP doubles your risk of coronary disease and is common in the population, it should not be common, because carriers reproduce less successfully. Variants with tiny effects, by contrast, are nearly invisible to selection and can drift to high frequencies. So the common-variant frequency band — where GWAS looks — is enriched for tiny-effect variants almost by definition. The big-effect variants exist, but they are usually rare. They are found by exome sequencing, not by SNP chips.

Second, by the polygenic architecture itself. Complex traits are caused by many genes interacting with each other and with environment. Any one gene's contribution is necessarily small if the trait is determined by thousands of genes. This is just arithmetic — you cannot have ten thousand causes of a trait that each contribute a lot, because they would not add to a hundred percent.

\[Pause.\]

Here is the analogy. **Each GWAS hit is a feather on the scale.** A single feather barely tips the balance. Two feathers, ten feathers — still imperceptible. But pile on a thousand feathers, and you have a noticeable weight. And pile on ten thousand, and you have something that meaningfully shifts the scale's reading.

That is what a polygenic risk score does. It takes all the GWAS hits — every feather — multiplies each by its effect size, sums them across the genome for an individual, and produces a single number. The PRS is the weighted feather count. By itself, no feather matters. Summed across the genome, the feathers can matter quite a lot.

For some traits, the PRS works well. For height, summed across the twelve thousand variants we have hits for, the PRS captures about forty percent of the variance in adult height — meaning it predicts adult height almost as well as knowing one parent's height does. That is a serious prediction. For other traits — type-two diabetes, schizophrenia, depression — the PRS captures only five or ten percent of variance, because the heritable architecture is harder, the environmental contribution is larger, or our GWAS sample sizes are still too small to detect all the small effects.

Effect sizes matter, but in GWAS they matter cumulatively. That is the lesson. No single SNP is going to tell you anything about an individual's risk. The aggregation is the value.

---

\[BREAK\]

---

## SEGMENT 10 — Missing heritability: where is the rest of the height variance?

\[Pause.\]

Welcome back. I hope the break was useful. We are going to start the second half with what may be the most pedagogically interesting problem in the GWAS era — the missing-heritability puzzle.

Here is the setup. **Heritability** is a quantitative-genetics concept, defined as the proportion of phenotypic variance in a population that is attributable to genetic variance. It is estimated, classically, from twin studies — by comparing how similar identical twins are on a trait to how similar fraternal twins are. If identical twins, who share a hundred percent of their DNA, are very similar on a trait, and fraternal twins, who share fifty percent, are noticeably less similar, the difference is attributed to the extra genetic sharing of the identical twins. Run through the math, and you get a heritability estimate — call it H-squared.

For human height, twin studies have consistently found H-squared of about eighty percent. Eighty percent of the variance in adult height across a population, in classical estimates, is genetic. Twenty percent is environmental — nutrition, childhood illness, and so on. This is one of the most robust quantitative-genetic results in biology. Height is highly heritable.

\[Pause.\]

Now, GWAS, by 2010, had found a few hundred SNPs associated with height. The combined explained variance from all of them was around five percent. Five percent. Heritability says eighty. GWAS hits explain five. Where is the other seventy-five percent?

This was called the **missing heritability problem**, and it dominated the conversation in human genetics for the better part of a decade. The original 2008 paper from Maher in _Nature_, framing the puzzle, made the field collectively nervous. If we cannot find seventy-five percent of the variance in something as simple and clearly genetic as height, what does that say about more complicated diseases?

\[Pause.\]

Several hypotheses for where the missing heritability was hiding.

**Hypothesis one: rare variants.** GWAS uses chips that genotype common variants — minor allele frequency over one percent. Variants below that frequency are systematically missing. If rare variants, individually, have large effects, they could account for a lot of variance that GWAS cannot see. This hypothesis has some support — rare-variant studies via exome and genome sequencing have found additional contributions — but rare variants do not, by themselves, fill the gap.

**Hypothesis two: not enough common variants.** Maybe GWAS hits are still being discovered, and as sample sizes grow, more of the missing variance will be captured. This turned out to be the largest single factor. Modern height GWAS, with samples in the millions, have identified over twelve thousand independent loci and explain about forty percent of variance. Forty percent. Up from five. The missing heritability was substantially in small-effect common variants that earlier studies were underpowered to detect.

**Hypothesis three: structural variation.** Copy-number variants, inversions, large insertions and deletions — variation that SNP chips do not capture well — might account for some of the gap. Some contribution, but again, not the bulk.

**Hypothesis four: gene-gene and gene-environment interactions.** Heritability estimates from twin studies assume additive genetic effects. If genes interact — if variant A only matters in the presence of variant B — those interactions inflate twin-based heritability estimates without showing up in additive GWAS models. Probably some role, but quantifying it has been hard.

**Hypothesis five: heritability estimates are wrong.** Twin studies may overestimate heritability because identical twins share more environment than fraternal twins — shared womb, shared parental treatment, shared cultural assumptions. If you correct for this, the true heritability of height might be more like sixty percent than eighty, and the gap shrinks.

\[Pause.\]

Here is the analogy. **Missing heritability is the puzzle of the missing seventy-five percent.** Imagine you balance your checkbook and you find your balance is twenty-five dollars but your records say it should be a hundred. Where did the seventy-five go? Maybe small charges you forgot. Maybe a bank error. Maybe a transfer to a different account. Maybe you miscounted the original total. The missing-heritability story is exactly that — a balance discrepancy whose source is partly each of several explanations, no single one dominant.

What the field now believes — and this is a substantially consolidated position by 2026 — is that the gap is mostly explained by: small-effect common variants that need very large samples to be detected (the biggest chunk); rare variants of moderate-to-large effect, captured by sequencing not chips (the second-biggest); plus structural variants, epistatic interactions, and probably some over-estimation of twin-based heritability.

The story has gone from "missing heritability is a fundamental crisis" to "missing heritability is mostly just statistical underpowering plus a few real but smaller effects." That is one of the great quiet resolutions of the GWAS era. The mystery was not a fundamental flaw in the design; it was a sample-size and variant-coverage problem, and bigger studies plus sequencing have closed most of the gap.

But the puzzle taught the field something important. It taught us that complex traits are vastly more polygenic than anyone expected in 2005. The genetic architecture of human variation is not a few big-effect genes and a lot of environment. It is thousands of tiny-effect variants, plus environment, plus interactions. That picture is now the consensus, and it shapes how PRS is built.

---

## SEGMENT 11 — Common variants vs rare variants: chip vs sequencing

\[Pause.\]

Let me draw the line cleanly between two different methodologies, because they often get confused.

**GWAS, as we have been describing it, is a common-variant method.** It uses SNP chips that pre-select variants known to occur at frequencies above one percent in the population. These variants are old — most predate the human-out-of-Africa migration sixty thousand years ago — and they are shared across populations, though with different frequencies. They are the variants that have had time to spread and be cataloged.

**Rare-variant analysis is a sequencing method.** It requires actually sequencing the DNA — usually the exome, the protein-coding two percent of the genome, but increasingly the whole genome — to identify variants that occur in fewer than one percent of people. Most rare variants are unique to a family or a population. They are young — many appeared within the last few thousand years — and they are not on any chip because their existence was not known when the chips were designed.

The two kinds of analysis answer different questions.

\[Pause.\]

Common-variant GWAS asks: across the population as a whole, which old, widely-shared variants influence this trait? The hits are statistically powerful — because the variants are common, even small effect sizes become detectable in large samples — but the effects are individually small.

Rare-variant analysis asks: do certain genes have an excess of damaging variants in cases compared to controls? If a gene tolerates only a few protein-disrupting mutations and your cases have ten times more of them than your controls, that gene is implicated. Rare-variant effects can be much larger per variant — a stop-gain mutation in a key gene might raise disease risk five-fold — but because each rare variant occurs in only a handful of people, you cannot test variants individually. You have to aggregate them at the gene level, in what is called a **burden test** or a **SKAT** test.

\[Pause.\]

The two approaches are complementary. For most complex traits, common variants explain the majority of estimable heritability, but rare variants contribute meaningfully — somewhere between ten and thirty percent of estimable heritability, depending on the trait. For some diseases — autism, severe early-onset neurodevelopmental disorders, certain heart-rhythm syndromes — rare variants dominate, and common-variant GWAS finds very little. For other diseases — type-two diabetes, schizophrenia, common cancers — common variants are the main contributors, and rare-variant studies add fine detail.

The methodologies have also converged in instrumentation. Today, big biobanks like UK Biobank are running whole-exome and whole-genome sequencing on all five hundred thousand participants. From the same dataset you can extract both common-variant GWAS results, by treating sequencing as expensive genotyping, and rare-variant results, by aggregating across genes. The chip-versus-sequencing distinction is becoming a difference in how you analyze the data rather than a difference in what data you collect.

But for the rest of this lecture, when I say "GWAS" I am talking about the common-variant approach — chips, imputation, single-SNP association tests, five-times-ten-to-the-minus-eight threshold — because that is the framework PRS is built on, and PRS is where we are headed next.

---

## SEGMENT 12 — Polygenic risk scores: summing the feathers

\[Pause.\]

Alright. Let us build a polygenic risk score from scratch.

You have completed a GWAS. You have thousands of SNPs, each with a measured effect size — call it beta-i for SNP i. You have a new individual, person X, whose genome you have just genotyped. For each SNP in your GWAS list, you record how many copies of the effect allele person X carries — zero, one, or two — call that g-i.

The polygenic risk score for person X is, in its simplest form, the sum across all SNPs of beta-i times g-i.

PRS-X equals the sum over i of beta-i times g-i.

That is it. That is the whole formula. You walk through every variant in your GWAS hit list. For each one, you multiply its effect size by the number of risk alleles person X carries. You sum across the genome. You get one number per person. That number is their polygenic risk score.

\[Pause.\]

Now, in practice, there are several refinements that matter.

First, **how many SNPs do you include?** The naive choice is to use only genome-wide-significant hits — SNPs that passed the five-times-ten-to-the-minus-eight threshold. But you can do better by including more SNPs at progressively relaxed thresholds — five times ten to the minus six, one times ten to the minus five, and so on. The reason this works is that even SNPs that did not reach significance often still carry real signal; they were just slightly underpowered. Including them adds noise but also adds signal, and empirically, for most traits, optimal PRS uses tens of thousands or hundreds of thousands of SNPs at much more permissive thresholds.

Second, **how do you handle LD?** If two SNPs are in tight LD, they are giving you the same information. Including both in the PRS double-counts. So PRS construction usually includes an **LD pruning** or **LD clumping** step — for each region of the genome, keep only the lead SNP from each LD block. Modern methods, like LDpred and PRS-CS, instead use sophisticated Bayesian models that adjust effect-size estimates for LD without strict pruning, often producing better-performing scores.

Third, **how do you weight each SNP?** The raw GWAS effect size is one option, but it is noisy. Bayesian shrinkage methods regularize the effect estimates — shrinking small ones toward zero, leaving large ones less perturbed — and this empirically improves PRS performance, especially when the GWAS sample is smaller.

Fourth, **how do you validate?** PRS performance must be measured on an independent sample — different from the one the GWAS was done on — because of overfitting concerns. The standard metric is the variance explained, R-squared for continuous traits, or area under the ROC curve, AUC, for disease. A PRS with AUC of zero-point-five is useless. AUC of zero-point-six is mild. AUC of zero-point-seven and up is starting to be clinically interesting.

\[Pause.\]

Here is the analogy. **A polygenic risk score is the per-person risk number — the weighted sum of risk alleles across the genome.** Each SNP is a tiny vote. Some votes are weighted heavily — large effect sizes — and some barely count. The PRS aggregates the votes into one number. People with a lot of risk alleles, weighted by their effects, get a high score. People with few get a low score. The distribution of PRS values across a population is approximately bell-shaped — most people in the middle, with a long tail at each end.

The promise of PRS is that the high end of that distribution is genuinely enriched for disease. For coronary artery disease, individuals in the top one percent of the European PRS distribution have something like three to four times the lifetime risk of CAD compared to average. That is roughly the same effect as carrying a familial hypercholesterolemia mutation — a Mendelian, single-gene cause of early heart disease — except that the polygenic version is much more common. By PRS criteria, about ten times more people have polygenic CAD risk than have monogenic CAD risk.

That is the case for PRS as a clinical tool. It identifies a substantial chunk of the population at elevated risk who would not be flagged by traditional risk factors alone. The case against PRS, which we will get to in Segment 16, is that it works much better in some populations than others, and that the elevated risk it identifies is often hard to act on clinically. But the math is clean: sum the feathers, and the top of the distribution is where most of the cardiovascular events will eventually concentrate.

---

## SEGMENT 13 — The height PRS: the canonical PRS success story

\[Pause.\]

If you want to see PRS at its best, look at height.

Height is the perfect trait for PRS for several reasons. It is precisely measurable — bring out a stadiometer and you get a number to the millimeter. It is highly heritable — about eighty percent. It is influenced by thousands of common variants, each with a tiny effect, which is exactly the genetic architecture PRS is designed to capture. And it has been GWASed at enormous scale — the most recent meta-analysis, from the GIANT consortium and partners, included over five million individuals. Five million. The Manhattan plot from that study is one of the densest skylines in the field.

That meta-analysis identified about twelve thousand independent genome-wide-significant SNPs influencing height. From those variants and their effect sizes, you can build a height PRS that, in a held-out European-ancestry sample, captures about forty percent of the variance in adult height. Forty percent. That is, knowing somebody's genotype at twelve thousand SNPs, you can predict their height with R-squared of about zero-point-four. For reference, knowing the height of one of their parents predicts their adult height with R-squared of about zero-point-five. So the PRS is approaching parental-height level of accuracy. From DNA alone. That is the canonical PRS success.

\[Pause.\]

A few things this teaches us about when PRS works.

First, **measurement matters**. Height is measurable to the millimeter. There is essentially no diagnostic ambiguity. By contrast, "did this person have a major depressive episode" is a clinical judgment that varies between raters and across cultures, and the heritability estimate sits on shakier ground. PRS performance is bounded above by the heritability of the trait, which is bounded above by the precision of the phenotype measurement.

Second, **sample size matters enormously**. The height PRS works because the GWAS that built it had five million participants. The same approach with fifty thousand participants would explain ten or fifteen percent of variance, not forty. There is a smooth curve relating GWAS sample size to PRS performance, and for most traits we are still on the steep part of that curve. As biobanks grow, PRS for everything will improve.

Third, **architecture matters**. Height is the most additive complex trait in human biology — the small-effect common variants really do just add up linearly, with minimal epistasis or dominance complications. Other traits have more complex genetic architectures and are harder to PRS even with equivalent sample sizes.

\[Pause.\]

The height PRS is also the canonical example because it lets you _see_ the polygenic logic working. If you sort a population by their PRS, and you look at the average height in each decile, you see a clean monotonic increase from the bottom decile to the top. People in the top decile of height PRS are, on average, about ten centimeters taller than people in the bottom decile — four inches in old money. That is a substantial difference. And it is not driven by any single variant; no individual SNP moves height by more than a few millimeters. The ten-centimeter spread between the bottom and top deciles emerges from the cumulative dose of thousands of feathers, each individually trivial.

For most clinical disease PRS, the picture is less dramatic but the principle is the same. Sort by PRS, look at disease rates by decile, and the top decile is enriched relative to the bottom. That enrichment is the actionable signal.

Height is the case where everything works. Sample size is huge. Phenotype is precise. Architecture is clean. PRS performance is impressive. Most other traits will never reach height-level PRS performance, because most other traits do not have all three of those factors going for them. But height is the proof of concept. It shows you what a PRS can do when the conditions are right.

---

## SEGMENT 14 — Clinical applications: breast cancer, CAD, schizophrenia

\[Pause.\]

So height is the academic-success story. The clinical question is harder: where can PRS actually be useful for medicine?

A few applications where PRS is starting to enter clinical thinking.

**Breast cancer.** The BCAC, the Breast Cancer Association Consortium, has been running large GWAS meta-analyses for years. The most recent PRS for breast cancer, built on about three hundred SNPs, captures about ten percent of breast-cancer variance in European-ancestry women. Combined with traditional risk factors — family history, reproductive history, mammographic density — the PRS adds meaningful predictive information. Women in the top percentile of breast-cancer PRS have a lifetime risk of breast cancer of around thirty to forty percent, compared to a population average of twelve percent. That is in the range of carrying a BRCA1 or BRCA2 mutation, except that BRCA mutations are rare — about one in four hundred women — while top-percentile polygenic risk affects, by definition, one in a hundred. Polygenic breast-cancer risk is roughly four times more prevalent than monogenic risk, and several groups are now studying whether risk-stratified mammography screening — starting screening earlier, or doing it more frequently, in women with high polygenic risk — improves outcomes.

\[Pause.\]

**Coronary artery disease.** This is probably the most clinically advanced PRS application. CAD PRS, built on thousands of SNPs from GWAS meta-analyses with hundreds of thousands of cases, can identify individuals at three to four times average lifetime risk of coronary disease. Several trials have shown that integrating PRS into traditional cardiovascular risk calculators — like the pooled cohort equations used in clinical practice — improves risk stratification, especially for younger adults whose traditional risk factors have not yet developed. The clinical question is whether risk-stratified statin therapy or other interventions — should high-PRS individuals start statins earlier, even with normal cholesterol? — improves outcomes. Pilot trials are ongoing.

**Schizophrenia.** The Psychiatric Genomics Consortium has driven schizophrenia GWAS for over a decade, now with around eighty thousand cases. The resulting PRS explains about ten percent of schizophrenia liability variance — meaningful, but not enough on its own for clinical use. The current research question is whether schizophrenia PRS can be useful in **at-risk** populations — say, adolescents with prodromal symptoms — to refine the prediction of which ones will progress to full-blown disease. Combined with other biomarkers, it may add value, but standalone schizophrenia PRS is not a clinical tool yet.

\[Pause.\]

Other PRS in active development. **Type-two diabetes** PRS, with samples in the millions, captures around ten to fifteen percent of liability variance and is being explored for risk stratification in pre-diabetic individuals. **Atrial fibrillation**, **alzheimer's disease**, **inflammatory bowel disease**, **prostate cancer**, **glaucoma**, **age-related macular degeneration** — all have PRS published, with varying clinical utility.

The clinical question that hangs over all of this is: **does PRS-guided action actually improve outcomes?** It is one thing to identify high-risk individuals. It is another to do something about it that they would not have benefited from anyway. The randomized trials are still in progress, and they are slow because cardiovascular events take years to accumulate. By 2030 or so we should have a clearer picture of which PRS-guided interventions actually change endpoints.

\[Pause.\]

A few institutions have started returning PRS to patients in research settings. The Mass General Brigham health system in Boston has been running a program where patients get a personalized cardiovascular PRS, integrated into their clinical chart. The UK's Our Future Health study, recruiting five million Britons, is planning to return polygenic risk information to participants. These are early experiments, and the clinical workflow questions — who counsels the patient, what is on the report, how do you re-derive the score as new GWAS come out — are being worked through in real time.

PRS in clinical medicine is, as of 2026, in the early-clinical-utility phase. Validated for some applications, exploratory for others, not yet routinely deployed but moving in that direction.

---

## SEGMENT 15 — MyPRS and 23andMe: direct-to-consumer polygenic risk

\[Pause.\]

Meanwhile, parallel to the slow march of clinical PRS, there is a direct-to-consumer industry that has been giving people polygenic risk numbers for years.

**23andMe**, founded in 2006, is the largest direct-to-consumer genetic testing company. For about a hundred dollars you mail in a saliva sample, they genotype you on a SNP chip, and they return a report. The report includes ancestry estimates, traits — earwax type, cilantro preference — and, for paying customers, **health predispositions** that include several PRS-derived risk estimates. By 2024, 23andMe's product included PRS reports for type-two diabetes, hypertension, atrial fibrillation, and several other conditions.

\[Pause.\]

The 23andMe PRS reports are not full clinical-grade scores. They are typically built on a smaller subset of SNPs, with simpler methods, and the reports come with significant caveats about predictive accuracy. The communication challenge — how do you tell a customer their type-two diabetes PRS is in the seventy-fifth percentile, and what should they do about it? — is real. Critics have argued that direct-to-consumer PRS may give people misleading confidence about their risk in either direction. A low PRS does not mean you cannot get the disease; environmental factors still dominate for many traits. A high PRS does not mean you will get the disease; you might be at fifteen percent lifetime risk instead of ten, which is not nothing but is not destiny.

Several other companies have entered the space. **MyHeritage**, **AncestryDNA**, **Nebula Genomics**, and various clinical labs offer their own PRS reports. Some clinical genetic-testing labs — **Color Health**, **Invitae** — now offer PRS as add-ons to their cancer or cardiovascular panels.

\[Pause.\]

Direct-to-consumer PRS has a complicated relationship to clinical PRS. On one hand, it has normalized the idea that people can know their polygenic risk and act on it. On the other hand, the quality control, ancestry calibration, and clinical follow-up are inconsistent, and the regulatory framework is unsettled. The FDA, as of 2026, has cleared a handful of specific PRS products for marketing in the United States — most notably 23andMe's authorization to report on certain risk variants — but the broader question of how to regulate "health predisposition" reports based on polygenic scores is still being worked out.

The interesting fact is that as of 2026, far more people have received a PRS via direct-to-consumer testing than via a clinical encounter. Tens of millions of people, in aggregate, have seen a polygenic risk number for some trait. Whether they understood it, whether they acted on it, whether the action improved their health — those are open empirical questions that the field will be answering for years.

---

## SEGMENT 16 — The equity problem: PRS performs 3x worse in African ancestry

\[Pause.\]

I want to spend a whole segment on this, because it is the field's open wound, and you cannot understand the modern state of GWAS and PRS without confronting it.

Here is the fact. The vast majority of GWAS done to date have used samples of European ancestry. By some estimates, as of 2024, about seventy-eight percent of GWAS participants were of European ancestry, despite Europeans being only about sixteen percent of the world's population. Most of the remainder were East Asian — driven by BioBank Japan and Chinese cohorts. African ancestry, despite Africa being the population from which all modern humans descended and harboring the most genetic diversity, made up only a few percent of GWAS participants.

The consequence is that PRS — which is constructed from those GWAS results — works dramatically better in the populations on which the GWAS was done.

The numbers, repeatedly demonstrated across traits and studies, are something like this. A PRS built from European-ancestry GWAS performs at, say, R-squared of zero-point-four in Europeans. Apply the same PRS to East Asians and the R-squared drops to about zero-point-three. Apply it to South Asians, about zero-point-twenty-five. Apply it to African Americans or to continental African populations, and the R-squared drops to about zero-point-one or zero-point-fifteen. The PRS works roughly three times worse in African-ancestry individuals than in the European individuals it was trained on.

\[Pause.\]

Why is this? Several reasons that compound.

**Reason one: causal variant frequencies differ.** A variant that is common in Europeans may be rare or absent in Africans, and vice versa. If the causal variant for a trait is common in one population and rare in another, the PRS will pick up its signal in one but miss it in the other.

**Reason two: LD structure differs.** African populations have shorter LD blocks. So a tag SNP that successfully captures the causal variant in Europeans — because they are in tight LD — may not capture the same causal variant in Africans, where the LD has been broken by additional generations of recombination. The tag fails. The signal is lost.

**Reason three: effect sizes can genuinely differ.** Gene-environment interactions, ancestry-specific modifiers, and population-specific epistasis can all make the same variant behave differently in different populations. This is a smaller contributor than the first two, but it is real.

**Reason four: imputation panels are European-biased.** The reference panels used to impute SNP-chip data to whole-genome resolution have been historically dominated by European samples. Imputation accuracy in African samples is lower because the reference haplotypes do not match as well, and that means the GWAS signals you can extract from imputed data are weaker.

\[Pause.\]

Here is the analogy. **The equity problem is the field's open wound.** You spent twenty years calibrating an instrument on one population. When you try to use it on another population, it does not work as well. The instrument is not broken — it just was not designed for that population. The fix is to recalibrate, but recalibration requires collecting GWAS data in the underrepresented populations, which requires biobanks, which requires funding, which requires political will.

There are several efforts underway to fix this.

**Multi-ancestry GWAS meta-analyses** combine data across populations, with sample weights that better capture trans-ancestry signals. Recent papers from the Pan-UK Biobank effort, the Million Veteran Program, and BioBank Japan have all done multi-ancestry analyses for multiple traits.

**African-specific biobanks** — the H3Africa initiative, the African Genome Variation Project, and All of Us in the U.S. with its deliberate diversity recruitment — are slowly building the reference datasets needed for African-ancestry PRS.

**Trans-ancestry PRS methods** — algorithms designed to combine information across populations, weighting variants by which population's GWAS shows the strongest signal — have started to close the performance gap, though not to eliminate it.

\[Pause.\]

The equity problem is not just a technical issue. It is an ethical one. If PRS becomes a standard clinical tool, and PRS works much worse in Black patients than white patients, then deploying PRS in healthcare introduces a new kind of health disparity — one where genomic medicine works better for some patients than others, depending on ancestry. The field is acutely aware of this and is trying hard to fix it, but the fix is slow because the underlying data has to be generated, and generating biobank-scale data takes years.

In the meantime, the recommendation that has emerged is: do not deploy PRS clinically without ancestry-matched calibration. If your PRS was trained on Europeans, only use it on Europeans, and either build a separate score for other ancestries or do not offer the test. This is the responsible position, and it is slowly becoming standard practice in the better clinical PRS implementations.

The equity problem is the most important social-policy question in human genetics today. Watch the literature on this. The field is rapidly evolving.

---

## SEGMENT 17 — Mendelian randomization: genetic instruments for causality

\[Pause.\]

I want to take a short detour into one of the most powerful and elegant applications of GWAS results — a method called **Mendelian randomization**, MR.

Here is the problem MR solves. Suppose you observe, in an epidemiological study, that people who drink coffee have a lower rate of Parkinson's disease. Is coffee protective? Or is there a confounder — maybe people who can drink coffee without getting sick from it have something else going on, some metabolic profile, that is the real protection? Observational epidemiology is full of correlations like this, and disentangling cause from confounding is hard. The gold standard is a randomized controlled trial, but you cannot randomize people to thirty years of coffee consumption.

Mendelian randomization is a workaround. **Your genotype is randomized at conception.** When your parents made you, the variants you inherited at each locus were essentially a random draw from the parental alleles. So if a SNP affects how much coffee you drink — and several SNPs in caffeine metabolism do — then your genotype at that SNP is a randomized predictor of your coffee consumption, uncorrelated with anything else about you. If that SNP is also associated with Parkinson's risk, it must be because coffee, mediated by the SNP, affects Parkinson's. Confounding is broken by the random assignment of alleles.

\[Pause.\]

The formal logic. A valid genetic instrument for an exposure must satisfy three assumptions. **One: relevance.** The SNP must actually affect the exposure. **Two: exchangeability.** The SNP must be independent of confounders. **Three: exclusion restriction.** The SNP must affect the outcome only through the exposure, not through any other pathway. If those three assumptions hold, you can estimate the causal effect of exposure on outcome by dividing the SNP-outcome association by the SNP-exposure association — Wald's ratio.

In practice, MR is done with many SNPs at once, using methods like inverse-variance weighting, MR-Egger, and weighted median estimators, which are robust to various violations of the assumptions. The field of MR has grown explosively over the last decade, because GWAS has provided thousands of SNPs to use as instruments for thousands of exposures.

\[Pause.\]

Here is the analogy. **Mendelian randomization is the genetic instrument trick.** Your genotype is the randomization. It happened at conception, decades before any of your behaviors, exposures, or diseases developed. So if a SNP affects exposure X and exposure X causes disease Y, the SNP should correlate with Y. Conversely, if a SNP that affects X does not correlate with Y, then X probably does not cause Y — only confounders did. You have, effectively, run a randomized trial where the randomization happened at meiosis.

What has MR taught us? A few highlights.

It taught us that LDL cholesterol is causally related to coronary disease — confirmed by hundreds of variants, every one of which gives the same answer. That made the case for statin development as airtight as it gets.

It taught us, conversely, that HDL cholesterol is _not_ causally protective against coronary disease, despite decades of observational studies suggesting it was. The CETP variants that raise HDL do not lower CAD risk in the way the observational data predicted. This led to the collapse of several major HDL-raising drug programs, which were always going to fail because they were targeting a non-causal correlation.

It taught us that body mass index is causally related to many diseases — diabetes, hypertension, several cancers — and that the effects are larger than observational studies suggested, because measurement error in BMI biases observational estimates downward.

It taught us that vitamin D, despite enormous observational literatures linking it to everything from cancer to mortality, has minimal causal effects on most outcomes. Vitamin D supplements, by and large, do not do what observational studies suggested.

\[Pause.\]

MR is one of the most useful indirect applications of GWAS data. It uses the GWAS results not to make a clinical prediction, but to do epidemiological inference. It has been called "nature's randomized trial," and it has reshaped how we think about which exposures are worth intervening on. A lot of public-health priorities have shifted on the basis of MR results.

---

## SEGMENT 18 — Functional follow-up: fine-mapping, eQTLs, target validation

\[Pause.\]

We have spent most of this lecture talking about how to find GWAS hits. Let us close by talking about what to do with them once you have them, because the GWAS hit is, in a sense, just the beginning of the biology.

The standard workflow after a GWAS hit, as practiced in 2026, looks like this.

**Step one: fine-mapping.** You have a GWAS hit at some locus. The lead SNP is the most strongly associated one, but as we discussed in Segment 7, the actual causal variant could be any SNP in the LD block. Fine-mapping is the statistical and experimental work to narrow down the causal variant. Statistically, it uses Bayesian methods that incorporate LD information, functional annotations — is the SNP in a regulatory region? a coding region? — and trans-ancestry data, where the same locus has been studied in populations with different LD structures, to identify the variant most likely to be causal. The output is a credible set — a small group of SNPs, often less than ten, that together have most of the posterior probability of being the cause.

**Step two: functional annotation.** Once you have a credible set, you ask: what does this variant do? Is it in a protein-coding gene? If so, does it change the amino acid sequence? Most GWAS hits are not in coding regions — about ninety percent of GWAS hits are in non-coding DNA, presumably affecting gene regulation rather than protein structure. So you map the variant to regulatory elements — promoters, enhancers, insulators — using ENCODE, Roadmap Epigenomics, and similar functional-genomics datasets.

\[Pause.\]

**Step three: eQTL mapping.** An expression quantitative trait locus, eQTL, is a genetic variant that affects the expression level of a nearby gene. GTEx — the Genotype-Tissue Expression project — has measured gene expression in dozens of human tissues from many individuals, and identified millions of eQTLs. If your GWAS hit colocalizes with an eQTL — meaning the same variant that is associated with disease is also associated with expression of a specific gene in a specific tissue — that gene becomes your prime suspect for the causal gene at the locus. eQTL colocalization has become the standard method for linking GWAS hits to genes.

**Step four: experimental validation.** Once you have a candidate gene, you go to the bench. Knock the gene out in cell culture or model organisms, see if the phenotype changes. Use CRISPR base editing or prime editing to introduce the specific variant into a cell line, then measure functional effects. Generate iPS cells from carriers and non-carriers, differentiate them into the relevant cell type, profile them. This is the slow, expensive, definitive part of the workflow, and it can take years for a single locus.

**Step five: target validation for drug development.** If the gene appears to be a valid causal contributor, and if the direction of effect is interpretable — say, loss of function of the gene reduces disease risk, which means the gene's product is a potential drug target — then pharmacology kicks in. Find a small molecule or biologic that mimics the protective effect, develop it through preclinical and clinical stages, and you have a drug whose hypothesis is rooted in human genetic causality. The empirical observation, now reasonably well-established, is that drugs with human-genetic support — drugs that target proteins where the gene has GWAS or rare-variant evidence — have about twice the success rate in clinical trials as drugs without such support. Genetic evidence improves drug development odds. This is the most concrete commercial argument for biobank-scale GWAS, and it is driving major pharmaceutical investment.

\[Pause.\]

Examples of this workflow paying off.

**PCSK9 inhibitors** — the LDL-lowering drugs evolocumab and alirocumab — were developed because of human genetic evidence. PCSK9 loss-of-function variants were found in studies of African-American families with very low LDL and apparent protection against heart disease. The gene was validated, the protein was drugged, the drugs work, they are now standard for high-risk cardiovascular patients.

**SGLT2 inhibitors** for type-two diabetes have genetic backing through SLC5A2 variants.

**Inclisiran**, a small interfering RNA against PCSK9, is another genetics-driven drug.

The pattern is now familiar. GWAS finds a locus. Fine-mapping finds the causal variant. eQTL or coding analysis finds the gene. Experimental work validates the mechanism. Drug development follows. Time from GWAS hit to approved drug is typically a decade or more, but the path is established and the early returns are encouraging.

GWAS, in this light, is not just a method for finding statistically interesting SNPs. It is the first step of a long pipeline that ends in molecular medicine. The hits are entry points. The biology is what comes next.

\[Pause.\]

Before we close, let me sketch the frontier — where the field is going from here, because the pace is rapid and several of the developments I am about to describe will probably be standard practice within a few years.

**Multi-ancestry meta-analyses** are becoming the default. New GWAS publications increasingly include cohorts from multiple ancestry groups and report ancestry-specific and trans-ancestry results. The methods for doing this — combining effect estimates while respecting between-population differences in LD and allele frequencies — have matured. Pan-UK Biobank, the Million Veteran Program, and consortia like COVID-19 Host Genetics Initiative have shown that multi-ancestry GWAS detect more loci than European-only meta-analyses and produce PRS that transfer better across populations.

**Deep-learning PRS.** Standard PRS is a linear sum. The natural question is whether nonlinear models — neural networks operating on genotype data — can capture interactions, dominance, and structural patterns that linear PRS misses. Early results, from groups including DeepMind, Calico, and various academic labs, suggest that for some traits deep-learning approaches offer modest improvements, but the gains so far are smaller than improvements from adding more samples to a standard linear PRS. Whether deep learning will eventually transform PRS — the way it transformed protein structure prediction — is an open question.

**Integrated multi-omics risk scores.** PRS uses only DNA. The next generation of risk prediction combines PRS with proteomics, metabolomics, transcriptomics, and clinical biomarkers, into integrated scores that aggregate across data modalities. UK Biobank's release of plasma proteomics data on fifty thousand participants — Olink panels measuring three thousand proteins each — has opened the door to combining protein levels with PRS for substantially improved risk prediction in cardiovascular disease, dementia, and several cancers.

**The population-screening question.** As PRS performance improves, and as costs fall to the point where genotyping is a few dollars per person, the question becomes: should everyone be screened? Should a national health service, like the NHS, genotype every newborn at birth and integrate PRS into lifelong preventive care? The arguments for are about prevention — identify high-risk individuals early, target screening and lifestyle interventions, save lives. The arguments against are about clinical utility, consent, equity, and the danger of communicating probabilistic risk information to people who may not act on it productively or who may suffer psychological harms. The UK, Australia, and several other countries are running pilots. The first generation of population-screening PRS deployments is happening now, and the outcomes from those pilots will shape policy for the next decade.

\[Pause.\]

So that is where GWAS and PRS stand in 2026. A statistical design born in 2005, scaled by biobanks in the 2010s, deployed clinically in the 2020s, and now grappling with questions of equity, deep-learning augmentation, multi-omics integration, and population-level screening. The story is unfinished. Most of the interesting parts are still being written. Twenty years ago there were zero GWAS hits. Today there are two hundred and fifty thousand. Twenty years from now, where will we be?

We do not know. But the framework you have learned today — the case-control scan, the Manhattan plot, the LD-block interpretation, the polygenic feather-summing, the equity worry, the functional follow-up pipeline — will be how you read the literature from here forward. Hold onto it.

---

## APPENDIX — Reference, jargon, and pointers for further reading

\[Pause.\]

Okay. Coffee break is over and class is technically done, but if you are sticking around, this last section is an appendix — the kind of compact reference card I wish I had been handed in graduate school. We will run through key numbers and the canonical jargon, with a few pointers for where to go next.

**Numbers worth memorizing.**

- Genome-wide significance threshold: 5 × 10⁻⁸. This is the negative-log-ten value 7.3 on a Manhattan plot's y-axis.
- Number of common SNPs in human genome: about 10 million (MAF > 1%).
- Number of effectively independent common-variant tests: about 1 million.
- Number of SNPs on a typical Illumina or Affymetrix array: 500,000 to 2 million.
- Number of imputed SNPs per individual after using 1000 Genomes or TOPMed reference panels: 10 million to 50 million.
- Number of cataloged GWAS associations in 2026: over 250,000.
- Typical odds ratio for a GWAS hit: 1.05 to 1.30.
- Typical effect size for a height SNP: 1 to 2 millimeters per allele.
- Heritability of height: ~80%; explained by current PRS: ~40%.
- PRS performance loss in African ancestry relative to European: ~3x.
- UK Biobank participants: 500,000.
- All of Us target: 1,000,000.
- Cost of genotyping one person on a chip: $30 to $100.
- Cost of whole-genome sequencing in 2026: ~$200.

\[Pause.\]

**Key jargon, in roughly the order it appears in the literature.**

- **SNP** — single nucleotide polymorphism, a single-letter genetic variant.
- **MAF** — minor allele frequency, frequency of the rarer of two alleles in the population.
- **GWAS** — genome-wide association study.
- **HapMap** — the 2002–2009 catalog of common variation in reference populations.
- **1000 Genomes** — the 2008–2015 sequencing project that produced a more complete catalog.
- **Imputation** — statistical inference of un-genotyped variants from genotyped ones using a reference panel.
- **LD** — linkage disequilibrium, the non-random co-occurrence of nearby alleles.
- **Tag SNP** — a genotyped SNP chosen to capture variation at correlated nearby SNPs.
- **Causal variant** — the actual variant that biologically influences the trait (typically unknown after a GWAS).
- **Fine-mapping** — the process of identifying which variant in an LD block is causal.
- **eQTL** — expression quantitative trait locus, a variant affecting gene expression.
- **Colocalization** — the inference that the same variant drives both a GWAS signal and an eQTL.
- **Manhattan plot** — chromosomes on x-axis, negative log ten p on y-axis.
- **QQ plot** — quantile-quantile plot comparing observed vs expected p-value distributions.
- **PCA / principal components** — used to correct for population structure in GWAS regression.
- **Polygenic risk score (PRS)** — weighted sum of risk alleles across many GWAS-identified SNPs.
- **Polygenic score (PGS)** — synonymous with PRS; sometimes preferred for non-disease traits.
- **Heritability (h²)** — proportion of phenotypic variance attributable to genetic variance.
- **SNP-heritability** — heritability captured by common SNPs (often estimated by GCTA / LDSC).
- **Missing heritability** — the gap between twin-based heritability and SNP-explained variance.
- **Mendelian randomization (MR)** — using genetic variants as instruments for causal inference.
- **Burden test** — gene-level test aggregating rare variants for association.
- **SKAT** — sequence kernel association test, another gene-level rare-variant method.
- **Bonferroni correction** — multiple-testing correction by dividing α by number of tests.
- **Power** — probability of detecting a true effect at a given sample size and effect size.
- **GWAS Catalog** — the NHGRI-EBI database of published associations.
- **UK Biobank** — 500,000-person British cohort with genotype, phenotype, and EHR linkage.
- **All of Us** — million-person U.S. NIH program with diversity emphasis.

\[Pause.\]

**Recommended further reading, organized by depth.**

For a one-paper-each overview of GWAS and PRS, read:
- Klein et al. 2005 — the first AMD GWAS — the origin moment.
- The Wellcome Trust Case Control Consortium 2007 paper — the seven-disease GWAS that put the design on the map.
- Visscher et al. 2017, "10 years of GWAS discovery: biology, function, and translation," _AJHG_ — the canonical decadal review.
- Khera et al. 2018, "Genome-wide polygenic scores for five common diseases identify individuals with risk equivalent to monogenic mutations," _Nature Genetics_ — the paper that established polygenic-equivalent-to-monogenic risk.
- Martin et al. 2019, "Clinical use of current polygenic risk scores may exacerbate health disparities," _Nature Genetics_ — the equity paper.
- Davey Smith and Hemani 2014, "Mendelian randomization: genetic anchors for causal inference in epidemiological studies," _Human Molecular Genetics_ — the MR primer.

For textbook coverage:
- Bush and Moore's "Genome-Wide Association Studies" chapter in any human-genetics textbook.
- The relevant chapters in _Speed's Statistical Methods in Human Genetics_ for the math.

For software:
- PLINK (the dominant GWAS analysis package, originated by Shaun Purcell).
- BOLT-LMM and REGENIE for large-cohort linear mixed model GWAS.
- LDpred-2 and PRS-CS for modern PRS construction.
- TwoSampleMR for Mendelian randomization in R.

For data:
- The NHGRI-EBI GWAS Catalog at ebi.ac.uk/gwas.
- The PGS Catalog at pgscatalog.org for published polygenic scores.
- UK Biobank Research Analysis Platform for access to UKB data.
- gnomAD for population allele frequencies and constraint metrics.
- GTEx for tissue-specific eQTL data.

\[Pause.\]

**Common misconceptions to avoid.**

One. GWAS hits are not causal variants. They are tags in LD with causal variants. Fine-mapping needed.

Two. A high PRS does not mean you will get the disease. It means your risk is shifted relative to average. Environment, behavior, and chance still dominate for most outcomes.

Three. PRS and ancestry. A PRS calibrated on Europeans is not a valid clinical tool in non-Europeans without recalibration. Do not deploy across ancestries without validation.

Four. Heritability is not destiny. A trait being eighty percent heritable does not mean genetics determines eighty percent of an individual's value; it means that across the population, eighty percent of the variance is genetic. The interpretation is statistical, not individual.

Five. Missing heritability is largely solved. The gap is mostly small-effect common variants plus some rare-variant contribution plus probable overestimation of twin-based heritability. It is not a fundamental crisis of method.

Six. GWAS does not "explain" a gene; it implicates a locus. The biology comes from follow-up, not from the GWAS hit alone.

\[Pause.\]

One last analogy to close on, because it ties the whole lecture together. **A GWAS is a fishing trip. A PRS is the catch you bring home, weighed and sorted and summed. The Manhattan plot is your fishing log — the towers are where the big fish were. The equity problem is that you have been fishing in one part of the sea for twenty years, and the catch from other parts is going to be different — the fish are different, the LD nets do not work the same way, and recalibration is required. The frontier is multi-ancestry boats, deep-learning sonar, and the question of whether to fish in every river in the country and give everyone their catch on a clinical report by 2035.**

That is the field. That is where you are walking into. Good luck. Class dismissed.

---
