import { useEffect, useState } from 'react';

/** True once the page has been scrolled past `thresholdPercent` of total scrollable height. Fires once, stays true. */
export function useScrollThreshold(thresholdPercent = 70): boolean {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    if (passed) return;
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      if (total <= 0) return;
      const percent = (window.scrollY / total) * 100;
      if (percent >= thresholdPercent) {
        setPassed(true);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [passed, thresholdPercent]);

  return passed;
}
