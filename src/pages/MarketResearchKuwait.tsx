import MarketResearchCountryLanding from '@/pages/market-research-country/MarketResearchCountryLanding';

export default function MarketResearchKuwait() {
  return (
    <MarketResearchCountryLanding
      title="Market Research Kuwait | Pharma & Healthcare Research | BioNixus"
      description="Market research Kuwait services for pharmaceutical and healthcare strategy, including stakeholder evidence, access insight, and launch readiness."
      canonical="/market-research-kuwait"
      h1="Market Research Kuwait"
      intro="BioNixus builds market research Kuwait studies for teams needing decision-ready intelligence in one of the GCC's high-value healthcare markets."
      countryLabel="Kuwait"
      primaryKeyword="Market Research Kuwait"
      supportingKeywords={[
        'Pharma market research Kuwait',
        'Healthcare market research Kuwait',
        'Top pharma companies in Kuwait',
      ]}
      faqItems={[
        {
          question: 'What outcomes can market research Kuwait programs support?',
          answer:
            'Typical outputs support launch sequencing, stakeholder prioritization, and payer-sensitive positioning in public and private channels.',
        },
        {
          question: 'Does this page connect to Kuwait company-intent content?',
          answer:
            'Yes. It links to the Kuwait pharmaceutical companies page for top-company search intent capture.',
        },
      ]}
      relatedLinks={[
        { to: '/kuwait-market-access-research', label: 'Kuwait market access research' },
        { to: '/pharmaceutical-companies-kuwait', label: 'Top pharmaceutical companies in Kuwait' },
        { to: '/market-research-uae', label: 'Market research UAE' },
        { to: '/market-research-egypt', label: 'Market research Egypt' },
      ]}
    />
  );
}
