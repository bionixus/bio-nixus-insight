import StrategicServicePage from '@/pages/templates/StrategicServicePage';
import { getServiceLandingContent } from '@/data/serviceLandingContent';

const expandedContent = getServiceLandingContent('healthcare-market-research-agency-gcc');

export default function HealthcareMarketResearchAgencyGcc() {
  return (
    <StrategicServicePage
      title="Healthcare Market Research Companies GCC | Agency for Pharma Evidence | BioNixus"
      description="Healthcare market research companies in GCC: BioNixus delivers proposal-ready pharmaceutical launch, market access, and growth evidence across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman."
      canonicalUrl="https://www.bionixus.com/healthcare-market-research-agency-gcc"
      breadcrumbLabel="Healthcare Market Research Agency GCC"
      h1="Healthcare Market Research Companies in GCC for Pharmaceutical Launch and Access Decisions"
      serviceType="Pharmaceutical market research and market access intelligence"
      areaServed={['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Qatar', 'Bahrain', 'Oman']}
      intro="BioNixus is a pharma market research company in GCC supporting teams across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman with evidence programs built for practical decisions. For broader regional strategy, start from our healthcare market research hub — then scope one therapy and one decision gate as a pilot."
      links={[
        { to: '/healthcare-market-research', label: 'Healthcare market research hub', primary: true },
        { to: '/bionixus-market-research-middle-east', label: 'Middle East pharmaceutical market research', primary: true },
        { to: '/uae-market-access-research', label: 'Market access research UAE' },
        { to: '/kuwait-market-access-research', label: 'Market access research Kuwait' },
        { to: '/healthcare-fieldwork-middle-east', label: 'Healthcare fieldwork Middle East' },
        { to: '/real-world-evidence-gcc', label: 'Real world evidence GCC' },
        { to: '/contact', label: 'Request a proposal' },
      ]}
      bullets={[
        'Commercial and launch readiness research with facility-level realism.',
        'Market access and payer intelligence mapped to SFDA, MOHAP, and committee calendars.',
        'Physician and HCP insight programs with specialist recruitment across public and private networks.',
        'HEOR and budget-impact support aligned to SFDA EES where applicable.',
      ]}
      decisionPoints={[
        {
          title: 'Agency choice shapes speed, trust, and risk',
          body: 'Agency choice affects decision speed, evidence trust, and launch risk across multiple GCC markets — especially when SFDA EES and centralized procurement raise the evidence bar.',
        },
        {
          title: 'One partner, one evidence framework',
          body: 'Teams perform better when one partner aligns commercial, medical, and access outputs in one framework with documented quality governance.',
        },
        {
          title: 'Prioritise depth and governance before you select',
          body: 'Prioritize country depth, bilingual execution, and proposal-to-action translation before vendor selection — then scope one therapy and one decision gate as a pilot.',
        },
      ]}
      metrics={[
        {
          label: 'Timeline impact',
          value: '−21%',
          detail: 'Average reduction in proposal-to-field execution cycles (internal benchmark).',
        },
        {
          label: 'Decision alignment',
          value: '87%',
          detail: 'Stakeholder agreement rate on the first decision-readout workshop.',
        },
        {
          label: 'GCC coverage',
          value: '6/6',
          detail: 'Markets covered with one harmonized evidence architecture.',
        },
      ]}
      expandedContent={expandedContent}
    />
  );
}
