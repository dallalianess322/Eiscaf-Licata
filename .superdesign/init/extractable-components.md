# Extractable Components — Eiscafé Licata

Menu of patterns worth extracting as reusable Superdesign `DraftComponent`s when generating new drafts. Full source for each lives in `components.md` / `layouts.md`.

## Layout Components (appear on every page — there's only one page, but these are the persistent chrome)

## NavHeader
- Source: `index.html` (`<header class="site-nav">`, lines ~613–629)
- Category: layout
- Description: Fixed, blur-on-scroll top nav with two-tone logo, 4 anchor links, Instagram icon, mobile hamburger
- Extractable props: `activeSection` (string — none currently highlighted, could be added), `isScrolled` (boolean, currently driven by a scroll listener, not a prop)
- Hardcoded: logo text "Eiscafé Licata", nav link labels/anchors, Instagram URL, hamburger SVG icon

## SiteFooter
- Source: `index.html` (`<footer>`, lines ~813–827)
- Category: layout
- Description: Dark footer with logo repeat, Instagram + address links, copyright bar
- Extractable props: none dynamic — fully static content
- Hardcoded: all text, links, © year

## Basic Components (repeated patterns within the page)

## Button
- Source: `index.html` `.btn` / `.btn-primary` / `.btn-secondary` (lines ~80–105)
- Category: basic
- Description: Pill button, two variants (filled pistachio / outlined espresso)
- Extractable props: `variant` ("primary" | "secondary"), `label`, `href`
- Hardcoded: hover transform/shadow values, colors (tied to theme tokens, not per-instance)

## FlavorCard
- Source: `index.html` `.flavor-card` + `.flavor-scoop` + `.fc-*` + `.badge-saison` (lines ~338–424)
- Category: basic
- Description: Horizontally-scrolling gelato-flavor card — colored scoop swatch, name, description, optional seasonal badge
- Extractable props: `swatchColor`/`swatchClass`, `name`, `description`, `seasonal` (boolean)
- Hardcoded: hover shine-sweep animation, scroll-reveal mechanics, all 8 current flavor entries' copy

## ReviewCard
- Source: `index.html` `.review-card` (lines ~476–487)
- Category: basic
- Description: Testimonial card — star rating, quote, attribution
- Extractable props: `stars` (currently always 5, hardcoded ★★★★★ string), `quote`, `author`
- Hardcoded: card chrome (radius/shadow/padding), scroll-reveal mechanics

## FactTile
- Source: `index.html` `.fact` (inside `.about-facts`, lines ~448–467)
- Category: basic
- Description: Small stat/claim tile in a 3-up grid
- Extractable props: `value` (e.g. "100%", "Saisonal", "Familiär"), `label`
- Hardcoded: tile chrome, grid layout

## PhotoTile
- Source: `index.html` `.impression-photo` / `.about-art` (lines ~303–314, ~433–446)
- Category: basic
- Description: Rounded, shadowed image container with `object-fit: cover`; used for both the product photo and the owner photo, each with a different aspect-ratio
- Extractable props: `src`, `alt`, `aspectRatio` (currently 4/5 vs 4/3 per usage), `gradientFallback` (the `.about-art` variant has a gradient bg behind the img as a load-fallback)
- Hardcoded: border-radius/shadow tokens

## HoursCard
- Source: `index.html` `.hours-card` (lines ~505–530)
- Category: basic
- Description: Contrast-color panel with hours table, address block, payment note
- Extractable props: `hours` (array of {day, time}), `address` (lines), `paymentNote` (string)
- Hardcoded: panel chrome, "Öffnungszeiten"/"Adresse" headings

## SectionHead
- Source: `index.html` `.section-head` pattern (eyebrow + h2 + optional lead paragraph), repeated in `.flavors`, `.reviews`
- Category: basic
- Description: Standard section intro block — eyebrow label, heading, optional lead paragraph
- Extractable props: `eyebrow`, `heading`, `lead` (optional)
- Hardcoded: spacing (`max-width: 640px; margin-bottom: 48px`)

## Not extracted (one-off / bespoke)
- Hero scoop-stack animation (`.cup-scene`, `.waffle-cup`, `.scoop-1/2/3`, `.float-badge`) — highly bespoke keyframe choreography, not a reusable pattern
- Google Maps `.map-frame` embed — single instance
