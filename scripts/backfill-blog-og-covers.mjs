#!/usr/bin/env node
/**
 * Generate unique 1200×630 JPEG covers and patch Sanity openGraph + mainImage
 * so LinkedIn/Facebook shares get a unique title image per article.
 *
 *   node scripts/backfill-blog-og-covers.mjs
 *   node scripts/backfill-blog-og-covers.mjs --dry-run
 *   node scripts/backfill-blog-og-covers.mjs --covers-only
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import sharp from 'sharp';
import { generateBlogCover } from './lib/generate-blog-cover.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const MIN_WIDTH = 600;
const MIN_HEIGHT = 315;

function loadDotEnv() {
  const envPath = path.join(root, '.env');
  if (!fs.existsSync(envPath)) return;
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

loadDotEnv();

const dryRun = process.argv.includes('--dry-run');
const coversOnly = process.argv.includes('--covers-only');

const HARDCODED_COVERS = [
  {
    slug: 'gcc-pharmacoeconomics',
    title: 'GCC Pharmacoeconomics & HEOR',
    subtitle: 'Saudi & UAE payer evidence',
    therapeuticArea: 'Market Access',
    actionType: 'HEOR',
    footer: 'GCC & MENA · PHARMA MARKET ACCESS',
  },
  {
    slug: 'nmpa-class-iii-registration-timeline-2026',
    title: 'NMPA Class III Timeline 2026',
    subtitle: 'CMDE device registration',
    therapeuticArea: 'Regulatory',
    actionType: 'China NMPA',
    footer: 'CHINA · MEDTECH MARKET ACCESS',
  },
  {
    slug: 'skyrizi-tops-julys-pharma-rankings-and-what-it-means-for-omnichannel-engagement',
    title: 'Skyrizi Omnichannel Rankings',
    subtitle: 'July pharma engagement lessons',
    therapeuticArea: 'Commercial',
    actionType: 'Omnichannel',
    footer: 'USA · COMMERCIAL EFFECTIVENESS',
  },
  {
    slug: 'market-research-companies-egypt',
    title: 'Market Research Companies in Egypt',
    subtitle: '2026 healthcare comparison',
    therapeuticArea: 'Market Intelligence',
    actionType: 'Egypt',
    footer: 'EGYPT · HEALTHCARE RESEARCH',
  },
  {
    slug: 'turkey-pharmaceutical-market-2026-titck-top-companies',
    title: 'Turkey Pharma Market 2026',
    subtitle: 'TITCK registration & companies',
    therapeuticArea: 'Market Access',
    actionType: 'Turkey TITCK',
    footer: 'TURKEY · PHARMA MARKET ACCESS',
  },
  {
    slug: 'medtech-singapore-2026-market-hsa-registration',
    title: 'MedTech Singapore 2026',
    subtitle: 'HSA Class A–D registration',
    therapeuticArea: 'MedTech',
    actionType: 'Singapore HSA',
    footer: 'SINGAPORE · MEDTECH ACCESS',
  },
  {
    slug: 'china-device-vbp-rounds-explained',
    title: 'China Device VBP Rounds',
    subtitle: 'Stents, joints & renewals',
    therapeuticArea: 'MedTech',
    actionType: 'China VBP',
    footer: 'CHINA · VOLUME-BASED PROCUREMENT',
  },
  {
    slug: 'uae-healthcare-market-trends-2026',
    title: 'UAE Healthcare Trends 2026',
    subtitle: 'Dubai & Abu Dhabi commercial signals',
    therapeuticArea: 'Market Intelligence',
    actionType: 'UAE',
    footer: 'UAE · HEALTHCARE RESEARCH',
  },
  {
    slug: 'desmoid-tumors-nirogacestat-pharma-market-access',
    title: 'Desmoid Market Access Briefing',
    subtitle: 'Ogsiveo (nirogacestat)',
    therapeuticArea: 'Oncology',
    actionType: 'Rare Disease',
    footer: 'GLOBAL · RARE TUMOUR ACCESS',
  },
  {
    slug: 'nf1-koselugo-selumetinib-pharma-market-research',
    title: 'Koselugo (Selumetinib) NF1 Research',
    subtitle: 'MEK inhibitor access signals',
    therapeuticArea: 'Rare Disease',
    actionType: 'Koselugo',
    footer: 'GLOBAL · RARE DISEASE ACCESS',
  },
];

function coverTitle(ogTitle, title) {
  const raw = String(ogTitle || title || 'BioNixus Insights').trim();
  if (/[\u4e00-\u9fff]/.test(raw)) return raw.slice(0, 22);
  if (/[\u0600-\u06FF]/.test(raw)) return raw.slice(0, 32);
  return raw.length > 72 ? `${raw.slice(0, 69).trim()}…` : raw;
}

function footerForPost(country, language) {
  if (language === 'de' || /germany/i.test(country || '')) return 'GERMANY · PHARMA MARKET ACCESS';
  if (language === 'pt' || /brazil/i.test(country || '')) return 'BRAZIL · ANVISA MARKET ACCESS';
  if (language === 'ar') return 'الخليج · أبحاث السوق الدوائية';
  if (/china/i.test(country || '')) return 'CHINA · PHARMA MARKET ACCESS';
  if (/united states|usa/i.test(country || '')) return 'USA · PHARMA MARKET ACCESS';
  if (/europe|uk|united kingdom/i.test(country || '')) return 'EUROPE · HTA & MARKET ACCESS';
  if (/kuwait/i.test(country || '')) return 'KUWAIT · PHARMA MARKET ACCESS';
  if (/qatar/i.test(country || '')) return 'QATAR · PHARMA MARKET ACCESS';
  if (/egypt/i.test(country || '')) return 'EGYPT · HEALTHCARE RESEARCH';
  if (/saudi/i.test(country || '')) return 'SAUDI ARABIA · SFDA ACCESS';
  return 'GCC & MENA · PHARMA MARKET ACCESS';
}

function altForPost(post) {
  const existing = String(post.mainAlt || post.ogAlt || '').trim();
  if (existing) return existing.slice(0, 125);
  const title = String(post.ogTitle || post.title || 'BioNixus insight').trim();
  return `${title} — BioNixus healthcare market research`.slice(0, 125);
}

async function generateLocalCover({ slug, title, subtitle, therapeuticArea, actionType, footer }) {
  const outPath = path.join(root, 'public/images/blog', `${slug}-cover.jpg`);
  await generateBlogCover({
    title,
    subtitle,
    sponsor: 'BioNixus',
    therapeuticArea,
    actionType,
    slug,
    footer,
    outPath,
  });
  const meta = await sharp(outPath).metadata();
  if (meta.width !== 1200 || meta.height !== 630) {
    throw new Error(`${outPath} is ${meta.width}×${meta.height}, expected 1200×630`);
  }
  return outPath;
}

async function uploadJpeg(client, filePath, filename, alt) {
  let buf = fs.readFileSync(filePath);
  buf = await sharp(buf)
    .resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 92, progressive: true, mozjpeg: true })
    .toBuffer();
  const asset = await client.assets.upload('image', buf, {
    contentType: 'image/jpeg',
    filename,
  });
  return {
    _type: 'image',
    alt,
    asset: { _type: 'reference', _ref: asset._id },
  };
}

function imageFieldFromMain(post, alt) {
  if (!post.mainAssetId) return null;
  return {
    _type: 'image',
    alt,
    asset: { _type: 'reference', _ref: post.mainAssetId },
  };
}

async function patchIds(client, id, set) {
  const ids = new Set([id]);
  if (id.startsWith('drafts.')) ids.add(id.slice('drafts.'.length));
  else ids.add(`drafts.${id}`);
  for (const target of ids) {
    const exists = await client.fetch('*[_id == $id][0]._id', { id: target });
    if (!exists) continue;
    await client.patch(target).set(set).commit();
  }
}

async function main() {
  console.log(dryRun ? 'Dry run — generating local covers only where needed, no Sanity writes.' : 'Backfilling blog OG covers…');

  for (const cover of HARDCODED_COVERS) {
    const outPath = await generateLocalCover(cover);
    console.log('hardcoded cover', cover.slug, path.relative(root, outPath));
  }

  if (coversOnly) return;

  const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
  const token =
    process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
  const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';
  if (!projectId || !token) {
    throw new Error('Missing SANITY_PROJECT_ID or SANITY_TOKEN');
  }

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });
  const posts = await client.fetch(`*[_type == "blogPost" && defined(slug.current)]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    language,
    category,
    country,
    "ogTitle": openGraph.ogTitle,
    "ogDescription": openGraph.ogDescription,
    "hasMain": defined(mainImage.asset),
    "mainAssetId": mainImage.asset._ref,
    "mainAlt": mainImage.alt,
    "mainExt": mainImage.asset->extension,
    "mainW": mainImage.asset->metadata.dimensions.width,
    "mainH": mainImage.asset->metadata.dimensions.height,
    "hasOg": defined(openGraph.ogImage.asset),
    "ogExt": openGraph.ogImage.asset->extension,
    "ogAlt": openGraph.ogImage.alt
  }`);

  const seen = new Set();
  const unique = [];
  for (const post of posts) {
    const key = post.slug;
    const isDraft = String(post._id).startsWith('drafts.');
    if (seen.has(key) && isDraft) continue;
    if (seen.has(key) && !isDraft) {
      const idx = unique.findIndex((p) => p.slug === key);
      unique[idx] = post;
      continue;
    }
    seen.add(key);
    unique.push(post);
  }

  let generated = 0;
  let copied = 0;
  let skipped = 0;

  for (const post of unique) {
    const alt = altForPost(post);
    const ogIsSvg = String(post.ogExt || '').toLowerCase() === 'svg';
    const mainIsRaster = post.hasMain && String(post.mainExt || '').toLowerCase() !== 'svg';
    const mainIsLarge = mainIsRaster && (post.mainW || 0) >= MIN_WIDTH && (post.mainH || 0) >= MIN_HEIGHT;
    const needsGeneratedCover = !post.hasMain || !mainIsLarge;
    const needsOgCopy = mainIsLarge && (!post.hasOg || ogIsSvg);

    if (!needsGeneratedCover && !needsOgCopy && post.mainAlt && post.ogAlt && post.ogTitle && post.ogDescription) {
      skipped += 1;
      continue;
    }

    if (needsGeneratedCover) {
      const outPath = path.join(root, 'public/images/blog', `${post.slug}-cover.jpg`);
      console.log(needsOgCopy ? 'generate+og' : 'generate', post.slug);
      if (!dryRun) {
        await generateLocalCover({
          slug: post.slug,
          title: coverTitle(post.ogTitle, post.title),
          subtitle: [post.category, post.country].filter(Boolean).join(' · ') || 'Healthcare market research',
          therapeuticArea: post.category || 'Pharmaceutical',
          actionType: post.country || post.language || '',
          footer: footerForPost(post.country, post.language),
        });
        const image = await uploadJpeg(client, outPath, `${post.slug}-cover.jpg`, alt);
        await patchIds(client, post._id, {
          mainImage: image,
          'openGraph.ogImage': image,
          'openGraph.ogTitle': post.ogTitle || coverTitle(post.title, post.title),
          'openGraph.ogDescription':
            post.ogDescription || String(post.excerpt || post.title || '').slice(0, 200),
        });
      }
      generated += 1;
      continue;
    }

    if (needsOgCopy || !post.ogAlt || !post.mainAlt) {
      const image = imageFieldFromMain(post, alt);
      console.log(ogIsSvg ? 'replace-svg-og' : 'copy-main-to-og', post.slug);
      if (!dryRun && image) {
        const set = {
          'openGraph.ogImage': image,
          'openGraph.ogTitle': post.ogTitle || coverTitle(post.title, post.title),
          'openGraph.ogDescription':
            post.ogDescription || String(post.excerpt || post.title || '').slice(0, 200),
        };
        if (!post.mainAlt) set['mainImage.alt'] = alt;
        await patchIds(client, post._id, set);
      }
      copied += 1;
    }
  }

  console.log(JSON.stringify({ generated, copied, skipped, total: unique.length, dryRun }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
