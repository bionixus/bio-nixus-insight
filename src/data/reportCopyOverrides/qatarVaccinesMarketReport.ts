import type { ReportEntry } from '@/data/healthcareReportTypes';

const SLUG = 'qatar-vaccines-market-report';

/** Light exact-query override for Qatar vaccine market. Stats: ~USD 49M → ~USD 84M, ~17.1% CAGR. */
type OverrideCopy = Partial<ReportEntry> & Pick<ReportEntry, 'slug'>;

export const QATAR_VACCINES_COPY: OverrideCopy = {
  slug: SLUG,
  title: 'Qatar Vaccine Market Report 2026',
  metaTitle: 'Qatar Vaccine Market 2026 | Size & Hamad | BioNixus',
  metaDescription:
    'Qatar vaccine market ~USD 49M in 2026 (BioNixus analysis), ~17.1% CAGR: Hamad programmes, RSV neonatal allotments, cold-chain capacity—Gulf intelligence.',
  modifiedDate: '2026-08-14',
  summaryPara1:
    'BioNixus sizes the Qatar vaccine market at roughly USD 49 million in 2026, advancing toward about USD 84 million by 2030 at roughly 17.1% CAGR. Hamad-led campaigns, RSV neonatal allotment queuing, and sovereign cold-chain warehousing for conjugate lots shape access. Sizing reflects BioNixus market analysis, 2026.',
  summaryPara2:
    'Use this report with the [Qatar healthcare market report](/qatar-healthcare-market-report), the [GCC vaccine market 2026 report](/market-reports/gcc-vaccines-market-report), and the [Saudi Arabia vaccine market report](/market-reports/saudi-arabia-vaccines-market-report) for regional depth. BioNixus vaccine trackers sit alongside biologics, biosimilars, oncology, and rare-disease insight programmes.',
  faqs: [
    {
      question: 'How large is the Qatar vaccine market in 2026?',
      answer:
        'BioNixus sizes the Qatar vaccine market at roughly USD 49 million in 2026, advancing toward about USD 84 million by 2030 at roughly 17.1% CAGR. Pair with the GCC and Saudi Arabia vaccine market reports for Gulf benchmarking.',
    },
  ],
};
