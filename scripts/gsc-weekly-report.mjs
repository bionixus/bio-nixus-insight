#!/usr/bin/env node
/**
 * Weekly GSC + leads report generator.
 *
 * Reads GSC CSV exports from data/gsc/current-week/ and data/gsc/previous-week/,
 * plus (if present) a leads CSV/JSON, and writes a one-page markdown report to
 * reports/weekly-report-<date>.md.
 *
 * INPUT CONVENTION (place exported files exactly here — filenames matter):
 *   data/gsc/current-week/Chart.csv     — GSC Performance report, grouped by date
 *                                          ("Chart.csv" in the export zip; a file
 *                                          literally named "Dates.csv" also works
 *                                          if you rename it)
 *   data/gsc/current-week/Queries.csv   — GSC Performance report grouped by query
 *   data/gsc/current-week/Pages.csv     — GSC Performance report grouped by page
 *   data/gsc/current-week/Countries.csv — optional; enables CTR excl US slice
 *   data/gsc/current-week/Devices.csv   — optional; enables desktop/mobile mix
 *   data/gsc/previous-week/Chart.csv    — same files for the prior comparable
 *   data/gsc/previous-week/Queries.csv     week (same day-count date range, shifted
 *   data/gsc/previous-week/Pages.csv       back 7 days)
 *
 *   data/leads/leads.csv (optional)     — one row per submission, expected columns
 *                                          (case-insensitive, order-independent):
 *                                          date, source_page, budget, timeline
 *                                          If this file is absent, the leads section
 *                                          of the report is explicitly marked as
 *                                          unavailable rather than estimated.
 *
 * Targets (edit here if they change): 15,000 impressions/day, 450 clicks/day,
 * 3% CTR, average position 5.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const GSC_DIR = path.join(root, 'data', 'gsc');
const LEADS_CSV = path.join(root, 'data', 'leads', 'leads.csv');
const REPORTS_DIR = path.join(root, 'reports');

const TARGETS = {
  impressionsPerDay: 15000,
  clicksPerDay: 450,
  ctrPct: 3.0,
  position: 5,
};

/** Qualifies as a qualified lead if budget >= $20K OR timeline < 3 months. */
function isQualifiedLead(row) {
  const budget = parseBudget(row.budget);
  const timelineMonths = parseTimelineMonths(row.timeline);
  const budgetQualifies = budget !== null && budget >= 20000;
  const timelineQualifies = timelineMonths !== null && timelineMonths < 3;
  return budgetQualifies || timelineQualifies;
}

function parseBudget(raw) {
  if (raw == null) return null;
  const num = Number(String(raw).replace(/[^0-9.]/g, ''));
  return Number.isFinite(num) ? num : null;
}

function parseTimelineMonths(raw) {
  if (raw == null) return null;
  const s = String(raw).toLowerCase();
  const num = Number(s.replace(/[^0-9.]/g, ''));
  if (!Number.isFinite(num)) return null;
  if (s.includes('week')) return num / 4.345;
  if (s.includes('year')) return num * 12;
  return num; // assume months
}

/** Minimal CSV parser: handles quoted fields with commas, standard GSC export format. */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  // Strip BOM if present (GSC exports are UTF-8 with BOM).
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else { inQuotes = false; }
      } else field += c;
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = [];
    } else field += c;
  }
  if (field !== '' || row.length > 0) { row.push(field); rows.push(row); }
  if (rows.length === 0) return [];
  const headers = rows[0].map((h) => h.trim());
  return rows.slice(1).map((r) => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = (r[i] ?? '').trim(); });
    return obj;
  });
}

function readCsvIfExists(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return parseCsv(fs.readFileSync(filePath, 'utf8'));
}

/** GSC's own export zip actually names the by-date file "Chart.csv", not "Dates.csv" — accept either. */
function readDatesCsv(weekDir) {
  return readCsvIfExists(path.join(weekDir, 'Dates.csv')) || readCsvIfExists(path.join(weekDir, 'Chart.csv'));
}

