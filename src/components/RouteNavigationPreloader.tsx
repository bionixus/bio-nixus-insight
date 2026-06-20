import { useEffect } from 'react';
import { preloadRouteChunk } from '@/lib/preloadRouteChunk';

function isInternalAppPath(href: string): string | null {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return null;
  }
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return null;
    return url.pathname;
  } catch {
    return null;
  }
}

/**
 * Preloads lazy route chunks before navigation so client-side clicks do not
 * suspend on a blank screen while the report/blog bundle downloads.
 */
export default function RouteNavigationPreloader() {
  useEffect(() => {
    const preloadFromAnchor = (anchor: HTMLAnchorElement) => {
      const path = isInternalAppPath(anchor.getAttribute('href') || '');
      if (path) void preloadRouteChunk(path);
    };

    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest('a[href]') as HTMLAnchorElement | null;
      if (anchor) preloadFromAnchor(anchor);
    };

    const handlePointerOver = (event: PointerEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest('a[href]') as HTMLAnchorElement | null;
      if (anchor) preloadFromAnchor(anchor);
    };

    document.addEventListener('click', handleClick, true);
    document.addEventListener('pointerover', handlePointerOver, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('pointerover', handlePointerOver, true);
    };
  }, []);

  return null;
}
