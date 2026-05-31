# Ion Torrent Sequencing: Semiconductors That Read DNA

**A 2-hour undergraduate sequencing-technology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to two hours, plus a mid-point break. (Read faster, ~140 wpm, and it lands nearer 90 minutes, leaving room for questions or board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The Ion Torrent insight: replace optics with semiconductors

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about Ion Torrent sequencing — and I want to begin not with the chemistry or the chip, but with an idea. A single, slightly heretical idea that one man had in the mid-2000s, and that turned into a real machine, a real company, and a real chunk of the sequencing market that still exists today. The idea is this: **detecting DNA shouldn't require a camera**.

That sounds harmless, but at the time it was almost unthinkable. Every serious next-generation sequencing platform that was being built — 454, Solexa which became Illumina, SOLiD, the whole crowd — assumed that the way you detected base incorporation was you made the base do something optical. You attached a fluorescent dye to it. You ran an enzymatic cascade that produced light. You put a very expensive, very cold, very sensitive camera over the top of a glass slide and you took pictures of millions of tiny flashes, frame by frame, hour after hour. Sequencing, in 2007, was fundamentally a photography business. Every byte of genomic data came out of a camera.

And Jonathan Rothberg — who we'll properly meet in the next segment, but who's the founder of this whole story — looked at that and said: this is insane. We are paying for very expensive optics, very expensive lasers, very expensive cooled CCDs, very expensive precision optical alignment, to detect a chemical event whose actual signal — the molecule that comes off when a base gets added — is a hydrogen ion. A proton. A single charged particle. We are spending a fortune to convert chemistry into light, light into electrons, and electrons into bits, when there is a much shorter path: convert the chemistry directly into electrons, on a chip, the same way every modern microelectronic sensor works. Skip the light show entirely.

\[Pause.\]

That's the Ion Torrent insight in one sentence. Here's the analogy I want you to hold for the next two hours. **Ion Torrent is pyrosequencing without the light show.** Pyrosequencing — which we'll review properly in Segment 5 — is the method the 454 machine used. You flow one nucleotide at a time over template DNA; if the base is the right one, the polymerase incorporates it; that incorporation releases a chemical byproduct; and a multi-step enzymatic cascade turns that byproduct, eventually, into a flash of light, which a camera records. Ion Torrent does almost exactly the same chemistry — flows one nucleotide at a time, same incorporation, same byproduct production — but instead of running a luciferase cascade to produce light, it just watches the pH dip in the well. Because every time a base gets incorporated, a hydrogen ion is released, and a hydrogen ion in solution _is_ a pH change, and pH change is the easiest thing in the world to measure with a piece of silicon. The proton is the signal. No light, no camera, no laser, no dye.

Now, that's a beautiful idea, but the real engineering trick is the chip. Because Rothberg's other insight — and this is the one that makes Ion Torrent a story about Moore's law as much as about biology — was that you could build the pH sensor using the exact same chip-fabrication process used for the camera in your phone, the processor in your laptop, the memory in your SSD. The semiconductor industry has spent fifty years and trillions of dollars learning to make tiny structures on silicon, cheap and at massive scale. So instead of trying to invent a new sensor from scratch, you take a CMOS chip — complementary metal-oxide semiconductor, the workhorse of the entire electronics industry — and you redesign it so that instead of each pixel being a light detector, each pixel is a tiny pH meter. Millions of tiny pH meters. On one chip. Made in the same fabs that make iPhone cameras. So every time the semiconductor industry's process node shrinks from 130 nanometers to 90 nanometers to 65 to 45 to 28, the pixel density on a sequencing chip doubles essentially for free. Sequencing capacity rides Moore's law down the cost curve. That was the pitch.

\[Pause.\]

If you walk out of here in two hours and you can do four things, we've succeeded. **One:** explain to a curious friend why Ion Torrent doesn't need a camera, in terms of what gets released when a base incorporates and how silicon detects it. **Two:** draw, roughly, a single Ion Torrent well — a bead full of DNA sitting on top of a tiny transistor — and tell me what's happening when a nucleotide flows over it. **Three:** name and describe the homopolymer problem, because that's the platform's fundamental weakness and you'll see it in real data the first time you look at any Ion Torrent run. **Four:** explain, in business terms, why Ion Torrent occupies the niche it occupies — fast clinical panels, microbiome work, pathogen ID — instead of dominating whole-genome sequencing the way Illumina does. Those four things — the chemistry, the chip, the homopolymer flaw, and the market niche — that's the whole shape of this lecture.

One last framing comment before we get into the people and the chemistry. Ion Torrent did not win the sequencing wars. Illumina did. We're going to be honest about that throughout. But Ion Torrent did something more interesting than win: it proved a point. It proved that you could detect biology with silicon rather than with optics, at scale, in a commercial product, in a clinical lab. That proof reshaped what people thought was possible. The platforms that are coming next — nanopore sequencing from Oxford Nanopore, the various direct-electronic biosensors people are building — they all stand, in some sense, on the foundation that Ion Torrent laid. Ion Torrent is the platform that taught the industry that the cheapest, fastest sensor for a biological event is probably going to be a chip. And once you believe that, the long arc of sequencing bends toward semiconductors. So even if Ion Torrent itself is now a stable but mid-sized niche product inside ThermoFisher, the idea it embodied is everywhere.

Alright, let's meet the man who had the idea.

---

## SEGMENT 2 — Jonathan Rothberg, take two: founding Ion Torrent after 454

To understand Ion Torrent you have to understand a little bit about Jonathan Rothberg, because Ion Torrent is, in a very real sense, his second attempt at the same problem. His do-over.

Rothberg is a biologist by training, a serial entrepreneur by disposition, and a man who, by his own account, was driven into sequencing by personal circumstance. The story he tells — and it's a good story, even if it's been polished a few times — is that in 1999, he was sitting in a hospital with his newborn son who'd been put in the NICU with breathing trouble. And Rothberg, with nothing to do for hours, started thinking: if I had the kid's genome in front of me right now, I might know what was wrong with him. And then he started thinking: we don't have a way to get a kid's genome in front of a doctor in any reasonable timeframe. Sequencing in 1999 was the Human Genome Project, which had taken a decade and three billion dollars and was barely finishing up. You couldn't just sequence a person. So he started a company to fix that. That company was 454 Life Sciences, and 454 invented what we now call next-generation sequencing — the first commercial massively-parallel platform, the first to break the Sanger monopoly, the first to sequence a human genome (James Watson's, in 2007) for under a million dollars.

If you've taken the next-generation sequencing lecture or read about 454, you know the rough story there. 454 used pyrosequencing — flowing one base at a time over millions of beads in tiny wells on a glass plate, watching for flashes of light using a luciferase cascade. It was elegant, it was first, and it made Rothberg rich when Roche acquired the company in 2007 for about $155 million. But by 2007 it was already becoming clear that 454 had problems. The reads were getting longer, sure, but the per-base costs weren't dropping fast enough, the chemistry was complicated, the runs were slow, the homopolymer issue we'll discuss later was painful, and a young upstart called Solexa — soon to be Illumina — was building a platform with shorter reads but much higher throughput and a much steeper cost-decline curve. By 2010, 454 would be in serious trouble, and by 2013 Roche would shut it down entirely.

\[Pause.\]

So Rothberg, in the mid-2000s, was in an interesting position. He'd built one sequencing platform, sold it to Roche, made his money, and was watching from outside as the platform he'd invented started losing the race. And he asked himself, I think the most useful question an inventor can ask: knowing what I know now, if I had to start over, what would I do differently?

His answer was the Ion Torrent insight we just walked through. He'd do everything the same — the bead-based, one-base-at-a-time, parallel-wells architecture — but he'd rip out the optics. Get rid of the camera. Get rid of the luciferase. Detect the chemistry directly with a chip. So in 2007, with personal money and then about $23 million of venture capital, he founded Ion Torrent. And — this is important, this is Rothberg learning the lesson of his earlier company — he structured the equity carefully so that he kept supervoting shares. He'd been pushed out of 454; he wasn't going to be pushed out of Ion Torrent. He kept control.

The technology came together remarkably fast. The first PGM — Personal Genome Machine, the debut instrument — launched in February 2010. From founding to commercial product in about three years, which is fast for any hardware company and very fast for a sequencing company. And in August of that same year, Life Technologies acquired Ion Torrent for $375 million in cash and stock up front, plus another up to $350 million in milestone payments depending on how well sales went. So Rothberg sold his second company for more than twice what he'd sold his first one for, less than a year after launching the product. Not a bad second act.

\[Pause.\]

I want to dwell for a second on what was being bought and sold here, because the structure of the deal tells you something about how the industry valued the bet. Life Technologies — which would itself later be absorbed by ThermoFisher in 2014 — paid the upfront money on the strength of the technology and the early sales. But more than half the deal value was in milestones tied to revenue targets, which means the buyer was hedging. They were saying: we believe this could be big, but we're not sure, so we'll pay you the rest if it actually grows into a major franchise. As it turned out, Ion Torrent grew into a substantial franchise but not the world-dominating one some people had hoped for. The milestones partially hit, partially didn't, depending on how you count. Ion Torrent did not become the Illumina-killer that some early commentators expected. Instead it became a stable, profitable, clinically-important niche product — which, in business terms, is actually a great outcome, even if it's not the moonshot outcome.

So that's the founder and the company arc in broad strokes. Rothberg, having invented the first major next-gen platform, invented the second, sold it for a small fortune, and then went on to do a half-dozen other companies — most notably Butterfly Network, which puts a portable ultrasound on your phone, again using cheap silicon to replace expensive medical-imaging hardware. There's a pattern in his work, and the pattern is: take an expensive piece of scientific instrumentation, ask which sensor inside it is doing the actual physics, ask whether that sensor could be implemented in CMOS, and if it could, do it. Ion Torrent is the most successful execution of that pattern.

Now let's leave the people and the business behind and look at the chip itself, which is the real technical hero of this story.

---

## SEGMENT 3 — The ISFET chip: what an ion-sensitive transistor measures

Let's talk about the sensor. The single most important piece of hardware in an Ion Torrent machine is something called an **ISFET** — I-S-F-E-T — which stands for **ion-sensitive field-effect transistor**. If you understand the ISFET, you understand the chip; if you understand the chip, you understand the platform.

Let me build it up from scratch. You all know what a transistor is, at least in caricature: it's a tiny electronic switch with three terminals. In a standard MOSFET — metal-oxide-semiconductor field-effect transistor, the kind that lives by the billion inside every chip in your laptop — you have a piece of silicon with two heavily-doped regions called the **source** and the **drain**, separated by a small gap. Sitting on top of that gap, separated from the silicon by a thin layer of insulating oxide, is a third terminal called the **gate**. When you put voltage on the gate, you create an electric field that reaches down into the silicon, and that field controls whether current can flow from source to drain. Gate voltage up: switch on, current flows. Gate voltage down: switch off, no current. That's the basic transistor. Repeat a few billion times, wire them together cleverly, and you have a computer.

