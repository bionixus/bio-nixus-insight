import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function PatientJourneyResearchGcc() {
  return (
    <StrategicServicePage
      title="Patient Journey Research GCC | BioNixus"
      description="Patient journey research GCC for pharmaceutical teams mapping diagnosis, treatment, and support pathways across Saudi Arabia, UAE, and wider GCC markets."
      canonicalUrl="https://www.bionixus.com/patient-journey-research-gcc"
      breadcrumbLabel="Patient Journey Research GCC"
      h1="Patient Journey Research GCC"
      intro="BioNixus maps patient journeys across GCC markets to identify diagnosis gaps, treatment pathway friction, and intervention opportunities for pharmaceutical and device teams."
      links={[
        { to: '/patient-support-program-research-gcc', label: 'Patient support program research GCC', primary: true },
        { to: '/real-world-evidence-gcc', label: 'Real world evidence GCC', primary: true },
        { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC' },
        { to: '/contact', label: 'Request patient journey research scope' },
      ]}
      bullets={[
        'End-to-end journey mapping from first symptom presentation through diagnosis to ongoing treatment.',
        'Diagnosis gap analysis identifying where patients are lost or delayed before reaching specialist care.',
        'Intervention opportunity mapping aligned to commercial, medical, and patient support objectives.',
      ]}
      decisionPoints={[
        {
          title: 'Why it matters',
          body: 'Diagnosis gaps and pathway friction in GCC markets reduce addressable patient populations and suppress brand performance after launch.',
        },
        {
          title: 'What the evidence says',
          body: 'Journey mapping reveals where HCP, system, and patient-level barriers concentrate, enabling targeted commercial and medical interventions.',
        },
        {
          title: 'What to do next',
          body: 'Select the disease area and GCC markets, define journey endpoints, and commission a decision-ready pathway map with intervention hypotheses.',
        },
      ]}
      metrics={[
        {
          label: 'Journey stages',
          value: 'Diagnosis → adherence',
          detail: 'Full pathway coverage from initial presentation through treatment adherence and support.',
        },
        {
          label: 'Markets',
          value: '6 GCC',
          detail: 'Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman with market-specific pathway variants.',
        },
        {
          label: 'Output format',
          value: 'Decision-ready',
          detail: 'Structured journey maps with ranked intervention opportunities for commercial and medical teams.',
        },
      ]}
    />
  );
}
