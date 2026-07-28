/* ==========================================================================
   PIXEL STUDY — Mathematics Part I : Algebra (Std X, Maharashtra Board)
   Detailed chapter revision content, extracted & summarised from the
   Balbharati textbook.

   Math is numerical/procedural, not diagram-driven, so these chapters use a
   different (but compatible) shape from the Science lesson files:
   NO diagrams array. Instead: solvedExamples (worked, step-by-step) and
   solvingTips (strategy / shortcut advice) are added. renderChapterLesson()
   in index.html renders whichever sections are present for a given chapter,
   so this is purely additive and does not affect the Science rendering.
   ========================================================================== */

window.MATH1_LESSONS = {

// ============================================================ CHAPTER 1 ===
1: {
  title: "Linear Equations in Two Variables",
  intro: "This chapter covers three methods of solving a pair of simultaneous linear equations in two variables — graphical, elimination, and Cramer's (determinant) method — plus equations that must first be transformed into linear form, and word problems solved using simultaneous equations.",
  objectives: [
    "Solve simultaneous linear equations graphically, by elimination, and by Cramer's rule.",
    "Transform equations with reciprocal/fractional terms into linear form before solving.",
    "Set up and solve simultaneous equations from a word problem.",
  ],
  concepts: [
    { heading: "Simultaneous linear equations", text: "Two linear equations in the same two variables, considered together. Their common solution (x, y) is the point where both equations are satisfied simultaneously." },
    { heading: "Graphical method", text: "Plot at least 4 ordered pairs for each equation, draw both lines on the same graph. The point where the two lines intersect is the solution. If the lines are parallel, there is no solution; if both equations give the same line, there are infinitely many solutions." },
    { heading: "Elimination method", text: "Multiply one or both equations by suitable numbers so that the coefficient of one variable becomes equal (or opposite) in both, then add or subtract the equations to eliminate that variable and solve for the other." },
    { heading: "Cramer's rule (determinant method)", text: "Write the equations as a₁x + b₁y = c₁ and a₂x + b₂y = c₂. Compute three determinants D, Dx, Dy, then x = Dx/D and y = Dy/D. Fast and systematic, especially useful for exam-style equations." },
    { heading: "Equations reducible to linear form", text: "Equations containing 1/x, 1/y (or similar reciprocal/compound expressions) are not linear as written. Substitute m = 1/x, n = 1/y (or similar), solve the resulting linear equations for m and n, then convert back to find x and y." },
    { heading: "Word problems", text: "Identify the two unknowns, translate each condition in the problem into one equation, then solve the resulting pair of simultaneous equations by any method (elimination or Cramer's rule is usually fastest)." },
  ],
  definitions: [
    { term: "Linear equation in two variables", def: "An equation of the form ax + by + c = 0, where a, b, c are real numbers and a, b are not simultaneously zero." },
    { term: "Simultaneous equations", def: "Two (or more) linear equations in the same variables, considered and solved together." },
    { term: "Determinant", def: "A number calculated from a square array of numbers (here, a 2×2 array), used to solve simultaneous equations via Cramer's rule; for |a b; c d| the value is ad − bc." },
    { term: "Consistent equations", def: "A pair of simultaneous equations that has at least one common solution (graphically, the lines intersect or coincide)." },
  ],
  formulas: [
    {
      name: "Cramer's Rule",
      formula: "x = Dx/D ,  y = Dy/D",
      symbols: "For a₁x+b₁y=c₁ and a₂x+b₂y=c₂: D = |a₁ b₁; a₂ b₂|, Dx = |c₁ b₁; c₂ b₂|, Dy = |a₁ c₁; a₂ c₂|",
      units: "—",
      notes: "In Dx, the x-coefficient column is replaced by the constants column. In Dy, the y-coefficient column is replaced by the constants column.",
      mistakes: "Swapping which column gets replaced (Dx vs Dy); forgetting D goes in every denominator, not just one."
    },
    {
      name: "Value of a 2×2 determinant",
      formula: "|a b; c d| = ad − bc",
      symbols: "a, b (first row); c, d (second row)",
      units: "—",
      notes: "Multiply the diagonals and subtract: (top-left × bottom-right) − (top-right × bottom-left).",
      mistakes: "Subtracting in the wrong order (bc − ad instead of ad − bc) flips the sign of the whole answer."
    },
  ],
  solvedExamples: [
    {
      title: "Solve using Cramer's Rule",
      problem: "Solve the simultaneous equations: 5x + 3y = −11 ; 2x + 4y = −10",
      steps: [
        "Write D using the coefficients of x and y: D = |5 3; 2 4| = (5×4) − (2×3) = 20 − 6 = 14",
        "Write Dx by replacing the x-coefficient column with the constants: Dx = |−11 3; −10 4| = (−11×4) − (−10×3) = −44 + 30 = −14",
        "Write Dy by replacing the y-coefficient column with the constants: Dy = |5 −11; 2 −10| = (5×−10) − (2×−11) = −50 + 22 = −28",
        "x = Dx/D = −14/14 = −1",
        "y = Dy/D = −28/14 = −2",
      ],
      answer: "(x, y) = (−1, −2)"
    },
    {
      title: "Reducing to linear form",
      problem: "Solve: 4/x + 5/y = 7 ; 3/x + 4/y = 5",
      steps: [
        "Substitute m = 1/x and n = 1/y. The equations become: 4m + 5n = 7 and 3m + 4n = 5",
        "Solve this new pair by elimination or Cramer's rule: m = 3, n = −1",
        "Convert back: since m = 1/x = 3, x = 1/3. Since n = 1/y = −1, y = −1",
      ],
      answer: "(x, y) = (1/3, −1)"
    },
    {
      title: "Word problem — rectangle",
      problem: "The perimeter of a rectangle is 40 cm. Its length is more than double its breadth by 2. Find the length and breadth.",
      steps: [
        "Let length = x cm, breadth = y cm.",
        "Condition 1 (perimeter): 2(x + y) = 40, so x + y = 20",
        "Condition 2 (length vs breadth): x = 2y + 2, so x − 2y = 2",
        "Solve x + y = 20 and x − 2y = 2 using Cramer's rule: D = −3, Dx = −42, Dy = −18",
        "x = −42/−3 = 14 and y = −18/−3 = 6",
      ],
      answer: "Length = 14 cm, Breadth = 6 cm"
    },
  ],
  solvingTips: [
    "If a question doesn't specify the method, Cramer's rule is usually the fastest and safest for board exams — it avoids the sign errors that elimination can cause.",
    "Before applying Cramer's rule, always rewrite both equations in the exact form ax + by = c — this avoids mixing up which numbers go into D, Dx, Dy.",
    "For the graphical method, always compute at least 4 ordered pairs (not 2) — this lets you catch a plotting mistake if one point doesn't line up with the others.",
    "When an equation has 1/x, 1/y, or similar terms, substitute new variables (m, n) immediately — don't try to eliminate fractions directly, it gets messy fast.",
    "In word problems: write down clearly what x and y represent as your very first step, in full sentences — this avoids confusion later and helps you set up both conditions correctly.",
    "For 'upstream/downstream' or 'against wind/with wind' problems, always let x = speed in still water/air and y = speed of current/wind — this pattern repeats every year.",
  ],
  importantPoints: [
    "General form: ax + by + c = 0, or written for solving as ax + by = c.",
    "D = 0 means the equations either have no solution (parallel lines) or infinitely many solutions (same line) — Cramer's rule cannot be used when D = 0.",
    "Three methods available: Graphical (visual, needs a graph), Elimination (add/subtract to cancel a variable), Cramer's rule (fast, uses determinants).",
    "Always verify your final answer by substituting back into BOTH original equations.",
  ],
  boardTips: [
    "Cramer's rule numericals are asked almost every year, often as a direct 'solve using Cramer's rule' 3-mark question — practise the D, Dx, Dy setup until it's automatic.",
    "'Complete the activity' fill-in-the-blank questions on Cramer's rule or elimination are very common — practise filling in partially-worked examples, not just solving from scratch.",
    "At least one word problem (age, boat speed, cost of articles, or number-based) is guaranteed — practise translating conditions into equations for each of these problem types.",
    "Common mistake costing marks: forgetting to state the final answer as an ordered pair (x, y) = (__, __) after finding x and y separately.",
    "Common mistake: sign errors while calculating determinants — always double check ad − bc, not bc − ad, and be careful with negative numbers.",
  ],
  revisionSummary: [
    "3 methods: Graphical, Elimination, Cramer's rule (D = |a₁b₁;a₂b₂|, Dx, Dy → x=Dx/D, y=Dy/D).",
    "Determinant value: |a b; c d| = ad − bc.",
    "D = 0 → no unique solution (parallel or coincident lines).",
    "Equations with 1/x, 1/y: substitute m=1/x, n=1/y, solve for m,n, then convert back to x,y.",
    "Word problems: define x, y clearly first, form 2 equations from the 2 conditions, solve, verify.",
  ],
},

// ============================================================ CHAPTER 2 ===
2: {
  title: "Quadratic Equations",
  intro: "This chapter covers how to identify and solve quadratic equations — by factorisation, by completing the square, and using the general quadratic formula — plus how the discriminant tells you the nature of the roots, the relation between roots and coefficients, and word problems solved using quadratic equations.",
  objectives: [
    "Identify whether a given equation is quadratic and write it in standard form.",
    "Solve a quadratic equation by factorisation, completing the square, and the formula.",
    "Determine the nature of roots using the discriminant.",
    "Use the relation between roots and coefficients, and form a quadratic equation from given roots.",
  ],
  concepts: [
    { heading: "Standard form", text: "A quadratic equation has the general form ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0 (the variable's highest power must be exactly 2)." },
    { heading: "Roots of a quadratic equation", text: "A root (or solution) is a value of the variable that makes both sides of the equation equal. A quadratic equation has exactly two roots (which may be equal, or not real)." },
    { heading: "Solving by factorisation", text: "Split the middle term (bx) so the quadratic factors into two linear brackets, e.g. x² − 4x − 5 = (x−5)(x+1). Since a product is zero only when one factor is zero, set each bracket to zero and solve." },
    { heading: "Solving by completing the square", text: "Rewrite the quadratic so the x² and x terms form a perfect square trinomial, turning the equation into (x + a)² = k. Then take the square root of both sides to solve directly." },
    { heading: "The quadratic formula", text: "Derived by completing the square on the general equation ax² + bx + c = 0, this gives both roots directly in terms of a, b and c — the most reliable, general-purpose method." },
    { heading: "Discriminant and nature of roots", text: "The expression b² − 4ac (denoted ∆) determines the nature of the roots without fully solving the equation: positive → two distinct real roots; zero → two equal real roots; negative → roots are not real." },
    { heading: "Relation between roots and coefficients", text: "For roots α and β of ax² + bx + c = 0: their sum α+β = −b/a and their product αβ = c/a. This lets you find sums/products of roots (or build new expressions from them) without solving the equation." },
    { heading: "Forming an equation from given roots", text: "If α and β are the desired roots, the quadratic equation is x² − (α+β)x + αβ = 0 — i.e. x² − (sum of roots)x + (product of roots) = 0." },
  ],
  definitions: [
    { term: "Quadratic equation", def: "An equation of the form ax² + bx + c = 0 where a, b, c are real numbers and a ≠ 0." },
    { term: "Root (solution) of an equation", def: "A value of the variable for which both sides of the equation become equal." },
    { term: "Discriminant (∆)", def: "The expression b² − 4ac for a quadratic equation ax² + bx + c = 0, which determines the nature of its roots." },
  ],
  formulas: [
    {
      name: "Quadratic formula",
      formula: "x = [ −b ± √(b² − 4ac) ] / 2a",
      symbols: "a, b, c = coefficients from ax² + bx + c = 0",
      units: "—",
      notes: "Works for every quadratic equation — use it when factorisation isn't obvious. Always compare the given equation with ax²+bx+c=0 first to correctly identify a, b, c (watch the signs).",
      mistakes: "Forgetting the ± sign (which gives only one root instead of two); mis-reading a negative b (e.g. for x²−2x−3=0, b=−2, so −b=+2, not −2)."
    },
    {
      name: "Discriminant",
      formula: "∆ = b² − 4ac",
      symbols: "a, b, c = coefficients from ax² + bx + c = 0",
      units: "—",
      notes: "∆ > 0 → real, unequal roots. ∆ = 0 → real, equal roots. ∆ < 0 → roots not real.",
      mistakes: "Sign error when b is negative — always square b first (b² is always ≥ 0) before subtracting 4ac."
    },
    {
      name: "Sum and product of roots",
      formula: "α + β = −b/a  ,  αβ = c/a",
      symbols: "α, β = the two roots; a, b, c = coefficients from ax² + bx + c = 0",
      units: "—",
      notes: "Very useful for finding expressions like α²+β² = (α+β)² − 2αβ, or α³+β³ = (α+β)³ − 3αβ(α+β), without solving for α and β individually.",
      mistakes: "Forgetting the negative sign in α+β = −b/a."
    },
    {
      name: "Equation from given roots",
      formula: "x² − (α + β)x + αβ = 0",
      symbols: "α, β = the desired roots",
      units: "—",
      notes: "Multiplying the whole equation by any non-zero constant does not change its roots.",
      mistakes: "Writing +(α+β) instead of −(α+β) in the middle term."
    },
  ],
  solvedExamples: [
    {
      title: "Solving by factorisation",
      problem: "Solve: 3x² − x − 10 = 0",
      steps: [
        "Split the middle term: find two numbers that multiply to (3×−10)=−30 and add to −1 → these are −6 and 5.",
        "3x² − 6x + 5x − 10 = 0",
        "3x(x − 2) + 5(x − 2) = 0",
        "(x − 2)(3x + 5) = 0",
        "x − 2 = 0 or 3x + 5 = 0",
      ],
      answer: "x = 2 or x = −5/3"
    },
    {
      title: "Solving using the formula & checking nature of roots",
      problem: "Solve x² − 2x − 3 = 0 using the quadratic formula.",
      steps: [
        "Compare with ax²+bx+c=0: a=1, b=−2, c=−3",
        "∆ = b²−4ac = (−2)² − 4(1)(−3) = 4 + 12 = 16 (∆ > 0, so roots are real and unequal)",
        "x = [−(−2) ± √16] / 2(1) = [2 ± 4] / 2",
        "x = (2+4)/2 = 3   or   x = (2−4)/2 = −1",
      ],
      answer: "x = 3 or x = −1"
    },
    {
      title: "Using sum & product of roots",
      problem: "If α and β are the roots of x² + 5x − 1 = 0, find α² + β².",
      steps: [
        "Compare with ax²+bx+c=0: a=1, b=5, c=−1",
        "α + β = −b/a = −5/1 = −5",
        "αβ = c/a = −1/1 = −1",
        "α² + β² = (α + β)² − 2αβ = (−5)² − 2(−1) = 25 + 2",
      ],
      answer: "α² + β² = 27"
    },
    {
      title: "Word problem — speed",
      problem: "A train travels 360 km at a uniform speed. If the speed had been 5 km/hr more, it would have taken 48 minutes (=48/60 hr) less. Find the original speed.",
      steps: [
        "Let original speed = x km/hr. Time taken = 360/x hours.",
        "New speed = (x+5) km/hr. New time = 360/(x+5) hours.",
        "Condition: 360/x − 360/(x+5) = 48/60",
        "Simplify: 360(x+5−x) / [x(x+5)] = 4/5, i.e. 1800/[x(x+5)] = 4/5",
        "Cross-multiply and simplify to: x² + 5x − 2250 = 0",
        "Factorise: (x+50)(x−45) = 0, so x = −50 or x = 45. Speed can't be negative.",
      ],
      answer: "Original speed = 45 km/hr"
    },
  ],
  solvingTips: [
    "Always write the equation in standard form ax²+bx+c=0 FIRST and clearly note down a, b, c before applying any method — this single habit prevents most sign errors.",
    "If factorisation isn't obvious within a few tries, switch to the formula immediately — don't waste exam time hunting for factors of an equation that doesn't factor nicely.",
    "Calculate the discriminant (∆) as a separate step before applying the formula — if ∆ is a perfect square, the roots will be 'nice' rational numbers; this is a good way to catch an arithmetic mistake early.",
    "For 'find α²+β²' or 'find α³+β³' type questions, use the sum/product identities — do NOT solve for α and β individually, it wastes time and increases error risk.",
    "In word problems, always check which root makes physical sense (reject negative values for length, speed, age, number of items, etc.) and state this explicitly in your answer.",
    "For speed/time/work word problems with 'takes __ less/more time' conditions, always convert minutes to hours (divide by 60) before forming the equation.",
  ],
  importantPoints: [
    "Standard form: ax² + bx + c = 0, a ≠ 0.",
    "Three solving methods: Factorisation (fastest when it works), Completing the square (always works, shows the derivation), Formula (always works, most reliable for the exam).",
    "Discriminant ∆ = b²−4ac: ∆>0 → real & unequal roots, ∆=0 → real & equal roots, ∆<0 → not real.",
    "Sum of roots = −b/a, Product of roots = c/a.",
    "Equation with given roots α, β: x² − (α+β)x + αβ = 0.",
  ],
  boardTips: [
    "'Solve using the formula' and 'determine the nature of roots' are two of the most frequently repeated question types in this chapter — practise both until automatic.",
    "'Complete the activity' fill-in-the-blank problems (factorisation, completing the square, or the formula) are extremely common — practise completing partially worked solutions, not just solving from scratch.",
    "Questions asking to find α+β, αβ, or expressions like α²+β², α³+β³ from a given equation (without solving for the roots) are frequent 2-mark questions.",
    "At least one word problem (age, speed/train, area of plot/garden, consecutive numbers) is guaranteed — practise setting up the equation from the conditions given.",
    "Common mistake: forgetting to reject the physically impossible root (negative length, speed, age) in word problems — always state why you rejected it.",
  ],
  revisionSummary: [
    "Standard form: ax²+bx+c=0 (a≠0). Solve by: factorisation, completing the square, or formula x=[−b±√(b²−4ac)]/2a.",
    "Discriminant ∆=b²−4ac: >0 real & unequal, =0 real & equal, <0 not real.",
    "Sum of roots α+β=−b/a; Product αβ=c/a.",
    "Equation from roots α,β: x²−(α+β)x+αβ=0.",
    "Word problems: define the variable, form the equation from the condition(s), solve, and reject any physically impossible root.",
  ],
},

// ============================================================ CHAPTER 3 ===
3: {
  title: "Arithmetic Progression",
  intro: "This chapter covers sequences and Arithmetic Progressions (A.P.) — number patterns where the difference between consecutive terms stays constant — and the two key formulas: finding any term (the nth term) and finding the sum of the first n terms.",
  objectives: [
    "Identify whether a given sequence is an Arithmetic Progression and find its common difference.",
    "Find the nth term of an A.P., and find which term a given number is.",
    "Find the sum of the first n terms of an A.P. using either formula.",
    "Apply A.P. concepts to real-life word problems (savings, production, salary increments, etc.).",
  ],
  concepts: [
    { heading: "Sequence", text: "A set of numbers arranged in a definite order, where the position of every number is determined — written as t₁, t₂, t₃, ... tₙ, ..." },
    { heading: "Arithmetic Progression (A.P.)", text: "A sequence in which the difference between any term and the one before it is always the same constant value, called the common difference (d). Check by confirming t₂−t₁ = t₃−t₂ = t₄−t₃ = ... for the whole sequence." },
    { heading: "Common difference (d)", text: "d = tₙ₊₁ − tₙ. It can be positive (increasing A.P.), negative (decreasing A.P.), or zero (constant sequence, still technically an A.P.)." },
    { heading: "nth term of an A.P.", text: "Since each term is the previous term plus d, the nth term can be reached directly (without listing all terms before it) using tₙ = a + (n−1)d, where a is the first term." },
    { heading: "Sum of first n terms", text: "Derived using Gauss's trick of writing the sum forwards and backwards and adding — giving two equivalent formulas, one using a and d, the other using the first and last term." },
  ],
  definitions: [
    { term: "Sequence", def: "A set of numbers arranged in a definite order, in which the position of each number (term) is fixed." },
    { term: "Arithmetic Progression", def: "A sequence in which the difference between any term and its preceding term is constant throughout." },
    { term: "Common difference (d)", def: "The constant difference between any term and the term immediately before it in an A.P.: d = tₙ₊₁ − tₙ." },
  ],
  formulas: [
    {
      name: "nth term of an A.P.",
      formula: "tₙ = a + (n − 1)d",
      symbols: "a = first term, d = common difference, n = term number",
      units: "—",
      notes: "Use this both to find a specific term (given n) and to find WHICH term a given number is (solve for n).",
      mistakes: "Writing (n−1)d as nd (forgetting the −1); this is the single most common error in this chapter."
    },
    {
      name: "Sum of first n terms (using a, d)",
      formula: "Sₙ = (n/2) [2a + (n − 1)d]",
      symbols: "a = first term, d = common difference, n = number of terms",
      units: "—",
      notes: "Use when you know the first term and common difference but not necessarily the last term.",
      mistakes: "Forgetting to multiply the whole bracket by n/2 — a common slip is applying n/2 only to the 2a term."
    },
    {
      name: "Sum of first n terms (using first & last term)",
      formula: "Sₙ = (n/2) [t₁ + tₙ]  =  (n/2) [a + l]",
      symbols: "t₁ (or a) = first term, tₙ (or l) = last (nth) term, n = number of terms",
      units: "—",
      notes: "Faster when the last term is already known or easy to find — no need to compute d.",
      mistakes: "Using the wrong 'last term' — always double check it's actually the nth term of the specific range asked about."
    },
  ],
  solvedExamples: [
    {
      title: "Checking if a sequence is an A.P.",
      problem: "Is 2, −2, −6, −10, ... an A.P.? If so, find the next two terms.",
      steps: [
        "t₂ − t₁ = −2 − 2 = −4",
        "t₃ − t₂ = −6 − (−2) = −4",
        "t₄ − t₃ = −10 − (−6) = −4",
        "All differences are equal (d = −4), so yes, it is an A.P.",
        "Next term = −10 + (−4) = −14. Term after that = −14 + (−4) = −18",
      ],
      answer: "Yes, it's an A.P. with d=−4; next two terms are −14 and −18"
    },
    {
      title: "Finding which term a number is",
      problem: "Is 301 a term of the A.P. 5, 11, 17, 23, ...?",
      steps: [
        "a = 5, d = 11−5 = 6",
        "Assume 301 is the nth term: tₙ = a+(n−1)d → 301 = 5 + (n−1)(6)",
        "301 = 5 + 6n − 6 → 301 = 6n − 1 → 6n = 302 → n = 302/6 = 50.33...",
      ],
      answer: "n is not a whole number, so 301 is NOT a term of this A.P."
    },
    {
      title: "Sum of n terms",
      problem: "The first term and common difference of an A.P. are 6 and 3. Find S₂₇ (sum of first 27 terms).",
      steps: [
        "a = 6, d = 3, n = 27",
        "Sₙ = (n/2)[2a + (n−1)d]",
        "S₂₇ = (27/2)[2(6) + (26)(3)] = (27/2)[12 + 78] = (27/2)(90)",
      ],
      answer: "S₂₇ = 1215"
    },
    {
      title: "Word problem — two given terms",
      problem: "A company made 600 mixers in year 3 and 700 mixers in year 7, with constant yearly growth. Find the production in year 1.",
      steps: [
        "Production each year forms an A.P.; let a = year-1 production, d = yearly increase.",
        "t₃ = a + 2d = 600  ...(I)",
        "t₇ = a + 6d = 700  ...(II)",
        "Subtracting (I) from (II): 4d = 100, so d = 25",
        "From (I): a + 2(25) = 600, so a = 550",
      ],
      answer: "Production in year 1 = 550 mixers"
    },
  ],
  solvingTips: [
    "To check if a sequence is an A.P., always compute at least 3 consecutive differences (not just 2) before concluding — this protects against a coincidental match on just one pair.",
    "'Find which term equals ___' questions always end with solving for n — if n doesn't come out as a positive whole number, the answer is 'this number is NOT in the A.P.', not an error in your work.",
    "Choose the sum formula based on what's given: know a and d but not the last term → use Sₙ=(n/2)[2a+(n−1)d]. Know (or can easily find) the last term → use Sₙ=(n/2)[t₁+tₙ], it's usually faster.",
    "When a problem gives two different terms (like t₃ and t₇), set up two equations in a and d using tₙ=a+(n−1)d, then solve them as simultaneous equations — this pattern covers most 'find a and d' questions.",
    "For 'three/four consecutive terms in A.P. with a given sum' problems, use the symmetric assumption (a−d, a, a+d) for three terms or (a−3d, a−d, a+d, a+3d) for four terms — this simplifies the algebra significantly.",
    "In word problems (savings, production, salary), always identify what corresponds to 'a' (the starting value) and 'd' (the fixed increase/decrease per period) before writing any formula.",
  ],
  importantPoints: [
    "A.P. test: t₂−t₁ = t₃−t₂ = t₄−t₃ = ... = constant (d).",
    "nth term: tₙ = a + (n−1)d.",
    "Sum of n terms: Sₙ = (n/2)[2a+(n−1)d] = (n/2)[t₁+tₙ].",
    "d can be positive, negative, or zero — all are valid A.P.s.",
    "Sum of first n natural numbers: n(n+1)/2 — a special case worth memorising directly.",
  ],
  boardTips: [
    "'Complete the activity' fill-in-the-blank problems using tₙ=a+(n−1)d or the Sₙ formulas are extremely common — practise filling in partially worked problems, not just solving from scratch.",
    "A guaranteed question type: 'given two terms of an A.P. (e.g. t₃ and t₉), find a, d, and a specific other term' — practise setting up and solving the resulting simultaneous equations quickly.",
    "Word problems (savings growing monthly, production increasing yearly, salary increments) are asked almost every year — practise identifying a, d, and n from the problem statement.",
    "Common mistake: mixing up n (number of terms) with tₙ (the value of the nth term) — keep clear which one the question is actually asking for.",
    "Common mistake: forgetting the −1 in (n−1)d, or the ÷2 in the sum formula — these two slips account for most lost marks in this chapter.",
  ],
  revisionSummary: [
    "A.P.: sequence with constant common difference d = tₙ₊₁−tₙ.",
    "nth term: tₙ = a + (n−1)d.",
    "Sum of n terms: Sₙ = (n/2)[2a+(n−1)d] = (n/2)[t₁+tₙ].",
    "To check if a number is in the A.P.: solve tₙ = (that number) for n; valid only if n is a positive whole number.",
    "Word problems: map the situation's starting value → a, fixed change per step → d.",
  ],
},

// ============================================================ CHAPTER 4 ===
4: {
  title: "Financial Planning",
  intro: "This chapter covers GST (Goods and Services Tax) — reading a tax invoice, computing CGST/SGST, and Input Tax Credit — plus the mathematics of investing in shares (face value, market value, dividend, brokerage) and a brief introduction to mutual funds and SIP.",
  objectives: [
    "Compute CGST and SGST from a taxable value, and vice versa.",
    "Calculate Input Tax Credit (ITC) and the GST payable by a trader.",
    "Calculate sum invested, dividend, and rate of return on shares, including brokerage and GST.",
    "Understand the basic concepts of mutual funds, NAV, and SIP.",
  ],
  concepts: [
    { heading: "GST basics", text: "GST (Goods and Services Tax) replaced the earlier multiple state/central taxes with a single 'One nation, one tax' system. It is split equally into CGST (paid to central government) and SGST (paid to state government) — for intra-state trade, CGST rate = SGST rate = half the total GST rate." },
    { heading: "Taxable value vs total value", text: "Taxable value is the price of goods/services BEFORE GST is added. Total value (invoice value) = Taxable value + CGST + SGST. If a discount is given, it is applied first — GST is charged on the discounted (taxable) price." },
    { heading: "Input Tax Credit (ITC)", text: "A trader pays GST when purchasing (input tax) and collects GST when selling (output tax). At the time of paying GST to the government, the trader subtracts the input tax already paid from the output tax collected — this deduction is the Input Tax Credit. GST payable = Output tax − ITC." },
    { heading: "Shares — key terms", text: "Face Value (FV): the printed/nominal value on the share certificate (fixed). Market Value (MV): the price at which the share is currently bought/sold (fluctuates). If MV > FV, the share is at a premium; if MV = FV, at par; if MV < FV, at a discount." },
    { heading: "Dividend and rate of return", text: "Dividend is the portion of a company's profit distributed to shareholders, always calculated on the Face Value (never on MV), typically as a percentage. Rate of Return (RoR) measures the actual return on the amount actually invested (based on MV): RoR = (Dividend income / Sum invested) × 100." },
    { heading: "Brokerage", text: "A fee charged by the broker for buying/selling shares, calculated on the Market Value. GST (18%) is charged additionally on the brokerage amount itself (not on the share value)." },
    { heading: "Mutual funds & SIP", text: "A Mutual Fund pools money from many investors and is professionally managed by an AMC (Asset Management Company), investing in a diversified mix of shares/bonds to reduce risk. The market value of one 'unit' is called NAV (Net Asset Value). A Systematic Investment Plan (SIP) lets an investor put in a small, fixed amount at regular intervals (e.g. monthly) instead of a lump sum." },
  ],
  definitions: [
    { term: "GST", def: "Goods and Services Tax — a single indirect tax levied on the supply of goods and services, replacing India's earlier multiple indirect taxes." },
    { term: "CGST / SGST", def: "Central GST and State GST — the two equal components into which GST is split for a transaction within a state, payable to the central and state governments respectively." },
    { term: "Input Tax Credit (ITC)", def: "The GST already paid by a trader on their purchases, which is deducted from the GST they must pay on their sales." },
    { term: "Face Value (FV)", def: "The nominal/printed value of a share as stated on the share certificate; also called par value." },
    { term: "Market Value (MV)", def: "The current price at which a share is bought or sold in the stock market." },
    { term: "Dividend", def: "The portion of a company's annual profit distributed to shareholders, calculated on the face value of the share." },
    { term: "NAV (Net Asset Value)", def: "The market value of one unit of a mutual fund scheme." },
  ],
  formulas: [
    {
      name: "CGST and SGST",
      formula: "CGST = SGST = (GST rate / 2) × Taxable value",
      symbols: "—",
      units: "₹ (rupees)",
      notes: "Total GST = CGST + SGST. Total invoice value = Taxable value + CGST + SGST.",
      mistakes: "Applying the full GST rate as CGST (forgetting it's split equally in half between CGST and SGST)."
    },
    {
      name: "GST payable (Input Tax Credit)",
      formula: "GST payable = Output tax − ITC (Input tax)",
      symbols: "Output tax = GST collected on sale; ITC = GST already paid on purchase",
      units: "₹ (rupees)",
      notes: "If prices are given WITH GST already included, first extract the taxable value using: Taxable value = Total value × (100 / (100+GST%)).",
      mistakes: "Forgetting to convert 'total value including GST' figures into taxable value before computing input/output tax."
    },
    {
      name: "Sum invested in shares",
      formula: "Sum invested = Number of shares × MV",
      symbols: "MV = Market Value per share",
      units: "₹ (rupees)",
      notes: "Add brokerage (and GST on brokerage) separately if the question asks for total amount paid, not just the share cost.",
      mistakes: "Using FV instead of MV when calculating the amount actually invested."
    },
    {
      name: "Rate of Return on shares",
      formula: "Rate of Return = (Dividend income / Sum invested) × 100",
      symbols: "Dividend income = (Dividend % × FV / 100) × number of shares",
      units: "%",
      notes: "Dividend is always calculated on FV, but Rate of Return is always calculated on the sum actually invested (based on MV).",
      mistakes: "Calculating dividend using MV instead of FV — dividend is ALWAYS on face value."
    },
  ],
  solvedExamples: [
    {
      title: "Basic GST computation",
      problem: "A gas agency supplies an LPG cylinder for a taxable value of ₹545. GST rate is 5%. Find the CGST, SGST, and total amount paid by the consumer.",
      steps: [
        "GST rate = 5%, so CGST rate = SGST rate = 2.5%",
        "CGST = 2.5% of 545 = (2.5/100) × 545 = ₹13.63",
        "SGST = CGST = ₹13.63",
        "Total amount = Taxable value + CGST + SGST = 545 + 13.63 + 13.63",
      ],
      answer: "Total paid = ₹572.26 (CGST = SGST = ₹13.63)"
    },
    {
      title: "Input Tax Credit",
      problem: "A retailer paid GST of ₹6500 on purchase (input tax) and collected GST of ₹8000 on sale (output tax). Find his payable GST, CGST and SGST.",
      steps: [
        "Input tax (ITC) = ₹6500",
        "Output tax = ₹8000",
        "GST payable = Output tax − ITC = 8000 − 6500 = ₹1500",
        "Payable CGST = Payable SGST = 1500 / 2",
      ],
      answer: "GST payable = ₹1500 (CGST = SGST = ₹750)"
    },
    {
      title: "Shares — rate of return",
      problem: "50 shares of FV ₹10 were purchased at MV ₹25. The company declared a 30% dividend. Find (1) sum invested, (2) dividend received, (3) rate of return.",
      steps: [
        "(1) Sum invested = Number of shares × MV = 50 × 25 = ₹1250",
        "(2) Dividend per share = 30% of FV = (30/100) × 10 = ₹3. Total dividend = 50 × 3 = ₹150",
        "(3) Rate of Return = (Dividend income / Sum invested) × 100 = (150/1250) × 100",
      ],
      answer: "Sum invested = ₹1250, Dividend = ₹150, Rate of Return = 12%"
    },
  ],
  solvingTips: [
    "Always identify first whether a given price is the TAXABLE value or the TOTAL value (with GST already included) — this changes your very first calculation step.",
    "To extract taxable value from a total (GST-inclusive) value: Taxable value = Total value × 100/(100+GST%). Memorise this conversion, it appears often.",
    "For ITC problems, always compute Input tax and Output tax as two clearly separate steps before subtracting — don't try to combine them in one line, it's easy to make sign errors.",
    "For share problems, always find MV first (using MV = FV + Premium, or MV = FV − Discount) before calculating sum invested — many mistakes come from using FV where MV was needed.",
    "Remember: Dividend is calculated on FV; Rate of Return is calculated on the amount actually invested (based on MV) — mixing these two up is the most common error in the shares section.",
    "When brokerage is involved, work out brokerage and its GST as separate small steps, then add everything together at the end for the final total — don't try to shortcut this into one combined formula.",
  ],
  importantPoints: [
    "GST = CGST + SGST, with CGST = SGST = half the total GST rate (for intra-state trade).",
    "GST payable to the government = Output tax − Input ttax credit (ITC).",
    "MV > FV → premium; MV = FV → at par; MV < FV → discount.",
    "Dividend is always calculated on Face Value, regardless of the Market Value paid.",
    "Rate of Return = (Dividend income ÷ Sum invested) × 100 — based on the actual amount invested (MV-based).",
    "Brokerage is calculated on MV; GST (18%) is charged additionally on the brokerage amount.",
  ],
  boardTips: [
    "GST invoice numericals (find CGST/SGST/total, or work backwards from total to taxable value) are asked almost every year — practise both directions.",
    "'Find the GST payable using Input Tax Credit' is a very common 2-3 mark question — practise the Output tax − Input tax subtraction clearly, showing both values separately.",
    "Share numericals combining MV, dividend, and rate of return are frequently asked together as a multi-part question — practise the 3-part structure (sum invested → dividend → rate of return).",
    "Common mistake: using the full GST rate instead of half for CGST/SGST calculations.",
    "Common mistake: computing dividend using MV instead of FV — always re-check which value (FV or MV) a given percentage applies to before calculating.",
  ],
  revisionSummary: [
    "GST = CGST + SGST (each = half the GST rate, for intra-state trade).",
    "Taxable value → Total value = Taxable value + CGST + SGST.",
    "GST payable = Output tax (on sale) − Input Tax Credit (tax paid on purchase).",
    "Shares: MV vs FV decides premium/par/discount. Sum invested = shares × MV.",
    "Dividend is on FV; Rate of Return = (Dividend/Sum invested)×100 is on MV-based investment.",
    "Brokerage is on MV; GST (18%) applies additionally on the brokerage amount.",
    "Mutual funds: NAV = market value per unit; SIP = fixed regular investment instead of a lump sum.",
  ],
},

// ============================================================ CHAPTER 5 ===
5: {
  title: "Probability",
  intro: "This chapter introduces the mathematical measurement of chance — random experiments, sample space, and events — leading to the formula for probability, P(A) = n(A)/n(S), applied to coins, dice, cards, and everyday selection problems.",
  objectives: [
    "Identify a random experiment and list its possible outcomes.",
    "Write the sample space for a given random experiment and find n(S).",
    "Write a given event in set form and find n(A).",
    "Calculate the probability of an event using P(A) = n(A)/n(S).",
  ],
  concepts: [
    { heading: "Random experiment", text: "An experiment where all possible results are known in advance, but no particular result can be predicted with certainty, and each result is equally likely — e.g. tossing a coin, throwing a die, drawing a card." },
    { heading: "Sample space (S)", text: "The set of ALL possible outcomes of a random experiment, denoted S. The number of elements in S is written n(S). Each individual outcome is a 'sample point'." },
    { heading: "Event", text: "A subset of the sample space that satisfies a particular condition of interest, usually named with a capital letter (A, B, C...). The number of outcomes favourable to the event is written n(A)." },
    { heading: "Probability of an event", text: "A number (between 0 and 1, or 0% and 100%) measuring how likely an event is to occur, calculated as the ratio of favourable outcomes to total outcomes: P(A) = n(A)/n(S)." },
    { heading: "Standard sample spaces to memorise", text: "1 coin: {H,T}, n(S)=2. 2 coins: {HH,HT,TH,TT}, n(S)=4. 3 coins: 8 outcomes. 1 die: {1,2,3,4,5,6}, n(S)=6. 2 dice: 36 ordered pairs. 52 playing cards: 26 red + 26 black, 4 suits of 13 cards each, 12 face cards (King, Queen, Jack × 4 suits)." },
  ],
  definitions: [
    { term: "Random experiment", def: "An experiment whose every possible outcome is known in advance, but whose specific result cannot be predicted with certainty, with each outcome equally likely." },
    { term: "Sample space (S)", def: "The set of all possible outcomes of a random experiment." },
    { term: "Event", def: "A subset of the sample space representing outcomes that satisfy a given condition." },
    { term: "Equally likely outcomes", def: "Outcomes of a random experiment such that none of them is more likely to occur than the others (as with an unbiased/fair coin or die)." },
    { term: "Probability", def: "A numerical measure (from 0 to 1, or 0% to 100%) of how likely an event is to occur; P(A) = n(A)/n(S)." },
  ],
  formulas: [
    {
      name: "Probability of an event",
      formula: "P(A) = n(A) / n(S)",
      symbols: "n(A) = number of outcomes favourable to event A, n(S) = total number of outcomes in the sample space",
      units: "no unit (a fraction between 0 and 1, or a percentage between 0% and 100%)",
      notes: "P(A)=0 means A is impossible; P(A)=1 means A is certain. Probability can always be expressed as a fraction OR converted to a percentage.",
      mistakes: "Miscounting n(A) or n(S) — always list the sample space/event as an explicit set first, don't just count 'in your head'."
    },
  ],
  solvedExamples: [
    {
      title: "Two coins tossed",
      problem: "Two coins are tossed simultaneously. Find the probability of getting at least one tail.",
      steps: [
        "S = {HH, HT, TH, TT}, so n(S) = 4",
        "Event A: at least one tail → A = {HT, TH, TT}",
        "n(A) = 3",
        "P(A) = n(A)/n(S) = 3/4",
      ],
      answer: "P(at least one tail) = 3/4"
    },
    {
      title: "Rolling a die",
      problem: "A die is thrown once. Find the probability that the number on the upper face is prime.",
      steps: [
        "S = {1, 2, 3, 4, 5, 6}, so n(S) = 6",
        "Event A: prime number → A = {2, 3, 5}",
        "n(A) = 3",
        "P(A) = n(A)/n(S) = 3/6 = 1/2",
      ],
      answer: "P(prime number) = 1/2"
    },
    {
      title: "Playing cards",
      problem: "A card is drawn from a well-shuffled pack of 52 playing cards. Find the probability that it is a face card.",
      steps: [
        "n(S) = 52 (total cards in the pack)",
        "Face cards = King, Queen, Jack in each of 4 suits = 3 × 4 = 12",
        "n(A) = 12",
        "P(A) = n(A)/n(S) = 12/52 = 3/13",
      ],
      answer: "P(face card) = 3/13"
    },
  ],
  solvingTips: [
    "ALWAYS write out the sample space S as an explicit set (or clearly state how you counted it) before attempting to find n(A) — skipping this step is the #1 cause of wrong answers in this chapter.",
    "For two-dice problems, draw or imagine the full 6×6 grid of 36 ordered pairs — it makes counting outcomes for a specific sum or condition far more reliable than trying to count mentally.",
    "Memorise the playing-card breakdown cold: 52 total, 26 red / 26 black, 4 suits of 13 each, 12 face cards, 4 aces — nearly every card question needs one of these numbers.",
    "For 'at least' or 'at most' events, it is often faster to list the complementary (opposite) event and subtract from 1: P(at least one) = 1 − P(none).",
    "Double check whether the problem says 'with repetition' or 'without repetition' when digits/numbers are being combined — this changes the sample space size significantly.",
    "Always simplify the final probability fraction to lowest terms, and be ready to convert it to a percentage if the question asks for one.",
  ],
  importantPoints: [
    "P(A) = n(A)/n(S) — the core formula of this entire chapter.",
    "0 ≤ P(A) ≤ 1 (or 0% to 100%): P(A)=0 → impossible event, P(A)=1 → certain/sure event.",
    "Standard sample spaces: 1 coin (2), 2 coins (4), 3 coins (8), 1 die (6), 2 dice (36), 52 playing cards.",
    "A pack of cards: 26 red (13 hearts + 13 diamonds), 26 black (13 spades + 13 clubs); 12 face cards (K, Q, J × 4 suits); 4 aces.",
  ],
  boardTips: [
    "'Write the sample space and find n(S); then write event A in set form and find P(A)' is the exact structure of almost every question in this chapter — practise this full structure every time, not just the final probability.",
    "Two-dice sum problems (sum is prime / multiple of a number / a specific value) are extremely common — practise counting outcomes from the 36-pair grid quickly.",
    "Card-based probability questions are guaranteed nearly every year — have the 52-card breakdown memorised perfectly.",
    "Common mistake: giving only the final probability without showing the sample space and event in set form — this loses method marks even if the final answer is correct.",
  ],
  revisionSummary: [
    "P(A) = n(A)/n(S).",
    "Sample space sizes: 1 coin=2, 2 coins=4, 3 coins=8, 1 die=6, 2 dice=36, cards=52.",
    "Cards: 26 red, 26 black, 4 suits×13 cards, 12 face cards, 4 aces.",
    "0 ≤ P(A) ≤ 1; P=0 impossible, P=1 certain.",
    "Always write S and the event in explicit set form before calculating.",
  ],
},

// ============================================================ CHAPTER 6 ===
6: {
  title: "Statistics",
  intro: "This chapter covers finding the mean, median and mode of grouped (classified) frequency data — including three methods for the mean — and graphical representation of statistical data using histograms, frequency polygons and pie diagrams.",
  objectives: [
    "Find the mean of grouped data using the direct, assumed mean, and step deviation methods.",
    "Find the median of grouped data using the cumulative frequency formula.",
    "Find the mode of grouped data using the modal class formula.",
    "Calculate the central angle for each component of a pie diagram.",
  ],
  concepts: [
    { heading: "Mean — direct method", text: "For grouped data, use the class mark (xᵢ, the midpoint of each class) in place of each individual value: Mean = Σ(xᵢfᵢ) / Σfᵢ, where fᵢ is the frequency of each class." },
    { heading: "Mean — assumed mean method", text: "Pick any class mark as an 'assumed mean' A (usually a central, round value), find the deviation dᵢ = xᵢ − A for every class, then Mean = A + [Σ(fᵢdᵢ)/Σfᵢ]. This avoids multiplying large xᵢ values directly, keeping numbers smaller and calculation faster." },
    { heading: "Mean — step deviation method", text: "An extension of the assumed mean method: after finding dᵢ = xᵢ − A, divide every deviation by their common class width/GCD (g) to get uᵢ = dᵢ/g. Then Mean = A + [Σ(fᵢuᵢ)/Σfᵢ] × g. This keeps the numbers even smaller, ideal when class widths are equal." },
    { heading: "Median of grouped data", text: "First build a 'less than' cumulative frequency table. Find N/2 (half the total frequency) and identify the median class — the class whose cumulative frequency first exceeds N/2. Then apply the median formula to estimate exactly where within that class the median falls." },
    { heading: "Mode of grouped data", text: "The modal class is the class with the highest frequency. The exact mode within that class is estimated using the frequencies of the modal class and its immediate neighbours (preceding and succeeding classes)." },
    { heading: "Graphical representation", text: "Histogram: bars drawn directly above class intervals (no gaps between bars) with height = frequency. Frequency polygon: line graph joining the (class mark, frequency) points — can be drawn on top of a histogram or independently by plotting class marks vs frequencies. Pie diagram: a circle divided into sectors, where each sector's central angle is proportional to its component's share of the total." },
  ],
  definitions: [
    { term: "Class mark (xᵢ)", def: "The midpoint of a class interval: (lower limit + upper limit) / 2." },
    { term: "Cumulative frequency (less than type)", def: "The running total of frequencies of a class and all classes before it, up to that class's upper limit." },
    { term: "Median class", def: "The class interval in which the cumulative frequency first becomes equal to or greater than N/2." },
    { term: "Modal class", def: "The class interval with the highest frequency in a grouped frequency distribution." },
    { term: "Pie diagram", def: "A circular chart divided into sectors, where the central angle of each sector is proportional to the value of the component it represents." },
  ],
  formulas: [
    {
      name: "Mean — direct method",
      formula: "Mean (x̄) = Σ(xᵢfᵢ) / Σfᵢ",
      symbols: "xᵢ = class mark of each class, fᵢ = frequency of each class",
      units: "same unit as the data",
      notes: "Simplest method conceptually, but the xᵢfᵢ products can get large and tedious for big data sets.",
      mistakes: "Using the class limits instead of the class MARK (midpoint) for xᵢ."
    },
    {
      name: "Mean — assumed mean method",
      formula: "Mean (x̄) = A + [Σ(fᵢdᵢ) / Σfᵢ]",
      symbols: "A = assumed mean (any convenient class mark), dᵢ = xᵢ − A",
      units: "same unit as the data",
      notes: "Choosing the assumed mean does NOT affect the final answer — any class mark works, though a central one keeps numbers smallest.",
      mistakes: "Forgetting to add A back at the end (stopping at just the mean of deviations)."
    },
    {
      name: "Mean — step deviation method",
      formula: "Mean (x̄) = A + [Σ(fᵢuᵢ) / Σfᵢ] × g",
      symbols: "A = assumed mean, uᵢ = dᵢ/g, g = common factor (usually the class width)",
      units: "same unit as the data",
      notes: "Only works cleanly when class widths are equal, so dᵢ values share a common factor g.",
      mistakes: "Forgetting to multiply back by g at the very end — this is the step students most often skip."
    },
    {
      name: "Median of grouped data",
      formula: "Median = L + [ (N/2 − cf) / f ] × h",
      symbols: "L = lower limit of median class, N = Σfᵢ, cf = cumulative frequency before median class, f = frequency of median class, h = class width of median class",
      units: "same unit as the data",
      notes: "First find N/2, then locate the median class (where cumulative frequency first ≥ N/2) before substituting into the formula.",
      mistakes: "Using the cumulative frequency OF the median class instead of the class BEFORE it for cf."
    },
    {
      name: "Mode of grouped data",
      formula: "Mode = L + [ (f₁ − f₀) / (2f₁ − f₀ − f₂) ] × h",
      symbols: "L = lower limit of modal class, f₁ = frequency of modal class, f₀ = frequency of preceding class, f₂ = frequency of succeeding class, h = class width",
      units: "same unit as the data",
      notes: "The modal class is simply the class with the highest frequency — identify it first before labelling f₀, f₁, f₂.",
      mistakes: "Mixing up f₀ (before) and f₂ (after) the modal class — always double check the order against the table."
    },
    {
      name: "Central angle of a pie diagram sector",
      formula: "θ = (Value of component / Total value) × 360°",
      symbols: "θ = central angle of the sector for that component",
      units: "degrees",
      notes: "The angles of all sectors must add up to exactly 360° — a good way to check your work.",
      mistakes: "Forgetting to multiply by 360 (leaving the answer as a plain fraction/ratio instead of an angle)."
    },
  ],
  solvedExamples: [
    {
      title: "Mean — assumed mean method",
      problem: "Find the mean of the following data using the assumed mean method:  Class: 0-10,10-20,20-30,30-40,40-50 with frequencies 5, 8, 12, 9, 6 (class marks 5,15,25,35,45).",
      steps: [
        "Take assumed mean A = 25 (a central class mark).",
        "Find dᵢ = xᵢ − A for each class: −20, −10, 0, 10, 20",
        "Find fᵢdᵢ for each class: (5×−20)=−100, (8×−10)=−80, (12×0)=0, (9×10)=90, (6×20)=120",
        "Σfᵢ = 5+8+12+9+6 = 40. Σfᵢdᵢ = −100−80+0+90+120 = 30",
        "Mean = A + Σfᵢdᵢ/Σfᵢ = 25 + 30/40 = 25 + 0.75",
      ],
      answer: "Mean = 25.75"
    },
    {
      title: "Median of grouped data",
      problem: "Find the median: Class 0-20,20-40,40-60,60-80,80-100 with frequencies 4, 20, 30, 40, 6 (total N=100).",
      steps: [
        "N = 100, so N/2 = 50",
        "Cumulative frequencies (less than upper limit): 4, 24, 54, 94, 100",
        "50 falls in the class 40-60 (since cf jumps from 24 to 54 there) — this is the median class.",
        "L=40, cf (of preceding class 20-40) = 24, f (of 40-60) = 30, h = 20",
        "Median = L + [(N/2 − cf)/f] × h = 40 + [(50−24)/30] × 20 = 40 + (26/30)×20",
      ],
      answer: "Median ≈ 57.33"
    },
    {
      title: "Mode of grouped data",
      problem: "Find the mode: Age-group 6-8,8-10,10-12,12-14,14-16 with number of children 43, 58, 70, 42, 27.",
      steps: [
        "Highest frequency is 70, in class 10-12 — this is the modal class.",
        "L=10, h=2, f₁=70 (modal class), f₀=58 (preceding class 8-10), f₂=42 (succeeding class 12-14)",
        "Mode = L + [(f₁−f₀)/(2f₁−f₀−f₂)] × h = 10 + [(70−58)/(140−58−42)] × 2",
        "= 10 + [12/40] × 2 = 10 + 0.6",
      ],
      answer: "Mode = 10.6 years"
    },
    {
      title: "Pie diagram — central angle",
      problem: "36 bicycles were sold: 10 white, 9 black, 6 blue, 7 grey, 4 red. Find the central angle for the 'white' sector.",
      steps: [
        "Total bicycles = 36",
        "θ (white) = (Number of white bicycles / Total) × 360°",
        "= (10/36) × 360°",
      ],
      answer: "θ = 100°"
    },
  ],
  solvingTips: [
    "For mean, choose the method based on the numbers: small, simple xᵢ values → direct method; large xᵢ values → assumed mean method; equal class widths with a common factor available → step deviation method (fastest).",
    "For assumed mean, always pick a class mark near the MIDDLE of the data (not the smallest or largest) — this keeps the deviations small on both sides and reduces arithmetic errors.",
    "For median, build the cumulative frequency table FIRST as a clearly separate step, then find N/2, THEN identify the median class — trying to do all three at once causes mistakes.",
    "For mode, always double-check which class is truly the modal class (highest frequency) before assigning f₀, f₁, f₂ — a wrong modal class ruins the entire answer.",
    "For pie diagrams, after computing all the sector angles, always add them up as a final check — they must total exactly 360°.",
    "Set up your working in a clear table (class | xᵢ | fᵢ | fᵢxᵢ or dᵢ or cf, as needed) every time — in board exams, a well-organised table earns method marks even if the final arithmetic has a small slip.",
  ],
  importantPoints: [
    "Mean (direct): Σfᵢxᵢ/Σfᵢ. Mean (assumed): A+Σfᵢdᵢ/Σfᵢ. Mean (step deviation): A+(Σfᵢuᵢ/Σfᵢ)×g.",
    "Median = L + [(N/2−cf)/f]×h — needs the cumulative frequency table first.",
    "Mode = L + [(f₁−f₀)/(2f₁−f₀−f₂)]×h — needs the modal class and its two neighbours.",
    "Pie chart central angle: θ = (component value/total)×360°; all sector angles must sum to 360°.",
    "Class mark xᵢ = (lower limit + upper limit)/2 — always used to represent an entire class in mean calculations.",
  ],
  boardTips: [
    "'Find the mean using the assumed mean/step deviation method' is one of the most frequently repeated question types — practise setting up the table quickly and correctly.",
    "'Complete the activity' fill-in-the-blank questions for median and mode (with some table values already filled in) are extremely common — practise completing partial tables, not just solving from a blank page.",
    "Pie diagram angle calculations (find the angle for a given component, or work backwards from an angle to find a value) are a guaranteed 2-3 mark question.",
    "Common mistake: using the WRONG class's frequency as cf in the median formula (it must be the class BEFORE the median class, not the median class itself).",
    "Common mistake: forgetting units in the final answer (e.g. 'years', '₹', 'marks') — always match the unit to what the data represents.",
  ],
  revisionSummary: [
    "Mean (direct): Σfᵢxᵢ/Σfᵢ. Mean (assumed mean): A + Σfᵢdᵢ/Σfᵢ. Mean (step deviation): A + (Σfᵢuᵢ/Σfᵢ)×g.",
    "Median = L + [(N/2−cf)/f]×h, using the 'less than' cumulative frequency table.",
    "Mode = L + [(f₁−f₀)/(2f₁−f₀−f₂)]×h, using the modal class and its neighbours.",
    "Pie diagram: θ = (component/total)×360°; all angles sum to 360°.",
    "Class mark xᵢ = (lower + upper limit)/2.",
  ],
},

/* CHAPTERS_MARKER_DO_NOT_REMOVE */

};
