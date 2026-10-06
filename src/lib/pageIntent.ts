/**
 * Lightweight page-intent classification for site-wide chrome (sticky bar, exit intent).
 * Kept regex-only so it does not pull the company-directory registry into every bundle;
 * `pageIntent.test.ts` pins DIRECTORY_ENTITY_PREFIXES to the registry.
 */

export const DIRECTORY_ENTITY_PREFIXES = [
  'pharmaceutical-companies',
  'medical-device-companies',
  'pharmaceutical-distributors',
  'pharmacy-chains',
  'hospital-groups',
  'biotech-companies',
  'cro-companies',
  'health-insurers',
  'fmcg-companies',
  'retail-companies',
  'real-estate-companies',
  'banks',
  'automotive-distributors',
  'food-beverage-companies',
  'construction-companies',
  'cosmetics-companies',
  'hotel-groups',
  'logistics-companies',
  'manufacturing-companies',
] as const;

const LOCALE_PREFIX = /^\/(?:ar|de|fr|es|zh|tr|it|pt|ru|ja|ko)(?=\/|$)/;

const DIRECTORY_PATTERN = new RegExp(
  `^/(?:${DIRECTORY_ENTITY_PREFIXES.join('|')})(?:-[a-z0-9-]+)?$`,
);

const DIRECTORY_EXTRA_PATHS = new Set(['/top-pharmacies-saudi-arabia']);

const BUYER_PATTERNS: RegExp[] = [
  /^\/healthcare-market-research(?:\/|$)/,
  /^\/services(?:\/|$)/,
  /^\/pricing$/,
  /^\/heor-consulting$/,
  /-alternatives?(?:-|$)/,
  /^\/bionixus-vs-/,
  /^\/insights\/top-[a-z0-9-]*market-research/,
  /market-research(?!-report)/,
  /market-access(?:-research|-consulting)/,
];

function normalizePath(pathname: string): string {
  const bare = pathname.split(/[?#]/)[0].toLowerCase().replace(/\/+$/, '') || '/';
  return bare.replace(LOCALE_PREFIX, '') || '/';
}

/** Company/entity listing pages — list-seeking traffic that should not get meeting prompts. */
export function isDirectoryPath(pathname: string): boolean {
  const path = normalizePath(pathname);
  return DIRECTORY_EXTRA_PATHS.has(path) || DIRECTORY_PATTERN.test(path);
}

/** Pages whose visitors are evaluating a research supplier. */
export function isBuyerIntentPath(pathname: string): boolean {
  const path = normalizePath(pathname);
  if (path.startsWith('/blog/') || isDirectoryPath(path)) return false;
  return BUYER_PATTERNS.some((re) => re.test(path));
}
