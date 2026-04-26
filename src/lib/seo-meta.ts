const TITLE_MAX = 60
const DESC_MIN = 70
const DESC_MAX = 155

/** Tokens to uppercase when building a readable heading from a URL slug (SSR loading states, etc.). */
const SLUG_HEADING_ACRONYMS = new Set([
  'gcc',
  'uae',
  'ksa',
  'mena',
  'emea',
  'rwe',
  'kol',
  'hta',
  'nice',
  'cns',
  'fda',
  'sfda',
  'moh',
  'mohap',
  'dha',
  'doh',
  'nhs',
  'uk',
  'us',
  'eu',
  'ai',
])

/** Turns `gcc-pharmacoeconomics` → `GCC Pharmacoeconomics` for visible <h1> fallbacks. */
export function formatSlugAsPageHeading(slug: string): string {
  return String(slug || '')
    .split('-')
    .filter(Boolean)
    .map((part) =>
      SLUG_HEADING_ACRONYMS.has(part.toLowerCase())
        ? part.toUpperCase()
        : part.charAt(0).toUpperCase() + part.slice(1),
    )
    .join(' ')
}

function stripTags(input: string): string {
  return String(input || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function withEllipsis(text: string, max: number): string {
  const cleaned = String(text || '').trim()
  if (cleaned.length <= max) return cleaned
  return `${cleaned.slice(0, Math.max(0, max - 3)).trim()}...`
}

export function normalizeSeoTitle(title?: string, fallback = 'BioNixus'): string {
  return withEllipsis(title || fallback, TITLE_MAX)
}

export function buildSeoDescription(params: {
  preferred?: string
  bodySource?: string
  fallback?: string
}): string {
  const preferred = stripTags(params.preferred || '')
  const body = stripTags(params.bodySource || '')
  const fallback = stripTags(
    params.fallback || 'BioNixus healthcare market research insights and services.'
  )

  let out = preferred || body || fallback
  if (!out) out = fallback
  out = withEllipsis(out, DESC_MAX)

  if (out.length < DESC_MIN) {
    out = withEllipsis(stripTags(`${out} ${body} ${fallback}`), DESC_MAX)
  }
  if (out.length < DESC_MIN) {
    out = withEllipsis(`${out} Trusted insights across GCC, MENA, and Europe.`, DESC_MAX)
  }

  return out
}

export function ensureFallbackH1(fallbackTitle: string) {
  if (typeof document === 'undefined') return
  const main = document.querySelector('main')
  if (!main) return

  const realH1 = main.querySelector('h1')
  const existingFallback = main.querySelector('h1[data-seo-fallback-h1="true"]')

  if (realH1) {
    if (existingFallback) existingFallback.remove()
    return
  }

  if (!existingFallback) {
    const h1 = document.createElement('h1')
    h1.setAttribute('data-seo-fallback-h1', 'true')
    h1.textContent = normalizeSeoTitle(fallbackTitle, 'BioNixus')
    h1.style.position = 'absolute'
    h1.style.width = '1px'
    h1.style.height = '1px'
    h1.style.padding = '0'
    h1.style.margin = '-1px'
    h1.style.overflow = 'hidden'
    h1.style.clip = 'rect(0, 0, 0, 0)'
    h1.style.whiteSpace = 'nowrap'
    h1.style.border = '0'
    main.prepend(h1)
  }
}

