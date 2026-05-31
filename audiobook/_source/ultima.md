# Ultima Genomics UG100 Sequencing

**A 2-hour undergraduate genomics lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The $100 genome problem and why it matters

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about Ultima Genomics — a company that almost nobody outside of professional genomics has heard of, and which, depending on how the next five years play out, will either be remembered as the boldest engineering bet anyone has ever made in DNA sequencing, or as a fascinating footnote in the history of how Illumina cemented its monopoly. The verdict is genuinely still out. And that's part of what makes this such a rich case to think about.

But before we get into Ultima itself, I want to start with a number. Two hundred dollars. That's roughly what it costs, in 2024 and 2025, to read a complete human genome on Illumina's NovaSeq X — the dominant sequencing platform on the planet. Two hundred dollars to read three billion bases of DNA, accurately enough to find the medically relevant variants, in a sample from a single human being. That number is the result of about twenty years of relentless engineering improvements, layered on top of the same fundamental chemistry that came out of Cambridge in the late 1990s. And it's astonishingly cheap. The Human Genome Project, two decades ago, cost three billion dollars for one genome. Now it's two hundred.

So why is anyone trying to go lower? Why would you build an entire company, raise six hundred million dollars in venture capital, and bet your career on undercutting a price that's already, by any historical standard, miraculous?

\[Pause.\]

Here's the answer, and it's the framing I want you to hold for the rest of this lecture. There is a price point — somewhere around one hundred dollars per genome, maybe a bit lower — below which something qualitatively new becomes possible. Not just incrementally cheaper sequencing. Something different in kind. At a hundred dollars a genome, you can do what people in the field call **population-scale sequencing** — projects that aim to sequence not thousands of people, not tens of thousands, but millions. The UK Biobank, which has half a million participants. The NIH's All of Us program, aiming at a million Americans. The Saudi Genome Program, GenomeAsia 100K, the Million Veteran Program, Iceland's deCODE work. Every one of these projects has, as its dominant line item, the cost of actually sequencing all those samples. If you can cut that cost in half, you save tens of millions of dollars — or, equivalently, you can sequence twice as many people for the same budget.

And here's why that matters scientifically. A lot of human genetic variation is _rare_. Most of the variants that drive disease risk or drug response are present in less than one in a thousand people, or one in ten thousand, or one in a hundred thousand. To find them, and to figure out what they do, you need to sequence enormous cohorts. The statistical power of a genetic study scales roughly with the square root of the number of people you've sequenced. Going from one hundred thousand genomes to one million genomes more than triples your power to detect rare effects. And the only thing standing between us and routine million-person studies is the per-genome cost. Drop the cost, and the studies that were impossible last year become straightforward this year.

That is the bet Ultima Genomics has made. The whole company, from the day it was founded, has been organized around one question: how do you build a sequencer that costs roughly half what an Illumina costs to run, on a per-genome basis? And the answer they arrived at is so different from how Illumina works, so structurally weird, that even competitors who hate them have had to admit it's an impressive piece of engineering.

\[Pause.\]

Here's the analogy I want you to hold in your head for the next two hours. Illumina sequencing happens on a glass flow cell — basically a microscope slide, with channels etched into it, sitting still while reagents are pumped across its surface and a camera takes pictures. It's a static stage. Liquid moves; the stage doesn't. Now imagine, instead of that static glass slide, you took a silicon wafer — the same kind of round, polished silicon disk that semiconductor fabs use to make computer chips — and you spun it. Like a hard drive platter. Like a record on a turntable. Like a compact disc. You drip reagents onto the center of the spinning wafer, and centrifugal force pulls them outward in a thin, even film across the entire surface. Above the wafer, fixed cameras stare down through the optics, and as the wafer spins under them, every point on the surface eventually passes through the field of view, gets imaged, and moves on. That's the picture. Hold it. **Instead of a flow cell with liquid flowing through it, you have a spinning wafer with liquid spreading across it by centrifugal force, like a record under a microscope, with the camera as the needle.**

That single architectural choice — spin the surface instead of flowing across it — is the seed from which everything else about Ultima grows. The chemistry, the read length, the single-end-only sequencing, the optics, the cost structure, the kind of customer the platform is sold to. All of it cascades from the wafer.

If you walk out of here in two hours and you can do three things — one, sketch the spinning-wafer architecture on a whiteboard and explain why it changes the economics of sequencing; two, explain in plain English what Ultima's "mostly unlabeled nucleotides with a single labeled probe" chemistry is and why it's cheaper than Illumina's four-color reversible terminators; three, look at a population genomics paper that says "we sequenced this cohort on the UG100" and have real intuition for what that means about cost, read length, accuracy, and what the data will look like compared to an Illumina dataset — then we've succeeded. Everything else hangs off those three.

\[Pause.\]

One more orienting fact before we go deeper. Ultima Genomics is a small company. About three hundred and fifty employees. Founded in 2016 by an Israeli-American engineer named Gilad Almogy, in stealth for nearly six years, finally announced to the world in May of 2022 with a six-hundred-million-dollar funding round and a paper in Nature Biotechnology that constituted the first real public look at the platform. The instrument they launched — the UG100 — went into early-access in 2023, and into broader commercial availability in 2024. By 2025, a successor called the UG200 was already on the market, with double the throughput.

For context: Illumina is a thirty-billion-dollar company. Ultima, even at the height of its valuation, was worth around eight billion. Ultima sells maybe a few dozen instruments a year. Illumina has thousands of NovaSeqs deployed. So we are absolutely talking about a David-versus-Goliath situation, with Ultima as the David, and with all the long odds that implies. Whether Ultima becomes the next Illumina, or gets absorbed, or quietly winds down, is genuinely an open question. What's not open is whether the engineering is interesting. It is. It's some of the most interesting engineering in genomics in the last fifteen years. Let's go look at it.

---

## SEGMENT 2 — Ultima's founders — semiconductor industry pivot to sequencing

To understand Ultima, you have to understand the man at the top of it, because the whole platform looks, structurally, like a long answer to the question "what would a semiconductor engineer build if you told him to sequence DNA?"

Gilad Almogy was born in Israel, did his undergraduate work there, and came to the United States for a PhD in applied physics at Caltech. So already the resume tells you something. Applied physics, not biology. Optics, not biochemistry. The lens through which he sees the world is the lens of an engineer who thinks about light, motion, and surfaces — not the lens of a molecular biologist who thinks about enzymes and base-pairing.

After Caltech, Almogy joined a small Israeli startup called Orbot Instruments, which was building a very specific and very lucrative tool: machines that inspect silicon wafers in semiconductor fabs, looking for defects. Here's what that means. When you fabricate a computer chip, you start with a round silicon wafer about two hundred millimeters across, and over the course of dozens of steps, you etch billions of transistors onto its surface. A single dust particle, a single misaligned mask, a single chemical contamination can ruin an entire chip. So fabs need machines that can take a freshly processed wafer, spin it under a high-resolution optical inspection station, photograph the whole surface, and detect any defects that have appeared. That's wafer inspection. And it is a multi-billion-dollar industry.

Orbot was acquired in 1997 by Applied Materials, one of the giants of semiconductor equipment. Almogy spent most of the next decade inside Applied Materials, eventually running their display group — which built the optical systems used to inspect flat-panel displays and chips. So pause and notice what that means. For about ten years, the person who would eventually found Ultima Genomics spent his professional life thinking about exactly one problem: how do you spin a circular wafer under a fixed optical system, image its entire surface at very high resolution, and extract clean signal from a very noisy environment? That is the whole problem of semiconductor wafer inspection. It is also, as you'll see, structurally identical to the whole problem of high-throughput DNA sequencing.

\[Pause.\]

In 2010, Almogy left Applied Materials and founded a solar energy company called Cogenra Solar, which built high-efficiency shingled solar modules. Cogenra got acquired by SunPower in 2015. And it was in the wind-down of that company, in 2016, that Almogy started Ultima. The founding intuition was simple. He looked at the sequencing industry, looked at what an Illumina NovaSeq actually was — a high-precision optical scanner moving across a flat surface, taking pictures of fluorescent molecules — and recognized that he had spent his entire career building, basically, that machine, but for chips. The substrate was different. The chemistry on top was different. But the underlying engineering problem — moving a high-resolution optical imager systematically over a flat surface, while reagents do their work — was deeply familiar.

Here's the analogy. **Almogy looked at sequencing and saw a chip inspection problem with biology on top of it.** And once you frame it that way, you start asking the questions a semiconductor engineer asks. Why is the substrate a glass slide instead of a silicon wafer? Silicon is cheaper, more dimensionally stable, and has decades of process engineering behind it. Why is the surface static while reagents flow across it? Spinning is faster and gives you more uniform delivery. Why are you using four colors when one color and a clever flow scheme might be cheaper? Why are you doing paired-end reads when you're sequencing against a known reference genome anyway? Why is the cycle time fifteen minutes when, with the right optics, it could be one?

Every one of those questions, asked by an Illumina engineer, would have to be weighed against decades of accumulated institutional commitment to the existing design. Asked by someone coming in fresh, with no biology priors and a deep grounding in optical-mechanical systems, they were just engineering questions. The answers Ultima arrived at — silicon wafer, spinning instead of flowing, one labeled probe instead of four labeled terminators, single-end only, much faster cycle times — were the natural answers from that perspective.

\[Pause.\]

I want to dwell for a moment on what this kind of cross-disciplinary founder represents, because it's not a fluke in modern biotech. Some of the most disruptive moves in the field have come from people who walked in from physics, engineering, or computer science and asked "wait, why are you doing it that way?" The PacBio founders came from microfluidics. The Nanopore people came partly from electrical engineering. Element Biosciences, another challenger we'll meet later, was founded by an ex-Illumina engineer who thought he could do it differently. The pattern is that the deepest reimagining tends to come from people who understand the problem clearly but aren't bound by the orthodoxy of how the problem has historically been solved.

Almogy assembled a team that mirrored that ethos. A lot of Israeli engineers from the semiconductor and defense optics world, plus a smaller core of biochemists and bioinformaticians hired from Illumina, Applied Biosystems, and the academic sequencing community. The mix mattered. The biology people kept the chemistry sane; the engineers built a machine that no biology-trained company would have built. That collision is the company.

