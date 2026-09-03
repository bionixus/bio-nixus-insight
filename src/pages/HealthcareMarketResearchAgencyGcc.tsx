import StrategicServicePage from '@/pages/templates/StrategicServicePage';
import { getServiceLandingContent } from '@/data/serviceLandingContent';

const expandedContent = getServiceLandingContent('healthcare-market-research-agency-gcc');

export default function HealthcareMarketResearchAgencyGcc() {
  return (
    <StrategicServicePage
      title="Healthcare Market Research Agency GCC | BioNixus"
      description="Healthcare market research agency GCC for launch and access teams — SFDA, MOHAP, and committee-aligned evidence across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman."
      canonicalUrl="https://www.bionixus.com/healthcare-market-research-agency-gcc"
      breadcrumbLabel="Healthcare Market Research Agency GCC"
      h1="Healthcare Market Research Agency GCC for Pharmaceutical Launch and Access Decisions"
      serviceType="Pharmaceutical market research and market access intelligence"
      areaServed={['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Qatar', 'Bahrain', 'Oman']}
      intro="BioNixus is a healthcare market research agency for GCC teams across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman — with evidence programs built for practical launch and access decisions. For the global vendor shortlist, use our top healthcare market research companies guide; for methodology and coverage, start from the healthcare market research hub."
      links={[
        { to: '/market-research-gcc', label: 'Market research GCC — all six Gulf states', primary: true },
        { to: '/healthcare-market-research-companies', label: 'Top healthcare market research companies', primary: true },
        { to: '/healthcare-market-research', label: 'Healthcare market research hub', primary: true },
        { to: '/bionixus-market-research-middle-east', label: 'Middle East pharmaceutical market research', primary: true },
        { to: '/healthcare-market-research/saudi-arabia', label: 'Healthcare market research Saudi Arabia' },
        { to: '/healthcare-market-research/uae', label: 'Healthcare market research UAE' },
        { to: '/healthcare-market-research/kuwait', label: 'Healthcare market research Kuwait' },
        { to: '/healthcare-market-research/qatar', label: 'Healthcare market research Qatar' },
        { to: '/healthcare-market-research/oman', label: 'Healthcare market research Oman' },
        { to: '/healthcare-market-research/bahrain', label: 'Healthcare market research Bahrain' },
        { to: '/uae-market-access-research', label: 'Market access research UAE' },
        { to: '/kuwait-market-access-research', label: 'Market access research Kuwait' },
        { to: '/qatar-market-access-research', label: 'Market access research Qatar' },
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
