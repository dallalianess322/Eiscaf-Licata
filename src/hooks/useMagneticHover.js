import { useEffect } from 'react';

// Subtly pulls an element toward the cursor within its own bounds,
// composed with the element's existing CSS :hover transform via
// the --mx/--my custom properties (see .btn rules in index.css).
export default function useMagneticHover(ref, reduced) {
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const maxX = 8;
    const maxY = 6;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.setProperty('--mx', `${Math.max(-maxX, Math.min(maxX, x * 0.25)).toFixed(1)}px`);
      el.style.setProperty('--my', `${Math.max(-maxY, Math.min(maxY, y * 0.3)).toFixed(1)}px`);
    };
    const onLeave = () => {
      el.style.setProperty('--mx', '0px');
      el.style.setProperty('--my', '0px');
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [ref, reduced]);
}
