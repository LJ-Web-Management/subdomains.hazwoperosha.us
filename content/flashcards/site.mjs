// flashcards.hazwoperosha.us: flip-card study deck for HAZWOPER. Index cards.
const CARDS = [
  ["What does HAZWOPER stand for?", "Hazardous Waste Operations and Emergency Response"],
  ["Which regulation is HAZWOPER?", "29 CFR 1910.120 (and 1926.65 for construction)"],
  ["Initial training hours for a general site worker?", "40 hours, plus 3 days of supervised field experience"],
  ["Initial training for occasional or low-exposure workers?", "24 hours, plus 1 day of supervised field experience"],
  ["Annual refresher requirement?", "8 hours every year"],
  ["Extra training for supervisors?", "At least 8 hours of specialized training"],
  ["Initial training for TSD facility workers?", "24 hours, then 8 hours a year"],
  ["Oxygen-deficient atmosphere is below…?", "19.5% oxygen"],
  ["IDLH stands for?", "Immediately Dangerous to Life or Health"],
  ["Level A protection?", "Fully encapsulating vapor-tight suit with SCBA or supplied air"],
  ["Level B protection?", "SCBA or supplied air with chemical splash protection"],
  ["Level C protection?", "Air-purifying respirator with chemical-resistant clothing"],
  ["Level D protection?", "Work uniform with no respiratory protection"],
  ["Where does decon happen?", "The contamination reduction (warm) zone"],
  ["Which zone is the clean zone?", "The support (cold) zone"],
  ["Awareness-level responder's job?", "Recognize, isolate, notify, then take no further action"],
  ["What does PEL mean?", "Permissible exposure limit, OSHA's legal limit"],
  ["What does a PID measure?", "Total volatile organic compounds (it can't identify which one)"],
  ["Monitoring order before entry?", "Oxygen first, then flammability (LEL), then toxics"],
  ["Last thing removed on the decon line before the field wash?", "Inner gloves"],
];

