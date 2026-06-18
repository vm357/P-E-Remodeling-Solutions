// ServicesPage.jsx — full Services page: detailed interior + exterior service descriptions.
const SPIcon = window.RIcon;
const SPStar = window.RStar;

const SP_INTERIOR = [
{
  slot: "svc-kitchen",
  icon: "kitchen",
  title: "Kitchen remodeling",
  body: "The kitchen is where your home comes together, so we build it to work as beautifully as it looks. From full gut renovations to refreshed layouts, we handle custom cabinetry, countertops, backsplashes, islands, and lighting end to end.",
  points: ["Custom cabinetry & islands", "Quartz, granite & stone countertops", "Tile backsplashes & flooring", "Appliance & fixture installation"]
},
{
  slot: "svc-bathroom",
  icon: "bathroom",
  title: "Bathroom remodeling",
  body: "Spa-inspired bathrooms built with quality materials and craftsmanship that lasts. Whether it's a powder room refresh or a primary suite, we deliver tile, fixtures, and lighting that feel calm and look polished.",
  points: ["Walk-in & rainfall showers", "Soaking & freestanding tubs", "Vanities, tile & fixtures", "Heated floors & modern lighting"]
},
{
  slot: "svc-basement",
  icon: "basement",
  title: "Basement finishing",
  body: "Reclaim square footage with a finished basement designed around how your family actually lives — media rooms, guest suites, home offices, or play space, all built to code and built to last.",
  points: ["Media & living areas", "Guest suites & bathrooms", "Wet bars & storage", "Egress, framing & insulation"]
},
{
  slot: "svc-flooring",
  icon: "flooring",
  title: "Flooring installation",
  body: "Hardwood, tile, and luxury vinyl installed with precision across every room. We help you choose materials that match your style and stand up to daily life, then install them with clean, lasting results.",
  points: ["Hardwood & engineered wood", "Luxury vinyl plank (LVP)", "Porcelain & ceramic tile", "Subfloor prep & leveling"]
},
{
  slot: "svc-painting",
  icon: "painting",
  title: "Interior painting",
  body: "Clean lines and flawless coverage that refresh your space inside and out. Careful prep, premium paints, and a tidy job site mean a finish you'll be proud of for years.",
  points: ["Walls, ceilings & trim", "Cabinet & door refinishing", "Premium low-VOC paints", "Full prep & protection"]
},
{
  slot: "svc-lighting",
  icon: "lighting",
  title: "Lighting upgrades",
  body: "Modern, layered lighting that makes every room feel brighter and bigger. From recessed lighting to statement fixtures and dimmers, we plan a lighting scheme that fits how you use each space.",
  points: ["Recessed & accent lighting", "Statement fixtures", "Dimmers & smart controls", "Under-cabinet lighting"]
}];


const SP_EXTERIOR = [
{
  slot: "svc-patios",
  icon: "patio",
  title: "Patios & outdoor living",
  body: "Beautiful patios and outdoor spaces designed for relaxing and entertaining. We build paver and stone patios, walkways, and seating areas that extend your living space into the backyard.",
  points: ["Paver & natural stone patios", "Walkways & retaining walls", "Built-in seating areas", "Pergolas & shade structures"]
},
{
  slot: "svc-sunrooms",
  icon: "sunroom",
  title: "Sunrooms",
  body: "Light-filled sunrooms that extend your living space into every season. Enjoy the outdoors in comfort with bright, well-insulated additions built to match your home.",
  points: ["Three- & four-season rooms", "Energy-efficient glass", "Insulated, year-round comfort", "Seamless home integration"]
},
{
  slot: "svc-fencing",
  icon: "fencing",
  title: "Fencing",
  body: "Privacy, security, and curb appeal with professionally installed fencing. We help you choose the right material and style for your property, then install it straight, level, and built to last.",
  points: ["Wood, vinyl & aluminum", "Privacy & decorative styles", "Gates & access hardware", "Property-line layout & permits"]
},
{
  slot: "svc-outdoor-kitchens",
  icon: "outdoorkitchen",
  title: "Outdoor kitchens",
  body: "Full outdoor kitchens with grills, counters, and storage for year-round cookouts. We design and build durable, weather-ready cooking and entertaining spaces right in your backyard.",
  points: ["Built-in grills & burners", "Stone & stainless counters", "Weatherproof cabinetry", "Bar seating & utilities"]
},
{
  slot: "svc-fireplaces",
  icon: "fireplace",
  title: "Exterior fireplaces",
  body: "Custom outdoor fireplaces and fire features that anchor your backyard. From stacked-stone fireplaces to fire pits, we create a warm gathering point for cooler evenings.",
  points: ["Stacked-stone fireplaces", "Gas & wood-burning fire pits", "Custom hearths & surrounds", "Integrated seating walls"]
}];


