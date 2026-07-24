/* ==========================================================================
   PIXEL STUDY — Science and Technology Part I (Std X, Maharashtra Board)
   Detailed chapter revision content, extracted & summarised from the
   Balbharati textbook. Diagrams are cropped directly from the textbook.
   This file is purely additive data — it does not touch existing app logic.
   ========================================================================== */

window.SCI1_LESSONS = {

// ============================================================ CHAPTER 1 ===
1: {
  title: "Gravitation",
  intro: "This chapter builds up the story of gravitation — from Kepler's observations of planetary motion to Newton's universal law of gravitation — and then applies it to the motion of falling objects near the Earth (free fall, acceleration due to gravity, weight) and to escape velocity. It is one of the most formula-heavy, numerical-problem-heavy chapters in Science I.",
  objectives: [
    "State Kepler's three laws of planetary motion and explain them with a diagram.",
    "State Newton's law of gravitation and use it to solve numericals.",
    "Explain acceleration due to gravity (g) and how it varies with height and depth.",
    "Distinguish between mass and weight.",
    "Define free fall and escape velocity, and solve related numericals.",
  ],
  concepts: [
    { heading: "Kepler's three laws", text: "Kepler analysed planetary-position data and found three patterns describing how planets move around the Sun — gravity is what supplies the centre-directed (centripetal) force that keeps them in orbit (see Formulas for exact statements)." },
    { heading: "Newton's universal law of gravitation", text: "Newton unified Kepler's laws and terrestrial gravity into a single law: every object in the universe attracts every other object with a force proportional to the product of their masses and inversely proportional to the square of the distance between them." },
    { heading: "Acceleration due to gravity (g)", text: "Near the Earth's surface, every freely falling object experiences the same acceleration g (~9.8 m/s²), regardless of its mass. g is maximum at the Earth's surface and decreases both with height and with depth." },
    { heading: "Mass vs weight", text: "Mass is the quantity of matter in a body — it is constant everywhere. Weight is the gravitational force on the body (W = mg) — it changes from place to place because g changes." },
    { heading: "Escape velocity", text: "The minimum velocity needed to project an object from a planet's surface so that it permanently escapes the planet's gravitational pull, never to return." },
  ],
  definitions: [
    { term: "Gravitation", def: "The force of attraction between any two objects in the universe." },
    { term: "Universal gravitational constant (G)", def: "The constant of proportionality in Newton's law of gravitation; numerically equal to the force of attraction between two 1 kg masses kept 1 m apart. G = 6.673 × 10⁻¹¹ N m² kg⁻²." },
    { term: "Acceleration due to gravity (g)", def: "The acceleration produced in a freely falling body due to the Earth's gravitational force alone." },
    { term: "Free fall", def: "The motion of a body falling under the influence of gravity alone, unaffected by any other force such as air resistance." },
    { term: "Escape velocity", def: "The minimum velocity with which a body must be projected from a planet's surface so as to just overcome the planet's gravitational pull and escape to infinity." },
    { term: "Weight", def: "The gravitational force with which a planet attracts a body; W = mg. It is a vector quantity measured in newton." },
  ],
  formulas: [
    {
      name: "Kepler's Third Law",
      formula: "T² ∝ r³   i.e.   T²/r³ = constant (K)",
      symbols: "T = period of revolution of the planet, r = mean distance of the planet from the Sun",
      units: "T in seconds, r in metres",
      notes: "This law compares different planets' orbits; it does NOT apply between a planet and its own satellite unless both orbit the same central body.",
      mistakes: "Students often write T ∝ r³ (forgetting the square) or forget that the law compares T² with r³, not r with T."
    },
    {
      name: "Newton's Law of Gravitation",
      formula: "F = G·m₁m₂/d²",
      symbols: "F = gravitational force, G = universal gravitational constant, m₁, m₂ = masses of the two objects, d = distance between their centres",
      units: "F in newton (N), m₁ & m₂ in kg, d in metre, G = 6.673 × 10⁻¹¹ N m² kg⁻²",
      notes: "If mass is doubled, F doubles. If distance is doubled, F becomes 1/4th (inverse SQUARE law).",
      mistakes: "Forgetting to square the distance d; using diameter instead of the distance between centres for non-point objects."
    },
    {
      name: "Weight",
      formula: "W = m × g",
      symbols: "W = weight, m = mass, g = acceleration due to gravity",
      units: "W in newton, m in kg, g in m/s²",
      notes: "Mass never changes with location; weight does, because g varies from planet to planet (and slightly with location on Earth).",
      mistakes: "Using mass and weight interchangeably; forgetting weight is a force (vector) while mass is a scalar."
    },
    {
      name: "Escape Velocity",
      formula: "v_esc = √(2GM/R)",
      symbols: "G = universal gravitational constant, M = mass of the planet, R = radius of the planet",
      units: "v_esc in m/s, M in kg, R in metre",
      notes: "For Earth, v_esc ≈ 11.2 km/s. Escape velocity does not depend on the mass of the escaping object.",
      mistakes: "Forgetting the square root; confusing escape velocity with orbital/critical velocity (different formula, seen in Chapter 10)."
    },
  ],
  tables: [
    {
      title: "Kepler's Laws — Quick Reference",
      headers: ["Law", "Statement"],
      rows: [
        ["First law (Law of orbits)", "The orbit of a planet is an ellipse with the Sun at one focus."],
        ["Second law (Law of areas)", "The line joining the planet and the Sun sweeps equal areas in equal intervals of time."],
        ["Third law (Law of periods)", "The square of a planet's period of revolution is directly proportional to the cube of its mean distance from the Sun (T² ∝ r³)."],
      ]
    },
  ],
  diagrams: [
    { src: "sci1-ch01-fig1-gravitation-concept.png", caption: "Fig 1.1 — Concept of gravitational force: the force between the Earth and a falling apple, and between the Earth and the Moon.", note: "Shows that the same force (gravity) acts on nearby and very distant objects alike." },
    { src: "sci1-ch01-fig2-kepler-second-law.png", caption: "Fig 1.4 — The elliptical orbit of a planet around the Sun (Kepler's second law: equal areas ASB and CSD are swept in equal time).", note: "This is one of the most frequently asked 'draw and explain' diagrams for Kepler's laws." },
    { src: "sci1-ch01-fig3-gravitational-force.png", caption: "Fig 1.5 — Gravitational force of attraction between two objects of mass m₁ and m₂ separated by distance d.", note: "Directly illustrates the law of gravitation formula F = Gm₁m₂/d²." },
  ],
  importantPoints: [
    "Kepler's laws were empirical (based on observation); Newton later explained WHY they hold true, using the law of gravitation.",
    "G is a universal constant — same everywhere in the universe. g is NOT universal — it depends on the planet's mass and radius.",
    "g is maximum at the Earth's surface and decreases both with height (above surface) and depth (below surface).",
    "All bodies, regardless of mass, fall with the same acceleration g in the absence of air resistance (Galileo's insight, explained by Newton's law).",
    "Escape velocity of Earth ≈ 11.2 km/s; it depends only on the planet (M, R), not on the mass of the object trying to escape.",
    "Weight varies from planet to planet and even slightly across Earth's surface (due to variation in g); mass never changes.",
  ],
  boardTips: [
    "The Kepler's second law diagram (elliptical orbit with equal swept areas) is a favourite 2–3 mark 'draw and label' question — practise drawing it quickly with S (Sun), the ellipse, and two equal shaded areas.",
    "Numericals on Newton's law of gravitation (finding F, or comparing F when m or d changes) and on escape velocity are frequently asked — memorise the two formulas and the value of G.",
    "A very common conceptual question: 'Why does an astronaut feel weightless in space, though gravity still acts on them?' — be ready to explain this using free fall.",
    "Common mistake to avoid: writing F ∝ 1/d instead of F ∝ 1/d² (inverse square law) — this single error costs marks in multiple questions.",
    "Distinguish mass vs weight is a guaranteed 1–2 mark question nearly every year — know at least 3 points of difference.",
  ],
  revisionSummary: [
    "Kepler's 3 laws: orbit is ellipse (1st), equal areas in equal time (2nd), T² ∝ r³ (3rd).",
    "Newton's law: F = Gm₁m₂/d²; G = 6.673 × 10⁻¹¹ N m² kg⁻².",
    "g = GM/R² — independent of the falling object's own mass.",
    "g decreases with height AND with depth; maximum at Earth's surface.",
    "Free fall = motion under gravity alone, no other force.",
    "W = mg (weight is a force, unit newton); mass is constant, weight varies with g.",
    "Escape velocity, v_esc = √(2GM/R); for Earth ≈ 11.2 km/s.",
  ],
},

// ============================================================ CHAPTER 2 ===
2: {
  title: "Periodic Classification of Elements",
  intro: "This chapter traces how scientists organised the elements — from Döbereiner's triads and Newlands' octaves, through Mendeleev's periodic table, to the modern periodic table based on atomic number — and explains the trends in properties (atomic radius, metallic character, valency) seen across periods and groups.",
  objectives: [
    "Describe the early attempts at classification: Döbereiner's triads and Newlands' law of octaves.",
    "State Mendeleev's periodic law and identify the merits and demerits of his table.",
    "State the modern periodic law and describe the structure of the modern periodic table.",
    "Relate electronic configuration to the position (group and period) of an element.",
    "Explain periodic trends in atomic radius, metallic and non-metallic character.",
  ],
  concepts: [
    { heading: "Early attempts at classification", text: "Döbereiner's triads: groups of 3 elements where the middle element's atomic weight ≈ average of the other two (e.g. Li, Na, K). Newlands' octaves: arranging elements by atomic weight, every 8th element repeated properties — worked only up to calcium." },
    { heading: "Mendeleev's periodic table", text: "Arranged elements in order of increasing atomic weight; elements with similar properties fell into the same group. Mendeleev left gaps for undiscovered elements and predicted their properties, but hydrogen's position stayed uncertain and a few elements (Co-Ni, Ar-K) fell out of strict weight order." },
    { heading: "Moseley's contribution & the Modern Periodic Law", text: "Henry Moseley showed that atomic number (not atomic weight) is the fundamental property. Modern periodic law: properties of elements are a periodic function of their atomic number." },
    { heading: "Structure of the modern periodic table", text: "Elements are arranged in 7 horizontal periods and 18 vertical groups, in increasing order of atomic number. The number of shells decides the period; the number of valence electrons (for groups 1, 2, 13–18) decides the group." },
    { heading: "Periodic trends", text: "Across a period (left to right): atomic radius decreases, non-metallic character increases, metallic character decreases. Down a group: the opposite trend is seen." },
  ],
  definitions: [
    { term: "Döbereiner's triads", def: "Sets of three elements with similar chemical properties in which the atomic weight of the middle element is roughly the arithmetic mean of the other two." },
    { term: "Newlands' Law of Octaves", def: "When elements are arranged in increasing order of atomic weight, the properties of every eighth element are a repetition of the properties of the first." },
    { term: "Mendeleev's Periodic Law", def: "The physical and chemical properties of elements are a periodic function of their atomic weights." },
    { term: "Modern Periodic Law", def: "The physical and chemical properties of elements are a periodic function of their atomic number." },
    { term: "Period", def: "A horizontal row in the periodic table; elements in a period have the same number of electron shells." },
    { term: "Group", def: "A vertical column in the periodic table; elements in a group have the same number of valence electrons and show similar chemical properties." },
    { term: "Atomic radius", def: "The distance from the centre of the nucleus of an atom to its outermost shell." },
    { term: "Electropositivity (metallic character)", def: "The tendency of an atom to lose electrons and form a cation." },
    { term: "Electronegativity (non-metallic character)", def: "The tendency of an atom to gain electrons and form an anion." },
  ],
  formulas: [],
  tables: [
    {
      title: "Merits & Demerits of Mendeleev's Periodic Table",
      headers: ["Merits", "Demerits"],
      rows: [
        ["Elements with similar properties grouped together", "Position of hydrogen not clearly fixed"],
        ["Left gaps and successfully predicted properties of undiscovered elements", "No place for isotopes"],
        ["Corrected some wrongly-estimated atomic weights", "A few elements placed out of atomic-weight order (e.g. Co & Ni, Ar & K)"],
      ]
    },
    {
      title: "Modern Periodic Table — key facts",
      headers: ["Feature", "Detail"],
      rows: [
        ["Basis of arrangement", "Increasing atomic number"],
        ["Number of periods", "7"],
        ["Number of groups", "18"],
        ["Period number equals", "Number of electron shells"],
        ["Group (1,2,13–18) number relates to", "Number of valence electrons"],
      ]
    },
  ],
  diagrams: [
    { src: "sci1-ch02-fig1-modern-periodic-table.png", caption: "Table 2.7 — The Modern Periodic Table (elements arranged by increasing atomic number into periods & groups, with s-, p-, d-, f-block regions).", note: "Keep this open while revising groups/periods and electronic configuration questions." },
    { src: "sci1-ch02-fig2-periodic-trends.png", caption: "Fig 2.10 — Periodic trends: direction of increasing/decreasing atomic radius, electronegativity, electropositivity and metallic/non-metallic character across periods and groups.", note: "One of the most commonly asked 'explain with a diagram' items in this chapter." },
  ],
  importantPoints: [
    "Order of classification attempts: Döbereiner's triads → Newlands' octaves → Mendeleev's table → Modern periodic table (Moseley, based on atomic number).",
    "Mendeleev's table is based on atomic WEIGHT; the Modern periodic table is based on atomic NUMBER — this single change fixed most of Mendeleev's anomalies.",
    "In the modern periodic table: 7 periods, 18 groups.",
    "Within a period, atomic radius decreases left→right (nuclear charge increases while shell number stays same).",
    "Within a group, atomic radius increases top→bottom (an extra shell is added each time).",
    "Metals lie to the left/bottom-left of the table; non-metals to the right; metalloids lie along the zig-zag border line.",
  ],
  boardTips: [
    "A very frequent question: 'State merits and demerits of Mendeleev's periodic table' — prepare at least 2 merits and 2 demerits with examples (Co-Ni, Ar-K anomaly).",
    "Be ready to state the Modern Periodic Law exactly in words — a direct 1-mark question almost every year.",
    "Learn to explain periodic trends (atomic radius, metallic character) using the periodic-trends diagram (Fig 2.10) — a common 'explain with diagram' question.",
    "Given the electronic configuration of an element, be able to state its period and group — a standard numerical/application question.",
    "Common mistake: confusing 'group' (vertical, same valence electrons) with 'period' (horizontal, same number of shells) — many students mix these up under exam pressure.",
  ],
  revisionSummary: [
    "Döbereiner's triads: 3 elements, middle atomic weight = average of other two.",
    "Newlands' octaves: every 8th element repeats properties (worked only up to Ca).",
    "Mendeleev's law: properties are periodic function of atomic WEIGHT.",
    "Modern periodic law: properties are periodic function of atomic NUMBER (Moseley).",
    "Modern table: 7 periods (= number of shells), 18 groups (≈ valence electrons for groups 1,2,13–18).",
    "Across a period →: atomic radius ↓, non-metallic character ↑, metallic character ↓.",
    "Down a group ↓: atomic radius ↑, metallic character ↑.",
  ],
},

// ============================================================ CHAPTER 3 ===
3: {
  title: "Chemical Reactions and Equations",
  intro: "This chapter covers how to write and balance chemical equations, the four basic types of chemical reactions (combination, decomposition, displacement, double displacement), energy changes in reactions, factors affecting reaction rate, and oxidation–reduction (redox) reactions including everyday examples like corrosion and rancidity.",
  objectives: [
    "Write word equations and balanced chemical equations for given reactions.",
    "Classify a reaction as combination, decomposition, displacement or double displacement.",
    "Distinguish between exothermic and endothermic reactions.",
    "List the factors affecting the rate of a chemical reaction.",
    "Explain oxidation, reduction and redox reactions using the electronic concept.",
    "Explain corrosion and rancidity as everyday redox phenomena, and their prevention.",
  ],
  concepts: [
    { heading: "Chemical equations & balancing", text: "A reaction is represented using symbols/formulae of reactants and products, e.g. Zn + H₂SO₄ → ZnSO₄ + H₂. Equations must be balanced by adjusting coefficients (never subscripts) so the number of atoms of each element matches on both sides (law of conservation of mass)." },
    { heading: "The four basic reaction types", text: "Combination (A+B→AB), Decomposition (AB→A+B, usually needs heat/light/electricity), Displacement (a more reactive element displaces a less reactive one) and Double displacement (two compounds exchange ions, often forming a precipitate) — see the table below for examples." },
    { heading: "Exothermic & endothermic reactions", text: "Exothermic reactions release heat to the surroundings (temperature rises); endothermic reactions absorb heat from the surroundings (temperature falls)." },
    { heading: "Rate of reaction & factors affecting it", text: "Rate of reaction is affected by concentration of reactants, temperature, surface area (particle size) and the presence of a catalyst." },
    { heading: "Oxidation, reduction and redox", text: "Oxidation = loss of electrons; Reduction = gain of electrons. Both always occur together in the same reaction — this is called a redox reaction." },
    { heading: "Corrosion & rancidity — everyday redox", text: "Corrosion is the slow destruction of a metal due to reaction with moisture/gases in air (e.g. rusting of iron, which needs both air and moisture). Rancidity is the oxidation of fats/oils in food over time, causing bad smell/taste; prevented by antioxidants, airtight storage or refrigeration." },
  ],
  definitions: [
    { term: "Chemical equation", def: "The symbolic representation of a chemical reaction, showing reactants, products, and their relative amounts." },
    { term: "Exothermic reaction", def: "A chemical reaction in which heat is released to the surroundings." },
    { term: "Endothermic reaction", def: "A chemical reaction in which heat is absorbed from the surroundings." },
    { term: "Oxidation", def: "A reaction in which a substance loses electrons (or gains oxygen / loses hydrogen)." },
    { term: "Reduction", def: "A reaction in which a substance gains electrons (or loses oxygen / gains hydrogen)." },
    { term: "Redox reaction", def: "A reaction in which oxidation and reduction occur simultaneously." },
    { term: "Corrosion", def: "The gradual deterioration of a metal on its surface due to chemical reaction (usually oxidation) with substances present in the environment." },
    { term: "Rancidity", def: "Oxidation of fats/oils in food substances, resulting in a change in taste and smell." },
  ],
  formulas: [],
  tables: [
    {
      title: "Types of Chemical Reactions — Quick Reference",
      headers: ["Type", "General Form", "Example"],
      rows: [
        ["Combination", "A + B → AB", "2Mg + O₂ → 2MgO"],
        ["Decomposition", "AB → A + B", "CaCO₃ →(Δ)→ CaO + CO₂"],
        ["Displacement", "A + BC → AC + B", "Fe + CuSO₄ → FeSO₄ + Cu"],
        ["Double displacement", "AB + CD → AD + CB", "AgNO₃ + NaCl → AgCl↓ + NaNO₃"],
      ]
    },
  ],
  diagrams: [
    { src: "sci1-ch03-fig1-decomposition-caco3.png", caption: "Fig 3.6 — Decomposition of calcium carbonate: heating CaCO₃ turns freshly prepared lime water milky (CO₂ test).", note: "A classic apparatus diagram for 'decomposition reaction' questions." },
    { src: "sci1-ch03-fig2-rusting-mechanism.png", caption: "Electrochemical mechanism of rusting: oxidation of iron at the anode region and reduction of oxygen at the cathode region under a water droplet.", note: "Useful for explaining corrosion as a redox process." },
    { src: "sci1-ch03-fig3-rusting-setup.png", caption: "Fig 3.7 — Apparatus 'to study rusting': comparing iron nails in different conditions (dry air, boiled water + oil layer, salt solution, air + calcium chloride) to identify the conditions necessary for rusting.", note: "Shows that both air (oxygen) and moisture are needed for rusting." },
  ],
  importantPoints: [
    "Balancing equations: adjust only the coefficients in front of formulae, never the subscripts within a formula.",
    "Four basic reaction types: combination, decomposition, displacement, double displacement — learn one clear example of each.",
    "Decomposition is the reverse idea of combination.",
    "In a redox reaction, the substance that is oxidised is the reducing agent; the substance that is reduced is the oxidising agent.",
    "Rusting needs BOTH air (oxygen) and moisture — remove either one and rusting stops.",
    "Rate of reaction increases with: higher concentration, higher temperature, smaller particle size (larger surface area), and use of a catalyst.",
  ],
  boardTips: [
    "Balancing chemical equations is compulsory practice — practise at least 10–15 equations of different types before the exam.",
    "'Identify the type of reaction' questions are extremely common — practise classifying 8–10 given equations quickly.",
    "A favourite reasoning question: 'Why should a magnesium ribbon be cleaned before burning?' (to remove the layer of MgO that prevents burning) — know 2–3 such reasoning answers.",
    "Rusting/corrosion and its prevention (painting, galvanising, oiling, alloying) is asked almost every year, sometimes with the electrochemical mechanism.",
    "Common mistake: writing an unbalanced equation correctly in words but leaving the symbolic equation unbalanced — always double check atom counts before submitting.",
  ],
  revisionSummary: [
    "Chemical equation = symbolic form of a reaction; must be balanced (law of conservation of mass).",
    "4 reaction types: Combination (A+B→AB), Decomposition (AB→A+B), Displacement (A+BC→AC+B), Double displacement (AB+CD→AD+CB).",
    "Exothermic = releases heat; Endothermic = absorbs heat.",
    "Rate of reaction ↑ with: concentration ↑, temperature ↑, surface area ↑, catalyst present.",
    "Oxidation = loss of electrons; Reduction = gain of electrons; both occur together (redox).",
    "Rusting needs air + moisture together; corrosion prevented by painting, oiling, galvanising, alloying.",
    "Rancidity = oxidation of fats/oils in food; prevented by antioxidants, airtight storage, refrigeration.",
  ],
},

// ============================================================ CHAPTER 4 ===
4: {
  title: "Effects of Electric Current",
  intro: "This chapter covers the heating and magnetic effects of electric current — how a current-carrying wire produces a magnetic field, how that principle is used in a solenoid, an electric motor and an electric generator, and the basic difference between AC and DC.",
  objectives: [
    "State the relation between current, voltage and resistance (Ohm's law) and use it in numericals.",
    "Describe the magnetic field produced around a current-carrying conductor, loop and solenoid.",
    "Explain the working of an electric motor and an electric generator with labelled diagrams.",
    "Distinguish between AC and DC.",
  ],
  concepts: [
    { heading: "Ohm's law", text: "At constant temperature, the current through a conductor is directly proportional to the potential difference across it." },
    { heading: "Magnetic effect of current (Oersted's discovery)", text: "A current-carrying conductor produces a magnetic field around it. A compass needle placed near the wire gets deflected." },
    { heading: "Right-hand thumb rule", text: "If the thumb of the right hand points in the direction of current flow, the curled fingers show the direction of the magnetic field lines around the conductor." },
    { heading: "Solenoid", text: "A coil of many circular turns of insulated wire. The magnetic field pattern of a current-carrying solenoid is similar to that of a bar magnet, with distinct N and S poles." },
    { heading: "Electric motor", text: "A device that converts electrical energy into mechanical energy, based on the fact that a current-carrying conductor placed in a magnetic field experiences a force (Fleming's left-hand rule)." },
    { heading: "Electric generator", text: "A device that converts mechanical energy into electrical energy, based on electromagnetic induction — a changing magnetic field through a coil induces a current in it (Fleming's right-hand rule)." },
    { heading: "AC and DC", text: "Direct Current (DC) flows in one direction only. Alternating Current (AC) periodically reverses its direction; household supply in India is AC at 220V, 50Hz." },
  ],
  definitions: [
    { term: "Ohm's law", def: "At constant temperature, the current (I) flowing through a conductor is directly proportional to the potential difference (V) across its ends: V = IR." },
    { term: "Resistance", def: "The opposition offered by a conductor to the flow of electric current through it." },
    { term: "Solenoid", def: "A long coil of wire wound in the form of closely spaced circular turns, which produces a magnetic field similar to a bar magnet when current flows through it." },
    { term: "Electromagnetic induction", def: "The phenomenon of producing an induced current in a coil due to a change in the magnetic field/flux linked with it." },
    { term: "Alternating Current (AC)", def: "Electric current whose direction reverses periodically." },
    { term: "Direct Current (DC)", def: "Electric current that flows in one direction only." },
  ],
  formulas: [
    {
      name: "Ohm's Law",
      formula: "V = I × R",
      symbols: "V = potential difference, I = current, R = resistance",
      units: "V in volt, I in ampere, R in ohm (Ω)",
      notes: "Valid only when temperature is kept constant.",
      mistakes: "Mixing up which quantity to solve for; forgetting units when substituting values."
    },
  ],
  tables: [],
  diagrams: [
    { src: "sci1-ch04-fig1-electric-circuit.png", caption: "Fig 4.2 — A simple electric circuit.", note: "Base diagram for all Ohm's law numericals." },
    { src: "sci1-ch04-fig5-solenoid.png", caption: "Fig 4.9 — Magnetic field produced by a current-carrying solenoid.", note: "Note how the field pattern resembles a bar magnet, with N and S poles at the two ends." },
    { src: "sci1-ch04-fig6-electric-motor.png", caption: "Fig 4.13 — Electric motor: principle and working (split rings, carbon brushes, axle).", note: "One of the most frequently asked 'draw a labelled diagram and explain' questions in this chapter." },
    { src: "sci1-ch04-fig7-electric-generator.png", caption: "Fig 4.20 — Electric generator (coil rotating between magnetic poles, conducting rings and brushes).", note: "Pairs with the motor diagram — students often mix up the two, so revise both together and note the difference." },
  ],
  importantPoints: [
    "Motor: electrical energy → mechanical energy (uses Fleming's LEFT-hand rule). Generator: mechanical energy → electrical energy (uses Fleming's RIGHT-hand rule). Do not swap these.",
    "The magnetic field of a solenoid resembles that of a bar magnet — this is why a solenoid with a soft iron core becomes an electromagnet.",
    "AC changes direction periodically; DC does not. Indian household supply is AC, 220 V, 50 Hz.",
    "In Ohm's law, R must be constant — Ohm's law fails for non-ohmic devices where temperature changes significantly.",
  ],
  boardTips: [
    "The electric motor and electric generator diagrams are near-guaranteed 3–4 mark questions — practise drawing both from memory with all labels (brushes, split ring/slip ring, axle, magnetic poles).",
    "Ohm's law numericals (find V, I or R given the other two) are almost always asked — practise substitution and unit consistency.",
    "A common reasoning question: 'Why is a soft iron core used inside a solenoid to make an electromagnet?' — know this answer (soft iron magnetises quickly and demagnetises quickly, unlike steel).",
    "Common mistake: confusing the split-ring commutator (used in a DC motor, reverses connection every half turn) with the slip rings (used in an AC generator, no reversal).",
  ],
  revisionSummary: [
    "Ohm's law: V = IR (temperature constant).",
    "Right-hand thumb rule → direction of magnetic field around a straight current-carrying wire.",
    "Solenoid's magnetic field pattern ≈ bar magnet's field pattern.",
    "Motor: electrical → mechanical energy, Fleming's LEFT-hand rule, uses split-ring commutator.",
    "Generator: mechanical → electrical energy, Fleming's RIGHT-hand rule, uses slip rings (AC) or commutator (DC).",
    "AC reverses direction periodically; DC flows one way only. India: 220V, 50Hz AC supply.",
  ],
},

// ============================================================ CHAPTER 5 ===
5: {
  title: "Heat",
  intro: "This chapter explains temperature vs. heat, what happens when ice is heated right through to steam (change of state), the anomalous behaviour of water, and specific heat capacity — how different substances need different amounts of heat to raise their temperature.",
  objectives: [
    "Distinguish between heat and temperature.",
    "Explain, with a graph, the changes of state occurring when ice is continuously heated.",
    "State the anomalous behaviour of water and its significance.",
    "Define specific heat capacity and use it in simple numericals.",
  ],
  concepts: [
    { heading: "Heat vs temperature", text: "Heat is a form of energy that flows from a hotter body to a colder one; temperature is the degree of hotness/coldness, measured by a thermometer." },
    { heading: "Change of state on heating ice", text: "As ice is heated: temperature rises to 0°C, then stays constant while ice melts to water (latent heat of fusion absorbed), then temperature rises to 100°C, then stays constant while water boils to steam (latent heat of vaporisation absorbed)." },
    { heading: "Anomalous behaviour of water", text: "Unlike most substances, water contracts on heating from 0°C to 4°C and expands on further heating beyond 4°C — so water has its MAXIMUM density at 4°C, not at 0°C. This is why ice floats and lakes freeze from the top down, letting aquatic life survive below." },
    { heading: "Specific heat capacity", text: "Different substances require different amounts of heat to raise the temperature of a given mass by 1°C — this quantity is the specific heat capacity, measured using Hope's apparatus for water's anomalous expansion, or by the method of mixtures for general substances." },
  ],
  definitions: [
    { term: "Heat", def: "A form of energy that flows from a body at higher temperature to a body at lower temperature." },
    { term: "Temperature", def: "A measure of the degree of hotness or coldness of a body." },
    { term: "Latent heat", def: "The heat absorbed or released during a change of state, without any change in temperature." },
    { term: "Specific heat capacity", def: "The amount of heat required to raise the temperature of a unit mass of a substance by 1°C (or 1 K)." },
  ],
  formulas: [
    {
      name: "Heat required to change temperature",
      formula: "Q = m × c × ΔT",
      symbols: "Q = heat energy, m = mass, c = specific heat capacity, ΔT = change in temperature",
      units: "Q in joule, m in kg, c in J/(kg·°C), ΔT in °C",
      notes: "Applies only when there is NO change of state; during a change of state, use latent heat instead.",
      mistakes: "Applying Q = mcΔT across a change of state (e.g. across the melting plateau) — this is wrong because temperature doesn't change there."
    },
  ],
  tables: [],
  diagrams: [
    { src: "sci1-ch05-fig1-heating-curve.png", caption: "Fig 5.2 — Temperature vs. Time graph for ice heated continuously to steam, showing the flat plateaus at 0°C (melting) and 100°C (boiling).", note: "One of the most important diagrams in the chapter — a very frequent 'draw and explain' question." },
    { src: "sci1-ch05-fig2-hopes-apparatus.png", caption: "Fig 5.5 — Hope's apparatus, used to demonstrate that water has its maximum density at 4°C.", note: "Standard diagram for the anomalous-expansion-of-water topic." },
  ],
  importantPoints: [
    "During melting and boiling, temperature stays CONSTANT even though heat is continuously being supplied — this heat is the latent heat, used to change the state, not the temperature.",
    "Water has maximum density at 4°C (not at 0°C) — this is the anomalous behaviour of water.",
    "Because ice is less dense than water, ice floats — ponds freeze from the top, insulating the water below and letting aquatic life survive in winter.",
    "Specific heat capacity of water is unusually high — this is why water is used as a coolant and why coastal areas have a moderate climate.",
  ],
  boardTips: [
    "The temperature vs. time heating-curve graph (ice → water → steam) is asked almost every year — practise drawing it neatly with both flat regions correctly labelled (melting point, boiling point).",
    "'Why does ice float on water?' and 'Why do fish survive in a frozen lake?' are classic reasoning questions based on anomalous expansion — prepare a 2–3 line answer.",
    "Know the exact meaning of 'maximum density of water is at 4°C' — a commonly misunderstood point (students often say 0°C by mistake).",
    "Common mistake: forgetting that Q = mcΔT does NOT apply during melting/boiling (temperature is constant there, so ΔT = 0 for that portion).",
  ],
  revisionSummary: [
    "Heat = energy in transit (hot → cold); Temperature = degree of hotness.",
    "Heating curve of ice: rises to 0°C → flat (melting) → rises to 100°C → flat (boiling) → rises further as steam.",
    "Water's anomalous behaviour: maximum density at 4°C, not 0°C.",
    "Ice floats because it is less dense than water at 0°C.",
    "Specific heat capacity: heat needed to raise 1 kg of a substance by 1°C — Q = mcΔT (only when no change of state).",
    "Hope's apparatus demonstrates water's maximum density at 4°C.",
  ],
},

// ============================================================ CHAPTER 6 ===
6: {
  title: "Refraction of Light",
  intro: "This chapter covers how and why light bends when it passes from one medium to another (refraction), refraction through a glass slab, dispersion of white light into a spectrum, and total internal reflection.",
  objectives: [
    "Explain refraction of light and the laws of refraction.",
    "Draw and explain the path of light through a rectangular glass slab (lateral displacement).",
    "Explain dispersion of light through a prism.",
    "Distinguish between partial reflection and total internal reflection, and state the conditions for TIR.",
  ],
  concepts: [
    { heading: "Refraction of light", text: "When light travels from one transparent medium to another, it changes speed and bends at the boundary — this bending is refraction. Light bends towards the normal when entering a denser medium, and away from the normal when entering a rarer medium." },
    { heading: "Refraction through a glass slab", text: "Light entering a glass slab bends towards the normal, and on exiting, bends away from the normal by an equal angle — so the emergent ray is parallel to the incident ray but laterally displaced." },
    { heading: "Dispersion of light", text: "White light splits into its seven constituent colours (VIBGYOR) when passed through a glass prism, because each colour (wavelength) bends by a slightly different amount." },
    { heading: "Total internal reflection (TIR)", text: "When light travels from a denser to a rarer medium at an angle of incidence greater than the critical angle, it is completely reflected back into the denser medium instead of refracting out." },
  ],
  definitions: [
    { term: "Refraction", def: "The bending of light as it passes obliquely from one transparent medium to another of different optical density." },
    { term: "Dispersion of light", def: "The splitting of white light into its seven constituent colours (VIBGYOR) on passing through a prism." },
    { term: "Critical angle", def: "The angle of incidence in the denser medium for which the angle of refraction in the rarer medium becomes exactly 90°." },
    { term: "Total internal reflection", def: "The phenomenon in which light travelling from a denser to a rarer medium, at an angle of incidence greater than the critical angle, is completely reflected back into the denser medium." },
  ],
  formulas: [],
  tables: [],
  diagrams: [
    { src: "sci1-ch06-fig1-refraction-glass-slab.png", caption: "Fig 6.1 — Refraction of light passing through a glass slab, showing lateral displacement of the emergent ray.", note: "A classic 'draw a labelled diagram' question." },
    { src: "sci1-ch06-fig2-dispersion-prism.png", caption: "Fig 6.8 — Dispersion of white light through a glass prism into VIBGYOR.", note: "Always label the colours in the correct order: Violet, Indigo, Blue, Green, Yellow, Orange, Red." },
    { src: "sci1-ch06-fig3-total-internal-reflection.png", caption: "Fig 6.9 — Partial reflection and total internal reflection at a denser-to-rarer medium boundary.", note: "Shows the critical angle condition clearly." },
  ],
  importantPoints: [
    "Light bends TOWARDS the normal when entering a denser medium, and AWAY from the normal when entering a rarer medium.",
    "In a glass slab, the emergent ray is parallel to the incident ray, but laterally displaced — it is NOT undeviated.",
    "VIBGYOR order (Violet bends the most, Red the least) — violet has the shortest wavelength and bends most.",
    "Total internal reflection needs TWO conditions: (1) light must travel from denser to rarer medium, (2) angle of incidence must be greater than the critical angle.",
  ],
  boardTips: [
    "'Draw a diagram to show refraction through a glass slab and mark the lateral displacement' is a very standard question.",
    "Dispersion through a prism — remember the VIBGYOR order and that violet deviates the most (bends most) while red deviates the least.",
    "Total internal reflection is the working principle behind optical fibres and mirages — a common application-based question.",
    "Common mistake: saying light 'has no bending' in a glass slab — it does bend at both surfaces, it just ends up travelling parallel to its original direction (not along the same line).",
  ],
  revisionSummary: [
    "Refraction = bending of light at the boundary of two media of different density.",
    "Denser medium → bends towards normal; rarer medium → bends away from normal.",
    "Glass slab: emergent ray is parallel to incident ray but laterally displaced.",
    "Dispersion: white light → VIBGYOR through a prism (violet bends most, red least).",
    "TIR needs: denser→rarer medium AND angle of incidence > critical angle.",
  ],
},

// ============================================================ CHAPTER 7 ===
7: {
  title: "Lenses",
  intro: "This chapter covers convex and concave lenses, ray diagrams for image formation, the lens formula and magnification, power of a lens, the working of the human eye, and common defects of vision and their correction.",
  objectives: [
    "Draw ray diagrams for image formation by convex and concave lenses for different object positions.",
    "State and use the lens formula and the formula for power of a lens.",
    "Explain the structure and working of the human eye with a labelled diagram.",
    "Explain myopia and hypermetropia, their causes, and their correction using lenses.",
  ],
  concepts: [
    { heading: "Convex and concave lens", text: "A convex lens is thicker at the centre and converges light rays to a focus (converging lens). A concave lens is thinner at the centre and spreads light rays out (diverging lens)." },
    { heading: "Image formation by a convex lens", text: "Depending on the object's position relative to F and 2F, a convex lens forms images that are real/virtual, inverted/erect, and magnified/diminished/same-size — summarised in the ray-diagram rules." },
    { heading: "Image formation by a concave lens", text: "A concave lens always forms a virtual, erect, and smaller image, regardless of the object's position." },
    { heading: "Lens formula and magnification", text: "The lens formula relates object distance (u), image distance (v), and focal length (f). Magnification is the ratio of image height to object height, and also equals v/u." },
    { heading: "Power of a lens", text: "Power measures how strongly a lens converges or diverges light; it is the reciprocal of focal length (in metres), measured in dioptre." },
    { heading: "The human eye", text: "Light enters through the cornea, passes through the pupil (controlled by the iris), and is focused by the crystalline (convex) lens onto the retina, which converts light into signals sent to the brain via the optic nerve." },
    { heading: "Myopia (near-sightedness)", text: "Distant objects appear blurred because the image forms in front of the retina. Corrected using a concave lens." },
    { heading: "Hypermetropia (far-sightedness)", text: "Nearby objects appear blurred because the image forms behind the retina. Corrected using a convex lens." },
  ],
  definitions: [
    { term: "Principal focus of a lens", def: "The point on the principal axis where rays parallel to the axis converge (convex lens) or appear to diverge from (concave lens), after refraction." },
    { term: "Focal length", def: "The distance between the optical centre and the principal focus of a lens." },
    { term: "Power of a lens", def: "The reciprocal of the focal length (in metres) of a lens; measured in dioptre (D). Convex lens has positive power, concave lens has negative power." },
    { term: "Myopia", def: "A defect of vision in which a person can see nearby objects clearly but cannot see distant objects clearly, because the image forms in front of the retina; corrected using a concave lens." },
    { term: "Hypermetropia", def: "A defect of vision in which a person can see distant objects clearly but cannot see nearby objects clearly, because the image forms behind the retina; corrected using a convex lens." },
    { term: "Near point", def: "The closest distance at which an object can be seen clearly without strain; for a normal eye, this is 25 cm." },
  ],
  formulas: [
    {
      name: "Lens formula",
      formula: "1/v − 1/u = 1/f",
      symbols: "v = image distance, u = object distance, f = focal length",
      units: "all distances in the same unit (usually cm or m)",
      notes: "Use the Cartesian sign convention: distances measured against the direction of incident light are negative; object distance u is always negative (object placed to the left).",
      mistakes: "Forgetting sign convention — a very common source of wrong answers in numericals."
    },
    {
      name: "Magnification",
      formula: "M = h₂/h₁ = v/u",
      symbols: "h₂ = height of image, h₁ = height of object, v = image distance, u = object distance",
      units: "no unit (ratio)",
      notes: "Negative M means the image is inverted; positive M means the image is erect.",
      mistakes: "Forgetting the negative sign, which indicates whether the image is inverted or erect."
    },
    {
      name: "Power of a lens",
      formula: "P = 1/f (in metres)",
      symbols: "P = power, f = focal length",
      units: "P in dioptre (D), f in metre",
      notes: "Convex lens: f positive → P positive. Concave lens: f negative → P negative.",
      mistakes: "Forgetting to convert focal length from cm to metres before calculating power."
    },
  ],
  tables: [
    {
      title: "Image formed by a convex lens — position of object vs image",
      headers: ["Position of object", "Position of image", "Nature of image"],
      rows: [
        ["At infinity", "At focus F₂", "Real, inverted, point-sized"],
        ["Beyond 2F₁", "Between F₂ and 2F₂", "Real, inverted, diminished"],
        ["At 2F₁", "At 2F₂", "Real, inverted, same size"],
        ["Between F₁ and 2F₁", "Beyond 2F₂", "Real, inverted, magnified"],
        ["At focus F₁", "At infinity", "Real, inverted, highly magnified"],
        ["Between F₁ and optical centre O", "Same side as object", "Virtual, erect, magnified"],
      ]
    },
  ],
  diagrams: [
    { src: "sci1-ch07-fig1-convex-lens-ray.png", caption: "Fig 7.7 — Ray diagram: real image formed by a convex lens when the object is beyond 2F₁.", note: "Learn the three ray-diagram rules (parallel ray, ray through focus, ray through optical centre) and be able to apply them for any object position." },
    { src: "sci1-ch07-fig2-concave-lens-ray.png", caption: "Fig 7.9 — Ray diagram: image formed by a concave lens (always virtual, erect, diminished).", note: "Compare directly with the convex-lens diagram — a common exam pairing." },
    { src: "sci1-ch07-fig3-human-eye.png", caption: "Fig 7.11 — Structure of the human eye (cornea, iris, pupil, crystalline lens, retina, optic nerve).", note: "Must-know labelled diagram — asked almost every year." },
    { src: "sci1-ch07-fig4-myopia.png", caption: "Fig 7.13 — Myopia (near-sightedness) and its correction using a concave lens.", note: "Draw both the defect and the correction side by side." },
    { src: "sci1-ch07-fig5-hypermetropia.png", caption: "Fig 7.14 — Hypermetropia (far-sightedness) and its correction using a convex lens.", note: "The mirror-image companion to the myopia diagram — revise both together." },
  ],
  importantPoints: [
    "Convex lens = converging; concave lens = diverging.",
    "A concave lens ALWAYS forms a virtual, erect, diminished image — no exceptions, regardless of object position.",
    "A convex lens's image type depends entirely on where the object is placed relative to F and 2F (use the summary table).",
    "Myopia → distant blur, image in front of retina → correct with CONCAVE lens (negative power).",
    "Hypermetropia → near blur, image behind retina → correct with CONVEX lens (positive power).",
    "Normal near point of the human eye = 25 cm; normal far point = infinity.",
  ],
  boardTips: [
    "Ray diagrams for convex lens image formation (for at least 2–3 object positions) are compulsory practice — know the 3 rules cold.",
    "The human eye diagram with all labels (cornea, iris, pupil, lens, retina, optic nerve) is asked almost every year — practise it until you can draw it in under 2 minutes.",
    "Myopia and hypermetropia — know the cause, the diagram of the defect, AND the diagram of its correction; these are usually asked together.",
    "Lens formula and power numericals are very frequent — always apply sign convention carefully (object distance is negative).",
    "Common mistake: forgetting that magnification v/u also carries a sign — losing marks on whether the image is erect or inverted.",
  ],
  revisionSummary: [
    "Convex lens = converging; concave lens = diverging (always virtual, erect, smaller image).",
    "Lens formula: 1/v − 1/u = 1/f. Magnification: M = h₂/h₁ = v/u.",
    "Power: P = 1/f(m), unit dioptre; convex → +P, concave → −P.",
    "Eye: cornea → pupil (iris-controlled) → crystalline lens → retina → optic nerve → brain.",
    "Myopia: distant blur, image in front of retina, corrected by CONCAVE lens.",
    "Hypermetropia: near blur, image behind retina, corrected by CONVEX lens.",
    "Normal near point = 25 cm; normal far point = infinity.",
  ],
},

// ============================================================ CHAPTER 8 ===
8: {
  title: "Metallurgy",
  intro: "This chapter covers the physical and chemical properties of metals and non-metals, the reactivity series, and metallurgy — how metals are extracted from their ores (concentration, extraction, refining) and protected from corrosion.",
  objectives: [
    "Compare the physical and chemical properties of metals and non-metals.",
    "State the reactivity series and use it to predict displacement reactions.",
    "Explain the steps of metallurgy: concentration of ore, extraction of metal, refining.",
    "Explain methods used to prevent corrosion of metals.",
  ],
  concepts: [
    { heading: "Reactivity series", text: "An arrangement of metals in decreasing order of reactivity. A more reactive metal can displace a less reactive metal from its salt solution. Very reactive metals (K, Na, Ca) are extracted by electrolysis; moderately reactive metals (Zn, Fe, Cu) by reduction of their oxides; least reactive metals (Ag, Au) occur in free state." },
    { heading: "Concentration of ore", text: "Removing unwanted impurities (gangue) from the ore before extraction. Common methods: froth floatation (for sulphide ores, using the different wettability of ore and gangue particles by oil/water) and magnetic separation (for magnetic ores)." },
    { heading: "Extraction of metals", text: "Reactive metals are extracted by electrolytic reduction of their molten compounds (e.g. aluminium from alumina). Moderately reactive metals are extracted by roasting/calcination followed by reduction with carbon or a more reactive metal." },
    { heading: "Corrosion and its prevention", text: "Corrosion is the gradual destruction of a metal due to reaction with air/moisture (e.g. rusting of iron). It is prevented by isolating the metal surface from air/moisture using methods like galvanising, painting, oiling, anodising, or alloying." },
  ],
  definitions: [
    { term: "Mineral", def: "A naturally occurring compound of a metal, found in the earth's crust, along with impurities." },
    { term: "Ore", def: "A mineral from which a metal can be extracted profitably and conveniently." },
    { term: "Gangue", def: "The unwanted earthy/rocky impurities present in an ore." },
    { term: "Reactivity series", def: "An arrangement of metals in the decreasing order of their chemical reactivity." },
    { term: "Roasting", def: "Strongly heating a sulphide ore in the presence of excess air to convert it into the metal oxide." },
    { term: "Calcination", def: "Strongly heating a carbonate ore in limited air to convert it into the metal oxide." },
    { term: "Alloy", def: "A homogeneous mixture of a metal with one or more other metals or non-metals, made to improve its properties (e.g. reduce corrosion, increase hardness)." },
  ],
  formulas: [],
  tables: [
    {
      title: "Extraction method based on reactivity",
      headers: ["Reactivity group", "Examples", "Extraction method"],
      rows: [
        ["Highly reactive", "K, Na, Ca, Mg, Al", "Electrolytic reduction (of molten salt/oxide)"],
        ["Moderately reactive", "Zn, Fe, Pb, Cu", "Roasting/calcination, then reduction with carbon"],
        ["Least reactive", "Ag, Au, Pt", "Found in free (native) state; simple heating suffices"],
      ]
    },
  ],
  diagrams: [
    { src: "sci1-ch08-fig1-reactivity-series.png", caption: "Fig 8.5 — Reactivity series of metals, from most reactive (potassium) to least reactive (gold).", note: "Memorise this order — it underlies most reasoning questions in this chapter." },
    { src: "sci1-ch08-fig2-froth-floatation.png", caption: "Fig 8.11 — Froth floatation method of ore concentration.", note: "Explicitly listed as a 'draw a neat labelled diagram' item in the textbook exercise." },
    { src: "sci1-ch08-fig3-electrolytic-alumina.png", caption: "Fig 8.12 — Electrolytic reduction of alumina to extract aluminium.", note: "Also explicitly listed as a 'draw a neat labelled diagram' item in the textbook exercise." },
  ],
  importantPoints: [
    "A metal higher in the reactivity series displaces a metal lower in the series from its salt solution.",
    "Roasting = sulphide ore + excess air; Calcination = carbonate ore + limited air. Both convert the ore to the OXIDE.",
    "Highly reactive metals need electrolysis to extract (too reactive to reduce with carbon); moderately reactive metals can be reduced using carbon.",
    "Rusting of iron needs both air and moisture together — prevention works by cutting off one or both.",
    "Alloying is the most widely used corrosion-prevention method today (e.g. stainless steel).",
  ],
  boardTips: [
    "'Draw a neat labelled diagram' of froth floatation and of electrolytic reduction of alumina are directly named in the textbook exercise — practise both from memory.",
    "Know the reactivity series in order — many reasoning questions (e.g. 'why is sodium kept in kerosene', 'why anodes need to be replaced during electrolysis of alumina') depend directly on it.",
    "Difference between roasting and calcination is a frequent 1–2 mark distinguish-between question.",
    "Common mistake: mixing up 'ore' and 'mineral' — remember, every ore is a mineral, but not every mineral is an ore (only those from which extraction is profitable).",
  ],
  revisionSummary: [
    "Mineral = natural metal compound; Ore = mineral from which metal can be profitably extracted; Gangue = unwanted impurities.",
    "Reactivity series: more reactive metal displaces less reactive metal from its salt solution.",
    "Roasting (sulphide ore + excess air) and Calcination (carbonate ore + limited air) both give the metal oxide.",
    "Highly reactive metals → electrolytic reduction; moderately reactive → reduction with carbon; least reactive → found free in nature.",
    "Corrosion prevention: painting, oiling, galvanising, anodising, alloying — all work by isolating the metal from air/moisture.",
  ],
},

// ============================================================ CHAPTER 9 ===
9: {
  title: "Carbon Compounds",
  intro: "This chapter explains why carbon forms such a vast number of compounds (catenation, tetravalency), covalent bonding, hydrocarbons (saturated and unsaturated), functional groups, the basics of IUPAC naming, and key reactions of carbon compounds including those of ethanol and ethanoic acid.",
  objectives: [
    "Explain why carbon compounds are so numerous, using catenation and tetravalency.",
    "Distinguish between saturated and unsaturated hydrocarbons.",
    "Identify common functional groups and understand the idea of a homologous series.",
    "State the four important reaction types of carbon compounds: oxidation, addition, substitution and esterification.",
  ],
  concepts: [
    { heading: "Covalent bond", text: "Carbon (valence electrons = 4) forms bonds by SHARING electrons with other atoms rather than losing/gaining them — each shared electron pair is one covalent bond." },
    { heading: "Catenation", text: "Carbon's unique ability to form strong bonds with other carbon atoms, creating long chains, branched chains or rings. This, combined with carbon's tetravalency, explains the huge number of known carbon compounds." },
    { heading: "Saturated vs unsaturated hydrocarbons", text: "Saturated hydrocarbons (alkanes) contain only single bonds between carbon atoms. Unsaturated hydrocarbons contain at least one double bond (alkenes) or triple bond (alkynes), and are generally more reactive." },
    { heading: "Functional group & homologous series", text: "A functional group is a specific atom/group of atoms that determines a compound's chemical properties (e.g. -OH for alcohols). A homologous series is a family of compounds with the same functional group, differing by one -CH₂- unit at each step, with gradually changing physical properties." },
    { heading: "Important reactions of carbon compounds", text: "Combustion (burning in oxygen), Oxidation (e.g. ethanol → ethanoic acid), Addition reaction (unsaturated compound + H₂/halogen → saturated compound), Substitution reaction (H atoms replaced by another atom, e.g. chlorination of methane in sunlight)." },
  ],
  definitions: [
    { term: "Covalent bond", def: "A chemical bond formed by the mutual sharing of a pair of electrons between two atoms." },
    { term: "Catenation", def: "The property of carbon atoms to form bonds with other carbon atoms, resulting in long chains, branched chains, or rings." },
    { term: "Hydrocarbon", def: "A compound made up of only carbon and hydrogen atoms." },
    { term: "Saturated compound", def: "A carbon compound in which all the carbon atoms are joined to each other by single bonds only." },
    { term: "Unsaturated compound", def: "A carbon compound containing at least one double or triple bond between two carbon atoms." },
    { term: "Functional group", def: "A specific atom or group of atoms in a carbon compound that determines its characteristic chemical properties." },
    { term: "Homologous series", def: "A series of carbon compounds having the same functional group, in which each successive member differs from the previous one by a -CH₂- unit." },
    { term: "Addition reaction", def: "A reaction in which an unsaturated carbon compound combines with another substance (such as H₂, Br₂) to form a saturated product, without losing any atoms." },
    { term: "Substitution reaction", def: "A reaction in which an atom or group of atoms in a compound is replaced by another atom or group of atoms." },
  ],
  formulas: [],
  tables: [
    {
      title: "Alkanes, Alkenes, Alkynes — quick comparison",
      headers: ["Type", "Bond between C atoms", "General formula", "Example"],
      rows: [
        ["Alkane (saturated)", "Single bond", "CₙH₂ₙ₊₂", "Ethane, CH₃-CH₃"],
        ["Alkene (unsaturated)", "Double bond", "CₙH₂ₙ", "Ethene, CH₂=CH₂"],
        ["Alkyne (unsaturated)", "Triple bond", "CₙH₂ₙ₋₂", "Ethyne, CH≡CH"],
      ]
    },
  ],
  diagrams: [
    { src: "sci1-ch09-fig1-methane-models.png", caption: "Fig 9.6 — Space-filling model and ball-&-stick model of the methane molecule.", note: "Shows the 3-D shape of the simplest carbon compound — commonly asked to identify/label." },
  ],
  importantPoints: [
    "Two reasons carbon forms so many compounds: (1) catenation — strong C–C bonds, (2) tetravalency — one C atom bonds to 4 other atoms.",
    "Saturated = only single bonds (alkanes); Unsaturated = has a double bond (alkenes) or triple bond (alkynes).",
    "A homologous series member differs from the next by exactly one -CH₂- unit (14 u increase in molecular mass each time).",
    "Addition reaction test: unsaturated compounds decolourise bromine/iodine water instantly — used to test for a double/triple bond.",
    "Ethanol → (oxidation) → Ethanoic acid: a key named reaction; ethanoic acid is the acid in vinegar.",
  ],
  boardTips: [
    "'Why does carbon form a very large number of compounds?' is a guaranteed reasoning question — answer using catenation + tetravalency, in that order.",
    "Practice writing structural (line) formulae and electron-dot structures for methane, ethane, ethene and ethyne — very frequently tested.",
    "Know how to identify the type of reaction (oxidation/addition/substitution) from a given equation — common in the exercise-style question.",
    "Common mistake: confusing 'saturated' with 'stable' — saturated refers only to the type of bonding (single bonds), not to reactivity or stability in a general sense.",
  ],
  revisionSummary: [
    "Carbon forms many compounds due to catenation (C–C bonding) + tetravalency (bonds to 4 atoms).",
    "Covalent bond = shared pair of electrons.",
    "Saturated (alkanes, single bonds) vs Unsaturated (alkenes = double bond, alkynes = triple bond).",
    "Homologous series: same functional group, differs by -CH₂- each step.",
    "Key reactions: Combustion, Oxidation (ethanol→ethanoic acid), Addition (test: decolourises Br₂/I₂ water), Substitution (e.g. chlorination of methane).",
  ],
},

// ============================================================ CHAPTER 10 ==
10: {
  title: "Space Missions",
  intro: "This chapter covers artificial satellites — their types, the orbits they revolve in, the concept of critical (orbital) velocity, satellite launch vehicles, and India's contribution to space technology through ISRO.",
  objectives: [
    "Classify artificial satellites based on their function and explain the classification of orbits (LEO, MEO, HEO).",
    "Derive and use the formula for critical (orbital) velocity of a satellite.",
    "Explain the structure and working of a multi-stage satellite launch vehicle.",
    "Describe key Indian space missions and the role of ISRO.",
  ],
  concepts: [
    { heading: "Artificial satellite", text: "A man-made object placed in orbit around the Earth (or another planet) to perform a specific function, such as communication, weather-watching, navigation, or Earth observation." },
    { heading: "Critical (orbital) velocity", text: "The specific tangential velocity given to a satellite so that the gravitational force of the Earth exactly provides the centripetal force needed to keep it in a stable circular orbit." },
    { heading: "Classification of orbits", text: "Low Earth Orbit (LEO: 180–2000 km), Medium Earth Orbit (MEO: 2000–35780 km, includes polar orbits), High Earth Orbit / geosynchronous orbit (HEO: ≥35780 km) — a satellite here takes ~24 hours to orbit, same as Earth's rotation, so it appears stationary relative to Earth." },
    { heading: "Satellite launch vehicle", text: "A multi-stage rocket used to carry a satellite to its required orbit. Each stage burns its fuel, then detaches, reducing weight so the remaining stages can accelerate the vehicle further — this is why multi-stage vehicles are more efficient than single-stage ones." },
    { heading: "Escape velocity for missions beyond Earth", text: "For a spacecraft to leave Earth's gravitational influence entirely (for a Moon or Mars mission), its initial velocity must exceed Earth's escape velocity (~11.2 km/s), a concept carried over from Chapter 1." },
  ],
  definitions: [
    { term: "Artificial satellite", def: "A man-made object placed by humans into orbit around the Earth or another celestial body to serve a specific purpose." },
    { term: "Critical velocity", def: "The minimum tangential velocity that must be given to a satellite to maintain it in a specific circular orbit around the Earth." },
    { term: "Geosynchronous / geostationary satellite", def: "A satellite in a high orbit (~35780 km) whose period of revolution equals the Earth's period of rotation (~24 hrs), so it appears stationary as seen from the Earth." },
    { term: "Satellite launch vehicle", def: "A multi-stage rocket used to carry a satellite from the Earth's surface into its designated orbit." },
  ],
  formulas: [
    {
      name: "Critical (orbital) velocity",
      formula: "v_c = √(GM/(R+h))",
      symbols: "G = gravitational constant, M = mass of Earth, R = radius of Earth, h = height of the orbit above Earth's surface",
      units: "v_c in m/s; G, M, R, h in SI units",
      notes: "As height h increases, critical velocity DECREASES — higher orbits need slower tangential speed.",
      mistakes: "Using R instead of (R + h) as the orbital radius — a very common numerical error."
    },
  ],
  tables: [
    {
      title: "Classification of satellite orbits",
      headers: ["Orbit type", "Height above Earth's surface", "Typical period"],
      rows: [
        ["Low Earth Orbit (LEO)", "180 km – 2000 km", "~90 minutes"],
        ["Medium Earth Orbit (MEO)", "2000 km – 35780 km", "2 – 24 hours"],
        ["High Earth Orbit / Geosynchronous (HEO)", "≥ 35780 km", "~24 hours (matches Earth's rotation)"],
      ]
    },
  ],
  diagrams: [
    { src: "sci1-ch10-fig1-satellite-orbits.png", caption: "Fig 10.4 — Classification of satellite orbits: LEO, MEO and HEO around the Earth.", note: "Directly supports the orbit-classification concept — a common diagram-based question." },
    { src: "sci1-ch10-fig2-pslv-structure.png", caption: "Fig 10.5(a) — Structure of India's Polar Satellite Launch Vehicle (PSLV), showing its multiple stages.", note: "Explicitly asked in the textbook exercise: 'explain a satellite launch vehicle... with the help of a schematic diagram.'" },
  ],
  importantPoints: [
    "Critical velocity DECREASES as orbit height increases (v_c ∝ 1/√(R+h)).",
    "Geosynchronous/geostationary satellites orbit at ~35780 km and take ~24 hours — same as Earth's rotation — so they appear fixed over one point.",
    "Geostationary satellites orbit above the equator, so they are NOT useful for observing polar regions — polar orbits (a type of MEO) are used instead.",
    "Multi-stage launch vehicles are more efficient because discarding a spent, empty stage reduces the vehicle's weight, letting remaining fuel accelerate it faster.",
    "For any mission beyond Earth's orbit (Moon, Mars), the spacecraft's velocity must exceed Earth's escape velocity (11.2 km/s).",
  ],
  boardTips: [
    "The critical velocity formula and its numericals (find v_c or T given orbit height) are frequently asked — always remember to use (R + h), not just R.",
    "'Why are geostationary satellites not useful for studying polar regions?' is a direct, frequently repeated reasoning question.",
    "The PSLV/launch-vehicle schematic diagram is explicitly named in the textbook exercise — be ready to draw and label its stages.",
    "Know which Indian satellite series serves which purpose (INSAT/GSAT — communication & weather; IRS — Earth observation; IRNSS — navigation) — a common match-the-following question.",
  ],
  revisionSummary: [
    "Critical velocity: v_c = √(GM/(R+h)) — decreases as height increases.",
    "LEO: 180–2000 km (~90 min); MEO: 2000–35780 km (2–24 hrs, includes polar orbits); HEO/geosynchronous: ≥35780 km (~24 hrs).",
    "Geostationary satellites: fixed above one point on the equator; not useful for polar studies.",
    "Multi-stage launch vehicles: shed spent stages to reduce weight and gain speed.",
    "Escape velocity for missions beyond Earth ≈ 11.2 km/s (same concept as Chapter 1).",
    "India: ISRO, PSLV & GSLV launch vehicles; INSAT/GSAT (communication), IRS (Earth observation), IRNSS (navigation).",
  ],
},

/* CHAPTERS_MARKER_DO_NOT_REMOVE */

};
