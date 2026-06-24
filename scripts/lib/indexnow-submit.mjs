#!/usr/bin/env node
/**
 * Shared IndexNow submission (Bing, Yandex, etc.) — used by batch scripts and Sanity webhook.
 */
import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..', '..');

function loadEnv() {
  const envPath = join(root, '.env');
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
  }
}

loadEnv();

const INDEXNOW_MAX_URLS = 10_000;
const BATCH_SIZE = 100;

export function getIndexNowConfig() {
  const key = process.env.INDEXNOW_KEY;
  const baseUrl = process.env.INDEXNOW_BASE_URL || 'https://www.bionixus.com';
  const endpoint = process.env.INDEXNOW_ENDPOINT || 'https://api.indexnow.org/indexnow';
  if (!key) return null;
  return {
    key,
    baseUrl,
    host: new URL(baseUrl).hostname,
    keyLocation: `${baseUrl}/api/indexnow-key`,
    endpoint,
  };
}

/**
 * @param {string[]} urls Absolute URLs (max 10k per IndexNow spec)
 */
export async function submitToIndexNow(urls) {
  const config = getIndexNowConfig();
  if (!config) {
    return { ok: false, status: 500, error: 'INDEXNOW_KEY not configured' };
  }

  const unique = [...new Set(urls.map((u) => u.trim()).filter(Boolean))];
  if (unique.length === 0) {
    return { ok: false, status: 400, error: 'No URLs to submit' };
  }
  if (unique.length > INDEXNOW_MAX_URLS) {
    return { ok: false, status: 400, error: `Too many URLs (${unique.length} > ${INDEXNOW_MAX_URLS})` };
  }

  const results = [];
  for (let i = 0; i < unique.length; i += BATCH_SIZE) {
    const batch = unique.slice(i, i + BATCH_SIZE);
    const resp = await fetch(config.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: config.host,
        key: config.key,
        keyLocation: config.keyLocation,
        urlList: batch,
      }),
    });
    if (!resp.ok) {
      const text = await resp.text();
      return {
        ok: false,
        status: resp.status,
        error: text || 'IndexNow submission failed',
        submitted: results.reduce((n, r) => n + r.count, 0),
      };
    }
    results.push({ count: batch.length, status: resp.status });
  }

  return { ok: true, submitted: unique.length, batches: results.length };
}

export function parseSitemapLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}