function ServiceDetail({ slot, title, body, points, flip }) {
  return (
    <div className={"pe-sd-row" + (flip ? " pe-sd-flip" : "")}>
      <div className="pe-sd-media">
        <image-slot
          id={slot}
          src={window.PE_SLOT_SRC(slot)}
          shape="rounded"
          radius="12"
          fit="cover"
          placeholder={"Drop a " + title.toLowerCase() + " photo"}>
        </image-slot>
      </div>
      <div className="pe-sd-body">
        <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(24px,2.6vw,30px)", letterSpacing: "-0.4px", color: "var(--color-ink)" }}>{title}</h3>
        <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: "26px", color: "var(--color-body)" }}>{body}</p>
        <ul className="pe-sd-points">
          {points.map((p, pi) =>
          <li key={p} style={{ "--pi": pi }}>
              <span className="pe-sd-check"><SPIcon name="check" size={14} stroke={2.4} /></span>
              {p}
            </li>
          )}
        </ul>
      </div>
    </div>);

}

function ServiceGroup({ id, label, heading, intro, items }) {
  return (
    <section id={id} className="pe-section" style={{ background: id === "exterior" ? "var(--color-canvas-soft)" : "var(--color-canvas)" }}>
      <div className="pe-container">
        <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 680, marginBottom: 52 }}>
          <span className="t-eyebrow" style={{ color: "var(--accent)" }}>{label}</span>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(28px,3.4vw,40px)", lineHeight: 1.1, letterSpacing: "-0.6px", color: "var(--color-ink)" }}>{heading}</h2>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 18, lineHeight: "27px", color: "var(--color-body)" }}>{intro}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {items.map((s, i) =>
          <div className="reveal sp-reveal-row" key={s.title} style={{ transitionDelay: i % 2 * 90 + "ms" }}><ServiceDetail {...s} flip={i % 2 === 1} /></div>
          )}
        </div>
      </div>
    </section>);

}

