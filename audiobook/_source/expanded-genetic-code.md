# Expanded Genetic Code: Unnatural Amino Acid Incorporation via Orthogonal aaRS/tRNA Pairs

**A 2-hour undergraduate molecular biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — A 21st amino acid: the idea, the stakes, the promise

Alright, settle in. For the next two hours we're going to talk about one of the most audacious ideas in modern molecular biology — the idea that the genetic code, the thing you memorized in introductory biology as a fixed, universal, almost sacred table, is actually a piece of engineering you can edit. We're going to talk about expanding the genetic code. We're going to talk about taking the twenty amino acids that every living thing on Earth uses to build proteins, and adding a twenty-first. And a twenty-second. And, in the latest experiments, more.

If you walk out of here today and a friend asks you what an expanded genetic code is, I want you to be able to say something like this: every living thing on this planet builds its proteins out of the same twenty amino acids — the same twenty Lego bricks, the same canonical pieces — but it turns out that the machinery the cell uses to translate DNA into protein is more flexible than evolution ever bothered to exploit, and we can engineer extra parts that bolt onto that machinery and let a cell install a chosen non-natural amino acid at a chosen position in a chosen protein, on demand, as if the cell had been built with a twenty-first letter all along. We've gone from being readers of the genetic code to being its editors. We've gone from twenty amino acids to, in the latest count, well over two hundred different non-canonical building blocks that we know how to install. And the implications run from new drugs to new materials to new ways of doing chemistry inside living cells.

That's the destination. Now let me give you the bumper sticker for the whole field, the sentence I want you to carry around: **the genetic code is no longer a fixed alphabet — it is a programmable one, and the program is written in the form of engineered orthogonal aminoacyl-tRNA synthetase and tRNA pairs**. Don't worry yet about what that phrase means in detail. We'll unpack every word of it. The point I want you to take in right now is that there is a specific, namable, learnable molecular trick — the orthogonal pair trick — that turned the genetic code from read-only to read-write.

\[Pause.\]

Here's the analogy I'm going to come back to throughout the lecture, so let me lay it down now. Imagine you've been given a giant box of Lego bricks. The box contains exactly twenty different shapes — twenty different colors, twenty different little geometries — and out of those twenty shapes you are asked to build every machine, every structure, every working object in your universe. Anything you want to build, you build out of the same twenty bricks. That's what nature does. The brick set is the twenty canonical amino acids — alanine, glycine, leucine, phenylalanine, all the way through the standard table — and every protein in every organism, from bacteria to whales, is assembled from them. The bricks are remarkable; they're chemically rich, they can be hydrophobic or charged, they can have rings or chains or sulfurs. They're a beautiful set. But it is still a finite set of twenty.

Now imagine you walk into a hardware store, and you tell the clerk: "I'd like to design a new Lego brick. I'd like one with a magnet on top, so that any structure I build with this brick will stick to a refrigerator. I'd like another brick with a tiny LED inside, so that any structure with this brick will glow when I shine a flashlight on it. And I'd like a third brick with a snap-fit handle, so that I can hook any structure to anything else with a single click." The clerk says, sure — and then hands you a box of bricks of your own design, with magnets, lights, and clips, and tells you they snap into the standard set with no modification needed. **Expanding the genetic code is exactly this: designing new bricks — non-canonical amino acids with chemistries that nature never used — and getting them slotted into proteins at positions of your choosing.** That's the analogy. Twenty Lego bricks, plus new bricks of your design.

\[Pause.\]

Let me put some more concrete edge on what "new chemistries" means, because I want you to understand the stakes. The twenty standard amino acids cover a beautiful but limited chemical palette. They have hydrophobic groups, charged groups, hydroxyls, sulfurs, aromatic rings. They do not have azide groups. They do not have alkyne groups. They do not have diazirine groups. They do not have azobenzene photoswitches. They do not have heavy-atom labels for crystallography. They do not have built-in fluorophores. They do not have keto groups for chemoselective ligation. They do not have any of the click-chemistry handles that have revolutionized synthetic chemistry over the past two decades. Nature did not invent click chemistry; humans did. And so nature's amino acid set, beautiful as it is, lacks the chemical handles that human chemists have spent half a century developing. The genetic code, in this sense, is missing some of the most useful tricks of modern chemistry.

The expanded genetic code closes that gap. It says: we have a giant catalog of chemically interesting non-canonical amino acids, and we're going to engineer the translation machinery of living cells to install them at specific positions in specific proteins. You want a protein with a click handle on residue 47, so that you can later attach a drug or a dye or a polymer at that exact spot? You can do that. You want a protein with a photoswitch built into a critical loop, so that the protein turns on and off when you shine UV light on it? You can do that. You want a protein that crosslinks to whatever neighbor it's touching when you flash a UV lamp, so that you can trap fleeting protein-protein interactions inside a cell? You can do that. Each of these used to be science fiction. Each is now routine in dozens of labs.

\[Pause.\]

Here's the contract for the next two hours. By the end of this lecture, you should be able to do three things. **First**, explain to a friend, with analogies, what an orthogonal aminoacyl-tRNA synthetase and tRNA pair is, why orthogonality is the key word, and how that pair lets you install a non-canonical amino acid at a specific position in a protein. **Second**, walk through the canonical story — selenocysteine, pyrrolysine, the Schultz 2001 paper, amber suppression, and the directed evolution of new synthetases — and explain how the field went from "twenty plus one rare exception" to "twenty plus over two hundred." **Third**, look at any current application — an antibody-drug conjugate with a site-specific linker, a photopharmacology paper, a biocontained organism — and have actual intuition for what the engineers did, because expanding the genetic code is now a workhorse technique, not a stunt.

One more framing note before we dive in. This field has a single name attached to it more than any other: **Peter Schultz**, at the Scripps Research Institute, whose 2001 paper in _Science_ established the modern template for genetic code expansion. We're going to spend a whole segment on that paper, because it is one of the most consequential papers in twenty-first-century biology and it changed what is even thinkable in protein engineering. But before we can appreciate Schultz, we have to understand the problem he solved and the natural precedents he was building on. Let's go meet the actual twenty-first and twenty-second amino acids — the two that nature built on its own — and ask why those two existed and why nature stopped there.

---

## SEGMENT 2 — Nature got there first, twice: selenocysteine and pyrrolysine

Here is a fact that surprises almost everyone hearing it for the first time. Despite my insistence that nature builds proteins out of twenty amino acids, that number is, strictly speaking, a lie. The accurate number, depending on how you count, is twenty-one, or twenty-two. Because evolution, in two very specific cases, has already gone past twenty. And understanding those two cases — selenocysteine and pyrrolysine — is the absolute foundation of why genetic code expansion is even possible. Nature already showed us the trick. We just learned to copy it on demand.

Let me start with **selenocysteine**. Selenocysteine is, as its name suggests, like cysteine but with a selenium atom in place of the sulfur. Selenium sits one row below sulfur on the periodic table, so it behaves chemically a bit like sulfur but with subtly different properties — a slightly larger atom, a more easily ionized thiol-equivalent group, a different redox potential. For a small number of enzymes, particularly some involved in antioxidant defense and thyroid hormone metabolism, selenocysteine is the catalytically critical residue. Without selenium in that exact spot, the enzyme doesn't work. You and I have several selenocysteine-containing proteins right now, doing useful chemistry in our cells.

Here's the question I want you to sit with. If selenocysteine is genuinely encoded in our genome, and a ribosome actually inserts it into a protein during translation, then there must be a codon for it. Which codon? The genetic code table you memorized has sixty-four codons, sixty-one of them assigned to the standard twenty amino acids and three of them stop codons. There's no codon left over for a twenty-first amino acid. So how does selenocysteine get in?

The answer is beautiful and weird. **Selenocysteine is encoded by a repurposed stop codon — specifically UGA, the codon called "opal."** Normally, UGA tells the ribosome to stop translating. But in certain mRNAs, in certain contexts, with the help of a specific RNA secondary-structure element called a **SECIS element** in the downstream mRNA, UGA gets read instead as "insert selenocysteine here, and keep translating." Nature took a stop codon and, in a tightly regulated way, redefined it. The same three letters mean two different things depending on the context. Translation, at that codon, can either terminate or insert a twenty-first amino acid, and the SECIS element is the local signal that tips the decision.

\[Pause.\]

Let me unpack the molecular machinery that makes this work, because it's going to map perfectly onto the engineered systems we'll talk about later. To insert any amino acid into a protein, you need three things. You need the amino acid itself. You need a **transfer RNA** — a tRNA — that carries the amino acid to the ribosome and base-pairs its anticodon with the mRNA's codon. And you need an **aminoacyl-tRNA synthetase** — an enzyme, abbreviated aaRS, that grabs the right amino acid and chemically attaches it to the right tRNA, charging it for delivery. Three components: amino acid, tRNA, synthetase. That trio defines how each of the twenty standard amino acids gets into proteins.

For selenocysteine, all three of those components exist. There is a dedicated **tRNA-Sec** that base-pairs with UGA. There is a dedicated synthetase pathway — actually, selenocysteine is biosynthesized on the tRNA itself, starting from serine, but the net effect is the same: a tRNA gets charged with selenocysteine. And then a special elongation factor, called SelB in bacteria or eEFSec in eukaryotes, delivers the charged tRNA to the ribosome at UGA codons that have the SECIS context. The trio is in place. Nature has, in a sense, built a complete parallel insertion system for a twenty-first amino acid, riding on a repurposed stop codon.

Now meet the twenty-second. **Pyrrolysine** — abbreviated Pyl — is a lysine derivative found in certain archaea and bacteria, particularly methanogenic archaea that perform methane metabolism. Pyrrolysine has a bulky pyrroline ring tacked onto lysine's side chain, and it is the catalytic residue in a class of enzymes called methylamine methyltransferases. Like selenocysteine, pyrrolysine is encoded by a repurposed stop codon — but a different one. **Pyrrolysine uses UAG, the amber codon**, which normally means stop. In these particular organisms, UAG is read in specific contexts as "insert pyrrolysine here."

