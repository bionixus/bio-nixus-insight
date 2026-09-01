import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import { PremiumComplianceRibbon } from '@/components/home/PremiumComplianceRibbon';
import { HomeOverviewVideoSection } from '@/components/home/HomeOverviewVideoSection';
import GlobalReachSection from '@/components/home/GlobalReachSection';
import IndustriesGatewaySection from '@/components/home/IndustriesGatewaySection';
import ServicesSection from '@/components/ServicesSection';
import MethodologySection from '@/components/MethodologySection';
import StatsSection from '@/components/StatsSection';
import BlogSection from '@/components/BlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { ClientReviewsTeaser } from '@/components/home/ClientReviewsTeaser';
import HomePathwaysSection from '@/components/home/HomePathwaysSection';
import { HomeExploreResearchSection } from '@/components/home/HomeExploreResearchSection';
import { HomeExplainerSection } from '@/components/media/HomeExplainerSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { CTASection } from '@/components/shared/CTASection';
import { useSanityLatestInsights } from '@/hooks/useSanityBlog';
import SchemaMarkup from '@/components/SchemaMarkup';
import { useInitialData } from '@/contexts/InitialDataContext';
import type { BlogPost } from '@/types/blog';
import { filterPostsBySilo } from '@/lib/blog-content-silo';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { getHomePageFaq, HOME_FAQ_SECTION_ID } from '@/lib/homePageFaq';
import { localizedContactPath, seoByLanguage } from '@/lib/seo';
import { useLanguage } from '@/contexts/LanguageContext';
import { buildHomePathwayCards } from '@/data/homePathwayCards';

const Index = () => {
  const { hash } = useLocation();
  const { language, t } = useLanguage();
  const { data: routeData } = useInitialData();
  const ssrHomeInsights = Array.isArray(routeData.homeLatestInsights)
    ? (routeData.homeLatestInsights as BlogPost[])
    : undefined;
  const { data: sanityPosts, isLoading: blogLoading } = useSanityLatestInsights(3, ssrHomeInsights);
  const homeArticlePosts = filterPostsBySilo(sanityPosts ?? ssrHomeInsights ?? [], 'healthcare');
  const homeFaq = getHomePageFaq(language);
  const homeCanonicalUrl = new URL(seoByLanguage[language].canonicalPath, 'https://www.bionixus.com').toString();
  const contactHref = localizedContactPath(language);

  const featuredCards = buildHomePathwayCards(language, t.homePage.pathwayCards);
  const explore = t.ui.exploreResearch;

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup
        pageType="home"
        pageUrl={homeCanonicalUrl}
        language={language}
        faqItems={homeFaq.items}
        articlePosts={homeArticlePosts}
      />
      <Helmet>
        <link rel="preload" as="image" href="/bionixus-logo.webp" fetchPriority="high" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <PremiumComplianceRibbon />
        <GlobalReachSection />
        <ServicesSection />
        <div className="cv-auto">
          <HomeOverviewVideoSection />
        </div>
        <div className="cv-auto">
          <HomeExplainerSection />
        </div>
        <StatsSection />
        <div className="cv-auto">
          <IndustriesGatewaySection />
        </div>
        <div className="cv-auto">
          <BlogSection
            variant="home"
            posts={homeArticlePosts ?? undefined}
            isLoading={blogLoading && !ssrHomeInsights?.length}
          />
        </div>
        <div className="cv-auto">
          <ClientReviewsTeaser />
        </div>
        <div className="cv-auto">
          <TestimonialsSection />
        </div>
        <div className="cv-auto">
          <HomePathwaysSection cards={featuredCards} />
        </div>
        <div className="cv-auto">
          <HomeExploreResearchSection
            explore={explore}
            language={language}
            servicesLabel={t.nav.services}
          />
        </div>
        <div className="cv-auto">
          <MethodologySection nestUnderParentH1 />
        </div>
        <div className="cv-auto premium-home-ivory section-padding">
          <FAQSection
            premium
            sectionId={HOME_FAQ_SECTION_ID}
            title={homeFaq.sectionTitle}
            items={homeFaq.items}
            className="py-4 bg-transparent"
          />
          <div className="container-wide mx-auto max-w-4xl pb-8 text-center text-sm font-light text-[#7A7267]">
            <Link to="/faq" className="font-medium text-[#C9A84C] underline-offset-4 hover:underline cursor-pointer">
              {homeFaq.ctaFullFaq}
            </Link>
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <Link to={contactHref} className="font-medium text-[#C9A84C] underline-offset-4 hover:underline cursor-pointer">
              {homeFaq.ctaProposal}
            </Link>
          </div>
        </div>
        <CTASection premium variant="research-proposal" />
        <div className="cv-auto">
          <ContactSection embedOnHomePage />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
