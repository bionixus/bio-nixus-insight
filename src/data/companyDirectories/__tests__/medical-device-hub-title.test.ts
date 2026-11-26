import { describe, expect, it } from 'vitest';
import {
  MEDICAL_DEVICE_HUB_TITLE,
  countryDirectoryHubTitle,
  entityDirectoryHubTitle,
  entityHubTitle,
  finishHub,
} from '@/data/companyDirectories/build';
import { DIRECTORY_ENTITIES } from '@/data/companyDirectories/entities';
import { DIRECTORY_HUB_INPUTS } from '@/data/companyDirectories/hubs';
import {
  medicalDeviceCompaniesHub,
  pharmaceuticalCompaniesHub,
  pharmaceuticalDistributorsHub,
} from '@/data/companyDirectories/hubs/entities';
import { normalizeSeoTitle, seoTitleCodePoints } from '@/lib/seo-meta';

const PHARMA_COMPANIES = 'Pharmaceutical Company Directory by Country (2026)';
const PHARMA_DISTRIBUTORS = 'Pharmaceutical Distributor Directory by Country (2026)';

function parenthesesBalanced(value: string): boolean {
  let open = 0;
  for (const ch of value) {
    if (ch === '(') open += 1;
    else if (ch === ')') {
      open -= 1;
      if (open < 0) return false;
    }
  }
  return open === 0;
}

describe('directory hub titles', () => {
  it('keeps the approved medical-device title and h1', () => {
    const hub = finishHub(medicalDeviceCompaniesHub);
    expect(hub.path).toBe('/medical-device-companies');
    expect(hub.title).toBe(MEDICAL_DEVICE_HUB_TITLE);
    expect(entityDirectoryHubTitle('medical device company')).toBe(MEDICAL_DEVICE_HUB_TITLE);
    expect(Array.from(hub.title)).toHaveLength(50);
    expect(hub.h1).toBe('Medical Device Companies by country');
    expect(hub.metaDescription).toBe(medicalDeviceCompaniesHub.metaDescription);
    expect(hub.modifiedDate).toBe('2026-11-26');
    expect(normalizeSeoTitle(hub.title)).toBe(hub.title);
  });

  it('ships closed 2026 directory titles for the pharmaceutical hubs', () => {
    const companies = finishHub(pharmaceuticalCompaniesHub);
    const distributors = finishHub(pharmaceuticalDistributorsHub);
    expect(companies.path).toBe('/pharmaceutical-companies');
    expect(companies.title).toBe(PHARMA_COMPANIES);
    expect(Array.from(companies.title)).toHaveLength(50);
    expect(companies.h1).toBe('Pharmaceutical Companies by country');
    expect(companies.modifiedDate).toBe('2026-11-26');
    expect(distributors.path).toBe('/pharmaceutical-distributors');
    expect(distributors.title).toBe(PHARMA_DISTRIBUTORS);
    expect(Array.from(distributors.title)).toHaveLength(54);
    expect(distributors.h1).toBe('Pharmaceutical Distributors by country');
    expect(distributors.modifiedDate).toBe('2026-11-26');
    expect(normalizeSeoTitle(companies.title)).toBe(companies.title);
    expect(normalizeSeoTitle(distributors.title)).toBe(distributors.title);
  });

  it('leaves fitting hub titles on the legacy template and never emits an open bracket', () => {
    const hubs = DIRECTORY_HUB_INPUTS.map(finishHub);
    const unchanged = {
      '/company-directories': 'Company Directories by Country & Industry (2026) | BioNixus',
      '/companies-in-saudi-arabia': 'Top Companies in Saudi Arabia by Industry (2026 Directories)',
      '/companies-in-uae': 'Top Companies in UAE by Industry (2026 Directories)',
      '/companies-in-egypt': 'Top Companies in Egypt by Industry (2026 Directories)',
      '/companies-in-kuwait': 'Top Companies in Kuwait by Industry (2026 Directories)',
      '/companies-in-qatar': 'Top Companies in Qatar by Industry (2026 Directories)',
      '/companies-in-oman': 'Top Companies in Oman by Industry (2026 Directories)',
      '/companies-in-bahrain': 'Top Companies in Bahrain by Industry (2026 Directories)',
      '/banks': 'Banks by Country (2026 Directories) | BioNixus',
      '/fmcg-companies': 'FMCG Companies by Country (2026 Directories) | BioNixus',
      '/retail-companies': 'Retail Companies by Country (2026 Directories) | BioNixus',
    };
    for (const hub of hubs) {
      expect(seoTitleCodePoints(hub.title), hub.path).toBeLessThanOrEqual(60);
      expect(parenthesesBalanced(hub.title), hub.path).toBe(true);
      expect(normalizeSeoTitle(hub.title), hub.path).toBe(hub.title);
      expect(hub.title, hub.path).not.toMatch(/\(2026\s*\|/);
      expect(hub.title, hub.path).not.toMatch(/\([^)]*$/);
    }
    for (const [path, title] of Object.entries(unchanged)) {
      expect(hubs.find((hub) => hub.path === path)?.title).toBe(title);
    }
  });

  it('shortens an over-long place or label without opening a bracket', () => {
    const country = countryDirectoryHubTitle('the United Arab Emirates');
    expect(country).toBe('Top Companies in the United Arab Emirates by Industry (2026)');
    expect(seoTitleCodePoints(country)).toBeLessThanOrEqual(60);
    expect(parenthesesBalanced(country)).toBe(true);
    expect(countryDirectoryHubTitle('Saudi Arabia')).toBe(
      'Top Companies in Saudi Arabia by Industry (2026 Directories)',
    );

    const long = entityHubTitle({
      labelPlural: 'Cosmetics & Personal Care Companies',
      labelSingular: 'cosmetics and personal care company',
    });
    expect(seoTitleCodePoints(long)).toBeLessThanOrEqual(60);
    expect(parenthesesBalanced(long)).toBe(true);
    expect(long.endsWith('(2026)')).toBe(true);

    for (const entity of Object.values(DIRECTORY_ENTITIES)) {
      const title = entityHubTitle(entity);
      expect(seoTitleCodePoints(title), entity.slug).toBeLessThanOrEqual(60);
      expect(parenthesesBalanced(title), entity.slug).toBe(true);
      expect(normalizeSeoTitle(title), entity.slug).toBe(title);
    }
  });
});
