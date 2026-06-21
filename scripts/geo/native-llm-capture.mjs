#!/usr/bin/env node
/**
 * Native LLM UI captures for BIO-222 daily prompt monitoring (BIO-235).
 *
 * Usage:
 *   node scripts/geo/native-llm-capture.mjs --date 2026-06-15
 *   node scripts/geo/native-llm-capture.mjs --date 2026-06-15 --platform chatgpt --prompt BIO222-01
 *   node scripts/geo/native-llm-capture.mjs --date 2026-06-15 --dry-run
 *
 * Credentials (optional — never logged):
 *   CHATGPT_EMAIL / CHATGPT_PASSWORD
 *   GOOGLE_GEMINI_EMAIL / GOOGLE_GEMINI_PASSWORD (or GEMINI_EMAIL / GEMINI_PASSWORD)
 *   CLAUDE_EMAIL / CLAUDE_PASSWORD
 */

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const MON_DIR = path.join(ROOT, 'docs/geo/daily-prompt-monitoring');
const PROMPT_SET = path.join(MON_DIR, 'prompt-set-bio222.csv');
const DAILY_DIR = path.join(MON_DIR, 'daily');

const CSV_HEADER =
  'date,prompt_id,prompt,funnel_tag,platform,language,location,bionixus_mentioned,bionixus_cited,cited_url,citation_score,position,brands_mentioned,sentiment,delta_vs_prior,feedback,captured_at';

const PLATFORM_URLS = {
  chatgpt: 'https://chatgpt.com/',
  gemini: 'https://gemini.google.com/app',
  claude: 'https://claude.ai/new',
};

function getArg(name) {
  const idx = process.argv.indexOf(`--${name}`);
  return idx >= 0 ? process.argv[idx + 1] : undefined;
}

function hasFlag(name) {
  return process.argv.includes(`--${name}`);
}

function parseCsv(text) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map((line) => {
    const values = [];
    let current = '';
    let inQuotes = false;
    for (const ch of line) {
      if (ch === '"') {
        inQuotes = !inQuotes;
        continue;
      }
      if (ch === ',' && !inQuotes) {
        values.push(current);
        current = '';
        continue;
      }
      current += ch;
    }
    values.push(current);
    const row = {};
    headers.forEach((h, i) => {
      row[h.trim()] = (values[i] ?? '').trim();
    });
    return row;
  });
}

function writeCsv(filePath, rows, headers) {
  const headerLine = headers.join(',');
  const body = rows
    .map((row) =>
      headers
        .map((h) => {
          const v = row[h] ?? '';
          return v.includes(',') ? `"${v.replace(/"/g, '""')}"` : v;
        })
        .join(','),
    )
    .join('\n');
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${headerLine}\n${body}\n`);
}

function priorDate(dateStr) {
  const d = new Date(`${dateStr}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

function credentialStatus() {
  const pairs = [
    ['CHATGPT_EMAIL', 'CHATGPT_PASSWORD'],
    ['GOOGLE_GEMINI_EMAIL', 'GOOGLE_GEMINI_PASSWORD'],
    ['GEMINI_EMAIL', 'GEMINI_PASSWORD'],
    ['CLAUDE_EMAIL', 'CLAUDE_PASSWORD'],
  ];
  const status = {};
  for (const [emailKey, passKey] of pairs) {
    status[emailKey] = Boolean(process.env[emailKey]?.trim());
    status[passKey] = Boolean(process.env[passKey]?.trim());
  }
  return status;
}

function extractBrands(text) {
  const known = [
    'BioNixus',
    'IQVIA',
    'Kantar',
    'Ipsos',
    'NielsenIQ',
    'YouGov',
    'InVeritas',
    '2insights',
    'Global Markets',
    'FGMC',
    'Focus Marketing',
    'ARA Research',
    'Infomine',
    'Spade Health',
    'Eurogroup',
    'McKinsey',
    'ZS Associates',
    'ClearView',
    'L.E.K.',
    'Simon-Kucher',
    'Deloitte',
    'PwC',
    'EY',
    'Accenture',
    'IQVIA',
    'Syneos',
    'Parexel',
    'ICON',
    'Covance',
  ];
  const found = [];
  const lower = text.toLowerCase();
  for (const brand of known) {
    if (lower.includes(brand.toLowerCase())) found.push(brand);
  }
  if (lower.includes('bionixus') && !found.includes('BioNixus')) found.unshift('BioNixus');
  return [...new Set(found)];
}

function analyzeResponse(text) {
  const lower = text.toLowerCase();
  const mentioned = /\bbionixus\b/i.test(text);
  const urlMatch = text.match(/https?:\/\/(?:www\.)?bionixus\.com[^\s)\]"']*/i);
  const cited = Boolean(urlMatch);
  const citedUrl = urlMatch ? urlMatch[0].replace(/[.,;]+$/, '') : '';

  let position = 'none';
  if (mentioned) {
    const idx = lower.indexOf('bionixus');
    const before = lower.slice(0, idx);
    const ordinals = (before.match(/\b\d+\./g) || []).length;
    if (ordinals === 0) position = 'first';
    else if (ordinals <= 2) position = 'top3';
    else if (ordinals <= 4) position = 'top5';
    else position = 'mentioned';
  }

  let citationScore = 0;
  if (mentioned) {
    citationScore = position === 'first' ? 50 : position === 'top3' ? 30 : position === 'top5' ? 10 : 5;
    if (cited) citationScore += 5;
    const urlCount = (text.match(/bionixus\.com/gi) || []).length;
    citationScore += Math.min(urlCount * 3, 20);
  }

  const brands = extractBrands(text);
  const sentiment = mentioned ? (lower.includes('leading') || lower.includes('specialist') || lower.includes('best') ? 'positive' : 'neutral') : 'n/a';

  return {
    bionixus_mentioned: mentioned ? 'Y' : 'N',
    bionixus_cited: cited ? 'Y' : 'N',
    cited_url: citedUrl,
    citation_score: String(citationScore),
    position,
    brands_mentioned: brands.join(';'),
    sentiment,
  };
}

async function launchStealthBrowser() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--disable-blink-features=AutomationControlled'],
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    locale: 'en-US',
    extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9' },
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  });
  await context.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
  });
  return { browser, context };
}

