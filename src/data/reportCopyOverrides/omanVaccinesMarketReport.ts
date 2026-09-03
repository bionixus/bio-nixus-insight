import type { ReportEntry } from '@/data/healthcareReportTypes';

const SLUG = 'oman-vaccines-market-report';

/** Light exact-query override for Oman vaccine market. Stats: ~USD 24M → ~USD 41M, ~16.9% CAGR. */
type OverrideCopy = Partial<ReportEntry> & Pick<ReportEntry, 'slug'>;

export const OMAN_VACCINES_COPY: OverrideCopy = {
  slug: SLUG,
  title: 'Oman Vaccine Market Report 2026',
  metaTitle: 'Oman Vaccine Market 2026 | Size & MOH | BioNixus',
  metaDescription:
    'Oman vaccine market ~USD 24M in 2026 (BioNixus analysis), ~16.9% CAGR: MOH schedule, interior outreach, Hajj worker bundles—Gulf decision-ready intelligence.',
  modifiedDate: '2026-08-14',
  summaryPara1:
    'BioNixus sizes the Oman vaccine market at roughly USD 24 million in 2026, advancing toward about USD 41 million by 2030 at roughly 16.9% CAGR. Muscat littoral programmes and interior outreach, plus meningococcal Hajj worker bundles, shape demand. Sizing reflects BioNixus market analysis, 2026.',
  summaryPara2:
    'Use this report with the [Oman healthcare market report](/oman-healthcare-market-report), the [GCC vaccine market 2026 report](/market-reports/gcc-vaccines-market-report), and the [Saudi Arabia vaccine market report](/market-reports/saudi-arabia-vaccines-market-report) for regional depth. BioNixus vaccine trackers sit alongside biologics, biosimilars, oncology, and rare-disease insight programmes.',
  faqs: [
    {
      question: 'How large is the Oman vaccine market in 2026?',
      answer:
        'BioNixus sizes the Oman vaccine market at roughly USD 24 million in 2026, advancing toward about USD 41 million by 2030 at roughly 16.9% CAGR. Pair with the GCC and Saudi Arabia vaccine market reports for Gulf benchmarking.',
    },
  ],
};
