# Cryo-electron microscopy

**A 2-hour undergraduate structural biology lecture — full spoken script**

---

_How to use this script:_ This is written to be read aloud. It runs about 12,000 words. At a typical lecturing pace — roughly 120 words per minute once you include natural pauses, emphasis, and the marked \[Pause.\] beats — that fills close to two hours, plus a mid-point break. (Read faster, ~140 wpm, and it lands nearer 90 minutes, leaving room for questions or board work.) Timing cues and stage directions appear in \[brackets\] — these are for you, the speaker, and should not be read aloud. There's a planned break at the one-hour mark, after Segment 9. To turn this into audio, read it yourself into a recorder or paste segments into a text-to-speech tool.

---

## SEGMENT 1 — From blobology to the dominant method

Alright. Settle in. Today we're going to spend two hours on cryo-electron microscopy — cryo-EM — which is, as of right now, the dominant experimental technique for determining the three-dimensional structures of biological molecules. That sentence would have been laughable to most structural biologists twenty-five years ago. In the 1990s, cryo-EM was a niche, slightly disreputable corner of structural biology. It produced low-resolution images that the crystallographers, who ran the field, dismissively called "blobology." You could see that something was there. You could see that it had a roughly spheroidal shape, or that it had some lobes. But you could not see atoms. You could not, in general, build an atomic model. The field of cryo-EM was a place you went when X-ray crystallography wouldn't work — and then you produced a blob, and people would nod politely, and then you'd go back to trying to grow a crystal.

That is no longer the world we live in. Today, the majority of new protein structures deposited in the world's central structural database are determined by cryo-EM, not by X-ray crystallography. The technique routinely produces atomic-resolution structures of enormous, floppy, membrane-embedded, conformationally heterogeneous molecules that crystallography simply cannot touch. In 2017, three pioneers of the technique — Jacques Dubochet, Joachim Frank, and Richard Henderson — were awarded the Nobel Prize in Chemistry, with the citation reading, in its essential English, _for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution_. Note that phrase: "in solution." Not in a crystal. Not in a tube. In something close to their native state. That's the revolution.

\[Pause.\]

I want to begin by being clear about what we mean when we say "structure." A protein is a chain of amino acids. The chain folds. The folded shape — three-dimensional, intricate, with pockets and surfaces and hinges — is what the protein actually _does_. The shape determines whether the protein cuts DNA, or pumps ions, or grabs a virus, or catches a photon. Function follows form. And if you want to understand a protein at the level you need to design a drug against it, or to engineer it, or to explain how a mutation causes disease, you need the shape — and you need it at high enough resolution to see the individual atoms, or at least the individual amino acid side chains. That's what structural biology, as a field, is about. Getting the shape. To atomic resolution, if at all possible.

For most of the twentieth century, the way you got that shape was X-ray crystallography. You purified a lot of your protein, you coaxed it into forming a crystal, you shot X-rays at the crystal, and you reconstructed the structure from the diffraction pattern. Spectacular technique. Won several Nobel Prizes. Gave us hemoglobin, myoglobin, DNA, the ribosome, photosynthetic reaction centers. But it has one fundamental requirement: the protein has to form a crystal. And a huge fraction of biology's most interesting proteins — the membrane proteins that sit in the cell's outer wall, the floppy multi-subunit machines that carry out most of cellular metabolism, the transient complexes that form and dissolve — refuse to crystallize. They are too floppy. They are too greasy. They have too many moving parts. Crystallography was, for those targets, a wall.

Cryo-EM is what broke that wall.

\[Pause.\]

The core idea of cryo-EM, in a sentence, is: **freeze your sample in liquid ethane so fast that water doesn't have time to form ice crystals, then take a million electron-microscope photos of randomly-oriented molecules, computationally figure out the orientation of each one, and average them all into a three-dimensional shape.** That sentence has a lot in it, and we'll unpack each part over the next two hours. But that is the essence. Freeze fast. Image many. Average computationally. Reconstruct in three dimensions.

The reason this works, and the reason it took fifty years of effort to make it work, is that each individual electron-microscope image of a single protein molecule is _terrible_. It is unbelievably noisy. Proteins are small and fragile; electrons damage them; you have to use as few electrons as possible per image, and that means each image is mostly noise. But if you have a million noisy images of the same molecule in many different orientations, and you can computationally line them up and average them, the signal accumulates and the noise washes out — and what emerges, almost magically, is a high-resolution three-dimensional structure. The technique is, in a deep sense, a triumph of computation over signal-to-noise ratio. It's the kind of thing that only works because we have computers now.

\[Pause.\]

If you walk out of here in two hours and you can do four things — one, explain in plain English what cryo-EM is, how it differs from X-ray crystallography, and why it's now the dominant technique; two, walk through the three Nobel-winning breakthroughs that made it possible — Dubochet's vitrification, Frank's single-particle averaging, and Henderson's atomic-resolution proof; three, describe the modern workflow, from purifying a protein to a finished atomic model, including why direct electron detectors in 2013 changed everything; and four, place cryo-EM in the larger ecosystem of structural biology, including its symbiosis with AlphaFold and its remaining frontiers — then we've succeeded. Everything else hangs off those four.

I want to be honest about the tone here. There are technologies that arrive with a press release and then quietly fade. Cryo-EM is not one of those. Cryo-EM, in the last decade, has rearranged the daily working life of every structural biologist on Earth. Labs that had spent thirty years grinding out X-ray structures now run cryo-EM. Pharmaceutical companies have built their entire structure-based drug design pipelines around it. Targets that were considered "undruggable" because no one could see them at atomic resolution — membrane channels, GPCRs, large signaling complexes — are now solved routinely. The pace is breathtaking, and the field is still accelerating. We'll get to all of that. But first, let's understand the problem cryo-EM was trying to solve, and why the older methods couldn't solve it for so many of biology's most interesting targets.

---

## SEGMENT 2 — Why we need atomic-resolution structures

To understand why cryo-EM matters, you have to first understand why a structural biologist cares so much about resolution. Why isn't a blob good enough? Why do we need to see atoms?

Here's the answer. Most of what biological molecules do, they do through specific physical contacts at the atomic scale. An enzyme binds its substrate by making a precise geometric fit — hydrogen bonds in particular places, hydrophobic surfaces matched, electrostatic interactions tuned to within an ångström. A drug works because a small molecule slides into a pocket on a protein and makes contacts with specific side chains. A signal transduces because a receptor binds a hormone in a particular way and changes shape, propagating the message inward. None of these processes can be understood from a blob. You need to see, at the level of individual atoms, which side chain is touching which, where the hydrogen bond is, what the geometry of the binding pocket actually looks like. You need resolution.

\[Pause.\]

Let me give you a number to anchor on. The covalent bonds between atoms in a protein are about 1.5 ångströms long. An ångström is one ten-billionth of a meter, or 0.1 nanometers. The smallest things that matter — individual hydrogen bonds, individual van der Waals contacts — happen at distances of 2 to 4 ångströms. So if you want a structure where you can identify these contacts, where you can say "this lysine is forming a salt bridge with this glutamate," you need a resolution better than about 3 ångströms. A 2 ångström structure is excellent. A 1.5 ångström structure is essentially perfect — you can see water molecules, you can see individual atomic positions with very little ambiguity. A 5 ångström structure shows you the backbone of the protein and the overall shape, but you can't reliably trace the side chains. A 10 ångström structure is a blob with some discernible features. A 20 ångström structure is a blob, full stop.

For most of the twentieth century, the only way to reliably get sub-3-ångström structures of proteins was X-ray crystallography. NMR — nuclear magnetic resonance — could do small proteins, up to maybe 30 kilodaltons or so, in solution, but it scaled badly with size. Cryo-EM existed but topped out at 10 ångströms for most targets, well into the blob zone. So if you wanted atomic resolution, you basically had one choice: get a crystal.

\[Pause.\]

And here is the deep problem. Many of the most biologically important molecules will not form crystals. Let me give you the big categories.

**Membrane proteins.** These are proteins that live embedded in the greasy lipid bilayer of the cell membrane. They are the gatekeepers of the cell — they let things in, let things out, sense signals from outside, generate the electrical signals of nerves and muscles. Pharmacologically, they are the most important class of drug target — something like 60 to 70 percent of marketed drugs target membrane proteins. But membrane proteins do not want to form crystals. To get them to crystallize, you have to first extract them from the membrane with detergents, which strips away their natural environment, often denatures them, and almost never gives you something that crystallizes nicely. For decades, membrane protein crystallography was one of the most brutal subfields of structural biology. People spent entire careers, twenty years, trying to crystallize a single membrane protein, and often failed.

**Large multi-subunit complexes.** The ribosome — the molecular machine that translates RNA into protein — has more than fifty subunits and is the size of a small virus. The spliceosome, which edits messenger RNAs, is similarly enormous and has many compositional variants. The proteasome, RNA polymerase complexes, the photosystems, the respiratory chain — these are huge assemblies, often with millions of daltons of mass and dozens of moving parts. They sometimes do crystallize, after heroic effort, but the structures are hard-won and not always atomic.

**Floppy or conformationally heterogeneous proteins.** Many proteins exist in a population of slightly different shapes — flexing, swinging, breathing. If you try to crystallize them, the crystal demands they all sit in the same conformation. So either the protein refuses to crystallize, or the crystal selects one particular conformation and you miss the others. The dynamic information — the part that's often most biologically interesting — is lost.

\[Pause.\]

And then there's a fourth, more subtle problem with crystallography, which is that the crystal itself is an artificial environment. The protein is packed against other copies of itself in a dense lattice, with crystal contacts that don't exist in solution. Usually this doesn't matter — the structure you see in the crystal is, for most globular proteins, a faithful reflection of the structure in solution. But sometimes the crystal contacts distort the protein, especially in flexible regions like loops and termini, and you end up with a structure that's subtly wrong.

The dream, the always-stated dream, of structural biology was: a method that works on proteins in solution, at near-physiological conditions, without needing a crystal, for any protein of any size, at atomic resolution. That's what cryo-EM has become. But to appreciate how startling that is, you need to understand the world before it arrived. So let's go through the older methods, briefly, because they were the giants on whose shoulders cryo-EM eventually stood.

