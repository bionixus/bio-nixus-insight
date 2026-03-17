import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function HeorConsultingSaudiArabia() {
  return (
    <StrategicServicePage
      title="HEOR Consulting Saudi Arabia | BioNixus"
      description="HEOR consulting in Saudi Arabia for budget impact models, value evidence planning, and payer-facing reimbursement strategy support."
      canonicalUrl="https://www.bionixus.com/heor-consulting-saudi-arabia"
      breadcrumbLabel="HEOR Consulting Saudi Arabia"
      h1="HEOR Consulting Saudi Arabia"
      intro="BioNixus supports HEOR consulting in Saudi Arabia with practical budget-impact modeling, localized value narratives, and evidence packages aligned to payer and procurement realities."
      links={[
        { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC', primary: true },
        { to: '/budget-impact-model-saudi-arabia', label: 'Budget impact model Saudi Arabia', primary: true },
        { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Pharma market research company in Saudi Arabia' },
        { to: '/contact', label: 'Request HEOR scope' },
      ]}
      bullets={[
        'Budget impact model design with KSA market assumptions.',
        'Value communication testing for institutional stakeholders.',
        'Cross-functional translation for market access and commercial teams.',
      ]}
      decisionPoints={[
        {
          title: 'Why it matters',
          body: 'HEOR quality directly affects reimbursement confidence and budget approval speed.',
        },
        {
          title: 'What the evidence says',
          body: 'Locally calibrated assumptions outperform imported models in committee-level review.',
        },
        {
          title: 'What to do next',
          body: 'Start with one high-impact indication and build an auditable value and budget evidence path.',
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

