/**
 * AEO citation tracker.
 *
 * Runs the query matrix against whichever answer engines have API keys present
 * and records, per query: whether BioNixus was named, at what rank in the
 * answer's list of firms, and which bionixus.com URL (if any) was cited.
 *
 * Output is JSON-lines at scripts/aeo/runs/<ISO timestamp>.jsonl so runs can be
 * diffed across phases. Baseline this BEFORE Phase 1 ships or the programme is
 * unfalsifiable.
 *
 * Usage:
 *   node scripts/aeo/track.mjs --label baseline
 *   node scripts/aeo/track.mjs --label post-phase1 --phases 1
 *   node scripts/aeo/track.mjs --engines openai,perplexity --concurrency 2
 *
 * Env keys (each optional; engines without a key are skipped):
 *   OPENAI_API_KEY, ANTHROPIC_API_KEY, PERPLEXITY_API_KEY, GEMINI_API_KEY
 */
import { mkdirSync, appendFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { BRAND_DOMAIN, BRAND_PATTERNS, buildQueryMatrix } from './queries.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const RUNS_DIR = join(__dirname, 'runs');

function parseArgs(argv) {
  const args = { label: 'run', phases: [], engines: null, concurrency: 3, dryRun: false };
  for (let i = 2; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--label') args.label = argv[++i];
    else if (arg === '--phases') args.phases = argv[++i].split(',').map(Number);
    else if (arg === '--engines') args.engines = argv[++i].split(',').map((s) => s.trim());
    else if (arg === '--concurrency') args.concurrency = Number(argv[++i]);
    else if (arg === '--dry-run') args.dryRun = true;
  }
  return args;
}

const PROMPT_SUFFIX =
  ' List the top 5 firms by name, ranked, one per line, and include each firm\'s website URL.';

/* ------------------------------------------------------------------ engines */

const ENGINES = {
  openai: {
    envKey: 'OPENAI_API_KEY',
    async ask(query, apiKey) {
      const res = await fetch('https://api.openai.com/v1/responses', {
        method: 'POST',
        headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({
          model: process.env.AEO_OPENAI_MODEL || 'gpt-4o',
          input: query + PROMPT_SUFFIX,
          tools: [{ type: 'web_search_preview' }],
        }),
      });
      if (!res.ok) throw new Error(`openai ${res.status}: ${await res.text()}`);
      const json = await res.json();
      return (
        json.output_text ??
        (json.output ?? [])
          .flatMap((o) => o.content ?? [])
          .map((c) => c.text ?? '')
          .join('\n')
      );
    },
  },

  anthropic: {
    envKey: 'ANTHROPIC_API_KEY',
    async ask(query, apiKey) {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: process.env.AEO_ANTHROPIC_MODEL || 'claude-sonnet-4-20250514',
          max_tokens: 1024,
          messages: [{ role: 'user', content: query + PROMPT_SUFFIX }],
          tools: [{ type: 'web_search_20250305', name: 'web_search', max_uses: 3 }],
        }),
      });
      if (!res.ok) throw new Error(`anthropic ${res.status}: ${await res.text()}`);
      const json = await res.json();
      return (json.content ?? [])
        .filter((c) => c.type === 'text')
        .map((c) => c.text)
        .join('\n');
    },
  },

  perplexity: {
    envKey: 'PERPLEXITY_API_KEY',
    async ask(query, apiKey) {
      const res = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({
          model: process.env.AEO_PERPLEXITY_MODEL || 'sonar',
          messages: [{ role: 'user', content: query + PROMPT_SUFFIX }],
        }),
      });
      if (!res.ok) throw new Error(`perplexity ${res.status}: ${await res.text()}`);
      const json = await res.json();
      const text = json.choices?.[0]?.message?.content ?? '';
      const citations = (json.citations ?? []).join('\n');
      return `${text}\n${citations}`;
    },
  },

  gemini: {
    envKey: 'GEMINI_API_KEY',
    async ask(query, apiKey) {
      const model = process.env.AEO_GEMINI_MODEL || 'gemini-2.0-flash';
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: query + PROMPT_SUFFIX }] }],
            tools: [{ google_search: {} }],
          }),
        },
      );
      if (!res.ok) throw new Error(`gemini ${res.status}: ${await res.text()}`);
      const json = await res.json();
      return (json.candidates ?? [])
        .flatMap((c) => c.content?.parts ?? [])
        .map((p) => p.text ?? '')
        .join('\n');
    },
  },
};

/* ------------------------------------------------------------------ scoring */

