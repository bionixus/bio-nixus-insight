import { useEffect } from 'react';

/**
 * Client-side navigations only: initial GET /conf is served as a standalone HTML deck
 * from Express (see server.js). If users reach this route inside the SPA, force a
 * full navigation so they load the same document.
 */
export default function ConfPortfolio() {
  useEffect(() => {
    window.location.replace('/conf');
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background text-muted-foreground text-sm"
      role="status"
      aria-live="polite"
    >
      Opening strategic portfolio…
    </div>
  );
}
