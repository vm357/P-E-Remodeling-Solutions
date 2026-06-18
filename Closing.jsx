// Closing.jsx — FinalCTA (dark band) + Contact (validated form) + SiteFooter.
const { Button: CBtn } = window.OrangeZapierStyleDesignSystem_64b6be;
const CIcon = window.RIcon;
const PEINFO = window.PE;

/* ---------------------------------- Final CTA ---------------------------------- */
function FinalCTA() {
  return (
    <section className="pe-section" style={{ background: "var(--accent)", position: "relative", overflow: "hidden", paddingTop: "var(--space-3xl)", paddingBottom: "var(--space-3xl)" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 140% at 100% 0%, rgba(255,255,255,0.18), rgba(255,255,255,0) 55%)", pointerEvents: "none" }}></div>
      <div aria-hidden style={{ position: "absolute", right: "-90px", bottom: "-120px", width: 440, height: 440, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.28)", pointerEvents: "none" }}></div>
      <div aria-hidden style={{ position: "absolute", right: "-60px", bottom: "-80px", width: 320, height: 320, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.34)", pointerEvents: "none" }}></div>
      <div aria-hidden style={{ position: "absolute", right: "10px", bottom: "-30px", width: 200, height: 200, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.30)", pointerEvents: "none" }}></div>
      <div className="pe-container reveal pe-fcta">
        <div className="pe-fcta-text">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>
            <span style={{ width: 22, height: 2, background: "rgba(255,255,255,0.7)", display: "inline-block" }}></span>
            Free, no-pressure estimate
          </span>
          <h2 style={{ margin: "16px 0 0", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(30px,3.6vw,46px)", lineHeight: 1.04, letterSpacing: "-0.7px", color: "var(--color-on-primary)", maxWidth: 540 }}>
            Ready to start your remodeling project?
          </h2>
          <p style={{ margin: "16px 0 0", fontFamily: "var(--font-body)", fontSize: 18, lineHeight: "27px", color: "rgba(255,255,255,0.9)", maxWidth: 480 }}>
            Let&rsquo;s discuss your vision and create a space you&rsquo;ll love for years to come.
          </p>
        </div>
        <div className="pe-fcta-actions">
          <a href="Free Estimate.html" className="pe-fcta-primary">
            Request your free estimate
            <CIcon name="arrow-right" size={18} stroke={2} />
          </a>
          <a href={PEINFO.phoneHref} className="pe-fcta-ghost">
            <CIcon name="phone" size={18} stroke={1.9} /> {PEINFO.phone}
          </a>
        </div>
      </div>

      <style>{`
        .pe-fcta{ position:relative; z-index:1; display:flex; align-items:center; justify-content:space-between; gap:var(--space-2xl); flex-wrap:wrap; }
        .pe-fcta-text{ flex:1 1 380px; }
        .pe-fcta-actions{ display:flex; flex-direction:column; gap:14px; align-items:stretch; min-width:260px; }
        .pe-fcta-primary{
          display:inline-flex; align-items:center; justify-content:center; gap:10px;
          padding:17px 30px; border-radius:var(--radius-md);
          background:var(--color-on-primary); color:var(--accent); text-decoration:none;
          font-family:var(--font-body); font-weight:700; font-size:16.5px;
          box-shadow:0 12px 28px rgba(120,40,0,0.22);
          transition: transform 140ms ease, gap 140ms ease, box-shadow 140ms ease;
        }
        .pe-fcta-primary:hover{ transform:translateY(-2px); gap:13px; box-shadow:0 16px 34px rgba(120,40,0,0.28); }
        .pe-fcta-ghost{
          display:inline-flex; align-items:center; justify-content:center; gap:10px;
          padding:16px 30px; border-radius:var(--radius-md);
          background:transparent; color:var(--color-on-primary); text-decoration:none;
          border:1.5px solid rgba(255,255,255,0.45);
          font-family:var(--font-body); font-weight:600; font-size:16px;
          transition: background 140ms ease, border-color 140ms ease;
        }
        .pe-fcta-ghost:hover{ background:rgba(255,255,255,0.12); border-color:rgba(255,255,255,0.8); }
        @media (max-width: 720px){
          .pe-fcta-actions{ width:100%; min-width:0; }
        }
      `}</style>
    </section>
  );
}

/* ---------------------------------- Contact ---------------------------------- */
const PROJECT_TYPES = [
  "Kitchen remodeling", "Bathroom remodeling", "Basement finishing", "Flooring installation",
  "Interior painting", "Lighting upgrades", "Patios & outdoor living", "Outdoor kitchen",
  "Fencing", "Sunroom", "Exterior fireplace", "Something else",
];

const fieldBase = {
  fontFamily: "var(--font-body)", fontSize: 16, color: "var(--color-ink)",
  background: "var(--color-canvas)", border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-sm)", padding: "13px 14px", outline: "none", width: "100%",
  boxSizing: "border-box", transition: "border-color 120ms ease, box-shadow 120ms ease",
};

function focusOn(e) { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,79,0,0.15)"; }
function focusOff(e) { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.boxShadow = "none"; }

function Field({ label, error, children }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14.5, color: "var(--color-ink)" }}>{label}</span>
      {children}
      {error ? <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--accent)" }}>{error}</span> : null}
    </label>
  );
}

function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", type: "", message: "" });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate() {
    const er = {};
    if (!form.name.trim()) er.name = "Please tell us your name.";
    if (!form.email.trim()) er.email = "We need an email to reach you.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "That email doesn't look quite right.";
    if (form.phone && !/[0-9]{7,}/.test(form.phone.replace(/\D/g, ""))) er.phone = "Please enter a valid phone number.";
    if (!form.type) er.type = "Pick the project you have in mind.";
    return er;
  }

  function submit(e) {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  }

  const CONTACT_ITEMS = [
    { icon: "phone", label: "Call or text", value: PEINFO.phone, href: PEINFO.phoneHref },
    { icon: "mail", label: "Email us", value: PEINFO.email, href: "mailto:" + PEINFO.email },
    { icon: "map-pin", label: "Serving", value: PEINFO.area, href: null },
    { icon: "clock", label: "Hours", value: "Mon–Sat, 8am – 6pm", href: null },
  ];

  return (
    <section id="contact" className="pe-section" style={{ background: "var(--color-canvas-soft)" }}>
      <div className="pe-container">
        <div className="pe-contact-grid">
          {/* LEFT — pitch + details */}
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <div>
              <span className="t-eyebrow" style={{ color: "var(--accent)" }}>Free estimate</span>
              <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.06, letterSpacing: "-0.6px", color: "var(--color-ink)" }}>
                Let&rsquo;s talk about your project
              </h2>
              <p style={{ margin: "16px 0 0", maxWidth: 440, fontFamily: "var(--font-body)", fontSize: 18, lineHeight: "27px", color: "var(--color-body)" }}>
                Tell us a little about what you have in mind. We&rsquo;ll get back to you within one business day to schedule your free, no-pressure estimate.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {CONTACT_ITEMS.map((c) => {
                const inner = (
                  <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 0", borderBottom: "1px solid var(--color-border-soft)" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, borderRadius: 12, background: "var(--color-canvas)", border: "1px solid var(--color-border-soft)", color: "var(--accent)", flexShrink: 0 }}>
                      <CIcon name={c.icon} size={21} stroke={1.8} />
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, letterSpacing: "0.3px", textTransform: "uppercase", color: "var(--color-body-mid)" }}>{c.label}</span>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: 17, fontWeight: 600, color: "var(--color-ink)", marginTop: 3 }}>{c.value}</span>
                    </span>
                  </div>
                );
                return c.href ? <a key={c.label} href={c.href} style={{ textDecoration: "none" }}>{inner}</a> : <div key={c.label}>{inner}</div>;
              })}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 18px", background: "var(--color-ink)", borderRadius: "var(--radius-md)" }}>
              <CIcon name="shield-check" size={26} stroke={1.7} style={{ color: "var(--accent)", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: "22px", color: "var(--color-canvas-soft)" }}>
                Licensed, insured &amp; warrantied. Your estimate is always free and there&rsquo;s never any obligation.
              </span>
            </div>
          </div>

          {/* RIGHT — form card */}
          <div className="reveal pe-form-card">
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 16, padding: "40px 12px", minHeight: 460, justifyContent: "center" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 68, height: 68, borderRadius: "50%", background: "rgba(255,79,0,0.12)", color: "var(--accent)" }}>
                  <CIcon name="check" size={34} stroke={2.4} />
                </span>
                <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 28, color: "var(--color-ink)" }}>Thank you, {form.name.split(" ")[0] || "there"}!</h3>
                <p style={{ margin: 0, maxWidth: 360, fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "25px", color: "var(--color-body)" }}>
                  Your request is in. A member of our team will reach out within one business day to schedule your free estimate.
                </p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", type: "", message: "" }); }}
                  style={{ marginTop: 8, background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, color: "var(--accent)" }}>
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <h3 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 24, letterSpacing: "-0.3px", color: "var(--color-ink)" }}>Request your free estimate</h3>
                <Field label="Full name" error={errors.name}>
                  <input value={form.name} onChange={set("name")} placeholder="Jane Homeowner" style={fieldBase} onFocus={focusOn} onBlur={focusOff} />
                </Field>
                <div className="pe-form-row">
                  <Field label="Email" error={errors.email}>
                    <input type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" style={fieldBase} onFocus={focusOn} onBlur={focusOff} />
                  </Field>
                  <Field label="Phone (optional)" error={errors.phone}>
                    <input value={form.phone} onChange={set("phone")} placeholder="(732) 277-4579" style={fieldBase} onFocus={focusOn} onBlur={focusOff} />
                  </Field>
                </div>
                <Field label="Project type" error={errors.type}>
                  <div style={{ position: "relative" }}>
                    <select value={form.type} onChange={set("type")} style={{ ...fieldBase, appearance: "none", paddingRight: 40, cursor: "pointer", color: form.type ? "var(--color-ink)" : "var(--color-body-mid)" }} onFocus={focusOn} onBlur={focusOff}>
                      <option value="" disabled>Select a project…</option>
                      {PROJECT_TYPES.map((t) => <option key={t} value={t} style={{ color: "var(--color-ink)" }}>{t}</option>)}
                    </select>
                    <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--color-body-mid)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                    </span>
                  </div>
                </Field>
                <Field label="Tell us about your project (optional)">
                  <textarea value={form.message} onChange={set("message")} rows={4} placeholder="A little about your space, your goals, and your timeline…" style={{ ...fieldBase, resize: "vertical", minHeight: 96, lineHeight: "23px" }} onFocus={focusOn} onBlur={focusOff}></textarea>
                </Field>
                <CBtn variant="primary" as="button" type="submit" style={{ width: "100%", fontSize: 18, padding: "15px 24px" }}>Get my free estimate</CBtn>
                <p style={{ margin: 0, textAlign: "center", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-body-mid)" }}>
                  No spam, no obligation — just a friendly conversation about your home.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .pe-contact-grid{ display:grid; grid-template-columns:1fr 1.05fr; gap:var(--space-4xl); align-items:start; }
        .pe-form-card{ background:var(--color-canvas); border:1px solid var(--color-border-soft); border-radius:var(--radius-md); padding:32px; box-shadow:0 22px 56px rgba(32,21,21,0.10); }
        .pe-form-row{ display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        @media (max-width: 920px){ .pe-contact-grid{ grid-template-columns:1fr; gap:44px; } }
        @media (max-width: 480px){ .pe-form-row{ grid-template-columns:1fr; } .pe-form-card{ padding:24px; } }
      `}</style>
    </section>
  );
}

/* ---------------------------------- Footer ---------------------------------- */
function SiteFooter() {
  const company = [["Services", "Services.html"], ["Projects", "Projects.html"], ["About", "About.html"], ["Schedule", "Free Estimate.html"]];
  return (
    <footer style={{ background: "var(--color-ink)", position: "relative", overflow: "hidden" }}>
      <div className="pe-container" style={{ paddingTop: 72, paddingBottom: 8, position: "relative", zIndex: 1 }}>
        <div className="pe-foot-grid">
          {/* left: headline + CTA */}
          <div className="pe-foot-lead">
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(28px,3.4vw,44px)", lineHeight: 1.06, letterSpacing: "-0.7px", color: "var(--color-on-primary)", maxWidth: 460 }}>
              Let&rsquo;s build something you&rsquo;ll love.
            </h2>
            <a href="Free Estimate.html" className="pe-foot-cta">
              Schedule a free estimate
              <CIcon name="arrow-right" size={17} stroke={2} />
            </a>
          </div>

          {/* right: nav + contact */}
          <div className="pe-foot-cols">
            <div className="pe-foot-col">
              <span className="pe-foot-head">Explore</span>
              {company.map(([l, h]) => <a key={l} href={h} className="pe-foot-link">{l}</a>)}
            </div>
            <div className="pe-foot-col">
              <span className="pe-foot-head">Get in touch</span>
              <a href={PEINFO.phoneHref} className="pe-foot-link pe-foot-phone">{PEINFO.phone}</a>
              <a href={"mailto:" + PEINFO.email} className="pe-foot-link">{PEINFO.email}</a>
              <span className="pe-foot-muted">{PEINFO.area}</span>
              <span className="pe-foot-muted">Mon&ndash;Sat, 8am&ndash;6pm</span>
            </div>
          </div>
        </div>

        {/* oversized brand wordmark */}
        <div className="pe-foot-mark" aria-hidden>
          P<span style={{ color: "var(--accent)" }}>&amp;</span>E Remodeling Solutions LLC
        </div>
      </div>

      {/* bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.10)", position: "relative", zIndex: 1 }}>
        <div className="pe-container pe-foot-bottom">
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-body-mid)" }}>© 2026 P&amp;E Remodeling Solutions LLC. All rights reserved. NJ Lic. #13VH11635100. Crafted by <a href="https://kermitwebcraft.com" target="_blank" rel="noopener" style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.22)", transition: "color 140ms ease, border-color 140ms ease" }} onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "inherit"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; }}>Kermit Webcraft</a>.</span>
        </div>
      </div>

      <style>{`
        .pe-foot-grid{ display:grid; grid-template-columns:1.1fr 1fr; gap:var(--space-2xl); align-items:start; }
        .pe-foot-lead{ display:flex; flex-direction:column; align-items:flex-start; gap:26px; }
        .pe-foot-cta{
          display:inline-flex; align-items:center; gap:9px;
          padding:14px 26px; border-radius:999px;
          background:var(--accent); color:var(--color-on-primary); text-decoration:none;
          font-family:var(--font-body); font-weight:600; font-size:15px;
          transition: background 140ms ease, gap 140ms ease;
        }
        .pe-foot-cta:hover{ background:var(--accent-hover); gap:13px; }
        .pe-foot-cols{ display:grid; grid-template-columns:1fr 1fr; gap:var(--space-xl); }
        .pe-foot-col{ display:flex; flex-direction:column; gap:12px; }
        .pe-foot-head{ font-family:var(--font-display); text-transform:uppercase; letter-spacing:1.4px; font-size:11.5px; font-weight:600; color:var(--accent); margin-bottom:4px; }
        .pe-foot-link{ font-family:var(--font-body); font-size:15px; color:var(--color-canvas-soft); text-decoration:none; transition:color 140ms ease; width:fit-content; }
        a.pe-foot-link:hover{ color:var(--accent); }
        .pe-foot-phone{ font-family:var(--font-display); font-size:21px; font-weight:600; letter-spacing:-0.3px; color:var(--color-on-primary); margin-bottom:2px; }
        .pe-foot-muted{ font-family:var(--font-body); font-size:13.5px; color:var(--color-body-mid); }
        .pe-foot-mark{
          font-family:var(--font-display); font-weight:600;
          font-size:clamp(26px,6.4vw,92px); line-height:0.9; letter-spacing:-0.04em;
          color:rgba(255,255,255,0.075); white-space:nowrap;
          margin-top:36px; transform:translateY(14%); user-select:none; pointer-events:none;
        }
        .pe-foot-bottom{ padding-top:20px; padding-bottom:20px; display:flex; align-items:center; justify-content:center; flex-wrap:wrap; gap:8px; text-align:center; }
        @media (max-width: 760px){
          .pe-foot-grid{ grid-template-columns:1fr; gap:var(--space-xl); }
        }
        @media (max-width: 480px){
          .pe-foot-cols{ grid-template-columns:1fr; gap:28px; }
          .pe-foot-bottom{ justify-content:center; text-align:center; }
        }
      `}</style>
    </footer>
  );
}

window.FinalCTA = FinalCTA;
window.Contact = Contact;
window.SiteFooter = SiteFooter;
