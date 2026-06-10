import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function PatientSupportProgramResearchGcc() {
  return (
    <StrategicServicePage
      title="Patient Support Program Research GCC | BioNixus"
      description="Patient support program research GCC for adherence, persistence, and pathway optimization with practical evidence for pharmaceutical and medical teams."
      canonicalUrl="https://www.bionixus.com/patient-support-program-research-gcc"
      breadcrumbLabel="Patient Support Program Research GCC"
      h1="Patient Support Program Research GCC"
      intro="In the GCC, a lot of a brand's value leaks after launch — at the points where patients fall out of diagnosis, initiation, and refill. Patient support programs are meant to close those gaps, but only if you know where the friction actually sits. BioNixus maps the diagnosis-to-treatment journey, locates the real drop-off points, and turns them into support interventions you can test against an adherence or persistence metric."
      links={[
        { to: '/real-world-evidence-gcc', label: 'Real world evidence GCC', primary: true },
        { to: '/healthcare-fieldwork-middle-east', label: 'Healthcare fieldwork Middle East', primary: true },
        { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC' },
        { to: '/contact', label: 'Request PSP research scope' },
        { to: '/market-research-healthcare', label: 'Healthcare market research services' },
        { to: '/methodology', label: 'Our research methodology' },
      ]}
      bullets={[
        'Patient-journey diagnostics with drop-off and bottleneck mapping.',
        'PSP effectiveness assessment with practical optimization hypotheses.',
        'Stakeholder evidence synthesis for medical, access, and commercial teams.',
      ]}
      decisionPoints={[
        {
          title: 'Adherence is where value leaks',
          body: 'Post-launch performance depends on persistence as much as on initial uptake. A program that lifts refill and continuation rates often outperforms another push on new starts.',
        },
        {
          title: 'Find the friction, not the average',
          body: 'Journey diagnostics show exactly where patients disengage — cost, access, side-effect management, or follow-up — so support is aimed at the steps that actually cause drop-off.',
        },
        {
          title: 'Improve one journey, measurably',
          body: 'Tie each intervention to a defined adherence or experience metric. A hypothesis-led change you can measure beats a broad PSP refresh with no baseline to prove it worked.',
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

