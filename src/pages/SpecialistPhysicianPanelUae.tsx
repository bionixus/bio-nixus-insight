import StrategicServicePage from '@/pages/templates/StrategicServicePage';
import { getServiceLandingContent } from '@/data/serviceLandingContent';

const expandedContent = getServiceLandingContent('specialist-physician-panel-uae');

export default function SpecialistPhysicianPanelUae() {
  return (
    <StrategicServicePage
      title="Specialist Physician Panel UAE | BioNixus"
      description="Validated specialist physician panel UAE: DHA, DOH, and MOHAP licence-verified specialists across oncology, cardiology, endocrinology, rheumatology, and neurology. Advisory boards, conjoint studies, brand tracking, and concept testing with forty-eight to seventy-two hour advisory board recruitment."
      canonicalUrl="https://www.bionixus.com/specialist-physician-panel-uae"
      breadcrumbLabel="Specialist Physician Panel UAE"
      serviceType="Specialist physician recruitment and panel management for pharmaceutical market research in the UAE"
      areaServed={['United Arab Emirates', 'Dubai', 'Abu Dhabi']}
      h1="Specialist Physician Panel UAE"
      intro="BioNixus maintains validated UAE specialist physician panels across twelve plus therapy areas, with active licence verification against DHA, DOH, and MOHAP databases. Whether you need ten specialists for an advisory board in seventy-two hours or eighty for a quarterly brand tracking wave, our UAE physician panels deliver credible, verified respondents matched to your research objectives."
      links={[
        { to: '/gcc-hcp-recruitment-market-research', label: 'GCC HCP recruitment market research', primary: true },
        { to: '/pharma-fieldwork-uae', label: 'Pharma fieldwork UAE', primary: true },
        { to: '/uae-pharmaceutical-market-research', label: 'UAE pharmaceutical market research' },
        { to: '/brand-tracking-pharma-gcc', label: 'Brand tracking pharma GCC' },
        { to: '/contact', label: 'Request panel feasibility' },
      ]}
      bullets={[
        'Three-layer validation: DHA, DOH, and MOHAP licence, specialty, and practice-setting confirmation.',
        'Active panels across oncology, cardiology, endocrinology, rheumatology, neurology, and ten plus specialties.',
        'Advisory boards, Delphi panels, conjoint studies, and brand tracking from one verified panel.',
        'Quarterly refresh cycles accounting for UAE expatriate workforce turnover.',
      ]}
      decisionPoints={[
        {
          title: 'Why it matters',
          body: 'The UAE has approximately fifteen thousand licensed physicians, of whom a much smaller subset practise as specialists in commercially relevant therapy areas. Reaching the right specialists — with verified credentials and active UAE practice — is the prerequisite for any credible primary research programme.',
        },
        {
          title: 'What the evidence says',
          body: 'UAE specialist panels with DHA, DOH, and MOHAP licence verification consistently outperform unverified panels on data quality metrics, including specialty alignment, prescribing authority, and UAE-specific clinical experience. Unverified panels carry significant risk of including retired, relocated, or misclassified respondents.',
        },
        {
          title: 'What to do next',
          body: 'Request a written feasibility assessment for your target specialty, required sample size, and research method. BioNixus provides feasibility estimates within twenty-four hours for standard specialties, including panel depth and estimated completion timelines.',
        },
      ]}
      metrics={[
        {
          label: 'UAE licensed physicians',
          value: '~15,000',
          detail: 'MOH 2024 register. BioNixus maintains verified specialist sub-panels across twelve plus therapy areas.',
        },
        {
          label: 'Advisory board recruitment',
          value: '48–72h',
          detail: 'For ten-specialist advisory boards in common UAE specialties from panel re-contact.',
        },
        {
          label: 'Specialty categories',
          value: '12+',
          detail: 'Oncology, cardiology, endocrinology, rheumatology, neurology, pulmonology, and more with written feasibility per specialty.',
        },
      ]}
      expandedContent={expandedContent}
    />
  );
}
