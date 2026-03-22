import { createContext, useContext, type ReactNode } from 'react';

interface InitialDataContextType {
  data: Record<string, unknown>;
}

const InitialDataContext = createContext<InitialDataContextType>({ data: {} });

export function useInitialData() {
  return useContext(InitialDataContext);
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
