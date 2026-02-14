import { useEffect } from "react";

/**
 * Fire-and-forget Statsig initialization.
 * Loads the heavy session-replay + web-analytics plugins only after the page
 * has finished its first paint, keeping them out of the critical rendering path.
 */
export default function StatsigInit() {
  useEffect(() => {
    const sdkKey = import.meta.env.VITE_STATSIG_CLIENT_KEY;
    if (!sdkKey) return;

    (async () => {
      try {
        const [{ StatsigClient }, { StatsigAutoCapturePlugin }, { StatsigSessionReplayPlugin }] =
          await Promise.all([
            import("@statsig/js-client"),
            import("@statsig/web-analytics"),
            import("@statsig/session-replay"),
          ]);

        let userId = "anonymous";
        try {
          let id = localStorage.getItem("statsig_anonymous_id");
          if (!id) {
            id = `anon_${crypto.randomUUID()}`;
            localStorage.setItem("statsig_anonymous_id", id);
          }
          userId = id;
        } catch { /* ignore */ }

        const client = new StatsigClient(sdkKey, { userID: userId }, {
          plugins: [new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin()],
        });

        await client.initializeAsync();
      } catch (err) {
        console.warn("[Statsig] Failed to initialize:", err);
      }
    })();
  }, []);

  return null;
}
