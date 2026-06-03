# Mass Spectrometry for Proteomics — Weighing Every Molecule in the Cell

**A 2-hour undergraduate biochemistry lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — Why proteins were the bottleneck for fifty years

Good morning, everyone. Today and for the next two hours we're going to talk about mass spectrometry for proteomics — which is the technology that finally, after about fifty years of being the embarrassing slow stepchild of molecular biology, turned protein measurement into a real high-throughput science. If you've taken any of the previous lectures in this series — the ones on Illumina sequencing, on bulk RNA-seq, on single-cell methods — you already have an intuition for what high-throughput omics looks like. You take a sample, you put it on an instrument, and a few hours later you have a number for every gene in the genome. Twenty thousand numbers per sample. You can run hundreds of samples in a week. That's what it feels like to work in modern genomics.

For proteins, that capability did not exist until astonishingly recently. And I want you to feel how strange that is, because the strangeness is the whole motivation for the field we're about to discuss. Here's the strangeness: by 2003, you could read the entire human genome — three billion bases of DNA — in about a day, for a few thousand dollars. By 2010, you could read every messenger RNA in a cell in an afternoon. But in 2003, if you wanted to know the abundance of one specific protein in a tissue, you would do a Western blot, which takes two days and gives you one number for one protein. If you wanted a thousand proteins, you needed a thousand Western blots, or some heroic 2D gel campaign that took months and gave you maybe a few hundred identifications, half of them ambiguous. The genome was solved. The transcriptome was solved. The proteome — the actual proteins, the actual workers of the cell — was a swamp.

\[Pause.\]

That is the gap this lecture is about. Mass spectrometry for proteomics — modern LC-MS/MS, on an Orbitrap or a timsTOF, running a one-to-two-hour gradient — now identifies and quantifies somewhere between eight thousand and twelve thousand proteins per sample. Per sample. In a couple of hours. You can run hundreds of samples in a study. You can map every phosphorylation site in a cell. You can ask not just which genes are on, but which proteins are present, which forms, in what abundance, with what modifications. It took roughly twenty-five years to get from "we can characterize one protein at a time" to "we can quantify the entire proteome of a tissue in an afternoon," and that journey — the chemistry, the ionization tricks, the mass analyzer breakthroughs, the software — is what we're going to walk through today.

Here is the framing I want you to hold onto, and it's a comparison that runs through the whole field. RNA-seq, which many of you already know, measures messenger RNA — the recipe the cell has ordered from the kitchen. Mass spectrometry measures the actual proteins — the dishes that are sitting on the table, ready to be eaten. **RNA-seq measures the recipes the cell ordered. Mass spec measures the dishes that were actually served.** And here's the kicker that justifies the entire field of proteomics existing alongside transcriptomics: the correlation between mRNA levels and protein levels in a typical cell is only about 0.4. That's it. 0.4. Knowing how much mRNA there is tells you less than half of what you'd want to know about the protein. The cell controls protein abundance with translation rate, with protein stability, with degradation, with modification — none of which RNA-seq can see. If you care about what the cell is actually doing, you need to measure the proteins, not just the recipes.

If you walk out of here in two hours and you can do three things — one, sketch the LC-MS/MS proteomics workflow from cell lysate to identified peptide, and explain why each step exists; two, articulate the difference between DDA and DIA acquisition and why DIA is the modern choice for large-scale quantification; three, look at a published proteomics paper and read its methods section with real understanding — what instrument, what acquisition mode, what search engine, what quantification scheme — then we've succeeded. Everything else hangs off those three.

\[Pause.\]

Here is the central analogy for the whole field, and I want you to internalize it now. **A mass spectrometer is a scale that can weigh every individual molecule in a complex mixture, one at a time, with such precision that the exact weight tells you which molecule it was.** That's it. That's the trick. If you weigh a peptide accurately enough — to four or five decimal places of atomic mass — there is essentially only one peptide it could possibly be. And if you then break that peptide into pieces and weigh the pieces, you can read its sequence directly off the masses. Every other detail of the technology — the ionization, the analyzer geometry, the detector physics, the software — is in service of that one idea: weigh the molecules, weigh them fast, weigh them accurately, and decode their identities from the masses.

Hold the analogy: a scale that weighs every molecule. We'll keep coming back to it.

---

## SEGMENT 2 — The pre-MS protein era — Edman, 2D gels, Westerns

Before we can appreciate what modern mass spectrometry did to the protein field, you have to feel — viscerally — what protein chemistry was like before it. Because the pre-MS era was not just slow. It was slow in a specific way that limited what biologists could even imagine asking. The questions you ask are shaped by the tools you have, and the tools for proteins, for decades, were heroic, manual, and tiny.

Let me set the scene. Suppose it's 1980, and you've just purified a new protein from rabbit liver — a protein nobody has ever characterized before. You want to know its sequence. Today you would run a sample through a mass spectrometer and have the sequence in a couple of hours, easy. In 1980, what you would do is **Edman degradation**, a beautiful piece of chemistry invented by Pehr Edman in 1950. Edman's method peels amino acids off the N-terminus of a protein one at a time, using a chemical called phenyl isothiocyanate. Each round, you label the N-terminal residue, cleave it off, identify which amino acid it was by chromatography, and then repeat on the remaining chain. One amino acid per cycle. Each cycle takes about an hour. After thirty or forty cycles, the chemistry starts to fail — yields drop, side products accumulate, identification gets unreliable. So you might get the first forty residues of your protein, in a couple of days, on a dedicated Edman sequencer machine the size of a refrigerator. That's the state of the art.

To sequence a five-hundred-residue protein, you would have to fragment it into pieces, separate the pieces by chromatography, Edman-sequence each piece individually, and then puzzle the overlapping fragments back into the full sequence. This took months. A PhD thesis might be: "I sequenced one new protein." That was a real and respected accomplishment.

\[Pause.\]

Now, if you didn't need the sequence and just wanted to know which proteins were in your sample, you would do a **2D gel** — two-dimensional polyacrylamide gel electrophoresis, invented by Pat O'Farrell in 1975, and considered for about twenty-five years to be the closest thing to a proteome-wide method that existed. The idea was clever. You take your protein mixture, you separate the proteins first by their isoelectric point — the pH at which they carry no net charge — by running them in a pH gradient. That spreads them out horizontally. Then you turn the gel ninety degrees and run a second separation, by molecular weight, using a detergent called SDS. That spreads them out vertically. The result is a gel with a constellation of spots — hundreds, maybe a couple of thousand spots, each one a different protein.

You'd stain the gel — with Coomassie blue, or silver, or later with fluorescent dyes — and you'd look at the pattern. Spots that were brighter in your treatment sample than your control sample were candidate differentially expressed proteins. You'd cut those spots out of the gel with a razor blade, digest the protein with trypsin, and try to identify it — originally by Edman degradation, later by mass spec. A 2D gel was beautiful to look at. It was also slow, irreproducible, terrible at hydrophobic membrane proteins, hopeless at very large or very small proteins, blind to anything below a certain abundance, and — this was the killer — produced overlapping spots that contained multiple proteins each, which you only realized after you'd cut them out and tried to identify them. The dynamic range was maybe two or three orders of magnitude. A typical cell expresses proteins across about seven orders of magnitude. So you were seeing the abundant top of the iceberg and nothing else.

And finally there was the **Western blot**, which is still in every molecular biology lab today and which I assume most of you have done. You separate proteins by SDS-PAGE — one dimension this time, by size. Transfer to a membrane. Probe with an antibody specific to one protein. Detect with a chemiluminescent secondary reagent. Get a band. Quantify the band by densitometry. Beautiful technique. Quantitative — sort of. One protein at a time. Maybe two, if you strip and reprobe. Limited to proteins for which a good antibody exists, which excludes most of the proteome. Limited to whatever the antibody actually recognizes, which is often not exactly what you think. The Western blot is the workhorse of pre-MS protein measurement, and it is the bottleneck.

\[Pause.\]

So the pre-MS protein landscape was: Edman for sequence, 2D gels for proteome-scale separation, Westerns for targeted quantification. None of them scaled. None of them was reproducible across labs. None of them saw the deep proteome. And meanwhile — and this is the part that drove the field crazy — DNA sequencing was getting faster and cheaper every year, doubling on something like a Moore's law trajectory. By the late 1990s, the gap between what you could do with nucleic acids and what you could do with proteins was a chasm. The human genome was almost done. The human proteome was a list of about ten thousand identified proteins, half of them characterized by sequence similarity to genes that had been cloned, not by actually being measured. The proteome existed mostly as inference from the genome.

