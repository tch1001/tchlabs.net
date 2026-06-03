# Recombineering: Homologous Recombination as a Cloning Tool

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to one hundred minutes, plus a mid-point break, which lands you very close to two hours with a little room for questions. Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There is a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder, or paste the segments into a text-to-speech tool.

---

## SEGMENT 1 — What recombineering is, and why it used to be the only way

Alright, let's get started. Good morning, everyone. For the next two hours we are going to talk about **recombineering** — and I am going to try, over the course of this lecture, to do something a little bit countercultural. I am going to try to convince you that the most powerful genome editing tool of the early 2000s was not CRISPR — because CRISPR did not exist yet — and was not zinc fingers, and was not TALENs. It was something quieter, something that did not get a Nobel Prize, something that most undergraduates in 2026 have never heard of. It was a technique built on top of a virus that you have also probably never heard of, in a strain of bacteria you definitely have heard of. The technique is recombineering. The virus is **lambda phage**. The bacterium is _E. coli_. And before CRISPR ate the world, recombineering was how an enormous fraction of bacterial genome editing actually got done. For a lot of applications, it is still the right tool. We are going to figure out why.

So here is the sentence I want you to walk out of here with. If you remember nothing else, remember this. **Recombineering is cell-mediated copy-paste.** That is the whole idea. You hand the cell a small piece of DNA with sticky-note instructions on each end saying, in effect, "paste me here" — and the cell, using a borrowed set of proteins from a virus, does the rest. No restriction enzymes. No ligation in a tube. No screening hundreds of colonies for the right cut-and-paste junction. You design the piece of DNA, you make it by PCR, you push it into the cell, the cell glues it into the right place on its own genome, and you walk away.

If that sounds suspiciously easy compared to what your textbook chapter on cloning describes, with its arrays of restriction enzymes and ligases and screening protocols — good. That is exactly the right reaction. Because recombineering was, when it arrived, a kind of liberation. Cloning in the 1980s and 1990s was a craft. You spent your graduate career learning where the restriction sites were in your favorite plasmid, you spent days drawing maps on graph paper, you spent weekends digesting and ligating and transforming and screening, and at the end you had, maybe, a clone with one foreign gene inserted at one site. If you wanted to do something more ambitious — say, insert a gene into a particular spot on the bacterial chromosome itself, not on a plasmid — then forget it, in many cases. The standard tools just could not get you there. Restriction enzymes cut at sequences they evolved to cut at; the chromosome did not care what you wanted.

Recombineering changed the contract. Recombineering said: you do not have to find a convenient restriction site near where you want to make your edit. You do not even have to do the cutting and pasting yourself. The cell already has machinery for swapping pieces of DNA in and out of its chromosome — it does this naturally, during DNA repair and during certain rare events called homologous recombination. We are going to borrow that machinery, supercharge it, and turn it into a programmable editor. You point it where you want, by handing it a piece of DNA with the right matching sequences on the ends, and the cell does the surgery.

\[Pause.\]

Now let me give you the picture I am going to come back to over and over again today. Imagine your genome — the bacterial chromosome — as a very long encyclopedia. Each gene is a paragraph. Each base pair is a letter. And you want to go in and edit one paragraph. You want to swap out the gene for, let us say, a different version, or insert a marker so you can track that paragraph later, or knock the whole paragraph out by replacing it with a placeholder. How do you tell the cell which paragraph to edit, in a book three million letters long?

The answer is that you do not point at the paragraph. You do not give it a coordinate. You give it a piece of DNA — your replacement paragraph — and you flank that piece with two stretches of sequence that match the chromosome exactly on either side of where you want the edit. Those flanking stretches are called **homology arms**. They are the sticky notes on the ends of your replacement paragraph that say "I match this chromosomal location — swap me in." When you push this DNA into a cell that has recombineering machinery turned on, the cell's machinery sees those matching arms, finds the place on the chromosome where they match, swaps the original paragraph out, and pastes your replacement in.

The whole trick is sequence matching. Homology. That is why the technique is called **homologous recombination** — it uses sequence similarity, sequence matching, to align two pieces of DNA so they can be exchanged. And the genius of recombineering is that, by stealing the right viral proteins from lambda phage, you can drive this normally-rare process so hard and so reliably that it becomes a practical engineering tool.

\[Pause.\]

If you walk out of here in two hours and can do three things, we have succeeded. First, explain to a curious friend what recombineering is using the cell-mediated copy-paste idea, and explain why homology arms are the addressing system. Second, walk through a typical recombineering experiment — designing primers with homology arms, PCR-amplifying a selectable cassette, electroporating into a Red-expressing strain, selecting, verifying. Third, look at a modern paper on genome engineering — a recoded organism, a MAGE library, a CRISPR-plus-recombineering protocol — and recognize what the technique is doing under the hood and why it is being used alongside or instead of CRISPR.

The rest of the lecture is going to be us building up to that level of fluency. We are going to start where the biology started — with a phage attacking a bacterium and the molecular tools that phage carries to grab onto its host's DNA. Those tools, it turns out, are exactly the tools we want.

---

## SEGMENT 2 — Before recombineering: the cloning problem

Let me put you back in the early 1990s for a few minutes. I want you to feel what cloning was like before this technique existed, because the pain is what motivated the invention.

Imagine you are a graduate student in 1992. Your project is to insert a reporter gene — say, the gene for green fluorescent protein, which has just barely been cloned itself — into a particular spot on the _E. coli_ chromosome, so that whenever your favorite gene gets expressed, the cell glows green. Easy idea. Hard execution.

Here is what your protocol looks like. First, you need a plasmid that contains your reporter gene. Fine, you can get one. Now you need to get that reporter gene out of the plasmid and into a new construct that will eventually go onto the chromosome. To do that, you look at the restriction map of the plasmid — every place a restriction enzyme will cut. You find two enzymes whose sites flank your reporter gene. You order those enzymes. You digest the plasmid. You run the fragments on a gel. You cut out the band that contains your reporter. You purify the DNA out of the gel slice.

Now you need a vector to put it into — some other piece of DNA that will eventually serve as the delivery vehicle for getting your reporter onto the chromosome. That vector also has to have compatible restriction sites. So you spend a week looking through catalogs, drawing maps, finding a vector that has the right sites in the right places. You order it. You digest it with the same two enzymes. You purify the cut backbone.

Now you ligate — you mix the reporter fragment with the cut vector, plus DNA ligase, and you let them join up overnight. The next day you transform that ligation into _E. coli_, plate it on antibiotic, and the next day after that you have, hopefully, some colonies. You pick a dozen, grow them up, miniprep their plasmids, digest those plasmids to check whether the reporter actually went in the right way around. Half of them are wrong. The other half need to be sequence-verified, which means sending them out to a sequencing facility, waiting another few days. And this is just to get the construct ready. You have not even started the chromosomal integration yet, which is its own multi-week ordeal involving more cloning, more selection markers, more screening.

\[Pause.\]

Now multiply this by reality. Suppose your reporter gene happens to contain — and this is unbelievably common — a restriction site for one of the enzymes you planned to use. Disaster. The enzyme cuts in the middle of your gene as well as at the flanking sites, and you get a chopped-up reporter. You have to find different enzymes. Different enzymes that flank your reporter, that work in your vector, that do not cut anywhere else in either piece. Sometimes there are no such enzymes. Sometimes the construct is just impossible to build by traditional cloning, period. You stare at the restriction map and admit defeat.

Or suppose you want to insert your reporter not at a convenient cloning site but at an arbitrary location on the chromosome — a place where, by sheer chance, no convenient restriction sites exist. In the old world, you simply could not do it directly. You had to build a complicated multi-step construct with selectable markers and counter-selection schemes, often relying on a rare natural recombination event that happened maybe one cell in a million. The grad students who could pull this off were rare. The ones who could pull it off in a year of work were rarer.

This is the world recombineering was born into. Cloning was real, it worked, it had given us recombinant insulin and GFP and the early biotech industry. But every time you wanted to do something modestly ambitious — a precise edit at an arbitrary location, a large insert, a clean swap of one gene for another — you ran into the wall of restriction sites and ligation efficiency. The chromosome was not a piece of DNA you could really edit. It was a piece of DNA you could, with great effort, occasionally insert things into and pray for the best.

\[Pause.\]

The thing that always struck me, when I first read the old protocols, is how much of the work was bookkeeping. Drawing maps. Tracking which enzymes were compatible with which buffers. Designing screening schemes. Optimizing ligation ratios. The actual molecular event you wanted — the insertion of your gene at your spot — was a tiny percent of the work. The rest was navigating the constraints of the available tools.

What if you did not have to navigate those constraints? What if, instead of relying on restriction enzymes that cut at sequences they happened to recognize, you could just tell the cell, directly, where you wanted the edit to go, by handing it a piece of DNA whose ends matched the target location? What if the cell's own recombination machinery could be the editor — pointed, by sequence homology, at whatever target you chose?

That is the dream. That is recombineering. Now let us figure out how it became real.

---

## SEGMENT 3 — Enter lambda phage and the Red system

To understand recombineering, you have to understand the virus that gave it to us. And the virus is **lambda phage**. Lambda is the granddaddy of model bacteriophages — a virus that infects _E. coli_, and one of the most thoroughly studied biological entities in the history of science. Generations of graduate students cut their teeth on lambda. Half of what we know about gene regulation in the twentieth century came out of lambda research. If you have ever heard the phrase "lysis-lysogeny decision," that is a lambda thing.

Here is what lambda does in the wild. It lands on an _E. coli_ cell, sticks its tail through the cell wall, and injects its linear, double-stranded DNA genome into the cell. About fifty thousand base pairs of viral DNA, now inside a bacterium. From the moment it lands, lambda has a choice: it can go **lytic** — hijack the cell, mass-produce more phage particles, burst the cell open, and infect the neighbors — or it can go **lysogenic** — quietly integrate its DNA into the bacterial chromosome and lurk there, replicating along with the cell, for generations, until conditions change and it decides to wake up. We are not going to spend two hours on the lysis-lysogeny choice today, beautiful as it is. We care about a different part of lambda's life cycle. We care about how lambda manipulates DNA once it is inside the cell.

