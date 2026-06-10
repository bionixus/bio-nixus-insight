/**
 * Publishes Sanity pressRelease: BioNixus São Paulo / LATAM expansion (Q2 2026).
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (Editor)
 * Run: node scripts/publish-brazil-latam-press-release-2026.mjs
 * Sync existing: node scripts/publish-brazil-latam-press-release-2026.mjs --sync-existing
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'
import sharp from 'sharp'
import {
  SLUG,
  HEADLINE,
  SUBHEADLINE,
  DATELINE,
  SPOKESPERSON_NAME,
  SEO_META_TITLE,
  SEO_META_DESCRIPTION,
  OG_DESCRIPTION,
  RELATED_REPORT_SLUG,
  BOILERPLATE,
  HERO_ALT,
  buildPressReleaseBody,
} from './data/press-release-brazil-latam-2026.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const AUTHOR_NAME = SPOKESPERSON_NAME
const COVER_FILENAME = 'bionixus-brazil-latam-press-2026-cover.jpg'

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

async function ensureCoverImage(outPath) {
  const width = 1400
  const height = 700
  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="45%" style="stop-color:#1e293b"/>
      <stop offset="100%" style="stop-color:#334155"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect x="0" y="0" width="100%" height="6" fill="#b91c1c"/>
  <text x="80" y="120" fill="#f8fafc" font-family="Georgia, serif" font-size="42" font-weight="600">BioNixus</text>
  <text x="80" y="200" fill="#e2e8f0" font-family="Helvetica, Arial, sans-serif" font-size="28">Latin America expansion</text>
  <text x="80" y="260" fill="#cbd5e1" font-family="Helvetica, Arial, sans-serif" font-size="22">São Paulo office · Opening Q2 2026</text>
  <text x="80" y="620" fill="#94a3b8" font-family="Helvetica, Arial, sans-serif" font-size="16">Healthcare &amp; pharmaceutical market research</text>
</svg>`
  const buf = await sharp(Buffer.from(svg)).jpeg({ quality: 90, progressive: true }).toBuffer()
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, buf)
  return outPath
}

async function uploadImage(client, filePath, alt, filename) {
  let buf = fs.readFileSync(filePath)
  buf = await sharp(buf)
    .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 88, progressive: true })
    .toBuffer()
  const asset = await client.assets.upload('image', buf, {
    contentType: 'image/jpeg',
    filename,
  })
  return {
    _type: 'image',
    alt,
    asset: { _type: 'reference', _ref: asset._id },
  }
}

function buildDocument(heroImage, ogImage) {
  const now = new Date().toISOString()
  return {
    _type: 'pressRelease',
    headline: HEADLINE,
    slug: { _type: 'slug', current: SLUG },
    subheadline: SUBHEADLINE,
    dateline: DATELINE,
    embargo: undefined,
    publishedAt: now,
    updatedAt: now,
    heroImage,
    body: buildPressReleaseBody(),
    relatedReportSlug: RELATED_REPORT_SLUG,
    boilerplate: BOILERPLATE,
    seo: {
      metaTitle: SEO_META_TITLE,
      metaDescription: SEO_META_DESCRIPTION,
      noIndex: false,
    },
    openGraph: {
      ogTitle: HEADLINE,
      ogDescription: OG_DESCRIPTION,
      ogImage,
    },
  }
}

async function ensureAuthorTitle(client) {
  const author = await client.fetch(
    `*[_type == "author" && name == $name][0]{ _id, title }`,
    { name: AUTHOR_NAME },
  )
  if (!author?._id) {
    console.warn(`Author "${AUTHOR_NAME}" not found in Sanity; quote still uses Research Director in release body.`)
    return
  }
  if (author.title !== 'Research Director') {
    await client.patch(author._id).set({ title: 'Research Director' }).commit()
    console.log(`Updated author ${AUTHOR_NAME} title → Research Director`)
  }
}

async function main() {
  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in .env')
    process.exit(1)
  }

  const syncExisting = process.argv.includes('--sync-existing')
  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false })

  const coverPath = path.join(root, 'public/images/press', COVER_FILENAME)
  await ensureCoverImage(coverPath)

  const existingId = await client.fetch(`*[_type == "pressRelease" && slug.current == $slug][0]._id`, {
    slug: SLUG,
  })

  const heroImage = await uploadImage(client, coverPath, HERO_ALT, COVER_FILENAME)
  const ogImage = await uploadImage(client, coverPath, HERO_ALT, `og-${COVER_FILENAME}`)
  const doc = buildDocument(heroImage, ogImage)

  await ensureAuthorTitle(client)

  if (syncExisting) {
    if (!existingId) {
      console.error(`No pressRelease with slug "${SLUG}". Run without --sync-existing to create.`)
      process.exit(1)
    }
    await client
      .patch(existingId)
      .set({
        ...doc,
        slug: { _type: 'slug', current: SLUG },
      })
      .commit()
    console.log('Synced pressRelease:', existingId)
  } else if (existingId) {
    console.error(
      `pressRelease "${SLUG}" already exists (_id=${existingId}). Use --sync-existing or delete first.`,
    )
    process.exit(1)
  } else {
    const created = await client.create(doc)
    console.log('Created pressRelease:', created._id)
  }

  console.log('Spokesperson:', `${SPOKESPERSON_NAME}, Research Director`)
  console.log('URL:', `https://www.bionixus.com/news/${SLUG}`)
  console.log('Studio:', `https://${projectId}.sanity.studio`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
