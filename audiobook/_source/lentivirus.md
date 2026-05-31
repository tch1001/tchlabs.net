# Lentivirus Vectors: How HIV Became the Workhorse of Gene Therapy

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool. This lecture is a companion to the broader retrovirus biology lecture — we will not re-teach HIV virology from scratch. We are here to look at lentivirus _as a vector_.

---

## SEGMENT 1 — Why HIV makes a good vector: what we steal, what we delete

Alright, let's get started. Good morning, everyone. Today, for the next two hours, we are going to talk about lentivirus vectors. And before you get nervous about the name, let me give you the headline up front: the lentivirus vector that's used in the clinic, that's used in your CAR-T therapy, that's used in the hundreds of thousands of gene therapy experiments published every year — that vector is HIV. We took HIV, the most studied virus in human history, and we turned it into the most reliable gene-delivery tool we have for integrating a piece of DNA permanently into a human cell. It is, I think, one of the great judo throws in all of biology. The pathogen that caused the worst pandemic of the late twentieth century has become the vehicle that cures children with leukemia.

So let me start with the analogy I want you to hold in your head for the next two hours. Picture a delivery van. Wild-type HIV is a delivery van whose body and engine — the chassis, the wheels, the steering wheel — are extraordinarily good at one specific job: getting into a particular kind of human cell, bypassing all the cell's defenses, and inserting cargo permanently into that cell's chromosome. The chassis is brilliant. The cargo wild-type HIV happens to carry, on the other hand, is a kit for making more delivery vans, plus a set of accessory weapons that quietly disable the immune system over the course of a decade. That cargo is what makes HIV a pathogen.

What we do, when we build a lentiviral vector, is we gut the van. We rip out the cargo — every gene that makes HIV pathogenic, every gene that lets it replicate, every gene that even lets it _make a second copy of itself_ inside a cell — and we throw all of that away. What we keep is the chassis. The doors. The keys. The GPS that finds the nuclear envelope. The integrase that bolts the cargo to the chromosome. And then, in the empty cargo bay, we put whatever we want: a gene for hemoglobin, a chimeric antigen receptor for a CAR-T cell, a CRISPR guide RNA library, a fluorescent reporter, a therapeutic transgene. Whatever your experiment needs.

The result is a delivery van that can do exactly one trip. It picks up the cargo at the factory, drives to the target cell, opens the door, drops off the package, and dies. It cannot make more vans. It cannot replicate. It cannot become a pathogen again, even in principle, because we have separated the genes for making the van from the genes for making the van's payload, and we have put them in different boxes that never meet inside the patient. The vector that arrives in the patient has the structural and enzymatic machinery to do one delivery, and that's it.

\[Pause.\]

If you walk out of this lecture in two hours and you can do three things — one, sketch the three-plasmid lentiviral production system from memory and explain what each plasmid contributes; two, walk a colleague through the elements on a modern third-generation transfer plasmid and explain why each one is there; three, look at a CAR-T or hematopoietic-stem-cell gene therapy protocol in the news and tell me where the lentivirus is doing the work — then we've succeeded. Everything else is decoration on those three.

Let me also frame why _this_ vector, and not some other one. There is a whole zoo of viral vectors. Adeno-associated virus, AAV, is fantastic for in vivo delivery to liver and muscle and retina and CNS, but its cargo capacity is small — about 4.7 kilobases — and it generally does not integrate, so the gene gets diluted out in dividing cells. Adenovirus is high-capacity but provokes a strong immune response and doesn't integrate. Gammaretrovirus, the older retroviral vector based on murine leukemia virus, integrates and is durable, but it cannot enter resting cells, and it has a nasty habit of landing right on top of growth-control genes, which historically gave us a small but devastating outbreak of vector-induced leukemias in the SCID-X1 trials in the early 2000s. Lentivirus sits in a sweet spot. It carries up to about 8 to 10 kilobases of cargo. It integrates, so the gene is permanent. It crosses the closed nuclear envelope of a resting cell, so you can transduce stem cells without forcing them to divide first. And its integration site preferences are gentler than gammaretrovirus's — it tends to land in the body of expressed genes rather than at promoters, so it's less likely to switch on a nearby oncogene.

In short, if your problem is "I need to put a gene permanently into a cell, the cell may or may not be dividing, the gene may be large, and I want this to work reliably and durably for the lifetime of that cell and all its progeny" — your answer is almost always lentivirus.

\[Pause.\]

Now, a word about what this lecture _isn't_. It is not a lecture on HIV virology. We have a separate two-hour lecture for that, and I'm going to assume you have either taken it or can find it on the shelf. I'm going to recap what you need, fast, and then move on. So here is the recap.

HIV is a lentivirus, which is a genus within the retrovirus family. Its genome is two copies of single-stranded positive-sense RNA, about 9.7 kilobases. It encodes the canonical retroviral genes — _gag_ (structural proteins), _pol_ (reverse transcriptase, integrase, protease), and _env_ (the envelope glycoproteins gp120 and gp41). On top of that, like all complex retroviruses, it has accessory genes: _tat_, _rev_, _nef_, _vif_, _vpr_, _vpu_. The genome is flanked by long terminal repeats, the LTRs, each of which has the structure U3-R-U5 and contains the viral promoter and enhancer in the U3 region. The life cycle, in brief, is: bind CD4 and CCR5 or CXCR4, fuse, uncoat, reverse-transcribe RNA into DNA, traffic to the nucleus, integrate into a chromosome, transcribe new viral RNA from the integrated provirus, splice, translate, assemble, bud.

Of that whole life cycle, what we are going to keep in our vector is: the packaging signal that lets RNA be loaded into a virion. The reverse transcriptase that copies RNA to DNA. The integrase that splices the DNA into a chromosome. The capsid and matrix proteins that build the particle. The envelope that gets in — though we're going to swap HIV's own envelope for something better. And the LTRs at the ends, though we're going to cripple them on purpose.

What we are going to throw away: every accessory gene that exists to fight the immune system. The Tat protein that activates the LTR promoter, in third-generation vectors. The Nef protein that downregulates CD4 to keep infected cells alive. Vif, which counteracts the host restriction factor APOBEC3G. Vpr, Vpu — gone. And critically, we are going to throw away the entire viral genome's protein-coding capacity from the _vector_ itself, and supply the necessary proteins from separate plasmids that never end up in the final virion as DNA. That's the safety logic that turns a pathogen into a tool.

\[Pause.\]

That's the chassis-and-cargo picture. Let me now spend the next segment on the single feature of lentivirus that, more than anything else, explains why it dominates the field — its ability to transduce cells that aren't dividing.

---

## SEGMENT 2 — The non-dividing-cell advantage: why lentivirus replaced gamma-retro

Before lentivirus, the dominant integrating viral vector was gammaretrovirus — specifically, vectors based on the Moloney murine leukemia virus, MLV. In the 1980s and 1990s, if you wanted to put a gene permanently into a mammalian cell, you used an MLV-based vector. The very first successful gene therapy trial, in 1990, on a young girl with adenosine deaminase deficiency, used a gammaretroviral vector. The early successes treating X-linked severe combined immunodeficiency, SCID-X1, in the late 1990s and early 2000s used gammaretroviral vectors. For about fifteen years, gammaretrovirus was the gene therapy field.

And then it ran into two walls. The first wall was insertional mutagenesis — the SCID-X1 trial cured most of the boys, but four of them developed T-cell leukemia, traced to gammaretroviral integration switching on a proto-oncogene called LMO2. We'll come back to insertional mutagenesis in Segment 13, because it's the single biggest safety concern with any integrating vector. But the second wall, the one I want to focus on now, was simpler and more fundamental — gammaretrovirus _cannot infect a cell that isn't dividing_.

Here is the problem. After the virus enters the cell and reverse-transcribes its genome into DNA, that DNA is sitting in the cytoplasm, bound up in a complex with viral proteins called the pre-integration complex, the PIC. The PIC needs to get into the nucleus to integrate. The nucleus, in an interphase cell, is bounded by a nuclear envelope — a double membrane perforated only by nuclear pore complexes. The pores are gates. They have active import machinery. To get a big protein-DNA complex through one of those gates, you need the right paperwork — specifically, nuclear localization signals on your cargo that are recognized by importin proteins. Without that paperwork, you don't get in.

The pre-integration complex of murine leukemia virus _does not have the right paperwork_. It cannot cross an intact nuclear envelope. The only way an MLV PIC gets into the nucleus is to wait for the cell to divide. When a cell enters mitosis, the nuclear envelope breaks down — it has to, because the spindle has to reach the chromosomes. For about thirty minutes during mitosis, there is no envelope. The PIC drifts in, hangs around the chromatin, and gets integrated. After cytokinesis, the envelope reforms, and now the proviral DNA is inside a new nucleus.

So if the cell never divides, MLV never integrates. The reverse-transcribed DNA just sits in the cytoplasm and eventually gets degraded. This is fatal for any application where you want to target a non-dividing cell — and in a body, _most_ cells are non-dividing most of the time. Neurons. Mature hepatocytes. Muscle fibers. Quiescent hematopoietic stem cells in their bone marrow niche. Resting T cells. Macrophages. Retinal pigment epithelium. All these cells, the most clinically important targets for gene therapy, are off-limits to gammaretrovirus.

\[Pause.\]

Now compare lentivirus. The lentiviral pre-integration complex has the right paperwork. The capsid itself, which stays largely intact during cytoplasmic trafficking, docks at the nuclear pore. It recruits cellular import factors — importin-7, transportin-3, and a host protein called CPSF6 that binds the capsid directly. The capsid then traverses the pore. Inside the nucleus, the capsid uncoats, the PIC engages chromatin, and integrase splices the viral DNA into a chromosome. None of this requires mitosis. The cell can be sitting completely still, perfectly quiescent, and lentivirus will get in, get integrated, and start expressing the transgene.

