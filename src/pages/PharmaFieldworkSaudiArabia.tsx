import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function PharmaFieldworkSaudiArabia() {
  return (
    <StrategicServicePage
      title="Pharma Fieldwork Saudi Arabia | BioNixus"
      description="Pharma fieldwork in Saudi Arabia with bilingual recruitment, SFDA-aware research design, and physician, pharmacist, and payer cohort coverage across KSA regions."
      canonicalUrl="https://www.bionixus.com/pharma-fieldwork-saudi-arabia"
      breadcrumbLabel="Pharma Fieldwork Saudi Arabia"
      h1="Pharma Fieldwork Saudi Arabia"
      intro="BioNixus delivers pharma fieldwork in Saudi Arabia with bilingual interviewers, region-specific quota management, and validated specialist cohorts for KSA market studies."
      links={[
        { to: '/healthcare-fieldwork-middle-east', label: 'Healthcare fieldwork Middle East', primary: true },
        { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Market research Saudi Arabia pharmaceutical', primary: true },
        { to: '/gcc-hcp-recruitment-market-research', label: 'GCC HCP recruitment market research' },
        { to: '/contact', label: 'Request KSA fieldwork scope' },
      ]}
      bullets={[
        'Bilingual Arabic and English interviewers with pharma therapeutic area experience.',
        'SFDA-aware research design aligned to KSA regulatory and market access context.',
        'Regional quota coverage spanning Riyadh, Jeddah, Eastern Province, and beyond.',
      ]}
      decisionPoints={[
        {
          title: 'Why it matters',
          body: 'Bilingual fieldwork operations ensure respondent comfort and data accuracy for KSA physician, payer, and pharmacist audiences across Arabic-dominant regions.',
        },
        {
          title: 'What the evidence says',
          body: 'SFDA-aware research design improves data credibility for market access submissions and lifecycle evidence packages within Saudi Arabia.',
        },
        {
          title: 'What to do next',
          body: 'Specify your KSA specialist target and regional spread, then request a feasibility and bilingual quota plan for your study timeline.',
        },
      ]}
      metrics={[
        {
          label: 'Bilingual capability',
          value: 'Arabic + English',
          detail: 'Full bilingual operations for all KSA physician, payer, and pharmacist studies.',
        },
        {
          label: 'Regions covered',
          value: '5+',
          detail: 'Riyadh, Jeddah, Eastern Province, Makkah, Madinah, and additional KSA regions.',
        },
        {
          label: 'Specialist types',
          value: 'HCP/payer/pharmacist',
          detail: 'Validated cohorts across physician specialties, payer decision-makers, and community pharmacists.',
        },
      ]}
    />
  );
}
