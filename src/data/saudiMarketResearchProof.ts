/** Shared E-E-A-T proof points for Saudi Arabia market research BOFU pages. */

export const SAUDI_MR_COMPANY_PROOF = [
  {
    title: '17+ countries, GCC-native fieldwork',
    body: 'BioNixus runs physician, payer, and institutional research across Saudi Arabia with bilingual Arabic–English execution—not imported GCC averages.',
  },
  {
    title: '127+ projects delivered',
    body: 'Programs span launch sizing, access evidence, competitive intelligence, and post-launch tracking for pharma, biotech, and medtech sponsors.',
  },
  {
    title: 'SFDA, NUPCO, and ICH-GCP-aligned governance',
    body: 'Study design respects Saudi regulatory and procurement realities, with GDPR-compliant data handling for global sponsors.',
  },
  {
    title: 'Proposal-ready in weeks, not quarters',
    body: 'Typical KSA modules move from scoped objective to field-ready instruments in 2–4 weeks for priority therapy areas.',
  },
] as const;

export const SAUDI_SFDA_NUPCO_STEPS = [
  {
    step: '1. SFDA registration & evidence fit',
    detail:
      'Align clinical and economic narratives with SFDA labeling and post-marketing expectations before scaling fieldwork.',
    link: { to: '/blog/sfda-drug-registration-guide', label: 'SFDA drug registration guide' },
  },
  {
    step: '2. Institutional committee & formulary gates',
    detail:
      'Map hospital drug committees, medical policy stacks, and specialist referral paths that determine real uptake.',
    link: { to: '/healthcare-market-research/saudi-arabia', label: 'Saudi healthcare market research hub' },
  },
  {
    step: '3. NUPCO & centralized procurement',
    detail:
      'Where tenders apply, integrate award calendars, account readiness, and price corridors into the research brief.',
    link: { to: '/blog/nupco-saudi-arabia-tendering-guide', label: 'NUPCO Saudi Arabia tendering guide' },
  },
  {
    step: '4. Activation & post-listing tracking',
    detail:
      'Convert insight into 30/60/90 commercial and access actions tied to measurable adoption signals.',
    link: { to: '/saudi-arabia-healthcare-market-report', label: 'Saudi Arabia healthcare market report' },
  },
] as const;

export const SAUDI_STAKEHOLDER_ROWS = [
  { role: 'Physicians & specialists', focus: 'Prescribing pathways, sequencing, switch risk, message resonance' },
  { role: 'Pharmacists & P&T committees', focus: 'Formulary criteria, substitution, evidence requests' },
  { role: 'Hospital procurement & NUPCO', focus: 'Tender timing, account tiers, institutional buying rules' },
  { role: 'Payers & medical affairs', focus: 'Prior authorization, budget impact, pharmacovigilance alignment' },
  { role: 'Patients & caregivers (where scoped)', focus: 'Adherence, access friction, support-program design' },
] as const;
