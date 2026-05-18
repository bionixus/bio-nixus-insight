import { useEffect } from 'react';

/**
 * Client-side navigations only: initial GET /physician-survey-saudi-arabia is served as a standalone
 * HTML page from Express (see server.js).
 * If users reach this route inside the SPA, force a full navigation so they load the
 * same static document.
 */
export default function PhysicianSurveySaudiArabia() {
  useEffect(() => {
    window.location.replace('/physician-survey-saudi-arabia');
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background text-muted-foreground text-sm"
      role="status"
      aria-live="polite"
    >
      Loading physician survey guide…
    </div>
  );
}
