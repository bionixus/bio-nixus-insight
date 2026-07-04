import StrategicServicePage from '@/pages/templates/StrategicServicePage';
import { getServiceLandingContent } from '@/data/serviceLandingContent';

const expandedContent = getServiceLandingContent('uae-market-access-research');

export default function UaeMarketAccessResearch() {
  return (
    <StrategicServicePage
      title="Market Access Research UAE | BioNixus"
      description="Market access research UAE for pricing, reimbursement, and formulary pathway decisions across DHA, DOH, and MOHAP contexts."
      canonicalUrl="https://www.bionixus.com/uae-market-access-research"
      breadcrumbLabel="Market Access Research UAE"
      h1="Market Access Research UAE"
      serviceType="Pharmaceutical market access research"
      areaServed={['UAE', 'GCC']}
      intro="In the UAE, the same product can face three different access timelines. Federal MOHAP registration is only the entry point — Dubai (DHA) and Abu Dhabi (DOH) run their own formulary and procurement processes, and most volume sits in an insurance-funded private sector. BioNixus maps those pathways, tests your value story against the objections payers actually raise, and tells you which emirate to enter first."
      links={[
        { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC', primary: true },
        { to: '/gcc-market-access-guide', label: 'GCC market access guide', primary: true },
        { to: '/uae-pharmaceutical-market-research', label: 'Healthcare market research company in UAE' },
        { to: '/contact', label: 'Request UAE access scope' },
        { to: '/market-research-healthcare', label: 'Healthcare market research services' },
        { to: '/methodology', label: 'Our research methodology' },
      ]}
      bullets={[
        'DHA, DOH, and MOHAP pathway implications mapped to your specific product class and launch timeline.',
        'Payer-objection mapping with insurers and formulary committees before the value dossier is locked.',
        'Pricing and reimbursement narrative testing against the evidence thresholds decision-makers apply.',
        'Hospital and committee-level friction diagnostics that show where access actually stalls.',
      ]}
      decisionPoints={[
        {
          title: 'Three regulators, one launch',
          body: 'MOHAP registration opens the door, but DHA and DOH each add a separate listing and procurement step. The order you tackle them in is often the single biggest lever on time-to-access.',
        },
        {
          title: 'Where access actually stalls',
          body: 'In the UAE, objections cluster at the insurer and formulary-committee level rather than at registration. Surfacing them early is cheaper than reworking the evidence pack after a rejection.',
        },
        {
          title: 'Sequence by emirate, not by calendar',
          body: 'Enter the emirate whose pathway, payer mix, and institutional demand best fit your product first — then use that reference to accelerate the rest of the country.',
        },
      ]}
      metrics={[
        {
          label: 'Scoping cycle',
          value: '7-12 days',
          detail: 'Typical objective-to-proposal timeline for UAE access scopes.',
        },
        {
          label: 'Pathway depth',
          value: '3 contexts',
          detail: 'DHA, DOH, and MOHAP-specific guidance rather than one generic UAE model.',
        },
        {
          label: 'Action horizon',
          value: '30/60/90',
          detail: 'Execution roadmap linked to launch and reimbursement milestones.',
        },
      ]}
      expandedContent={expandedContent}
    />
  );
}

