import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';

const faqItems = [
  {
    question: 'How is SFDA regulation reflected in BioNixus Saudi studies?',
    answer:
      'Every Saudi research plan is aligned to SFDA realities, local procurement pathways, and payer expectations so recommendations are executable in actual market conditions.',
  },
  {
    question: 'Can BioNixus run bilingual Saudi projects?',
    answer:
      'Yes. We run Arabic-English research workflows with localized screener logic, moderator guides, and reporting outputs for both regional and global stakeholders.',
  },
  {
    question: 'What types of Saudi stakeholders can be recruited?',
    answer:
      'We recruit physicians, pharmacists, hospital decision-makers, procurement stakeholders, payers, and other healthcare experts relevant to the research objective.',
  },
  {
    question: 'Do you provide Saudi market-entry and pricing support?',
    answer:
      'Yes. We combine stakeholder insight, market sizing, and access evidence to support launch sequencing, positioning, and practical market-entry choices.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pharmaceutical Market Research in Saudi Arabia',
    serviceType: 'Saudi Arabia pharmaceutical market research',
    areaServed: {
      '@type': 'Country',
      name: 'Saudi Arabia',
    },
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Market Research', href: '/market-research' },
    {
      name: 'Pharmaceutical Market Research in Saudi Arabia',
      href: '/market-research-saudi-arabia-pharmaceutical',
    },
  ]),
  buildFAQSchema(faqItems),
];

export default function MarketResearchSaudiArabiaPharmaceutical() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Pharmaceutical Market Research in Saudi Arabia | SFDA, Vision 2030 & Market Access | BioNixus"
        description="Saudi Arabia pharmaceutical market research services with SFDA-aligned evidence, Vision 2030 market intelligence, local stakeholder insights, and bilingual field execution."
        canonical="/market-research-saudi-arabia-pharmaceutical"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Market Research', href: '/market-research' },
            {
              name: 'Pharmaceutical Market Research in Saudi Arabia',
              href: '/market-research-saudi-arabia-pharmaceutical',
            },
          ]}
        />

        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Pharmaceutical Market Research in Saudi Arabia
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/90">
              Saudi Arabia is one of the most strategic healthcare markets in the region. BioNixus helps pharmaceutical
              teams translate SFDA requirements, institutional procurement behavior, and physician decision dynamics into
              practical launch and growth strategies.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">Why the Saudi pharmaceutical market is unique</h2>
            <p>
              Saudi Arabia combines high public-health investment, national transformation goals, and evolving procurement
              structures that materially change the way pharmaceutical products are adopted. Teams entering the market need
              more than a generic GCC perspective. They need Saudi-specific evidence on treatment pathways, account-level
              decision points, and real reimbursement behavior in institutional settings.
            </p>
            <p>
              Vision 2030 has accelerated modernization across healthcare infrastructure, digital systems, and local
              manufacturing ambitions. These shifts create opportunity, but they also change competitive dynamics and raise
              the bar for country-level planning. Winning strategies depend on understanding how policy intent translates
              into practical implementation at hospitals, physician networks, and procurement channels.
            </p>
            <p>
              BioNixus builds Saudi research programs that answer decision-critical questions: where demand is truly
              concentrated, which stakeholders influence protocol placement, how SFDA and market-access milestones affect
              timelines, and what evidence format decision-makers trust. This approach helps teams prioritize investments
              with greater confidence and lower execution risk.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-5">Saudi-specific market research services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">Physician and specialist intelligence</h3>
                <p className="text-sm text-muted-foreground">
                  We map prescriber behavior, treatment sequencing, and adoption barriers across priority therapeutic
                  areas, then convert findings into actionable segment strategies.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">SFDA and access pathway research</h3>
                <p className="text-sm text-muted-foreground">
                  We identify evidence needs and process friction points from registration through institutional uptake so
                  teams can reduce avoidable delays.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">Hospital and procurement landscape analysis</h3>
                <p className="text-sm text-muted-foreground">
                  We assess account readiness, committee influence, and procurement behavior to improve activation
                  sequencing and field-force focus.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">Bilingual qualitative and quantitative execution</h3>
                <p className="text-sm text-muted-foreground">
                  Arabic-English workflows ensure local nuance is preserved while outputs remain aligned for regional and
                  global leadership teams.
                </p>
              </article>
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              For teams planning broader regional programs, start from our{' '}
              <Link to="/market-research" className="text-primary underline">
                market research services hub
              </Link>{' '}
              and then apply Saudi-specific evidence to prioritize launch and growth investments.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5">
            <h2 className="text-3xl font-display font-semibold text-foreground">Saudi case study patterns we solve</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our case work in Saudi Arabia repeatedly focuses on the same commercial and access challenges. While every
              project is confidential, these representative patterns show where evidence creates measurable value.
            </p>
            <div className="space-y-4">
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">Case Pattern 1: Pre-launch prioritization under uncertainty</h3>
                <p className="text-sm text-muted-foreground">
                  Challenge: A specialty portfolio needed a realistic demand model and account prioritization framework.
                  Solution: BioNixus combined physician interviews, institutional mapping, and quantitative sizing.
                  Result: The team shifted resource allocation to high-conversion segments and accelerated readiness.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">Case Pattern 2: Access evidence alignment for Saudi stakeholders</h3>
                <p className="text-sm text-muted-foreground">
                  Challenge: Global evidence was not fully resonating in local access conversations. Solution: We
                  localized value narratives and stakeholder objections by decision gate. Result: The client improved
                  payer dialogue consistency and reduced late-stage evidence rework.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">Case Pattern 3: Competitive response planning in a fast-moving segment</h3>
                <p className="text-sm text-muted-foreground">
                  Challenge: A team needed better visibility into competitor positioning and switch risk. Solution: We
                  ran a mixed-method intelligence program with segment-level analysis. Result: The client adjusted field
                  messaging and captured stronger early adoption in priority accounts.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">Regulatory and policy context: SFDA and Vision 2030</h2>
            <p>
              Saudi execution quality depends on how well teams align with local regulatory and policy context. SFDA
              pathway decisions, evidence structuring, and timeline assumptions should be integrated with market-access and
              activation planning from the beginning. Treating these streams separately often leads to duplicated effort
              and slower commercialization.
            </p>
            <p>
              Vision 2030 continues to shape healthcare priorities through system modernization, quality improvement, and
              long-term sustainability goals. This creates both strategic opportunity and operational complexity. Strong
              programs connect policy direction with practical account-level realities, including physician behavior,
              procurement criteria, and institutional implementation constraints.
            </p>
            <p>
              BioNixus research outputs are designed for this reality: decision-ready and execution-ready. We combine
              stakeholder evidence with market structure analysis so Saudi plans are grounded in what can actually be
              implemented, not just what looks good in a strategy deck.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-4">Arabic market context section</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We include Arabic-language moderation and localized terminology controls to ensure insights remain precise in
              high-context healthcare conversations.
            </p>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="text-foreground leading-relaxed">
                في المملكة العربية السعودية، نجاح أبحاث السوق الدوائية يعتمد على فهم عميق لسلوك مقدمي الرعاية الصحية
                وآليات الشراء المؤسسية ومتطلبات الجهات التنظيمية. تقدم BioNixus برامج بحثية ثنائية اللغة (العربية
                والإنجليزية) تساعد فرق التسويق والوصول إلى السوق على اتخاذ قرارات عملية قابلة للتنفيذ.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">Saudi market FAQs</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection variant="country" countryName="Saudi Arabia" />
      </main>
      <Footer />
    </div>
  );
}