In particular, lambda has to do a very specific trick early in infection. Its genome enters the cell as a linear piece of DNA. Linear DNA, in a bacterium, is dangerous — the cell has nucleases that chew up linear DNA, because most linear DNA inside a cell came from damage and needs to be cleared. Lambda has to protect itself, circularize, and start replicating, all very quickly. To do this, lambda carries its own set of DNA-handling proteins. Three of them, encoded by genes named in a wonderfully matter-of-fact way: **gam**, **bet**, and **exo**. Collectively, the protein products are called **Gam, Beta, and Exo**. Together they are called the **lambda Red** system — Red, because the genes are part of a cluster called the recombination region.

Let me tell you what each of these proteins does. Because these three proteins are going to be the entire engine of recombineering.

**Exo** is an exonuclease. An exonuclease is an enzyme that chews DNA from the end, one nucleotide at a time. Exo specifically chews double-stranded DNA from a free end, in the 5-prime to 3-prime direction. So if you give it a linear, double-stranded DNA molecule, Exo grabs one end, chews back the 5-prime strand, and exposes a long single-stranded 3-prime tail. It is like taking a zipper, grabbing one of the two zipper halves at the end, and pulling that half back to reveal the other half hanging free. After Exo has done its work, your linear double-stranded fragment has long single-stranded overhangs at each end.

**Beta** — and Beta is the star of this story, so pay attention — is a single-strand DNA annealing protein. Once Exo has exposed those single-stranded tails, Beta coats them. Beta wraps itself around single-stranded DNA, protecting it from cellular nucleases and, crucially, helping it find its complementary partner elsewhere in the cell. If there is a single-stranded region on the chromosome — say, at a replication fork — that happens to have a sequence complementary to the Beta-coated tail, Beta drives those two single strands to anneal. They zip together. Two single strands become a double strand. The piece of DNA you handed the cell has now hooked itself onto the chromosome by base-pairing.

**Gam** is the bodyguard. Gam does not directly handle the foreign DNA at all. What it does is inhibit a host enzyme called **RecBCD**, which is the cell's main exonuclease for destroying linear DNA. Without Gam, RecBCD would chew up your linear fragment as soon as it entered the cell, before Exo had a chance to do anything productive with it. Gam blocks RecBCD. It keeps the linear DNA intact long enough for Exo and Beta to use it.

\[Pause.\]

So here is the choreography. You electroporate a linear piece of DNA into a cell that is expressing Gam, Beta, and Exo. Gam holds off the cell's nucleases. Exo grabs the ends of your linear DNA and chews back to expose single-stranded tails. Beta coats those tails, then drives them to anneal to complementary sequences somewhere on the chromosome. If the homology arms on your fragment match a particular spot on the chromosome, that is exactly where the annealing will happen. The cell's own replication and repair machinery finishes the job — extending, ligating, resolving — and at the end, your fragment has been seamlessly incorporated into the chromosome at the spot you chose. The whole thing takes minutes inside the cell.

That is lambda Red recombination. That is the engine. Three proteins, hijacked from a phage, used as a programmable editor. The phage uses them naturally to manage its own DNA. We have repurposed them to manage ours.

And here is the thing I want you to feel about lambda Red — it is the phage's own molecular Velcro, hijacked. Lambda evolved these proteins for its own reasons, to manage its own genome inside a host cell. We are using them the way you might use a Swiss Army knife you found in your kitchen — the original owner had a particular use in mind, but the tool is so well-designed and so general-purpose that you can take it for completely different jobs. That is what biology does to us all the time. Evolution builds a thing, and we figure out it does something else that is, from our point of view, even more interesting.

---

## SEGMENT 4 — Beta, the central player

I want to spend a whole segment on Beta, because Beta is the protein that does the conceptually critical work in recombineering, and it is the protein whose discovery turned the technique from an interesting bacteriology curiosity into a general-purpose engineering tool.

Beta is a small protein — about two hundred and sixty amino acids, in the case of lambda. Its job description is one sentence long: **bind single-stranded DNA and help it anneal to its complement.** That is it. It does not cut DNA. It does not synthesize DNA. It does not move along DNA in any particular direction. It is a chaperone. A matchmaker. A helper that takes single-stranded DNA and helps it find the other half of a base-paired partnership it could form somewhere else.

The picture I want you to have in your head is Beta forming a long protein filament along single-stranded DNA. Imagine the single strand of DNA as a string of beads. Beta proteins clump along that string, coating it like a sleeve. The coated string is protected from cellular nucleases — it cannot be chewed up while Beta is wrapped around it. The coated string is also displayed in a particular geometry that makes the bases readily available for pairing. When the coated single strand drifts near a complementary single strand somewhere — at a replication fork, at a damage site, at any spot where double-stranded DNA has been temporarily opened up — Beta catalyzes the pairing event. The two strands zip together. Beta releases. You have a new double helix.

\[Pause.\]

Now here is the conceptual move that took the field a while to make, and it is the move that defines modern recombineering. For a long time, people assumed that recombineering required double-stranded DNA fragments — that you needed all three Red proteins, you needed Exo to chew back the ends, and you needed Beta to anneal the resulting single strands. The standard experiment was: PCR-amplify a double-stranded cassette with homology arms, electroporate, let Exo and Beta do their work.

But sometime in the late 1990s and early 2000s, in a series of papers from Don Court's lab and from Hong Min Kim's lab and from others, an extraordinary fact became clear. If you electroporate not a double-stranded cassette but a single-stranded **oligonucleotide** — just a single strand of DNA, eighty to ninety bases long — and the cell is expressing Beta — just Beta, not necessarily Gam or Exo — that oligo can recombine into the chromosome efficiently. Beta alone, with a single-stranded substrate, was enough to drive recombination.

Stop and think about what that means. It means the rate-limiting step of recombination is the annealing step — getting one strand of DNA to find and pair with its complement on the chromosome. It means that if you can deliver a single-stranded DNA molecule directly, you can skip the Exo step entirely. It means that an oligonucleotide ordered from a commercial vendor — synthesized chemically, eighty bases long, costing five dollars — can be used to edit a bacterial chromosome at a single nucleotide of your choosing. No PCR. No cassette. No selectable marker, even, in the simplest version. One oligo. One edit.

This is why Beta is the central player. The whole technology eventually built around the realization that Beta-plus-oligo was the minimum viable recombineering reaction. And once you have that minimum, you can scale it. You can do it dozens of times. You can do it at dozens of sites in parallel. You can build machines around it. That single-strand annealing capability — Beta loading onto a single-strand and driving it to find its complement on the chromosome — is the molecular foundation of MAGE, of TRACE, of recoded organisms, of every high-throughput recombineering platform we will meet later in this lecture. It all sits on Beta.

\[Pause.\]

Mechanistically, why does an oligo find its target? This is where it gets even more elegant. The leading model is that Beta-coated oligos preferentially anneal to single-stranded regions at the lagging strand of the replication fork. As the cell is replicating its chromosome, there is always a window — a small stretch of single-stranded DNA exposed during replication on the lagging strand. Your Beta-coated oligo, drifting around, eventually encounters such a window. If its sequence matches that stretch of single-stranded chromosome, Beta drives them to anneal. When the next round of replication comes along, it copies the oligo as part of the strand — and now the edit is encoded permanently, in double-stranded form, in the chromosome.

That is why recombineering efficiency depends on the cell being in active growth — it depends on the replication forks being active. That is why you do recombineering with cells that are growing exponentially, harvested in mid-log phase, kept happy and dividing. You are trying to catch as many replication forks as possible with as many Beta-coated oligos as possible.

So Beta does single-strand annealing. Exo prepares single strands from a double-stranded substrate. Gam protects everything from the cell's normal nucleases. Together they are the lambda Red system. But Beta is the brain.

---

## SEGMENT 5 — Don Court and the development of the system

Let me take a step back from the molecules for a few minutes and tell you the human story of how this technology came to exist, because it is a story worth knowing and because it is unusually traceable to one place and one group of people.

The hero of this story is a scientist named **Donald Court** — usually called Don Court — who spent most of his career at the National Cancer Institute in Frederick, Maryland. NCI Frederick is a strange and wonderful place. It is not Harvard or MIT or Stanford; it does not have the same visibility. It is a federal lab, attached to the National Institutes of Health, doing solid, careful, long-arc science of the kind that does not always make headlines but quietly underpins enormous swaths of modern biology. Don Court worked there for decades, and his lab worked on lambda. Just lambda. The basic biology of lambda phage, year after year, paper after paper. To an outsider it might have looked like a backwater. To insiders, it was one of the most productive labs in molecular genetics.

Through the 1990s, Court's lab — and a closely allied group led by **Francis Stewart** in Europe, and another led by **Neal Copeland** and **Nancy Jenkins** in the United States — started realizing that the lambda Red proteins could be turned into general-purpose tools. They had spent years figuring out what these proteins did in their natural context, mapping out exactly how lambda used them to manage its own DNA. As they figured out the molecular details, they kept noticing that the proteins were doing exactly the kind of operation a researcher might want to do — taking a piece of foreign DNA with matching ends and inserting it into a specific location.

So they started doing the experiments. What happens if we put the Red genes onto a plasmid in _E. coli_, drive expression of them, and then electroporate a linear DNA fragment with homology arms? Does the fragment go where the arms tell it to go? Yes. How efficient is it? Surprisingly efficient — orders of magnitude better than the cell's native recombination machinery. How long do the homology arms need to be? It turns out forty or fifty base pairs of homology is enough — short enough that you can put the homology arm right onto a PCR primer. How about double-stranded versus single-stranded substrates? Both work. How big can the insert be? You can get up to several kilobases easily, and with care, much larger.

