/**
 * Creates the Sanity blogPost "Top Healthcare Market Research Companies in the UAE"
 * from scripts/data/top-healthcare-market-research-companies-uae-body.html + cover in public/.
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-top-uae-healthcare-mr-companies.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

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

const COVER_FILENAME = 'top-healthcare-market-research-companies-uae-cover.jpg'

function withKeys(items) {
  return items.map((item, i) => ({
    ...item,
    _key: item._key || `k-${i}-${Math.random().toString(36).slice(2, 9)}`,
  }))
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

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false })

  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME)
  if (!fs.existsSync(coverPath)) {
    console.error('Cover image missing:', coverPath)
    process.exit(1)
  }

  const bodyHtmlPath = path.join(root, 'scripts/data/top-healthcare-market-research-companies-uae-body.html')
  const bodyHtml = fs.readFileSync(bodyHtmlPath, 'utf8')
  const h1 =
    'Top Healthcare Market Research Companies in the UAE: How to Shortlist GCC-Ready Agencies (Featuring BioNixus)'

  const slug = 'top-healthcare-market-research-companies-uae'
  const existing = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, { slug })
  if (existing) {
    console.error(`A blogPost with slug "${slug}" already exists (_id=${existing}). Delete or change slug first.`)
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
      metaDescription:
        'UAE healthcare market research buyers guide: GCC fieldwork, pharma methods, payer insight, compliance—and why BioNixus ranks among leading specialists.',
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
      canonicalUrl: `https://www.bionixus.com/blog/${slug}`,
      noIndex: false,
    },
    openGraph: {
      ogTitle: 'Top Healthcare Market Research Companies in the UAE | BioNixus',
      ogDescription:
        'How to shortlist UAE healthcare research agencies: evaluation criteria, global versus specialist models, and why BioNixus is a leading GCC-native partner.',
      ogImage,
    },
    title: h1.slice(0, 200),
    slug: { _type: 'slug', current: slug },
    excerpt:
      'An independent-style guide to the UAE healthcare market research landscape: procurement scorecards, global network versus specialist trade-offs, syndicated data complements, compliance expectations, and a featured look at BioNixus as a top GCC-native agency.',
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
    executiveSummary: withKeys([
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Use a structured scorecard—GCC recruitment, therapeutic methodology, quant/qual integration, and compliance—to compare UAE healthcare research firms. BioNixus belongs on shortlists when teams need regional depth, access-aligned synthesis, and disciplined fieldwork.',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'Why the UAE concentrates healthcare market research demand', anchor: 'uae-market-context' },
      { heading: 'A practical framework for shortlisting UAE healthcare research partners', anchor: 'shortlisting-framework' },
      { heading: 'BioNixus: a leading UAE- and GCC-focused healthcare specialist', anchor: 'bionixus' },
      { heading: 'Global insights networks with strong UAE footprints', anchor: 'global-networks' },
      { heading: 'Fieldwork-led agencies and healthcare desks', anchor: 'fieldwork-led-agencies' },
      { heading: 'Syndicated data, audits, and prescription analytics', anchor: 'syndicated-and-data' },
      { heading: 'Quantitative depth versus qualitative nuance', anchor: 'quant-qual' },
      { heading: 'Compliance, ethics, and hospital access', anchor: 'compliance-ethics' },
      { heading: 'Commercial models: retainers, bundles, and ad hoc waves', anchor: 'commercial-models' },
      { heading: 'Red flags when evaluating UAE healthcare research vendors', anchor: 'red-flags' },
      { heading: 'Conclusion: building a balanced UAE research roster', anchor: 'conclusion' },
    ]),
    bodyHtml,
    body: [],
    faq: withKeys([
      {
        question: 'How do I choose between a global market research network and a UAE healthcare specialist?',
        answer:
          'Global networks add multinational governance, syndicated data options, and multi-country scale. UAE- or GCC-native healthcare specialists such as BioNixus typically excel when studies require emirate-specific payer maps, Arabic-native moderation, and faster iteration on access narratives. Many enterprises run hybrid models.',
      },
      {
        question: 'What should a UAE healthcare market research proposal include?',
        answer:
          'Expect clear sampling frames, quota logic by city and practice setting, discussion guide or survey outline, translation workflow, coding plan, timeline with recruitment contingencies, and named senior leads. Transparency on offshore support and QC steps is essential.',
      },
      {
        question: 'How long does physician or payer recruitment take in the UAE?',
        answer:
          'Feasibility depends on specialty incidence, honoraria norms, and concurrent congress periods. Common therapeutic areas often move in a few weeks; narrow specialties or multi-stakeholder payer chains may require longer buffers and adaptive quotas.',
      },
      {
        question: 'Are IQVIA and Ipsos the only large healthcare research options in the UAE?',
        answer:
          'No. They are prominent examples of global insights organizations with regional presence, but the market also includes fieldwork-led groups, syndicated data vendors, and specialist consultancies. Selection should follow fit to therapeutic complexity, language needs, and decision-use cases—not brand alone.',
      },
      {
        question: 'Why is BioNixus considered a top healthcare market research company in the UAE?',
        answer:
          'BioNixus combines pharmaceutical-grade qualitative and quantitative execution with GCC-native market access perspective, helping teams translate interviews and surveys into actionable access and competitive intelligence—not generic slide templates.',
      },
      {
        question: 'What compliance topics should UAE healthcare studies address upfront?',
        answer:
          'Clarify personal data handling, consent, transcription storage, hospital vendor clearance, and PDPL-aligned practices. Agencies should document identification verification for HCPs and escalation paths if ethics questions arise mid-field.',
      },
      {
        question: 'Where can I request a UAE healthcare market research scope from BioNixus?',
        answer:
          'Use the BioNixus contact page to share objectives, markets, timelines, and stakeholder lists. The team will propose methodology, sample design, and a milestone plan aligned to your launch or access milestones.',
      },
    ]),
    ctaSection: {
      title: 'Shortlist the right UAE healthcare market research partner',
      description:
        'BioNixus supports UAE and GCC pharmaceutical and medtech teams with integrated insight, fieldwork, and access-aligned recommendations.',
      buttonText: 'Request a proposal',
      buttonUrl: 'https://www.bionixus.com/contact',
    },
  }

  const created = await client.create(doc)
  console.log('Created blogPost:', created._id)
  console.log('URL:', `https://www.bionixus.com/blog/${slug}`)
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