And here's the key thing: pyrrolysine has a dedicated aminoacyl-tRNA synthetase, **PylRS**, and a dedicated tRNA, **tRNA-Pyl**, that recognize each other and only each other. PylRS picks up pyrrolysine and charges it onto tRNA-Pyl. tRNA-Pyl base-pairs with UAG. Translation continues with pyrrolysine inserted. It is a complete, self-contained, dedicated insertion system for a twenty-second amino acid, sitting cheek-by-jowl with the standard twenty amino acid insertion systems and not interfering with them.

\[Pause.\]

I want you to pause and savor this, because the implications are enormous. Nature has shown us — in real, biological, evolved cases — that the translation machinery can accommodate extra amino acids beyond the canonical twenty. You can repurpose a stop codon. You can have a tRNA and a synthetase that handle a unique amino acid. The ribosome doesn't care; if you bring it a properly charged tRNA whose anticodon matches the codon, it will incorporate whatever amino acid is hanging off the tRNA. The ribosome is, in this sense, **permissive**. It's a generic chemistry machine. It doesn't audit the cargo. It just builds the polymer.

And that single insight — that the ribosome is permissive about what amino acid is loaded on a tRNA, as long as the rest of the trio is matched — is what makes the entire field of genetic code expansion possible. If we can build, by engineering, an aaRS/tRNA pair that handles an amino acid of our choosing and reads a codon of our choosing, and if we can keep that pair from interfering with the cell's existing twenty pairs, then we can insert any amino acid we like at any position we like. Nature did it twice with selenocysteine and pyrrolysine. We can do it on demand.

\[Pause.\]

Here's the analogy I want you to carry. **The standard twenty amino acid insertion systems are like twenty different delivery trucks at a depot, each one labeled with a specific amino acid name, each one delivering only its assigned amino acid to the ribosome's loading dock when the right codon shows up.** Selenocysteine and pyrrolysine are two extra trucks that nature snuck into the depot, each labeled with its own special amino acid, each one reading its own repurposed stop codon. The depot doesn't mind. There's room for more trucks. The ribosome services any truck that pulls up to the right dock.

The job of genetic code expansion, as a research program, is to build our own extra trucks. We design the amino acid we want loaded. We design or borrow a tRNA that reads a specific codon. We design or borrow a synthetase that charges only that tRNA with only that amino acid. We add the three components to a cell. The cell, if everything is engineered right, accepts our extra truck without confusion, and our amino acid gets installed at the codon we picked.

That's the trick. The rest of the lecture is about how we build the extra trucks, and how we make sure they don't accidentally start delivering to the wrong dock.

---

## SEGMENT 3 — The orthogonal pair: what "orthogonal" really means

Before we get into the historical paper that launched this field — Schultz 2001, coming up in Segment 5 — I need to spend a careful segment on the most important concept in the entire field, the concept of **orthogonality**. It's the word you'll see in every title, every abstract, every grant proposal. And it's a word that's worth slowing down on, because if you really understand what orthogonality means in this context, you understand seventy percent of how the field works.

Let me start with a definition. In genetic code expansion, an **orthogonal aaRS/tRNA pair** is a pair of molecules — an aminoacyl-tRNA synthetase and its cognate tRNA — that work with each other and only with each other inside a given host cell. The synthetase charges the tRNA. The tRNA receives only that amino acid from that synthetase. Crucially, the engineered synthetase does **not** charge any of the host cell's natural tRNAs, and the host cell's natural synthetases do **not** charge the engineered tRNA. The pair is a closed loop, walled off from the rest of the translation machinery.

That walling-off is what "orthogonal" means. Two things are orthogonal if they don't interfere with each other. In the genetic code expansion context, an orthogonal pair is a synthetase-tRNA duo that operates inside the cell without any crosstalk to the cell's existing twenty pairs. The cell's natural translation continues to work normally — its twenty standard amino acids still get loaded onto their twenty standard tRNAs by their twenty standard synthetases, and the resulting charged tRNAs decode their normal codons. Meanwhile, in parallel, your engineered pair sits there doing its own thing, charging its own tRNA with its own non-canonical amino acid, and that tRNA decodes its own chosen codon. The two systems coexist in the same cytoplasm without colliding.

\[Pause.\]

Here is why orthogonality is the whole game. Imagine you tried to expand the genetic code without orthogonality. Imagine you took an aaRS from one organism — say, the tyrosyl-tRNA synthetase from yeast — and you put it into _E. coli_, hoping that it would charge a tRNA you'd brought along with a non-canonical amino acid. The problem you'd run into immediately is that the yeast synthetase, dropped into _E. coli_, would not just charge your engineered tRNA. It would also recognize _E. coli's_ own tyrosine tRNAs, because yeast and _E. coli_ aaRS recognition rules are similar enough that there's crossover. And so your engineered synthetase would start charging the cell's normal tyrosine tRNAs with your non-canonical amino acid. Your non-canonical amino acid would start showing up at every tyrosine position in the proteome. The whole cell would be poisoned with off-target incorporation. The experiment would fail.

The same thing would happen in reverse. If you brought along your engineered tRNA, and the _E. coli_ host's own synthetases recognized it, they'd charge it with their native amino acid. Now your engineered tRNA — which was supposed to deliver a non-canonical amino acid — would instead be carrying tyrosine, or leucine, or whatever the host synthetase chose to load. Your chosen codon would get decoded with the wrong amino acid. Again, the experiment fails.

**Orthogonality is the condition that prevents both of these failure modes.** Your engineered synthetase must be invisible to the host's tRNAs. Your engineered tRNA must be invisible to the host's synthetases. The pair must be isolated. And then, and only then, you can give the pair a non-canonical amino acid to handle, and trust that it will be installed only at the codon your tRNA reads.

\[Pause.\]

Here's the analogy I'm going to use, and you should hold this image. **The cell's translation machinery is like a giant mail sorting facility, with twenty mail carriers, each one delivering only their assigned color of envelopes to their assigned ZIP codes.** Red envelopes go to one carrier, blue envelopes go to another, green to a third, and so on. The sorting facility works because each carrier knows which envelopes are theirs and ignores the others, and each envelope is recognized by exactly one carrier. The system is twenty-way orthogonal — twenty carriers, twenty envelope types, no crossover.

Now you want to add a twenty-first carrier delivering a twenty-first color of envelope. The new carrier walks into the facility carrying purple envelopes. For this to work, the new carrier must ignore all the existing colors of envelopes — must not pick up any red or blue or green or anything else by mistake. And the new purple envelopes must not be mistaken by any of the existing carriers for envelopes belonging to their routes. **The new carrier and the new envelope type are orthogonal to all the existing pairings.** Once that's true, the twenty-first carrier just walks in, picks up purple envelopes from the sorting bin, and delivers them to a brand-new ZIP code that none of the other carriers serve. The original mail keeps moving. The new mail moves alongside. Everything works.

That's the picture. The engineered aaRS is the new carrier. The engineered tRNA is the new envelope. The non-canonical amino acid is the cargo inside the envelope. The chosen codon — usually a repurposed stop codon, as we'll see — is the new ZIP code. Orthogonality is the property that lets the new system slot in without breaking the existing one.

\[Pause.\]

Now, where do orthogonal pairs come from in practice? You don't just sit down and design one from scratch out of nothing. The standard trick — and this is the trick that Peter Schultz exploited brilliantly — is to **borrow a pair from one organism and import it into another organism**. The pair, in its home organism, is just one of the normal twenty pairs, doing the normal job of charging a tRNA with a standard amino acid. But when you move it to a different organism, with a different set of native synthetases and tRNAs, the imported pair often turns out to be invisible to the new host. Why? Because synthetase-tRNA recognition rules have drifted across evolutionary distance. The features that the imported synthetase looks for in its cognate tRNA are not the features the host's own tRNAs display. And the features the host's synthetases look for in their cognate tRNAs are not the features the imported tRNA displays. The pair, in foreign territory, has no friends among the locals. It only talks to itself. **It is, by virtue of being foreign, orthogonal.**

The classic example, and the one we'll dive into in Segment 5, is the tyrosyl-tRNA synthetase and tyrosyl tRNA from the archaeon _Methanocaldococcus jannaschii_ — usually abbreviated **Mj** — imported into _E. coli_. In _M. jannaschii_, the MjTyrRS just does the normal job of charging MjtRNA-Tyr with tyrosine. But _M. jannaschii_ is an archaeon, separated from _E. coli_ by billions of years of evolutionary divergence, and the recognition rules between archaeal and bacterial synthetases and tRNAs have drifted far enough apart that the Mj pair is essentially blind to _E. coli's_ machinery, and vice versa. Drop the Mj pair into _E. coli_, and it sits there, charging only its own tRNA, charging that tRNA with only its own amino acid, ignoring everything else. It's orthogonal by phylogenetic distance.

That's the foundational move. The orthogonal pair is borrowed from a distant relative. The rest of the engineering is then about reprogramming what amino acid the pair handles and what codon the tRNA reads. We'll get to that machinery in the next segments. For now, internalize the concept: orthogonality is the wall, the wall is built by phylogenetic distance, and once you have the wall, you can install any chemistry you like behind it.

---

## SEGMENT 4 — Amber suppression: repurposing UAG as a programmable address

Now that we have the orthogonal pair concept, we need the other half of the puzzle: **which codon does the new tRNA read?** Because the only way to install a new amino acid at a specific position in a protein is to have the ribosome encounter, in the mRNA, a codon that the engineered tRNA recognizes and no other tRNA reads. We need a private codon — a reserved address — that means "install the non-canonical amino acid here." Without a private codon, the engineered system has nowhere to deliver its cargo.

The cleanest source of private codons is the same source nature itself used for selenocysteine and pyrrolysine: **the stop codons**. Let me explain why.

There are three stop codons in the standard genetic code: UAA, UAG, and UGA. These three codons normally do not encode amino acids — they tell the ribosome to release the finished protein and terminate translation. But unlike the sixty-one sense codons, which are all assigned to specific amino acids and read all the time, the stop codons are only used once per gene — at the very end of each open reading frame. They're punctuation, not vocabulary. And critically, in a given genome, you can usually identify which stop codon is "rarest" — least frequently used as the terminator — and steal that one for your own purposes.

In _E. coli_, the rarest stop codon is **UAG**, traditionally called **amber**. Of all the genes in the _E. coli_ genome, only about seven to nine percent of them end in UAG. The other ninety-something percent of genes use UAA (ochre) or UGA (opal) as their stop. So if you redefine UAG inside an _E. coli_ cell — if you tell the cell, "from now on, UAG means insert this non-canonical amino acid, don't terminate here" — you'll affect only the small minority of genes that end in UAG, and you can engineer your way around those impacts. The other ninety percent of the proteome terminates normally.

