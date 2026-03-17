import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GeographicCoverageSection from '@/components/GeographicCoverageSection';
import MethodologySection from '@/components/MethodologySection';
import TherapeuticAreasSection from '@/components/TherapeuticAreasSection';
import StatsSection from '@/components/StatsSection';
import BlogSection from '@/components/BlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useSanityLatestInsights } from '@/hooks/useSanityBlog';
import SchemaMarkup from '@/components/SchemaMarkup';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { hash } = useLocation();
  const { language } = useLanguage();
  const { data: sanityPosts, isLoading: blogLoading } = useSanityLatestInsights(3);
  const featuredCards = [
    {
      to: '/market-research',
      title: 'Market Research Services Hub',
      description:
        'Compare healthcare market research methods and pharmaceutical use cases across Europe and the Middle East.',
      highlight: false,
    },
    {
      to: '/market-research-saudi-arabia-pharmaceutical',
      title: 'Saudi Arabia Pharmaceutical Research',
      description:
        'SFDA-aligned pharmaceutical and healthcare market research intelligence for launch, access, and growth in KSA.',
      highlight: true,
      label: 'Country-Level Depth',
      decisionHint: 'Best for country-level execution',
    },
    {
      to: '/healthcare-market-research',
      title: 'Healthcare Market Research',
      description:
        'Decision-ready healthcare market research programs for pharmaceutical teams in Europe, the UK, MENA, and GCC markets.',
      highlight: false,
    },
    {
      to: '/bionixus-market-research-middle-east',
      title: 'Middle East Pharmaceutical Market Research',
      description:
        'GCC-focused pharmaceutical evidence programs for launch sequencing, market access, and cross-country execution.',
      highlight: true,
      label: 'GCC Priority',
      decisionHint: 'Best for Middle East launch and access decisions',
    },
    {
      to: '/quantitative-healthcare-market-research',
      title: 'Quantitative Healthcare Market Research Guide',
      description:
        'Execution-ready 2026 guide for survey architecture, tracker governance, and AI-assisted validation in Saudi Arabia and UAE.',
      highlight: true,
      label: 'Featured Guide',
      decisionHint: 'Best for quantitative design decisions',
    },
    {
      to: '/global-websites',
      title: 'Global Websites Directory',
      description:
        'Discover healthcare market research pages by country to support pharmaceutical strategy across Europe and the Middle East.',
      highlight: true,
      label: 'Country-Level Depth',
      decisionHint: 'Best for multi-country planning',
    },
  ];

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // No hash: open at hero section (top of page)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup pageType="home" pageUrl="https://www.bionixus.com/" language={language} />
      <Navbar />
      <main>
        <HeroSection />
        <section className="section-padding py-4 bg-background">
          <div className="container-wide max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Europe and Middle East Coverage',
              'Healthcare market research for pharmaceutical decisions',
              'Physician, payer, and hospital intelligence',
              'GDPR / EMA / MOH / SFDA aligned',
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-border bg-card p-3 text-sm text-foreground text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
        <ServicesSection />
        <div className="cv-auto">
          <GeographicCoverageSection />
        </div>
        <div className="cv-auto">
          <TherapeuticAreasSection />
        </div>
        <div className="cv-auto">
          <StatsSection />
        </div>
        <div className="cv-auto">
          <BlogSection posts={sanityPosts ?? undefined} isLoading={blogLoading} />
        </div>
        <div className="cv-auto">
          <TestimonialsSection />
        </div>
        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              Priority Healthcare Market Research Pathways for Europe and the Middle East
            </h2>
            <p className="text-muted-foreground mb-6">
              Use these{' '}
              <Link to="/healthcare-market-research" className="text-primary underline">
                healthcare market research
              </Link>{' '}
              pathways to support pharmaceutical launch, market access, and growth decisions across Europe and the
              Middle East. Compare methods in our{' '}
              <Link to="/market-research" className="text-primary underline">
                market research
              </Link>{' '}
              hub.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredCards.map((card) => (
                <Link
                  key={card.to}
                  to={card.to}
                  className={`rounded-xl border p-5 transition-all hover:shadow-md ${
                    card.highlight
                      ? 'border-primary/40 bg-gradient-to-br from-primary/10 via-card to-card hover:border-primary/60'
                      : 'border-border bg-card hover:border-primary/40'
                  }`}
                >
                  {card.label ? (
                    <span className="inline-flex mb-3 rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary">
                      {card.label}
                    </span>
                  ) : null}
                  <h3 className="font-semibold text-foreground mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                  {card.decisionHint ? <p className="mt-3 text-xs font-medium text-primary">{card.decisionHint}</p> : null}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <div className="cv-auto">
          <MethodologySection />
        </div>
        <div className="cv-auto">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
