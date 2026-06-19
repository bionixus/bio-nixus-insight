/**
 * Creates or syncs German Sanity blogPost for pharma market research in Germany 2026.
 * Public URL: https://www.bionixus.com/de/blog/pharmamarktforschung-deutschland-2026
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-de-blog-pharmamarktforschung-deutschland-2026.mjs
 * Sync: node scripts/publish-de-blog-pharmamarktforschung-deutschland-2026.mjs --sync-existing
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'
import sharp from 'sharp'
import { normalizeInternalLinks } from './lib/blog-html-utils.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SLUG = 'pharmamarktforschung-deutschland-2026'
const COVER_FILENAME = 'top-healthcare-market-research-companies-uae-cover.jpg'
const ARTICLE_H1 =
  'Pharmamarktforschung in Deutschland 2026: Methoden, KVen, RWE und KOL-Netzwerke'
const ARTICLE_EXCERPT =
  'Praxisguide zur Pharmamarktforschung in Deutschland: GKV-Struktur, Kassenärztliche Vereinigungen, Ärztebefragungen, KOL-Mapping, Real-World-Evidence-Daten, Rabattverträge und Aut-idem. Für Market-Access- und kommerzielle Teams.'
const SEO_META_TITLE = 'Pharmamarktforschung Deutschland 2026 | BioNixus'
const SEO_META_DESCRIPTION =
  'Leitfaden zur Pharmamarktforschung in Deutschland: GKV/PKV-Struktur, Kassenärztliche Vereinigungen, Ärztebefragungen, KOL-Mapping, RWE-Daten und Rabattverträge. Methoden und BioNixus-Expertise.'
const OG_DESCRIPTION =
  'Pharmamarktforschung in Deutschland: Wie GKV-Struktur, KVen, AMNOG und Rabattverträge die Forschungsplanung beeinflussen. Methoden für Ärztebefragungen, KOL-Netzwerke und RWE-Studien.'

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
            text: 'Deutschland ist mit über 50 Milliarden Euro Marktvolumen der größte Pharmamarkt Europas. Die dezentrale GKV-Struktur mit 16 Kassenärztlichen Vereinigungen, das AMNOG-Verfahren und die Dominanz von Rabattverträgen im Generikamarkt erfordern spezifische Forschungsansätze. Dieses Dokument gibt einen umfassenden Überblick über Methoden, Datenquellen und regulatorische Rahmenbedingungen.',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'Einleitung: Deutschland als größter Pharmamarkt Europas', anchor: 'einleitung' },
      { heading: 'Struktur des deutschen Pharmamarkts: GKV, PKV und Selbstzahler', anchor: 'marktstruktur' },
      { heading: 'Kassenärztliche Vereinigungen (KV) und ihr Einfluss auf Verordnungen', anchor: 'kassenaerztliche-vereinigungen' },
      { heading: 'Methoden der Pharmamarktforschung in Deutschland: quantitative und qualitative Ansätze', anchor: 'methoden-marktforschung' },
      { heading: 'Ärztebefragungen in Deutschland: Besonderheiten und Herausforderungen', anchor: 'aerztebefragungen' },
      { heading: 'KOL-Netzwerke und Expertenbefragungen in Deutschland', anchor: 'kol-netzwerke' },
      { heading: 'Real-World-Evidence in Deutschland: Datenbasis und Nutzungsmöglichkeiten', anchor: 'rwe-deutschland' },
      { heading: 'BioNixus Deutschland: Leistungen und Herangehensweise', anchor: 'bionixus-deutschland' },
      { heading: 'Häufig gestellte Fragen', anchor: 'faq' },
      { heading: 'Fazit', anchor: 'fazit' },
    ]),
    faq: withKeys([
      {
        question: 'Was macht Deutschland zum wichtigsten Pharmamarkt in Europa?',
        answer:
          'Deutschland ist mit einem Marktvolumen von über 50 Milliarden Euro der größte Pharmamarkt in Europa. Dies beruht auf der Kombination aus einer großen, gut versicherten Bevölkerung, einem hohen Pro-Kopf-Gesundheitsausgabenniveau, einer starken Nachfrage nach innovativen Therapien sowie dem Fehlen staatlicher Preiskontrollen für neue Arzneimittel im ersten Jahr nach Markteinführung. Zudem ist Deutschland ein wichtiger Referenzmarkt für Preisverhandlungen in anderen europäischen Ländern.',
      },
      {
        question: 'Wie beeinflusst das AMNOG-Verfahren die Pharmamarktforschung?',
        answer:
          'Das AMNOG-Verfahren zwingt pharmazeutische Unternehmen, schon früh in der klinischen Entwicklung an versorgungsnahe Evidenz zu denken. Für die Marktforschung bedeutet das, dass bereits in der Pre-Launch-Phase Studien zur Therapiezufriedenheit, zu unerfüllten medizinischen Bedürfnissen und zur Patientenperspektive durchgeführt werden sollten, um die AMNOG-Dossiererstattung zu stärken und die Verhandlungsposition gegenüber dem GKV-Spitzenverband zu verbessern.',
      },
      {
        question: 'Was sind Kassenärztliche Vereinigungen und warum sind sie für die Pharmamarktforschung relevant?',
        answer:
          'Kassenärztliche Vereinigungen (KVen) sind Körperschaften des öffentlichen Rechts, die in jedem Bundesland die Interessen der niedergelassenen Kassenärzte vertreten. Sie verhandeln Honorarvereinbarungen und überwachen die Wirtschaftlichkeit von Verordnungen. Für die Pharmamarktforschung sind KVen relevant, weil ihre Wirtschaftlichkeitsprüfungen das Verordnungsverhalten beeinflussen und KV-spezifische Regelungen zu regionalen Unterschieden in der Marktsituation führen können.',
      },
      {
        question: 'Welche Datenbasis steht für Real-World-Evidence-Studien in Deutschland zur Verfügung?',
        answer:
          'Die wichtigsten RWE-Datenquellen in Deutschland sind GKV-Routinedaten (verfügbar über Krankenkassen, das FDZ Gesundheit beim BfArM sowie über Forschungseinrichtungen wie InGef und WIdO/AOK), Krankheitsregister der medizinischen Fachgesellschaften, Krebsregister der Bundesländer, elektronische Patientenakten (im Aufbau seit 2025) sowie Verordnungsdaten von IQVIA und Insight Health. Der Zugang erfordert oft ethische Genehmigungen sowie Datenschutzverträge.',
      },
      {
        question: 'Wie werden KOLs im deutschen Pharmamarkt identifiziert und bewertet?',
        answer:
          'KOL-Mapping in Deutschland kombiniert bibliometrische Analysen (Publikationsaktivität und Zitationshäufigkeit), Kongressaktivitäten (Referate, Vorsitze und Poster), Aktivitäten in Leitliniengremien (AWMF, nationale Fachgesellschaften), Mitgliedschaften in wissenschaftlichen Beiräten sowie Peer-Assessment-Befragungen unter Fachärzten. Das Ergebnis ist ein mehrdimensionales KOL-Profil, das sowohl wissenschaftliche Reputation als auch praktischen Einfluss auf das Verordnungsverhalten erfasst.',
      },
      {
        question: 'Welche ethischen Anforderungen gelten für Ärztebefragungen in Deutschland?',
        answer:
          'Ärztebefragungen in Deutschland unterliegen den ADM- und BVM-Richtlinien sowie dem ICC/ESOMAR-Regelwerk. Hinzu kommen DSGVO-Anforderungen (explizite Einwilligung, Zweckbindung, Löschfristen) und die Leitlinien des vfa zur Trennung von Marktforschung und Verkaufsförderung. Bei klinischen Fragestellungen kann eine Genehmigung der zuständigen Ethikkommission erforderlich sein. Aufwandsentschädigungen für teilnehmende Ärzte müssen angemessen und transparent sein.',
      },
      {
        question: 'Welche Rolle spielen Rabattverträge und Aut-idem für die Generika-Marktforschung?',
        answer:
          'Rabattverträge nach § 130a SGB V sind ein dominantes Steuerungsinstrument im deutschen Generikamarkt. Das tatsächliche Verordnungsvolumen eines Arztes spiegelt nicht zwingend den tatsächlichen Absatz eines bestimmten Generikums wider, da die Kassenlogik die Dispensierung steuert. Marktforschungsstudien müssen daher zwischen Verordnungsverhalten (Arztebene), Dispensierungsverhalten (Apothekenebene) und tatsächlichem Patientenverbrauch unterscheiden.',
      },
      {
        question: 'Wie kann BioNixus pharmazeutischen Teams beim Markteintritt in Deutschland helfen?',
        answer:
          'BioNixus unterstützt pharmazeutische Teams beim deutschen Markteintritt mit Marktstrukturanalysen und Wettbewerbslandschaften, primärer Forschung zu Therapiegewohnheiten bei relevanten Ärztegruppen, KOL-Mapping und Netzwerkaufbau, RWE-Studien auf Basis von GKV-Daten und Registern, AMNOG-begleitender Marktforschung sowie Pre-Launch- und Launch-Monitoring-Studien.',
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
  const bodyHtmlPath = path.join(root, 'scripts/data/de-blog-pharmamarktforschung-deutschland-2026.html')
  const bodyHtml = normalizeInternalLinks(fs.readFileSync(bodyHtmlPath, 'utf8'))
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
    console.log('URL:', `https://www.bionixus.com/de/blog/${SLUG}`)
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
    'Titelbild Pharmamarktforschung Deutschland: GKV-Struktur, KVen, Ärztebefragungen und RWE-Studien',
    `de-pharma-${COVER_FILENAME}`,
  )
  const ogImage = await uploadImage(
    client,
    coverPath,
    'Social-Media-Bild: Pharmamarktforschung Deutschland 2026',
    `og-de-pharma-${COVER_FILENAME}`,
  )

  const publishedAt = new Date().toISOString()
  const canonicalUrl = `https://www.bionixus.com/de/blog/${SLUG}`

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: SEO_META_TITLE,
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'Pharmamarktforschung Deutschland',
      keywords: [
        'Deutschland',
        'Pharmamarktforschung',
        'GKV',
        'Kassenärztliche Vereinigungen',
        'KOL-Mapping',
        'Real-World-Evidence',
        'Ärztebefragungen',
        'BioNixus',
        'Rabattverträge',
        'AMNOG',
      ],
      canonicalUrl,
      noIndex: false,
    },
    openGraph: {
      ogTitle: 'Pharmamarktforschung Deutschland 2026 | BioNixus',
      ogDescription: OG_DESCRIPTION,
      ogImage,
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-de-pharma' }] : [],
    category: 'Healthcare Market Research',
    country: 'Germany',
    language: 'de',
    readingTime: 15,
    tags: ['Deutsch', 'Deutschland', 'Pharmamarktforschung', 'GKV', 'KOL', 'RWE', 'BioNixus'],
    ctaSection: {
      title: 'Pharmamarktforschung in Deutschland mit BioNixus',
      description:
        'BioNixus unterstützt pharmazeutische Teams in Deutschland mit Ärztebefragungen, KOL-Mapping, RWE-Studien und AMNOG-begleitender Marktforschung. Für strategische Entscheidungen, nicht nur Datenaggregation.',
      buttonText: 'Jetzt anfragen',
      buttonUrl: 'https://www.bionixus.com/de/contact',
    },
    body: [],
  }

  const created = await client.create(doc)
  console.log('Created blogPost:', created._id)
  console.log('URL:', canonicalUrl)
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
