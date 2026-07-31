# Design System — Eiscafé Licata

## Product context

Eiscafé Licata is a family-run Italian gelateria in Wolfsburg, Germany. One-page marketing site (no app, no login, no e-commerce) whose job is: convey warmth/craft, show the flavor range, tell the family story, surface reviews, and get a visitor to the shop (address + hours are the conversion goal). Tone: einladend, sommerlich, unaufgeregt-charmant — inviting, summery, unhurried-charming. No corporate feel.

Key pages: single page (`/`), see `.superdesign/init/routes.md` for the section map.

## Branding & styling

**Concept name:** "Sizilianisches Gelato" (Sicilian gelato).

**Color palette** (light theme only, no dark mode):

| Token | Hex | Role |
|---|---|---|
| Pistazie | `#A8C256` | Primary accent (buttons, highlights) |
| Zitrone | `#F4C430` | Secondary accent (badges, dark-bg eyebrows, stars) |
| Espresso | `#3B2A21` | Primary text / dark section backgrounds |
| Latte | `#FBF8F2` | Page background / text-on-dark |
| Erdbeer | `#E8637A` | Tertiary accent (logo, emphasis) |
| Sizilien-Blau | `#1E5B7A` | Contrast panels (hours card) |

Full compact token summary + raw CSS: `.superdesign/init/theme.md` (read that file for the complete `:root` dump, spacing/radius/shadow scale, and responsive breakpoint).

**Typography:**
- Display (headlines, logo): `Pacifico` — handwritten/brush, gelateria-signage character
- Body: `Quicksand` (500/600/700) — rounded, friendly sans
- Utility (eyebrows, hours, prices, review attribution): `Space Mono`

**Layout structure:** single scrolling page, `max-width: 1180px` centered container, section rhythm `96px` vertical padding (`64px` on mobile), one breakpoint at `900px`.

**Shape language:** large soft radii (`28px` cards, `18px` smaller cards, pill/circle for buttons+badges), soft warm shadow (`0 12px 30px rgba(59,42,33,0.12)`), no hard edges.

## Motion / animation patterns

- **Hero signature moment**: a hand-choreographed "scoop stack" — 3 CSS circles (scoops) drop/bounce into a waffle-cone shape on load, staggered ~0.3s apart, `cubic-bezier(.34,1.56,.64,1)` overshoot easing for a playful bounce; a floating badge fades in after and gently bobs (`floatY` keyframe, infinite).
- **Scroll reveal**: sections/cards fade + translateY(28px→0) in on first intersection (IntersectionObserver, threshold 0.18), 0.7s ease, never re-triggered.
- **Card hover**: lift (`translateY(-8px)`) + shadow growth + a diagonal light-sweep (`::before` gradient translateX) + the flavor "scoop" swatch squashes slightly (mimics melting/settling).
- **Flavor gallery parallax**: horizontal-scroll-driven subtle vertical wobble on cards (JS writes a `--py` custom property consumed by the card's transform, composed with the hover lift so they never fight).
- **Reduced motion**: everything above is disabled/flattened under `prefers-reduced-motion: reduce` — this must always be preserved in any new motion work.

Overall motion feel: playful but restrained — one clear "wow" moment (hero), everything else is quiet/functional polish. Avoid motion overload; keep effects tasteful, not gimmicky, and never block content from being readable while animating.

## Specific project requirements

- Real photography now exists and should be treated as first-class, not a placeholder: `images/eis-becher.jpg` (product/gelato cone shot) and `images/inhaber.jpg` (owner in front of the shop) — both currently used at moderate crops (4:5 and 4:3). Any redesign should treat these photos with a professional, appetizing food/lifestyle-photography sensibility — think warm color grading, good crop/framing, subtle shadow/vignette — not the flat, un-retouched treatment they currently get.
- Practical info (address, hours, Instagram) must stay easy to find — this is a local-business site, not a brand experiment.
- A small non-marketing note about card payments (min. €10) belongs in the contact/location area only, never in hero/marketing copy.
- No fabricated review quotes beyond what's already written (plausible, general phrasing only).
- Keep the existing "Sizilianisches Gelato" palette/type system as the brand identity — the goal of the current iteration is to elevate the EXECUTION (richer effects, more professional photo treatment, more polished section layouts) while staying visually recognizable as the same brand, not to invent a new visual identity.
