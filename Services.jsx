// Services.jsx — interior + exterior service cards with icons, hover, "Learn more".
const SIcon = window.RIcon;

const INTERIOR = [
  { icon: "kitchen", title: "Kitchen remodeling", body: "Custom layouts, cabinetry, and finishes that turn the kitchen into the heart of your home." },
  { icon: "bathroom", title: "Bathroom remodeling", body: "Spa-inspired bathrooms with quality tile, fixtures, and lighting built to last." },
  { icon: "basement", title: "Basement finishing", body: "Reclaim square footage with a finished basement designed for how your family lives." },
  { icon: "flooring", title: "Flooring installation", body: "Hardwood, tile, and luxury vinyl installed with precision across every room." },
  { icon: "painting", title: "Interior painting", body: "Clean lines and flawless coverage that refresh your space inside and out." },
  { icon: "lighting", title: "Lighting upgrades", body: "Modern, layered lighting that makes every room feel brighter and bigger." },
];

const EXTERIOR = [
  { icon: "patio", title: "Patios & outdoor living", body: "Beautiful patios and outdoor spaces designed for relaxing and entertaining." },
  { icon: "sunroom", title: "Sunrooms", body: "Light-filled sunrooms that extend your living space into every season." },
  { icon: "fencing", title: "Fencing", body: "Privacy, security, and curb appeal with professionally installed fencing." },
  { icon: "outdoorkitchen", title: "Outdoor kitchens", body: "Full outdoor kitchens with grills, counters, and storage for year-round cookouts." },
  { icon: "fireplace", title: "Exterior fireplaces", body: "Custom outdoor fireplaces and fire features that anchor your backyard." },
];

function ServiceCard({ icon, title, body }) {
  return (
    <a href="Free Estimate.html" className="pe-svc-card">
      <div className="pe-svc-icon"><SIcon name={icon} size={26} stroke={1.7} /></div>
      <h3 style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 18, letterSpacing: "-0.3px", color: "var(--color-ink)" }}>{title}</h3>
      <p style={{ margin: 0, flex: 1, fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: "22px", color: "var(--color-body)" }}>{body}</p>
      <span className="pe-svc-link">
        Learn more <SIcon name="arrow-right" size={16} stroke={2.1} />
      </span>
    </a>
  );
}

function Services() {
  return (
    <section id="services" className="pe-section" style={{ background: "var(--color-canvas-soft)" }}>
      <div className="pe-container">
        <div className="reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, maxWidth: 700, margin: "0 auto 12px" }}>
          <span className="t-eyebrow" style={{ color: "var(--accent)" }}>What we do</span>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(30px,3.6vw,42px)", lineHeight: 1.08, letterSpacing: "-0.6px", color: "var(--color-ink)" }}>
            Remodeling services for every part of your home
          </h2>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 18, lineHeight: "27px", color: "var(--color-body)" }}>
            Whether you&rsquo;re reimagining a single room or transforming your entire property, we handle it end to end.
          </p>
        </div>

        {/* Interior */}
        <div className="reveal" style={{ marginTop: 44 }}>
          <div className="pe-svc-grouphead">
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-ink)" }}>Interior remodeling</span>
            <span className="pe-svc-rule"></span>
          </div>
          <div className="pe-svc-grid">
            {INTERIOR.slice(0, 3).map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
          <div className="pe-svc-more">
            <a href="Services.html#interior" className="pe-svc-morebtn">More interior services <SIcon name="arrow-right" size={17} stroke={2.1} /></a>
          </div>
        </div>

        {/* Exterior */}
        <div className="reveal" style={{ marginTop: 48 }}>
          <div className="pe-svc-grouphead">
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, letterSpacing: "1px", textTransform: "uppercase", color: "var(--color-ink)" }}>Exterior remodeling</span>
            <span className="pe-svc-rule"></span>
          </div>
          <div className="pe-svc-grid">
            {EXTERIOR.slice(0, 3).map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
          <div className="pe-svc-more">
            <a href="Services.html#exterior" className="pe-svc-morebtn">More exterior services <SIcon name="arrow-right" size={17} stroke={2.1} /></a>
          </div>
        </div>
      </div>

      <style>{`
        .pe-svc-grouphead{ display:flex; align-items:center; gap:18px; margin-bottom:22px; }
        .pe-svc-rule{ flex:1; height:1px; background:var(--color-border-soft); }
        .pe-svc-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:var(--space-lg); }
        .pe-svc-card{
          display:flex; flex-direction:column; gap:13px; text-decoration:none;
          background:var(--color-canvas-soft); border:1px solid transparent;
          border-radius:var(--radius-md); padding:24px;
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }
        .pe-svc-card:hover{ transform:translateY(-5px); background:var(--color-canvas); border-color:var(--color-border-soft); box-shadow:0 18px 40px rgba(32,21,21,0.10); }
        .pe-svc-icon{
          width:50px; height:50px; border-radius:13px; display:flex; align-items:center; justify-content:center;
          background:var(--color-canvas); border:1px solid var(--color-border-soft); color:var(--accent);
          transition: background 180ms ease, color 180ms ease, border-color 180ms ease;
        }
        .pe-svc-card:hover .pe-svc-icon{ background:var(--accent); color:var(--color-on-primary); border-color:var(--accent); }
        .pe-svc-link{
          display:inline-flex; align-items:center; gap:7px; margin-top:2px;
          font-family:var(--font-body); font-weight:600; font-size:14.5px; color:var(--color-ink-mid);
          transition: color 160ms ease, gap 160ms ease;
        }
        .pe-svc-card:hover .pe-svc-link{ color:var(--accent); gap:11px; }
        .pe-svc-more{ display:flex; justify-content:center; margin-top:30px; }
        .pe-svc-morebtn{
          display:inline-flex; align-items:center; gap:9px; text-decoration:none;
          font-family:var(--font-body); font-weight:600; font-size:15.5px; color:var(--color-ink);
          background:var(--color-canvas); border:1px solid var(--color-border-soft);
          border-radius:var(--radius-md); padding:13px 24px;
          transition: background 160ms ease, color 160ms ease, border-color 160ms ease, gap 160ms ease;
        }
        .pe-svc-morebtn:hover{ background:var(--accent); border-color:var(--accent); color:var(--color-on-primary); gap:13px; }
        @media (max-width: 980px){ .pe-svc-grid{ grid-template-columns:repeat(2,1fr); } }
        @media (max-width: 560px){ .pe-svc-grid{ grid-template-columns:1fr; } }
      `}</style>
    </section>
  );
}

window.Services = Services;
