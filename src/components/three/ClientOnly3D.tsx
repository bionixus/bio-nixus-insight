/**
 * SSR-safe, lazy, viewport-gated wrapper for the hero WebGL scene.
 *
 * Guarantees:
 *  - Never imports/executes three.js during SSR (the dynamic import lives inside
 *    a client-only effect, so Vite does NOT add a modulepreload for it — the
 *    chunk is fetched only when a client actually qualifies for WebGL).
 *  - Always renders SceneFallback first, so crawlers and the initial paint get a
 *    polished static hero with zero JS cost.
 *  - Only upgrades to the live WebGL canvas on the client when ALL hold:
 *      • component has mounted (so we're definitely in the browser)
 *      • the hero is in (or near) the viewport
 *      • the user has not requested reduced motion
 *      • the connection is not in Save-Data mode
 *      • the screen is wide enough to be worth the GPU cost (md+)
 *  - Renders a "lite" scene on mid-range widths to protect performance.
 */
import { useEffect, useRef, useState, type ComponentType } from 'react';
import SceneFallback from './SceneFallback';

type SceneMode = 'full' | 'lite';
type SceneComponent = ComponentType<{ mode?: SceneMode }>;

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isSaveData(): boolean {
  if (typeof navigator === 'undefined') return false;
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return Boolean(conn?.saveData);
}

export default function ClientOnly3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [Scene, setScene] = useState<SceneComponent | null>(null);
  const [mode, setMode] = useState<SceneMode>('full');

  useEffect(() => {
    // Bail out of WebGL entirely on low-motion / data-saver / small screens.
    if (prefersReducedMotion() || isSaveData()) return;
    const width = window.innerWidth;
    if (width < 768) return; // mobile keeps the static poster
    setMode(width < 1280 ? 'lite' : 'full');

    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        // Dynamic import here (not React.lazy) so the three.js chunk is fetched
        // only now — never preloaded for visitors who get the static poster.
        import('./HeroScene')
          .then((mod) => {
            if (!cancelled) setScene(() => mod.default);
          })
          .catch(() => {
            /* keep the static fallback on load failure */
          });
      },
      { rootMargin: '200px' },
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {Scene ? <Scene mode={mode} /> : <SceneFallback />}
    </div>
  );
}
