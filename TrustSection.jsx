// TrustSection.jsx — credibility band: dark stat panel + 5 trust badges.
const TrIcon = window.RIcon;

const STATS = [
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 100, suffix: "+", label: "Projects completed" },
  { value: 100, suffix: "%", label: "Satisfaction focus" },
];

const BADGES = [
  { icon: "shield-check", title: "Licensed & insured", body: "Fully licensed, bonded, and insured for your complete peace of mind. NJ Lic. #13VH11635100." },
  { icon: "users", title: "Experienced team", body: "Skilled craftsmen and project managers who do this every single day." },
  { icon: "gem", title: "High-quality materials", body: "We build with trusted, durable materials chosen to last for years." },
  { icon: "ruler", title: "Attention to detail", body: "The little things done right are what make a remodel feel premium." },
  { icon: "heart", title: "Satisfaction focus", body: "We're not finished until you genuinely love your new space." },
];

function useCountUp(target, run, duration = 1400) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!run) return;
    let raf, start;
    const tick = (t) => {
      if (start == null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return val;
}

function Stat({ stat, run }) {
  const n = useCountUp(stat.value, run);
  return (
    <React.Fragment>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(34px,4vw,48px)", lineHeight: 1, color: "var(--accent)" }}>{n}{stat.suffix}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--color-canvas-soft)", marginTop: 8 }}>{stat.label}</span>
    </React.Fragment>
  );
}

function TrustSection() {
  const panelRef = React.useRef(null);
  const [run, setRun] = React.useState(false);
  React.useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setRun(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setRun(true); io.disconnect(); } });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section id="trust" className="pe-section" style={{ background: "var(--color-canvas-soft)", paddingTop: "var(--space-2xl)" }}>
      <div className="pe-container">
        <div className="reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, maxWidth: 680, margin: "0 auto 44px" }}>
          <span className="t-eyebrow" style={{ color: "var(--accent)" }}>Why you can trust us</span>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(30px,3.6vw,42px)", lineHeight: 1.08, letterSpacing: "-0.6px", color: "var(--color-ink)" }}>
            Credibility built into everything we do
          </h2>
        </div>

        {/* dark stat panel */}
        <div ref={panelRef} className="reveal pe-stat-panel">
          {STATS.map((s, i) => (
            <div key={s.label} className={"pe-stat" + (i > 0 ? " pe-stat-div" : "")}>
              <Stat stat={s} run={run} />
            </div>
          ))}
        </div>

        {/* badges */}
        <div className="reveal pe-badge-grid">
          {BADGES.map((b) => (
            <div key={b.title} className="pe-badge-card">
              <div className="pe-badge-icon"><TrIcon name={b.icon} size={24} stroke={1.7} /></div>
              <h3 style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16.5, letterSpacing: "-0.2px", color: "var(--color-ink)" }}>{b.title}</h3>
              <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 14, lineHeight: "21px", color: "var(--color-body)" }}>{b.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pe-stat-panel{ display:grid; grid-template-columns:repeat(3,1fr); background:var(--color-ink); border-radius:var(--radius-md); padding:40px 24px; margin-bottom:44px; }
        .pe-stat{ display:flex; flex-direction:column; align-items:center; text-align:center; padding:6px 12px; }
        .pe-stat-div{ border-left:1px solid rgba(255,255,255,0.12); }
        .pe-badge-grid{ display:grid; grid-template-columns:repeat(5,1fr); gap:var(--space-lg); }
        .pe-badge-card{ display:flex; flex-direction:column; gap:12px; padding:24px 20px; background:var(--color-canvas-soft); border-radius:var(--radius-md); border:1px solid transparent; transition:transform 180ms ease, box-shadow 180ms ease; }
        .pe-badge-card:hover{ transform:translateY(-4px); box-shadow:0 16px 36px rgba(32,21,21,0.10); }
        .pe-badge-icon{ width:48px; height:48px; border-radius:12px; display:flex; align-items:center; justify-content:center; background:var(--color-canvas); border:1px solid var(--color-border-soft); color:var(--accent); }
        @media (max-width: 980px){
          .pe-badge-grid{ grid-template-columns:repeat(2,1fr); }
        }
        @media (max-width: 720px){
          .pe-stat-panel{ grid-template-columns:repeat(2,1fr); gap:28px 0; }
          .pe-stat-div{ border-left:none; }
          .pe-stat:nth-child(even){ border-left:1px solid rgba(255,255,255,0.12); }
        }
        @media (max-width: 520px){ .pe-badge-grid{ grid-template-columns:1fr; } }
      `}</style>
    </section>
  );
}

window.TrustSection = TrustSection;
