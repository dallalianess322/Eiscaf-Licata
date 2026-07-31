# Layouts — Eiscafé Licata

Single static page (`index.html`), no framework/router, so "layout" = the two chrome pieces that wrap the page content: the fixed header/nav and the footer. Both are hand-written HTML with inline vanilla CSS/JS (no separate files).

## Header / Nav

Fixed, blurred/translucent on scroll, contains: brand wordmark (two-tone, display font), 4 anchor links to in-page sections, an Instagram icon button, and a hamburger toggle that appears ≤900px.

**File:** `index.html` lines ~613–629 (HTML), ~107–163 (CSS), ~830–851 (JS behavior)

```html
<header class="site-nav" id="siteNav">
  <div class="nav-inner">
    <a href="#top" class="logo">Eiscafé <span>Licata</span></a>
    <button class="nav-toggle" id="navToggle" aria-label="Menü öffnen" aria-expanded="false">
      <svg width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M0 1H20M0 7H20M0 13H20" stroke="#3B2A21" stroke-width="2"/></svg>
    </button>
    <nav class="links" id="navLinks">
      <a href="#sorten">Sorten</a>
      <a href="#ueberuns">Über uns</a>
      <a href="#bewertungen">Bewertungen</a>
      <a href="#standort">Standort</a>
      <a class="nav-ig" href="https://instagram.com/eiscafe_licata" target="_blank" rel="noopener" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>
      </a>
    </nav>
  </div>
</header>
```

```css
header.site-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(251, 248, 242, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(var(--espresso-rgb), 0.08);
  transition: box-shadow 0.3s ease;
}
header.site-nav.scrolled { box-shadow: 0 6px 20px rgba(var(--espresso-rgb), 0.08); }
.nav-inner {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 24px; max-width: var(--container); margin: 0 auto;
}
.logo { font-family: var(--font-display); font-size: 1.5rem; color: var(--erdbeer); text-decoration: none; white-space: nowrap; }
.logo span { color: var(--sizilien-blau); }
nav.links { display: flex; gap: 28px; align-items: center; }
nav.links a { text-decoration: none; font-weight: 600; font-size: 0.95rem; color: var(--espresso); position: relative; padding: 4px 0; }
nav.links a::after { content: ""; position: absolute; left: 0; bottom: -2px; width: 0%; height: 2px; background: var(--erdbeer); transition: width 0.25s ease; }
nav.links a:hover::after { width: 100%; }
.nav-ig { display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: var(--espresso); color: var(--latte); transition: background 0.25s ease, transform 0.25s ease; }
.nav-ig:hover { background: var(--erdbeer); transform: rotate(-8deg) scale(1.05); }
.nav-toggle { display: none; }

/* ≤900px */
.nav-toggle {
  display: inline-flex; align-items: center; justify-content: center;
  width: 40px; height: 40px; border-radius: 10px; border: none;
  background: rgba(var(--espresso-rgb), 0.08); cursor: pointer;
}
nav.links.open {
  display: flex; flex-direction: column;
  position: absolute; top: 64px; left: 0; right: 0;
  background: var(--latte); padding: 20px 24px; gap: 18px;
  box-shadow: var(--shadow-soft);
}
```

Behavior (JS): adds `.scrolled` class past 12px scroll (guarded, only toggles on state change); hamburger toggles `.open` on `#navLinks` and flips `aria-expanded`; any nav link click closes the mobile menu.

## Footer

Dark (espresso bg), two-tone logo repeat, Instagram + address links, bottom bar with copyright + tagline.

**File:** `index.html` lines ~813–827 (HTML), ~532–557 (CSS)

```html
<footer>
  <div class="wrap">
    <div class="footer-inner">
      <a href="#top" class="logo">Eiscafé <span>Licata</span></a>
      <div class="footer-links">
        <a href="https://instagram.com/eiscafe_licata" target="_blank" rel="noopener">@eiscafe_licata</a>
        <a href="#standort">Wiesenstraße 1, 38448 Wolfsburg</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Eiscafé Licata · Wolfsburg</span>
      <span>Handgemacht mit 🍨 in Wolfsburg</span>
    </div>
  </div>
</footer>
```

```css
footer { background: var(--espresso); color: #cbb9ad; padding: 56px 0 28px; }
.footer-inner { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 24px; }
footer .logo { color: var(--zitrone); }
footer .logo span { color: var(--erdbeer); }
.footer-links { display: flex; gap: 20px; align-items: center; }
.footer-bottom { margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.8rem; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
```

No sidebar, no breadcrumb — this is a marketing one-pager, header + footer are the only persistent chrome.
