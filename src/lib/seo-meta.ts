/** Google SERP display band. Branded and unbranded titles share 60 so SSR and the client agree. */
const TITLE_MAX = 60

/** Code points, not UTF-16 units, so Arabic titles match the 60-character budget. */
export function seoTitleCodePoints(value: string): number {
  return Array.from(value).length
}

export class SeoTitleOverflowError extends Error {
  readonly title: string
  readonly length: number
  readonly max: number

  constructor(title: string, max: number) {
    const length = seoTitleCodePoints(title)
    super(
      `[seo-title] Branded title is ${length} characters (max ${max}). Shorten the source so it already fits. Title: "${title}"`,
    )
    this.name = 'SeoTitleOverflowError'
    this.title = title
    this.length = length
    this.max = max
  }
}
/** Ahrefs / SERP target band for meta descriptions. */
const DESC_MIN = 120
const DESC_MAX = 130

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

function decodeHtmlEntities(input: string): string {
  let out = String(input || '')
  for (let pass = 0; pass < 4; pass += 1) {
    const next = out.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, body: string) => {
      if (body[0] === '#') {
        const hex = body[1] === 'x' || body[1] === 'X'
        const code = hex ? Number.parseInt(body.slice(2), 16) : Number.parseInt(body.slice(1), 10)
        if (!Number.isFinite(code) || code < 0 || code > 0x10ffff) return entity
        return String.fromCodePoint(code)
      }
      const named: Record<string, string> = {
        amp: '&',
        quot: '"',
        apos: "'",
        lt: '<',
        gt: '>',
        nbsp: ' ',
      }
      return named[body.toLowerCase()] ?? entity
    })
    if (next === out) break
    out = next
  }
  return out
}

