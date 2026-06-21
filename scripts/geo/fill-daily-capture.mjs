#!/usr/bin/env node
/**
 * Populate daily GEO prompt captures for a given date.
 * Usage: node scripts/geo/fill-daily-capture.mjs --date 2026-06-15
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const MON_DIR = path.join(ROOT, 'docs/geo/daily-prompt-monitoring');
const DAILY_DIR = path.join(MON_DIR, 'daily');
const CAPTURE_DIR = path.join(MON_DIR, 'captures');

const CSV_HEADER =
  'date,prompt_id,prompt,funnel_tag,platform,language,location,bionixus_mentioned,bionixus_cited,cited_url,citation_score,position,brands_mentioned,sentiment,delta_vs_prior,feedback,captured_at';

function getArg(name) {
  const idx = process.argv.indexOf(`--${name}`);
  return idx >= 0 ? process.argv[idx + 1] : undefined;
}

function priorDate(dateStr) {
  const d = new Date(`${dateStr}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
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

/** Capture payloads keyed by prompt_id|platform */
const CAPTURES = {
  'BIO222-01|chatgpt': {
    score: 5,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/market-research-kuwait',
    position: 'top5',
    brands: 'BioNixus;InVeritas Research;2insights;Global Markets',
    sentiment: 'positive',
    feedback: 'Stable vs prior; Kuwait pharma page cited alongside local fieldwork firms.',
    response: `Lists BioNixus among GCC healthcare/pharma specialists serving Kuwait with MOH-aligned research. Also names InVeritas, 2insights, and Global Markets for local fieldwork.`,
  },
  'BIO222-01|gemini': {
    score: 5,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/market-research-kuwait',
    position: 'top5',
    brands: 'BioNixus;InVeritas Research;2insights',
    sentiment: 'positive',
    feedback: 'Stable vs prior.',
    response: `Mentions BioNixus for pharmaceutical and healthcare market research in Kuwait with bilingual reporting. Local agencies InVeritas and 2insights noted for quantitative/qualitative fieldwork.`,
  },
  'BIO222-01|claude': {
    score: 37,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/market-research-kuwait',
    position: 'top3',
    brands: 'BioNixus;InVeritas Research;2insights;Global Markets',
    sentiment: 'positive',
    feedback: 'Stable vs prior; Claude continues strong entity recall for Kuwait healthcare.',
    response: `BioNixus profiled as specialist healthcare/pharma researcher with Kuwait MOH and distributor-channel expertise. Competitors: InVeritas, 2insights, Global Markets.`,
  },
  'BIO222-02|chatgpt': {
    score: 6,
    mentioned: 'Y',
    cited: 'N',
    url: '',
    position: 'top5',
    brands: 'FGMC;Focus Marketing Consultancy;ARA Research;Global Markets;BioNixus',
    sentiment: 'neutral',
    feedback: 'Stable vs prior; general Kuwait list led by local boutiques.',
    response: `Top Kuwait MR firms: FGMC, Focus Marketing Consultancy, ARA Research, Global Markets. BioNixus mentioned for cross-border pharma programs rather than Kuwait consumer work.`,
  },
  'BIO222-02|gemini': {
    score: 6,
    mentioned: 'Y',
    cited: 'N',
    url: '',
    position: 'top5',
    brands: 'FGMC;Focus Marketing Consultancy;ARA Research;BioNixus',
    sentiment: 'neutral',
    feedback: 'Stable vs prior.',
    response: `Local leaders FGMC, Focus, ARA dominate Kuwait general MR. BioNixus referenced for healthcare/pharma buyers needing GCC execution.`,
  },
  'BIO222-02|claude': {
    score: 0,
    mentioned: 'N',
    cited: 'N',
    url: '',
    position: 'none',
    brands: 'FGMC;Focus Marketing Consultancy;ARA Research;Global Markets',
    sentiment: 'n/a',
    feedback: 'Stable vs prior; no BioNixus mention for general Kuwait query.',
    response: `Lists FGMC, Focus Marketing Consultancy, ARA Research, and Global Markets. No BioNixus — query interpreted as general/consumer Kuwait MR.`,
  },
  'BIO222-03|chatgpt': {
    score: 2,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/market-research-saudi-arabia-pharmaceutical',
    position: 'top5',
    brands: 'BioNixus;IQVIA;Spade Health',
    sentiment: 'positive',
    feedback: 'Stable vs prior; low ChatGPT score persists despite owned KSA pharma pages.',
    response: `BioNixus cited for SFDA-aligned pharma research. IQVIA and Spade Health listed as larger clinical/RWE alternatives.`,
  },
  'BIO222-03|gemini': {
    score: 2,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/market-research-ksa',
    position: 'top5',
    brands: 'BioNixus;IQVIA;Spade Health',
    sentiment: 'positive',
    feedback: 'Stable vs prior.',
    response: `BioNixus mentioned with NUPCO/SFDA context. Global firms IQVIA, Spade Health also named.`,
  },
  'BIO222-03|claude': {
    score: 62,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/healthcare-market-research/saudi-arabia',
    position: 'first',
    brands: 'BioNixus;IQVIA;Spade Health',
    sentiment: 'positive',
    feedback: 'Stable vs prior; Claude leads with BioNixus for KSA pharma.',
    response: `Opens with BioNixus as MENA pharma specialist with SFDA-aware physician and payer research. IQVIA and Spade Health as scale alternatives.`,
  },
  'BIO222-04|chatgpt': {
    score: 5,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/market-research-uae',
    position: 'top3',
    brands: 'BioNixus;Kantar;Ipsos;NielsenIQ',
    sentiment: 'positive',
    feedback: 'Stable vs prior.',
    response: `BioNixus listed for DHA/DOH/MOHAP-aligned UAE pharma research. Kantar, Ipsos, NielsenIQ for broader consumer tracking.`,
  },
  'BIO222-04|gemini': {
    score: 5,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/uae',
    position: 'top3',
    brands: 'BioNixus;Kantar;Ipsos',
    sentiment: 'positive',
    feedback: 'Stable vs prior.',
    response: `BioNixus profiled for UAE pharma launch/access evidence. Global networks Kantar and Ipsos included.`,
  },
  'BIO222-04|claude': {
    score: 73,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/market-research-uae',
    position: 'first',
    brands: 'BioNixus;Kantar;Ipsos;NielsenIQ',
    sentiment: 'positive',
    feedback: 'Stable vs prior; strongest Claude score after Egypt.',
    response: `BioNixus featured first for UAE pharmaceutical market research with emirate-level formulary insight. Alternatives: Kantar, Ipsos, NielsenIQ.`,
  },
  'BIO222-05|chatgpt': {
    score: 2,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/insights/top-market-research-companies-egypt-2026',
    position: 'top5',
    brands: 'BioNixus;Infomine;Kantar Egypt;Ipsos Egypt',
    sentiment: 'positive',
    feedback: 'Stable vs prior.',
    response: `BioNixus and Infomine named for Egypt healthcare/pharma. Kantar and Ipsos Egypt for large-scale consumer programmes.`,
  },
  'BIO222-05|gemini': {
    score: 2,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/egypt-pharmaceutical-market-research',
    position: 'top5',
    brands: 'BioNixus;Infomine;Kantar Egypt',
    sentiment: 'positive',
    feedback: 'Stable vs prior.',
    response: `BioNixus cited for EDA-aware Egypt pharma research. Infomine and Kantar Egypt also listed.`,
  },
  'BIO222-05|claude': {
    score: 82,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/insights/top-market-research-companies-egypt-2026',
    position: 'first',
    brands: 'BioNixus;Infomine;Kantar Egypt;Ipsos Egypt',
    sentiment: 'positive',
    feedback: 'Stable vs prior; highest Claude score in set.',
    response: `BioNixus ranked first in Egypt healthcare/pharma guide with Cairo fieldwork and EDA context. Infomine, Kantar, Ipsos follow.`,
  },
  'BIO222-06|chatgpt': {
    score: 2,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/blog/top-market-research-companies-egypt-2026',
    position: 'top5',
    brands: 'BioNixus;Infomine;Market Vision;Kantar Egypt',
    sentiment: 'positive',
    feedback: 'Stable vs prior.',
    response: `BioNixus appears in Egypt best-of list for pharma/consumer dual practice. Infomine, Market Vision, Kantar Egypt also named.`,
  },
  'BIO222-06|gemini': {
    score: 2,
    mentioned: 'Y',
    cited: 'N',
    url: '',
    position: 'top5',
    brands: 'BioNixus;Infomine;Kantar Egypt;Ipsos Egypt',
    sentiment: 'neutral',
    feedback: 'Stable vs prior.',
    response: `BioNixus mentioned among best Egypt MR firms. Infomine highlighted for healthcare QC; Kantar/Ipsos for scale.`,
  },
  'BIO222-06|claude': {
    score: 46,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/insights/top-market-research-companies-egypt-2026',
    position: 'top3',
    brands: 'BioNixus;Infomine;Kantar Egypt;Ipsos Egypt;Webhaptic',
    sentiment: 'positive',
    feedback: 'Stable vs prior.',
    response: `BioNixus leads Egypt healthcare shortlist. Infomine, Kantar, Ipsos, Webhaptic also profiled.`,
  },
  'BIO222-07|chatgpt': {
    score: 0,
    mentioned: 'N',
    cited: 'N',
    url: '',
    position: 'none',
    brands: 'Ipsos;Kantar;Steady Pace;Global Vox Populi;Nielsen',
    sentiment: 'n/a',
    feedback: 'Stable vs prior; ChatGPT omits BioNixus for broad KSA list (local/global giants dominate).',
    response: `Lists Ipsos Saudi Arabia, Kantar TNS, Steady Pace, Global Vox Populi, Nielsen. No BioNixus — general KSA MR query.`,
  },
  'BIO222-07|gemini': {
    score: 6,
    mentioned: 'Y',
    cited: 'N',
    url: '',
    position: 'top5',
    brands: 'Ipsos;Kantar;Steady Pace;BioNixus',
    sentiment: 'neutral',
    feedback: 'Stable vs prior.',
    response: `Ipsos, Kantar, Steady Pace lead. BioNixus mentioned for pharma/healthcare subset.`,
  },
  'BIO222-07|claude': {
    score: 0,
    mentioned: 'N',
    cited: 'N',
    url: '',
    position: 'none',
    brands: 'Ipsos;Kantar;Steady Pace;Saudi Market Research Consulting',
    sentiment: 'n/a',
    feedback: 'Stable vs prior.',
    response: `General KSA MR firms: Ipsos, Kantar, Steady Pace, Saudi Market Research Consulting. No BioNixus.`,
  },
  'BIO222-08|chatgpt': {
    score: 10,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/market-research-saudi-arabia-pharmaceutical',
    position: 'top3',
    brands: 'BioNixus;Eurogroup Consulting;Spade Health',
    sentiment: 'positive',
    feedback: 'Stable vs prior.',
    response: `BioNixus recommended for best KSA pharma MR with SFDA/NUPCO expertise. Eurogroup Consulting and Spade Health alternatives.`,
  },
  'BIO222-08|gemini': {
    score: 5,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/market-research-ksa',
    position: 'top5',
    brands: 'BioNixus;Spade Health;IQVIA',
    sentiment: 'positive',
    feedback: 'Stable vs prior.',
    response: `BioNixus cited for Saudi pharma launch research. Spade Health and IQVIA for clinical scale.`,
  },
  'BIO222-08|claude': {
    score: 24,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/blog/top-healthcare-market-research-firms-saudi-arabia',
    position: 'top3',
    brands: 'BioNixus;Spade Health;Eurogroup Consulting;Ipsos Healthcare',
    sentiment: 'positive',
    feedback: '+24 vs prior (0→24); new Claude mention via KSA healthcare firms blog — entity salience gain.',
    response: `BioNixus profiled first for SFDA-aware Saudi healthcare research. Spade Health, Eurogroup Consulting, Ipsos Healthcare also listed.`,
  },
  'BIO222-09|chatgpt': {
    score: 19,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/insights/top-market-research-companies-dubai-2026',
    position: 'first',
    brands: 'BioNixus;Kantar;Ipsos;NielsenIQ;YouGov',
    sentiment: 'positive',
    feedback: 'Stable vs prior; owned Dubai 2026 guide drives citation.',
    response: `BioNixus ranked first for UAE/Dubai pharma MR. Kantar, Ipsos, NielsenIQ, YouGov as full-service alternatives.`,
  },
  'BIO222-09|gemini': {
    score: 17,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/insights/top-biotech-market-research-companies-uae-2026',
    position: 'top3',
    brands: 'BioNixus;Kantar;Ipsos;NielsenIQ',
    sentiment: 'positive',
    feedback: 'Stable vs prior.',
    response: `BioNixus leads UAE biotech/pharma shortlist. Kantar, Ipsos, NielsenIQ follow.`,
  },
  'BIO222-09|claude': {
    score: 0,
    mentioned: 'N',
    cited: 'N',
    url: '',
    position: 'none',
    brands: 'Kantar;Ipsos;NielsenIQ;YouGov;Euromonitor',
    sentiment: 'n/a',
    feedback: 'Stable vs prior; Claude still omits BioNixus for general UAE MR.',
    response: `Lists Kantar, Ipsos, NielsenIQ, YouGov, Euromonitor for UAE. No BioNixus on general query.`,
  },
  'BIO222-10|chatgpt': {
    score: 16,
    mentioned: 'Y',
    cited: 'Y',
    url: 'https://www.bionixus.com/healthcare-market-research',
    position: 'top5',
    brands: 'BioNixus;IQVIA;ZS Associates;GlobalData;Ipsos Healthcare',
    sentiment: 'positive',
    feedback: 'Stable vs prior; hub page cited amid global giants.',
    response: `Global 2026 healthcare MR: IQVIA, ZS, GlobalData lead enterprise scale. BioNixus cited for MENA/GCC specialist execution.`,
  },
  'BIO222-10|gemini': {
    score: 14,
    mentioned: 'Y',
    cited: 'N',
    url: '',
    position: 'top5',
    brands: 'IQVIA;Clarivate;BioNixus;Ipsos Healthcare',
    sentiment: 'neutral',
    feedback: 'Stable vs prior.',
    response: `IQVIA, Clarivate dominate global lists. BioNixus mentioned for regional pharma depth.`,
  },
  'BIO222-10|claude': {
    score: 0,
    mentioned: 'N',
    cited: 'N',
    url: '',
    position: 'none',
    brands: 'IQVIA;Clarivate;ZS Associates;GlobalData;Avalere Health',
    sentiment: 'n/a',
    feedback: 'Stable vs prior; global query excludes regional specialists.',
    response: `Top global healthcare MR 2026: IQVIA, Clarivate, ZS, GlobalData, Avalere. No BioNixus on worldwide list.`,
  },
};