\[Pause.\]

The 1998 paper from Court's group — Yu, Ellis, Lee, Jenkins, Copeland, and Court, in the Proceedings of the National Academy of Sciences — is in some sense the founding document of the field. They showed that they could use the lambda Red system to do efficient targeted insertions into the _E. coli_ chromosome, using linear PCR products with short homology arms. That paper basically launched the technique. Within a couple of years, related groups had extended it to BACs — bacterial artificial chromosomes, those huge plasmids that carry hundreds of kilobases of mammalian DNA. Within a few more years, it had become a standard toolbox.

The naming is its own little story. The term **recombineering** is a portmanteau of "recombination" and "engineering," and it was coined by, depending on who you ask, either Court's group or Copeland's group, around the year 2000. I have seen the credit assigned both ways in different review articles. It does not really matter; both labs were collaborating, and the name captures the spirit perfectly. It is recombination, turned into an engineering tool.

One of the things I love about Don Court as a scientific figure is that he stayed in the basic biology lane. He never tried to spin out a company, never went on a press tour, never sought publicity. He kept working on lambda. He kept improving the techniques. He kept training students and postdocs who fanned out into other labs and other applications. His lab was, for about twenty years, the de facto headquarters of recombineering — the place where the cleanest, best-characterized strains were maintained, where the standard plasmids were distributed, where new variants got rigorously tested before being released to the community.

You can still find Don Court's recombineering strains in the standard repositories. They are still in use. Strains with names like SW102, SW105, SW106 — distributed by NCI, maintained over decades, the workhorses of BAC modification for mouse genetics. If you ever do recombineering yourself, you will almost certainly use a strain that traces directly back to Don Court's freezer at NCI Frederick.

\[Pause.\]

There is something quietly inspiring about the way this technology was developed. It was not a Nobel-Prize-winning eureka moment. It was twenty years of careful biology — figuring out exactly what lambda phage does to manage its DNA, characterizing each protein, building tools, refining strains, distributing them freely to anyone who asked. It is a model of how good scientific infrastructure gets built. Not by one heroic invention, but by patient accumulation of understanding, generous sharing of materials, and gradual translation from basic science to practical tool.

Don Court died in 2016. By then, his technique had quietly entered tens of thousands of laboratories, had been used to build everything from mouse models of human disease to the first genomically recoded organisms, and had become a standard chapter in molecular biology textbooks. He was not famous outside the field. Inside it, his impact was enormous.

---

## SEGMENT 6 — The typical experiment, step by step

Now let me walk you through what a typical recombineering experiment actually looks like, so you have a concrete picture of how the pieces fit together. Pretend you are the graduate student. Your goal: replace the gene _lacZ_ in the _E. coli_ chromosome with a kanamycin resistance cassette. Why? Because it is the canonical first experiment — _lacZ_ is famous, kanamycin selection is easy, and you want to learn the technique on something where success is unambiguous.

Step one: design your homology arms. You look up the sequence of the _lacZ_ gene in the _E. coli_ chromosome. You pick fifty base pairs immediately upstream of the gene — call that **arm A**. You pick fifty base pairs immediately downstream — call that **arm B**. These are your sticky notes. They say: "paste me HERE."

Step two: design your primers. You order two PCR primers. The forward primer consists of arm A — those fifty bases — followed by twenty bases matching the beginning of the kanamycin resistance cassette you plan to amplify. The reverse primer consists of arm B — fifty bases — followed by twenty bases matching the end of the kanamycin cassette. So each primer is about seventy bases long. The fifty-base homology section is what is going to drive integration. The twenty-base section is what allows the primer to anneal to your template and amplify.

Step three: do the PCR. Your template is a plasmid that contains a clean kanamycin resistance cassette flanked by appropriate features. You set up a PCR reaction with your two long primers and the plasmid template. The PCR product comes out as a linear, double-stranded DNA fragment about twelve hundred base pairs long, with arm A on one end, the kanamycin cassette in the middle, and arm B on the other end. You purify it. Clean it up. Run a small amount on a gel to confirm it is the right size.

\[Pause.\]

Step four: prepare your recombineering-competent cells. This is where the Red proteins come in. You have a strain of _E. coli_ that carries the lambda Red genes — _gam_, _bet_, _exo_ — on a plasmid or integrated into the chromosome, under control of an inducible promoter. The classic systems use a temperature-sensitive promoter, so the Red genes are silent at thirty degrees Celsius and turn on when you shift to forty-two degrees for fifteen minutes. Other systems use a chemical inducer like arabinose. The important point is: the Red genes are off most of the time, and you turn them on briefly, right before doing the recombineering, so the cell makes a burst of Red proteins.

So you grow your cells overnight at thirty degrees. Next morning, you dilute them into fresh medium, grow them until they hit mid-log phase. Then you shift them to forty-two degrees for fifteen minutes, inducing Red expression. Then you chill them on ice — quickly — and wash them several times in cold water, to make them electroporation-competent. By the end of step four, you have a pellet of cells that are full of Red proteins and ready to take up DNA.

Step five: electroporate. You mix your PCR product — a few hundred nanograms of it — with the cell pellet. You pipette the mixture into a cold electroporation cuvette. You apply a high-voltage pulse — usually about eighteen hundred volts for one millisecond. The pulse temporarily opens up the bacterial membrane, and your DNA fragment enters the cell. Inside the cell, Gam blocks RecBCD, Exo chews back the ends to expose single strands, Beta coats the single strands and drives them to anneal to the matching sequences in the chromosome. The kanamycin cassette gets pasted in, replacing the _lacZ_ gene.

Step six: recover and select. You add fresh medium and let the cells recover for one to two hours at thirty-seven degrees. During this recovery period, the cells that successfully integrated the cassette start expressing the kanamycin resistance gene. Then you plate the cells on agar containing kanamycin. Only cells that integrated the cassette can grow. Anything that did not integrate is killed by the kanamycin. The next morning, you come back to colonies on a plate.

Step seven: verify. You pick a few colonies. You do a colony PCR with primers that flank the integration site — primers that sit outside arm A and outside arm B. If the integration worked, the PCR product will be the size of arm-plus-cassette-plus-arm. If it did not work, you would get either no product or a wild-type-sized product. You confirm by sequencing.

\[Pause.\]

That is it. That is the whole protocol. From design to verified clone, it takes about a week, and most of that week is just waiting for cells to grow. The actual hands-on time is maybe a day spread across the week. Compare that to the multi-week or multi-month traditional cloning protocol we discussed earlier. This is what recombineering bought you. It collapsed weeks of work into days.

A few practical notes to make this real. First, the homology arms need to be long enough to drive efficient recombination — forty to fifty base pairs is the standard, though some applications use longer arms for difficult targets. Second, the selectable marker is essential in most cases, because the recombineering event is rare enough — maybe one cell in ten thousand to one in a million — that you need a way to enrich for the ones that worked. Third, the homology arms need to be _perfect_ matches to the chromosome. A single mismatch reduces efficiency dramatically. So before designing, you sequence your strain to make sure you know exactly what the local sequence is. Strain differences matter.

Fourth — and this is something every recombineering experimentalist learns the hard way — your PCR product needs to be _free of template_. If any of the parental plasmid you used as PCR template gets carried over into your electroporation, that plasmid will transform into the cell and give you false positive colonies that contain the plasmid instead of an integration event. You guard against this with careful gel purification or with template-degrading treatments before electroporation.

So that is the typical experiment. Let us scale up.

---

## SEGMENT 7 — BAC recombineering and the mouse genetics revolution

Now let me take you into one of the killer applications of recombineering, the application that brought the technique into thousands of labs in the early 2000s. **BAC recombineering.** BAC stands for **bacterial artificial chromosome**, and BACs are large plasmids — really large — that can carry segments of foreign DNA up to about three hundred kilobases in length. To put that in perspective, a typical mammalian gene plus all of its regulatory regions and a generous amount of flanking sequence fits comfortably on a BAC. So BACs are the workhorses of mammalian genomics. They are how you take a piece of mouse or human DNA, propagate it stably in _E. coli_, and then deliver it back into mammalian cells.

Here is the problem BACs created in the early 1990s. Genomics centers had finished cloning the mouse genome and the human genome into BACs, and now there were thousands of BAC libraries floating around containing every imaginable piece of mammalian DNA. Researchers wanted to modify those BACs — insert a reporter gene in a specific exon, add a tag to a particular protein, knock out a particular regulatory element — and then use the modified BAC to make a mouse model. The problem was: how do you do precise edits in a piece of DNA that is two hundred thousand base pairs long? Restriction enzymes? Forget it — at that size, almost every six-base recognition site appears at least once in your BAC, often dozens of times. You cannot do a clean restriction-and-ligation cloning into a BAC. The whole strategy collapses.

This is where recombineering came in like a savior. Don Court's group and, in parallel, Neal Copeland and Nancy Jenkins's group at NCI Frederick — yes, same place, separate floor — developed a complete workflow for modifying BACs using lambda Red. The Copeland and Jenkins workflow became especially influential because they paired it with mouse genetics — they were not just developing a cloning technique, they were building a pipeline for making genetically engineered mouse models, end to end, from sequence to mouse.

\[Pause.\]

Here is how a BAC recombineering experiment works. You have a BAC carrying, say, a two hundred kilobase region of the mouse genome that includes your favorite gene plus all of its regulatory DNA. The BAC is propagating happily in an _E. coli_ strain. To modify it, you transform the BAC into a recombineering-competent _E. coli_ strain — one of the Court lab strains, SW102 or SW105 or SW106 — that carries the lambda Red genes under temperature-sensitive control. Now you have a strain that contains both your BAC and the Red machinery.

