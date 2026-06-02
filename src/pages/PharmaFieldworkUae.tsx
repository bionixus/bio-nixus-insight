import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function PharmaFieldworkUae() {
  return (
    <StrategicServicePage
      title="Pharma Fieldwork UAE | Physician & Payer Research | BioNixus"
      description="Pharma fieldwork in the UAE: bilingual HCP recruitment across DHA and DOH contexts, hospital access coordination, and quality-controlled emirate-level data collection."
      canonicalUrl="https://www.bionixus.com/pharma-fieldwork-uae"
      breadcrumbLabel="Pharma Fieldwork UAE"
      h1="Pharma Fieldwork UAE"
      intro="BioNixus delivers pharma fieldwork in the UAE with verified physician and payer recruitment, Arabic–English moderation, and governance aligned to DHA, DOH, and MOHAP realities—not consumer panel shortcuts."
      links={[
        {
          to: '/uae-pharmaceutical-market-research',
          label: 'Healthcare market research company in UAE',
          primary: true,
        },
        { to: '/market-research-uae', label: 'Market research in the UAE', primary: true },
        { to: '/healthcare-fieldwork-middle-east', label: 'Healthcare fieldwork Middle East' },
        { to: '/blog/abu-dhabi-doh-vs-dubai-dha-formulary-guide', label: 'DOH vs DHA formulary guide' },
        { to: '/contact', label: 'Request UAE fieldwork scope' },
        { to: '/market-research-healthcare', label: 'Healthcare market research services' },
        { to: '/methodology', label: 'Our research methodology' },
      ]}
      bullets={[
        'Specialist recruitment across Dubai, Abu Dhabi, and Northern Emirates networks.',
        'Bilingual screeners, moderation, and transcription with medical terminology QA.',
        'Hospital and ethics access coordination for oncology, rare disease, and biologics.',
        'Daily QC dashboards for global sponsors running parallel GCC cells.',
      ]}
      decisionPoints={[
        {
          title: 'Fieldwork decides the decision',
          body: 'UAE fieldwork quality determines whether launch and access decisions reflect real emirate-level prescriber and payer behavior — or a convenience sample skewed to one city.',
        },
        {
          title: 'Map DHA/DOH access first',
          body: 'Early DHA and DOH feasibility mapping reduces failed recruitment and incomplete insurer coverage across the emirates that matter for your product.',
        },
        {
          title: 'Pilot one emirate, then scale',
          body: 'Scope one therapy and one emirate decision gate, then run a four-week UAE fieldwork pilot before committing to regional scale-up.',
        },
      ]}
      metrics={[
        {
          label: 'Feasibility',
          value: '5–10 days',
          detail: 'Typical timeline to confirm UAE sample frames and hospital access paths.',
        },
        {
          label: 'Languages',
          value: 'AR + EN',
          detail: 'Arabic and English instruments, moderation, and sponsor readouts.',
        },
        {
          label: 'Coverage',
          value: 'Multi-emirate',
          detail: 'DHA, DOH, and MOHAP-relevant stakeholders where therapy model requires.',
        },
      ]}
    />
  );
}
