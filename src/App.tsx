import { lazy, Suspense, createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useRoutes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LanguageProvider } from '@/contexts/LanguageContext';
import DocumentHead from '@/components/DocumentHead';
import SyncLanguageFromPath from '@/components/SyncLanguageFromPath';
import ScrollToTop from '@/components/ScrollToTop';
import { routes } from '@/routes';

const Toaster = lazy(() => import('@/components/ui/toaster').then((m) => ({ default: m.Toaster })));
const Sonner = lazy(() => import('@/components/ui/sonner').then((m) => ({ default: m.Toaster })));
const LocalePrompt = lazy(() => import('@/components/LocalePrompt'));
const CookieConsent = lazy(() => import('@/components/CookieConsent'));
const LazyStatsigInit = lazy(() => import('@/components/StatsigInit'));
const LazyVercelAnalytics = lazy(() => import('@vercel/analytics/react').then((m) => ({ default: m.Analytics })));

const queryClient = new QueryClient();

interface InitialDataContextType {
  data: Record<string, unknown>;
}

const InitialDataContext = createContext<InitialDataContextType>({ data: {} });

export function useInitialData() {
  return useContext(InitialDataContext);
}

function DeferredAnalytics() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 3000);
    return () => clearTimeout(id);
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <LazyStatsigInit />
      <LazyVercelAnalytics />
    </Suspense>
  );
}

function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <LanguageProvider>
        <SyncLanguageFromPath />
        <DocumentHead />
        <TooltipProvider>
          <Suspense fallback={null}>
            <Toaster />
            <Sonner />
          </Suspense>
          {children}
          <Suspense fallback={null}>
            <LocalePrompt />
            <CookieConsent />
          </Suspense>
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
