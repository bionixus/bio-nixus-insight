/**
 * Fails the build when a routed page would ship a cut or over-budget title.
 *
 * Branded titles (trailing " | BioNixus") must already be 60 code points or fewer.
 * CTR overrides ship exact and may be longer; they are still checked for dangling
 * tokens, split country names, and ellipsis cuts. /home-staging is ignored.
 *
 * The Italy healthcare list is allowlisted until PR #357 lands its 58-character
 * title. Rendering that URL throws from fitBrandedSeoTitle on this branch.
 *
 * Usage: vite-node scripts/seo/verify-title-integrity.ts
 */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { CTR_SEO_BY_PATH } from '../../src/server/ctr-seo-overrides.js'
import {
  MATRIX_COUNTRIES,
  MATRIX_INDUSTRIES,
  buildMatrixSeoCopy,
} from '../../src/data/industryMarketResearchMatrix.ts'
import { fitBrandedSeoTitle, seoTitleFallbackLog, seoTitleWithBrandOnce } from '../../src/lib/seo-meta.ts'

const root = join(import.meta.dirname, '..', '..')
const ALLOW_LONG_SOURCE = new Set([
  '/insights/top-healthcare-market-research-companies-italy-2026',
])

const DANGLING =
  /(?:^|\s)(?:in|for|of|the|and|to|at|on|no|de|da|do|del|di|du|em|für|fur|pour|a|an|abu|saudi|new|south|united|côte|cote)\s+\|\s+bionixus$/i

function codePoints(value: string): number {
  return Array.from(value).length
}

function walk(dir: string, acc: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue
    const full = join(dir, name)
    if (statSync(full).isDirectory()) walk(full, acc)
    else if (/\.tsx?$/.test(name) && !name.includes('.test.') && !name.includes('__tests__')) acc.push(full)
  }
  return acc
}

function canonicalPaths(text: string): string[] {
  const found = new Set<string>()
  for (const match of text.matchAll(/https:\/\/www\.bionixus\.com(\/[a-z0-9\-/]+)/g)) found.add(match[1])
  for (const match of text.matchAll(/canonical="(\/[^"]+)"/g)) found.add(match[1])
  for (const match of text.matchAll(/slug:\s*'(\/[^']+)'/g)) found.add(match[1])
  return [...found]
}

function documentTitles(text: string): string[] {
  const titles: string[] = []
  for (const match of text.matchAll(/<title>([^<]+)<\/title>/g)) titles.push(match[1].trim())
  for (const match of text.matchAll(/<SEOHead[\s\S]{0,500}?title="([^"]+)"/g)) titles.push(match[1])
  for (const match of text.matchAll(/seoTitle:\s*\n?\s*'([^'\n]+)'/g)) titles.push(match[1])
  for (const match of text.matchAll(/PAGE_TITLE\s*=\s*'([^'\n]+)'/g)) titles.push(match[1])
  for (const match of text.matchAll(/metaTitle:\s*'([^'\n]+)'/g)) titles.push(match[1])
  return titles
}

function ogTitles(text: string): string[] {
  return [...text.matchAll(/<OpenGraphMeta[\s\S]{0,400}?title="([^"]+)"/g)].map((m) => m[1])
}

function branded(title: string): boolean {
  return /\|\s*BioNixus\s*$/i.test(title)
}

function problemsFor(title: string, kind: 'title' | 'og', path: string, ctr: boolean): string[] {
  const issues: string[] = []
  if (!title || title.includes('${') || title.includes('{')) return issues
  if (DANGLING.test(title)) issues.push(`${kind} ends on a dangling or split token`)
  if (/(\.\.\.|…)\s*$/.test(title)) issues.push(`${kind} ends in an ellipsis`)
  if (kind === 'title' && branded(title) && codePoints(title) > 60 && !ctr && !ALLOW_LONG_SOURCE.has(path)) {
    if (!/[\u0590-\u08FF]/.test(title)) issues.push(`${kind} is ${codePoints(title)} characters (max 60)`)
  }
  return issues
}

