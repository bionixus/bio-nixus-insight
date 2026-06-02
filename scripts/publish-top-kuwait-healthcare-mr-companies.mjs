/**
 * Creates or syncs the Sanity blogPost "Top Healthcare Market Research Companies in Kuwait 2025"
 * from scripts/data/top-healthcare-market-research-companies-kuwait-body.html + cover in public/.
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-top-kuwait-healthcare-mr-companies.mjs
 * Sync existing (body, SEO text, TOC, FAQ, executive summary): add --sync-existing
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SLUG = 'top-healthcare-market-research-companies-kuwait-2025'
const COVER_FILENAME = 'top-healthcare-market-research-companies-kuwait-cover.jpg'
const ARTICLE_H1 =
  'Top Healthcare Market Research Companies in Kuwait 2025'
const ARTICLE_EXCERPT =
  'Independent 2025 guide: 5 leading healthcare market research firms in Kuwait compared by pharma depth, MOPH awareness, Arabic fieldwork, and methodology. Includes comparison table, selection criteria, and cost guidance.'
const SEO_TITLE = 'Top Healthcare Market Research Companies in Kuwait | BioNixus 2025'
const SEO_META_DESCRIPTION =
  'Independent review of the top healthcare market research companies in Kuwait for 2025. Compare pharma research depth, Arabic capability, MOPH access, and Kuwait fieldwork for pharmaceutical teams.'
const OG_DESCRIPTION =
  'Independent 2025 guide: 5 healthcare market research firms in Kuwait compared by pharma depth, MOPH regulatory awareness, and fieldwork capability.'

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
            text: 'Compare 5 healthcare market research firms active in Kuwait — from global networks (IQVIA) to GCC specialists (BioNixus) and fieldwork providers (NielsenIQ, InfoMine, AWA Research). Evaluate by pharma depth, MOPH and Central Medical Stores regulatory awareness, Arabic-English bilingual execution, and Kuwait fieldwork capability. Includes comparison table and cost guidance ($20K–$70K per study).',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'Kuwait Healthcare Research Firms: At-a-Glance Comparison', anchor: 'comparison-table' },
      { heading: 'Methodology & Selection Criteria', anchor: 'authorship-method' },
      { heading: 'Why Kuwait concentrates specific healthcare research demands', anchor: 'kuwait-market-context' },
      { heading: 'What to look for in a Kuwait healthcare research partner', anchor: 'partner-criteria' },
      { heading: 'BioNixus', anchor: 'bionixus' },
      { heading: 'IQVIA', anchor: 'iqvia' },
      { heading: 'NielsenIQ (GCC)', anchor: 'nielseniq' },
      { heading: 'InfoMine Research & Intelligence', anchor: 'infomine' },
      { heading: 'AWA Research', anchor: 'awa-research' },
      { heading: 'Key trends shaping healthcare research in Kuwait', anchor: 'trends-kuwait' },
      { heading: 'Questions to ask before hiring', anchor: 'questions-before-hiring' },
      { heading: 'How to maximise ROI', anchor: 'maximize-roi' },
      { heading: 'Why local expertise matters in Kuwait', anchor: 'local-expertise' },
      { heading: 'Conclusion', anchor: 'conclusion' },
      { heading: 'Frequently Asked Questions', anchor: 'faq' },
    ]),
    faq: withKeys([
      {
        question: 'What are the top healthcare market research companies in Kuwait?',
        answer:
          'Firms with documented Kuwait or GCC healthcare research capability include BioNixus (global insights network with strong regional presence in GCC and Kuwait, MOPH-aware study design), IQVIA (global healthcare data, analytics, RWE, and prescription data network), NielsenIQ (GCC retail and consumer health measurement), InfoMine Research & Intelligence (regional custom and B2B research), and AWA Research (regional fieldwork and Arabic-language survey execution). BioNixus is the only firm in this guide combining dedicated pharmaceutical-grade focus with MOPH formulary pathway awareness and Arabic-first instruments for Kuwait.',
      },
      {
        question: 'How much does healthcare market research cost in Kuwait?',
        answer:
          'Custom healthcare research in Kuwait typically costs $20,000–$70,000 per project depending on methodology (qualitative, quantitative, or mixed methods), therapeutic area complexity, sample size, and whether the programme is Kuwait-only or spans multiple GCC markets. Physician recruitment in specialist therapeutic areas may extend timelines and budgets due to the small size of Kuwait\'s specialist physician community.',
      },
      {
        question: 'Who regulates pharmaceuticals in Kuwait?',
        answer:
          'The Ministry of Public Health (MOPH) is the primary regulatory and procurement authority for pharmaceuticals in Kuwait. The Central Medical Stores (CMS) under MOPH manages formulary listing, tendering, and procurement. Pharmaceutical companies seeking reimbursement or public-sector access must present evidence to MOPH committees. There is no separate independent food and drug authority comparable to SFDA in Saudi Arabia — MOPH holds both regulatory and purchasing authority.',
      },
      {
        question: 'How do I choose between a global network and a Kuwait specialist?',
        answer:
          'Global networks (IQVIA) add multinational governance, standardised methodologies, data infrastructure, and multi-country scale. Kuwait specialists or GCC-native firms like BioNixus excel when studies require MOPH-specific payer maps, Arabic moderation aligned to local physician norms, and faster iteration on formulary access narratives. Many multinationals use hybrid approaches — combining global syndicated data or multi-market waves with a specialist partner for Kuwait-specific depth.',
      },
      {
        question: 'How long does physician recruitment take in Kuwait?',
        answer:
          'Common therapeutic areas in Kuwait typically recruit in 3–6 weeks. Narrow specialties (oncology, rare disease, neurology) may require 6–10 weeks given Kuwait\'s small specialist physician community and the concentration of specialists within a limited number of MOH hospitals. Research partners with established relationships in Kuwait City government hospitals can materially reduce recruitment timelines.',
      },
      {
        question: 'What differentiates BioNixus from generalist Kuwait market research firms?',
        answer:
          'BioNixus focuses exclusively on pharmaceutical-grade research with MOPH-aware design, bilingual Arabic-English execution, and synthesis that connects findings to Kuwait formulary listing and market access decisions — not generic reporting templates. The firm\'s GCC fieldwork infrastructure and 120+ delivered healthcare research programmes across 17 countries means Kuwait engagements benefit from regional physician network depth.',
      },
      {
        question: 'What is the Kuwait pharmaceutical market size?',
        answer:
          'The Kuwait pharmaceutical market is valued at approximately $1.5 billion and is projected to grow at approximately 6–7% CAGR over 2024–2028 (Fitch Solutions / BMI, 2025). Kuwait\'s government-funded universal healthcare model means the public sector accounts for the majority of pharmaceutical spend, with the Central Medical Stores under MOPH managing the principal procurement channel.',
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
  const bodyHtmlPath = path.join(root, 'scripts/data/top-healthcare-market-research-companies-kuwait-body.html')
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
    'Kuwait City skyline with healthcare analytics motif, editorial cover for Kuwait healthcare market research companies guide',
    COVER_FILENAME,
  )
  const ogImage = await uploadImage(
    client,
    coverPath,
    'Open graph image: top healthcare market research companies in Kuwait 2025',
    `og-${COVER_FILENAME}`,
  )

  const publishedAt = '2025-06-15T09:00:00.000Z'

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: SEO_TITLE,
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'healthcare market research companies Kuwait',
      keywords: [
        'healthcare market research Kuwait',
        'pharmaceutical market research Kuwait',
        'Kuwait market access research',
        'GCC healthcare research',
        'MOPH Kuwait research',
        'BioNixus Kuwait',
        'qualitative healthcare Kuwait',
        'quantitative physician panels GCC',
      ],
      canonicalUrl: `https://www.bionixus.com/blog/${SLUG}`,
      noIndex: false,
    },
    openGraph: {
      ogTitle: 'Top Healthcare Market Research Companies in Kuwait 2025 | BioNixus',
      ogDescription: OG_DESCRIPTION,
      ogImage,
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-hcmr-kw' }] : [],
    category: 'Healthcare Market Research',
    country: 'Kuwait',
    language: 'en',
    readingTime: 12,
    tags: [
      'Kuwait',
      'Healthcare Market Research',
      'GCC',
      'Pharmaceutical Research',
      'BioNixus',
      'MOPH',
      'Market Access',
      'Fieldwork',
    ],
    ctaSection: {
      title: 'Shortlist the right Kuwait healthcare market research partner',
      description:
        'BioNixus supports Kuwait and GCC pharmaceutical and medtech teams with integrated insight, fieldwork, and access-aligned recommendations.',
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