function pctToNumber(raw) {
  if (raw == null) return null;
  const n = Number(String(raw).replace('%', '').trim());
  return Number.isFinite(n) ? n : null;
}

function numOrNull(raw) {
  if (raw == null || raw === '') return null;
  const n = Number(String(raw).replace(/,/g, ''));
  return Number.isFinite(n) ? n : null;
}

/** GSC export column names vary slightly by locale/date; try common variants. */
function pick(row, candidates) {
  for (const c of candidates) {
    if (row[c] !== undefined) return row[c];
  }
  return undefined;
}

/** Some GSC query strings contain a literal embedded newline (valid CSV, breaks markdown tables). */
function cleanText(raw) {
  if (raw == null) return raw;
  return String(raw).replace(/\s+/g, ' ').trim();
}

function normalizeDatesRows(rows) {
  if (!rows) return null;
  return rows
    .map((r) => ({
      date: pick(r, ['Date']),
      clicks: numOrNull(pick(r, ['Clicks'])),
      impressions: numOrNull(pick(r, ['Impressions'])),
      ctr: pctToNumber(pick(r, ['CTR'])),
      position: numOrNull(pick(r, ['Position', 'Avg. Pos', 'Average Position'])),
    }))
    .filter((r) => r.date);
}

function normalizeQueryRows(rows) {
  if (!rows) return null;
  return rows
    .map((r) => ({
      query: cleanText(pick(r, ['Top queries', 'Query', 'Queries'])),
      clicks: numOrNull(pick(r, ['Clicks'])),
      impressions: numOrNull(pick(r, ['Impressions'])),
      ctr: pctToNumber(pick(r, ['CTR'])),
      position: numOrNull(pick(r, ['Position', 'Avg. Pos', 'Average Position'])),
    }))
    .filter((r) => r.query);
}

function normalizePageRows(rows) {
  if (!rows) return null;
  return rows
    .map((r) => ({
      page: cleanText(pick(r, ['Top pages', 'Page', 'Pages'])),
      clicks: numOrNull(pick(r, ['Clicks'])),
      impressions: numOrNull(pick(r, ['Impressions'])),
      ctr: pctToNumber(pick(r, ['CTR'])),
      position: numOrNull(pick(r, ['Position', 'Avg. Pos', 'Average Position'])),
    }))
    .filter((r) => r.page);
}

function normalizeCountryRows(rows) {
  if (!rows) return null;
  return rows
    .map((r) => ({
      country: cleanText(pick(r, ['Country', 'Countries', 'Top countries'])),
      clicks: numOrNull(pick(r, ['Clicks'])),
      impressions: numOrNull(pick(r, ['Impressions'])),
      ctr: pctToNumber(pick(r, ['CTR'])),
      position: numOrNull(pick(r, ['Position', 'Avg. Pos', 'Average Position'])),
    }))
    .filter((r) => r.country);
}

function normalizeDeviceRows(rows) {
  if (!rows) return null;
  return rows
    .map((r) => ({
      device: cleanText(pick(r, ['Device', 'Devices'])),
      clicks: numOrNull(pick(r, ['Clicks'])),
      impressions: numOrNull(pick(r, ['Impressions'])),
      ctr: pctToNumber(pick(r, ['CTR'])),
      position: numOrNull(pick(r, ['Position', 'Avg. Pos', 'Average Position'])),
    }))
    .filter((r) => r.device);
}

function aggregateCtr(rows) {
  if (!rows || rows.length === 0) return null;
  const clicks = rows.reduce((s, r) => s + (r.clicks || 0), 0);
  const impressions = rows.reduce((s, r) => s + (r.impressions || 0), 0);
  if (impressions === 0) return null;
  return { clicks, impressions, ctrPct: (clicks / impressions) * 100 };
}

function pagePathFromUrl(url) {
  try {
    const u = new URL(url);
    return u.pathname.replace(/\/+$/, '') || '/';
  } catch {
    return null;
  }
}

