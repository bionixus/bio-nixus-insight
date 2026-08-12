// Vite config
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/**
 * Client builds use React.lazy route barrels; SSR builds/dev resolve to eager
 * `.ssr.ts` twins so renderToString never ships Suspense fallbacks.
 */
function ssrRouteSplitPlugin(isSsrBuild: boolean | undefined): Plugin {
  const reportClient = path.resolve(__dirname, "src/routes/lazyReportPages.ts");
  const reportSsr = path.resolve(__dirname, "src/routes/lazyReportPages.ssr.ts");
  const marketingClient = path.resolve(__dirname, "src/routes/lazyMarketingPages.ts");
  const marketingSsr = path.resolve(__dirname, "src/routes/lazyMarketingPages.ssr.ts");

  const matchBarrel = (source: string, name: "lazyReportPages" | "lazyMarketingPages") => {
    const normalized = source.replace(/\\/g, "/");
    if (normalized.includes(`${name}.ssr`)) return false;
    return (
      normalized === `@/routes/${name}` ||
      normalized.endsWith(`/routes/${name}`) ||
      normalized.endsWith(`/routes/${name}.ts`)
    );
  };

  return {
    name: "ssr-route-split",
    enforce: "pre",
    resolveId(source, _importer, options) {
      const useSsr = Boolean(options?.ssr) || Boolean(isSsrBuild);
      if (!useSsr) return null;
      if (matchBarrel(source, "lazyReportPages")) return reportSsr;
      if (matchBarrel(source, "lazyMarketingPages")) return marketingSsr;
      // After @ alias resolves to absolute client path during SSR
      if (source === reportClient) return reportSsr;
      if (source === marketingClient) return marketingSsr;
      return null;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  root: __dirname,
  envDir: __dirname,
  server: {
    host: "localhost",
    port: 8082,
    strictPort: false,
    hmr: {
      overlay: true,
    },
  },
  plugins: [
    ssrRouteSplitPlugin(isSsrBuild),
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    modulePreload: {
      // Do not sitewide-preload below-fold vendors (recharts, etc.) — they steal
      // bandwidth from LCP on report/marketing pages that only need the H1 + CSS.
      resolveDependencies: (_filename, deps) =>
        deps.filter(
          (dep) =>
            !/(?:^|\/)charts-[^/]+\.js$/.test(dep) &&
            !/(?:^|\/)statsig-[^/]+\.js$/.test(dep) &&
            !/(?:^|\/)sanitize-html-[^/]+\.js$/.test(dep) &&
            !/(?:^|\/)toast-[^/]+\.js$/.test(dep) &&
            !/(?:^|\/)sanity-[^/]+\.js$/.test(dep),
        ),
    },
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            entryFileNames: 'assets/index.js',
            manualChunks: {
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              'ui-vendor': [
                '@radix-ui/react-dialog',
                '@radix-ui/react-dropdown-menu',
                '@radix-ui/react-tabs',
                '@radix-ui/react-accordion',
                '@radix-ui/react-tooltip',
                '@radix-ui/react-select',
              ],
              sanity: ['@sanity/client', '@sanity/image-url', '@portabletext/react'],
              charts: ['recharts'],
              query: ['@tanstack/react-query'],
              'sanitize-html': ['sanitize-html'],
              icons: ['lucide-react'],
              helmet: ['react-helmet-async'],
              statsig: [
                '@statsig/js-client',
                '@statsig/react-bindings',
                '@statsig/web-analytics',
                '@statsig/session-replay',
              ],
              toast: ['sonner', 'next-themes'],
            },
          },
        },
  },
  ssr: {
    external: ['express'],
    noExternal: ['react-helmet-async'],
  },
}));