---

## SEGMENT 3 — The pre-cryo-EM era — crystallography, NMR, and early EM

Let's do a quick tour of how structural biology actually got done in the half-century before cryo-EM took over. We'll go in order of historical dominance.

**X-ray crystallography.** This is the grand old discipline of structural biology. It started in earnest in the 1950s. Two of the very earliest protein structures — hemoglobin and myoglobin — were solved by Max Perutz and John Kendrew at the MRC Laboratory of Molecular Biology in Cambridge, work that took something like two decades and won them the Nobel Prize in Chemistry in 1962. Around the same time, Watson, Crick, Franklin, and Wilkins were using X-ray diffraction to figure out the structure of DNA. The whole modern picture of biology as a science of three-dimensional molecules really starts with these breakthroughs.

The technique works like this. You purify your protein — many milligrams of it, very pure, very monodisperse. You set up thousands of conditions trying to coax it into forming a crystal — different salts, different pH, different precipitants, different temperatures. If you're lucky, in one or two of those thousands of conditions, the protein molecules pack themselves into a regular three-dimensional lattice. The crystal might be the size of a grain of sand, or even smaller. You shoot a focused X-ray beam at the crystal. The X-rays scatter off the electrons in the protein, and because the protein molecules are arranged in a perfect lattice, the scattered X-rays interfere constructively in particular directions, producing a pattern of spots on a detector — the diffraction pattern. From the positions and intensities of the spots, after substantial computation involving a thing called the phase problem (which I'll mostly skip), you can reconstruct the three-dimensional electron density of one protein molecule in the crystal. Then you build an atomic model into that density.

\[Pause.\]

For most of the twentieth century, X-ray crystallography was simply how structures got done. Whole generations of structural biologists were crystallographers — they thought in terms of crystals, they spent half their careers in the crystallization room. By 2010, the Protein Data Bank, the central repository of structures, had roughly 70,000 entries, and over 90 percent of them were X-ray structures.

The strengths of crystallography: atomic resolution routinely, sometimes sub-ångström; well-developed methods and software; if your protein crystallizes well, the structure is gorgeous. The weaknesses: you need a crystal, and many proteins won't give you one; you need lots of pure protein; the crystallization screen is a black art with no theory behind it; you only see one conformation; and the crystal is an artificial environment.

\[Pause.\]

**Nuclear magnetic resonance, NMR.** The second major technique. Developed for chemistry in the 1940s and 1950s — the basic phenomenon was discovered by Felix Bloch and Edward Purcell, who shared a Nobel Prize for it in 1952 — and extended to proteins through the 1980s and 90s by people like Kurt Wüthrich, who got the Nobel in 2002 specifically for developing NMR for biomolecular structure determination.

NMR works by putting your protein, in solution, into a very strong magnetic field, hitting it with radio waves, and measuring how the magnetic moments of certain atomic nuclei — particularly hydrogens, but also carbons and nitrogens labeled with heavy isotopes — respond. From the patterns of resonances, you can deduce which atoms are close to which other atoms in space, and from a large enough set of such distance constraints, you can compute the three-dimensional structure.

The beautiful thing about NMR is that it works in solution. No crystal needed. Your protein is in a tube, in water, at near-physiological conditions, and you can even watch it move — NMR is the technique of choice for studying protein dynamics. The hard limit of NMR is size. Above about 30 kilodaltons, the spectra become too crowded — every additional atom adds resonances, the peaks overlap, the analysis breaks down. NMR is wonderful for small proteins, peptide hormones, isolated domains — but it can't touch the ribosome.

\[Pause.\]

**Electron microscopy, before cryo.** Electron microscopy was developed in the 1930s by Ernst Ruska — who eventually won a Nobel Prize for it in 1986, half a century later — and it gave biologists pictures of cells and viruses and large macromolecular assemblies at much higher resolution than light microscopes could ever achieve. The basic physics is straightforward: electrons have much shorter wavelengths than visible light, so they can resolve much smaller features. In principle, electron microscopes could resolve down to fractions of an ångström. In practice, for biological samples, there were enormous problems.

The two biggest problems: vacuum and radiation damage. An electron microscope operates in a high vacuum, because electrons can't travel through air. But biological samples are mostly water — proteins are dissolved in water, cells are mostly water — and if you put water in a vacuum, it boils off instantly, and the proteins and cells dehydrate, collapse, and die. Whatever structure you were trying to see is destroyed by the very act of putting it in the microscope. The classical workaround was to fix and stain the sample — chemically cross-link it, then coat it with a heavy metal stain that would survive the vacuum. This worked, but it gave you, essentially, a metal shell of where your protein had been, with all the fine detail lost. The resolution was poor — 15 to 30 ångströms, deep in blob territory.

The second problem, radiation damage. The electron beam is a high-energy thing, and biological molecules are fragile. The first few electrons that hit a protein deposit enough energy to break bonds, scramble side chains, ionize the molecule. By the time you've taken a clear image, you've destroyed the very thing you were trying to image. You're imaging a corpse.

For decades, biological electron microscopy was therefore stuck. It could show you cells and viruses at modest resolution — beautiful work, important work, but not atomic. The structural biologists who used it — and there were some, working on things like helical filaments and large symmetric viruses — were a small subculture, and their resolution typically maxed out around 10 ångströms. Blobology.

\[Pause.\]

Three things had to happen to turn EM into a high-resolution technique for biomolecules. First, you had to figure out how to put a biological sample into the vacuum without destroying it. Second, you had to figure out how to extract a signal from images that were inevitably noisy, because you couldn't dump much electron dose without destroying the sample. Third, you had to prove that atomic resolution was actually achievable on a real biological target.

Those three things are exactly what the 2017 Nobel Prize was for. Dubochet solved the first. Frank solved the second. Henderson solved the third. Let's take them in that order.

---

## SEGMENT 4 — Dubochet's trick — vitrification

In the late 1970s and early 1980s, Jacques Dubochet was a Swiss biophysicist working at EMBL in Heidelberg. He was thinking hard about the vacuum problem. Everyone knew you needed water around proteins to keep them in their native state, and everyone knew you couldn't put water in an electron microscope. The standard approach — chemical fixation and heavy-metal staining — destroyed too much detail. Dubochet wanted a way to keep the water there, in solid form, but without ice crystals — because if the water froze normally, into crystalline ice, the ice crystals themselves would destroy the protein, both mechanically and by concentrating solutes into pockets between the crystals.

The trick Dubochet eventually developed is what we now call **vitrification**. The idea is this: if you cool water fast enough, faster than the molecules can rearrange themselves into a crystalline lattice, the water will freeze into a glass — an amorphous, non-crystalline solid called **vitreous ice**. Vitreous ice has the molecular arrangement of liquid water, frozen in place. The proteins in it stay in their native conformation, with their hydration shells intact. The vacuum problem goes away, because vitreous ice is solid and stable in vacuum. The damage problem from ice crystals goes away, because there aren't any ice crystals.

\[Pause.\]

The "how fast" turns out to be crucial. To vitrify water, you have to cool it at something like 100,000 degrees per second. You cannot do that by putting it in a freezer. You cannot do that by dropping it in liquid nitrogen, because liquid nitrogen, paradoxically, isn't fast enough — when something warm hits liquid nitrogen, the nitrogen boils, and the bubble of nitrogen gas around your sample insulates it, slowing the cooling. The Leidenfrost effect. So liquid nitrogen by itself isn't fast enough to vitrify a typical biological sample.

The solution Dubochet and his colleagues worked out is what's now called **plunge freezing in liquid ethane**. You take ethane gas, cool it down with liquid nitrogen until it becomes a liquid at around minus 180 degrees Celsius. Ethane has a relatively high boiling point and a relatively high specific heat, and crucially, it doesn't form an insulating gas film around your sample the way nitrogen does. You make a thin film of your protein in water, suspended on a fine grid — we'll come back to grids — and you plunge that grid into the liquid ethane. The thin water film cools at a hundred thousand degrees per second, the water vitrifies, and the proteins are flash-frozen in place, in their native conformations, in vitreous ice that you can put into the microscope.

That, in essence, is **the Dubochet trick — drop the sample on a grid, plunge into liquid ethane at minus 180 degrees Celsius; the water freezes faster than it can crystallize, becomes glass-like ice, the protein doesn't get torn apart.**

\[Pause.\]

This sounds simple in retrospect. It was not simple in 1981. Dubochet's group had to work out all the parameters — the geometry of the plunging apparatus, the thickness of the water film, the temperature and purity of the ethane, the design of the grid, the conditions under which vitreous ice actually formed versus crystalline ice. They had to invent and refine a technology. And they had to convince a skeptical electron microscopy community that this strange new sample preparation method actually preserved native protein structures, rather than introducing some unholy artifact of its own.

By the mid-1980s, the basic vitrification protocol was working. People in Dubochet's group, and in collaborating labs, were producing electron micrographs of viruses and large protein assemblies that were demonstrably preserved in their native state. The proteins floated in a thin film of vitreous ice on a holey carbon support, the electron beam passed through them, and the resulting images showed structural detail that no chemical fixation method had ever achieved.

This was a foundational achievement. But the images, taken one at a time, were still terrible. Because you couldn't dump much electron dose without destroying the protein, each individual image had a signal-to-noise ratio so bad that the protein particles were barely distinguishable from the background. You could just see fuzzy outlines of where the molecules were, but you couldn't make out internal detail. The vitrification problem was solved; the noise problem was not.

\[Pause.\]

That's where Joachim Frank comes in.

---

## SEGMENT 5 — Frank's algorithm — single-particle averaging

Joachim Frank is a German-born structural biologist who spent most of his career at the Wadsworth Center in Albany, New York, and now at Columbia. Through the 1970s and 80s, while Dubochet was working on freezing, Frank was working on a different problem: how do you extract signal from a lot of noisy images?

Here's the situation. You have a vitreous ice grid containing thousands of copies of the same protein, frozen in place, in many different random orientations. You take an electron micrograph. The image shows a field of fuzzy spots, each spot being one protein, each protein in a different rotational orientation than the next, and each spot extremely noisy because you used very low electron dose.

