// EstimatePitch.jsx — sales-pitch sections for the Free Estimate page:
// EstimateIntro (hero pitch + trust chips + stats), EstimateReasons (about/why us),
// EstimateSteps (what happens after you submit).
const EpIcon = window.RIcon;
const EP_PE = window.PE;

function EpCountStat({ num }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const m = String(num).match(/^([\d.]+)(.*)$/);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!m || reduce) { el.textContent = num; return; }
    const target = parseFloat(m[1]);
    const suffix = m[2] || "";
    el.textContent = "0" + suffix;
    let done = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done) {
          done = true;
          const dur = 1200, start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (t < 1) requestAnimationFrame(tick);
            else el.textContent = num;
          };
          requestAnimationFrame(tick);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [num]);
  return <span ref={ref} className="ep-stat-num">{num}</span>;
}

/* ----------------------------- intro / pitch ----------------------------- */
const EP_CHIPS = [
{ icon: "gem", text: "100% free, no obligation" },
{ icon: "clock", text: "Reply within 2 business days" },
{ icon: "shield-check", text: "Licensed, insured & warrantied" },
{ icon: "users", text: "10+ years, locally trusted" }];


const EP_STATS = [
{ num: "10+", label: "Years of experience" },
{ num: "100+", label: "Projects completed" },
{ num: "100%", label: "Satisfaction focus" }];


