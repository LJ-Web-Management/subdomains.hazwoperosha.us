// toolbox-talks.hazwoperosha.us: printable 5-minute HAZWOPER toolbox talks. Clipboard sheet on corkboard.
const TALKS = [
  ["Buddy system", ["Never enter the exclusion zone alone.", "Know your buddy's PPE, air supply and limits.", "Agree on hand signals before entry.", "Watch for signs of heat stress or exposure in each other."], "What hand signal means 'leave the zone now'?"],
  ["Decon line discipline", ["Every exit from the hot zone goes through decon.", "Follow the station order. No shortcuts.", "Decon techs wear PPE too.", "Report damaged PPE before you doff it."], "What's the last item removed before the field wash?"],
  ["Heat stress in PPE", ["Drink water before you're thirsty.", "Use work/rest cycles on hot days.", "Know the signs: dizziness, confusion, nausea, heavy sweating.", "Heat stroke is a 911 emergency."], "Where's today's cool-down area?"],
  ["Air monitoring basics", ["Bump test meters before use.", "Monitor oxygen first, then LEL, then toxics.", "Know the action levels in the site plan.", "Leave when an alarm sounds. Don't silence and keep working."], "What's our action level for upgrading PPE?"],
  ["Slips, trips and falls on site", ["Keep walkways clear of hoses and debris.", "PPE limits your vision and footing. Slow down.", "Mark holes and excavation edges.", "Report hazards right away."], "Where's the worst trip hazard on site today?"],
  ["Drum handling", ["Assume unknown drums are hazardous.", "Inspect before moving: bulging, leaks, rust.", "Use drum handling equipment, not your back.", "Never open a bulging drum by hand."], "Who decides how unknown drums are opened?"],
  ["Confined spaces", ["Don't enter without a permit if the space requires one.", "Test the air before and during entry.", "An attendant stays outside at all times.", "Most confined space deaths are would-be rescuers."], "Who's today's attendant?"],
  ["Emergency signals", ["Know the evacuation signal and muster point.", "Know the wind direction and alternate routes.", "Know how to report an emergency on site.", "Account for your buddy at the muster point."], "Where do we muster if the wind shifts?"],
  ["Respirator checks", ["Do a seal check every time you don.", "Inspect straps, valves and facepiece.", "Change cartridges on schedule, not by smell.", "Facial hair under the seal isn't allowed with tight-fitting respirators."], "When does today's cartridge change happen?"],
  ["Spill first response", ["Protect yourself first.", "Stop the source only if it's safe and you're trained.", "Contain with booms, socks or berms.", "Report every spill, however small."], "Where's the nearest spill kit?"],
  ["Electrical hazards on site", ["Locate overhead and buried lines before work.", "Use GFCIs on temporary power.", "Keep cords out of water.", "Lock out equipment before maintenance."], "Where are the overhead lines on this site?"],
  ["Hazard communication", ["Read labels and SDSs before handling chemicals.", "Know the hazards in the site safety plan.", "Ask if you don't recognize a material.", "Label every secondary container."], "Where are the SDSs kept on this site?"],
];

