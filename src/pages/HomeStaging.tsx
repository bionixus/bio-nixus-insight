/**
 * HomeStaging — isolated staging version of the home page (route: /home-staging).
 *
 * This is where the premium redesign (3D hero, abstract avatar mosaic, recharts
 * analytics, exit-intent popup, and the depth restyle of every section) is built
 * and reviewed WITHOUT touching the live home page (src/pages/Index.tsx).
 *
 * The page is noindex so it is never crawled. Once approved, its composition is
 * migrated onto Index.tsx in a separate, explicit step.
 *
 * Sections marked "(live)" still render the original component and are pending
 * their depth redesign; sections marked "(v2)" are the redesigned versions.
 */
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroV2 from '@/components/home-v2/HeroV2';
import AudienceSection from '@/components/home-v2/AudienceSection';
import MarketAnalyticsSection from '@/components/home-v2/MarketAnalyticsSection';
import ExitIntentDialog from '@/components/ExitIntentDialog';
import EmeaSignalsV2 from '@/components/home-v2/EmeaSignalsV2';
// Existing live sections reused on staging until each receives its v2 redesign.
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import BlogSection from '@/components/BlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GeographicCoverageSection from '@/components/GeographicCoverageSection';
import TherapeuticAreasSection from '@/components/TherapeuticAreasSection';
import HomePathwaysSection, { type PathwayCard } from '@/components/home/HomePathwaysSection';
import MethodologySection from '@/components/MethodologySection';
import ContactSection from '@/components/ContactSection';
import { CTASection } from '@/components/shared/CTASection';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { getHomePageFaq, HOME_FAQ_SECTION_ID } from '@/lib/homePageFaq';
import { useSanityLatestInsights } from '@/hooks/useSanityBlog';
import { useInitialData } from '@/contexts/InitialDataContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import type { BlogPost } from '@/types/blog';

const HomeStaging = () => {
  const { hash } = useLocation();
  const { language } = useLanguage();
  const { data: routeData } = useInitialData();
  const ssrHomeInsights = Array.isArray(routeData.homeLatestInsights)
    ? (routeData.homeLatestInsights as BlogPost[])
    : undefined;
  const { data: sanityPosts, isLoading: blogLoading } = useSanityLatestInsights(3, ssrHomeInsights);
  const homeArticlePosts = sanityPosts ?? ssrHomeInsights;
  const homeFaq = getHomePageFaq(language);
  const basePath = languagePaths[language] || '/';
  const contactHref =
    language === 'fr'
      ? '/fr/contacts'
      : language === 'ar'
        ? '/ar/contacts'
        : `${basePath === '/' ? '' : basePath}/contact`;

  const featuredCards: PathwayCard[] = [
    {
      to: '/healthcare-market-research',
      title: 'Healthcare Market Research',
      description:
        'Decision-ready healthcare market research programs for pharmaceutical teams in Europe, the UK, MENA, and GCC markets.',
      highlight: false,
    },
    {
      to: '/healthcare-market-research/saudi-arabia',
      title: 'Saudi Arabia Pharmaceutical Research',
      description:
        'SFDA-aligned pharmaceutical and healthcare market research intelligence for launch, access, and growth in KSA.',
      highlight: true,
      label: 'Country-Level Depth',
      decisionHint: 'Best for country-level execution',
    },
    {
      to: '/market-research-in-uae',
      title: 'Market Research in the UAE',
      description:
        'All-industry market research across Dubai and Abu Dhabi — FMCG, retail, BFSI, telecom, real estate, and healthcare.',
      highlight: true,
      label: 'UAE Priority',
      decisionHint: 'Best for UAE market entry',
    },
    {
      to: '/strategic-portfolio',
      title: 'Strategic Portfolio',
      description:
        'Full capability overview: 127+ projects, 48 global clients, dual-practice healthcare and consumer research across Egypt and MENA.',
      highlight: true,
      label: 'Portfolio',
      decisionHint: 'See our market research portfolio',
    },
  ];

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Home (Staging Preview) | BioNixus"
        description="Internal staging preview of the BioNixus home page redesign."
        canonical="/home-staging"
        noindex
      />
      <Navbar />
      <main>
        <HeroV2 />
        <EmeaSignalsV2 />
        <ServicesSection />
        <AudienceSection />
        <StatsSection />
        <MarketAnalyticsSection />
        <div className="cv-auto">
          <BlogSection
            posts={homeArticlePosts ?? undefined}
            isLoading={blogLoading && !ssrHomeInsights?.length}
          />
        </div>
        <TestimonialsSection />
        <div className="cv-auto">
          <GeographicCoverageSection />
        </div>
        <div className="cv-auto">
          <TherapeuticAreasSection />
        </div>
        <div className="cv-auto">
          <HomePathwaysSection cards={featuredCards} />
        </div>
        <div className="cv-auto">
          <MethodologySection nestUnderParentH1 />
        </div>
        <div className="section-padding bg-cream border-t border-border">
          <FAQSection
            sectionId={HOME_FAQ_SECTION_ID}
            title={homeFaq.sectionTitle}
            items={homeFaq.items}
            className="py-14 bg-transparent"
          />
          <div className="container-wide max-w-4xl mx-auto pb-12 text-center text-sm text-muted-foreground">
            <Link to="/faq" className="text-primary font-medium hover:underline">
              {homeFaq.ctaFullFaq}
            </Link>
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <Link to={contactHref} className="text-primary font-medium hover:underline">
              {homeFaq.ctaProposal}
            </Link>
          </div>
        </div>
        <CTASection variant="research-proposal" />
        <div className="cv-auto">
          <ContactSection embedOnHomePage />
        </div>
      </main>
      <Footer />
      <ExitIntentDialog />
    </div>
  );
};

export default HomeStaging;
