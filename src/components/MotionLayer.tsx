import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Site-wide motion in the alsaadany.com language, applied to the existing markup without changing it:
 *
 * - Scroll reveals: below the fold, section titles rise from behind a fixed baseline, blocks and
 *   cards fade up in staggered batches, images wipe in. Large stat numbers count up.
 *   Elements already on screen when the page loads are never hidden, so first paint and LCP are
 *   untouched, and without JavaScript everything is visible (hidden states need html.mv-on).
 * - Page transitions: the new page fades in under a heat line; a language switch plays a night
 *   curtain carrying the new language name.
 * - Pointer craft (fine pointers only): a trailing cursor ring, magnetic gold buttons, and the hero
 *   dashboard tilting toward the pointer.
 * - A reading-progress heat line along the top edge.
 *
 * Everything is skipped for prefers-reduced-motion. Renders nothing.
 */

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

const LANG_RE = /^\/(ar|fr|de|es|zh|pt|ru)(?=\/|$)/;
const LANG_NAMES: Record<string, string> = {
  en: 'English',
  ar: 'العربية',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  zh: '中文',
  pt: 'Português',
  ru: 'Русский',
};
const langOf = (path: string) => path.match(LANG_RE)?.[1] ?? 'en';

const SKIP_TAGS = new Set([
  'SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE', 'LINK', 'META', 'BR', 'HR', 'INPUT', 'SELECT', 'TEXTAREA',
  'OPTION', 'LABEL', 'CANVAS', 'DIALOG', 'H1',
]);
const CONTAINER_TAGS = new Set(['DIV', 'SECTION', 'ARTICLE', 'ASIDE', 'HEADER', 'FOOTER', 'MAIN']);
const LIST_TAGS = new Set(['UL', 'OL']);
const BLOCK_TAGS = new Set([
  'P', 'DL', 'TABLE', 'FIGURE', 'BLOCKQUOTE', 'DETAILS', 'FORM', 'PRE', 'A', 'BUTTON', 'H3', 'H4', 'H5', 'H6',
  'NAV', 'SVG', 'IFRAME', 'VIDEO', 'LI',
]);
const MEDIA_TAGS = new Set(['IMG', 'PICTURE']);
const CARD_RE = /(?:^|\s)(?:bg-card|premium-card|premium-card-dark|service-card|directory-tile|hover-lift)(?:\s|$)/;
const ROUNDED_RE = /(?:^|\s)rounded-(?:md|lg|xl|2xl|3xl|\[)/;
const SURFACE_RE = /(?:^|\s)(?:border|bg-|shadow)/;
const GRID_RE = /(?:^|\s)(?:grid|flex)(?:\s|$)/;
const SELF_MANAGED_RE = /(?:^|\s)(?:sr|sr-only|opacity-0|animate-[\w-]+|absolute|fixed|sticky)(?:\s|$)/;
const MAGNET =
  '.premium-gold-btn, :is(a, button).bg-primary.rounded-full, :is(a, button).bg-primary[class*="px-"], [data-magnetic]';
const HOVERABLE = 'a, button, summary, [role="button"], select, label[for]';
const TEXT_ENTRY = 'input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="button"]), textarea, [contenteditable="true"]';
const COUNT_RE = /^(\D{0,3}?)(\d{1,3}(?:,\d{3})+|\d{1,6})(\D{0,6})$/;
const MAX_DEPTH = 14;

type Kind = 'h' | 'up' | 'img' | 'descend' | null;

function motionAllowed() {
  return typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function classOf(el: Element) {
  return el.getAttribute('class') || '';
}

function hasDirectText(el: Element) {
  for (let n = el.firstChild; n; n = n.nextSibling) {
    if (n.nodeType === 3 && n.nodeValue && n.nodeValue.trim()) return true;
  }
  return false;
}

function skip(el: Element) {
  const tag = el.tagName.toUpperCase();
  if (SKIP_TAGS.has(tag)) return true;
  if (
    el.hasAttribute('data-mv') ||
    el.hasAttribute('data-mv-done') ||
    el.hasAttribute('data-mv-skip') ||
    el.hasAttribute('data-hero-lcp') ||
    el.hasAttribute('data-report-hero') ||
    el.hasAttribute('data-intro') ||
    el.hasAttribute('hidden')
  ) {
    return true;
  }
  if (el.getAttribute('aria-hidden') === 'true') return true;
  const cls = classOf(el);
  // The older .sr reveal system keeps its elements, except section titles, which take the mask rise.
  if (tag === 'H2' && /(?:^|\s)sr(?:\s|$)/.test(cls)) return false;
  return SELF_MANAGED_RE.test(cls);
}

function classify(el: Element): Kind {
  const tag = el.tagName.toUpperCase();
  if (tag === 'H2') return 'h';
  if (MEDIA_TAGS.has(tag)) return 'img';
  const cls = classOf(el);
  const ownsReveals = !!el.querySelector('.sr');
  if (CONTAINER_TAGS.has(tag)) {
    const isCard = CARD_RE.test(cls) || (ROUNDED_RE.test(cls) && SURFACE_RE.test(cls));
    if (isCard && !ownsReveals) return 'up';
    if (el.childElementCount === 0 || hasDirectText(el)) return el.textContent?.trim() ? 'up' : null;
    return 'descend';
  }
  if (LIST_TAGS.has(tag)) {
    return GRID_RE.test(cls) && el.childElementCount >= 3 ? 'descend' : ownsReveals ? 'descend' : 'up';
  }
  if (BLOCK_TAGS.has(tag)) return ownsReveals ? 'descend' : 'up';
  return null;
}

function canDescendInView(el: Element) {
  const tag = el.tagName.toUpperCase();
  return (CONTAINER_TAGS.has(tag) || LIST_TAGS.has(tag)) && !hasDirectText(el);
}

/** Marks every revealable element below the fold and hands it to the observer. */
function scan(root: Element, io: IntersectionObserver) {
  const fold = (window.innerHeight || 800) * 0.92;
  const visit = (parent: Element, depth: number, below: boolean) => {
    const kids = parent.children;
    for (let i = 0; i < kids.length; i += 1) {
      const el = kids[i];
      if (skip(el)) continue;
      if (!below) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) continue;
        if (r.bottom <= 0) continue;
        if (r.top < fold) {
          // On screen now: never hide it, but look inside for parts that sit below the fold.
          if (depth < MAX_DEPTH && canDescendInView(el)) visit(el, depth + 1, false);
          continue;
        }
      }
      const kind = classify(el);
      if (!kind) continue;
      if (kind === 'descend') {
        if (depth < MAX_DEPTH) visit(el, depth + 1, true);
        continue;
      }
      el.setAttribute('data-mv', kind);
      io.observe(el);
    }
  };
  visit(root, 0, false);
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/** Counts large stat numbers up from zero, then restores the exact original text. */
function runCounters(root: HTMLElement, delay: number) {
  const nodes: HTMLElement[] =
    root.childElementCount === 0 ? [root] : Array.from(root.querySelectorAll<HTMLElement>('*'));
  for (const el of nodes) {
    if (el.childElementCount !== 0 || el.childNodes.length !== 1) continue;
    const textNode = el.firstChild;
    if (!textNode || textNode.nodeType !== 3) continue;
    if (el.closest('.tabular-nums, [data-mv-counting]')) continue;
    const original = textNode.nodeValue || '';
    const trimmed = original.trim();
    const m = trimmed.match(COUNT_RE);
    if (!m) continue;
    const [, prefix, digits, suffix] = m;
    if (/^[.,]\d/.test(suffix)) continue;
    const target = parseInt(digits.replace(/,/g, ''), 10);
    if (!(target >= 3)) continue;
    if (!prefix && !suffix && target >= 1900 && target <= 2100) continue;
    if (parseFloat(window.getComputedStyle(el).fontSize) < 26) continue;
    const lead = original.slice(0, original.indexOf(trimmed));
    const tail = original.slice(original.indexOf(trimmed) + trimmed.length);
    const grouped = digits.includes(',');
    const render = (v: number) =>
      `${lead}${prefix}${grouped ? v.toLocaleString('en-US') : String(v)}${suffix}${tail}`;
    el.setAttribute('data-mv-counting', '');
    textNode.nodeValue = render(0);
    const duration = 1600;
    window.setTimeout(() => {
      let start = 0;
      const step = (now: number) => {
        if (!start) start = now;
        const p = Math.min(1, (now - start) / duration);
        if (!textNode.isConnected) return;
        textNode.nodeValue = p < 1 ? render(Math.round(easeOutCubic(p) * target)) : original;
        if (p < 1) window.requestAnimationFrame(step);
        else el.removeAttribute('data-mv-counting');
      };
      window.requestAnimationFrame(step);
    }, delay + 250);
  }
}

function ensureElement(className: string, html = '') {
  let el = document.querySelector<HTMLElement>(`body > .${className}`);
  if (!el) {
    el = document.createElement('div');
    el.className = className;
    el.setAttribute('aria-hidden', 'true');
    if (html) el.innerHTML = html;
    document.body.appendChild(el);
  }
  return el;
}

export default function MotionLayer() {
  const { pathname } = useLocation();
  const previousPath = useRef<string | null>(null);
  const ioRef = useRef<IntersectionObserver | null>(null);
  const routeTimer = useRef(0);
  const curtainTimer = useRef(0);

  // Reveal engine: one observer for the whole session.
  useEffect(() => {
    if (!motionAllowed() || !('IntersectionObserver' in window)) return;
    document.documentElement.classList.add('mv-on');
    const settle = (el: HTMLElement) => {
      el.removeAttribute('data-mv');
      el.removeAttribute('data-mv-in');
      el.style.removeProperty('--mv-d');
      el.setAttribute('data-mv-done', '');
    };
    const io = new IntersectionObserver(
      (entries) => {
        const entering = entries.filter((e) => e.isIntersecting);
        if (!entering.length) return;
        const rtl = document.documentElement.dir === 'rtl';
        entering.sort((a, b) => {
          const dy = a.boundingClientRect.top - b.boundingClientRect.top;
          if (Math.abs(dy) > 8) return dy;
          return rtl
            ? b.boundingClientRect.left - a.boundingClientRect.left
            : a.boundingClientRect.left - b.boundingClientRect.left;
        });
        entering.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          const delay = Math.min(i, 8) * 85;
          if (delay) el.style.setProperty('--mv-d', `${delay}ms`);
          el.setAttribute('data-mv-in', '');
          runCounters(el, delay);
          window.setTimeout(() => settle(el), delay + 1500);
        });
      },
      { rootMargin: '0px 0px -6% 0px' },
    );
    ioRef.current = io;
    return () => {
      io.disconnect();
      ioRef.current = null;
      document.documentElement.classList.remove('mv-on');
    };
  }, []);

  // Scan the page on load and after every route change (plus late passes for lazy content).
  useEffect(() => {
    if (!motionAllowed()) return;
    const timers: number[] = [];
    const run = () => {
      const io = ioRef.current;
      const root = document.querySelector('main') || document.getElementById('root');
      if (io && root) scan(root, io);
    };
    const first = previousPath.current === pathname ? 180 : 90;
    [first, 700, 1700].forEach((t) => timers.push(window.setTimeout(run, t)));
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [pathname]);

  // Page transitions: runs before paint, so the new page never flashes un-transitioned.
  useIsomorphicLayoutEffect(() => {
    const prev = previousPath.current;
    previousPath.current = pathname;
    if (prev === null || prev === pathname || !motionAllowed()) return;
    const html = document.documentElement;
    html.removeAttribute('data-mv-route');
    void html.offsetWidth;
    html.setAttribute('data-mv-route', '');
    window.clearTimeout(routeTimer.current);
    routeTimer.current = window.setTimeout(() => html.removeAttribute('data-mv-route'), 800);

    const line = ensureElement('mv-route');
    line.classList.remove('is-play');
    void line.offsetWidth;
    line.classList.add('is-play');

    const nextLang = langOf(pathname);
    if (langOf(prev) !== nextLang) {
      const curtain = ensureElement('mv-curtain', '<span class="mv-curtain__label"></span>');
      const label = curtain.firstElementChild as HTMLElement;
      label.textContent = LANG_NAMES[nextLang] ?? nextLang;
      label.setAttribute('lang', nextLang);
      curtain.classList.remove('is-on', 'is-rtl');
      void curtain.offsetWidth;
      curtain.classList.toggle('is-rtl', nextLang === 'ar');
      curtain.classList.add('is-on');
      window.clearTimeout(curtainTimer.current);
      curtainTimer.current = window.setTimeout(() => curtain.classList.remove('is-on', 'is-rtl'), 1500);
    }
  }, [pathname]);

  // Process lines: steps light up in turn as the reader scrolls through them.
  useEffect(() => {
    if (!motionAllowed()) return;
    let raf = 0;
    let items: HTMLElement[] = [];
    const collect = () => {
      items = Array.from(document.querySelectorAll<HTMLElement>('[data-mv-process]'));
    };
    const update = () => {
      raf = 0;
      const vh = window.innerHeight || 800;
      for (const el of items) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) continue;
        const p = Math.min(1, Math.max(0, (vh * 0.78 - r.top) / (vh * 0.18 + r.height)));
        el.style.setProperty('--p', p.toFixed(3));
        const steps = Array.from(el.children).filter((c) => c.getAttribute('aria-hidden') !== 'true');
        steps.forEach((step, i) => {
          const lit = p >= (i + 0.35) / steps.length;
          if (lit !== step.hasAttribute('data-lit')) step.toggleAttribute('data-lit', lit);
        });
      }
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    collect();
    update();
    const late = window.setTimeout(() => {
      collect();
      update();
    }, 900);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.clearTimeout(late);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.cancelAnimationFrame(raf);
    };
  }, [pathname]);

  // Reading progress line.
  useEffect(() => {
    if (!motionAllowed()) return;
    const bar = ensureElement('mv-progress');
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.setProperty('--mv-scroll', p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.cancelAnimationFrame(raf);
      bar.remove();
    };
  }, []);

  // Pointer craft: cursor ring, magnetic buttons, hero dashboard tilt.
  useEffect(() => {
    if (!motionAllowed() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const ring = ensureElement('mv-cursor');
    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let seen = false;
    let raf = 0;
    let magnet: HTMLElement | null = null;
    let target = { x: 0, y: 0 };
    const magnets = new Map<HTMLElement, { x: number; y: number }>();
    let dash: HTMLElement | null = null;
    let tilting = false;

    const tick = () => {
      raf = 0;
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      ring.style.transform = `translate3d(${rx.toFixed(1)}px, ${ry.toFixed(1)}px, 0)`;
      let busy = Math.abs(mx - rx) > 0.1 || Math.abs(my - ry) > 0.1;
      magnets.forEach((s, el) => {
        const goal = el === magnet ? target : { x: 0, y: 0 };
        s.x += (goal.x - s.x) * 0.16;
        s.y += (goal.y - s.y) * 0.16;
        if (el !== magnet && Math.abs(s.x) < 0.05 && Math.abs(s.y) < 0.05) {
          el.style.removeProperty('translate');
          magnets.delete(el);
          return;
        }
        el.style.setProperty('translate', `${s.x.toFixed(2)}px ${s.y.toFixed(2)}px`);
        busy = true;
      });
      if (busy) raf = window.requestAnimationFrame(tick);
    };
    const kick = () => {
      if (!raf) raf = window.requestAnimationFrame(tick);
    };

    const resetTilt = () => {
      if (!dash || !tilting) return;
      tilting = false;
      dash.style.setProperty('--rx', '0deg');
      dash.style.setProperty('--ry', '0deg');
      dash.style.setProperty('--glare', '0');
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      mx = e.clientX;
      my = e.clientY;
      if (!seen) {
        seen = true;
        rx = mx;
        ry = my;
        ring.classList.add('is-on');
      }
      const t = e.target instanceof Element ? e.target : null;
      const m = t ? (t.closest(MAGNET) as HTMLElement | null) : null;
      if (m !== magnet) {
        magnet = m;
        if (m && !magnets.has(m)) magnets.set(m, { x: 0, y: 0 });
      }
      if (m) {
        const r = m.getBoundingClientRect();
        const s = magnets.get(m) ?? { x: 0, y: 0 };
        target = {
          x: (mx - (r.left + r.width / 2 - s.x)) * 0.28,
          y: (my - (r.top + r.height / 2 - s.y)) * 0.38,
        };
      }

      const hero = t ? (t.closest('[data-hero-lcp]') as HTMLElement | null) : null;
      if (hero && window.innerWidth >= 1024) {
        if (!dash || !dash.isConnected) dash = hero.querySelector<HTMLElement>('.hero-dash');
        if (dash) {
          const hr = hero.getBoundingClientRect();
          const x = (mx - hr.left) / hr.width - 0.5;
          const y = (my - hr.top) / hr.height - 0.5;
          const dr = dash.getBoundingClientRect();
          tilting = true;
          dash.style.setProperty('--ry', `${(x * 10).toFixed(2)}deg`);
          dash.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`);
          dash.style.setProperty('--gx', `${(((mx - dr.left) / dr.width) * 100).toFixed(1)}%`);
          dash.style.setProperty('--gy', `${(((my - dr.top) / dr.height) * 100).toFixed(1)}%`);
          dash.style.setProperty('--glare', '1');
        }
      } else {
        resetTilt();
      }
      kick();
    };

    const onOver = (e: PointerEvent) => {
      const t = e.target instanceof Element ? e.target : null;
      ring.classList.toggle('is-text', !!t?.closest(TEXT_ENTRY));
      ring.classList.toggle('is-hover', !!t?.closest(HOVERABLE));
    };
    const onLeave = () => {
      seen = false;
      ring.classList.remove('is-on');
      magnet = null;
      resetTilt();
      kick();
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.cancelAnimationFrame(raf);
      magnets.forEach((_, el) => el.style.removeProperty('translate'));
      ring.remove();
    };
  }, []);

  return null;
}
