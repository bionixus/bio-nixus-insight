import { useEffect } from 'react';

const GLOW_TARGETS = '.bg-card, .service-card, .premium-card, .premium-card-dark, .directory-tile';

/**
 * Pointer-following glow on cards (the alsaadany.com card treatment). Sets --mx/--my on the card
 * under a fine pointer; night-theme.css paints the glow. One passive listener, rAF-throttled,
 * nothing on touch screens. Renders nothing.
 */
export default function NightThemeEffects() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let current: HTMLElement | null = null;
    let raf = 0;
    let x = 0;
    let y = 0;

    const clear = (el: HTMLElement) => {
      el.style.removeProperty('--mx');
      el.style.removeProperty('--my');
    };

    const onMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? (event.target.closest(GLOW_TARGETS) as HTMLElement | null) : null;
      if (current && current !== target) clear(current);
      current = target;
      if (!current) return;
      x = event.clientX;
      y = event.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (!current) return;
        const rect = current.getBoundingClientRect();
        current.style.setProperty('--mx', `${Math.round(x - rect.left)}px`);
        current.style.setProperty('--my', `${Math.round(y - rect.top)}px`);
      });
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
      if (current) clear(current);
    };
  }, []);

  return null;
}