function computeMixMetrics({ currentPages, currentCountries, currentDevices, siteCtrPct }) {
  if (!currentPages && !currentCountries && !currentDevices) return null;

  const metrics = {};

  if (currentCountries) {
    const us = currentCountries.find((r) => r.country === 'United States');
    const nonUs = currentCountries.filter((r) => r.country !== 'United States');
    metrics.exclUs = aggregateCtr(nonUs);
    metrics.us = us
      ? { clicks: us.clicks, impressions: us.impressions, ctrPct: us.ctr, sharePct: null }
      : null;
    const totalCountryImpr = currentCountries.reduce((s, r) => s + (r.impressions || 0), 0);
    if (metrics.us && totalCountryImpr > 0) {
      metrics.us.sharePct = ((metrics.us.impressions || 0) / totalCountryImpr) * 100;
    }
  }

  if (currentDevices) {
    const desktop = currentDevices.find((r) => /desktop/i.test(r.device));
    const mobile = currentDevices.find((r) => /mobile/i.test(r.device));
    const totalDeviceImpr = currentDevices.reduce((s, r) => s + (r.impressions || 0), 0);
    metrics.desktop = desktop
      ? {
          clicks: desktop.clicks,
          impressions: desktop.impressions,
          ctrPct: desktop.ctr,
          sharePct: totalDeviceImpr > 0 ? ((desktop.impressions || 0) / totalDeviceImpr) * 100 : null,
        }
      : null;
    metrics.mobile = mobile
      ? {
          clicks: mobile.clicks,
          impressions: mobile.impressions,
          ctrPct: mobile.ctr,
          sharePct: totalDeviceImpr > 0 ? ((mobile.impressions || 0) / totalDeviceImpr) * 100 : null,
        }
      : null;
  }

  if (currentPages) {
    const deepRank = currentPages.filter((r) => r.position != null && r.position > 40 && (r.impressions || 0) >= 200);
    const shallow = currentPages.filter((r) => !(r.position != null && r.position > 40 && (r.impressions || 0) >= 200));
    metrics.exclDeepRankPages = aggregateCtr(shallow);
    metrics.deepRankPages = aggregateCtr(deepRank);

    const japanDevices = currentPages.filter((r) =>
      pagePathFromUrl(r.page) === '/japan-medical-devices-market-report',
    );
    const gccDevices = currentPages.filter((r) =>
      pagePathFromUrl(r.page) === '/gcc-medical-devices-market-report',
    );
    const withoutJapanGccDevices = currentPages.filter((r) => {
      const p = pagePathFromUrl(r.page);
      return p !== '/japan-medical-devices-market-report' && p !== '/gcc-medical-devices-market-report';
    });
    metrics.exclJapanGccDevices = aggregateCtr(withoutJapanGccDevices);
    metrics.japanDevices = japanDevices[0] || null;
    metrics.gccDevices = gccDevices[0] || null;

    const listiclePages = currentPages.filter((r) => {
      const p = pagePathFromUrl(r.page);
      return p && p.startsWith('/insights/') && /companies|firms|agencies/i.test(p);
    });
    const pharmaCompanyPages = currentPages.filter((r) => {
      const p = pagePathFromUrl(r.page);
      return p && /^\/pharmaceutical-companies-/.test(p);
    });
    const directoryMatrixPages = currentPages.filter((r) => {
      const p = pagePathFromUrl(r.page);
      if (!p) return false;
      return (
        p === '/company-directories' ||
        p.startsWith('/companies-in-') ||
        /^\/(pharmaceutical-companies|medical-device-companies|pharmaceutical-distributors|pharmacy-chains|hospital-groups|biotech-companies|cro-companies|health-insurers|fmcg-companies|retail-companies|real-estate-companies|banks|automotive-distributors|food-beverage-companies|construction-companies|cosmetics-companies|hotel-groups|logistics-companies|manufacturing-companies)(-|$)/.test(
          p,
        )
      );
    });
    metrics.listicleCluster = aggregateCtr(listiclePages);
    metrics.pharmaCompaniesCluster = aggregateCtr(pharmaCompanyPages);
    metrics.directoryMatrixCluster = aggregateCtr(directoryMatrixPages);
  }

  metrics.siteCtrPct = siteCtrPct ?? null;
  return metrics;
}