Now here's the ISFET trick. You take that basic transistor and you _remove the metal gate_. You just rip it off. What you're left with is the silicon, the source, the drain, the insulating oxide on top — but now the oxide is exposed to the world. And then, instead of putting a wire on the gate, you put a drop of liquid on top of the oxide, and you put a reference electrode somewhere in the liquid to set its electrical baseline. Now the voltage at the surface of the oxide — the effective gate voltage — depends not on a wire you control, but on the **chemistry of the liquid sitting on top of the chip**. Specifically, it depends on how many ions are stuck to the oxide surface.

\[Pause.\]

And here's the magic for our purposes. The oxide layer on top of the transistor — typically silicon dioxide, sometimes with a thin layer of something like tantalum oxide on top for sensitivity — has surface chemical groups, hydroxyl groups, that can pick up or release protons depending on the pH of the liquid touching them. In acidic solution, lots of protons stick to the surface; the surface becomes more positively charged. In basic solution, protons leave; the surface becomes less positive. So the surface charge of the oxide tracks the pH of the solution. And surface charge of the oxide is, electrically, the gate voltage of the transistor. So a small change in the pH of the liquid over the chip changes the gate voltage, which changes the current flowing from source to drain. The transistor's current becomes a readout of pH. That's the ISFET.

The analogy I want you to carry is this: **an ISFET is a transistor that has been hot-wired so that the gate is the liquid itself**. It's a normal silicon transistor with the electrical gate removed and a chemical gate put in its place. The current it passes is now a measurement of the pH of whatever solution is on top of it.

And here's what makes the ISFET extraordinary for sequencing: it's tiny. The whole sensor is a few microns across — small enough that you can pack millions of them onto a single chip, the same way you pack millions of pixels onto a camera sensor. It's fast. PH changes propagate to the transistor current in microseconds, so you can sample millions of these things many times per second. And it's cheap, because — and this is the key — it's made in standard CMOS fabrication, in the same fabs that make every other chip in the world. Ion Torrent doesn't have to run its own semiconductor fab; it can pay TSMC or whoever to print these things in massive volume.

\[Pause.\]

One technical wrinkle worth mentioning because it matters for the homopolymer story later. The ISFET's response to pH is approximately logarithmic — like any pH measurement, because pH itself is a logarithmic scale. So if one proton gets released into the well, you get some voltage shift. If ten protons get released, you don't get ten times the voltage shift; you get approximately one pH unit's worth — call it 59 millivolts at room temperature, by the Nernst equation. If a hundred protons get released, you get two pH units, or about 118 millivolts. This logarithmic response is fine when you're counting one or two or three nucleotides being incorporated; the differences in signal are clean. But when you're trying to distinguish seven incorporations from eight — both of which produce signals on a flat part of the log curve — you're trying to resolve small differences in a noisy log-scaled signal, and that gets hard. We'll come back to this in Segment 9.

The ISFET itself, as a device, has been around since the 1970s — a Dutch researcher named Piet Bergveld invented it in 1970 as a tool for biomedical pH measurement, mainly for things like monitoring acid in the stomach with a tiny probe. It puttered along as an academic curiosity for thirty-some years, occasionally used in chemical sensing applications. What Rothberg and his team did was take this old, well-characterized device and scale it. Instead of making one ISFET, they made millions. Instead of using it to measure pH in a beaker, they used it to detect base incorporation in a sequencing well. That move — from one sensor to an array of millions, from chemistry to genomics — is what turned an obscure biomedical sensor into a sequencing platform.

So now you have one ISFET. One transistor with the gate hot-wired to liquid pH. Tiny, cheap, fast, accurate enough. The next question is: how do you make millions of them, and how do you use them as sequencing pixels? That's the chip architecture, and it's the next segment.

---

## SEGMENT 4 — The CMOS sequencer: millions of pixels, each a tiny pH meter

Okay. So we have one ISFET. Now we want millions, because each one is going to be a tiny sequencing reactor. Let me describe what the Ion Torrent chip actually looks like, because if you've never held one in your hand, the image will help.

Picture a small chip — roughly the size of a postage stamp, or maybe a little smaller, depending on which generation we're talking about. It looks, honestly, like any other silicon chip. Same gold contacts around the edges. Same green or tan substrate. Same plastic carrier package. If you handed one to a hardware engineer who didn't know what it was, they'd assume it was a camera sensor or a memory chip; it has that same generic CMOS look. The chip slots into a cartridge that you load into the Ion Torrent machine like a videogame cartridge into an old console. Snap it in, run the sequencing, snap it out, throw it away. The chip is a consumable — single-use. You pay per chip, the way you'd pay per kit on any sequencing platform.

Now zoom in. The surface of the chip, under a microscope, looks like a grid of millions of tiny circular wells. Each well is a few microns across — small enough that you could fit dozens of red blood cells in one, and just barely big enough to hold a single Ion Torrent sequencing bead, which we'll meet in Segment 7. The wells are arranged in a regular pattern, just like the pixels on a camera sensor. Depending on the chip generation, you have anywhere from about 1 million wells (on the original 314 chip in the PGM) up to over 600 million wells (on the latest Ion 550 chip in the S5). That's the throughput knob — more wells, more parallel reactions, more sequence per run. And it scales with the same Moore's-law process improvements that scale CPU transistor counts. Ion Torrent's chip generations are essentially node shrinks on the underlying CMOS process.

\[Pause.\]

Underneath each well, embedded in the silicon, is one ISFET. One per well. So every well is, electrically, an independent pH meter. The wells share the upper liquid layer — the solution that floods over the whole chip during sequencing — but each well's pH is read independently by its own dedicated transistor. The CMOS routing layer underneath the wells carries all the readout signals out to the chip's edge, where they get amplified, multiplexed, and shipped off to the instrument's computer.

The analogy I want here is **the chip is a CMOS image sensor where every pixel has been re-engineered to detect protons instead of photons**. Same silicon. Same fabrication process. Same readout architecture. Same massive parallelism. The only difference is that the sensitive element on top of each pixel is an oxide layer in contact with a chemical well rather than a photodiode in contact with a microlens. Functionally, it's a camera. Functionally, an Ion Torrent run is a CMOS camera taking many many frames of pH images of a chip surface, and software stitching those pH images into base calls. If you've ever read about how a phone camera sensor works — millions of pixels, each generating a tiny voltage, all read out very fast — you already know how an Ion Torrent chip works. Just substitute "proton" for "photon" and "pH" for "brightness."

\[Pause.\]

A few more details that matter for understanding the run.

The wells are arranged so that each well is roughly the size of a single bead — and that's deliberate, because we want exactly one DNA-laden bead per well. We'll see in Segment 8 why that matters and why it's so hard to achieve. Above the wells, the chip has a thin fluidic channel that lets solution wash across the entire surface — flowing in one nucleotide species, letting it react in the wells, flowing it back out, washing in the next. The fluidics are simple by sequencing standards, because there's no optics to align, no laser to focus, no camera to keep stable. You're just pumping liquid across a chip and reading its electrical output.

The whole thing is fast. The readout electronics in the chip can sample every well multiple times per second. A complete nucleotide flow — wash in, react, read, wash out — takes a few seconds. The entire sequencing run, depending on how many bases you want, takes a few hours, not a few days. That speed is one of the biggest selling points of the platform, and we'll come back to it in Segment 11.

And the cost dynamics are striking. Because the chip is mass-produced in standard CMOS, and because there are no precision optics in the instrument, the instrument itself is small and inexpensive — the original PGM sold for $50,000, which by the standards of next-gen sequencing in 2010 was startlingly cheap. An Illumina HiSeq at the time was closer to $750,000. Ion Torrent's pitch was: we are democratizing sequencing. Any clinical lab, any small university group, anyone with a half-decent equipment budget, can have a sequencer of their own. That promise — sequencing for every lab, not just genome centers — was central to the early Ion Torrent identity.

Now, with the chip in hand, let's flow some chemistry over it.

---

## SEGMENT 5 — Base-incorporation chemistry: protons as the signal

Let's get into the chemistry. I want to walk you through, slowly, what actually happens when a DNA polymerase adds a single nucleotide to a growing strand — because the proton release we keep talking about is a real chemical event, and the more concretely you can picture it, the more the whole platform makes sense.

You probably remember from your intro biochemistry class that DNA polymerase, the enzyme that copies DNA, takes deoxyribonucleotide triphosphates — dNTPs, the building blocks, the A's and C's and G's and T's that come with three phosphate groups attached — and uses them to extend a growing DNA strand against a template. The template provides the order; the polymerase reads the next template base, grabs the matching dNTP from solution, and chemically attaches it to the growing strand.

Let's slow that down. The growing strand has, at its 3' end, a sugar with a hydroxyl group — the 3'-OH. The incoming dNTP has, on its 5' end, three phosphates linked in a row. The polymerase positions the dNTP next to the 3'-OH, and catalyzes a chemical bond between them — specifically, the 3'-OH attacks the innermost phosphate of the dNTP, forms a new phosphodiester bond, and in doing so kicks off the outer two phosphates as a unit called **pyrophosphate**, which floats away. The dNTP is now part of the strand; the strand has grown by one base; and pyrophosphate has been released as a byproduct.

That's the textbook picture. But here's the part that matters for Ion Torrent. The chemistry of forming that new bond isn't just "pyrophosphate is released." The 3'-OH attacking the phosphate also releases a **hydrogen ion** — a proton — into solution. It has to. The reaction stoichiometry requires that for every phosphodiester bond formed, one H+ ion gets liberated. The polymerase reaction, in net, is: growing strand + dNTP → extended strand + pyrophosphate + H+. The proton is not a side effect or a trace product. It is a guaranteed, one-per-incorporation chemical signal.

\[Pause.\]

So now, picture an Ion Torrent well. The well contains a bead, and that bead is coated with millions of copies of the same single-stranded DNA template — we'll see how that template gets there in Segment 7, but for now just trust that the bead is essentially a fuzzy ball of identical template strands. Each template has a primer hybridized to it, and a DNA polymerase enzyme sitting at the primer's 3' end, ready to extend. The whole well is bathed in solution containing one species of nucleotide — let's say dATP — and the polymerase is just waiting to see if dATP is the next base it needs.

If the template's next position is a T, the polymerase grabs the dATP, incorporates it across from the T, and releases a proton. One template, one proton. But remember, the bead has millions of copies of the template, all primed, all with polymerases sitting on them, all in lockstep because they all see the same flow. So if dATP is the right base, you don't release one proton; you release millions. Millions of protons, simultaneously, into the small volume of one well. That's a measurable surge in H+ concentration. The pH of the well drops — the solution gets more acidic — by a small but real amount. The ISFET underneath the well sees the pH change. The chip records a voltage spike. And the software, looking at that well in that flow, says: A was incorporated here.