Frank's insight — and this took years of careful work to make precise — was that all those noisy spots are, in principle, projections of the same three-dimensional object, just seen from different angles. If you could computationally figure out the orientation of each spot, you could combine them. You could group together spots that happened to be in similar orientations, average them to reduce noise, and then use the set of averages from different orientations to reconstruct, mathematically, the three-dimensional structure of the original molecule. That technique is called **single-particle analysis**, and it's the conceptual core of modern cryo-EM.

\[Pause.\]

Let me try the analogy. Imagine you have a sculpture — a small, intricate statue — and you have a million photographs of it, all taken in dim light so each photo is very grainy. Each photo is taken from a different angle, but you don't know what angle. The photos are unlabeled. Your task: from these million noisy, unlabeled photographs, reconstruct the three-dimensional shape of the sculpture, in fine detail.

The way you do it is iterative. First, you make a guess at the orientation of each photo. Maybe you start with a rough 3D model — a sphere, or an existing low-resolution structure of something similar — and you ask, for each photo, "what orientation of this rough model would produce a 2D projection that looks most like this photo?" You assign that orientation to the photo. Then you take all the photos you've now labeled with orientations, and you back-project them — you smear each one out into 3D space at the angle you assigned — and the smears reinforce each other where the true structure is. That gives you a better 3D model. Then you re-orient all the photos against the better model. Then you back-project again. Iterate. The model gets sharper, the orientations get more accurate, the noise washes out, and eventually you converge on a high-resolution 3D structure.

That, in algorithmic essence, is **single-particle reconstruction**. You image millions of randomly-oriented copies of the same molecule; the software figures out each one's orientation; you average them into 3D. Each individual image is garbage. The million-image ensemble is exquisite.

\[Pause.\]

Frank developed the mathematical framework and the computer algorithms for this through the 1970s and 80s, mostly on ribosomes — large, asymmetric protein-RNA complexes that were exactly the kind of thing crystallography couldn't yet touch. His software package, called SPIDER, was one of the first widely used cryo-EM image-processing programs. By the 1990s, Frank's methods could produce 3D reconstructions of ribosomes at around 25 ångström resolution — still blobby by atomic standards, but enough to see the overall shape, identify the major subunits, watch the ribosome go through different functional states. It was the most detailed view of the translation machinery anyone had ever produced, and it was being done on samples in something close to their native state.

The Frank algorithms have evolved enormously since then, and modern cryo-EM software — RELION, cryoSPARC, EMAN, which we'll discuss later — implements much fancier versions of the same fundamental idea. Maximum-likelihood estimation, Bayesian frameworks, sophisticated classification methods that can separate out different conformations of the same molecule. But the core insight — that you can computationally combine many noisy images of randomly oriented molecules into a high-resolution 3D structure — that's Frank.

\[Pause.\]

So now we've got two of the three pillars. Dubochet showed us how to put a biological sample into the microscope without destroying it. Frank showed us how to extract signal from the noisy images. But did this actually work at atomic resolution? On a real biological target? That was the question hanging over the field through the 1980s and into the 1990s. And the demonstration came from Richard Henderson and a small membrane protein called bacteriorhodopsin.

---

## SEGMENT 6 — Henderson's proof — bacteriorhodopsin at atomic resolution

Richard Henderson was a Scottish structural biologist, also at the MRC LMB in Cambridge — the same lab that had produced hemoglobin and myoglobin two decades earlier. From the 1970s onward, Henderson was obsessed with a particular protein called **bacteriorhodopsin**, a light-driven proton pump found in the membranes of certain halophilic archaea. Bacteriorhodopsin is a membrane protein — it sits in the lipid bilayer — and it has the rather charming property that it naturally organizes itself into two-dimensional crystals within the membrane. Not three-dimensional crystals; just two-dimensional, sheet-like crystalline arrays. That made it a tantalizing target. You couldn't grow good three-dimensional crystals for X-ray crystallography. But you had naturally occurring two-dimensional crystals you could put into an electron microscope.

Henderson and his colleague Nigel Unwin, in 1975, used electron microscopy on these two-dimensional crystals to produce a structure of bacteriorhodopsin at 7 ångström resolution. That was a remarkable achievement. They could see the seven transmembrane helices threading through the membrane. They could see the overall topology. But 7 ångström is not atomic — you can see the backbone helices, but not the side chains.

For the next twenty years, Henderson worked on improving that structure. He worked on better microscope conditions, better imaging, better processing. And in 1990, he published a structure of bacteriorhodopsin at 3.5 ångströms — atomic resolution, by any reasonable definition. He had built an atomic model of a membrane protein, in its native lipid environment, using electron microscopy. It was the first time anyone had done that.

\[Pause.\]

The 1990 bacteriorhodopsin structure was the proof of concept the field needed. It demonstrated that, given the right sample and the right techniques, electron microscopy could reach atomic resolution on a biological target. It wasn't general yet — bacteriorhodopsin was an unusually cooperative sample, with its natural two-dimensional crystals — but it proved the physics was on your side. There was no fundamental barrier preventing atomic-resolution cryo-EM. The question was just how to extend the technique to arbitrary targets, especially targets that didn't form two-dimensional crystals and had to be imaged as individual particles.

Through the 1990s and 2000s, the field worked on that extension. Single-particle cryo-EM, building on Frank's algorithms, produced steadily improving structures of viruses, ribosomes, and large molecular machines. Resolutions crept down from 20 ångströms to 15, to 10, to 8. By the late 2000s, the best single-particle cryo-EM structures were in the 5 to 8 ångström range — better than blobology, but still not quite atomic. You could see the backbone but not the side chains. You could fit existing high-resolution structures into the density, but you couldn't build a new atomic model de novo.

The community kept saying, "we are about to hit atomic resolution." And then we didn't quite get there. There was always one more limitation. The detectors were not good enough. The image stability was not good enough. Something was always holding us back.

\[Pause.\]

Then, around 2012 and 2013, a new generation of electron detectors came online. And what happened next, in the cryo-EM community, was so dramatic that it has its own name. It is called **the resolution revolution**. That's the topic of the next segment.

But before we go there, let me close this segment with the 2017 Nobel. In October of 2017, the Royal Swedish Academy of Sciences announced the Nobel Prize in Chemistry to Jacques Dubochet, Joachim Frank, and Richard Henderson. The citation: _for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution_. Three pioneers, three pillars — vitrification, single-particle averaging, atomic-resolution proof. The technology had taken roughly forty years from its earliest beginnings to its Nobel-decorated maturity. Most of that work was done in the quiet decades, in small labs, on unfashionable problems, with techniques that other structural biologists rolled their eyes at. By 2017, it was the dominant method in the field.

---

## SEGMENT 7 — The resolution revolution — direct electron detectors

For decades, the limiting factor in cryo-EM was, surprisingly, the detector. The electron microscope itself was capable of producing exquisitely detailed images — the electron optics were diffraction-limited at sub-ångström resolution. The vitrified sample was preserving the protein in its native state. The image-processing algorithms were getting smarter every year. But what was holding back resolution was the device that actually recorded the image.

For most of the history of cryo-EM, the detector was photographic film. You took an exposure, the film recorded it, you developed the film, you digitized it on a scanner. Film has high dynamic range and reasonable signal-to-noise, but it's slow — you can't easily take many exposures in series, you can't correct for the fact that your sample is drifting around in the beam, you can only record one snapshot. Then, in the late 1990s and 2000s, charge-coupled devices — CCDs — replaced film. CCDs were digital, faster, but they were not direct detectors. The electrons hit a phosphor screen that produced photons, the photons traveled through fiber optics to the CCD chip, and the CCD detected the photons. Each step in that chain added noise. The end result was a detector that was, in many ways, worse than film for cryo-EM purposes.

The breakthrough was the **direct electron detector**. Starting around 2012 and 2013, a new generation of detectors became commercially available — the Falcon series from FEI (now Thermo Fisher), the K2 and later K3 from Gatan, the DE series from Direct Electron. These detectors used CMOS chips that could detect individual incoming electrons directly, without the phosphor-photon intermediate step. They had vastly better signal-to-noise. And, critically, they were fast — fast enough to record movies, not just single snapshots.

\[Pause.\]

Here's why the movies mattered. When you put a vitrified sample into an electron microscope and turn on the beam, the sample _moves_. Even at cryogenic temperatures, even with the most careful sample preparation, the beam-induced motion of the specimen — sometimes also called beam-induced doming or warping — blurs the image. For decades this was a fundamental limitation. You could take a long exposure to gather more signal, but the longer the exposure, the more the sample moved, and the more your image blurred. So you had to balance signal versus blur, and the resolution suffered.

With a direct detector that could record movies — say, forty frames over a few seconds of exposure — you could record each frame separately, see how the sample was moving from frame to frame, computationally align all the frames to correct for the motion, and then sum them into a single sharp image. This is called **motion correction**, and it transformed the technique. You could collect total dose that was previously blurred away, you could correct for drift in real time, and the resulting images were sharper than anything that had been possible before.

The combination of direct detection, motion correction, and the rapidly improving software for single-particle analysis caused a step-change in achievable resolutions. Almost overnight, structures that had been stuck at 8 to 10 ångström started coming in at 3 to 4 ångström. Targets that had been resistant for years suddenly yielded atomic-resolution structures. The community had a name for this: **the resolution revolution**.

\[Pause.\]

I want you to feel the suddenness of this. In 2012, single-particle cryo-EM was a respected but niche technique, mostly stuck above 4 ångström, and most labs were still doing crystallography. In 2014, a wave of papers appeared with structures of complicated targets — the TRPV1 ion channel, the mitochondrial ribosome, the gamma-secretase complex — at 3 to 4 ångström, in some cases on samples that had defeated crystallographers for a decade. The cover of the journal Nature in 2015 ran a special feature on the resolution revolution. By 2016, cryo-EM was producing more new atomic-resolution structures than X-ray crystallography for large complexes. By the end of the decade, it was producing more structures, period.

