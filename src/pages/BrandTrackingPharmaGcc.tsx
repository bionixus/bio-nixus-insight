import StrategicServicePage from '@/pages/templates/StrategicServicePage';
import { getServiceLandingContent } from '@/data/serviceLandingContent';

const expandedContent = getServiceLandingContent('brand-tracking-pharma-gcc');

export default function BrandTrackingPharmaGcc() {
  return (
    <StrategicServicePage
      title="Brand Tracking Pharma GCC | BioNixus"
      description="Brand tracking pharma GCC: longitudinal HCP and patient brand tracking across Saudi Arabia, UAE, Kuwait, and Qatar. Awareness funnel, prescribing intent, promotional equity, and IQVIA integration with quarterly to annual wave designs."
      canonicalUrl="https://www.bionixus.com/brand-tracking-pharma-gcc"
      breadcrumbLabel="Brand Tracking Pharma GCC"
      serviceType="Pharmaceutical brand tracking research across GCC markets"
      areaServed={['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Qatar', 'Bahrain', 'Oman']}
      h1="Brand Tracking Pharma GCC"
      intro="BioNixus designs and delivers longitudinal pharma brand tracking programmes across GCC markets — Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman — capturing the HCP and patient metrics that predict commercial performance. From quarterly competitive intelligence to annual awareness benchmarks, our GCC brand tracking programmes are calibrated to the pace and dynamics of each therapy area."
      links={[
        { to: '/commercial-effectiveness-pharma-middle-east', label: 'Commercial effectiveness pharma Middle East', primary: true },
        { to: '/healthcare-market-research-agency-gcc', label: 'Healthcare market research agency GCC', primary: true },
        { to: '/gcc-hcp-recruitment-market-research', label: 'GCC HCP recruitment market research' },
        { to: '/bionixus-market-research-middle-east', label: 'BioNixus market research Middle East' },
        { to: '/contact', label: 'Request brand tracking scope' },
      ]}
      bullets={[
        'Five-domain HCP KPI framework: awareness, prescribing, perception, promotional equity, and NPS.',
        'KSA and UAE market-specific wave design with bilingual Arabic–English instruments.',
        'Optional patient brand tracking for chronic consumer-facing categories.',
        'IQVIA MIDAS integration for combined intent-and-volume commercial dashboards.',
      ]}
      decisionPoints={[
        {
          title: 'Why it matters',
          body: 'GCC pharmaceutical markets are undergoing rapid competitive change driven by generic entry, biosimilar launches, and aggressive new entrants. Brand equity built through years of promotional investment can erode within two to three quarters. Longitudinal tracking is the only way to detect erosion early enough to intervene.',
        },
        {
          title: 'What the evidence says',
          body: 'BioNixus tracking analysis across GCC therapy areas consistently shows that the prescribing intent gap between leading and lagging brands at the HCP level predicts IQVIA market share movements one to two quarters in advance, giving commercial teams actionable lead time to adjust promotional investment.',
        },
        {
          title: 'What to do next',
          body: 'Define the competitive set, the HCP audience, and the key commercial questions the tracking must answer. BioNixus will design a KPI framework and wave schedule and recommend integration with IQVIA or other secondary data sources before programme launch.',
        },
      ]}
      metrics={[
        {
          label: 'HCP sample per wave',
          value: '80–150',
          detail: 'Per market per wave — sufficient for eighty percent power to detect ten-point changes in awareness or prescribing intent.',
        },
        {
          label: 'Wave delivery time',
          value: '6–8 weeks',
          detail: 'From survey instrument finalisation to wave-on-wave trend report across KSA and UAE.',
        },
        {
          label: 'GCC market coverage',
          value: '6/6',
          detail: 'Harmonized KPIs across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman with country appendices.',
        },
      ]}
      expandedContent={expandedContent}
    />
  );
}