\[Pause.\]

Here's the analogy. **Amber suppression is the trick of taking the punctuation mark at the end of a sentence — the period, in this case the UAG stop — and repurposing it to mean a specific new word, in a specific context, when an engineered reader shows up.** Imagine you're reading a book in which most sentences end with a period, but you've installed, in your own head, a new rule: "whenever you see a period in italic font, don't end the sentence — instead, read the word 'phlogiston' and keep going." The book's original text doesn't change. Most periods still terminate sentences. But the italic ones now mean something new. And if you carefully italicize the periods you want to behave this way, you've turned the punctuation into vocabulary, locally and selectively.

That's exactly what amber suppression does. The UAG codon, in your engineered system, no longer reliably terminates translation. Instead, when the ribosome reaches a UAG codon in your mRNA, the engineered tRNA — whose anticodon is CUA, complementary to UAG — pulls up to the ribosome with its non-canonical amino acid loaded. The amino acid gets inserted. Translation continues. The protein gets made, with your non-canonical amino acid sitting exactly where you put the UAG codon in the gene.

The technical word for what the engineered tRNA does is **suppression** — it suppresses the stop signal, reads through what would have been a termination point, and inserts an amino acid instead. A tRNA that does this is called a **suppressor tRNA**. The whole machinery — the engineered amber suppressor tRNA, the orthogonal synthetase that charges it, and the non-canonical amino acid it delivers — is called an **amber suppression system**. And amber suppression has been the workhorse of genetic code expansion for two and a half decades.

\[Pause.\]

Let me walk you through what amber suppression looks like in practice, step by step, because this is the protocol that has been run, with variations, in thousands of papers.

Step one. You take the gene for your protein of interest — say, a fluorescent protein, or an antibody, or an enzyme — and you identify the specific residue where you want the non-canonical amino acid to go. Let's say it's residue 47, and you currently have a tyrosine there in the wild-type sequence. You do site-directed mutagenesis to change the codon for residue 47 from a tyrosine codon (UAC, say) to UAG. The gene now has a stop codon in the middle of it. If you tried to express this gene in a normal cell, translation would terminate at residue 47, and you'd get only a short, truncated protein — no fluorescence, no activity, nothing useful. The gene is broken from a normal cell's point of view.

Step two. Into the same cell, you co-express your orthogonal pair — the engineered synthetase and the engineered amber suppressor tRNA. Usually these are encoded on a separate plasmid, expressed constitutively, just sitting there ready to go.

Step three. You add your non-canonical amino acid to the growth medium. The cell takes up the amino acid through its normal small-molecule transporters — non-canonical amino acids are usually designed to be small enough and similar enough to natural amino acids that the cell's importers don't reject them. Once inside, the non-canonical amino acid floats around the cytoplasm.

Step four. The engineered synthetase finds the non-canonical amino acid, grabs it, and charges it onto the engineered tRNA. Now you have a tRNA with a CUA anticodon, loaded with your non-canonical amino acid, ready for delivery.

Step five. The ribosome translates your gene. It moves along the mRNA, putting in tyrosines and leucines and so on, until it reaches the UAG codon at residue 47. The engineered tRNA pulls up, its CUA anticodon base-pairs with the UAG codon, the ribosome accepts the delivery, the non-canonical amino acid is inserted into the growing peptide chain, and translation continues past residue 47 all the way to the natural stop codon at the end of the gene.

Step six. You get a full-length protein. The protein folds. The protein has, at position 47, your non-canonical amino acid — not a tyrosine, not a tryptophan, but the chemistry you chose. You purify the protein and use it.

That's the workflow. Once you've internalized those six steps, every paper in the field is a variation on this recipe. Different non-canonical amino acids. Different proteins. Different positions. Different cells. But the underlying logic — orthogonal pair plus reassigned stop codon plus exogenous amino acid plus normal expression machinery — is the same.

\[Pause.\]

There's one practical limitation of amber suppression that's worth flagging now, because it's going to motivate later improvements. Even in _E. coli_, where UAG is the rarest stop codon, it's still used by some genes. When you express your amber suppression system, your engineered tRNA is going to occasionally pull up to those native UAG codons in essential genes and insert your non-canonical amino acid where the gene was supposed to terminate. This causes **read-through** of native genes — you get extended versions of native proteins, with weird C-terminal tails containing your non-canonical amino acid. For most of those genes, the read-through is harmless or quickly degraded. But for some genes, especially essential ones, the read-through is toxic, and the cell grows poorly.

The field has handled this problem in two ways. First, you can simply tune the suppression efficiency down — express the suppressor tRNA at modest levels, so that most native UAG codons still terminate correctly, and only when you flood the system with the suppressor's substrate codon (by putting many UAGs in your gene of interest, or by simply having your gene present at high copy number) does the read-through compete effectively. Second, and this is the strategy that became famous through the work of George Church and Jason Chin, you can go and edit the host genome to remove every native UAG codon, freeing UAG entirely for your engineered use. We'll get to that bold move later in the lecture.

For now, the takeaway is: amber suppression uses the UAG stop codon as a private address for non-canonical amino acid delivery, and it has been the dominant approach in the field since the early 2000s. Now let's go back and meet the paper that started it all.

---

## SEGMENT 5 — Schultz 2001: the paper that opened the door

Now we're ready for the central paper. In 2001, Peter Schultz's lab at Scripps published a paper in _Science_ titled, in summary, the directed evolution of an orthogonal aminoacyl-tRNA synthetase that incorporates an unnatural amino acid into proteins in _E. coli_. The exact title is longer, but that's the spirit. And that paper, more than any other, founded the modern field of genetic code expansion. Every textbook tells the same story. Every review starts with this paper. I'm going to walk you through what they did, because the logic is gorgeous.

The goal of the paper was simple: install a single non-canonical amino acid — they chose O-methyl tyrosine, which is just tyrosine with a methyl group on the phenol oxygen, a small modification — at a specific UAG codon in a target protein, inside _E. coli_, using an engineered orthogonal aaRS/tRNA pair. Three required components: orthogonal pair, non-canonical amino acid, UAG codon in target gene. Whether it could be done, in a generalizable, robust way, was the open question.

The starting point was the choice of orthogonal pair. As I mentioned in Segment 3, the move Schultz made was to import the **tyrosyl-tRNA synthetase and tyrosyl tRNA from _Methanocaldococcus jannaschii_** — the MjTyrRS and MjtRNA-Tyr pair — into _E. coli_. _M. jannaschii_ is a hyperthermophilic archaeon from deep-sea hydrothermal vents. It's phylogenetically distant from _E. coli_, distant enough that, when you put the Mj synthetase and tRNA into an _E. coli_ cell, they don't crosstalk with the _E. coli_ machinery. The MjTyrRS doesn't charge _E. coli_ tRNAs. The _E. coli_ synthetases don't charge MjtRNA-Tyr. The pair is orthogonal by virtue of evolutionary distance. Perfect starting material.

But there's an obvious problem. The MjTyrRS, in its natural state, charges its tRNA with **tyrosine** — the same tyrosine that the _E. coli_ tyrosyl-tRNA synthetase already handles. If you imported the Mj pair as-is, all you'd be doing is duplicating the existing tyrosine machinery. The amber suppressor tRNA would deliver tyrosine to UAG codons, which is mildly useful as a stop-codon read-through tool but doesn't expand the chemistry at all. To get a real expanded code, you need the synthetase to charge its tRNA with something **other than tyrosine** — specifically, with your chosen non-canonical amino acid.

How do you reprogram the synthetase to prefer a different amino acid? You can't just sit down and design the mutation by hand. The amino acid binding pocket of a synthetase is a complicated three-dimensional thing, with multiple residues making contacts with the substrate, and predicting which combination of mutations would shift the specificity from tyrosine to O-methyl tyrosine is, in 2001 at least, beyond rational protein design. So Schultz did something cleverer: he used **directed evolution**.

\[Pause.\]

Directed evolution, in this context, works like this. You take the MjTyrRS gene and you make a giant library of variants — typically by saturation mutagenesis at the residues in the amino acid binding pocket, randomizing several positions all at once, so that you generate millions or tens of millions of different versions of the synthetase, each with a different combination of mutations in the binding pocket. That library is your search space.

Then you need a way to **select** — out of millions of variants — the rare ones that have shifted their specificity from tyrosine to your non-canonical amino acid. You can't screen them one at a time; there are too many. You need a clever selection that, on a single plate of _E. coli_, lets the right variants survive and the wrong variants die.

Schultz's selection scheme was elegant. He used a two-step process: a **positive selection** to find variants that can charge the tRNA with **something**, followed by a **negative selection** to throw out the variants that charge the tRNA with **tyrosine** (the natural substrate, which we don't want). Let me walk through each step.

For the positive selection, he engineered _E. coli_ to require amber suppression in order to survive an antibiotic. Specifically, he put an amber stop codon (UAG) into a critical residue of a chloramphenicol resistance gene. In _E. coli_, the antibiotic chloramphenicol is normally killed by an enzyme called chloramphenicol acetyltransferase, or **CAT**. If you put a UAG codon into the middle of the CAT gene, the gene only makes a truncated, non-functional CAT protein — unless something reads through the UAG, in which case full-length CAT gets made and the cell survives chloramphenicol. So you put the chloramphenicol-sensitive _E. coli_ on a plate with chloramphenicol, with your library of synthetase variants expressed in the same cells, and you supply the non-canonical amino acid in the medium. The only cells that survive are the ones whose engineered synthetase is charging the suppressor tRNA with something — anything — that lets the suppressor deliver an amino acid to the UAG in CAT.

But notice: the positive selection doesn't distinguish between variants that charge the tRNA with the non-canonical amino acid versus variants that still charge it with tyrosine. Both will suppress the UAG and rescue chloramphenicol resistance. So you need a follow-up negative selection.

