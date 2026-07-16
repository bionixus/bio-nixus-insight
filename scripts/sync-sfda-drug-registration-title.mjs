/**
 * Sync the Sanity `blogPost` for /blog/sfda-drug-registration-guide
 * with the page title: "Pharmaceutical Product Registration in Saudi Arabia: SFDA Guide 2026"
 *
 * Mirrors constants in src/pages/BlogPost.tsx (SFDA_DRUG_REGISTRATION_GUIDE_*).
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write).
 *
 * Usage:
 *   node scripts/sync-sfda-drug-registration-title.mjs              # apply patch
 *   node scripts/sync-sfda-drug-registration-title.mjs --dry-run    # preview only
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SLUG = 'sfda-drug-registration-guide'
const TITLE = 'Pharmaceutical Product Registration in Saudi Arabia: SFDA Guide 2026'
const SEO_META_TITLE = `${TITLE} | BioNixus`
const OG_TITLE = TITLE
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
      "ogTitle": openGraph.ogTitle
    }`,
    { slug: SLUG },
  )

  if (!existing) {
    console.error(`No blogPost with slug "${SLUG}" was found in dataset "${dataset}".`)
    process.exit(1)
  }

  console.log('Found blogPost:')
  console.log(`  _id : ${existing._id}`)
  console.log('')
  console.log('Current:')
  console.log(`  title            : ${fmt(existing.title)}`)
  console.log(`  seo.metaTitle    : ${fmt(existing.metaTitle)}`)
  console.log(`  openGraph.ogTitle: ${fmt(existing.ogTitle)}`)
  console.log('')
  console.log('Will set:')
  console.log(`  title            : ${TITLE}`)
  console.log(`  seo.metaTitle    : ${SEO_META_TITLE}`)
  console.log(`  openGraph.ogTitle: ${OG_TITLE}`)
  console.log('')

  if (dryRun) {
    console.log('--dry-run set — no write performed. Re-run without --dry-run to apply.')
    return
  }

  const now = new Date().toISOString()
  await client
    .patch(existing._id)
    .set({
      title: TITLE,
      'seo.metaTitle': SEO_META_TITLE,
      'openGraph.ogTitle': OG_TITLE,
      updatedAt: now,
    })
    .commit()

  console.log(`Patched blogPost ${existing._id} at ${now}`)
  console.log(`URL: ${CANONICAL_URL}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
