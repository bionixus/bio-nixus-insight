import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    slug: 'quantitative-research',
    title: 'Quantitative Healthcare Research & Physician Surveys',
    summary: 'Large-scale statistical insights from physicians and healthcare professionals across 17+ EMEA countries. Online and telephone surveys with defined sample sizes (n=50–500+) across multiple specialties.',
    icon: '📊',
  },
  {
    slug: 'qualitative-research',
    title: 'Qualitative Pharmaceutical Research & Expert Insights',
    summary: 'In-depth interviews, focus groups, and advisory boards with KOLs, treating physicians, payers, and hospital decision-makers across UK, Europe, and MENA.',
    icon: '🎤',
  },
  {
    slug: 'market-access',
    title: 'Market Access & HTA Strategy',
    summary: 'Evidence-based pricing and payer engagement for UK, EU5, and GCC markets. HTA submission support for NICE, G-BA, HAS, and Gulf health authorities.',
    icon: '🏛️',
  },
  {
    slug: 'competitive-intelligence',
    title: 'Competitive Intelligence',
    summary: 'Real-time competitor monitoring, pipeline analysis, landscape assessments, launch readiness evaluations, and biosimilar impact studies.',
    icon: '🔍',
  },
  {
    slug: 'clinical-trial-support',
    title: 'Clinical Trial Support',
    summary: 'Site identification, investigator profiling, patient recruitment feasibility, protocol feedback from treating physicians, and post-launch real-world evidence.',
    icon: '🧬',
  },
  {
    slug: 'kol-stakeholder-mapping',
    title: 'KOL & Stakeholder Mapping',
    summary: 'Key Opinion Leader identification and engagement across UK, Europe, and MENA. Ethnographic research, patient journey mapping, and treatment pathway analysis.',
    icon: '🗺️',
  },
];

const Services = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthcare Market Research Services | BioNixus — Quantitative, Qualitative, Market Access</title>
        <meta
          name="description"
          content="BioNixus provides comprehensive healthcare market research services: quantitative physician surveys, qualitative KOL interviews, market access consulting, competitive intelligence, clinical trial support, and stakeholder mapping across 17+ EMEA countries."
        />
        <link rel="canonical" href="https://www.bionixus.com/services" />
      </Helmet>
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <Link
              to={basePath}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>
          </div>
        </div>

        <section className="section-padding pt-4 pb-16">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Services
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              Comprehensive Healthcare Market Research Services for EMEA
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
              From large-scale physician surveys to strategic market access consulting, BioNixus delivers end-to-end pharmaceutical research across 17+ countries in Europe, the Middle East, and North Africa.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className="group bg-card border border-border rounded-xl p-8 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="text-3xl mb-4">{svc.icon}</div>
                  <h2 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {svc.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {svc.summary}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding py-16 bg-primary">
          <div className="container-wide max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-primary-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-primary-foreground/70 mb-8 leading-relaxed">
              Tell us about your research needs and receive a tailored proposal within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
            >
              Request a Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
