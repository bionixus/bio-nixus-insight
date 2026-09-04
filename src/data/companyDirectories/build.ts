import { allListicleConfigs } from '@/data/topCompanies';
import { PHARMA_DIRECTORY_LISTICLE } from '@/data/pharmaDirectoryListicles';
import {
  MATRIX_COUNTRIES,
  getIndustryBofuPath,
  getIndustryListiclePath,
  type MatrixCountrySlug,
} from '@/data/industryMarketResearchMatrix';
import { DIRECTORY_COUNTRIES, DIRECTORY_HUB_COUNTRY_SLUGS } from './countries';
import { DIRECTORY_ENTITIES, DIRECTORY_ENTITY_HUB_SLUGS, ENTITY_NEIGHBOURS } from './entities';
import { DIRECTORY_HUB_INPUTS } from './hubs';
import { directoryLabel, directoryPath } from './listings';
import type {
  DirectoryCountrySlug,
  DirectoryEntitySlug,
  DirectoryHubConfig,
  DirectoryHubInput,
  DirectoryListing,
  DirectoryPageConfig,
  DirectoryPageInput,
  DirectoryRelatedLink,
} from './types';

export const DIRECTORY_MASTER_HUB_PATH = '/company-directories';
export const DIRECTORY_PUBLISHED = '2026-09-03';

export function countryHubPath(country: DirectoryCountrySlug): string {
  return `/companies-in-${country}`;
}

const PUBLISHED_COUNTRY_HUBS = new Set(
  DIRECTORY_HUB_INPUTS.filter((h) => h.kind === 'country' && h.countrySlug).map((h) => h.countrySlug!),
);
const PUBLISHED_ENTITY_HUBS = new Set(
  DIRECTORY_HUB_INPUTS.filter((h) => h.kind === 'entity' && h.entity).map((h) => h.entity!),
);

/** True when the `/companies-in-{country}` hub is published (planned set: DIRECTORY_HUB_COUNTRY_SLUGS). */
export function hasCountryHub(country: DirectoryCountrySlug): boolean {
  return DIRECTORY_HUB_COUNTRY_SLUGS.includes(country) && PUBLISHED_COUNTRY_HUBS.has(country);
}

/** True when the `/{entity}` hub is published (planned set: DIRECTORY_ENTITY_HUB_SLUGS). */
export function hasEntityHub(entity: DirectoryEntitySlug): boolean {
  return DIRECTORY_ENTITY_HUB_SLUGS.includes(entity) && PUBLISHED_ENTITY_HUBS.has(entity);
}

function isMatrixCountry(slug: DirectoryCountrySlug): slug is MatrixCountrySlug {
  return slug in MATRIX_COUNTRIES;
}

/** Canonical “best market research companies in [country]” URL, or the nearest hub. */
export function resolveCountryListicle(country: DirectoryCountrySlug): { to: string; label: string } {
  const meta = DIRECTORY_COUNTRIES[country];
  const pharmaPair = PHARMA_DIRECTORY_LISTICLE[country];
  if (pharmaPair) return pharmaPair;

  const general = `/insights/top-market-research-companies-${country}-2026`;
  if (allListicleConfigs.some((c) => c.slug === general)) {
    return { to: general, label: `Top market research companies in ${meta.display} (2026)` };
  }
  const healthcare = `/insights/top-healthcare-market-research-companies-${country}-2026`;
  if (allListicleConfigs.some((c) => c.slug === healthcare)) {
    return { to: healthcare, label: `Top healthcare market research companies in ${meta.display} (2026)` };
  }
  const pharma = `/insights/top-pharmaceutical-market-research-companies-${country}-2026`;
  if (allListicleConfigs.some((c) => c.slug === pharma)) {
    return { to: pharma, label: `Top pharmaceutical market research companies in ${meta.display} (2026)` };
  }
  if (meta.healthcareHubSlug) {
    return {
      to: `/healthcare-market-research/${meta.healthcareHubSlug}`,
      label: `Healthcare market research in ${meta.display}`,
    };
  }
  return { to: '/services', label: 'BioNixus research services' };
}

