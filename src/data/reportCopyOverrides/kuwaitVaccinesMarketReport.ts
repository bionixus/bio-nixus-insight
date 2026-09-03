import type { ReportEntry } from '@/data/healthcareReportTypes';

const SLUG = 'kuwait-vaccines-market-report';

/** Light exact-query override for Kuwait vaccine market. Stats: ~USD 44M → ~USD 76M, ~16.8% CAGR. */
type OverrideCopy = Partial<ReportEntry> & Pick<ReportEntry, 'slug'>;

export const KUWAIT_VACCINES_COPY: OverrideCopy = {
  slug: SLUG,
  title: 'Kuwait Vaccine Market Report 2026',
  metaTitle: 'Kuwait Vaccine Market 2026 | Size & MOH | BioNixus',
  metaDescription:
    'Kuwait vaccine market ~USD 44M in 2026 (BioNixus analysis), ~16.8% CAGR: MOH childhood schedule, influenza, private HPV—Gulf decision-ready intelligence.',
  modifiedDate: '2026-08-14',
  summaryPara1:
    'BioNixus sizes the Kuwait vaccine market at roughly USD 44 million in 2026, advancing toward about USD 76 million by 2030 at roughly 16.8% CAGR. MOH childhood schedule updates and influenza antigen selection set government volume; private clinics drive premium HPV uptake among affluent households. Sizing reflects BioNixus market analysis, 2026.',
  summaryPara2:
    'Use this report with the [Kuwait healthcare market report](/kuwait-healthcare-market-report), the [GCC vaccine market 2026 report](/market-reports/gcc-vaccines-market-report), and the [Saudi Arabia vaccine market report](/market-reports/saudi-arabia-vaccines-market-report) for regional depth. BioNixus vaccine trackers sit alongside biologics, biosimilars, oncology, and rare-disease insight programmes.',
  faqs: [
    {
      question: 'How large is the Kuwait vaccine market in 2026?',
      answer:
        'BioNixus sizes the Kuwait vaccine market at roughly USD 44 million in 2026, advancing toward about USD 76 million by 2030 at roughly 16.8% CAGR. Pair with the GCC and Saudi Arabia vaccine market reports for Gulf benchmarking.',
    },
  ],
};