This single property — let me say it cleanly — _is_ why lentivirus replaced gammaretrovirus as the dominant integrating vector. Everything else about lentivirus is also better than gammaretrovirus, but this one property is the one you can't engineer around. If you want to transduce a hematopoietic stem cell — and almost all the most exciting recent gene therapies do — you need lentivirus, because HSCs in their quiescent state divide maybe once a year. If you want to transduce a neuron, you need lentivirus, because neurons don't divide at all after development. If you want to transduce a resting T cell, or you want to be efficient on the resting T cells in your CAR-T product, lentivirus is what you reach for.

So our first design principle is set. We are building on a chassis — lentivirus — that has the right paperwork to cross the nuclear envelope of a resting cell. That property comes from the capsid and from the host factors the capsid recruits, and we cannot break it in our engineering. Whatever we do to the genome and the accessory genes, we are going to keep the structural machinery that makes nuclear entry work, because it's the killer feature.

\[Pause.\]

---

## SEGMENT 3 — The three-plasmid production system: packaging, envelope, transfer

Alright. We have a chassis. We have a payload. How do we actually make virus?

Here is the central trick of lentiviral vector production, and once you see it, the whole system makes sense. We separate the viral genome into _three pieces_, put each piece on its own plasmid, and we co-transfect all three plasmids into a producer cell line. The producer cell expresses all the proteins from all three plasmids simultaneously. The proteins find each other, assemble into virions, and the virions package only the RNA that has the packaging signal — which is on only _one_ of the three plasmids, the transfer plasmid. The other two plasmids contribute proteins to the virion but their RNA does not get loaded as a genome. The virions bud off, we harvest the supernatant, and we have a stock of single-use delivery vans that contain only the cargo we want.

Imagine you are baking. You mix three ingredients in a bowl — packaging, envelope, transfer — and a few days later the bowl spits out finished cookies. The cookies have the wrapper from the envelope plasmid, the structural dough from the packaging plasmid, and the message inside the fortune cookie from the transfer plasmid. The message is the only thing the customer cares about. The wrapper and the dough are necessary infrastructure that get consumed in the making.

Let me name the three plasmids and tell you what each one does.

**The packaging plasmid.** This carries _gag_ and _pol_. Gag encodes the structural proteins — matrix, capsid, nucleocapsid — that build the virion shell. Pol encodes the enzymes that the virion has to bring with it because the target cell can't supply them: reverse transcriptase, integrase, and the viral protease. In a third-generation system, the packaging plasmid has been stripped down: _tat_ is gone, the accessory genes are gone, and even _rev_ has been moved off onto its own separate fourth plasmid in some commercial systems. What's left is the bare minimum — the proteins you need to build a virion and to make it functional inside a target cell. Crucially, the packaging plasmid does _not_ have a packaging signal, so its own RNA does not get loaded into the virion. The Gag and Pol proteins it produces go off and build particles, but the producer cell does not put the packaging plasmid's RNA inside those particles.

**The envelope plasmid.** This carries the gene for the glycoprotein that sits on the outside of the virion and determines which cells the virion can enter. In almost every lentiviral vector you'll ever use, this is not HIV's own envelope. HIV's envelope, gp120/gp41, only enters CD4-positive cells, which is far too narrow a tropism for a gene therapy tool. Instead, we use a glycoprotein from a completely different virus — usually the **G protein of vesicular stomatitis virus**, VSV-G. We'll talk about pseudotyping in detail in Segment 5; the headline is that VSV-G binds an essentially universal cellular receptor, the LDL receptor, and lets your vector enter almost any cell type. The envelope plasmid expresses just this glycoprotein, in trans, and the producer cell's secretory pathway sticks it into the plasma membrane, where budding virions pick it up.

**The transfer plasmid.** This is the only plasmid whose RNA actually gets packaged into the virion. It is the plasmid that carries your gene of interest, the cargo you want to deliver. Between two LTRs — which, as we'll see, are heavily modified — sits everything that the virion needs in cis: the packaging signal, the Rev response element, a few helper cis-acting elements like the central polypurine tract and the WPRE, and in the middle, where the viral genes used to be, your transgene driven by your favorite promoter. We'll dissect the transfer plasmid in detail in Segment 4. The key point for now is that the transfer plasmid is _the only one that becomes the viral genome_. The other two contribute proteins; the transfer plasmid contributes the genome.

\[Pause.\]

Now think about the safety logic of this arrangement. For wild-type HIV to be produced, you need _gag_, _pol_, _env_, _rev_, _tat_, and a genome with a packaging signal all in the same cell, all on the same piece of DNA, or at least on pieces of DNA that can recombine to reconstruct that arrangement. By separating those functions onto three or four different plasmids, with no sequence overlap between them, we make it essentially impossible for a single recombination event to reconstruct a replication-competent lentivirus. You would need multiple independent recombination events between non-homologous plasmids, all in the same cell, all preserving function. That is vanishingly improbable.

This is the central safety principle of lentiviral vector engineering: **safety by separation**. No single plasmid is sufficient to make replicating virus. The viral functions are scattered across multiple plasmids that share as little sequence as possible. Any one plasmid, alone, is biologically inert.

\[Pause.\]

The producer cell, by the way, is almost always **HEK293T** — a human embryonic kidney cell line that has been engineered to constitutively express the SV40 large T antigen. The T antigen has nothing directly to do with lentivirus production, but it allows plasmids that contain the SV40 origin of replication to be episomally amplified inside the 293T cell, which boosts the amount of mRNA you can produce from each plasmid and therefore the yield of virus. 293Ts also grow fast, transfect easily, and produce robust amounts of virus. They are not the only producer cell line — suspension-adapted variants exist for large-scale manufacturing, and packaging cell lines that stably express Gag-Pol and Env are used in some commercial settings — but for a research lab making lentivirus for the first time, you will be transfecting 293Ts.

That's the production system. Three plasmids, one producer cell, three days, harvest the supernatant. Now let's look in detail at what's on the transfer plasmid, because that's where you, the experimenter, do most of your design work.

---

## SEGMENT 4 — The transfer plasmid in detail: psi, RRE, cPPT, WPRE, and your insert

Open up any modern third-generation lentiviral transfer plasmid in a sequence viewer and you will see a recognizable architecture. Let me walk you through it from 5' to 3' as the RNA would be read inside the virion.

At the far 5' end is the **5' LTR**. In a third-generation transfer plasmid, this LTR is a hybrid — the U3 region of HIV has been replaced by a constitutive viral promoter, typically the RSV promoter (Rous sarcoma virus) or the CMV promoter (cytomegalovirus). Why? Because in wild-type HIV, transcription from the LTR requires the viral protein Tat, which we have deleted from our safety-stripped packaging plasmid. With no Tat around, the wild-type LTR is essentially silent. To produce virus efficiently in the 293T producer cell, we swap in a Tat-independent promoter at the 5' end of the transfer plasmid, so that the producer cell can transcribe full-length vector RNA without needing Tat. Inside the producer cell, this hybrid 5' LTR drives transcription of the entire vector RNA, including the packaging signal, all the cis-elements, your transgene, and the 3' LTR.

Immediately downstream of the 5' LTR, you encounter the **packaging signal, ψ (psi)**. This is a structured RNA element of about 100 nucleotides that includes the major splice donor and a series of stem-loops. The nucleocapsid domain of Gag binds psi specifically and selectively. Without psi, RNA does not get loaded into virions, even if the cell is making it abundantly. With psi, RNA gets selected, dimerized with a second copy, and packaged. Removing psi from the packaging and envelope plasmids — which we have done — means the proteins from those plasmids assemble into virions, but the plasmid RNA itself doesn't ride along. Only the transfer plasmid's RNA, with its psi, gets loaded.

A little further downstream, you'll see the **Rev response element, RRE**. The RRE is a complex stem-loop structure inside the env coding region of wild-type HIV. In the wild-type virus, unspliced and partially spliced viral RNAs would normally be retained in the nucleus, because they contain introns and the cellular splicing surveillance machinery hates exporting unspliced RNA. HIV solves this with the Rev protein, which binds the RRE, oligomerizes, and recruits the cellular export factor CRM1 to ferry the unspliced RNA out of the nucleus into the cytoplasm. In our vector system, Rev is supplied in trans from the packaging plasmid (or its own separate plasmid in the splittest third-generation systems). The RRE has to stay on the transfer plasmid as a cis element, because Rev needs something on the vector RNA to bind. If you accidentally delete the RRE from your transfer plasmid, your full-length vector RNA gets stuck in the nucleus and your titer collapses.

Next, in the middle of the vector, you'll often see a small element called the **central polypurine tract, cPPT**. This is a sequence that, during reverse transcription inside the target cell, serves as a second priming site for plus-strand DNA synthesis, generating a triple-stranded "DNA flap" in the middle of the vector DNA. That flap helps the pre-integration complex enter the nucleus and improves transduction efficiency, particularly in non-dividing cells, by something like 2- to 5-fold. The cPPT is short, maybe 100 base pairs, and it costs you nothing to include, so essentially every modern third-generation transfer plasmid has it.

Now you reach the **internal promoter and the transgene**. This is where you, the experimenter, make most of your choices. The internal promoter is whatever you want to use to drive expression of your gene of interest inside the target cell. Common choices include CMV (strong, ubiquitous, but can silence over time in some cell types), EF1α (strong, more stable in stem cells), PGK (moderate strength, very stable), CAG (a strong synthetic hybrid), or any number of tissue-specific promoters if you want expression restricted to, say, neurons or hepatocytes. Downstream of the internal promoter sits your transgene — a cDNA, a CAR construct, a Cas9 cassette, an shRNA, a guide RNA, whatever the experiment calls for. The size of this region is limited by the overall cargo capacity of the lentivirus, which is around 8 to 10 kilobases of total vector length between LTRs.

