# Transfection and Electroporation: How to Smuggle Foreign Molecules into a Cell That Doesn't Want Them

**A 2-hour undergraduate molecular biology lecture on the physical, chemical, and biological methods we use to get DNA, RNA, and proteins across the membrane of a mammalian cell — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, which lands comfortably inside a two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it ends nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The barrier problem: why naked DNA doesn't enter cells

Alright, let's begin. For the next two hours, we're going to talk about one of the most underrated, most workhorse-y, most quietly-foundational problems in all of molecular biology: how do you get a piece of DNA, or RNA, or protein, from a tube in your hand into the inside of a living cell? It sounds simple. It is not. Almost every experiment you will read about in a modern biology paper — every gene therapy, every CRISPR edit, every recombinant protein, every CAR-T cell, every mRNA vaccine — depends, at some step, on a person in a lab successfully shoving a foreign molecule across a cell membrane that has spent three and a half billion years evolving to keep foreign molecules out. The whole field of molecular biology, in some sense, is the field of figuring out how to violate that boundary in a controlled, reproducible, non-lethal way. And we have invented, over the last fifty years, a small zoo of different ways to do it.

I want to start with the central problem, because if you carry one sentence out of this lecture, I want it to be this one. **A cell is a fortress, and its membrane is the wall, and naked nucleic acid is exactly the kind of thing that wall was built to reject.**

\[Pause.\]

If you walk out of here in two hours and you can do three things — one, sketch on a napkin the five families of transfection methods and have a feel for which one you'd reach for in which situation; two, explain to a curious friend why electroporating a primary T cell looks completely different from lipofecting a HEK293 cell, and why both are completely different from injecting an LNP into a patient's deltoid; and three, look at the methods section of a paper that says "we transfected our cells with construct X" and immediately know what questions to ask about efficiency, toxicity, and what could go wrong — then we have done our job. Everything else hangs off those three.

So. The wall. Let's actually look at it for a moment, because if you don't have a feel for why it's hard, every clever solution we're going to discuss is going to sound like overkill. A mammalian cell membrane — your cell, my cell, a HeLa cell, a primary T cell, any of them — is a **lipid bilayer**. Two sheets of fatty molecules, tails pointed inward, heads pointed outward, forming a continuous oily film around the cell about four nanometers thick. That bilayer is permeable to small, uncharged, hydrophobic things — oxygen, carbon dioxide, steroid hormones, alcohol — because those molecules can dissolve into the oily interior and slip through. But it is essentially impermeable to large, charged, hydrophilic things. And DNA and RNA, conveniently for the cell, are about as large, charged, and hydrophilic as molecules get. A typical plasmid is several thousand base pairs of double-stranded DNA, each base pair carrying two negative charges on the phosphate backbone, the whole thing wrapped into a floppy coil of negative charge that wants to be in water and absolutely does not want to be in oil. **It cannot cross the membrane. Period. No more than a watermelon can cross a brick wall.**

If that were the only barrier, we'd at least have a clean problem. But it gets worse, because evolution has not only built the wall, it has also stationed guards. Cells have evolved an entire **innate immune machinery** dedicated to noticing when foreign nucleic acid has somehow appeared inside the cytoplasm and responding by destroying it and, in many cases, killing the cell or alerting the neighbors. There are cytoplasmic DNA sensors — cGAS-STING is the big one you should know — that detect double-stranded DNA in the wrong compartment and trigger an interferon response. There are RNA sensors — RIG-I, MDA5, the toll-like receptors — that do the same for foreign RNA. There are nucleases — DNases and RNases — circulating in the serum, sitting in endosomes, lurking on the cell surface, whose only job is to chew up unprotected nucleic acid into harmless little fragments. The wall is high. The guards are vigilant. The dogs have teeth. **You need a smuggler.**

\[Pause.\]

That word — smuggler — is the framing I want you to carry. Every transfection method we're going to discuss is, in some sense, a smuggling operation. The DNA is the contraband. The membrane is the border. And the method — the lipid, the polymer, the electrical pulse, the gold particle, the needle, the virus — is the smuggler that gets the contraband across. Different smugglers have different skills. Some are subtle; some are brutal. Some work everywhere; some only work in one specific city. Some leave the cargo intact; some damage the goods in transit. And — this is the part of the analogy I want you to really sit with — **no smuggler is perfect, and every smuggling operation has casualties.** Some cells die. Some get the cargo but die anyway. Some take it up but never use it. Some use it briefly and then forget. Choosing the right smuggler for the right job is the actual craft of molecular biology, and it is mostly invisible in papers, because by the time the paper is written, the seven failed methods have been deleted from the methods section and only the one that worked is described in three lines.

Now, before we go any further, let me give you the vocabulary distinction that trips up every undergrad, every time. **Transfection** is the word for getting nucleic acid into a eukaryotic cell — yeast, mammalian, plant, insect. **Transformation** is the word for getting nucleic acid into a bacterium. **Transduction** is the word for getting nucleic acid into any cell via a virus. Same conceptual operation, three different words, and people will judge you very quickly if you mix them up. If you say "I transformed my HeLa cells with my plasmid," every molecular biologist in the room will silently note that you do not know what you are doing. Transfection. Mammalian cells. Use it.

There are, broadly, five families of transfection methods, and the rest of this lecture is structured around them. **Physical methods** — electroporation, microinjection, biolistics — use raw mechanical or electrical force to drive nucleic acid across the membrane. **Chemical methods** — calcium phosphate, lipofection, polymer-based reagents — use chemistry to package the nucleic acid into something the cell will accept. **Viral methods** — lentiviruses, AAV, retroviruses, adenoviruses — hijack the evolved machinery of viruses, which after all are professionals at exactly this problem. **Peptide-based methods** — cell-penetrating peptides, the TAT trick — bolt a short peptide onto the cargo and let the peptide drag it across. And **biological methods** — engineered ribonucleoprotein complexes, exosomes, virus-like particles — use natural or semi-natural carriers that the cell either ignores or actively imports.

Each of those five families has a sweet spot. Each has a failure mode. And the entire art of being a good experimentalist is knowing which method is going to work for the cell type you have in front of you. Because here's the thing nobody tells you in the textbook: **what works for one cell line will completely fail for another, and the only way to know is to try it.** HEK293 cells — the workhorse human cell line — are so easy to transfect that you can practically transfect them by sneezing on them. Primary human T cells from a donor's blood are so hard to transfect that for thirty years people thought it was impossible, and even now it requires a specific kind of electroporation with a specific recipe and a specific machine. Primary neurons are so hard to transfect that an entire generation of neuroscientists either gave up or built their careers on viral vectors. The cell line determines the method. The method determines what you can ask.

That's our contract. Now let's go meet the methods, in roughly the order they were invented, starting with the oldest, cheapest, most stubbornly-still-used method on the bench.

---

## SEGMENT 2 — Calcium phosphate transfection: the OG cheap method

Let me take you back to 1973. Watergate is happening. The first cell phone call has just been made on a brick that weighs two pounds. And in a lab in the United Kingdom, two virologists named Frank Graham and Alex van der Eb are trying to figure out how to get adenovirus DNA into mammalian cells so they can study how the virus transforms them. They are doing what every biologist of that era did when they wanted to put DNA into a cell: they were getting frustrated. The DNA went into the tube. The cells went into the tube. The cells did not take up the DNA. The experiment did not work. They tried several things. The thing that finally worked, almost by accident, was to mix the DNA with **calcium chloride** in a solution of **phosphate buffer** and let a precipitate form.

Here's what happens, chemically. Calcium ions in solution combine with phosphate ions to form **calcium phosphate**, which is poorly soluble in water — it falls out of solution as a fine, gritty precipitate of microscopic crystals. If you have DNA in the solution at the moment the precipitate forms, the negatively-charged DNA gets co-precipitated with the calcium phosphate, ending up trapped inside or stuck to the surface of these tiny crystals. You now have a slurry of microscopic calcium-phosphate-DNA particles, each one a little bundle of DNA wrapped in a calcium-phosphate jacket. You drip this slurry onto a dish of cells, the particles settle down onto the cell surface, the cells — being cells, which are constitutively eating their environment via **endocytosis** — gobble up the particles, and a fraction of the DNA inside ends up in the cytoplasm, escapes the endosome somehow, finds its way to the nucleus, and gets expressed.

\[Pause.\]

That, in essence, is calcium phosphate transfection, and the story I just told you is roughly the story Graham and van der Eb wrote up in 1973. It is the OG transfection method. It is fifty-three years old as of this lecture. And here is the part that will blow your mind: **it is still in routine use in production labs today.** Right now, at this minute, somewhere in a contract manufacturing facility making adenovirus or lentivirus for a clinical trial, technicians in scrubs are pipetting calcium chloride into HEPES-buffered phosphate and watching a precipitate form. The technique has survived for half a century because it is unbelievably cheap. The reagents are salt water and DNA. There is no proprietary product to buy. There is no machine. There is no patent. You can do it for pennies per dish.

Here is the analogy I want you to keep. **Calcium phosphate transfection is the OG cheap method — CaPO4 plus DNA forms a precipitate that the cells endocytose. Works for HEK293, completely unpredictable for almost everything else.** That second clause is the key. The technique works beautifully on certain cell lines — HEK293, the famous human embryonic kidney line, being the gold standard — and works essentially not at all on most primary cells, most suspension cells, and many adherent cell lines that aren't HEK. Why? Honestly, partly because we don't fully understand the mechanism, even now. The dependence on endocytic uptake and endosomal escape is sensitive to all sorts of things the experimentalist cannot control — the exact pH of the buffer, the exact CO2 in the incubator, the calcium concentration in the medium, the confluence of the cells on the day of transfection, the phase of the moon. People used to swear that the technique worked better when it rained outside. They were probably wrong, but the fact that the rumor existed tells you how finicky the method is.

When it works, it is gorgeous. You can transfect a dish of HEK293 cells with calcium phosphate and get sixty, seventy, even ninety percent of the cells expressing your gene of interest within forty-eight hours. The cost per transfection is essentially zero. The cells tolerate it well — the toxicity is low compared to most chemical methods. And for one specific industrial application — making adenovirus and adeno-associated virus in suspension HEK293 cells at scale — calcium phosphate is, even now, one of the cheapest ways to do it.

When it doesn't work, it really doesn't work. You'll spend a week optimizing the pH and the calcium concentration and the precipitation time and the cell density and the DNA concentration, you'll get a transfection efficiency of two percent, you'll throw your hands up, you'll order Lipofectamine like the rest of us, and you'll get sixty percent efficiency the next day for two hundred dollars a kit. Which brings us to Segment 3.

\[Pause.\]

Before we move on, one more thing about calcium phosphate, because it sets up a theme that's going to repeat through this whole lecture. The method works by exploiting a natural process — endocytosis — that the cell does anyway. The cell is constantly grabbing little bits of its environment, packaging them into membrane vesicles called endosomes, and pulling them inside. Almost every chemical transfection method we'll discuss is, at bottom, a hack on this same machinery. We take our DNA, we wrap it in something the cell will mistake for food or for a familiar particle, we let the cell eat it, and then we pray that some of it escapes from the endosome before the endosome fuses with a lysosome and the cargo gets digested into nucleotides. **Endocytic uptake plus endosomal escape** — those are the two steps that determine whether any chemical transfection method works, and almost every innovation in this field over fifty years has been about making one or the other of those steps more efficient. Keep that in mind as we go.

---

## SEGMENT 3 — Lipofection: cationic lipids and the Felgner revolution

Calcium phosphate was the only game in town for about fourteen years. Then, in 1987, a researcher at Syntex Research in Palo Alto named Phil Felgner published a paper that quietly changed the entire field. The paper introduced a reagent called **Lipofectin**, the first commercially available lipid-based transfection reagent, and the technique came to be called **lipofection**. Within a decade, lipofection had displaced calcium phosphate as the default transfection method in most labs, and it has held that position for the better part of forty years.