Ultima stayed in stealth for almost six years, which is unusual. Most genomics startups announce themselves loudly and early. Ultima did the opposite. They quietly raised hundreds of millions of dollars in private rounds, built prototypes, ran them at a few academic partner sites, iterated the chemistry, and didn't go public with the platform until 2022. When they finally did — at the AGBT conference, the big annual genomics meeting, with the Nature Biotechnology paper hitting at the same time — it was the loudest single announcement the sequencing world had seen since the launch of the NovaSeq five years earlier. Six hundred million dollars, a working platform, real data, and a claim — the hundred-dollar genome — that landed like a stone in the pond.

That's the founder story. Now let's look at what they built.

---

## SEGMENT 3 — The wafer architecture — spinning silicon instead of static flow cell

Let me draw the picture of an Ultima sequencer for you, because once you see it, you understand half the company.

Picture, please, a circular silicon wafer. Two hundred millimeters across — about eight inches. The same dimensions as the wafers semiconductor fabs use, which is not an accident; Ultima is buying these wafers from the same suppliers, and using the same handling robotics, that exist in the chip industry. The wafer is polished mirror-smooth on one side, and on that side, chemically anchored, are billions of tiny beads. Each bead is just a few microns across. On each bead, immobilized on the surface, is a clonal cluster of identical DNA molecules — a few thousand copies of one fragment from your sample library — produced by an amplification step we'll talk about in Segment 4. So you can think of the wafer as a flat circular disk with billions of microscopic DNA-coated beads stuck to its surface, in a roughly uniform layer, like a very fine sandpaper grit.

Now picture that wafer mounted horizontally on a spindle, like a record on a turntable. Above it, a few millimeters from the surface, hangs the imaging head — fixed in place, looking down. Off to one side, a delivery arm dispenses fluid onto the center of the wafer. When the system runs, the wafer spins — typically at speeds that put the rim moving at a few meters per second, fast but not extreme — and as it spins, the dispenser drips reagent onto the center. The reagent is flung outward by centrifugal force, spreading into a thin uniform film that coats the whole wafer in fractions of a second. The wafer keeps spinning. The fixed cameras above it photograph the surface continuously, capturing every angular position as it rotates past the field of view. After the imaging step, a wash drips in, also spread by spin, and the cycle continues.

That's the whole machine, conceptually. **Hard drive platter spun under a microscope, with chemistry dripping onto the middle and flying outward.** The image gets formed not by stepping the camera tile by tile across a static surface — which is how Illumina does it — but by holding the camera still and letting the surface spin under it.

\[Pause.\]

I want you to feel why this is such a different design, because it's not obvious from the description.

Take an Illumina flow cell. It's a rectangular piece of glass, maybe seventy-five millimeters long, with channels carrying reagents. The total imaging surface area is, depending on which Illumina instrument you're talking about, somewhere between a few square centimeters and a few tens of square centimeters. To image the whole thing, the camera and optics have to physically move — they step across the flow cell in a snaking pattern, tile by tile, focusing at each new position, capturing an image, moving, refocusing, capturing again. Each tile is, maybe, a few hundred microns on a side. To image a whole NovaSeq flow cell, the optics step through tens of thousands of tiles. Every step costs time. Every step costs a small bit of mechanical precision; the stage has to settle, the autofocus has to lock, the camera has to expose. Stepwise imaging is the rate-limiting bottleneck on a lot of these instruments.

Now compare to the spinning wafer. The wafer is round, two hundred millimeters in diameter, giving roughly three hundred square centimeters of surface area — an order of magnitude more imaging area per instrument than Illumina. And critically, you image it _continuously_. The wafer spins; the camera doesn't move; no stepping, no focus-locking between tiles, no mechanical settling time. You use what's called a **time-delay-and-integration camera** — a TDI sensor — which is a specialized linear camera designed exactly for imaging objects in continuous motion. The TDI sensor reads out one line of pixels at a time, and as the object moves under it, it integrates the signal over multiple successive lines, effectively building up a continuous image of the moving surface with very high signal-to-noise. TDI cameras are widely used in industrial inspection — including, of course, semiconductor wafer inspection — exactly because they're optimized for "object moves under stationary camera at constant velocity." Which is exactly what the Ultima geometry gives you.

So the wafer plus TDI camera combination gets you two big wins. First, far more surface area per instrument than a flow cell, which means more DNA clusters per instrument, which means more sequence per run. Second, the imaging is continuous and very fast, because you never stop and step. The wafer just spins, and the camera just reads.

\[Pause.\]

Now, here's where the analogy gets really pleasing. The closest cultural reference point most people have for the spinning-imaging geometry is a **compact disc** — a CD or DVD player. In a CD player, a small disc spins, and a laser reads data tracks off its surface as the surface moves under the laser. The Ultima architecture is, structurally, a much fancier version of that same idea. Reagents instead of pre-stamped data tracks, fluorescent imaging instead of laser reflectivity, but the underlying geometry — spin the disc, read off the surface as it moves past a fixed pickup — is the same. The Ultima people, when they're being playful, sometimes call it "DNA sequencing on a Blu-ray drive." It's not literally Blu-ray, but you get the picture.

A second analogy that might help. **A semiconductor wafer inspection tool spins polished silicon under cameras to find defects. Ultima spins polished silicon under cameras to find fluorescent signals on DNA. The robotics, the wafer handling, the spin-coating machinery, the TDI imaging — all of it is borrowed wholesale from chip inspection.** When Ultima needed to build wafer handlers, they didn't have to invent them; they bought them from the same suppliers that sell to Intel and TSMC. When they needed wafer-grade polished silicon substrates, they ordered them from the same fabs that make microprocessor wafers. That transplant of mature, high-volume manufacturing infrastructure from semiconductors into genomics is one of the deep strategic moves of the company.

There's a subtle structural advantage here too. Silicon, as a substrate, has properties that glass doesn't. It's more thermally conductive, so the wafer can be temperature-controlled more uniformly than a glass flow cell. It's more dimensionally stable under heating and cooling. It's opaque, which means you can do back-illumination tricks you can't do on glass. And it integrates beautifully with optical and electronic structures that can be etched directly into the surface — though Ultima, at least in its current generation, mostly uses the wafer as a flat substrate without on-chip electronics. The point is just that silicon, as a sequencing surface, has long-term engineering headroom that glass doesn't, and that's part of the bet.

So that's the wafer. Spinning silicon, two hundred millimeters across, beads chemically anchored to its surface, reagents dripped at the center and flung outward by centrifugal force, fixed TDI cameras imaging it continuously from above. Now let's talk about what happens when you spin.

---

## SEGMENT 4 — Centrifugal reagent distribution — what changes when you spin

When you tell someone you're using centrifugal force to distribute reagents instead of pumping them through channels, the first reaction is usually "okay, weird, but does it actually make a difference?" The answer is yes, and the differences cascade through the whole rest of the platform. Let me walk you through them.

First, the time scale. Pumping reagents through a flow cell takes time. The fluid has to enter at one end, travel through the channels, displace the previous fluid, fill the volume uniformly, and then sit while the chemistry happens. For Illumina flow cells, a single reagent delivery — get the new fluid in, get the old fluid out, settle — takes on the order of minutes. The total cycle time for one base of Illumina sequencing, including incorporation, washing, and imaging, is something like ten to fifteen minutes per cycle on a typical instrument. Now compare that to spin coating. **Drip a fluid onto the center of a spinning wafer and centrifugal force flings it across the entire surface in well under a second.** The fluid film stabilizes almost immediately at a thickness determined by spin speed and viscosity — typically a few microns thick, very uniform. To exchange the fluid, you just spin off the old film at higher speed and drip on the new one. The reagent exchange time on an Ultima system is on the order of seconds, not minutes. That alone, multiplied over a couple hundred sequencing cycles per run, saves you hours per run.

Second, the volume. Because spin coating produces such a thin film, you use far less reagent per cycle than you would pumping it through channels. The flow-cell channels in an Illumina system have a defined dead volume that always has to be flushed and refilled, no matter how clever you are. A spin-coated film, by contrast, can be just a few microliters of fluid spread across the whole wafer surface. That's a meaningful cost — sequencing reagents, especially the labeled nucleotides, are expensive on a per-microliter basis. Cut your reagent use per cycle by a factor of five or ten and you've cut a real chunk of the per-genome consumable cost.

\[Pause.\]

Third, the uniformity. This is the subtle one. In a flow cell, reagents move through channels by laminar flow — orderly, parallel sheets of fluid sliding past each other. Laminar flow is well-behaved, but it has edge effects: the fluid near the channel walls moves slower than the fluid in the middle, which means reagents reach different points on the surface at slightly different times and concentrations. That introduces small systematic variation across the flow cell. Centrifugal spin coating, by contrast, produces a film whose thickness depends on spin speed and viscosity in a way that's been characterized in painstaking detail by the semiconductor industry — because that's literally how they coat photoresist onto wafers before lithography, and the chip industry has been doing this for fifty years. The result is a film whose uniformity is, frankly, excellent. Variation in reagent thickness across the wafer is typically below a few percent. That kind of uniformity is hard to get with channel flow.

Fourth — and this one matters for chemistry — spin coating naturally separates the "delivery" step from the "react" step. In a flow cell, you flow reagent through and the chemistry happens while the fluid is flowing or shortly after. On a spinning wafer, you can drip the reagent, let it spread to uniformity in milliseconds, then either let the wafer keep spinning while the chemistry proceeds, or even slow it down or stop it, controlling the reaction time independently of the delivery time. That decoupling gives you more tuning knobs.

\[Pause.\]

There are downsides too. Let me be honest about them, because this would not be a real lecture if I didn't.

Spin coating has edge effects of its own. The very outer rim of a spinning wafer is hard to coat uniformly, because fluid wants to fly off it. The very center is hard to coat uniformly, because that's where the fluid is being dispensed and the geometry is unstable. In practice, Ultima uses only the annular region between some inner radius and some outer radius — the doughnut of usable area — and accepts that the central and outer regions of the wafer are sacrificial. That costs you some surface area, but you still have plenty.