For the negative selection, Schultz engineered _E. coli_ to die if the suppressor tRNA delivers tyrosine — using a different reporter gene with UAG codons that, when read through with the wrong amino acid, encodes a toxic gene product. Critically, the negative selection is performed **in the absence of the non-canonical amino acid**. So if a variant of the synthetase still charges the tRNA with tyrosine, it will continue to suppress UAG even without the non-canonical amino acid present, the toxic gene will be expressed, and the cell dies. But if a variant has truly shifted its specificity to require the non-canonical amino acid, then in its absence the variant cannot charge the tRNA, no suppression happens, the toxic gene stays silent, and the cell survives.

You alternate positive and negative selections — positive with non-canonical amino acid present, negative without — for several rounds, and the surviving variants are the ones that satisfy both criteria simultaneously: they charge the tRNA with the non-canonical amino acid, and they don't charge it with tyrosine. **That's a synthetase that has been evolved, in the lab, to prefer a brand-new substrate.**

\[Pause.\]

Schultz's 2001 paper put this whole pipeline together for the first time, used it to evolve an MjTyrRS variant that strongly prefers O-methyl tyrosine over native tyrosine, and demonstrated that the resulting orthogonal pair would install O-methyl tyrosine at a UAG codon in a target protein inside _E. coli_, with high fidelity. The non-canonical amino acid showed up where it was supposed to, and not anywhere else, and the cell was healthy. The 21st amino acid had been added on demand.

The cultural impact of that paper is hard to overstate. Suddenly there was a recipe — a real, working, repeatable recipe — for installing any non-canonical amino acid at any chosen position in any protein, in a living cell. The recipe required some engineering work for each new amino acid (you had to evolve a new synthetase variant for each new substrate), but the framework was clear. Within five years, dozens of new non-canonical amino acids had been incorporated using variants of the Schultz pipeline. Within ten years, the catalog had grown to over a hundred. The genetic code, for the first time, was a tunable, expandable thing.

Here's the analogy. **Schultz's 2001 paper was the moment we realized the orthogonal pair trick wasn't just a one-off — it was a platform.** The Mj pair was the prototype. The directed evolution scheme was the manufacturing process for new variants. You picked an amino acid. You ran the selections. You got a new orthogonal pair tuned to your amino acid. You used it. The bottleneck went from "is genetic code expansion even possible?" to "which amino acid do I want to install today?" That's a phase change in what's thinkable.

The rest of this lecture is, in many ways, about what people did with that platform once they had it.

---

## SEGMENT 6 — PylRS and the second great orthogonal pair

The Schultz MjTyrRS system was the first widely used orthogonal pair, and it's still important today. But it has limitations. The most important one is the size of the amino acid binding pocket. MjTyrRS, in its natural state, binds tyrosine — a particular size and shape of substrate — and the pocket has only so much flexibility to accommodate larger or chemically different non-canonical amino acids. You can evolve MjTyrRS variants that handle moderate modifications of tyrosine — replacements of the phenol ring, additions to it, replacements of the hydroxyl with various functional groups — but if you want to install something dramatically larger or chemically very different, MjTyrRS is going to have trouble being evolved that far from its starting specificity. The pocket is a starting constraint.

The field needed a second orthogonal pair, with a different starting specificity and a different pocket, to expand the range of installable chemistries. And, in another beautiful twist, nature had already provided one. Remember the twenty-second amino acid we met in Segment 2, **pyrrolysine**? Recall that pyrrolysine, in certain methanogenic archaea, has its own dedicated synthetase and tRNA. The synthetase is called **PylRS** — pyrrolysyl-tRNA synthetase — and its cognate tRNA is **tRNA-Pyl**. The pair, in its native organism, charges tRNA-Pyl with pyrrolysine and decodes UAG codons in the context of the few methylamine methyltransferase genes that use pyrrolysine.

Now here's the wonderful thing about PylRS. **PylRS's natural substrate, pyrrolysine, is itself a large, chemically complex amino acid** — a lysine with a pyrroline ring tacked on, big and bulky and unusual. Which means PylRS's amino acid binding pocket is already big enough to accommodate bulky substrates. PylRS was, in a sense, pre-adapted for handling chemically interesting amino acids. Even before you do any engineering, the wild-type PylRS can charge tRNA-Pyl with a surprising range of pyrrolysine analogs — modified lysines, lysines with various side-chain attachments, lysines with photocrosslinking groups. The pocket is permissive enough that many useful substrates fit without any modification to the enzyme.

And when you do apply directed evolution to PylRS, you can push it to handle an enormous range of bulky, exotic amino acids. PylRS variants exist today that install lysines with click handles, lysines with photoactivatable groups, lysines with fluorophores, lysines with redox-active centers, lysines with biotin groups. The list is long. PylRS is, in many ways, the workhorse of modern genetic code expansion. If you go to a current lab doing this work, they're probably running a PylRS variant more often than an MjTyrRS variant.

\[Pause.\]

Importantly, PylRS imported into _E. coli_ is orthogonal in the same sense that MjTyrRS imported into _E. coli_ is orthogonal. PylRS comes from archaea — _Methanosarcina_ species, mostly — and it does not crosstalk with _E. coli's_ machinery. The PylRS/tRNA-Pyl pair, dropped into _E. coli_, sits there minding its own business. And — this is a wonderful bonus — PylRS imported into mammalian cells is also orthogonal in mammalian cells. The pair works across hosts. You can use the same PylRS/tRNA-Pyl pair, with the same evolved specificity for some non-canonical amino acid, in _E. coli_, in yeast, in mammalian tissue culture, even in animal models. That cross-host portability is enormously useful. You evolve a synthetase variant once, in bacteria, and then you take the gene and express it in mouse cells or zebrafish embryos, and it still works.

Compare this to MjTyrRS, which is orthogonal in _E. coli_ but not in eukaryotes — because mammalian cells have their own tyrosyl-tRNA synthetases that overlap enough in recognition with MjTyrRS that crosstalk occurs. MjTyrRS is _E. coli_-only in practice. For mammalian work, PylRS is the default.

So now we have two major orthogonal pair platforms. MjTyrRS, evolved by Schultz and many others, handles tyrosine-derivative non-canonical amino acids in _E. coli_. PylRS, derived from archaeal methylamine metabolism, handles bulky lysine-derivative non-canonical amino acids across many host organisms. Between them, you can cover a huge fraction of the amino acid chemistries that anyone has wanted to install. And by mixing them — using both pairs simultaneously in the same cell, reading different codons — you can even install two different non-canonical amino acids in the same protein. We'll come back to that capability later.

\[Pause.\]

Let me drive home the cumulative picture so far. Through the work of Schultz and others, we now have:

A robust **orthogonal pair concept** — borrow a synthetase and tRNA from a phylogenetically distant organism, drop them into your host, and the pair is silent to host machinery.

A robust **directed evolution method** — saturation mutagenesis of the amino acid binding pocket, alternating positive and negative selections, to retune the synthetase's specificity from its native substrate to a chosen non-canonical amino acid.

A robust **codon assignment** — repurpose the UAG amber stop codon (and sometimes UAA or UGA) as the private address for the orthogonal tRNA.

Two robust **platform pairs** — MjTyrRS for _E. coli_ work with tyrosine-like substrates, PylRS for cross-host work with bulky lysine-like substrates.

That's the engineering toolkit. From here, the field's history is the story of what people built with these tools — and how the engineering itself was refined and extended.

Let's start by looking at the catalog of non-canonical amino acids that have been incorporated, because the chemistry is genuinely beautiful and I want you to see the range of what's possible.

---

## SEGMENT 7 — The catalog: over 200 non-canonical amino acids and what they do

By now, the published catalog of non-canonical amino acids that have been site-specifically incorporated into proteins using orthogonal pair systems is well over two hundred. The exact count depends on how strictly you count variants of the same core chemistry, but the order of magnitude is hundreds. And I want to walk you through the major chemical categories, because each category unlocks a different kind of experiment — and once you see the menu, you'll understand why people get excited about this technology.

The first big category, and probably the most widely used, is **click chemistry handles**. These are non-canonical amino acids that carry a chemical group — an azide, an alkyne, a tetrazine, a strained alkene called a norbornene or a cyclooctene — that doesn't appear anywhere in the natural proteome and that reacts rapidly and selectively with a partner group through one of the click reactions. The most famous click reaction is the copper-catalyzed azide-alkyne cycloaddition — the reaction that won Carolyn Bertozzi, Morten Meldal, and Barry Sharpless the 2022 Nobel Prize in Chemistry. There's also the copper-free version called strain-promoted azide-alkyne cycloaddition, and the very fast inverse-electron-demand Diels-Alder reaction between tetrazines and strained alkenes.

When you install a click handle as a non-canonical amino acid at a specific position in a protein, you've put a chemical address on that protein. You can later, after purification or even inside a living cell, react that address with any partner you like — a fluorescent dye, a polymer, a drug payload, a probe, a different protein — and form a covalent bond at exactly the spot you chose, with no off-target labeling. Because no natural amino acid has these reactive groups, the reaction is **bioorthogonal** — it happens at your chosen spot and nowhere else.

\[Pause.\]

The analogy I want for click handles is this. **Installing a click handle as a non-canonical amino acid is like welding a single, very specific docking port onto a complex machine, so that you can later snap any accessory onto that exact spot.** You don't have to modify the machine globally. You don't have to redesign anything. You just install the port at the position you want, and then any time you want to attach something — a sensor, a tool, a payload — you bring it close, the click reaction happens, and your accessory is now attached at exactly that spot. The protein has been site-specifically labeled.

This single capability — site-specific labeling of proteins via genetically encoded click handles — is the workhorse of modern chemical biology. It is how people attach fluorescent dyes to proteins for single-molecule microscopy. It is how people attach drug payloads to antibodies for site-specific antibody-drug conjugates. It is how people make protein-polymer conjugates with defined stoichiometry. It is how people build protein-protein crosslinks for structural studies. Every one of these is essentially the same trick: encode a click handle, then react it with the partner you want.

The most popular click handles in the genetic code expansion world right now are **trans-cyclooctene** (TCO) lysines, which react with tetrazines at second-order rate constants of tens of thousands per molar per second — so fast that the reaction is effectively instantaneous at physiological concentrations. There are also propargyloxy phenylalanine, which has an alkyne handle, and various azide-bearing lysines and phenylalanines. Each has been incorporated using a PylRS or MjTyrRS variant evolved for the specific substrate.

\[Pause.\]