Here is the basic idea, and the analogy that makes it click. DNA is negatively charged. Lots of negative charges, all over the molecule, on every phosphate of the backbone. If you want to package DNA into something that can fuse with a cell membrane, the first thing you need is a counter-charge. You need **something positive that can wrap the negative DNA up into a neutral or net-positive bundle**. That something positive, in lipofection, is a **cationic lipid** — a molecule that looks like a regular lipid, with a long hydrophobic tail, but with a positively-charged head group instead of the usual neutral or negatively-charged head you'd see in a natural cell membrane lipid.

You mix the cationic lipid with your DNA in a tube. The positive head groups of the lipid grab onto the negative phosphates of the DNA. The lipid tails, being hydrophobic, want to get away from water and find each other. The result, within seconds, is a self-assembled particle — a little blob of lipids with DNA wrapped up inside and on the surface, held together by electrostatics. We call this blob a **lipoplex**. You add the lipoplex to your cells. The lipoplex, having a positive surface charge, sticks readily to the negatively-charged outer face of the cell membrane. The cell endocytoses it. Once inside the endosome, the lipid components fuse with the endosomal membrane, the DNA gets released into the cytoplasm, and a fraction of it makes its way to the nucleus where it can be transcribed.

\[Pause.\]

The analogy I want you to keep. **Lipofection is cationic lipids wrapping negatively-charged DNA, fusing with the cell membrane, and dumping cargo inside.** It's like having a positively-charged stealth submarine that grabs your DNA, slips through the membrane, and unloads.

The Felgner paper used a specific cationic lipid called **DOTMA**, and the commercial product Lipofectin was just DOTMA mixed with a helper lipid called DOPE. Within a decade, every reagent company in the world had launched its own version, with names like Lipofectamine, FuGENE, jetPRIME, TransIT, and so on. Each had its own proprietary mix of cationic and helper lipids, each was optimized for slightly different cell types, and each cost between one and three hundred dollars for a kit that would do maybe fifty transfections. The premium pricing was, and still is, partly justified by the fact that these reagents really do work, and partly justified by the fact that there isn't a great alternative if you want predictable, high-efficiency transfection of common cell lines.

The flagship product in this category for the last thirty years has been **Lipofectamine**, made by Invitrogen (now part of Thermo Fisher). If you walk into any molecular biology lab in the world and ask "what's the default transfection reagent here?" the answer, ninety percent of the time, is Lipofectamine. Specifically, in the modern era, **Lipofectamine 3000** or **Lipofectamine LTX** or one of the cell-type-specific variants. The reagent has gone through several generations, each one slightly better than the last at one or another cell line, and the company has, very deliberately, built a brand around being the safe default. When a postdoc inherits a project and needs to transfect cells, they reach for Lipofectamine because that's what worked before, and the cycle continues.

The numbers for lipofection are, by transfection standards, excellent. On HEK293, you can get above ninety percent efficiency. On HeLa, you can typically get fifty to seventy percent. On most adherent cancer cell lines, you can get something usable — twenty to fifty percent. On suspension cells, the numbers drop. On primary cells of almost any kind, the numbers crater into single digits or zero. So lipofection has a sweet spot — adherent immortalized cell lines, especially the standard workhorses — and outside that sweet spot it stops being useful.

The downsides of lipofection are real but manageable. The reagent is moderately toxic to cells; you can usually see, under the microscope, that lipofected cells look slightly stressed, somewhat rounded, sometimes with visible vesicles inside. This is usually mild and the cells recover within a day or two. The technique can be sensitive to serum in the medium — many lipofection reagents work better in serum-free conditions during the transfection step itself, which means you have to swap the medium, do the transfection in serum-free medium for a few hours, and then swap back. And there's a real cost issue at scale — Lipofectamine costs are bearable when you're doing six-well plates by hand, but become genuinely uncomfortable when you're trying to transfect liters of suspension HEK for protein production. Which brings us to the next reagent, the bargain alternative that has taken over high-throughput and large-scale work: PEI.

But before we get to PEI, I want to point out one more thing about lipofection, because it sets up the bridge to the next segment. The same basic chemistry — wrapping nucleic acid in cationic lipids — that we use in tissue culture to transfect HEK293 in a dish is, with substantial modification, the same basic chemistry we use to deliver mRNA vaccines into people's deltoid muscles in vivo. The lipoplex of 1987 and the lipid nanoparticle of 2020 are cousins. They share the same conceptual ancestor. But the lipid nanoparticle, the LNP, is what happens when you take the lipoplex idea and spend thirty years engineering it for in vivo use. That's worth its own segment.

---

## SEGMENT 4 — Lipid nanoparticles: the in vivo cousin

If you have already taken our mRNA therapeutics lecture, this segment is going to feel like a familiar landscape, and you can use it as review. If you haven't, this is a pointer to that other lecture, and we'll cover the basics here without going too deep. The point I want to make in this segment is conceptual: **the lipoplex of in vitro lipofection and the LNP of in vivo mRNA delivery are not the same thing**. They share an ancestry. But the engineering that goes into an LNP, designed to survive a journey through the bloodstream and find its way into hepatocytes or muscle cells inside a living human, is qualitatively different from the engineering of a reagent you sprinkle onto a dish of HEK293 cells in an incubator.

A **lipid nanoparticle** is a roughly spherical particle, about a hundred nanometers across, with a shell made of a four-component lipid mixture and an interior packed with cargo — usually mRNA in the modern context, but also siRNA, and increasingly DNA and even ribonucleoprotein complexes. The four components are: an **ionizable lipid**, which is the workhorse and the engineering masterpiece; a **helper phospholipid**, which provides structural stability; **cholesterol**, which fills in the gaps and tunes the membrane fluidity; and a **PEG-lipid**, which gives the particle a polyethylene glycol shell that prolongs circulation time in the bloodstream and prevents aggregation.

\[Pause.\]

The ionizable lipid is the trick. Unlike the simple cationic lipids in Lipofectamine — which are positively charged all the time, at every pH — an ionizable lipid is positively charged only at low pH and neutral at the physiological pH of blood. This matters for two reasons. First, a permanently cationic lipid in the bloodstream is toxic; it sticks to red blood cells, it activates complement, it causes inflammation. A neutral lipid floats through the blood without triggering those responses. Second — and this is the genuinely clever part — when an LNP is endocytosed by a cell and ends up inside an endosome, the inside of the endosome gradually acidifies as the cell pumps protons into it. As the pH drops, the ionizable lipid switches from neutral to positively charged. The now-positive lipid disrupts the endosomal membrane from the inside, the endosome bursts, and the cargo escapes into the cytoplasm. **The lipid is invisible in the blood and an explosive once inside the cell.**

That endosomal escape mechanism is the single biggest advance that distinguishes LNPs from older lipofection reagents. It is the reason mRNA vaccines work in humans. It is the reason siRNA drugs like Onpattro work in patients with hereditary amyloidosis. And it took roughly two decades of careful chemistry, mostly at Alnylam and Acuitas and a handful of academic labs, to find ionizable lipid structures that did this efficiently without being toxic to the patient's liver. The flagship lipids — ALC-0315 in the Pfizer vaccine, SM-102 in the Moderna vaccine, MC3 in Onpattro — are each the product of careful chemistry, each somewhat different, each protected by a thicket of patents that will keep the LNP-delivery industry under tight commercial control for the next decade.

The relevant takeaway for our transfection lecture is this. **You should think of LNPs as the in vivo cousin of lipofection.** The conceptual framework is the same — wrap nucleic acid in lipid, get it past the membrane via endocytosis, escape the endosome — but the engineering, the cost, the regulatory complexity, and the specific delivery targets are entirely different. You would not use Lipofectamine to make a vaccine. You would not use an LNP to transfect a six-well plate. The two technologies live in parallel, share a conceptual ancestor, and are the answer to different versions of the same fundamental smuggling problem.

For more on LNPs, the ionizable lipid trick, and the mRNA vaccine deployment story, see our **mRNA Therapeutics** book. We are going to move on, because there is a cheaper cousin of lipofection that has quietly taken over a huge chunk of the in vitro market, and that is PEI.

---

## SEGMENT 5 — Polymer-based transfection: PEI and the bargain alternative

So here is the situation in any production-scale molecular biology lab around 2005. You want to make a lot of recombinant protein. You have a thousand-liter bioreactor full of suspension HEK293 cells. You need to transfect those cells with your expression plasmid so that they will make your protein. Lipofectamine, at industrial scale, would cost you tens of thousands of dollars per run. Calcium phosphate at that scale is finicky and produces inconsistent yields. You need a method that is **cheap, scalable, reproducible, and works on suspension HEK**. Enter polyethylenimine, universally called **PEI**.

PEI is not a lipid. It is a **polymer** — a long, branched chain of repeating units, each one carrying a nitrogen atom that can pick up a proton and become positively charged. At physiological pH, a PEI molecule is studded with positive charges all along its length, looking somewhat like a tangled, charged spaghetti strand. When you mix PEI with DNA in solution, the positive charges on the polymer grab onto the negative charges on the DNA, the whole assembly collapses into a compact particle — a **polyplex** — and the cell endocytoses the polyplex by the same mechanism it would endocytose a lipoplex.

\[Pause.\]

The analogy I want you to keep. **PEI is the bargain alternative — a branched polymer that wraps DNA, much less expensive per dose than lipid reagents, and dominant for high-throughput protein production.** The reagent is, depending on which version you buy and at what scale, somewhere between ten and a hundred times cheaper per microgram than Lipofectamine. For a small experiment, that doesn't matter. For a thousand-liter run of HEK293 producing therapeutic antibody, it is the difference between an affordable run and an absurd run.

The mechanism of PEI is interesting and worth a few minutes, because it relies on something called the **proton sponge effect**, which is the most evocatively-named idea in transfection biology. Remember that the endosome acidifies after endocytosis. The cell pumps protons in to drop the pH from neutral down to about five, partly as a step toward fusing the endosome with a lysosome to digest the contents. PEI, sitting inside the endosome with the DNA, has a huge number of nitrogen atoms that can absorb those incoming protons — it acts as a buffer, soaking up the acidification. The cell, sensing that the pH isn't dropping properly, pumps in more protons. PEI absorbs those too. To balance the incoming protons, chloride ions also flow into the endosome. The osmotic pressure inside the endosome rises. Water flows in to balance the osmotic pressure. The endosome swells. Eventually, it bursts. The cargo escapes into the cytoplasm.

That is the proton sponge effect, and whether it really happens at quite the magnitude the original papers suggested has been debated for twenty years. But the effect — endosomal disruption by PEI — is real, and it is the reason PEI works as well as it does. The cargo gets out of the endosome and reaches the cytoplasm in usable quantities.

PEI has its downsides. It is more cytotoxic than Lipofectamine, especially at higher molecular weights and higher doses. There is a real tradeoff between the linear PEI form (which is less toxic but slightly less efficient) and the branched PEI form (which is more efficient but more toxic). For transient protein production in HEK293, PEI is usually the right answer, and the toxicity is manageable because the cells only need to survive long enough to make protein. For applications where cell health matters more — primary cells, stem cells, sensitive experiments — PEI is often not the right choice. There are also specific commercial variants — **PEI MAX** is a common one, **JetPEI** is another, each with proprietary modifications and a price point in between PEI and Lipofectamine — that try to thread the needle between cost and toxicity.

The big takeaway: if you are transfecting suspension HEK293 at scale for protein production, you are probably using PEI. If you are transfecting adherent cells in a six-well plate for a Western blot, you are probably using Lipofectamine. The choice is mostly about cost per transfection and tolerance for cytotoxicity. The chemistry is similar; the form factor is different.

\[Pause.\]

There is one more polymer-based reagent worth mentioning, which is **dendrimer-based transfection**, with the original product being **Superfect** (from Qiagen) based on polyamidoamine, or PAMAM, dendrimers. A dendrimer is a polymer that grows outward from a central core in branches of branches of branches, producing a highly regular tree-like structure with many positively-charged surface groups. Dendrimer transfection works on similar principles to PEI but with a more controlled architecture, and for a while it was a niche favorite for certain hard-to-transfect lines. In practice, it has been mostly displaced by lipid reagents for routine use, but it still pops up in the literature.

