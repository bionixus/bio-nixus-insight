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

// Lazy: non-critical UI loaded after first paint
const Toaster = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));
const Sonner = lazy(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })));
const LocalePrompt = lazy(() => import("@/components/LocalePrompt"));
const CookieConsent = lazy(() => import("@/components/CookieConsent"));

// Lazy: all other routes — loaded only when navigated to
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Resources = lazy(() => import("./pages/Resources"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Contact = lazy(() => import("./pages/Contact"));
const Methodology = lazy(() => import("./pages/Methodology"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy: admin routes (rarely visited by public)
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminImportSubscribers = lazy(() => import("./pages/AdminImportSubscribers"));
const AdminAnalytics = lazy(() => import("./pages/AdminAnalytics"));
const AdminCalendar = lazy(() => import("./pages/AdminCalendar"));
const AdminCalendarNew = lazy(() => import("./pages/AdminCalendarNew"));
const AdminSendNewsletter = lazy(() => import("./pages/AdminSendNewsletter"));

const queryClient = new QueryClient();

/**
 * Deferred wrapper: loads Statsig + Vercel Analytics after first paint.
 * These are analytics-only — they don't affect UI rendering.
 */
function DeferredAnalytics() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Wait until after first paint + idle time before loading heavy analytics
    const id = requestIdleCallback(() => setReady(true), { timeout: 4000 });
    return () => cancelIdleCallback(id);
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

const App = () => (
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

export default App;