function EstimateIntro() {
  return (
    <section className="pe-section" style={{ background: "var(--color-canvas)", paddingBottom: "var(--space-3xl)" }}>
      <div className="pe-container">
        <div className="ep-hero">
          {/* LEFT — intro + chips + CTA */}
          <div className="reveal ep-hero-left">
            <span className="t-eyebrow" style={{ color: "var(--accent)" }}>Why P&amp;E Remodeling</span>
            <h1 style={{ margin: "14px 0 0", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(32px,4vw,50px)", lineHeight: 1.05, letterSpacing: "-0.7px", color: "var(--color-ink)" }}>
              Built on craftsmanship, honesty, and zero pressure
            </h1>
            <p style={{ margin: "18px 0 0", maxWidth: 460, fontFamily: "var(--font-body)", fontSize: "clamp(16px,1.3vw,19px)", lineHeight: 1.5, color: "var(--color-body)" }}>We’re a remodeling team that treats every home like our own. Requesting an estimate is the no-risk first step — here’s why it’s worth two minutes.

            </p>

            <div className="ep-chips">
              {EP_CHIPS.map((c) =>
              <span key={c.text} className="ep-chip">
                  <EpIcon name={c.icon} size={16} stroke={1.9} style={{ color: "var(--accent)" }} />
                  {c.text}
                </span>
              )}
            </div>

            <a href="#contact" className="ep-hero-cta">
              Get your free estimate
              <EpIcon name="arrow-right" size={18} stroke={2} />
            </a>
          </div>

          {/* RIGHT — reasons list */}
          <div className="reveal ep-why-list">
            {EP_REASONS.map((r) =>
            <div key={r.title} className="ep-why-row">
                <div className="ep-why-icon">
                  <EpIcon name={r.icon} size={24} stroke={1.8} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <h3 style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 18, letterSpacing: "-0.3px", color: "var(--color-ink)" }}>{r.title}</h3>
                  <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 15, lineHeight: "23px", color: "var(--color-body)" }} dangerouslySetInnerHTML={{ __html: r.body }}></p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* credibility stats */}
        <div className="reveal ep-stats">
          <div className="ep-stats-inner">
          {EP_STATS.map((s, i) =>
          <div key={s.label} className={"ep-stat" + (i > 0 ? " ep-stat-div" : "")}>
              <EpCountStat num={s.num} />
              <span className="ep-stat-label">{s.label}</span>
            </div>
          )}
          </div>
        </div>
      </div>

      <style>{`
        .ep-hero{ display:grid; grid-template-columns:1fr 1.05fr; gap:var(--space-3xl); align-items:center; }
        .ep-hero-left{ display:flex; flex-direction:column; align-items:flex-start; }
        .ep-chips{ display:flex; flex-wrap:wrap; gap:10px; margin-top:26px; }
        .ep-chip{
          display:inline-flex; align-items:center; gap:8px;
          padding:8px 14px; border-radius:999px;
          background:var(--color-canvas-soft); border:1px solid var(--color-border-soft);
          font-family:var(--font-body); font-size:13.5px; font-weight:600; color:var(--color-ink);
        }
        .ep-hero-cta{
          display:inline-flex; align-items:center; gap:10px; margin-top:30px;
          padding:15px 28px; border-radius:var(--radius-md);
          background:var(--accent); color:var(--color-on-primary); text-decoration:none;
          font-family:var(--font-body); font-weight:600; font-size:16px;
          box-shadow:0 10px 24px rgba(255,79,0,0.26);
          transition: background 140ms ease, transform 140ms ease;
        }
        .ep-hero-cta:hover{ background:var(--accent-hover); }
        .ep-hero-cta:active{ transform:scale(0.98); }

        .ep-why-list{
          display:flex; flex-direction:column;
          background:var(--color-canvas-soft); border:1px solid var(--color-border-soft);
          border-radius:var(--radius-md); padding:8px 28px;
        }
        .ep-why-row{ display:flex; gap:18px; align-items:flex-start; padding:24px 0; border-bottom:1px solid var(--color-border-soft); }
        .ep-why-row:last-child{ border-bottom:none; }
        .ep-why-icon{
          flex-shrink:0; width:48px; height:48px; border-radius:12px;
          display:flex; align-items:center; justify-content:center;
          background:rgba(255,79,0,0.10); color:var(--accent);
        }

        .ep-stats{
          margin-top:var(--space-3xl);
          background:var(--color-ink);
          width:100vw; margin-left:calc(50% - 50vw); margin-right:calc(50% - 50vw);
          padding:48px 24px;
        }
        .ep-stats-inner{ display:grid; grid-template-columns:repeat(3,1fr); max-width:var(--container-max); margin:0 auto; }
        .ep-stat{ display:flex; flex-direction:column; align-items:center; text-align:center; gap:8px; }
        .ep-stat-div{ border-left:1px solid rgba(255,255,255,0.12); }
        .ep-stat-num{ font-family:var(--font-display); font-weight:500; font-size:clamp(34px,4vw,48px); line-height:1; color:var(--accent); letter-spacing:-0.5px; }
        .ep-stat-label{ font-family:var(--font-body); font-size:15px; color:var(--color-canvas-soft); }

        @media (prefers-reduced-motion: no-preference){
          @keyframes epRise{ from{ opacity:0; transform:translateY(14px); } to{ opacity:1; transform:none; } }
          .ep-hero-left.in .ep-chip{ animation:epRise .5s cubic-bezier(.22,.61,.36,1) backwards; }
          .ep-hero-left.in .ep-chip:nth-child(1){ animation-delay:.18s; }
          .ep-hero-left.in .ep-chip:nth-child(2){ animation-delay:.26s; }
          .ep-hero-left.in .ep-chip:nth-child(3){ animation-delay:.34s; }
          .ep-hero-left.in .ep-chip:nth-child(4){ animation-delay:.42s; }
          .ep-why-list.in .ep-why-row{ animation:epRise .55s cubic-bezier(.22,.61,.36,1) backwards; }
          .ep-why-list.in .ep-why-row:nth-child(1){ animation-delay:.08s; }
          .ep-why-list.in .ep-why-row:nth-child(2){ animation-delay:.18s; }
          .ep-why-list.in .ep-why-row:nth-child(3){ animation-delay:.28s; }
          .ep-why-list.in .ep-why-row:nth-child(4){ animation-delay:.38s; }
        }

        @media (max-width:900px){
          .ep-hero{ grid-template-columns:1fr; gap:var(--space-2xl); }
          .ep-hero-left{ align-items:center; text-align:center; }
          .ep-hero-left p{ margin-left:auto; margin-right:auto; }
          .ep-chips{ justify-content:center; }
        }
        @media (max-width:680px){ .ep-stats{ padding:30px 16px; } }
      `}</style>
    </section>);

}

/* --------------------------- reasons / why us ---------------------------- */
const EP_REASONS = [
{ icon: "gem", title: "Completely free, zero pressure", body: "Your estimate is 100% free with no commitment. We&rsquo;ll give you straight answers about your project &mdash; whether or not you decide to move forward." },
{ icon: "ruler", title: "Clear, honest pricing", body: "Your written estimate is straightforward and easy to understand. The number we quote is the number you pay &mdash; no surprises halfway through." },
{ icon: "award", title: "10+ years, locally trusted", body: "We&rsquo;re a local team that has remodeled hundreds of homes across New Jersey &amp; New York, with the referrals to prove it." },
{ icon: "sparkle", title: "Design guidance included", body: "Not sure where to start? We&rsquo;ll help you shape ideas, choose materials, and plan a remodel that fits both your vision and your budget." }];