And then, between roughly 1988 and 2005, a series of inventions in mass spectrometry collapsed that chasm. Let's go to the first one, because it's the one that made the entire modern field possible.

---

## SEGMENT 3 — The ionization breakthrough — MALDI and ESI

Mass spectrometry, as a technique, is old. Older than DNA. The first mass spectrometers were built in the 1910s and 1920s by physicists who wanted to weigh isotopes. The basic principle has been the same for a century: ionize your molecule, separate the ions in a vacuum by their mass-to-charge ratio using electric or magnetic fields, detect them. The problem, for biology, was the first step. Ionizing a small molecule like benzene or methane is easy — you can just zap it with electrons and the molecule becomes a charged ion. But proteins and peptides are big, heavy, polar, fragile molecules. The classical ionization methods either fragmented them into uninterpretable confetti, or failed to ionize them at all. For about sixty years, mass spectrometry could weigh small molecules with exquisite precision and could not touch proteins. That was the wall.

The wall came down in 1988. Two methods, invented essentially simultaneously by independent groups, solved the protein ionization problem in two completely different ways. Both methods are still in routine use today. Both inventors shared the 2002 Nobel Prize in Chemistry. And both methods belong in the small list of inventions without which modern biology would not exist.

\[Pause.\]

The first is called **MALDI** — Matrix-Assisted Laser Desorption/Ionization — invented by Michael Karas and Franz Hillenkamp in Germany. The trick is breathtakingly elegant. You take your protein sample. You mix it with a huge molar excess of a small organic acid — a "matrix" molecule, typically something like sinapinic acid or alpha-cyano-4-hydroxycinnamic acid — and let the mixture dry on a metal plate. The matrix crystallizes, and the protein molecules end up trapped inside the crystal lattice, individually surrounded by matrix molecules. Now you blast the spot with a pulse of ultraviolet laser light. The matrix molecules, which absorb UV strongly, soak up the laser energy and explosively vaporize — a tiny puff of matrix flying off the surface, carrying the protein molecules along with it into the gas phase. During that violent vaporization, charge gets transferred from the matrix to the protein, ionizing it. And — this is the key — because the matrix took most of the energy hit, the protein itself comes through intact, gently ionized, ready to be measured.

The analogy I like is: **MALDI is like throwing a baseball using a slingshot built into a sheet of cardboard.** The cardboard absorbs the energy of the launch, shreds itself in the process, and the baseball — the protein — flies away unhurt. Without the cardboard matrix, the laser would just burn the protein. With it, the protein hitches a free ride into the gas phase.

The second method, invented essentially simultaneously and independently, is called **ESI — electrospray ionization** — and the inventor was John Fenn, who at the time was at Yale and was, by his own admission, an old man working with old equipment in the basement. Fenn's trick, which is one of the most beautiful experimental ideas in all of analytical chemistry, was to dissolve the protein in a flowing solvent — water plus some methanol, plus a little acid — push that solution through a very fine capillary needle, and put a few kilovolts of voltage on the needle. The voltage charges the liquid as it exits the needle, and the liquid breaks up into a fine spray of tiny charged droplets. Now, as those droplets fly through the air toward the mass spectrometer's inlet, the solvent evaporates. As the solvent leaves, the droplets shrink. As they shrink, the charge density on the droplet surface goes up. Eventually the droplet is so small and so charged that it can't hold itself together — the electrostatic repulsion overcomes surface tension — and the droplet explodes into smaller droplets, which themselves shrink and explode, and so on. After a few rounds of this, you're left with individual protein molecules, each carrying multiple charges, floating naked in the gas phase. They've been gently lifted out of solution and into the vacuum, with their structure intact, ready to be measured.

The analogy: **ESI is like progressively boiling away a cup of water until only the dissolved salt is left, except instead of one drop slowly evaporating you have a million tiny droplets simultaneously evaporating, exploding, evaporating again, until the proteins are gas-phase ions.** The cleverness is that the proteins never feel the heat; they just lose their solvent.

\[Pause.\]

These two methods solved the protein ionization problem in complementary ways. MALDI is fast, tolerant of contaminants, simple to operate, and produces mostly singly-charged ions — so it's good for measuring intact proteins or simple peptide mixtures. ESI is more sensitive, produces multiply-charged ions (which helps with measuring large molecules — more on that in a minute), and crucially, it works on flowing liquid samples, which means you can couple it to a liquid chromatography column. That last point is what made ESI the dominant ionization method for modern shotgun proteomics. You can run a peptide separation in real time, and as each peak elutes off the column it sprays directly into the mass spec. The chromatography and the mass spec become one continuous, integrated workflow.

John Fenn, by the way, did this work mostly in his 60s and 70s and won the Nobel at 85. He titled one of his early ESI papers "Electrospray Wings for Molecular Elephants" — referring to the fact that ESI could finally lift the huge "elephant" molecules of biology into the gas phase. It's a great title. The image of the wings is exactly right.

These two ionization methods are the foundation of every modern protein mass spectrometer. Everything else in this lecture sits on top of MALDI or ESI. So when you hear "LC-MS" — liquid chromatography coupled to mass spectrometry — that's ESI. When you hear "MALDI-TOF" — used widely in clinical microbiology to identify bacterial species from a colony in two minutes — that's MALDI. Both are still everywhere. Both unlocked everything that came after.

---

## SEGMENT 4 — The basic architecture — source, analyzer, detector

Now that you know how to ionize a protein, let's look at the rest of the machine. Every mass spectrometer ever built has the same three-part architecture, and once you have these three parts in your head, you can read the spec sheet of any instrument and know what you're looking at. Three parts: **ion source, mass analyzer, detector.** That's it. Everything else — the geometry, the optics, the vacuum — is engineering details around those three.

The **ion source**, which we just covered, gets your molecule into the gas phase as a charged ion. ESI for liquids, MALDI for solids, plus a few other methods we don't need today.

The **mass analyzer** is the heart of the instrument. Its job is to separate ions by their mass-to-charge ratio — abbreviated m/z, pronounced "m over z." Different ion species, different m/z values. The analyzer takes the cloud of ions coming from the source and sorts them out spatially or temporally so that ions of one m/z arrive at the detector at one time, and ions of a different m/z arrive at a different time. There are many ways to do this, and we'll spend the whole next segment on them, because the choice of mass analyzer is the single biggest factor in what an instrument can do.

The **detector** counts ions. Most modern detectors are electron multipliers or microchannel plates, which work by amplifying the tiny current produced when an ion hits a metal surface. The detector outputs a signal proportional to how many ions of each m/z are arriving at each moment. Stack those measurements together and you get a **mass spectrum** — a plot with m/z on the x-axis and ion intensity on the y-axis, with peaks at the m/z values where ions actually exist in your sample.

\[Pause.\]

That mass spectrum is your raw data. Every peak in it is a molecular species with a particular mass-to-charge ratio. If you're measuring intact proteins, each peak is a protein (or a multiply-charged ion of a protein, which you have to back-calculate). If you're measuring peptides — which is what we mostly do, as you'll see in the next segment — each peak is a peptide ion.

Now here's the conceptual move that separates a mass spectrometer from a regular scale. A regular scale measures the absolute weight of an object. A mass spectrometer measures m/z — mass divided by charge. If a molecule has a mass of two thousand daltons and carries two charges, its m/z is one thousand. If it has a mass of one thousand daltons and carries one charge, its m/z is also one thousand. Same peak position. How do you tell them apart? The answer is **isotope peaks**. Every molecule has a small fraction of its carbons that are carbon-13 instead of carbon-12 — about 1.1 percent natural abundance — and so any real molecule shows up not as a single peak but as a cluster of peaks separated by the mass difference between an extra carbon-13 and a normal carbon-12. The spacing of those peaks tells you the charge state. If the spacing is one m/z unit apart, the ion is singly charged. If half an m/z unit, doubly charged. If a third, triply charged. So from a single isotope cluster, you read off both the m/z and the charge, and from those you compute the actual mass.

This is how mass spectrometers get to molecular masses with stunning precision — fractions of a part per million in the best modern instruments. The isotope envelope, the charge deconvolution, the high-resolution analyzer that separates closely spaced peaks — these are the components that turn raw signal into accurate mass.

