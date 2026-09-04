import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from 'react';
import { RouteLoadingFallback } from '@/components/RouteLoadingFallback';
import { useRoutes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { LanguageProvider } from '@/contexts/LanguageContext';
import DocumentHead from '@/components/DocumentHead';
import ScrollToTop from '@/components/ScrollToTop';
import RouteNavigationPreloader from '@/components/RouteNavigationPreloader';
import GoogleTagManager from '@/components/GoogleTagManager';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import GA4EventTracker from '@/components/GA4EventTracker';
import LocalePrompt from '@/components/LocalePrompt';
import CookieConsent from '@/components/CookieConsent';
import StickyCTA from '@/components/StickyCTA';
import WhatsAppProposalWidget from '@/components/WhatsAppProposalWidget';
import { routes } from '@/routes';
import { InitialDataProvider } from '@/contexts/InitialDataContext';

const LazyStatsigInit = lazy(() =>
  import('@/components/StatsigInit').catch(() => ({ default: () => null }))
);
const LazyVercelAnalytics = lazy(() =>
  import('@vercel/analytics/react')
    .then((m) => ({ default: m.Analytics ?? (() => null) }))
    .catch(() => ({ default: () => null }))
);

const queryClient = new QueryClient();

class SilentBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

function useDeferredMount(delayMs: number) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => setReady(true);
    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(start, { timeout: delayMs });
      return () => window.cancelIdleCallback(idleId);
    }
    const id = window.setTimeout(start, delayMs);
    return () => window.clearTimeout(id);
  }, [delayMs]);

  return ready;
}

function DeferredAnalytics() {
  const ready = useDeferredMount(3000);
  if (!ready) return null;

  return (
    <SilentBoundary>
      <GoogleTagManager />
      <GoogleAnalytics />
      <GA4EventTracker />
      <Suspense fallback={null}>
        <LazyStatsigInit />
        <LazyVercelAnalytics />
      </Suspense>
    </SilentBoundary>
  );
}

/** FAB / sticky bar / cookie banner are not LCP. Mount after first paint. */
function DeferredPageChrome() {
  const ready = useDeferredMount(2500);
  if (!ready) return null;

  return (
    <>
      <StickyCTA />
      <WhatsAppProposalWidget />
      <CookieConsent />
    </>
  );
}

/** Skeleton only after hydration — a first-load fallback discards SSR HTML. */
function ClientNavSuspense({ children }: { children: ReactNode }) {
  const [allowFallback, setAllowFallback] = useState(false);

  useEffect(() => {
    setAllowFallback(true);
  }, []);

  return (
    <Suspense fallback={allowFallback ? <RouteLoadingFallback /> : null}>{children}</Suspense>
  );
}

function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <RouteNavigationPreloader />
      <LanguageProvider>
        <DocumentHead />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
          <LocalePrompt />
          <DeferredPageChrome />
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
    <InitialDataProvider value={initialData}>
      <AppProviders>
        <ClientNavSuspense>{element}</ClientNavSuspense>
      </AppProviders>
    </InitialDataProvider>
  );
}