After the transgene, you very often see the **WPRE — woodchuck hepatitis virus posttranscriptional regulatory element**. WPRE is a roughly 600-base-pair sequence from the woodchuck hepatitis virus that, when placed in the 3' UTR of an mRNA, enhances expression severalfold by stabilizing the transcript, promoting polyadenylation, and improving nuclear export. It's a free expression boost. There is some discussion in the field about a small open reading frame within WPRE that might encode a fragment of the woodchuck X protein, and most modern vectors use a mutated WPRE that disables that ORF as a precaution. But WPRE in some form is essentially standard.

Then the **3' LTR**, which in a self-inactivating vector — and every modern vector is self-inactivating — has had its U3 region largely deleted. We'll talk about SIN vectors in detail in Segment 7. The headline is that during reverse transcription, the U3 from the 3' LTR gets copied to both ends of the integrated provirus. So if you delete U3 from the 3' LTR, both LTRs of the integrated provirus end up with the deletion. The viral promoter and enhancer are gone. The integrated vector cannot transcribe itself from its own LTRs, and crucially, those LTRs cannot reach over and activate nearby cellular genes — which dramatically reduces insertional mutagenesis risk.

Finally, outside the LTRs, the transfer plasmid has the usual bacterial backbone — an _E. coli_ origin of replication, an ampicillin or kanamycin resistance gene — so you can grow the plasmid in bacteria and prep it by maxiprep before transfection. That backbone never ends up in the virion; it's only there for you, the cloner.

\[Pause.\]

Let me give you the mnemonic. Inside the LTRs, on your transfer plasmid, you have, in order: **psi, RRE, cPPT, promoter, transgene, WPRE**. If you remember those six elements, you remember the entire transfer plasmid. Psi gets it packaged. RRE gets the unspliced RNA out of the nucleus. cPPT helps it get into the target cell nucleus. The promoter drives your gene. WPRE boosts expression. Six elements. Stamp them onto your memory.

---

## SEGMENT 5 — Pseudotyping: VSV-G for broad tropism, alternatives for targeted delivery

We come back to the envelope plasmid. Wild-type HIV uses gp120/gp41, which engage CD4 and CCR5 or CXCR4, which means wild-type HIV only enters helper T cells and a handful of related cell types. For a research tool, and for most gene therapy applications, that tropism is wildly too narrow. We need to expand it.

The trick we use is called **pseudotyping**. We swap HIV's natural envelope for the envelope of a completely different virus, one with a broader tropism. The lentiviral core proteins still build the particle. The capsid still contains the reverse transcriptase and integrase and the vector RNA. But the outside of the particle, the spike protein that recognizes the target cell, comes from a different organism entirely.

Think of it as swapping the door key. The chassis is the same — the lentiviral van — but the key in the ignition is now from a different car. That key opens different doors.

The default, the workhorse, the envelope that is on probably 90 percent of all lentiviral vectors ever produced, is **VSV-G** — the G protein of vesicular stomatitis virus. VSV is a rhabdovirus that infects livestock, particularly cattle and pigs. Its G glycoprotein binds the LDL receptor and a couple of related LDL receptor family members, which are present on essentially every mammalian cell. So a VSV-G-pseudotyped lentivirus can infect human cells, mouse cells, rat cells, pig cells, dog cells; it can infect epithelial cells, fibroblasts, neurons, hematopoietic cells, hepatocytes; it works across a huge range of tissues and species. It is the closest thing biology has to a universal door key.

VSV-G also has a second extremely useful property — it is mechanically robust. VSV-G-pseudotyped lentivirus survives ultracentrifugation at 50,000 g for two hours, which means you can concentrate it 100-fold to make high-titer stocks. HIV's native gp120 falls apart under those conditions. So pseudotyping with VSV-G doesn't just expand tropism; it makes the particle physically tougher and lets you produce concentrated stocks.

There are some drawbacks. VSV-G is mildly cytotoxic to producer cells when expressed at high levels, which is why we usually keep it on a separate plasmid that the producer cell only sees for a few days during transient transfection. VSV-G is also a target of complement-mediated lysis in human serum, which means VSV-G-pseudotyped vectors don't survive intravenous injection particularly well — they're attacked by complement before they reach their target. For most ex vivo applications, where the vector and the cells are mixed in a dish, this doesn't matter. For in vivo applications, it can be limiting.

\[Pause.\]

There are alternatives, and the choice of alternative envelope is essentially the choice of tropism. Let me give you a few.

**RD114** is the envelope from a feline endogenous retrovirus. It binds the human ASCT2 amino acid transporter, which is well expressed on hematopoietic cells, particularly T cells and CD34+ stem cells. RD114-pseudotyped lentivirus is sometimes preferred for CAR-T or hematopoietic stem cell applications because it can give better transduction of those targets with less toxicity than VSV-G.

**BaEV**, the baboon endogenous retrovirus envelope, binds the ASCT1 and ASCT2 transporters and has emerged as a strong option for transducing primary human B cells and T cells. There are reports that BaEV pseudotyping gives 10-fold better transduction of resting human T cells than VSV-G, which is a big deal for CAR-T manufacturing.

**Rabies G** envelope confers tropism for neurons, and rabies-pseudotyped lentivirus is used in neuroscience for retrograde tracing experiments — you inject the virus at the axon terminal and it travels backwards to the cell body, transducing the upstream neuron.

**Measles H/F** envelope, with mutations that ablate binding to the natural measles receptors, can be re-targeted by fusing single-chain antibodies onto the H protein. This lets you build lentivirus that only enters cells displaying a specific surface marker — for instance, a lentivirus that only enters CD20+ B cells.

This last category — engineered envelopes for targeted delivery — is a frontier we'll come back to in Segment 18. For now, the takeaway is: the envelope plasmid is a swap-out option. Pick VSV-G if you want broad tropism and you're working in a dish. Pick an alternative if your target cell needs it or if you're trying to do in vivo work where complement is an issue.

\[Pause.\]

---

## SEGMENT 6 — Generations of lentiviral vector: 1st through 3rd, the safety improvements

The lentiviral vector field has gone through three named generations, and you will see all three referenced in the literature, but only second- and third-generation systems are in common use today. Let me walk you through the progression, because it's a beautiful case study in iterative engineering for safety.

**First-generation lentiviral vectors**, developed in the mid-1990s by Didier Trono and Inder Verma and their groups, used a packaging plasmid that contained essentially the entire HIV genome _except_ for the env gene and the packaging signal psi. So you had _gag_, _pol_, _tat_, _rev_, and all six accessory genes — _nef_, _vif_, _vpr_, _vpu_, plus tat and rev — all on one big plasmid. The envelope came from a separate envelope plasmid (typically VSV-G even back then). The transfer plasmid had psi and the transgene.

This worked. It produced virus. It transduced cells. But from a safety standpoint, it was uncomfortable. The packaging plasmid had so many HIV genes on it that a single recombination event between the packaging plasmid and the transfer plasmid could potentially reconstitute something close to wild-type HIV. The accessory genes also did nothing useful for producing vector but had every potential to do damage if they ended up in a patient. First-generation vectors were a proof of concept, but they were never going to be acceptable for the clinic.

**Second-generation lentiviral vectors**, in the late 1990s, stripped out the accessory genes. The second-generation packaging plasmid contains only _gag_, _pol_, _tat_, and _rev_. Nef, vif, vpr, vpu are deleted. This is a meaningful improvement, because the accessory genes are the parts of HIV that exist specifically to fight the host immune system, and removing them removes most of HIV's pathogenic potential. The transfer plasmid in a second-generation system still uses wild-type HIV LTRs at both ends, so transcription is Tat-dependent — which is why _tat_ is still on the packaging plasmid.

Second-generation vectors are still in use today, particularly in research labs that don't need clinical-grade safety. They are simpler to produce — fewer plasmids — and the titers can be a bit higher. But they retain Tat, which is itself a mildly pathogenic protein — it can be released from cells and has effects on bystander neurons, for instance — and that's enough of a concern to push clinical applications to the next generation.

**Third-generation lentiviral vectors**, around 2000, made two further improvements. First, _tat_ was deleted entirely from the packaging plasmid. To make this work, the 5' LTR of the transfer plasmid had to be replaced with a Tat-independent promoter — typically RSV or CMV in U3 — because the wild-type LTR can't transcribe without Tat. Second, _rev_ was split off onto its own separate plasmid. So third-generation systems are usually four plasmids: packaging (gag-pol only), rev, envelope, and transfer.

The result is that no plasmid in a third-generation system has more than two viral genes on it. To reconstitute a replication-competent lentivirus you would need multiple recombination events between non-overlapping plasmids in the same cell, all of which would have to preserve gene function. This is, by current understanding, essentially impossible. The FDA has accepted third-generation lentiviral vectors as the safety floor for clinical applications, and every approved lentiviral gene therapy uses a third-generation system.

\[Pause.\]

So when you read a paper or a vector catalog and you see "second-generation" or "third-generation lentivirus," what they're telling you is: how aggressively have the viral genes been split and stripped. Third-generation is the gold standard for safety. Second-generation is acceptable for research. First-generation is a historical curiosity that nobody runs anymore.

Bundled with the generations, almost always, is a second safety feature called the **SIN modification** — self-inactivating LTRs — which we're going to look at in detail in the next segment. SIN is technically orthogonal to the generation, but in practice every clinical-grade lentiviral vector is third-generation _and_ SIN. They are bolted together. When somebody hands you a modern lentiviral transfer plasmid, assume it's third-generation SIN unless they tell you otherwise.

---

## SEGMENT 7 — SIN (self-inactivating) lentiviral vectors: design, deletion, what it solves

The self-inactivating, or SIN, modification is one of those engineering ideas that, once you understand reverse transcription, you slap your forehead and say "of course." Let me set up the problem first.

