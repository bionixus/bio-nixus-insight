/**
 * Canonical editorial roster — names and Sanity IDs from production authors.
 * Do not invent names. See .cursor/rules/editorial-authors.mdc.
 */

import {
  ALSAADANY_JOB_TITLE as ALSAADANY_JOB_TITLE_VALUE,
  canonicalAlsaadanyJobTitle as canonicalAlsaadanyJobTitleValue,
  replaceLegacyAlsaadanyPhrases as replaceLegacyAlsaadanyPhrasesValue,
  replaceMeaDirectorTitle as replaceMeaDirectorTitleValue,
} from '../../scripts/data/alsaadany-title.mjs';
import { alsaadanyHitSubjectOf } from '@/data/inTheMedia';

export const ALSAADANY_JOB_TITLE: string = ALSAADANY_JOB_TITLE_VALUE;

export function canonicalAlsaadanyJobTitle(title: string | null | undefined): string {
  return canonicalAlsaadanyJobTitleValue(title);
}

export function replaceMeaDirectorTitle(value: string): string {
  return replaceMeaDirectorTitleValue(value);
}

export function replaceLegacyAlsaadanyPhrases<T>(value: T): T {
  return replaceLegacyAlsaadanyPhrasesValue(value) as T;
}

export type EditorialRegion = 'west' | 'mena' | 'neutral';
export type EditorialPageType = 'comparison' | 'article';
export type ListicleRegionHint =
  | 'northamerica'
  | 'europe'
  | 'gcc'
  | 'mena'
  | 'africa'
  | 'latam'
  | 'apac';

export type EditorialAuthor = {
  id: string;
  name: string;
  slug: string;
  jobTitle: string;
};

/** The six authors rotated on new articles in every region, all titled Global Research Manager. */
export const WESTERN_AUTHORS: readonly EditorialAuthor[] = [
  {
    id: '5373a02d-e67d-4415-9739-33ee8f4da7e2',
    name: 'Laura McConaughey',
    slug: 'laura-mcconaughey',
    jobTitle: 'Global Research Manager',
  },
  {
    id: '498ba300-bfab-4a76-b256-b2139d4d66fe',
    name: 'Sarah Chen',
    slug: 'sarah-chen',
    jobTitle: 'Global Research Manager',
  },
  {
    id: '6263dcc8-994f-4cd1-9228-7e92332659d3',
    name: 'Martha DeVito',
    slug: 'martha-devito',
    jobTitle: 'Global Research Manager',
  },
  {
    id: '7acabff7-aae6-4d8a-a667-91e21a235bcb',
    name: 'Anna Cuban',
    slug: 'anna-cuban',
    jobTitle: 'Global Research Manager',
  },
  {
    id: '4e924019-dd92-48cf-899b-3bd63c266dd3',
    name: 'Armela Belba',
    slug: 'armela-belba',
    jobTitle: 'Global Research Manager',
  },
  {
    id: '5e67519a-1cdc-4b57-a881-29391db4accd',
    name: 'Ivona Gunjova',
    slug: 'ivona-gunjova',
    jobTitle: 'Global Research Manager',
  },
] as const;

/** MENA roster in Sanity; getEditorialAuthor() returns these for Middle East paths. */
export const MENA_AUTHORS: readonly EditorialAuthor[] = [
  {
    id: 'SIsz67NbFQI3M2UuZVXjTU',
    name: 'Mohammad Ashour',
    slug: 'mohammad-ashour',
    jobTitle: 'Research Lead, MENA',
  },
  {
    id: 'c6ebc107-eb06-42a6-86b9-de8497424677',
    name: 'Dina Ibrahim',
    slug: 'dina-ibrahim',
    jobTitle: 'Healthcare Analyst, GCC',
  },
] as const;

export const ALSAADANY_AUTHOR: EditorialAuthor = {
  id: '11ed7ad8-6b57-4358-ac18-a9f32105dab6',
  name: 'Mohammad Alsaadany',
  slug: 'mohammad-alsaadany',
  jobTitle: ALSAADANY_JOB_TITLE,
};

/** Profile linked from his name on the site. JSON-LD `url` uses this English URL. */
export const ALSAADANY_PROFILE_URL = 'https://www.alsaadany.com/bionixus/';
/** Arabic-script name links. */
export const ALSAADANY_PROFILE_URL_AR = 'https://www.alsaadany.com/ar/bionixus/';
/** Added to Person `sameAs`. */
export const ALSAADANY_SAME_AS_URL = 'https://www.alsaadany.com/';
/** Owned LinkedIn profile. Publication URLs never go in `sameAs`. */
export const ALSAADANY_LINKEDIN_URL = 'https://www.linkedin.com/in/mohammad-alsaadany';