/**
 * Ranks are read from the answer's own ordering: we split into lines, keep those
 * that look like list entries, and find the first one naming the brand.
 */
export function scoreAnswer(text) {
  const named = BRAND_PATTERNS.some((p) => p.test(text));

  const urlMatches = text.match(/https?:\/\/[^\s)\]"'<>]+/g) ?? [];
  const citedUrls = [...new Set(urlMatches.filter((u) => u.includes(BRAND_DOMAIN)))];

  let rank = null;
  if (named) {
    const lines = text
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    const listLines = lines.filter((l) => /^(\d+[.)]|[-*•])\s+/.test(l));
    const pool = listLines.length ? listLines : lines;
    const idx = pool.findIndex((l) => BRAND_PATTERNS.some((p) => p.test(l)));
    if (idx !== -1) {
      const explicit = pool[idx].match(/^(\d+)[.)]/);
      rank = explicit ? Number(explicit[1]) : idx + 1;
    }
  }

  return { named, rank, citedUrls, citedOwnDomain: citedUrls.length > 0 };
}

/* --------------------------------------------------------------------- main */

async function runPool(items, concurrency, worker) {
  const results = [];
  let cursor = 0;
  const runners = Array.from({ length: Math.max(1, concurrency) }, async () => {
    while (cursor < items.length) {
      const idx = cursor++;
      results[idx] = await worker(items[idx], idx);
    }
  });
  await Promise.all(runners);
  return results;
}

async function main() {
  const args = parseArgs(process.argv);
  const matrix = buildQueryMatrix({ phases: args.phases });

  const available = Object.entries(ENGINES)
    .filter(([name]) => !args.engines || args.engines.includes(name))
    .filter(([, cfg]) => Boolean(process.env[cfg.envKey]));

  if (!available.length) {
    console.error(
      '[aeo] No answer-engine API keys found. Set at least one of:\n  ' +
        Object.values(ENGINES)
          .map((e) => e.envKey)
          .join(', ') +
        '\nNothing was recorded — a baseline with no engines would be misleading.',
    );
    process.exit(1);
  }

  const jobs = matrix.flatMap((q) => available.map(([engine, cfg]) => ({ ...q, engine, cfg })));

  console.log(
    `[aeo] label=${args.label} queries=${matrix.length} engines=${available
      .map(([n]) => n)
      .join(',')} total=${jobs.length}`,
  );

  if (args.dryRun) {
    jobs.slice(0, 10).forEach((j) => console.log(`  [${j.engine}] ${j.query}`));
    console.log(`  ...${Math.max(0, jobs.length - 10)} more`);
    return;
  }

  if (!existsSync(RUNS_DIR)) mkdirSync(RUNS_DIR, { recursive: true });
  const startedAt = new Date().toISOString();
  const outfile = join(RUNS_DIR, `${startedAt.replace(/[:.]/g, '-')}_${args.label}.jsonl`);

  let named = 0;
  let cited = 0;
  let failed = 0;

  await runPool(jobs, args.concurrency, async (job) => {
    const record = {
      runLabel: args.label,
      startedAt,
      timestamp: new Date().toISOString(),
      engine: job.engine,
      family: job.family,
      country: job.country,
      phase: job.phase,
      query: job.query,
    };

    try {
      const text = await job.cfg.ask(job.query, process.env[job.cfg.envKey]);
      const score = scoreAnswer(text);
      Object.assign(record, score, { answerChars: text.length, answer: text });
      if (score.named) named += 1;
      if (score.citedOwnDomain) cited += 1;
      console.log(
        `  [${job.engine}] ${score.named ? `NAMED${score.rank ? ` #${score.rank}` : ''}` : 'absent'}` +
          `${score.citedOwnDomain ? ' +cited' : ''} — ${job.query}`,
      );
    } catch (err) {
      failed += 1;
      record.error = String(err.message ?? err);
      console.warn(`  [${job.engine}] ERROR — ${job.query}: ${record.error}`);
    }

    appendFileSync(outfile, `${JSON.stringify(record)}\n`, 'utf8');
    return record;
  });

  const scored = jobs.length - failed;
  console.log(
    `\n[aeo] ${outfile}\n` +
      `  named:  ${named}/${scored} (${scored ? ((named / scored) * 100).toFixed(1) : '0.0'}%)\n` +
      `  cited:  ${cited}/${scored} (${scored ? ((cited / scored) * 100).toFixed(1) : '0.0'}%)\n` +
      `  errors: ${failed}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
