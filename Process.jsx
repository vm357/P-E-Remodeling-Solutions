// Process.jsx — "How it works" remodeling process timeline (landing page).
const PrIcon = window.RIcon;

const PROC_STEPS = [
  { n: "01", icon: "message-circle", title: "Consultation", body: "We visit your home, listen to your goals, and give you a clear, honest free estimate — no pressure." },
  { n: "02", icon: "pencil", title: "Design & planning", body: "We finalize the design, materials, and timeline so you know exactly what to expect before we start." },
  { n: "03", icon: "kitchen", title: "Construction", body: "Our crew gets to work with tidy job sites, regular updates, and craftsmanship at every step." },
  { n: "04", icon: "shield-check", title: "Final walkthrough", body: "We walk the finished space together and don't call it done until you're completely thrilled." },
];

function Process() {
  return (
    <section id="process" className="pe-section" style={{ background: "var(--color-canvas-soft)", paddingBottom: "var(--space-2xl)" }}>
      <div className="pe-container">
        <div className="reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, maxWidth: 680, margin: "0 auto 56px" }}>
          <span className="t-eyebrow" style={{ color: "var(--accent)" }}>How it works</span>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(30px,3.6vw,42px)", lineHeight: 1.08, letterSpacing: "-0.6px", color: "var(--color-ink)" }}>
            Our simple remodeling process
          </h2>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 18, lineHeight: "27px", color: "var(--color-body)" }}>
            A clear, organized path from first conversation to finished home &mdash; so you always know what comes next.
          </p>
        </div>

        <div className="reveal pe-proc-grid">
          <div className="pe-proc-line" aria-hidden></div>
          {PROC_STEPS.map((s) => (
            <div key={s.n} className="pe-proc-step">
              <div className="pe-proc-node">
                <PrIcon name={s.icon} size={28} stroke={1.7} />
                <span className="pe-proc-num">{s.n}</span>
              </div>
              <h3 style={{ margin: "22px 0 0", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, letterSpacing: "-0.3px", color: "var(--color-ink)" }}>{s.title}</h3>
              <p style={{ margin: "10px 0 0", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: "23px", color: "var(--color-body)" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pe-proc-grid{ position:relative; display:grid; grid-template-columns:repeat(4,1fr); gap:var(--space-xl); }
        .pe-proc-line{ position:absolute; top:36px; left:12%; right:12%; height:2px; background:repeating-linear-gradient(90deg, var(--color-border-soft) 0 10px, transparent 10px 18px); z-index:0; }
        .pe-proc-step{ position:relative; z-index:1; display:flex; flex-direction:column; align-items:center; text-align:center; }
        .pe-proc-node{ position:relative; width:72px; height:72px; border-radius:50%; background:var(--color-canvas); border:2px solid var(--color-border-soft); display:flex; align-items:center; justify-content:center; color:var(--accent); transition:border-color 180ms ease, background 180ms ease, color 180ms ease; }
        .pe-proc-step:hover .pe-proc-node{ background:var(--accent); border-color:var(--accent); color:var(--color-on-primary); }
        .pe-proc-num{ position:absolute; top:-8px; right:-8px; width:28px; height:28px; border-radius:50%; background:var(--color-ink); color:var(--color-on-primary); font-family:var(--font-display); font-weight:600; font-size:12px; display:flex; align-items:center; justify-content:center; }

        @media (max-width: 860px){
          .pe-proc-grid{ grid-template-columns:1fr; gap:30px; max-width:420px; margin:0 auto; }
          .pe-proc-line{ left:35px; right:auto; top:36px; bottom:36px; width:2px; height:auto; background:repeating-linear-gradient(180deg, var(--color-border-soft) 0 10px, transparent 10px 18px); }
          .pe-proc-step{ flex-direction:row; align-items:flex-start; text-align:left; gap:20px; }
          .pe-proc-step h3{ margin-top:6px !important; }
          .pe-proc-node{ flex-shrink:0; }
        }
      `}</style>
    </section>
  );
}

window.Process = Process;
