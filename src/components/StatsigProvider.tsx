import React, { useMemo } from "react";
import {
  StatsigProvider as StatsigProviderBase,
  useClientAsyncInit,
} from "@statsig/react-bindings";
import { StatsigAutoCapturePlugin } from "@statsig/web-analytics";
import { StatsigSessionReplayPlugin } from "@statsig/session-replay";

function getOrCreateAnonymousId(): string {
  if (typeof window === "undefined") return "anonymous";
  try {
    let id = localStorage.getItem("statsig_anonymous_id");
    if (!id) {
      id = `anon_${crypto.randomUUID()}`;
      localStorage.setItem("statsig_anonymous_id", id);
    }
    return id;
  } catch {
    return "anonymous";
  }
}

export function StatsigProvider({ children }: { children: React.ReactNode }) {
  const sdkKey = import.meta.env.VITE_STATSIG_CLIENT_KEY;

  const plugins = useMemo(
    () => [new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin()],
    []
  );

  const { client } = useClientAsyncInit(
    sdkKey ?? "",
    { userID: getOrCreateAnonymousId() },
    { plugins }
  );

  if (!sdkKey) {
    console.warn("[Statsig] VITE_STATSIG_CLIENT_KEY not set. Feature flags disabled.");
    return <>{children}</>;
  }

  return (
    <StatsigProviderBase
      client={client}
      loadingComponent={<div>Loading...</div>}
    >
      {children}
    </StatsigProviderBase>
  );
}
