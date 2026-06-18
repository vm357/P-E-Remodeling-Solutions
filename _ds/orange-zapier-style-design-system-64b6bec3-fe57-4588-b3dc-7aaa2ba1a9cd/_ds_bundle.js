/* @ds-bundle: {"format":3,"namespace":"OrangeZapierStyleDesignSystem_64b6be","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"PricingCard","sourcePath":"components/pricing/PricingCard.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"dd1ffd578be4","components/core/Button.jsx":"9e116acf992c","components/core/Eyebrow.jsx":"6e3fa7e1e510","components/forms/Input.jsx":"b18f57e346f0","components/pricing/PricingCard.jsx":"60c3a11bef93","components/surfaces/Card.jsx":"89fb2110a888","ui_kits/marketing/Features.jsx":"e5cbb3091919","ui_kits/marketing/Footer.jsx":"ab8a5e4d1580","ui_kits/marketing/Hero.jsx":"0f7fa45a8b90","ui_kits/marketing/NavBar.jsx":"a61293d4a517","ui_kits/marketing/Pricing.jsx":"ffb1e4bb85cb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OrangeZapierStyleDesignSystem_64b6be = window.OrangeZapierStyleDesignSystem_64b6be || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — the inline pill for metadata / tags.
 * Default is a cream pill with ink text; `tone="accent"` and
 * `tone="ink"` flip it for emphasis. Always fully rounded (pill).
 */
function Badge({
  children,
  tone = "soft",
  ...rest
}) {
  const tones = {
    soft: {
      background: "var(--color-canvas-soft)",
      color: "var(--color-ink)",
      border: "1px solid var(--color-border-soft)"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid var(--accent)"
    },
    ink: {
      background: "var(--color-ink)",
      color: "var(--color-on-primary)",
      border: "1px solid var(--color-ink)"
    },
    outline: {
      background: "transparent",
      color: "var(--color-ink)",
      border: "1px solid var(--color-border)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-xs)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--type-caption-size)",
      lineHeight: 1,
      padding: "var(--space-xs) var(--space-md)",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...tones[tone]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's CTA primitive.
 * Four variants share one 12px radius (--radius-md): the brand sits
 * deliberately between friendly-pill and technical-square.
 *   primary   -> saturated orange, warm-white label (the conversion signature)
 *   secondary -> deep coffee ink, warm-white label
 *   tertiary  -> cream canvas, ink label, 1px ink border (outline)
 *   text      -> text-only, used inside cards / nav
 */
function Button({
  variant = "primary",
  size = "md",
  children,
  disabled = false,
  as = "button",
  style: styleProp,
  ...rest
}) {
  const Tag = as;
  const sizeStyle = size === "sm" ? {
    fontSize: "var(--type-button-sm-size)",
    lineHeight: "var(--type-button-sm-line)",
    letterSpacing: "var(--type-button-sm-track)",
    fontWeight: "var(--weight-bold)",
    padding: "var(--space-sm) var(--space-lg)"
  } : {
    fontSize: "var(--type-button-md-size)",
    lineHeight: "var(--type-button-md-line)",
    letterSpacing: "var(--type-button-md-track)",
    fontWeight: "var(--weight-semibold)",
    padding: "var(--space-md) var(--space-xl)"
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid var(--accent)"
    },
    secondary: {
      background: "var(--color-ink)",
      color: "var(--color-on-primary)",
      border: "1px solid var(--color-ink)"
    },
    tertiary: {
      background: "var(--color-canvas)",
      color: "var(--color-ink)",
      border: "1px solid var(--color-border)"
    },
    text: {
      background: "transparent",
      color: "var(--color-ink)",
      border: "1px solid transparent"
    }
  };
  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-sm)",
    fontFamily: "var(--font-body)",
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    whiteSpace: "nowrap",
    textDecoration: "none",
    transition: "background 140ms ease, opacity 140ms ease, transform 80ms ease",
    ...variants[variant],
    ...sizeStyle,
    ...styleProp
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.98)";
    },
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
      const v = variants[variant];
      e.currentTarget.style.background = v.background;
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === "primary") e.currentTarget.style.background = "var(--accent-hover)";else if (variant === "secondary") e.currentTarget.style.background = "var(--color-ink-soft)";else if (variant === "tertiary") e.currentTarget.style.background = "var(--color-canvas-soft)";else if (variant === "text") e.currentTarget.style.background = "var(--color-canvas-soft)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — the small UPPERCASE label above section headlines.
 * Set in the display face (Mona Sans / Degular sub) at 14px / 500
 * with the brand's signature +1px positive tracking.
 */
