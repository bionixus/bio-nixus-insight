import { useCallback } from 'react';
import type { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Delegated click handler that routes internal `<a href="/...">` links (e.g.
 * inside dangerouslySetInnerHTML blog bodies) through react-router instead of
 * a full page reload. Attach to a container's onClick; react-router `Link`
 * clicks are untouched because they preventDefault before the event bubbles.
 */
export function useInternalLinkInterceptor() {
  const navigate = useNavigate();

  return useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      const anchor = (event.target as HTMLElement).closest?.('a');
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('/') || href.startsWith('//')) return;
      event.preventDefault();
      navigate(href);
    },
    [navigate],
  );
}
