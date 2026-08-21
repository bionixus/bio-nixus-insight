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
import { getLocalizedPathForLanguage, localizedContactPath, seoByLanguage } from '@/lib/seo';
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
  const exploreColumns = [
    {
      heading: explore.startHere,
      links: [
        { to: getLocalizedPathForLanguage('/healthcare-market-research', language), label: explore.hub },
        { to: '/iqvia-alternative', label: explore.iqvia },
        { to: '/healthcare-market-statistics', label: explore.statistics },
        { to: '/faq', label: explore.faq },
      ],
    },
    {
      heading: explore.featuredReports,
      links: [
        { to: '/saudi-arabia-healthcare-market-report', label: explore.saudiReport },
        { to: '/uae-healthcare-market-report', label: explore.uaeReport },
        { to: '/usa-healthcare-market-report', label: explore.usaReport },
      ],
    },
    {
      heading: explore.byCountry,
      links: [
        { to: '/healthcare-market-research/united-states', label: explore.countryUsa },
        { to: '/healthcare-market-research/saudi-arabia', label: explore.countrySaudi },
        { to: '/healthcare-market-research/uae', label: explore.countryUae },
        { to: '/healthcare-market-research/turkey', label: explore.countryTurkey },
        { to: '/healthcare-market-research/egypt', label: explore.countryEgypt },
      ],
    },
  ];

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
        <HomeOverviewVideoSection />
        <HomeExplainerSection />
        <StatsSection />
        <IndustriesGatewaySection />
        <div className="cv-auto">
          <BlogSection
            posts={homeArticlePosts ?? undefined}
            isLoading={blogLoading && !ssrHomeInsights?.length}
          />
        </div>
        <ClientReviewsTeaser />
        <TestimonialsSection />
        <div className="cv-auto">
          <HomePathwaysSection cards={featuredCards} />
        </div>
        <section className="section-padding bg-cream-dark border-t border-border" aria-labelledby="home-explore-research-heading">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 id="home-explore-research-heading" className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              {explore.heading}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {exploreColumns.map((column) => (
                <div key={column.heading}>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    {column.heading}
                  </h3>
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <li key={link.to}>
                        <Link to={link.to} className="text-primary hover:underline font-medium">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
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
            <Link to="/faq" className="text-primary font-medium hover:underline cursor-pointer">
              {homeFaq.ctaFullFaq}
            </Link>
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <Link to={contactHref} className="text-primary font-medium hover:underline cursor-pointer">
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
    </div>
  );
};

export default Index;
