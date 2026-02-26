import { Helmet } from 'react-helmet-async'

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
}

type BlogSchemaProps = {
  pageType: 'blog'
  pageUrl: string
  language: LanguageCode
  headline: string
  description: string
  imageUrl?: string
  authorName: string
  publishedAt?: string
  modifiedAt?: string
  breadcrumb: BreadcrumbItem[]
  faqItems?: FaqItem[]
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

type SchemaMarkupProps =
  | HomeSchemaProps
  | BlogSchemaProps
  | ServiceSchemaProps
  | AboutSchemaProps

const BASE_URL = 'https://www.bionixus.com'
const ORG_ID = `${BASE_URL}/#organization`
const WEBSITE_ID = `${BASE_URL}/#website`
const ORG_IMAGE = `${BASE_URL}/og-image.png`

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
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'BioNixus',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: ORG_IMAGE,
    },
    image: [ORG_IMAGE],
    sameAs: [
      'https://www.linkedin.com/company/bionixus',
      'https://www.bionixus.com',
    ],
    inLanguage,
  }
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
      target: `${BASE_URL}/blog?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
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

function buildFaq(faqItems: FaqItem[], inLanguage: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
  if (type === 'Article') {
    return (
      isNonEmptyString(node.headline) &&
      isNonEmptyString(node.description) &&
      isNonEmptyString(node.datePublished) &&
      isNonEmptyString(node.dateModified) &&
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

  if (type === 'Service') {
    return isNonEmptyString(node.name) && isNonEmptyString(node.description)
  }

  if (type === 'Person') {
    return isNonEmptyString(node.name)
  }

  return true
}

function buildSchemas(props: SchemaMarkupProps): Record<string, unknown>[] {
  const inLanguage = props.language

  if (props.pageType === 'home') {
    return [buildOrganization(inLanguage), buildWebsite(inLanguage)]
  }

  if (props.pageType === 'blog') {
    const published = toIsoDate(props.publishedAt) || new Date().toISOString()
    const modified = toIsoDate(props.modifiedAt) || published
    const image = toHttpsUrl(props.imageUrl || ORG_IMAGE)

    const nodes: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        mainEntityOfPage: toHttpsUrl(props.pageUrl),
        headline: props.headline,
        description: props.description,
        image: [image],
        author: {
          '@type': 'Person',
          name: props.authorName,
        },
        datePublished: published,
        dateModified: modified,
        publisher: {
          '@type': 'Organization',
          '@id': ORG_ID,
          name: 'BioNixus',
          logo: {
            '@type': 'ImageObject',
            url: ORG_IMAGE,
          },
        },
        inLanguage,
      },
      buildBreadcrumb(props.breadcrumb, inLanguage),
    ]

    if (props.faqItems && props.faqItems.length > 0) {
      nodes.push(buildFaq(props.faqItems, inLanguage))
    }

    return nodes
  }

  if (props.pageType === 'service') {
    const nodes: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: props.serviceName,
        description: props.serviceDescription,
        url: toHttpsUrl(props.pageUrl),
        provider: { '@id': ORG_ID },
        areaServed: props.providerAreaServed || 'EMEA',
        inLanguage,
      },
      buildBreadcrumb(props.breadcrumb, inLanguage),
    ]

    if (props.faqItems && props.faqItems.length > 0) {
      nodes.push(buildFaq(props.faqItems, inLanguage))
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

