import { useEffect } from 'react';

/**
 * Client-side navigations only: initial GET /kol-mapping-saudi-arabia-oncology is served as a standalone
 * HTML page from Express (see server.js).
 * If users reach this route inside the SPA, force a full navigation so they load the
 * same static document.
 */
export default function KolMappingSaudiArabiaOncology() {
  useEffect(() => {
    window.location.replace('/kol-mapping-saudi-arabia-oncology');
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background text-muted-foreground text-sm"
      role="status"
      aria-live="polite"
    >
      Loading KOL mapping…
    </div>
  );
}
