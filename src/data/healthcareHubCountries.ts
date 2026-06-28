import { sortSegmentCountrySlugs } from './segmentCountryOrder';

/** Every live `/healthcare-market-research/{slug}` country hub, grouped for navigation. */
export const HEALTHCARE_HUB_COUNTRY_GROUPS: { region: string; slugs: string[] }[] = [
  {
    region: 'Americas',
    slugs: sortSegmentCountrySlugs(['united-states', 'canada', 'brazil']),
  },
  {
    region: 'Europe',
    slugs: sortSegmentCountrySlugs(['uk', 'germany', 'france', 'italy', 'spain', 'europe']),
  },
  {
    region: 'MENA & GCC',
    slugs: sortSegmentCountrySlugs([
      'saudi-arabia',
      'uae',
      'egypt',
      'qatar',
      'kuwait',
      'oman',
      'bahrain',
      'turkey',
    ]),
  },
  {
    region: 'Asia-Pacific',
    slugs: sortSegmentCountrySlugs(['japan', 'china', 'india', 'south-korea', 'singapore', 'australia']),
  },
  {
    region: 'City hubs (MENA)',
    slugs: sortSegmentCountrySlugs(['dubai', 'abu-dhabi', 'riyadh', 'jeddah']),
  },
];

export const HEALTHCARE_HUB_COUNTRY_SLUGS = sortSegmentCountrySlugs(
  HEALTHCARE_HUB_COUNTRY_GROUPS.flatMap((group) => group.slugs),
);
