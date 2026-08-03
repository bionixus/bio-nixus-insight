/**
 * Query matrix for AEO citation tracking.
 *
 * Three query families, one row per rollout country. Phases match the AEO
 * rollout plan so we can chart movement per phase instead of guessing.
 */

export const QUERY_TEMPLATES = [
  { id: 'general', template: 'Top market research companies in {country}' },
  { id: 'pharma', template: 'Top pharmaceutical market research companies in {country}' },
  { id: 'healthcare', template: 'Top healthcare market research companies in {country}' },
];

/** Rollout order mirrors the plan: GCC -> Middle East -> Europe -> NA -> BR/AU. */
export const ROLLOUT_COUNTRIES = [
  { country: 'Saudi Arabia', phase: 1 },
  { country: 'the UAE', phase: 1 },
  { country: 'Qatar', phase: 1 },
  { country: 'Kuwait', phase: 1 },
  { country: 'Oman', phase: 1 },
  { country: 'Bahrain', phase: 1 },
  { country: 'Egypt', phase: 2 },
  { country: 'Turkey', phase: 2 },
  { country: 'Jordan', phase: 2 },
  { country: 'Lebanon', phase: 2 },
  { country: 'Iraq', phase: 2 },
  { country: 'the United Kingdom', phase: 3 },
  { country: 'Germany', phase: 3 },
  { country: 'France', phase: 3 },
  { country: 'Italy', phase: 3 },
  { country: 'Spain', phase: 3 },
  { country: 'the United States', phase: 4 },
  { country: 'Canada', phase: 4 },
  { country: 'Brazil', phase: 5 },
  { country: 'Australia', phase: 5 },
];

/** Cartesian product of templates x countries, optionally filtered by phase. */
export function buildQueryMatrix({ phases } = {}) {
  const countries = phases?.length
    ? ROLLOUT_COUNTRIES.filter((c) => phases.includes(c.phase))
    : ROLLOUT_COUNTRIES;

  return countries.flatMap(({ country, phase }) =>
    QUERY_TEMPLATES.map((t) => ({
      queryId: `${t.id}::${country}`,
      family: t.id,
      country,
      phase,
      query: t.template.replace('{country}', country),
    })),
  );
}

/** Brand spellings an engine might produce. Matched case-insensitively. */
export const BRAND_PATTERNS = [/\bbio\s?nixus\b/i, /\bbionixus\b/i];

export const BRAND_DOMAIN = 'bionixus.com';
