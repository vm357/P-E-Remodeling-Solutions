# Orange — Design System

A Zapier-style design system for **Orange**, a workflow-automation brand. The
surface reads as confidently mature: a warm-cream canvas, deep coffee ink, and a
single saturated orange CTA. Warmth in the neutrals — cream rather than pure
white — is the brand's defining temperature signal.

> **Sources.** This system was authored from a written brand specification only —
> no codebase, Figma file, or production URL was provided. If you have the
> original product (marketing site, app) or a Figma library, attach it and we can
> reconcile this system against the real source of truth.

> **Font substitution (please confirm).** The brand's display face, **Degular
> Display**, is proprietary and was not supplied. This system substitutes
> **Mona Sans** (weight 500) for hero/display and uses **Inter** for everything
> else (Inter is the brand's actual second face). Both load from Google Fonts in
> `tokens/fonts.css`. **If you can supply licensed Degular Display + Inter binaries,
> send them and I'll self-host them via `@font-face`.**

---

## Content fundamentals — how Orange writes

- **Voice:** confident, plain, and unflashy. The product does the heavy lifting;
  the copy stays out of the way. Short declaratives over hype.
- **Person:** speaks to **you** ("Automate *your* work", "Connect *your* stack").
  First person plural ("we") only for the company itself.
- **Casing:** **sentence case everywhere** — including display headlines. The brand
  never uppercases display sizes. The *only* uppercase is the eyebrow label
  (14px, +1px tracking).
- **Headline style:** verb-forward, benefit-first, often two to four words.
  Examples: "Automate without limits", "Put your busywork on autopilot",
  "Start free. Scale when you're ready."
- **Body style:** concrete and quantified — "6,000+ apps", "2.5 million teams",
  "100 tasks / month". Numbers carry credibility; don't pad with empty stats.
- **CTAs:** imperative and low-friction — "Get started free", "Start free trial",
  "Talk to sales". Reassurance sits right under the button: "Free forever plan",
  "No credit card".
- **Emoji:** not part of the brand voice. A single check glyph (✓) appears as a
  utility marker in lists / success states — that's the ceiling.
- **Vibe:** calm competence. Mature, not loud. Never salesy, never cute.

---

## Visual foundations

### Color
- **One accent, forever.** `--color-primary` `#ff4f00` (Zapier orange) is reserved
  for primary CTAs and the conversion signature. Never introduce a second
  chromatic accent.
- **Warm canvas.** `--color-canvas` `#fffefb` is cream, *not* pure white. The
  temperature is the brand. `--color-canvas-soft` `#f8f4f0` is the card surface.
- **Coffee ink.** `--color-ink` `#201515` is deep coffee, *not* pure black. The
  brown-warmth carries through the entire text ladder: ink → ink-soft → ink-mid →
  body → body-mid → mute. **No neutral is cool grey.**

### Type
- **Two faces, two roles.** Mona Sans (Degular substitute) weight 500 for hero +
  display + eyebrow; Inter (400/500/600/700) for sub-display, body, buttons.
- **Positive tracking** of +1px on the 14px eyebrow is the signature label style.
- **Sentence case** for all display sizes; never uppercase a headline.

### Spacing & layout
- 4px base unit; tokens `xxs`(2) → `4xl`(64). Section bands use `4xl` (64px)
  top/bottom; cards use `xl` (24px) interior padding.
- Marketing container ~1280px, centered with gutters. Hero splits at desktop
  (headline left, illustration right) and stacks on mobile.

### Backgrounds & imagery
- **Flat color fields**, no gradients. Bands alternate between canvas `#fffefb`,
  canvas-soft `#f8f4f0`, and ink `#201515` (polarity-flip). At most two background
  colors per page plus the occasional dark band.
- Imagery is **illustrative**: zaps / workflow diagrams and product screenshots
  framed in 12px-radius cards. Photography is rare. No textures, no patterns, no
  grain.

### Corners, borders, elevation
- **12px (`--radius-md`)** is the canonical button + card radius — the brand's
  deliberate middle position between friendly-pill and technical-square. Inputs
  use the tighter 6px; badges/pills are fully rounded.
- **Elevation is carried by surface contrast and a 1px ink hairline, not shadow.**
  Level 0 flat (hero), Level 1 hairline (pricing chrome, outline buttons), Level 2
  soft card (cream fill on the cream-white page). Drop shadows are reserved, soft,
  and only for true overlays (modal, toast, dropdown).

### Cards
- Default card = `canvas-soft` cream fill, no border, no shadow — it reads as
  elevated purely against the slightly lighter page. The polarity-flipped **dark**
  card (coffee fill, warm-white text) is the emphasis variant. The **flat** card
  adds a 1px ink hairline on a canvas fill.

### Motion & states
- **Restrained.** Short ease transitions (~120–140ms) on background and opacity.
  No bounces, no infinite loops, no decorative motion.
- **Hover:** primary darkens (`--accent-hover`); ink/outline/text variants shift
  to a soft cream fill. **Press:** a subtle `scale(0.98)`.
- **Focus:** inputs lift their border to orange with a soft 3px orange ring.

---

## Iconography

- **No bundled icon font was provided.** The brand's own marks are the **spark**
  glyph (an orange four-point burst) in `assets/mark.svg`, and the wordmark
  lockups in `assets/logo.svg` (dark text) and `assets/logo-light.svg` (light
  text). These are original typographic/geometric marks, not a recreation of any
  proprietary logo.
- **For UI icons**, use a thin-to-medium stroke line set — **Lucide**
  (https://lucide.dev) is the recommended CDN match for this brand's clean,
  unfussy line style. Pull individual SVGs and tint them with `currentColor` so
  they inherit ink. *(Flagged substitution — swap for the brand's real icon set if
  one exists.)*
- **Emoji are not used** as iconography. The check glyph (✓) is the only unicode
  mark that appears, as a utility marker.
- App/partner logos in workflow illustrations are shown as generic lettered tiles
  in this system — replace with real partner marks when available.

---

## Index — what's in this project

### Foundations
- `styles.css` — **global entry point**; consumers link this one file.
- `tokens/fonts.css` — Mona Sans + Inter (Google Fonts).
- `tokens/colors.css` — brand, surface, ink ladder, semantic aliases.
- `tokens/typography.css` — families, weights, the full type ramp + `.t-*` classes.
- `tokens/spacing.css` — 4px spacing scale + container/section tokens.
- `tokens/shapes.css` — radius scale, borders, elevation/shadow tokens.

### Components (`components/`) — `window.OrangeZapierStyleDesignSystem_64b6be`
- `core/` — **Button**, **Eyebrow**, **Badge**
- `surfaces/` — **Card**
- `pricing/` — **PricingCard**
- `forms/` — **Input**

### UI kits (`ui_kits/`)
- `marketing/` — full Zapier-style marketing homepage (nav, hero, features,
  pricing, CTA, footer). Interactive email capture + pricing toggle.

### Specimen cards (`guidelines/`)
Foundation cards for the Design System tab: brand accent, surfaces, ink ladder,
display type, body type, eyebrow, spacing scale, radius, elevation, wordmark.

### Other
- `assets/` — logo + mark SVGs.
- `SKILL.md` — Agent-Skills entry point for downloadable use.

---

## Do / Don't

**Do** reserve orange for primary CTAs · keep the canvas warm cream · set hero
headlines in Mona Sans 500, sentence case · pair Mona Sans (display) with Inter
(everything) · use 12px radius for buttons + cards.

**Don't** use pure white or pure black · render CTAs as pills · introduce a second
accent color · uppercase a headline · substitute a cool geometric sans for the
display face.
