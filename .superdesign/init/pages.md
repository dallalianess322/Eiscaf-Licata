# Pages — Eiscafé Licata

Only one page. Since there's no component-file architecture, the "dependency tree" is the page's own section structure plus its external assets (fonts, images, embeds) and the inline `<script>` behavior — everything lives in the single `index.html`.

## / (the whole site)

Entry: `index.html`

Dependencies (external, not local files):
- Google Fonts: Pacifico, Quicksand (500/600/700), Space Mono (400/700) — loaded non-render-blocking
- `images/eis-becher.jpg` — real product photo (gelato cone), used in `.impression`
- `images/inhaber.jpg` — real photo of the owner in front of the shop, used in `.about-art`
- Google Maps embed iframe (`https://www.google.com/maps?q=...&output=embed`) — no API key, static query string, used in `.location`

Section tree (in DOM order):

```
index.html
- <header class="site-nav"> (fixed, see layouts.md)
  - logo, nav links (#sorten/#ueberuns/#bewertungen/#standort), Instagram icon, mobile hamburger
- <main id="top">
  - <section class="hero">
    - hero-copy: pin badge, h1, lead paragraph, 2 CTA buttons
    - hero-visual: CSS/DOM-built "scoop stack" animation (waffle-cup + 3 .scoop divs, staggered keyframe drop-in) + floating badge
  - <section class="impression"> (no id, no nav entry)
    - impression-text: eyebrow, h2, paragraph
    - impression-photo: images/eis-becher.jpg
  - <section class="flavors" id="sorten">
    - section-head: eyebrow, h2, lead paragraph
    - flavor-scroll (horizontal scroll-snap container): 8x .flavor-card (Pistazie, Zitrone-Basilikum*, Erdbeer-Joghurt, Stracciatella, Haselnuss, Mango-Maracuja*, Karamell-Meersalz, Tiramisu — * = "Saisonal" badge)
  - <section class="about" id="ueberuns">
    - about-art: images/inhaber.jpg
    - about-copy: eyebrow, h2, 2 paragraphs, 3 .fact tiles (100% / Saisonal / Familiär)
  - <section class="reviews" id="bewertungen">
    - section-head: eyebrow, h2
    - review-grid: 3x .review-card (stars, quote, author)
  - <section class="location" id="standort">
    - map-frame: Google Maps iframe
    - hours-card: eyebrow, "Öffnungszeiten" table (Mo / Di–So), address-block, payment-note
- <footer>
  - logo repeat, footer-links (Instagram, address anchor), footer-bottom (copyright, tagline)
- <script> (inline, end of body)
  - nav scroll-shadow toggle (state-guarded)
  - mobile nav open/close
  - IntersectionObserver-based scroll-reveal for `.reveal`, `.flavor-card`, `.review-card`
  - horizontal-scroll parallax for flavor cards (writes `--py` custom property per card; skipped under `prefers-reduced-motion`)
```

This is the only page — prioritization/ordering guidance from the init template doesn't apply (no 10-page ranking needed).
