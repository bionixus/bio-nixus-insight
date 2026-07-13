import StrategicServicePage from '@/pages/templates/StrategicServicePage';
import { getServiceLandingContent } from '@/data/serviceLandingContent';

const expandedContent = getServiceLandingContent('hta-studies-saudi-arabia');

export default function HtaStudiesSaudiArabia() {
  return (
    <StrategicServicePage
      title="HTA Studies Saudi Arabia | Health Technology Assessment | BioNixus"
      description="Health technology assessment (HTA) studies for Saudi Arabia pharma market access: SFDA dossier requirements, evidence-tier assessment, and."
      canonicalUrl="https://www.bionixus.com/hta-studies-saudi-arabia"
      breadcrumbLabel="HTA Studies Saudi Arabia"
      h1="HTA Studies Saudi Arabia"
      serviceType="Health technology assessment dossier development"
      areaServed={['Saudi Arabia']}
      intro="A health technology assessment (HTA) dossier for Saudi Arabia has to satisfy SFDA's Economic Evaluation System — mandatory from 1 July 2025 — with a systematic literature review, the correct economic-evaluation tier, and comparator justification consistent with SFDA's pricing framework. BioNixus builds HTA dossiers that carry through from registration to NUPCO tender and institutional formulary review, not one-off submissions built for registration alone."
      links={[
        { to: '/heor-consulting-saudi-arabia', label: 'HEOR consulting Saudi Arabia', primary: true },
        { to: '/cost-effectiveness-analysis-saudi-arabia', label: 'Cost-effectiveness analysis Saudi Arabia', primary: true },
        { to: '/budget-impact-model-saudi-arabia', label: 'Budget impact model Saudi Arabia' },
        { to: '/saudi-payer-market-access-research', label: 'Saudi payer market access research' },
        { to: '/contact', label: 'Request an HTA scoping call' },
        { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Healthcare market research company in Saudi Arabia' },
        { to: '/methodology', label: 'Our research methodology' },
      ]}
      bullets={[
        'Evidence-tier assessment so dossier investment matches what the product\'s profile actually requires.',
        'Systematic literature review and comparator justification built to SFDA\'s reference-pricing framework.',
        'Evidence built to carry through from SFDA registration into NUPCO and institutional formulary review.',
      ]}
      decisionPoints={[
        {
          title: 'Evidence tier decides everything downstream',
          body: 'SFDA classifies economic evidence as Partial (budget impact) or Full (cost-utility) Economic Studies. Get the tier wrong and you either under-prepare or over-invest — confirm it before dossier work begins.',
        },
        {
          title: 'HTA is not the economic model alone',
          body: 'A complete dossier needs a systematic literature review and comparator justification built to the same standard as the economic evaluation. Reviewers assess all three together.',
        },
        {
          title: 'Registration is not the finish line',
          body: 'A cleared HTA dossier still has to carry weight in a NUPCO tender and MOH/NGHA institutional review. Scope the evidence to do that work too, not just to clear SFDA.',
        },
      ]}
      metrics={[
        {
          label: 'Governing framework',
          value: 'SFDA EES',
          detail: 'Economic Evaluation Studies Guideline, mandatory from 1 July 2025.',
        },
        {
          label: 'Evidence tiers',
          value: 'Partial / Full',
          detail: 'Budget impact (Partial) vs. cost-utility (Full) economic study classification.',
        },
        {
          label: 'Dossier components',
          value: '3 built together',
          detail: 'Literature review, economic evaluation, and comparator justification, reviewed as one package.',
        },
      ]}
      expandedContent={expandedContent}
    />
  );
}
