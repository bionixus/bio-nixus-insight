/**
 * Creates or syncs French Sanity blogPost for HAS economic evaluation guide France 2026.
 * Public URL: https://www.bionixus.com/fr/blog/evaluation-economique-has-france-2026
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-fr-blog-evaluation-economique-has-france-2026.mjs
 * Sync: node scripts/publish-fr-blog-evaluation-economique-has-france-2026.mjs --sync-existing
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'
import sharp from 'sharp'
import { normalizeInternalLinks } from './lib/blog-html-utils.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SLUG = 'evaluation-economique-has-france-2026'
const COVER_FILENAME = 'top-healthcare-market-research-companies-uae-cover.jpg'
const ARTICLE_H1 =
  "Évaluation économique HAS en France 2026 : guide pour les équipes market access"
const ARTICLE_EXCERPT =
  "Guide pratique sur l'évaluation économique HAS en France : rôle du CEPS, critères ASMR et SMR, dossier médico-économique, données SNDS pour les dossiers HAS, règlement européen HTA et accompagnement BioNixus."
const SEO_META_TITLE = "Évaluation économique HAS France 2026 | BioNixus"
const SEO_META_DESCRIPTION =
  "Guide complet sur l'évaluation économique HAS en France : SMR, ASMR, dossier médico-économique, accès précoce, SNDS et règlement HTA européen. Stratégie market access avec BioNixus."
const OG_DESCRIPTION =
  "Comment naviguer l'évaluation économique HAS en France : critères SMR/ASMR, dossier médico-économique obligatoire, utilisation des données SNDS, accès précoce (AAP) et impact du règlement HTA européen."

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
            text: "L'évaluation économique par la HAS détermine directement le prix que le CEPS acceptera de négocier. Comprendre les critères SMR et ASMR, savoir quand un dossier médico-économique est obligatoire, et anticiper l'impact du règlement HTA européen sont des prérequis pour toute stratégie d'accès au marché en France. Ce guide décrypte chaque étape du processus.",
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: "Introduction : L'importance croissante de l'évaluation économique en France", anchor: 'introduction' },
      { heading: 'La HAS et le Comité Économique des Produits de Santé (CEPS)', anchor: 'has-ceps' },
      { heading: 'ASMR et SMR : comprendre les critères d'évaluation', anchor: 'asmr-smr' },
      { heading: 'Dossier médico-économique : quand et comment ?', anchor: 'dossier-medico-economique' },
      { heading: 'La Commission de la Transparence et le dépôt de dossier', anchor: 'commission-transparence' },
      { heading: 'Études de vie réelle (RWE) pour soutenir les dossiers HAS', anchor: 'rwe-dossiers-has' },
      { heading: "BioNixus et l'accompagnement des équipes accès marché en France", anchor: 'bionixus-accompagnement' },
      { heading: 'Questions fréquentes', anchor: 'faq' },
      { heading: 'Conclusion', anchor: 'conclusion' },
    ]),
    faq: withKeys([
      {
        question: "Quelle est la différence entre l'ASMR et le SMR dans l'évaluation HAS ?",
        answer:
          "Le SMR (Service Médical Rendu) évalue l'intérêt intrinsèque du médicament pour la santé publique, en tenant compte de son efficacité, de sa tolérance, et de la gravité de la pathologie traitée. Il conditionne l'inscription au remboursement et le taux de prise en charge (65% pour un SMR important, 35% pour modéré, 15% pour faible). L'ASMR (Amélioration du Service Médical Rendu) mesure la valeur ajoutée du médicament par rapport aux traitements existants, cotée de I (amélioration majeure) à V (pas d'amélioration). L'ASMR influence directement le prix négocié avec le CEPS.",
      },
      {
        question: 'Dans quels cas un dossier médico-économique est-il obligatoire auprès de la HAS ?',
        answer:
          "Un dossier médico-économique est requis lorsque le médicament sollicite une ASMR présumée importante (I, II ou III) et que son impact financier prévisionnel sur l'Assurance Maladie dépasse un seuil significatif, généralement estimé à 20 millions d'euros de chiffre d'affaires annuel. La HAS peut également l'exiger pour des médicaments dans des pathologies à forte prévalence. Le dossier est évalué par la CEESP.",
      },
      {
        question: 'Comment les données SNDS peuvent-elles être utilisées dans les dossiers HAS ?',
        answer:
          "Le SNDS est une ressource de référence pour les études pharmaco-épidémiologiques et médico-économiques soumises à la HAS. Il permet d'analyser les pratiques de prescription réelles, les patterns de traitement, et les coûts médicaux directs. Pour accéder aux données SNDS, les laboratoires doivent obtenir une autorisation auprès de la CNIL et du Health Data Hub, ce qui peut prendre plusieurs mois.",
      },
      {
        question: "Qu'est-ce que le dispositif d'accès précoce (AAP) et comment remplace-t-il les ATU ?",
        answer:
          "Depuis la LFSS 2021 (article 78), les ATU ont été remplacées par l'Accès Précoce (AP) et l'Accès Compassionnel (AC). L'accès précoce est accordé pour des médicaments présumant d'une efficacité et d'une sécurité suffisantes dans des maladies graves sans traitement approprié. Les laboratoires sont tenus de mettre en place un protocole de suivi des patients (PPRD) et de déposer un dossier complet de remboursement dans des délais définis.",
      },
      {
        question: 'Comment les associations de patients interviennent-elles dans le processus d'évaluation HAS ?',
        answer:
          "Les associations de patients agréées peuvent participer aux travaux de la Commission de la Transparence en qualité de représentants des usagers. Elles peuvent déposer des contributions écrites sur le projet d'avis de la HAS concernant le médicament évalué. Il est donc stratégiquement important pour les laboratoires de maintenir des relations constructives avec les associations représentatives des indications visées.",
      },
      {
        question: 'Quel est le rôle des études de burden of disease dans les dossiers HAS ?',
        answer:
          "Les études de burden of disease visent à quantifier l'impact épidémiologique, clinique et économique d'une pathologie sur la société et le système de santé. Elles permettent d'établir le contexte dans lequel s'inscrit le médicament évalué. Bien que non obligatoires, ces analyses renforcent considérablement la crédibilité du dossier médico-économique et constituent un argument puissant dans le dialogue avec le CEPS.",
      },
      {
        question: 'Comment le règlement européen HTA (HTA Regulation) impacte-t-il les dossiers soumis à la HAS en France ?',
        answer:
          "Le règlement européen HTA (EU HTA Regulation 2021/2282), entré en application progressive depuis janvier 2025, introduit une évaluation clinique conjointe (JCA) pour les médicaments oncologiques et les thérapies de pointe. Les résultats sont contraignants pour la HAS en ce qui concerne l'évaluation clinique comparative. Cependant, les évaluations économiques et les décisions de remboursement restent de compétence nationale.",
      },
      {
        question: "Quelle est la stratégie recommandée pour un médicament obtenant un ASMR IV ?",
        answer:
          "Un ASMR IV place le laboratoire en position délicate lors des négociations de prix. La stratégie recommandée est de préparer une analyse médico-économique complète démontrant l'efficience du produit et de mettre en avant des avantages différenciants non capturés par l'ASMR : facilité d'administration, réduction des contraintes pour le patient, bénéfices organisationnels pour les établissements de soins.",
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
  const bodyHtmlPath = path.join(root, 'scripts/data/fr-blog-evaluation-economique-has-france-2026.html')
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
    "Couverture éditoriale évaluation économique HAS France : analyse SMR ASMR CEPS accès marché",
    `fr-has-${COVER_FILENAME}`,
  )
  const ogImage = await uploadImage(
    client,
    coverPath,
    "Image partage social : Évaluation économique HAS France 2026",
    `og-fr-has-${COVER_FILENAME}`,
  )

  const publishedAt = new Date().toISOString()
  const canonicalUrl = `https://www.bionixus.com/fr/blog/${SLUG}`

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: SEO_META_TITLE,
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'évaluation économique HAS France',
      keywords: [
        'France',
        'HAS',
        'évaluation économique',
        'SMR',
        'ASMR',
        'CEPS',
        'dossier médico-économique',
        'BioNixus',
        'accès précoce',
        'SNDS',
      ],
      canonicalUrl,
      noIndex: false,
    },
    openGraph: {
      ogTitle: "Évaluation économique HAS France 2026 | BioNixus",
      ogDescription: OG_DESCRIPTION,
      ogImage,
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-fr-has' }] : [],
    category: 'Healthcare Market Research',
    country: 'France',
    language: 'fr',
    readingTime: 16,
    tags: ['Français', 'France', 'HAS', 'ASMR', 'SMR', 'CEPS', 'market access', 'BioNixus'],
    ctaSection: {
      title: "Préparez votre dossier HAS avec BioNixus",
      description:
        "BioNixus accompagne les équipes market access françaises dans la préparation des dossiers HAS, des études de burden of disease aux modèles médico-économiques et aux études de vie réelle.",
      buttonText: 'Contactez-nous',
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
