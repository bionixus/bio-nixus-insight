import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function UaePricingReimbursementStrategy() {
  return (
    <StrategicServicePage
      title="UAE Pricing and Reimbursement Strategy | BioNixus"
      description="UAE pricing and reimbursement strategy research with payer landscape mapping, DHA/DOH/MOHAP evidence requirements, and value-story development for market access teams."
      canonicalUrl="https://www.bionixus.com/uae-pricing-reimbursement-strategy"
      breadcrumbLabel="UAE Pricing and Reimbursement Strategy"
      h1="UAE Pricing and Reimbursement Strategy"
      intro="BioNixus supports UAE pricing and reimbursement strategy with payer research, DHA/DOH/MOHAP access requirement mapping, and evidence package development for pharmaceutical market access teams."
      links={[
        { to: '/uae-market-access-research', label: 'UAE market access research', primary: true },
        { to: '/uae-pharmaceutical-market-research', label: 'UAE pharmaceutical market research', primary: true },
        { to: '/heor-consulting-saudi-arabia', label: 'HEOR consulting Saudi Arabia' },
        { to: '/contact', label: 'Request pricing and reimbursement scope' },
      ]}
      bullets={[
        'Payer willingness-to-pay research across DHA, DOH, and MOHAP decision-maker audiences.',
        'Regulator evidence requirement mapping aligned to current UAE formulary access criteria.',
        'Outcomes-linked value story development connecting clinical and economic evidence to payer priorities.',
      ]}
      decisionPoints={[
        {
          title: 'Why it matters',
          body: 'UAE pricing and reimbursement decisions are shaped by three separate regulatory bodies, each with distinct evidence requirements that must be addressed before formulary listing.',
        },
        {
          title: 'What the evidence says',
          body: 'Payer willingness-to-pay research surfaces the value dimensions that most influence DHA, DOH, and MOHAP access decisions, allowing evidence packages to be targeted rather than generic.',
        },
        {
          title: 'What to do next',
          body: 'Map your target payer landscape across UAE regulators and insurers, then commission an evidence requirement assessment and value story development package.',
        },
      ]}
      metrics={[
        {
          label: 'Regulators mapped',
          value: 'DHA/DOH/MOHAP',
          detail: 'Full coverage of UAE health authority payer landscapes and formulary access criteria.',
        },
        {
          label: 'Value story',
          value: 'Outcomes-linked',
          detail: 'Value narratives built on clinical and economic evidence aligned to UAE payer decision criteria.',
        },
        {
          label: 'Timeline',
          value: '8-12 weeks',
          detail: 'From payer landscape mapping to completed evidence package and value story development.',
        },
      ]}
    />
  );
}
