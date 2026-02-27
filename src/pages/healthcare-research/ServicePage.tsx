import { Link, useParams } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildFAQSchema, buildServicePageSchemas } from '@/lib/seo/schemas';

const SERVICE_COPY: Record<string, string> = {
  'market-access':
    'Market access research for payer evidence planning, value communication, and practical adoption strategy development.',
  'physician-insights':
    'Physician insight studies for treatment behavior, perception analysis, and stakeholder engagement refinement.',
  'kol-mapping':
    'KOL mapping programs to identify influence networks and prioritize expert engagement strategies.',
  'quantitative-research':
    'Quantitative market research including segmentation, adoption measurement, and data-backed forecasting support.',
  'qualitative-research':
    'Qualitative healthcare research including IDIs and focus groups to uncover decision logic and barriers.',
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

  return (
    <main>
      <SEOHead
        title={`${titleService} Healthcare Research Service | BioNixus`}
        description={copy}
        canonical={`/healthcare-market-research/services/${service}`}
        jsonLd={jsonLd}
      />
      <BreadcrumbNav
        items={[
          { name: 'Home', href: '/' },
          { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
          { name: `${titleService} Service`, href: `/healthcare-market-research/services/${service}` },
        ]}
      />

      <section className="py-16">
        <div className="container-wide max-w-5xl mx-auto">
          <h1 className="text-4xl font-display font-semibold text-foreground mb-4 capitalize">
            {titleService} Research Service
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            BioNixus offers specialized healthcare research services aligned to strategic pharmaceutical decisions.
            Explore the broader{' '}
            <Link to="/healthcare-market-research" className="text-primary underline">
              healthcare market research hub
            </Link>{' '}
            for regional and therapy-specific context.
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted/20">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">{content.title}</h2>
          <div className="space-y-4 mb-6 text-muted-foreground leading-relaxed">
            <p>
              BioNixus services are built to improve decision quality and execution speed across healthcare markets.
              We combine local context, rigorous methods, and cross-functional interpretation to convert insight into
              practical actions.
            </p>
            <p>
              Service programs can run as standalone initiatives or as modules inside broader country and therapy
              strategies, enabling teams to scale evidence and keep planning aligned.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.bullets.map((bullet) => (
              <article key={bullet} className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{bullet}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={serviceFaqs} title={`${titleService} service FAQs`} />
      <CTASection variant="service" />
    </main>
  );
}

