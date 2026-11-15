import { GOOGLE_OFFICES, officeRoleLabel } from '@/data/googleLocations';
import { getIndustriesInsightPostPath } from '@/lib/blog-content-silo';
import { ORG_ID, ORG_LOGO, ORG_NAME } from '@/lib/seo/organization';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import {
  INDUSTRIES_INSIGHTS_CANONICAL,
  INDUSTRIES_INSIGHTS_DATE_MODIFIED,
  INDUSTRIES_INSIGHTS_DESCRIPTION,
  INDUSTRIES_INSIGHTS_FAQ,
  INDUSTRIES_INSIGHTS_ORG_DESCRIPTION,
  INDUSTRIES_INSIGHTS_PATH,
  INDUSTRIES_INSIGHTS_TITLE,
  NON_PHARMA_INSIGHTS_CATALOG,
  type CatalogLink,
} from '@/data/nonPharmaInsightsCatalog';

const BASE = 'https://www.bionixus.com';

export type IndustriesInsightArticle = {
  title: string;
  slug: string;
};

export function buildIndustriesInsightsOrganization(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: ORG_NAME,
    url: BASE,
    logo: ORG_LOGO,
    foundingDate: '2012',
    description: INDUSTRIES_INSIGHTS_ORG_DESCRIPTION,
    slogan: 'Primary market research across industries, executed in-country.',
    knowsAbout: [
      'FMCG market research',
      'Retail market research',
      'Real estate market research',
      'Financial services market research',
      'Automotive market research',
      'Technology market research',
      'Telecom market research',
      'Energy market research',
      'Hospitality market research',
      'Education market research',
      'B2B market research',
      'B2C market research',
    ],
    address: GOOGLE_OFFICES.map((office) => ({
      '@type': 'PostalAddress',
      ...office.address,
    })),
    location: GOOGLE_OFFICES.map((office) => ({
      '@type': 'Place',
      '@id': office.schemaId,
      name: office.name,
      description: officeRoleLabel(office),
      address: {
        '@type': 'PostalAddress',
        ...office.address,
      },
    })),
    areaServed: [
      { '@type': 'Place', name: 'MENA' },
      { '@type': 'Place', name: 'GCC' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Place', name: 'Europe' },
      { '@type': 'Place', name: 'Asia-Pacific' },
      { '@type': 'Place', name: 'Latin America' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'New Zealand' },
      { '@type': 'Country', name: 'China' },
    ],
    email: 'admin@bionixus.com',
  };
}

export function buildIndustriesInsightsItemList(
  pageLinks: CatalogLink[],
  articles: IndustriesInsightArticle[],
): Record<string, unknown> {
  const seen = new Set<string>();
  const items: Array<{ name: string; url: string }> = [];
  const add = (href: string, name: string) => {
    if (!href || seen.has(href)) return;
    seen.add(href);
    items.push({ name, url: href.startsWith('http') ? href : `${BASE}${href}` });
  };
  for (const link of pageLinks) add(link.href, link.label);
  for (const article of articles) {
    if (!article.slug || !article.title) continue;
    add(getIndustriesInsightPostPath(article.slug), article.title);
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${INDUSTRIES_INSIGHTS_CANONICAL}#items`,
    name: 'Non-pharma industry, country and city pages',
    numberOfItems: items.length,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function buildIndustriesInsightsSchemas(
  articles: IndustriesInsightArticle[] = [],
): Record<string, unknown>[] {
  const itemList = buildIndustriesInsightsItemList(NON_PHARMA_INSIGHTS_CATALOG.links, articles);
  const collection: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${INDUSTRIES_INSIGHTS_CANONICAL}#collection`,
    name: INDUSTRIES_INSIGHTS_TITLE,
    description: INDUSTRIES_INSIGHTS_DESCRIPTION,
    url: INDUSTRIES_INSIGHTS_CANONICAL,
    dateModified: INDUSTRIES_INSIGHTS_DATE_MODIFIED,
    isPartOf: {
      '@type': 'WebSite',
      name: 'BioNixus',
      url: BASE,
    },
    publisher: { '@id': ORG_ID },
    mainEntity: { '@id': `${INDUSTRIES_INSIGHTS_CANONICAL}#items` },
    about: NON_PHARMA_INSIGHTS_CATALOG.industries.map((industry) => industry.name),
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: INDUSTRIES_INSIGHTS_FAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
  return [
    collection,
    itemList,
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Industries', href: '/bionixus-industries' },
      { name: 'Industry Insights', href: INDUSTRIES_INSIGHTS_PATH },
    ]) as Record<string, unknown>,
    buildIndustriesInsightsOrganization(),
    faq,
  ];
}