If the template's next position is _not_ T — let's say it's G — then dATP can't be incorporated. The polymerase sits there idly. No reaction occurs. No proton is released. The pH stays flat. The ISFET sees nothing. The software, looking at that well in that flow, says: no A was incorporated here.

That's the entire detection principle. **One nucleotide flow over the chip. Wells where incorporation happened dip in pH. Wells where it didn't, stay flat. The chip is a millions-pixel snapshot of which wells just took up an A.** Then you wash away the unused dATP, flow in dCTP, repeat. And dGTP. And dTTP. Cycle after cycle, base after base, building up a record of which wells incorporated which base at which flow.

\[Pause.\]

A couple of details to head off confusion.

First: the bead-based amplification is essential for the signal. A single template molecule producing a single proton when one base incorporates would generate a pH change far too small to detect — the proton would diffuse away, get buffered, be lost in noise. By cloning the template thousands or millions of times onto a single bead, every incorporation event happens to thousands of identical templates simultaneously, producing a collective burst of protons that's big enough to measure. The bead is, in essence, a signal amplifier — it converts one molecular event into a coordinated bulk chemical event. This is the same conceptual move that 454 made, and that every cluster-based sequencer makes: clone the template so you can detect it.

Second: the buffering of the well solution has to be tuned just right. Too much buffer and the protons get absorbed before the ISFET can see them. Too little buffer and the pH swings around wildly with every wash. Ion Torrent uses a low-buffering solution chemistry specifically so that the proton release is detectable — and the wells are designed to be small enough that the proton concentration spikes hard locally. The chip and the chemistry are co-engineered.

Third: the signal is fast. Proton release happens essentially as soon as polymerase catalysis occurs, which is in milliseconds. The ISFET response is in microseconds. So a flow can be read within a few seconds of the nucleotide hitting the chip. There's no waiting for fluorophore excitation, no waiting for camera frames to accumulate, no waiting for laser scans. The signal is immediate and electrical. This is the deep reason Ion Torrent runs are so fast: physics, not engineering.

Now let's talk about the flow cycle that uses this detection.

---

## SEGMENT 6 — The flow cycle: one nucleotide at a time, same as pyrosequencing

Let's talk about flow ordering, because this is where Ion Torrent looks most obviously like its 454 ancestor and where it differs most sharply from Illumina.

In an Illumina sequencer, you flow all four bases over the chip at the same time. Each base carries a different fluorescent dye, and each base has a reversible terminator on its 3'-OH that prevents the polymerase from adding more than one in a single cycle. The polymerase grabs whichever base is correct, incorporates it once, and stops. Then the camera takes a picture of every cluster, sees which color of dye lit up at each spot, calls the base, and then chemistry is run to clip off the dye and unblock the 3' end so the next cycle can start. Illumina is colored-base, four-at-a-time, one-at-a-time-per-cycle. Beautiful, slow, accurate, expensive.

Ion Torrent does it the other way. Inspired by — actually, directly continuing — the pyrosequencing approach that 454 used. You flow just _one_ kind of nucleotide at a time. No dye. No terminator. Just dATP, dCTP, dGTP, or dTTP, in their natural unmodified forms. You flow dATP across the chip. Wherever the template's next base calls for an A, the polymerase incorporates one — or, if the template has a run of T's, the polymerase incorporates several A's back to back, because there's no terminator to stop it. You read the pH dip in every well. Wells that dipped: an A or a run of A's was incorporated. Wells that didn't: no A was needed there. Then you wash, flow dCTP, and repeat. Then dGTP. Then dTTP. Cycle through.

A standard Ion Torrent flow order is the simple repeating pattern T, A, C, G — though the precise order has been tweaked over the years for better performance. Each one of those four flows is called a **flow cycle** in aggregate, or each individual one is just called a **flow**. A single run will go through hundreds of flow cycles — typically 500 or more — and from the pattern of dips and silences in each well across all those flows, the software reconstructs the sequence.

\[Pause.\]

Let me walk through a concrete tiny example so this lands. Suppose your template, read 5' to 3' from the primer onward, has the sequence ATCCGGGTA. The polymerase needs to add, in order, the complementary bases: T, A, G, G, C, C, C, A, T.

You flow T first. The polymerase adds a T. One proton released, pH dips by one unit's worth, ISFET registers a signal of magnitude 1. Software calls: one T incorporated. Wash.

Then you flow A. The polymerase adds an A. Same single-incorporation event. Signal of 1. Software calls: one A. Wash.

Then you flow C. But the template here calls for G — wait, let me redo this. The template position now is... actually let me restart and be careful. The template is ATCCGGGTA. The polymerase is building the _complement_. So it needs T across from A, A across from T, G across from C, G across from C, C across from G, C across from G, C across from G, A across from T, T across from A. So in order: T, A, G, G, C, C, C, A, T.

Flow T: incorporates one T. Signal 1.
Flow A: incorporates one A. Signal 1.
Flow C: nothing happens. Signal 0.
Flow G: incorporates two G's back to back. Signal 2 — the well's pH drops twice as much as before, because two protons came out.
Flow T: nothing. Signal 0.
Flow A: nothing. Signal 0. 
Flow C: incorporates three C's back to back. Signal 3 — three protons released, pH dips three times as much.
Flow G: nothing. Signal 0.
Flow T: nothing. Signal 0.
Flow A: incorporates one A. Signal 1.
Flow C: nothing.
Flow G: nothing.
Flow T: incorporates one T. Signal 1.

And so on. The software reads the sequence of signal magnitudes — 1, 1, 0, 2, 0, 0, 3, 0, 0, 1, 0, 0, 1 — and from that, plus knowledge of the flow order, reconstructs: T, A, GG, CCC, A, T. Which is the complement of the template, which is what we wanted.

\[Pause.\]

The crucial feature here, and you can already feel it, is that **the signal magnitude has to encode the number of bases incorporated**. If the well dips by an amount you interpret as 2 protons' worth, you call it GG. If it dips by 3, you call CCC. If it dips by 5, you call CCCCC. The platform is committing to the idea that you can quantitatively read out the number of incorporations from the strength of the pH change.

For one, two, three bases in a row, this works fine. The differences in signal magnitude are crisp. But the longer the run, the harder it gets. We'll devote Segment 9 entirely to this problem — the **homopolymer problem** — because it's Ion Torrent's defining weakness and it follows directly from the flow architecture we just walked through.

Compare to Illumina. In Illumina, every incorporation cycle adds exactly one base, by chemical design, because the reversible terminator blocks further extension. So the platform never has to count incorporations from signal magnitude — it always counts one at a time, and just reads what color the dye was. Illumina has effectively traded slower chemistry (because of the terminator and the deblock step) for cleaner per-base calling. Ion Torrent traded faster chemistry (natural unmodified bases, no terminator) for the burden of homopolymer length calling. That trade — speed vs. homopolymer accuracy — defines the platform.

One more detail to leave this segment with: the wash step between flows has to be very thorough. If any leftover dATP is sitting around when you flow dCTP, you'll get a spurious incorporation that messes up the next call. So the chip's fluidics include extensive wash buffers between every nucleotide flow. And inevitably, despite the washes, you get a small fraction of templates that fall out of phase with the rest — either they didn't incorporate when they should have (incomplete extension) or they incorporated an extra base from carry-over reagent (carry forward). Over hundreds of flows, this dephasing accumulates, and it's one of the reasons Ion Torrent read lengths are limited. After about 400 bases or so, the signal gets noisy enough that calling becomes unreliable.

Now let's talk about how those millions of identical template copies get onto the bead in the first place.

---

## SEGMENT 7 — Emulsion PCR and Ion Sphere Particles: clonal amplification onto beads

We've been assuming, this whole time, that each well contains a bead, and each bead is covered with many many identical copies of one template DNA strand. Now let's see how that bead actually gets made. This is the **library preparation** and **template amplification** step, and it happens before any chip ever touches the instrument.

Step one is to make the library. You take your input DNA — could be human genomic DNA, could be a bacterial isolate, could be a PCR amplicon panel — and you fragment it (or, in the case of a panel, you already have it as discrete amplicons). You ligate adapter sequences to the ends of each fragment. The adapters are crucial. One of them carries a sequence that's complementary to a primer attached to the bead. The other carries a sequence that's complementary to the sequencing primer. So now every fragment in your library is, schematically: bead-adapter, then your insert, then sequencing-adapter. That's the library. Make billions of these, all different inserts, all the same adapter ends.

Step two is the amplification. Ion Torrent uses **emulsion PCR**, abbreviated **emPCR**, which is the same fundamental trick 454 used. The idea is this. You want to amplify each library fragment into a clonal population — many identical copies — and you want each clonal population physically isolated from every other one, so they don't mix. The way you achieve this is to do PCR not in a tube, but in millions of tiny droplets.

You mix your library with PCR reagents — polymerase, dNTPs, primers, buffer — and with a vast excess of tiny beads. Each bead is coated with primers complementary to one of the adapter sequences on your library fragments. Then you take all of that aqueous mix and you emulsify it into oil — vigorously, with surfactants, until the aqueous phase breaks up into millions and millions of tiny water-in-oil droplets, each one a few microns across, each one suspended separately in the oil. The key statistical magic is this: at the right dilution, each droplet contains, on average, less than one library molecule. So most droplets get either zero library molecules or one. And each droplet also contains, on average, around one bead. Most useful droplets — the ones that produce sequenceable data — will end up with exactly one template molecule and exactly one bead. The rest will get thrown away later.

\[Pause.\]

Now you do PCR on the whole emulsion. The droplets each act as a tiny independent reaction tube. In a droplet with one template and one bead, the PCR amplifies that single template, and the new strands get captured by the primers on the bead, growing as a population physically anchored to that bead's surface. By the end of the PCR, the bead is coated with a few million identical copies of that one starting template. Every other droplet has done the same thing with its own one starting template, producing a bead coated with a clonal population of _that_ sequence. So the emulsion has, in effect, parallelized clonal amplification across millions of independent reactions. You break the emulsion at the end, recover the beads, and you now have a population of beads, each one carrying a clonal population of a single library member. Ion Torrent calls these beads **Ion Sphere Particles**, or ISPs. They're a few microns across, made of a polymer like polystyrene, coated with primers and then, after emPCR, coated with clonal template.

The analogy here is: **emPCR is a way to run millions of tiny PCRs in parallel without them contaminating each other**. Each droplet is a tiny tube. The oil is the wall between tubes. The bead inside each droplet is a Velcro pad that captures the amplified product, so when you break the emulsion, you can recover the products as discrete physical objects (beads) rather than a soup of mixed DNA.

\[Pause.\]

After emPCR, you have to do some enrichment. Many of the beads in the population will have nothing on them — those came from droplets that got no template molecule. You want to discard the empty beads and keep only the template-loaded ones. Ion Torrent does this with a system involving magnetic capture beads that bind to a separate adapter sequence on the amplified DNA; loaded beads get pulled out, empties get washed away. After enrichment, you've got a clean population of template-loaded ISPs ready to load onto the chip.

