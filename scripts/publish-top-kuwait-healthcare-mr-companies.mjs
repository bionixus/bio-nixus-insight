/**
 * Creates or syncs the Sanity blogPost "Top Healthcare Market Research Companies in Kuwait"
 * from scripts/data/top-healthcare-market-research-companies-kuwait-body.html + cover in public/.
 *
 * Cover: node scripts/generate-kuwait-hcmr-cover.mjs
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-top-kuwait-healthcare-mr-companies.mjs
 * Sync existing: node scripts/publish-top-kuwait-healthcare-mr-companies.mjs --sync-existing
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SLUG = 'top-healthcare-market-research-companies-kuwait'
const COVER_FILENAME = 'top-healthcare-market-research-companies-kuwait-cover.jpg'
const ARTICLE_H1 =
  'Top Healthcare Market Research Companies in Kuwait: How to Shortlist MOPH- and CMS-Aware Agencies'
const ARTICLE_EXCERPT =
  'A procurement-style guide to Kuwait healthcare market research: CMS tender context, MOPH registration realities, global versus specialist trade-offs, syndicated data complements, compliance expectations, and how GCC-native agencies such as BioNixus fit typical Kuwait programmes.'
const SEO_META_DESCRIPTION =
  'Kuwait healthcare market research buyers guide: MOPH and CMS context, pharma fieldwork, payer insight, compliance, and how to compare specialist versus global firms.'
const OG_DESCRIPTION =
  'How to shortlist Kuwait healthcare research agencies: evaluation criteria, global versus specialist models, and what to expect from CMS-aware GCC specialists.'

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
            text: 'Use a structured scorecard—CMS and MOPH literacy, therapeutic methodology, quant/qual integration, and compliance—to compare Kuwait healthcare research firms. Specialist agencies such as BioNixus are often shortlisted when teams need GCC-native depth, tender-aligned synthesis, and disciplined fieldwork beyond Dubai-only execution.',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'Why Kuwait concentrates healthcare market research demand', anchor: 'kuwait-market-context' },
      { heading: 'A practical framework for shortlisting Kuwait healthcare research partners', anchor: 'shortlisting-framework' },
      { heading: 'BioNixus: Kuwait- and GCC-focused healthcare specialist', anchor: 'bionixus' },
      { heading: 'Global insights networks with Kuwait or GCC footprints', anchor: 'global-networks' },
      { heading: 'Fieldwork-led agencies and healthcare desks', anchor: 'fieldwork-led-agencies' },
      { heading: 'Syndicated data, audits, and prescription analytics', anchor: 'syndicated-and-data' },
      { heading: 'Quantitative depth versus qualitative nuance', anchor: 'quant-qual' },
      { heading: 'Compliance, ethics, and hospital access', anchor: 'compliance-ethics' },
      { heading: 'Commercial models: retainers, bundles, and ad hoc waves', anchor: 'commercial-models' },
      { heading: 'Red flags when evaluating Kuwait healthcare research vendors', anchor: 'red-flags' },
      { heading: 'Conclusion: building a balanced Kuwait research roster', anchor: 'conclusion' },
    ]),
    faq: withKeys([
      {
        question: 'How do I choose between a global market research network and a Kuwait healthcare specialist?',
        answer:
          'Global networks add multinational governance, syndicated data options, and multi-country scale. Kuwait- or GCC-native healthcare specialists such as BioNixus typically excel when studies require CMS tender literacy, Arabic-native moderation, and faster iteration on MOPH access narratives. Many enterprises run hybrid models.',
      },
      {
        question: 'What should a Kuwait healthcare market research proposal include?',
        answer:
          'Expect clear sampling frames, quota logic by sector and specialty, discussion guide or survey outline, translation workflow, coding plan, timeline with recruitment contingencies, and named senior leads. Transparency on offshore support and QC steps is essential.',
      },
      {
        question: 'How long does physician or payer recruitment take in Kuwait?',
        answer:
          'Feasibility depends on specialty incidence, honoraria norms, and concurrent congress periods. Common therapeutic areas often move in a few weeks; narrow specialties or multi-stakeholder MOPH chains may require longer buffers and adaptive quotas.',
      },
      {
        question: 'Does CMS procurement affect healthcare research design in Kuwait?',
        answer:
          'Yes. Because Central Medical Stores supplies most government hospitals, access and pricing research should reflect tender calendars, generic substitution pressure, and hospital committee dynamics—not only retail or private insurance channels.',
      },
      {
        question: 'What differentiates BioNixus from generalist Kuwait market research firms?',
        answer:
          'BioNixus focuses on pharmaceutical-grade qualitative and quantitative execution with GCC-native market access perspective, helping teams translate interviews and surveys into actionable CMS and competitive intelligence rather than generic reporting templates.',
      },
      {
        question: 'What compliance topics should Kuwait healthcare studies address upfront?',
        answer:
          'Clarify personal data handling, consent, transcription storage, hospital vendor clearance, and institutional ethics expectations. Agencies should document identification verification for HCPs and escalation paths if questions arise mid-field.',
      },
      {
        question: 'Where can I request a Kuwait healthcare market research scope from BioNixus?',
        answer:
          'Use the BioNixus contact page to share objectives, markets, timelines, and stakeholder lists. The team will propose methodology, sample design, and a milestone plan aligned to your launch or access milestones.',
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
  const refreshImages = process.argv.includes('--refresh-images')
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
    const patch = client
      .patch(existingId)
      .set({
        ...shared,
        'seo.metaDescription': SEO_META_DESCRIPTION,
        'openGraph.ogDescription': OG_DESCRIPTION,
        updatedAt: new Date().toISOString(),
      })

    if (refreshImages) {
      const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME)
      if (!fs.existsSync(coverPath)) {
        console.error('Cover image missing:', coverPath)
        process.exit(1)
      }
      const mainImage = await uploadImage(
        client,
        coverPath,
        'Kuwait Towers skyline at golden hour with subtle healthcare analytics motif, editorial cover for Kuwait healthcare market research companies guide',
        COVER_FILENAME,
      )
      const ogImage = await uploadImage(
        client,
        coverPath,
        'Open graph image: top healthcare market research companies in Kuwait',
        `og-${COVER_FILENAME}`,
      )
      patch.set({ mainImage, 'openGraph.ogImage': ogImage })
    }

    await patch.commit()
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
    console.error('Generate it first: node scripts/generate-kuwait-hcmr-cover.mjs')
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
    'Kuwait Towers skyline at golden hour with subtle healthcare analytics motif, editorial cover for Kuwait healthcare market research companies guide',
    COVER_FILENAME,
  )
  const ogImage = await uploadImage(
    client,
    coverPath,
    'Open graph image: top healthcare market research companies in Kuwait',
    `og-${COVER_FILENAME}`,
  )

  const publishedAt = new Date().toISOString()

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: 'Top Kuwait Healthcare Market Research Companies | BioNixus',
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'healthcare market research companies Kuwait',
      keywords: [
        'healthcare market research Kuwait',
        'pharmaceutical market research Kuwait',
        'GCC fieldwork',
        'Kuwait MOPH research',
        'CMS tender intelligence',
        'BioNixus',
        'qualitative healthcare Kuwait',
        'quantitative physician panels GCC',
      ],
      canonicalUrl: `https://www.bionixus.com/blog/${SLUG}`,
      noIndex: false,
    },
    openGraph: {
      ogTitle: 'Top Healthcare Market Research Companies in Kuwait | BioNixus',
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
      'Fieldwork',
      'Market Access',
      'MOPH',
      'CMS',
    ],
    ctaSection: {
      title: 'Shortlist the right Kuwait healthcare market research partner',
      description:
        'BioNixus supports Kuwait and GCC pharmaceutical and medtech teams with integrated insight, fieldwork, and CMS-aware access recommendations.',
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
