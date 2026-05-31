import { useEffect } from 'react';

/**
 * Full proposal deck is a standalone HTML document (McKinsey-style print layout).
 * Initial GET is served from Express; SPA navigations force a full load.
 */
export default function ClinicalDiagnosticsProposalDeck() {
  useEffect(() => {
    window.location.replace('/clinical-diagnostics-market-assessment-proposal');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F5F7] text-[#6B7684] text-sm" role="status">
      Loading proposal…
    </div>
  );
}
