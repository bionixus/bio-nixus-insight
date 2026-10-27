/**
 * BioNixus Google Business Profile listings.
 * Captured from live Google knowledge panels / Maps on 2026-09-02.
 * Do not invent streets. Update this file when GBP NAP changes.
 */

export type GoogleOfficeId = 'us' | 'uk' | 'eg' | 'ae' | 'sa' | 'kw';

/**
 * Standing office roles:
 * USA = Americas office and global HQ
 * UK = Europe office
 * Cairo = AMEA (APAC, Middle East, Africa) office
 * São Paulo = field office for LATAM (no street on file; not in this list)
 * Al Khobar = partner office for KSA
 * Kuwait = field office for Kuwait
 * Dubai = field office for UAE
 */
export type OfficeTier = 'leadership' | 'field';

export type GoogleOffice = {
  id: GoogleOfficeId;
  tier: OfficeTier;
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
    tier: 'leadership',
    schemaId: `${BASE}/#us-localbusiness`,
    name: 'BioNixus LLC USA',
    description:
      'BioNixus LLC USA — Americas office and global HQ in Sheridan, Wyoming.',
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
    tier: 'leadership',
    schemaId: `${BASE}/#uk-localbusiness`,
    name: 'BioNixus UK',
    description:
      'BioNixus UK — Europe office in London.',
    telephone: '+44-7727-666682',
    url: BASE,
    mapsUrl: 'https://maps.app.goo.gl/h8eEUQ9V3TryGF1t7',
    placeId: '/g/11vy7d4_n1',
    address: {
      streetAddress: '128 City Road',
      addressLocality: 'London',
      postalCode: 'EC1V 2NX',
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
    tier: 'leadership',
    schemaId: `${BASE}/#eg-localbusiness`,
    name: 'BioNixus Egypt',
    description:
      'BioNixus Egypt — AMEA (APAC, Middle East, Africa) office in Cairo (Sheikh Zayed, Giza).',
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
    tier: 'field',
    schemaId: `${BASE}/#ae-localbusiness`,
    name: 'BioNixus UAE',
    description:
      'BioNixus UAE — field office for UAE at Thuraya Tower 1, 5th Floor, Al Sufouh 2, Dubai.',
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
    tier: 'field',
    schemaId: `${BASE}/#sa-localbusiness`,
    name: 'BioNixus Saudi Arabia',
    description:
      'BioNixus Saudi Arabia — partner office for KSA in Al Khobar.',
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
    tier: 'field',
    schemaId: `${BASE}/#kw-localbusiness`,
    name: 'BioNixus Kuwait',
    description:
      'BioNixus Kuwait — field office for Kuwait in Salmiya.',
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

/** Visible footer label and Organization location description. */
export function officeRoleLabel(office: Pick<GoogleOffice, 'id'>): string {
  switch (office.id) {
    case 'us':
      return 'Americas office and global HQ';
    case 'uk':
      return 'Europe office';
    case 'eg':
      return 'AMEA (APAC, Middle East, Africa) office';
    case 'ae':
      return 'field office for UAE';
    case 'sa':
      return 'partner office for KSA';
    case 'kw':
      return 'field office for Kuwait';
    default: {
      const never: never = office.id;
      return never;
    }
  }
}
