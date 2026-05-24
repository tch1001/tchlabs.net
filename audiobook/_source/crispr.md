# CRISPR

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, which gets you very close to two hours with a little room for questions. Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — What CRISPR is, and why it changed biology in a decade

Alright, let's get started. Good morning, everyone. For the next two hours, we're going to talk about CRISPR — and I want to warn you up front, I find this stuff genuinely thrilling, and I'm not going to pretend otherwise. So buckle in.

Let me start with the single sentence I want you to walk out of here with, and then I'll spend two hours unpacking it. **CRISPR is find-and-replace for the genome.** That's it. That's the whole thing.

Think about how you use Ctrl+F in a Word document. You type in a word, the cursor flies to that word in the text, and you can replace it with something else. Now imagine doing that — not in a fifteen-page essay, but in the three billion letters of DNA that make up your genome. Imagine typing in a sequence of, say, twenty letters of DNA, and a tiny molecular machine inside one of your cells locates the matching sequence somewhere in those three billion letters, parks itself there, and cuts the DNA at that exact spot — so the cell can either repair the cut and disable a gene, or, if you've handed it instructions, swap in a new sequence. That's CRISPR. Find-and-replace, but the document is your chromosomes.

That's the entire idea. Every other thing I'm going to tell you today — the bacterial origin story, the protein called Cas9, the Nobel Prize, the patent fight, the first approved cure for sickle cell disease, the diagnostic tests that lit up during COVID, the screens that probe every gene in the genome, the base editors and prime editors and dead-Cas9 fusions — every one of those is a variation on, or an extension of, that one core capability. RNA tells protein where to go on DNA. Once you can do that reliably and cheaply, you have rewritten what's possible in biology.

And I want you to feel why that matters, because if you grew up in a world where CRISPR was always there, it's hard to appreciate what it replaced. Before CRISPR — and I mean before about 2013 — if you wanted to disable just one specific gene in a mouse, you spent two years of a graduate student's life and tens of thousands of dollars to do it. If you wanted to do the same thing in a human cell line in a dish, you spent months engineering a custom protein for each target, and most of the attempts failed. Genome editing existed, but it was the equivalent of writing a letter by hand-carving each character into a stone tablet. It worked, but you weren't going to write many letters.

After CRISPR, a single undergraduate could log onto a website, type in the name of the gene they wanted to edit, click a button, order a custom guide RNA from a vendor for thirty dollars, clone it into a plasmid in an afternoon, drop it into cells the next morning, and have edited cells by the end of the week. The price went down by three or four orders of magnitude. The time went from years to days. The skill required dropped from "specialist core facility" to "first-year graduate student following a protocol." That's what I mean when I say CRISPR changed biology in a decade. It didn't invent a brand-new capability. It took a capability that was rare, expensive, and painful — and made it routine. And routine is what changes a field.

\[Pause.\]

So here's what I want from you in two hours. If you can walk out of this room and do three things — first, sketch how CRISPR works as a bacterial immune system, including what those weird repeats are and where they came from; second, walk a confused friend through how a protein called Cas9 finds its target in your DNA and cuts it; and third, look at any flavor of modern CRISPR — a base editor, a sickle cell cure, a COVID test, a genome-wide screen — and tell me what's been added to the core idea and why — then we've succeeded. Everything else is decoration on those three.

One last framing before we dive in. CRISPR is really two stories braided together. One story is **basic biology**: bacteria, fighting viruses, evolving a clever immune system over millions of years. That story is beautiful all by itself. The other story is **technology**: a moment in 2012 when some scientists realized that the bacterial immune system could be turned into a universal genome editor. The first story explains the second. You can't really understand why CRISPR works the way it does without understanding the bacterial system it came from. So that's where we'll start — not in a fancy biotech lab, but in some bacteria nobody was paying much attention to.

---

## SEGMENT 2 — Where it came from: bacteria's memory of past viral attacks

Picture, for a moment, a bacterium. A single-celled organism, drifting around in a puddle or living in your gut. From the bacterium's point of view, the world is dangerous, and the most dangerous thing in the world is something called a **bacteriophage** — "phage" for short. A phage is a virus that infects bacteria. It lands on the bacterium, sticks a needle through the cell wall, and injects its own DNA inside. The bacterium's cellular machinery is hijacked, the cell becomes a factory for making more phages, and eventually it bursts open and dies, releasing hundreds of new phages to go infect more bacteria. Phages are the most numerous biological entities on Earth — there are estimated to be around ten to the thirty-first of them in the oceans alone. For bacteria, every minute is a war.

Now, here's a question. If you were a bacterium, and you survived a phage attack — by sheer luck, say — could you do anything to make yourself ready for the next one? Animals like us have immune systems that remember past infections. That's why a vaccination card works. Your immune system, when it sees a virus, makes antibodies; if the virus comes back, the antibodies recognize it and crush it before it can spread. We have memory. Could bacteria possibly have something similar?

For most of the twentieth century, the answer was "no, of course not." Bacteria were thought to have only crude, innate defenses — enzymes that chop up any DNA that doesn't have the right chemical tags, that kind of thing. The idea that bacteria might have an immune system with actual memory — that they could store a record of past attacks and use it to recognize future ones — would have struck most microbiologists as wildly implausible. Bacteria are simple, after all.

Here's where the story starts, and it starts in the most ordinary way possible. In 1987, a Japanese microbiologist named **Yoshizumi Ishino** was sequencing a gene in the bacterium _E. coli_. He wasn't looking for an immune system. He was looking at an enzyme. But while he was reading the DNA around the gene of interest, he noticed something strange. There was a short stretch of about 29 letters of DNA that repeated several times in a row — but each repeat was separated from the next by a roughly 32-letter stretch of completely different sequence. So the pattern looked like: REPEAT, gibberish, REPEAT, gibberish, REPEAT, gibberish. The repeats were all the same. The bits between them — what we now call **spacers** — were all different.

Imagine flipping through a book and finding the same sentence printed on every fifth page, with different paragraphs in between. You'd notice that. You'd think it was weird. Ishino noticed, published a short paper saying "this is weird, I don't know what it means," and moved on. For the next decade, nobody knew what it meant.

Through the 1990s, as more bacterial genomes got sequenced, scientists kept seeing the same kind of pattern in completely unrelated bacteria. Same setup: repeats with unique spacers between them, often near a cluster of mystery genes that nobody could figure out. A Spanish microbiologist named **Francisco Mojica**, working at the University of Alicante, became obsessed with these patterns. He'd been studying them in salt-loving microbes since the early 1990s. In 2000 he gave them the name we still use: **CRISPR**, which stands for Clustered Regularly Interspaced Short Palindromic Repeats. I'll admit, it's a mouthful. The acronym is a little tortured. But it stuck.

Now Mojica's real obsession was: what _are_ those spacer sequences? The repeats were always the same in any given bacterium, but the spacers were all different. He started running database searches, asking: do these spacer sequences match anything else in any organism, anywhere?

For years, the answer was no. The spacers looked like random gibberish. But databases were growing, more genomes were getting sequenced, and in 2003 Mojica ran the same search one more time. The answer came back. And it was, in his own words, astonishing.

**The spacers matched phage DNA.** Specifically, sequences from the viruses that infect bacteria. And not just any phages — the spacers in a particular bacterium matched the specific phages that bacterium had likely encountered. And here's the kicker: bacteria that carried a spacer matching a particular phage tended to be **immune to that phage**.

Picture what this means. The bacterium has — stored inside its own chromosome — a literal library of pieces of past viral attackers. Snippets of phage DNA, filed away in a specific region of the genome, in order. It's like a **vaccination card**, but written into the genetic material itself. And — this is the radical part — it gets _updated_. When a new phage attacks, if the bacterium survives, it can add a new spacer to the array. A new memory. A new entry on the vaccination card.

Mojica published this idea in 2005. So did a French scientist named Gilles Vergnaud, who'd come at it from a completely different angle — he'd been studying the plague bacterium for forensic purposes. Two groups, same year, same conclusion. Bacteria have adaptive immunity. They keep a record of past infections, written in DNA, in their own genome.

The proof — the airtight experimental proof — came in 2007, and the source was, I am not joking, a yogurt company. Two scientists named **Rodolphe Barrangou** and **Philippe Horvath**, working at Danisco (a dairy company), were trying to solve a real industrial problem. The bacteria that turn milk into yogurt and cheese get attacked by phages, and when that happens, entire vats of product are ruined. Some strains were resistant; Danisco wanted to know why.

So Barrangou and Horvath did the cleanest possible experiment. They took a phage-sensitive bacterium. They challenged it with phage. A few survivors emerged. They read the CRISPR array of those survivors and compared it to the parent strain. **Brand-new spacers had appeared in the survivors — spacers whose sequences exactly matched the phage that had just attacked them.** When the scientists experimentally added a spacer matching a particular phage, the bacterium became resistant. When they removed the spacer, it became vulnerable again. Cause and effect. CRISPR is an immune system. The spacers are memory. The system actively updates itself.

\[Pause. Let it land.\]

That's where the field was at the end of 2007. We knew bacteria had this remarkable immune system. We didn't yet know, in fine detail, how the bacterial proteins involved actually cut up the invading phage DNA — and we definitely didn't know that, five years later, somebody was going to figure out how to point those proteins at any sequence we wanted. But the foundation was laid. The phage vaccination card was real. The race was on.

---

## SEGMENT 3 — How the bacterial immune system actually works

