import { Helmet } from 'react-helmet-async'
import type { BlogPost } from '@/types/blog'
import { HOME_FAQ_SECTION_ID } from '@/lib/homePageFaq'
import { buildHomeArticleJsonLdNodes, buildHomeServiceJsonLdNodes } from '@/lib/homePageJsonLd'
import { buildUkGoogleReviewsLocalBusiness } from '@/lib/seo/googleReviewsSchema'
import { buildCanonicalOrganization } from '@/lib/seo/organization'

type LanguageCode = 'en' | 'ar' | 'de' | 'fr' | 'es' | 'zh'

type BreadcrumbItem = {
  name: string
  item: string
}

type FaqItem = {
  question: string
  answer: string
}

type HomeSchemaProps = {
  pageType: 'home'
  pageUrl: string
  language: LanguageCode
  faqItems?: FaqItem[]
  /** Latest insight posts shown on the home page (for Article JSON-LD). */
  articlePosts?: BlogPost[]
}

type ItemListEntry = {
  name: string
  description: string
}

type BlogSchemaProps = {
  pageType: 'blog' | 'case-study'
  pageUrl: string
  language: LanguageCode
  headline: string
  description: string
  imageUrl?: string
  /** Primary OG / hero dimensions for structured `image` ImageObject */
  ogImageWidth?: number
  ogImageHeight?: number
  authorName: string
  authorUrl?: string
  authorJobTitle?: string
  publishedAt?: string
  modifiedAt?: string
  /** Category / pillar name for Article `articleSection` */
  articleSection?: string
  /** Comma-joined keywords in JSON-LD (from blog tags etc.) */
  keywords?: string[]
  /** Entities linked to this article (therapy area, branded drug facts, etc.). */
  schemaMentions?: ReadonlyArray<Record<string, unknown>>
  /** Schema.org `about` — primary topic(s) of the article (e.g. therapy area, disease). */
  about?: ReadonlyArray<Record<string, unknown>>
  breadcrumb: BreadcrumbItem[]
  faqItems?: FaqItem[]
  itemList?: { name: string; items: ItemListEntry[] }
}

type ServiceSchemaProps = {
  pageType: 'service'
  pageUrl: string
  language: LanguageCode
  serviceName: string
  serviceDescription: string
  providerAreaServed?: string
  breadcrumb: BreadcrumbItem[]
  faqItems?: FaqItem[]
}

type AboutSchemaProps = {
  pageType: 'about'
  pageUrl: string
  language: LanguageCode
  people?: Array<{
    name: string
    jobTitle?: string
    sameAs?: string
  }>
}

type PressReleaseSchemaProps = {
  pageType: 'press-release'
  pageUrl: string
  language: LanguageCode
  headline: string
  description: string
  imageUrl?: string
  publishedAt?: string
  modifiedAt?: string
  dateline?: string
  relatedReportUrl?: string
  breadcrumb: BreadcrumbItem[]
}

type SchemaMarkupProps =
  | HomeSchemaProps
  | BlogSchemaProps
  | PressReleaseSchemaProps
  | ServiceSchemaProps
  | AboutSchemaProps

const BASE_URL = 'https://www.bionixus.com'
const ORG_ID = `${BASE_URL}/#organization`
const WEBSITE_ID = `${BASE_URL}/#website`
const ORG_IMAGE = `${BASE_URL}/og-image.png`
const PUBLISHER_LOGO_IMAGE = `${BASE_URL}/bionixus-logo.webp`

function toHttpsUrl(url: string): string {
  if (!url) return BASE_URL
  try {
    const parsed = new URL(url, BASE_URL)
    parsed.protocol = 'https:'
    return parsed.toString()
  } catch {
    return BASE_URL
  }
}

function toIsoDate(value?: string): string | undefined {
  if (!value) return undefined
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return undefined
  return d.toISOString()
}

function buildOrganization(inLanguage: string) {
  return buildCanonicalOrganization(inLanguage);
}