The second big category is **photocrosslinkers**. These are non-canonical amino acids that carry a chemical group that, upon UV irradiation, becomes highly reactive — typically generating a carbene or a nitrene radical — and forms covalent bonds with whatever atom happens to be close by at the moment of irradiation. The two most common photocrosslinkers in the genetic code expansion field are **p-benzoyl-phenylalanine** (pBpa), which uses a benzophenone group, and **diazirine-bearing lysines or phenylalanines**, which generate carbenes upon UV exposure.

Here's why photocrosslinkers are magic. If you install a photocrosslinker at a specific residue in a protein and then put that protein into a complicated mixture — a cell extract, a living cell, a tissue — and shine UV light on it, the photocrosslinker will form a covalent bond with whatever was sitting next to it at that moment. If your protein was bound to a partner protein at that residue, the photocrosslinker will trap the interaction by covalently linking the two proteins together. You can then purify the crosslinked complex and identify the partner by mass spectrometry. **You have captured a fleeting molecular interaction in a permanent covalent record.**

The analogy. **A photocrosslinker is a molecular flash bulb.** When you fire the flash — a pulse of UV light — anything that was close to your tagged residue at that moment gets caught in the picture, permanently, because the picture is a covalent bond rather than a photograph. You can then develop the photo at your leisure. The flash captures binding partners, transient interactions, conformational neighbors, things that ordinary methods would never see because they're too short-lived to characterize biochemically. The photocrosslinker is a way to freeze biology mid-action.

This technique has been used to map binding interfaces, identify previously unknown protein partners, characterize membrane protein topology, and study chaperone-substrate interactions. It's a workhorse in mechanistic biology, and it relies entirely on the ability to install the photocrosslinker at a chosen residue — which is possible only because we can expand the genetic code.

\[Pause.\]

The third major category is **photoswitches**. These are non-canonical amino acids that carry a chemical group that flips between two conformations or two states upon light exposure — typically an azobenzene group, which switches between trans and cis configurations depending on the wavelength of light. Trans is the relaxed, extended form; cis is the photoexcited, bent form. The two configurations have very different geometries, and if you install a photoswitch in a critical position in a protein — say, in a key loop or near an active site — the conformational change of the photoswitch can drive a conformational change of the whole protein.

The practical consequence is that you can build proteins whose activity is controlled by light. Shine UV on the protein, and the photoswitch flips to cis, the protein bends in a particular way, and the active site opens up — the protein turns on. Shine visible light, and the photoswitch flips back to trans, the protein relaxes, and the active site closes — the protein turns off. You have a protein that you can switch on and off with a flashlight.

Here's the analogy. **A protein with a built-in photoswitch is like a light bulb with a button that you can press from across the room with a laser pointer.** The button is the photoswitch. The protein is the bulb. The light is the remote control. You don't have to add anything to the cell — you just shine light of the right wavelength, and the protein toggles its state. The technique is called **photopharmacology** when applied to drug-target interactions, and **optogenetics** in a related but distinct sense when applied to ion channels and neuronal signaling.

For optogenetic ion channels, the original tools like channelrhodopsin used naturally photosensitive proteins. But the genetic code expansion approach lets you go further: you can install a photoswitch in any protein, not just ones that happen to be photosensitive in nature. Receptors, enzymes, transcription factors — you can make any of them light-controlled by putting an azobenzene-derivative non-canonical amino acid at the right spot.

\[Pause.\]

I'll mention a few other categories briefly, because I want you to have a sense of the breadth before we move on.

**Phosphorylation mimics and direct phosphorylation**: there are non-canonical amino acids that contain phospho-serine, phospho-threonine, phospho-tyrosine — actual phosphorylated amino acids — that let you install a genuine phosphorylation site at exactly the residue of interest. This bypasses the usual problem of trying to phosphorylate proteins enzymatically in vitro, which is messy and incomplete. With genetic code expansion, you build the phospho-protein directly.

**Fluorescent amino acids**: there are non-canonical amino acids whose side chains are themselves small fluorophores — dansyl groups, coumarin groups, even fluorescent quenchers. Installing these gives you intrinsically fluorescent proteins without needing to fuse a giant GFP tag, which can perturb function.

**Metal-binding amino acids**: bipyridyl-bearing alanines, terpyridyl groups, hydroxylated phenylalanines — non-canonical amino acids that chelate metals, letting you install a metal-binding site at a chosen residue. Useful for engineering metalloenzymes from scratch or studying metal-protein interactions.

**Isotopic labels**: amino acids with deuterium or carbon-13 or nitrogen-15 at specific positions, installed for NMR studies or mass spectrometry.

**Bioorthogonal release groups**: amino acids that can be cleaved or removed by specific chemical reagents or light, letting you build proteins that "uncage" — that switch from inactive to active — upon a defined trigger.

The list is genuinely enormous, and growing. **Over two hundred genetically encoded non-canonical amino acids span click chemistry, photocrosslinkers, photoswitches, phosphorylation, fluorescence, metal binding, isotope labeling, and chemical caging — and that catalog is the chemical palette of modern protein engineering.** That's the menu. Now let's look at the engineering challenges that come with using it at scale, because there's a wrinkle we haven't fully addressed yet.

---

## SEGMENT 8 — The native UAG problem and Church's recoded E. coli

Let's go back to the issue I flagged in Segment 4. Amber suppression repurposes the UAG codon as a private address for non-canonical amino acid delivery. But UAG, in normal _E. coli_, is still being used by some genes as their natural stop codon. When you run an amber suppression system, your engineered suppressor tRNA can compete with the cell's natural release factors at those native UAG codons, leading to read-through of native genes — extended versions of native proteins with weird non-canonical C-terminal tails. The read-through is usually a small fraction, but it's nonzero, and it contributes to fitness costs that limit how robustly you can run the suppression system.

The classical workaround is to keep suppression efficiency modest, accept some read-through, and live with it. But a much cleaner solution would be to **remove every native UAG codon from the host genome** — so that UAG is no longer a stop codon used by any cellular gene, and the only UAG codons in the cell are the ones you intentionally place in your gene of interest. With UAG fully freed up, amber suppression has no competition. The suppressor tRNA doesn't accidentally read through anything, because there's nothing in the rest of the genome to read through. The system runs at maximum fidelity.

That sounds great. But how do you remove every native UAG codon from a genome? There are several hundred UAG-using genes in _E. coli_. You'd need to go to each one, change the UAG to a different stop codon — let's say UAA — without disturbing anything else. And you'd need to delete the gene for one of the release factors that recognizes UAG, so the only thing in the cell that recognizes UAG is your suppressor tRNA. This is a massive genome engineering project.

This is exactly the project that George Church's lab at Harvard pulled off in 2013, in one of the most remarkable feats of synthetic biology to date. Using a method they had developed called **MAGE** — multiplex automated genome engineering — and another method called **CAGE** — conjugative assembly genome engineering — they systematically rewrote every UAG codon in the _E. coli_ genome to UAA, across the entire chromosome. **The result was a recoded _E. coli_ strain in which UAG is no longer a natural stop codon at all.** UAG, in this strain, is freed for engineered use. Combined with deletion of the release factor RF1, which normally recognizes UAG, the strain is a genuine blank canvas for amber suppression.

\[Pause.\]

I want you to sit with what was accomplished here, because it was not a small piece of engineering. The _E. coli_ genome is about 4.6 million base pairs. The Church lab made on the order of 320 codon changes — every native UAG terminating a gene was recoded to UAA — using methods that allowed dozens of edits to be made in parallel across many cells, and then combinations of edits to be brought together by successive rounds of conjugation. The endpoint was a strain whose genome no longer used UAG anywhere, and whose translation machinery had been stripped of UAG-recognizing release factors. The strain grows fine. It's healthy. And it accepts amber suppression systems with much higher fidelity than wild-type _E. coli_.

Here's the analogy. **The Church recoded _E. coli_ is what you get when you go through an entire library of books and meticulously change every occurrence of a particular punctuation mark — every period that ends a sentence — into a different punctuation mark, freeing the original mark to mean whatever you want.** Every native UAG codon was replaced by UAA, freeing UAG for engineered use. The genome was rewritten so that one specific symbol in the genetic alphabet became available for redefinition. That kind of genome-wide rewriting was, before this paper, an aspirational thing. After this paper, it was a published fact.

\[Pause.\]

And there's a bonus to having a recoded _E. coli_, which the Church lab noticed almost immediately and which has become its own important application area. **Recoded _E. coli_ is resistant to viruses that use UAG codons.** Bacteriophages — viruses that infect bacteria — have their own genomes, and many of those genomes use UAG as a stop codon. When a phage tries to infect a recoded _E. coli_, the phage's mRNAs land in a cellular environment that no longer terminates at UAG properly — the host has deleted the release factor — and the phage proteins get read through their natural stop codons in ways that disrupt phage protein structure. The phages fail to assemble. The host survives.

This phage resistance has practical implications for industrial fermentation, where phage contamination of bacterial cultures is a major cause of failed batches in biomanufacturing. A recoded strain that is intrinsically phage-resistant is a safer industrial chassis. And it pointed toward an even bigger idea, which Jason Chin would push to its logical conclusion in 2019: if recoding one codon makes the cell phage-resistant, what would recoding many codons do?

But before we get there, we need to look at how the field broke out of using only one extra codon at a time. Because as long as you only have UAG repurposed, you can only install one non-canonical amino acid in any given protein. To install two — and there are many applications that need two — you need a second private codon. Let's go.

---

## SEGMENT 9 — Multiple non-canonical amino acids and quadruplet codons

Suppose you want to install two different non-canonical amino acids in the same protein. Maybe you want a click handle on residue 47 for site-specific labeling, and a photocrosslinker on residue 123 for capturing a binding partner. You want both in the same protein, in the same cell, at the same time. With only one orthogonal pair, reading only one private codon, you can't do this. You can only install one chemistry per protein.

To install two non-canonical amino acids, you need two orthogonal pairs — two engineered synthetase-tRNA pairs — that are orthogonal to each other and to the host. Pair one charges its tRNA with non-canonical amino acid number one, and reads codon number one. Pair two charges its tRNA with non-canonical amino acid number two, and reads codon number two. The two pairs don't crosstalk, the two codons don't collide, and you can put codon one and codon two in your gene at whatever positions you want.

