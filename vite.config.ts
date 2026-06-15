// Vite config
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
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
              // NOTE: three.js is intentionally NOT a manualChunk. It is only
              // reached via the dynamic import in ClientOnly3D, so leaving it as
              // an async-only chunk keeps it out of the entry's modulepreload set
              // — visitors who get the static hero poster never download it.
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