Then you do exactly the recombineering experiment we walked through in the last segment, but the target is your BAC rather than the bacterial chromosome. You design primers with fifty-base-pair homology arms matching the spot on the BAC where you want to make your edit. You PCR-amplify a cassette — typically a reporter gene plus a selectable marker, like GFP plus kanamycin resistance — with those homology arms tacked on the ends. You induce Red expression by temperature shift. You electroporate. You select on kanamycin. Two days later, you have colonies that contain a BAC with your modification at the precise spot you targeted.

This is enormously powerful. You can take any BAC, put any modification anywhere on it, and get it cleanly engineered in a week. Compared to traditional methods, which were essentially impossible for many BAC modifications, this was magic.

\[Pause.\]

And then the workflow extends beyond the bacterial step. Once you have your modified BAC in _E. coli_, you do a big maxi-prep to isolate a lot of clean BAC DNA. You take that DNA — usually as a long linear fragment, after cutting it out of the BAC backbone — and you electroporate it or microinject it into mouse embryonic stem cells. The mouse ES cells take up the DNA, and a small fraction of them integrate it into their genome, typically by random integration. You select the integrated ES cells, inject them into mouse blastocysts, and breed up a mouse line that carries your engineered piece of DNA. Now you have a mouse expressing your modified gene with all its native regulatory context, because you brought the whole BAC along.

This workflow — recombineer the BAC, deliver into ES cells, breed up a mouse — was one of the dominant methods of making mouse models from about 2000 until CRISPR took over in the late 2010s. Thousands of mouse lines that the medical research community still uses today were built this way. Mouse models of cancer, of neurodegeneration, of cardiovascular disease, of metabolism — all built by recombineering modifications into BACs and delivering those BACs into mouse genetics pipelines.

The Copeland and Jenkins lab published a beautiful series of papers and protocols describing the whole pipeline, and their distributed strains and plasmids — the SW series of _E. coli_ strains, the various selectable cassette templates — became standard equipment in any lab doing mouse genetics. If you have read any mouse genetics paper from 2005 to 2015 that involves a BAC transgene, you have read a paper that almost certainly used recombineering, somewhere in its methods.

\[Pause.\]

There is a deep lesson here about how scientific tools spread. A technique developed for editing bacterial chromosomes — a fundamentally microbiological tool — ended up transforming mouse genetics, which is a fundamentally mammalian-biology field. The technology did not stay in its origin domain. It crossed the species boundary, because the bacteria were just hosts for the modifications, and the modifications got transplanted into mice. That kind of crossover is incredibly common in biology, and recombineering is one of the cleanest examples. Lambda phage proteins, used to edit pieces of mouse genome carried inside _E. coli_, ending up as components of mice that model human disease. There is a chain of borrowed biology here that I find genuinely beautiful.

---

## SEGMENT 8 — Scarless recombineering and counter-selection

Now I want to deal with one of the inelegant aspects of the basic recombineering workflow, and how it got fixed. The problem is this. When you do a typical recombineering experiment, you insert a selectable marker — a kanamycin resistance gene, say — at your target site. The marker is essential, because you need to select for the rare cells that did integration. But once the integration is done, you do not necessarily want the marker to be there. It is, in a sense, a scar. It is extra DNA you left behind that you did not really want — useful for selection, but not part of the actual edit you cared about. And if you want to do a second round of recombineering at a different site, you cannot use the same marker again, because every cell already has it.

So the question becomes: how do you select for an integration event, get a clean clone, and then **remove** the marker afterward, leaving only your intended edit behind? This is called **scarless recombineering** or **markerless recombineering**, and the trick that solves it is called **counter-selection**.

The basic idea of counter-selection is beautifully symmetric. First, you select FOR the marker — you put cells on a plate where only cells with the marker can grow. Then, in a second step, you select AGAINST the marker — you put cells on a plate where only cells _without_ the marker can grow. The first step finds the rare integration events. The second step finds the rare loss-of-marker events. By doing both in sequence, you get a clean clone where the marker is gone.

For this to work, you need a marker that supports both kinds of selection — positive selection for its presence, negative selection against its presence. And there are a few such markers in common use, each with a different mechanism.

\[Pause.\]

The first counter-selection marker most people learn about is **SacB**. SacB is a gene from _Bacillus subtilis_ that encodes an enzyme called levansucrase. Levansucrase polymerizes sucrose into long chains called levans. If you grow _E. coli_ expressing SacB on a medium containing sucrose, the cell makes levans, the levans accumulate, and the cell dies. So SacB is lethal in the presence of sucrose. That is your counter-selection. Cells with SacB die on sucrose; cells without SacB live.

To use SacB for scarless recombineering, you pair it with a normal positive marker like kanamycin resistance. You make a cassette that contains both: kan-plus-SacB, flanked by your homology arms. First round: electroporate the kan-SacB cassette into your strain, select on kanamycin, get colonies that have integrated the cassette. Now you have your edit in place, but with the marker as a scar.

Second round: design a second, scarless replacement cassette. This time it is just your desired final sequence — say, the wild-type sequence with a specific point mutation — flanked by the same homology arms. No kan, no SacB. You electroporate this second cassette into your colonies. The lambda Red machinery replaces the kan-SacB cassette with your scarless replacement. Now you select on sucrose. Only cells that successfully replaced the kan-SacB are now alive, because cells with SacB still in their chromosome die on sucrose. The survivors are your clean, scarless clones.

That is counter-selection. First you select for the marker. Then you select against it. The marker is gone in the final clone, replaced by exactly the edit you wanted, no extra baggage.

\[Pause.\]

There are several other counter-selection systems in common use. **CcdB** is a toxin from a plasmid called F that poisons DNA gyrase, an essential cellular enzyme. CcdB-expressing cells die unless they have a counter-toxin. So expressing CcdB is lethal in normal cells, which means you can use it as a counter-selection marker: cells without CcdB live, cells with CcdB die.

**GalK** is a particularly elegant counter-selection used in BAC recombineering. GalK encodes galactokinase, an enzyme in the galactose metabolism pathway. In a _galK_-deletion strain, expressing GalK from a plasmid or chromosome allows the cell to grow on galactose as a carbon source — that is positive selection. But GalK also makes the cell sensitive to a sugar analog called 2-deoxy-galactose, because the enzyme converts the analog into a toxic compound. So in the same strain, cells with GalK die on 2-deoxy-galactose. Same gene, two selections — first you select for it on galactose, then you select against it on the analog. The Copeland lab used this brilliantly for BAC modification.

\[Pause.\]

Counter-selection is the scar removal step. First you select FOR the marker, then you select AGAINST it, leaving only the desired edit. Once you internalize that two-step structure, a lot of advanced recombineering protocols suddenly make sense. The basic insight is that recombineering events are rare, so you need selection to find them — but if you want a clean final product, you need a way to get rid of the selection apparatus afterward. Counter-selection provides exactly that bidirectional capability.

The combined toolkit — recombineering plus counter-selection — turned out to be powerful enough that whole genomes have been modified, gene by gene, using it. Recoded organisms, which we will get to in a few segments, are built by applying scarless recombineering at hundreds of sites across the genome. Without counter-selection, that would be impossible. Each round of editing would leave another marker behind, until the chromosome was unrecognizable. With counter-selection, each round leaves only the intended edit, and the next round can proceed cleanly.

---

## SEGMENT 9 — Single-stranded oligo recombineering

We are getting close to the break, but I want to introduce one more concept before we get there, because it is the technical leap that enables everything we are going to talk about in the second half of the lecture. It is **single-stranded oligonucleotide recombineering**. Sometimes called **oligo recombineering**, sometimes **ssDNA recombineering**. The smallest possible recombineering reaction. One oligo, one edit.

Remember from Segment 4 that Beta is a single-strand annealing protein. Beta does not strictly need Exo or Gam to work — given a single-stranded DNA substrate, Beta alone can drive that substrate to anneal to its complement on the chromosome. This is the foundational observation that makes single-stranded oligo recombineering possible.

So here is the setup. You have a strain of _E. coli_ expressing lambda Red — usually all three Red proteins are present, though Beta is the critical one. You order, from a commercial oligonucleotide vendor, a single-stranded DNA oligo about ninety bases long. The middle of the oligo contains the edit you want to make — say, a single nucleotide change, or a small insertion, or a small deletion. The flanking sequences on either side of the edit match the chromosome exactly. So the oligo looks like: forty-five bases of matching sequence, then your edit, then forty-five bases of matching sequence. Ninety bases total.

You electroporate this oligo into your Red-expressing strain. Beta coats the oligo. The Beta-coated oligo drifts around inside the cell until it finds a replication fork where the matching sequence is exposed as single-stranded DNA on the lagging strand. The oligo anneals, the cell extends and ligates, the next round of replication incorporates the edit into the daughter chromosome. Done. One base of the chromosome has been changed.

\[Pause.\]

Now think about how radical this is compared to traditional cloning. The total mass of DNA you delivered is tiny — a few hundred nanograms of oligo, which is something like ten to the eleven molecules, in a cell suspension of a few times ten to the nine cells. The edit it makes is precise to the single nucleotide. There is no cassette, no marker, no PCR product, no plasmid. Just an oligo. And the efficiency, surprisingly, is not bad — in a well-optimized recombineering strain, you can get a few percent of cells with the desired edit, sometimes higher. Without any selection at all, you can find your edit by colony PCR and sequencing.

This is the smallest possible edit. One 80-nt oligo, one base change. And it scales beautifully. If you want to make ten edits at ten different sites in your bacterial chromosome, you can in principle electroporate ten different oligos at once, each carrying a different edit. Some fraction of cells will get one edit. A smaller fraction will get two. A smaller fraction yet will get three, and so on. With multiple rounds of electroporation and a willingness to screen, you can drive a cell to homozygosity at many sites — meaning all the copies of the chromosome (since _E. coli_ has more than one during fast growth) carry all the edits.

