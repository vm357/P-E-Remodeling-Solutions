// ProjectsPage.jsx — dedicated Projects gallery page: bold dark hero + animated filterable grid.
const PpIcon = window.RIcon;

// Reuses the homepage slot ids (pf-kitchen, pf-bath, pf-basement, pf-patio) so any
// photos already dropped there carry over, plus additional projects with new slots.
const PP_PROJECTS = [
  { id: "pf-kitchen", cat: "Interior", tag: "Kitchen", title: "Luxury kitchen remodel", loc: "Montclair, NJ", body: "An open-plan remodel with espresso shaker cabinetry, a veined-stone center island, subway tile backsplash, and wide oak floors.", big: true },
  { id: "pp-mudroom", cat: "Interior", tag: "Built-ins", title: "Custom mudroom & built-ins", loc: "Maplewood, NJ", body: "A hardworking entry with floor-to-ceiling custom cabinetry, a built-in bench, cubbies, and durable porcelain tile underfoot.", big: true },
  { id: "pf-patio", cat: "Exterior", tag: "Outdoor", title: "Outdoor patio transformation", loc: "Summit, NJ", body: "A paver patio with a round stacked-stone fire pit and a full outdoor kitchen with a built-in stainless grill, framed by mature trees.", big: true },
  { id: "pf-bath", cat: "Interior", tag: "Bathroom", title: "Modern bathroom renovation", loc: "Hoboken, NJ", body: "A freestanding soaking tub and brass fixtures paired with a glass walk-in shower set against a green herringbone tile wall." },
  { id: "pf-basement", cat: "Interior", tag: "Basement", title: "Finished basement retreat", loc: "Westchester, NY", body: "A bright lower-level living space with built-in shelving, an open staircase with iron balusters, and durable tile floors." },
  { id: "pp-sunroom", cat: "Exterior", tag: "Sunroom", title: "Four-season sunroom addition", loc: "Edison, NJ", body: "A light-filled sunroom with energy-efficient glass and a vaulted ceiling that blends seamlessly into the existing home." },
  { id: "pp-flooring", cat: "Interior", tag: "Flooring", title: "Whole-home hardwood install", loc: "Princeton, NJ", body: "Wide-plank engineered oak laid throughout the main level, with careful transitions and a hand-finished matte seal." },
  { id: "pp-fencing", cat: "Exterior", tag: "Fencing", title: "Cedar privacy fence & gate", loc: "Cranford, NJ", body: "A custom cedar privacy fence with a matching arched gate, set plumb and level along a sloped property line.", src: "assets/project-fencing.jpg" },
  { id: "pp-fireplace", cat: "Exterior", tag: "Fire feature", title: "Backyard stone fireplace", loc: "Westfield, NJ", body: "A stacked-stone outdoor fireplace with an integrated wood store and bluestone hearth that anchors the patio.", src: "assets/project-fireplace.jpg" },
];

const PP_FILTERS = ["All work", "Interior", "Exterior"];

const PP_STATS = [
  { num: "100+", label: "Projects completed" },
  { num: "10+", label: "Years of experience" },
  { num: "100%", label: "Satisfaction focus" },
];

// Animated count-up that fires when scrolled into view (respects reduced motion).
function StatNum({ value }) {
  const m = String(value).match(/^(\d+)(\D*)$/);
  const target = m ? parseInt(m[1], 10) : 0;
  const suffix = m ? m[2] : "";
  const [n, setN] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setN(target); return; }
    let raf, started = false;
    const dur = 1200;
    const run = () => {
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        setN(Math.round(target * e));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const el = ref.current;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting && !started) { started = true; run(); io.disconnect(); } });
    }, { threshold: 0.5 });
    if (el) io.observe(el);
    const safety = setTimeout(() => { if (!started) { started = true; run(); } }, 1300);
    return () => { cancelAnimationFrame(raf); io.disconnect(); clearTimeout(safety); };
  }, [target]);

  return <span ref={ref} className="pp-hstat-num">{n}{suffix}</span>;
}

