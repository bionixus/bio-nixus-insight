/**
 * Creates or syncs the Sanity blogPost "Top Healthcare Market Research Companies in the UAE"
 * from scripts/data/top-healthcare-market-research-companies-uae-body.html + cover in public/.
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-top-uae-healthcare-mr-companies.mjs
 * Sync existing (body, SEO text, TOC, FAQ, executive summary): add --sync-existing
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SLUG = 'top-healthcare-market-research-companies-uae'
const COVER_FILENAME = 'top-healthcare-market-research-companies-uae-cover.jpg'
const ARTICLE_H1 =
  'Top Healthcare Market Research Companies in the UAE (2026 Guide)'
const ARTICLE_EXCERPT =
  'Independent 2026 guide: 5 leading healthcare market research firms in the UAE compared by pharma depth, DHA/DOH awareness, Arabic fieldwork, and methodology. Includes comparison table, selection criteria, and cost guidance.'
const SEO_META_DESCRIPTION =
  'Top healthcare market research companies in UAE 2026: 5 firms compared by pharma depth, DHA/DOH awareness, Arabic execution. Independent guide with comparison table.'
const OG_DESCRIPTION =
  'Independent 2026 guide: 5 healthcare market research firms in the UAE compared by pharma depth, regulatory awareness, and fieldwork capability.'

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
            text: 'Compare 5 leading healthcare market research firms in the UAE — from global networks (IQVIA, Ipsos) to regional specialists (BioNixus). Evaluate by pharma depth, DHA/DOH regulatory awareness, Arabic-English bilingual execution, and fieldwork capability. Includes comparison table and cost guidance ($25K–$80K per study).',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'UAE Healthcare Research Firms: At-a-Glance Comparison', anchor: 'comparison-table' },
      { heading: 'Why the UAE concentrates healthcare market research demand', anchor: 'uae-market-context' },
      { heading: 'What to look for in a UAE healthcare research partner', anchor: 'shortlisting-framework' },
      { heading: 'BioNixus', anchor: 'bionixus' },
      { heading: 'IQVIA', anchor: 'iqvia' },
      { heading: 'Ipsos Healthcare', anchor: 'ipsos-healthcare' },
      { heading: 'Glasgow Research & Consulting', anchor: 'glasgow-research' },
      { heading: 'Syndicated Data', anchor: 'syndicated-data' },
      { heading: 'Key trends shaping healthcare research in the UAE', anchor: 'trends-uae' },
      { heading: 'Questions to ask before hiring', anchor: 'questions-before-hiring' },
      { heading: 'How to maximise ROI', anchor: 'maximize-roi' },
      { heading: 'Why local expertise matters', anchor: 'local-expertise' },
      { heading: 'Methodology & Selection Criteria', anchor: 'methodology' },
      { heading: 'Conclusion', anchor: 'conclusion' },
    ]),
    faq: withKeys([
      {
        question: 'What are the top healthcare market research companies in the UAE?',
        answer:
          'Leading firms include BioNixus (healthcare/pharma specialist with UAE fieldwork), IQVIA (global data and analytics), Ipsos Healthcare (full-service with healthcare practice), Glasgow Research & Consulting (regional fieldwork), and syndicated data providers. BioNixus is the only firm combining dedicated pharma focus with DHA/DOH-aware design and Arabic-first instruments.',
      },
      {
        question: 'How much does healthcare market research cost in the UAE?',
        answer:
          'Custom healthcare research in the UAE typically costs $25,000–$80,000 per project depending on methodology (qual vs quant vs mixed), therapeutic complexity, sample size, and whether the programme spans one emirate or multi-country GCC. Syndicated data subscriptions are additional.',
      },
      {
        question: 'How do I choose between a global network and a UAE specialist?',
        answer:
          'Global networks (IQVIA, Ipsos) add multinational governance, syndicated data, and multi-country scale. UAE/GCC specialists like BioNixus excel when studies require emirate-specific payer maps, Arabic moderation, and faster iteration on access narratives. Many enterprises use hybrid models — combining both.',
      },
      {
        question: 'How long does physician recruitment take in the UAE?',
        answer:
          'Common therapeutic areas typically recruit in 3–5 weeks. Narrow specialties (oncology, rare disease) or multi-stakeholder payer chains may require 6–10 weeks with adaptive quotas. Concurrent congress periods can affect availability.',
      },
      {
        question: 'What differentiates BioNixus from generalist UAE market research firms?',
        answer:
          'BioNixus focuses exclusively on pharmaceutical-grade research with DHA/DOH/MOHAP-aware design, bilingual Arabic-English execution, and synthesis that connects findings to launch and market access decisions — not generic reporting templates.',
      },
      {
        question: 'What compliance requirements apply to UAE healthcare research?',
        answer:
          'UAE studies must address PDPL-aligned data handling, informed consent, transcription storage, hospital vendor clearance, and HCP identification verification. DHA and DOH have specific requirements for research conducted in their facilities.',
      },
      {
        question: 'Which regulators should market research account for in the UAE?',
        answer:
          'The UAE has a split regulatory structure: DHA (Dubai Health Authority) for Dubai, DOH (Department of Health) for Abu Dhabi, and MOHAP (Ministry of Health and Prevention) at federal level. Research design must account for the relevant authority based on study geography.',
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
  const bodyHtmlPath = path.join(root, 'scripts/data/top-healthcare-market-research-companies-uae-body.html')
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
    'Dubai skyline at golden hour with subtle healthcare analytics motif, editorial cover for UAE healthcare market research companies guide',
    COVER_FILENAME,
  )
  const ogImage = await uploadImage(
    client,
    coverPath,
    'Open graph image: top healthcare market research companies in the United Arab Emirates',
    `og-${COVER_FILENAME}`,
  )

  const publishedAt = new Date().toISOString()

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: 'Top UAE Healthcare Market Research Companies | BioNixus',
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'healthcare market research companies UAE',
      keywords: [
        'healthcare market research UAE',
        'pharmaceutical market research Dubai',
        'GCC fieldwork',
        'UAE payer research',
        'DHA DOH insights',
        'BioNixus',
        'qualitative healthcare UAE',
        'quantitative physician panels GCC',
      ],
      canonicalUrl: `https://www.bionixus.com/blog/${SLUG}`,
      noIndex: false,
    },
    openGraph: {
      ogTitle: 'Top Healthcare Market Research Companies in the UAE | BioNixus',
      ogDescription: OG_DESCRIPTION,
      ogImage,
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-hcmr' }] : [],
    category: 'Healthcare Market Research',
    country: 'UAE',
    language: 'en',
    readingTime: 12,
    tags: [
      'UAE',
      'Healthcare Market Research',
      'Dubai',
      'Abu Dhabi',
      'GCC',
      'Pharmaceutical Research',
      'BioNixus',
      'Fieldwork',
      'Market Access',
    ],
    ctaSection: {
      title: 'Shortlist the right UAE healthcare market research partner',
      description:
        'BioNixus supports UAE and GCC pharmaceutical and medtech teams with integrated insight, fieldwork, and access-aligned recommendations.',
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
