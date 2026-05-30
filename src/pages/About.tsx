import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Users, TrendingUp, Shield, Target, Microscope, Award, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SchemaMarkup from '@/components/SchemaMarkup';
import { CTASection } from '@/components/shared/CTASection';

const TRUST_METRICS = [
  { value: '127+', label: 'Projects delivered' },
  { value: '48', label: 'Global clients' },
  { value: '17+', label: 'Countries covered' },
  { value: '14+', label: 'Therapeutic areas' },
] as const;

const COMPLIANCE_BADGES = ['GDPR', 'BHBIA', 'EphMRA', 'ICC / ESOMAR'] as const;

const About = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const heroRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const storyRef = useScrollReveal<HTMLElement>({ stagger: 100 });
  const diffRef = useScrollReveal<HTMLElement>({ stagger: 120 });
  const valuesRef = useScrollReveal<HTMLElement>({ stagger: 100 });
  const presenceRef = useScrollReveal<HTMLElement>({ stagger: 100 });

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup
        pageType="about"
        pageUrl="https://www.bionixus.com/about"
        language="en"
        people={[
          {
            name: 'Mohammad Alsaadany',
            jobTitle: 'Healthcare Market Research Expert',
            sameAs: 'https://www.linkedin.com/in/mohammad-alsaadany',
          },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
            { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.bionixus.com/about' },
          ],
        })}</script>
      </Helmet>
      <Helmet>
        <title>About BioNixus | Pharmaceutical & Healthcare Market Research</title>
        <meta
          name="description"
          content="BioNixus is a specialist pharmaceutical and healthcare market research company operating since 2012 — US-headquartered with London and Cairo operations, delivering physician, payer, and hospital insight across 17+ countries and 14+ therapeutic areas."
        />
        <link rel="canonical" href="https://www.bionixus.com/about" />
      </Helmet>
      <Navbar />
      {/* English-only canonical page: force LTR so stored Arabic locale does not mirror English copy */}
      <main dir="ltr" lang="en">
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <Link
              to={basePath}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden /> Back to Home
            </Link>
          </div>
        </div>

        {/* Hero — Trust & Authority pattern */}
        <section
          className="section-padding pt-4 pb-12 bg-gradient-to-br from-navy-deep via-navy-medium to-primary text-primary-foreground"
          ref={heroRef}
        >
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary-foreground text-sm font-medium mb-6 sr sr-left sr-fast revealed">
              <Award className="w-4 h-4" aria-hidden />
              About BioNixus
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6 max-w-4xl leading-tight sr sr-up sr-line revealed">
              A specialist pharmaceutical and healthcare market research company with deep EMEA roots
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mb-8 sr sr-up revealed">
              BioNixus has been running pharmaceutical and healthcare market research since 2012, headquartered in the United States with a London office and a Cairo fieldwork base. We design quantitative and qualitative studies for pharmaceutical, biotech, and medtech teams across Europe, the Middle East, and North Africa — including dedicated coverage as a{' '}
              <Link to="/market-research-saudi-arabia-pharmaceutical" className="underline font-medium text-primary-foreground">
                healthcare market research company in Saudi Arabia
              </Link>
              , the{' '}
              <Link to="/uae-pharmaceutical-market-research" className="underline font-medium text-primary-foreground">
                UAE
              </Link>
              , and{' '}
              <Link to="/egypt-pharmaceutical-market-research" className="underline font-medium text-primary-foreground">
                Egypt
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-3 mb-10 sr sr-up revealed">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors duration-200 cursor-pointer"
              >
                Request a proposal
              </Link>
              <Link
                to="/healthcare-market-research"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/40 text-primary-foreground font-semibold hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                Explore market research
              </Link>
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 sr sr-up revealed" aria-label="Company credentials">
              {TRUST_METRICS.map((metric) => (
                <li
                  key={metric.label}
                  className="rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-center"
                >
                  <p className="text-2xl md:text-3xl font-display font-semibold text-primary-foreground">{metric.value}</p>
                  <p className="text-sm text-primary-foreground/80 mt-1">{metric.label}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 sr sr-up revealed" aria-label="Compliance standards">
              {COMPLIANCE_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-md bg-white/10 text-xs font-medium text-primary-foreground/90 border border-white/15"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding py-16 bg-cream-dark" ref={storyRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8 sr sr-up sr-line">
              Our Story
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-5 text-muted-foreground leading-relaxed sr sr-left">
                <p>
                  BioNixus began in 2012 with a straightforward conviction: pharmaceutical decision-makers deserve first-hand evidence from the markets they actually serve — not secondary data repackaged from thousands of miles away. That conviction still shapes every study we run.
                </p>
                <p>
                  We saw the gap most clearly across the Middle East and North Africa — home to some of the world's fastest-growing pharmaceutical markets, yet routinely underserved by conventional research models. Physicians in Saudi Arabia, the UAE, Egypt, Kuwait, and Qatar held insight that mattered for launch and access, but the fieldwork infrastructure to reach them, in their language and within their regulatory reality, largely did not exist. So we built it.
                </p>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed sr sr-right">
                <p>
                  Today, BioNixus runs research across 17+ countries and 14+ therapeutic areas, fielding in English, Arabic, French, German, Spanish, and Chinese. Our footprint across the United States, the United Kingdom, and Egypt lets us connect Western pharmaceutical innovation to the on-the-ground realities of EMEA markets — and increasingly to wider Asian and global studies.
                </p>
                <p>
                  With 127+ projects delivered for 48 global clients, we pair the methodological rigour of a large consultancy with the speed, seniority, and cost discipline of a specialist firm. The team that scopes your study is the same team that delivers it — and you can see exactly how we work in our{' '}
                  <Link to="/methodology" className="text-primary font-medium hover:underline">
                    research methodology
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="section-padding py-16" ref={diffRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4 sr sr-up sr-line">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl sr sr-up">
              Three things consistently separate a BioNixus engagement from commissioning research elsewhere.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-xl p-8 sr sr-scale-up sr-spring hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6" aria-hidden>
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  Deep MENA Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain a deep, continuously refreshed physician and stakeholder panel across the GCC and North Africa. Our bilingual Arabic–English teams know the regulators that govern healthcare decisions — SFDA, DHA, MOHAP, and the EDA — and the clinical and cultural nuances that shape how treatments are prescribed in each market.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8 sr sr-scale-up sr-spring hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6" aria-hidden>
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  Cost-Effective Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You get premium research without the premium overhead. Instead of layering account managers over subcontracted fieldwork, BioNixus runs a lean, senior-led model — so you work directly with experienced researchers who own your project end to end, not coordinators managing an outsourced panel.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8 sr sr-scale-up sr-spring hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6" aria-hidden>
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  Physician & HCP Network
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our network reaches physicians, hospital decision-makers, payers, and key opinion leaders across 17+ countries. That direct access translates into faster recruitment, stronger response rates, and authentic clinical perspective — the kind of evidence secondary databases can describe but never capture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding py-16 bg-cream-dark" ref={valuesRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-12 sr sr-up sr-line">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-5 sr sr-left hover-lift">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1" aria-hidden>
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">Rigour & Integrity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every figure we report is traceable, every method is documented, and every recommendation is anchored in evidence you can audit. We work to GDPR, BHBIA, EphMRA, and ICC/ESOMAR standards as a baseline, not an afterthought.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 sr sr-right hover-lift">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1" aria-hidden>
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">Actionable Intelligence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't deliver reports that sit on a shelf. Each study is engineered to feed a real decision — a launch sequence, a pricing position, or a{' '}
                    <Link to="/gcc-market-access-guide" className="text-primary font-medium hover:underline">
                      market access submission
                    </Link>{' '}
                    — with findings framed for the people who have to act on them.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 sr sr-left hover-lift">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1" aria-hidden>
                  <Microscope className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">Scientific Depth</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We work at therapeutic-area depth, from oncology treatment pathways to rare-disease patient journeys. Because we understand the clinical landscape, we ask physicians sharper questions and interpret their answers in the context that matters.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 sr sr-right hover-lift">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1" aria-hidden>
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">Cultural Competence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Research across EMEA takes more than translation. Our teams have first-hand experience of GCC, North African, and European health systems, so study design, recruitment, and interpretation reflect how care is really delivered in each market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="section-padding py-16" ref={presenceRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4 sr sr-up sr-line">
              Global Presence
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl sr sr-up">
              Our registered offices anchor a research footprint that reaches well beyond them — including a Cairo fieldwork base and active coverage across the GCC, North Africa, and Europe.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-8 sr sr-left hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-5 h-5 text-primary" aria-hidden />
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    United States — Headquarters
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  1309 Coffeen Ave<br />
                  Sheridan, Wyoming 82801<br />
                  <a href="tel:+18884655557" className="text-primary hover:underline cursor-pointer">+1 888 465 5557</a>
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8 sr sr-right hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-5 h-5 text-primary" aria-hidden />
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    United Kingdom — London Office
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  128 City Road<br />
                  London, EC1V 2NX<br />
                  <a href="tel:+447727666682" className="text-primary hover:underline cursor-pointer">+44 7727 666682</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection variant="service" />
      </main>
      <Footer />
    </div>
  );
};

export default About;
