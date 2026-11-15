export const STATS = {
  countries: '48',
  /** Compact headline: 120+ studies a year */
  projects: '120+',
  projectsAnnual: '120+',
  /** Studies completed in calendar year 2025. */
  studies2025: '120',
  /** Studies completed in 2026, year to date. */
  studies2026Ytd: '127',
  therapyAreas: '14+',
  yearsExperience: '15+',
  clients: '118',
} as const;

/** Short label under a 120+ figure. Reads with the value as "120+ studies a year (127 in 2026 YTD)". */
export const STATS_STUDIES_YEAR_LABEL = 'studies a year (127 in 2026 YTD)' as const;

/** Verified annual run-rate plus both year counts. 127 is 2026 year-to-date, never 2025. */
export const STATS_PROJECTS_PHRASE =
  `${STATS.projectsAnnual} studies a year (${STATS.studies2025} in 2025; ${STATS.studies2026Ytd} in 2026 YTD)` as const;
