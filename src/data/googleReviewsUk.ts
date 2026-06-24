/**
 * BioNixus UK Google Business Profile reviews (London listing).
 * Source: https://maps.app.goo.gl/h8eEUQ9V3TryGF1t7
 * Last verified: 2026-06-25
 */

export const BIONIXUS_UK_GBP_MAPS_URL = 'https://maps.app.goo.gl/h8eEUQ9V3TryGF1t7';

export const BIONIXUS_UK_GBP_PLACE_ID = '/g/11vy7d4_n1';

export type GoogleReviewUk = {
  author: string;
  rating: number;
  /** ISO date when the review was posted (approximate when GBP shows relative dates). */
  datePublished: string;
  body?: string;
};

export const BIONIXUS_UK_AGGREGATE_RATING = {
  ratingValue: 5,
  reviewCount: 6,
  bestRating: 5,
  worstRating: 1,
} as const;

/** Published Google reviews with visible review text (excludes unpublished or rating-only entries). */
export const BIONIXUS_UK_GOOGLE_REVIEWS: GoogleReviewUk[] = [
  {
    author: 'Armela Belba',
    rating: 5,
    datePublished: '2025-06-15',
    body:
      'I had a great experience working with BioNixus. Their team was professional, knowledgeable, and attentive to our needs. They delivered smart, science-based solutions with clear communication throughout. Highly recommended for anyone in the biotech space.',
  },
  {
    author: 'Anna Liubarchuk',
    rating: 5,
    datePublished: '2025-06-15',
    body: 'A truly professional team — knowledgeable, efficient, and great to collaborate with.',
  },
  {
    author: 'Ivona Gunjova',
    rating: 5,
    datePublished: '2025-06-15',
    body: 'The most emerging company on the Market currently regarding AI tools.',
  },
  {
    author: 'Ahmed Elswesy',
    rating: 5,
    datePublished: '2025-06-15',
    body: 'Very professional company',
  },
];