function resolveListicle(entity: DirectoryEntitySlug, country: DirectoryCountrySlug): { to: string; label: string } {
  const entityMeta = DIRECTORY_ENTITIES[entity];
  const meta = DIRECTORY_COUNTRIES[country];
  // Consumer / B2B entities in matrix countries get the industry-specific ranking.
  if (entityMeta.sector !== 'healthcare' && entityMeta.matrixIndustry && isMatrixCountry(country)) {
    return {
      to: getIndustryListiclePath(country, entityMeta.matrixIndustry),
      label: `Top ${entityMeta.labelLower.replace(/ companies$/, '')} market research companies in ${meta.display} (2026)`,
    };
  }
  return resolveCountryListicle(country);
}

function resolveBofu(entity: DirectoryEntitySlug, country: DirectoryCountrySlug): { to: string; label: string } | undefined {
  const entityMeta = DIRECTORY_ENTITIES[entity];
  const meta = DIRECTORY_COUNTRIES[country];
  if (entityMeta.matrixIndustry && isMatrixCountry(country)) {
    return {
      to: getIndustryBofuPath(country, entityMeta.matrixIndustry),
      label: `${entityMeta.labelPlural.replace(/ Companies$/, '')} market research in ${meta.display}`,
    };
  }
  if (meta.healthcareHubSlug && entityMeta.sector === 'healthcare') {
    return {
      to: `/healthcare-market-research/${meta.healthcareHubSlug}`,
      label: `Healthcare market research in ${meta.display}`,
    };
  }
  return undefined;
}

function siblingEntities(
  entity: DirectoryEntitySlug,
  country: DirectoryCountrySlug,
  all: DirectoryListing[],
  limit: number,
): DirectoryRelatedLink[] {
  const inCountry = all.filter((d) => d.countrySlug === country && d.entity !== entity);
  const ordered = [
    ...ENTITY_NEIGHBOURS[entity].flatMap((e) => inCountry.filter((d) => d.entity === e)),
    ...inCountry.filter((d) => !ENTITY_NEIGHBOURS[entity].includes(d.entity)),
  ];
  const seen = new Set<string>();
  const out: DirectoryRelatedLink[] = [];
  for (const d of ordered) {
    if (seen.has(d.path)) continue;
    seen.add(d.path);
    out.push({ to: d.path, label: d.label });
    if (out.length >= limit) break;
  }
  return out;
}

function siblingCountries(
  entity: DirectoryEntitySlug,
  country: DirectoryCountrySlug,
  all: DirectoryListing[],
  limit: number,
): DirectoryRelatedLink[] {
  const region = DIRECTORY_COUNTRIES[country].region;
  const sameEntity = all.filter((d) => d.entity === entity && d.countrySlug !== country);
  const ordered = [
    ...sameEntity.filter((d) => DIRECTORY_COUNTRIES[d.countrySlug].region === region),
    ...sameEntity.filter((d) => DIRECTORY_COUNTRIES[d.countrySlug].region !== region),
  ];
  return ordered.slice(0, limit).map((d) => ({ to: d.path, label: d.label }));
}

export function buildRelatedLinks(
  entity: DirectoryEntitySlug,
  country: DirectoryCountrySlug,
  all: DirectoryListing[],
): DirectoryRelatedLink[] {
  const links: DirectoryRelatedLink[] = [];
  const push = (l?: DirectoryRelatedLink) => {
    if (l && !links.some((x) => x.to === l.to) && l.to !== directoryPath(entity, country)) links.push(l);
  };
  push(resolveListicle(entity, country));
  push(resolveBofu(entity, country));
  siblingEntities(entity, country, all, 2).forEach(push);
  siblingCountries(entity, country, all, 2).forEach(push);
  if (entity !== 'pharmaceutical-companies') {
    const pharma = all.find((d) => d.entity === 'pharmaceutical-companies' && d.countrySlug === country);
    if (pharma) push({ to: pharma.path, label: pharma.label });
  }
  if (hasCountryHub(country)) {
    push({ to: countryHubPath(country), label: `All company directories for ${DIRECTORY_COUNTRIES[country].display}` });
  }
  if (hasEntityHub(entity)) {
    push({ to: DIRECTORY_ENTITIES[entity].hubPath!, label: `${DIRECTORY_ENTITIES[entity].labelPlural} by country` });
  }
  push({ to: DIRECTORY_MASTER_HUB_PATH, label: 'All company directories by country and industry' });
  push({ to: '/account-level-market-research', label: 'Account-level market research' });
  return links;
}