Spin coating also requires the substrate to be smooth and uniform. A flow cell can tolerate some surface roughness because the fluid is forced through the channels under pressure. A spin-coated film can de-wet — break up into puddles — if the surface chemistry isn't right. Ultima has had to invest a lot of effort in surface preparation to make sure the wafer accepts uniform films of every reagent the chemistry needs, across the temperature range the platform operates at. That's a real engineering cost, but it's a one-time-per-platform investment, not a recurring cost.

And spin coating in an open geometry — the wafer is sitting in open air, not inside a sealed channel — means you have to worry about evaporation, contamination from the environment, and aerosols escaping. Ultima encloses the whole spin chamber in a sealed environmental control system, with controlled temperature and humidity, exactly to manage these issues. So the open-wafer architecture is less "open" in practice than the geometry suggests; it's enclosed inside a tightly controlled chamber, which adds engineering complexity. But these are all solvable problems, and Ultima has solved them.

The net of all this is that **spin coating gives you faster reagent exchange, lower reagent use, better uniformity, and decoupled delivery-versus-reaction timing**, at the cost of some sacrificial surface area, some surface chemistry engineering, and some environmental control. The trade is favorable for the kind of high-throughput, cost-per-base optimization that Ultima is going after. It would be much less favorable for a low-throughput, high-flexibility platform — which is why nobody else has copied it.

---

## SEGMENT 5 — Single-end reads — the bet and what it sacrifices

Now we have to talk about one of the most consequential decisions Ultima made — and the one that genomicists, when they first hear about it, tend to react to most strongly. Ultima sequences only in one direction. They do not do paired-end reads.

Let me unpack what that means and why it matters.

In Illumina sequencing, when you load a DNA fragment onto the flow cell, you actually read it twice. Once from one end, generating one read; then the instrument flips the fragment chemically and reads it from the other end, generating a second read. The two reads from the same physical fragment — one from each end — are called a **read pair**. They share an identifier; downstream software knows they came from the same molecule, separated by some known insert distance. Paired-end sequencing is the dominant mode in Illumina genomics. Almost every published Illumina dataset uses it.

Why do people love paired-end reads? Three big reasons. First, **mapping accuracy**. When a read aligns ambiguously to a reference genome — for example, because the read fell in a repetitive region — its paired mate, sitting some known distance away, often resolves the ambiguity. The pair as a unit anchors much more confidently than either read alone. Second, **structural variant detection**. If a paired read has its two halves separated by a much larger or much smaller distance than expected, that's a signature of an insertion, deletion, or rearrangement in the sample relative to the reference. Most structural variant callers rely heavily on read-pair signatures. Third, **error correction and bridging**. If the insert is shorter than twice the read length, the two reads overlap in the middle, and any disagreement between them flags a sequencing error you can correct on the spot.

Ultima gives up all three. The UG100 reads each fragment from one end, period. One direction. No mate. No pair. **Single-end only.**

\[Pause.\]

The first thing you should ask is: why? What does Ultima gain from giving up paired-end reads?

The answer is throughput and cost. Paired-end sequencing on Illumina effectively doubles the cycle count per fragment — you read it once, then chemically flip it, then read it again. The flip step is itself a substantial chemistry — resynthesizing the second strand, removing the first read product, re-priming from the other end. It takes time, it takes reagents, it adds complexity to the chemistry, and it introduces failure modes. Ultima's calculus was: if we can deliver enough accuracy from single-end reads to support the applications we care about, then skipping the flip-and-re-read step gives us a substantial throughput and cost advantage. We finish the run faster, we use fewer reagents per fragment, the instrument architecture is simpler.

But that "if" is doing a lot of work. Whether single-end reads are good enough depends entirely on what you're trying to do.

Here is the framing I want you to internalize. **Paired-end reads are great for two things — de novo assembly, where you're reconstructing a genome you've never seen, and detection of large structural variants. Single-end reads are fine for one thing — resequencing against a known reference genome to call small variants like SNPs and short indels.** And Ultima's pitch is: who actually buys high-throughput sequencing today? Population genomics projects sequencing humans, where the human reference is well-known and the question is "which variants does this person have?" Resequencing, not de novo assembly. Variant calling, not structural rearrangement detection. For those applications — which constitute the bulk of the high-end sequencing market by volume — single-end reads, if the per-base accuracy is good enough, are sufficient.

\[Pause.\]

Let me put this in an analogy. **Illumina is selling you a camera that takes two pictures of every subject — one from the front, one from the back — so you can build a full 3D model. Ultima is selling you a camera that takes one picture of every subject, from the front only, and counting on the fact that you already have a detailed 3D model and you just want to see how today's subject differs from the model.** If you have the model — the reference genome — one good picture is enough. If you don't have the model, you really do need both views.

That bet looks great for biobank-scale human resequencing. It looks much worse for de novo sequencing of a new microbial genome, for structural variant studies in cancer, for haplotype phasing across long distances, for any work in repetitive or duplicated regions of the genome. Ultima is essentially conceding that whole portion of the market to Illumina and PacBio and Nanopore, and concentrating on the much larger but more uniform population-resequencing market.

There are also some specific genomics problems where the loss is real and worth naming. **Structural variant calling** — the detection of large deletions, duplications, inversions, and translocations — relies heavily on read-pair signatures, and Ultima can do much less of this than Illumina paired-end can. **Mappability in repetitive regions** is worse with single-end reads, which means parts of the genome that are full of repeats — like the centromeres and some segmental duplications — are harder to interrogate. **Detection of very low-frequency variants** is harder when you can't use read-pair overlap to correct sequencing errors; the noise floor sits higher.

Now, Ultima has counter-arguments to each of these. For structural variants, you can use long-read platforms like PacBio or Nanopore for the structural-variant arm of your study and use Ultima just for the SNP-calling arm — splitting the work across platforms. For mappability, longer single-end reads from Ultima — they target around three hundred bases, which is longer than typical Illumina single-end reads — partially compensate. For low-frequency variant detection, deeper coverage on a per-base basis, made affordable by the lower per-genome cost, recovers some sensitivity.

But the core point stands. **Single-end-only is a real limitation, accepted in exchange for cost and throughput, and only sensible if the application is mostly human resequencing where the reference covers the use case.** Ultima knows this. They're betting that the application space they care about is big enough that the trade is worth it. Whether that bet pays off is, as I said in Segment 1, still being settled in the market.

---

## SEGMENT 6 — The chemistry — mostly-unlabeled-with-one-labeled-probe approach

Now we get to the chemistry, which is — I think — the most interesting part of the whole platform, and also the hardest to explain quickly, so bear with me.

Recall how Illumina chemistry works. Every cycle, you flow in a mixture of four nucleotides — A, T, G, C — each one carrying a different fluorescent dye, and each one chemically blocked so the polymerase can only add one base before stalling. The polymerase adds one of the four to each growing strand. You photograph the surface to see which of four colors lit up at each cluster. You chemically remove the dyes and the blockers. Repeat. Four colors, four dyes per cycle, four reversible terminators. Every cycle requires all four labeled nucleotides, which are the most expensive component of the chemistry.

Now here is Ultima's move, and it is genuinely clever. Instead of running four labeled, blocked nucleotides per cycle, Ultima flows in just one nucleotide species per cycle — and that nucleotide is mostly _unlabeled_. Cheap, plain, natural-chemistry-grade A, T, G, or C. No fluorescent dye on most of the molecules. No reversible blocker. Just regular nucleotides. The polymerase pulls them in by ordinary base-pairing with the template, and crucially, if the template has a run of, say, three A's in a row, the polymerase adds three T's in a row in one shot — there's no terminator stopping after each base. This is sometimes called **flow sequencing** or **non-terminating sequencing**, and conceptually it's very close to the ion-detection chemistry pioneered by 454 pyrosequencing and Ion Torrent, but with optical detection rather than chemical or electrical.

\[Pause.\]

So you flow in unlabeled T's. The polymerase incorporates as many T's as the template demands in each cluster. Now: how do you read out _how many_ T's just got incorporated? Because if the template called for three T's, that cluster is now three bases longer than a cluster whose template only called for one T, and you need to know that.

Here's the trick. A small fraction of the nucleotides in each flow — typically a few percent — are labeled with a fluorescent dye. So when the polymerase incorporates T's, most of them are unlabeled, but every so often a labeled T sneaks in. The total amount of fluorescent signal at a cluster, after the flow, is proportional to how many T's got incorporated total. Three T's incorporated means roughly three times the fluorescent signal of one T. You read out the intensity, you divide by your calibration of "signal per incorporated base," and you get an integer estimate of how many T's the template called for in that position. Then you wash out the unincorporated nucleotides, and flow in the next species — say, A — and repeat. T, A, C, G, T, A, C, G — cycling through the four bases in a fixed order, reading out the homopolymer length each time.

So in one Ultima cycle, you don't add one base; you add however many consecutive bases of one species the template calls for, and you read out the count by intensity. **Mostly unlabeled nucleotides do the work. A small fraction of labeled nucleotides serve as a "tracer dye" that tells you how much got incorporated.** That's the chemistry.

\[Pause.\]

Let me explain why this is so much cheaper than four-color Illumina chemistry. Three reasons.

First, the labeled-nucleotide cost. Fluorescent dyes attached to nucleotides are expensive. Reversible terminators — the chemical blockers that stop the polymerase after each base — are even more expensive, and the synthesis chemistry is finicky. Illumina has to provide four fully-labeled, fully-blocked nucleotide species per cycle, all at high purity. Ultima provides one nucleotide species per cycle, and only a few percent of the molecules in that species are labeled. The rest are cheap, off-the-shelf, unmodified nucleotides — the kind of nucleotides you can buy by the kilogram for ordinary PCR reactions. Reagent cost per cycle drops by something like an order of magnitude.

Second, the chemistry is simpler. No reversible terminator means no cleavage step after each cycle. The chemistry just runs forward. That eliminates a whole class of failure modes — incomplete cleavage, residual dye, blocker remnants — that Illumina has to engineer around. It also makes each cycle faster, because you've removed a step.

