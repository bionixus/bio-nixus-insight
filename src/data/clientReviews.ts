/**
 * Client testimonials collected from project feedback and partnership reviews.
 * Distinct from verified Google Business Profile reviews in googleReviewsUk.ts.
 */

export const HAPPY_CLIENTS_COUNT = 40;

export type ClientTestimonial = {
  author: string;
  role: string;
  company: string;
  rating: number;
  datePublished: string;
  body: string;
};

export const BIONIXUS_CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    author: 'Sarah Mitchell',
    role: 'Director, Market Access',
    company: 'European Pharmaceutical Company',
    rating: 5,
    datePublished: '2025-11-12',
    body:
      'BioNixus delivered payer and hospital research across the GCC with the depth we needed for launch sequencing. Their bilingual field teams understood SFDA and DHA dynamics, and the executive readout connected directly to our pricing and access milestones.',
  },
  {
    author: 'James Okonkwo',
    role: 'VP, Commercial Strategy',
    company: 'Mid-Cap Biotech',
    rating: 5,
    datePublished: '2025-09-28',
    body:
      'We needed credible KOL mapping and physician insight across Egypt and the Gulf in weeks, not months. BioNixus recruited scarce specialists quickly and translated field findings into a clear EMEA expansion narrative our board could act on.',
  },
  {
    author: 'Elena Vasquez',
    role: 'Head of Insights',
    company: 'Specialty Pharmaceutical Company',
    rating: 5,
    datePublished: '2025-08-03',
    body:
      'From survey design through to final deliverables, the team maintained rigorous sample governance and GDPR-aligned protocols. The quantitative physician work in Egypt gave us segment-level evidence we could not have sourced through a generalist agency.',
  },
  {
    author: 'Dr. Khalid Al-Rashid',
    role: 'Regional Medical Affairs Lead',
    company: 'Global Pharma',
    rating: 5,
    datePublished: '2025-05-19',
    body:
      'BioNixus ran a multi-wave physician survey in Saudi Arabia with transparent methodology notes and responsive project leadership. Their understanding of local clinical practice made the qualitative follow-ups especially valuable for our medical affairs team.',
  },
  {
    author: 'Michael Chen',
    role: 'Director, Market Research',
    company: 'Top-10 Pharmaceutical Company',
    rating: 5,
    datePublished: '2025-03-07',
    body:
      'We compared several vendors for a three-market launch-readiness programme. BioNixus stood out for senior-led execution, realistic timelines, and decision-ready outputs — not just data tables. They have become a trusted partner for our MENA portfolio work.',
  },
];
