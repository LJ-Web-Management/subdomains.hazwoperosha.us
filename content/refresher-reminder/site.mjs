// refresher-reminder.hazwoperosha.us: work out your refresher due date and add it to your calendar. Calendar tool.
export default {
  title: "HAZWOPER Refresher Due Date & Calendar Reminder | Industrial Certified Training",
  description: "Enter your last HAZWOPER certificate date and get your refresher due date, plus a calendar reminder (.ics or Google Calendar) 30 days ahead. Then renew online.",
  theme: "#e8590c",
  fonts: "family=Bricolage+Grotesque:wght@500;700;800&family=Inter:wght@400;500;600",
  hero: {
    title: "Put your refresher <span>on the calendar.</span>",
    lede: "HAZWOPER certificates need renewing every 12 months. Work out your due date and drop a reminder into your calendar in one click.",
    cta: [595, "Renew now · $89.99"],
    alt: ["#reminder", "Set a reminder"],
  },
  coursesTitle: "Refresher courses",
  coursesTagline: "Every annual refresher in one place.",
  guidesTagline: "Staying current, and keeping a whole crew current.",

  courses: [
    { id: 595, short: "8-Hour Refresher", summary: "The standard annual HAZWOPER refresher.", body: `Required every 12 months under 29 CFR 1910.120(e)(8).`, topics: ["Hazard review", "PPE and monitoring", "Case studies"], who: "Workers with a 40- or 24-hour certificate." },
    { id: 596, short: "Supervisor Refresher", summary: "The annual refresher for HAZWOPER supervisors.", body: `Eight hours that keep supervisor training current.`, topics: ["Refresher core", "Site safety plan", "Briefings"], who: "Supervisors." },
    { id: 574, short: "Responder Refresher", summary: "The annual refresher for responders and incident commanders.", body: `Annual training under 1910.120(q)(8).`, topics: ["ICS review", "PPE", "Lessons learned"], who: "Responders." },
    { id: 594, short: "TSD Refresher", summary: "The annual refresher for TSD facility workers.", body: `Eight hours a year under 1910.120(p).`, topics: ["(p) review", "Incidents", "PPE"], who: "TSDF workers." },
    { id: 578, short: "Cal/OSHA Refresher", summary: "The annual refresher written to Cal/OSHA Title 8.", body: `California's 8-hour annual refresher.`, topics: ["Title 8 review", "Heat illness", "Case studies"], who: "California workers." },
    { id: 900, short: "State-Plan Refresher", summary: "The annual refresher with state-plan versions.", body: `For workers in state-plan states.`, topics: ["Federal content", "State-plan differences"], who: "State-plan workers." },
  ],

  feature: (h) => `<section class="sec rem-sec" id="reminder"><div class="wrap rem-in">
<form class="rem" id="remForm">
<label>Your name (optional)<input id="rName" type="text" autocomplete="name"></label>
<label>Date on your last HAZWOPER certificate<input id="rDate" type="date" required></label>
<label>Which refresher?<select id="rCourse">${h.courses.map((c) => `<option value="${c.id}">${h.esc(c.short)}</option>`).join("")}</select></label>
<label>Remind me<select id="rLead"><option value="30">30 days before</option><option value="14">14 days before</option><option value="60">60 days before</option></select></label>
</form>
<div class="out" id="rOut" aria-live="polite">
<p class="due-label">Your refresher is due</p>
<p class="due" id="rDue">Pick a date</p>
<p class="left" id="rLeft"></p>
<div class="rem-actions"><button type="button" class="btn" id="rIcs" disabled>Download .ics</button><a class="btn btn-alt" id="rGoogle" target="_blank" rel="noopener" aria-disabled="true">Google Calendar</a></div>
<p class="enroll" id="rEnroll"></p>
</div></div></section>
<script>
(function () {
  var d = document.getElementById("rDate"), c = document.getElementById("rCourse"), lead = document.getElementById("rLead"), nm = document.getElementById("rName");
  var due = document.getElementById("rDue"), left = document.getElementById("rLeft"), ics = document.getElementById("rIcs"), g = document.getElementById("rGoogle"), en = document.getElementById("rEnroll");
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function ymd(x) { return x.getFullYear() + pad(x.getMonth() + 1) + pad(x.getDate()); }
  var state = null;
  function calc() {
    if (!d.value) return;
    var dt = new Date(d.value + "T00:00:00"); dt.setFullYear(dt.getFullYear() + 1);
    var days = Math.ceil((dt - new Date()) / 864e5);
    var course = (window.HUB_COURSES || {})[c.value] || { name: c.options[c.selectedIndex].text };
    due.textContent = dt.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "long", day: "numeric" });
    left.textContent = days < 0 ? "Overdue by " + (-days) + " days. Renew as soon as possible." : days + " days from today.";
    left.className = "left" + (days < 0 ? " late" : days < 45 ? " soon" : "");
    var title = "HAZWOPER refresher due" + (nm.value ? " (" + nm.value + ")" : "");
    var end = new Date(dt); end.setDate(end.getDate() + 1);
    var details = "Take: " + course.name + " (course #" + c.value + "). Enroll at " + location.origin + "/?buy=" + c.value;
    g.href = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(title) + "&dates=" + ymd(dt) + "/" + ymd(end) + "&details=" + encodeURIComponent(details);
    g.removeAttribute("aria-disabled"); ics.disabled = false;
    en.innerHTML = 'Ready to renew? <a href="?buy=' + c.value + '" data-buy="' + c.value + '">Enroll in the refresher</a>';
    state = { dt: dt, end: end, title: title, details: details };
  }
  [d, c, lead, nm].forEach(function (el) { el.addEventListener("input", calc); el.addEventListener("change", calc); });
  ics.addEventListener("click", function () {
    if (!state) return;
    var now = new Date(), stamp = now.toISOString().replace(/[-:]/g, "").replace(/\\.\\d+/, "");
    var body = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//hazwoperosha.us//Refresher Reminder//EN", "BEGIN:VEVENT",
      "UID:" + now.getTime() + "@refresher-reminder.hazwoperosha.us", "DTSTAMP:" + stamp,
      "DTSTART;VALUE=DATE:" + ymd(state.dt), "DTEND;VALUE=DATE:" + ymd(state.end),
      "SUMMARY:" + state.title, "DESCRIPTION:" + state.details.replace(/,/g, "\\\\,"),
      "BEGIN:VALARM", "TRIGGER:-P" + lead.value + "D", "ACTION:DISPLAY", "DESCRIPTION:" + state.title, "END:VALARM",
      "END:VEVENT", "END:VCALENDAR"].join("\\r\\n");
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([body], { type: "text/calendar" }));
    a.download = "hazwoper-refresher.ics"; document.body.appendChild(a); a.click(); a.remove();
  });
})();
</script>`,

  guides: [
    {
      slug: "keeping-a-crew-on-one-renewal-date",
      title: "Keeping a whole crew on one renewal date",
      description: "Staggered certificates mean somebody is always about to lapse. How to line everyone up.",
      date: "2026-10-25",
      courses: [595],
      body: `When every worker renews on a different date, someone is always close to lapsing. Many employers move the whole crew to a single renewal month.

## How to line everyone up

1. **Pick a slow month**, often winter for construction and remediation crews.
2. **Renew early, never late.** Workers whose date falls after the target month take their refresher early. Taking it early simply moves the next due date earlier.
3. **New hires** take their refresher with the group the first time it falls within 12 months of their initial training.

## Keep the 12-month rule

The one thing you can't do is stretch anyone past 12 months to get them into the group month.

## Track it

Put each worker's due date in a calendar with a reminder 30 to 60 days ahead. The reminder tool on this site creates a calendar file in seconds.

{{buy:595}}`,
    },
    {
      slug: "what-counts-as-the-12-month-clock",
      title: "What starts the 12-month refresher clock?",
      description: "The date on your last certificate, initial or refresher. A few common questions answered.",
      date: "2026-10-25",
      courses: [595, 596, 574],
      body: `29 CFR 1910.120(e)(8) requires eight hours of refresher training annually. In practice, employers count 12 months from the most recent HAZWOPER certificate.

## Common questions

**My last certificate was my 40-hour. When is my refresher due?**
12 months from the 40-hour completion date.

**I took the supervisor course after my 40-hour. Does that reset the clock?**
Supervisor training is additional initial training, not a refresher. Most employers still count from your last 8-hour refresher or initial course. The [[596]] covers both going forward.

**I'm a responder. Is it the same?**
Responders under paragraph (q) need annual refresher training or a yearly demonstration of competency, under (q)(8). See [[574]].

**I took two refreshers in one year. Do I get credit for both?**
No banking. Your next one is due 12 months after the most recent.

## Use the calculator

Enter your last certificate date above and get your due date plus a calendar reminder.`,
    },
  ],
};
