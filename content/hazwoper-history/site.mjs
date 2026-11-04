// hazwoper-history.hazwoperosha.us: the history of HAZWOPER and hazardous waste law, as a timeline. Museum exhibit.
const EVENTS = [
  ["1976", "RCRA is enacted", "The Resource Conservation and Recovery Act gives EPA authority to control hazardous waste from generation to disposal: \"cradle to grave.\""],
  ["1978", "Love Canal", "Chemical waste buried beneath a Niagara Falls, New York neighborhood leads to a federal emergency declaration and national attention on abandoned waste sites."],
  ["1980", "CERCLA (Superfund)", "Congress passes the Comprehensive Environmental Response, Compensation, and Liability Act to clean up uncontrolled hazardous waste sites."],
  ["1984", "RCRA amendments", "The Hazardous and Solid Waste Amendments tighten RCRA, including land disposal restrictions and rules for small quantity generators."],
  ["1986", "SARA Section 126", "The Superfund Amendments and Reauthorization Act directs OSHA to protect workers at hazardous waste sites and in emergency response. OSHA issues an interim final rule in December."],
  ["1989", "HAZWOPER final rule", "OSHA publishes the final Hazardous Waste Operations and Emergency Response standard, 29 CFR 1910.120, on March 6, 1989. EPA publishes 40 CFR Part 311 to cover public employees in states without a state plan."],
  ["1990", "HAZWOPER takes effect", "The final rule becomes effective on March 6, 1990. The same year, the Oil Pollution Act follows the Exxon Valdez spill."],
  ["2010", "Training in a language workers understand", "OSHA states that required training must be presented in a manner, language and vocabulary employees can understand."],
  ["2016", "Generator Improvements Rule", "EPA reorganizes and updates the hazardous waste generator rules, including new requirements like the contingency plan quick reference guide."],
  ["2018", "e-Manifest", "EPA launches the national electronic hazardous waste manifest system."],
  ["2019", "Pharmaceuticals rule", "EPA's hazardous waste pharmaceuticals rule (40 CFR 266 Subpart P) bans sewering of hazardous waste pharmaceuticals by healthcare facilities."],
];

export default {
  title: "The History of HAZWOPER: From Love Canal to Today | Industrial Certified Training",
  description: "A timeline of how HAZWOPER and US hazardous waste law came to be: RCRA, Love Canal, Superfund, SARA Section 126, the 1989 final rule and what's changed since.",
  theme: "#5f3dc4",
  fonts: "family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Source+Sans+3:wght@400;600;700",
  hero: {
    title: "Why HAZWOPER <em>exists.</em>",
    lede: "Every rule in your 40-hour course traces back to real events. Walk the timeline from the first hazardous waste law to today.",
    cta: [587, "Take the 40-hour"],
    alt: ["#timeline", "Walk the timeline"],
  },
  coursesTagline: "The training that grew out of this history.",
  guidesTagline: "The stories behind the rules.",

  courses: [
    { id: 587, short: "40-Hour HAZWOPER", summary: "The training SARA Section 126 made law.", body: `The 40-hour initial course under 29 CFR 1910.120.`, topics: ["Site safety", "PPE", "Decon", "Emergencies"], who: "Site workers." },
    { id: 601, short: "RCRA Generator", summary: "Training rooted in 1976's RCRA.", body: `Generator training under 40 CFR 262.`, topics: ["Waste determination", "Manifests"], who: "Waste handlers." },
    { id: 580, short: "Manifest", summary: "Cradle to grave, on paper and now electronic.", body: `The manifest and e-Manifest.`, topics: ["Manifest", "e-Manifest"], who: "Shippers." },
    { id: 593, short: "Incident Command", summary: "The emergency response side of HAZWOPER.", body: `Incident command under 1910.120(q).`, topics: ["ICS", "Size-up"], who: "Responders." },
  ],

  feature: (h) => `<section class="sec tl-sec" id="timeline"><div class="wrap">
<ol class="tl">${EVENTS.map((e) => `<li class="ev"><span class="ev-yr">${e[0]}</span><div class="ev-card"><h3>${h.esc(e[1])}</h3><p>${h.esc(e[2])}</p></div></li>`).join("")}</ol>
</div></section>
<script>
(function () {
  if (!("IntersectionObserver" in window)) return;
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .2 });
  document.querySelectorAll(".ev").forEach(function (el) { el.classList.add("pre"); io.observe(el); });
})();
</script>`,

  guides: [
    {
      slug: "love-canal-and-the-birth-of-superfund",
      title: "Love Canal and the birth of Superfund",
      description: "How one neighborhood's buried chemical waste changed US environmental law.",
      date: "2026-10-25",
      courses: [587],
      body: `In the 1940s and early 1950s, a chemical company buried thousands of tons of chemical waste in an abandoned canal in Niagara Falls, New York. The site was later covered over, and a school and neighborhood were built on and around it.

By the late 1970s, residents were reporting chemicals seeping into basements and yards. In 1978, the state and federal governments declared emergencies, and hundreds of families were relocated.

## What changed

Love Canal showed there was no federal program to clean up abandoned hazardous waste sites or make polluters pay. In 1980, Congress passed **CERCLA**, known as Superfund, to do both.

## The worker connection

Cleaning up thousands of Superfund sites meant sending workers into uncontrolled hazards. In 1986, the **Superfund Amendments and Reauthorization Act (SARA)** directed OSHA to write worker protection rules for that work. The result was HAZWOPER.

## Today

The training in your 40-hour course, from site characterization to decon, exists because of sites like Love Canal.

{{buy:587}}`,
    },
    {
      slug: "how-hazwoper-became-law",
      title: "How HAZWOPER became law: 1986 to 1990",
      description: "From a single section of SARA to the standard every site worker trains under.",
      date: "2026-10-25",
      courses: [587, 593],
      body: `## 1986: the mandate

Section 126 of the Superfund Amendments and Reauthorization Act told OSHA to issue standards protecting employees engaged in hazardous waste operations and emergency response, and listed the topics they had to cover: site analysis, training, medical surveillance, protective equipment, monitoring, decontamination, emergency response and more.

## December 1986: interim rule

OSHA issued an interim final rule so protections applied while the permanent rule was developed.

## March 6, 1989: final rule

OSHA published the final standard, **29 CFR 1910.120**, with its familiar structure: cleanup sites, TSD facilities and emergency response. EPA published a parallel rule, 40 CFR Part 311, to cover state and local government employees in states without an OSHA state plan.

## March 6, 1990: effective

The standard took full effect one year after publication.

## Still current

The core of the rule, including the 40, 24 and 8-hour training requirements, has stayed the same since. That's why a certificate from any properly run course carries the same weight today.

{{buy:593}}`,
    },
  ],
};