And when you turn this into a robotic, automated, high-throughput process — which is what George Church's lab did, and what we are going to talk about right after the break — you get MAGE. Multiplex automated genome engineering. The recombineering robot.

\[Pause.\]

There is one more subtlety to oligo recombineering that I want to mention before the break, because it determines a lot of the design strategy. The cell's **mismatch repair** machinery is constantly scanning DNA for mismatches and correcting them. When your Beta-coated oligo anneals to the chromosome, the edit you have introduced creates a mismatch — your oligo has one base, the chromosomal strand has a different base. Mismatch repair sees this and, more often than not, "corrects" the mismatch by removing your edit and restoring the original sequence. So you get an annealing event that goes nowhere, because the cell's repair machinery undoes it.

There are two ways around this. The first is to do your recombineering in a mismatch-repair-deficient strain — a strain where the _mutS_ gene or related genes have been knocked out. This dramatically increases efficiency, often by factors of ten to a hundred. The downside is that mismatch-repair-deficient strains accumulate background mutations everywhere, so you need to clean up after the experiment. The second way is to design your oligos to evade mismatch repair — for example, by introducing changes that the repair machinery is less efficient at detecting, like mismatches involving the bases C-C, which are poorly recognized. People have made an art out of designing recombineering oligos to maximize the chance the edit survives the cell's natural repair.

This is the kind of mechanistic detail that turns recombineering from a black-box protocol into something you can really tune. When you understand why a particular oligo design works better than another, you can rationally improve your experiments. And that mechanistic depth is exactly what the technique needs to support the high-throughput, multi-site applications we are going to dive into next.

\[Pause.\]

Alright. We are nine segments in, we have built up from the basic biology of lambda phage all the way to single-stranded oligo recombineering, and you should now have a solid intuitive picture of what recombineering is and how it works. We are about to get into the more exotic applications — MAGE, TRACE, recoded organisms, the synergy with CRISPR — and we will need everything we have built up so far. Take five.

\[BREAK\]

---

## SEGMENT 10 — MAGE: Multiplex Automated Genome Engineering

Alright, welcome back. For the second half of the lecture we are going to leave the world of single-clone experiments and go into the world of high-throughput, multi-site, automated recombineering. The first stop on that tour is **MAGE** — Multiplex Automated Genome Engineering — which is one of the most ambitious applications of recombineering ever built, and the one that arguably brought the technique into modern synthetic biology.

MAGE was developed in George Church's lab at Harvard around 2009, with the lead author being a graduate student named Harris Wang. The paper, published in _Nature_ in 2009, has a delicious title — something like "Programming cells by multiplex genome engineering and accelerated evolution" — and it described a machine and a protocol that let you do what would otherwise have been preposterous. It let you edit dozens of sites in the _E. coli_ chromosome, simultaneously, in parallel, in a matter of days.

Here is the core idea. Recombineering with single-stranded oligos is the basic move. We covered that before the break. Each oligo can introduce one edit at one site. In a single round of electroporation, a cell can pick up multiple oligos simultaneously, and some cells will integrate edits at multiple sites at once. The probability of any one cell getting all the edits you want, in one round, is low. But if you do many rounds — twenty, thirty, fifty rounds of electroporation, each with all your oligos in the mix — then you can drive the cell population toward higher and higher numbers of integrated edits. Each round, more cells acquire more edits. Eventually, with enough rounds, you can get a substantial fraction of the population to carry all of your desired edits.

The catch is that doing fifty rounds of electroporation by hand would be insane. Each round requires growing cells, inducing Red expression, washing the cells, electroporating them, letting them recover. That is most of a day of bench work per round. Fifty rounds is fifty days. That is a year of effort, full-time, just doing the same protocol over and over.

So Harris Wang built a machine. A liquid-handling robot with a built-in electroporator, an incubator, and an automated washing system. You load your strain, your oligos, and your reagents. The machine runs the recombineering cycle, automatically, on a timer. Grow, induce, wash, electroporate, recover, grow, induce, wash, electroporate, recover. Around the clock. The machine could do a round every two and a half hours. You could do thirty rounds in three days.

\[Pause.\]

This is the recombineering robot. MAGE is, mechanically, just automated recombineering, scaled up. But the consequences of that scale-up are profound. Suddenly you can do edits that would have been hopeless by hand. You can take a strain of _E. coli_ and try, simultaneously, to make changes at dozens of sites across the genome. Each oligo in your mix targets a different site. Each round of MAGE rolls the dice at all those sites. After enough rounds, you have driven the population to homozygosity — every chromosome, in every cell, carries every edit — at many sites at once.

What can you do with that? An enormous range of things. The first MAGE paper demonstrated the technique by optimizing _E. coli_ for production of a small molecule called lycopene — the pigment that makes tomatoes red. Lycopene production in _E. coli_ depends on a whole metabolic pathway with many genes. You can imagine that, for each gene in the pathway, there is some optimal expression level. Too little of the gene, the pathway is bottlenecked. Too much, the cell wastes resources. The Church lab designed MAGE oligos that targeted the ribosome binding sites of each pathway gene, introducing variations that would tune each gene's expression up or down. They ran MAGE for many rounds, generating a library of strains with different combinations of expression-tuning edits, and then they selected for strains that made the most lycopene.

In a few days, MAGE generated billions of unique strain variants and found ones that produced five-fold more lycopene than the starting strain. That is what MAGE bought you — a way to explore an enormous combinatorial space of edits, far faster than you could otherwise. Compared to picking one strain, evaluating it, and iterating, MAGE lets you do the iteration at the scale of the cell population, in days instead of months.

\[Pause.\]

The mental model I want you to have for MAGE is this: **MAGE is the recombineering robot. It does in a day what would take a grad student a year, running the same edit cycle thirty times to drive a multi-site change to homozygosity.** That is the punchline. It is automated recombineering, multiplexed across many sites, repeated many cycles, used either to make a specific designed strain — many edits, all defined — or to make a library of variants — many edits, randomly combined, ready for selection.

The applications of MAGE have included not just metabolic engineering for chemical production, but also fundamental studies of how the genetic code works, optimization of strains for protein production, and — most ambitiously — the recoding of entire bacterial genomes, which we will come to in a few segments. Whenever a synthetic biologist needs to make many edits across an _E. coli_ chromosome, MAGE is one of the first tools they reach for.

And here is the thing about MAGE that I want to emphasize. Underneath, it is still recombineering. Still Beta. Still oligos. Still annealing at replication forks. The molecular biology is the same as what Don Court was characterizing at NCI Frederick. MAGE just industrialized it. Took the basic reaction, automated the cycle, and multiplexed across sites. That kind of layering — basic biology, then engineering automation — is how genome editing scales up in the modern era.

---

## SEGMENT 11 — TRACE, TRMR, and barcoded recombineering for screens

If MAGE is automated recombineering for making strains, then **TRACE** and **TRMR** are barcoded recombineering for screening many constructs in parallel. These are technologies that I find a little less famous than MAGE but conceptually really important, because they show how recombineering can be combined with modern DNA sequencing to do massively parallel genetic screens.

The acronyms are not friendly, so let me spell them out. **TRMR** is **Trackable Multiplex Recombineering**. **TRACE** is **Trackable Recombineering Allele Cataloging in _Escherichia coli_**. Both names are stretching for memorability. The underlying idea is the same in both: you do recombineering with a large library of oligos, each oligo carrying both an edit and a unique DNA barcode that identifies which edit it is, and then you use deep sequencing to read out, in one experiment, the fitness or behavior of every variant in the library at once.

Let me make this concrete. Suppose you want to ask: of all the genes in _E. coli_, which ones, when their expression is increased, make the cell grow better on a particular medium? Conventionally, you would have to overexpress each gene one by one, in separate strains, and measure growth one by one. That is, what, four thousand genes? Four thousand experiments? Impossible.

With TRMR, you design a library of oligos. Each oligo, when integrated by recombineering, modifies the promoter of one specific gene to increase its expression. And each oligo also installs a unique short DNA barcode somewhere nearby, so you can later identify which gene was modified. You pool all these oligos into one mix. You do recombineering on a big batch of cells, all at once. Now you have a library of cells, each cell carrying a modification at a different gene, each tagged with the barcode that says which gene was modified.

Then you grow this library under whatever selective condition you care about — high salt, low nutrient, antibiotic, whatever. Some cells grow well, some grow poorly. You harvest the surviving population. You sequence the barcode region from all the surviving cells. The barcodes tell you which cells did well. The frequency of each barcode in the surviving population tells you the relative fitness of the corresponding modification.

In one experiment, in one tube, you have measured the fitness effect of overexpressing every gene in the genome. That is what barcoded recombineering buys you. The screening is parallel at the scale of the entire library, and the readout is a single sequencing run.

\[Pause.\]

This kind of trick — pool a library, apply selection, sequence the barcodes — has become standard in modern functional genomics. CRISPR libraries do something similar with guide RNA barcodes, and we are now used to thinking of pooled screens as the way to do high-throughput biology. But the recombineering versions were among the first to demonstrate the approach. They pioneered the idea that you could do thousands of genetic modifications in a single test tube, track each one with a barcode, and read out the answers by sequencing.

There is a beautiful efficiency here. You do one round of recombineering with a complex pool of oligos. You get a population of cells, where each cell carries one edit from the pool plus a barcode that identifies that edit. You can then apply this single library to many different conditions in parallel — same library, different selections — and read out fitness across all conditions with sequencing. The library is the asset; the experiments are cheap.

Recombineering's role in this is that it is the molecular technique that creates the library. CRISPR can also create such libraries, in a different way, by knocking out genes. Recombineering creates libraries by precisely modifying sequences — promoters, ribosome binding sites, coding regions — with single-nucleotide accuracy. Both have a place. For modifications that are not knockouts — point mutations, expression tuning, fine-grained edits — recombineering is often the cleaner choice. For knockouts of entire genes, CRISPR is usually easier. The barcoded screening framework works either way.

