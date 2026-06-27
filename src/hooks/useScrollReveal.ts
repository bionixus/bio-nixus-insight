import { useEffect, useRef, useCallback } from 'react';

type ScrollRevealOptions = {
  /** IntersectionObserver threshold (0-1). Default 0.15 */
  threshold?: number;
  /** Root margin, e.g. '0px 0px -60px 0px'. Default '-40px' */
  rootMargin?: string;
  /** Base stagger delay in ms applied per child index. Default 0 (no stagger) */
  stagger?: number;
  /** Optional key — change this to force re-observation (useful for async content). */
  key?: string | number | boolean;
};

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * Adds `.revealed` class to observed children when they enter the viewport.
 * Elements start hidden via CSS `.sr` class; `.sr.revealed` makes them visible.
 * Zero external dependencies. GPU-composited transforms only.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const { threshold = 0.15, rootMargin = '-40px', stagger = 0, key } = options;

  const reveal = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        if (stagger) {
          const idx = el.dataset.srIndex;
          const delay = idx ? parseInt(idx, 10) * stagger : 0;
          el.style.transitionDelay = `${delay}ms`;
        }
        el.classList.add('revealed');
        observer.unobserve(el); // once
      });
    },
    [stagger]
  );

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const io = new IntersectionObserver(reveal, { threshold, rootMargin });

    const targets = container.querySelectorAll<HTMLElement>('.sr');
    targets.forEach((el, i) => {
      el.dataset.srIndex = String(i);
      const rect = el.getBoundingClientRect();
      const inViewport = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
      if (inViewport) {
        el.classList.add('revealed');
        return;
      }
      io.observe(el);
    });

    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reveal, threshold, rootMargin, key]);

  return ref;
}

export default useScrollReveal;
