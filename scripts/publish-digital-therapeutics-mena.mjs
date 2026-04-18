/**
 * Creates the Sanity blogPost "Digital Therapeutics Regulation in MENA Markets"
 * from scripts/data/digital-therapeutics-mena-body.html + cover image in public/.
 *
 * Requires in repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-digital-therapeutics-mena.mjs
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
    filename: 'digital-therapeutics-regulation-mena-cover.jpg',
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

  const coverPath = path.join(root, 'public/images/blog/digital-therapeutics-regulation-mena-cover.jpg')
  if (!fs.existsSync(coverPath)) {
    console.error('Cover image missing:', coverPath)
    process.exit(1)
  }

  const bodyHtmlPath = path.join(root, 'scripts/data/digital-therapeutics-mena-body.html')
  const bodyHtml = fs.readFileSync(bodyHtmlPath, 'utf8')
  const h1 =
    'Digital Therapeutics Regulation in MENA Markets: SFDA, UAE, and North Africa Pathways for Pharma and MedTech'

  const slug = 'digital-therapeutics-regulation-mena-markets'
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
      `*[_type == "category" && (slug.current == "digital-health" || title == "Digital Health")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`))

  const mainImage = await uploadImage(
    client,
    coverPath,
    'Digital therapeutics smartphone interface with medical waveform, Gulf region healthcare editorial cover for MENA regulatory guide',
  )
  const ogImage = await uploadImage(
    client,
    coverPath,
    'Open graph image: digital therapeutics and MENA healthcare regulation',
  )

  const publishedAt = new Date().toISOString()

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: 'Digital Therapeutics (DTx) Regulation in MENA | BioNixus',
      metaDescription:
        'SFDA & UAE DTx pathways: clinical evidence, GCC reimbursement, data privacy, and market access for pharma and medtech in MENA.',
      focusKeyword: 'digital therapeutics regulation MENA',
      keywords: [
        'digital therapeutics',
        'DTx',
        'SFDA',
        'UAE digital health',
        'SaMD',
        'MENA reimbursement',
        'GCC market access',
        'clinical evidence DTx',
        'data privacy healthcare MENA',
      ],
      canonicalUrl: `https://www.bionixus.com/blog/${slug}`,
      noIndex: false,
    },
    openGraph: {
      ogTitle: 'Digital Therapeutics Regulation in MENA Markets | BioNixus',
      ogDescription:
        'Regulatory, clinical, reimbursement, and stakeholder guidance for digital therapeutics across Saudi Arabia, UAE, GCC, and North Africa.',
      ogImage,
    },
    title: h1.slice(0, 200),
    slug: { _type: 'slug', current: slug },
    excerpt:
      'A consultant-style guide to digital therapeutics regulation in MENA: GCC SaMD pathways, SFDA and UAE authority structures, North African developments, clinical evidence, reimbursement, data privacy, KOL adoption, and integrated market access.',
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-dh' }] : [],
    category: 'Digital Health',
    country: 'MENA',
    language: 'en',
    readingTime: 16,
    tags: [
      'Digital Therapeutics',
      'DTx',
      'SFDA',
      'UAE MOHAP',
      'DHA',
      'DOH',
      'GCC',
      'North Africa',
      'SaMD',
      'Market Access',
      'Data Privacy',
    ],
    executiveSummary: withKeys([
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'MENA digital therapeutics launches require synchronized regulatory, clinical, cybersecurity, and payer evidence. Use this article to align SFDA and UAE pathways with reimbursement reality and stakeholder adoption levers.',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'Understanding digital therapeutics in healthcare markets', anchor: 'understanding-dtx' },
      { heading: 'Regulatory frameworks for digital therapeutics in GCC countries', anchor: 'gcc-frameworks' },
      { heading: 'Saudi Arabia: SFDA digital health and SaMD expectations', anchor: 'sfda-saudi' },
      { heading: 'UAE: federal, DHA, and DOH pathways', anchor: 'uae-dha' },
      { heading: 'North Africa: Egypt, Morocco, Algeria', anchor: 'north-africa' },
      { heading: 'Clinical evidence requirements across MENA', anchor: 'clinical-evidence' },
      { heading: 'Reimbursement and pharmacoeconomics for DTx', anchor: 'reimbursement' },
      { heading: 'Government and private payer considerations', anchor: 'payers-saudi-uae' },
      { heading: 'Stakeholder and KOL engagement for adoption', anchor: 'kol-adoption' },
      { heading: 'Data privacy and cybersecurity', anchor: 'privacy-security' },
      { heading: 'Integrated market access for DTx launches', anchor: 'market-access' },
      { heading: 'Therapy area prioritization', anchor: 'therapy-areas' },
      { heading: 'Competitive landscape', anchor: 'competitive' },
      { heading: 'Future trends: harmonization and AI-enabled devices', anchor: 'future-trends' },
      { heading: 'Conclusion', anchor: 'conclusion' },
    ]),
    bodyHtml,
    body: [],
    faq: withKeys([
      {
        question: 'What clinical evidence do MENA regulators require for digital therapeutics approval?',
        answer:
          'Regulators expect studies demonstrating safety and performance or efficacy aligned to the product’s risk class, plus clinical utility where therapeutic claims are made. Class II-style DTx often needs robust controlled evidence; higher-risk claims typically require RCT-scale data. Usability validation, cybersecurity documentation, and post-market surveillance plans are increasingly standard.',
      },
      {
        question: 'How long does digital therapeutics regulatory approval take in Saudi Arabia and the UAE?',
        answer:
          'Timelines depend on risk class, evidence quality, and whether multiple UAE emirate reviews are required. Well-prepared Saudi submissions often land in a multi-quarter cycle; UAE timelines vary by pathway and whether nationwide distribution triggers parallel reviews. Early authority meetings and complete technical files reduce iteration loops.',
      },
      {
        question: 'Are digital therapeutics reimbursed by government payers in GCC countries?',
        answer:
          'Government reimbursement remains limited but evolving. Saudi Arabia is advancing digital health reimbursement thinking through cooperative insurance channels, while the UAE emphasizes private payer negotiations. Strong health economic cases, budget impact models, and outcomes-linked narratives improve odds as codes mature.',
      },
      {
        question: 'What data privacy regulations apply to digital therapeutics in MENA markets?',
        answer:
          'UAE PDPL-class obligations and Saudi personal data regulations impose strict controls on health data processing, residency, consent, and security. Expect requirements for local processing or approved transfer mechanisms, encryption aligned to international standards, and audit-ready documentation.',
      },
      {
        question: 'Which therapeutic areas offer the best opportunities for digital therapeutics in the Middle East?',
        answer:
          'Chronic conditions with high prevalence and policy emphasis—such as diabetes, obesity, cardiovascular risk, and mental health—often align best with DTx value stories, especially where access gaps or provider shortages exist.',
      },
      {
        question: 'How do digital therapeutics regulatory requirements differ between GCC and North African markets?',
        answer:
          'GCC frameworks for SaMD and digital health are generally more developed, with clearer digital authority engagement options. North African markets may reference EU-style device thinking but can show greater variability in timelines and administrative predictability, requiring localized roadmaps.',
      },
      {
        question: 'What role do key opinion leaders play in digital therapeutics adoption across MENA?',
        answer:
          'KOLs and digital clinical leaders influence prescribing confidence, hospital adoption, and payer medical review. Early advisory boards, pilot site partnerships, and credible regional evidence accelerate uptake when aligned to local workflow and incentives.',
      },
    ]),
    ctaSection: {
      title: 'Plan your MENA digital therapeutics evidence and access program',
      description:
        'BioNixus supports regulatory landscaping, HCP and payer insight, pricing and access strategy, and execution across Saudi Arabia, UAE, and wider MENA.',
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
