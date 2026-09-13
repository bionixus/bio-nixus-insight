import { useEffect } from 'react';

/**
 * Client-side navigations only: initial GET /nielsen-alternative is served as a standalone
 * HTML page from Express (see server.js), matching /iqvia-alternative.
 * If users reach this route inside the SPA, force a full navigation so they load the
 * same static document.
 */
export default function NielsenAlternative() {
  useEffect(() => {
    window.location.replace('/nielsen-alternative');
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
