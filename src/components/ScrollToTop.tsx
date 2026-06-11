import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top on client-side route (pathname) changes only.
 * Skips the initial mount so that on refresh/SSR the browser keeps the user's
 * natural scroll position instead of snapping back to the hero after hydration.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
