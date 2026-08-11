/**
 * Blog article HTML from CMS often starts with <h1> that duplicates the page hero <h1>.
 * Demotes all body <h1> to <h2> for semantic single-h1-per-page SEO.
 */

export function demoteH1TagsToH2(html) {
  if (typeof html !== 'string') return '';
  if (!/<h1\b/i.test(html)) return html;
  let out = html.replace(/<h1(\s[^>]*)?>/gi, '<h2$1>');
  out = out.replace(/<\/h1>/gi, '</h2>');
  return out;
}

/** Removes accidental full HTML documents pasted into CMS bodyHtml (duplicate <title> audit). */
export function stripEmbeddedDocumentMarkupFromBlogHtml(html) {
  if (typeof html !== 'string') return '';
  return html
    .replace(/<!DOCTYPE[^>]*>/gi, '')
    .replace(/<head\b[\s\S]*?<\/head>/gi, '')
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<\/?html[^>]*>/gi, '')
    .replace(/<\/?body[^>]*>/gi, '')
    .trim();
}

const BLOCK_BEFORE_RE =
  /(?=<(?:h[1-6]|p|div|ul|ol|li|table|thead|tbody|tr|th|td|section|article|blockquote|hr)\b)/i;

function isCorruptHref(href) {
  return /[\s<>]|&lt;|&gt;|%20%3C|%3C/i.test(href);
}

function salvageCorruptHref(href) {
  const decoded = String(href)
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/%3C/gi, '<')
    .replace(/%3E/gi, '>')
    .replace(/%20/gi, ' ');
  if (decoded.startsWith('/services/market-acces')) return '/services/market-access';
  const clean = decoded.split(/[\s<]/)[0]?.trim() ?? '';
  if (/^\/[a-z0-9\-/_]*$/i.test(clean) && clean.length > 1) return clean;
  return null;
}

/**
 * Closes truncated anchors before block tags and unwraps hrefs that swallowed heading HTML.
 * Fixes Ahrefs/W3C critical errors: unclosed <a>, stray </h2>/</h3>.
 */
export function repairMalformedBodyHtml(html) {
  if (typeof html !== 'string' || !html) return '';

  let out = html;

  out = out.replace(
    /<a\b([^>]*?)\bhref\s*=\s*(["'])([\s\S]*?)\2([^>]*)>([\s\S]*?)<\/a>/gi,
    (full, pre, _q, href, post, inner) => {
      if (!isCorruptHref(href)) return full;
      const salvaged = salvageCorruptHref(href);
      if (salvaged) return `<a${pre}href="${salvaged}"${post}>${inner}</a>`;
      return inner;
    },
  );

  out = out.replace(
    /<a\b([^>]*?)\bhref\s*=\s*(["'])([\s\S]*?)\2([^>]*)>([^<]*)/gi,
    (full, pre, _q, href, post, text, offset, source) => {
      const after = source.slice(offset + full.length);
      if (!BLOCK_BEFORE_RE.test(after.slice(0, 24))) return full;
      if (isCorruptHref(href)) {
        const salvaged = salvageCorruptHref(href);
        if (salvaged && String(text).trim()) {
          return `<a${pre}href="${salvaged}"${post}>${text}</a>`;
        }
        return text;
      }
      return `<a${pre}href="${href}"${post}>${text}</a>`;
    },
  );

  return out;
}

export function prepareBlogBodyHtml(html) {
  return repairMalformedBodyHtml(
    demoteH1TagsToH2(stripEmbeddedDocumentMarkupFromBlogHtml(html)),
  );
}
