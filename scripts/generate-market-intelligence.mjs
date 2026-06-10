import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function loadPromptText() {
  const transcript = path.join(
    process.env.HOME,
    '.cursor/projects/Users-selim-Documents-bio-nixus-insight/agent-transcripts/92ec86b5-892b-4fc5-8558-6a2e6a29cb92/92ec86b5-892b-4fc5-8558-6a2e6a29cb92.jsonl',
  );
  const line = fs.readFileSync(transcript, 'utf8').split('\n')[2027];
  const text = JSON.parse(line).message.content[0].text;
  const start = text.indexOf('## Market intelligence data');
  const end = text.indexOf('## Drug class data', start);
  const addStart = text.indexOf('## Additional countries for `MARKET_INTELLIGENCE`');
  const addEnd = text.indexOf('## How to integrate all new countries', addStart);
  return `${text.slice(start, end)}\n\n${text.slice(addStart, addEnd)}`;
}

const COUNTRY_NAMES = {
  'saudi-arabia': 'Saudi Arabia',
  uae: 'United Arab Emirates',
  qatar: 'Qatar',
  kuwait: 'Kuwait',
  bahrain: 'Bahrain',
  oman: 'Oman',
  egypt: 'Egypt',
  uk: 'United Kingdom',
  germany: 'Germany',
  france: 'France',
  italy: 'Italy',
  spain: 'Spain',
  usa: 'United States',
  china: 'China',
  india: 'India',
  japan: 'Japan',
  'south-korea': 'South Korea',
  australia: 'Australia',
  singapore: 'Singapore',
  turkey: 'Turkey',
  brazil: 'Brazil',
  canada: 'Canada',
  iraq: 'Iraq',
  iran: 'Iran',
  syria: 'Syria',
  jordan: 'Jordan',
  lebanon: 'Lebanon',
  morocco: 'Morocco',
  algeria: 'Algeria',
  tunisia: 'Tunisia',
  libya: 'Libya',
  'south-africa': 'South Africa',
  nigeria: 'Nigeria',
  kenya: 'Kenya',
  ethiopia: 'Ethiopia',
  ghana: 'Ghana',
  tanzania: 'Tanzania',
  rwanda: 'Rwanda',
  gcc: 'GCC',
};

const REGION_FILES = {
  gcc: ['saudi-arabia', 'uae', 'qatar', 'kuwait', 'bahrain', 'oman'],
  mena: [
    'egypt',
    'iraq',
    'iran',
    'syria',
    'jordan',
    'lebanon',
    'morocco',
    'algeria',
    'tunisia',
    'libya',
    'turkey',
  ],
  europe: ['uk', 'germany', 'france', 'italy', 'spain'],
  americas: ['usa', 'brazil', 'canada'],
  asiaPacific: ['china', 'india', 'japan', 'south-korea', 'australia', 'singapore'],
  subSaharanAfrica: [
    'south-africa',
    'nigeria',
    'kenya',
    'ethiopia',
    'ghana',
    'tanzania',
    'rwanda',
  ],
};

function parsePipeRow(line) {
  const parts = line.split('|').map((p) => p.trim());
  if (parts.length < 2) return null;
  const [a, b, c] = parts;
  return { a, b, c: c ?? undefined };
}

function mapHospitalType(raw) {
  const t = raw.toLowerCase();
  if (t.includes('academic')) return 'academic';
  if (t.includes('semi-government') || t.includes('semi government')) return 'semi-government';
  if (t.includes('private') || t.includes('non-profit') || t.includes('for-profit')) return 'private';
  if (t.includes('public') || t.includes('government') || t.includes('military') || t.includes('ngo'))
    return t.includes('ngo') ? 'semi-government' : 'public';
  return 'public';
}