const routesText = readFileSync(join(root, 'src/routes.tsx'), 'utf8')
const dedicated = new Set([...routesText.matchAll(/path:\s*'(\/[^']+)'/g)].map((m) => m[1]))
const failures: string[] = []

function report(where: string, title: string, issues: string[]) {
  for (const issue of issues) failures.push(`${where}: ${issue}: ${title}`)
}

for (const file of walk(join(root, 'src'))) {
  const rel = file.slice(root.length + 1)
  if (rel.includes('home-staging') || rel.includes('HomeStaging')) continue
  const text = readFileSync(file, 'utf8')
  const paths = canonicalPaths(text).filter((p) => p !== '/home-staging')
  const ctrPath = paths.find((p) => CTR_SEO_BY_PATH[p])
  const ctr = Boolean(ctrPath)
  const emittedPath = ctrPath || paths[0] || rel
  if (rel.startsWith('src/data/topCompanies/') && paths.some((p) => dedicated.has(p))) continue
  const titles = ctr && ctrPath ? [CTR_SEO_BY_PATH[ctrPath].title] : documentTitles(text)
  for (const title of titles) report(`${rel} (${emittedPath})`, title, problemsFor(title, 'title', emittedPath, ctr))
  for (const title of ogTitles(text)) {
    report(`${rel} og (${emittedPath})`, title, problemsFor(title, 'og', emittedPath, false))
  }
}

for (const country of Object.values(MATRIX_COUNTRIES)) {
  for (const industry of Object.values(MATRIX_INDUSTRIES)) {
    if (!industry.published) continue
    const path = `/${country.slug}-${industry.slug}-market-research`
    if (path === '/home-staging') continue
    const ctr = Boolean(CTR_SEO_BY_PATH[path])
    const title = ctr ? CTR_SEO_BY_PATH[path].title : buildMatrixSeoCopy(country, industry).title
    report(path, title, problemsFor(title, 'title', path, ctr))
  }
}

const medtechFiles = [
  'src/pages/templates/DevelopedMarketMedtechPage.tsx',
  'src/pages/templates/DevelopedMarketMedtechListiclePage.tsx',
]
for (const rel of medtechFiles) {
  const text = readFileSync(join(root, rel), 'utf8')
  for (const match of text.matchAll(/'([^'\n]*\| BioNixus)'/g)) {
    report(rel, match[1], problemsFor(match[1], 'title', rel, false))
  }
}

function titleCase(value: string): string {
  return value
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function shellOwnsTitle(pathname: string): boolean {
  if (pathname === '/blog' || pathname.startsWith('/blog/')) return true
  if (pathname.includes('/blog/')) return true
  if (pathname.startsWith('/bionixus-industries/insights')) return true
  if (pathname === '/skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement') return true
  if (pathname.includes('market-report')) return true
  if (pathname.startsWith('/healthcare-market-research')) return true
  if (pathname.startsWith('/case-studies/')) return true
  return false
}

function reportDynamicFallbacks() {
  seoTitleFallbackLog.length = 0
  const seen = new Set<string>()
  const note = (kind: string, source: string) => {
    const before = seoTitleFallbackLog.length
    const output = kind === 'slug' ? fitBrandedSeoTitle(source) : seoTitleWithBrandOnce(source)
    if (output === source || output === `${source.replace(/\s+\|\s*BioNixus\s*$/i, '')} | BioNixus`) {
      seoTitleFallbackLog.length = before
      return
    }
    if (seoTitleFallbackLog.length === before) return
    const row = seoTitleFallbackLog[seoTitleFallbackLog.length - 1]
    const key = `${kind} ${row.source} => ${row.result}`
    if (seen.has(key)) return
    seen.add(key)
    console.log(`  - ${kind}: ${source}`)
    console.log(`    -> ${output}`)
  }

  for (const file of walk(join(root, 'src/data'))) {
    if (!/blog-/i.test(file)) continue
    const text = readFileSync(file, 'utf8')
    for (const match of text.matchAll(/(?:metaTitle|seoMetaTitle|META_TITLE):\s*['"]([^'"\n]+)['"]/g)) {
      note('cms', match[1])
    }
    for (const match of text.matchAll(/(?:META_TITLE|PAGE_TITLE|TITLE_CORE)\s*=\s*'([^'\n]+)'/g)) {
      note('cms', match[1])
    }
  }

  // Only slug titles the shell still emits. Pages with their own Helmet are skipped.
  const criticalSlugPaths = [
    '/skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement',
  ]
  for (const pathname of criticalSlugPaths) {
    if (shellOwnsTitle(pathname)) continue
    const topic = titleCase(pathname.split('/').filter(Boolean).join(' ') || 'page')
    note('slug', `${topic} | BioNixus`)
  }

  console.log(
    seen.size === 0
      ? 'CMS/slug title fallbacks: none'
      : `CMS/slug title fallbacks: ${seen.size} (reported, not a failure)`,
  )
}

reportDynamicFallbacks()

if (failures.length > 0) {
  console.error(`Title integrity check FAILED (${failures.length})`)
  for (const line of failures) console.error(`  - ${line}`)
  process.exit(1)
}

console.log('Title integrity OK')
