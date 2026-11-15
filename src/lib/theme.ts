/**
 * Site theme: night (default) or the original BioNixus light colours.
 *
 * The choice lives on html[data-theme="light"] (absent = night) and in localStorage, and an inline
 * script in index.html applies a saved choice before the first paint, so there is no flash.
 * Switching plays a circular reveal from the switch where the browser supports view transitions.
 */
export type SiteTheme = 'dark' | 'light';

export const THEME_STORAGE_KEY = 'bionixus-theme';
export const THEME_CHANGE_EVENT = 'bionixus:themechange';

const THEME_COLOR: Record<SiteTheme, string> = { dark: '#050A14', light: '#FFFFFF' };

export function getTheme(): SiteTheme {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function applyTheme(theme: SiteTheme) {
  const root = document.documentElement;
  if (theme === 'light') root.setAttribute('data-theme', 'light');
  else root.removeAttribute('data-theme');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme]);
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* private mode or storage blocked: the switch still works for this visit */
  }
  window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: { theme } }));
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => { ready: Promise<void>; finished: Promise<void> };
};

/** Switch the theme; `origin` (viewport px) is where the reveal starts, usually the switch itself. */
export function setTheme(theme: SiteTheme, origin?: { x: number; y: number }) {
  if (typeof document === 'undefined' || theme === getTheme()) return;
  const doc = document as ViewTransitionDocument;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!doc.startViewTransition || reduced || document.visibilityState !== 'visible') {
    applyTheme(theme);
    return;
  }
  const root = document.documentElement;
  const x = origin?.x ?? window.innerWidth - 40;
  const y = origin?.y ?? 32;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  root.classList.add('theme-vt');
  let transition: { ready: Promise<void>; finished: Promise<void> };
  try {
    transition = doc.startViewTransition(() => applyTheme(theme));
  } catch {
    root.classList.remove('theme-vt');
    applyTheme(theme);
    return;
  }
  transition.ready
    .then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 720, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
      );
    })
    .catch(() => undefined);
  transition.finished.finally(() => root.classList.remove('theme-vt')).catch(() => undefined);
}