Before we get to the technology, I want to spend a few minutes on the bacterial immune system in detail, because every weird thing about CRISPR-the-tool is a leftover from CRISPR-the-immune-system. Understanding the biology now will save you a lot of "why does it work that way?" frustration later.

The bacterial system has to do three things — the same three things any immune system has to do. It has to **acquire** memory. It has to **express** that memory in a usable form. And it has to **use** the memory to attack invaders. We give those three stages the names **adaptation**, **expression**, and **interference**. Memorize those three words; they're the spine of how a CRISPR-Cas system operates.

Let me walk through them with an analogy. Imagine a small town that keeps getting raided by bandits. The town needs a security system. Stage one, **adaptation**: every time a bandit raid is foiled, the town guards grab the bandit's identification card, photocopy it, and add the photo to a big binder of known bandit faces, kept at the town hall. Stage two, **expression**: clerks at the town hall make small photo cards from the binder and hand them out to the security guards on patrol. Stage three, **interference**: the security guards walk around town with their photo cards, and when somebody walks in whose face matches a card, they tackle them.

That's the bacterial immune system. Let me make it concrete.

In stage one, **adaptation**, a phage injects its DNA into the bacterium. Bacterial proteins — a complex called **Cas1-Cas2** — find a fragment of that foreign DNA, snip out a roughly 30-letter piece, and insert it as a new spacer at one end of the CRISPR array. The array grows by one entry. The bacterium now has a permanent memory of that phage encoded in its chromosome. Importantly, the system has to be careful not to grab a piece of its own DNA by mistake — if it did, it would later attack itself. It uses several clever tricks to avoid this. The most important one is something called a **PAM** — protospacer adjacent motif — and we'll come back to the PAM later in detail, because it turns out to be one of the most consequential features of how the whole system works.

In stage two, **expression**, the CRISPR array gets transcribed by the cell's normal machinery into a long RNA message. That long RNA reads: REPEAT-spacer-REPEAT-spacer-REPEAT-spacer, all the way across the array. Then specialized enzymes chop the long RNA up at the repeats, producing many small **mature crRNAs** — "CRISPR RNAs" — each one containing a single spacer plus little bits of repeat sequence on either end. Each mature crRNA is one photo card. It's a portable, ready-to-use copy of one past invader's identifying mark.

In stage three, **interference**, each crRNA gets loaded onto a Cas protein — and now we have what's called a **ribonucleoprotein**, which is just a fancy word for "a protein with an RNA attached." This RNA-loaded protein is the security guard. It patrols the cell. When the same phage comes back and injects its DNA, the crRNA inside the guard base-pairs with the matching sequence in the phage DNA — and the Cas protein cuts the foreign DNA, destroying the infection.

That's the system, end to end. Memory storage, memory expression, memory deployment.

Now, here's the punchline that connects this back to the technology. **The targeting specificity of the whole system is encoded in a short, easy-to-make piece of RNA.** Not in the protein. The protein is the universal scissors. The RNA is the search query. If you swap out the RNA, the protein cuts a different sequence. The same Cas protein, with a thousand different RNAs, would cut a thousand different sequences.

This is the magic. Think about how big a deal this is. Earlier genome editing tools — things called zinc finger nucleases and TALENs, which I'll mention again briefly later — also cut DNA at specific sites. But the targeting in those tools was encoded in the _protein itself_. To target a new sequence, you had to engineer a new custom protein, which took months and cost thousands of dollars. With CRISPR, all you have to engineer is a new RNA. RNA is trivial to make — you can order it from a website for under thirty dollars and have it in two days. That single difference — programmability via cheap RNA, not expensive protein — is the entire reason CRISPR ate the world.

One last thing. There are many flavors of bacterial CRISPR systems — they vary in the number and identity of the Cas proteins involved. We sort them into types. For the next two hours, when I say "CRISPR" without further qualification, I mostly mean a particular type called **Type II**, whose effector — whose business-end protein — is called **Cas9**. Cas9 is the workhorse. Cas9 is the protein that turned out to be the easiest to repurpose as a tool. There are others — Cas12, Cas13, and so on — and we'll meet them when they matter. But Cas9 is the star.

---

## SEGMENT 4 — The 2012 paper: turning a bacterial system into a universal tool

Now we come to the paper. The one paper. If you ever read a single original research paper from the CRISPR era, this is the one to read. It was published in the journal _Science_ in August of 2012. The two senior authors are **Jennifer Doudna**, at the University of California, Berkeley, and **Emmanuelle Charpentier**, then at Umeå University in Sweden. The first author is **Martin Jinek**, with co-author Krzysztof Chylinski. The title — and I want you to hear the title carefully — was "A Programmable Dual-RNA-Guided DNA Endonuclease in Adaptive Bacterial Immunity." Every word in that title is doing work. Programmable. Dual-RNA-Guided. DNA. Endonuclease. We'll unpack what each means.

To understand what they did, you need one more piece of context about the Type II bacterial system. It turns out the Cas9 protein doesn't just need a crRNA — that single guide we talked about. It also needs a _second_ piece of RNA called the **tracrRNA**, which stands for "trans-activating crRNA." The tracrRNA is encoded elsewhere in the bacterial genome, and it base-pairs with the crRNA to form a little duplex. That duplex is what Cas9 actually binds. So in nature, the targeting machinery is a three-piece assembly: Cas9 protein + crRNA + tracrRNA.

Charpentier had been studying that tracrRNA for years before the 2012 paper. She'd figured out it was essential. She and Doudna started collaborating. Doudna's lab had deep expertise in the structural biochemistry of RNA. Charpentier brought the bacterial biology. They put their two postdocs — Jinek and Chylinski — on a project together. The goal was to reconstitute the system in a test tube. Pure Cas9 protein. Pure crRNA. Pure tracrRNA. A piece of DNA carrying a sequence matching the crRNA. Mix it all in a tube. Does the DNA get cut?

It did. Cleanly. The DNA got chopped at exactly the spot the crRNA pointed to.

But that's not the headline. The headline is what Jinek and Chylinski did next. They reasoned: if the crRNA and the tracrRNA form a duplex in nature, why not just fuse them? Take the spacer-containing part of the crRNA, link it with a short loop to the tracrRNA, and synthesize the whole thing as a single chimeric piece of RNA. They tried it. They called it the **single guide RNA**, or **sgRNA** — and it worked. Cas9 plus the single sgRNA cut DNA exactly like Cas9 plus crRNA plus tracrRNA. They had simplified a three-piece system to two pieces.

Think about what that meant. To use the system as a tool, you now needed exactly two things: one protein (Cas9) and one piece of RNA (the sgRNA). And the targeting was completely controlled by twenty letters of sequence in the sgRNA. Change the twenty letters, change the target. Anything you can imagine writing in DNA, you can target.

Going back to our find-and-replace analogy: the sgRNA is the search query you type into Ctrl+F. The Cas9 protein is the rest of the find-and-replace function — it does the actual work of locating the match and cutting at that spot. Together they are a **pair of programmable molecular scissors with GPS**. The GPS is the guide RNA. The scissors are the protein. Whatever you put into the GPS, that's where the scissors go.

\[Pause.\]

That was the punchline. The 2012 paper had the biochemistry of Cas9, the discovery of the dual-RNA mechanism, the proof that you could change the target by changing the spacer, and the engineering of the single guide RNA. Every modern CRISPR experiment, every CRISPR-based therapy, every base editor and prime editor — they all descend from that paper.

A fair historical aside. The 2012 paper showed Cas9 cutting DNA in a test tube. It didn't show editing in a living mammalian cell. That next step — taking Cas9 plus an sgRNA, getting them into a human or mouse cell, and showing that the human genome got edited — was demonstrated a few months later, in January 2013, by two groups working independently. One was **Feng Zhang's lab** at the Broad Institute. The other was **George Church's lab** at Harvard. They published in _Science_ on the same day, both showing that the bacterial protein worked in mammalian cells. That's going to matter when we talk about the patent fight later. But scientifically, by January 2013, the picture was complete. Cas9 plus sgRNA could edit human DNA. The field exploded.

---

## SEGMENT 5 — How Cas9 actually cuts: the password, the search, and the break

Let me open up Cas9 and show you, mechanically, how it does its job. This is where some of the most beautiful biochemistry lives, and once you understand it, every later design choice — every variant, every base editor, every concern about off-targets — will make sense.

Cas9 from the bacterium _Streptococcus pyogenes_ — usually called SpCas9, to distinguish it from versions in other species — is a big protein. About 1,400 amino acids long. By the standards of the molecule it cuts, it's enormous. Picture a clenched fist with a slot in the middle that grips the guide RNA. The fist has two lobes — a recognition lobe, which holds the guide and helps with target finding, and a nuclease lobe, which contains the two cutting domains. The two cutting domains have funny names: **HNH** and **RuvC**. Each one cuts one strand of the DNA double helix. HNH cuts one strand; RuvC cuts the other. They both cut at the same spot, leaving a clean **blunt-ended double-strand break** — both strands severed, right next to each other, like cutting a piece of paper straight across.

\[Pause.\]

Now here's the critical thing to understand. Before Cas9 has its guide RNA loaded, it's basically inert. It doesn't bind DNA tightly, it doesn't cut anything, it's just folded in a closed, inactive state. Picture a pair of scissors with the blades locked shut. When you load the guide RNA, the protein undergoes a major shape change — it opens up, the lobes rotate, the blades unlock — and now Cas9 is ready to go hunting.

So Cas9 is in your nucleus, loaded with a guide RNA, looking for its target. You might imagine it just slides along the DNA from one end to the other, checking every position. That would be incredibly slow — the human genome is three billion base pairs long. Instead, Cas9 uses a brilliant search strategy. **It checks for a password before it checks anything else.**

