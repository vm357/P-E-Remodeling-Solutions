// AboutPage.jsx — dedicated About page: story/mission + values + process timeline.
const AIcon = window.RIcon;

const ABOUT_VALUES = [
  { icon: "award", title: "Experienced craftsmanship", body: "Quality workmanship backed by 15+ years of remodeling experience and a crew that treats your home like their own." },
  { icon: "message-circle", title: "Transparent communication", body: "Clear timelines, proactive updates, and honest expectations at every stage — no surprises, ever." },
  { icon: "pencil", title: "Custom solutions", body: "Every remodel is designed around your goals, your lifestyle, and the way you actually live in your space." },
  { icon: "clipboard-check", title: "Reliable project management", body: "From first sketch through final walkthrough, every detail is managed professionally and on schedule." },
];

const ABOUT_PROC = [
  { n: "01", icon: "message-circle", title: "Consultation", body: "We visit your home, listen to your goals, and give you a clear, honest free estimate — no pressure." },
  { n: "02", icon: "pencil", title: "Design & planning", body: "We finalize the design, materials, and timeline so you know exactly what to expect before we start." },
  { n: "03", icon: "kitchen", title: "Construction", body: "Our crew gets to work with tidy job sites, regular updates, and craftsmanship at every step." },
  { n: "04", icon: "shield-check", title: "Final walkthrough", body: "We walk the finished space together and don't call it done until you're completely thrilled." },
];

const ABOUT_STATS = [
  { num: "10+", label: "Years of experience" },
  { num: "100+", label: "Projects completed" },
  { num: "100%", label: "Satisfaction focus" },
];

function CountStat({ num }) {
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
  return <span ref={ref} className="ab-stat-num">{num}</span>;
}

function AboutValueCard({ icon, title, body }) {
  return (
    <div className="pe-why-card">
      <div className="pe-why-icon"><AIcon name={icon} size={26} stroke={1.8} /></div>
      <h3 style={{ margin: 0, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 19, letterSpacing: "-0.3px", color: "var(--color-ink)" }}>{title}</h3>
      <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 15, lineHeight: "23px", color: "var(--color-body)" }}>{body}</p>
    </div>
  );
}

