import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function HeorConsultingSaudiArabia() {
  return (
    <StrategicServicePage
      title="HEOR Consulting Saudi Arabia | BioNixus"
      description="HEOR consulting in Saudi Arabia for budget impact models, value evidence planning, and payer-facing reimbursement strategy support."
      canonicalUrl="https://www.bionixus.com/heor-consulting-saudi-arabia"
      breadcrumbLabel="HEOR Consulting Saudi Arabia"
      h1="HEOR Consulting Saudi Arabia"
      intro="HEOR only earns reimbursement in Saudi Arabia when the assumptions survive committee scrutiny. Imported global models lose credibility fast when local epidemiology, treatment patterns, and pricing don't match. BioNixus builds budget-impact models and value narratives calibrated to the Kingdom, then translates them into evidence packages that access, medical, and finance teams can all defend."
      links={[
        { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC', primary: true },
        { to: '/biosimilar-market-entry-saudi-arabia', label: 'Biosimilar market entry Saudi Arabia', primary: true },
        { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Healthcare market research company in Saudi Arabia' },
        { to: '/contact', label: 'Request HEOR scope' },
        { to: '/market-research-healthcare', label: 'Healthcare market research services' },
        { to: '/methodology', label: 'Our research methodology' },
      ]}
      bullets={[
        'Budget impact model design with KSA market assumptions.',
        'Value communication testing for institutional stakeholders.',
        'Cross-functional translation for market access and commercial teams.',
      ]}
      decisionPoints={[
        {
          title: 'Local assumptions win committees',
          body: 'A model built on Saudi epidemiology, mix, and pricing is far harder to dismiss than a global average dropped into a local template. Credibility in review is where reimbursement speed is won or lost.',
        },
        {
          title: 'One indication, built to defend',
          body: 'Start narrow with a high-impact indication and an auditable value-and-budget path. A defensible single case builds more momentum than a broad model nobody fully trusts.',
        },
        {
          title: 'Translate for the room',
          body: 'The same evidence has to speak to market access, medical affairs, and finance at once. Outputs are framed for cross-functional decisions, not just for a health-economist audience.',
        },
      ]}
      metrics={[
        {
          label: 'Model readiness',
          value: '2-3 weeks',
          detail: 'Typical timeline from objective lock to first draft decision model.',
        },
        {
          label: 'Evidence alignment',
          value: 'Payer-ready',
          detail: 'Scenarios mapped to practical reimbursement and procurement conversations.',
        },
        {
          label: 'Decision output',
          value: 'Action-led',
          detail: 'Outputs include explicit next-step choices for access and commercial leadership.',
        },
      ]}
    />
  );
}

