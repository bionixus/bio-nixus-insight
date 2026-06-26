/**
 * useExitIntent — fires once when a visitor signals they are about to leave.
 *
 * Desktop: pointer leaves through the top of the viewport.
 * Touch/mobile: fast upward scroll fling, or a dwell-time fallback.
 *
 * Guard conditions (all must pass before it can fire):
 *  - the visitor has engaged (min dwell time OR scroll depth)
 *  - it has not already been shown to this visitor (localStorage, ~30 days)
 *  - the cookie-consent bar is no longer pending (its key is set) so we never
 *    stack two prompts
 *  - the visitor has not already subscribed via the popup
 *
 * Returns `{ triggered, dismiss }`. Call `dismiss(remember)` when the dialog
 * closes; pass `true` to persist "don't show again".
 */
import { useCallback, useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'bionixus-exit-intent';
const COOKIE_CONSENT_KEY = 'bionixus-cookie-consent';
const SUBSCRIBED_KEY = 'bionixus-exit-subscribed';
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

type ExitIntentOptions = {
  /** Minimum ms on page before the popup may fire. Default 10000. */
  minDwellMs?: number;
  /** Minimum scroll fraction (0-1) that also satisfies engagement. Default 0.3 */
  minScroll?: number;
};

function alreadyShown(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    if (localStorage.getItem(SUBSCRIBED_KEY)) return true;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const ts = Number(raw);
    if (Number.isNaN(ts)) return true;
    return Date.now() - ts < THIRTY_DAYS_MS;
  } catch {
    return false;
  }
}

function cookieBarPending(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    return localStorage.getItem(COOKIE_CONSENT_KEY) === null;
  } catch {
    return false;
  }
}

export function useExitIntent({ minDwellMs = 10000, minScroll = 0.3 }: ExitIntentOptions = {}) {
  const [triggered, setTriggered] = useState(false);
  const engaged = useRef(false);
  const firedRef = useRef(false);

  const fire = useCallback(() => {
    if (firedRef.current) return;
    if (!engaged.current) return;
    if (alreadyShown() || cookieBarPending()) return;
    firedRef.current = true;
    setTriggered(true);
  }, []);

  useEffect(() => {
    if (alreadyShown()) return;

    const dwellTimer = window.setTimeout(() => {
      engaged.current = true;
    }, minDwellMs);

    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
      if (scrolled >= minScroll) engaged.current = true;
    };

    // Desktop: pointer exits through the top edge.
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) fire();
    };

    // Mobile fallback: a fast upward fling near the top of the page.
    let lastY = window.scrollY;
    let lastT = Date.now();
    const onTouchScroll = () => {
      const now = Date.now();
      const dy = window.scrollY - lastY;
      const dt = now - lastT || 1;
      const velocity = dy / dt; // px per ms; negative = scrolling up
      if (velocity < -1.2 && window.scrollY < 240) fire();
      lastY = window.scrollY;
      lastT = now;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('mouseout', onMouseOut);
    window.addEventListener('touchmove', onTouchScroll, { passive: true });

    return () => {
      window.clearTimeout(dwellTimer);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('touchmove', onTouchScroll);
    };
  }, [fire, minDwellMs, minScroll]);

  const dismiss = useCallback((remember = true) => {
    setTriggered(false);
    if (remember) {
      try {
        localStorage.setItem(STORAGE_KEY, String(Date.now()));
      } catch {
        /* ignore */
      }
    }
  }, []);

  const markSubscribed = useCallback(() => {
    try {
      localStorage.setItem(SUBSCRIBED_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  }, []);

  return { triggered, dismiss, markSubscribed };
}

export default useExitIntent;
