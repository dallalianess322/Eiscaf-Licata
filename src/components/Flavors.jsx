import { useEffect, useRef } from 'react';

const FLAVORS = [
  { name: 'Pistazie', desc: 'Cremig, nussig, ein Klassiker', swatch: 'fc-pistazie' },
  { name: 'Zitrone-Basilikum', desc: 'Erfrischend und sommerlich', swatch: 'fc-zitrone', seasonal: true },
  { name: 'Erdbeer-Joghurt', desc: 'Fruchtig mit leichter Säure', swatch: 'fc-erdbeer' },
  { name: 'Stracciatella', desc: 'Zartschmelzend mit Schokosplittern', swatch: 'fc-stracciatella' },
  { name: 'Haselnuss', desc: 'Geröstet und vollmundig', swatch: 'fc-haselnuss' },
  { name: 'Mango-Maracuja', desc: 'Tropisch und fruchtig-frisch', swatch: 'fc-mango', seasonal: true },
  { name: 'Karamell-Meersalz', desc: 'Süß trifft würzig', swatch: 'fc-karamell' },
  { name: 'Tiramisu', desc: 'Italienischer Kaffeegenuss', swatch: 'fc-tiramisu' },
];

export default function Flavors({ reducedMotion }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const flavorScroll = scrollRef.current;
    if (reducedMotion || !flavorScroll) return;

    const cards = [...flavorScroll.querySelectorAll('.flavor-card')];
    let cardMids = [];
    const measureCards = () => {
      cardMids = cards.map((card) => card.offsetLeft + card.offsetWidth / 2);
    };
    measureCards();
    window.addEventListener('resize', measureCards, { passive: true });

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const mid = flavorScroll.scrollLeft + flavorScroll.clientWidth / 2;
        cards.forEach((card, i) => {
          const dist = Math.abs(mid - cardMids[i]);
          const offset = Math.min(dist / 18, 10) - 6;
          card.style.setProperty('--py', `${offset}px`);
        });
        ticking = false;
      });
    };
    flavorScroll.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', measureCards);
      flavorScroll.removeEventListener('scroll', onScroll);
    };
  }, [reducedMotion]);

  return (
    <section className="flavors" id="sorten">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="eyebrow">Unsere Sorten</p>
          <h2>Jede Woche neue Lieblinge</h2>
          <p className="section-lead">Von klassischer Pistazie bis zur Sorte der Saison – bei uns wird jede Kugel frisch von Hand gerührt. Scroll durch und lass dich inspirieren.</p>
        </div>
        <div className="flavor-scroll" ref={scrollRef}>
          {FLAVORS.map((flavor) => (
            <div className="flavor-card" key={flavor.name}>
              <div className={`flavor-scoop ${flavor.swatch}`} />
              <h3>{flavor.name}</h3>
              <p>{flavor.desc}</p>
              {flavor.seasonal && <span className="badge-saison">Saisonal</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
