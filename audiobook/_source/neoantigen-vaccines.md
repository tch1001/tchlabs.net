# Neoantigen Vaccines: Personalized Cancer Vaccines Built From Tumor Sequencing

**A 2-hour undergraduate immuno-oncology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, landing comfortably inside a two-hour slot. (Read faster, ~140 wpm, and you'll have generous room for questions.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The tumor's accidental signature

Alright, let's get started. Good morning, everyone. For the next two hours we're going to talk about one of the most ambitious ideas in modern medicine — an idea that, until about ten years ago, most serious immunologists would have called impractical, and that today is being tested in late-stage clinical trials with results that are genuinely starting to reshape how we think about treating cancer. We're going to talk about **neoantigen vaccines**. Patient-specific cancer vaccines, manufactured one batch per patient, designed from the DNA sequence of that patient's own tumor.

I want to begin not with a molecule, not with a trial, not even with a patient, but with one mental picture that I want you to carry through the whole lecture.

Picture a tumor. Any tumor. A melanoma on someone's back, a pancreatic cancer in the abdomen, a lung adenocarcinoma sitting in a bronchus. That tumor is, at the genetic level, a mess. It is a clone of cells that has acquired hundreds, sometimes thousands, sometimes tens of thousands of mutations as it grew. Most of those mutations are silent passengers — typos in DNA that don't change anything important. Some of them are the famous driver mutations we talked about in earlier lectures — the KRAS, the TP53, the BRAF — that are doing the actual work of making the cell cancerous. But a great many of them are something else: they are random mutations sitting in protein-coding genes, mutations that change the amino acid sequence of a protein, mutations that produce a protein the body has _literally never seen before_.

Those altered proteins, when they get chopped up inside the cell and displayed on the cell surface for immune inspection — those altered peptides are called **neoantigens**. New antigens. Sequences that exist nowhere in your normal tissue, sequences that don't appear in the embryo, that aren't on the surface of your liver or your skin or your gut, that your immune system has never been trained to tolerate. From the immune system's point of view, a neoantigen is the closest thing a cancer cell ever produces to a flashing red light. It is the tumor's accidental signature. A confession, written in protein, that this cell is not normal.

\[Pause.\]

Here is the entire premise of the field we are about to study. **If we can find those neoantigens — read the tumor's DNA, predict which mutations produce peptides that the patient's immune system can see, build a vaccine encoding those peptides, and inject the vaccine into the patient — then we can teach the patient's T cells to recognize and attack their own tumor.** A vaccine, not against a virus, not against a bacterium, but against a uniquely personal version of cancer that, by definition, only one person on Earth has.

That is the entire idea, in one sentence. Everything we're going to discuss for the next two hours is built on it.

\[Pause.\]

Now, the reason this is worth a lecture, and not a single slide, is that nothing about this premise is trivial. Every word in that sentence hides a problem.

"Find those neoantigens" hides the prediction problem — given the tumor's exome, given the patient's HLA type, can we computationally pick which mutated peptides will actually be presented to T cells? "Build a vaccine encoding those peptides" hides the manufacturing problem — every patient gets a different drug, made from scratch, in four to six weeks, to clinical-grade standards. "Inject the vaccine into the patient" hides the immunology problem — even if the vaccine works exactly as designed, the tumor microenvironment may be so suppressive that the new T cells can't actually function once they get there.

Each of those problems is real. Each of them has been worked on, hard, for the past decade. And in 2022 and 2023 the field finally produced the headline result it had been waiting for. A phase 2b trial called KEYNOTE-942, run by Moderna and Merck, gave high-risk resected melanoma patients an mRNA neoantigen vaccine called mRNA-4157 plus a checkpoint inhibitor, and compared them to patients who got the checkpoint inhibitor alone. The vaccine combination produced a 44% reduction in the risk of recurrence or death at three years. That number — 44% — is the proof of concept the field had been waiting for, and it's the reason this lecture exists, and the reason every major pharma is now building a personalized cancer vaccine program.

If you walk out of here in two hours and you can do three things — one, explain to a friend without jargon what a neoantigen is and why it makes a good vaccine target; two, walk through the workflow from tumor biopsy to manufactured vaccine and tell me what computational and experimental step happens at each stage; three, look at a press release about a "personalized cancer vaccine" and have an honest sense of what's promised, what's proven, and what's still uncertain — then we will have done our job. Everything else is detail hung onto that scaffold.

Let's build the scaffold.

---

## SEGMENT 2 — Why "neoantigen" — the magic of being seen for the first time

Let's spend a few minutes on the word **neoantigen** itself, because the entire field rests on understanding why these particular peptides are so attractive as targets, compared to all the other things on a cancer cell.

Your immune system, particularly your T cells, faces a fundamental problem from the moment you are born. The body is full of proteins. Trillions of them. Every one of those proteins is, in principle, something a T cell could be trained to recognize. But the body needs the T cells to attack invaders, not the body itself. So somehow, before T cells get out into the bloodstream and start patrolling, they have to be filtered. The T cells that, by random chance, would recognize and attack your own normal proteins — those T cells have to be removed.

This filtering happens in an organ called the thymus, sitting just behind your breastbone. It is a school for T cells, and the lesson it teaches is harsh. T cells are generated in vast numbers, each with a randomly assembled receptor capable of binding some peptide somewhere in the universe of possible peptides. The thymus then puts each young T cell through a kind of audition. The cells in the thymus display, on their surfaces, a sample of every protein your body makes — and they do this thanks to a remarkable gene called AIRE, which forces the thymic cells to express tissue-specific proteins from all over the body, even pancreatic enzymes and skin keratins and so on. Each young T cell wanders past these displays. If it binds too strongly to any self-peptide — any peptide derived from a normal body protein — it is killed on the spot.

That's called **central tolerance**, and it is the reason your T cells don't attack your liver, your brain, or your kidneys on any given Tuesday. The T cells that could have done so were murdered in the thymus before they ever got the chance.

\[Pause.\]

This is wonderful for autoimmunity. It is a disaster for cancer immunotherapy.

Because most of what's on a cancer cell — the surface markers, the metabolic enzymes, the structural proteins — is exactly the same as what's on the normal cell the cancer descended from. A breast cancer cell still expresses estrogen receptor, still has cytokeratins, still has all the breast-epithelial machinery. Any T cell that could have recognized those proteins was eliminated during your thymic education, twenty or fifty years ago. There simply isn't a T cell available, in your body, that strongly recognizes those self-proteins. Tolerance has been enforced.

This is why most attempts to make cancer vaccines, for most of the twentieth century, failed. People tried vaccinating patients against tumor-associated antigens — proteins that were overexpressed in tumors but also present, at lower levels, in normal tissue. MAGE-A3, NY-ESO-1, gp100, MART-1, all of these were targeted. And the vaccines worked, in the sense of generating immune responses. But the responses were weak, and the tumors mostly didn't shrink, and large randomized trials repeatedly failed to show survival benefit. The reason, in retrospect, is that the only T cells available to respond were the marginal ones — the ones with low-affinity receptors that had snuck through thymic selection. The high-affinity, lethal T cells had been deleted decades earlier.

Neoantigens change the equation completely. A neoantigen, by definition, does not exist in normal tissue. The mutated sequence appeared for the first time during the cell's transformation into cancer. It was never displayed in your thymus, because it never existed when your thymus was educating your T cells. The high-affinity T cells specific to that neoantigen were never deleted. They are still in your body, waiting, with their receptors fully functional, never told to stand down.

That is the entire reason neoantigens are special. They are the **untolerized** targets. They are the one class of proteins on a cancer cell that the immune system, in principle, can attack with its full machinery, exactly as if the tumor were a virus.

I want you to hold that distinction in your head. Tumor-associated antigens are partial-self; the high-affinity T cells against them are gone. Neoantigens are non-self; the high-affinity T cells against them are still there. That is why every serious cancer-vaccine program in 2025 is built around neoantigens and not around the older shared antigens. Tolerance is the wall, and neoantigens are the door through the wall.

\[Pause.\]

---

## SEGMENT 3 — HLA: the keyhole that decides what gets seen

So we've said T cells recognize peptides displayed on cell surfaces. We need to be more precise about how that display works, because it is going to absolutely dominate the rest of the lecture.

Every cell in your body — and I mean every nucleated cell — carries on its surface a set of molecules called **MHC**, which stands for major histocompatibility complex. In humans we usually call them **HLA**, human leukocyte antigen. Same molecules; the HLA name comes from how they were discovered, by mismatched blood-transfusion reactions, decades before anyone knew what they did. HLA molecules are the platforms on which peptides are displayed for T-cell inspection. They are, essentially, the windows through which the immune system looks inside your cells.

There are two flavors of these windows, and you need to know both.

**HLA class I** is present on almost every nucleated cell in your body. Its job is to display peptides that came from inside the cell — peptides from your own proteins, normally, but in a virally infected cell, peptides from the virus, and in a cancer cell, peptides from any mutated proteins the cell happens to be making. HLA class I peptides are short, usually 8 to 11 amino acids long. The cell chops up its own proteins inside a structure called the proteasome, ferries the resulting peptides into a compartment called the endoplasmic reticulum, loads the ones that fit into HLA class I molecules, and sends the loaded complex to the cell surface. There it is held up for inspection by **CD8 T cells**, which are the killer T cells. If a CD8 T cell recognizes the peptide as foreign or aberrant, it kills the cell on the spot.

**HLA class II** is more restricted. It's present mainly on professional immune cells — dendritic cells, macrophages, B cells — that exist specifically to sample the extracellular world. Class II displays peptides that came from outside the cell, ingested by phagocytosis, chopped up in a different compartment, and loaded onto class II. These peptides are longer, usually 15 to 25 amino acids, because the class II groove is open at both ends and can accommodate sloppier cleavage. Class II is inspected by **CD4 T cells**, the helper T cells, whose job is not to kill but to coordinate — to license dendritic cells, to help B cells make antibodies, and crucially, to provide the second signal that fully activates CD8 killers.

For cancer vaccines we care about both. Class I, because that's what's on the tumor cell, and that's what the killer T cells will ultimately see when they go to attack. Class II, because that's what the helper T cells see, and the help they provide is essential for generating a sustained killer response in the first place. A good neoantigen vaccine, in practice, wants to encode neoantigens that get presented on both classes — to recruit both arms.

\[Pause.\]

Now here is the fact about HLA that makes this whole field hard, and also fascinating, and also expensive.

**HLA molecules are the most polymorphic genes in the human genome.** There are thousands of different HLA-A alleles in the human population. Thousands more HLA-B. Thousands of HLA-C. Different DRB1s, DQB1s, DPB1s, and so on. Each person inherits two of each — one from mom, one from dad — and the combination of alleles you carry is, with very high probability, unique. The two HLA alleles you have are different in shape from the two alleles your roommate has. And these shapes — these binding grooves — are the keyholes into which peptides have to fit before they get displayed.

Think of HLA molecules as keyholes. Each version of the HLA molecule has a slightly differently shaped keyhole. Only peptides whose physical shape fits a given keyhole can be loaded and displayed. Two patients with the exact same tumor — same mutations, same neoantigen sequences in their tumor cells — will display _different subsets_ of those neoantigens on their cell surfaces, because their HLA keyholes are different.

This is why a neoantigen vaccine has to be personalized in a way that, say, a flu vaccine doesn't. The flu vaccine encodes a viral protein that, once inside a person's cells, gets chopped into peptides; whatever subset of those peptides happens to fit that person's HLA keyholes gets displayed. That's fine for a virus, because a virus has a few large proteins and any one of dozens of peptides from each protein is likely to fit somebody's HLA. But for a tumor we usually only have a few really strong neoantigen candidates, and we have to specifically pick the ones that match the patient's keyholes. **The vaccine has to be custom-cut to fit the patient's HLA.**

This is going to motivate everything that follows. Step one of building a neoantigen vaccine is always **HLA typing the patient.** You sequence their HLA alleles, you find out which specific keyholes they carry, and then everything downstream is conditioned on that result.

\[Pause.\]

One more piece of context before we move on. Across the human population, HLA diversity isn't uniform. Some alleles are common — HLA-A*02:01 shows up in something like 40% of people of European ancestry, much less in some other ancestries. Other alleles are rare. This matters for two reasons. First, our prediction algorithms have historically been trained mostly on common European alleles, and they predict less well for HLA types more common in African, East Asian, or Indigenous ancestry populations. That is a real and active fairness problem in the field. Second, when people talk about "shared neoantigen" vaccines that we'll discuss later — vaccines targeting a single hotspot mutation across many patients — those vaccines are only useful in patients whose HLA can present the mutated peptide. So even shared-neoantigen approaches have to think about HLA, just in a different way.

Keyholes. Patient-specific keyholes. Hold that idea.

---

## SEGMENT 4 — The prediction problem

Alright, so the patient walks into the clinic with a tumor. We biopsy it, we sequence its DNA, we identify a few hundred or a few thousand somatic mutations — mutations that exist in the tumor but not in the patient's normal tissue. Each missense mutation, each frameshift, each fusion, _potentially_ produces a mutated peptide. The question is: which of those potential peptides will actually be displayed on the tumor's HLA and recognized by T cells?

This is **the prediction problem**, and it is, computationally, one of the more interesting problems in modern bioinformatics.

Let me lay out the steps. For each candidate mutation, you generate the mutated peptide sequence in silico — you take the mutated amino acid and the natural-flanking amino acids on either side, sliding a window across to generate all possible 8-mers, 9-mers, 10-mers, 11-mers that contain the mutation. For a single missense mutation that's a few dozen candidate peptides. Then you ask: which of these peptides, given the patient's specific HLA alleles, are likely to bind tightly enough to actually be loaded and displayed?

That binding question is what the prediction algorithms try to answer. They take in a peptide sequence and an HLA allele, and they output a predicted binding affinity, usually expressed as an IC50 in nanomolar units or as a percentile rank against random peptides. Strong binders — IC50 below about 50 nanomolar, or percentile rank below about 0.5% — are considered presentation candidates.

The most famous of these algorithms is **NetMHC** and its successors, especially NetMHCpan. NetMHC was developed in the Copenhagen group of Søren Brunak and Morten Nielsen starting in the early 2000s, and it has been the workhorse of the field for two decades. It's a neural-network model trained on experimental binding data — peptide-HLA pairs measured in the lab — and it learned to generalize from those measurements. NetMHCpan is the version that handles arbitrary HLA alleles, not just the few that had been deeply characterized experimentally.

The other major player is **MHCflurry**, developed in the lab of Jeff Hammerbacher and now maintained by a group at Mt. Sinai. MHCflurry 2.0, in particular, was trained on a combination of binding-affinity data and **immunopeptidomics** data — direct mass-spectrometry measurements of which peptides are actually found on HLA molecules pulled from real cells. The immunopeptidomics training data was a turning point, because it doesn't just measure whether a peptide _can_ bind in a binding assay; it measures whether the cell actually _did_ present it in vivo, after going through all the upstream processing.

There are others — MixMHCpred from the Lausanne group, MARIA, NetMHCstabpan that includes the stability of the binding, and a growing number of transformer-based models trained on ever-larger immunopeptidomics datasets. The field iterates fast. But conceptually, all of them are doing the same thing: take a peptide and an HLA allele, predict the probability of presentation.

\[Pause.\]

Now, here is where the field's central frustration lives, and I want to make sure you understand it before we go further.

**Binding prediction is not the same as immunogenicity.**

A peptide that's predicted to bind tightly to a patient's HLA, and that is in fact presented on the cell surface, may still fail to be recognized by any T cell in the patient's repertoire. Or the T cells that do recognize it may not get activated. Or they may get activated but fail to traffic to the tumor. Or they may get to the tumor but get exhausted before they can kill. The prediction step is the first hurdle, but it is just the first; immunogenicity — the actual emergence of a functional T-cell response in the patient — is a much harder problem to predict.

In the early days of the field, people would generate, say, 50 candidate neoantigens for a patient, vaccinate against them, and find that maybe 10 to 20 percent of them actually elicited measurable T-cell responses in the patient's blood. Some did, dramatically. Others, predicted to bind even more tightly, produced nothing. The reasons for this prediction-vs-immunogenicity gap are still being worked out — they involve TCR repertoire idiosyncrasies, antigen processing variability, levels of expression in the tumor, peptide stability, and a dozen other factors.

The current best practice, in trial design, is to encode many neoantigens per vaccine — typically 20 to 40 — under the assumption that even with imperfect prediction, some fraction will hit, and that's enough to generate a productive polyclonal response. We'll see this in the BioNTech and Moderna trial designs in a few segments. The strategy is essentially: predict generously, vaccinate broadly, hope that some of the encoded peptides will turn out to be the real-deal immunogenic ones, and let the patient's own T-cell repertoire sort the wheat from the chaff.

So when you hear someone say "neoantigen prediction has gotten really good," what they mean is: binding prediction has gotten really good. NetMHCpan and MHCflurry, on the well-characterized common HLA alleles, can predict binding with positive predictive values north of 50%. What they cannot yet predict, reliably, is which of those binders will actually produce a T-cell response in this particular patient. That second prediction problem — the immunogenicity prediction problem — is one of the major open scientific frontiers in the field, and a great deal of money and computational effort is being poured into it right now.

\[Pause.\]

---

## SEGMENT 5 — The workflow: biopsy to vaccine in four to six weeks

Let me now walk you through the full workflow, end to end, of how a neoantigen vaccine actually gets made for an individual patient. This is going to feel like a logistics segment, and it is, but I want you to internalize how many moving parts there are, because the logistics turn out to be one of the field's central challenges.

Step one. **Biopsy.** The patient has a tumor — let's say a melanoma — and a surgeon takes a piece of it. The piece needs to be big enough to extract usable DNA and RNA, ideally both. Often the tumor is being surgically resected anyway for clinical reasons, so a portion of the surgical specimen gets routed to the vaccine workflow.

Step two. **Whole-exome sequencing of the tumor and a matched normal sample.** Whole-exome sequencing covers every protein-coding region of the genome — roughly 1 to 2 percent of the total — at high depth. You sequence both the tumor and a matched normal sample, usually blood-derived, because you need the normal sample as a comparator. The mutations you care about are the **somatic** mutations — the ones present in the tumor but not in the patient's germline. To find them, you align both samples to the reference genome and call variants that appear only in the tumor.

Step three. **RNA sequencing of the tumor.** Just because a mutation exists in tumor DNA doesn't mean the mutant protein is actually being made. The gene might be silenced. So you do RNA-seq on the tumor and check that each candidate mutation is in a gene that's actually expressed at meaningful levels. Filtering for expression is a critical step that removes a lot of false-positive neoantigen predictions.

Step four. **HLA typing.** You determine the patient's specific HLA alleles, usually by sequencing the HLA locus or by inferring them from the exome data using tools like Optitype or HLA-HD. You need this for the next step.

Step five. **Neoantigen prediction.** Now you bring the previous steps together. For each somatic mutation in an expressed gene, generate the candidate mutant peptides; run them through NetMHCpan or MHCflurry conditioned on the patient's HLA alleles; rank them by predicted binding affinity. Apply additional filters — clonality, allele frequency in the tumor, agretopicity (how different the mutant peptide is from the wild-type, since strongly self-similar peptides may be tolerized), and so on. The output is a ranked list of, typically, a few hundred candidate neoantigens, of which the top 20 to 40 are selected to actually go into the vaccine.

Step six. **Vaccine design and manufacturing.** This is where the platform technology comes in. The selected neoantigens have to be turned into something injectable. There are several ways to do this — long synthetic peptides mixed with adjuvant, mRNA encoding a string of concatenated neoantigens, DNA plasmids, dendritic cell preparations loaded with the peptides, viral vectors carrying neoantigen-encoding genes. Different programs have picked different platforms. We'll discuss the two big ones, the original peptide approach used by Wu and Ott and the mRNA approach used by BioNTech and Moderna, in the next two segments.

Step seven. **Quality control and release.** Each batch has to meet GMP — good manufacturing practice — standards for sterility, potency, identity, purity. For an mRNA vaccine that means in vitro testing of mRNA integrity, lipid nanoparticle characterization, endotoxin testing, and so on. For a peptide vaccine that means HPLC of each peptide, identity by mass spec, sterility testing of the final mixture.

Step eight. **Shipping and administration.** The vaccine is shipped frozen to the patient's clinic and administered — usually intramuscularly or subcutaneously — typically in a series of priming doses followed by boosters over several months.

**Total turnaround time, from biopsy to first dose: typically four to six weeks.** Some trials have pushed faster. Some have run longer. But four to six is the operating window the field has settled into.

Now, think about what this means logistically. Every patient generates a unique sequencing dataset, a unique computational pipeline output, a unique manufacturing batch, a unique vial of drug. There is no inventory. There is no off-the-shelf. The drug for patient 47 cannot be given to patient 48 under any circumstances; it would be molecularly meaningless. Every step, from the wet lab to the GMP suite to the cold chain to the clinic, has to be designed around the assumption of N=1 manufacturing.

This is something pharmaceutical companies are genuinely not used to. The entire economic logic of pharma is built around making one drug, validating it, scaling it up, and selling identical molecules to millions of patients. Personalized neoantigen vaccines invert that logic. Each patient gets a different molecule. The scale-up isn't about making more of one drug; it's about making _many_ different drugs faster. It's a manufacturing paradigm that's closer to bespoke tailoring than to mass production. We'll come back to the economic implications of this in segment 13.

\[Pause.\]

---

## SEGMENT 6 — Catherine Wu, Patrick Ott, and the IVAC trial

Now let's turn to the actual people who proved this could be done in patients. The story of the first successful neoantigen vaccine trials is essentially the story of two labs in 2017 — one in Boston, one in Mainz, Germany — both of whom published in the same issue of _Nature_ in July of that year, both with promising results in melanoma. We'll do the Boston story in this segment and the German story in the next.

The Boston story is the story of Catherine Wu and Patrick Ott at the Dana-Farber Cancer Institute. Wu is a hematologist-oncologist by training; she'd been working on cancer immunology and on the genetics of chronic lymphocytic leukemia for years. In the early 2010s, as exome sequencing of tumors was becoming routine, she became obsessed with the idea that the mutations being catalogued could be turned into vaccine targets. The argument was simple. We've got the technology to sequence the tumor. We've got prediction algorithms. We've got peptide synthesis. We've got adjuvants. Put them together and you can make a vaccine.

It took Wu and her collaborators — Ott was a key clinical partner, and the broader Dana-Farber group included Eric Lander's people at the Broad — several years to put together the IND, the GMP manufacturing pipeline, the prediction algorithms, and the clinical protocol. The trial they finally ran was tiny by oncology standards — six patients — all with high-risk resected stage III or IV melanoma. The vaccine consisted of up to twenty synthetic long peptides per patient, each one a 15-to-30-amino-acid stretch containing a predicted neoantigen, mixed with the adjuvant poly-ICLC, a synthetic mimic of double-stranded RNA that activates innate immunity.

The patients were vaccinated subcutaneously, multiple times, over a series of months. The investigators then looked at the patients' blood and asked: did the vaccination actually induce T-cell responses to the encoded neoantigens?

The answer was yes. Strongly yes. Across the six patients, the vaccines induced T-cell responses against a high fraction of the encoded peptides — both CD4 and CD8 responses, both new responses to peptides the patient hadn't responded to before and amplification of existing low-level responses. The T cells, when tested ex vivo, recognized not just the synthetic peptides themselves but, critically, also the tumor cells expressing those mutations. That second test — recognition of the natural antigen processed through the natural pathway — is the gold standard of immunogenicity, and the Boston team passed it.

The clinical outcomes were also encouraging, though we have to be careful here because this was a tiny single-arm trial. Of the six patients, four had no recurrence at the time of the 2017 _Nature_ paper, at a median follow-up of about 25 months. The two who did recur went on to receive anti-PD-1, and both responded — one with complete response. The team interpreted that as evidence that the vaccine had primed a T-cell pool that the checkpoint inhibitor was then able to unleash. We'll come back to that vaccine-plus-checkpoint synergy in segment 15.

\[Pause.\]

Why does the Wu-Ott trial matter, in retrospect?

It mattered for three reasons. First, it proved the workflow worked. From biopsy to vaccine, in clinical-grade conditions, in actual patients. Not in mice. Not in a Petri dish. The full computational-experimental pipeline, run end to end, produced immunizable peptides that did, in fact, immunize.

Second, it proved the immunology hypothesis. Neoantigens — predicted purely from sequence and HLA — were in fact immunogenic at a rate high enough to be clinically useful. The thymic-tolerance argument we discussed in segment 2 — that high-affinity T cells against neoantigens still exist in the patient, waiting to be activated — was directly confirmed by the data. The T cells were there. The vaccine just had to find them.

Third, it created the template that every subsequent trial would follow. The basic workflow Wu and Ott described in 2017 — exome and RNA-seq, mutation calling, HLA typing, neoantigen prediction, peptide ranking, manufacturing, vaccination, immunologic monitoring — is, with refinements, what every neoantigen vaccine trial since has done. They built the road.

There's a particular phrase the field uses for these patient-specific peptide vaccines: **IVAC**, for individualized vaccines against cancer. The term comes from a Mainz consortium led by Ugur Sahin, whose group's parallel trial we'll discuss next. But you'll see IVAC used loosely to refer to the whole class — patient-specific multi-neoantigen vaccines.

The IVAC paradigm was, in 2017, an academic proof of concept. Six patients. Tiny. No control arm. No randomization. By the standards of cancer therapeutics it was an extremely preliminary result. But it was the moment the field crossed from "this might work in principle" to "this can actually be done in humans, and it actually induces immune responses." Everything that has happened since — the Moderna trials, the BioNTech trials, the V940 phase 3, the pancreatic cancer trials, the KRAS hotspot vaccines — all of it traces back to those six melanoma patients and the demonstration that the prediction-to-vaccination pipeline could be run in the real world.

\[Pause.\]

---

## SEGMENT 7 — BioNTech and the mRNA neoantigen vaccine

In that same July 2017 issue of _Nature_, back-to-back with the Wu-Ott paper, a second neoantigen vaccine trial was published. This one came out of Mainz, Germany, from a company-academic hybrid built around the husband-wife team of Ugur Sahin and Ozlem Tureci, working with the broader BioNTech group. The trial enrolled 13 patients with advanced melanoma. The clinical outcomes were broadly similar to the Wu-Ott trial — induction of strong T-cell responses against most of the encoded neoantigens, evidence of clinical benefit in a fraction of patients. But the technology was strikingly different.

The Mainz group did not use synthetic peptides. They used **mRNA**.

Their vaccine was a single mRNA molecule, manufactured per patient, encoding a concatenated string of up to ten predicted neoantigens. Each neoantigen was represented as a 27-amino-acid stretch — long enough to contain both class I and class II epitopes — joined to its neighbors by short linker sequences. The whole construct was injected, in liposomal form, into the patient's lymph nodes under ultrasound guidance. Once inside the lymph node's dendritic cells, the mRNA was translated, the resulting concatenated polypeptide was chopped up by the proteasome, and the individual neoantigen peptides were loaded onto HLA molecules and presented to T cells.

The advantages of mRNA over synthetic peptides, in this context, are several. First, **manufacturing speed**. Synthesizing 20 different long peptides per patient is an industrial operation — you need 20 parallel solid-phase peptide synthesis runs, each with its own QC, all converging into a single mixed product. Synthesizing one mRNA encoding all 20 fused together is, by contrast, a single chemistry. You make a DNA template by gene synthesis, you in-vitro-transcribe it into mRNA, you formulate it, and you're done. The unit operations per patient drop dramatically.

Second, **dose flexibility**. mRNA produces protein in vivo. You can dose less and let the cell make more. Peptides, by contrast, are present in whatever amount you inject; they decay; that's it.

Third, and this is more subtle, **both arms of immunity**. The mRNA, translated inside the cell, produces a protein that goes through the natural class I presentation pathway, generating CD8 responses. But the same protein also gets ingested by neighboring cells, processed through the class II pathway, and generates CD4 helper responses. With a peptide vaccine you can engineer this — long peptides can prime both arms — but it's harder. With mRNA it happens naturally.

Fourth, and this would become very important later, **platform extensibility**. Once you have an mRNA manufacturing platform, you can encode anything. Cancer neoantigens. Viral antigens. Replacement proteins. The same factory that makes a personalized melanoma vaccine on Monday can make a personalized lung cancer vaccine on Tuesday and a flu vaccine on Wednesday. The platform is the value, more than any individual product.

\[Pause.\]

The 2017 BioNTech paper, like the Wu-Ott paper, was tiny and uncontrolled. Thirteen patients, all metastatic melanoma, all advanced, many already on or off other therapies. The investigators showed strong immune responses to most encoded neoantigens. They reported clinical observations — some objective tumor responses, some prolonged stable disease, some that responded particularly well in combination with anti-PD-1 — but with such a small and heterogeneous sample you can't really call any of it definitive. What they did establish, conclusively, was that the mRNA neoantigen platform worked at the immunological level.

That mattered enormously for what came next, because the BioNTech mRNA platform — refined, scaled, optimized over the next several years — would become the basis for two very different things. One was the COVID-19 vaccine, the Pfizer-BioNTech mRNA vaccine that 1.5 billion people around the world would receive starting in 2020. That program effectively industrialized mRNA manufacturing on a global scale, validated the technology, and made every regulator on the planet familiar with mRNA biology and safety. The second was a continuing pipeline of personalized cancer vaccines under names like **autogene cevumeran** and **BNT122**, which we'll discuss in segment 12 when we get to the pancreatic cancer trial.

The two 2017 papers — Wu-Ott from Boston and Sahin-Tureci from Mainz — together announced the arrival of neoantigen vaccines as a real clinical modality. Different platforms, different cohorts, similar conclusions. Neoantigen vaccines work. They induce robust T-cell responses. They are clinically feasible. Whether they would change patient outcomes in a statistically rigorous way — that question would take the rest of the decade to answer.

\[Pause.\]

---

## SEGMENT 8 — The personalization arc

Let's step back for a moment from the trials and zoom out on what the IVAC paradigm really is, at the level of drug development as an industry.

For the entire history of pharmaceutical medicine, the unit of value has been the molecule. You discover a chemical. You develop it. You get it approved. Then you manufacture that exact same molecule, billions of times, and ship it. The whole machinery of pharma — chemistry, regulatory, clinical, manufacturing, distribution — is built around the assumption that the molecule is stable across patients. Every patient who takes pembrolizumab is getting the same antibody, the same sequence, the same glycosylation, the same lot-released vial. The molecule is fixed; only the patient is variable.

Personalized neoantigen vaccines break this model.

Every patient gets a different molecule. Patient 1's vaccine encodes one set of 34 neoantigens. Patient 2's vaccine encodes a completely different set of 34 neoantigens. There may be zero overlap. The two vaccines are, at the chemical level, two completely different drugs. They have different sequences, different masses, different immunogenicity profiles, different release specifications. The only thing they have in common is the manufacturing process — the same factory, the same protocols, the same QC pipeline — that produced them from different inputs.

This is what I want to call the **personalization arc**, and it's a conceptual leap that the field is still working through. The arc says: instead of regulating drugs by molecule, we regulate them by _process_. The FDA doesn't approve mRNA-4157 as a molecule, because there is no single mRNA-4157 molecule — every batch is different. It approves the manufacturing platform and the design pipeline that produces a class of molecules conforming to defined specifications. The platform is the drug. Each individual vial is a product of the platform, manufactured to spec from patient-specific inputs.

You can think of this as analogous to how CAR-T cells are regulated — Kymriah, the first FDA-approved CAR-T, isn't really a molecule, it's _that patient's T cells_ engineered through a defined manufacturing process. Yescarta, Carvykti, Breyanzi — the same logic. The product is the process. Personalized neoantigen vaccines extend that paradigm into the world of small drugs.

\[Pause.\]

The personalization arc has several implications.

First, **clinical trials look different.** In a traditional trial, you randomize patients to drug A or drug B and compare outcomes. In a personalized vaccine trial, every patient on the vaccine arm gets a different drug. What you're really testing isn't a drug; it's a process. You're asking: does the process of designing and manufacturing a vaccine, conditioned on each patient's tumor, produce a clinical benefit on average across the cohort? The intervention is the workflow, not the molecule.

Second, **pharmacovigilance is harder.** If a patient has an unusual side effect on a personalized vaccine, you can't easily compare to other patients on the same vaccine, because nobody else is on the same vaccine. You have to compare across the cohort and ask whether the platform, in aggregate, is producing unusual adverse events. This is doable, but it requires different statistical thinking than traditional post-marketing surveillance.

Third, **economics scale strangely.** With a traditional drug, fixed development costs amortize across millions of patients, so the per-patient cost falls. With a personalized vaccine, every patient triggers a new manufacturing run, so per-patient manufacturing costs are essentially fixed regardless of scale. The economics are closer to bespoke services than to mass-produced goods. We'll come back to this in segment 13.

Fourth, **the supply chain has to be both local and disciplined.** Tumor biopsy in the clinic, sequencing in a central lab, computation on a server, manufacturing in a central GMP facility, shipping back to the clinic, all in four to six weeks, with chain-of-identity guarantees at every step. Get patient 47's tumor mixed up with patient 48's, and you've potentially given patient 47 a vaccine encoding peptides that aren't on their tumor — completely useless — and given patient 48 a vaccine encoding peptides that are on their tumor but at concentrations not matched to their immunology. The logistics demand a barcoded, audited, end-to-end identity system that traditional pharma doesn't have to build.

These four implications — trial design, pharmacovigilance, economics, logistics — are not insurmountable. Each one has been worked through, in some form, by CAR-T programs, by gene therapy programs, by the early IVAC trials themselves. But together they explain why the field has moved more slowly than the underlying science would suggest. It is not enough to get the immunology right. You have to build a manufacturing-regulatory-clinical infrastructure that has, until very recently, not existed.

\[Pause.\]

The companies that have made the most progress on this infrastructure are, unsurprisingly, the ones that have the most resources to throw at it. Moderna and BioNTech, both flush with COVID-vaccine cash, have built dedicated personalized cancer vaccine facilities — Moderna in Norwood, Massachusetts, BioNTech in Mainz. These facilities are designed from the ground up around the assumption of N=1 batches. Robotics, parallel small-volume reactors, integrated computational design pipelines, barcoded chain-of-identity tracking. They are the first generation of what personalized-vaccine manufacturing infrastructure looks like at industrial scale. They are also why these two companies, and not academic groups, are running the late-stage trials.

---

## SEGMENT 9 — Moderna mRNA-4157

Let's now get specific about the leading personalized neoantigen vaccine in late-stage development. The program goes by several names. The Moderna internal name is **mRNA-4157**. The international nonproprietary name is **intismeran autogene**. The clinical trial name, in collaboration with Merck, is **V940**. They all refer to the same thing.

mRNA-4157 is, structurally, what you would expect from the BioNTech-Mainz lineage with several years of Moderna optimization on top. Each personalized vaccine consists of a single mRNA molecule encoding up to **34 patient-specific neoantigens**, concatenated together with linker sequences, formulated in lipid nanoparticles. The lipid nanoparticles are similar in design to the ones in Moderna's COVID vaccine — ionizable lipid, cholesterol, helper phospholipid, PEG-lipid — though tuned for the cancer indication.

Why 34 neoantigens? It's a tradeoff. More neoantigens means more chances of hitting an immunogenic one, but it also means longer mRNA, larger LNP cargo, more chances of competition between epitopes for dominant T-cell responses. Moderna landed on 34 as their sweet spot based on preclinical work and the dose-finding portion of their phase 1.

The neoantigens are selected through a computational pipeline. The pipeline takes in tumor and normal exomes plus tumor RNA-seq plus HLA typing, runs variant calling, runs binding prediction with their own algorithms — Moderna has invested heavily in proprietary neoantigen ranking — and outputs the top 34 candidates. There are typically hundreds of mutations in a melanoma. Getting from hundreds of mutations to 34 vaccine candidates is the proprietary recipe.

The mRNA itself is manufactured by in-vitro transcription from a DNA template, capped, polyadenylated, formulated into LNPs, and quality-controlled. Moderna's stated turnaround time from biopsy receipt to vaccine release is in the **eight-week** range, with active investment in pushing that down. Some recent trials have done it faster.

Patients are dosed intramuscularly. The typical regimen is multiple priming doses three weeks apart, followed by booster doses, with the patient on a checkpoint inhibitor (pembrolizumab) throughout. Total treatment duration is on the order of a year.

\[Pause.\]

The phase 1 of mRNA-4157, run starting in 2018 in patients with solid tumors, established two things. One, the manufacturing pipeline worked at scale — Moderna could produce vaccines for enrolled patients within the target turnaround time. Two, the safety profile was acceptable; the most common adverse events were injection-site reactions, transient fatigue, and the flu-like symptoms typical of mRNA vaccines, with no unexpected toxicities specific to the cancer setting. Immune responses to encoded neoantigens were measurable in the majority of patients.

What phase 1 could not do, by design, was demonstrate clinical benefit. For that you need a randomized trial. And that's what KEYNOTE-942 was.

\[BREAK\]

---

## SEGMENT 10 — KEYNOTE-942: the 2022 headline result

Welcome back. Let's now talk about the trial that, more than any other single result, brought neoantigen vaccines from the realm of academic curiosity into the realm of credible imminent therapies. The trial is officially called **mRNA-4157-P201**, jointly sponsored by Moderna and Merck, and is also known as **KEYNOTE-942** in the Merck KEYNOTE naming series. The first major readout was in December 2022, with extended follow-up data through 2023 and 2024. It is, hands down, the most important result the personalized cancer vaccine field has yet produced.

The trial design. It enrolled **157 patients with high-risk resected stage III or IV cutaneous melanoma.** These are patients who have had their tumors surgically removed but who, given the depth or lymph-node involvement of their disease, face a substantial risk of recurrence — typically in the 40 to 50 percent range over the following few years. The standard of care for such patients is adjuvant therapy with a checkpoint inhibitor, usually pembrolizumab, given for about a year after surgery, which reduces recurrence risk by perhaps 30 percent relative to no adjuvant treatment.

So the comparator in KEYNOTE-942 was pembrolizumab alone, the existing standard of care. The intervention arm was pembrolizumab plus mRNA-4157. Randomization was 2:1 in favor of the combination, which is to say more patients were on the experimental arm than on the control. This is common for early-phase efficacy trials where the field wants to maximize the safety dataset on the new treatment.

Treatment went on for about a year, after which patients were followed for recurrence and survival.

\[Pause.\]

The primary endpoint was **recurrence-free survival** — the time from randomization to either disease recurrence or death from any cause. This is a standard endpoint for adjuvant melanoma trials.

The result, as reported in 2022 and updated in 2023:

**The combination of mRNA-4157 plus pembrolizumab reduced the risk of recurrence or death by approximately 44% compared to pembrolizumab alone, at the three-year follow-up mark.** The hazard ratio was around 0.56, with confidence intervals that excluded 1, meaning the result was statistically significant.

That number, 44%, is the headline. Forty-four percent reduction, in a randomized trial, in an adjuvant setting, against a strong standard-of-care comparator. For context, when checkpoint inhibitors themselves were first approved for adjuvant melanoma a few years earlier, they reduced recurrence risk by about 30 percent relative to no treatment. The vaccine combination is, on top of that, reducing recurrence by another 44 percent. The absolute differences in three-year recurrence-free survival rates between the two arms were on the order of 15 percentage points.

A secondary endpoint, distant metastasis-free survival, also favored the combination strongly — distant metastasis being the form of recurrence that essentially defines incurability in melanoma. The hazard ratio for distant metastasis was even lower than for recurrence-free survival overall, around 0.35 to 0.4 depending on which cut of the data you look at.

Safety was acceptable. The combination produced more injection-site reactions and more flu-like symptoms than pembrolizumab alone — that's expected for any mRNA vaccine. The rate of serious immune-related adverse events was modestly increased over pembrolizumab alone but not catastrophically so. There were no unexpected toxicities specific to the combination.

\[Pause.\]

I want to spend a minute on what this result means and what it doesn't mean.

What it means. **It is the first randomized demonstration of clinical benefit from a personalized neoantigen vaccine.** Until KEYNOTE-942, the field had hundreds of patients across various phase 1 and phase 2 trials showing that vaccines induced immune responses. But "immune response" is a biomarker. "Reduces recurrence by 44 percent" is a clinical outcome. The vaccines actually keep tumors from coming back. The whole conceptual edifice we built in segments 1 through 9 — that neoantigens are the untolerized targets, that the prediction pipeline works, that the manufacturing logistics can be solved — is, with KEYNOTE-942, no longer a theoretical edifice. It's a clinically demonstrated treatment paradigm.

What it doesn't mean. **It is not yet a phase 3 confirmatory result.** It is a phase 2b. The sample size is 157, not 1,500. The follow-up is three years, not ten. The patients are all high-risk resected melanoma — a particularly favorable indication where checkpoint inhibitors already work well and where the immune system has a high baseline level of activity. Extrapolating from this result to other cancer types, other patient populations, longer follow-up, is exactly the kind of extrapolation that has burned cancer biology many times before. We need the phase 3.

That phase 3, which we'll talk about in the next segment, is now enrolling. If it confirms the phase 2b result, mRNA-4157 will become the first approved personalized cancer vaccine in modern oncology, with all the regulatory, manufacturing, and economic implications that come with it. If it doesn't confirm, we will have to have a serious conversation about why the phase 2b looked the way it did and what that tells us about the underlying biology.

\[Pause.\]

One detail worth dwelling on. Patients enrolled in KEYNOTE-942 received their vaccine starting about 8 to 12 weeks after surgery. The manufacturing turnaround was, in the real-world clinical-trial setting, achievable — they were able to get every randomized patient their personalized vaccine. The trial actually ran. That, by itself, was a logistical achievement. Five years ago, an oncologist would have raised a skeptical eyebrow at the idea of running a 100-plus-patient trial of a personalized vaccine, because the manufacturing chain would have been seen as impossible. Moderna's industrial infrastructure made it routine. The trial demonstrated not just an immunological effect but also a logistical proof — personalized vaccines can be made at clinical-trial scale.

---

## SEGMENT 11 — The V940-001 phase 3: melanoma, NSCLC, RCC

The phase 3 confirmatory trial of mRNA-4157 is called **V940-001**, and it is now enrolling at sites worldwide. Unlike the phase 2b, which was melanoma-only, the phase 3 program has expanded to multiple indications. The Moderna-Merck partnership is running, in parallel:

- **V940-001, melanoma adjuvant.** This is the direct successor to KEYNOTE-942. Same indication, same combination of mRNA-4157 plus pembrolizumab versus pembrolizumab alone, but in a larger patient population and with regulatory-grade rigor in the trial design.

- **A non-small-cell lung cancer trial,** also adjuvant, in resected stage II-III NSCLC. This is a bigger market than melanoma — lung cancer is the leading cause of cancer death globally — and the immunology question is whether the vaccine works in a tumor type that has historically been less immunogenic than melanoma but that has, with the advent of TMB-high subsets, become a credible target for neoantigen approaches.

- **A renal cell carcinoma trial,** in high-risk resected RCC. Kidney cancer has a peculiar relationship with the immune system — it is one of the cancers most responsive to checkpoint inhibitors, but the mutational burden is generally low compared to melanoma or lung. The question is whether neoantigen prediction works as well in low-TMB cancers.

These three indications were chosen for a reason. Melanoma is where the phase 2b result came from — confirmation in the same disease is the surest path to approval. NSCLC is the largest market and an obvious extension if the platform generalizes. RCC is a stress test of the platform in a setting where the neoantigen prediction has historically been harder.

\[Pause.\]

If V940-001 reads out positive across the three indications — and especially if it confirms the magnitude of the KEYNOTE-942 benefit — personalized neoantigen vaccines will move quickly from experimental treatment to standard of care in the adjuvant setting. The regulatory pathway is fairly well-defined: a positive phase 3 in a single indication is typically sufficient for accelerated approval in that indication, with confirmation in other indications expanding the label over time. Moderna and Merck have been clear in their investor communications that the goal is multiple regulatory approvals across the cancer types being tested.

If V940-001 reads out negative, the field will need to seriously interrogate KEYNOTE-942. Was the phase 2b a fluke? Was it driven by specific imbalances in the patient population? Did the prediction pipeline get particularly lucky on the early patients and then regress to the mean? These are exactly the questions that the larger sample size and randomization rigor of phase 3 are designed to answer.

A timing note. As of the time of this lecture in 2026, the V940-001 melanoma trial has been enrolling for about two years. Adjuvant melanoma trials have long event horizons because the events you're counting — recurrences — happen over years. The first reads from V940-001 are likely 2027 to 2028 for the melanoma indication, somewhat later for NSCLC and RCC. The field is, in a real sense, in a holding pattern, waiting for the phase 3 to land.

In the meantime, the personalized vaccine ecosystem has expanded dramatically. Every major pharma now has a neoantigen vaccine program, either in-house or partnered. Roche has Genentech's program. AstraZeneca partnered with Gritstone. Pfizer and GSK have positioned themselves. Smaller biotechs — Gritstone, NEC Oncoimmunity, Genocea, Achilles, Nouscom — are running their own trials with various platforms ranging from synthetic peptides to viral vectors to dendritic cell preparations. The space is crowded. The technology is no longer the limiting factor. The phase 3 readouts are.

\[Pause.\]

---

## SEGMENT 12 — BioNTech, BNT122, autogene cevumeran, and the pancreatic cancer trial

While Moderna and Merck have been driving the melanoma program, BioNTech has been pursuing a parallel and equally interesting program with their own mRNA neoantigen platform, called **BNT122** internally and **autogene cevumeran** under the INN. BNT122 is structurally similar to mRNA-4157 — a single mRNA encoding a concatenated string of patient-specific neoantigens, delivered in a lipid formulation. The differences are in the details of neoantigen selection, the delivery formulation, and the indication strategy.

BioNTech's most striking trial result is not in melanoma but in **pancreatic cancer**. And this is, biologically, a much harder indication.

Pancreatic ductal adenocarcinoma — PDAC — is the canonical example of an "immune-cold" tumor. It has relatively low mutational burden compared to melanoma. It has an aggressive, fibrotic, immunosuppressive microenvironment that excludes T cells. It has been almost completely unresponsive to checkpoint inhibitors. Five-year survival for PDAC, across all stages, hovers around 13 percent. For patients with surgically resectable disease — perhaps 15 percent of all cases — the 5-year survival is better, maybe 30 percent, but most patients still recur and die. Adjuvant chemotherapy, the current standard of care, modestly improves these numbers. There has been no immunotherapy that works in pancreatic cancer.

The trial that BioNTech ran, in collaboration with Vinod Balachandran's lab at Memorial Sloan Kettering, was small — 16 patients with resected PDAC — and uncontrolled, but it produced a remarkable result. The patients received adjuvant autogene cevumeran, plus the chemotherapy regimen mFOLFIRINOX, plus the anti-PD-L1 atezolizumab. Each patient's vaccine encoded up to 20 neoantigens predicted from their surgical specimen.

Of the 16 patients, **8 mounted strong T-cell responses to encoded neoantigens.** Of those 8 responders, at the 18-month follow-up reported in the 2023 _Nature_ paper, recurrence-free survival was substantially longer than expected — none had recurred at the median follow-up. Of the 8 non-responders, by contrast, most had recurred within the expected timeframe. The split between responders and non-responders, when graphed, was visually striking — two distinct populations diverging from the moment of vaccination.

\[Pause.\]

I want to be careful here, because the trial is tiny and uncontrolled. But the result was important for a specific reason. In a tumor type — pancreatic cancer — where no immunotherapy had previously worked, where the immune system had been considered essentially dormant, a personalized neoantigen vaccine generated functional T-cell responses in half the patients, and those responses correlated with dramatically better recurrence-free survival.

That is, if it holds up in larger trials, a paradigm-shifting result. It suggests that the immune-cold phenotype of PDAC is not, in fact, immutable. T cells can be educated. They can recognize PDAC neoantigens. And when they do, they can suppress recurrence. The reason previous immunotherapies failed in PDAC, this result suggests, may not be that PDAC is immune-blind but that the immune system simply needed a better-pointed weapon than what checkpoint inhibitors alone could provide.

A follow-up randomized phase 2 trial of autogene cevumeran in PDAC is now underway. It will take years to read out. If it confirms the phase 1 result, pancreatic cancer — the most lethal of all common cancers — may finally have an immunotherapy that works. That alone would be a Nobel-level result.

\[Pause.\]

The Balachandran-BioNTech PDAC trial also produced one of the most interesting mechanistic findings to come out of the field. The investigators did deep T-cell receptor sequencing on the responding patients and found that the vaccine-induced clones persisted for many months — some of the responders had detectable vaccine-specific T-cell clones still circulating in their blood two years after vaccination. **The vaccine appears to install durable memory.** Like a flu vaccine, but against the patient's tumor. That durable memory is exactly what you want for cancer prevention — patrol cells that remember what to attack, persisting in the patient's circulation for years.

It also raises an extraordinary possibility, which we'll discuss in our final segment, that neoantigen vaccines might be useful not just to treat cancer but to **prevent recurrence** in high-risk patients, or even to **prevent first occurrences** in people with strong genetic predisposition.

The BioNTech program is also running trials in colorectal cancer, head and neck cancer, and other indications. The trial portfolio is broad. The bottleneck, as everywhere in the field, is patient recruitment and follow-up duration. Cancer trials take years.

\[Pause.\]

---

## SEGMENT 13 — The manufacturing challenge: GMP at N=1

Let's come back to a problem we've alluded to several times but haven't really sat with: **manufacturing**. Because the unsexy truth of personalized cancer vaccines is that the science is, in many ways, the easy part. The hard part is making 10,000 different drugs a year and shipping each one to the right patient at the right clinic on the right date.

GMP — Good Manufacturing Practice — is the regulatory framework that governs how drugs are made. It exists because in the early twentieth century pharmaceutical contamination killed people, and the lesson the regulators learned was that you cannot trust manufacturing to be reliable unless you build a discipline around it. GMP specifies how facilities have to be designed, how operators have to be trained, how raw materials have to be tracked, how each batch has to be tested and released, how deviations have to be documented. It's an exhaustive system, and it's expensive. For a traditional drug, where you might make a few large batches a year and ship them globally, GMP is manageable.

For a personalized vaccine, where you might make 5,000 batches a year and ship each one to one patient, GMP is a fundamentally different beast. **Every batch has to pass full release testing.** Sterility. Endotoxin. Identity. Potency. Purity. The same release testing that, for a traditional drug, runs on a multi-million-vial batch, has to run on a 10-vial personalized batch. The per-batch cost of QC is the same. The economics are punishing.

\[Pause.\]

Moderna's Norwood facility, which manufactures mRNA-4157 batches, is an interesting example of how the industry has tried to solve this. The facility is designed around **parallel small-scale manufacturing.** Instead of one giant reactor producing kilograms of mRNA in a single run, you have many small reactors, each running a separate patient's batch in parallel. Automation handles the routine steps. Computer systems ensure chain-of-identity from biopsy to vial. Quality control is, where possible, miniaturized — small-volume assays, microfluidic versions of standard tests. The whole architecture is optimized for throughput of distinct batches, not for total mass produced.

BioNTech's Mainz facility has a similar architecture. So do, at smaller scale, the dedicated personalized-vaccine facilities being built by the academic medical centers running their own trials — the Dana-Farber-affiliated facility associated with the Wu-Ott program, the Mt. Sinai facility associated with the Bhardwaj program, the MSKCC facility associated with Balachandran.

The unit cost — how much it costs to manufacture one personalized vaccine — depends sharply on how much you can automate and how much volume you can amortize fixed costs against. Current estimates, depending on whose accounting you trust, put the manufacturing cost at somewhere between **$30,000 and $100,000 per patient**. That's manufacturing alone, not including all the upstream sequencing, computation, and clinical operations, which can add another $50,000 to $200,000.

\[Pause.\]

You hear from Moderna and BioNTech, in their investor presentations, that they expect manufacturing costs to come down significantly as the platform matures. The argument is essentially that of any maturing industrial process: economies of scope (more patients sharing fixed infrastructure), automation of currently manual steps, miniaturization of QC, and learning-curve improvements. It's a credible argument. mRNA manufacturing was, in 2015, an academic art form done in microgram quantities in research labs. By 2021 it was producing the COVID vaccine at the rate of millions of doses per week. The platform is capable of dramatic cost reduction.

But the COVID vaccine is one molecule, made at industrial scale. A personalized cancer vaccine is N=1 manufacturing, where the bottleneck is not the chemistry but the per-batch overhead. Whether that overhead can fall by an order of magnitude — from $30K-$100K manufacturing cost down to $3K-$10K — is genuinely uncertain. It will depend on how much of the regulatory and QC burden can be moved into the design phase versus the per-batch release phase. Regulators will have to allow it. Some of this work is happening in industry consortia right now, trying to define what "platform validation" looks like for N=1 personalized products.

\[Pause.\]

If the costs do come down by an order of magnitude, personalized vaccines become a routine adjuvant therapy for any cancer in which the biology works. If they don't come down, the technology remains a high-end therapy available to the few patients whose insurance or whose national health systems will pay for it. Which world we end up in is, in my view, the single most important non-scientific question facing the field. The science of personalized vaccines is mostly working. The cost economics is the wall.

---

## SEGMENT 14 — Shared neoantigens: the off-the-shelf alternative

There's a parallel approach to the personalized vaccine paradigm that I want to spend a segment on, because it offers a potentially radical simplification of the entire workflow. It's called the **shared neoantigen** approach.

Recall that most neoantigens are unique to a single patient — random somatic mutations in random genes producing random peptides. The whole point of personalization is that you can't predict ahead of time which neoantigens any given patient will have, so you have to sequence each patient and design each vaccine bespoke.

But there's a category of mutations that aren't random. Certain mutations recur across patients, because they hit specific functional hotspots in driver oncogenes. The most famous example: **KRAS G12D.** The KRAS gene, on chromosome 12, encodes a critical signaling protein. Position 12 — a glycine in the normal protein — gets mutated to an aspartate (the G12D mutation), or a valine (G12V), or a cysteine (G12C), in a striking fraction of cancers, particularly pancreatic and colorectal. KRAS G12D alone appears in roughly 25 to 30 percent of pancreatic cancers and a smaller but meaningful fraction of colorectal cancers. If you generate a peptide containing the G12D mutation and find HLA alleles that present it, you have a vaccine target that is shared across millions of patients worldwide.

The same logic applies to other recurrent hotspots. **TP53** has hotspot mutations at R175, R248, R273 that recur across many cancer types. **PIK3CA** has hotspots at H1047R and E545K. **BRAF V600E** is the canonical example in melanoma. Each of these recurrent mutations, when it occurs in a protein-coding region, produces a stereotyped neoantigen that could, in principle, be the basis of a vaccine.

\[Pause.\]

This is the **off-the-shelf** alternative to personalization. Instead of designing a different vaccine per patient, you stock a few dozen prefab vaccines targeting common hotspot neoantigens, and you give each patient the one (or ones) that matches their tumor. The patient still needs to be sequenced — to identify which hotspot they have, and to confirm their HLA can present that hotspot. But the vaccine itself is off the shelf. Manufacturing is centralized. Inventory exists. The economics look like traditional pharma.

Several companies are pursuing this. Elicio Therapeutics has an amphiphile-based KRAS hotspot vaccine in clinical trials. Targovax, more recently absorbed into other programs, had a multivalent KRAS vaccine. Moderna and others have programs targeting shared neoantigens as well, alongside their personalized programs. Academic groups, including Liz Jaffee's at Hopkins, have shown immunological responses to KRAS hotspot vaccines and are progressing through clinical trials.

The big constraint on the shared approach is HLA. Not every HLA allele can present the G12D mutant peptide. The KRAS G12D peptide that fits HLA-C*08:02 — a relatively common allele — doesn't fit, or doesn't fit as well, on HLA-A*02:01 or HLA-B*07. So the off-the-shelf vaccine is really off-the-shelf only for patients with the right HLA combination. The fraction of pancreatic cancer patients eligible for a given KRAS G12D vaccine, on this analysis, is maybe a quarter to a half of those who have the mutation — still potentially a very large number, but not all of them.

\[Pause.\]

The shared and personalized approaches aren't mutually exclusive. You can imagine a future cancer-vaccine ecosystem in which both coexist. Off-the-shelf vaccines handle the high-frequency, high-HLA-coverage cases — KRAS G12D vaccines for compatible pancreatic patients, BRAF V600E vaccines for compatible melanoma patients, and so on. Personalized vaccines fill in everyone else, providing patient-specific neoantigen targeting when no high-frequency hotspot is available or HLA-presentable. The choice between the two would be made at the point of sequencing and HLA typing — those same tests that already exist in the personalized workflow.

Whether the off-the-shelf or the personalized approach wins, commercially, depends on costs, on regulatory framework, on which trials read out first, and on which combinations work. My guess is that both coexist for a long time, with personalized vaccines being the higher-end, higher-margin product and shared vaccines being a more commoditized, broadly accessible product. Maybe.

---

## SEGMENT 15 — Vaccine plus checkpoint: the combination that works

You've already noticed, in the trials we've discussed, that nobody is testing neoantigen vaccines as monotherapy. KEYNOTE-942 was vaccine plus pembrolizumab. The BioNTech PDAC trial was vaccine plus atezolizumab plus chemotherapy. The phase 1s tested vaccine plus anti-PD-1 in essentially all cases. This isn't an accident. The combination of vaccine plus checkpoint inhibitor has become the **dominant paradigm** in the field, and there's a clean conceptual reason for it.

Recall the immunology. A T-cell response requires two things: T cells that recognize the relevant antigen, and a permissive environment in which those T cells can function. The vaccine handles the first. It generates T cells specific to the patient's neoantigens, expanding clones that may have been present at very low frequency or recruiting new ones. The vaccine teaches the immune system what to look for and primes a force capable of attacking it.

But T cells, especially T cells operating inside a tumor, run into all the brake mechanisms we talked about in the checkpoint inhibitor lecture. PD-1 and CTLA-4 and the other checkpoint molecules dampen the response. The tumor microenvironment is full of suppressive signals. Even a well-primed T cell, sent into the tumor, may be inactivated before it can kill many cells.

This is where the checkpoint inhibitor comes in. **The vaccine creates the T-cell army; the checkpoint inhibitor removes the brakes the tumor has installed.** Either intervention alone is potentially useful. The combination — army plus brake-release — is greater than the sum of its parts.

\[Pause.\]

This is, in fact, the central insight of modern cancer immunotherapy as a field. Checkpoint inhibitors alone work brilliantly in some patients — those with abundant pre-existing T-cell responses to their tumor, often associated with high tumor mutational burden. They fail in patients with cold tumors that have low T-cell infiltration. Vaccines, in principle, address the latter problem — they generate T cells in patients who didn't have them. Combining the two extends the population in which immunotherapy can work.

Across the trials we've discussed, the pattern is consistent. In KEYNOTE-942, the vaccine plus pembrolizumab outperformed pembrolizumab alone, but the patients in the trial were all eligible for pembrolizumab — that is, they were already in the "checkpoint-responsive" population. The combination wasn't extending the population so much as deepening the response. In the BioNTech PDAC trial, the patients were in a population where checkpoint inhibitors essentially do nothing. The vaccine plus checkpoint did seem to work in half of them. Different mechanistic story; same combination logic.

\[Pause.\]

There's an emerging body of work suggesting that the optimal combination might not just be vaccine plus PD-1, but vaccine plus PD-1 plus other things. Vaccine plus PD-1 plus CTLA-4. Vaccine plus PD-1 plus LAG-3. Vaccine plus PD-1 plus IL-2 superkines. Vaccine plus PD-1 plus intratumoral cytokines. The combinatorial space is large, and the trials are slow, and we're going to be sorting this out for the next decade.

But the core paradigm is unlikely to change. **Vaccine to point the immune system at the right target; checkpoint inhibitor to let the immune system actually attack.** Either piece without the other is incomplete. Together they form the foundation on which most personalized cancer therapies of the next ten years will be built.

---

## SEGMENT 16 — Computational improvements: the next decade of prediction

Let me come back to the prediction problem, because the algorithms have been evolving rapidly and several of the developments will matter for the future of the field.

First, **pan-allele models**. The first generation of HLA binding predictors — NetMHC 1.0, NetMHC 2.0 — were trained allele by allele. You had a separate model for HLA-A*02:01, a separate model for HLA-B*07:02, and so on. This meant that rare alleles, for which there wasn't much training data, predicted poorly. NetMHCpan and MHCflurry 2.0 introduced **pan-allele** architectures — single models trained on data from all alleles, with the allele itself represented as part of the input. These models generalize across alleles, including alleles that weren't well-represented in the training set. They make neoantigen prediction more equitable across ancestries with different HLA distributions, though substantial gaps remain.

Second, **immunopeptidomics-trained models**. The training data for binding prediction was historically peptide-HLA binding assays — purified HLA molecules incubated with peptides, with the binding affinity measured biophysically. That's one thing. The cell, in reality, doesn't just bind peptides; it processes proteins, transports peptides, edits them, and selects which to load. The full process produces a different set of peptides on the surface than pure binding assays would predict. **Immunopeptidomics** — mass spectrometry of peptides eluted from HLA molecules on real cells — measures the actual surface peptide repertoire. Training prediction models on immunopeptidomics data, in addition to binding data, gives much better real-world prediction. MHCflurry 2.0 was the public-domain pioneer of this; many commercial pipelines now include it.

Third, **structure-based predictors**. With the AlphaFold-2 revolution in protein structure prediction, it has become feasible to predict the 3D structure of a peptide-HLA complex directly. Several groups — Mt. Sinai, Lausanne, various academic and industrial — are now building structure-aware prediction models that score not just sequence-based binding likelihood but the actual 3D fit of the peptide in the HLA groove. These models are early. They are not yet clearly better than sequence-based models on benchmark datasets. But the long-term trajectory of the field is towards structure-aware predictors, especially for the harder problem of predicting which presented peptides will actually be recognized by T-cell receptors.

\[Pause.\]

Fourth, and most ambitious, **TCR-aware predictors**. Even if you know exactly which peptides are presented by a tumor, you still don't know which ones will be immunogenic, because immunogenicity depends on whether the patient happens to have a T-cell receptor in their repertoire that can recognize that peptide. Patient TCR repertoires are themselves enormous and idiosyncratic. Predicting which presented peptides a given patient's TCR repertoire can mount a response against — that's the holy grail. It's also genuinely hard. The TCR-peptide-HLA interaction is a three-body problem in protein chemistry, with billions of TCR sequences in each patient. Deep learning models trained on TCR-peptide pairs are starting to emerge — TCRdist, NetTCR, panpep — but their performance is still modest. This is one of the most active frontiers of computational immunology.

The bet across the field is that computational improvements over the next five to ten years will substantially close the prediction-vs-immunogenicity gap. If they do, vaccines will get more effective — more of the encoded peptides will hit, T-cell responses will be stronger, fewer patients will need 34 neoantigens because 5 well-chosen ones will be enough. The cost of vaccine design — sequencing, computation, the analytical pipeline — will fall. The whole economics will improve.

If they don't close the gap, vaccines will continue to need broad coverage — many peptides per vaccine, brute force across the immunogenicity uncertainty — and the cost will stay high. The computational frontier really does matter for the practical viability of the field.

---

## SEGMENT 17 — The cost economics and access

Let's talk frankly about money, because the future of this field depends on it.

The current all-in cost of a personalized cancer vaccine — manufacturing, sequencing, computation, clinical operations, regulatory overhead, the lot — is somewhere in the **$100,000 to $300,000 per patient** range. That's expensive, but it's not unprecedented in cancer therapy. CAR-T cells run $400K to $500K per infusion. New gene therapies for rare diseases run into the millions. Pembrolizumab itself, for a year of adjuvant melanoma treatment, costs about $150,000 to $200,000.

The first commercial neoantigen vaccines, when they reach the market, will probably be priced in the $200,000 to $400,000 range per patient, on top of the checkpoint inhibitor they're combined with. That puts a fully treated patient at perhaps $400,000 to $600,000 total for the adjuvant year. In a wealthy-country healthcare system that's expensive but absorbable for a high-value indication like melanoma. It would generally not be absorbable, at population scale, for high-incidence indications like adjuvant lung cancer.

\[Pause.\]

For the field to genuinely change the practice of oncology, costs need to come down. The path to lower costs, as I've sketched, involves manufacturing automation, computational pipeline optimization, regulatory acceptance of platform-based release rather than per-batch full release, and learning-curve improvements as volumes rise. Optimistic estimates put the achievable per-patient cost, at scale and with platform maturity, at perhaps $20,000 to $50,000 — maybe one order of magnitude below current costs. Pessimistic estimates say we're stuck closer to current numbers because the per-batch overhead doesn't scale down as well as people hope.

Whichever way that goes, there's a global access question that matters even more. The pancreatic-cancer trial result, if it holds up, would represent a major advance for patients in any country. But personalized vaccine manufacturing, today, exists in a handful of facilities in the United States and Germany. Patients in India, Brazil, Indonesia, Nigeria — and indeed in much of Europe — do not have any access to it. Cold-chain shipping from Norwood to Lagos for a personalized batch is not a viable model.

For personalized vaccines to be a global therapy, regional manufacturing networks would have to be built — perhaps several dozen facilities across the major regions of the world, each capable of running the manufacturing for its catchment population. That is a public-health-scale infrastructure investment of the kind that has happened, occasionally, with vaccines and rarely with cancer therapeutics. Whether it will happen for personalized neoantigen vaccines depends on the same factors that determined how COVID vaccines were eventually distributed — political will, intellectual property arrangements, the willingness of the developing companies to license platform technology to regional manufacturers.

It is too early to know. But I want you to keep the access question in mind as you read the inevitable enthusiastic press releases. The science is real. The therapy works. Whether it actually reaches the patients who could benefit — that's not a scientific question. That's a political and economic one.

\[Pause.\]

---

## SEGMENT 18 — Frontier: TCR-T, prophylactic vaccines, intratumoral combinations

Let me close with a tour of where the field is going, beyond the current generation of personalized vaccines. Three frontiers, each of which could redefine what neoantigen targeting means in oncology.

**Frontier one: neoantigen TCR-T.** A vaccine works by trying to coax the patient's own T-cell repertoire into mounting a response against neoantigens. But what if the patient's repertoire doesn't have a good response in it — no T-cell clones with high-affinity receptors against the right neoantigens? Several groups are now bypassing this problem by going directly to engineered T-cell therapy. The approach: identify neoantigens in the patient's tumor, identify or computationally design a T-cell receptor that recognizes that neoantigen, clone the TCR into the patient's T cells using CAR-T-style engineering, expand the resulting cells, and infuse them back. The patient now has a population of T cells, each with a defined receptor, each capable of recognizing the neoantigen. It's not a vaccine; it's a cell therapy. But the underlying neoantigen-identification step is identical. Steve Rosenberg's group at the NCI has shown several striking responses with this approach, particularly using KRAS G12D-targeted TCR-T in colorectal cancer.

**Frontier two: prophylactic neoantigen vaccines.** What if you vaccinate not patients who have cancer but patients who are at very high risk of getting it? Lynch syndrome is a hereditary cancer predisposition caused by germline mutations in DNA mismatch repair genes. Lynch patients have a lifetime risk of colorectal and endometrial cancer in the 50 to 80 percent range. Their tumors, when they arise, have a stereotyped pattern of frameshift mutations — predictable, recurrent, shared across Lynch patients. A vaccine encoding the common Lynch frameshift neoantigens, given to Lynch patients prophylactically, might prevent tumors from establishing in the first place. Phase 1 trials of such a vaccine — Nouscom's, in particular — are ongoing. If they show that prophylactic vaccination prevents cancer in a defined high-risk population, the door opens to other genetic-predisposition syndromes — BRCA1, Li-Fraumeni, FAP — and eventually, more controversially, to prophylactic vaccination of the general population against cancers driven by common driver mutations.

**Frontier three: neoantigen vaccines plus intratumoral therapy.** The vaccine generates T cells. The checkpoint inhibitor unleashes them. But the tumor microenvironment can still suppress them locally. Several groups are now combining systemic neoantigen vaccines with **intratumoral** therapies — injections of immune adjuvants, oncolytic viruses, cytokines, or even targeted radiation — given directly into one or two accessible tumor sites. The idea is that the intratumoral injection inflames the tumor, opens it to T-cell infiltration, and provides a beachhead from which the vaccine-induced T cells can then expand and traffic to other tumor sites. Early trials of this kind of combination — vaccine plus checkpoint plus intratumoral TLR agonist, for example — are now reading out. The combinatorial approach is, in some ways, the natural endpoint of immunotherapy: every patient gets a personalized vaccine, a checkpoint inhibitor, and an intratumoral adjuvant, all tuned to their specific tumor.

\[Pause.\]

I want to leave you with one final thought, which is the thought I would have wanted someone to leave me with twenty years ago when I started learning this field.

Cancer is, fundamentally, a disease of self versus slightly-modified-self. The immune system was built, by evolution, to distinguish foreign from native. Cancer occupies the uncomfortable middle ground — recognizably descended from your own cells, but altered. The history of cancer immunotherapy has been the history of finding the leverage points where slightly-modified-self can be made to look, to the immune system, sufficiently foreign that it gets attacked.

Checkpoint inhibitors found a leverage point: cancer presses the brakes on the immune system, so release the brakes. CAR-T cells found another: engineer T cells with completely synthetic receptors and aim them at whatever marker you choose. Neoantigen vaccines find a third, and in some ways the deepest one: cancer accidentally produces, by virtue of being a mutated cell, peptides that the immune system has never been tolerized to. Find those peptides. Show them to the immune system. Let the body finish the job.

Of those three, the neoantigen approach is the most _natural_, in the sense that it works with the immune system as it evolved, rather than around or against it. It uses the immune system's own surveillance machinery, presented with sharper targets. If the field works — and the KEYNOTE-942 result strongly suggests it will, in at least some indications — it will represent the culmination of a century-long effort to convince the immune system that cancer is, in fact, foreign enough to fight.

That is the lecture, more or less. Let me close with an appendix and a few resources.

\[Pause.\]

---

## APPENDIX — A reference table and a few resources

For your reference, here are the major neoantigen vaccine programs and trials discussed in this lecture.

**Wu and Ott IVAC trial (2017)** — Dana-Farber Cancer Institute — synthetic long peptide vaccine with poly-ICLC adjuvant — 6 patients with high-risk resected melanoma — published _Nature_, July 2017 — established proof of concept that personalized neoantigen vaccines induce T-cell responses in patients.

**BioNTech IVAC mutanome trial (2017)** — University of Mainz and BioNTech — personalized mRNA vaccine, intranodal injection — 13 patients with advanced melanoma — published _Nature_, July 2017, back-to-back with Wu-Ott — established the mRNA platform for personalized cancer vaccines.

**mRNA-4157 (intismeran autogene)** — Moderna — personalized mRNA vaccine encoding up to 34 neoantigens, intramuscular injection, lipid nanoparticle formulation — partnered with Merck — currently in phase 3 (V940-001) for adjuvant melanoma, NSCLC, and RCC.

**KEYNOTE-942 (mRNA-4157-P201)** — Moderna and Merck — phase 2b randomized trial of mRNA-4157 plus pembrolizumab versus pembrolizumab alone in adjuvant high-risk resected melanoma — 157 patients — primary endpoint recurrence-free survival — readout December 2022, updated 2023-2024 — 44% reduction in risk of recurrence or death in the combination arm.

**V940-001** — Moderna and Merck phase 3 program — confirmatory trial of mRNA-4157 plus pembrolizumab in adjuvant melanoma, with parallel trials in NSCLC and RCC — enrolling at the time of this lecture, first readouts expected 2027-2028.

**Autogene cevumeran (BNT122)** — BioNTech — personalized mRNA vaccine — phase 1 in resected pancreatic cancer in collaboration with Vinod Balachandran (Memorial Sloan Kettering), published _Nature_ 2023 — 16 patients, 8 with strong T-cell responses, durable recurrence-free survival in responders — phase 2 randomized trial now enrolling.

**Elicio amphiphile vaccines (ELI-002)** — Elicio Therapeutics — KRAS mutant peptide vaccine on lymph-node-targeting amphiphile carrier — phase 1/2 in KRAS-mutant pancreatic and colorectal cancer — shared-neoantigen approach.

**Gritstone GRANITE (personalized) and SLATE (shared)** — Gritstone bio — personalized adenovirus-vectored vaccine plus mRNA boost, and shared neoantigen version, both in solid tumor trials.

**Nouscom NOUS-209** — Nouscom — vaccine targeting shared frameshift neoantigens in MSI-high cancers — phase 1/2 ongoing, including prophylactic-vaccine trial in Lynch syndrome carriers.

**Steve Rosenberg neoantigen TCR-T** — NCI — adoptive transfer of T cells engineered with TCRs specific to KRAS G12D and other shared neoantigens — case-report responses, not yet a scaled platform.

\[Pause.\]

A few suggested further-reading sources for the curious.

The original 2017 _Nature_ papers — Ott et al. (Wu-Ott) and Sahin et al. (BioNTech-Mainz) — are essential primary sources. Both are freely accessible. They are dense but very readable for an undergraduate audience.

The 2022-2023 KEYNOTE-942 readouts have been published in _The Lancet_ and in the major society conference proceedings (AACR, ASCO). The Moderna and Merck investor materials around those readouts also contain useful clinical-grade summaries.

The Rojas et al. _Nature_ 2023 paper from the BioNTech-MSKCC pancreatic trial is one of the most important recent results, and the durable T-cell memory data in that paper is well worth studying directly.

For computational background, Vita Sebra's reviews of HLA prediction algorithms, and the MHCflurry 2.0 paper by O'Donnell et al., are accessible primary sources. The NetMHCpan documentation and tutorial materials are useful for hands-on exploration.

Catherine Wu's lab page at Dana-Farber, Ugur Sahin's writings at BioNTech, and Vinod Balachandran's lab page at MSKCC all maintain accessible overviews of their ongoing programs.

For broader context, the immune-oncology chapter of any current edition of _DeVita's Cancer: Principles and Practice of Oncology_ provides an integrative clinical view.

And of course, clinicaltrials.gov searches for "neoantigen vaccine" or "personalized cancer vaccine" will give you the current real-time landscape of what's being tested.

\[Pause.\]

That brings us to the end. Thank you for your attention through what has been, by any measure, a dense couple of hours. If you remember nothing else from today, remember the scaffold:

Every tumor is a mutated version of self. Mutations produce neoantigens — peptides the immune system has never seen and was never tolerized against. Sequence the tumor, predict which neoantigens fit the patient's HLA, encode them in an mRNA or peptide vaccine, dose the patient, combine with a checkpoint inhibitor to release the brakes, and the patient's own immune system finishes the job. KEYNOTE-942 proved it works in melanoma. The phase 3 will tell us how far the paradigm generalizes. The manufacturing challenge is real but tractable. The cost problem is the wall.

That's the lecture, in six sentences. The rest is detail. But the detail — as you have hopefully come to feel — is where the magic, and the medicine, lives.

Thank you.

\[End of lecture.\]

