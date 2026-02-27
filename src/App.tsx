import { lazy, Suspense, useEffect, useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import DocumentHead from "@/components/DocumentHead";
import SyncLanguageFromPath from "@/components/SyncLanguageFromPath";
import ScrollToTop from "@/components/ScrollToTop";

// Eager: homepage (above the fold, most visited)
import Index from "./pages/Index";

/**
 * Resilient lazy loader: retries the dynamic import once after a short delay,
 * then falls back to a full page reload. This prevents the
 * "'text/html' is not a valid JavaScript MIME type" crash that occurs
 * when Vercel serves index.html for a chunk that no longer exists after
 * a new deployment (stale browser cache referencing old hashed filenames).
 */
function lazyWithRetry<T extends React.ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>,
) {
  return lazy(() =>
    factory().catch(() =>
      // First retry after a brief pause (may just be a transient network hiccup)
      new Promise<{ default: T }>((resolve) => setTimeout(resolve, 1500)).then(() =>
        factory().catch(() => {
          // Chunk genuinely missing (new deployment) → hard-reload to get the latest HTML + chunks
          window.location.reload();
          // Return a never-resolving promise so React doesn't try to render stale content
          return new Promise<{ default: T }>(() => {});
        }),
      ),
    ),
  );
}

// Lazy: non-critical UI loaded after first paint
const Toaster = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));
const Sonner = lazy(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })));
const LocalePrompt = lazyWithRetry(() => import("@/components/LocalePrompt"));
const CookieConsent = lazyWithRetry(() => import("@/components/CookieConsent"));

// Lazy: all other routes — loaded only when navigated to
const Blog = lazyWithRetry(() => import("./pages/Blog"));
const BlogPost = lazyWithRetry(() => import("./pages/BlogPost"));
const CaseStudies = lazyWithRetry(() => import("./pages/CaseStudies"));
const CaseStudy = lazyWithRetry(() => import("./pages/CaseStudy"));
const About = lazyWithRetry(() => import("./pages/About"));
const Services = lazyWithRetry(() => import("./pages/Services"));
const FAQ = lazyWithRetry(() => import("./pages/FAQ"));
const Resources = lazyWithRetry(() => import("./pages/Resources"));
const SiteMapPage = lazyWithRetry(() => import("./pages/SiteMapPage"));
const ServiceDetail = lazyWithRetry(() => import("./pages/ServiceDetail"));
const Privacy = lazyWithRetry(() => import("./pages/Privacy"));
const Contact = lazyWithRetry(() => import("./pages/Contact"));
const Methodology = lazyWithRetry(() => import("./pages/Methodology"));
const VerifyEmail = lazyWithRetry(() => import("./pages/VerifyEmail"));
const MenaMarketData = lazyWithRetry(() => import("./pages/MenaMarketData"));
const GccMarketAccessGuide = lazyWithRetry(() => import("./pages/GccMarketAccessGuide"));
const MarketResearch = lazyWithRetry(() => import("./pages/MarketResearch"));
const QuantitativeHealthcareMarketResearchGuide = lazyWithRetry(() => import("./pages/QuantitativeHealthcareMarketResearchGuide"));
const GlobalWebsites = lazyWithRetry(() => import("./pages/GlobalWebsites"));
const GlobalWebsiteCountry = lazyWithRetry(() => import("./pages/GlobalWebsiteCountry"));
const KuwaitPharmaCompanies = lazyWithRetry(() => import("./pages/KuwaitPharmaCompanies"));
const SaudiPharmaCompanies = lazyWithRetry(() => import("./pages/SaudiPharmaCompanies"));
const UaePharmaCompanies = lazyWithRetry(() => import("./pages/UaePharmaCompanies"));
const EgyptPharmaCompanies = lazyWithRetry(() => import("./pages/EgyptPharmaCompanies"));
const QatarPharmaCompanies = lazyWithRetry(() => import("./pages/QatarPharmaCompanies"));
const OmanPharmaCompanies = lazyWithRetry(() => import("./pages/OmanPharmaCompanies"));
const BahrainPharmaCompanies = lazyWithRetry(() => import("./pages/BahrainPharmaCompanies"));
const IraqPharmaCompanies = lazyWithRetry(() => import("./pages/IraqPharmaCompanies"));
const IranPharmaCompanies = lazyWithRetry(() => import("./pages/IranPharmaCompanies"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));

// Lazy: admin routes (rarely visited by public)
const AdminDashboard = lazyWithRetry(() => import("./pages/AdminDashboard"));
const AdminLogin = lazyWithRetry(() => import("./pages/AdminLogin"));
const AdminImportSubscribers = lazyWithRetry(() => import("./pages/AdminImportSubscribers"));
const AdminAnalytics = lazyWithRetry(() => import("./pages/AdminAnalytics"));
const AdminCalendar = lazyWithRetry(() => import("./pages/AdminCalendar"));
const AdminCalendarNew = lazyWithRetry(() => import("./pages/AdminCalendarNew"));
const AdminSendNewsletter = lazyWithRetry(() => import("./pages/AdminSendNewsletter"));

