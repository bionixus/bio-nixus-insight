import StrategicServicePage from '@/pages/templates/StrategicServicePage';
import { getServiceLandingContent } from '@/data/serviceLandingContent';
import { RWE_COUNTRY_PAGES } from '@/data/countryKeywordPages';

const expandedContent = getServiceLandingContent('real-world-evidence');
const pageUrl = 'https://www.bionixus.com/real-world-evidence';

export default function RealWorldEvidence() {
  return (
    <StrategicServicePage
      title="Real World Evidence (RWE) for Pharma | BioNixus EMEA & MENA"
      description="Real world evidence (RWE) for pharmaceutical teams in Europe, the UK, and MENA: principal-led study design, HTA-ready narratives, GCC execution, and decision-ready outputs."
      canonicalUrl={pageUrl}
      breadcrumbLabel="Real World Evidence"
      h1="Real World Evidence (RWE) for Pharmaceutical and Biotech Teams"
      serviceType="Healthcare real world evidence studies and market research"
      areaServed={['Europe', 'United Kingdom', 'Middle East', 'Gulf Cooperation Council']}
      modifiedAt="2026-10-07"
      intro="BioNixus helps you generate real world evidence that answers clinical, regulatory, and commercial questions—with senior-led design and execution across healthcare market research programs in Europe, the UK, and the Middle East. If stakeholders need proof beyond the clinical trial, we build RWE that fits your geography, therapy area, and decision timeline—not a one-size-fits-all data product."
      answerBlock={{
        question: 'What is real world evidence (RWE) for pharmaceutical teams?',
        answer:
          'Real world evidence (RWE) is decision-grade insight from real-world data and primary field research—treatment pathways, payer behaviour, adherence, and outcomes outside tightly controlled trials. BioNixus delivers principal-led RWE design and execution across Europe, the UK, and MENA for HTA, medical affairs, and market access.',
        points: [
          {
            title: 'Fit-for-purpose design',
            description:
              'Protocols locked to one access, medical, or regulatory decision—with transparent cohort definitions and pre-specified analyses.',
          },
          {
            title: 'EMEA and MENA execution',
            description:
              'Primary fieldwork aligned to NHS, European payer, and GCC institutional reality—not syndicated averages.',
          },
          {
            title: 'HEOR-ready outputs',
            description:
              'Deliverables structured for budget-impact, cost-effectiveness, and committee narratives when economic modelling is in scope.',
          },
        ],
        summary:
          'BioNixus is a healthcare-focused RWE partner for pharmaceutical and biotech teams that need defensible, geography-specific evidence—not generic analytics subscriptions.',
      }}
      links={[
        { to: '/healthcare-market-research', label: 'Healthcare market research hub', primary: true },
        { to: '/real-world-evidence-gcc', label: 'Real world evidence GCC', primary: true },
        { to: '/quantitative-healthcare-market-research', label: 'Quantitative healthcare research' },
        { to: '/qualitative-market-research', label: 'Qualitative market research' },
        { to: '/heor-consulting-saudi-arabia', label: 'HEOR consulting Saudi Arabia' },
        { to: '/bionixus-market-research-middle-east', label: 'Middle East pharmaceutical research' },
        { to: '/services/market-access', label: 'Market access services' },
        { to: '/case-studies', label: 'Healthcare case studies' },
        { to: '/contact', label: 'Request RWE scope' },
      ]}
      bullets={[
        'Principal-led RWE design aligned to one HTA, payer, medical, or regulatory decision.',
        'Retrospective chart review, prospective cohorts, and mixed-methods pathway research.',
        'EU, UK, and MENA execution with GDPR-aware governance and GCC country appendices.',
        'Audit-ready methodology documentation and HEOR bridge modules where scoped.',
      ]}
      decisionPoints={[
        {
          title: 'RWE closes the evidence gap payers actually ask about',
          body: 'Regulators and HTA bodies expect practice-pattern, comparator, and burden-of-illness context that RCTs rarely supply alone. RWE aligned to local pathways strengthens negotiations and medical narratives.',
        },
        {
          title: 'Decision fidelity beats data volume',
          body: 'Large syndicated datasets rarely answer a specific launch or access question with enough geographic and specialty fidelity. BioNixus scopes evidence to the stakeholder decision in front of you.',
        },
        {
          title: 'Speed with documented quality',
          body: 'Feasibility and protocol alignment often complete within two to three weeks; field modules run with daily QC so sponsors correct issues before databases lock.',
        },
      ]}
      metrics={[
        {
          label: 'Protocol alignment',
          value: '2–3 weeks',
          detail: 'Typical window from brief to executable RWE field setup.',
        },
        {
          label: 'Quality governance',
          value: '95%+',
          detail: 'QC pass rate target before insight handover.',
        },
        {
          label: 'Action format',
          value: '30/60/90',
          detail: 'Readouts mapped to launch and access decision windows.',
        },
      ]}
      expandedContent={expandedContent}
      sections={[
        {
          id: 'rwe-by-country',
          heading: 'Real-world evidence by country',
          intro:
            'Country spokes for practice-pattern and pathway RWE. Each page links back to this hub and to the matching healthcare market research country programme.',
          links: [
            ...RWE_COUNTRY_PAGES.map((page) => ({
              to: `/${page.slug}`,
              label: page.countryName,
            })),
            { to: '/real-world-evidence-gcc', label: 'GCC regional RWE' },
          ],
        },
        {
          id: 'rwe-related',
          heading: 'Related BioNixus capabilities',
          intro: 'Cross-link RWE programs with market access, quantitative research, and regional hubs.',
          links: [
            { to: '/market-research', label: 'Market research hub' },
            { to: '/iqvia-alternative', label: 'IQVIA alternatives for primary research' },
            { to: '/real-world-data-healthcare-middle-east', label: 'Real-world data Middle East' },
          ],
        },
      ]}
    />
  );
}