function parseAccessTimeline(raw) {
  const parts = raw.split('|').map((p) => p.trim());
  const result = {
    regulatoryApproval: '',
    payerListing: '',
    formularyAccess: '',
    totalLaunchToAccess: '',
  };
  for (const part of parts) {
    const lower = part.toLowerCase();
    const value = part.includes(':') ? part.split(':').slice(1).join(':').trim() : part;
    if (lower.startsWith('total') || lower.startsWith('total launch')) {
      result.totalLaunchToAccess = value;
      continue;
    }
    if (lower.startsWith('tender') || lower.startsWith('procurement')) {
      result.formularyAccess = result.formularyAccess || value;
      continue;
    }
    if (lower.startsWith('regulatory') || /^regulatory:/i.test(part)) {
      result.regulatoryApproval = value;
      continue;
    }
    if (lower.includes('hospital formulary') || lower.includes('hospital adoption')) {
      result.formularyAccess = value;
      continue;
    }
    if (
      lower.includes('formulary') ||
      lower.includes('nupco') ||
      lower.includes('hmc formulary') ||
      lower.includes('cms formulary') ||
      lower.includes('sdl listing') ||
      lower.includes('payer listing')
    ) {
      if (lower.includes('hospital')) result.formularyAccess = value;
      else result.payerListing = result.payerListing || value;
      continue;
    }
    if (
      lower.includes('payer') ||
      lower.includes('reimbursement') ||
      lower.includes('listing') ||
      lower.includes('tender') ||
      lower.includes('pbs') ||
      lower.includes('insurance') ||
      lower.includes('pbac') ||
      lower.includes('nice') ||
      lower.includes('has') ||
      lower.includes('cadth') ||
      lower.includes('sgk') ||
      lower.includes('nhis')
    ) {
      result.payerListing = result.payerListing || value;
      continue;
    }
    if (/^(idmc|ifda|jfda|sfda|mohap|moph|fda|mhra|nmpa|cdsco|pmda|mfds|tga|hsa|anvisa|titck|tİtck|capa|ema|bfarm|ansm|aifa|aemps|nda|registration|regulatory)/i.test(lower)) {
      result.regulatoryApproval = result.regulatoryApproval || value;
      continue;
    }
    if (!result.payerListing) result.payerListing = value;
    else if (!result.formularyAccess) result.formularyAccess = value;
    else if (!result.totalLaunchToAccess) result.totalLaunchToAccess = value;
  }
  if (!result.totalLaunchToAccess && parts.length === 1) result.totalLaunchToAccess = raw;
  return result;
}

function parseCountryBlock(slug, body) {
  const sections = {};
  let current = null;
  const lines = body.split('\n');
  for (const line of lines) {
    const inline = line.match(/^\*\*(\w+):\*\*\s*(.+)$/);
    if (inline) {
      current = inline[1];
      sections[current] = sections[current] ?? [];
      if (inline[2].trim()) sections[current].push(inline[2].trim());
      continue;
    }
    const sec = line.match(/^\*\*(\w+):\*\*$/);
    if (sec) {
      current = sec[1];
      sections[current] = [];
      continue;
    }
    if (!current || !line.trim()) continue;
    if (line.startsWith('**Note') || line.startsWith('**keyCompanies')) continue;
    sections[current].push(line);
  }

  const kpis = (sections.kpis ?? [])
    .filter((l) => l.startsWith('- '))
    .map((l) => {
      const row = parsePipeRow(l.slice(2));
      if (!row) return null;
      const kpi = { label: row.a, value: row.b };
      if (row.c && row.c !== '—') kpi.note = row.c;
      return kpi;
    })
    .filter(Boolean);

  const registrationSteps = (sections.registrationSteps ?? [])
    .filter((l) => /^\d+\./.test(l))
    .map((l) => {
      const rest = l.replace(/^\d+\.\s*/, '');
      const [action, body, timeline, notes] = rest.split('|').map((p) => p.trim());
      return {
        step: 0,
        action: action ?? rest,
        body: body ?? '—',
        timeline: timeline ?? '—',
        notes: notes ?? '—',
      };
    })
    .map((s, i) => ({ ...s, step: i + 1 }));

  const therapySegments = (sections.therapySegments ?? [])
    .filter((l) => l.startsWith('- '))
    .map((l) => {
      const [area, marketSize2026, cagr, keyDrivers] = l
        .slice(2)
        .split('|')
        .map((p) => p.trim());
      return { area, marketSize2026, cagr, keyDrivers };
    });

  const majorHospitals = (sections.majorHospitals ?? [])
    .filter((l) => l.startsWith('- '))
    .map((l) => {
      const parts = l.slice(2).split('|').map((p) => p.trim());
      const [name, typeRaw, third, fourth] = parts;
      const entry = {
        name,
        type: mapHospitalType(typeRaw ?? 'public'),
        specialties: '—',
      };
      if (parts.length >= 4) {
        entry.beds = third;
        entry.specialties = fourth;
      } else if (parts.length === 3) {
        if (third.match(/\d|multi|—/i) && !third.match(/oncology|cardio|general|trauma|all spec/i)) {
          entry.beds = third;
        } else {
          entry.specialties = third;
        }
      }
      return entry;
    });

  let keyCompanies = [];
  for (const l of sections.keyCompanies ?? []) {
    if (l.startsWith('- ')) {
      keyCompanies.push(...l.slice(2).split(',').map((c) => c.trim()));
    }
  }
  for (const line of lines) {
    const m = line.match(/^\*\*keyCompanies[^:]*:\*\*\s*(.+)$/);
    if (m) keyCompanies.push(...m[1].split(',').map((c) => c.trim()));
  }

  const accessRaw = (sections.accessTimeline ?? []).join(' ').replace(/^-\s*/, '');
  const accessTimeline = parseAccessTimeline(accessRaw);

  const epidemiology = (sections.epidemiology ?? [])
    .filter((l) => l.startsWith('- '))
    .map((l) => {
      const [condition, stat, source] = l.slice(2).split('|').map((p) => p.trim());
      return { condition, stat, source };
    });

  const bionixusCapabilities = (sections.bionixusCapabilities ?? [])
    .filter((l) => l.startsWith('- '))
    .map((l) => l.slice(2).trim());

  const entry = {
    slug,
    country: COUNTRY_NAMES[slug] ?? slug,
    kpis,
    registrationSteps,
    majorHospitals,
    accessTimeline,
    epidemiology,
  };
  if (therapySegments.length) entry.therapySegments = therapySegments;
  if (keyCompanies.length) entry.keyCompanies = keyCompanies;
  if (bionixusCapabilities.length) entry.bionixusCapabilities = bionixusCapabilities;
  return entry;
}

