import { useEffect } from 'react';

export default function GfkAlternativeEgypt() {
  useEffect(() => {
    window.location.replace('/gfk-alternative-egypt');
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
