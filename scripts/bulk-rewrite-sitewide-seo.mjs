#!/usr/bin/env node
/**
 * Sitewide CTR meta rewrite for non-Sanity pages:
 * - src/lib/constants/countries.ts metaDescription
 * - src/data/topCompanies title + metaDescription files
 * - src/data/marketResearchCountryContent.ts title + description
 * - src/data/industryHubPages.ts / specialty / gcc segments
 * - src/pages TSX SEOHead title/description string literals
 * - public/markets HTML index pages
 *
 * Usage:
 *   node scripts/bulk-rewrite-sitewide-seo.mjs --dry-run
 *   node scripts/bulk-rewrite-sitewide-seo.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dryRun = process.argv.includes('--dry-run');

const DESC_MAX = 155;
const TITLE_MAX = 65;

function truncateAtWord(text, max) {
  const cleaned = String(text || '').trim();
  if (cleaned.length <= max) return cleaned;
  const slice = cleaned.slice(0, max);
  const lastSpace = slice.lastIndexOf(' ');
  return (lastSpace > Math.floor(max * 0.5) ? slice.slice(0, lastSpace) : slice)
    .trim()
    .replace(/[,:;–—-]+$/, '');
}

function withBrand(title) {
  let core = String(title || '')
    .replace(/\s*\|\s*BioNixus.*$/i, '')
    .replace(/\s*\|\s*BioNi\w*$/i, '')
    .trim();
  const brand = ' | BioNixus';
  const maxPrimary = TITLE_MAX - brand.length;
  if (core.length > maxPrimary && core.includes('|')) {
    const first = core.split('|')[0].trim();
    core = first.length <= maxPrimary ? first : truncateAtWord(first, maxPrimary);
  } else if (core.length > maxPrimary) {
    core = truncateAtWord(core, maxPrimary);
  }
  core = core.replace(/[&:–—,\-/]+$/g, '').trim();
  return `${core}${brand}`;
}

function ctrDescription(desc, { forceEnCta = true } = {}) {
  let d = String(desc || '').replace(/\s+/g, ' ').trim();
  if (!d) return d;
  // Strip trailing incomplete words often left by old .slice()
  d = d.replace(/\s+\w{1,3}$/, '').trim();
  const hasCta = /proposal|24 hours|read the guide|talk to|request|contact|angebot|عرض|proposta|propuesta/i.test(d);
  if (forceEnCta && !hasCta && /^[\x00-\x7F]*$/.test(d) && d.length <= DESC_MAX - 24) {
    d = `${d.replace(/[.!?]?$/, '')}. Proposal in 24 hours.`;
  }
  if (d.length > DESC_MAX) d = truncateAtWord(d, DESC_MAX);
  if (d.length >= 100 && !/[.!?]$/.test(d)) d = `${d}.`;
  return d;
}

function ctrListicleTitle(title) {
  let core = String(title || '')
    .replace(/\s*\|\s*BioNixus.*$/i, '')
    .replace(/^Best\s+/i, 'Top ')
    .replace(/\s*\(2026 Guide\)\s*/i, ' 2026')
    .replace(/\s*:\s*Landscape.*$/i, '')
    .replace(/\s+/g, ' ')
    .trim();
  return withBrand(core);
}

let filesChanged = 0;
let stringChanges = 0;

function writeIfChanged(filePath, next, before) {
  if (next === before) return false;
  filesChanged += 1;
  if (!dryRun) fs.writeFileSync(filePath, next);
  return true;
}

function rewriteQuotedField(content, field, transform) {
  const re = new RegExp(`(${field}\\s*:\\s*)(['"\`])([\\s\\S]*?)\\2`, 'g');
  return content.replace(re, (full, prefix, quote, value) => {
    // Only single-line-ish string values for safety (allow escaped quotes)
    if (value.includes('\n') && value.length > 400) return full;
    const next = transform(value);
    if (next === value) return full;
    stringChanges += 1;
    return `${prefix}${quote}${next}${quote}`;
  });
}

function rewriteJsxAttr(content, attr, transform) {
  // Only rewrite title/description attrs that sit inside SEOHead / Helmet / OpenGraphMeta.
  const tagRe = /<(SEOHead|Helmet|OpenGraphMeta)\b[\s\S]*?\/>|<(SEOHead|Helmet)\b[\s\S]*?<\/\2>/g;
  return content.replace(tagRe, (block) => {
    const re = new RegExp(`(${attr}=)(["'])([^"'\\n]{20,220})\\2`, 'g');
    return block.replace(re, (full, prefix, quote, value) => {
      if (!/(BioNixus|Market Research|Pharma|Healthcare|Guide|2026|Report|Insight)/i.test(value)) {
        return full;
      }
      const next = transform(value);
      if (next === value) return full;
      stringChanges += 1;
      return `${prefix}${quote}${next}${quote}`;
    });
  });
}

