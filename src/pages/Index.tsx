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
import { priorityRecoveryPaths } from '@/lib/internalLinkRecovery';

const Index = () => {
  const { hash } = useLocation();
  const { language } = useLanguage();
  const { data: sanityPosts, isLoading: blogLoading } = useSanityLatestInsights(3);

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
        <ServicesSection />
        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              Featured Market Research Pages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/market-research" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Market Research Services Hub</h3>
                <p className="text-sm text-muted-foreground">Compare quantitative, qualitative, and healthcare-specific services.</p>
              </Link>
              <Link to="/market-research-saudi-arabia-pharmaceutical" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Saudi Arabia Pharmaceutical Research</h3>
                <p className="text-sm text-muted-foreground">SFDA and Vision 2030 aligned market intelligence for Saudi execution.</p>
              </Link>
              <Link to="/market-research-healthcare" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Healthcare Market Research</h3>
                <p className="text-sm text-muted-foreground">Decision-ready insight programs for healthcare and pharmaceutical teams.</p>
              </Link>
              <Link to="/global-websites" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Global Websites Directory</h3>
                <p className="text-sm text-muted-foreground">Explore country and regional BioNixus pages with language coverage.</p>
              </Link>
            </div>
          </div>
        </section>
        <section className="section-padding py-8">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Discovery links for priority research pages</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Quick navigation to high-priority healthcare and pharmaceutical URLs to improve crawl depth across strategic content clusters.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {priorityRecoveryPaths.slice(0, 18).map((path) => (
                <Link key={path} to={path} className="text-primary hover:underline break-all">
                  {path}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <div className="cv-auto">
          <GeographicCoverageSection />
        </div>
        <div className="cv-auto">
          <MethodologySection />
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
        <div className="cv-auto">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