The password is called the **PAM** — protospacer adjacent motif. For SpCas9, the PAM is a short sequence of just three letters: **NGG**, where N can be any base. So Cas9 is looking for any spot in the genome that ends in two Gs in a row. It dives onto the DNA, looks for a PAM, and if there's no PAM, it immediately pops off and tries again somewhere else. If there _is_ a PAM, it pauses and does the slower, more careful check of whether the guide RNA matches the sequence right next to the PAM.

I want you to appreciate how clever this is. Without a PAM, Cas9 would have to attempt the slow check at every single position in three billion bases — most of which would be a waste of time. With the PAM requirement, only about one position in eight is even a candidate, because only about one in eight random spots in DNA happens to be an NGG. The PAM is the **bouncer at the door**. The guide RNA is the ID check that happens once the bouncer lets you inside. The bouncer is fast and crude, the ID check is slow and careful. By doing the fast cheap check first, Cas9 cuts the search problem down by a factor of eight.

The PAM is also the reason the bacterial system doesn't attack itself. Remember, the spacers in the bacterium's own CRISPR array are pieces of phage DNA. The bacterium's chromosome contains the same sequences in the array. Why doesn't Cas9, loaded with one of those crRNAs, attack the bacterium's own chromosome? Because **in the CRISPR array, the spacer sequences are not followed by a PAM**, but in the phage genome, they _are_. So the PAM is the "this is foreign, not self" signal. No PAM, no cutting. The whole self-versus-non-self problem solved with a three-letter password.

\[Pause.\]

Okay. Cas9 has found a PAM. Now what?

Now it tries to unzip the DNA right next to the PAM. The DNA double helix is two strands wound around each other — and Cas9 pries them apart starting from the position right against the PAM. As it pries them apart, it tries to make the guide RNA pair with one of the strands. If the first few letters of the guide match the first few letters of the DNA — the so-called **seed region**, the first eight to twelve letters next to the PAM — the unzipping continues. The guide RNA invades further. It pairs across all twenty letters, displacing the other DNA strand into a single-stranded loop. This three-stranded structure — RNA paired to one DNA strand, the other DNA strand dangling — is called the **R-loop**, with R standing for RNA. R-loop formation is the central recognition event in all of CRISPR.

If the guide RNA _doesn't_ match the DNA — if there are too many mismatches, especially in those critical seed letters — the unzipping fails, the R-loop never forms, and Cas9 falls off. That's the specificity check. Door bouncer, ID check, R-loop verification — three sequential filters that have to all pass.

If the R-loop does form fully, Cas9 changes shape one more time. The HNH cutter swings into position, the RuvC cutter is already in position, both blades close at the same time, and the DNA is cut on both strands. Blunt break. Three letters upstream of the PAM. Done.

After the cut, Cas9 doesn't immediately fly off. It actually sits on the cut DNA for a while — sometimes minutes, sometimes longer. That sitting matters, because it shields the cut site and affects which cellular repair machinery gets there first. We'll come back to that.

So the full sequence: load the guide; scan the genome for NGG passwords; at each password, try to unzip the DNA and match the guide; if the match holds, form the R-loop; if the R-loop locks in, both blades close, blunt break, sit on the cut. That's Cas9.

---

## SEGMENT 6 — What the cell does with the break: the slapdash patch versus the careful repair

Cas9 has made a cut. Now what?

Now Cas9 is done, and the **cell** takes over. CRISPR didn't add anything new to the cell's repair machinery. CRISPR just creates a problem — a broken chromosome — and the cell's own repair machinery decides what to do about it. So understanding the two main repair pathways is essential, because they give you fundamentally different kinds of edits.

\[Pause.\]

The first pathway is called **non-homologous end joining**, or **NHEJ**. The name is a mouthful. The behavior is simple: **the cell sees a broken piece of DNA and slaps it back together quickly, often making typos in the process.**

That's it. NHEJ is the cell's default, all-purpose double-strand break repair pathway. It's available at every stage of the cell cycle. The cell doesn't know that the break was caused by CRISPR — it just sees broken DNA, recognizes it as an emergency, and rushes a repair crew to the scene. The repair crew grabs the two broken ends, sometimes nibbles a few letters off, sometimes adds a few letters in, and then ligates the ends back together. The result is that the rejoined DNA frequently has small insertions or deletions — what we call **indels** — at the junction. Usually one to ten letters, sometimes more.

Now here's the consequence. If the cut was in the middle of a gene — specifically, in the part of the gene that codes for protein — an indel that isn't a multiple of three letters will shift the reading frame. The ribosome reading the gene will now read the wrong groups of three, will hit a premature stop signal, and will produce a truncated, broken protein. **The gene is knocked out.** Disabled. Gone.

This is the workhorse of CRISPR. The most common use, by far. You want to disable a gene. You design a guide targeting an early part of the gene. You deliver Cas9 plus guide. Cas9 cuts. NHEJ slaps it back together with a typo. About two-thirds of the time, the typo is a frameshift, and the gene is dead. You select the cells where it worked. You move on. That whole process, which used to take a year, now takes a week.

But notice: you don't control what indel you get. You get a distribution — some one-letter insertions, some three-letter deletions, some seven-letter deletions. For a knockout, that's fine — you don't care which typo, as long as the gene is broken. But what if you wanted something more precise? What if you wanted to change one specific letter in the gene from a T to a C? NHEJ won't do that. NHEJ just makes a mess at the cut site.

For that, you need the other repair pathway.

The other pathway is called **homology-directed repair**, or **HDR**. And here's the analogy: **the cell can fix the break properly if you hand it a template that shows what the fix should look like.**

HDR is the careful repair pathway. When a cell is dividing — specifically, after it's copied its DNA but before it's split into two daughter cells — it has two identical copies of every chromosome sitting next to each other. So if one copy breaks, the cell can use the unbroken copy as a reference, copy the missing information off of it, and do a perfect, accurate repair. The cellular machinery resects the broken ends, sticks them into the homologous template, and rebuilds the missing sequence with perfect fidelity.

For genome editing, we hijack this pathway by providing our own **template** — a piece of DNA we hand to the cell, designed to look like the cut site but carrying the edit we want. The cell, given the choice between using the sister chromatid and using our donated template, sometimes uses our donor. And when it does, the edit gets copied into the chromosome, letter for letter. We can install whatever change we encoded in the template.

HDR gives you **precise, programmable edits**. That sounds wonderful. The problem is that HDR is hard. It's much less efficient than NHEJ — often ten to a hundred times less efficient. And it only works in cells that are actively dividing, because it needs the conditions of a specific phase of the cell cycle. In **post-mitotic cells** — neurons, mature muscle, most of the cells in an adult body — HDR is essentially unavailable. NHEJ works everywhere; HDR is choosy.

So here's the picture. NHEJ is fast, sloppy, universal, and good for knockouts. HDR is slow, accurate, restricted to dividing cells, and good for precise edits if you can get it to work.

\[Pause.\]

This split between the two pathways has shaped the entire trajectory of CRISPR technology. Two giant bodies of work have flowed from it.

One body of work has tried to **make HDR better** — using small-molecule drugs to suppress NHEJ, timing CRISPR delivery to the right phase of the cell cycle, fusing Cas9 to factors that recruit the HDR machinery. The gains have been real but modest. HDR is still hard.

The other body of work has gone around the problem entirely. Instead of cutting DNA and hoping for HDR, why not build a tool that makes the desired edit directly, without ever cutting both strands? **That's what base editing and prime editing are.** Those tools, which we'll get to in segments 11 and 12, exist precisely because HDR is hard and indels are imprecise. They are designed responses to the limitations we just discussed. So when I introduce base editing later, remember: it exists because somebody got tired of HDR not working.

One more cool thing about the indels themselves. People used to think they were essentially random — a Gaussian distribution of insertions and deletions of various sizes. It turns out they're much more structured than that. The actual indel you get at any given site depends in predictable ways on the local DNA sequence — particularly the four letters right next to the cut. Computer models can now predict, with reasonable accuracy, what mix of indels you'll get at any given Cas9 target site. This means that in some cases you can pick a guide RNA specifically because it'll give you the indel you want. Even the "sloppy" pathway turns out to have a learnable structure.

Alright. We've built the core platform: discovery, mechanism, the cut, the repair. From here, we start expanding into the technology layer.

---

## SEGMENT 7 — The workhorse Cas9 and its limitations

So we have an in vitro system, demonstrated in August 2012. Then in January 2013, both Feng Zhang's group and George Church's group showed it worked in human cells. Within a year, the field exploded. By 2015, CRISPR was a standard tool in essentially every molecular biology lab on Earth. Plasmid repositories like Addgene started shipping the necessary Cas9 and guide RNA vectors to anybody who asked. The number of CRISPR papers per year went from a few dozen in 2012 to several thousand by 2014.

The workhorse — the protein doing essentially all of this work — is **SpCas9**, the Cas9 from _Streptococcus pyogenes_. _S. pyogenes_ is, incidentally, the bug that causes strep throat. So the most important molecular biology tool of the last decade comes from a sore-throat bacterium. There's something charming about that.

Now, I want to give you a clear-eyed picture of what SpCas9 is and isn't good at, because if you only know "CRISPR works," you don't really know enough to design an experiment. The strengths and the weaknesses both motivate the rest of the technology I'm going to discuss.

