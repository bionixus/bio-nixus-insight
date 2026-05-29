import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function PharmaFieldworkSaudiArabia() {
  return (
    <StrategicServicePage
      title="Pharma Fieldwork Saudi Arabia | Physician & Payer Research | BioNixus"
      description="Pharma fieldwork in Saudi Arabia: bilingual HCP recruitment, hospital access coordination, SFDA-sensitive therapy areas, and quality-controlled KSA data collection."
      canonicalUrl="https://www.bionixus.com/pharma-fieldwork-saudi-arabia"
      breadcrumbLabel="Pharma Fieldwork Saudi Arabia"
      h1="Pharma Fieldwork Saudi Arabia"
      intro="BioNixus delivers pharma fieldwork in Saudi Arabia with verified physician and payer recruitment, Arabic–English moderation, and governance aligned to SFDA and institutional access realities—not consumer panel shortcuts."
      links={[
        {
          to: '/market-research-saudi-arabia-pharmaceutical',
          label: 'Healthcare market research company in Saudi Arabia',
          primary: true,
        },
        { to: '/market-research-ksa', label: 'Market research KSA', primary: true },
        { to: '/healthcare-fieldwork-middle-east', label: 'Healthcare fieldwork Middle East' },
        { to: '/blog/nupco-saudi-arabia-tendering-guide', label: 'NUPCO tendering guide' },
        { to: '/contact', label: 'Request KSA fieldwork scope' },
      ]}
      bullets={[
        'Specialist and scarce-HCP recruitment across MOH, NGHA, and private networks.',
        'Bilingual screeners, moderation, and transcription with medical terminology QA.',
        'Hospital and ethics access coordination for oncology, rare disease, and biologics.',
        'Daily QC dashboards for global sponsors running parallel GCC cells.',
      ]}
      decisionPoints={[
        {
          title: 'Why it matters',
          body: 'KSA fieldwork quality determines whether launch and access decisions reflect real prescriber and committee behavior.',
        },
        {
          title: 'What the evidence says',
          body: 'Early feasibility and access mapping reduce failed recruitment and incomplete payer coverage.',
        },
        {
          title: 'What to do next',
          body: 'Scope one therapy and one decision gate, then run a four-week Saudi fieldwork pilot before regional scale-up.',
        },
      ]}
      metrics={[
        {
          label: 'Feasibility',
          value: '5–10 days',
          detail: 'Typical timeline to confirm KSA sample frames and hospital access paths.',
        },
        {
          label: 'Languages',
          value: 'AR + EN',
          detail: 'Arabic and English instruments, moderation, and sponsor readouts.',
        },
        {
          label: 'Coverage',
          value: 'Multi-channel',
          detail: 'Public, private, and procurement stakeholders where therapy model requires.',
        },
      ]}
    />
  );
}