function EstimateReasons() {
  return (
    <section id="why-estimate" className="pe-section" style={{ background: "var(--color-canvas)" }}>
      <div className="pe-container">
        <div className="reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, maxWidth: 700, margin: "0 auto 52px" }}>
          <span className="t-eyebrow" style={{ color: "var(--accent)" }}>Why P&amp;E Remodeling</span>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.08, letterSpacing: "-0.6px", color: "var(--color-ink)" }}>
            Built on craftsmanship, honesty, and zero pressure
          </h2>
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 18, lineHeight: "27px", color: "var(--color-body)" }}>
            We&rsquo;re a local remodeling team that treats every home like our own. Requesting an estimate is the no-risk way to see exactly what your project takes &mdash; here&rsquo;s why it&rsquo;s worth two minutes.
          </p>
        </div>

        <div className="ep-reasons">
          {EP_REASONS.map((r) =>
          <div key={r.title} className="reveal ep-reason">
              <div className="ep-reason-icon">
                <EpIcon name={r.icon} size={26} stroke={1.8} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <h3 style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 19, letterSpacing: "-0.3px", color: "var(--color-ink)" }}>{r.title}</h3>
                <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: "24px", color: "var(--color-body)" }} dangerouslySetInnerHTML={{ __html: r.body }}></p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .ep-reasons{ display:grid; grid-template-columns:repeat(2,1fr); gap:var(--space-lg); max-width:980px; margin:0 auto; }
        .ep-reason{
          display:flex; gap:20px; align-items:flex-start;
          background:var(--color-canvas-soft); border:1px solid var(--color-border-soft);
          border-radius:var(--radius-md); padding:28px 26px;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }
        .ep-reason:hover{ transform:translateY(-4px); box-shadow:0 18px 40px rgba(32,21,21,0.10); border-color:transparent; }
        .ep-reason-icon{
          flex-shrink:0; width:54px; height:54px; border-radius:14px;
          display:flex; align-items:center; justify-content:center;
          background:rgba(255,79,0,0.10); color:var(--accent);
          transition: background 180ms ease, color 180ms ease;
        }
        .ep-reason:hover .ep-reason-icon{ background:var(--accent); color:var(--color-on-primary); }
        @media (max-width:760px){ .ep-reasons{ grid-template-columns:1fr; } }
      `}</style>
    </section>);

}

/* ----------------------------- what happens ------------------------------ */
const EP_STEPS = [
{ n: "01", icon: "clipboard-check", title: "Submit your details", body: "Fill out the quick form above &mdash; it takes about two minutes. Tell us as much or as little as you like." },
{ n: "02", icon: "message-circle", title: "We reach out", body: "A real person from our team calls or texts within one business day to learn more and schedule a visit." },
{ n: "03", icon: "ruler", title: "Free on-site estimate", body: "We assess your space in person and hand you a clear, written quote &mdash; with absolutely no obligation." }];


function EstimateSteps() {
  return (
    <section className="pe-section" style={{ background: "var(--color-canvas-soft)" }}>
      <div className="pe-container">
        <div className="reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, maxWidth: 640, margin: "0 auto 56px" }}>
          <span className="t-eyebrow" style={{ color: "var(--accent)" }}>What happens next</span>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(28px,3.2vw,38px)", lineHeight: 1.1, letterSpacing: "-0.5px", color: "var(--color-ink)" }}>
            From form to free estimate in three easy steps
          </h2>
        </div>

        <div className="reveal ep-steps">
          <div className="ep-steps-line" aria-hidden></div>
          {EP_STEPS.map((s) =>
          <div key={s.n} className="ep-step">
              <div className="ep-step-node">
                <EpIcon name={s.icon} size={28} stroke={1.7} />
                <span className="ep-step-num">{s.n}</span>
              </div>
              <h3 style={{ margin: "22px 0 0", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, letterSpacing: "-0.3px", color: "var(--color-ink)" }}>{s.title}</h3>
              <p style={{ margin: "10px 0 0", maxWidth: 300, fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: "24px", color: "var(--color-body)" }} dangerouslySetInnerHTML={{ __html: s.body }}></p>
            </div>
          )}
        </div>

        <div className="reveal" style={{ display: "flex", justifyContent: "center", marginTop: "var(--space-3xl)" }}>
          <a href="#contact" className="ep-cta" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 28px", borderRadius: "var(--radius-sm)", background: "var(--accent)", color: "var(--color-on-primary)", textDecoration: "none", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16, boxShadow: "0 10px 24px rgba(255,79,0,0.28)" }}>
            Get my free estimate
            <EpIcon name="arrow-right" size={18} stroke={2} />
          </a>
        </div>
      </div>

      <style>{`
        .ep-steps{ position:relative; display:grid; grid-template-columns:repeat(3,1fr); gap:var(--space-xl); max-width:920px; margin:0 auto; }
        .ep-steps-line{ position:absolute; top:36px; left:16%; right:16%; height:2px; background:repeating-linear-gradient(90deg, var(--color-border-soft) 0 10px, transparent 10px 18px); z-index:0; }
        .ep-step{ position:relative; z-index:1; display:flex; flex-direction:column; align-items:center; text-align:center; }
        .ep-step-node{ position:relative; width:72px; height:72px; border-radius:50%; background:var(--color-canvas); border:2px solid var(--color-border-soft); display:flex; align-items:center; justify-content:center; color:var(--accent); transition:border-color 180ms ease, background 180ms ease, color 180ms ease; }
        .ep-step:hover .ep-step-node{ background:var(--accent); border-color:var(--accent); color:var(--color-on-primary); }
        .ep-step-num{ position:absolute; top:-8px; right:-8px; width:28px; height:28px; border-radius:50%; background:var(--color-ink); color:var(--color-on-primary); font-family:var(--font-display); font-weight:600; font-size:12px; display:flex; align-items:center; justify-content:center; }

        .ep-cta{ transition:transform 200ms cubic-bezier(.2,.7,.3,1), box-shadow 200ms ease; }
        .ep-cta svg{ transition:transform 200ms cubic-bezier(.2,.7,.3,1); }
        .ep-cta:hover{ transform:translateY(-2px); box-shadow:0 16px 32px rgba(255,79,0,0.36); }
        .ep-cta:hover svg{ transform:translateX(4px); }
        .ep-cta:active{ transform:translateY(0); box-shadow:0 8px 18px rgba(255,79,0,0.28); }

        @media (prefers-reduced-motion: no-preference){
          @keyframes epStepRise{ from{ opacity:0; transform:translateY(20px); } to{ opacity:1; transform:none; } }
          @keyframes epNode{ from{ transform:scale(.6); opacity:0; } to{ transform:scale(1); opacity:1; } }
          .ep-step{ opacity:0; }
          .ep-steps.in .ep-step{ opacity:1; animation:epStepRise .6s cubic-bezier(.22,.61,.36,1) backwards; }
          .ep-steps.in .ep-step:nth-child(2){ animation-delay:.14s; }
          .ep-steps.in .ep-step:nth-child(3){ animation-delay:.28s; }
          .ep-steps.in .ep-step:nth-child(4){ animation-delay:.42s; }
          .ep-steps.in .ep-step-node{ animation:epNode .5s cubic-bezier(.34,1.4,.5,1) backwards; }
          .ep-steps.in .ep-step:nth-child(2) .ep-step-node{ animation-delay:.24s; }
          .ep-steps.in .ep-step:nth-child(3) .ep-step-node{ animation-delay:.38s; }
          .ep-steps.in .ep-step:nth-child(4) .ep-step-node{ animation-delay:.52s; }
          .ep-steps-line{ transform-origin:left center; transform:scaleX(0); transition:transform 1s cubic-bezier(.22,.61,.36,1) .15s; }
          .ep-steps.in .ep-steps-line{ transform:scaleX(1); }
        }
        @media (max-width:760px){
          .ep-steps{ grid-template-columns:1fr; gap:30px; max-width:420px; }
          .ep-steps-line{ left:35px; right:auto; top:36px; bottom:36px; width:2px; height:auto; background:repeating-linear-gradient(180deg, var(--color-border-soft) 0 10px, transparent 10px 18px); transform:none !important; }
          .ep-step{ flex-direction:row; align-items:flex-start; text-align:left; gap:20px; }
          .ep-step h3{ margin-top:6px !important; }
          .ep-step p{ max-width:none !important; }
          .ep-step-node{ flex-shrink:0; }
        }
      `}</style>
    </section>);

}

Object.assign(window, { EstimateIntro, EstimateReasons, EstimateSteps });