function weekSummary(datesRows) {
  if (!datesRows || datesRows.length === 0) return null;
  const days = datesRows.length;
  const totalClicks = datesRows.reduce((s, r) => s + (r.clicks || 0), 0);
  const totalImpr = datesRows.reduce((s, r) => s + (r.impressions || 0), 0);
  const avgCtr = totalImpr > 0 ? (totalClicks / totalImpr) * 100 : null;
  // Position should be impression-weighted, not a flat average of daily averages.
  const weightedPositionSum = datesRows.reduce(
    (s, r) => s + (r.position != null && r.impressions ? r.position * r.impressions : 0),
    0,
  );
  const avgPosition = totalImpr > 0 ? weightedPositionSum / totalImpr : null;
  return {
    days,
    clicksPerDay: totalClicks / days,
    impressionsPerDay: totalImpr / days,
    ctrPct: avgCtr,
    avgPosition,
    totalClicks,
    totalImpressions: totalImpr,
  };
}

function vsTarget(value, target, lowerIsBetter = false) {
  if (value == null) return { value, target, delta: null, status: 'no data' };
  const delta = lowerIsBetter ? target - value : value - target;
  const status = delta >= 0 ? 'on/above target' : 'below target';
  return { value, target, delta, status };
}

function topPositionChanges(currentQueries, previousQueries, n = 10) {
  if (!currentQueries || !previousQueries) return null;
  const prevByQuery = new Map(previousQueries.map((r) => [r.query.toLowerCase(), r]));
  const changes = [];
  for (const cur of currentQueries) {
    const prev = prevByQuery.get(cur.query.toLowerCase());
    if (!prev || cur.position == null || prev.position == null) continue;
    // Position: lower number = better rank. Improvement = negative delta.
    const delta = cur.position - prev.position;
    if (delta === 0) continue;
    changes.push({
      query: cur.query,
      previousPosition: prev.position,
      currentPosition: cur.position,
      delta, // negative = improved, positive = declined
    });
  }
  changes.sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));
  return changes.slice(0, n);
}

function top10PageChurn(currentPages, previousPages) {
  if (!currentPages || !previousPages) return null;
  const rank = (rows) =>
    [...rows]
      .filter((r) => r.clicks != null)
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10)
      .map((r) => r.page);
  const curTop10 = rank(currentPages);
  const prevTop10 = rank(previousPages);
  const entered = curTop10.filter((p) => !prevTop10.includes(p));
  const left = prevTop10.filter((p) => !curTop10.includes(p));
  return { entered, left, curTop10, prevTop10 };
}

function ctrFlags(currentQueries) {
  if (!currentQueries) return [];
  return currentQueries
    .filter((r) => r.position != null && r.position <= 10 && r.ctr != null && r.ctr < 1.5 && (r.impressions || 0) >= 10)
    .sort((a, b) => (b.impressions || 0) - (a.impressions || 0));
}

function parseLeads() {
  const rows = readCsvIfExists(LEADS_CSV);
  if (!rows) return null;
  const normalized = rows.map((r) => ({
    date: pick(r, ['date', 'Date']),
    sourcePage: pick(r, ['source_page', 'sourcePage', 'Source Page', 'page']),
    budget: pick(r, ['budget', 'Budget']),
    timeline: pick(r, ['timeline', 'Timeline']),
  }));
  const qualified = normalized.filter(isQualifiedLead);
  const bySource = new Map();
  for (const r of normalized) {
    const key = r.sourcePage || '(unknown)';
    bySource.set(key, (bySource.get(key) || 0) + 1);
  }
  return {
    total: normalized.length,
    qualified: qualified.length,
    bySource: [...bySource.entries()].sort((a, b) => b[1] - a[1]),
  };
}

