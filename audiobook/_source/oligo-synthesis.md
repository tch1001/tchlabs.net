# Oligonucleotide Synthesis: How We Build DNA, Base by Base

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, landing comfortably inside a two-hour slot. (Read faster, ~140 wpm, and you'll have generous room for questions or board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The unsung infrastructure: why synthetic DNA underlies everything

Alright. Good morning, everyone. Let's get started. Today, for the next two hours, we are going to talk about something that almost every other lecture in this course has quietly assumed exists, without ever explaining where it comes from. We are going to talk about **oligonucleotide synthesis** — the chemistry that lets us, sitting at a bench in 2026, type any DNA sequence we want into a website and have a real, physical, sequence-defined piece of DNA show up in a tube in our lab two days later.

I want to make a claim right at the start, and I want you to hold onto it for the next two hours and see if I've convinced you by the end. Here is the claim. **Synthetic DNA is the most quietly important piece of infrastructure in all of molecular biology.** It is more important than PCR machines. It is more important than electrophoresis. It is, in some ways, more important than the sequencers we spent three lectures admiring earlier in this course. Because every single one of those things — every PCR, every Sanger run, every Illumina library, every CRISPR experiment, every Gibson assembly, every plasmid you cloned in the teaching lab last semester, every COVID test that was ever run on a swab from your nose — every single one of them depended on someone, somewhere, having first synthesized a short piece of DNA to a precise specified sequence. No synthetic DNA, no PCR primers. No PCR primers, no PCR. No PCR, no modern molecular biology. The whole edifice stands on synthetic DNA, and yet almost nobody who uses it ever stops to think about where it actually comes from.

So that is what we are going to fix today.

\[Pause.\]

Let me give you the scope of what I mean by "everything depends on this." Think about what you order from a website like Integrated DNA Technologies, or IDT, or from Thermo Fisher, or from Eurofins. You order PCR primers — short pieces of DNA, twenty bases long, that let you amplify a specific gene. Those are synthesized. You order a fluorescent probe for a qPCR experiment — a piece of DNA with a fluorophore on one end and a quencher on the other. Synthesized. You order a guide RNA for a CRISPR experiment — that's a synthesized oligonucleotide too, or it's made by an enzyme reading from a synthesized DNA template. You order a gene block, a so-called gBlock, which is a chunk of DNA five hundred bases long, ready to drop into a Gibson assembly. Synthesized. The mRNA in the COVID vaccine that some of you got in your arm five years ago — that mRNA was made by a process that started with a synthesized DNA template. The antisense oligonucleotide drug milasen, that we spent two hours on last week — that was a synthesized oligonucleotide, twenty-two bases long, with chemical modifications, made on a machine. Every single primer, every probe, every ASO drug, every gene block, every guide, every DNA bookend in a Gibson assembly — they all trace back to the same family of machines, running the same family of chemistries, on the same kind of solid support.

That chemistry is called **phosphoramidite chemistry**. The machines are called **DNA synthesizers**, or oligonucleotide synthesizers, or just synthesizers if everyone knows what you mean. The technique was perfected in 1981 by a chemist named Marvin Caruthers, working at the University of Colorado Boulder. And in a sense, every conversation about modern molecular biology since 1981 has been a conversation conducted on top of Marvin Caruthers's chemistry, with very few people noticing.

\[Pause.\]

So that's where we are going. By the end of these two hours, if you walk out of here, I want you to be able to do three things. One: explain to a curious friend, in plain English, what it means to "synthesize" a piece of DNA — what the machine is actually doing, base by base, on a tiny piece of glass. Two: walk through the phosphoramidite cycle — the four-step dance of deprotection, coupling, capping, and oxidation — and explain why each step exists and what would happen if you skipped it. And three: look at a news story about a new ASO drug, or a new gene therapy, or a new mRNA vaccine, or a DNA data-storage demo, and have a real intuition for what's happening underneath, because almost certainly there's a synthesizer in there somewhere doing the heavy lifting.

That is our contract for the next two hours.

Let me start with the analogy I am going to come back to over and over again, because if you internalize this single picture, half of the chemistry becomes intuitive. Imagine you are making a beaded necklace. You have a string. You have a clasp at one end. And you have a pile of beads of four different colors — let's say red, green, blue, and yellow — and you want to thread them onto the string in a specific order. Red, green, green, blue, yellow, red, blue. Whatever sequence you want. The way you do it is one bead at a time. You start by tying the first bead — let's say it's a red one — to the clasp. Now you have one bead on the string. Then you add the next bead, then the next, then the next, until you have built up the whole sequence. At the end, you cut the string off the clasp, and you have your necklace.

That is exactly what a DNA synthesizer does. The string is a chain of nucleotides. The beads are the four DNA bases — A, T, G, and C. The clasp is a tiny piece of glass called a controlled pore glass bead, sitting at the bottom of a tiny column. And the bead-by-bead addition is the phosphoramidite cycle. One base at a time, in a specific order you specified when you typed the sequence into the website. Build it up to the length you want. Then snip it off the glass and ship it to the customer.

That's it. That is the whole field, in one analogy. Everything else we are going to do today is just adding detail and nuance to that picture.

\[Pause.\]

Now, one more thing before we move on. I said the chemistry was perfected in 1981. But the desire to make synthetic DNA goes back further — back to the 1960s, when a man named Har Gobind Khorana was, almost single-handedly and almost heroically, trying to make short pieces of DNA by hand, in glassware, one base at a time, using chemistry that was so painful and slow that an entire dissertation might be spent making a single octamer. We are going to start there, because to understand why phosphoramidite chemistry is so beautiful, you have to understand what came before it — and how badly the field needed something better.

Let's go meet Khorana.

---

## SEGMENT 2 — Before Caruthers: Khorana's heroic decade and why we needed synthetic DNA

So picture the early 1960s. Watson and Crick have proposed the double helix. The genetic code is being worked out — Marshall Nirenberg and Heinrich Matthaei have just done their famous poly-U experiment in 1961, showing that a chain of uracils, read by a ribosome, produces a chain of phenylalanines. The code is starting to crack open. But to actually finish the job of decoding all sixty-four codons, you need a way to make synthetic RNA and DNA of defined sequence. You need to make, for example, the sequence UCUCUCUCUC and see what it codes for. You need to make UAUAUAUA and see what it codes for. And to do that, somebody has to actually build, in glassware, a polymer of defined sequence.

That somebody, more than anyone else, was Har Gobind Khorana. Khorana was an Indian-American biochemist working at the University of Wisconsin and later at MIT. He shared the 1968 Nobel Prize in Physiology or Medicine for his work decoding the genetic code, but the work he is less famous for, and which we are going to focus on today, is the chemistry he spent the 1960s developing to make synthetic oligonucleotides in the first place.

\[Pause.\]

The chemistry Khorana used is now called **phosphodiester chemistry**, or sometimes the phosphotriester method in its later, slightly improved form. I am going to describe it briefly so you understand how heroic it was, and how badly the field needed something better.

Here is the picture. You have a nucleoside — that's a base attached to a sugar, without the phosphate yet. Adenosine, say. You want to attach a phosphate group to the 3' carbon of the sugar so it can link to the next nucleoside. So you take the nucleoside in solution, and you add a phosphorylating reagent. The reagent puts a phosphate on the 3' position. Now you take a second nucleoside, with its 5' hydroxyl group free, and you mix the two together, and with the help of a coupling reagent — typically a carbodiimide — you form a bond between the phosphate of the first and the 5' hydroxyl of the second. Congratulations. You have made a dinucleotide. One bond. You have spent about a week of work.

Now do it again. To extend the chain to a trinucleotide, you have to deprotect the appropriate end of your dinucleotide, add the next nucleoside, run the coupling reaction, deal with all the side reactions and protecting group issues, separate your desired product from the soup of byproducts, characterize it, and only then can you go around again. Khorana's group, working at the absolute limit of organic chemistry in their era, eventually managed to make synthetic oligonucleotides up to about a dozen bases long. In 1970, they reported the total chemical synthesis of a complete gene — a yeast alanine tRNA gene — seventy-seven base pairs. The synthesis took years. It took an entire lab. It produced a quantity of DNA so small that it would barely register on a modern spectrophotometer.

For that achievement, by the way, Khorana absolutely deserved the Nobel he had already won, and arguably deserved a second one. To synthesize a seventy-seven-base-pair gene from scratch in 1970, with the tools available in 1970, was a feat that I want you to compare, in your imagination, to climbing K2 in tennis shoes. It is the kind of thing that just barely doesn't kill you, and that absolutely no normal person can replicate.

\[Pause.\]

But you can see the problem. If a Nobel laureate, running a large lab, takes years to make seventy-seven base pairs of DNA, then synthetic DNA is not going to be a useful everyday tool. It is going to be a curiosity — a thing only a handful of specialist labs in the world can do, and only for one or two carefully chosen projects per decade. That is not infrastructure. That is a monument.

For molecular biology to become what it became — for PCR to be invented, for cloning to scale, for sequencing to take off — somebody was going to have to figure out how to synthesize DNA fast, cheap, and reliably enough that an average graduate student could order a custom sequence and have it in their hand in a couple of days. Khorana's chemistry could never get there. The reactions were too slow. The yields per step were too low. The side products were too messy. The protecting group strategies were too fiddly. You needed something fundamentally different.

Two big ideas had to land before that fundamentally different thing could exist.

The first big idea was **solid-phase synthesis**. Bruce Merrifield, working at Rockefeller University in the early 1960s on peptide synthesis — not DNA, peptides, the same fundamental problem of building a polymer of defined sequence — had the insight that you could attach the growing chain to a solid bead, do all your chemistry on the bead, and wash away the soluble reagents between steps. That solved the purification problem at every cycle. You didn't have to chase your product around in solution anymore. The bead held it in place. You added reagents, let them react, washed everything else away, and your product stayed on the bead, ready for the next addition. Merrifield got the Nobel Prize in 1984 for that idea, and it transformed peptide synthesis overnight. It would, eventually, do the same thing for DNA — but only once somebody figured out the right chemistry to run on those beads.

The second big idea was the **phosphoramidite**. And that takes us to Marvin Caruthers.

\[Pause.\]

So we are going to leave Khorana here with deep respect. The man and his lab did something that, in retrospect, looks almost impossible. They proved that a gene could be built atom by atom from organic chemistry. They paid an enormous price for that proof. But the price they paid is the reason that, by the early 1980s, the entire field was hungry for a better way. Hungry enough that when Caruthers showed up with his phosphoramidites, the field grabbed onto that chemistry with both hands and never looked back.

That is where we go next.

---

## SEGMENT 3 — The Caruthers breakthrough: phosphoramidite chemistry, 1981

Marvin Caruthers was a graduate student in Khorana's lab in the 1960s. He saw, up close, exactly how painful the phosphodiester chemistry was. He went on to start his own lab at the University of Colorado Boulder, and through the 1970s, he worked on the problem of making DNA synthesis better. He was not the only person working on this — there were several competing approaches being tried by different groups, including the phosphotriester method that Khorana himself improved, and an approach based on phosphochlorides developed by Robert Letsinger at Northwestern. The whole field was looking for the right activated phosphorus chemistry that would let you couple bases together fast and cleanly on a solid support.

In 1981, Caruthers and his graduate student Serge Beaucage published the paper that solved the problem. The activated phosphorus chemistry they had landed on was based on a class of compounds called **phosphoramidites**. The name comes from the chemistry: it's an organic phosphorus compound where one of the substituents on the phosphorus is a nitrogen-containing group — an amine, specifically a diisopropylamine, in the canonical case. Phosphorus, amine, the rest of the protecting groups, and the nucleoside attached on one side. A **phosphoramidite**.

\[Pause.\]

Here is why phosphoramidites were the right answer, when nothing else had been. Three reasons.

One: they are **stable**. You can buy them in a bottle. You can store them on a shelf. You can dissolve them in acetonitrile and pump them through a synthesizer for weeks. Earlier activated phosphorus reagents — phosphochlorides especially — were so reactive that they hydrolyzed in the presence of any trace of water, and you had to make them fresh every day. Phosphoramidites just sit there. They are stable to storage, but they are reactive enough to couple to a free hydroxyl in seconds when activated by a mild acid catalyst. That combination — shelf-stable, but rapidly reactive when activated — is the holy grail for any kind of chemistry you want to industrialize. It's the difference between nitroglycerin, which blows up if you look at it, and dynamite, which is exactly the same chemical but stable until you set it off on purpose. Caruthers had found the dynamite version of activated phosphorus.

Two: they **couple fast and clean**. When you mix a phosphoramidite with the free 5' hydroxyl of a growing oligonucleotide chain in the presence of an activator — typically tetrazole or one of its descendants — the coupling reaction is essentially complete in under a minute, often in under thirty seconds. The yield per coupling is extraordinarily high — better than ninety-nine percent in a well-tuned synthesizer. That ninety-nine percent number is going to come up over and over again in this lecture, and we are going to spend an entire segment on why it matters. But for now, hold this: more than ninety-nine percent per coupling, in under a minute, with no byproducts in solution to interfere with the next step.

Three: the chemistry **fits on a solid support**. The nucleoside attached to the bead has a free 5' hydroxyl that gets revealed at the start of each cycle. The phosphoramidite comes in carrying the next base. They react. The next base is now on the bead, with a new free 5' hydroxyl ready to couple to the next phosphoramidite. The cycle repeats. Wash, react, wash, react. The growing chain stays anchored to the bead the whole time. Everything that isn't on the bead — solvents, unreacted reagents, side products, capping reagents, oxidizing reagents — gets washed away between steps. The purification problem that ruined Khorana's life is no longer a problem at all. You just rinse it down the drain.

\[Pause.\]

So when Caruthers and Beaucage published their 1981 paper, the entire architecture of modern DNA synthesis suddenly clicked into place. You had Merrifield's solid-phase idea, you had Caruthers's phosphoramidite chemistry, and you had a series of cleverly designed protecting groups that let you control exactly which end of which molecule reacted at each step. Within a couple of years, the first commercial DNA synthesizers were being sold by a company called Applied Biosystems — we'll talk about them properly in Segment 9 — and by the mid-1980s, any reasonably equipped molecular biology lab had access to synthetic oligonucleotides on a routine basis. PCR was invented in 1983 by Kary Mullis. It absolutely could not have become the dominant technique it became without easy access to synthetic primers. That timing is not a coincidence. Caruthers's chemistry and Mullis's amplification arrived within two years of each other, and together they transformed molecular biology from a craft into an industry.

Caruthers, by the way, did not get the Nobel Prize for this. He probably should have. Many of us in the field think he probably will, eventually. But the impact of his chemistry is everywhere. You cannot run a single PCR, design a single guide RNA, build a single Gibson assembly without using a piece of DNA whose existence in your tube traces directly back to his 1981 paper. He is, in a real sense, the man whose chemistry built the infrastructure that everybody else's molecular biology runs on.

\[Pause.\]

Now we are going to open up the phosphoramidite cycle and actually look at what happens, step by step. I am going to walk you through it slowly, and I am going to repeat each step a couple of times, because if you internalize this cycle — really get a feel for it — you will understand why every synthesizer in the world, big or small, chip-based or column-based, runs essentially the same four-step dance. Forty-five years after Caruthers's paper, we are still doing it the way he laid it out. The chemistry was that good.

Let's open up the cycle.

---

## SEGMENT 4 — The four-step dance: detritylation, coupling, capping, oxidation

So picture this. We have a controlled pore glass bead — a tiny grain of glass, about a hundred microns across, with millions of tiny pores running through it. We'll spend a whole segment on the bead in a moment, but for now just hold the picture: a tiny glass grain. Tethered to the inside surfaces of those pores, by a chemical linker, are millions of identical molecules of the **first base** of the sequence we are going to build. If our final sequence is going to read, in conventional 5'-to-3' notation, "ATGCGTAC," then the base attached to the bead is the T at the 3' end. We'll get to why it's the 3' end and not the 5' end in Segment 6 — that's actually one of the most counterintuitive things in this whole field and worth pausing on. But for now just trust me: the 3' end is what's anchored to the bead, and we are going to build the chain from 3' to 5', adding one base at a time to the free 5' end.

So at the start of the synthesis, the bead has a 3'-tethered first nucleoside hanging off it, and on the 5' position of that nucleoside is sitting something I want to introduce now because it is going to come up over and over: a **DMT group**.

DMT stands for **dimethoxytrityl**. It is a big, bulky, brightly colored protecting group — a fluffy little chemical hat — that sits on the 5' hydroxyl of every phosphoramidite and every nucleoside we use in the synthesis. Its job is to **prevent the 5' position from reacting until we are ready for it to react**. Here is the analogy I want you to use. The DMT group is a hat. It is sitting on top of the 5' hydroxyl, blocking access. As long as the hat is on, nothing can react at that position. When we are ready to extend the chain, we take the hat off, exposing the now-free hydroxyl, which can then react with the next phosphoramidite coming in.

The hat metaphor is actually quite precise. The DMT group is bulky enough that it physically gets in the way of other chemistry happening at that position. It is colored — bright orange in solution, actually, once it comes off — which means you can monitor its release and use that to measure how efficient each cycle was. And it is removable under specific, mild conditions that don't damage anything else. That's the whole job: stay on until you're told to come off, then come off cleanly.

\[Pause.\]

Okay. With that picture in mind, here is the **four-step dance**. The phosphoramidite cycle. Strip, couple, cap, oxidize. Strip the protecting group. Couple the next base. Cap any failures. Oxidize to seal. Each cycle adds one base to the growing chain. Repeat the cycle however many times you need bases. Let's walk through it.

**Step one: detritylation, or "strip the hat."**

Our bead has a DMT-protected nucleoside attached. We want to expose the 5' hydroxyl so it can react with the next phosphoramidite. So we flow a mild acid through the column — typically trichloroacetic acid, TCA, or dichloroacetic acid, DCA, dissolved in dichloromethane. The acid is mild enough to leave everything else intact — the DNA backbone, the bases, the other protecting groups — but strong enough to protonate the DMT group and pop it off. The DMT group falls off into solution, where it ionizes into a bright orange cation that flows out of the column. The 5' hydroxyl, freshly exposed, is now ready to react. The column is washed with acetonitrile to remove any leftover acid.

That orange color, by the way, is one of the great practical tools of the field. By measuring the absorbance of the effluent at 498 nanometers — the wavelength of the DMT cation — you can quantify how much DMT came off, which tells you how many growing chains were available to detritylate, which tells you how efficient your last coupling was. That's the **trityl monitor**. It is essentially a live, real-time quality control system, built into the chemistry. Every cycle, you watch the orange color come out, and if the intensity drops cycle after cycle, you know your coupling efficiency is suffering. Caruthers's chemistry built its own diagnostic into itself. That is just elegant.

**Step two: coupling, or "add the next bead."**

Now we have a free 5' hydroxyl on every chain on the bead. We flow in the next phosphoramidite, dissolved in acetonitrile, mixed with an activator — tetrazole, or more commonly today a more potent activator like ETT or BTT. The activator protonates the diisopropylamine on the phosphoramidite, which converts it into a much more reactive intermediate. That intermediate is grabbed by the free 5' hydroxyl on the growing chain, forming a new bond. The next base is now attached to the growing chain through a phosphite — note, phosphite, not phosphate yet — linkage.

This coupling reaction is fast. In a well-tuned synthesizer, it's essentially complete in under a minute. The coupling efficiency is the headline number — the famous ninety-nine-plus percent we keep mentioning. And critically, the new base that has just been added is itself wearing a DMT hat on its own 5' position. So the chain has grown by one base, and the new chain end is now protected, ready for the next cycle.

\[Pause.\]

**Step three: capping, or "lock out the failures."**

Here is where it gets clever. Coupling efficiency is high — ninety-nine percent, maybe ninety-nine point five percent — but it is not a hundred percent. Some fraction of the chains, in every cycle, fail to couple. They sit there with a free 5' hydroxyl, unreacted. If you just go on to the next cycle and the next, those failure chains will eventually, in some cycle, succeed in coupling, and they will produce a final product that is missing exactly one base — what we call an **N-minus-one** failure. That kind of internal deletion is invisible to many downstream applications, but it is exactly the kind of error that wrecks PCR primers, ruins sequencing reads, and confuses ASO drug analyses.

So we don't let those chains continue. We **cap them**. We flow in a reagent — acetic anhydride and N-methylimidazole, classically — that acetylates any free hydroxyl. Those failure chains now have an acetyl group sitting on their 5' position. They are permanently capped. They will never couple again. They are dead to the rest of the synthesis. They will sit on the bead, frozen at whatever length they reached, while the other chains keep growing.

This is brilliant. It means the failure chains, instead of producing N-minus-one products that contaminate the final yield, become harmless truncated products — usually called **truncations** or **failure sequences** — that can be removed during purification because they are dramatically shorter than the desired full-length product. By capping at every cycle, the synthesis converts a hard error — internal deletion — into an easy error — wrong length — that purification can fix.

Capping is the move that makes the whole chemistry tractable. Without it, every cycle's failures would compound into a mess of internal deletions that would be impossible to clean up. With it, every cycle's failures become harmless truncations that wash off during purification. Strip, couple, cap, oxidize. The capping step is the third bead in the necklace where the chemistry quietly fixes its own mistakes.

\[Pause.\]

**Step four: oxidation, or "seal the bond."**

Remember that the new bond we just made in the coupling step is a phosphite — a P(III) species, with phosphorus in a lower oxidation state than the natural phosphate. Phosphite is reactive and unstable. We have to convert it to a phosphate — a P(V) species — before we can move on, because phosphate is the stable, natural form of the DNA backbone, and because the phosphite would not survive subsequent cycles intact.

So we flow in an oxidizing reagent — iodine in pyridine, water, and tetrahydrofuran, the classic Caruthers cocktail — and the iodine oxidizes the phosphite to a phosphate. The bond goes from P(III) to P(V). The newly added nucleotide is now joined to the previous one by a real, native, oxidized phosphate linkage. The bond is sealed.

(There is, by the way, an alternative oxidation step that's used when you want to make a chemically modified backbone. If instead of iodine in water, you use a sulfurizing reagent like Beaucage's reagent or DDTT, the sulfur replaces the oxygen on the phosphate, and you get a **phosphorothioate** linkage instead of a normal phosphodiester. That single substitution — one oxygen swapped for one sulfur — is the chemistry that makes most ASO drugs and all the older siRNA drugs nuclease-resistant. We will spend an entire segment on phosphorothioates later. But for now, just register that the oxidation step is also the modification step. The choice of what to oxidize with is how you decide what kind of backbone you're making.)

\[Pause.\]

So that's the cycle. **Strip, couple, cap, oxidize.** Detritylation, coupling, capping, oxidation. Four steps. About six to eight minutes total in a standard synthesizer. One base added to every chain on the bead. Wash, repeat. Strip, couple, cap, oxidize. Another base. Wash, repeat. Strip, couple, cap, oxidize. Another base.

If your sequence is twenty bases long, you run the cycle twenty times. If it's a hundred, you run it a hundred times. The chemistry doesn't care, as long as the reagents flow correctly and the coupling efficiency holds up. At the end, you have a column full of beads, each one carrying millions of identical full-length oligonucleotides, all of them with the sequence you specified. The final step is to cleave them off the bead, deprotect the bases — which up to this point have been wearing their own protecting groups to prevent them from interfering with the chemistry — and ship the oligonucleotide to the customer.

We will get to that cleavage and deprotection in a moment. But before we do, let me spend a whole segment on the bead itself, because the bead is where so much of the magic actually lives.

---

## SEGMENT 5 — The bead: why controlled pore glass is the post we tie everything to

Here is the question I want you to hold while I describe the bead. Why does the synthesis have to happen on a solid support at all? Why not just do all the chemistry in solution, the way Khorana did? What does the bead buy you?

The answer is purification. Or rather, the avoidance of purification. Every step in DNA synthesis produces a complicated mixture of reagents, unreacted starting materials, byproducts, and the growing chain itself. In solution, every one of those steps would require you to separate the desired product — your growing chain — from everything else, by some kind of chromatography or precipitation. That separation, repeated at every cycle, is where Khorana lost his life to the chemistry. It is impossibly slow.

The bead solves it by making the growing chain immobile. The chain is covalently bonded to the bead. The bead is held in place inside a tiny column — typically a couple of millimeters in diameter, a centimeter or two long. Reagents flow in from the top, react with whatever is on the bead, and flow out the bottom. Everything that flows in or out is not the product. The product stays on the bead, by definition, until you actively cleave it off at the very end. So purification at every cycle becomes trivial: just rinse with acetonitrile, and whatever isn't covalently bonded to the bead flushes away.

\[Pause.\]

So the bead is the **post you're tying the beads onto so they don't float away**. That is the analogy I want you to hold. Without the post, the necklace you're trying to build keeps drifting off into the soup of reagents and getting lost. With the post, the necklace stays put, in a known location, and everything else can be rinsed past it.

Now the specific material the post is made of matters a lot. The dominant material in commercial DNA synthesis is called **controlled pore glass**, abbreviated **CPG**. It is, exactly as the name suggests, glass — silica glass — with pores of a precisely controlled size running through it. The pores are typically five hundred or a thousand angstroms across, which is to say fifty to a hundred nanometers. The pore size is critical because it sets how long an oligonucleotide can be synthesized on the bead. Shorter oligonucleotides — say, twenty or thirty bases — fit comfortably in five-hundred-angstrom pores. Longer ones — a hundred or a hundred-and-fifty bases — need thousand-angstrom or even two-thousand-angstrom pores to avoid getting sterically crowded and slowing down the chemistry.

The bead itself is roughly spherical, anywhere from fifty to two hundred microns in diameter — about the size of a grain of fine sand. Inside the bead, the pores create an enormous internal surface area. A single CPG bead might have a hundred square meters of internal surface per gram of material. That is, in a single tiny grain of glass, the internal surface area of a small apartment. Every square nanometer of that internal surface can be derivatized with a linker that anchors a nucleoside. So a single bead carries an astronomical number of growing chains — somewhere in the neighborhood of a billion oligonucleotide chains per bead, all of them being extended in parallel.

That parallelism is the second thing the bead buys you. You're not synthesizing one chain at a time. You're synthesizing a billion chains in parallel, all of them on the same bead, all of them seeing the same reagent solution flowing past, all of them being extended by one base in the same cycle. The yield per cycle is the same for every chain. At the end, every bead carries a billion copies of the same oligonucleotide. Multiply that across a column of beads — a typical lab-scale column has a few tens of milligrams of CPG — and you have a population of maybe ten-to-the-fifteenth identical oligonucleotides at the end of a synthesis. That's about a nanomole of material, which is roughly what you order when you order a standard PCR primer.

\[Pause.\]

The linker — the chemistry that ties the first base to the bead — also matters, because it determines how the finished oligonucleotide comes off the bead at the end. The standard linker is a **succinyl linker**: a small spacer molecule with a carboxylate on the bead side and an ester on the nucleoside side. At the end of the synthesis, treatment with ammonium hydroxide hydrolyzes the ester, the oligonucleotide falls off into solution, and you collect it. The same ammonia treatment also removes the protecting groups from the bases — the **benzoyl** groups on adenine and cytosine, the **isobutyryl** group on guanine, the **dimethylformamidine** group on guanine in some modern chemistries — leaving a clean, deprotected oligonucleotide in solution. One step. Hours of incubation, typically overnight at room temperature or a couple of hours at fifty-five degrees Celsius. Done.

(I should also mention that there are alternative solid supports — particularly **polystyrene** beads, which are used in some high-throughput formats, and **chip-based** supports, which we'll discuss in Segment 15. Each has its own strengths. CPG remains the workhorse for standard column-based synthesis because it is rigid, swells minimally in solvent, and gives reproducible, high-yield chemistry.)

\[Pause.\]

So when you look at a DNA synthesizer in operation, what you are actually looking at is a row of tiny columns, each one packed with CPG beads, each one being plumbed with a series of reagent lines that deliver, in sequence, the detritylation reagent, the wash, the appropriate phosphoramidite plus activator, the cap, another wash, the oxidizer, another wash, and then back around the cycle. The chemistry is the same. The bead is the same. What changes from sequence to sequence is which phosphoramidite the synthesizer picks at the coupling step — A, T, G, or C — for each cycle, based on the sequence file you uploaded.

That sequence file, by the way, is read by the synthesizer from 3' to 5' — from the end attached to the bead toward the end that gets synthesized last. Which brings us to one of the most counterintuitive aspects of the whole field, and one I want to make sure you don't forget. Let's go there next.

---

## SEGMENT 6 — Backwards from biology: why we build 3'-to-5' on the bead

So here is the fact that will trip you up if you don't internalize it now. In nature, DNA polymerases — the enzymes that copy DNA inside cells — extend a growing chain from the 5' end to the 3' end. Every DNA polymerase you have ever studied works this way. You memorized this in your introductory biology class. The new base gets added to the 3' end of the growing chain. The polymerase reads the template in the 3'-to-5' direction and writes the new chain in the 5'-to-3' direction. This is so universal that we describe it as one of the deepest constraints on DNA chemistry in biology.

Phosphoramidite synthesis does the **opposite**. The growing chain is anchored to the bead by its 3' end. The new base is added to the **5' end**. The synthesis proceeds from 3' to 5'. It is, in a literal chemical sense, backwards from biology.

\[Pause.\]

Why? Why would we do it this way, when nature does it the other way?

The answer is in the protecting group strategy. Remember the DMT group — the hat — that sits on the 5' position of every nucleoside in the synthesis. The DMT group is removable under mild acidic conditions. It is the one protecting group that comes off in every cycle, exposing a reactive hydroxyl that can then react with the next incoming phosphoramidite. The chemistry of the DMT group — its acid lability, its bulkiness, its UV-detectable cation — is what makes the whole cycle work the way it does.

It turns out that putting a DMT group on the 3' position, with all the right chemistry to make it work at the 3' end instead of the 5' end, is harder. The 3' hydroxyl is in a different chemical environment — adjacent to the next sugar in the chain, more sterically constrained, and less accessible to bulky protecting groups. The chemistry simply works better when you protect the 5' end and grow from 3' to 5'. So that is what Caruthers and his contemporaries settled on, and that is what the entire field has done ever since.

There is a deeper reason, too, having to do with the structure of the phosphoramidite itself. The phosphoramidite carries a phosphorus on the 3' side of its sugar — that's the activated end that will form the new bond. So the phosphoramidite is designed to deliver its phosphorus to the 5' position of whatever it's coupling to. If you tried to do the synthesis the other way — protecting the 3' position and growing 5'-to-3' — you would need to design entirely different phosphoramidite chemistry, with the activated phosphorus on the 5' side instead of the 3' side. It turns out that this is much harder to make work cleanly, because of subtle differences in the chemistry of the 5' versus 3' positions. The 3'-phosphoramidite, 5'-DMT design is the one that produces high yield, fast coupling, and clean chemistry. So that is what we use.

\[Pause.\]

This 3'-to-5' synthesis direction has a couple of practical consequences that I want to make sure you remember.

First: when you order a primer with a 5' modification — say, a 5' fluorophore for a TaqMan probe, or a 5' biotin for a pull-down experiment — that modification is the **last thing added** in the synthesis. It goes on at the very end, after all the bases are in place. This matters because it means 5' modifications are relatively easy to install — there is essentially no chemistry after them — and they can be done with a single coupling of a specialty phosphoramidite carrying the modification. 5' fluorophores are common, well-validated, and reliable for exactly this reason.

Second: when you order a primer with a 3' modification — say, a 3' dye, or a 3' quencher for a probe, or a 3' phosphate — that modification has to be installed at the very beginning, as the first thing attached to the bead. That is harder. You need a specialty CPG support that already has the 3' modification pre-attached, ready to be the first nucleoside of the synthesis. Specialty CPGs for common 3' modifications are commercially available, but they're more expensive than standard CPG, and the chemistry is less flexible. That is why, when you look at probe designs, you almost always see the fluorophore at the 5' end and the quencher at the 3' end — the asymmetry comes from the asymmetry of the synthesis chemistry.

Third: the 3'-to-5' direction means that the very first base of the sequence — the 3'-most base — sits on the bead the longest, exposed to the most cycles of reagent flow. By the time the synthesis is done, the first base has been bathed in acid and capping reagent and oxidizer dozens or hundreds of times. The chemistry has been engineered so that none of those reagents damage the bases, but there is always some low level of background damage that accumulates. That is one of the reasons very long synthetic oligonucleotides become so difficult — the 3' end has been sitting in the column for so long that even a small per-cycle damage rate compounds into significant damage.

\[Pause.\]

So that's the geometry. Anchored at the 3' end. Grown from 3' to 5'. Each new base added to the 5' end of the growing chain. Backwards from natural DNA polymerases, but the right way around for the chemistry to work cleanly. The sequence file you upload is read from 3' to 5' by the synthesizer, even though we humans like to write sequences from 5' to 3' in our notation. The machine quietly reverses it.

If you remember nothing else from this segment, remember this: every primer you have ever ordered was built backwards. Starts at the 3' end, ends at the 5' end. The last base added is the 5'-most base. That fact will help you reason about modifications, about damage profiles, and about why certain synthesis problems get worse as oligonucleotides get longer.

Now, speaking of length. Let's go talk about why ninety-nine percent isn't anywhere near as good as it sounds.

---

## SEGMENT 7 — Coupling efficiency: why 99% is barely good enough

I want you to do a quick piece of arithmetic with me. Take out a piece of paper if it helps. Or just do it in your head. Imagine you are synthesizing a hundred-base oligonucleotide. The coupling efficiency at each step is ninety-nine percent. That sounds great. Ninety-nine percent is an A grade. Ninety-nine percent is what we call, in casual conversation, "basically perfect."

What fraction of the chains on your bead are full-length at the end of the synthesis? Not just close to full-length. Full-length. Every single base correctly added, in order, from one to a hundred.

The answer is ninety-nine percent raised to the hundredth power. Zero point nine nine, to the hundred. Let me do that in my head. Zero point nine nine to the ten is about ninety percent. To the hundred is about thirty-seven percent. **Thirty-seven percent.**

Stop and let that sink in for a second. If your synthesizer is running at a per-step coupling efficiency of ninety-nine percent — which sounds, in any other context, fantastic — then for a hundred-base oligonucleotide, fewer than four chains in ten on the bead actually got every base added correctly. The other six in ten are failures of one length or another. Some of them failed in cycle five and got capped there. Some failed in cycle eighty and got capped there. The bead is a junk pile of truncated products, with only thirty-seven percent of the chains being the full-length sequence you actually asked for.

\[Pause.\]

This is the **exponential decay of yield with length**, and it is the single biggest constraint on the entire field of oligonucleotide synthesis. It is why, when you go to an IDT website and try to order a synthetic oligo that's three hundred bases long, you get a polite error message telling you that's not a service they offer for column-based synthesis. The chemistry simply doesn't support it at acceptable yield.

Let me give you the table, because looking at the numbers is sobering.

At ninety-nine percent per-step coupling efficiency: at fifty bases, you have about sixty-one percent full-length. At a hundred, thirty-seven percent. At two hundred, fourteen percent. At three hundred, just over five percent. At five hundred, less than one percent. At a thousand bases, you're at less than one in twenty thousand.

At ninety-nine point five percent — which is what a really well-tuned modern column-based synthesizer can achieve, with careful tuning, fresh reagents, and the right activator: at fifty bases, you have seventy-eight percent. At a hundred, sixty-one percent. At two hundred, thirty-seven percent. At three hundred, twenty-two percent. At five hundred, eight percent. At a thousand, less than one percent.

Even at ninety-nine point nine percent per-step — which is essentially the best anybody has ever measured for a column synthesis — at a thousand bases, you're at only thirty-seven percent full-length. The exponential always wins, eventually. The only question is how far you can push the wall before it stops you.

\[Pause.\]

Here is the analogy I want you to keep. **Ninety-nine percent sounds great until you realize ninety-nine percent to the hundred is thirty-seven percent. Every step matters.** Every cycle. Every coupling. Every base. The half-life of yield, in a synthesis running at ninety-nine percent per step, is about sixty-nine bases. That is, every sixty-nine bases you add, you lose half your yield. By the time you've added a hundred bases, you've lost most of it. By the time you've added two hundred, almost all of it.

This is why so much of the engineering work in the field, especially through the 1990s and 2000s, has been about pushing the per-step coupling efficiency up by tiny fractions of a percent. Going from ninety-nine to ninety-nine point five doesn't sound like much, but at a hundred-mer, it takes your yield from thirty-seven percent to sixty-one percent — a huge improvement. Going to ninety-nine point nine takes you to ninety percent at a hundred-mer. Every fraction of a percent in coupling efficiency translates, exponentially, into how long an oligonucleotide you can practically make.

The improvements have come from better activators — moving from the original tetrazole to ETT (5-ethylthiotetrazole) and BTT (5-benzylthiotetrazole), which couple faster and more completely. From better phosphoramidite synthesis — purer, drier, more shelf-stable starting materials. From better reagent delivery — more precise pumps, smaller dead volumes, better mixing. From better solvents — bone-dry acetonitrile, because even trace water destroys phosphoramidites in a hurry. Each of these incremental engineering improvements has added a fraction of a percent to the per-step efficiency, and each fraction of a percent has translated into a measurably longer practical synthesis length.

\[Pause.\]

So what is the practical maximum length, in 2026, for a column-synthesized phosphoramidite oligonucleotide? The answer depends on what you mean by "practical."

If you mean: what is the longest oligo I can routinely buy from a commercial supplier, with reasonable yield and reasonable purity, for under a thousand dollars? The answer is somewhere between a hundred fifty and two hundred bases. Past about two hundred bases, the yield drops so much, and the purification becomes so much more difficult, that most suppliers will either refuse to make it or charge you a lot of money.

If you mean: what's the longest single oligo anyone has ever made by phosphoramidite chemistry, regardless of cost? The answer is in the few-hundred-base range, with heroic optimization, on specialized equipment, with very careful purification. Past about three hundred bases, the yield is so low that even with milligrams of CPG starting material, you end up with picomoles of full-length product, which is barely enough to do anything with.

If you want longer DNA than that, you don't make it as one long oligonucleotide. You make it as a set of overlapping shorter oligonucleotides, and you **assemble** them. We'll talk about that in Segment 10 when we get to chip-based synthesis. For now, just hold this constraint in your mind: **column-based phosphoramidite synthesis hits a wall at around two hundred bases**, and that wall is fundamentally a consequence of the per-step coupling efficiency being less than a hundred percent. You can push the wall further with better chemistry, but you cannot eliminate it.

This length constraint, by the way, has shaped the entire toolkit of modern molecular biology. PCR primers are usually twenty to thirty bases long — not because biology requires that length, but because that's the length you can routinely synthesize for a few dollars. Gibson assembly bookends are fifty to sixty bases — for the same reason. Gene blocks are five hundred to a thousand bases, but those are not made as single oligonucleotides; they are assembled from many shorter oligonucleotides by a process we'll discuss later. ASO drugs are usually twenty bases or fewer, partly for pharmacological reasons but also because that's a length you can make cleanly and in bulk. The wall at two hundred bases is, in a sense, the wall that the architecture of the modern toolkit was built against.

\[Pause.\]

Now let's talk about how to push back against that wall. Not by changing the bases — those are fixed by biology — but by changing the chemistry of the backbone, of the sugar, of the fluorophore handles you can attach. Modified oligonucleotides. The reason oligo synthesis matters not just for primers and probes, but for medicine itself.

---

## SEGMENT 8 — Chemical modifications: phosphorothioate, 2'-OMe, MOE, LNA, fluorophores

So far, everything I've described has been about making **natural DNA** — the four standard bases, attached by phosphodiester linkages, with deoxyribose sugars. That's fine for primers and probes that just need to base-pair with a target and then get degraded or thrown away. But for some applications — especially therapeutic ones — natural DNA isn't enough. It's too fragile. Nucleases in the body chew it up within minutes. The chemistry needs to be modified to survive in vivo, to bind targets more tightly, to evade the immune system, to deliver itself into cells. So a whole subfield of medicinal chemistry has grown up around making **modified oligonucleotides** — oligos in which some or all of the backbone, sugar, or base has been chemically tweaked to give the molecule new properties.

The most important modification, the one that has made essentially every ASO drug possible, is the **phosphorothioate**. We mentioned it briefly in Segment 4. Let me explain what it actually is.

A natural DNA backbone is a chain of phosphodiester linkages — a phosphorus atom with four oxygens around it, two of them in the chain itself, two of them sticking out. One of the two sticking-out oxygens is the one that carries the negative charge of the backbone at neutral pH. In a phosphorothioate, one of those non-bridging oxygens is **replaced with a sulfur**. One oxygen out, one sulfur in. The chain is otherwise the same. Same bases. Same sugars. Same length. Just a single atom swap at every phosphate — or sometimes at just a few selected phosphates — along the backbone.

\[Pause.\]

Why does this matter? Two reasons, both crucial.

One: **nucleases can't chew it as easily**. The enzymes in the body that degrade DNA — the nucleases in your blood, in your tissues, in your cells — evolved to recognize the natural phosphodiester linkage. When they encounter a phosphorothioate linkage, they bind it more poorly and cleave it much more slowly. So an oligo with phosphorothioate linkages at every position — what we call a "PS oligo" or a "fully phosphorothioated" oligo — survives in the body for hours or days, rather than the minutes that a natural DNA oligo would last. **Swap one oxygen for sulfur in the backbone — nucleases can't chew it as easily, so the drug lasts longer in the body.** That is, in one sentence, the chemical reason why ASO drugs exist as a class.

Two: **phosphorothioates bind to plasma proteins**, especially albumin. The sulfur is more polarizable than the oxygen it replaced, and this changes the electrostatic environment of the backbone enough that the modified oligo sticks loosely to plasma proteins instead of being filtered out by the kidneys. So the drug not only resists degradation, it also has a longer residence time in the bloodstream. Together, these two effects — nuclease resistance and protein binding — turn what would have been a useless natural DNA fragment into a real drug that can be dosed once a month, or once every few months, and still maintain therapeutic concentrations.

How do you make a phosphorothioate during synthesis? Remember the oxidation step — step four of the cycle. Normally, iodine in water oxidizes the phosphite to a phosphate. If, instead of iodine, you use a sulfurizing reagent — historically Beaucage's reagent, more recently DDTT or PADS — the sulfur replaces an oxygen at the new linkage. You get a phosphorothioate at that position instead of a phosphodiester. Simply by swapping the oxidizer at the right cycle, you can choose, base by base, which linkages are PS and which are normal. Some drugs are fully PS — every single linkage modified. Others are mixed — PS only at the ends, normal in the middle. The pharmacology of each drug dictates the pattern, and the synthesizer just delivers whichever oxidizer is needed at whichever cycle.

\[Pause.\]

The phosphorothioate is one modification. There are many others.

**2'-O-methyl**, or **2'-OMe**, is a modification of the sugar, not the backbone. In natural DNA, the 2' position of the deoxyribose has a hydrogen. In RNA, the 2' position has a hydroxyl. In a 2'-OMe oligo, the 2' position has a methyl ether — a small methoxy group. This modification was originally inspired by natural RNAs in some bacteria and archaea that carry methylated 2' positions. It does two things: it makes the sugar more like RNA in its base-pairing geometry, which can improve binding to RNA targets; and it makes the oligo even more nuclease-resistant than a plain phosphorothioate. Many ASO drugs use 2'-OMe at the flanking positions of the oligo and unmodified DNA in the middle, in a so-called "gapmer" design.

**2'-MOE**, or **2'-O-methoxyethyl**, is a slightly larger modification — a methoxyethyl group instead of just a methyl on the 2' position. It binds RNA targets even more tightly than 2'-OMe and is even more nuclease-resistant. It's the modification used in nusinersen, the ASO drug for spinal muscular atrophy. It's also used in milasen — the drug we discussed in last week's lecture — though most of milasen's modifications are 2'-OMe and PS rather than MOE.

**LNA**, or **locked nucleic acid**, takes the modification a step further. The sugar is structurally locked into a particular conformation — the C3'-endo conformation — by an extra methylene bridge between the 2' and 4' positions. This locking forces the sugar into the geometry that base-pairs most tightly with RNA. LNA oligos have extraordinarily high binding affinities for their RNA targets — so high that a five- or six-base LNA stretch in the middle of an oligo can dominate the binding. LNAs are used in some specialty ASO designs and in some diagnostic probes where ultra-high affinity is needed.

\[Pause.\]

Beyond backbone and sugar modifications, oligonucleotides can be decorated with **functional handles** at their 5' or 3' ends. The most common ones:

**Fluorophores**: FAM, TET, HEX, Cy3, Cy5, and a long catalog of others. These are dye molecules attached, usually at the 5' end, to make an oligo detectable by fluorescence. TaqMan probes carry a fluorophore at 5' and a quencher at 3' — the quencher absorbs the fluorescence until the probe is cleaved during PCR, at which point the fluorophore is released and fluoresces, allowing quantitative detection. FISH probes carry fluorophores to localize sequences inside fixed cells.

**Biotin**: A small molecule that binds, with extraordinary affinity, to streptavidin. A biotin handle on an oligo lets you pull the oligo down — and anything it's bound to — using streptavidin-coated beads. This is the basis of innumerable affinity capture experiments, from pull-downs to ChIP to library enrichment in sequencing.

**Amine handles**, like 5'-amino-modifier C6 or 3'-amino-modifier C7: These give you a free primary amine at the end of the oligo, which you can use to crosslink the oligo to anything that has a reactive group — surfaces, beads, proteins, dyes. They're the universal hook for downstream conjugation chemistry.

**Cholesterol** and **GalNAc** conjugates: Larger, more sophisticated handles that direct oligo uptake into specific tissues. GalNAc — N-acetylgalactosamine — is the targeting moiety that gets attached to siRNA drugs to make them accumulate in the liver, by binding to the asialoglycoprotein receptor that liver cells display abundantly. This is the trick that makes inclisiran — the cholesterol-lowering siRNA — work. The drug is administered subcutaneously, and the GalNAc handles deliver it specifically to hepatocytes, where it knocks down PCSK9 and lowers LDL.

All of these modifications are added by the same phosphoramidite chemistry, using specialty phosphoramidites or specialty CPGs that carry the modification pre-attached. The synthesizer doesn't care. It runs the same cycle. The chemist just chooses which bottle to pump from at which step.

\[Pause.\]

So when you look at a modern ASO drug, what you are seeing is a kind of layered design. You start with a sequence — the bases that will base-pair to the target. You decide which positions need phosphorothioate backbones for nuclease resistance. You decide which positions need 2'-OMe or 2'-MOE for binding affinity and additional stability. You decide whether to add a 5' or 3' handle for tissue targeting. And then you send the design to a synthesizer that, base by base, dispenses the appropriate modified phosphoramidite at each cycle, building up the molecule one position at a time. The end result is a drug that bears, on every single atom, the choices made by the chemist who designed it.

That is what makes ASO chemistry so powerful, and that is why we spent an entire lecture last week on a single ASO drug, milasen, that was designed and built for one patient in less than a year. The phosphoramidite chemistry is so modular, so flexible, so well-characterized, that you can essentially type a sequence with modifications into a software tool and have the machine build it for you. The molecular medicine of the next twenty years — siRNA drugs, ASO drugs, gene editing guide RNAs, mRNA caps, even some of the lipid-conjugated payloads being explored for delivery — all of it runs on Caruthers's chemistry, with modifications.

Now let's talk about the machines themselves. The boxes in the corner of the lab that turn sequence files into molecules.

---

## SEGMENT 9 — The synthesizer in the corner: Applied Biosystems, MerMade, Dr. Oligo

If you walk into a molecular biology lab today, you will probably not find a DNA synthesizer in it. Almost nobody synthesizes their own DNA anymore — the commercial suppliers are so good and so cheap that it's not worth doing in-house. But if you walk into a commercial DNA synthesis facility — IDT in Coralville, Iowa, say, or one of the big synthesis houses operated by Thermo Fisher or Eurofins — you will find rows upon rows of these machines, humming away, twenty-four hours a day, churning out oligonucleotides in the billions.

Let me describe what a synthesizer looks like, and what the major instrument lineages are.

\[Pause.\]

The original commercial synthesizers were built by a company called **Applied Biosystems**, which was founded in 1981 specifically to commercialize automated DNA synthesis — and later, the closely related field of automated peptide synthesis. The first widely-deployed instrument was the Applied Biosystems Model 380A, introduced in the early 1980s. It was a fridge-sized box with a single reaction column, controlled by a microcomputer, with reagent bottles connected by Teflon tubing to a series of valves. You loaded a CPG column at the bottom, told the machine what sequence to make, and an hour later — or several hours, depending on the length — you collected a tube of crude oligonucleotide.

The 380A and its descendants — the 391, the 392, the 394, the 3900 series, the 3400 — dominated DNA synthesis through the 1980s and 1990s. If you read a methods section from any molecular biology paper published before about 2000, and the authors mention how they made their primers, there's a very good chance the answer is "Applied Biosystems Model X." The instruments were robust, reproducible, and produced oligonucleotides of consistently high quality. A single column. A single sequence at a time. Run it overnight. Collect in the morning.

Then the field needed to go bigger. As demand for oligonucleotides exploded — driven by PCR, then by sequencing, then by microarrays — the bottleneck shifted from "can we make any oligo at all" to "can we make a hundred different oligos at the same time." Multiplexing. The answer was the **96-well synthesizer**, which packed ninety-six tiny columns in a microtiter-plate format, each with its own reagent lines, all running in parallel. The MerMade line of instruments, manufactured by BioAutomation in Texas, has been one of the dominant 96-well synthesizers for the last twenty years. The Dr. Oligo line from Biolytic Lab Performance is another. There are also the K&A instruments, the Akta Oligopilot from Cytiva for larger-scale production runs, and several others. All of them run essentially the same Caruthers chemistry. They just run it in parallel, on more columns, with more sophisticated reagent handling.

\[Pause.\]

A modern high-throughput synthesizer in a commercial facility might run several thousand reactions a day, churning out a mix of standard primers, modified probes, and specialty oligonucleotides. The reagent consumption is substantial — each cycle uses milliliters of acetonitrile and microliters of phosphoramidite solution, multiplied by hundreds of cycles per synthesis, multiplied by thousands of syntheses per day. Commercial facilities buy phosphoramidites by the kilogram and acetonitrile by the drum. The cost of reagents per individual oligo, when amortized over the scale of a commercial operation, drops to a few cents per base. That is part of why IDT can sell you a twenty-base primer for fifteen dollars and still make money — the reagent cost is well under a dollar; the rest is labor, QC, purification, shipping, and margin.

For larger-scale syntheses — the kind you need for drug manufacturing, where you want grams or kilograms of a specific ASO sequence — the instruments are physically much bigger. Cytiva's OligoPilot can produce hundreds of grams of oligo in a single run, with column sizes measured in liters rather than milliliters. The chemistry is the same — Caruthers's phosphoramidite cycle — but the engineering around it has been scaled up like a chemical engineering plant. Pharmaceutical-grade ASO manufacturing happens in facilities that look more like small chemical plants than like research labs, with stainless-steel reactor vessels and HPLC purification systems the size of refrigerators.

\[Pause.\]

But the truly transformative shift — the one that has reshaped what's possible in synthetic biology over the last fifteen years — wasn't bigger columns. It was a completely different format. Instead of one column making one sequence, what if you could make thousands or millions of different sequences in parallel, each on its own microscopic spot on a chip? That is the chip-based synthesis revolution, and it is where the field is going. We'll talk about it in detail in Segment 10. But before we do, let's take a break.

---

\[BREAK\]

We've spent the first hour walking through the foundations. Where synthetic DNA came from. The four-step cycle. The bead. The 3'-to-5' direction. Why ninety-nine percent isn't enough. The modifications that turn oligos into drugs. The instruments that turn chemistry into product. Take five or ten minutes. Stretch. Get water. When we come back, we are going to climb up the ladder to where the field is right now — chip-based synthesis, the commercial landscape, the post-phosphoramidite future. The chemistry was figured out in 1981. The implications are still unfolding.

\[End of break. Resume.\]

---

## SEGMENT 10 — Chip-based synthesis: a million spots, a million sequences

Okay. Welcome back. Let's open the second half by talking about the most important shift in DNA synthesis in the last twenty years: **chip-based synthesis**.

Here is the problem that chip-based synthesis exists to solve. Imagine you are doing a synthetic biology project, and you want to build, let's say, a custom designer protein. You want to test ten thousand different variants of that protein — each with a different combination of mutations — to find the one that works best. Each variant has its own DNA sequence. So you need ten thousand different DNA sequences, each maybe five hundred bases long. If you tried to order those from a column-based synthesizer, even at a few dollars per base, you'd be talking about something like ten million dollars and several months of synthesizer time. That is not economically viable. It's not even technically viable — there aren't enough column synthesizers in the world to do that on a reasonable timescale.

The solution was to flip the architecture. Instead of one column making one sequence, **a million microscopic spots each make a different sequence in parallel**. That is the chip-based synthesis revolution, and it has transformed what's possible in synthetic biology, library generation, and DNA data storage.

\[Pause.\]

Here is how it works, at a high level. You take a flat surface — a glass slide, or a silicon chip — and you covalently attach an initial nucleoside to every spot on that surface, just like the first nucleoside on a CPG bead. So instead of millions of identical chains on one bead, you have millions of chains on a flat surface, each at its own physical location, identifiable by its X-Y coordinate on the chip.

Then you run the phosphoramidite cycle, with one critical change: at each coupling step, **only some of the spots get to react**. The other spots are blocked. By controlling, spot by spot, which positions are unblocked at each cycle, you can give each spot its own custom sequence. Spot at coordinate (1,1) might get an A at cycle one, then a G at cycle two, then a T at cycle three. Spot at coordinate (1,2) might get a C, then an A, then a G. Each spot writes its own unique sequence in parallel, all running on the same chip, all in the same chemical bath.

The clever part is how you control which spots react at each step. There are two major approaches, and they each have their own commercial champion.

\[Pause.\]

The first approach is **photolithographic**. This was the original method, developed at Affymetrix in the 1990s. The DMT group at the 5' position of each nucleoside is replaced with a photolabile protecting group — a chemical hat that comes off when you shine UV light on it. You use a photomask, like the ones used in semiconductor manufacturing, to project a pattern of light onto the chip. Only the spots that are illuminated have their hats removed. Then you flow in a single phosphoramidite — say, the A phosphoramidite — and it couples only to the illuminated spots. Then you wash, project a different pattern of light to expose a different set of spots, flow in the T phosphoramidite, couple. Wash. Project another pattern. T or G or C. Repeat.

The number of photomasks you need scales as four times the length of the longest sequence — one for each base at each cycle — but the photomasks themselves are made by the same technology that makes computer chips, and they can pattern millions of spots simultaneously. The original Affymetrix GeneChips were made this way and densely packed with hundreds of thousands of probe sequences for genotyping and expression analysis.

The second approach is **inkjet** or **electrochemical**. This is the approach pioneered by Agilent and later by Twist Bioscience. Instead of using light to selectively unblock spots, you use a physical printer that deposits droplets of activator solution onto specific spots, or you use electrodes underneath each spot to generate acid locally and unblock only that spot. Then you flow phosphoramidites across the whole chip and let them couple only where the spots were unblocked. The advantage is that you don't need photomasks — the printer can pattern any combination of spots on the fly. The disadvantage is that the spot density is somewhat lower than the photolithographic approach, although still in the hundreds of thousands to millions per chip.

\[Pause.\]

The end product of a chip-based synthesis run is a chip covered with millions of distinct oligonucleotide sequences, each at its own location. To use them, you cleave them off the chip — same kind of ammonia treatment as the column-based supports — and you get a complex pool of millions of different sequences in a single tube. That pool is the **oligo library**. It's not pure. Each individual sequence in the pool is present at a very low concentration — picograms or attomoles, not the milligrams you get from a column. The yield per sequence is much lower than from a column synthesis. But you have a million different sequences, all in one tube, for a few hundred or a few thousand dollars total. That's a price-per-sequence that no column-based synthesis could ever match.

The big commercial players in chip-based oligo libraries are **Twist Bioscience**, founded in 2013, which has built its entire business around silicon-chip-based DNA synthesis at massive scale; **Agilent SurePrint**, which makes microarrays and oligo pools using inkjet chemistry; and **CustomArray**, now part of GenScript, which uses electrochemical synthesis on semiconductor chips. There are also several university spin-outs and academic synthesis cores producing chip-based oligo libraries for research use.

\[Pause.\]

What do you actually do with a pool of a million different oligonucleotides? Several things.

You can use them as templates for **gene synthesis**. If you want to build a long gene — say, two thousand bases — you can design overlapping shorter oligos that, when annealed and assembled, will reconstruct your full-length sequence. Order the oligos from a chip-based pool, amplify the pool, assemble the fragments, and you have your gene. Twist Bioscience's main business is gene synthesis built on this kind of pipeline — they make millions of oligos on a chip, then assemble them into longer gene fragments and ship them to customers.

You can use them as a **screening library**. Want to test a million different promoter sequences for their activity? Make a chip-based oligo pool of a million promoters, attach them all to a reporter gene, transfect them into cells, sequence the readout, and you've measured every promoter in a single experiment. This is the basis of **massively parallel reporter assays** (MPRAs), which have revolutionized the study of regulatory DNA. Same logic underlies CRISPR guide RNA libraries used for genome-wide screens — order a chip-based pool of a hundred thousand guide RNAs, clone them into a CRISPR vector, infect cells, see which ones drop out or accumulate.

You can use them for **DNA data storage**. Encode digital data into DNA sequences — bits to bases via some coding scheme — and synthesize the resulting sequences on a chip. Microsoft, Twist, and others have demonstrated terabyte-scale DNA data storage using chip-based synthesis as the writing technology. We'll come back to DNA data storage in Segment 17.

\[Pause.\]

The chip-based revolution is, in many ways, the biggest change in oligo synthesis since Caruthers's original chemistry. It hasn't replaced column-based synthesis — for high-quality, high-yield, single-sequence work like PCR primers and ASO drugs, the column is still the right answer. But for any application where you need diversity — many different sequences, in a single experiment — chip-based synthesis is essentially the only economically viable option. The two technologies live side by side, each serving a different need, but together they have made the cost per sequence drop by something like five orders of magnitude over the last twenty years. We now think nothing of designing a CRISPR screen with seventy thousand guide RNAs, or an MPRA with a hundred thousand variants. None of that would have been remotely possible without chip-based synthesis.

Now let's get into the weeds of why error rates matter so much, and how they show up differently in different synthesis platforms.

---

## SEGMENT 11 — Error rates: how mistakes propagate through the cycle

We talked about coupling efficiency in Segment 7. Now I want to drill into a related but distinct concept: **error rate**. Coupling efficiency is the fraction of chains that get extended at each step. Error rate is the fraction of bases that are wrong in the finished product. The two are related but not identical, and the distinction matters a lot for downstream applications.

In a typical column-based phosphoramidite synthesis, the per-base error rate is somewhere in the range of one error per two hundred to one per five hundred bases, depending on the synthesis conditions and the analytical method. That is, in a hundred-base oligonucleotide, you would expect somewhere between zero and one error, on average, in any given chain. Some chains have no errors. Some have one. Very few have two or more. The distribution is roughly Poisson around the per-base error rate.

For chip-based synthesis, the error rate is typically higher — somewhere in the range of one error per fifty to one per two hundred bases. The chip-based chemistry runs faster, with less precise reagent control, and the per-spot coupling efficiencies are generally lower than what you can achieve in a well-tuned column. The trade-off is the parallelism — you get vastly more sequences, but each one is, on average, somewhat sloppier.

\[Pause.\]

Where do the errors come from?

**Depurination**: Acidic conditions, like the trichloroacetic acid used in the detritylation step, can occasionally cleave the bond between an adenine or guanine base and its sugar. The base falls off, leaving an abasic site. In subsequent cycles, this can lead to chain breakage or to incorrect repair. Depurination is the dominant error mode for adenines and guanines in long syntheses.

**Mis-coupling**: Very rarely, a phosphoramidite from a contaminated reagent bottle, or a residual phosphoramidite that wasn't washed away from the previous cycle, can couple at the wrong position. This produces a substitution — wrong base at a known position. Mis-coupling rates are usually well below one per thousand, but they're not zero.

**Incomplete deprotection**: When the finished oligonucleotide is cleaved off the bead and the protecting groups are removed by ammonia, some fraction of bases may end up incompletely deprotected. If the protecting group isn't fully removed, that base may not pair correctly with its complement, effectively functioning as an error.

**Damage during synthesis**: The 3'-end of the oligo, the part attached to the bead, sits in the column the longest and gets exposed to the most cycles of reagents. Slow oxidative damage to the bases can accumulate, especially for guanine, which is the most easily oxidized base. This manifests as a kind of "3'-end fraying" in long syntheses.

\[Pause.\]

How do errors propagate through downstream uses of the oligo? Here's the key thing to understand. If the population of oligos coming off the synthesizer has a per-base error rate of one in three hundred, then in any given individual chain, the probability of an error at any given base is one in three hundred. But across the population — across the millions of chains in your tube — every position has about one chain in three hundred that has an error at that position. The error is **distributed**, not localized. There isn't one "bad" position; there is, throughout the entire length of the oligo, a low-level background of errors at every position.

This distinction matters because of how downstream applications use oligos. A PCR primer, for example, is used as a population. You put millions of primer molecules into a PCR tube. The few that have errors at critical positions don't anneal well, and they don't get extended. The vast majority that are correct dominate the amplification. So a low error rate is well-tolerated in PCR.

But for gene synthesis — assembling a long gene from many short oligos — the error rate is a critical bottleneck. If your average gene fragment is a thousand bases long, and your per-base error rate from the chip is one in two hundred, then on average every fragment has five errors. To get a fragment that is correct over its entire length, you'd need to clone and sequence many candidates before you find one that's clean. This is why gene synthesis houses like Twist invest heavily in **error correction** — using mismatch-binding enzymes like CEL1, or DNA mismatch repair proteins like MutS, to remove or correct erroneous sequences from a synthesis pool before assembly. Without error correction, the practical length of synthetic genes would be much shorter than what's actually achievable today.

For ASO drugs and other therapeutic oligonucleotides, the standard is higher still. The FDA wants to see that a drug is chemically pure to a stringent specification — typically ninety-eight percent or higher full-length, correct-sequence material. This requires HPLC purification of the synthesis product to remove truncations and error sequences, and rigorous QC by mass spectrometry to confirm the molecular weight of every batch. We'll talk about purification in detail in the next segment.

\[Pause.\]

The bottom line is this: errors in DNA synthesis are not zero. They never have been. They never will be. The whole engineering practice of the field is about driving them low enough that they don't matter for any given application, and where they do matter, providing downstream tools — purification, error correction, QC — to clean them up. Phosphoramidite chemistry, at its theoretical best, can probably push to one error per ten thousand bases or so. Enzymatic synthesis, the new frontier we'll discuss in Segment 16, might eventually do even better. For the moment, the field operates in a regime where errors are a real consideration in every workflow.

Let's now talk about how we actually clean up the synthesis at the end.

---

## SEGMENT 12 — After the synthesis: desalting, HPLC, PAGE

So your synthesis is done. Your synthesizer has run a hundred cycles of strip-couple-cap-oxidize. The bead has been treated with ammonia overnight to cleave the oligo off and deprotect the bases. You now have a tube of crude oligonucleotide in solution, mixed with various salts, byproducts, capped truncations, and a small fraction of full-length product. What do you do next?

The answer depends on what you need the oligo for.

\[Pause.\]

For a simple PCR primer — twenty to thirty bases, no modifications, no purity-critical downstream application — the standard cleanup is **desalting**. You run the crude oligo over a small size-exclusion column that lets the oligonucleotide through but holds back small-molecule salts and byproducts. Or you precipitate the oligonucleotide with ethanol, wash the pellet, and resuspend in clean water. Either way, you get a tube of oligonucleotide that is mostly the right sequence, mostly full-length, mixed with a low background of truncations and shorter byproducts. For PCR, that's fine. The full-length product dominates the amplification, and the truncations are mostly invisible in the readout. Desalting is fast — minutes — and cheap — pennies per oligo. It's the default purification level you get when you order a primer from IDT or any other supplier.

For a higher-purity application — fluorescent probes, ASO drug intermediates, some sequencing applications where contaminating shorter products would cause artifacts — you need a more aggressive purification. There are two main options.

**HPLC**, high-performance liquid chromatography. You run the crude oligo through a chromatography column — typically a reversed-phase column, sometimes an anion-exchange column — and separate the full-length product from the truncations based on their differing hydrophobicities or charge densities. The full-length product elutes at a characteristic time and is collected as a clean peak. The truncations elute earlier or later and are discarded. HPLC can routinely deliver oligo purity in the ninety-five to ninety-nine percent range, which is suitable for almost any application. The trade-off is cost and yield — HPLC takes time, uses expensive solvents, and recovers only a fraction of the original mass. An HPLC-purified primer might cost three to five times what a desalted one costs.

**PAGE**, polyacrylamide gel electrophoresis. You run the crude oligo on a denaturing polyacrylamide gel, which separates molecules by size with very high resolution. The full-length band is excised from the gel, eluted, and purified. PAGE purification can deliver even higher purity than HPLC — into the ninety-nine plus percent range — but it's slow, labor-intensive, and gives very low yields. PAGE is reserved for the most demanding applications, like high-resolution mass spectrometry standards or therapeutic-grade material.

\[Pause.\]

For commercial ASO drugs, the purification process is much more elaborate. After the bulk synthesis is complete, the oligo is purified by industrial-scale HPLC — sometimes multiple orthogonal HPLC steps using different column chemistries to remove different classes of impurities. The final product is characterized by mass spectrometry to confirm the exact molecular weight, by UV-vis spectroscopy to confirm the concentration, by analytical HPLC to confirm purity, and sometimes by NMR to confirm the chemical structure of any modifications. The whole purification and QC workflow for a drug-grade ASO can take longer than the synthesis itself, and the cost per gram can run into the tens of thousands of dollars for highly modified specialty oligos.

The trick that makes some ASO purification feasible is what's called **DMT-on** purification. Remember the DMT group, the trityl hat, that comes off at the start of every cycle? Normally, the DMT group on the very last base of the synthesis — the 5'-most base — is also removed at the end, leaving a clean 5' hydroxyl. But you can choose to leave the final DMT on. The result is a full-length oligo with a bright, hydrophobic DMT group still attached at the 5' end. This DMT group is much more hydrophobic than any of the truncated capped products, which all lack a 5' DMT. On a reversed-phase HPLC column, the DMT-on full-length product elutes very late, as a distinct, well-separated peak — easy to collect cleanly. Once collected, a brief acid treatment removes the DMT, leaving the clean, deprotected full-length oligo. This DMT-on / DMT-off trick is one of the most elegant tricks in the field. It uses the chemistry of the synthesis itself to make the purification easier.

\[Pause.\]

So the workflow, end to end, looks like this. You upload a sequence to a supplier's website. The supplier loads your sequence into a queue. A synthesizer makes the oligo — column or chip, depending on the order type. The crude oligo is cleaved off the support and deprotected with ammonia. It's purified to whatever level you ordered — desalt, HPLC, or PAGE. It's quantified by UV absorbance at two hundred sixty nanometers, dispensed into a tube, capped, labeled, and shipped to you. The whole process, for a standard primer, takes maybe a day of actual machine time, plus shipping. The cost is fifteen or twenty dollars. You open the tube, dissolve the oligo in water, and use it for whatever you were going to do with it.

That whole pipeline — synthesizer, deprotection, purification, QC, shipping — is invisible to almost everybody who uses synthetic DNA. You type a sequence, two days later a tube shows up, and you don't have to think about anything that happens in between. That invisibility is the mark of mature infrastructure. Caruthers's chemistry has been industrialized to the point that nobody has to think about it anymore. Which, in a sense, is the highest compliment you can pay to a piece of technology.

Let's now talk about the commercial landscape itself — the companies that have built businesses out of Caruthers's chemistry, and what their relative strengths and competitive positions look like.

---

## SEGMENT 13 — The commercial landscape: IDT, Sigma, Thermo, Eurofins

When you order a synthetic oligonucleotide in 2026, you are choosing from a relatively small number of major commercial suppliers, each of whom has built out a global infrastructure around the Caruthers chemistry. Let me walk you through who's who, because the landscape tells you something about how the field has matured.

**Integrated DNA Technologies**, or **IDT**, founded by Joseph Walder in Coralville, Iowa, in 1987, is the dominant player for research-grade oligonucleotides in North America. IDT pioneered the idea of selling oligos as a fast-turnaround web-ordered product — you go to their website, paste in a sequence, choose your modifications, and get the oligo in your hand a day or two later. They built their reputation on speed, customer service, and a deep catalog of modifications. In 2018, IDT was acquired by Danaher, the same conglomerate that owns Beckman Coulter and Cytiva. They remain the go-to supplier for most American academic labs, and they have expanded into adjacent products like CRISPR guides, gene blocks, and qPCR probes.

**Sigma-Aldrich**, now part of **Merck KGaA**, has been making oligonucleotides for decades and supplies a large fraction of the global academic and industrial market. Their service is part of the broader Sigma catalog, which means an academic scientist can order primers, antibodies, enzymes, and chemicals all in one purchase order — convenient for institutional procurement.

**Thermo Fisher Scientific** is another major player, with significant oligo manufacturing capacity inherited through their acquisition of Invitrogen and Applied Biosystems. Thermo's oligo business is integrated into their broader life-science portfolio. Their LifeTechnologies-branded primers and probes are widely used in clinical diagnostics, including in many of the qPCR-based tests for infectious disease.

**Eurofins Genomics**, headquartered in Germany, is the dominant European supplier, with manufacturing facilities across Europe and an increasingly global presence. Their pricing tends to be aggressive — particularly for bulk academic orders — and they have built a reputation for handling complex modifications and longer oligos.

\[Pause.\]

Beyond these four, there is a long tail of more specialized suppliers. **Twist Bioscience**, which we discussed in Segment 10, dominates chip-based oligo pools and synthetic gene fragments. **GenScript**, headquartered in China, is a major supplier of synthetic genes and longer DNA fragments, often at lower prices than the American or European competitors. **Bioneer**, **GenoSpace**, **LGC Genomics**, and a host of regional players fill niches in particular geographies or technical specialties.

For therapeutic oligonucleotides — drug-grade ASOs and siRNAs intended for human use — the supplier landscape is different. The companies that manufacture ASOs at GMP scale are specialized contract manufacturers like **Agilent** (which has a substantial pharma-grade oligo business based on legacy Avantor and Codexis assets), **Nitto Avecia**, **GenScript ProBio**, **PolyPeptide**, and a few others. These companies operate under strict pharmaceutical regulatory frameworks, with quality systems and documentation requirements that go far beyond what's needed for research-grade material. The economics are also different — a kilogram of GMP-grade phosphorothioate ASO can cost several hundred thousand dollars to manufacture, reflecting the multiple HPLC purifications, the analytical characterization, and the regulatory overhead.

\[Pause.\]

What's interesting about this whole industry is how concentrated it has become. Forty years ago, when phosphoramidite chemistry was new, dozens of academic labs were trying to make their own oligonucleotides in-house. Today, that is unusual to the point of being almost unheard-of. The commercial suppliers have driven the cost down so far, and the quality up so high, that it makes no economic sense for an individual lab to operate its own synthesizer for routine work. The exception is for very large research universities or specialized core facilities, which sometimes operate in-house synthesizers for fast-turnaround work on specialty modifications. Even there, the trend is toward outsourcing.

This kind of commodification is, I want to argue, the mark of a successful industrialized infrastructure. The same thing happened with antibody production — once everyone made their own; now nobody does. Same with peptide synthesis. Same, increasingly, with gene synthesis. The chemistry has been engineered to the point where it works reliably enough, and cheaply enough, that specialists can do it more efficiently than non-specialists. That frees the rest of us to use the products without having to think about how they were made. Which is exactly what good infrastructure does.

---

## SEGMENT 14 — Therapeutic oligonucleotides: ASOs, siRNAs, mRNA caps

I want to spend a segment on the therapeutic oligonucleotides specifically, because they are the application that has, in the last decade, transformed oligo synthesis from a research tool into a real drug-manufacturing platform.

You already met one ASO drug last week: milasen. The custom drug for Mila Makovec. The N-of-one treatment, twenty-two bases of modified DNA, designed to fix a specific splicing defect in one patient's MFSD8 gene. Milasen is just one example of a broader class of drugs called **antisense oligonucleotides**, or ASOs.

An ASO is, in its simplest form, a short DNA-like molecule whose sequence is complementary to a target RNA in the body. When the ASO finds its target RNA, it base-pairs to it. What happens next depends on the ASO's design. Some ASOs recruit RNase H, an enzyme that cuts RNA in DNA-RNA hybrids, leading to degradation of the target RNA — these are called "gapmer" ASOs. Others physically block ribosomes from reading the RNA, leading to reduced protein production. Others alter how the RNA is spliced, changing which exons get included in the mature transcript — these are "splice-switching" ASOs, the kind that milasen is.

\[Pause.\]

The first FDA-approved ASO drug was **fomivirsen**, approved in 1998 for cytomegalovirus retinitis in AIDS patients. It was a tiny market and the drug was eventually withdrawn, but it proved the concept could be made into a real drug. Then came **mipomersen** in 2013 for hypercholesterolemia, **nusinersen** in 2016 for spinal muscular atrophy — that one was transformative, the first effective treatment for a fatal pediatric neurodegenerative disease — **eteplirsen** for Duchenne muscular dystrophy, **inotersen** for hereditary amyloidosis, **golodirsen** and **viltolarsen** and **casimersen** for other Duchenne exons. Plus milasen, the N-of-one drug. The pipeline today is dense with ASOs in various stages of development for diseases from Huntington's to ALS to retinal degenerations.

Every single one of these drugs is made by phosphoramidite chemistry. Every single one carries phosphorothioate linkages, 2'-OMe or 2'-MOE sugar modifications, sometimes other backbone or sugar tweaks. Every single one was designed at a computer, synthesized on a machine, purified by HPLC, and characterized by mass spec. The chemistry that Marvin Caruthers worked out in 1981 has, in a real sense, become the foundation of an entire branch of medicine.

\[Pause.\]

**siRNAs** are a closely related class of therapeutic oligonucleotides. An siRNA is a short double-stranded RNA, typically about twenty-one base pairs long, that gets loaded into the cell's RNA-induced silencing complex, or RISC, and used to find and cut a target mRNA. siRNA drugs work by knocking down the production of a specific protein. The first FDA-approved siRNA drug was **patisiran** in 2018, for transthyretin amyloidosis. The most commercially successful is **inclisiran**, approved in 2020, which knocks down PCSK9 in liver and lowers LDL cholesterol — a single subcutaneous injection twice a year. There are now half a dozen approved siRNA drugs, and many more in trials.

The clever thing about most modern siRNA drugs, including inclisiran, is that they carry a **GalNAc** ligand — N-acetylgalactosamine, attached to the siRNA by a chemical linker — that targets the drug specifically to hepatocytes, the cells of the liver. This solves a problem that bedeviled siRNA delivery for years: how to get the oligonucleotide into the right tissue. By exploiting the fact that hepatocytes have abundant asialoglycoprotein receptors that grab GalNAc, the drug essentially homes in on the liver after subcutaneous injection. The same GalNAc trick is now being used for other siRNA drugs against liver-expressed proteins. And the GalNAc moiety itself is added during synthesis as a specialty phosphoramidite — a small piece of chemistry, but a transformative one.

\[Pause.\]

I also want to mention **mRNA caps**, briefly, because they connect oligo synthesis to the mRNA vaccine technology that became famous during COVID. The 5' cap on a mature mRNA — the m7-GpppN structure — is critical for ribosomes to recognize the mRNA and translate it. When manufacturers make mRNA drugs and vaccines, they need to install the cap on the synthetic mRNA. There are two ways to do this: either by co-transcriptional capping, where you include a cap analog in the in vitro transcription reaction, or by enzymatic capping after the fact. Either way, the cap analog itself is a synthetic compound that is often made by phosphoramidite-like chemistry. The most famous one is **CleanCap AG**, developed by TriLink Biotechnologies, which is used in the Moderna and Pfizer COVID vaccines.

So when you got your COVID shot, the active ingredient was an mRNA, made by in vitro transcription from a synthetic DNA template, capped with a synthetic cap analog. The DNA template was made by Caruthers's chemistry. The cap was made by closely related chemistry. The synthetic DNA primer for the qPCR-based COVID test on your nasal swab was made by Caruthers's chemistry. Every part of the public health response to COVID — testing, vaccines, surveillance — ran, somewhere, on Caruthers's chemistry. That is the depth of the infrastructure dependency I'm trying to convey today.

---

## SEGMENT 15 — Lithography and high-throughput: the chip revolution in detail

I touched on chip-based synthesis in Segment 10, but I want to come back to it now from a slightly different angle, because it deserves a bit more depth. The chip-based synthesis revolution has, in a real sense, been a revolution of **scale** — and the scale is what's transformed which questions in biology are tractable.

Let me give you some numbers to anchor the scale. A standard column-based DNA synthesizer can produce one oligo at a time, with a few hours per oligo. A 96-well synthesizer produces ninety-six oligos in parallel in a few hours. A chip-based synthesizer — the kind running at Twist or Agilent — can produce a million distinct oligos in a single chip run, in about a day. That's a ten-thousand-fold scale-up over the 96-well format, and a million-fold scale-up over a single-column synthesizer.

The cost per oligo follows a similar pattern. A column-synthesized desalted primer costs about ten cents per base — fifteen or twenty dollars for a typical twenty-mer. A chip-based oligo from a pool costs a fraction of a cent per base — less than ten cents per oligo in many cases, when amortized over the millions of sequences on the chip. That's a hundred-fold to thousand-fold cost reduction per sequence.

\[Pause.\]

The technologies that enable chip-based synthesis are essentially borrowed from the semiconductor industry. Photolithography — the same set of tools that pattern silicon wafers to make computer chips — is what Affymetrix originally used. Maskless lithography — projecting computer-controlled patterns of light onto a chip surface without a physical photomask — was developed at NimbleGen in the 1990s and 2000s and is the basis of several modern chip-based platforms.

The chemistry on the chip is the same Caruthers phosphoramidite chemistry, with the key adaptation being how each spot is selectively activated at each cycle. In photolithographic approaches like the original Affymetrix one, the activation is by UV light removing photolabile protecting groups. In maskless approaches, the activation is still by UV light but the pattern is generated dynamically using a digital micromirror device — millions of tiny mirrors that can be tilted on or off to direct light to specific spots. In electrochemical approaches like CustomArray, each spot has its own electrode that generates acid locally to remove the standard DMT group. In inkjet approaches like Agilent's, the activator and the phosphoramidites are physically printed onto each spot. All four approaches achieve the same goal: get a different sequence growing at every spot on the chip.

\[Pause.\]

The applications of chip-based synthesis go well beyond the gene synthesis and library generation I mentioned earlier. **Microarrays** for genotyping and expression analysis — Affymetrix GeneChips, Agilent SurePrints, Illumina BeadChips — were the original killer application of chip-based synthesis, dominating the field of expression profiling and genotyping through the 2000s before being largely displaced by sequencing-based approaches. **Oligonucleotide capture probes** for targeted sequencing — exome capture, panel sequencing — are still synthesized at chip scale today, because each capture experiment needs tens of thousands of distinct probe sequences.

**DNA data storage** is the application that may, in the long run, be the largest. We'll get to that in Segment 17. **Massively parallel reporter assays**, where you test thousands or millions of regulatory DNA variants in a single experiment, depend on chip-based synthesis. **CRISPR guide RNA libraries** for genome-wide screens — Brunello, GeCKO, TKO, all of them — are chip-based products. Variant libraries for protein engineering — testing every single amino acid substitution at every position of a protein — are chip-based products.

Chip-based synthesis hasn't replaced column-based synthesis. The two formats live in complementary ecosystems. Column synthesis dominates when you need high yield, high purity, modifications, and a small number of distinct sequences. Chip synthesis dominates when you need many sequences in parallel and the per-sequence yield can be low. The combination — chip-based libraries assembled into longer constructs using column-synthesized adapters and primers — is, in many ways, what defines modern synthetic biology.

---

## SEGMENT 16 — Enzymatic synthesis: the post-phosphoramidite future

Now I want to turn to what may be the next chapter of this story, even though it hasn't fully arrived yet. **Enzymatic DNA synthesis**, often abbreviated **EDS**.

Here is the motivation. Phosphoramidite chemistry, as elegant as it is, has fundamental limitations. The chemistry uses organic solvents — acetonitrile, dichloromethane, pyridine — that are toxic, flammable, and environmentally unfriendly. The chemistry uses harsh reagents — strong acids, iodine, ammonia — that limit which kinds of modifications and labels can survive the synthesis. The chemistry has an inherent length limit because of the cumulative effect of imperfect coupling efficiency. The chemistry produces hazardous waste at scale. None of these problems are fatal — the field works around them — but they are real constraints.

What if, instead of doing harsh organic chemistry, you used enzymes to add bases one at a time in water at room temperature? **Enzymatic synthesis** would, in a sense, be the next leap — taking inspiration from how nature builds DNA and replacing the synthetic chemistry with biological catalysis.

\[Pause.\]

The key enzyme that has driven the enzymatic synthesis field is **terminal deoxynucleotidyl transferase**, or **TdT**. TdT is a real enzyme found in mammalian cells, used by the immune system in B cells and T cells to add random nucleotides to the junctions of recombining immunoglobulin and T-cell receptor genes. The distinctive feature of TdT, compared to other DNA polymerases, is that it is **template-independent**. It doesn't need a template strand to copy from. You give it a DNA primer with a free 3' hydroxyl, and a nucleotide triphosphate, and it adds the nucleotide to the 3' end. No template required.

You can see immediately how this is potentially useful for synthesis. If you can control which nucleotide TdT adds at each step, you can build up a defined sequence one base at a time, just like phosphoramidite chemistry — but in water, at room temperature, using natural triphosphates, without organic solvents.

The challenge has always been **controlling which nucleotide gets added**. Wild-type TdT, given a mixture of all four nucleotides, just adds them randomly. You need a way to feed it only one nucleotide at a time, and then to **stop** it from adding more than one of that nucleotide before you move to the next step. Otherwise it just keeps adding the same base over and over.

\[Pause.\]

The solution that several companies have converged on involves **reversible terminator** nucleotides. These are nucleotide analogs that have a chemical group attached at the 3' position — a "blocking group" — that prevents the next nucleotide from being added. After incorporation, you cleave the blocking group off, exposing a free 3' hydroxyl, and the next addition can happen. This is the same trick that Illumina sequencing uses to control base-by-base incorporation during sequencing-by-synthesis. The chemistry is conceptually the same: incorporate one base, block further additions, remove the block, repeat.

The companies pursuing enzymatic DNA synthesis include **DNA Script**, headquartered in France, which has commercialized a benchtop enzymatic synthesizer called the SYNTAX; **Ansa Biotechnologies**, based in California, working on a slightly different enzymatic chemistry; **Molecular Assemblies**, based in San Diego, with their own version of TdT-based synthesis; and several others, including **Camena Bioscience**, **Nuclera**, and academic groups at Harvard and Boulder.

The current state of enzymatic synthesis, as of 2026, is that it works — multiple companies have demonstrated functional enzymatic synthesizers that produce real oligonucleotides — but it has not yet displaced phosphoramidite chemistry for routine use. The throughput, the cost per base, the error rate, and the maximum length all need to improve before enzymatic synthesis becomes the default. Most observers expect the technology to mature over the next five to ten years to the point where it does become the default, at least for some applications, particularly long DNA synthesis where the phosphoramidite length wall is the most painful constraint.

\[Pause.\]

The promise of enzymatic synthesis goes beyond just being a drop-in replacement for phosphoramidite chemistry. Because the chemistry is gentle — water, room temperature, no harsh reagents — it could enable kinds of synthesis that phosphoramidites can't easily do. For instance, synthesizing DNA in microfluidic chips with picoliter volumes per spot, enabling even denser chip-based libraries. Or synthesizing DNA inside living cells using engineered TdT variants — turning the cell itself into a DNA fabrication facility. Or synthesizing very long DNA — many kilobases — without the cumulative yield loss that limits phosphoramidite chemistry. Or making DNA with novel base analogs and backbone modifications that wouldn't survive the harsh phosphoramidite cycle.

This last point is particularly interesting. The phosphoramidite chemistry is set up to handle the four standard bases plus a small catalog of well-characterized modifications. New modifications — say, a new base analog with interesting drug properties — require extensive optimization to fit into the cycle. Enzymatic synthesis could, in principle, accept any nucleotide triphosphate analog that the engineered TdT can use, opening up a much wider chemical space. We don't know yet how much that will matter, but it's one of the reasons people think enzymatic synthesis is more than just a marginal improvement.

So if I had to make a prediction, looking out ten or fifteen years, it would be this: phosphoramidite chemistry will not disappear, but it will be increasingly complemented by, and in some applications replaced by, enzymatic synthesis. The next generation of molecular biology students may grow up in a world where ordering a kilobase of DNA is as routine as ordering a primer is today — and that will be enabled, in large part, by enzymes that have been engineered to do, biologically, what we currently do chemically.

---

## SEGMENT 17 — DNA data storage and ultra-long oligo synthesis

Let me take you to one of the most exciting and weirdest applications of synthetic DNA: **DNA data storage**.

The idea is simple. DNA is, considered as a storage medium, extraordinarily dense and extraordinarily durable. A single gram of DNA can in principle store hundreds of exabytes of digital information — far more than any existing storage medium. DNA in cold, dry conditions is stable for tens of thousands of years — we've sequenced DNA from mammoths that died 700,000 years ago. If you could encode arbitrary digital data into DNA sequences, synthesize that DNA, store it, and read it back later by sequencing, you would have a storage medium with information density and durability that beats anything else available.

\[Pause.\]

Several groups have demonstrated proof-of-concept DNA data storage at increasingly large scales. In 2012, Church's lab at Harvard encoded a draft of a book — about 5.27 megabits — into DNA. In 2013, the EBI in the UK encoded about 750 kilobytes including all of Shakespeare's sonnets and a clip of Martin Luther King's "I Have a Dream" speech. By the late 2010s, Microsoft and Twist Bioscience were storing gigabytes. The current state of the art, as of 2026, is in the multi-terabyte range, with companies like Catalog, Iridia, and others working on practical commercial storage systems.

The encoding schemes vary, but they share the same general structure. You convert your binary data into a sequence of nucleotides — typically using some kind of base-4 or modified base-4 encoding, with error-correcting redundancy added — and then you synthesize that DNA. The synthesis is usually done on a chip, because each storage operation requires millions of distinct sequences. The DNA is stored — sometimes lyophilized, sometimes encapsulated in silica beads or other protective matrices — and when you want to read the data back, you sequence the DNA and decode it.

\[Pause.\]

The bottleneck for DNA data storage, today, is the **synthesis cost** and the **synthesis speed**. Reading is cheap and fast — modern sequencing can produce gigabases of data for hundreds of dollars. Writing is expensive and slow — synthesizing a gigabase of DNA on chip costs tens of thousands of dollars and takes days. For DNA data storage to become commercially viable at scale, the synthesis cost needs to drop by several orders of magnitude. This is one of the main motivations for enzymatic synthesis and for the next generation of chip-based platforms.

There's a related application that's relevant here: **ultra-long oligonucleotide synthesis** for synthetic biology. As synthetic biology pushes toward building entire chromosomes from scratch — the synthetic yeast project Sc2.0, for example, or various synthetic genome efforts — the demand for long, accurate synthetic DNA is enormous. A bacterial chromosome is in the megabase range. A yeast chromosome is tens of megabases. Assembling that from hundred-base oligos requires staggering amounts of synthesis, error correction, and assembly.

Companies like **Ansa Biotechnologies** and **Molecular Assemblies** have explicitly positioned themselves around making longer single-strand DNA than phosphoramidite chemistry can deliver — pushing into the kilobase range from a single enzymatic synthesis. If that capability scales, it could collapse the multi-step assembly hierarchies that synthetic biology currently relies on, and make it routine to write multi-kilobase DNA constructs in a single shot.

\[Pause.\]

I want to flag one more application that connects DNA synthesis to broader trends in computing: **distributed bio**. The idea that with cheap enough DNA synthesis and decentralized lab automation, individual researchers — or even hobbyists — could design and build complex biological systems from a laptop. Send a sequence file to a cloud lab, get a tube of physical DNA the next day, run an assay through a robotic pipeline. If synthesis becomes cheap enough and fast enough, the bottleneck to doing biology shifts away from physical lab access and toward design imagination.

We're not there yet. Synthesis is still expensive enough, and the wet-lab work downstream still complicated enough, that you need a real lab for serious work. But the trajectory is clear. Cheaper, faster synthesis lowers the activation energy for everyone — academic labs, biotech startups, even individuals — to participate in biology. That has good and bad implications, which the policy world is just starting to grapple with. Biosecurity concerns are real. Open access to powerful synthesis tools could enable misuse. The same chemistry that builds an ASO drug for a sick child could, in principle, also build pathogens. The field is gradually building up screening tools — sequence screening at the point of synthesis order, to flag potentially dangerous sequences — but it's an evolving landscape.

That tension — between democratization and biosecurity — is one of the defining questions of the next decade of this field. Cheap DNA synthesis is a tremendous good. It's also a power that has to be handled responsibly. The technical advances of the next ten years will be matched, hopefully, by equally thoughtful advances in how we govern who can synthesize what.

---

## SEGMENT 18 — Where the field is going — enzymatic synthesis, gigabase printing, distributed bio

Alright. We've covered a lot of ground. Let me close with a forward-looking segment about where the field is going, because the changes coming over the next decade may be as significant as anything that's happened since Caruthers's original paper in 1981.

Three trends, in particular, are worth watching.

\[Pause.\]

The first is **enzymatic synthesis maturing into the default**. I talked about this in Segment 16, but I want to flag it again here because of how much downstream change it could enable. If enzymatic synthesis reaches phosphoramidite-comparable accuracy and cost — which most observers think will happen in the next five to ten years — then the constraints on what you can synthesize will change profoundly. Longer oligos. Cleaner chemistry. Greener manufacturing. New modifications. Potentially even synthesis inside living cells. The field has, for forty-five years, been building tools, drugs, and infrastructure around the affordances and limitations of phosphoramidite chemistry. Changing the underlying chemistry will change all those tools and what they can do.

The second trend is **gigabase-scale synthesis**. The current frontier of synthesis is in the kilobase-to-megabase range — large enough to build genes, small viruses, even small chromosomes. The next frontier is the gigabase range — large enough to write entire bacterial genomes, or substantial portions of mammalian genomes, from scratch. Several academic and commercial efforts are explicitly pushing in this direction. The synthetic yeast project, Sc2.0, has nearly completed a fully synthetic version of the entire yeast genome. The synthetic Mycoplasma genitalium genome was completed by Craig Venter's group years ago. The next steps — synthetic E. coli, synthetic human chromosomes — are being pursued by the Genome Project-Write consortium and various commercial efforts.

What does gigabase synthesis enable? At its most ambitious, it enables the design and construction of organisms with deliberately engineered genomes — recoded codons, removed transposons, redesigned regulatory networks. It enables synthetic biology to operate at the scale of whole organisms, not just individual genes or pathways. It enables thought experiments about minimal genomes, optimal genomes, even synthetic life forms with chemistries that don't exist in nature. We are nowhere near doing all of this routinely, but the trajectory of the synthesis technology suggests it will be within reach in the next few decades.

\[Pause.\]

The third trend is **distributed bio** — the increasing democratization of synthesis access. As synthesis costs drop and turnaround times shrink, more people can participate in biology. Academic labs, startups, biohackers, cloud labs, even individuals working from home with the help of cloud-lab services. This is a profound change. For most of the history of biology, doing biology required access to a real wet lab — a lab with chemicals, instruments, freezers, hoods, incubators, expertise. Cheap synthesis, combined with cloud labs and at-home kits, is gradually lowering that activation energy.

This is changing what kinds of people can do biology. It's changing what kinds of organizations can do biology. It's changing the pace of biological research, because design iterations that used to take weeks can now take days. It's also, as I mentioned in Segment 17, changing the biosecurity landscape, because the same tools that empower curious students also potentially empower bad actors. The field is going to spend the next decade working out how to govern this — how to screen sequences for dangerous content, how to keep the powerful tools out of the hands of those who would misuse them, while keeping them broadly accessible to the much larger community of people who use them well. That's going to be one of the biggest policy challenges of the next ten years in this field.

\[Pause.\]

I want to end on an analogy that might help you remember what we've talked about today.

In the late 1970s and 1980s, the personal computer was made possible by the maturing of the integrated circuit — silicon chips that packed more and more transistors onto smaller and smaller surfaces, becoming cheaper and faster every year. The integrated circuit was not, in itself, exciting to most people. It was a small, gray, rectangular thing you almost never saw. But it was the infrastructure that everything else ran on. Every personal computer, every video game console, every cell phone, every digital camera, every internet router — all of it stood on the integrated circuit.

Synthetic DNA is the integrated circuit of molecular biology. It is small, gray (metaphorically), and almost never seen by the end user. But it is the infrastructure that everything else runs on. Every PCR, every CRISPR experiment, every gene therapy, every diagnostic, every vaccine, every ASO drug — all of it stands on synthetic DNA, and synthetic DNA stands on phosphoramidite chemistry, and phosphoramidite chemistry stands on Marvin Caruthers's 1981 paper.

The next twenty years of biology will be shaped, in significant part, by what the synthesis platforms can do. Cheaper synthesis means more experiments, more drugs, more therapies, more designs that can be tried. Faster synthesis means tighter design cycles, more iterations, faster learning. Longer synthesis means whole pathways, whole genomes, whole synthetic organisms within reach. Enzymatic synthesis means greener, gentler, more flexible chemistry. Chip-based synthesis means massive parallelism that enables questions we couldn't even ask twenty years ago.

The chemistry that lets you type a sequence into a website and have a real molecule arrive at your door two days later is, in a deep sense, the chemistry that makes modern molecular biology possible. It is the unsung infrastructure. And now, after these two hours, I hope you can sing it.

\[Pause.\]

That's it. Thank you all for staying with me through two hours of phosphoramidites, DMT groups, and trityl monitors. Let's open it up for questions.

---

## APPENDIX

A few additional notes and references that might be useful for further reading or for board work in a follow-up session.

**Key historical papers and figures.** Marvin Caruthers's foundational 1981 paper, with Serge Beaucage, is "Deoxynucleoside phosphoramidites — A new class of key intermediates for deoxypolynucleotide synthesis," published in Tetrahedron Letters. Har Gobind Khorana shared the 1968 Nobel Prize in Physiology or Medicine with Marshall Nirenberg and Robert Holley. Bruce Merrifield won the 1984 Nobel Prize in Chemistry for solid-phase peptide synthesis. Marvin Caruthers, at the time of this lecture, has not received the Nobel Prize despite many in the field arguing he should.

**The four-step phosphoramidite cycle, summarized.** Step one: detritylation. Strip the DMT group from the 5' end of the bead-bound chain using a mild acid (trichloroacetic acid in dichloromethane). Step two: coupling. Add the next phosphoramidite, activated by tetrazole or a tetrazole derivative, to form a new phosphite linkage. Step three: capping. Acetylate any chains that failed to couple, using acetic anhydride and N-methylimidazole, to prevent N-minus-one deletions. Step four: oxidation. Oxidize the phosphite to a phosphate using iodine in water and pyridine (or sulfurize with DDTT or Beaucage's reagent for phosphorothioate linkages).

**Coupling efficiency reference table.** At 99% per-cycle efficiency: 50-mer = 61% full-length; 100-mer = 37%; 200-mer = 13%. At 99.5%: 50-mer = 78%; 100-mer = 61%; 200-mer = 37%. At 99.9%: 50-mer = 95%; 100-mer = 90%; 200-mer = 82%. Each fraction of a percent of coupling efficiency translates into substantially longer practical synthesis lengths.

**Common modifications and their roles.** Phosphorothioate (PS): backbone modification, swaps a non-bridging oxygen for sulfur. Provides nuclease resistance and plasma-protein binding. Used in almost all ASO drugs. 2'-O-methyl (2'-OMe) and 2'-O-methoxyethyl (2'-MOE): sugar modifications. Provide nuclease resistance and improved RNA binding. Used in nusinersen, milasen, and many others. Locked nucleic acid (LNA): bridged 2'-4' sugar modification, locks sugar in C3'-endo. Extreme RNA-binding affinity. Used in specialty ASOs and probes. GalNAc: targeting ligand for hepatocyte-specific delivery. Used in inclisiran and other liver-targeting siRNAs. Fluorophores (FAM, HEX, TET, Cy3, Cy5): detection labels for probes. Biotin: affinity capture handle for streptavidin pull-down.

