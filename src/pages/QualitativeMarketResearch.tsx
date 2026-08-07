import StrategicServicePage from '@/pages/templates/StrategicServicePage';
import { getServiceLandingContent } from '@/data/serviceLandingContent';

const expandedContent = getServiceLandingContent('qualitative-market-research');

export default function QualitativeMarketResearch() {
  return (
    <StrategicServicePage
      title="Qualitative Market Research for Healthcare and Pharma | BioNixus"
      description="Qualitative healthcare market research — IDIs, focus groups, payer interviews, and advisory boards for pharmaceutical launch, access, and medical strategy."
      canonicalUrl="https://www.bionixus.com/qualitative-market-research"
      breadcrumbLabel="Qualitative Market Research"
      h1="Qualitative Market Research for Pharmaceutical Strategy"
      serviceType="Qualitative healthcare and pharmaceutical research"
      areaServed={['GCC', 'MENA', 'United Kingdom', 'Europe', 'United States']}
      intro="Quantitative dashboards explain scale; qualitative research explains behaviour. BioNixus helps pharmaceutical, biotech, and medtech teams understand physician rationale, payer objections, patient-pathway friction, and message fit through bilingual Arabic–English depth interviews, advisory boards, and thematic synthesis scoped to one commercial, access, or medical decision."
      links={[
        { to: '/healthcare-market-research', label: 'Healthcare market research hub', primary: true },
        { to: '/quantitative-healthcare-market-research', label: 'Quantitative healthcare research guide', primary: true },
        { to: '/services/qualitative-research', label: 'Qualitative research services' },
        { to: '/healthcare-fieldwork-middle-east', label: 'Healthcare fieldwork Middle East' },
        { to: '/methodology', label: 'Our research methodology' },
        { to: '/contact', label: 'Request qualitative research scope' },
      ]}
      bullets={[
        'Physician, payer, patient, and caregiver modules with pre-specified thematic coding.',
        'Bilingual Arabic–English moderation with medical terminology QA before field.',
        'Advisory boards and focus groups with IFPMA-aligned honoraria disclosure.',
        'Objection libraries and pathway maps mapped to 30/60/90 action owners.',
      ]}
      decisionPoints={[
        {
          title: 'Diagnose behaviour before you scale investment',
          body: 'Launch and access teams need to know why physicians hesitate, how payers frame objections, and where journeys break — not only what percentage would prescribe in a forced-choice survey.',
        },
        {
          title: 'Triangulate institutional and prescriber logic',
          body: 'In GCC markets, NUPCO tenders, DHA and DOH formularies, and MOH listings often gate uptake before prescriber enthusiasm converts to volume. Qualitative modules must sample procurement-aware stakeholders alongside clinicians.',
        },
        {
          title: 'Harmonize qual and quant in one evidence pack',
          body: 'The strongest programs share coding frameworks and readout formats so affiliates receive integrated insight — not incompatible vendor silos that delay committee and launch decisions.',
        },
      ]}
      metrics={[
        {
          label: 'Moderation',
          value: 'Arabic + English',
          detail: 'Native-language depth interviews with harmonized English synthesis for global portfolio teams.',
        },
        {
          label: 'Quality governance',
          value: 'Daily QC',
          detail: 'Screener pass-through, exclusion logs, and thematic coding documented for audit-ready handover.',
        },
        {
          label: 'Typical timeline',
          value: '4–6 weeks',
          detail: 'Specialist IDI programs from instrument finalisation to thematic synthesis across GCC markets.',
        },
      ]}
      expandedContent={expandedContent}
      mediaSlug="qualitative-market-research"
    />
  );
}