function fmt(n, digits = 0) {
  if (n == null) return 'n/a';
  return n.toLocaleString('en-US', { maximumFractionDigits: digits, minimumFractionDigits: digits });
}

function fmtDelta(n, digits = 1, suffix = '') {
  if (n == null) return 'n/a';
  const sign = n > 0 ? '+' : '';
  return `${sign}${n.toFixed(digits)}${suffix}`;
}

function main() {
  const currentDates = normalizeDatesRows(readDatesCsv(path.join(GSC_DIR, 'current-week')));
  const previousDates = normalizeDatesRows(readDatesCsv(path.join(GSC_DIR, 'previous-week')));
  const currentQueries = normalizeQueryRows(readCsvIfExists(path.join(GSC_DIR, 'current-week', 'Queries.csv')));
  const previousQueries = normalizeQueryRows(readCsvIfExists(path.join(GSC_DIR, 'previous-week', 'Queries.csv')));
  const currentPages = normalizePageRows(readCsvIfExists(path.join(GSC_DIR, 'current-week', 'Pages.csv')));
  const previousPages = normalizePageRows(readCsvIfExists(path.join(GSC_DIR, 'previous-week', 'Pages.csv')));
  const currentCountries = normalizeCountryRows(readCsvIfExists(path.join(GSC_DIR, 'current-week', 'Countries.csv')));
  const currentDevices = normalizeDeviceRows(readCsvIfExists(path.join(GSC_DIR, 'current-week', 'Devices.csv')));

  if (!currentDates && !currentQueries && !currentPages) {
    console.error(
      `No GSC data found in ${path.join(GSC_DIR, 'current-week')}.\n` +
        'Export Chart.csv, Queries.csv, and Pages.csv from Search Console > Performance and place them there ' +
        '(and the prior week\'s equivalents in data/gsc/previous-week/) before running this script.',
    );
    process.exitCode = 1;
    return;
  }

  const curSummary = weekSummary(currentDates);
  const prevSummary = weekSummary(previousDates);

  const result = {
    generatedAt: new Date().toISOString().slice(0, 10),
    hasCurrentDates: Boolean(currentDates),
    hasPreviousDates: Boolean(previousDates),
    hasCurrentQueries: Boolean(currentQueries),
    hasPreviousQueries: Boolean(previousQueries),
    hasCurrentPages: Boolean(currentPages),
    hasPreviousPages: Boolean(previousPages),
    current: curSummary,
    previous: prevSummary,
    targets: TARGETS,
    vsTargets: curSummary
      ? {
          impressionsPerDay: vsTarget(curSummary.impressionsPerDay, TARGETS.impressionsPerDay),
          clicksPerDay: vsTarget(curSummary.clicksPerDay, TARGETS.clicksPerDay),
          ctrPct: vsTarget(curSummary.ctrPct, TARGETS.ctrPct),
          avgPosition: vsTarget(curSummary.avgPosition, TARGETS.position, true),
        }
      : null,
    vsLastWeek:
      curSummary && prevSummary
        ? {
            impressionsPerDay: curSummary.impressionsPerDay - prevSummary.impressionsPerDay,
            clicksPerDay: curSummary.clicksPerDay - prevSummary.clicksPerDay,
            ctrPct: curSummary.ctrPct - prevSummary.ctrPct,
            avgPosition: curSummary.avgPosition - prevSummary.avgPosition,
          }
        : null,
    topPositionChanges: topPositionChanges(currentQueries, previousQueries),
    top10PageChurn: top10PageChurn(currentPages, previousPages),
    lowCtrPage1Queries: ctrFlags(currentQueries),
    mixMetrics: computeMixMetrics({
      currentPages,
      currentCountries,
      currentDevices,
      siteCtrPct: curSummary?.ctrPct ?? null,
    }),
    leads: parseLeads(),
  };

  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const jsonOut = path.join(REPORTS_DIR, `weekly-report-${result.generatedAt}.data.json`);
  fs.writeFileSync(jsonOut, JSON.stringify(result, null, 2));

  const md = buildMarkdown(result);
  const mdOut = path.join(REPORTS_DIR, `weekly-report-${result.generatedAt}.md`);
  fs.writeFileSync(mdOut, md);

  console.log(`Report written to:\n  ${mdOut}\n  ${jsonOut} (raw data, for the narrative/recommendation pass)`);
}

