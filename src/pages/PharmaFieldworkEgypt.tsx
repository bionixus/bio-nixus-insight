import StrategicServicePage from '@/pages/templates/StrategicServicePage';
import { getServiceLandingContent } from '@/data/serviceLandingContent';

const expandedContent = getServiceLandingContent('pharma-fieldwork-egypt');

export default function PharmaFieldworkEgypt() {
  return (
    <StrategicServicePage
      title="Pharma Fieldwork Egypt | Physician & Pharmacy Research | BioNixus"
      description="Pharma fieldwork in Egypt: bilingual HCP and pharmacy recruitment, public/private channel coverage, EDA-sensitive therapy areas, and Cairo-based data collection."
      canonicalUrl="https://www.bionixus.com/pharma-fieldwork-egypt"
      breadcrumbLabel="Pharma Fieldwork Egypt"
      h1="Pharma Fieldwork Egypt"
      intro="BioNixus delivers pharma fieldwork in Egypt with verified physician, pharmacist, and payer recruitment, Arabic–English moderation, and governance aligned to EDA and public/private access realities—not consumer panel shortcuts. Start from our healthcare market research hub for regional context, then scope one Egypt fieldwork objective aligned to your launch or tender milestone."
      links={[
        {
          to: '/egypt-pharmaceutical-market-research',
          label: 'Healthcare market research company in Egypt',
          primary: true,
        },
        { to: '/market-research-egypt', label: 'Market research Egypt', primary: true },
        { to: '/healthcare-fieldwork-middle-east', label: 'Healthcare fieldwork Middle East' },
        { to: '/blog/healthcare-overview-egypt-market-2026', label: 'Egypt healthcare market overview' },
        { to: '/contact', label: 'Request Egypt fieldwork scope' },
        { to: '/market-research-healthcare', label: 'Healthcare market research services' },
        { to: '/methodology', label: 'Our research methodology' },
      ]}
      bullets={[
        'Physician and pharmacist recruitment across public MOH and private hospital networks.',
        'Bilingual screeners, moderation, and transcription with medical terminology QA.',
        'Channel-aware sampling for tender-led versus out-of-pocket categories.',
        'Daily QC dashboards for global sponsors running MENA multi-country programs.',
      ]}
      decisionPoints={[
        {
          title: 'Fieldwork decides the decision',
          body: 'Egypt fieldwork quality determines whether sizing and access decisions reflect real prescriber and pharmacy behavior across public and private channels.',
        },
        {
          title: 'Cover the channels before you recruit',
          body: 'Early feasibility across Cairo and regional centers — and across tender-led versus out-of-pocket channels — reduces failed recruitment and thin payer coverage.',
        },
        {
          title: 'Pilot one channel, then scale',
          body: 'Scope one therapy and one channel decision, then run a four-week Egypt fieldwork pilot before committing to regional scale-up.',
        },
      ]}
      metrics={[
        {
          label: 'Feasibility',
          value: '5–10 days',
          detail: 'Typical timeline to confirm Egypt sample frames and access paths.',
        },
        {
          label: 'Languages',
          value: 'AR + EN',
          detail: 'Arabic and English instruments, moderation, and sponsor readouts.',
        },
        {
          label: 'Coverage',
          value: 'Multi-channel',
          detail: 'Public, private, pharmacy, and payer stakeholders where therapy model requires.',
        },
      ]}
      expandedContent={expandedContent}
    />
  );
}
