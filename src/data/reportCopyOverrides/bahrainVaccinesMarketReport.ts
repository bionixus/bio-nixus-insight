import type { ReportEntry } from '@/data/healthcareReportTypes';

const SLUG = 'bahrain-vaccines-market-report';

/** Light exact-query override for Bahrain vaccine market. Stats: ~USD 20M → ~USD 35M, ~16.7% CAGR. */
type OverrideCopy = Partial<ReportEntry> & Pick<ReportEntry, 'slug'>;

export const BAHRAIN_VACCINES_COPY: OverrideCopy = {
  slug: SLUG,
  title: 'Bahrain Vaccine Market Report 2026',
  metaTitle: 'Bahrain Vaccine Market 2026 | Size & NHRA | BioNixus',
  metaDescription:
    'Bahrain vaccine market ~USD 20M in 2026 (BioNixus analysis), ~16.7% CAGR: NHRA conjugate reviews, school mandates, causeway mobility—Gulf intelligence.',
  modifiedDate: '2026-08-14',
  summaryPara1:
    'BioNixus sizes the Bahrain vaccine market at roughly USD 20 million in 2026, advancing toward about USD 35 million by 2030 at roughly 16.7% CAGR. NHRA conjugate reviews, Salmaniya school-mandate cohesion, and causeway-commuter vaccination attribution shape a compact but distinct Gulf schedule market. Sizing reflects BioNixus market analysis, 2026.',
  summaryPara2:
    'Use this report with the [Bahrain healthcare market report](/bahrain-healthcare-market-report), the [GCC vaccines market report](/market-reports/gcc-vaccines-market-report), and the [Saudi Arabia vaccine market report](/market-reports/saudi-arabia-vaccines-market-report) for regional depth. BioNixus vaccine trackers sit alongside biologics, biosimilars, oncology, and rare-disease insight programmes.',
  faqs: [
    {
      question: 'How large is the Bahrain vaccine market in 2026?',
      answer:
        'BioNixus sizes the Bahrain vaccine market at roughly USD 20 million in 2026, advancing toward about USD 35 million by 2030 at roughly 16.7% CAGR. Pair with the GCC and Saudi Arabia vaccine market reports for Gulf benchmarking.',
    },
  ],
};
