/** Shared HTML helpers for blog audit / rewrite scripts. */

import {
  fixBrokenInternalHref,
  fixBrokenInternalHrefsInHtml,
} from '../../lib/fix-broken-internal-hrefs.mjs';

export { fixBrokenInternalHref, fixBrokenInternalHrefsInHtml };

/**
 * @param {string} html
 */
export function countWords(html) {
  return (html || '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
}

/**
 * Count internal links (relative paths or bionixus.com same-site).
 * @param {string} html
 */
export function countInternalLinks(html) {
  const rel = (html || '').match(/href="(\/[^"]+)"/g) ?? [];
  const abs = (html || '').match(/href="https:\/\/www\.bionixus\.com([^"]+)"/g) ?? [];
  return rel.length + abs.length;
}

export function normalizeInternalLinks(html) {
  if (!html) return '';
  const relative = html
    .replace(/href="https:\/\/www\.bionixus\.com(\/[^"]*)"/g, 'href="$1"')
    .replace(/href="http:\/\/www\.bionixus\.com(\/[^"]*)"/g, 'href="$1"');
  return fixBrokenInternalHrefsInHtml(relative);
}

const AI_FLUFF_PATTERNS = [
  /\bin today['']s (fast-paced|rapidly evolving|ever-changing)[^.]*\./gi,
  /\b(it's worth noting|it is worth noting) that\b/gi,
  /\bdelve into\b/gi,
  /\bnavigate the (complex |ever-changing )?landscape\b/gi,
  /\bgame[- ]changer\b/gi,
  /\brobust framework\b/gi,
  /\bat the end of the day\b/gi,
  /\bin conclusion,?\s+this article\b/gi,
];

/**
 * @param {string} html
 */
export function stripAiFluff(html) {
  let out = html;
  for (const re of AI_FLUFF_PATTERNS) {
    out = out.replace(re, '');
  }
  return out.replace(/\n{3,}/g, '\n\n').trim();
}

/**
 * @param {string} html
 */
export function extractH1(html) {
  const m = (html || '').match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  return m ? m[1].replace(/<[^>]+>/g, '').trim() : '';
}

/**
 * @param {string} html
 */
export function demoteExtraH1(html) {
  let seen = false;
  return html.replace(/<h1([^>]*)>([\s\S]*?)<\/h1>/gi, (full, attrs, inner) => {
    if (!seen) {
      seen = true;
      return full;
    }
    return `<h2${attrs}>${inner}</h2>`;
  });
}

/**
 * @param {string} href
 * @param {string} text
 */
export function link(href, text) {
  return `<a href="${href}">${text}</a>`;
}

/**
 * Ensure at least minCount internal links by appending a cross-reference block.
 * @param {string} html
 * @param {{ href: string; anchor: string }[]} linkTargets
 * @param {number} [minCount]
 */
export function ensureMinimumInternalLinks(html, linkTargets, minCount = 5) {
  const current = countInternalLinks(html);
  if (current >= minCount) return html;

  const existingHrefs = new Set(
    [...(html.match(/href="(\/[^"]+)"/g) ?? [])].map((m) => m.replace(/^href="|"$/g, '')),
  );

  const toAdd = linkTargets.filter((t) => !existingHrefs.has(t.href)).slice(0, Math.max(8, minCount));

  if (!toAdd.length) return html;

  const block = `<h2 id="cross-references">Related resources and further reading</h2>
<ul>
${toAdd.map((t) => `<li><a href="${t.href}">${t.anchor}</a></li>`).join('\n')}
</ul>`;

  if (/<\/article>/i.test(html)) {
    return html.replace(/<\/article>\s*$/i, `${block}\n</article>`);
  }
  return `${html}\n${block}`;
}

/**
 * @param {string} text
 */
export function p(text) {
  return `<p>${text}</p>`;
}

/**
 * @param {string} id
 * @param {string} text
 */
export function h2(id, text) {
  return `<h2 id="${id}">${text}</h2>`;
}

/**
 * @param {string} text
 */
export function h3(text) {
  return `<h3>${text}</h3>`;
}

/**
 * @param {string} text
 */
export function li(text) {
  return `<li>${text}</li>`;
}