In wild-type HIV — and in first- and second-generation lentiviral vectors — both LTRs of the integrated provirus contain a fully functional U3 region. U3 carries the viral promoter and enhancer. After integration, this means the provirus has a strong transcriptional unit at each end. The 5' LTR drives transcription of the viral genome itself, which is what HIV wants. But the LTR is a powerful enhancer, and enhancers don't care which direction they're facing. An LTR sitting in a chromosome can reach over, sometimes tens or even hundreds of kilobases away, and switch on a neighboring cellular gene. If the neighboring gene happens to be a proto-oncogene, you have just created a cancer cell.

This is not a theoretical concern. It is exactly what killed four boys in the SCID-X1 gammaretroviral gene therapy trial. The gammaretroviral LTRs had powerful enhancers in their U3 regions, and in several patients the vector landed near _LMO2_, a T-cell oncogene, and the U3 enhancer switched LMO2 on. T-cell leukemia followed within a couple of years of treatment.

The SIN solution is elegant. We delete the enhancer and promoter from the U3 region of the **3' LTR** on the transfer plasmid. Just the 3' LTR. Leave the 5' LTR alone, because the 5' LTR is what drives production of the vector RNA in the producer cell, and we still need that. So in the producer cell, the 5' LTR is fully functional, full-length vector RNA gets made, packaged, and shipped out.

Now follow what happens during reverse transcription inside the target cell. As we covered in the retrovirus lecture, reverse transcription generates the integrated provirus's LTRs in a peculiar way — the U3 of the 5' LTR of the provirus actually comes from the U3 of the 3' LTR of the input RNA. Both LTRs of the integrated provirus end up with the same U3 sequence, copied from the 3' end of the input RNA. So if we deleted U3 from the 3' LTR of the transfer plasmid, _both_ LTRs of the integrated provirus end up with that deletion. Both LTRs lose their promoter and enhancer.

This means:

One, the integrated provirus cannot transcribe itself from its own LTRs anymore. If you want to express your transgene, you have to do it from an internal promoter that you put on the transfer plasmid between the LTRs. This is fine — we were going to use an internal promoter anyway, because internal promoters give you cell-type-specific control that LTRs don't.

Two, and this is the safety payoff, the LTRs of the integrated provirus cannot reach over and switch on neighboring cellular genes. The enhancer is gone. The risk of insertional activation of a nearby proto-oncogene drops dramatically.

\[Pause.\]

SIN vectors have been the standard for both lentivirus and the few remaining gammaretroviral vectors since the early 2000s. Every clinical-grade lentivirus today is SIN. When you read about a "third-generation SIN lentiviral vector," that's what you're reading about — third-generation in terms of plasmid splitting, SIN in terms of LTR enhancer deletion. Two layers of safety, both built into the design.

There is a small cost to going SIN. Without LTR-driven transcription, you depend entirely on an internal promoter, and choosing the right internal promoter for your application matters more than it would in a non-SIN system. Some internal promoters silence over time in some cell types, particularly hematopoietic stem cells, which is why a lot of work has gone into finding promoters that stay on long-term — EF1α, PGK, and increasingly cell-type-specific elements derived from human genes like the WAS promoter for hematopoietic applications.

But the safety improvement is substantial, and it's universally adopted. SIN is non-optional.

---

## SEGMENT 8 — Production protocol: HEK293T transfection, harvest, ultracentrifugation

Alright. Let's go into the lab. You've designed your transfer plasmid, you have it as a maxiprep at high concentration, you have the packaging plasmid and the rev plasmid and the VSV-G envelope plasmid from your institution's core or from a repository like Addgene. You want to make lentivirus. What do you actually do?

Here's the standard protocol, more or less universal across academic labs. I'll give you the version on a 10 cm dish; everything scales.

**Day minus one.** Seed HEK293T cells in a 10 cm dish so that they'll be about 70 to 80 percent confluent the next morning. For most labs this is around 3.8 to 5 million cells per dish, in 10 mL of DMEM with 10 percent fetal bovine serum, no antibiotics in this medium because antibiotics can interfere with transfection efficiency. Put them in the 37 degree incubator overnight.

**Day zero — transfection.** The next morning, you mix your three (or four) plasmids in a tube with a transfection reagent. The two common reagents are calcium phosphate, which is dirt cheap and works well but is finicky about pH, and polyethyleneimine, PEI, which is more forgiving and more reproducible. Some labs use commercial reagents like Lipofectamine. The recipe Addgene publishes for a 10 cm plate with PEI uses roughly 1.3 picomoles of packaging plasmid, 0.72 picomoles of envelope plasmid, and 1.64 picomoles of transfer plasmid — so roughly equimolar with a small excess of transfer plasmid. You dilute the DNA in 500 microliters of serum-free medium, dilute PEI separately at a 1:3 DNA-to-PEI mass ratio in another 500 microliters, mix the two together, let it sit for 15 minutes while the PEI-DNA complexes form, then add the whole mixture dropwise to the cells. Some protocols add chloroquine at 25 micromolar at this point, which helps escape from endosomes after the complexes are internalized.

The 293T cells, sitting in a fresh dish, get covered with PEI-DNA complexes, internalize them by endocytosis, and over the next several hours the DNA gets into the nuclei. Because the plasmids contain an SV40 origin of replication and the 293Ts express T antigen, the plasmids actually amplify episomally in the nucleus — you can end up with thousands of plasmid copies per cell. That's why 293Ts are such a productive cell line.

By the next morning, the cells are expressing Gag, Pol, Env, Rev — and the transfer plasmid is producing full-length vector RNA. Inside the cytoplasm, Gag oligomerizes at the plasma membrane, recruits two copies of vector RNA via psi-NC interactions, recruits Gag-Pol, and starts to bud. The envelope glycoprotein, having trafficked through the ER and Golgi, sits in the plasma membrane and gets incorporated into the budding particles. Particles bud off into the medium. The medium fills up with virus over the next two to three days.

**Day one to three — harvest.** Most protocols collect the supernatant at 48 hours, 72 hours, and sometimes 96 hours post-transfection. You can pool the harvests or keep them separate. Some labs collect once at 48 hours and call it good; some collect multiple times and pool for maximum yield. Either way, the harvested supernatant gets a low-speed centrifugation, about 2100 g for 5 minutes, to pellet any cells or large debris, and then it's filtered through a 0.45 micron filter — _polyethersulfone_ filters, PES, not nitrocellulose, because nitrocellulose can adsorb and lose virus.

At this point you have a crude viral supernatant. It contains your lentivirus particles at a concentration of about 10^6 to 10^7 transducing units per mL, plus a lot of other stuff — secreted proteins, serum components, cellular debris. For some applications, particularly transducing a robust cell line like HEK293 or HeLa in a dish, you can use the crude supernatant directly. You add it to your target cells, add a polycation like polybrene at about 8 micrograms per mL to neutralize charge repulsion between the virus and the cell surface, and incubate for 6 to 24 hours.

**Day three or four — concentration.** For more demanding applications — primary cells, in vivo injection, low-MOI experiments — you'll concentrate the virus. The standard method is **ultracentrifugation** at about 50,000 g for two hours at 4 degrees. The virus pellets at the bottom of the tube; you decant the supernatant; you resuspend the pellet in a small volume — say, 100 microliters — of buffer. You have just concentrated your virus 100-fold or more. VSV-G-pseudotyped lentivirus tolerates this beautifully. If you sucrose-cushion the centrifugation, you also get rid of a lot of contaminating protein.

There are gentler concentration methods — tangential flow filtration, anion-exchange chromatography, PEG precipitation — that scale up better and that you'll see in manufacturing settings. For an academic lab making lentivirus for an experiment, ultracentrifugation is what most people use.

**Storage.** Aliquot, snap-freeze in liquid nitrogen, store at minus 80. Lentivirus is reasonably stable frozen — you'll lose maybe half a log of titer per year — but freeze-thaw cycles are toxic, so make small aliquots that you use once.

\[Pause.\]

A few practical notes. Lentivirus production is done in **Biosafety Level 2 with enhanced practices**, sometimes called BSL-2+. The work happens in a Class II biosafety cabinet. Everything that touches virus gets bleached or autoclaved. The reasoning is that, although third-generation SIN lentivirus is genuinely safe in principle, you still have an integrating viral vector that contains a human-tropic envelope. A needlestick or a splash to mucous membranes could conceivably transduce your cells. The probability of harm is very low — the vector cannot replicate, the transgene is unlikely to be doing anything you'd notice — but you treat it with respect.

Also: VSV-G is toxic to producer cells. If you express it constitutively, the 293Ts die. This is why we put it on a separate plasmid and use transient transfection — the cells only have to tolerate VSV-G for the few days during production. Stable packaging cell lines that constitutively express Gag-Pol are common, but stable packaging lines for full lentivirus are harder because of the VSV-G toxicity. Some commercial lines use inducible VSV-G expression to get around this.

---

## SEGMENT 9 — Titering: qPCR, p24 ELISA, functional infectious units

You have a tube of virus. The question is: how much virus is in the tube?

There are three common ways to measure lentiviral titer, and they measure subtly different things. You need to know which one you have, because they don't agree with each other and the units aren't interchangeable.

**Method one: p24 ELISA.** The capsid protein of HIV-1, called p24 because it's roughly 24 kilodaltons, is the most abundant viral protein in a lentivirus particle. There are about 2000 to 5000 p24 monomers per particle. You can detect p24 with a sandwich ELISA — a 96-well plate coated with an anti-p24 antibody, virus added, washed, then a second labeled anti-p24 antibody, washed, then chromogenic substrate. Read the plate, compare to a standard curve of purified p24, and you get a quantitative readout of how much p24 is in your sample, which back-calculates to the number of physical particles.

p24 ELISA tells you about **total particles**. It does not tell you about functional particles. Many of the particles in a lentivirus prep are non-infectious — they might be missing envelope, missing genome, partially assembled, damaged by storage. A typical lentivirus prep has a particle-to-infectivity ratio of around 100 to 1000, meaning for every functional virion you have hundreds of non-functional ones. p24 ELISA counts both. It overestimates effective titer.