\[Pause.\]

A final orienting point on the architecture. Mass spectrometers operate under high vacuum — typically ten to the minus six or minus seven torr in the analyzer region, sometimes lower. Why vacuum? Because if there's air around, the ions you're trying to fly through the analyzer collide with air molecules, lose energy, scatter, and never reach the detector. You need a clean, empty flight path. The vacuum pumps on a mass spectrometer are part of the engineering bulk of the instrument — they hum constantly, they're loud, they're expensive, and they're absolutely essential. The transition from atmospheric pressure (where ESI happens) to high vacuum (where the analyzer operates) is one of the trickiest parts of instrument design. There's a whole intricate region of differential pumping — chambers stepping the pressure down from one atmosphere to one billionth of an atmosphere over a few centimeters — just to get the ions safely into the analyzer. Modern instruments do this beautifully and you never have to think about it, but it's worth knowing that's where a lot of the engineering complexity lives.

Source. Analyzer. Detector. Vacuum throughout. That's a mass spectrometer. Now let's talk about the analyzer, because that's where the real diversity is.

---

## SEGMENT 5 — Mass analyzer zoo — Quadrupole, TOF, Ion trap, Orbitrap, FT-ICR

There are five major types of mass analyzer in widespread use, and each one has a distinct geometry, a distinct trick for separating ions by m/z, and distinct tradeoffs in resolution, mass accuracy, speed, sensitivity, and cost. You don't need to be a mass spec engineer to use proteomics data, but you absolutely need to know which analyzer is which, because every paper you read will tell you what instrument it used, and the choice of analyzer is the single biggest determinant of what the data can do.

Let me walk you through them in roughly historical order, because each one was invented to fix limitations of the previous ones.

\[Pause.\]

**The quadrupole**, invented by Wolfgang Paul in the 1950s — Nobel Prize 1989. Four parallel metal rods arranged in a square. You put a combination of DC voltage and radiofrequency AC voltage on the rods, and the resulting oscillating electric field acts as a kind of mass filter. Ions with one specific m/z fly in stable trajectories down the middle of the rods and reach the detector. Ions with any other m/z get yanked sideways and crash into the rods. By sweeping the voltages, you scan through m/z values one at a time. Quadrupoles are cheap, robust, fast, simple — but their resolution is modest (you can distinguish ions about one m/z unit apart, no better) and they're sensitive but not exquisitely so. They're the workhorse for routine quantitative work — triple quadrupole instruments, which we'll discuss later, are the standard for clinical mass spec and targeted proteomics. But they're not the right tool for unbiased proteome-wide discovery.

**Time-of-flight**, abbreviated **TOF**. The trick is delightful in its simplicity. You give all your ions the same amount of kinetic energy by accelerating them through a fixed voltage. Now you let them fly down a long, evacuated tube. Light ions go fast; heavy ions go slow. Measure the time of arrival at the detector at the end of the tube. From the flight time and the known length of the tube, you compute the velocity, and from velocity plus known kinetic energy, you compute the mass. **A TOF analyzer is a literal race track for ions, where the lighter ions finish first and the heavier ones bring up the rear, and the order of arrival is the spectrum.** TOFs can be very fast — you get a complete mass spectrum every microsecond — and modern reflectron TOFs (which fold the flight path with electrostatic mirrors to extend it) reach quite high resolution. MALDI is almost always coupled to TOF. The modern proteomics workhorse called timsTOF, which we'll discuss in detail in Segment 16, is a TOF with an extra trick.

