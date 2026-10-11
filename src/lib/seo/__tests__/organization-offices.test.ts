import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { GOOGLE_OFFICES } from '@/data/googleLocations';
import { buildAllGoogleLocalBusinesses } from '@/lib/seo/googleReviewsSchema';
import { buildIndustriesInsightsOrganization } from '@/lib/seo/industriesInsightsSchema';
import { buildCanonicalOrganization, ORG_ADDRESS } from '@/lib/seo/organization';
import { buildOrganizationSchema } from '@/lib/seo/schemas';
import { stripDefaultOrganizationJsonLd } from '../../../../lib/strip-industries-insights-org.mjs';

const FORBIDDEN_OFFICE = /Khobar|Salmiya|S[aã]o Paulo|Sao Paulo/i;

type Address = {
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
};

function postalAddresses(node: Record<string, unknown>): Address[] {
  const address = node.address;
  if (!address) return [];
  return (Array.isArray(address) ? address : [address]) as Address[];
}

function assertCurrentOffices(addresses: Address[]): void {
  expect(addresses).toHaveLength(4);
  expect(JSON.stringify(addresses)).not.toMatch(FORBIDDEN_OFFICE);
  expect(addresses.map((row) => row.addressLocality)).toEqual([
    'Sheridan',
    'London',
    'Sheikh Zayed',
    'Dubai',
  ]);
  const egypt = addresses.find((row) => row.addressCountry === 'EG');
  expect(egypt).toMatchObject({
    streetAddress: '22 Beverly Hills, Second Sheikh Zayed',
    addressLocality: 'Sheikh Zayed',
    addressRegion: 'Giza',
    postalCode: '3240232',
    addressCountry: 'EG',
  });
  expect(addresses.find((row) => row.addressCountry === 'GB')?.postalCode).toBe('EC1V 2NX');
  expect(addresses.find((row) => row.addressCountry === 'US')?.streetAddress).toBe(
    '1309 Coffeen Ave Ste 1200',
  );
  expect(addresses.find((row) => row.addressCountry === 'AE')?.streetAddress).toContain(
    'Thuraya Tower 1',
  );
}

function organizationFromHtml(html: string): Record<string, unknown> | undefined {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  return blocks
    .map((match) => JSON.parse(match[1]) as Record<string, unknown>)
    .find((node) => node['@type'] === 'Organization' && node['@id'] === 'https://www.bionixus.com/#organization');
}

describe('shared Organization offices', () => {
  it('lists Sheridan, London, Sheikh Zayed and Dubai and no retired offices', () => {
    expect(GOOGLE_OFFICES.map((office) => office.id)).toEqual(['us', 'uk', 'eg', 'ae']);
    const canonical = buildCanonicalOrganization();
    const hub = buildOrganizationSchema();
    const insights = buildIndustriesInsightsOrganization();
    expect(canonical.foundingDate).toBe('2012');
    expect(insights.foundingDate).toBe('2012');
    for (const node of [canonical, hub, insights]) {
      assertCurrentOffices(postalAddresses(node));
    }
    expect(ORG_ADDRESS).toHaveLength(4);
    const locations = canonical.location as Array<{ '@id': string }>;
    expect(locations).toEqual(GOOGLE_OFFICES.map((office) => ({ '@id': office.schemaId })));
    expect(JSON.stringify(locations)).not.toMatch(FORBIDDEN_OFFICE);
    expect(JSON.stringify(canonical)).not.toMatch(/"@type":"Place"[^}]*Paulo/);

    const businesses = buildAllGoogleLocalBusinesses();
    expect(businesses.map((node) => node.name)).toEqual([
      'BioNixus LLC USA',
      'BioNixus UK',
      'BioNixus Egypt',
      'BioNixus UAE',
    ]);
    for (const node of businesses) {
      expect(JSON.stringify(node.address)).not.toMatch(FORBIDDEN_OFFICE);
    }
  });

  it('keeps the template Organization on / and /contact and strips it on the insights hub', () => {
    const indexHtml = readFileSync(join(process.cwd(), 'index.html'), 'utf8');
    const templateOrg = organizationFromHtml(indexHtml);
    expect(templateOrg).toBeTruthy();
    assertCurrentOffices(postalAddresses(templateOrg as Record<string, unknown>));

    expect(stripDefaultOrganizationJsonLd(indexHtml, '/')).toBe(indexHtml);
    expect(stripDefaultOrganizationJsonLd(indexHtml, '/contact')).toBe(indexHtml);
    const stripped = stripDefaultOrganizationJsonLd(indexHtml, '/bionixus-industries/insights');
    expect(organizationFromHtml(stripped)).toBeUndefined();
    expect(stripped).toContain('<!-- org-schema:start --><!-- org-schema:end -->');

    for (const file of ['public/conf/nielsen-alternative.html', 'public/conf/iqvia-alternative.html']) {
      const html = readFileSync(join(process.cwd(), file), 'utf8');
      const org = organizationFromHtml(html);
      expect(org, file).toBeTruthy();
      assertCurrentOffices(postalAddresses(org as Record<string, unknown>));
    }
  });
});
