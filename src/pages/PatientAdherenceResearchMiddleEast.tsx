import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function PatientAdherenceResearchMiddleEast() {
  return (
    <StrategicServicePage
      title="Patient Adherence Research Middle East | BioNixus"
      description="Patient adherence research in the Middle East for pharmaceutical teams measuring persistence, drop-off, and behavioral barriers across GCC and MENA disease cohorts."
      canonicalUrl="https://www.bionixus.com/patient-adherence-research-middle-east"
      breadcrumbLabel="Patient Adherence Research Middle East"
      h1="Patient Adherence Research Middle East"
      intro="BioNixus designs patient adherence research for Middle East markets measuring persistence rates, drop-off causes, and behavioral barriers to inform support program improvements and lifecycle strategy."
      links={[
        { to: '/patient-support-program-research-gcc', label: 'Patient support program research GCC', primary: true },
        { to: '/patient-journey-research-gcc', label: 'Patient journey research GCC', primary: true },
        { to: '/real-world-evidence-gcc', label: 'Real world evidence GCC' },
        { to: '/contact', label: 'Request adherence research scope' },
      ]}
      bullets={[
        'Multi-stage persistence measurement across initiation, early, and long-term treatment phases.',
        'Behavioral barrier analysis combining qualitative exploration with quantitative validation.',
        'Support program calibration with actionable recommendations linked to lifecycle value objectives.',
      ]}
      decisionPoints={[
        {
          title: 'Why it matters',
          body: 'Poor adherence in Middle East markets erodes brand performance and reduces real-world outcomes evidence available for lifecycle and access decisions.',
        },
        {
          title: 'What the evidence says',
          body: 'Behavioral barrier analysis identifies the specific drivers of drop-off by treatment stage, enabling targeted support interventions with measurable persistence impact.',
        },
        {
          title: 'What to do next',
          body: 'Define the treatment stage and disease area, prioritize the GCC or MENA market scope, and commission a multi-stage adherence diagnostic.',
        },
      ]}
      metrics={[
        {
          label: 'Drop-off identification',
          value: 'Multi-stage',
          detail: 'Persistence measured at initiation, 90-day, and 12-month checkpoints across treatment cohorts.',
        },
        {
          label: 'Behavioral analysis',
          value: 'Qual + quant',
          detail: 'Mixed-method design combining in-depth patient interviews with quantitative barrier validation.',
        },
        {
          label: 'Lifecycle value',
          value: 'Lifecycle-connected',
          detail: 'Adherence findings linked directly to brand lifecycle strategy and support program ROI.',
        },
      ]}
    />
  );
}
