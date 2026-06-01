import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function PharmaFieldworkUae() {
  return (
    <StrategicServicePage
      title="Pharma Fieldwork UAE | BioNixus"
      description="Pharma fieldwork in UAE with emirate-level recruitment, DHA/DOH/MOHAP-aware design, and multi-specialty physician and payer cohort coverage."
      canonicalUrl="https://www.bionixus.com/pharma-fieldwork-uae"
      breadcrumbLabel="Pharma Fieldwork UAE"
      h1="Pharma Fieldwork UAE"
      intro="BioNixus runs pharma fieldwork in UAE with emirate-specific quota design, validated HCP cohorts, and DHA/DOH/MOHAP-aware protocols for evidence-grade studies."
      links={[
        { to: '/healthcare-fieldwork-middle-east', label: 'Healthcare fieldwork Middle East', primary: true },
        { to: '/uae-pharmaceutical-market-research', label: 'UAE pharmaceutical market research', primary: true },
        { to: '/specialist-physician-panel-uae', label: 'Specialist physician panel UAE' },
        { to: '/contact', label: 'Request UAE fieldwork scope' },
      ]}
      bullets={[
        'Emirate-level quota design with validated HCP cohorts across Dubai, Abu Dhabi, and beyond.',
        'DHA/DOH/MOHAP-aware fieldwork protocols for credible regulatory-adjacent evidence.',
        'Real-time quality monitoring with 24-hour QC turnaround for in-field corrections.',
      ]}
      decisionPoints={[
        {
          title: 'Why it matters',
          body: 'Emirate-level quota management captures the distinct payer and prescribing dynamics of Dubai versus Abu Dhabi health systems for actionable segmentation.',
        },
        {
          title: 'What the evidence says',
          body: 'Regulator-aware fieldwork protocols produce datasets accepted by DHA, DOH, and MOHAP review processes, reducing evidence rework at market access stage.',
        },
        {
          title: 'What to do next',
          body: 'Define your UAE emirate spread and specialist target, then request a fieldwork feasibility with quota plan and QC protocol documentation.',
        },
      ]}
      metrics={[
        {
          label: 'Emirates covered',
          value: '7',
          detail: 'Full UAE coverage including Dubai, Abu Dhabi, Sharjah, and all northern emirates.',
        },
        {
          label: 'Specialist panels',
          value: 'Validated cohorts',
          detail: 'Role and license verified physician panels across key UAE therapeutic specialties.',
        },
        {
          label: 'QC turnaround',
          value: '24h',
          detail: 'In-field quality checks completed within 24 hours to protect study integrity.',
        },
      ]}
    />
  );
}
