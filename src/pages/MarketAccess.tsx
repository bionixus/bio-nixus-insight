import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Mail,
  Scale,
  Shield,
  Globe2,
  LineChart,
  Users,
  Gavel,
  Stethoscope,
  Building2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { SEOHead } from '@/components/seo/SEOHead';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const CANONICAL_URL = 'https://www.bionixus.com/market-access';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Market Access', href: '/market-access' },
];

const regionalComparison = [
  {
    region: 'GCC (Saudi, UAE, Qatar, Kuwait, Bahrain, Oman)',
    icon: Globe2,
    payer: 'Government MOH tenders (NUPCO in KSA), emirate formularies (DHA, DOH), and mandatory insurers in the UAE.',
    evidence:
      'External reference pricing baskets, SFDA Economic Evaluation Submission (EES) where applicable, Arabic labelling, and CTD dossiers with Zone IVB stability data.',
    launchWindow:
      '12–24 months from regulatory submission to first hospital order, depending on tender calendar and formulary listing cycles.',
    decisionMakers:
      'MOH pricing committees, hospital P&T committees, procurement directors, and insurer medical policy teams.',
  },
  {
    region: 'EU5 (UK, Germany, France, Italy, Spain)',
    icon: Scale,
    payer:
      'National HTA bodies (NICE, G-BA/IQWiG, HAS/TC, AIFA, and regional Spanish committees) driving reimbursement and price negotiation.',
    evidence:
      'Formal HTA dossiers with ICERs, budget impact models, comparative effectiveness evidence, and PICO-anchored clinical narratives.',
    launchWindow:
      '9–18 months from EMA approval to reimbursed access, extended by additional payer negotiations in Germany (AMNOG) and France (CEPS).',
    decisionMakers:
      'HTA appraisal committees, sick funds (Germany), CEPS/UNCAM (France), AIFA committees (Italy), and regional Spanish tender authorities.',
  },
  {
    region: 'United States',
    icon: LineChart,
    payer:
      'Commercial payers, PBMs, Medicare Part B/D, Medicaid, and the emerging IRA-negotiated price cohort.',
    evidence:
      'AMCP dossiers, real-world evidence packages, comparative effectiveness data, and ICER-aligned value assessments.',
    launchWindow:
      '3–12 months from FDA approval to broad formulary coverage, shaped by PBM rebate negotiations and payer utilisation management.',
    decisionMakers:
      'PBM formulary committees, IDN pharmacy directors, Medicare NCD panels, and commercial medical directors.',
  },
];

const evidencePillars = [
  {
    title: 'HEOR and health-economic modelling',
    icon: LineChart,
    body: 'Cost-effectiveness, budget-impact, and cost-utility models tuned to the local perspective — MOH payer in the GCC, sick-fund or societal in EU5, commercial and Medicare in the US. Every model is built to survive HTA-style scrutiny and to reproduce the assumptions the specific committee cares about.',
  },
  {
    title: 'Payer and formulary interviews',
    icon: Users,
    body: 'Structured qualitative work with MOH pricing officers, hospital P&T members, NUPCO procurement leads, DHA and DOH formulary reviewers, sick-fund advisors, and PBM medical directors — surfacing the objections that stall listings before your value dossier is locked.',
  },
  {
    title: 'Tender and procurement intelligence',
    icon: Gavel,
    body: 'Award trackers, historical unit-price analysis, and lot-by-lot competitor share for NUPCO, Kuwait MOH, MOPH Qatar, and UAE facility tenders — plus the qualitative context that explains why an award was won or lost.',
  },
  {
    title: 'Physician and patient adoption research',
    icon: Stethoscope,
    body: 'Prescriber switching intent, patient-flow mapping, adherence diagnostics, and biosimilar substitution behaviour — the demand-side evidence that turns a formulary listing into actual uptake.',
  },
];

