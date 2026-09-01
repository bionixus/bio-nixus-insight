/**
 * Canonical “best / top market research companies in [country]” URL for each
 * pharmaceutical-companies directory. Omit a slug when no listicle exists yet.
 */
export const PHARMA_DIRECTORY_LISTICLE: Record<string, { to: string; label: string }> = {
  egypt: {
    to: '/insights/top-market-research-companies-egypt-2026',
    label: 'Top market research companies in Egypt (2026)',
  },
  uae: {
    to: '/insights/top-market-research-companies-uae-2026',
    label: 'Top market research companies in the UAE (2026)',
  },
  'saudi-arabia': {
    to: '/insights/top-market-research-companies-saudi-arabia-2026',
    label: 'Top market research companies in Saudi Arabia (2026)',
  },
  iraq: {
    to: '/insights/top-market-research-companies-iraq-2026',
    label: 'Top market research companies in Iraq (2026)',
  },
  qatar: {
    to: '/insights/top-market-research-companies-qatar-2026',
    label: 'Top market research companies in Qatar (2026)',
  },
  kuwait: {
    to: '/insights/top-healthcare-market-research-companies-kuwait-2026',
    label: 'Top healthcare market research companies in Kuwait (2026)',
  },
  usa: {
    to: '/insights/top-market-research-companies-usa-2026',
    label: 'Top market research companies in the USA (2026)',
  },
  uk: {
    to: '/insights/top-market-research-companies-uk-2026',
    label: 'Top market research companies in the UK (2026)',
  },
  germany: {
    to: '/insights/top-market-research-companies-germany-2026',
    label: 'Top market research companies in Germany (2026)',
  },
  brazil: {
    to: '/insights/top-market-research-companies-brazil-2026',
    label: 'Top market research companies in Brazil (2026)',
  },
  canada: {
    to: '/insights/top-market-research-companies-canada-2026',
    label: 'Top market research companies in Canada (2026)',
  },
  turkey: {
    to: '/insights/top-market-research-companies-turkey-2026',
    label: 'Top market research companies in Turkey (2026)',
  },
  india: {
    to: '/insights/top-market-research-companies-india-2026',
    label: 'Top market research companies in India (2026)',
  },
  china: {
    to: '/insights/top-market-research-companies-china-2026',
    label: 'Top market research companies in China (2026)',
  },
  japan: {
    to: '/insights/top-market-research-companies-japan-2026',
    label: 'Top market research companies in Japan (2026)',
  },
  singapore: {
    to: '/insights/top-market-research-companies-singapore-2026',
    label: 'Top market research companies in Singapore (2026)',
  },
  malaysia: {
    to: '/insights/top-market-research-companies-malaysia-2026',
    label: 'Top market research companies in Malaysia (2026)',
  },
  switzerland: {
    to: '/insights/top-market-research-companies-switzerland-2026',
    label: 'Top market research companies in Switzerland (2026)',
  },
  morocco: {
    to: '/insights/top-market-research-companies-morocco-2026',
    label: 'Top market research companies in Morocco (2026)',
  },
  oman: {
    to: '/insights/top-market-research-companies-oman-2026',
    label: 'Top market research companies in Oman (2026)',
  },
  bahrain: {
    to: '/insights/top-market-research-companies-bahrain-2026',
    label: 'Top market research companies in Bahrain (2026)',
  },
  iran: {
    to: '/insights/top-market-research-companies-iran-2026',
    label: 'Top market research companies in Iran (2026)',
  },
};

/** Reverse pair: one listicle → matching pharma directory. Wave 1 countries. */
export const LISTICLE_DIRECTORY_PAIR: Record<string, { to: string; label: string }> = {
  '/insights/top-market-research-companies-egypt-2026': {
    to: '/pharmaceutical-companies-egypt',
    label: 'Pharmaceutical companies in Egypt',
  },
  '/insights/top-market-research-companies-uae-2026': {
    to: '/pharmaceutical-companies-uae',
    label: 'Pharmaceutical companies in the UAE',
  },
  '/insights/top-healthcare-market-research-companies-kuwait-2026': {
    to: '/pharmaceutical-companies-kuwait',
    label: 'Pharmaceutical companies in Kuwait',
  },
  '/insights/top-market-research-companies-saudi-arabia-2026': {
    to: '/pharmaceutical-companies-saudi-arabia',
    label: 'Pharmaceutical companies in Saudi Arabia',
  },
  '/insights/top-market-research-companies-oman-2026': {
    to: '/pharmaceutical-companies-oman',
    label: 'Pharmaceutical companies in Oman',
  },
  '/insights/top-market-research-companies-iran-2026': {
    to: '/pharmaceutical-companies-iran',
    label: 'Pharmaceutical companies in Iran',
  },
  '/insights/top-market-research-companies-iraq-2026': {
    to: '/pharmaceutical-companies-iraq',
    label: 'Pharmaceutical companies in Iraq',
  },
  '/insights/top-market-research-companies-qatar-2026': {
    to: '/pharmaceutical-companies-qatar',
    label: 'Pharmaceutical companies in Qatar',
  },
  '/insights/top-market-research-companies-bahrain-2026': {
    to: '/pharmaceutical-companies-bahrain',
    label: 'Pharmaceutical companies in Bahrain',
  },
};

/** Maps directory display names onto QualificationForm market checkboxes. */
export const DIRECTORY_FORM_MARKET: Record<string, string> = {
  'Saudi Arabia': 'Saudi Arabia',
  'United Arab Emirates': 'United Arab Emirates',
  UAE: 'United Arab Emirates',
  'the UAE': 'United Arab Emirates',
  Egypt: 'Egypt',
  Qatar: 'Qatar',
  Oman: 'Oman',
  Bahrain: 'Bahrain',
  Kuwait: 'Kuwait',
  Iraq: 'Iraq',
  Iran: 'Iran',
  'United States': 'United States',
  USA: 'United States',
  'the USA': 'United States',
  'United Kingdom': 'United Kingdom',
  UK: 'United Kingdom',
  'the UK': 'United Kingdom',
  Germany: 'Germany',
  Brazil: 'Brazil',
  Canada: 'Canada',
  Turkey: 'Turkey',
  India: 'India',
  China: 'China',
  Japan: 'Japan',
  'South Korea': 'South Korea',
  Singapore: 'Singapore',
  Malaysia: 'Malaysia',
  Switzerland: 'Switzerland',
  Jordan: 'Jordan',
  Morocco: 'Morocco',
};

export function listicleForDirectorySlug(slug: string): { to: string; label: string } | undefined {
  return PHARMA_DIRECTORY_LISTICLE[slug];
}

export function listicleForDirectoryPath(path: string): { to: string; label: string } | undefined {
  const slug = path.replace(/^\/pharmaceutical-companies-/, '').replace(/^\//, '');
  return PHARMA_DIRECTORY_LISTICLE[slug];
}

export function formMarketForDirectory(countryName: string): string | undefined {
  return DIRECTORY_FORM_MARKET[countryName];
}

export function directoryForListiclePath(listiclePath: string): { to: string; label: string } | undefined {
  return LISTICLE_DIRECTORY_PAIR[listiclePath];
}
