/**
 * Canonical editorial roster — names and Sanity IDs from production authors.
 * Do not invent names. See .cursor/rules/editorial-authors.mdc.
 */

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

/** European / American names in Sanity — use on USA, Canada, and Europe. */
export const WESTERN_AUTHORS: readonly EditorialAuthor[] = [
  {
    id: '5373a02d-e67d-4415-9739-33ee8f4da7e2',
    name: 'Laura McConaughey',
    slug: 'laura-mcconaughey',
    jobTitle: 'Senior Healthcare Analyst',
  },
  {
    id: '498ba300-bfab-4a76-b256-b2139d4d66fe',
    name: 'Sarah Chen',
    slug: 'sarah-chen',
    jobTitle: 'Healthcare Market Research Analyst',
  },
  {
    id: '6263dcc8-994f-4cd1-9228-7e92332659d3',
    name: 'Martha DeVito',
    slug: 'martha-devito',
    jobTitle: 'Principal Research Analyst',
  },
  {
    id: '7acabff7-aae6-4d8a-a667-91e21a235bcb',
    name: 'Anna Cuban',
    slug: 'anna-cuban',
    jobTitle: 'Research Analyst',
  },
  {
    id: '4e924019-dd92-48cf-899b-3bd63c266dd3',
    name: 'Armela Belba',
    slug: 'armela-belba',
    jobTitle: 'European Research Lead',
  },
  {
    id: '5e67519a-1cdc-4b57-a881-29391db4accd',
    name: 'Ivona Gunjova',
    slug: 'ivona-gunjova',
    jobTitle: 'Healthcare Research Analyst',
  },
] as const;

/** Arab names in Sanity — use on Middle East / GCC / MENA (not Alsaadany on comparison pages). */
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
  jobTitle: 'Director, BioNixus Healthcare Market Research',
};

const ALSAADANY_NAMES = new Set([
  'mohammad alsaadany',
  'dr. mohammad alsaadany',
  'dr mohammad alsaadany',
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
  // APAC / LATAM / unscoped comparison pages: Western names, never Alsaadany.
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
  return {
    '@type': 'Person' as const,
    name: author.name,
    jobTitle: author.jobTitle,
    worksFor: {
      '@type': 'Organization' as const,
      '@id': 'https://www.bionixus.com/#organization',
      name: 'BioNixus',
    },
  };
}

export function authorByline(author: EditorialAuthor, published: string): string {
  return `Published ${published} · By ${author.name}`;
}
