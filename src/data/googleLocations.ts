/**
 * BioNixus Google Business Profile listings.
 * Captured from live Google knowledge panels / Maps on 2026-09-02.
 * Do not invent streets. Update this file when GBP NAP changes.
 */

export type GoogleOfficeId = 'us' | 'uk' | 'eg' | 'ae' | 'sa' | 'kw';

export type GoogleOffice = {
  id: GoogleOfficeId;
  schemaId: string;
  /** GBP display name */
  name: string;
  description: string;
  telephone: string;
  url: string;
  mapsUrl: string;
  placeId: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours: {
    dayOfWeek: string[];
    opens: string;
    closes: string;
  };
  /** Only attach Review / AggregateRating when this is true. */
  includeReviews: boolean;
};

const BASE = 'https://www.bionixus.com';

const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const MENA_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];

export const GOOGLE_OFFICES: GoogleOffice[] = [
  {
    id: 'us',
    schemaId: `${BASE}/#us-localbusiness`,
    name: 'BioNixus LLC USA',
    description:
      'BioNixus LLC USA — global headquarters and corporate office in Sheridan, Wyoming.',
    telephone: '+1-888-465-5557',
    url: BASE,
    mapsUrl: 'https://maps.app.goo.gl/cqLtV7gy8jGxq4JV8',
    placeId: '/g/11ycy79qbt',
    address: {
      streetAddress: '1309 Coffeen Ave Ste 1200',
      addressLocality: 'Sheridan',
      addressRegion: 'WY',
      postalCode: '82801',
      addressCountry: 'US',
    },
    geo: {
      latitude: 44.7841692,
      longitude: -106.940957,
    },
    openingHours: { dayOfWeek: WEEKDAYS, opens: '09:00', closes: '17:00' },
    includeReviews: false,
  },
  {
    id: 'uk',
    schemaId: `${BASE}/#uk-localbusiness`,
    name: 'BioNixus UK',
    description:
      'BioNixus UK — pharmaceutical and healthcare market research corporate office in London.',
    telephone: '+44-7727-666682',
    url: BASE,
    mapsUrl: 'https://maps.app.goo.gl/h8eEUQ9V3TryGF1t7',
    placeId: '/g/11vy7d4_n1',
    address: {
      streetAddress: '128 City Road',
      addressLocality: 'London',
      postalCode: 'EC1V 2NP',
      addressCountry: 'GB',
    },
    geo: {
      latitude: 51.5267262,
      longitude: -0.088244,
    },
    openingHours: { dayOfWeek: WEEKDAYS, opens: '09:00', closes: '17:00' },
    includeReviews: true,
  },
  {
    id: 'eg',
    schemaId: `${BASE}/#eg-localbusiness`,
    name: 'BioNixus Egypt',
    description:
      'BioNixus Egypt — market research office in Sheikh Zayed, Giza.',
    telephone: '+20-120-688-2323',
    url: BASE,
    mapsUrl: 'https://share.google/Fhbb1PvbESItLDNSc',
    placeId: '/g/11yqddd0wx',
    address: {
      streetAddress: '22 Beverly Hills, Second Sheikh Zayed',
      addressLocality: 'Sheikh Zayed',
      addressRegion: 'Giza',
      postalCode: '3240232',
      addressCountry: 'EG',
    },
    openingHours: { dayOfWeek: MENA_WEEK, opens: '09:00', closes: '17:30' },
    includeReviews: false,
  },
  {
    id: 'ae',
    schemaId: `${BASE}/#ae-localbusiness`,
    name: 'BioNixus UAE',
    description:
      'BioNixus UAE — market research office in Al Thuraya Tower 1, Al Sufouh 2, Dubai.',
    telephone: '+44-7727-666682',
    url: BASE,
    mapsUrl: 'https://share.google/TlyheRVZ5L1sFKPQy',
    placeId: '/g/11y5rqhzd2',
    address: {
      streetAddress: 'Thuraya Tower 1, 5th Floor, Al Sufouh 2',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    openingHours: { dayOfWeek: MENA_WEEK, opens: '09:00', closes: '17:00' },
    includeReviews: false,
  },
  {
    id: 'sa',
    schemaId: `${BASE}/#sa-localbusiness`,
    name: 'BioNixus Saudi Arabia',
    description:
      'BioNixus Saudi Arabia — market research office in Al Khobar Al Shamalia.',
    telephone: '+966-50-182-5336',
    url: BASE,
    mapsUrl: 'https://share.google/Zv2GWYA71ULqo3wEU',
    placeId: '/g/11w2k6k2d9',
    address: {
      streetAddress: '2658 Street 7225, Al Aashir, Al Khobar Al Shamalia',
      addressLocality: 'Al Khobar',
      postalCode: '34428',
      addressCountry: 'SA',
    },
    openingHours: { dayOfWeek: MENA_WEEK, opens: '09:00', closes: '17:00' },
    includeReviews: false,
  },
  {
    id: 'kw',
    schemaId: `${BASE}/#kw-localbusiness`,
    name: 'BioNixus Kuwait',
    description:
      'BioNixus Kuwait — market research office at Olympia Mall, Salmiya.',
    telephone: '+965-6502-3130',
    url: BASE,
    mapsUrl: 'https://share.google/IVQ1EAwF7wktCnYvk',
    placeId: '/g/11sgzlvsf0',
    address: {
      streetAddress: 'Olympia Mall, Al Blajat St',
      addressLocality: 'Salmiya',
      postalCode: '12111',
      addressCountry: 'KW',
    },
    openingHours: { dayOfWeek: MENA_WEEK, opens: '09:00', closes: '17:00' },
    includeReviews: false,
  },
];

export const GOOGLE_OFFICE_MAPS_URLS = GOOGLE_OFFICES.map((office) => office.mapsUrl);

export function getGoogleOffice(id: GoogleOfficeId): GoogleOffice {
  const office = GOOGLE_OFFICES.find((item) => item.id === id);
  if (!office) throw new Error(`Unknown Google office: ${id}`);
  return office;
}