**Ion traps**, both 3D (Paul trap) and 2D (linear trap quadrupole, LTQ). Imagine a quadrupole, but with end caps that close the trap into a box. Ions get injected, then oscillate inside the trap as a cloud, kept in place by the RF fields. You can then selectively eject ions of different m/z by sweeping the field, and they fly out to the detector in m/z order. Ion traps are compact, sensitive, fast at MS/MS — they can isolate a peak, fragment it, and read the fragments very efficiently. The Thermo LTQ Orbitrap (which we'll get to) used an ion trap as its front end for years. But ion trap resolution is also modest, and they have a quirk called the "one-third rule" where you can't measure fragments below about one third of the precursor m/z. For a long time the LTQ was the standard for shotgun proteomics MS/MS.

**Orbitrap.** This deserves its own segment, which it gets next, but the short version is: invented by Alexander Makarov in the late 1990s, commercialized by Thermo in 2005, it uses an electrostatic field to trap ions in orbits around a spindle-shaped central electrode, measures their orbital frequencies, and Fourier-transforms the frequency signal into a mass spectrum. It has stunning resolution and mass accuracy. It's the dominant high-resolution analyzer in modern proteomics.

**FT-ICR — Fourier-transform ion cyclotron resonance.** Highest resolution and mass accuracy of any mass analyzer ever built. Ions are trapped in a strong magnetic field (typically 7 to 15 tesla, requiring a superconducting magnet — these instruments are physically huge and need liquid helium) and made to orbit at a frequency that depends on m/z. The orbital signal is detected and Fourier-transformed, exactly like in the Orbitrap. FT-ICR predated the Orbitrap by decades — the technique was developed in the 1970s by Marshall and Comisarow — and remains the gold standard for the most demanding work, like top-down proteomics of intact proteins. But it's expensive, large, and slow, so it's mostly used in specialized facilities. The Orbitrap is, in effect, the FT-ICR's smaller, cheaper, more practical cousin — same Fourier-transform principle, electrostatic instead of magnetic trapping, way more practical to run.

\[Pause.\]

Let me give you a rough comparison table, in words. Quadrupole: low resolution, fast, cheap, robust. Used for targeted quantification. TOF: high resolution, very fast, scales to high mass. Used for MALDI and modern timsTOF instruments. Ion trap: modest resolution, very fast MS/MS, compact, sensitive. Used historically and still in some hybrid instruments. Orbitrap: very high resolution, excellent mass accuracy, moderate speed, the modern workhorse for discovery proteomics. FT-ICR: ultimate resolution and accuracy, slow, expensive, gold standard for top-down and small molecule work.

The other important pattern: many modern instruments are **hybrid**, combining two or three analyzer types in a single box to get the best of each. A triple quadrupole has three quadrupoles in series. A Q-Exactive combines a quadrupole for ion selection with an Orbitrap for high-resolution detection. A Q-TOF combines a quadrupole with a TOF. The Orbitrap Eclipse and Astral are even more elaborate hybrids. The reason hybrids dominate is that you typically want one analyzer to isolate the ion you care about — pick out one peak from a thousand — and a second analyzer to fragment it and measure the fragments with high resolution. Different analyzers are good at different parts of that workflow.

Hold the zoo. Quadrupole, TOF, ion trap, Orbitrap, FT-ICR. Five geometries. Five tradeoffs. The Orbitrap, in particular, deserves its own segment, because it's the one that changed the field.

---

## SEGMENT 6 — The Orbitrap revolution — Makarov, Thermo, and the rise of the workhorse

Around 2005, the Thermo Scientific company released a new mass spectrometer based on a brand-new analyzer design, called the **Orbitrap**. The principle had been worked out by a young Russian physicist named Alexander Makarov, who had been developing it through the 1990s — first at his lab in Moscow, then at HD Technologies in the UK, which Thermo acquired. The first commercial instrument was the LTQ-Orbitrap, released in 2005. Within five years, the Orbitrap had become the dominant high-resolution analyzer in proteomics. Within ten years, essentially every major academic proteomics core in the world had at least one. It is, by some margin, the most influential mass spec instrument of the modern era.

So how does it work? The principle is gorgeous, and I want to walk through it carefully.

\[Pause.\]

Imagine a small barrel-shaped chamber, maybe the size of a soda can, evacuated to high vacuum. In the middle of the chamber sits a spindle-shaped central electrode — like a tapered metal axle, fat in the middle and tapering toward both ends. Around it, the outer wall of the chamber is also an electrode, with a precisely shaped curvature. You put a few kilovolts of voltage between the central spindle and the outer wall — but the geometry is shaped such that the resulting electric field has a very specific mathematical form. In particular, the field has a quadratic-logarithmic shape that creates a stable trapping potential for ions in three dimensions.

When you inject ions into this chamber, they don't just sit there. They start orbiting around the central spindle, like planets around a sun, while simultaneously oscillating back and forth along the axis of the spindle. The combination of orbital motion and axial oscillation traces out a complex three-dimensional pattern — kind of like a figure-eight wrapped around a barrel. The crucial fact, mathematically, is this: **the frequency of the axial oscillation depends only on the m/z of the ion. It does not depend on the orbital motion, the injection energy, or anything else. Just m/z.** So if you can measure the axial oscillation frequency of the trapped ions, you can compute their m/z directly.

How do you measure the frequency? You don't try to detect the ions directly. Instead, you put pickup electrodes on the outer walls of the chamber and measure the tiny image current that the oscillating ion charge induces in those electrodes as the ions move back and forth. The image current is a periodic signal, with a frequency equal to the axial oscillation frequency. If you have many different ion species in the trap at once, each oscillating at its own frequency, the image current is a sum of many sinusoids — a complex waveform. You record that waveform for a few hundred milliseconds. Then you Fourier-transform it, decomposing the complex waveform into its constituent frequencies, and each frequency peak corresponds to an ion species at a particular m/z. The Fourier transform is the magic that turns the time-domain image current signal into a frequency-domain spectrum, which is the mass spectrum.

\[Pause.\]

Hold the analogy. **The Orbitrap is like a tuning fork chorus. Different ions ring at different frequencies. You record the combined sound. You decompose the sound into pure tones with a Fourier transform. Each tone is a peak in the mass spectrum.** The longer you record, the more precisely you can pin down each frequency, and the higher your resolution. Modern Orbitraps can achieve resolutions of half a million or more — meaning they can distinguish two peaks that differ in m/z by one part in five hundred thousand. Mass accuracy of a few parts per million is routine; sub-ppm with internal calibration. For a peptide of mass around two thousand daltons, that's identifying the mass to within plus or minus 0.002 daltons. That is essentially molecular-formula-level accuracy.

Why did this matter so much for proteomics? Because the precision is what makes peptide identification reliable. If you measure a peptide at m/z 850.456789 with mass accuracy of one part per million, you can check that mass against a database of every theoretical peptide from every protein in the human proteome, and find a unique match — or at most a small handful of candidates that you can distinguish by their fragmentation pattern. With low-resolution analyzers, dozens of peptides have similar enough masses that you can't tell them apart, and you generate a lot of ambiguous identifications. With high-resolution Orbitrap data, the matches are almost unique on mass alone.

The Orbitrap also has good dynamic range — you can see peaks across a few orders of magnitude in a single scan. It's compatible with high-speed acquisition — you can collect tens of MS/MS spectra per second on modern instruments. It's relatively compact — not as big as an FT-ICR's superconducting magnet. And, critically, the Thermo product family built around the Orbitrap has been iterated relentlessly for two decades: LTQ-Orbitrap, Orbitrap Velos, Q-Exactive, Orbitrap Fusion, Orbitrap Lumos, Orbitrap Eclipse, Orbitrap Exploris, and most recently the Orbitrap Astral, which pairs an Orbitrap with an Astral analyzer — a clever folded-flight-path TOF derivative — to push acquisition speeds even higher.

Every major proteomics paper you read from 2008 onwards almost certainly uses an Orbitrap somewhere in its workflow. When people say "modern proteomics," what they often mean, implicitly, is "Orbitrap proteomics." Makarov, by the way, is still alive, still at Thermo, still working on the next generation of instruments. He is, fairly, considered one of the most consequential analytical chemists of the modern era. The Orbitrap is his monument.

Now we have the ionization, the architecture, and the analyzer. Let's actually do proteomics with them.

---

## SEGMENT 7 — Bottom-up proteomics — why we chop the proteins first

Now we get to the actual strategy of modern proteomics, and it requires a conceptual move that feels backwards at first. If you wanted to identify the proteins in a sample, you might think the natural thing to do would be: ionize each intact protein, measure its mass on the mass spec, look up the mass against the proteome, done. That approach exists and is called **top-down proteomics**, and we'll talk about it in Segment 15. But for almost all real-world proteomics — by some estimates ninety-five percent of all the proteomics done in the world today — we do not do that. We do something called **bottom-up proteomics**, also known as **shotgun proteomics**, in which we chop every protein in our sample into small peptides before measuring anything.

Why on earth would you do that? You started with intact proteins. Now you're throwing away the most important piece of information — which amino acids were connected to which — and trying to reassemble it later. It feels insane until you understand why.

\[Pause.\]

Here's why. Intact proteins are awful mass spec analytes. They're huge — fifty to a hundred kilodaltons is typical, sometimes much more. They carry many charges in ESI, spreading the signal across many m/z peaks. They're physically heterogeneous — every individual protein molecule in your sample has its own set of post-translational modifications, oxidations, deamidations, and so on, so a single "protein" in your sample is actually a forest of slightly different molecular species. They're hard to separate by chromatography — they stick to columns, they fall out of solution, they don't behave. And they're hard to fragment cleanly in the mass spec, because there are so many bonds and so many possible fragments that the spectra get impossibly complex.

Peptides are wonderful mass spec analytes. They're small — typically eight to twenty amino acids, masses around eight hundred to twenty-five hundred daltons. They have a small number of charges in ESI, usually two or three. They separate beautifully by reverse-phase liquid chromatography. They fragment cleanly in collision-induced dissociation, giving interpretable spectra. And — this is the killer feature — the sequence of a peptide can be read directly off its fragmentation pattern.

So the trick of bottom-up proteomics is: **chop every protein in your sample into peptides, analyze the peptides instead of the proteins, identify each peptide by its mass and fragmentation, then computationally assemble the peptides back into protein identifications by matching them to a protein database.** You lose some information — you don't know which peptides came from the same original molecule, so you lose proteoform-level resolution — but you gain enormous tractability. The proteins become a problem of identifying peptides, which is a problem the instrumentation is brilliantly suited to solve.

\[Pause.\]

The enzyme that does the chopping, in essentially all bottom-up proteomics, is **trypsin**. Trypsin is a digestive enzyme that lives in your gut and chops dietary proteins after lysine and arginine residues — specifically, after K and R, except when the next amino acid is proline. Why trypsin? Several reasons. It's specific — it cleaves at predictable sites, so you can compute in advance what peptides any protein should yield. It cleaves often enough that most peptides come out in the eight-to-twenty residue size range that's ideal for mass spec. Lysine and arginine are both basic amino acids, so every tryptic peptide ends with a basic residue, which is great because it readily picks up a positive charge in ESI. And trypsin is cheap and robust — you buy it as a powder, dissolve it, mix with your sample, incubate overnight at 37 degrees, and you're done.

The analogy: **trypsin digestion is the trick that makes proteomics possible. It takes a sample of intact proteins — which would be a nightmare to analyze — and turns it into a sample of well-behaved peptides — which are exactly what the mass spec wants.** Without trypsin, modern proteomics doesn't exist. There are other proteases that get used occasionally — Lys-C, chymotrypsin, Glu-C, Asp-N — for specific situations where trypsin doesn't give good coverage of a particular protein. But trypsin is the default, the workhorse, the protease that runs the field.

After tryptic digestion, your sample — which started as maybe a few thousand intact proteins — has become a mixture of maybe a hundred thousand peptides. Each protein contributes, on average, a few dozen tryptic peptides. The mixture is enormously complex, but in a controlled way: every peptide is, in principle, predictable from the protein sequence. The job of the LC-MS/MS workflow is to detect and identify as many of those peptides as possible, and from the identified peptides, infer which proteins were present in the original sample.

That's bottom-up proteomics in one paragraph. Now let's walk through the actual LC-MS/MS run.

---

## SEGMENT 8 — The LC-MS/MS workflow — nano-LC, MS1, isolation, fragmentation, MS2

Here is the workflow that runs on essentially every shotgun proteomics experiment in the world. I want you to be able to draw this on a whiteboard by the end of the segment. It has roughly six stages, and each stage solves a specific problem.

\[Pause.\]

**Stage one: nano-LC.** Your peptide mixture, after tryptic digestion, gets loaded onto a tiny reverse-phase liquid chromatography column — typically a fused silica capillary about fifty to seventy-five micrometers in inner diameter, packed with C18 silica beads, about fifteen to fifty centimeters long. You run a gradient — starting with mostly water and a little acetonitrile, ramping up to mostly acetonitrile over an hour or two. As the gradient runs, peptides elute off the column in order of hydrophobicity: most polar first, most hydrophobic last. The flow rate is in the hundreds of nanoliters per minute — hence "nano-LC." The narrow column and the slow flow rate are crucial for sensitivity: you want every peptide molecule to enter the mass spec, not get diluted into a big solvent volume.

The analogy: **LC-MS is a two-step separation. First the peptides spread out in time as they elute from the column, then the mass spec spreads them out in m/z. Together you get millions of resolved features per run — every peptide localized to a specific retention time and a specific mass.**

**Stage two: electrospray.** The eluent from the column flows directly into an electrospray emitter — usually a tapered tip on the end of the column, with a few kilovolts of voltage. The peptides ionize as they spray, as we discussed in Segment 3, and enter the mass spec.

**Stage three: MS1 scan.** The first thing the mass spec does, every fraction of a second, is take a survey scan — called an MS1 scan — of everything currently entering the instrument. The MS1 is a snapshot of all the peptide ions present at that moment, with their m/z values and intensities. A typical MS1 from a complex sample shows hundreds of peptide peaks, with charge-state isotope envelopes that let you compute monoisotopic masses. The MS1 is your inventory of what's eluting right now.

**Stage four: precursor selection.** The instrument software looks at the MS1 spectrum and picks the most intense peaks — typically the top ten or twenty — for further analysis. Each selected peak is a precursor ion candidate. The instrument then isolates one precursor at a time, using a quadrupole as a narrow mass filter, letting through only ions in a window of, say, half an m/z unit around the chosen peak. Everything else gets discarded.

**Stage five: fragmentation.** The isolated precursor ions are sent into a collision cell, where they collide with neutral gas molecules — typically nitrogen or argon. The collisions transfer energy to the peptide, exciting it vibrationally, and the peptide breaks apart at its weakest bonds — which, for peptides, are the amide bonds of the peptide backbone. This kind of fragmentation, when done with relatively high collision energy in a beam-type cell, is called **HCD — higher-energy collisional dissociation**. The result is a population of fragment ions, each one corresponding to a piece of the peptide. Specifically, for each amide bond that breaks, you get a pair of fragments: a **b-ion**, containing the N-terminal piece, and a **y-ion**, containing the C-terminal piece. A peptide of length n produces a ladder of n minus one possible b-ions and n minus one possible y-ions, and from the mass differences between adjacent ions in the ladder, you can read off the sequence — because the mass difference between a b-ion of length k and a b-ion of length k plus one is exactly the mass of the amino acid in position k plus one.

**Stage six: MS2 scan.** The mass spec then takes a high-resolution scan of all the fragment ions produced in the collision cell. This is called the MS2 scan, or the tandem MS spectrum, or just "the fragment spectrum." It contains the b- and y-ion ladders. From the spacing of the ions in the ladder, you can — in principle — read the sequence directly. In practice, you don't do that manually; you hand the spectrum to a database search algorithm, which we'll discuss in the next segment.

\[Pause.\]

The whole cycle — MS1 survey, pick top N precursors, isolate each one in turn, fragment, MS2 scan — takes about one to two seconds on a modern instrument. The instrument then moves to the next MS1 scan and repeats. Over a one-to-two-hour LC gradient, the instrument acquires tens of thousands of MS2 spectra, each one a candidate peptide identification. From that pile of MS2 spectra, with good software, you'll typically identify thirty to fifty thousand peptides, which map to eight thousand to twelve thousand distinct proteins. That is the modern proteomics dataset.

This style of acquisition — pick the top N peaks from each MS1 and fragment them — is called **DDA, data-dependent acquisition**. It's been the standard for two decades. We'll see in Segment 11 that there's a different and better-for-quantification approach called DIA. But DDA is the conceptual baseline. Get it in your head: survey scan, pick top peaks, isolate, fragment, fragment spectrum. Repeat for two hours. The instrument is making thousands of decisions per minute about what to look at next.

---

## SEGMENT 9 — Database search — Sequest, Mascot, MaxQuant, FragPipe

Now you have a pile of forty thousand MS2 spectra from a single LC-MS/MS run. Each one is a list of fragment-ion masses, with some intensities, corresponding to some peptide that the instrument decided to fragment. None of them are labeled with what peptide they came from. The instrument just knows the precursor m/z and the fragment masses. How do you turn that into identifications?

The answer is a beautifully simple algorithm called **database search**, first implemented in a program called **Sequest** by John Yates and Jimmy Eng in 1994, while Yates was at the University of Washington. The Sequest algorithm is the conceptual ancestor of every database search tool used in proteomics today, and the logic is worth understanding deeply.

\[Pause.\]

Here's the idea. You start with a database of all the known protein sequences from the organism you're studying — for human, the UniProt human proteome, about twenty thousand reviewed proteins. For each protein, you simulate a tryptic digest in silico: chop the sequence at every K and R (skipping the followed-by-proline ones), and write down every theoretical tryptic peptide. For each peptide, compute the theoretical monoisotopic mass and the theoretical fragment ion masses — the b-ions and y-ions you'd expect if you fragmented this peptide in the mass spec.

Now you have a giant lookup table: every theoretical peptide from every protein, with its expected mass and its expected fragment spectrum. The database, for a human proteome with one missed cleavage allowed, contains a few million theoretical peptides.

To identify an observed MS2 spectrum, you do this. First, filter the database by precursor mass: only consider peptides whose theoretical mass is within, say, ten parts per million of the observed precursor mass. That filter reduces the candidates from millions down to a few dozen — maybe a few hundred. Then, for each candidate peptide, compute its theoretical fragment spectrum and compare it to the observed fragment spectrum. Score each comparison — how many observed peaks are explained by theoretical fragments, how well do the intensities match. Pick the best-scoring candidate. That candidate is your peptide identification.

The analogy: **database search is the central trick of proteomics. You observed a spectrum. The software predicts what every theoretically-possible peptide in the proteome would give. Whichever theoretical prediction best matches what you actually saw, wins.** It's not de novo sequencing — you're not reading the spectrum from scratch and figuring out the sequence. You're matching against a predicted catalog. That's why proteomics requires a reference proteome; the technique fundamentally cannot identify a peptide whose sequence isn't in the database.

\[Pause.\]

Of course, with millions of candidates and noisy spectra, you'll get false matches by chance. Some spectra will match a wrong peptide by random alignment of peaks. To deal with this, the field uses a **target-decoy strategy**. You search not just against the real proteome (the target) but also against a reversed or shuffled version of every protein sequence (the decoy). Real peptides should match the target database; random matches should hit target and decoy at equal rates. By measuring the rate of decoy matches, you estimate the **false discovery rate, FDR**, and threshold your identifications to keep the FDR below, say, one percent. This is the standard for publishing proteomics data: peptide identifications at one percent FDR, protein identifications also at one percent FDR after combining peptides.

The software stack has evolved a lot. **Sequest**, the original, is still around in modified form inside Thermo's Proteome Discoverer. **Mascot**, developed by Matrix Science in the late 1990s, was the dominant commercial search engine for a long time. **MaxQuant**, developed by Jürgen Cox and Matthias Mann's lab in Munich starting in 2008, transformed the field by being free, by being integrated with label-free quantification, and by being extremely well-engineered for handling Orbitrap data. **FragPipe**, more recently, built around the MSFragger search engine from Alexey Nesvizhskii's lab at Michigan, is much faster than older tools — orders of magnitude faster — and has become the modern default in many labs. There are others: Comet, X! Tandem, Andromeda, OpenMS, PEAKS, Spectronaut, DIA-NN. Each has tradeoffs. The conceptual algorithm — match observed spectrum against theoretical proteome database — is the same in all of them.

\[Pause.\]

One important wrinkle. Once you've identified peptides, you have to assemble them into protein identifications, and that's surprisingly subtle. Some peptides are shared between multiple proteins — for example, many human proteins have paralogs that differ at only a few residues, and some tryptic peptides will be identical between paralogs. If you observe such a peptide, you can't tell which paralog it came from. The field handles this with **protein inference algorithms** that group ambiguous peptides into protein groups and report at the protein-group level rather than at the individual-protein level. When a paper says "we identified ten thousand protein groups," that's the right number — it's an honest accounting of distinguishable proteins, not over-claiming individual paralogs.

So the data flow is: raw spectra in, database search algorithm, target-decoy FDR estimation, peptide identifications at one percent FDR, protein inference, protein groups at one percent FDR, peptide-level and protein-level quantification numbers per sample. That's the standard proteomics output table. Twenty rows of metadata at the top, ten thousand rows of proteins below, intensity values per sample in the columns. It looks just like an RNA-seq count table, except the entities are proteins instead of genes, and they were measured by mass instead of by sequencing.

That brings us to the halfway point. After the break, we'll get into the quantification methods — label-free versus labeled — the DIA revolution, post-translational modifications, and everything from cross-linking to single-cell proteomics. Take ten minutes. Stretch. Get water. We'll resume with TMT and SILAC.

\[BREAK\]

---

## SEGMENT 10 — Label-free vs labeled quantification — LFQ, TMT, iTRAQ, SILAC

Welcome back. Before the break we covered how mass spec identifies peptides. Now let's talk about how it quantifies them — because identification is only half the story. You usually want to know not just which proteins are in your sample, but how much of each, and how those amounts compare across conditions. There are two big families of approaches: label-free and labeled. Each has a place. Each has tradeoffs. Knowing the difference is essential to reading any proteomics paper.

\[Pause.\]

**Label-free quantification, abbreviated LFQ**, is conceptually the simplest. You run each sample separately on the LC-MS/MS instrument. For each identified peptide, you measure either its precursor ion intensity in the MS1 scan — the area under the peak — or its spectral count, meaning how many MS2 spectra were taken of it. You sum across peptides to get a protein intensity. Then you compare intensities across samples. The MaxQuant LFQ algorithm, and later FragPipe's IonQuant, normalize cleverly to account for differences in sample loading and ionization efficiency. LFQ is cheap — no labeling chemistry, just run samples. It scales to hundreds of samples. But because every sample is run separately, you get **batch effects** and **missing values** — a peptide identified in one sample may not be identified in the next, just because the instrument didn't happen to fragment it. LFQ reproducibility across hundreds of samples is the chronic pain point.

**Labeled quantification** solves the batch effect problem by **multiplexing** — combining multiple samples into a single LC-MS run, but tagging each sample with a different chemical label so you can disentangle them afterwards.

**SILAC** — stable isotope labeling by amino acids in cell culture — is the original. Invented by Matthias Mann's lab in 2002. You grow your cells in media containing heavy isotopic versions of arginine and lysine — typically carbon-13 and nitrogen-15. The heavy amino acids get incorporated into every newly-synthesized protein. Then you mix heavy-labeled cells with light-labeled cells and run them together. In the MS1 spectrum, every peptide appears as a pair of peaks — light and heavy, separated by a known mass difference — and the ratio of the two peaks is the ratio of protein abundance in the two cell populations. SILAC is exquisitely accurate but limited to cells you can grow in dialyzed media for many generations. Tissues, patient samples, plants — out of luck.

**iTRAQ and TMT** — isobaric tags for relative and absolute quantification, and tandem mass tags — solved the SILAC limitation. These are chemical labels you attach to peptides after digestion, via amine chemistry on lysine side chains and N-termini. Each TMT label has the same total mass — they're **isobaric** — so labeled peptides from different samples co-elute and appear as a single MS1 peak. But when you fragment the peptide in MS2, the tags break off and release **reporter ions** at low m/z — each sample's tag releases a reporter at a unique m/z. The relative intensities of the reporter ions in the MS2 spectrum tell you the relative abundance of that peptide in each of the multiplexed samples. Modern TMT kits go up to **TMT 18-plex** or higher — eighteen samples in a single LC-MS run. TMT is the workhorse for large-scale tissue and clinical proteomics. It does have ratio compression issues — co-isolated peptides contaminate reporter ions, flattening true differences — and there are fixes for that, but it's still very widely used.

\[Pause.\]

Hold the contrast. **Label-free is cheap, scales infinitely, suffers from missing values and batch effects. Labeled — TMT especially — eliminates batch effects by multiplexing, gives clean ratios, costs more per sample, and caps at the number of channels in the kit.** For a study of ten samples, LFQ is fine. For a study of two thousand patient samples, you'd run TMT in batches of sixteen with a common reference channel for normalization. The modern alternative, DIA, addresses many of LFQ's problems without needing labels — and that's what we'll cover next.

---

## SEGMENT 11 — DIA — data-independent acquisition, the modern way

For about two decades, DDA — data-dependent acquisition, the survey-scan-then-pick-top-N approach we discussed in Segment 8 — was the only way to do shotgun proteomics. It works. But it has a fatal weakness for large-scale quantification: every cycle, the instrument picks which peptides to fragment based on which ones look most intense at that moment, and that choice is **stochastic across runs**. A peptide that gets fragmented in sample A might not be fragmented in sample B, just because it happened to be slightly less intense at the moment the instrument made its decision. You end up with peptide identification matrices full of holes — missing values that aren't biology, they're sampling artifacts.

Around 2012, the field started seriously adopting an alternative called **DIA — data-independent acquisition**, sometimes specifically called SWATH (sequential window acquisition of all theoretical mass spectra) in its original Sciex implementation. The idea is beautifully different.

\[Pause.\]

In DIA, instead of picking the top N precursors each cycle, the instrument scans through the entire m/z range in defined windows — say, twenty-five m/z-unit windows from 400 to 1000 m/z, twenty-four windows total — and fragments **everything in each window, all together, all at once.** Every peptide eluting at that moment gets fragmented in some window or other. Nothing gets skipped. The MS2 spectra are messy — each one contains fragments from many co-isolated peptides, not just one — but the same windows are scanned every cycle in every sample, so the sampling is deterministic and reproducible.

The challenge then becomes deconvolving those mixed MS2 spectra into individual peptide identifications and quantifications. The tools that do this — **Spectronaut** (commercial, from Biognosys) and **DIA-NN** (free, from Vadim Demichev) — use either pre-built spectral libraries (made from DDA runs) or, more recently, deep learning models that predict expected spectra and retention times. DIA-NN in particular has been a game-changer; it's fast, free, and gives very clean quantification across hundreds of samples.

The analogy: **DDA picks the top N peaks each second; DIA fragments ALL peptides in defined m/z windows. DDA misses things stochastically; DIA misses nothing systematically. For large-scale reproducible quantification across hundreds of samples — which is what clinical proteomics and population studies need — DIA gives you a much more complete and consistent matrix.** The tradeoff: DIA spectra are harder to interpret, the software is more complex, and you need decent spectral libraries or AI predictors. But the reproducibility gain is enormous, and DIA is the modern default for any quantitative proteomics study of more than about twenty samples.

When you read a modern proteomics paper from 2023 or 2024, the methods section will almost certainly say "DIA acquisition, analyzed with DIA-NN or Spectronaut." That's the new standard. DDA still dominates for discovery work on small studies and for PTM analysis where you really want clean MS2 spectra, but DIA owns the world of large quantitative proteomics.

---

## SEGMENT 12 — Post-translational modifications — the deep biology

So far we've talked about identifying proteins. But proteins, in real cells, are not bare amino acid chains. They are decorated with **post-translational modifications — PTMs**. A serine gets phosphorylated by a kinase. A lysine gets ubiquitinated, marking the protein for destruction. Another lysine gets acetylated, changing chromatin accessibility. Arginines get methylated, affecting protein-protein interactions. Cysteines get oxidized, glutamines get deamidated, the N-terminus gets acetylated, asparagines get glycosylated. Hundreds of distinct chemical modifications, dozens of which are functionally critical, all coexisting on the same proteins in any real cell. The PTM landscape is where most of the dynamic regulation of protein function lives.

Here's the key fact for this lecture: **mass spectrometry is essentially the only way to map post-translational modifications comprehensively, genome-wide.** Antibodies can hit specific known modifications on specific known proteins — phospho-Akt, acetyl-H3K9, that kind of thing. But to discover unknown sites, to map every phosphorylation in a cell, to find new modifications on new proteins, you need MS. The reason: every modification changes the mass of the modified residue by a defined amount. Phosphorylation adds 79.97 daltons. Acetylation adds 42.01. Ubiquitination — after tryptic digest, what's left on a modified lysine is a small GG diglycine tag, adding 114.04 daltons. Mass spec sees these mass shifts directly, and the fragmentation pattern localizes the modification to a specific residue.

\[Pause.\]

The general workflow for PTM proteomics is: digest your sample with trypsin as usual; then **enrich** for modified peptides, because most peptides are unmodified and would otherwise drown out the signal. For phosphopeptides, you enrich with titanium dioxide or IMAC (immobilized metal affinity chromatography), which selectively binds phosphate groups. For ubiquitinated peptides, you enrich with an antibody that recognizes the diGly tag. For acetylated lysines, an anti-acetyl-lysine antibody. The enriched peptides go onto the LC-MS/MS as usual, with the search engine configured to look for the specific mass shifts.

A single modern phosphoproteomics experiment routinely identifies thirty to fifty thousand phosphorylation sites in a single sample. Comparing across conditions — control versus drug-treated, for example — reveals the kinase signaling landscape. Studies of cancer signaling, of immune activation, of development, of metabolism — all powered by phosphoproteomics.

The analogy: **PTMs are the deep biology — the layer of regulation sitting on top of expression. Phosphorylation, ubiquitination, methylation, acetylation, glycosylation — these are the molecular instructions that tell each protein what to do moment-to-moment. MS is the only technology that maps them at scale, and it has opened up entire fields — signal transduction, chromatin biology, proteostasis — that were essentially inaccessible before.**

When you read papers about kinase networks, about cell cycle regulation, about ubiquitin signaling — almost all the genome-wide PTM data is mass spec data. The PTM revolution is one of the most quietly transformative consequences of modern proteomics.

---

## SEGMENT 13 — Cross-linking MS — structures of protein complexes

A specialized but increasingly important branch of proteomics is **cross-linking mass spectrometry — XL-MS**. The goal here is structural: not just which proteins are present, but which proteins touch which other proteins, and where on each protein the contacts are.

The chemistry is simple. You treat your sample — purified complex, cell lysate, or even whole cells — with a small bifunctional chemical cross-linker, typically something like DSS or BS3, which has two reactive groups separated by a defined spacer of around eleven angstroms. The cross-linker grabs onto lysine side chains, and if two lysines from two different proteins are within the spacer's reach, the cross-linker covalently bridges them. You then digest with trypsin as usual and run LC-MS/MS. The cross-linked peptides show up as unusual species: two peptides joined by a known mass and a known structural geometry. Search engines like **xQuest**, **pLink**, **MeroX**, **MS Annika** identify which two peptides were linked, and from that — given the eleven-angstrom constraint — you get a distance restraint between two specific residues in two specific proteins.

\[Pause.\]

Apply this across all the cross-links in a sample, and you get hundreds or thousands of distance restraints that map out the architecture of protein complexes. Combine with cryo-EM or AlphaFold predictions, and XL-MS becomes a powerful tool for solving structures that are too dynamic or too large for traditional methods. Modern integrative structural biology — the kind that builds models of the nuclear pore complex, or of huge transcription factor assemblies — leans heavily on XL-MS as one of its key inputs.

XL-MS is also expanding into **in vivo cross-linking** — treating intact cells, getting native interaction maps for thousands of proteins simultaneously. This is one of the most exciting current directions: structural proteomics at the level of the whole cell.

---

## SEGMENT 14 — Targeted proteomics — PRM and MRM for absolute quantification

Most of what we've discussed has been **discovery proteomics** — broad, unbiased measurement of as many proteins as possible. But sometimes you don't want broad. Sometimes you want extremely precise, extremely reproducible quantification of a specific small set of proteins — for clinical biomarker validation, for pharmacokinetic studies, for absolute concentration measurements. That's the domain of **targeted proteomics**, and the two main flavors are MRM and PRM.

**MRM — multiple reaction monitoring**, sometimes called SRM (selected reaction monitoring) — runs on a **triple quadrupole instrument**. You configure the first quadrupole to select one specific precursor m/z (a peptide you care about), the second quadrupole is the collision cell, and the third quadrupole selects one specific fragment m/z (a known fragment of that peptide). The instrument cycles through a list of these precursor-fragment pairs, called **transitions**, monitoring each one. By spiking in a heavy-isotope-labeled standard peptide at a known concentration, you can compute the absolute concentration of the endogenous peptide. MRM is incredibly sensitive — femtomolar detection — and incredibly reproducible. It's the workhorse of clinical mass spec, FDA-validated diagnostic assays, drug pharmacokinetics.

**PRM — parallel reaction monitoring** — is the same idea but uses a high-resolution analyzer like an Orbitrap for the fragment detection. Instead of monitoring one fragment at a time, PRM captures the entire MS2 spectrum at high resolution, giving you many fragments per precursor and better specificity in complex matrices. PRM is the modern preferred targeted method when you have access to an Orbitrap.

\[Pause.\]

The analogy: **discovery proteomics is a wide-angle photograph of the proteome; targeted proteomics is a telephoto zoom on the few proteins you care about, with absolute quantification down to molecules per cell.** When a clinical lab measures a panel of cancer biomarkers, when a pharma company measures drug concentration in plasma — that's targeted MS, almost always MRM on a triple quadrupole. It's the unsung workhorse of practical mass spec, and it generates enormous economic value despite being conceptually less glamorous than discovery proteomics.

---

## SEGMENT 15 — Top-down proteomics — sequencing intact proteins

Remember in Segment 7 I told you we chop every protein into peptides before measurement, because intact proteins are awful mass spec analytes? **Top-down proteomics** is the field that takes the opposite bet — keep the proteins intact, measure them directly, get full-protein information at the cost of much harder instrumentation.

Why bother? Because bottom-up loses information. When you chop a protein into peptides and then computationally reassemble, you can't tell which combination of modifications was on a single individual protein molecule. A protein with phosphorylations at sites A, B, and C may exist as: unmodified, A only, B only, C only, A+B, A+C, B+C, A+B+C — eight distinct **proteoforms**. Bottom-up tells you all three sites exist; it can't tell you which combinations. Top-down sees the intact protein and resolves the proteoforms directly.

The instrumentation has to be brutal — top-down ESI of an intact fifty-kilodalton protein produces a beast of a charge envelope, and the fragmentation has to be done with **ETD (electron transfer dissociation)** or **EThcD**, which fragments along the backbone more gently than HCD and preserves labile modifications. Top-down has mostly required FT-ICR-class instruments, though modern Orbitraps can do it for smaller proteins. The leader of the field is Neil Kelleher's lab at Northwestern, who have pushed the technology to map thousands of intact proteoforms in single experiments.

\[Pause.\]

Top-down is still a small fraction of proteomics overall — maybe a few percent — but for questions about histone proteoforms, antibody microheterogeneity, and combinatorial PTM logic, it's the only game in town. As instrumentation improves and software matures, it's slowly growing. Expect to see more top-down in the next decade.

---

## SEGMENT 16 — timsTOF and ion mobility — the extra dimension

Around 2018, a new instrument family entered the proteomics market and shook it up: the **timsTOF from Bruker**. TimsTOF stands for "trapped ion mobility spectrometry — time of flight," and the magic is in the front end called **TIMS**.

Here's what TIMS does. Before the ions enter the TOF analyzer, they pass through a tube filled with a gentle gas flow opposing their motion. An electric field pushes them forward, the gas pushes them back. The two forces balance differently depending on the ion's **collisional cross-section** — basically, its physical shape and size. Big floppy ions are pushed back more by gas; small compact ions less. So ions separate in the TIMS tube based on shape, not mass. Then they get released in a controlled sweep, mass-analyzed by the TOF, and you get an extra dimension of data: ion mobility on one axis, m/z on another, intensity as the readout.

\[Pause.\]

Why does this matter? Because **adding the ion mobility dimension dramatically speeds up identification**. Co-eluting peptides that have similar m/z but different shapes get separated by TIMS before they reach the mass analyzer, reducing the chimeric-spectrum problem that plagues complex samples. The timsTOF can run very short LC gradients — fifteen, twenty minutes — and still identify nearly as many peptides as a two-hour Orbitrap run, because the ion mobility separation does some of the work that chromatography would otherwise have to do.

The Bruker timsTOF Pro and the newer timsTOF Ultra are now major competitors to the Orbitrap line, especially for high-throughput applications and single-cell proteomics. The pattern: **TIMS adds a fourth dimension — retention time, m/z, intensity, plus ion mobility — and that extra dimension is the speed-up that's enabling the next generation of throughput.**

---

## SEGMENT 17 — Single-cell proteomics — the frontier

For decades, doing proteomics on a single cell was a fantasy. A single mammalian cell contains about 200 picograms of protein. Bulk proteomics typically wants micrograms — five or six orders of magnitude more. The signal from one cell was simply too dim for the instruments. So while RNA-seq went single-cell in 2014 and revolutionized biology, proteomics stayed bulk.

That has changed dramatically in the last five years. Three developments converged. First, **sample preparation miniaturization** — methods like nanoPOTS (developed at PNNL by Ryan Kelly) and SCoPE-MS (Nikolai Slavov's group at Northeastern) shrunk the processing volume from microliters to nanoliters, drastically reducing sample loss. Second, **instrument sensitivity** — modern Orbitraps and especially the timsTOF SCP have pushed detection limits down to attomoles per peptide. Third, **clever multiplexing** — SCoPE-MS uses TMT to mix one single cell with a hundred-cell carrier channel, so the single cell rides along on the carrier's signal for identification purposes while its own reporter ion gives the quantification.

\[Pause.\]

The result: single-cell proteomics is real now. You can measure one thousand to three thousand proteins per single cell, in throughputs of dozens to hundreds of cells per day. Compared to single-cell RNA-seq, which measures up to ten thousand genes per cell at much higher throughput, single-cell proteomics is still earlier-stage — more expensive, slower, lower coverage. But it's growing fast.

The analogy: **single-cell proteomics is the holy grail — measuring the actual proteins in individual cells, not just the RNA recipes. Currently hard. Advancing fast.** Once the throughput catches up to single-cell RNA-seq, we'll have a complete picture of cellular heterogeneity at the protein level, and many of the disconnects between mRNA and protein — that 0.4 correlation we mentioned at the start — will become measurable at single-cell resolution.

---

## SEGMENT 18 — The frontier — Nautilus, Quantum-Si, and AI proteomics

Let's close by looking at where the field is headed in the next five to ten years. Three frontiers stand out.

**First, antibody-free single-molecule protein sequencing.** Two startups, **Nautilus Biotechnology** and **Quantum-Si**, are building platforms to sequence individual protein molecules without mass spec at all. Nautilus's approach: deposit single proteins on a chip with millions of addressable wells, then probe each well with cycles of fluorescent affinity reagents that recognize short amino acid motifs; from the pattern of binding, infer protein identity. Quantum-Si's approach: a semiconductor chip that does Edman-like sequential degradation with fluorescent recognizers, reading sequence directly off single molecules. Both are early. Neither has displaced mass spec. But if they work at scale, they could enable proteomics with the same sample throughput and dynamic range as DNA sequencing — finally closing the gap.

**Second, AI-driven spectrum interpretation.** Deep learning models like **Prosit, DeepMass, MS2PIP** predict expected fragment spectra from peptide sequences, allowing database search to use predicted-spectrum matching instead of just peak presence. Models like **DeepNovo** and **Casanovo** do de novo sequencing — reading sequence directly off an MS2 spectrum without a database. **AlphaFold**-style models are starting to predict ion mobility, retention time, and even direct identification confidence. The next generation of search engines will be deep-learning-native and will identify peptides at much higher rates from the same raw data.

**Third, clinical proteomics at scale.** Companies like **Olink** (proximity extension assay, antibody-based — not mass spec but proteomic) and **SomaLogic** (aptamer-based) have proven there's demand for measuring thousands of proteins in tens of thousands of patient samples. The UK Biobank and similar cohorts have generated plasma proteomics data on hundreds of thousands of individuals. Mass spec, especially DIA on timsTOF and Astral instruments, is becoming competitive on cost and throughput, and will likely take over a growing share of that market.

\[Pause.\]

So where does this leave us? Mass spectrometry for proteomics has gone from "characterize one protein in a year" in 1980, to "identify a few hundred proteins per sample" in 2000, to "quantify ten thousand proteins per sample in two hours" in 2025. The field is mature, instrumented, software-rich, and accelerating. It is the necessary complement to RNA-seq — the measurement of what the cell actually built, not just what it ordered. Every modern systems biology study, every precision medicine pipeline, every drug discovery program now includes proteomics as a default. The bottleneck that defined biology for fifty years is gone.

If you take one thing from this lecture, take this: **a mass spectrometer is a scale that weighs every molecule. From the mass and the fragmentation pattern, you read the identity. Apply that trick to a hundred thousand peptides at once, computationally assemble back into proteins, and you have measured the proteome.** Everything else is engineering and software around that one core idea. The rest of your career, when you read a proteomics paper, you'll be able to see the workflow underneath the jargon.

Thanks, everyone. Questions?

---

## APPENDIX

**Key instruments referenced**

- **LTQ-Orbitrap (2005, Thermo)** — first commercial Orbitrap; established the modern era of high-resolution shotgun proteomics.
- **Q-Exactive family (Thermo)** — quadrupole front-end + Orbitrap; the workhorse of mid-2010s discovery proteomics.
- **Orbitrap Fusion / Lumos / Eclipse / Exploris / Astral (Thermo)** — successive flagships, each pushing speed and sensitivity further.
- **timsTOF Pro / SCP / Ultra (Bruker)** — TIMS + TOF; ion mobility front-end, faster gradients, strong for single-cell proteomics.
- **Sciex TripleTOF and ZenoTOF** — Q-TOF instruments, used historically for SWATH-DIA and still in pharma quantification.
- **Triple quadrupole instruments (Thermo TSQ, Sciex QTRAP, Agilent 6500 series)** — workhorses of MRM targeted proteomics and clinical mass spec.

**Key software**

- **Sequest (1994)** — original database search; conceptual ancestor of all modern search engines.
- **Mascot** — long-dominant commercial search engine.
- **MaxQuant** — Cox/Mann lab; integrated LFQ; transformed Orbitrap proteomics in the 2010s.
- **FragPipe / MSFragger** — Nesvizhskii lab; modern fast search, default in many labs today.
- **Proteome Discoverer (Thermo)** — commercial platform integrating multiple search engines.
- **Spectronaut (Biognosys)** — leading commercial DIA analysis platform.
- **DIA-NN (Demichev)** — free, fast, deep-learning-enhanced DIA analyzer; modern standard.
- **Skyline (MacCoss lab)** — open-source platform for targeted proteomics, PRM and MRM analysis.

**Sequence-to-spectrum prediction (deep learning)**

- **Prosit, MS2PIP, DeepMass** — predict expected fragment spectra from sequence.
- **DeepNovo, Casanovo, PointNovo** — de novo sequencing directly from MS2 spectra.

**Quantification approaches at a glance**

- **LFQ (label-free)** — cheap, scales, missing values, batch effects.
- **SILAC** — metabolic labeling, accurate, limited to cultured cells.
- **TMT / iTRAQ** — chemical isobaric labels, multiplexed up to 18 samples, eliminates batch effects within a plex.
- **DIA** — modern reproducible large-scale label-free; replacing DDA for most quantitative studies.
- **PRM / MRM** — targeted, absolute quantification, gold standard for biomarker validation.

**PTM enrichment methods**

- **Phosphopeptides** — TiO2, IMAC (Fe-NTA), polymer-based MOAC.
- **Ubiquitin (diGly remnant)** — anti-K-epsilon-GG antibody (Cell Signaling PTMScan).
- **Acetyl-lysine** — anti-acetyl-lysine antibodies.
- **Methyl, succinyl, malonyl, crotonyl** — various specific antibodies; growing menu.
- **Glycopeptides** — lectin enrichment, HILIC chromatography, specialized search software (Byonic, pGlyco).

**RNA-seq vs. mass-spec proteomics — when to use which**

- mRNA-to-protein correlation is roughly 0.4 — neither is a complete proxy for the other.
- RNA-seq: cheap, high throughput, every gene, dynamic transcriptional response, splicing, non-coding RNAs.
- Proteomics: actual functional molecules, includes PTMs, captures translation/stability/degradation, much harder for low-abundance proteins.
- Best practice for systems biology: multi-omic integration of RNA-seq and proteomics on the same samples.

**Further reading**

- Aebersold & Mann, "Mass-spectrometric exploration of proteome structure and function," *Nature* (2016) — definitive review.
- Cox & Mann, "Quantitative, high-resolution proteomics for data-driven systems biology," *Annual Review of Biochemistry* (2011) — MaxQuant-era framing.
- Demichev et al., "DIA-NN: neural networks and interference correction enable deep proteome coverage in high throughput," *Nature Methods* (2020).
- Kelleher lab publications on top-down proteoform analysis.
- Slavov lab publications on SCoPE-MS single-cell proteomics.

---