function tsString(s) {
  return JSON.stringify(s);
}

function emitObject(obj, indent = 2) {
  const pad = ' '.repeat(indent);
  const lines = ['{'];
  const keys = Object.keys(obj);
  for (const key of keys) {
    const val = obj[key];
    if (val === undefined) continue;
    if (Array.isArray(val)) {
      if (!val.length) continue;
      lines.push(`${pad}${key}: [`);
      for (const item of val) {
        if (typeof item === 'string') {
          lines.push(`${pad}  ${tsString(item)},`);
        } else {
          lines.push(`${pad}  ${emitObject(item, indent + 2).replace(/^\{/, '{').replace(/\}$/, '')},`);
        }
      }
      lines.pop();
      const last = lines[lines.length - 1];
      if (last.endsWith(',')) lines[lines.length - 1] = last;
      lines.push(`${pad}],`);
      continue;
    }
    if (typeof val === 'object' && val !== null) {
      const inner = emitObject(val, indent + 2);
      lines.push(`${pad}${key}: ${inner},`);
      continue;
    }
    lines.push(`${pad}${key}: ${tsString(val)},`);
  }
  if (lines[lines.length - 1]?.endsWith(',')) {
    lines[lines.length - 1] = lines[lines.length - 1].slice(0, -1);
  }
  lines.push(`${' '.repeat(indent - 2)}}`);
  return lines.join('\n');
}