function stripTags(input: string): string {
  return decodeHtmlEntities(String(input || ''))
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function withEllipsis(text: string, max: number): string {
  const cleaned = String(text || '').trim()
  if (cleaned.length <= max) return cleaned
  const slice = cleaned.slice(0, Math.max(0, max - 3))
  const lastSpace = slice.lastIndexOf(' ')
  if (lastSpace > Math.floor(max * 0.45)) {
    return `${slice.slice(0, lastSpace).trim()}...`
  }
  return `${slice.trim()}...`
}

/**
 * Builds a GSC query-aligned title: `{primary} | {brand}` within TITLE_MAX,
 * truncating the primary segment at a word boundary before dropping keywords.
 */
export function seoTitleForQuery(primary: string | undefined, brand = 'BioNixus'): string {
  const brandSuffix = ` | ${brand}`
  const maxPrimary = TITLE_MAX - brandSuffix.length
  let core = dedupePipeBioNixusTail(String(primary || '').trim())
  core = core.replace(/(\s*\|\s*BioNixus(?:\s+Case\s+Studies)?\s*)+$/i, '').trim()
  const brandEsc = brand.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const exactBrand = new RegExp(`\\s*\\|\\s*${brandEsc}\\s*$`, 'i')
  while (exactBrand.test(core)) {
    core = core.replace(exactBrand, '').trim()
  }
  if (!core) return normalizeSeoTitle(brand, brand)
  if (core.length > maxPrimary) {
    core = withEllipsis(core, maxPrimary)
  }
  return `${core}${brandSuffix}`
}

export function normalizeSeoTitle(title?: string, fallback = 'BioNixus'): string {
  const raw = String(title || fallback).replace(/\s+/g, ' ').trim()
  if (titleHasBrandSuffix(raw)) return fitBrandedSeoTitle(raw, 60, 'BioNixus', 'fallback')
  if (seoTitleCodePoints(raw) <= TITLE_MAX) return raw || fallback
  const phrase = cleanPhraseToBudget(raw, TITLE_MAX)
  const result = phrase || fallback
  if (result !== raw) recordSeoTitleFallback(raw, result)
  return result
}

/**
 * Collapse repeated "| BioNixus" suffixes introduced by CMS + template concatenation.
 */
export function dedupePipeBioNixusTail(title: string): string {
  let t = String(title || '').replace(/\s+/g, ' ').trim()
  while (/\|\s*BioNixus\s*\|\s*BioNixus/i.test(t)) {
    t = t.replace(/\s*\|\s*BioNixus\s*\|\s*BioNixus/gi, ' | BioNixus').trim()
  }
  return t
}

const PLAIN_BRAND_RE = /(?:\s*\|\s*BioNixus\s*)+$/i
const EXTENDED_BRAND_RE = /\|\s*BioNixus\s+(?:Case\s+Studies|Case\s+Study|Blog|Consultancy)\s*$/i

/** True when a title already carries "| BioNixus" or was cut down to a dangling pipe. */
export function titleHasBrandSuffix(title: string | undefined): boolean {
  const clean = String(title || '').replace(/\s+/g, ' ').trim()
  if (EXTENDED_BRAND_RE.test(clean)) return false
  return PLAIN_BRAND_RE.test(clean) || /\|\s*\.?\s*$/.test(clean)
}

/**
 * `strict` is for repo-authored titles: overflow throws.
 * `fallback` is for Sanity fields and slug-derived titles: never throw, and never
 * ship a dangling token, a split country name, or an ellipsis.
 */
export type BrandedTitleFit = 'strict' | 'fallback'

const DANGLING_TAIL =
  /^(?:a|an|and|at|by|for|from|in|of|on|or|the|to|with|no|de|da|do|del|di|du|em|für|fur|pour|vs|versus|abu|saudi|new|south|united|middle|côte|cote|&)$/i

export type SeoTitleFallback = { source: string; result: string }

/** Titles shortened at runtime because they came from CMS copy or a slug. CI prints these and does not fail. */
export const seoTitleFallbackLog: SeoTitleFallback[] = []

function tailToken(word: string): string {
  return word.replace(/[|.,;:'’"“”\-–—&]+$/g, '')
}

function tailIsDangling(words: string[]): boolean {
  if (words.length === 0) return false
  return DANGLING_TAIL.test(tailToken(words[words.length - 1]))
}

/** Drop words from the end until the phrase fits and does not end on a dangling token. No ellipsis. */
export function cleanPhraseToBudget(text: string, budget: number): string {
  const words = String(text || '')
    .replace(/[.…]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)
  while (words.length > 1 && (seoTitleCodePoints(words.join(' ')) > budget || tailIsDangling(words))) {
    words.pop()
  }
  while (words.length > 0 && tailIsDangling(words)) words.pop()
  if (words.length > 0) {
    words[words.length - 1] = words[words.length - 1].replace(/[|.,;:\-–—&\s]+$/g, '')
  }
  while (words.length > 0 && tailIsDangling(words)) words.pop()
  const phrase = words.join(' ').trim()
  if (seoTitleCodePoints(phrase) <= budget) return phrase
  return ''
}

function recordSeoTitleFallback(source: string, result: string): void {
  seoTitleFallbackLog.push({ source, result })
  console.warn(`[seo-title] fallback "${source}" -> "${result}"`)
}

function stripBrand(title: string, brand: string): string {
  let core = dedupePipeBioNixusTail(String(title || '').replace(/\s+/g, ' ').trim())
  core = core.replace(/(?:\s*\|\s*BioNixus)+\s*(?:\|\s*\.?)?\s*$/i, '').trim()
  const brandEsc = brand.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const exactBrand = new RegExp(`\\s*\\|\\s*${brandEsc}\\s*$`, 'i')
  while (exactBrand.test(core)) core = core.replace(exactBrand, '').trim()
  return core.replace(/[.…]+$/g, '').trim()
}

/**
 * Append " | {brand}" when the branded title already fits.
 * `strict` throws above `max`. `fallback` (Sanity and slug-derived titles) returns a clean phrase.
 */
export function fitBrandedSeoTitle(
  title: string | undefined,
  max = 60,
  brand = 'BioNixus',
  fit: BrandedTitleFit = 'fallback',
): string {
  const brandSuffix = ` | ${brand}`
  const core = stripBrand(String(title || ''), brand)
  if (!core) return brand
  const fitted = `${core}${brandSuffix}`
  const fits = seoTitleCodePoints(fitted) <= max && !tailIsDangling(core.split(' '))
  if (fits) return fitted
  if (fit === 'strict') throw new SeoTitleOverflowError(fitted, max)
  const phrase = cleanPhraseToBudget(core, Math.max(12, max - brandSuffix.length))
  let result = phrase ? `${phrase}${brandSuffix}` : ''
  if (!result || seoTitleCodePoints(result) > max || tailIsDangling(phrase.split(' '))) {
    const bare = cleanPhraseToBudget(core, max)
    result = bare || brand
  }
  if (result !== fitted) recordSeoTitleFallback(fitted, result)
  return result
}

/**
 * Use a CMS `seoTitle` unchanged when it already fits.
 * Add the brand only when that still fits. Otherwise fall back to a clean phrase.
 */
export function seoTitleWithBrandOnce(primary: string | undefined, brand = 'BioNixus'): string {
  const clean = String(primary || '').replace(/\s+/g, ' ').trim()
  if (!clean) return brand
  const alreadyFits = seoTitleCodePoints(clean) <= 60 && !tailIsDangling(clean.split(' ')) && !/[.…]$/.test(clean)
  if (alreadyFits && !titleHasBrandSuffix(clean) && seoTitleCodePoints(`${clean} | ${brand}`) > 60) {
    return clean
  }
  return fitBrandedSeoTitle(clean, 60, brand, 'fallback')
}

const DEFAULT_DESC_PAD =
  ' BioNixus healthcare market research for pharmaceutical, medtech, and payer teams in GCC, MENA, and Europe.'

/** Normalize copy to the 120–130 character SERP band (trim, pad, or ellipsize). */
export function formatMetaDescriptionInRange(
  seed: string,
  pad: string = DEFAULT_DESC_PAD,
): string {
  let out = stripTags(seed).replace(/\s+/g, ' ').trim()
  if (!out) {
    out = 'BioNixus healthcare market research insights and services.'
  }

  const suffix = stripTags(pad)
  if (out.length < DESC_MIN && suffix) {
    out = stripTags(`${out}${suffix}`)
  }
  if (out.length < DESC_MIN) {
    out = stripTags(
      `${out} Trusted pharmaceutical and healthcare market research across GCC, MENA, and Europe.`,
    )
  }
  if (out.length > DESC_MAX) {
    out = withEllipsis(out, DESC_MAX)
  }
  return out
}

export function buildSeoDescription(params: {
  preferred?: string
  bodySource?: string
  fallback?: string
}): string {
  const preferred = stripTags(params.preferred || '')
  const body = stripTags(params.bodySource || '')
  const fallback = stripTags(
    params.fallback || 'BioNixus healthcare market research insights and services.',
  )

  const seed = preferred || body || fallback
  return formatMetaDescriptionInRange(
    seed,
    body && body !== seed
      ? ` ${body}`
      : DEFAULT_DESC_PAD,
  )
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

