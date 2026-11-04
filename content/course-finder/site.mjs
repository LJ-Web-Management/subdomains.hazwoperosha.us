// course-finder.hazwoperosha.us: answer a few questions, get the right HAZWOPER course. Interactive wizard.
export default {
  brand: "Course Finder",
  logo: `<span class="dot"></span>Which HAZWOPER?`,
  title: "Which HAZWOPER Course Do I Need? | Interactive Course Finder",
  description: "Answer a few questions about your job and get the right OSHA HAZWOPER or hazardous waste course: 40-hour, 24-hour, TSDF, emergency response, generator training or refresher.",
  theme: "#3b5bdb",
  fonts: "family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="10" fill="#3b5bdb"/><text x="16" y="23" font-size="20" font-family="Arial" font-weight="700" text-anchor="middle" fill="#fff">?</text></svg>`,
  hero: {
    title: "Which course <span>do I need?</span>",
    lede: "HAZWOPER training depends on what you do, not your job title. Answer a few questions and we'll point you to the right course.",
    cta: [587, "Skip it: 40-hour · $249.99"],
    alt: ["#finder", "Start the finder"],
  },
  coursesTitle: "Most-recommended courses",
  coursesTagline: "The courses the finder recommends most often.",
  guidesTagline: "How OSHA decides which HAZWOPER training you need.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER", summary: "For general site workers who may be exposed at or above exposure limits.",
      body: `The standard initial training under 29 CFR 1910.120(e)(3)(i).`, topics: ["Hazard recognition", "Site safety plans", "PPE", "Monitoring", "Decon"], who: "General hazardous waste site workers." },
    { id: 581, short: "24-Hour HAZWOPER", summary: "For occasional site workers and workers in monitored low-exposure areas.",
      body: `Initial training under 1910.120(e)(3)(ii) and (iii).`, topics: ["Who qualifies", "Hazard recognition", "PPE basics"], who: "Occasional and low-exposure workers." },
    { id: 595, short: "8-Hour Refresher", summary: "The annual refresher for everyone already certified.",
      body: `Required every year under 1910.120(e)(8).`, topics: ["Hazard review", "PPE and monitoring", "Case studies"], who: "Certified workers." },
    { id: 1099, short: "Awareness", summary: "For people who may discover a release but won't respond.",
      body: `Awareness level under 1910.120(q)(6)(i).`, topics: ["Recognize", "Isolate", "Notify"], who: "Front-line staff." },
    { id: 582, short: "24-Hr TSD Operations", summary: "For workers at permitted treatment, storage and disposal facilities.",
      body: `Initial training under 1910.120(p).`, topics: ["(p) requirements", "Waste handling", "Facility emergencies"], who: "TSDF workers." },
    { id: 601, short: "RCRA Generator", summary: "For businesses that generate and ship hazardous waste.",
      body: `EPA generator training under 40 CFR 262.`, topics: ["Waste determination", "Containers", "Manifests"], who: "Waste handlers and EHS staff." },
  ],

  feature: () => `<section class="sec finder-sec" id="finder"><div class="wrap">
<div class="finder" aria-live="polite">
<div class="finder-top"><span class="step" id="fStep">Question 1</span><button type="button" class="link" id="fBack" hidden>← Back</button></div>
<h2 id="fQ"></h2>
<div class="opts" id="fOpts"></div>
<div class="result" id="fResult" hidden></div>
</div></div></section>
<script>
(function () {
  var T = {
    start: { q: "What best describes your work?", o: [
      ["Cleanup at a hazardous waste site (remediation, spills, contaminated ground)", "site"],
      ["Working at a permitted treatment, storage or disposal facility", "tsdf"],
      ["Responding to chemical releases or emergencies", "resp"],
      ["Handling or shipping hazardous waste at a business", "gen"],
      ["I might see a spill, but I won't clean it up", { r: [1099], why: "Awareness level is for people who may discover a release. Your job: recognize, isolate, notify." }],
      ["I'm already certified and need to renew", "ref"] ] },
    site: { q: "Could you be exposed above exposure limits, or need a respirator?", o: [
      ["Yes, or we don't know yet", "sup40"],
      ["No: I'm only on site occasionally for a limited task, or in monitored low-exposure areas", "sup24"] ] },
    sup40: { q: "Will you supervise others on site?", o: [
      ["Yes", { r: [587, 597], why: "General site workers need the 40-hour. Supervisors add 8 hours of supervisor training." }],
      ["No", "ca40"] ] },
    ca40: { q: "Do you work in California?", o: [
      ["Yes", { r: [577], why: "California enforces its own HAZWOPER rule, 8 CCR 5192. The Cal/OSHA 40-hour is written to it." }],
      ["No", { r: [587], why: "The 40-hour covers general site workers who may be exposed at or above exposure limits." }] ] },
    sup24: { q: "Do you work in California?", o: [
      ["Yes", { r: [576], why: "The Cal/OSHA 24-hour covers occasional and low-exposure workers in California." }],
      ["No", { r: [581], why: "The 24-hour fits occasional workers and workers in monitored areas below exposure limits." }] ] },
    tsdf: { q: "Is the facility in California?", o: [
      ["Yes", { r: [575], why: "California TSD workers train under 8 CCR 5192(p) and Title 22." }],
      ["No", { r: [582], why: "TSD facility workers need 24 hours of initial training under 1910.120(p)." }] ] },
    resp: { q: "What's your role in a response?", o: [
      ["Plant emergency response team member", { r: [702], why: "In-plant ERT members work at the operations level or above." }],
      ["Fire department or hazmat team member", { r: [589], why: "Hazmat teams that also do cleanup need the 40-hour for fire and hazmat teams." }],
      ["Incident commander or shift supervisor", { r: [593], why: "Incident commanders need training to take control under 1910.120(q)(3)." }],
      ["I only need to recognize and report", { r: [1099], why: "Awareness level: recognize, isolate, notify." }] ] },
    gen: { q: "What do you do with hazardous waste?", o: [
      ["Fill and manage waste containers", { r: [601, 415], why: "Generator training covers the rules. Satellite accumulation covers the containers at the point of generation." }],
      ["Sign manifests or ship waste", { r: [403, 580], why: "Shipping hazardous waste makes you a DOT hazmat employee. The manifest course covers what you're certifying." }],
      ["Manage batteries, lamps or aerosol cans", { r: [602], why: "These can be managed under the simpler universal waste rules." }] ] },
    ref: { q: "Which certificate are you renewing?", o: [
      ["40- or 24-hour site worker", { r: [595], why: "Everyone with an initial certificate needs 8 hours of refresher training every 12 months." }],
      ["Supervisor", { r: [596], why: "The supervisor refresher keeps both your HAZWOPER and supervisor training current." }],
      ["Emergency responder or incident commander", { r: [574], why: "Responders need annual refresher training or demonstrated competency." }],
      ["TSD facility worker", { r: [594], why: "TSD workers need 8 hours of refresher training every year under paragraph (p)." }] ] }
  };
  var path = ["start"];
  var q = document.getElementById("fQ"), opts = document.getElementById("fOpts"), res = document.getElementById("fResult"),
      back = document.getElementById("fBack"), step = document.getElementById("fStep");
  function money(n) { return "$" + n.toFixed(2); }
  function show() {
    var node = T[path[path.length - 1]];
    step.textContent = "Question " + path.length;
    back.hidden = path.length < 2;
    q.textContent = node.q; res.hidden = true; opts.hidden = false; opts.textContent = "";
    node.o.forEach(function (o) {
      var b = document.createElement("button"); b.type = "button"; b.className = "opt"; b.textContent = o[0];
      b.addEventListener("click", function () { if (typeof o[1] === "string") { path.push(o[1]); show(); } else result(o[1]); });
      opts.appendChild(b);
    });
  }
  function result(r) {
    step.textContent = "Your recommendation"; back.hidden = false; opts.hidden = true;
    q.textContent = r.r.length > 1 ? "These courses fit your job" : "This course fits your job";
    var html = '<p class="why"></p>';
    res.innerHTML = html; res.querySelector(".why").textContent = r.why;
    r.r.forEach(function (id) {
      var c = (window.HUB_COURSES || {})[id]; if (!c) return;
      var d = document.createElement("div"); d.className = "rec";
      d.innerHTML = '<div><b></b><small></small></div><a class="btn btn-sm" rel="nofollow" href="?buy=' + id + '" data-buy="' + id + '">Enroll</a>';
      d.querySelector("b").textContent = c.name; d.querySelector("small").textContent = c.duration + " · " + money(c.price) + " · Course #" + id;
      res.appendChild(d);
    });
    var again = document.createElement("button"); again.type = "button"; again.className = "link"; again.textContent = "Start over";
    again.addEventListener("click", function () { path = ["start"]; show(); }); res.appendChild(again);
    res.hidden = false; res._last = true;
  }
  back.addEventListener("click", function () { if (!opts.hidden && path.length > 1) path.pop(); show(); });
  show();
})();
</script>`,

  guides: [
    {
      slug: "how-osha-decides-your-hazwoper-training",
      title: "How OSHA decides which HAZWOPER training you need",
      description: "Training is based on what you do and what you could be exposed to. The logic behind the course finder.",
      date: "2026-10-25",
      courses: [587, 581, 1099],
      body: `HAZWOPER (29 CFR 1910.120) covers three kinds of work, each with its own training rules.

## 1. Cleanup sites, paragraph (e)

Hazardous waste site cleanups. Training depends on exposure:

| Exposure | Training |
|---|---|
| May be exposed at or above PELs, or need a respirator | [[587]] + 3 field days |
| Occasional, limited task, or monitored low-exposure areas | [[581]] + 1 field day |
| Supervising | Add 8 hours of supervisor training |

## 2. TSD facilities, paragraph (p)

Permitted treatment, storage and disposal facilities: 24 hours initial, 8 hours annually.

## 3. Emergency response, paragraph (q)

Training by role, from awareness ([[1099]]) through operations, technician, specialist and incident commander.

## Everyone renews

All of these come with annual refresher training.

## Not HAZWOPER, but related

Businesses that generate hazardous waste have EPA training rules (40 CFR 262), and shippers have DOT hazmat training (49 CFR 172.704). The finder covers these too.`,
    },
    {
      slug: "when-in-doubt-take-the-40-hour",
      title: "When in doubt, why most employers choose the 40-hour",
      description: "The 24-hour is narrower than people think. Why the 40-hour is usually the safer choice.",
      date: "2026-10-25",
      courses: [587, 581],
      body: `The 24-hour is allowed only for workers whose exposure really is limited. In practice, many employers default to the 40-hour. Here's why.

## Conditions change

A site that's characterized as low-exposure today can turn up a drum or a hot spot tomorrow. Workers with only 24 hours can't step into those tasks.

## Respirators

Anyone who needs a respirator is outside the 24-hour categories.

## Portability

Many employers and site owners require the 40-hour for all site personnel. A 40-hour certificate opens more doors for a worker.

## The cost difference is small

The difference between [[581]] and [[587]] is 16 hours and two field days. Compared with being sent off a job because training doesn't fit the task, it's a small investment.

## When the 24-hour makes sense

Surveyors, inspectors, delivery drivers and workers who stay in monitored, characterized areas. If that's clearly your role, the 24-hour is the right fit.

{{buy:587}}`,
    },
  ],
};
