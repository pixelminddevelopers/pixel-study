/* ==========================================================================
   PIXEL STUDY — Mathematics Part II : Geometry (Std X, Maharashtra Board)
   Detailed chapter revision content, extracted & summarised from the
   Balbharati textbook.

   Unlike Math I (Algebra), Geometry chapters DO use the diagrams array
   (same shape as the Science lesson files) since geometric figures are
   essential here — plus solvedExamples and solvingTips like Math I.
   renderChapterLesson() in index.html already supports all of these
   section types, so this file needs no further code changes.
   ========================================================================== */

window.MATH2_LESSONS = {

// ============================================================ CHAPTER 1 ===
1: {
  title: "Similarity",
  intro: "This chapter builds the theory of similar triangles — starting from how the areas of two triangles compare, through the Basic Proportionality Theorem and the angle bisector property, to the tests used to prove two triangles similar, and finally the relationship between the areas of similar triangles.",
  objectives: [
    "State and apply the Basic Proportionality Theorem (BPT) and its converse.",
    "State and apply the property of an angle bisector of a triangle.",
    "Identify similar triangles using the AA, SAS and SSS tests of similarity.",
    "Apply the theorem relating the areas of similar triangles to solve numericals.",
  ],
  concepts: [
    { heading: "Ratio of areas of two triangles", text: "The ratio of the areas of any two triangles equals the ratio of the products of their base and corresponding height. Two useful special cases: if heights are equal, areas are proportional to the bases; if bases are equal, areas are proportional to the heights." },
    { heading: "Basic Proportionality Theorem (BPT)", text: "If a line parallel to one side of a triangle intersects the other two sides in two distinct points, it divides those two sides in the same proportion. Its converse also holds: if a line divides two sides of a triangle in the same ratio, it must be parallel to the third side.",
      image: { src: "math2-ch01-fig1-basic-proportionality-theorem.png", caption: "Line l \u2225 side BC of \u25b3ABC, intersecting AB at P and AC at Q \u2014 so AP/PB = AQ/QC." } },
    { heading: "Property of an angle bisector of a triangle", text: "The bisector of any angle of a triangle divides the opposite side in the ratio of the remaining two sides. (Converse also holds — if a cevian divides the opposite side in the ratio of the other two sides, it bisects the angle.)" },
    { heading: "Property of three parallel lines and a transversal", text: "If three parallel lines are cut by two transversals, the ratio of the intercepts on one transversal equals the ratio of the corresponding intercepts on the other transversal." },
    { heading: "Tests of similarity of triangles", text: "Two triangles are similar (same shape, proportional sides) if any ONE of these holds: AA test (two angles of one equal two angles of the other — the third is then automatically equal too); SAS test (two sides proportional AND the included angle equal); SSS test (all three sides proportional)." },
    { heading: "Theorem of areas of similar triangles", text: "When two triangles are similar, the ratio of their areas equals the ratio of the squares of any pair of corresponding sides (or corresponding heights, medians, etc.).",
      image: { src: "math2-ch01-fig2-areas-of-similar-triangles.png", caption: "\u25b3ABC ~ \u25b3PQR with altitudes AD and PS drawn to the bases \u2014 used to prove A(\u25b3ABC)/A(\u25b3PQR) = AB\u00b2/PQ\u00b2." } },
  ],
  definitions: [
    { term: "Similar triangles", def: "Two triangles whose corresponding angles are congruent and corresponding sides are in proportion; written using the symbol ~, e.g. △ABC ~ △PQR." },
    { term: "Basic Proportionality Theorem", def: "If a line parallel to a side of a triangle intersects the other two sides in distinct points, it divides those sides in the same proportion." },
  ],
  formulas: [
    {
      name: "Basic Proportionality Theorem",
      formula: "AP/PB = AQ/QC",
      symbols: "In △ABC, line l ∥ side BC intersects AB at P and AC at Q",
      units: "—",
      notes: "Works in either direction: AP/PB = AQ/QC ⟺ line PQ ∥ BC (theorem and its converse).",
      mistakes: "Mismatching which segments correspond — always pair the two parts nearer vertex A together, and the two parts nearer the base together."
    },
    {
      name: "Angle bisector property",
      formula: "AE/EB = CA/CB",
      symbols: "In △ABC, seg CE bisects ∠C, meeting side AB at E",
      units: "—",
      notes: "The side ratio always corresponds to the FULL sides adjacent to the bisected angle, not any partial segment.",
      mistakes: "Writing the ratio upside down, or pairing the wrong sides with the wrong segments."
    },
    {
      name: "Areas of similar triangles",
      formula: "A(△ABC)/A(△PQR) = AB²/PQ² = BC²/QR² = AC²/PR²",
      symbols: "△ABC ~ △PQR",
      units: "—",
      notes: "This also equals the ratio of the squares of corresponding heights, medians, or any other corresponding linear measurement.",
      mistakes: "Forgetting to SQUARE the side ratio — a very common and costly slip, since the area ratio is never simply equal to the side ratio."
    },
  ],
  solvedExamples: [
    {
      title: "Using Basic Proportionality Theorem",
      problem: "In △ABC, line l ∥ side BC, intersecting AB at P and AC at Q (as shown). If AP = 1.8 cm, PB = 5.4 cm, QC = 7.2 cm, find AQ.",
      image: { src: "math2-ch01-fig1-basic-proportionality-theorem.png", caption: "Fig. 1.17 \u2014 line l \u2225 BC, meeting AB at P and AC at Q." },
      steps: [
        "Since l ∥ BC, by BPT: AP/PB = AQ/QC",
        "1.8/5.4 = AQ/7.2",
        "AQ = (1.8 × 7.2)/5.4",
      ],
      answer: "AQ = 2.4 cm"
    },
    {
      title: "Using the angle bisector property",
      problem: "In △PQR, seg RS bisects ∠R. If PR = 15, RQ = 20, PS = 12, find SQ.",
      steps: [
        "By the angle bisector property: PR/RQ = PS/SQ",
        "15/20 = 12/SQ",
        "SQ = (12 × 20)/15",
      ],
      answer: "SQ = 16"
    },
    {
      title: "Proving similarity and finding a side",
      problem: "In △ABC and △PQR: ∠A = ∠P = 70°, AB/PQ = AC/PR = 2/3. Are the triangles similar? If AB=6, find PQ.",
      steps: [
        "Two sides are proportional (AB/PQ = AC/PR) and the angle between them (∠A, ∠P) is equal.",
        "This matches the SAS test of similarity → △ABC ~ △PQR.",
        "AB/PQ = 2/3, and AB = 6, so 6/PQ = 2/3",
        "PQ = (6 × 3)/2",
      ],
      answer: "△ABC ~ △PQR (SAS test); PQ = 9"
    },
    {
      title: "Areas of similar triangles",
      problem: "△ABC ~ △PQR. If AB = 4, PQ = 6 and A(△ABC) = 32, find A(△PQR).",
      image: { src: "math2-ch01-fig2-areas-of-similar-triangles.png", caption: "\u25b3ABC ~ \u25b3PQR, with altitudes AD and PS to their respective bases." },
      steps: [
        "A(△ABC)/A(△PQR) = AB²/PQ²",
        "32/A(△PQR) = 4²/6² = 16/36",
        "A(△PQR) = (32 × 36)/16",
      ],
      answer: "A(△PQR) = 72 sq. units"
    },
  ],
  solvingTips: [
    "When you see a line parallel to one side of a triangle, immediately think BPT — write AP/PB = AQ/QC before doing anything else.",
    "When you see an angle bisector inside a triangle, immediately think of the angle bisector property — write the side-ratio equation as your first step.",
    "To prove two triangles similar, scan what's given: two angles → AA test; two sides + included angle → SAS test; all three sides → SSS test. Identify the test FIRST, then write the proof matching it.",
    "For 'find the area ratio' questions, always remember to SQUARE the side/height/median ratio — write out A₁/A₂ = (side₁/side₂)² explicitly rather than trying to do it mentally.",
    "In proof-based questions, always write 'Given', 'To prove', and 'Construction' (if needed) clearly before the proof itself — this is expected format and carries method marks.",
    "For activity-based (fill-in-the-blank) questions, read the surrounding reasoning carefully — the blank is often just the name of the theorem/property being used in that step, not a numeric answer.",
  ],
  importantPoints: [
    "Ratio of triangle areas = ratio of (base × height) products; equal heights → ratio of bases; equal bases → ratio of heights.",
    "BPT: line ∥ one side of a triangle → divides other two sides proportionally (and the converse also holds).",
    "Angle bisector of a triangle divides the opposite side in the ratio of the other two sides.",
    "Similarity tests: AA, SAS, SSS — any ONE proportionality condition matching the test is sufficient (don't need to check all three angle/side conditions).",
    "Area ratio of similar triangles = SQUARE of the ratio of any pair of corresponding sides/heights/medians.",
  ],
  boardTips: [
    "BPT and the angle bisector property are used as building blocks inside many bigger proofs — make sure you can quote and apply both instantly, since numericals rarely test them in isolation.",
    "'Complete the proof by filling in the boxes' (activity-style) is extremely common for BPT, angle bisector theorem, and the similar-triangles-area theorem — practise completing partially given proofs, not just full ones.",
    "'State the test of similarity used' is a near-guaranteed short question — practise identifying AA vs SAS vs SSS quickly from given data.",
    "Numericals combining the area-of-similar-triangles theorem with a given ratio of sides (or perimeter, or corresponding height) appear almost every year.",
    "Common mistake: using the side ratio directly as the area ratio (forgetting to square it) — this single error is one of the most frequent in this chapter.",
  ],
  revisionSummary: [
    "Area ratio of 2 triangles = ratio of (base×height); equal heights → ratio of bases; equal bases → ratio of heights.",
    "BPT: line ∥ a side of a triangle → AP/PB = AQ/QC (and converse holds too).",
    "Angle bisector: divides opposite side in ratio of the other two sides (AE/EB = CA/CB).",
    "3 parallel lines + 2 transversals: ratio of intercepts on one transversal = ratio on the other.",
    "Similarity tests: AA, SAS, SSS — one match is sufficient to prove similarity.",
    "Area ratio of similar triangles = (ratio of corresponding sides/heights/medians)².",
  ],
},

// ============================================================ CHAPTER 2 ===
2: {
  title: "Pythagoras Theorem",
  intro: "This chapter proves the Pythagoras theorem using similar triangles, introduces the geometric mean relationship created by the altitude to the hypotenuse, covers the special 30°-60°-90° and 45°-45°-90° right-triangle ratios, and ends with the Apollonius theorem relating a triangle's sides to its median.",
  objectives: [
    "State and verify Pythagorean triplets.",
    "Apply the 30°-60°-90° and 45°-45°-90° side ratios directly, without needing the full theorem.",
    "Prove and apply the Pythagoras theorem and its converse.",
    "Apply the theorem of geometric mean and the Apollonius theorem to solve numericals.",
  ],
  concepts: [
    { heading: "Pythagorean triplet", text: "Three natural numbers where the square of the largest equals the sum of the squares of the other two (e.g. 3,4,5 or 5,12,13). A triplet can be generated from any two natural numbers a>b using (a²+b², a²−b², 2ab)." },
    { heading: "30°-60°-90° triangle", text: "The side opposite 30° is half the hypotenuse; the side opposite 60° is (√3/2) × hypotenuse." },
    { heading: "45°-45°-90° triangle", text: "Both perpendicular (legs) sides are equal, each measuring (1/√2) × hypotenuse." },
    { heading: "Similarity in a right triangle", text: "When the altitude is drawn from the right angle to the hypotenuse, it splits the triangle into two smaller triangles, and all three triangles (the original + two smaller ones) are similar to each other (AA test, using the common angle and the right angle)." },
    { heading: "Theorem of geometric mean", text: "In a right triangle, the altitude to the hypotenuse is the geometric mean of the two segments it creates on the hypotenuse: (altitude)² = (segment 1) × (segment 2)." },
    { heading: "Pythagoras theorem", text: "In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides. Proved using the similar triangles created by the altitude to the hypotenuse.",
      image: { src: "math2-ch02-fig1-pythagoras-proof.png", caption: "\u25b3ABC with \u2220ABC = 90\u00b0 and altitude BD to hypotenuse AC \u2014 the standard proof figure." } },
    { heading: "Converse of Pythagoras theorem", text: "If the square of one side of a triangle equals the sum of the squares of the other two sides, the triangle must be right-angled (the angle opposite the longest side is 90°)." },
    { heading: "Apollonius theorem", text: "Relates the two sides of a triangle to the median drawn to the third side: for median AM to side BC, AB² + AC² = 2AM² + 2BM² (BM being half of BC).",
      image: { src: "math2-ch02-fig2-apollonius-theorem.png", caption: "\u25b3ABC with M as the midpoint of BC (median AM) and altitude AD to BC." } },
  ],
  definitions: [
    { term: "Pythagorean triplet", def: "A set of three natural numbers in which the square of the largest number equals the sum of the squares of the other two." },
    { term: "Geometric mean", def: "For two numbers p and q, their geometric mean is the number x such that x² = p×q (i.e. x = √(pq))." },
  ],
  formulas: [
    {
      name: "Pythagoras theorem",
      formula: "(Hypotenuse)² = (Side 1)² + (Side 2)²",
      symbols: "In a right triangle with the right angle at B: AC² = AB² + BC²",
      units: "—",
      notes: "Always identify the hypotenuse first (the side OPPOSITE the right angle, and the longest side) before applying the formula.",
      mistakes: "Applying the formula with the wrong side as the hypotenuse."
    },
    {
      name: "Theorem of geometric mean",
      formula: "QS² = PS × SR",
      symbols: "In right △PQR (right angle at Q), seg QS ⊥ hypotenuse PR, meeting it at S",
      units: "—",
      notes: "QS is the altitude to the hypotenuse; PS and SR are the two segments it divides the hypotenuse into.",
      mistakes: "Using the full hypotenuse instead of its two segments."
    },
    {
      name: "30°-60°-90° triangle sides",
      formula: "Side opposite 30° = (1/2)×Hyp ,  Side opposite 60° = (√3/2)×Hyp",
      symbols: "Hyp = hypotenuse",
      units: "—",
      notes: "Very fast shortcut — no need for the full Pythagoras theorem when these two angles are given.",
      mistakes: "Mixing up which side (30° or 60°) gets the √3/2 factor."
    },
    {
      name: "45°-45°-90° triangle sides",
      formula: "Each leg = (1/√2) × Hypotenuse",
      symbols: "Hyp = hypotenuse",
      units: "—",
      notes: "Both legs are equal in this special (isosceles right) triangle.",
      mistakes: "Forgetting that BOTH legs are equal — a common oversight when only one is asked for."
    },
    {
      name: "Apollonius theorem",
      formula: "AB² + AC² = 2AM² + 2BM²",
      symbols: "In △ABC, M = midpoint of BC (so AM is the median to BC, and BM = MC = ½BC)",
      units: "—",
      notes: "Relates a triangle's two sides to the median drawn to the third side and half that third side.",
      mistakes: "Using the full side BC instead of the half-segment BM in the formula."
    },
  ],
  solvedExamples: [
    {
      title: "Using 30°-60°-90° ratio",
      problem: "In △ABC, ∠B = 90°, ∠A = 30°, AC = 14. Find AB and BC.",
      steps: [
        "∠B=90°, ∠A=30°, so ∠C=60°.",
        "Side opposite 30° (∠A) is BC; side opposite 60° (∠C) is AB.",
        "BC = (1/2) × AC = (1/2)(14) = 7",
        "AB = (√3/2) × AC = (√3/2)(14) = 7√3",
      ],
      answer: "AB = 7√3, BC = 7"
    },
    {
      title: "Using the geometric mean theorem",
      problem: "In right △PQR, ∠PQR=90°, seg QN ⊥ seg PR, with PN=9 and NR=16. Find QN.",
      steps: [
        "By the theorem of geometric mean: QN² = PN × NR",
        "QN² = 9 × 16 = 144",
        "QN = √144",
      ],
      answer: "QN = 12"
    },
    {
      title: "Pythagoras theorem — direct application",
      problem: "In a right triangle, the two sides making the right angle are 9 cm and 12 cm. Find the hypotenuse.",
      steps: [
        "Let the right angle be at Q, with PQ=9, QR=12.",
        "By Pythagoras theorem: PR² = PQ² + QR²",
        "PR² = 81 + 144 = 225",
        "PR = √225",
      ],
      answer: "PR = 15 cm"
    },
    {
      title: "Apollonius theorem",
      problem: "In △ABC, seg AM is the median (M is the midpoint of BC). AM = 9 and AB² + AC² = 290. Find BC.",
      image: { src: "math2-ch02-fig2-apollonius-theorem.png", caption: "\u25b3ABC with median AM to side BC." },
      steps: [
        "By Apollonius theorem: AB² + AC² = 2AM² + 2BM²",
        "290 = 2(9²) + 2BM² = 2(81) + 2BM² = 162 + 2BM²",
        "2BM² = 290 − 162 = 128, so BM² = 64, BM = 8",
        "BC = 2×BM (since M is the midpoint of BC)",
      ],
      answer: "BC = 16"
    },
  ],
  solvingTips: [
    "Before applying Pythagoras theorem, always first identify the hypotenuse (opposite the right angle) — writing the wrong side as hypotenuse is the most common error in this chapter.",
    "If a right triangle has a 30°, 60°, or 45° angle mentioned, check whether the fast special-triangle ratios apply BEFORE reaching for the full Pythagoras theorem — it's much quicker.",
    "Whenever you see an altitude drawn to the hypotenuse in a right triangle, immediately think 'geometric mean theorem' and 'three similar triangles' — this combination unlocks most problems in this chapter.",
    "For Apollonius theorem problems, carefully identify which segment is the median and which is HALF of the third side (not the full side) before substituting into the formula.",
    "Learn to recognise common Pythagorean triplets (3-4-5, 5-12-13, 8-15-17, 7-24-25 and their multiples) by sight — this saves significant calculation time in numericals.",
    "When proving a triangle is right-angled using the converse of Pythagoras theorem, always identify the LONGEST side first — only checking against that side can validly prove the right angle.",
  ],
  importantPoints: [
    "Pythagorean triplet: largest² = sum of squares of other two (e.g. 3,4,5 / 5,12,13 / 8,15,17).",
    "30°-60°-90°: side opposite 30° = ½ hyp; side opposite 60° = (√3/2) hyp.",
    "45°-45°-90°: both legs equal, each = (1/√2) × hyp.",
    "Altitude to hypotenuse creates 3 mutually similar triangles + geometric mean relation: (altitude)² = product of the two hypotenuse segments.",
    "Pythagoras theorem: hyp² = sum of squares of other two sides. Converse also holds (proves a right angle).",
    "Apollonius theorem: AB²+AC² = 2AM²+2BM² (M = midpoint of BC).",
  ],
  boardTips: [
    "The full proof of the Pythagoras theorem (using similar triangles) is a guaranteed 'prove that' question worth several marks — practise writing the Given/To Prove/Construction/Proof structure exactly.",
    "The theorem of geometric mean and Apollonius theorem are both frequently tested directly as numericals — memorise both formulas and what each symbol represents.",
    "'Complete the activity' fill-in-the-blank versions of the Pythagoras or Apollonius proofs are common — practise completing partially worked proofs.",
    "Numericals combining the 30-60-90 or 45-45-90 ratios with a follow-up Pythagoras/geometric-mean step are common multi-part questions.",
    "Common mistake: forgetting to take the square root at the final step (leaving the answer as, e.g., 144 instead of 12).",
  ],
  revisionSummary: [
    "Pythagorean triplet: largest²=sum of other two squares.",
    "30-60-90: opp.30°=½hyp; opp.60°=(√3/2)hyp. 45-45-90: both legs=(1/√2)hyp.",
    "Altitude to hypotenuse → 3 similar triangles + geometric mean: alt²=segment1×segment2.",
    "Pythagoras: hyp²=leg1²+leg2² (and its converse proves a right angle).",
    "Apollonius: AB²+AC²=2AM²+2BM² (AM=median, BM=½BC).",
  ],
},

// ============================================================ CHAPTER 3 ===
3: {
  title: "Circle",
  intro: "This is the richest theorem chapter in Geometry — covering tangents (and the theorems built on them), arcs and chords, the inscribed angle theorem, cyclic quadrilaterals, and the relationships created when chords or tangents intersect inside or outside a circle.",
  objectives: [
    "State and apply the tangent theorem and its converse, and the tangent segment theorem.",
    "Apply the properties relating arcs, chords and central angles.",
    "State and apply the inscribed angle theorem and the cyclic quadrilateral theorem.",
    "Apply the tangent-secant angle theorem and the theorems of internal/external division of chords.",
  ],
  concepts: [
    { heading: "Tangent theorem & its converse", text: "A tangent at any point of a circle is perpendicular to the radius at the point of contact. Conversely, a line perpendicular to a radius at its point on the circle IS a tangent to the circle.",
      image: { src: "math2-ch03-fig1-tangent-theorem.png", caption: "Line l is a tangent to the circle with centre O at point of contact A \u2014 so l \u22a5 OA." } },
    { heading: "Tangent segment theorem", text: "The two tangent segments drawn from the same external point to a circle are always equal in length (congruent).",
      image: { src: "math2-ch03-fig2-tangent-segments.png", caption: "From external point D, tangent segments DP and DQ touch the circle at P and Q \u2014 seg DP \u2245 seg DQ." } },
    { heading: "Touching circles", text: "When two circles touch each other (internally or externally), their point of contact lies on the line joining their centres." },
    { heading: "Arcs, chords and central angles", text: "The measure of a minor arc equals its central angle; a major arc's measure = 360° − corresponding minor arc. In the same (or congruent) circles: congruent chords ↔ congruent arcs (this works both ways)." },
    { heading: "Inscribed angle & intercepted arc", text: "An inscribed angle has its vertex ON the circle with both arms as chords. The arc lying inside the angle, between its two arms, is the intercepted arc.",
      image: { src: "math2-ch03-fig3-inscribed-angle.png", caption: "\u2220EAC is an inscribed angle with vertex A; arc EC is its intercepted arc (centre O shown on one arm)." } },
    { heading: "Inscribed angle theorem", text: "The measure of an inscribed angle is exactly half the measure of its intercepted arc. Two direct corollaries follow: angles inscribed in the same arc are congruent; an angle inscribed in a semicircle is a right angle." },
    { heading: "Cyclic quadrilateral theorem & converse", text: "Opposite angles of a cyclic quadrilateral (all 4 vertices on one circle) are always supplementary (sum to 180°). Conversely, if a pair of opposite angles of a quadrilateral is supplementary, the quadrilateral must be cyclic.",
      image: { src: "math2-ch03-fig4-cyclic-quadrilateral.png", caption: "PQRS is a cyclic quadrilateral \u2014 \u2220P+\u2220R = 180\u00b0 and \u2220Q+\u2220S = 180\u00b0." } },
    { heading: "Tangent-secant angle theorem", text: "If an angle has its vertex on the circle, one side touching the circle (tangent) and the other side cutting the circle again (secant/chord), then the angle's measure is half the measure of its intercepted arc — the same rule as the inscribed angle theorem, extended to this tangent-chord case.",
      image: { src: "math2-ch03-fig5-tangent-secant-angle.png", caption: "Three cases of the tangent\u2013secant angle, each equal to half its intercepted arc." } },
    { heading: "Internal & external division of chords", text: "If two chords intersect INSIDE a circle, the products of their respective segments are equal. If two secants (extended chords) intersect OUTSIDE a circle, the products of the full secant-to-far-point and secant-to-near-point distances are equal. A tangent is the special/limiting case of a secant.",
      image: { src: "math2-ch03-fig6-internal-chord-division.png", caption: "Chords AB and CD intersect inside the circle at E \u2014 AE\u00d7EB = CE\u00d7ED." } },
  ],
  definitions: [
    { term: "Tangent to a circle", def: "A line that touches a circle at exactly one point (the point of contact)." },
    { term: "Secant", def: "A line that intersects a circle in two distinct points." },
    { term: "Cyclic quadrilateral", def: "A quadrilateral all four of whose vertices lie on the same circle." },
    { term: "Inscribed angle", def: "An angle whose vertex lies on the circle and whose arms are chords of the circle." },
    { term: "Intercepted arc", def: "The arc that lies in the interior of an angle, between the two points where the angle's arms meet the circle." },
    { term: "Concyclic points", def: "Points that all lie on the same circle." },
  ],
  formulas: [
    {
      name: "Tangent segment theorem",
      formula: "If PA and PB are tangent segments from external point P, then PA = PB",
      symbols: "P = external point, A, B = points of contact",
      units: "—",
      notes: "Frequently combined with the tangent theorem (∠OAP = ∠OBP = 90°) in the same proof.",
      mistakes: "Assuming a similar equality for secants — this equal-length property is specific to tangent SEGMENTS only."
    },
    {
      name: "Inscribed angle theorem",
      formula: "Inscribed angle = (1/2) × intercepted arc",
      symbols: "—",
      units: "degrees",
      notes: "Same idea drives the tangent-secant angle theorem too — 'the angle is always half its intercepted arc,' whether both arms are chords or one is a tangent.",
      mistakes: "Forgetting the ×½ factor, or using the wrong (non-intercepted) arc."
    },
    {
      name: "Cyclic quadrilateral",
      formula: "∠A + ∠C = 180°  and  ∠B + ∠D = 180°",
      symbols: "A, B, C, D = vertices of a cyclic quadrilateral, taken in order",
      units: "degrees",
      notes: "Only OPPOSITE angle pairs are supplementary — adjacent angles are not (in general).",
      mistakes: "Pairing adjacent angles instead of opposite ones."
    },
    {
      name: "Internal division of chords",
      formula: "AE × EB = CE × ED",
      symbols: "Chords AB and CD of a circle intersect inside the circle at point E",
      units: "—",
      notes: "Each product uses the two segments of ONE chord created by the intersection point.",
      mistakes: "Multiplying segments from different chords instead of the two parts of the same chord."
    },
    {
      name: "External division of chords (secants)",
      formula: "EA × EB = EC × ED",
      symbols: "Secants through chords AB and CD meet outside the circle at point E (with A,C nearer to E)",
      units: "—",
      notes: "Each product is (distance to near point) × (distance to far point) along the same secant line.",
      mistakes: "Mixing up the near and far points of each secant."
    },
    {
      name: "Tangent-secant segment theorem",
      formula: "EA × EB = ET²",
      symbols: "E = external point, secant through E meets the circle at A and B, tangent from E touches at T",
      units: "—",
      notes: "A special case of external division of chords, where the 'second secant' has become a tangent (so both its points of intersection coincide at T).",
      mistakes: "Using ET instead of ET² on the right-hand side."
    },
  ],
  solvedExamples: [
    {
      title: "Tangent segment theorem",
      problem: "From an external point D, two tangent segments DP and DQ are drawn to a circle. If DP = 8 cm, find DQ.",
      image: { src: "math2-ch03-fig2-tangent-segments.png", caption: "Tangent segments DP and DQ from external point D." },
      steps: [
        "By the tangent segment theorem, tangent segments from the same external point are equal.",
        "DP = DQ",
      ],
      answer: "DQ = 8 cm"
    },
    {
      title: "Inscribed angle theorem",
      problem: "In a circle, arc EC has measure 110°. Find the measure of the inscribed angle ∠EAC (A being a point on the major arc).",
      image: { src: "math2-ch03-fig3-inscribed-angle.png", caption: "\u2220EAC is inscribed in the circle, intercepting arc EC." },
      steps: [
        "By the inscribed angle theorem: inscribed angle = (1/2) × intercepted arc",
        "∠EAC = (1/2) × m(arc EC) = (1/2) × 110°",
      ],
      answer: "∠EAC = 55°"
    },
    {
      title: "Cyclic quadrilateral",
      problem: "PQRS is a cyclic quadrilateral. If ∠P = 100°, find ∠R.",
      image: { src: "math2-ch03-fig4-cyclic-quadrilateral.png", caption: "Cyclic quadrilateral PQRS." },
      steps: [
        "By the cyclic quadrilateral theorem, opposite angles are supplementary.",
        "∠P + ∠R = 180°",
        "100° + ∠R = 180°",
      ],
      answer: "∠R = 80°"
    },
    {
      title: "Internal division of chords",
      problem: "Chords AB and CD of a circle intersect inside the circle at point E. If AE = 5.6, EB = 3, CE = 4.2, find ED.",
      image: { src: "math2-ch03-fig6-internal-chord-division.png", caption: "Chords AB and CD intersecting at E inside the circle." },
      steps: [
        "By the theorem of internal division of chords: AE × EB = CE × ED",
        "5.6 × 3 = 4.2 × ED",
        "16.8 = 4.2 × ED",
        "ED = 16.8/4.2",
      ],
      answer: "ED = 4"
    },
    {
      title: "Tangent-secant segments theorem",
      problem: "Seg PS is a tangent segment to a circle; line PR is a secant meeting the circle at Q and R. If PQ = 3.6 and QR = 6.4, find PS.",
      steps: [
        "By the tangent-secant segments theorem: PS² = PQ × PR",
        "PR = PQ + QR = 3.6 + 6.4 = 10",
        "PS² = 3.6 × 10 = 36",
      ],
      answer: "PS = 6"
    },
  ],
  solvingTips: [
    "This chapter has many similarly-worded theorems — always identify FIRST whether you're dealing with (a) two chords crossing inside, (b) two secants crossing outside, or (c) a tangent + secant from outside, since each has a different (but related) product formula.",
    "Whenever a tangent and the radius/centre both appear in a figure, immediately mark the 90° angle at the point of contact (tangent theorem) — it's the starting point for most tangent proofs.",
    "For inscribed angle / tangent-secant angle problems, always identify the intercepted arc precisely first (name its endpoints) before applying the ×½ rule — misidentifying the arc is the most common error.",
    "For cyclic quadrilateral problems, write BOTH pairs of opposite angles as supplementary equations even if the question only asks about one pair — it often unlocks the next step.",
    "When two circles touch, remember that the point of contact, and both centres, are always collinear (on one straight line) — this is often the key fact needed to find the distance between centres.",
    "In 'complete the activity' proofs (very common in this chapter), read the given reasoning carefully — the blank is usually the name of a theorem/property already covered, not a new calculation.",
  ],
  importantPoints: [
    "Tangent ⊥ radius at the point of contact (and the converse also holds).",
    "Tangent segments from the same external point are equal.",
    "Inscribed angle = ½ × intercepted arc; angle in a semicircle = 90°; angles in the same arc are equal.",
    "Cyclic quadrilateral: opposite angles are supplementary (sum to 180°) — and the converse also holds.",
    "Chords crossing inside: AE×EB = CE×ED. Secants crossing outside: EA×EB = EC×ED. Tangent+secant from outside: EA×EB = ET².",
  ],
  boardTips: [
    "This chapter typically carries the highest weightage in the Geometry paper — prioritise it heavily in revision.",
    "'Complete the following activity/proof' questions (fill-in-the-blank versions of the theorems above) are extremely common — practise completing partial proofs for EVERY theorem in this chapter, not just solving numericals.",
    "Numericals combining 2-3 theorems in one question (e.g. tangent theorem + Pythagoras, or inscribed angle + cyclic quadrilateral) are common in the later, higher-mark questions — practise chaining theorems together.",
    "The three chord/secant/tangent product theorems (internal division, external division, tangent-secant segments) are often tested as a set — make sure you can tell them apart instantly from the figure.",
    "Common mistake: applying the inscribed angle theorem to an angle whose vertex is NOT on the circle, or using the wrong (non-intercepted) arc.",
  ],
  revisionSummary: [
    "Tangent ⊥ radius at point of contact (theorem + converse). Tangent segments from one external point are equal.",
    "Touching circles: point of contact lies on the line joining the centres.",
    "Central angle = arc measure; congruent chords ↔ congruent arcs.",
    "Inscribed angle = ½ intercepted arc; angle in semicircle = 90°; same-arc inscribed angles are equal.",
    "Cyclic quadrilateral: opposite angles sum to 180° (and converse holds).",
    "Tangent-secant angle = ½ intercepted arc.",
    "Chords inside: AE×EB=CE×ED. Secants outside: EA×EB=EC×ED. Tangent+secant: EA×EB=ET².",
  ],
},

// ============================================================ CHAPTER 4 ===
4: {
  title: "Geometric Constructions",
  intro: "This chapter is entirely procedural — constructing a triangle similar to a given triangle in a given ratio, and constructing tangents to a circle (at a point on it, with or without using the centre, and from an external point) using compass and ruler.",
  objectives: [
    "Construct a triangle similar to a given triangle in a given ratio, both when vertices are distinct and when there is a common vertex.",
    "Construct a tangent to a circle at a given point, using the centre.",
    "Construct a tangent to a circle at a given point, without using the centre (using the tangent-secant angle theorem).",
    "Construct the two tangents to a circle from an external point.",
  ],
  concepts: [
    { heading: "Constructing a similar triangle — distinct vertices", text: "Since similar triangles have proportional sides, first calculate every side of the new triangle using the given ratio, then construct it directly with a ruler and compass using those calculated lengths (like an ordinary SSS triangle construction).",
      image: { src: "math2-ch04-fig1-similar-triangle-construction.png", caption: "Rough figure for constructing \u25b3ABC and \u25b3PQR with AB:PQ = 3:2." } },
    { heading: "Constructing a similar triangle — common vertex", text: "When the new triangle shares a vertex/side-line with the original, divide the shared side into the number of equal parts matching the ratio's larger number, mark off the smaller number of parts, then draw a line parallel to the third side through that mark to complete the smaller/larger triangle." },
    { heading: "Tangent at a point, using the centre", text: "Uses the converse of the tangent theorem directly: draw the radius to the given point, then construct a line perpendicular to that radius at that point — this perpendicular line is the required tangent.",
      image: { src: "math2-ch04-fig2-tangent-using-centre.png", caption: "Line l, perpendicular to ray CP at P, is the required tangent (Fig. 4.10)." } },
    { heading: "Tangent at a point, without using the centre", text: "Uses the converse of the tangent-secant angle theorem: construct an inscribed angle in the alternate segment, then reproduce that same angle on the other side of the chord at the point of tangency — the new line is the tangent." },
    { heading: "Tangents from an external point", text: "Uses the fact that an angle inscribed in a semicircle is 90°: draw a circle with the segment joining the external point and the centre as diameter; where this new circle cuts the original circle are exactly the two points of tangency.",
      image: { src: "math2-ch04-fig3-tangents-external-point.png", caption: "Circle on OP as diameter meets the original circle at A and B, the points of tangency (Fig. 4.14)." } },
  ],
  definitions: [
    { term: "Construction (geometry)", def: "Drawing a geometric figure precisely, using only a ruler (straightedge) and compass, following a logical sequence of steps." },
    { term: "Analysis (in construction)", def: "The reasoning step, done before the actual construction, that uses known theorems to work out HOW a figure should be constructed." },
  ],
  formulas: [],
  solvedExamples: [
    {
      title: "Similar triangle — distinct vertices",
      problem: "△ABC ~ △PQR. In △ABC: AB=5.4 cm, BC=4.2 cm, AC=6.0 cm, and AB:PQ = 3:2. Construct both triangles.",
      image: { src: "math2-ch04-fig1-similar-triangle-construction.png", caption: "Rough figure showing the two triangles to be constructed." },
      steps: [
        "Since the triangles are similar, corresponding sides are proportional: AB/PQ = BC/QR = AC/PR = 3/2.",
        "Calculate the new triangle's sides: PQ = (5.4×2)/3 = 3.6 cm, QR = (4.2×2)/3 = 2.8 cm, PR = (6.0×2)/3 = 4.0 cm.",
        "Construct △ABC using the given sides 5.4, 4.2, 6.0 cm (standard SSS construction).",
        "Construct △PQR separately using the calculated sides 3.6, 2.8, 4.0 cm (standard SSS construction).",
      ],
      answer: "Two separate triangles, ABC and PQR, with sides in ratio 3:2."
    },
    {
      title: "Similar triangle — common vertex",
      problem: "Construct any △ABC. Then construct △A'BC' such that AB:A'B = 5:3 and △ABC ~ △A'BC'.",
      steps: [
        "Construct △ABC of any convenient size.",
        "Divide side BC into 5 equal parts (using the 'ray with equal divisions' method).",
        "Mark the point on BC that is 3 parts from B — call it C' (so BC' = (3/5)BC).",
        "Draw a line through C' parallel to side AC; let it meet AB at A'.",
        "△A'BC' is the required triangle, similar to △ABC in the ratio 3:5.",
      ],
      answer: "△A'BC' inside △ABC, similar in ratio 3:5, sharing vertex B."
    },
    {
      title: "Tangent using the centre",
      problem: "Construct a circle with centre C and any radius. Construct the tangent at a point P on the circle, using the centre.",
      image: { src: "math2-ch04-fig2-tangent-using-centre.png", caption: "The completed construction: line l \u22a5 ray CP at P." },
      steps: [
        "Draw the circle with centre C. Mark any point P on it.",
        "Draw ray CP (the radius extended slightly beyond P).",
        "At point P, construct a line l perpendicular to ray CP.",
        "Line l is the required tangent (by the converse of the tangent theorem).",
      ],
      answer: "Line l, perpendicular to radius CP at P, is the tangent."
    },
    {
      title: "Tangents from an external point",
      problem: "Construct a circle with centre O and any radius. Take a point P outside it. Construct the two tangents from P.",
      image: { src: "math2-ch04-fig3-tangents-external-point.png", caption: "The completed construction: tangents PA and PB from external point P." },
      steps: [
        "Draw the circle with centre O. Mark external point P.",
        "Draw segment OP, and construct its perpendicular bisector to find the midpoint M.",
        "Draw a second circle with centre M and radius MO (=MP) — this passes through both O and P.",
        "Mark the two points where this new circle intersects the original circle as A and B.",
        "Draw line PA and line PB — these are the two required tangents (since ∠OAP and ∠OBP are angles in a semicircle, hence 90°, matching the tangent theorem).",
      ],
      answer: "Line PA and line PB are the two tangents from P."
    },
  ],
  solvingTips: [
    "Always do the 'Analysis' step (working out and briefly noting WHY the construction works, using the relevant theorem) even in an exam, in rough — it prevents construction mistakes and is sometimes explicitly asked for.",
    "For similar-triangle constructions, always calculate all the new side lengths FIRST and write them down clearly before picking up the compass — don't try to compute mid-construction.",
    "For the 'divide a segment into equal parts' technique (needed for common-vertex similar triangle constructions), draw the auxiliary ray at a clear, wide angle to the main segment — this makes the equal divisions easier to mark accurately.",
    "For tangent construction from an external point, remember the key trick: the circle drawn on OP as diameter is what locates the tangent points — this single idea solves the whole construction.",
    "Always label points, lines and arcs clearly as you go, and draw the required tangent/triangle with a distinctly bolder or differently-styled line so it's clear which lines are the final answer vs. construction aids.",
    "Practise these constructions with an actual ruler, compass and protractor at home before the exam — construction marks are awarded for accuracy, not just for the right method.",
  ],
  importantPoints: [
    "Similar triangle construction has 2 cases: distinct vertices (calculate all new sides, construct separately) vs common vertex (divide the shared side, draw a parallel line).",
    "Tangent at a point using centre: draw the radius, construct the perpendicular to it at that point.",
    "Tangent at a point without centre: use the tangent-secant angle theorem (construct an equal angle in the alternate segment).",
    "Tangents from an external point: draw circle on OP as diameter; its intersections with the original circle are the points of tangency.",
    "Every construction should be preceded by a short 'Analysis' explaining which theorem justifies the method.",
  ],
  boardTips: [
    "Construction questions are compulsory and carry solid marks (often 3-4 marks each) — practise all 5 construction types (2 similar-triangle cases + 3 tangent cases) until you can do each confidently within a few minutes.",
    "Marks are given for the ROUGH FIGURE + ANALYSIS as well as the final construction — never skip writing these, even under time pressure.",
    "Accuracy matters: use a sharp pencil, measure carefully, and keep construction/arc marks visible (don't erase them) — examiners check the method, not just the final figure.",
    "A common combination question: construct a similar triangle AND state/verify the ratio — make sure your final measurements actually match the asked ratio before moving on.",
    "Common mistake: forgetting to label the final required line/triangle distinctly, making it unclear to the examiner which part of the drawing is the actual answer.",
  ],
  revisionSummary: [
    "Similar triangle (distinct vertices): calculate all new sides from the given ratio, construct separately by SSS.",
    "Similar triangle (common vertex): divide shared side per the ratio, draw a parallel line through the division point.",
    "Tangent at a point (using centre): perpendicular to the radius at that point.",
    "Tangent at a point (without centre): equal angle in the alternate segment (tangent-secant angle theorem).",
    "Tangents from external point P: circle on OP as diameter meets the original circle at the two points of tangency.",
  ],
},

// ============================================================ CHAPTER 5 ===
5: {
  title: "Co-ordinate Geometry",
  intro: "This chapter covers the core coordinate-geometry toolkit — the distance formula, the section formula (and its special cases, midpoint and centroid), and the slope of a line — used together to solve problems about points, segments, and collinearity in the coordinate plane.",
  objectives: [
    "Find the distance between two points using the distance formula.",
    "Find the coordinates of a point dividing a segment in a given ratio (section formula), including the midpoint and centroid special cases.",
    "Find the slope of a line given two points on it, and use slope to test collinearity or parallelism.",
    "Apply these formulas together to solve triangle- and quadrilateral-based coordinate problems.",
  ],
  concepts: [
    { heading: "Distance formula", text: "Derived using Pythagoras theorem on the right triangle formed by a point, and the horizontal/vertical lines through the two given points — gives the straight-line distance between any two points in the plane directly from their coordinates.",
      image: { src: "math2-ch05-fig1-distance-formula.png", caption: "A(x\u2081,y\u2081) and B(x\u2082,y\u2082) with D(x\u2082,y\u2081) forming right \u25b3ABD, used to derive AB via Pythagoras theorem." } },
    { heading: "Section formula", text: "Gives the coordinates of the point P that divides the segment joining A(x₁,y₁) and B(x₂,y₂) internally in the ratio m:n — derived using the property of intercepts made by three parallel lines on two transversals." },
    { heading: "Midpoint formula", text: "The special case of the section formula when the ratio is 1:1 (m=n) — the point exactly halfway between A and B." },
    { heading: "Centroid of a triangle", text: "The point where all three medians of a triangle meet; it always divides each median in the ratio 2:1 from the vertex. Its coordinates are simply the average of the three vertices' coordinates." },
    { heading: "Slope of a line", text: "For any two points on a (non-vertical) line, the ratio (y₂−y₁)/(x₂−x₁) is always the same, regardless of which two points on the line are chosen — this constant ratio is called the slope, usually denoted m." },
    { heading: "Slope and the shape of a line", text: "A line making an acute angle with the X-axis has positive slope; one making an obtuse angle has negative slope. The X-axis (and any line parallel to it) has slope 0. The Y-axis (and lines parallel to it) has an undefined slope." },
    { heading: "Using slope/distance to test collinearity", text: "Three points are collinear either if the sum of the distances between two pairs equals the distance of the third pair (using the distance formula), OR if the slope between each pair of points is the same (using the slope formula) — either method works, use whichever is more convenient." },
  ],
  definitions: [
    { term: "Distance formula", def: "The formula giving the distance between two points A(x₁,y₁) and B(x₂,y₂) in the coordinate plane: d(A,B) = √[(x₂−x₁)² + (y₂−y₁)²]." },
    { term: "Section formula", def: "The formula giving the coordinates of a point that divides a line segment joining two given points in a given ratio." },
    { term: "Centroid", def: "The point of concurrence of the three medians of a triangle; it divides each median in the ratio 2:1 from the vertex." },
    { term: "Slope of a line", def: "For any two points (x₁,y₁), (x₂,y₂) on a line, the constant ratio (y₂−y₁)/(x₂−x₁), usually denoted m." },
    { term: "Collinear points", def: "Points that all lie on one single straight line." },
  ],
  formulas: [
    {
      name: "Distance formula",
      formula: "d(A,B) = √[(x₂−x₁)² + (y₂−y₁)²]",
      symbols: "A(x₁,y₁), B(x₂,y₂) = the two points",
      units: "same unit as the coordinates",
      notes: "Distance from the origin O(0,0) to any point P(x,y) simplifies to d(O,P) = √(x²+y²).",
      mistakes: "Sign errors when subtracting negative coordinates — always substitute values in brackets first before simplifying."
    },
    {
      name: "Section formula",
      formula: "P(x,y) = ( (mx₂+nx₁)/(m+n) , (my₂+ny₁)/(m+n) )",
      symbols: "A(x₁,y₁), B(x₂,y₂) = endpoints; P divides AB internally in ratio m:n (from A to B)",
      units: "same unit as the coordinates",
      notes: "Always substitute m and n in the SAME order as the ratio is stated, and keep A as (x₁,y₁) matching the 'm' part nearest to it.",
      mistakes: "Swapping m and n, or swapping which point is (x₁,y₁) vs (x₂,y₂)."
    },
    {
      name: "Midpoint formula",
      formula: "M(x,y) = ( (x₁+x₂)/2 , (y₁+y₂)/2 )",
      symbols: "A(x₁,y₁), B(x₂,y₂) = endpoints of the segment",
      units: "same unit as the coordinates",
      notes: "The special case of the section formula for ratio 1:1.",
      mistakes: "None common — this formula is simple, but double-check you're averaging x with x and y with y."
    },
    {
      name: "Centroid of a triangle",
      formula: "G(x,y) = ( (x₁+x₂+x₃)/3 , (y₁+y₂+y₃)/3 )",
      symbols: "A(x₁,y₁), B(x₂,y₂), C(x₃,y₃) = the three vertices",
      units: "same unit as the coordinates",
      notes: "Simply the average of all three vertices' coordinates — very quick to compute directly.",
      mistakes: "Dividing by 2 instead of 3 (confusing it with the midpoint formula)."
    },
    {
      name: "Slope of a line",
      formula: "m = (y₂−y₁)/(x₂−x₁)",
      symbols: "(x₁,y₁), (x₂,y₂) = any two points on the line",
      units: "no unit (a pure ratio)",
      notes: "Slope of X-axis (or any line ∥ X-axis) = 0. Slope of Y-axis (or any line ∥ Y-axis) is undefined (division by zero).",
      mistakes: "Inconsistently ordering the subtraction (must use y₂−y₁ over x₂−x₁, not mixing point 1 and point 2 across numerator and denominator)."
    },
  ],
  solvedExamples: [
    {
      title: "Distance formula",
      problem: "Find the distance between P(−1, 1) and Q(5, −7).",
      steps: [
        "x₁=−1, y₁=1, x₂=5, y₂=−7",
        "d(P,Q) = √[(x₂−x₁)² + (y₂−y₁)²] = √[(5−(−1))² + (−7−1)²]",
        "= √[(6)² + (−8)²] = √[36+64] = √100",
      ],
      answer: "d(P,Q) = 10"
    },
    {
      title: "Section formula",
      problem: "Find the coordinates of the point that divides the segment joining A(4, −1) and B(−2, −3) in the ratio 3:1.",
      steps: [
        "x₁=4, y₁=−1, x₂=−2, y₂=−3, m=3, n=1",
        "x = (mx₂+nx₁)/(m+n) = [3(−2)+1(4)]/(3+1) = [−6+4]/4 = −2/4",
        "y = (my₂+ny₁)/(m+n) = [3(−3)+1(−1)]/(3+1) = [−9−1]/4 = −10/4",
      ],
      answer: "P = (−0.5, −2.5)"
    },
    {
      title: "Centroid of a triangle",
      problem: "Find the centroid of the triangle with vertices A(4,7), B(8,4), C(7,11).",
      steps: [
        "x = (x₁+x₂+x₃)/3 = (4+8+7)/3 = 19/3",
        "y = (y₁+y₂+y₃)/3 = (7+4+11)/3 = 22/3",
      ],
      answer: "G = (19/3, 22/3)"
    },
    {
      title: "Testing collinearity using slope",
      problem: "Show that points P(−2, 3), Q(1, 2), R(4, 1) are collinear.",
      steps: [
        "Slope of PQ = (2−3)/(1−(−2)) = −1/3",
        "Slope of QR = (1−2)/(4−1) = −1/3",
        "Slope of PQ = Slope of QR, and Q is a common point,",
      ],
      answer: "Since slope PQ = slope QR, points P, Q, R are collinear."
    },
  ],
  solvingTips: [
    "Before substituting into any formula, write down x₁,y₁,x₂,y₂ (and m,n if relevant) as a clearly labelled list — this single habit prevents almost all sign and substitution errors in this chapter.",
    "For 'show that points are collinear' questions, the slope method is usually faster than the distance method — compute the slope between two pairs sharing a common point, and check they're equal.",
    "For section-formula questions, re-read the ratio direction carefully — 'P divides AB in ratio m:n' means m is associated with B (the far point) and n with A (the near point) in the formula, so always double check which letter goes where.",
    "For centroid problems, remember it's a ÷3 average of all three vertices — don't confuse it with the ÷2 midpoint formula.",
    "When a problem gives geometric information (e.g. 'ABCD is a parallelogram', 'triangle is isosceles') in coordinate form, translate that condition into a distance/slope equation as your first step, then solve algebraically.",
    "Sketch a rough diagram of the given points whenever possible — even an approximate sketch quickly reveals whether your final answer's position makes sense.",
  ],
  importantPoints: [
    "Distance formula: d(A,B) = √[(x₂−x₁)²+(y₂−y₁)²]. Distance from origin: √(x²+y²).",
    "Section formula (ratio m:n from A to B): x=(mx₂+nx₁)/(m+n), y=(my₂+ny₁)/(m+n).",
    "Midpoint (ratio 1:1): x=(x₁+x₂)/2, y=(y₁+y₂)/2.",
    "Centroid of a triangle: x=(x₁+x₂+x₃)/3, y=(y₁+y₂+y₃)/3 — divides each median 2:1 from the vertex.",
    "Slope: m=(y₂−y₁)/(x₂−x₁). X-axis/parallel lines: slope=0. Y-axis/parallel lines: slope undefined.",
    "Collinearity: equal slopes between pairs sharing a point, OR sum of two distances = the third.",
  ],
  boardTips: [
    "Distance formula, section formula, and slope numericals are all independently, frequently asked — expect at least 2-3 separate questions drawing on this chapter.",
    "'Show that ABCD is a parallelogram/rectangle/rhombus using coordinates' is a very common composite question — practise translating each shape's defining property (equal sides, equal diagonals, right angles via slope, etc.) into distance/slope checks.",
    "Centroid numericals (find the centroid, OR find a missing vertex given the centroid) are common both ways — practise solving the formula in reverse too.",
    "'Determine whether the given points are collinear' is a guaranteed question type — be fluent in both the slope method and the distance-sum method.",
    "Common mistake: sign errors substituting negative coordinates — always substitute the FULL value in brackets, e.g. (−7−1) not −7−1, before simplifying.",
  ],
  revisionSummary: [
    "Distance: d(A,B)=√[(x₂−x₁)²+(y₂−y₁)²]; from origin: √(x²+y²).",
    "Section formula (m:n from A to B): x=(mx₂+nx₁)/(m+n), y=(my₂+ny₁)/(m+n).",
    "Midpoint: average of coordinates (÷2). Centroid: average of 3 vertices (÷3).",
    "Slope: m=(y₂−y₁)/(x₂−x₁); 0 for horizontal, undefined for vertical.",
    "Collinearity: equal slopes (shared point) OR sum of 2 distances = the third.",
  ],
},

// ============================================================ CHAPTER 6 ===
6: {
  title: "Trigonometry",
  intro: "This chapter extends the three basic trigonometric ratios to their reciprocals (cosec, sec, cot), builds the three fundamental trigonometric identities, and applies all of this to real-world heights-and-distances problems using the angle of elevation and angle of depression.",
  objectives: [
    "Define and use cosec, sec and cot ratios as reciprocals of sin, cos and tan.",
    "Recall and apply the standard trigonometric ratios for 0°, 30°, 45°, 60°, 90°.",
    "State and apply the three fundamental trigonometric identities.",
    "Solve heights-and-distances word problems using the angle of elevation and angle of depression.",
  ],
  concepts: [
    { heading: "Reciprocal ratios", text: "cosec θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ = cos θ/sin θ. In a right triangle with angle θ: cosec θ = hypotenuse/opposite, sec θ = hypotenuse/adjacent, cot θ = adjacent/opposite.",
      image: { src: "math2-ch06-fig1-basic-ratio-triangle.png", caption: "Right \u25b3ABC with \u2220B = 90\u00b0 and \u2220C = \u03b8 \u2014 the base triangle for every ratio in this chapter." } },
    { heading: "Trigonometric identities", text: "Derived directly from Pythagoras theorem (BC²+AB²=AC²) by dividing through by AC², sin²θ, or cos²θ respectively, giving three fundamental identities that hold for every acute angle θ." },
    { heading: "Standard angle values", text: "The exact trigonometric ratio values for the five standard angles 0°, 30°, 45°, 60°, 90° should be memorised — they appear constantly throughout numericals in this chapter and the next (Mensuration)." },
    { heading: "Angle of elevation", text: "When an observer looks UP at an object above the horizontal line of sight, the angle between the horizontal and the line of vision is the angle of elevation." },
    { heading: "Angle of depression", text: "When an observer looks DOWN at an object below the horizontal line of sight, the angle between the horizontal and the line of vision is the angle of depression." },
    { heading: "Heights and distances method", text: "Draw a clear rough figure showing the vertical object (tower/tree/building) as a perpendicular segment, mark the given angle(s) of elevation/depression, then form a right triangle and apply the appropriate trigonometric ratio (usually tan θ = opposite/adjacent) to solve for the unknown height or distance." },
  ],
  definitions: [
    { term: "Cosecant (cosec θ)", def: "The reciprocal of sin θ: cosec θ = 1/sin θ = hypotenuse/opposite side." },
    { term: "Secant (sec θ)", def: "The reciprocal of cos θ: sec θ = 1/cos θ = hypotenuse/adjacent side." },
    { term: "Cotangent (cot θ)", def: "The reciprocal of tan θ: cot θ = 1/tan θ = adjacent side/opposite side = cos θ/sin θ." },
    { term: "Angle of elevation", def: "The angle between the horizontal line of sight and the line of vision when an observer looks upward at an object above the horizontal." },
    { term: "Angle of depression", def: "The angle between the horizontal line of sight and the line of vision when an observer looks downward at an object below the horizontal." },
  ],
  formulas: [
    {
      name: "Reciprocal relations",
      formula: "sin θ × cosec θ = 1  ,  cos θ × sec θ = 1  ,  tan θ × cot θ = 1",
      symbols: "θ = any acute angle",
      units: "—",
      notes: "Each pair are multiplicative inverses of each other — extremely useful for quickly converting between them.",
      mistakes: "Confusing which ratio is the reciprocal of which (e.g. thinking sec is the reciprocal of sin instead of cos)."
    },
    {
      name: "Fundamental trigonometric identities",
      formula: "sin²θ + cos²θ = 1  ,  1 + tan²θ = sec²θ  ,  1 + cot²θ = cosec²θ",
      symbols: "θ = any acute angle",
      units: "—",
      notes: "All three are derived from Pythagoras theorem — if you forget one, you can quickly re-derive it by dividing sin²θ+cos²θ=1 by sin²θ or cos²θ.",
      mistakes: "Writing sin²θ+cos²θ=1 as sinθ²+cosθ² (misplacing the square) — always square the whole ratio, i.e. (sin θ)²."
    },
    {
      name: "Basic trigonometric ratios (right triangle)",
      formula: "sin θ = opp/hyp ,  cos θ = adj/hyp ,  tan θ = opp/adj",
      symbols: "opp = side opposite θ, adj = side adjacent to θ, hyp = hypotenuse",
      units: "—",
      notes: "The starting point for every ratio and identity in this chapter — make sure the 'opposite' and 'adjacent' sides are identified relative to the CORRECT angle in the triangle.",
      mistakes: "Swapping opposite and adjacent when the right angle isn't at the 'expected' vertex in a rotated figure."
    },
  ],
  solvedExamples: [
    {
      title: "Finding other ratios from one given ratio",
      problem: "If sin θ = 20/29, find cos θ.",
      steps: [
        "Using the identity sin²θ + cos²θ = 1:",
        "cos²θ = 1 − sin²θ = 1 − (20/29)² = 1 − 400/841 = 441/841",
        "cos θ = √(441/841) = 21/29",
      ],
      answer: "cos θ = 21/29"
    },
    {
      title: "Angle of elevation",
      problem: "An observer 10 m from a tree looks at its top; the angle of elevation is 60°. Find the height of the tree. (√3 = 1.73)",
      image: { src: "math2-ch06-fig2-angle-of-elevation-example.png", caption: "\u25b3ABC: tree AB, observer at C, 10 m away, angle of elevation 60\u00b0." },
      steps: [
        "Let AB = height of tree, BC = 10 m (distance from tree), ∠BCA = 60° (angle of elevation).",
        "In right △ABC: tan θ = AB/BC",
        "tan 60° = AB/10, and tan 60° = √3",
        "AB = 10 × √3 = 10 × 1.73",
      ],
      answer: "Height of the tree = 17.3 m"
    },
    {
      title: "Angle of depression",
      problem: "From the top of a 40 m building, the angle of depression of a parked scooter is 30°. Find the distance of the scooter from the building. (√3 = 1.73)",
      image: { src: "math2-ch06-fig3-angle-of-depression-example.png", caption: "Building AB = 40 m, scooter at C, angle of depression 30\u00b0 from A." },
      steps: [
        "Let AB = building = 40 m, C = position of scooter, x = BC = required distance.",
        "Angle of depression from A = 30°, so (by alternate angles) angle of elevation from C to A is also 30°.",
        "In right △ABC: tan 30° = AB/BC = 40/x",
        "tan 30° = 1/√3, so 1/√3 = 40/x, giving x = 40√3",
      ],
      answer: "x = 40 × 1.73 = 69.2 m"
    },
  ],
  solvingTips: [
    "Memorise the standard ratio table (0°,30°,45°,60°,90° for sin, cos, tan) cold — nearly every numerical in this chapter and the next (Mensuration) depends on instant recall of these values.",
    "For 'find the other ratios given one ratio' questions, draw a quick right triangle, mark the given ratio's two sides using the given fraction, find the third side using Pythagoras theorem, then read off any other ratio directly — this is often faster than manipulating identities algebraically.",
    "For heights-and-distances problems, ALWAYS draw the rough figure first, clearly marking the vertical object, the horizontal ground, the given angle(s), and what's asked — this single habit prevents most setup errors.",
    "Remember: angle of elevation (looking up) and angle of depression (looking down) are usually equal to each other when measured from the two ends of the same line of sight (alternate angles, since the horizontal lines are parallel) — this is a very useful shortcut in two-observer problems.",
    "When a problem gives two different angles of elevation from two different points, it usually leads to two equations in two unknowns (height and one distance) — set both up before trying to solve either.",
    "Keep √2, √3 substitution values (given in the problem, e.g. √3=1.73) for the very last step of your calculation — carry the surd form through your working for accuracy, and substitute the decimal only at the end.",
  ],
  importantPoints: [
    "cosec θ=1/sinθ, secθ=1/cosθ, cotθ=1/tanθ=cosθ/sinθ.",
    "Identities: sin²θ+cos²θ=1, 1+tan²θ=sec²θ, 1+cot²θ=cosec²θ.",
    "Standard values (0°,30°,45°,60°,90°) for sin, cos, tan must be memorised.",
    "Angle of elevation: looking up from horizontal. Angle of depression: looking down from horizontal.",
    "Heights-and-distances: draw the figure, form a right triangle, apply tanθ=opposite/adjacent (most common) or another ratio as needed.",
  ],
  boardTips: [
    "'If sin θ (or another ratio) = ___, find the other trigonometric ratios' is one of the most repeated question types — practise the quick right-triangle-sketch method for these.",
    "Proving trigonometric identities (algebraic manipulation questions using sin²θ+cos²θ=1 and friends) are common 2-3 mark questions — practise simplifying expressions using these three identities fluently.",
    "At least one heights-and-distances word problem is guaranteed, often worth 3+ marks — practise both single-observer (one angle) and two-point/two-angle problem types.",
    "Common mistake: using the wrong ratio (e.g. sin instead of tan) for a heights-and-distances problem — always double check which two sides (relative to the given angle) are actually known/wanted before picking the ratio.",
    "Common mistake: forgetting that angle of elevation and angle of depression, from two ends of the SAME line of sight, are equal (alternate angles) — missing this often stalls two-observer problems.",
  ],
  revisionSummary: [
    "cosecθ=1/sinθ, secθ=1/cosθ, cotθ=1/tanθ.",
    "Identities: sin²θ+cos²θ=1; 1+tan²θ=sec²θ; 1+cot²θ=cosec²θ.",
    "Memorise sin/cos/tan for 0°,30°,45°,60°,90°.",
    "Angle of elevation = looking up from horizontal; angle of depression = looking down from horizontal (equal to each other via alternate angles on the same sight-line).",
    "Heights-distances: draw figure → form right triangle → apply the matching trig ratio.",
  ],
},

// ============================================================ CHAPTER 7 ===
7: {
  title: "Mensuration",
  intro: "This chapter reviews the surface area and volume formulas for standard solids (cuboid, cube, cylinder, cone, sphere, hemisphere) and applies them to composite/combined solids, then introduces three new circle-related formulas: length of an arc, area of a sector, and area of a segment.",
  objectives: [
    "Recall and apply the surface area and volume formulas for cuboid, cube, cylinder, cone, sphere and hemisphere.",
    "Solve problems involving combinations of two or more solids.",
    "Find the length of an arc and the area of a sector, given the radius and central angle.",
    "Find the area of a minor or major segment of a circle.",
  ],
  concepts: [
    { heading: "Surface area & volume of solids (recall)", text: "Each standard solid has a fixed formula for volume, curved/lateral surface area, and total surface area — organised in the formula list below. Total surface area includes ALL faces; curved/lateral surface area excludes the flat top/bottom faces." },
    { heading: "Combination of solids", text: "For a composite shape (e.g. a cone sitting on a cylinder, a hemisphere on top of a cone, a cylindrical can with hemispherical ends), find the volume of the whole by ADDING the volumes of each individual part. For surface area, only include the surfaces that are actually visible/exposed on the outside — the joining flat faces between parts are usually NOT included.",
      image: { src: "math2-ch07-fig3-toy-combination-solids.png", caption: "A toy built from a hemisphere, cylinder and cone \u2014 a classic combination-of-solids figure." } },
    { heading: "Minor and major sector", text: "A sector is the region enclosed by two radii and an arc. The sector corresponding to the minor arc is the minor sector; the one corresponding to the major arc is the major sector.",
      image: { src: "math2-ch07-fig1-sector-of-circle.png", caption: "O-PMQ is the minor sector and O-PBQ is the major sector of the circle with centre O." } },
    { heading: "Length of an arc", text: "An arc's length is a fraction of the full circumference, exactly matching the fraction its central angle is of 360°." },
    { heading: "Area of a sector", text: "Similarly, a sector's area is the same fraction of the whole circle's area as its central angle is of 360°." },
    { heading: "Area of a segment", text: "A segment is the region between a chord and its arc. Minor segment area = Area of the corresponding sector − Area of the triangle formed by the two radii and the chord.",
      image: { src: "math2-ch07-fig2-segment-of-circle.png", caption: "Chord AB divides the circle into a minor segment (AXB) and a major segment (AYB)." } },
  ],
  definitions: [
    { term: "Sector of a circle", def: "The region enclosed by two radii of a circle and the arc between them." },
    { term: "Segment of a circle", def: "The region enclosed by a chord of a circle and the arc it cuts off." },
    { term: "Minor arc / Minor sector / Minor segment", def: "The smaller arc/sector/segment formed at a chord or pair of radii (less than a semicircle)." },
    { term: "Major arc / Major sector / Major segment", def: "The larger arc/sector/segment formed at a chord or pair of radii (more than a semicircle)." },
  ],
  formulas: [
    {
      name: "Cuboid",
      formula: "TSA = 2(lb+bh+hl)  ,  LSA = 2h(l+b)  ,  Volume = lbh",
      symbols: "l=length, b=breadth, h=height",
      units: "area in sq. units, volume in cubic units",
      notes: "LSA = lateral (side faces only) surface area; TSA = total (all 6 faces) surface area.",
      mistakes: "Forgetting a term inside the TSA bracket (must have all 3 pairs: lb, bh, hl)."
    },
    {
      name: "Cube",
      formula: "TSA = 6l²  ,  LSA = 4l²  ,  Volume = l³",
      symbols: "l = edge length",
      units: "area in sq. units, volume in cubic units",
      notes: "Special case of a cuboid where l=b=h.",
      mistakes: "Using 6l² when only the 4 side faces (LSA) were asked for."
    },
    {
      name: "Cylinder",
      formula: "CSA = 2πrh  ,  TSA = 2πr(r+h)  ,  Volume = πr²h",
      symbols: "r = radius, h = height",
      units: "area in sq. units, volume in cubic units",
      notes: "CSA = curved surface only; TSA = CSA + both circular ends (2πr² more).",
      mistakes: "Using TSA formula when only the curved surface (e.g. a pipe/tube with open ends) was actually needed."
    },
    {
      name: "Cone",
      formula: "l = √(h²+r²)  ,  CSA = πrl  ,  TSA = πr(r+l)  ,  Volume = (1/3)πr²h",
      symbols: "r = base radius, h = height, l = slant height",
      units: "area in sq. units, volume in cubic units",
      notes: "Always find slant height l FIRST (using Pythagoras) if it isn't directly given.",
      mistakes: "Using height h in the CSA formula instead of slant height l."
    },
    {
      name: "Sphere",
      formula: "Surface area = 4πr²  ,  Volume = (4/3)πr³",
      symbols: "r = radius",
      units: "area in sq. units, volume in cubic units",
      notes: "A sphere has only one type of surface area (no separate CSA/TSA distinction, since it's fully curved).",
      mistakes: "Mixing up the 4πr² (area) and (4/3)πr³ (volume) formulas."
    },
    {
      name: "Hemisphere",
      formula: "CSA = 2πr²  ,  TSA = 3πr²  ,  Volume = (2/3)πr³",
      symbols: "r = radius",
      units: "area in sq. units, volume in cubic units",
      notes: "TSA of a SOLID hemisphere = curved surface (2πr²) + flat circular base (πr²) = 3πr². If only the curved dome is needed, use CSA=2πr².",
      mistakes: "Using TSA (3πr²) when a problem describes a hollow/open hemisphere (bowl) where only CSA applies."
    },
    {
      name: "Length of an arc",
      formula: "l = (θ/360) × 2πr",
      symbols: "θ = central angle (degrees), r = radius",
      units: "same unit as radius",
      notes: "Same fraction-of-the-whole idea as the sector area formula.",
      mistakes: "Forgetting to convert or misplacing θ/360 as 360/θ."
    },
    {
      name: "Area of a sector",
      formula: "A = (θ/360) × πr²   [also: A = (1/2) × l × r]",
      symbols: "θ = central angle (degrees), r = radius, l = arc length",
      units: "sq. units",
      notes: "The second form (½lr) is very fast when the arc length is already known/found.",
      mistakes: "Using diameter instead of radius in πr²."
    },
    {
      name: "Area of a segment",
      formula: "A(minor segment) = A(sector) − A(triangle) = (θ/360)πr² − (1/2)r²sin θ",
      symbols: "θ = central angle, r = radius",
      units: "sq. units",
      notes: "For the MAJOR segment: A(major segment) = A(circle) − A(minor segment).",
      mistakes: "Forgetting to subtract the triangle's area (just using the sector area alone gives the wrong, larger region)."
    },
  ],
  solvedExamples: [
    {
      title: "Volume of a cylinder (real-world application)",
      problem: "A cylindrical water tank has radius 2.8 m and height 3.5 m. How many litres of water can it hold? (π=22/7, 1 litre = 1000 cm³ = 0.001 m³)",
      steps: [
        "Volume = πr²h = (22/7) × (2.8)² × 3.5",
        "= (22/7) × 7.84 × 3.5",
        "= 86.24 m³",
        "Convert to litres: 1 m³ = 1000 litres, so 86.24 m³ = 86240 litres",
      ],
      answer: "The tank holds 86,240 litres"
    },
    {
      title: "Combination of solids",
      problem: "A toy is in the shape of a cone (radius 3 cm, height 4 cm) mounted on a hemisphere of the same radius. Find the total volume. (π = 3.14)",
      steps: [
        "Volume of cone = (1/3)πr²h = (1/3)(3.14)(3²)(4) = (1/3)(3.14)(9)(4) = 37.68 cm³",
        "Volume of hemisphere = (2/3)πr³ = (2/3)(3.14)(3³) = (2/3)(3.14)(27) = 56.52 cm³",
        "Total volume = volume of cone + volume of hemisphere = 37.68 + 56.52",
      ],
      answer: "Total volume = 94.2 cm³"
    },
    {
      title: "Length of arc and area of sector",
      problem: "The radius of a circle is 10 cm and the measure of an arc is 54°. Find the length of the arc and the area of the corresponding sector. (π=3.14)",
      steps: [
        "Length of arc: l = (θ/360) × 2πr = (54/360) × 2 × 3.14 × 10",
        "= 0.15 × 62.8 = 9.42 cm",
        "Area of sector: A = (θ/360) × πr² = (54/360) × 3.14 × 100",
        "= 0.15 × 314 = 47.1 cm²",
      ],
      answer: "Arc length = 9.42 cm, Sector area = 47.1 cm²"
    },
    {
      title: "Area of a segment",
      problem: "Radius of a circle is 12 cm; a chord subtends an angle of 30° at the centre. Find the area of the corresponding minor segment. (sin 30°=0.5, π=3.14)",
      steps: [
        "A(sector) = (θ/360)πr² = (30/360)(3.14)(144) = (1/12)(452.16) = 37.68 cm²",
        "A(triangle) = (1/2)r²sinθ = (1/2)(144)(0.5) = 36 cm²",
        "A(minor segment) = A(sector) − A(triangle) = 37.68 − 36",
      ],
      answer: "Area of minor segment = 1.68 cm²"
    },
  ],
  solvingTips: [
    "Keep the full formula list (all 6 solids) written out on one revision page and drill it until instant — nearly every mark in this chapter depends on quick, accurate formula recall.",
    "For combination-of-solids problems, always identify EXACTLY which surfaces are exposed before computing surface area (e.g. the flat circular face where a cone sits on a cylinder is hidden, so exclude it) — but for VOLUME, simply add every part's volume, no exceptions.",
    "For a cone, always check whether the slant height is given directly or needs to be calculated via Pythagoras (l=√(h²+r²)) before using it in the CSA/TSA formula.",
    "For arc/sector/segment problems, write down r and θ clearly as your first step — nearly every formula in the second half of this chapter needs just these two values.",
    "For segment-area problems, always compute the sector area and the triangle area as two clearly separate steps, then subtract — trying to combine them in one line often causes errors.",
    "Keep units consistent throughout a problem (don't mix cm and m) and convert to the units asked for in the final answer (e.g. m³ to litres) as the very last step.",
  ],
  importantPoints: [
    "Cuboid: TSA=2(lb+bh+hl), Vol=lbh. Cube: TSA=6l², Vol=l³.",
    "Cylinder: CSA=2πrh, TSA=2πr(r+h), Vol=πr²h. Cone: l=√(h²+r²), CSA=πrl, TSA=πr(r+l), Vol=(1/3)πr²h.",
    "Sphere: SA=4πr², Vol=(4/3)πr³. Hemisphere: CSA=2πr², TSA=3πr², Vol=(2/3)πr³.",
    "Arc length l=(θ/360)×2πr. Sector area A=(θ/360)×πr² = (1/2)lr.",
    "Segment area = Sector area − Triangle area = (θ/360)πr² − (1/2)r²sinθ.",
    "Combination solids: ADD volumes of all parts; for surface area, include only the actually EXPOSED surfaces.",
  ],
  boardTips: [
    "Combination-of-solids numericals (e.g. capsule = cylinder + 2 hemispheres, toy = cone + hemisphere, silo = cylinder + cone) are asked almost every year, often as a higher-mark question — practise identifying the component solids from a real-world description.",
    "Arc length, sector area and segment area numericals are frequently asked as a connected multi-part question (find the arc length, then the sector area, then sometimes the segment area from the same given data) — practise the full chain.",
    "'Complete the activity' fill-in-the-blank problems using the surface area/volume formulas are common — practise substituting into partially completed formula steps.",
    "Read word problems carefully for whether a shape is SOLID (needs TSA, includes base) or HOLLOW/OPEN (needs CSA only, e.g. a bowl, pipe, or tent) — this changes which formula applies.",
    "Common mistake: forgetting to subtract the triangle's area when finding a segment (giving the sector's area as the final answer by mistake).",
  ],
  revisionSummary: [
    "Cuboid/Cube/Cylinder/Cone/Sphere/Hemisphere: memorise CSA/LSA, TSA, and Volume for each.",
    "Combination solids: ADD volumes of all parts; surface area = only the exposed surfaces.",
    "Arc length: l=(θ/360)×2πr. Sector area: A=(θ/360)×πr² = ½lr.",
    "Segment area = Sector area − Triangle area = (θ/360)πr² − ½r²sinθ. Major segment = circle area − minor segment.",
  ],
},

/* CHAPTERS_MARKER_DO_NOT_REMOVE */

};
