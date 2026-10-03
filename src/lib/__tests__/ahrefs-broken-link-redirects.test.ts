import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { getLocalizedPathForLanguage } from '@/lib/seo';
import { getCrawlerStubForSlug } from '../../../blog-crawler-stubs.mjs';
import { LEGACY_BLOG_SLUG_TO_CANONICAL } from '../../../blog-legacy-redirects.mjs';

const legacyRedirects = JSON.parse(
  readFileSync(join(process.cwd(), 'config/legacy-redirects.json'), 'utf8'),
) as Record<string, string>;

const vercel = JSON.parse(readFileSync(join(process.cwd(), 'vercel.json'), 'utf8')) as {
  redirects?: Array<{ source?: string; destination?: string }>;
};
const vercelSources = new Set((vercel.redirects ?? []).map((row) => row.source));

describe('Ahrefs Oct 2026 broken-link map', () => {
  it('301s locale-prefixed English-only URLs to a live page', () => {
    const sources = [
      '/es/bionixus-market-research-middle-east',
      '/ar/bionixus-market-research-middle-east',
      '/de/bionixus-market-research-middle-east',
      '/pt/bionixus-market-research-middle-east',
      '/ru/bionixus-market-research-middle-east',
      '/es/strategic-portfolio',
      '/de/strategic-portfolio',
      '/ru/strategic-portfolio',
      '/pt/strategic-portfolio',
      '/ru/quantitative-healthcare-market-research',
      '/zh/quantitative-healthcare-market-research',
      '/pt/quantitative-healthcare-market-research',
      '/de/quantitative-healthcare-market-research',
      '/es/quantitative-healthcare-market-research',
      '/ar/quantitative-healthcare-market-research',
      '/zh/healthcare-market-research/saudi-arabia',
      '/ru/healthcare-market-research/saudi-arabia',
      '/pt/healthcare-market-research/saudi-arabia',
      '/fr/insights/top-market-research-companies-egypt-2026',
      '/es/insights/top-market-research-companies-egypt-2026',
      '/de/insights/top-market-research-companies-egypt-2026',
      '/ru/insights/top-market-research-companies-egypt-2026',
      '/pt/insights/top-market-research-companies-egypt-2026',
      '/sweden-medical-devices-market-report',
      '/healthcare-market-research/therapy/cancer-diagnostics',
      '/healthcare-market-research/therapy/immunology-biologics',
    ];
    for (const from of sources) {
      expect(legacyRedirects[from], from).toBeTruthy();
      expect(legacyRedirects[from], from).not.toBe(from);
      expect(vercelSources.has(from), `vercel.json missing ${from}`).toBe(true);
    }
  });

  it('does not emit those locale 404s from homepage pathway helpers', () => {
    expect(getLocalizedPathForLanguage('/bionixus-market-research-middle-east', 'es')).toBe(
      '/bionixus-market-research-middle-east',
    );
    expect(getLocalizedPathForLanguage('/strategic-portfolio', 'de')).toBe('/strategic-portfolio');
    expect(getLocalizedPathForLanguage('/quantitative-healthcare-market-research', 'zh')).toBe(
      '/quantitative-healthcare-market-research',
    );
    expect(getLocalizedPathForLanguage('/insights/top-market-research-companies-egypt-2026', 'fr')).toBe(
      '/insights/top-market-research-companies-egypt-2026',
    );
    expect(getLocalizedPathForLanguage('/healthcare-market-research/saudi-arabia', 'ru')).toBe(
      '/healthcare-market-research/saudi-arabia',
    );
  });

  it('has crawler stubs for hardcoded blog URLs Ahrefs marked 404', () => {
    const slugs = [
      'uae-healthcare-market-trends-2026',
      'nmpa-class-iii-registration-timeline-2026',
      'market-research-companies-egypt',
      'medtech-singapore-2026-market-hsa-registration',
      'china-device-vbp-rounds-explained',
      'nf1-koselugo-selumetinib-pharma-market-research',
      'turkey-pharmaceutical-market-2026-titck-top-companies',
    ];
    for (const slug of slugs) {
      expect(getCrawlerStubForSlug(slug)?.title, slug).toBeTruthy();
    }
  });

  it('maps the truncated Kresladi slug onto the indexed article', () => {
    expect(LEGACY_BLOG_SLUG_TO_CANONICAL['kresladi-marnetegragene-lad1-fda-']).toBe(
      'kresladi-marnetegragene-lad1-fda-2026',
    );
  });
});