Third, only one nucleotide species per cycle means you don't have to discriminate between four different fluorescent colors at each cluster. You only need one channel of detection — one dye, one laser wavelength, one filter. The optics get dramatically simpler. Single-color imaging is way faster than four-color imaging because you don't have to scan through four exposures and filter changes at each tile. Multiply that by the spin geometry and you get cycle times that are much, much shorter than anything Illumina can manage.

\[Pause.\]

Now, there's a price for all this elegance, and you should see it coming. **The signal-versus-count problem.** When you measure fluorescent intensity to infer "how many bases of this species just got incorporated," the precision of that inference depends on how cleanly the intensity scales with the count. One base versus two bases versus three bases is easy to tell apart. But what about five versus six? Or eight versus nine? The intensity differences get proportionally smaller as the count grows, and the noise floor — from imaging noise, from chemistry variability, from cluster brightness differences — stays the same. So beyond some homopolymer length, you start mis-calling. A run of seven A's might get called as six, or eight. **Homopolymer length errors are the characteristic error mode of flow-based sequencing chemistries.** Pyrosequencing had them. Ion Torrent had them. Ultima has them, though their chemistry is more refined.

The Ultima team has done a lot of work to push the homopolymer ceiling as high as possible — by careful calibration, by clever choice of dye chemistry, by extracting more information from the rise-and-fall shape of the intensity signal rather than just the peak value. But the fundamental limit is real. Ultima reads have more trouble in long homopolymer runs than Illumina reads do. And homopolymers are surprisingly common in the human genome, especially in certain functionally important regions. We'll come back to how this shows up in the data in Segment 11.

That's the chemistry. **One species at a time, mostly unlabeled, a small labeled fraction as tracer, intensity-based length readout, one color of fluorescence to image.** It is a fundamentally different approach to sequencing chemistry from what Illumina does, and it is one of the deepest engineering bets in the whole platform.

---

## SEGMENT 7 — Imaging — TDI cameras, exposure-per-revolution, throughput math

Let's do the imaging math, because this is where the throughput claims come from and you should be able to do this back-of-the-envelope yourself.

Start with the wafer. Two hundred millimeters across, with a usable annular region that's, say, one hundred and fifty millimeters outer radius minus thirty millimeters inner radius. That gives a usable area of about pi times the difference of squares — call it roughly seven hundred square centimeters of usable surface. On that surface, beads are packed at a density of, depending on the bead size and the optical resolution, somewhere between five and ten billion individually resolvable cluster positions per wafer. Different generations of the platform give different numbers; the original UG100 was around ten to twelve billion reads per run, and the newer UG200 hit twenty billion.

Now consider how you image that surface. The wafer spins. The TDI camera sits above it. As the wafer rotates, every point on its surface passes under the camera once per revolution. To image the whole annular region, you need the camera's field of view to cover the entire radial extent — which means either a wide camera, or a camera that scans radially in addition to the wafer spinning. Ultima uses the latter: two fixed cameras, each covering part of the radial range, with the wafer spinning underneath. Over the course of one revolution, the entire usable area gets imaged once.

\[Pause.\]

Now compare cycle times. A revolution takes, depending on the spin rate, a few seconds — let's say two to ten seconds for a full sweep depending on the configuration. Compare that to Illumina, where imaging a NovaSeq flow cell takes a substantial fraction of every fifteen-minute cycle, because the optics have to step tile by tile across the surface. On Ultima, the imaging itself is fast — a single revolution — and the chemistry steps are also fast because they're driven by spin coating rather than channel flow. The result is that one Ultima sequencing cycle, including reagent delivery, incorporation, and imaging, can run in well under a minute. Total run time for a few hundred cycles ends up around twenty hours, compared to a couple of days for an equivalent Illumina run.

Now let's do the throughput math. Twenty billion reads per run, each about three hundred bases long on average, gives roughly six terabases of raw data per run. After quality filtering — trimming low-quality ends, removing reads that failed various QC checks — you get something like two and a half to three terabases of usable sequence per wafer. A human genome at thirty-fold coverage requires about a hundred gigabases. So one wafer can do about thirty human genomes per run, and the platform runs about thirty to forty wafers per week. Roughly a thousand genomes a week per instrument, fifty thousand genomes a year per instrument, all running on a single shift. Run it twenty-four-seven and you can push it higher.

That is genuinely a lot of throughput for one machine. NovaSeq X tops out at roughly the same order of magnitude, and you have to run two flow cells in parallel to get there. So per-instrument throughput is comparable to a top-end Illumina, while the per-run economics are different.

\[Pause.\]

A subtle point about TDI imaging that's worth understanding. TDI cameras work by reading out one row of pixels at a time, but each pixel is read out multiple times as the object moves under it — typically a few hundred rows worth of integration time per pixel position. That integration gives you signal-to-noise much better than a single snapshot exposure would. So even though the wafer is spinning at meters per second under the camera, the effective exposure per cluster is long enough to detect even faint fluorescence cleanly.

This trick — high-speed continuous imaging with effectively long exposures — is exactly what semiconductor wafer inspection machines have been doing for thirty years. The TDI sensors, the timing electronics, the precision spindles that keep the wafer wobble-free at high speed: all of these are mature technologies in the chip industry. Ultima didn't have to invent them. They bought them, integrated them, and pointed them at DNA instead of silicon. That technology transfer is part of why a small startup could build a competitive imaging system without a billion-dollar R&D investment.

The lens-and-camera assembly on a UG100 is, in cost terms, expensive — high-quality industrial machine vision is not cheap — but it is far less expensive than the corresponding ultra-high-throughput optics on a NovaSeq, which Illumina has had to engineer in-house essentially from scratch. Different supply chain, different cost structure, different scaling characteristics. **Optics borrowed from the chip industry, applied to biology.** That's the throughput story.

---

## SEGMENT 8 — Cost-per-Gb breakdown — where the savings come from

Let's pull everything together and ask the question that matters most to the people who buy these instruments: where does the cost saving actually come from?

Ultima's pitch number, the one they put on banners at conferences and in press releases, is **one dollar per gigabase** of sequence data, which works out to roughly one hundred dollars for a thirty-fold human genome. Illumina's NovaSeq X, by comparison, comes in at roughly two dollars per gigabase, or two hundred dollars per genome at thirty-fold coverage. So Ultima is claiming about a two-fold cost advantage at the high end.

I want to break down where that two-fold actually comes from, because the answer is "a lot of small wins layered on top of each other," not "one big magic trick."

**Reagent cost.** This is the biggest single contributor. Recall from Segment 6 that Ultima uses mostly unlabeled nucleotides, with only a small fraction labeled, and only one species per cycle instead of four. The labeled-nucleotide bill drops by roughly an order of magnitude. The unlabeled nucleotides are essentially commodity chemicals. The reversible terminators are gone entirely, which removes a major synthesis cost. Net effect: reagent cost per cycle on Ultima is a small fraction of what it is on Illumina.

\[Pause.\]

**Consumable cost.** A silicon wafer is, surprisingly, cheap compared to a custom-fabricated Illumina flow cell. The chip industry produces hundreds of millions of bare silicon wafers a year, and the unit cost at volume is a few dollars per wafer. An Illumina flow cell, with its custom etched glass channels and proprietary surface chemistry, costs a lot more per unit. The bead coating on the Ultima wafer adds cost, but the substrate itself is, paradoxically, less expensive than a flow cell.

**Imaging time and machine throughput.** Faster cycles means more genomes per instrument per year, which means the fixed cost of buying and maintaining the instrument — the capital expense, the service contract, the floor space, the operator time — gets amortized across more samples. If your million-dollar machine can do fifty thousand genomes a year instead of twenty thousand, the capex contribution to per-genome cost drops by more than half.

**Labor and operations.** Faster runs, simpler chemistry, fewer manual touchpoints, more automation-friendly workflows. The amount of skilled human time required to process a sample through Ultima is, the company claims, lower than on Illumina, especially because the rapid isothermal amplification step on newer Ultima platforms eliminates a fiddly emulsion-PCR step that the original UG100 used.

\[Pause.\]

**Skip paired-end.** Reading each fragment once instead of twice cuts the per-fragment chemistry cost roughly in half, all else being equal. Combined with the simpler one-color chemistry, this is a multiplicative win.

**Smaller and cheaper optics.** As we discussed in Segment 7, the optical system is borrowed in large part from the semiconductor inspection industry, which has driven those optics costs down by decades of high-volume manufacturing. The optical bill of materials on a UG100 is probably lower than on an equivalent-throughput NovaSeq, though both are substantial.

Add all these up — reagents down by, say, five-fold; consumables down by a factor; capex amortized across higher throughput; labor down; paired-end skipped; optics cheaper — and you can plausibly believe a two-fold overall cost-per-genome advantage. None of the individual wins are huge. But because they compound multiplicatively across many line items, the net effect is dramatic.

Now, a couple of honest caveats. First, these are headline numbers that assume the instrument is running at full utilization, doing the kind of sample mix Ultima is best at. In practice, smaller customers running fewer samples won't hit these numbers. The economics only kick in at population scale. Second, the cost comparison depends on which Illumina configuration you compare to. NovaSeq X at full throughput is the right comparison; smaller Illuminas like the NextSeq are not, and Ultima is not really competing with them. Third, the operator skill required to keep an Ultima running at full efficiency is real; this is not a plug-and-play box.

\[Pause.\]

There's a deeper economic story here too, which I want to name explicitly. Illumina's business model has long depended on selling instruments at modest margins and capturing the lifetime value through consumables — selling the proprietary flow cells, reagents, and library prep kits at high margin to a captive customer base. That model is the reason Illumina has been so profitable. The reason it's also the reason Ultima can attack the market: if you can build a competitive instrument with consumables that are inherently cheaper to produce, you can undercut Illumina's pricing while still making healthy margins. Ultima is structurally a lower-cost-to-produce platform than Illumina, and that's a durable advantage if they can hold the technology lead.

The question, of course, is whether Illumina responds. They have. The NovaSeq X is itself a significant cost reduction over its predecessor. The 25B flow cell, the new chemistry, the streamlined workflow — Illumina is not standing still. The genomics industry has been in a price war for the last three years, and Ultima's existence is part of what's been forcing Illumina's hand. Whether Ultima can sustain a price advantage as Illumina pushes its own costs down is, again, an open question. But for now, the price gap is real, and it is the engine of Ultima's commercial pitch.

