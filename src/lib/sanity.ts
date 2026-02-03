/**
 * Sanity client for BLOG (project h2whvvpo).
 * Set VITE_SANITY_PROJECT_ID / VITE_SANITY_DATASET in .env or uses fallbacks.
 */

import { createClient, type SanityClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'h2whvvpo';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const token = import.meta.env.VITE_SANITY_API_TOKEN;
const apiVersion = '2024-01-01';

export const sanityConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
};

export function getSanityClient(): SanityClient {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    ...(token && { token }),
  });

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Use API (not CDN) to avoid CORS issues with apicdn.sanity.io
    ...(token && { token }),
  });
}

export function isSanityConfigured(): boolean {
  return true;
}
