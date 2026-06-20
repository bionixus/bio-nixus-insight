/** Non-blocking top progress bar while lazy route chunks load (pointer-events-none). */
export function RouteLoadingFallback() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-primary/80 animate-pulse"
      role="status"
      aria-label="Loading page"
    />
  );
}