const ALSAADANY_SAME_AS = [ALSAADANY_LINKEDIN_URL, ALSAADANY_SAME_AS_URL] as const;

const ALSAADANY_WORKS_FOR = {
  '@type': 'Organization' as const,
  '@id': 'https://www.bionixus.com/#organization',
  name: 'BioNixus',
};

const ALSAADANY_NAMES = new Set([
  'mohammad alsaadany',
  'dr. mohammad alsaadany',
  'dr mohammad alsaadany',
]);

const ALSAADANY_AR_NAMES = new Set([
  'محمد السعداني',
  'د. محمد السعداني',
  'د محمد السعداني',
  'محمد السعدني',
  'د. محمد السعدني',
]);

const WESTERN_COUNTRY_SLUGS = new Set([
  'united-states',
  'usa',
  'canada',
  'uk',
  'united-kingdom',
  'germany',
  'france',
  'italy',
  'spain',
  'netherlands',
  'sweden',
  'ireland',
  'poland',
  'belgium',
  'switzerland',
  'denmark',
  'turkey',
  'europe',
]);

const MENA_COUNTRY_SLUGS = new Set([
  'saudi-arabia',
  'ksa',
  'uae',
  'united-arab-emirates',
  'egypt',
  'kuwait',
  'qatar',
  'bahrain',
  'oman',
  'jordan',
  'lebanon',
  'iraq',
  'morocco',
  'algeria',
  'tunisia',
  'iran',
  'dubai',
  'abu-dhabi',
  'riyadh',
  'gcc',
  'mena',
]);

function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pickStable<T>(items: readonly T[], seed: string): T {
  return items[hashSeed(seed) % items.length];
}

export function isAlsaadanyName(name: string | undefined): boolean {
  return Boolean(name && ALSAADANY_NAMES.has(name.trim().toLowerCase()));
}

export function isAlsaadanyArabicName(name: string | undefined): boolean {
  return Boolean(name && ALSAADANY_AR_NAMES.has(name.trim()));
}

export function isAlsaadanyDisplayName(name: string | undefined): boolean {
  return isAlsaadanyName(name) || isAlsaadanyArabicName(name);
}

/** English profile for Latin names; Arabic profile when the visible name is Arabic. */
export function alsaadanyProfileUrl(name: string | undefined): string | null {
  if (isAlsaadanyArabicName(name)) return ALSAADANY_PROFILE_URL_AR;
  if (isAlsaadanyName(name)) return ALSAADANY_PROFILE_URL;
  return null;
}

const ALSAADANY_LINKEDIN_PATHS = new Set([
  '/in/mohammad-alsaadany',
  '/in/dr-mohammad-alsaadany',
]);

/** True for Mohammad Alsaadany's LinkedIn profile, including the dr- prefix and a trailing slash. */
export function isAlsaadanyLinkedInUrl(url: string | undefined): boolean {
  if (!url?.trim()) return false;
  try {
    const parsed = new URL(url.trim());
    const host = parsed.hostname.replace(/^www\./, '').toLowerCase();
    if (host !== 'linkedin.com') return false;
    const path = parsed.pathname.replace(/\/+$/, '').toLowerCase();
    return ALSAADANY_LINKEDIN_PATHS.has(path);
  } catch {
    return false;
  }
}

/**
 * LinkedIn to show and put in JSON-LD for this author.
 * Empty when unset. Alsaadany's profile is not reused for a different person.
 */
export function authorLinkedInForDisplay(name: string | undefined, url: string | undefined): string | undefined {
  const trimmed = url?.trim();
  if (!trimmed) return undefined;
  if (!isAlsaadanyDisplayName(name) && isAlsaadanyLinkedInUrl(trimmed)) return undefined;
  return trimmed;
}

/**
 * Person / author JSON-LD for Mohammad Alsaadany.
 * This is the only place that sets his `url` (the English profile).
 * `sameAs` is only his LinkedIn profile and https://www.alsaadany.com/.
 * Legacy titles, including any "AMEA Director..." variant, become Director.
 * Any other explicit jobTitle is kept. Does not add honorificPrefix.
 */
