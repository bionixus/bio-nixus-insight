import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function HealthcareFieldworkGcc() {
  return (
    <StrategicServicePage
      title="Healthcare Fieldwork GCC | BioNixus"
      description="Healthcare fieldwork GCC for pharmaceutical and medical device studies with validated specialist recruitment, incidence-aware sampling, and audit-ready delivery."
      canonicalUrl="https://www.bionixus.com/healthcare-fieldwork-gcc"
      breadcrumbLabel="Healthcare Fieldwork GCC"
      h1="Healthcare Fieldwork GCC"
      intro="BioNixus runs healthcare fieldwork across GCC markets with role-verified specialist cohorts, daily quality governance, and compliant dataset delivery for pharma and medical device teams."
      links={[
        { to: '/healthcare-fieldwork-middle-east', label: 'Healthcare fieldwork Middle East', primary: true },
        { to: '/gcc-hcp-recruitment-market-research', label: 'GCC HCP recruitment market research', primary: true },
        { to: '/real-world-evidence-gcc', label: 'Real world evidence GCC' },
        { to: '/contact', label: 'Request healthcare fieldwork scope' },
      ]}
      bullets={[
        'Role-verified specialist cohorts for physician, pharmacist, and payer studies.',
        'Incidence-aware sampling with daily quota telemetry across all six GCC markets.',
        'Audit-ready dataset delivery with three-tier QC protocol and full documentation.',
      ]}
      decisionPoints={[
        {
          title: 'Why it matters',
          body: 'Role verification at fieldwork entry prevents respondent fraud and ensures specialist-grade data quality for regulatory-adjacent studies.',
        },
        {
          title: 'What the evidence says',
          body: 'Real-time quota telemetry identifies incidence shortfalls early, enabling mid-field corrections that protect completion timelines and study integrity.',
        },
        {
          title: 'What to do next',
          body: 'Define your specialist target, confirm market spread across GCC, and request a fieldwork feasibility with completion rate projections.',
        },
      ]}
      metrics={[
        {
          label: 'Completion rate',
          value: '22-35%',
          detail: 'Achieved across validated specialist cohorts in GCC healthcare fieldwork.',
        },
        {
          label: 'Markets covered',
          value: '6 GCC',
          detail: 'Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman with local field operations.',
        },
        {
          label: 'QC protocol',
          value: '3-tier',
          detail: 'Recruitment verification, in-field monitoring, and post-field audit at every study.',
        },
      ]}
    />
  );
}