function ServicesPage() {
  return (
    <React.Fragment>
      {/* Page hero */}
      <section className="pe-section" style={{ background: "var(--color-canvas)", paddingBottom: "var(--space-xl)" }}>
        <div className="pe-container">
          <div className="sp-hero">
            <div className="reveal sp-hero-copy">
              <span className="t-eyebrow" style={{ color: "var(--accent)" }}>Our services</span>
              <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(34px,4.4vw,54px)", lineHeight: 1.05, letterSpacing: "-1px", color: "var(--color-ink)" }}>
                Everything we do to transform your home
              </h1>
              <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 18.5, lineHeight: "28px", color: "var(--color-body)" }}>
                From the kitchen at the heart of your home to the backyard where you unwind, we handle interior and exterior remodeling end to end &mdash; design, materials, and craftsmanship.
              </p>
              <div className="sp-hero-rating">
                <span className="sp-hero-stars">
                  {[0, 1, 2, 3, 4].map((i) => <SPStar key={i} size={17} color="var(--accent)" />)}
                </span>
                <span className="sp-hero-rating-text">Rated <strong>4.9</strong> from 150+ local homeowners</span>
              </div>
              <div className="sp-hero-cta-row">
                <a href="Free Estimate.html" className="pe-sp-cta pe-sp-cta-primary">Get a free estimate <SPIcon name="arrow-right" size={17} stroke={2.1} /></a>
                <a href="#exterior" className="pe-sp-cta pe-sp-cta-ghost">Jump to exterior</a>
              </div>
              <div className="sp-hero-assure">
                <span className="sp-hero-assure-item"><span className="sp-hero-assure-check"><SPIcon name="check" size={12} stroke={2.6} /></span>Free, no-obligation estimate</span>
                <span className="sp-hero-assure-item"><span className="sp-hero-assure-check"><SPIcon name="check" size={12} stroke={2.6} /></span>Licensed &amp; insured</span>
              </div>
            </div>
            <div className="reveal sp-hero-media">
              <span className="sp-hero-accent" aria-hidden="true"></span>
              <div className="sp-hero-frame">
                <image-slot
                  id="svc-hero"
                  src={window.PE_SLOT_SRC("svc-hero")}
                  shape="rounded"
                  radius="16"
                  fit="cover"
                  placeholder="Drop a featured remodel photo">
                </image-slot>
              </div>
              <div className="sp-hero-badge">
                <span className="sp-hero-badge-icon"><SPIcon name="award" size={22} stroke={1.8} /></span>
                <span className="sp-hero-badge-text">
                  <span className="sp-hero-badge-num">100+</span>
                  <span className="sp-hero-badge-label">Projects completed across NJ &amp; NY</span>
                </span>
              </div>
              <span className="sp-hero-chip"><SPIcon name="clock" size={14} stroke={2} /> 10+ years experience</span>
            </div>
          </div>
        </div>
      </section>

      <ServiceGroup
        id="interior"
        label="Interior remodeling"
        heading="Inside your home"
        intro="Reimagine a single room or renovate the whole interior — these are the spaces we transform inside."
        items={SP_INTERIOR} />
      

      <ServiceGroup
        id="exterior"
        label="Exterior remodeling"
        heading="Outside your home"
        intro="Extend your living space outdoors with durable, weather-ready builds designed for how you relax and entertain."
        items={SP_EXTERIOR} />
      

      <style>{`
        .pe-sp-cta{ display:inline-flex; align-items:center; gap:8px; text-decoration:none; font-family:var(--font-body); font-weight:600; font-size:16px; border-radius:var(--radius-md); padding:13px 24px; transition: background 150ms ease, color 150ms ease, border-color 150ms ease, gap 150ms ease; }
        .pe-sp-cta-primary{ background:var(--accent); color:var(--color-on-primary); border:1px solid var(--accent); }
        .pe-sp-cta-primary:hover{ background:var(--accent-hover); border-color:var(--accent-hover); gap:11px; }
        .pe-sp-cta-ghost{ background:transparent; color:var(--color-ink); border:1px solid var(--color-border-soft); }
        .pe-sp-cta-ghost:hover{ background:var(--color-canvas-soft); }

        .sp-hero{ display:grid; grid-template-columns:1.02fr 0.98fr; gap:var(--space-3xl); align-items:center; }
        .sp-hero-copy{ display:flex; flex-direction:column; gap:18px; align-items:flex-start; }
        .sp-hero-rating{ display:flex; align-items:center; gap:11px; flex-wrap:wrap; }
        .sp-hero-stars{ display:inline-flex; gap:2px; }
        .sp-hero-rating-text{ font-family:var(--font-body); font-size:14.5px; color:var(--color-body-mid); }
        .sp-hero-rating-text strong{ color:var(--color-ink); font-weight:600; }
        .sp-hero-cta-row{ display:flex; gap:12px; flex-wrap:wrap; margin-top:2px; }
        .sp-hero-assure{ display:flex; flex-wrap:wrap; gap:9px 22px; margin-top:2px; }
        .sp-hero-assure-item{ display:inline-flex; align-items:center; gap:8px; font-family:var(--font-body); font-size:13.5px; color:var(--color-body); }
        .sp-hero-assure-check{ flex-shrink:0; width:18px; height:18px; border-radius:50%; background:rgba(255,79,0,0.12); color:var(--accent); display:inline-flex; align-items:center; justify-content:center; }

        .sp-hero-media{ position:relative; }
        .sp-hero-accent{ position:absolute; right:-16px; bottom:-16px; width:60%; height:68%; background:var(--color-canvas-soft); border:1px solid var(--color-border-soft); border-radius:18px; z-index:0; }
        .sp-hero-frame{ position:relative; z-index:1; border-radius:16px; overflow:hidden; box-shadow:0 22px 52px rgba(32,21,21,0.14); transition: transform 320ms cubic-bezier(.22,.61,.36,1), box-shadow 320ms ease; }
        .sp-hero-media:hover .sp-hero-frame{ transform:translateY(-4px); box-shadow:0 30px 64px rgba(32,21,21,0.20); }
        .sp-hero-frame image-slot{ display:block; width:100%; height:auto; aspect-ratio:4/3; border-radius:16px; overflow:hidden; }
        .sp-hero-badge{ position:absolute; left:-18px; bottom:26px; z-index:2; display:flex; align-items:center; gap:13px; background:var(--color-canvas); border:1px solid var(--color-border-soft); border-radius:14px; padding:13px 18px; max-width:248px; box-shadow:0 16px 40px rgba(32,21,21,0.18); transition: transform 320ms cubic-bezier(.22,.61,.36,1), box-shadow 320ms ease; }
        .sp-hero-media:hover .sp-hero-badge{ transform:translateY(-3px); box-shadow:0 22px 50px rgba(32,21,21,0.24); }
        .sp-hero-badge-icon{ flex-shrink:0; width:42px; height:42px; border-radius:11px; background:rgba(255,79,0,0.10); color:var(--accent); display:flex; align-items:center; justify-content:center; }
        .sp-hero-badge-text{ display:flex; flex-direction:column; gap:1px; }
        .sp-hero-badge-num{ font-family:var(--font-display); font-weight:500; font-size:26px; line-height:1.05; letter-spacing:-0.5px; color:var(--color-ink); }
        .sp-hero-badge-label{ font-family:var(--font-body); font-size:12.5px; line-height:16px; color:var(--color-body-mid); }
        .sp-hero-chip{ position:absolute; top:20px; right:-14px; z-index:2; display:inline-flex; align-items:center; gap:7px; background:var(--color-ink); color:var(--color-canvas); border-radius:999px; padding:8px 15px; font-family:var(--font-body); font-size:13px; font-weight:600; box-shadow:0 10px 26px rgba(32,21,21,0.22); }
        .sp-hero-chip svg{ color:var(--accent); }
        @media (max-width:900px){
          .sp-hero{ grid-template-columns:1fr; gap:calc(var(--space-2xl) + 8px); }
          .sp-hero-media{ max-width:560px; }
          .sp-hero-badge{ left:12px; }
          .sp-hero-chip{ right:12px; }
        }

        .pe-sd-row{ display:grid; grid-template-columns:1fr 1fr; gap:var(--space-2xl); align-items:center; background:var(--color-canvas); border:1px solid var(--color-border-soft); border-radius:var(--radius-md); padding:24px; transition: transform 280ms cubic-bezier(.22,.61,.36,1), box-shadow 280ms ease, border-color 280ms ease; }
        .pe-sd-row:hover{ transform:translateY(-4px); box-shadow:0 22px 48px rgba(32,21,21,0.12); border-color:transparent; }
        #exterior .pe-sd-row{ background:var(--color-canvas); }
        .pe-sd-flip .pe-sd-media{ order:2; }
        .pe-sd-media{ display:block; border-radius:12px; overflow:hidden; }
        .pe-sd-media image-slot{ display:block; width:100%; height:auto; aspect-ratio:4/3; border-radius:12px; overflow:hidden; transition: transform 520ms cubic-bezier(.22,.61,.36,1); }
        .pe-sd-row:hover .pe-sd-media image-slot{ transform:scale(1.045); }
        .pe-sd-body{ display:flex; flex-direction:column; gap:16px; justify-content:center; }
        .pe-sd-points{ list-style:none; margin:4px 0 0; padding:0; display:grid; grid-template-columns:1fr 1fr; gap:11px 24px; }
        .pe-sd-points li{ display:flex; align-items:flex-start; gap:10px; font-family:var(--font-body); font-size:15px; line-height:21px; color:var(--color-ink-mid); }
        .pe-sd-check{ flex-shrink:0; width:21px; height:21px; border-radius:50%; background:rgba(255,79,0,0.12); color:var(--accent); display:flex; align-items:center; justify-content:center; margin-top:1px; transition: background 200ms ease, color 200ms ease, transform 200ms ease; transition-delay: calc(var(--pi, 0) * 40ms); }
        .pe-sd-row:hover .pe-sd-check{ background:var(--accent); color:var(--color-on-primary); transform:scale(1.12); }

        @media (max-width: 860px){
          .pe-sd-row{ grid-template-columns:1fr; gap:22px; padding:18px; }
          .pe-sd-flip .pe-sd-media{ order:0; }
          .pe-sd-points{ grid-template-columns:1fr; }
        }
        @media (prefers-reduced-motion: reduce){
          .sp-hero-frame, .sp-hero-badge, .pe-sd-row, .pe-sd-media image-slot, .pe-sd-check{ transition:none !important; }
          .sp-hero-media:hover .sp-hero-frame, .sp-hero-media:hover .sp-hero-badge, .pe-sd-row:hover, .pe-sd-row:hover .pe-sd-media image-slot, .pe-sd-row:hover .pe-sd-check{ transform:none !important; }
        }
      `}</style>
    </React.Fragment>);

}

window.ServicesPage = ServicesPage;