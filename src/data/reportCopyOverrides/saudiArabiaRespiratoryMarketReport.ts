import type { ReportEntry } from '@/data/healthcareReportTypes';

const SLUG = 'saudi-arabia-respiratory-market-report';

/**
 * Curated copy for the Saudi Arabia respiratory programmatic report.
 * Market sizing: BioNixus market analysis, 2026 (aligned with factRegistry: ~USD 0.5–0.65B 2026 → ~USD 1.0B 2030).
 * Detail: SFDA/NUPCO access, asthma biologics, Hajj/Umrah mass-gathering pulmonology; epidemiology cited as published ranges.
 */
type OverrideCopy = Partial<ReportEntry> & Pick<ReportEntry, 'slug'>;

export const SAUDI_ARABIA_RESPIRATORY_COPY: OverrideCopy = {
  slug: SLUG,
  title: 'Saudi Arabia Respiratory Market Report 2026',
  metaTitle: 'Saudi Arabia Respiratory Market Report 2026 | BioNixus',
  metaDescription:
    'Saudi respiratory market ~USD 0.5–0.65B in 2026 (BioNixus analysis): SFDA & NUPCO access, asthma biologics (dupilumab, mepolizumab, benralizumab), COPD triple therapy, Hajj/Umrah pulmonology demand—decision-ready Gulf intelligence.',
  heroLead:
    'This briefing reads Saudi respiratory care where the value actually shifts: NUPCO tenders on inhaled maintenance therapy, severe-asthma biologics gated by pulmonology referral and prior authorization, COPD triple-therapy adoption, and the mass-gathering pulmonology surge that Hajj and Umrah add on top of a high baseline asthma and allergic-disease burden.',
  summaryPara1:
    'Respiratory disease in Saudi Arabia rests on a high baseline of asthma and allergic disease, rising COPD, a hot and dust-exposed environment, and the unique mass-gathering dynamics of Hajj and Umrah, which concentrate respiratory-infection and pulmonology demand each year. BioNixus sizes the respiratory market at roughly USD 0.5–0.65 billion in 2026, on a growth path toward about USD 1.0 billion by 2030, with the severe-asthma biologic segment expanding at double digits inside a larger inhaled-therapy base. Inhaled corticosteroid/LABA maintenance and COPD triple therapy anchor volume in MOH and NGHA channels under NUPCO procurement, while biologics for severe eosinophilic and type-2 asthma—dupilumab, mepolizumab, benralizumab, omalizumab—are the growth and differentiation story, gated by specialist referral and prior authorization. Sizing reflects BioNixus market analysis, 2026, applied alongside published respiratory burden ranges rather than unaudited panel extrapolation.',
  summaryPara2:
    'Use this report with the [Saudi Arabia healthcare market report](/saudi-arabia-healthcare-market-report) for macro context, the [SFDA market access strategy for Saudi Arabia](/sfda-market-access-strategy-saudi-arabia) when registration and NUPCO listing are on your critical path, the [Saudi Arabia immunology & biologics market report](/market-reports/saudi-arabia-immunology-biologics-market-report) for the shared type-2/biologic budget logic, the [GCC respiratory market report](/market-reports/gcc-respiratory-market-report) for Gulf-wide benchmarking, [respiratory therapy research](/healthcare-market-research/therapy/respiratory) for programme design, and the [healthcare market research hub](/healthcare-market-research) to scope bilingual fieldwork.',
  marketAccessNotes:
    'NUPCO tenders and generic substitution shaping net price on ICS/LABA maintenance and COPD therapy; severe-asthma biologic (dupilumab, mepolizumab, benralizumab, omalizumab) access gated by pulmonology/allergy referral, eosinophil and IgE biomarker criteria, and prior-authorization-style formulary review; type-2 inflammation budgets shared with dermatology and ENT (dupilumab cross-indication); Hajj and Umrah mass-gathering pulmonology and respiratory-infection surges driving seasonal demand and stockpiling; air-quality, dust, and high smoking/vaping prevalence sustaining COPD and asthma burden; biomarker testing and spirometry capacity gating biologic initiation outside major centres',
  fieldIntelligenceParagraph:
    'BioNixus field programmes treat Saudi respiratory as a split between a tendered maintenance-therapy base and a referral-gated biologic frontier. Primary care and pulmonology manage the inhaled base under NUPCO economics, while severe-asthma biologics depend on specialist referral, biomarker testing (blood eosinophils, IgE, FeNO where available), and prior-authorization documentation. We pair bilingual pulmonologist, allergist, and primary-care quantitative work with payer depth, and we map the type-2 inflammation overlap that puts dupilumab on respiratory, dermatology, and ENT formularies at once. Seasonal and cultural realities matter: Hajj and Umrah create predictable pulmonology surges and infection-control demand, dust and heat drive exacerbations, and adherence to inhaled therapy follows education and device-technique gaps that EU analogues understate. KOL maps follow real referral and severe-asthma-clinic influence rather than title lists.',
  commercialOutlookParagraph:
    'The outlook to 2030 separates a price-pressured maintenance base from a higher-margin biologic frontier. ICS/LABA and COPD therapy stay under NUPCO and generic economics, rewarding supply reliability and device differentiation. Growth and differentiation sit in severe-asthma biologics, where competition among IL-5, IL-4Rα, and anti-IgE mechanisms intensifies and where the type-2 cross-indication story (asthma plus atopic dermatitis, CRSwNP, COPD where labelled) strengthens the value case. Manufacturers should plan biomarker-testing enablement, pulmonology and allergy referral-pathway support, and prior-authorization documentation, while aligning respiratory and immunology narratives for shared type-2 budgets. Leadership should stress-test biologic uptake by referral capacity and biomarker access, not by prevalence alone, before locking Saudi revenue targets.',
  methodologyParagraph:
    'Methodology combines BioNixus market analysis for sizing and growth bands with structured desk review of SFDA, NUPCO, and MOH public guidance, plus primary modules—pulmonologist, allergist, and primary-care adoption surveys, payer and formulary-committee interviews, and biologic-initiation pathway mapping where data is available. Epidemiology references use published Saudi asthma, allergic-disease, and COPD burden ranges, and the known Hajj/Umrah mass-gathering respiratory dynamics, as planning inputs rather than patient-level forecasts. Because tender outcomes, biologic prior-authorization criteria, and biomarker capacity change on short cycles, access statements should be revalidated before launch decisions. Outputs are built for market access, medical affairs, and commercial leadership and do not constitute regulatory or clinical advice.',
  faqs: [
    {
      question: 'How large is the Saudi Arabia respiratory market in 2026?',
      answer:
        'BioNixus market analysis sizes the Saudi respiratory market at roughly USD 0.5–0.65 billion in 2026, on a growth path toward about USD 1.0 billion by 2030. The inhaled-maintenance base (ICS/LABA, COPD therapy) drives volume, while severe-asthma biologics are the fastest-growing, highest-margin segment. Demand rests on a high asthma and allergic-disease burden, rising COPD, a dust-exposed environment, and Hajj/Umrah mass-gathering dynamics. Use the GCC respiratory market report for Gulf-wide context and the Saudi Arabia healthcare market report for macro sizing.',
    },
    {
      question: 'How do asthma biologics gain access in Saudi Arabia?',
      answer:
        'Severe-asthma biologics—dupilumab (IL-4Rα), mepolizumab and benralizumab (IL-5/IL-5Rα), and omalizumab (anti-IgE)—require pulmonology or allergy referral, biomarker criteria (blood eosinophils, IgE, and FeNO where available), and prior-authorization-style formulary review. SFDA registration is the entry point, but hospital formulary and payer medical policy determine real use, and biomarker-testing capacity outside major centres can delay initiation. Because dupilumab is also used in atopic dermatitis and CRSwNP, type-2 budgets are shared across specialties. BioNixus maps these referral and biomarker gates directly with prescribers and payers.',
    },
    {
      question: 'How does NUPCO procurement affect respiratory therapy in Saudi Arabia?',
      answer:
        'Inhaled maintenance therapy (ICS/LABA) and COPD treatments are high-volume classes where NUPCO centralized tenders and generic substitution set net price across MOH and NGHA facilities. Device differentiation and supply reliability matter as much as molecule in this base. Biologics sit outside the commodity tender dynamic, gated instead by specialist referral and prior authorization. BioNixus tracks tender timing and formulary expectations so commercial teams can separate the price-pressured maintenance strategy from the referral-driven biologic strategy.',
    },
    {
      question: 'What role do Hajj and Umrah play in Saudi respiratory demand?',
      answer:
        'Mass gatherings during Hajj and Umrah concentrate millions of pilgrims and reliably drive respiratory-infection and pulmonology demand, infection-control measures, and seasonal stockpiling. Combined with a dusty, hot environment and high smoking and vaping prevalence, this sustains a heavy asthma and COPD exacerbation burden. These dynamics create predictable seasonal patterns that distinguish Saudi respiratory demand from EU analogues. BioNixus captures this seasonality in fieldwork so demand forecasting and supply planning reflect the Kingdom’s mass-gathering calendar.',
    },
    {
      question: 'Which respiratory classes are growing fastest in Saudi Arabia?',
      answer:
        'Severe-asthma biologics targeting type-2 inflammation—IL-4Rα (dupilumab), IL-5/IL-5Rα (mepolizumab, benralizumab), and anti-IgE (omalizumab)—are the standout growth segment, supported by cross-indication use in atopic dermatitis and chronic rhinosinusitis with nasal polyps. COPD triple therapy continues to expand on the maintenance side. The ICS/LABA base remains large but is dominated by tender and generic economics. Biomarker-guided prescribing is maturing as eosinophil and IgE testing become more available in specialist centres.',
    },
    {
      question: 'How does BioNixus help respiratory teams win in Saudi Arabia?',
      answer:
        'BioNixus designs bilingual (Arabic–English) Saudi respiratory programmes: pulmonologist, allergist, and primary-care adoption studies, payer and formulary-committee interviews, severe-asthma biologic access and biomarker-pathway mapping, NUPCO tender intelligence for the inhaled base, and KOL mapping tied to real severe-asthma-clinic and referral influence. Deliverables align to launch, biologic-access, or device-defence milestones and connect Saudi findings to GCC and global benchmarks only when a comparator truly informs governance. Typical outputs include segment and channel archetypes, biologic access-risk maps, type-2 cross-indication strategy, and committee-ready executive summaries. Begin from the healthcare market research hub or request a scoped briefing through the contact page.',
    },
  ],
};
