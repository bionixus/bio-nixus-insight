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
    cssCodeSplit: true,
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            entryFileNames: 'assets/index.js',
            chunkFileNames: 'assets/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash][extname]',
            manualChunks(id) {
              if (id.includes('node_modules')) {
                if (id.includes('react-dom/server')) return 'react-vendor';
                if (
                  id.includes('react-router-dom') ||
                  id.includes('react-dom') ||
                  id.includes('/react/') ||
                  id.includes('node_modules/react/')
                )
                  return 'react-vendor';
                if (id.includes('@radix-ui')) return 'ui-vendor';
                if (
                  id.includes('@sanity/client') ||
                  id.includes('@sanity/image-url') ||
                  id.includes('@portabletext/react')
                )
                  return 'sanity';
                if (id.includes('recharts') || id.includes('d3-')) return 'charts';
                if (id.includes('@tanstack/react-query')) return 'query';
                if (id.includes('sanitize-html')) return 'sanitize-html';
                if (id.includes('lucide-react')) return 'icons';
                if (id.includes('react-helmet-async')) return 'helmet';
                if (id.includes('@statsig')) return 'statsig';
                if (id.includes('sonner') || id.includes('next-themes')) return 'toast';
                if (id.includes('framer-motion') || id.includes('motion/')) return 'motion';
                return 'vendor';
              }
              if (id.includes('/src/pages/healthcare-research/')) return 'page-healthcare';
              if (id.includes('/src/pages/admin')) return 'page-admin';
              if (id.includes('/src/pages/BlogPost') || id.includes('/src/pages/Blog.tsx'))
                return 'page-blog';
              if (id.match(/\/src\/pages\/[A-Za-z]+PharmaCompanies/)) return 'page-pharma-companies';
              if (id.match(/\/src\/pages\/MarketResearch(Uae|Ksa|Saudi|Kuwait|Egypt)/))
                return 'page-market-research-countries';
            },
          },
        },
  },
  ssr: {
    external: ['express'],
    noExternal: ['react-helmet-async'],
  },
}));