export function withAlsaadanyPersonJsonLd<T extends object>(person: T): T {
  const name = 'name' in person && typeof (person as { name?: unknown }).name === 'string'
    ? (person as { name: string }).name
    : undefined;
  if (!isAlsaadanyDisplayName(name)) return person;
  const rawTitle = 'jobTitle' in person && typeof (person as { jobTitle?: unknown }).jobTitle === 'string'
    ? (person as { jobTitle: string }).jobTitle
    : undefined;
  const subjectOf = alsaadanyHitSubjectOf();
  return {
    ...person,
    url: ALSAADANY_PROFILE_URL,
    sameAs: [...ALSAADANY_SAME_AS],
    jobTitle: canonicalAlsaadanyJobTitle(rawTitle),
    worksFor: ALSAADANY_WORKS_FOR,
    ...(subjectOf ? { subjectOf } : {}),
  } as T;
}

export function isComparisonPath(path: string): boolean {
  const p = path.toLowerCase();
  return (
    /top[-/].*market-research-companies/.test(p) ||
    /best[-/].*market-research/.test(p) ||
    /market-research-firms/.test(p) ||
    /iqvia-alternative/.test(p) ||
    /nielsen-alternative/.test(p) ||
    /kantar-health-alternative/.test(p) ||
    /gfk-alternative/.test(p)
  );
}

export function editorialRegionFromListicleRegion(region: ListicleRegionHint | string | undefined): EditorialRegion {
  if (region === 'northamerica' || region === 'europe') return 'west';
  if (region === 'gcc' || region === 'mena') return 'mena';
  return 'neutral';
}

export function editorialRegionFromCountrySlug(slug: string | undefined): EditorialRegion {
  if (!slug) return 'neutral';
  const key = slug.toLowerCase();
  if (WESTERN_COUNTRY_SLUGS.has(key)) return 'west';
  if (MENA_COUNTRY_SLUGS.has(key)) return 'mena';
  return 'neutral';
}

export function editorialRegionFromPath(path: string): EditorialRegion {
  const p = path.toLowerCase();
  if (
    /usa|united-states|canada|germany|france|italy|spain|espana|deutschland|italia|francia|europa|netherlands|sweden|ireland|poland|belgium|switzerland|denmark|united-kingdom|\/uk(?:-|$|\/)|europe|turkey|fda|ema|cms|pbm|amnog|cadth/.test(
      p,
    )
  ) {
    return 'west';
  }
  if (
    /saudi|ksa|uae|emirates|egypt|kuwait|qatar|bahrain|oman|jordan|lebanon|iraq|morocco|algeria|tunisia|iran|dubai|abu-dhabi|riyadh|gcc|mena|middle-east/.test(
      p,
    )
  ) {
    return 'mena';
  }
  return 'neutral';
}

export function getEditorialAuthor(options: {
  path: string;
  region?: ListicleRegionHint | string;
  countrySlug?: string;
  pageType?: EditorialPageType;
}): EditorialAuthor {
  const pageType: EditorialPageType =
    options.pageType ?? (isComparisonPath(options.path) ? 'comparison' : 'article');
  void pageType;
  const region: EditorialRegion =
    editorialRegionFromListicleRegion(options.region) !== 'neutral'
      ? editorialRegionFromListicleRegion(options.region)
      : editorialRegionFromCountrySlug(options.countrySlug) !== 'neutral'
        ? editorialRegionFromCountrySlug(options.countrySlug)
        : editorialRegionFromPath(options.path);

  if (region === 'west') {
    return pickStable(WESTERN_AUTHORS, options.path);
  }
  if (region === 'mena') {
    return pickStable(MENA_AUTHORS, options.path);
  }
  // APAC / LATAM / unscoped pages use the six rotating authors.
  return pickStable(WESTERN_AUTHORS, options.path);
}

export function getEditorialAuthorForCountrySlug(slug: string): EditorialAuthor | null {
  const region = editorialRegionFromCountrySlug(slug);
  if (region === 'neutral') return null;
  return getEditorialAuthor({
    path: `/healthcare-market-research/${slug}`,
    countrySlug: slug,
    pageType: 'article',
  });
}

export function personAuthorJsonLd(author: EditorialAuthor) {
  return withAlsaadanyPersonJsonLd({
    '@type': 'Person' as const,
    name: author.name,
    jobTitle: author.jobTitle,
    worksFor: ALSAADANY_WORKS_FOR,
  });
}

export function authorByline(author: EditorialAuthor, published: string): string {
  return `Published ${published} · By ${author.name}`;
}
