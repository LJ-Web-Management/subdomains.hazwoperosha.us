// practice-quiz.hazwoperosha.us: scored 10-question HAZWOPER practice quiz. Game show.
const QUIZ = [
  ["How many hours of initial training does a general site worker need under 29 CFR 1910.120(e)?", ["8", "24", "40", "80"], 2, "General site workers who may be exposed at or above exposure limits need 40 hours of instruction."],
  ["How many days of supervised field experience follow the 40-hour course?", ["None", "1", "3", "5"], 2, "Three days of actual field experience under a trained, experienced supervisor."],
  ["How often is HAZWOPER refresher training required?", ["Every 6 months", "Every 12 months", "Every 3 years", "Only once"], 1, "Eight hours of refresher training annually."],
  ["An atmosphere is oxygen-deficient below what percentage?", ["23.5%", "21%", "19.5%", "16%"], 2, "Below 19.5% oxygen by volume is oxygen-deficient."],
  ["Which level of protection gives the highest level of skin protection?", ["Level A", "Level B", "Level C", "Level D"], 0, "Level A uses a fully encapsulating, vapor-tight suit with SCBA."],
  ["Level C protection uses which type of respirator?", ["SCBA", "Supplied air", "Air-purifying respirator", "No respirator"], 2, "Level C uses an air-purifying respirator, only when contaminants are known and measured."],
  ["Where does decontamination normally take place?", ["Exclusion zone", "Contamination reduction zone", "Support zone", "Off site"], 1, "Decon is in the contamination reduction (warm) zone, between the hot and cold zones."],
  ["What does an awareness-level responder do after notifying?", ["Contains the spill", "Plugs the leak", "Takes no further action", "Leads the response"], 2, "Awareness responders recognize, isolate and notify, then take no further action."],
  ["How many additional hours of training do HAZWOPER supervisors need?", ["4", "8", "16", "24"], 1, "Supervisors need at least 8 additional hours of specialized training under (e)(4)."],
  ["What initial training do TSD facility workers need under paragraph (p)?", ["8 hours", "24 hours", "40 hours", "No training"], 1, "New TSD facility employees need 24 hours of initial training."],
];