The resolution revolution is, in a sentence, **direct electron detectors in 2013 changed everything — suddenly you could record movies of electron exposures, correct for sample drift, get atomic resolution.** And the field, which had been promising atomic resolution for thirty years, finally delivered.

\[Pause.\]

I also want to acknowledge the people. Sjors Scheres at the MRC LMB, who developed the RELION software that implemented Bayesian image processing in a form that made the new detectors fully exploitable. Yifan Cheng at UCSF, who pushed the TRPV1 structure through and showed what was possible on a real target. Maofu Liao, Cheng's collaborator. The Gatan and FEI engineers who built the detectors. The whole community of methods developers, sample preparers, microscopists, and software writers who took the technology from "promising" to "transformative" in about three years. The Nobel went to Dubochet, Frank, and Henderson — but the resolution revolution was a much larger collective achievement, layered on top of the foundational work.

OK. We now have all the historical pieces. Let me put together the modern cryo-EM workflow, end to end, so you can see exactly how a structure gets made in 2026.

---

## SEGMENT 8 — The modern workflow — from cells to atomic model

Let me walk you through the modern cryo-EM workflow, step by step. This is the recipe a structural biology lab follows in 2026 to determine the atomic structure of a protein. I'll go in order, and we'll spend the rest of this segment on the early stages, then continue into specific instruments and software in later segments.

**Step one: produce and purify the protein.** This part is not unique to cryo-EM — every structural biology method needs purified protein — but it matters because cryo-EM has its own quirks. You typically express the protein in a host organism, often a mammalian cell line for membrane proteins or a bacterium for simpler targets. You include various purification tags. You extract the protein, often in detergent if it's a membrane protein, run it through chromatography columns — affinity, size exclusion — until you have a sample that is biochemically clean and conformationally homogeneous. You need micrograms to milligrams of pure protein, far less than crystallography typically requires.

How much you need matters. Crystallography historically needed tens of milligrams of pure protein. Cryo-EM, because each grid only uses about three microliters of solution at concentrations around one milligram per milliliter, needs maybe a hundred micrograms — sometimes less. This is a huge advantage for targets where the protein is hard to produce in quantity.

\[Pause.\]

**Step two: prepare the grid.** This is the famous sample-prep step, and it's still considered the hardest part of cryo-EM. The grid itself is a tiny metal mesh, typically 3 millimeters across, made of copper or gold, coated with a thin film of carbon perforated with tiny holes. The holes are where you want your protein to end up — suspended in a thin film of water, the carbon around the holes serves only as a support.

You pipette three microliters of your protein solution onto the grid. You blot the grid with filter paper for a few seconds to wick away most of the liquid, leaving only a very thin film — ideally one or two protein-molecule diameters thick — spanning the holes. Then immediately, within milliseconds, you plunge the grid into liquid ethane. This is Dubochet's trick, mechanized — modern plunge freezers like the Vitrobot or the Chameleon do this automatically, with controlled humidity and blot times.

If everything goes right, you have a grid where, in the holes, there's a thin layer of vitreous ice with your protein particles suspended in it, in random orientations, separated from each other, not denatured, not clumped at the surface. If something goes wrong — and it usually does, the first many times — the ice is too thick, or too thin, or has crystallized rather than vitrified, or the proteins are stuck at the air-water interface in non-native orientations, or they've aggregated, or they've broken apart. You screen many grids, in many conditions, until you find ones that look right.

\[Pause.\]

**Step three: screen and image.** You take your grid to an electron microscope. Often the first step is a screening microscope — typically a smaller 100 or 200 kV instrument — to assess grid quality before committing to the high-end machine. You look for grids where the ice thickness is right, the particles are well distributed, and the orientations look diverse.

Then, on a good grid, you collect data on a high-end microscope — the 300 kV instruments we'll discuss in the next segment. You're going to collect tens of thousands of micrograph movies, each one capturing maybe a hundred to a few hundred particles in random orientations. A modern data collection might take a day or two, generate terabytes of data, and yield millions of individual particle images by the time you're done.

\[Pause.\]

**Step four: process the data.** This is where Frank's algorithms — modernized, accelerated, and embedded in software packages like RELION, cryoSPARC, and EMAN — do their thing. You motion-correct the movies. You estimate the contrast transfer function for each image, which corrects for distortions introduced by the microscope optics. You pick particles from each micrograph, typically using neural networks trained to recognize protein particles. You classify the particles, separating out junk and identifying particles that might be in different conformations. You do an initial 3D reconstruction, often starting from a low-resolution model. You iteratively refine the orientations and the 3D map until the resolution stops improving.

This processing pipeline used to take months. With modern software and GPU acceleration, it can take days or even hours for many targets.

\[Pause.\]

**Step five: build the atomic model.** Once you have a 3D density map at high enough resolution, you build an atomic model into the density. Historically this was done by hand in software like Coot. Increasingly, it's done with the aid of AlphaFold — you predict the protein structure computationally, then fit and refine that predicted model into your experimental density. The combination is faster and more accurate than either alone, and we'll come back to that in the AlphaFold synergy segment.

**Step six: validate and deposit.** You run various validation tools to check that your model is consistent with the data and physically reasonable. You deposit the structure in the Protein Data Bank, and the underlying density map in the Electron Microscopy Data Bank, and ideally the raw images in EMPIAR. The structure becomes part of the public scientific record.

That's the workflow, end to end. Purify, vitrify, image, average, reconstruct, model, deposit. Each step has its art, each step has people who specialize in it, and modern cryo-EM facilities have separate teams for each. Now let's zoom in on the instrument that does most of the heavy lifting.

---

## SEGMENT 9 — The Krios — the Ferrari of structural biology

The dominant high-end cryo-EM instrument in 2026 is the **Titan Krios**, made by Thermo Fisher Scientific. (FEI made it first; Thermo Fisher acquired FEI in 2016.) The Krios is, in a sense, **the Ferrari of structural biology** — it's the workhorse 300 kV microscope, it costs five to seven million dollars per instrument plus another couple million for installation and infrastructure, it takes a hundred grids in an automated cassette and runs autonomously for days at a time, and it produces the high-resolution data that most of the modern atomic-resolution structures come from.

Let me say a few words about why 300 kV matters. The acceleration voltage of the microscope determines the wavelength of the electrons — higher voltage gives shorter wavelength gives, in principle, higher resolution. It also affects how the electrons interact with the sample — at 300 kV, electrons penetrate thicker ice better, have less inelastic scattering, and produce sharper images of larger complexes. There are 200 kV cryo-EMs as well — the Talos Arctica, the Glacios — which are cheaper and good for smaller targets or screening, but for the highest resolutions on challenging samples, you want 300 kV.

\[Pause.\]

A Krios is a substantial machine. It's the size of a small refrigerator if you ignore the supporting infrastructure, but with the infrastructure — the vibration isolation pad, the temperature-controlled room, the helium and nitrogen supplies, the computer cluster for data acquisition and processing — it occupies the better part of a basement room. The microscope sits on a heavy concrete slab, isolated from building vibrations. The room temperature is held to within a tenth of a degree. The microscope is shielded from stray electromagnetic fields. All of this matters because at atomic resolution, even tiny mechanical or thermal perturbations smear out your image.

Inside the Krios, the electron source — typically a field emission gun — produces a tight, coherent electron beam. The beam is shaped and focused by a series of electromagnetic lenses, each one analogous to a glass lens in an optical microscope but operating on charged particles. The beam passes through your vitrified specimen, which sits in a cold stage at liquid nitrogen temperature inside the column. The transmitted electrons are imaged by lower lenses onto the detector. The detector — a Falcon 4i, or a K3, or a K4 — records the image as a movie. The microscope is computer-controlled and can move autonomously between grid squares, autofocus, and collect thousands of micrograph movies per day.

\[Pause.\]

A high-end cryo-EM facility — there are perhaps a few hundred Krios installations worldwide as of 2026 — runs the instrument essentially around the clock, with shifts of operators. Time on the Krios is precious; users compete for it, and a typical dataset might take a day or two of beam time. The economics are interesting: the instrument costs around six million dollars, plus maintenance of perhaps half a million per year, plus the salaries of trained operators. To justify that, you need to be producing a lot of structures. National and international cryo-EM facilities — at the MRC LMB, at the NIH, at EMBL, at the Diamond Light Source, at many large research universities — operate as shared resources, with users from around the world bringing samples for short data-collection sessions.

There are competitors and alternatives in the 300 kV space — the JEOL CRYO ARM is the main one — but Thermo Fisher's Krios dominates the market. The 200 kV space is more crowded; many labs that can't afford a full Krios run a Glacios or an Arctica as their workhorse, with periodic visits to a Krios facility for the highest-resolution work.

\[Pause.\]

The detectors deserve their own mention, because they've been part of the resolution revolution from the start. The Falcon 4i is Thermo Fisher's current direct electron detector, integrated tightly with the Krios. Gatan's K3 was for years the leading independent detector and remains widely used; Gatan's K4 is the latest generation. These detectors record around forty to fifty frames per second, count individual electrons, and have sensitive areas of a few thousand pixels on a side. The data rates are huge — modern Krios facilities generate terabytes per day, sometimes per hour. The whole computational infrastructure of a cryo-EM facility — storage, network, processing cluster — has to be built around these data rates.

OK. We've covered the historical breakthroughs, the workflow, and the main instrument. We're about an hour in. Let's take a break.

\[BREAK\]

---

## SEGMENT 10 — RELION, cryoSPARC, EMAN — the software ecosystem

Welcome back. Let's pick up with software. Modern cryo-EM, as I've emphasized, is as much a computational discipline as it is an experimental one. Without sophisticated image-processing software, the raw micrographs from a Krios are just terabytes of noise. The software is where the actual structure determination happens, and the software ecosystem in 2026 is dominated by three main packages, plus an array of smaller specialized tools.

**RELION**, which stands for REgularised LIkelihood OptimisatioN, is the venerable open-source workhorse of the field. It was developed by Sjors Scheres at the MRC LMB starting around 2010, written in C++ with strong GPU support. The intellectual core of RELION is a Bayesian maximum-likelihood framework for image processing — instead of treating the image alignment as a hard decision (this particle goes in this orientation), it treats it as a probability distribution (this particle is probably here, with some uncertainty). That probabilistic treatment was a major advance and turned out to play very well with the noisy data from cryo-EM. RELION is free, open source, runs on Linux clusters, and is used by a huge fraction of academic cryo-EM labs.

