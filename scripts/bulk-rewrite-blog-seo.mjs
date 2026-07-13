#!/usr/bin/env node
/**
 * Bulk-rewrite Sanity blogPost seo.metaTitle / seo.metaDescription (+ OG mirrors)
 * for CTR: fix truncated "| BioNi" titles, word-boundary truncation, benefit-led descriptions.
 *
 * Usage:
 *   node scripts/bulk-rewrite-blog-seo.mjs --dry-run
 *   node scripts/bulk-rewrite-blog-seo.mjs
 *   node scripts/bulk-rewrite-blog-seo.mjs --write-local-json   # also update scripts/data/{slug}.json
 *   node scripts/bulk-rewrite-blog-seo.mjs --limit 10
 *
 * Requires .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 155;
const DESC_TARGET = 145;

/** Hand-crafted CTR titles/descriptions for high-traffic / GSC-sensitive slugs. */
const CTR_OVERRIDES = {
  'healthcare-overview-egypt-market-2026': {
    metaTitle: 'Cairo Hospitals Healthcare 2023–2026 | BioNixus',
    metaDescription:
      'Cairo hospitals healthcare 2023–2026: Kasr Al-Ainy, Cleopatra, Saudi German Cairo, EDA pharma access, UHI payer trends — BioNixus Egypt research.',
    focusKeyword: 'cairo hospitals healthcare 2026',
  },
  'healthcare-overview-kuwait-market-2026': {
    metaTitle: 'Kuwait Healthcare Market 2026 Overview | BioNixus',
    metaDescription:
      'Kuwait healthcare 2026: MOH hospitals, pharma distributors, tender policy & physician insight for Vision 2035. BioNixus market research guide.',
  },
  'pharmaceutical-market-entry-saudi-arabia-2026-guide': {
    metaTitle: 'Saudi Pharma Market Entry 2026 | BioNixus',
    metaDescription:
      'Saudi pharma market entry 2026: SFDA registration, Vision 2030 incentives & proven launch steps. Practical playbook from BioNixus research.',
  },
  'quantitative-market-research-and-market-access': {
    metaTitle: 'Quantitative Market Research & Market Access | BioNixus',
    metaDescription:
      'Quantitative healthcare market research for pharma market access — KPIs, payer evidence, MENA/GCC design & pricing scenarios. Read the guide.',
  },
  'gcc-pharmaceuticals-market-2026': {
    metaTitle: 'GCC Pharmaceuticals Market 2026 Guide | BioNixus',
    metaDescription:
      'GCC pharmaceuticals market 2026: size, growth drivers, specialty therapies & access strategy across KSA, UAE & Kuwait. BioNixus research.',
  },
  'saudi-arabia-healthcare-market-2026': {
    metaTitle: 'Saudi Arabia Healthcare Market 2026 | BioNixus',
    metaDescription:
      'Saudi healthcare market 2026: hospital data, NUPCO, SFDA & Vision 2030 for pharma and medtech teams. BioNixus market research overview.',
  },
  'uae-healthcare-market-overview-2026': {
    metaTitle: 'UAE Healthcare Market 2026 Overview | BioNixus',
    metaDescription:
      'UAE healthcare market 2026: hospital & pharma sales, DHA/MOHAP access & private vs public uptake. BioNixus research for launch teams.',
  },
  'gcc-pharmaceutical-market-comparison-uae-saudi-kuwait': {
    metaTitle: 'GCC Pharma: UAE vs Saudi vs Kuwait 2026 | BioNixus',
    metaDescription:
      'Compare UAE, Saudi Arabia & Kuwait pharma markets — size, growth, regulation & access. Data-led GCC comparison from BioNixus research.',
  },
  'top-healthcare-market-research-companies-2026': {
    metaTitle: 'Top Healthcare MR Companies 2026 | BioNixus',
    metaDescription:
      'Compare top healthcare market research companies for pharma & medtech: services, GCC/Europe fieldwork & payer intelligence. 2026 guide.',
  },
  'top-healthcare-market-research-companies-mena': {
    metaTitle: 'Top Healthcare MR Companies MENA 2026 | BioNixus',
    metaDescription:
      'Top healthcare market research companies in MENA 2026 — BioNixus, IQVIA, Ipsos compared for pharma depth & regional fieldwork.',
  },
  'top-healthcare-market-research-companies-uae': {
    metaTitle: 'Top Healthcare MR Companies UAE 2026 | BioNixus',
    metaDescription:
      'Top healthcare market research companies in the UAE 2026 — pharma depth, DHA/DOH awareness & Arabic fieldwork compared.',
  },
  'top-healthcare-market-research-firms-saudi-arabia': {
    metaTitle: 'Top Healthcare MR Firms Saudi Arabia | BioNixus',
    metaDescription:
      'Healthcare market research firms in Saudi Arabia: Vision 2030 context, selection criteria & trusted partners for pharma teams.',
  },
  'uae-healthcare-market-trends-2025': {
    metaTitle: 'UAE Healthcare Market Trends 2025 | BioNixus',
    metaDescription:
      'UAE healthcare trends: Dubai & Abu Dhabi pharma demand, MOHAP/DHA dynamics, payer signals & growth angles for pharma and medtech.',
  },
  'pharmacoeconomics-gcc-practical-guide': {
    metaTitle: 'Pharmacoeconomics in GCC Markets | BioNixus',
    metaDescription:
      'Pharmacoeconomics across UAE, Saudi Arabia & Kuwait: HTA frameworks, evidence needs & practical HEOR steps for pharma access teams.',
  },
  'hta-dossier-saudi-arabia-market-access': {
    metaTitle: 'HTA Dossiers Saudi Arabia | SFDA & NUPCO | BioNixus',
    metaDescription:
      'Submission-ready HTA dossiers for Saudi Arabia — epidemiology, economic evaluation & budget impact for SFDA and NUPCO pathways.',
  },
  'top-healthcare-market-research-firms-mena-europe': {
    metaTitle: 'Top Healthcare MR Firms MENA & Europe | BioNixus',
    metaDescription:
      'Compare top healthcare market research firms in MENA and Europe: BioNixus, IQVIA, Ipsos — services, payer intelligence & fieldwork.',
  },
  'mdf-wood-manufacturing-market-research-trackers-mea': {
    metaTitle: 'MDF & Wood Market Research Trackers | BioNixus',
    metaDescription:
      'MDF and wood-panel manufacturing market research trackers across the Middle East and Africa — pricing, demand and competitive signals.',
  },
  'gcc-clinical-trials-market-2026': {
    metaTitle: 'GCC Clinical Trials Market 2026 | BioNixus',
    metaDescription:
      'GCC clinical trials market 2026: regulatory landscape by country, key sites, therapy activity & recruitment for sponsors.',
  },
  'pharmaceutical-market-research-methods-mena': {
    metaTitle: 'Pharma Market Research Methods in MENA | BioNixus',
    metaDescription:
      'How pharmaceutical market research works in MENA — physician surveys, hospital data, KOL mapping & market access methods.',
  },
  'nupco-saudi-arabia-tendering-guide': {
    metaTitle: 'NUPCO Saudi Tendering Guide 2026 | BioNixus',
    metaDescription:
      'NUPCO pharmaceutical tendering and procurement in Saudi Arabia 2026 — what sponsors need for institutional market access.',
  },
  'abu-dhabi-doh-vs-dubai-dha-formulary-guide': {
    metaTitle: 'Abu Dhabi DOH vs Dubai DHA Formulary | BioNixus',
    metaDescription:
      '2026 formulary submission guide: how Abu Dhabi DOH and Dubai DHA pathways differ for UAE pharmaceutical market access.',
  },
  'european-hta-regulation-2026-pharmaceutical-market-access-guide': {
    metaTitle: 'European HTA Regulation 2026 Guide | BioNixus',
    metaDescription:
      'EU HTA Regulation 2026: joint clinical assessment timelines, evidence needs & market access steps for pharma. BioNixus practical guide.',
  },
  'real-world-evidence-fda-guide-pharmaceutical-2026': {
    metaTitle: 'FDA Real-World Evidence Guide 2026 | BioNixus',
    metaDescription:
      'FDA real-world evidence for pharma 2026: Cures Act framework, guidance landscape & how RWE supports access and medical decisions.',
  },
  'ai-drug-discovery-machine-learning-pharma-2026': {
    metaTitle: 'AI Drug Discovery in Pharma 2026 | BioNixus',
    metaDescription:
      'AI and machine learning in drug discovery 2026 — FDA momentum, R&D use cases, and what pharma teams should validate next.',
  },
  'ema-orphan-drug-designation-guide-europe-2026': {
    metaTitle: 'EMA Orphan Drug Designation 2026 | BioNixus',
    metaDescription:
      'EMA orphan drug designation 2026: faster decisions, evidence expectations, and market access implications for rare disease pharma.',
  },
};