export default {
  brand: "HAZWOPER Quiz",
  logo: `<span class="q">Q</span> HAZWOPER Quiz`,
  title: "HAZWOPER Practice Quiz: 10 Questions with Answers | HAZWOPER Quiz",
  description: "Test your HAZWOPER knowledge with a free 10-question practice quiz on training hours, PPE levels, decon, oxygen limits and responder levels, with explanations for every answer.",
  theme: "#7048e8",
  fonts: "family=Rubik:wght@400;500;700;800&family=Inter:wght@400;500",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#7048e8"/><text x="16" y="22" font-size="16" font-family="Arial" font-weight="900" text-anchor="middle" fill="#ffe066">Q</text></svg>`,
  hero: {
    title: "Think you know <span>HAZWOPER?</span>",
    lede: "Ten quick questions on training hours, PPE, decon and response levels, with an explanation for every answer. No sign-up.",
    cta: [587, "Study with the 40-hour"],
    alt: ["#quiz", "Take the quiz"],
  },
  coursesTagline: "Courses that cover every question on the quiz.",
  guidesTagline: "Studying for the HAZWOPER final exam.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER", summary: "Covers every topic on this quiz.", body: `The full initial course.`, topics: ["Training rules", "PPE", "Decon", "Emergencies"], who: "Site workers." },
    { id: 595, short: "8-Hour Refresher", summary: "Brush up every year.", body: `The annual refresher.`, topics: ["Review", "Case studies"], who: "Certified workers." },
    { id: 585, short: "PPE Levels A–D", summary: "Ace the PPE questions.", body: `15 minutes on PPE levels.`, topics: ["Levels A–D"], who: "Anyone." },
    { id: 584, short: "Decontamination", summary: "Ace the decon questions.", body: `20 minutes on decon.`, topics: ["Zones", "Stations"], who: "Anyone." },
    { id: 1099, short: "Awareness", summary: "Ace the responder questions.", body: `Four hours on awareness level.`, topics: ["Recognize", "Isolate", "Notify"], who: "Anyone." },
  ],

  feature: () => `<section class="sec qz-sec" id="quiz"><div class="wrap">
<div class="qz">
<div class="qz-bar"><span id="qzN"></span><span id="qzScore"></span></div>
<div class="qz-prog"><i id="qzProg"></i></div>
<h2 id="qzQ"></h2>
<div class="qz-opts" id="qzOpts"></div>
<p class="qz-ex" id="qzEx" hidden></p>
<button type="button" class="btn" id="qzNext" hidden>Next question</button>
</div></div></section>
<script>
window.QUIZ = ${JSON.stringify(QUIZ).replace(/</g, "\\u003c")};
(function () {
  var i = 0, score = 0, Q = window.QUIZ;
  var q = document.getElementById("qzQ"), o = document.getElementById("qzOpts"), ex = document.getElementById("qzEx"), nx = document.getElementById("qzNext"),
      n = document.getElementById("qzN"), sc = document.getElementById("qzScore"), pr = document.getElementById("qzProg");
  function show() {
    var it = Q[i]; n.textContent = "Question " + (i + 1) + " of " + Q.length; sc.textContent = "Score: " + score;
    pr.style.width = (i / Q.length * 100) + "%"; q.textContent = it[0]; o.textContent = ""; ex.hidden = true; nx.hidden = true;
    it[1].forEach(function (a, k) {
      var b = document.createElement("button"); b.type = "button"; b.className = "qz-opt"; b.textContent = a;
      b.addEventListener("click", function () {
        o.querySelectorAll("button").forEach(function (x, j) { x.disabled = true; if (j === it[2]) x.classList.add("right"); });
        if (k === it[2]) score++; else b.classList.add("wrong");
        ex.textContent = (k === it[2] ? "Correct. " : "Not quite. ") + it[3]; ex.hidden = false;
        sc.textContent = "Score: " + score; nx.hidden = false; nx.textContent = i === Q.length - 1 ? "See my score" : "Next question";
      });
      o.appendChild(b);
    });
  }
  nx.addEventListener("click", function () {
    i++;
    if (i < Q.length) return show();
    pr.style.width = "100%"; n.textContent = "Finished"; o.textContent = ""; nx.hidden = true;
    q.textContent = "You scored " + score + " out of " + Q.length;
    ex.hidden = false; ex.innerHTML = (score >= 8 ? "Great work. " : "Keep studying. ") + 'Ready for the real thing? <a rel="nofollow" href="?buy=587" data-buy="587">Enroll in the 40-hour</a> or <a href="#quiz" id="qzAgain">try again</a>.';
    document.getElementById("qzAgain").addEventListener("click", function (e) { e.preventDefault(); i = 0; score = 0; show(); });
  });
  show();
})();
</script>`,

  guides: [
    {
      slug: "how-to-pass-the-hazwoper-final-exam",
      title: "How to pass the HAZWOPER final exam",
      description: "Study habits that work for a 40-hour course, from people who've done it.",
      date: "2026-10-25",
      courses: [587],
      body: `The final exam checks that you understood the course. These habits help.

## While you study

1. **Take notes on numbers.** Training hours, oxygen percentages, refresher frequency, LEL alarm settings.
2. **Draw the site zones.** Exclusion, contamination reduction and support zones, with the decon line.
3. **Learn the PPE levels** by what changes between them: respiratory protection and skin protection.
4. **Do every module quiz.** They show you what the exam focuses on.

## The night before

Review your notes, especially numbers and definitions. Get some sleep.

## During the exam

- Read the whole question before the answers
- Watch for "not," "except" and "always"
- Eliminate obviously wrong answers first
- Don't rush. The course is self-paced.

## Practice

The quiz above covers ten of the most common topics. If you can get eight or more right, you're on track.

{{buy:587}}`,
    },
    {
      slug: "numbers-every-hazwoper-worker-should-know",
      title: "The numbers every HAZWOPER worker should know",
      description: "Training hours, oxygen limits and more, on one page.",
      date: "2026-10-25",
      courses: [587, 595],
      body: `| Number | What it means |
|---|---|
| 40 | Hours of initial training for general site workers |
| 24 | Hours for occasional and low-exposure workers, and for TSD workers |
| 3 / 1 | Days of supervised field experience after the 40 / 24-hour |
| 8 | Hours of annual refresher training, and extra hours for supervisors |
| 12 | Months between refreshers |
| 19.5% | Oxygen below this level is oxygen-deficient |
| 23.5% | Oxygen above this level is oxygen-enriched, a fire hazard |
| 10% LEL | A common alarm and stop-work level for flammable atmospheres |
| 15 minutes | Averaging period for short-term exposure limits |
| 8 hours | Averaging period for most permissible exposure limits |

Take the quiz above to see if they've stuck.

{{buy:595}}`,
    },
  ],
};
