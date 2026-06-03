# Sequence Alignment and BLAST: The Foundational Operation of Bioinformatics

**A 2-hour undergraduate bioinformatics lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to 100 minutes, plus a mid-point break, which gets you to a comfortable two-hour slot once you allow for questions. (Read faster, ~140 wpm, and it lands nearer 85 minutes, leaving room for discussion.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — The fundamental bioinformatics operation

Alright, let's get started. Good morning, everyone. Today and for the next two hours, we're going to talk about **sequence alignment** — and I'm going to tell you up front that this is, hands down, the most important single operation in all of bioinformatics. If there is one piece of computational machinery on which the entire edifice of modern molecular biology rests, it is the algorithm we are about to spend two hours on. Every Illumina pipeline you've ever heard of, every nanopore long-read run, every protein homology search, every phylogenetic tree, every variant call, every metagenomics assignment, every RNA-seq experiment, every single-cell analysis — every one of them, somewhere in the middle, calls a function that aligns one biological sequence to another. The function might be called BLAST. It might be called BWA. It might be called minimap2 or Bowtie2 or STAR or HMMER. They all do the same thing. They all answer the same question. They are all variations on the same theme. And the theme is what we are going to take apart today.

Let me tell you what the theme is, in one sentence. **Given two strings of letters — call them DNA, call them protein, call them whatever you like — find the best way to line them up, allowing for substitutions where letters differ, and gaps where one string has an insertion or a deletion relative to the other.** That sentence is the entire problem statement of sequence alignment. It sounds almost trivially simple. And it is, when the strings are short, and when there's a clear answer. The trick — and the reason we need a two-hour lecture — is that the strings are not always short. The strings can be three billion letters long. There can be a hundred million of them. The space of possible alignments grows exponentially with length. The naive way of computing the answer would take longer than the age of the universe to run. So a lot of clever people have spent fifty years inventing better and better algorithms — first exact, then approximate, then approximate-but-fast, then approximate-but-fast-and-clever — to give you back an answer in seconds, where the naive method would never finish.

\[Pause.\]

Here's the analogy I want you to hold for the next two hours. Imagine two old manuscripts of the same ancient text — say, two copies of a Shakespeare play that scribes have hand-copied across centuries. They started from the same original. But scribes are sloppy. One scribe accidentally wrote "the" instead of "thee." Another scribe skipped an entire word. A third scribe wrote a whole paragraph that the original didn't have. Two centuries later, you have two manuscripts that are almost the same, but not quite. Your job, as a scholar, is to line them up — character by character, word by word — and figure out where the substitutions happened, where the deletions happened, where the insertions happened, and ultimately what the original text most likely said.

That is **literally** what sequence alignment is. Two DNA sequences are two scribe-copied manuscripts. They started from a common ancestor. Evolution has introduced changes — point mutations, which are substitutions; insertions, which are gaps in the older copy; deletions, which are gaps in the newer copy. Your job, as a bioinformatician, is to line them up and figure out what changed. Same problem. Same algorithmic structure. The chemistry is different, but the abstract problem — find the best alignment between two related strings — is exactly the same. And it turns out that the same dynamic programming algorithm that solves the Shakespeare problem is the one that solves the DNA problem, and the protein problem, and the spelling-correction problem in your word processor, and the diff utility in git, and — if you squint — the speech recognition problem. Sequence alignment is one of those rare algorithmic patterns that shows up everywhere.

\[Pause.\]

If you walk out of here in two hours and you can do three things — one, sketch on a whiteboard how dynamic programming fills in a matrix to find the optimal alignment of two short sequences, and explain why the answer is in the corner and the alignment is recovered by backtracking; two, explain in plain English why exact dynamic programming is too slow for billion-base genomes, and how the seed-and-extend heuristic — the idea behind BLAST and every modern aligner — gets around it; three, look at a BLAST report or a SAM file from a real pipeline and tell me what the bit score means, what the E-value means, what a CIGAR string is, and whether the alignment is trustworthy — then we've succeeded. Everything else hangs off those three.

One more orienting thought before we go deeper. Sequence alignment, as a field, has a peculiar history. The foundational algorithm — Needleman-Wunsch, which we'll meet in Segment 2 — was published in 1970, before there was even a single complete protein sequence longer than a few hundred residues to align. The mathematicians figured out the right answer before the biologists had any data to feed into it. Then, twenty years later, when Sanger sequencing started producing real volumes of DNA, the algorithm was sitting there waiting. By the late 1980s, when GenBank started growing exponentially, the exact algorithm was too slow to search the whole database, and a faster heuristic was needed — and that's where BLAST came in, in 1990, and changed everything. Then twenty more years later, when Illumina started producing billions of short reads per run, BLAST itself was too slow, and a new generation of ultrafast aligners — BWA, Bowtie, Bowtie2 — appeared. Then long reads came along, and minimap2 was invented. The history of sequence alignment is, in a real sense, the history of bioinformatics responding to one wave after another of new sequencing data. Each wave demanded a faster algorithm. The algorithms got faster. Biology kept up.

So that's the contract. Two hours, one operation, the most important one in the field. We're going to start with the abstract problem, build up the exact algorithm, then break it on purpose by going to genomic scale, then introduce the heuristics that got us out of the corner. Let's begin with what "similar" even means.

---

## SEGMENT 2 — What does "similar" mean for two sequences?

Before we can talk about algorithms for aligning sequences, we have to talk about what we even mean by a "good" alignment. Because alignment is an optimization problem — we're picking the best alignment from some space of possibilities — and to optimize, you need a scoring function. Different scoring functions give you different best alignments. The choice of scoring function is the part of the problem that depends on biology; the algorithm that finds the best alignment given a scoring function is the part that depends on computer science. We need to spend a few minutes on the biology piece first, because it sets up everything that follows.

Consider two short DNA sequences. Let's say the first one is **ACGTAGC** and the second one is **ACGCAGC**. Stare at them for a second. They are seven letters long, and they match at positions one, two, three, five, six, and seven. At position four, the first one has a T and the second one has a C. That's a **substitution** — one base has been swapped for another, presumably by a point mutation somewhere in the evolutionary history connecting these two sequences. The alignment is pretty obvious: line them up letter by letter, mark the mismatch at position four, done. Six matches, one mismatch.

Now consider a slightly trickier pair. First sequence: **ACGTAGC**. Second sequence: **ACGAGC**. The second one is six letters long, not seven. If you try to line them up letter by letter from the left, you get matches at positions one, two, three, then a mismatch at four (T versus A), then mismatches at five and six and seven as well. That looks like a disaster — four mismatches in a row. But there's a better alignment: assume the T at position four of the first sequence was **deleted** in the second sequence — so the second sequence is missing one letter — and align position five of the first to position four of the second, position six of the first to position five of the second, and position seven of the first to position six of the second. Now you have six matches and one gap. That's much better.

\[Pause.\]

This is the essential complication. **Alignments can have gaps.** Gaps represent insertions or deletions — collectively called **indels** — that happened in the evolutionary history of the two sequences. When you align two sequences, you're not just deciding which letters match which letters; you're also deciding where to insert dashes — gaps — in one or both sequences so that the matching parts line up. The space of possible alignments includes all the ways to introduce gaps in either sequence, which is a huge space. For two sequences of length n and m, the number of distinct alignments is roughly the central binomial coefficient — it grows exponentially with sequence length. You cannot enumerate them all for any non-trivial sequence. You need to be smart.

So we need a scoring function that, given any specific alignment, tells us how good that alignment is. Then we want the algorithm that finds the alignment with the highest score. Let me show you the simplest possible scoring function for DNA, just to get the idea. **Each matching position scores +1. Each mismatching position scores -1. Each gap position scores -2.** Add up the scores along the alignment, and that's the alignment's score. Higher is better.

So in our first example — ACGTAGC versus ACGCAGC — the obvious alignment has six matches and one mismatch. Score: 6 times 1, plus 1 times -1, equals +5. The other obvious thing to try would be to introduce a gap, but any alignment with a gap will pick up at least one -2 penalty, plus you'd still have a few mismatches, so it would be worse. The no-gap alignment wins.

In the second example — ACGTAGC versus ACGAGC — the no-gap left-aligned attempt has three matches, then a string of mismatches. Score: 3 times 1, plus 4 times -1, equals -1. The alignment with a gap in the shorter sequence has six matches and one gap. Score: 6 times 1, plus 1 times -2, equals +4. The gapped alignment wins. The scoring function correctly tells us that the gap is the right interpretation.

\[Pause.\]

This is the basic structure of the problem. **Match score, mismatch penalty, gap penalty. Find the alignment that maximizes the total score.** Different scoring schemes encode different biological assumptions. For DNA, a simple +1/-1/-2 scheme is fine for many purposes, because the four DNA bases are all chemically similar and any substitution is roughly equally likely. For protein, things get more interesting, because the twenty amino acids have very different chemistries — replacing leucine with isoleucine is almost free, biologically, because they're nearly identical hydrophobic residues, whereas replacing leucine with arginine is dramatic, because you've turned a hydrophobic side chain into a positively charged one. The scoring function for proteins needs to reflect that — substitutions between similar amino acids should cost less than substitutions between dissimilar ones. That's where the famous **PAM** and **BLOSUM** matrices come in, and we'll spend Segment 5 on them.

For gaps, there's another subtlety. Biology tells us that opening a new gap is rare, but once a gap is open, extending it by another base or two is much more common — because real indels often span multiple bases at once. A single deletion of ten bases is far more likely, evolutionarily, than ten independent deletions of one base each in the same region. So most real scoring schemes use what's called an **affine gap penalty**: opening a gap costs a lot — say, -10 — but each additional base of gap extension only costs a little — say, -1. The math gets slightly more complicated, but the principle is the same: a scoring function that reflects what evolution actually does.

There's also a concept you should know called **edit distance**. Edit distance is the simplest possible measure of similarity between two strings — it's the minimum number of single-character edits (insertions, deletions, or substitutions) needed to turn one string into the other. ACGTAGC and ACGCAGC have edit distance one — a single substitution. ACGTAGC and ACGAGC have edit distance one too — a single deletion. ACGTAGC and TTTTTT have edit distance seven — change every letter. Edit distance is a special case of sequence alignment scoring, with match score 0, mismatch penalty 1, gap penalty 1, and minimization instead of maximization. The classical name for computing edit distance is the **Levenshtein distance algorithm**, published in 1965 by Vladimir Levenshtein. It's the grandparent of sequence alignment, and structurally it's the same dynamic program we're about to meet. The biologists picked up the algorithm a few years later and dressed it up with biology-aware scoring matrices, but the bones are Levenshtein's.

So that's the setup. **Two sequences. A scoring function with match, mismatch, and gap terms. Find the best alignment.** Now let's see how Needleman and Wunsch, in 1970, taught us how to find it.

---

## SEGMENT 3 — Needleman-Wunsch (1970): global alignment by dynamic programming

In 1970, Saul Needleman and Christian Wunsch published a paper titled "A general method applicable to the search for similarities in the amino acid sequence of two proteins" in the Journal of Molecular Biology. It was four and a half pages long. It introduced the first general algorithm for optimal sequence alignment, and it has been cited tens of thousands of times since. The algorithm, which we now call Needleman-Wunsch, is the foundational piece of bioinformatics. Every modern aligner traces its lineage to this paper.

Needleman and Wunsch's key insight is the move that underlies all of **dynamic programming**, which is a general technique in algorithms for problems that have a recursive structure with overlapping subproblems. The insight, in plain English, is this. **If you know the best alignment of every prefix of sequence one with every prefix of sequence two, then you can compute the best alignment of the full sequences by extending those prefix alignments by one step.** Break the big problem into small overlapping sub-problems, solve the sub-problems once and store their answers in a table, then use those stored answers to solve bigger sub-problems. Eventually you reach the full problem.

Let me make this concrete. Imagine a grid — a two-dimensional table — where the columns are labeled by the letters of sequence one, plus an initial empty column, and the rows are labeled by the letters of sequence two, plus an initial empty row. So if sequence one is m letters long, the grid has m+1 columns. If sequence two is n letters long, the grid has n+1 rows. The cell at row i, column j of the grid will hold a number — the **best score** of aligning the first j letters of sequence one with the first i letters of sequence two. That's the meaning of every cell. Once we've filled in every cell, the answer to the original problem — the best alignment of all of sequence one with all of sequence two — is the number in the bottom-right corner of the grid.

\[Pause.\]

Now, how do you fill in the cells? Here is the magic. To compute the value of any cell — call it cell (i, j) — you only need to know the values of the three cells immediately to its top-left, top, and left. The reason is this. There are exactly three ways the alignment ending at cell (i, j) could have arrived there. **One**: the alignment ending at (i, j) consists of the alignment ending at (i-1, j-1), plus one more aligned pair of letters — the j-th letter of sequence one matched with the i-th letter of sequence two. If those two letters are the same, you score +1 for a match. If they're different, you score -1 for a mismatch. So the value at (i, j) along this path is the value at (i-1, j-1) plus the match-or-mismatch score. **Two**: the alignment ending at (i, j) consists of the alignment ending at (i, j-1), plus a gap in sequence two — meaning, you slid sequence one forward by one letter without using a letter of sequence two. That's a gap, scoring -2. So the value at (i, j) along this path is the value at (i, j-1) plus the gap penalty. **Three**: the alignment ending at (i, j) consists of the alignment ending at (i-1, j), plus a gap in sequence one — slid sequence two forward by one letter without using a letter of sequence one. That's also a gap, scoring -2. The value along this path is the value at (i-1, j) plus the gap penalty.

The optimal score at (i, j) is just the maximum of these three. **The best of (diagonal plus match-or-mismatch), (left plus gap), and (top plus gap).** That's the recurrence. That's the whole algorithm, in one formula.

You start at the top-left corner — cell (0, 0) — which represents aligning the empty prefix of both sequences. Score zero. Then you fill in the top row, which represents aligning a growing prefix of sequence one to the empty prefix of sequence two — that's all gaps, so cell (0, j) gets score j times the gap penalty. Similarly the left column gets cell (i, 0) equal to i times the gap penalty. Now you have the boundary. You fill in cell (1, 1) using the recurrence — looking at cells (0, 0), (0, 1), and (1, 0). Then (1, 2), then (1, 3), going row by row, left to right, top to bottom, until you've filled the whole grid. Each cell takes constant time to compute. There are roughly m times n cells. So the total time is O(mn) — proportional to the product of the two sequence lengths. The space is also O(mn) for the grid.

\[Pause.\]

Now you've filled in the grid. The bottom-right corner — cell (m, n) — holds the best score for aligning the full sequences. But the score itself isn't the alignment. To recover the actual letter-by-letter alignment, you do something called **traceback**. Starting from the bottom-right corner, at each cell you ask: "which of the three predecessors did I come from? The diagonal, the left, or the top?" If I came from the diagonal, then this cell represents a letter pair — match or mismatch — and I emit the j-th letter of sequence one paired with the i-th letter of sequence two, and step diagonally back. If I came from the left, then this cell represents a gap in sequence two, and I emit the j-th letter of sequence one paired with a dash, and step left. If I came from the top, it's a gap in sequence one — dash paired with the i-th letter of sequence two — and I step up. Keep doing this until you reach the top-left corner. The sequence of emissions, reversed, is the optimal alignment.

There's a small bookkeeping question — what if two predecessors are tied for best? Standard practice is to pick one, usually with a fixed priority (diagonal first, then left, then top), which gives you a deterministic alignment. Sometimes you want to enumerate all the equally-best alignments, which means recording all the ties during fill-in and traversing all the back-pointer chains during traceback. That's a small extension.

Here's the analogy I want you to hold for this whole segment. **Dynamic programming is the table approach. You fill in a grid where each cell stores the best score for aligning the prefixes of both sequences ending at that cell. The answer is in the corner. The alignment itself is recovered by backtracking through the grid, reading off which predecessor each cell came from.** That's the picture. Memorize it. Sketch a four-by-four grid on a napkin. Trace through the recurrence by hand once. It will stick.

\[Pause.\]

Needleman-Wunsch, as published, is what we now call a **global** alignment algorithm. The word "global" is doing real work — it means the algorithm forces both sequences to be aligned end to end. The bottom-right corner of the grid represents aligning all of sequence one with all of sequence two. Every letter of both sequences participates. If the two sequences are similar across their whole length — for example, two orthologous genes from closely related species, both roughly the same length — global alignment is the right tool. You want to know how the entire sequence one corresponds to the entire sequence two.

But what if the two sequences are not similar across their whole lengths? What if you have a short query — say, a small protein domain — and you want to find where that domain shows up inside a much larger protein? Forcing the short query to align across the whole big protein is silly — you'd be paying gap penalties for all the parts that don't match. You don't want a global alignment; you want a **local** alignment — find the best matching region between the two sequences, ignoring everything outside it. That problem motivated the next big algorithm, which we'll cover in the next segment.

But before we move on, one cultural note. Needleman-Wunsch was published in 1970. At the time, the first complete protein sequences had only just become available — Sanger's insulin, a few other small proteins. There were no whole-genome sequences. There was no GenBank. The authors couldn't run their algorithm on much. They published it as a general method, with worked examples on small proteins, and it sat for years before it had real data to chew on. It was, in a real sense, a theoretical contribution waiting for the experimental field to catch up. By the late 1980s, when DNA sequence databases started exploding, the algorithm was there, waiting, ready to be applied. That's a recurring pattern in this field — algorithms developed for one purpose, sitting on the shelf, until data finally arrives to make them useful.

---

## SEGMENT 4 — Smith-Waterman (1981): local alignment

Eleven years after Needleman and Wunsch, in 1981, Temple Smith and Michael Waterman published a paper titled "Identification of common molecular subsequences." It was two pages long. It made one tweak to the Needleman-Wunsch algorithm, and that one tweak turned global alignment into **local** alignment. The new algorithm, now universally called Smith-Waterman, is the standard for finding the best matching substring between two sequences. Every protein-protein homology search you've ever heard of — every BLASTP hit, every domain match in Pfam — is, somewhere underneath, a Smith-Waterman calculation.

The tweak is so simple I can tell you in one sentence. **At every cell of the dynamic programming matrix, in addition to the three options Needleman-Wunsch considered — diagonal, left, top — you add a fourth option: zero.** The new recurrence says: the value at cell (i, j) is the maximum of (diagonal plus match-or-mismatch), (left plus gap), (top plus gap), and zero. That's it. That's the entire modification.

What does adding zero do? It means that no cell is ever allowed to go negative. The moment the alignment score would drop below zero, the algorithm just resets to zero and starts over from that cell. The effect of this is that the alignment is no longer forced to include all of both sequences. Instead, the algorithm naturally finds the **best-scoring contiguous diagonal block** in the grid — the region of the two sequences where the matches dominate and the score stays positive. Outside of that region, the score gets reset to zero, and that part of the sequences is effectively ignored.

\[Pause.\]

Two more changes accompany the zero. First, the boundary conditions are different. In Needleman-Wunsch, the first row and first column are initialized to multiples of the gap penalty — because we're forcing the alignment to start at the corner. In Smith-Waterman, the first row and first column are all zeros — because the alignment can start anywhere. Second, the traceback starts not from the bottom-right corner, but from **the highest-scoring cell anywhere in the grid**. You scan the whole matrix, find the cell with the maximum value, and start the traceback there. You walk back through predecessors as in Needleman-Wunsch, but you stop the moment you reach a cell with value zero. That zero marks the start of the local alignment. The path from the zero cell to the maximum cell is the best local alignment.

Here's the analogy. **Needleman-Wunsch is the global aligner. It forces the entire two sequences to be aligned end to end. It's the right tool when you're comparing two orthologs of similar length and you want to know the correspondence across the whole molecule. Smith-Waterman is the local aligner. It finds the best matching subsequences anywhere within the two sequences. It's the right tool when you're searching a short query against a long database, or looking for a conserved domain inside two otherwise dissimilar proteins, or trying to identify a transposable element embedded in two different genomic contexts.** Global versus local. Two algorithms, one tweak apart, with very different use cases. Most of the time, in practice, what you want is local.

The time and space complexity of Smith-Waterman are the same as Needleman-Wunsch — O(mn) for both. The constant factor is essentially identical. It's the same fill-the-grid procedure with one extra max-with-zero operation per cell. If you can compute Needleman-Wunsch, you can compute Smith-Waterman with a tiny modification.

\[Pause.\]

Let me make one more point about Smith-Waterman that matters in practice. Because the algorithm allows alignments to start and end anywhere in the grid, you can also find **multiple** non-overlapping local alignments between the same pair of sequences. You find the best one. Then you mask it out — zero out the cells along its path — and re-run traceback to find the second-best. And so on. This is useful when, for example, a protein contains multiple repeated domains, and a single search reveals all of them.

There is one practical limitation of Smith-Waterman, and we'll see how the field worked around it. The algorithm is **exact** — it is guaranteed to find the optimal local alignment, given the scoring function. But it is O(mn). If your query is a thousand-letter protein and your database is, say, the entire UniProt database — which has hundreds of millions of letters of total sequence — then m times n is on the order of 10^11. That's a hundred billion cells. A modern computer can fill a few billion cells per second on a single core, so a full Smith-Waterman scan of UniProt with a single protein query would take tens of seconds to a minute. Doable, but expensive. Now imagine you have a thousand queries. Or imagine the database is the full NCBI nr database, which is ten times bigger. Or imagine you want to compare two whole genomes — a billion letters by a billion letters. That's 10^18 cells. A trillion seconds. Thirty thousand years. Not happening.

So Smith-Waterman is exact, but it's slow. The field needed a way to be approximate but fast. That's BLAST. We'll get there.

\[Pause.\]

One last thing before we move on. There's an interesting tradition in this field of naming algorithms after people, and Smith-Waterman is one of the great examples. Mike Waterman went on to write the textbook — literally called **Introduction to Computational Biology** — that taught a generation of bioinformaticians the basics of the field. He founded one of the first computational biology departments, at USC, in the 1990s. Temple Smith continued working on sequence analysis at Boston University. Both of them are alive, both of them are still active, and the algorithm that bears their names runs, in some form or another, billions of times a day across the world's biology labs. That's an unusual legacy for a two-page paper.

---

## SEGMENT 5 — Scoring matrices: PAM, BLOSUM, and the case of protein alignment

I want to spend a segment on scoring matrices, because they're the part of the alignment story that depends most directly on biology — and because, in a sense, the choice of scoring matrix encodes a model of evolution. Different matrices encode different assumptions about how sequences change over time. Pick the wrong one and your alignments are misleading.

For DNA, scoring matrices are simple. Match scores some positive number, mismatch scores some negative number, that's it. The simplest version is +1 for a match, -1 for a mismatch. Slightly more sophisticated versions distinguish between **transitions** — substitutions within the same chemical class, like purine A swapping for purine G, or pyrimidine C swapping for pyrimidine T — and **transversions**, which cross chemical classes. Transitions are much more common in real evolution than transversions, by a factor of two or three, so a more accurate scoring scheme penalizes transversions more heavily than transitions. But for many practical purposes, +1/-1 or +2/-3 is good enough for DNA.

For protein, scoring matrices are a whole world. There are twenty amino acids, which means a substitution matrix is a 20-by-20 table — 400 entries, or 210 if you account for symmetry. Each entry encodes how favorable or unfavorable it is to align amino acid X in one sequence with amino acid Y in the other. The entries on the diagonal — aligning an amino acid with itself, a match — are positive. The off-diagonal entries are usually negative, but with very different magnitudes depending on which two amino acids are involved. Aligning leucine with isoleucine costs almost nothing; aligning leucine with arginine is a real penalty.

\[Pause.\]

The first famous scoring matrix for proteins came from Margaret Dayhoff and her colleagues in 1978 — the **PAM matrix**, where PAM stands for "Point Accepted Mutation." Dayhoff's idea was elegant. She took the alignments of all the closely-related protein families known at the time, counted up how often each amino acid was observed to substitute for each other amino acid in real evolution, and built a substitution probability matrix from those observations. The matrix PAM-1 represents the substitution probabilities you'd expect after **one percent of residues have changed** — that is, a very short evolutionary distance. To get the substitution probabilities at greater evolutionary distances, you just multiply the PAM-1 matrix by itself. PAM-2 is PAM-1 squared. PAM-10 is PAM-1 to the tenth power. PAM-250, the most commonly used PAM matrix, represents the substitution probabilities expected after 250 percent of residues have changed — which sounds nonsensical, but isn't, because the same residue can be replaced multiple times. PAM-250 corresponds to comparing fairly distantly-related proteins, where about 80% of positions have changed.

Dayhoff's PAM was the standard scoring scheme through the 1980s. It was an elegant idea and it worked. But it had a flaw: the PAM matrices at high distances were extrapolated from observed mutations at low distances by repeated matrix multiplication. The extrapolation assumes that the same substitution probabilities apply at all distances, which is not quite true. By the early 1990s, biologists had enough protein alignments at all distances to do something better — build the scoring matrix directly from observations at each distance, no extrapolation needed.

That's what Steven Henikoff and Jorja Henikoff did in 1992, when they introduced the **BLOSUM matrices** — BLOcks SUbstitution Matrix. They took a database of conserved protein blocks called BLOCKS, grouped the blocks by percent identity — BLOCKS where the aligned sequences are at least 62% identical go into one group, BLOCKS where they're at least 80% identical go into another, and so on — and computed the observed substitution frequencies directly from each group. The result was a series of matrices: BLOSUM-30, BLOSUM-45, BLOSUM-62, BLOSUM-80, BLOSUM-90, with the number representing the percent identity threshold of the block group used to construct the matrix. Lower numbers correspond to more distant evolutionary relationships, higher numbers to closer ones.

\[Pause.\]

The single most famous matrix in this family is **BLOSUM-62**. It is the default scoring matrix in BLAST. It is the matrix used in the great majority of protein sequence searches done worldwide. The number 62 was chosen by the Henikoffs based on empirical testing — it gave the best balance between sensitivity and specificity across a range of search tasks. If you've ever run a BLASTP search and not specified a matrix, you used BLOSUM-62. It is, in a real sense, the default model of protein evolution that most of bioinformatics implicitly assumes.

The entries of BLOSUM-62 capture biology in numeric form. Aligning tryptophan with itself scores +11 — the highest in the matrix, because tryptophan is the largest and most distinctive amino acid, and a tryptophan-tryptophan match is very informative. Aligning leucine with isoleucine scores +2 — positive, because they're chemically interchangeable. Aligning leucine with tryptophan scores -2 — negative, because they're chemically dissimilar. Aligning cysteine with cysteine scores +9 — high, because cysteine is rare and often functionally important (it makes disulfide bonds). Each entry, in some sense, captures sixty years of accumulated protein evolution data in one number.

For DNA, an analogous family of empirical scoring schemes exists, but they're less commonly used than the simple +1/-1 schemes — partly because DNA evolution is more uniform across positions, and partly because most DNA alignment is done at the level of very recent evolution (reads to reference), where simple schemes work fine.

Here's the analogy. **A scoring matrix is a model of evolution baked into a lookup table. PAM and BLOSUM aren't just numbers — they're empirical observations about how proteins change over time, distilled into a form the alignment algorithm can use. Picking the right matrix for your evolutionary distance is like picking the right ruler for the size of the object you're measuring. Use BLOSUM-90 for close relatives, BLOSUM-45 for distant ones. Use the wrong one and your alignments will be biased.** That's the picture. The matrix is biology; the algorithm is mathematics; together they give you a sequence alignment.

---

## SEGMENT 6 — Why exact DP is too slow at scale: the O(mn) wall

We've now seen Needleman-Wunsch and Smith-Waterman. Both are O(mn) — quadratic in sequence length. Both are exact — they're guaranteed to find the optimal alignment. For small problems — comparing two proteins, comparing two short DNA sequences — that's plenty fast. A pair of thousand-residue proteins gives you a million-cell grid; modern computers can fill that in milliseconds. For decades, this was bioinformatics — pairwise dynamic programming, done one pair at a time.

But sequencing got cheap. By the late 1980s, GenBank — the public DNA sequence database run by NCBI in the United States — was doubling in size every eighteen months. By 1990, it had about fifty million bases. By 2000, ten billion. By 2010, hundreds of billions. Today, GenBank holds something like a trillion bases of sequence, and that's just the curated reference part — the raw read archives are much bigger, on the order of tens of petabases. And every time someone clones a new gene or sequences a new genome, the first thing they want to do is **search the database** — that is, take their new sequence and align it against everything else in GenBank to find homologs.

This is where the O(mn) wall hits. Let me put numbers on it. Suppose you have a one-thousand-letter query and you want to align it against a database of one trillion letters. Smith-Waterman would need to fill a grid of one thousand by one trillion cells — that's 10^15 cells, a quadrillion. A modern CPU core can fill maybe a billion cells per second using optimized code. So a single Smith-Waterman scan of GenBank with one query takes about ten million seconds, or roughly four months of CPU time. With a hundred cores, a few days. With a thousand, a few hours. It's possible, but it's expensive. And every database search costs that much.

\[Pause.\]

It gets worse. Suppose you don't want to search a database, but to compare two whole genomes. The human genome is three billion bases. Aligning two mammalian genomes with Smith-Waterman would mean a grid of three billion by three billion — 10^19 cells. At a billion cells per second per core, that's 10^10 seconds per core — over three hundred years. With a thousand cores, still three months. With a million cores — assuming you have a million cores, which you don't — three days. The exact algorithm simply does not scale to whole-genome comparison. It is impossible. We have to find something else.

It gets even worse when you consider read alignment. A single Illumina run produces a few billion short reads, each one a hundred to a hundred and fifty bases long. To align these reads to the human reference genome, you'd need to do, for each read, a Smith-Waterman against the three-billion-base reference. That's three hundred billion cells per read, times a few billion reads, equals about 10^21 cell operations. At a billion per second, 10^12 seconds — thirty thousand years on a single core. Even with massive parallelism, no exact algorithm could keep up with the data being produced by one Illumina instrument.

\[Pause.\]

Here's the analogy. **The O(mn) wall is the cliff that exact dynamic programming runs into at genomic scale. For a billion-by-a-billion comparison, you'd need 10^18 cells. That's a number with no human meaning — it's the number of grains of sand on Earth, roughly. It's not a number you can compute. The field needed shortcuts, and the shortcuts had to give up exactness — there was no way around that. Approximate algorithms, willing to miss some alignments in exchange for being a thousand or a million or a billion times faster, became the only path forward.**

The intellectual move that opened up the next era was to give up on **completeness** — the guarantee that you find every alignment that exists — in exchange for **sensitivity** — finding most of them most of the time — and **speed** — being thousands of times faster than the exact algorithm. The trade-off is real. Approximate aligners can miss weak homologs that exact aligners would catch. But they can search GenBank in seconds rather than months. For most practical purposes, that trade is worth making.

The key idea that drove this revolution is a heuristic called **seed-and-extend**, and it's the basis of every fast aligner used today. We'll spend the next segment on the idea, and then in Segment 8 we'll see its most famous embodiment — BLAST.

But first let me tell you why the heuristic works at all, philosophically. Real biological sequences that share an evolutionary relationship usually share **at least some short, perfectly-conserved regions** — stretches of ten, twenty, thirty bases or residues where evolution hasn't introduced any changes. These short conserved regions are like landmarks. If you can find a landmark — a short exact match — between two sequences, you've identified a likely region of homology, and you can spend your expensive dynamic programming budget only on the area around that landmark, instead of comparing every position of one sequence to every position of the other. Most of the grid is wasted effort, because most cells are far from any homologous region. By using the landmark to focus the comparison, you can skip the wasted parts.

That's the philosophical content of seed-and-extend. Find a short exact match — the seed. Then extend it locally with dynamic programming — find the boundaries of the homologous region, refine the alignment, score it. Skip the parts of the grid that aren't near any seed. The result is an algorithm that, on real biological data, runs orders of magnitude faster than exact dynamic programming, while finding most of the same alignments. Let's see how it works.

---

## SEGMENT 7 — The seed-and-extend heuristic

The seed-and-extend heuristic is the single most important algorithmic idea in modern bioinformatics. Once you understand it, you understand the architecture of every fast aligner — BLAST, BLAT, BWA, Bowtie, minimap2, all of them. The variations across these tools are in the details — what counts as a seed, how seeds are indexed, how extension is performed, how alignments are scored and filtered — but the high-level shape is the same. So let's get the shape clear before we look at any specific tool.

The heuristic has two phases. **Phase one: find seeds.** A seed is a short exact match between the query and the target — typically eleven to twenty-eight bases for DNA, or three to seven residues for protein. The idea is that any real homologous alignment will, with very high probability, contain at least one short exact match somewhere along its length. Because exact matches can be found by **indexing** the target — building a precomputed data structure that lets you look up, for any short string, all the positions where it appears — finding seeds is fast. The index is built once, in advance, and then any number of queries can be searched against it cheaply.

\[Pause.\]

The classical index for seeds is a **hash table** mapping short substrings (called **k-mers**, where k is the seed length) to lists of positions where they occur. To find all seeds of length k for a given query, you slide a window of length k along the query, extract each k-mer, look it up in the hash table, and record all the positions where each k-mer appears in the target. That gives you, for the whole query, a list of (query position, target position) pairs — each pair being a potential seed. For a thousand-letter query against a billion-letter target, the hash table lookup is essentially instantaneous, even though the underlying target is huge.

There's a subtlety in seed selection. If you pick k too small — say, k=4 — then every k-mer appears many places in the target (4^4 = 256 possible 4-mers, but a billion bases of target, so each k-mer appears about four million times on average). You get an enormous list of seeds, most of them spurious. If you pick k too large — say, k=30 — then most k-mers in the query won't match anywhere in the target unless the alignment is essentially perfect, and you miss most homologs. The sweet spot is in the middle: large enough that random matches are rare, small enough that real homologs reliably contain at least one exact k-mer match. For DNA, k=11 to k=14 is typical for BLAST; for protein, k=3 with similarity-allowed neighbors (we'll come back to this) is typical.

**Phase two: extend the seeds.** Each seed is a candidate alignment anchor. For each seed, you run a local dynamic programming extension — essentially a small Smith-Waterman — that extends the alignment in both directions from the seed, base by base, until the score drops too far below the maximum seen so far. This is called **X-drop** extension, where X is the threshold below the maximum at which extension stops. You're allowed to extend through mismatches and gaps as long as the alignment is still scoring well. When the score drops too far below the running maximum, you cut off the extension at the maximum-scoring point. The result is a locally-maximal alignment anchored on the original seed, with extension in both directions until the score stopped improving.

Crucially, **the dynamic programming is only run locally** — only over the small region near each seed, not over the entire grid. If your query is a thousand bases and a seed match is at position 500 of the query and position 23,847,128 of a billion-base target, you only run DP over maybe a thousand-by-thousand patch around that position — a million cells — not the full thousand-by-billion grid. You skip 99.9999% of the cells the exact algorithm would have computed. That's where the speed comes from.

\[Pause.\]

Here's the analogy. **Seed-and-extend is the architectural pattern of every fast aligner. Phase one: index your target with a precomputed lookup table of all short substrings. For each query, find all places where the query and target share short exact matches — the seeds. Phase two: for each seed, run a small local dynamic programming extension to find the boundaries of the alignment around that seed. The huge cost of full dynamic programming is replaced by the small cost of a hash lookup plus a tiny local DP. You can search a billion-base database with a thousand-letter query in milliseconds instead of months.**

The trade-off is that you might miss alignments where the homology is so weak that no k-mer is exactly conserved between query and target. These are called **twilight-zone** alignments — alignments at evolutionary distances so great that no contiguous region of identity remains. Exact algorithms catch these; seed-based algorithms miss them. For most practical purposes, this loss is acceptable — if your homolog is that diverged, you probably can't trust the alignment anyway. But for protein searches at extreme evolutionary distances, more sophisticated approaches are needed — things like **profile-based** methods, which we'll meet in Segment 11.

There are many variations on the seed-and-extend theme. **Spaced seeds** are seeds that don't require all k positions to match, but only some specified pattern — like, match at positions 1, 2, 4, 7, 10 but ignore the rest. Spaced seeds turn out to be more sensitive than contiguous seeds of the same length, because they're more tolerant of mismatches in the seed region. **Minimizers** are a way of picking a subset of k-mers to index, by choosing the lexicographically smallest k-mer in every window of some size — this reduces the index size dramatically while preserving sensitivity for long alignments. **Chaining** is a technique used by long-read aligners to combine multiple short seeds into one consistent diagonal — finding sets of seeds that all lie on the same or nearby diagonals of the grid, indicating a single long alignment. Each of these refinements made seed-and-extend faster, more sensitive, or both, over the decades. But the basic two-phase architecture has not changed.

Now let's see seed-and-extend in its most famous form — BLAST.

---

## SEGMENT 8 — BLAST (1990): the seed-and-extend revolution

In October 1990, a paper titled "Basic Local Alignment Search Tool" appeared in the Journal of Molecular Biology. The authors were Stephen Altschul, Warren Gish, Webb Miller, Eugene Myers, and David Lipman — all at the National Center for Biotechnology Information, the NCBI, the part of the US National Institutes of Health that maintains GenBank. The tool they described was named after the initial letters of the title: **BLAST**. It was, and remains, the single most-used algorithm in molecular biology. The 1990 paper has been cited more than a hundred thousand times, making it one of the most-cited papers in all of science.

BLAST took the seed-and-extend idea and engineered it into a robust, fast, statistically-grounded database search tool. The architecture was three-phase, not two — phase one was seeding, phase two was ungapped extension, phase three was gapped extension. Let me walk through each.

**Phase one: word search.** BLAST builds a hash table of all k-mers from the query (called "words" in BLAST terminology — typically eleven for DNA, three for protein), and then scans through the database one position at a time, asking at each position: does the next k characters in the database match any word in the query's hash table? Note that this is the reverse of what I described in the previous segment — BLAST indexes the **query**, not the database, and scans through the database linearly. For database search, that's the right choice, because the database might be too big to fully index in memory, while the query is small.

For protein, BLAST does something clever in this phase. Instead of looking for exact 3-mer matches between query and database, it looks for **high-scoring** 3-mer matches — meaning, for each 3-mer in the query, it generates a list of all 3-mers in the database whose BLOSUM-62 alignment score with the query 3-mer exceeds a threshold (typically 11). So if the query 3-mer is "LIV" (leucine-isoleucine-valine), the **neighborhood** of 3-mers that BLAST will look for includes not just "LIV" but also "LIM," "IIV," "VIV," "MIV" — variations that score nearly as well against "LIV" as "LIV" does against itself. This neighborhood expansion makes BLAST much more sensitive for protein searches at moderate evolutionary distances, where exact 3-mer matches are rare but near-matches are common. The price is that the seed list is larger and the scanning is slower, but for protein it's worth it.

\[Pause.\]

**Phase two: ungapped extension.** Each word hit triggers an extension. Starting from the seed, BLAST extends the alignment in both directions, base by base, without allowing any gaps. It accumulates a score along the way — match scores add, mismatches subtract — and keeps track of the running maximum. When the score drops by more than X below the running maximum (the X-drop threshold), extension stops, and the extension is trimmed back to the position of the maximum. The result is an ungapped local alignment anchored on the seed. The original 1990 BLAST stopped here — gapped extension wasn't added until the second version, in 1997. The ungapped alignment was called the **HSP** — High-scoring Segment Pair — and the BLAST report was a list of HSPs above some threshold.

The reason ungapped extension is the default starting point is that **most real homologs contain at least one ungapped segment of substantial length**. If two proteins are 50% identical across some domain, that domain is likely to contain a stretch of, say, twenty consecutive positions without any gaps. Finding that stretch is enough to identify the homology. Worrying about gaps comes later.

**Phase three: gapped extension.** In 1997, Altschul and colleagues published "Gapped BLAST and PSI-BLAST," which added a gapped extension step. After finding the best ungapped HSP, BLAST now runs a small Smith-Waterman-style dynamic programming extension over a limited region around the HSP, allowing gaps. The gapped alignment is the final output. This makes BLAST much more sensitive at greater evolutionary distances, where real homologs do contain gaps. Gapped BLAST is what almost everyone uses today.

\[Pause.\]

Now let me say something about the **statistics** of BLAST, because this is the part of the tool that made it scientifically rigorous, and it's something most users don't fully appreciate. Karlin and Altschul, in 1990 and 1993, worked out the theory of expected alignment scores under random sequence models. They proved that, for sequences drawn from random distributions of letters, the maximum local alignment score follows a particular probability distribution called the **Gumbel extreme value distribution**. From this distribution, you can compute, for any observed score, the expected number of alignments of that score or better that you'd see by chance in a database of a given size. That expected count is the **E-value**.

The E-value is the most important number on a BLAST report. It tells you: **if I had searched a random database of this size, how many alignments scoring this well would I expect to see purely by chance?** An E-value of 10 means "I'd expect ten hits this good by chance, so this hit is meaningless." An E-value of 0.1 means "I'd expect 0.1 hits this good by chance, so this hit is plausible but I shouldn't bet on it." An E-value of 10^-10 means "I'd expect 10^-10 hits this good by chance, which is essentially zero, so this hit is real." The conventional threshold for "this is real" is **E < 10^-5**, though that's loose — for whole-proteome searches you might want E < 10^-20.

Here's the analogy. **The E-value is the statistical adjustment that makes BLAST scientifically useful. Without it, you'd just have a score, and you wouldn't know whether a score of 50 was good or bad. The E-value tells you: how many hits this good would you expect by chance, given the size of the database you searched? Small E-value, real hit. Large E-value, noise. E < 10^-5 is the typical threshold for "yes, this is a real homolog." The Karlin-Altschul theory of extreme values is what turned BLAST from a search tool into a real piece of statistical science.**

The 1990 paper also introduced the **bit score**, which is a length-and-database-independent normalization of the raw alignment score. The bit score is computed from the raw score by a formula involving the scoring matrix's parameters, and it tells you, intuitively, how many bits of information the alignment carries. A bit score of 50 means the alignment is 2^50 times more likely under the homology model than under the random model. Bit scores let you compare BLAST results across databases of different sizes, where raw scores would be misleading.

\[Pause.\]

Let me give you a sense of why BLAST was so transformative. Before BLAST, doing a database search meant running Smith-Waterman against every sequence in GenBank — one pair at a time. For the GenBank of 1989, a single protein query took several minutes per match, and a full database scan took hours. BLAST, on the same hardware, did the same scan in seconds — about a thousand times faster. Suddenly, every biologist who cloned a gene could, in minutes, find out what its closest known relatives were. The bottleneck of homology search disappeared. The whole field of molecular biology shifted into a "BLAST it" reflex — the very first thing you do with any new sequence is BLAST it, every time, by reflex. That reflex was made possible by Altschul's algorithm.

BLAST is still in use today, thirty-five years later. It's available on the web at NCBI; you can paste in a sequence and search GenBank from a browser, and you get results in seconds. The web interface processes something like a hundred thousand searches a day. There are command-line versions for running locally. The algorithm has been refined dozens of times, but the architecture is unchanged. BLAST is one of those rare pieces of software that became infrastructure — like Linux or grep, it's just there, in the background, and everyone uses it without thinking.

---

## SEGMENT 9 — BLAST variants: BLASTN, BLASTP, BLASTX, TBLASTN, TBLASTX

BLAST is not one tool but a family of tools, each optimized for a different combination of query type and database type. The five members of the family are called **BLASTN, BLASTP, BLASTX, TBLASTN,** and **TBLASTX**, and the naming follows a simple pattern: the first letter or letters tell you about the query, the rest of the name tells you about the database. Let me walk through them, because picking the right BLAST for your problem is one of the basic skills of bioinformatics.

**BLASTN: nucleotide query against nucleotide database.** This is what you use when you have a DNA sequence and you want to find similar DNA sequences. You ran a sequencing experiment, you got a contig of unknown identity, you want to know what species or gene it might be from — BLASTN against the nt database. The scoring is simple match/mismatch — typically +1/-2 or +2/-3 — and the seeds are 11-mers by default. BLASTN is fast and is the right tool when you expect significant DNA-level identity, say, 70% or higher. If your sequences are more distantly related — say, you're comparing a mammalian gene to a fish ortholog — BLASTN may fail because synonymous codon changes have erased the DNA-level identity even while the protein remains conserved. In that case you want to be searching at the protein level, which leads us to...

**BLASTP: protein query against protein database.** This is the workhorse of comparative biology. You have a protein sequence — either from direct sequencing, or translated from a coding region — and you want to find its homologs across all of life. You BLAST against the nr database (NCBI's non-redundant protein database) or against UniProt or against the proteome of a specific organism. The scoring uses BLOSUM-62 by default, the seeds are 3-mers with neighborhood expansion, and the sensitivity is much higher than BLASTN — protein conservation persists at much greater evolutionary distances than DNA conservation, because proteins have to fold and function, while DNA can drift around the genetic code freely.

\[Pause.\]

**BLASTX: translated nucleotide query against protein database.** This one is clever. You have a DNA sequence — say, an open reading frame from a newly-assembled genome, or an EST from a transcriptomics experiment — and you don't know what protein it codes for. BLASTX takes your DNA query, translates it in all six reading frames (three forward, three reverse), and then BLASTs each translated frame against the protein database. The output tells you which reading frame contains the best protein hit, and you've simultaneously identified the gene and the correct reading frame. BLASTX is what you use when you have DNA but want protein-level sensitivity — for example, in genome annotation pipelines, where every predicted gene gets BLASTXed against the protein databases to find homologs.

**TBLASTN: protein query against translated nucleotide database.** This is the reverse. You have a protein — say, the known protein product of a well-characterized gene in human — and you want to find the gene encoding it in a non-annotated genome, like a newly-sequenced fungus or insect. TBLASTN takes your protein query and BLASTs it against the genomic DNA database, but with the DNA translated on the fly in all six reading frames. The output tells you which region of the genome contains a homolog of your protein, even though that region might not be annotated as a gene at all. TBLASTN is what you use for genome annotation by homology and for finding homologs in poorly-annotated organisms.

**TBLASTX: translated nucleotide query against translated nucleotide database.** Both query and target are DNA, but both are translated in all six frames before alignment. This is the most computationally expensive BLAST — it does six-frame translation on both sides, so there are 36 possible frame combinations — but it's also the most sensitive when both sequences are DNA and you want protein-level sensitivity. TBLASTX is mostly used in comparative genomics, where you're comparing two genomes and want to find conserved coding regions even at large evolutionary distances. The cost is high, so people use it sparingly.

\[Pause.\]

Here's the cheat sheet, which I want you to copy down. **BLASTN: DNA-to-DNA, fast, low sensitivity at distance. BLASTP: protein-to-protein, the standard workhorse, sensitive across vast evolutionary distances. BLASTX: DNA query translated, hit against proteins — for unknown DNA that codes for something. TBLASTN: protein query against translated DNA — for finding genes in unannotated genomes. TBLASTX: both translated — comparative genomics, expensive but sensitive.**

There are also some specialized variants worth knowing about. **PSI-BLAST** — Position-Specific Iterated BLAST — is an iterative version of BLASTP that uses an initial BLASTP search to construct a position-specific scoring matrix (a profile) from the top hits, then re-searches with that profile, then refines the profile, then re-searches again, iterating until convergence. PSI-BLAST is much more sensitive than plain BLASTP at very large evolutionary distances, because it adapts the scoring matrix to the specific protein family you're searching with. **PHI-BLAST** — Pattern-Hit Initiated BLAST — lets you specify a sequence motif (like a regular expression over amino acids) that the hit must contain, restricting the search to sequences with a specific structural feature. **DELTA-BLAST** combines profile-based search with the standard BLAST infrastructure and is sometimes preferred for distant homology detection.

The web interface at NCBI handles all of these. You go to blast.ncbi.nlm.nih.gov, pick your flavor, paste in your sequence, choose a database, hit go. Results come back in a few seconds for typical queries, in a few minutes for harder ones. It is one of the best-engineered scientific web services in the world — built in the early 1990s, refined continuously, used by millions of biologists a year, freely available, no login required for basic searches. NCBI BLAST is, in a real sense, one of the public goods of modern biology.

---

\[BREAK\]

---

## SEGMENT 10 — Reading a BLAST report

Now we need to spend a segment on **reading** a BLAST report, because the output of BLAST is rich and you need to know how to interpret it. A BLAST report has three main sections — a header with metadata, a list of one-line summaries of all the hits, and a detailed alignment view for each significant hit. Let me walk through the parts you need to look at, in order.

The header tells you the basics: query name and length, database name and total length, program version, scoring matrix used. These are usually fine on autopilot, but check that the database is what you expected — if you wanted to search against human proteins but accidentally pointed at all of nr, you'll get a lot of noise.

The summary list is the first place to look for hits. Each row shows: the target sequence's accession ID, a brief description, the **bit score** of the best alignment, the **E-value** of that alignment, and the **percent identity**. The hits are sorted by E-value, smallest first — that is, best hits at the top.

\[Pause.\]

Let me unpack each of those numbers, because this is the language of BLAST reading.

**Bit score.** Discussed in Segment 8 — it's a normalized score that's independent of database size. A bit score of 50 is moderate; 100 is good; 200 or more is excellent. Higher is better. Bit scores can be compared across searches.

**E-value.** Also discussed in Segment 8 — the expected number of alignments this good by chance, given the database size. **Smaller is better.** Conventional thresholds: E < 10^-5 is "real hit, probably homologous," E < 10^-20 is "almost certainly a real homolog at significant evolutionary distance," E < 10^-50 is "very close relative or identical sequence." E > 1 is "essentially noise, ignore."

**Percent identity.** The fraction of aligned positions where the query and target letters are identical. High identity is good — 90% identity in DNA, or 50% in protein, is a strong sign of homology. But percent identity alone is not enough — a short, perfect alignment can be by chance, while a long, weakly-identical alignment can be a real homolog. You always combine percent identity with **alignment length** and **E-value** to judge a hit.

**Alignment length.** How many positions are in the alignment. A 1000-letter alignment at 30% identity is very significant — that's enough information to be sure the proteins are homologous. A 20-letter alignment at 80% identity is barely above noise — it could easily be by chance. The combination of length and identity is what matters, and the E-value combines them into a single number.

**Query coverage.** What fraction of your query is covered by the alignment. A hit covering 90% of your query is a substantial match; a hit covering only 10% might be a single conserved domain in an otherwise dissimilar protein.

\[Pause.\]

Below the summary, BLAST shows the detailed alignment view for each significant hit. This view shows the query and target sequences lined up, with vertical bars (or letters) indicating matches, spaces or dots indicating mismatches, and dashes indicating gaps. You can read off, position by position, exactly how the alignment looks. This is invaluable when you want to assess **what kind** of homology it is — is it a clean alignment across the whole protein (full-length ortholog), or just one conserved domain embedded in two otherwise dissimilar proteins (shared domain), or a few scattered short matches (likely spurious)?

Reading the alignment view also lets you spot biology. If your query has a known active site at a specific position, and the BLAST hit aligns that active site to the same position in the target — match for match — that's strong evidence the hit is a functional homolog. If the active site aligns to a different amino acid, that's evidence the function might have changed in the target.

One more thing to watch for in BLAST reports: **low-complexity regions**. These are stretches of sequence dominated by one or two letters — like a poly-glutamine tract in a protein, or a microsatellite repeat in DNA. Low-complexity regions can produce false positive alignments because they match each other promiscuously without any real homology. BLAST has a built-in low-complexity filter (called **SEG** for protein, **DUST** for DNA) that masks these regions during seeding, so they don't generate spurious hits. You can turn this on or off in the BLAST options. For most users, leave it on.

\[Pause.\]

Here's the analogy. **Reading a BLAST report is like skimming a stack of paper match reports. The summary list is your front-page scan — sort by E-value, look at the top hits. For each top hit, check the four numbers: bit score, E-value, percent identity, alignment length. Then drop into the detail view for the alignment itself, and look at how the alignment is laid out — is it full-length, or just a domain, or just a fragment? Are conserved positions hitting conserved positions? Is the hit biologically plausible given what you know about your query?** That's the BLAST-reading workflow. With practice it takes thirty seconds per hit; without practice it takes an afternoon. The numbers are the same, but the interpretive vocabulary takes time to build.

A common beginner mistake is to focus only on percent identity. Two 30% identical proteins, aligned over 500 residues, are almost certainly homologous — the E-value is tiny, the alignment is long, the statistics are unambiguous. Two 90% identical sequences aligned over 15 nucleotides might be by chance — short matches with high identity are easy to find at random. Always look at the E-value and the alignment length, not just identity.

---

## SEGMENT 11 — HMMER and profile HMMs

There is a class of sequence search tools that goes beyond pairwise alignment — tools that align a sequence not against another single sequence, but against a **statistical model of a family of sequences**. The most famous of these is **HMMER**, written primarily by Sean Eddy starting in the mid-1990s. HMMER is built around a class of probabilistic models called **profile hidden Markov models** — profile HMMs — and it is the standard tool for detecting distant homology to known protein families.

Let me explain the basic idea. Suppose you have a family of related proteins — say, the globin family, which includes hemoglobin, myoglobin, and dozens of other oxygen-binding proteins from across the tree of life. You have, in hand, a multiple sequence alignment of fifty or a hundred members of this family, with the columns of the alignment representing positions in the family's conserved core structure. From this alignment, you can compute, for each column, the empirical distribution of amino acids at that position — which residues are common, which are rare, which are forbidden. You can also compute, for each column, the empirical probability that a position contains a gap (an insertion or deletion).

A profile HMM is a probabilistic model that captures all of this, in a structured way. Each column of the alignment becomes a **match state** in the HMM, with an emission distribution over amino acids — the empirical distribution at that column. Each column also has associated **insertion states** (for positions where some family members have inserted residues) and **deletion states** (for positions where some members have deleted residues), with transition probabilities between them. The HMM, as a whole, is a generative model: starting from the begin state, you walk through the states according to the transition probabilities, emitting amino acids from the match and insertion states, and the path you take generates a sequence that "looks like" a member of the family.

\[Pause.\]

To search a database with a profile HMM, you compute, for each target sequence, the probability that the HMM would generate that sequence — that is, you compute the maximum likelihood alignment of the target to the HMM. This is done by another dynamic programming algorithm, the **Viterbi algorithm** for HMMs, which is structurally analogous to Smith-Waterman but with probabilities instead of scores. The output is a score for each target sequence, and an E-value telling you how significant that score is given the database size.

Profile HMMs are much more sensitive than pairwise BLAST for distant homology, for one reason: **they have more information**. A pairwise alignment uses a single query sequence. A profile HMM uses an entire family's worth of information, encoded as a position-specific distribution. Conserved positions get heavy weights in the HMM; variable positions get light weights. The model knows that the histidine at the heme-binding site of globins is essentially required, while the residue at some surface loop is freely variable. When you search a new sequence against the globin HMM, the model can detect a candidate globin even if the candidate is only 15% identical to any single known globin — because the candidate has histidines at the right positions, hydrophobic residues at the right positions, conserved patterns of charge in the right places. The profile sees the whole pattern; a pairwise comparison only sees one example.

\[Pause.\]

HMMER comes with the **Pfam** database, which is a collection of about twenty thousand curated profile HMMs covering most known protein families. You can take any new protein sequence, run it through HMMER against Pfam, and get back a list of the protein families it belongs to. This is the dominant way that protein domain annotation is done in modern bioinformatics. Every annotated genome on Ensembl, every UniProt entry, every InterPro record — the domain annotations come from HMMER-against-Pfam searches.

There is also the related tool **HHsearch** / **HHblits**, by Johannes Söding's group, which goes one step further: it aligns profile HMMs against other profile HMMs, rather than sequences against HMMs. Profile-profile comparison is even more sensitive than sequence-against-profile, and is the standard for detecting very distant evolutionary relationships, including relationships at the level of protein structural folds. HHsearch is what people use when they want to find homologs at the edge of detectability.

Here's the analogy. **HMMER is the family-aware sequence searcher. Instead of asking "does my sequence look like this one specific protein," it asks "does my sequence look like this family of proteins, given everything we know about the family's conservation patterns?" Profile HMMs encode the conservation profile of a family — which positions are conserved, which are variable, which kinds of substitutions are allowed at each position — and the search uses that profile as a target. The result is much more sensitive than pairwise BLAST for distant homology, and it's the standard for protein family detection.** That's HMMER.

There is a deeper relationship between HMMER and modern deep learning models like AlphaFold and ESM, which we'll touch on in Segment 18. Profile HMMs are, in a real sense, simple precursors to the attention-based language models that now dominate protein sequence analysis. The principle is the same: learn a model of what sequences in a family look like, then use the model to evaluate new sequences. The model class is different — small HMMs for HMMER, large neural networks for ESM — but the conceptual move is the same.

---

## SEGMENT 12 — BWA: the alignment workhorse of NGS

Now we shift gears entirely. BLAST and HMMER are tools for **sparse** database search — given a small number of queries (one, ten, a hundred), find their homologs in a large database. They're optimized for sensitivity over a few hundred or thousand searches. The advent of next-generation sequencing — Illumina, in particular — broke this model. NGS produces not a few queries, but **billions** of queries — short DNA reads, a hundred to a hundred and fifty bases long, all of which need to be aligned against a reference genome. BLAST cannot do this. BLAST is millions of times too slow. A new class of aligner was needed.

The breakthrough came in 2009, when Heng Li and Richard Durbin at the Wellcome Trust Sanger Institute published a tool called **BWA** — the Burrows-Wheeler Aligner. BWA was designed from the ground up for one specific job: aligning hundreds of millions of short Illumina reads against a multi-gigabase reference genome, as fast as possible. It used a completely different indexing approach than BLAST, based on a transform from data compression theory called the **Burrows-Wheeler transform** and an associated data structure called the **FM-index**. The combination let BWA align reads against the human genome at a rate of thousands of reads per second per core — a hundred to a thousand times faster than BLAST on the same task. BWA, more than any other single tool, made high-throughput resequencing practical.

\[Pause.\]

Let me explain the basic idea of the Burrows-Wheeler transform, because it's one of the most beautiful ideas in computer science, and once you see it you'll never forget it.

Consider the string "banana." Take all rotations of the string — banana, ananab, nanaba, anaban, nabana, abanan. Sort them lexicographically. The last column of the sorted list is the Burrows-Wheeler transform of the original string: "nnbaaa". Three properties of this transform matter. **First**, it's reversible — you can recover the original string from the transform, given an end-of-string marker. **Second**, it tends to **cluster repeated characters together** — long runs of the same letter, which is why BWT is used in data compression (it's at the heart of bzip2). **Third**, and most importantly for us, **the BWT supports fast substring queries** when combined with the FM-index.

The FM-index is a compact data structure built on the BWT that lets you, given a query substring, count the number of times that substring occurs in the original string, in time proportional to the length of the query — not the length of the original string. For a billion-letter reference and a hundred-letter query, that's a hundred operations to do an exact substring search, versus a billion operations for a naive scan. The speedup is enormous. The size of the FM-index itself is only slightly larger than the original string, so the human reference genome's FM-index fits comfortably in a few gigabytes of RAM.

\[Pause.\]

Here's how BWA uses this. **First**, build the FM-index of the reference genome — a one-time precomputation that takes a few hours and produces a couple of gigabytes of index files. From then on, the index is loaded into RAM at the start of each alignment job. **Second**, for each read, search for exact or near-exact occurrences of the read in the reference, using the FM-index. The classical BWA algorithm uses a backtracking search that allows a small number of mismatches and gaps — for each position in the read, it tries the matching base first, and if that fails, it tries the alternative bases and tracks the alternative paths. The search space is exponential in the number of mismatches allowed, so BWA limits itself to a few mismatches per read by default. **Third**, for each candidate position in the reference where the read matches, perform a small local alignment to refine the placement and compute the alignment quality. The final output is a SAM (or BAM) file listing, for each read, where it aligned in the reference, with what alignment quality, and with what specific match/mismatch/indel pattern.

The CIGAR string, by the way — that's the compact representation of the alignment that appears in SAM files — is a sequence of operations like "100M" (100 matches), "75M2I23M" (75 matches, 2-base insertion, 23 matches), or "50M3D50M" (50 matches, 3-base deletion, 50 matches). It encodes the path through the alignment in a compressed form. Every SAM file in the world has CIGAR strings. Memorize the format.

\[Pause.\]

BWA went through three major versions. The original 2009 paper described **BWA-aln**, designed for very short reads (under 100 bp), which used backtracking search with a strict mismatch limit. As reads got longer (100-300 bp by 2012), the backtracking became too slow, and Li released **BWA-SW** (Smith-Waterman BWA) for longer reads. In 2013, he released the current standard, **BWA-MEM** (MEM = Maximal Exact Matches), which uses a seed-and-extend strategy on top of the FM-index — find long exact matches first (the "maximal exact matches" or MEMs), then extend them with Smith-Waterman. BWA-MEM is the workhorse aligner of human resequencing as of 2026. It handles reads from 70 bp to a few thousand bp, including paired-end Illumina reads, and produces output compatible with the entire downstream variant-calling ecosystem (GATK, FreeBayes, DeepVariant, all of them assume BWA-MEM as input).

Here's the analogy. **BWA is the alignment workhorse of NGS. The Burrows-Wheeler transform of the reference genome compresses the search space; the FM-index lets you do near-exact substring lookups in time proportional to the read length, not the genome length. You can align a hundred million reads to a human genome in hours on a modest server — the same job that would have taken months with Smith-Waterman or BLAST. BWA-MEM is the version everyone uses today, and it's the foundation of essentially every Illumina-based variant calling pipeline in the world.** If you've ever processed Illumina data, you've used BWA. If you've ever looked at a BAM file, you've looked at BWA's output. It is one of the half-dozen most important pieces of software in modern biology.

There is one more thing worth saying about BWA before we move on. Heng Li, the author, is a remarkable figure in computational biology. He wrote BWA, then he wrote **samtools** — the standard manipulation library for SAM/BAM files — then he wrote **minimap2**, the long-read aligner we'll discuss in Segment 14. He is, by himself, responsible for an outsized fraction of the software infrastructure of NGS. The fact that one person wrote three of the most important tools in the field is, in a real sense, a miracle of focused craftsmanship — and a reminder that great scientific software is sometimes the work of one obsessed individual rather than a large team.

---

## SEGMENT 13 — Bowtie and Bowtie2: the other short-read aligner

Parallel to BWA, another short-read aligner was developed at the University of Maryland by Ben Langmead and his colleagues, starting in 2009. The tool was called **Bowtie**, and like BWA it used the Burrows-Wheeler transform and FM-index for fast read alignment. The two tools were near-simultaneous responses to the same problem — how do you align Illumina reads at scale — and they used closely related algorithmic ideas. For a few years in the early 2010s, BWA and Bowtie were direct competitors, and which one you used depended largely on which group's pipeline you were following.

Bowtie 1 was aimed at very short reads (under 50 bp) and was extremely fast but somewhat limited in its handling of gaps. In 2012, Langmead and Steven Salzberg released **Bowtie 2**, which extended the tool to longer reads, improved gap handling, and added support for local alignment (so it could trim off non-matching ends rather than forcing the whole read to align). Bowtie 2 is roughly comparable to BWA-MEM in speed and accuracy, with slightly different trade-offs. In practice, the two tools coexist — BWA-MEM tends to dominate in the variant-calling community (where the GATK pipeline assumes it), while Bowtie 2 has a stronger foothold in RNA-seq and ChIP-seq pipelines, partly because the **TopHat** and **HISAT** splice-aware aligners (which we'll meet in Segment 15) are built on top of Bowtie's indexing infrastructure.

\[Pause.\]

The algorithmic differences between BWA-MEM and Bowtie 2 are real but subtle. BWA-MEM uses a seed-and-extend strategy where the seeds are maximal exact matches found via the FM-index, then extended with banded Smith-Waterman. Bowtie 2 uses a similar two-phase strategy but with different default parameters for seed length, seed extension, and scoring. Both are based on the FM-index, both produce SAM/BAM output, both handle paired-end reads. For most users, the choice between them comes down to which pipeline you've inherited and which one your collaborators are using.

There's a deeper point I want to make here, which applies to a lot of bioinformatics. **Once an algorithmic approach is established — in this case, FM-index-based short-read alignment — the field tends to converge on two or three implementations that are roughly equivalent, and then the choice between them is driven by ecosystem effects more than by raw performance differences.** BWA and Bowtie are within a factor of two of each other on most benchmarks. The ecosystem — what other tools assume as input, what pipelines have been validated end-to-end, what documentation exists — drives adoption more than the alignment quality itself. BWA "won" the variant-calling world because GATK is built around it. Bowtie "won" the splice-aware world because HISAT extends it. Each tool has its niche, defined more by social network than by pure algorithmic merit.

I bring this up because students sometimes ask which tool is "best" for a given task, and the answer is rarely clear-cut. Usually the answer is "whichever one is most commonly used in your sub-field, because that's the one whose downstream tools will integrate smoothly and whose outputs will be most easily compared with the literature." Bioinformatics, like all engineering, is path-dependent.

---

## SEGMENT 14 — minimap2: the long-read alignment standard

In 2018, Heng Li — the same author as BWA — published **minimap2**. The paper was titled "Minimap2: pairwise alignment for nucleotide sequences," and it introduced a new aligner explicitly designed for the long reads produced by PacBio and Oxford Nanopore. Long reads are a different beast from short reads — they're a hundred times longer (10-100 kilobases is typical), they have much higher per-base error rates (5-15% raw error for nanopore, versus 0.1% for Illumina), and they're produced in much smaller numbers per run. The alignment problem they pose is genuinely different from short-read alignment, and the tools developed for short reads — BWA, Bowtie — were not well-suited to it.

Minimap2 became the standard within a year of publication. As of 2026, essentially every PacBio and nanopore data analysis pipeline uses minimap2 for alignment, and it's also used for many specialized tasks like genome-to-genome alignment, mRNA-to-genome alignment (splice-aware), and long-read overlap detection in assembly. Like BWA, it's a single piece of software that defined a whole category.

\[Pause.\]

The key algorithmic ideas in minimap2 are different from BWA. Where BWA indexes the reference with an FM-index and uses backtracking to find approximate matches, minimap2 uses a **minimizer-based** indexing scheme. A minimizer is a representative k-mer chosen from each window of the sequence — specifically, the lexicographically smallest k-mer in a window of size w. By indexing only the minimizers, rather than every k-mer, you get a much smaller index (about one tenth the size), and you can compare two long sequences quickly by finding shared minimizers between them. Minimizers were introduced by Roberts and colleagues in 2004, but minimap2 was the first widely-used aligner to deploy them at scale.

For each long read, minimap2 finds all the shared minimizers between the read and the reference, then performs **chaining** — finding a consistent set of minimizer hits that lie on the same approximate diagonal of the read-versus-reference grid. The chain represents a candidate alignment, and minimap2 then fills in the alignment within the chain using a banded dynamic programming extension. The output is a precise base-level alignment in SAM/PAF format.

The chaining step is the part that distinguishes minimap2 from the older short-read aligners. Long reads, because they're so long, may contain many short matches scattered along their length, and the alignment algorithm has to figure out which matches are part of one coherent alignment and which are spurious. Chaining solves this by looking for sets of matches that are co-linear — same orientation, same approximate diagonal, with consistent spacing. The chaining algorithm in minimap2 is implemented very efficiently and is one of the keys to the tool's speed.

\[Pause.\]

Minimap2 also handles **splice-aware alignment**, which is the alignment of mRNA reads to a genome where the alignment can skip introns. Splicing is a major complication for RNA-seq alignment, and we'll dig into it in the next segment. For long reads, minimap2 has a built-in splice mode that allows long gaps in the alignment corresponding to introns, with appropriate scoring for canonical splice sites. This makes minimap2 the standard tool for direct long-read RNA-seq alignment from Iso-Seq or nanopore RNA experiments.

Here's the analogy. **Minimap2 is the long-read upgrade of BWA. Where BWA was built around the FM-index for short, low-error reads, minimap2 is built around minimizer indexing and chaining for long, high-error reads. It handles 100-kilobase nanopore reads, it's splice-aware, it's very fast, and it's now the universal standard for PacBio and Oxford Nanopore data analysis. If you've ever worked with long-read data, you've used minimap2. If you've looked at a PAF or SAM file from a long-read experiment, you've looked at minimap2's output.**

There are some specialized long-read aligners that compete with minimap2 in specific niches. **NGMLR** is sometimes used for structural variant calling, where it handles split alignments slightly differently. **LRA** is optimized for very long reads with specific characteristics. **Winnowmap** is a derivative of minimap2 specialized for highly-repetitive sequences like centromeres. But for general-purpose long-read alignment, minimap2 is what you use.

---

## SEGMENT 15 — STAR and HISAT: splice-aware aligners for RNA-seq

When you do RNA-seq with Illumina, you're sequencing mRNA molecules — which means you've reverse-transcribed RNA to cDNA, fragmented, ligated adapters, and sequenced. The reads represent fragments of mRNA. When you align them back to the genome, you hit a problem that doesn't exist for DNA sequencing: **introns**. The mRNA, by the time it's transcribed and processed, has had its introns spliced out — gone, removed. The mRNA sequence consists of exons stitched together. But the genome you're aligning to contains both exons and introns. So a single mRNA read might span an exon-exon junction, where the read maps to two different parts of the genome separated by an intron, which might be tens of thousands of bases long. A normal aligner like BWA won't handle this — it'll just report that the read doesn't align well anywhere.

You need a **splice-aware aligner** — one that can split a single read into two or more pieces, each aligning to a different position in the genome, with the constraint that the pieces are co-linear and the gaps between them are likely introns. This is a different alignment problem from standard read alignment, and it has its own tools. We'll cross-reference the bulk RNA-seq book here — there's a lot more detail on RNA-seq specifically — but the two big tools you need to know are **STAR** and **HISAT** (and its successor HISAT2).

\[Pause.\]

**STAR** — Spliced Transcripts Alignment to a Reference — was written by Alex Dobin at Cold Spring Harbor and released in 2013. STAR uses a clever indexing approach: it builds a suffix array of the reference (similar to a FM-index but with different trade-offs) and then, for each read, looks for the longest possible exact match, then iteratively extends and splits the read across introns. The algorithm is called **sequential maximum mappable seed search** — you find the longest exact match anywhere in the genome, then for the remaining unmatched parts of the read, you recursively find the next-longest match, until the whole read is mapped. The matches that come from the same read but different genomic locations are joined into a single split alignment, with the gaps interpreted as introns (if they're long and bordered by canonical splice sites) or as deletions (if they're short).

STAR is fast — one of the fastest splice-aware aligners — and it's the default in many RNA-seq pipelines, including the ENCODE pipeline. It needs a lot of RAM (around 30 GB to load the human genome index), but on a server with sufficient memory it can align an RNA-seq experiment in minutes per sample. STAR is also widely used as the alignment step in single-cell RNA-seq pipelines like Cell Ranger and STARsolo, where the same code is reused to handle the high read volumes of single-cell experiments.

**HISAT** — Hierarchical Indexing for Spliced Alignment of Transcripts — was developed by Daehwan Kim and Steven Salzberg at Johns Hopkins. HISAT2 is the current version. It uses a hierarchical extension of the Burrows-Wheeler approach: a global FM-index of the whole genome, plus thousands of local FM-indices for small genomic regions. The hierarchy lets it find splice junctions efficiently by first locating the read globally, then refining within local regions. HISAT2 is much more memory-efficient than STAR — around 4 GB of RAM for the human genome, versus 30 GB for STAR — which makes it preferred for resource-constrained environments. It also includes built-in support for population variants via a **graph genome** index, which we'll touch on in Segment 17.

\[Pause.\]

Both STAR and HISAT2 produce SAM/BAM output with splice-aware CIGAR strings — that is, the alignment includes "N" operations representing skipped intronic regions. Downstream tools that count reads per gene (HTSeq, featureCounts, Subread) understand these N operations and assign reads to genes appropriately. The whole RNA-seq pipeline — STAR alignment, HTSeq counting, DESeq2 differential expression — is built around this splice-aware alignment format.

Here's the analogy I want you to hold. **Splice-aware aligners are RNA-seq's specialized variant of BWA. Normal aligners assume the read corresponds to a contiguous piece of the genome. Splice-aware aligners know that a read might span an exon-exon junction, with an intron in the middle that the read does not cover. STAR finds the longest exact match anywhere in the genome, then recursively maps the rest, gluing together pieces across introns. HISAT2 uses hierarchical indexing for the same job, more memory-efficiently. Both produce splice-aware SAM files that downstream RNA-seq tools understand.**

We could spend hours on RNA-seq alignment specifically — the corner cases are endless, the choice between aligners has real consequences for sensitivity at low-expression genes, and there's a whole sub-field of pseudoalignment (using tools like **kallisto** and **salmon**) that skips the explicit base-level alignment in favor of much faster transcript abundance estimation. But that's beyond our scope today. The key fact is: RNA-seq has its own aligners, they're splice-aware, and the two big ones are STAR and HISAT2.

---

## SEGMENT 16 — Multiple sequence alignment: Clustal, MAFFT, MUSCLE

So far we've talked exclusively about **pairwise** alignment — aligning two sequences. But many biological questions require aligning **many** sequences simultaneously — twenty, fifty, a thousand. The multiple sequence alignment (MSA) of a protein family lets you build a phylogenetic tree, identify conserved positions, build a profile HMM, design degenerate PCR primers, infer structural constraints, train a deep learning model — almost every comparative analysis of a protein family begins with an MSA.

Multiple sequence alignment is, in theory, a much harder problem than pairwise alignment. The exact algorithm for optimal MSA is a generalization of Needleman-Wunsch to N dimensions — you fill in an N-dimensional grid where each cell represents a partial alignment of all N sequences. The time complexity is O(L^N) where L is the typical sequence length and N is the number of sequences. For N=3 and L=1000, that's already 10^9 — borderline. For N=10, it's 10^30 — completely impossible. Exact MSA is hopeless for any non-trivial number of sequences.

\[Pause.\]

The practical solutions all involve **progressive alignment** — build up the multiple alignment one sequence at a time. The basic algorithm, called **progressive alignment** in the abstract, was popularized by **Clustal** in the late 1980s by Des Higgins and his colleagues. The recipe is: compute pairwise alignments between all pairs of sequences. Build a guide tree (a rough phylogenetic tree) from the pairwise distances. Then traverse the tree from the leaves to the root, aligning the most similar sequences first, then aligning the resulting alignment to the next-most-similar sequence, and so on. Each step is a pairwise alignment of either two sequences, two alignments, or a sequence and an alignment — all of which can be done with variants of dynamic programming using profile-style scoring.

The classical Clustal pipeline — distance matrix, guide tree, progressive alignment — was implemented in tools called **ClustalW** (1994) and later **ClustalX** (1997) and **ClustalΩ** (2011, the current version). For years, Clustal was the default MSA tool worldwide. But progressive alignment has a famous problem: errors made early in the process — at the bottom of the guide tree — are propagated up and never corrected. If two sequences are misaligned at the leaves, that misalignment is preserved through all subsequent merging steps.

This problem motivated a series of better tools. **MUSCLE** — Multiple Sequence Comparison by Log-Expectation — was published by Robert Edgar in 2004. It uses an iterative refinement strategy: do an initial progressive alignment, then refine it by repeatedly splitting the alignment into two groups and re-aligning them. The refinement corrects many of the errors that progressive alignment makes. MUSCLE is faster and more accurate than Clustal for most inputs.

**MAFFT** — Multiple Alignment using Fast Fourier Transform — was published by Kazutaka Katoh starting in 2002. It uses a fast Fourier transform to find pairs of homologous regions quickly, then refines the alignment with iterative refinement. MAFFT has many modes, ranging from very fast (FFT-NS-1, suitable for thousands of sequences) to very accurate (L-INS-i, slower but better alignments). It's now the most widely used MSA tool, especially for large families.

\[Pause.\]

There are other tools — **T-Coffee** is famous for high-accuracy MSA on small sets, **PRANK** is unique in that it tries to model insertions and deletions evolutionarily, **HMMER's hmmalign** can align sequences to an existing profile HMM. Each has its niche. But for most practical purposes, if you want a multiple sequence alignment, you use **MAFFT** (for speed and scale) or **MUSCLE** (for ease of use). Both produce alignments in FASTA-aligned format, with gaps inserted as dashes, that downstream tools accept.

The output of an MSA is then used for many downstream tasks. **Phylogenetic tree inference** uses the MSA to estimate evolutionary relationships among the sequences — tools like RAxML, IQ-TREE, and MrBayes all take MSAs as input. **Conservation analysis** identifies columns of the MSA that are highly conserved, which often correspond to functional sites. **Profile HMM construction** with HMMER's hmmbuild takes an MSA and produces a profile HMM. **Coevolution analysis** identifies pairs of columns whose residues are correlated, which can indicate physical contacts in the folded protein structure — and this is the basis of the input to AlphaFold and other structure prediction tools.

Here's the analogy. **Multiple sequence alignment is what you do when you have many related sequences and want to see them all lined up together. The exact problem is computationally intractable, so all practical tools use progressive alignment — build the alignment up one sequence at a time, guided by a rough phylogenetic tree. Clustal was the classic, MAFFT and MUSCLE are the modern workhorses. The output is a stack of aligned sequences with gaps inserted to make homologous columns line up. From the MSA, you can build trees, find conserved positions, train HMMs, infer protein contacts — it's the starting point for all comparative analysis of a family.**

---

## SEGMENT 17 — Modern challenges: structural variants, repeats, pangenomes

Let me step back from the parade of specific tools and talk about the modern challenges in sequence alignment — the problems that are still active research, the places where the current generation of tools falls short, the places where the field is moving. There are three I want to highlight: structural variants, repetitive regions, and pangenome alignment.

**Structural variants.** Most variant calling, with Illumina reads aligned by BWA, focuses on small variants — single nucleotide changes and short insertions or deletions of a few bases. These are the "easy" variants, in the sense that a single short read can span them and the alignment is straightforward. But the human genome also contains **large structural variants** — insertions, deletions, inversions, duplications, and translocations that span hundreds to millions of bases. These structural variants are responsible for a substantial fraction of human genetic disease, including most large copy-number changes, many cancer rearrangements, and major contributors to neurological disorders.

Detecting structural variants from short reads is hard because no single short read spans the variant. Instead, you have to infer the variant indirectly from coverage changes, from discordant paired-end mappings (where the two reads of a pair end up much further apart than expected, or in the wrong orientation), or from soft-clipped alignments at breakpoints. Tools like **DELLY**, **Manta**, **LUMPY**, and **GRIDSS** are specialized structural variant callers built on top of BWA-aligned BAM files. They each use slightly different signals — coverage, discordant pairs, split reads — but all infer SVs indirectly from short-read alignments.

Long reads make structural variant detection dramatically easier. A 50-kilobase nanopore read can span most structural variants directly — you can see the inversion, the duplication, the deletion in a single read, with the boundaries directly visible. Minimap2-based pipelines with tools like **Sniffles**, **PBSV**, and **SVIM** can call structural variants with much higher sensitivity than any short-read approach. This is one of the main reasons people are moving to long reads for clinical sequencing — short reads systematically miss the structural variants that cause real disease.

\[Pause.\]

**Repetitive regions.** Roughly half of the human genome consists of repetitive sequences — transposable elements, satellite DNA, centromeres, telomeres, segmental duplications. These regions are very hard to align reads to with confidence, because a short read from a repetitive region matches many places in the genome equally well, and the aligner has no way to know which place is correct. The standard solution is to assign such reads a low **mapping quality** (MAPQ) score — a number reported in the SAM file that estimates the probability the alignment is correct. Reads with MAPQ less than, say, 20 are typically filtered out before variant calling, on the grounds that you can't trust their placement.

But this throws away a lot of data — and worse, it systematically excludes the parts of the genome that may be biologically important. Many genes are embedded in or near repetitive regions, and centromeres and telomeres play essential cell-biological roles. Long reads help here too: a long read that anchors in a unique region next to a repeat can disambiguate the repeat, by reading through to the unique anchor. The current frontier of human genome assembly — the T2T-CHM13 reference genome, which assembled the complete human genome including all centromeres and telomeres — was made possible by combining ultra-long nanopore reads with PacBio HiFi reads, both aligned with minimap2.

\[Pause.\]

**Pangenomes.** Here's the deepest current challenge. Up to now, all alignment has assumed a **single linear reference genome** — the human genome is GRCh38, every read aligns to GRCh38, every variant is described relative to GRCh38. But humans differ from each other by tens of millions of variants, and any single reference systematically biases analysis against people who differ from it. A variant that's common in West African populations but missing from GRCh38 will be hard to align reads to and hard to call accurately. This is a real source of bias in clinical genomics.

The pangenome approach is to replace the linear reference with a **graph** — a data structure where the nodes are sequence segments and the edges represent how those segments connect, with the graph containing not one path through the genome but many alternative paths corresponding to common population variants. Aligning a read to a pangenome means finding the best path through the graph that matches the read — not the best position in a linear string. This is a fundamentally harder algorithmic problem, but it's also a fundamentally better representation of human genetic diversity.

The Human Pangenome Reference Consortium published the first draft human pangenome in 2023, containing 47 phased diploid assemblies from genetically diverse individuals. Tools like **vg** (variation graph), **GraphAligner**, **GraphChainer**, and **PGGB** (PanGenome Graph Builder) are the early implementations of pangenome alignment. The algorithms are immature compared to BWA and minimap2, but they're improving fast, and within five years pangenome alignment will likely become standard for at least clinical-grade analyses.

Here's the analogy. **The future of sequence alignment is pangenome alignment. Instead of one reference genome, a graph that contains common variants as alternative paths; instead of forcing your reads to align to a single linear sequence, finding the most-similar path through the graph. This is a more honest representation of human diversity, and it eliminates the reference bias that has plagued the field for two decades. The algorithms are new, the tools are immature, but the direction is clear.**

---

## SEGMENT 18 — Frontier: graph genomes, GPU acceleration, ML-based homology

In the last segment, I want to gesture at the frontier — what's happening in sequence alignment research right now, in 2026, and where the field is likely to be in five or ten years. There are three threads worth tracking.

**Thread one: graph genome alignment maturing.** We touched on this in Segment 17. The first generation of pangenome aligners — vg, GraphAligner — are working but slow and brittle. The next generation is starting to appear, with much better engineering and more sophisticated indexing. Tools like **giraffe** (the production pangenome aligner from the vg team) and **moni** (a compact pangenome index) are pushing pangenome alignment toward production-grade speed. The expectation in the field is that within a few years, the default human variant-calling pipeline will switch from BWA-against-GRCh38 to a pangenome alignment workflow, with all the population-genetic benefits that implies.

**Thread two: GPU and SIMD acceleration of alignment.** All the alignment algorithms we've discussed are computationally intensive — they involve filling large grids of numbers in patterns that are very regular and embarrassingly parallel. This makes them perfect targets for GPU acceleration. Tools like **GASAL2**, **WFA2**, and **NVIDIA's Parabricks** suite have ported the core alignment kernels to GPUs, achieving speedups of 10- to 100-fold over CPU implementations. For very high-throughput applications — clinical sequencing pipelines processing thousands of genomes per day — GPU alignment is becoming standard. The newest dynamic programming algorithm, the **WFA** (Wavefront Alignment Algorithm) by Santiago Marco-Sola, achieves linear-time alignment when sequences are similar (instead of quadratic), and is well-suited to GPU implementation. WFA is starting to replace banded dynamic programming in many tools, including minimap2 and BWA-MEM2.

\[Pause.\]

**Thread three: machine learning for homology detection.** This is the most exciting development, and the most transformative. The classical sequence alignment problem assumes that the only signal of homology is letter identity — matches and mismatches in the sequence. But proteins have **structure**, and the structure carries enormous additional information about homology. Two proteins might be only 15% identical in sequence yet have nearly identical 3D folds — which means they're homologous, even though sequence alignment alone might miss it.

The new wave of tools uses learned representations of protein sequences and structures to detect homology in a way that goes beyond sequence identity. **ESM** (Evolutionary Scale Modeling) from Meta AI is a protein language model — a transformer neural network trained on hundreds of millions of protein sequences — that learns a vector representation of each amino acid in its context. Two homologous proteins, even at distant evolutionary distances, have similar ESM embeddings, and you can detect homology by comparing embedding similarity rather than sequence identity. **Foldseek**, by the Söding group, takes a similar approach for protein structures — it encodes 3D structures as sequences in a learned structural alphabet, then aligns those structural sequences using standard Smith-Waterman. Foldseek can detect distant homology that no sequence-based method can find, by exploiting the fact that structure is more conserved than sequence.

These ML-based methods are not replacing classical alignment — they complement it. For close homologs, BLAST and BWA are still the right tools — fast, exact, well-understood. For distant homologs, where sequence identity has decayed below the detection threshold, ML-based methods extend the reach into the twilight zone. The combination of classical alignment for close homologs and ML-based detection for distant ones is becoming standard practice in protein family analysis.

\[Pause.\]

Let me step back and try to give you a sense of where the field is, conceptually, in 2026. Sequence alignment is fifty-five years old as a formal field (Needleman-Wunsch was 1970). The exact algorithms are mature and not changing. The fast heuristic algorithms have gone through three major waves — BLAST in 1990, BWA/Bowtie in 2009, minimap2 in 2018 — each driven by a new wave of sequencing technology that demanded new algorithmic ideas. The current generation of tools is good enough for almost all routine work.

The active frontiers are at the edges. **For very distant homology**, ML-based methods are extending the reach beyond what alignment alone can do. **For very long reads**, the algorithms are still being refined to handle the increasing throughput and decreasing error rates of nanopore. **For population-scale data**, graph genomes are replacing linear references. **For very large databases** — billions of sequences from metagenomics — sketching and approximate methods like **Mash** and **sourmash** are providing fast similarity estimates without full alignment. **For real-time clinical applications** — sequencing in the ICU, sequencing in the field with portable nanopore devices — the algorithms are being pushed toward streaming, online, GPU-accelerated versions.

But the core operation — given two sequences, find the best alignment — is the same operation it was in 1970. The same dynamic programming recurrence Needleman and Wunsch wrote down, in different incarnations, sits at the heart of every alignment tool today. The algorithm is so fundamental that it has become invisible — it's the air, the foundation, the assumed substrate on which everything else is built. When you use BWA, you're using a fast index on top of dynamic programming. When you use BLAST, you're using a clever heuristic that wraps dynamic programming. When you use minimap2, you're using chaining and minimizers on top of dynamic programming. The dynamic programming is always there. It is the most important algorithm in biology.

\[Pause.\]

Let me close with one observation. Sequence alignment is the rare piece of computer science whose impact on a different field — biology — has been at least as large as its impact on its home discipline. The Needleman-Wunsch algorithm is taught in every algorithms textbook as an example of dynamic programming, but its real significance is not as a teaching example — it's as the operation that made it possible to read the tree of life, to do molecular evolution, to identify human genes by homology to fly genes, to find pathogens by their DNA, to track variants of SARS-CoV-2 as they spread around the world. Without sequence alignment, modern biology does not exist. With it, modern biology is what it is. That's a remarkable legacy for a four-page paper from 1970 and a two-page paper from 1981. Hold that in your head as you leave today. The most important algorithm in biology is also one of the most elegant, and it took two of them to do it — global and local, Needleman-Wunsch and Smith-Waterman — and everything else is built on top.

Thank you for staying with me through these two hours. Sequence alignment is the foundational operation, and now you know it. Use it well.

---

## APPENDIX — Suggested exercises, references, and further reading

For the student who wants to go deeper, here are some suggested exercises and references.

**Exercises:**

1. By hand, on paper, compute the Needleman-Wunsch alignment of the sequences GATTACA and GCATGCU, using a match score of +1, a mismatch score of -1, and a gap penalty of -2. Fill in the entire matrix. Then perform the traceback. Report the optimal alignment and its score. (Hint: there may be ties; pick one consistent traceback policy.)

2. Repeat exercise 1 with Smith-Waterman scoring (add the zero option, change boundary conditions to zeros, traceback from the maximum). Compare the result. Is the Smith-Waterman alignment a sub-region of the Needleman-Wunsch one? Always?

3. Visit blast.ncbi.nlm.nih.gov. Paste in the human protein BRCA1 (you can find the sequence by searching UniProt for "BRCA1_HUMAN"). Run BLASTP against the nr database, limiting the search to non-human organisms. Examine the top 20 hits. Report the bit score, E-value, percent identity, alignment length, and organism for each. What is the most distant BRCA1 homolog you can find with confidence (E < 10^-5)? Comment on what this tells you about BRCA1's evolutionary conservation.

4. Compute the edit distance between the strings "kitten" and "sitting" by hand using dynamic programming. (The answer is 3: substitute k for s, substitute e for i, insert g. Verify this by tracing through the DP matrix.)

5. Download a small bacterial genome from NCBI (any Escherichia coli strain). Download an Illumina read set from SRA for the same strain. Build a BWA index of the genome. Align the reads. Open the resulting BAM file in IGV or a similar viewer. Look at one read in detail. Identify the CIGAR string. Identify a SNP. Identify a region of high coverage and a region of low coverage. Comment on what you see.

6. Compare BWA-MEM and Bowtie2 on the same Illumina dataset. Are the alignments identical? If not, where do they differ? (Hint: look at reads in repetitive regions, where multi-mapping happens.)

7. Run a small RNA-seq dataset through STAR. Examine the splice junctions in the output. How many junctions did STAR detect? How many were known (annotated in GTF) versus novel?

8. Build a profile HMM of the globin family using HMMER's hmmbuild on a Pfam globin alignment. Use that HMM to search a proteome for new globin candidates. What sensitivity does the HMM achieve compared to BLASTP?

\[Pause.\]

**Key references:**

- Needleman, S. B. & Wunsch, C. D. (1970). A general method applicable to the search for similarities in the amino acid sequence of two proteins. J Mol Biol 48(3): 443-453. _The original paper._

- Smith, T. F. & Waterman, M. S. (1981). Identification of common molecular subsequences. J Mol Biol 147(1): 195-197. _Local alignment._

- Dayhoff, M. O. et al. (1978). A model of evolutionary change in proteins. Atlas of Protein Sequence and Structure, 5(3): 345-352. _Original PAM matrices._

- Henikoff, S. & Henikoff, J. G. (1992). Amino acid substitution matrices from protein blocks. PNAS 89(22): 10915-10919. _BLOSUM matrices._

- Altschul, S. F. et al. (1990). Basic local alignment search tool. J Mol Biol 215(3): 403-410. _Original BLAST paper._

- Altschul, S. F. et al. (1997). Gapped BLAST and PSI-BLAST. Nucleic Acids Res 25(17): 3389-3402. _Gapped BLAST and profile iteration._

- Eddy, S. R. (1998). Profile hidden Markov models. Bioinformatics 14(9): 755-763. _HMMER and profile HMMs._

- Li, H. & Durbin, R. (2009). Fast and accurate short read alignment with Burrows-Wheeler transform. Bioinformatics 25(14): 1754-1760. _Original BWA paper._

- Langmead, B. & Salzberg, S. L. (2012). Fast gapped-read alignment with Bowtie 2. Nat Methods 9: 357-359. _Bowtie 2._

- Li, H. (2018). Minimap2: pairwise alignment for nucleotide sequences. Bioinformatics 34(18): 3094-3100. _Minimap2._

- Dobin, A. et al. (2013). STAR: ultrafast universal RNA-seq aligner. Bioinformatics 29(1): 15-21. _STAR._

- Kim, D. et al. (2019). Graph-based genome alignment and genotyping with HISAT2. Nat Biotechnol 37: 907-915. _HISAT2._

- Edgar, R. C. (2004). MUSCLE: multiple sequence alignment with high accuracy and high throughput. Nucleic Acids Res 32(5): 1792-1797. _MUSCLE._

- Katoh, K. & Standley, D. M. (2013). MAFFT multiple sequence alignment software version 7. Mol Biol Evol 30(4): 772-780. _MAFFT._

- Liao, W.-W. et al. (2023). A draft human pangenome reference. Nature 617: 312-324. _The first human pangenome._

- van Kempen, M. et al. (2024). Fast and accurate protein structure search with Foldseek. Nat Biotechnol 42: 243-246. _Foldseek._

- Rives, A. et al. (2021). Biological structure and function emerge from scaling unsupervised learning to 250 million protein sequences. PNAS 118(15): e2016239118. _ESM._

**Textbooks worth owning:**

- Durbin, R., Eddy, S., Krogh, A., & Mitchison, G. (1998). _Biological Sequence Analysis_. Cambridge University Press. _The classic textbook on probabilistic models of biological sequences. Old but still excellent._

- Waterman, M. S. (1995). _Introduction to Computational Biology: Maps, Sequences and Genomes_. Chapman & Hall. _Foundational textbook by one of the field's founders._

- Mount, D. W. (2004). _Bioinformatics: Sequence and Genome Analysis_, 2nd ed. CSHL Press. _Practical bioinformatics textbook._

**Online resources:**

- NCBI BLAST: https://blast.ncbi.nlm.nih.gov — the canonical web BLAST.
- Pfam (now part of InterPro): https://www.ebi.ac.uk/interpro — protein family database with profile HMMs.
- UCSC Genome Browser: https://genome.ucsc.edu — for visualizing alignments in genomic context.
- Heng Li's blog (lh3.github.io): often the best technical writing on alignment algorithms.

That's everything. Go forth and align.

---

