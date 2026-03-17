import MarketResearchCountryLanding from '@/pages/market-research-country/MarketResearchCountryLanding';

export default function MarketResearchKsa() {
  return (
    <MarketResearchCountryLanding
      title="Market Research KSA | Pharma & Healthcare Intelligence | BioNixus"
      description="Market research KSA services for pharmaceutical and healthcare teams needing SFDA-aware evidence, stakeholder insight, and launch support."
      canonical="/market-research-ksa"
      h1="Market Research KSA"
      intro="BioNixus delivers market research KSA studies built for practical deployment across public and private healthcare channels in Saudi Arabia."
      countryLabel="Saudi Arabia"
      primaryKeyword="Market Research KSA"
      supportingKeywords={[
        'Pharma market research KSA',
        'Healthcare market research KSA',
        'Saudi pharmaceutical market research',
      ]}
      faqItems={[
        {
          question: 'How is KSA market research different from generic GCC programs?',
          answer:
            'KSA work requires SFDA and procurement-aware design, local stakeholder mapping, and Arabic-English execution across major care settings.',
        },
        {
          question: 'Do you support both KSA and Saudi keyword intents?',
          answer:
            'Yes. This page supports KSA intent while connected pages target Saudi wording to capture both high-volume variations.',
        },
      ]}
      relatedLinks={[
        { to: '/market-research-saudi', label: 'Market research Saudi' },
        { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Pharma market research company in Saudi Arabia' },
        { to: '/pharmaceutical-companies-saudi-arabia', label: 'Top pharmaceutical companies in Saudi Arabia' },
        { to: '/market-research-uae', label: 'Market research UAE' },
      ]}
    />
  );
}