**SpCas9 is good at**: knocking out genes via the NHEJ pathway in dividing cells. Generating large pools of edited cells. Cutting at almost any site you want, as long as there's an NGG nearby. Handling multiple guides at the same time — you can edit several genes simultaneously by giving the cell multiple sgRNAs. Working in essentially every organism people have tried — human cells, mouse cells, zebrafish, fruit flies, plants, fungi, single-celled algae. It's astonishingly portable.

**SpCas9 is not as good at**: making precise edits via HDR, which as we discussed is the slow pathway. Editing in non-dividing cells, where HDR isn't available. Avoiding off-target cuts at sequences that resemble the on-target by a few mismatches. Being delivered into the body — SpCas9 is a fairly large protein, and as we'll see when we get to the delivery segment, that size causes problems with certain delivery vehicles. And working at sites where the only available PAMs are in inconvenient places.

Each of those limitations has motivated a research direction. HDR limits motivated base editing and prime editing. Off-target concerns motivated high-fidelity Cas9 variants. The size problem motivated the search for smaller Cas9 cousins from other bacteria. The PAM constraint motivated both the hunt for orthologs with different PAMs and the engineering of SpCas9 variants with relaxed PAM requirements.

So when you see in a current paper "we used SpCas9-NG with a relaxed PAM" or "we used SaCas9 packaged into AAV," what you're looking at is somebody navigating the limits of the workhorse by choosing a better-suited variant. There's no single Cas9 that's optimal for everything. There's a toolkit.

\[Pause.\]

One more thing about the early days. The 2013 mammalian papers established two facts that became contested when the lawyers got involved. One: that SpCas9 plus sgRNA works in mammalian cells. Two: which group first achieved that result. These are not the same question. The first is settled science. The second is a question of priority — lab notebooks, dates, manuscripts in review — and that's where the patent fight began.

---

## SEGMENT 8 — The patent fight and the 2020 Nobel

Let me tell you a story that's about science, but also about money, and about how the modern academic-commercial system actually works. The CRISPR patent fight is one of the most consequential intellectual property disputes in biotech history. Tens of millions of dollars in legal fees. Years of litigation. Eventually billions of dollars in licensing revenue at stake.

Here's the basic shape. In May 2012, _before_ their _Science_ paper was even published, the **University of California**, on behalf of Doudna and Charpentier, filed a provisional patent application. The application was broad — it claimed CRISPR-Cas9 as a programmable DNA cutter, including its anticipated use in any cell type, eukaryotic or otherwise.

In December 2012, after seeing the August paper and doing his own work to make it function in mammalian cells, **Feng Zhang and the Broad Institute** filed their own patent application — narrower but more specific, focused on actually using CRISPR-Cas9 in eukaryotic cells, with experimental data. The Broad paid extra to have their application examined faster, and their patent was granted first, in April 2014. The UC application was still pending.

You can see the legal question. UC argued: we filed first, with a broad claim that covers any cell, including eukaryotic — Zhang's mammalian work was an obvious extension of what we'd already disclosed. The Broad argued: making CRISPR work in eukaryotic cells was _not_ obvious, it required substantial new work, and therefore our patent is valid as an independent invention.

This went to a special legal proceeding at the US Patent Office. In 2017, the Patent Trial and Appeal Board ruled in favor of the Broad — they decided that getting CRISPR to work in eukaryotic cells was not an obvious extension. UC appealed; the appeal failed in 2018. Both parties ended up with patents — UC got broad coverage in many jurisdictions including Europe; the Broad got specific coverage of eukaryotic use in the US. The result is a complicated licensing landscape, and companies often need licenses from both.

This isn't just lawyerly drama. The commercial stakes are enormous. Multiple companies were founded around CRISPR — Editas Medicine, founded by Zhang and Church; Intellia Therapeutics, founded by Doudna; CRISPR Therapeutics, co-founded by Charpentier — and each had different exclusive licenses to different patent families. Which company can develop which therapy depends, in part, on the patent estate they sit on.

Against that backdrop: the **Nobel Prize**. In October 2020, the Royal Swedish Academy of Sciences awarded the Nobel Prize in Chemistry to **Emmanuelle Charpentier and Jennifer Doudna** "for the development of a method for genome editing." Just the two of them. No share for Feng Zhang. No share for Francisco Mojica, who'd identified the CRISPR arrays and figured out they were an immune system. No share for Horvath and Barrangou, who proved it experimentally. No share for George Church.

The committee's logic, as I read it, was that the conceptual move — recognizing that this bacterial system could be turned into a programmable genome editing tool — was the central invention. That move happened in the 2012 paper, and that paper has those two senior authors. The mammalian work was important but was the application, not the discovery.

You can argue this either way. I think there's a real case that Zhang should have shared — making CRISPR work in mammalian cells was harder than the Nobel committee implied. I also think the discovery scientists, especially Mojica, were short-changed by the rule that limits each Nobel to three awardees. The Nobel Prize is a coarse instrument applied to a continuous chain of discovery, and it almost never makes everyone happy. What I want you to remember: the 2012 paper was the conceptual fulcrum. The 2013 papers were the engineering payoff. Both mattered. Only one set of authors got the medal.

---

## SEGMENT 9 — Designing good guide RNAs

We're nearly at the halfway point, so let me ground us in something practical: how do you actually design a guide RNA that works?

Because here's a fact that surprised the early CRISPR field and has since become well-established. **Not all guide RNAs are equally good.** Two guides targeting two different sites in the same gene — both with twenty-letter spacers, both with perfect PAMs, both delivered the same way — one will edit 80% of cells, the other will edit 5%. Why?

There are two largely independent questions to answer for any candidate guide. The first is **efficiency**: when Cas9 is loaded with this guide, will it actually cut the target effectively? The second is **specificity**: will this guide also cause Cas9 to cut other sites in the genome that look similar to the target — the off-target problem? You optimize both. Good design tools balance them.

For efficiency, there are some surprisingly simple rules. Avoid runs of identical letters — four Ts in a row, for example, are bad because they accidentally act as a "stop transcription" signal for the machinery that produces the guide RNA. Keep the overall G-and-C content of the spacer moderate — not too high, not too low. Avoid spacers that fold back on themselves into stable hairpins, because then the guide can't properly base-pair with the DNA. Certain positions in the spacer prefer certain letters — the letter right next to the PAM, for example, prefers a G.

Beyond these sequence rules, there's also a question of where the target sits in the genome. Cas9 has trouble cutting in regions of DNA that are tightly wrapped around histones — what we call dense or closed chromatin. Open, accessible chromatin works much better. So a good design tool will, if possible, factor in chromatin accessibility data when picking guides.

For specificity, the rule of thumb is: **the search query is fuzzy enough that sometimes it matches the wrong line of text.** Cas9 will tolerate a few mismatches between the guide and the DNA, especially if those mismatches are at the far end of the spacer — the end away from the PAM. Mismatches in the seed region near the PAM are much more disruptive. So when you're looking for potential off-targets, you scan the genome for sites that resemble your intended target, weighting the mismatch penalty by where in the spacer the mismatch sits. There are now well-established scoring systems for this — the CFD score from John Doench's group at the Broad is the most widely used.

The standard workflow in practice. You enter the name of your gene of interest into one of several free online tools — CRISPick, Benchling, CHOPCHOP, CRISPOR. The tool enumerates every possible spacer in your gene, scores each one for predicted efficiency, scans the genome for off-target risks, and presents you with a ranked list. You pick the top three or four. You order them as oligonucleotides. You clone them into your guide RNA vector. You deliver. You validate.

If you're trying to knock out a gene, the practical convention is to target the second or third exon — early enough that a frameshift will kill most of the protein, but not so early that alternative splicing might rescue some functional isoform. You typically run three to five guides per gene for important experiments, because different guides at different positions give you redundancy. If all five guides give you the same phenotype, you can be confident the phenotype is really due to losing that gene, and not due to some weird off-target effect of one particular guide.

This whole design process sounds tedious in description. In practice, designing a guide for a new target now takes about fifteen minutes total, including ordering the oligos. The tools have gotten that good.

\[Pause.\]

