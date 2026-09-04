import type { CountryConfig } from '@/lib/constants/countries';
import type { SiteVideo } from '@/data/videos';
import { ORG_AREA_SERVED, buildCanonicalOrganization } from '@/lib/seo/organization';

const BASE_URL = 'https://www.bionixus.com';

export function buildBreadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

export function buildFAQSchema(
  items: readonly { question: string; answer: string }[],
  options?: { pageUrl?: string; sectionId?: string },
) {
  const sectionId = options?.sectionId ?? 'faq';
  const pageUrl = options?.pageUrl?.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(pageUrl
      ? {
          '@id': `${pageUrl}#${sectionId}`,
          url: `${pageUrl}#${sectionId}`,
        }
      : {}),
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildItemListSchema(items: { name: string; description?: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      ...(item.url ? { url: item.url } : {}),
    })),
  };
}

/**
 * Typed as Service, not ProfessionalService: the node describes an offering with a
 * `provider`, not a physical premises. ProfessionalService is a LocalBusiness, so
 * `serviceType` and `provider` are invalid on it. `priceRange` and `knowsAbout` are
 * the mirror case — LocalBusiness/Organization only — so they live on the
 * Organization node instead.
 */
export function buildProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/#professionalService`,
    name: 'BioNixus Healthcare Market Research',
    serviceType: 'Healthcare Market Research',
    provider: { '@id': `${BASE_URL}/#organization` },
    areaServed: ORG_AREA_SERVED,
    description:
      'Comprehensive pharmaceutical and healthcare market research — physician insights, KOL mapping, market access research, and quantitative and qualitative studies — with deep regional expertise across MENA, Latin America, Eastern Europe, the UK, and the wider EMEA region.',
    url: BASE_URL,
  };
}

/** @deprecated Use buildProfessionalServiceSchema instead */
export const buildServiceSchema = buildProfessionalServiceSchema;

export function buildOrganizationSchema() {
  return {
    ...buildCanonicalOrganization(),
    email: 'admin@bionixus.com',
  };
}

export function buildHubPageSchemas(faqItems: { question: string; answer: string }[]) {
  return [
    buildServiceSchema(),
    buildFAQSchema(faqItems, {
      pageUrl: `${BASE_URL}/healthcare-market-research`,
      sectionId: 'faq',
    }),
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
    ]),
  ];
}

export function buildCountryPageSchemas(config: CountryConfig) {
  const pageUrl = `${BASE_URL}/healthcare-market-research/${config.slug}`;
  const serviceSchema =
    config.slug === 'saudi-arabia'
      ? {
          ...buildProfessionalServiceSchema(),
          '@id': `${pageUrl}#service`,
          name: 'Healthcare Market Research Saudi Arabia',
          serviceType: 'Healthcare Market Research',
          description:
            'Primary healthcare and pharmaceutical market research in Saudi Arabia — SFDA-aware HCP surveys, NUPCO tender context, Arabic fieldwork across Riyadh, Jeddah, and Eastern Province.',
          url: pageUrl,
          areaServed: [
            {
              '@type': 'City',
              name: 'Riyadh',
              containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' },
            },
            {
              '@type': 'City',
              name: 'Jeddah',
              containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' },
            },
            {
              '@type': 'City',
              name: 'Al Khobar',
              containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' },
            },
          ],
        }
      : buildServiceSchema();

  return [
    serviceSchema,
    buildFAQSchema(config.faqQuestions, { pageUrl, sectionId: `healthcare-mr-country-${config.slug}-faq` }),
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
      { name: config.name, href: `/healthcare-market-research/${config.slug}` },
    ]),
  ];
}

export function buildTherapyPageSchemas(area: string, description: string) {
  const label = area.replace(/-/g, ' ');
  return [
    {
      ...buildProfessionalServiceSchema(),
      name: `${label} market research`,
      serviceType: `${label} healthcare market research`,
      description,
      url: `${BASE_URL}/healthcare-market-research/therapy/${area}`,
    },
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
      { name: `${label} therapy`, href: `/healthcare-market-research/therapy/${area}` },
    ]),
  ];
}

export function buildServicePageSchemas(service: string, description: string) {
  const label = service.replace(/-/g, ' ');
  return [
    {
      ...buildProfessionalServiceSchema(),
      name: `${label} service`,
      serviceType: `${label} healthcare market research service`,
      description,
      url: `${BASE_URL}/healthcare-market-research/services/${service}`,
    },
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
      { name: `${label} service`, href: `/healthcare-market-research/services/${service}` },
    ]),
  ];
}

/**
 * VideoObject for dedicated watch pages only.
 * Required for Google video eligibility: name, thumbnailUrl, uploadDate.
 * Prefer embedUrl and/or contentUrl so Google can resolve the media.
 */
export function buildVideoObjectSchema(video: SiteVideo) {
  const watchUrl = `${BASE_URL}/videos/${video.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${watchUrl}#video`,
    name: video.name,
    description: video.description,
    thumbnailUrl: [video.thumbnailUrl],
    uploadDate: video.uploadDate,
    duration: video.durationIso,
    ...(video.embedUrl ? { embedUrl: video.embedUrl } : {}),
    ...(video.contentUrl ? { contentUrl: video.contentUrl } : {}),
    url: watchUrl,
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/bionixus-logo.webp`,
      },
    },
  };
}

export function buildVideoWatchPageSchemas(video: SiteVideo) {
  return [
    buildVideoObjectSchema(video),
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Videos', href: '/videos' },
      { name: video.name, href: `/videos/${video.slug}` },
    ]),
  ];
}

export function buildVideosIndexSchemas(videos: SiteVideo[]) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'BioNixus market research videos',
      itemListElement: videos.map((video, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: video.name,
        url: `${BASE_URL}/videos/${video.slug}`,
      })),
    },
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Videos', href: '/videos' },
    ]),
  ];
}

