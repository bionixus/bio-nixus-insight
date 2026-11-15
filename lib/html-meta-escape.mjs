/**
 * One HTML-attribute escape for meta descriptions.
 * Helmet already turns an apostrophe into &#x27;. A second pass that only
 * escapes "&" turns that into &amp;#x27;. Decode first, then escape once.
 */

const NAMED = {
  amp: '&',
  quot: '"',
  apos: "'",
  lt: '<',
  gt: '>',
  nbsp: ' ',
};

export function decodeHtmlEntities(value) {
  let out = String(value ?? '');
  for (let pass = 0; pass < 4; pass += 1) {
    const next = out.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, body) => {
      const token = String(body);
      if (token[0] === '#') {
        const isHex = token[1] === 'x' || token[1] === 'X';
        const code = isHex ? parseInt(token.slice(2), 16) : parseInt(token.slice(1), 10);
        if (!Number.isFinite(code) || code < 0 || code > 0x10ffff) return entity;
        try {
          return String.fromCodePoint(code);
        } catch {
          return entity;
        }
      }
      const named = NAMED[token.toLowerCase()];
      return named === undefined ? entity : named;
    });
    if (next === out) break;
    out = next;
  }
  return out;
}

export function escapeHtmlAttribute(value) {
  return decodeHtmlEntities(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/'/g, '&#x27;');
}

function isDescriptionMeta(tag) {
  return (
    /\bname=(["'])description\1/i.test(tag) ||
    /\bproperty=(["'])og:description\1/i.test(tag) ||
    /\bname=(["'])twitter:description\1/i.test(tag)
  );
}

/**
 * Rewrite description, og:description and twitter:description so an apostrophe
 * is a single &#x27; and never &amp;#x27;.
 */
export function normalizeDescriptionMetaTags(html) {
  return String(html ?? '').replace(/<meta\b[^>]*>/gi, (tag) => {
    if (!isDescriptionMeta(tag)) return tag;
    return tag.replace(/\bcontent=(["'])([\s\S]*?)\1/i, (_match, quote, content) => {
      return `content=${quote}${escapeHtmlAttribute(content)}${quote}`;
    });
  });
}
