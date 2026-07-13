import StrategicServicePage from '@/pages/templates/StrategicServicePage';
import { getServiceLandingContent } from '@/data/serviceLandingContent';

const expandedContent = getServiceLandingContent('real-world-evidence-gcc');

export default function RealWorldEvidenceGcc() {
  return (
    <StrategicServicePage
      title="Real World Evidence GCC | BioNixus"
      description="Real world evidence GCC programs for pharmaceutical launch and access strategy with practical study design, data quality governance, and stakeholder-ready."
      canonicalUrl="https://www.bionixus.com/real-world-evidence-gcc"
      breadcrumbLabel="Real World Evidence GCC"
      h1="Real World Evidence GCC"
      serviceType="Real world evidence studies for GCC pharmaceutical teams"
      areaServed={['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Qatar', 'Bahrain', 'Oman']}
      intro="BioNixus helps teams generate real world evidence in GCC markets with fit-for-purpose design, local relevance, and decision-ready outputs for market access and lifecycle strategy. Start from our healthcare market research hub for regional context, then scope one RWE objective aligned to your access or medical milestone."
      links={[
        { to: '/healthcare-market-research', label: 'Healthcare market research hub', primary: true },
        { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC', primary: true },
        { to: '/patient-support-program-research-gcc', label: 'Patient support program research GCC' },
        { to: '/biosimilar-market-entry-saudi-arabia', label: 'Biosimilar market entry Saudi Arabia' },
        { to: '/heor-consulting-saudi-arabia', label: 'HEOR consulting in Saudi Arabia' },
        { to: '/gcc-market-access-guide', label: 'GCC market access guide' },
        { to: '/contact', label: 'Request RWE scope' },
      ]}
      bullets={[
        'Fit-for-purpose RWE study design aligned to one payer, access, or lifecycle decision.',
        'Retrospective chart review, prospective cohorts, and RWE-to-HEOR bridge modules.',
        'Cross-GCC harmonization with country-specific appendices for SFDA, MOHAP, and MOPH contexts.',
        'Audit-ready methodology documentation for medical affairs and access reviewers.',
      ]}
      decisionPoints={[
        {
          title: 'RWE bridges clinical reality and payer expectations',
          body: 'RWE bridges clinical trial results and payer expectations when market-access choices carry high financial risk — especially under SFDA EES and centralized Gulf procurement.',
        },
        {
          title: 'Protocol quality drives trusted outputs',
          body: 'Protocol quality, transparent assumptions, and documented limitations predict whether RWE outputs survive committee scrutiny better than completion counts alone.',
        },
        {
          title: 'One objective, mapped to action',
          body: 'Prioritize one decision objective, align protocol scope with your access or medical milestone, and run a feasibility sprint before committing to full GCC field.',
        },
      ]}
      metrics={[
        {
          label: 'Study setup speed',
          value: '2–3 weeks',
          detail: 'From protocol alignment to executable RWE field setup.',
        },
        {
          label: 'Governance reliability',
          value: '95%+',
          detail: 'Quality-control pass rate before insight handover.',
        },
        {
          label: 'Decision utility',
          value: '30/60/90',
          detail: 'Action format mapped to launch and access decision windows.',
        },
      ]}
      expandedContent={expandedContent}
    />
  );
}
