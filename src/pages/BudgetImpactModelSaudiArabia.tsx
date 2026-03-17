import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function BudgetImpactModelSaudiArabia() {
  return (
    <StrategicServicePage
      title="Budget Impact Model Saudi Arabia | BioNixus"
      description="Budget impact model support in Saudi Arabia with payer-relevant assumptions, scenario testing, and actionable evidence for market access planning."
      canonicalUrl="https://www.bionixus.com/budget-impact-model-saudi-arabia"
      breadcrumbLabel="Budget Impact Model Saudi Arabia"
      h1="Budget Impact Model Saudi Arabia"
      intro="BioNixus builds budget impact models for Saudi Arabia with local market assumptions, uptake scenarios, and payer-aligned evidence framing for practical access decisions."
      links={[
        { to: '/heor-consulting-saudi-arabia', label: 'HEOR consulting Saudi Arabia', primary: true },
        { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Pharma market research company in Saudi Arabia', primary: true },
        { to: '/saudi-payer-market-access-research', label: 'Saudi payer market access research' },
        { to: '/contact', label: 'Request budget-impact scope' },
      ]}
      bullets={[
        'Scenario design with market-specific uptake and budget assumptions.',
        'Sensitivity testing for payer-facing confidence and risk framing.',
        'Clear translation from model output to negotiation and access strategy.',
      ]}
      decisionPoints={[
        {
          title: 'Why it matters',
          body: 'Budget models shape payer confidence and determine how quickly access decisions move forward.',
        },
        {
          title: 'What the evidence says',
          body: 'Localized assumptions produce stronger committee confidence than imported global averages.',
        },
        {
          title: 'What to do next',
          body: 'Define target scenario ranges, test sensitivity bands, and align outputs to payer decision windows.',
        },
      ]}
      metrics={[
        {
          label: 'Model setup',
          value: '1-3 weeks',
          detail: 'Typical timeline for first executable budget impact model draft.',
        },
        {
          label: 'Scenario structure',
          value: 'Base + stress',
          detail: 'Outputs include base case and sensitivity-driven planning scenarios.',
        },
        {
          label: 'Decision readiness',
          value: 'Negotiation-ready',
          detail: 'Model narrative aligns with payer and institutional review requirements.',
        },
      ]}
    />
  );
}