**cryoSPARC**, developed by Ali Punjani and David Fleet at the University of Toronto and now commercialized by Structura Biotechnology, is the other dominant package. cryoSPARC is faster than RELION for many workflows, has a friendlier web-based user interface, and incorporates a number of algorithmic innovations — non-uniform refinement, 3D variability analysis, and others. It's free for academic use but commercial labs pay for licenses. The user experience is much closer to "click and wait" than RELION's command-line tradition, which has made it popular in pharma settings.

**EMAN**, developed by Steve Ludtke at Baylor, is the oldest of the three, with roots going back to the 1990s. EMAN is open source, very flexible, and still widely used for specific tasks, though it has been somewhat eclipsed in pure throughput by the newer packages.

\[Pause.\]

There are dozens of other tools in the ecosystem. **CTFFIND** and **CTFFIND4** for estimating contrast transfer function. **MotionCor2** for motion correction. **Topaz** and **crYOLO** for neural-network particle picking. **Phenix** and **Coot** for atomic model building and refinement. **ChimeraX** for visualization. **Scipion** as an integration framework that lets you mix tools from different packages. **Warp** for streamlined preprocessing. The pipeline you assemble in practice is typically a mix — pick particles with Topaz, align with cryoSPARC, refine with RELION, build with Phenix and Coot.

This whole ecosystem is in a state of rapid evolution. Machine-learning methods are being integrated everywhere — for particle picking, for denoising, for separating out conformational heterogeneity, for fitting atomic models. The line between traditional algorithmic methods and learned methods is blurring. A modern cryo-EM analysis pipeline in 2026 has multiple deep learning components woven through it, often without the user being especially aware of which step is using what method.

\[Pause.\]

One specific recent development worth flagging is the use of deep learning for **3D heterogeneity analysis**. A real protein sample is rarely a single rigid conformation — it's a population of slightly different states, breathing and flexing. Older methods could classify particles into a handful of discrete classes; modern methods, like cryoSPARC's 3D variability analysis or RELION's Multi-body refinement, can produce continuous distributions over conformations, essentially building a movie of the protein's motion from the static images. That's a startling capability — you can take frozen snapshots of millions of identical molecules and reconstruct, computationally, how the molecule moves. The static technique is starting to capture dynamics.

OK. So we have hardware, software, and workflow. Let me now talk about what kinds of structures cryo-EM actually delivers, in terms of resolution and target classes.

---

## SEGMENT 11 — Achievable resolution and the structure landscape

Let's talk numbers. What resolution does cryo-EM actually achieve, in practice, in 2026?

For a well-behaved target — a stable, rigid complex, well-purified, with good grids — routine resolutions are in the **2 to 4 ångström** range. That's atomic resolution by any reasonable definition. You can build a complete atomic model into the density, identify individual side chains, place hydrogen bond donors and acceptors, identify bound ligands and water molecules. This is the resolution at which most published cryo-EM structures land.

For the very best samples, with the very best instruments and analysis, the field has now reached **sub-2 ångström, and even sub-1.5 ångström**. The current record for single-particle cryo-EM is around 1.2 ångström, achieved on apoferritin, which is a particularly cooperative test sample — small, highly symmetric, biochemically robust. At that resolution, you can see individual hydrogen atoms, you can see covalent bond angles, you can see things that historically you could only get from the very best X-ray crystallography. The technique has fully reached parity with crystallography for stable, well-behaved samples, and exceeded it for many of the harder ones.

\[Pause.\]

For harder targets — flexible, conformationally heterogeneous, partly disordered — resolutions are typically in the **3 to 5 ångström** range, sometimes worse for the most challenging parts of the molecule. Even at 4 ångström, you can usually build a reasonable atomic model with the help of computational predictions, identify the major fold and the binding pockets, and get the information you need for drug design or mechanistic understanding.

The remaining hard problem is **small proteins**. Single-particle cryo-EM has a lower size limit, roughly around 50 kilodaltons (very roughly half a million atoms), because below that, the particles are too small to align reliably against the noise — you can't tell which orientation each one is in. That limit has been creeping down with better detectors and better algorithms, and tricks like attaching small proteins to larger scaffolds can extend it further. But for proteins below 30 kilodaltons, cryo-EM is still hard, and NMR or crystallography remain better options.

\[Pause.\]

Now let me say something about the **structure landscape** — which kinds of biological molecules cryo-EM has really transformed.

**Membrane proteins.** This is, in some ways, the headline category. Membrane proteins — receptors, channels, transporters — make up about a third of all proteins in your genome and account for roughly 70 percent of pharmaceutical drug targets. For most of the twentieth century, membrane protein crystallography was a brutal subfield where individual labs would spend years on a single structure. Cryo-EM, because it doesn't require crystals, has been transformative. Membrane proteins can be reconstituted into lipid environments — nanodiscs, liposomes, peptidiscs — that preserve their native conformations, and then imaged directly. Structures of GPCRs (G-protein-coupled receptors) in complex with their signaling partners, structures of ion channels in various functional states, structures of transporters caught mid-cycle — these are now routine cryo-EM targets, and the pace of new structures has been remarkable.

**Ribosomes, viruses, polymerases, spliceosomes.** The huge complexes that crystallography struggled with for decades are exactly the targets cryo-EM excels at. The ribosome — about 2.5 megadaltons — is the historical poster child of cryo-EM, going back to Frank's early work. Modern structures show ribosomes in dozens of functional states, with substrates and inhibitors bound, at atomic resolution. The same is true for the spliceosome, the proteasome, the photosynthetic reaction centers, the respiratory chain supercomplexes. Cryo-EM is now the default technique for any large molecular machine.

**Viruses.** Icosahedral viruses, with their high symmetry, were among the earliest cryo-EM targets and remain a major application. SARS-CoV-2 was structurally characterized in unprecedented detail during the pandemic largely by cryo-EM — spike protein structures, polymerase complexes, replication-transcription machinery — and that detailed structural understanding directly fed into vaccine and drug design.

**Large signaling complexes.** Many cellular signaling events involve transient assemblies of multiple proteins that form, signal, and dissolve. These were nearly impossible to crystallize. Cryo-EM, because it can image complexes in solution at low concentrations, has cracked many of them open. The inflammasome. The MAC. The DNA damage response complexes. The mTOR signaling machinery. All of these are recent cryo-EM triumphs.

\[Pause.\]

What cryo-EM is still **not great at** is small, simple proteins that crystallize easily — the bread and butter of classical crystallography. For those targets, crystallography is still faster, cheaper, and gives equivalent or better resolution. The two techniques have ended up specializing. Cryo-EM for the big, hard, floppy, membrane-embedded targets. Crystallography for the small, stable, soluble targets and for fragment-based drug discovery, where you need to screen hundreds of soaks against the same crystal. NMR for dynamics and very small proteins. Each technique now has its niche, and modern structural biology uses all three, often on the same target, in concert.

---

## SEGMENT 12 — Cryo-EM for membrane proteins and drug discovery

I want to dwell on the membrane-protein story for a moment, because of how completely cryo-EM has transformed it, and because of how directly that transformation has fed into pharmaceutical research.

A membrane protein lives embedded in the lipid bilayer of a cell. It's amphipathic — parts of it are hydrophilic and face the watery cytoplasm or extracellular space, parts are hydrophobic and face the greasy interior of the membrane. To get a membrane protein out of the cell for structural work, you historically had to dissolve the membrane with detergents. The detergent molecules form a sort of artificial micelle around the hydrophobic portion of the protein, keeping it soluble in water. The protein, in detergent, is no longer in its native lipid environment, and many membrane proteins are partially or wholly destabilized by detergents. They unfold. They lose function. They refuse to crystallize.

Cryo-EM has not eliminated the membrane protein problem, but it has made it much more tractable in several ways.

\[Pause.\]

First, **nanodiscs**. A nanodisc is a small patch of lipid bilayer, maybe 10 nanometers across, held together by a protein belt called MSP (membrane scaffold protein). You can take a purified membrane protein in detergent, mix it with lipid and MSP, and reconstitute the protein into a nanodisc — a small, native-like lipid environment that the protein recognizes as essentially home. Nanodiscs are too small to crystallize well, but they're perfect cryo-EM targets — the right size for single-particle analysis, well-defined in shape, native-mimicking. A large fraction of recent membrane-protein cryo-EM structures are done in nanodiscs.

Second, **peptidiscs and SMA copolymers**. These are alternative ways to keep membrane proteins in a native-like environment without detergent — peptidiscs use synthetic peptides, SMA (styrene-maleic acid) copolymers extract membrane patches directly from the cell. The variety of options means there's usually some way to stabilize a given membrane protein for cryo-EM.

Third, **the lack of crystallization requirement** itself. Even in detergent, many membrane proteins that won't crystallize can be imaged successfully by cryo-EM. The threshold for trying a cryo-EM experiment is much lower than for crystallography.

\[Pause.\]

The pharmaceutical impact has been substantial. **Approximately 60 to 70 percent of marketed drugs target membrane proteins** — GPCRs, kinases, ion channels, transporters. For most of the twentieth century, drug discovery against these targets was done with very limited structural information, because the structures simply weren't available. Drugs were designed largely by trial and error, with crystallography providing occasional snapshots after the fact. Today, with cryo-EM, large pharma companies routinely solve structures of their membrane-protein targets in complex with candidate drugs, and use those structures to guide chemical optimization. The pharma drug discovery pipeline has been restructured around cryo-EM.

The GPCR story is particularly striking. G-protein-coupled receptors are the largest family of drug targets — about 800 of them in the human genome, and around a third of all approved drugs target one. For decades, GPCR structural biology was nearly impossible — these are seven-transmembrane-helix proteins, highly dynamic, with extensive conformational changes during signaling. Brian Kobilka eventually got a Nobel Prize in 2012 for cracking the GPCR crystallography problem, after a heroic decade of work. But the field has, in the years since, largely transitioned to cryo-EM, which can capture GPCRs in complex with their G-proteins and arrestins — the full signaling assemblies, in physiological states, with atomic detail. The pace of new GPCR-complex structures from cryo-EM has been astonishing.

