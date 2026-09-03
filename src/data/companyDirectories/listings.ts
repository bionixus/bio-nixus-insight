import { INDUSTRY_COMPANY_DIRECTORIES } from '@/data/industryCompanyDirectories';
import { DIRECTORY_COUNTRIES, DIRECTORY_COUNTRY_SLUGS } from './countries';
import { DIRECTORY_ENTITIES } from './entities';
import type { DirectoryCountrySlug, DirectoryEntitySlug, DirectoryListing } from './types';

export function directoryPath(entity: DirectoryEntitySlug, country: DirectoryCountrySlug): string {
  return `/${entity}-${country}`;
}

export function directoryLabel(entity: DirectoryEntitySlug, country: DirectoryCountrySlug): string {
  return `${DIRECTORY_ENTITIES[entity].labelPlural} in ${DIRECTORY_COUNTRIES[country].display}`;
}

/** Hand-written medtech directories that predate the registry. */
const LEGACY_MEDTECH_COUNTRIES: DirectoryCountrySlug[] = ['saudi-arabia', 'uae', 'japan', 'usa'];

/**
 * Hand-written TSX directory pages (24 pharma, 4 medtech, 1 pharmacy) that the
 * registry must link to but never re-create.
 */
export const LEGACY_DIRECTORIES: DirectoryListing[] = [
  ...DIRECTORY_COUNTRY_SLUGS.filter((slug) => DIRECTORY_COUNTRIES[slug].hasLegacyPharmaDirectory).map(
    (slug): DirectoryListing => ({
      path: directoryPath('pharmaceutical-companies', slug),
      entity: 'pharmaceutical-companies',
      countrySlug: slug,
      label: directoryLabel('pharmaceutical-companies', slug),
      source: 'legacy',
    }),
  ),
  ...LEGACY_MEDTECH_COUNTRIES.map(
    (slug): DirectoryListing => ({
      path: directoryPath('medical-device-companies', slug),
      entity: 'medical-device-companies',
      countrySlug: slug,
      label: directoryLabel('medical-device-companies', slug),
      source: 'legacy',
    }),
  ),
  {
    path: '/top-pharmacies-saudi-arabia',
    entity: 'pharmacy-chains',
    countrySlug: 'saudi-arabia',
    label: 'Pharmacy chains in Saudi Arabia',
    source: 'legacy',
  },
];

const INDUSTRY_TO_ENTITY: Record<string, DirectoryEntitySlug> = {
  fmcg: 'fmcg-companies',
  retail: 'retail-companies',
  'real-estate': 'real-estate-companies',
};

/** The 18 pre-matrix FMCG / retail / real-estate pages from industryCompanyDirectories.ts. */
export const INDUSTRY_DIRECTORY_LISTINGS: DirectoryListing[] = INDUSTRY_COMPANY_DIRECTORIES.map((dir) => {
  const entity = INDUSTRY_TO_ENTITY[dir.industry];
  const countrySlug = dir.countrySlug as DirectoryCountrySlug;
  return {
    path: dir.path,
    entity,
    countrySlug,
    label: directoryLabel(entity, countrySlug),
    source: 'industry',
  };
});

/** Paths that already exist outside the registry — used to block duplicate URLs. */
export const RESERVED_DIRECTORY_PATHS = new Set(
  [...LEGACY_DIRECTORIES, ...INDUSTRY_DIRECTORY_LISTINGS].map((d) => d.path),
);

/** Resolve `{entity, countrySlug}` from any directory path, or null when it is not one. */
export function parseDirectoryPath(
  path: string,
): { entity: DirectoryEntitySlug; countrySlug: DirectoryCountrySlug } | null {
  if (path === '/top-pharmacies-saudi-arabia') return { entity: 'pharmacy-chains', countrySlug: 'saudi-arabia' };
  const bare = path.replace(/^\//, '');
  for (const entity of Object.keys(DIRECTORY_ENTITIES) as DirectoryEntitySlug[]) {
    if (bare.startsWith(`${entity}-`)) {
      const country = bare.slice(entity.length + 1) as DirectoryCountrySlug;
      if (country in DIRECTORY_COUNTRIES) return { entity, countrySlug: country };
    }
  }
  return null;
}
