import { Link, useParams } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { HealthcareResearchPageShell } from '@/components/healthcare-research/HealthcareResearchPageShell';
import { HealthcareNavCard } from '@/components/healthcare-research/healthcareResearchUi';
import { getHealthcareMarketResearchServiceConfig } from '@/data/reportConversionConfig';
import { ReportMidPageCta } from '@/components/report-conversion';
import { ReportInsightGrid } from '@/components/report-premium';
import { ReportPremiumSection } from '@/components/report-premium';
import { buildFAQSchema, buildServicePageSchemas } from '@/lib/seo/schemas';
import { ServiceMarketReferenceGuide } from '@/components/seo/ServiceMarketReferenceGuide';

const SERVICE_COPY: Record<string, string> = {
  'market-access':
    'Market access research for pharma: payer evidence bundles, value narratives, pricing and policy signals, adoption barriers, and launch sequencing—actionable outputs for GCC, UK, and EU5 teams from BioNixus.',
  'physician-insights':
    'Physician insight studies for specialty and primary care pathways: treatment behavior, indication confidence, competitive switching, and messaging tests that refine field, medical, and access plans across MENA and Europe.',
  'kol-mapping':
    'KOL mapping and influence intelligence for healthcare: network analysis, evidence champions, connectivity scoring, and advisory design so medical and commercial teams engage the right experts in each market.',
  'quantitative-research':
    'Quantitative healthcare research with robust sampling, segmentation, MaxDiff/conjoint where needed, adoption metrics, and forecasting-grade analytics for portfolio, launch, and lifecycle decisions.',
  'qualitative-research':
    'Qualitative pharma research through IDIs, expert panels, and focus groups—revealing payer and prescriber rationale, access friction, and behavioral barriers that quantitative trackers miss.',
};

const SERVICE_SECTIONS: Record<string, { title: string; bullets: string[] }> = {
  'market-access': {
    title: 'Market Access Research Delivery Model',
    bullets: [
      'Assess evidence expectations and decision criteria across target stakeholders.',
      'Map access barriers by market and treatment pathway.',
      'Translate findings into practical access strategy priorities.',
    ],
  },
  'physician-insights': {
    title: 'Physician Insight Program Structure',
    bullets: [
      'Quantify prescribing patterns, switch intent, and confidence profiles.',
      'Identify channel and segment-level differences in adoption behavior.',
      'Support focused engagement plans for field and medical teams.',
    ],
  },
  'kol-mapping': {
    title: 'KOL Mapping and Influence Intelligence',
    bullets: [
      'Map influence networks based on real decision impact, not title alone.',
      'Prioritize experts by strategic relevance and stakeholder connectivity.',
      'Guide evidence dissemination and advisory planning.',
    ],
  },
  'quantitative-research': {
    title: 'Quantitative Research Execution Approach',
    bullets: [
      'Design robust sampling frameworks for market-representative signal quality.',
      'Deliver segmented analytics for opportunity and risk prioritization.',
      'Support confidence-led decisions with measurable outputs.',
    ],
  },
  'qualitative-research': {
    title: 'Qualitative Research Execution Approach',
    bullets: [
      'Use targeted IDIs and stakeholder conversations to reveal decision rationale.',
      'Identify barriers and unmet needs not visible in quantitative outputs.',
      'Translate qualitative depth into executable strategy actions.',
    ],
  },
};

const SERVICE_HERO_COPY: Record<string, string> = {
  'market-access':
    'Market access programs are structured to test evidence expectations, payer objections, and institutional pathway constraints before launch-critical commitments.',
  'physician-insights':
    'Physician insight studies are designed to distinguish stated preferences from real prescribing behavior across specialties, settings, and account types.',
  'kol-mapping':
    'KOL mapping programs identify who shapes clinical consensus in practice, where influence is concentrated, and how evidence travels across peer networks.',
  'quantitative-research':
    'Quantitative studies provide measurable confidence on segmentation, demand signals, and adoption risk, with analysis built for decision use rather than reporting volume.',
  'qualitative-research':
    'Qualitative programs surface the rationale behind behavior, helping teams interpret barriers, language sensitivity, and stakeholder decision logic with context.',
};

