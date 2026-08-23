#!/usr/bin/env node
/**
 * Desktop CWV + content audit for the top-20 impression pages (Workstream 6).
 *
 * Desktop is 86% of impressions at 3x worse average position than mobile, so this audit
 * verifies the two things that gate desktop rankings:
 *   1. SSR parity — the full page text must be present in the raw HTML (AGENTS.md rule 0/3);
 *   2. Desktop performance/content signals — page weight, render-blocking scripts,
 *      images without dimensions (CLS risk), heading structure, title/meta/canonical/JSON-LD.
 *
 * Lab CWV metrics (LCP/CLS/INP) are pulled from the PageSpeed Insights API when
 * PSI_API_KEY is set in the environment; otherwise the static checks still run.
 *
 * Usage:
 *   node scripts/desktop-cwv-audit.mjs                    # audits https://www.bionixus.com
 *   BASE_URL=http://localhost:8080 node scripts/desktop-cwv-audit.mjs   # audits a local build
 *
 * Output: console summary + reports/desktop-audit-<date>.md
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const PAGES_CSV = path.join(root, 'data', 'gsc', 'current-week', 'Pages.csv');
const REPORTS_DIR = path.join(root, 'reports');
const BASE_URL = process.env.BASE_URL || 'https://www.bionixus.com';
const PSI_API_KEY = process.env.PSI_API_KEY || '';
const TOP_N = 20;
const DESKTOP_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

// Performance budget (AGENTS.md rule 5): LCP < 2.5s, CLS < 0.1, INP < 200ms.
const BUDGET = { lcpMs: 2500, cls: 0.1, inpMs: 200, htmlKb: 350 };

function topPagesByImpressions() {
  if (!fs.existsSync(PAGES_CSV)) {
    console.error(`Missing ${PAGES_CSV} — export the GSC Pages report first.`);
    process.exit(1);
  }
  const lines = fs.readFileSync(PAGES_CSV, 'utf8').trim().split(/\r?\n/).slice(1);
  return lines
    .map((line) => {
      const [url, clicks, impressions, , position] = line.split(',');
      if (!url || !url.startsWith('http')) return null;
      return {
        path: new URL(url).pathname,
        impressions: Number(impressions) || 0,
        clicks: Number(clicks) || 0,
        position: Number(position) || 0,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, TOP_N);
}

function extract(html, re) {
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

function auditHtml(html) {
  const title = extract(html, /<title[^>]*>([^<]*)<\/title>/i);
  // Attribute order varies (react-helmet injects data-rh) — match order-agnostically.
  const metaDescTag = (html.match(/<meta\b[^>]*name="description"[^>]*>/i) || [null])[0];
  const metaDesc = metaDescTag ? extract(metaDescTag, /content="([^"]*)"/i) : null;
  const canonicalTag = (html.match(/<link\b[^>]*rel="canonical"[^>]*>/i) || [null])[0];
  const canonical = canonicalTag ? extract(canonicalTag, /href="([^"]*)"/i) : null;
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  const jsonLdCount = (html.match(/application\/ld\+json/g) || []).length;
  // Visible text volume in raw HTML as an SSR-parity proxy.
  const textOnly = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');
  const visibleTextKb = Math.round(textOnly.length / 102.4) / 10;
  const imgs = html.match(/<img\b[^>]*>/gi) || [];
  const imgsMissingDims = imgs.filter((t) => !(/\bwidth=/.test(t) && /\bheight=/.test(t))).length;
  const imgsMissingAlt = imgs.filter((t) => !/\balt=/.test(t)).length;
  // Module scripts are deferred by default; JSON/LD+JSON are not executable.
  const blockingScripts = (
    html.match(/<script\b(?![^>]*\b(?:async\b|defer\b|type="module"|type="application\/(?:ld\+)?json"))[^>]*src=/gi) || []
  ).length;
  return {
    title,
    titleLen: title ? title.length : 0,
    metaDescLen: metaDesc ? metaDesc.length : 0,
    canonical: Boolean(canonical),
    h1Count,
    jsonLdCount,
    visibleTextKb,
    imgCount: imgs.length,
    imgsMissingDims,
    imgsMissingAlt,
    blockingScripts,
    htmlKb: Math.round(html.length / 102.4) / 10,
  };
}

async function psiDesktop(url) {
  if (!PSI_API_KEY) return null;
  const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=desktop&category=performance&key=${PSI_API_KEY}`;
  try {
    const res = await fetch(api);
    if (!res.ok) return null;
    const json = await res.json();
    const audits = json.lighthouseResult?.audits || {};
    return {
      lcpMs: Math.round(audits['largest-contentful-paint']?.numericValue ?? -1),
      cls: Number((audits['cumulative-layout-shift']?.numericValue ?? -1).toFixed(3)),
      tbtMs: Math.round(audits['total-blocking-time']?.numericValue ?? -1),
      perfScore: Math.round((json.lighthouseResult?.categories?.performance?.score ?? 0) * 100),
    };
  } catch {
    return null;
  }
}

const pages = topPagesByImpressions();
const today = new Date().toISOString().slice(0, 10);
const rows = [];
console.log(`Auditing top ${pages.length} impression pages against ${BASE_URL} (desktop)…\n`);

for (const p of pages) {
  const url = `${BASE_URL}${p.path}`;
  let result = { path: p.path, impressions: p.impressions, position: p.position, error: null };
  try {
    const res = await fetch(url, { headers: { 'User-Agent': DESKTOP_UA }, redirect: 'follow' });
    const html = await res.text();
    result = { ...result, status: res.status, ...auditHtml(html) };
    const psi = await psiDesktop(url);
    if (psi) result.psi = psi;
  } catch (e) {
    result.error = e.message;
  }
  rows.push(result);
  const flag =
    result.error || result.status !== 200 || result.h1Count !== 1 || result.visibleTextKb < 3
      ? ' ⚠'
      : '';
  console.log(`${result.status || 'ERR'}  ${p.path}${flag}`);
}

const lines = [];
lines.push(`# Desktop CWV + content audit — ${today}`);
lines.push('');
lines.push(`Base: ${BASE_URL} · Top ${pages.length} pages by GSC impressions (desktop-weighted site).`);
lines.push(`Budget: LCP < ${BUDGET.lcpMs}ms, CLS < ${BUDGET.cls}, INP < ${BUDGET.inpMs}ms, HTML < ${BUDGET.htmlKb}KB.`);
if (!PSI_API_KEY) lines.push('PSI_API_KEY not set — lab CWV metrics skipped (static checks only).');
lines.push('');
lines.push('| Page | Impr | Pos | HTTP | Title len | Meta len | H1s | JSON-LD | SSR text KB | Imgs no-dims | No-alt | Blocking JS | HTML KB' + (PSI_API_KEY ? ' | LCP ms | CLS | Perf' : '') + ' |');
lines.push('|---|---|---|---|---|---|---|---|---|---|---|---|---' + (PSI_API_KEY ? '|---|---|---' : '') + '|');
for (const r of rows) {
  if (r.error) {
    lines.push(`| ${r.path} | ${r.impressions} | ${r.position.toFixed(1)} | ERROR: ${r.error} |`);
    continue;
  }
  const psiCols = PSI_API_KEY && r.psi ? ` ${r.psi.lcpMs} | ${r.psi.cls} | ${r.psi.perfScore} |` : PSI_API_KEY ? ' - | - | - |' : '';
  lines.push(
    `| ${r.path} | ${r.impressions} | ${r.position.toFixed(1)} | ${r.status} | ${r.titleLen} | ${r.metaDescLen} | ${r.h1Count} | ${r.jsonLdCount} | ${r.visibleTextKb} | ${r.imgsMissingDims}/${r.imgCount} | ${r.imgsMissingAlt} | ${r.blockingScripts} | ${r.htmlKb} |${psiCols}`,
  );
}
lines.push('');
lines.push('## Flags to fix');
const flags = [];
for (const r of rows) {
  if (r.error) { flags.push(`- ${r.path}: fetch failed (${r.error})`); continue; }
  if (r.status !== 200) flags.push(`- ${r.path}: HTTP ${r.status}`);
  if (r.h1Count !== 1) flags.push(`- ${r.path}: ${r.h1Count} H1 tags (must be exactly 1)`);
  if (r.titleLen < 30 || r.titleLen > 65) flags.push(`- ${r.path}: title length ${r.titleLen} (aim 50-60)`);
  if (r.metaDescLen < 70 || r.metaDescLen > 170) flags.push(`- ${r.path}: meta description length ${r.metaDescLen} (aim 150-160)`);
  if (!r.canonical) flags.push(`- ${r.path}: missing canonical`);
  if (r.jsonLdCount === 0) flags.push(`- ${r.path}: no JSON-LD structured data`);
  if (r.visibleTextKb < 3) flags.push(`- ${r.path}: only ${r.visibleTextKb}KB visible text in raw HTML — check SSR (PRIORITY ZERO)`);
  if (r.imgsMissingDims > 0) flags.push(`- ${r.path}: ${r.imgsMissingDims} images without width/height (CLS risk)`);
  if (r.imgsMissingAlt > 0) flags.push(`- ${r.path}: ${r.imgsMissingAlt} images without alt text`);
  if (r.blockingScripts > 0) flags.push(`- ${r.path}: ${r.blockingScripts} render-blocking scripts`);
  if (r.htmlKb > BUDGET.htmlKb) flags.push(`- ${r.path}: HTML ${r.htmlKb}KB exceeds ${BUDGET.htmlKb}KB budget`);
  if (r.psi) {
    if (r.psi.lcpMs > BUDGET.lcpMs) flags.push(`- ${r.path}: desktop LCP ${r.psi.lcpMs}ms > ${BUDGET.lcpMs}ms`);
    if (r.psi.cls > BUDGET.cls) flags.push(`- ${r.path}: CLS ${r.psi.cls} > ${BUDGET.cls}`);
  }
}
lines.push(flags.length ? flags.join('\n') : '- No flags — all pages within budget.');
lines.push('');

const report = lines.join('\n');
fs.mkdirSync(REPORTS_DIR, { recursive: true });
const outFile = path.join(REPORTS_DIR, `desktop-audit-${today}.md`);
fs.writeFileSync(outFile, report + '\n');
console.log(`\n${flags.length} flags. Saved: ${path.relative(root, outFile)}`);
