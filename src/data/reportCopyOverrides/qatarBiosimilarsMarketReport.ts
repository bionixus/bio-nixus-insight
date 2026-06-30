import type { ReportEntry } from '@/data/healthcareReportTypes';

const SLUG = 'qatar-biosimilars-market-report';

/**
 * Curated copy for the Qatar biosimilars programmatic report.
 * Market sizing: BioNixus estimate 2026 (~USD 52M → ~USD 92M by 2030, ~15.7% CAGR)
 * triangulated against Ken Research Qatar Humira market context (USD 85M, biosimilar
 * adalimumab share rising), immunology (~USD 90–130M), and oncology (~USD 142M) spend.
 */
type OverrideCopy = Partial<ReportEntry> & Pick<ReportEntry, 'slug'>;

export const QATAR_BIOSIMILARS_COPY: OverrideCopy = {
  slug: SLUG,
  title: 'Qatar Biosimilars Market Report 2026',
  metaTitle: 'Qatar Biosimilars Market Report 2026 | BioNixus',
  metaDescription:
    'Qatar biosimilars market ~USD 52M in 2026 (BioNixus estimate), ~16% CAGR: Hamad and Sidra carve-outs, adalimumab biosimilar adoption, sovereign cold-chain warehousing—decision-ready Gulf intelligence.',
  heroLead:
    'This briefing reads Qatar biosimilars through Hamad Medical Corporation and Sidra Medicine budget carve-outs: where high per-capita biologic spend meets rising adalimumab biosimilar adoption, sovereign warehousing of cold-chain SKUs, and paediatric filgrastim throughput constraints that shape how fast policy intent becomes hospital volume.',
  summaryPara1:
    'Qatar combines high per-capita healthcare spend with a concentrated hospital network—making biosimilar substitution visible quickly when Hamad or Sidra refresh formularies, but also making volume sensitive to budget carve-outs and cold-chain logistics. BioNixus sizes hospital-administered biosimilars at roughly USD 52 million in 2026, advancing toward about USD 92 million by 2030 at roughly 16% CAGR—a band triangulated against Ken Research’s Qatar Humira market context (USD 85 million total adalimumab market with rising biosimilar share), immunology spend (~USD 90–130M), and oncology spend (~USD 142M). Volume spans immunology (adalimumab, etanercept, infliximab), oncology (trastuzumab, bevacizumab, rituximab), and supportive care (filgrastim, pegfilgrastim) at Hamad Medical Corporation, Sidra Medicine, and the National Center for Cancer Care and Research. Bonafide Research tracks Qatar biosimilars by product and indication through 2030; BioNixus applies a hospital-administered scope consistent with other GCC country reports. Sizing reflects BioNixus market analysis, 2026.',
  summaryPara2:
    'Use this report with the [Qatar healthcare market report](/qatar-healthcare-market-report) for macro context, the [Qatar immunology & biologics market report](/market-reports/qatar-immunology-biologics-market-report) for originator-defence dynamics, the [GCC biosimilars market report](/market-reports/gcc-biosimilars-market-report) for Gulf-wide benchmarking, the [Saudi Arabia biosimilars market report](/market-reports/saudi-arabia-biosimilars-market-report) for the contrasting NUPCO national-tender model, [biosimilars therapy research](/healthcare-market-research/therapy/biosimilars) for programme design, and the [healthcare market research hub](/healthcare-market-research) to scope bilingual fieldwork.',
  marketAccessNotes:
    'Hamad global budget carve-outs on bevacizumab maintenance and anti-TNF biologics; Sidra paediatric filgrastim chair throughput amortization; sovereign warehousing of cold-chain biosimilar SKUs; HMC preferred biosimilar policies on selected molecules; high expatriate population affecting continuity-of-care switching eligibility; clinician confidence and nocebo concerns in maintenance oncology',
  fieldIntelligenceParagraph:
    'BioNixus field programmes treat Qatar biosimilars as a concentrated-account market: Hamad, Sidra, and NCCCR decisions move disproportionate share. We pair budget-carve-out tracking with bilingual prescriber confidence studies across rheumatology, oncology, and paediatric haematology-oncology, and we map cold-chain and chair-throughput frictions that delay first biosimilar starts. For originators, we identify patient-support and device levers that retain volume in Qatar’s premium insured environment after formulary refresh.',
  commercialOutlookParagraph:
    'The outlook to 2030 is strong-growth relative to market size, driven by adalimumab biosimilar share gains and oncology maintenance substitution at Hamad. Biosimilar developers should plan account-by-account launch sequences rather than assuming a Saudi-style national tender. Originators retain defence room on device, patient support, and indication breadth, but face steady erosion as HMC expands preferred-biosimilar policies. BioNixus uses a ~16% planning band; stress-test share by molecule and institution before locking Qatar revenue assumptions.',
  methodologyParagraph:
    'Methodology combines BioNixus market analysis for sizing and CAGR bands—triangulated against Ken Research Qatar Humira market context (USD 85M), immunology and oncology therapy estimates, and Bonafide Research Qatar biosimilars market structure—with desk review of HMC and Sidra formulary practice. Primary modules include prescriber confidence surveys and hospital formulary interviews where data is available. Outputs are built for market access and commercial leadership and do not constitute regulatory or clinical advice.',
  sourceNotes: [
    'BioNixus estimate (2026 hospital-administered biosimilar scope)',
    'Ken Research — Qatar Humira market (USD 85M; rising biosimilar adalimumab share)',
    'Bonafide Research — Qatar Biosimilars Market Overview, 2030 (product and indication structure)',
    'BioNixus — Qatar immunology & biologics and oncology market estimates (2026)',
  ],
  faqs: [
    {
      question: 'How large is the Qatar biosimilars market in 2026?',
      answer:
        'BioNixus sizes Qatar hospital-administered biosimilars at roughly USD 52 million in 2026, advancing toward about USD 92 million by 2030 at roughly 16% CAGR. The band triangulates Ken Research’s Qatar Humira market (USD 85 million with rising biosimilar share), immunology spend (~USD 90–130M), and oncology spend (~USD 142M). Use the GCC biosimilars report for Gulf-wide context and the Qatar healthcare market report for macro sizing.',
    },
    {
      question: 'How do Hamad Medical Corporation and Sidra shape Qatar biosimilar uptake?',
      answer:
        'Hamad and Sidra account for the majority of hospital-administered biologic volume in Qatar. Budget carve-outs on maintenance oncology biologics and anti-TNF therapies can accelerate substitution when formularies refresh, but paediatric filgrastim chair throughput and cold-chain confidence can delay first starts. BioNixus maps institution-level switching gates rather than applying EU switch curves blindly.',
    },
    {
      question: 'Which biosimilar classes are most active in Qatar in 2026?',
      answer:
        'Adalimumab biosimilars are high-activity given Ken Research’s USD 85 million Humira-market context and rising biosimilar share. Oncology monoclonal biosimilars (trastuzumab, bevacizumab, rituximab) and G-CSF supportive-care biosimilars add steady volume at Hamad and NCCCR. Activity is hospital-led rather than retail-driven.',
    },
    {
      question: 'How does BioNixus support biosimilar teams in Qatar?',
      answer:
        'BioNixus designs bilingual Qatar programmes: HMC and Sidra formulary intelligence, prescriber confidence studies, cold-chain and chair-throughput workflow reviews, and switching maps tied to budget carve-out cycles. Begin from the healthcare market research hub or request a scoped briefing through the contact page.',
    },
  ],
};
