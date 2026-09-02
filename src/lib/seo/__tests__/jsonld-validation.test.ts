import { describe, it, expect } from 'vitest';
import { isValidSchemaNode, buildSchemas, type SchemaMarkupProps } from '@/components/SchemaMarkup';
import { normalizeJsonLdNode } from '@/components/seo/SEOHead';
import { buildCanonicalOrganization } from '@/lib/seo/organization';
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildHubPageSchemas,
  buildProfessionalServiceSchema,
  buildOrganizationSchema,
  buildVideoObjectSchema,
  buildVideoWatchPageSchemas,
} from '@/lib/seo/schemas';
import { getAllVideos } from '@/data/videos';
import { buildDatasetSchema, buildMedicalWebPageSchema } from '@/lib/reportEnrichmentSchemas';
import { buildListicleItemListSchema } from '@/data/listicleItemListSchema';

/**
 * Site-wide JSON-LD validation. Every node emitted by a schema builder must
 * (a) round-trip through a real JSON-LD parser (JSON.parse) without loss and
 * (b) satisfy the required-property checks in `isValidSchemaNode`. This is
 * wired into `prebuild` so an invalid schema fails the build.
 */
function parseAndValidate(node: object): void {
  const parsed = JSON.parse(JSON.stringify(node));
  expect(parsed['@context']).toBe('https://schema.org');
  expect(typeof parsed['@type']).toBe('string');
  expect(isValidSchemaNode(parsed)).toBe(true);
}

describe('Organization + WebSite (global, every page)', () => {
  it('canonical Organization node is valid and carries a real contact email', () => {
    const org = buildCanonicalOrganization();
    parseAndValidate(org);
    const contactPoints = (org as any).contactPoint as Array<Record<string, unknown>>;
    expect(contactPoints.some((cp) => cp.email === 'admin@bionixus.com')).toBe(true);
    expect((org as any).knowsAbout.length).toBeLessThanOrEqual(20);
  });

  it('buildOrganizationSchema (used by hub/country/therapy pages) is valid', () => {
    parseAndValidate(buildOrganizationSchema());
  });
});

describe('Homepage schema bundle', () => {
  const props: SchemaMarkupProps = {
    pageType: 'home',
    pageUrl: 'https://www.bionixus.com/',
    language: 'en',
    faqItems: [{ question: 'What does BioNixus do?', answer: 'Healthcare and pharmaceutical market research.' }],
  };

  it('every node in the home bundle is individually valid JSON-LD', () => {
    const nodes = buildSchemas(props);
    expect(nodes.length).toBeGreaterThan(0);
    nodes.forEach(parseAndValidate);
  });

  it('includes a WebSite node and does not re-emit Organization (index.html is the single copy)', () => {
    const nodes = buildSchemas(props);
    expect(nodes.some((n) => n['@type'] === 'Organization')).toBe(false);
    expect(nodes.some((n) => n['@type'] === 'WebSite')).toBe(true);
    const website = nodes.find((n) => n['@type'] === 'WebSite') as Record<string, unknown>;
    expect(website.potentialAction).toBeUndefined();
  });

  it('emits all six Google LocalBusiness listings with matching NAP', () => {
    const nodes = buildSchemas(props);
    const offices = nodes.filter((n) => n['@type'] === 'LocalBusiness');
    expect(offices.map((n) => n.name)).toEqual([
      'BioNixus LLC USA',
      'BioNixus UK',
      'BioNixus Egypt',
      'BioNixus UAE',
      'BioNixus Saudi Arabia',
      'BioNixus Kuwait',
    ]);
    const uk = offices.find((n) => n.name === 'BioNixus UK') as Record<string, unknown>;
    expect(uk.aggregateRating).toBeTruthy();
    expect((uk.aggregateRating as { reviewCount: string }).reviewCount).toBe('4');
    expect(Array.isArray(uk.review) && uk.review.length).toBe(4);
    expect(offices.filter((n) => n.aggregateRating).map((n) => n.name)).toEqual(['BioNixus UK']);
    expect((offices.find((n) => n.name === 'BioNixus LLC USA') as any).address.streetAddress).toContain(
      'Coffeen Ave Ste 1200',
    );
    expect((offices.find((n) => n.name === 'BioNixus UAE') as any).address.streetAddress).toContain(
      'Thuraya Tower 1',
    );
    expect((offices.find((n) => n.name === 'BioNixus Saudi Arabia') as any).address.addressLocality).toBe(
      'Al Khobar',
    );
    expect((offices.find((n) => n.name === 'BioNixus Kuwait') as any).address.addressLocality).toBe(
      'Salmiya',
    );
  });
});

