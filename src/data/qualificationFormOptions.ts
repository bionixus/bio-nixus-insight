/** Priority markets for the "Markets of interest" multi-select — matches ORG_AREA_SERVED's core countries. */
export const QUALIFICATION_FORM_MARKETS = [
  'Saudi Arabia',
  'United Arab Emirates',
  'Qatar',
  'Kuwait',
  'Oman',
  'Bahrain',
  'Egypt',
  'Turkey',
  'United States',
  'United Kingdom',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Brazil',
  'China',
  'South Korea',
  'Singapore',
  'Malaysia',
] as const;

export const QUALIFICATION_FORM_NEEDS = [
  'Primary market research',
  'Market access',
  'HEOR / RWE',
  'Syndicated report',
  'Other',
] as const;

export const QUALIFICATION_FORM_TIMELINES = ['Less than 1 month', '1-3 months', 'Exploring'] as const;

export const QUALIFICATION_FORM_BUDGETS = ['Under $20K', '$20K-50K', '$50K-150K', '$150K+'] as const;
