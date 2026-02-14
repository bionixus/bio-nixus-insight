import { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import { useSanityBlog } from '@/hooks/useSanityBlog';

// Lazy-load below-fold sections to cut initial JS by ~200KB+
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const GeographicCoverageSection = lazy(() => import('@/components/GeographicCoverageSection'));
const MethodologySection = lazy(() => import('@/components/MethodologySection'));
const TherapeuticAreasSection = lazy(() => import('@/components/TherapeuticAreasSection'));
const StatsSection = lazy(() => import('@/components/StatsSection'));
const BlogSection = lazy(() => import('@/components/BlogSection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  const { hash } = useLocation();
  const { data: sanityPosts, isLoading: blogLoading } = useSanityBlog();

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
        <Suspense fallback={null}>
          <ServicesSection />
          <GeographicCoverageSection />
          <MethodologySection />
          <TherapeuticAreasSection />
          <StatsSection />
          <BlogSection posts={sanityPosts?.slice(0, 3) ?? undefined} isLoading={blogLoading} />
          <TestimonialsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
