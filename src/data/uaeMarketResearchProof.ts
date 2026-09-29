/** Shared E-E-A-T proof points for UAE market research BOFU pages. */

export const UAE_MR_COMPANY_PROOF = [
  {
    title: '48 countries, emirate-aware fieldwork',
    body: 'BioNixus runs physician, payer, and institutional research across Dubai, Abu Dhabi, and the Northern Emirates with bilingual Arabic–English execution—not a single “UAE average.”',
  },
  {
    title: '120+ global projects annually (127 in 2025)',
    body: 'Programs span launch sizing, access evidence, competitive intelligence, and post-launch tracking for pharma, biotech, and medtech sponsors.',
  },
  {
    title: 'DHA, DOH, MOHAP, and ICH-GCP-aligned governance',
    body: 'Study design respects emirate-level regulatory and payer pathways, with GDPR-compliant data handling for global sponsors.',
  },
  {
    title: 'Proposal in 48 hours; field-ready in 2–4 weeks',
    body: 'A scoped proposal is ready within 48 hours. Priority UAE modules move from scoped objective to field-ready instruments in 2–4 weeks.',
  },
] as const;

export const UAE_REGULATORY_STEPS = [
  {
    step: '1. EDE and MOHAP — federal registration and pricing',
    detail:
      'The Emirates Drug Establishment (EDE) took over federal pricing and registration from MOHAP under Federal Decree-Law 38/2024, effective December 2025. MOHAP facilities and protocols still matter in the Northern Emirates.',
    link: { to: '/healthcare-market-research/uae', label: 'UAE healthcare market research hub' },
  },
  {
    step: '2. DHA and DOH formulary & committee gates',
    detail:
      'Map Dubai Health Authority and Department of Health – Abu Dhabi formulary rules, medical policies, and hospital committee influence.',
    link: {
      to: '/blog/abu-dhabi-doh-vs-dubai-dha-formulary-guide',
      label: 'Abu Dhabi DOH vs Dubai DHA formulary guide',
    },
  },
  {
    step: '3. Insurer & medical policy pathways',
    detail:
      'Integrate mandatory benefits, prior authorization stacks, and private hospital procurement behavior into the research brief.',
    link: { to: '/blog/market-access-strategy-uae', label: 'UAE market access strategy' },
  },
  {
    step: '4. Activation & post-listing tracking',
    detail:
      'Convert insight into 30/60/90 commercial and access actions tied to measurable adoption by emirate and channel.',
    link: { to: '/uae-healthcare-market-report', label: 'UAE healthcare market report' },
  },
] as const;

export const UAE_STAKEHOLDER_ROWS = [
  { role: 'Physicians & specialists', focus: 'Prescribing pathways, sequencing, switch risk, message resonance by emirate' },
  { role: 'Pharmacists & P&T committees', focus: 'Formulary criteria, substitution, DHA/DOH evidence requests' },
  { role: 'Hospital procurement & groups', focus: 'Account tiers, group formulary timing, institutional buying rules' },
  { role: 'Insurers & payers', focus: 'Prior authorization, medical policy, mandatory benefit alignment' },
  { role: 'Medical affairs & access', focus: 'Value narrative testing, objection libraries, launch sequencing' },
] as const;
