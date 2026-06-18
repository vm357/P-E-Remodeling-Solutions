// Portfolio.jsx — featured projects showcase with large image slots + category filter.
const { Button: PfBtn } = window.OrangeZapierStyleDesignSystem_64b6be;
const PfIcon = window.RIcon;

const PROJECTS = [
  { id: "kitchen", cat: "Interior", tag: "Kitchen", title: "Luxury kitchen remodel", loc: "Montclair, NJ", body: "An open-plan remodel with espresso shaker cabinetry, a veined-stone center island, subway tile backsplash, and wide oak floors.", big: true },
  { id: "bath", cat: "Interior", tag: "Bathroom", title: "Modern bathroom renovation", loc: "Hoboken, NJ", body: "A freestanding soaking tub and brass fixtures paired with a glass walk-in shower set against a green herringbone tile wall." },
  { id: "basement", cat: "Interior", tag: "Basement", title: "Finished basement retreat", loc: "Westchester, NY", body: "A bright lower-level living space with built-in shelving, an open staircase with iron balusters, and durable tile floors." },
  { id: "patio", cat: "Exterior", tag: "Outdoor", title: "Outdoor patio transformation", loc: "Summit, NJ", body: "A paver patio with a round stacked-stone fire pit and a full outdoor kitchen with a built-in stainless grill, framed by mature trees.", big: true },
];

const FILTERS = ["All work", "Interior", "Exterior"];

function ProjectCard({ p }) {
  return (
    <div className={"pe-pf-card" + (p.big ? " pe-pf-big" : "")}>
      <div className="pe-pf-media">
        <image-slot
          id={"pf-" + p.id}
          src={window.PE_SLOT_SRC("pf-" + p.id)}
          shape="rounded"
          radius="16"
          placeholder={"Drop a " + p.tag.toLowerCase() + " project photo"}
          style={{ display: "block", width: "100%", height: "100%" }}
        ></image-slot>
        <span className="pe-pf-badge">{p.tag}</span>
      </div>
      <div className="pe-pf-body">
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--color-body-mid)", fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: 500 }}>
          <PfIcon name="map-pin" size={15} stroke={1.9} style={{ color: "var(--accent)" }} /> {p.loc}
        </div>
        <h3 style={{ margin: "8px 0 0", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 23, letterSpacing: "-0.4px", color: "var(--color-ink)" }}>{p.title}</h3>
        <p style={{ margin: "8px 0 0", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: "23px", color: "var(--color-body)" }}>{p.body}</p>
      </div>
    </div>
  );
}

function Portfolio() {
  const [filter, setFilter] = React.useState("All work");
  const shown = PROJECTS.filter((p) => filter === "All work" || p.cat === filter);

  return (
    <section id="portfolio" className="pe-section" style={{ background: "var(--color-canvas)" }}>
      <div className="pe-container">
        <div className="reveal" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 40 }}>
          <div style={{ maxWidth: 620 }}>
            <span className="t-eyebrow" style={{ color: "var(--accent)" }}>Featured projects</span>
            <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(30px,3.6vw,42px)", lineHeight: 1.08, letterSpacing: "-0.6px", color: "var(--color-ink)" }}>
              Craftsmanship you can see in every detail
            </h2>
          </div>
          <div className="pe-pf-filters">
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={"pe-pf-filter" + (filter === f ? " is-active" : "")}>{f}</button>
            ))}
          </div>
        </div>

        <div className="reveal pe-pf-grid">
          {shown.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>

        <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: "var(--space-md)", flexWrap: "wrap", marginTop: 44 }}>
          <PfBtn variant="secondary" as="a" href="Free Estimate.html" style={{ textDecoration: "none", display: "inline-flex", gap: 9 }}>
            Start your project <PfIcon name="arrow-right" size={18} stroke={2} />
          </PfBtn>
          <a href="Projects.html" className="pe-pf-viewbtn">
            View our projects <PfIcon name="arrow-right" size={18} stroke={2} />
          </a>
        </div>
      </div>

      <style>{`
        .pe-pf-filters{ display:inline-flex; gap:4px; background:var(--color-canvas); border:1px solid var(--color-border-soft); border-radius:var(--radius-pill); padding:4px; }
        .pe-pf-viewbtn{ display:inline-flex; align-items:center; gap:9px; text-decoration:none; font-family:var(--font-body); font-weight:600; font-size:15.5px; color:var(--color-ink); background:transparent; border:1px solid var(--color-border-soft); border-radius:var(--radius-md); padding:13px 24px; transition:background 160ms ease, border-color 160ms ease, gap 160ms ease; }
        .pe-pf-viewbtn:hover{ background:var(--color-canvas-soft); border-color:var(--color-ink); gap:12px; }
        .pe-pf-filter{ border:none; cursor:pointer; font-family:var(--font-body); font-weight:600; font-size:14px; padding:9px 18px; border-radius:var(--radius-pill); background:transparent; color:var(--color-body); transition:background 140ms ease, color 140ms ease; }
        .pe-pf-filter.is-active{ background:var(--color-ink); color:var(--color-on-primary); }
        .pe-pf-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:var(--space-xl); }
        .pe-pf-card{ display:flex; flex-direction:column; background:var(--color-canvas); border:1px solid var(--color-border-soft); border-radius:var(--radius-md); overflow:hidden; transition:box-shadow 200ms ease, transform 200ms ease; }
        .pe-pf-card:hover{ transform:translateY(-4px); box-shadow:0 22px 50px rgba(32,21,21,0.12); }
        .pe-pf-media{ position:relative; height:340px; }
        .pe-pf-big .pe-pf-media{ height:420px; }
        .pe-pf-badge{ position:absolute; top:14px; left:14px; background:rgba(32,21,21,0.82); color:var(--color-on-primary); font-family:var(--font-body); font-weight:600; font-size:12.5px; letter-spacing:0.3px; padding:6px 13px; border-radius:var(--radius-pill); backdrop-filter:blur(4px); }
        .pe-pf-body{ padding:22px 24px 26px; }
        @media (max-width: 860px){ .pe-pf-grid{ grid-template-columns:1fr; } .pe-pf-media,.pe-pf-big .pe-pf-media{ height:300px; } }
      `}</style>
    </section>
  );
}

window.Portfolio = Portfolio;
