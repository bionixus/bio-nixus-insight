import { Component, lazy, Suspense, createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useRoutes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { LanguageProvider } from '@/contexts/LanguageContext';
import DocumentHead from '@/components/DocumentHead';
import ScrollToTop from '@/components/ScrollToTop';
import GoogleTagManager from '@/components/GoogleTagManager';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import LocalePrompt from '@/components/LocalePrompt';
import CookieConsent from '@/components/CookieConsent';
import { routes } from '@/routes';

const LazyStatsigInit = lazy(() =>
  import('@/components/StatsigInit').catch(() => ({ default: () => null }))
);
const LazyVercelAnalytics = lazy(() =>
  import('@vercel/analytics/react')
    .then((m) => ({ default: m.Analytics ?? (() => null) }))
    .catch(() => ({ default: () => null }))
);

const queryClient = new QueryClient();

interface InitialDataContextType {
  data: Record<string, unknown>;
}

const InitialDataContext = createContext<InitialDataContextType>({ data: {} });

export function useInitialData() {
  return useContext(InitialDataContext);
}

class SilentBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

function DeferredAnalytics() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 3000);
    return () => clearTimeout(id);
  }, []);

  if (!ready) return null;

  return (
    <SilentBoundary>
      <Suspense fallback={null}>
        <LazyStatsigInit />
        <LazyVercelAnalytics />
      </Suspense>
    </SilentBoundary>
  );
}

function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <LanguageProvider>
        <GoogleTagManager />
        <DocumentHead />
        <GoogleAnalytics />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
          <LocalePrompt />
          <CookieConsent />
          <DeferredAnalytics />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

interface AppProps {
  initialData?: Record<string, unknown>;
}

export default function App({ initialData = {} }: AppProps) {
  const element = useRoutes(routes);
  return (
    <InitialDataContext.Provider value={{ data: initialData }}>
      <AppProviders>{element}</AppProviders>
    </InitialDataContext.Provider>
  );
}
