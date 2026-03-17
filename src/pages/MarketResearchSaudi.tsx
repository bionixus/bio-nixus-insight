import MarketResearchCountryLanding from '@/pages/market-research-country/MarketResearchCountryLanding';

export default function MarketResearchSaudi() {
  return (
    <MarketResearchCountryLanding
      title="Market Research Saudi | Healthcare & Pharma Services | BioNixus"
      description="Market research Saudi programs for healthcare and life sciences teams, with proposal-ready insight for launch, pricing, and market access."
      canonical="/market-research-saudi"
      h1="Market Research Saudi"
      intro="BioNixus provides market research Saudi support for teams that need clear evidence from physicians, payers, and institutional stakeholders."
      countryLabel="Saudi Arabia"
      primaryKeyword="Market Research Saudi"
      supportingKeywords={[
        'Healthcare market research Saudi',
        'Pharma market research Saudi',
        'Top pharma companies in Saudi Arabia',
      ]}
      faqItems={[
        {
          question: 'Is this page different from market research KSA?',
          answer:
            'Yes. It targets the Saudi phrasing variant while linking to KSA and pharma-specific pages so both keyword families are covered.',
        },
        {
          question: 'Can I request Saudi-only fieldwork from this page?',
          answer:
            'Yes. This page routes directly to Saudi-focused service pages and the contact CTA for proposal-ready Saudi scopes.',
        },
      ]}
      relatedLinks={[
        { to: '/market-research-ksa', label: 'Market research KSA' },
        { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Pharma market research company in Saudi Arabia' },
        { to: '/pharmaceutical-companies-saudi-arabia', label: 'Top pharmaceutical companies in Saudi Arabia' },
        { to: '/bionixus-market-research-middle-east', label: 'Middle East pharmaceutical market research pillar' },
      ]}
    />
  );
}
