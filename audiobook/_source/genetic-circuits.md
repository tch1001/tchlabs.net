# Genetic Circuits and Synthetic Biology: Programming Life

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, which gets you very close to a two-hour slot once you allow for questions. (Read faster, around 140 wpm, and it lands nearer 85 minutes, leaving more room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The cell as a programmable computer

Alright, let's get started. Good morning, everyone. For the next two hours, we are going to talk about synthetic biology — and specifically about genetic circuits, which are the central artifact of the field. I'll warn you up front, this is one of those subjects where the strangeness of the idea is really the whole point, so I'm going to ask you to suspend a little of your scepticism for the first half hour and see where the analogy leads us.

Here is the single sentence I want you to walk out of here with. **Synthetic biology is the engineering discipline that treats living cells as programmable computers.** That's it. That's the bumper sticker. Every other thing we discuss today — toggle switches and repressilators, BioBricks and iGEM, Cello and Voigt, quorum sensing and toehold switches, kill switches and Ginkgo Bioworks — every single one is a footnote on that one sentence.

If you walk out of here today and a friend asks you what synthetic biology is, I want you to be able to say: people decided to treat cells the way electrical engineers treat silicon chips. They decided that genes could be modular parts. They decided promoters were a bit like resistors and ribosome binding sites were a bit like capacitors and proteins were a bit like signals on wires. They decided that you could wire those parts up into circuits, and that the circuits could compute — they could remember, they could oscillate, they could decide, they could count. And then they actually went and built those circuits, in living bacteria, in yeast, and increasingly in mammalian cells. That is the field. Everything else is detail.

\[Pause.\]

Let me make the analogy concrete, because this is the analogy I will come back to over and over again. Think about a laptop. A laptop is built out of layers of abstraction. At the bottom you have transistors — physical objects, little semiconductor switches with three terminals. You can stack those transistors into logic gates: an AND gate, an OR gate, a NOT gate. You can wire logic gates together into bigger things — adders, registers, flip-flops, memory cells. You stack those into ALUs and instruction decoders. On top of that you have firmware. On top of that an operating system. On top of that an application. On top of that a user interface. None of the people writing the application have to know what a transistor is. Abstraction layers all the way down.

Synthetic biology says, fine, let us try to build the same kind of stack inside a cell. At the bottom we have molecules — DNA, RNA, proteins. We can compose those into **genetic parts**: a promoter, a ribosome binding site, a coding sequence, a terminator. We can compose parts into **devices**: a single-input gate that turns a fluorescent protein on when a particular small molecule is around. We can compose devices into **circuits**: a toggle switch, an oscillator, a multi-input logic gate. We can compose circuits into **systems**: a sensor that detects arsenic in drinking water by glowing green, or a microbe that produces a malaria drug. And, eventually, into **programs** — sequences of decisions a population of cells makes in response to its environment.

Now, here is where I have to be honest with you. The analogy is gorgeous, and the analogy is also slightly a lie. Biology is not as cleanly modular as silicon. Parts interact in ways transistors do not. Cells evolve. Cells are noisy. What works in one cell line breaks in another. We will spend an entire segment — Segment 17 — on what I am going to call the chronic engineering reality, which is that biology resists abstraction. But the analogy is still the right starting point, because it organizes the discipline. The whole project of synthetic biology is, in some sense, the ongoing struggle to make the analogy true. Every time someone develops a better insulator, a better characterization protocol, a better software tool for predicting circuit behavior, they are pushing biology a little closer to looking like electronics. We are not there. We may never get all the way there. But the trajectory is clear, and the field has gone further in twenty-five years than most people would have believed possible in 2000.

\[Pause.\]

So that is our destination. Here is the contract for the next two hours. By the end of this lecture, you should be able to do three things. First: explain what a genetic circuit is, using the laptop analogy, and walk a friend through why anyone thought building one was possible. Second: tell the founding story — the two papers from the year 2000 that established the discipline, the toggle switch and the repressilator, and explain in your own words what each one did. Third: look at a modern synthetic biology paper, or a press release from a synthetic biology company, and have an actual intuition for what is happening underneath. Where the parts came from. Why this is hard. What the open problems are. Everything I do today will be in service of those three goals.

One more framing note. Synthetic biology is a young field. It does not have a single founding event the way molecular biology has Watson and Crick or CRISPR has the 2012 paper. It crystallized out of a cluster of related ideas in the late 1990s and got its public birthday in January of 2000, when two papers appeared back to back in the journal _Nature_. We will spend a lot of time on those two papers, because they are the field's origin myth, and because the contrast between them — one a memory device, one an oscillator — laid out, on day one, the two big themes synthetic biology would pursue for the next quarter century.

Let's go meet them.

---

## SEGMENT 2 — The 2000 twin papers: the toggle switch and the repressilator

So picture the world of January 2000. The human genome project is close to completion. Molecular biology, as a field, has spent fifty years working out how cells work — how DNA is read, how proteins are made, how networks of genes regulate each other. We have a parts list. We have schematics of natural regulatory networks. What we have never done, as a community, is build a new one from scratch. Nobody has sat down and said, I am going to take a few well-characterized regulatory parts, wire them up in a configuration that does not exist in nature, put them into a cell, and see if my design behaves the way I predicted on paper.

That changes in two papers, published in the same issue of _Nature_, in January 2000. One comes from a young assistant professor at Boston University named **James Collins**, with his graduate student **Timothy Gardner** as first author and Charles Cantor as senior co-author. The other comes from a postdoc named **Michael Elowitz** working with **Stanislas Leibler** at Princeton. The papers are not coordinated. They come from different labs, with different motivations, and they appear next to each other almost by coincidence. But together they announce a field.

Let me take them one at a time.

**The Gardner-Cantor-Collins paper builds a toggle switch.** A toggle switch, in electronics, is a flip-flop — a circuit with two stable states. You can be in state A. You can be in state B. You cannot really be in between. To get from A to B, you have to give it a kick — a deliberate input. Once you give it the kick, it lands in state B, and it stays there even after the input goes away. Until the next kick, when it can flip back to A. That ability to stay in a state without the input that put you there — that is **memory**. A toggle switch is the simplest possible bit of memory.

The biological design is beautifully clean. You take two genes, each encoding a **repressor** — a protein that, when expressed, binds to a particular DNA sequence and blocks transcription of whatever is downstream of that sequence. Call the repressors R1 and R2. You wire them up so that R1, when present, represses the gene that makes R2. And R2, when present, represses the gene that makes R1. Each repressor inhibits the other one's production. Cross-inhibition.

Now think about what happens in such a cell. If R1 is high and R2 is low, then R1 is busy repressing R2, so R2 stays low, so R2 cannot repress R1, so R1 stays high. The system has settled into state A, with R1 dominant. If you flip it — say, by temporarily turning on R2 with some external trigger — then R2 becomes high, R2 represses R1, R1 drops, R1 can no longer repress R2, R2 stays high. State B. R2 dominant. And, critically, the state persists after the input is removed. The cell remembers which one was last turned on.

That is the toggle switch. Two genes. Cross-repression. Two stable states. Bistability. Switchable by an external trigger and persistent in the absence of the trigger.

In the analogy I want you to carry forward: **the toggle switch is a flip-flop in a cell. It is the bit of cellular memory.** And the moment Gardner and Collins built it, in 2000, in _E. coli_, with fluorescent proteins as reporters of which state the cell was in — that was the moment you could look at a colony of bacteria and know, by the color of the cells, which of two states they had decided on. The cell was remembering.

\[Pause.\]

Now the second paper. **Elowitz and Leibler build an oscillator.** They call it the **repressilator** — a portmanteau of "repressor" and "oscillator." If the toggle switch was about two repressors fighting each other to a draw, the repressilator is about three repressors chasing each other around a loop and never quite catching up.

Here is the design. You take three repressors. Call them A, B, and C. You wire them up so that A represses B, B represses C, and C represses A. Each repressor represses the next one in the cycle. Now follow what happens. Suppose A is high. Then A is repressing B, so B is low. Because B is low, C is not being repressed, so C climbs. As C climbs, it represses A, so A starts to drop. As A drops, it stops repressing B, so B climbs. As B climbs, it represses C, so C drops. As C drops, it stops repressing A, so A climbs again. We are back where we started. The system has gone through a cycle. A, then C, then B, then A. Round and round.

The cell, in other words, oscillates. The levels of A, B, and C rise and fall in turn, with a regular period. In the original paper, the period was around 150 minutes — about two and a half hours per oscillation. To visualize it, Elowitz hooked up a fluorescent reporter to one of the repressors so the cell would glow green when that repressor was up. Under a time-lapse microscope, you could watch single bacteria blinking on and off, again and again, with a regular rhythm. A clock. A designed clock. Inside a bacterium.

**The repressilator is the cellular oscillator.** Three repressors, in a cycle, each repressing the next, producing periodic pulses of fluorescence. It was the first designed cellular rhythm — the first time anyone had sat down on paper and said, I want a cell that oscillates, drawn a circuit diagram, built it from parts, dropped it into _E. coli_, and watched it do exactly what they had predicted.

\[Pause.\]

Now step back and look at these two papers together. The toggle switch was memory. The repressilator was rhythm. Between them, in one issue of _Nature_, they had demonstrated that the two most fundamental dynamical behaviors in any computing system — the ability to remember a state, and the ability to keep time — could be implemented inside a living cell, from designed genetic parts, in ways that more or less matched the designer's predictions on paper.

It was not a coincidence that both papers used repressors. Repressors were, in 2000, the most well-characterized class of biological switch. We had spent decades, going back to Jacob and Monod in the 1960s, studying the lac repressor in _E. coli_. We had a parts catalog — repressors and the DNA sequences they bound to — that was ready to be repurposed. The 2000 papers did not invent new biology. They took existing well-understood biological parts and asked a new engineering question: what happens when you compose them in configurations nature did not happen to evolve?

That question — what novel things can we build out of parts we already understand? — is the question of synthetic biology. Both papers answered it in the affirmative. You can build things. You can predict, in advance, how they will behave. Cells will, mostly, obey. The field, on January 20th, 2000, had a research program.

Now we need to spend some time on what those parts actually are.

---

## SEGMENT 3 — Genetic parts: promoters, RBSes, CDSes, terminators

Let me open up a generic genetic circuit and show you, mechanically, what it is made of. Because we have been talking very abstractly about repressors and genes, and now I want you to see what those things look like at the level of actual DNA. This is the parts list. Memorize the four words on the next paragraph; they are the resistors, capacitors, transistors, and wires of biology.

A simple gene — what we sometimes call a **transcriptional unit** — has four kinds of part stacked in order along the DNA. First, a **promoter**: a stretch of sequence, typically a few dozen base pairs, that tells the cell's transcription machinery "start reading here." It is the on-switch for the gene. Different promoters have different strengths and different conditions under which they turn on. Some promoters are constitutive — they are always on, at some characteristic rate. Others are inducible — they only turn on when a particular signal is present, like a small molecule or a particular regulatory protein. The promoter sets when, and how strongly, the gene will be transcribed into RNA.

Second, after the promoter, you have a **ribosome binding site** — usually just called an **RBS**. This is a short sequence on the messenger RNA that ribosomes recognize and grab onto. It tells the ribosome where to land and start translating. Different RBSes have different strengths, too. A strong RBS recruits ribosomes efficiently, and you get lots of protein per mRNA. A weak RBS recruits them poorly, and you get little protein per mRNA. So the RBS sets the translation rate.

Third, the **coding sequence**, or **CDS**. This is the actual gene — the stretch of DNA that, once transcribed to mRNA and translated by the ribosome, produces the protein. It can encode a repressor, a fluorescent reporter, an enzyme that makes a drug, anything. The CDS is the payload. It is the thing the rest of the parts exist to express.

Fourth, after the CDS, the **terminator**. This is a sequence that tells the transcription machinery "stop reading here." Without a good terminator, transcription would just keep running off the end of your gene and into whatever was downstream, possibly turning on things you did not want turned on. A terminator is the punctuation mark at the end of the genetic sentence.

So that is the basic anatomy. Promoter, RBS, CDS, terminator. Four parts. They sit on a piece of DNA, in that order, and together they form what we might call a **device** — a single-input, single-output unit that takes "transcription is allowed at this promoter" as its input, and produces "this much protein per cell per minute" as its output.

\[Pause.\]

Now think about what you can do with this Lego set. If I want my circuit to respond to a particular small molecule, I pick an inducible promoter that turns on in the presence of that molecule. If I want to tune how much protein gets made, I swap in an RBS of a different strength. If I want a different output — say, fluorescence instead of an enzyme — I swap the CDS. If I want to cleanly stop transcription so it does not bleed into the next part, I make sure I have a strong terminator. Each part can, in principle, be exchanged with another part of the same type. That is the modular promise. The interface is the same — DNA in, DNA out — even though the function of each part can be wildly different.

The analogy I want you to carry: **promoters, RBSes, and terminators are the resistors and capacitors of biology**. They are the modular parts you mix and match. They are not glamorous. They do not encode interesting proteins. But the precise combination of them you choose determines whether your circuit works. An electrical engineer does not typically obsess over which transistor to use; they obsess over the values of the resistors and capacitors that set the operating point of the circuit. The same is true here. The CDSes — the actual repressors or reporters — get all the attention. But the engineering reality is that getting the promoters and RBSes right is where most of the work happens.

\[Pause.\]

Now zoom out one more level. Once you have learned to think of those four-part transcriptional units as devices, you can stack devices on top of each other in a piece of DNA, in series. The output of one device — the repressor it produces — can become the input of the next device, by binding to that next device's promoter. That is how you wire devices together. The repressor floats in the cell, finds the promoter it recognizes downstream on the same piece of DNA — or on another plasmid, or on the chromosome — and represses it. The protein is the wire. The DNA is the circuit board. Multiple devices on multiple pieces of DNA, talking to each other through diffusing proteins, make up a circuit.

We can describe the hierarchy crisply. **Parts** — individual functional pieces of DNA, like a single promoter or a single RBS. **Devices** — small assemblies of parts that perform a single function, like a single repressor expression cassette or a single sensor. **Circuits** — multiple devices wired together to perform a computation, like the toggle switch or the repressilator. **Systems** — multiple circuits combined to perform an application, like a programmable biosensor or a metabolic pathway. And then, beyond systems, **whole engineered organisms** — cells in which the engineer has rewritten substantial chunks of the genome to produce a behavior unlike anything in nature.

Parts. Devices. Circuits. Systems. Organisms. Five layers. Each one built from the layer below. That hierarchy is the architecture of the field. When you read a synthetic biology paper, you can almost always locate where it sits on this stack. Some papers introduce a new part — say, a new fluorescent protein, or a new inducible promoter. Some papers build a new device. Some build new circuits. Some assemble systems. The further up the stack you go, the more parts have to behave well together, and the harder the engineering becomes.

Now, the elegant idea that came next was: if parts are supposed to be modular, then why does every lab keep building its own from scratch? Why not standardize?

---

## SEGMENT 4 — iGEM and the Registry of Standard Biological Parts

Let me tell you about a moment in the early 2000s when the synthetic biology community decided to behave, deliberately, like the electronics industry of the 1960s.

If you go look at how the electronics industry got from individual hand-soldered circuits in the 1940s to mass-produced integrated circuits in the 1970s, you find that one of the critical innovations was **standardization**. Standardized resistor values. Standardized chip footprints. Standardized voltage levels. Standardized data sheets that told you exactly how a part would behave under specified conditions. Without standardization, every engineer is reinventing the wheel for every project. With standardization, you can grab a part out of a catalog and trust that it will behave the way the data sheet says.

A group of people at MIT — most prominently **Tom Knight**, **Drew Endy**, **Randy Rettberg**, and **Christopher Voigt** in the early years — looked at the state of molecular biology in the early 2000s and said: this is where electronics was sixty years ago. Every lab is reinventing parts. Nobody is sharing. Nobody is characterizing parts in a standardized way. We need a registry — a catalog of well-characterized genetic parts that anyone can pull from, and that anyone can deposit into. We need standardized assembly methods so that any two parts in the registry can be physically connected to each other in a predictable way. We need data sheets.

They built it. They called the parts **BioBricks**. The core idea of a BioBrick was a piece of DNA flanked by standardized restriction enzyme sites, so that any two BioBrick parts could be cut with the same enzymes and glued together in either order — a sort of molecular Lego connector. They called the assembly standard the **BioBrick standard assembly**, and the registry they built around it became the **Registry of Standard Biological Parts**. By the late 2000s, the Registry contained thousands of parts — promoters, RBSes, terminators, repressor genes, reporters, and assemblies of all of those into devices and circuits — all conceptually shareable, all conceptually composable.

I will say "conceptually" twice because, in practice, the BioBrick standard never quite delivered on its promise. The restriction sites it relied on were finicky. Many parts turned out to be context-dependent in ways the standard could not capture. Newer assembly methods — Gibson assembly, Golden Gate assembly — eventually displaced the BioBrick standard in most labs. But the Registry as a concept, and the social practice it created, did endure. A central catalog of shareable parts, with characterization data attached. That idea reshaped how the field thinks about its own building blocks.

\[Pause.\]

Now let me tell you about the thing that grew out of the Registry, because it is one of the loveliest institutions in modern biology. It is called **iGEM**, which stands for the **International Genetically Engineered Machine** competition. iGEM started in 2003 as a month-long course at MIT and rapidly grew into an annual international competition for undergraduate students in synthetic biology. Here is how it works.

Each summer, teams of undergraduates at universities around the world — sometimes high school students, sometimes graduate students, but predominantly undergrads — pick a project. They might decide to build a biosensor for a particular environmental contaminant. They might try to engineer bacteria to produce a particular molecule. They might invent a new genetic memory device. Whatever the project, they have a summer to design it, build it in the wet lab, characterize it, and document it. In the fall they travel to a giant conference — historically held at MIT, now in various international venues — where each team presents their project to a panel of judges, competes for medals and prizes, and contributes the parts they made to the central Registry. Every year, several thousand undergraduates participate. Every year, the Registry grows.

The analogy I want you to carry: **iGEM is the undergrad olympics of synbio.** Students design circuits in summer, present in fall, the registry grows. It has been, by some accounts, the single most important pipeline of synthetic biology talent in the world. A huge fraction of the people now running synthetic biology labs and companies — and I do mean a huge fraction — went through iGEM as undergraduates. The competition created a community, a shared vocabulary, a shared parts list, and a shared sense of mission, in a field that otherwise would have had none of those things.

Has iGEM produced major scientific results? Sometimes, modestly. The competition is undergraduate-driven, and undergraduate projects are usually not going to produce Nature papers. But that misses the point. The point of iGEM is to train people, to grow a culture, and to keep the Registry alive. It is, in a real sense, the immune system of the field — the way synthetic biology renews its talent pool and propagates its values. Twenty years on, it is still running. If you have an opportunity to join an iGEM team as an undergraduate, do it. It is one of the most formative experiences a student of biology can have.

\[Pause.\]

There is one more thing I want to flag here, because it ties back to the central engineering analogy. The Registry, in its idealized form, embodies the dream of **modular reuse**. You pull a part off the shelf, you compose it with other parts off the shelf, the composition works. That dream — the dream that biology can be made modular — is one of the founding bets of synthetic biology. And, to be honest with you, that bet has been only partially won. Some parts compose well. Many do not. Context matters more than the engineers of 2003 wanted to admit. We will return to this in Segment 17, when we look at why circuits keep breaking in unexpected ways. But the dream itself — the dream of a parts catalog you can compose from — is the dream that built the field. Holding that dream, in 2003, when most molecular biologists thought it was naive, was an act of intellectual courage.

Now let us turn to the problem that has plagued every attempt to live the dream.

---

## SEGMENT 5 — The noise problem: stochastic gene expression

I want to spend a segment on what is, by some distance, the deepest engineering problem in synthetic biology. It is the problem of noise.

Here is what I mean. Imagine you build a device — say, a simple one. A constitutive promoter, an RBS, a coding sequence for green fluorescent protein, a terminator. You put it on a plasmid. You transform a population of _E. coli_ cells with that plasmid. You grow them up. You stick them under a microscope. Every cell has the same plasmid. Every cell has the same DNA. Every cell, in principle, is running the same program.

How bright should each cell be?

If biology were like electronics, every cell should be the same brightness. They are running the same program with the same parts. Output should be deterministic. Output should be repeatable.

What you actually see, when you look, is that the cells vary in brightness by — on a population basis — easily thirty percent, often much more. Some cells are dim. Some are bright. Some are way out on the tail. The same gene, on the same plasmid, in genetically identical cells, growing in the same medium, makes hugely different amounts of protein from one cell to the next. That variation has a name. It is called **noise**. And it is not noise in the engineering sense of "small Gaussian disturbance on a clean signal." It is structural. It is large. It is everywhere.

Why? The reason is fundamental, and I want to dwell on it. Inside a single bacterial cell, there are not thousands of copies of every molecule. There are tens. There are sometimes ones. A typical gene might be transcribed into mRNA at a rate of one transcript every few minutes. Each mRNA might be translated into a few hundred protein molecules before it is degraded. The events that drive gene expression — a transcription factor binding to a promoter, RNA polymerase initiating, a ribosome landing on an mRNA — are individual, discrete molecular events. They happen at specific moments in time. They are governed by chemistry, and chemistry, at the level of single molecules, is **stochastic**. You do not get a smooth, continuous flow of transcripts. You get random bursts. Two cells, side by side, might experience very different sequences of burst events in the same window of time, and end up with very different protein concentrations as a result.

The analogy I want you to carry: **biology runs on stochastic chemistry — gene expression jitters by thirty percent or more, your circuit has to work despite that.** It is not engineering noise on a clean platonic signal. It is the platonic signal that is noisy. The noise is the substrate.

\[Pause.\]

For synthetic biology, this creates a deep design problem. If you build a circuit that is supposed to flip from state A to state B when an input crosses a threshold — say, a toggle switch — then noise can flip the switch spontaneously, without any input. A cell, randomly experiencing a high-protein excursion, can end up in the wrong state. If your circuit relies on precise concentrations of two repressors balancing each other, noise can wreck the balance. If your circuit is supposed to oscillate with a clean period, noise scrambles the period. Many of the early genetic circuits, including the original 2000 repressilator, oscillated but with very wide period distributions across cells. The cells were keeping time, but each cell's clock ran at a slightly different speed, and they drifted out of phase from each other within a generation.

There are roughly three ways the field has learned to deal with noise. First, you can design circuits to be **robust** to noise — to have wide enough basins of stability that small fluctuations do not flip them. The toggle switch, when designed with strongly cooperative repressor binding, can be remarkably robust; the more cooperative the binding, the steeper the switching threshold, the harder it is for random fluctuations to push it over. Second, you can build **noise-averaging** circuits — feedback loops that pull the output back to a setpoint, the same way a thermostat does. We will see this in the next segment, on feedback. Third, you can exploit noise — you can build circuits that **use** the variability to make populations diverse, the same way bacteria in nature use noise to ensure that at least some cells in a population are ready for any environment. This last approach — noise as feature, not bug — has become a recurring theme in biological engineering.

\[Pause.\]

One implication of noise that I want to make sure you internalize: **you cannot reason about synthetic biology purely at the level of average behavior.** A circuit that works at the population mean might fail spectacularly in individual cells. Conversely, a circuit that looks broken on average — flat fluorescence, say — might be working perfectly well in a fraction of cells that just happen to be in the right state. The standard tools for measuring circuits — flow cytometry, single-cell time-lapse microscopy — exist precisely because the field had to learn to see beyond the mean.

This is one of the deepest cultural differences between synthetic biology and electrical engineering. In electronics, you can usually take the mean and move on; the noise is genuinely small. In biology, the noise is part of the design surface. A good synthetic biologist designs in the presence of noise, not in spite of it.

Now, with noise framed, let us talk about the most important conceptual tool the field has for taming it: feedback.

---

## SEGMENT 6 — Feedback in biology: homeostasis and switches

Feedback is one of those words that gets used loosely in everyday language, so let me give it a precise definition for the next thirty minutes. **Feedback** is when the output of a system is, in some form, fed back as one of its inputs. If the output goes up and the feedback says "make less," that is **negative feedback**. If the output goes up and the feedback says "make more," that is **positive feedback**. Two flavors. Wildly different behaviors.

Negative feedback is the engine of stability. Think of a thermostat. The room is too hot, the thermostat turns the heater off. The room cools. The room is too cold, the thermostat turns the heater on. The room warms. The output — temperature — is held near a setpoint, more or less independent of disturbances. Negative feedback rejects disturbances. Negative feedback is what cells use to maintain **homeostasis** — to keep concentrations of important molecules within tight ranges despite an environment that is constantly changing.

You see negative feedback all over natural biology. Cholesterol regulation in your liver runs on negative feedback. Blood glucose runs on negative feedback. Body temperature runs on negative feedback. At the molecular level, in single cells, dozens of small loops use negative feedback to hold protein concentrations near where they need to be. A transcription factor that activates its own degradation, or that represses its own expression once it gets high enough — that is a negative feedback loop in action.

For the synthetic biologist, negative feedback is a noise-killer. If you put your circuit inside a negative feedback loop, fluctuations get pulled back toward the setpoint. The output becomes less variable. The circuit becomes more robust to disturbances — to changes in growth rate, to changes in plasmid copy number, to all the messy variables of cellular life. Negative feedback is, in many ways, the single most powerful tool the field has for making circuits behave reliably.

\[Pause.\]

Positive feedback is the opposite. Positive feedback amplifies. If a transcription factor activates its own expression, then a little bit of it makes more of it, which makes more of it, which makes more of it. Small differences blow up into large ones. The system rushes away from its starting point.

In its pure form, positive feedback is unstable — it will run away until it hits some saturation. But that is exactly what makes it useful. Positive feedback gives you **switches**. A system with positive feedback can be in a low-output state, where the feedback loop has not yet engaged. It can also be in a high-output state, where the feedback has saturated and the system is locked on. Between those two states there is a threshold — a tipping point. Once the input crosses the threshold, positive feedback kicks in and drives the system to the high state. Below the threshold, the system stays low. You have created a discrete switch out of what was, underneath, continuous chemistry.

Look back at the toggle switch from Segment 2 with this lens. The toggle switch has positive feedback embedded in its structure. Each repressor, by repressing its competitor, is effectively making the world safer for itself. Once R1 has the upper hand, it actively keeps R1 high by keeping R2 low. That is a self-reinforcing loop. The mutual inhibition between two repressors creates positive feedback on each of them. That is why the toggle switch has two stable states. Positive feedback is the mathematical engine of bistability.

\[Pause.\]

Now the next idea, and it is one that runs through the whole field. Most useful circuits are not pure negative feedback or pure positive feedback. They are **combinations**. The best circuits have negative feedback loops layered on top of positive feedback motifs, with multiple time scales playing against each other. The famous repressilator from 2000 was, in a sense, three negative feedback loops chained in a cycle — and that arrangement, with delays around the loop, produced sustained oscillations. Most natural cell cycle clocks are built the same way: a few positive and negative loops, layered, with delays. The richness of the dynamics comes from the structure of how the loops are wired.

If you have ever taken a control theory course, you will recognize this. Feedback is the central concept of control theory. Synthetic biologists, increasingly, talk like control engineers. They draw block diagrams. They compute transfer functions. They tune gains. They study stability margins. The mathematics of regulating an industrial process turns out to be, with modest adjustments, the mathematics of regulating a synthetic gene circuit. The field is, in this sense, a control-theoretic enterprise wearing molecular biology clothing.

The key practical takeaway for now: when you design a circuit and it does not behave the way you want — too noisy, too variable, too prone to leaks — your first move is to ask whether you can add a negative feedback loop. Most of the time, you can, and most of the time, it helps. Negative feedback is the synthetic biologist's WD-40. It will not fix every problem, but it fixes a lot of them, and it should be near the top of your toolkit.

\[Pause.\]

That gives us memory, that gives us rhythm, and that gives us regulation. Now let us put it all together and build something a little more ambitious: logic.

---

## SEGMENT 7 — Logic gates from transcription factors

Take a step back. In digital electronics, the basic building block of computation is the **logic gate**. A logic gate is a device with one or more inputs and one output, where the output is some Boolean function of the inputs. AND: output is high only if all inputs are high. OR: output is high if any input is high. NOT: output is high if input is low, low if input is high. NOR: combination of NOT and OR. NAND: combination of NOT and AND. XOR: output is high if exactly one of the inputs is high. With enough of these gates wired together, you can compute anything that is computable.

Here is the synthetic biology bet, made concrete in the mid 2000s by a handful of labs: the same logic gates can be built out of transcription factors and promoters inside a living cell. Not by metaphor. By actual physical implementation. You build a piece of DNA whose transcription is controlled by the presence or absence of one or more regulator proteins, and the output — the amount of a reporter protein produced — implements a particular Boolean function of those inputs.

Let me make this concrete with one of the simplest examples: a transcriptional NOT gate. Take an inducible promoter that is repressed by a particular repressor protein. When the repressor is absent — when the input is low — transcription proceeds, and the output is high. When the repressor is present — when the input is high — transcription is blocked, and the output is low. Input low, output high. Input high, output low. That is a NOT gate. We just built one with a single promoter and a single repressor.

An OR gate is also relatively easy. Take two inducible promoters, each activated by a different input. Put both promoters upstream of the same reporter gene. Either promoter, when activated, drives transcription. So the reporter goes high when input A is present, or input B is present, or both. That is OR.

An AND gate is harder. To build a transcriptional AND, you need a promoter whose activation requires both inputs to be present simultaneously. Several molecular implementations have been developed. One classic approach uses a split transcription factor — a protein in two pieces, where each piece is produced by a different input, and they have to come together to activate transcription. Both inputs present, both pieces present, transcription happens. Either input absent, no transcription. AND.

A NAND is an AND followed by a NOT. A NOR is an OR followed by a NOT. And so on. The whole catalog of basic Boolean gates can, in principle, be built from these basic transcriptional motifs. XOR — output high if exactly one input is high — is the hardest to build directly, but it can be assembled from combinations of more primitive gates.

\[Pause.\]

Here is what is wild about all this. Once you have logic gates, you have, in principle, the building blocks for any digital computation. You can build adders. You can build counters. You can build state machines. The same Church-Turing universality that applies to silicon applies, in principle, to wet biology. Now, the speeds are not comparable — a bacterial logic gate operates over minutes to hours, not nanoseconds — and the noise budget is much worse. You are not going to be playing video games on a bacterial colony any time soon. But for many applications you do not need nanoseconds. If you want a cell that produces a drug only when the cell detects both a tumor marker and a hypoxia marker, you do not need fast computation. You need correct computation, in the right place, in response to the right combination of signals. And transcriptional logic, if you can get it to compose reliably, gives you exactly that.

\[Pause.\]

But there is a catch, and it is a deep one. Logic gates in electronics compose. You can plug a million NAND gates together in any topology and they will all work, because every gate has the same voltage levels at input and output, the same impedance, and so on. Logic gates in biology, in the early days, did not compose. Every new gate involved a new repressor, with a new operator sequence, with a new strength, with a new degradation rate. Connecting two gates required matching the output of one to the input of the next, and the matching was almost never perfect. Designers spent enormous effort tuning each connection by hand. Building a circuit with even four or five gates was a heroic feat, requiring months of optimization.

The bottleneck was clear. The field needed two things: a **library** of orthogonal, well-characterized transcriptional parts that did not interfere with each other, and a **software tool** to take a desired logic specification and lay out the DNA. Both of those things arrived in the mid-2010s, and the lab that put them together was Christopher Voigt's. That is the story of the next segment.

---

## SEGMENT 8 — Voigt lab's Cello: Verilog for cells

In 2016, Christopher Voigt's lab at MIT published a landmark paper in _Science_, titled "Genetic circuit design automation." The first author was Alec Nielsen. The work pulled together about a decade of effort from the Voigt lab and represented, in my view, the moment synthetic biology took its biggest single step toward being a real engineering discipline.

Here is what they did. They built a library of around twenty well-characterized transcriptional repressors, derived mostly from bacterial DNA-binding proteins called TetR-family repressors. They characterized each one. They tested whether the repressors interfered with each other — whether one repressor would, by accident, bind the operator of another. They picked the subset that was **orthogonal**: each one only repressed its intended target, did not cross-talk with the others. They measured the input-output transfer function of each one — exactly how the output protein level depended on the input — so they could predict how the gate would behave when wired into a circuit. They built **insulator** sequences to put between parts, so that one device would not perturb the next.

Then — and this is the part that made the paper famous — they wrote a software tool that took, as input, a description of the desired logic in a language called Verilog. Verilog is a hardware description language, used by electrical engineers since the 1980s to describe digital circuits. You write Verilog, you specify the inputs, the outputs, and the logical function you want connecting them, and you feed it to a compiler. The compiler picks parts from a library and lays out a physical design. Voigt's lab built the same compiler — but instead of laying out silicon, it laid out DNA. They called it **Cello**.

The analogy I want you to carry: **Cello is Verilog for cells. You describe the logic you want, the software picks parts from a library and lays out the DNA.** You type in something like "output equals A and not B"; Cello goes off, picks repressors from its characterized library, lays out a piece of DNA that implements that function, and gives you a sequence file you can order from a DNA synthesis company. You drop the synthesized DNA into _E. coli_ and you have a cell that computes "A AND NOT B."

\[Pause.\]

Here is the kicker. In the 2016 paper, Voigt's group designed, with Cello, sixty different genetic circuits implementing a range of logic functions — gates of varying complexity, up to circuits with six inputs and several internal gates. They built every one of them. The headline result: **forty-five out of the sixty circuits worked correctly on the first try.** Not after iterative tuning. On the first try. Computer-designed circuits, synthesized as DNA, dropped into _E. coli_, and the resulting cells computed exactly the function the design specified.

That number — three quarters working on first attempt — does not sound impressive if you compare it to electronics, where the corresponding number is essentially one hundred percent. But in synthetic biology, it was a revolution. Before Cello, hand-built circuits at that complexity took months each and very often did not work at all. After Cello, you could design a logic circuit in an afternoon, have it built in a week, and expect most of your designs to function. The field had taken a giant step toward the engineering ideal.

The 2016 Cello paper is, in my view, the closest thing synthetic biology has had to its "first man on the moon" moment. It demonstrated, decisively, that the engineering analogy was not just a metaphor — that you could really compile genetic circuits the way you compile silicon, with predictable results, at a scale that was useful. Subsequent versions of Cello have extended the library, added new chassis organisms beyond _E. coli_, and handled larger circuits. The field has continued from there. But the moment of "we did this" was 2016.

\[Pause.\]

Cello is, I should note, only one strand of a broader move in the field. The same period — the late 2000s through the late 2010s — saw the development of better characterization standards, better mathematical models of part behavior, better assembly methods like Golden Gate and Gibson, and better DNA synthesis economics. All of those moved together. The DNA you would have spent a year cloning by hand in 2003, by 2018 you could order from a vendor for a few hundred dollars and have it in your inbox in two weeks. That price collapse, more than any single intellectual breakthrough, is what made systems like Cello practical. The engineering economy of synthetic biology was finally starting to look like the engineering economy of silicon.

Now, Cello and its descendants design circuits that work inside a single cell. But cells in nature do not, mostly, compute alone. They compute in populations, signaling to each other, coordinating behaviors across thousands or millions of individuals. The next move was to use that population-level signaling as a substrate for circuits.

---

## SEGMENT 9 — Quorum sensing: bacteria as networks

Imagine you are a bacterium. You are a single cell, swimming around in a pond or a gut or a wound. You want to do something that requires teamwork — say, you want to produce a toxin to invade a host, or form a biofilm, or bioluminesce. But if you do it alone, you do not have enough mass to matter, and you waste your resources. You want to wait until there are enough of you around that the collective action will succeed.

How do you know when there are enough of you?

Bacteria solved this problem, evolutionarily, with a mechanism called **quorum sensing**. Each bacterium continuously produces a small signaling molecule — typically a thing called an autoinducer, or AI — and secretes it into the environment. The molecule diffuses away. When few bacteria are around, the concentration of the molecule stays low. As more bacteria accumulate in the same space, each producing autoinducer, the concentration in the local environment climbs. Inside each bacterium, there is a receptor protein that binds the autoinducer. When enough autoinducer accumulates outside, enough of it enters each cell and binds enough receptor, the receptor activates a transcription factor, and the cell switches on a coordinated genetic program. The whole population, almost simultaneously, decides "there are enough of us, it is time to act."

In effect, the cells have **counted themselves**. Or, more precisely, they have estimated their local density. Above a threshold density, behavior A. Below, behavior B. The autoinducer is the medium of the count.

The analogy I want you to carry: **quorum sensing is the bacterial radio. Cells use small molecules to count themselves and act collectively.**

\[Pause.\]

The most famous quorum sensing system, and the one most heavily used in synthetic biology, comes from a bioluminescent marine bacterium called _Vibrio fischeri_, which lives in symbiosis with the Hawaiian bobtail squid. The squid keeps a population of _V. fischeri_ in a light organ on its belly. When the bacteria reach quorum, they all glow at once, and the squid uses the glow to break up its silhouette against the moonlight as it hunts. The molecular system that controls this — based on a small molecule called an **acyl-homoserine lactone**, abbreviated **AHL** — was worked out in the 1990s, and the two key genes from it, _luxI_ and _luxR_, became the parts list for an entire generation of population-scale synthetic biology experiments.

For the synthetic biologist, quorum sensing is an extraordinary gift. It gives you a **wire** that runs not just between genes inside a cell, but between cells across a population. You can wire one cell's output to another cell's input — by having the sender cell express LuxI to produce AHL, having the AHL diffuse, and having the receiver cell express LuxR to detect it. Suddenly cells are talking to each other. You can build circuits that span populations. You can build distributed computations, where different cells perform different parts of the calculation and pass the results to each other in molecular form.

In the late 2000s and 2010s, a wave of papers used quorum sensing to build remarkable multicellular synthetic circuits. There were papers in which two strains of bacteria, mixed together in a culture, performed Boolean operations together — one strain producing the AND function, another the OR — by exchanging AHL signals. There were papers in which engineered bacteria formed patterns on a plate, with the pattern emerging from the interaction of quorum-sensing signals and the diffusion of those signals across space. There was even a paper by Tal Danino and others in 2010 — back in Jeff Hasty's lab at UC San Diego — in which thousands of bacterial cells, all engineered with a quorum-sensing oscillator, synchronized their oscillations across an entire colony, blinking in unison. A colony-scale clock, built out of coupled cellular clocks. It was glorious.

The deeper conceptual point is that quorum sensing makes synthetic biology a **population-scale discipline**. Once you accept that the unit of computation is not the cell but the colony — that the cells communicate, coordinate, divide labor — a whole new set of circuit topologies opens up. Some computations that are very hard to perform in a single cell become easy when you split them across cell types. The cell as a single processor becomes the colony as a parallel computer.

This is also where the engineering reality starts to bite harder, because populations evolve. If you build a population-scale circuit, and one strain has a slight growth advantage over another, the population composition will drift over time and the circuit will stop working. Distributed circuits are powerful but fragile. We will return to this in Segment 17.

For now, hold the picture: quorum sensing is the network protocol of bacterial life, and synthetic biologists have learned to use it as the network protocol of their distributed cellular computations.

\[BREAK\]

---

That is the first half of our material. We have established the core analogy — cells as programmable computers — and we have walked the genealogy: the founding papers, the parts hierarchy, the registry and iGEM, the noise problem, feedback, logic gates, Cello, and quorum sensing as multicellular communication. Take ten minutes. Stretch. Get water. When we come back, we will turn from how circuits compute to how they remember, how they sense the world, and what people have built with them in the wild.

\[End of part one.\]

---

## SEGMENT 10 — Cellular memory: recombinase-based recorders

Welcome back. Let us pick up with memory, and I want to be careful here, because we have already met one kind of cellular memory — the toggle switch from Segment 2. That was memory implemented in protein concentrations. Two stable states, maintained by the ongoing dynamics of mutual repression. Real memory, but **dynamic memory** — it persists only as long as the cell keeps running the circuit. Stop the dynamics, dilute the proteins, the memory is gone. It is the cellular equivalent of DRAM in a computer: refreshed constantly, lost when the power goes off.

There is another flavor of memory in cells, and it is fundamentally different. It is **permanent memory**, written into DNA itself, persisting across cell divisions. The molecular tool that enables this is a class of enzymes called **recombinases**.

A recombinase is a protein that recognizes a particular short DNA sequence — called a recognition site — and performs a specific cut-and-paste operation on the DNA between two such sites. The most famous example is **Cre recombinase**, which acts on a pair of sites called loxP sites. If you have two loxP sites in the same orientation flanking a piece of DNA, Cre will recognize them, cut the DNA between them, and excise that piece as a circle. If you have two loxP sites in opposite orientations, Cre will recognize them and **flip** the piece of DNA between them. The flip is permanent. Until you bring Cre back, the DNA sits there in its new orientation. The flipped orientation persists through cell divisions, because once the DNA is rearranged, the new arrangement is copied along with everything else.

That is the memory primitive. You take a piece of DNA, you flank it with recombinase sites, you arrange it so the gene downstream is either off (if the DNA is in orientation A) or on (if the DNA is in orientation B), and you control the recombinase. When you provide the recombinase — say, by turning on its expression in response to a particular input — it flips the DNA. The flip persists. The cell now remembers that it received that input, **forever**.

The analogy I want you to carry: **recombinase memory is writing once in DNA. Flip a sequence permanently with a recombinase, the cell remembers a state through generations.**

\[Pause.\]

In the early 2010s, a series of papers from Drew Endy's lab and Tim Lu's lab at MIT and from Jay Keasling's lab at Berkeley showed that you could chain multiple recombinases together to build genetic state machines. Two recombinases give you four possible orientation states of the DNA — recombinase 1 flips one region, recombinase 2 flips another, and the combination of inputs over time leaves a unique pattern in the DNA. Three recombinases give you eight states, and so on. You can build circuits that record sequences of events — not just whether a signal occurred, but in what **order** signals occurred. A cell that has been exposed to input A first and then input B ends up in a different DNA state than a cell that has been exposed to B first and then A. The cell has recorded temporal information into its genome.

This idea grew into a small subfield, with names like **SCRIBE** — Synthetic Cellular Recorders Integrating Biological Events — and **CAMERA** — CRISPR-mediated Analog Multi-Event Recording Apparatus. SCRIBE, from Tim Lu's group, used recombinases and reverse transcriptases to write information into the bacterial genome in response to environmental signals. The cell, over time, accumulated a kind of molecular ledger of what it had experienced. CAMERA, from David Liu's group, used CRISPR base editors to incrementally modify a DNA tag in response to inputs, with the level of modification recording the dose or duration of exposure. Both systems treated the genome as a kind of write-once tape — a place to store, durably, what the cell had been through.

\[Pause.\]

Why does this matter? A few reasons. First, scientifically, it is exhilarating to be able to read off a cell's history from its DNA. You can take a population of engineered cells, expose them to various conditions in a complex environment — say, a mouse gut — recover them later, sequence their DNA, and reconstruct what happened to each cell during its time in the environment. That is a tool of immense power for studying biology in places we cannot easily look directly.

Second, technologically, recombinase-based memory underlies a growing class of cell-based therapies and diagnostics. Imagine a cell that, when introduced into a tumor, samples the tumor microenvironment, flips its DNA in response to particular signals, and then expresses a therapeutic protein when the right combination of signals has occurred. You could recover the cell later and read out its memory to confirm what it sensed. Some of the early CAR-T-style cell therapies that incorporate logic gates are starting to use recombinase memory in this way.

Third, conceptually, recombinase memory closes the loop with the toggle switch. The toggle switch is volatile bistable memory in protein concentrations. Recombinase memory is durable bistable memory in DNA itself. Together they give the synthetic biologist a memory hierarchy roughly analogous to a computer's: DRAM in the toggle switch, flash storage in the recombinase array. Different time scales, different reliabilities, different applications. The discipline now has both.

---

## SEGMENT 11 — Biosensors: cells that fluoresce in response to molecules

Let us turn from circuits that compute internally to circuits that sense the world. **A biosensor**, in the synthetic biology sense, is an engineered cell that detects a particular molecule in its environment and produces a measurable output in response. Most commonly, the output is fluorescence — the cell glows when the molecule is present. But the output can be any reporter: a colored pigment, a smell, an enzymatic activity that you can read out with a chemical test.

The basic recipe is the one we developed in Segment 3. You take an inducible promoter that responds to the molecule of interest — that is, a promoter that is normally off, but turns on when a specific small molecule binds to its regulator. You put a reporter gene downstream. You drop the construct into a chassis organism, often _E. coli_. When the molecule shows up in the cell's environment — assuming it can get into the cell — it activates the regulator, which switches on the promoter, which turns on the reporter, and the cell glows.

The art is in finding the right sensor part. Nature has produced thousands of regulators that respond to thousands of different molecules. Bacteria have evolved sensors for sugars, for amino acids, for metals, for pollutants, for host signals, for anything you can imagine that might be useful to detect. Synthetic biologists comb through the natural parts catalog, looking for regulators that respond to molecules they care about, and adapt them.

\[Pause.\]

Let me give you a few real examples. **Arsenic biosensors** are one of the most celebrated applications. There are natural bacterial regulators that respond specifically to arsenic — bacteria have to deal with arsenic in some soils — and engineers built _E. coli_ strains carrying these regulators wired up to fluorescent or pigment reporters. The strains glow, or change color, in the presence of arsenic in drinking water. In Bangladesh and Vietnam, where groundwater arsenic contamination is a major public health problem, several research groups have tried to develop arsenic biosensor cells as a cheap field test, costing pennies per assay rather than the dollars per assay required for traditional chemical methods. The technology has not been universally adopted — regulatory and stability hurdles are real — but it works in principle, and prototypes exist.

**Glucose biosensors** have been built for monitoring fermentation, food spoilage, and diabetic blood sugar. **TNT biosensors** — yes, the explosive — have been built by several groups, with the dream of seeding minefields with engineered grass or bacteria that glow when TNT leaks from buried mines, making demining safer and faster. **Heavy metal biosensors** for mercury, cadmium, lead. **Hormone biosensors** for environmental endocrine disruptors. **Pathogen biosensors** that detect specific bacterial or viral molecules in clinical samples.

Each one of these is conceptually the same: take a regulator that responds to the molecule, wire it to a reporter, put it in a cell. The fact that the recipe is so portable is, again, a triumph of the modular dream of synthetic biology. You change one part — the regulator — and you have a sensor for an entirely different molecule.

\[Pause.\]

There are, of course, real engineering challenges. The molecule has to get into the cell — many molecules of interest do not cross bacterial membranes well. The sensor has to be sensitive enough to detect the relevant range of concentrations. It has to be specific enough not to be triggered by chemically similar molecules that are not what you want. It has to be fast enough to be useful. The cell has to survive long enough in the relevant environment to do its job. Each of these is solvable, with effort, and each has been the subject of decades of work.

And there is the deployment problem. A biosensor in a lab is a cool demo. A biosensor in the field, used by people who are not biologists, working in real environments, has to be packaged, stabilized, made shelf-stable, made safe, made regulatory-compliant, and made cheap. Most academic biosensors die at this last hurdle. We will see in Segment 16 that one elegant escape from this hurdle has been to take the living cell out of the equation entirely.

But the basic capability — engineered cells that detect specific molecules — is a fundamental and well-developed tool in the synthetic biologist's repertoire. If you can articulate what molecule you want to detect, and a natural regulator exists for it, you can usually build a biosensor for it. That is a remarkable thing to be able to say.

---

## SEGMENT 12 — Consumer biology: the Glowing Plant and the question of public synbio

Let me tell you a story from 2013, because it reveals something interesting about what happens when synthetic biology tries to meet the public.

In 2013, a small group of biohackers in San Francisco launched a Kickstarter project called the **Glowing Plant**. The pitch was simple. The team would engineer plants — specifically, _Arabidopsis_, the model laboratory plant — to glow in the dark, using a combination of bacterial bioluminescence genes ported into the plant genome. Backers who pledged forty dollars or more would receive seeds of the glowing plant in the mail, with the idea that you could grow your own faintly glowing _Arabidopsis_ on your windowsill, a kind of living nightlight.

The Kickstarter blew up. The campaign raised about half a million dollars from over eight thousand backers — far more than the team had asked for. It was, at the time, one of the highest-grossing science projects in Kickstarter's history. Press coverage was enormous. The Glowing Plant was, for a moment, the public face of synthetic biology — proof that engineered life was about to enter ordinary people's homes.

Almost none of it worked out the way the team had hoped.

\[Pause.\]

The science turned out to be much harder than the pitch suggested. Getting bacterial bioluminescence genes — the so-called _lux_ operon — to function in a plant genome required substantial re-engineering. Plant promoters had to be matched. Codon usage had to be optimized. Each gene had to be expressed in a compartment where it could find the necessary cofactors. And even when all of that was done, the brightness of the resulting glow was, in the team's own honest assessment, far below what backers had been led to expect. Plants that did glow glowed faintly, briefly, and inconsistently. The Kickstarter promises slipped, then slipped again.

There were also regulatory challenges. The US Department of Agriculture's regulations on genetically engineered plants made distribution of seeds to consumers difficult. The team eventually shipped some seeds, and some kits, but the broad consumer experience never materialized. The company that came out of the project shut down a few years later, after the team pivoted to other applications.

But here is why I am telling you the story. The Glowing Plant was an honest, public attempt to show ordinary people what synthetic biology could do — to make engineered life a tangible product, not a press release from a remote laboratory. And the failure modes it ran into were exactly the failure modes that have defined the field's relationship with the public. Science harder than the pitch. Regulatory friction. Distribution challenges. Public skepticism about engineered organisms in homes and gardens. The same problems show up, in different forms, in every attempt to commercialize a consumer synthetic biology product.

A more successful early consumer venture, by contrast, is **GloFish** — the genetically modified zebrafish that fluoresce in red, green, and other colors under blacklight. GloFish were originally engineered as biosensors for water pollutants at the National University of Singapore in the late 1990s. A US company licensed them and sold them as ornamental aquarium fish, starting around 2003. They are still sold today, in tens of millions of units, in pet stores across most of the United States. They are, by some accounts, the most commercially successful consumer synthetic biology product in history. They glow because of a single jellyfish gene, transferred into the fish genome, expressed constitutively in muscle. Boring science, by 2026 standards. But a real, durable consumer product.

\[Pause.\]

The contrast between Glowing Plant and GloFish is instructive. GloFish succeeded because the science was simple, the regulatory pathway was identifiable, and the product — a slightly more interesting pet fish — fit comfortably into an existing consumer market. The Glowing Plant failed because the science was harder than expected, the regulatory pathway was unclear, and the product had no obvious place in consumers' lives.

Both projects, though, reflect a recurring dream in synthetic biology: the dream of bringing engineered life out of the laboratory and into ordinary people's hands. That dream is not dead. There are still companies trying. Biotech-flavored DIY kits, glowing flowers, scent-engineered houseplants, edible insects engineered for nutritional content, gut microbe products with engineered functions. Some will succeed. Most will fail. The hard truth is that the commercial pathways for living-organism consumer products are much rougher than for chemicals or devices, both technically and socially.

The industrial side of synthetic biology, however, has had a much smoother go of it — because industry is willing to pay engineers for years to make difficult things work, and because industrial customers are not buying pets. That is the next segment.

---

## SEGMENT 13 — Industrial synthetic biology: Amyris, Ginkgo, and engineered strains at scale

The most commercially successful synthetic biology, by orders of magnitude, has not been about cells that compute. It has been about cells that **produce**. The basic move is: take a microbe, edit its metabolism so that it converts cheap inputs — sugar, mostly — into a valuable molecule that would otherwise have to be extracted from plants, synthesized from petroleum, or made by complex chemistry. The cell, in effect, becomes a factory. Drop sugar in, take valuable molecule out.

Let me tell you about two companies, because they are emblematic.

The first is **Amyris**, founded around 2003 out of Jay Keasling's lab at UC Berkeley. Keasling's lab had been working for years on a problem called the **artemisinin problem**. Artemisinin is an antimalarial drug — the most effective antimalarial drug in the world, in fact, the standard treatment for falciparum malaria. It is naturally produced by a plant called sweet wormwood, _Artemisia annua_, and traditionally extracted from the plant in small quantities. The supply chain was fragile — yields varied year to year, prices spiked, supplies ran short. Hundreds of thousands of people died of malaria each year in part because of these supply chain disruptions.

Keasling's lab spent over a decade engineering a strain of yeast — _Saccharomyces cerevisiae_, baker's yeast — to produce a precursor of artemisinin called artemisinic acid. The project involved transplanting a long metabolic pathway, originally found in the wormwood plant, into the yeast genome. It involved tuning dozens of enzymes for the right activity levels in a non-native organism. It involved optimizing the yeast's central metabolism so that it would funnel its carbon and energy into the artemisinin pathway rather than into its own growth. By the mid-2010s, the engineered yeast was producing artemisinic acid at industrial yield, and Sanofi was producing artemisinin from yeast at hundreds of metric tons per year. A drug that had been entirely dependent on plant extraction was now, partly, produced in vats by engineered cells. The price stabilized. Supply got more reliable. People who would have died, did not.

The Amyris story is, in my view, the best single illustration of what industrial synthetic biology can do. It was not glamorous. It was a decade of grinding metabolic engineering, mostly invisible to the public. But it saved lives. Many of them.

\[Pause.\]

The second company is **Ginkgo Bioworks**, founded out of MIT in 2008 by Tom Knight — yes, the same Tom Knight who helped start the Registry — along with a group of his former students including Jason Kelly and Reshma Shetty. Ginkgo's bet was different from Amyris's. Where Amyris was a product company — engineer one strain, sell one molecule, repeat — Ginkgo was a **platform company**. The pitch was: building engineered microbial strains is the new bottleneck in the bio-economy, and we will build a factory for **building strains**. Customers come to Ginkgo with a molecule they want produced. Ginkgo's engineers design a microbial strain to produce it. Ginkgo's high-throughput facilities — they call them "foundries" — build and test many candidate strain designs in parallel, picking the best ones for the customer. The customer gets the engineered strain. Ginkgo gets paid.

The bet was that microbial strain engineering would become a commodity service, like fabrication services in semiconductors. You do not need to own your own fab to be a chip designer; you tape out, send it to TSMC, and they make it for you. Ginkgo's bet was that the same model would work for biology. Be the TSMC of cells.

Ginkgo grew rapidly through the 2010s, eventually going public in 2021 at a valuation that briefly approached fifteen billion dollars. The stock price has had a rough ride since, and the platform thesis has been challenged — building strains turns out to be more bespoke and less commoditizable than chip design — but Ginkgo remains, by some measures, the largest synthetic biology company in the world, with hundreds of microbial strains shipped to customers across pharmaceuticals, agriculture, fragrances, food ingredients, and materials.

\[Pause.\]

A handful of other industrial synthetic biology companies are worth knowing about. **Zymergen** tried to apply machine learning at scale to strain engineering; they went public around the same time as Ginkgo and then collapsed, in part because their lead product, a bioplastic, failed to perform as promised. **Twist Bioscience** does not engineer strains directly; they manufacture and sell synthetic DNA at scale, which is the raw material every other synthetic biology effort depends on. Their cost-per-base-pair curve, like silicon's transistor-per-dollar curve, has been one of the quiet enabling technologies of the field. **Codexis** engineers enzymes for industrial use, particularly in pharmaceutical synthesis. **LanzaTech** engineers microbes to consume waste gases and produce fuels and chemicals. The list goes on.

The collective picture is that, twenty years into commercial synthetic biology, the field has not produced the consumer revolution that some early evangelists predicted. But it has produced a real, durable, multi-billion-dollar industrial sector — quietly building strains, quietly producing molecules, quietly displacing parts of the chemical industry with biology. The artemisinin story is the most heroic single instance. There will be more like it. Slowly. And mostly invisibly to anyone who is not in the field.

Now, the success of industrial synbio has raised a question that the field has had to take increasingly seriously: what happens when an engineered organism escapes into the environment?

---

## SEGMENT 14 — Biocontainment: kill switches and engineered safety

Suppose you have built an engineered microbe. Maybe it produces artemisinin. Maybe it senses arsenic. Maybe it lives in someone's gut and produces a drug. Whatever it does, it is alive. It can grow. It can divide. And, in principle, it could escape the controlled environment you built it for and end up somewhere you did not intend.

How do you prevent that?

This question has been with synthetic biology since the start, and it has gotten more urgent as the field's products have moved from beakers to industrial fermenters to clinical trials. The general field that addresses it is called **biocontainment**, and the central engineering object is called a **kill switch**.

A kill switch is a genetic circuit, built into the engineered organism, that causes the organism to die under conditions outside its intended environment. There are several flavors. The simplest is an **auxotrophy** — the organism is engineered so that it cannot synthesize one of its essential nutrients, and depends on that nutrient being supplied in the medium. Outside the medium, it starves. A more sophisticated version is to put a toxin gene under the control of a sensor that detects "wrong environment" — say, the presence of light, or the absence of a particular signaling molecule that you supply continuously in the fermenter. If the organism finds itself outside the fermenter, the sensor detects the change, the toxin gets expressed, and the cell dies.

\[Pause.\]

A particularly clever class of kill switch designs comes from George Church's lab at Harvard, published in a series of papers in the mid-2010s. The idea is to engineer the organism to depend on **non-natural amino acids** — amino acids that do not exist in nature. The organism's proteins are rewritten so that they incorporate a synthetic amino acid that you have to supply in the growth medium. Outside the medium, the organism cannot synthesize functional proteins, and it dies. The advantage is that this kind of containment is hard to circumvent by evolution, because mutating away from the non-natural amino acid dependency requires the organism to spontaneously re-evolve the entire machinery for using natural amino acids in those positions — which essentially never happens.

The general design problem for kill switches is the **escape rate** — the rate at which cells in the population mutate or otherwise lose the kill switch and become free to proliferate. A good kill switch has an escape rate of less than one in ten to the eighth or so — meaning fewer than one cell in a hundred million breaks the safety system. Given that a single fermenter might contain ten to the fifteenth cells, even an escape rate of one in a billion still leaves you with a million escapers per fermenter. So the engineering targets here are tight. Modern kill switch designs use multiple independent layers of containment, on the theory that an organism would have to break all of them simultaneously to escape — and the probability of multiple simultaneous breaks is the product of the individual probabilities, which can be made arbitrarily small.

\[Pause.\]

For organisms intended for release into open environments — engineered crops, engineered probiotic bacteria meant to colonize the human gut, engineered mosquitoes for malaria suppression — biocontainment is not optional. It is, often, a regulatory requirement. The field has, over the past fifteen years, developed an increasingly sophisticated toolkit for it, and the engineering rigor of the best designs is genuinely impressive.

There is also a broader, more philosophical version of the containment question. Even with perfect kill switches in individual organisms, the **information** in an engineered organism — the DNA sequence, the metabolic pathway, the circuit topology — can spread, by means we discussed in earlier lectures, through horizontal gene transfer. A kill switch in one species does not necessarily stay locked when the relevant genes get transferred to another species. The field is still working out what to do about this. It is one of the deeper open problems.

I want to be clear about one thing. The risk of engineered organisms running wild and causing ecological harm is, in expert assessment, fairly low — but it is not zero, and the field takes it seriously. The same engineering rigor that produces a circuit needs to be applied to the safety of the circuit. The early synthetic biology community made this a central commitment, going back to the **Asilomar conference** of 1975 — which preceded synthetic biology proper but established the cultural norm — and the commitment has held. Most modern industrial synthetic biology work goes through extensive biosafety review, with kill switches and containment systems designed into the work from the start, not bolted on as an afterthought.

Now let us turn to another thread of the field that has been quietly transformative: the move away from protein-based logic into RNA.

---

## SEGMENT 15 — RNA-based logic: riboswitches and toehold switches

For most of the field's history, the parts list has been dominated by proteins. Repressors, activators, recombinases, fluorescent reporters — all proteins. But starting in the mid-2000s, a parallel parts list grew up around RNA. RNA can do many of the things proteins can do, with some interesting advantages: it is faster to design, faster to synthesize, more predictable in its base-pairing behavior, and it operates at a different layer of the regulatory stack — between transcription and translation, rather than at transcription itself.

The first major RNA-based regulatory part to enter the toolkit was the **riboswitch**. A riboswitch is a piece of structured RNA, typically in the untranslated region of a messenger RNA, that changes conformation when it binds a particular small molecule. The conformation change affects whether the downstream gene gets translated. Natural riboswitches were discovered in the early 2000s in bacteria — they regulate genes involved in synthesis of various metabolites by directly sensing those metabolites and shutting off transcription or translation when there is already enough around. Synthetic riboswitches have been built that respond to all sorts of designed inputs.

The riboswitch is, in essence, an RNA-based sensor. It gives you a way to wire a small molecule directly to a translation event, without needing a separate sensor protein in between. Fewer parts. Faster response.

\[Pause.\]

A more dramatic move into RNA logic came in 2014, in a paper from Alexander Green, Pamela Silver, and Jim Collins — yes, the same Jim Collins who built the toggle switch — published in _Cell_. The paper introduced a new RNA-based logic device called the **toehold switch**.

Here is the idea. A toehold switch is a piece of RNA designed so that its own structure blocks translation of a downstream coding sequence. The RNA folds up in a way that hides the ribosome binding site, so the ribosome cannot land, so no protein is made. But the structure includes a short single-stranded region — the "toehold" — that is exposed and available for base-pairing. When a separate, complementary piece of trigger RNA is present, the trigger binds to the toehold, and the binding then unzips the rest of the switch RNA's structure, exposing the ribosome binding site, and translation can proceed. Trigger present, switch open, protein made. Trigger absent, switch closed, no protein.

The toehold switch is, in essence, an RNA-based **AND gate**: only when both the trigger RNA and the switch RNA are present does translation turn on. Both inputs required. The output is binary.

The analogy I want you to carry: **toehold switches are RNA-based AND gates. Only when both the trigger RNA and the switch RNA are present does translation turn on, all chemistry, no protein needed.**

\[Pause.\]

Two features of toehold switches make them remarkable. First, they are **programmable** in a way protein circuits are not. The sequence of the trigger is what determines what the switch responds to, and you can pick that sequence to be anything you want, with very wide flexibility. If you want a switch that responds to a particular viral RNA — say, a sequence diagnostic of Zika virus or SARS-CoV-2 — you design the switch with a toehold complementary to that viral sequence. The switch will turn on in the presence of the virus.

Second, toehold switches work outside cells. They work in **cell-free** reactions — buffers containing translation machinery, with the switch RNA, the trigger RNA, and a reporter gene. No living cell required. That last property is what enabled one of the most striking practical applications of synthetic biology to date, which we discuss in the next segment.

There is now a rich RNA-based parts list, growing year by year. Toehold switches in various configurations. **CRISPR-based RNA sensors** that use Cas13 to detect specific RNA sequences. Engineered **ribozymes** that catalyze cleavage in response to small molecules. **Aptamers** — RNA molecules selected to bind particular targets — as biosensors. The RNA layer of the synthetic biology stack is, in 2026, one of the most active frontiers of the field.

---

## SEGMENT 16 — Cell-free synthetic biology: paper-based diagnostics

Now let me tell you about what happened when Jim Collins and Keith Pardee, his then-postdoc at the Wyss Institute at Harvard, put toehold switches together with another idea: **freeze-dried cell-free transcription-translation systems**.

A cell-free system is exactly what it sounds like. You take cells — _E. coli_ are most common — break them open, remove the membranes and most of the chromosomal DNA, and keep the rest of the soup: ribosomes, RNA polymerase, transfer RNAs, amino acids, nucleotides, and the dozens of other components needed for transcription and translation to happen. You add a piece of DNA. The DNA gets transcribed. The transcript gets translated. The protein gets made. Inside a tube, on a benchtop, with no living cell anywhere in the reaction.

Cell-free systems have been around since the 1960s — Marshall Nirenberg used them to crack the genetic code. But Collins and Pardee made a move that transformed them. They showed, in a 2014 paper, that the entire reaction could be **freeze-dried** onto paper. You take the cell-free components, mix in a designed DNA construct, drop the mixture onto a piece of filter paper, and freeze-dry it. The reaction is stable at room temperature for months. When you want to use it, you rehydrate the paper with a sample — say, a saliva sample, or a blood sample — and if the sample contains a particular target molecule that the construct is designed to detect, the freeze-dried machinery wakes up, runs the reaction, and produces a visible output.

The combination of toehold switches as sensors and freeze-dried cell-free reactions as the substrate gave rise to a whole class of **paper-based synthetic biology diagnostics**. You can make a toehold switch responsive to, say, a particular fragment of Zika virus RNA. You can dry that switch, along with all the cell-free machinery, onto paper. You can ship the paper to anywhere in the world without refrigeration. A health worker in the field can drop a patient's sample onto the paper, wait an hour, and read out a color change to tell whether the patient has Zika.

\[Pause.\]

Pardee, Collins, and their collaborators demonstrated this approach for several pathogens, including Zika, in 2016. The paper attracted enormous attention because it dramatized something the synthetic biology community had been promising for a while: that the same logic of programmable molecular sensors could be deployed in distributed, low-resource, real-world settings, not just in labs.

There are still challenges. Sensitivity is not as high as in classical diagnostic methods. Manufacturing freeze-dried reactions at scale is harder than the proof-of-concept implies. Regulatory approval for novel diagnostic platforms is its own marathon. But the technology has continued to mature, and several startups are now working on commercial cell-free diagnostics, with some products in late-stage development for clinical and field use.

The conceptual punchline is this. **Cell-free synthetic biology** decouples the engineering of biological circuits from the constraints of living cells. You do not have to worry about your circuit being killed by the cell, or being too costly for the cell to express, or being co-opted by evolution. You do not have to worry about biocontainment, because there is no organism to escape. You do not have to worry about supplying nutrients, or growth conditions, or anything else that comes with the cell as a substrate. The trade-off is that you lose the ability to self-replicate — every reaction needs fresh ingredients, and the system cannot grow itself. For many applications, that trade-off is worth it.

This is, increasingly, the way I see the field's near-term commercial momentum heading. Less "engineered cells in industrial fermenters." More "engineered biology in shelf-stable formats for distributed use." Diagnostics. Biomanufacturing at point of use. Biosecurity. The deeper engineering of biology, deployed in formats that look, to the user, more like a chemistry kit than a living organism.

Now let me bring us back to earth with the segment I have been dreading and looking forward to in equal measure: the chronic engineering reality.

---

## SEGMENT 17 — Why biology resists abstraction: context, evolution, retroactivity

I want to spend this segment being honest with you about how hard the field actually is. Because I have spent most of the last hour and a half describing the synthetic biology dream — modular parts, predictable composition, automated design, deployable products — and the dream is real, and the dream is making slow steady progress. But there is also a chronic reality, and if you go into this field expecting it to behave like electrical engineering, you will be punished for that expectation, repeatedly, for the rest of your career.

The chronic reality is that **biology resists abstraction**. Three particular ways it resists abstraction are worth dwelling on: context, evolution, and retroactivity.

\[Pause.\]

First, **context**. A genetic part is supposed to be modular — its behavior in one circuit should match its behavior in another. In practice, genetic parts are extraordinarily sensitive to the genetic and cellular context they sit in. A promoter that runs strong in one strain of _E. coli_ may run weak in another strain. A promoter that runs strong in _E. coli_ may not work at all in yeast. An RBS that gives high translation when followed by one CDS may give low translation when followed by a different CDS, because of RNA folding interactions between the RBS and the front end of the next gene. The exact growth conditions — temperature, medium composition, growth phase — can change part behavior dramatically. Different chassis organisms behave differently. Different copy numbers behave differently. The "characterization" of a part — what you put in the data sheet — is always going to be a characterization in a particular context, and the part's behavior outside that context is often substantially different. The dream of context-independent parts is, in honest assessment, mostly a dream. Real engineering practice involves recharacterizing parts in your specific context and tuning accordingly.

Second, **evolution**. This is the one that breaks the engineer's heart the first time it happens to them. You build a beautiful circuit. You drop it into _E. coli_. It works. You are delighted. You leave the culture growing for a week. You come back. The circuit no longer works. You sequence the plasmid. Mutations have appeared. The repressor has been broken. The reporter has been silenced. The cells have evolved away your design.

What happened? The circuit imposed a metabolic cost on the cells — making proteins is expensive, and a circuit running at high expression slows growth. Cells that, by chance, acquired a mutation that broke the circuit grew slightly faster than cells that maintained it. Over generations, the broken cells outcompeted the working cells, and the population went from "circuit works" to "circuit broken" by simple Darwinian selection. Evolution has actively dismantled your engineering.

This is the **chronic reality** of synthetic biology and it has no clean solution. You can mitigate it: pick parts that impose smaller burdens, use stronger selection to keep working cells, use shorter time scales for your experiments, design circuits to be evolutionarily robust by aligning fitness with function. But you cannot eliminate it. Living substrates evolve. That is what it means for them to be alive.

The analogy I want you to carry: **biology resists abstraction. What works in one cell line may not in another, what works at week one evolves away by week eight, what works on its own breaks when wired into a bigger circuit.**

\[Pause.\]

Third, **retroactivity**. This is the deepest one, and the one that most directly violates the engineering ideal. In electronics, when you connect the output of one gate to the input of the next, you do not change the behavior of the upstream gate. The output of the gate is a voltage; the voltage drives the input of the next gate; the next gate does not, in any significant way, feed back on the previous gate. The connection is one-directional. In biology, this is rarely true. When you connect the output of one gene — a transcription factor, say — to a downstream promoter, the binding of that transcription factor to the downstream promoter actively **sequesters** the transcription factor, lowering its free concentration, and changing its ability to act on other targets. The downstream component, by binding the signal, depletes the signal. Information flows backwards through the wire.

The phenomenon was given the name **retroactivity** by control theorists, particularly Domitilla Del Vecchio's group at MIT, in the late 2000s. Their analysis showed that retroactivity is, in many cases, severe enough to dramatically change the behavior of a circuit when you wire it up. A perfectly-tuned upstream gate can stop oscillating or stop switching when you connect a load to it. This is roughly analogous to what happens in poorly-designed electronics, where a circuit that works on the bench stops working when you connect it to something else. The fix in electronics is called **buffering** — adding amplifier stages that decouple the upstream output from the downstream load. The fix in biology is harder, but several research groups have built explicit buffering or **insulator** devices to mitigate retroactivity. These work, in part. They do not yet solve the problem in general.

\[Pause.\]

Beyond these three — context, evolution, retroactivity — there is a long tail of other issues. **Resource competition**, where two circuits running in the same cell compete for ribosomes, polymerases, and energy, and end up coupling in unexpected ways. **Toxicity**, where the engineered parts harm the host cell in ways that were not predicted. **Crosstalk**, where parts intended to be independent turn out to share regulatory inputs. **Variability** between batches, lots, and individual experiments at a level that would be considered embarrassing in any other engineering discipline.

The cumulative effect is that synthetic biology, in 2026, still feels less like a clean engineering discipline and more like a craft that is in the process of becoming an engineering discipline. The trajectory is right. The progress is real. But anyone who tells you that biology is "just engineering" has either never built a circuit themselves, or is selling you something.

I want to leave this segment on a constructive note. The fact that biology resists abstraction is not a failure of the field; it is a deep property of living matter. Cells are systems that have been optimized by billions of years of evolution to do many things at once, with massive overlap and entanglement among parts. Of course they do not factor cleanly. The engineering project is to find the abstractions that do, in fact, hold — to build interfaces that are robust enough to compose, to develop measurement techniques that capture the real variation, to write design rules that take the cell's idiosyncrasies into account. That project is hard. It is also tractable. And it is, in many ways, just getting started.

---

## SEGMENT 18 — The frontier: mammalian circuits, multicellular synbio, and AI-assisted design

We close with the frontier. Where is synthetic biology going? Three directions seem to me most important in 2026, and I will spend the last segment on each one in turn.

The first frontier is **mammalian cell circuits**. For most of the field's history, the workhorse organism has been _E. coli_, with yeast in a strong second place. Mammalian cells — including human cells — were considered too complex, too slow, and too poorly characterized to build useful circuits in. That has changed. Over the past fifteen years, several groups have made systematic progress in moving the synthetic biology toolkit into mammalian cells. Chris Voigt, the same person who built Cello, has put substantial effort into mammalian cell circuit design. **Wendell Lim** at UCSF has built a series of synthetic receptors — including the famous **SynNotch** platform — that allow engineered T cells to make complex, multi-input decisions about when to attack a tumor. **Ron Weiss** at MIT has built mammalian cell sensors and classifiers, including circuits that detect specific patterns of microRNA expression to identify cancer cells.

This shift matters enormously for medicine. Cell-based therapies — particularly **CAR-T cell therapies** for cancer — have become real clinical products over the past decade. The current generation of CAR-T cells are relatively simple: a single engineered receptor that recognizes a tumor antigen and triggers killing. The next generation is bringing synthetic biology's logic into the picture. Imagine a T cell that attacks only when it sees two tumor antigens simultaneously, and not either one alone. That is a synthetic AND gate inside a clinical therapeutic. Imagine a T cell that attacks while inside a tumor microenvironment but stands down in normal tissue. That is a context-sensing circuit inside a clinical therapeutic. The combination of cell-based therapies with synthetic biology logic is, in my view, one of the most consequential medical developments of the next decade.

\[Pause.\]

The second frontier is **multicellular synthetic biology** — moving beyond single cells, beyond simple populations, into engineered tissues and engineered organisms. Quorum sensing, which we discussed in Segment 9, was the first taste of this. Now imagine more ambitious moves: engineered bacterial communities that perform distributed computation across many strains, with each strain handling part of the logic. Engineered plant tissues that produce useful molecules in different organs. Engineered microbiomes — communities of dozens or hundreds of microbial species, designed to collectively perform a function in the gut, on a crop, in soil. The unit of engineering moves from cell to community.

The challenges are immense. Communities are even harder to characterize than individual cells. They evolve faster, drift more, and are more sensitive to environmental conditions. But the rewards are correspondingly large. Many of the most important biological functions — soil fertility, gut health, environmental remediation, plant productivity — are intrinsically multi-organism phenomena. They cannot be addressed by engineering single cells in isolation. The field will, of necessity, have to learn to engineer communities. The early efforts in **engineered microbiomes** — companies like Pivot Bio in agriculture, Vedanta Biosciences in human health — are pointing the way.

\[Pause.\]

The third frontier is **AI-assisted design**. Through most of the field's history, designing a circuit has been an artisanal activity. You sketch the topology, you pick parts from a library, you tune things by hand, you iterate. Cello, in 2016, was the first serious move toward automating the design step. Over the past few years, that move has accelerated dramatically. Modern protein design tools — RoseTTAFold, AlphaFold, ESM-Fold, and the protein design models from David Baker's lab and others — can design new proteins from scratch with surprising reliability. Tools for designing **RNA structures** are emerging. Tools for designing entire pathways and circuits, using the same kind of foundation-model machinery that drives modern language models, are appearing in research papers month by month.

What this means, in practice, is that the design loop for a synthetic biology project is getting shorter and the design space is getting larger. You can now ask: "design me a protein that binds this molecule with this affinity" and get a credible candidate in hours rather than years. You can ask: "design me a circuit that implements this Boolean function in this organism" and get a candidate that, while not guaranteed to work first try, will work with reasonable iteration. The cost of trying something has fallen. The number of things you can try has risen. The bottleneck is moving from "what should we build?" to "what should we measure?" — characterization remains the slow, expensive step.

If you want a rough analogy: synthetic biology in 2026 is at roughly the point that software engineering was when integrated development environments and high-level languages first became standard. The discipline is still hard. The tools are dramatically better than they were even five years ago. And the people coming into the field today have, by accident of timing, a much easier time than the people who built it twenty years ago.

\[Pause.\]

Let me close with a thought about where this is all heading. The dream of synthetic biology was, from the start, the dream of treating life the way we treat technology — as something we understand, design, build, and trust. The dream has not been fully achieved. It may never be fully achieved; living matter is not silicon and never will be. But the discipline has moved, in twenty-five years, from a handful of curiosities in a few labs to an industrial reality that produces drugs, builds diagnostics, develops cell-based therapies, and shapes parts of the modern economy. The toggle switch in Gardner and Collins's 2000 paper is now a textbook example. The repressilator in Elowitz and Leibler's 2000 paper is now a teaching tool. The Cello-designed circuits in Voigt's 2016 paper are now part of an industrial design pipeline. The toehold switches in Pardee and Collins's 2014 paper are now in clinical trials as diagnostics. Each one of these moved, over time, from "remarkable curiosity" to "ordinary tool." That is what a maturing engineering discipline looks like.

You — if you decide to make a career here — will be working on the next set of curiosities to make that journey. Some of what you build will be hard, slow, and unrewarding. Some of it will be brilliant. All of it will be in service of the proposition that life is, at some level, programmable. The proposition has held up better than its critics expected and worse than its evangelists predicted. It will continue to hold up, slowly, the way real engineering disciplines always have.

That is the field. That is where it has been. That is where it is going. Thank you for the two hours, and I hope I have given you, if not all the answers, at least an honest picture of the questions.

\[Pause. End of lecture.\]

---

## APPENDIX — Things mentioned but not fully developed, with brief notes for the curious

A short reference list, in the order things appeared, for further reading and follow-up questions.

**Gardner, Cantor, and Collins (2000).** "Construction of a genetic toggle switch in _Escherichia coli_." _Nature_, volume 403. The toggle switch paper. Cross-inhibition between two repressors produces bistability. The founding paper for designed genetic memory.

**Elowitz and Leibler (2000).** "A synthetic oscillatory network of transcriptional regulators." _Nature_, volume 403. The repressilator paper. Three repressors in a cyclic inhibition loop produce sustained oscillations in _E. coli_, with periods around 150 minutes. The founding paper for designed genetic rhythms.

**BioBricks Foundation and the Registry of Standard Biological Parts.** Open community resource. The parts catalog the early synthetic biology movement built around. Browse at the Registry website. Many of the parts are deprecated by modern standards, but the historical depth and educational value are real.

**iGEM (International Genetically Engineered Machine).** Annual competition for synthetic biology projects, primarily by undergraduate teams. Founded 2003 at MIT. Now international. If you are an undergraduate, find out whether your institution fields a team and ask to join.

**Elowitz, Levine, Siggia, and Swain (2002).** "Stochastic gene expression in a single cell." _Science_, volume 297. The defining paper on noise in gene expression, distinguishing intrinsic from extrinsic noise. The numerical baseline for how variable single-cell gene expression actually is.

**Nielsen et al. (Voigt lab, 2016).** "Genetic circuit design automation." _Science_, volume 352. The Cello paper. Forty-five of sixty designed circuits worked first time. The closest thing to a "moon landing" moment for synthetic biology.

**Quorum sensing in _Vibrio fischeri_.** The classical model system for cell-cell signaling in bacteria. Bonnie Bassler's lab at Princeton has been central to this work for decades, expanding it well beyond the original _V. fischeri_ system.

**Hasty lab, synchronized oscillators.** Danino et al. (2010), "A synchronized quorum of genetic clocks," _Nature_. Engineered bacteria synchronize their oscillations across a colony via shared signaling molecules.

**Recombinase memory and SCRIBE / CAMERA.** Multiple groups, particularly Tim Lu's lab at MIT and David Liu's lab at Harvard. The general project of writing durable records of cellular history into DNA. Look for the SCRIBE and CAMERA original papers for entry points.

**Arsenic, glucose, and TNT biosensors.** Many groups, over many years. Useful introductory reading: van der Meer and Belkin (2010), "Where microbiology meets microengineering: design and applications of reporter bacteria," _Nature Reviews Microbiology_.

**Glowing Plant Kickstarter.** Launched 2013. Useful as a case study in the gap between consumer expectations and biological reality, and in the regulatory landscape for engineered organisms.

**GloFish.** Yorktown Technologies, commercial product since 2003. The original engineering was done at NUS Singapore in the late 1990s, by Zhiyuan Gong and collaborators, as part of pollution biosensor work. The commercial success was, by some measures, an accident.

**Amyris and artemisinin.** Ro et al. (2006), "Production of the antimalarial drug precursor artemisinic acid in engineered yeast," _Nature_, volume 440. The first big step. Industrial scale-up by Amyris and Sanofi followed over the subsequent decade.

**Ginkgo Bioworks.** Founded 2008 by Tom Knight and former students. Platform-company model for industrial strain engineering. Public company since 2021. Worth following as a case study in the commercial maturation of the field.

**Twist Bioscience.** DNA synthesis at scale. The cost curve of DNA synthesis is one of the quiet enabling curves of the entire field.

**Asilomar 1975.** The conference where molecular biologists, ahead of the curve, established voluntary safety norms for recombinant DNA work. The cultural ancestor of modern biocontainment thinking.

**Church lab biocontainment.** Mandell et al. (2015), "Biocontainment of genetically modified organisms by synthetic protein design," _Nature_. Non-natural-amino-acid-dependent organisms as multiply-redundant containment.

**Toehold switches.** Green, Silver, Collins et al. (2014), "Toehold switches: de-novo-designed regulators of gene expression," _Cell_, volume 159. RNA-based AND gates with arbitrary sequence specificity.

**Cell-free paper-based diagnostics.** Pardee et al. (2014, 2016), in _Cell_. Freeze-dried cell-free transcription-translation reactions on paper, programmable for any RNA sensor. Zika diagnostic was the showcase application.

**Retroactivity.** Del Vecchio, Ninfa, and Sontag (2008), "Modular cell biology: retroactivity and insulation," _Molecular Systems Biology_. Control-theoretic analysis of how loads on biological signals feed back to disturb the upstream signal.

**Wendell Lim and SynNotch.** Morsut et al. (2016), "Engineering customized cell sensing and response behaviors using synthetic Notch receptors," _Cell_. Mammalian cell circuits that perform contact-dependent sensing.

**Ron Weiss and microRNA classifiers.** Xie et al. (2011), "Multi-input RNAi-based logic circuit for identification of specific cancer cells," _Science_. Mammalian circuits that compute over microRNA profiles to classify cell types.

**AI-assisted design.** The state of the art changes month by month. Look for recent work from David Baker's lab on de novo protein design, from Generate Biomedicines and Inceptive on RNA design, and from Profluent and EvolutionaryScale on protein language models. The frontier is moving rapidly enough that any specific reference here will be out of date within a year of this lecture's recording.

**A general textbook.** For the engineering side of the field, the book "Design Principles of Biological Circuits" by Uri Alon (second edition, 2019) is the standard. It is a model of how to teach a quantitative subject without losing the intuition.

That is the appendix. Use it as a starting map. The field is moving fast enough that the best reading lists are always a few years out of date, but the entries here will give you a coherent way in, and from each one, the citation trail will take you to the frontier.

\[End of script.\]