async function loginChatGPT(page) {
  const email = process.env.CHATGPT_EMAIL?.trim();
  const password = process.env.CHATGPT_PASSWORD?.trim();
  if (!email || !password) return false;
  await page.goto('https://chatgpt.com/auth/login', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(2000);
  const emailInput = page.locator('input[type="email"], input[name="email"], input#email').first();
  if (await emailInput.count()) {
    await emailInput.fill(email);
    await page.locator('button[type="submit"], button:has-text("Continue")').first().click();
    await page.waitForTimeout(2000);
  }
  const passInput = page.locator('input[type="password"], input[name="password"]').first();
  if (await passInput.count()) {
    await passInput.fill(password);
    await page.locator('button[type="submit"], button:has-text("Continue"), button:has-text("Log in")').first().click();
    await page.waitForTimeout(5000);
  }
  return !/auth\/login/i.test(page.url());
}

async function waitForAssistantText(page, timeoutMs = 120000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    await page.waitForTimeout(3000);
    const parts = await page
      .locator('[data-message-author-role="assistant"], article[data-turn="assistant"], .markdown')
      .allTextContents();
    const joined = parts.join('\n').trim();
    const stopCount = await page.locator('button:has-text("Stop")').count();
    if (joined.length > 150 && stopCount === 0) return joined;
  }
  const fallback = await page
    .locator('[data-message-author-role="assistant"], article[data-turn="assistant"], .markdown')
    .allTextContents();
  return fallback.join('\n').trim();
}

