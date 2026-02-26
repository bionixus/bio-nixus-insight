import { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import { useSanityLatestInsights } from '@/hooks/useSanityBlog';
import SchemaMarkup from '@/components/SchemaMarkup';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Retry lazy imports once, then reload to recover from stale chunk URLs
 * after a deployment (old hashed asset name no longer exists).
 */
function lazyWithRetry<T extends React.ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>,
) {
  return lazy(() =>
    factory().catch(() =>
      new Promise<{ default: T }>((resolve) => setTimeout(resolve, 1500)).then(() =>
        factory().catch(() => {
          window.location.reload();
          return new Promise<{ default: T }>(() => {});
        }),
      ),
    ),
  );
}

// Lazy-load below-fold sections to cut initial JS by ~200KB+
const ServicesSection = lazyWithRetry(() => import('@/components/ServicesSection'));
const GeographicCoverageSection = lazyWithRetry(() => import('@/components/GeographicCoverageSection'));
const MethodologySection = lazyWithRetry(() => import('@/components/MethodologySection'));
const TherapeuticAreasSection = lazyWithRetry(() => import('@/components/TherapeuticAreasSection'));
const StatsSection = lazyWithRetry(() => import('@/components/StatsSection'));
const BlogSection = lazyWithRetry(() => import('@/components/BlogSection'));
const TestimonialsSection = lazyWithRetry(() => import('@/components/TestimonialsSection'));
const ContactSection = lazyWithRetry(() => import('@/components/ContactSection'));
const Footer = lazyWithRetry(() => import('@/components/Footer'));

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
        <Suspense fallback={null}>
          <ServicesSection />
          <GeographicCoverageSection />
          <MethodologySection />
          <TherapeuticAreasSection />
          <StatsSection />
          <BlogSection posts={sanityPosts ?? undefined} isLoading={blogLoading} />
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