export default function ServicePage() {
  const { service = '' } = useParams<{ service: string }>();
  const titleService = service.replace(/-/g, ' ');
  const copy =
    SERVICE_COPY[service] ||
    'Service-specific healthcare market research programs for pharmaceutical strategy and execution decisions.';
  const serviceFaqs = [
    {
      question: `What outcomes does the ${titleService} service support?`,
      answer:
        'This service supports practical decision outcomes such as launch readiness, stakeholder prioritization, evidence planning, and strategy refinement across country-specific healthcare markets.',
    },
    {
      question: `How does BioNixus align ${titleService} research with local market context?`,
      answer:
        'BioNixus tailors design, recruitment, and interpretation to local institutional realities so findings remain actionable rather than generic across MENA, UK, and Europe.',
    },
    {
      question: `Can the ${titleService} service be integrated with quantitative and qualitative programs?`,
      answer:
        'Yes. Service-specific programs are often integrated into broader quantitative and qualitative research plans to provide both measurable confidence and deeper decision rationale.',
    },
  ];
  const jsonLd = [...buildServicePageSchemas(service, copy), buildFAQSchema(serviceFaqs)];
  const content = SERVICE_SECTIONS[service] || {
    title: `${titleService} Service Delivery Model`,
    bullets: [
      'Align research design to commercial, medical, and access decisions.',
      'Produce decision-ready outputs with clear implementation pathways.',
      'Integrate findings into wider cross-market strategy programs.',
    ],
  };
  const heroCopy =
    SERVICE_HERO_COPY[service] ||
    'BioNixus provides service-specific healthcare research programs that connect evidence generation to practical execution decisions.';

  const conversionConfig = getHealthcareMarketResearchServiceConfig(titleService, service);
  const faqSectionId = `healthcare-mr-service-${service}-faq`;
  const displayTitle = `${titleService.charAt(0).toUpperCase() + titleService.slice(1)} research service`;

  return (
    <>
      <SEOHead
        title={`${titleService} Healthcare Research Service | BioNixus`}
        description={copy}
        canonical={`/healthcare-market-research/services/${service}`}
        jsonLd={jsonLd}
      />

      <HealthcareResearchPageShell
        progressId={`healthcare-mr-service-${service}`}
        config={conversionConfig}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
          { name: `${titleService} Service`, href: `/healthcare-market-research/services/${service}` },
        ]}
        hero={{
          title: displayTitle,
          therapySlug: service,
          statsCaption: '',
          stats: [
            { value: 'Quant + qual', label: 'Integrated methods' },
            { value: '17+', label: 'Markets covered' },
            { value: 'ESOMAR', label: 'Governance standard' },
          ],
          description: (
            <p>
              {heroCopy} Explore the broader{' '}
              <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">
                healthcare market research hub
              </Link>{' '}
              for regional and therapy-specific context, and review structured therapy outputs in the{' '}
              <Link to="/market-reports" className="text-primary font-medium hover:underline">
                market reports hub
              </Link>
              .
            </p>
          ),
        }}
        tocItems={[
          { href: '#delivery-model', label: 'Delivery model' },
          { href: '#deep-dives', label: 'Related guides' },
          { href: `#${faqSectionId}`, label: 'FAQ' },
        ]}
        faq={{
          sectionId: faqSectionId,
          title: `${titleService} service FAQs`,
          items: serviceFaqs,
        }}
      >
        <ReportPremiumSection id="delivery-model" title={content.title} variant="cream">
          <div className="space-y-4 mb-6 text-muted-foreground leading-relaxed">
            <p>
              Each service module is mapped to a concrete decision stage: opportunity framing, segment prioritization,
              execution planning, and post-launch optimization.
            </p>
            <p>
              Programs can run independently or within broader country and therapy workstreams so evidence remains
              aligned across commercial, medical, and market-access stakeholders.
            </p>
          </div>
          <ReportInsightGrid items={content.bullets} />
        </ReportPremiumSection>

        {(service === 'market-access' || service === 'kol-mapping' || service === 'qualitative-research') && (
          <ReportPremiumSection
            id="deep-dives"
            title={
              service === 'market-access'
                ? 'Deep dive: market access guides'
                : service === 'kol-mapping'
                  ? 'Deep dive: KOL intelligence'
                  : 'Deep dive: qualitative methods'
            }
            variant="muted"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {service === 'market-access' && (
                <>
                  <HealthcareNavCard
                    to="/blog/market-access-strategy-uae"
                    title="UAE market access strategy"
                    description="Navigate DOH, DHA, and MOHAP formulary inclusion."
                  />
                  <HealthcareNavCard
                    to="/blog/nice-hta-evidence-requirements-guide"
                    title="NICE HTA evidence guide"
                    description="Navigating UK cost-effectiveness and QALY thresholds."
                  />
                </>
              )}
              {service === 'kol-mapping' && (
                <>
                  <HealthcareNavCard
                    to="/blog/kol-mapping-pharma-middle-east"
                    title="GCC KOL mapping guide"
                    description="Identifying true clinical influencers in the Middle East."
                  />
                  <HealthcareNavCard
                    to="/blog/competitive-intelligence-pharma-gcc"
                    title="Pharma competitive intelligence"
                    description="Tracking competitor formularies and Medical Affairs activities."
                  />
                </>
              )}
              {service === 'qualitative-research' && (
                <>
                  <HealthcareNavCard
                    to="/blog/patient-journey-mapping-saudi-arabia"
                    title="Saudi patient journey mapping"
                    description="Understanding culturally nuanced treatment pathways."
                  />
                  <HealthcareNavCard
                    to="/blog/healthcare-market-research-methodologies-gcc"
                    title="GCC research methodologies"
                    description="Best practices for IDIs and focus groups in the region."
                  />
                </>
              )}
            </div>
          </ReportPremiumSection>
        )}

        <ServiceMarketReferenceGuide serviceSlug={service} />
        <ReportMidPageCta config={conversionConfig} className="my-4" />
      </HealthcareResearchPageShell>
    </>
  );
}

