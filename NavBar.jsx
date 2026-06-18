// NavBar.jsx — scroll-aware sticky navigation + floating sticky CTA.
const { Button: NavButton } = window.OrangeZapierStyleDesignSystem_64b6be;
const RIcon = window.RIcon;

const PE = {
  name: "P&E Remodeling",
  phone: "(732) 277-4579",
  phoneHref: "tel:+17322774579",
  email: "PNE.remodeling1@gmail.com",
  area: "Based in Central Jersey"
};

function Brand({ light = false }) {
  return (
    <a href="index.html#top" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", flexShrink: 0 }}>
      <img src="assets/pe-house.png" alt="P&amp;E Remodeling Solutions" height="46" style={{ width: "auto", height: "46px", display: "block" }} />
      <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "1.3px", textTransform: "uppercase", color: light ? "var(--color-on-primary)" : "var(--color-ink)", whiteSpace: "nowrap", fontSize: "14px", lineHeight: 1.2 }}>
        Remodeling Solutions
      </span>
    </a>);

}

const NAV_LINKS = [
["Services", "Services.html"],
["Projects", "Projects.html"],
["About", "About.html"],
["Schedule", "Free Estimate.html"]];


function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      style={{
        position: "sticky", top: 0, zIndex: 50,
        background: scrolled ? "rgba(255,254,251,0.88)" : "var(--color-canvas)",
        backdropFilter: scrolled ? "saturate(180%) blur(10px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(180%) blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border-soft)" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 16px rgba(32,21,21,0.05)" : "none",
        transition: "background 200ms ease, border-color 200ms ease, box-shadow 200ms ease"
      }}>
      
      <div
        className="pe-container"
        style={{
          display: "flex", alignItems: "center", gap: "var(--space-2xl)",
          paddingTop: scrolled ? 10 : 16, paddingBottom: scrolled ? 10 : 16,
          transition: "padding 200ms ease"
        }}>
        
        <div style={{ flex: "1 1 0", minWidth: 0, display: "flex", justifyContent: "flex-start" }}>
          <Brand />
        </div>
        <nav className="pe-hide-mobile" style={{ display: "flex", gap: "var(--space-xl)", flexShrink: 0, justifyContent: "center" }}>
          {NAV_LINKS.map(([label, href]) =>
          <a key={href} href={href}
          style={{ fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 500, color: "var(--color-ink-mid)", textDecoration: "none", whiteSpace: "nowrap", transition: "color 140ms ease" }}
          onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
          onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-ink-mid)"}>
              {label}
            </a>
          )}
        </nav>
        <div className="pe-hide-mobile" style={{ flex: "1 1 0", minWidth: 0, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "var(--space-lg)" }}>
          <a href={PE.phoneHref} className="pe-phone-link" style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, color: "var(--color-ink)", whiteSpace: "nowrap" }}>
            <RIcon name="phone" size={17} stroke={1.9} style={{ color: "var(--accent)" }} />
            {PE.phone}
          </a>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          style={{ display: "none", marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "var(--color-ink)", padding: 6 }}
          className="pe-menu-btn">
          
          <RIcon name={open ? "x" : "menu"} size={26} />
        </button>
      </div>

      {/* mobile dropdown */}
      {open &&
      <div style={{ borderTop: "1px solid var(--color-border-soft)", background: "var(--color-canvas)" }}>
          <div className="pe-container" style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 12, paddingBottom: 16 }}>
            {NAV_LINKS.map(([label, href]) =>
          <a key={href} href={href} onClick={() => setOpen(false)}
          style={{ padding: "10px 4px", fontFamily: "var(--font-body)", fontSize: 17, fontWeight: 500, color: "var(--color-ink)", textDecoration: "none" }}>
                {label}
              </a>
          )}
            <div style={{ marginTop: 8 }}>
              <NavButton variant="primary" as="a" href="Free Estimate.html" onClick={() => setOpen(false)} style={{ width: "100%" }}>Get a free estimate</NavButton>
            </div>
          </div>
        </div>
      }
      <style>{`@media (max-width: 1040px){ .pe-menu-btn{ display:inline-flex !important; } }
        .pe-phone-link{ transition:color 180ms ease; }
        .pe-phone-link svg{ transition:transform 500ms cubic-bezier(.2,.7,.3,1); transform-origin:center; }
        @media (prefers-reduced-motion: no-preference){
          .pe-phone-link:hover{ color:var(--accent); }
          .pe-phone-link:hover svg{ animation:pePhoneRing 600ms ease; }
          @keyframes pePhoneRing{ 0%{ transform:rotate(0); } 20%{ transform:rotate(-14deg); } 40%{ transform:rotate(12deg); } 60%{ transform:rotate(-8deg); } 80%{ transform:rotate(5deg); } 100%{ transform:rotate(0); } }
        }`}</style>
    </header>);

}

function StickyCTA() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 760;
      const nearEnd = window.innerHeight + window.scrollY > document.body.scrollHeight - 920;
      setShow(past && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed", right: 24, bottom: 24, zIndex: 60,
        display: "flex", gap: 10, alignItems: "center",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(16px)",
        pointerEvents: show ? "auto" : "none",
        transition: "opacity 260ms ease, transform 260ms ease"
      }}>
      
      <a
        href="Free Estimate.html"
        style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          background: "var(--accent)", color: "var(--color-on-primary)",
          fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 16,
          padding: "14px 22px", borderRadius: "var(--radius-md)", textDecoration: "none",
          boxShadow: "0 12px 32px rgba(255,79,0,0.30)",
          transition: "background 140ms ease, transform 80ms ease"
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = "var(--accent-hover)"}
        onMouseLeave={(e) => e.currentTarget.style.background = "var(--accent)"}>
        
        <RIcon name="sparkle" size={18} stroke={1.6} />
        Get a free estimate
      </a>
    </div>);

}

window.NavBar = NavBar;
window.StickyCTA = StickyCTA;
window.PE = PE;