**Method two: qPCR for integrated provirus.** This is the gold-standard functional titer for many applications. You transduce a known number of target cells — typically HeLa or HEK293 — with a serial dilution of your virus prep. You wait 72 hours, long enough for any unintegrated DNA to be diluted out by cell division. You harvest genomic DNA. You run qPCR on the genomic DNA using primers specific for the vector (often targeting the WPRE or psi region) and a reference primer for a single-copy host gene like RPP30 or albumin. The ratio gives you the number of integrated vector copies per cell, and combined with the dilution factor and cell number, you can back-calculate **transducing units per mL**.

qPCR-based titering measures functional integration events. It's the most relevant measure for most applications. It's also more work than p24 — requires a qPCR setup, primers, standards — but it's what you'll see in modern manuscripts.

**Method three: functional titer by fluorescence or selection.** If your transfer plasmid encodes a fluorescent reporter — GFP, mCherry, whatever — you can titer by flow cytometry. Transduce a serial dilution into target cells, wait 72 hours, run on a flow cytometer, count the fraction of cells that are reporter-positive. At low MOIs, where each cell gets either zero or one integration event, the fraction of positive cells multiplied by the number of cells you transduced equals the number of transducing units in the volume of virus you used. This gives you a beautiful functional titer in units of **transducing units per mL** or **GFP-forming units per mL**.

If you don't have a fluorescent reporter, but you have a selection marker like puromycin resistance, you can do the same thing with antibiotic selection — transduce dilutions, select with puromycin, count surviving colonies. This is slower than flow but works on any vector with a selectable marker.

\[Pause.\]

The three methods give you different numbers. A typical research-grade lentivirus prep might give you:

- p24 ELISA: 10^9 to 10^10 particles per mL
- qPCR titer: 10^7 to 10^8 transducing units per mL
- Flow titer: 10^7 to 10^8 GFP-forming units per mL

The qPCR and flow numbers tend to agree within a factor of two or three. The p24 number is typically two to three logs higher, reflecting the particle-to-infectivity ratio.

For an experiment, what you want is **functional titer** — qPCR or flow — and you want to plan your MOI (multiplicity of infection) from that number. MOI is the ratio of transducing units to target cells. For most applications you want MOI between 0.1 and 10, with 1 to 3 being typical. Low MOI minimizes multiple integrations per cell, which matters if you're doing things like CRISPR screens where you want one guide RNA per cell. High MOI maximizes transduction efficiency at the cost of more integrations per cell.

Concentrated lentivirus stocks — after ultracentrifugation — can reach 10^8 to 10^9 transducing units per mL, which is enough for most demanding applications including primary T cell transduction, hematopoietic stem cell transduction, and in vivo injection in mouse models.

---

\[BREAK\]

---

## SEGMENT 10 — Integration site preferences: bias toward gene bodies, the LEDGF connection

We've talked about how lentivirus gets into a cell, how the genome gets reverse-transcribed, how the pre-integration complex gets into the nucleus, and how it integrates. The question for this segment is: _where_, in the host genome, does it integrate?

The naive answer would be "randomly." Three billion base pairs of human genome, integrase picks a spot, splices in. That would be lovely from a safety standpoint, because the chance of disrupting an important gene would be small — only about 2 percent of the human genome is exonic. But the reality is, lentiviral integration is not random. It's strongly biased. And the nature of that bias has both safety implications and a beautiful mechanistic story.

Here's the bias. Lentivirus, including HIV, integrates **preferentially into the body of actively transcribed genes**. Not at the promoter. Not in the 5' UTR. Inside the gene, somewhere in the introns or exons of the transcribed unit. Genome-wide integration site mapping studies, using high-throughput sequencing of integration junctions, have shown that something like 75 percent of lentiviral integrations land within active gene bodies, even though active gene bodies are only about 30 percent of the genome. That's a strong enrichment.

Now compare gammaretrovirus. Gammaretroviral integration is also non-random, but it has a _different_ bias — gammaretrovirus integrates preferentially near transcription start sites and active enhancers. So a gammaretroviral vector lands at the front door of a gene, right next to the promoter, where its own enhancer can reach over and activate the host gene. That's exactly the configuration that caused the SCID-X1 leukemias — gammaretroviral LTRs landed near LMO2's promoter and switched it on.

Lentivirus lands in the middle of the gene, not at the promoter. The integrated provirus is sitting inside an intron, surrounded by transcribed sequence. From an insertional mutagenesis standpoint this is gentler — it's harder for an LTR enhancer (and remember, in SIN vectors there isn't much enhancer activity to begin with) to reach back and activate a promoter several kilobases upstream. The risk is not zero, but it is meaningfully lower than gammaretrovirus.

\[Pause.\]

Why does lentivirus prefer gene bodies? The answer is one of the most satisfying molecular stories in retrovirology — a host factor called **LEDGF/p75**.

LEDGF — lens epithelium-derived growth factor, p75 splice form — is a cellular chromatin-binding protein. Its normal job involves binding active chromatin and helping with transcription. It binds histone modifications associated with actively transcribed gene bodies, particularly H3K36me3, which is the canonical mark of transcribed regions. So LEDGF is, by its biology, draped across active gene bodies in the nucleus.

It turns out that LEDGF also has a high-affinity binding site for HIV integrase. The integrase catalytic core domain has a pocket that LEDGF inserts into, with a binding affinity in the nanomolar range. So when the lentiviral pre-integration complex enters the nucleus, integrase is grabbed by LEDGF, and LEDGF, which is sitting on active gene bodies, presents the integrase to that chromatin. Integration happens where LEDGF is, and LEDGF is on active genes.

This was demonstrated definitively about fifteen years ago. Knock LEDGF out of a cell, and lentiviral integration loses its gene-body bias — it becomes much more random. Reconstitute LEDGF, and the bias returns. The mechanism is settled: LEDGF is the tether that targets lentiviral integration to active genes.

This story has spawned a small but interesting drug class — **LEDGINs** — small molecules that bind the LEDGF-binding pocket on integrase and compete with LEDGF. LEDGINs are being studied both as anti-HIV drugs and as research tools, but for our purposes the relevant question is: can we use this to make lentiviral vectors _safer_, by redirecting integration to safer sites?

There are research-stage efforts to do exactly this. You can engineer fusion proteins where LEDGF's chromatin-binding domain is replaced by a different DNA-binding domain — say, a zinc finger that targets a specific safe-harbor locus like AAVS1 — and use that fusion to retarget lentiviral integration. The efficiency isn't yet high enough for clinical use, but it's an active frontier. We'll come back to integration retargeting in Segment 18.

The headline for now: lentivirus lands in gene bodies because LEDGF tethers integrase to active chromatin. This bias is part of why lentivirus is safer than gammaretrovirus for clinical use, and it's also part of why we're not yet at zero insertional risk.

---

## SEGMENT 11 — CAR-T cell manufacturing: the killer app

If you want to know why lentivirus matters, look at CAR-T.

Chimeric antigen receptor T cell therapy — CAR-T — is the success story that has driven essentially the entire recent expansion of cell and gene therapy. The principle: you take a patient's own T cells, engineer them to express a synthetic receptor that recognizes a tumor antigen, expand them in culture, and infuse them back into the patient. The engineered T cells hunt down the tumor and kill it. The first CAR-T to be FDA-approved, in 2017, was tisagenlecleucel — brand name **Kymriah** — for relapsed pediatric and young adult B-cell acute lymphoblastic leukemia. Response rates in patients who had failed every other therapy were on the order of 80 percent. It was a watershed moment for cancer immunotherapy.

Kymriah is a lentivirus product. The chimeric antigen receptor — an extracellular single-chain antibody fragment against CD19, fused through a transmembrane domain to intracellular CD3-zeta and 4-1BB signaling domains — is delivered to the patient's T cells using a third-generation SIN lentiviral vector. The integration is permanent. The engineered T cells, once infused, persist in the patient's body for years, sometimes decades, with the CAR gene integrated into their chromosomes.

The four FDA-approved CD19 CAR-T products — Kymriah, Yescarta, Tecartus, Breyanzi — are split between lentivirus and gammaretrovirus delivery. Kymriah, Tecartus, and Breyanzi are lentiviral. Yescarta is gammaretroviral. The choice between the two reflects historical decisions by the developing companies, and there are arguments either way about manufacturing efficiency and safety, but the field is increasingly moving toward lentivirus for new CAR programs. For the more recent BCMA-directed CAR-T products targeting multiple myeloma — Abecma, Carvykti — lentivirus is the default.

\[Pause.\]

Let me walk you through the manufacturing process, because it's a beautiful example of how a research-scale lentivirus protocol gets industrialized.

Step one. A patient with relapsed leukemia comes to a treating hospital. They undergo **leukapheresis** — a procedure where the patient is hooked up to a machine that draws blood, separates out the white blood cells, and returns red cells and plasma. The collected white cells are enriched for T cells, frozen, and shipped to a centralized manufacturing facility.

Step two. At the manufacturing facility, the T cells are thawed, washed, and activated. Activation typically uses beads coated with antibodies against CD3 and CD28 — the cells get engaged by these beads as if they were seeing antigen, and they enter the cell cycle and start to proliferate. Activation matters because it improves transduction efficiency — activated, proliferating T cells take up lentivirus more efficiently than resting cells, even though lentivirus can technically transduce resting cells too.

Step three. The activated T cells are mixed with the CAR lentivirus. Typical MOI is in the range of 1 to 5. The transduction happens in a culture bag or bioreactor over 24 to 48 hours. Polycations like protamine sulfate or vectofusin may be added to enhance transduction. By the end of this step, somewhere between 20 and 70 percent of the T cells have a CAR integrated into their genome, depending on the protocol.

