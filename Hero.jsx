// Hero.jsx — cream split hero: headline + CTAs + trust chips (left), large image slot (right).
const { Button: HBtn, Eyebrow: HEyebrow } = window.OrangeZapierStyleDesignSystem_64b6be;
const HIcon = window.RIcon;
const HStar = window.RStar;

const TRUST_CHIPS = ["Licensed & insured", "Free estimates", "Quality craftsmanship", "Local NJ & NY experts"];

function Hero() {
  return (
    <section style={{ background: "var(--color-canvas)", position: "relative", overflow: "hidden" }}>
      {/* soft warm wash behind image side */}
      <div aria-hidden style={{ position: "absolute", top: -120, right: -160, width: 620, height: 620, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,79,0,0.06), rgba(255,79,0,0) 70%)", pointerEvents: "none" }}></div>

      <div className="pe-container" style={{ position: "relative" }}>
        <div className="pe-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.02fr 0.98fr", gap: "var(--space-4xl)", alignItems: "center", paddingTop: 72, paddingBottom: 80 }}>
          {/* LEFT */}
          <div className="reveal in" style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, alignSelf: "flex-start", background: "var(--color-canvas-soft)", border: "1px solid var(--color-border-soft)", borderRadius: "var(--radius-pill)", padding: "7px 14px 7px 8px" }}>
              <span style={{ display: "inline-flex", gap: 1 }}>
                {[0, 1, 2, 3, 4].map((i) => <HStar key={i} size={14} />)}
              </span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: 600, color: "var(--color-ink)" }}>4.9 from 200+ local homeowners</span>
            </div>

            <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(40px, 5.4vw, 60px)", lineHeight: 1.04, letterSpacing: "-1px", color: "var(--color-ink)" }}>
              Transform your house into the home you&rsquo;ve always wanted
            </h1>

            <p style={{ margin: 0, maxWidth: 520, fontFamily: "var(--font-body)", fontSize: "var(--type-body-lg-size)", lineHeight: "var(--type-body-lg-line)", letterSpacing: "var(--type-body-lg-track)", color: "var(--color-body)" }}>
              From stunning kitchen renovations to complete home transformations, we bring craftsmanship, quality, and attention to detail to every project across New Jersey &amp; New York.
            </p>

            <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap", marginTop: 4 }}>
              <HBtn variant="primary" as="a" href="Free Estimate.html" style={{ textDecoration: "none" }}>Get a free estimate</HBtn>
              <HBtn variant="tertiary" as="a" href="#portfolio" style={{ textDecoration: "none", display: "inline-flex", gap: 8 }}>
                View our work <HIcon name="arrow-right" size={18} stroke={2} />
              </HBtn>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, max-content)", gap: "10px 28px", marginTop: 12 }}>
              {TRUST_CHIPS.map((c) =>
              <span key={c} style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 500, color: "var(--color-ink-mid)" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 22, height: 22, borderRadius: "50%", background: "rgba(255,79,0,0.12)", color: "var(--accent)" }}>
                    <HIcon name="check" size={14} stroke={2.6} />
                  </span>
                  {c}
                </span>
              )}
            </div>
          </div>

          {/* RIGHT — image slot with overlapping proof card */}
          <div className="reveal in" style={{ position: "relative" }}>
            <image-slot
              id="hero-home"
              src={window.PE_SLOT_SRC("hero-home")}
              shape="rounded"
              radius="20"
              placeholder="Drop a hero photo of a remodeled home"
              style={{ display: "block", width: "100%", height: "min(560px, 64vh)", boxShadow: "0 24px 60px rgba(32,21,21,0.16)" }}>
            </image-slot>

            {/* floating proof card */}
            <div className="pe-hide-mobile pe-proof-card" style={{ position: "absolute", left: -22, bottom: 36, background: "var(--color-canvas)", borderRadius: "var(--radius-md)", padding: "16px 18px", boxShadow: "0 18px 40px rgba(32,21,21,0.18)", display: "flex", alignItems: "center", gap: 14, maxWidth: 280 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, borderRadius: 12, background: "var(--color-ink)", color: "var(--color-on-primary)", flexShrink: 0 }}>
                <HIcon name="award" size={24} stroke={1.7} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 26, color: "var(--color-ink)" }}>10+ years</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--color-body)" }}>of trusted remodeling in NJ &amp; NY</span>
              </div>
            </div>

            {/* floating "since" chip */}
            <div className="pe-hide-mobile pe-insured-chip" style={{ position: "absolute", right: -14, top: 28, background: "var(--accent)", color: "var(--color-on-primary)", borderRadius: "var(--radius-md)", padding: "10px 16px", boxShadow: "0 12px 28px rgba(255,79,0,0.28)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <HIcon name="sparkle" size={16} stroke={1.6} /> Fully insured &amp; warrantied
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px){
          .pe-hero-grid{ grid-template-columns: 1fr !important; gap: 36px !important; padding-top: 40px !important; padding-bottom: 48px !important; }
        }
        .pe-proof-card{ transition:transform 240ms cubic-bezier(.2,.7,.3,1), box-shadow 240ms ease; cursor:default; }
        .pe-proof-card > div:first-child{ transition:transform 240ms cubic-bezier(.2,.7,.3,1); }
        @media (prefers-reduced-motion: no-preference){
          .pe-proof-card:hover{ transform:translateY(-4px); box-shadow:0 26px 54px rgba(32,21,21,0.24); }
          .pe-proof-card:hover > div:first-child{ transform:rotate(-6deg) scale(1.06); }
        }
        .pe-insured-chip{ transition:transform 240ms cubic-bezier(.2,.7,.3,1), box-shadow 240ms ease; cursor:default; }
        .pe-insured-chip svg{ transition:transform 600ms cubic-bezier(.2,.7,.3,1); }
        @media (prefers-reduced-motion: no-preference){
          .pe-insured-chip:hover{ transform:translateY(-4px) scale(1.04); box-shadow:0 18px 38px rgba(255,79,0,0.4); }
          .pe-insured-chip:hover svg{ transform:rotate(180deg); }
        }
      `}</style>
    </section>);

}

window.Hero = Hero;