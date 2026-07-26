/* ==========================================================================
   PIXEL STUDY — Science and Technology Part II (Std X, Maharashtra Board)
   Detailed chapter revision content, extracted & summarised from the
   Balbharati textbook. Diagrams are cropped directly from the textbook.
   This file is purely additive data — it does not touch existing app logic.

   Chapter numbering here matches the OFFICIAL textbook table of contents
   (10 chapters). Life Processes is correctly split into Part 1 & Part 2,
   and "Towards Green Energy" (previously missing from the app) is included
   as chapter 5, in its correct position.
   ========================================================================== */

window.SCI2_LESSONS = {

// ============================================================ CHAPTER 1 ===
1: {
  title: "Heredity and Evolution",
  intro: "This chapter covers how characteristics pass from parents to offspring (heredity), the molecular basis of inheritance (DNA, genes, mutation), and the evidence and mechanisms behind the evolution of species over time.",
  objectives: [
    "Explain Mendel's laws of inheritance with the monohybrid cross.",
    "Describe how sex is determined in humans.",
    "State the evidences of evolution: morphological, vestigial organs, and fossils.",
    "Distinguish Darwinism and Lamarckism as theories of evolution.",
  ],
  concepts: [
    { heading: "Mendel's laws", text: "Gregor Mendel's pea-plant experiments gave two laws: the Law of Dominance (in a hybrid, one allele masks the other) and the Law of Segregation (the two alleles of a gene separate during gamete formation, so each gamete carries only one)." },
    { heading: "Sex determination in humans", text: "Humans have 23 pairs of chromosomes; the 23rd pair decides sex. Females are XX, males are XY. Since the mother always contributes an X, it is the father's sperm (carrying X or Y) that determines the sex of the child." },
    { heading: "Mutation", text: "A sudden, heritable change in the DNA sequence of an organism. Mutations are the ultimate source of new variation on which natural selection acts." },
    { heading: "Evidences of evolution", text: "Morphological/anatomical evidence (similar bone structure in the hand of a human, foreleg of an ox, wing of a bat, flipper of a whale — homologous organs, showing common ancestry), vestigial organs (reduced, non-functional organs like the human appendix or tailbone, remnants of organs functional in ancestors), and fossils (preserved remains showing intermediate forms)." },
    { heading: "Darwinism (natural selection)", text: "Organisms produce more offspring than the environment can support; variations exist among individuals; those with favourable variations survive and reproduce better ('survival of the fittest'), passing those traits on." },
    { heading: "Lamarckism", text: "An earlier (now largely rejected) theory proposing that organs used more become more developed within an organism's lifetime, and that such acquired characteristics are inherited by offspring (e.g. the giraffe's neck lengthening by stretching)." },
  ],
  definitions: [
    { term: "Heredity", def: "The transmission of characteristics from parents to offspring through genes." },
    { term: "Gene", def: "A segment of DNA that codes for a particular characteristic and is passed from parents to offspring." },
    { term: "Mutation", def: "A sudden, heritable change in the sequence of DNA." },
    { term: "Homologous organs", def: "Organs with the same basic structure and origin but different functions in different species, indicating a common ancestor (e.g. human hand and bat's wing)." },
    { term: "Vestigial organs", def: "Reduced and non-functional (or poorly functional) organs in an organism, which were functional in its ancestors." },
    { term: "Evolution", def: "The gradual change in heritable characteristics of a population of organisms over successive generations." },
  ],
  formulas: [],
  tables: [
    {
      title: "Darwinism vs Lamarckism",
      headers: ["Darwinism (Natural Selection)", "Lamarckism (Use & Disuse)"],
      rows: [
        ["Variations already exist in a population", "Variations arise from use/disuse of an organ during an individual's life"],
        ["Favourable variations are naturally selected", "Acquired characters are said to be inherited directly"],
        ["Widely accepted, supported by evidence", "Largely rejected by modern genetics"],
      ]
    },
  ],
  diagrams: [
    { src: "sci2-ch01-fig1-homologous-bones.png", caption: "Structure of bones in the human hand, foreleg of ox, patagium (wing) of bat, and flipper of whale.", note: "Classic morphological evidence for evolution — same bone plan, different function." },
    { src: "sci2-ch01-fig2-vestigial-organs.png", caption: "Vestigial organs in the human body: ear muscles, wisdom teeth, tail bone (coccyx), appendix.", note: "A frequently asked labelled diagram for the 'evidence of evolution' topic." },
  ],
  importantPoints: [
    "Law of Dominance: in a hybrid, one allele (dominant) masks the effect of the other (recessive).",
    "Law of Segregation: the two alleles for a trait separate during gamete formation — each gamete gets only one.",
    "In humans, sex is decided by the father's sperm (X or Y), not the mother.",
    "Homologous organs = same structure, different function (evidence FOR common ancestry). Vestigial organs = reduced, non-functional remnants of once-useful organs.",
    "Darwin's theory is based on variation + natural selection; Lamarck's (largely rejected) theory is based on use/disuse and inheritance of acquired characters.",
  ],
  boardTips: [
    "Mendel's monohybrid cross numericals (predicting the ratio of offspring, e.g. 3:1) are frequently asked — practise drawing the cross diagram (Punnett-style) quickly.",
    "'Explain sex determination in humans' is a near-guaranteed 2-mark question — know that the father's chromosome (X or Y) decides the child's sex.",
    "The homologous-organs diagram (hand/foreleg/wing/flipper) and vestigial-organs diagram are both classic 'draw and explain' questions — practise both.",
    "A common reasoning question: 'Why is Lamarckism not widely accepted today?' — be ready with a short answer about acquired characters not being heritable.",
  ],
  revisionSummary: [
    "Mendel: Law of Dominance + Law of Segregation.",
    "Human sex determination: mother always gives X; father gives X (→ girl, XX) or Y (→ boy, XY).",
    "Mutation = sudden heritable change in DNA; source of new variation.",
    "Evidence for evolution: homologous organs, vestigial organs, fossils.",
    "Darwinism: variation + natural selection ('survival of the fittest'). Lamarckism: use/disuse + inheritance of acquired traits (largely rejected).",
  ],
},

// ============================================================ CHAPTER 2 ===
2: {
  title: "Life Processes in Living Organisms Part 1",
  intro: "This chapter explains how cells release energy from food through cellular respiration and ATP formation, the role of nutrients, and how cells divide — by mitosis (for growth and repair) and meiosis (for gamete formation).",
  objectives: [
    "Explain cellular respiration and how ATP is produced.",
    "State the role of carbohydrates, proteins, fats, vitamins and water in nutrition.",
    "Describe the stages and significance of mitosis.",
    "Describe the significance of meiosis in sexual reproduction.",
  ],
  concepts: [
    { heading: "Cellular respiration", text: "Glucose is broken down in a series of steps — glycolysis (in the cytoplasm) → Krebs cycle → electron transport chain (in the mitochondria) — releasing energy that is stored in ATP molecules, the cell's usable energy currency." },
    { heading: "ATP", text: "Adenosine triphosphate is the immediate energy source for all cellular activities; energy released from food is captured in the high-energy bonds of ATP for use whenever and wherever needed." },
    { heading: "Mitosis", text: "A type of cell division in which one cell divides once to form two genetically identical diploid daughter cells. It is responsible for growth, tissue repair, and replacement of worn-out cells." },
    { heading: "Meiosis", text: "A type of cell division involving two successive divisions that produces four gametes with half the chromosome number (haploid). It occurs during the formation of sperm and egg cells, ensuring the chromosome number stays constant across generations." },
  ],
  definitions: [
    { term: "Cellular respiration", def: "The biochemical process by which cells break down glucose in the presence of oxygen to release energy, stored as ATP." },
    { term: "ATP (Adenosine triphosphate)", def: "The molecule that stores and supplies usable chemical energy for cellular activities." },
    { term: "Mitosis", def: "Cell division in which a single cell divides once to produce two genetically identical diploid daughter cells, used for growth and repair." },
    { term: "Meiosis", def: "Cell division involving two successive divisions that produces four haploid gametes with half the original chromosome number." },
  ],
  formulas: [],
  tables: [
    {
      title: "Mitosis vs Meiosis",
      headers: ["Mitosis", "Meiosis"],
      rows: [
        ["One division → 2 daughter cells", "Two divisions → 4 daughter cells"],
        ["Chromosome number stays the same (diploid → diploid)", "Chromosome number is halved (diploid → haploid)"],
        ["Occurs in body (somatic) cells", "Occurs in reproductive (germ) cells"],
        ["Purpose: growth, repair, replacement", "Purpose: formation of gametes (sperm/egg)"],
      ]
    },
  ],
  diagrams: [
    { src: "sci2-ch02-fig1-mitosis.png", caption: "Stages of mitosis — prophase, metaphase, anaphase and telophase.", note: "A very frequently asked 'draw and explain the stages of mitosis' diagram." },
  ],
  importantPoints: [
    "Cellular respiration pathway: Glycolysis → Krebs cycle → Electron transport chain → ATP.",
    "ATP is the universal energy currency of the cell — energy is stored and released from its bonds as needed.",
    "Mitosis: 1 division, 2 diploid daughter cells, identical to parent — for growth & repair.",
    "Meiosis: 2 divisions, 4 haploid gametes, chromosome number halved — for sexual reproduction.",
    "Without meiosis halving the chromosome number, it would double every generation when gametes fuse.",
  ],
  boardTips: [
    "Draw and label the four stages of mitosis (prophase, metaphase, anaphase, telophase) — this is one of the most frequently repeated diagram questions in the whole syllabus.",
    "'Differentiate between mitosis and meiosis' is a near-guaranteed distinguish-between question — memorise at least 3 points of difference.",
    "Know the exact sequence of cellular respiration (glycolysis → Krebs cycle → ETC → ATP) for short-answer questions.",
    "Common mistake: saying meiosis produces 2 cells — remember it is TWO divisions producing FOUR gametes.",
  ],
  revisionSummary: [
    "Respiration: Glycolysis → Krebs cycle → ETC → ATP (energy currency of the cell).",
    "Mitosis: 1 division → 2 identical diploid cells → growth & repair.",
    "Meiosis: 2 divisions → 4 haploid gametes → sexual reproduction, keeps chromosome number constant across generations.",
    "Mitosis stages in order: Prophase → Metaphase → Anaphase → Telophase.",
  ],
},

// ============================================================ CHAPTER 3 ===
3: {
  title: "Life Processes in Living Organisms Part 2",
  intro: "This chapter covers reproduction — asexual and sexual — in plants and animals, including the structure of a flower, double fertilisation, and the human male and female reproductive systems, along with reproductive health and modern reproductive technologies.",
  objectives: [
    "Distinguish asexual and sexual reproduction with examples.",
    "Label the parts of a flower and describe double fertilisation.",
    "Draw and label the human male and female reproductive systems.",
    "Describe the menstrual cycle and aspects of reproductive health.",
  ],
  concepts: [
    { heading: "Asexual vs sexual reproduction", text: "Asexual reproduction (budding, fragmentation, vegetative propagation) involves a single parent and produces genetically identical offspring. Sexual reproduction involves fusion of male and female gametes, producing genetically varied offspring." },
    { heading: "Structure of a flower", text: "A flower's reproductive whorls are the androecium (male part: stamens with anther and filament, producing pollen) and the gynoecium (female part: pistil with stigma, style and ovary, containing ovules)." },
    { heading: "Double fertilisation in flowering plants", text: "A unique feature of angiosperms — one male gamete fuses with the egg cell to form the zygote (embryo), while a second male gamete fuses with the polar nuclei to form the triploid endosperm (nutritive tissue)." },
    { heading: "Human male reproductive system", text: "Testes produce sperm (and testosterone); sperm travel through the vas deferens, mix with secretions from seminal vesicles and prostate gland, and exit through the urethra during ejaculation." },
    { heading: "Human female reproductive system", text: "Ovaries release one ovum roughly every month; it travels down the oviduct (fallopian tube), where fertilisation may occur; the uterus is where a fertilised egg implants and the foetus develops." },
    { heading: "Menstrual cycle", text: "The monthly cycle (~28 days) in which the uterine lining thickens in preparation for a possible pregnancy; if fertilisation does not occur, the lining is shed as menstruation." },
  ],
  definitions: [
    { term: "Asexual reproduction", def: "Reproduction involving a single parent, without fusion of gametes, producing offspring genetically identical to the parent." },
    { term: "Sexual reproduction", def: "Reproduction involving the fusion of male and female gametes, producing genetically varied offspring." },
    { term: "Double fertilisation", def: "A process unique to flowering plants in which one male gamete fuses with the egg (forming the zygote) and another fuses with the polar nuclei (forming the endosperm)." },
    { term: "Gamete", def: "A specialised reproductive cell (sperm or ovum) with a haploid number of chromosomes, that fuses with another gamete during fertilisation." },
    { term: "Menstrual cycle", def: "The recurring monthly cycle of changes in the uterus and ovaries of a female, preparing the body for a possible pregnancy." },
  ],
  formulas: [],
  tables: [],
  diagrams: [
    { src: "sci2-ch03-fig3-flower-parts.png", caption: "Parts of a flower — androecium (anther, filament) and gynoecium (stigma, style, ovary).", note: "Explicitly listed in the textbook exercise: 'sketch the labelled diagram of a flower with its sexual reproductive organs.'" },
    { src: "sci2-ch03-fig1-male-reproductive-system.png", caption: "Human male reproductive system.", note: "Explicitly asked to sketch and label in the textbook exercise." },
    { src: "sci2-ch03-fig2-female-reproductive-system.png", caption: "Human female reproductive system.", note: "Explicitly asked to sketch and label in the textbook exercise." },
  ],
  importantPoints: [
    "Asexual reproduction → 1 parent, identical offspring. Sexual reproduction → 2 parents (gametes), varied offspring.",
    "A flower's male part = androecium (stamen: anther + filament); female part = gynoecium (pistil: stigma + style + ovary).",
    "Double fertilisation is unique to flowering plants — one fusion forms the zygote, the other forms the endosperm.",
    "Male system: testes → sperm. Female system: ovaries → ovum, released roughly once a month.",
    "Menstrual cycle ≈ 28 days; menstruation occurs when the thickened uterine lining is shed because no fertilisation occurred.",
  ],
  boardTips: [
    "The textbook exercise explicitly names four diagrams to practise sketching: male reproductive system, female reproductive system, flower with reproductive organs, and the menstrual cycle — prioritise these.",
    "'Distinguish between asexual and sexual reproduction' is a very common 2-mark question.",
    "Know the exact roles of the parts in double fertilisation — a frequently tested short-answer question specific to this board.",
    "Common mistake: mixing up the androecium (male) and gynoecium (female) parts of a flower — remember 'Andro-' relates to male, matching 'android'.",
  ],
  revisionSummary: [
    "Asexual: 1 parent, identical offspring. Sexual: gamete fusion, varied offspring.",
    "Flower: Androecium (male: anther+filament) + Gynoecium (female: stigma+style+ovary).",
    "Double fertilisation: gamete1+egg → zygote; gamete2+polar nuclei → endosperm.",
    "Male system: testes → sperm → vas deferens → urethra.",
    "Female system: ovary → ovum → oviduct → uterus.",
    "Menstrual cycle ≈ 28 days; sheds uterine lining if no fertilisation occurs.",
  ],
},

// ============================================================ CHAPTER 4 ===
4: {
  title: "Environmental Management",
  intro: "This chapter reviews ecosystems and the relationship between environment and ecology, covers the types and effects of pollution, and explains biodiversity, its conservation, and the classification of threatened species.",
  objectives: [
    "Explain the relationship between environment and ecosystem.",
    "Describe the types of environmental pollution and their effects.",
    "Explain biodiversity and its three levels.",
    "Classify threatened species and describe conservation measures.",
  ],
  concepts: [
    { heading: "Environment vs ecosystem", text: "Environment is the broad surrounding — all biotic, abiotic, natural and artificial factors affecting living organisms. An ecosystem is the basic functional unit within the environment, formed by biotic and abiotic factors interacting in a defined area." },
    { heading: "Environmental pollution", text: "Any unacceptable change in air, water or soil (due to natural events or human activity) that harms living beings. Major causes: population growth, industrialisation, deforestation and unplanned urbanisation." },
    { heading: "Biodiversity and its levels", text: "Biodiversity is the variety of life at three levels — genetic diversity (variation within a species), species diversity (variety of species), and ecosystem diversity (variety of ecosystems in a region)." },
    { heading: "Biodiversity hotspots", text: "Regions with an exceptionally high concentration of species found nowhere else, but which are under severe threat — these are priority areas for conservation (e.g. the Western Ghats in India)." },
    { heading: "Classification of threatened species", text: "Species are classified by IUCN based on their risk of extinction: Endangered (very likely to become extinct soon), Rare (few in number, often endemic), Vulnerable (declining continuously), and Indeterminate (likely endangered but data is insufficient)." },
  ],
  definitions: [
    { term: "Ecosystem", def: "A functional unit formed by biotic and abiotic factors of a definite area and their interactions with each other." },
    { term: "Environment", def: "The physical, chemical and biological factors, both natural and artificial, that affect living organisms in any possible way." },
    { term: "Environmental pollution", def: "Direct or indirect unacceptable change in the physical, chemical or biological properties of air, water or soil, harmful to living beings." },
    { term: "Biodiversity", def: "The richness of living organisms in nature due to the presence of a variety of species, ecosystems and genetic variation within species." },
    { term: "Endangered species", def: "A species whose number has declined, or whose habitat has shrunk, to such an extent that it may become extinct in the near future without conservation measures." },
  ],
  formulas: [],
  tables: [
    {
      title: "Levels of biodiversity",
      headers: ["Level", "Meaning", "Example"],
      rows: [
        ["Genetic diversity", "Variation among organisms of the same species", "Every human being is genetically different"],
        ["Species diversity", "Variety of species in nature", "Plants, animals and microbes of a region"],
        ["Ecosystem diversity", "Variety of ecosystems in a region", "Forest, pond, grassland ecosystems"],
      ]
    },
  ],
  diagrams: [],
  importantPoints: [
    "Environment is the broader concept; ecosystem is the basic functional unit used to study it.",
    "Environmental balance is maintained by natural cycles (water, carbon, nitrogen, oxygen) and food chains.",
    "Biodiversity occurs at 3 levels: genetic, species and ecosystem diversity.",
    "IUCN's 'Red List' records endangered species — pink pages for currently endangered, green pages for previously endangered but now safe species.",
    "Sacred groves are forest patches conserved by local communities/tradition, not by the government forest department.",
  ],
  boardTips: [
    "'Explain the relationship between environment and ecosystem' and 'Write a short note on biodiversity' are frequently repeated questions — prepare both in 3-4 clear lines.",
    "Know the three levels of biodiversity with one example each — a very common 2-mark question.",
    "The classification of threatened species (endangered/rare/vulnerable/indeterminate) with one example each is often asked.",
    "Common mistake: using 'environment' and 'ecosystem' interchangeably in answers — the exam specifically tests that you know the distinction.",
  ],
  revisionSummary: [
    "Ecosystem = biotic + abiotic factors interacting in a defined area; Environment = the broader surrounding.",
    "Environmental pollution: unacceptable change in air/water/soil, caused by population growth, industrialisation, deforestation, urbanisation.",
    "Biodiversity: genetic + species + ecosystem diversity.",
    "Threatened species: Endangered, Rare, Vulnerable, Indeterminate (IUCN Red List).",
    "Conservation: protecting rare species, national parks/sanctuaries, bioreserves, following laws (e.g. Forest Conservation Act 1980, Environment Protection Act 1986).",
  ],
},

// ============================================================ CHAPTER 5 ===
5: {
  title: "Towards Green Energy",
  intro: "This chapter explains how electricity is generated using the principle of electromagnetic induction, surveys the different sources used to drive that generation (thermal, nuclear, natural gas, hydro, wind, solar), and explains why some of these are called 'green energy' while others are not environment-friendly.",
  objectives: [
    "State the principle behind an electric generator.",
    "Explain, with a schematic diagram, how thermal, nuclear and hydroelectric power plants generate electricity.",
    "Explain how wind and solar energy are converted into electricity.",
    "Explain what green energy is and why fossil-fuel/nuclear power is not environment-friendly.",
  ],
  concepts: [
    { heading: "Electromagnetic induction", text: "Discovered by Michael Faraday: whenever the magnetic field around a conductor changes, a potential difference (emf) is induced across it. Nearly all commercial electricity generation is based on this principle — a turbine rotates a magnet (or coil) inside a generator." },
    { heading: "Common chain for electricity generation", text: "Energy source → Turbine → Generator → Electrical energy. Different power plants differ only in what drives the turbine: steam (thermal, nuclear), hot gas (natural gas), falling water (hydro), wind (wind turbine), or heated fluid from concentrated sunlight (solar thermal)." },
    { heading: "Thermal power plant", text: "Coal is burnt in a boiler to convert water into high-pressure steam; the steam drives a turbine connected to a generator; used steam is condensed back to water (using a cooling tower) and recirculated." },
    { heading: "Nuclear power plant", text: "Controlled nuclear fission of Uranium/Plutonium releases heat, which is used to generate steam that drives a turbine-generator, just like a thermal plant — but without burning fossil fuel." },
    { heading: "Hydroelectric power plant", text: "Water stored at height in a dam is released through a penstock; its kinetic energy drives a turbine connected to a generator." },
    { heading: "Wind and solar energy", text: "A wind turbine converts the kinetic energy of wind into rotation that drives a generator. Solar photovoltaic cells convert sunlight directly into DC electricity (no generator involved); alternatively, solar thermal plants concentrate sunlight to heat a fluid that drives a conventional turbine-generator." },
    { heading: "Green energy", text: "Electricity generated from perpetual, non-polluting sources — water, wind, sunlight — is called green energy, because unlike fossil fuels and nuclear fuel, these sources do not cause air pollution, do not deplete, and avoid problems like nuclear waste disposal." },
  ],
  definitions: [
    { term: "Electromagnetic induction", def: "The phenomenon in which a change in the magnetic field around a conductor induces a potential difference (emf) across it." },
    { term: "Turbine", def: "A machine with blades that rotates when a flow of liquid or gas is directed onto it, converting the flow's kinetic energy into rotational mechanical energy." },
    { term: "Green energy", def: "Electrical energy generated from perpetual, non-polluting sources such as water, wind and sunlight, which does not harm the environment." },
    { term: "Solar photovoltaic cell", def: "A device made of semiconductor material (e.g. silicon) that converts solar radiation directly into DC electrical energy." },
  ],
  formulas: [],
  tables: [
    {
      title: "Sources of electricity generation — what drives the turbine",
      headers: ["Power plant", "What drives the turbine", "Green energy?"],
      rows: [
        ["Thermal", "High-pressure steam from burning coal", "No — air pollution, limited coal reserves"],
        ["Nuclear", "High-pressure steam from nuclear fission heat", "No — radioactive waste disposal problem"],
        ["Natural gas", "Hot, high-pressure combustion gas", "No — burns fossil fuel (though cleaner than coal)"],
        ["Hydroelectric", "Kinetic energy of falling/flowing water", "Yes"],
        ["Wind", "Kinetic energy of wind", "Yes"],
        ["Solar thermal", "Steam from sunlight-heated fluid", "Yes"],
      ]
    },
  ],
  diagrams: [
    { src: "sci2-ch05-fig1-thermal-power-plant.png", caption: "Schematic of a thermal power plant — boiler, turbine, generator, condenser and cooling tower.", note: "The base diagram nearly every power-plant question in this chapter builds on." },
    { src: "sci2-ch05-fig2-hydroelectric-power-plant.png", caption: "Schematic diagram of a hydroelectric power plant.", note: "Explicitly asked in the textbook exercise: 'explain with diagram, step-by-step energy conversion in a hydroelectric power plant.'" },
    { src: "sci2-ch05-fig3-solar-thermal-power-plant.png", caption: "Schematic of a solar thermal power plant — reflectors, absorber, turbine, generator, condenser, cooling tower.", note: "Explicitly asked in the textbook exercise: 'draw a schematic diagram of solar thermal electric energy generation.'" },
  ],
  importantPoints: [
    "Every major power plant type (except solar photovoltaic) follows the same chain: energy source → turbine → generator → electricity.",
    "Solar photovoltaic cells are the ONE method that generates electricity WITHOUT a turbine or generator — direct conversion of light to DC electricity.",
    "Green energy sources (water, wind, sun) are perpetual (never-ending) and do not cause air pollution — unlike fossil fuels and nuclear fuel.",
    "Solar cells in series: voltage adds up, current stays the same. Solar cells in parallel: current adds up, voltage stays the same.",
    "A DC-to-AC inverter is needed to use solar power for most household/industrial equipment, which runs on AC.",
  ],
  boardTips: [
    "'Draw a schematic diagram and explain step-by-step energy conversion' is asked for thermal, nuclear, hydroelectric AND solar thermal plants — practise all with the common source → turbine → generator → electricity chain in mind.",
    "'What is green energy? Give examples' is a guaranteed conceptual question.",
    "Numericals on solar cells in series/parallel (finding total voltage/current) are common — remember: series adds voltage, parallel adds current.",
    "Common mistake: assuming ALL renewable-looking methods skip the generator — only solar PHOTOVOLTAIC skips it; solar THERMAL still uses a turbine-generator.",
  ],
  revisionSummary: [
    "Electricity generation is based on electromagnetic induction (Faraday): source → turbine → generator → electricity.",
    "Thermal/Nuclear/Natural gas: burn fuel → steam/hot gas → turbine → generator (not eco-friendly).",
    "Hydro/Wind: kinetic energy directly drives the turbine (green energy).",
    "Solar photovoltaic: direct light → DC electricity, no turbine. Solar thermal: sunlight → heat → steam → turbine (both green energy).",
    "Green energy = perpetual + non-polluting (water, wind, sun); fossil fuels & nuclear fuel are NOT green energy.",
  ],
},

// ============================================================ CHAPTER 6 ===
6: {
  title: "Animal Classification",
  intro: "This chapter traces the history of animal classification and explains the modern classification system, based on criteria like body organisation, symmetry and body cavity, culminating in the division of Kingdom Animalia into chordates and non-chordates and their further sub-groups.",
  objectives: [
    "Outline the history of animal classification (Aristotle to the modern system).",
    "State the criteria used in the modern classification system.",
    "Distinguish chordates from non-chordates.",
    "Recall the major phyla of non-chordates and the classes of vertebrates.",
  ],
  concepts: [
    { heading: "History of classification", text: "Aristotle first classified animals (the 'artificial method', based on size/habitat). This was followed by the 'natural system' (based on body organisation, cell types, biochemistry), and later a classification based on evolutionary relationships." },
    { heading: "Chordates vs non-chordates", text: "Chordates have a notochord (a supporting rod on the dorsal side), a dorsal hollow nerve cord, pharyngeal gill slits, and a ventral heart. Non-chordates lack a notochord, have a solid ventral nerve cord (if present), and a dorsal heart (if present)." },
    { heading: "Grades of body organisation", text: "Protoplasmic grade (unicellular, e.g. Amoeba), Cellular grade (cells not organised into tissues, e.g. Porifera), Cell-tissue grade (cells form tissues, e.g. Cnidaria), Tissue-organ grade (tissues form organs but not complete systems, e.g. flatworms), and Organ-system grade (complete organ systems, e.g. most animals including humans)." },
    { heading: "Major phyla of non-chordates", text: "Protozoa, Porifera, Cnidaria (Coelenterata), Platyhelminthes, Aschelminthes, Annelida, Arthropoda, Mollusca, Echinodermata, Hemichordata — ten phyla in total." },
    { heading: "Classes of vertebrates", text: "Phylum Chordata's sub-phylum Vertebrata is divided into six classes: Cyclostomata, Pisces, Amphibia, Reptilia, Aves and Mammalia." },
  ],
  definitions: [
    { term: "Animal classification", def: "The formation of groups and sub-groups of animals based on their similarities and differences, to make their systematic study easier." },
    { term: "Notochord", def: "A long, rod-like supporting structure present on the dorsal side of the body in chordates, which keeps the nerve tissue isolated from the rest of the body." },
    { term: "Chordate", def: "An animal possessing a notochord, a dorsal hollow nerve cord, pharyngeal gill slits and a ventral heart at some stage of life." },
  ],
  formulas: [],
  tables: [
    {
      title: "Chordates vs Non-chordates",
      headers: ["Feature", "Chordates", "Non-chordates"],
      rows: [
        ["Notochord", "Present", "Absent"],
        ["Nerve cord", "Dorsal, hollow", "Ventral (if present), solid"],
        ["Heart position", "Ventral side", "Dorsal side (if present)"],
        ["Gill slits", "Present (or lungs)", "Absent"],
      ]
    },
  ],
  diagrams: [
    { src: "sci2-ch06-fig2-classification-chart.png", caption: "Conventional system of animal classification — from Kingdom Animalia down to the phyla of non-chordates and the classes of vertebrates.", note: "A comprehensive summary chart — ideal for last-minute revision of the whole classification scheme." },
    { src: "sci2-ch06-fig1-chordates-characteristics.png", caption: "Characteristic features of chordates — notochord, nerve chord, muscle, gill slits, mouth, tail fin.", note: "Supports the chordate vs non-chordate distinguish-between question." },
  ],
  importantPoints: [
    "Non-chordates are divided into 10 phyla; the sub-phylum Vertebrata (within Chordata) is divided into 6 classes.",
    "The single most important distinguishing feature between chordates and non-chordates is the presence/absence of a notochord.",
    "Grades of organisation, from simplest to most complex: Protoplasmic → Cellular → Cell-tissue → Tissue-organ → Organ-system.",
    "Modern classification (Whittaker's 5-kingdom system) places all multicellular animals in Kingdom Animalia, classified using body organisation, symmetry, body cavity and segmentation.",
  ],
  boardTips: [
    "The full classification chart (Kingdom → Phylum → Class) is a common 'complete the chart' question — practise reproducing it from memory.",
    "'Differentiate between chordates and non-chordates' is a guaranteed distinguish-between question — know all 4 points in the table above.",
    "Know the names and order of the 10 non-chordate phyla and the 6 vertebrate classes — often tested as fill-in-the-blank or match-the-following.",
    "Common mistake: confusing 'grade of organisation' terms (cellular vs tissue vs organ grade) — learn one example animal for each grade.",
  ],
  revisionSummary: [
    "Classification history: Aristotle (artificial) → natural system → evolutionary system.",
    "Chordates: notochord + dorsal hollow nerve cord + gill slits + ventral heart. Non-chordates: none of these.",
    "5 grades of body organisation: Protoplasmic → Cellular → Cell-tissue → Tissue-organ → Organ-system.",
    "Non-chordates: 10 phyla (Protozoa to Hemichordata). Vertebrata: 6 classes (Cyclostomata to Mammalia).",
  ],
},

// ============================================================ CHAPTER 7 ===
7: {
  title: "Introduction to Microbiology",
  intro: "This chapter surveys how microbes are put to use industrially — in food production, fuels, pollution control, agriculture and medicine — covering applied and industrial microbiology and the products derived from microbial processes.",
  objectives: [
    "Distinguish applied and industrial microbiology.",
    "List products of microbial fermentation and their uses.",
    "Explain how microbes are used in fuel production and pollution control.",
    "Describe the use of microbes in agriculture (biofertilisers, bioinsecticides).",
  ],
  concepts: [
    { heading: "Applied vs industrial microbiology", text: "Applied microbiology studies the enzymes, proteins and genetics of microbes for the benefit of society. Industrial microbiology is the commercial-scale use of microbes to produce economically useful products and processes." },
    { heading: "Fermentation products", text: "Microbes (mainly bacteria and yeast) are used to produce dairy products (yoghurt, cheese, butter), bread, vinegar, and beverages — through controlled fermentation of sugars." },
    { heading: "Microbes and fuels", text: "Methane (biogas) is obtained by anaerobic microbial decomposition of waste; ethanol is obtained by yeast fermentation of molasses; hydrogen gas can be released by bacterial photoreduction of water." },
    { heading: "Microbial pollution control", text: "Microbes decompose solid waste and sewage in landfill sites and treatment plants, breaking down organic matter and destroying disease-causing pathogens; specific bacteria can also clean oil spills and decompose plastics." },
    { heading: "Microbes in agriculture", text: "Biofertilisers (e.g. Rhizobium, Azotobacter) improve nitrogen fixation without chemical fertilisers; microbial inoculants improve plant growth; bioinsecticides use bacterial/fungal toxins to control pests without harming the crop." },
  ],
  definitions: [
    { term: "Applied microbiology", def: "The branch of biology in which the enzymes, proteins, genetics and molecular biology of microbes are studied for the benefit of society." },
    { term: "Industrial microbiology", def: "The commercial use of microbes for economic, social and environment-related processes and products." },
    { term: "Biofertiliser", def: "A substance containing living microorganisms that, when applied to soil or seeds, improves nutrient availability (e.g. nitrogen fixation) for plants." },
    { term: "Bioremediation", def: "The use of living organisms (microbes or plants) to absorb or break down toxic pollutants from a contaminated environment." },
  ],
  formulas: [],
  tables: [],
  diagrams: [
    { src: "sci2-ch07-fig1-modern-landfill-site.png", caption: "A modern landfill site — showing the gas collection system, soil cover, plastic sheet lining and sewage collection.", note: "The clearest genuine labelled diagram in this chapter; useful for the waste-management/pollution-control topic." },
  ],
  importantPoints: [
    "Applied microbiology = the science; industrial microbiology = its commercial application.",
    "Most dairy products (yoghurt, cheese) use bacterial fermentation; bread uses yeast fermentation (produces CO₂, which makes dough rise).",
    "Vinegar is dilute (~4%) acetic acid, produced by microbial fermentation of ethanol.",
    "Biogas (methane) comes from anaerobic decomposition of organic waste — a renewable fuel.",
    "Biofertilisers reduce dependence on chemical fertilisers and the soil pollution they cause.",
  ],
  boardTips: [
    "'Which fuels can be obtained by microbial processes?' is a common question — know methane, ethanol and hydrogen with their microbial source.",
    "Reasoning questions like 'why are mutant/virus-resistant bacterial strains used in industrial microbiology?' are common — link back to preventing contamination during large-scale fermentation.",
    "Know 2–3 examples of bioremediation (e.g. Pseudomonas cleaning oil spills, Ideonella decomposing plastic) for application-based questions.",
    "Common mistake: assuming all fermentation is by yeast — many dairy products actually use specific bacteria (lactobacilli), not yeast.",
  ],
  revisionSummary: [
    "Applied microbiology: study of microbial enzymes/genetics for society's benefit. Industrial microbiology: commercial use of microbes.",
    "Dairy products (yoghurt, cheese) use bacteria; bread uses yeast (CO₂ makes it rise); vinegar = acetic acid from fermented ethanol.",
    "Fuels from microbes: methane (biogas, anaerobic decomposition), ethanol (yeast fermentation), hydrogen (bacterial photoreduction).",
    "Microbes control pollution: decompose sewage/solid waste, clean oil spills, break down plastics.",
    "Biofertilisers (Rhizobium, Azotobacter) and bioinsecticides support eco-friendly agriculture.",
  ],
},

// ============================================================ CHAPTER 8 ===
8: {
  title: "Cell Biology and Biotechnology",
  intro: "This chapter introduces stem cells — their types, sources and medical uses — and surveys biotechnology's applications in agriculture, medicine and industry, along with milestones in India's agricultural development (Green, White and Blue revolutions).",
  objectives: [
    "Explain what stem cells are and distinguish embryonic from adult stem cells.",
    "State the uses of stem cells in regenerative therapy.",
    "Explain commercial applications of biotechnology in agriculture and medicine.",
    "Describe the Green, White and Blue revolutions in Indian agriculture.",
  ],
  concepts: [
    { heading: "Stem cells", text: "Special, undifferentiated cells present in multicellular organisms that can develop (differentiate) into many different specialised cell types, and also self-renew. They are found in the umbilical cord, blastocyst-stage embryos, red bone marrow and adipose tissue." },
    { heading: "Embryonic vs adult stem cells", text: "Embryonic stem cells (collected before day 14 of development) are pluripotent — able to become almost any cell type. Adult stem cells (from bone marrow, fat tissue or blood) have more limited differentiation potential but are more readily available." },
    { heading: "Uses of stem cells", text: "Cell therapy (replacing dead/damaged cells in diseases like diabetes, Parkinson's), producing blood cells for conditions like anaemia, and growing organs/tissues for transplantation." },
    { heading: "Biotechnology in agriculture", text: "Hybrid seeds, genetically modified (GM) crops (e.g. Bt cotton — engineered to produce a toxin fatal to bollworm pests, Golden Rice — engineered for higher vitamin A), and biofertilisers improve yield and reduce chemical dependency." },
    { heading: "Biotechnology in medicine", text: "Production of hormones (e.g. insulin from genetically modified bacteria), safer vaccines (produced from isolated antigens instead of whole pathogens), gene therapy, and cloning (reproductive and therapeutic)." },
    { heading: "Agricultural revolutions in India", text: "Green Revolution — increased food-grain production using high-yield dwarf varieties and better farming methods (Dr. M.S. Swaminathan, Dr. Norman Borlaug). White Revolution — growth of India's dairy/milk cooperative movement (Dr. Verghese Kurien). Blue Revolution — growth of aquaculture and fish production." },
  ],
  definitions: [
    { term: "Stem cells", def: "Undifferentiated cells present in the body of multicellular organisms that can give rise to many other types of specialised cells." },
    { term: "Biotechnology", def: "The use of living organisms, cells or their molecules (like DNA and proteins) to develop products and techniques for human welfare." },
    { term: "Genetically modified (GM) crop", def: "A crop developed by integrating a foreign gene into its genome to introduce a desired character, such as pest resistance." },
    { term: "Cloning", def: "The production of a genetically identical replica of a cell, organ, or entire organism." },
    { term: "DNA fingerprinting", def: "A technique that uses the unique DNA sequence of an individual to establish identity, widely used in forensic science." },
  ],
  formulas: [],
  tables: [],
  diagrams: [
    { src: "sci2-ch08-fig1-transgenic-potatoes.png", caption: "Production of a transgenic (edible vaccine) potato — from gene isolation to consumption.", note: "A genuine process-flow diagram illustrating how biotechnology is applied to create an edible vaccine." },
  ],
  importantPoints: [
    "Stem cells are undifferentiated and can both self-renew and specialise into other cell types.",
    "Embryonic stem cells are pluripotent (very flexible); adult stem cells have more limited potential but are easier to obtain.",
    "Bt cotton/Bt brinjal use a gene from the bacterium Bacillus thuringiensis to produce a pest-killing toxin.",
    "Green Revolution = food grain productivity; White Revolution = milk/dairy; Blue Revolution = fish/aquaculture — know the associated person for each.",
    "Modern vaccines use isolated antigens (safer) rather than whole killed/weakened pathogens (older method).",
  ],
  boardTips: [
    "'What are stem cells? State their uses' is a frequent, straightforward 2-3 mark question.",
    "Know the difference between embryonic and adult stem cells, and where each is sourced from.",
    "Bt cotton is a favourite example for 'explain any one application of biotechnology in agriculture' — know exactly how the toxin works against bollworm.",
    "Match the scientist to the revolution: Swaminathan/Borlaug → Green Revolution; Kurien → White Revolution — a common match-the-following question.",
  ],
  revisionSummary: [
    "Stem cells: undifferentiated, self-renewing, can specialise into other cell types.",
    "Embryonic stem cells (pluripotent, from early embryo) vs Adult stem cells (limited potential, from bone marrow/fat/blood).",
    "Stem cell uses: cell therapy, blood cell production, organ/tissue regeneration.",
    "Biotechnology in agriculture: hybrid seeds, GM crops (Bt cotton, Golden Rice), biofertilisers.",
    "Biotechnology in medicine: insulin production, safer vaccines, gene therapy, cloning, DNA fingerprinting.",
    "India: Green Revolution (food grains), White Revolution (milk), Blue Revolution (fish).",
  ],
},

// ============================================================ CHAPTER 9 ===
9: {
  title: "Social Health",
  intro: "This chapter looks at social health — a person's ability to build healthy relationships and adapt to social conditions — and the factors that endanger it, such as stress, addiction, and the excessive or irrational use of technology and social media, along with ways to manage stress.",
  objectives: [
    "Define social health and list the factors affecting it.",
    "Explain how addiction and excessive technology use endanger social health.",
    "Describe cyber crimes and precautions against them.",
    "List healthy ways to manage stress.",
  ],
  concepts: [
    { heading: "Social health", text: "A person's ability to build and maintain healthy relationships with others, and to adjust their behaviour according to changing social conditions. It depends on factors like personality, social support, and the ability to use free time constructively." },
    { heading: "Factors endangering social health", text: "Mental stress (from competition, loneliness, gender inequality), addiction (tobacco, alcohol, drugs — often from peer pressure), chronic disease and social stigma, and excessive/irrational use of communication media and technology." },
    { heading: "Excessive technology use", text: "Overuse of phones and the internet can cause physical problems (headaches, insomnia, vision issues) and social problems (becoming solitary, self-centred, less sensitive to others), and can lead to risky behaviours like dangerous selfies." },
    { heading: "Cyber crime", text: "Includes hacking, online fraud, cheating consumers, piracy, and misuse of personal information or images online. India's IT Act, 2000 (amended 2008) provides legal penalties for cyber crimes." },
    { heading: "Stress management", text: "Healthy ways to relieve stress include: communicating with friends/family, hobbies, music, sports and outdoor games, exercise/yoga/meditation, and time management. Persistent stress that these don't resolve should be addressed through medical/psychological counselling." },
  ],
  definitions: [
    { term: "Social health", def: "The ability of a person to establish healthy relationships with others and adapt their behaviour to changing social conditions." },
    { term: "Addiction", def: "A compulsive dependence on a substance (such as tobacco, alcohol or drugs) or activity, often beginning under peer pressure, that harms physical, mental and social wellbeing." },
    { term: "Cyber crime", def: "A criminal activity that involves a computer, networked device, or the internet, such as hacking, online fraud or piracy." },
  ],
  formulas: [],
  tables: [],
  diagrams: [
    { src: "sci2-ch09-fig1-social-health-factors.png", caption: "Factors affecting social health — needs, education, jobs, environment, and community factors.", note: "A concept map summarising the many factors that influence social health, directly useful for the 'which factors affect social health' question." },
  ],
  importantPoints: [
    "Social health = ability to build relationships + adapt to changing social conditions (not the same as physical health).",
    "Addiction often begins due to peer-group pressure, curiosity, or imitation of elders — not necessarily poor upbringing.",
    "Excessive phone/internet use can cause both physical symptoms (headache, insomnia, vision issues) and social withdrawal.",
    "IT Act, 2000 (amended 2008) is India's law addressing cyber crime.",
    "Healthy stress relief: communication, hobbies, music, sports, exercise, yoga, meditation — NOT substance use.",
  ],
  boardTips: [
    "'Which factors affect social health?' is a direct, frequently repeated question — use the concept-map diagram to structure your answer.",
    "Know at least 3 examples of cyber crime and one precaution for each — a common application-based question.",
    "'Suggest ways to reduce stress' or 'give examples of hobbies that reduce stress' are frequently asked — prepare a list of at least 5.",
    "Scenario-based questions (e.g. 'your friend is spending too much time on phone games — what would you do?') are common in this chapter — practise structuring a short, practical answer.",
  ],
  revisionSummary: [
    "Social health: ability to build relationships + adapt to social conditions.",
    "Factors endangering it: mental stress, addiction, chronic disease/stigma, excessive technology use.",
    "Cyber crime: hacking, fraud, piracy, misuse of personal data — governed by IT Act 2000 (amended 2008).",
    "Stress management: communication, hobbies, music, sports, yoga/meditation, time management; persistent stress needs professional counselling.",
  ],
},

// ============================================================ CHAPTER 10 ==
10: {
  title: "Disaster Management",
  intro: "This chapter defines disasters and their types, explains their effects on life, property, economy and administration, and describes the disaster management cycle and the administrative structure — from national to village level — that coordinates disaster response in India.",
  objectives: [
    "Define disaster and classify its main types.",
    "Explain the effects of disasters on society and the economy.",
    "Describe the stages of the disaster management cycle.",
    "Describe the structure of disaster management authorities from national to village level.",
  ],
  concepts: [
    { heading: "Disaster", text: "A sudden event causing huge loss of life and property. Disasters may be natural (geophysical — earthquakes, floods, cyclones; biological — epidemics, pest outbreaks) or man-made (war, industrial accidents, terrorism)." },
    { heading: "Effects of disasters", text: "Disasters damage the economy (cost of reconstruction), disrupt social leadership and administration, and cause direct loss of life, property, health and infrastructure." },
    { heading: "Disaster management cycle", text: "A continuous cycle of six aspects: Preparation (planning ahead), Preparedness (readiness for quick response), Impact (assessing the disaster's intensity), Response (immediate action after the disaster strikes), Restoration (linking relief measures to national development), and Resurgence (long-term rehabilitation and national progress)." },
    { heading: "Disaster management authority structure", text: "A hierarchical chain of responsibility: National Disaster Management Authority (Chairman: Prime Minister) → State Disaster Management Authority (Chairman: Chief Minister) → District Disaster Management Authority (Chairman: Collector) → Taluka Disaster Management Authority (Chairman: Tahsildar) → Village-level Committee (Chairman: Sarpanch)." },
    { heading: "Phases important to citizens", text: "Emergency phase (search, rescue, first aid — saving maximum lives), Transitional phase (rehabilitation: clearing debris, restoring water/roads), and Reconstruction phase (long-term rebuilding of homes and livelihoods)." },
  ],
  definitions: [
    { term: "Disaster", def: "A sudden event that leads to a huge loss of life and property, and cannot be predicted in advance (as defined by the United Nations)." },
    { term: "Disaster management", def: "The process of preventing disasters where possible, and of preparing for, responding to, and recovering from disasters to minimise loss." },
    { term: "Mitigation", def: "Measures taken in advance to reduce the severity or impact of a future disaster." },
  ],
  formulas: [],
  tables: [
    {
      title: "Disaster Management Authority — chain of command",
      headers: ["Level", "Chairman"],
      rows: [
        ["National Disaster Management Authority", "Prime Minister"],
        ["State Disaster Management Authority", "Chief Minister"],
        ["District Disaster Management Authority", "Collector"],
        ["Taluka Disaster Management Authority", "Tahsildar"],
        ["Village-level Committee", "Sarpanch"],
      ]
    },
  ],
  diagrams: [
    { src: "sci2-ch10-fig1-types-of-disasters.png", caption: "Types of disasters — geophysical (geological & atmospheric), biological (plant & animal), and man-made.", note: "A comprehensive classification chart, useful for 'classify the types of disasters' questions." },
    { src: "sci2-ch10-fig2-management-cycle.png", caption: "The disaster management cycle — preparation, preparedness, impact, response, restoration and resurgence.", note: "A frequently tested cyclic diagram — practise naming and briefly explaining all six stages in order." },
    { src: "sci2-ch10-fig3-authority-structure.png", caption: "Structure of the Disaster Management Authority, from national to village level.", note: "Directly answers 'describe the structure of disaster management authority' — a common board question." },
  ],
  importantPoints: [
    "UN definition of disaster emphasises two words: 'huge' loss and 'sudden' occurrence (unpredictable, so precaution beforehand is limited).",
    "Disasters are broadly geophysical, biological, or man-made — know at least 2 examples of each.",
    "The 6 stages of the disaster management cycle, in order: Preparation → Preparedness → Impact → Response → Restoration → Resurgence.",
    "Disaster Management Act, 2005 established India's disaster management authority structure.",
    "Authority chain: National (PM) → State (CM) → District (Collector) → Taluka (Tahsildar) → Village (Sarpanch).",
  ],
  boardTips: [
    "The Disaster Management Authority structure (with each level's chairman) is a very frequently asked diagram/short-answer question — memorise the exact chain and titles.",
    "The 6-stage disaster management cycle is commonly asked to be drawn/explained — practise naming all six in the correct cyclic order.",
    "'Classify the types of disasters with examples' is a common question — structure your answer using the Geophysical/Biological/Man-made split.",
    "Common mistake: confusing 'mitigation/preparedness' (before a disaster) with 'response/recovery' (after a disaster) — keep the timeline clear in your answer.",
  ],
  revisionSummary: [
    "Disaster (UN definition): sudden event causing huge loss of life & property; unpredictable.",
    "Types: Geophysical (geological, atmospheric), Biological (plant, animal), Man-made.",
    "Disaster management cycle: Preparation → Preparedness → Impact → Response → Restoration → Resurgence.",
    "Authority structure: National (PM) → State (CM) → District (Collector) → Taluka (Tahsildar) → Village (Sarpanch).",
    "Citizen-relevant phases: Emergency (rescue) → Transitional (rehabilitation) → Reconstruction (rebuilding).",
  ],
},

/* CHAPTERS_MARKER_DO_NOT_REMOVE */

};
