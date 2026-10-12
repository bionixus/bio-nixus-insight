import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { isValidSchemaNode } from '@/components/SchemaMarkup';
import {
  INDUSTRIES_INSIGHTS_DESCRIPTION,
  INDUSTRIES_INSIGHTS_ORG_DESCRIPTION,
  INDUSTRIES_INSIGHTS_TITLE,
  LATAM_COVERAGE_SENTENCE,
  NON_PHARMA_INSIGHTS_CATALOG,
} from '@/data/nonPharmaInsightsCatalog';
import {
  NON_PHARMA_DIRECTORY_LINKS,
  NON_PHARMA_ENTITY_HUBS,
  NON_PHARMA_RANKING_LINKS,
} from '@/data/nonPharmaInsightsLinks.generated';
import { buildIndustriesInsightsSchemas } from '@/lib/seo/industriesInsightsSchema';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { buildNonPharmaIndexedLinks } from '../../scripts/generate-nonpharma-insights-links.mjs';
import { stripDefaultOrganizationJsonLd } from '../../lib/strip-industries-insights-org.mjs';

const HEALTHCARE_HREF =
  /\/(medtech|healthcare|biotech|consumer-health)(-market-research|$)|top-(medtech|healthcare|biotech|consumer-health|pharmaceutical)-|pharmaceutical-companies|medical-device-companies|pharmacy-chains|hospital-groups|biotech-companies|health-insurers/;

describe('non-pharma insights hub catalog', () => {
  const hrefs = NON_PHARMA_INSIGHTS_CATALOG.links.map((link) => link.href);

  it('links more than the old three-article hub, including matrix, rankings and cities', () => {
    expect(hrefs.length).toBeGreaterThan(150);
    expect(hrefs).toContain('/saudi-arabia-fmcg-market-research');
    expect(hrefs).toContain('/insights/top-fmcg-market-research-companies-saudi-arabia-2026');
    expect(hrefs).toContain('/insights/top-market-research-companies-dubai-2026');
    expect(hrefs).toContain('/insights/top-market-research-companies-riyadh-2026');
    expect(hrefs).toContain('/insights/top-market-research-companies-abu-dhabi-2026');
    expect(hrefs).toContain('/insights/top-market-research-companies-usa-2026');
    expect(hrefs).toContain('/insights/top-market-research-companies-uk-2026');
    expect(hrefs).toContain('/insights/top-market-research-companies-japan-2026');
    expect(hrefs).toContain('/insights/top-market-research-companies-brazil-2026');
    expect(hrefs).toContain('/insights/top-market-research-companies-canada-2026');
    expect(hrefs).toContain('/insights/top-market-research-companies-australia-2026');
    expect(hrefs).toContain('/insights/top-market-research-companies-new-zealand-2026');
    expect(hrefs).toContain('/insights/top-market-research-companies-china-2026');
  });

  it('keeps healthcare and pharmaceutical URLs out of the hub', () => {
    for (const href of hrefs) {
      expect(href).not.toMatch(HEALTHCARE_HREF);
    }
  });

  it('renders only regions that have pages, including the global set', () => {
    const ids = NON_PHARMA_INSIGHTS_CATALOG.regions.map((region) => region.id);
    expect(ids).toEqual(
      expect.arrayContaining(['mena-gcc', 'usa', 'europe', 'apac', 'latam', 'can-anz-cn']),
    );
    for (const region of NON_PHARMA_INSIGHTS_CATALOG.regions) {
      expect(region.countries.length).toBeGreaterThan(0);
      expect(region.countries.every((country) => country.links.length > 0)).toBe(true);
    }
    const latam = NON_PHARMA_INSIGHTS_CATALOG.regions.find((region) => region.id === 'latam');
    expect(latam?.description).toBe(LATAM_COVERAGE_SENTENCE);
    expect(latam?.description).toContain('fully operational in LATAM');
    expect(latam?.description).toContain('covered from the US office');
    expect(latam?.description).toContain('strong network of local consultants');
    expect(latam?.description).toContain('in the process of opening a São Paulo office by the end of 2026');
  });

  it('does not mention Al Khobar or a current São Paulo office', () => {
    const blob = JSON.stringify(NON_PHARMA_INSIGHTS_CATALOG);
    expect(blob).not.toMatch(/Khobar/i);
    expect(blob).not.toMatch(/office in S[aã]o Paulo/i);
  });

  it('keeps the generated link index aligned with the filesystem', () => {
    const fresh = buildNonPharmaIndexedLinks();
    expect([...NON_PHARMA_DIRECTORY_LINKS]).toEqual(fresh.directories);
    expect([...NON_PHARMA_RANKING_LINKS]).toEqual(fresh.rankings);
    expect([...NON_PHARMA_ENTITY_HUBS]).toEqual(fresh.entityHubs);
  });
});