export default {
  brand: "Tailgate Talks",
  logo: `<span class="tt-pin"></span>Tailgate Talks`,
  title: "Free HAZWOPER Toolbox Talks: Printable 5-Minute Briefings | Tailgate Talks",
  description: `${TALKS.length} free, printable 5-minute toolbox talks for HAZWOPER crews: buddy system, decon, heat stress, air monitoring, drums, confined spaces and more.`,
  theme: "#a0522d",
  fonts: "family=Patrick+Hand&family=Inter:wght@400;600;800",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="4" fill="#c69c6d"/><rect x="8" y="6" width="16" height="22" fill="#fff"/><path d="M11 12h10M11 16h10M11 20h7" stroke="#555" stroke-width="1.5"/><circle cx="16" cy="6" r="3" fill="#e03131"/></svg>`,
  hero: {
    title: "Five minutes <span>before the gate.</span>",
    lede: "Short, printable toolbox talks for the morning tailgate on HAZWOPER sites. Pick one, print it, talk it through, and get signatures.",
    cta: [595, "8-Hour Refresher · $89.99"],
    alt: ["#talks", "Pick a talk"],
  },
  coursesTagline: "Refresher and supervisor training.",
  guidesTagline: "Running a tailgate meeting that people listen to.",

  courses: [
    { id: 595, short: "8-Hour Refresher", summary: "The annual refresher.", body: "The annual 8-hour HAZWOPER refresher, covering the topics behind these talks.", topics: ["Hazard recognition", "PPE", "Decon", "Lessons learned"] },
    { id: 597, short: "HAZWOPER Supervisor", summary: "Leading crews and briefings.", body: "Eight hours for supervisors, including safety briefings and the site safety program.", topics: ["Safety program", "Briefings", "PPE decisions"] },
    { id: 596, short: "Supervisor Refresher", summary: "The annual supervisor refresher.", body: "The annual 8-hour refresher for HAZWOPER supervisors.", topics: ["Supervisor duties", "Recent changes"] },
    { id: 587, short: "40-Hour HAZWOPER", summary: "Where it all starts.", body: "The full 40-hour initial course.", topics: ["Site safety", "PPE", "Decon", "Monitoring"] },
  ],

  feature: (h) => `<section class="sec tt-sec" id="talks"><div class="wrap tt-in">
<div class="tt-list">${TALKS.map((t, i) => `<button type="button" data-i="${i}"${i === 0 ? ' class="on"' : ""}><b>${String(i + 1).padStart(2, "0")}</b>${h.esc(t[0])}</button>`).join("")}</div>
<article class="tt-sheet" id="ttSheet"><p class="tt-k">Toolbox talk · 5 minutes</p><h2 id="ttT"></h2><ul id="ttL"></ul><p class="tt-q"><b>Ask the crew:</b> <span id="ttQ"></span></p>
<div class="tt-sign"><p>Date ____________ Site ______________________ Leader ______________________</p><p>Attendees</p><div class="tt-lines">${"<span></span>".repeat(10)}</div></div>
<button type="button" class="btn tt-print" onclick="window.print()">Print this talk</button></article>
</div></section>
<script>
window.TT = ${JSON.stringify(TALKS).replace(/</g, "\\u003c")};
(function () {
  var bs = document.querySelectorAll(".tt-list button");
  function show(i) { var t = window.TT[i]; document.getElementById("ttT").textContent = t[0]; var ul = document.getElementById("ttL"); ul.innerHTML = ""; t[1].forEach(function (x) { var li = document.createElement("li"); li.textContent = x; ul.appendChild(li); }); document.getElementById("ttQ").textContent = t[2]; bs.forEach(function (b) { b.classList.toggle("on", +b.getAttribute("data-i") === i); }); }
  bs.forEach(function (b) { b.addEventListener("click", function () { show(+b.getAttribute("data-i")); }); });
  show(0);
})();
</script>`,

  guides: [
    {
      slug: "tailgate-meetings-people-listen-to",
      title: "Tailgate meetings people actually listen to",
      description: "Short, specific and about today's work.",
      date: "2026-10-25",
      courses: [597, 596],
      body: `## Keep it short

Five to ten minutes. People stop listening after that, especially standing in PPE.

## Make it about today

Connect the topic to today's tasks, today's weather and today's hazards. "Drum handling" means more when there are drums to move this morning.

## Ask, don't lecture

Ask a question and wait for an answer. Let the crew share near misses and ideas.

## Cover the essentials every day

- Today's tasks and who's doing them
- PPE levels and any changes
- Weather and wind direction
- Emergency signals and muster point

## Write it down

Record the topic, date and attendees. It's evidence of training and shows the crew it matters.

{{buy:597}}`,
    },
    {
      slug: "turning-near-misses-into-talks",
      title: "Turning near misses into toolbox talks",
      description: "Your best safety topics come from your own site.",
      date: "2026-10-25",
      courses: [595, 597],
      body: `A near miss is a free lesson. Use it.

1. **Collect** near misses without blame, so people keep reporting them
2. **Pick one** each week that others could learn from
3. **Tell the story**: what happened, what could have happened, what was changed
4. **Ask the crew** where else it could happen
5. **Follow up** on the fix

Near misses from your own site stick far better than generic topics. The annual refresher ([[595]]) is a good place to share the year's best lessons.`,
    },
  ],
};