\[Pause.\]

This is the kind of impact that won't show up in any single paper but is everywhere in the field. When a pharmacologist in 2026 wants to understand how a candidate drug binds its target, the default expectation is: get the cryo-EM structure of the drug-protein complex. That structure will be available, probably within months, and the medicinal chemistry team will design the next round of molecules based on it. That's a sentence that would have seemed delusional in 2010. Today it's just how the work gets done.

---

## SEGMENT 13 — The giant complexes — ribosomes, spliceosomes, viruses, polymerases

Let me come back to the other big category cryo-EM has transformed — the giant complexes that crystallography struggled with. I want to walk through a few of them concretely, because the story of each one tells you something about why cryo-EM was the right tool.

**The ribosome.** The ribosome is the molecular machine that translates messenger RNA into protein. It's enormous — about 2.5 megadaltons, with two subunits, dozens of proteins, and several large RNA molecules. The bacterial ribosome was eventually crystallized, in a heroic effort that won Ada Yonath, Tom Steitz, and Venki Ramakrishnan the 2009 Nobel Prize in Chemistry. The crystal structures were transformative, but they showed the ribosome in only a few discrete states.

Cryo-EM, with single-particle classification, can show the ribosome in dozens of conformational states — the translocation cycle, the binding of transfer RNAs in different sites, the elongation factors coming on and off, the nascent chain emerging from the tunnel. Modern cryo-EM ribosome structures essentially show you the ribosome as a movie of mid-action snapshots. You can see how antibiotics bind, how nascent chains are folded, how the mitochondrial ribosome differs from the cytoplasmic one. The ribosome has become a paradigmatic case for cryo-EM's ability to capture functional dynamics.

\[Pause.\]

**The spliceosome.** The spliceosome edits messenger RNAs — it cuts introns out and joins exons together — and it's a complex of enormous variety. It exists in many different compositional states as it cycles through its catalytic mechanism, with different subsets of proteins bound at different stages. Different chemical species enter, perform their step, and leave. Crystallography never had a chance — the compositional heterogeneity alone would have defeated any crystallization screen.

Cryo-EM has, over the past decade, produced a series of structures of the spliceosome in different functional states, by different groups, that together amount to a movie of the splicing cycle. Kiyoshi Nagai's group at the MRC LMB and Yigong Shi's group at Tsinghua are particularly associated with this work. The structures are technically demanding, but the result is a level of mechanistic understanding of RNA processing that simply wasn't possible before.

\[Pause.\]

**Viruses.** Icosahedral viruses, with their high symmetry, have been classical cryo-EM targets for decades. The symmetry helps with reconstruction — you have effectively many more particles than you have actual virus particles, because each particle has 60-fold or higher symmetry. For asymmetric viruses, like the influenza virus or the herpes virus, cryo-EM has been the dominant technique.

The pandemic accelerated all of this. SARS-CoV-2 was structurally characterized in unprecedented depth in 2020 — the spike protein in multiple conformations, in complex with antibodies, in complex with the ACE2 receptor; the polymerase complex with inhibitors; the M-pro protease with substrates. Most of this work was cryo-EM. The structural information fed directly into vaccine design — the prefusion-stabilized spike that's at the heart of the mRNA vaccines was a structural-biology design, based on a cryo-EM-derived understanding of how the spike folds and refolds.

\[Pause.\]

**RNA and DNA polymerases.** The enzymes that copy genetic material are large, multi-subunit, often with associated factors that change function. The bacterial RNA polymerase, the eukaryotic Pol I, Pol II, Pol III, the various accessory transcription factors — these are now routinely cryo-EM targets. Cryo-EM has shown the polymerases in dozens of states — at initiation, during elongation, paused, with various regulatory proteins bound. The same is true for DNA polymerases and the various complexes around DNA replication.

**Membrane signaling assemblies.** I mentioned this in the membrane-protein segment, but it's worth emphasizing: many cellular signaling complexes are formed only transiently, at the membrane, in response to a signal. They include a transmembrane component, a peripheral component, and various adapters. Cryo-EM has cracked many of these — the toll-like receptor signaling complexes, the death-inducing signaling complex, the inflammasome assemblies — at atomic detail.

\[Pause.\]

The pattern in all of these stories is the same. Crystallography either couldn't get the structure at all, or got a structure of just one state, or required heroic decade-long efforts. Cryo-EM, especially after the resolution revolution, can produce the structure routinely, often in multiple functional states, in less than a year of work for an experienced lab. The shift in what's tractable has been enormous.

---

## SEGMENT 14 — AlphaFold and cryo-EM — the experimental and computational pair

Now I want to talk about how cryo-EM relates to AlphaFold, because the relationship is interesting and increasingly inseparable.

AlphaFold, as you may know — and as you definitely know if you took the previous lecture in this series — is the deep learning system from DeepMind that predicts protein structures from sequence with near-experimental accuracy. AlphaFold2 was released in 2021, AlphaFold3 in 2024, and the impact has been a tectonic shift in structural biology. Predicted structures for essentially every protein in essentially every organism, freely available, at high accuracy. So you might reasonably ask: in a world with AlphaFold, do we still need cryo-EM?

The answer, emphatically, is yes. And not just "yes, for now" — yes, fundamentally and probably permanently. Let me explain why.

\[Pause.\]

First, AlphaFold predicts a model. It is a computational guess at what the structure looks like. For a well-folded, single-domain, well-represented protein, that guess is extremely good — often within an ångström of experimental, indistinguishable from a real structure. But it is still a guess. It has no direct experimental data behind it. AlphaFold does not know what conformation a particular instance of a protein is in. It does not know what is bound to it. It does not know how a mutation has perturbed it. It does not know whether the protein is in complex with another protein, or with a drug. For all of those questions — and for most of the questions a working structural biologist actually asks — you need experimental data.

