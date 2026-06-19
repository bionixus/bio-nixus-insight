/**
 * Creates or syncs German Sanity blogPost for AMNOG frühe Nutzenbewertung guide 2026.
 * Public URL: https://www.bionixus.com/de/blog/amnog-frueher-nutzen-marktzugang-2026
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-de-blog-amnog-frueher-nutzen-marktzugang-2026.mjs
 * Sync: node scripts/publish-de-blog-amnog-frueher-nutzen-marktzugang-2026.mjs --sync-existing
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'
import sharp from 'sharp'
import { normalizeInternalLinks } from './lib/blog-html-utils.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SLUG = 'amnog-frueher-nutzen-marktzugang-2026'
const COVER_FILENAME = 'top-healthcare-market-research-companies-uae-cover.jpg'
const ARTICLE_H1 =
  'AMNOG und frühe Nutzenbewertung 2026: Leitfaden für Market-Access-Teams'
const ARTICLE_EXCERPT =
  'Praxisleitfaden zum AMNOG-Verfahren in Deutschland: G-BA-Prozess, IQWiG-Bewertung, Zusatznutzen-Kategorien, Preisverhandlungen mit dem GKV-Spitzenverband, Orphan-Drug-Regelungen und Marktforschung zur Dossiervorbereitung.'
const SEO_META_TITLE = 'AMNOG frühe Nutzenbewertung Marktzugang 2026 | BioNixus'
const SEO_META_DESCRIPTION =
  'Leitfaden zum AMNOG-Verfahren: G-BA, IQWiG, Zusatznutzen, Preisverhandlungen GKV-Spitzenverband, Orphan Drugs und Marktforschung für die Dossiervorbereitung in Deutschland.'
const OG_DESCRIPTION =
  'AMNOG und frühe Nutzenbewertung in Deutschland: G-BA-Verfahren, IQWiG-Bewertung, Zusatznutzen-Kategorien, Preisverhandlungen und wie Marktforschung die Dossiervorbereitung stärkt.'

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
            text: 'Das AMNOG-Verfahren ist der zentrale Zugangsmechanismus zum deutschen GKV-Markt für neue Arzneimittel. Die frühe Nutzenbewertung durch den G-BA bestimmt den Erstattungsbetrag und damit die wirtschaftliche Tragfähigkeit des Markteintritts. Eine frühzeitige Marktforschung, die die Perspektive von Ärzten, Patienten und Kostenträgern erfasst, kann die Qualität des Dossiers erheblich verbessern.',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'Einleitung: AMNOG als Herausforderung und Chance', anchor: 'einleitung' },
      { heading: 'Das AMNOG-Verfahren: Ablauf der frühen Nutzenbewertung', anchor: 'amnog-verfahren' },
      { heading: 'G-BA und IQWiG: Rollen und Bewertungskriterien', anchor: 'gba-iqwig' },
      { heading: 'Zusatznutzen und Preisverhandlungen mit dem GKV-Spitzenverband', anchor: 'zusatznutzen-preisverhandlung' },
      { heading: 'Studiendesign für die Nutzenbewertung: RCTs, RWE und Subgruppenanalysen', anchor: 'studiendesign-nutzenbewertung' },
      { heading: 'Marktforschung zur Vorbereitung des AMNOG-Dossiers', anchor: 'marktforschung-amnog-dossier' },
      { heading: 'BioNixus Deutschland: Unterstützung für Market Access Teams', anchor: 'bionixus-deutschland' },
      { heading: 'Häufig gestellte Fragen', anchor: 'faq' },
      { heading: 'Fazit', anchor: 'fazit' },
    ]),
    faq: withKeys([
      {
        question: 'Was ist der Unterschied zwischen dem IQWiG-Bericht und dem G-BA-Beschluss?',
        answer:
          'Das IQWiG erstellt im Auftrag des G-BA eine wissenschaftliche Dossierbewertung, die eine Empfehlung zur Einstufung des Zusatznutzens enthält. Diese Empfehlung ist jedoch nicht bindend: Der G-BA kann nach seiner eigenen Beratung – einschließlich der mündlichen Anhörung – zu einer abweichenden Entscheidung kommen. Der verbindliche G-BA-Beschluss, nicht der IQWiG-Bericht, bildet die Grundlage für die Preisverhandlungen.',
      },
      {
        question: 'Welche Bedeutung hat die zweckmäßige Vergleichstherapie (ZVT) für das AMNOG-Verfahren?',
        answer:
          'Die ZVT ist der Maßstab, an dem das neue Arzneimittel gemessen wird. Sie wird vom G-BA auf Basis der aktuellen Therapiestandards und Leitlinien für die jeweilige Indikation festgelegt. Wenn das Design einer klinischen Studie nicht mit der ZVT übereinstimmt, kann das IQWiG häufig keinen direkten Vergleich anstellen, was zu einem negativen Bewertungsergebnis führt. Die frühzeitige Abstimmung der Studie auf die wahrscheinliche ZVT ist daher essenziell.',
      },
      {
        question: 'Wie werden Orphan Drugs im AMNOG-Verfahren behandelt?',
        answer:
          'Arzneimittel für seltene Erkrankungen (Orphan Drugs) mit EU-Orphan-Drug-Designation gelten nach §35a Abs. 1 SGB V automatisch als mit Zusatznutzen belegt, solange der jährliche GKV-Umsatz die Schwelle von 50 Millionen Euro nicht überschreitet. Oberhalb dieser Schwelle ist eine vollständige Nutzenbewertung mit allen fünf Dossiermodulen erforderlich.',
      },
      {
        question: 'Was passiert, wenn kein Zusatznutzen festgestellt wird?',
        answer:
          'Ergibt die Nutzenbewertung keinen Zusatznutzen gegenüber der ZVT, wird der Erstattungsbetrag des neuen Arzneimittels auf das Kostenniveau der ZVT begrenzt. Das Arzneimittel kann zwar weiterhin in Deutschland vermarktet werden, aber der Preis orientiert sich dann an den günstigsten vergleichbaren Therapieoptionen. Für viele innovative Arzneimittel kann dies zu einem wirtschaftlich nicht tragfähigen Erstattungsbetrag führen.',
      },
      {
        question: 'Welche Rolle spielen Patientenvertreter im AMNOG-Verfahren?',
        answer:
          'Patientenvertreter sind formaler Bestandteil des G-BA-Gremiums und haben ein Mitberatungs-, aber kein Stimmrecht. Praktisch haben Patientenorganisationen zunehmend an Einfluss gewonnen: Eine frühzeitige Einbindung von Patientenvertretern in die Entwicklung von PRO-Instrumenten und in Advisory Boards kann dazu beitragen, dass die Patientenperspektive im G-BA-Verfahren angemessen berücksichtigt wird.',
      },
      {
        question: 'Wie lange gilt der G-BA-Beschluss, und wann kann eine Neubewertung beantragt werden?',
        answer:
          'G-BA-Beschlüsse zur frühen Nutzenbewertung gelten grundsätzlich für die gesamte Zulassungsdauer des Arzneimittels. Eine Neubewertung kann beantragt werden, wenn neue wesentliche Erkenntnisse zur Nutzenbewertung vorliegen – beispielsweise neue randomisierte Studiendaten, neue RWE-Studien oder eine Änderung der Zulassung. Für Unternehmen mit einem negativen ersten Bewertungsergebnis bietet die Neubewertung eine wichtige zweite Chance.',
      },
      {
        question: 'Wie beeinflusst der AMNOG-Beschluss den Listenpreis in anderen europäischen Ländern?',
        answer:
          'Der AMNOG-Erstattungsbetrag ist in Deutschland zunächst vertraulich. Gleichwohl besteht de facto eine enge Kopplung: Viele EU-Länder nutzen den deutschen Erstattungspreis als Referenz. Unternehmen stehen vor dem Dilemma, dass ein niedriger deutscher Erstattungsbetrag die Preisverhandlungen in anderen Märkten belasten kann. Europäische Pricing-Strategien sollten den AMNOG-Prozess als integralen Bestandteil einer kohärenten Pan-EU-Preisstrategie berücksichtigen.',
      },
      {
        question: 'Welche Bedeutung hat das DIMDI/BfArM für das AMNOG-Verfahren?',
        answer:
          'Das DIMDI, das 2020 in das BfArM integriert wurde, spielt im AMNOG-Kontext vor allem eine administrative Rolle: Es verwaltet die Arzneimittelzulassungsdaten und stellt Informationen bereit, die für die Dossiereinreichung benötigt werden. Bei Kombinationstherapien oder Off-Label-Use-Situationen müssen die Grenzen der Zulassung im Dossier präzise berücksichtigt werden.',
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
  const bodyHtmlPath = path.join(root, 'scripts/data/de-blog-amnog-frueher-nutzen-marktzugang-2026.html')
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
    'Titelbild AMNOG frühe Nutzenbewertung Deutschland: G-BA, IQWiG und Marktzugang für pharmazeutische Unternehmen',
    `de-amnog-${COVER_FILENAME}`,
  )
  const ogImage = await uploadImage(
    client,
    coverPath,
    'Social-Media-Bild: AMNOG frühe Nutzenbewertung Marktzugang Deutschland 2026',
    `og-de-amnog-${COVER_FILENAME}`,
  )

  const publishedAt = new Date().toISOString()
  const canonicalUrl = `https://www.bionixus.com/de/blog/${SLUG}`

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: SEO_META_TITLE,
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'AMNOG frühe Nutzenbewertung Deutschland',
      keywords: [
        'Deutschland',
        'AMNOG',
        'frühe Nutzenbewertung',
        'G-BA',
        'IQWiG',
        'Zusatznutzen',
        'GKV-Spitzenverband',
        'BioNixus',
        'Marktzugang',
        'Orphan Drugs',
      ],
      canonicalUrl,
      noIndex: false,
    },
    openGraph: {
      ogTitle: 'AMNOG frühe Nutzenbewertung Marktzugang 2026 | BioNixus',
      ogDescription: OG_DESCRIPTION,
      ogImage,
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-de-amnog' }] : [],
    category: 'Healthcare Market Research',
    country: 'Germany',
    language: 'de',
    readingTime: 14,
    tags: ['Deutsch', 'Deutschland', 'AMNOG', 'G-BA', 'IQWiG', 'Marktzugang', 'BioNixus'],
    ctaSection: {
      title: 'AMNOG-Dossier mit BioNixus vorbereiten',
      description:
        'BioNixus unterstützt Market-Access-Teams in Deutschland bei der Dossiervorbereitung: Patientenpräferenzstudien, Ärzteinterviews zur unerfüllten Therapienachfrage und versorgungsnahe Evidenz für den G-BA.',
      buttonText: 'Kontakt aufnehmen',
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
