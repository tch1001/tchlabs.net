# DNA Data Storage: Writing Files Into the Molecule of Life

**A 2-hour interdisciplinary lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, landing comfortably inside a two-hour slot. (Read faster, ~140 wpm, and you'll have generous room for questions or board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The data explosion and the storage we don't have

Alright. Good morning, everyone. Let's get started. For the next two hours, we are going to talk about an idea that, the first time you hear it, sounds like science fiction, and the second time you hear it sounds inevitable, and by the end of this lecture I hope it will sound like something that, with enough engineering and enough patience, you could yourself help build. We are going to talk about **DNA data storage** — the project, currently being pursued in research labs and at a handful of well-funded startups around the world, of writing digital information — files, images, videos, archives — into chemically synthesized DNA, storing that DNA in a tube on a shelf, and reading the information back, years or decades or centuries later, with a sequencer.

I want to make a claim right at the start, and I want you to hold onto it for the next two hours and see if I've convinced you by the end. Here it is. **DNA is the most physically dense, most chemically stable, most energy-efficient archival storage medium that physics and chemistry will ever offer us, full stop.** Every other storage medium humans have ever built — clay tablets, parchment, paper, magnetic tape, hard drives, solid-state drives, optical disks — is, in the limit, less dense, less stable, less durable, and more energy-hungry than a tube of dry DNA sitting in a freezer. That is not a marketing claim from a startup pitch deck. It is a consequence of the fact that DNA is the medium that biology itself selected, over four billion years of evolutionary pressure, as the way to durably store the operating instructions for life. Every cell in your body, right now, holds about three billion bases of DNA, in a volume measured in cubic micrometers, that has been stably maintained — copied with high fidelity, read out on demand — across millions of cell divisions. That is the spec sheet for biological storage. And we are now in a position, for the first time in human history, to use the same medium for our own digital data.

So that is what we are going to fix today.

\[Pause.\]

Let me give you the scope of the problem this is trying to solve, because if you don't appreciate the scale of the storage problem we have created for ourselves, you won't understand why anyone is bothering with something as exotic as DNA in the first place. The world generates, in 2026, somewhere on the order of **one hundred and twenty zettabytes of data per year**. A zettabyte is a trillion gigabytes. It is the number you get when you try to add up every photo posted to every social network, every video streamed on every platform, every email, every database transaction, every sensor reading from every industrial system, every scientific measurement, every CCTV camera, every car log, every medical scan. One hundred and twenty zettabytes. And the number is growing roughly exponentially — doubling every two to three years, depending on whose forecast you read. By 2030, by reasonable extrapolation, we will be generating closer to four or five hundred zettabytes per year.

Now, almost none of that gets kept forever. Most of it gets thrown away within hours or days — it's a video frame that nobody watched, a log entry that aged out, a backup that got overwritten. But a meaningful fraction of it gets archived. Medical records. Scientific datasets. Government records. Legal records. Bank ledgers. Surveillance archives. The Library of Congress. The collected works of every author who ever lived. And the amount we choose to archive is also growing — because storage has, until recently, been getting cheaper roughly as fast as data has been getting created, so we have not yet had to face hard choices about what to throw away.

That last sentence is the key one. **Storage has been getting cheaper roughly as fast as data has been getting created.** And that trend, for the first time in fifty years, is starting to falter.

\[Pause.\]

Here is the problem. The dominant medium for cold archival storage today is **magnetic tape** — LTO tape, specifically, which is the format used by every major cloud provider and every major archive in the world. LTO tape costs about ten dollars per terabyte today, which is impressively cheap. But LTO tape has a problem. It lasts about thirty years under good conditions. After thirty years, the magnetic domains have drifted enough that you have to re-read the tape, verify the data, and write it back to a fresh tape. That process — called **media refresh** — is enormously expensive at scale, and it has to be done forever, every thirty years, as long as you want the data to survive. Hard drives are even worse: they fail mechanically in five to ten years, and they consume continuous power to spin or, in the case of solid-state drives, to maintain their charge. Solid-state drives in the absence of power leak their data away in a few years; the floating-gate transistors lose charge, and your bits flip from ones to zeros. There is no storage medium currently in industrial production that, if I gave you a copy today and you stuck it in a closet, would still be readable in a hundred years without active maintenance. None.

Compare this to DNA. We routinely sequence DNA from woolly mammoth remains that have been sitting in Siberian permafrost for fifty thousand years. We sequence DNA from Neanderthal bones forty thousand years old. We sequence DNA from medieval skeletons, Roman skeletons, Egyptian mummies. The molecule, kept dry and cool, simply persists. The chemistry is that stable. If you encode a file into DNA today, dehydrate it, and seal it in a glass capsule, and somebody opens that capsule in the year ten thousand and twenty-six, they will, with no special equipment beyond a sequencer of the kind we already have today, be able to read your file back out. Eight thousand years of cold storage with zero energy input and zero maintenance. There is no other archival medium that comes within three orders of magnitude of that.

\[Pause.\]

And the density — let's talk about the density. DNA, as a four-base code, carries two bits of information per base. A base pair occupies roughly a cubic nanometer of space. If you do the math, the theoretical information density of DNA, packed at the density it sits inside a cell, is on the order of **two hundred and fifteen petabytes per gram**. Per gram. A petabyte is a thousand terabytes. Two hundred and fifteen thousand terabytes in a single gram of dried DNA powder. The entire contents of the internet's archived video — every YouTube video ever uploaded, every film ever streamed on every platform — would fit, in DNA form, into a volume the size of a sugar cube. The entire written output of the human species, every book ever published in every language, would fit into something less than the size of a grain of sand.

Now, that is the theoretical density, and we are nowhere near it in practice today. Real DNA storage systems use only a fraction of that density once you account for primer regions, error-correction overhead, and the inefficiencies of synthesis and sequencing. But even at one percent of the theoretical limit, DNA is still hundreds of times denser than any electronic or magnetic medium we have ever built. The density is not the bottleneck. The density is, in fact, ridiculously, gratuitously abundant. The bottleneck, as we will see again and again in this lecture, is the **cost of writing** — the cost of synthesizing the DNA in the first place — and to a lesser extent the cost of reading.

\[Pause.\]

So that is where we are going. By the end of these two hours, if you walk out of here, I want you to be able to do four things. One: explain to a curious friend, in plain English, why anyone would want to store data in DNA at all — what problem it solves and what economic regime it eventually fits into. Two: describe the basic encoding pipeline — file to bits to bases to physical DNA and back again — and identify where errors enter and how we correct them. Three: name the major players and milestones in this field — Church and Goldman in 2012, Microsoft and University of Washington's collaboration, Twist Bioscience, Catalog Technologies, the Iridia approach, the DNA Data Storage Alliance — and have a sense of who is betting what on whom. And four: hold an informed opinion about whether DNA storage is ever going to compete with tape for cold archive, what it would take for that to happen, and what kinds of applications might get there first.

That is our contract for the next two hours.

Let me start with the analogy I am going to come back to over and over again, because if you internalize this single picture, half of the engineering becomes intuitive. Imagine you have a library. The library holds, let's say, a million books. You need to store the library somewhere. You could keep it as a building full of paper — that's pretty good, but it takes up a whole building, and the paper degrades over centuries, and a fire wipes the whole thing out. You could scan every book and store it on hard drives — that takes a few racks of servers, but the servers consume power continuously, and the drives need to be replaced every five years, and a power outage long enough loses your data. You could write the whole thing to LTO tape — that fits in a single climate-controlled cabinet, but it needs to be re-read and refreshed every thirty years forever. Or you could encode the whole library, character by character, into synthesized DNA. Dry the DNA. Seal it in a small glass vial about the size of your fingernail. Stick it in a drawer. Come back in five thousand years. Pull out the vial. Sequence it. Get the library back, intact, exactly as you encoded it. No power. No refresh. No maintenance. Just the molecule, sitting there, holding the bits.

That is what we are talking about today. That is the promise. That is the destination. The whole rest of this lecture is about the chemistry, the engineering, the error correction, the economics, and the open problems that stand between today's lab demos and that vial of compressed civilization sitting in a drawer.

\[Pause.\]

One more framing thought before we move on. I want you to understand that this field is, right now, in 2026, at exactly the stage that integrated circuits were at in roughly 1955. The basic physics works. The basic chemistry works. There are people who have made working demos. The cost is, by orders of magnitude, too high for any normal commercial application. But the cost trajectory, if certain technical bets pay off, points down by factors of a thousand or more over the next decade. Whether DNA storage becomes a real industry depends on whether those bets pay off, and on whether the data-archive market grows fast enough to want it when it does. We are at the moment in the story where the transistor exists but Fairchild Semiconductor has not yet been founded. There is a real possibility that nothing comes of it — that the cost curve never bends and DNA storage stays a curiosity in academic labs. And there is a real possibility that, twenty years from now, every major data center on Earth has a DNA archive in the basement.

Let's go figure out which it's going to be.

---

## SEGMENT 2 — Why DNA: the spec sheet for a four-billion-year-old medium

So before we start writing files into DNA, we need to spend some time on the medium itself. Why DNA? What makes it so good, in the limit, as a storage medium? We've gestured at density and stability already, but I want to do this properly, because the comparison to existing media is genuinely jaw-dropping once you put the numbers side by side.

Let's start with the four properties that matter for an archival storage medium. **Density.** **Stability.** **Longevity.** **Energy cost of storage.** I am going to walk through DNA's spec sheet on each of these and compare it to tape, hard disk, and solid-state drive. By the end of this segment you should have an intuition for why, if you could solve the cost problem, DNA wins on every single axis that matters for cold archive.

\[Pause.\]

**Density first.** I said two hundred and fifteen petabytes per gram earlier, and I want to unpack that number a little. A nucleotide — one base in a strand of DNA — weighs about three hundred and thirty daltons, which is roughly five times ten to the minus twenty-two grams. So one gram of DNA contains, very roughly, two times ten to the twenty-one nucleotides. Each nucleotide carries two bits of information, because there are four possible bases — A, T, G, C — and two bits gives you four states. So one gram of DNA carries about four times ten to the twenty-one bits, which is about five times ten to the twenty bytes, which is about five hundred exabytes, or roughly half a zettabyte. That's the absolute theoretical maximum if you packed your DNA with the same efficiency that biology does.

In practice, when you store DNA in solution or in dried form on a shelf, you don't get that packing efficiency, and you have to account for the redundancy you add for error correction and the primer regions you need for random access. Realistic estimates from working storage systems land at somewhere between one and ten exabytes per gram of useable storage — which is, mind you, still six to seven orders of magnitude denser than the best magnetic tape, which tops out at around ten gigabytes per gram of medium. So even after all the practical haircuts, DNA is roughly a million times denser than tape. There is no plausible engineering breakthrough that gets tape anywhere near DNA's density, because tape is limited by the physics of magnetic domains, and DNA is limited by the physics of single atoms.

\[Pause.\]

**Stability second.** What I mean by stability is: how often, per unit time, does a stored bit spontaneously corrupt? In magnetic media, the bit is encoded in the orientation of a magnetic domain, and that orientation drifts under thermal noise on timescales of years to decades. In solid-state media, the bit is encoded in the amount of charge trapped on a floating gate, and that charge leaks away over months to years if the drive is unpowered. In optical media, the bit is encoded in the reflectivity of a pit, and the dye that creates the pit degrades on timescales of decades.

In DNA, the bit is encoded in the chemical identity of a base — A, T, G, or C — which is held in place by covalent bonds. Covalent bonds are fundamentally more stable than magnetic domains or trapped charges. The dominant failure modes of DNA over geological timescales are hydrolysis — water attacking the phosphodiester backbone and breaking the strand — and deamination — chemical conversion of one base into another, mostly cytosine into uracil. Both processes can be slowed dramatically by removing water and keeping the temperature low. In permafrost — about minus twenty degrees Celsius and dry — DNA survives sequencing-readable for tens of thousands of years. In dry storage at room temperature, encapsulated in silica glass or some other protective matrix, DNA has been shown to remain readable for hundreds to thousands of years by accelerated aging tests. There is a Swiss group — Robert Grass and his collaborators at ETH Zurich — who have done very careful work encapsulating DNA in silica nanoparticles and then heating it to accelerate aging, and they project survival times for properly encapsulated DNA of around two million years at standard conditions. Two million years. That is not a typo.

\[Pause.\]

**Longevity third.** This is closely related to stability but it's the practical, end-to-end question: how long can I leave my data on a shelf before I need to refresh it? Tape: thirty years. Hard drive: five to ten years, and only if powered. Solid-state: two to five years unpowered. CD-R or DVD-R: ten to thirty years depending on the dye. M-DISC, an archival optical format: maybe a thousand years if the marketing is generous. Engraved stone: tens of thousands of years if you choose your stone wisely.

DNA, properly encapsulated: hundreds of thousands of years, maybe millions, with zero maintenance. The closest competitor in physical durability is something exotic like nickel-plated holographic plates or radiation-hardened glass, both of which have storage densities about a billion times lower. There is, simply, no other medium that combines DNA's density with anything like its longevity.

\[Pause.\]

**Energy cost of storage fourth.** This one is the one that data center operators care about most, because energy is the largest ongoing cost of running a storage facility. A modern hyperscale data center uses millions of dollars worth of electricity per month, much of it dedicated to keeping spinning disks spinning, solid-state drives charged, and the whole building cooled. Tape libraries are better — most tapes sit in cartridges in racks, unpowered, and only get loaded into a drive when something needs to be read. But even tape libraries need climate control, robotic handling, and periodic refresh cycles.

DNA, sitting in a sealed tube on a shelf, consumes **literally zero energy** while it is being stored. No power. No cooling needed beyond ambient if you've encapsulated it properly. No moving parts. The only energy you spend is at the moment of writing and the moment of reading, both of which are infrequent events for archival data. For data that gets touched once a century, the energy footprint of DNA storage rounds to zero compared to any electronic alternative.

\[Pause.\]

So that's the spec sheet. Density: a million times better than tape. Stability: covalent bonds versus magnetic domains. Longevity: a thousand times longer at minimum. Energy cost in storage: zero. And on top of all of that, DNA is, in a deep sense, a **future-proof** medium. Magnetic tape requires a tape drive of the right format. Floppy disks require a floppy drive, which essentially no longer exists. Optical disks require an optical drive, which is now a specialty item. Every storage format ever invented eventually becomes unreadable because the reader stops being manufactured. DNA, by contrast, is read by the same kind of sequencer that we use for every other DNA application — for medicine, for agriculture, for research, for forensics. Sequencers are not going to stop being manufactured. As long as biology exists, we will have machines that can read DNA. So the readers, unlike every other storage format's readers, will keep getting better forever, instead of being retired and forgotten.

That last point matters more than people realize. The reason the Domesday Book project of 1986 — Britain's grand attempt to digitize national records on laserdisc for the nine-hundredth anniversary of the original Domesday Book — became unreadable within fifteen years was not that the laserdiscs themselves degraded. It was that the laserdisc players stopped being made, and the proprietary software stopped running, and the file formats became orphaned. DNA storage is immune to this failure mode in a way that no other storage format ever has been or ever will be. As long as there is biology, there will be sequencers. As long as there are sequencers, you can read DNA.

\[Pause.\]

Alright. So we have established that DNA is a fantastic medium in the limit. Now we need to talk about how you actually encode a file into it. Because a file is a string of zeros and ones, and DNA is a string of A's, T's, G's, and C's, and the translation between the two — while it sounds trivial — turns out to have a surprising amount of cleverness in it. That's where we go next.

---

## SEGMENT 3 — Two bits per base: the basic encoding

So let's get concrete. You have a file. Let's say it's a photograph, a JPEG, about one megabyte in size. That's eight million bits. Eight million zeros and ones, arranged in a particular order that, when fed to a JPEG decoder, produces a picture of, let's say, your dog.

You want to write that picture into DNA. How do you do it?

The most obvious encoding is this. DNA has four bases — A, T, G, C. Four states equals two bits. So you assign each base to a two-bit pattern. The canonical scheme is: A equals zero-zero, C equals zero-one, G equals one-zero, T equals one-one. Now any string of bits can be broken into pairs and translated, pair by pair, into a string of bases. The bit string zero-zero-zero-one-one-zero-one-one becomes the base string A-C-G-T. Eight bits became four bases. Two bits per base. Trivial.

For a one-megabyte file, eight million bits, you need four million bases. That's a single piece of DNA four million bases long. Now, here is where the first practical wrinkle comes in. We cannot, with current technology, synthesize a piece of DNA four million bases long. The longest oligonucleotides you can practically synthesize on a commercial chip-based synthesizer are about two hundred bases. Beyond that, the error rate per base accumulates exponentially and the yield drops to zero. So you cannot write your file as a single long DNA strand. You have to break it up.

\[Pause.\]

So you take your four million bases and you break them into chunks of, let's say, one hundred and fifty bases each. That gives you about twenty-seven thousand chunks. You synthesize each chunk as a separate oligonucleotide. You pool all twenty-seven thousand oligos together into a single tube, dry them down, and that tube is your file.

But wait. If you just dump twenty-seven thousand short DNA fragments into a tube, how do you know which order they go in when you read them back? In a hard drive, the bits are physically arranged in a known geometric order on the disk, so the reader knows that the bit at sector X address Y comes before the bit at sector X address Y plus one. In a DNA tube, the fragments are floating in solution in no particular order. They mix freely. When you sequence them, you get them back in a random order. So somehow each fragment needs to carry, encoded into it, an indication of where in the original file it belongs.

The way you do that is with an **index region**. Every oligo in your pool starts with a fixed number of bases — say twenty — that encode a unique number. Fragment number one starts with the bases encoding the binary representation of one. Fragment number two starts with the bases encoding two. And so on, up through twenty-seven thousand. When you sequence the pool and get back twenty-seven thousand reads, you sort them by their index region, concatenate them in order, strip off the index regions, and reconstruct the original bit string.

So now each of your oligos has the structure: index region of about twenty bases, then payload of about one hundred and thirty bases. The payload carries the actual data. The index region carries the address. Plus, on either end, you typically have fixed primer-binding sequences of about twenty bases each — we'll get to those in Segment 9 when we talk about random access — which means your useable payload is more like one hundred bases per oligo, and your effective storage efficiency is somewhere around two-thirds of the theoretical two bits per base.

\[Pause.\]

Already, the basic naive encoding is more complicated than it looks. And we are about to make it more complicated still, because the encoding I just described has two problems that will absolutely destroy your data if you try to use it as-is.

**Problem one: homopolymer runs.** DNA synthesizers and DNA sequencers both have a hard time with long stretches of the same base in a row. If your bit string happens to encode, say, twenty consecutive A's, the synthesizer will produce that run with high error rates — it tends to slip and skip bases — and the sequencer will struggle to read it back, especially nanopore sequencers, which have particular trouble counting homopolymers accurately. So you need an encoding that avoids long runs of the same base.

**Problem two: GC content imbalance.** DNA synthesis and PCR amplification both work best when the sequence has a roughly fifty-percent GC content — that is, equal proportions of A-plus-T versus G-plus-C. A region that is, say, eighty percent GC will form stable secondary structures, fold up on itself, and be hard to amplify or sequence. A region that is, say, ten percent GC will have weak base pairing in primer regions and will fail to amplify reliably. So your encoding needs to keep GC content roughly balanced across every oligo.

The naive two-bit-per-base encoding does neither of these things. If your file happens to contain a long run of zeros, you get a long run of A's. If your file happens to be biased toward zeros, your DNA is biased toward A and C. Real files — compressed video, encrypted archives, random bytes — tend to look roughly random and balanced, but you cannot rely on that. You need an encoding that **guarantees** good homopolymer and GC properties regardless of the input.

\[Pause.\]

So in practice, real DNA storage encodings use schemes that are more clever than the trivial two-bits-per-base mapping. The most common approach is something called **rotating encoding** or **rotation coding**, in which the mapping from bits to bases depends on the previous base. For example, you might use a base-3 encoding — three bases per nucleotide position — where the three options at each position are the three bases that are not equal to the previous base. So if the previous base was A, your three options are C, G, T. If the previous base was G, your three options are A, C, T. This guarantees that you never have two consecutive identical bases. It costs you a little efficiency — you get only one point five eight bits per base instead of two — but it eliminates homopolymer runs entirely.

Goldman and his collaborators, in their 2013 Nature paper, used exactly this trick — a base-3 encoding with a previous-base constraint, plus additional fixed-length codewords designed for balanced GC content. The Microsoft and University of Washington team have explored several encodings over the years, including base-2 schemes with constraint shaping and ternary schemes. There is also a family of encodings based on **fountain codes**, which we will get to in Segment 8 when we talk about error correction — fountain codes have a particularly nice property that they let you build oligos with controllable GC and homopolymer properties almost automatically.

\[Pause.\]

The point I want to leave you with for this segment is that the encoding step — the translation from bits to bases — is not the trivial mechanical step it first appears. It is a real piece of engineering, and the choices you make at the encoding stage propagate through the rest of the pipeline. A bad encoding gives you oligos that are hard to synthesize, hard to amplify, and hard to sequence. A good encoding gives you oligos that behave well at every stage. The art of DNA storage encoding is finding the sweet spot between information density — bits per base — and physical robustness — synthesis yield, amplification efficiency, sequencing accuracy.

Alright. Now that we have the basic encoding picture, let's go look at the first time anybody actually did this for real. Let's go meet George Church and Nick Goldman, and let's look at what happened in 2012 and 2013, when this field stopped being a thought experiment and became an actual demonstration.

---

## SEGMENT 4 — Church and Goldman 2012: the first books in DNA

So picture late 2012. Synthetic DNA has been a routine technology for about thirty years. Next-generation sequencing has been routine for about five. The cost of synthesizing DNA has dropped to roughly ten cents per base for short oligos in pooled chip-based synthesis. The cost of sequencing DNA has dropped to roughly ten dollars per million bases on Illumina platforms. Somebody, somewhere, is finally going to do the obvious experiment: encode a file into DNA, synthesize it, sequence it, decode it, and see if you get the file back.

That somebody, in 2012, was **George Church** at Harvard Medical School, working with Sri Kosuri and Yuan Gao. They published a paper in Science in August 2012 titled "Next-Generation Digital Information Storage in DNA." What they encoded was a book — Church's own book, _Regenesis_, plus a JavaScript program and eleven JPEG images, totaling about five and a half megabits, or roughly seven hundred kilobytes. They encoded it using a simple one-bit-per-base scheme — A and C both representing zero, G and T both representing one, with the choice between A versus C and between G versus T used to manage homopolymer constraints. They broke the file into about fifty-four thousand oligos of one hundred and fifteen bases each, synthesized them on a chip from Agilent Technologies, sequenced them back on an Illumina platform, and successfully decoded the file with only ten bit errors out of five point three million bits — an error rate of about two parts per million.

That paper, in 2012, was the moment DNA storage became real. It was the proof of concept. Before that paper, you could argue that DNA storage was a beautiful theoretical idea that might or might not work in practice. After that paper, you could no longer argue that. It demonstrably worked. The chemistry, the encoding, the sequencing, the decoding — all of it worked end to end, on a real file, with very few errors. The cost was astronomical — Church estimated the total cost of his demonstration at around twelve thousand dollars to write the seven hundred kilobytes — but the principle was proven.

\[Pause.\]

Then, in January 2013, **Nick Goldman** and his colleagues at the European Bioinformatics Institute in Hinxton, UK, published their own paper in Nature, titled "Towards practical, high-capacity, low-maintenance information storage in synthesized DNA." They went bigger than Church. They encoded about seven hundred and thirty kilobytes' worth of content — including a PDF of the original Watson and Crick double-helix paper, an MP3 of part of Martin Luther King's "I Have a Dream" speech, a JPEG of the EBI building, a text file of all of Shakespeare's sonnets, and a copy of the encoding algorithm itself. They broke it into about one hundred and fifty-three thousand oligos of one hundred and seventeen bases each, encoded using the base-3 rotation scheme I described in the last segment, with significant redundancy for error correction. They synthesized on an Agilent chip, sequenced on Illumina, and decoded the entire archive with zero errors after applying their error-correction scheme.

Goldman's paper was, in many ways, more carefully engineered than Church's. He thought about error correction from the start. He used the rotation encoding to avoid homopolymers. He built in fourfold redundancy by writing each chunk in both forward and reverse-complement form, with offset chunking so that any given byte of original data was covered by multiple oligos. The result was an encoding that could tolerate quite a bit of synthesis and sequencing error and still come out clean. The trade-off was lower density — Goldman's effective density was about half a bit per base after all the redundancy, compared to Church's roughly one bit per base — but the reliability was much higher.

\[Pause.\]

Both papers, taken together, mark the beginning of DNA data storage as a recognizable engineering field. Church showed that the basic chemistry worked at scale. Goldman showed that you could make it reliable with the right encoding. After 2013, the field exploded. Every year since then, somebody has published a new demonstration with a larger file size, a cleverer encoding, a lower error rate, or a new feature like random access. The field went from "this is a cute proof of concept" in 2012 to "this is a real research area with annual progress" by 2015. The progress curve, in terms of file size successfully encoded and recovered, has been roughly tenfold per few years.

I want to dwell for a moment on a particular feature of these early demonstrations, because it shapes everything that came after. Both Church and Goldman synthesized their DNA on **commercial chip-based oligonucleotide synthesizers**. They did not invent new chemistry. They did not build new machines. They used the same technology — the same Agilent chips, the same phosphoramidite chemistry, the same wash-and-couple cycles — that had been built and optimized over the previous two decades for the molecular biology research market. They were customers of existing technology, not inventors of new technology.

This matters because it means DNA storage, as a field, **inherited an enormous infrastructure**. By 2012, billions of dollars had been spent over decades to drive down the cost of oligonucleotide synthesis from many dollars per base in the 1980s to fractions of a cent per base by 2010. DNA storage benefited from all of that investment without having to fund any of it. Similarly, the field inherited the entire next-generation sequencing infrastructure — Illumina sequencers, Oxford Nanopore sequencers, the entire bioinformatics pipeline — built for biomedical research, available off the shelf.

The downside, however, is that the existing synthesis and sequencing infrastructure was **not designed for data storage**. It was designed for molecular biology, where the priorities are different — researchers care about sequence accuracy at the level of single bases, not about petabyte-scale throughput; they care about getting the right gene cloned, not about minimizing cost per terabyte written. So a lot of the engineering work in the DNA storage field over the past decade has been about taking these tools that were built for biology and figuring out how to bend them, push them, and sometimes redesign them for the very different requirements of data storage. We'll spend several segments on exactly that.

\[Pause.\]

Let's go talk about what happened after 2012 — about how the field moved from individual academic demos to organized industrial programs. Let's go meet Microsoft and the University of Washington.

---

## SEGMENT 5 — Microsoft, UW, and the Catalog approach

So around 2015, two things happened that signaled the field was moving from academic curiosity to industrial seriousness. **Microsoft** announced a research partnership with the **University of Washington's Molecular Information Systems Lab**, headed by Luis Ceze and Karin Strauss, to seriously investigate DNA data storage as a long-term archival technology. And on the other coast, **Catalog Technologies** was founded in Boston by Hyunjun Park and Nathaniel Roquet, with a fundamentally different approach to DNA storage that we'll spend the second half of this segment on.

Let me start with Microsoft and UW. The Microsoft-UW collaboration over the past decade has produced some of the most ambitious DNA storage demonstrations in the literature. In 2016, they encoded about two hundred megabytes of data — a meaningful step up from the kilobyte and megabyte scales of the earlier demonstrations. They demonstrated random access — the ability to retrieve specific files from a pooled archive without sequencing the whole thing. They demonstrated end-to-end automated systems — a fluidic device that takes a digital file as input, drives the synthesis, stores the DNA, performs PCR retrieval, runs the sequencer, and outputs the decoded file, all without human intervention. The throughput is glacial — kilobytes per hour, in the published demonstrations — but the point is that the entire pipeline can be automated, which is the necessary precondition for any future scale-up.

The Microsoft-UW work has also pushed hard on the **encoding side**. Lee Organick, Karin Strauss, and their collaborators have published a series of papers refining the encoding schemes — improving error correction, reducing redundancy overhead, optimizing the trade-off between density and reliability. They have explored both Reed-Solomon-based encodings and fountain-code-based encodings. They have studied how sequencing depth — the number of times each oligo is read on average — trades off against error-correction overhead. They have built up, over the past decade, what is probably the most mature systems-level understanding of how to actually run a DNA storage pipeline in the world.

\[Pause.\]

Microsoft's interest here is not academic. Microsoft runs Azure, which is one of the three biggest cloud platforms in the world. Azure stores exabytes of customer data. A meaningful fraction of that data is **cold archive** — backup data, regulatory-compliance data, scientific datasets — that customers want to keep for decades but rarely touch. The economics of storing cold archive on tape, with all the refresh costs and the physical footprint, are real. If you could replace a tape library that fills an entire data center with a refrigerator-sized DNA archive that holds the same data and survives a thousand years with no refresh, the savings — in floorspace, in energy, in operations — would be enormous. Microsoft has a real business reason to want this technology to work.

And Microsoft has the patience and resources to invest in it on a multi-decade timescale, which is the timescale this technology probably needs. Their internal research budget can absorb a research program that won't ship a product for fifteen years. Most companies cannot. The willingness of a major hyperscale cloud provider to fund this research over years is, in my opinion, one of the strongest signals that the field has long-term staying power. Microsoft is not betting that DNA storage will be commercial tomorrow. They are betting that it will be inevitable by 2040, and they want to be the company that's twenty years ahead when that happens.

\[Pause.\]

Now let's talk about **Catalog Technologies**, because they represent a fundamentally different bet, and I want to spend some time on it because the contrast illuminates what the core problem really is.

Catalog was founded in 2016 by Hyunjun Park, who was a postdoc at MIT, and Nathaniel Roquet. Their insight was the following. The cost bottleneck in conventional DNA storage is **per-base synthesis**. Every time you want to write a new file, you have to synthesize new, sequence-specific DNA — billions of unique bases, one base at a time, on a chip. That's slow and expensive. What if, instead of synthesizing unique DNA per file, you synthesized a small library of **common DNA components** once, and then used **enzymatic combinations** of those components to encode any file you wanted?

This is the Catalog approach in a nutshell. They synthesize, in large bulk batches, a library of a few hundred short DNA fragments — call them **codeword fragments**. Then, to encode a file, they don't synthesize new DNA at all. Instead, they use **enzymatic ligation** to combine the pre-synthesized fragments in specific orders and combinations that encode the desired data. The combinatorics of how you combine, say, two hundred codeword fragments into chains of ten gives you an astronomical encoding space — far more than you need for any practical file size. And critically, **the per-byte cost of combining pre-made fragments enzymatically is much lower than the per-byte cost of synthesizing unique sequences from scratch**, because you're doing the expensive synthesis step only once, in bulk, for the codeword library, and then amortizing it across every file you ever write.

\[Pause.\]

The catch is that Catalog's encoding scheme uses more DNA per bit than conventional encoding. Their density is lower, because each "logical bit" is represented by an entire combinatorial event rather than by a single base. You trade density for cost. And in 2019 and 2020, Catalog demonstrated their approach by encoding all of Wikipedia in English — about sixteen gigabytes — into DNA using their machine, called Shannon. The machine is the size of a kitchen, runs at about one megabit per second of write throughput in the published demos, and produces a tube of DNA that holds the encoded data. They have published throughput claims in the range of one terabyte per day for production-scale versions of the technology, although those are projections rather than demonstrated numbers.

The Catalog approach is not the only alternative architecture being pursued. **Iridia**, a startup based in California, is pursuing a fundamentally different approach in which they don't synthesize DNA at all — instead, they use **electronic chips** that translate digital signals directly into chemical modifications of pre-existing DNA scaffolds, in a way that's intended to be much faster and cheaper than chemical synthesis. **DNA Script** and **Molecular Assemblies** and **Ansa Biotechnologies** are pursuing **enzymatic synthesis** — using engineered enzymes, particularly variants of terminal deoxynucleotidyl transferase, or TdT, to build DNA strands one base at a time without the toxic solvents and harsh chemistry of phosphoramidite synthesis. We will spend Segment 11 entirely on enzymatic synthesis because it's potentially the most important cost-reduction lever in the entire field.

\[Pause.\]

So as of 2026, the DNA storage industry has, very roughly, three architectural approaches competing for the future. **One**, conventional phosphoramidite synthesis on chips, which is what Microsoft-UW and most academic groups use, and which is mature but expensive. **Two**, alternative combinatorial schemes like Catalog's, which trade density for cost reduction. **Three**, fundamentally new chemistries — enzymatic synthesis, electrochemical writing — that promise much lower per-base costs but are not yet mature enough to compete on accuracy and length. We don't know yet which of these three approaches, or some hybrid of them, will win. It is genuinely an open competition, and the answer over the next ten years will determine what DNA storage looks like as an industry.

Let's go now and actually walk through the full encoding pipeline, end to end, so you have a concrete picture of what happens between a file on your laptop and a tube of DNA on a shelf.

---

## SEGMENT 6 — The pipeline: file to tube and back

Alright. Let's walk through the full pipeline. I am going to take you from the file on your laptop, through every step of writing it into DNA, storing it, and reading it back. I want you to come out of this segment with a clear mental picture of every stage and what can go wrong at each one.

So you start with a file. Let's stay with our one-megabyte JPEG of your dog. Eight million bits.

**Stage one: source coding and compression.** Most files are already compressed, but if yours isn't — say it's a raw text file — you'd typically run it through a standard compression algorithm like gzip or zstd first, because compressed data is also more uniform in its statistical properties, which makes the downstream DNA encoding easier. After compression, you have your eight million bits, looking statistically like random noise.

**Stage two: encoding.** You apply your DNA encoding scheme. Recall from Segment 3 that this is the translation from bits to bases, with constraints to avoid homopolymer runs and balance GC content. Let's say you use a scheme that gives you about one point eight bits per base after constraints. So your eight million bits become about four point four million bases. Plus the encoding adds error-correction redundancy — let's say twenty percent overhead — which inflates the four point four million to about five point three million bases.

**Stage three: chunking and indexing.** You break your five point three million bases into oligos of, let's say, one hundred and fifty bases each. That gives you about thirty-five thousand oligos. You add to each oligo a twenty-base index region encoding its sequence number — fragment one, fragment two, fragment three, and so on — and you add fixed primer-binding regions of about twenty bases on each end. So each oligo's total length is about one hundred and ninety bases — twenty for the forward primer binding region, twenty for the index, one hundred and ten for the payload, twenty for the reverse primer binding region.

**Stage four: oligo design and quality check.** Before sending your sequences to a synthesizer, you run them through software that checks for forbidden patterns — secondary structure that would fold the oligos up, homopolymer runs that the encoding might have missed, melting temperatures of the primer regions that match what you'll need for PCR amplification later. You might iterate the encoding a bit at this stage to fix problems.

\[Pause.\]

**Stage five: synthesis.** You send your thirty-five thousand designed sequences as a digital order to a commercial synthesis provider — Twist Bioscience, IDT, Agilent, or one of the smaller chip-based houses. They run your sequences on a chip-based synthesizer. The chip is a piece of silicon with microscopic wells, each well being a separate synthesis reaction. Each well builds one of your oligos using the phosphoramidite cycle we covered exhaustively in the oligo synthesis lecture — detritylation, coupling, capping, oxidation, repeat — driven by a digitally-controlled mask that determines which bases get added to which wells at each cycle. After roughly one hundred and ninety cycles, the chip holds your thirty-five thousand oligos, each in its own well. They are cleaved off the chip, pooled into a single solution, and shipped to you as a single tube containing all your oligos mixed together.

**Stage six: storage.** You receive the tube. You dry it down — typically by lyophilization, freeze-drying, which removes the water without damaging the DNA — and optionally encapsulate it in silica or some other protective matrix to extend its lifetime. You put the resulting capsule in a shelf in a dry, cool place. That's your archive. The encoded file now exists physically as a small amount of dried DNA inside a small tube. Several years pass.

**Stage seven: retrieval — random access.** Some years later, you want your file back. You have many tubes in your archive — thousands, eventually — and each tube might hold many files. So first you need to find the right tube. You consult your index — which is itself stored somewhere, on conventional electronic media because retrieval needs to be fast — and you pull the right tube off the shelf. Then, within that tube, you need to find your file among all the oligos that belong to other files in the same pool. This is where the **primer-binding regions** earn their keep. The primer pair you assigned to your file's oligos is unique to that file. You add the corresponding PCR primers, run a few cycles of PCR, and you specifically amplify your file's oligos thousands of times over relative to all the other files' oligos in the pool. After amplification, your file's oligos dominate the mixture. We'll go much deeper on random access in Segment 9.

\[Pause.\]

**Stage eight: sequencing.** You take the amplified sample and run it on a sequencer. Either an Illumina platform — short reads of two hundred to three hundred bases, very high accuracy, several hours of run time — or an Oxford Nanopore platform — longer reads, slightly less accuracy, faster turnaround and real-time results. The sequencer reads each oligo many times — typically ten to fifty reads per oligo on average, depending on how much redundancy your encoding can tolerate. You end up with a file containing millions of sequence reads.

**Stage nine: clustering and consensus.** Many of those reads correspond to the same original oligo, with random sequencing errors scattered through them. You run a clustering algorithm — software that groups reads by similarity — to bin the reads by their underlying oligo. Then for each cluster, you compute a **consensus sequence** by majority vote at each position. The consensus sequence is your best estimate of what that oligo's original sequence was, even though no individual read might be perfectly correct.

**Stage ten: decoding and error correction.** You apply your encoding's error correction to the set of consensus sequences. This corrects residual errors, fills in any oligos that were missing entirely from your sample, and reconstructs the original bit string. Then you apply the inverse of your source coding — gunzip the data — and out comes your original JPEG. You feed it to an image viewer. There's your dog.

\[Pause.\]

Now, that's the pipeline, end to end. Notice how many stages there are, and notice how many of them can introduce errors. Synthesis introduces errors at roughly one part in a thousand per base — about one error per oligo of one hundred and fifty bases. Sequencing introduces errors at one part in a thousand for Illumina, ten parts in a thousand for Nanopore. Storage introduces errors at much lower rates if the DNA is properly stored — essentially zero on human timescales — but at longer timescales hydrolysis and deamination start to add up. Each PCR amplification step introduces a small amount of bias and a small amount of error. And the clustering and consensus step has its own statistical issues — if some oligos drop out completely from your sample, you have to recover them entirely from the error-correction redundancy.

The result is that the **end-to-end error rate of a DNA storage system**, without any error correction, is somewhere on the order of one to ten percent of bases being wrong. That is, an unacceptable error rate for digital data, where we are used to error rates measured in parts per trillion or better. The redundancy you build in with error correction has to be sufficient to bring that one-to-ten-percent raw error rate down to essentially zero — bit-perfect recovery of your original file.

That's a lot to ask of an error-correction scheme. And it's where the field has done some of its most beautiful engineering, because the schemes that work for DNA storage are different from the ones that work for, say, communication over a noisy channel or storage on a hard drive. DNA has its own weird error model, and the error correction has to be tuned for it.

That's where we go next.

---

## SEGMENT 7 — Error correction: Reed-Solomon, fountain codes, and the redundancy that saves you

So let's talk about error correction. This is a deep field — there are entire textbooks on error-correcting codes — and I am not going to try to give you a full course on coding theory in twenty minutes. What I am going to do is give you the intuition for **why error correction is critical for DNA storage**, **what makes DNA's error model different from other storage media**, and **what two specific families of codes — Reed-Solomon codes and fountain codes — do that makes them well-suited to this application**.

Let's start with the basic intuition. Suppose you have a string of one million bits that you want to store. If you store it raw, every bit error becomes a bit error in your output. If the storage medium has a per-bit error rate of, say, one in a thousand, you will get about a thousand errors in your one million bits. For most digital files, even a single bit error in the wrong place destroys the file — flip one bit in a JPEG header and the whole image becomes unreadable.

So you need to **add redundancy**. You write more bits than you strictly need, in a structured way, such that the extra bits let you reconstruct the original even when some of the bits get corrupted. The simplest possible error correction is repetition — write each bit three times, and if any one of the three gets flipped, you can recover it by majority vote. That works, but it triples your storage cost for very modest error tolerance. Real error-correcting codes do much better — they can tolerate, say, one in ten symbols being wrong while adding only twenty percent to the storage cost.

\[Pause.\]

The mathematics of error correction is over a century old at this point, dating back to Hamming and Shannon in the 1940s. The key insight is that if you encode your data carefully, you can spread the information across many output symbols in such a way that **any subset of symbols above a certain threshold lets you recover the original**. You don't need any specific symbol; you just need enough of them. That's the magic property.

**Reed-Solomon codes**, named after Irving Reed and Gustave Solomon in 1960, are the workhorse error-correcting codes of the modern era. They are used in CDs and DVDs to handle scratches, in QR codes to handle physical damage, in deep-space communications to handle cosmic-ray bit flips, in RAID systems to handle disk failures. The Reed-Solomon code takes your data, treats it as the coefficients of a polynomial, and writes out additional polynomial values at additional points. As long as you can recover any sufficient number of points, you can interpolate the polynomial and recover the original data. If you encode N data symbols into N plus K total symbols, you can tolerate up to K erasures — symbols that are missing — or K-over-two random errors — symbols that have been corrupted to wrong values.

\[Pause.\]

Reed-Solomon codes work well for DNA storage, and several of the major DNA storage systems use them, but they have a particular limitation: they want a **fixed-length codeword** and they want a **fixed total number of symbols**. If you know in advance exactly how many oligos will come back from your sample, and exactly how long each one is, Reed-Solomon is great. But DNA storage has a particular weird property: when you sequence your sample, you don't get back a fixed set of oligos. You get back a **random sample** of the oligos in the tube. Some oligos are oversampled — they show up hundreds of times in your reads. Some are undersampled — they show up once or twice. And some, called **dropouts**, don't show up at all. The dropout rate in real DNA storage systems is typically one or two percent — about two percent of your oligos just vanish, because they were synthesized poorly, or amplified poorly, or simply lost in the noise.

This is where **fountain codes** come in, and where the engineering becomes really clever. Fountain codes are a family of error-correcting codes invented in the late 1990s and early 2000s for a different application — broadcasting data over unreliable networks where receivers might drop packets. The defining property of a fountain code is that it produces a **potentially infinite stream of output symbols**, any sufficient subset of which can reconstruct the original data. You don't need a fixed number of symbols. You just need enough. The receiver collects symbols until they have enough, then decodes. If some packets are lost, they just collect a few more. There is no fixed limit.

\[Pause.\]

In 2017, Yaniv Erlich and Dina Zielinski published a beautiful paper in Science titled "DNA Fountain enables a robust and efficient storage architecture," in which they applied a particular fountain code called the Luby Transform code to DNA storage. The match was extraordinary. Each output symbol of the fountain code became one oligo. The encoding produced an essentially unlimited number of possible oligos, of which they could synthesize as many as they wanted — more redundancy gave more error tolerance, less redundancy saved cost. The decoding required only that a sufficient fraction of the oligos came back from sequencing, regardless of which ones. Dropouts didn't matter, because dropouts were just packets that didn't arrive — exactly the failure mode fountain codes were designed for.

Erlich's DNA Fountain demo achieved a storage density of one point six bits per base — close to the theoretical maximum of two — while tolerating realistic synthesis and sequencing error rates with full recovery. It was, at the time, the most efficient DNA storage encoding ever demonstrated. Subsequent work has used variations on the fountain-code idea throughout the field. Most modern DNA storage encodings now use either fountain codes or a hybrid scheme that combines fountain codes for the outer layer — handling dropouts — with Reed-Solomon codes for the inner layer — handling errors within each surviving oligo.

\[Pause.\]

I want you to take away three things from this segment. **One**, DNA storage's error model is dominated by dropouts — entire oligos missing — much more than by within-oligo base errors, although both happen. **Two**, fountain codes are particularly well-suited to the dropout-dominated regime, because they let you encode without committing to a fixed set of output symbols and decode from any sufficient subset. **Three**, the price of error correction is the **storage overhead** — typically twenty to fifty percent more DNA than the raw data would need — and this overhead directly inflates your synthesis cost. A more aggressive error-correction scheme tolerates more errors but costs more to write. The right setting is a tunable engineering parameter, and the optimal setting depends on the quality of your synthesis and sequencing.

In a sense, error correction is the **insurance policy** of DNA storage. You pay a premium — extra synthesis cost — in exchange for protection against the inevitable errors of the medium. The art is in pricing the insurance correctly — buying just enough to guarantee recovery, no more. Buy too little, and you lose your data. Buy too much, and you waste money. Real DNA storage systems are tuned to operate in a regime where the synthesis and sequencing error rates are just barely tolerable given the error-correction budget — pushing both error rates and redundancy as low as the system can stand.

Alright. Now let's talk about a feature of DNA storage that we keep alluding to but haven't fully explored: **random access**. Because being able to find a specific file in a large pool, without sequencing the entire pool, is the difference between DNA being a useful archive medium and being a sequential-only tape replacement.

---

## SEGMENT 8 — Random access: PCR as a retrieval index

So far in this lecture we have mostly been talking about writing one file into one tube and reading the whole tube back. That's fine for a proof of concept. But a real DNA archive is going to hold thousands of files in a single tube — or, more realistically, billions of files across thousands of tubes — and you need to be able to retrieve a single file from that archive without having to sequence everything.

This is the **random access** problem, and the solution to it is one of the most elegant pieces of DNA storage engineering. The solution is: **PCR**.

Recall what PCR does. PCR — polymerase chain reaction — takes a DNA sample, plus a pair of short DNA primers, plus a polymerase enzyme, plus nucleotides and a thermal cycler. It runs through cycles of denaturation, annealing, and extension. In each cycle, the polymerase extends the primers along whatever DNA template they happen to bind to. After thirty cycles, any DNA fragment that is flanked by the two primer-binding sequences has been amplified by roughly a billion-fold. Any DNA fragment that is not flanked by those primer-binding sequences has not been amplified at all. The amplification is exquisitely specific. PCR is the most selective amplification reaction in biology.

\[Pause.\]

Now apply this to DNA storage. Recall that every oligo in our archive has the structure: forward primer binding region, then index, then payload, then reverse primer binding region. We have been thinking of the primer regions as just fixed bookends. But what if we assigned **different primer pairs to different files**?

That's exactly what we do. Every file in your archive gets a **unique primer pair** — a pair of short DNA sequences, about twenty bases each, designed to be unique and not to cross-react with any other primer pair in the archive. When you write file A, you put primer-pair-A on every oligo of file A. When you write file B, you put primer-pair-B on every oligo of file B. You pool all the oligos from all the files into a single tube — your archive — and dry it down.

Years later, you want to retrieve file A. You take a small sample of your archive tube — most of it, the original, you put back on the shelf as your master copy. You add primer-pair-A to your sample. You run PCR. After thirty cycles, file A's oligos have been amplified roughly a billion-fold. All the other files' oligos have not been amplified at all. The sample, which started as a balanced mixture of millions of files, is now a sample dominated by file A's oligos by a factor of about a billion to one. You sequence that sample. Almost every read you get back belongs to file A. You decode file A.

\[Pause.\]

That's it. That is the random access scheme. PCR primers as **file handles**. The primer sequence is essentially the **address** of the file in the archive. To retrieve a file, you specify its address — its primer pair — and PCR does the work of picking that file out of the mixture for you.

The math here is genuinely beautiful. The space of possible twenty-base primer sequences is four to the twentieth, which is about a trillion. Not all of those are valid primers — most fail some criterion like melting temperature, secondary structure, or cross-reactivity with other primers — but the space of designably-unique primer pairs is still in the billions. So you can imagine an archive with billions of separately-addressable files, each one retrievable by a unique PCR primer pair. That's a serious file system.

There are some practical complications. The first is **primer cross-reactivity** — you have to design your primer set so that no primer accidentally amplifies the wrong file. This is a real combinatorial design problem, and people have spent a lot of effort on automated primer design systems for DNA storage. The second is **PCR bias** — PCR doesn't amplify all oligos perfectly equally; some get amplified more than others. This is mostly a problem for the data within a file rather than across files, but it requires careful tuning. The third is **sample depletion** — every retrieval uses up some of your archive, because you take a portion of the tube to sequence. In practice, archives are designed so each retrieval consumes a tiny fraction, and the master copy can be re-amplified from itself as needed.

\[Pause.\]

Microsoft and UW have built and demonstrated automated random-access systems that combine all of this into an integrated workflow. You query their system with "give me file X," and a fluidic robot draws a small aliquot from a particular tube, mixes it with the appropriate primers, runs PCR, transfers the amplified sample to a sequencer, runs the sequencing, runs the decoding software, and returns your file. In the published demonstrations, this whole pipeline runs in something like ten to twelve hours from query to file — slow compared to a hard drive, but entirely reasonable for cold archive retrieval, where you might be perfectly happy to wait a day for a file you haven't touched in twenty years.

The random access scheme can also be hierarchical. You can have **physical addressing** — one tube per directory, or per project, or per customer — combined with **logical addressing** within a tube via primer pairs. A real DNA archive of the future probably looks like racks of vials, each vial holding many files, with a database that maps file paths to (vial location, primer pair) tuples. The retrieval system is a robot that pulls the right vial, dispenses an aliquot, runs the PCR with the right primers, and sequences the result.

\[Pause.\]

One more wrinkle on random access. There has been interesting research on **partial random access** — retrieving only a specific portion of a file, rather than the whole file. This requires a more elaborate addressing scheme, where each chunk of a file has its own sub-address that you can specify in your retrieval query. The Microsoft-UW group has published work on this. The use case is for files that are very large — a multi-terabyte database, say — where you want to read just a few rows without retrieving the whole thing. The DNA storage analog of an index lookup in a database. Whether this becomes practically important depends on what kinds of data people end up wanting to store in DNA.

Alright. We've covered the technical foundations. We've covered encoding, error correction, and random access. We've talked about the major players and the major demonstrations. Now we have to talk about the elephant in the room. The thing that makes DNA storage, despite all its theoretical advantages, not yet a commercial reality. We have to talk about **cost**.

---

## SEGMENT 9 — The economics: why DNA storage is not yet competitive

I want to give you the numbers, because nothing concentrates the mind like a hard number.

The going rate for synthesizing a megabyte of data into DNA, using current commercial chip-based synthesis at current prices, is approximately **three thousand five hundred dollars per megabyte**. That's an academic-research-grade number — researchers buying chip-based oligo pools at commercial prices, applying current encoding schemes, including the error-correction overhead. Some commercial DNA storage outfits will quote you lower numbers, in the range of one thousand dollars per megabyte at scale, but those are projections rather than today's published-paper numbers. Either way: thousands of dollars per megabyte to write.

The going rate for **reading** a megabyte back from DNA, using Illumina sequencing at the depth required for reliable decoding, is approximately **ten dollars per megabyte**. Reads are vastly cheaper than writes. The cost of reading has dropped roughly tenfold per few years for the past decade and a half, and it's now in a regime where it's not the binding constraint on DNA storage economics. Writing is.

For comparison, the cost of storing a megabyte on conventional cloud storage is fractions of a cent per megabyte per month, or for cold archive on services like AWS Glacier Deep Archive, less than a hundredth of a cent per megabyte per year. The cost of writing a megabyte to LTO tape, amortized over the tape's lifetime, is less than a hundredth of a cent. So conventional storage is **roughly five orders of magnitude cheaper** to write than DNA storage is today.

\[Pause.\]

So why does anyone think DNA storage will ever be competitive? Because the cost curve, if certain technical bets pay off, can plausibly come down by three or four orders of magnitude over the next ten to fifteen years. And because the value proposition of DNA — extreme density, extreme longevity, zero energy in storage — is sufficiently differentiated from conventional media that you don't necessarily need to match conventional pricing exactly. You need to get within an order of magnitude of conventional cold archive pricing, and then customers who specifically value the durability and density features can pay a modest premium for them.

The often-cited target number is around **one cent per megabyte** for write cost. At one cent per megabyte, DNA storage starts being competitive with LTO tape for very long-term cold archive — the regime where you're going to store the data for fifty or one hundred years and never re-read it. At one cent per megabyte, the savings on energy and refresh cycles can plausibly justify the higher write cost. To get to that one-cent-per-megabyte number from today's roughly three-thousand-five-hundred-dollars-per-megabyte, you need to drop write cost by a factor of about three hundred and fifty thousand.

\[Pause.\]

That sounds insane, but it's not totally unprecedented. The cost of DNA sequencing has dropped by a factor of about a million over the past twenty years — from the three-billion-dollar Human Genome Project to a thousand-dollar genome to a hundred-dollar genome today. The cost of computing has dropped by similar factors over similar timescales. So a four-hundred-thousand-fold drop in synthesis cost over ten to twenty years is in the range of historical precedent, although it's on the aggressive end of it. Whether it actually happens depends on whether one or two specific technical bets — mainly enzymatic synthesis, which we'll cover next segment — pay off at scale.

The unit economics decompose into roughly three factors. **Cost of materials** — the phosphoramidite reagents, the chips, the enzymes. **Cost of throughput** — how many bases per second per machine you can write. And **cost of error correction overhead** — how much extra DNA you have to synthesize beyond your raw data to tolerate the error rate of your process. Reducing any of these factors reduces total cost. Enzymatic synthesis attacks the first two by replacing expensive phosphoramidite reagents with cheaper enzymatic reactions and by promising higher throughput per machine. Better error-correction schemes attack the third by tolerating more errors per base and reducing the redundancy needed. Higher write density per chip — more parallel synthesis reactions in the same physical area — attacks throughput.

\[Pause.\]

One more economic dimension worth mentioning: **archive cost over time**. The cost story for DNA storage looks bad if you consider only the initial write cost. But if you consider the full cost of storing data for, say, fifty years, including refresh cycles, energy, and floorspace for conventional media, DNA's economics get more competitive. LTO tape, refreshed every thirty years, costs roughly two cents per megabyte over fifty years of storage. DNA, if we could get the initial write cost down to ten cents per megabyte, would beat that on a total-cost-of-ownership basis because it requires no refresh, no energy, and minimal floorspace. So the competitive bar for DNA is not "match tape's write cost" but rather "match tape's total-cost-of-ownership for very long-term cold archive." That's a much easier bar.

The economic regime where DNA storage first makes sense, in other words, is **cold archive that needs to survive for many decades**. Not active storage. Not warm storage. Not even hot tape. The deepest, coldest, most rarely accessed end of the storage hierarchy. The kind of data that you write once, expect never to read, but legally or strategically must keep intact for a very long time. Government archives. Scientific datasets. Cultural heritage. Insurance records. Pharmaceutical trial data. There is an enormous amount of this data in the world, and the volume is growing, and the long-term cost of keeping it on conventional media is real and growing.

That is the market DNA storage is targeting. And if the technology gets there on cost, it's a market worth, plausibly, tens of billions of dollars per year. Worth a long bet by Microsoft, by Twist, by Western Digital, by all the players in the consortium we'll talk about later in the lecture.

Alright. Take fifteen minutes. Stretch your legs. Come back and we'll dive into enzymatic synthesis — the single technology that, more than any other, has to work for DNA storage to ever become economically viable.

\[BREAK\]

---

## SEGMENT 10 — Enzymatic synthesis: the path to cost reduction

Welcome back. I hope you got coffee. The second half of this lecture is going to focus on the engineering paths forward — the technologies and architectural ideas that, if they pan out, take DNA storage from today's expensive curiosity to tomorrow's commodity infrastructure. And we are going to start with the most important one. The one that, more than any other single technology, determines whether DNA storage ever becomes a thing.

**Enzymatic DNA synthesis.**

Recall from the oligo synthesis lecture, or from common knowledge, that the way we currently make synthetic DNA — the phosphoramidite chemistry that Caruthers invented in 1981 — is a **chemical** process. It uses phosphoramidite monomers, organic solvents like acetonitrile, mild acids for detritylation, iodine for oxidation, and acetic anhydride for capping. It runs on solid supports — controlled pore glass beads in column synthesizers, or silica wafers in chip-based synthesizers. It's a marvelous chemistry. It has dominated for forty-five years. And it has fundamental limitations.

The first limitation is **per-base cost**. Phosphoramidite monomers are expensive synthetic organic compounds. The solvents are expensive. The reagents are consumed in each cycle and not recycled. The economics of phosphoramidite synthesis are largely driven by reagent costs, and those reagents have not gotten much cheaper over the past decade because the underlying organic chemistry is already mature. There is no realistic path that drops phosphoramidite synthesis costs by another two orders of magnitude.

The second limitation is **length**. Per-cycle yield in phosphoramidite synthesis is about ninety-nine point five percent in a well-tuned synthesizer. That sounds great, but compounded over many cycles it becomes a serious problem. After two hundred cycles, the yield of full-length, perfectly-correct product is about thirty-five percent — the rest is truncated or contains errors. Beyond two hundred bases, the yield drops off so fast that you can't reliably make longer oligos. For data storage applications, longer oligos would be better — more payload per oligo, less overhead in primer regions and indices — but phosphoramidite chemistry can't deliver them.

The third limitation is **environmental footprint**. Phosphoramidite synthesis generates a lot of organic waste — gallons of acetonitrile, mostly — and uses toxic reagents. At small academic scale, this doesn't matter much. At the scale you'd need for petabyte-per-year DNA storage, it becomes a real industrial environmental problem.

\[Pause.\]

Enzymatic synthesis is the proposed alternative. The idea: instead of using chemical phosphoramidite monomers, use a **biological enzyme** that naturally adds nucleotides to the end of a DNA strand. There is, conveniently, exactly such an enzyme: **terminal deoxynucleotidyl transferase**, or **TdT**. TdT is a polymerase enzyme that, unlike most DNA polymerases, doesn't require a template. It just sticks nucleotides onto the three-prime end of any DNA strand it can grab onto. It's used in your immune system, of all places, to introduce random variability into antibody and T-cell receptor genes. Biology has been using TdT to write random DNA for hundreds of millions of years.

The challenge in repurposing TdT for synthesis is that, by default, it adds nucleotides randomly. You feed it a mixture of A, T, G, and C, and it adds them in a random order. For synthesis you need controlled, base-by-base addition — you want to add an A and only an A, then a G and only a G, then a T and only a T. To do that, you need to give TdT one base at a time, in a controlled way, with a mechanism that stops the reaction after exactly one base has been added.

\[Pause.\]

The cleverest approach to this — the one being pursued by **DNA Script**, **Molecular Assemblies**, **Ansa Biotechnologies**, and several other startups — is to use **modified nucleotides** that have a blocking group on the three-prime end. When TdT adds one of these modified nucleotides to the growing chain, the blocking group prevents another nucleotide from being added next. The reaction stops at exactly one base. Then you wash away the unincorporated nucleotides, remove the blocking group with a mild chemical or enzymatic treatment, and you're ready for the next cycle with the next base.

This is, in a deep sense, a kind of **biological mirror** of phosphoramidite chemistry. In phosphoramidite synthesis you have a chemical blocking group — the DMT — that gets removed each cycle to expose the next reactive site. In enzymatic synthesis you have a different chemical blocking group — typically a small chemical cap on the three-prime oxygen — that gets removed each cycle to expose the next reactive site. The architectural logic is the same. Cap, add, uncap, add, uncap. The difference is in the chemistry of the addition step — phosphoramidites versus an enzyme — and in the chemistry of the cap.

\[Pause.\]

The promised advantages of enzymatic synthesis are substantial. **Lower per-base cost**, because enzymes are catalysts — one TdT molecule can add many nucleotides over its lifetime, unlike phosphoramidite monomers which are consumed one-per-base. **Aqueous chemistry**, no toxic organic solvents, much lower environmental footprint. **Potentially longer oligos**, because enzymes don't accumulate error in the same way that aggressive chemical reactions do — DNA Script has reported synthesizing oligos of several hundred bases with reasonable yields. **Higher synthesis density per chip**, because aqueous chemistry can use much smaller reaction volumes than organic-solvent chemistry, allowing more parallel synthesis spots in the same area.

The honest status as of 2026 is: enzymatic synthesis works in the lab, several companies have shipped commercial enzymatic synthesizers — DNA Script's SYNTAX platform launched in 2021 — but the per-base cost is not yet meaningfully lower than phosphoramidite synthesis, and the per-base error rate is somewhat higher. The technology is real, but it has not yet delivered the cost revolution that everyone expects of it. Whether it will, and on what timeline, is the single biggest open question in the DNA storage field.

\[Pause.\]

Why do people think the cost revolution will eventually come? Two reasons. First, enzymatic synthesis is in roughly the position that phosphoramidite synthesis was in around 1985 — just commercialized, not yet mature, with lots of obvious engineering improvements still to be made. The first-generation enzymes are not optimal — they were selected by natural evolution for biology's purposes, not for industrial DNA synthesis — and protein engineering can plausibly produce much better TdT variants with higher fidelity and faster catalysis. Second, the underlying biology is a far better starting point for cost reduction than chemistry. Enzymes are protein catalysts. They are produced by fermentation in bacteria, the same way insulin is made. Fermentation costs scale very differently from organic-synthesis costs — they get cheaper much faster with scale, because you're using biological reproduction to make your reagents.

So the long-term thesis on enzymatic synthesis is: with five to ten years of engineering work, you can probably get enzymatic synthesis to the cost regime where DNA storage becomes economically interesting. Maybe ten cents per megabyte. Maybe one cent per megabyte. Hard to say exactly. But there's a clear technical path, with several well-funded companies pursuing it, and the consensus in the field is that something like enzymatic synthesis is the only plausible route to the cost levels DNA storage needs.

If enzymatic synthesis doesn't work, DNA storage probably stays a niche curiosity forever. If it does work, it potentially becomes a major piece of cold archive infrastructure within fifteen years.

That's the wall, and that's the bet.

---

## SEGMENT 11 — The read side: sequencing as a bottleneck too

Now let's talk about the other end of the pipeline. Writing is the dominant cost today — reading is about three orders of magnitude cheaper — but reading has its own scaling challenges that I want you to be aware of.

Recall that DNA storage benefits from the entire investment that biomedical sequencing has made over the past two decades. Illumina sequencers and Oxford Nanopore sequencers are the workhorses. Both technologies have driven the cost of reading a base of DNA down by a factor of a million since 2001. Today, Illumina can sequence a base for fractions of a microdollar at scale. That's already cheap enough that, for DNA storage, the per-base read cost is a manageable component of the system cost.

But there are two problems that get worse as DNA storage scales up. **Throughput** and **latency**.

**Throughput first.** A single Illumina NovaSeq, the highest-throughput Illumina instrument, can sequence about a hundred billion bases per day. That sounds like a lot — and it is — but for DNA storage applications, you need to read each oligo many times to get a reliable consensus. The effective storage-read throughput is more like ten to twenty billion bases per day of decoded data. That's a few terabytes per day per sequencer. For a DNA archive serving meaningful read traffic from a real customer base, you'd need many sequencers running in parallel. And the sequencers themselves cost a million dollars each. So the capital cost of the read infrastructure can become non-trivial at scale.

\[Pause.\]

**Latency second.** An Illumina sequencing run takes ten to twenty hours from sample loading to data output, plus several hours of sample prep before. So the round-trip time from "I want to read file X" to "here's file X" is on the order of a day. For cold archive, that's fine. Most cold archive retrievals are tolerable on a one-day SLA. But it does mean that DNA storage, by its nature, has very different latency characteristics from electronic storage. You cannot do interactive, low-latency reads from a DNA archive. You can only do batch reads with a day or so of round-trip time.

**Oxford Nanopore** is interesting in this context because it has fundamentally different latency characteristics. Nanopore sequencers stream data in real-time — you can start getting reads within seconds or minutes of starting the run, and you can stop as soon as you have enough data. So a nanopore-based DNA storage system can plausibly get retrieval latencies down to single-digit minutes for small files. The trade-off is that nanopore has higher error rates than Illumina — about one to five percent per base, compared to Illumina's one in a thousand — which means the encoding has to tolerate more errors. For DNA storage specifically, where you're already running heavy error correction anyway, the trade-off might be worth it.

\[Pause.\]

There has been interesting work in the past few years on **DNA-storage-specific sequencers** — instruments designed not for biomedical research but for the specific demands of reading data back from DNA archives. The throughput requirements are different. The error tolerance is different. The fragment-length distribution is more controlled than in random biological samples. A purpose-built DNA storage sequencer could plausibly be much cheaper and faster than today's general-purpose biomedical sequencers.

One particularly promising direction is **integrated read chips** — silicon devices that combine nanopore-style sensing with on-chip electronics for real-time decoding. These chips would, in principle, let you build a DNA storage drive that is read in real-time by the device itself, without ever needing an external sequencer. Iridia has talked about something in this vein, and there are academic groups working on integrated electronic readout of DNA. None of this is commercial yet. But it's a plausible path to making the read side of DNA storage as much of a commodity as the write side will eventually become.

\[Pause.\]

The point I want to leave you with is: **don't underestimate the read side**. Today, reading is cheap relative to writing, and the field has been justifiably obsessed with bringing down write costs. But as write costs come down, read costs become a larger fraction of total system cost, and the scaling characteristics of read infrastructure — throughput, latency, capital cost — start to matter. A complete DNA storage industry will need both sides — cheap, scalable writing _and_ cheap, scalable reading — to come together. The read side is currently ahead, but it won't stay infinitely ahead, and engineering attention is going to shift there in the coming decade.

---

## SEGMENT 12 — Catalog Technologies: the alternative approach in depth

I introduced Catalog briefly in Segment 5. Let's go deeper now, because their approach really does represent a different architectural bet and the contrast is illuminating.

The Catalog thesis, recall, is this. The per-base cost of synthesizing unique DNA is high, and dropping it requires either dramatic phosphoramidite-chemistry improvements (unlikely) or a successful enzymatic-synthesis revolution (possible but uncertain). Catalog says: forget about reducing per-base synthesis cost. Instead, **eliminate per-bit synthesis entirely**.

Their architecture works like this. They synthesize, in one large bulk batch, a library of perhaps a few hundred unique, pre-made DNA fragments. These fragments are short — perhaps a few dozen bases each. They are produced in industrial quantities by conventional phosphoramidite synthesis, but only once, and shared across all customers and all files. The per-base cost of producing these fragments is irrelevant to the per-bit cost of storing data, because the same fragments encode every file the system ever writes.

Then, to encode a specific file, Catalog uses **enzymatic ligation** — DNA ligase, an enzyme that joins two DNA fragments together — to assemble the pre-made fragments into specific combinations and orders that encode the digital data. The encoding scheme is combinatorial. With, say, two hundred different fragments, and chains of ten fragments each, the number of possible chains is two hundred to the tenth, which is about ten to the twenty-third. That's an astronomical encoding space — far more than enough for any practical file size.

\[Pause.\]

The economic logic is that **enzymatic ligation is much faster and much cheaper than de novo synthesis on a per-bit basis**. You're not synthesizing new bases. You're just joining existing fragments together. The chemistry is simple, the reactions are fast, and the throughput per machine can be very high. Catalog's Shannon machine, in its 2019 Wikipedia demonstration, ran at roughly one megabit per second of write throughput — much faster than any chip-based phosphoramidite synthesizer.

The trade-off is **density**. Each "logical bit" in Catalog's scheme is represented not by a single DNA base but by an entire combinatorial event — which specific fragment was used at a specific position in a chain. That means Catalog's effective storage density, in bits per gram of DNA, is significantly lower than conventional DNA storage. Maybe three or four orders of magnitude lower than the theoretical maximum, though still many orders of magnitude better than tape or hard drives. The bet is that, for cold archive applications where density is gratuitously abundant anyway, trading some density for lower cost and higher throughput is a winning trade.

\[Pause.\]

There are skeptics. The conventional-encoding camp points out that the long-term cost of per-base synthesis is going to drop dramatically once enzymatic synthesis matures, and at that point the per-bit cost advantage of Catalog's approach disappears. They also point out that Catalog's lower density translates into more physical volume, more handling, more shipping, more cold-storage footprint — which matters at large scale.

The Catalog camp counters that they don't need to wait for enzymatic synthesis to mature. Their cost advantage is available today, with current technology, using existing manufacturing infrastructure. And they argue that even when enzymatic synthesis matures, the throughput advantages of their combinatorial approach will persist — you can ligate fragments together faster than you can synthesize bases, even with the best possible enzyme.

Time will tell which side of this argument is right. Both architectures have well-funded backers. The history of computing is full of examples where the "wrong" architecture won because it shipped sooner and got the iteration time to improve faster than the theoretically-better architecture could mature. Catalog might be that story for DNA storage. Or they might be a dead end. Worth watching either way.

\[Pause.\]

The broader point I want to draw from the Catalog example is that **DNA storage is not a single technology — it's a problem space**, and multiple architectural approaches are viable. Conventional per-base synthesis. Combinatorial assembly from pre-made libraries. Electronic chemical modification of existing scaffolds. Living-cell storage, which we'll get to in the next segment. Each of these is a different bet on which sub-problem is hardest and where the cost reduction lever is. The market will eventually pick winners, but as of 2026, multiple winners are still possible.

This is what an early-stage industry looks like. Multiple competing architectures, each with credible technical and economic stories, with the eventual market structure unclear. It's a sign of how much real engineering progress is happening in the field that there are this many viable architectures at all.

---

## SEGMENT 13 — DNA in living cells: Church's movies in bacteria

Now let me describe one of the most genuinely science-fiction-feeling demonstrations in this field. In 2017, George Church and his collaborators at Harvard — Seth Shipman, Jeff Nivala, Jeffrey Macklis — published a paper in Nature titled "CRISPR-Cas encoding of a digital movie into the genomes of a population of living bacteria."

Let me walk you through what they did. They took a short video — a five-frame animated GIF of a galloping horse, from the famous Eadweard Muybridge photographs of the 1870s, plus also still images — and encoded the pixel values into DNA. Each pixel's intensity became a particular DNA sequence. They then used the CRISPR-Cas system in **E. coli** bacteria to insert these DNA sequences, one frame at a time, into the bacterial genome.

CRISPR, in its native bacterial context, is the bacteria's adaptive immune system against viruses. When a virus attacks a bacterium, the bacterium captures a short piece of viral DNA and inserts it into a specific region of its genome called the CRISPR array. The CRISPR array is, in essence, the bacterium's memory of past viral attacks. The insertions happen in chronological order — newer entries get inserted at one end, older entries pushed toward the other end. So the CRISPR array is, by its nature, a **temporally ordered log** of DNA events.

\[Pause.\]

Church's group realized that this temporally-ordered logging behavior could be repurposed for **recording arbitrary data over time** into the bacterial genome. By presenting the bacteria with their encoded movie frames in temporal order, the CRISPR machinery would insert each frame into the genome in order, building up a record of the movie inside the live cells. The bacteria would then divide, and divide, and divide — and each daughter cell would inherit the record. The movie was now, in a very real sense, stored inside the descendants of the original cells.

To read it back, you sequence the CRISPR arrays from the descendant population. The reads give you back the frames, in order. You decode them and reconstruct the video. They demonstrated this end to end with the Muybridge horse images. It worked.

Now, this is not a practical storage technology. The amount of data you can store per cell is small — kilobytes at most. The error rates are higher than in vitro synthesis. The cells have to be maintained as a living population. You can't just put them in a vial on a shelf and come back in ten thousand years — they need to be cared for, fed, kept alive, and they evolve over time, which means the data drifts. This is a proof of concept, not a product.

\[Pause.\]

But it's a fascinating proof of concept, because it demonstrates two things. **One**, that the boundary between "storage medium" and "living organism" is more porous than it might intuitively seem. You can write data into a cell, and the cell will faithfully copy it for many generations, and you can read it back out. The cell is, in some sense, a living storage medium with built-in replication and self-repair. **Two**, that there are use cases for cellular DNA storage that don't fit into the standard archive paradigm. You could imagine using cellular DNA storage as a **biological sensor logger** — engineering bacteria that record environmental signals into their genomes over time, then sequencing the resulting cells later to recover the time series of what they experienced. This has potential applications in environmental monitoring, biosurveillance, or in vivo biological recording inside human patients.

There has been follow-up work along these lines. Several groups have demonstrated using engineered cells to record various kinds of biological signals — gene expression patterns, exposure to specific molecules, cell division histories — by writing those signals into a DNA "ticker tape" inside the cell. The field is still small, but it's a different and complementary approach to the in-vitro DNA storage that dominates the rest of this lecture.

\[Pause.\]

For your purposes — understanding DNA storage as an archival technology — cellular DNA storage is a fringe approach with limited near-term commercial prospects, but it's important to know about because it illustrates the breadth of what's possible. The molecule of DNA is the same in both cases. The architectural choices — store it in a tube, store it in a cell, store it as a chain of pre-made fragments, store it as a chain of fresh bases — are the engineering knobs.

Now let's get back to the in-vitro archival case and look at how the industry is organizing itself. Let's talk about the DNA Data Storage Alliance.

---

## SEGMENT 14 — The industry consortium: Twist, Microsoft, Western Digital, and the Alliance

In 2020, a group of companies founded the **DNA Data Storage Alliance**, an industry consortium dedicated to developing and promoting DNA storage technology. The founding members were **Twist Bioscience** — currently the largest commercial chip-based oligo synthesis company — **Illumina** — the dominant sequencing company — **Microsoft** — through Azure — and **Western Digital** — the storage hardware giant. The alliance has since grown to include dozens of members spanning the synthesis, sequencing, storage, and end-user space.

The existence of this alliance is, I think, one of the most concrete signals of the industry maturity of DNA storage. When a major hyperscale cloud provider, a major sequencing company, a major synthesis company, and a major storage hardware company all sit down at a table together and agree to fund pre-competitive research and develop interoperability standards, you are no longer looking at a speculative academic field. You are looking at the early formation of a real industry.

\[Pause.\]

What does the alliance actually do? Several things. They fund pre-competitive research on common technical problems — error-correction standards, encoding standards, interfaces between synthesizers and storage systems and sequencers. They work on **standards** for things like file format, metadata, error-correction parameters, primer design conventions — the kinds of standards that, once agreed on, let companies interoperate and build on each other's work rather than reinventing wheels. They advocate to policymakers about the strategic importance of DNA storage for long-term data preservation. They sponsor academic research and run workshops to coordinate the broader research community.

This is exactly the kind of consortium that, historically, has launched real industries. The compact disc was launched by a Sony-Philips consortium. The DVD by a multi-company alliance. USB by an Intel-led consortium. Wi-Fi by the IEEE 802.11 working group. Any technology that requires interoperability between many companies' products needs this kind of pre-competitive standards-setting work, and the existence of an alliance for DNA storage suggests that the major players believe the technology is on a trajectory to need those standards within a decade.

\[Pause.\]

Twist Bioscience, the synthesis arm of the alliance, deserves some particular attention because they are by far the largest current commercial DNA storage vendor. Twist makes high-density silicon-chip-based oligonucleotide synthesizers and sells the resulting oligo pools both for biomedical research and for DNA storage applications. They have publicly discussed scaling their synthesis capacity to the petabit-per-year range for DNA storage specifically, and they have collaborated on several major published demonstrations including the Microsoft-UW work.

Twist's competitive position is interesting. On one hand, they have the largest installed synthesis capacity and the deepest customer relationships. On the other hand, their technology is still phosphoramidite-based, which means they face the same fundamental cost ceiling as everyone else using that chemistry. If enzymatic synthesis from DNA Script or one of the other startups eventually delivers on its promise, Twist will have to either license that technology, develop their own, or be disrupted. They are, by all reports, aware of this and investing accordingly. But the dynamic is one to watch.

Western Digital's role is also worth noting. They are a storage hardware company — their core business is hard disks and solid-state drives — and they have been investing in DNA storage as a hedge against the long-term commoditization of conventional storage. If DNA storage ever becomes a real category, it's going to need integrated systems — racks of synthesizers, samplers, sequencers, and software, packaged together as a "DNA storage appliance" — and Western Digital wants to be the company that builds those appliances. Their bet is on systems integration, not on the underlying chemistry.

\[Pause.\]

Across the alliance and the broader industry, there is what I would call a **convergent expectation** about the rough timeline. The consensus belief, as of 2026, is that DNA storage will be commercially viable for niche cold-archive applications by around 2030 to 2035, with broader adoption potentially by 2040 to 2050. These dates are highly contingent on the success of enzymatic synthesis and on the continued growth in cold-archive demand. They might be wrong. But the convergence around these timelines suggests that the industry has a coherent shared narrative about where it's going and roughly when, which is what you'd expect from a field that is past the wild-speculation stage and into the focused-engineering stage.

---

## SEGMENT 15 — Speculative applications: vaults, satellites, and the Long Now

Let me indulge for a moment in the speculative applications of DNA storage. Some of these are real proposals being seriously discussed. Some of them are flights of fancy. All of them are interesting as windows into what people imagine DNA storage might enable.

**Long-term cultural archives.** The Vatican Library holds millions of books, manuscripts, and documents dating back over a thousand years, many of them irreplaceable. The British Library, the Library of Congress, and similar institutions have similar collections. The total volume of human cultural artifacts that we have a strong civilizational interest in preserving indefinitely is, plausibly, in the petabyte range. Storing these on tape and refreshing every thirty years works, but it's vulnerable to institutional collapse — if the institution that does the refreshing stops existing, the data is lost within decades. Storing them in DNA — sealed in vials, distributed across many locations, requiring no maintenance — is a much more **institution-independent** preservation strategy. There have been serious discussions among archivists about this, including from the **Internet Archive**.

\[Pause.\]

**The Long Now Foundation**, an organization dedicated to long-term thinking and long-term preservation, has explored DNA storage as a candidate medium for some of their preservation projects. The famous **Rosetta Disk** project — a nickel-etched disk containing parallel texts in over a thousand languages, designed to last several thousand years — could in principle be replaced or augmented by a DNA archive that holds vastly more linguistic content in vastly less space. The Long Now's interest in DNA storage stems from their general thesis that humanity needs to plan storage strategies on geological rather than corporate timescales, and DNA is one of the few media that actually operates on those timescales.

**Lunar and deep-space archives.** There have been proposals to put DNA archives on the **Moon** — sealed vaults of dried DNA holding a backup of human civilization's most important data, immune to Earth-based catastrophes. The **Arch Mission Foundation** has put DNA samples on lunar landers as part of demonstration projects, including encoding portions of Wikipedia. The vision is that, if civilization on Earth collapses or is destroyed, a future restoration effort could recover from the lunar archive. Whether you think this is sober planetary insurance or science-fiction grandiosity probably depends on your personality. Either way, the projects are real and the DNA is, as of this lecture, sitting on the lunar surface.

\[Pause.\]

**Personal time capsules.** A more modest application: encoding personal data — a family photo album, a child's writing, a recorded message — into DNA as a personal time capsule, sealed in a small glass vial, intended to last centuries. The cost is currently prohibitive — thousands of dollars per megabyte — but for small, high-value personal archives, this might become a niche consumer product as costs come down. The pitch: "the messages your great-great-grandchildren will be able to read in two hundred years, in a vial small enough to fit in a necklace."

**Embedded data in physical objects.** Researchers have demonstrated encoding DNA into plastic objects, into ink, into paper, into the materials of physical products. Imagine a manufacturer who, for traceability or branding or authentication, embeds DNA-encoded data into every product they ship. The data is invisible, indestructible at the molecular level, and contains the full manufacturing history of the object. There are real anti-counterfeiting applications being explored along these lines.

**Scientific datasets.** Many areas of science are generating datasets that are scientifically priceless but that are growing faster than affordable storage can keep up with. Particle physics. Astronomy. Genomics. Climate science. There are real conversations in these fields about long-term archiving strategies, and DNA is being discussed as one of the candidate solutions.

\[Pause.\]

I don't want to oversell any of these. Most of them are at least a decade away from being economically feasible, and some of them may never be. But they illustrate the breadth of what becomes possible when storage is **cheap enough, dense enough, and durable enough**. We have spent the entire history of human civilization rationing storage. Choosing which records to keep and which to discard. Discarding more than we keep. DNA storage at the projected long-term cost regime would change that calculus. We could, in principle, keep everything. Forever. The choice of what to remember would no longer be forced on us by storage scarcity.

What we would do with that capability — what we would choose to keep, what we would choose to retrieve, what we would choose to make available across centuries — is a cultural question, not a technical one. But the technical capability is, plausibly, going to exist within the lifetime of people sitting in this room.

---

## SEGMENT 16 — The path forward: where DNA storage fits in the hierarchy

So given all of this, let's try to put DNA storage into context within the broader storage landscape. Where does it fit? When does it make economic sense? Who will use it first?

The storage hierarchy, as it exists today, looks roughly like this. At the top is **CPU registers and cache** — small, expensive, nanosecond access times, used for active computation. Below that is **DRAM** — bigger, cheaper per byte, accessed in tens of nanoseconds, used for working memory. Below that is **solid-state drive** — much bigger, much cheaper, microsecond access, used for primary storage. Below that is **hard disk drive** — bigger still, cheaper still, millisecond access, used for warm storage. Below that is **magnetic tape** — enormous capacity, very cheap, seconds-to-minutes access, used for backup and cold archive. The hierarchy spans roughly nine orders of magnitude in access time, from nanoseconds to seconds, and roughly six orders of magnitude in cost per byte, from cache to tape.

DNA storage, with realistic projections, fits at the bottom of this hierarchy. Below tape. **Deep cold archive.** Hours-to-days access times. Lower cost per byte than tape at very large scale. But — and this is the killer feature — vastly better longevity, vastly better density, and vastly lower energy footprint than tape.

\[Pause.\]

The first commercial use cases for DNA storage, if and when they emerge, will be for data that fits this profile. Data that **must be kept** — legally, regulatorily, scientifically, or strategically — but that is **rarely or never read**. Data where the cost equation is dominated by long-term storage cost rather than retrieval latency. Data where physical durability matters — where you need the data to survive disasters, institutional collapses, geopolitical disruptions, or simply the passage of decades.

Specific application categories likely to lead. **Government records archives** — tax records, court records, regulatory filings — that must be kept for decades or centuries. **Pharmaceutical clinical trial data** — multi-decade obligations to retain. **Scientific datasets** — particle physics, genomics, astronomical surveys — that grow faster than storage budgets. **Cultural preservation** — libraries, museums, religious archives. **Insurance and reinsurance records** — multi-decade exposure horizons. **Banking and financial records** — regulatory retention requirements. **Healthcare records** — lifelong patient histories.

In all of these cases, the customer doesn't care about millisecond retrieval. They care about durability, cost over the long term, and reduced operational burden. DNA storage offers all three, once the write cost gets low enough.

\[Pause.\]

The transition won't be sudden. DNA storage will not replace tape overnight. It will, plausibly, start by serving the absolute coldest, longest-retention tier — the tier where customers are willing to pay a premium for the longevity guarantees. As costs come down, it will expand upward in the hierarchy, taking more and more of the cold-archive workload from tape. At no point, in any plausible scenario, does DNA storage compete with SSDs or DRAM. It's not even the same kind of medium. The pitch is not "DNA is a faster hard drive." The pitch is "DNA is a better tape, for the things tape was already worst at."

There is also a possible **hybrid architecture** in the long-term future. Imagine a storage system that holds frequently-accessed data on conventional electronic media, mid-frequency data on tape, and the deepest archive in DNA. Data ages through the hierarchy automatically — when a file hasn't been touched in a year, it migrates to tape; when it hasn't been touched in ten years, it migrates to DNA. The DNA tier is the **forever** tier. Anything written there is presumed to be kept for centuries. This kind of tiered architecture is already how cloud storage works today, just with DNA added as a new bottom tier.

\[Pause.\]

The key question for whether DNA storage actually happens, commercially, on the timeline people hope, is whether the cost curve cooperates. If enzymatic synthesis delivers on its promise within ten years, and if the broader DNA storage industry continues to converge on standards and architectures, then by the mid-2030s you can imagine the first commercial DNA archive services being offered by the major cloud providers as a high-value-add option for specific cold-archive workloads. From there, the technology spreads as cost falls and customer familiarity grows.

If, instead, enzymatic synthesis hits a wall, or the cost reductions are slower than projected, or the demand for ultra-long-term archive doesn't materialize at the scale people expect, then DNA storage stays a research curiosity for another decade, and the timelines push out. There are scenarios where it never becomes commercially significant.

My honest assessment, having watched this field for years: the underlying technical bets are credible. The economic logic is sound. The customer demand for long-term cold archive is real and growing. The major players are all in place. The probability that DNA storage becomes a real industry within twenty years is, in my estimate, somewhere in the range of fifty to seventy percent — high enough that it's worth taking seriously, low enough that it's not a sure thing. The bet is genuinely live.

That, I think, is the most honest summary I can give you of where we stand in 2026.

---

## SEGMENT 17 — Frontier: write-once-read-many chips and ML-based encoding

Let me close the substantive part of the lecture with a tour of some of the most interesting frontiers — the directions that, if any of them work, would dramatically change the landscape.

**Integrated write-once-read-many DNA chips.** The natural endpoint of DNA storage hardware is a single device that combines synthesis, storage, and sequencing in one integrated chip. You feed in digital data, the chip writes it to DNA, holds the DNA in micro-reservoirs, and reads it back electronically on demand. No external sequencer. No external synthesizer. No sample handling. Just a chip. This is conceptually the DNA equivalent of a solid-state drive — a self-contained storage device with electrical interfaces. Several research groups are working toward this. None has demonstrated it end to end yet at any meaningful capacity. If it works, it dramatically simplifies the deployment story for DNA storage — instead of needing a whole data-center-scale facility with synthesizers and sequencers, you have a chip you can plug into anything.

\[Pause.\]

**Machine-learning-based encoding.** Modern machine learning, particularly deep learning, has been applied to the problem of designing DNA storage encodings that maximize storage density while remaining robust to the specific error patterns of real synthesizers and sequencers. Rather than designing the encoding by hand, you train a neural network to learn an encoding-decoding pair that performs well empirically. This has produced encodings that meaningfully outperform hand-designed ones in some recent studies, particularly for handling the unusual error patterns of nanopore sequencing. The full impact of ML-based encoding is still being worked out, but it's a real direction.

**Higher-bit-per-base encoding via modified bases.** Why limit yourself to four bases? Chemistry can produce a much larger alphabet of nucleotide-like molecules — modified bases, base analogs, synthetic alphabets. If you encode with eight bases instead of four, you get three bits per base instead of two. With sixteen bases, four bits per base. There are real research programs exploring this. The challenge is that the synthesizer and sequencer both need to be able to write and read the expanded alphabet, which requires new chemistry on both ends. But the potential density gains are significant.

\[Pause.\]

**DNA storage as part of broader bio-cyber systems.** Imagine integrated systems where data flows freely between biological and computational substrates — where a sensor in a cell writes its readings into DNA, where the DNA is sequenced by an on-chip sequencer, where the sequence is processed by silicon electronics, and where computational results feed back into the cell as new DNA messages. This is the frontier of what's sometimes called **molecular computing** or **cyber-biological systems**, and DNA storage is one piece of it. The vision is genuinely strange — a kind of computing-biology hybrid where the distinction between data and biology is blurred — but it's where some of the most adventurous researchers are pushing.

**In-DNA computation.** A particularly exotic direction: doing computation **on the DNA itself**, while it's stored, without ever reading it back to a digital form. You can imagine DNA-based logic gates, DNA-based sorting algorithms, DNA-based similarity search. There has been beautiful theoretical work in this area, and some experimental demonstrations of simple operations. The dream is that a DNA archive could not just store data but compute on it directly — for example, searching a large archive for entries matching a query, without having to sequence everything. Whether this becomes practically useful remains to be seen.

\[Pause.\]

**Hybrid sub-cellular storage.** Bringing back the cellular-storage thread from Segment 13 — there is interesting work on engineering specific subcellular compartments to act as storage organelles, optimizing them for higher data density and longer stability than the natural chromosome. This blurs the line between in-vivo and in-vitro storage in interesting ways. If you can engineer a cell to have a dedicated "storage organelle" that holds much more data than the natural genome and survives much longer in dormant form, you get some of the advantages of cellular storage — self-replication, self-repair — with some of the advantages of in-vitro storage — high density, long-term dormancy.

I list these to convey that this is an active, vibrant, scientifically rich field, with multiple frontiers being pushed simultaneously. The path from current academic demonstrations to commercial DNA storage is not a single well-defined road — it's a fan of possibilities, and the eventual industry will likely be shaped by which of these frontier ideas pan out over the next decade.

---

## SEGMENT 18 — The closing: a medium that outlasts us

We are nearly at the end. Let me try to bring this together.

We started two hours ago with a claim. I said: **DNA is the most physically dense, most chemically stable, most energy-efficient archival storage medium that physics and chemistry will ever offer us, full stop.** I hope I have convinced you of that claim. Density: a million times better than tape. Stability: covalent bonds versus magnetic domains. Longevity: hundreds of thousands of years versus decades. Energy: zero. There is no other medium that even comes close on all of these dimensions simultaneously.

We then spent the lecture exploring what stands between that theoretical promise and a commercial reality. **Cost** is the wall, and the cost of writing — chemical synthesis of unique DNA — is currently five orders of magnitude too high. The path to bridging that gap runs through **enzymatic synthesis**, which is the technology that, more than any other, has to work for DNA storage to become economically viable. It probably will work, on a ten-to-twenty-year timescale, but it isn't guaranteed.

We looked at the architecture — the encoding, the error correction, the random access. The system-level engineering is genuinely beautiful. Fountain codes mapping perfectly onto the dropout-dominated error model of DNA pools. PCR primers serving as file handles for random access. Reed-Solomon codes inherited from the deep-space and CD industries, working alongside fountain codes inherited from network broadcast research. The DNA storage system as it exists today is a fusion of biology, chemistry, information theory, and systems engineering, and it works.

We looked at the players. George Church and Nick Goldman, who proved the principle in 2012 and 2013. The Microsoft-UW collaboration, which has driven systems-level maturity. Catalog Technologies, with their alternative combinatorial architecture. DNA Script and the other enzymatic synthesis startups. The Twist-Illumina-Microsoft-Western Digital industry alliance. A coherent ecosystem, with credible roadmaps, with shared standards work, with a fifteen-to-twenty-year horizon for commercial deployment.

\[Pause.\]

I want to leave you with a particular thought. The medium of DNA, considered as an archival technology, has a property that no other medium in human history has ever had. **DNA outlasts us.** Specifically, the molecule of DNA is older than human civilization, older than our species, older than mammals. It has been the storage medium of life on Earth for at least three and a half billion years, and the molecule has not changed in that time. The bases are the same. The double helix is the same. The chemistry is the same. The biological storage medium we are now repurposing for our digital archives is, by a factor of a million, the longest-tested, most-evolved, most-proven information storage substrate that exists or will ever exist.

When you write a file into DNA, you are using the same molecule that holds the genetic memory of every living thing on Earth, going back to the origin of life. You are placing your data into the same kind of container that nature has used to carry its own data forward across four billion years of geological time. That is not a metaphor. It is literal. The chemistry is the chemistry. The molecule is the molecule.

\[Pause.\]

And when that file is read, possibly thousands of years from now, by people we will never meet, in a civilization we cannot imagine, they will read it with a sequencer that is, in its essential operating principle, a more advanced version of the sequencers we have today. They will pour your tube into a flow cell. They will read out the bases. They will run the decoder. Your file will appear on their screen, exactly as you wrote it, eons after you yourself have been forgotten. The medium will have done its job. The bits will have survived. The information will have made it across the gap.

That is what DNA storage offers — not just an incremental improvement over magnetic tape, but a fundamentally different relationship between digital information and time. A relationship in which the data outlasts the institutions that wrote it, the civilizations that valued it, perhaps even the species that created it. A medium that operates on geological timescales, in a context where every other digital medium operates on the timescale of fashion cycles.

\[Pause.\]

Whether the engineering and economics actually deliver on this promise within the next two decades is, as I've said, genuinely uncertain. The technical bets might fail. The market might not materialize. The whole industry could turn out to be a footnote. But the underlying physics and chemistry support a remarkable possibility. We have, in the four-base code of DNA, the most durable, most dense, most stable storage medium that the laws of nature permit. We are, slowly and at great expense, learning to write to it and read from it on our own terms. If we succeed, we hand to the future a capability that no previous civilization has ever had — the ability to preserve, indefinitely, the contents of our digital lives.

That is the work. That is the field. That is the opportunity. And that, I think, is a fitting place to end.

Thank you for your attention over the past two hours. I'm happy to take questions for the next fifteen minutes or so. After that, you can find me by email or in office hours later this week.

\[Pause.\]

\[End of formal lecture. Open the floor for questions.\]

---

## APPENDIX — Suggested further reading, key terms, and references

**Foundational papers.**

Church, George M.; Gao, Yuan; Kosuri, Sriram. "Next-Generation Digital Information Storage in DNA." _Science_, August 2012. The foundational demonstration of file-to-DNA encoding at meaningful scale.

Goldman, Nick; Bertone, Paul; Chen, Siyuan; Dessimoz, Christophe; LeProust, Emily M.; Sipos, Botond; Birney, Ewan. "Towards practical, high-capacity, low-maintenance information storage in synthesized DNA." _Nature_, January 2013. The encoding-design paper that introduced rotation coding and serious error correction.

Erlich, Yaniv; Zielinski, Dina. "DNA Fountain enables a robust and efficient storage architecture." _Science_, March 2017. The fountain-code application to DNA storage that achieves near-Shannon-limit density.

Organick, Lee et al. "Random access in large-scale DNA data storage." _Nature Biotechnology_, March 2018. The Microsoft-UW random-access demonstration.

Shipman, Seth L.; Nivala, Jeff; Macklis, Jeffrey D.; Church, George M. "CRISPR-Cas encoding of a digital movie into the genomes of a population of living bacteria." _Nature_, July 2017. The cellular DNA storage demonstration.

Grass, Robert N. et al. "Robust chemical preservation of digital information on DNA in silica with error-correcting codes." _Angewandte Chemie_, February 2015. The encapsulation work that supports multi-millennium longevity projections.

**Companies and organizations to know.**

_Twist Bioscience_ — currently the largest commercial chip-based oligo synthesis company; major DNA storage vendor.

_Microsoft Research / Azure_ — long-term research investment in DNA storage; partner of UW's Molecular Information Systems Lab.

_Catalog Technologies_ — Boston-based startup pursuing the combinatorial-ligation approach to DNA storage; built the Shannon machine.

_Iridia_ — California-based startup pursuing electronic chemical modification of DNA scaffolds.

_DNA Script, Molecular Assemblies, Ansa Biotechnologies_ — leading enzymatic-synthesis startups; the path to cost reduction.

_DNA Data Storage Alliance_ — founded 2020 by Twist, Illumina, Microsoft, Western Digital; industry consortium for standards and research.

_Arch Mission Foundation_ — non-profit putting DNA archives in lunar and other off-Earth vaults.

_Long Now Foundation_ — long-term-thinking organization with serious interest in DNA preservation.

**Key terms.**

_Oligonucleotide (oligo)_ — a short, chemically synthesized piece of DNA, typically twenty to two hundred bases.

_Phosphoramidite chemistry_ — the dominant chemistry for chemical DNA synthesis since 1981; works on solid supports, cycle of detritylation-coupling-capping-oxidation.

_TdT (terminal deoxynucleotidyl transferase)_ — template-independent DNA polymerase; the enzymatic basis for enzymatic synthesis platforms.

_PCR (polymerase chain reaction)_ — exponential amplification of specific DNA fragments using primer pairs; the basis of random access in DNA storage.

_Reed-Solomon code_ — polynomial-based error-correcting code; tolerant to a known fraction of erasures and errors.

_Fountain code / Luby Transform code_ — error-correcting codes designed for unreliable-channel broadcast; particularly well-suited to DNA storage's dropout-dominated error model.

_Dropout_ — the failure mode in DNA storage in which an entire oligo is missing from the sequenced sample; typically one to two percent of designed oligos.

_Homopolymer run_ — a stretch of identical consecutive bases (e.g. AAAAA); problematic for synthesis and sequencing accuracy.

_GC content_ — fraction of G plus C bases in a sequence; should be around fifty percent for good synthesis and amplification.

_Random access_ — the ability to retrieve a specific file from a pooled archive without sequencing the whole pool; achieved via PCR with file-specific primers.

_Cold archive_ — storage tier for rarely-accessed, long-retention data; the target market for DNA storage.

_LTO (Linear Tape-Open)_ — the standard format for modern magnetic-tape backup; the incumbent that DNA storage must eventually displace.

_Enzymatic synthesis_ — DNA synthesis using enzymes (typically TdT) rather than phosphoramidite chemistry; the proposed path to dramatic cost reduction.

_Catalog combinatorial approach_ — encoding via enzymatic ligation of pre-made fragments rather than de novo per-bit synthesis.

**Suggested further exploration.**

For students wanting to go deeper, the **Microsoft Research DNA Storage** project page lists their full publication record and several open-source software tools. The **DNA Data Storage Alliance** website provides a roadmap document outlining the consensus industry view of timeline and milestones. **Yaniv Erlich**'s public talks on DNA Fountain are excellent introductions to the encoding theory. **George Church**'s book _Regenesis_, the same book that was the original 2012 demonstration payload, gives a broader vision of where synthetic biology including DNA storage is heading. **Andrew Hessel**'s _The Genesis Machine_ also surveys the synthetic biology landscape from an industry perspective.

For the chemistry foundations, the companion lectures on **oligonucleotide synthesis** and **gene synthesis** in this course cover the underlying chemistry on which DNA storage rests.

**End of script.**