export default {
  brand: "HAZWOPER Flashcards",
  logo: `<span class="card-ic"></span>HAZWOPER Flashcards`,
  title: "HAZWOPER Flashcards: Free Study Deck | HAZWOPER Flashcards",
  description: `Study HAZWOPER with ${CARDS.length} free flashcards on training hours, PPE levels, zones, exposure limits and decon. Flip, shuffle and track your progress.`,
  theme: "#1098ad",
  fonts: "family=Kalam:wght@400;700&family=Inter:wght@400;500;600",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect x="4" y="8" width="22" height="16" rx="2" fill="#fff" stroke="#1098ad" stroke-width="2" transform="rotate(-8 15 16)"/><rect x="7" y="9" width="22" height="16" rx="2" fill="#fff9db" stroke="#1098ad" stroke-width="2"/><path d="M10 15h16M10 19h11" stroke="#f03e3e" stroke-width="1.5"/></svg>`,
  hero: {
    title: "Study it, <span>flip it.</span>",
    lede: "A free flashcard deck covering the facts that show up on every HAZWOPER exam. Tap to flip, shuffle to mix them up.",
    cta: [587, "Take the 40-hour"],
    alt: ["#cards", "Start studying"],
  },
  coursesTagline: "The courses this deck helps you study for.",
  guidesTagline: "How to study for HAZWOPER, and what to do after.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER", summary: "Everything in this deck, in depth.", body: `The full initial course.`, topics: ["Training rules", "PPE", "Zones", "Monitoring"], who: "Site workers." },
    { id: 581, short: "24-Hour HAZWOPER", summary: "For occasional and low-exposure workers.", body: `The 24-hour initial course.`, topics: ["Who qualifies", "PPE basics"], who: "Limited-exposure workers." },
    { id: 595, short: "8-Hour Refresher", summary: "Keep it all fresh every year.", body: `The annual refresher.`, topics: ["Review"], who: "Certified workers." },
  ],

  feature: () => `<section class="sec fc-sec" id="cards"><div class="wrap">
<div class="fc-wrap">
<button type="button" class="fc" id="fcCard" aria-label="Flip card"><span class="fc-inner"><span class="fc-face fc-front" id="fcFront"></span><span class="fc-face fc-back" id="fcBack"></span></span></button>
<div class="fc-ctrl"><button type="button" id="fcPrev">← Prev</button><span id="fcPos"></span><button type="button" id="fcNext">Next →</button></div>
<div class="fc-ctrl"><button type="button" id="fcShuffle">Shuffle</button><button type="button" id="fcKnow">I know this ✓</button></div>
<p class="fc-known" id="fcKnown"></p>
</div></div></section>
<script>
window.CARDS = ${JSON.stringify(CARDS).replace(/</g, "\\u003c")};
(function () {
  var deck = window.CARDS.map(function (c, i) { return i; }), i = 0, known = {};
  var card = document.getElementById("fcCard"), fr = document.getElementById("fcFront"), bk = document.getElementById("fcBack"), pos = document.getElementById("fcPos"), kn = document.getElementById("fcKnown");
  function show() { var c = window.CARDS[deck[i]]; card.classList.remove("flip"); fr.textContent = c[0]; bk.textContent = c[1]; pos.textContent = (i + 1) + " / " + deck.length; kn.textContent = Object.keys(known).length + " of " + deck.length + " marked as known"; card.classList.toggle("known", !!known[deck[i]]); }
  card.addEventListener("click", function () { card.classList.toggle("flip"); });
  document.getElementById("fcNext").addEventListener("click", function () { i = (i + 1) % deck.length; show(); });
  document.getElementById("fcPrev").addEventListener("click", function () { i = (i - 1 + deck.length) % deck.length; show(); });
  document.getElementById("fcShuffle").addEventListener("click", function () { for (var k = deck.length - 1; k > 0; k--) { var j = Math.floor(Math.random() * (k + 1)); var t = deck[k]; deck[k] = deck[j]; deck[j] = t; } i = 0; show(); });
  document.getElementById("fcKnow").addEventListener("click", function () { known[deck[i]] = 1; i = (i + 1) % deck.length; show(); });
  document.addEventListener("keydown", function (e) { if (e.target.tagName === "INPUT") return; if (e.key === "ArrowRight") { i = (i + 1) % deck.length; show(); } if (e.key === "ArrowLeft") { i = (i - 1 + deck.length) % deck.length; show(); } });
  show();
})();
</script>`,

  guides: [
    {
      slug: "spaced-repetition-for-safety-training",
      title: "Study smarter: spaced repetition for safety training",
      description: "Short, repeated review beats one long cram session. How to use flashcards well.",
      date: "2026-10-25",
      courses: [587],
      body: `People forget most of what they learn within days unless they review it. Spaced repetition fights that: review often at first, then less and less.

## How to use the deck

1. **Go through all the cards once.** Flip each one and say the answer out loud first.
2. **Mark what you know.** Keep studying the rest.
3. **Come back tomorrow.** Shuffle and repeat. You'll know more cards each day.
4. **Then weekly.** Before your exam, and again before your annual refresher.

## Why it works for HAZWOPER

The facts that matter in an emergency, like oxygen levels, PPE levels and decon order, need to come back instantly. Repetition makes recall automatic.

## Pair it with the course

Flashcards help with facts. The course gives you the context: why the numbers are what they are. See [[587]].`,
    },
    {
      slug: "after-the-course-staying-sharp",
      title: "After the course: staying sharp between refreshers",
      description: "Twelve months is a long time. Simple habits that keep HAZWOPER knowledge current.",
      date: "2026-10-25",
      courses: [595],
      body: `## Use it at the tailgate

Answer the supervisor's questions out loud. Ask your own.

## Review before new tasks

Before a PPE upgrade, review the PPE cards. Before monitoring work, review the instrument cards.

## Read your site plan

Each site's plan is a refresher in itself: hazards, action levels, zones and emergency procedures.

## Flashcards once a month

Ten minutes with the deck keeps the core facts fresh.

## Take your refresher on time

The annual 8-hour refresher ([[595]]) is required, and it's also the best way to catch up on changes.

{{buy:595}}`,
    },
  ],
};
