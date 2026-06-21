#!/usr/bin/env node
/**
 * Verify (or publish) BioNixus LinkedIn company page content via Playwright.
 * Reads credentials from LINKEDIN_EMAIL+LINKEDIN_PASSWORD or LINKEDIN_COMBINED.
 * Never logs credential values.
 */
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '../..');
const outDir = join(repoRoot, 'state/linkedin-verify');
const aboutUrl = 'https://www.linkedin.com/company/bionixus/about/';
const adminEditUrl = 'https://www.linkedin.com/company/bionixus/admin/';

const expectedOpening =
  'BioNixus is a global market research company specializing in healthcare, pharmaceutical, and consumer research across the Middle East, Africa, Europe, and North America. We deliver primary research, KOL mapping, HEOR, and market access strategy for pharmaceutical, biotech, and medical device teams.';

const expectedSpecialties = [
  'Healthcare Market Research',
  'Pharmaceutical Market Research',
  'Market Research Egypt',
  'Market Research UAE',
  'Market Research Saudi Arabia',
  'KOL Mapping',
  'HEOR',
  'Market Access Strategy',
  'Competitive Intelligence',
];

function parseCombined(raw) {
  const text = raw.trim();
  if (!text) throw new Error('Combined value is empty');

  const kvEmail = text.match(/LINKEDIN_EMAIL\s*=\s*(.+)/i);
  const kvPassword = text.match(/LINKEDIN_PASSWORD\s*=\s*(.+)/i);
  if (kvEmail && kvPassword) {
    return { email: kvEmail[1].trim(), password: kvPassword[1].trim() };
  }

  if (text.includes('\n')) {
    const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.length >= 2) {
      const first = lines[0];
      const second = lines.slice(1).join('\n');
      const emailFromKv = first.match(/^(?:LINKEDIN_EMAIL\s*=\s*)?(.+@.+)$/i);
      const passFromKv = second.match(/^(?:LINKEDIN_PASSWORD\s*=\s*)?(.+)$/i);
      if (emailFromKv && passFromKv) {
        return { email: emailFromKv[1].trim(), password: passFromKv[1].trim() };
      }
      if (first.includes('@')) {
        return { email: first.replace(/^LINKEDIN_EMAIL\s*=\s*/i, '').trim(), password: second.replace(/^LINKEDIN_PASSWORD\s*=\s*/i, '').trim() };
      }
    }
  }

  const colon = text.indexOf(':');
  if (colon > 0 && text.includes('@', 0)) {
    return { email: text.slice(0, colon).trim(), password: text.slice(colon + 1).trim() };
  }
  const slash = text.indexOf('/');
  if (slash > 0 && text.includes('@', 0)) {
    return { email: text.slice(0, slash).trim(), password: text.slice(slash + 1).trim() };
  }
  throw new Error('Could not parse LINKEDIN_COMBINED');
}

function resolveCredentials() {
  let email = process.env.LINKEDIN_EMAIL?.trim();
  let password = process.env.LINKEDIN_PASSWORD?.trim();
  if (email && password) return { email, password };
  if (process.env.LINKEDIN_COMBINED) return parseCombined(process.env.LINKEDIN_COMBINED);
  throw new Error('Missing LinkedIn credentials (LINKEDIN_EMAIL+LINKEDIN_PASSWORD or LINKEDIN_COMBINED)');
}

async function main() {
  const { email, password } = resolveCredentials();
  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    locale: 'en-US',
    extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9' },
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();
  const report = {
    timestamp: new Date().toISOString(),
    loginAttempted: true,
    loginSucceeded: false,
    aboutUrl,
    openingLineMatch: false,
    specialtiesMatch: false,
    specialtiesFound: [],
    specialtiesMissing: [],
    screenshotPath: null,
    error: null,
    pageTitle: null,
    finalUrl: null,
  };

  try {
    await page.goto('https://www.linkedin.com/login', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(2000);
    const emailInput = page.locator('input[type="email"]:visible').first();
    const passwordInput = page.locator('input[type="password"]:visible').first();
    await emailInput.waitFor({ state: 'visible', timeout: 20000 });
    await emailInput.fill(email);
    await passwordInput.fill(password);
    await passwordInput.press('Enter');
    await page.waitForTimeout(5000);

    const urlAfterLogin = page.url();
    report.finalUrl = urlAfterLogin;

    if (urlAfterLogin.includes('/checkpoint/') || urlAfterLogin.includes('challenge')) {
      report.error = 'LinkedIn security checkpoint after login — human verification required';
      const screenshotPath = join(outDir, 'linkedin-checkpoint.png');
      await page.screenshot({ path: screenshotPath, fullPage: true });
      report.screenshotPath = screenshotPath;
      await writeFile(join(outDir, 'report.json'), JSON.stringify(report, null, 2));
      console.log(JSON.stringify(report, null, 2));
      process.exitCode = 2;
      return;
    }

    if (urlAfterLogin.includes('/login')) {
      report.error = 'Login failed — still on login page';
      const screenshotPath = join(outDir, 'linkedin-login-failed.png');
      await page.screenshot({ path: screenshotPath, fullPage: true });
      report.screenshotPath = screenshotPath;
      await writeFile(join(outDir, 'report.json'), JSON.stringify(report, null, 2));
      console.log(JSON.stringify(report, null, 2));
      process.exitCode = 2;
      return;
    }

    report.loginSucceeded = true;

    await page.goto(aboutUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(3000);
    report.pageTitle = await page.title();
    report.finalUrl = page.url();

    const bodyText = await page.locator('body').innerText();
    report.openingLineMatch = bodyText.includes(expectedOpening.slice(0, 80));

    for (const specialty of expectedSpecialties) {
      if (bodyText.includes(specialty)) {
        report.specialtiesFound.push(specialty);
      } else {
        report.specialtiesMissing.push(specialty);
      }
    }
    report.specialtiesMatch = report.specialtiesMissing.length === 0;

    const screenshotPath = join(outDir, 'linkedin-about-verified.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    report.screenshotPath = screenshotPath;

    await writeFile(join(outDir, 'report.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    report.error = msg.replace(/fill\(".*?"\)/g, 'fill("[REDACTED]")');
    try {
      const screenshotPath = join(outDir, 'linkedin-error.png');
      await page.screenshot({ path: screenshotPath, fullPage: true });
      report.screenshotPath = screenshotPath;
    } catch {
      /* ignore */
    }
    await writeFile(join(outDir, 'report.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