const gulfRegulators = [
  {
    country: 'Saudi Arabia',
    authority: 'SFDA + NUPCO',
    focus:
      'Marketing authorisation via SFDA, Economic Evaluation Submission (EES) for selected products, and central tenders via the National Unified Procurement Company (NUPCO) covering MOH and military hospitals.',
  },
  {
    country: 'United Arab Emirates',
    authority: 'MOHAP + DHA + DOH',
    focus:
      'Federal MOHAP registration is the entry point; DHA (Dubai) and DOH (Abu Dhabi) each add emirate-level formulary listing and procurement, with mandatory insurance driving the private-sector demand.',
  },
  {
    country: 'Qatar',
    authority: 'MOPH + Hamad Medical Corporation',
    focus:
      'MOPH sets reference pricing benchmarked against KSA, UAE, and select EU markets; Hamad Medical Corporation runs the formulary and procurement that shapes hospital-administered access.',
  },
  {
    country: 'Kuwait',
    authority: 'MOH Drug & Food Control',
    focus:
      'Cost-plus pricing with a manufacturer ceiling, government-funded healthcare for citizens, and MOH tenders that concentrate volume in central formularies.',
  },
  {
    country: 'Bahrain',
    authority: 'NHRA',
    focus:
      'GCC-harmonised pricing, expanding Sehati insurance coverage, and the region’s first formal biosimilar pathway — creating opportunity for switch-based access programmes.',
  },
  {
    country: 'Oman',
    authority: 'MOH DGPA',
    focus:
      'GCC unified pricing framework in progress, government-funded care for Omani nationals, and Vision 2040 incentives for local manufacturing that influence tender preferences.',
  },
];

const faqs = [
  {
    q: 'What is pharmaceutical market access research?',
    a: 'Market access research is the primary evidence-gathering discipline that tests whether a therapy can reach the patients who need it at a sustainable price. It combines qualitative interviews with payers, formulary decision-makers, procurement officers, and prescribers with quantitative modelling — budget impact, cost-effectiveness, willingness-to-pay, and share forecasting — to answer three questions: what price is defensible, what evidence will unlock reimbursement, and what commercial narrative moves committees. BioNixus runs it as one integrated programme rather than disconnected surveys and models.',
  },
  {
    q: 'How is market access research different from ordinary market research?',
    a: 'Ordinary market research answers descriptive questions about physician preference, brand awareness, or patient behaviour. Market access research answers prescriptive questions about payer decisions — which is a different sample frame (formulary chairs, HTA reviewers, MOH pricing committees, PBM medical directors), a different evidence standard (HTA-grade methods, ICERs, budget impact), and a different deliverable structure (value dossiers, objection maps, pricing corridors) that ties directly to reimbursement submissions and tender documents.',
  },
  {
    q: 'How does SFDA market access differ from NUPCO tenders in Saudi Arabia?',
    a: 'The Saudi Food and Drug Authority (SFDA) grants marketing authorisation, approves proposed prices via external reference pricing, and — for selected products — requests an Economic Evaluation Submission (EES) with cost-effectiveness and budget-impact evidence. NUPCO is the downstream procurement engine that runs central tenders for MOH and military hospitals, awarding volume-based contracts that can shift uptake by 30–60 percentage points overnight. Access strategy in Saudi Arabia must synchronise SFDA registration, EES readiness, and NUPCO tender timing.',
  },
  {
    q: 'Do UAE emirate-level authorities really matter after MOHAP approval?',
    a: 'Yes — MOHAP registration allows a product to be marketed nationally, but Dubai Health Authority (DHA) and Department of Health Abu Dhabi (DOH) each maintain their own formulary lists, insurance coverage decisions, and tender procedures. In practice, insurer medical policy teams and emirate formulary committees are where UAE access accelerates or stalls, and the sequence in which you engage DHA versus DOH is often the single biggest lever on time-to-access.',
  },
  {
    q: 'What HEOR evidence do GCC payers actually accept?',
    a: 'GCC payers increasingly expect budget impact models, cost-effectiveness analyses with locally credible assumptions, and comparative evidence versus the therapies already on formulary. SFDA’s EES pathway formalises this in Saudi Arabia; MOHAP, DHA, and MOPH pricing reviews apply similar logic informally. The models that succeed use local epidemiology, GCC-specific unit costs where possible, transparent structure, and payer-friendly summaries — not global models simply relabelled with local currency.',
  },
  {
    q: 'How do payer interviews improve reimbursement outcomes?',
    a: 'Payer interviews translate the abstract questions of a value dossier into the specific objections a committee will raise. Structured research with 15–25 GCC MOH pricing officers, HTA reviewers, sick-fund advisors, or PBM medical directors surfaces the true evidence thresholds, the comparators the committee will actually use, and the pricing corridors the payer can defend. That intelligence lets access teams rebuild the dossier around real objections before submission — the single highest-ROI activity in launch preparation.',
  },
  {
    q: 'When should tender intelligence be commissioned?',
    a: 'For products with meaningful hospital-administered volume — biologics, injectables, oncology, orphan drugs, medical devices — tender intelligence should start 9–12 months before the first NUPCO or MOH tender cycle you plan to compete in. Historical award data reveals winning price bands, competitor discounting behaviour, and lot-splitting patterns; qualitative work with procurement officers and hospital pharmacists explains the softer criteria (supply reliability, patient support services, local manufacturing preference) that decide close awards.',
  },
  {
    q: 'How does EU5 market access compare to GCC market access?',
    a: 'EU5 access is dominated by formal HTA bodies — NICE, G-BA/IQWiG, HAS/Transparency Commission, AIFA, and regional Spanish authorities — with codified dossier requirements and ICER thresholds. GCC access has fewer formal HTA gates but concentrated payer power in MOH tenders, external reference pricing, and hospital formulary committees. EU5 typically demands more clinical-comparative evidence; GCC demands more pricing agility, local partner integration, and Arabic-language committee-ready narratives.',
  },
  {
    q: 'Does BioNixus support US market access research?',
    a: 'Yes. BioNixus runs primary payer research with US commercial medical directors, PBM formulary committees, IDN pharmacy leads, and Medicare Part D consultants — combined with AMCP-format dossiers, ICER-aligned value narratives, and real-world evidence planning. The strongest US programmes combine payer interviews with claims-informed budget models and physician demand testing, and BioNixus scopes them as integrated engagements rather than isolated surveys.',
  },
];