function Eyebrow({
  children,
  color,
  as = "div",
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--type-eyebrow-size)",
      lineHeight: "var(--type-eyebrow-line)",
      letterSpacing: "var(--type-eyebrow-track)",
      textTransform: "uppercase",
      color: color || "var(--color-ink)"
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — the canonical text input.
 * Cream canvas fill, ink text, 1px ink hairline border, 6px radius
 * (--radius-sm — inputs are the brand's tighter corner). Focus lifts
 * the border to orange.
 */
function Input({
  label,
  hint,
  id,
  style,
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)",
      width: "100%"
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--type-body-sm-size)",
      color: "var(--color-ink)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-md-size)",
      lineHeight: "var(--type-body-md-line)",
      color: "var(--color-ink)",
      background: "var(--color-canvas)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-sm)",
      padding: "var(--space-md) var(--space-lg)",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      transition: "border-color 120ms ease, box-shadow 120ms ease",
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = "var(--accent)";
      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255,79,0,0.15)";
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = "var(--color-border)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-caption-size)",
      color: "var(--color-body-mid)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/pricing/PricingCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PricingCard — a pricing tier.
 *   featured=false (default) -> canvas fill + 1px ink hairline (Level 1 chrome)
 *   featured=true            -> polarity-flipped coffee fill, warm-white text
 * Composes Button + Badge primitives.
 */
function PricingCard({
  name,
  price,
  period = "/mo",
  blurb,
  features = [],
  cta = "Start free",
  badge,
  featured = false,
  ...rest
}) {
  const light = !featured;
  const text = light ? "var(--color-ink)" : "var(--color-on-primary)";
  const sub = light ? "var(--color-body)" : "var(--color-mute)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)",
      background: light ? "var(--color-canvas)" : "var(--color-ink)",
      color: text,
      border: light ? "1px solid var(--color-border)" : "1px solid var(--color-ink)",
      borderRadius: "var(--radius-md)",
      padding: "var(--card-padding)",
      fontFamily: "var(--font-body)",
      width: "100%",
      boxSizing: "border-box"
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--type-display-xs-size)",
      letterSpacing: "var(--type-display-xs-track)"
    }
  }, name), badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: featured ? "accent" : "soft"
  }, badge) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-xs)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--type-display-lg-size)",
      lineHeight: 1
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--type-body-sm-size)",
      color: sub
    }
  }, period)), blurb ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--type-body-sm-size)",
      lineHeight: "var(--type-body-sm-line)",
      color: sub
    }
  }, blurb) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? "primary" : "tertiary",
    style: {
      width: "100%"
    }
  }, cta), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)"
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "var(--space-sm)",
      fontSize: "var(--type-body-sm-size)",
      lineHeight: "var(--type-body-sm-line)",
      color: text
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      color: "var(--accent)",
      fontWeight: 700
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("span", null, f)))));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pricing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the default content surface.
 * Elevation comes from surface contrast (cream fill on the cream-white
 * page), not heavy shadow.
 *   variant="cream" (default) -> canvas-soft fill, ink text
 *   variant="dark"            -> polarity-flipped coffee fill, warm-white text
 *   variant="flat"            -> canvas fill + hairline ink border
 */