The first move is easy: use MjTyrRS for one pair and PylRS for the other. They're orthogonal to each other (because they come from different evolutionary lineages and recognize different tRNAs) and both are orthogonal to _E. coli_. So with MjTyrRS evolved to handle non-canonical amino acid one, and PylRS evolved to handle non-canonical amino acid two, you've got the two pairs. Good.

The hard part is the codons. You need two private codons. UAG is the obvious one. What's the second?

\[Pause.\]

The cleanest second option is **UAA, the ochre stop codon**, repurposed in the same way amber is repurposed. But in normal _E. coli_, UAA is the most common stop codon — used by the majority of genes — and freeing it up would require an even more massive recoding project than Church's UAG work. UAA recoding is being attempted, but it hasn't reached the same maturity as UAG recoding.

A different option, and the one that opened up a beautiful new direction, is to use a **quadruplet codon**. The standard genetic code reads in triplets — three letters at a time. But the ribosome, with a properly designed tRNA, can be made to read in four-letter chunks. If you design a tRNA whose anticodon is four bases long rather than three, and engineer that tRNA to be efficient enough that the ribosome can frame-shift around it, then you can use a four-letter codon — like AGGA, or UAGA, or any other four-letter combination — as a private address.

The advantage of quadruplet codons is that there are huge numbers of them — 256 possible four-letter combinations — and most of them have never been used by nature. You can pick a quadruplet codon that doesn't appear anywhere in your host genome, and use it as a brand-new private address with essentially zero competition from native genes. **Quadruplet codons are a way to expand the codon space rather than just the amino acid space.**

The Jason Chin lab at the MRC Laboratory of Molecular Biology in Cambridge has done much of the foundational work on quadruplet codons. By engineering orthogonal ribosomes that read quadruplet codons more efficiently than the host ribosome, and by combining quadruplet codons with amber suppression, Chin's lab has demonstrated incorporation of multiple distinct non-canonical amino acids into the same protein.

Here's the analogy. **A quadruplet codon is like adding a new digit to the alphabet itself — instead of three-letter words, the ribosome can read four-letter words, and the dictionary of possible meanings explodes.** Triplet codons gave us sixty-four possible meanings. Quadruplet codons give us two hundred and fifty-six. Five-letter codons would give us over a thousand. The ribosome, in principle, doesn't care — given a tRNA with the right anticodon length and the right binding geometry, it'll read whatever framing you provide. The genetic code, with quadruplet codons, becomes a much richer language.

\[Pause.\]

I should be honest: quadruplet codon decoding is still less efficient than triplet decoding. There's a price you pay for frameshifting around the standard reading frame. Yields of protein with quadruplet codons tend to be lower than yields with triplet amber suppression. The technology is real and growing, but it's an active research area, not yet a mature workhorse like amber suppression. The current trend is toward combining strategies — using both freed-up triplet codons (UAG, plus eventually UAA, plus eventually some sense codon) and quadruplet codons — to build proteins with multiple distinct non-canonical amino acids.

The endpoint of this line of research is a cell whose ribosome reads many distinct codons each assigned to a distinct non-canonical amino acid, and where you can install three, four, even five different chemistries in the same protein. We're not all the way there yet, but the trajectory is clear.

\[Pause.\]

Let me pause here and check in. We've covered: the natural exception cases (selenocysteine and pyrrolysine), the orthogonal pair concept, amber suppression, the Schultz 2001 paper, PylRS as a second platform, the catalog of installable amino acid chemistries, the Church recoded _E. coli_, and the move toward multiple non-canonical amino acids via quadruplet codons. That's the technical core of the field. In the second hour, we'll spend our time on what people are doing with these tools — the applications that matter, in medicine, in biology, in biosecurity. And we'll end with a look at the frontier, including AI-assisted design of new synthetases, multi-codon recoding, and synthetic genomes.

Let's take a short break here. When we come back, we'll start with the most commercially important application of genetic code expansion: site-specific antibody-drug conjugates.

\[BREAK\]

---

## SEGMENT 10 — Site-specific antibody-drug conjugates: Sutro and the homogeneous ADC

Welcome back. Let's start the second hour with the application that has put genetic code expansion most firmly on the commercial map: **antibody-drug conjugates**, or **ADCs**.

An ADC is a therapeutic that combines a monoclonal antibody with a small-molecule cytotoxic drug. The antibody targets the drug to specific cells — typically cancer cells expressing a particular surface antigen — and the drug, attached via a chemical linker to the antibody, kills the targeted cell after the conjugate is internalized. ADCs are some of the most successful new cancer drugs of the past fifteen years. Brentuximab vedotin, trastuzumab emtansine, enfortumab vedotin — these are real drugs treating real patients.

The chemistry problem with traditional ADCs is that the drug is attached to the antibody at chemically reactive groups that occur naturally — typically reduced cysteines or surface lysines. There are dozens of these groups on a typical antibody, and the attachment chemistry hits them with varying efficiency. The result is a **heterogeneous mixture** of conjugated species: some antibody molecules carry no drug, some carry one drug at one position, some carry two drugs at different positions, some carry four, and the drugs are scattered across many different sites. This heterogeneity is bad for several reasons. The pharmacokinetics are variable. The potency is averaged. Some attachment sites disrupt antibody binding or stability. Quality control is hard. Manufacturing yield is reduced because some species are inactive.

The dream is a **homogeneous ADC** — one in which every antibody molecule carries exactly the same number of drug molecules, attached at exactly the same positions, every time. And this is exactly what genetic code expansion delivers. You install a non-canonical amino acid with a click handle at one or two chosen positions in the antibody — typically in the constant region where binding isn't disrupted — and then react those handles with drug-linker conjugates carrying the click partner. Because the click reaction is bioorthogonal, the drug attaches only at the engineered positions. Every antibody comes out of the reactor with exactly the same drug load at exactly the same sites.

\[Pause.\]

The analogy. **A traditional ADC is like asking workers to spray-paint a car with no masking tape — paint ends up on the body, the windows, the tires, the handles, all in varying amounts depending on how the spray drifts. A site-specific ADC built with genetic code expansion is like installing precision threaded mounting holes at exactly two positions on the car, and then bolting on accessories that fit only those mounts.** Every car comes out looking identical. The mounting holes are the engineered click handles, the bolt-on accessories are the drug-linker conjugates, and the precision threading is the chemoselective click reaction.

The company **Sutro Biopharma** has built much of its platform on exactly this approach. Sutro uses a cell-free protein synthesis system — the one we discussed in the previous lecture — combined with genetic code expansion to make site-specifically conjugated antibodies in vitro, at scale. Because cell-free systems are friendlier to non-canonical amino acids (no cell metabolism to fight, no fitness costs from amber suppression), Sutro can incorporate the non-canonical amino acid efficiently, conjugate the drug-linker via click chemistry, and produce homogeneous ADCs that go through clinical trials as single defined molecular entities. Other companies — Ambrx, Mediotech, several others — have built similar pipelines.

The clinical implication is that homogeneous ADCs tend to have wider therapeutic windows than heterogeneous ones, because you've removed the under- and over-conjugated species that contribute to off-target toxicity. The technology is real and commercially deployed.

---

## SEGMENT 11 — Photopharmacology and light-controlled proteins in living cells

Let's go from the clinic to the lab bench. **Photopharmacology** is the field of designing drugs and proteins whose activity can be controlled by light. The basic idea: install a photoswitch — typically an azobenzene group — at a critical position in a protein, and use light to switch the protein on and off in real time.

Genetic code expansion is the cleanest route to photoswitchable proteins. You evolve a synthetase variant to install an azobenzene-bearing non-canonical amino acid at a chosen residue, you put a UAG codon at that position, and the cell makes a protein with a built-in light switch. You shine UV light, the azobenzene flips from trans to cis, the protein bends or unbends, and the activity changes.

The application space is wide. **Light-controlled ion channels** for studying neural circuits with millisecond temporal precision. **Light-controlled enzymes** for studying metabolic pathways with subcellular spatial precision — you can activate the enzyme in one part of a cell and watch what happens. **Light-controlled receptors** for dissecting signaling pathways. **Light-controlled DNA-binding proteins** for putting transcription under optical control.

The analogy. **A protein with a photoswitch is a light bulb with a remote control.** You can turn it on, you can turn it off, you can blink it. The remote is a laser or a UV lamp, and the bulb is whatever functional protein you've engineered. Combined with modern microscopy, you can do experiments that would be impossible with conventional pharmacology — activating a single cell in a dish, or a single subcellular region within that cell, with temporal precision of milliseconds.

\[Pause.\]

The same principle has been extended to **photo-uncaging** strategies, where a non-canonical amino acid carries a chemical "cage" that blocks function, and UV light cleaves the cage to release a functional residue. This lets you build proteins that are inactive at baseline and switch on irreversibly when illuminated — useful for triggered enzyme activation, optical control of receptor recruitment, light-triggered apoptosis in specific cells.

Photopharmacology is one of the cleanest demonstrations that the expanded genetic code is a research tool, not just a manufacturing trick. It lets biologists ask questions about timing and localization that no other technology can answer with the same precision.

---

## SEGMENT 12 — Click handles for chemical biology: probing proteins in living cells

We've talked about click handles in the context of ADC manufacturing. Now let's talk about them in the context of basic chemical biology — what happens when you install a click handle in a protein inside a living cell, and then react the handle with a probe of your choosing, also inside the cell.

The standard workflow is something like this. You pick the protein you want to study. You pick the residue you want to label. You evolve, or borrow from the literature, a PylRS variant that installs a click-handle-bearing lysine at UAG codons. You introduce that synthetase, the cognate tRNA, and a target gene with a UAG codon at your chosen position into a mammalian cell line. You feed the cells the non-canonical amino acid. The cells synthesize the target protein with a click handle at your residue. Then you add a click partner — a small molecule that carries the reactive group and any cargo you want — to the cell medium. The click partner diffuses into the cells, finds the click handles on your target protein, and forms covalent bonds.

If the cargo is a fluorescent dye, you've just labeled your target protein with a small, photostable fluorophore at a defined position. Live-cell single-molecule microscopy. Tracking the protein's movement. Studying its kinetics. **All of this is possible because the click handle was installed at exactly one residue, by genetic code expansion, with no off-target labeling anywhere else in the cell.**