function PpCard({ p }) {
  return (
    <div className={"pp-card" + (p.big ? " pp-card-big" : "")}>
      <div className="pp-media">
        <image-slot
          id={p.id}
          shape="rounded"
          radius="16"
          src={window.PE_SLOT_SRC(p.id)}
          fit="cover"
          placeholder={"Drop a " + p.tag.toLowerCase() + " project photo"}
          style={{ display: "block", width: "100%", height: "100%" }}
        ></image-slot>
        <span className="pp-badge">{p.tag}</span>
      </div>
      <div className="pp-body">
        <div className="pp-loc">
          <PpIcon name="map-pin" size={15} stroke={1.9} style={{ color: "var(--accent)" }} /> {p.loc}
        </div>
        <h3 className="pp-title">{p.title}</h3>
        <p className="pp-desc">{p.body}</p>
      </div>
    </div>
  );
}

function ProjectsPage() {
  const [filter, setFilter] = React.useState("All work");
  const [gridIn, setGridIn] = React.useState(false);
  const gridRef = React.useRef(null);
  const shown = PP_PROJECTS.filter((p) => filter === "All work" || p.cat === filter);

  React.useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { setGridIn(true); io.disconnect(); } });
    }, { threshold: 0.06 });
    io.observe(el);
    const safety = setTimeout(() => setGridIn(true), 1000);
    return () => { clearTimeout(safety); io.disconnect(); };
  }, []);

  return (
    <React.Fragment>
      {/* ===== bold dark hero ===== */}
      <section className="pe-section pp-hero">
        <div className="pp-hero-glow" aria-hidden="true"></div>
        <div className="pp-hero-rings" aria-hidden="true"></div>
        <div className="pe-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="reveal pp-hero-eyebrow" style={{ transitionDelay: "40ms" }}>
            <span className="t-eyebrow" style={{ color: "var(--accent)" }}>Our work</span>
          </div>
          <h1 className="reveal pp-hero-title" style={{ transitionDelay: "120ms" }}>
            Projects we&rsquo;re proud to<br className="pp-br" /> put our name on
          </h1>
          <p className="reveal pp-hero-sub" style={{ transitionDelay: "200ms" }}>
            A look at recent remodels across New Jersey and New York &mdash; kitchens, baths, basements, patios, and more, each built with the same care and craftsmanship.
          </p>
          <div className="reveal pp-hero-stats" style={{ transitionDelay: "280ms" }}>
            {PP_STATS.map((s, i) => (
              <div className="pp-hstat" key={s.label}>
                <StatNum value={s.num} />
                <span className="pp-hstat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== gallery ===== */}
      <section className="pe-section" style={{ background: "var(--color-canvas-soft)" }}>
        <div className="pe-container">
          <div className="reveal pp-gallery-head">
            <h2 className="pp-gallery-title">Featured projects</h2>
            <div className="pp-filters">
              {PP_FILTERS.map((f) => (
                <button key={f} onClick={() => setFilter(f)} className={"pp-filter" + (filter === f ? " is-active" : "")}>{f}</button>
              ))}
            </div>
          </div>

          <div ref={gridRef} className={"pp-grid" + (gridIn ? " is-in" : "")}>
            {shown.map((p, i) => (
              <div
                key={p.id}
                className={"pp-rise" + (p.big ? " pp-rise-big" : "")}
                style={{ "--d": (Math.min(i, 7) * 75) + "ms" }}
              >
                <PpCard p={p} />
              </div>
            ))}
          </div>

          <div className="reveal" style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
            <a href="Free Estimate.html" className="pp-cta">
              Start your project <PpIcon name="arrow-right" size={18} stroke={2} />
            </a>
          </div>
        </div>
      </section>

      <style>{`
        /* ---------- hero ---------- */
        .pp-hero{ position:relative; overflow:hidden; background:var(--color-ink); padding-top:var(--space-4xl); padding-bottom:calc(var(--space-4xl) + 8px); }
        .pp-hero-glow{ position:absolute; top:-180px; right:-60px; width:600px; height:440px; background:radial-gradient(ellipse at center, rgba(255,79,0,0.34), rgba(255,79,0,0) 62%); pointer-events:none; z-index:0; animation:ppGlow 11s ease-in-out infinite; }
        .pp-hero-rings{ position:absolute; right:-140px; bottom:-220px; width:560px; height:560px; border-radius:50%; background:repeating-radial-gradient(circle, rgba(255,255,255,0.075) 0 1.5px, transparent 1.5px 60px); -webkit-mask:radial-gradient(circle, #000 18%, transparent 72%); mask:radial-gradient(circle, #000 18%, transparent 72%); pointer-events:none; z-index:0; animation:ppFloat 9s ease-in-out infinite; }
        .pp-hero-eyebrow{ display:flex; align-items:center; gap:11px; }
        .pp-hero-title{ margin:18px 0 0; font-family:var(--font-display); font-weight:500; font-size:clamp(38px,5.4vw,68px); line-height:1.02; letter-spacing:-1.2px; color:var(--color-canvas); }
        .pp-hero-sub{ margin:22px 0 0; max-width:600px; font-family:var(--font-body); font-size:clamp(16px,1.4vw,19px); line-height:1.55; color:rgba(255,255,255,0.74); }
        .pp-hero-stats{ display:flex; flex-wrap:wrap; gap:0; margin-top:44px; }
        .pp-hstat{ display:flex; flex-direction:column; gap:6px; padding:4px 38px; position:relative; }
        .pp-hstat:first-child{ padding-left:0; }
        .pp-hstat + .pp-hstat::before{ content:""; position:absolute; left:0; top:8px; bottom:8px; width:1px; background:rgba(255,255,255,0.16); }
        .pp-hstat-num{ font-family:var(--font-display); font-weight:500; font-size:clamp(34px,3.8vw,48px); line-height:1; letter-spacing:-0.5px; color:var(--accent); font-variant-numeric:tabular-nums; }
        .pp-hstat-label{ font-family:var(--font-body); font-size:14.5px; color:rgba(255,255,255,0.6); }
        @media (max-width:560px){
          .pp-br{ display:none; }
          .pp-hstat{ padding:4px 22px; }
        }

        /* ---------- gallery head ---------- */
        .pp-gallery-head{ display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:20px; margin-bottom:36px; }
        .pp-gallery-title{ margin:0; font-family:var(--font-display); font-weight:500; font-size:clamp(24px,2.8vw,32px); letter-spacing:-0.5px; color:var(--color-ink); }
        .pp-filters{ display:inline-flex; gap:4px; background:var(--color-canvas); border:1px solid var(--color-border-soft); border-radius:var(--radius-pill); padding:4px; }
        .pp-filter{ border:none; cursor:pointer; font-family:var(--font-body); font-weight:600; font-size:14px; padding:9px 18px; border-radius:var(--radius-pill); background:transparent; color:var(--color-body); transition:background 160ms ease, color 160ms ease, transform 120ms ease; }
        .pp-filter:hover{ color:var(--color-ink); }
        .pp-filter:active{ transform:scale(0.96); }
        .pp-filter.is-active{ background:var(--color-ink); color:var(--color-on-primary); }

        /* ---------- grid + entrance ---------- */
        .pp-grid{ display:grid; grid-template-columns:repeat(2,1fr); gap:var(--space-xl); }
        .pp-rise{ opacity:0; }
        .pp-rise-big{ grid-column:span 2; }
        .pp-grid.is-in .pp-rise{ animation:ppRise .62s cubic-bezier(.22,.61,.36,1) both; animation-delay:var(--d,0ms); }
        @keyframes ppRise{ from{ opacity:0; transform:translateY(30px) scale(.985); } to{ opacity:1; transform:none; } }

        .pp-card{ display:flex; flex-direction:column; height:100%; background:var(--color-canvas); border:1px solid var(--color-border-soft); border-radius:var(--radius-md); overflow:hidden; transition:box-shadow 280ms cubic-bezier(.22,.61,.36,1), transform 280ms cubic-bezier(.22,.61,.36,1), border-color 280ms ease; }
        .pp-card:hover{ transform:translateY(-5px); box-shadow:0 24px 54px rgba(32,21,21,0.14); border-color:transparent; }
        .pp-media{ position:relative; height:320px; overflow:hidden; }
        .pp-media image-slot{ transition:transform 560ms cubic-bezier(.22,.61,.36,1); }
        .pp-card:hover .pp-media image-slot{ transform:scale(1.05); }
        .pp-badge{ position:absolute; top:14px; left:14px; background:rgba(32,21,21,0.82); color:var(--color-on-primary); font-family:var(--font-body); font-weight:600; font-size:12.5px; letter-spacing:0.3px; padding:6px 13px; border-radius:var(--radius-pill); backdrop-filter:blur(4px); transition:background 200ms ease; }
        .pp-card:hover .pp-badge{ background:var(--accent); }
        .pp-body{ padding:22px 24px 26px; display:flex; flex-direction:column; }
        .pp-loc{ display:flex; align-items:center; gap:8px; color:var(--color-body-mid); font-family:var(--font-body); font-size:13.5px; font-weight:500; }
        .pp-title{ margin:9px 0 0; font-family:var(--font-display); font-weight:500; font-size:23px; letter-spacing:-0.4px; color:var(--color-ink); }
        .pp-desc{ margin:9px 0 0; font-family:var(--font-body); font-size:15px; line-height:23px; color:var(--color-body); }

        /* big featured: image left, copy right */
        .pp-card-big{ display:grid; grid-template-columns:1.25fr 1fr; align-items:stretch; }
        .pp-card-big .pp-media{ height:100%; min-height:360px; }
        .pp-card-big .pp-body{ justify-content:center; padding:36px 38px; }
        .pp-card-big .pp-title{ font-size:28px; }
        .pp-card-big .pp-desc{ font-size:16px; line-height:25px; }

        .pp-cta{ display:inline-flex; align-items:center; gap:10px; text-decoration:none; font-family:var(--font-body); font-weight:600; font-size:16px; color:var(--color-on-primary); background:var(--accent); border-radius:var(--radius-md); padding:15px 30px; box-shadow:0 10px 24px rgba(255,79,0,0.26); transition:background 140ms ease, gap 140ms ease, transform 120ms ease; }
        .pp-cta:hover{ background:var(--accent-hover); gap:13px; }
        .pp-cta:active{ transform:scale(0.98); }

        @keyframes ppGlow{ 0%,100%{ transform:translate(0,0) scale(1); opacity:.55; } 50%{ transform:translate(-22px,16px) scale(1.08); opacity:.78; } }
        @keyframes ppFloat{ 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-18px); } }

        @media (max-width: 860px){
          .pp-grid{ grid-template-columns:1fr; }
          .pp-rise-big{ grid-column:span 1; }
          .pp-card-big{ grid-template-columns:1fr; }
          .pp-card-big .pp-media{ min-height:0; height:300px; }
          .pp-card-big .pp-body{ padding:22px 24px 26px; }
          .pp-card-big .pp-title{ font-size:23px; }
        }
        @media (prefers-reduced-motion: reduce){
          .pp-hero-glow, .pp-hero-rings{ animation:none !important; }
          .pp-rise{ opacity:1 !important; }
          .pp-grid.is-in .pp-rise{ animation:none !important; }
          .pp-card, .pp-media image-slot, .pp-badge{ transition:none !important; }
          .pp-card:hover{ transform:none !important; }
          .pp-card:hover .pp-media image-slot{ transform:none !important; }
        }
      `}</style>
    </React.Fragment>
  );
}

window.ProjectsPage = ProjectsPage;