The whole emPCR plus enrichment process takes a few hours and is done on a separate instrument from the sequencer — the Ion Chef, in modern workflows, which automates the library-to-loaded-chip pipeline. The Ion Chef takes your prepared library, runs the emPCR, enriches the beads, and even loads them onto the sequencing chip for you. It's an attempt to push the hands-on workflow down to "pipet some library into a cartridge, walk away, come back to a loaded chip." That kind of workflow simplification is critical in a clinical lab, where the operators may not be sequencing experts.

One contrast to keep in mind: Illumina's amplification step is completely different. Illumina does **bridge amplification** on a flowcell surface — the templates aren't on beads, they're directly attached to the flowcell glass, and they grow as clusters by repeatedly arching over and copying themselves against neighbor primers. Different geometry, same goal: clonal amplification of each library member into a population large enough to be detected. Ion Torrent inherited 454's emulsion-bead approach because the chip architecture demands physical particles you can drop into wells. Illumina inherited bridge amplification because its detection is on a flat imaging surface. Each method co-evolved with its detection chemistry.

Now the beads exist. Each is a few microns across, carrying millions of copies of a single template. The next problem is getting them onto the chip — and specifically, getting them into the wells, one bead per well, without doubles. That's harder than it sounds.

---

## SEGMENT 8 — Loading the chip: getting beads into wells without doubles

This is one of those engineering problems that sounds trivial at the description level — "put one bead in each well" — and turns out to be devilishly hard in practice. And the way Ion Torrent solves it tells you something about how the platform performs.

The wells on the chip, remember, are sized to fit exactly one bead. They're slightly bigger than a bead — typically a couple of microns — so a bead can drop in but can't easily stack two. That's already half the battle: physical exclusion. The geometry of the well discourages doubles. But you still have to actually deliver beads to wells, and the delivery method matters.

The way Ion Torrent loads the chip is, essentially, gravity plus shaking plus some fluid mechanics. You take the bead suspension and pipet it onto the chip surface; the beads settle into the wells under gravity, and a brief centrifugation step helps them seat properly. Any beads that don't make it into a well — that settle on the flat areas between wells — get washed off. What you're left with is a chip whose wells contain, ideally, exactly one bead each.

In practice, "ideally" hides a lot of variation. A typical loaded chip will have somewhere around 70% to 90% well occupancy, depending on chip generation and how good the operator's prep was. The remaining wells are empty — they'll just produce a flat signal during the run and be ignored. More problematically, a small percentage of wells will end up with two beads, or with a bead plus a fragment of another bead, or with poor seating that causes signal artifacts. These get flagged during analysis and their reads thrown out.

\[Pause.\]

This is one of those places where Ion Torrent has a structural disadvantage compared to Illumina. On an Illumina flowcell, clusters self-assemble by amplification, so every cluster is naturally a single clonal patch on the surface — there's no separate "loading" step to mess up. Each cluster is built in place from one molecule. With Ion Torrent, you make the beads off-chip and then have to physically place them onto the chip, and that placement is never perfect. Ion Torrent has spent years engineering both the bead chemistry and the loading robotics — the Ion Chef does most of the work now — to push occupancy up and double-bead rates down. The Ion S5 generation hit much better loading consistency than the original PGM, and that's part of why the per-chip data yield has improved over time even when the underlying chip well count didn't change.

A subtle point: even when you successfully get exactly one bead per well, the bead might not be perfectly loaded with template. Remember from Segment 7 that emPCR is a probabilistic process — some beads come out with full template coverage, some come out with sparse coverage. Sparse-coverage beads produce weaker signals because fewer protons get released per incorporation. The software has to handle a population of beads with a distribution of template loadings, and very weakly loaded beads get filtered out as low-quality reads.

\[Pause.\]

What this means in practice is that **the number of useful reads from a chip is significantly less than the number of wells on the chip**. A chip with 100 million wells might give you 60-80 million reads of usable quality. The marketing numbers and the actual yield always have some gap, just as they do on every sequencing platform. When you're estimating whether a chip can give you enough coverage for your experiment, you have to factor in well occupancy, double-bead exclusion, low-quality template filtering, and read-quality filtering after the fact. The headline number is usually 70-80% of the well count, in real-world conditions.

This is all the kind of housekeeping that nobody mentions when they're selling you a sequencer, but it matters when you're actually planning experiments and budgeting chip purchases. Ion Torrent chip costs are mostly fixed regardless of how full they get — you pay per chip, not per read — so loading efficiency directly affects your cost per base. Operator skill, library quality, and instrument maintenance all matter for keeping those efficiencies high.

Now let's confront the platform's defining problem: homopolymers.

---

## SEGMENT 9 — The homopolymer problem: Ion Torrent's biggest weakness

This is the segment where we get serious about Ion Torrent's most famous limitation. Every sequencing platform has a characteristic error profile — the kind of mistakes it makes more often than others — and Ion Torrent's signature error is the **homopolymer length call**. Specifically: when the template has a long run of the same base, Ion Torrent has trouble counting exactly how many bases are in the run.

Let's understand why, mechanistically. Go back to Segment 6, where we walked through the flow cycle. When you flow dATP over a template with a single T, you get one incorporation, one proton, one unit of pH dip. When you flow dATP over a template with two T's in a row, you get two incorporations back to back — because there's no terminator, the polymerase just keeps adding — and you get two protons. The pH dip is bigger, the ISFET signal is bigger, by approximately a factor of two. So far so good.

But now think about what happens at TTTTT — five T's. You flow dATP, you get five incorporations, you get five protons, you get a pH dip approximately five times the size of a single incorporation. The signal magnitude is supposed to encode the length of the run. And for short runs — 2, 3, maybe 4 in a row — the differences between adjacent length signals are clean enough that you can call confidently. 1 vs 2 vs 3 — those are easily distinguishable.

But the higher you go, the noisier it gets. Partly because the pH response is logarithmic, so as the proton release grows linearly, the voltage signal grows sublinearly, and the difference between, say, 7 and 8 protons is a much smaller fractional voltage change than the difference between 2 and 3. Partly because not every template on the bead extends in perfect lockstep — some templates lag, some lead, some fail to incorporate at all — so the population signal smears out, and the smearing is proportional to the homopolymer length. And partly because the polymerase reaction isn't perfectly synchronous; it takes a moment to add each base, and the protons released across the run come out spread over a slightly broader time window, which softens the signal peak.

\[Pause.\]

The result is that Ion Torrent's accuracy degrades sharply for long homopolymers. For a single base, accuracy is over 99%. For runs of 5, accuracy drops to maybe 97-98%. For runs of 7 or 8, it starts to drop noticeably below that. By the time you're at 10 or more bases in a row, the signal is essentially saturated and length calling is much less reliable. The errors aren't substitutions, which is what Illumina mostly makes — they're length errors, called **indels** for "insertions and deletions." Ion Torrent makes more indel errors than substitution errors, and most of those indels happen at or near homopolymer runs.

The analogy I want here is **trying to count drops by listening to the splash**. One drop in a bucket: distinct splash, easy to count. Two drops, one after another: you can hear two splashes. Three drops in a row, fast: still mostly countable. But ten drops in a row, in less than a second? They blur into one continuous noise. You can tell there were "a lot" of drops, but the difference between nine and ten is hard to hear. That's the homopolymer problem in caricature. Ion Torrent is counting drops by listening to splashes, and beyond about four or five drops in a row, the splashes blend.

\[Pause.\]

This is the same flaw 454 had. Pyrosequencing — flowing one base at a time and counting incorporations by signal magnitude — has the same fundamental architecture, and so it has the same fundamental weakness. Whether you read the signal as a light flash from luciferase (454) or a pH dip from an ISFET (Ion Torrent), you're still trying to quantify a multi-base incorporation event from a single bulk readout, and that bulk readout's accuracy degrades with length. The two platforms inherited this from their shared design lineage. Illumina, by contrast, doesn't have a homopolymer problem in the same way — because its reversible-terminator chemistry forces one base at a time, every cycle, and reads the base from color rather than from magnitude. So homopolymer runs in Illumina data are just long stretches of the same base color, called one at a time, with normal per-base accuracy. No magnitude estimation required.

The implication for what you can and can't do with Ion Torrent is important. Any application where the answer depends on the exact length of a homopolymer run is dangerous. For example: variant calling in regions of the genome that contain stretches of repetitive bases — like the polyA tracts that appear in many genes — is prone to false indel calls on Ion Torrent. Microsatellite repeat length determination is harder. De novo genome assembly across repetitive regions is harder. Any clinical assay that needs to distinguish, say, a 7-base run from an 8-base run as a pathogenic indel will have to do orthogonal confirmation, usually by Sanger sequencing or by an Illumina assay, before reporting the result.

For most applications, though — calling point mutations in a clinical panel, identifying which species are in a microbial sample, looking for known fusion oncogenes — the homopolymer issue is annoying but manageable. The bioinformatics tools have been trained on it; they apply special filters around homopolymer regions; clinical panels are designed to avoid placing critical variants inside or adjacent to long runs. It's a known weakness with known workarounds.

\[Pause.\]

I want to leave you with the right framing. The homopolymer problem isn't a defect of execution — it's a structural consequence of the platform's defining design choice, which was: flow one base at a time, use natural unmodified nucleotides, count by signal magnitude. The same design choice that makes Ion Torrent fast and chemically simple is exactly what makes it bad at long homopolymers. You can't have one without the other. It's the tradeoff at the heart of the platform. Anyone who tells you Ion Torrent is "just as good as Illumina" is either selling you something or hasn't actually looked at the data. And anyone who tells you Ion Torrent is unusable because of homopolymers hasn't either, because for most clinical and microbiome applications, it works fine. It's a tool. Tools have edges. Know the edges.

That's the end of our first hour. Let's take a fifteen-minute break and come back to the instrument family, the workflows, and the markets.

\[BREAK\]

---

## SEGMENT 10 — The PGM, the Proton, the S5: the instrument family arc

Welcome back. Hope everyone got coffee. Let's spend the second hour on the products, the workflows, and the markets — because Ion Torrent isn't just a technology, it's a product family with a real commercial history, and the shape of that history tells you a lot about why the platform is where it is today.

The first Ion Torrent product, launched in February 2010, was called the **Personal Genome Machine**, or PGM. The name was deliberate and aspirational. "Personal" was a callback to the personal computer revolution — the pitch was that this was the Apple II of sequencing, the machine that would put sequencing power on every lab bench, the way the PC put computing power on every desk. "Genome Machine" was the value proposition: you, individually, in your lab, with your $50,000 instrument, could sequence genomes. Not necessarily _human_ genomes — the throughput wasn't there for that — but bacterial genomes, viral genomes, targeted panels of human variants. Sequencing for the rest of us.

