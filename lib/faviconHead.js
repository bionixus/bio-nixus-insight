/**
 * Shared favicon / apple-touch head snippet (red brand heart under /icons/).
 * Fresh /icons/bnx-* paths avoid sticky browser caches of legacy /favicon.ico.
 */

export const FAVICON_HEAD_HTML = [
  '<link rel="icon" href="/icons/bnx-favicon.ico" sizes="any">',
  '<link rel="icon" type="image/svg+xml" href="/icons/bnx-icon.svg">',
  '<link rel="icon" type="image/png" sizes="32x32" href="/icons/bnx-favicon-32.png">',
  '<link rel="icon" type="image/png" sizes="48x48" href="/icons/bnx-favicon-48.png">',
  '<link rel="apple-touch-icon" href="/icons/bnx-apple-touch.png">',
].join('\n')

const FAVICON_LINK_RE =
  /<link\b[^>]*(?:rel=["'](?:icon|apple-touch-icon|shortcut icon)["']|href=["'][^"']*(?:favicon|apple-touch-icon|bnx-favicon|bnx-icon|bnx-apple)[^"']*["'])[^>]*>\s*/gi

/**
 * Ensure HTML has current red-heart favicon link tags.
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