Step four. The transduced T cells are expanded over the next 7 to 12 days in a bioreactor, in medium containing IL-2 and sometimes IL-7 and IL-15. They proliferate to clinically useful numbers — the typical Kymriah infusion is around 0.2 to 5 million CAR-positive T cells per kilogram of patient weight, so for a 70-kilogram patient you need to make tens to hundreds of millions of CAR-T cells.

Step five. The expanded cells are harvested, washed, formulated in cryopreservation medium, frozen, and shipped back to the treating hospital. Total manufacturing time from leukapheresis to shipped product is typically two to four weeks — the so-called "vein-to-vein" time.

Step six. At the hospital, the patient receives lymphodepletion — usually a regimen of fludarabine and cyclophosphamide — to make space in the immune compartment for the incoming CAR-T cells. Then the CAR-T product is thawed and infused. Over the next days to weeks, the CAR-T cells expand in the patient, find the tumor, and start killing. Response is often dramatic. Side effects — cytokine release syndrome, neurotoxicity — can be severe and need management in an ICU, but the underlying disease is often cleared.

\[Pause.\]

For our purposes, the takeaway is: the entire CAR-T industry runs on lentivirus production at industrial scale. A single batch of clinical lentivirus might be produced from 200 liters of HEK293T cells in a stirred-tank bioreactor, transfected with the four-plasmid system using PEI, harvested over three days, clarified, concentrated by tangential flow filtration, polished by anion exchange chromatography, formulated, and quality-controlled with the full battery of tests — qPCR titer, p24 ELISA, residual host cell DNA, residual benzonase, sterility, replication-competent lentivirus testing — before being released for use.

The replication-competent lentivirus, RCL, testing is worth a note. Even though third-generation SIN vectors are designed so RCL is impossible, every batch of clinical lentivirus is tested for it. The assay involves passaging samples of the vector on C8166 cells, a permissive T cell line, for several weeks and looking for any sign of replicating virus. In the modern era of third-generation systems, RCL has essentially never been detected in clinical batches. The testing remains as belt-and-suspenders regulatory practice.

CAR-T is the killer app. It's why lentivirus manufacturing capacity has expanded so dramatically over the last decade. It's why companies you've never heard of — Lentigen, Oxford Biomedica, Lonza — have built businesses worth billions of dollars just supplying clinical-grade lentivirus to CAR-T developers. And it's why, when you read about a new approved cancer immunotherapy, there's a very good chance lentivirus is doing the gene delivery underneath.

---

## SEGMENT 12 — Hematopoietic stem cell gene therapy: Strimvelis, Zynteglo, Skysona

The second great clinical use of lentivirus is for ex vivo gene therapy of hematopoietic stem cells — HSCs. The principle is similar to CAR-T but the target cell is different. You collect CD34-positive hematopoietic stem and progenitor cells from a patient's bone marrow or mobilized peripheral blood, transduce them in a dish with a lentivirus carrying a therapeutic gene, and infuse them back. The transduced HSCs engraft in the patient's bone marrow, where they proliferate and differentiate over the rest of the patient's life, giving rise to all the blood lineages. Because the lentiviral integration is permanent and the HSC is the long-term repopulating cell of the hematopoietic system, the therapeutic gene is expressed in every blood cell the patient makes for the rest of their life.

Let me walk you through the major approved products.

**Strimvelis**, approved in Europe in 2016, treats ADA-SCID — adenosine deaminase deficiency, severe combined immunodeficiency. Patients are born without a working copy of the ADA enzyme, which is essential for purine metabolism, and the toxic metabolites that accumulate kill developing lymphocytes. Without treatment, the children die in infancy from infections. Strimvelis takes the patient's own bone marrow CD34+ cells, transduces them with a gammaretroviral vector carrying functional ADA — Strimvelis is actually one of the last gammaretroviral products in clinical use; the lentiviral successor, Libmeldy's cousin, is in development — and infuses them back. The corrected stem cells produce functional ADA, the immune system reconstitutes, and the disease is effectively cured.

I mention Strimvelis because it's the proof-of-principle for the whole HSC gene therapy approach, even though it's gammaretroviral. The lentiviral products that follow it use the same workflow.

**Zynteglo**, approved by the FDA in 2022, treats transfusion-dependent beta-thalassemia. Patients with beta-thalassemia don't make functional beta-globin, the protein subunit of adult hemoglobin, and they need lifelong blood transfusions. Zynteglo uses a lentiviral vector — the BB305 vector — to deliver a functional beta-globin gene (specifically a modified version called βA-T87Q) into the patient's HSCs. Transduced HSCs engraft and produce functional hemoglobin. Most patients become transfusion-independent. The price tag is steep — $2.8 million per patient — reflecting the manufacturing complexity and the one-time nature of the treatment.

**Skysona**, approved 2022, treats cerebral adrenoleukodystrophy, CALD, a devastating X-linked metabolic disease that causes progressive neurologic deterioration in young boys. Skysona uses the Lenti-D vector to deliver functional ABCD1 to patients' HSCs. The transduced cells differentiate into brain-resident myeloid cells — microglia — that supply functional ABCD1 protein to the brain and arrest disease progression. The clinical results in early-stage patients have been striking.

**Libmeldy**, approved in Europe, treats metachromatic leukodystrophy. **Lenmeldy** is the equivalent under a different name. These products use lentiviral vectors to deliver functional arylsulfatase A to patients' HSCs, with the corrected cells then supplying the enzyme to the central nervous system via cross-correction.

All four — Zynteglo, Skysona, Libmeldy, Lenmeldy — are lentiviral. All four use the same ex vivo workflow: collect HSCs, transduce in a dish, condition the patient with chemotherapy to make space in the bone marrow, infuse the corrected cells, and rely on lifelong engraftment.

\[Pause.\]

Now, one notable absence. **Casgevy**, the recently approved sickle cell disease gene therapy, is _not_ lentiviral. Casgevy uses CRISPR-Cas9 delivered as ribonucleoprotein by electroporation to edit a regulatory site in the BCL11A gene, derepressing fetal hemoglobin. It's an ex vivo CRISPR edit, not a lentiviral gene addition. The other approved sickle cell therapy from bluebird bio, **Lyfgenia**, _is_ lentiviral — it uses a lentivirus to add a modified anti-sickling beta-globin gene.

Casgevy is interesting because it represents an alternative philosophy. For some diseases, you can solve the problem by editing existing genes rather than adding new ones, and CRISPR ribonucleoprotein delivery is a one-time, non-integrating approach. For other diseases — where you need to express a foreign or significantly modified gene, or where editing isn't feasible — lentiviral gene addition is still the right tool. The two approaches coexist and complement each other.

The point for this lecture is that ex vivo lentiviral HSC gene therapy has gone from a research curiosity twenty years ago to an approved-product reality with at least five marketed therapies. The workflow is mature. The infrastructure exists. New indications are coming. Whenever you read about a "gene therapy" for an inherited blood or immune disorder, ask whether it's ex vivo lentivirus, and the answer is almost always yes.

---

## SEGMENT 13 — Insertional mutagenesis: the residual risk, monitoring, why it's lower than gamma-retro

We've alluded to insertional mutagenesis several times. Let's take it head-on, because it's the one safety concern that fundamentally cannot be designed away from an integrating vector, and it's the concern that defines the regulatory environment around lentiviral products.

The basic mechanism. The vector integrates somewhere in the genome. If it integrates inside or near a proto-oncogene, the integration event can dysregulate that gene, either by inserting a strong promoter near it (in non-SIN vectors), by disrupting a tumor suppressor, or by disrupting normal regulatory architecture. The dysregulated cell, if it happens to also acquire a few other oncogenic hits, can become a clonal cancer. Years later, the patient develops a leukemia or lymphoma whose cells all carry the same vector integration site — proving the vector caused it.

The historical disaster was the SCID-X1 gammaretroviral trial. Eleven boys were treated, ten were cured of their immunodeficiency, and four developed T-cell leukemias. The leukemias were clonally driven by gammaretroviral integration near LMO2 and CCND2, both T-cell oncogenes. The gammaretroviral LTRs, which had powerful U3 enhancers, switched on these neighboring proto-oncogenes. Three of the four boys were salvaged with chemotherapy; one died. The trial was halted. The field went back to the drawing board.

The lessons from SCID-X1 informed everything that came next. Two design changes — SIN LTRs and the switch to lentivirus — together reduce insertional risk by something like one to two orders of magnitude. SIN LTRs remove the enhancer that does the most damage. Lentiviral integration into gene bodies rather than promoters reduces the proximity to oncogene promoters. Together, they make insertional cancer much rarer.

But not zero. There have been at least a handful of cases of insertional mutagenesis with lentiviral vectors in clinical trials. The Skysona CALD trial saw a few cases of hematologic malignancy in treated patients that may be vector-related. The cerebral ALD lentiviral vector landed in or near some oncogenes in some patients, and there's evidence that this contributed. The risk is meaningfully lower than with gammaretrovirus but it is not zero, and the field treats it with appropriate seriousness.

\[Pause.\]

Monitoring matters. Patients who receive integrating gene therapy are followed long-term — fifteen years is the FDA standard — with periodic measurements of vector copy number per cell and integration site analysis. If you see a clonal expansion of vector-positive cells, especially if multiple cells share the same integration site, that's an alarm — it suggests one transduced cell has acquired a growth advantage and is taking over. Integration-site sequencing has become a routine part of clinical follow-up for any approved integrating gene therapy product.

There are technical efforts to reduce the residual risk further. Insulator elements like the **cHS4 insulator** from the chicken beta-globin locus can be placed in the SIN-deleted U3 region to further block enhancer-promoter interactions between the vector and host genes. Integration retargeting — engineering integrase to land at safer sites — is an active research direction we'll mention in Segment 18. And for some applications, **integration-deficient lentivirus**, where integrase is mutated to be catalytically dead, can be used when you only need transient expression and want to eliminate integration risk entirely.

