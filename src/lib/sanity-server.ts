import { createClient } from '@sanity/client'

export const sanityServer = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: false, // Server-side should not use CDN
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // Write token for updating stats
})