function Card({
  variant = "cream",
  children,
  style,
  ...rest
}) {
  const variants = {
    cream: {
      background: "var(--surface-card)",
      color: "var(--color-ink)",
      border: "1px solid transparent"
    },
    dark: {
      background: "var(--color-ink)",
      color: "var(--color-on-primary)",
      border: "1px solid var(--color-ink)"
    },
    flat: {
      background: "var(--color-canvas)",
      color: "var(--color-ink)",
      border: "1px solid var(--color-border)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-md)",
      padding: "var(--card-padding)",
      fontFamily: "var(--font-body)",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Features.jsx
try { (() => {
// Features — cream content band with eyebrow + section headline and a
// feature grid that mixes cream and one polarity-flipped dark Card.
const {
  Card: FCard,
  Eyebrow: FEyebrow,
  Badge: FBadge
} = window.OrangeZapierStyleDesignSystem_64b6be;
function LogoStrip() {
  const names = ["Asana", "Notion", "Slack", "HubSpot", "Stripe", "Zendesk"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-2xl) var(--space-xl)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--color-body-mid)"
    }
  }, "Trusted by 2.5 million teams worldwide"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3xl)",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, names.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 22,
      color: "var(--color-mute)"
    }
  }, n))));
}
function Feature({
  title,
  body,
  variant
}) {
  const dark = variant === "dark";
  return /*#__PURE__*/React.createElement(FCard, {
    variant: variant,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)",
      minHeight: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: dark ? "var(--accent)" : "var(--color-canvas)",
      border: dark ? "none" : "1px solid var(--color-border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark.svg",
    alt: "",
    width: "22",
    height: "22",
    style: dark ? {
      filter: "brightness(0) invert(1)"
    } : null
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: "-0.4px",
      color: dark ? "var(--color-on-primary)" : "var(--color-ink)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: "22px",
      color: dark ? "var(--color-mute)" : "var(--color-body)"
    }
  }, body));
}
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-canvas-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-4xl) var(--space-xl)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)",
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(FEyebrow, null, "Why teams choose Orange"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "var(--type-display-lg-size)",
      lineHeight: "var(--type-display-lg-line)",
      color: "var(--color-ink)",
      letterSpacing: "-0.5px"
    }
  }, "The automation platform that scales with you")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement(Feature, {
    variant: "cream",
    title: "Build in minutes",
    body: "Drag, drop, done. Create multi-step workflows without writing a line of code."
  }), /*#__PURE__*/React.createElement(Feature, {
    variant: "dark",
    title: "Enterprise-grade",
    body: "SOC 2, SAML SSO, and advanced admin controls keep your automation secure at scale."
  }), /*#__PURE__*/React.createElement(Feature, {
    variant: "cream",
    title: "6,000+ integrations",
    body: "The largest app directory in automation \u2014 your whole stack, finally connected."
  }))));
}
window.LogoStrip = LogoStrip;
window.Features = Features;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
// CtaBand — dark coffee hero-band-dark for the closing conversion moment.
// Footer — dark coffee footer with link columns.
const {
  Button: FtBtn,
  Eyebrow: FtEyebrow
} = window.OrangeZapierStyleDesignSystem_64b6be;
function CtaBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-4xl) var(--space-xl)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-xl)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "var(--type-display-lg-size)",
      lineHeight: "var(--type-display-lg-line)",
      color: "var(--color-on-primary)",
      letterSpacing: "-0.5px",
      maxWidth: 640
    }
  }, "Put your busywork on autopilot"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-lg-size)",
      lineHeight: "var(--type-body-lg-line)",
      color: "var(--color-mute)",
      maxWidth: 520
    }
  }, "Join 2.5 million teams automating their work with Orange."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement(FtBtn, {
    variant: "primary"
  }, "Get started free"), /*#__PURE__*/React.createElement(FtBtn, {
    variant: "tertiary",
    style: {
      background: "transparent",
      color: "var(--color-on-primary)",
      borderColor: "var(--color-body-mid)"
    }
  }, "Talk to sales"))));
}
function Footer() {
  const cols = {
    Products: ["Zaps", "Tables", "Interfaces", "Chatbots", "Canvas"],
    Solutions: ["Marketing", "Sales", "IT", "Operations", "Support"],
    Resources: ["Blog", "Templates", "Webinars", "Community", "Docs"],
    Company: ["About", "Careers", "Press", "Partners", "Contact"]
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-ink)",
      borderTop: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-3xl) var(--space-xl)",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(4, 1fr)",
      gap: "var(--space-2xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-light.svg",
    alt: "Orange",
    height: "28",
    style: {
      alignSelf: "flex-start"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: "21px",
      color: "var(--color-body-mid)",
      maxWidth: 220
    }
  }, "The easiest way to automate your work.")), Object.entries(cols).map(([head, items]) => /*#__PURE__*/React.createElement("div", {
    key: head,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontSize: 12,
      fontWeight: 500,
      color: "var(--color-mute)"
    }
  }, head), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--color-canvas-soft)",
      textDecoration: "none"
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-lg) var(--space-xl)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--color-body-mid)"
    }
  }, "\xA9 2026 Orange, Inc."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--color-body-mid)"
    }
  }, "Privacy \xB7 Terms \xB7 Security"))));
}
window.CtaBand = CtaBand;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
// Hero — cream hero band, split layout. Headline left (display-xl),
// interactive email capture, illustrative "zap" workflow card right.
const {
  Button: HeroButton,
  Eyebrow: HeroEyebrow,
  Input: HeroInput,
  Badge: HeroBadge
} = window.OrangeZapierStyleDesignSystem_64b6be;
function AppTile({
  label,
  bg
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-sm)",
      background: bg,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 18,
      flexShrink: 0
    }
  }, label);
}
function ZapStep({
  tile,
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-md)",
      background: "var(--color-canvas)",
      border: "1px solid var(--color-border-soft)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-md)"
    }
  }, tile, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 15,
      color: "var(--color-ink)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--color-body-mid)"
    }
  }, sub)));
}
function Connector() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "2px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 2,
      height: 18,
      background: "var(--color-mute)"
    }
  }));
}
function ZapCard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-canvas-soft)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-xl)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 15,
      color: "var(--color-ink)"
    }
  }, "Lead follow-up"), /*#__PURE__*/React.createElement(HeroBadge, {
    tone: "accent"
  }, "On")), /*#__PURE__*/React.createElement(ZapStep, {
    tile: /*#__PURE__*/React.createElement(AppTile, {
      label: "T",
      bg: "#1d9bf0"
    }),
    title: "New Typeform entry",
    sub: "Trigger"
  }), /*#__PURE__*/React.createElement(Connector, null), /*#__PURE__*/React.createElement(ZapStep, {
    tile: /*#__PURE__*/React.createElement(AppTile, {
      label: "S",
      bg: "#4a154b"
    }),
    title: "Send Slack message",
    sub: "Action"
  }), /*#__PURE__*/React.createElement(Connector, null), /*#__PURE__*/React.createElement(ZapStep, {
    tile: /*#__PURE__*/React.createElement(AppTile, {
      label: "H",
      bg: "#ff7a59"
    }),
    title: "Create HubSpot contact",
    sub: "Action"
  }));
}
function Hero() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-4xl) var(--space-xl)",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "var(--space-4xl)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement(HeroEyebrow, null, "Workflow automation"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-medium)",
      fontSize: "var(--type-display-xl-size)",
      lineHeight: "var(--type-display-xl-line)",
      color: "var(--color-ink)",
      letterSpacing: "-0.5px"
    }
  }, "Automate without limits"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 460,
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-lg-size)",
      lineHeight: "var(--type-body-lg-line)",
      letterSpacing: "var(--type-body-lg-track)",
      color: "var(--color-body)"
    }
  }, "Connect 6,000+ apps and move work forward \u2014 automatically. No code, no engineers, no busywork."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      background: "var(--color-canvas-soft)",
      border: "1px solid var(--color-border-soft)",
      borderRadius: "var(--radius-md)",
      padding: "var(--space-md) var(--space-lg)",
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      fontWeight: 700
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--color-ink)"
    }
  }, "Thanks \u2014 check your inbox to finish setting up.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      gap: "var(--space-sm)",
      maxWidth: 460,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(HeroInput, {
    placeholder: "you@company.com",
    type: "email",
    required: true,
    "aria-label": "Work email"
  })), /*#__PURE__*/React.createElement(HeroButton, {
    variant: "primary",
    as: "button",
    type: "submit"
  }, "Get started free")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-lg)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--color-body-mid)"
    }
  }, "\u2713 Free forever plan"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--color-body-mid)"
    }
  }, "\u2713 No credit card"))), /*#__PURE__*/React.createElement(ZapCard, null)));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/NavBar.jsx