function buildWebsite(inLanguage: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: BASE_URL,
    name: 'BioNixus',
    publisher: { '@id': ORG_ID },
    inLanguage,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/blog?search={search_term_string}`,
      },
      'query-input': {
        '@type': 'PropertyValueSpecification',
        valueRequired: true,
        valueName: 'search_term_string',
      },
    },
  }
}

function buildBreadcrumb(
  breadcrumb: BreadcrumbItem[],
  inLanguage: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumb.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: toHttpsUrl(entry.item),
    })),
    inLanguage,
  }
}

function buildFaq(faqItems: FaqItem[], inLanguage: string, faqPageUrl?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(faqPageUrl ? { url: faqPageUrl } : {}),
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
    inLanguage,
  }
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function isValidSchemaNode(node: Record<string, unknown>): boolean {
  if (!isNonEmptyString(node['@context'])) return false
  if (!isNonEmptyString(node['@type'])) return false

  const type = node['@type']
  if (type === 'Article' || type === 'BlogPosting') {
    const img = node.image
    let imageOk = false
    if (
      img !== null &&
      typeof img === 'object' &&
      !Array.isArray(img) &&
      (img as Record<string, unknown>)['@type'] === 'ImageObject' &&
      isNonEmptyString(String((img as Record<string, unknown>).url))
    ) {
      imageOk = true
    }
    if (!imageOk && Array.isArray(img) && img.length > 0) {
      imageOk = img.every((e) => isNonEmptyString(String(e)))
    }
    const mainEntityOk =
      node.mainEntityOfPage === undefined ||
      (typeof node.mainEntityOfPage === 'object' &&
        node.mainEntityOfPage !== null &&
        (node.mainEntityOfPage as Record<string, unknown>)['@type'] === 'WebPage')
    const urlOk = typeof node.url === 'string' ? node.url.trim().startsWith('http') : Boolean(node.url)
    return (
      isNonEmptyString(node.headline) &&
      isNonEmptyString(node.description) &&
      isNonEmptyString(node.datePublished) &&
      isNonEmptyString(node.dateModified) &&
      urlOk &&
      imageOk &&
      mainEntityOk &&
      typeof node.author === 'object' &&
      node.author !== null &&
      typeof node.publisher === 'object' &&
      node.publisher !== null
    )
  }

  if (type === 'Organization') {
    return isNonEmptyString(node.name) && isNonEmptyString(node.url)
  }

  if (type === 'WebSite') {
    return isNonEmptyString(node.url) && isNonEmptyString(node.name)
  }

  if (type === 'Service' || type === 'ProfessionalService') {
    return isNonEmptyString(node.name) && isNonEmptyString(node.description)
  }

  if (type === 'LocalBusiness') {
    return (
      isNonEmptyString(node.name) &&
      typeof node.address === 'object' &&
      node.address !== null &&
      typeof node.aggregateRating === 'object' &&
      node.aggregateRating !== null
    )
  }

  if (type === 'Person') {
    return isNonEmptyString(node.name)
  }

  if (type === 'FAQPage') {
    if (!Array.isArray(node.mainEntity) || node.mainEntity.length === 0) return false
    return node.mainEntity.every((entry) => {
      if (typeof entry !== 'object' || entry === null) return false
      const q = entry as Record<string, unknown>
      const accepted = q.acceptedAnswer
      if (typeof accepted !== 'object' || accepted === null) return false
      const ans = accepted as Record<string, unknown>
      return (
        q['@type'] === 'Question' &&
        isNonEmptyString(q.name) &&
        ans['@type'] === 'Answer' &&
        isNonEmptyString(ans.text)
      )
    })
  }

  if (type === 'ItemList') {
    return isNonEmptyString(node.name) && Array.isArray(node.itemListElement) && node.itemListElement.length > 0
  }

  return true
}

function buildSchemas(props: SchemaMarkupProps): Record<string, unknown>[] {
  const inLanguage = props.language

  if (props.pageType === 'home') {
    const nodes: Record<string, unknown>[] = [
      buildOrganization(inLanguage),
      buildWebsite(inLanguage),
      buildUkGoogleReviewsLocalBusiness(inLanguage),
    ]
    if (props.faqItems && props.faqItems.length > 0) {
      const faqPage = new URL(toHttpsUrl(props.pageUrl))
      faqPage.hash = HOME_FAQ_SECTION_ID
      nodes.push(buildFaq(props.faqItems, inLanguage, faqPage.toString()))
    }
    nodes.push(...buildHomeServiceJsonLdNodes(props.language))
    if (props.articlePosts && props.articlePosts.length > 0) {
      nodes.push(...buildHomeArticleJsonLdNodes(props.articlePosts, props.language))
    }
    return nodes
  }

  if (props.pageType === 'blog' || props.pageType === 'case-study') {
    const published = toIsoDate(props.publishedAt) || new Date().toISOString()
    const modified = toIsoDate(props.modifiedAt) || published
    const pageUrlHttps = toHttpsUrl(props.pageUrl)
    const imageUrlHttps = toHttpsUrl(props.imageUrl || ORG_IMAGE)
    const imgWidth = props.ogImageWidth ?? 1200
    const imgHeight = props.ogImageHeight ?? 630
    const schemaType = props.pageType === 'blog' ? 'BlogPosting' : 'Article'

    const primaryImageObject = {
      '@type': 'ImageObject',
      url: imageUrlHttps,
      width: imgWidth,
      height: imgHeight,
      caption: props.headline,
    }

    const articleNode: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      '@id': `${pageUrlHttps}#${props.pageType === 'blog' ? 'blogPosting' : 'article'}`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${pageUrlHttps}#webpage`,
        url: pageUrlHttps,
      },
      url: pageUrlHttps,
      headline: props.headline,
      description: props.description,
      image: primaryImageObject,
      ...(props.articleSection?.trim()
        ? { articleSection: props.articleSection.trim() }
        : {}),
      ...(props.keywords && props.keywords.length > 0
        ? { keywords: props.keywords.join(', ') }
        : {}),
      ...(props.schemaMentions && props.schemaMentions.length > 0
        ? { mentions: props.schemaMentions.map((m) => ({ ...m })) }
        : {}),
      ...(props.about && props.about.length > 0
        ? { about: props.about.length === 1 ? { ...props.about[0] } : props.about.map((a) => ({ ...a })) }
        : {}),
      author: {
        '@type': 'Person',
        name: props.authorName,
        ...(props.authorUrl ? { url: props.authorUrl, sameAs: [props.authorUrl] } : {}),
        ...(props.authorJobTitle ? { jobTitle: props.authorJobTitle } : {}),
      },
      datePublished: published,
      dateModified: modified,
      publisher: {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'BioNixus',
        logo: {
          '@type': 'ImageObject',
          url: PUBLISHER_LOGO_IMAGE,
          width: 512,
          height: 512,
        },
      },
      inLanguage,
      isAccessibleForFree: true,
    }

    const nodes: Record<string, unknown>[] = [articleNode, buildBreadcrumb(props.breadcrumb, inLanguage)]

    if (props.faqItems && props.faqItems.length > 0) {
      nodes.push(buildFaq(props.faqItems, inLanguage, pageUrlHttps))
    }

    if (props.pageType === 'blog' && props.itemList && props.itemList.items.length > 0) {
      nodes.push({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: props.itemList.name,
        itemListOrder: 'https://schema.org/ItemListUnordered',
        itemListElement: props.itemList.items.map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.name,
          description: item.description,
        })),
      })
    }

    return nodes
  }

  if (props.pageType === 'press-release') {
    const published = toIsoDate(props.publishedAt) || new Date().toISOString()
    const modified = toIsoDate(props.modifiedAt) || published
    const pageUrlHttps = toHttpsUrl(props.pageUrl)
    const imageUrlHttps = toHttpsUrl(props.imageUrl || ORG_IMAGE)

    const newsArticle: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      '@id': `${pageUrlHttps}#newsarticle`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${pageUrlHttps}#webpage`,
        url: pageUrlHttps,
      },
      url: pageUrlHttps,
      headline: props.headline,
      description: props.description,
      image: {
        '@type': 'ImageObject',
        url: imageUrlHttps,
        width: 1200,
        height: 630,
        caption: props.headline,
      },
      datePublished: published,
      dateModified: modified,
      author: {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'BioNixus',
      },
      publisher: {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'BioNixus',
        logo: {
          '@type': 'ImageObject',
          url: PUBLISHER_LOGO_IMAGE,
          width: 512,
          height: 512,
        },
      },
      inLanguage,
      isAccessibleForFree: true,
      ...(props.dateline?.trim() ? { articleSection: 'Press release' } : {}),
      ...(props.relatedReportUrl
        ? {
            about: {
              '@type': 'Report',
              url: toHttpsUrl(props.relatedReportUrl),
            },
          }
        : {}),
    }

    return [newsArticle, buildBreadcrumb(props.breadcrumb, inLanguage)]
  }

  if (props.pageType === 'service') {
    const nodes: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: props.serviceName,
        description: props.serviceDescription,
        url: toHttpsUrl(props.pageUrl),
        provider: { '@id': ORG_ID },
        areaServed: props.providerAreaServed || 'EMEA',
        serviceType: props.serviceName,
        inLanguage,
      },
      buildBreadcrumb(props.breadcrumb, inLanguage),
    ]

    if (props.faqItems && props.faqItems.length > 0) {
      nodes.push(buildFaq(props.faqItems, inLanguage, toHttpsUrl(props.pageUrl)))
    }

    return nodes
  }

  const people = props.people || []
  const personNodes = people
    .filter((p) => isNonEmptyString(p.name))
    .map((person) => ({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: person.name,
      ...(isNonEmptyString(person.jobTitle) ? { jobTitle: person.jobTitle } : {}),
      ...(isNonEmptyString(person.sameAs) ? { sameAs: [toHttpsUrl(person.sameAs)] } : {}),
      worksFor: { '@id': ORG_ID },
      inLanguage,
    }))

  return [buildOrganization(inLanguage), ...personNodes]
}

export default function SchemaMarkup(props: SchemaMarkupProps) {
  const schemaNodes = buildSchemas(props).filter(isValidSchemaNode)

  if (schemaNodes.length === 0) return null

  return (
    <Helmet>
      {schemaNodes.map((node, index) => (
        <script key={`${props.pageType}-schema-${index}`} type="application/ld+json">
          {JSON.stringify(node)}
        </script>
      ))}
    </Helmet>
  )
}

