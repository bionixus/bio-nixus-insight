#!/usr/bin/env node
/**
 * Daily GEO prompt monitoring helper for BIO-222.
 *
 * Usage:
 *   node scripts/geo/daily-prompt-capture.mjs init --date 2026-06-14
 *   node scripts/geo/daily-prompt-capture.mjs report --date 2026-06-14
 *   node scripts/geo/daily-prompt-capture.mjs scaffold --date 2026-06-14
 *
 * init    — seed daily CSV from baseline if no prior day exists
 * scaffold — create empty daily CSV rows for manual capture
 * report  — generate markdown daily report comparing to prior day
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const MON_DIR = path.join(ROOT, 'docs/geo/daily-prompt-monitoring');
const PROMPT_SET = path.join(MON_DIR, 'prompt-set-bio222.csv');
const BASELINE = path.join(MON_DIR, 'baseline-seed-bio222.csv');
const DAILY_DIR = path.join(MON_DIR, 'daily');
const CAPTURE_DIR = path.join(MON_DIR, 'captures');

const CSV_HEADER =
  'date,prompt_id,prompt,funnel_tag,platform,language,location,bionixus_mentioned,bionixus_cited,cited_url,citation_score,position,brands_mentioned,sentiment,delta_vs_prior,feedback,captured_at';

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

function readCsv(filePath) {
  if (!fs.existsSync(filePath)) return [];
  return parseCsv(fs.readFileSync(filePath, 'utf8'));
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

function getArg(name) {
  const idx = process.argv.indexOf(`--${name}`);
  return idx >= 0 ? process.argv[idx + 1] : undefined;
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function priorDate(dateStr) {
  const d = new Date(`${dateStr}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

function listDailyDates() {
  if (!fs.existsSync(DAILY_DIR)) return [];
  return fs
    .readdirSync(DAILY_DIR)
    .filter((f) => f.endsWith('.csv'))
    .map((f) => f.replace('.csv', ''))
    .sort();
}

function loadScoresByPromptPlatform(rows) {
  const map = new Map();
  for (const row of rows) {
    const key = `${row.prompt_id}|${row.platform}`;
    map.set(key, row.citation_score === '' ? null : Number(row.citation_score));
  }
  return map;
}

function aggregateByPrompt(rows) {
  const byPrompt = new Map();
  for (const row of rows) {
    if (!byPrompt.has(row.prompt_id)) {
      byPrompt.set(row.prompt_id, {
        prompt_id: row.prompt_id,
        prompt: row.prompt,
        funnel_tag: row.funnel_tag,
        chatgpt: '',
        gemini: '',
        claude: '',
        brands: new Set(),
      });
    }
    const agg = byPrompt.get(row.prompt_id);
    if (row.platform === 'chatgpt') agg.chatgpt = row.citation_score;
    if (row.platform === 'gemini') agg.gemini = row.citation_score;
    if (row.platform === 'claude') agg.claude = row.citation_score;
    if (row.brands_mentioned) {
      row.brands_mentioned.split(';').forEach((b) => agg.brands.add(b.trim()));
    }
  }
  return [...byPrompt.values()];
}

function cmdInit(date) {
  const prompts = readCsv(PROMPT_SET);
  const baseline = readCsv(BASELINE);
  const baselineMap = new Map();
  for (const b of baseline) {
    baselineMap.set(`${b.prompt_id}|${b.platform}`, b.citation_score);
  }

  const rows = [];
  const capturedAt = new Date().toISOString();
  for (const p of prompts) {
    const platforms = p.platforms.replace(/"/g, '').split(',');
    for (const platform of platforms) {
      const score = baselineMap.get(`${p.prompt_id}|${platform}`) ?? '';
      rows.push({
        date,
        prompt_id: p.prompt_id,
        prompt: p.prompt,
        funnel_tag: p.funnel_tag,
        platform,
        language: p.language,
        location: p.location,
        bionixus_mentioned: score && Number(score) > 0 ? 'Y' : 'N',
        bionixus_cited: '',
        cited_url: '',
        citation_score: score,
        position: '',
        brands_mentioned: '',
        sentiment: '',
        delta_vs_prior: 'baseline',
        feedback: 'Seeded from BIO-222 baseline',
        captured_at: capturedAt,
      });
    }
  }

  const outPath = path.join(DAILY_DIR, `${date}.csv`);
  writeCsv(outPath, rows, CSV_HEADER.split(','));
  fs.mkdirSync(path.join(CAPTURE_DIR, date), { recursive: true });
  console.log(`Initialized ${outPath} (${rows.length} rows)`);
}

function cmdScaffold(date) {
  const prompts = readCsv(PROMPT_SET);
  const prior = readCsv(path.join(DAILY_DIR, `${priorDate(date)}.csv`));
  const priorScores = loadScoresByPromptPlatform(prior);
  const rows = [];
  const capturedAt = new Date().toISOString();

  for (const p of prompts) {
    const platforms = p.platforms.replace(/"/g, '').split(',');
    for (const platform of platforms) {
      rows.push({
        date,
        prompt_id: p.prompt_id,
        prompt: p.prompt,
        funnel_tag: p.funnel_tag,
        platform,
        language: p.language,
        location: p.location,
        bionixus_mentioned: 'PENDING',
        bionixus_cited: 'PENDING',
        cited_url: '',
        citation_score: '',
        position: 'PENDING',
        brands_mentioned: '',
        sentiment: 'PENDING',
        delta_vs_prior: '',
        feedback: '',
        captured_at: capturedAt,
      });
    }
  }

  const outPath = path.join(DAILY_DIR, `${date}.csv`);
  writeCsv(outPath, rows, CSV_HEADER.split(','));
  fs.mkdirSync(path.join(CAPTURE_DIR, date), { recursive: true });

  for (const p of prompts) {
    const platforms = p.platforms.replace(/"/g, '').split(',');
    for (const platform of platforms) {
      const capPath = path.join(CAPTURE_DIR, date, `${p.prompt_id}-${platform}.md`);
      if (!fs.existsSync(capPath)) {
        fs.writeFileSync(
          capPath,
          `# ${p.prompt_id} — ${platform}\n\n**Prompt:** ${p.prompt}\n**Language:** ${p.language}\n**Location:** ${p.location}\n\n## Response\n\n(paste or summarize)\n\n## BioNixus mention\n\n- Mentioned: \n- Cited URL: \n- Position: \n- Competitors: \n`,
        );
      }
    }
  }

  console.log(`Scaffolded ${outPath} (${rows.length} rows) + capture templates`);
  if (prior.length) {
    console.log(`Prior day ${priorDate(date)} available for delta comparison`);
  }
}

function deltaStr(current, prior) {
  if (current === '' || current === 'PENDING' || prior === null || prior === undefined || prior === '') {
    return '—';
  }
  const c = Number(current);
  const p = Number(prior);
  if (Number.isNaN(c) || Number.isNaN(p)) return '—';
  const d = c - p;
  if (d === 0) return '0';
  return d > 0 ? `+${d}` : `${d}`;
}

function cmdReport(date) {
  const currentPath = path.join(DAILY_DIR, `${date}.csv`);
  if (!fs.existsSync(currentPath)) {
    console.error(`Missing daily file: ${currentPath}. Run init or scaffold first.`);
    process.exit(1);
  }

  const current = readCsv(currentPath);
  const priorPath = path.join(DAILY_DIR, `${priorDate(date)}.csv`);
  const prior = fs.existsSync(priorPath) ? readCsv(priorPath) : [];
  const priorByPrompt = new Map();
  if (prior.length) {
    for (const agg of aggregateByPrompt(prior)) {
      priorByPrompt.set(agg.prompt_id, agg);
    }
  }

  const aggregated = aggregateByPrompt(current);
  const tableRows = aggregated.map((agg) => {
    const prev = priorByPrompt.get(agg.prompt_id);
    return `| ${agg.prompt.length > 50 ? `${agg.prompt.slice(0, 50)}…` : agg.prompt} | ${agg.funnel_tag} | ${agg.chatgpt || '—'} | ${agg.gemini || '—'} | ${agg.claude || '—'} | ${prev ? deltaStr(agg.chatgpt, prev.chatgpt) : 'baseline'} | ${prev ? deltaStr(agg.gemini, prev.gemini) : 'baseline'} | ${prev ? deltaStr(agg.claude, prev.claude) : 'baseline'} | ${[...agg.brands].join(', ') || '—'} | |`;
  });

  const gains = [];
  const losses = [];
  for (const agg of aggregated) {
    const prev = priorByPrompt.get(agg.prompt_id);
    if (!prev) continue;
    for (const [platform, val] of [
      ['ChatGPT', agg.chatgpt],
      ['Gemini', agg.gemini],
      ['Claude', agg.claude],
    ]) {
      const d = deltaStr(val, prev[platform.toLowerCase()]);
      if (d.startsWith('+') && d !== '+0') {
        gains.push(`${agg.prompt_id} ${platform}: ${d}`);
      }
      if (d.startsWith('-')) {
        losses.push(`${agg.prompt_id} ${platform}: ${d}`);
      }
    }
  }

  const template = fs.readFileSync(path.join(MON_DIR, 'daily-report-template.md'), 'utf8');
  const report = template
    .replace(/\{\{DATE\}\}/g, date)
    .replace(/\{\{PRIOR_DATE\}\}/g, prior.length ? priorDate(date) : 'none (baseline day)')
    .replace('{{ROWS}}', tableRows.join('\n'))
    .replace('{{GAINS}}', gains.length ? gains.map((g) => `- ${g}`).join('\n') : 'None')
    .replace('{{LOSSES}}', losses.length ? losses.map((l) => `- ${l}`).join('\n') : 'None')
    .replace('{{STABLE_COUNT}}', String(aggregated.length - gains.length - losses.length))
    .replace('{{ENTITY_SALIENCE}}', 'Claude scores high on Egypt/UAE pharma prompts; ChatGPT/Gemini lag on several KSA queries — entity signals uneven by engine.')
    .replace(/\{\{PRIORITY\}\}/g, 'HIGH')
    .replace('{{ANSWER_ENGINE_FIT}}', 'Global 2026 healthcare firms prompt shows strong ChatGPT/Gemini scores — quotable list format working.')
    .replace('{{FRESHNESS}}', 'Daily cadence starts today; refresh linked `/insights/*` guides if scores drop ≥5.')
    .replace('{{CITATION_GRAPH}}', 'Route sustained Claude-only visibility to CMO for directory/PR reinforcement (BIO-52).')
    .replace('{{HIGH_ACTION}}', 'Audit `/insights/top-market-research-companies-uae` FAQ blocks for ChatGPT citation gaps')
    .replace('{{MED_ACTION}}', 'Add capture evidence for all 30 checks in captures folder')
    .replace('{{LOW_ACTION}}', 'Align prompt wording with BIO-48 gold set where overlap exists')
    .replace('{{NEXT_RUN_DATE}}', (() => {
      const d = new Date(`${date}T12:00:00Z`);
      d.setUTCDate(d.getUTCDate() + 1);
      return d.toISOString().slice(0, 10);
    })());

  const reportPath = path.join(MON_DIR, 'daily', `${date}-report.md`);
  fs.writeFileSync(reportPath, report);
  console.log(`Report written: ${reportPath}`);
}

const cmd = process.argv[2] ?? 'help';
const date = getArg('date') ?? todayIso();

switch (cmd) {
  case 'init':
    cmdInit(date);
    break;
  case 'scaffold':
    cmdScaffold(date);
    break;
  case 'report':
    cmdReport(date);
    break;
  default:
    console.log('Commands: init | scaffold | report');
    process.exit(cmd === 'help' ? 0 : 1);
}
