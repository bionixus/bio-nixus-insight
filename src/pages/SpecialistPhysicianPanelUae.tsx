import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function SpecialistPhysicianPanelUae() {
  return (
    <StrategicServicePage
      title="Specialist Physician Panel UAE | BioNixus"
      description="Specialist physician panel UAE for pharmaceutical market research with validated HCP cohorts across oncology, cardiology, diabetes, and respiratory specialties."
      canonicalUrl="https://www.bionixus.com/specialist-physician-panel-uae"
      breadcrumbLabel="Specialist Physician Panel UAE"
      h1="Specialist Physician Panel UAE"
      intro="BioNixus maintains specialist physician panels in UAE across key therapeutic specialties, providing validated HCP cohorts for surveys, concept tests, and advisory sessions."
      links={[
        { to: '/gcc-hcp-recruitment-market-research', label: 'GCC HCP recruitment market research', primary: true },
        { to: '/pharma-fieldwork-uae', label: 'Pharma fieldwork UAE', primary: true },
        { to: '/uae-pharmaceutical-market-research', label: 'UAE pharmaceutical market research' },
        { to: '/contact', label: 'Request specialist panel access' },
      ]}
      bullets={[
        'Role and license verified HCP cohorts across 12 or more UAE therapeutic specialties.',
        'Specialty depth with sufficient panel size for segmented analysis by setting and prescribing tier.',
        'Rapid advisory panel access within 48 to 72 hours for time-sensitive concept tests and ad boards.',
      ]}
      decisionPoints={[
        {
          title: 'Why it matters',
          body: 'Validated specialist panels prevent respondent misrepresentation and ensure that survey and advisory findings reflect genuine UAE HCP prescribing behavior and clinical perspective.',
        },
        {
          title: 'What the evidence says',
          body: 'Specialty depth across oncology, cardiology, diabetes, and respiratory allows segmented analysis that reveals the prescribing and access dynamics specific to each therapeutic area.',
        },
        {
          title: 'What to do next',
          body: 'Specify your target specialty, UAE emirate focus, and study format, then request a panel feasibility with validated respondent counts and timeline.',
        },
      ]}
      metrics={[
        {
          label: 'Specialties',
          value: '12+ therapeutic areas',
          detail: 'Validated UAE physician panels spanning oncology, cardiology, diabetes, respiratory, and more.',
        },
        {
          label: 'Validation',
          value: 'Role + license verified',
          detail: 'Every panel member verified by specialty registration and active clinical practice.',
        },
        {
          label: 'Turnaround',
          value: '48-72h for advisory panels',
          detail: 'Rapid advisory panel assembly for concept tests, ad boards, and time-sensitive engagements.',
        },
      ]}
    />
  );
}
