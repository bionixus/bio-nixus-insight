import {
  BIONIXUS_UK_AGGREGATE_RATING,
  BIONIXUS_UK_GOOGLE_REVIEWS,
} from '@/data/googleReviewsUk';
import { GOOGLE_OFFICES, type GoogleOffice } from '@/data/googleLocations';
import { ORG_ID } from '@/lib/seo/organization';

const BASE_URL = 'https://www.bionixus.com';
export const UK_LOCAL_BUSINESS_ID = `${BASE_URL}/#uk-localbusiness`;

function openingHoursSpecification(office: GoogleOffice): Record<string, unknown> {
  return {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: office.openingHours.dayOfWeek,
    opens: office.openingHours.opens,
    closes: office.openingHours.closes,
  };
}

function postalAddress(office: GoogleOffice): Record<string, unknown> {
  return {
    '@type': 'PostalAddress',
    ...office.address,
  };
}

/**
 * LocalBusiness JSON-LD for one Google Business Profile.
 * Reviews / AggregateRating are attached only on the UK listing — that is the
 * only GBP with published review text we mark up. Do not copy those ratings
 * onto Organization or sibling offices (GSC “multiple aggregate ratings”).
 */
export function buildGoogleLocalBusiness(office: GoogleOffice): Record<string, unknown> {
  const node: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': office.schemaId,
    name: office.name,
    description: office.description,
    url: office.url,
    telephone: office.telephone,
    image: `${BASE_URL}/og-image.png`,
    parentOrganization: { '@id': ORG_ID },
    address: postalAddress(office),
    hasMap: office.mapsUrl,
    sameAs: [office.mapsUrl],
    openingHoursSpecification: openingHoursSpecification(office),
  };

  if (office.geo) {
    node.geo = {
      '@type': 'GeoCoordinates',
      latitude: office.geo.latitude,
      longitude: office.geo.longitude,
    };
  }

  if (office.includeReviews) {
    node.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: String(BIONIXUS_UK_AGGREGATE_RATING.ratingValue),
      reviewCount: String(BIONIXUS_UK_AGGREGATE_RATING.reviewCount),
      bestRating: String(BIONIXUS_UK_AGGREGATE_RATING.bestRating),
      worstRating: String(BIONIXUS_UK_AGGREGATE_RATING.worstRating),
    };
    node.review = BIONIXUS_UK_GOOGLE_REVIEWS.filter((r) => r.body?.trim()).map((review) => ({
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
    }));
  }

  return node;
}

export function buildAllGoogleLocalBusinesses(): Record<string, unknown>[] {
  return GOOGLE_OFFICES.map(buildGoogleLocalBusiness);
}

/**
 * Sole AggregateRating + Review owner for BioNixus UK Google Business Profile.
 * @deprecated Prefer buildGoogleLocalBusiness / buildAllGoogleLocalBusinesses.
 */
export function buildUkGoogleReviewsLocalBusiness(): Record<string, unknown> {
  const uk = GOOGLE_OFFICES.find((office) => office.id === 'uk');
  if (!uk) throw new Error('UK Google office missing');
  return buildGoogleLocalBusiness(uk);
}
