import { createContext, useContext, useMemo, type ReactNode } from 'react';

interface InitialDataContextType {
  data: Record<string, unknown>;
}

const InitialDataContext = createContext<InitialDataContextType>({ data: {} });

function readWindowInitialData(): Record<string, unknown> | null {
  if (typeof window === 'undefined') return null;
  const data = (window as Window & { __INITIAL_DATA__?: Record<string, unknown> }).__INITIAL_DATA__;
  if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
  return data;
}

export function useInitialData() {
  const context = useContext(InitialDataContext);
  const fromWindow = readWindowInitialData();
  // Same Suspense hydration replay that drops LanguageContext also drops this
  // provider. An empty default makes blog/home render a loading skeleton over
  // the server HTML and hydration throws. The inline script is the SSR payload.
  return useMemo(() => {
    if (Object.keys(context.data).length === 0 && fromWindow && Object.keys(fromWindow).length > 0) {
      return { data: fromWindow };
    }
    return context;
  }, [context, fromWindow]);
}

export function InitialDataProvider({
  value,
  children,
}: {
  value: Record<string, unknown>;
  children: ReactNode;
}) {
  return (
    <InitialDataContext.Provider value={{ data: value }}>{children}</InitialDataContext.Provider>
  );
}
