# Components — Eiscafé Licata

No component library / no framework — these are vanilla HTML+CSS patterns reused across `index.html`. Full source included for each.

## Button (`.btn`, `.btn-primary`, `.btn-secondary`)

```html
<a href="#standort" class="btn btn-primary">Öffnungszeiten ansehen</a>
<a href="#sorten" class="btn btn-secondary">Sorten entdecken</a>
```

```css
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-body); font-weight: 700; font-size: 1rem;
  padding: 14px 28px; border-radius: 999px; border: 2px solid transparent;
  cursor: pointer; text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}
.btn-primary { background: var(--pistazie); color: var(--espresso); box-shadow: 0 8px 20px rgba(168, 194, 86, 0.45); }
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 26px rgba(168, 194, 86, 0.55); }
.btn-secondary { background: transparent; border-color: var(--espresso); color: var(--espresso); }
.btn-secondary:hover { background: var(--espresso); color: var(--latte); transform: translateY(-3px); }
```

## Eyebrow label (`.eyebrow`)

Small uppercase monospace kicker used above every section heading.

```html
<p class="eyebrow">Unsere Sorten</p>
```

```css
.eyebrow {
  font-family: var(--font-utility);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.78rem;
  color: var(--sizilien-blau);
  font-weight: 700;
  margin: 0 0 0.6em;
}
/* context overrides: on dark bg (.flavors, .location) it becomes var(--zitrone) */
.flavors .eyebrow, .location .eyebrow { color: var(--zitrone); }
```

## Section head (`.section-head`)

```html
<div class="section-head reveal">
  <p class="eyebrow">Unsere Sorten</p>
  <h2>Jede Woche neue Lieblinge</h2>
  <p class="section-lead">…</p>
</div>
```

```css
.section-head { max-width: 640px; margin-bottom: 48px; }
```

## Flavor card (`.flavor-card`)

Horizontally-scrolling card with a colored "scoop" swatch, name, description, optional seasonal badge. Includes scroll-reveal state, hover lift (composed with a JS-driven horizontal-scroll parallax via the `--py` custom property), and a diagonal shine sweep on hover.

```html
<div class="flavor-card">
  <div class="flavor-scoop fc-pistazie"></div>
  <h3>Pistazie</h3>
  <p>Cremig, nussig, ein Klassiker</p>
</div>
<div class="flavor-card">
  <div class="flavor-scoop fc-zitrone"></div>
  <h3>Zitrone-Basilikum</h3>
  <p>Erfrischend und sommerlich</p>
  <span class="badge-saison">Saisonal</span>
</div>
```

```css
.flavor-card {
  --py: 0px;
  scroll-snap-align: start;
  flex: 0 0 240px;
  background: #4a362a;
  border-radius: var(--radius-md);
  padding: 22px;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(calc(var(--reveal-distance) + 8px)) translateY(var(--py));
  transition: opacity var(--reveal-duration) ease, transform var(--reveal-duration) ease, box-shadow 0.35s ease;
}
.flavor-card.is-visible { opacity: 1; transform: translateY(var(--py)); }
.flavor-card:hover { box-shadow: 0 18px 34px rgba(0,0,0,0.35); transform: translateY(calc(var(--py) - 8px)); will-change: transform; }
.flavor-card::before {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.18) 45%, transparent 60%);
  transform: translateX(-120%); transition: transform 0.7s ease; pointer-events: none;
}
.flavor-card:hover::before { transform: translateX(120%); }

.flavor-scoop {
  width: 88px; height: 88px; border-radius: 50%; margin: 0 auto 18px;
  box-shadow: inset -10px -12px 20px rgba(0,0,0,0.18);
  position: relative; transition: transform 0.4s ease, border-radius 0.4s ease;
}
.flavor-card:hover .flavor-scoop { transform: translateY(3px) scaleX(1.06) scaleY(0.94); border-radius: 50% 50% 46% 46%; }
.flavor-scoop::after {
  content: ""; position: absolute; top: 16%; left: 22%; width: 26%; height: 20%;
  background: rgba(255,255,255,0.5); border-radius: 50%; filter: blur(3px);
}
/* swatch color variants */
.fc-pistazie { background: var(--pistazie); }
.fc-zitrone { background: var(--zitrone); }
.fc-erdbeer { background: var(--erdbeer); }
.fc-stracciatella { background: #f2ede3; }
.fc-haselnuss { background: #b5793f; }
.fc-mango { background: #f5a52c; }
.fc-karamell { background: #c17a3d; }
.fc-tiramisu { background: #d8b98a; }

.flavor-card h3 { font-family: var(--font-body); font-weight: 700; font-size: 1.08rem; text-align: center; margin: 0 0 6px; color: var(--latte); }
.flavor-card p { text-align: center; font-size: 0.88rem; color: #cbb9ad; margin: 0; }
```