// --- countries.ts ---
{
  const file = path.join(root, 'src/lib/constants/countries.ts');
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  text = rewriteQuotedField(text, 'metaDescription', (v) => ctrDescription(v));
  text = rewriteQuotedField(text, 'metaTitle', (v) => withBrand(v));
  if (writeIfChanged(file, text, before)) console.log('updated countries.ts');
}

// --- topCompanies ---
{
  const dir = path.join(root, 'src/data/topCompanies');
  const walk = (d) => {
    for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, ent.name);
      if (ent.isDirectory()) walk(p);
      else if (ent.name.endsWith('.ts') && ent.name !== 'types.ts' && ent.name !== 'registry.ts') {
        let text = fs.readFileSync(p, 'utf8');
        const before = text;
        text = rewriteQuotedField(text, 'title', (v) => {
          if (!/Market Research|BioNixus|2026/i.test(v)) return v;
          return ctrListicleTitle(v);
        });
        text = rewriteQuotedField(text, 'metaDescription', (v) => ctrDescription(v));
        if (writeIfChanged(p, text, before)) console.log('updated', path.relative(root, p));
      }
    }
  };
  walk(dir);
}

// --- marketResearchCountryContent ---
{
  const file = path.join(root, 'src/data/marketResearchCountryContent.ts');
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  // Only rewrite top-level seo title/description near content keys — heuristic: lines with title: 'Market Research
  text = text.replace(/(^\s*title:\s*)'([^']+)'/gm, (full, prefix, value) => {
    if (!/^Market Research|^أبحاث/i.test(value) && !/BioNixus/i.test(value)) return full;
    const next = withBrand(value.replace(/\s*\|\s*Healthcare & Pharma Market Research/i, ' | Pharma & Healthcare').replace(/\s*\|\s*Pharma & Healthcare Intelligence/i, ' | Pharma & Healthcare').replace(/\s*\|\s*Healthcare & Pharma Services/i, ' | Pharma & Healthcare').replace(/\s*\|\s*Pharma & Healthcare Research/i, ' | Pharma & Healthcare').replace(/\s*\|\s*Healthcare & Pharma Research/i, ' | Pharma & Healthcare'));
    if (next === value || next === `${value}`) {
      const compact = withBrand(value);
      if (compact === value) return full;
      stringChanges += 1;
      return `${prefix}'${compact}'`;
    }
    stringChanges += 1;
    return `${prefix}'${next}'`;
  });
  text = text.replace(/(^\s*description:\s*)\n?\s*'([^']+)'/gm, (full, prefix, value) => {
    if (value.length < 60) return full;
    // skip service item descriptions inside nested objects by requiring market-research cues
    if (!/market research|pharma|SFDA|DHA|physician|payer|healthcare/i.test(value)) return full;
    const next = ctrDescription(value);
    if (next === value) return full;
    stringChanges += 1;
    return `${prefix}'${next}'`;
  });
  if (writeIfChanged(file, text, before)) console.log('updated marketResearchCountryContent.ts');
}

// --- industryHubPages / specialty / gcc segments ---
for (const rel of [
  'src/data/industryHubPages.ts',
  'src/data/specialtyMarketDemandContent.ts',
  'src/data/gccSegmentMarketContent.ts',
  'src/data/developedMarketMedtechPages.ts',
]) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) continue;
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  text = rewriteQuotedField(text, 'metaTitle', (v) => withBrand(v));
  text = rewriteQuotedField(text, 'metaDescription', (v) => ctrDescription(v));
  text = rewriteQuotedField(text, 'title', (v) => {
    if (!/Market Research|BioNixus|Report|2026/i.test(v)) return v;
    return withBrand(v);
  });
  text = rewriteQuotedField(text, 'description', (v) => {
    if (v.length < 80) return v;
    if (!/market|pharma|research|healthcare|medtech/i.test(v)) return v;
    return ctrDescription(v);
  });
  if (writeIfChanged(file, text, before)) console.log('updated', rel);
}

// --- page SEOHead / Helmet string attrs ---
{
  const pagesDir = path.join(root, 'src/pages');
  const walk = (d) => {
    for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, ent.name);
      if (ent.isDirectory()) {
        if (ent.name === 'about') {
          // about copy files handled separately below
        }
        walk(p);
      } else if (ent.name.endsWith('.tsx')) {
        let text = fs.readFileSync(p, 'utf8');
        const before = text;
        text = rewriteJsxAttr(text, 'title', (v) => {
          if (!/BioNixus|Market Research|Healthcare|Pharma|Report|2026/i.test(v)) return v;
          // Don't rewrite visible H1-like titles that aren't branded SEO (no BioNixus and short)
          if (!/BioNixus/i.test(v) && !/Market Research|Report 2026/i.test(v)) return v;
          return withBrand(v);
        });
        text = rewriteJsxAttr(text, 'description', (v) => {
          if (v.length < 70) return v;
          if (!/market|pharma|research|healthcare|BioNixus|physician|payer/i.test(v)) return v;
          return ctrDescription(v);
        });
        if (writeIfChanged(p, text, before)) console.log('updated', path.relative(root, p));
      }
    }
  };
  walk(pagesDir);
}