function buildMarkdown(r) {
  const lines = [];
  lines.push(`# BioNixus Weekly Search & Leads Report — ${r.generatedAt}`, '');

  lines.push('## Traffic vs targets and last week', '');
  if (r.current) {
    const v = r.vsTargets;
    const w = r.vsLastWeek;
    lines.push('| Metric | This week | Target | vs Target | Last week | vs Last Week |');
    lines.push('|---|---|---|---|---|---|');
    lines.push(
      `| Impressions/day | ${fmt(r.current.impressionsPerDay)} | ${fmt(r.targets.impressionsPerDay)} | ${fmtDelta(v.impressionsPerDay.delta, 0)} | ${r.previous ? fmt(r.previous.impressionsPerDay) : 'n/a'} | ${w ? fmtDelta(w.impressionsPerDay, 0) : 'n/a'} |`,
    );
    lines.push(
      `| Clicks/day | ${fmt(r.current.clicksPerDay)} | ${fmt(r.targets.clicksPerDay)} | ${fmtDelta(v.clicksPerDay.delta, 0)} | ${r.previous ? fmt(r.previous.clicksPerDay) : 'n/a'} | ${w ? fmtDelta(w.clicksPerDay, 0) : 'n/a'} |`,
    );
    lines.push(
      `| CTR | ${fmt(r.current.ctrPct, 2)}% | ${fmt(r.targets.ctrPct, 1)}% | ${fmtDelta(v.ctrPct.delta, 2, 'pp')} | ${r.previous ? fmt(r.previous.ctrPct, 2) + '%' : 'n/a'} | ${w ? fmtDelta(w.ctrPct, 2, 'pp') : 'n/a'} |`,
    );
    lines.push(
      `| Avg. position | ${fmt(r.current.avgPosition, 1)} | ${fmt(r.targets.position, 1)} | ${fmtDelta(-v.avgPosition.delta, 1)} | ${r.previous ? fmt(r.previous.avgPosition, 1) : 'n/a'} | ${w ? fmtDelta(-w.avgPosition, 1) : 'n/a'} |`,
    );
    lines.push('', '_Position deltas shown as "vs target/last week": positive = closer to #1 (improved)._', '');
  } else {
    lines.push('_No Chart.csv (or Dates.csv) found for the current week — cannot compute daily traffic metrics._', '');
  }

  lines.push('## CTR mix diagnostics (headline vs structural slices)', '');
  if (r.mixMetrics) {
    const m = r.mixMetrics;
    lines.push('| Slice | Clicks | Impressions | CTR | Notes |', '|---|---|---|---|---|');
    if (m.siteCtrPct != null) {
      lines.push(`| Site (Chart.csv) | — | — | ${fmt(m.siteCtrPct, 2)}% | Headline average |`);
    }
    if (m.exclUs) {
      lines.push(
        `| Excl. United States (Countries.csv) | ${fmt(m.exclUs.clicks)} | ${fmt(m.exclUs.impressions)} | ${fmt(m.exclUs.ctrPct, 2)}% | US share ${m.us?.sharePct != null ? fmt(m.us.sharePct, 1) + '% impr @ ' + fmt(m.us.ctrPct, 2) + '% CTR' : 'see US row'} |`,
      );
    }
    if (m.us) {
      lines.push(
        `| United States only | ${fmt(m.us.clicks)} | ${fmt(m.us.impressions)} | ${fmt(m.us.ctrPct, 2)}% | Largest single-country CTR drag |`,
      );
    }
    if (m.desktop) {
      lines.push(
        `| Desktop | ${fmt(m.desktop.clicks)} | ${fmt(m.desktop.impressions)} | ${fmt(m.desktop.ctrPct, 2)}% | ${m.desktop.sharePct != null ? fmt(m.desktop.sharePct, 0) + '% of device impr' : ''} |`,
      );
    }
    if (m.mobile) {
      lines.push(
        `| Mobile | ${fmt(m.mobile.clicks)} | ${fmt(m.mobile.impressions)} | ${fmt(m.mobile.ctrPct, 2)}% | ${m.mobile.sharePct != null ? fmt(m.mobile.sharePct, 0) + '% of device impr' : ''} |`,
      );
    }
    if (m.deepRankPages) {
      lines.push(
        `| Pages pos >40 (≥200 impr) | ${fmt(m.deepRankPages.clicks)} | ${fmt(m.deepRankPages.impressions)} | ${fmt(m.deepRankPages.ctrPct, 2)}% | Deep-SERP dilution bucket |`,
      );
    }
    if (m.exclDeepRankPages) {
      lines.push(
        `| Excl. deep-rank pages above | ${fmt(m.exclDeepRankPages.clicks)} | ${fmt(m.exclDeepRankPages.impressions)} | ${fmt(m.exclDeepRankPages.ctrPct, 2)}% | Remaining page-level mix |`,
      );
    }
    if (m.japanDevices) {
      lines.push(
        `| /japan-medical-devices-market-report | ${fmt(m.japanDevices.clicks)} | ${fmt(m.japanDevices.impressions)} | ${fmt(m.japanDevices.ctr, 2)}% | Pos ${fmt(m.japanDevices.position, 1)} |`,
      );
    }
    if (m.gccDevices) {
      lines.push(
        `| /gcc-medical-devices-market-report | ${fmt(m.gccDevices.clicks)} | ${fmt(m.gccDevices.impressions)} | ${fmt(m.gccDevices.ctr, 2)}% | Pos ${fmt(m.gccDevices.position, 1)} |`,
      );
    }
    if (m.exclJapanGccDevices) {
      lines.push(
        `| Excl. Japan + GCC device reports | ${fmt(m.exclJapanGccDevices.clicks)} | ${fmt(m.exclJapanGccDevices.impressions)} | ${fmt(m.exclJapanGccDevices.ctrPct, 2)}% | Device-report drag removed |`,
      );
    }
    if (m.listicleCluster) {
      lines.push(
        `| Insights listicle cluster | ${fmt(m.listicleCluster.clicks)} | ${fmt(m.listicleCluster.impressions)} | ${fmt(m.listicleCluster.ctrPct, 2)}% | /insights/* companies/firms URLs |`,
      );
    }
    if (m.pharmaCompaniesCluster) {
      lines.push(
        `| /pharmaceutical-companies-* cluster | ${fmt(m.pharmaCompaniesCluster.clicks)} | ${fmt(m.pharmaCompaniesCluster.impressions)} | ${fmt(m.pharmaCompaniesCluster.ctrPct, 2)}% | Winning directory cluster |`,
      );
    }
    if (m.directoryMatrixCluster) {
      lines.push(
        `| Company-directory matrix | ${fmt(m.directoryMatrixCluster.clicks)} | ${fmt(m.directoryMatrixCluster.impressions)} | ${fmt(m.directoryMatrixCluster.ctrPct, 2)}% | Hubs + entity-country spokes |`,
      );
    }
    lines.push('');
  } else {
    lines.push(
      '_Add Countries.csv and Devices.csv to current-week/ (and Pages.csv) to populate mix diagnostics._',
      '',
    );
  }

  lines.push('## Biggest query position changes (top 10 by magnitude)', '');
  if (r.topPositionChanges) {
    if (r.topPositionChanges.length === 0) {
      lines.push('_No position changes detected between the two weeks' + "' Queries.csv files._", '');
    } else {
      lines.push('| Query | Last week | This week | Change |', '|---|---|---|---|');
      for (const c of r.topPositionChanges) {
        const arrow = c.delta < 0 ? '▲ improved' : '▼ declined';
        lines.push(`| ${c.query} | ${fmt(c.previousPosition, 1)} | ${fmt(c.currentPosition, 1)} | ${arrow} ${fmtDelta(-c.delta, 1)} |`);
      }
      lines.push('');
    }
  } else {
    lines.push('_Need both weeks\' Queries.csv to compute this — missing one or both._', '');
  }

  lines.push('## Pages that entered/left the top 10 (by clicks)', '');
  if (r.top10PageChurn) {
    lines.push('**Entered top 10:**', '');
    lines.push(r.top10PageChurn.entered.length ? r.top10PageChurn.entered.map((p) => `- ${p}`).join('\n') : '_None._');
    lines.push('', '**Left top 10:**', '');
    lines.push(r.top10PageChurn.left.length ? r.top10PageChurn.left.map((p) => `- ${p}`).join('\n') : '_None._');
    lines.push('');
  } else {
    lines.push('_Need both weeks\' Pages.csv to compute this — missing one or both._', '');
  }

  lines.push('## CTR check — page-1 queries under 1.5% CTR', '');
  if (r.lowCtrPage1Queries.length === 0 && r.hasCurrentQueries) {
    lines.push('_None found — every page-1 query is at or above 1.5% CTR this week._', '');
  } else if (r.lowCtrPage1Queries.length > 0) {
    lines.push('| Query | Position | Impressions | CTR | Landing page (fill in) | Suggested test |', '|---|---|---|---|---|---|');
    for (const q of r.lowCtrPage1Queries) {
      lines.push(`| ${q.query} | ${fmt(q.position, 1)} | ${fmt(q.impressions)} | ${fmt(q.ctr, 2)}% | _TODO_ | _Propose new title/meta — see recommendation below_ |`);
    }
    lines.push('', '_Fill in the landing page per query (cross-reference against the site) and draft a specific title/meta test for each before next run._', '');
  } else {
    lines.push('_No Queries.csv for the current week — cannot run this check._', '');
  }

  lines.push('## Leads', '');
  if (r.leads) {
    lines.push(`- Total submissions: ${r.leads.total}`);
    lines.push(`- Qualified (budget ≥ $20K or timeline < 3 months): ${r.leads.qualified}`);
    lines.push('- By source page:');
    for (const [page, count] of r.leads.bySource) lines.push(`  - ${page}: ${count}`);
    lines.push('');
  } else {
    lines.push(
      '_No lead data available. BioNixus\'s qualification/gated-asset forms post directly to Formspree from the ' +
        'browser with no server-side logging, so there is no local record of submissions to read. Provide ' +
        `data/leads/leads.csv (columns: date, source_page, budget, timeline) or connect a real data source ` +
        'before this section can report real numbers — see the chat reply for options._',
      '',
    );
  }

  lines.push('## Company directory matrix (28/90-day gates)', '');
  lines.push(
    'Run `npm run report:directory-gates` after this scorecard. It scores each IndexNow wave against GSC Pages.csv:',
    '',
    '- 14-day: ≥80% of the wave should appear in Pages.csv (indexation signal) before treating the next wave as gated-go.',
    '- 28-day: ≥10 impressions/day early-signal floor.',
    '- 90-day: ≥50 impressions/day and avg position ≤15; **kill/rewrite any spoke still under 10 impressions/day** — do not leave it thin.',
    '- Form: directory `source_page` / `cta_id` leads ≥20/month by day 90.',
    '',
  );

  lines.push('## Next-week priority recommendation', '');
  lines.push(
    '_Fill in manually each run: cross-reference the position-change and CTR-flag data above against the ' +
      'content priority queue (South Korea, China NMPA, GCC IVD, Brazil, US healthcare, Malaysia, GCC ' +
      'biologics, Cairo/Egypt hospitals, HEOR emerging markets, Australia TGA, France/Spain/Germany reports, ' +
      'quarterly flagship refresh) and recommend the item best supported by this week\'s real query/impression ' +
      'movement — do not pick one without the data to back it.',
    '',
  );

  return lines.join('\n');
}

main();
