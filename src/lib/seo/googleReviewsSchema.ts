import {
  BIONIXUS_UK_AGGREGATE_RATING,
  BIONIXUS_UK_GBP_MAPS_URL,
  BIONIXUS_UK_GOOGLE_REVIEWS,
} from '@/data/googleReviewsUk';
import { ORG_ID } from '@/lib/seo/organization';

const BASE_URL = 'https://www.bionixus.com';
export const UK_LOCAL_BUSINESS_ID = `${BASE_URL}/#uk-localbusiness`;

/** LocalBusiness node with AggregateRating + Review snippets for BioNixus UK (Google GBP). */
export function buildUkGoogleReviewsLocalBusiness(inLanguage = 'en'): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': UK_LOCAL_BUSINESS_ID,
    name: 'BioNixus UK',
    description:
      'BioNixus UK — pharmaceutical and healthcare market research corporate office in London.',
    url: BASE_URL,
    telephone: '+44-7727-666682',
    image: `${BASE_URL}/og-image.png`,
    parentOrganization: { '@id': ORG_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '128 City Road',
      addressLocality: 'London',
      postalCode: 'EC1V 2NP',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.5267262,
      longitude: -0.088244,
    },
    sameAs: [BIONIXUS_UK_GBP_MAPS_URL],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(BIONIXUS_UK_AGGREGATE_RATING.ratingValue),
      reviewCount: String(BIONIXUS_UK_AGGREGATE_RATING.reviewCount),
      bestRating: String(BIONIXUS_UK_AGGREGATE_RATING.bestRating),
      worstRating: String(BIONIXUS_UK_AGGREGATE_RATING.worstRating),
    },
    review: BIONIXUS_UK_GOOGLE_REVIEWS.filter((r) => r.body?.trim()).map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      datePublished: review.datePublished,
      reviewBody: review.body,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(review.rating),
        bestRating: '5',
        worstRating: '1',
      },
    })),
    inLanguage,
  };
}
