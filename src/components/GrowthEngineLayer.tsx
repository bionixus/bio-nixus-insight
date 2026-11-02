import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { GrowthEngine } from '@/lib/growthEngine';

/**
 * Starts the WebGL growth engine on pages that carry GrowthStage placeholders. The engine code
 * loads only when a stage comes within reach of the viewport (and the browser is idle), so it never
 * competes with the first paint or the hero intro, and a page without stages never loads it.
 * Without WebGL the stages show a soft glow instead.
 */
export default function GrowthEngineLayer() {
  const { pathname } = useLocation();

  useEffect(() => {
    let cancelled = false;
    let engine: GrowthEngine | null = null;
    let canvas: HTMLCanvasElement | null = null;
    const html = document.documentElement;

    const start = async () => {
      const stages = Array.from(document.querySelectorAll('[data-stage]'));
      if (!stages.length || cancelled) return;
      const { createGrowthEngine } = await import('@/lib/growthEngine');
      if (cancelled) return;
      canvas = document.createElement('canvas');
      canvas.className = 'gl-field';
      canvas.setAttribute('aria-hidden', 'true');
      document.body.appendChild(canvas);
      try {
        engine = createGrowthEngine(canvas, {
          reduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
          pointer: window.matchMedia('(hover: hover) and (pointer: fine)').matches,
        });
        engine.setStages(stages);
        engine.intro();
        html.classList.add('gl-on');
        window.requestAnimationFrame(() => canvas?.classList.add('is-on'));
      } catch {
        canvas.remove();
        canvas = null;
        engine = null;
      }
    };

    // Wake the engine only when a stage comes within reach, so the hero intro never shares the
    // main thread with shader compilation.
    let io: IntersectionObserver | null = null;
    const ric = window.requestIdleCallback?.bind(window);
    let idleHandle = 0;
    const wake = () => {
      io?.disconnect();
      io = null;
      idleHandle = ric ? ric(() => void start(), { timeout: 1200 }) : window.setTimeout(() => void start(), 200);
    };
    const watch = () => {
      if (cancelled || io) return;
      const stages = Array.from(document.querySelectorAll('[data-stage]'));
      if (!stages.length) return;
      if (!('IntersectionObserver' in window)) {
        wake();
        return;
      }
      io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) wake();
      }, { rootMargin: '120% 0px 120% 0px' });
      stages.forEach((el) => io?.observe(el));
    };
    watch();
    const late = window.setTimeout(watch, 1500);

    return () => {
      cancelled = true;
      window.clearTimeout(late);
      io?.disconnect();
      if (idleHandle) {
        if (ric && window.cancelIdleCallback) window.cancelIdleCallback(idleHandle);
        else window.clearTimeout(idleHandle);
      }
      engine?.destroy();
      canvas?.remove();
      html.classList.remove('gl-on');
    };
  }, [pathname]);

  return null;
}
