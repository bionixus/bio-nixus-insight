import MarketResearchCountryLanding from '@/pages/market-research-country/MarketResearchCountryLanding';

export default function MarketResearchUae() {
  return (
    <MarketResearchCountryLanding
      title="Market Research UAE | Pharma & Healthcare Insights | BioNixus"
      description="Market research UAE programs for healthcare and pharma teams, including stakeholder insight, launch planning, and market access evidence."
      canonical="/market-research-uae"
      h1="Market Research UAE"
      intro="BioNixus supports market research UAE requirements for pharmaceutical and healthcare teams that need clear commercial and access decisions."
      countryLabel="United Arab Emirates"
      primaryKeyword="Market Research UAE"
      supportingKeywords={[
        'Pharma market research UAE',
        'Healthcare market research UAE',
        'Top pharma companies in UAE',
      ]}
      faqItems={[
        {
          question: 'What does market research UAE usually include for pharma teams?',
          answer:
            'Most UAE studies combine physician insight, institution mapping, and access barriers across DHA, DOH, and MOHAP pathways.',
        },
        {
          question: 'Can this page support top-companies search intent too?',
          answer:
            'Yes. It links to dedicated UAE top-pharma-companies content while keeping this page focused on service and decision intent.',
        },
      ]}
      relatedLinks={[
        { to: '/uae-pharmaceutical-market-research', label: 'Pharma market research company in UAE' },
        { to: '/pharmaceutical-companies-uae', label: 'Top pharmaceutical companies in UAE' },
        { to: '/market-research-ksa', label: 'Market research KSA' },
        { to: '/market-research-kuwait', label: 'Market research Kuwait' },
      ]}
    />
  );
}
