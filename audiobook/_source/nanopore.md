# Oxford Nanopore Sequencing: Reading DNA Without Copying It

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to two hours, plus a mid-point break. (Read faster, ~140 wpm, and it lands nearer 90 minutes, leaving room for questions or board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The crazy idea: sequence DNA without copying it

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about nanopore sequencing — and specifically the version of it commercialized by a company called Oxford Nanopore Technologies. And I want to begin by telling you, very directly, that this is the strangest sequencing technology in the world. It is unlike anything else you've learned about. If you've taken a previous genetics course, you've probably heard about Sanger sequencing, where DNA polymerase builds copies of a template with chain-terminating dyes, and you've probably heard about Illumina sequencing, where you build clusters of identical DNA fragments on a glass slide and watch fluorescent bases get added one at a time. Both of those technologies, despite their differences, share something fundamental — they sequence DNA by **synthesizing a new copy of it**, base by base, and reading what got added.

Nanopore sequencing does not do that. There is no polymerase. There are no fluorescent dyes. There are no cameras. There is no copying of any kind. The DNA molecule you start with is the DNA molecule you read. You take the strand, you thread it through a tiny hole in a membrane, you measure how the electrical current through that hole changes as the strand passes through, and from the wiggles in the current you infer the sequence of bases. The molecule is interrogated directly — physically — as it passes through a sensor that is itself a single protein.

\[Pause.\]

I want you to feel how weird that is. Every other major sequencing technology in widespread use today is a variation on the theme of "watch a polymerase do its job and record what it's doing." Sanger watches a polymerase fall off when it incorporates a terminator. Illumina watches a polymerase add one fluorescent base at a time. Even PacBio, the other long-read platform, watches a single polymerase incorporating fluorescent bases in real time inside a tiny well. They're all variations on the theme of using a synthesis enzyme as an indirect reporter for what the original template said.

Nanopore throws that whole approach out the window. It says: forget synthesis. Forget polymerases. Let's just take the original molecule and pull it through a sensor. The sensor is a protein with a hole in it just big enough for one strand of DNA. We apply a voltage across the membrane the hole sits in. Ions flow through the hole, creating a small but measurable electrical current. When DNA is in the hole, it partially blocks the ions, and the current drops. Different bases in the hole block by different amounts. We measure the current, hundreds of times per second, and we work backwards from the current trace to the sequence.

That's it. That's the entire technology, conceptually. A hole, a voltage, a current, and a strand of DNA being dragged through.

\[Pause.\]

Here's the analogy I want you to hold in your head for the next two hours. Imagine you are standing on the bank of a stream, watching water flow through a narrow channel between two rocks. The water is flowing at a steady rate, and you have a meter measuring how much water passes per second. Now I throw a long piece of beaded jewelry into the stream — a necklace, say — and it gets caught in the channel, threading through the gap one bead at a time. Each bead, as it sits in the channel, partially blocks the flow. A small bead blocks a little. A big bead blocks a lot. A bumpy bead causes a different shape of disruption than a smooth one. By watching the water-flow meter, you can — in principle — figure out the sequence of beads on the necklace just from how each one disrupts the flow as it passes through.

That's nanopore sequencing. The channel is the pore — a protein with a sub-nanometer-scale hole through the middle of it. The water is the ionic current — actually a stream of charged ions, mostly potassium and chloride, being pushed through by an electrical voltage. The necklace is your DNA strand. The beads are the bases — A, T, G, C. The meter is a tiny patch-clamp amplifier that measures the current with picoamp precision. And the trick — the part that's taken thirty-five years of work to get right — is the inference. Given the current trace, how do you figure out what beads were in the channel?

\[Pause.\]

If you walk out of here in two hours and you can do three things — one, explain in plain English how a nanopore turns DNA sequence into electrical current and back; two, list the three big things this technology lets you do that no other sequencing platform can; three, look at a paper or a news story about a sequencing result and tell me whether nanopore was the right tool for the job and why — then we've succeeded. Everything else hangs off those three.

Let me tell you those three big things up front, because they're going to recur throughout the lecture as the things that make people care about nanopore at all.

First: nanopore produces **ultra-long reads**. Illumina sequencing maxes out at about three hundred bases per read. Nanopore routinely produces reads of a hundred thousand bases. The current record is over four million bases — that's longer than many bacterial genomes, read in a single uninterrupted stretch. Long reads are what you need to span repetitive regions, to assemble structural variants, to phase haplotypes, to resolve full-length genes including all their introns. There are biological problems that simply cannot be solved with short reads, no matter how many of them you collect. Nanopore solves them.

Second: nanopore is the only platform that can read **native RNA directly**. Every other RNA-sequencing technology has to reverse-transcribe RNA into complementary DNA first, and in doing so loses all the modifications — the methylations, the pseudouridines, the m6A marks — that decorate real cellular RNA. Nanopore can take the actual RNA molecule out of your cell and thread it through the pore, and the modifications produce their own characteristic current signatures. You get the sequence and the modifications, in one shot.

Third: nanopore is **real-time and portable**. The flagship device, the MinION, is the size of a USB stick. It plugs into a laptop. It produces reads as the DNA goes through the pore — you can start analyzing your data thirty seconds after the experiment begins. People have used it on Antarctic expeditions, in the middle of the Amazon rainforest, during Ebola outbreaks in West Africa, and on the International Space Station. It is the first sequencing technology that has genuinely escaped the lab.

Those three things — long reads, native RNA, and real-time portability — are why nanopore exists as a viable platform alongside the established giants. Hold onto them. We'll keep coming back.

---

## SEGMENT 2 — The origin story: Deamer, Branton, Akeson, and a sketch on an airplane

Now let's go back to where this all started, because the origin story is genuinely beautiful, and it'll help you understand why the technology took so long to mature.

The year is 1989. A biochemist named David Deamer, working at UC Santa Cruz, is on a plane. He is thinking about DNA. Specifically, he's thinking about a much older observation from electrophysiology — the field that studies electrical currents through biological membranes. For decades, biologists had known that you could measure tiny currents through individual ion channels in cell membranes using a technique called the patch clamp. A single channel — a single protein with a hole through it — could be isolated in a tiny patch of membrane, and the picoamp-scale current through that one molecule could be measured. Erwin Neher and Bert Sakmann had won the Nobel Prize for this kind of work.

Deamer's insight, scribbled on a napkin on that plane, was this. What if you took a protein pore — a hole in a membrane just big enough for a strand of DNA to pass through — and pulled a DNA strand through it using an applied voltage? The DNA would partially block the ionic current through the pore. Different bases, with their different chemistry and different shapes, ought to block the current by different amounts. If you watched the current trace as the strand went through, you might be able to read off the sequence.

Deamer wrote down the idea, did some back-of-the-envelope calculations, and then went looking for collaborators. He found two — Dan Branton at Harvard, and a younger postdoc named Mark Akeson, who would eventually move to Santa Cruz to work with Deamer directly. The three of them spent the next decade trying to make this idea work.

\[Pause.\]

Now I want to be honest with you about what "trying to make this idea work" actually meant in the 1990s, because there's something instructive in the difficulty. The first paper showing that DNA actually does translocate through a biological pore in response to an applied voltage came out in 1996 — that's seven years after Deamer's napkin. The pore they used was a bacterial toxin called **alpha-hemolysin**, made by _Staphylococcus aureus_. Alpha-hemolysin is a beautiful molecule. It self-assembles in membranes into a mushroom-shaped seven-subunit pore with a narrow stem and a wider cap, and the hole through the middle is just about wide enough to accommodate a single strand of DNA. Hagan Bayley, who would later co-found Oxford Nanopore, had been working with alpha-hemolysin for stochastic sensing — using the pore to detect small molecules by how they perturbed the current. Deamer and his collaborators showed that DNA threads through this pore too, when you turn on the voltage.

So the basic concept was validated by the late 1990s. DNA goes through. The current does change. But here's where the difficulty starts to bite. Alpha-hemolysin, as a sequencing pore, is bad. The hole isn't really a single narrow constriction — it's a long tunnel about ten nanometers deep, and at any given moment something like ten or fifteen bases are sitting inside the pore, all simultaneously affecting the current. The signal you measure isn't from one base at a time; it's an average over a whole stretch. Distinguishing which base is where, when the signal blends contributions from many neighbors, is genuinely hard. And on top of that, DNA threads through the pore at a ferocious speed — millions of bases per second under typical voltages — which is way too fast for any electrical measurement to resolve individual bases. The signal smears out into a noisy blur.

So for years, the field knew the concept worked but didn't know how to extract real sequence from the messy current trace. The problem split into two hard sub-problems. One: find a better pore. Two: find a way to slow the DNA down. Both of those took roughly fifteen years of dogged work, by multiple labs, to solve.

\[Pause.\]

Let me give you the analogy. Imagine you've designed a coin-sorting machine. The coins fall through a chute, past a sensor, and the sensor measures their thickness so you can tell pennies from nickels from dimes. Great idea. But two problems. First, the chute is so long that two or three coins are inside it at once, and the sensor measures the sum of their thicknesses rather than each one individually. Second, the coins fall through too fast for the sensor to resolve each one cleanly. To make the machine work, you need to redesign the chute so only one coin is in the sensor zone at a time, and you need a brake at the top to release the coins one by one at a controlled rate. That, in essence, is exactly what nanopore researchers spent the 2000s and early 2010s figuring out. A new pore — that's the redesigned chute. A motor protein — that's the brake at the top. We'll get to both in the next two segments.

What I want you to appreciate is that the path from Deamer's napkin sketch to a commercial sequencer took about twenty-five years. Deamer himself joked, in later interviews, that he had thought the whole thing would be solved in five. It wasn't. The reason it wasn't is that biological sensors at the single-molecule scale are extraordinarily noisy, and the dynamic range of the signal you're trying to read — the current difference between, say, an A and a G sitting in the pore — is a few picoamps out of a baseline of maybe a hundred picoamps. That's a few percent signal in a noisy background, and it has to be inferred at a rate of hundreds of times per second, on hundreds of pores in parallel. Every part of the engineering had to be tuned for it to work.

Oxford Nanopore Technologies was founded in 2005, mostly built around Bayley's intellectual property and a vision that you could commercialize this. They didn't ship their first product until 2014 — nine years of internal R&D, much of it secret, to get the technology to the point where someone outside the lab could actually use it. When the MinION shipped, it shipped with an error rate of about thirty percent — meaning roughly one in three bases was wrong. That's catastrophic for almost any application. The early access community used it anyway, because long reads at thirty percent error were still better, for some problems, than short reads at no error. Over the next decade the error rate dropped from thirty percent to two percent to under one percent with the latest chemistries. We'll come back to that error-rate story later in the lecture, because it's one of the most dramatic technology improvement curves in the history of sequencing.

For now: hold onto the origin story. Napkin in 1989. First DNA translocation in 1996. First commercial product in 2014. Mature, accurate, useful technology by about 2020. That's the arc.

---

## SEGMENT 3 — From hagfish toxins to MspA to R10: the engineering of biological pores

So let's get into the actual chemistry. The pore is, physically, the heart of the technology. Everything else — the motor, the basecaller, the device, the cloud software — exists to serve the pore. So if we're going to understand nanopore sequencing, we need to understand how the pore was engineered.

The first-generation pore, as I mentioned, was alpha-hemolysin — a bacterial toxin from _Staphylococcus aureus_. It's a beautiful molecule for laboratory demonstration: seven identical subunits self-assemble in a lipid membrane to form a stable, well-defined pore with a known structure. You can stick DNA in it, apply voltage, and watch the strand translocate. As a research tool, alpha-hemolysin was perfect. As a sequencing tool, as I said, it had a fundamental problem: the constriction inside the pore — the narrowest part, where the DNA most strongly interacts with the protein walls — is too long. About four or five nanometers of the pore's interior contributes meaningfully to the ionic current. At any moment, ten or so bases of the DNA are in that sensitive zone, and they all contribute, and the resulting signal is a smeared-out average that doesn't have enough information in it to reliably distinguish A from T from G from C at single-base resolution.

So the field went hunting for a better pore. The question was: is there a protein out there in nature that already has a sharper constriction — a single, narrow ring through which DNA must pass, such that only one or two bases are interacting with the protein at a time?

The answer turned out to be yes, and the protein is called **MspA** — porin A from _Mycobacterium smegmatis_. Mycobacteria are the family that includes the tuberculosis bug, and they have unusual cell walls that require unusual pores to ferry molecules across. MspA is a porin — a passive channel through the bacterial outer membrane — and it has a goblet-like shape with a very narrow constriction at the bottom, only about one nanometer wide and only about half a nanometer deep. That's a sharp constriction. Only about one or two bases of a DNA strand can fit inside the sensing zone at a time. Which means the current signal you read from MspA is much more localized — much closer to a single-base measurement than alpha-hemolysin can ever be.

\[Pause.\]

Jens Gundlach's lab at the University of Washington did the foundational work on MspA in the late 2000s and early 2010s, showing that with engineered versions of the protein you could distinguish all four bases by their characteristic current levels, with much better separation than alpha-hemolysin gave. This was a major breakthrough. It meant that — in principle — single-base resolution was achievable with a biological pore. Oxford Nanopore's commercial pores have evolved through several generations since, and while the exact protein identity of each generation is a closely-guarded commercial secret, the engineering principle is the same one MspA established: find a protein with a sharp, narrow constriction, and tune it for the highest possible signal-to-noise.

The generations of pore chemistry have been given short, cryptic names that you'll see in nanopore papers. R7 was an early generation, retired by about 2016. R9 was the workhorse for several years, based on a different protein from MspA but with a similarly sharp constriction. R10 came in around 2019, with what is, I think, the most important engineering improvement in the platform's history: a **dual-reader-head** design. The R10 pore has not one but two constrictions stacked on top of each other, separated by a few nanometers. As DNA threads through, each base passes through the first constriction, then through the second, and the current is influenced by both readings. You get, effectively, two measurements of every base — taken at slightly different positions and combined to reduce uncertainty. R10.4, the current generation as of the time this lecture was written, refines that dual-reader design further and is the basis for the highest-accuracy nanopore data being produced today.

\[Pause.\]

Let me give you the analogy. Imagine you're trying to identify which book is being slid through a slot in a wall, and you can only feel the spine as it passes by your fingertips. With alpha-hemolysin, your fingertips are spread out over a long zone — you're feeling several pages worth of spine all at once, and you can't tell where one chapter ends and the next begins. With MspA, your fingertips are concentrated into a single point, and you can feel one letter of the title at a time as the book slides past. With R10, you have **two fingertips, one just behind the other**, both reading the spine in sequence. You get two independent reads of every letter, separated in time, which lets you cross-check yourself and catch errors that any single reader would miss. That's the dual-reader-head idea in plain English.

There's a related innovation called **duplex sequencing**, which is the software-side equivalent of the dual-reader-head idea. In duplex, you sequence both strands of a double-stranded DNA molecule — the forward strand goes through the pore, then the reverse strand goes through the same pore — and you combine the two reads into a single consensus call. The reverse strand reads the complementary bases, so a real base will appear in both reads in complementary form, while a random error will appear in only one. By combining the two reads you can push the error rate down dramatically. R10.4 with duplex is, as of writing, the most accurate nanopore data ever produced, with raw accuracies above 99 percent and consensus accuracies pushing into the Q30+ range that historically only Illumina could reach.

\[Pause.\]

One footnote, because it's a fun piece of history that connects to the title of this segment. Early in the nanopore field there was a lot of interest in using **hagfish toxins** — proteins from the slime of the hagfish, a primitive fish that produces vast quantities of mucus when threatened — because some of those toxins form pores in cell membranes. Several other naturally occurring pores were screened in the 2000s, including pores from bacteriophages and other bacterial toxins. The field tried a lot of things. MspA and its relatives won out because of the sharp constriction. But the screening exercise — testing dozens of natural pores to see which ones gave the best sequencing signal — is a beautiful example of how protein engineering today often starts with mining biology for raw material and then refining what nature provides.

The big idea to leave this segment with: a nanopore sequencer is, at its physical heart, **one engineered protein with a hole through it, mounted in a synthetic membrane, with a voltage applied across it**. Everything in the rest of the technology stack — the motors, the basecalling, the device design, the cloud — exists to extract sequence information from the current that flows through that one hole. And the central engineering problem is making the hole as discriminating as possible, so that the difference in current between an A and a G sitting in the pore is as large as it can be relative to the inevitable thermal noise.

---

## SEGMENT 4 — The motor protein: why DNA needs a brake

So we have the pore. Now we have the second hard problem: DNA, left to its own devices, threads through the pore much too fast.

If you take a DNA strand and just apply a voltage across a nanopore, the negatively charged DNA gets pulled into the positively charged side, and it whips through at something like a million bases per second — maybe more. That sounds fast because it is fast. The patch-clamp amplifiers we use to measure ionic current can sample maybe a hundred thousand times per second. So if a base is in the pore for a microsecond, the amplifier essentially can't see it at all. The signal smears into an indistinguishable blur, and no amount of clever analysis can recover the sequence.

To read the DNA, we need to slow it down. Dramatically. From a million bases per second to something like a few hundred bases per second — a factor of about ten thousand. And we need to slow it down in a controlled way — not just stop and start randomly, but move at a steady, regulated pace, one base after another after another.

The solution Oxford Nanopore landed on is to attach an enzyme on top of the pore — a **motor protein** that grabs the DNA and feeds it through the pore at a controlled rate. The motor sits like a hat on top of the pore. The DNA enters the motor, gets ratcheted through one base at a time, and then exits down into the pore for sensing. The motor controls the speed. The pore measures the current.

\[Pause.\]

Here's the analogy. Imagine a long string being pulled through a hole in a wall by a vacuum cleaner on the other side. The vacuum is sucking the string through at high speed — too fast for you to read any pattern on it. What you do is, on the near side of the hole, you set up a little spool with a hand-crank, and you thread the string around the spool first. Now the string can only go into the hole as fast as you crank the spool. The vacuum is still pulling, but the crank limits how fast the string moves. By cranking at a steady rate, you control the speed precisely, and as the string moves through the hole at, say, one centimeter per second instead of ten meters per second, you can see whatever pattern is printed on it.

The crank, in nanopore sequencing, is the motor protein. It is, in practice, a DNA helicase or a related enzyme — a protein that naturally uses ATP to move along DNA, breaking base pairs as it goes. Helicases are normally used by cells to unwind double-stranded DNA during replication. In the nanopore context, the helicase grabs the DNA, hydrolyzes ATP to ratchet itself forward one base at a time, and in doing so feeds the DNA through the pore at a rate controlled by the rate of ATP hydrolysis. Tune the conditions — temperature, ATP concentration, the choice of helicase variant — and you tune the speed.

\[Pause.\]

Now here's something that sounds technical but matters a lot. The motor doesn't just slow the DNA down; it also makes the translocation **stepwise rather than continuous**. Without the motor, even if you could slow the DNA down somehow, it would still be slithering through the pore in a more or less continuous flow, and the current signal would be a smooth analog trace. With the motor, the DNA moves in discrete one-base steps. The current goes to a particular level for a few milliseconds — that's one base sitting in the pore — and then the motor takes another step and the current jumps to a new level, where another base sits for another few milliseconds, and so on. The current trace is a staircase, not a slope. And staircases are much easier to read than slopes. Each step corresponds to a fixed position of the DNA in the pore, with a definite chemical environment, and so a definite current value.

The original motors used in the early MinION devices ran at about 30 bases per second. That was slow enough to read but produced very low throughput. Newer motors run at 400 to 450 bases per second — fast enough to give meaningful throughput while still slow enough for the current signal to be resolved. The exact motor identity has changed over the generations, and as with the pore chemistry, the precise enzyme is a commercial secret. But the principle hasn't changed.

\[Pause.\]

One more thing worth mentioning about the motor before we move on. The motor isn't just a passive brake; it's also what enables **directional sequencing**. The motor binds at a specific end of the DNA — typically the end that has been ligated to a custom adapter during library preparation — and ratchets the DNA through the pore in a specific direction. This means the sequence comes out of the pore in a defined order, from one end of the molecule to the other. It also means that if both ends of the DNA have adapters and motors loaded, the molecule can be threaded through the pore from either end — which is exactly how duplex sequencing works in practice. The forward strand goes through with one motor, then the reverse strand goes through with another motor, and the two reads are combined into a high-accuracy consensus.

So now you have the two halves of the physical sensor. **The pore is the reader.** It's the part that converts DNA position into electrical current. **The motor is the brake and the conveyor.** It's the part that controls how fast the DNA moves and ensures it moves stepwise rather than continuously. Together, pore plus motor, they form a single integrated machine for converting a DNA strand into a current trace.

The next question — and it is genuinely hard — is how do you convert that current trace into a sequence of bases? That's basecalling, and it deserves its own segment, because it turns out to be a deep learning problem.

---

## SEGMENT 5 — The ionic current signal: what we're actually measuring

Before we get to basecalling, let me spend a segment on the signal itself, because if you don't understand what the raw data look like, the basecalling problem won't quite make sense.

Picture a single pore embedded in a synthetic membrane. On one side of the membrane, the cis side, there's a solution of salt water — typically potassium chloride. On the other side, the trans side, there's another solution of salt water. There's a voltage applied across the membrane, typically around 180 millivolts. That voltage drives ions — potassium ions one way, chloride ions the other — through the pore. The flow of ions constitutes an electrical current, and we measure that current with an electrode on each side of the membrane connected to a sensitive amplifier called a patch-clamp amplifier. The current we measure is small — typically around 100 to 200 picoamps when the pore is open and empty. A picoamp is a trillionth of an amp. We are measuring exquisitely tiny currents from exquisitely small molecular events.

When DNA enters the pore, two things happen at once. First, the DNA physically takes up space inside the pore. The narrow constriction, normally full of nothing but ions sloshing through, is now partly filled by a DNA strand. The volume available for ion flow is reduced, and the current drops. The amount the current drops depends on the specific chemistry of whatever piece of DNA is sitting in the constriction at that moment. Different bases have slightly different sizes, slightly different shapes, slightly different chemical interactions with the protein walls of the pore. A bulky purine like guanine blocks the current more than a smaller pyrimidine like cytosine. The exact relationship between base identity and current is not a simple one — it's a complicated nonlinear function — but it is reproducible, and that's all we need.

\[Pause.\]

Here is the analogy. Imagine the pore as a tunnel just wide enough for a single bicyclist to ride through, and the cis-to-trans voltage as a strong wind blowing down the tunnel. With no one in the tunnel, the wind blows through freely — that's the open-pore baseline current. When a bicyclist enters the tunnel, they partially block the wind, and the wind speed drops. A small thin bicyclist blocks less wind than a big bulky one. A bicyclist wearing baggy clothes blocks differently than one wearing tight clothes. By measuring how much the wind slows down at any given moment, you can — in principle — infer something about who's in the tunnel right now.

In nanopore sequencing, each base going through the pore is one bicyclist. The "wind speed" — the ionic current — drops by a characteristic amount depending on which base is currently in the sensing zone. We measure the wind speed at a few thousand samples per second. We get a long time series of current values. That time series is the raw nanopore data.

\[Pause.\]

But now here's where it gets interesting, and where the basecalling problem starts to bite. I said the current drops depend on "the base in the sensing zone." That's a slight simplification. What's actually true is that the current depends on **the few bases in the sensing zone**, all of them simultaneously, in a sort of overlapping way. Even with the sharp constriction of MspA-derived pores, the sensing zone isn't infinitely thin. It's perhaps half a nanometer to a nanometer wide, which corresponds to roughly two to five DNA bases. So at any moment, the current you measure is determined not by a single base but by a short window of bases — a five-base or so window, called a **k-mer**, of which one is in the most sensitive position and the others contribute as neighbors.

This means the current trace isn't a simple sequence of four discrete levels corresponding to A, T, G, C. It's a sequence of levels corresponding to k-mers. If your sensing window is five bases wide, then with four possible bases you have four to the fifth — 1024 — possible k-mer combinations, and each one has its own characteristic current level. The signal you see is determined by which 1024-element set of k-mers your strand happens to contain, in what order, with whatever overlap as the strand moves base by base through the pore.

So when the strand moves one base forward — when the motor ratchets one step — the k-mer in the sensing window shifts by one. The old first base falls out, a new last base comes in, and the four middle bases stay. The current level jumps from the level associated with the old k-mer to the level associated with the new k-mer, and these levels are determined by the chemistry of the pore and the bases.

\[Pause.\]

That overlapping-window structure is the thing that makes nanopore basecalling fundamentally different from, say, Illumina basecalling. In Illumina, every cycle gives you one base, cleanly — you see a flash of one color out of four, you call A or T or G or C, you move on. In nanopore, every step gives you a current level that depends on a window of bases, and you have to infer the underlying sequence from the trajectory of current levels as the window slides. This is a much harder inference problem. It's a problem of decoding a sequence of states from a sequence of noisy observations, where each observation depends on a window of the sequence. If you know your computer science, this is exactly the kind of problem that hidden Markov models were invented to solve — and indeed, early nanopore basecallers were HMMs. But the modern world has moved on, and these days basecalling is done by neural networks, which we'll talk about in the next segment.

One more thing about the raw signal before we move on, because I want you to feel it as a physical phenomenon. The current trace you collect from a single pore over the course of sequencing a single DNA molecule looks, if you plot it on a screen, like a noisy staircase. Each step of the staircase corresponds to one base position. The height of each step encodes the local k-mer chemistry. The noise on each step — the up-and-down jitter — is the thermal noise of ions sloshing through the pore. The duration of each step is set by the motor speed and varies slightly base-by-base due to the stochastic nature of motor stepping. So your raw data is a time series of, say, four thousand samples per second, going on for as long as the molecule takes to pass through the pore — which for a 100,000-base molecule, at 400 bases per second, is about 250 seconds, or four minutes of continuous current measurement. That four-minute trace gets fed into the basecaller, and the basecaller spits out 100,000 letters.

That's the signal. Now let's talk about how we turn it into letters.

---

## SEGMENT 6 — From signal to base: basecalling as a deep learning problem

Basecalling is, by a wide margin, the hardest software problem in nanopore sequencing. It's also one of the most beautiful applications of deep learning in molecular biology. And it's one of the reasons the technology took a decade longer to mature than people initially expected — because converting a noisy time series of current levels into a sequence of bases is, fundamentally, a hard machine learning problem.

Let me explain why it's hard. The current level at any moment is determined by a k-mer window of bases, as we discussed. So if the sensing window is five bases wide, the current trace tells you a sequence of k-mer levels — but the k-mers overlap, and each base contributes to several consecutive measurements. To recover the underlying base sequence, you have to deconvolve overlapping contributions, account for the variable speed of the motor (which sometimes pauses, sometimes skips a base, sometimes stutters and reads the same base twice), and do all of this in the presence of significant random noise from thermal fluctuations of the ions.

If you think about it abstractly: you have a noisy observation sequence (the current trace) and you want to recover a hidden underlying sequence (the bases) where the mapping from hidden to observed is many-to-one — many possible base sequences could plausibly explain a given current trace. The problem is to find the most likely base sequence given the observation.

\[Pause.\]

Here's the analogy. Imagine you're trying to read someone's handwriting, but instead of seeing the letters, you can only feel the indentations they made on the page through the back of the paper. You can feel that there's a tall vertical stroke here, a curve there, a dot somewhere else. From the pattern of indentations you have to infer what letters were written. Now imagine that the indentations from neighboring letters overlap — each indent you feel actually contains information about three or four letters at once — and that the writer's pen sometimes stuttered or skipped. That's basecalling. You're reading the back of a page where the writer pressed hard with a fountain pen, and the indentations from successive letters bleed into each other, and your job is to figure out what was written.

In the early days — 2014 to about 2017 — basecalling was done with **hidden Markov models**, which are a classical machine learning method for exactly this kind of problem. You build a model of the system: there are some hidden states (the underlying base sequence), there are observations (the current levels), and you have a model of how observations relate to states. Then you use an algorithm called Viterbi to find the most likely hidden state sequence that explains the observed signal. HMM basecallers worked, sort of. They gave you sequences with about 70 to 80 percent accuracy on the early R7 chemistry. That's not good. That's catastrophically bad for most applications. But it was a start.

\[Pause.\]

The breakthrough came when Oxford Nanopore — and several academic groups — started replacing HMMs with **recurrent neural networks** for basecalling. The structure of the problem turns out to be exactly what RNNs were designed for: take a sequence of inputs (current levels), produce a sequence of outputs (bases), where the mapping is context-dependent. By training a recurrent neural network on a huge dataset of nanopore reads where you already know the true sequence — for example, reads from a well-characterized reference genome like _E. coli_ — you can let the network learn the mapping from current trace to base sequence directly, without having to model the physics by hand.

The first generation of neural basecallers, around 2017, were based on bidirectional long short-term memory networks — BiLSTMs. These pushed accuracy from the 70 to 80 percent range up to about 90 percent. The second generation, around 2019 to 2020, introduced more sophisticated architectures including a connectionist temporal classification loss — CTC — that handled the variable-length output problem more gracefully. Accuracy climbed to 95 percent. The latest generations, post 2022, use transformer-based architectures borrowed from natural language processing, and accuracy is now well above 99 percent on R10.4 chemistry with duplex reads.

\[Pause.\]

I want to dwell on one thing about this trajectory, because it's an underappreciated piece of the nanopore story. The hardware — the pores, the motors, the membranes — has been improving steadily but incrementally. The software — the basecallers — has been the dominant driver of accuracy improvements over the last five to seven years. The same R9 chemistry that gave 85 percent accuracy with a 2018 basecaller gives 95 percent accuracy with a 2022 basecaller. The signal is the same. The interpretation has gotten better.

This means nanopore sequencing has a remarkable property that most other technologies don't share: **your old data gets better**. If you sequenced a sample on a MinION in 2018 and saved the raw current traces, you can rerun the data through a modern basecaller today and get higher accuracy than you got at the time. The raw signal contains more information than the early basecallers could extract. Every basecaller release unlocks more of that latent information.

Compare that to Illumina, where the basecalling is essentially deterministic — a flash of one of four colors maps to one of four bases, with high confidence, in a matter that's been mature for fifteen years. Illumina basecalling has nowhere left to improve. Nanopore basecalling, by contrast, is still actively a research frontier, with new architectures and new training datasets being released every few months.

\[Pause.\]

One technical detail worth knowing. The basecaller's job is not only to decide which base is at each position; it also has to decide **how many** bases were at each position. Because the motor sometimes pauses — the current sits at the same level for an extended time — and sometimes skips — the current jumps to a new level without going through intermediate values. The basecaller has to decide, from the duration of each current level, whether the motor was sitting still for one base or two or three. This is the classic homopolymer problem in nanopore sequencing — long runs of the same base, like AAAAAAA, are hard because the current sits at a constant level for the whole run and the basecaller has to count carefully to determine how many A's were there. This was a major weakness of the older R9 chemistry. R10's dual-reader-head design specifically improves homopolymer accuracy because the two readers give independent estimates of position, and combining them helps disambiguate run length.

So basecalling is hard, basecalling is a deep learning problem, basecalling has been the dominant axis of improvement in nanopore for the last decade, and basecalling is still actively improving. When you read a nanopore paper that quotes a particular accuracy number, you should always ask which basecaller version was used. The same raw data, with a basecaller from two years later, will likely give you noticeably better numbers.

That's enough on basecalling. Let's switch gears and talk about the actual physical devices people use — the MinION, the GridION, and the PromethION.

---

## SEGMENT 7 — The MinION, the GridION, the PromethION: the product family

Now let's talk about the devices themselves, because the form factor of Oxford Nanopore's products is, in itself, a piece of the story. No other sequencing company has anything remotely like this product line.

Start with the **MinION**. The MinION is, physically, a small plastic box about the size of a stapler — or, more famously, about the size of a USB stick. It plugs into your laptop via a USB-C cable. It weighs less than a hundred grams. It costs, depending on the configuration, around a thousand dollars to get started. That's not the price of a sequencing run; that's the price of the device. You can order one online, like you'd order a graphics card. It arrives in a small cardboard box.

Inside the MinION is essentially nothing but an electrical connector and a temperature control system. The actual sequencing happens on a **flow cell** — a separate disposable cartridge, about the size of a credit card, that you snap into the top of the device for each experiment. The flow cell is where the membrane is, where the pores are, where the chemistry happens. The MinION itself is just a holder and a USB interface. You buy the MinION once and use it for years. You buy flow cells per experiment.

\[Pause.\]

Let me unpack the flow cell, because it's the consumable that actually matters. A MinION flow cell contains 2048 individual sensing wells, each one with its own membrane and ideally its own pore. The wells are wired to a custom application-specific integrated circuit — an ASIC — that measures the picoamp-scale current from each well independently and reports the values back to the computer at thousands of samples per second per well. Of those 2048 wells, typically 1500 or so will have a functional pore loaded at the start of an experiment; the rest are dead or empty. As the run proceeds, pores die — they get damaged, or they get clogged by aggregated DNA, or the membrane around them ruptures — and the number of active pores declines over the lifetime of the run, which typically lasts 72 hours.

The total throughput of a single MinION flow cell, at full performance, is around 50 gigabases — that is, 50 billion bases of sequencing data — over those 72 hours. For comparison, an Illumina NovaSeq run produces about 6 terabases — 6000 gigabases — but it costs more than a million dollars in capital and runs for several days. The MinION gives you, very roughly, one-hundredth the throughput of a NovaSeq for one-thousandth the capital cost. So per-base, MinION sequencing is more expensive than Illumina by maybe a factor of ten. But the capital cost barrier is essentially zero.

\[Pause.\]

Now the **GridION**. The GridION is, essentially, five MinIONs in a desktop box, plus a built-in computer to do basecalling in real time. It's about the size of a large desktop computer or a small microwave. You snap up to five MinION-format flow cells into the top, and you can run them all in parallel, each independently controlled. The throughput scales accordingly — five times a MinION, or up to 250 gigabases per run. The cost of the GridION instrument is around fifty thousand dollars, plus the flow cells.

The GridION is for labs that want more throughput than a single MinION but don't need the absolute maximum scale. A typical use case is a small core facility, or a clinical microbiology lab, or a research group that runs sequencing routinely but at moderate scale.

\[Pause.\]

Now the big one. The **PromethION**. The PromethION is a desktop appliance designed for industrial-scale nanopore sequencing. It comes in two main configurations: the PromethION 24, which runs up to 24 flow cells in parallel, and the PromethION 48, which runs up to 48. And — critically — the PromethION flow cells are not the same as MinION flow cells. They're physically larger and contain 3000 wells each instead of 2048. So a single PromethION 48 flow cell produces more data than a MinION, and the device can run 48 of them simultaneously. Total throughput, at full performance, can exceed 14 terabases per run — competitive with Illumina's largest machines.

The PromethION costs more — somewhere in the few-hundred-thousand-dollar range for the instrument — and the flow cells cost around two to three thousand dollars each. It's still substantially cheaper, in capital terms, than an Illumina NovaSeq, but it's no longer a casual purchase. PromethION is for human genome sequencing at scale, for population studies, for large clinical projects, for major reference labs.

\[Pause.\]

And then there are some other, smaller members of the product family worth mentioning briefly.

The **Flongle** is an adapter that lets you run mini flow cells on a MinION or GridION. A Flongle flow cell has only 126 wells and produces only about 1 to 2 gigabases of data per run — but it costs about a hundred dollars instead of nine hundred. So the Flongle is for very small, exploratory experiments where you don't need much data and you want to keep costs minimal. Sequence a single bacterial genome, identify a pathogen in a clinical sample, do quick quality control on a library. The Flongle is the appetizer-sized version of nanopore sequencing.

The **VolTRAX** is an automated library preparation device. Library prep — which we'll discuss in detail in Segment 8 — normally involves a series of pipetting steps, enzyme reactions, and cleanups, all done by hand. VolTRAX is a programmable cartridge with built-in valves and reservoirs that runs those reactions automatically with no manual intervention. Load your sample, press a button, walk away. It's aimed at non-specialist users in field settings.

And there's a long-rumored, never-quite-shipped product called the **SmidgION**, which is meant to be a smartphone-attached sequencer. It's been announced multiple times but as of writing has not yet reached general availability. The goal is a nanopore sequencer that runs off a smartphone, with no laptop at all — pure portability.

\[Pause.\]

Step back and look at the product line as a whole, because there's something genuinely unusual about it. Most sequencing companies — Illumina, PacBio, the Chinese player BGI — sell big-ticket instruments at the high end, with prices that start in the high six figures and go up from there. The whole product strategy is centered on capital sales to well-funded labs and core facilities. Nanopore sells across the entire range — from the Flongle at a hundred bucks a run, through the MinION at a thousand-dollar instrument, up through the PromethION at industrial scale. The same chemistry, the same software, the same data format, scaled from a single experiment in a hotel room to a national genome project.

That coverage of the entire scale range is, I think, the most distinctive thing about nanopore as a company. It's why MinIONs have been deployed in places no Illumina machine has ever gone, while PromethIONs anchor the back-end pipeline of major reference sequencing projects. One technology, one platform, scaling from a USB stick to a server rack. We'll come back to the field-deployment stories in Segment 15.

---

## SEGMENT 8 — Library prep: from biological sample to pore-ready DNA

Before any sequencing happens, you have to prepare your sample. This is called **library preparation** — turning your raw biological material, whether that's purified genomic DNA from a blood draw or RNA extracted from a tumor or environmental DNA from a swab of pond mud, into a form that the sequencer can actually read. Library prep is where a lot of the experimental variation in any sequencing project lives, and nanopore has its own particular flavor of it, with some unique advantages.

The fundamental requirement for nanopore library prep is simple: you need to attach a **sequencing adapter** to each end of each DNA fragment in your sample. The adapter is a short, custom-designed piece of double-stranded DNA with a single-stranded overhang. The single-stranded overhang is what threads into the pore first, with the motor protein pre-loaded onto it. So the adapter is the on-ramp that gets the DNA into the pore in a controlled, motor-driven way.

There are essentially two routes for adapter attachment, and they trade off speed against quality.

\[Pause.\]

The first route is the **rapid kit** — sometimes called the rapid sequencing kit, marketed under various product codes. Total prep time: about ten minutes. Number of pipetting steps: maybe three or four. The chemistry uses a clever enzyme called a transposase, which is a protein from bacteria that naturally cuts DNA and inserts its own cargo into the cut site. In this case, the cargo is the nanopore sequencing adapter. You mix your DNA sample with the transposase-loaded adapter, incubate for a few minutes, and the transposase chops up your DNA and inserts adapters into the cut sites simultaneously. Add a few more reagents, load the result onto a flow cell, and you're sequencing within fifteen minutes of starting.

The rapid kit is what gets used in field deployments. It's what was used during the West African Ebola outbreak, in airport pathogen screening, on the ISS. It produces lower-quality libraries than the slow route — the transposase introduces some bias, the read lengths tend to be shorter because the chopping is random, and not every DNA molecule gets adapters on both ends — but for time-critical applications, ten minutes from sample to sequence is irreplaceable.

\[Pause.\]

The second route is the **ligation kit**, the high-quality workhorse for most laboratory applications. Total prep time: about 60 to 90 minutes. The chemistry is more conservative. You start with your DNA, you repair any damaged ends — broken bases, frayed overhangs — using an enzyme cocktail that polishes the DNA ends to a clean, blunt, double-stranded state. Then you add a single A nucleotide to the 3-prime end of each strand — a process called A-tailing — using another enzyme. Then you ligate the sequencing adapter, which has a complementary T overhang, onto the prepared ends using DNA ligase. Then you clean up the result with magnetic beads to remove unligated adapters and enzyme contaminants. Then you load onto the flow cell.

The ligation kit produces higher-quality libraries — better adapter ligation efficiency, longer reads, less bias. It's what you use for any application where data quality matters more than turnaround time, which is most applications. The rapid kit is for emergencies and field work; the ligation kit is for everyday sequencing.

\[Pause.\]

Here's the analogy. Think of library prep as preparing letters for the mail. The rapid kit is like stuffing a stack of unfolded papers into a single envelope — fast, gets the job done, but not pretty and a few pages might slip out. The ligation kit is like neatly folding each letter, addressing each envelope, applying a stamp, and dropping it carefully in the mailbox — slower, but each letter arrives intact and in the right order.

There are also specialized kits for specific applications. **Direct RNA sequencing**, which we'll talk about in Segment 10, uses a slightly different adapter chemistry that handles the structural differences between RNA and DNA — RNA is single-stranded, has a 2-prime hydroxyl, and is much more fragile, so the adapters have to be designed around those constraints. There are **ultra-long kits** that use specialized chemistry to preserve very large DNA fragments — hundreds of kilobases — through library prep without breaking them. There's the **PCR-based kit** for amplifying low-input samples, though using PCR sacrifices some of the unique advantages of nanopore, particularly the ability to detect modified bases.

\[Pause.\]

One thing that distinguishes nanopore library prep from other platforms is what you **don't** have to do. You don't have to amplify your DNA with PCR — most kits work directly with the native DNA from your sample. You don't have to fragment your DNA to a specific size — nanopore can read any length, so your fragments can be as long as your input DNA permits. You don't have to do bridge amplification on a flow cell to make clusters, like Illumina does. You don't have to construct a SMRT-bell with hairpin adapters, like PacBio does. The library prep is, in most cases, surprisingly minimal — just put adapters on the ends, load onto the flow cell, go.

This minimalism is what makes the rapid kit possible. It's also what makes nanopore well-suited to **native DNA sequencing** — sequencing the actual molecule that came out of the sample, with all its original chemical modifications intact, without ever copying it through PCR. That's a recurring theme: nanopore reads what's there, not a synthetic copy of what's there. Library prep preserves that property because it doesn't synthesize anything.

For the practical takeaway: if you're doing field work or pathogen ID, use the rapid kit and you'll have sequence in 15 minutes. If you're doing serious genome research and you want the highest data quality, use the ligation kit and budget about 90 minutes for the prep. Either way, the basic principle is the same — adapters with pre-loaded motors get attached to the ends of your DNA fragments, and that's what threads into the pore.

---

## SEGMENT 9 — Read length: the killer feature

Now we come to what I think is the single most important advantage of nanopore sequencing — the feature that makes it indispensable for whole classes of biological problems. Read length.

To understand why read length matters, you have to first understand what short reads — Illumina-style reads — cannot do. Illumina reads are typically 150 to 300 bases long. That's enough to identify a gene, enough to call SNPs, enough to estimate gene expression levels. But there are large parts of the genome where 300 bases is not enough.

Consider repetitive regions. The human genome is full of repeats — long stretches where the same short sequence is copied over and over and over. The telomeres at the ends of chromosomes are made of TTAGGG repeated thousands of times. The centromeres in the middle of chromosomes are made of complex satellite repeats spanning hundreds of kilobases. Transposable elements — LINEs and SINEs — are repeated tens of thousands of times throughout the genome. If you sequence a region full of repeats with 300-base reads, you can read each repeat unit individually, but you can't tell where in the long repeat array any given read came from. You can't assemble the array. You can't know how many copies there are. You can't detect changes in the array length between individuals.

\[Pause.\]

Here's the analogy. Imagine you're trying to reconstruct a long passage of text, but you can only see fragments of it at a time, and each fragment is 30 characters long. If the text is "the quick brown fox jumps over the lazy dog," you can probably reconstruct it from overlapping 30-character fragments, because each chunk is unique. But now imagine the text is "AAAAAAAAAAAAAA … AAAAAAAA" for a thousand A's in a row. Every 30-character fragment is identical — just thirty A's. You have no idea how long the original passage is. You can't reconstruct it. You can't even tell if it's a hundred A's or ten thousand.

Now imagine you had a single 5000-character fragment that spans the entire repetitive region. You can count the A's directly. You know exactly how long it is. The problem is solved trivially.

That's the difference between short reads and long reads. **Long reads span the repetitive region.** They don't get lost inside it. They anchor at unique sequence on either side, walk through the repeats, and tell you exactly what's in there.

\[Pause.\]

The human genome has remained partially uncharted for decades because of repeats. The original Human Genome Project announced "completion" in 2003 but actually left about eight percent of the sequence unresolved — including most of the centromeres, the rRNA gene arrays, and large parts of the Y chromosome. These regions were called gaps in the reference genome, and they sat empty for nearly twenty years because no sequencing technology could reliably traverse them. It wasn't until 2022 that the T2T Consortium — Telomere to Telomere — finally published a truly complete human genome reference, with every base of every chromosome resolved end to end. They did it using a combination of Oxford Nanopore ultra-long reads and PacBio HiFi reads. Nanopore reads of a million bases or more were essential for assembling through the longest repeat arrays. Without long-read sequencing, those gaps would still be open.

\[Pause.\]

There are other things long reads unlock besides assembly through repeats. **Structural variants** — large rearrangements of the genome, including deletions, insertions, inversions, and translocations of thousands or millions of bases — are largely invisible to short reads, because the breakpoints often fall in repetitive sequence and the rearrangements span longer distances than any individual short read. Long reads see structural variants directly, by reading across the breakpoints in a single molecule. **Haplotype phasing** — figuring out which variants on a chromosome are inherited together, versus separately — requires reads long enough to span multiple variants, which is rare with 300-base reads but easy with 100,000-base reads. **Full-length transcripts** — reading an entire messenger RNA from poly-A tail to 5-prime cap, including all the exons and the splice junctions between them — requires reads as long as the transcript, which can be many kilobases for long genes. Short reads can read fragments of the transcript and infer the structure; long reads can read the whole transcript and know the structure directly.

\[Pause.\]

The killer demonstrations of long reads, in the public imagination, have been the assembly of complete bacterial genomes from a single MinION flow cell — circular chromosomes closed in one read, no gaps, no ambiguity — and the resolution of complex disease loci in human genetics. The HLA region, on chromosome 6, is one of the most polymorphic and most repetitive regions in the human genome, and it controls transplant compatibility, autoimmune susceptibility, and immune response. Short reads can never properly phase HLA. Long reads can read across the entire HLA region in a single molecule, giving you full haplotypes — what you actually need for clinical transplant matching.

How long can the reads get? Routinely, with good library prep, you get an N50 read length of around 30 to 50 kilobases — meaning half your bases are in reads longer than 30 to 50 thousand bases. With ultra-long library prep, you can push the N50 to several hundred kilobases. The longest single nanopore read on record, as of writing, is over four million bases — longer than several entire bacterial genomes, read in a single uninterrupted molecule taking about four hours to translocate through one pore.

\[Pause.\]

Read length is, in the end, the feature that most clearly distinguishes nanopore from short-read sequencing. It's the reason long-read platforms exist as a category. It's the reason you can't replace nanopore with cheap Illumina sequencing even though Illumina is cheaper per base. And it's the reason the reference genomes of every major organism are being redone, in the 2020s, with long-read data — because the short-read genomes that anchored the field for the previous twenty years were quietly riddled with errors and gaps in every repetitive region.

If you take one technical fact from this lecture, take this: **nanopore reads are routinely a hundred to a thousand times longer than Illumina reads, and that single fact unlocks a whole category of biological problems that short reads simply cannot solve**. Read length is the killer feature.

---

\[BREAK\]

\[This is the planned mid-lecture break, roughly one hour in. Take ten minutes. When we come back we'll cover direct RNA sequencing — a completely unique capability of nanopore — and then methylation calling, adaptive sampling, error rates, clinical and field applications, and the future of the technology.\]

---

## SEGMENT 10 — Direct RNA sequencing: reading the native molecule

Welcome back. We're going to use the second hour to cover the other distinctive capabilities of nanopore — the ones that go beyond just sequencing DNA — and then end with the clinical, field, and future contexts. Let's start with what I think is the most genuinely unique capability nanopore offers: the ability to read native RNA directly.

Here's why this is a big deal. Every other RNA-sequencing technology on the planet starts by **reverse-transcribing** the RNA into complementary DNA, then sequencing the cDNA. Illumina RNA-seq does this. PacBio Iso-Seq does this. Even bulk RNA quantification methods like RT-PCR do this. The reason is that historically, the sequencing hardware could only handle DNA — DNA polymerases, DNA primers, DNA chemistry. RNA is more fragile, single-stranded by default, and has a 2-prime hydroxyl that makes it less stable. So you convert it to DNA first, and you sequence DNA.

The problem with this approach is that **you lose information** in the conversion step. Real cellular RNA is decorated with chemical modifications — methylations, pseudouridines, inosines, m6A marks, m5C marks, and many others. These modifications are biologically important. They affect how messenger RNAs are translated, how transfer RNAs fold, how the cell regulates gene expression. They are, collectively, called the **epitranscriptome** — the layer of chemical decoration on top of the basic RNA sequence — and they're a hot area of research because we're only just beginning to understand what they all do.

When you reverse-transcribe RNA into cDNA, you erase all of those modifications. The reverse transcriptase reads the RNA base — A, U, G, or C — and writes the corresponding cDNA base — T, A, C, or G. The modification gets dropped. The methyl group on an m6A becomes just an A. The pseudouridine becomes just a U. The information about which positions were modified is destroyed, and downstream you can't recover it without doing separate, specialized experiments for each modification type.

\[Pause.\]

Nanopore is different, because nanopore doesn't have to convert RNA to DNA. The pore can read RNA directly. You attach a custom adapter — with a motor protein pre-loaded — to the 3-prime end of your RNA. You load the result onto the flow cell. The motor grabs the RNA, threads it through the pore in the 3-prime to 5-prime direction, and the current signal encodes the RNA sequence.

Now here's the beautiful part. The chemical modifications on the RNA — the methyl groups, the pseudouridines, the m6A marks — also affect the current signal as the modified bases pass through the pore. A regular A and an m6A have slightly different chemistry, slightly different size, slightly different interactions with the pore walls. They produce slightly different current signatures. With the right basecaller — and basecallers specifically trained to detect modifications are now publicly available, both from Oxford Nanopore and from third parties — you can call the modifications directly from the current signal.

\[Pause.\]

Here's the analogy. Imagine you're identifying coins by their thickness with a sensitive caliper. A regular penny is one thickness. A penny with a tiny sticker on it is a fractionally different thickness. If your caliper is precise enough, you can tell them apart. Now generalize: every modified base has its own characteristic "thickness" — its own current signature — and a nanopore pore is precise enough to distinguish them.

So with direct RNA sequencing on a nanopore, you get the RNA sequence and a map of where the modifications are, in one experiment, from native molecules, with no enzymatic conversion to erase the information. This is the only sequencing technology that can do this. Nothing else comes close.

\[Pause.\]

There are practical limitations. Direct RNA sequencing is currently slower and lower-throughput than DNA sequencing — the motors that work with RNA are different from the ones used with DNA, and they tend to be slower, and the chemistry has been less aggressively optimized. Read accuracy on RNA is also a bit worse than on DNA — historically around 90 percent on R9, somewhat better on newer chemistries. And the input requirements are higher, because you can't amplify RNA without losing the modifications. So direct RNA is, today, used by relatively specialized labs studying the epitranscriptome — virology labs sequencing native viral RNA, neuroscience labs studying m6A in the brain, mRNA therapeutics companies validating their products.

But the capability exists, and the application space is growing fast. The COVID-19 pandemic gave direct RNA sequencing a real-world stress test — SARS-CoV-2 is an RNA virus with a 30 kilobase genome, and direct RNA sequencing on a MinION was used by several labs to read the entire viral genome from infected cells, including post-transcriptional modifications, in a single experiment. That kind of comprehensive viral characterization was unavailable on any other platform.

\[Pause.\]

Beyond modifications, direct RNA sequencing also reads the **poly-A tail** of every messenger RNA, including its exact length. Poly-A tail length is biologically regulated — it controls mRNA stability and translation efficiency — and most RNA-sequencing methods either truncate it or normalize it during library prep. Direct RNA preserves it. You can measure poly-A tail length distributions across thousands of transcripts in a single experiment.

You can also read **full-length transcripts**, including all the alternative splicing patterns, in a single molecule. Short-read RNA-seq has to infer splicing from junction reads, which gets ambiguous for complex transcripts with many possible splice forms. Direct RNA reads the whole transcript end to end, so you see exactly which exons were included in that particular molecule.

The core takeaway: **direct RNA sequencing is a capability nanopore has and nothing else has.** It reads native molecules. It preserves modifications. It captures full-length transcripts with poly-A tails. For research questions about the epitranscriptome, about regulatory RNA biology, about post-transcriptional control, nanopore is, frankly, the only game in town.

---

## SEGMENT 11 — Methylation calling: the free epigenetic side product

Speaking of modifications: let's talk about DNA methylation, which is, in my view, the most underappreciated nanopore feature. It's so good that I'd argue most users get it without even knowing they're getting it. They sequence DNA, they hand the data to a basecaller, and out comes the sequence — plus a complete methylation map of every methylatable position in the genome, included free of charge.

Let me back up and explain what DNA methylation is. In addition to the four standard DNA bases — A, T, G, C — your cells carry around modified versions of those bases at specific positions. The most common modification in mammalian genomes is **5-methylcytosine**, abbreviated 5mC. It's just a cytosine with an extra methyl group attached to the fifth carbon of the pyrimidine ring. From a chemical standpoint it's a small change. From a biological standpoint it's massive: 5mC is the central mark of epigenetic regulation in mammals. It silences genes. It marks tissue identity. It changes with age. It goes haywire in cancer. The pattern of 5mC across the genome — the methylome — is a major axis of regulation, comparable in importance to the underlying DNA sequence.

There are other DNA modifications too — 5-hydroxymethylcytosine, 6-methyladenine — but 5mC is the big one for mammals.

\[Pause.\]

To measure 5mC, you traditionally have to do a specialized experiment called **bisulfite sequencing**. The idea is clever: bisulfite is a chemical that converts unmodified cytosines into uracils, but leaves 5mC untouched. So you treat your DNA with bisulfite, sequence the result, and any position where you see a C in the bisulfite-treated read was a 5mC in the original; any position where you see a T was an unmodified C. The math works. But the chemistry is brutal — bisulfite treatment is harsh, it fragments DNA, it introduces errors — and it requires a completely separate experimental workflow from regular sequencing. You can either sequence the bases or sequence the methylation, but not both at once. And bisulfite sequencing data is fundamentally short-read data, because the bisulfite damage limits read length.

Nanopore changes all of this. Because the pore reads the actual chemistry of the bases as they pass through, **a 5-methylcytosine produces a different current signal than a regular cytosine**. The methyl group is a real physical thing — it adds a tiny amount of mass and changes the local interactions with the pore — and the current signature reflects it. With a basecaller trained to recognize modified bases, you can call 5mC directly from the current trace, at every cytosine position in the genome, in a single experiment, from native DNA, with no separate workflow.

\[Pause.\]

Here's the analogy. Imagine you're a postal worker sorting envelopes by feel. A standard envelope and an envelope with a wax seal on the back feel different — the seal is a small bump, but distinct. If you handle enough envelopes you can learn to detect the bump reliably. That's nanopore methylation calling. The methyl group is the wax seal. The pore feels it. The basecaller learns the pattern. You get methylation for free, baked into the same read that gives you the sequence.

This is, I think, the single biggest practical advantage nanopore has for clinical and research applications that care about epigenetics. Bisulfite sequencing is a pain. Whole-genome bisulfite sequencing on Illumina costs more than regular sequencing and gives you short reads only. Nanopore gives you whole-genome methylation in long reads, at the same time as you get the sequence, in a single library prep, for the same price as regular DNA sequencing.

\[Pause.\]

There are real applications driving this. **Cancer methylation** is one of the most active areas — tumor cells have characteristic methylation changes that distinguish them from normal cells, and these changes can be diagnostic, prognostic, and therapeutic targets. **Brain tumor classification** in particular has been transformed by methylation profiling, with methylation patterns being used clinically to subtype tumors better than histology can. **Cell-free DNA in blood** carries methylation signatures from its tissue of origin, opening the door to liquid biopsies that can detect cancers from a blood draw based on the methylation patterns of the tumor-derived DNA fragments. **Imprinting disorders** — diseases where the methylation patterns inherited from each parent are abnormal — can be diagnosed by phased methylation analysis, which requires long reads to assign methyl marks to the maternal versus paternal allele.

In every one of these cases, nanopore's combined sequence-plus-methylation output, in long reads, is a real practical advantage. You don't have to run two experiments. You don't have to align two separate datasets. The methylation is right there in the same read as the sequence.

\[Pause.\]

There are caveats. Methylation calling accuracy from nanopore is good but not perfect — modern R10.4 basecallers call 5mC with about 95 to 98 percent accuracy at individual positions, and consensus accuracy improves with coverage. For most applications this is sufficient. For some very precise applications — measuring small changes in methylation between samples — you may want bisulfite as a confirmatory experiment. But for the broad strokes of methylome characterization, nanopore is now competitive with or better than bisulfite, especially when you factor in long-read advantages like haplotype-resolved methylation.

So the takeaway: methylation calling is, on nanopore, **a free side product of regular sequencing**. You don't pay extra for it. You don't do extra work for it. You just get it, in every read, for every cytosine position in the genome. This is one of those rare cases in technology where a single platform happens to give you two valuable measurements at once, and the second measurement was almost an accident of physics — the pore was already going to be sensitive to chemical modifications, because that's how it reads the bases at all.

---

## SEGMENT 12 — Adaptive sampling: real-time decisions while sequencing

Now I want to tell you about a feature that I think is the cleverest software-side innovation in nanopore sequencing — something that no other platform can do, because no other platform has the right combination of real-time data and individually-controllable channels. It's called **adaptive sampling**, and it lets you make decisions about which reads to keep and which to throw away, while the sequencing is happening.

Here's the setup. You're running a MinION. It has 1500 active pores, each one independently sequencing a different DNA molecule, all in parallel. Each pore is producing current signal in real time, which gets basecalled in real time, into base sequence in real time. Now imagine that as each read starts, you can — within a few seconds — get a rough basecall of the first few hundred bases of that read, align it against a reference genome, and figure out where in the genome this read came from.

If you don't care about reads from this region — say, you're trying to enrich for a specific disease gene, and this read came from an unrelated region of the genome — you can **reject the read**. The flow cell software sends a quick voltage reversal to that particular pore. The voltage reversal pushes the DNA molecule back out of the pore, ejecting it into the cis-side chamber. The pore is now free again, immediately, to capture a new molecule, which might or might not be from a region you care about. If the new one is also uninteresting, you eject it too. If it's interesting, you let it sequence to completion.

This is **adaptive sampling**, sometimes called read-until or selective sequencing. It is, I think, one of the most distinctive software features in the entire sequencing world.

\[Pause.\]

Here's the analogy. Imagine you're a librarian sorting books returned to the library. Each book takes about an hour to fully catalog. But you have a hundred books to process and only enough time to fully catalog ten of them. What you'd like is a way to skim the title page of each book in five seconds — just enough to decide whether this is a book you care about — and either keep it for full processing or put it back in the return bin to make room for the next one.

That's exactly what adaptive sampling does for sequencing. The flow cell can capture a molecule, sequence the first few hundred bases, basecall them, align them, and decide — in about two seconds — whether this is a molecule worth fully sequencing. If yes, let it complete (which might take several minutes for a long read). If no, eject it and capture another one. Over the course of a long sequencing run, you can effectively enrich for the regions of the genome you care about by a factor of ten or more, without doing any wet-lab enrichment step.

\[Pause.\]

This is genuinely unique to nanopore, for two reasons. First, the data is real-time — the basecaller is running while the read is being acquired, not afterward. No other major sequencing platform produces real-time basecalls during the run. Illumina has to wait until all cycles complete before doing anything with the data. PacBio basecalls per ZMW well but doesn't make decisions about whether to continue. Second, the pores are individually controllable — you can reject one molecule from one pore while letting the molecule in the next pore continue undisturbed. The voltage on each pore is independently switchable. So you can make per-molecule decisions in real time.

The combination of those two — real-time basecalling and per-pore voltage control — is what makes adaptive sampling possible, and it's a combination that other platforms simply don't have.

\[Pause.\]

The applications are striking. **Targeted enrichment** without capture probes: if you want to sequence the BRCA1 and BRCA2 genes from a patient's blood, you can program adaptive sampling to keep only reads that align to those genes, ejecting everything else. You get effective enrichment of 10x to 100x without any wet-lab capture step, which would normally take hours and cost extra reagents. **Negative selection**: if you're sequencing a microbial sample but you have a lot of host contamination — like sequencing the microbiome of a stool sample where most of the DNA is from human cells — you can reject all the human reads and concentrate sequencing capacity on the microbial DNA. **Depth control**: if you're trying to get exactly 30x coverage of a particular region for variant calling, you can adaptively sample to stop sequencing the region once you've hit your target coverage, freeing capacity for other regions.

In every case, the adaptive sampling is happening in real time, on the same flow cell, with no extra hardware required. It's purely software running against the live data stream from the device.

\[Pause.\]

The software side of this has matured rapidly. Early adaptive sampling implementations from around 2019 used homegrown read-until scripts running against the MinION's API. Modern implementations are well-tooled — there are software packages like Readfish, the MinKNOW built-in adaptive sampling support, and various third-party tools that make it easy to set up an adaptive sampling experiment without writing custom code. You just provide a reference, specify the regions you want to enrich or deplete, and the software handles the rest.

The combined effect of adaptive sampling, when it works well, is to multiply the effective throughput of a flow cell for your specific question. If you care about 1 percent of the genome, adaptive sampling can effectively give you 50x to 100x more coverage of that 1 percent than you'd get from random sampling. That's a real-time, software-only enrichment factor that no other platform can match.

This is one of the underappreciated arguments for nanopore in clinical and research settings: not just that it's a long-read sequencer, but that it's a long-read sequencer with software-controllable per-molecule decision-making baked in. That's a fundamentally different machine than anything Illumina or PacBio ships.

---

## SEGMENT 13 — Error rate over time: from 30% in 2014 to under 1% with R10.4 duplex

I want to give you a more honest history of nanopore accuracy than you'll get from the marketing materials, because the accuracy story is genuinely dramatic and it's central to understanding whether the technology is right for any particular application.

When the MinION first shipped to early-access users in 2014, the raw read accuracy was around 65 to 70 percent — meaning roughly one in three bases in any individual read was wrong. For some applications, even that was tolerable; you could assemble a bacterial genome from many low-accuracy reads by majority voting at each position, and the consensus would be much better than any single read. But for any application that needed accurate single-read calls — variant calling, methylation detection, anything where you couldn't easily get high coverage — that error rate was a non-starter.

The community used the MinION anyway, because long reads at 30 percent error were still better than nothing for problems like assembling repetitive bacterial genomes or characterizing structural variants. There was a real risk, in the early years, that nanopore would be permanently relegated to a niche of low-accuracy, long-read applications, while Illumina and PacBio dominated everything else. Several rounds of chemistry and software improvement have changed that picture completely.

\[Pause.\]

Let me walk you through the trajectory.

R7 chemistry, 2014. Raw accuracy: about 65 to 70 percent. Basecalling: HMM-based, primitive. This was the era of "you can sequence anything but you have to bring your own error tolerance."

R9 chemistry, 2016. Raw accuracy: about 85 to 90 percent on the best reads. Basecalling: first generation of neural network basecallers, BiLSTM-based. This is when nanopore started becoming usable for real research applications. The error mode at this point was dominated by problems with homopolymers — runs of the same base, where the current sits at a constant level and the basecaller can't reliably count how many bases were there. Inserting and deleting bases in homopolymer runs was the most common error type.

R10 chemistry, 2019. The dual-reader-head design. Raw accuracy: about 92 to 95 percent. The dual readers specifically targeted the homopolymer problem — by measuring each base at two slightly different positions in the pore, the basecaller could disambiguate run lengths more reliably. Homopolymer accuracy improved dramatically.

R10.4 chemistry, 2021 to present. Refined dual-reader pore, refined motor, refined basecaller. Raw accuracy: about 99 percent for single reads, with **duplex** consensus pushing well above 99.5 percent and approaching the Q30 quality threshold that historically only Illumina achieved.

\[Pause.\]

That trajectory — from 70 percent to 99 percent in less than a decade — is one of the most dramatic technology improvement curves in the history of sequencing. For comparison, Illumina accuracy has been roughly stable at 99.9 percent for over a decade now; there's been no equivalent improvement curve because there was no room to improve. Nanopore had a long way to climb, and it has climbed most of it.

The thing I want to emphasize is that this improvement has come from **both hardware and software**. The pore chemistry got better — R7 to R9 to R10 to R10.4, each generation with sharper sensing geometry and better baseline currents. The motors got better — more stable stepping, fewer skipped bases, fewer stutters. The basecallers got better — from HMMs to BiLSTMs to CTC-based architectures to transformer-based architectures. Each of these axes contributed to the accuracy gains.

\[Pause.\]

Here's the analogy. Imagine you bought a low-end digital camera in 2005. The pictures were grainy, the colors were off, the autofocus missed half the time. If that same camera company kept improving the sensor, the lens, the autofocus algorithm, and the image processing pipeline over the next decade, you might end up with a camera in 2015 that took DSLR-quality pictures from the same form factor. That's roughly what's happened with nanopore. The form factor — a USB-stick-sized device — is the same. The pores and motors and basecallers have all been independently improving. The output quality has gone from grainy snapshot to publication-grade image.

There's one more accuracy concept I should mention because it gets cited in papers all the time: **Q-scores**. Q is a logarithmic measure of error probability. Q10 means 10 percent error. Q20 means 1 percent error. Q30 means 0.1 percent error. Q40 means 0.01 percent error. Illumina has typically produced Q30 to Q35 data. Nanopore in 2014 produced about Q5 data. Nanopore in 2024 with R10.4 duplex produces around Q25 to Q30 data — competitive with Illumina for most purposes, and better when you factor in the long reads.

\[Pause.\]

The honest current state: nanopore accuracy is no longer the limiting factor for most applications. There are still some applications where you really want sub-0.1 percent error rates, and for those you might still prefer Illumina for short variants or PacBio HiFi for long-read variants. But for genome assembly, structural variants, methylation, RNA, full-length transcripts, native modifications — nanopore is now at a point where the accuracy is sufficient and the unique features dominate the decision.

If you read a nanopore paper from 2016 and a nanopore paper from 2024, you are reading about two different technologies. Don't extrapolate from old reputations. The error rate has dropped by a factor of 50 in less than a decade. That's the technology improvement story.

---

## SEGMENT 14 — Clinical applications: pathogens, structural variants, methylomes

Let's switch from technology to application. Nanopore has found its strongest clinical footholds in three areas: pathogen identification, structural variant detection, and methylome-based diagnostics. Each one exploits a specific nanopore feature.

**Pathogen identification.** This is, I think, the most mature clinical use of nanopore today. The setup: a patient comes into the clinic with an unidentified infection. Could be bacterial. Could be viral. Could be fungal. Could be a parasite. You want to know what's growing in them, as fast as possible, so you can start the right treatment. Traditional clinical microbiology takes days to weeks — culture the organism, do biochemical tests, send samples to a reference lab. Nanopore can give you an answer in hours.

The workflow: extract DNA or RNA from a clinical sample — blood, CSF, sputum, whatever's appropriate. Use the rapid kit to make a library in 10 minutes. Load onto a flow cell. Within the first few minutes of sequencing, you start getting reads. You align them in real time against a database of known pathogen genomes. The species that match are your candidates. Within an hour or two, you typically have a confident species call, sometimes a strain call, and even early reads of antibiotic resistance genes if any are present on the pathogen genome.

This kind of metagenomic clinical diagnosis is now in routine use in several major hospitals for cases of unknown CNS infections, complex pneumonia, and fever of unknown origin. It's also been deployed for outbreak investigations — sequencing patient samples and contact samples in real time during an outbreak to track transmission chains.

\[Pause.\]

**Structural variants in clinical genetics.** This is the area where nanopore's long reads pay off most clearly in mainstream medical genetics. Many genetic diseases are caused not by single-base mutations but by large rearrangements — deletions or insertions or inversions of thousands or millions of bases. Short-read sequencing struggles to detect these because the breakpoints often fall in repetitive regions and the rearranged segments are longer than any individual short read. Long reads catch these variants directly.

Specific examples include the **FMR1 repeat expansion** that causes Fragile X syndrome — a repeat of CGG that expands from a normal length of around 30 copies to over 200 in disease. The expanded repeat is hard for short reads to size accurately. Nanopore can read across the entire expanded repeat in a single read and count the copies directly. The **C9orf72 repeat expansion** that causes ALS and frontotemporal dementia is similar — a hexanucleotide repeat that expands into the thousands of copies in disease, sized accurately only by long reads. **Repeat expansion disorders** more generally — myotonic dystrophy, several spinocerebellar ataxias, Huntington's disease — are all candidates for nanopore-based clinical sizing.

Then there are **large structural rearrangements in cancer**. Many cancers carry fusions, translocations, or large deletions that drive the disease. Detecting these and characterizing them at base-pair resolution requires reads that span the breakpoints, which often means nanopore long reads.

\[Pause.\]

**Methylome diagnostics.** This is the newest clinical application area, and it's growing fast. Brain tumor classification is the headline use case: tumor methylation patterns are now used clinically to distinguish tumor subtypes that traditional histology cannot reliably separate. Several centers have demonstrated that nanopore sequencing of fresh tumor tissue during surgery can produce a methylation-based classification within an hour — fast enough to influence surgical decisions in real time. That's a genuine workflow change that no other sequencing technology can support, because the combination of speed, methylation calling, and minimal sample prep is unique to nanopore.

There are also applications in cell-free DNA analysis — sequencing the small fragments of DNA shed into the blood by cells throughout the body, including tumor cells. The methylation patterns of these fragments encode their tissue of origin, allowing detection and rough localization of cancers from a blood draw. Nanopore can sequence and methylation-call these fragments in the same workflow, opening up liquid biopsy applications that previously required separate experiments.

\[Pause.\]

The general clinical theme: nanopore is finding its strongest niches in problems where **speed**, **long reads**, or **methylation** matter more than absolute lowest cost per base. For routine clinical sequencing where you just need to call SNPs accurately in a million samples per year, Illumina remains dominant. But for time-critical, complex, or methylation-dependent applications, nanopore is increasingly the platform of choice. The clinical adoption curve is currently steep — the technology has only really matured in the last few years, regulatory pathways are being established, and the next decade should see substantial expansion of nanopore in clinical settings.

---

## SEGMENT 15 — Field applications: Ebola, COVID, the Amazon, the ISS

Now let me tell you the stories that made nanopore famous beyond the sequencing community — the ones that put MinIONs in tents and field stations and spacecraft and demonstrated that sequencing could finally escape the lab.

**Ebola, 2015.** The first major real-world deployment of MinION was during the West African Ebola epidemic. A team led by Nick Loman at the University of Birmingham brought MinION sequencers to a treatment center in Guinea and set up a mobile sequencing lab in a small tent. They sequenced viral RNA from patient samples on-site, with results available in hours rather than the weeks it would have taken to ship samples to Europe. The sequencing data was used to track viral evolution in real time during the outbreak — which strains were circulating, how they were mutating, which patient samples were epidemiologically linked. This was the first time real-time genomic epidemiology had been done in the field during an active outbreak. It established a model for using portable sequencing as a public health tool.

**Zika, 2016.** A similar approach was deployed during the Zika outbreak in Brazil. MinIONs were used to sequence Zika virus genomes from mosquito samples and patient samples across multiple countries, tracking the geographic spread and evolution of the virus in near-real-time. The phylogenetic analyses that came out of those efforts informed public health responses across the Americas.

**COVID-19, 2020 to present.** This is where nanopore went truly mainstream. When SARS-CoV-2 emerged in early 2020, the world needed massive amounts of viral genome sequencing — to track variants, to monitor evolution, to inform vaccine updates. The ARTIC Network protocol, originally developed for Ebola and adapted for SARS-CoV-2, used a combination of multiplex PCR and nanopore sequencing to produce complete SARS-CoV-2 genomes in a single day from clinical samples, on a MinION, in any lab with a flow cell and a laptop. This protocol was deployed worldwide. According to Oxford Nanopore's own figures, around a quarter of all SARS-CoV-2 genomes deposited in public databases during the pandemic were sequenced on their platforms. The Alpha, Delta, and Omicron variants were all characterized using nanopore as one of the primary sequencing modalities.

\[Pause.\]

**The Amazon and other remote field sites.** MinIONs have been used in mobile sequencing labs in rainforests in Brazil and Ecuador, on research vessels in the Atlantic and Pacific, in Antarctic research stations, in the Sahara, in remote Pacific islands. The use cases include biodiversity surveys — sequencing environmental DNA samples to catalog the species living in remote ecosystems — and pathogen surveillance for wildlife diseases. The form factor of the MinION — laptop-sized, requires only a laptop and a few reagent kits — makes it the only sequencer that can plausibly be carried into these settings.

**The International Space Station, 2016.** This is the most striking deployment story. In July 2016, NASA astronaut Kate Rubins took a MinION to the ISS as part of the Biomolecule Sequencer project, run by NASA's Johnson Space Center. The goal was to test whether nanopore sequencing could work in microgravity — a non-trivial question, because many laboratory techniques fail in zero-g due to bubble formation, mixing problems, and other physics issues. The MinION worked. Rubins sequenced E. coli, lambda phage, and mouse genomic DNA in orbit, with data quality essentially indistinguishable from ground-based runs. This established the first space-based sequencing capability and opened the door to in-flight pathogen identification, microbial monitoring of spacecraft environments, and eventually — perhaps — sequencing samples from other worlds.

\[Pause.\]

Here's the analogy I want to leave you with for this segment. For most of the history of DNA sequencing, the sequencer has been a piece of equipment that lives in a particular kind of building — a clean, climate-controlled molecular biology lab with reliable power, plenty of bench space, and a trained operator. Samples have had to come to the sequencer. The MinION inverts this. The sequencer is now small enough, cheap enough, and rugged enough to come to the sample.

That inversion changes what's possible. Outbreaks can be characterized at the bedside instead of two weeks later from a reference lab. Biodiversity samples can be sequenced where they're collected, without preserving them for shipment. Astronauts can sequence their own gut microbiome in orbit. The form factor is the policy. By making the sequencer small and portable, nanopore has changed the economics and the logistics of when and where DNA sequencing can be done.

And those changes — small and cumulative — are likely the most consequential long-term contribution of the technology, more than the long reads, more than the methylation, more than any individual technical advantage. Sequencing has escaped the lab. That's a big deal.

---

## SEGMENT 16 — The price-and-platform model: buy the MinION cheap, pay per flow cell

Let me take a brief detour through the business model, because the way Oxford Nanopore prices and distributes its technology is unusual in the sequencing world and is part of why the platform has achieved the field deployment story I just described.

Most sequencing companies make their money from instrument sales. You buy an Illumina NovaSeq for a million-plus dollars, and Illumina makes a substantial margin on that sale. They also make money on the consumables — the flow cells, the reagents — but the capital sales are a major revenue line. The customers are typically large institutions that can afford the capital cost.

Oxford Nanopore took the opposite approach. The MinION instrument itself is sold for around a thousand dollars — almost at cost, maybe even below it. The money is made on the **flow cells**, which are the per-experiment consumables. A MinION flow cell sells for around 500 to 900 dollars depending on configuration and volume. A PromethION flow cell is more expensive. The flow cells are the recurring revenue.

\[Pause.\]

Here's the analogy. This is the **razor-and-blades model**, applied to sequencing. The MinION is the razor. The flow cell is the blade. You buy the razor once, cheaply. You buy the blades every time you sequence. The company makes most of its money on the blades.

This pricing model has two consequences. First, it dramatically lowers the barrier to entry. A research group, a high school lab, a startup company, a clinician in a small clinic — anyone with a thousand dollars and a laptop can become a sequencing-capable operation. You don't need institutional capital. You don't need a core facility. You just buy the device and order flow cells as you need them. This is what enabled the geographic spread of MinIONs — they could go to places where nobody could justify the capital cost of an Illumina machine.

Second, the recurring revenue per user can be substantial if the user runs a lot of experiments. A lab that runs one MinION flow cell per week is spending around 25,000 to 50,000 dollars per year on consumables — a significant fraction of what they'd spend on a more expensive instrument's consumables. So Oxford Nanopore can be a high-revenue customer for individual users, even though the up-front capital is low.

\[Pause.\]

There are a few wrinkles in the model worth knowing. There's a **starter pack** that bundles the MinION with a starter flow cell and some library prep reagents, typically for around 1000 dollars total — that's the most common entry point. Bulk discounts apply for larger orders. PromethION flow cells are sold separately and at higher unit prices, since they're larger and produce more data per cell. Flongle flow cells are cheaper per cell but produce much less data.

There's also a flow cell **wash kit** that lets you reuse a flow cell for multiple experiments if you didn't use up all the available pores in a single run. The wash kit dissolves any residual DNA from the pores and lets you load a new sample. This stretches the per-flow-cell economics if you have multiple small experiments to run. It's a small thing but it adds up for users running lots of small samples.

\[Pause.\]

The strategic effect of the pricing model has been to seed a very large global user base. Tens of thousands of MinIONs are now in the field — in research labs, in clinics, in field stations. That installed base creates network effects: more users means more shared protocols, more open-source software tools, more community knowledge. The Nanopore Community forum, the various GitHub repositories of analysis tools, the published protocols — all of these are larger and more vibrant than they would be if MinIONs cost a hundred thousand dollars each.

The downside of the pricing model is that per-base sequencing costs on nanopore are higher than on the bigger Illumina machines. If your only metric is dollars per gigabase, Illumina wins, especially at the high end where NovaSeq economics favor concentrated, high-throughput runs. Nanopore is more expensive per base when amortized over large production runs, and that's the trade-off the company has chosen — accessibility over per-base cost.

For most users, this trade-off works out fine. The applications that need nanopore tend to be applications where the unique features matter — long reads, methylation, real-time, portability — and where the cost premium is worth paying. For applications that are purely about cheap short-read sequencing at maximum scale, Illumina remains the obvious choice. That market segmentation is now stable. Oxford Nanopore isn't trying to win the per-base cost race; they're winning the accessibility and capability races.

---

## SEGMENT 17 — Comparison with PacBio: the two long-read platforms head-to-head

A natural question to ask, having spent fifteen segments on nanopore: how does it compare with the other major long-read sequencing platform, PacBio? Both nanopore and PacBio produce reads dramatically longer than Illumina. Both have their strongest applications in assembly, structural variants, and full-length transcripts. They're often spoken of together as "the long-read platforms." But they are, technologically, completely different machines, and the comparison is instructive.

PacBio — Pacific Biosciences — uses a technology called **single-molecule real-time sequencing**, or SMRT sequencing. The fundamental unit is a tiny well, called a zero-mode waveguide, etched into a glass chip. Inside each well there's a single DNA polymerase enzyme. The polymerase synthesizes a complementary strand of DNA from a circular template, and as it incorporates each fluorescent nucleotide, a brief flash of one of four colors is detected by a camera. The DNA template is circular — you ligate hairpin adapters onto both ends of your DNA fragment to make a closed loop, called a SMRT-bell — and the polymerase goes around the loop multiple times, sequencing the same fragment over and over to build up high-confidence consensus reads. That's PacBio HiFi, the current high-accuracy mode, with raw accuracy above 99 percent per pass and consensus accuracy approaching Q40.

\[Pause.\]

So the philosophical contrast is sharp. PacBio is still a synthesis-based technology — there's a polymerase, there's fluorescence, there's a camera, there are fluorescent nucleotides — it's just that the polymerase is observed in real time at single-molecule resolution. Nanopore has none of that. No synthesis. No fluorescence. No camera. Just a strand pulled through a hole and a current measurement.

Practically, the two platforms have different strengths.

**Read length.** Nanopore wins on maximum read length. PacBio HiFi reads max out around 25 kilobases. Nanopore routinely produces reads of 100,000 bases, and ultra-long protocols push to a million bases or more. For applications that need the very longest reads — assembling through centromeres, traversing massive structural variants — nanopore is the better choice.

**Per-read accuracy.** PacBio HiFi wins on per-read accuracy. The consensus reads from circular sequencing reach Q35 to Q40, comparable to Illumina, with median accuracy above 99.9 percent. Nanopore single-read accuracy with R10.4 duplex reaches around Q25 to Q30, very competitive but still slightly below HiFi. For applications that need the highest possible per-read accuracy in long reads — particularly small variant calling in long reads — PacBio HiFi is preferred.

**Throughput per dollar.** PacBio has a higher capital cost and higher per-run cost but produces more data per run on their larger machines. Per gigabase, PacBio is competitive with nanopore PromethION but more expensive than Illumina. Nanopore MinION is more expensive per gigabase but accessible at much lower capital cost.

**Portability.** Nanopore wins overwhelmingly. The MinION is the only sequencer of any kind that's actually portable. PacBio's smallest instrument is a benchtop machine that weighs hundreds of pounds and requires a fixed lab setup.

**Real-time.** Nanopore wins. The data comes out during the run. PacBio you have to wait for the run to complete to get useful data.

**Direct RNA, methylation.** Nanopore wins. Both platforms can detect modifications, but nanopore can read native RNA directly while PacBio requires conversion. Nanopore's methylation calling is now mature and integrated; PacBio's is improving but less integrated.

**Read length distribution.** PacBio HiFi has tighter, more controllable distribution. Nanopore is a wider distribution that includes some very long reads and some shorter ones, depending on input DNA quality.

\[Pause.\]

Here's the analogy that I think captures the comparison best. PacBio is a Swiss watch — exquisitely engineered, very accurate, requires careful handling, expensive. Nanopore is a multi-tool — versatile, scrappy, works in unconventional settings, sometimes less precise on any individual function but capable of an unusually wide range of jobs. Different tools for different problems.

In practice, many of the most important genome assembly papers in the last few years have used **both platforms together**. PacBio HiFi for high-accuracy contigs, nanopore ultra-long for spanning the longest repeats. The combination produces results neither platform could achieve alone. The T2T human genome assembly I mentioned earlier was a PacBio-plus-nanopore project. Many large-scale animal and plant reference genome projects today use both.

So the right frame is not nanopore versus PacBio but nanopore and PacBio as complementary tools that together cover the long-read sequencing space, with Illumina dominating short reads underneath both of them. Each technology has its niche. The good experimentalist picks the right tool for the question.

---

## SEGMENT 18 — The future: solid-state pores, faster motors, fully consumable instruments

Let's end with a look forward, because nanopore is a technology that's still actively evolving and the next decade is likely to be as eventful as the last one.

There are four major axes of likely improvement, and I want to walk through each one.

**Solid-state pores.** Today's nanopores are biological — engineered proteins embedded in lipid membranes. Biological pores have advantages: precision-engineered constrictions, evolved selectivity, reproducible chemistry. But they also have limits: lipid membranes are fragile, biological pores degrade over time, and the pore chemistry can only be modified within the constraints of protein engineering. **Solid-state pores** would replace the biological pore with a hole etched into a synthetic membrane — silicon nitride, graphene, MoS2, or other materials. The advantages would be durability, longer flow cell lifetimes, smaller and tunable hole sizes, and potential for direct integration with electronic chips.

Solid-state nanopore sequencing has been an active research area for over a decade, and several academic and startup efforts have demonstrated proof-of-principle. The challenges are real: it's hard to fabricate solid-state pores with the same sub-nanometer precision that biology achieves, and the noise characteristics of solid-state pores have historically been worse than biological pores. But progress is steady, and the long-term betting in the field is that solid-state will eventually become competitive with or replace biological pores, at least for some applications.

\[Pause.\]

**Faster motors and higher throughput.** Today's motor proteins step at around 400 to 450 bases per second. The bottleneck is the chemistry of motor stepping and the requirement that the current signal be resolvable. If you can engineer faster motors and signal-processing pipelines that resolve faster signals, you can push throughput up substantially. Each doubling of motor speed roughly doubles flow cell throughput. The trade-off is signal resolution — push the motor too fast and the bases blur together. Finding the right balance is an active engineering problem, and there's room for several more doublings before fundamental physics intervenes.

**Higher accuracy.** As I mentioned in the error-rate segment, R10.4 duplex is already pushing into Q25 to Q30 territory, with Q40 potentially achievable through software improvements alone. There's no reason in principle why nanopore couldn't match Illumina's Q35 to Q40 accuracy in routine use over the next few years. The improvements will come from a combination of better pore chemistry, better motor consistency, better basecalling neural networks, and accumulated training data.

**Fully consumable instruments.** This is the most speculative axis but potentially the most disruptive. Oxford Nanopore has hinted for years at a concept called a **fully consumable sequencer** — a device that's so cheap to manufacture that the whole thing, including the electronics and the flow cell, is disposable. You'd buy the entire sequencer for the price of a flow cell today, use it once, and throw it away. The MinION already comes close — at a thousand dollars per device, it's already disposable for some applications. But a true fully consumable design would push the price down by another order of magnitude or more, opening up applications like single-use clinical diagnostics, ad-hoc field testing, and home sequencing.

\[Pause.\]

There are other possibilities further out: nanopore-based protein sequencing, where instead of reading DNA you thread peptides through engineered pores and read the amino acid sequence; nanopore-based small-molecule detection, using the same pore chemistry but tuned for non-nucleic-acid analytes; integrated multi-omics platforms that combine DNA, RNA, methylation, and protein measurements on a single device. Some of these are speculative; others are being actively prototyped by Oxford Nanopore and competitors.

\[Pause.\]

Here's the analogy I want to leave you with for this segment. In 1980, computers were room-sized machines that lived in university basements. In 2000, they were desktop boxes in every office. In 2020, they were phones in everyone's pocket. The trajectory was driven by Moore's Law — exponential improvement in price-performance — and by relentless miniaturization. Sequencing has been on a similar trajectory. In 2003, sequencing the first human genome cost three billion dollars and took a decade. In 2020, sequencing a human genome cost around a thousand dollars and took a few days. The price-performance has dropped by a factor of about a million over twenty years, faster than Moore's Law.

Nanopore is the platform most aggressively pushing the next stage of that miniaturization. The MinION is the first sequencer that's plausibly "personal" in the way that PCs became personal. The SmidgION concept, if it ever ships, would put a sequencer in a phone. The fully consumable instrument idea, if it works, would put sequencing in disposable cartridges sold at pharmacies. Whether or not those specific products come to market in the next five years, the trajectory points that way.

If sequencing follows computing, then nanopore — small, cheap, real-time, increasingly accurate, embedded everywhere — is what sequencing in 2030 or 2035 looks like, even if the technology that gets there isn't called Oxford Nanopore by then. The conceptual leap from "watch a polymerase build a copy" to "thread the molecule directly through a sensor" was the necessary first step in turning sequencing into something that fits in your pocket. Everything else is engineering.

\[Pause.\]

So that's nanopore sequencing. The strangest, most radically different sequencing technology in the world. The one that doesn't synthesize anything. The one that just reads the molecule directly. The one that came from a napkin sketch on an airplane in 1989, took twenty-five years to reach the market, and then in another ten years has transformed itself from a niche tool with 30 percent error rates into a mainstream platform with capabilities — long reads, native RNA, methylation, portability, adaptive sampling — that no other technology can match.

Whether nanopore eventually wins the broader sequencing market or remains a complementary platform alongside Illumina and PacBio is, I think, an open question. But the technology has earned its place. It has shown that sequencing doesn't have to involve fluorescence and cameras and big benchtop machines. It has shown that you can read DNA the way nature reads it — by physically interacting with the molecule, one position at a time. That's a genuinely new idea in the history of sequencing, and we'll be living with its consequences for decades.

Thanks for your attention. Let's open it up for questions.

---

## APPENDIX

A few items that didn't fit into the lecture flow but are worth knowing if you want to dig deeper.

**Key papers to read.** Deamer and Akeson's 2000 review in _Trends in Biotechnology_ lays out the original concept. The 2008 paper from the Gundlach lab introducing MspA for nanopore sequencing is a landmark, as is the 2012 Cherf et al. paper demonstrating motor-controlled translocation. The 2018 Jain et al. paper "Nanopore sequencing and assembly of a human genome with ultra-long reads" was the proof that nanopore could produce human-grade assemblies. For basecalling, the 2018 paper introducing the Bonito caller and the 2019 paper on the Guppy basecaller architecture are good entry points. For methylation, the 2017 paper from Simpson et al. on nanopolish methylation calling and the 2021 paper on Megalodon are key. For SARS-CoV-2 sequencing, the ARTIC Network protocol paper is essential reading.

**Key software tools.** MinKNOW is the device control and live basecalling software shipped with the instruments. Guppy, Dorado, and Bonito are the production and research basecallers from Oxford Nanopore. Minimap2 is the standard long-read aligner. Medaka is the consensus polishing tool. Nanopolish is the original methylation caller; Megalodon and Remora are the modern ones. Flye, Canu, Hifiasm, and Shasta are commonly used assemblers for long-read data. NanoFilt and NanoPlot are common quality-control tools. Readfish is the community adaptive sampling tool. None of this software is hard to install, and most of it is open source.

**Key data formats.** Raw nanopore data is stored in a format called FAST5 — an HDF5-based binary format containing the raw current signal as well as metadata. The newer POD5 format is replacing FAST5 for better performance. Basecalled data is in standard FASTQ format. Aligned data is in BAM format. Methylation calls are in BAM-format extended with MM and ML tags, an emerging standard for storing modified base calls alongside the underlying sequence.

**Key communities and resources.** The Nanopore Community is the official Oxford Nanopore forum. Twitter/X has an active nanopore community under hashtags like nanopore and longreads. The NCM — Nanopore Community Meeting — and London Calling are the major annual conferences. The bioRxiv long-read sequencing channel has steady new methodology preprints. The Nanopore Sequencing wiki on Oxford's own site is well-maintained. For protocols, the protocols.io platform has many community-contributed nanopore workflows.

**Common pitfalls for new users.** Pore mortality is real — flow cells degrade during use, and after 48 to 72 hours you typically have a small fraction of the original active pores. Library prep matters a lot — input DNA quality, fragment length, and adapter ligation efficiency all dominate the data you get. Basecalling is computationally expensive — modern basecallers require GPUs for reasonable throughput; CPU-only basecalling is slow. Storage adds up — raw FAST5/POD5 data is large; budget for terabytes of storage if you sequence regularly. Always sequence your reference samples first to characterize your local performance, before committing precious clinical samples.

**Glossary refresher.** _Adapter_ — short custom DNA with a motor protein loaded, ligated to the ends of library DNA to enable pore loading. _Basecaller_ — software that converts raw current signal to base sequence. _Duplex_ — sequencing both strands of a double-stranded DNA molecule and combining for higher accuracy. _Flow cell_ — disposable cartridge containing the membrane, pores, and sensing electronics. _k-mer_ — a short window of consecutive bases; nanopore current depends on the k-mer in the pore at any moment. _Motor_ — enzyme attached to the adapter that ratchets DNA through the pore at controlled speed. _N50_ — a measure of read length distribution: half the bases are in reads at least this long. _Pore_ — the engineered protein with a narrow constriction through which DNA threads. _Q-score_ — logarithmic measure of base quality; Q20 means 1 percent error, Q30 means 0.1 percent error. _R10.4_ — the current generation of pore chemistry as of writing.

**One final analogy to take home.** Every other sequencing technology asks the question: how do we build a faithful copy of this DNA and watch the copying happen? Nanopore asks a different question: how do we feel the DNA itself, one base at a time, as it passes through our fingers? That's the conceptual core. It is the only sequencing technology that reads the actual molecule, not a copy. Hold that in mind, and the rest of the technology — pore, motor, current, basecaller, MinION, methylation, RNA, adaptive sampling — falls into place as engineering in service of that one idea.

\[End of lecture.\]