describe('industries insights schema', () => {
  const schemas = buildIndustriesInsightsSchemas([
    { title: 'Financial services market research in Egypt 2026', slug: 'financial-services-market-research-egypt-2026' },
  ]);

  it('emits CollectionPage, ItemList, BreadcrumbList and a global Organization', () => {
    const types = schemas.map((node) => node['@type']);
    expect(types).toEqual(
      expect.arrayContaining(['CollectionPage', 'ItemList', 'BreadcrumbList', 'Organization', 'FAQPage']),
    );
    for (const node of schemas) {
      expect(isValidSchemaNode(node)).toBe(true);
    }
  });

  it('counts every real item in the ItemList', () => {
    const list = schemas.find((node) => node['@type'] === 'ItemList') as {
      numberOfItems: number;
      itemListElement: Array<{ name: string; url: string; position: number }>;
    };
    expect(list.itemListElement.length).toBe(list.numberOfItems);
    expect(list.numberOfItems).toBeGreaterThan(150);
    expect(list.itemListElement[0]?.position).toBe(1);
    expect(list.itemListElement.some((item) => item.url.endsWith('/saudi-arabia-retail-market-research'))).toBe(true);
    expect(
      list.itemListElement.some((item) =>
        item.url.endsWith('/bionixus-industries/insights/financial-services-market-research-egypt-2026'),
      ),
    ).toBe(true);
  });

  it('describes a global multi-industry firm and keeps six labelled offices, with no São Paulo address', () => {
    const org = schemas.find((node) => node['@type'] === 'Organization') as {
      description: string;
      address: Array<Record<string, string>>;
      location: Array<{ description: string; address: { addressLocality: string } }>;
    };
    expect(org.description).toBe(INDUSTRIES_INSIGHTS_ORG_DESCRIPTION);
    expect(org.description.startsWith('BioNixus is a global market research firm')).toBe(true);
    expect(org.description).not.toMatch(/pharmaceutical/i);
    expect(org.description).toContain('Field offices are in Dubai');
    expect(org.description).toContain('Al Khobar');
    const addresses = JSON.stringify(org.address);
    expect(addresses).not.toMatch(/Paulo/i);
    expect(addresses).toContain('EC1V 2NX');
    expect(addresses).toContain('Second Sheikh Zayed');
    expect(addresses).toContain('Thuraya Tower 1');
    expect(addresses).toContain('Sheridan');
    expect(addresses).toContain('Al Khobar');
    expect(addresses).toContain('Salmiya');
    expect(org.location.map((place) => place.description)).toEqual([
      'Regional leadership office (US headquarters)',
      'Regional leadership office',
      'Regional leadership office',
      'Field office',
      'Field office',
      'Field office',
    ]);
    expect(org.location.map((place) => place.address.addressLocality)).toEqual([
      'Sheridan',
      'London',
      'Sheikh Zayed',
      'Dubai',
      'Al Khobar',
      'Salmiya',
    ]);
  });
});

describe('industries insights meta', () => {
  it('ships a 50-60 character title and a 150-160 character description', () => {
    expect(INDUSTRIES_INSIGHTS_TITLE.length).toBeGreaterThanOrEqual(50);
    expect(INDUSTRIES_INSIGHTS_TITLE.length).toBeLessThanOrEqual(60);
    expect(INDUSTRIES_INSIGHTS_DESCRIPTION.length).toBeGreaterThanOrEqual(150);
    expect(INDUSTRIES_INSIGHTS_DESCRIPTION.length).toBeLessThanOrEqual(160);
    const ctr = getCtrSeo('/bionixus-industries/insights');
    expect(ctr).toEqual({
      title: INDUSTRIES_INSIGHTS_TITLE,
      description: INDUSTRIES_INSIGHTS_DESCRIPTION,
    });
  });

  it('removes the template Organization JSON-LD on the insights hub only', () => {
    const html =
      '<!-- org-schema:start (generated by scripts/sync-org-schema.mjs) --><script type="application/ld+json">{"@type":"Organization","description":"pharma","addressLocality":"Al Khobar"}</script><!-- org-schema:end -->';
    const stripped = stripDefaultOrganizationJsonLd(html, '/bionixus-industries/insights');
    expect(stripped).not.toContain('pharma');
    expect(stripped).not.toContain('Al Khobar');
    expect(stripped).toContain('org-schema:start');
    expect(stripped).toContain('org-schema:end');
    expect(stripDefaultOrganizationJsonLd(html, '/healthcare-market-research')).toBe(html);
    const industryHubPages = readFileSync(join(process.cwd(), 'src/data/industryHubPages.ts'), 'utf8');
    expect(industryHubPages).toContain("slug: 'fmcg'");
    expect(industryHubPages).toContain("slug: 'public-sector'");
  });
});
