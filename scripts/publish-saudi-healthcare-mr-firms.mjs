/**
 * Creates or syncs the Sanity blogPost "Top Healthcare Market Research Firms in Saudi Arabia"
 * from scripts/data/top-healthcare-market-research-firms-saudi-arabia-body.html + cover in public/.
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-saudi-healthcare-mr-firms.mjs
 * Sync existing: node scripts/publish-saudi-healthcare-mr-firms.mjs --sync-existing
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SLUG = 'top-healthcare-market-research-firms-saudi-arabia'
const COVER_FILENAME = 'top-healthcare-market-research-firms-saudi-arabia-cover.jpg'
const ARTICLE_H1 =
  'Top Healthcare Market Research Firms in Saudi Arabia: Landscape, Selection Criteria, and Trusted Partners'
const ARTICLE_EXCERPT =
  'A procurement-style overview of healthcare market research in Saudi Arabia: why local insight matters under Vision 2030, how to evaluate partners, representative firm archetypes including BioNixus alongside global and regional names, trends, diligence questions, and how to turn research into access and launch decisions.'
const SEO_META_DESCRIPTION =
  'Saudi healthcare research firms: local fieldwork, SFDA context, global vs regional partners, and procurement checks for rigorous pharma studies.'
const OG_DESCRIPTION =
  'Evaluate healthcare market research firms in Saudi Arabia: partner criteria, BioNixus and other common shortlist options, trends under Vision 2030, and ROI discipline for pharma and medtech teams.'

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
            text: 'Saudi programs succeed when partners combine SFDA-aware study design, credible HCP and payer access, and Arabic-capable field execution. Use this guide to compare specialist firms such as BioNixus with global networks and regional consultancies against a common scorecard.',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'Why healthcare market research matters in Saudi Arabia', anchor: 'why-saudi' },
      { heading: 'What to look for in a Saudi healthcare research partner', anchor: 'partner-criteria' },
      { heading: 'BioNixus', anchor: 'bionixus' },
      { heading: 'IQVIA', anchor: 'iqvia' },
      { heading: 'Ipsos Healthcare', anchor: 'ipsos-healthcare' },
      { heading: 'Kantar Health', anchor: 'kantar-health' },
      { heading: 'Globacom Consulting', anchor: 'globacom-consulting' },
      { heading: 'Key trends shaping healthcare research in Saudi Arabia', anchor: 'trends-saudi' },
      { heading: 'Questions to ask before hiring a research firm', anchor: 'questions-before-hiring' },
      { heading: 'How to maximize ROI from market research', anchor: 'maximize-roi' },
      { heading: 'Why local expertise matters in Saudi Arabia', anchor: 'local-expertise-saudi' },
      { heading: 'The future of healthcare market research in the Kingdom', anchor: 'future-kingdom' },
      { heading: 'Conclusion', anchor: 'conclusion' },
    ]),
    faq: withKeys([
      {
        question: 'What services do healthcare market research firms offer in Saudi Arabia?',
        answer:
          'Typical services include physician surveys, patient studies, market sizing, competitive intelligence, payer research, advisory boards, and strategic workshops. Deliverables should map to decisions such as segmentation, messaging, access sequencing, and launch readiness—not only data tables.',
      },
      {
        question: 'How much does healthcare market research cost in Saudi Arabia?',
        answer:
          'Investment scales with methodology, sample size, moderation depth, and hospital approval complexity. Qualitative programs and multi-stakeholder payer work are usually more resource-intensive than short online waves. Request itemized scopes from shortlisted firms and align milestones to decision dates.',
      },
      {
        question: 'How long does a typical market research project take in Saudi Arabia?',
        answer:
          'Simple surveys may complete in several weeks, while multi-phase studies with narrow specialties or multiple cities can run for multiple months. Recruitment of rare specialists or sensitive payer roles often drives the critical path—build contingency into timelines.',
      },
      {
        question: 'How does BioNixus support pharmaceutical companies in Saudi Arabia?',
        answer:
          'BioNixus delivers quantitative and qualitative healthcare research with GCC-native execution, including physician and payer interviews, advisory boards, and synthesis aligned to market access and competitive intelligence needs.',
      },
      {
        question: 'Should we hire a local Saudi research firm or a global company?',
        answer:
          'Global firms can add datasets and cross-market benchmarks; local and regional specialists often improve recruitment realism, Arabic nuance, and hospital navigation. Many organizations use hybrid models with clear ownership of field quality and analysis.',
      },
      {
        question: 'What are the biggest challenges in conducting research in Saudi Arabia?',
        answer:
          'Common challenges include physician availability, hospital approval cycles, cultural sensitivity in instruments, and language choices for patients versus HCPs. Partners with established Saudi field leadership and documented QC reduce execution risk.',
      },
      {
        question: 'Is it necessary to conduct research in Arabic in Saudi Arabia?',
        answer:
          'Many physicians work comfortably in English, yet Arabic-first designs often improve patient insight and some HCP depth. The right language mix depends on audience, therapeutic area, and consent requirements—decide during study design, not after fieldwork starts.',
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
  const bodyHtmlPath = path.join(root, 'scripts/data/top-healthcare-market-research-firms-saudi-arabia-body.html')
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
    'Modern Saudi city skyline at dusk with subtle healthcare analytics motif, editorial cover for Saudi healthcare market research firms guide',
    COVER_FILENAME,
  )
  const ogImage = await uploadImage(
    client,
    coverPath,
    'Open graph image: top healthcare market research firms in Saudi Arabia',
    `og-${COVER_FILENAME}`,
  )

  const publishedAt = new Date().toISOString()

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: 'Top Saudi Healthcare Market Research Firms | BioNixus',
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'healthcare market research firms Saudi Arabia',
      keywords: [
        'Saudi Arabia healthcare research',
        'SFDA',
        'Vision 2030 healthcare',
        'pharmaceutical market research Saudi',
        'BioNixus',
        'GCC fieldwork',
        'physician surveys Saudi',
        'payer research Saudi Arabia',
      ],
      canonicalUrl: `https://www.bionixus.com/blog/${SLUG}`,
      noIndex: false,
    },
    openGraph: {
      ogTitle: 'Top Healthcare Market Research Firms in Saudi Arabia | BioNixus',
      ogDescription: OG_DESCRIPTION,
      ogImage,
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-sa-mr' }] : [],
    category: 'Healthcare Market Research',
    country: 'Saudi Arabia',
    language: 'en',
    readingTime: 14,
    tags: [
      'Saudi Arabia',
      'Healthcare Market Research',
      'Vision 2030',
      'SFDA',
      'GCC',
      'Pharmaceutical Research',
      'BioNixus',
      'Fieldwork',
      'Market Access',
    ],
    ctaSection: {
      title: 'Scope healthcare market research for Saudi Arabia',
      description:
        'BioNixus supports Saudi and GCC pharmaceutical and medtech teams with physician, payer, and patient insight aligned to access and launch decisions.',
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