---

## SEGMENT 12 — Lambda Red beyond _E. coli_, and RecET as an alternative

Recombineering is, fundamentally, an _E. coli_ technology. Lambda phage evolved to infect _E. coli_; the Red proteins are tuned to work in the _E. coli_ cellular environment; the standard strains, plasmids, and protocols are all _E. coli_-centric. That is both the technique's strength and its biggest limitation. _E. coli_ is the workhorse of molecular biology, so for many applications that is enough. But what if you want to do recombineering in a different bacterium?

The answer is: sometimes you can, sometimes you cannot, and there has been a long, partly-successful effort to extend lambda Red recombineering to other species.

The closest relatives of _E. coli_ — bacteria like _Salmonella_ and _Shigella_ — are pretty cooperative. Lambda phage can infect them naturally in some cases, and the Red proteins work reasonably well in their cytoplasm. So recombineering protocols originally developed for _E. coli_ have been adapted, with modest modifications, for _Salmonella_ and a few other enterobacteria. You can do gene knockouts in _Salmonella_ using Red, you can modify chromosomes in _Yersinia_ pseudotuberculosis using Red. The molecular biology carries over.

But the further you get from _E. coli_, the harder it gets. In bacteria like _Pseudomonas_ or _Bacillus_ or _Mycobacterium_, the Red proteins do not work as well — either because they fold improperly, or because the host's recombination and repair machinery is too different, or because the host's nucleases destroy the substrate DNA before Beta can do anything with it. You can sometimes coax some efficiency out of the system with a lot of optimization, but you do not get the same level of robustness you get in _E. coli_.

\[Pause.\]

This led people to look for alternative recombination systems — phage-derived recombineering components from other phages, optimized for other hosts. The most successful alternative is **RecET**, which comes from a cryptic prophage in _E. coli_ called the **Rac** prophage. RecET is the equivalent of the lambda Red Exo and Beta — RecE chews back double-stranded DNA from one end to expose single-stranded tails, like lambda Exo. RecT coats single-stranded DNA and drives annealing, like lambda Beta. The two systems are functionally analogous but evolutionarily distinct. RecET works in _E. coli_ in a way that is qualitatively similar to Red, but with somewhat different efficiency for different kinds of substrates.

For certain applications — particularly very large insertions and direct cloning of large DNA fragments from genomes — RecET turns out to be better than Red. There is a beautiful technique called **ExoCET** developed by Francis Stewart's lab that uses RecET to directly clone enormous fragments — hundreds of kilobases — from genomic DNA into vectors, using only short homology arms on the vector. This kind of direct cloning is hard or impossible with lambda Red, but RecET pulls it off because of the specifics of how it handles double-stranded substrates.

So when you read modern recombineering papers, you will see both lambda Red and RecET in use, sometimes in the same lab and sometimes in the same paper, picked according to what the experiment needs. Red is the default for typical edits and insertions; RecET is the alternative when you need to handle very large fragments or work in slightly different hosts.

\[Pause.\]

In the broader project of extending recombineering to non-_E. coli_ hosts, there have been some real successes and some persistent limitations. _Mycobacterium tuberculosis_, the bacterium that causes tuberculosis, can now be edited using a recombineering system derived from a mycobacteriophage — a phage that infects mycobacteria — called **Che9c**. The Che9c gp60 and gp61 proteins are functional analogs of Exo and Beta, but tuned to work in the mycobacterial cytoplasm. This was developed by Bill Jacobs's lab and has been an enormous boon to TB research.

Similarly, recombineering systems have been built for _Streptomyces_, for _Lactobacillus_, for a handful of other organisms. Each requires finding the right phage-derived components and optimizing the strain. The host range is still much narrower than CRISPR's host range, which is one of the reasons CRISPR has eaten a lot of recombineering's territory in non-_E. coli_ applications. CRISPR works in essentially any organism you can deliver it into. Recombineering works really well in _E. coli_, well in close relatives, and with substantial effort in a handful of other species.

---

## SEGMENT 13 — Recombineering plus CRISPR: the synergy

Now I want to spend a segment on something that you might find surprising, given that I started this lecture by framing recombineering as the thing that came before CRISPR. The reality is that recombineering and CRISPR are not really competitors. They solve different problems. And when you combine them, you get a tool that is more powerful than either one alone. The two technologies have become, in many bacterial genome editing workflows, partners.

Here is the conceptual frame. **CRISPR cuts. Recombineering pastes. Together they are a precision editor.**

Let me unpack that. CRISPR, in its basic form, is a programmable cutter. You give Cas9 a guide RNA that matches a particular sequence in the genome, and Cas9 finds that sequence and makes a double-strand break. The cell then has to repair the break. If you do nothing else, the cell repairs it by some error-prone process that often introduces small insertions or deletions — that is fine for knocking out a gene, but it does not give you a precise edit. You cannot, with CRISPR alone, get a clean swap of one sequence for another.

To get a clean swap, you need to provide the cell with a template — a piece of DNA carrying the desired final sequence, flanked by homology arms that match the regions around the cut. When the cell repairs the cut, it can use your template as a guide and copy the new sequence into the chromosome by homologous recombination. The double-strand break dramatically stimulates the rate of homologous recombination at that location — instead of one in a million, you get something like one in ten or one in a hundred cells incorporating the template.

Sound familiar? This is recombineering. The template with homology arms is exactly the kind of substrate that lambda Red is designed to handle. So the natural workflow is: use CRISPR to make a cut at the target site, use lambda Red to drive incorporation of a template at the cut site. CRISPR provides the targeting; recombineering provides the precise editing.

\[Pause.\]

In practice, in bacteria, the combined CRISPR-plus-recombineering workflow looks like this. You build a strain expressing lambda Red and also carrying a CRISPR-Cas9 cassette with a programmable guide RNA. You design your guide to target the site where you want to edit. You design your template — a PCR product with homology arms flanking the new sequence, designed so that the new sequence destroys the guide RNA target site, preventing re-cutting. You electroporate the template into your strain, induce both Red and Cas9, and let the cell sort it out. Cas9 cuts. The break stimulates recombination. Red drives incorporation of the template. Cells that successfully integrate are the only ones that survive, because any cell that did not edit gets repeatedly cut by Cas9 until it either dies or edits. The selection is built into the system — you do not need a separate antibiotic marker, because Cas9 itself is the selection.

This is sometimes called **no-SCAR** editing or **CRISPR-mediated lambda Red recombineering**, and it has been the workhorse for clean, markerless bacterial editing in the last several years. It is faster than traditional counter-selection recombineering — you do not need a two-round protocol, just one round with CRISPR doing the heavy selection. It is cleaner than CRISPR alone — you get the precise edit you designed, not an arbitrary indel. And it does not require a selectable marker in your final strain — Cas9 kills the unedited cells without needing antibiotic resistance to be installed.

\[Pause.\]

I want to emphasize the philosophical point here. When CRISPR arrived in 2012 and started being applied to bacteria around 2013 and 2014, a natural assumption was that it would replace recombineering for bacterial genome editing. And in some applications it did. For knockouts, where you just need a gene disabled, CRISPR alone is usually faster and easier than recombineering. For organisms outside the recombineering host range, CRISPR is the only viable approach.

But for the cases that recombineering was best at — precise, defined sequence changes at chosen locations — CRISPR alone was not actually the right tool. CRISPR cuts, but cutting is not the same as editing. The editing comes from homologous recombination, which is exactly what recombineering catalyzes. So the field, instead of replacing recombineering with CRISPR, ended up combining them. And the combination is better than either component alone.

There is a general lesson here that I would like you to take seriously. New technologies in biology do not always replace old ones. Sometimes they layer on top, with the old technique providing one part of the workflow and the new technique providing another. CRISPR is the targeting layer. Recombineering is the precision-editing layer. Together they are a stack. Recognizing when to combine techniques rather than substitute them is one of the marks of an experienced experimentalist.

---

## SEGMENT 14 — MAGE for directed evolution and protein engineering

Let me come back to MAGE for a moment, because I want to highlight an application that I find particularly elegant: using MAGE not to build a specific designed strain, but to generate a library of variants for directed evolution.

Directed evolution is the strategy of evolving proteins or pathways toward a desired function by iterating cycles of mutation and selection. You make a library of variants, you select the best, you make a new library by mutagenizing the best, and you repeat. Done well, directed evolution can dramatically improve enzymes, optimize metabolic pathways, and discover new biological functions. Frances Arnold won the 2018 Nobel Prize in Chemistry for pioneering directed evolution of enzymes.

The classical directed evolution workflow uses error-prone PCR or random mutagenesis to generate libraries. The problem is that random mutagenesis is, well, random. It puts mutations everywhere, including in places where mutations are unlikely to help. Most of the library is dead or unimproved. Only a tiny fraction of variants are actually useful, and you have to screen through a lot of garbage to find them.

MAGE offers a different approach. Instead of random mutagenesis, you design a pool of oligos that target only the residues you think are important — say, the active site residues of an enzyme, or the codons that interact with substrate, or the residues at a protein-protein interface. Each oligo introduces a specific mutation, often saturating mutagenesis at one position. The pool together covers all the positions and all the mutations you want to explore. You run MAGE for many rounds with this pool, and you get a library of cells, each carrying some subset of mutations at the chosen positions.

\[Pause.\]

The library is now enriched for variants that have changes only at sites you considered important — not random changes everywhere. The library is far smaller, but every member of it is biologically meaningful in the sense that it varies a site you thought might matter. You can screen or select this focused library and find improved variants much faster than with random mutagenesis.

This approach has been used to engineer enzymes with novel substrate specificities, to evolve metabolic pathways for higher product yield, and to optimize ribosome binding sites and other regulatory elements. The general framework — design the search space, build the library with MAGE, select the best — is essentially the modern version of directed evolution as practiced by synthetic biologists.