function AboutPage() {
  return (
    <React.Fragment>
      {/* STORY HERO — editable copy */}
      <section className="pe-section" style={{ background: "var(--color-canvas)", paddingBottom: "var(--space-2xl)" }}>
        <div className="pe-container">
          <div className="ab-story">
            <div className="reveal ab-story-text">
              <span className="t-eyebrow" style={{ color: "var(--accent)" }}>Our story</span>
              <h1 style={{ margin: "14px 0 0", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(34px,4.4vw,54px)", lineHeight: 1.05, letterSpacing: "-0.8px", color: "var(--color-ink)" }}>
                Remodeling done the honest way
              </h1>
              <p style={{ margin: "20px 0 0", fontFamily: "var(--font-body)", fontSize: "clamp(16px,1.3vw,19px)", lineHeight: 1.6, color: "var(--color-body)" }}>
                P&amp;E Remodeling Solutions was built on a simple belief: homeowners deserve a remodeling team that does great work and tells the truth. For more than 15 years we&rsquo;ve helped people across New Jersey and New York turn dated, cramped, or unfinished spaces into rooms they love coming home to.
              </p>
              <p style={{ margin: "16px 0 0", fontFamily: "var(--font-body)", fontSize: "clamp(16px,1.3vw,19px)", lineHeight: 1.6, color: "var(--color-body)" }}>
                From kitchens and baths to basements, patios, and full exterior makeovers, we treat every project like it&rsquo;s our own home &mdash; with clear communication, clean job sites, and craftsmanship that holds up for years.
              </p>
              <a href="Free Estimate.html" className="ab-cta">Start your project <AIcon name="arrow-right" size={18} stroke={2} /></a>
            </div>
            <div className="reveal ab-story-media">
              <image-slot id="about-story" src={window.PE_SLOT_SRC("about-story")} shape="rounded" radius="18" fit="contain" placeholder="Add a team or project photo" style={{ display: "block", width: "100%", height: "100%", minHeight: "340px", background: "var(--color-canvas)" }}></image-slot>
            </div>
          </div>

          {/* stats */}
          <div className="reveal ab-stats">
            <div className="ab-stats-inner">
            {ABOUT_STATS.map((s, i) => (
              <div key={s.label} className={"ab-stat" + (i > 0 ? " ab-stat-div" : "")}>
                <CountStat num={s.num} />
                <span className="ab-stat-label">{s.label}</span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="pe-section" style={{ background: "var(--color-canvas-soft)" }}>
        <div className="pe-container">
          <div className="reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, maxWidth: 680, margin: "0 auto 48px" }}>
            <span className="t-eyebrow" style={{ color: "var(--accent)" }}>What we stand for</span>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(28px,3.4vw,40px)", lineHeight: 1.1, letterSpacing: "-0.6px", color: "var(--color-ink)" }}>
              A remodeling partner you can actually rely on
            </h2>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 18, lineHeight: "27px", color: "var(--color-body)" }}>
              Remodeling should feel exciting, not stressful. These are the principles behind every job we take on.
            </p>
          </div>
          <div className="reveal pe-why-grid">
            {ABOUT_VALUES.map((v) => <AboutValueCard key={v.title} {...v} />)}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="pe-section" style={{ background: "var(--color-canvas)" }}>
        <div className="pe-container">
          <div className="reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, maxWidth: 680, margin: "0 auto 56px" }}>
            <span className="t-eyebrow" style={{ color: "var(--accent)" }}>How it works</span>
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(26px,3vw,36px)", lineHeight: 1.1, letterSpacing: "-0.5px", color: "var(--color-ink)" }}>
              Our simple remodeling process
            </h2>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 18, lineHeight: "27px", color: "var(--color-body)" }}>
              A clear, organized path from first conversation to finished home &mdash; so you always know what comes next.
            </p>
          </div>
          <div className="reveal pe-proc-grid">
            <div className="pe-proc-line" aria-hidden></div>
            {ABOUT_PROC.map((s) => (
              <div key={s.n} className="pe-proc-step">
                <div className="pe-proc-node">
                  <AIcon name={s.icon} size={28} stroke={1.7} />
                  <span className="pe-proc-num">{s.n}</span>
                </div>
                <h3 style={{ margin: "22px 0 0", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, letterSpacing: "-0.3px", color: "var(--color-ink)" }}>{s.title}</h3>
                <p style={{ margin: "10px 0 0", fontFamily: "var(--font-body)", fontSize: 15, lineHeight: "23px", color: "var(--color-body)" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .ab-story{ display:grid; grid-template-columns:1.05fr 1fr; gap:var(--space-3xl); align-items:center; }
        .ab-story-text{ display:flex; flex-direction:column; align-items:flex-start; }
        .ab-cta{
          display:inline-flex; align-items:center; gap:10px; margin-top:30px;
          padding:15px 28px; border-radius:var(--radius-md);
          background:var(--accent); color:var(--color-on-primary); text-decoration:none;
          font-family:var(--font-body); font-weight:600; font-size:16px;
          box-shadow:0 10px 24px rgba(255,79,0,0.26);
          transition: background 140ms ease, gap 140ms ease;
        }
        .ab-cta:hover{ background:var(--accent-hover); gap:13px; }
        .ab-story-media{ width:100%; height:100%; min-height:340px; }

        .ab-stats{
          margin-top:var(--space-3xl);
          background:var(--color-ink);
          width:100vw; margin-left:calc(50% - 50vw); margin-right:calc(50% - 50vw);
          padding:48px 24px;
        }
        .ab-stats-inner{ display:grid; grid-template-columns:repeat(3,1fr); max-width:var(--container-max); margin:0 auto; }
        .ab-stat{ display:flex; flex-direction:column; align-items:center; text-align:center; gap:8px; }
        .ab-stat-div{ border-left:1px solid rgba(255,255,255,0.12); }
        .ab-stat-num{ font-family:var(--font-display); font-weight:500; font-size:clamp(34px,4vw,48px); line-height:1; color:var(--accent); letter-spacing:-0.5px; }
        .ab-stat-label{ font-family:var(--font-body); font-size:15px; color:var(--color-canvas-soft); }

        .pe-why-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:var(--space-lg); }
        .pe-why-card{
          display:flex; flex-direction:column; gap:14px;
          background:var(--color-canvas); border:1px solid var(--color-border-soft);
          border-radius:var(--radius-md); padding:26px 22px;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }
        .pe-why-card:hover{ transform:translateY(-5px); box-shadow:0 18px 40px rgba(32,21,21,0.10); border-color:transparent; }
        .pe-why-icon{
          width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center;
          background:rgba(255,79,0,0.10); color:var(--accent);
          transition: background 180ms ease, color 180ms ease;
        }
        .pe-why-card:hover .pe-why-icon{ background:var(--accent); color:var(--color-on-primary); }

        .pe-proc-grid{ position:relative; display:grid; grid-template-columns:repeat(4,1fr); gap:var(--space-xl); }
        .pe-proc-line{ position:absolute; top:36px; left:12%; right:12%; height:2px; background:repeating-linear-gradient(90deg, var(--color-border-soft) 0 10px, transparent 10px 18px); z-index:0; }
        .pe-proc-step{ position:relative; z-index:1; display:flex; flex-direction:column; align-items:center; text-align:center; }
        .pe-proc-node{ position:relative; width:72px; height:72px; border-radius:50%; background:var(--color-canvas); border:2px solid var(--color-border-soft); display:flex; align-items:center; justify-content:center; color:var(--accent); transition:border-color 180ms ease, background 180ms ease, color 180ms ease; }
        .pe-proc-step:hover .pe-proc-node{ background:var(--accent); border-color:var(--accent); color:var(--color-on-primary); }
        .pe-proc-num{ position:absolute; top:-8px; right:-8px; width:28px; height:28px; border-radius:50%; background:var(--color-ink); color:var(--color-on-primary); font-family:var(--font-display); font-weight:600; font-size:12px; display:flex; align-items:center; justify-content:center; }

        /* subtle entrance motion */
        @media (prefers-reduced-motion: no-preference){
          @keyframes abRise{ from{ opacity:0; transform:translateY(20px); } to{ opacity:1; transform:none; } }
          @keyframes abNode{ from{ transform:scale(.6); opacity:0; } to{ transform:scale(1); opacity:1; } }
          .pe-why-grid.in .pe-why-card{ animation:abRise .62s cubic-bezier(.22,.61,.36,1) backwards; }
          .pe-why-grid.in .pe-why-card:nth-child(1){ animation-delay:.04s; }
          .pe-why-grid.in .pe-why-card:nth-child(2){ animation-delay:.12s; }
          .pe-why-grid.in .pe-why-card:nth-child(3){ animation-delay:.20s; }
          .pe-why-grid.in .pe-why-card:nth-child(4){ animation-delay:.28s; }
          .pe-proc-grid.in .pe-proc-step{ animation:abRise .62s cubic-bezier(.22,.61,.36,1) backwards; }
          .pe-proc-grid.in .pe-proc-step:nth-child(2){ animation-delay:.12s; }
          .pe-proc-grid.in .pe-proc-step:nth-child(3){ animation-delay:.24s; }
          .pe-proc-grid.in .pe-proc-step:nth-child(4){ animation-delay:.36s; }
          .pe-proc-grid.in .pe-proc-step:nth-child(5){ animation-delay:.48s; }
          .pe-proc-grid.in .pe-proc-node{ animation:abNode .5s cubic-bezier(.34,1.4,.5,1) backwards; }
          .pe-proc-grid.in .pe-proc-step:nth-child(2) .pe-proc-node{ animation-delay:.22s; }
          .pe-proc-grid.in .pe-proc-step:nth-child(3) .pe-proc-node{ animation-delay:.34s; }
          .pe-proc-grid.in .pe-proc-step:nth-child(4) .pe-proc-node{ animation-delay:.46s; }
          .pe-proc-grid.in .pe-proc-step:nth-child(5) .pe-proc-node{ animation-delay:.58s; }
          .pe-proc-line{ transform-origin:left center; transform:scaleX(0); transition:transform 1s cubic-bezier(.22,.61,.36,1) .15s; }
          .pe-proc-grid.in .pe-proc-line{ transform:scaleX(1); }
        }

        @media (max-width: 900px){
          .ab-story{ grid-template-columns:1fr; gap:var(--space-2xl); }
          .ab-story-media{ min-height:280px; order:-1; }
        }
        @media (max-width: 680px){ .ab-stats{ padding:30px 16px; } }
        @media (max-width: 980px){ .pe-why-grid{ grid-template-columns:repeat(2,1fr); } }
        @media (max-width: 560px){ .pe-why-grid{ grid-template-columns:1fr; } }
        @media (max-width: 860px){
          .pe-proc-grid{ grid-template-columns:1fr; gap:30px; max-width:420px; margin:0 auto; }
          .pe-proc-line{ left:35px; right:auto; top:36px; bottom:36px; width:2px; height:auto; background:repeating-linear-gradient(180deg, var(--color-border-soft) 0 10px, transparent 10px 18px); transform:none !important; }
          .pe-proc-step{ flex-direction:row; align-items:flex-start; text-align:left; gap:20px; }
          .pe-proc-step h3{ margin-top:6px !important; }
          .pe-proc-node{ flex-shrink:0; }
        }
      `}</style>
    </React.Fragment>
  );
}

window.AboutPage = AboutPage;
