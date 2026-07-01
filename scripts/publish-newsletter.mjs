#!/usr/bin/env node
/**
 * Publish a newsletter HTML file to Sanity CMS.
 *
 * Usage:
 *   node scripts/publish-newsletter.mjs --file newsletters/2026-06-30-issue-17-uae-biosimilars-market-report.html
 *   node scripts/publish-newsletter.mjs --file newsletters/foo.html --sync-existing
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

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

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

function parseArgs() {
  const args = process.argv.slice(2);
  const fileIdx = args.indexOf('--file');
  return {
    file: fileIdx >= 0 ? args[fileIdx + 1] : null,
    syncExisting: args.includes('--sync-existing'),
    dryRun: args.includes('--dry-run'),
    title: args.includes('--title') ? args[args.indexOf('--title') + 1] : null,
    subject: args.includes('--subject') ? args[args.indexOf('--subject') + 1] : null,
    preheader: args.includes('--preheader') ? args[args.indexOf('--preheader') + 1] : null,
    segments: args.includes('--segments')
      ? args[args.indexOf('--segments') + 1].split(',').map((s) => s.trim())
      : ['market_research', 'pharma_clients'],
  };
}

function extractPreheader(html) {
  const match = html.match(
    /<div style="display:none[^"]*"[^>]*>\s*([\s\S]*?)\s*<\/div>/i
  );
  return match ? match[1].replace(/\s+/g, ' ').trim() : '';
}

function assertResendReadyHtml(html, filePath) {
  const trimmed = html.trim();
  if (!/<!DOCTYPE\s+html/i.test(trimmed) && !/^<html[\s>]/i.test(trimmed)) {
    console.warn(
      `Warning: ${filePath} is not a complete HTML document. Resend sends self-contained newsletters without the generic wrapper.`
    );
  }
  if (!html.includes('{{{SUBSCRIBER_UNSUBSCRIBE_URL}}}') && !html.includes('{{UNSUBSCRIBE_URL}}') && !/href=["']#["'][^>]*>\s*Unsubscribe/i.test(html)) {
    console.warn(
      `Warning: ${filePath} has no {{{SUBSCRIBER_UNSUBSCRIBE_URL}}} placeholder — unsubscribe links may not personalize.`
    );
  }
}

function deriveTitleFromFilename(filename) {
  const base = path.basename(filename, '.html');
  const withoutDate = base.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  const withoutIssue = withoutDate.replace(/^issue-\d+-/, '');
  return withoutIssue
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function buildDoc({ html, title, subject, preheader, segments }) {
  return {
    _type: 'newsletter',
    title,
    subject: { en: subject },
    preheader: { en: preheader },
    contentType: 'html',
    htmlContent: { en: html },
    targetSegments: segments,
    status: 'draft',
  };
}

async function main() {
  const { file, syncExisting, dryRun, title: titleArg, subject: subjectArg, preheader: preheaderArg, segments } =
    parseArgs();

  if (!file) {
    console.error('Usage: node scripts/publish-newsletter.mjs --file newsletters/<filename>.html');
    process.exit(1);
  }

  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in environment (.env).');
    process.exit(1);
  }

  const filePath = path.isAbsolute(file) ? file : path.join(root, file);
  if (!fs.existsSync(filePath)) {
    console.error('Newsletter file not found:', filePath);
    process.exit(1);
  }

  const html = fs.readFileSync(filePath, 'utf8');
  assertResendReadyHtml(html, filePath);
  const title = titleArg || `Issue 17 — UAE Biosimilars Market Report 2026`;
  const subject = subjectArg || 'UAE Biosimilars Market Report 2026 — DOH, EDE & payer intelligence';
  const preheader =
    preheaderArg ||
    extractPreheader(html) ||
    'UAE biosimilars ~USD 135M in 2026: DOH treatment-naive mandate, EDE registration, SEHA rules.';

  const doc = buildDoc({ html, title, subject, preheader, segments });
  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

  const existingId = await client.fetch(
    `*[_type == "newsletter" && title == $title][0]._id`,
    { title }
  );

  if (dryRun) {
    console.log('Dry run — would publish newsletter:');
    console.log(JSON.stringify({ title, subject, preheader, segments, htmlBytes: html.length }, null, 2));
    return;
  }

  if (syncExisting) {
    if (!existingId) {
      console.error(`No newsletter with title "${title}" found. Run without --sync-existing to create.`);
      process.exit(1);
    }
    await client
      .patch(existingId)
      .set({
        subject: doc.subject,
        preheader: doc.preheader,
        contentType: doc.contentType,
        htmlContent: doc.htmlContent,
        targetSegments: doc.targetSegments,
      })
      .commit();
    console.log('Synced newsletter:', existingId);
    console.log('Studio:', `https://${projectId}.sanity.studio/desk/newsletter;${existingId}`);
    return;
  }

  if (existingId) {
    console.error(
      `A newsletter titled "${title}" already exists (_id=${existingId}). Use --sync-existing to update.`
    );
    process.exit(1);
  }

  const created = await client.create(doc);
  console.log('Created newsletter:', created._id);
  console.log('Title:', title);
  console.log('Subject:', subject);
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/newsletter;${created._id}`);
  console.log('Send via:', 'https://www.bionixus.com/admin/send-newsletter');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
