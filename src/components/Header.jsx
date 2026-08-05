import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#sorten', label: 'Sorten' },
  { href: '#ueberuns', label: 'Über uns' },
  { href: '#bewertungen', label: 'Bewertungen' },
  { href: '#standort', label: 'Standort' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let isScrolled = false;
    const onScroll = () => {
      const shouldBeScrolled = window.scrollY > 12;
      if (shouldBeScrolled !== isScrolled) {
        isScrolled = shouldBeScrolled;
        setScrolled(shouldBeScrolled);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-nav${scrolled ? ' scrolled' : ''}`} id="siteNav">
      <div className="nav-inner">
        <a href="#top" className="logo">Eiscafé <span>Licata</span></a>
        <button
          className="nav-toggle"
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M0 1H20M0 7H20M0 13H20" stroke="#3B2A21" strokeWidth="2" /></svg>
        </button>
        <nav className={`links${menuOpen ? ' open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="nav-ig"
            href="https://instagram.com/eiscafe_licata"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /></svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
