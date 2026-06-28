/** Priority order for segment page country lists — shown first on B2B, B2C, and healthcare. */
export const SEGMENT_COUNTRY_PRIORITY_SLUGS: readonly string[] = [
  'usa',
  'united-states',
  'canada',
  'uk',
  'germany',
  'france',
  'italy',
  'spain',
  'europe',
  'brazil',
  'uae',
  'saudi-arabia',
];

export function segmentCountryPriority(slug: string): number {
  const index = SEGMENT_COUNTRY_PRIORITY_SLUGS.indexOf(slug);
  return index === -1 ? SEGMENT_COUNTRY_PRIORITY_SLUGS.length : index;
}

export function sortBySegmentCountryPriority<T extends { slug: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const delta = segmentCountryPriority(a.slug) - segmentCountryPriority(b.slug);
    return delta !== 0 ? delta : a.slug.localeCompare(b.slug);
  });
}

export function sortSegmentCountrySlugs(slugs: string[]): string[] {
  return [...slugs].sort((a, b) => {
    const delta = segmentCountryPriority(a) - segmentCountryPriority(b);
    return delta !== 0 ? delta : a.localeCompare(b);
  });
}
