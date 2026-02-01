import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import DocumentHead from "@/components/DocumentHead";
import LocalePrompt from "@/components/LocalePrompt";
import CookieConsent from "@/components/CookieConsent";
import SyncLanguageFromPath from "@/components/SyncLanguageFromPath";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
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
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/privacy" element={<Privacy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <LocalePrompt />
          <CookieConsent />
        </TooltipProvider>
      </LanguageProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
