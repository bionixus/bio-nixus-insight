import StrategicServicePage from '@/pages/templates/StrategicServicePage';
import { getServiceLandingContent } from '@/data/serviceLandingContent';

const expandedContent = getServiceLandingContent('pharma-fieldwork-saudi-arabia');

export default function PharmaFieldworkSaudiArabia() {
  return (
    <StrategicServicePage
      title="Pharma Fieldwork Saudi Arabia | Physician & Payer Research | BioNixus"
      description="Pharma fieldwork in Saudi Arabia: bilingual HCP recruitment, hospital access coordination, SFDA-sensitive therapy areas, and quality-controlled KSA data."
      canonicalUrl="https://www.bionixus.com/pharma-fieldwork-saudi-arabia"
      breadcrumbLabel="Pharma Fieldwork Saudi Arabia"
      h1="Pharma Fieldwork Saudi Arabia"
      intro="BioNixus delivers pharma fieldwork in Saudi Arabia with verified physician and payer recruitment, Arabic–English moderation, and governance aligned to SFDA and institutional access realities—not consumer panel shortcuts. Start from our healthcare market research hub for regional context, then scope one KSA fieldwork objective aligned to your launch or access milestone."
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
        { to: '/market-research-healthcare', label: 'Healthcare market research services' },
        { to: '/methodology', label: 'Our research methodology' },
      ]}
      bullets={[
        'Specialist and scarce-HCP recruitment across MOH, NGHA, and private networks.',
        'Bilingual screeners, moderation, and transcription with medical terminology QA.',
        'Hospital and ethics access coordination for oncology, rare disease, and biologics.',
        'Daily QC dashboards for global sponsors running parallel GCC cells.',
      ]}
      decisionPoints={[
        {
          title: 'Fieldwork decides the decision',
          body: 'KSA fieldwork quality determines whether launch and access decisions reflect real prescriber and committee behavior — or just whoever was easiest to reach.',
        },
        {
          title: 'Map access before you recruit',
          body: 'Early feasibility and hospital-access mapping reduce failed recruitment and incomplete payer coverage once fieldwork is live.',
        },
        {
          title: 'Pilot one therapy, then scale',
          body: 'Scope one therapy and one decision gate, then run a four-week Saudi fieldwork pilot before committing to regional scale-up.',
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
      expandedContent={expandedContent}
    />
  );
}
