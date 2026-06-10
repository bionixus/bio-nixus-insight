/**
 * Canonical fixes for Ahrefs-flagged internal 404s (May 2026 crawl).
 * Shared by api/blog, blog-html-utils, and src/lib/fixBrokenInternalHrefs.ts.
 */

import { REDIRECT_HREF_REWRITES } from '../blog-legacy-redirects.mjs';

export const GCC_STANDALONE_REPORT_PATHS = new Set([
  '/gcc-pharma-market-report-2026',
  '/gcc-medical-devices-market-report',
  '/gcc-anesthesia-surgical-market-report',
]);

/** Wrong paths → live routes */
export const HREF_REWRITES = {
  ...REDIRECT_HREF_REWRITES,
  '/market-reports/gcc-pharma-market-report-2026': '/gcc-pharma-market-report-2026',
  '/market-reports/saudi-arabia-pharma-market-report-2026': '/saudi-arabia-healthcare-market-report',
  '/market-reports/uae-pharma-market-report-2026': '/uae-healthcare-market-report',
  '/market-reports/kuwait-pharma-market-report-2026': '/kuwait-healthcare-market-report',
  '/market-reports/egypt-pharma-market-report-2026': '/egypt-healthcare-market-report',
  '/market-reports/qatar-pharma-market-report-2026': '/qatar-healthcare-market-report',
  '/market-reports/china-pharma-market-report-2026': '/healthcare-market-research/china',
  '/market-reports/europe-pharma-market-report-2026': '/healthcare-market-research/europe',
  '/market-reports/germany-pharma-market-report-2026': '/germany-healthcare-market-report',
};

const GCC_THERAPY_REPORT_RE =
  /^\/gcc-(?!pharma-market-report-2026|medical-devices-market-report|anesthesia-surgical-market-report)[a-z0-9-]+-market-report$/;

/**
 * Normalize a single internal href (path only, may include query/hash).
 * @param {string} href
 */
export function fixBrokenInternalHref(href) {
  const raw = href.trim();
  if (!raw || raw.startsWith('mailto:') || raw.startsWith('tel:')) {
    return href;
  }

  if (/^https?:\/\//i.test(raw)) {
    const m = raw.match(/^(https?:\/\/(?:www\.)?bionixus\.com)(\/[^?#]*)(.*)$/i);
    if (m) {
      const [, origin, pathOnly, suffix] = m;
      if (HREF_REWRITES[pathOnly]) {
        return `${origin}${HREF_REWRITES[pathOnly]}${suffix}`;
      }
      if (GCC_THERAPY_REPORT_RE.test(pathOnly)) {
        return `${origin}/market-reports${pathOnly}${suffix}`;
      }
    }
    return href;
  }

  // Corrupt anchor: href="/blog <h2 id=..."
  if (/^\/blog[\s<]/i.test(raw)) {
    return '/blog';
  }

  const pathOnly = raw.split(/[?#]/)[0] ?? raw;
  const suffix = raw.slice(pathOnly.length);

  if (HREF_REWRITES[pathOnly]) {
    return HREF_REWRITES[pathOnly] + suffix;
  }

  if (GCC_THERAPY_REPORT_RE.test(pathOnly)) {
    return `/market-reports${pathOnly}${suffix}`;
  }

  return href;
}

/**
 * Fix href attributes in HTML fragments.
 * @param {string} html
 */
export function fixBrokenInternalHrefsInHtml(html) {
  if (!html) return html;

  let out = html.replace(/href="([^"]*)"/gi, (full, href) => {
    const fixed = fixBrokenInternalHref(href);
    return fixed === href ? full : `href="${fixed}"`;
  });

  // Repair anchors where href swallowed a following h2 (legacy audit artefact)
  out = out.replace(
    /<a\s+href="\/blog\s+<h2\s+id="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,
    '<h2 id="$1">$2</h2>',
  );

  return out;
}
