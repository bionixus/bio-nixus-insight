import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Users, TrendingUp, Shield, Target, Microscope } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import SchemaMarkup from '@/components/SchemaMarkup';

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
        language={language}
        people={[
          {
            name: 'Mohammad Alsaadany',
            jobTitle: 'Healthcare Market Research Expert',
            sameAs: 'https://www.linkedin.com/in/mohammad-alsaadany',
          },
        ]}
      />
      <Helmet>
        <title>About BioNixus | International Healthcare Market Research — EMEA Heritage</title>
        <meta
          name="description"
          content="BioNixus is an international healthcare market research company headquartered in the USA with offices in London, UK. Deep MENA expertise, cost-effective solutions, and an extensive physician/HCP network across 17+ countries."
        />
        <link rel="canonical" href="https://www.bionixus.com/about" />
      </Helmet>
      <Navbar />
      <main>
        {/* Back link */}
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

        {/* Hero */}
        <section className="section-padding pt-4 pb-16" ref={heroRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 sr sr-left sr-fast">
              About BioNixus
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl sr sr-up sr-line">
              International Market Research Company with Deep EMEA Heritage
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8 sr sr-up">
              BioNixus is an international healthcare market research firm headquartered in the United States with offices in London, United Kingdom. We specialise in pharmaceutical and life sciences consulting across Europe, the Middle East, and North Africa.
            </p>
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
                  BioNixus was founded on a simple premise: pharmaceutical companies deserve actionable, on-the-ground intelligence from the markets they serve — not repackaged secondary data from thousands of miles away.
                </p>
                <p>
                  We recognised that the MENA region — home to some of the world's fastest-growing pharmaceutical markets — was consistently underserved by traditional research firms. Physicians in Saudi Arabia, the UAE, Egypt, Kuwait, and Qatar had critical insights to share, but the existing research infrastructure wasn't built to reach them effectively.
                </p>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed sr sr-right">
                <p>
                  Today, BioNixus operates across 17+ countries, delivering quantitative and qualitative research in English, Arabic, French, German, Spanish, and Chinese. Our dual presence in the USA and UK positions us as a bridge between Western pharmaceutical innovation and EMEA market realities.
                </p>
                <p>
                  With 120+ projects delivered and 15+ years of combined team experience across healthcare market research, we bring the rigour of a global consultancy with the agility and cost-effectiveness of a specialist firm.
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
              Three core differentiators define the BioNixus approach to healthcare market research.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Differentiator 1 */}
              <div className="bg-card border border-border rounded-xl p-8 sr sr-scale-up sr-spring hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  Deep MENA Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain the most comprehensive physician panel across the GCC and North Africa. Our bilingual research teams (Arabic–English) understand local regulatory frameworks — SFDA, DHA, MOHAP, EDA — and the cultural nuances that shape clinical decision-making in the region.
                </p>
              </div>
              {/* Differentiator 2 */}
              <div className="bg-card border border-border rounded-xl p-8 sr sr-scale-up sr-spring hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  Cost-Effective Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We deliver premium-quality research at competitive rates. Unlike large consultancies that layer overhead and subcontract fieldwork, BioNixus operates a lean, senior-led model. You get direct access to experienced researchers — not project coordinators managing outsourced panels.
                </p>
              </div>
              {/* Differentiator 3 */}
              <div className="bg-card border border-border rounded-xl p-8 sr sr-scale-up sr-spring hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  Physician & HCP Network
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our proprietary network spans physicians, hospital decision-makers, payers, and KOLs across 17+ countries. This unique access enables rapid recruitment, high response rates, and authentic clinical perspectives that secondary data simply cannot provide.
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
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">Rigour & Integrity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every data point we deliver is verified, every methodology is transparent, and every recommendation is backed by evidence. We adhere to GDPR, BHBIA, EphMRA, and ICC/ESOMAR standards without exception.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 sr sr-right hover-lift">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">Actionable Intelligence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't produce reports that gather dust. Every deliverable is designed to directly inform commercial decisions, launch strategies, and market access submissions.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 sr sr-left hover-lift">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <Microscope className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">Scientific Depth</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team understands clinical landscapes at a therapeutic-area level. From oncology treatment pathways to rare disease patient journeys, we speak the language of the physicians we interview.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 sr sr-right hover-lift">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">Cultural Competence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Research across EMEA requires more than translation — it requires cultural understanding. Our researchers have firsthand experience in GCC, North African, and European healthcare systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="section-padding py-16" ref={presenceRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8 sr sr-up sr-line">
              Global Presence
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-8 sr sr-left hover-lift">
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  United States — Headquarters
                </h3>
                <p className="text-muted-foreground">
                  1309 Coffeen Ave<br />
                  Sheridan, Wyoming 82801<br />
                  <a href="tel:+18884655557" className="text-primary hover:underline">+1 888 465 5557</a>
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8 sr sr-right hover-lift">
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  United Kingdom — London Office
                </h3>
                <p className="text-muted-foreground">
                  128 City Road<br />
                  London, EC1V 2NX<br />
                  <a href="tel:+447727666682" className="text-primary hover:underline">+44 7727 666682</a>
                </p>
              </div>
            </div>
            <div className="mt-12 text-center sr sr-up">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shimmer"
              >
                Request a Proposal
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
