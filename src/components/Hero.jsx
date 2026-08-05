import { useRef } from 'react';
import useMagneticHover from '../hooks/useMagneticHover.js';

const CONFETTI_COLORS = ['var(--pistazie)', 'var(--erdbeer)', 'var(--zitrone)', 'var(--sizilien-blau)'];

function burstConfetti(originX, originY) {
  const count = 14;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.5 - 0.25);
    const dist = 60 + Math.random() * 50;
    piece.style.left = `${originX}px`;
    piece.style.top = `${originY}px`;
    piece.style.setProperty('--tx', `${(Math.cos(angle) * dist).toFixed(0)}px`);
    piece.style.setProperty('--ty', `${(Math.sin(angle) * dist - 20).toFixed(0)}px`);
    piece.style.setProperty('--rot', `${(Math.random() * 360 - 180).toFixed(0)}deg`);
    piece.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    document.body.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove());
  }
}

export default function Hero({ reducedMotion }) {
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);
  useMagneticHover(primaryRef, reducedMotion);
  useMagneticHover(secondaryRef, reducedMotion);

  const handleCtaClick = (e) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    burstConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
  };

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <span className="pin">📍 Wiesenstraße 1 · 38448 Wolfsburg</span>
          <h1>Finde deine <em>Lieblingssorte.</em></h1>
          <p className="lead">Handgemachtes Eis, jeden Tag frisch gerührt – mit italienischer Seele und wechselnden Sorten der Saison, mitten in Wolfsburg.</p>
          <div className="hero-actions">
            <a ref={primaryRef} href="#standort" className="btn btn-primary">Öffnungszeiten ansehen</a>
            <a ref={secondaryRef} href="#sorten" className="btn btn-secondary" id="cta-sorten" onClick={handleCtaClick}>Sorten entdecken</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="cup-scene playing">
            <div className="float-badge">handgemacht ✦ täglich frisch</div>
            <span className="impact impact-1" />
            <span className="impact impact-2" />
            <span className="impact impact-3" />
            <span className="sparkle sparkle-1" />
            <span className="sparkle sparkle-2" />
            <span className="sparkle sparkle-3" />
            <span className="sparkle sparkle-4" />
            <div className="scoop scoop-3" />
            <div className="scoop scoop-2" />
            <div className="scoop scoop-1" />
            <div className="waffle-cup" />
          </div>
        </div>
      </div>
    </section>
  );
}
