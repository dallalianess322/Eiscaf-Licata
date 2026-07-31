# Routes — Eiscafé Licata

No router, no framework, no multi-page structure. This is a single static HTML file (`index.html`) served as-is (deployed on Netlify: https://eiscafe-licata.netlify.app), also mirrored on GitHub (`dallalianess322/Eiscaf-Licata`, branch `claude/eiscafe-licata-website-lkq1z1`).

## The one "route"

| Path | File | Notes |
|---|---|---|
| `/` | `index.html` | The entire site — one scrollable page |

## In-page sections (anchor-linked, not real routes)

Nav links and CTAs point to `id` anchors within the same document via `scroll-behavior: smooth`:

| Anchor | `id` | Section | Content summary |
|---|---|---|---|
| (implicit) | `#top` | `<main id="top">` wrapper / hero | Headline, lead copy, 2 CTAs, animated scoop-stack illustration |
| — | *(none)* | `.impression` | Real product photo + short copy line (new section, no nav entry) |
| Sorten | `#sorten` | `.flavors` | Section head + horizontally-scrolling gallery of 8 flavor cards |
| Über uns | `#ueberuns` | `.about` | Owner photo + story copy + 3 fact tiles |
| Bewertungen | `#bewertungen` | `.reviews` | Section head + 3 testimonial cards |
| Standort | `#standort` | `.location` | Google Maps embed + hours/address/payment-note card |
| (footer, not in nav) | — | `<footer>` | Logo repeat, Instagram + address links, copyright bar |

Section order top→bottom: Hero → Impression → Flavors → About → Reviews → Location → Footer.

No client-side routing library, no history API usage, no query-param-driven views.