export function buildDirectoryTitle(entity: DirectoryEntitySlug, country: DirectoryCountrySlug, n: number): string {
  return `Top ${n} ${DIRECTORY_ENTITIES[entity].labelPlural} in ${DIRECTORY_COUNTRIES[country].titlePlace} (2026)`;
}

export function buildDirectoryH1(entity: DirectoryEntitySlug, country: DirectoryCountrySlug): string {
  return `${DIRECTORY_ENTITIES[entity].labelPlural} in ${DIRECTORY_COUNTRIES[country].display}`;
}

/** Turn author input into a full page config. `all` is every directory listing on the site (for cross-links). */
export function finishDirectory(input: DirectoryPageInput, all: DirectoryListing[]): DirectoryPageConfig {
  const { entity, countrySlug } = input;
  const entityMeta = DIRECTORY_ENTITIES[entity];
  const country = DIRECTORY_COUNTRIES[countrySlug];
  const listicle = resolveListicle(entity, countrySlug);
  const bofu = resolveBofu(entity, countrySlug);
  const { publishedDate, modifiedDate, h1, title, ...rest } = input;
  return {
    ...rest,
    path: directoryPath(entity, countrySlug),
    title: title ?? buildDirectoryTitle(entity, countrySlug, input.companies.length),
    h1: h1 ?? buildDirectoryH1(entity, countrySlug),
    entityMeta,
    country,
    listicleTo: listicle.to,
    listicleLabel: listicle.label,
    bofuTo: bofu?.to,
    bofuLabel: bofu?.label,
    relatedLinks: buildRelatedLinks(entity, countrySlug, all),
    hubs: {
      master: DIRECTORY_MASTER_HUB_PATH,
      country: hasCountryHub(countrySlug) ? countryHubPath(countrySlug) : undefined,
      entity: hasEntityHub(entity) ? entityMeta.hubPath : undefined,
    },
    publishedDate: publishedDate ?? DIRECTORY_PUBLISHED,
    modifiedDate: modifiedDate ?? publishedDate ?? DIRECTORY_PUBLISHED,
  };
}

export function toListing(input: DirectoryPageInput): DirectoryListing {
  return {
    path: directoryPath(input.entity, input.countrySlug),
    entity: input.entity,
    countrySlug: input.countrySlug,
    label: directoryLabel(input.entity, input.countrySlug),
    source: 'registry',
  };
}

export function finishHub(input: DirectoryHubInput): DirectoryHubConfig {
  let path = DIRECTORY_MASTER_HUB_PATH;
  let title = 'Company Directories by Country & Industry (2026) | BioNixus';
  let h1 = 'Company directories by country and industry';
  if (input.kind === 'country' && input.countrySlug) {
    const c = DIRECTORY_COUNTRIES[input.countrySlug];
    path = countryHubPath(input.countrySlug);
    title = `Top Companies in ${c.titlePlace} by Industry (2026 Directories)`;
    h1 = `Companies in ${c.display}: directories by industry`;
  } else if (input.kind === 'entity' && input.entity) {
    const e = DIRECTORY_ENTITIES[input.entity];
    path = e.hubPath ?? `/${input.entity}`;
    title = `${e.labelPlural} by Country (2026 Directories) | BioNixus`;
    h1 = `${e.labelPlural} by country`;
  }
  return {
    ...input,
    path,
    title,
    h1,
    publishedDate: input.publishedDate ?? DIRECTORY_PUBLISHED,
    modifiedDate: input.modifiedDate ?? input.publishedDate ?? DIRECTORY_PUBLISHED,
  };
}
