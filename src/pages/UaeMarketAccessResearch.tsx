import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function UaeMarketAccessResearch() {
  return (
    <StrategicServicePage
      title="Market Access Research UAE | BioNixus"
      description="Market access research UAE for pricing, reimbursement, and formulary pathway decisions across DHA, DOH, and MOHAP contexts."
      canonicalUrl="https://www.bionixus.com/uae-market-access-research"
      breadcrumbLabel="Market Access Research UAE"
      h1="Market Access Research UAE"
      intro="BioNixus helps teams plan UAE market access with emirate-specific evidence, payer objection mapping, and pricing strategy guidance aligned to real institutional decision pathways."
      links={[
        { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC', primary: true },
        { to: '/gcc-market-access-guide', label: 'GCC market access guide', primary: true },
        { to: '/uae-pharmaceutical-market-research', label: 'Pharma market research company UAE' },
        { to: '/contact', label: 'Request UAE access scope' },
      ]}
      bullets={[
        'DOH vs DHA vs MOHAP pathway implications for launch planning.',
        'Evidence testing for pricing and reimbursement narratives.',
        'Hospital and committee-level access friction diagnostics.',
      ]}
      decisionPoints={[
        {
          title: 'Why it matters',
          body: 'Emirate variation changes pathway timelines and access feasibility for the same product.',
        },
        {
          title: 'What the evidence says',
          body: 'Early payer-objection mapping shortens revision cycles and improves evidence fit.',
        },
        {
          title: 'What to do next',
          body: 'Prioritize one target pathway, pressure-test value narrative, then sequence institutional engagement.',
        },
      ]}
      metrics={[
        {
          label: 'Scoping cycle',
          value: '7-12 days',
          detail: 'Typical objective-to-proposal timeline for UAE access scopes.',
        },
        {
          label: 'Pathway depth',
          value: '3 contexts',
          detail: 'DHA, DOH, and MOHAP-specific guidance rather than one generic UAE model.',
        },
        {
          label: 'Action horizon',
          value: '30/60/90',
          detail: 'Execution roadmap linked to launch and reimbursement milestones.',
        },
      ]}
    />
  );
}