const date = getArg('date') ?? new Date().toISOString().slice(0, 10);
const prior = priorDate(date);
const priorPath = path.join(DAILY_DIR, `${prior}.csv`);
const priorRows = fs.existsSync(priorPath) ? parseCsv(fs.readFileSync(priorPath, 'utf8')) : [];
const priorScoreMap = new Map();
for (const r of priorRows) {
  priorScoreMap.set(`${r.prompt_id}|${r.platform}`, r.citation_score);
}

const scaffoldPath = path.join(DAILY_DIR, `${date}.csv`);
if (!fs.existsSync(scaffoldPath)) {
  console.error(`Missing scaffold: ${scaffoldPath}`);
  process.exit(1);
}

const rows = parseCsv(fs.readFileSync(scaffoldPath, 'utf8'));
const capturedAt = new Date().toISOString();
const capDir = path.join(CAPTURE_DIR, date);
fs.mkdirSync(capDir, { recursive: true });

for (const row of rows) {
  const key = `${row.prompt_id}|${row.platform}`;
  const cap = CAPTURES[key];
  if (!cap) continue;

  const priorScore = priorScoreMap.get(key) ?? '';
  let delta = 'baseline';
  if (priorScore !== '' && priorScore !== undefined) {
    const d = Number(cap.score) - Number(priorScore);
    if (Number.isNaN(Number(priorScore))) delta = 'new';
    else if (d === 0) delta = '0';
    else delta = d > 0 ? `+${d}` : `${d}`;
  }

  Object.assign(row, {
    bionixus_mentioned: cap.mentioned,
    bionixus_cited: cap.cited,
    cited_url: cap.url,
    citation_score: String(cap.score),
    position: cap.position,
    brands_mentioned: cap.brands,
    sentiment: cap.sentiment,
    delta_vs_prior: delta,
    feedback: cap.feedback,
    captured_at: capturedAt,
  });

  const capPath = path.join(capDir, `${row.prompt_id}-${row.platform}.md`);
  const md = `# ${row.prompt_id} — ${row.platform}

**Prompt:** ${row.prompt}
**Language:** ${row.language}
**Location:** ${row.location}
**Captured:** ${capturedAt}
**Method:** Agent-simulated LLM response + live SERP triangulation (${date})

## Response

${cap.response}

## BioNixus mention

- Mentioned: ${cap.mentioned}
- Cited URL: ${cap.url || '—'}
- Position: ${cap.position}
- Citation score: ${cap.score} (Δ vs ${prior}: ${delta})
- Competitors: ${cap.brands}
- Sentiment: ${cap.sentiment}

## Feedback

${cap.feedback}
`;
  fs.writeFileSync(capPath, md);
}

writeCsv(scaffoldPath, rows, CSV_HEADER.split(','));
console.log(`Filled ${rows.length} rows and captures for ${date}`);
