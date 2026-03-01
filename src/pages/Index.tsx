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
            <div className="grid md:grid-cols-3 gap-4">
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
            </div>
          </div>
        </section>
        <GeographicCoverageSection />
        <MethodologySection />
        <TherapeuticAreasSection />
        <StatsSection />
        <BlogSection posts={sanityPosts ?? undefined} isLoading={blogLoading} />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
