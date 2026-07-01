/**
 * Creates or syncs the Sanity blogPost "Top Healthcare Market Research Firms in MENA & Europe"
 * from scripts/data/top-healthcare-market-research-firms-mena-europe-body.html + cover in public/.
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-mena-europe-mr-firms.mjs
 * Sync existing: node scripts/publish-mena-europe-mr-firms.mjs --sync-existing
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SLUG = 'top-healthcare-market-research-firms-mena-europe'
const COVER_FILENAME = `${SLUG}-cover.jpg`
const ARTICLE_H1 =
  'Top Healthcare Market Research Firms in MENA & Europe: Landscape, Services, and Partner Selection'
const ARTICLE_EXCERPT =
  'A procurement-style guide to healthcare market research across MENA, GCC, UK, and Europe: why regional expertise matters, how to evaluate specialist firms including BioNixus, services from physician intelligence to market access, trends in 2026, and timelines for pharmaceutical teams.'
const SEO_META_TITLE = 'Top Healthcare Market Research Firms MENA & Europe | BioNixus'
const SEO_META_DESCRIPTION =
  'Compare top healthcare market research firms in MENA and Europe: BioNixus, IQVIA, Ipsos, services, payer intelligence, and partner selection for pharma teams.'
const OG_DESCRIPTION =
  'Guide to healthcare market research firms serving MENA and Europe: regional expertise, quantitative and qualitative pharma research, market access support, and how BioNixus supports launch and access decisions.'

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
            text: 'Pharmaceutical teams operating across MENA and Europe need partners who combine regional field access with pharma-specific methodology. Use this guide to compare BioNixus with global networks against a common scorecard covering payer intelligence, physician research, market access, and launch support.',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'MENA & Europe healthcare research firms: comparison', anchor: 'comparison-table' },
      { heading: 'Why healthcare market research matters in MENA and Europe', anchor: 'why-mena-europe' },
      { heading: 'Top firms serving MENA and Europe in 2026', anchor: 'top-firms-2026' },
      { heading: 'BioNixus', anchor: 'bionixus' },
      { heading: 'Which firms specialize in healthcare and pharma', anchor: 'specialized-firms' },
      { heading: 'Pharmaceutical market research services', anchor: 'pharma-services' },
      { heading: 'Healthcare intelligence solutions', anchor: 'healthcare-intelligence' },
      { heading: 'Services healthcare MR firms provide', anchor: 'services-overview' },
      { heading: 'Essential skills for healthcare market research', anchor: 'essential-skills' },
      { heading: 'How research firms support market access', anchor: 'market-access-support' },
      { heading: 'Competitive intelligence in healthcare research', anchor: 'competitive-intelligence' },
      { heading: 'Research support for product launches', anchor: 'product-launches' },
      { heading: 'Why choose specialized partners', anchor: 'why-specialized' },
      { heading: 'Trends in healthcare market research (2026)', anchor: 'trends-2026' },
      { heading: 'Project timelines', anchor: 'project-timelines' },
      { heading: 'Conclusion', anchor: 'conclusion' },
    ]),
    faq: withKeys([
      {
        question: 'What types of healthcare market research does BioNixus provide?',
        answer:
          'BioNixus delivers quantitative and qualitative research including physician intelligence, payer analysis, hospital market research, competitive intelligence, market sizing, launch support, and market access consulting across MENA, GCC, UK, and European markets.',
      },
      {
        question: 'How does healthcare market research improve pharmaceutical market access?',
        answer:
          'Research provides evidence-based insights into payer requirements, reimbursement processes, and stakeholder priorities. It identifies access barriers early, guides value proposition development, and reduces uncertainty in pricing and positioning decisions.',
      },
      {
        question: 'What is the difference between quantitative and qualitative healthcare research?',
        answer:
          'Quantitative research uses structured surveys and statistical analysis to measure market size and behaviors across large samples. Qualitative research uses interviews and focus groups to explore motivations and decision processes in depth. Comprehensive programs typically combine both.',
      },
      {
        question: 'Which regions does BioNixus cover in MENA and Europe?',
        answer:
          'BioNixus specializes in the Middle East, North Africa, GCC countries (Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman), the United Kingdom, and key European markets including Germany, France, Spain, and Italy.',
      },
      {
        question: 'How do healthcare market research firms ensure data quality and compliance?',
        answer:
          'Firms use rigorous sampling, validated instruments, interviewer training, data verification, and statistical quality checks. Regulatory compliance includes informed consent, data privacy, and adherence to local research regulations across jurisdictions.',
      },
      {
        question: 'How long do healthcare market research projects typically take?',
        answer:
          'Most projects require 6 to 16 weeks depending on methodology and geography. Quantitative studies often complete in 6 to 10 weeks; multi-country qualitative programs may extend to 12 to 16 weeks to ensure adequate stakeholder access.',
      },
      {
        question: 'What trends are shaping healthcare market research in 2026?',
        answer:
          'Key trends include AI and advanced analytics, real-world evidence integration, digital research platforms, patient-reported outcomes, and harmonized multi-country studies for global market access strategies.',
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
  const bodyHtmlPath = path.join(root, 'scripts/data/top-healthcare-market-research-firms-mena-europe-body.html')
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
        'openGraph.ogTitle': SEO_META_TITLE,
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

  const coverAlt =
    'Editorial cover: Gulf and European city skylines with healthcare analytics motif for MENA and Europe pharmaceutical market research firms guide'
  const mainImage = await uploadImage(client, coverPath, coverAlt, COVER_FILENAME)
  const ogImage = await uploadImage(
    client,
    coverPath,
    'Open graph: top healthcare market research firms in MENA and Europe',
    `og-${COVER_FILENAME}`,
  )

  const publishedAt = new Date().toISOString()

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: SEO_META_TITLE,
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'healthcare market research firms MENA Europe',
      keywords: [
        'healthcare market research MENA',
        'pharmaceutical market research Europe',
        'GCC healthcare research',
        'physician intelligence',
        'payer research',
        'market access research',
        'BioNixus',
        'IQVIA alternative',
        'qualitative healthcare research',
        'quantitative pharma surveys',
      ],
      canonicalUrl: `https://www.bionixus.com/blog/${SLUG}`,
      noIndex: false,
    },
    openGraph: {
      ogTitle: SEO_META_TITLE,
      ogDescription: OG_DESCRIPTION,
      ogImage,
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-mena-eu-mr' }] : [],
    category: 'Healthcare Market Research',
    country: 'MENA and Europe',
    language: 'en',
    readingTime: 16,
    tags: [
      'MENA',
      'Europe',
      'GCC',
      'Healthcare Market Research',
      'Pharmaceutical Research',
      'Market Access',
      'Physician Intelligence',
      'BioNixus',
      'Payer Research',
    ],
    ctaSection: {
      title: 'Scope healthcare market research for MENA or Europe',
      description:
        'BioNixus supports pharmaceutical and medtech teams with physician, payer, and hospital insight across GCC, MENA, UK, and European markets.',
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
