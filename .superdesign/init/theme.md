# Theme — Eiscafé Licata ("Sizilianisches Gelato")

## Part 1 — Compact token summary

**Color palette** (defined in `:root`, no dark mode variant — light theme only):

| Token | Value | Role |
|---|---|---|
| `--pistazie` | `#A8C256` | Primary accent — buttons, highlights, scrollbar |
| `--zitrone` | `#F4C430` | Secondary accent — badges, dark-section eyebrows, stars |
| `--espresso` | `#3B2A21` | Primary text, dark section backgrounds (flavors, footer) |
| `--latte` | `#FBF8F2` | Page background, text-on-dark |
| `--erdbeer` | `#E8637A` | Tertiary accent — logo, emphasis text (`h1 em`), hover states |
| `--sizilien-blau` | `#1E5B7A` | Contrast sections (hours card), eyebrow text |
| `--text-muted` | `#5a463a` | Muted body copy |
| `--espresso-rgb` | `59, 42, 33` | Raw RGB triplet for `rgba(var(--espresso-rgb), alpha)` uses |

Additional literal colors used inline (not tokenized): `#4a362a` (flavor-card bg), `#d8cabf` (flavors lead text), `#cbb9ad` (flavor-card body / footer text), `#f2ede3`/`#b5793f`/`#f5a52c`/`#c17a3d`/`#d8b98a` (flavor swatch colors `.fc-*`), `#4a382e` (review quote text), `#7a6a5e` (fact label text), `#d7e6ec` (payment note text), `#d9a56b`/`#c68f50` (waffle-cone stripes).

**Typography:**
- Display (`--font-display`): `'Pacifico', cursive` — handwritten/brush style, used for all `h1/h2/h3` and the logo
- Body (`--font-body`): `'Quicksand', sans-serif` — weights 500/600/700 loaded
- Utility (`--font-utility`): `'Space Mono', monospace` — weights 400/700 — used for eyebrows, nav pin, badges, prices/hours table, review author

Loaded via Google Fonts with a non-render-blocking pattern (`media="print"` + `onload` swap, `<noscript>` fallback).

**Spacing / shape scale:**
- `--radius-lg`: 28px (cards: photo blocks, hours card, about-art)
- `--radius-md`: 18px (flavor-card, review-card, fact tile)
- Pill/circle radius: `999px` (buttons, badges, nav-ig icon)
- `--container`: 1180px max-width for `.wrap`
- Section vertical rhythm: `padding: 96px 0` desktop → `64px 0` at ≤900px

**Shadows:**
- `--shadow-soft`: `0 12px 30px rgba(var(--espresso-rgb), 0.12)` — the one shadow token, reused everywhere (cards, buttons' base state uses bespoke rgba(pistazie) shadows instead, see raw dump)

**Motion tokens:**
- `--reveal-distance`: 28px (scroll-reveal translateY starting offset)
- `--reveal-duration`: 0.7s (scroll-reveal fade/slide duration)
- Respects `prefers-reduced-motion: reduce` globally (see raw dump)

**Breakpoint:** single breakpoint at `900px` (mobile nav + all grid layouts collapse to 1 column below it).

---

## Part 2 — Raw source dumps

### `:root` tokens (from `index.html`)

```css
:root {
  --pistazie: #A8C256;
  --zitrone: #F4C430;
  --espresso: #3B2A21;
  --latte: #FBF8F2;
  --erdbeer: #E8637A;
  --sizilien-blau: #1E5B7A;

  --font-display: 'Pacifico', cursive;
  --font-body: 'Quicksand', sans-serif;
  --font-utility: 'Space Mono', monospace;

  --radius-lg: 28px;
  --radius-md: 18px;
  --espresso-rgb: 59, 42, 33;
  --shadow-soft: 0 12px 30px rgba(var(--espresso-rgb), 0.12);
  --container: 1180px;
  --text-muted: #5a463a;
  --reveal-distance: 28px;
  --reveal-duration: 0.7s;
}
```

### Font loading (in `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap">
<link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
<noscript><link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"></noscript>
```

### Base element rules

```css
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  margin: 0;
  background: var(--latte);
  color: var(--espresso);
  font-family: var(--font-body);
  font-weight: 500;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

img, svg { max-width: 100%; display: block; }
a { color: inherit; }

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 400;
  line-height: 1.15;
  margin: 0 0 0.4em;
}

.eyebrow {
  font-family: var(--font-utility);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.78rem;
  color: var(--sizilien-blau);
  font-weight: 700;
  margin: 0 0 0.6em;
}

.wrap {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 24px;
}

section { position: relative; padding: 96px 0; }
```

### Reduced-motion override (global — respect when generating new animated UI)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
  .waffle-cup, .scoop, .float-badge, .flavor-card, .review-card, .reveal {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

### Responsive breakpoint (900px)

```css
@media (max-width: 900px) {
  nav.links { display: none; }
  .nav-toggle { display: inline-flex; /* ... */ }
  nav.links.open { display: flex; flex-direction: column; position: absolute; top: 64px; left: 0; right: 0; background: var(--latte); padding: 20px 24px; gap: 18px; box-shadow: var(--shadow-soft); }
  .hero .wrap { grid-template-columns: 1fr; }
  .hero-visual { height: 360px; order: -1; }
  .about .wrap { grid-template-columns: 1fr; }
  .impression-grid { grid-template-columns: 1fr; }
  .about-facts { grid-template-columns: 1fr 1fr; }
  .review-grid { grid-template-columns: 1fr; }
  .location .wrap { grid-template-columns: 1fr; }
  section { padding: 64px 0; }
}
```

No Tailwind config, no CSS-in-JS, no component library — everything is hand-written vanilla CSS in one `<style>` block inside `index.html`.