// --- about page copy seo ---
{
  const aboutDir = path.join(root, 'src/pages/about');
  if (fs.existsSync(aboutDir)) {
    for (const name of fs.readdirSync(aboutDir)) {
      if (!/^aboutPageCopy\./.test(name) || !name.endsWith('.ts')) continue;
      const p = path.join(aboutDir, name);
      let text = fs.readFileSync(p, 'utf8');
      const before = text;
      if (name === 'aboutPageCopy.en.ts') {
        text = text.replace(
          /seoTitle:\s*'[^']*'/,
          "seoTitle: 'About BioNixus | Global Pharma & Healthcare Market Research'",
        );
        text = text.replace(
          /seoDescription:\s*'[^']*'/,
          "seoDescription: 'Founded in London in 2012 — US HQ, Cairo regional office. Global pharma & healthcare market research across 38 countries. See how we work.'",
        );
      }
      text = rewriteQuotedField(text, 'seoTitle', (v) => withBrand(v));
      text = rewriteQuotedField(text, 'seoDescription', (v) => ctrDescription(v, { forceEnCta: false }));
      if (writeIfChanged(p, text, before)) console.log('updated', path.relative(root, p));
    }
  }
}

// --- public/markets static HTML ---
{
  const markets = path.join(root, 'public/markets');
  if (fs.existsSync(markets)) {
    const walk = (d) => {
      for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
        const p = path.join(d, ent.name);
        if (ent.isDirectory()) walk(p);
        else if (ent.name === 'index.html') {
          let text = fs.readFileSync(p, 'utf8');
          const before = text;
          text = text.replace(/<title>([^<]+)<\/title>/i, (_, title) => {
            const next = withBrand(title);
            if (next !== title) stringChanges += 1;
            return `<title>${next}</title>`;
          });
          text = text.replace(
            /<meta\s+name=["']description["']\s+content=["']([^"']+)["']\s*\/?>/i,
            (full, desc) => {
              const next = ctrDescription(desc);
              if (next === desc) return full;
              stringChanges += 1;
              return `<meta name="description" content="${next.replace(/"/g, '&quot;')}" />`;
            },
          );
          if (writeIfChanged(p, text, before)) console.log('updated', path.relative(root, p));
        }
      }
    };
    walk(markets);
  }
}

// --- HubPage / Services / FAQ defaults ---
{
  const hub = path.join(root, 'src/pages/healthcare-research/HubPage.tsx');
  if (fs.existsSync(hub)) {
    let text = fs.readFileSync(hub, 'utf8');
    const before = text;
    text = text.replace(
      /: 'Healthcare Market Research \| Global Pharma & MedTech \| BioNixus'/,
      ": 'Healthcare Market Research | Pharma & MedTech Global | BioNixus'",
    );
    text = text.replace(
      /: 'Healthcare market research for pharmaceutical and medtech teams — physician, payer, and hospital evidence across USA, Europe, GCC, MENA, and Asia-Pacific \(excluding India-only programmes\)\. US HQ, 20\+ country hubs\.'/,
      ": 'Physician, payer & hospital evidence for pharma & medtech — launch & access across USA, Europe, GCC & MENA. Proposal in 24 hours.'",
    );
    if (writeIfChanged(hub, text, before)) console.log('updated HubPage.tsx');
  }

  const services = path.join(root, 'src/pages/Services.tsx');
  if (fs.existsSync(services)) {
    let text = fs.readFileSync(services, 'utf8');
    const before = text;
    text = text.replace(
      /'Global Market Research Services \| Pharma, Healthcare & Commercial \| BioNixus'/,
      "'Market Research Services | Pharma, Healthcare & B2B | BioNixus'",
    );
    text = text.replace(
      /'BioNixus market research across 38 countries — pharma modules, CATI, CAWI, CAPI, focus groups, mystery shopping, price elasticity, and B2B\/B2C programmes for financial services, retail, technology, and more\.'/,
      "'Pharma & B2B research across 38 countries: physician surveys, KOL mapping, market access & CATI/CAWI. Proposal in 24 hours.'",
    );
    if (writeIfChanged(services, text, before)) console.log('updated Services.tsx');
  }

  const faq = path.join(root, 'src/pages/FAQ.tsx');
  if (fs.existsSync(faq)) {
    let text = fs.readFileSync(faq, 'utf8');
    const before = text;
    text = text.replace(
      /<title>FAQ \| BioNixus Healthcare Market Research<\/title>/,
      '<title>FAQ | Healthcare & Pharma Market Research | BioNixus</title>',
    );
    text = text.replace(
      /content="Straight answers on BioNixus healthcare market research:[^"]+"/,
      'content="Answers on coverage, therapy areas, physician surveys, HTA support, Arabic–English fieldwork, GDPR, timelines & how to get a BioNixus research proposal."',
    );
    if (writeIfChanged(faq, text, before)) console.log('updated FAQ.tsx');
  }
}

console.log(`\n${dryRun ? 'DRY RUN' : 'APPLIED'}: filesChanged=${filesChanged} stringChanges=${stringChanges}`);