---

## SEGMENT 9 — Q score and accuracy — how Ultima reads compare to Illumina

We need to talk about quality, because cost-per-base only matters if the bases you're getting are accurate enough to use.

Quick refresher on Q scores. The quality of a sequencing base call is reported on a logarithmic scale called the **Phred quality score**, or Q score. A base called at Q20 has, by definition, a one-in-a-hundred chance of being wrong. Q30 means one in a thousand. Q40 means one in ten thousand. The cutoff that most genomics workflows consider "high quality" is Q30 or above. The fraction of bases in a run that hit at least Q30 is often called the **percent-Q30** metric, and it's a standard summary statistic.

Illumina NovaSeq X, in standard operation, delivers about 85 to 90 percent of bases at Q30 or above, depending on read length and library quality. The error rate of an Illumina base call is dominated by substitution errors — A called as G, or T called as C — and the errors are roughly randomly distributed, with some systematic biases around certain sequence contexts.

Ultima's UG100 delivers, according to their published numbers, about 85 percent of bases at Q30 in standard runs — comparable to Illumina, though slightly behind in some configurations. So at the surface level, the accuracy is in the same ballpark.

\[Pause.\]

But the error _structure_ is different, and this matters for downstream analysis.

Illumina errors are predominantly substitutions. Ultima errors, because of the flow-based chemistry we discussed in Segment 6, are predominantly **homopolymer length errors** — calling a run of seven A's as six or eight A's. These two error modes have very different consequences. Substitution errors look, to a variant caller, like potential SNPs that need to be discriminated from real variants by depth and quality. Homopolymer length errors look like indels — small insertions or deletions — and they're particularly damaging because indels are themselves the hardest class of real variant to call accurately. So an Ultima dataset will have a higher false-positive rate for short indels in or near homopolymer regions than an Illumina dataset of equivalent coverage.

This is a real, characteristic limitation, and the Ultima bioinformatics team has put substantial effort into compensating for it. They report what's called a **flow-space quality score**, which carries more information about the certainty of the homopolymer length call than a per-base Q score can. They've developed custom variant callers that account for the platform's specific error model. And the per-base Q30 numbers, when filtered properly, are competitive.

There's an interesting second-order effect, too. Because Ultima's chemistry is fundamentally different, the systematic errors are not correlated with Illumina's systematic errors. So in a project where you run a sample on both platforms, errors that show up on one don't show up on the other — they're orthogonal. That makes cross-platform validation very powerful: a variant called by both Ultima and Illumina is much more likely to be real than a variant called by two independent Illumina runs, because the two platforms can't both be wrong in the same systematic way. Some clinical labs use this as a quality strategy.

\[Pause.\]

A specific application where Ultima shines is in **single-nucleotide variant calling in non-repetitive, non-homopolymer regions**. For the bulk of the human genome — which is the vast majority of clinically relevant content — Ultima's SNP calls are competitive with Illumina's, and at deeper coverage may even exceed them, because the orthogonal error mode lets variant callers achieve very high specificity. The published accuracy figures for SNP calling on a high-quality Ultima run hit the **part-per-million range**, which is the relevant accuracy level for finding rare variants in large cohorts.

Where Ultima struggles is in **indel calling, especially in or near homopolymer regions, and in repetitive sequence**. These are exactly the cases where the platform's error model bites hardest. For applications that need clean indel calling — certain rare-disease workflows, certain tumor variant detection workflows — Illumina is still the safer bet. Ultima is honest about this and recommends that customers who need high-accuracy indel calling in difficult regions use a complementary platform for those specific cases.

So the summary: **comparable per-base accuracy to Illumina overall; orthogonal error structure; better SNP-calling in good regions, worse indel-calling in tough regions.** Use accordingly.

That's the platform end of the story. We've covered the architecture, the chemistry, the optics, the cost structure, and the quality. Now let's take a break.

\[BREAK\]

---

## SEGMENT 10 — The UG100 instrument — physical footprint, throughput per run

Welcome back. We've spent the first half of the lecture inside the engineering. Now let's pull back and look at the machine as a physical object in a lab, and at the practical workflows around it.

The UG100 is, by sequencer standards, a fairly normal-looking piece of capital equipment. It's roughly the size of a chest freezer — say, two meters wide, one meter deep, two meters tall — with a sealed front access door, internal robotics, and a touchscreen interface. It sits in a temperature-controlled lab, plugged into ordinary lab power and a chilled water supply for thermal management. It needs about as much floor space as a NovaSeq, and the operator workflow is broadly similar to other large sequencers.

Inside, the heart of the machine is the spin chamber — the sealed enclosure containing the wafer spindle, the spin coater, the dispensing arm, and the imaging head. Below that, racks of reagent reservoirs, a wafer handling robot that loads and unloads wafers from cassettes, and the fluidics that connect everything. On the side, a computing rack handling real-time image processing and base calling. The instrument generates a lot of data — terabytes per run — so the on-board compute and storage is substantial.

\[Pause.\]

A run starts with the operator loading prepared sequencing libraries into the input port. The library is a pool of indexed DNA fragments, prepared upstream using one of several supported library prep kits. On the original UG100, the library went through an **emulsion PCR** step — where each fragment is amplified inside its own water-in-oil droplet to produce a clonal cluster on a bead — and then the bead-bound clusters were loaded onto the wafer. The newer UG200 replaced emulsion PCR with **rapid isothermal amplification**, a simpler workflow that integrates more cleanly with standard lab automation. Both approaches end with the same result: a wafer surface densely populated with beads, each bead carrying a clonal cluster derived from one fragment.

Once the wafer is loaded, the instrument runs autonomously for the duration of the sequencing — roughly twenty hours for a standard run. During the run, the wafer spins continuously, reagents cycle through, and the cameras image. At the end, the wafer comes out, the base-called data flows to the on-board compute, and after some additional processing time, FASTQ files are available for downstream analysis.

A typical UG100 run delivers ten to twelve billion reads, at average read length around three hundred bases, for total yield of two and a half to three terabases of usable sequence. That's enough to do roughly thirty human genomes at thirty-fold coverage from a single run, or about a thousand small-genome bacterial samples, or about a hundred exomes — depending on what the customer is sequencing. Run-to-run cycle time is short enough that a well-run facility can do thirty to forty wafers per week per instrument.

\[Pause.\]

The total cost of ownership picture, briefly. The list price of a UG100 is around one million dollars, in the same ballpark as a NovaSeq X. Annual service contracts are typically around ten percent of the instrument price. Consumables — wafers, reagents, library prep kits — are the dominant operating cost over the instrument's lifetime, as is universal in this industry. At full utilization, the per-genome cost on a UG100, including everything, lands at the hundred-dollar mark Ultima advertises. At lower utilization, the per-genome cost rises as fixed costs get amortized over fewer samples.

The instrument is, in practice, mostly sold to a small number of large customers — pharma genomics teams, large biobanks, contract sequencing providers — who can saturate it. Ultima has also created a category they call **Certified Service Providers**, which is essentially a network of partner labs running UG100s on behalf of smaller customers who can't justify owning one. This service-provider model is a way to bring the per-genome cost advantage to customers below the volume threshold for instrument ownership.

That's the box. Now let's talk about what comes out of it.

---

## SEGMENT 11 — Bioinformatics — Ultima's FASTQ flavor, alignment quirks, variant calling

Here's a fact that doesn't always get communicated when people pitch Ultima: integrating Ultima data into an existing bioinformatics pipeline is real work. It's not just "swap the FASTQ files and rerun your existing analysis." There are subtleties in the data format, the quality scores, and the error model that downstream tools need to be aware of, and getting clean variant calls from Ultima data requires either Ultima-specific tools or careful adjustment of standard tools.

Let me walk through the main issues.

First, the **FASTQ format itself is slightly different**. Standard Illumina FASTQ files report a per-base sequence and a per-base quality score, both encoded in ASCII. Ultima's FASTQ files follow the same overall format, but the quality scores encode somewhat different information — specifically, they capture the uncertainty in flow-based homopolymer length calls, which doesn't map cleanly onto the standard substitution-error-based Q score model. Some downstream tools assume Illumina-style Q scores and apply filters or weights that don't quite fit Ultima data. Ultima provides recalibration scripts and recommendations for adjusting these tools.

Second, the **read length distribution** is broader than typical Illumina. Illumina runs produce reads of fixed length — every read is exactly 150 bases, or exactly 250 bases, whatever the run was configured for. Ultima reads vary in length because the homopolymer-length-readout chemistry means a given number of cycles produces a variable number of bases, depending on the sequence. The average read is around three hundred bases after quality filtering, but individual reads can range from much shorter to substantially longer. Most aligners handle variable-length reads fine, but some downstream tools were built assuming fixed lengths and may need adjustment.

\[Pause.\]

Third, **alignment**. Ultima reads, being single-end and having homopolymer-biased errors, behave somewhat differently than Illumina reads under standard aligners like BWA-MEM. They map fine in most regions, but in repetitive regions or homopolymer-rich sequence, the alignment quality degrades. Ultima provides their own **UA aligner** that's tuned for the platform's error model and read characteristics, and they recommend using it for production work. Standard tools still work, just less optimally.

Fourth, **variant calling**. This is where the platform-specificity matters most. Standard variant callers like GATK and DeepVariant have been trained on Illumina data and have built-in models of Illumina's error structure. Apply them naively to Ultima data and you'll get higher false-positive indel rates, especially in homopolymer regions, and you'll potentially miss real variants because the quality filtering doesn't fit the data. Ultima's approach has been twofold: provide Ultima-tuned versions of the major callers, and partner with the developers of tools like DeepVariant to add native support for flow-based data. Recent versions of DeepVariant have an Ultima-specific model that handles the platform's quirks correctly, and variant calling accuracy with the tuned tools is genuinely competitive with Illumina.

The point of all this is that **Ultima data is not a drop-in replacement for Illumina data in an existing pipeline**. Switching to Ultima requires adjusting your bioinformatics, validating your variant calls against truth sets, retuning your quality filters, and potentially adopting Ultima-specific tooling. For large customers who can invest in that engineering work, it's tractable. For smaller customers without dedicated bioinformatics teams, it's a real friction.

