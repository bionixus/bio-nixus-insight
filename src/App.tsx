import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { StatsigProvider } from "@/components/StatsigProvider";
import DocumentHead from "@/components/DocumentHead";
import LocalePrompt from "@/components/LocalePrompt";
import CookieConsent from "@/components/CookieConsent";
import SyncLanguageFromPath from "@/components/SyncLanguageFromPath";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Methodology from "./pages/Methodology";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <StatsigProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <LanguageProvider>
            <SyncLanguageFromPath />
            <DocumentHead />
            <TooltipProvider>
              <Toaster />
              <Sonner />
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
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <LocalePrompt />
              <CookieConsent />
              <Analytics />
            </TooltipProvider>
          </LanguageProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </StatsigProvider>
  </HelmetProvider>
);

export default App;