function loadDotEnv() {
  for (const name of ['.env', '.env.local']) {
    const envPath = path.join(root, name);
    if (!fs.existsSync(envPath)) continue;
    for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
      const t = line.trim();
      if (!t || t.startsWith('#')) continue;
      const eq = t.indexOf('=');
      if (eq === -1) continue;
      const k = t.slice(0, eq).trim();
      let v = t.slice(eq + 1).trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1);
      }
      if (!process.env[k]) process.env[k] = v;
    }
  }
}

loadDotEnv();

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

function stripTags(input) {
  return String(input || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanBrandTail(title) {
  return String(title || '')
    .replace(/\s*\|\s*BioNi\w*$/i, '')
    .replace(/\s*\|\s*BioNixus(?:\s+Insight)?\s*$/i, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function truncateAtWord(text, max) {
  const cleaned = String(text || '').trim();
  if (cleaned.length <= max) return cleaned;
  const slice = cleaned.slice(0, max);
  const lastSpace = slice.lastIndexOf(' ');
  if (lastSpace > Math.floor(max * 0.5)) {
    return slice.slice(0, lastSpace).trim().replace(/[,:;–—-]+$/, '');
  }
  return slice.trim().replace(/[,:;–—-]+$/, '');
}

function isHealthyTitle(title) {
  const t = String(title || '').trim();
  if (!t.endsWith('| BioNixus')) return false;
  if (t.length > TITLE_MAX) return false;
  if (/\|\s*BioNi$|\|\s*BioNix$|\|\s*BioNixu$/i.test(t)) return false;
  const core = cleanBrandTail(t);
  if (!core) return false;
  if (/[&:–—,\-]$/.test(core)) return false;
  if (/\bBioNixus\b/i.test(core)) return false;
  return true;
}

function titleWithBrand(primary, max = TITLE_MAX, brand = 'BioNixus') {
  const suffix = ` | ${brand}`;
  const maxPrimary = max - suffix.length;
  let core = cleanBrandTail(primary).replace(/^BioNixus[:\s-]*/i, '').trim();
  if (!core) core = brand;
  if (core.length > maxPrimary) {
    const beforeColon = core.split(/[:：|]/)[0].trim();
    if (beforeColon.length >= 18 && beforeColon.length <= maxPrimary) {
      core = beforeColon;
    } else {
      core = truncateAtWord(core, maxPrimary);
    }
  }
  core = core.replace(/[&:–—,\-/]+$/g, '').trim();
  // Drop dangling English auxiliaries / prepositions after truncation
  core = core
    .replace(/\b(is|are|for|to|and|of|the|a|an|in|on|with|how|vs|versus)$/i, '')
    .trim();
  core = core.replace(/[&:–—,\-/]+$/g, '').trim();
  if (!core) core = brand;
  return `${core}${suffix}`;
}

function compressTitleCore(title, lang) {
  let core = cleanBrandTail(title).replace(/^BioNixus[:\s-]*/i, '').trim();
  if (lang !== 'en' && lang !== 'de' && lang) return core;

  if (lang === 'de') {
    return core
      .replace(/\s+im Überblick$/i, '')
      .replace(/^Überblick:\s*/i, '')
      .trim();
  }

  return core
    .replace(/^The (Complete|Definitive|Ultimate) Guide to\s+/i, '')
    .replace(/^Unlocking Growth:\s*/i, '')
    .replace(/^Strategy 2026:\s*/i, '')
    .replace(/^BioNixus FDA Alert:\s*/i, 'FDA Alert: ')
    .replace(/^Healthcare Overview:\s*(The\s+)?/i, '')
    .replace(/\s*[—–]\s*.*$/, '')
    .replace(/:\s*(A |The )?(Complete |Strategic |Practical |Comprehensive )?(Guide|Playbook|Overview).*$/i, '')
    .replace(/\s*\(2026 Guide\)\s*$/i, ' 2026')
    .replace(/\s*\(2026\)\s*$/i, ' 2026')
    .replace(/\s+/g, ' ')
    .trim();
}

function geoHintFromSlug(slug) {
  const s = String(slug || '').toLowerCase();
  if (s.includes('saudi') || s.includes('ksa')) return 'Saudi Arabia';
  if (s.includes('uae') || s.includes('dubai') || s.includes('abu-dhabi')) return 'UAE';
  if (s.includes('kuwait')) return 'Kuwait';
  if (s.includes('qatar')) return 'Qatar';
  if (s.includes('egypt')) return 'Egypt';
  if (s.includes('gcc') || s.includes('mena')) return 'GCC/MENA';
  if (s.includes('europe') || s.includes('ema') || s.includes('nice') || s.includes('hta')) return 'Europe';
  if (s.includes('usa') || s.includes('fda')) return 'USA';
  if (s.includes('china') || s.includes('nmpa')) return 'China';
  if (s.includes('brazil') || s.includes('brasil') || s.includes('anvisa')) return 'Brazil';
  if (s.includes('germany') || s.includes('deutschland') || s.includes('amnog')) return 'Germany';
  if (s.includes('france') || s.includes('has')) return 'France';
  if (s.includes('spain') || s.includes('espana')) return 'Spain';
  return '';
}

function buildCtrDescription(post, metaTitle) {
  const override = CTR_OVERRIDES[post.slug];
  if (override?.metaDescription) return clampDescription(override.metaDescription);

  const lang = post.language || 'en';
  let seed = stripTags(post.metaDescription || post.excerpt || '');
  // Drop truncated mid-word endings like "proven mar"
  seed = seed.replace(/\s+\w{1,3}$/, '').trim();

  if (!seed || seed.length < 40) {
    const topic = cleanBrandTail(metaTitle);
    const geo = geoHintFromSlug(post.slug);
    if (lang === 'en') {
      seed = geo
        ? `${topic}: practical pharmaceutical and healthcare market research insights for ${geo} teams.`
        : `${topic}: pharmaceutical and healthcare market research insights for launch and access teams.`;
    } else {
      seed = topic;
    }
  }

  // Soft CTR close for English when missing a clear cue and we have room
  const hasCue = /guide|read|proposal|contact|learn|discover|compare|overview|playbook|how to/i.test(seed);
  if (lang === 'en' && !hasCue && seed.length <= DESC_TARGET - 18) {
    seed = `${seed.replace(/[.!?]?$/, '')}. Read the guide.`;
  }

  return clampDescription(seed);
}

function clampDescription(text) {
  let out = stripTags(text).replace(/\s+/g, ' ').trim();
  if (out.length > DESC_MAX) out = truncateAtWord(out, DESC_MAX);
  // Prefer ending punctuation for SERP polish
  if (out.length >= DESC_MIN && !/[.!?…]$/.test(out)) {
    if (out.length < DESC_MAX) out = `${out}.`;
  }
  if (out.length < DESC_MIN) {
    const pad = ' BioNixus pharmaceutical and healthcare market research.';
    out = truncateAtWord(`${out}${pad}`, DESC_MAX);
  }
  if (out.length > DESC_MAX) out = truncateAtWord(out, DESC_MAX);
  return out;
}

function buildSeoForPost(post) {
  const override = CTR_OVERRIDES[post.slug];
  const lang = post.language || 'en';

  let metaTitle;
  if (override?.metaTitle) {
    metaTitle = override.metaTitle;
  } else if (isHealthyTitle(post.metaTitle)) {
    metaTitle = String(post.metaTitle).trim();
  } else {
    metaTitle = titleWithBrand(compressTitleCore(post.title || post.metaTitle || 'BioNixus', lang));
  }

  if (!isHealthyTitle(metaTitle)) {
    metaTitle = titleWithBrand(cleanBrandTail(metaTitle).replace(/^BioNixus[:\s-]*/i, ''), TITLE_MAX);
  }

  const metaDescription = buildCtrDescription(post, metaTitle);
  const ogTitle = cleanBrandTail(metaTitle).length <= 90
    ? cleanBrandTail(metaTitle)
    : truncateAtWord(cleanBrandTail(metaTitle), 90);
  const ogDescription = metaDescription;
  const focusKeyword = override?.focusKeyword || post.focusKeyword || undefined;

  return {
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    focusKeyword,
  };
}

function needsRewrite(post, next) {
  const t = post.metaTitle || '';
  const d = stripTags(post.metaDescription || '');
  const brandBroken = t.includes('| Bio') && !t.endsWith('| BioNixus');
  const titleTooLong = t.length > TITLE_MAX;
  const descBad =
    !d || d.length < 70 || d.length > DESC_MAX || /<[^>]+>/.test(post.metaDescription || '');
  const titleChanged = t.trim() !== next.metaTitle;
  const descChanged = d !== next.metaDescription;
  const ogChanged =
    (post.ogTitle || '') !== next.ogTitle ||
    stripTags(post.ogDescription || '') !== next.ogDescription;
  return brandBroken || titleTooLong || descBad || titleChanged || descChanged || ogChanged;
}

function updateLocalJson(slug, seo) {
  const file = path.join(root, 'scripts/data', `${slug}.json`);
  if (!fs.existsSync(file)) return false;
  const doc = JSON.parse(fs.readFileSync(file, 'utf8'));
  doc.seo = {
    ...(doc.seo || {}),
    metaTitle: seo.metaTitle,
    metaDescription: seo.metaDescription,
    ...(seo.focusKeyword ? { focusKeyword: seo.focusKeyword } : {}),
    canonicalUrl:
      doc.seo?.canonicalUrl ||
      (doc.language === 'ar'
        ? `https://www.bionixus.com/ar/blog/${slug}`
        : `https://www.bionixus.com/blog/${slug}`),
    noIndex: doc.seo?.noIndex ?? false,
  };
  doc.openGraph = {
    ...(doc.openGraph || {}),
    ogTitle: seo.ogTitle,
    ogDescription: seo.ogDescription,
  };
  fs.writeFileSync(file, `${JSON.stringify(doc, null, 2)}\n`);
  return true;
}

async function main() {
  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN.');
    process.exit(1);
  }

  const dryRun = process.argv.includes('--dry-run');
  const writeLocal = process.argv.includes('--write-local-json');
  const limitArg = process.argv.find((a) => a.startsWith('--limit='));
  const limit = limitArg ? Number(limitArg.split('=')[1]) : null;

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

  const posts = await client.fetch(`*[_type == "blogPost"]|order(publishedAt desc){
    _id,
    title,
    language,
    "slug": slug.current,
    excerpt,
    "metaTitle": seo.metaTitle,
    "metaDescription": seo.metaDescription,
    "ogTitle": openGraph.ogTitle,
    "ogDescription": openGraph.ogDescription,
    "focusKeyword": seo.focusKeyword
  }`);

  const plan = [];
  for (const post of posts) {
    if (!post?.slug || !post?._id) continue;
    const next = buildSeoForPost(post);
    if (!needsRewrite(post, next)) continue;
    plan.push({ post, next });
  }

  const selected = limit ? plan.slice(0, limit) : plan;

  console.log(`Fetched ${posts.length} blog posts`);
  console.log(`Planned rewrites: ${plan.length}${limit ? ` (applying ${selected.length})` : ''}`);
  console.log(dryRun ? 'Mode: DRY RUN' : 'Mode: APPLY');

  const preview = selected.slice(0, 12);
  for (const { post, next } of preview) {
    console.log(`\n[${post.language || 'en'}] ${post.slug}`);
    console.log(`  OLD T (${(post.metaTitle || '').length}): ${post.metaTitle}`);
    console.log(`  NEW T (${next.metaTitle.length}): ${next.metaTitle}`);
    console.log(`  OLD D (${(post.metaDescription || '').length}): ${stripTags(post.metaDescription || '').slice(0, 110)}`);
    console.log(`  NEW D (${next.metaDescription.length}): ${next.metaDescription.slice(0, 110)}`);
  }
  if (selected.length > preview.length) {
    console.log(`\n… ${selected.length - preview.length} more`);
  }

  const manifestPath = path.join(root, 'scripts/data/blog-seo-rewrite-manifest.json');
  fs.writeFileSync(
    manifestPath,
    JSON.stringify(
      selected.map(({ post, next }) => ({
        _id: post._id,
        slug: post.slug,
        language: post.language || 'en',
        before: {
          metaTitle: post.metaTitle,
          metaDescription: post.metaDescription,
        },
        after: next,
      })),
      null,
      2,
    ),
  );
  console.log(`\nWrote manifest: ${manifestPath}`);

  if (dryRun) {
    console.log('Dry run complete — no Sanity writes.');
    return;
  }

  let ok = 0;
  let fail = 0;
  let localUpdated = 0;
  for (const { post, next } of selected) {
    try {
      const patch = {
        'seo.metaTitle': next.metaTitle,
        'seo.metaDescription': next.metaDescription,
        'openGraph.ogTitle': next.ogTitle,
        'openGraph.ogDescription': next.ogDescription,
        updatedAt: new Date().toISOString(),
      };
      if (next.focusKeyword) patch['seo.focusKeyword'] = next.focusKeyword;

      await client.patch(post._id).set(patch).commit({ autoGenerateArrayKeys: true });
      ok += 1;
      if (writeLocal && updateLocalJson(post.slug, next)) localUpdated += 1;
      process.stdout.write('.');
    } catch (err) {
      fail += 1;
      console.error(`\nFailed ${post.slug}:`, err.message || err);
    }
  }
  console.log(`\nDone. Patched ${ok}, failed ${fail}, local JSON updated ${localUpdated}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
