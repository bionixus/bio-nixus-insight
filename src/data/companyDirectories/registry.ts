import { INDUSTRY_COMPANY_DIRECTORIES } from '@/data/industryCompanyDirectories';
import { adaptIndustryDirectory } from './adaptIndustryDirectory';
import { finishDirectory, finishHub, toListing } from './build';
import { DIRECTORY_COUNTRIES } from './countries';
import { DIRECTORY_ENTITIES } from './entities';
import { DIRECTORY_HUB_INPUTS } from './hubs';
import { INDUSTRY_DIRECTORY_LISTINGS, LEGACY_DIRECTORIES, RESERVED_DIRECTORY_PATHS } from './listings';
import { DIRECTORY_PAGE_INPUTS } from './pages';
import type {
  DirectoryCountrySlug,
  DirectoryEntitySlug,
  DirectoryHubConfig,
  DirectoryListing,
  DirectoryPageConfig,
} from './types';

// ---------------------------------------------------------------------------
// Guard: a registry page must never re-create an indexed hand-written URL, and
// every (entity, country) pair must be unique.
// ---------------------------------------------------------------------------
{
  const seen = new Set<string>();
  for (const input of DIRECTORY_PAGE_INPUTS) {
    const path = `/${input.entity}-${input.countrySlug}`;
    if (RESERVED_DIRECTORY_PATHS.has(path)) {
      throw new Error(`[companyDirectories] ${path} already exists as a hand-written or industry page`);
    }
    if (seen.has(path)) throw new Error(`[companyDirectories] duplicate directory ${path}`);
    seen.add(path);
  }
}

const REGISTRY_LISTINGS: DirectoryListing[] = DIRECTORY_PAGE_INPUTS.map(toListing);

/** Every directory page the site serves: legacy TSX pages, pre-matrix industry pages and registry pages. */
export const ALL_DIRECTORY_LISTINGS: DirectoryListing[] = [
  ...LEGACY_DIRECTORIES,
  ...INDUSTRY_DIRECTORY_LISTINGS,
  ...REGISTRY_LISTINGS,
].sort((a, b) => a.path.localeCompare(b.path));

/** Data-driven directory pages added by the matrix (excludes the 18 pre-matrix industry pages). */
export const COMPANY_DIRECTORIES: DirectoryPageConfig[] = DIRECTORY_PAGE_INPUTS.map((input) =>
  finishDirectory(input, ALL_DIRECTORY_LISTINGS),
).sort((a, b) => a.path.localeCompare(b.path));

/** The 18 pre-matrix FMCG / retail / real-estate pages, adapted for the shared template. */
export const ADAPTED_INDUSTRY_DIRECTORIES: DirectoryPageConfig[] = INDUSTRY_COMPANY_DIRECTORIES.map(adaptIndustryDirectory);

/** Everything the shared `CompanyDirectoryPage` template renders. */
export const TEMPLATE_DIRECTORIES: DirectoryPageConfig[] = [...ADAPTED_INDUSTRY_DIRECTORIES, ...COMPANY_DIRECTORIES];

export const COMPANY_DIRECTORY_HUBS: DirectoryHubConfig[] = DIRECTORY_HUB_INPUTS.map(finishHub);

const BY_PATH = new Map<string, DirectoryPageConfig>(TEMPLATE_DIRECTORIES.map((d) => [d.path, d]));
const HUB_BY_PATH = new Map<string, DirectoryHubConfig>(COMPANY_DIRECTORY_HUBS.map((h) => [h.path, h]));

export function getCompanyDirectory(path: string): DirectoryPageConfig | undefined {
  return BY_PATH.get(path);
}

export function getCompanyDirectoryByPair(
  entity: DirectoryEntitySlug,
  country: DirectoryCountrySlug,
): DirectoryPageConfig | undefined {
  return BY_PATH.get(`/${entity}-${country}`);
}

export function getDirectoryHub(path: string): DirectoryHubConfig | undefined {
  return HUB_BY_PATH.get(path);
}

/** All directories (any source) for a country, ordered healthcare first then by entity label. */
export function getDirectoriesForCountry(country: DirectoryCountrySlug): DirectoryListing[] {
  return ALL_DIRECTORY_LISTINGS.filter((d) => d.countrySlug === country).sort((a, b) => {
    const sa = DIRECTORY_ENTITIES[a.entity].sector === 'healthcare' ? 0 : 1;
    const sb = DIRECTORY_ENTITIES[b.entity].sector === 'healthcare' ? 0 : 1;
    if (sa !== sb) return sa - sb;
    return DIRECTORY_ENTITIES[a.entity].labelPlural.localeCompare(DIRECTORY_ENTITIES[b.entity].labelPlural);
  });
}

/** All directories (any source) for an entity, ordered by country name. */
export function getDirectoriesForEntity(entity: DirectoryEntitySlug): DirectoryListing[] {
  return ALL_DIRECTORY_LISTINGS.filter((d) => d.entity === entity).sort((a, b) =>
    DIRECTORY_COUNTRIES[a.countrySlug].name.localeCompare(DIRECTORY_COUNTRIES[b.countrySlug].name),
  );
}

/** Countries that have at least one directory of any kind. */
export function getDirectoryCountriesWithPages(): DirectoryCountrySlug[] {
  const set = new Set<DirectoryCountrySlug>();
  for (const d of ALL_DIRECTORY_LISTINGS) set.add(d.countrySlug);
  return [...set].sort((a, b) => DIRECTORY_COUNTRIES[a].name.localeCompare(DIRECTORY_COUNTRIES[b].name));
}

/** Entities that have at least one directory of any kind. */
export function getDirectoryEntitiesWithPages(): DirectoryEntitySlug[] {
  const set = new Set<DirectoryEntitySlug>();
  for (const d of ALL_DIRECTORY_LISTINGS) set.add(d.entity);
  return [...set].sort((a, b) =>
    DIRECTORY_ENTITIES[a].labelPlural.localeCompare(DIRECTORY_ENTITIES[b].labelPlural),
  );
}