export default function MarketAccess() {
  const heroRef = useScrollReveal<HTMLElement>({ stagger: 80, threshold: 0.05 });
  const introRef = useScrollReveal<HTMLElement>({ stagger: 90 });
  const definitionRef = useScrollReveal<HTMLElement>({ stagger: 90 });
  const regionalRef = useScrollReveal<HTMLElement>({ stagger: 90 });
  const regulatorsRef = useScrollReveal<HTMLElement>({ stagger: 90 });
  const evidenceRef = useScrollReveal<HTMLElement>({ stagger: 90 });
  const payerRef = useScrollReveal<HTMLElement>({ stagger: 90 });
  const tenderRef = useScrollReveal<HTMLElement>({ stagger: 90 });
  const relatedRef = useScrollReveal<HTMLElement>({ stagger: 60 });
  const faqRef = useScrollReveal<HTMLElement>({ stagger: 70 });
  const ctaRef = useScrollReveal<HTMLElement>({ stagger: 80 });

  const jsonLd = useMemo(
    () => [
      buildBreadcrumbSchema(breadcrumbItems),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${CANONICAL_URL}#service`,
        name: 'Pharmaceutical Market Access Research and Strategy',
        serviceType: 'Pharmaceutical market access research',
        description:
          'Primary market access research and strategy for pharmaceutical and medical device companies — payer interviews, HEOR and HTA-grade evidence, tender intelligence, and pricing and reimbursement planning across the GCC, EU5, and US.',
        provider: {
          '@type': 'Organization',
          '@id': 'https://www.bionixus.com/#organization',
          name: 'BioNixus',
          url: 'https://www.bionixus.com',
          email: 'admin@bionixus.com',
        },
        areaServed: [
          'Saudi Arabia',
          'United Arab Emirates',
          'Qatar',
          'Kuwait',
          'Bahrain',
          'Oman',
          'United Kingdom',
          'Germany',
          'France',
          'Italy',
          'Spain',
          'United States',
        ],
        url: CANONICAL_URL,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${CANONICAL_URL}#faq`,
        url: `${CANONICAL_URL}#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Pharmaceutical Market Access Research | GCC, EU5, US | BioNixus"
        description="Primary pharmaceutical market access research and strategy — payer interviews, HEOR, HTA evidence, SFDA/NUPCO/MOHAP guidance, and tender intelligence across the GCC, EU5, and US."
        canonical="/market-access"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <section
          ref={heroRef}
          className="relative overflow-hidden text-primary-foreground"
          aria-labelledby="market-access-hero-heading"
        >
          <div
            className="absolute inset-0"
            style={{ background: 'var(--gradient-hero)' }}
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-[0.35] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 80% 60% at 15% 20%, hsl(38 92% 50% / 0.18), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 75%, hsl(220 40% 40% / 0.35), transparent 50%)',
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(hsl(0 0% 100% / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.06) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
            aria-hidden
          />
          <div
            className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-80"
            aria-hidden
          />

          <div className="relative container-wide pt-28 pb-20 md:pt-32 md:pb-28">
            <BreadcrumbNav
              items={breadcrumbItems}
              className="px-0 mb-10 text-primary-foreground/55 [&_a]:text-primary-foreground/70 [&_a:hover]:text-accent [&_span[aria-current=page]]:text-primary-foreground [&_.text-border]:text-primary-foreground/25"
            />

            <div className="sr sr-up inline-flex items-center gap-2.5 mb-6">
              <span className="h-px w-8 bg-accent/50" aria-hidden />
              <Shield className="w-4 h-4 text-accent" aria-hidden />
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-accent">
                Pharmaceutical market access
              </span>
            </div>

            <p className="sr sr-up font-display text-2xl md:text-3xl lg:text-4xl tracking-tight text-accent mb-6">
              BioNixus
            </p>
            <h1
              id="market-access-hero-heading"
              className="sr-lcp sr sr-up max-w-4xl text-4xl md:text-5xl lg:text-[3.5rem] font-display font-semibold leading-[1.08] text-balance mb-6"
            >
              Market access research and strategy for pharma, biotech, and medical devices
            </h1>
            <p className="sr sr-up max-w-3xl text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-10">
              Payer interviews, HEOR and HTA-grade evidence, SFDA and NUPCO intelligence, MOHAP and
              emirate formulary insight, and EU5 and US reimbursement research — scoped as one
              programme, not disconnected surveys and models.
            </p>

            <div className="sr sr-up flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-md hover:brightness-105 transition-[filter,transform] duration-300 hover:-translate-y-0.5"
              >
                Request a market access scope
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <a
                href="mailto:admin@bionixus.com?subject=Market%20access%20research%20inquiry"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-primary-foreground/25 text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" aria-hidden />
                admin@bionixus.com
              </a>
            </div>
          </div>
        </section>

        <section
          ref={introRef}
          className="section-padding py-16 md:py-20"
          aria-labelledby="market-access-intro-heading"
        >
          <div className="container-wide max-w-4xl mx-auto">
            <h2
              id="market-access-intro-heading"
              className="sr sr-up text-2xl md:text-3xl font-display font-semibold text-foreground mb-6"
            >
              What a market access engagement covers
            </h2>
            <div className="sr sr-up space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                BioNixus is a{' '}
                <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">
                  primary healthcare market research
                </Link>{' '}
                firm. Our market access practice sits inside that broader research engine, and it
                treats reimbursement as an evidence problem rather than a sales problem. Every
                engagement is anchored in interviews with the specific decision-makers who control
                pricing, formulary, and tender outcomes — the Ministry of Health pricing committees
                in Saudi Arabia and Kuwait, the emirate formulary reviewers at DHA and DOH, the
                sick-fund advisors in Germany, the NICE and HAS committee members in the UK and
                France, and the PBM medical directors and Medicare consultants in the United States.
              </p>
              <p>
                If you already have a regional focus, jump straight into the{' '}
                <Link to="/gcc-market-access-guide" className="text-primary font-medium hover:underline">
                  GCC market access guide
                </Link>{' '}
                for country-by-country regulatory context, or the corresponding{' '}
                <Link to="/services/market-access" className="text-primary font-medium hover:underline">
                  market access services page
                </Link>{' '}
                for our standard modules. Deeper country intelligence lives in{' '}
                <Link to="/uae-market-access-research" className="text-primary font-medium hover:underline">
                  UAE market access research
                </Link>
                ,{' '}
                <Link to="/saudi-payer-market-access-research" className="text-primary font-medium hover:underline">
                  Saudi payer market access research
                </Link>
                , and the{' '}
                <Link to="/sfda-market-access-strategy-saudi-arabia" className="text-primary font-medium hover:underline">
                  SFDA market access strategy for Saudi Arabia
                </Link>
                . When you are ready to scope, the{' '}
                <Link to="/contact" className="text-primary font-medium hover:underline">
                  contact team
                </Link>{' '}
                returns a proposal within one business day.
              </p>
              <p>
                The rest of this page is written for launch, medical affairs, and market access
                leaders comparing partners for a specific decision — pricing corridor, formulary
                strategy, HTA response, tender defence, or biosimilar switch programme. It covers
                what market access research actually is, how the GCC compares to the EU5 and the
                US, how the key regional regulators shape strategy, which HEOR and HTA-grade
                evidence packages work in 2026, and how BioNixus runs payer interviews, tender
                intelligence, and objection mapping as a single, integrated programme.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={definitionRef}
          className="section-padding py-16 md:py-20 bg-muted/30"
          aria-labelledby="what-is-market-access-heading"
        >
          <div className="container-wide max-w-4xl mx-auto">
            <div className="sr sr-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
              <Scale className="w-3.5 h-3.5" aria-hidden />
              Section 01
            </div>
            <h2
              id="what-is-market-access-heading"
              className="sr sr-up text-2xl md:text-3xl font-display font-semibold text-foreground mb-6"
            >
              What pharmaceutical market access research really means
            </h2>
            <div className="sr sr-up space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Market access research is the primary evidence-gathering discipline that determines
                whether a therapy can reach patients at a defensible price. It sits at the crossroads
                of regulatory affairs, health economics, payer strategy, and commercial planning,
                and it exists because reimbursement decisions are almost never made on clinical
                efficacy alone. Committees compare therapies against local standards of care, weigh
                budget impact against opportunity cost, and interpret evidence through the lens of
                their own political, institutional, and financial constraints. Research designed
                around those realities looks very different from generic physician surveys.
              </p>
              <p>
                A rigorous programme starts by defining the specific reimbursement decisions that
                need to be influenced — SFDA Economic Evaluation Submission acceptance, NUPCO tender
                award, DHA formulary listing, Hamad Medical Corporation adoption, NICE positive
                recommendation, G-BA additional-benefit rating, HAS transparency-commission
                opinion, or a US commercial payer’s medical policy update. From those decisions the
                sample frame is built backwards: which committee members must be interviewed, which
                comparators the payer will accept, which endpoints will drive the ICER, and which
                budget models will be run. Every subsequent module — qualitative interviews,
                quantitative dossier testing, HEOR modelling, real-world evidence design — is scoped
                to sharpen one of those specific decisions.
              </p>
              <p>
                The deliverables of a well-run market access programme are equally specific. They
                include payer objection maps that translate abstract evidence gaps into the exact
                objections a committee will raise; pricing corridors expressed as defensible price
                bands rather than single-point estimates; value dossiers written in the language and
                structure the committee expects; budget impact and cost-effectiveness models
                transparent enough to be audited by the payer’s own analysts; and tender playbooks
                that link registration timing, evidence packages, and pricing tactics to the
                calendar of the specific procurement authority. BioNixus writes these deliverables
                so that regulatory, medical, HEOR, and commercial teams can use the same document —
                because a value story that only marketing believes will not survive first contact
                with a payer.
              </p>
              <p>
                Finally, market access research is fundamentally iterative. Evidence packages are
                pressure-tested against payer objections, then reworked; pricing hypotheses are
                validated in country-specific interviews, then adjusted; tender bids are simulated
                against historical award data, then refined. The strongest engagements build in two
                to three iteration cycles before a submission is finalised, because it is cheaper
                to rewrite a dossier before it is filed than to rebuild market perception after a
                rejected reimbursement decision has become public.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={regionalRef}
          className="section-padding py-16 md:py-20"
          aria-labelledby="regional-comparison-heading"
        >
          <div className="container-wide max-w-6xl mx-auto">
            <div className="sr sr-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
              <Globe2 className="w-3.5 h-3.5" aria-hidden />
              Section 02
            </div>
            <h2
              id="regional-comparison-heading"
              className="sr sr-up text-2xl md:text-3xl font-display font-semibold text-foreground mb-4"
            >
              GCC vs EU5 vs US — where market access decisions actually happen
            </h2>
            <p className="sr sr-up text-muted-foreground max-w-3xl mb-10 leading-relaxed">
              The same product will meet very different payer logic in the GCC, the EU5, and the
              US. Understanding those differences — decision-maker, evidence standard, and typical
              launch window — is the first commercial decision a global market access team makes.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {regionalComparison.map((region) => {
                const Icon = region.icon;
                return (
                  <article
                    key={region.region}
                    className="sr sr-up bg-card border border-border rounded-xl p-6 md:p-7 hover-lift"
                  >
                    <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" aria-hidden />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                      {region.region}
                    </h3>
                    <dl className="space-y-3 text-sm">
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          Primary payer
                        </dt>
                        <dd className="text-foreground leading-relaxed">{region.payer}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          Evidence standard
                        </dt>
                        <dd className="text-foreground leading-relaxed">{region.evidence}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          Typical launch window
                        </dt>
                        <dd className="text-foreground leading-relaxed">{region.launchWindow}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          Decision-makers
                        </dt>
                        <dd className="text-foreground leading-relaxed">{region.decisionMakers}</dd>
                      </div>
                    </dl>
                  </article>
                );
              })}
            </div>

            <div className="sr sr-up mt-10 text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                In the GCC, external reference pricing and tender-driven volume dominate. A product
                approved by the SFDA can still fail commercially if the price ceiling set by the
                reference basket makes it uneconomic to bid competitively into a NUPCO tender, or if
                the emirate formulary in Dubai declines to list ahead of Abu Dhabi. In the EU5,
                clinical-comparative evidence gates access — NICE and G-BA in particular will pin
                the value story on ICER thresholds and additional-benefit ratings, and access
                teams that arrive with weak comparator evidence get sent back for another cycle. In
                the US, coverage is decided company by company: commercial payers, PBMs, IDNs, and
                Medicare consultants each apply their own utilisation management logic, and no
                single national HTA decides the reimbursement outcome.
              </p>
              <p>
                A global launch plan therefore has to hold three different evidence packages in
                parallel: an HTA-grade dossier for the EU5, an AMCP-format dossier and RWE plan for
                the US, and a payer-and-tender package for the GCC that combines Arabic-language
                committee narratives, EES-ready HEOR modelling for Saudi Arabia, and emirate-level
                stakeholder mapping for the UAE. BioNixus scopes engagements so those three
                packages share underlying evidence but are structured to the standards each region
                actually applies.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={regulatorsRef}
          className="section-padding py-16 md:py-20 bg-muted/30"
          aria-labelledby="regulators-heading"
        >
          <div className="container-wide max-w-6xl mx-auto">
            <div className="sr sr-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
              <Building2 className="w-3.5 h-3.5" aria-hidden />
              Section 03
            </div>
            <h2
              id="regulators-heading"
              className="sr sr-up text-2xl md:text-3xl font-display font-semibold text-foreground mb-4"
            >
              SFDA, NUPCO, MOHAP, and the payer authorities that shape Gulf access
            </h2>
            <p className="sr sr-up text-muted-foreground max-w-3xl mb-10 leading-relaxed">
              The GCC is not a single market. Each country pairs a marketing-authorisation
              authority with a distinct procurement or reimbursement channel, and the interaction
              between the two is where market access strategy is won or lost.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {gulfRegulators.map((entry) => (
                <article
                  key={entry.country}
                  className="sr sr-up bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {entry.country}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded px-2 py-1">
                      {entry.authority}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{entry.focus}</p>
                </article>
              ))}
            </div>

            <div className="sr sr-up mt-10 text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                Saudi Arabia is the strategic anchor of GCC access. SFDA registration remains the
                gatekeeper for marketing authorisation, external reference pricing determines the
                initial price ceiling, and — for oncology, biologics, and selected high-cost
                specialty products — an Economic Evaluation Submission is now a decisive input.
                Access teams that plan NUPCO tender participation without first synchronising SFDA
                registration timing and EES readiness typically lose the first tender cycle. BioNixus
                works with launch teams to build a single Saudi access roadmap that treats SFDA,
                EES, NUPCO, and hospital P&T listing as four interconnected milestones rather than
                separate work streams — the full picture is captured in the{' '}
                <Link to="/sfda-market-access-strategy-saudi-arabia" className="text-primary font-medium hover:underline">
                  SFDA market access strategy for Saudi Arabia
                </Link>
                .
              </p>
              <p>
                In the UAE, MOHAP is the entry point but rarely the deciding authority. The
                practical access decisions happen at the emirate level — DHA in Dubai and DOH in
                Abu Dhabi — and at the insurer level, where medical policy teams shape the
                copayment tier and utilisation management rules that determine private-sector
                uptake. The sequence in which a launch team engages DHA versus DOH is a strategic
                choice, not a logistical one, and it changes commonly by therapy area and by the
                dominant payer for the target patient population.
              </p>
              <p>
                Kuwait, Qatar, Bahrain, and Oman each add their own logic. Kuwait combines cost-plus
                pricing with MOH tenders that concentrate volume. Qatar’s Hamad Medical Corporation
                effectively acts as the largest single formulary in the country. Bahrain’s NHRA was
                the first GCC authority to formalise a biosimilar pathway, creating windows for
                switch-based access programmes. Oman is progressing toward the GCC unified pricing
                framework while offering Vision 2040 incentives for local manufacturing that can
                tilt tender preferences. Fluency with those specifics separates useful access
                research from generic “regional” intelligence.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={evidenceRef}
          className="section-padding py-16 md:py-20"
          aria-labelledby="evidence-heading"
        >
          <div className="container-wide max-w-6xl mx-auto">
            <div className="sr sr-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
              <LineChart className="w-3.5 h-3.5" aria-hidden />
              Section 04
            </div>
            <h2
              id="evidence-heading"
              className="sr sr-up text-2xl md:text-3xl font-display font-semibold text-foreground mb-4"
            >
              HEOR, HTA-grade evidence, and the four pillars of a market access programme
            </h2>
            <p className="sr sr-up text-muted-foreground max-w-3xl mb-10 leading-relaxed">
              BioNixus combines four evidence pillars into a single research programme —
              health-economic modelling, payer interviews, tender intelligence, and adoption
              research. Each pillar answers a specific reimbursement question, and each is scoped
              to the committee that will actually see the output.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {evidencePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article
                    key={pillar.title}
                    className="sr sr-up bg-card border border-border rounded-xl p-6 md:p-7 hover-lift"
                  >
                    <div className="w-11 h-11 rounded-lg bg-accent/15 text-accent flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" aria-hidden />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.body}</p>
                  </article>
                );
              })}
            </div>

            <div className="sr sr-up mt-10 text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                HEOR is the quantitative spine of market access. In the GCC, budget impact models
                dominate because payers are managing fixed annual budgets rather than long-horizon
                societal costs; cost-effectiveness models are used selectively, particularly under
                SFDA’s EES pathway. In the EU5, cost-utility models expressed as ICERs are the
                default, with NICE applying a formal willingness-to-pay threshold and G-BA relying
                on additional-benefit ratings that shift the pricing anchor. In the US, budget
                impact and cost-effectiveness feed AMCP dossiers and ICER assessments, but the real
                lever is often the rebate architecture negotiated with PBMs and the utilisation
                management rules attached to formulary coverage.
              </p>
              <p>
                Whatever the market, BioNixus builds models to be audited. That means transparent
                structure, source-linked assumptions, sensitivity analyses that reflect the
                specific concerns of the committee (not generic tornado charts), and payer-facing
                summaries written in the language of the reviewer rather than the language of the
                consultant. Models that cannot be defended in a face-to-face committee meeting have
                little practical value in an access programme.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={payerRef}
          className="section-padding py-16 md:py-20 bg-muted/30"
          aria-labelledby="payer-interviews-heading"
        >
          <div className="container-wide max-w-4xl mx-auto">
            <div className="sr sr-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
              <Users className="w-3.5 h-3.5" aria-hidden />
              Section 05
            </div>
            <h2
              id="payer-interviews-heading"
              className="sr sr-up text-2xl md:text-3xl font-display font-semibold text-foreground mb-6"
            >
              Payer interviews — the highest-ROI activity in launch preparation
            </h2>
            <div className="sr sr-up space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Payer interviews are the single highest-ROI activity in a market access programme,
                and they are also the module most often executed poorly. A generic payer survey
                delivered by an agency without regional depth will typically return polite,
                aspirational answers about “clinical need” that do not translate into reimbursement
                outcomes. BioNixus runs payer research as structured qualitative work with a sample
                frame built from named institutions — MOH pricing committee members in Riyadh,
                formulary reviewers at DHA and DOH, procurement leads at NUPCO, sick-fund advisors
                in Germany, HAS transparency commission alumni in France, and PBM medical directors
                and IDN pharmacy leads in the US.
              </p>
              <p>
                The output is not a report of frequencies. It is an objection map — a
                stakeholder-by-stakeholder catalogue of the specific objections each committee will
                raise, the evidence they will accept in rebuttal, and the pricing corridors they can
                defend to their own leadership. That objection map becomes the source document for
                the value dossier, the HEOR model calibration, the label negotiation, and the
                pricing strategy. It also becomes the internal document that aligns medical, HEOR,
                and commercial teams around one version of the payer reality — replacing the
                consultative disagreements that usually delay launch.
              </p>
              <p>
                For Saudi Arabia specifically, the deeper mechanics are described in{' '}
                <Link to="/saudi-payer-market-access-research" className="text-primary font-medium hover:underline">
                  Saudi payer market access research
                </Link>
                . For the UAE, our{' '}
                <Link to="/uae-market-access-research" className="text-primary font-medium hover:underline">
                  UAE market access research
                </Link>{' '}
                page covers the emirate-by-emirate payer logic. And for global launches, the
                broader{' '}
                <Link to="/services/market-access" className="text-primary font-medium hover:underline">
                  market access services page
                </Link>{' '}
                shows how these modules combine into a single programme.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={tenderRef}
          className="section-padding py-16 md:py-20"
          aria-labelledby="tender-intelligence-heading"
        >
          <div className="container-wide max-w-4xl mx-auto">
            <div className="sr sr-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
              <Gavel className="w-3.5 h-3.5" aria-hidden />
              Section 06
            </div>
            <h2
              id="tender-intelligence-heading"
              className="sr sr-up text-2xl md:text-3xl font-display font-semibold text-foreground mb-6"
            >
              Tender intelligence — the engine of hospital-administered access in the GCC
            </h2>
            <div className="sr sr-up space-y-5 text-muted-foreground leading-relaxed">
              <p>
                For biologics, injectables, oncology, and medical devices, tender awards decide
                access in the GCC. NUPCO in Saudi Arabia consolidates MOH and military hospital
                procurement; Kuwait MOH and MOPH Qatar run their own centralised tenders; the UAE
                mixes federal MOHAP procurement with emirate-level and facility-level tenders that
                behave very differently. Winning consistently requires the same disciplined
                intelligence used in the best consumer-goods pricing programmes — historical award
                databases, competitor discounting curves, lot-level share tracking, and structured
                interviews with procurement officers who explain why an award was won or lost.
              </p>
              <p>
                BioNixus tender intelligence deliverables include price-band models that project
                where a winning bid must fall, competitor behaviour analyses that flag likely
                spoiler bids, and post-award audit reports that reconcile expected uptake against
                real hospital consumption. For biosimilar and generic portfolios the intelligence
                extends to interchangeability confidence, pharmacist substitution behaviour, and
                physician switching intent — the demand-side variables that determine whether a
                tender win translates into sustainable volume or a one-cycle spike followed by loss.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={relatedRef}
          className="section-padding py-16 md:py-20 bg-muted/20"
          aria-labelledby="related-heading"
        >
          <div className="container-wide max-w-6xl mx-auto">
            <h2
              id="related-heading"
              className="sr sr-up text-2xl md:text-3xl font-display font-semibold text-foreground mb-4"
            >
              Related market access resources
            </h2>
            <p className="sr sr-up text-muted-foreground mb-8 max-w-3xl">
              Country-specific and modality-specific pages that support market access decisions
              across the GCC and adjacent priority markets.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <Link
                to="/gcc-market-access-guide"
                className="sr sr-up rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                GCC market access guide — country-by-country regulatory overview
              </Link>
              <Link
                to="/sfda-market-access-strategy-saudi-arabia"
                className="sr sr-up rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                SFDA market access strategy for Saudi Arabia
              </Link>
              <Link
                to="/saudi-payer-market-access-research"
                className="sr sr-up rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                Saudi payer market access research
              </Link>
              <Link
                to="/uae-market-access-research"
                className="sr sr-up rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                UAE market access research — DHA, DOH, MOHAP
              </Link>
              <Link
                to="/kuwait-market-access-research"
                className="sr sr-up rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                Kuwait market access research
              </Link>
              <Link
                to="/qatar-market-access-research"
                className="sr sr-up rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                Qatar market access research
              </Link>
              <Link
                to="/respiratory-market-access-gcc"
                className="sr sr-up rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                Respiratory market access GCC
              </Link>
              <Link
                to="/healthcare-market-research"
                className="sr sr-up rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                Healthcare market research hub
              </Link>
              <Link
                to="/services/market-access"
                className="sr sr-up rounded-lg border border-border bg-card p-4 text-primary hover:underline"
              >
                Market access consulting services
              </Link>
            </div>
          </div>
        </section>

        <section
          ref={faqRef}
          className="section-padding py-16 md:py-20"
          aria-labelledby="faq-heading"
          id="faq"
        >
          <div className="container-wide max-w-4xl mx-auto">
            <h2
              id="faq-heading"
              className="sr sr-up text-2xl md:text-3xl font-display font-semibold text-foreground mb-4"
            >
              Frequently asked questions
            </h2>
            <p className="sr sr-up text-muted-foreground mb-10 max-w-3xl">
              The questions launch, medical affairs, and market access leaders ask when comparing
              research partners for a specific reimbursement decision.
            </p>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="sr sr-up group bg-card border border-border rounded-xl p-6 open:shadow-sm"
                >
                  <summary className="text-lg font-display font-semibold text-foreground cursor-pointer list-none flex items-start justify-between gap-4">
                    <span>{faq.q}</span>
                    <span
                      className="mt-1 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45 text-xl leading-none"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-4">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={ctaRef}
          className="relative overflow-hidden text-primary-foreground"
          aria-labelledby="cta-heading"
        >
          <div
            className="absolute inset-0"
            style={{ background: 'var(--gradient-hero)' }}
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-[0.35] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 70% 55% at 80% 30%, hsl(38 92% 50% / 0.16), transparent 55%), radial-gradient(ellipse 60% 50% at 15% 85%, hsl(220 40% 40% / 0.35), transparent 50%)',
            }}
            aria-hidden
          />
          <div className="relative container-wide py-20 md:py-24 max-w-4xl mx-auto text-center">
            <h2
              id="cta-heading"
              className="sr sr-up text-3xl md:text-4xl font-display font-semibold mb-5"
            >
              Ready to scope a market access programme?
            </h2>
            <p className="sr sr-up text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
              Share the reimbursement decision you need to influence, the markets that matter, and
              the evidence standard your stakeholders expect. A BioNixus research director returns
              a scoped proposal within one business day.
            </p>
            <div className="sr sr-up flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-md hover:brightness-105 transition-[filter,transform] duration-300 hover:-translate-y-0.5"
              >
                Request a proposal
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <a
                href="mailto:admin@bionixus.com?subject=Market%20access%20research%20inquiry"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-primary-foreground/25 text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" aria-hidden />
                admin@bionixus.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
