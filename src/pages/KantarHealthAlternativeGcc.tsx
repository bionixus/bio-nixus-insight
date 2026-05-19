import { useEffect } from 'react';

export default function KantarHealthAlternativeGcc() {
  useEffect(() => {
    window.location.replace('/kantar-health-alternative-gcc');
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