The PGM was small. Picture a desktop laser printer — a chunky one, maybe 24 inches across, sitting on a bench. It was self-contained: chip slot, fluidics, computer, all integrated. You plugged it in, you loaded a chip, you started a run, you got your data in a few hours. The early chips were the **Ion 314** (about 1 million wells, 10 megabases of output), the **Ion 316** (about 6 million wells, 100 megabases), and later the **Ion 318** (about 11 million wells, up to 1 gigabase). Each chip targeted a different application scale — small projects on 314, medium on 316, large on 318 — but they all ran on the same PGM instrument. Same hardware, different consumables. That's a model the semiconductor industry knows well: keep the device cheap, sell the chips.

\[Pause.\]

The PGM was a real commercial success. It found its market quickly — clinical labs, small research labs, food-safety testing labs, public-health pathogen ID labs. Anyone who wanted to run small batches of NGS on a manageable budget. By 2012 or so, thousands of PGMs were installed worldwide. Ion Torrent was a credible second platform alongside Illumina.

Then came the **Proton**, launched in 2012. This was Ion Torrent's swing at the big leagues — at the human genome market. The Proton was a larger, more expensive instrument, designed to run a much bigger chip — the **Ion PI** chip, with about 165 million wells, capable of generating around 10 gigabases per run. Big enough to do whole human exome sequencing in a single run, or low-coverage whole-genome sequencing in a few runs. The marketing pitch was the "thousand-dollar genome on a benchtop." A bold pitch.

The Proton did not succeed in that mission. The fundamental problem was that the per-base cost of Ion Torrent data was higher than the per-base cost of Illumina data, especially as Illumina scaled up the HiSeq family and then the NovaSeq. For a clinical lab doing whole human genome work or whole exome work at scale, Illumina was simply cheaper per base. And Ion Torrent's homopolymer problem, which is tolerable for small panels and bacterial work, became more troublesome at the scale of whole-genome analysis where you can't easily inspect every variant call by hand. The Proton sold, but it never displaced the HiSeq in any meaningful way. By around 2015, the Proton's role had narrowed and the platform's roadmap quietly shifted away from competing on whole-genome work.

The pivot came with the **Ion S5** and **Ion S5 XL**, launched in 2015. These were positioned as the next-generation PGM — the same clinical-and-small-research market the PGM owned, but with much better usability, a refined chip family (Ion 520, 530, 540, eventually 550), and tight integration with the Ion Chef for automated library prep. The S5 took a lot of the manual workflow pain out of the original PGM: instead of three separate instruments (template prep, sequencing, analysis) with several manual transfer steps, the S5 plus Ion Chef ran end-to-end from library to data with minimal hands-on time. The pitch shifted from "personal genome machine" to "clinical sequencing solution." And it worked. The S5 became, and remains, the workhorse of the Ion Torrent installed base.

\[Pause.\]

Later, ThermoFisher rebranded the line as the **GeneStudio S5** family, with various performance tiers (S5, S5 Plus, S5 Prime) targeted at different lab sizes and throughput needs. The instrument hardware has been incrementally refined; the chip technology has been pushed forward; the chemistry has been tuned for longer reads and better accuracy; but the basic architecture is still the same architecture Rothberg sketched in 2007. CMOS chip, ISFET wells, emPCR beads, one-nucleotide-at-a-time flows, ThermoFisher branding.

There's a more recent product called the **Ion Torrent Genexus**, launched around 2019, which is interesting because it pushes the workflow integration even further — it's a single instrument that does library prep, template prep, sequencing, and primary analysis in one box, walking from a clinical sample to a variant report in about 24 hours, with very limited hands-on time. The Genexus is aimed squarely at hospital and clinical-lab settings where you want a sample-in-results-out machine that a trained tech, not a sequencing specialist, can run. That's where ThermoFisher sees the future of Ion Torrent: integrated clinical instruments, not high-throughput research sequencers.

\[Pause.\]

So the arc of Ion Torrent instruments, in three acts: **PGM** as the upstart that proved CMOS sequencing was real and built a clinical foothold; **Proton** as the failed attempt to compete head-on with Illumina at the genome scale; and **S5 / Genexus** as the mature clinical platform that doubled down on what Ion Torrent was actually good at — fast, accessible, targeted sequencing for clinical and applied use, rather than trying to be everything to everyone. The Proton episode is a useful lesson in not letting marketing ambition overshoot your technology's actual strengths. The S5 era is what happens when a company gets honest about its niche and serves it well.

Now let's talk about why the platform is fast, which is one of the things it does genuinely better than anyone else.

---

## SEGMENT 11 — Run time: why Ion Torrent is fast

If you have a single sentence to remember about why people choose Ion Torrent today, it's this: **Ion Torrent runs in hours, not days**. A typical sequencing run on an Ion S5 takes somewhere between 2 and 4 hours, depending on chip size and how many bases you're reading. A library-to-data turnaround, including emPCR and chip loading on the Ion Chef, is typically under a working day — you can start in the morning and have data in the afternoon. Compare that to a typical Illumina MiSeq run, which takes anywhere from 4 to 56 hours depending on the chemistry and read length, with most clinical workflows landing somewhere around 24 hours. And a HiSeq or NovaSeq run is measured in days, sometimes most of a week.

That speed differential is not a marketing exaggeration. It comes from the physics of the detection method, and once you understand the physics, you understand why the speed advantage is structural and not something Illumina is likely to close.

The fundamental thing is that pH detection is instantaneous. When the polymerase incorporates a base, the proton is released within milliseconds, and the ISFET's response to the pH change is in microseconds. So the rate-limiting step for a flow is not "wait for the signal," it's "wait for the chemistry to finish and then wash the chip." Both of those steps are seconds. A flow cycle — flow in nucleotide, react, read, wash out — takes maybe 5 to 15 seconds. Times 500 flow cycles in a standard run, that's roughly 1 to 2 hours of pure sequencing time. The rest of the run time is overhead — chip warmup, calibration, post-run processing.

\[Pause.\]

Compare to Illumina. Illumina uses reversible-terminator chemistry. Each cycle, you flow in all four labeled, terminated nucleotides, let the polymerase add one, image the entire flowcell with a camera (which itself takes minutes because you have to image millions of clusters across a large area), then run a chemical deblock step to remove the terminator and the dye so the next cycle can start. The imaging is a real bottleneck — a flowcell imaging pass takes a substantial amount of time because you're physically scanning a camera across a large surface, taking many many pictures, processing them, and the chemistry of deblocking is itself a multi-step reaction that takes minutes. So Illumina's cycle time is several minutes, not several seconds, and over 150 or 300 cycles for a typical paired-end read, that adds up to many hours or days of total run time.

The architectural reason for the difference, again: Ion Torrent reads electrically, in parallel, in real time. Illumina reads optically, by scanning, in sequential frames. Electricity is faster than light in this context, because the readout doesn't require a mechanical scan. Every well on the Ion Torrent chip is read at the same instant by its own dedicated transistor. That's the parallelism that compresses run time.

\[Pause.\]

Why does run time matter? For many research applications, it doesn't much — you start a run on Friday, you come in Monday and the data is there, who cares if it took 28 hours or 4 hours. But for clinical applications, run time can matter enormously. If a hospital is doing rapid pathogen identification on a critically ill patient — say, a sepsis case where you don't know what bug is in the blood — the difference between a 4-hour result and a 24-hour result is the difference between targeted antibiotic therapy on the first night and empirical broad-spectrum coverage for an extra day. In oncology, faster turnaround on a tumor genotyping panel can mean a treatment decision made at this week's tumor board rather than next week's. In infectious disease outbreak response, faster genotyping of an emerging pathogen can mean public health decisions made in days rather than weeks.

