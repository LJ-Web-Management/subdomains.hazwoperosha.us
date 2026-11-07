// spill-kit-sizer.hazwoperosha.us: recommend a spill kit type and size. Calculator.
export default {
  brand: "Spill Kit Sizer",
  logo: `<span class="gal">gal</span> Spill Kit Sizer`,
  title: "Spill Kit Size Calculator: Type, Capacity and Extras | Spill Kit Sizer",
  description: "Answer four questions and get a spill kit recommendation: universal, oil-only or hazmat, the absorbent capacity you need, and extras like drain covers, booms and neutralizers.",
  theme: "#5c940d",
  fonts: "family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#5c940d"/><path d="M9 9h14l-2 18H11z" fill="#ffe066"/><rect x="8" y="6" width="16" height="4" rx="1" fill="#fff"/></svg>`,
  hero: {
    title: "What size spill kit <span>do you need?</span>",
    lede: "Match the kit to your biggest container, the liquid and where it could flow. Get a recommendation in seconds, then train your staff to use it.",
    cta: [479, "Spill kit course · $24.99"],
    alt: ["#sizer", "Size my kit"],
  },
  coursesTagline: "Spill response courses to go with the right kit.",
  guidesTagline: "Placing kits and keeping them stocked.",

  courses: [
    { id: 479, short: "Spill Kit Selection & Use", summary: "Choosing, placing and using spill kits.", body: `One hour on spill kits.`, topics: ["Kit types", "Sizing", "Placement", "Use and disposal"], who: "Anyone expected to use a spill kit." },
    { id: 416, short: "Spill Prevention & Response", summary: "Preventing spills and responding safely.", body: `Two hours on prevention and first response.`, topics: ["Causes", "Containment", "Reporting"], who: "Facility staff." },
    { id: 478, short: "Booms", summary: "Using booms near drains and water.", body: `One hour on booms.`, topics: ["Boom types", "Placement", "Anchoring"], who: "Staff near waterways." },
    { id: 1099, short: "Awareness", summary: "Knowing when a spill is too big for the kit.", body: `Four hours on recognizing and reporting releases.`, topics: ["Recognize", "Isolate", "Notify"], who: "All staff." },
  ],

  feature: () => `<section class="sec sz-sec" id="sizer"><div class="wrap sz-in">
<form class="sz" id="szForm" method="post">
<label>Largest single container in the area (gallons)<input id="szGal" type="number" min="1" value="55"></label>
<label>What's stored there?<select id="szLiq"><option value="oil">Oil, fuel, hydraulic fluid</option><option value="univ" selected>Mixed: oils, coolants, water-based fluids</option><option value="chem">Acids, bases or aggressive chemicals</option></select></label>
<label>Where could it flow?<select id="szLoc"><option value="in">Indoors, no floor drains</option><option value="drain">Near floor drains or storm drains</option><option value="water">Outdoors near ditches, streams or water</option></select></label>
<label>Indoors or out?<select id="szExp"><option value="0">Indoors / covered</option><option value="1">Outdoors, exposed to rain</option></select></label>
</form>
<h2 class="vh">Your spill kit recommendation</h2>
<div class="sz-out" aria-live="polite"></div>
</div>
<p class="sz-note">A starting point only. Size kits to your largest likely spill, check product compatibility with the SDS and follow your SPCC or spill plan where you have one.</p>
</section>
<script>
(function () {
  var g = document.getElementById("szGal"), l = document.getElementById("szLiq"), loc = document.getElementById("szLoc");
  var outEl = document.querySelector(".sz-out");
  var sizes = [5, 10, 20, 30, 55, 65, 95];
  function calc() {
    var gal = Math.max(1, parseFloat(g.value) || 1), cap = sizes.filter(function (s) { return s >= gal; })[0];
    var type = l.value === "oil" ? "Oil-only (usually white) absorbents" : l.value === "chem" ? "Hazmat / chemical (usually yellow) absorbents" : "Universal (usually gray) absorbents";
    if (l.value === "univ" && document.getElementById("szExp").value === "1") type = "Oil-only for outdoor oil spills, plus a universal kit for other fluids";
    if (l.value === "oil" && document.getElementById("szExp").value === "1") type = "Oil-only (usually white) absorbents, which repel rainwater";
    var extras = ["Nitrile gloves and splash goggles", "Disposal bags, ties and labels"];
    if (loc.value !== "in") extras.unshift("Drain covers or drain plugs");
    if (loc.value === "water") extras.unshift("Absorbent booms long enough to ring the area or block the ditch");
    if (l.value === "chem") extras.unshift("Acid and base neutralizers matched to your chemicals", "Chemical-resistant gloves and apron rated for the products (check the SDS)");
    var kit = cap ? cap + "-gallon kit (wheeled bin or drum for 30+ gallons)" : "Multiple kits or a bulk spill station: your largest container (" + gal + " gal) exceeds standard kit sizes";
    outEl.innerHTML = '<p class="k">Recommended</p><h3></h3><p class="t"></p><p class="k">Add</p><ul></ul><p class="k">Train your staff</p><a class="btn" rel="nofollow" href="?buy=479" data-buy="479">Spill kit course · $24.99</a>';
    outEl.querySelector("h3").textContent = kit; outEl.querySelector(".t").textContent = type;
    var ul = outEl.querySelector("ul"); extras.forEach(function (e) { var li = document.createElement("li"); li.textContent = e; ul.appendChild(li); });
  }
  document.getElementById("szForm").addEventListener("submit", function (e) { e.preventDefault(); });
  document.getElementById("szForm").addEventListener("input", calc);
  document.getElementById("szForm").addEventListener("change", calc);
  calc();
})();
</script>`,

  guides: [
    {
      slug: "where-to-put-spill-kits",
      title: "Where to put spill kits",
      description: "A spill kit across the building doesn't help. Placement rules that work.",
      date: "2026-10-25",
      courses: [479, 416],
      body: `## Put kits where spills start

- Fuel dispensers and generator day tanks
- Drum and tote storage
- Loading docks and transfer points
- Maintenance bays and parts washers
- Chemical storage rooms and battery rooms

## Within reach

Staff should be able to reach a kit in under a minute. Many facilities aim for a kit within about 50 feet of each spill-prone area.

## Between the spill and the drain

Place kits so the first thing a responder grabs, usually a drain cover and socks, is on the way to the nearest drain.

## Visible and clear

Label kits clearly, mount signs above them and keep them free of pallets and clutter.

## Matched to the area

A battery room needs acid neutralizer. A fuel island needs oil-only absorbents. Use the sizer above for each area.

{{buy:479}}`,
    },
    {
      slug: "spill-kit-inspection-checklist",
      title: "Spill kit inspection checklist",
      description: "A monthly two-minute check that keeps kits ready.",
      date: "2026-10-25",
      courses: [479],
      body: `Check every kit monthly and after every use.

## Checklist

- Seal intact, or contents verified if opened
- Absorbent socks, pads and pillows present and dry
- Drain cover present and not cracked
- Gloves and goggles present, not brittle or expired
- Disposal bags and ties present
- Neutralizers present and in date (for chemical kits)
- Instructions and emergency numbers inside the lid
- Kit labeled and unobstructed
- Inspection date and initials recorded

## After use

Restock the same day. A used kit with half its contents is worse than none, because people assume it's ready.

## Disposal

Used absorbents take on the hazards of what they absorbed. Bag, label and manage them as waste under your facility's procedures.

{{buy:479}}`,
    },
  ],
};
