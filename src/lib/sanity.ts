/**
 * Sanity client for BLOG.
 * Requires .env: VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET (optional: VITE_SANITY_API_TOKEN).
 * Restart dev server after changing .env.
 */

import { createClient, type SanityClient } from '@sanity/client';

const projectId = (import.meta.env.VITE_SANITY_PROJECT_ID ?? '').trim() || 'h2whvvpo';
const dataset = (import.meta.env.VITE_SANITY_DATASET ?? '').trim() || 'production';
const token = (import.meta.env.VITE_SANITY_API_TOKEN ?? '').trim() || undefined;
const apiVersion = '2024-01-01';

export const sanityConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
};

let client: SanityClient | null = null;

export function getSanityClient(): SanityClient {
  if (!client) {
    client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: !token,
      ...(token ? { token } : {}),
    });
  }
  return client;
}

/** Clear cached client so next getSanityClient() creates a new one. Call after .env or config change, then restart dev server for env changes to apply. */
export function disconnectSanity(): void {
  client = null;
}

/** True when project ID and dataset are set (from .env or defaults). */
export function isSanityConfigured(): boolean {
  return Boolean(projectId && dataset);
}
