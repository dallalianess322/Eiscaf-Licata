import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Impression from './components/Impression.jsx';
import Flavors from './components/Flavors.jsx';
import About from './components/About.jsx';
import Reviews from './components/Reviews.jsx';
import Location from './components/Location.jsx';
import Footer from './components/Footer.jsx';
import useReducedMotion from './hooks/useReducedMotion.js';

export default function App() {
  const reducedMotion = useReducedMotion();

  // Scroll reveal for cards & sections (same shared observer as the original site)
  useEffect(() => {
    const revealTargets = document.querySelectorAll('.reveal, .flavor-card, .review-card');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );
    revealTargets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main id="top">
        <Hero reducedMotion={reducedMotion} />
        <Impression />
        <Flavors reducedMotion={reducedMotion} />
        <About />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </>
  );
}
