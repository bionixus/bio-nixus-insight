import StrategicServicePage from '@/pages/templates/StrategicServicePage';
import { getServiceLandingContent } from '@/data/serviceLandingContent';

const expandedContent = getServiceLandingContent('healthcare-fieldwork-middle-east');

export default function HealthcareFieldworkMiddleEast() {
  return (
    <StrategicServicePage
      title="Healthcare Fieldwork Middle East | BioNixus"
      description="Healthcare fieldwork in the Middle East with specialist recruitment, quality controls, and compliant execution for pharmaceutical market research."
      canonicalUrl="https://www.bionixus.com/healthcare-fieldwork-middle-east"
      breadcrumbLabel="Healthcare Fieldwork Middle East"
      h1="Healthcare Fieldwork Middle East"
      serviceType="Healthcare market research fieldwork"
      areaServed={['Saudi Arabia', 'United Arab Emirates', 'Egypt', 'Kuwait', 'Qatar', 'GCC']}
      intro="BioNixus runs healthcare fieldwork across GCC and wider Middle East markets with role validation, incidence-aware sampling, and audit-ready governance from screener to final dataset. For regional context and related services, start from our healthcare market research hub before scoping fieldwork."
      links={[
        { to: '/healthcare-market-research', label: 'Healthcare market research hub', primary: true },
        { to: '/gcc-hcp-recruitment-market-research', label: 'GCC HCP recruitment standards', primary: true },
        { to: '/real-world-evidence-gcc', label: 'Real-world evidence in the GCC', primary: true },
        { to: '/quantitative-healthcare-market-research', label: 'Quantitative research framework' },
        { to: '/qualitative-market-research', label: 'Qualitative market research' },
        { to: '/market-research-healthcare', label: 'Healthcare market research services' },
        { to: '/contact', label: 'Request fieldwork scope' },
      ]}
      bullets={[
        'Specialist recruitment depth — physicians, pharmacists, payer-facing stakeholders, and institutional decision contributors.',
        'Fieldwork quality controls — duplicate checks, eligibility verification, and quality-funnel governance across quant and qual.',
        'Audit-ready validation and exclusion logic kept transparent from screener to final base.',
      ]}
      decisionPoints={[
        {
          title: 'Field quality is strategic risk',
          body: 'Weak field operations quietly undermine strategic confidence even when the analytical model is strong. The dataset can only be as good as the fieldwork that produced it.',
        },
        {
          title: 'Verification predicts data quality',
          body: 'Role verification and quota telemetry are the strongest leading indicators of downstream data quality — far more reliable than completion counts alone.',
        },
        {
          title: 'Govern live, not at the end',
          body: 'Lock the respondent architecture first, then run daily quality-funnel governance during active fieldwork so issues are corrected before endline rather than discovered after it.',
        },
      ]}
      metrics={[
        {
          label: 'Qualified completion',
          value: '26-35%',
          detail: 'Observed benchmark range by GCC market for high-integrity specialist cohorts.',
        },
        {
          label: 'QC readiness',
          value: 'Audit-ready',
          detail: 'Validation and exclusion logic remain transparent from screener to final base.',
        },
        {
          label: 'Operational cadence',
          value: 'Daily controls',
          detail: 'Quota and quality checkpoints support active correction before endline risk appears.',
        },
      ]}
      expandedContent={expandedContent}
    />
  );
}
