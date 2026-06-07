/**
 * Creates the Sanity blogPost "In Vitro Diagnostics (IVD) Market in Saudi Arabia 2026"
 * from scripts/data/saudi-arabia-ivd-market-body.html + cover image in public/images/blog/.
 *
 * Requires in repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-saudi-arabia-ivd-market.mjs
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

const SLUG = 'saudi-arabia-in-vitro-diagnostics-market'

function withKeys(items) {
  return items.map((item, i) => ({
    ...item,
    _key: item._key || `k-${i}-${Math.random().toString(36).slice(2, 9)}`,
  }))
}

async function uploadImage(client, filePath, alt) {
  let buf = fs.readFileSync(filePath)
  buf = await sharp(buf)
    .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 88, progressive: true })
    .toBuffer()
  const asset = await client.assets.upload('image', buf, {
    contentType: 'image/jpeg',
    filename: 'saudi-arabia-ivd-market-cover.jpg',
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

  const coverPath = path.join(root, 'public/images/blog/saudi-arabia-ivd-market-cover.jpg')
  if (!fs.existsSync(coverPath)) {
    console.error('Cover image missing:', coverPath)
    process.exit(1)
  }

  const bodyHtmlPath = path.join(root, 'scripts/data/saudi-arabia-ivd-market-body.html')
  const bodyHtml = fs.readFileSync(bodyHtmlPath, 'utf8')
  const h1 =
    'In Vitro Diagnostics (IVD) Market in Saudi Arabia 2026: SFDA Regulation, Molecular Diagnostics, and Hospital Procurement Intelligence'

  const existing = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, { slug: SLUG })
  if (existing) {
    console.error(`A blogPost with slug "${SLUG}" already exists (_id=${existing}). Delete or change slug first.`)
    process.exit(1)
  }

  const authorId = await client.fetch(`*[_type == "author" && defined(name)][0]._id`)
  if (!authorId) {
    console.error('No author document found. Create an author in Sanity Studio first.')
    process.exit(1)
  }

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (slug.current == "medical-devices" || slug.current == "market-research" || title match "Medical*")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`))

  const mainImage = await uploadImage(
    client,
    coverPath,
    'Automated clinical diagnostics laboratory with analyzer instruments and a molecular DNA motif, Riyadh skyline at dusk — Saudi Arabia in vitro diagnostics market editorial cover',
  )
  const ogImage = await uploadImage(
    client,
    coverPath,
    'Open graph image: Saudi Arabia in vitro diagnostics (IVD) market report by BioNixus',
  )

  const publishedAt = new Date().toISOString()

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: 'Saudi Arabia IVD Market 2026: SFDA, Molecular Diagnostics | BioNixus',
      metaDescription:
        'Saudi Arabia in vitro diagnostics market ~USD 0.9–1.1B in 2026 (BioNixus analysis): SFDA MDMA registration, molecular diagnostics growth, NUPCO and lab procurement, and market-entry strategy.',
      focusKeyword: 'Saudi Arabia IVD market',
      keywords: [
        'Saudi Arabia IVD market',
        'in vitro diagnostics Saudi Arabia',
        'SFDA IVD registration',
        'MDMA SFDA',
        'molecular diagnostics Saudi Arabia',
        'NUPCO diagnostics',
        'clinical laboratory Saudi Arabia',
        'companion diagnostics GCC',
        'Vision 2030 diagnostics',
      ],
      canonicalUrl: `https://www.bionixus.com/blog/${SLUG}`,
      noIndex: false,
    },
    openGraph: {
      ogTitle: 'In Vitro Diagnostics (IVD) Market in Saudi Arabia 2026 | BioNixus',
      ogDescription:
        'SFDA registration, molecular diagnostics and genomics, NUPCO and reference-lab procurement, and a market-entry playbook for IVD companies in Saudi Arabia.',
      ogImage,
    },
    title: h1.slice(0, 200),
    slug: { _type: 'slug', current: SLUG },
    excerpt:
      'A consultant-style guide to the Saudi Arabia in vitro diagnostics market: BioNixus market sizing, test segments, molecular diagnostics and genomics, SFDA MDMA registration via GHAD, NUPCO and reference-laboratory procurement, and a four-workstream market-entry strategy.',
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-md' }] : [],
    category: 'Medical Devices',
    country: 'Saudi Arabia',
    language: 'en',
    readingTime: 14,
    tags: [
      'In Vitro Diagnostics',
      'IVD',
      'SFDA',
      'Molecular Diagnostics',
      'NUPCO',
      'Saudi Arabia',
      'Medical Devices',
      'Companion Diagnostics',
      'Vision 2030',
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
            text: 'Saudi Arabia is the largest IVD market in the GCC (~USD 0.9–1.1B in 2026, BioNixus analysis), growing steadily on routine chronic-disease testing while molecular and companion diagnostics drive value. Winning requires clearing SFDA MDMA classification early, choosing the right procurement channel (NUPCO tenders vs private reference labs), and securing laboratory-director advocacy with a budget-impact case.',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'Saudi Arabia IVD market size and growth outlook', anchor: 'market-size' },
      { heading: 'IVD test segments: where the volume and the value sit', anchor: 'segments' },
      { heading: 'Molecular diagnostics, genomics, and precision medicine', anchor: 'molecular' },
      { heading: 'What drives IVD demand in the Kingdom', anchor: 'demand-drivers' },
      { heading: 'SFDA regulation: MDMA, the GHAD portal, and IVD classification', anchor: 'sfda-regulation' },
      { heading: 'Procurement: NUPCO, hospital labs, and reference laboratories', anchor: 'procurement' },
      { heading: 'Laboratory infrastructure and the buyer landscape', anchor: 'lab-infrastructure' },
      { heading: 'Challenges and risks for IVD market entry', anchor: 'challenges' },
      { heading: 'Building a Saudi IVD market-entry strategy', anchor: 'market-entry' },
      { heading: 'How BioNixus supports IVD and diagnostics teams in Saudi Arabia', anchor: 'bionixus' },
      { heading: 'Conclusion', anchor: 'conclusion' },
    ]),
    bodyHtml,
    body: [],
    faq: withKeys([
      {
        question: 'How big is the in vitro diagnostics (IVD) market in Saudi Arabia in 2026?',
        answer:
          'BioNixus market analysis places the Saudi Arabia IVD market at roughly USD 0.9–1.1 billion in 2026, heading toward about USD 1.3 billion by 2031 at a mid-single-digit CAGR. That makes it the largest single IVD market in the GCC. Routine clinical chemistry and immunoassay carry most volume, while molecular and companion diagnostics drive the faster value growth. Treat the figure as a planning band, not an audited total.',
      },
      {
        question: 'How do you register an IVD with the SFDA in Saudi Arabia?',
        answer:
          'Every IVD requires a Medical Device Marketing Authorization (MDMA) from the SFDA, submitted via the GHAD portal. The SFDA uses a four-tier risk classification (Class A–D) that broadly mirrors the EU IVDR. Requirements include a complete technical file, ISO 13485 certification, analytical and clinical performance data proportionate to risk class, and an in-country Authorized Representative. Higher-risk Class C and D assays can take well over twelve months to clear.',
      },
      {
        question: 'Which IVD segment is growing fastest in Saudi Arabia?',
        answer:
          'Molecular diagnostics is the fastest-growing segment, driven by the Saudi Genome Program, oncology and companion-diagnostic expansion, hereditary and rare-disease testing linked to high consanguinity, and infectious-disease PCR capacity built out during the pandemic. Clinical chemistry remains the largest segment by revenue on routine diabetes and cardiovascular testing, but molecular assays command higher value per test and tie directly to targeted-therapy access.',
      },
      {
        question: 'How does NUPCO affect IVD procurement in Saudi Arabia?',
        answer:
          'NUPCO runs centralized tenders for Ministry of Health and many public hospitals, weighting price, technical specifications, supply security, and delivery. These tenders favour incumbents with validated analyser installed bases and proven local supply chains, which raises barriers for new entrants. Private hospital groups and reference laboratories procure more independently and adopt novel molecular assays faster, making them the typical beachhead for innovative diagnostics.',
      },
      {
        question: 'What are the main challenges for IVD market entry in Saudi Arabia?',
        answer:
          'Key challenges include registration timelines past twelve months for higher-risk assays, local validation expectations for some genomic panels, tender-driven price pressure on routine tests, analyser installed-base lock-in that makes displacement slow, and still-maturing reimbursement for novel molecular tests. Each should be modelled before committing launch resources, and the procurement and evidence work should start in parallel with regulatory filing rather than after it.',
      },
      {
        question: 'How does the Saudi IVD market connect to the wider GCC medical devices market?',
        answer:
          'IVD is one segment of the larger GCC medical devices market, which BioNixus sizes at roughly USD 5.8 billion in 2026, with Saudi Arabia and the UAE accounting for around 80% of regional spend. Diagnostics share the same SFDA, NUPCO, and hospital-procurement dynamics as other device categories, so IVD strategy is strongest when set within the full device and precision-medicine picture rather than in isolation.',
      },
    ]),
    ctaSection: {
      title: 'Plan your Saudi Arabia IVD market entry and evidence program',
      description:
        'BioNixus supports IVD market sizing, SFDA registration-pathway mapping, NUPCO and reference-lab procurement intelligence, laboratory-director research, and companion-diagnostic strategy across Saudi Arabia and the GCC.',
      buttonText: 'Request a proposal',
      buttonUrl: 'https://www.bionixus.com/contact',
    },
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
