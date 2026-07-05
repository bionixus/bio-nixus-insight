import * as cheerio from 'cheerio';

/** Load HTML into cheerio once per page; callers pass the same $ around. */
export function loadHtml(html) {
  return cheerio.load(html, { xmlMode: false });
}

/**
 * Visible body text with script/style/nav/footer/noscript stripped — used by
 * R07 word-count and S06 similarity. Deliberately does NOT strip <header> —
 * only the site nav/footer chrome, so a page's own <h1>/intro inside <main>
 * or a bare <body> still counts.
 *
 * Clones via `.clone()` on the existing parsed tree rather than
 * `cheerio.load($.html())` — the latter serializes the whole document back
 * to a string and re-parses it from scratch, which is needlessly expensive
 * across hundreds of pages (some 200K+ characters).
 */
export function extractVisibleText($) {
  const $clone = $.root().clone();
  $clone.find('script, style, noscript, nav, footer, template').remove();
  const text = $clone.find('body').text() || $clone.text() || '';
  return text.replace(/\s+/g, ' ').trim();
}

export function wordCount(text) {
  if (!text) return 0;
  return text.split(/\s+/).filter(Boolean).length;
}

/** Main-content-only text for S06 similarity — prefers <main>, falls back to body minus chrome. */
export function extractMainText($) {
  const $clone = $.root().clone();
  $clone.find('script, style, noscript, nav, footer, template, header').remove();
  const $main = $clone.find('main');
  const text = ($main.length ? $main.text() : $clone.find('body').text()) || '';
  return text.replace(/\s+/g, ' ').trim();
}

export function getAbsoluteUrl(href, pageUrl) {
  try {
    return new URL(href, pageUrl).toString();
  } catch {
    return null;
  }
}

/** All internal <a href> targets on the page, resolved to absolute URLs on the same host. */
export function extractInternalLinks($, pageUrl, host) {
  const links = new Set();
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    const abs = getAbsoluteUrl(href, pageUrl);
    if (!abs) return;
    try {
      const u = new URL(abs);
      if (u.host === host) {
        u.hash = '';
        links.add(u.toString());
      }
    } catch {
      /* ignore malformed */
    }
  });
  return [...links];
}