describe('Blog post (Article/BlogPosting) schema bundle', () => {
  const props: SchemaMarkupProps = {
    pageType: 'blog',
    pageUrl: 'https://www.bionixus.com/blog/example-post',
    language: 'en',
    headline: 'Example Healthcare Market Research Article',
    description: 'A description of the example article, long enough to be meaningful.',
    imageUrl: 'https://www.bionixus.com/og-image.png',
    authorName: 'BioNixus Editorial',
    publishedAt: '2026-01-01',
    modifiedAt: '2026-01-02',
    breadcrumb: [
      { name: 'Home', item: '/' },
      { name: 'Blog', item: '/blog' },
      { name: 'Example Post', item: '/blog/example-post' },
    ],
  };

  it('every node in the blog bundle is individually valid JSON-LD', () => {
    const nodes = buildSchemas(props);
    expect(nodes.length).toBeGreaterThan(0);
    nodes.forEach(parseAndValidate);
  });

  it('includes a BlogPosting with a real publisher and a BreadcrumbList', () => {
    const nodes = buildSchemas(props);
    const article = nodes.find((n) => n['@type'] === 'BlogPosting') as any;
    expect(article).toBeTruthy();
    expect(article.publisher['@id']).toBe('https://www.bionixus.com/#organization');
    expect(nodes.some((n) => n['@type'] === 'BreadcrumbList')).toBe(true);
  });
});

describe('Market report Dataset schema', () => {
  const input = {
    pageTitle: 'Saudi Arabia Healthcare Market Report 2026',
    pageMetaDescription: 'Saudi Arabia healthcare market at USD 55-65B in 2026.',
    countryName: 'Saudi Arabia',
    publishedDate: '2026-05-27',
    modifiedDate: '2026-05-27',
  };

  it('Dataset node is valid and carries spatialCoverage + temporalCoverage', () => {
    const dataset = buildDatasetSchema(input) as any;
    parseAndValidate(dataset);
    expect(dataset.spatialCoverage.name).toBe('Saudi Arabia');
    expect(dataset.temporalCoverage).toBe('2026');
    expect(dataset.creator['@id']).toBe('https://www.bionixus.com/#organization');
  });

  it('MedicalWebPage companion node is present', () => {
    const node = buildMedicalWebPageSchema(input) as any;
    expect(node['@type']).toBe('MedicalWebPage');
  });
});

describe('Report-page inline Article normalization (SEOHead backfill)', () => {
  it('backfills image, description, url, and mainEntityOfPage on a bare Article literal', () => {
    // Mirrors the hand-rolled shape used across the 50 market-report pages,
    // e.g. SaudiArabiaHealthcareMarketReport.tsx, before normalization.
    const bareArticle = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Saudi Arabia Healthcare Market Report 2026',
      author: { '@type': 'Organization', name: 'BioNixus' },
      publisher: {
        '@type': 'Organization',
        name: 'BioNixus',
        logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
      },
      datePublished: '2026-05-27',
      dateModified: '2026-05-27',
      mainEntityOfPage: 'https://www.bionixus.com/saudi-arabia-healthcare-market-report',
    };

    expect(isValidSchemaNode(bareArticle)).toBe(false);

    const normalized = normalizeJsonLdNode(bareArticle, {
      title: 'Saudi Arabia Healthcare Market Report 2026 | BioNixus',
      description: 'Saudi Arabia healthcare market ~USD 55-65B in 2026.',
      canonicalUrl: 'https://www.bionixus.com/saudi-arabia-healthcare-market-report',
      ogImage: 'https://www.bionixus.com/api/og-card?path=%2Fsaudi-arabia-healthcare-market-report',
    });

    parseAndValidate(normalized);
    expect((normalized as any).mainEntityOfPage['@type']).toBe('WebPage');
  });

  it('backfills publisher.logo on Article nodes that omit it', () => {
    const bareArticle = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Top Market Research Companies in the UAE 2026',
      description: 'Buyer guide to market research firms in the UAE.',
      url: 'https://www.bionixus.com/insights/top-market-research-companies-uae-2026',
      datePublished: '2026-06-07',
      dateModified: '2026-09-01',
      image: { '@type': 'ImageObject', url: 'https://www.bionixus.com/og-image.png' },
      author: { '@type': 'Person', name: 'Haidy Yahia' },
      publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp', width: 512, height: 512 } },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.bionixus.com/insights/top-market-research-companies-uae-2026#webpage' },
    };

    const normalized = normalizeJsonLdNode(bareArticle, {
      title: 'Top Market Research Companies in the UAE 2026',
      description: 'Buyer guide to market research firms in the UAE.',
      canonicalUrl: 'https://www.bionixus.com/insights/top-market-research-companies-uae-2026',
      ogImage: 'https://www.bionixus.com/og-image.png',
    });

    parseAndValidate(normalized);
    expect((normalized as any).publisher.logo['@type']).toBe('ImageObject');
    expect((normalized as any).publisher.logo.url).toContain('bionixus-logo.webp');
  });

  it('leaves non-Article nodes (FAQPage, BreadcrumbList) untouched', () => {
    const faq = buildFAQSchema([{ question: 'Q?', answer: 'A.' }]);
    const normalized = normalizeJsonLdNode(faq, {
      title: 't',
      description: 'd',
      canonicalUrl: 'https://www.bionixus.com/x',
      ogImage: 'https://www.bionixus.com/og-image.png',
    });
    expect(normalized).toEqual(faq);
    parseAndValidate(normalized);
  });
});