Second, AlphaFold has well-known failure modes. It struggles with protein complexes (AlphaFold3 has improved on this, but it's still imperfect). It struggles with conformations not represented in its training data. It struggles with intrinsically disordered regions. It struggles with proteins that have multiple stable states. For all of these cases, experimental structure determination remains essential.

Third — and this is the part that's really powerful — **AlphaFold and cryo-EM are spectacular when used together**. Here's the workflow that's become standard in 2026.

\[Pause.\]

You have a target — a protein or complex you want the structure of. You run AlphaFold first. It gives you a predicted model. Even if the prediction isn't perfect, it gives you an extremely useful starting point — a hypothesis about the fold, the domain structure, the likely binding interfaces. You then do cryo-EM. You get an experimental density map. You take the AlphaFold model and fit it into the density. If the model is mostly right, the fitting is fast and the refinement gives you an atomic model of unprecedented accuracy — better than either alone. If the model is wrong in places, the density tells you where, and you correct it. If the density has features the model doesn't predict — a bound drug, a different conformation, a previously unknown subunit — the density forces you to update.

The combination is **AlphaFold gives you a model; cryo-EM gives you density; combine them, you get atomic-accurate structures faster than either alone.** Modern model-building tools — ModelAngelo, DeepTracer, ISOLDE — explicitly integrate AlphaFold predictions with experimental density to produce models that are both physically reasonable and consistent with the data. The structure determination pipeline has been rebuilt around this hybrid approach.

\[Pause.\]

There's a deeper philosophical point here that I want to make. Some people, when AlphaFold was released, predicted the death of experimental structural biology — "why would anyone do cryo-EM if AlphaFold gives you the answer for free?" That prediction was wrong. What actually happened is that the demand for experimental structures _increased_. Why? Because suddenly, you could see what AlphaFold's predictions looked like for every protein in the genome, and that revealed a vast landscape of interesting biology — protein complexes, conformational states, ligand-bound forms — that AlphaFold's predictions alone couldn't fully characterize. People want experimental confirmation. People want to see what the protein is actually doing, in complex with the drug they care about, in the conformation they're trying to stabilize. Cryo-EM became more, not less, valuable in the AlphaFold era.

The relationship is the same as the one in many fields where computation and experiment meet. Computation makes more experiments worth doing, not fewer. The two are deeply complementary, and the structural biologists who have adapted fastest are the ones who have learned to use both fluidly.

---

## SEGMENT 15 — Cryo-electron tomography — molecules in cellular context

So far, I've focused on **single-particle cryo-EM** — the technique where you purify your target molecule, freeze it in a thin film, image many copies in random orientations, and computationally reconstruct the 3D structure. That's the dominant flavor of cryo-EM. But there's another flavor, increasingly important, called **cryo-electron tomography**, or cryo-ET.

The difference is what you image. In single-particle cryo-EM, you image purified molecules in isolation. In cryo-ET, you image molecules in their native cellular context — inside cells, or inside thin slices of cells, where they're surrounded by all the other components of the cell. Different protein machines, lipid membranes, nucleic acids, organelles. Cryo-ET shows you the cell as it actually is, in three dimensions, at near-molecular resolution.

\[Pause.\]

The technique works like this. Instead of imaging a thin film of purified protein, you image a thin section of cell, vitrified by plunge freezing or by high-pressure freezing. The section has to be thin — typically 100 to 300 nanometers, much thicker than a single-particle grid — and getting it thin enough often requires **focused ion beam milling**, which uses a beam of ions to thin a slab of frozen cell to a useable thickness. Then you take the thinned section to the cryo-EM. Instead of taking many single images of randomly-oriented particles, you tilt the sample stage to a series of angles — typically 60 or so tilts, from minus 60 to plus 60 degrees — and take an image at each angle. The resulting **tilt series** can be computationally combined into a three-dimensional reconstruction of the imaged volume — a tomogram.

That's cryo-tomography. **Rotate the sample, take a tilt series, reconstruct a 3D volume of cellular context — see molecules in situ, not purified.**

\[Pause.\]

The resolution of a raw tomogram is typically not great — maybe 20 to 40 ångströms — because you can only dump so much electron dose over many tilts before destroying the sample. So at that level, you can see large structures — ribosomes as blobby spheroids, membranes as lines, microtubules as tubes — but you can't see atomic detail directly.

The trick that pushes cryo-ET into higher resolution is called **sub-tomogram averaging**. If your tomogram contains many copies of the same molecule — say, hundreds of ribosomes scattered through a cytoplasm — you can identify each one, extract a small sub-volume around it, and computationally align and average all the sub-volumes. This is basically the single-particle approach, but on particles you've already imaged inside cells. The averaging boosts the resolution, sometimes to atomic levels for abundant, well-defined targets.

The result is that you can see, say, the structure of a ribosome at near-atomic resolution _and_ know where each ribosome was in the cell, what it was associated with, whether it was free or bound to the endoplasmic reticulum, what its neighbors were doing. You get the structure plus the context. That's a kind of biological information that no other technique provides.

\[Pause.\]

Cryo-ET is harder than single-particle cryo-EM, lower throughput, more expensive in beam time, and the data analysis is more challenging. But it's growing rapidly. Modern cryo-ET work has produced atlases of bacterial cells, structures of cellular organelles like mitochondria and the Golgi apparatus, in-situ structures of the nuclear pore complex, and increasingly detailed views of neuronal synapses, viral infections, and other cellular processes that were inaccessible before.

The big frontier here is **in-cell structural biology** — using cryo-ET to determine the structures of all the molecular machines in a cell, in their native locations and conformations, ultimately at high resolution. That's a vision that has been articulated for decades and is now starting to become technically possible. It's one of the most exciting areas of modern structural biology.

---

## SEGMENT 16 — Open data — EMPIAR and EMDB

I want to spend a brief segment on the open-data culture of cryo-EM, because it's one of the field's quietly important features.

When you solve a cryo-EM structure, you deposit three things in public databases. First, the atomic model goes into the **Protein Data Bank (PDB)** — the same database that holds X-ray and NMR structures. Second, the 3D density map you reconstructed goes into the **Electron Microscopy Data Bank (EMDB)**. Third, increasingly, the raw image data — the actual micrograph movies before any processing — goes into a database called **EMPIAR**, the Electron Microscopy Public Image ARchive. All three are public, free, mandatory in essentially all journal policies, and integrated.

\[Pause.\]

That three-tier deposition is a big deal. The atomic model is what most users of structural data care about — they want to look at the protein, design a drug, study a binding site. The density map lets sophisticated users verify the model — they can see the experimental evidence directly and check whether a particular feature is well-supported. And the raw image data lets methods developers and skeptical scientists reprocess the data from scratch, with different software, to verify the reconstruction or improve on it.

This open-data culture has been crucial for the development of cryo-EM software. New algorithms — for particle picking, for classification, for refinement — are routinely benchmarked against EMPIAR datasets, which lets researchers compare methods on the same data and accelerates progress. The Sjors Scheres group's development of RELION, the Punjani group's development of cryoSPARC, and many smaller methods papers have all depended on the availability of public raw data to test their algorithms.

\[Pause.\]

The deposition culture also makes the field self-correcting in a way that some other branches of structural biology are not. A claimed structure can be re-examined by other groups. If someone publishes a structure that turns out to be misinterpreted, the underlying data is there for the community to check. There have been a few high-profile cases of cryo-EM structures being revised or retracted when independent reanalysis turned up errors. That's a sign of a healthy field, not a problem — the open-data culture catches mistakes and forces them to be addressed publicly.

For comparison, in some other areas of biology — particularly in pharma — proprietary structures are common and the data is not always shared. The structural biology field has been unusual in its commitment to open deposition, going back to the founding of the PDB in the 1970s, and cryo-EM has continued and expanded that tradition. The EMDB now holds tens of thousands of density maps; EMPIAR holds raw data for hundreds of datasets, often hundreds of terabytes per deposit. It's a globally shared scientific commons.

---

## SEGMENT 17 — Sample prep — still the dark art

For all the dazzling technology and software, the single hardest part of modern cryo-EM, and the most common reason a project fails, remains **sample preparation**. Getting a good vitrified grid is still the bottleneck. The Krios is a marvel of engineering, the software is increasingly automated, but making the actual grid is, as cryo-EM people will tell you with weary smiles, **still the dark art — knowing how to make grids that don't denature your protein at the air-water interface, that have the right ice thickness, that don't aggregate — it's craft, not just protocol.**

Let me unpack the specific problems.

\[Pause.\]

**The air-water interface.** When you blot a thin film of protein solution onto a grid, that film is bounded by air on both sides. The air-water interface is a very hostile environment for many proteins — there's a high surface tension, the interface concentrates hydrophobic species, and proteins frequently denature there or adsorb to the interface in non-native orientations. A common failure mode is that you image many particles, do all the processing, and discover that they are all in just one or two orientations because they all stuck to the air-water interface in a particular way. The 3D reconstruction is then poor because you don't have the orientation coverage to reconstruct the full structure. This is called **preferred orientation**, and it ruins many cryo-EM experiments.

The workarounds — surfactants, support layers like graphene oxide, specialized grid types, sample additives — are an active area of research, and none of them work universally. For each new target, you may have to spend weeks trying different approaches to find one that gives well-distributed orientations.

**Ice thickness.** The vitreous ice has to be thin enough that electrons pass through cleanly — for typical conditions, around 50 to 100 nanometers — but thick enough to fully contain your particles in random orientations. Too thin and the particles are squeezed into preferred orientations or excluded from the ice; too thick and the contrast is poor. The blotting and freezing steps determine ice thickness, and the parameters are sensitive — small changes in humidity, blot time, or blot force can completely change the result.

**Aggregation and denaturation.** Many proteins, particularly membrane proteins, are marginally stable. Concentrating them, blotting them, and shoving them through the air-water interface during grid preparation can denature them or cause them to clump. The sample on the grid may not look anything like the sample in the tube.

\[Pause.\]

**Particle distribution.** Even if your protein is well-behaved, you need particles spread evenly through the field of view, not clumped, not stuck to the carbon support, not all in one little patch. Achieving this requires the right concentration, the right buffer, the right grid treatment, and a bit of luck.

For all these reasons, screening grids — looking at them in the microscope, evaluating whether they're good enough for high-resolution data collection — is itself a major part of cryo-EM work. Many labs have a dedicated screening microscope. You spend hours, sometimes days, examining grids to find ones worth taking to the Krios for serious data collection. A good cryo-EM project might involve preparing fifty or a hundred grids to find one or two that are truly excellent.

This whole sample-prep dance is the unglamorous reality of modern cryo-EM. The Nobel Prizes go for the algorithms and the freezing trick; the day-to-day work is largely grid optimization. The methodological frontier — and we'll talk about this in the last segment — is largely about making sample prep more reproducible, more automated, and less dependent on individual craft skill.

---

## SEGMENT 18 — Frontiers — sub-2 ångström, in-cell, time-resolved, ML-driven

Let's talk about where cryo-EM is going. The field is still in the middle of a rapid evolution, and the next decade will see significant changes. Let me sketch the main frontiers.

**Higher resolution, routinely.** As I mentioned earlier, the current resolution record for single-particle cryo-EM is around 1.2 ångström, achieved on the test sample apoferritin. The frontier is to push **routine resolutions below 2 ångström** on real biological targets — not just the cooperative test cases. At sub-2 ångström, you start to see hydrogen atoms, you can resolve subtle ionization states, you can identify bound water molecules confidently. The implications for drug discovery are big, because subtle features of binding sites — water networks, side chain rotamer choices — start to be visible. The push to routine sub-2 ångström involves better detectors, better microscope alignment, better sample prep, and better algorithms. Progress has been steady, and the floor is dropping.

**In-cell structural biology.** I mentioned this with cryo-ET. The vision is to determine the structures of all the major molecular machines in a cell, in their native locations, ideally at near-atomic resolution. That's a multi-decade program, but the tools — focused ion beam milling for thinning, cryo-correlated light and electron microscopy for finding your target, sub-tomogram averaging for resolution — are all maturing. Atlases of bacterial cells at near-atomic resolution exist. Comparable atlases for human cells, organelle by organelle, are in progress. The endpoint is a kind of cellular anatomy at the molecular scale, with structures of every machine cataloged in context.

\[Pause.\]

**Time-resolved cryo-EM.** Most cryo-EM today gives you static snapshots — you freeze your sample, you image it, you reconstruct one or a few states. But many biological processes are dynamic — an enzyme cycles through reaction intermediates, a receptor changes shape on binding a ligand, a motor protein steps along its track. The frontier of time-resolved cryo-EM is to capture these dynamics by freezing samples at controlled time points after triggering a reaction. You mix the substrate and the enzyme, you freeze at 5 milliseconds, 50 milliseconds, 500 milliseconds, and you reconstruct the structure at each time point. Stitch them together and you have a structural movie of the reaction.

Time-resolved cryo-EM requires specialized hardware — fast mixing devices that can blot and freeze the sample within milliseconds of triggering the reaction. Several groups have built such devices, and the technique has produced compelling structural movies of ribosomes mid-translation, viruses mid-entry, and enzymes mid-catalysis. The throughput is currently modest — building each movie requires multiple datasets — but the technique is maturing.

\[Pause.\]

**Machine learning everywhere.** Deep learning is permeating every step of the cryo-EM pipeline. Particle picking, denoising, conformational classification, model building. The integration is increasing, the algorithms are getting better. I expect, over the next decade, that significant parts of the cryo-EM workflow that are currently manual or semi-automated will become fully automated, with neural networks handling the routine analysis and humans intervening only for the hard cases. The Sjors Scheres group's ModelAngelo tool, which uses deep learning to build atomic models directly from cryo-EM density, is a good example of where this is going.

**ML-driven sample preparation.** This is the newer and perhaps more transformative frontier — applying machine learning to the bottleneck of sample prep. The idea is that there are thousands of variables in grid preparation — buffer composition, blot time, blot force, humidity, grid type, sample concentration, additive presence — and humans typically optimize them one at a time, slowly. Machine learning could, in principle, learn from past grid screenings, predict optimal conditions for a new target, and rapidly converge on good grids without weeks of manual screening. Several groups are working on this, with active-learning systems that automatically image grids, classify them as good or bad, and update their predictions of what conditions to try next.

\[Pause.\]

**Cryo-EM at scale.** Modern cryo-EM is still a relatively boutique activity — a few hundred Krios installations worldwide, each producing a few structures per month. The frontier is to scale this dramatically — automated facilities producing hundreds of structures per day, robotic sample preparation, automated data collection, automated analysis. The pharmaceutical industry, which solves many structures per drug discovery program, has a particular interest in this scaling. Several pharma companies have built large internal cryo-EM operations with multiple Krios microscopes and integrated automation.

**Microscope hardware advances.** Beyond the existing Krios platform, several new instruments are in development — cold field emission guns for higher beam coherence, energy filters for cleaner images, phase plates that can boost contrast for small particles, monochromators for tighter electron energy spreads. Each of these will incrementally improve what's achievable. The big questions are about which incremental improvements will combine to give another step-change like the 2013 resolution revolution.

\[Pause.\]

OK. We've covered a lot of ground. Let me close.

Cryo-electron microscopy is one of the great success stories of modern structural biology. A technique that was dismissed as blobology in the 1990s is now the dominant method for solving new protein structures, including the giant complexes and membrane proteins that crystallography could never reach. The 2017 Nobel Prize recognized Dubochet, Frank, and Henderson — the three pillars of vitrification, single-particle averaging, and atomic-resolution proof — but the modern technique is the work of thousands of methods developers, software writers, microscopists, and sample preparers, layered on top of those foundations. The resolution revolution of 2013, driven by direct electron detectors, transformed the field from "occasionally atomic" to "routinely atomic." The combination with AlphaFold and other computational tools has made structure determination faster and more accurate than ever before.

If you're going into structural biology, into drug discovery, into protein engineering, into mechanistic biochemistry — cryo-EM is the technique you will use. Most of the structures you read about in papers from 2020 onward are cryo-EM structures. Most of the structures that will be solved in the next decade will be cryo-EM structures. The technique is mature, the infrastructure is established, the community is large and welcoming, and the frontiers are exciting.

\[Pause.\]

The four things I asked you to walk out of here being able to do: explain what cryo-EM is and why it dominates now; describe the three Nobel-winning breakthroughs; walk through the modern workflow including the role of direct detectors; place cryo-EM in the larger ecosystem with AlphaFold and other techniques. If those four are in your head, you've got the structure of modern structural biology in your head. Everything else is detail.

We have a few minutes. Let's take questions.

---

## APPENDIX

**Key terms.**

- **Cryo-EM (cryo-electron microscopy)**: Imaging biological samples that have been flash-frozen in vitreous ice, using a transmission electron microscope. The dominant modern method for protein structure determination.
- **Vitrification**: Flash-freezing aqueous samples so quickly (faster than ~100,000 °C/second) that water forms an amorphous glass rather than crystalline ice. Dubochet's contribution.
- **Vitreous ice**: Amorphous, non-crystalline ice with the molecular arrangement of liquid water frozen in place. The medium in which cryo-EM samples sit.
- **Single-particle analysis**: The dominant cryo-EM workflow — image many individual molecules in random orientations, computationally align and average them into a 3D reconstruction. Frank's contribution.
- **Cryo-electron tomography (cryo-ET)**: A complementary cryo-EM technique where the sample stage is tilted to collect a series of images at different angles, then reconstructed into a 3D volume. Used for cellular context imaging.
- **Sub-tomogram averaging**: Extracting many copies of the same molecule from cryo-tomograms and averaging them to boost resolution. Bridges the resolution gap between single-particle and tomography.
- **Direct electron detector**: A CMOS sensor that detects incoming electrons directly without an intermediate phosphor screen. The technology that drove the 2013 resolution revolution. Examples: Falcon 4i, K3, K4.
- **Motion correction**: Computational alignment of the frames in a cryo-EM movie to correct for beam-induced sample motion. Made possible by direct detectors.
- **Resolution revolution**: The rapid improvement in cryo-EM resolution starting around 2013, driven primarily by direct electron detectors plus better software, that took the technique from ~8 Å to ~3 Å for routine targets.
- **CTF (contrast transfer function)**: A mathematical description of how the microscope optics distort the image. Must be estimated and corrected per micrograph.
- **GDT_TS, FSC**: Resolution and accuracy metrics. FSC (Fourier Shell Correlation) is the standard cryo-EM resolution metric.
- **Atomic model**: A list of atomic coordinates and identities (X, Y, Z, type) that represents the protein structure. Built into the experimental density map.

**Key people (the 2017 Nobel and beyond).**

- **Jacques Dubochet**: Swiss biophysicist. Developed vitrification by plunge freezing in liquid ethane. 2017 Nobel.
- **Joachim Frank**: German-American structural biologist. Developed single-particle averaging algorithms, the SPIDER software, and applied them to ribosomes. 2017 Nobel.
- **Richard Henderson**: Scottish structural biologist at MRC LMB. Solved bacteriorhodopsin at atomic resolution by electron crystallography, proving high-resolution EM was possible. 2017 Nobel.
- **Sjors Scheres**: MRC LMB. Developed RELION, the Bayesian image processing software that exploited the direct detector revolution.
- **Yifan Cheng**: UCSF. Early demonstrations of post-revolution atomic-resolution cryo-EM, including TRPV1.
- **Ali Punjani, David Fleet**: Toronto. Developed cryoSPARC.
- **Brian Kobilka**: 2012 Nobel for GPCR crystallography. His targets now largely solved by cryo-EM.
- **Max Perutz, John Kendrew**: 1962 Nobel for the first protein crystal structures (hemoglobin, myoglobin).
- **Christian Anfinsen**: 1972 Nobel for showing protein folding is determined by sequence — a foundational insight for all structural biology.
- **Kurt Wüthrich**: 2002 Nobel for protein NMR.
- **Ada Yonath, Tom Steitz, Venki Ramakrishnan**: 2009 Nobel for ribosome crystal structures.

**Software ecosystem.**

- **RELION**: Open-source Bayesian image processing. Workhorse of academic cryo-EM.
- **cryoSPARC**: Commercial (free for academics), fast, web-based UI. Popular in pharma.
- **EMAN, EMAN2**: Older flexible framework, still used for specific tasks.
- **MotionCor2**: Standard motion correction.
- **CTFFIND4, gCTF**: CTF estimation.
- **Topaz, crYOLO**: Neural-network particle picking.
- **Phenix, Coot, ISOLDE**: Atomic model building and refinement.
- **ChimeraX**: Visualization.
- **ModelAngelo, DeepTracer**: Deep learning model building from density.
- **Warp**: Streamlined preprocessing pipeline.
- **Scipion**: Integration framework.

**Instruments.**

- **Titan Krios (Thermo Fisher)**: The dominant 300 kV cryo-EM instrument. ~$5–7M plus infrastructure.
- **Talos Arctica, Glacios (Thermo Fisher)**: 200 kV workhorses, cheaper, used for screening and many real targets.
- **CRYO ARM (JEOL)**: Main competitor to the Krios at 300 kV.
- **Vitrobot, Chameleon, Spotiton**: Automated plunge-freezing devices for grid preparation.
- **Aquilos, Hydra (FIB-SEM)**: Focused ion beam instruments for milling thin sections from cells.

**Databases.**

- **PDB (Protein Data Bank)**: Atomic models. Established 1971. Now ~250,000 entries.
- **EMDB (Electron Microscopy Data Bank)**: 3D density maps from cryo-EM. Tens of thousands of entries.
- **EMPIAR**: Raw cryo-EM image data. Hundreds of datasets, hundreds of terabytes.
- **AlphaFold DB**: Predicted structures for ~200 million proteins. Complements experimental databases.

**Typical resolutions.**

- Routine modern cryo-EM: **2–4 ångström** for good samples.
- Best cases: **<1.5 ångström** for cooperative samples (apoferritin record ~1.2 Å).
- Challenging samples (heterogeneous, flexible, very large): **3–5 ångström** in best regions, worse elsewhere.
- Lower size limit: roughly **50 kDa** for single-particle without scaffolding tricks.
- Cryo-tomography raw: **20–40 Å**.
- Sub-tomogram averaging: down to **~3 Å** for abundant in-cell targets.

**Workflow steps (summary).**

1. Express and purify protein (micrograms to milligrams).
2. Prepare grid: pipette, blot, plunge-freeze in liquid ethane.
3. Screen grids on a screening microscope.
4. Collect data on a Krios — tens of thousands of movies, terabytes of data.
5. Motion-correct, CTF-estimate, particle-pick.
6. Classify particles, run initial 3D reconstruction.
7. Refine orientations and 3D map iteratively.
8. Build atomic model into density (often AlphaFold-aided).
9. Validate.
10. Deposit in PDB / EMDB / EMPIAR.

**Recommended reading.**

- Cheng, Y. (2018) "Single-particle cryo-EM — How did it get here and where will it go?" _Science_.
- Frank, J. (2017) Nobel Lecture.
- Henderson, R. (2017) Nobel Lecture.
- Dubochet, J. (2017) Nobel Lecture.
- Kühlbrandt, W. (2014) "The Resolution Revolution." _Science_.
- Nogales, E. and Scheres, S.H.W. (2015) "Cryo-EM: A Unique Tool for the Visualization of Macromolecular Complexity." _Molecular Cell_.

**Closing note.**

If you walk away from this lecture remembering one image, let it be the plunge into liquid ethane. A drop of protein, suspended in a thin watery film on a fine metal grid, plummeting into a tiny pool of liquid at minus 180 degrees Celsius. In milliseconds, the water cools faster than its own molecules can rearrange. There's no time to form ice crystals. The water becomes a glass. The protein, with its hydration shell intact, is frozen in mid-motion, in its native state, ready to be photographed by a beam of electrons. That moment — frozen as glass, immortalized for the microscope — is the moment that made all the rest possible. Dubochet's trick is the spell that opens the door. Everything else is what we do once we're through.

\[End of lecture.\]




