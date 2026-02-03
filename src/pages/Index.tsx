import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import { useSanityBlog } from '@/hooks/useSanityBlog';

const Index = () => {
  const { hash } = useLocation();
  const { data: sanityPosts } = useSanityBlog();

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
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <GeographicCoverageSection />
        <MethodologySection />
        <TherapeuticAreasSection />
        <StatsSection />
        <BlogSection posts={sanityPosts?.slice(0, 3) ?? undefined} />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