\[Pause.\]

There's an analogy I find useful here. Switching from Illumina to Ultima for genomics is a bit like switching from one major film camera system to another for cinematography. The cameras both make movies. But the lenses, the workflows, the color science, the post-production pipelines — all of these have to be adjusted. A studio that's invested heavily in one system is reluctant to switch, even if the new system is technically better, because the switching cost is non-trivial. **Ultima is fighting not just on technology, but against the inertia of the entire installed Illumina ecosystem.** That inertia is real, and it's part of why Ultima has focused so heavily on large institutional customers who can absorb the integration cost in exchange for the per-genome savings.

The Ultima bioinformatics team has, in fairness, done a lot to lower this friction. There are Docker containers, AWS reference pipelines, validated workflows for common applications like germline variant calling and cancer panels. The story is getting easier. But the friction is real, and it's a tax on adoption that the company is still paying down.

---

## SEGMENT 12 — Population genomics use cases — biobanks, All of Us, ancestry-specific cohorts

Now let's look at who's actually using Ultima, and what for, because the customer profile tells you a lot about where the platform really shines.

The bullseye customer for Ultima is a **large-scale human population genomics program**. These projects share a set of characteristics: they're sequencing tens of thousands to millions of human samples; they're doing germline whole-genome sequencing or large exomes; they're variant-calling against the standard human reference; the per-sample cost is a dominant line item in the budget; and they have the bioinformatics sophistication to handle Ultima-specific data.

The marquee programs that fit this profile include the UK Biobank, which has been sequencing its half-million participants over the last several years; the NIH's All of Us program, aiming at a million Americans across diverse ancestries; the Saudi Genome Program; various national-scale biobanks in Asia and Europe; pharmaceutical company genomics initiatives like Regeneron's collaborations with academic biobanks; and a wave of ancestry-specific cohorts focused on populations historically underrepresented in genomic studies — African ancestry cohorts, Latinx cohorts, indigenous cohorts.

\[Pause.\]

For these programs, the value proposition of Ultima is simple math. **A two-fold cost reduction across a million genomes is a hundred million dollars saved.** Or, equivalently, twice as many samples sequenced for the same budget. At that scale, the engineering quirks of the platform — the homopolymer error mode, the single-end-only sequencing, the bioinformatics retuning — are absorbed into the operating costs of a project that's already so large that integrating a new platform is a manageable line item.

A specific example. Regeneron Genetics Center, the pharma genomics arm of Regeneron, has been one of the largest exome sequencing operations on Earth for the better part of a decade. They've sequenced hundreds of thousands of exomes from collaborator biobanks, using primarily Illumina. Adopting Ultima for some portion of their pipeline is, for them, a serious cost-savings opportunity, and they're one of the early adopters Ultima has cited publicly. The University of Minnesota Genomics Center, the Broad Institute, the Wellcome Sanger Institute — these are the kinds of organizations that have brought UG100s into their facilities, often alongside their existing NovaSeq fleets, to handle the highest-volume work where cost dominates.

A second category of customer is the **contract sequencing provider** — companies like Psomagen, GENEWIZ, Macrogen, and Ultima's own service-provider network. These businesses sell sequencing services to other companies and academic labs, and they compete primarily on price and turnaround time. For them, having a UG100 in their fleet means they can offer the cheapest tier of human genome sequencing on the market, which lets them win business at the high-volume end.

A third, emerging category is **single-cell and spatial omics** at very large scale. Single-cell RNA sequencing, when scaled to millions of cells, generates an enormous volume of short-read data that fits the Ultima profile well. The Arc Institute's virtual cell atlas project, announced in 2025, is using Ultima as part of its sequencing infrastructure precisely because the per-cell economics matter at the scale they're operating at. This is a domain where, ironically, the trade-offs of Ultima — short reads, single-end, homopolymer error mode — matter less because the analysis is fundamentally about counting, not about reconstructing full-length transcripts.

\[Pause.\]

What's notably absent from the Ultima customer base is the **long tail of small academic labs** that buy individual sequencing runs for their own experiments. These customers, who are the bread and butter of Illumina's small and mid-range business, don't have the volume to make Ultima's economics work, and they don't have the bioinformatics infrastructure to absorb the integration cost. For them, Illumina remains the default. Ultima isn't really competing for that market; they're competing for the top end where volume dominates.

There's a strategic point here. **Ultima is following a classic disruption playbook — establish a foothold at the high-volume end of the market, where the cost-per-base economics give them a structural advantage, and build out from there as the platform matures.** Whether they can expand downward into the mid-range and small-lab markets over time depends on the technology getting easier to use, the bioinformatics getting more transparent, and the price of consumables coming down with volume. All of these are plausible trajectories. None are guaranteed.

---

## SEGMENT 13 — Where single-end falls short — structural variants, low-frequency variants

We've covered, in the abstract, what Ultima gives up by going single-end-only. Now let's look at specific scientific applications where the trade-off bites hardest, because understanding the failure modes is part of understanding the platform.

**Structural variant calling.** The detection of large-scale rearrangements in a genome — deletions, duplications, inversions, translocations — is fundamentally harder with single-end reads. The canonical signals for these variants are read-pair signatures: pairs of reads where the two halves land at unexpected distances or in unexpected orientations relative to each other. Without pairs, you have to rely on split reads — reads that themselves span a breakpoint and get clipped during alignment — and on read-depth signatures across larger windows. Both of these methods work, but they're less sensitive than paired-end methods. For a study focused on structural variation — for example, characterizing genomic instability in cancer, or studying chromosomal rearrangements in developmental disorders — Ultima alone is not the right tool. The pragmatic answer is to use a long-read platform like PacBio or Nanopore for the structural-variant component and use Ultima for the bulk SNP-calling work.

**Low-frequency variant detection.** When you're looking for a variant that's present at very low allele frequency — say, a circulating tumor DNA fragment in a blood sample at 0.1% frequency, or a rare mosaic variant in a single-cell experiment — the noise floor of the sequencing platform sets a hard limit on what you can detect. Paired-end reads, especially when the insert is short enough for the pairs to overlap, let you do consensus-correction on the overlapping region, suppressing sequencing errors that aren't consistent between the two pair members. Without that, you have to rely on UMIs — unique molecular identifiers, which we won't get into in detail today, but they're a barcoding strategy that lets you collapse PCR duplicates and correct errors at the cost of more complex library prep. Ultima supports UMIs, but the workflow is more complex than on a paired-end Illumina platform.

\[Pause.\]

**Haplotype phasing.** Knowing which variants on a chromosome belong to the same physical copy of the chromosome — that is, which variants are on the maternal copy versus the paternal copy — is critical for some genetics applications, including pharmacogenomics and certain rare-disease workflows. Paired-end reads, especially with longer insert sizes, can directly phase variants that fall within the insert distance. Single-end reads can only phase variants that fall within a single read. For a three-hundred-base Ultima read, that's a much smaller window than for an Illumina paired-end with a five-hundred-base insert. Phasing on Ultima is shorter-range. Again, the answer is to use a complementary long-read platform for phasing-heavy work.

**Repetitive sequence and segmental duplications.** Roughly half the human genome is composed of repetitive sequences — transposable elements, microsatellites, segmental duplications, and so on. Mapping short reads into these regions is hard, because a read might be consistent with many possible locations. Paired-end reads use the mate position as an anchor to disambiguate. Single-end reads don't have that crutch. Longer single-end reads, like Ultima's three-hundred-base reads, partially compensate, but for the most highly repetitive regions, paired-end is still the better tool.

**Telomeres and centromeres.** Both of these are highly repetitive and have specific clinical and biological interest. Ultima reads, like all short reads, struggle here. Long-read platforms are the natural fit for telomere and centromere work, and Ultima is not trying to compete in that space.

\[Pause.\]

What I want you to take from this segment is the texture of how a real research lab would use Ultima. **It is not "buy a UG100 and throw out your NovaSeq."** It's "use Ultima for the dominant cost-driving workload — population resequencing for SNP discovery — and use other platforms for the specialized work that Ultima can't do well." In practice, most large genomics centers run multi-platform shops, with Illumina, Ultima, PacBio, and Nanopore each handling the workloads they're best at. Ultima's pitch is not to replace everything else; it's to take over the highest-volume, lowest-margin segment of the sequencing market and let other platforms specialize.

That's a coherent strategy. Whether it works depends on whether the population-resequencing market is really as large and as price-sensitive as Ultima is betting it is. The early evidence — large biobanks signing on, pharma adoption, the partnership with the Arc Institute — suggests the bet is at least directionally correct. The question is the magnitude.

---

## SEGMENT 14 — Almogy lab paper (2022) — the public proof-of-concept

The single most important public document about Ultima Genomics is a paper that appeared in Nature Biotechnology in November 2022, authored by Gilad Almogy and a long list of Ultima employees, titled — and I'll paraphrase — "Cost-efficient whole-genome sequencing using a spinning wafer." This paper was the company's public coming-out: the first detailed technical description of the platform, the first peer-reviewed performance numbers, and the first apples-to-apples comparison to Illumina on standard genomics benchmarks. If you want to actually understand Ultima at the level of a working scientist, this is the paper to read.

Let me walk you through what the paper established.

First, it described the architecture in detail — the spinning silicon wafer, the centrifugal reagent distribution, the TDI optics, the bead-based clustering, the flow-based chemistry. Up until that paper, much of this had been described in patents and conference presentations, but never in a single peer-reviewed source. The paper effectively defined the platform for the genomics community.

Second, it presented performance data on standard benchmarks. The team sequenced a well-characterized human sample — NA12878, the "gold standard" reference sample that every sequencing platform gets benchmarked on — to thirty-fold coverage, and reported variant-calling accuracy against the Genome in a Bottle truth set. The accuracy numbers were genuinely competitive with Illumina, particularly for SNP calling outside of homopolymer regions, and the error mode was clearly different from Illumina's, just as I described in Segment 9.

\[Pause.\]