The bottom line: insertional mutagenesis is the price you pay for integration. Integration is the feature you want — permanent, durable gene expression — and the cost is a small but non-zero risk that one of those integration events lands in a bad place. Third-generation SIN lentivirus pays the smallest price of any integrating vector currently in clinical use. The risk is manageable. It is not gone.

---

## SEGMENT 14 — Bicistronic vectors: IRES, 2A peptides, expressing two proteins from one transcript

Often you want a lentiviral vector to express more than one protein. A CAR plus a fluorescent reporter so you can sort for transduced cells. Cas9 plus a guide RNA. A transcription factor plus a selectable marker. Two subunits of a heteromeric receptor. The cargo capacity of lentivirus is large enough to accommodate two coding sequences, but you have to arrange them so both get translated. There are two main strategies.

**IRES — internal ribosome entry site.** An IRES is a structured RNA element, usually 500 to 600 nucleotides long, that recruits ribosomes directly without needing a 5' cap. The classic IRES is from encephalomyocarditis virus, EMCV. You design a bicistronic mRNA with the first coding sequence at the 5' end, an IRES in the middle, and the second coding sequence downstream. The first ORF gets translated normally by cap-dependent scanning. The IRES recruits ribosomes to its internal site, and they initiate translation of the second ORF. Both proteins get made from one transcript.

The drawbacks of IRES: it's big — 500-600 bp eats into your cargo budget. And the second ORF usually gets translated at 10 to 20 percent of the efficiency of the first. So the stoichiometry is unbalanced. If you want roughly equal amounts of both proteins, you put the one you need less of downstream of the IRES.

**2A peptides — self-cleaving peptides.** This is the more popular modern approach. A 2A peptide is a short sequence, about 18 to 22 amino acids, derived from picornaviruses (T2A from Thosea asigna virus, P2A from porcine teschovirus, E2A, F2A from other species). The mechanism is technically not cleavage — it's a ribosomal skip. The ribosome, encountering the 2A sequence, fails to form a peptide bond between a glycine and a proline at the end of the 2A, releases the upstream protein, and continues translating the downstream protein. So you end up with two separate proteins from one ORF.

2A peptides are tiny — 60 nucleotides instead of 600 for an IRES. The stoichiometry is much more balanced — both proteins are made at near-equal levels. The upstream protein ends up with the 2A sequence appended to its C terminus, which is a few extra amino acids you have to think about for some applications. The downstream protein ends up with a single extra proline at its N terminus.

You can chain 2A peptides — P2A and T2A in sequence — to express three or even four proteins from one ORF. CAR-T constructs often use a 2A to link the CAR to a truncated EGFR or CD20 marker that allows the cells to be tracked and, if necessary, depleted with an antibody. Cas9 plus guide RNA constructs sometimes use 2A to link Cas9 to a fluorescent reporter or selection marker.

For most modern applications, 2A has replaced IRES as the default for multi-cistronic expression. IRES is still around for cases where you want very different stoichiometries, or where the upstream protein cannot tolerate a C-terminal extension. But if you're designing a new bicistronic vector today, start with a 2A.

---

## SEGMENT 15 — Inducible lentiviral systems: Tet-On, Tet-Off, the doxycycline-controlled vector

Sometimes you don't want constitutive expression. You want to be able to turn the transgene on and off — to study what happens when a protein is expressed transiently, to titrate expression level, to avoid toxicity from constitutive overexpression. The dominant tool for this is the **tetracycline-controlled system**, often called Tet-On and Tet-Off.

The basic idea, in brief. Take a synthetic transcription factor — **tetracycline transactivator, tTA** in the Tet-Off system, or **rtTA** in Tet-On — and put it under one promoter. The tTA or rtTA binds, with high affinity, to a synthetic promoter element called **TRE** — tetracycline response element — that contains seven copies of the bacterial _tet_ operator. The TRE is placed upstream of your gene of interest. Without doxycycline, tTA binds TRE and activates transcription. Add doxycycline — the small-molecule effector — and tTA falls off the DNA, and transcription stops.

That's Tet-Off. The reverse-tet transactivator, rtTA, has the opposite behavior — it only binds TRE in the presence of doxycycline. So in a Tet-On system, you add doxycycline to turn the transgene on, and the system is off by default.

In practice, Tet-On is more popular because it's easier to dose. You give the animal or the cell culture doxycycline when you want expression, and you take it away when you don't. Doxycycline is cheap, well-tolerated in mice and humans, crosses tissue barriers including into the brain, and is pharmacologically convenient.

\[Pause.\]

To put this in a lentivirus, you have a few architectural choices.

**All-in-one vectors.** Build a single lentiviral vector that contains both the rtTA expression cassette (driven by a constitutive promoter like EF1α) and the TRE-driven transgene cassette, in opposite orientations. One viral integration gives you both components. Add doxycycline, transgene turns on. The downsides are that the vector is large — sometimes pushing the cargo limit — and there can be promoter interference between the two cassettes.

**Two-vector systems.** Build two separate lentiviruses, one expressing rtTA from a constitutive promoter, one carrying the TRE-driven transgene. Co-transduce your target cells with both. This gives you more flexibility — you can mix and match different transgenes with the same rtTA-expressing vector — but it requires both viruses to land in the same cell, so transduction efficiency has to be high.

Doxycycline-inducible lentiviral systems are workhorses in basic research. If you want to study a gene whose constitutive overexpression kills the cell, you put it under TRE control, transduce, and only turn it on when you're ready to study its effect. If you want to model an oncogene that needs to be expressed transiently to initiate transformation and then turned off, you have the tool. If you want to titrate expression level by titrating doxycycline dose, you can do that — TRE shows a graded response to doxycycline concentration.

In the clinic, inducible lentiviral systems are less common but have appeared in some CAR-T programs where investigators want to be able to switch the CAR off if cytokine release syndrome gets out of hand. The engineering is more complex and adds regulatory burden, but the principle is sound and we'll see more inducible clinical vectors over time.

---

## SEGMENT 16 — Lentivirus for CRISPR screens: pooled libraries, the GeCKO and Brunello workhorses

I want to spend a segment on a use case that has transformed functional genomics: pooled CRISPR screens delivered by lentivirus.

The setup. You want to systematically test the function of every gene in the genome, or every gene in some defined subset — say, all kinases, all G-protein-coupled receptors, all transcription factors. The reagents are guide RNAs, one per gene, that direct Cas9 to cut and disable that gene. You want to introduce one guide RNA into each cell, screen the cells under some selective pressure, and figure out which guides — and therefore which gene knockouts — gave the cells a phenotype.

The delivery vehicle is lentivirus, and the form of the experiment is the **pooled library**. You synthesize tens of thousands of guide RNAs as a mixed oligonucleotide pool, clone them in a single reaction into a lentiviral transfer plasmid that carries a U6-driven guide RNA cassette plus a constitutive Cas9 (or just the guide if Cas9 is expressed separately). You package the library as a pool of lentiviral particles. You transduce a large population of target cells at low MOI — typically 0.3 to 0.5 — so that each cell gets at most one integrated guide. You select for transduced cells with puromycin or by sorting. Then you apply your selection — a drug, a pathogen, a sorting criterion — and after some weeks you sequence the guide RNAs in the surviving cells.

The guides that are enriched in the surviving cells correspond to genes whose loss confers an advantage under your selection. The guides that are depleted correspond to genes whose loss confers a disadvantage. From a single experiment you get a genome-wide map of fitness contributions.

The standard libraries — **GeCKO** (Genome-scale CRISPR Knockout) from the Zhang lab, **Brunello** from the Doench lab at the Broad — are lentiviral. They are distributed through Addgene. You can order them, package them yourself or have someone package them for you, and run a screen in any cell line that you can grow at scale.

\[Pause.\]

Why lentivirus, specifically? Three reasons. One, it integrates, so the guide RNA persists permanently in the cell and its progeny, which means you can run selections that take weeks. Two, the per-cell integration is essentially clonal at low MOI — one guide per cell — which gives you clean readouts. Three, the integrated guide can be amplified by PCR from genomic DNA at the end of the screen, sequenced, and counted, which gives you a quantitative measure of guide abundance.

Pooled CRISPR screens have become a standard tool in functional genomics. They've identified essential genes, drug-resistance pathways, host factors for viral infection (including SARS-CoV-2), immune evasion mechanisms in cancer, dependencies that distinguish tumor cells from normal cells. They are arguably the highest-throughput functional genetics methodology in current use. And underneath every one of them is a lentivirus carrying a guide RNA into a cell.

This use case is not what HIV evolved for. The fact that it works so well — that a pathogen's machinery can be repurposed at this scale, in this configuration, to do this kind of biology — is a small reminder of why the field stays excited about lentiviral vectors.

---

## SEGMENT 17 — In vivo lentiviral gene therapy: the harder problem

Almost everything we've talked about so far has been **ex vivo** — collect cells from a patient, transduce them in a dish, give them back. Ex vivo lentivirus is mature. The product is approved, the manufacturing is industrialized, the regulatory pathway is clear.

**In vivo** lentivirus — injecting the virus directly into a patient and having it transduce target cells inside the body — is harder, much less mature, and a frontier of active development. Let me explain why it's harder and what's being done.

The challenges are several. First, **complement**. VSV-G is rapidly inactivated by human serum complement. A VSV-G-pseudotyped lentivirus injected intravenously gets attacked within minutes by complement proteins and loses most of its infectivity before reaching target tissues. Pseudotyping with alternative envelopes that resist complement — like Cocal virus G or modified VSV-G variants — partly addresses this.

Second, **innate immunity**. Lentiviral particles are recognized by pattern recognition receptors, particularly TLR3, TLR7, and cytoplasmic sensors. Systemic injection triggers type I interferon responses that can both clear the vector and cause toxicity in the patient. Doses high enough to transduce useful numbers of cells can also cause cytokine release.

