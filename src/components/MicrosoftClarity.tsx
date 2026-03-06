import { useEffect } from 'react';

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
    __clarityLoaded?: boolean;
  }
}

export default function MicrosoftClarity() {
  const clarityId = import.meta.env.VITE_CLARITY_ID;

  useEffect(() => {
    if (!clarityId || window.__clarityLoaded) return;

    const loadClarity = () => {
      if (window.__clarityLoaded) return;
      window.__clarityLoaded = true;

      (function (c: Window, l: Document, a: string, r: string, i: string) {
        c[a as keyof Window] =
          c[a as keyof Window] ||
          function (...args: unknown[]) {
            (((c[a as keyof Window] as unknown as { q: unknown[][] }).q =
              (c[a as keyof Window] as unknown as { q: unknown[][] }).q || [])).push(args);
          };
        const t = l.createElement('script') as HTMLScriptElement;
        t.async = true;
        t.src = 'https://www.clarity.ms/tag/' + i;
        const y = l.getElementsByTagName(r)[0];
        y?.parentNode?.insertBefore(t, y);
      })(window, document, 'clarity', 'script', clarityId);
    };

    const schedule = () => {
      if ('requestIdleCallback' in window) {
        (window as Window & { requestIdleCallback: (cb: IdleRequestCallback, options?: IdleRequestOptions) => number })
          .requestIdleCallback(() => loadClarity(), { timeout: 3000 });
        return;
      }
      window.setTimeout(loadClarity, 1200);
    };

    if (document.readyState === 'complete') {
      schedule();
      return;
    }

    const onLoad = () => schedule();
    window.addEventListener('load', onLoad, { once: true });
    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, [clarityId]);

  return null;
}
