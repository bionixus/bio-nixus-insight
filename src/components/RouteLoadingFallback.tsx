/**
 * Fallback shown while lazy route chunks load. A visible full-page skeleton
 * (not just a hairline bar) so slow chunk loads read as "loading", never as a
 * frozen or blank page.
 */
export function RouteLoadingFallback() {
  return (
    <div className="min-h-screen bg-background" role="status" aria-label="Loading page">
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-primary/80 animate-pulse"
        aria-hidden
      />
      {/* Navbar placeholder keeps layout height stable during the swap */}
      <div className="h-16 border-b border-border/40 bg-background" aria-hidden />
      <div className="container-wide mx-auto max-w-4xl px-4 pt-24 pb-16 animate-pulse" aria-hidden>
        <div className="h-4 w-40 rounded bg-muted mb-8" />
        <div className="h-10 w-3/4 rounded bg-muted mb-4" />
        <div className="h-10 w-1/2 rounded bg-muted mb-10" />
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-11/12 rounded bg-muted" />
          <div className="h-4 w-4/5 rounded bg-muted" />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="h-24 rounded-xl bg-muted" />
          <div className="h-24 rounded-xl bg-muted" />
          <div className="h-24 rounded-xl bg-muted" />
        </div>
      </div>
      <span className="sr-only">Loading page…</span>
    </div>
  );
}