If the cargo is a polymer, you've built a defined protein-polymer conjugate inside a living cell. If the cargo is a degrader — a molecule that recruits the ubiquitin-proteasome system — you've built a targeted protein degrader with site-specific control. The technology of **degraders**, also called PROTACs, has recently exploded as a drug discovery strategy, and site-specific installation of degrader-recruiting handles via genetic code expansion is one of the cleanest ways to study them mechanistically.

The analogy carries over: **a click handle is a docking port; the cargo is the accessory; the click reaction is the snap-fit.** What's special about doing this in a living cell is that the docking port can be installed exactly where you want, and the docking happens in real time, in the cell's native environment, with no perturbation of the cellular biochemistry beyond the one residue you've changed.

\[Pause.\]

I should note that not every click chemistry works equally well in living cells. The copper-catalyzed azide-alkyne cycloaddition is great in vitro but the copper is toxic to cells. Copper-free click reactions — strain-promoted azide-alkyne cycloaddition with cyclooctynes, and inverse-electron-demand Diels-Alder reactions with tetrazines and trans-cyclooctenes — are the workhorses for live-cell applications. The Carolyn Bertozzi prize in 2022 was, in large part, recognition of how revolutionary the copper-free click reactions have been for chemical biology.

---

## SEGMENT 13 — Chin's syn61: 61-codon E. coli and synthetic genomes

Now let's go back to the recoding story. In 2013, Church recoded UAG in _E. coli_. In 2019, **Jason Chin's lab pushed the recoding strategy much further** and built an _E. coli_ in which the entire genome had been rewritten to use only 61 of the 64 codons.

The Chin paper, published in _Nature_ in 2019, described an _E. coli_ strain known as **syn61** in which every occurrence of three particular codons had been replaced by synonymous codons throughout the entire genome. Specifically, the team eliminated two serine codons — TCA and TCG, both replaced by other serine codons — and the amber stop codon UAG, replaced by UAA. The resulting genome was synthesized from scratch in chunks, assembled into a working chromosome, and shown to support viable, growing _E. coli_.

The implication is enormous. **By freeing up three codons from native use, Chin created a strain in which those three codons are now available for engineered reassignment.** UAG can be amber-suppressed by an engineered orthogonal pair. TCA and TCG can be assigned to two additional non-canonical amino acids via two more orthogonal pairs. In principle, syn61 can host three different non-canonical amino acids simultaneously, each installed at a distinct codon, each delivered by a distinct orthogonal pair, with no competition from native genes.

\[Pause.\]

The analogy. **Syn61 is what happens when you systematically empty out three letters from the dictionary so you can give those letters new meanings.** You don't just repurpose one stop codon — you go through the entire dictionary, replace every instance of three specific words with synonyms, and the three original words become available as a private vocabulary. The genome was synthesized from scratch with this rewriting baked in; the chassis is a custom artifact, not an evolved organism.

The Chin lab and others have since used syn61 and derivatives to install multiple non-canonical amino acids in the same protein, and to do directed evolution on those proteins in vivo. The platform has also proved to be **broadly resistant to bacteriophages** — like Church's recoded strain, but more so, because three codons of phage genomes are now mis-decoded rather than one.

The vision behind syn61, and the lineage of work it's part of, is a future in which we don't just edit the genetic code locally for a single protein, but in which entire organisms are built with fundamentally rewritten translation rules — chassis cells that can install many non-canonical amino acids in many proteins, that are immune to natural viruses, and that can host chemistries inaccessible to natural biology.

---

## SEGMENT 14 — Biocontainment via recoded genomes

The phage-resistance bonus that came with recoded genomes turns out to have an even bigger implication: **biocontainment**. Let me explain.

One of the abiding worries in synthetic biology is that engineered organisms might escape from a lab or factory and propagate in the wild. We don't want an _E. coli_ strain engineered to make a pharmaceutical drug to escape into a sewer system, persist there, and exchange DNA with wild bacteria. Standard biocontainment approaches — keeping organisms in physical confinement, requiring nutritional dependencies that the wild can't supply — work but aren't perfect.

A recoded genome offers a different layer of biocontainment. If your engineered strain uses a non-canonical amino acid as part of its translation — say, you've recoded the genome and made essential proteins dependent on a non-canonical amino acid that doesn't exist in nature — then your strain literally cannot survive outside the lab. It needs your supplied non-canonical amino acid in the growth medium. Outside the lab, the non-canonical amino acid isn't available; the engineered strain can't translate its own essential proteins; it dies. **The strain is biochemically dependent on a chemical that only humans supply.**

This concept — sometimes called **synthetic auxotrophy** — has been demonstrated in published proof-of-concept systems. The escape frequency of an engineered _E. coli_ strain depending on a non-canonical amino acid for essential gene expression has been measured at on the order of one in ten-to-the-twelfth, several orders of magnitude better than traditional auxotrophy.

\[Pause.\]

The analogy. **Synthetic auxotrophy is biocontainment via a leash made of chemistry. The leash is invisible — there's no fence, no cage — but the moment the organism steps outside the range where humans supply the leash chemical, the organism falls apart.** It can't replicate. It can't even maintain itself. The strain is, in a sense, a biological device that runs only on a chemical battery, and the battery is yours.

Combined with phage resistance, recoded chassis cells make for safer and more controllable industrial strains. The biotech industry has not yet fully adopted them, but the technology is moving in that direction. Sutro's cell-free systems sidestep some of this concern by not having a living cell in the loop at all, but for fermentation-based production, recoded auxotrophic chassis are a real path forward.

---

## SEGMENT 15 — Cell-free systems and the genetic code expansion playground

I want to spend a segment on how genetic code expansion meshes with cell-free protein synthesis — the topic of one of your earlier lectures. The two technologies were essentially made for each other.

Recall that in a cell-free protein synthesis system, the translation machinery — ribosomes, tRNAs, synthetases, energy molecules — is taken out of the cell and put into a tube. There's no living organism to worry about. There's no metabolism to interfere with. There's no fitness cost to suppression, because there's no cell to lose fitness.

This makes cell-free the most permissive environment for genetic code expansion. You can:

Add as much orthogonal synthetase as you want, without worrying about toxicity to the cell.

Add as much non-canonical amino acid as you want, without worrying about transport across the cell membrane.

Use suppression efficiencies that would be lethal in vivo, because there's no in vivo to be lethal in.

Install multiple non-canonical amino acids simultaneously, by combining multiple orthogonal pairs without worrying about fitness costs from multiple simultaneous suppressions.

Use unusual or unstable non-canonical amino acids that wouldn't survive cellular metabolism.

Build proteins at scales — milligrams to grams — that are useful for drug manufacturing.

This is why companies like Sutro use cell-free for their ADC manufacturing. The technology pairs naturally. And in academic labs, cell-free is increasingly the platform of choice for ambitious genetic code expansion experiments — building proteins with three, four, even five non-canonical amino acids, doing it at yields high enough to crystallize the resulting proteins for structural studies.

\[Pause.\]

The analogy here is just multiplicative. Cell-free is a permissive environment; genetic code expansion is a programmable chemistry layer. **Together they form the most flexible protein-building platform we have — the manufacturing line and the parts catalog, both freed from the constraints of any particular living organism.**

If you walk into a forward-looking biotech lab in 2026, you'll see cell-free reactors running genetic code expansion as a routine production method for site-specific conjugates, custom enzymes, and novel protein therapeutics. The technologies have grown up together and reinforce each other.

---

## SEGMENT 16 — Multi-codon recoding and the future of synthetic genomes

Let's look further into the future. Where is the field going next?

The frontier of recoding is **multi-codon synthetic genomes**. Chin's syn61 freed three codons. The next step is to free more — five, ten, twenty codons. Each freed codon, if combined with a corresponding orthogonal pair, lets you install one more non-canonical amino acid. The vision is a chassis cell that can install many distinct chemistries at many positions, all in one protein, all on the fly.

Several labs are working on this. Synthesis costs for whole genomes have fallen dramatically — what cost millions of dollars to synthesize in 2010 costs tens of thousands today, and is continuing to fall. The bottleneck has shifted from synthesis cost to design: which codons should we free, how do we predict the fitness costs of freeing each one, how do we engineer the chassis around the recoded genome.

A related direction is **synthetic yeast and synthetic mammalian cells**. The Sc2.0 project, an international consortium, has been working on synthesizing the entire genome of _Saccharomyces cerevisiae_ with strategic redesigns built in. Genetic code expansion is one of the targets. A recoded yeast or recoded mammalian cell with freed codons would be enormously valuable for protein engineering and drug discovery.

\[Pause.\]

A second frontier is **AI-assisted design of orthogonal synthetases**. The directed evolution pipeline that Schultz pioneered works, but it's slow and labor-intensive. Each new non-canonical amino acid requires building a library, running selections, validating variants. As deep learning models for protein structure and function have improved — AlphaFold, RFdiffusion, ESM — the field has started to ask whether we can computationally design synthetase variants for new substrates, skipping the bulk of the directed evolution work.

Early results are promising. Lab groups have shown that machine-learning-assisted library design can substantially shrink the search space for directed evolution, getting good variants in fewer rounds and at higher hit rates. The endpoint, eventually, would be entirely computational design of synthetases — give the model a non-canonical amino acid structure, get back a synthetase sequence that handles it, with no wet-lab evolution required. We're not there yet, but the trajectory is clear.

\[Pause.\]

A third frontier is **expanding the alphabet itself**. So far, all our discussion has been about non-canonical amino acids — extra letters in the protein alphabet. But there's also work on **non-canonical nucleotides** — extra letters in the DNA and RNA alphabets — and on engineered ribosomes that can polymerize new types of monomers entirely. If you combine an expanded nucleotide alphabet with an expanded amino acid alphabet, you get a programmable system that's much richer than the natural one.

The Floyd Romesberg lab built _E. coli_ strains that stably maintain a pair of unnatural nucleotides — X and Y, base-paired in their own way — in addition to A, T, G, and C. The strain has a six-letter genetic alphabet rather than four. Combined with engineered orthogonal pairs that decode codons containing the new nucleotides, you can in principle have an enormous number of new codons, each freely assignable.

