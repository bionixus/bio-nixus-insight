/**
 * Shared favicon / apple-touch head snippet for SPA shell, static HTML, and SSR.
 * Google SERP brand icons expect these link tags on every HTML document.
 */

export const FAVICON_HEAD_HTML = [
  '<link rel="icon" href="/favicon.ico" sizes="any">',
  '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">',
  '<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">',
  '<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">',
  '<link rel="apple-touch-icon" href="/apple-touch-icon.png">',
].join('\n')

/**
 * If `html` has a `<head>` and is missing favicon.ico, inject FAVICON_HEAD_HTML
 * after charset/viewport (or right after `<head>`). No-op when already present
 * or when there is no head element (HTML fragments).
 *
 * @param {string} html
 * @returns {string}
 */
export function ensureFaviconTags(html) {
  if (typeof html !== 'string' || !html) return html
  if (!/<head[\s>]/i.test(html)) return html
  if (/favicon\.ico/i.test(html)) return html

  const block = `${FAVICON_HEAD_HTML}\n`

  // Prefer inserting after viewport meta, then charset, else after <head>
  const viewportMatch = html.match(/<meta[^>]+name=["']viewport["'][^>]*>\s*/i)
  if (viewportMatch && viewportMatch.index != null) {
    const at = viewportMatch.index + viewportMatch[0].length
    return html.slice(0, at) + block + html.slice(at)
  }

  const charsetMatch = html.match(/<meta[^>]+charset[^>]*>\s*/i)
  if (charsetMatch && charsetMatch.index != null) {
    const at = charsetMatch.index + charsetMatch[0].length
    return html.slice(0, at) + block + html.slice(at)
  }

  return html.replace(/<head([^>]*)>/i, (m) => `${m}\n${block}`)
}
