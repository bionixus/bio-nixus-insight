/**
 * Creates or syncs the Sanity blogPost "Top Market Research Companies in Egypt (2026 Guide)"
 * from scripts/data/top-market-research-companies-egypt-2026-body.html + cover in public/.
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-top-market-research-companies-egypt-2026.mjs
 * Sync existing: node scripts/publish-top-market-research-companies-egypt-2026.mjs --sync-existing
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SLUG = 'top-market-research-companies-egypt-2026'
const COVER_FILENAME = 'top-market-research-companies-egypt-2026-cover.jpg'
const ARTICLE_H1 =
  'Top Market Research Companies in Egypt (2026 Guide)'
const ARTICLE_EXCERPT =
  'An independent guide to the 10 leading market research companies operating in Egypt for 2026 — healthcare, pharma, and consumer research firms compared by methodology, Egypt expertise, EDA awareness, and what to look for when shortlisting a research partner.'
const SEO_META_TITLE = 'Top Market Research Companies in Egypt 2026 | BioNixus'
const SEO_META_DESCRIPTION =
  'Independent 2026 guide: 10 leading market research firms in Egypt for healthcare, pharma, and consumer research. EDA-aware, Arabic-English bilingual.'
const OG_DESCRIPTION =
  'Independent guide: 10 leading market research firms in Egypt for healthcare, pharma, and consumer research — compared by capability and Egypt expertise.'

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

function withKeys(items) {
  return items.map((item, i) => ({
    ...item,
    _key: item._key || `k-${i}-${Math.random().toString(36).slice(2, 9)}`,
  }))
}

function buildSharedContent(bodyHtml) {
  return {
    title: ARTICLE_H1.slice(0, 200),
    bodyHtml,
    excerpt: ARTICLE_EXCERPT,
    executiveSummary: withKeys([
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Use this 2026 guide to compare the 10 leading market research firms in Egypt — from global networks like Kantar and Ipsos to Egypt-headquartered specialists like BioNixus. Evaluate by pharma experience, EDA awareness, bilingual execution, and data integrity.',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'Why Egypt matters for market research in 2026', anchor: 'why-egypt' },
      { heading: 'How to evaluate an Egypt research partner', anchor: 'buyer-criteria' },
      { heading: 'BioNixus', anchor: 'bionixus' },
      { heading: 'Kantar Egypt', anchor: 'kantar' },
      { heading: 'Ipsos Egypt', anchor: 'ipsos' },
      { heading: 'NielsenIQ', anchor: 'nielsen' },
      { heading: 'AMRB / Market Vision', anchor: 'amrb' },
      { heading: 'YouGov', anchor: 'yougov' },
      { heading: 'Infomine Research', anchor: 'infomine' },
      { heading: 'Alkoun MEA', anchor: 'alkoun' },
      { heading: 'Meraya Research', anchor: 'meraya' },
      { heading: 'Euromonitor International', anchor: 'euromonitor' },
      { heading: 'Healthcare vs consumer research', anchor: 'healthcare-vs-consumer' },
      { heading: 'Conclusion', anchor: 'conclusion' },
    ]),
    faq: withKeys([
      {
        question: 'What are the top market research companies in Egypt?',
        answer:
          'Leading market research firms in Egypt include BioNixus, Kantar Egypt, Ipsos Egypt, NielsenIQ, AMRB/Market Vision, YouGov, Infomine, Alkoun MEA, Meraya Research, and Euromonitor International. BioNixus is the only Egypt-based firm offering dual-practice coverage across both healthcare/pharma and consumer research.',
      },
      {
        question: 'How much does market research cost in Egypt?',
        answer:
          'Custom market research engagements in Egypt typically range from $15,000 to $50,000 per project depending on scope, methodology, geography, and therapeutic or sector complexity. Multi-country MENA programmes start higher.',
      },
      {
        question: 'Which firm does pharma market research in Egypt?',
        answer:
          'BioNixus specialises in pharmaceutical market research in Egypt and the wider MENA region, covering KOL mapping, market access, HTA submissions, pharmacoeconomics, launch readiness, and competitive intelligence for global pharma clients.',
      },
      {
        question: 'Should I use a global network or local specialist for Egypt research?',
        answer:
          'It depends on your needs. Global networks offer benchmarking and large-scale quant infrastructure. Local specialists offer deeper market knowledge, EDA regulatory awareness, and bilingual Arabic-English execution. Many clients combine both.',
      },
      {
        question: 'What research methods work best in Egypt?',
        answer:
          'A mixed-method design is usually most reliable: quantitative surveys (CATI, online), qualitative in-depth interviews, and KOL mapping with strict recruitment validation. Method selection should be guided by the business question.',
      },
      {
        question: 'How does the EDA affect market research planning in Egypt?',
        answer:
          'The EDA oversees drug registration, pricing, and pharmacovigilance. Registration takes 12–24 months. Market research must account for EDA requirements when generating evidence for regulatory submissions and market access strategy.',
      },
      {
        question: 'How do I evaluate a market research firm for Egypt healthcare work?',
        answer:
          'Key criteria: Egypt pharma experience, EDA regulatory awareness, Arabic-English bilingual execution, physician/KOL recruitment quality, data integrity controls, therapy area depth, and ability to connect findings to commercial decisions.',
      },
    ]),
  }
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

async function main() {
  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in environment (.env).')
    process.exit(1)
  }

  const syncExisting = process.argv.includes('--sync-existing')
  const bodyHtmlPath = path.join(root, 'scripts/data/top-market-research-companies-egypt-2026-body.html')
  const bodyHtml = fs.readFileSync(bodyHtmlPath, 'utf8')
  const shared = buildSharedContent(bodyHtml)

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false })

  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, { slug: SLUG })

  if (syncExisting) {
    if (!existingId) {
      console.error(`No blogPost with slug "${SLUG}" found. Run without --sync-existing to create.`)
      process.exit(1)
    }
    await client
      .patch(existingId)
      .set({
        ...shared,
        'seo.metaTitle': SEO_META_TITLE,
        'seo.metaDescription': SEO_META_DESCRIPTION,
        'openGraph.ogDescription': OG_DESCRIPTION,
        updatedAt: new Date().toISOString(),
      })
      .commit()
    console.log('Synced blogPost:', existingId)
    console.log('URL:', `https://www.bionixus.com/blog/${SLUG}`)
    console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${existingId}`)
    return
  }

  if (existingId) {
    console.error(`A blogPost with slug "${SLUG}" already exists (_id=${existingId}). Delete or change slug first, or run with --sync-existing.`)
    process.exit(1)
  }

  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME)
  if (!fs.existsSync(coverPath)) {
    console.error('Cover image missing:', coverPath)
    console.log('Generate a cover image first and place it at:', coverPath)
    process.exit(1)
  }

  const authorId = await client.fetch(`*[_type == "author" && defined(name)][0]._id`)
  if (!authorId) {
    console.error('No author document found. Create an author in Sanity Studio first.')
    process.exit(1)
  }

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (slug.current == "healthcare-market-research" || title == "Healthcare Market Research" || title == "Industry Insights")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`))

  const mainImage = await uploadImage(
    client,
    coverPath,
    'Modern Cairo skyline with healthcare analytics motif, editorial cover for top market research companies in Egypt 2026 guide',
    COVER_FILENAME,
  )
  const ogImage = await uploadImage(
    client,
    coverPath,
    'Open graph image: top market research companies in Egypt 2026',
    `og-${COVER_FILENAME}`,
  )

  const publishedAt = new Date().toISOString()

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: SEO_META_TITLE,
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'top market research companies Egypt',
      keywords: [
        'market research companies Egypt',
        'healthcare market research Egypt',
        'pharmaceutical market research Egypt',
        'BioNixus',
        'EDA',
        'Egypt pharma research',
        'KOL mapping Egypt',
        'consumer research Egypt',
      ],
      canonicalUrl: `https://www.bionixus.com/blog/${SLUG}`,
      noIndex: false,
    },
    openGraph: {
      ogTitle: 'Top Market Research Companies in Egypt (2026 Guide) | BioNixus',
      ogDescription: OG_DESCRIPTION,
      ogImage,
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-eg-mr' }] : [],
    category: 'Healthcare Market Research',
    country: 'Egypt',
    language: 'en',
    readingTime: 14,
    tags: [
      'Egypt',
      'Healthcare Market Research',
      'Market Research',
      'EDA',
      'Pharmaceutical Research',
      'BioNixus',
      'Consumer Research',
      'MENA',
    ],
    ctaSection: {
      title: 'Scope healthcare market research for Egypt',
      description:
        'BioNixus delivers custom pharmaceutical and consumer market research across Egypt and MENA — physician surveys, KOL mapping, competitive intelligence, and market access strategy.',
      buttonText: 'Request a proposal',
      buttonUrl: 'https://www.bionixus.com/contact',
    },
    body: [],
  }

  const created = await client.create(doc)
  console.log('Created blogPost:', created._id)
  console.log('URL:', `https://www.bionixus.com/blog/${SLUG}`)
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
