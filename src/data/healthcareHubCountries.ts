/** Every live `/healthcare-market-research/{slug}` country hub, grouped for navigation. */
export const HEALTHCARE_HUB_COUNTRY_GROUPS: { region: string; slugs: string[] }[] = [
  {
    region: 'Americas',
    slugs: ['united-states', 'canada', 'brazil'],
  },
  {
    region: 'Europe',
    slugs: ['uk', 'germany', 'france', 'italy', 'spain', 'europe'],
  },
  {
    region: 'MENA & GCC',
    slugs: ['saudi-arabia', 'uae', 'egypt', 'qatar', 'kuwait', 'oman', 'bahrain', 'turkey'],
  },
  {
    region: 'Asia-Pacific',
    slugs: ['japan', 'china', 'india', 'south-korea', 'singapore', 'australia'],
  },
  {
    region: 'City hubs (MENA)',
    slugs: ['dubai', 'abu-dhabi', 'riyadh', 'jeddah'],
  },
];

export const HEALTHCARE_HUB_COUNTRY_SLUGS = HEALTHCARE_HUB_COUNTRY_GROUPS.flatMap(
  (group) => group.slugs,
);