The general theme of chemical transfection — and this includes calcium phosphate, lipofection, LNPs, PEI, and dendrimers — is that you are designing a particle that the cell will eat, and then engineering it so that the cargo escapes from the endosome before it gets digested. Every chemical method is, at bottom, a variation on that theme. The next family of methods is completely different. Instead of disguising the cargo so the cell will accept it, you just punch a hole in the wall and shove the cargo through.

---

## SEGMENT 6 — Electroporation: the brute force approach

Imagine you are standing in front of the cell, frustrated. You have tried lipofection. The cells did not take up the DNA. You have tried calcium phosphate. The precipitate looked weird. You have tried PEI. The cells died. And you are looking at the cell and you are thinking: "Look. I have the DNA right here. The cell is right there. The barrier is one little lipid membrane. There has to be a way to just **force** the DNA across that thing." And the answer, invented in 1982 by a German biophysicist named **Eberhard Neumann**, is yes. There is. **You can punch a hole in the membrane with electricity, drop the DNA across the hole, and let the membrane reseal.** That is electroporation.

Here is the basic physics. A cell sitting in a salt-rich aqueous medium has a certain electrical resistance, mostly concentrated in the lipid bilayer, which is essentially an insulator. If you apply an electric field across the cell — by putting the cell suspension between two electrodes and zapping it with a high-voltage pulse — the membrane experiences a transmembrane voltage. If that voltage exceeds a critical threshold, usually around three hundred millivolts to a volt, the membrane undergoes a structural transition that we call **electroporation**: transient water-filled pores open up across the bilayer. These pores are big enough to let macromolecules — including DNA and protein — pass through. After the electric pulse ends, the membrane resealing process kicks in, the pores close, and within seconds to minutes the cell membrane is intact again. Whatever cargo was in the medium at the moment the pores were open had a chance to diffuse or be electrophoretically driven into the cell. Some cells die. The survivors have your DNA inside.

\[Pause.\]

The analogy I want you to keep. **Electroporation is the brute force approach — short, high-voltage pulses temporarily punch holes in the membrane, DNA flows in, holes seal.** You are not negotiating with the cell. You are not disguising the cargo. You are not engineering a particle. You are just zapping the cell hard enough that the wall briefly fails and the cargo can stroll across.

The equipment is straightforward. You need a **cuvette** — a small plastic chamber with two metal walls that serve as electrodes — and an **electroporator** — a box that delivers a pulse of programmable voltage and duration to those electrodes. The leading brands have, for decades, been **Bio-Rad's Gene Pulser** and **BTX's ECM** series. You take your cells, suspend them in a low-conductivity buffer at high density, add your DNA, transfer the suspension to the cuvette, place the cuvette in the electroporator, hit the button, hear the satisfying click of the discharge, take the cuvette out, plate the cells in growth medium, and walk away. Twenty-four to seventy-two hours later, you check whether your gene of interest is being expressed.

The parameters that matter — and there are many — include the **voltage** (typically a few hundred volts to over a kilovolt depending on cuvette geometry and cell type), the **pulse duration** (typically microseconds to milliseconds), the **pulse shape** (square wave or exponential decay), the **number of pulses**, and the **buffer composition**. Each cell type has its own optimum. The classic electroporation paper for a new cell type typically presents a grid — voltage on one axis, duration on the other — with viability and transfection efficiency measured at each point. The sweet spot is the combination that maximizes transfection without killing too many cells. Below the sweet spot, the pores don't open and nothing happens. Above the sweet spot, the membrane disruption is so severe that the cells can't reseal and they die. The window can be narrow.

The big advantages of electroporation. **It works on almost everything.** Suspension cells, adherent cells, primary cells, stem cells, T cells, B cells, neurons, fungi, bacteria, plants — somebody has an electroporation protocol for it. It does not depend on the cell expressing a particular receptor or having a particular endocytic profile. It works with any cargo — DNA, RNA, protein, ribonucleoproteins, nanoparticles. It can deliver large constructs that won't fit in viral vectors. And it requires no reagent — just buffer and electricity. The marginal cost of an electroporation, once you own the machine, is essentially zero.

The big disadvantages. **It kills a lot of cells.** Depending on the cell type and the parameters, you might lose ten percent of the cells; you might lose ninety. The survivors are often stressed and take time to recover. The technique requires significant cell numbers to be in the suspension at the time of pulsing, which can be a problem with rare cell types. And the equipment, while not extravagant, is more expensive than a tube of Lipofectamine — a basic electroporator runs a few thousand dollars, and the cuvettes are a few dollars each, single-use.

\[Pause.\]

For decades, electroporation was a niche technique reserved for cells that absolutely refused to be transfected any other way. Cell biologists in standard adherent cell work would use Lipofectamine. Electroporation was for the hard cases. That changed in the late 1990s and early 2000s, when a German company called **Amaxa Biosystems** — later acquired by Lonza — figured out how to take electroporation, optimize it relentlessly for specific hard cell types, and turn it into a programmable platform that could transfect cells nobody else could touch. That platform was called **nucleofection**, and it is its own segment, because it is one of the most important enabling technologies in modern cell biology and especially in modern cell therapy.

---

## SEGMENT 7 — Nucleofection: the Amaxa programmable platform

Let me tell you a story about a German biotech company that quietly built a tool that enabled, eventually, an entire generation of cell therapy. It is one of those stories where the technology itself is not glamorous, the IP situation is byzantine, the company got acquired and effectively disappeared into a larger entity, and yet the product is in every cell therapy lab in the world and is, right now, in the chain of every approved CAR-T product on the market.

The company was **Amaxa Biosystems**, founded in Cologne in 1999. The founders had been working on a problem: standard electroporation got DNA across the cell membrane, but it did not reliably get DNA into the nucleus, especially in non-dividing cells. For most cell biology applications, that was a survivable limitation, because if you transfected dividing cells, the nuclear envelope dissolved during mitosis, gave the DNA in the cytoplasm a chance to be encapsulated into the reforming nucleus, and you'd get expression. But for non-dividing primary cells — primary T cells, primary B cells, primary neurons, dendritic cells, embryonic stem cells — that strategy didn't work. The cells weren't dividing fast enough. The DNA sat in the cytoplasm, got degraded, never reached the nucleus, and the experiment failed.

The Amaxa innovation, broadly speaking, was twofold. First, they figured out **specialized buffers** for different cell types — proprietary solutions that, in combination with specific pulse programs, dramatically increased DNA delivery to the nucleus. Second, they figured out **specialized pulse programs** — sequences of high and low voltage pulses, of varying durations and waveforms, optimized for the membrane properties of specific cell types. The resulting platform, called **Nucleofector**, came with a library of programs you could select on the front panel of the machine — program X-001 for primary T cells, program U-008 for HEK293, program A-023 for embryonic stem cells, and so on, dozens and dozens of programs, each empirically optimized for one specific cell type or category.

\[Pause.\]

The analogy I want you to keep. **Nucleofection is Amaxa's optimized electroporation recipe — different programs for different cell types, designed to get DNA not just into the cytoplasm but all the way into the nucleus, even in non-dividing cells like primary T cells and stem cells.** It is electroporation that has been engineered into a platform, with the optimization moved from the user to the manufacturer.

The reason this mattered, and matters even more now, is that nucleofection cracked the **primary T cell** problem. For most of the 1990s, primary human T cells — the cells you isolate from a donor's blood and want to engineer for an immunotherapy — were considered effectively untransfectable. You could get DNA into them with lentiviruses, which was the standard approach, but lentiviral engineering is slow, expensive, has biosafety considerations, and integrates randomly into the genome. With nucleofection, you could deliver DNA, RNA, or protein directly into primary T cells with usable efficiency — fifty to eighty percent for many constructs — without any virus, and without random integration. The DNA you delivered was transient, expressed for a few days, and then diluted out. For applications where transient expression was enough — for example, delivering Cas9 protein and a guide RNA for a one-shot gene edit — nucleofection was transformative.

I am going to anticipate Segment 12 a little here, because the punchline matters. Today, almost every gene-edited cell therapy in clinical development — the next generation of CAR-T, the autologous edited stem cell therapies for sickle cell disease, the knockout-edited tumor-infiltrating lymphocyte products — is being made using nucleofection or one of its competitors. The patient's cells come out of the body, get nucleofected with a Cas9 ribonucleoprotein in a clinical-grade Lonza machine, get edited, get expanded, and get infused back. The technology that Amaxa launched in the early 2000s as a niche cell biology research tool is now the backbone of a major class of medicines.

The downsides. Nucleofection is expensive — both the machines and the proprietary buffers and cuvettes are priced as premium products. The buffers, in particular, are sold in small kits at high prices, and you cannot easily make them yourself because their compositions are proprietary. The programs themselves are also empirically derived black boxes — Lonza will not tell you what the underlying voltage profile of a given program is. You hit the button and trust the machine. For a research lab, that's annoying. For a clinical-grade manufacturing process, where you have to validate every step, that opacity creates real regulatory headaches. There are now competitors — **MaxCyte** for example, with their flow electroporation platform that scales to billions of cells, and various academic open-source designs — that try to provide more flexibility or lower cost.

\[Pause.\]

The conceptual takeaway is this. Once you understand that **electroporation can be turned into a programmable, cell-type-specific platform**, you understand why it has become the dominant method for hard-to-transfect cells. The buffer matters. The pulse program matters. The combination of buffer and program, empirically tuned for a specific cell type, can take a cell that is essentially untransfectable by chemical methods and turn it into a cell where you get fifty to eighty percent of your cargo where you want it. That is a transformative capability. It is the reason an entire field of cell therapy exists in its current form.

Now let's go from the most automated, platform-ified, push-the-button approach to the most manual, artisanal, one-cell-at-a-time approach in all of cell biology. Let's talk about microinjection.

---

## SEGMENT 8 — Microinjection: the surgical approach

Imagine, for a moment, that the practical concerns of throughput and cost did not exist, and your only question was: what is the most reliable, most controlled, most informative way to put a piece of DNA into a single specific cell? The answer would be: you take a glass needle, you sharpen the tip to a diameter of a few hundred nanometers, you mount the needle on a precision motorized stage under a microscope, you find the cell you want, you steer the needle through the cell membrane and into the nucleus, you press a button on a pressure controller, and you inject a tiny volume of DNA solution directly into the nucleus of that one cell. That is **microinjection**. It is the most direct, most surgical, lowest-throughput transfection method that exists. It is also, for certain applications, completely irreplaceable.

\[Pause.\]

The analogy I want you to keep. **Microinjection is the surgical approach — an actual glass needle pushed into the nucleus of a single cell, delivering an exact volume of an exact solution to an exact location. It is expensive, slow, requires a skilled operator, and it works on everything.**

The equipment is a serious piece of laboratory hardware. You need an **inverted microscope** with good optics — phase contrast or differential interference contrast, typically at four hundred times magnification or more. You need a pair of **micromanipulators** — precision motorized stages, one for the injection needle and one for a holding pipette, that can move with sub-micron precision in three dimensions. You need an **injection pressure system** — a small computer-controlled pneumatic or hydraulic source that delivers a programmable pulse of pressure to the back of the injection needle, pushing a controlled volume of solution out the tip. You need a **needle puller** — a heated apparatus that takes a glass capillary tube and pulls it under controlled tension until it tapers to a needle with the desired tip geometry. The whole setup, fully equipped, runs into six figures, and operating it well takes months of practice. There is real craft involved. People who are good at microinjection are widely respected and somewhat hard to replace.

What is microinjection used for? A few specific applications, each of which is essentially impossible by any other method.

