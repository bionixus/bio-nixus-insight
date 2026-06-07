import type { CountryConfig } from '@/lib/constants/countries';
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
  items: { question: string; answer: string }[],
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

export function buildServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Healthcare Market Research',
    provider: { '@type': 'Organization', name: 'BioNixus' },
    areaServed: ORG_AREA_SERVED,
    description:
      'Comprehensive pharmaceutical and healthcare market research — physician insights, KOL mapping, market access research, and quantitative and qualitative studies — with deep regional expertise across MENA, Latin America, Eastern Europe, the UK, and the wider EMEA region.',
  };
}

export function buildOrganizationSchema() {
  return {
    ...buildCanonicalOrganization(),
    email: 'mosama@bionixus.com',
  };
}

export function buildHubPageSchemas(faqItems: { question: string; answer: string }[]) {
  return [
    buildOrganizationSchema(),
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
  return [
    buildOrganizationSchema(),
    buildServiceSchema(),
    buildFAQSchema(config.faqQuestions),
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
    buildOrganizationSchema(),
    {
      ...buildServiceSchema(),
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
    buildOrganizationSchema(),
    {
      ...buildServiceSchema(),
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