describe('Breadcrumb + FAQ + Service builders used across service/country/therapy pages', () => {
  it('BreadcrumbList is valid', () => {
    parseAndValidate(
      buildBreadcrumbSchema([
        { name: 'Home', href: '/' },
        { name: 'HEOR Consulting', href: '/heor-consulting' },
      ]),
    );
  });

  it('FAQPage is valid', () => {
    parseAndValidate(
      buildFAQSchema([
        { question: 'What is HEOR consulting?', answer: 'Health economics and outcomes research consulting.' },
      ]),
    );
  });

  it('ProfessionalService (Service pages) is valid', () => {
    parseAndValidate(buildProfessionalServiceSchema());
  });
});

describe('AI SEO pages (pricing + account-level definition)', () => {
  it('pricing FAQ + breadcrumb + Service nodes are valid JSON-LD', () => {
    parseAndValidate(buildBreadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Pricing', href: '/pricing' }]));
    parseAndValidate(
      buildFAQSchema(
        [{ question: 'How much does BioNixus cost?', answer: 'Project- and country-based planning bands.' }],
        { pageUrl: 'https://www.bionixus.com/pricing' },
      ),
    );
    parseAndValidate({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'BioNixus primary market research',
      description: 'Project- and country-based primary market research pricing.',
    });
  });

  it('healthcare hub FAQ includes the definition questions', () => {
    const nodes = buildHubPageSchemas([
      {
        question: 'What is healthcare market research?',
        answer:
          'Healthcare market research is primary evidence used to decide launch, access, and brand versus competitor questions.',
      },
      {
        question: 'When is IQVIA enough, and when should we brief a primary research firm?',
        answer: 'Keep IQVIA for national syndicated sizing. Brief a field firm for account-level cuts.',
      },
    ]);
    nodes.forEach(parseAndValidate);
    const faq = nodes.find((node) => (node as { '@type'?: string })['@type'] === 'FAQPage') as {
      mainEntity: { name: string }[];
    };
    expect(faq.mainEntity[0].name).toBe('What is healthcare market research?');
  });

  it('account-level Article node is valid JSON-LD', () => {
    parseAndValidate({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'What is account-level (and SKU-level) market research data?',
      description: 'Account-level market research cuts brand vs competitor data by customer account.',
      url: 'https://www.bionixus.com/account-level-market-research',
      datePublished: '2026-09-02',
      dateModified: '2026-09-02',
      image: { '@type': 'ImageObject', url: 'https://www.bionixus.com/og-image.png' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.bionixus.com/account-level-market-research' },
      author: { '@type': 'Person', name: 'Haidy Yahia' },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://www.bionixus.com/#organization',
        name: 'BioNixus',
        logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp' },
      },
    });
  });
});

describe('Country ranking ItemList', () => {
  it('puts a name on every ListItem', () => {
    const node = buildListicleItemListSchema({
      name: 'Market Research Firms in Egypt 2026',
      canonical: 'https://www.bionixus.com/insights/top-market-research-companies-egypt-2026',
      firms: [
        { rank: 1, name: 'BioNixus', anchor: 'bionixus' },
        { rank: 2, name: 'Kantar Egypt', anchor: 'kantar' },
      ],
    });
    parseAndValidate(node);
    expect(node.numberOfItems).toBe(2);
    expect(node.itemListElement.every((item: { name?: string }) => typeof item.name === 'string' && item.name.length > 0)).toBe(true);
  });
});

describe('VideoObject watch-page builders', () => {
  const video = getAllVideos()[0];

  it('buildVideoObjectSchema is valid JSON-LD', () => {
    expect(video).toBeTruthy();
    parseAndValidate(buildVideoObjectSchema(video));
  });

  it('every node in the watch-page bundle is valid', () => {
    buildVideoWatchPageSchemas(video).forEach(parseAndValidate);
  });

  it('VideoObject includes required name, thumbnailUrl, uploadDate, and a media URL', () => {
    const node = buildVideoObjectSchema(video) as Record<string, unknown>;
    expect(node['@type']).toBe('VideoObject');
    expect(typeof node.name).toBe('string');
    expect(Array.isArray(node.thumbnailUrl) || typeof node.thumbnailUrl === 'string').toBe(true);
    expect(typeof node.uploadDate).toBe('string');
    expect(Boolean(node.embedUrl || node.contentUrl)).toBe(true);
  });
});
