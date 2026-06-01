import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function RespiratoryMarketAccessGcc() {
  return (
    <StrategicServicePage
      title="Respiratory Market Access GCC | BioNixus"
      description="Respiratory market access research GCC for pharmaceutical teams covering payer requirements, formulary access barriers, and HCP treatment pathway evidence across GCC markets."
      canonicalUrl="https://www.bionixus.com/respiratory-market-access-gcc"
      breadcrumbLabel="Respiratory Market Access GCC"
      h1="Respiratory Market Access GCC"
      intro="BioNixus delivers respiratory market access research for GCC pharmaceutical teams covering payer evidence requirements, formulary positioning, and HCP pathway mapping for asthma, COPD, and rare respiratory conditions."
      links={[
        { to: '/gcc-market-access-guide', label: 'GCC market access guide', primary: true },
        { to: '/real-world-evidence-gcc', label: 'Real world evidence GCC', primary: true },
        { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC' },
        { to: '/contact', label: 'Request respiratory market access scope' },
      ]}
      bullets={[
        'Formulary access barrier analysis across ministry, insurer, and hospital payer stakeholders in GCC.',
        'Payer evidence requirement mapping for asthma, COPD, and rare respiratory conditions by market.',
        'HCP treatment pathway mapping capturing prescribing triggers, step therapy, and switching dynamics.',
      ]}
      decisionPoints={[
        {
          title: 'Why it matters',
          body: 'Respiratory formulary access in GCC is gated by ministry, insurer, and hospital-level payer requirements that vary by market and condition, making evidence package alignment essential.',
        },
        {
          title: 'What the evidence says',
          body: 'Payer evidence requirement mapping identifies the specific clinical and economic data points that most influence formulary decisions for respiratory therapies in each GCC market.',
        },
        {
          title: 'What to do next',
          body: 'Define your respiratory indication and target GCC markets, then commission a payer landscape and HCP pathway study to build an access dossier ready submission.',
        },
      ]}
      metrics={[
        {
          label: 'Conditions covered',
          value: 'Asthma/COPD/rare respiratory',
          detail: 'Market access research spanning major and rare respiratory conditions across GCC pharmaceutical markets.',
        },
        {
          label: 'Payer stakeholders',
          value: 'Ministry + insurer + hospital',
          detail: 'Full payer landscape coverage across ministry of health, private insurer, and hospital formulary decision-makers.',
        },
        {
          label: 'Output',
          value: 'Access dossier ready',
          detail: 'Research outputs structured for direct use in GCC market access dossier development and payer submission.',
        },
      ]}
    />
  );
}