Third, **tropism**. VSV-G is broad-tropic, which means it tries to transduce everything — liver, spleen, lung, kidney — when you want it to transduce one specific cell population. Off-target transduction wastes vector and risks unintended consequences. Engineered envelopes for targeted in vivo delivery are an active research area.

Fourth, **scale**. A patient is much bigger than a dish of cells. To transduce, say, hematopoietic stem cells in vivo at a useful efficiency, you need vector doses that are an order of magnitude or more higher than what you'd use ex vivo. Producing clinical-grade lentivirus at those quantities is expensive and operationally demanding.

\[Pause.\]

Despite these challenges, there is real progress. A few directions to watch.

**In vivo CAR-T.** Several companies are developing approaches to deliver a CAR gene directly to T cells inside a patient's body, bypassing the ex vivo manufacturing entirely. The strategy is to pseudotype a lentivirus with an engineered envelope — usually based on cocal virus or a modified measles glycoprotein — that specifically targets CD3 or CD8 surface markers on T cells. Inject the virus, it homes to T cells, transduces them, and you have CAR-T cells generated in vivo. Companies like Umoja Biopharma and Interius BioTherapeutics are running early clinical trials with this approach. If it works, it could collapse the cost and complexity of CAR-T therapy by orders of magnitude.

**In vivo HSC transduction.** A similar concept for hematopoietic stem cells. Engineered envelopes that target CD34 or other HSC markers, delivered systemically, would allow gene therapy for diseases like sickle cell or beta-thalassemia without the ex vivo manufacturing burden. This is earlier-stage but actively researched.

**Local delivery.** For diseases of restricted anatomical compartments, you can sometimes deliver lentivirus locally and avoid systemic complement and innate immune issues. Subretinal injection for inherited retinal diseases is one example. Intracerebral injection for some neurological gene therapies is another. The blood-brain barrier protects local CNS delivery from systemic clearance.

In vivo lentivirus is where the field is going, but it's not where the field is. For now, the great majority of clinical lentivirus use is ex vivo. Watch the next decade — if engineered envelopes for in vivo targeting really come together, the application space could expand dramatically.

---

## SEGMENT 18 — Frontier: capsid engineering, integration-deficient lentivirus, retargeted envelopes

Let me close with a tour of the engineering frontier. None of what's in this segment is clinical practice today. All of it is either in late research or in early-stage clinical development, and several of these directions will shape what lentiviral vectors look like ten years from now.

**Engineered envelopes for receptor-specific entry.** The Cocal virus G protein, the modified measles H/F system, baboon endogenous retrovirus envelope — we mentioned all of these. The frontier is to engineer envelopes that bind a defined cell surface marker, like CD19 or CD8 or CD34, and exclude entry into all other cell types. Achieving the receptor specificity is the easier part — fuse a single-chain antibody to a stripped-down envelope scaffold. The harder part is preserving the conformational dynamics that drive fusion after binding. There are now several published systems that achieve this for at least one or two targets, and the catalog is expanding.

**Integration-deficient lentiviral vectors, IDLVs.** Some applications don't need integration. CRISPR-Cas9 editing, for example, needs Cas9 expressed transiently — you cut the genome, get your edit, and Cas9 going away is actually preferable. Persistent Cas9 expression risks off-target editing. So you can use a lentiviral vector with a catalytically dead integrase — a single amino acid mutation, D64V, in the integrase active site abolishes catalysis without affecting reverse transcription or nuclear import. The DNA gets to the nucleus, persists as episomes for a few cell divisions, and is lost. You get transient transgene expression, no integration, and a much-reduced risk of insertional mutagenesis. IDLVs are increasingly used for CRISPR delivery and for short-term lineage tracing experiments.

**Integration retargeting.** As we discussed, lentiviral integration is biased toward gene bodies via the LEDGF tether. By engineering integrase or by replacing LEDGF's chromatin-binding domain with a different DNA-binding domain — a zinc finger, a TAL effector, even a dCas9 — you can in principle redirect integration to specific genomic sites. Safe harbor loci like AAVS1 are the target. The efficiency isn't yet high enough for clinical use, but if it can be brought to high specificity, it would essentially eliminate insertional mutagenesis as a concern.

**Capsid engineering for improved transduction.** The HIV capsid is a beautiful and complex structure that interacts with many host factors. Cyclophilin A, CPSF6, TRIM5, restriction factors that vary across species. By engineering the capsid to alter these interactions, you can change transduction efficiency in different cell types, evade species-specific restriction, and potentially improve nuclear import. This is mostly a research-stage direction, but there are emerging clinical applications.

**Combinatorial pseudotyping.** Most lentiviral vectors are pseudotyped with one envelope. There are experimental systems that incorporate two different envelopes on the same particle — for example, one envelope that binds and one envelope that triggers fusion, allowing more sophisticated targeting logic.

**Improved manufacturing.** This is less glamorous but enormously important. Stable producer cell lines, suspension-adapted producers, scalable purification methods, lower-cost-of-goods. The economics of lentiviral gene therapy — Zynteglo at $2.8 million per dose — are unsustainable for population-scale use. Bringing the cost of clinical-grade lentivirus down by an order of magnitude would unlock applications that currently can't be afforded.

\[Pause.\]

Where does the field go from here? My prediction, for what it's worth — lentivirus stays the dominant integrating vector for the foreseeable future. AAV will continue to expand in in vivo delivery applications where integration isn't needed. CRISPR ribonucleoprotein delivery will take some applications, especially editing-based therapies. But for the core problem — permanent, durable gene addition into a cell that may not divide — there is no obvious successor to third-generation SIN lentivirus. The chassis is too good. The infrastructure is too built up. New engineering iterates within the lentiviral framework rather than displacing it.

So that's lentivirus as a vector. HIV with the dangerous parts removed and the useful parts retained. The right paperwork to cross the nuclear envelope of a resting cell. A three-plasmid production system that scatters viral functions for safety. A self-inactivating LTR architecture that solves the gammaretrovirus enhancer problem. The chassis for CAR-T, for HSC gene therapy, for CRISPR screens, for the entire integrating gene therapy enterprise. Underneath much of modern biomedicine, doing the work, is a virus that thirty years ago we were trying desperately to stop.

The judo throw is complete. The pathogen is the tool.

\[Pause.\]

---

## APPENDIX

**Glossary of key terms**

- **Lentivirus.** A genus of complex retroviruses including HIV-1, HIV-2, SIV, FIV. Defining property as a vector: can cross intact nuclear envelopes and transduce non-dividing cells.
- **Transfer plasmid.** The plasmid carrying the vector RNA — psi, RRE, cPPT, internal promoter, transgene, WPRE, between SIN LTRs.
- **Packaging plasmid.** Provides Gag-Pol proteins in trans. Third-generation: gag-pol only, no tat, no accessory genes.
- **Envelope plasmid.** Provides the surface glycoprotein. Default: VSV-G.
- **Rev plasmid.** Third-generation systems split rev onto its own plasmid for safety.
- **SIN.** Self-inactivating. U3 enhancer deletion in 3' LTR is copied to both LTRs of the integrated provirus, eliminating LTR-driven transcription.
- **Pseudotyping.** Swapping the natural envelope for one from a different virus, changing tropism.
- **VSV-G.** Glycoprotein of vesicular stomatitis virus. Binds LDL receptor. Broad tropism, mechanically robust.
- **Psi (ψ).** Packaging signal recognized by nucleocapsid domain of Gag.
- **RRE.** Rev response element. Binds Rev for nuclear export of unspliced RNA.
- **cPPT.** Central polypurine tract. Generates DNA flap, enhances nuclear import.
- **WPRE.** Woodchuck hepatitis posttranscriptional regulatory element. Enhances expression.
- **MOI.** Multiplicity of infection. Transducing units per target cell.
- **LEDGF/p75.** Cellular tether that targets lentiviral integrase to active gene bodies.
- **IDLV.** Integration-deficient lentiviral vector. Carries a catalytically dead integrase (D64V).
- **TU.** Transducing units. Functional titer measure.
- **p24.** HIV capsid protein. Measured by ELISA to estimate total particle counts.
- **RCL.** Replication-competent lentivirus. Tested for in clinical batches; essentially never detected in third-generation products.

**Suggested reading**

- Naldini L, et al. (1996). "In vivo gene delivery and stable transduction of nondividing cells by a lentiviral vector." _Science_ 272: 263. The founding lentivirus vector paper.
- Dull T, et al. (1998). "A third-generation lentivirus vector with a conditional packaging system." _J Virol_ 72: 8463.
- Zufferey R, et al. (1998). "Self-inactivating lentivirus vector for safe and efficient in vivo gene delivery." _J Virol_ 72: 9873.
- Schroder ARW, et al. (2002). "HIV-1 integration in the human genome favors active genes and local hotspots." _Cell_ 110: 521.
- Maetzig T, et al. (2011). "Gammaretroviral vectors: biology, technology and application." _Viruses_ 3: 677. For comparison.
- June CH, Sadelain M. (2018). "Chimeric antigen receptor therapy." _NEJM_ 379: 64.
- Addgene's lentivirus protocols and vector guides (addgene.org/protocols/lentivirus-production/).

**Key numbers to remember**

- Lentiviral cargo capacity: ~8-10 kb between LTRs.
- Typical research-grade unconcentrated titer: 10^6 to 10^7 TU/mL.
- Concentrated titer after ultracentrifugation: 10^8 to 10^9 TU/mL.
- Particle-to-infectivity ratio: ~100 to 1000.
- Producer cell standard: HEK293T.
- Harvest timing: 48-96 hours post-transfection.
- Integration site bias: ~75% in active gene bodies.
- Generations in clinical use: 3rd (with SIN LTRs).
- First FDA-approved lentiviral gene therapy product: Kymriah (CAR-T), 2017.

\[End of lecture script.\]