Third, the paper presented the cost analysis. The team broke down the per-genome cost on the platform, line by line, and showed the path to the hundred-dollar figure. This was the first time anyone had laid out, in print, exactly how a sub-Illumina cost structure was achievable. The economics weren't speculative; they were demonstrated.

Fourth, the paper discussed limitations honestly. The homopolymer error mode, the single-end-only architecture, the need for platform-specific bioinformatics — all of these were acknowledged, with quantitative analysis of their impact. This kind of forthrightness in a launch paper is unusual and earned the company some real respect in the technical community.

There's a meta-point here about how a serious genomics platform gets credibility. **Press releases don't establish credibility. Conference talks help. But the gold standard is a peer-reviewed paper with reproducible benchmarks, ideally in a journal that has a reputation for rigorous review.** The Nature Biotechnology paper was that document for Ultima. It transformed the company, in the eyes of the field, from a well-funded stealth startup with bold claims to a real platform with measurable performance.

The paper is also notable for what it did not claim. It did not claim to be better than Illumina on every dimension. It did not claim that single-end reads were as good as paired-end. It did not claim that the platform was a drop-in replacement for any existing workflow. The pitch was specifically: for the population-resequencing application, at scale, Ultima provides genuinely competitive accuracy at a significantly lower cost. That focused pitch, backed by the data in the paper, is what landed.

\[Pause.\]

Following the 2022 paper, there's been a steady drumbeat of follow-up publications. Application papers from early-access customers using Ultima for specific projects. Benchmarking studies from independent labs. Methods papers from the bioinformatics community adapting tools for Ultima data. The literature around the platform has grown substantially over the last three years, and the accumulated evidence is that the platform does what it claims to do, with the caveats acknowledged.

For an undergraduate getting their first deep look at Ultima, I'd recommend reading the 2022 Almogy paper as your starting point. It's accessible, well-illustrated, and lays out the platform in a way that the company's own marketing materials don't quite match for technical depth. Pair it with a few of the follow-up application papers and you'll have a real working knowledge of what Ultima can and can't do.

---

## SEGMENT 15 — Commercial trajectory — funding, partnerships, customer wins

Let's talk about the business side, because the technology only matters if the company survives long enough to deploy it at scale.

Ultima's funding history is striking. The company raised quietly through 2016 to 2022, accumulating something like six hundred million dollars across multiple rounds, mostly from prominent Silicon Valley venture firms — Andreessen Horowitz, Khosla Ventures, Lightspeed, Playground Global, D1 Capital, Founders Fund, General Atlantic — plus some strategic investment from Israeli sources reflecting the company's significant R&D presence there. The May 2022 announcement valued the company at around eight billion dollars, which made it one of the most valuable private genomics companies in the world.

That kind of funding level reflects a particular thesis from the investor side. **Sequencing is one of the few platform technologies in biotech where a winner can plausibly capture the entire market for decades.** Illumina has captured that position for fifteen years. The investors funding Ultima are betting that the next generation of sequencing technology will create an opening for a new winner, and that Ultima — with its radically different architecture and structural cost advantage — has a real chance of being that winner. The size of the prize, if the bet pays off, justifies the size of the bet.

\[Pause.\]

The commercial deployment has unfolded gradually. Early-access programs in 2022 and 2023 placed instruments at a small number of premier genomics centers — the Broad Institute, Stanford, the University of Minnesota Genomics Center, Sanger in the UK, and several large pharma genomics teams. These early-access sites generated the application data and validation results that supported broader rollout.

In 2024, the platform went to broader commercial availability with the official launch of the UG100. Customer wins from that period included additional academic centers, contract sequencing providers, and biotech companies focused on large-cohort genomics. In 2025, the UG200 launched with roughly double the throughput and several technology improvements, including the isothermal amplification I mentioned earlier. The partnership with the Arc Institute for the virtual cell atlas project, announced in 2025, was a high-profile validation of the platform for large-scale single-cell work.

In terms of installed base, Ultima is — at the time of this lecture — measured in the dozens of instruments, not the thousands that Illumina has deployed. That's a starting position, not a finishing position. The question for the company is whether they can grow that installed base into the hundreds and then the thousands over the next five to ten years, in the face of aggressive responses from Illumina and from other challengers.

\[Pause.\]

There are some headwinds. The integration cost — bioinformatics retuning, workflow adaptation, scientific validation — is a real friction that has slowed adoption beyond the early-access tier. Illumina has responded to competitive pressure with its own cost reductions on the NovaSeq X, which has narrowed the price gap somewhat. Other challengers in the market, which we'll get to in Segment 17, are competing for the same dollars Ultima is going after. And the overall market for high-end sequencing, while growing, is not infinite; not every biobank will buy a UG100.

There are also tailwinds. The general trend in genomics is toward larger and larger cohorts, where cost-per-genome dominates. The shift toward population health and precision medicine in major health systems is creating institutional buyers who weren't significant customers a decade ago. The Arc Institute deal, and similar deals with other large research initiatives, validate the platform for a kind of customer that Illumina has historically dominated.

The honest assessment, I think, is that Ultima has built a real platform that has a real chance at a meaningful slice of the high-end sequencing market. They are not going to displace Illumina overall. They might capture twenty, thirty, even fifty percent of the population-genomics segment over the next decade, if execution holds and the technology continues to mature. That would be a major commercial success and a real validation of the founding bet. Whether they get there is, again, the open question that this lecture cannot answer.

---

## SEGMENT 16 — Ultima vs Illumina NovaSeq X — head-to-head at the high end

Let's do the head-to-head with the dominant incumbent, because this is the comparison that matters most for any prospective customer.

The Illumina NovaSeq X is the flagship of the Illumina lineup as of 2024-2025. It runs four-color reversible terminator chemistry, on a glass flow cell with billions of clusters generated by bridge amplification, with paired-end reads and tile-by-tile imaging. List price is in the neighborhood of one million dollars per instrument. Maximum throughput is around eight terabases per dual-flow-cell run, taking roughly forty-eight hours. Per-genome cost at full utilization lands around two hundred dollars. Read length up to 150 paired-end, total per-fragment 300 bases. Accuracy: 85-90% bases at Q30 or above, predominantly substitution errors.

The Ultima UG100, for direct comparison: spinning silicon wafer, flow-based one-color chemistry, single-end reads, continuous TDI imaging. List price comparable, around one million. Throughput around two and a half to three terabases per twenty-hour run from a single wafer. Per-genome cost at full utilization around one hundred dollars. Read length around three hundred bases single-end. Accuracy: around 85% bases at Q30, predominantly homopolymer-length errors.

\[Pause.\]

So on the surface, the two platforms are in the same ballpark for capital cost, instrument throughput, and accuracy. The differentiators are:

**Cost per genome:** Ultima wins by roughly two-fold at full utilization. This is the headline advantage.

**Read architecture:** Illumina wins on paired-end versus single-end. For applications requiring structural variant calling, haplotype phasing, or detection of low-frequency variants with consensus correction, Illumina's paired-end is meaningfully better.

**Error model:** Different but comparable in magnitude. Illumina is better for indel calling in homopolymer regions; Ultima is competitive or better for SNP calling in standard regions, with the bonus of orthogonal errors when cross-validating against Illumina data.

**Bioinformatics maturity:** Illumina wins decisively. The Illumina ecosystem is fifteen years old, with thousands of tools, pipelines, and trained bioinformaticians. Ultima is younger and requires more integration work.

**Run time:** Ultima wins, with twenty-hour runs versus forty-eight-hour Illumina runs. For high-volume operations, faster turnaround means more throughput per year from the same capital.

**Reagent ecosystem:** Illumina wins on breadth. There's a vast catalog of Illumina-compatible library prep kits for every application — exome capture, methylation, single-cell, targeted panels, the works. Ultima's kit ecosystem is narrower, though growing.

\[Pause.\]

The way most large customers seem to be resolving this comparison is to **run both platforms in their facility**, allocating workloads based on fit. Population-scale germline genomes go to Ultima; complex cancer panels with structural-variant detection go to Illumina; methylation goes to Illumina; single-cell at scale increasingly goes to Ultima; rare-disease workflows requiring clean indel calling go to Illumina; routine exome sequencing splits based on volume.

That dual-platform pattern is a healthy outcome for both companies in the short term, and it's a reasonable equilibrium. The longer-term question is whether Ultima can broaden its application coverage enough to capture share that's currently Illumina-exclusive, and whether Illumina can continue to drive down its own costs to neutralize Ultima's pricing advantage.

For an undergraduate trying to assess the head-to-head: it's not Ultima beats Illumina or Illumina beats Ultima. It's Ultima has a cost advantage in a specific segment, Illumina has a maturity and breadth advantage everywhere, and the two are likely to coexist for some years, with the balance gradually shifting as the technology and the markets evolve.

---

## SEGMENT 17 — Ultima vs Element Aviti and MGI DNBSEQ — the broader challenger landscape

Ultima is not the only company trying to break Illumina's grip on sequencing. There's a small but interesting group of challengers, each with a different technical bet, and it's worth situating Ultima in that landscape.

**Element Biosciences** makes the Aviti platform. Founded in 2017 by ex-Illumina engineers, including the company's former director of sequencing chemistry. Aviti uses an Illumina-like architecture — flow cell, polonies for clustering, fluorescent detection — but with a novel chemistry called **avidity sequencing**, where the polymerase binding step and the fluorescent detection step are decoupled. The pitch is comparable accuracy to Illumina at lower cost, in a smaller benchtop form factor aimed at the mid-range market that NextSeq has dominated. Element is going after the lab-scale and core-facility market, not the high-end biobank market Ultima is targeting. So they're competing for different dollars, broadly speaking, though they overlap somewhat.

**MGI**, the genomics arm of BGI, sells the DNBSEQ family of platforms — including the DNBSEQ-T7 and the larger T20, T25 series. Their chemistry uses **DNA nanoballs** — small concatemers of DNA generated by rolling-circle amplification — instead of bridge amplification clusters, on patterned arrays similar to Illumina's. The MGI platforms have been deployed at very large scale in China and increasingly in international markets, and their per-genome cost is competitive with Illumina, sometimes lower. MGI is the most direct global competitor to Illumina by volume after Illumina itself, particularly outside the United States, where regulatory and IP issues have historically limited their US presence. For a population-genomics customer outside the US, MGI is often a more obvious alternative to Illumina than Ultima.