**Major commercial suppliers and what they specialize in.** IDT: research-grade primers, probes, gene blocks, CRISPR guides; dominant in North America. Sigma-Aldrich (Merck KGaA): general-purpose oligos, broad catalog integration. Thermo Fisher: oligos, clinical-grade primers, integrated life-science portfolio. Eurofins Genomics: dominant European supplier, competitive pricing. Twist Bioscience: chip-based oligo pools, synthetic gene fragments. GenScript: synthetic genes, cost-competitive sourcing from China. Agilent: chip-based microarrays, GMP-grade oligo manufacturing. Specialized GMP manufacturers (Nitto Avecia, PolyPeptide, GenScript ProBio): drug-grade ASO and siRNA manufacturing.

**Approved therapeutic oligonucleotides as of 2026.** ASOs: fomivirsen (1998, withdrawn), mipomersen, nusinersen, eteplirsen, inotersen, golodirsen, viltolarsen, casimersen, tofersen, and the N-of-one milasen. siRNAs: patisiran, givosiran, lumasiran, inclisiran, vutrisiran, nedosiran. Aptamers: pegaptanib (one of the very few approved DNA/RNA aptamer drugs).

**Enzymatic synthesis players.** DNA Script (France, SYNTAX platform); Ansa Biotechnologies (California); Molecular Assemblies (San Diego); Camena Bioscience (UK); Nuclera (UK); plus academic groups at Harvard, Boulder, and elsewhere.

**Suggested further reading.** Reese, "Oligo- and poly-nucleotides: 50 years of chemical synthesis." Beaucage and Iyer, "Advances in the synthesis of oligonucleotides by the phosphoramidite approach," Tetrahedron, 1992. Carlson, "Time for new DNA synthesis and sequencing cost curves," Synthesis 2014. Hughes and Ellington, "Synthetic DNA synthesis and assembly: putting the synthetic in synthetic biology," Cold Spring Harbor Perspectives. Eisenstein, "Enzymatic DNA synthesis enters the marketplace," Nature Biotechnology, 2020. Goldman et al. on DNA data storage, Nature, 2013.

**One closing thought to use in the discussion.** Ask your students this: "If synthesis costs drop another hundred-fold in the next decade, what experiments become possible that aren't possible today?" The answers — gigabase libraries of designer proteins, whole-genome perturbation screens at scale, distributed citizen-science biology projects, multi-organism synthetic ecosystem design — give a sense of how much of the future of biology hinges on this one unsung infrastructure.

\[End of script.\]