function emitEntry(slug, data) {
  const lines = [`  '${slug}': {`];
  lines.push(`    slug: ${tsString(data.slug)},`);
  lines.push(`    country: ${tsString(data.country)},`);
  lines.push(`    kpis: [`);
  for (const k of data.kpis) {
    const note = k.note ? `, note: ${tsString(k.note)}` : '';
    lines.push(`      { label: ${tsString(k.label)}, value: ${tsString(k.value)}${note} },`);
  }
  lines.push(`    ],`);
  lines.push(`    registrationSteps: [`);
  for (const s of data.registrationSteps) {
    lines.push(
      `      { step: ${s.step}, action: ${tsString(s.action)}, body: ${tsString(s.body)}, timeline: ${tsString(s.timeline)}, notes: ${tsString(s.notes)} },`,
    );
  }
  lines.push(`    ],`);
  if (data.therapySegments?.length) {
    lines.push(`    therapySegments: [`);
    for (const t of data.therapySegments) {
      lines.push(
        `      { area: ${tsString(t.area)}, marketSize2026: ${tsString(t.marketSize2026)}, cagr: ${tsString(t.cagr)}, keyDrivers: ${tsString(t.keyDrivers)} },`,
      );
    }
    lines.push(`    ],`);
  }
  lines.push(`    majorHospitals: [`);
  for (const h of data.majorHospitals) {
    const beds = h.beds ? `, beds: ${tsString(h.beds)}` : '';
    lines.push(
      `      { name: ${tsString(h.name)}, type: '${h.type}'${beds}, specialties: ${tsString(h.specialties)} },`,
    );
  }
  lines.push(`    ],`);
  if (data.keyCompanies?.length) {
    lines.push(`    keyCompanies: [`);
    for (const c of data.keyCompanies) {
      lines.push(`      ${tsString(c)},`);
    }
    lines.push(`    ],`);
  }
  const at = data.accessTimeline;
  lines.push(`    accessTimeline: {`);
  lines.push(`      regulatoryApproval: ${tsString(at.regulatoryApproval)},`);
  lines.push(`      payerListing: ${tsString(at.payerListing)},`);
  lines.push(`      formularyAccess: ${tsString(at.formularyAccess)},`);
  lines.push(`      totalLaunchToAccess: ${tsString(at.totalLaunchToAccess)},`);
  lines.push(`    },`);
  lines.push(`    epidemiology: [`);
  for (const e of data.epidemiology) {
    lines.push(
      `      { condition: ${tsString(e.condition)}, stat: ${tsString(e.stat)}, source: ${tsString(e.source)} },`,
    );
  }
  lines.push(`    ],`);
  if (data.bionixusCapabilities?.length) {
    lines.push(`    bionixusCapabilities: [`);
    for (const b of data.bionixusCapabilities) {
      lines.push(`      ${tsString(b)},`);
    }
    lines.push(`    ],`);
  }
  lines.push(`  },`);
  return lines.join('\n');
}

const md = loadPromptText();
const blocks = [...md.matchAll(/### `'([^']+)'`\n([\s\S]*?)(?=\n---\n|\n### `|$)/g)];
const countries = {};
for (const [, slug, body] of blocks) {
  if (body.includes('Include as a bonus')) {
    countries[slug] = parseCountryBlock(slug, body.split('*(Include')[0]);
  } else {
    countries[slug] = parseCountryBlock(slug, body);
  }
}

const outDir = path.join(root, 'src/data/marketIntelligence');
fs.mkdirSync(outDir, { recursive: true });

for (const [region, slugs] of Object.entries(REGION_FILES)) {
  const parts = slugs.map((slug) => {
    if (!countries[slug]) throw new Error(`Missing country data: ${slug}`);
    return emitEntry(slug, countries[slug]);
  });
  const content = `import type { MarketIntelligence } from './types';

export const ${region}MarketIntelligence: Record<string, MarketIntelligence> = {
${parts.join('\n')}
};
`;
  fs.writeFileSync(path.join(outDir, `${region}.ts`), content);
}

const imports = Object.keys(REGION_FILES)
  .map((r) => `import { ${r}MarketIntelligence } from './marketIntelligence/${r}';`)
  .join('\n');
const spreads = Object.keys(REGION_FILES).map((r) => `  ...${r}MarketIntelligence,`).join('\n');

const dataTs = `${imports}

import type {
  MarketIntelligence,
  MarketKPI,
  RegulatoryStep,
  TherapySegment,
  HospitalEntry,
  TherapyDrugClass,
  TherapyAreaEnrichment,
} from './marketIntelligence/types';

export type {
  MarketIntelligence,
  MarketKPI,
  RegulatoryStep,
  TherapySegment,
  HospitalEntry,
  TherapyDrugClass,
  TherapyAreaEnrichment,
};

export const MARKET_INTELLIGENCE: Record<string, MarketIntelligence> = {
${spreads}
};
`;

fs.writeFileSync(path.join(root, 'src/data/marketIntelligenceData.ts'), dataTs);
console.log('Countries parsed:', Object.keys(countries).length, Object.keys(countries).sort().join(', '));
