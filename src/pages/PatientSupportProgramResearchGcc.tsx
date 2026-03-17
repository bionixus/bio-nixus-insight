import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function PatientSupportProgramResearchGcc() {
  return (
    <StrategicServicePage
      title="Patient Support Program Research GCC | BioNixus"
      description="Patient support program research GCC for adherence, persistence, and pathway optimization with practical evidence for pharmaceutical and medical teams."
      canonicalUrl="https://www.bionixus.com/patient-support-program-research-gcc"
      breadcrumbLabel="Patient Support Program Research GCC"
      h1="Patient Support Program Research GCC"
      intro="BioNixus designs patient support program research for GCC markets to improve adherence, persistence, and operational quality across diagnosis-to-treatment pathways."
      links={[
        { to: '/real-world-evidence-gcc', label: 'Real world evidence GCC', primary: true },
        { to: '/healthcare-fieldwork-middle-east', label: 'Healthcare fieldwork Middle East', primary: true },
        { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC' },
        { to: '/contact', label: 'Request PSP research scope' },
      ]}
      bullets={[
        'Patient-journey diagnostics with drop-off and bottleneck mapping.',
        'PSP effectiveness assessment with practical optimization hypotheses.',
        'Stakeholder evidence synthesis for medical, access, and commercial teams.',
      ]}
      decisionPoints={[
        {
          title: 'Why it matters',
          body: 'PSP quality impacts adherence outcomes and brand performance after launch.',
        },
        {
          title: 'What the evidence says',
          body: 'Journey friction diagnostics identify where support interventions improve persistence most.',
        },
        {
          title: 'What to do next',
          body: 'Prioritize one patient journey, validate drop-off causes, and deploy targeted support improvements.',
        },
      ]}
      metrics={[
        {
          label: 'Journey coverage',
          value: 'End-to-end',
          detail: 'From diagnosis to ongoing treatment support and persistence checkpoints.',
        },
        {
          label: 'Optimization model',
          value: 'Hypothesis-led',
          detail: 'Every recommendation ties to a measurable adherence or experience objective.',
        },
        {
          label: 'Action horizon',
          value: '30/60/90',
          detail: 'Structured optimization windows for cross-functional PSP owners.',
        },
      ]}
    />
  );
}

