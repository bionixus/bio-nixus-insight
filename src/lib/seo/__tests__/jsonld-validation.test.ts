import { describe, it, expect } from 'vitest';
import { isValidSchemaNode, buildSchemas, type SchemaMarkupProps } from '@/components/SchemaMarkup';
import { normalizeJsonLdNode } from '@/components/seo/SEOHead';
import { buildCanonicalOrganization } from '@/lib/seo/organization';
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildProfessionalServiceSchema,
  buildOrganizationSchema,
} from '@/lib/seo/schemas';
import { buildDatasetSchema, buildMedicalWebPageSchema } from '@/lib/reportEnrichmentSchemas';

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
    const org = buildCanonicalOrganization('en');
    parseAndValidate(org);
    const contactPoints = (org as any).contactPoint as Array<Record<string, unknown>>;
    expect(contactPoints.some((cp) => typeof cp.email === 'string' && cp.email.includes('@'))).toBe(true);
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

  it('includes an Organization and a WebSite node', () => {
    const nodes = buildSchemas(props);
    expect(nodes.some((n) => n['@type'] === 'Organization')).toBe(true);
    expect(nodes.some((n) => n['@type'] === 'WebSite')).toBe(true);
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