The endpoint of all of this is a synthetic biology where the line between the natural code and the engineered code is essentially gone. Proteins can contain any chemistry you can design. Genomes can be entirely synthetic. Codons can be freely assigned. The cell becomes a fully programmable chemical factory.

---

## SEGMENT 17 — Caveats, limits, and what genetic code expansion is bad at

Before we wrap up, let me be honest about the limits of the technology, because it's not magic and not all applications work equally well.

**Yield**. Amber suppression — even in recoded strains — typically gives lower yields than wild-type translation. You're competing with whatever residual stop-codon machinery exists, you're running an extra system in the cell, and the suppressor tRNA doesn't deliver as efficiently as the native tRNAs. Yields are often 30-70% of what you'd get without suppression. For research and some therapeutics, that's fine. For high-volume commodity proteins, it's a real cost.

**Substrate uptake**. Non-canonical amino acids need to get into the cell from the medium. Cells have transporters that handle natural amino acids, and these transporters work, with varying efficiency, on amino acid analogs. But some non-canonical amino acids — especially big bulky ones, or charged ones — get into cells poorly. You can engineer transporters, you can use cell-free systems, but the bottleneck is real.

**Multi-site incorporation**. Installing one non-canonical amino acid per protein is fine. Installing two is harder. Installing three is research-grade. Installing five or more is at the cutting edge and not yet routine. The compounding fitness costs and the codon-availability problem both contribute.

**Synthetase substrate scope**. Even with directed evolution, you can only push a synthetase so far from its starting specificity. Some non-canonical amino acids — those that look very different from any natural amino acid — are still hard or impossible to install efficiently. The field works around this by finding new starting scaffolds, but there's no universal synthetase that handles everything.

**Toxicity to the cell**. Some non-canonical amino acids interfere with normal cellular processes. Some are taken up by other enzymes and incorporated into other biomolecules. Some are themselves toxic at concentrations needed for efficient incorporation. Cell-free systems sidestep this.

**Manufacturing scale**. While Sutro and others have built robust manufacturing pipelines for site-specific ADCs, the technology is still more expensive per gram than wild-type protein production. The cost is coming down, but it's not a zero-cost technology.

\[Pause.\]

These caveats are real but they are not show-stoppers. They are the kind of engineering constraints that get solved over decades, the way fermentation engineering got solved over the second half of the twentieth century. The trajectory is favorable. Each year, new chemistries are added to the catalog, yields improve, more host organisms become available, and more applications go from research-grade to clinical-grade.

But you should not walk out of here thinking genetic code expansion is a universal solvent. It's a powerful, specific tool, with real costs, real bottlenecks, and a real learning curve. It is, in 2026, where recombinant DNA was in maybe 1990 — past the proof-of-concept era, into the workhorse era, but with the bulk of its potential still ahead.

---

## SEGMENT 18 — Recap, big picture, and the road from twenty to many

Let's wrap up by tying everything together. The arc of this lecture, in one paragraph: nature builds proteins out of twenty canonical amino acids, but it also showed us — through selenocysteine and pyrrolysine — that the translation machinery is flexible enough to accommodate extra amino acids when delivered by dedicated orthogonal aaRS/tRNA pairs that don't interfere with the existing twenty. Peter Schultz in 2001 generalized that natural trick, importing a synthetase-tRNA pair from a distant archaeon into _E. coli_, evolving the synthetase to prefer a non-canonical amino acid, and using the amber stop codon as a private address for delivery. From that single template, the field has grown into a catalog of over two hundred installable chemistries — click handles, photocrosslinkers, photoswitches, phosphorylation mimics, fluorescent groups, metal-binders — and into applications that include homogeneous antibody-drug conjugates, light-controlled proteins in living cells, biocontainment via synthetic auxotrophy, and ever more ambitious recoded synthetic genomes. The genetic code, once a fixed alphabet, is now a programmable one.

\[Pause.\]

Let me give you the three things to remember.

**One**: orthogonality is the engineering trick at the heart of the field. An aaRS/tRNA pair imported from a distant organism doesn't crosstalk with the host machinery, which lets you install a 21st amino acid without poisoning the cell. The Mj pair and the Pyl pair are the canonical examples; the Lego brick analogy or the mail-sorting facility analogy will get you the rest of the way.

**Two**: amber suppression is the workhorse codon-assignment trick. Repurpose the UAG stop codon as a private address. Put UAG in your gene at the position you want the non-canonical amino acid. The engineered suppressor tRNA delivers the cargo. Native UAGs cause a small fitness cost that's managed by tuning or by recoding the genome.

**Three**: directed evolution is the manufacturing process for new orthogonal pairs. Saturation mutagenesis of the synthetase pocket, alternating positive and negative selections, and you get a synthetase variant tuned to your chosen non-canonical amino acid. Over time, the catalog of available substrates grows.

If you can recite those three things, with examples, with analogies, you understand the field. Everything else is application or refinement.

\[Pause.\]

A final reflection. There's a deep philosophical strangeness to what this field has accomplished. The genetic code — the mapping from codons to amino acids — was, until recently, treated as one of the most universal, most ancient, most untouchable features of biology. It's the same in bacteria and whales. It's been the same for three and a half billion years. Every biology textbook has the codon table, and every textbook teaches it as if it were a law of nature. **And we have edited it.** We have proven, by repeatable engineering, that the code is not a law but a design — a design with degrees of freedom that evolution never explored, parts of the design space that biology never visited.

That changes how we think about biology. It changes how we think about the boundary between the natural and the engineered. It changes what's possible in protein design. It changes what therapeutics can be built. And it points toward a future in which the line between biology and chemistry, between evolved life and designed life, gradually fades.

You are studying biology at a moment in which the basic alphabet of life is being expanded by deliberate human design. That's an extraordinary thing to live through. The expanded genetic code is not the only example — CRISPR is another, synthetic biology more broadly is another — but it is one of the cleanest. And the trajectory is just beginning.

That's the lecture. Thank you for your attention. Hold your questions for a minute while we transition; the appendix that follows contains the reference list, a glossary of key terms, and a few notes for further study.

\[Pause.\]

---

## APPENDIX — Reference list, glossary, and further reading

**Key papers in chronological order**:

- Nirenberg & Matthaei (1961). The poly-U experiment establishing UUU as a phenylalanine codon. The cell-free systems used in this work are the historical ancestor of all in vitro translation, including modern genetic code expansion work.
- Hao et al. (2002). Crystal structure of pyrrolysine and characterization of PylRS. Established pyrrolysine as a natural 22nd amino acid.
- Wang, Brock, Herberich & Schultz (2001), _Science_. The foundational paper of genetic code expansion in living cells. Demonstrated directed evolution of an orthogonal MjTyrRS variant that installs O-methyl tyrosine at amber codons in _E. coli_.
- Chin et al. (2002), _Journal of the American Chemical Society_. Early extension of the Schultz approach to additional non-canonical amino acids, including photocrosslinkers.
- Lajoie et al. (Church lab, 2013), _Science_. The first genome-wide recoding of _E. coli_ — all UAG codons replaced by UAA, freeing UAG for engineered use. Demonstrated phage resistance and improved amber suppression in the recoded strain.
- Fredens et al. (Chin lab, 2019), _Nature_. The syn61 paper — a synthetic _E. coli_ genome with three codons removed throughout, enabling multi-codon orthogonal pair use.
- Kang et al. and various follow-up papers. Cell-free genetic code expansion at scale, as deployed by Sutro Biopharma and other ADC manufacturers.

**Glossary of key terms**:

- **aaRS** (aminoacyl-tRNA synthetase): the enzyme that charges a tRNA with its cognate amino acid.
- **Orthogonal pair**: an aaRS/tRNA pair that operates inside a host cell without crosstalk to the host's twenty native pairs.
- **Amber suppression**: the use of an engineered tRNA to read the UAG stop codon as a sense codon, inserting an amino acid where the ribosome would otherwise terminate.
- **Suppressor tRNA**: a tRNA engineered to read a stop codon as a sense codon. In amber suppression, an anticodon of CUA reads UAG.
- **MjTyrRS**: the tyrosyl-tRNA synthetase from _Methanocaldococcus jannaschii_, the workhorse orthogonal pair for _E. coli_ work.
- **PylRS**: the pyrrolysyl-tRNA synthetase from _Methanosarcina_ species, the workhorse orthogonal pair for mammalian and cross-host work.
- **Non-canonical amino acid (ncAA)**: an amino acid other than the twenty standard ones; includes selenocysteine and pyrrolysine plus all engineered substrates.
- **Click chemistry**: a family of fast, selective bioorthogonal reactions used to attach payloads to non-canonical amino acid handles.
- **Directed evolution**: an in vitro selection method for engineering proteins to have new properties — in this context, retuning synthetase specificity to a new substrate.
- **Recoded genome**: a genome in which one or more codons has been systematically replaced by synonymous codons, freeing the original codon for engineered use.
- **Syn61**: Chin's synthetic _E. coli_ in which 61 of 64 codons are used naturally, with three codons (TCA, TCG, UAG) freed for engineered reassignment.
- **Synthetic auxotrophy**: a biocontainment strategy in which an engineered organism requires a non-canonical amino acid in the growth medium to survive, preventing escape into the wild.

**Suggested further reading**:

- Review articles by Jason Chin in _Annual Review of Biochemistry_ and _Nature Reviews Molecular Cell Biology_.
- Review articles by Peter Schultz in _Annual Review of Biochemistry_ and various textbooks.
- The textbook _Genetic Code Expansion: Methods and Protocols_ in the Methods in Molecular Biology series.
- For the cell-free angle, the writings of Michael Jewett and Vincent Noireaux on TXTL systems.
- For the chemistry angle, reviews on bioorthogonal click chemistry by Carolyn Bertozzi.

**Lab exercise suggestions** (for instructors using this script):

- Have students design an amber suppression experiment for a protein of their choice — pick a residue, justify the choice, design the mutagenesis primers.
- Have students compare the substrate scope of MjTyrRS variants versus PylRS variants by examining published lists of incorporated non-canonical amino acids.
- Have students sketch the positive and negative selection circuits used in Schultz's directed evolution scheme, identifying which components are required for each step.
- Have students debate the ethical implications of synthetic genomes and biocontainment, using the recoded _E. coli_ and syn61 work as case studies.

That's the end of the lecture. Thanks again, and good luck with your reading.


