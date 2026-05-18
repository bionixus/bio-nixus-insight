import { useEffect } from 'react';

/**
 * Client-side navigations only: initial GET /pharmaceutical-market-research-dubai is served
 * as a standalone HTML page from Express (see server.js).
 */
export default function PharmaceuticalMarketResearchDubai() {
  useEffect(() => {
    window.location.replace('/pharmaceutical-market-research-dubai');
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