So the run-time advantage is one of the genuine strategic differentiators of the platform. Ion Torrent is the fast NGS. If you need results today, not tomorrow, Ion Torrent is hard to beat among second-generation sequencing platforms. (Nanopore is faster still for some workflows, but that's a separate platform with its own characteristics, and a separate lecture.)

A practical note for budgeting: the speed of a run is not the speed of your overall workflow. Library prep is its own time cost. Quality control is its own time cost. Data analysis is its own time cost. A 4-hour run on the instrument is one part of a workflow that may take a day or two end-to-end. Ion Torrent's integration push — the Ion Chef, the Genexus — is specifically aimed at squeezing the rest of the workflow down to match the instrument's speed. The dream is sample in the morning, report by end of day. The platform isn't all the way there for all assays, but it's closer than most competitors.

Now let's look at the library prep that feeds these fast runs: AmpliSeq.

---

## SEGMENT 12 — AmpliSeq library prep: the clinical NGS workflow

AmpliSeq is a library preparation method that ThermoFisher developed specifically for the Ion Torrent platform — though it's now used on Illumina too in some workflows — and it's worth a full segment because it explains a lot about why Ion Torrent thrives in the clinical market.

The fundamental idea of AmpliSeq is **amplicon sequencing**. Instead of randomly fragmenting genomic DNA and sequencing whatever you happen to get (which is what whole-genome or whole-exome sequencing does), you decide in advance which specific regions of the genome you care about, you design PCR primers for each of those regions, and you amplify just those regions. Then you sequence the amplicons. The output is sequencing data for exactly the regions you care about, nothing more, nothing less.

For clinical work, this is exactly what you want. A typical clinical cancer panel might target 50 to 500 cancer-relevant genes — known oncogenes, known tumor suppressors, known drug-target genes. You don't need to sequence the rest of the genome to make a treatment decision. So you design primers for all the exons in those genes, run a single multiplex PCR that amplifies all of them in parallel, and sequence the resulting pool. You get deep coverage of the regions you care about, you don't waste sequencing capacity on regions you don't, and you can do the whole prep with a small input of DNA.

\[Pause.\]

The technical trick of AmpliSeq, and what makes it work for clinical samples, is the multiplex PCR design. Running a multiplex PCR with thousands of primer pairs in a single tube is famously hard — primers cross-react with each other, generate dimers, amplify off-target regions, and produce uneven coverage where some amplicons are massively over-represented and others are missing entirely. ThermoFisher invested heavily in primer design software and in clever pool-splitting strategies (designing primers into two or four separate pools that don't fight each other, then combining the products) so that AmpliSeq panels with thousands of amplicons can be run reproducibly. It's not magic; it's a lot of careful design work and empirical optimization.

The reasons AmpliSeq is loved in clinical labs are concrete:

**Low input requirements.** AmpliSeq can work from as little as 1 to 10 nanograms of DNA. That's important because clinical samples are often DNA-limited. A formalin-fixed paraffin-embedded (FFPE) tumor block — the standard way pathology preserves tissue — gives you fragmented, damaged DNA in small quantities. Most whole-genome workflows need much more starting material. AmpliSeq doesn't.

**FFPE tolerance.** The PCR-based amplification step is forgiving of fragmented input. Even if your DNA is in 100-200 base fragments because formalin chopped it up, as long as the amplicon regions are short enough to be intact, you can amplify and sequence them. Random-fragmentation methods struggle with FFPE; amplicon methods cope better.

**Fast prep.** AmpliSeq prep can be done in a few hours, with a single overnight step if necessary. Combined with a 4-hour sequencing run, the whole library-to-data turnaround is under a day. That fits clinical workflow timelines.

**Reproducibility.** A fixed panel design — same primers, same regions, every time — gives very consistent coverage across samples. That's important for clinical validation; the panel either works or it doesn't, and you can validate it once and run it identically forever.

**No size selection or shearing.** You skip the mechanical or enzymatic fragmentation step that's required for random-fragmentation library prep, which means fewer instruments, less hands-on time, less variability.

\[Pause.\]

The tradeoff is that AmpliSeq is **not** a discovery method. You can only detect variants in regions you designed primers for. If a patient has a clinically important mutation in a gene you didn't include in your panel, you'll miss it. So AmpliSeq is for known, well-defined targets — not for hypothesis-free genome-wide variant discovery.

For cancer panels, this is fine, because the field has converged on a few hundred genes that drive clinical decisions, and you can put them all on a panel. For germline disease testing, this is fine for targeted disease panels — say, an inherited cardiomyopathy panel, or a cystic fibrosis carrier screen. For microbiome work, where you're sequencing 16S rRNA amplicons across all the bacteria in a sample, AmpliSeq's amplicon-focused architecture is a natural fit. For research discovery — looking for novel disease genes, characterizing unknown pathogens — you usually want a random-fragmentation method instead, and you'd reach for Illumina whole-exome or whole-genome.

So AmpliSeq is the perfect complement to Ion Torrent's hardware. **The hardware is fast and inexpensive but lower-throughput; the library prep is fast and targeted with low input requirements; the combined workflow is exactly what a clinical lab needs.** It's the integration of these two pieces — fast sequencer plus targeted library prep — that has carved out Ion Torrent's clinical niche.

Now let's look at the most important clinical application of that workflow: the Oncomine cancer panels.

---

## SEGMENT 13 — Oncomine cancer panels: Ion Torrent's clinical niche

If you ask a working clinical pathologist or a molecular tumor board oncologist where they actually encounter Ion Torrent in their day job, the answer most of the time will be: **Oncomine**. Oncomine is ThermoFisher's brand for its clinical oncology panels — AmpliSeq-based panels designed for cancer genotyping, validated for use in clinical labs, often with regulatory clearances in various jurisdictions. The Oncomine line is the commercial flagship of Ion Torrent's clinical strategy.

Let me describe what an Oncomine panel actually does and why it matters.

A modern oncology workflow needs to know, for a given patient's tumor: which genes are mutated? Which mutations are actionable — meaning, is there a targeted therapy that works against tumors carrying this specific mutation? Are there fusion genes — abnormal chimeric proteins formed by chromosomal rearrangements — that are driving the cancer? Is the tumor mutation burden high (which predicts response to immunotherapy)? Is there microsatellite instability? Each of these questions can be answered, in principle, from sequencing data. Oncomine panels are designed to answer them in a single integrated assay, fast, from a small clinical sample, with a clinician-friendly report at the end.

A typical Oncomine panel — say, the Oncomine Comprehensive Assay — covers somewhere between 50 and 500 cancer-relevant genes. It detects single-nucleotide variants, small insertions and deletions, copy number changes, and gene fusions. The fusion detection is particularly important — many cancer driver events are gene fusions (like the BCR-ABL fusion in chronic myeloid leukemia, or the EML4-ALK fusion in some lung cancers), and detecting fusions requires RNA sequencing of the tumor in addition to DNA. Oncomine panels often include both DNA and RNA components, with the workflow designed to extract both from the same FFPE tumor block and sequence them on the same Ion Torrent chip.

\[Pause.\]

The clinical pitch is concrete. A patient with metastatic lung cancer comes in. Their tumor is biopsied — often a small needle biopsy that yields only a tiny amount of tissue. The FFPE block goes to the molecular pathology lab. Within a few days, Ion Torrent sequencing produces a report listing the actionable mutations and fusions in the tumor. The oncologist looks at the report and chooses a targeted therapy — an EGFR inhibitor if there's an EGFR mutation, an ALK inhibitor if there's an EML4-ALK fusion, immunotherapy if the tumor mutation burden is high. Without the molecular profile, the patient would get standard chemotherapy. With the molecular profile, they often get a precisely matched targeted therapy with much better outcomes. This is what "precision oncology" actually means in practice, and Oncomine panels — running on Ion Torrent S5 instruments in molecular pathology labs around the world — are one of the workhorses making it happen.

Why Ion Torrent for this rather than Illumina? A few reasons.

**Run time.** Clinical oncology cares about turnaround. A 24-to-48-hour Ion Torrent workflow beats a multi-day Illumina workflow for many panels. Faster results, faster treatment decisions.

**Small panels, small batches.** A clinical lab might run only a handful of patient samples per day. An Illumina MiSeq or NextSeq is designed for larger batches; running tiny batches on it wastes flowcell capacity and is expensive per sample. An Ion Torrent chip can be sized to match the batch — a small chip for a few samples, a bigger chip for many. The economics line up better for small-batch clinical work.

**FFPE compatibility.** AmpliSeq's tolerance for fragmented, damaged FFPE DNA is excellent, and Oncomine workflows are tuned for it.

**Regulatory clearance.** ThermoFisher has invested heavily in getting Oncomine panels through FDA, CE-IVD, and other regulatory paths. That regulatory documentation matters enormously to clinical labs, which need validated assays to bill insurance and to comply with lab accreditation requirements.

**Integrated reporting.** The Oncomine workflow includes software that produces clinical-style reports, mapping detected variants to known drug indications, clinical trials, and resistance markers. The lab doesn't have to build its own variant interpretation pipeline from scratch.

\[Pause.\]

Illumina has competing products — TruSight, for example — and has been pushing hard into clinical oncology with the NextSeq and NovaSeq family. There's real competition. But Ion Torrent's position in clinical oncology is well-established and stable, particularly in mid-sized hospital labs and in some international markets. The platform isn't going to take over the world, but Oncomine on Ion S5 is a real product in a real market doing real clinical work. That's the niche the platform settled into, and it's a respectable niche.

Now let's look at the other major clinical application area where Ion Torrent shines.

---

## SEGMENT 14 — 16S microbiome and rapid pathogen ID: fields where Ion Torrent thrives

There are two other applications where Ion Torrent has carved out particularly strong positions: **microbiome profiling**, especially 16S ribosomal RNA gene sequencing, and **rapid pathogen identification**. Both of these play to the platform's strengths in a way that makes Ion Torrent a natural choice.

Let's start with 16S microbiome work. If you want to know what bacteria are present in a sample — a gut microbiome sample, a soil sample, a wastewater sample, a clinical specimen of unknown origin — the classic approach is to sequence the **16S ribosomal RNA gene**. The 16S gene is present in essentially all bacteria, it has both highly conserved regions (which you can use as PCR primer binding sites) and highly variable regions (which differ between species), and decades of microbial taxonomy have been built around it. So you design PCR primers that bind to the conserved regions, amplify the variable region across all the bacteria in your sample, and sequence the resulting pool of amplicons. The sequences you get back tell you which species are present and in what relative abundance.

This is amplicon sequencing, which we discussed in the AmpliSeq segment. It's exactly the kind of work Ion Torrent is built for. You're amplifying a defined region — usually one of the V3, V4, or V3-V4 hypervariable regions of 16S, which are 250-450 bases long — and sequencing it across a mixed sample. Read length requirements match Ion Torrent's capabilities well. Throughput requirements are modest. Speed is valuable. Cost matters because microbiome studies can involve hundreds of samples.

Ion Torrent's 16S workflow gives you results in roughly a day, from sample to abundance profile. That's faster than Illumina for small-to-medium batch sizes, and well-matched to the kind of work microbiome labs do — running 50 or 100 samples at a time, getting community profiles, doing statistical comparisons across treatment groups.

\[Pause.\]

The homopolymer issue is a real consideration for 16S work, because some bacterial taxa do have homopolymer runs in their 16S sequences that can be misread. Bioinformatics tools designed for Ion Torrent 16S data — like specific clustering and OTU-calling algorithms — handle this by being more aggressive about merging similar sequences within homopolymer-tolerance ranges. So the workaround exists, but it's worth knowing about; if you compare an Ion Torrent 16S dataset directly to an Illumina 16S dataset, you'll see some systematic differences in how rare taxa are called.

Now the rapid pathogen ID application. Here the use case is: a patient comes in with a serious infection — could be a returning traveler with an unusual fever, could be a sepsis patient with a culture-negative bacteremia, could be a meningitis case where the CSF isn't growing anything in standard culture. The clinical team needs to know what pathogen is present, and they need to know soon. Traditional microbiology — culture, biochemical identification — can take days, especially for fastidious organisms that don't grow well. Sequencing-based identification can be faster.

Ion Torrent's role here is twofold. You can do **targeted pathogen panels** — AmpliSeq panels designed to amplify and identify a defined set of pathogens, often including resistance gene detection — which give you a fast yes/no on whether a known pathogen is present and whether it carries known resistance markers. Or you can do **metagenomic sequencing** — fragment everything in the sample and sequence it all — to detect novel or unexpected pathogens, though this is more commonly done on other platforms because the throughput needed is higher.

The fast-turnaround clinical pitch is the same as for oncology: results today, not in a week. For an ICU patient on broad-spectrum antibiotics, a rapid pathogen ID that allows de-escalation to a targeted agent can mean shorter hospital stay, lower antibiotic exposure, better outcomes.

\[Pause.\]

There's a broader public-health version of this story too. During disease outbreaks, rapid genotyping of pathogen isolates helps epidemiologists track transmission chains, identify resistance patterns, and design public-health responses. Ion Torrent was used extensively for Ebola sequencing during the 2014-2016 West African outbreak, for example, and is part of many countries' tuberculosis surveillance programs because it allows fast, decentralized sequencing of TB isolates including drug-resistance markers. The fact that an S5 instrument is small and self-contained enough to be deployed to a regional reference lab — rather than requiring centralized sequencing infrastructure — has been a real practical advantage in public-health applications.

So microbiome and pathogen ID are the second leg of the platform's clinical-applied use case. Combined with oncology, those three application areas — cancer panels, microbiome profiling, pathogen ID — account for most of the Ion Torrent installed base's actual workload. The platform isn't trying to do everything. It's trying to do these things well.

Now let's confront the elephant in the room: Illumina.

---

## SEGMENT 15 — Competition with Illumina MiSeq: head-to-head in the small-batch clinical market

The most direct competitive comparison for an Ion Torrent S5 in 2026 is the Illumina MiSeq — and to a lesser extent the iSeq, the NextSeq 550Dx, and various other Illumina benchtop sequencers aimed at the same clinical and small-research market. Both platforms target similar customers. Both have clinical regulatory clearances for important assays. Both have proven track records. They genuinely compete, and clinical labs choose between them based on a mix of technical, workflow, and business factors that I want to lay out honestly.

Where Illumina MiSeq wins:

**Per-base accuracy.** Illumina is genuinely more accurate per base than Ion Torrent, especially in homopolymer regions and especially for low-frequency variant detection. For applications where calling a variant present at 1% allele frequency matters — like detecting minor tumor clones, or distinguishing rare resistance mutations — Illumina's lower error rate gives it an edge.

**Per-base cost.** Once you account for chip costs, run costs, and reagent costs, Illumina is generally cheaper per gigabase of data than Ion Torrent at all but the smallest batch sizes. This gap has widened over time as Illumina has scaled.

**Ecosystem and standardization.** Illumina is the de facto industry standard for most NGS applications. More bioinformatics tools are validated against Illumina data, more journals expect Illumina data, more clinical assays exist for Illumina platforms. This network effect is real and matters for labs that want to publish or share data.

**Read accuracy at scale.** For whole-exome or whole-genome work, Illumina's combination of high throughput, low cost per base, and good accuracy is essentially unmatched in the second-generation sequencing market. Ion Torrent cannot compete in those use cases.

\[Pause.\]

Where Ion Torrent S5 wins:

**Run speed.** Hours, not a day or more. For time-sensitive clinical work, this is a real and durable advantage.

**Library-prep speed and FFPE handling.** AmpliSeq is faster and more tolerant of clinical sample types than typical Illumina library preps. For molecular pathology labs working with tiny FFPE samples, this matters.

**Small-batch economics.** For a lab running 4 or 8 samples per day on a clinical panel, an Ion Torrent chip sized appropriately is cheaper per sample than running an under-loaded MiSeq flowcell. The economics of batch sizing favor Ion Torrent at small scales.

**Instrument cost.** Ion Torrent instruments are generally less expensive up front than comparable Illumina instruments. For a smaller lab with limited capital, that matters.

**Integration of workflow.** ThermoFisher's Genexus and the S5/Ion Chef ecosystem genuinely simplify the operator workflow. Some clinical labs prefer that integration over Illumina's more modular but also more complex workflows.

\[Pause.\]

The honest reality is that for most clinical NGS applications, **either platform works**, and the choice comes down to local factors — what the lab is already running (since switching platforms is expensive and disruptive), what their reference lab partners are running (since data compatibility matters), what regulatory clearances cover the specific assay they need to run, what their batch sizes look like, what their reimbursement structures are, and what their staff are trained on. There isn't a single right answer.

But the long-term competitive trajectory has been clear: Illumina has steadily grown its share of the overall NGS market, including the clinical NGS market. Ion Torrent has held its niche but hasn't expanded it dramatically. In raw market-share terms, Illumina dominates and Ion Torrent is a credible second. Each year, more clinical applications get developed on Illumina first; Ion Torrent versions come later, if at all. The platform isn't growing the way some early projections suggested it would, but it isn't shrinking dramatically either — it's a stable, profitable, clinically-important second platform in a market dominated by one giant.

That stability is itself a useful signal. Customers who chose Ion Torrent ten years ago and are still on it are doing so because the platform genuinely serves their needs. Switching costs are high; the fact that the installed base is sticky tells you the value proposition is real for those customers. For the right application — small-batch clinical work with fast turnaround needs — Ion Torrent is the better tool. For most other applications, Illumina is.

Now let's talk specifically about why Ion Torrent didn't win the bigger sequencing wars, because that's an instructive failure mode.

---

## SEGMENT 16 — Why Ion Torrent didn't conquer the genome: cost, homopolymers, throughput

So why, with such elegant technology — a chip-based sequencer riding Moore's law, with no expensive optics, with fast runs and low instrument costs — did Ion Torrent not displace Illumina the way some people expected in 2010 and 2011?

The honest answer is a combination of three structural disadvantages and one strategic misstep.

**Structural disadvantage one: the homopolymer problem.** We covered this in Segment 9. It's a real, fundamental limitation that follows directly from the platform's detection architecture. For applications where exact length calls matter, you need an orthogonal confirmation, which limits how confidently you can use Ion Torrent data alone for some clinical and research uses. Illumina, with its color-coded one-base-at-a-time chemistry, just doesn't have this issue. Over time, as clinical applications have proliferated and standards have tightened, this gap has hurt Ion Torrent's competitive position more than it might have hurt earlier.

**Structural disadvantage two: throughput scaling.** Yes, Ion Torrent chips ride Moore's law for pixel count. But the throughput of a sequencer isn't just pixel count — it's pixel count times reads per pixel times bases per read times yield per chip. And Illumina's scaling on flowcell technology has been even more aggressive than Ion Torrent's chip scaling. Illumina has been able to keep ramping cluster density on its flowcells, increase its imaging speed, optimize its chemistry, and push per-flowcell yield up by orders of magnitude over the same time period. The combined effect is that Illumina's cost-per-base has fallen faster than Ion Torrent's, even though both are technically benefiting from process improvements. Moore's law applies to both platforms in different ways, and Illumina's particular optimization path turned out to compound faster.

**Structural disadvantage three: read accuracy at the volumes needed for whole genomes.** When you're sequencing a single bacterial genome, modest accuracy is fine because you have plenty of coverage and you can polish the consensus. When you're sequencing a human exome or whole genome, you need to call rare variants confidently against a background of many many bases, and small per-base accuracy differences compound into meaningful differences in variant-calling specificity. Illumina's accuracy advantage matters more as the genome size grows.

\[Pause.\]

**Strategic misstep: the Proton.** As discussed in Segment 10, ThermoFisher pushed Ion Torrent into a head-on competition with the Illumina HiSeq through the Proton platform — trying to capture the human-genome-scale market with a benchtop CMOS sequencer. That competition was always going to be uphill because of the structural issues above, and the Proton's underperformance damaged the platform's credibility just as the market was deciding which way to bet. If Ion Torrent had stayed focused on its clinical and small-research niche from the beginning rather than chasing genome-scale work, its overall trajectory might have been more sustainable. The Proton episode is a useful business lesson in not letting marketing reach exceed technological grasp.

There's a deeper meta-point here too. The semiconductor industry has a logic that says: cheaper chips, more transistors, win the market. That logic works in computing because chips are the entire substrate of computing. In sequencing, the chip is the sensor — but it's not the entire system. The chemistry, the library prep, the analysis software, the regulatory ecosystem, the user training, the bioinformatics community — all of those have to scale together for a sequencing platform to win. Illumina built a more complete ecosystem; Ion Torrent built a more elegant sensor. In a battle of complete ecosystems, the more complete ecosystem usually wins, even if the sensor isn't quite as elegant.

\[Pause.\]

That's not a verdict on the technology. The technology is fine; the chip works; the chemistry works; the sequencing happens. It's a verdict on what it takes to win a platform market — and in platform markets, the breadth of the ecosystem matters more than the cleverness of any single component. Ion Torrent's chip is, in some respects, more impressive than Illumina's flowcell as a piece of engineering. But Illumina's ecosystem — including its dye chemistry, its imaging hardware, its library kits, its software, its installed base, and its industry partnerships — is broader and deeper, and the broader ecosystem wins.

So Ion Torrent finds its place as the elegant niche platform: technically interesting, commercially viable, clinically important, but not dominant. There's nothing wrong with being the elegant niche platform. Many great products live there. But the early dream of Ion Torrent disrupting the entire sequencing market — that dream did not come true, and it's worth understanding why.

Now let's see where Ion Torrent stands today.

---

## SEGMENT 17 — Ion Torrent today: ThermoFisher subsidiary, stable niche

Where is Ion Torrent in 2026? It's a stable, profitable, clinically-important business unit inside ThermoFisher Scientific. After Life Technologies acquired Ion Torrent in 2010 and then ThermoFisher acquired Life Technologies in 2014 for about $13.6 billion, Ion Torrent has lived as part of ThermoFisher's clinical and life sciences instruments portfolio.

The product line, as of the mid-2020s, centers on a few core instruments:

The **Ion GeneStudio S5** family — the workhorses of the clinical and applied research market. Multiple variants targeting different throughput needs. Tightly integrated with Ion Chef for automated library and template prep. The successor to the original PGM, dramatically more capable but architecturally the same.

The **Ion Torrent Genexus** — the integrated sample-to-report instrument, aimed at clinical labs that want a turnkey sequencing solution. This is where ThermoFisher is making its biggest forward bet on Ion Torrent's clinical future.

A portfolio of **AmpliSeq panels** — both off-the-shelf catalog panels for common clinical applications and the AmpliSeq On Demand service that lets labs design custom panels for specific research or clinical needs.

The **Oncomine** clinical oncology product line — the highest-value clinical franchise, with multiple panels at different scopes and various regulatory clearances in different markets.

\[Pause.\]

Strategically, ThermoFisher has positioned Ion Torrent as the **integrated clinical sequencing platform** in its portfolio — distinct from the more research-oriented sequencing offerings it has built up, and complementary to its enormous broader portfolio in clinical diagnostics, pathology consumables, and life sciences instruments. The pitch to clinical lab customers is essentially: ThermoFisher already supplies your lab with antibodies, PCR enzymes, lab equipment, and informatics tools; Ion Torrent fits naturally into that supply relationship; we will provide the end-to-end clinical sequencing solution as part of the broader ThermoFisher relationship. For many clinical labs, that vendor consolidation is genuinely valuable.

Financially, Ion Torrent is not a separately disclosed line item in ThermoFisher's financials — it's bundled into broader segments — so we can't easily quote revenue numbers. But indications from market analysts and from ThermoFisher's strategic statements suggest the franchise is stable, profitable, and growing modestly in line with the clinical NGS market overall. It's not the breakout success some hoped for in 2011, but it's not a failure either. It's a reliable mid-sized business inside a very large company.

The Ion Torrent installed base globally is in the thousands of instruments — a substantial fleet, though much smaller than Illumina's. The platform retains particular strength in certain national markets where ThermoFisher has strong commercial channels, in clinical oncology, and in public-health applications. New instrument sales continue, particularly in markets where the integration story of Genexus appeals to hospital labs.

\[Pause.\]

The forward question for Ion Torrent is whether the platform can continue to find growth as the sequencing market evolves. The threats are real: Illumina continues to push down-market with smaller, cheaper instruments aimed at the clinical lab segment; Oxford Nanopore is pushing rapid sequencing applications with portable instruments and even faster turnaround; new sequencing companies like Element Biosciences, Singular Genomics, and Ultima Genomics are bringing alternative chemistries to market. The competitive landscape isn't getting easier.

The opportunities are also real: clinical sequencing demand continues to grow as oncology, infectious disease, and prenatal testing applications proliferate; the regulatory and reimbursement environment for clinical NGS is becoming more favorable; demand for integrated, easy-to-operate clinical instruments — exactly what the Genexus is — is rising as sequencing moves out of specialized genomics centers and into general hospital labs.

The most likely future for Ion Torrent over the next several years is more of the same: a stable, slowly-evolving, clinically-focused platform inside a very large company, generating reliable revenue and providing real clinical value, but not transforming the market the way the original founding vision imagined. That's a perfectly respectable outcome for any technology. Most ambitious technologies don't even get that far.

Now let's close with what Ion Torrent leaves behind as a legacy, regardless of how the platform itself ages.

---

## SEGMENT 18 — The chip-as-sensor legacy: what Ion Torrent proved about silicon detection

I want to close with the bigger picture, because Ion Torrent's importance is not fully captured by counting how many instruments it sold or how many clinical reports it generated. The platform did something larger than that. It proved, at industrial scale, that **biology can be read by chips, not by cameras**.

That proof is going to outlast the platform itself. Here's why.

Before Ion Torrent, every serious NGS platform — and most analytical biology instruments more broadly — relied on optics. Fluorescent detection. Lasers. Imaging. CCDs. CMOS image sensors. The whole industry was, in effect, photographing biology. The infrastructure around that approach was enormous: glass slides, optical alignment, dye chemistries, fluorophore engineering, image processing software. A vast amount of intellectual and engineering investment had been built on the assumption that biology gets read by light.

Ion Torrent showed that you didn't have to do it that way. You could read biology with a transistor. Directly. Electrically. With no light path at all. And not in some lab demo — in a commercial sequencer, at scale, generating real clinical results. The point was made publicly and convincingly.

\[Pause.\]

That proof opened the door for an entire category of biological sensors that are direct-to-electronics rather than optical. The most successful of these so far is **nanopore sequencing**, which Oxford Nanopore has built into a commercial sequencing platform. Nanopore sequencing also reads DNA electrically — by measuring changes in ionic current as a DNA strand threads through a tiny protein pore — and it inherits, philosophically, from Ion Torrent's bet on electrical detection. Oxford Nanopore wasn't directly inspired by Ion Torrent in any specific technical sense, but the broader proof that electrical biological sensing could be a real product made Oxford Nanopore's business case much easier to make. The industry was primed for the idea.

Beyond sequencing, the same principle is being applied to a widening range of biosensors. ISFET-based glucose monitors. CMOS arrays for cell-electrophysiology recording. Chip-based pH and ion-concentration measurement for cell-culture monitoring. Direct-electronic detection of antibody binding events. Chip-based PCR with real-time fluorescence-free detection. The whole field of "lab on a chip" has accelerated because Ion Torrent showed that semiconductor manufacturing could be applied to biological instrumentation in a commercially serious way, and that the result was cheaper, faster, and smaller than the optical alternative.

\[Pause.\]

There's a deeper economic point too. Ion Torrent demonstrated that **the cost curves of the semiconductor industry can be borrowed by adjacent industries** if you can reformulate your problem as a chip problem. The semiconductor industry has been driving down the cost per transistor for sixty years, with no sign of stopping (or at least, slowing more gradually than predicted). Any analytical industry that can express its problem in terms of "more pixels, smaller pixels, faster readout" can plug into that cost curve. Imaging did this fifty years ago when CCDs replaced film. Audio did it when digital signal processing replaced analog circuits. Sequencing, with Ion Torrent and now with nanopore, is doing it now. Future generations of biological instruments will likely keep finding ways to plug into the silicon cost curve, and Ion Torrent will be remembered as one of the early proofs that the strategy works.

Rothberg's career embodies this pattern. After Ion Torrent, he started Butterfly Network, which puts portable ultrasound on a phone — same idea, replacing expensive piezoelectric transducer arrays with CMOS-based ultrasound sensors. He's started several other companies along similar lines. The pattern — find an expensive analytical instrument, identify the sensor at its heart, ask whether it can be made in CMOS — is now an entrepreneurial template. Ion Torrent is the canonical example of how to execute that template successfully.

\[Pause.\]

So let me close with the four things I asked you to take away in Segment 1, and check them off.

**One**: why Ion Torrent doesn't need a camera. Because base incorporation by polymerase releases a proton, and a proton is a pH change, and a pH change can be detected directly by a semiconductor transistor — the ISFET — without any intermediate optical step. No dye, no laser, no camera. Chemistry to electrons, directly.

**Two**: what's happening in an Ion Torrent well. A bead carrying millions of identical template strands sits in a well above an ISFET. Solution containing one nucleotide species flows over the chip. If that nucleotide is complementary to the templates' next position, polymerases on the bead incorporate it, releasing millions of protons simultaneously, which dip the well's pH measurably. The ISFET reads the pH change as a voltage spike. The chip reports a base call. Then the next nucleotide flows. Repeat for hundreds of cycles.

**Three**: the homopolymer problem. Because Ion Torrent flows one nucleotide at a time without a terminator, runs of identical bases all get incorporated in a single flow, and the platform has to count them from signal magnitude. That counting works for short runs but degrades for long ones, producing characteristic indel errors at homopolymer stretches. It's a structural consequence of the platform's design, not a fixable defect.

**Four**: the market niche. Ion Torrent is fast, integrated, regulatory-cleared, and FFPE-friendly. It thrives in clinical oncology panels (Oncomine), 16S microbiome profiling, and rapid pathogen identification. It does not dominate whole-genome sequencing; Illumina does. The platform's strategic niche is targeted, fast, small-to-medium-batch clinical NGS, and within that niche it's a serious and durable product.

If you can do those four things, you understand Ion Torrent. And if you understand Ion Torrent, you understand both a working clinical NGS platform and a foundational moment in the history of biological instrumentation — the moment when biology started being read by chips. The platform itself may eventually be eclipsed, but the idea it embodied will not be. Silicon detecting biology is not going away. It's only going to get more important.

That's where we'll leave it for today. Thank you all for your attention. The appendix has some additional details and references for those who want to go deeper.

---

## APPENDIX

**A1. Key dates and milestones**

- **1970**: Piet Bergveld invents the ISFET (ion-sensitive field-effect transistor) as a biomedical pH-sensing device.
- **1999**: Jonathan Rothberg founds 454 Life Sciences after a personal NICU experience with his newborn son.
- **2005-2007**: 454 commercializes pyrosequencing; Roche acquires 454 in 2007 for ~$155 million.
- **2007**: Rothberg founds Ion Torrent with personal money plus ~$23 million in venture capital; retains supervoting shares.
- **February 2010**: Ion Torrent launches the Personal Genome Machine (PGM) at $50,000.
- **August 2010**: Life Technologies acquires Ion Torrent for $375 million upfront plus up to $350 million in milestones.
- **2012**: Ion Torrent launches the Proton sequencer, aimed at the human genome market.
- **2013**: Roche shuts down 454, marking the end of the original pyrosequencing platform.
- **2014**: ThermoFisher Scientific acquires Life Technologies (including Ion Torrent) for ~$13.6 billion.
- **2015**: Ion S5 launches, repositioning the platform on the clinical and small-research market.
- **~2019**: Ion Torrent Genexus launches as a fully integrated sample-to-report clinical instrument.

**A2. Chip generations and approximate well counts**

- Ion 314: ~1 million wells, ~10 Mb output (original PGM small chip)
- Ion 316: ~6 million wells, ~100 Mb output (PGM mid-tier)
- Ion 318: ~11 million wells, ~1 Gb output (PGM high-tier)
- Ion PI: ~165 million wells, ~10 Gb output (original Proton chip)
- Ion 520: ~3 million reads, used for small panels (S5)
- Ion 530: ~20 million reads, mid-throughput (S5)
- Ion 540: ~80 million reads, high-throughput (S5)
- Ion 550: ~130-180 million reads, highest-throughput S5 chip

These numbers are approximate and change with software and chemistry updates; always check current ThermoFisher specifications.

**A3. Approximate performance characteristics (typical values, vary by chemistry generation)**

- Read length: 200-400 bases typical; up to 600 bases in some configurations
- Run time: 2-4 hours on instrument; full library-to-data turnaround typically under one day
- Per-base accuracy: ~99% for single bases, dropping to ~97-98% in homopolymer runs of 5+
- Predominant error type: indels at homopolymer regions, not substitutions
- Cost per base: higher than Illumina at large scales; competitive at small batch sizes

**A4. Key terminology glossary**

- **ISFET**: Ion-sensitive field-effect transistor — the pH-sensing element under each well.
- **CMOS**: Complementary metal-oxide semiconductor — the standard chip fabrication technology used for the Ion Torrent chip.
- **emPCR**: Emulsion PCR — the clonal amplification method that puts identical template copies onto each bead.
- **ISP**: Ion Sphere Particle — the bead used for clonal amplification and chip loading.
- **Flow / flow cycle**: A single nucleotide species being washed across the chip; reads from many flows in sequence are combined to reconstruct the template sequence.
- **Homopolymer**: A run of identical bases in a row (e.g., AAAAA) — Ion Torrent's signature weak spot.
- **PGM**: Personal Genome Machine — the original 2010 Ion Torrent instrument.
- **Proton**: The 2012 higher-throughput instrument aimed at the human genome market; never displaced Illumina HiSeq.
- **Ion S5 / GeneStudio S5**: The modern clinical workhorse instrument family.
- **Genexus**: The integrated sample-to-report clinical instrument.
- **AmpliSeq**: PCR-based targeted library prep method optimized for clinical samples.
- **Oncomine**: ThermoFisher's brand for clinical oncology AmpliSeq panels.
- **FFPE**: Formalin-fixed paraffin-embedded — the standard pathology tissue preservation that yields fragmented DNA.

**A5. Comparison cheat sheet: Ion Torrent vs Illumina**

| Feature | Ion Torrent | Illumina |
|---|---|---|
| Detection | Electrical (pH) | Optical (fluorescence) |
| Chemistry | One base at a time, natural nucleotides | All bases at once, reversible-terminator labeled |
| Predominant errors | Indels at homopolymers | Substitutions |
| Run time | Hours | Hours to days |
| Cost per base | Higher except at small batches | Lower at scale |
| Best applications | Targeted clinical panels, 16S, pathogen ID | Whole-genome, whole-exome, large-scale work |
| Market position | Stable niche | Dominant |

**A6. Further reading**

For a deeper dive, look up:

- Rothberg et al., "An integrated semiconductor device enabling non-optical genome sequencing," _Nature_, 2011 — the original Ion Torrent technology paper.
- Bergveld, P., "Thirty years of ISFETOLOGY: What happened in the past 30 years and what may happen in the next 30 years," _Sensors and Actuators B_, 2003 — historical perspective on ISFET development.
- ThermoFisher Scientific's Ion Torrent product documentation for current chip specifications, panel catalogs, and workflow details.
- Comparative NGS platform reviews — there are several good ones in the recent literature comparing Ion Torrent, Illumina, and Nanopore for various applications.
- For the historical-business angle, Rothberg's public interviews and the trade-press coverage of the 2010 Life Technologies acquisition and the 2014 ThermoFisher acquisition give useful context on how the platform was valued and positioned over time.

That's the appendix. Good luck with whatever you do next, and remember: when you see a chip in a clinical lab reading DNA, you're watching the idea that Jonathan Rothberg had in 2007 still doing real work in 2026. Not bad for a slightly heretical thought about replacing cameras with transistors.
