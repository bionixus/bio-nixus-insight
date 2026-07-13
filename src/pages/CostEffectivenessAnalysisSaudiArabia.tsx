import StrategicServicePage from '@/pages/templates/StrategicServicePage';
import { getServiceLandingContent } from '@/data/serviceLandingContent';

const expandedContent = getServiceLandingContent('cost-effectiveness-analysis-saudi-arabia');

export default function CostEffectivenessAnalysisSaudiArabia() {
  return (
    <StrategicServicePage
      title="Cost-Effectiveness Analysis Saudi Arabia | BioNixus"
      description="Cost-effectiveness analysis for Saudi Arabia pharma market access: SFDA reference-case methodology, QALY-based evaluation, and NCEHTA-aligned dossier."
      canonicalUrl="https://www.bionixus.com/cost-effectiveness-analysis-saudi-arabia"
      breadcrumbLabel="Cost-Effectiveness Analysis Saudi Arabia"
      h1="Cost-Effectiveness Analysis Saudi Arabia"
      serviceType="Cost-effectiveness analysis and health technology assessment support"
      areaServed={['Saudi Arabia']}
      intro="A cost-effectiveness analysis for Saudi Arabia has to satisfy SFDA's Full Economic Study requirements — mandatory from 1 July 2025 — with a QALY-based value argument built on defensible, Saudi-relevant inputs, not an imported global model. BioNixus builds cost-utility models calibrated to SFDA's reference-pricing framework, stress-tests them against likely reviewer objections, and frames the output for the health technology assessment pathway it actually needs to clear."
      links={[
        { to: '/heor-consulting-saudi-arabia', label: 'HEOR consulting Saudi Arabia', primary: true },
        { to: '/budget-impact-model-saudi-arabia', label: 'Budget impact model Saudi Arabia', primary: true },
        { to: '/saudi-payer-market-access-research', label: 'Saudi payer market access research' },
        { to: '/cost-effectiveness-analysis-gcc', label: 'Cost effectiveness analysis GCC' },
        { to: '/contact', label: 'Request a CEA scoping call' },
        { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Healthcare market research company in Saudi Arabia' },
        { to: '/methodology', label: 'Our research methodology' },
      ]}
      bullets={[
        'Cost-utility (cost-per-QALY) models built on Saudi or regionally-validated inputs, not imported global assumptions.',
        'Comparator selection consistent with SFDA\'s external reference-pricing framework.',
        'Sensitivity analysis calibrated to the objections an SFDA or NUPCO reviewer is likely to raise.',
      ]}
      decisionPoints={[
        {
          title: 'No fixed threshold — inputs decide credibility',
          body: 'Saudi Arabia has not published a single official cost-effectiveness threshold. Without one, the traceability of your model\'s inputs and the discipline of its sensitivity analysis carry more weight than the ICER figure alone.',
        },
        {
          title: 'CEA rarely stands alone',
          body: 'SFDA expects a budget impact analysis as a mandatory companion to any Full Economic Study submission. Scope both together from the outset rather than discovering the gap mid-review.',
        },
        {
          title: 'Comparator choice has to match the pricing framework',
          body: 'Your comparator anchors both the value argument and the price SFDA\'s reference-pricing procedure will apply. Choose it for consistency with Saudi practice and reference pricing, not for favorable optics alone.',
        },
      ]}
      metrics={[
        {
          label: 'Evidence tier',
          value: 'Full Economic Study',
          detail: 'SFDA classification covering cost-utility (CEA) and cost-benefit analysis.',
        },
        {
          label: 'Mandatory since',
          value: '1 July 2025',
          detail: 'SFDA Economic Evaluation System economic-evaluation requirement.',
        },
        {
          label: 'Companion analysis',
          value: 'BIA required',
          detail: 'Budget impact analysis expected alongside any Full Economic Study submission.',
        },
      ]}
      expandedContent={expandedContent}
    />
  );
}