const queryClient = new QueryClient();

/**
 * Deferred wrapper: loads Statsig + Vercel Analytics after first paint.
 * These are analytics-only — they don't affect UI rendering.
 */
function DeferredAnalytics() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Wait until after first paint + idle time before loading heavy analytics
    // requestIdleCallback is not available on older iOS Safari (<16.4), fall back to setTimeout
    if (typeof requestIdleCallback === 'function') {
      const id = requestIdleCallback(() => setReady(true), { timeout: 4000 });
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(() => setReady(true), 3000);
      return () => clearTimeout(id);
    }
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <LazyStatsigInit />
      <LazyVercelAnalytics />
    </Suspense>
  );
}

const LazyStatsigInit = lazy(() => import("@/components/StatsigInit"));
const LazyVercelAnalytics = lazy(() => import("@vercel/analytics/react").then(m => ({ default: m.Analytics })));

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <LanguageProvider>
            <SyncLanguageFromPath />
            <DocumentHead />
            <TooltipProvider>
              <Suspense fallback={null}>
                <Toaster />
                <Sonner />
              </Suspense>
              <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center', color: '#666', fontFamily: 'system-ui' }}>Loading...</div>}>
              <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/de" element={<Index />} />
              <Route path="/fr" element={<Index />} />
              <Route path="/es" element={<Index />} />
              <Route path="/zh" element={<Index />} />
              <Route path="/zh/about" element={<Index />} />
              <Route path="/zh/healthcare-market-research" element={<Index />} />
              <Route path="/zh/quantitative-research" element={<Index />} />
              <Route path="/zh/qualitative-research" element={<Index />} />
              <Route path="/zh/market-access" element={<Index />} />
              <Route path="/zh/clinical-trials" element={<Index />} />
              <Route path="/zh/contact" element={<Index />} />
              <Route path="/ar" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/sitemap" element={<SiteMapPage />} />
              <Route path="/mena-pharma-market-data" element={<MenaMarketData />} />
              <Route path="/gcc-market-access-guide" element={<GccMarketAccessGuide />} />
              <Route path="/market-research" element={<MarketResearch />} />
              <Route path="/quantitative-healthcare-market-research" element={<QuantitativeHealthcareMarketResearchGuide />} />
              <Route path="/global-websites" element={<GlobalWebsites />} />
              <Route path="/global-websites/:countrySlug" element={<GlobalWebsiteCountry />} />
              <Route path="/pharmaceutical-companies-kuwait" element={<KuwaitPharmaCompanies />} />
              <Route path="/pharmaceutical-companies-saudi-arabia" element={<SaudiPharmaCompanies />} />
              <Route path="/pharmaceutical-companies-uae" element={<UaePharmaCompanies />} />
              <Route path="/pharmaceutical-companies-egypt" element={<EgyptPharmaCompanies />} />
              <Route path="/pharmaceutical-companies-qatar" element={<QatarPharmaCompanies />} />
              <Route path="/pharmaceutical-companies-oman" element={<OmanPharmaCompanies />} />
              <Route path="/pharmaceutical-companies-bahrain" element={<BahrainPharmaCompanies />} />
              <Route path="/pharmaceutical-companies-iraq" element={<IraqPharmaCompanies />} />
              <Route path="/pharmaceutical-companies-iran" element={<IranPharmaCompanies />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudy />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/de/contact" element={<Contact />} />
              <Route path="/fr/contact" element={<Contact />} />
              <Route path="/es/contact" element={<Contact />} />
              <Route path="/zh/contact" element={<Contact />} />
              <Route path="/ar/contact" element={<Contact />} />
              <Route path="/methodology" element={<Methodology />} />
              <Route path="/de/methodology" element={<Methodology />} />
              <Route path="/fr/methodology" element={<Methodology />} />
              <Route path="/es/methodology" element={<Methodology />} />
              <Route path="/zh/methodology" element={<Methodology />} />
              <Route path="/ar/methodology" element={<Methodology />} />
              <Route path="/verify-email" element={<VerifyEmail />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/import-subscribers" element={<AdminImportSubscribers />} />
              <Route path="/admin/analytics" element={<AdminAnalytics />} />
              <Route path="/admin/calendar" element={<AdminCalendar />} />
              <Route path="/admin/calendar/new" element={<AdminCalendarNew />} />
              <Route path="/admin/send-newsletter" element={<AdminSendNewsletter />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
              </Routes>
              </Suspense>
              <Suspense fallback={null}>
                <LocalePrompt />
                <CookieConsent />
              </Suspense>
              <DeferredAnalytics />
            </TooltipProvider>
          </LanguageProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
