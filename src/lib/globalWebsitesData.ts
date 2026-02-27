export type CountryLink = {
  countryCode: string;
  countryName: string;
  languages: string[];
  url: string;
};

export type RegionGroup = {
  regionKey: string;
  regionName: string;
  countries: CountryLink[];
};

export type ResourceLink = {
  label: string;
  url: string;
};

export type CountryDirectoryItem = CountryLink & {
  regionKey: string;
  regionName: string;
  slug: string;
};

export const topMarkets: CountryLink[] = [
  { countryCode: 'US', countryName: 'United States', languages: ['EN'], url: 'https://www.bionixus.com/' },
  { countryCode: 'GB', countryName: 'United Kingdom', languages: ['EN'], url: 'https://www.bionixus.com/' },
  { countryCode: 'SA', countryName: 'Saudi Arabia', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
  { countryCode: 'AE', countryName: 'United Arab Emirates', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
  { countryCode: 'DE', countryName: 'Germany', languages: ['DE', 'EN'], url: 'https://www.bionixus.com/de' },
  { countryCode: 'FR', countryName: 'France', languages: ['FR', 'EN'], url: 'https://www.bionixus.com/fr' },
];

export const regionGroups: RegionGroup[] = [
  {
    regionKey: 'americas',
    regionName: 'Americas',
    countries: [
      { countryCode: 'US', countryName: 'United States', languages: ['EN'], url: 'https://www.bionixus.com/' },
      { countryCode: 'CA', countryName: 'Canada', languages: ['EN', 'FR'], url: 'https://www.bionixus.com/fr' },
      { countryCode: 'MX', countryName: 'Mexico', languages: ['ES', 'EN'], url: 'https://www.bionixus.com/es' },
    ],
  },
  {
    regionKey: 'europe',
    regionName: 'Europe',
    countries: [
      { countryCode: 'GB', countryName: 'United Kingdom', languages: ['EN'], url: 'https://www.bionixus.com/' },
      { countryCode: 'DE', countryName: 'Germany', languages: ['DE', 'EN'], url: 'https://www.bionixus.com/de' },
      { countryCode: 'FR', countryName: 'France', languages: ['FR', 'EN'], url: 'https://www.bionixus.com/fr' },
      { countryCode: 'ES', countryName: 'Spain', languages: ['ES', 'EN'], url: 'https://www.bionixus.com/es' },
      { countryCode: 'TR', countryName: 'Turkey', languages: ['TR', 'EN'], url: 'https://www.bionixus.com/' },
      { countryCode: 'CH', countryName: 'Switzerland', languages: ['DE', 'FR', 'EN'], url: 'https://www.bionixus.com/' },
      { countryCode: 'DK', countryName: 'Denmark', languages: ['DA', 'EN'], url: 'https://www.bionixus.com/' },
      { countryCode: 'SE', countryName: 'Sweden', languages: ['SV', 'EN'], url: 'https://www.bionixus.com/' },
      { countryCode: 'IT', countryName: 'Italy', languages: ['IT', 'EN'], url: 'https://www.bionixus.com/' },
    ],
  },
  {
    regionKey: 'asia-pacific',
    regionName: 'Asia-Pacific',
    countries: [
      { countryCode: 'CN', countryName: 'China', languages: ['ZH', 'EN'], url: 'https://www.bionixus.com/zh' },
      { countryCode: 'JP', countryName: 'Japan', languages: ['EN'], url: 'https://www.bionixus.com/' },
      { countryCode: 'SG', countryName: 'Singapore', languages: ['EN'], url: 'https://www.bionixus.com/' },
    ],
  },
  {
    regionKey: 'middle-east-africa',
    regionName: 'Middle East & Africa',
    countries: [
      { countryCode: 'SA', countryName: 'Saudi Arabia', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
      { countryCode: 'AE', countryName: 'United Arab Emirates', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
      { countryCode: 'EG', countryName: 'Egypt', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
      { countryCode: 'QA', countryName: 'Qatar', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
      { countryCode: 'KW', countryName: 'Kuwait', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
      { countryCode: 'OM', countryName: 'Oman', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
      { countryCode: 'BH', countryName: 'Bahrain', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
      { countryCode: 'IQ', countryName: 'Iraq', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
      { countryCode: 'LY', countryName: 'Libya', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
      { countryCode: 'LB', countryName: 'Lebanon', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
      { countryCode: 'JO', countryName: 'Jordan', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
      { countryCode: 'TN', countryName: 'Tunisia', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
      { countryCode: 'DZ', countryName: 'Algeria', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
      { countryCode: 'MA', countryName: 'Morocco', languages: ['EN', 'AR'], url: 'https://www.bionixus.com/ar' },
      { countryCode: 'KE', countryName: 'Kenya', languages: ['EN'], url: 'https://www.bionixus.com/' },
      { countryCode: 'NG', countryName: 'Nigeria', languages: ['EN'], url: 'https://www.bionixus.com/' },
      { countryCode: 'ZA', countryName: 'South Africa', languages: ['EN'], url: 'https://www.bionixus.com/' },
    ],
  },
];

export const globalResources: ResourceLink[] = [
  { label: 'Resources', url: '/resources' },
  { label: 'Case Studies', url: '/case-studies' },
  { label: 'Services', url: '/services' },
  { label: 'Contact', url: '/contact' },
];

export const formatLanguages = (languages: string[]) => languages.join(' | ');

function slugifyCountry(countryName: string) {
  return countryName.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export function getCountryDirectory(): CountryDirectoryItem[] {
  const byCode = new Map<string, CountryDirectoryItem>();

  regionGroups.forEach((group) => {
    group.countries.forEach((country) => {
      if (!byCode.has(country.countryCode)) {
        byCode.set(country.countryCode, {
          ...country,
          regionKey: group.regionKey,
          regionName: group.regionName,
          slug: slugifyCountry(country.countryName),
        });
      }
    });
  });

  return Array.from(byCode.values());
}

export function getCountryBySlug(slug: string): CountryDirectoryItem | undefined {
  return getCountryDirectory().find((country) => country.slug === slug);
}
