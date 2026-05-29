/** Shared E-E-A-T proof points for Egypt market research BOFU pages. */

export const EGYPT_MR_COMPANY_PROOF = [
  {
    title: 'Cairo office and MENA-scale fieldwork',
    body: 'BioNixus delivers healthcare market research from a Cairo base with reach across Egypt’s public, private, and pharmacy channels—not desk research imported from Gulf averages.',
  },
  {
    title: '17+ countries, 120+ healthcare projects',
    body: 'Programs span launch sizing, access evidence, competitive intelligence, and post-launch tracking for pharma, biotech, and medtech sponsors across MENA and beyond.',
  },
  {
    title: 'EDA, UHI, and ICH-GCP-aligned governance',
    body: 'Study design respects Egyptian Drug Authority pathways, universal health insurance expansion, and tender-oriented public procurement, with GDPR-compliant handling for global sponsors.',
  },
  {
    title: 'Proposal-ready in weeks',
    body: 'Typical Egypt modules move from scoped objective to field-ready instruments in 2–4 weeks for priority therapy areas and channel mixes.',
  },
] as const;

export const EGYPT_REGULATORY_STEPS = [
  {
    step: '1. EDA registration & evidence fit',
    detail:
      'Align clinical and economic narratives with EDA expectations and local labeling before scaling physician or payer fieldwork.',
    link: { to: '/blog/healthcare-overview-egypt-market-2026', label: 'Egypt healthcare market overview 2026' },
  },
  {
    step: '2. Public tender & UHI listing dynamics',
    detail:
      'Map Ministry of Health procurement, Hayah Karima / UHI coverage expansion, and listing steps that affect volume access.',
    link: { to: '/egypt-healthcare-market-report', label: 'Egypt healthcare market report' },
  },
  {
    step: '3. Private hospitals, insurance, and pharmacy channels',
    detail:
      'Segment out-of-pocket, insurer medical policies, and retail pharmacy substitution where brands compete on affordability and loyalty.',
    link: { to: '/healthcare-market-research/egypt', label: 'Healthcare market research in Egypt hub' },
  },
  {
    step: '4. Activation & post-listing tracking',
    detail:
      'Convert insight into 30/60/90 commercial and access actions tied to measurable adoption in urban and regional accounts.',
    link: { to: '/gfk-alternative-egypt', label: 'Market research context for Egypt' },
  },
] as const;

export const EGYPT_STAKEHOLDER_ROWS = [
  { role: 'Physicians & specialists', focus: 'Prescribing pathways, sequencing, switch risk, message resonance across public and private settings' },
  { role: 'Pharmacists & retail chains', focus: 'Substitution, OTC dynamics, promotion response, affordability barriers' },
  { role: 'Hospital committees & public procurement', focus: 'Tender timing, formulary criteria, institutional buying rules' },
  { role: 'Insurers & payers', focus: 'UHI coverage, prior authorization, budget impact expectations' },
  { role: 'Distributors & local partners', focus: 'MAH relationships, channel conflict, go-to-market sequencing' },
] as const;