\[BREAK — One-hour mark. Take ten minutes. Stretch, hydrate, check your phone, complain about something. Come back and we'll do the second half: smarter Cas9 variants, base editing, prime editing, delivery, therapeutics, diagnostics, screens, programmable on/off switches, and the ethics frontier.\]

---

## SEGMENT 10 — Variants of Cas9: smarter blades and smaller scissors

Welcome back. The first hour built the foundation. The second hour is largely about engineering — what people have built on top of the basic platform. We're going to start with the menagerie of engineered and natural Cas9 variants, because the workhorse SpCas9 is often not the right tool for a given job.

There are two big problems that have motivated most of the variant engineering: **specificity** and **size**.

On specificity. Remember that Cas9 will sometimes cut at off-target sites that resemble the on-target by a few mismatches. For research applications, this is annoying but manageable — you can use multiple guides, you can sequence to check, you can pick targets carefully. For therapeutic applications, where you're editing a patient's cells, an off-target cut could in principle damage a tumor-suppressor gene or activate an oncogene. So reducing off-targets matters a lot.

Several groups have engineered SpCas9 to be more discriminating. The general idea: weaken Cas9's grip on DNA just enough that perfect matches still get cut but imperfect matches don't have enough binding energy to commit. The first widely-used variant was **eSpCas9** — enhanced specificity Cas9 — from Feng Zhang's group in 2016. They identified a few amino acids in Cas9 that contact the non-target DNA strand, and mutated them to weaken those contacts. The mutated protein still cuts perfect matches well, but doesn't tolerate the energy cost of imperfect R-loops. Within a few months, **David Liu's lab** at Harvard published **SpCas9-HF1** — high-fidelity Cas9 — using a similar logic but targeting different contacts. Several more followed: HypaCas9, evoCas9, Sniper-Cas9. They differ in details but share the same design philosophy.

On the PAM constraint. SpCas9 needs NGG. That's usually fine, but sometimes — if you want to cut at a very specific spot in a regulatory element, or correct a specific disease mutation — there just isn't an NGG where you need it. So people have engineered SpCas9 variants that accept different PAMs. **xCas9** tolerates several different PAMs. **SpCas9-NG** tolerates any NG. **SpRY**, from David Liu's lab again, is nearly PAMless — it accepts almost anything. The tradeoff is usually some loss of efficiency and some increase in off-targets, but for applications where you need to cut at a precise spot, those variants are essential.

On size. SpCas9 is 1,368 amino acids long. When you want to deliver CRISPR into a patient's body — and you want to package the whole thing into one of those tiny viral shipping containers I'll discuss in the delivery segment — SpCas9 is right at the upper limit of what fits. So people have looked for smaller versions of Cas9 in other bacteria. The most useful smaller cousin is **SaCas9** from _Staphylococcus aureus_ — about 1,050 amino acids, comfortably small enough to fit. SaCas9 has a longer, more restrictive PAM, but the size advantage makes it the workhorse for in-vivo delivery applications. There are even smaller versions, like **CjCas9** from a campylobacter species, that are even more compact.

There's also a related family of Cas proteins called **Cas12**. Cas12 does the same basic job as Cas9 — RNA-guided DNA cutting — but with some different properties. It only needs a single piece of guide RNA, not a duplex. It uses a different PAM, a T-rich one. And it cuts the DNA with a staggered rather than blunt break, leaving little sticky overhangs on each side, which can sometimes be useful for getting HDR to work better. Cas12 is the underdog cousin of Cas9, and it has its own niche applications.

So the toolbox is not "Cas9." The toolbox is "a family of Cas9 and Cas12 proteins and engineered variants, each tuned for a particular job." A modern paper will tell you exactly which variant they used and why — and that choice is always deliberate.

---

## SEGMENT 11 — Base editing: the typewriter that doesn't break the page

Now we get to one of the most consequential extensions of CRISPR. To motivate it, let me restate the limitation that drove its invention.

We want to make a precise single-letter change in the genome — say, correct a specific disease-causing mutation, change a C to a T at a particular spot. The standard CRISPR approach is: cut with Cas9, supply an HDR template with the corrected letter, hope HDR happens. But as we discussed, HDR is inefficient. Most of the time, you instead get NHEJ — messy indels that break the gene rather than correct it. For therapeutic correction of point mutations, this is a poor tool. You're trying to do delicate surgery with a sledgehammer.

In 2016, **David Liu's lab** at Harvard published a fundamentally different approach. Their paper was titled "Programmable editing of a target base in genomic DNA without double-stranded DNA cleavage." Read that title carefully. _Editing of a target base._ _Without double-stranded DNA cleavage._ This is a tool that does what you wanted Cas9 plus HDR to do — change one specific letter — but achieves it through totally different chemistry.

Here's the analogy I want you to hold. Regular CRISPR is like editing a document by tearing out the paragraph with scissors and stapling in a new one. It works, but you've damaged the page. Base editing is more like **a typewriter that changes one letter without breaking the page** — a chemical eraser that converts one letter directly into another, in place, without ever cutting the document. No double-strand break. No NHEJ mess. No need for HDR.

How is this possible? Let me walk through the architecture.

Step one. Take Cas9 and break it. Specifically, mutate it so that one of its two cutting blades — the RuvC blade — no longer cuts. The other blade, HNH, still cuts. So now you have a Cas9 that can only nick one strand of the DNA — make a single-strand cut, not a double-strand break. This crippled version is called a **Cas9 nickase**, or **nCas9**.

Step two. Take a chemical enzyme — a deaminase — that can convert one DNA letter to a different one. The first base editor used an enzyme called APOBEC1, which converts the letter C into the letter U (which is essentially the same as T from the cell's perspective). Crucially, APOBEC can only work on single-stranded DNA — it can't reach into the double helix.

Step three. Fuse the deaminase enzyme to the front of the nickase Cas9, like a chemical attachment on the end of a guided missile.

Step four. Load the guide RNA, send the whole assembly to the target site, and let it form the R-loop. Remember the R-loop? The guide RNA pairs with one DNA strand, and the other DNA strand gets displaced as single-stranded for a stretch of a few letters. That **single-stranded window is now exposed to the deaminase enzyme riding on the front of the Cas9**. The deaminase, finding its substrate, converts any Cs within that window into Us. Meanwhile, the HNH blade nicks the opposite strand, signaling to the cell "this strand is wrong, use the other one as the template." The cell faithfully copies the U-containing strand, putting in an A across from the U; after one round of repair, the U becomes a T. **Net result: a C has been converted to a T at the targeted site, with no double-strand break and no indels.**

That tool is called the **cytosine base editor**, or **CBE**. It was transformative — C-to-T conversion alone covers a significant fraction of human disease-causing mutations.

A year later, Liu's lab followed up with the **adenine base editor**, or **ABE**, which converts A to G. The catch was that no naturally-occurring enzyme existed that deaminates A to G in DNA. So they had to **make one**, through directed evolution in bacteria — they took an enzyme that deaminates A in tRNA, mutated it through many generations, and selected variants that could work on DNA. After several rounds, they had an enzyme that did the job. Fuse it to nickase Cas9, follow the same architecture as the CBE, and you get a programmable A-to-G converter.

Together, the C-to-T and A-to-G editors — and their mirror-image partners on the opposite DNA strand, G-to-A and T-to-C — cover four out of the twelve possible single-letter changes. These four are called the **transition mutations**. By some estimates, they account for around sixty percent of pathogenic human point mutations. Not every mutation, but a lot of them.

There are some practical wrinkles to know. The editing window is a window, not a single point — it covers a few letters. If there are multiple Cs within the window, you may get multiple simultaneous edits. These extra edits are called **bystander edits**, and they can be a problem if the bystander changes happen to alter something important. Engineered variants with narrower windows have been developed to mitigate this. The first version of the cytosine base editor also had some off-target activity on RNA — it would deaminate cellular messenger RNAs at some background rate — and improved versions have addressed that too. Version 1.0 had issues; version 2.0 and beyond have fixed most of them.

The therapeutic implications were immediate. Many human point mutation diseases — sickle cell, beta-thalassemia, certain cardiovascular conditions, various metabolic disorders — are now in clinical development with base editors as the editing modality. We'll come back to one specific example, Verve Therapeutics' base editor for cardiovascular disease, when we talk about therapeutics.

---

## SEGMENT 12 — Prime editing: changing a whole word, not just one letter

Liu's lab wasn't done. Base editors could do four out of twelve possible letter changes — the transitions. They couldn't do the remaining eight, called **transversions** (like C-to-A or A-to-T). They couldn't insert new letters. They couldn't delete letters. There were whole classes of edits still out of reach.

In 2019, the same group published **prime editing**, which is the most ambitious extension of the CRISPR platform to date. The lead author was Andrew Anzalone in Liu's lab. The paper described a tool that — in principle — can install any of the twelve possible single-letter swaps, plus small insertions and small deletions, all without a double-strand break, all programmable by RNA.

Here's the analogy. Base editing is a typewriter that changes one letter. Prime editing is **find-and-replace where you can change a whole word, not just one letter, without breaking the page.** You highlight a stretch of text, you supply the new text, and the system swaps the new for the old, in place, no scissors required.

The architecture is more elaborate than base editing, but the core idea is wonderful. Let me walk you through it.

Take the Cas9 nickase again — but this time, mutated so that it nicks the _opposite_ strand from the base editor nickase. Fuse to its C-terminus an enzyme called **reverse transcriptase**, which is borrowed from a virus. (Reverse transcriptase normally copies RNA into DNA — this is a famously dogma-breaking trick of retroviruses like HIV, and there's a whole separate lecture about that elsewhere in this course.) So you have a Cas9 nickase fused to a reverse transcriptase. That's the protein.

Now you also need a special guide RNA. Not a regular sgRNA — a **prime editing guide RNA**, or **pegRNA**. The pegRNA contains the normal guide sequence at one end, plus two extra elements at the other end. One extra element is a short bit of sequence that's complementary to the strand right at the nick site — call it the primer binding site. The other extra element is a template that encodes the edit you want to install.

Here's how the cycle plays out. The prime editor finds its target, the way Cas9 always does — via PAM and guide pairing. The nickase blade cuts one strand. The cut leaves a free 3' end of DNA sticking out, single-stranded. The primer-binding part of the pegRNA grabs that free end, base-pairs with it. Now the reverse transcriptase, riding on the back of the Cas9, reads from the template part of the pegRNA and writes new DNA onto the end of the nicked strand. The newly-written DNA contains the edit you encoded.

The cell now has two competing flaps of DNA at the cut site — the original unedited flap and the new edited flap. The cell's natural machinery resolves the situation. With some clever additional tricks (a second nick on the other strand to bias the choice, additional modifications to the pegRNA to make it more stable, suppression of a cellular pathway called mismatch repair that would otherwise undo the edit), the cell can be coaxed to keep the edited version. The result: the edit you encoded in the pegRNA gets written into the genome.

What can you do with this? Any single-letter swap — all twelve, including transversions. Small insertions of up to a few dozen letters. Small deletions. The platform is genuinely the most general programmable editor anybody has built.

When the prime editing paper came out, the field reacted strongly. Some called it "search-and-replace for the genome." That's the analogy that stuck, and it's apt. Some were more cautious — early prime editing efficiencies were lower than base editing, and pegRNAs are harder to design than sgRNAs. But the versatility was undeniable.

Subsequent improvements have steadily increased efficiency. The first clinical prime editing trial in humans began in 2024, for a primary immunodeficiency disease called chronic granulomatous disease, run by Prime Medicine — the company David Liu co-founded around the technology. Early data are still coming in as I give this lecture.

\[Pause.\]

So step back and look at the full editing toolkit we now have. **Standard Cas9** for knocking genes out via NHEJ. **HDR plus Cas9** for precise edits in dividing cells, when you can afford the inefficiency. **Base editors** for four out of twelve letter swaps, with no double-strand break. **Prime editors** for any small edit — all twelve letter swaps, plus small insertions and deletions — also with no double-strand break. Each tool has its specialty. Modern editing strategy is largely about choosing the right tool for the desired edit. The toolkit is now rich enough that for almost any change you want to make, somewhere in the catalog there's a tool that can do it.

---

## SEGMENT 13 — Getting CRISPR into cells

We've spent a lot of time on what the editor _does_. Now let's talk about how you get it _into the cell_, because for any therapeutic application this is at least as hard as the editing chemistry. A perfect editor that you can't deliver to the target tissue is not a therapy.

There are three broad delivery strategies, and you should know all three because each one shows up in different applications.

The first strategy is **viral delivery**. You take a virus, gut its harmful genes, and replace them with the CRISPR cargo — the gene for Cas9 plus the guide RNA. Then you let the modified virus infect the patient's cells the way it naturally would. The cells take up the viral cargo, express Cas9 and the guide, and editing happens.

The workhorse virus for in-vivo delivery is something called **adeno-associated virus**, or **AAV**. The analogy I want you to hold is: **AAV is like putting the CRISPR machinery inside a tiny shipping container that knows how to enter cells.** It's a small, well-behaved virus that doesn't cause significant human disease, has a long safety record, and comes in different "flavors" called serotypes that prefer different tissues. AAV8 prefers the liver. AAV9 can cross into the brain. There are engineered serotypes that target the eye, the muscle, the heart. You pick your serotype based on where you want to edit.

AAV has one big limitation: it's small. It can only carry about 4,700 letters of DNA cargo. SpCas9 alone is about 4,200 letters — so it just barely fits, with very little room for the guide RNA and the regulatory elements you need. This is one of the main reasons people went searching for smaller Cas9 cousins like SaCas9. SaCas9 fits comfortably in one AAV, leaving room for everything else.

Another viral option is **lentivirus**, which is derived from HIV. It carries a larger payload and can integrate into the genome of dividing and non-dividing cells. It's used heavily for ex-vivo applications — when you take cells out of the patient, edit them in a dish, and put them back. CAR-T cell therapies for cancer use lentiviral delivery.

The second delivery strategy is **lipid nanoparticles**, or **LNPs**. The analogy: **wrapping the CRISPR ingredients in fat bubbles that fuse with cells.** LNPs are tiny droplets of specific lipid mixtures — fatty molecules engineered to package a nucleic acid cargo inside, circulate safely through the bloodstream, and then dump their cargo into the cytoplasm of a target cell.

You may already know LNPs, because they're the same delivery technology that proved itself at scale in the COVID mRNA vaccines. The mRNA vaccines used LNPs to deliver mRNA encoding the spike protein into your muscle cells. CRISPR uses LNPs to deliver mRNA encoding Cas9, plus a chemically-stabilized synthetic guide RNA, into target cells. The cell translates the mRNA into Cas9 protein for a day or two, editing happens, the mRNA degrades, the Cas9 protein gets cleared, and you're done. This transient kinetics is actually a major safety advantage — Cas9 isn't hanging around for weeks accumulating off-targets.

LNPs naturally accumulate in the liver after intravenous infusion. So LNPs are the natural choice for liver-targeted editing. For other tissues, active targeting via surface ligands is an area of active research.

The third strategy is **direct protein delivery** — deliver pre-formed Cas9 protein, with the guide RNA already loaded, as a finished functional unit. You purify Cas9, mix it with synthetic guide RNA in a tube, and then introduce the complex into cells using a brief high-voltage electric pulse — a technique called **electroporation**. The pulse transiently makes holes in the cell membrane, letting the Cas9 in. The advantage is that the protein is active immediately, edits, and then is degraded within a day or so. Very short Cas9 lifetime in the cell means very few off-targets accumulate over time.

Electroporation is the standard approach for ex-vivo applications — when you have the cells in a dish and you can put them through the electric pulse. It's how Casgevy, the sickle cell cure we're about to discuss, is manufactured.

\[Pause.\]

The choice of delivery is intimately tied to the application. Ex-vivo, with cells in a dish, electroporation of Cas9 protein is hard to beat — efficient, safe, transient. In-vivo, for the liver, LNPs delivering Cas9 mRNA are increasingly the gold standard. In-vivo for tissues that don't divide much — eye, muscle, brain — AAV is still the workhorse, despite its size constraints. Delivery is not a footnote. **Delivery is half the therapy.**

---

## SEGMENT 14 — CRISPR as medicine: Casgevy and what comes next

In December 2023, the FDA approved **Casgevy** — exa-cel for short — for the treatment of sickle cell disease in patients twelve and older. A few weeks later, in January 2024, it was also approved for transfusion-dependent beta-thalassemia. **Casgevy is the first CRISPR-based therapy ever approved by any regulatory agency.** This is, by any measure, a landmark moment. The analogy I want you to hold: **the first CRISPR cure — a disease that was previously incurable is now genuinely treatable by editing the patient's own blood stem cells.**

Let me walk through how it works, because it's both beautiful and clever — and it illustrates how a successful CRISPR therapy actually reaches a patient.

The disease. Sickle cell disease is caused by a single point mutation in the beta-globin gene — one letter, changed, that converts one amino acid to another at one position in the hemoglobin protein. The mutated hemoglobin sometimes polymerizes under low-oxygen conditions, deforming red cells into the characteristic sickle shape. The sickled cells get stuck in small blood vessels, causing excruciating pain crises, organ damage, and a shortened lifespan. It's a brutal disease, and it disproportionately affects people of African descent, where it persists evolutionarily because carriers (people with one copy of the mutation) are partially protected from malaria.

The obvious CRISPR strategy would be: correct the point mutation directly. Go in with a base editor or prime editor, fix the bad letter, restore normal hemoglobin. Several groups are pursuing exactly that approach. But Casgevy took a different, cleverer route: instead of fixing the broken adult hemoglobin, **switch back on the fetal hemoglobin** that everyone has from before they were born.

Here's the biology. Before birth, humans express a different version of hemoglobin called fetal hemoglobin — made with a slightly different globin chain than adult hemoglobin. Fetal hemoglobin works fine; it's actually optimized for picking up oxygen across the placenta. After birth, fetal hemoglobin gets switched off and adult hemoglobin takes over. The switch is controlled by a transcription factor called **BCL11A**, which represses the fetal hemoglobin genes in adult red cell precursors.

Now: some people are born with naturally-occurring genetic variants that prevent the switch from happening — they keep expressing fetal hemoglobin into adulthood, a condition called **hereditary persistence of fetal hemoglobin**. These people are healthy. And — here's the key clue — people who have both the sickle mutation _and_ the persistent fetal hemoglobin variant are largely protected from sickle cell disease, because fetal hemoglobin doesn't have the sickle defect and fully compensates.

So the strategy: if we can turn off BCL11A in a sickle patient's red cell precursors, fetal hemoglobin will come back on, and the sickle hemoglobin will be diluted out. We don't have to touch the sickle mutation at all.

The Casgevy procedure. Take CD34+ blood stem cells from the patient's bone marrow. In the lab, electroporate them with pre-formed Cas9 protein loaded with a guide RNA targeting a specific regulatory region in the BCL11A gene — specifically a region that controls BCL11A expression only in red cell precursors. Cas9 cuts. NHEJ produces indels. The regulatory element is disrupted. BCL11A no longer gets switched on in red cell precursors. The edited stem cells are infused back into the patient, who has been pre-conditioned with chemotherapy to clear their existing blood stem cells. The edited cells engraft, repopulate the bone marrow, produce red cells with restored fetal hemoglobin, and the patient is functionally cured.

The clinical results have been striking. Most treated patients have not had a single pain crisis since treatment. The vast majority no longer need blood transfusions. A previously incurable, lifelong, painful genetic disease, ended by editing one regulatory region in one gene in the patient's own stem cells.

There are caveats. Casgevy requires the same chemotherapy conditioning as a bone marrow transplant — high-dose busulfan, which is itself toxic and carries long-term risks including infertility. The treatment is currently priced at over two million dollars per patient. Access in low- and middle-income countries — where the burden of sickle cell is highest — is essentially zero. So Casgevy is both a triumph and a sobering reminder that breakthrough therapies that don't reach the patients who need them most are an incomplete victory.

\[Pause.\]

Beyond Casgevy, several other CRISPR therapeutics are in clinical development. Let me mention two of the most important.

**NTLA-2001**, from Intellia Therapeutics, is the leading **in-vivo** CRISPR therapy — meaning the editor is injected into the patient and editing happens inside the body, no ex-vivo cell manipulation. The target is a liver-produced protein called transthyretin, which in some people misfolds and forms toxic deposits in nerves and heart muscle. The therapy is an LNP carrying Cas9 mRNA and a guide targeting transthyretin. Injected intravenously, the LNP traffics to the liver, Cas9 is briefly expressed, transthyretin is disrupted in liver cells, and serum transthyretin levels drop by around ninety percent within weeks. Patients have shown durable reductions. This is the proof of concept for LNP-delivered in-vivo CRISPR.

**Verve Therapeutics** is developing an in-vivo base editor delivered by LNP to liver, targeting a gene called PCSK9 for cardiovascular disease. Knocking out PCSK9 lowers LDL cholesterol. This is one of the first clinical base editor programs and represents the move beyond cut-and-disrupt toward more precise editing in humans.

The trajectory is clear. CRISPR therapeutics moved from a 2012 basic-science paper to a 2023 approved drug in eleven years. By drug-development standards, that is breathtakingly fast. The next decade will see substantial expansion — more in-vivo applications, base and prime editors entering clinical use, and hopefully a dramatic reduction in price and broader access.

---

## SEGMENT 15 — CRISPR as a diagnostic: SHERLOCK, DETECTR, and fast detection

Let me switch gears entirely. So far we've talked about CRISPR as a genome editing tool. But CRISPR can also be used as a **diagnostic** — a way to detect specific DNA or RNA sequences in a patient sample. Same molecular machinery, completely different application.

The trick that enabled this comes from a strange property of certain Cas proteins called **collateral cleavage**. Here's the property. Cas12 and Cas13 — two other members of the Cas family — when they find and cut their specific RNA-guided target, they enter an activated state in which they start indiscriminately cutting any single-stranded nucleic acids in the vicinity. It's like they get into a frenzy. They cut their specific target, and then they keep cutting whatever's near them.

This sounds like a defect. It turns out to be useful for diagnostics.

Here's the diagnostic trick. You design a guide RNA for your target sequence — say, a piece of SARS-CoV-2 RNA, or a piece of HPV DNA, or a sequence from some bacterial pathogen. You add to the reaction a **reporter molecule** — a short piece of single-stranded nucleic acid with a fluorescent dye on one end and a quencher on the other. As long as the reporter is intact, the quencher absorbs the light from the dye, and the reaction stays dark. But if your target sequence is present in the sample, the Cas protein finds it, cuts it, enters the activated frenzy state, and starts chewing up all the reporters in the tube. The dye gets released from the quencher. The reaction lights up.

So you have a system that says, by lighting up: "yes, the target sequence is present." Coupled to a nucleic acid amplification step beforehand, the system can detect even a few copies of a target in a sample. The whole reaction can be done in about an hour, at body temperature, with minimal equipment. The readout can be fluorescence, or it can be converted into a colored line on a paper strip — like a pregnancy test — so that the result is visible to the naked eye.

This is the basis for the two leading CRISPR diagnostic platforms. **SHERLOCK** — that's an acronym, Specific High-Sensitivity Enzymatic Reporter unLOCKing — from Feng Zhang's group, uses Cas13a, which targets RNA. **DETECTR** — DNA Endonuclease-Targeted CRISPR Trans Reporter — from Jennifer Doudna's group, uses Cas12a, which targets DNA. During COVID, both technologies were deployed in tests that received emergency use authorization. They weren't as widely used as standard PCR tests, but they demonstrated the platform's real clinical utility.

CRISPR diagnostics are particularly attractive for low-resource settings, because they're simple, fast, and can run on minimal equipment. Tests have been developed for HPV, malaria, Lassa fever, and other infectious diseases. There are now CRISPR-based methods for detecting circulating tumor DNA from cancer patients, and for identifying specific disease-associated mutations.

\[Pause.\]

So expand your mental model of CRISPR. It is not just an editor. It is also a **programmable nucleic acid detector**. Same molecular logic — RNA-guided sequence recognition by a Cas protein — applied to a completely different end.

---

## SEGMENT 16 — CRISPR as a discovery tool: genome-wide screens

Now another major application. Beyond editing one gene at a time, CRISPR has transformed how we discover what genes do, by letting us perturb every gene in the genome in parallel and read out the consequences.

Here's the analogy. **A CRISPR screen is asking "what happens if we break every gene, one at a time, across millions of cells?" — and then reading off which cells survive, or which cells changed in some interesting way, and using that to figure out which broken genes mattered.**

Let me make this concrete. Imagine you have a population of millions of cells in a dish, and into each cell you put a single guide RNA, chosen at random from a library of guides that covers every gene in the human genome. The library has, say, four guides per gene, totaling about eighty thousand guides covering twenty thousand genes. Each cell ends up with one guide. Each cell, therefore, has one gene knocked out. The whole dish becomes a chaotic mixture of millions of single-gene knockouts. Some cells have BRCA1 knocked out, some have TP53 knocked out, some have a random gene called RBP4 knocked out, and so on across the genome.

Now you apply a selection. Maybe you treat the cells with a cancer drug, and let them grow for two weeks. Some cells survive; most die. Or you infect them with a virus and see which cells get killed. Or you sort them by flow cytometry for a particular marker.

After selection, you sequence the guide RNAs in the surviving cells. **Each guide RNA acts as a barcode that tells you which gene was knocked out in that cell.** If a particular gene's knockout helped cells survive, you'll see those guides over-represented in the surviving population. If a particular gene's knockout was harmful, you'll see those guides drop out. You're reading the consequences of perturbing every gene, all at once, from one sequencing experiment.

This is the **CRISPR screen**. It's the most powerful systematic genetics tool in mammalian biology, and it didn't exist in any practical form before CRISPR.

The first genome-scale CRISPR knockout libraries were published in 2014. Tools like GeCKO and Brunello — two of the most widely-used libraries — have been used in thousands of studies. A major ongoing project at the Broad Institute called the **Cancer Dependency Map** has applied CRISPR screens to over a thousand cancer cell lines, identifying which genes each cancer is dependent on for survival. This is a public catalog. Every time someone in cancer drug discovery is looking for a new target, the Dependency Map is the first place they look.

Beyond knockout screens, there are activation screens — using the on/off switch tools I'll discuss in the next segment — to find out what happens when each gene is turned _up_ instead of down. And there's a powerful extension called **Perturb-seq**, where you combine CRISPR perturbations with single-cell RNA sequencing — so the readout isn't just survival, it's the entire transcriptional response of each cell to each perturbation. The most informative possible genetic screen.

The conceptual point is this. Before CRISPR, doing systematic genome-scale genetics in mammalian cells was either impossible or required noisy, incomplete tools like RNA interference. Now you can do, in a few months, what would have taken decades by classical approaches. Functional genomics — actually knowing what every gene in the genome does — went from a long-term dream to a tractable, ongoing enterprise.

---

## SEGMENT 17 — CRISPR without cutting: programmable on/off switches

Let me back up to the technology behind those activation screens, because it's elegant and broadly useful. It's also the cleanest illustration of a general engineering idea: **CRISPR is not just a cutter. CRISPR is a programmable DNA binder, and you can put any function you want on the binding event.**

The starting point is **dCas9** — **dead Cas9**. Take Cas9, mutate both nuclease blades so they no longer cut. The resulting protein still binds DNA at the spot the guide RNA specifies — full sequence specificity, full programmability — but it doesn't cut. It just sits there.

Here's the analogy. **CRISPR with dCas9 is scissors with the blades removed, used as a programmable on/off switch instead of a cutter.** You can still aim it anywhere in the genome. But instead of cutting when it arrives, it just parks itself there. And then you can attach whatever cargo you want to it.

That's the engineering insight. Whatever protein domain you fuse to dCas9 gets recruited to whatever genomic site your guide RNA specifies. The cut is replaced with a programmable recruitment system.

The most useful application is gene silencing — **CRISPRi**, for CRISPR interference. Take dCas9 and fuse it to a small protein domain called KRAB, which is a powerful silencer that recruits the cellular machinery for shutting down gene expression. Target dCas9-KRAB to a gene's promoter, and the gene gets silenced. Stable. Heritable. Reversible if you turn off the dCas9-KRAB expression. CRISPRi is the gold-standard tool for "turn this gene down without permanently breaking it."

The mirror image is **CRISPRa**, for CRISPR activation. Take dCas9 and fuse it to an activator domain — a protein that recruits the transcription machinery rather than silencing it. Target dCas9-activator to a promoter and the gene gets switched on, often by a hundred-fold or more. The first activator domain used was something called VP64. More elaborate versions, with multiple activator domains acting at the same site, can achieve dramatic upregulation.

CRISPRi and CRISPRa have several advantages over knockout for gene-function studies. They're **titratable** — you can get partial knockdown or activation by varying guide efficiency. They're **reversible** — turn off the dCas9 fusion and the gene comes back to normal. And they're **non-mutagenic** — no permanent DNA change. CRISPRi can even work on essential genes that you can't knock out at all, because the cells die before you can study them — with CRISPRi, you can knock them down to a survivable level.

And dCas9 has many other applications beyond on/off switching. Fuse it to a fluorescent protein and you can **image specific spots in the genome** in living cells, watching how chromosomes organize themselves in real time. Fuse it to a chromatin-modifying enzyme and you can **edit the epigenome** at a specific locus — install or remove specific marks without touching the DNA sequence. Fuse it to a protein that loops chromatin around and you can **engineer 3D genome organization**.

This is the larger lesson. The original CRISPR technology was about cutting. But the more general technology is about **programmable molecular addressing** — putting any function you want at any DNA site you want, with the guide RNA as the address book. Once you internalize that, every paper that uses dCas9 fused to something makes sense. And you can probably predict the next several before they're published.

\[Pause.\]

---

## SEGMENT 18 — Ethics, the frontier, and the questions left open

We're nearly done. I want to spend the final segment on the ethical and frontier questions, because no honest treatment of CRISPR can stop at the technology without addressing the harder questions about what we should — and shouldn't — do with it.

In November 2018, a Chinese scientist named **He Jiankui** announced that he had used CRISPR-Cas9 to edit the genomes of human embryos that had been implanted in a uterus, carried to term, and resulted in the birth of twin girls. He had targeted a gene called CCR5, attempting to install a deletion that he claimed would confer resistance to HIV.

The announcement detonated the global scientific community. It was, by every reasonable standard, a catastrophic violation of research ethics. The procedure had not been peer-reviewed. The parents' consent process was deeply problematic. The medical justification was nonsensical — there are far safer ways to prevent HIV transmission to a child. The editing itself was technically sloppy — the edits weren't clean copies of the natural protective variant, and may have caused unknown harm. And crucially, the edits would be inherited — passed to any descendants of these girls — a line the global scientific community had agreed not to cross.

Here's the analogy I want you to hold. **He Jiankui's experiment is the cautionary tale — what happens when someone uses the technology before the field is ready, before the rules are set, before the consequences are understood.**

He Jiankui was condemned by essentially every relevant scientific organization. He was sentenced to three years in prison in China for "illegal medical practice" in 2019. He was released in 2022. The two girls are now young children, presumably being raised in privacy, with unknown long-term consequences of the editing.

The episode forced the world to confront a question the field had been treating as comfortably hypothetical: **should we ever do heritable germline editing in humans?** The current global consensus — embodied in reports from international scientific commissions — is essentially "not now, and possibly not for a long time." Germline editing might in principle be allowed for serious genetic diseases with no alternative treatments, but only with extensive preclinical validation and broad societal consensus — conditions that nobody currently meets.

The deeper question is whether that moratorium will hold as the technology continues to mature. This is not a settled question. It is a live, ongoing global debate. And the answer will be shaped by your generation — by the scientists and citizens of the next thirty years — as much as by anyone else.

\[Pause.\]

A few other frontier areas worth flagging quickly.

**Prime editing's scope is expanding rapidly**. The original 2019 paper installed edits of up to about forty letters. More recent variants are installing insertions of thousands of letters by combining prime editing with other enzymes. We're approaching the long-standing dream of programmable **gene replacement** — taking an entire broken gene out and replacing it with a functional version, in situ, without random integration.

**The toolbox is still expanding**. Smaller RNA-guided enzymes have been discovered in transposable elements — ancestors of the CRISPR proteins — that may be even better suited to delivery. AI-driven protein design is now generating new editing enzymes with capabilities that don't exist in nature.

**Access remains the unsolved problem**. A two-million-dollar cure for sickle cell that reaches a few hundred wealthy patients while millions in sub-Saharan Africa continue to suffer is not, by any reasonable definition, a complete success. The next decade of CRISPR therapeutics will be judged not only by molecular performance, but by whether the field finds delivery models, manufacturing models, and pricing models that actually reach the people who need them.

**Off-target effects remain a concern**, even with all the engineering. High-fidelity variants and detection methods have made off-targets measurable and minimizable, but never zero. For each new therapy, exhaustive off-target characterization is required before clinical use.

\[Pause.\]

So that's where we are. A bacterial immune system, discovered slowly across two decades. Reprogrammed in 2012. Demonstrated in human cells in 2013. Exploded into ten thousand laboratories within five years. Produced the first approved cure in eleven years. A Nobel Prize, a patent fight, a moratorium, a long list of unsettled ethical questions.

If you take only one thing from this lecture, take this. CRISPR was not predicted. The discovery that bacteria have an adaptive immune system built out of arrays of viral DNA was made by people who weren't trying to invent a genome editing tool. They were sequencing genes for unrelated reasons. They were trying to make yogurt fermentation more reliable. They were curious about strange repetitive sequences in obscure microbes. The technology that has reshaped biology grew out of basic, curiosity-driven research into questions that almost nobody would have called urgent or applied at the time. Mojica spent years asking what those repeats meant when most of the field considered them a curiosity. Barrangou and Horvath were trying to keep yogurt from going bad. Charpentier was characterizing small RNAs in a bacterium most people would have dismissed as a niche pathogen.

The lesson, I would argue, is that the future of biology is going to come from places we can't predict, asked by people working on questions that don't currently look important. The job of a scientist is not just to solve the problems that look pressing today. It is to follow the curious threads wherever they lead, because some of those threads will, in twenty years, turn out to be the foundation of the next revolution. CRISPR is the most spectacular recent example. There will be others. Be prepared to notice them.

Thank you. We'll take questions.

---

## APPENDIX — Quick-reference summary (not for reading aloud)

**Core idea**: CRISPR is **find-and-replace for the genome**. A short guide RNA (the "search query") directs a protein called Cas9 (the "programmable scissors with GPS") to a matching site in the genome, where it cuts. The cell then repairs the cut, either sloppily (knocking the gene out) or precisely if you supply a template.

**Bacterial origin**: CRISPR is a bacterial immune system — a vaccination card written in DNA. Bacteria store snippets of past viral attackers (spacers) in a genomic array and use them as guides to recognize and destroy returning viruses.

**Discovery timeline**: Ishino (1987) noticed odd repeats in _E. coli_ → Mojica (2000) named CRISPR → Mojica + Vergnaud (2005) showed spacers match viral DNA → Barrangou + Horvath (2007) proved it experimentally in a yogurt bacterium → Jinek/Chylinski/Charpentier/Doudna (2012) reprogrammed Cas9 as a universal tool → Zhang and Church (2013) showed mammalian editing → Charpentier and Doudna shared the Nobel (2020) → Casgevy approved (2023).

**Three stages of the bacterial system**: **adaptation** (acquire new spacers), **expression** (process spacers into mature crRNAs), **interference** (use crRNA-loaded Cas9 to cut matching foreign DNA).

**Cas9 mechanism**: scan the genome for the **PAM** (NGG — "the password the protein checks before it cuts"), then unzip the DNA and try to pair the guide; if the seed region matches, form the **R-loop** across all 20 letters; both nuclease blades close, producing a **blunt double-strand break** 3 letters from the PAM.

**Two repair pathways**: **NHEJ** = "slap it back together with typos" — fast, sloppy, always available, good for knockouts. **HDR** = "fix it carefully using a template" — slow, precise, requires dividing cells.

**Engineered variants**:
- High-fidelity Cas9 (eSpCas9, SpCas9-HF1, etc.): reduce off-targets.
- Relaxed-PAM (xCas9, SpRY): cut at sites without NGG.
- Smaller orthologs (SaCas9, CjCas9): fit into AAV.
- Cas12: cousin of Cas9, T-rich PAM, sticky-end cuts.

**Base editing** (David Liu, 2016): **"a typewriter that changes one letter without breaking the page"** — Cas9 nickase fused to a deaminase enzyme converts C→T or A→G in place, no double-strand break. Covers ~60% of pathogenic point mutations.

**Prime editing** (David Liu, 2019): **"find-and-replace where you can change a whole word, not just one letter"** — Cas9 nickase fused to reverse transcriptase plus an extended pegRNA writes any small edit directly into the genome. All 12 base swaps plus small insertions/deletions, no double-strand break.

**Delivery**:
- **AAV** = "tiny shipping container that knows how to enter cells" — for in-vivo, tissue-tropic; size-limited.
- **LNP** = "fat bubbles that fuse with cells" — for in-vivo liver delivery of Cas9 mRNA; same tech as COVID vaccines.
- **Electroporation of RNP** = brief electric pulse for ex-vivo delivery; the manufacturing approach for Casgevy.

**Therapeutics**:
- **Casgevy** — first approved CRISPR cure (Dec 2023). Edits BCL11A enhancer in patient stem cells to reactivate fetal hemoglobin and compensate for the sickle mutation.
- **NTLA-2001** (Intellia) — first in-vivo CRISPR therapy with clinical efficacy. LNP-Cas9 mRNA to liver to knock out transthyretin.
- **Verve** — first in-vivo base editor in humans, targeting PCSK9 for cardiovascular disease.

**Diagnostics** (collateral cleavage):
- **SHERLOCK** (Cas13, RNA): COVID detection.
- **DETECTR** (Cas12, DNA): HPV and other infectious disease tests.

**Screens**: pooled libraries of guides (GeCKO, Brunello) target every gene in the genome. Selection + sequencing reveals which gene knockouts matter for any selectable phenotype. **Cancer Dependency Map** catalogs essential genes across 1000+ cancer cell lines. **Perturb-seq** adds single-cell transcriptional readouts.

**dCas9 platforms** ("scissors with the blades removed, used as a programmable on/off switch"):
- **CRISPRi** (dCas9-KRAB): programmable gene silencing.
- **CRISPRa** (dCas9-activator): programmable gene activation.
- Plus epigenome editing, live-cell locus imaging, and 3D genome engineering.

**Ethics**:
- **He Jiankui (2018)**: edited CCR5 in human embryos, twins born — "the cautionary tale of what happens when someone uses the technology before the field is ready." Global moratorium on germline editing reaffirmed.

**One-sentence summary**: RNA-guided DNA cleavage made what used to be impossible routine — from a bacterial defense against phage, to programmable scissors, to base and prime editors, to approved cures and rapid diagnostics, in a single decade.

