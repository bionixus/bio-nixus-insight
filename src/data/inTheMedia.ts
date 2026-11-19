/**
 * External coverage linked from /news#in-the-media.
 * Publication logos are not stored for display: we have no licence to use them.
 */

export type InTheMediaItem = {
  id: string;
  date: string;
  headline: string;
  summary: string;
  url: string;
  publicationName: string;
  publicationUrl?: string;
  publicationLogoSrc?: string;
  authors?: string[];
  type?: 'guest-article' | 'mention' | 'interview' | 'quote';
};

export type FeaturedInCredit = {
  headline: string;
  url: string;
  publicationName: string;
  date?: string;
  summary?: string;
};

export const IN_THE_MEDIA: readonly InTheMediaItem[] = [
  {
    id: 'healthcare-it-today-2026-11-13-ehr-access',
    date: '2026-11-13',
    headline:
      'When Your Billing Team is Overseas: What Data Residency Laws Teach About EHR Access',
    summary:
      'On 13 November 2026, Healthcare IT Today published a guest article by Mohammad Alsaadany, Director at BioNixus, on what data-residency rules mean when an outside team can open health records from another country. The piece argues that access control, residency and a business associate agreement are three different questions, and that a signed contract is not proof of where data sits.',
    url: 'https://www.healthcareittoday.com/2026/11/13/when-your-billing-team-is-overseas-what-data-residency-laws-teach-about-ehr-access/',
    publicationName: 'Healthcare IT Today',
    publicationUrl: 'https://www.healthcareittoday.com/',
    authors: ['Mohammad Alsaadany'],
    type: 'guest-article',
  },
];

const MOHAMMAD_NAME = 'mohammad alsaadany';

function byDateDesc(a: { date?: string }, b: { date?: string }): number {
  return (b.date ?? '').localeCompare(a.date ?? '');
}

export function inTheMediaNewestFirst(
  items: readonly InTheMediaItem[] = IN_THE_MEDIA,
): InTheMediaItem[] {
  return [...items].sort(byDateDesc);
}

function isMohammadAuthor(name: string | undefined): boolean {
  return name?.trim().toLowerCase() === MOHAMMAD_NAME;
}

/** Credits shown on Mohammad's author card when Sanity `featuredIn` is still empty. */
export function mohammadFeaturedInFallback(): FeaturedInCredit[] {
  return inTheMediaNewestFirst(
    IN_THE_MEDIA.filter((item) => item.authors?.some((author) => isMohammadAuthor(author))),
  ).map((item) => ({
    headline: item.headline,
    url: item.url,
    publicationName: item.publicationName,
    date: item.date,
    summary: item.summary,
  }));
}

export function mediaCreditsForAuthor(options: {
  isMohammad: boolean;
  featuredIn?: readonly FeaturedInCredit[] | null;
}): FeaturedInCredit[] {
  const fromCms = (options.featuredIn ?? [])
    .map((item) => ({
      headline: item.headline.trim(),
      url: item.url.trim(),
      publicationName: item.publicationName.trim(),
      ...(item.date?.trim() ? { date: item.date.trim() } : {}),
      ...(item.summary?.trim() ? { summary: item.summary.trim() } : {}),
    }))
    .filter((item) => item.headline && item.url && item.publicationName)
    .sort(byDateDesc);
  if (fromCms.length > 0) return fromCms;
  if (!options.isMohammad) return [];
  return mohammadFeaturedInFallback();
}

/** Person `subjectOf` for the Healthcare IT Today guest article. The article URL is not a sameAs profile. */
export function alsaadanyHitSubjectOf():
  | {
      '@type': 'NewsArticle';
      headline: string;
      url: string;
      datePublished: string;
      publisher: { '@type': 'Organization'; name: string; url: string };
    }
  | undefined {
  const item = inTheMediaNewestFirst().find(
    (entry) =>
      entry.id === 'healthcare-it-today-2026-11-13-ehr-access' &&
      Boolean(entry.publicationUrl),
  );
  if (!item?.publicationUrl) return undefined;
  return {
    '@type': 'NewsArticle',
    headline: item.headline,
    url: item.url,
    datePublished: item.date,
    publisher: {
      '@type': 'Organization',
      name: item.publicationName,
      url: item.publicationUrl,
    },
  };
}