The biggest, and the reason microinjection has its own permanent place in molecular biology, is **mouse pronuclear injection** — the foundational technique for making transgenic mice. Here is the procedure. You harvest fertilized mouse eggs at the very early one-cell stage, just after the sperm has entered and before the two pronuclei have fused. Under the microscope, you can see two distinct nuclei in each egg — the maternal pronucleus and the paternal pronucleus. You hold the egg with the holding pipette, you steer the injection needle through the cell membrane and into one of the pronuclei, and you inject a small volume of DNA solution containing your transgene. The transgene integrates, more or less randomly, into the chromosomes inside that pronucleus. The pronuclei fuse, the egg develops, the egg is implanted into a foster mother, and a few weeks later you have mouse pups, some fraction of which carry the transgene in every cell of their body, including their germline. Those founder mice can then be bred to produce a stable transgenic line. **This is how every classical transgenic mouse strain ever made was made.** It is how the GFP mouse was made. It is how every transgene-driven model of disease was made for decades. It has been partially supplanted by CRISPR-based knock-in approaches, but for pure transgene addition, pronuclear injection is still standard.

Beyond mouse transgenesis, microinjection is the gold standard for any experiment where you need to know **exactly** how much of something is in a cell, and exactly **where** it ended up. If you want to inject a fluorescent dye into one neuron in a brain slice to trace its morphology, you microinject. If you want to inject mRNA into a Xenopus oocyte — the giant frog egg used for decades to study channels and transporters by heterologous expression — you microinject. If you want to inject a single sea urchin egg with a particular construct to follow its development, you microinject. The technique is irreplaceable in any application where the single-cell, single-experiment level of control matters more than throughput.

\[Pause.\]

The downsides are obvious. Throughput is awful — a skilled operator can inject maybe a few hundred cells per hour at most, and most of the cells in a dish never get injected. The cost is high, both in equipment and in operator training. The technique is not suitable for applications where you need to transfect millions of cells, which describes most modern cell biology. And the success rate, even in skilled hands, is variable — many cells are damaged by the injection itself and die.

But — and this is the important "but" — for the specific applications where microinjection is the right tool, it is **completely irreplaceable**. You cannot make a pronuclear-injected transgenic mouse with Lipofectamine. You cannot inject a specific labeled cargo into a specific neuron in a brain slice with electroporation. The technique survives, in part, because there are problems for which the answer is "you need to put exactly this molecule into exactly that location with exactly this volume," and the only honest way to do that is by hand, with a needle, one cell at a time.

Speaking of "with a needle" — let me show you the most violent transfection method ever devised, which has the cleanest possible name. The gene gun.

---

## SEGMENT 9 — Biolistics: the gene gun

There is a method in molecular biology that involves taking microscopic gold beads, coating them with DNA, loading them into a device that looks suspiciously like a small shotgun, and **literally firing them at high velocity into a sheet of living cells**. The DNA-coated gold beads punch through the cell wall and the cell membrane, lodge inside the cell, the gold is inert and harmless, the DNA elutes off the bead and finds its way to the nucleus, and the cell expresses the gene. The method is called **biolistics**, sometimes called **particle bombardment**, and the device is called a **gene gun**. It is the most physically aggressive transfection method ever invented, and it is also, for certain applications, the only thing that works.

\[Pause.\]

The analogy I want you to keep. **Biolistics is literally shooting DNA-coated gold particles into cells using compressed helium gas. Mainly used for plants, where the cell wall makes everything else useless, and occasionally for dermal cells in vaccine work.**

The technique was developed in the late 1980s by John Sanford at Cornell. He was trying to genetically modify plants, and plants have a problem that animal cells don't have: a **cell wall**. The plant cell wall is a thick, rigid layer of cellulose and other polysaccharides that surrounds the cell membrane and provides structural support to the plant. It is also a much more formidable barrier to transfection than the lipid bilayer alone. Lipofection doesn't work on plant cells because the lipoplex can't get through the cell wall. Calcium phosphate doesn't work. Electroporation has limited effect through the wall. The standard methods for putting genes into plants either involved using **Agrobacterium tumefaciens** — a soil bacterium that has evolved its own DNA-delivery machinery for plants — or various forms of protoplast manipulation, in which you enzymatically strip the wall off, transfect the bare protoplast, and try to regenerate the cell. Neither was satisfactory for many crop species.

Sanford's insight was that if the wall was too thick for chemicals and electricity, you should just **punch through it**. He went down to his garage and built a prototype gene gun out of a modified air rifle and some microscopic tungsten particles. Later versions used compressed helium gas as the propellant — a sudden release of gas pushes a sheet of plastic carrying the particles forward, accelerating them to several hundred meters per second; the sheet hits a stopping screen and the particles continue through, smashing into the target cells. The commercial form, the **Bio-Rad PDS-1000/He**, is still sold and used. It looks like a small pressure vessel with a chamber for the particles and another chamber for the target tissue, separated by a rupture disk that determines the firing pressure.

The applications. The primary one is **plant transformation**, especially for cereal crops that are difficult to transform via Agrobacterium — corn, wheat, rice. Most of the genetically modified crops in agriculture today were originally made via either Agrobacterium-mediated transformation or biolistics, depending on the species. If you have ever eaten a corn chip made from transgenic corn, somewhere upstream in that lineage was a gene gun event in a tissue culture lab in the 1990s.

The secondary application, less famous but important, is **dermal transfection** for DNA vaccines and gene therapy. You can take a gene gun, modify it for delivery to skin, and use it to transfect cells in the dermis — keratinocytes, Langerhans cells, dendritic cells — directly with a DNA-encoded vaccine antigen. The cells express the antigen, the local dendritic cells process it and present it to T cells in the draining lymph node, and you get an immune response. The advantage over needle injection is that you can deliver DNA directly to professional antigen-presenting cells in the skin, which is good for vaccine immunology. Several veterinary DNA vaccines have used biolistic delivery, and the technique was investigated for human use, though it has not become standard.

\[Pause.\]

The downsides of biolistics. The equipment is specialized and expensive. The throughput per shot is decent but limited. The cells you hit are damaged — many die outright from being struck by gold particles at hundreds of meters per second. The technique is not gentle. It is also somewhat unpredictable, because the distribution of particle landings, the depth they reach in a tissue, and the fraction that hit transfectable cells are all variable.

But for plants, it is irreplaceable. The cell wall just does not yield to any of our chemical or electrical methods at high efficiency. And there is something almost charming about the fact that, in a field that prides itself on subtle molecular engineering, one of the workhorse methods for getting genes into crops is literally shooting them in.

That gets us through the major physical and chemical methods of transfection. We have covered five families so far — calcium phosphate, lipofection, LNPs, polymer-based, electroporation, nucleofection, microinjection, and biolistics — and you should now have a feel for the landscape of in vitro transfection: the things you do in a dish to a population of cells. We are going to take a break here, and when we come back, we are going to cover viral transduction (briefly, since there are entire books on each viral vector), cell-penetrating peptides, ribonucleoprotein delivery for CRISPR, and the practical questions of what works, on what, and why. Take ten minutes. Drink some water. Stretch.

\[BREAK\]

---

## SEGMENT 10 — Viral transduction: the professional smugglers

Welcome back. We are now going to spend a relatively short segment on what is, in some sense, the most powerful transfection family of all — **viral transduction** — because there are entire other lectures and entire other books dedicated to specific viral vectors and we don't want to duplicate that material here. But we do need to fit viral vectors into our overall taxonomy, because they are part of the answer to the smuggling problem and you cannot understand the modern landscape without them.

The conceptual framing is this. **Viruses are professional smugglers.** Every virus on the planet has, by definition, solved the problem of getting its nucleic acid genome into a host cell — that is what a virus is. Hundreds of millions of years of evolution have produced viruses that can attach to specific cell surface receptors, get themselves endocytosed or directly fuse with the membrane, escape from the endosome, transport their genome to the nucleus, and in some cases integrate stably into the host chromosome. Compared to the clumsy chemistry of a lipoplex or the blunt force of an electroporation pulse, viral entry is an exquisitely choreographed molecular ballet that we, the engineers, could not have designed.

So the obvious move, made first in the 1980s and refined relentlessly ever since, is to **take a virus, strip out its disease-causing genes, replace them with the genes we want to deliver, and use the remaining viral machinery as a delivery vehicle**. The virus becomes a gene therapy vector. Its evolved entry, trafficking, and expression machinery does the smuggling for us. The genes we paste in get delivered with all the efficiency and specificity that the virus brings to the table.

\[Pause.\]

The four major viral vector families you should know — and there are entire books on each, so this is the headline-level treatment.

**Lentiviruses**, derived from HIV, are the workhorse for stable integration into dividing and non-dividing cells. They have a packaging capacity of about eight to ten kilobases, integrate semi-randomly into the host genome, give very durable long-term expression, and are the standard vector for ex vivo gene therapy, including all the approved CAR-T products on the market. If you have heard of a CAR-T therapy, the chimeric antigen receptor was, in almost every case, delivered to the patient's T cells using a lentiviral vector. The downside of lentivirus is the production complexity, the cost, the biosafety considerations of working with an HIV-derived vector even in its replication-incompetent form, and the random integration that creates a small but nonzero risk of insertional mutagenesis.

