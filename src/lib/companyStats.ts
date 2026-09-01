export const STATS = {
  countries: '48',
  /** Compact headline: 120+ global projects per year */
  projects: '120+',
  projectsAnnual: '120+',
  /** Calendar-year delivery */
  projects2025: '127',
  therapyAreas: '14+',
  yearsExperience: '15+',
  clients: '118',
} as const;

/** Shared prose: annual run-rate plus 2025 delivery. */
export const STATS_PROJECTS_PHRASE =
  `${STATS.projectsAnnual} global projects annually (${STATS.projects2025} in 2025)` as const;