try { (() => {
// NavBar — sticky top nav for the marketing site.
// Background canvas, ink text. Composes Button (text + primary).
const {
  Button: NavButton
} = window.OrangeZapierStyleDesignSystem_64b6be;
function NavBar() {
  const links = ["Products", "Solutions", "Resources", "Pricing", "Enterprise"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "var(--color-canvas)",
      borderBottom: "1px solid var(--color-border-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-md) var(--space-xl)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2xl)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "Orange",
    height: "30"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-xl)",
      flex: 1
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-body-sm-size)",
      fontWeight: "var(--weight-medium)",
      color: "var(--color-ink)",
      textDecoration: "none"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement(NavButton, {
    variant: "text",
    size: "sm"
  }, "Log in"), /*#__PURE__*/React.createElement(NavButton, {
    variant: "primary",
    size: "sm"
  }, "Sign up free"))));
}
window.NavBar = NavBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Pricing.jsx
try { (() => {
// Pricing — white content band with an interactive monthly/annual toggle
// and a 3-up grid of PricingCard tiers (one featured).
const {
  PricingCard: PCard,
  Eyebrow: PEyebrow,
  Badge: PBadge
} = window.OrangeZapierStyleDesignSystem_64b6be;
function Toggle({
  annual,
  setAnnual
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: "var(--color-canvas-soft)",
      border: "1px solid var(--color-border-soft)",
      borderRadius: "var(--radius-pill)",
      padding: 4
    }
  }, [["Monthly", false], ["Annual −20%", true]].map(([label, val]) => /*#__PURE__*/React.createElement("button", {
    key: label,
    onClick: () => setAnnual(val),
    style: {
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 14,
      padding: "8px 16px",
      borderRadius: "var(--radius-pill)",
      background: annual === val ? "var(--color-ink)" : "transparent",
      color: annual === val ? "var(--color-on-primary)" : "var(--color-body)",
      transition: "background 120ms ease, color 120ms ease"
    }
  }, label)));
}
function Pricing() {
  const [annual, setAnnual] = React.useState(true);
  const tiers = [{
    name: "Free",
    m: "$0",
    a: "$0",
    period: "/mo",
    blurb: "For getting started with automation.",
    cta: "Start free",
    features: ["100 tasks / month", "Two-step Zaps", "Core app library"]
  }, {
    name: "Team",
    m: "$89",
    a: "$69",
    period: "/mo",
    badge: "Most popular",
    featured: true,
    cta: "Start free trial",
    blurb: "For teams automating together.",
    features: ["Unlimited Zaps", "Shared workspaces", "Premium apps", "Multi-step paths"]
  }, {
    name: "Company",
    m: "Custom",
    a: "Custom",
    period: "",
    blurb: "For orgs that need control and scale.",
    cta: "Contact sales",
    features: ["SAML SSO", "Advanced admin", "Annual task limits", "Priority support"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-4xl) var(--space-xl)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2xl)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)",
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(PEyebrow, null, "Pricing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "var(--type-display-lg-size)",
      lineHeight: "var(--type-display-lg-line)",
      color: "var(--color-ink)",
      letterSpacing: "-0.5px"
    }
  }, "Start free. Scale when you\u2019re ready."), /*#__PURE__*/React.createElement(Toggle, {
    annual: annual,
    setAnnual: setAnnual
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-lg)",
      width: "100%",
      alignItems: "start"
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement(PCard, {
    key: t.name,
    name: t.name,
    price: annual ? t.a : t.m,
    period: t.period,
    blurb: t.blurb,
    badge: t.badge,
    featured: t.featured,
    cta: t.cta,
    features: t.features
  })))));
}
window.Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Pricing.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.Card = __ds_scope.Card;

})();