**Adeno-associated virus** — AAV — is the workhorse for in vivo gene therapy. AAVs are small, simple viruses that, in their natural form, are essentially harmless to humans — they need a helper virus to replicate at all. The engineered AAV vector delivers a single-stranded DNA payload of up to about four and a half kilobases, the payload mostly stays as an episome rather than integrating into the genome, expression is long-lasting in non-dividing cells, and the technology has been honed to deliver to specific tissues based on the choice of AAV serotype. AAV9 crosses the blood-brain barrier in young children. AAV8 is excellent for the liver. AAV2 was the original and still has its uses. The approved in vivo gene therapies — Luxturna for inherited retinal dystrophy, Zolgensma for spinal muscular atrophy, Hemgenix for hemophilia B, several others now — are AAV products. The downsides of AAV are the limited packaging capacity (eight and a half kb is way too small for many genes you'd want to deliver), the pre-existing immunity in much of the human population (many people have antibodies against common AAV serotypes from prior natural exposure), and the cost (a single AAV gene therapy can run into the millions of dollars per dose).

**Retroviruses** — gamma-retroviruses, mostly murine leukemia virus derivatives — are the older cousins of lentiviruses. They were the original engineered viral vectors in the 1980s and 1990s, used in the first gene therapy trials. They integrate, but only into dividing cells, which limits their utility compared to lentiviruses. They have, historically, had a tendency to integrate near oncogenes — particularly LMO2 — and in the early SCID-X1 gene therapy trials, several patients developed leukemia as a consequence of insertional activation of nearby genes. Retroviral vectors are still used, particularly in some CAR-T manufacturing, but lentivirus has largely taken over for clinical work.

**Adenoviruses** are the big-payload vectors — they can deliver up to thirty-six kilobases of cargo, which is enormous compared to AAV. They produce strong, fast, transient expression. They do not integrate. They are highly immunogenic, which is good if you want a vaccine — adenoviral vectors were the backbone of the Oxford-AstraZeneca and Johnson and Johnson COVID vaccines, and various other adenoviral vaccines — and bad if you want long-term gene therapy. The history of adenoviral vectors is haunted by the death of Jesse Gelsinger in 1999, a teenager who died of a catastrophic systemic immune response after being injected with a high dose of adenoviral vector in a clinical trial for OTC deficiency. That death set the gene therapy field back by close to a decade and shaped the regulatory landscape that still governs the field today.

\[Pause.\]

For the purposes of this lecture, the takeaway about viral vectors is simply that **they exist, they are the gold standard for many applications, and they trade efficiency for complexity and cost**. If you need stable, durable, in vivo gene delivery to a specific tissue at therapeutic scale, you are using a viral vector. You are not using Lipofectamine. You are not using PEI. You are using AAV or lentivirus, you are paying a substantial production cost, you are dealing with vector immunology, and you are getting, in exchange, the entire toolkit of evolved viral entry machinery working on your behalf.

For more, see our **AAV Gene Therapy** book and our **Lentiviral Vectors** book.

The reason we are not spending more time on viral methods in this lecture is that they belong, in some sense, to a different conceptual family. The chemical and physical methods we have discussed are tools you can run in any lab with standard equipment — you can transfect your cells on Monday and have data on Wednesday. Viral vectors require dedicated infrastructure — BSL-2 or BSL-2-plus space, lentiviral production cell lines, ultracentrifuges for titration, validated assays for safety — and the workflow is measured in weeks to months rather than days. They live in their own ecosystem of expertise and cost.

The next two segments cover two more delivery families that don't fit neatly into either the chemical or the viral bucket, but that you should know about. The first, cell-penetrating peptides, is an elegant idea that has remained niche for thirty years. The second, ribonucleoprotein electroporation, is currently the hottest delivery method in the entire field, because it is the workhorse of modern CRISPR-based cell therapy.

---

## SEGMENT 11 — Cell-penetrating peptides: the TAT trick

There is a fascinating family of delivery methods, sitting somewhere between chemical and biological, that has been a curiosity in the field for thirty years and has never quite become mainstream but keeps showing up as a clever trick in particular applications. The family is called **cell-penetrating peptides**, usually abbreviated **CPPs**. The idea is simple, elegant, and a little bit magical.

In the late 1980s, two groups working independently — one at the Salk Institute, one at the Pasteur Institute — discovered something strange about the HIV transactivator protein, TAT. TAT is a viral protein that gets secreted by HIV-infected cells. What the groups noticed, somewhat to their surprise, was that **TAT, applied to uninfected cells in culture, somehow ended up inside those cells**. The cells took it up. The protein crossed the membrane without any obvious carrier, without endocytosis being strictly necessary, without any of the energy-dependent transport mechanisms you'd expect. It just... got in.

They mapped the activity to a short region of TAT — a stretch of about nine amino acids, mostly positively charged arginines and lysines — that turned out to be sufficient, on its own, to mediate membrane crossing. **The peptide TAT-49-57**, with the sequence RKKRRQRRR, became the founding member of the cell-penetrating peptide family. And the kicker, the thing that made the field excited, was that **if you fused TAT to another protein — any other protein — the fusion would also get taken up by cells.** TAT would drag whatever cargo you attached to it across the membrane.

\[Pause.\]

The analogy I want you to keep. **Cell-penetrating peptides are the TAT trick — short cationic peptides that drag cargo across cell membranes by mechanisms that are still partly mysterious, but that work, in a niche of specific applications.** You bolt a CPP onto your protein of interest, you add the fusion to cells, and a fraction of the cargo ends up inside.

Over the years, dozens of CPPs have been characterized. The original TAT peptide. **Penetratin**, derived from the Antennapedia transcription factor in Drosophila. **Polyarginine** sequences, particularly Arg-9 or Arg-8, which work by similar mechanisms. **Transportan**, a chimeric peptide derived from galanin and mastoparan. And many more, some natural, some entirely synthetic. The common feature is a high density of positive charge, often combined with some hydrophobic character, in a peptide of around ten to thirty amino acids.

The mechanism is still debated. The early model was that CPPs somehow translocated directly across the lipid bilayer by some kind of inverted micelle or pore intermediate, without needing endocytosis. Subsequent work showed that the dominant uptake mechanism for most CPPs is actually endocytosis — they get taken up into endosomes like everything else — but then they have some intrinsic ability to escape from the endosome and reach the cytoplasm at higher rates than other cationic cargo. The exact mechanism of that escape, and how much of CPP activity is direct translocation versus efficient endosomal escape, is an active area of research.

What are CPPs used for? In research, they have been used to deliver fluorescent dyes, peptides, proteins, antibodies, oligonucleotides, even small nanoparticles into cells. The efficiency is variable, the cargo size matters a lot (small cargo works better than large cargo), and the technique is not as robust as lipofection or electroporation. But it has the virtue of being a simple modification — bolt a peptide on, add to cells — that doesn't require special equipment or expensive reagents.

In the clinic, CPP-based delivery has been investigated for various therapeutic applications, with limited success so far. There are some approved CPP-conjugated drugs — for example, a CPP-conjugated peptide drug for Duchenne muscular dystrophy is in development — but the platform has not produced the kind of major commercial successes that lipid nanoparticles or viral vectors have. There are also natural concerns about immunogenicity (CPPs derived from viral proteins like TAT can themselves provoke immune responses) and about tissue specificity (CPPs are largely indiscriminate, so a systemically administered CPP-conjugated drug goes everywhere, not just where you want it).

\[Pause.\]

The reason CPPs are worth knowing about, even though they are niche, is twofold. First, they are conceptually elegant in a way that the rest of the field is not. The idea that a nine-amino-acid peptide can carry a protein across a cell membrane is, on the face of it, surprising — biology evolved that membrane to be impermeable, and here is this little tag that just walks through. The biology is still partially mysterious, and the cleverest things in any field tend to be the ones we don't fully understand. Second, CPPs keep popping up in modern hybrid technologies. CPP-modified nanoparticles. CPP-fused Cas9 proteins for direct protein delivery of CRISPR machinery. CPP-coupled antibody fragments for intracellular targeting. The TAT trick is a building block that gets combined with other delivery technologies in increasingly sophisticated ways.

If I had to bet on whether CPPs will become a major delivery platform in the next decade, I would bet no — they have had thirty years to do so and haven't. But I would also bet that they will continue to be useful as a component of larger delivery systems, particularly in research applications where you want a quick and easy way to get a tagged protein into a cell.

Now let's go to the delivery method that is, right now, the most important one in the entire field for cell therapy. The method that is the backbone of next-generation ex vivo CRISPR editing. The method that, ten years ago, was an obscure technical trick and is now the workhorse of an entire wave of clinical trials. **Ribonucleoprotein electroporation.**

---

## SEGMENT 12 — Ribonucleoprotein electroporation: the modern CRISPR gold standard

If you want to understand the modern era of cell therapy — and by "modern" I mean roughly the last five years and what is happening right now in 2026 — there is one delivery method you need to know about, and it has the slightly cumbersome name of **ribonucleoprotein electroporation**, usually shortened to **RNP electroporation**. It is the technique by which the patient's own cells are gene-edited ex vivo and then infused back into the patient. It is how CRISPR-based cell therapies are made. It is the engine room of the entire next generation of CAR-T and edited stem cell therapies.

Here is the basic setup. You want to edit a gene in a primary human cell — a T cell, a hematopoietic stem cell, a tumor-infiltrating lymphocyte, take your pick. You have two main options for how to deliver the CRISPR machinery to that cell. Option A is to deliver the **DNA** encoding Cas9 and the guide RNA, let the cell transcribe and translate them, and let the resulting Cas9-guide complex edit the genome. Option B is to deliver the **protein and RNA directly** — pre-form a complex of purified Cas9 protein bound to a chemically synthesized guide RNA, and electroporate that pre-formed complex straight into the cell, where it immediately gets to work editing without needing any transcription or translation.

Option B is RNP electroporation, and over the past five years it has become the clearly preferred approach for ex vivo cell editing. Here is why.

\[Pause.\]

The analogy I want you to keep. **RNP electroporation is the modern ex vivo CAR-T and edited-stem-cell workflow — you electroporate the patient's primary cells with a pre-formed Cas9-guide complex, the complex edits the genome immediately, and within hours the Cas9 protein is degraded and gone. The edit is permanent. The editing machinery is transient. The cell gets all the benefit and very little of the risk.**

Let me unpack that. When you deliver Cas9 as DNA — say, on a plasmid or via lentivirus — the cell expresses Cas9 protein for days or weeks or, in the lentiviral case, essentially forever. That sustained expression means Cas9 is hanging around in the cell, scanning the genome, potentially cutting at off-target sites where the guide RNA partially matches the genome. The longer Cas9 is around, the more off-target activity accumulates. You also have other risks — the DNA itself can integrate into the genome at the cut site, you can get insertional mutagenesis from the vector backbone, you can get immune responses against Cas9-expressing cells. These are all real problems.

When you deliver Cas9 as RNP, the Cas9 protein is present in the cell from the moment of electroporation, performs its cutting within minutes to hours, and is then degraded by the cell's normal protein turnover machinery within twenty-four to forty-eight hours. **The window of editing activity is short and controlled.** The off-target rate is dramatically lower than with DNA-based delivery. There is no risk of vector integration. There is much less risk of immune response against Cas9 itself. The cell ends up with the desired edit, no extraneous DNA, no residual protein, just a clean change to its genome.

The workflow, in clinical practice, looks roughly like this. You take blood from the patient. You separate out the cells you want — typically T cells or hematopoietic stem cells, by some combination of density gradient and magnetic bead selection. You grow them up briefly in culture if needed. You take your purified Cas9 protein, mix it with your synthetic guide RNA — the guide RNA targets whatever gene you want to disrupt or modify — and let them complex into RNPs. You electroporate the cells with the RNPs, typically using a Lonza Nucleofector or a MaxCyte flow electroporator. You let the cells recover. You expand them in culture for a week or two. You quality-check the editing — typically you sequence to confirm the on-target edit rate is above some threshold and the off-target rate is below another. You harvest the cells, formulate them, and infuse them back into the patient.

\[Pause.\]

That is, with variations, the workflow being used right now in approved and in-development cell therapies for sickle cell disease, beta thalassemia, certain leukemias and lymphomas, autoimmune disease, and a growing list of other indications. **Casgevy** — the first approved CRISPR-based therapy, developed by Vertex and CRISPR Therapeutics — uses exactly this workflow. The patient's hematopoietic stem cells are harvested, the BCL11A enhancer is edited using Cas9 RNP electroporation, the edited cells are expanded and quality-checked, and they are infused back into the patient after a conditioning regimen. The edit causes the stem cells to re-express fetal hemoglobin in their red blood cell progeny, which compensates for the patient's defective adult hemoglobin, which functionally cures the disease. The whole therapeutic concept depends on the ability to deliver Cas9 to primary stem cells with high efficiency, low toxicity, and minimal off-target activity. RNP electroporation is what makes that possible.

If you want to deliver more complex CRISPR cargo — say, Cas9 plus a guide plus a single-stranded DNA template for **homology-directed repair**, allowing you to insert a specific sequence at the cut site rather than just disrupting the gene — you can also do that with electroporation, by including the ssDNA template in the same electroporation mix. The efficiency of HDR is generally lower than the efficiency of simple disruption, and there are tricks to improve it (cell cycle synchronization, fusion of the template to the Cas9, various small-molecule modifiers), but the basic framework — electroporate everything together — is the same.

There are downsides. The Cas9 protein is not cheap to produce at clinical quality. The synthetic guide RNAs, particularly with the chemical modifications needed for stability, are also expensive. The electroporation step damages some fraction of the cells — typically twenty to forty percent loss of viability, depending on the cell type and the conditions. For rare cell populations, that loss can be problematic. And the scale-up to clinical production volumes — hundreds of millions to billions of cells per patient dose — requires specialized equipment and validated manufacturing processes, which is part of why CRISPR-based cell therapies are still expensive.

But the technique works, and it works well enough that an entire generation of cell therapies are being built around it. If you are a young scientist reading this lecture and you are looking for a delivery method to learn that will be useful for the rest of your career, **learn RNP electroporation**. It is the modern gold standard for ex vivo editing, it is the basis of the cell therapy industry, and it is not going away anytime soon.

\[Pause.\]

We have now covered, in twelve segments, the major delivery methods of modern molecular biology. The remaining six segments are about how to actually use them — how to measure transfection efficiency, why the same method works on one cell line and fails on another, the difference between transient and stable transfection, the cytotoxicity tradeoffs, and the frontier of what is coming next. These are the practical considerations that turn a list of techniques into a working laboratory practice. Let's continue.

---

## SEGMENT 13 — Transfection efficiency benchmarks across cell types

Let me try to give you a feel for the actual numbers, because if you only know that "transfection methods exist," you do not yet have an intuition for what to expect. The numbers vary by orders of magnitude across cell types, and the same method that gives ninety percent in one cell line gives two percent in another. **The cell type is at least as important as the method**, and often more so.

Here is a rough field guide. Think of it as the standard list of cell types you will encounter in molecular biology, arranged in roughly increasing order of how hard they are to transfect.

\[Pause.\]

The analogy I want you to keep. **Transfection efficiency is a spectrum from HEK293, where you can transfect a coffee bean if you remember to keep them warm, down to primary neurons, where you can barely transfect anything and you should probably just use a virus.**

At the easy end of the spectrum, **HEK293** — human embryonic kidney 293 cells. You can transfect HEK293 cells with essentially any method, get above ninety percent efficiency, and the cells will keep growing happily. They are so transfectable that they have become the universal positive control. If a new transfection reagent does not work on HEK293, the reagent is broken. HEK293 is so dominant in biotech that an enormous fraction of all the recombinant protein produced for research and clinical use comes from this one cell line. There are specialized derivatives — HEK293T, HEK293F, Expi293, HEK293SG — each optimized for slightly different production or transfection workflows. If you walk into a protein production facility, you will see HEK293 in suspension culture, often being transfected with PEI for transient protein production.

Next, **HeLa cells** — the immortalized cervical cancer cell line from Henrietta Lacks, derived in 1951 and still in use seventy-five years later. HeLa is transfectable but not at HEK293 levels — typical efficiencies are in the fifty to seventy percent range with lipofection. The cells are a workhorse for cell biology, particularly imaging, because they are large, flat, adherent, and easy to grow.

**CHO** cells — Chinese hamster ovary cells — are the dominant production cell line for therapeutic antibodies. They are moderately transfectable, typically forty to sixty percent with lipofection, and at scale they are typically engineered for stable expression rather than transient transfection. Most of the monoclonal antibodies on the market — Humira, Keytruda, Avastin, dozens of others — are made by CHO cell lines that have been engineered, often years ago, to stably express the antibody at high levels.

**COS cells** — derived from monkey kidney, with SV40 large T antigen — are excellent for transient transfection because they amplify plasmids that contain the SV40 origin of replication, giving you very high transient expression. Typical efficiency seventy to ninety percent.

**Jurkat cells** — an immortalized human T cell line — are moderately hard to transfect, typically twenty to forty percent with lipofection, much better with electroporation. The cells are widely used as a model for T cell biology, but they are not equivalent to primary T cells, and many phenomena that work in Jurkat do not replicate in primary cells.

**K562 cells** — an immortalized human leukemia line — are a notorious case. They are suspension cells, they grow well, they are widely used in CRISPR screens and in NK cell killing assays, and they are essentially **resistant to chemical transfection**. Lipofection gives you single-digit efficiency at best. Electroporation works much better, and nucleofection gets you up into the fifty to seventy percent range. K562 is a useful illustration of why one-size-fits-all transfection does not exist — a cell line that looks superficially like it ought to be easy can turn out to be a wall of frustration unless you use the right method.

\[Pause.\]

Then we move into primary cells, where everything gets harder.

**Primary T cells**, isolated from a healthy donor's blood, are the substrate of CAR-T therapy and most modern immunology research. They are nearly impossible to transfect chemically. Lipofection gives you nothing useful. Calcium phosphate gives you nothing useful. **The only methods that work reliably are nucleofection or its competitors (MaxCyte, Neon) for nucleic acid delivery, or lentiviral transduction for stable expression.** Nucleofection on primary T cells typically gives you forty to seventy percent efficiency with good optimization, but you also lose twenty to thirty percent of the cells to the procedure itself. The combination of high efficiency on the survivors and significant loss of cells is the central tradeoff of primary T cell engineering. Every CAR-T manufacturing process is designed around managing this tradeoff.

**Primary B cells** are even harder than T cells. They are short-lived in culture, fragile, hard to maintain in a transfectable state. Recent advances have made primary B cell engineering feasible, but it is still a specialized capability.

**Primary monocytes and macrophages** are notoriously hard to transfect because they sense foreign nucleic acid and respond with a strong inflammatory program — they are, after all, the cells whose job is to detect and respond to foreign material. The very innate immune sensors that make these cells useful in immunology make them resistant to transfection.

**Primary hepatocytes**, the liver cells, are moderately transfectable in culture but lose their characteristic gene expression patterns quickly after being put in a dish, which complicates their experimental use. In vivo delivery to hepatocytes, by LNP, is dramatically more effective than ex vivo transfection.

**Hematopoietic stem cells**, the workhorse of edited stem cell therapies, are moderately transfectable by electroporation (typically forty to sixty percent for RNP, lower for plasmid DNA). They are a special category because the editing has to happen without destroying the stem cell character — if you damage the stem cells too much, they lose their ability to engraft and self-renew when you put them back in the patient.

And at the bottom of the spectrum, the cells where almost nothing works. **Primary neurons**. These cells are so hard to transfect by chemical methods that you should just plan to use a virus from the start. Adeno-associated virus, particularly AAV1, AAV5, AAV9, or AAVrh10 depending on the cell type, gives you long-term expression with minimal cell death. Lentivirus also works. Lipofection works in single-digit percent at best, often with substantial neuron death. Nucleofection works but typically requires the neurons to be transfected before plating, because mature differentiated neurons do not survive the procedure. If your experiment requires transfecting primary neurons, the standard advice is: don't fight it, use a virus, save yourself months.

\[Pause.\]

The big takeaway from this segment is that **the cell type determines the strategy**, and you cannot pick a transfection method without first identifying what cells you are working with and what the established protocols are for those cells. The literature is full of failed experiments where someone tried to use the standard HEK293 lipofection protocol on a primary cell type and concluded that "transfection doesn't work." The transfection doesn't work because the method is wrong for that cell. With the right method, the cell can be done. Without it, no amount of optimization will get you there.

This is also why, when you see a paper that claims to have transfected some hard-to-transfect primary cell at high efficiency, you should read the methods section very carefully. Are they reporting efficiency on the total cell population or on the surviving cell population (which can be a small fraction of the input)? Did they sort for marker-positive cells? Did they enrich? Did they use a specific commercial kit that may not be available to your lab? The numbers in papers are sometimes the best-case numbers in carefully optimized hands, and your reality, on your first attempt, will be worse.

---

## SEGMENT 14 — The cell-line-specific recipe problem

Building on the last segment, I want to spend a little time on what I call the **recipe problem**. Here is the situation. You join a lab. The lab works on, say, B cell biology. The lab's primary experimental system is a particular line — maybe a primary mouse B cell from a particular mouse strain, maybe a particular human B cell lymphoma line. You ask your supervisor, "How do you transfect these cells?" And the answer comes back in the form of a recipe — a specific reagent, a specific buffer, a specific cell density, a specific incubation time, a specific recovery medium, with a specific note about "you have to do it on a Monday or Tuesday because the cells are grumpy by Thursday." The recipe is the result of years of trial and error by previous members of the lab. It is not in any paper. It is not in any commercial protocol. It is tribal knowledge, passed down from senior postdoc to junior grad student over a lab bench, and if the lab loses it, the lab loses the ability to do the experiment.

This phenomenon — the cell-line-specific recipe — is one of the most underappreciated facts about molecular biology. **Every lab has a collection of recipes for the specific cells they work on, and those recipes are not transferable to other cell types without re-optimization.** A B cell lab cannot use its B cell recipe on hematopoietic stem cells. A neuron lab cannot use its neuron recipe on T cells. A HEK293 lab will be totally surprised when they try to use their HEK293 recipe on K562 and get nothing.

\[Pause.\]

The analogy I want you to keep. **What works for HEK doesn't work for K562 doesn't work for primary B cells doesn't work for primary neurons. Each cell line is its own kitchen, with its own quirks, and the recipe that produces dinner in one kitchen produces a kitchen fire in another.**

Why is this? Several reasons.

First, **membrane composition varies between cell types**. The exact mix of phospholipids, cholesterol, and other components in the plasma membrane differs from one cell type to another, and this affects how readily different lipoplexes fuse with the membrane. A cationic lipid that fuses efficiently with the membrane of one cell type may not fuse efficiently with another.

Second, **endocytic activity and trafficking vary between cell types**. Some cells, like macrophages, are professional phagocytes and gobble up everything. Some cells, like neurons, are highly polarized and have specialized endocytic mechanisms that don't readily take up lipoplexes. Some cells route endocytosed material rapidly to lysosomes for degradation; others let it linger in endosomes long enough for cargo to escape.

Third, **innate immune sensing varies dramatically between cell types**. Immune cells — macrophages, dendritic cells, B cells — have high baseline expression of nucleic acid sensors and will mount strong inflammatory responses to foreign DNA or RNA. Non-immune cells like HEK293 have much weaker responses. This matters both because the immune response can kill the cell and because the response shuts down translation, so even if your construct gets in, it doesn't get expressed.

Fourth, **the cell cycle status matters**. Most chemical transfection methods require cell division to get the DNA into the nucleus — the nuclear envelope dissolves during mitosis, allowing cytoplasmic DNA a chance to be included in the reforming nucleus. Non-dividing cells, like primary neurons or quiescent T cells, lack this opportunity and accumulate DNA in the cytoplasm where it is degraded before it can be expressed.

Fifth, **electrical properties matter for electroporation**. Cell size, membrane capacitance, ion channel composition, and cytoplasmic conductivity all influence how a given electroporation pulse affects the cell. The optimal voltage for a small cell is wrong for a large cell. The optimal pulse duration for a fragile cell is wrong for a robust cell. This is why nucleofection ships dozens of pre-optimized programs, each empirically tuned for a specific cell type.

\[Pause.\]

The practical advice that follows from all this. **When you start working on a new cell type, do not assume that any protocol will work**. Find a published protocol for that exact cell type. Find a lab that works with that cell type and ask them for their recipe. Order a small range of reagents and run a pilot experiment with proper controls — typically a GFP construct so you can measure transfection efficiency by flow cytometry. Vary one parameter at a time, do not try to optimize everything simultaneously. Expect the first attempt to fail. Expect the third attempt to give you usable data. Plan for the optimization to take two to four weeks before you have a working protocol.

And one more piece of advice that is wildly underappreciated: **the lot-to-lot variability in commercial transfection reagents is real, and a reagent that worked beautifully for two years can suddenly stop working when a new lot arrives**. If your transfection efficiency drops suddenly and nothing else has changed, check the lot number. Manufacturers occasionally change formulations or have quality issues. Most labs that depend on a specific transfection reagent will, when they find a lot that works particularly well, order a year's supply of that lot and store it carefully.

---

## SEGMENT 15 — Reporter assays: measuring whether it worked

So you have done your transfection. You waited the recommended forty-eight hours. Now what? How do you actually know whether the transfection worked? The answer is **reporter assays**, and there are two big ones you should know: GFP and luciferase. Each is the right tool for different questions.

The **GFP reporter** — green fluorescent protein, the famous jellyfish-derived protein that glows green under blue light — is the gold standard for measuring transfection efficiency. You construct a plasmid that encodes GFP, often under a strong constitutive promoter like CMV. You transfect this plasmid into your cells. Some cells take up the plasmid and express GFP; those cells glow green. Other cells don't take it up and stay dark. You can then quantify the fraction of green cells in your population.

The standard tool for this quantification is **flow cytometry**. You take your transfected cells, run them through a flow cytometer, and measure the fluorescence intensity of each cell as it passes through the laser. The output is a histogram showing the distribution of fluorescence across your cell population. You can readily distinguish the dark population (untransfected) from the bright population (transfected), and read off the percentage of cells in each. **Transfection efficiency** as a number is, almost always, this percentage of GFP-positive cells.

\[Pause.\]

Alternatively, you can visualize GFP-expressing cells under a fluorescence microscope, which gives you spatial information — where the cells are, what they look like, whether they cluster — at the cost of being lower-throughput and more qualitative than flow cytometry. For most efficiency measurements, flow is the default. For colocalization studies or single-cell morphology, microscopy is the default.

GFP has become so standard that almost every experimental transfection of a new cell type or new method starts with a GFP reporter to validate the protocol before any real construct is used. The advantages: simple, visible, fast, quantitative. The disadvantages: GFP itself can be mildly toxic at high expression levels, GFP fluorescence saturates the flow cytometer if expression is too high, and very weakly expressed GFP can be hard to distinguish from autofluorescence in some cell types. The variants — eGFP for enhanced brightness, mCherry for red, mTurquoise for cyan, and so on — give you a whole rainbow palette for multiplexed reporting.

The **luciferase reporter** is the gold standard for measuring expression _level_, as opposed to the fraction of cells expressing. Luciferase is an enzyme — usually from firefly or Renilla — that catalyzes a reaction producing visible light, with an intensity proportional to the amount of enzyme present. You construct a plasmid encoding luciferase, transfect it, lyse the cells after the appropriate time, mix the lysate with the luciferase substrate (luciferin and ATP for firefly luciferase), and measure the light output in a luminometer.

The luciferase assay is enormously sensitive — you can detect a few thousand molecules of luciferase per sample — and it gives you a continuous quantitative readout. It is the standard for measuring promoter strength, for measuring relative expression between conditions, and for measuring drug effects on gene expression. You can multiplex two luciferases — firefly and Renilla, each with a different substrate — to do dual-reporter assays where one luciferase reports the experimental signal and the other normalizes for transfection efficiency. This dual-luciferase setup is one of the most powerful and commonly used tools in molecular biology.

\[Pause.\]

The choice between GFP and luciferase, simplified. **Use GFP when you care about the fraction of cells expressing or about which cells are expressing. Use luciferase when you care about how much is being expressed and you have a multi-well plate of conditions to compare.** Many experiments use both — GFP to confirm the transfection worked and luciferase to quantify the experimental effect.

There are also more specialized reporters. **Secreted alkaline phosphatase** (SEAP) lets you measure expression in the medium without lysing the cells, so you can do time courses on the same sample. **Beta-galactosidase** (lacZ), with X-gal as substrate, lets you stain cells blue, which is useful for in situ visualization in fixed tissue, particularly in mouse embryos. **Tagged proteins** of your gene of interest — typically tagged with HA, FLAG, Myc, or fluorescent protein fusions — let you measure expression by Western blot or by direct visualization, without needing a separate reporter.

For modern CRISPR experiments, the reporter strategy is slightly different. You typically want to confirm that your edit happened, not just that your construct was delivered. The standard approach is to do **deep sequencing of the target locus** after editing — you PCR amplify the genomic region around the cut site, sequence the amplicon on an Illumina or Nanopore platform, and count what fraction of the reads show indels at the expected position. This gives you a direct measurement of editing efficiency, which is much more meaningful for a CRISPR experiment than transfection efficiency per se. Tools like **CRISPResso** and **TIDE** automate the analysis of this data.

The general principle: **always have a reporter, always quantify**. Transfection is a noisy, variable process, and the only way to know whether it worked is to measure. If your experimental construct does not have an obvious phenotype, include a separate reporter plasmid in the transfection mix so you have a positive control for delivery.

---

## SEGMENT 16 — Stable vs transient: two completely different beasts

There is a conceptual distinction in transfection that you absolutely must understand, because it determines what kind of experiment you can do and what kind of timescale you are operating on. The distinction is between **transient** and **stable** transfection. These are not minor variations on the same idea. They are two qualitatively different things.

\[Pause.\]

The analogy I want you to keep. **Transient transfection is fast, peaks at forty-eight to seventy-two hours, and dies. Stable transfection is slow, requires antibiotic selection, but lasts forever.** They serve completely different purposes, and the choice depends on what you are trying to do.

Let me explain the mechanism behind each.

When you deliver a plasmid into a cell by any of the methods we have discussed — lipofection, electroporation, calcium phosphate, whatever — the plasmid ends up in the cytoplasm and, eventually, some fraction reaches the nucleus. Once in the nucleus, the plasmid sits there as an **episome** — a free, extrachromosomal piece of DNA that is not integrated into the host's chromosomes. The cell's transcription machinery finds the promoter on the plasmid, transcribes the encoded gene, and the resulting mRNA is exported to the cytoplasm and translated into protein.

This works beautifully for a few days. But — and this is the key — **the plasmid is not being replicated along with the cell's own DNA when the cell divides.** Most lab plasmids do not have a mammalian origin of replication. They have a bacterial origin, which doesn't function in mammalian cells. So each time the cell divides, the plasmid copies present in the parent cell get distributed (somewhat randomly) into the two daughter cells. Over successive divisions, the plasmid copies get diluted out. After a week or so, depending on the cell division rate, most cells in the population have lost the plasmid entirely. The expression of your gene of interest peaks at around forty-eight to seventy-two hours post-transfection, stays high for another day or two, and then declines as the plasmid is lost. By day seven or ten, the transient expression is essentially gone.

That is **transient transfection**. Fast. Useful. Limited.

\[Pause.\]

Transient transfection is the right tool when you want to: ask a quick question about whether expressing a gene produces a phenotype within a few days, produce a batch of protein for purification (transient protein production in HEK293 with PEI is the gold standard for this), test a CRISPR construct, do a luciferase reporter assay, or run a high-throughput screen across many constructs. The strength of transient is that the experiment is fast — three to five days from transfection to result — and you do not need to maintain a stable cell line.

If, on the other hand, you want a cell line that **permanently** expresses your gene of interest — that you can grow up, freeze down, thaw, and use over months or years of experiments — you need a **stable transfection**, also called a **stably transfected cell line**.

The way you make a stable line is to **select for the rare cells that have integrated the plasmid into their chromosomes**. Even though most cells just hold the plasmid as an episome and lose it over time, a small fraction — typically one in a thousand or one in ten thousand — will, through random recombination events at DNA damage sites, integrate some or all of the plasmid into a chromosome. Those cells now have the gene permanently in their genome. The integrated copy will be replicated along with the rest of the chromosome and will be passed to every daughter cell forever.

To find those rare cells, you use **antibiotic selection**. The plasmid carries, in addition to your gene of interest, a **selection marker** — typically a gene encoding resistance to a mammalian-cell antibiotic. The standard choices are **neomycin** (selected with G418, also called Geneticin), **puromycin**, **hygromycin**, **blasticidin**, and **zeocin**. You transfect the plasmid, you wait a couple of days for expression to start, you add the antibiotic to the medium, and you wait. Every cell that lacks the resistance gene dies. After a week or two, the only cells remaining are the rare ones that have integrated the plasmid and are stably expressing the resistance gene — and, by linkage, your gene of interest. You expand those survivor cells, sometimes picking individual clones to get a clonal cell line, and now you have a permanent stable line.

\[Pause.\]

The whole process takes two to four weeks, sometimes longer. Stable selection is slower, more labor-intensive, and produces a line that expresses your gene at moderate levels (not the high levels you get transiently in the first few days). The strengths are durability and reproducibility — once you have the line, every experiment uses the same cells with the same expression level, no transfection step required, no batch-to-batch variation.

There is a middle ground called **episomal expression**, where you use a plasmid that does have a mammalian origin of replication — typically derived from Epstein-Barr virus or papillomavirus — that allows the plasmid to replicate as an episome along with the cell's own DNA, so it doesn't get diluted out. With antibiotic selection, you can maintain such an episome indefinitely without integration. This is sometimes useful when you want stable expression without the random-integration position effects that can make stably transfected lines variable.

And there is the viral alternative, which we mentioned. **Lentiviral transduction** semi-integrates the cargo into the genome with much higher efficiency than plasmid transfection followed by selection. If you want a stably expressing cell line in two weeks instead of two months, lentivirus is often the right answer.

The general advice: **use transient when you can, stable when you must**. Transient is faster, cheaper, and more flexible. Stable is needed when you want a reproducible cell line for long-term work, when you need to study chronic effects of expression, when you need to ship the cell line to collaborators, or when you are building a production line for protein manufacturing.

---

## SEGMENT 17 — Cytotoxicity, immunogenicity, and the damage profile

Every transfection method has a **damage profile**. None of them are free. The cell that receives the DNA pays some cost — in viability, in stress response, in inflammatory signaling, in transient growth arrest — and the cost varies by method, by cell type, by dose, and by what is being delivered. If you do not have a feel for these costs, you will misinterpret your experimental results, because you will attribute to your gene of interest effects that are actually due to the delivery method itself.

\[Pause.\]

The analogy I want you to keep. **Every transfection method has its damage profile, and you have to know what damage you are doing so you can distinguish it from the biology you are studying.**

Let me walk through the damage profiles of the major methods.

**Calcium phosphate**: relatively low toxicity in the cell types where it works, mostly because the calcium phosphate precipitate is, well, calcium phosphate, which the cells are reasonably comfortable with. Some cell types show pH-induced stress because the typical protocol involves slightly acidic conditions during precipitate formation. Mostly fine.

**Lipofection**: moderate toxicity. The cationic lipids themselves are slightly toxic to cells — the positive charge interferes with normal membrane function and can disrupt mitochondrial membranes. The exact level depends on the specific reagent (some are more toxic than others) and on the dose. Cells transfected with Lipofectamine often look slightly stressed and rounded for a day or two before recovering. For most experiments, the toxicity is acceptable.

**PEI**: more toxic than Lipofectamine, particularly at higher molecular weights and higher doses. The cationic polymer is more disruptive to membranes than cationic lipids. Cells can show significant viability loss (twenty to forty percent) after PEI transfection, depending on conditions. For HEK293 production where you only need cells to survive a few days, this is acceptable. For sensitive applications, it's not.

**Electroporation and nucleofection**: variable, but typically significant cell death — twenty to fifty percent of input cells die from the electrical pulse itself, depending on the cell type and pulse parameters. The survivors are often transiently stressed and may have altered gene expression for days after the procedure due to the response to membrane damage and to the foreign DNA itself. For ex vivo cell therapy, the loss of one-third to one-half of the starting cells is a real cost, factored into the manufacturing process.

**Microinjection**: the cells that get injected and survive (typically half to three-quarters) are mostly fine afterward, because the injection is fast and precise. The damage is concentrated in the cells that you actually inject; everything else is untouched. This is a major advantage when you want to study one cell's behavior without perturbing its neighbors.

**Biolistics**: highly damaging. Many cells die from being struck by gold particles. The damage is mechanical and often immediate.

**Viral vectors**: variable, depending on the vector. AAV is very gentle in most cell types. Lentivirus can be moderately stressful but mostly tolerable. Adenovirus, at high MOI, can be quite toxic and immunogenic.

\[Pause.\]

Beyond direct cytotoxicity, there is the issue of **immunogenicity** — the induction of an immune or inflammatory response. This matters in two ways.

First, in vitro, the inflammatory response to transfected DNA itself — sensed by cytoplasmic DNA sensors like cGAS-STING and by endosomal TLR9 — can change the biology of immune cells you are studying. If you transfect a macrophage with a plasmid and you see upregulation of interferon-stimulated genes, you may be looking at the transfection-induced response, not at the effect of your transgene. Controls become critical: you transfect a control plasmid that has the same backbone but a different (or no) insert, and you compare.

Second, in vivo, immunogenicity can determine whether a delivery method is usable at all in patients. LNPs are generally well-tolerated in single doses but can produce immune responses, particularly with repeat dosing. Adenoviral vectors produce strong immune responses, which is why they failed as gene therapy vectors (the Gelsinger case) but succeeded as vaccine vectors. AAV vectors face the problem of pre-existing immunity in many patients, which can prevent administration entirely.

The general principle: **know your damage profile**. When you design an experiment using transfection, ask what controls you need to rule out delivery-induced effects. When you read a paper, ask the same question. The phenotypes that survive proper controlling for transfection effects are the real ones; the phenotypes that disappear when you compare to a transfection control were never real.

---

## SEGMENT 18 — The frontier: cell squeeze, CRISPR-LNPs, and AI-designed delivery

We have spent seventeen segments on the established methods, the ones you would actually use in a lab today. Let's close the lecture by looking at the frontier — the technologies that are emerging in research labs right now, that may become the standard methods of the next decade.

\[Pause.\]

The first frontier I want to mention is **microfluidic cell squeezing**, developed initially in the lab of Klavs Jensen and Robert Langer at MIT, with significant contributions from the Sharp lab and now commercialized by a company called SQZ Biotechnologies. The idea is mechanical and elegant. You push cells one at a time through a narrow constriction in a microfluidic channel — a constriction smaller than the cell diameter. The cell deforms as it squeezes through, and the deformation transiently opens **mechanical pores in the membrane**, similar to electroporation pores but produced by physical compression rather than electrical pulses. While the cell is squeezing through, cargo in the surrounding solution can enter through the pores. After the cell exits the constriction, the pores reseal, and the cell continues on its way with the cargo inside.

The advantage of cell squeezing is that it is **gentle** — much gentler than electroporation. The cells survive better. The expression of transferred cargo is high. The method works on hard-to-transfect cells like primary T cells and primary B cells without requiring the cell-type-specific buffer optimization that nucleofection demands. It also works for delivering protein cargo, which is particularly relevant for CRISPR RNP delivery. SQZ Biotech has been running clinical trials of cell-squeeze-engineered immune cells for cancer immunotherapy, and the technology has the potential to displace electroporation for certain applications if the manufacturing economics work out.

The second frontier is **in vivo CRISPR delivery by LNP**. We have talked about RNP electroporation as the gold standard for ex vivo editing. The frontier is: can we deliver CRISPR machinery, in vivo, to specific tissues, using lipid nanoparticles? The answer, increasingly, is yes — for some tissues. Intellia Therapeutics has shown that you can deliver Cas9 mRNA and a guide RNA, both packaged in an LNP, by IV infusion to a patient, and have the LNP target the liver, get taken up by hepatocytes, deliver the Cas9 mRNA which gets translated into Cas9 protein, complex with the guide, and edit the genome of the patient's liver cells in vivo. They have shown this in patients with hereditary transthyretin amyloidosis, where editing the TTR gene in hepatocytes produces a permanent reduction in serum TTR levels and apparent disease modification.

This is enormous. It is the first demonstration of in vivo gene editing in human patients, and it works because two technologies — LNP delivery, established by the mRNA vaccine work, and CRISPR editing — converge on the same problem. The LNP gets the editing machinery into the cell. The CRISPR editing machinery does the work. The combination is transformative.

\[Pause.\]

The big question for in vivo CRISPR-LNP is **tissue targeting**. The current technology delivers efficiently to the liver and, to a lesser extent, the spleen. Delivering to other tissues — muscle, brain, lung, immune cells in the periphery — is much harder. The frontier of LNP engineering, right now, is finding ionizable lipids and surface modifications that target LNPs to specific tissues other than the liver. Companies are working on this. Some lipids show preferential targeting to spleen and bone marrow. Some peptide modifications target endothelial cells. The next decade will probably see a substantial expansion of which tissues can be reached by LNP delivery, which in turn will expand which diseases can be treated by in vivo gene editing.

The third frontier is **AI-designed delivery vehicles**. Lipid chemistry, for the first thirty years of the LNP field, was driven by intuition and slow experimental iteration — chemists would design candidate lipids, synthesize them, test them in cells and in animals, and slowly converge on better lipids. The flagship lipids in the COVID vaccines were the products of decades of this iterative work. The frontier now is to use machine learning models, trained on libraries of lipid structures and their measured delivery properties, to predict which novel lipid structures will be efficient and safe before you synthesize them. Several companies and academic groups have published work in this area. The early results are promising but not yet transformative. By 2030, AI-designed delivery vehicles may be standard.

Adjacent to AI-designed lipids is the broader application of **machine learning to delivery optimization**. Predicting which electroporation parameters will work for a given cell type. Predicting which PEG-lipid coating will give the best biodistribution. Predicting which AAV capsid variant will target a specific tissue. The amount of available training data in this area is growing rapidly, and the techniques are maturing. This is unsexy compared to designing new modalities, but it is exactly the kind of incremental optimization that compounds across hundreds of programs over a decade and produces substantial improvements in efficiency, safety, and cost.

There are other frontiers I will only mention briefly. **Exosome-based delivery** — using natural extracellular vesicles, sometimes engineered, as delivery vehicles. **Virus-like particles** that package mRNA or protein without the viral genome. **Tissue-specific peptide-targeted LNPs**. **Biorthogonal click chemistry** for cargo conjugation. **Mechanoporation** by ultrasound. Each has interesting early data, none has yet broken through to dominant status, and the field as a whole is moving faster than at any point in its history because of the convergence of LNP technology, CRISPR editing, and the influx of capital that followed the COVID vaccine successes.

\[Pause.\]

Let me close with a synthesis. Over the past two hours, we have walked through a fifty-year history of how human beings have figured out how to move foreign molecules across the cell membrane. We started with calcium phosphate in 1973 — a method invented essentially by accident, dirt cheap, still in use. We worked through lipofection, polymer-based delivery, electroporation, nucleofection, microinjection, biolistics, viral vectors, cell-penetrating peptides, and RNP electroporation. We talked about why every cell type has its own recipe, how to measure whether your experiment worked, the difference between transient and stable, the damage every method does to the cell, and the frontier of what is coming next.

The central thread, which I want you to leave with, is this. **The cell does not want your DNA. The cell will reject your DNA in every way it can. Every method we have devised to transfect a cell is, in some sense, a victory over hundreds of millions of years of evolution that built a system to keep things like us out.** And yet, despite the difficulty, we have built a toolkit that can deliver almost anything to almost any cell, with the right combination of method and skill. That toolkit is, quietly, one of the foundational enabling technologies of all of modern biology and modern medicine. Without it, there are no mRNA vaccines, no CAR-T therapy, no in vivo gene editing, no recombinant insulin at scale, no monoclonal antibodies, no transgenic mice, no most-of-the-papers-in-Cell-this-year. The smuggler matters. Knowing your smuggler matters. And being the person in the lab who knows how to get DNA into the hard cells, the cell type that nobody else can transfect, is a genuinely valuable and increasingly rare skill.

That's all I have for you today. Thank you for your attention. Questions.

---

## APPENDIX — Quick reference, vocabulary, and further reading

This appendix is for your reference after the lecture. Skim it when you're prepping for an exam, or come back to it when you're trying to remember which reagent to use for which cell type.

**Vocabulary you should know cold:**

- **Transfection** — getting nucleic acid into a eukaryotic cell.
- **Transformation** — getting nucleic acid into a bacterial cell.
- **Transduction** — getting nucleic acid into any cell via a virus.
- **Lipoplex** — a complex of cationic lipid plus nucleic acid, formed for lipofection.
- **Polyplex** — a complex of cationic polymer plus nucleic acid, formed for polymer-based transfection.
- **LNP (lipid nanoparticle)** — a four-component lipid particle for in vivo nucleic acid delivery.
- **Ionizable lipid** — the workhorse component of LNPs, neutral at blood pH and positive at endosomal pH.
- **PEI (polyethylenimine)** — the dominant cheap polymer transfection reagent for high-throughput work.
- **Electroporation** — transient membrane permeabilization by high-voltage electrical pulses.
- **Nucleofection** — Amaxa/Lonza's proprietary optimized electroporation platform.
- **Biolistics** — particle bombardment delivery using DNA-coated gold particles, the "gene gun."
- **CPP (cell-penetrating peptide)** — short cationic peptides like TAT that mediate cargo uptake into cells.
- **RNP (ribonucleoprotein)** — a pre-formed complex of protein plus RNA, used for direct delivery of CRISPR machinery.
- **Episome** — a free, extrachromosomal piece of DNA inside a cell, not integrated into a chromosome.
- **Selectable marker** — a gene that enables selection of cells that have stably integrated a construct, typically an antibiotic resistance gene.
- **Transient transfection** — short-lived expression of a delivered construct, peaking at 48-72 hours.
- **Stable transfection** — selection of rare cells with permanent chromosomal integration of the construct.

**Quick decision tree for picking a method:**

1. **Adherent immortalized cell line, easy transient experiment?** Lipofectamine 3000. Done in a day.
2. **Large-scale suspension HEK293 for protein production?** PEI. Cheaper at scale.
3. **HEK293 for adenoviral or AAV production?** Calcium phosphate or PEI, depending on protocol.
4. **Primary T cells or hematopoietic stem cells?** Nucleofection with cell-type-specific kit, or MaxCyte for scale.
5. **CRISPR editing of primary cells?** RNP electroporation (Lonza Nucleofector or MaxCyte). Cas9 protein plus guide RNA, no DNA.
6. **In vivo gene therapy to a specific tissue?** Viral vector — AAV for most tissues, lentivirus for ex vivo. Or LNP for liver-targeted mRNA/CRISPR.
7. **Transgenic mouse?** Pronuclear microinjection of fertilized eggs.
8. **Plant transformation?** Agrobacterium for easy species, biolistics for the hard ones.
9. **Primary neurons?** AAV or lentivirus. Don't fight it with chemical transfection.
10. **High-throughput screen across many constructs?** Lipofection in arrayed format, or pooled lentiviral library.

**Approximate efficiency benchmarks (with good optimization):**

| Cell type | Best method | Typical efficiency |
|---|---|---|
| HEK293 | Lipofection or PEI | 80-95% |
| HeLa | Lipofection | 50-70% |
| CHO | Lipofection or electroporation | 40-60% |
| COS | Lipofection | 70-90% |
| Jurkat | Electroporation | 40-60% |
| K562 | Nucleofection | 50-70% |
| Primary T cells | Nucleofection | 40-70% (with cell loss) |
| Primary B cells | Nucleofection | 20-50% (variable) |
| Primary macrophages | Lentivirus (chemical poor) | varies |
| Hematopoietic stem cells | Nucleofection (RNP) | 40-60% |
| Primary neurons | AAV | depends on serotype |

**Common antibiotics for stable selection in mammalian cells:**

- **G418 (Geneticin)** — selects for neomycin/kanamycin resistance gene (neo, aminoglycoside 3′-phosphotransferase). Slow, takes 7-14 days. Most common historically.
- **Puromycin** — selects for puromycin resistance gene (pac, puromycin N-acetyltransferase). Fast, kills within 2-3 days.
- **Hygromycin B** — selects for hygromycin resistance (hph). Intermediate speed.
- **Blasticidin** — selects for blasticidin resistance (bsr or bsd). Fast.
- **Zeocin** — selects for zeocin/bleomycin resistance (Sh ble).

**Suggested further reading:**

- Graham FL, van der Eb AJ (1973). "A new technique for the assay of infectivity of human adenovirus 5 DNA." Virology 52:456-467. The original calcium phosphate paper.
- Felgner PL et al. (1987). "Lipofection: a highly efficient, lipid-mediated DNA-transfection procedure." PNAS 84:7413-7417. The founding paper of lipofection.
- Neumann E et al. (1982). "Gene transfer into mouse lyoma cells by electroporation in high electric fields." EMBO Journal 1:841-845. The original electroporation paper.
- Sanford JC et al. (1987). "Delivery of substances into cells and tissues using a particle bombardment process." Particulate Science and Technology 5:27-37. The first gene gun.
- Frankel AD, Pabo CO (1988). "Cellular uptake of the tat protein from human immunodeficiency virus." Cell 55:1189-1193. The TAT discovery.
- Boussif O et al. (1995). "A versatile vector for gene and oligonucleotide transfer into cells in culture and in vivo: polyethylenimine." PNAS 92:7297-7301. The PEI paper.

**Cross-reference to our other books:**

- For the conceptual ancestors of mammalian transfection in bacteria, see **Plasmids: The Most Powerful Idea in Biotechnology**.
- For LNPs in their full glory as a vaccine and therapeutic platform, see **mRNA Therapeutics: Delivering the Recipe Instead of the Meal**.
- For viral vectors in detail, see our **AAV Gene Therapy** and **Lentiviral Vectors** books.
- For CRISPR machinery and its molecular biology, see our **CRISPR-Cas9** book.

End of lecture. Good luck out there. May your transfection efficiency be high, your cell death low, and your controls always include an empty vector.
