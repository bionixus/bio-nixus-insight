/**
 * Shared favicon / apple-touch head snippet for SPA shell, static HTML, and SSR.
 * Google SERP brand icons expect these link tags on every HTML document.
 *
 * Bump FAVICON_CACHE_BUST whenever icon binaries change so browsers/CDNs refresh.
 */

export const FAVICON_CACHE_BUST = '3'

const v = FAVICON_CACHE_BUST

export const FAVICON_HEAD_HTML = [
  `<link rel="icon" href="/favicon.ico?v=${v}" sizes="any">`,
  `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=${v}">`,
  `<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=${v}">`,
  `<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png?v=${v}">`,
  `<link rel="apple-touch-icon" href="/apple-touch-icon.png?v=${v}">`,
].join('\n')

const FAVICON_LINK_RE =
  /<link\b[^>]*(?:rel=["'](?:icon|apple-touch-icon|shortcut icon)["']|href=["'][^"']*favicon[^"']*["']|href=["'][^"']*apple-touch-icon[^"']*["'])[^>]*>\s*/gi

/**
 * Ensure `html` has current favicon / apple-touch link tags.
 * Replaces any existing favicon-related link tags so cache-bust versions stay current.
 *
 * @param {string} html
 * @returns {string}
 */
export function ensureFaviconTags(html) {
  if (typeof html !== 'string' || !html) return html
  if (!/<head[\s>]/i.test(html)) return html

  const withoutOld = html.replace(FAVICON_LINK_RE, '')
  const block = `${FAVICON_HEAD_HTML}\n`

  const viewportMatch = withoutOld.match(/<meta[^>]+name=["']viewport["'][^>]*>\s*/i)
  if (viewportMatch && viewportMatch.index != null) {
    const at = viewportMatch.index + viewportMatch[0].length
    return withoutOld.slice(0, at) + block + withoutOld.slice(at)
  }

  const charsetMatch = withoutOld.match(/<meta[^>]+charset[^>]*>\s*/i)
  if (charsetMatch && charsetMatch.index != null) {
    const at = charsetMatch.index + charsetMatch[0].length
    return withoutOld.slice(0, at) + block + withoutOld.slice(at)
  }

  return withoutOld.replace(/<head([^>]*)>/i, (m) => `${m}\n${block}`)
}
