import { GOLD, GOLD_LIGHT, CREAM, NAVY, glowMotif } from '../lib/generate-linkedin-blog-cover.mjs';

function skylineBlocks(blocks, baseline = 552) {
  return blocks
    .map(
      ([x, w, h, peak]) =>
        `<rect x="${x}" y="${baseline - h}" width="${w}" height="${h}" rx="3"/>${
          peak ? `<polygon points="${x + w / 2},${baseline - h - 28} ${x + w / 2 + 10},${baseline - h} ${x + w / 2 - 10},${baseline - h}"/>` : ''
        }`,
    )
    .join('');
}

export const LINKEDIN_BLOG_COVERS = {
  'hematology-market-research-saudi-arabia': {
    cover: 'hematology-market-research-saudi-arabia-cover.jpg',
    hero: 'hematology-market-research-saudi-arabia-hero.jpg',
    badge: 'HEMATOLOGY  ·  SAUDI ARABIA',
    lines: ['Saudi hematology', 'market research'],
    goldLine: 'Before gene-therapy launch',
    sub: 'Access layers and payer evidence · 2026',
    motif: glowMotif(
      `
      <path d="M 0 552 C 90 518, 200 578, 320 534 S 470 522, 560 554 V 630 H 0 Z" fill="#0A1422"/>
      <g fill="none" stroke="${GOLD_LIGHT}" stroke-width="2.2">
        <path d="M 90 88 C 122 54, 172 54, 204 88 C 236 122, 286 122, 318 88"/>
        <path d="M 90 88 C 122 122, 172 122, 204 88 C 236 54, 286 54, 318 88"/>
        <circle cx="90" cy="88" r="6" fill="${GOLD}"/>
        <circle cx="204" cy="88" r="6" fill="${GOLD}"/>
        <circle cx="318" cy="88" r="6" fill="${GOLD}"/>
      </g>
      <g fill="#0C1728" stroke="${GOLD}" stroke-width="2.2">
        <path d="M 122 214 C 90 172, 172 154, 200 202 C 230 252, 152 258, 122 214 Z"/>
        <ellipse cx="318" cy="196" rx="48" ry="34"/>
      </g>
      <g>
        <rect x="128" y="318" width="100" height="186" rx="14" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="248" y="288" width="100" height="216" rx="14" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="368" y="338" width="100" height="166" rx="14" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <circle cx="178" cy="392" r="18" fill="${GOLD}" fill-opacity="0.22" stroke="${GOLD}" stroke-width="2"/>
        <path d="M 298 348 L 314 392 H 282 Z" fill="${GOLD_LIGHT}"/>
        <rect x="400" y="372" width="36" height="88" rx="18" fill="${CREAM}"/>
        <rect x="400" y="372" width="36" height="28" rx="18" fill="${GOLD}"/>
      </g>`,
      'glowH',
    ),
  },
  'obesity-market-research-kuwait': {
    cover: 'obesity-market-research-kuwait-cover.jpg',
    hero: 'obesity-market-research-kuwait-hero.jpg',
    badge: 'KUWAIT  ·  OBESITY  ·  GLP-1',
    lines: ['Kuwait obesity', 'market research'],
    goldLine: 'Who funds GLP-1s',
    sub: 'Funding routes and evidence · 2026',
    motif: glowMotif(
      `
      <path d="M 0 548 C 130 516, 250 576, 370 536 S 520 528, 560 552 V 630 H 0 Z" fill="#0A1422"/>
      <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.7">
        <rect x="88" y="210" width="14" height="338" rx="4"/>
        <circle cx="95" cy="318" r="44"/>
        <circle cx="95" cy="318" r="18" fill="${GOLD}" fill-opacity="0.2" stroke="${GOLD}" stroke-width="2"/>
        <rect x="166" y="128" width="18" height="420" rx="4"/>
        <circle cx="175" cy="268" r="66"/>
        <ellipse cx="175" cy="268" rx="66" ry="18" fill="none" stroke="${GOLD}" stroke-width="2.4"/>
      </g>
      <g>
        <rect x="286" y="304" width="64" height="196" rx="10" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
        <rect x="374" y="252" width="64" height="248" rx="10" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2.2"/>
        <rect x="462" y="336" width="64" height="164" rx="10" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
        <rect x="302" y="322" width="32" height="8" rx="2" fill="${GOLD}"/>
        <rect x="390" y="270" width="32" height="8" rx="2" fill="${GOLD_LIGHT}"/>
        <rect x="478" y="354" width="32" height="8" rx="2" fill="${GOLD}"/>
      </g>
      <g transform="translate(468 64) rotate(16)">
        <rect x="0" y="10" width="30" height="128" rx="15" fill="${CREAM}"/>
        <rect x="0" y="10" width="30" height="42" rx="15" fill="${GOLD}"/>
        <rect x="10" y="-18" width="10" height="30" rx="2" fill="${GOLD_LIGHT}"/>
      </g>`,
      'glowK',
    ),
  },
  'who-does-obesity-market-research-saudi-arabia': {
    cover: 'who-does-obesity-market-research-saudi-arabia-cover.jpg',
    hero: 'who-does-obesity-market-research-saudi-arabia-hero.jpg',
    badge: 'SAUDI ARABIA  ·  OBESITY',
    lines: ['Who does obesity', 'market research'],
    goldLine: 'in Saudi Arabia',
    sub: 'A 2026 provider shortlist',
    motif: glowMotif(
      `
      <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.5">
        ${skylineBlocks([
          [48, 36, 110],
          [92, 28, 168, true],
          [128, 48, 142],
          [184, 32, 196],
          [224, 54, 128],
          [286, 30, 176],
          [324, 44, 210, true],
          [376, 26, 150],
          [410, 50, 132],
          [468, 36, 118],
        ])}
        <circle cx="338" cy="314" r="16" fill="#0C1728"/>
      </g>
      <circle cx="300" cy="220" r="92" fill="none" stroke="${GOLD}" stroke-opacity="0.35" stroke-width="2"/>
      <circle cx="300" cy="220" r="64" fill="#101C30" fill-opacity="0.25" stroke="${GOLD_LIGHT}" stroke-width="2"/>
      <g transform="translate(430 96)">
        <rect x="18" y="36" width="36" height="120" rx="18" fill="${CREAM}"/>
        <rect x="18" y="36" width="36" height="42" rx="16" fill="${GOLD}"/>
        <rect x="30" y="8" width="12" height="32" rx="3" fill="${GOLD_LIGHT}"/>
      </g>`,
      'glowS',
    ),
  },
  'glp-1-physician-survey-saudi-arabia': {
    cover: 'glp-1-physician-survey-saudi-arabia-cover.jpg',
    hero: 'glp-1-physician-survey-saudi-arabia-hero.jpg',
    badge: 'SAUDI ARABIA  ·  GLP-1',
    lines: ['Saudi GLP-1', 'physician surveys'],
    goldLine: 'How to design one',
    sub: 'A 2026 methods guide',
    motif: glowMotif(
      `
      <g transform="translate(88 70)">
        <rect x="0" y="22" width="260" height="348" rx="20" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2.2"/>
        <rect x="76" y="6" width="108" height="34" rx="10" fill="${GOLD}"/>
        <rect x="28" y="70" width="204" height="10" rx="5" fill="${CREAM}" fill-opacity="0.2"/>
        <rect x="28" y="98" width="164" height="10" rx="5" fill="${CREAM}" fill-opacity="0.14"/>
        <rect x="80" y="148" width="160" height="16" rx="4" fill="${GOLD}" fill-opacity="0.9"/>
        <rect x="80" y="184" width="72" height="16" rx="4" fill="${CREAM}" fill-opacity="0.22"/>
        <rect x="28" y="230" width="204" height="8" rx="4" fill="${CREAM}" fill-opacity="0.12"/>
        <rect x="28" y="256" width="204" height="8" rx="4" fill="${CREAM}" fill-opacity="0.12"/>
        <circle cx="48" cy="316" r="9" fill="none" stroke="${GOLD}" stroke-width="2"/>
        <circle cx="88" cy="316" r="9" fill="${GOLD}"/>
      </g>
      <g transform="translate(372 200)">
        <rect x="0" y="0" width="148" height="196" rx="12" fill="${CREAM}"/>
        <rect x="0" y="0" width="148" height="24" rx="12" fill="${GOLD}"/>
        <path d="M 18 52 H 128 M 18 82 H 116 M 18 112 H 132 M 18 142 H 96" stroke="${NAVY}" stroke-opacity="0.3" stroke-width="3.2" stroke-linecap="round"/>
      </g>
      <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.2" transform="translate(80 448)">
        <rect x="0" y="78" width="30" height="84"/>
        <rect x="36" y="48" width="24" height="114"/>
        <rect x="66" y="16" width="20" height="146"/>
        <polygon points="76,16 86,-8 96,16"/>
        <rect x="94" y="60" width="40" height="102"/>
      </g>`,
      'glowG',
    ),
  },
  'obesity-drug-market-share-glp-1-competition-2026': {
    cover: 'obesity-drug-market-share-glp-1-competition-2026-cover.jpg',
    hero: 'obesity-drug-market-share-glp-1-competition-2026-hero.jpg',
    badge: 'OBESITY  ·  GLP-1  ·  2026',
    lines: ['Obesity drug', 'market share'],
    goldLine: 'Injectables vs orals',
    sub: 'Channel research · 2026',
    motif: glowMotif(
      `
      <path d="M 0 548 C 90 512, 210 572, 340 528 S 500 520, 560 548 V 630 H 0 Z" fill="#0A1422"/>
      <rect x="96" y="280" width="72" height="220" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
      <rect x="200" y="200" width="72" height="300" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
      <rect x="304" y="248" width="72" height="252" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
      <g transform="translate(408 120)">
        <rect x="18" y="36" width="40" height="128" rx="20" fill="${CREAM}"/>
        <rect x="18" y="36" width="40" height="44" rx="20" fill="${GOLD}"/>
        <rect x="32" y="8" width="12" height="32" rx="3" fill="${GOLD_LIGHT}"/>
      </g>
      <g transform="translate(408 320)">
        <rect x="8" y="28" width="72" height="16" rx="8" fill="${CREAM}"/>
        <circle cx="26" cy="36" r="6" fill="${GOLD}"/>
        <circle cx="44" cy="36" r="6" fill="${GOLD_LIGHT}"/>
        <circle cx="62" cy="36" r="6" fill="${GOLD}"/>
      </g>`,
      'glowO',
    ),
  },
  'uae-healthcare-market-trends-2026': {
    cover: 'uae-healthcare-market-trends-2026-cover.jpg',
    badge: 'UAE  ·  HEALTHCARE  ·  2026',
    lines: ['UAE healthcare', 'market trends'],
    goldLine: 'Payer and access shifts',
    sub: 'Dubai and Abu Dhabi · 2026',
    motif: glowMotif(
      `
      <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.5">
        ${skylineBlocks([
          [64, 28, 160],
          [100, 40, 240, true],
          [148, 22, 180],
          [178, 48, 210],
          [234, 26, 150],
          [268, 54, 268, true],
          [330, 24, 188],
          [362, 44, 156],
          [414, 32, 200],
          [454, 38, 128],
        ])}
      </g>
      <circle cx="420" cy="160" r="36" fill="none" stroke="${GOLD}" stroke-width="2"/>
      <path d="M 420 124 V 196 M 384 160 H 456" stroke="${GOLD_LIGHT}" stroke-width="1.6"/>`,
      'glowU',
    ),
  },
  'china-device-vbp-rounds-explained': {
    cover: 'china-device-vbp-rounds-explained-cover.jpg',
    badge: 'CHINA  ·  MEDTECH  ·  VBP',
    lines: ['China device', 'VBP rounds'],
    goldLine: 'Price, volume, renewals',
    sub: 'Stents and joints · 2026',
    motif: glowMotif(
      `
      <g fill="#0E1A2C" stroke="${GOLD}" stroke-width="2">
        <rect x="96" y="168" width="140" height="280" rx="16"/>
        <rect x="268" y="128" width="140" height="320" rx="16"/>
        <rect x="440" y="208" width="80" height="240" rx="16"/>
      </g>
      <path d="M 126 240 C 166 200, 206 280, 246 240" fill="none" stroke="${GOLD_LIGHT}" stroke-width="3"/>
      <circle cx="338" cy="220" r="28" fill="none" stroke="${GOLD_LIGHT}" stroke-width="3"/>
      <circle cx="338" cy="300" r="28" fill="none" stroke="${GOLD}" stroke-width="3"/>
      <rect x="460" y="240" width="40" height="12" rx="3" fill="${GOLD}"/>
      <rect x="460" y="272" width="40" height="12" rx="3" fill="${GOLD_LIGHT}"/>
      <rect x="460" y="304" width="28" height="12" rx="3" fill="${GOLD}"/>`,
      'glowC',
    ),
  },
  'nmpa-class-iii-registration-timeline-2026': {
    cover: 'nmpa-class-iii-registration-timeline-2026-cover.jpg',
    badge: 'CHINA  ·  NMPA  ·  2026',
    lines: ['NMPA Class III', 'registration'],
    goldLine: 'Timeline and evidence',
    sub: 'CMDE review · 2026',
    motif: glowMotif(
      `
      <line x1="80" y1="320" x2="500" y2="320" stroke="${GOLD_LIGHT}" stroke-width="2"/>
      <g fill="#0E1A2C" stroke="${GOLD}" stroke-width="2">
        <circle cx="120" cy="320" r="18"/>
        <circle cx="240" cy="320" r="18"/>
        <circle cx="360" cy="320" r="18"/>
        <circle cx="480" cy="320" r="18"/>
      </g>
      <rect x="88" y="160" width="64" height="88" rx="10" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
      <rect x="208" y="120" width="64" height="128" rx="10" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
      <rect x="328" y="176" width="64" height="72" rx="10" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
      <rect x="448" y="140" width="64" height="108" rx="10" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
      <rect x="104" y="380" width="32" height="8" rx="2" fill="${GOLD}"/>
      <rect x="224" y="380" width="32" height="8" rx="2" fill="${GOLD_LIGHT}"/>
      <rect x="344" y="380" width="32" height="8" rx="2" fill="${GOLD}"/>
      <rect x="464" y="380" width="32" height="8" rx="2" fill="${GOLD_LIGHT}"/>`,
      'glowN',
    ),
  },
  'medtech-singapore-2026-market-hsa-registration': {
    cover: 'medtech-singapore-2026-market-hsa-registration-cover.jpg',
    badge: 'SINGAPORE  ·  MEDTECH',
    lines: ['MedTech Singapore', 'HSA registration'],
    goldLine: 'Class A to D',
    sub: 'Market and access · 2026',
    motif: glowMotif(
      `
      <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.5">
        ${skylineBlocks([
          [70, 30, 140],
          [108, 44, 220, true],
          [160, 26, 168],
          [194, 50, 250],
          [252, 22, 150],
          [282, 60, 280, true],
          [350, 28, 190],
          [386, 40, 160],
          [434, 34, 210],
        ])}
      </g>
      <g transform="translate(400 80)">
        <rect x="0" y="0" width="120" height="86" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="16" y="18" width="88" height="10" rx="3" fill="${GOLD}"/>
        <rect x="16" y="38" width="64" height="8" rx="3" fill="${GOLD_LIGHT}" fill-opacity="0.7"/>
        <rect x="16" y="56" width="48" height="8" rx="3" fill="${CREAM}" fill-opacity="0.25"/>
      </g>`,
      'glowSg',
    ),
  },
  'turkey-pharmaceutical-market-2026-titck-top-companies': {
    cover: 'turkey-pharmaceutical-market-2026-titck-top-companies-cover.jpg',
    badge: 'TURKEY  ·  PHARMA  ·  2026',
    lines: ['Turkey pharma', 'market 2026'],
    goldLine: 'TITCK and companies',
    sub: 'Registration and access',
    motif: glowMotif(
      `
      <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.5">
        ${skylineBlocks([
          [60, 32, 150],
          [100, 48, 210],
          [156, 26, 170],
          [190, 54, 246, true],
          [252, 30, 160],
          [290, 42, 198],
          [340, 28, 140],
          [376, 50, 230],
          [434, 36, 168],
        ])}
      </g>
      <g transform="translate(400 96)">
        <rect x="10" y="20" width="88" height="120" rx="16" fill="${CREAM}"/>
        <rect x="10" y="20" width="88" height="28" rx="16" fill="${GOLD}"/>
        <rect x="28" y="62" width="52" height="8" rx="3" fill="${NAVY}" fill-opacity="0.25"/>
        <rect x="28" y="82" width="40" height="8" rx="3" fill="${NAVY}" fill-opacity="0.18"/>
      </g>`,
      'glowT',
    ),
  },
  'market-research-companies-egypt': {
    cover: 'market-research-companies-egypt-cover.jpg',
    badge: 'EGYPT  ·  MARKET RESEARCH',
    lines: ['Market research', 'companies in Egypt'],
    goldLine: '2026 comparison',
    sub: 'Healthcare and consumer',
    motif: glowMotif(
      `
      <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.6">
        <polygon points="280,80 360,240 200,240"/>
        <rect x="248" y="240" width="64" height="28"/>
      </g>
      <g>
        <rect x="80" y="320" width="88" height="180" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="188" y="280" width="88" height="220" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="296" y="300" width="88" height="200" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="404" y="340" width="88" height="160" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
      </g>`,
      'glowE',
    ),
  },
};
