# FACS and Flow Cytometry

**A 2-hour undergraduate immunology and cell biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to two hours, plus a mid-point break. (Read faster, ~140 wpm, and it lands nearer 90 minutes, leaving room for questions or board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The central idea: an assembly line for cells

Alright, let's get started. Good morning, everyone. For the next two hours we are going to talk about a technique called **flow cytometry**, and its more aggressive cousin **FACS** — fluorescence-activated cell sorting. And I want to begin not with the machine, not with the history, not with the colors, but with the central conceptual move that this technology made, because once you see that move, everything else falls into place.

Here is the move. For most of the history of biology, when you wanted to measure something about cells, you had two options. Option one: take a population of cells — say, a tube full of blood — grind them up, and measure something about the average. The average amount of protein X. The average mRNA level. The average lipid composition. That gives you one number per population. Useful, sometimes — but it tells you nothing about the variation between individual cells. If half your cells are screaming with protein X and half have none at all, the average looks identical to the case where every cell has a moderate amount. Averaging hides everything interesting.

Option two: look at cells one by one under a microscope, count by eye, score them yourself. That works — and microscopy is wonderful — but it is brutally slow. You can score maybe a hundred cells an hour if you're careful. A thousand cells if you push it. And there are tens of billions of cells in a tablespoon of blood. You will never finish.

Flow cytometry breaks that wall open. The central move is this: **build an assembly line for cells**. Run them through one at a time, in single file, past a measurement station — and at the measurement station, photograph each one. Record a multi-parameter snapshot of every cell that passes. Then count. Then sort. The instrument can do this at thousands of cells per second. Tens of thousands. Millions of cells per minute, routine. You get the speed of an averaging measurement and the resolution of a one-at-a-time measurement, simultaneously.

\[Pause.\]

Let me sharpen the analogy. Imagine an old-fashioned bottling plant. Bottles come in from one end on a conveyor belt, single file, one bottle at a time. As each bottle passes a particular station, a camera fires — actually, several cameras, looking at the bottle from different angles, with different colored lights — and the system records: how tall is this bottle, how wide, is there a defect on the side, what color is the cap, what's the fill level. Each bottle gets a row in a database. And then, down the line, there's a sorter — a little air-jet that can puff each bottle off the belt into one of several bins based on what the cameras saw. Defective bottles into the reject bin. Tall green-cap bottles into bin one. Short red-cap bottles into bin two. And so on.

That is exactly what a flow cytometer is, except the bottles are individual cells and the cameras are laser-and-detector pairs that measure light scattered or emitted by each cell as it passes. The conveyor belt is a fast-flowing column of fluid, and the trick that puts the cells into single file is something called hydrodynamic focusing, which we'll get to in detail. The detectors record, per cell, how much light comes off at each of several wavelengths. And on a FACS instrument — the sorter — the air-jet equivalent is an electrostatic deflection system that grabs individual cells out of the stream and drops them into different collection tubes based on the measurements.

A flow cytometer, in one sentence: **an assembly line for cells where each cell gets photographed at multiple wavelengths and a multi-parameter snapshot per cell is recorded.** A FACS instrument: **the same thing, plus physical sorting of cells based on those measurements.**

\[Pause.\]

If you walk out of here in two hours and you can do three things — one, explain to a friend at the pub what a flow cytometer does and why it solves a real problem; two, sketch the inside of the machine and name the major parts and what they do; three, look at a flow cytometry plot — those familiar dots-on-a-square-with-axes plots — and read it, understand what gating means, understand what each axis is — then we have succeeded. Everything else hangs off those three.

Why does this technique matter so much? Because cells are not the same. A drop of blood has — let me give you the actual list — red cells, platelets, neutrophils, eosinophils, basophils, monocytes, lymphocytes, and within the lymphocytes you have helper T cells, killer T cells, regulatory T cells, B cells, NK cells, NKT cells, gamma-delta T cells, and within helper T cells you have Th1, Th2, Th17, Tfh, and inside each of those there are activated and resting and exhausted and memory states. Every one of those populations is a different thing, doing a different job, expressing a different repertoire of proteins. If you grind up the blood and measure the average level of, say, interferon-gamma, you get a number that means essentially nothing. If you run the blood through a flow cytometer and ask which cells are making interferon-gamma, you get the actual biological answer: the Th1 helper cells, mostly, plus some NK cells, with this exact frequency, at this exact intensity, in this exact subset. The technique is what makes single-cell quantification of immune populations possible. It is the foundational measurement of modern immunology, modern hematology, large parts of oncology, large parts of microbiology, and a growing part of stem cell biology and developmental biology.

So today we're going to take it apart. We'll start with the inventor and the first instrument. We'll work through the optics. We'll talk about the colors and the antibodies. We'll work through the central technical headache of the field, which is something called compensation. We'll talk about sorting. And then we'll spend the second half on the modern era — spectral cytometry, mass cytometry, imaging flow, what's coming next. Let's begin with the man who built the first machine.

---

## SEGMENT 2 — Len Herzenberg and Mac the Cell Sorter

The person who, more than anyone else, invented flow cytometry as we know it — and specifically invented the sorter, the FACS half — is a scientist named **Leonard Herzenberg**, at Stanford. Everyone called him Len. He died in 2013, in his eighties, after a career that essentially built an entire field of biology around an instrument he made in his basement laboratory.

Herzenberg started thinking about the problem in the mid-1960s. He had trained as a geneticist, and he was working on antibody-producing cells, trying to understand which cells in a mouse made which antibodies. The problem was the same problem we've been talking about: cells are heterogeneous, and the only way to do real work was to look at them individually. But looking at them individually under a microscope was too slow to do meaningful experiments. He needed a machine.

The other thing Herzenberg had access to, by lucky proximity, was an idea borrowed from a different field entirely. At the Los Alamos National Laboratory, physicists had been building instruments to count and analyze particles in fluid streams — droplets in jet propulsion experiments, ink droplets for early ink-jet printing. The droplet generation technology — making a fluid stream break up into uniform, controllable droplets — was solved engineering by the early 1960s. And in parallel, biologists had been playing with the idea of forcing cells past a measurement window in fluid for years; there's a whole pre-history involving a man named Mack Fulwyler at Los Alamos who in 1965 built the first machine that could sort cells in droplets based on a measurement.

Herzenberg's contribution was to fuse all of this together with antibodies and fluorescence and build it into a usable laboratory instrument. Between 1965 and 1972, in a series of versions, his group built the first **fluorescence-activated cell sorter** — and they called the first really workable version of it, with characteristic humor, **"Mac the Cell Sorter"**. Mac. Like a person. The instrument had a personality and a name. It took up half a room. It required constant maintenance. It needed a graduate student to babysit it through every run. And it worked.

\[Pause.\]

What did Mac do? Mac did, in 1972, essentially what a modern flow cytometer does today, just with one laser, one or two detectors, and a lot more fiddling. A sample of cells was loaded into the instrument. The cells were forced into a fluid stream that focused them into single file. The stream passed through a laser beam — early on, an argon-ion laser shining blue at 488 nanometers. As each cell crossed the beam, light scattered off it in various directions, and any fluorescent labels on the cell — initially fluorescein-conjugated antibodies — got excited and emitted. Detectors measured the scatter and the fluorescence. A primitive computer recorded the values per cell. And then, downstream of the laser, the fluid stream broke up into droplets, the instrument applied a charge to droplets containing cells of interest, and the charged droplets were electrostatically deflected into collection tubes.

In 1972, this was magic. Nobody had ever been able to take a pool of millions of cells, identify the rare ones — say, the one in ten thousand that bound a particular antibody — and physically pull them out into a separate tube, alive, in numbers sufficient to grow up or do further experiments on. Mac let you do exactly that. The first big payoff was immunology. Herzenberg's lab and a wave of others used FACS to identify and isolate T cells and B cells based on surface markers, to discover entire subsets of lymphocytes nobody had known about, to define what we now think of as the lineage tree of the immune system. The CD4 helper T cell. The CD8 killer T cell. The B cell. The natural killer cell. The dendritic cell, eventually. Most of the basic taxonomy of the immune system was either discovered or confirmed using flow cytometry, mostly in the 1970s and 1980s.

\[Pause.\]

There's a commercial side to the story that's worth noting. Herzenberg's group worked with a Stanford-area company called Becton-Dickinson — BD for short — to commercialize the design, and by the mid-1970s BD was selling the FACS instrument as a product. That partnership is why, today, the dominant manufacturer of flow cytometers worldwide is still BD, and why the very phrase "FACS analysis" entered the working vocabulary of biology lab. There were competitors — Coulter, which became Beckman Coulter; later Cytek; eventually mass cytometry from Fluidigm — and we'll talk about the modern landscape in detail near the end. But the original instrument, the basic architecture of what every flow cytometer still does, came out of Herzenberg's lab and was branded FACS by BD, and that name and that architecture have stuck for fifty years.

There is one more thing about Herzenberg worth pausing on. His wife, **Leonore Herzenberg**, was a co-author on essentially every important paper from the lab and was, by all accounts, equally responsible for the science. They worked as a pair for decades. It is sometimes a useful corrective to remember that "the inventor" of a field is rarely one person — it's usually a partnership, a group, a culture, and a moment when several streams of engineering and biology happened to converge in one room.

Now let's go inside the machine and see how the trick is actually pulled off.

---

## SEGMENT 3 — Hydrodynamic focusing: the trick that makes it work

Okay. So the central problem of building a flow cytometer is this: how do you get cells, suspended in a milliliter or two of fluid in a tube, to pass through a laser beam **one at a time**, in single file, at a known fixed position, at a known fixed velocity, thousands of times per second, without clogging, without doubling up, and without the cells colliding with the walls of the channel?

Stop and think about that for a moment. If you just pumped a cell suspension through a tube and shone a laser at the tube, you'd get a mess. Cells would be all over the cross-section of the tube — near the walls, in the middle, on top of each other. Some would pass through the beam, some wouldn't. Some would pass through dim edges of the beam, some through the bright center. Two cells might pass at the same instant and look like one giant cell to the detectors. You'd have no idea what you were measuring. Garbage in, garbage out.

The trick that solves this problem — and it is a beautiful piece of fluid mechanics — is called **hydrodynamic focusing**. Here is how it works.

\[Pause.\]

You have two fluids. The first is the **sheath fluid**, usually just buffered saline, a clean, particle-free, isotonic solution. The sheath fluid is pumped at high volume — large flow rate — through a wider outer channel of the instrument. The second is your **sample fluid**, which is your suspension of cells. The sample is pumped, very slowly, through a much narrower inner tube that sticks out into the center of the sheath stream — like a tiny straw protruding into the middle of a much bigger river.

When the sample fluid emerges from the tip of the inner tube into the surrounding fast-flowing sheath, something elegant happens. The sample fluid does not mix with the sheath — at the scales and flow rates involved, the flow is what's called laminar, which means the two streams flow alongside each other without turbulent mixing. But because the sheath is moving much faster and the channel narrows as both fluids head toward the interrogation point, the slow sample stream gets stretched — accelerated and pulled thin — into a tiny, narrow filament running right down the center of the much bigger sheath stream. The sample filament can be as thin as ten or twenty micrometers across — basically one cell wide.

Any cells suspended in that sample fluid are now forced into that narrow filament. They have nowhere else to go. They line up like beads on a string, one at a time, dead center in the channel, all moving at the same velocity, all crossing the laser beam at the exact same position. That is hydrodynamic focusing, and it is **the trick that makes single-cell analysis work**. Without it, you cannot do flow cytometry. With it, you can do millions of cells in minutes.

\[Pause.\]

Let me give you another way of picturing it. Imagine a busy highway with eight lanes of fast-moving sheath traffic. In the middle lane, you very slowly merge a single-file column of cars from an on-ramp. The fast outer lanes basically herd your slow merging cars into the exact center lane and accelerate them all to the same speed. By the time the cars reach the inspection station downstream, they're all going the same speed, single file, dead center, evenly spaced. That's what the sheath does to the cells.

The practical consequence — and this matters when you actually run an instrument — is that you control the rate at which cells pass the laser by controlling the sample pressure relative to the sheath pressure. Push the sample harder, more cells per second pass the laser, but the sample core also gets a little wider and your measurements get a little less precise. Pull the sample back, the core narrows, the measurements get cleaner, but throughput drops. Every flow cytometry operator learns to balance this trade-off: low pressure for clean precise data on small populations, high pressure for fast counting when you have plenty of cells.

There is another consequence of single-file flow worth noting. The cells, because they're all moving through the same point at known velocity, take the same amount of time to cross the laser beam — typically a few microseconds. The electronics on the other side of the detectors know how to chop time into those microsecond-wide windows and assign every photon to a particular cell. The detection is, in a real sense, time-multiplexed: each cell gets its own little time slot in the data stream.

Now we have cells in single file moving through a defined point. The next question is: what's at that point? Lasers. Lots of lasers.

---

## SEGMENT 4 — Lasers and detectors: the optics

So we have a stream of cells passing one at a time through a fixed spot. Now we have to make light interact with each cell and measure what comes back. This is the optics, and the design of modern flow cytometers is really about how many lasers you can pack onto the same little spot, and how many detectors you can use to catch the light that comes off.

Let's start with what you actually shine at the cell. A modern instrument typically has multiple laser lines, each producing a beam at a different wavelength. The four most common wavelengths you'll find on a midrange instrument are:

- A **488 nanometer** blue laser — the classic; the one Mac the Cell Sorter used; still the workhorse for many fluorochromes.
- A **561 nanometer** yellow-green laser — added in the 2000s for better excitation of orange and red dyes.
- A **640 nanometer** red laser — for red-excited dyes like APC.
- A **405 nanometer** violet laser — added in the late 2000s to open up an entirely new excitation window for the violet-excited dye family.

High-end instruments add more lines on top of these — UV at 355 nanometers, green at 532, infrared lines for newer dyes. Cytek's modern spectral instruments routinely have five lasers; some have seven. Each laser is focused onto the same tiny interrogation point, or onto closely spaced points a few hundred micrometers apart along the flow path. As a cell travels down the stream, it crosses each laser beam in sequence, and the instrument knows the time of flight between beams precisely enough to associate each detector signal with the correct cell.

\[Pause.\]

Why multiple lasers? Because no single laser excites every fluorescent dye well. Each fluorochrome has a particular excitation spectrum — it absorbs strongly in some wavelength range and not others. If you only have a 488 nm blue laser, you can only see dyes that absorb blue light efficiently. Add a red laser and you unlock the red-excited dye family. Add a violet laser and you unlock another whole family — the violet-excited dyes, brand-named things like BV421, BV510, BV605, BV711, BV786, an enormous palette that Becton-Dickinson introduced in the 2000s and that essentially doubled the practical color count overnight.

Now, what comes back off the cell? Two qualitatively different kinds of light, and the instrument measures both.

The first is **scattered light** — laser light that the cell physically bounces or refracts as it passes through the beam. The cell isn't fluorescent, in this case; the laser light just bounces off it, like a flashlight beam off a marble. The instrument captures this scattered light at two specific angles — straight ahead and off to the side — and those two scatter measurements turn out to be enormously useful, as we'll see in the next segment.

The second is **fluorescence** — light emitted by fluorescent dye molecules attached to the cell, after those dyes have absorbed laser light and re-emitted at a longer wavelength. This is where the antibody-staining and fluorochrome work comes in. Each fluorochrome emits in a particular wavelength band. The instrument splits that emitted light using a cascade of optical filters and dichroic mirrors — these are little partially-reflective glass plates that pass some wavelengths and reflect others — and routes each wavelength band to its own dedicated detector.

Each detector is typically a **photomultiplier tube**, or PMT — a vacuum tube that converts a tiny number of photons into a measurable electrical pulse. PMTs are exquisitely sensitive — they can count single photons under the right conditions — and they have to be, because the amount of light coming off a single cell, even a brightly stained one, is genuinely small. Modern instruments have replaced many PMTs with arrays of more efficient silicon photodetectors called APDs — avalanche photodiodes — which improve sensitivity and dynamic range, but the principle is the same: catch every photon, convert it to a voltage, and feed the voltage to a digitizer.

\[Pause.\]

So the optics of a flow cytometer, in summary: multiple laser lines hitting cells at the interrogation point; a cascade of dichroic mirrors and bandpass filters splitting the emitted light into wavelength bands; one sensitive detector per band; and electronics that digitize and timestamp every detector pulse so that one cell becomes one row in a multi-dimensional data file. A modern instrument might have twenty, thirty, even forty separate detectors, each watching its own little slice of the spectrum, all firing in microsecond bursts as cells flash through the laser beams below.

That's the hardware. Before we add antibodies and fluorochromes, though, there are two measurements you get essentially for free, with no staining at all. They're called forward scatter and side scatter, and they're the starting point of every flow cytometry experiment. Let's talk about them next.

---

## SEGMENT 5 — Forward scatter and side scatter: the free measurements

So. You have cells passing through a laser beam, with no antibody staining at all — just unlabeled cells in buffer. What can you learn from them?

It turns out, more than you'd think. Even unstained cells scatter the laser light in characteristic ways, and the two scatter measurements every flow cytometer makes are called **forward scatter** and **side scatter**, abbreviated **FSC** and **SSC**. These two parameters, on their own, are often enough to distinguish the major populations in a blood sample. They are the **first two parameters before any antibody staining** — and you get them for free, every run, on every cell.

Let me explain what they actually measure.

**Forward scatter — FSC.** This is light scattered by the cell in roughly the same direction the laser was going — straight ahead, give or take a few degrees. A small detector sits downstream of the laser, off to the side just enough to dodge the unscattered laser beam itself, and it measures how much of the laser's photons get deflected into its angular window as a cell passes. The amount of forward scatter from a cell is, roughly, **proportional to the cell's size**. A big cell intercepts more laser, scatters more light forward; a small cell scatters less. FSC is therefore a size proxy.

Now, a careful caveat — FSC is not exactly cell volume, and it's affected by cell shape, refractive index, and orientation. But for the rough sorting of "is this a big cell, a medium cell, or a small cell," forward scatter does the job, and that gross size distinction is enormously useful. In a blood sample, lymphocytes are small. Monocytes are medium-large. Neutrophils are medium-large with bumpy interiors. Red blood cells and platelets are tiny. Just by FSC, you can already separate the small lymphocyte cloud from everything else.

**Side scatter — SSC.** This is light scattered by the cell **at right angles to the laser beam** — measured by a detector mounted off to the side, looking at the cell from 90 degrees. Light gets scattered to the side mostly when the laser bounces around inside the cell, off internal structures — granules, vesicles, the nucleus, the rough surfaces inside. So the amount of side scatter is, roughly, **proportional to the cell's internal complexity, or granularity**. A simple smooth cell with a clean cytoplasm scatters little to the side. A cell crammed with granules — like a neutrophil or an eosinophil — scatters a lot.

\[Pause.\]

Put those two parameters on a plot. X-axis: forward scatter. Y-axis: side scatter. Run blood through the machine. What do you see?

You see something gorgeous, and you can read it like a map. There will be three or four distinct clouds of dots in the plot, each one a different population.

In the lower left corner — low FSC, low SSC — you see a cloud of small, smooth cells. Those are **lymphocytes**. T cells, B cells, NK cells, all jumbled together.

Slightly above and to the right — medium FSC, medium SSC — you see **monocytes**: bigger than lymphocytes, somewhat more granular.

Far to the right and up — high FSC, high SSC — you see a big cloud of **granulocytes**: neutrophils, eosinophils, basophils, all crammed with granules, all relatively large.

Down to the very lower-left corner, often crowded against the axis — that's **debris**, dead cells, broken cell fragments, and dust. You'll usually exclude this stuff with a "gate" — a polygonal region drawn around the populations you actually care about, telling the analysis software to ignore anything outside.

That is the **gating starting point**. Every flow cytometry analysis, essentially, begins with an FSC-vs-SSC plot, and the first thing you do is draw a gate around the population of interest — usually lymphocytes if you're doing immunology, sometimes granulocytes if you're studying neutrophil biology, and so on. Everything downstream — the antibody staining, the fluorescence measurements — is conditioned on having pulled the right population out of the scatter plot first.

\[Pause.\]

There's a small but important variant called **FSC-H versus FSC-A**, which is used to remove "doublets" — events where two cells passed through the laser stuck together and the instrument recorded them as a single fat cell. The height of the forward scatter pulse and the area under the curve don't scale the same way for singlets and doublets, so plotting height against area gives you a clean way to draw a gate that excludes the doublets. This is the second routine step in essentially every analysis: lymphocytes by FSC-SSC, then singlets by FSC-H vs FSC-A, then on to the fluorescence channels.

So FSC and SSC, with no antibodies and no dyes, already let you sort blood into its major cellular compartments. That, on its own, was a meaningful clinical tool — modern hematology analyzers use scatter measurements as the basis for the routine complete blood count, the CBC, that your doctor orders. But what makes flow cytometry transformative is what you add on top of scatter: the fluorochrome-labeled antibodies, which let you ask not just "what kind of cell is this" but "which specific proteins is this cell expressing." That's the next layer, and that's where the rainbow palette comes in.

---

## SEGMENT 6 — Fluorochromes: the rainbow palette

So now we want to label cells with antibodies — and we want each antibody to carry a different color, so we can distinguish, in a single tube, ten or twenty different markers on the same cell at the same time. To do that, we need a palette of fluorescent dyes — fluorochromes — each one with a distinct emission spectrum, each one bright enough to detect on a single cell, each one chemically compatible with attachment to an antibody.

Let me walk you through the major members of this palette, because if you spend any time in an immunology lab, these names are going to come at you like the names of the Greek alphabet, and you may as well know them.

\[Pause.\]

**FITC** — fluorescein isothiocyanate. The original. Green-emitting, excited by the 488 nanometer blue laser. FITC is the dye Herzenberg's group used on Mac the Cell Sorter back in the 1970s, and it is still in use today as a workhorse for many panels. It's bright, it's cheap, and almost every flow cytometer ever built has a FITC channel. The downside is that FITC photobleaches relatively quickly, and its spectrum is broad enough that it bleeds into nearby channels.

**PE** — phycoerythrin. A large protein, not a small molecule — it's an actual purified algal protein that fluoresces red-orange. Excited by either the 488 or 561 nanometer laser, emits around 575 nm. PE is, photon for photon, one of the brightest fluorochromes available, and PE conjugates are the workhorse for detecting low-abundance markers. If you want to see a protein that's only present in a few hundred copies on the cell surface — a rare receptor, a low-expression marker — you put PE on the antibody, because PE will give you signal where dimmer dyes won't.

**PE-Cy7, PE-Cy5, PerCP-Cy5.5** — these are **tandem dyes**, which are a clever trick. You take PE, attach a second dye like Cy7 chemically onto it, and the PE absorbs blue light and transfers the energy to the Cy7, which then emits in the far red. The result is a dye that's excited by blue laser light but emits at a much longer wavelength than PE alone — opening up a new emission channel that wouldn't otherwise be reachable with a single-stage dye on that laser. Tandems are how, in the 1990s and 2000s, panels expanded from four colors to eight, ten, twelve.

**APC** — allophycocyanin. Another algal protein, this one excited by the 640 nm red laser and emitting in the deep red, around 660 nm. APC opened up the red-laser channel and is the standard bright far-red dye in immunology. **APC-Cy7**, the tandem, pushes emission even further into the near-infrared.

**PerCP** — peridinin-chlorophyll protein. Excited by blue, emits in the red. The original workhorse for blue-excited red emission in early multi-color panels.

**BV421, BV510, BV605, BV650, BV711, BV786** — the **Brilliant Violet** family, introduced by BD in the 2000s, all excited by the 405 nm violet laser. These dyes single-handedly opened up an entirely new color dimension. Before violet lasers and BV dyes were widespread, you had maybe eight colors. After, you had sixteen — and the high-end panels today routinely use eight or more violet-excited channels alongside the blue and red ones.

And there are more — Brilliant UV dyes excited by 355 nm UV lasers, the Spark dyes from BioLegend, the Super Bright dyes from eBioscience, the cFluor and Vio dyes from various vendors. Every year, more dyes come out, with cleaner spectra and brighter emission. The palette is genuinely a rainbow now — you can pretty much find a fluorochrome for any combination of laser excitation and emission wavelength you might want.

\[Pause.\]

Two things to keep in mind about this palette.

First, **the dye is attached to the antibody**, not to the cell. The cell doesn't make the dye; the dye is a chemical reagent that's been chemically coupled to an antibody molecule in a tube, before you ever add it to your cells. When you buy a tube of "anti-CD4 APC" from a vendor, you're buying purified anti-CD4 antibody molecules with APC molecules chemically conjugated to them. You add the antibody-dye conjugate to your cell suspension, the antibodies bind their targets on the cell surface, and now those cells carry that dye. Wash off the unbound antibody, run the cells through the cytometer, and you measure the fluorescence in the APC channel as a readout of how much CD4 is on each cell.

Second, **the colors are limited by spectral overlap**. Every fluorochrome has a broad emission spectrum — not a single sharp line, but a broad bell-shaped curve. The emission tails of two different fluorochromes overlap with each other. The PE channel detector also picks up some FITC light spilling over into its window. The APC detector picks up some PE-Cy7 light. The Brilliant Violet 605 detector picks up some BV650 light. This spectral overlap, this **spillover**, is the central technical headache of flow cytometry, and it's such a big deal that we're going to give it its own segment. That's compensation, which we'll get to in Segment 8.

But before we tackle that — and before we get any deeper into the optics and electronics — let's pull back and talk about how you actually use this technique in practice. How does a real experiment look? What does the staining workflow involve? That's our next segment.

---

## SEGMENT 7 — The staining workflow: from blood to data

So let's walk through, end to end, what a real flow cytometry experiment looks like. Concrete. Step by step. The kind of thing a first-year graduate student in an immunology lab learns to do in their first month and then does, more or less, every week of their training career.

You want to ask, let's say, the following question: in a sample of mouse spleen, what fraction of the T cells are CD4 helpers, what fraction are CD8 killers, and within the CD4 helpers, how many are regulatory T cells — also known as Tregs?

Here is what you do.

**Step one: get a single-cell suspension.** Flow cytometry needs cells in fluid, not cells stuck together in tissue. So you start by taking the mouse spleen, gently mashing it through a fine wire mesh into buffer, lysing the red blood cells with a brief hypotonic shock, washing the cells, and ending up with a tube of free-floating splenocytes in maybe a milliliter of buffer. The cells need to be viable, separated, and not clumped. If they're clumped, you filter them through a nylon mesh strainer to break the clumps. Single-cell suspension is non-negotiable; clumps clog the cytometer and ruin the data.

**Step two: count and aliquot.** Count the cells with a hemocytometer or an automated counter. You want, typically, about a million cells per tube, give or take. Pipette the right volume into a small tube — usually one of the 5 milliliter round-bottom polystyrene "FACS tubes" that have been standard equipment since the 1970s.

**Step three: block Fc receptors.** Many immune cells, especially myeloid cells, have Fc receptors on their surface — proteins designed to grab the Fc end of any antibody floating around. If you don't block these, your fluorescent antibodies will stick non-specifically to Fc receptors and you'll get false positive signal. So you preincubate the cells with a blocking antibody — in mice, anti-CD16/32, called "Fc block" — for a few minutes before adding your real staining cocktail.

**Step four: add the antibody cocktail.** Here is the heart of the technique. You take a tube of cells and add a **cocktail of fluorochrome-labeled antibodies**, each one targeting a different protein, each one carrying a different color. For our hypothetical experiment, the cocktail might be: anti-CD3 in FITC (to mark all T cells), anti-CD4 in PE (to mark helpers), anti-CD8 in APC (to mark killers), anti-CD25 in PE-Cy7 (a Treg marker), anti-CD127 in BV421 (low on Tregs, so we'll gate on CD25-high, CD127-low). That's a five-color panel — a modest panel by modern standards.

Add the cocktail. Mix. Incubate on ice in the dark for twenty to thirty minutes. The "on ice" matters because warmth makes antibody-bound surface markers internalize, throwing off your measurements. The "in the dark" matters because fluorochromes bleach under room light.

**Step five: wash.** After incubation, you wash the cells twice with fresh buffer — centrifuge them down, dump the supernatant containing unbound antibody, resuspend in fresh buffer. This removes the excess antibody that didn't bind to anything. If you don't wash, that free antibody floats around in solution and gives you background fluorescence everywhere.

**Step six: add a viability dye.** Dead cells stick antibodies non-specifically and give garbage signal. So you add a small-molecule dye like DAPI or 7-AAD or a fixable viability dye that only stains dead cells (because it can only get into cells with broken membranes). When you analyze, you gate out the dye-positive dead cells.

**Step seven: run on the cytometer.** Take your tube of stained cells to the instrument. Mount the tube. Run it. The cells stream through the lasers, you collect data on every event, you store the file. A million cells takes a few minutes.

**Step eight: analyze.** Open the data file in a program like FlowJo or FCS Express. Draw your gates. First, FSC-vs-SSC to gate lymphocytes. Then FSC-H-vs-A to gate singlets. Then live cells by gating out the viability-dye-positive cells. Then CD3-positive to identify T cells. Then within CD3+, plot CD4 versus CD8 to identify helper and killer subsets. Then within CD4+ helpers, plot CD25 versus CD127 to identify the Treg population. Count cells in each gate. Compute frequencies. Make plots. Write a paper.

That, in nine steps, is essentially every flow cytometry experiment ever done. **Wash cells, add antibody cocktail of five to thirty antibodies, each in a different color, incubate, wash, analyze.** The cocktail might have five colors or twenty-five colors, the cells might come from blood or tumor or culture, the markers might be classic immunology surface proteins or novel ones you discovered yesterday — but the workflow is always essentially this.

\[Pause.\]

One variant of the workflow worth calling out: **intracellular staining**. Many of the most interesting molecules are inside cells, not on the surface. Cytokines — small signaling proteins like interferon-gamma, IL-2, TNF-alpha — accumulate in the cytoplasm of activated T cells. Transcription factors like FOXP3, the master regulator of regulatory T cells, sit in the nucleus. To detect these, you can't just add antibody to live cells, because the antibody won't get inside the cell — antibodies are large proteins that can't cross intact cell membranes.

The solution is a two-step process called **Fix/Perm**, short for fix and permeabilize. After surface staining, you fix the cells with formaldehyde — which crosslinks the proteins and stabilizes everything in place. Then you permeabilize the cells with a detergent like saponin, which punches little holes in the cell membrane just big enough for antibodies to crawl through. Now you add a second cocktail of antibodies targeted at your intracellular antigens — anti-IFN-gamma in BV605, anti-FOXP3 in PE — and incubate, wash, and run. The intracellular antibodies enter through the detergent holes, bind their targets inside the cell, and give you a measurement of intracellular protein on top of the surface measurements you already have.

A common workflow: stimulate T cells in culture with a peptide, add a transport inhibitor called brefeldin A to trap the cytokines inside instead of letting them be secreted, then Fix/Perm and stain for the cytokines along with the surface T cell markers. The output: "in this peptide-stimulated culture, four percent of CD4 T cells made interferon-gamma, two percent made IL-2, and one percent made both." That's the readout. That's what tells you, quantitatively, how many cells responded to the antigen — and the technique scales to thousands of conditions and millions of cells with the same workflow.

So now we have the workflow. But everything we've described relies on being able to separate the signal of one fluorochrome from another, and as I hinted earlier, that's harder than it sounds. The fluorochromes spectrally overlap, and the math to clean up that overlap is its own subject. That's compensation. Let's get into it.

---

## SEGMENT 8 — Compensation and spillover: the constant headache

Okay. We have to talk about compensation. This is the topic that has caused more graduate-student tears, more discarded datasets, more arguments at lab meeting than any other single subject in flow cytometry. It is the central technical headache of the field, and it is worth understanding properly because if you ever sit down at a flow cytometer or analyze flow data, this will eat at least a third of your time.

Here's the problem. We have a palette of fluorochromes. Each one is excited by a particular laser and emits at a particular wavelength range. We have detectors, each one watching a particular wavelength range and assigned to a particular fluorochrome. In theory, FITC light goes only to the FITC detector, PE light goes only to the PE detector, APC light goes only to the APC detector, and so on. Clean, separated, simple.

In practice, every fluorochrome's emission spectrum is **broad**, not narrow. FITC's emission peak is at around 520 nanometers, but FITC keeps emitting, weakly, all the way out past 600 nanometers. The PE detector, which is centered around 575 nanometers, **also picks up some FITC light**. Not all of it — most of the photons FITC emits land in the FITC detector window — but a chunk of the FITC emission, maybe 10 or 20 percent, spills over into the PE channel and gets counted as if it were PE signal.

This is called **spillover** or **bleed-through**. And it's symmetric and pervasive — PE spills into PE-Cy5, PE-Cy5 spills into PerCP, APC spills into APC-Cy7, BV421 spills into BV510, BV510 spills into BV605, every fluorochrome spills into the detectors of its neighbors. In a fifteen-color panel, every detector is picking up real signal from its assigned fluorochrome plus some amount of contamination from five or ten of its neighbors.

If you don't correct for this, your data is junk. A cell that's positive for FITC will look weakly positive for PE, even if there's no PE on the cell at all — because of the FITC spilling into the PE channel. Try to read those data as "this cell expresses both CD3 and CD4," and you'd be making up biology that isn't there.

\[Pause.\]

The fix is called **compensation**, and it is conceptually simple even if the bookkeeping is annoying.

Step one: take a sample that's stained with FITC only. Run it through the cytometer. Look at the FITC detector — it sees signal, as expected. Look at the PE detector — it sees some signal too, even though there's no PE on the cells. That signal is pure spillover. Measure it. Now you know: for every X units of signal in the FITC detector, you get Y units of false signal in the PE detector. The ratio Y over X is the **spillover coefficient** from FITC into PE.

Step two: do the same thing for every fluorochrome in your panel. Stain cells with PE only, measure how much PE bleeds into FITC, into PerCP, into PE-Cy7. Stain cells with APC only, measure how much APC bleeds into APC-Cy7, into PerCP. And so on. You end up with a square matrix — one row per fluorochrome, one column per detector — where each entry tells you what fraction of one fluorochrome's signal contaminates a given detector. This is the **spillover matrix**, also called the **compensation matrix**.

Step three: when you analyze your real experiment, for each cell, you mathematically **subtract** the spillover contributions from each detector. If the FITC detector reads 1000 units and the FITC-into-PE spillover is 15 percent, you subtract 150 units of FITC contamination from whatever the PE detector reads. Now what you're left with in the PE channel is, hopefully, the true PE signal — what's actually on the cell, not what spilled over from FITC.

So compensation is, mathematically, **subtracting the contamination contributions**. Modern software does this automatically, given the spillover matrix, but you have to acquire the single-color controls — the "comp controls" — every time you run an experiment with a new panel. And in a fifteen-color panel, that's fifteen extra tubes to run for comp before you even get to your real samples.

\[Pause.\]

Let me give you the analogy that helped me understand this properly. Imagine you have a row of microphones at a dinner party, each one pointed at one person. You want to record each person's voice in isolation. But of course, microphone 1, pointed at Alice, also picks up some of Bob's voice next to her. Bob's microphone picks up some of Carol's. And so on. If you played back microphone 1 raw, you'd hear Alice and a faint echo of Bob. Compensation is the audio engineer doing the math: he knows, from a quiet sound check earlier, exactly how much of Bob bleeds into Alice's mic, and he subtracts that contribution in real time from the recording. Now microphone 1 plays back pure Alice.

That's all compensation is. The constant headache is that **you have to do the sound check every time** — every new panel, every change in instrument settings, every new lot of antibody. And it's compensation that prevents flow cytometry panels from scaling indefinitely. In a panel with thirty highly overlapping fluorochromes, the compensation math gets fragile — small errors in the spillover matrix amplify into big errors in the corrected data, and you lose the ability to resolve dim populations. This is one of the main reasons that the spectral cytometry revolution, which we'll talk about in Segment 14, has been such a big deal: it changes the math problem from "subtract contributions" to "unmix the full spectrum," which is a more robust formulation.

But for classical flow cytometry, compensation is just the price of admission. You learn it, you do it, you check it, you correct it, every single experiment, forever. Welcome to the field.

---

## SEGMENT 9 — The multi-color era: from 4 colors to 30

Let's now zoom out and look at how the field has evolved in terms of how many colors you can use in a single tube — because the trajectory is pretty staggering.

In the late 1970s, when Mac the Cell Sorter was new, you had **one color**. FITC, basically. You could ask, of a cell, "is FITC bright on this cell, yes or no?" That was one question per cell, on top of the FSC and SSC scatter measurements. Even that was revolutionary, because nobody else could ask any question per cell at all.

Through the 1980s, the field went to **two colors** — FITC plus PE, with a single 488 nm laser exciting both — then to **three colors** with the addition of PerCP and Texas Red. By the early 1990s, four-color analysis was state of the art. You could simultaneously measure four surface markers per cell, plus FSC and SSC. A typical four-color panel might be CD3, CD4, CD8, and a viability marker — enough to ask "how many T cells, how many helpers, how many killers, alive" — and that was a serious experiment in 1992.

Through the late 1990s and into the 2000s, the field jumped to **six, eight, ten colors** as more lasers were added — second laser, third laser — and more fluorochromes were developed. The tandem dye chemistry I mentioned in Segment 6 — PE-Cy5, PE-Cy7, APC-Cy7 — was a huge enabler, because it let one excitation laser drive emission across many wavelength bands.

By the mid-2000s, with violet lasers and the Brilliant Violet dye family from BD, panels routinely hit **fifteen to twenty colors**. The technique called **OMIP**, optimized multi-color immunofluorescence panel, was published in a series of papers showing reference panels — fifteen colors, twenty colors, then twenty-eight colors — that could be reproduced by any lab with the right instrument and reagents.

By the late 2010s and into the 2020s, with **spectral cytometry** — which we'll talk about in detail later — you could realistically run **thirty colors, forty colors** in a single tube, with proper unmixing instead of classical compensation. The current frontier, on a Cytek Aurora or BD FACSDiscover, is genuinely **forty to fifty colors per cell**, all simultaneously, all on living cells, at thousands of events per second.

\[Pause.\]

Why does this matter? Because biology is high-dimensional. A T cell isn't just CD3+CD4+ — it's CD3+CD4+CD25+CD127-CCR7-CD45RA-CD27-PD1+TIGIT+ICOS+CXCR5+, with each of those proteins telling you something about lineage, activation state, exhaustion, migration pattern, and effector potential. The more proteins you can measure simultaneously on the same cell, the finer-grained your characterization of cell state. Four colors gives you T cells. Twenty colors gives you exhausted antigen-specific tissue-resident memory T cells with effector function. Forty colors lets you do unbiased high-dimensional clustering that finds populations nobody had a name for.

The price, of course, is complexity. A forty-color panel takes weeks to design properly. You have to balance fluorochrome brightness against antigen abundance — bright fluorochromes for dim antigens, dim fluorochromes for bright antigens. You have to worry about spillover from every channel into every other channel. You have to titrate every antibody to find the right concentration. You have to do single-color compensation controls and fluorescence-minus-one — FMO — controls to identify where each gate boundary should sit. Building a 30-color panel is a real engineering project. Once it's built, though, it gives you data that, fifteen years ago, would have required a dozen separate experiments and twice as many cells.

The trajectory is clear. One color in the 1970s, four colors in the early 1990s, ten colors in the 2000s, twenty colors in the 2010s, thirty-plus in the 2020s. The doubling time is roughly five to seven years. And there's no clear ceiling — the limit isn't the optics or the math, it's the rate at which the dye chemistry community can produce new fluorochromes with sufficiently distinct spectra. We'll talk about how spectral cytometry has shifted the math problem in a way that may let us go much further.

\[BREAK\]

---

## SEGMENT 10 — Cell sorting: the FACS half

Alright. Welcome back. We've spent the first half on the measurement side of flow cytometry — how the instrument photographs cells one at a time, what the optics and the dyes look like, how compensation works. Now we get to the part that gives **FACS** its name. The F. The "fluorescence-activated" part is the measurement we've just been discussing. The "cell sorting" part is what makes FACS more than just analytical — it makes the technique **preparative**. You don't just count cells, you physically separate them.

Here is how sorting works.

You set up your instrument the same way you would for analysis. Cells in single file through the laser beams, scatter and fluorescence detectors firing, multi-parameter snapshot per cell. Same as before. But on a sorter, the fluid stream doesn't just keep flowing into a waste container after the laser. Instead, downstream of the laser interrogation point, the stream is **vibrated** by a piezoelectric crystal at a precise frequency — typically tens of thousands of vibrations per second. Just like a thin stream of water from a faucet, that vibration causes the stream to **break up into uniform droplets** at a fixed point a few centimeters below the laser. Each droplet is a tiny ball of fluid, perhaps a hundred micrometers across, and the vibration timing is so precise that the droplets form at the exact same location, at the exact same rate, every time.

The sorter knows, for each droplet, whether it contains a cell — because it knows when a cell passed the laser, and it knows the time of flight from the laser to the droplet break-off point. So it can predict, for each cell, exactly which droplet that cell will end up in. And then, in real time — in microseconds — the sorter electronics decide, based on the gating rules you've set up, whether that cell is one you want to keep.

If yes: at the precise instant that droplet detaches from the stream, the sorter applies a brief electric charge to it. The droplet leaves the nozzle carrying a tiny static charge — positive or negative, depending on which collection tube you want it to go to. The charged droplet then falls through a strong electric field generated by two high-voltage **deflection plates** — one positive, one negative — and the field bends the droplet's trajectory sideways. A positively charged droplet bends one way, a negatively charged droplet bends the other way, an uncharged droplet falls straight down into the waste. Below the plates sit collection tubes, positioned to catch the deflected droplets.

That's it. That's **electrostatic droplet sorting**. Vibrate the stream into droplets, charge the ones containing cells of interest, deflect them with high-voltage plates, catch them in tubes. The instrument can sort at tens of thousands of cells per second, into two or four or even six different tubes simultaneously, based on whatever gating logic you've set up.

\[Pause.\]

Let me give you a concrete example to anchor it. Suppose you want to isolate **regulatory T cells** — Tregs — from a mouse spleen, to study their function in culture. Tregs are defined as CD4+CD25+CD127-low, plus FOXP3+ inside the cell, though FOXP3 requires fixation so we'll just use the surface markers. You take your spleen, make a single-cell suspension, stain with your antibody cocktail: CD4 in BV421, CD25 in PE, CD127 in APC. You set up the sorter with a gate: "lymphocytes, singlets, live, CD4+, CD25+ (high), CD127 (low)." That's a small population — maybe 1 to 5 percent of CD4+ cells. You load your sample, hit start. Cells stream through the laser. Most of them — the non-Tregs — go to waste. But every time a cell crosses the laser with the Treg phenotype — CD4+ bright, CD25+ bright, CD127 dim — the sorter charges the corresponding droplet, the deflection plates fling it sideways into the collection tube, and you accumulate, over an hour or two of sorting, maybe a few hundred thousand to a few million pure Treg cells in your collection tube. **Once you've identified a cell as "CD3+CD4+CD25+CD127-" — a regulatory T cell — the instrument generates a charged droplet around that cell and deflects it into a different tube.** Pure regulatory T cells, alive, ready to put into culture, ready to inject into a recipient mouse, ready to sequence.

This is the part that made FACS world-changing for cell biology. Before FACS, if you wanted a pure population of any rare cell type, you had to develop a magnetic-bead protocol or a column separation, both of which work only on one or two markers at a time and rarely give you clean purity. With FACS, **as long as you can define the population with antibody markers, you can get it pure** — to better than 99% purity, in adequate numbers, alive, in a couple of hours. Tregs, hematopoietic stem cells, dendritic cell subsets, antigen-specific T cells, rare leukemic cells, single GFP-positive transfected cells from a heterogeneous transfection — all of these became routinely isolatable once FACS was widely available.

The downside, and there is one, is that sorting is slow compared to analysis. To get a million Tregs you might need to run a hundred million input cells through the sorter at a sustainable rate, and that takes hours. Sorting is also stressful for cells — the high pressure, the shear forces, the electric fields — so for some sensitive cell types you lose viability. And sort instruments are expensive and require trained operators. But for getting pure rare populations, there is, to this day, no better tool.

---

## SEGMENT 11 — Standard immunology assays: the immune system on a plot

Let me ground all of this in actual immunology, because if you spend any time around a flow cytometer, you'll discover that the same dozen or so panels get run over and over again by labs everywhere. These are the **standard immunology assays**, and the field has more or less converged on a shared vocabulary of markers and combinations that define the major immune cell types.

Let me walk you through the basics.

**T cells.** The defining marker is **CD3**, which is part of the T cell receptor complex and is on essentially every conventional T cell. So step one in any T cell analysis: gate on CD3+. Then within CD3+, you split into helpers and killers using **CD4** (helpers) and **CD8** (killers). That gives you two non-overlapping populations: CD3+CD4+ and CD3+CD8+. Within CD4 helpers, you can further subset by FOXP3 (regulatory T cells), or by combinations of CCR6, CXCR3, and CCR4 (Th1, Th2, Th17), or by CD45RA and CCR7 (naive vs memory vs effector). Within CD8 killers, you can look at activation (CD69, CD25), exhaustion (PD-1, TIGIT, TIM-3), and effector function (granzyme B, perforin, IFN-gamma).

**B cells.** The defining marker is **CD19** or **CD20** — both are on B cells from early development through mature stages. Within CD19+, you subset into naive (IgD+IgM+CD27-), memory (CD27+), plasmablasts (CD27++CD38++), and various transitional and germinal-center subsets using CD24, CD38, CD10, and the immunoglobulin isotypes.

**Dendritic cells.** Trickier because they're rare and diverse. You typically gate on lineage-negative cells — meaning negative for the markers of T cells, B cells, NK cells, monocytes — and then identify dendritic cells as HLA-DR+ with various combinations of CD11c, CD123, CD141, and CD1c distinguishing the conventional and plasmacytoid subsets.

**NK cells — natural killer cells.** Defined classically as CD3-negative (not T cells) and CD56-positive in humans, or NK1.1+ in mice. Within NK cells you split by CD56 brightness — CD56-bright cells are cytokine producers, CD56-dim cells are killers — and you can look at activation markers like NKG2D and inhibitory receptors like KIRs.

**Monocytes.** CD14 is the canonical monocyte marker, with CD16 splitting them into classical (CD14+CD16-), intermediate (CD14+CD16+), and non-classical (CD14-low CD16+) subsets.

**Granulocytes.** Neutrophils are typically CD66b+, CD16+; eosinophils are Siglec-8+ in humans; basophils are CD123+HLA-DR-low.

\[Pause.\]

The big antibody vendors — BD Biosciences, BioLegend, Thermo Fisher's eBioscience line — sell pre-validated **panel kits** for many of these standard analyses. A "Lyoplate" or a "BD multi-color panel set" is essentially a pre-mixed lyophilized cocktail of antibodies, optimized for a specific question, with the spillover characteristics worked out by the manufacturer. You buy the kit, you reconstitute it, you stain your cells, you run them, you analyze with a pre-designed gating template. For a lot of routine work, especially clinical work where standardization is paramount, these pre-made panels are the norm.

In a clinical hematology or immunology lab — say, the lab that runs your blood when you have a fever of unknown origin or when you're being worked up for an immunodeficiency — flow cytometry is the central diagnostic modality. The lymphocyte subset count — CD4 T cells, CD8 T cells, B cells, NK cells — is a standard test ordered by the hundreds of thousands every year. CD4 counts are how HIV disease progression is monitored. CD20 is how rituximab-treated lymphoma patients are monitored. Specific leukemia diagnoses — distinguishing acute myeloid leukemia from acute lymphoblastic leukemia, distinguishing one B cell lymphoma from another — depend critically on flow cytometric immunophenotyping. The technique isn't just a research tool; it is, every day, a clinical workhorse that affects real treatment decisions for real patients.

---

## SEGMENT 12 — Phospho-flow: measuring signaling inside the cell

Let me show you one more application of the technique, because it illustrates how flexible flow cytometry can be when you push the staining workflow. The application is called **phospho-flow**, and the central idea is to measure not just which proteins a cell expresses, but **which proteins are phosphorylated** at any given moment.

Why does phosphorylation matter? Because phosphorylation is one of the major switches that turn proteins on and off in cell signaling. When a cell receives a signal — say, a cytokine binding to its receptor — that signal propagates inward through a cascade of phosphorylation events: the receptor's intracellular tail gets phosphorylated, which recruits a kinase, which phosphorylates a downstream signaling molecule like STAT or ERK or AKT, which then translocates to the nucleus and turns on genes. The phosphorylation state of these signaling proteins is, in a real sense, the cell's **active state** at that instant — what signals it's currently processing, what pathways are firing.

Traditional ways to measure phosphorylation — Western blots, mostly — work on cell lysates, so they give you the **average** phosphorylation level across a population. That's the averaging problem we started this lecture with, all over again. If 10 percent of your cells have STAT1 phosphorylated and 90 percent don't, the Western blot looks the same as if all the cells have a modest amount. You lose the single-cell distinction.

Phospho-flow brings flow cytometry to bear on this problem. The protocol: stimulate your cells briefly with the signal you want to study — say, IFN-gamma for a few minutes — then immediately **fix** the cells with formaldehyde or methanol to lock the phosphorylation state in place. (Phosphorylation is dynamic and reverses in seconds, so you have to freeze it fast.) Then permeabilize the cells deeply — usually with methanol or saponin — so antibodies can get to intracellular epitopes. Then add antibodies that **specifically recognize the phosphorylated form** of the target protein — anti-phospho-STAT1, anti-phospho-ERK, anti-phospho-AKT — each one labeled with a different fluorochrome. Run on the cytometer.

The output: per cell, the abundance of phosphorylated STAT1, phosphorylated ERK, phosphorylated AKT, plus all the usual surface markers identifying which cell type it is. Now you can ask questions like: "in this mixed culture, after IFN-gamma stimulation, which subset of cells phosphorylated STAT1?" and the answer might be "monocytes responded strongly, but a subset of T cells didn't respond at all" — single-cell resolution on signaling responses.

\[Pause.\]

This approach was developed by **Garry Nolan**'s group at Stanford in the early 2000s, and it has become a major technique in immunology and oncology. In a leukemia sample, for instance, you can use phospho-flow to ask which malignant cells respond to a drug that inhibits a particular kinase — and you can distinguish responders from non-responders within the same patient's tumor. That information, in turn, predicts who will respond clinically and who won't, which is the kind of biomarker that increasingly drives precision oncology.

There's also a beautiful related technique, often called **fluorescent reporter** or **FRET-based sensor flow**, where you express a fluorescent protein-based sensor inside cells that changes fluorescence in response to a signal — calcium concentration, kinase activity, membrane voltage. The cells are not fixed, the signal is read in real time, and you can ask quantitative biophysics questions on tens of thousands of cells per second. It's less common than antibody-based flow but it's a useful trick for certain questions.

The point of phospho-flow, and of all these workflow variants, is that flow cytometry is **fundamentally a measurement modality** — you can adapt the chemistry to measure essentially anything you can target with an antibody or a small-molecule probe. Surface proteins, intracellular proteins, phosphorylation states, DNA content, RNA expression (with the right probes), metabolic activity (with metabolic dyes), apoptosis state (with annexin V), membrane potential (with voltage-sensitive dyes), cell cycle stage (with DNA stains), and on and on. The instrument doesn't care what's being measured — it just counts photons per channel per cell. The flexibility of the chemistry is what makes the technique so universally useful.

---

## SEGMENT 13 — Detecting phenotype shifts: the Wofsy use case

I want to spend a moment on a particular use case that pulls together a lot of what we've been discussing, because it's the kind of question that flow cytometry is uniquely positioned to answer and it shows up across immunology, oncology, and microbiology in slightly different costumes. The framework was given a clean mathematical formulation by **Carla Wofsy**, a mathematical biologist who worked extensively on the statistics of how to detect changes in cell populations from flow cytometry data.

Here's the question. You have two samples — say, blood from a patient before treatment and blood from the same patient after treatment. You run both through flow cytometry with the same panel. You see, in each sample, a multi-parameter distribution of cells — a cloud of dots in high-dimensional space, where each cell is a point. The question is: **has the population shifted?** And if so, **how, and by how much?**

This sounds easy. It is not. With one or two parameters, you can eyeball the difference: "the CD4 fraction went up by 15 percent, the CD8 fraction went down by 10 percent." But with twenty parameters, the populations live in twenty-dimensional space, and your eye is useless. A subset of cells might have shifted in some particular high-dimensional direction — say, they've become more CD25-positive while losing CCR7, while staying constant on everything else. That kind of shift is a real biological event — a regulatory T cell phenotype emerging from a naive T cell population, perhaps — but it's not visible on any single two-parameter plot. You need methods that look at the high-dimensional structure as a whole.

\[Pause.\]

Wofsy's framework — and a lot of subsequent work that built on it — formalized the problem as one of **distribution comparison in high dimensions**. You're not comparing two means; you're comparing two empirical probability distributions over high-dimensional space. You want a test statistic that's sensitive to shifts in any direction, in any subpopulation, while being robust to noise and the inevitable run-to-run variation in cytometer settings.

In practice, the modern toolkit for this includes things like:

- **Manual gating** — the classical approach: draw boundaries by hand on a sequence of two-parameter plots, count cells in each region, compute frequencies. Works well for the populations you expected to see. Misses what you didn't expect.
- **Automated clustering** — algorithms like FlowSOM, PhenoGraph, Citrus, X-shift, that group cells into clusters based on their multi-parameter expression patterns, then ask which clusters changed in frequency between samples. These are unbiased and can find populations you didn't know existed.
- **Dimensionality reduction** — methods like tSNE, UMAP, PCA, that take the high-dimensional data and project it down to two or three dimensions for visualization. You see "islands" in the projected space, each island a different cell state, and you can watch islands appear, disappear, or shift between conditions.
- **Statistical comparison** — frequency-of-each-cluster comparison with proper multiple testing correction; earth-mover's distance for distribution comparison; mixed-effects models that account for sample-to-sample variability.

The Wofsy use case is the abstraction: **detect that a phenotype has shifted, in a sample of cells measured at single-cell resolution across many parameters, against a baseline of expected variation**. That's the question that flow cytometry is the right tool for, and that's why the technique is so central to modern immune monitoring — for vaccine trials, for cancer immunotherapy trials, for autoimmune disease drug trials. You measure the immune state before and after intervention with a 20- or 30-color panel, you use computational methods to detect shifts, and you publish a paper that says "this drug induced a 3-fold expansion of effector memory CD8 T cells with a particular exhaustion signature."

That kind of question, in a world without flow cytometry, would simply be unanswerable. With it, it's a Tuesday afternoon analysis.

---

## SEGMENT 14 — BD, Beckman, Cytek: the equipment landscape

Let's step back for a moment and look at who actually makes the instruments. Because the equipment landscape, and how it's evolved over the last decade, tells you a lot about where the field is going.

For most of the history of flow cytometry, there were essentially two big manufacturers: **BD** (Becton-Dickinson), descended from the Herzenberg-Stanford partnership, and **Beckman Coulter**, descended from Wallace Coulter's pioneering work on impedance-based cell counting in the 1950s. BD's flagship analyzers — the FACSCalibur in the 1990s, the LSR series in the 2000s and 2010s, the LSRFortessa, the FACSymphony — were the workhorse instruments in academic immunology labs worldwide. BD's sorters — the FACSAria, the FACSAria Fusion, the FACSMelody, the FACSDiscover — defined the cell sorting market for decades. Beckman Coulter's CytoFLEX series and the Gallios are widely used, especially in clinical labs and certain academic markets.

Both of these companies built classical flow cytometers in the model we've been describing: one detector per fluorochrome channel, classical compensation, panels of up to 20 or so colors on the high-end instruments. For thirty years, this was the architecture, and it worked well.

\[Pause.\]

Then, around 2015, a much smaller company called **Cytek Biosciences**, founded by former BD engineers in Fremont, California, introduced a different architecture that has been quietly reshaping the field. Their instrument, the **Cytek Aurora**, is a **spectral cytometer**, and it represents a real shift in how the measurement is done.

In a classical flow cytometer, you have one detector per fluorochrome channel, each detector watching a narrow wavelength window matched to one fluorochrome's emission peak. You record one number per detector per cell. You correct for spillover with classical compensation math. If you want to add a new fluorochrome, you need a new dedicated detector channel with the right filter.

In a spectral cytometer, you do something different. **You measure the full emission spectrum of each cell across many narrow wavelength bins** — typically 64 detectors per laser, covering the full visible range in narrow slices. You don't try to assign each detector to one fluorochrome. Instead, you record the full spectral fingerprint per cell, and then in software you **unmix** the signal mathematically — you decompose the observed spectrum at each cell into a weighted sum of pure fluorochrome reference spectra, where the weights are the abundances of each fluorochrome on that cell.

The analogy is this. Classical flow cytometry is like having a chord played on a piano, and you have one microphone tuned to each key. You measure how loud each key is independently, but spillover means each microphone picks up some adjacent keys. **Spectral cytometry is like having a single very high-resolution microphone that records the entire sound waveform, and then software decomposes the recording into the contributing keys, given that you know what each individual key sounds like.** The math is more robust. The number of "keys" you can simultaneously play and resolve is larger. And — this is the killer feature — you can use two fluorochromes with nearly overlapping emission peaks, as long as their full spectra are distinguishable somewhere across the wavelength range. In classical compensation, two fluorochromes with overlapping peaks would be impossible to separate. In spectral unmixing, as long as their spectra differ in shape anywhere, they're resolvable.

The practical consequence is that on a Cytek Aurora, **you can routinely run 30, 40, even 50 colors in a single tube**, with reliable unmixing and high resolution. The same number of colors on a classical BD instrument would be much harder to make work.

Cytek's market share has grown dramatically since the Aurora launched, and BD has responded by launching its own spectral instruments — the **FACSDiscover** and the new **FACSymphony A5 SE**. Beckman Coulter has the **CytoFLEX SRT** spectral sorter. The field has, in a span of about five years, undergone a meaningful architectural shift from filter-based detection to spectral detection, and that shift is one of the main reasons high-parameter cytometry is exploding right now.

So the equipment landscape today: BD remains the largest player by historical install base, especially in sorters. Cytek is the disruptor and the spectral leader. Beckman Coulter holds clinical and certain academic segments. There are smaller players too — Sony Biotechnology, with the SH800 sorter; Miltenyi with the MACSQuant; ThermoFisher's Attune NxT, which uses acoustic focusing instead of pure hydrodynamic focusing for higher throughput. The market is more diverse than it was twenty years ago, and the architectural innovation is healthy.

---

## SEGMENT 15 — Imaging flow cytometry: the upgrade

Now let me show you another important variant of the technique, which extends flow cytometry in a different direction — not more colors, but **more information per cell** by adding actual imaging.

The instrument here is the **Amnis ImageStream**, developed by a company called Amnis (later acquired by EMD Millipore and then by Luminex), which combined a flow cytometer with a high-speed microscope camera. Here's the idea.

In a regular flow cytometer, each cell becomes a row of numbers — one number per detector channel. You know that the cell has, say, X amount of CD4 protein, Y amount of CD25 protein, and so on. But you don't know **where** on the cell those proteins are. Is CD4 distributed uniformly across the membrane, or clustered into a few patches? Is the FOXP3 actually inside the nucleus, where it belongs, or stuck in the cytoplasm? Is the cell making contact with another cell via the immune synapse? You can't tell from a single number per channel.

ImageStream replaces those single numbers with **actual images**. As each cell passes through the instrument, it's photographed in multiple channels simultaneously by a high-speed camera, and you get, per cell, a stack of images — brightfield, dark-field, and one image per fluorochrome channel — captured at single-cell rate. The images aren't full microscope-quality images — the resolution is limited by the flow speed and the imaging optics — but they're more than enough to see whether a marker is at the surface or inside the cell, whether two cells are conjugated, whether a structure is punctate or diffuse.

\[Pause.\]

The analogy: **imaging flow is the upgrade — image each cell AND measure its fluorescence; tells you not just "is this protein present" but "where in the cell is it."** That spatial information opens up entirely new kinds of questions.

For example: you want to study T cell-B cell conjugate formation — the moment when a T cell physically contacts a B cell during an immune response. In regular flow cytometry, a T-cell-B-cell doublet just looks like one weird event you'd probably gate out as a doublet. In ImageStream, you can identify those doublets as actual conjugates, look at where the markers cluster at the contact interface, and quantify how many conjugates form under different conditions.

Or: you want to study **nuclear translocation of a transcription factor**. NF-kB, for example, sits in the cytoplasm at rest and moves into the nucleus when the cell is activated. With ImageStream, you can compute, per cell, a "nuclear translocation score" by comparing the NF-kB image to the DAPI nuclear image. Cells with NF-kB in the nucleus get a high score; cells with cytoplasmic NF-kB get a low score. You can then quantitatively track translocation across thousands of cells, in single-cell resolution, faster than you'd ever manage on a microscope.

Or: you want to study **autophagy** — the process by which cells form internal vesicles called autophagosomes. With ImageStream, you can count autophagosome spots per cell across millions of cells in a few hours. On a microscope, you'd be counting for weeks.

Imaging flow has carved out specific niches — DNA damage foci quantification, mitochondrial morphology, virus-cell binding, immune synapse formation — and it lives somewhere between conventional flow and conventional microscopy. It doesn't replace either, but where it fits, nothing else can do the same kind of quantitative imaging at flow-cytometry throughput.

---

## SEGMENT 16 — Mass cytometry: the metals trick

Now let me show you a completely different approach to the same problem — measure many parameters per cell at high throughput — that doesn't use fluorescence at all.

The technology is called **mass cytometry**, or **CyTOF** (cytometry by time of flight), and it was developed by a Canadian company called DVS Sciences (later acquired by Fluidigm, now Standard BioTools). The central trick is delightful, and once you hear it, you'll see why it solves several of the problems we've been wrestling with.

Here's the trick. Instead of labeling antibodies with fluorochromes, you label them with **heavy metal isotopes** — specifically, isotopes from the lanthanide series of the periodic table: praseodymium, neodymium, samarium, europium, terbium, holmium, and so on. These metals are normally rare in biological samples — your cells contain almost none of them — so there's no background.

You take an antibody, you chemically attach a chelator — a small molecule that grips a metal ion tightly — and you load the chelator with a particular metal isotope. Now you have an anti-CD4 antibody loaded with, say, 145Nd (neodymium-145). An anti-CD8 antibody loaded with 146Nd. An anti-CD3 antibody loaded with 152Sm (samarium-152). Each antibody carries its own isotopic tag, with a precisely defined mass.

You stain your cells with a cocktail of metal-tagged antibodies the same way you would with fluorochrome-tagged ones — incubate, wash, etc. Now your cells have antibodies bound to them, and each antibody carries a particular metal isotope at the position where the fluorochrome would have been.

Here's where it gets wild. You don't put the cells in a flow cytometer with lasers and detectors. You put them in a **mass spectrometer**. Each cell is sprayed into a high-temperature plasma — heated to about 7,000 Kelvin — which atomizes and ionizes everything on the cell, including the metal tags. The resulting cloud of metal ions is then sent through a time-of-flight mass spectrometer, which separates the ions by mass and counts how many ions of each mass came from that cell. The output: a count of how much of each metal isotope was on that cell — which translates directly into how much of each antibody-target was on that cell.

\[Pause.\]

**The metals trick: replace fluorochrome with heavy-metal isotope, replace optical detector with mass spec, 40+ parameters per cell, no compensation needed.**

That last part — "no compensation needed" — is the killer feature. Because mass spec separates ions by mass with extremely high resolution, there is essentially no spillover between channels. 145Nd and 146Nd are completely separable; there is no equivalent of "FITC bleeding into PE." You can use 40 or 50 metal channels simultaneously and the math is trivial — just count the ions per mass. No spillover matrix. No FMO controls. The compensation headache that eats your life in classical flow cytometry just doesn't exist in mass cytometry.

The downsides? First, **CyTOF is slower** than conventional flow — typically a few hundred cells per second instead of tens of thousands. Second, **the cells are destroyed** — they're atomized in the plasma, so you can't sort with CyTOF, only analyze. Third, **the instruments are very expensive** — a CyTOF costs roughly twice what a high-end flow cytometer costs. And fourth, **the dynamic range per channel is lower** than for bright fluorochromes like PE.

But for high-parameter immune profiling, where you want 30 or 40 markers per cell without the panel-design headaches, CyTOF has become a major workhorse, especially in immune monitoring for clinical trials. Garry Nolan's group at Stanford was a major early adopter; the technology has been used to profile the immune systems of cancer patients, vaccine recipients, and infection cohorts in ways that were impossible with classical flow.

The competition between fluorescence-based spectral cytometry (Cytek and others) and metal-based mass cytometry (Standard BioTools' CyTOF) is one of the more interesting current debates in the field. Spectral cytometry now reaches comparable parameter counts and is much faster and cheaper — but CyTOF still has the cleaner separation between channels and is preferred for certain kinds of unbiased high-dimensional profiling. Both technologies are here to stay.

---

## SEGMENT 17 — Sorting for downstream applications: the gateway to single-cell omics

One more application that has become enormously important in the last fifteen years: **using FACS sorting as the front end of single-cell genomics**.

Here's the picture. Flow cytometry, especially the sorting variant, is uniquely good at one thing: **defining a pure population of cells based on multi-parameter marker expression and physically isolating them in a tube**, alive, in numbers ranging from a single cell up to millions. That capability turns out to be the perfect input to a number of modern molecular techniques.

**Bulk RNA-seq from sorted populations.** Before single-cell RNA-seq was practical, the standard way to get cell-type-specific gene expression data was to FACS-sort a pure population — say, Tregs — and then do bulk RNA-seq on the sorted cells. The transcriptome you got was the average over that pure population, but because the population was pure to begin with, the average was meaningful and interpretable. Studies like the **ImmGen consortium** generated comprehensive RNA-seq reference maps of every major immune cell type by FACS-sorting each one separately and sequencing them, and those reference datasets are still in heavy use.

**Single-cell RNA-seq from sorted populations.** Modern droplet-based single-cell RNA-seq platforms like 10x Genomics' Chromium can sequence the transcriptome of thousands or tens of thousands of individual cells in a single run. But the input to the machine is still a tube of cell suspension, and what's in that suspension matters. If you input crude unsorted blood, you'll get mostly red cells and platelets, and your rare populations will be undersampled. If you input pre-sorted live cells, gated to remove debris and doublets and dead cells, you get clean usable data. If you input pre-sorted **specific** populations — say, only the CD45+ immune cells from a tumor, or only the CD34+ hematopoietic stem cells from bone marrow — you enrich for the cells you actually care about and you get vastly better signal-to-noise for your question.

**ATAC-seq from sorted populations.** ATAC-seq measures chromatin accessibility — which regions of DNA are open and accessible to transcription factors in a particular cell. Like RNA-seq, ATAC-seq works on populations of cells, and pre-sorting by FACS gives you cell-type-specific accessibility maps. Single-cell ATAC-seq has also emerged, again typically with pre-sorted populations going into the platform.

**Index sorting.** This is a clever technique where the sorter records, for each individual sorted cell, the full multi-parameter flow profile of that cell as it was sorted. Then you do single-cell sequencing (RNA-seq, or whatever) on each cell and you can later link the sequencing data for that cell back to its surface phenotype. So you know not just "this single cell had this transcriptome" but "this single cell that had this transcriptome also had this exact combination of surface markers." The two readouts are linked at the single-cell level.

\[Pause.\]

The general pattern: **flow cytometry is the front end, the sample-prep tool, the gateway** to many of the most powerful single-cell molecular techniques of the last decade. The strengths of flow — high-throughput, well-defined gating, physical isolation of pure populations — are complementary to the strengths of sequencing — deep molecular characterization of fewer cells. The combination is now standard in cancer immunology, hematology, developmental biology, and any field that asks high-dimensional questions about heterogeneous tissues.

If you go to a major immunology conference today, you'll see far more talks combining FACS sorting with downstream RNA-seq or scATAC or proteomics or CITE-seq than you will see talks using either technique alone. The technologies have become co-evolved partners, and the productivity gain from combining them is enormous.

---

## SEGMENT 18 — Frontier: spectral, full-spectrum, machine learning

Let me close with where the field is heading. There are several active directions, and they're all converging on a common future.

**Direction one: more colors, more parameters.** Spectral cytometry pushed practical panel sizes from 20 colors to 40 colors to, increasingly, 50 colors per cell. The fluorochrome chemistry community is producing new dyes at a steady pace — Brilliant dyes from BD, Spark dyes from BioLegend, cFluor dyes from Cytek, custom polymer-based dyes from various groups — each one carving out a slightly different niche in the spectrum. There is no clear ceiling on panel size, and 60 or 70 color panels are already being demonstrated in research settings. The limit becomes panel design complexity and biological interpretability rather than technical capability.

**Direction two: full-spectrum approaches.** Beyond just running spectral cytometers with discrete fluorochromes, there is interest in even more general schemes — for instance, **barcoded antibody panels** where each antibody carries a unique combinatorial code that's decoded computationally, or **DNA-barcoded antibodies** that can be read out by sequencing instead of fluorescence (techniques like CITE-seq go partway here). These approaches push the dimensionality even higher than fluorescence alone allows.

**Direction three: machine learning for population identification.** Manual gating — drawing polygons by hand on two-parameter plots — was the original way to define populations in flow data, and it's still the dominant approach in clinical labs. But in research, **unsupervised clustering algorithms** like FlowSOM, PhenoGraph, and UMAP-based clustering have largely taken over for high-parameter data. These algorithms cluster cells into groups based on their multi-parameter expression patterns, without you having to specify gates in advance. They can find populations you didn't know existed. They can quantify shifts between samples without bias toward your prior expectations.

The frontier is now **machine-learning-driven population identification** — neural networks trained on large reference datasets to recognize specific cell types from their multi-parameter signatures, even with noisy or partial panels. Companies like Cellarity and various academic groups are building tools that, given a new flow dataset, can automatically annotate the major populations, flag novel populations, and even predict functional states. The vision is a future where flow cytometry data analysis is essentially automated — you load the file, the software annotates the populations, the report writes itself, and the operator's job becomes quality control and biological interpretation rather than manual gating.

\[Pause.\]

**Direction four: imaging and spatial cytometry.** Imaging flow cytometry on the Amnis platform was one early step in this direction. But there's also a broader movement toward tissue-level multi-parameter imaging — techniques like **CODEX**, **MIBI**, **IMC** (imaging mass cytometry), and **CosMx** that bring flow-cytometry-style multi-parameter measurement to intact tissue sections. The technique is fundamentally different — it's microscopy rather than flow — but the spirit is the same: many parameters per cell, computational identification of populations, high-dimensional analysis of cellular heterogeneity. The single-cell field is converging across modalities, and tools that started as flow cytometry analysis (FlowSOM, UMAP, PhenoGraph) are now standard for spatial and imaging data too.

**Direction five: real-time intelligent sorting.** Modern sorters can already make gating decisions in microseconds and route cells into different tubes based on those decisions. The frontier is making those decisions **smarter** — using on-line machine learning models to recognize complex cellular states from the multi-parameter signal in real time. Cellular Research's MACSQuant Tyto uses microfluidic valves rather than droplet deflection for sorting, opening up gentler sorting for sensitive cells. BD's FACSDiscover S8 integrates real-time imaging with sorting, so you can sort based on cell morphology, not just fluorescence. These hybrid systems are pushing what "sorting based on phenotype" can mean.

The trajectory across all five directions is the same: **more information per cell, more cells per experiment, more automation in analysis, more integration with other technologies.** Flow cytometry started in 1972 with one color, one laser, scatter detectors, and a primitive sorter. In 2026, the same fundamental architecture — single-file cells, laser interrogation, multi-parameter measurement, optional sorting — supports 50-color spectral panels, real-time machine learning, and integration with single-cell genomics. The basic idea has scaled across five decades and remains the foundational single-cell quantification technique in immunology, oncology, cell biology, hematology, and microbiology.

If you walk out of here remembering only three things — one, that flow cytometry is an assembly line for cells that measures each one individually at multiple wavelengths; two, that FACS adds physical sorting on top of the measurement so you can isolate any population you can define with antibodies; three, that the whole field traces back to Len Herzenberg in his Stanford basement with Mac the Cell Sorter — you'll have the conceptual scaffolding to understand essentially any flow cytometry result you ever read in a paper, and you'll be set up to learn the operational details when you sit down at the instrument yourself.

Thank you for your attention over the last two hours. Hold on for the appendix — I want to give you a few practical pointers and a short historical timeline as a reference card.

---

## APPENDIX — Practical pointers, names, and a timeline

A short appendix, intended as a reference card you can come back to.

**Names worth remembering.**

- **Len Herzenberg** — Stanford, invented FACS, 1965-1972, "Mac the Cell Sorter," partnered with Becton-Dickinson to commercialize.
- **Leonore Herzenberg** — co-PI and co-inventor; the work was a partnership.
- **Mack Fulwyler** — Los Alamos, built the first droplet-sorting cell instrument in 1965; pre-fluorescence.
- **Garry Nolan** — Stanford, developed phospho-flow, major figure in mass cytometry adoption.
- **Wallace Coulter** — invented the impedance-based cell counter in the 1950s; the basis for Beckman Coulter's hematology line.

**Major instrument lines.**

- **BD** (Becton-Dickinson) — FACSCalibur, LSR Fortessa, FACSymphony, FACSAria, FACSDiscover. Largest install base globally.
- **Beckman Coulter** — CytoFLEX, Gallios, MoFlo XDP. Strong in clinical labs.
- **Cytek Biosciences** — Aurora (spectral), Northern Lights. The spectral disruptor.
- **Sony Biotechnology** — SH800, SA3800. Compact spectral systems.
- **ThermoFisher** — Attune NxT. Uses acoustic focusing.
- **Miltenyi Biotec** — MACSQuant; also dominant in magnetic bead pre-sorting.
- **Standard BioTools** (formerly Fluidigm, formerly DVS) — Helios CyTOF. Mass cytometry.
- **Luminex** (formerly EMD Millipore, formerly Amnis) — ImageStream. Imaging flow.

**Major fluorochromes you should recognize.**

- **FITC** — blue-excited, green emission. The original.
- **PE** — blue/yellow-excited, red-orange emission. Brightest workhorse.
- **PerCP, PE-Cy5, PE-Cy7, APC, APC-Cy7** — the classic 6-8 color repertoire.
- **BV421, BV510, BV605, BV650, BV711, BV786** — Brilliant Violet family, 405 nm-excited.
- **BUV395, BUV496, BUV737** — Brilliant Ultraviolet, 355 nm-excited.

**Major immune markers you should recognize.**

- **CD3** — pan T cell.
- **CD4** — helper T cell, also some macrophages.
- **CD8** — cytotoxic T cell.
- **CD19, CD20** — B cell.
- **CD56** — NK cell (human).
- **CD14** — monocyte.
- **CD16** — NK cells, some monocytes, granulocytes.
- **CD25** — activated T cells, Tregs.
- **CD127** — low on Tregs.
- **FOXP3** — Treg master regulator, intracellular.
- **CD45** — pan-leukocyte (all white blood cells).
- **CD11c, CD123, HLA-DR** — dendritic cells.
- **CD34** — hematopoietic stem cells.

**A timeline.**

- **1934** — first flow-style particle counter built (Moldavan).
- **1953** — Coulter principle (impedance-based cell counting) patented.
- **1965** — Fulwyler builds first droplet cell sorter at Los Alamos.
- **1969** — Len Herzenberg's group at Stanford builds first fluorescence-activated sorter prototype.
- **1972** — "Mac the Cell Sorter" operational; published.
- **1974-1975** — BD licenses the technology, ships first commercial FACS instrument.
- **Late 1970s-1980s** — basic immune cell subset definitions worked out using FACS (CD4 helpers, CD8 killers, B cells, NK cells).
- **1981** — CD4 lymphopenia identified as defining feature of AIDS; FACS becomes central to HIV monitoring.
- **1990s** — multi-color era begins; 3-color, 4-color panels become standard.
- **Late 1990s** — tandem dyes (PE-Cy5, PE-Cy7, APC-Cy7) push panels to 6-8 colors.
- **Mid-2000s** — Brilliant Violet family introduced by BD; violet lasers become standard.
- **2009** — first commercial mass cytometer (CyTOF) launched by DVS Sciences.
- **2015** — Cytek Aurora spectral cytometer launches.
- **2020s** — 30-50 color spectral panels become routine; ML-based analysis tools dominate research workflows.

**Practical advice for new operators.**

- Always check your **single-stained compensation controls** before any real experiment. Do not trust auto-compensation blindly.
- **Titrate every antibody** to find the right concentration. Too much antibody equals high background; too little equals dim true signal.
- Use **FMO controls** (fluorescence-minus-one — the cocktail with one antibody dropped) to define where the boundary between negative and positive should be in each channel.
- **Filter your cells through a mesh** right before running. Clumps clog the instrument.
- **Save the raw FCS files** with all parameters and metadata. You will want to reanalyze later when better software comes along.
- **Document your gating strategy** in a screenshot or saved template. Manual gating is reproducibility-fragile if you don't record exactly what you did.
- **Talk to your core facility operator.** They know the instrument better than you ever will, and they will save you many hours of debugging.

---

That's the lecture. Two hours, give or take. Flow cytometry: an assembly line for cells, each one measured individually at multiple wavelengths, with the option to physically sort. The technique started in a Stanford basement in 1972 and is now the foundational single-cell measurement of modern biology. Thank you.
