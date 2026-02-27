import { Link, useParams } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { buildFAQSchema, buildTherapyPageSchemas } from '@/lib/seo/schemas';

const THERAPY_COPY: Record<string, string> = {
  oncology:
    'Oncology market research programs focused on treatment pathways, biomarker behavior, and evidence expectations across MENA, UK, and Europe.',
  diabetes:
    'Diabetes market intelligence for pharmaceutical teams covering physician behavior, switch drivers, adherence barriers, and access constraints.',
  respiratory:
    'Respiratory market research to support portfolio strategy, stakeholder targeting, and evidence-based engagement planning.',
  immunology:
    'Immunology-focused healthcare research programs for adoption analysis, segmentation, and message optimization.',
  biologics:
    'Biologics and biosimilar market research with physician, payer, and market access stakeholder insight models.',
  vaccines:
    'Vaccine market research for perception, adoption, and communication strategy across key healthcare markets.',
};

const THERAPY_SECTIONS: Record<string, { title: string; points: string[] }> = {
  oncology: {
    title: 'Oncology Market Research Priorities',
    points: [
      'Map treatment pathway behavior and referral dynamics across high-value oncology centers.',
      'Assess biomarker-driven decision logic, evidence confidence, and protocol preferences.',
      'Quantify adoption barriers for novel therapies and identify segment-specific acceleration levers.',
    ],
  },
  diabetes: {
    title: 'Diabetes Market Research Priorities',
    points: [
      'Measure treatment switching, adherence constraints, and physician confidence by patient segment.',
      'Profile differences between institutional and private-care management pathways.',
      'Test value communication and outcome expectations to improve launch and lifecycle planning.',
    ],
  },
  respiratory: {
    title: 'Respiratory Market Research Priorities',
    points: [
      'Analyze prescription behavior in chronic and acute respiratory pathways.',
      'Identify key barriers to guideline-aligned therapy adoption in target markets.',
      'Prioritize stakeholder engagement strategy using influence- and setting-based segmentation.',
    ],
  },
  immunology: {
    title: 'Immunology Market Research Priorities',
    points: [
      'Assess stakeholder evidence thresholds for long-term immune-mediated therapy positioning.',
      'Map treatment sequencing and switching drivers across specialist segments.',
      'Develop market-ready communication frameworks aligned to local practice reality.',
    ],
  },
  biologics: {
    title: 'Biologics and Biosimilars Market Research Priorities',
    points: [
      'Understand confidence, substitution behavior, and risk perception among prescribing stakeholders.',
      'Evaluate institutional constraints and procurement dynamics affecting adoption speed.',
      'Support competitive differentiation with decision-linked evidence and segment profiles.',
    ],
  },
  vaccines: {
    title: 'Vaccine Market Research Priorities',
    points: [
      'Assess vaccine confidence drivers and adoption constraints in prioritized populations.',
      'Map healthcare provider communication needs for stronger uptake programs.',
      'Support rollout strategy with targeted evidence on channel and stakeholder differences.',
    ],
  },
};

export default function TherapyPage() {
  const { area = '' } = useParams<{ area: string }>();
  const titleArea = area.replace(/-/g, ' ');
  const copy =
    THERAPY_COPY[area] ||
    'Therapy-focused pharmaceutical market research with actionable evidence for stakeholder engagement and growth planning.';
  const therapyFaqs = [
    {
      question: `How does BioNixus approach ${titleArea} pharmaceutical market research?`,
      answer:
        'BioNixus combines quantitative and qualitative methods to identify adoption drivers, evidence expectations, and stakeholder barriers specific to this therapy area across MENA, UK, and Europe.',
    },
    {
      question: `Which stakeholder groups are prioritized in ${titleArea} therapy studies?`,
      answer:
        'Stakeholders are selected by real decision influence and pathway relevance, including treating specialists, institutional influencers, and where needed market access and payer-adjacent participants.',
    },
    {
      question: `Can ${titleArea} market research support launch and post-launch optimization?`,
      answer:
        'Yes. Therapy-focused research can inform launch planning, segment prioritization, communication strategy, and post-launch optimization by revealing where adoption friction appears and how to reduce it.',
    },
  ];
  const jsonLd = [...buildTherapyPageSchemas(area, copy), buildFAQSchema(therapyFaqs)];
  const content = THERAPY_SECTIONS[area] || {
    title: `${titleArea} Research Priorities`,
    points: [
      'Identify stakeholder decision drivers and barriers relevant to this therapy area.',
      'Support launch and optimization strategy with country-aware evidence.',
      'Translate insights into practical actions for commercial, medical, and access teams.',
    ],
  };

  return (
    <main>
      <SEOHead
        title={`${titleArea} Market Research | BioNixus`}
        description={copy}
        canonical={`/healthcare-market-research/therapy/${area}`}
        jsonLd={jsonLd}
      />
      <BreadcrumbNav
        items={[
          { name: 'Home', href: '/' },
          { name: 'Healthcare Market Research', href: '/healthcare-market-research' },
          { name: `${titleArea} Therapy`, href: `/healthcare-market-research/therapy/${area}` },
        ]}
      />

      <section className="py-16">
        <div className="container-wide max-w-5xl mx-auto">
          <h1 className="text-4xl font-display font-semibold text-foreground mb-4 capitalize">
            {titleArea} Market Research
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            BioNixus provides therapy-specific intelligence for evidence-led strategy. Visit the{' '}
            <Link to="/healthcare-market-research" className="text-primary underline">
              healthcare market research hub
            </Link>{' '}
            to explore country coverage and service capabilities across MENA, UK, and Europe.
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted/20">
        <div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-foreground mb-5">{content.title}</h2>
          <div className="space-y-4 mb-6 text-muted-foreground leading-relaxed">
            <p>
              BioNixus designs {titleArea} programs around practical decisions, not generic reporting. Our teams
              combine quantitative and qualitative approaches to reveal where opportunity is strong, where resistance
              appears, and how strategy can be adapted across healthcare markets.
            </p>
            <p>
              For cross-country planning, each study is built with comparable core indicators and local modules so
              leadership teams can scale what works and adapt what must remain market-specific.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.points.map((point) => (
              <article key={point} className="rounded-xl border border-border bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{point}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={therapyFaqs} title={`${titleArea} therapy research FAQs`} />
      <CTASection variant="therapy" therapyArea={titleArea} />
    </main>
  );
}

