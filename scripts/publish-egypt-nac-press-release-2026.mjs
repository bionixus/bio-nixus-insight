/**
 * Publishes Sanity pressRelease: BioNixus Egypt New Administrative Capital office (Q4 2026).
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (Editor)
 * Run: node scripts/publish-egypt-nac-press-release-2026.mjs
 * Sync existing: node scripts/publish-egypt-nac-press-release-2026.mjs --sync-existing
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
  SPOKESPERSON_TITLE,
  SEO_META_TITLE,
  SEO_META_DESCRIPTION,
  OG_DESCRIPTION,
  RELATED_REPORT_SLUG,
  PUBLISHED_AT,
  BOILERPLATE,
  HERO_ALT,
  HERO_CAPTION,
  buildPressReleaseBody,
} from './data/press-release-egypt-nac-office-2026.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const COVER_FILENAME = 'bionixus-egypt-nac-office-2026-cover.jpg'
const OG_FILENAME = 'bionixus-egypt-nac-office-2026-og.jpg'

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

async function uploadImage(client, filePath, alt, filename, caption) {
  let buf = fs.readFileSync(filePath)
  buf = await sharp(buf)
    .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 88, progressive: true })
    .toBuffer()
  const asset = await client.assets.upload('image', buf, {
    contentType: 'image/jpeg',
    filename,
  })
  const image = {
    _type: 'image',
    alt,
    asset: { _type: 'reference', _ref: asset._id },
  }
  if (caption) image.caption = caption
  return image
}

function buildDocument(heroImage, ogImage) {
  return {
    _type: 'pressRelease',
    headline: HEADLINE,
    slug: { _type: 'slug', current: SLUG },
    subheadline: SUBHEADLINE,
    dateline: DATELINE,
    embargo: undefined,
    publishedAt: PUBLISHED_AT,
    updatedAt: new Date().toISOString(),
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

async function ensureSpokespersonAuthor(client) {
  const author = await client.fetch(
    `*[_type == "author" && name == $name][0]{ _id, title }`,
    { name: SPOKESPERSON_NAME },
  )
  if (!author?._id) {
    // Try without "Dr." prefix
    const alt = await client.fetch(
      `*[_type == "author" && name match $name][0]{ _id, name, title }`,
      { name: '*Alsaadany*' },
    )
    if (!alt?._id) {
      console.warn(`Author matching "${SPOKESPERSON_NAME}" not found; quotes still attribute MEA Director in body.`)
      return
    }
    if (alt.title !== SPOKESPERSON_TITLE) {
      await client.patch(alt._id).set({ title: SPOKESPERSON_TITLE }).commit()
      console.log(`Updated author ${alt.name} title → ${SPOKESPERSON_TITLE}`)
    }
    return
  }
  if (author.title !== SPOKESPERSON_TITLE) {
    await client.patch(author._id).set({ title: SPOKESPERSON_TITLE }).commit()
    console.log(`Updated author ${SPOKESPERSON_NAME} title → ${SPOKESPERSON_TITLE}`)
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
  const ogPath = path.join(root, 'public/images/press', OG_FILENAME)
  if (!fs.existsSync(coverPath) || !fs.existsSync(ogPath)) {
    console.error('Missing cover/OG images under public/images/press/')
    process.exit(1)
  }

  const existingId = await client.fetch(`*[_type == "pressRelease" && slug.current == $slug][0]._id`, {
    slug: SLUG,
  })

  const heroImage = await uploadImage(client, coverPath, HERO_ALT, COVER_FILENAME, HERO_CAPTION)
  const ogImage = await uploadImage(client, ogPath, HERO_ALT, OG_FILENAME)
  const doc = buildDocument(heroImage, ogImage)

  await ensureSpokespersonAuthor(client)

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

  console.log('Spokesperson:', `${SPOKESPERSON_NAME}, ${SPOKESPERSON_TITLE}`)
  console.log('URL:', `https://www.bionixus.com/news/${SLUG}`)
  console.log('Studio:', `https://${projectId}.sanity.studio`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