There is a deeper conceptual point here. MAGE turns recombineering from a tool for building a single designed strain into a tool for exploring a designed search space. The output is not one strain. It is a library. The library is the experiment. The selection over the library is the answer. This shift from "build one thing" to "build a population and let selection pick" is one of the recurring patterns of modern biology, and recombineering is one of the best tools for executing it precisely.

---

## SEGMENT 15 — Genome recoding and the Genome Project-write

Now I want to talk about what is, in some ways, the most ambitious application of recombineering ever attempted: **genome recoding**. The project of taking a bacterial genome and systematically changing how it encodes proteins — not changing the proteins themselves, but changing the codons used to encode them — so that the genome reads, at the DNA level, as a fundamentally different document while still producing the same proteins.

Why would you do this? Two reasons. First, scientific curiosity: how much can the genetic code be rewritten before things break? Second, practical: a recoded organism can be made resistant to viruses, can incorporate non-standard amino acids in its proteins, can be made auxotrophic for engineered nutrients in a way that prevents environmental escape. Recoded organisms are platforms for genetics, for biotechnology, for biosecurity.

The most famous recoding project came out of George Church's lab at Harvard — yes, the same lab that built MAGE — and was led by Farren Isaacs and a series of other extraordinary postdocs and graduate students. The goal was to take _E. coli_ and replace every occurrence of one specific stop codon — the **TAG** stop codon, sometimes called the amber stop — with a different stop codon, **TAA**. There are about three hundred and twenty TAG codons scattered across the _E. coli_ chromosome. The plan was to change every single one of them.

\[Pause.\]

How would you do that? You cannot use CRISPR to do three hundred separate edits — there is no easy way to deliver three hundred guides plus three hundred templates all at once, and even if there were, the cumulative cuts would be lethal. You cannot use traditional cloning, because the edits are scattered across the genome at sites with no convenient restriction targets. The only viable approach, in 2009 when this project was started, was recombineering — specifically, MAGE.

The Isaacs and Church team designed about a thousand MAGE oligos, each targeting one TAG-to-TAA edit. They ran MAGE on _E. coli_ for hundreds of rounds, screening at every step, recombining edits across cells, gradually building a strain that contained all the edits. The work took years. The result, published in 2013, was an _E. coli_ strain — christened **C321.DeltaA** — in which all three hundred and twenty-one TAG codons had been replaced with TAA, and the entire amber-stop translation factor had been removed. The strain was viable, healthy, and now had a free codon — TAG — that could be reassigned to encode any non-canonical amino acid the experimenter wanted.

Think about what that opened up. The TAG codon in C321.DeltaA was a blank slot in the genetic code. By engineering a tRNA that recognized TAG and an aminoacyl-tRNA synthetase that loaded that tRNA with a specific unnatural amino acid, you could install that unnatural amino acid into any protein you wanted, at any site you specified, just by putting a TAG in your favorite gene. Proteins with click chemistry handles, with phosphorylated residues installed at exactly chosen sites, with photoreactive crosslinkers, with fluorescent amino acids — all of this became possible, in vivo, in a living cell, thanks to genome recoding.

\[Pause.\]

And the field has not stopped there. The follow-up was the construction of **Syn61** — a _Salmonella_ and _E. coli_ strain in which not one but three codons had been reassigned, also using recombineering plus chemical genome synthesis. Syn61 was a tour de force of synthetic biology, and recombineering was a critical component of building it.

There are now plans, under the umbrella of **Genome Project-write**, to scale this kind of approach to bigger genomes — yeast, eventually mammalian cells. The principles are the same: design the changes, deliver them, drive them to homozygosity, verify, iterate. The tools are CRISPR, recombineering, chemical synthesis, and increasingly AI-driven design of what to change.

Recombineering's role in this lineage is foundational. Without it, genome-scale recoding of _E. coli_ would not have happened. The technique provided the molecular operation — multiplex single-nucleotide editing at chosen sites — that made the project feasible. It is the original example of recombineering operating not on a single gene but on a whole genome's worth of changes. And it is a window into what is possible when you have a really precise, really scalable editing tool.

---

## SEGMENT 16 — Mouse models and the bridge to mammalian biology

I touched on mouse models briefly in Segment 7 when I talked about BAC recombineering, but I want to come back to this and give it the full treatment, because the impact of recombineering on mouse genetics is genuinely one of the underappreciated stories in twenty-first-century biology.

The traditional way to make a knockout mouse — disrupting a single gene in a mouse to study its function — involved a multi-year, multi-step process. You designed a targeting construct, a piece of DNA carrying a selectable marker flanked by homology arms matching your gene of interest. You built the construct using conventional cloning, often with great difficulty due to restriction site issues. You electroporated the construct into mouse embryonic stem cells. The construct, very rarely — one cell in ten thousand to one in a million — recombined into the right spot in the ES cell genome, replacing the wild-type gene with the modified version. You selected the rare correctly-targeted cells with the selectable marker. You injected those cells into mouse blastocysts. You bred up a chimera, then a heterozygous knockout, then a homozygous knockout. From start to finished mouse, this whole process took roughly two years.

The bottleneck was often the construct. Designing and building a clean targeting construct, with the right homology arms, the right markers, the right structure, was painstaking. Especially if you wanted a sophisticated allele — a conditional knockout, say, where the gene could be deleted only in certain tissues by adding a separate enzyme. Conditional alleles required building constructs with two pairs of recombination sites at precise locations, around your gene, with markers in specific orientations. Building those constructs by traditional cloning was a Herculean task, often defeating capable graduate students.

\[Pause.\]

Recombineering solved the construct-building problem. With BAC recombineering, you could take a BAC carrying your gene of interest with all its native context, and engineer a sophisticated conditional allele directly onto the BAC by recombineering. The Copeland and Jenkins workflow standardized this. Their published protocols laid out, step by step, how to insert loxP sites, how to add reporters, how to make conditional alleles, all using recombineering with appropriate cassettes and counter-selection schemes.

A construct that would have taken a year of traditional cloning could be made in a few weeks using BAC recombineering. The bottleneck moved from "build the construct" to "deliver it into mice and breed them," which is the unavoidable biological cost of mouse work. The dry-bench part of mouse model construction got dramatically faster, more reliable, and more accessible.

The result was an explosion in mouse model production through the 2000s. The International Knockout Mouse Consortium, an international effort to knock out every gene in the mouse genome, leveraged recombineering as a core construct-building technology. Thousands of conditional alleles got built. Many of the mouse models that biomedical research now depends on were enabled, at the construct-building step, by recombineering.

\[Pause.\]

CRISPR has now displaced recombineering for some mouse work, particularly for simple point mutations and small edits where you can just inject CRISPR reagents into a fertilized mouse egg. But for sophisticated alleles involving complex constructs — conditional knockouts, large knock-ins, multi-element transgenes — BAC recombineering is still often the cleaner path. The technique remains relevant. And the lineage of mouse models built using recombineering continues to provide the raw material for huge swaths of biomedical research.

I bring this up partly because it is an underappreciated chapter in the history of mouse genetics, and partly because it illustrates again how a basic-science technique developed for bacteria — yes, that lambda Red system again — ended up shaping how we study mammalian disease. The borrowed biology never stops giving.

---

## SEGMENT 17 — Limitations and where recombineering struggles

Now for an honest accounting. Recombineering is an extraordinary technique, but it is not magic, and it has real limitations that have shaped where it gets used and where other tools take over. Let me walk through the main ones, because understanding the limitations is part of understanding when to use the tool.

First, **efficiency drops sharply with insertion size**. For small insertions — point mutations via oligo, or insertions of a kilobase or two via cassette — recombineering works beautifully, with efficiencies in the range of a few percent and sometimes much higher. For larger insertions — say, ten or twenty kilobases — efficiency drops by orders of magnitude. For very large insertions — fifty kilobases or more — recombineering becomes impractical for routine use. The practical sweet spot is in the range of a few hundred bases to a few kilobases. Larger constructs require other approaches, like in-yeast assembly or integration mediated by site-specific recombinases.

Second, **you cannot always avoid leaving a marker behind**. Counter-selection is great, but it requires a two-step protocol and adds time. In high-throughput applications, where you want to do many edits across the genome quickly, the counter-selection step can become a bottleneck. MAGE-style oligo editing without markers works, but the efficiency is lower than marker-selected editing, and you often need to screen many colonies to find your edit. So there is a tradeoff: cleaner editing is slower, and faster editing leaves scars.

Third, **the host range is narrow**. Lambda Red works beautifully in _E. coli_ and pretty well in close relatives like _Salmonella_, but really poorly in distant bacteria like _Pseudomonas_, _Bacillus_, or most environmental microbes. Building recombineering systems for new hosts requires identifying analogous phage proteins, optimizing them for the new host, and validating performance. This is an active research area, and progress has been steady, but it is not as easy as just dropping in lambda Red. CRISPR, by contrast, works in essentially any organism with reasonable effort, which has shifted some of recombineering's territory to CRISPR for non-_E. coli_ applications.

\[Pause.\]

Fourth, **mismatch repair limits oligo efficiency**. We talked about this in Segment 9. The cell's mismatch repair machinery can undo many recombineering events by detecting the mismatch between the introduced oligo and the chromosomal strand, and correcting it back to the original. You can work around this by using a mismatch-repair-deficient strain, but those strains accumulate background mutations, which can cause its own headaches. Picking the right strain background is part of the art of recombineering.

Fifth, **homology arms must be perfect matches**. A single mismatched base in your homology arm reduces efficiency dramatically. This means you need to know the exact sequence of your starting strain — strain-to-strain variation in the chromosome can break recombineering experiments if your arms were designed based on a reference sequence rather than your actual strain. Most experienced recombineering labs sequence their starting strains to make sure the arms are accurate.

