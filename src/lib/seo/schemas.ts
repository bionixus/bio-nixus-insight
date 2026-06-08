import type { CountryConfig } from '@/lib/constants/countries';

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

export function buildFAQSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
    provider: { '@type': 'Organization', name: 'BioNixus Market Research' },
    areaServed: ['Egypt', 'Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'United Kingdom', 'Europe'],
    description:
      'Comprehensive pharmaceutical market research services including physician insights, KOL mapping, market access research, quantitative studies, and qualitative studies across MENA, UK, and Europe.',
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'BioNixus',
    url: BASE_URL,
    logo: `${BASE_URL}/bionixus-logo.webp`,
    description:
      'BioNixus is a global market research company headquartered in the USA with offices in the UK and the Middle East, delivering primary research, consumer insights, healthcare and pharmaceutical studies, and strategic intelligence across 17+ countries.',
    foundingDate: '2012',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '128 City Road',
        addressLocality: 'London',
        addressRegion: 'England',
        postalCode: 'EC1V 2NX',
        addressCountry: 'GB',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '1309 Coffeen Avenue STE 1200',
        addressLocality: 'Sheridan',
        addressRegion: 'Wyoming',
        postalCode: '82801',
        addressCountry: 'US',
      },
    ],
    telephone: ['+447727666682', '+18884655557'],
    email: 'mosama@bionixus.com',
    sameAs: [
      'https://uk.linkedin.com/company/bionixus',
      'https://www.linkedin.com/company/bionixus/',
      'https://www.facebook.com/Bionixus',
      'https://www.instagram.com/bionixus_',
      'https://www.wikidata.org/wiki/Q139888256',
    ],
    knowsAbout: [
      { '@type': 'Thing', name: 'Market Research' },
      { '@type': 'Thing', name: 'Healthcare Market Research' },
      { '@type': 'Thing', name: 'Pharmaceutical Market Research' },
      { '@type': 'Thing', name: 'Consumer Market Research' },
      { '@type': 'Thing', name: 'Market Access Strategy' },
      { '@type': 'Thing', name: 'KOL Mapping' },
      { '@type': 'Thing', name: 'Health Economics and Outcomes Research' },
      { '@type': 'Thing', name: 'Competitive Intelligence' },
    ],
    areaServed: [
      { '@type': 'Country', name: 'Egypt' },
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Kuwait' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Place', name: 'Europe' },
      { '@type': 'City', name: 'Dubai', containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' } },
      { '@type': 'City', name: 'Abu Dhabi', containedInPlace: { '@type': 'Country', name: 'United Arab Emirates' } },
      { '@type': 'City', name: 'Riyadh', containedInPlace: { '@type': 'Country', name: 'Saudi Arabia' } },
      { '@type': 'City', name: 'Cairo', containedInPlace: { '@type': 'Country', name: 'Egypt' } },
    ],
  };
}

export function buildHubPageSchemas(faqItems: { question: string; answer: string }[]) {
  return [
    buildOrganizationSchema(),
    buildServiceSchema(),
    buildFAQSchema(faqItems),
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

