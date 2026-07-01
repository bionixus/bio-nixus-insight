#!/usr/bin/env node
/**
 * Create (or update) a published Resend template from a newsletter HTML file,
 * then store the template ID on the matching Sanity newsletter document.
 *
 * Usage:
 *   node scripts/publish-newsletter-resend-template.mjs \
 *     --file newsletters/2026-06-30-issue-17-uae-biosimilars-market-report.html \
 *     --title "Issue 17 — UAE Biosimilars Market Report 2026"
 *
 * Requires RESEND_API_KEY and Sanity write token in .env
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';
import { Resend } from 'resend';

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

const resendApiKey = process.env.RESEND_API_KEY;
const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN;
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01';

function parseArgs() {
  const args = process.argv.slice(2);
  const fileIdx = args.indexOf('--file');
  const titleIdx = args.indexOf('--title');
  const subjectIdx = args.indexOf('--subject');
  return {
    file: fileIdx >= 0 ? args[fileIdx + 1] : null,
    title: titleIdx >= 0 ? args[titleIdx + 1] : null,
    subject: subjectIdx >= 0 ? args[subjectIdx + 1] : null,
    dryRun: args.includes('--dry-run'),
  };
}

function slugFromFile(filePath) {
  return path.basename(filePath, '.html').replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

function prepareTemplateHtml(html) {
  return html
    .replace(/\{\{UNSUBSCRIBE_URL\}\}/g, '{{{SUBSCRIBER_UNSUBSCRIBE_URL}}}')
    .replace(/href=["']#["']([^>]*>\s*Unsubscribe)/gi, 'href="{{{SUBSCRIBER_UNSUBSCRIBE_URL}}}"$1');
}

async function main() {
  const { file, title: titleArg, subject: subjectArg, dryRun } = parseArgs();

  if (!file) {
    console.error(
      'Usage: node scripts/publish-newsletter-resend-template.mjs --file newsletters/<file>.html --title "Internal title"'
    );
    process.exit(1);
  }

  if (!resendApiKey) {
    console.error('Missing RESEND_API_KEY in .env');
    process.exit(1);
  }
  if (!projectId || !dataset || !token) {
    console.error('Missing Sanity credentials in .env');
    process.exit(1);
  }

  const filePath = path.isAbsolute(file) ? file : path.join(root, file);
  if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    process.exit(1);
  }

  const rawHtml = fs.readFileSync(filePath, 'utf8');
  const html = prepareTemplateHtml(rawHtml);
  const templateName = slugFromFile(filePath);
  const sanityTitle = titleArg || templateName;
  const subject =
    subjectArg || 'UAE Biosimilars Market Report 2026 — DOH, EDE & payer intelligence';

  const resend = new Resend(resendApiKey);
  const sanity = createClient({ projectId, dataset, token, apiVersion, useCdn: false });

  const newsletter = await sanity.fetch(
    `*[_type == "newsletter" && title == $title][0]{ _id, resendTemplateId }`,
    { title: sanityTitle }
  );

  if (!newsletter?._id) {
    console.error(`No Sanity newsletter with title "${sanityTitle}". Run publish-newsletter.mjs first.`);
    process.exit(1);
  }

  if (dryRun) {
    console.log('Dry run:', { templateName, sanityTitle, subject, htmlBytes: html.length });
    return;
  }

  let templateId = newsletter.resendTemplateId;

  if (templateId) {
    console.log('Updating existing Resend template:', templateId);
    const { error } = await resend.templates.update(templateId, {
      name: templateName,
      subject,
      from: 'BioNixus Market Research <newsletter@bionixus.com>',
      replyTo: 'digital@bionixus.uk',
      html,
      variables: [{ key: 'SUBSCRIBER_UNSUBSCRIBE_URL', type: 'string' }],
    });
    if (error) {
      console.error('Template update failed:', error);
      process.exit(1);
    }
    const { error: publishError } = await resend.templates.publish(templateId);
    if (publishError) {
      console.error('Template publish failed:', publishError);
      process.exit(1);
    }
  } else {
    console.log('Creating Resend template:', templateName);
    const { data, error } = await resend.templates
      .create({
        name: templateName,
        subject,
        from: 'BioNixus Market Research <newsletter@bionixus.com>',
        replyTo: 'digital@bionixus.uk',
        html,
        variables: [{ key: 'SUBSCRIBER_UNSUBSCRIBE_URL', type: 'string' }],
      })
      .publish();

    if (error) {
      console.error('Template create/publish failed:', error);
      process.exit(1);
    }
    templateId = data?.id;
    if (!templateId) {
      console.error('No template ID returned from Resend');
      process.exit(1);
    }

    await sanity.patch(newsletter._id).set({ resendTemplateId: templateId }).commit();
  }

  console.log('Resend template ready:', templateId);
  console.log('Sanity newsletter:', newsletter._id);
  console.log('Send via admin — Resend will render template + SUBSCRIBER_UNSUBSCRIBE_URL per recipient');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
