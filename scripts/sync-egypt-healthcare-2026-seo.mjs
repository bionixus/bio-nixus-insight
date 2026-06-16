/**
 * Sync the Sanity `blogPost` document for "Healthcare Overview: Egypt Market 2026"
 * with the CTR-optimized title and meta description that target the
 * "cairo hospitals healthcare 2023-2026" GSC query (15,532 imp, 0% CTR before fix).
 *
 * This script is SEO-only — it does not touch body, FAQ, cover image, or any other
 * content. The same constants are mirrored in src/pages/BlogPost.tsx so the rendered
 * page picks up the new values immediately even before this sync runs.
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write).
 *
 * Usage:
 *   node scripts/sync-egypt-healthcare-2026-seo.mjs              # apply patch
 *   node scripts/sync-egypt-healthcare-2026-seo.mjs --dry-run    # preview only
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SLUG = 'healthcare-overview-egypt-market-2026'

/** Kept in sync with EGYPT_HEALTHCARE_2026_* constants in src/pages/BlogPost.tsx */
const SEO_META_TITLE = 'Cairo Hospitals & Egypt Healthcare Market 2026 | BioNixus'
const SEO_META_DESCRIPTION =
  "Egypt healthcare market 2026: Cairo's hospital landscape, EDA pharma regulation, payer shifts & primary physician data — the analyst-grade overview from BioNixus."
const OG_TITLE = 'Egypt Healthcare Market 2026 — Cairo Hospitals, Pharma & Physician Data'
const OG_DESCRIPTION =
  'Full Egypt healthcare overview for 2026 — Cairo hospital landscape, EDA regulation, pharmaceutical market size, and primary physician research from BioNixus.'
const FOCUS_KEYWORD = 'cairo hospitals healthcare 2026'
const KEYWORDS = [
  'cairo hospitals',
  'egypt healthcare market 2026',
  'egypt pharmaceutical market',
  'EDA Egypt',
  'cairo hospital data',
  'egypt physician research',
  'MENA healthcare',
  'BioNixus Egypt',
]
const CANONICAL_URL = `https://www.bionixus.com/blog/${SLUG}`

function loadDotEnv() {
  const envPath = path.join(root, '.env')
  if (!fs.existsSync(envPath)) return
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const eq = t.indexOf('=')
    if (eq === -1) continue
    const k = t.slice(0, eq).trim()
    let v = t.slice(eq + 1).trim()
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1)
    }
    if (!process.env[k]) process.env[k] = v
  }
}

loadDotEnv()

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production'
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01'

function fmt(value) {
  if (value === null || value === undefined) return '(empty)'
  if (Array.isArray(value)) return value.length === 0 ? '(empty array)' : value.join(', ')
  const s = String(value)
  return s.length > 0 ? s : '(empty)'
}

async function main() {
  if (!projectId || !dataset || !token) {
    console.error(
      'Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in environment (.env).',
    )
    process.exit(1)
  }

  const dryRun = process.argv.includes('--dry-run')
  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false })

  const existing = await client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      _id,
      title,
      "metaTitle": seo.metaTitle,
      "metaDescription": seo.metaDescription,
      "focusKeyword": seo.focusKeyword,
      "keywords": seo.keywords,
      "canonicalUrl": seo.canonicalUrl,
      "ogTitle": openGraph.ogTitle,
      "ogDescription": openGraph.ogDescription
    }`,
    { slug: SLUG },
  )

  if (!existing) {
    console.error(`No blogPost with slug "${SLUG}" was found in dataset "${dataset}".`)
    console.error('Nothing to sync. Confirm the slug in Sanity Studio and try again.')
    process.exit(1)
  }

  console.log('Found blogPost:')
  console.log(`  _id    : ${existing._id}`)
  console.log(`  title  : ${existing.title}`)
  console.log('')
  console.log('Current SEO/OG fields:')
  console.log(`  seo.metaTitle              : ${fmt(existing.metaTitle)}`)
  console.log(`  seo.metaDescription        : ${fmt(existing.metaDescription)}`)
  console.log(`  seo.focusKeyword           : ${fmt(existing.focusKeyword)}`)
  console.log(`  seo.keywords               : ${fmt(existing.keywords)}`)
  console.log(`  seo.canonicalUrl           : ${fmt(existing.canonicalUrl)}`)
  console.log(`  openGraph.ogTitle          : ${fmt(existing.ogTitle)}`)
  console.log(`  openGraph.ogDescription    : ${fmt(existing.ogDescription)}`)
  console.log('')
  console.log('Will set:')
  console.log(`  seo.metaTitle              : ${SEO_META_TITLE}`)
  console.log(`  seo.metaDescription        : ${SEO_META_DESCRIPTION}`)
  console.log(`  seo.focusKeyword           : ${FOCUS_KEYWORD}`)
  console.log(`  seo.keywords               : ${KEYWORDS.join(', ')}`)
  console.log(`  seo.canonicalUrl           : ${CANONICAL_URL}`)
  console.log(`  openGraph.ogTitle          : ${OG_TITLE}`)
  console.log(`  openGraph.ogDescription    : ${OG_DESCRIPTION}`)
  console.log('')

  if (dryRun) {
    console.log('--dry-run set — no write performed. Re-run without --dry-run to apply.')
    return
  }

  const now = new Date().toISOString()
  await client
    .patch(existing._id)
    .set({
      'seo.metaTitle': SEO_META_TITLE,
      'seo.metaDescription': SEO_META_DESCRIPTION,
      'seo.focusKeyword': FOCUS_KEYWORD,
      'seo.keywords': KEYWORDS,
      'seo.canonicalUrl': CANONICAL_URL,
      'openGraph.ogTitle': OG_TITLE,
      'openGraph.ogDescription': OG_DESCRIPTION,
      updatedAt: now,
    })
    .commit()

  console.log(`Patched blogPost ${existing._id} at ${now}`)
  console.log(`URL    : ${CANONICAL_URL}`)
  console.log(`Studio : https://${projectId}.sanity.studio/desk/blogPost;${existing._id}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
