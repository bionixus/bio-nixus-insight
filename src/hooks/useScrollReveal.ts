import { useEffect, useRef, useCallback } from 'react';

type ScrollRevealOptions = {
  /** IntersectionObserver threshold (0-1). Default 0 */
  threshold?: number;
  /** Root margin. Default '0px 0px -40px 0px' (bottom inset only). */
  rootMargin?: string;
  /** Base stagger delay in ms applied per child index. Default 0 (no stagger) */
  stagger?: number;
  /** Optional key — change this to force re-observation (useful for async content). */
  key?: string | number | boolean;
};

function shouldRevealImmediately(rect: DOMRect, viewportHeight: number): boolean {
  // Partially or fully in viewport
  if (rect.top < viewportHeight && rect.bottom > 0) return true;
  // Already scrolled past (SPA navigation landed mid-page)
  if (rect.bottom <= 0) return true;
  return false;
}

function applyReveal(el: HTMLElement, stagger: number): void {
  if (el.classList.contains('revealed')) return;
  if (stagger) {
    const idx = el.dataset.srIndex;
    const delay = idx ? parseInt(idx, 10) * stagger : 0;
    el.style.transitionDelay = `${delay}ms`;
  }
  el.classList.add('revealed');
}

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
  const { threshold = 0, rootMargin = '0px 0px -40px 0px', stagger = 0, key } = options;

  const reveal = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        applyReveal(el, stagger);
        observer.unobserve(el);
      });
    },
    [stagger]
  );

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const io = new IntersectionObserver(reveal, { threshold, rootMargin });

    const scan = () => {
      const viewportHeight = window.innerHeight;
      const allTargets = container.querySelectorAll<HTMLElement>('.sr');
      allTargets.forEach((el, i) => {
        el.dataset.srIndex = String(i);
      });

      const pending = container.querySelectorAll<HTMLElement>('.sr:not(.revealed)');
      pending.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (shouldRevealImmediately(rect, viewportHeight)) {
          applyReveal(el, stagger);
          io.unobserve(el);
          return;
        }
        io.observe(el);
      });
    };

    scan();

    // Re-scan after paint and late layout shifts (images, fonts, sections above).
    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(scan);
    });
    const settleTimer = window.setTimeout(scan, 400);

    const ro = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(() => scan())
      : null;
    ro?.observe(container);

    return () => {
      cancelAnimationFrame(raf1);
      window.clearTimeout(settleTimer);
      ro?.disconnect();
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reveal, threshold, rootMargin, stagger, key]);

  return ref;
}

export default useScrollReveal;
