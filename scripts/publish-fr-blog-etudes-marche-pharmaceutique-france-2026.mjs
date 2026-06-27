/**
 * Creates or syncs French Sanity blogPost for pharma market research in France 2026.
 * Public URL: https://www.bionixus.com/fr/blog/etudes-marche-pharmaceutique-france-2026
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-fr-blog-etudes-marche-pharmaceutique-france-2026.mjs
 * Sync: node scripts/publish-fr-blog-etudes-marche-pharmaceutique-france-2026.mjs --sync-existing
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'
import sharp from 'sharp'
import { normalizeInternalLinks } from './lib/blog-html-utils.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SLUG = 'etudes-marche-pharmaceutique-france-2026'
const COVER_FILENAME = 'top-healthcare-market-research-companies-uae-cover.jpg'
const ARTICLE_H1 =
  'Études de marché pharmaceutiques en France 2026 : HAS, CEPS et accès au marché'
const ARTICLE_EXCERPT =
  'Guide complet sur la recherche de marché pharmaceutique en France : évaluation HAS (SMR/ASMR), négociations CEPS, Accès Précoce, données SNDS, conformité CNIL/RGPD et approche BioNixus pour les équipes market access.'
const SEO_META_TITLE = 'Études de marché pharmaceutiques France 2026 | BioNixus'
const SEO_META_DESCRIPTION =
  'Comment mener des études de marché pharmaceutiques en France en 2026 : HAS SMR/ASMR, CEPS prix-remboursement, panels médecins, SNDS et conformité RGPD. Guide pratique BioNixus.'
const OG_DESCRIPTION =
  'Guide sur les études de marché pharmaceutiques en France : système HAS, évaluation ASMR/SMR, stratégie prix CEPS, Accès Précoce, SNDS et défis spécifiques CNIL/RGPD avec BioNixus.'

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
            text: "La France est l'un des marchés pharmaceutiques les plus complexes d'Europe. Réussir une étude de marché en France exige de comprendre le rôle de la HAS dans l'évaluation du bénéfice clinique (SMR/ASMR), les mécanismes de négociation de prix avec le CEPS, les contraintes CNIL/RGPD sur les données de santé, et les spécificités des panels médecins français. Ce guide fournit un cadre pratique pour les équipes market access et études.",
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'Introduction : Pourquoi la recherche de marché pharmaceutique est-elle critique en France en 2026 ?', anchor: 'introduction' },
      { heading: 'Le système de santé français et ses enjeux pour la recherche de marché', anchor: 'systeme-sante-francais' },
      { heading: 'HAS et évaluation économique : ASMR, ISP et le rôle des études primaires', anchor: 'has-asmr-isp' },
      { heading: 'CEPS et stratégie de prix-remboursement', anchor: 'ceps-prix-remboursement' },
      { heading: 'Études auprès des professionnels de santé (médecins, pharmaciens, spécialistes)', anchor: 'etudes-professionnels-sante' },
      { heading: 'Recherche qualitative vs quantitative en France', anchor: 'qualitatif-vs-quantitatif' },
      { heading: 'BioNixus France : capacités et approche', anchor: 'bionixus-france' },
      { heading: 'Les défis spécifiques : CNIL, RGPD, panels médecins', anchor: 'defis-specifiques' },
      { heading: 'Questions fréquentes', anchor: 'faq' },
      { heading: 'Conclusion', anchor: 'conclusion' },
    ]),
    faq: withKeys([
      {
        question: "Quelle est la différence entre SMR et ASMR dans le processus d'évaluation HAS ?",
        answer:
          "Le Service Médical Rendu (SMR) évalue le bénéfice absolu d'un médicament pour la santé publique — il peut être important, modéré, faible ou insuffisant, et détermine l'éligibilité au remboursement ainsi que le taux applicable (65 % pour un SMR important, 30 % pour modéré ou faible). L'Amélioration du Service Médical Rendu (ASMR) évalue le progrès thérapeutique incrémental par rapport aux alternatives disponibles, sur une échelle de I (amélioration majeure) à V (absence d'amélioration démontrée). L'ASMR détermine la latitude tarifaire lors des négociations avec le CEPS.",
      },
      {
        question: "Qu'est-ce que l'Accès Précoce (ancien ATU) et comment les études de marché s'y intègrent-elles ?",
        answer:
          "Le dispositif d'Accès Précoce, qui a remplacé l'ATU depuis la réforme de 2021, permet à des médicaments présumés innovants d'être utilisés avant leur AMM dans des indications graves. Les laboratoires doivent collecter des données de vie réelle sur tous les patients traités, conformément à un protocole validé par la HAS. La conception du registre ou de l'étude observationnelle doit précéder le démarrage de l'accès précoce.",
      },
      {
        question: 'Comment accéder au SNDS pour une étude pharmaco-épidémiologique en France ?',
        answer:
          "L'accès au Système National des Données de Santé (SNDS) est soumis à une autorisation délivrée par la CNIL après avis du Health Data Hub. La procédure standard nécessite un dossier incluant la description de l'étude, les finalités du traitement des données et les mesures de sécurité. Les délais d'instruction sont typiquement de 9 à 18 mois. Des voies simplifiées existent via les méthodologies de référence MR-001 à MR-004 de la CNIL.",
      },
      {
        question: 'Quelle est la taille d'échantillon recommandée pour une étude de pratiques de prescription auprès de spécialistes français ?',
        answer:
          "Pour une étude descriptive dans une spécialité de taille moyenne (oncologie, rhumatologie, neurologie), un échantillon de 100 à 150 spécialistes permet d'estimer les paramètres principaux avec une précision de ±8 à 10 % à un niveau de confiance de 95 %. Pour les maladies rares où le nombre total de prescripteurs nationaux peut ne pas dépasser 200 à 300 spécialistes, une approche de type recensement exhaustif est préférable.",
      },
      {
        question: 'Comment fonctionne le système des prix de référence génériques en France et quel impact a-t-il sur les études de marché ?',
        answer:
          "Le système du tarif forfaitaire de responsabilité (TFR) et des groupes génériques crée une dynamique de substitution à l'officine que les études de marché doivent intégrer. Les études de pratiques en médecine générale doivent distinguer les comportements de prescription en DCI versus en marque, et documenter les pathologies pour lesquelles les médecins refusent la substitution.",
      },
      {
        question: 'Quels sont les enjeux spécifiques des études de marché en maladies rares en France ?',
        answer:
          "La France a structuré le paysage des maladies rares avec des Centres de Référence Maladies Rares (CRMR) organisés en filières thématiques. Ce maillage institutionnel concentre l'expertise et les patients dans quelques établissements de référence. Les petits effectifs nécessitent des approches qualitatives approfondies et des techniques statistiques adaptées aux échantillons réduits.",
      },
      {
        question: "Comment évaluer la fiabilité d'un panel médecins utilisé pour une étude pharmaceutique en France ?",
        answer:
          "Plusieurs critères permettent d'évaluer la fiabilité d'un panel : la méthode de recrutement, la vérification des profils (numéro RPPS), la fréquence de participation à des études (les hyper-répondants participant à plus de 8-10 études par an sont à écarter), la représentativité géographique, et la proportion de médecins hospitaliers vs libéraux. BioNixus effectue systématiquement une vérification RPPS dans chaque étude quantitative.",
      },
      {
        question: 'Quel est le calendrier typique d'un programme d'étude complet pour un lancement en France ?',
        answer:
          "Un programme d'étude complet pour un lancement pharmaceutique en France s'étale typiquement sur 18 à 36 mois. La phase pré-dossier HAS comprend des études qualitatives de positionnement et des analyses de charge de la maladie. La phase de préparation du dossier inclut des enquêtes quantitatives d'intention de prescription. La phase post-inscription couvre les études de suivi d'adoption et les études de vie réelle.",
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
  const bodyHtmlPath = path.join(root, 'scripts/data/fr-blog-etudes-marche-pharmaceutique-france-2026.html')
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
    console.log('URL:', `https://www.bionixus.com/fr/blog/${SLUG}`)
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
    "Couverture éditoriale pour les études de marché pharmaceutiques en France : analyse HAS, CEPS et accès marché",
    `fr-etudes-${COVER_FILENAME}`,
  )
  const ogImage = await uploadImage(
    client,
    coverPath,
    "Image de partage social : Études de marché pharmaceutiques France 2026",
    `og-fr-etudes-${COVER_FILENAME}`,
  )

  const publishedAt = new Date().toISOString()
  const canonicalUrl = `https://www.bionixus.com/fr/blog/${SLUG}`

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: SEO_META_TITLE,
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'études de marché pharmaceutiques France',
      keywords: [
        'France',
        'études de marché pharmaceutiques',
        'HAS',
        'ASMR',
        'SMR',
        'CEPS',
        'accès précoce',
        'BioNixus',
        'SNDS',
        'panels médecins',
      ],
      canonicalUrl,
      noIndex: false,
    },
    openGraph: {
      ogTitle: 'Études de marché pharmaceutiques France 2026 | BioNixus',
      ogDescription: OG_DESCRIPTION,
      ogImage,
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-fr-etudes' }] : [],
    category: 'Healthcare Market Research',
    country: 'France',
    language: 'fr',
    readingTime: 18,
    tags: ['Français', 'France', 'HAS', 'CEPS', 'études de marché', 'BioNixus', 'marché pharmaceutique'],
    ctaSection: {
      title: 'Planifiez votre étude de marché pharmaceutique en France',
      description:
        "BioNixus accompagne les équipes market access et affaires médicales en France avec des études quantitatives et qualitatives rigoureuses, des panels médecins vérifiés RPPS et une expertise HAS/CEPS.",
      buttonText: 'Demander un devis',
      buttonUrl: 'https://www.bionixus.com/fr/contact',
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