\[Pause.\]

**PacBio and Oxford Nanopore** are the long-read platforms, which we've mentioned several times. They occupy a different part of the market — sequencing applications where long reads matter more than cost per base. They're complementary to Ultima, not direct competitors. Most large genomics centers run some combination of short-read and long-read platforms.

**Singular Genomics, Roche, Quantum-Si**, and a few smaller players have all attempted to enter the market with various technical bets. Some have launched products; some have struggled to gain traction.

So the competitive landscape, simplified: **Illumina dominates. MGI is the largest direct competitor, especially internationally. Ultima is the highest-throughput, lowest-cost challenger aimed specifically at the population-genomics segment. Element targets the mid-range. PacBio and Nanopore own long-read.** Each challenger is making a different bet on which axis of the technology to optimize, and which customer segment to attack first.

\[Pause.\]

How does Ultima compare to its closest peers — MGI and Element?

Versus MGI: Ultima has a structurally different architecture, with the spinning wafer giving more imaging area per instrument. MGI has the advantage of being further along the commercial deployment curve, with thousands of instruments installed globally. The per-genome cost is similar, possibly with Ultima edging ahead at the very highest end. For a US customer, the relevant comparison is mostly Ultima versus Illumina; MGI is less commonly considered. For an international customer, all three may be in play.

Versus Element: Ultima is going after a fundamentally different market segment. Element is competing for the mid-range market that Illumina's NextSeq dominates; Ultima is competing for the high end that NovaSeq dominates. The customer bases overlap somewhat — a large lab might buy both a UG100 for high-volume work and an Aviti for medium-volume work — but they're not directly fighting for the same purchase orders.

So **Ultima's competitive position is unique**: it's the only challenger specifically targeting the ultra-high-throughput population-genomics market with a fundamentally different architecture. That positioning is both a strength — they have a defensible niche — and a vulnerability, since their addressable market is narrower than a more generalist challenger's would be.

---

## SEGMENT 18 — The future — Cloudbreak-equivalent next-gen, paired-end coming back?

Let's close by looking forward. What does the next five years of Ultima look like, and what are the open questions?

The first thing to track is the **UG200 and beyond**. The UG200 launched in 2025 with roughly double the throughput of the UG100, in a smaller footprint, with isothermal amplification replacing emulsion PCR. The UG200 Ultra adds dual wafers per instrument. The trajectory of the platform is clear: more reads per run, faster runs, simpler workflows, lower per-genome cost. The roadmap that's been hinted at publicly suggests further generations pushing the per-genome cost below fifty dollars over the next several years, at which point the economics start to enable things that aren't currently feasible at all — for example, routine whole-genome sequencing as a primary-care medical test.

The second thing to watch is whether **paired-end sequencing comes back to Ultima**. The single-end-only architecture is, as we've discussed, a real limitation for some applications. There's no fundamental reason a spinning-wafer architecture can't support paired-end reads; the chemistry would just need to add a flip-and-re-prime step analogous to Illumina's. Whether Ultima will add this capability, and at what point in their roadmap, is an open question. If they do, the application breadth of the platform expands significantly. If they don't, they remain specialized for population-resequencing.

\[Pause.\]

The third thing to watch is **bioinformatics maturity**. The friction of integrating Ultima data into existing pipelines has been a real drag on adoption. As more tools natively support Ultima data, as more bioinformaticians have hands-on experience, as the Ultima-specific best practices become standardized, the integration cost drops. This is a maturation curve that takes years, but it's making progress, and the trajectory matters.

The fourth thing is **the Illumina response**. Illumina is not standing still. The NovaSeq X was already a significant cost reduction; the next generation of Illumina instruments — sometimes referred to in industry chatter under codenames like Cloudbreak or other internal designations — is widely expected to push costs lower still. If Illumina can match Ultima's cost per genome, the competitive landscape shifts dramatically. If Ultima can stay ahead on cost, they keep their structural advantage.

The fifth thing is **new applications**. Ultra-low-cost sequencing enables science that wasn't possible at higher costs. Population-scale longitudinal sampling. Single-cell at scales of tens of millions of cells. Routine clinical whole-genome sequencing. Environmental DNA at global scale. Every drop in per-sample cost opens up new questions you can affordably ask. Ultima's bet is that as the cost falls further, the volume of sequencing demanded will grow, and they'll capture a disproportionate share of that growth because their cost structure is designed for it.

\[Pause.\]

The sixth thing — and I want to end on this because it's the meta-question — is **whether the sequencing industry can sustain multiple major platforms long-term**. The economics of biotech instrumentation favor monopolies; once one platform achieves dominance, the network effects of ecosystem, expertise, and consumable supply chains tend to reinforce that dominance. Illumina has held that position for fifteen years. The question is whether the disruption Ultima represents is large enough, and Ultima is execution-capable enough, to break that monopoly and create a genuine duopoly or oligopoly in sequencing. Or whether the gravity of incumbency pulls everything back, and Ultima becomes a specialized niche player rather than a true second pole.

Genuinely, I do not know the answer. But I think the question is one of the most consequential open questions in genomics infrastructure for the next decade. The cost of sequencing affects everything downstream — what science gets done, what clinical applications become feasible, how broadly the benefits of genomic medicine get distributed. A more competitive sequencing market is, I think, a good thing for science and for medicine. Ultima's existence has already had a positive effect, in that it has forced Illumina to drop prices and improve. Whether Ultima itself becomes a long-term major player, or whether it becomes the company that prompted the next generation of Illumina improvements before being acquired or marginalized, is the storyline to watch.

\[Pause.\]

That brings us to the end. Let me return, briefly, to the framing I gave at the start. The three things I asked you to be able to do, walking out of here.

One: sketch the spinning-wafer architecture on a whiteboard. You can now do that. Silicon wafer, two hundred millimeters across, spinning under fixed TDI cameras, with reagents dripped at the center and flung outward by centrifugal force. Beads anchored to the surface, each carrying a clonal cluster of DNA. The whole thing borrowed wholesale from semiconductor wafer inspection.

Two: explain the mostly-unlabeled-with-one-labeled-probe chemistry. One nucleotide species per cycle, mostly unlabeled, a small fraction labeled as tracer dye, intensity-based readout of how many bases of that species the template called for at each position. Cheaper per cycle, faster per cycle, with the trade-off being homopolymer-length errors as the characteristic failure mode.

Three: read a population-genomics paper and have intuition for what Ultima data looks like and where it shines. Single-end reads around three hundred bases, competitive SNP-calling accuracy, weaker indel calling in homopolymer regions, no paired-end information for structural variants, roughly half the per-genome cost of Illumina at full utilization, integrated into multi-platform genomics workflows alongside Illumina and long-read platforms.

That's the platform. Some of the most interesting engineering in genomics, applied to a specific high-value problem, with real strengths and real limitations, in the hands of a company that may or may not capture the future of population sequencing. Worth watching.

Thanks for your attention. The appendix has additional references and timeline notes if you want to go deeper.

---

## APPENDIX

**Key sources.** The single most important technical document on Ultima is the Almogy et al. 2022 paper in Nature Biotechnology, "Cost-efficient whole-genome sequencing using a spinning wafer." For company background and commercial trajectory, see the Wikipedia entry on Ultima Genomics, the company's own website at ultimagenomics.com, and contemporaneous coverage in Bio-IT World, GEN (Genetic Engineering and Biotechnology News), and TechCrunch from 2022 onward.

**Timeline of key dates.**

- 2016 — Ultima Genomics founded by Gilad Almogy in Fremont, California.
- 2016-2022 — Stealth development, multiple private funding rounds.
- May 2022 — Public emergence; $600M funding announced; debut at AGBT conference.
- November 2022 — Nature Biotechnology paper published.
- 2023 — Early-access program with selected genomics centers.
- 2024 — UG100 broad commercial launch; $100 genome claim formalized.
- 2025 — UG200 launch with doubled throughput; Arc Institute partnership.

**Key technical specifications (UG100, as of 2024).**

- Substrate: 200mm silicon wafer.
- Architecture: spinning wafer with centrifugal reagent distribution; fixed TDI cameras.
- Chemistry: flow-based, one nucleotide species per cycle, mostly unlabeled with small labeled tracer fraction.
- Reads: single-end, average ~300 bases after filtering.
- Throughput: 10-12 billion reads per run; 2.5-3.0 Tb usable.
- Run time: ~20 hours.
- Accuracy: ~85% bases at Q30.
- Cost: ~$1/Gb, ~$100 per 30x human genome at full utilization.
- List price: ~$1M per instrument.

**Comparison snapshot.**

| Platform | Architecture | Reads | Throughput/run | Cost/genome |
|---|---|---|---|---|
| Illumina NovaSeq X | Glass flow cell, 4-color RT | Paired-end | ~8 Tb | ~$200 |
| Ultima UG100 | Spinning Si wafer, flow chem | Single-end | ~3 Tb | ~$100 |
| MGI DNBSEQ-T7 | DNB on patterned array | Paired-end | ~6 Tb | ~$150 |
| Element Aviti | Avidity chemistry | Paired-end | ~1 Tb | mid-range |

**Glossary.**

- **TDI camera** — time-delay-and-integration camera, designed for high-SNR imaging of moving objects.
- **Spin coating** — distributing fluid across a surface by spinning, producing thin uniform films.
- **Flow-based sequencing** — sequencing by adding one nucleotide species at a time and inferring homopolymer length from signal magnitude.
- **Single-end vs paired-end** — reading each fragment from one end (single-end) or both ends (paired-end).
- **Q score** — log-scale base-call quality; Q30 ~ 1-in-1000 error rate.
- **Homopolymer error** — mis-calling the length of a run of identical bases; the characteristic error mode of flow-based chemistries.

**Further reading.** Pair the Almogy 2022 paper with the Illumina sequencing lecture in this series, the 454 pyrosequencing lecture for historical context on flow-based chemistry, and the Element Aviti and MGI DNBSEQ lectures for adjacent challenger platforms.

---

