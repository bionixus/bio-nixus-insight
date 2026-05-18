import { useEffect } from 'react';

/**
 * Client-side navigations only: initial GET /iqvia-alternative is served as a standalone
 * HTML page from Express (see server.js).
 * If users reach this route inside the SPA, force a full navigation so they load the
 * same static document.
 */
export default function IqviaAlternative() {
  useEffect(() => {
    window.location.replace('/iqvia-alternative');
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background text-muted-foreground text-sm"
      role="status"
      aria-live="polite"
    >
      Loading…
    </div>
  );
}