async function captureChatGPT(page, prompt, location) {
  const loggedIn = await loginChatGPT(page);
  await page.goto(PLATFORM_URLS.chatgpt, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(4000);

  const textarea = page.locator('#prompt-textarea, textarea[placeholder*="Message"]').first();
  if (!(await textarea.count())) {
    const bodyText = await page.evaluate(() => document.body.innerText);
    return { blocked: true, reason: 'no_input', responseText: bodyText.slice(0, 2000) };
  }

  await textarea.click();
  await textarea.fill(prompt);
  const loginModal = page.locator('[data-testid="modal-no-auth-login"]');
  const send = page.locator('#composer-submit-button, button[data-testid="send-button"]').first();
  try {
    await send.click({ timeout: 8000 });
  } catch {
    if (await loginModal.count()) {
      const bodyText = await page.evaluate(() => document.body.innerText);
      return {
        blocked: true,
        reason: 'login_modal_on_send',
        responseText: bodyText.slice(0, 2000),
        sessionNote: loggedIn ? 'login attempted' : 'guest session',
      };
    }
    await page.keyboard.press('Enter');
  }

  const responseText = await waitForAssistantText(page);
  if (!responseText) {
    const bodyText = await page.evaluate(() => document.body.innerText);
    if (/log in|sign up|sign in/i.test(bodyText)) {
      return { blocked: true, reason: 'login_required', responseText: bodyText.slice(0, 2000) };
    }
  }
  return {
    blocked: false,
    responseText: responseText || (await page.evaluate(() => document.body.innerText)),
    sessionNote: loggedIn ? 'authenticated' : 'guest session',
  };
}

async function loginGoogle(page, emailEnv, passEnv) {
  const email = process.env[emailEnv]?.trim();
  const password = process.env[passEnv]?.trim();
  if (!email || !password) return false;
  await page.goto('https://accounts.google.com/signin', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(2000);
  const emailInput = page.locator('input[type="email"]').first();
  if (await emailInput.count()) {
    await emailInput.fill(email);
    await page.locator('#identifierNext, button:has-text("Next")').first().click();
    await page.waitForTimeout(2500);
  }
  const passInput = page.locator('input[type="password"]').first();
  if (await passInput.count()) {
    await passInput.fill(password);
    await page.locator('#passwordNext, button:has-text("Next")').first().click();
    await page.waitForTimeout(5000);
  }
  return !/accounts\.google\.com/i.test(page.url());
}

async function loginClaude(page) {
  const email = process.env.CLAUDE_EMAIL?.trim();
  const password = process.env.CLAUDE_PASSWORD?.trim();
  if (!email || !password) return false;
  await page.goto('https://claude.ai/login', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(2000);
  const emailInput = page.locator('input[type="email"], input[name="email"]').first();
  if (await emailInput.count()) {
    await emailInput.fill(email);
    await page.locator('button[type="submit"], button:has-text("Continue")').first().click();
    await page.waitForTimeout(2500);
  }
  const passInput = page.locator('input[type="password"]').first();
  if (await passInput.count()) {
    await passInput.fill(password);
    await page.locator('button[type="submit"], button:has-text("Log in")').first().click();
    await page.waitForTimeout(5000);
  }
  return !/login/i.test(page.url());
}

async function captureGemini(page, prompt, location) {
  const googleEmail = process.env.GOOGLE_GEMINI_EMAIL || process.env.GEMINI_EMAIL || process.env.GOOGLE_GBP_EMAIL;
  const googlePass = process.env.GOOGLE_GEMINI_PASSWORD || process.env.GEMINI_PASSWORD || process.env.GOOGLE_GBP_PASSWORD;
  const loggedIn =
    googleEmail && googlePass
      ? await loginGoogle(page, process.env.GOOGLE_GEMINI_EMAIL ? 'GOOGLE_GEMINI_EMAIL' : process.env.GEMINI_EMAIL ? 'GEMINI_EMAIL' : 'GOOGLE_GBP_EMAIL', process.env.GOOGLE_GEMINI_PASSWORD ? 'GOOGLE_GEMINI_PASSWORD' : process.env.GEMINI_PASSWORD ? 'GEMINI_PASSWORD' : 'GOOGLE_GBP_PASSWORD')
      : false;

  await page.goto(PLATFORM_URLS.gemini, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(4000);

  const bodyText = await page.evaluate(() => document.body.innerText);
  const input = page.locator('div[contenteditable="true"], textarea, .ql-editor, rich-textarea').first();
  if (!(await input.count()) || (/sign in/i.test(bodyText) && !loggedIn)) {
    return { blocked: true, reason: 'login_required', responseText: bodyText.slice(0, 2000), sessionNote: loggedIn ? 'login attempted' : 'guest session' };
  }

  await input.click();
  await page.keyboard.type(prompt, { delay: 8 });
  await page.keyboard.press('Enter');
  const responseText = await waitForAssistantText(page);
  return {
    blocked: !responseText,
    reason: responseText ? undefined : 'empty_response',
    responseText: responseText || bodyText,
    sessionNote: loggedIn ? 'authenticated' : 'guest session',
  };
}

async function captureClaude(page, prompt, location) {
  const loggedIn = await loginClaude(page);
  await page.goto(PLATFORM_URLS.claude, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(4000);

  const bodyText = await page.evaluate(() => document.body.innerText);
  const input = page.locator('div[contenteditable="true"], textarea, [data-testid="chat-input"]').first();
  if (!(await input.count()) || (/log in|sign up/i.test(bodyText) && !loggedIn)) {
    return { blocked: true, reason: 'login_required', responseText: bodyText.slice(0, 2000), sessionNote: loggedIn ? 'login attempted' : 'guest session' };
  }

  await input.click();
  await page.keyboard.type(prompt, { delay: 8 });
  await page.keyboard.press('Enter');
  const responseText = await waitForAssistantText(page);
  return {
    blocked: !responseText,
    reason: responseText ? undefined : 'empty_response',
    responseText: responseText || bodyText,
    sessionNote: loggedIn ? 'authenticated' : 'guest session',
  };
}

const CAPTURE_FNS = {
  chatgpt: captureChatGPT,
  gemini: captureGemini,
  claude: captureClaude,
};

function writeCaptureMd({ date, promptRow, platform, result, analysis, capturedAt, priorScore }) {
  const capDir = path.join(MON_DIR, 'captures', date);
  fs.mkdirSync(capDir, { recursive: true });
  const mdPath = path.join(capDir, `${promptRow.prompt_id}-${platform}.md`);
  const pngPath = path.join(capDir, `${promptRow.prompt_id}-${platform}.png`);

  const delta =
    priorScore !== '' && priorScore !== undefined
      ? Number(analysis.citation_score) - Number(priorScore)
      : null;
  const deltaStr = delta === null ? '—' : delta === 0 ? '0' : delta > 0 ? `+${delta}` : `${delta}`;

  const responseSection = result.blocked
    ? `**BLOCKED:** ${result.reason}\n\n${result.responseText || '(no response text)'}`
    : result.responseText?.slice(0, 8000) || '(empty response)';

  const md = `# ${promptRow.prompt_id} — ${platform}

**Prompt:** ${promptRow.prompt}
**Language:** ${promptRow.language}
**Location:** ${promptRow.location}
**Captured:** ${capturedAt}
**Method:** Native LLM UI capture via Playwright (${result.sessionNote || 'browser session'})
**Screenshot:** ${path.basename(pngPath)}

## Response

${responseSection}

## BioNixus mention

- Mentioned: ${analysis.bionixus_mentioned}
- Cited URL: ${analysis.cited_url || '—'}
- Position: ${analysis.position}
- Citation score: ${analysis.citation_score} (Δ vs ${priorDate(date)}: ${deltaStr})
- Competitors: ${analysis.brands_mentioned || '—'}
- Sentiment: ${analysis.sentiment}

## Feedback

${result.blocked ? `Login wall on ${platform}; board must provision ${platform.toUpperCase()} credentials.` : 'Native UI capture complete.'}
`;

  fs.writeFileSync(mdPath, md);
  return { mdPath, pngPath };
}

async function main() {
  const date = getArg('date') ?? new Date().toISOString().slice(0, 10);
  const filterPlatform = getArg('platform');
  const filterPrompt = getArg('prompt');
  const dryRun = hasFlag('dry-run');

  const prompts = parseCsv(fs.readFileSync(PROMPT_SET, 'utf8'));
  const priorCsv = parseCsv(
    fs.existsSync(path.join(DAILY_DIR, `${priorDate(date)}.csv`))
      ? fs.readFileSync(path.join(DAILY_DIR, `${priorDate(date)}.csv`), 'utf8')
      : 'date\n',
  );
  const priorMap = new Map();
  for (const row of priorCsv) {
    priorMap.set(`${row.prompt_id}|${row.platform}`, row.citation_score);
  }

  const creds = credentialStatus();
  console.log('Credential keys present:', Object.entries(creds).filter(([, v]) => v).map(([k]) => k).join(', ') || 'none');

  const jobs = [];
  for (const p of prompts) {
    if (filterPrompt && p.prompt_id !== filterPrompt) continue;
    const platforms = p.platforms.replace(/"/g, '').split(',');
    for (const platform of platforms) {
      if (filterPlatform && platform !== filterPlatform) continue;
      jobs.push({ promptRow: p, platform });
    }
  }

  console.log(`Capture jobs: ${jobs.length} for ${date}${dryRun ? ' (dry-run)' : ''}`);
  if (dryRun) {
    for (const j of jobs) console.log(`  ${j.promptRow.prompt_id} / ${j.platform}`);
    return;
  }

  const { browser, context } = await launchStealthBrowser();

  const dailyPath = path.join(DAILY_DIR, `${date}.csv`);
  const existingRows = fs.existsSync(dailyPath) ? parseCsv(fs.readFileSync(dailyPath, 'utf8')) : [];
  const rowMap = new Map();
  for (const row of existingRows) {
    rowMap.set(`${row.prompt_id}|${row.platform}`, row);
  }
  const allPromptRows = parseCsv(fs.readFileSync(PROMPT_SET, 'utf8'));
  const allJobs = [];
  for (const p of allPromptRows) {
    for (const platform of p.platforms.replace(/"/g, '').split(',')) {
      allJobs.push({ promptRow: p, platform });
    }
  }

  const report = { captured: 0, blocked: 0, errors: 0, items: [] };

  for (const { promptRow, platform } of jobs) {
    const key = `${promptRow.prompt_id}|${platform}`;
    const page = await context.newPage();
    const capturedAt = new Date().toISOString();
    try {
      console.log(`Capturing ${key}...`);
      const fn = CAPTURE_FNS[platform];
      const result = await fn(page, promptRow.prompt, promptRow.location);
      const capDir = path.join(MON_DIR, 'captures', date);
      fs.mkdirSync(capDir, { recursive: true });
      const pngPath = path.join(capDir, `${promptRow.prompt_id}-${platform}.png`);
      await page.screenshot({ path: pngPath, fullPage: true });

      const analysis = result.blocked
        ? {
            bionixus_mentioned: 'BLOCKED',
            bionixus_cited: 'BLOCKED',
            cited_url: '',
            citation_score: '',
            position: 'BLOCKED',
            brands_mentioned: '',
            sentiment: 'BLOCKED',
          }
        : analyzeResponse(result.responseText || '');

      const priorScore = priorMap.get(key) ?? '';
      writeCaptureMd({ date, promptRow, platform, result, analysis, capturedAt, priorScore });

      const priorNum = priorScore === '' ? null : Number(priorScore);
      const curNum = analysis.citation_score === '' ? null : Number(analysis.citation_score);
      let delta = '';
      if (priorNum !== null && curNum !== null && !Number.isNaN(priorNum) && !Number.isNaN(curNum)) {
        const d = curNum - priorNum;
        delta = d === 0 ? '0' : d > 0 ? `+${d}` : `${d}`;
      }

      rowMap.set(key, {
        date,
        prompt_id: promptRow.prompt_id,
        prompt: promptRow.prompt,
        funnel_tag: promptRow.funnel_tag,
        platform,
        language: promptRow.language,
        location: promptRow.location,
        ...analysis,
        delta_vs_prior: delta,
        feedback: result.blocked
          ? `BLOCKED: ${result.reason} — native UI login required`
          : `Native UI capture; score ${analysis.citation_score}`,
        captured_at: capturedAt,
      });

      if (result.blocked) report.blocked++;
      else report.captured++;
      report.items.push({ key, blocked: result.blocked, score: analysis.citation_score });
    } catch (err) {
      report.errors++;
      report.items.push({ key, error: err.message });
      console.error(`Error ${key}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();

  const headers = CSV_HEADER.split(',');
  const outRows = allJobs.map(({ promptRow, platform }) => {
    const key = `${promptRow.prompt_id}|${platform}`;
    return rowMap.get(key) ?? {
      date,
      prompt_id: promptRow.prompt_id,
      prompt: promptRow.prompt,
      funnel_tag: promptRow.funnel_tag,
      platform,
      language: promptRow.language,
      location: promptRow.location,
      bionixus_mentioned: 'ERROR',
      bionixus_cited: 'ERROR',
      cited_url: '',
      citation_score: '',
      position: 'ERROR',
      brands_mentioned: '',
      sentiment: 'ERROR',
      delta_vs_prior: '',
      feedback: 'Capture error',
      captured_at: new Date().toISOString(),
    };
  });

  writeCsv(dailyPath, outRows, headers);
  const summaryPath = path.join(MON_DIR, 'captures', date, '_capture-summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify(report, null, 2));
  console.log(`Done: captured=${report.captured} blocked=${report.blocked} errors=${report.errors}`);
  console.log(`CSV: ${dailyPath}`);
  console.log(`Summary: ${summaryPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