### Seasonal badge (`.badge-saison`)

```css
.badge-saison {
  position: absolute; top: 14px; right: 14px;
  font-family: var(--font-utility); font-size: 0.65rem;
  background: var(--zitrone); color: var(--espresso);
  padding: 4px 9px; border-radius: 999px; font-weight: 700; letter-spacing: 0.03em;
}
```

## Review card (`.review-card`)

```html
<div class="review-card">
  <div class="review-stars">★★★★★</div>
  <p class="quote">„Freundliches Team, große Auswahl …"</p>
  <div class="review-author">— Familie aus Wolfsburg</div>
</div>
```

```css
.review-card {
  background: #fff; border-radius: var(--radius-md); padding: 28px; box-shadow: var(--shadow-soft);
  opacity: 0; transform: translateY(var(--reveal-distance));
  transition: opacity var(--reveal-duration) ease, transform var(--reveal-duration) ease;
}
.review-card.is-visible { opacity: 1; transform: translateY(0); } /* shared with .reveal.is-visible */
.review-stars { color: var(--zitrone); font-size: 1rem; letter-spacing: 2px; margin-bottom: 12px; }
.review-card p.quote { font-size: 1rem; color: #4a382e; margin: 0 0 16px; }
.review-author { font-family: var(--font-utility); font-size: 0.82rem; color: var(--sizilien-blau); }
```

## Fact tile (`.fact`)

Small stat tile used in a 3-column grid under the About copy.

```html
<div class="fact"><strong>100%</strong><span>von Hand gerührt</span></div>
```

```css
.about-facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 32px; }
.fact { background: #fff; border-radius: var(--radius-md); padding: 18px; box-shadow: var(--shadow-soft); text-align: center; }
.fact strong { display: block; font-family: var(--font-display); font-size: 1.6rem; color: var(--erdbeer); }
.fact span { font-size: 0.85rem; color: #7a6a5e; }
```

## Photo tile (`.impression-photo`, `.about-art`, `.map-frame`)

Recurring pattern: rounded-corner box, `overflow:hidden`, `box-shadow: var(--shadow-soft)`, image or iframe filling it via `object-fit:cover` (or 100%/100% for iframe). Three instances with different aspect ratios: `.impression-photo` (4/5), `.about-art` (4/3), `.map-frame` (4/3.4, plus a 6px white border since it sits on a light bg next to the dark hours card).

```css
.impression-photo { border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-soft); aspect-ratio: 4 / 5; }
.impression-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }

.about-art { position: relative; aspect-ratio: 4 / 3; border-radius: var(--radius-lg); background: linear-gradient(160deg, var(--pistazie), var(--zitrone) 60%, var(--erdbeer)); overflow: hidden; box-shadow: var(--shadow-soft); }
.about-art img { width: 100%; height: 100%; object-fit: cover; display: block; }

.map-frame { border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-soft); border: 6px solid #fff; aspect-ratio: 4 / 3.4; }
.map-frame iframe { width: 100%; height: 100%; border: 0; }
```

## Hours card (`.hours-card`)

Contrast (blue) panel: eyebrow, heading, a 2-row hours table, an address block, and a small payment-method note.

```css
.hours-card { background: var(--sizilien-blau); color: var(--latte); border-radius: var(--radius-lg); padding: 32px; box-shadow: var(--shadow-soft); }
.hours-card h3 { font-family: var(--font-body); font-weight: 700; font-size: 1.2rem; margin-bottom: 18px; }
.address-block h3 { margin-bottom: 8px; }
table.hours { width: 100%; border-collapse: collapse; font-family: var(--font-utility); font-size: 0.95rem; }
table.hours td { padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.15); }
table.hours td:last-child { text-align: right; }
.address-block { margin-top: 26px; padding-top: 22px; border-top: 1px solid rgba(255,255,255,0.2); }
.address-block p { margin: 4px 0; }
.payment-note { margin-top: 22px; font-size: 0.85rem; color: #d7e6ec; background: rgba(255,255,255,0.08); padding: 12px 16px; border-radius: 12px; }
```

## Scroll-reveal utility (`.reveal`)

Generic fade+slide-in-on-scroll utility class, IntersectionObserver-driven (see `pages.md` for the JS). `.flavor-card`/`.review-card` implement the same pattern inline (see above) rather than using this class directly, but share the same `--reveal-distance`/`--reveal-duration` tokens.

```css
.reveal { opacity: 0; transform: translateY(var(--reveal-distance)); transition: opacity var(--reveal-duration) ease, transform var(--reveal-duration) ease; }
.reveal.is-visible, .review-card.is-visible { opacity: 1; transform: translateY(0); }
```