Sixth, **recombineering is not zero-error**. Sometimes the recombination event introduces small errors at the junctions — small deletions or insertions where the homology arm meets the chromosome. These are rare but real, and you need to sequence-verify your final clones to be sure the edit is clean. With long sequencing reads now cheap and routine, this is less of a burden than it once was, but it is something to be aware of.

\[Pause.\]

Seventh, **scale-up costs add up**. A single recombineering experiment is cheap — primers, oligo, a strain, a few plates. But scaling up to MAGE-level libraries requires a robot, custom oligo pools, sequencing for screening, computational infrastructure. The cost per experiment is low; the cost per platform is substantial. This is the same tradeoff you see in any high-throughput biology, but it is worth flagging because the headlines about MAGE making thousands of edits in a day can hide the fact that the supporting infrastructure took years and millions of dollars to build.

So when does recombineering shine, and when do you reach for something else? Recombineering shines when you need precise, defined sequence changes in _E. coli_ or close relatives, especially when those changes are not knockouts but more subtle edits — point mutations, small insertions, tagging endogenous genes, modifying regulatory elements. It shines when you need many edits and can leverage MAGE-style automation. It shines as the editing partner of CRISPR for clean markerless edits.

CRISPR alone is better for simple knockouts, for non-_E. coli_ hosts, for mammalian cells, for any application where you need a quick gene disruption rather than a precise sequence change. Yeast-based assembly methods are better for very large constructs. Site-specific recombinases like Cre-lox are better for managing complex conditional alleles in higher organisms. The choice depends on what you are trying to do.

Knowing the tool's limits is part of knowing the tool.

---

## SEGMENT 18 — The future: CRISPR partnership, expansion, and AI-designed edits

Let me close with a look ahead. Where is recombineering going? What does the next decade look like for this technique that, as of the time of this lecture, is about a quarter century old as an engineering tool?

The first big direction is the deepening partnership with CRISPR. We have already covered this — Cas9 cuts, lambda Red pastes. The combined workflow is now standard in modern bacterial genome editing, and it is likely to remain so. What is changing is the sophistication of the integration. We are seeing CRISPR-recombineering protocols that include base editors and prime editors, where the CRISPR component does not even make a double-strand cut but instead nicks one strand to facilitate recombineering at the nick. We are seeing systems with multiple guides multiplexed, paired with multiplex recombineering oligos, for parallel editing at many sites. The technology stack keeps refining.

The second direction is expansion to non-_E. coli_ hosts. The work of identifying phage-derived recombineering systems for other bacteria continues, and there is steady progress. Recombineering in _Mycobacterium_ tuberculosis has matured to a real tool for TB research. Recombineering in _Lactobacillus_ for food microbiology, in _Acinetobacter_ for pathogen biology, in various environmental bacteria for biotechnology — all of these are being pushed forward. The dream of a general-purpose recombineering toolkit that works in any bacterium is still distant, but each year the host range expands.

\[Pause.\]

The third direction, and the one I find most interesting, is the integration of computational design. Modern recombineering increasingly involves designing oligo pools algorithmically. You specify what edits you want, the software designs the oligos — choosing homology arm lengths, avoiding mismatch repair, balancing GC content, ensuring sequences are unique enough to target only your site of interest — and you order the pool and run the experiment. This is a real workflow now, and it lowers the expertise barrier for sophisticated experiments.

AI is starting to enter this design step. Machine learning models trained on large datasets of recombineering experiments can now predict which oligo designs will be most efficient, which sequences will evade mismatch repair best, which combinations of edits will be compatible. The lab in 2026 increasingly does not hand-design recombineering oligos — it specifies the desired edits and lets a model do the design. As these models get better, recombineering experiments will get more efficient, and the technique will become accessible to scientists who do not have years of hands-on experience with the molecular details.

The fourth direction is the use of recombineering for whole-genome engineering at scales we have not yet attempted. Recoded organisms with multiple codons reassigned. Synthetic chromosomes built from scratch and then refined by recombineering. Engineered cells with thousands of designed edits, working together as platforms for biotechnology. Recombineering is one of the few techniques that can scale to this level, particularly when combined with MAGE-style automation. The Genome Project-write and related initiatives are pushing in this direction.

And the fifth direction, which I will only mention briefly, is the use of recombineering to study evolution itself. By introducing defined libraries of variants and tracking their fates under selection, you can experimentally measure evolutionary parameters — fitness landscapes, epistasis between mutations, the structure of accessible mutation paths — at a precision and scale that classical evolutionary biology never had. Recombineering is becoming a tool for evolutionary biology, not just engineering.

\[Pause.\]

If I had to give you one parting thought about recombineering, it would be this. Most successful technologies in biology are not invented out of whole cloth. They are recognized and refined. They start as natural biological phenomena — lambda phage protecting its DNA, _E. coli_ doing rare homologous recombination — and a careful, patient scientist sees that the phenomenon could be turned into a tool. The work of turning it into a tool takes years or decades, often unglamorously, often unrecognized.

Don Court at NCI Frederick, working on lambda for thirty years, was doing exactly this. He was not building a startup. He was not chasing a Nobel. He was characterizing a virus, generously sharing his strains, mentoring his students, and quietly producing a technology that ended up changing molecular biology. The pattern is common. The biology is everywhere — there are still phages we have not characterized, still cellular processes we have not figured out how to hijack, still molecular machines that could become tools if someone takes the time to understand them.

CRISPR was the same story — a bacterial immune system, ignored for decades, eventually recognized and turned into a tool. Recombineering was the same story — a phage's DNA-handling system, characterized over decades, eventually recognized and turned into a tool. The next great editing technology will probably look the same. It is out there now, in some organism, in some pathway, in some lab notebook. Someone is going to recognize what it can do.

If you walk out of this lecture and start paying attention to molecular biology with that frame in mind — looking at natural systems and asking "could this be a tool?" — then you have, I think, learned the most important lesson recombineering has to teach. The tools come from the biology. Always have. Probably always will.

\[Pause.\]

That is the lecture. Thank you for sitting through it. I hope recombineering, which started this hour as a name you may not have heard, now feels like a member of your toolbox — a quiet, precise, decades-proven technique that does something CRISPR alone cannot quite do, that built mouse models and recoded genomes and metabolic engineering platforms, and that continues to power genome editing in ways most of the world does not see.

Go read some recombineering papers. Look at the methods sections of any clean bacterial genome editing study. You will see lambda Red somewhere in there, doing its quiet work. That is the technique. That is the tool. That is the story.

Class dismissed.

---

## APPENDIX — Key terms, people, and resources

A short reference for the technique and the people who built it.

**Recombineering** — recombination-based genetic engineering. The use of phage-derived recombination proteins, typically the lambda Red system or RecET, to drive precise homologous recombination between an introduced DNA fragment and a target location in the cell.

**Lambda Red system** — the trio of proteins Gam, Beta, and Exo, encoded by lambda phage genes _gam_, _bet_, and _exo_. Gam inhibits the host RecBCD nuclease; Exo chews back double-stranded DNA from a free end to expose single-stranded tails; Beta coats single-stranded DNA and drives annealing to complementary sequences.

**RecET** — analogous recombineering system from the Rac prophage in _E. coli_, consisting of RecE (exonuclease) and RecT (single-strand annealing protein). Sometimes used instead of or alongside lambda Red, particularly for very large insertions.

**Homology arms** — the matching sequences on either end of a DNA fragment used in recombineering, which determine where in the chromosome the fragment will be integrated. Typically forty to fifty base pairs for double-stranded substrates; thirty to forty bases on each side of the edit for oligonucleotide substrates.

**MAGE — Multiplex Automated Genome Engineering** — a high-throughput recombineering platform developed in George Church's lab around 2009 by Harris Wang and colleagues. Uses automated cycles of oligo electroporation to drive many edits to homozygosity in parallel.

**TRMR / TRACE** — barcoded recombineering platforms for trackable, library-scale genetic modifications, enabling parallel screening of thousands of edits in one experiment.

**Counter-selection** — the use of a marker that allows both positive selection (cells with the marker live under one condition) and negative selection (cells with the marker die under another condition). Used for two-step scarless recombineering. Common markers include SacB, ccdB, and galK.

**Genomically recoded organism** — a strain whose genome has been systematically modified, typically by recombineering, to reassign or eliminate specific codons. C321.DeltaA, an _E. coli_ strain in which all TAG stop codons were replaced with TAA, is the canonical example.

**Key people** — **Donald Court** at NCI Frederick, who characterized the lambda Red proteins and developed the original recombineering strains and protocols. **Neal Copeland** and **Nancy Jenkins**, also at NCI Frederick, who applied the technique to BAC modification for mouse genetics. **Francis Stewart**, who developed RecET-based methods and the ExoCET direct cloning workflow. **George Church** and **Harris Wang**, who built MAGE. **Farren Isaacs**, who led the construction of the first major recoded organism.

**Strain resources** — the SW series of recombineering _E. coli_ strains, including SW102, SW105, and SW106, originally distributed by NCI Frederick. The HME series of strains from the Court lab. The pKD46 and pKD13 plasmid series from the Datsenko and Wanner paper (2000), widely used for one-step gene replacements.

**Recommended reading** — Yu et al. (2000) PNAS, the founding recombineering paper. Datsenko and Wanner (2000), the one-step gene knockout protocol. Wang et al. (2009) Nature, the MAGE paper. Isaacs et al. (2013) Science, the recoded organism. Sharan et al. (2009) Nature Protocols, a comprehensive recombineering methods review from the Court lab.

For practical bench work, the NCI Frederick recombineering protocols, freely available online, are the gold standard. Read them carefully before you start. Most recombineering failures trace back to skipping a small step — bad cell prep, contaminated template, wrong induction time. The protocol works if you follow it; the protocol fails if you cut corners.

---


