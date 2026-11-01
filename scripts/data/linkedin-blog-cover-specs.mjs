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
  'diabetes-market-research-uae-2026-price-cuts': {
    cover: 'diabetes-market-research-uae-2026-price-cuts-cover.jpg',
    hero: 'diabetes-market-research-uae-2026-price-cuts-hero.jpg',
    badge: 'UAE  ·  DIABETES  ·  2026',
    lines: ['Diabetes research', 'in the UAE'],
    goldLine: 'After the 2026 cuts',
    sub: 'Price, switching and listing evidence',
    motif: glowMotif(
      `
      <path d="M 0 548 C 100 512, 220 576, 340 532 S 490 524, 560 550 V 630 H 0 Z" fill="#0A1422"/>
      <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.6">
        ${skylineBlocks([
          [40, 24, 96],
          [72, 34, 160, true],
          [114, 22, 118],
          [144, 46, 204],
          [198, 28, 140],
          [234, 38, 182, true],
          [280, 22, 108],
          [310, 50, 228],
        ])}
      </g>
      <g>
        <circle cx="176" cy="168" r="78" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.4"/>
        <circle cx="176" cy="168" r="52" fill="none" stroke="${GOLD_LIGHT}" stroke-width="6"/>
        <circle cx="176" cy="168" r="8" fill="${GOLD}"/>
        <path d="M 176 168 L 210 132" stroke="${CREAM}" stroke-width="4" stroke-linecap="round"/>
        <rect x="300" y="88" width="196" height="168" rx="16" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2.2"/>
        <rect x="324" y="196" width="28" height="40" rx="4" fill="${GOLD}"/>
        <rect x="364" y="168" width="28" height="68" rx="4" fill="${GOLD_LIGHT}"/>
        <rect x="404" y="148" width="28" height="88" rx="4" fill="${GOLD}"/>
        <rect x="444" y="128" width="28" height="108" rx="4" fill="${CREAM}"/>
        <rect x="92" y="348" width="78" height="152" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="188" y="318" width="78" height="182" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="284" y="288" width="78" height="212" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="380" y="258" width="78" height="242" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="110" y="368" width="42" height="8" rx="2" fill="${GOLD}"/>
        <rect x="206" y="338" width="42" height="8" rx="2" fill="${GOLD_LIGHT}"/>
        <rect x="302" y="308" width="42" height="8" rx="2" fill="${GOLD}"/>
        <rect x="398" y="278" width="42" height="8" rx="2" fill="${GOLD_LIGHT}"/>
      </g>`,
      'glowDiabetes',
    ),
  },
  'oral-glp-1-uae-market-research': {
    cover: 'oral-glp-1-uae-market-research-cover.jpg',
    hero: 'oral-glp-1-uae-market-research-hero.jpg',
    badge: 'UAE  ·  ORAL GLP-1  ·  2026',
    lines: ['Oral GLP-1', 'UAE uptake'],
    goldLine: 'Prescriber research',
    sub: 'Tablets after EDE registration · 2026',
    motif: glowMotif(
      `
      <path d="M 0 548 C 100 512, 220 576, 340 532 S 490 524, 560 550 V 630 H 0 Z" fill="#0A1422"/>
      <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.6">
        ${skylineBlocks([
          [36, 24, 88],
          [68, 32, 152, true],
          [108, 20, 112],
          [136, 44, 198],
          [188, 26, 136],
          [222, 36, 176, true],
          [266, 20, 102],
          [294, 48, 220],
        ])}
      </g>
      <g>
        <ellipse cx="168" cy="168" rx="118" ry="52" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.4"/>
        <path d="M 168 116 A 118 52 0 0 0 168 220" fill="${GOLD}" fill-opacity="0.88"/>
        <ellipse cx="168" cy="168" rx="22" ry="22" fill="${CREAM}" fill-opacity="0.2" stroke="${GOLD_LIGHT}" stroke-width="1.6"/>
        <g transform="translate(338 92) rotate(18)">
          <rect x="0" y="0" width="28" height="132" rx="14" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
          <rect x="6" y="10" width="16" height="36" rx="8" fill="${GOLD}" fill-opacity="0.35"/>
          <rect x="10" y="-16" width="8" height="22" rx="2" fill="${GOLD_LIGHT}"/>
        </g>
        <path d="M 168 230 C 168 278, 248 292, 318 318" fill="none" stroke="${GOLD}" stroke-width="3" stroke-linecap="round"/>
        <circle cx="168" cy="230" r="7" fill="${GOLD}"/>
        <circle cx="318" cy="318" r="7" fill="${GOLD_LIGHT}"/>
        <rect x="92" y="348" width="78" height="152" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="188" y="318" width="78" height="182" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="284" y="288" width="78" height="212" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="380" y="258" width="78" height="242" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="110" y="368" width="42" height="8" rx="2" fill="${GOLD}"/>
        <rect x="206" y="338" width="42" height="8" rx="2" fill="${GOLD_LIGHT}"/>
        <rect x="302" y="308" width="42" height="8" rx="2" fill="${GOLD}"/>
        <rect x="398" y="278" width="42" height="8" rx="2" fill="${GOLD_LIGHT}"/>
      </g>`,
      'glowOral',
    ),
  },
  'rare-disease-market-research-saudi-arabia': {
    cover: 'rare-disease-market-research-saudi-arabia-cover.jpg',
    hero: 'rare-disease-market-research-saudi-arabia-hero.jpg',
    badge: 'RARE DISEASE  ·  SAUDI ARABIA',
    lines: ['Saudi rare-disease', 'market research'],
    goldLine: 'Small cohorts, open gaps',
    sub: 'Diagnosed patients and payer evidence · 2026',
    motif: glowMotif(
      `
      <path d="M 0 548 C 110 516, 230 576, 350 534 S 500 526, 560 552 V 630 H 0 Z" fill="#0A1422"/>
      <g fill="none" stroke="${GOLD}" stroke-width="2.2">
        <path d="M 96 96 C 128 56, 176 56, 208 96 C 240 136, 288 136, 320 96"/>
        <path d="M 96 96 C 128 136, 176 136, 208 96 C 240 56, 288 56, 320 96"/>
      </g>
      <circle cx="96" cy="96" r="6" fill="${GOLD}"/>
      <circle cx="208" cy="96" r="6" fill="${GOLD_LIGHT}"/>
      <circle cx="320" cy="96" r="6" fill="${GOLD}"/>
      <g>
        <rect x="80" y="188" width="108" height="108" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <circle cx="134" cy="232" r="16" fill="${GOLD}" fill-opacity="0.28" stroke="${GOLD}" stroke-width="2"/>
        <rect x="216" y="188" width="108" height="108" rx="16" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <circle cx="246" cy="218" r="7" fill="${GOLD}"/>
        <circle cx="278" cy="248" r="7" fill="${GOLD_LIGHT}"/>
        <circle cx="300" cy="226" r="7" fill="${CREAM}"/>
        <rect x="352" y="188" width="108" height="108" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="372" y="248" width="18" height="28" rx="3" fill="${GOLD}"/>
        <rect x="396" y="228" width="18" height="48" rx="3" fill="${GOLD_LIGHT}"/>
        <rect x="420" y="208" width="18" height="68" rx="3" fill="${CREAM}"/>
      </g>
      <g fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2">
        <rect x="108" y="328" width="88" height="186" rx="14"/>
        <rect x="216" y="298" width="88" height="216" rx="14"/>
        <rect x="324" y="348" width="88" height="166" rx="14"/>
      </g>
      <circle cx="152" cy="392" r="14" fill="${GOLD}" fill-opacity="0.35" stroke="${GOLD}" stroke-width="2"/>
      <circle cx="260" cy="372" r="14" fill="${GOLD_LIGHT}" fill-opacity="0.35" stroke="${GOLD_LIGHT}" stroke-width="2"/>
      <circle cx="368" cy="412" r="14" fill="${GOLD}" fill-opacity="0.2" stroke="${GOLD}" stroke-width="2"/>`,
      'glowR',
    ),
  },
  'thiqa-obesity-reimbursement-abu-dhabi': {
    cover: 'thiqa-obesity-reimbursement-abu-dhabi-cover.jpg',
    hero: 'thiqa-obesity-reimbursement-abu-dhabi-hero.jpg',
    badge: 'ABU DHABI  ·  THIQA  ·  GLP-1',
    lines: ['Thiqa obesity', 'reimbursement'],
    goldLine: 'Abu Dhabi GLP-1 cover',
    sub: 'BMI gates and four-month rules · 2026',
    motif: glowMotif(
      `
      <path d="M 0 548 C 110 516, 240 574, 360 534 S 510 526, 560 552 V 630 H 0 Z" fill="#0A1422"/>
      <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.6">
        ${skylineBlocks([
          [48, 26, 92],
          [82, 34, 158, true],
          [124, 22, 118],
          [154, 46, 204],
          [208, 28, 144],
          [244, 38, 182, true],
          [290, 22, 108],
          [320, 50, 228],
        ])}
      </g>
      <g>
        <rect x="72" y="78" width="132" height="118" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
        <circle cx="138" cy="122" r="22" fill="${GOLD}" fill-opacity="0.22" stroke="${GOLD}" stroke-width="2"/>
        <rect x="104" y="154" width="68" height="10" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.7"/>
        <rect x="220" y="78" width="132" height="118" rx="16" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2.2"/>
        <circle cx="286" cy="122" r="28" fill="${GOLD}" fill-opacity="0.28" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="252" y="154" width="68" height="10" rx="4" fill="${GOLD}" fill-opacity="0.7"/>
        <rect x="368" y="78" width="132" height="118" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
        <circle cx="434" cy="122" r="34" fill="${GOLD}" fill-opacity="0.36" stroke="${GOLD}" stroke-width="2"/>
        <rect x="400" y="154" width="68" height="10" rx="4" fill="${CREAM}" fill-opacity="0.35"/>
        <path d="M 138 214 L 138 248 L 286 248 L 286 282 L 434 282 L 434 318" fill="none" stroke="${GOLD}" stroke-width="3" stroke-linecap="round"/>
        <circle cx="138" cy="214" r="7" fill="${GOLD}"/>
        <circle cx="286" cy="248" r="7" fill="${GOLD_LIGHT}"/>
        <circle cx="434" cy="318" r="7" fill="${GOLD}"/>
        <rect x="88" y="348" width="84" height="148" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="196" y="318" width="84" height="178" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="304" y="288" width="84" height="208" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="412" y="258" width="84" height="238" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="108" y="368" width="44" height="8" rx="2" fill="${GOLD}"/>
        <rect x="216" y="338" width="44" height="8" rx="2" fill="${GOLD_LIGHT}"/>
        <rect x="324" y="308" width="44" height="8" rx="2" fill="${GOLD}"/>
        <rect x="432" y="278" width="44" height="8" rx="2" fill="${GOLD_LIGHT}"/>
      </g>`,
      'glowT',
    ),
  },
  'iqvia-alternative-uae-primary-research': {
    cover: 'iqvia-alternative-uae-primary-research-cover.jpg',
    hero: 'iqvia-alternative-uae-primary-research-hero.jpg',
    badge: 'UAE  ·  PRIMARY RESEARCH',
    lines: ['Keep the audit,', 'add primary'],
    goldLine: 'UAE brand teams',
    sub: 'Syndicated plus custom · 2026',
    motif: glowMotif(
      `
      <path d="M 0 552 C 90 518, 200 578, 320 534 S 470 522, 560 554 V 630 H 0 Z" fill="#0A1422"/>
      <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.6">
        ${skylineBlocks([
          [48, 28, 96],
          [84, 36, 168, true],
          [128, 22, 124],
          [158, 48, 210],
          [214, 30, 150],
          [252, 40, 188, true],
          [300, 24, 112],
          [332, 52, 236],
          [392, 28, 140],
          [428, 44, 176],
        ])}
      </g>
      <g>
        <rect x="72" y="88" width="196" height="168" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
        <rect x="92" y="196" width="28" height="40" rx="4" fill="${GOLD}"/>
        <rect x="132" y="168" width="28" height="68" rx="4" fill="${GOLD_LIGHT}"/>
        <rect x="172" y="148" width="28" height="88" rx="4" fill="${GOLD}"/>
        <rect x="212" y="128" width="28" height="108" rx="4" fill="${CREAM}"/>
        <rect x="292" y="88" width="196" height="168" rx="16" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2.2"/>
        <circle cx="340" cy="148" r="18" fill="none" stroke="${GOLD}" stroke-width="2.2"/>
        <circle cx="388" cy="148" r="18" fill="${GOLD}" fill-opacity="0.3" stroke="${GOLD}" stroke-width="2.2"/>
        <circle cx="436" cy="148" r="18" fill="none" stroke="${GOLD_LIGHT}" stroke-width="2.2"/>
        <path d="M 320 196 H 460 M 320 218 H 428" stroke="${CREAM}" stroke-opacity="0.35" stroke-width="4" stroke-linecap="round"/>
      </g>`,
      'glowI',
    ),
  },
  'car-t-saudi-arabia-market-research': {
    cover: 'car-t-saudi-arabia-market-research-cover.jpg',
    hero: 'car-t-saudi-arabia-market-research-hero.jpg',
    badge: 'SAUDI ARABIA  ·  TERTIARY CENTRES',
    lines: ['CAR-T Saudi Arabia', 'market research'],
    goldLine: 'ADC and bispecific adoption',
    sub: 'KFSH&RC and KAMC evidence · 2026',
    motif: glowMotif(
      `
      <path d="M 0 552 C 90 518, 200 578, 320 534 S 470 522, 560 554 V 630 H 0 Z" fill="#0A1422"/>
      <g>
        <rect x="72" y="86" width="168" height="200" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
        <circle cx="156" cy="156" r="36" fill="none" stroke="${GOLD}" stroke-width="3"/>
        <circle cx="156" cy="156" r="14" fill="${GOLD}" fill-opacity="0.35"/>
        <rect x="104" y="212" width="104" height="10" rx="4" fill="${GOLD}"/>
        <rect x="118" y="236" width="76" height="8" rx="4" fill="${CREAM}" fill-opacity="0.22"/>

        <rect x="260" y="86" width="168" height="200" rx="16" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2.2"/>
        <rect x="292" y="124" width="104" height="72" rx="12" fill="${GOLD}" fill-opacity="0.16" stroke="${GOLD_LIGHT}" stroke-width="1.8"/>
        <rect x="312" y="140" width="18" height="40" rx="4" fill="${GOLD}"/>
        <rect x="338" y="132" width="18" height="48" rx="4" fill="${GOLD_LIGHT}"/>
        <rect x="364" y="148" width="18" height="32" rx="4" fill="${CREAM}"/>
        <rect x="292" y="220" width="104" height="10" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.7"/>
        <rect x="304" y="244" width="80" height="8" rx="4" fill="${CREAM}" fill-opacity="0.22"/>

        <rect x="448" y="86" width="40" height="200" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
        <circle cx="468" cy="148" r="10" fill="${GOLD}"/>
        <rect x="458" y="176" width="20" height="78" rx="8" fill="${GOLD}" fill-opacity="0.28" stroke="${GOLD}" stroke-width="1.6"/>

        <rect x="72" y="312" width="136" height="200" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <text x="140" y="360" text-anchor="middle" fill="${GOLD}" font-size="28" font-weight="700" font-family="Georgia, serif">01</text>
        <rect x="96" y="384" width="88" height="8" rx="4" fill="${CREAM}" fill-opacity="0.25"/>
        <rect x="96" y="408" width="64" height="8" rx="4" fill="${GOLD}" fill-opacity="0.45"/>

        <rect x="228" y="312" width="136" height="200" rx="16" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <text x="296" y="360" text-anchor="middle" fill="${GOLD_LIGHT}" font-size="28" font-weight="700" font-family="Georgia, serif">02</text>
        <rect x="252" y="384" width="88" height="8" rx="4" fill="${CREAM}" fill-opacity="0.25"/>
        <rect x="252" y="408" width="72" height="8" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.45"/>

        <rect x="384" y="312" width="136" height="200" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <text x="452" y="360" text-anchor="middle" fill="${GOLD}" font-size="28" font-weight="700" font-family="Georgia, serif">03</text>
        <rect x="408" y="384" width="88" height="8" rx="4" fill="${CREAM}" fill-opacity="0.25"/>
        <rect x="408" y="408" width="56" height="8" rx="4" fill="${GOLD}" fill-opacity="0.45"/>
      </g>`,
      'glowC',
    ),
  },
  'nupco-tender-market-research-saudi-arabia': {
    cover: 'nupco-tender-market-research-saudi-arabia-cover.jpg',
    hero: 'nupco-tender-market-research-saudi-arabia-hero.jpg',
    badge: 'NUPCO  ·  SAUDI ARABIA',
    lines: ['NUPCO tender', 'market research'],
    goldLine: 'Before an oncology bid',
    sub: 'Framework lists and award evidence · 2026',
    motif: glowMotif(
      `
      <path d="M 0 552 C 90 518, 200 578, 320 534 S 470 522, 560 554 V 630 H 0 Z" fill="#0A1422"/>
      <g>
        <rect x="72" y="86" width="280" height="200" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
        <rect x="96" y="110" width="180" height="10" rx="4" fill="${GOLD}"/>
        <rect x="96" y="134" width="140" height="8" rx="4" fill="${CREAM}" fill-opacity="0.28"/>
        <rect x="96" y="158" width="200" height="8" rx="4" fill="${CREAM}" fill-opacity="0.18"/>
        <rect x="96" y="190" width="52" height="72" rx="8" fill="${GOLD}" fill-opacity="0.22" stroke="${GOLD}" stroke-width="1.6"/>
        <rect x="160" y="206" width="52" height="56" rx="8" fill="${GOLD_LIGHT}" fill-opacity="0.2" stroke="${GOLD_LIGHT}" stroke-width="1.6"/>
        <rect x="224" y="174" width="52" height="88" rx="8" fill="${CREAM}" fill-opacity="0.16" stroke="${CREAM}" stroke-width="1.6"/>

        <rect x="372" y="86" width="116" height="200" rx="16" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2.2"/>
        <circle cx="430" cy="148" r="28" fill="none" stroke="${GOLD}" stroke-width="3"/>
        <path d="M 430 132 V 148 H 446" fill="none" stroke="${GOLD}" stroke-width="3" stroke-linecap="round"/>
        <rect x="396" y="196" width="68" height="10" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.7"/>
        <rect x="396" y="216" width="48" height="8" rx="4" fill="${CREAM}" fill-opacity="0.22"/>

        <rect x="72" y="312" width="136" height="200" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <text x="140" y="360" text-anchor="middle" fill="${GOLD}" font-size="28" font-weight="700" font-family="Georgia, serif">01</text>
        <rect x="96" y="384" width="88" height="8" rx="4" fill="${CREAM}" fill-opacity="0.25"/>
        <rect x="96" y="408" width="64" height="8" rx="4" fill="${GOLD}" fill-opacity="0.45"/>

        <rect x="228" y="312" width="136" height="200" rx="16" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <text x="296" y="360" text-anchor="middle" fill="${GOLD_LIGHT}" font-size="28" font-weight="700" font-family="Georgia, serif">02</text>
        <rect x="252" y="384" width="88" height="8" rx="4" fill="${CREAM}" fill-opacity="0.25"/>
        <rect x="252" y="408" width="72" height="8" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.45"/>

        <rect x="384" y="312" width="136" height="200" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <text x="452" y="360" text-anchor="middle" fill="${GOLD}" font-size="28" font-weight="700" font-family="Georgia, serif">03</text>
        <rect x="408" y="384" width="88" height="8" rx="4" fill="${CREAM}" fill-opacity="0.25"/>
        <rect x="408" y="408" width="56" height="8" rx="4" fill="${GOLD}" fill-opacity="0.45"/>
      </g>`,
      'glowN',
    ),
  },
  'saudi-health-insurance-payer-research': {
    cover: 'saudi-health-insurance-payer-research-cover.jpg',
    hero: 'saudi-health-insurance-payer-research-hero.jpg',
    badge: 'CHI  ·  SAUDI ARABIA',
    lines: ['Saudi health', 'insurance payers'],
    goldLine: 'CHI and Dhaman',
    sub: 'Formulary evidence before a claim · 2026',
    motif: glowMotif(
      `
      <path d="M 0 548 C 110 516, 240 574, 360 534 S 510 526, 560 552 V 630 H 0 Z" fill="#0A1422"/>
      <g>
        <rect x="64" y="72" width="432" height="168" rx="18" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
        <rect x="88" y="96" width="168" height="14" rx="4" fill="${GOLD}"/>
        <rect x="88" y="124" width="220" height="8" rx="4" fill="${CREAM}" fill-opacity="0.28"/>
        <rect x="88" y="146" width="180" height="8" rx="4" fill="${CREAM}" fill-opacity="0.18"/>
        <rect x="88" y="176" width="72" height="40" rx="8" fill="${GOLD}" fill-opacity="0.22" stroke="${GOLD}" stroke-width="1.6"/>
        <rect x="176" y="176" width="72" height="40" rx="8" fill="${GOLD_LIGHT}" fill-opacity="0.2" stroke="${GOLD_LIGHT}" stroke-width="1.6"/>
        <rect x="264" y="176" width="72" height="40" rx="8" fill="${CREAM}" fill-opacity="0.16" stroke="${CREAM}" stroke-width="1.6"/>
        <circle cx="420" cy="156" r="34" fill="none" stroke="${GOLD}" stroke-width="3"/>
        <path d="M 406 156 L 416 166 L 440 140" fill="none" stroke="${GOLD}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

        <rect x="64" y="268" width="132" height="196" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <text x="130" y="316" text-anchor="middle" fill="${GOLD}" font-size="28" font-weight="700" font-family="Georgia, serif">01</text>
        <rect x="88" y="340" width="84" height="8" rx="4" fill="${CREAM}" fill-opacity="0.25"/>
        <rect x="88" y="364" width="64" height="8" rx="4" fill="${GOLD}" fill-opacity="0.45"/>
        <rect x="88" y="388" width="72" height="8" rx="4" fill="${CREAM}" fill-opacity="0.18"/>

        <rect x="214" y="268" width="132" height="196" rx="16" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <text x="280" y="316" text-anchor="middle" fill="${GOLD_LIGHT}" font-size="28" font-weight="700" font-family="Georgia, serif">02</text>
        <rect x="238" y="340" width="84" height="8" rx="4" fill="${CREAM}" fill-opacity="0.25"/>
        <rect x="238" y="364" width="72" height="8" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.45"/>
        <rect x="238" y="388" width="56" height="8" rx="4" fill="${CREAM}" fill-opacity="0.18"/>

        <rect x="364" y="268" width="132" height="196" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <text x="430" y="316" text-anchor="middle" fill="${GOLD}" font-size="28" font-weight="700" font-family="Georgia, serif">03</text>
        <rect x="388" y="340" width="84" height="8" rx="4" fill="${CREAM}" fill-opacity="0.25"/>
        <rect x="388" y="364" width="56" height="8" rx="4" fill="${GOLD}" fill-opacity="0.45"/>
        <rect x="388" y="388" width="68" height="8" rx="4" fill="${CREAM}" fill-opacity="0.18"/>
      </g>`,
      'glowChi',
    ),
  },
  'how-to-choose-healthcare-market-research-agency-saudi-arabia': {
    cover: 'how-to-choose-healthcare-market-research-agency-saudi-arabia-cover.jpg',
    hero: 'how-to-choose-healthcare-market-research-agency-saudi-arabia-hero.jpg',
    badge: 'SAUDI ARABIA  ·  BUYER GUIDE',
    lines: ['10 questions for', 'a KSA MR agency'],
    goldLine: 'Before you brief',
    sub: 'Fieldwork, PDPL, access · 2026',
    motif: glowMotif(
      `
      <path d="M 0 552 C 90 518, 200 578, 320 534 S 470 522, 560 554 V 630 H 0 Z" fill="#0A1422"/>
      <g>
        <rect x="72" y="86" width="420" height="72" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <circle cx="110" cy="122" r="16" fill="${GOLD}"/>
        <rect x="140" y="108" width="320" height="10" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.7"/>
        <rect x="140" y="128" width="220" height="8" rx="4" fill="${CREAM}" fill-opacity="0.22"/>

        <rect x="72" y="178" width="420" height="72" rx="16" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <circle cx="110" cy="214" r="16" fill="${GOLD_LIGHT}"/>
        <rect x="140" y="200" width="300" height="10" rx="4" fill="${GOLD}" fill-opacity="0.55"/>
        <rect x="140" y="220" width="180" height="8" rx="4" fill="${CREAM}" fill-opacity="0.22"/>

        <rect x="72" y="270" width="420" height="72" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <circle cx="110" cy="306" r="16" fill="${GOLD}"/>
        <rect x="140" y="292" width="280" height="10" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.7"/>
        <rect x="140" y="312" width="200" height="8" rx="4" fill="${CREAM}" fill-opacity="0.22"/>

        <rect x="96" y="372" width="64" height="180" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="180" y="332" width="64" height="220" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="264" y="392" width="64" height="160" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="348" y="352" width="64" height="200" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="112" y="390" width="32" height="8" rx="2" fill="${GOLD}"/>
        <rect x="196" y="350" width="32" height="8" rx="2" fill="${GOLD_LIGHT}"/>
        <rect x="280" y="410" width="32" height="8" rx="2" fill="${GOLD}"/>
        <rect x="364" y="370" width="32" height="8" rx="2" fill="${GOLD_LIGHT}"/>
      </g>`,
      'glowQ',
    ),
  },
  'dubai-essential-drug-list-formulary-submission': {
    cover: 'dubai-essential-drug-list-formulary-submission-cover.jpg',
    hero: 'dubai-essential-drug-list-formulary-submission-hero.jpg',
    badge: 'DUBAI  ·  FORMULARY  ·  2026',
    lines: ['Dubai Essential', 'Drug List'],
    goldLine: 'Formulary evidence',
    sub: 'DDC, EBP and local RWE · 2026',
    motif: glowMotif(
      `
      <path d="M 0 552 C 90 518, 200 578, 320 534 S 470 522, 560 554 V 630 H 0 Z" fill="#0A1422"/>
      <g>
        <rect x="64" y="72" width="432" height="72" rx="14" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="80" y="92" width="28" height="32" rx="6" fill="${GOLD}"/>
        <rect x="120" y="96" width="240" height="10" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.75"/>
        <rect x="120" y="116" width="160" height="8" rx="4" fill="${CREAM}" fill-opacity="0.22"/>

        <rect x="64" y="160" width="432" height="72" rx="14" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="80" y="180" width="28" height="32" rx="6" fill="${GOLD_LIGHT}"/>
        <rect x="120" y="184" width="220" height="10" rx="4" fill="${GOLD}" fill-opacity="0.6"/>
        <rect x="120" y="204" width="140" height="8" rx="4" fill="${CREAM}" fill-opacity="0.22"/>

        <rect x="64" y="248" width="200" height="200" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <text x="164" y="300" text-anchor="middle" fill="${GOLD}" font-size="28" font-weight="700" font-family="Georgia, serif">01</text>
        <rect x="88" y="324" width="152" height="8" rx="4" fill="${CREAM}" fill-opacity="0.25"/>
        <rect x="88" y="348" width="112" height="8" rx="4" fill="${GOLD}" fill-opacity="0.45"/>
        <rect x="88" y="372" width="128" height="8" rx="4" fill="${CREAM}" fill-opacity="0.18"/>

        <rect x="280" y="248" width="216" height="200" rx="16" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <text x="388" y="300" text-anchor="middle" fill="${GOLD_LIGHT}" font-size="28" font-weight="700" font-family="Georgia, serif">02</text>
        <rect x="304" y="324" width="168" height="8" rx="4" fill="${CREAM}" fill-opacity="0.25"/>
        <rect x="304" y="348" width="120" height="8" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.5"/>
        <rect x="304" y="372" width="144" height="8" rx="4" fill="${CREAM}" fill-opacity="0.18"/>
      </g>`,
      'glowDedl',
    ),
  },
  'uae-drug-pricing-ede-takeover-launch-research': {
    cover: 'uae-drug-pricing-ede-takeover-launch-research-cover.jpg',
    hero: 'uae-drug-pricing-ede-takeover-launch-research-hero.jpg',
    badge: 'UAE  ·  EDE  ·  PRICING',
    lines: ['UAE drug pricing', 'after EDE'],
    goldLine: 'Launch research 2026',
    sub: 'First price, list cuts, evidence',
    motif: glowMotif(
      `
      <path d="M 0 552 C 90 518, 200 578, 320 534 S 470 522, 560 554 V 630 H 0 Z" fill="#0A1422"/>
      <g fill="#0C1728" stroke="${GOLD_LIGHT}" stroke-width="1.6">
        ${skylineBlocks([
          [48, 28, 96],
          [84, 36, 168, true],
          [128, 22, 124],
          [158, 48, 210],
          [214, 30, 150],
          [252, 40, 188, true],
          [300, 24, 112],
          [332, 52, 236],
          [392, 28, 140],
          [428, 44, 176],
        ])}
      </g>
      <g>
        <rect x="72" y="88" width="196" height="168" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.2"/>
        <rect x="92" y="196" width="28" height="40" rx="4" fill="${GOLD}"/>
        <rect x="132" y="168" width="28" height="68" rx="4" fill="${GOLD_LIGHT}"/>
        <rect x="172" y="148" width="28" height="88" rx="4" fill="${GOLD}"/>
        <rect x="212" y="128" width="28" height="108" rx="4" fill="${CREAM}"/>
        <rect x="292" y="88" width="196" height="168" rx="16" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2.2"/>
        <path d="M 320 132 L 388 188 L 456 148" fill="none" stroke="${GOLD}" stroke-width="3.2" stroke-linecap="round"/>
        <circle cx="320" cy="132" r="7" fill="${GOLD}"/>
        <circle cx="388" cy="188" r="7" fill="${GOLD_LIGHT}"/>
        <circle cx="456" cy="148" r="7" fill="${CREAM}"/>
        <path d="M 320 216 H 460 M 320 238 H 428" stroke="${CREAM}" stroke-opacity="0.35" stroke-width="4" stroke-linecap="round"/>
      </g>`,
      'glowP',
    ),
  },
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
  'china-biotech-export-controls-pharma-deals-2026': {
    cover: 'china-biotech-export-controls-pharma-deals-2026-cover.jpg',
    hero: 'china-biotech-export-controls-pharma-deals-2026-hero.jpg',
    badge: 'CHINA  ·  BIOTECH  ·  2026',
    lines: ['China biotech', 'export controls'],
    goldLine: 'Draft catalogue',
    sub: 'Deal, licence and Gulf access · 2026',
    motif: glowMotif(
      `
      <path d="M 0 552 C 90 518, 200 578, 320 534 S 470 522, 560 554 V 630 H 0 Z" fill="#0A1422"/>
      <g>
        <rect x="64" y="72" width="200" height="248" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="88" y="96" width="152" height="12" rx="4" fill="${GOLD}"/>
        <rect x="88" y="128" width="120" height="8" rx="4" fill="${CREAM}" fill-opacity="0.22"/>
        <rect x="88" y="152" width="140" height="8" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.55"/>
        <rect x="88" y="176" width="100" height="8" rx="4" fill="${CREAM}" fill-opacity="0.18"/>
        <rect x="88" y="208" width="152" height="72" rx="10" fill="#101C30" stroke="${GOLD_LIGHT}" stroke-width="1.6"/>
        <circle cx="124" cy="244" r="14" fill="${GOLD}"/>
        <rect x="148" y="232" width="72" height="8" rx="4" fill="${CREAM}" fill-opacity="0.28"/>
        <rect x="148" y="252" width="56" height="8" rx="4" fill="${GOLD}" fill-opacity="0.45"/>

        <rect x="284" y="72" width="216" height="112" rx="16" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="308" y="100" width="48" height="56" rx="8" fill="${GOLD}"/>
        <rect x="368" y="108" width="28" height="40" rx="6" fill="${GOLD_LIGHT}"/>
        <rect x="408" y="88" width="28" height="60" rx="6" fill="${CREAM}"/>

        <rect x="284" y="204" width="216" height="116" rx="16" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="308" y="232" width="168" height="10" rx="4" fill="${GOLD}" fill-opacity="0.7"/>
        <rect x="308" y="256" width="128" height="8" rx="4" fill="${CREAM}" fill-opacity="0.22"/>
        <rect x="308" y="280" width="148" height="8" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.45"/>

        <rect x="80" y="348" width="72" height="184" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="168" y="308" width="72" height="224" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="256" y="368" width="72" height="164" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="344" y="328" width="72" height="204" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="432" y="388" width="72" height="144" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="96" y="368" width="40" height="8" rx="2" fill="${GOLD}"/>
        <rect x="184" y="328" width="40" height="8" rx="2" fill="${GOLD_LIGHT}"/>
        <rect x="272" y="388" width="40" height="8" rx="2" fill="${GOLD}"/>
        <rect x="360" y="348" width="40" height="8" rx="2" fill="${GOLD_LIGHT}"/>
        <rect x="448" y="408" width="40" height="8" rx="2" fill="${GOLD}"/>
      </g>`,
      'glowChinaExport',
    ),
  },
  'kuwait-drug-pricing-2026-decision-62': {
    cover: 'kuwait-drug-pricing-2026-decision-62-cover.jpg',
    hero: 'kuwait-drug-pricing-2026-decision-62-hero.jpg',
    badge: 'KUWAIT  ·  PRICING  ·  2026',
    lines: ['Kuwait drug', 'pricing'],
    goldLine: 'Decision 62/2026',
    sub: 'Ceiling prices and launch evidence',
    motif: glowMotif(
      `
      <path d="M 0 556 C 110 520, 230 580, 350 538 S 480 528, 560 552 V 630 H 0 Z" fill="#0A1422"/>
      <g>
        <rect x="72" y="96" width="132" height="96" rx="14" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="96" y="124" width="84" height="10" rx="4" fill="${GOLD}"/>
        <rect x="96" y="150" width="60" height="8" rx="4" fill="${CREAM}" fill-opacity="0.24"/>
        <path d="M 212 144 H 252" stroke="${GOLD_LIGHT}" stroke-width="3"/>
        <polygon points="252,136 266,144 252,152" fill="${GOLD_LIGHT}"/>
        <rect x="272" y="96" width="132" height="96" rx="14" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="296" y="124" width="84" height="10" rx="4" fill="${GOLD_LIGHT}"/>
        <rect x="296" y="150" width="60" height="8" rx="4" fill="${CREAM}" fill-opacity="0.24"/>
        <path d="M 338 200 V 236" stroke="${GOLD_LIGHT}" stroke-width="3"/>
        <polygon points="330,236 338,250 346,236" fill="${GOLD_LIGHT}"/>
        <rect x="272" y="256" width="132" height="96" rx="14" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="296" y="284" width="84" height="10" rx="4" fill="${GOLD}"/>
        <rect x="296" y="310" width="60" height="8" rx="4" fill="${CREAM}" fill-opacity="0.24"/>
        <rect x="72" y="388" width="420" height="10" rx="5" fill="${CREAM}" fill-opacity="0.12"/>
        <rect x="72" y="388" width="300" height="10" rx="5" fill="${GOLD}"/>
        <rect x="72" y="428" width="420" height="10" rx="5" fill="${CREAM}" fill-opacity="0.12"/>
        <rect x="72" y="428" width="220" height="10" rx="5" fill="${GOLD_LIGHT}"/>
        <rect x="72" y="468" width="420" height="10" rx="5" fill="${CREAM}" fill-opacity="0.12"/>
        <rect x="72" y="468" width="140" height="10" rx="5" fill="${GOLD}"/>
      </g>`,
      'glowKuwaitPricing',
    ),
  },
  'uae-pharmacovigilance-requirements-2026': {
    cover: 'uae-pharmacovigilance-requirements-2026-cover.jpg',
    hero: 'uae-pharmacovigilance-requirements-2026-hero.jpg',
    badge: 'UAE  ·  DRUG SAFETY  ·  2026',
    lines: ['UAE pharmaco-', 'vigilance'],
    goldLine: 'EDE 2026 update',
    sub: 'Safety rules and 3PL storage',
    motif: glowMotif(
      `
      <path d="M 0 552 C 100 516, 220 576, 340 534 S 490 526, 560 550 V 630 H 0 Z" fill="#0A1422"/>
      <g>
        <path d="M 176 92 L 268 128 V 220 C 268 288, 222 330, 176 352 C 130 330, 84 288, 84 220 V 128 Z" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2.6"/>
        <path d="M 136 222 L 166 252 L 222 190" fill="none" stroke="${GOLD_LIGHT}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="312" y="196" width="196" height="156" rx="12" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <polygon points="300,200 410,140 520,200" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="336" y="232" width="44" height="40" rx="4" fill="${GOLD}" fill-opacity="0.85"/>
        <rect x="388" y="232" width="44" height="40" rx="4" fill="${CREAM}" fill-opacity="0.22"/>
        <rect x="440" y="232" width="44" height="40" rx="4" fill="${GOLD_LIGHT}" fill-opacity="0.6"/>
        <rect x="336" y="284" width="44" height="40" rx="4" fill="${CREAM}" fill-opacity="0.22"/>
        <rect x="388" y="284" width="44" height="40" rx="4" fill="${GOLD}" fill-opacity="0.6"/>
        <rect x="440" y="284" width="44" height="40" rx="4" fill="${CREAM}" fill-opacity="0.22"/>
        <rect x="84" y="404" width="424" height="10" rx="5" fill="${CREAM}" fill-opacity="0.12"/>
        <rect x="84" y="404" width="180" height="10" rx="5" fill="${GOLD}"/>
        <rect x="84" y="444" width="424" height="10" rx="5" fill="${CREAM}" fill-opacity="0.12"/>
        <rect x="84" y="444" width="320" height="10" rx="5" fill="${GOLD_LIGHT}"/>
      </g>`,
      'glowUaePv',
    ),
  },
  'japanese-pharmaceutical-companies-middle-east-entry': {
    cover: 'japanese-pharmaceutical-companies-middle-east-entry-cover.jpg',
    hero: 'japanese-pharmaceutical-companies-middle-east-entry-hero.jpg',
    badge: 'JAPAN  ·  GULF  ·  2026',
    lines: ['Japanese pharma', 'in the Gulf'],
    goldLine: 'Partner or factory',
    sub: 'Two entry routes, one research gap',
    motif: glowMotif(
      `
      <path d="M 0 550 C 110 514, 230 576, 350 534 S 486 526, 560 550 V 630 H 0 Z" fill="#0A1422"/>
      <g>
        <circle cx="140" cy="170" r="70" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <circle cx="140" cy="170" r="30" fill="${GOLD}"/>
        <path d="M 210 170 C 300 150, 340 220, 420 210" fill="none" stroke="${GOLD}" stroke-width="3" stroke-dasharray="10 8"/>
        <path d="M 210 196 C 290 260, 330 330, 420 330" fill="none" stroke="${GOLD_LIGHT}" stroke-width="3"/>
        <rect x="420" y="176" width="92" height="68" rx="12" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <circle cx="452" cy="210" r="12" fill="${GOLD}"/>
        <rect x="472" y="204" width="28" height="8" rx="4" fill="${CREAM}" fill-opacity="0.28"/>
        <rect x="420" y="292" width="92" height="76" rx="8" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <polygon points="420,292 444,268 444,292 468,268 468,292 492,268 492,292 512,292" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="438" y="320" width="20" height="28" rx="3" fill="${GOLD_LIGHT}" fill-opacity="0.7"/>
        <rect x="470" y="320" width="20" height="28" rx="3" fill="${CREAM}" fill-opacity="0.24"/>
        <rect x="80" y="420" width="432" height="10" rx="5" fill="${CREAM}" fill-opacity="0.12"/>
        <rect x="80" y="420" width="260" height="10" rx="5" fill="${GOLD}"/>
        <rect x="80" y="460" width="432" height="10" rx="5" fill="${CREAM}" fill-opacity="0.12"/>
        <rect x="80" y="460" width="160" height="10" rx="5" fill="${GOLD_LIGHT}"/>
      </g>`,
      'glowJapanGulf',
    ),
  },
  'mental-health-market-research-saudi-arabia': {
    cover: 'mental-health-market-research-saudi-arabia-cover.jpg',
    hero: 'mental-health-market-research-saudi-arabia-hero.jpg',
    badge: 'SAUDI ARABIA  ·  CNS  ·  2026',
    lines: ['Saudi mental', 'health research'],
    goldLine: 'The 86% gap',
    sub: 'Prescribers, stigma and telepsychiatry',
    motif: glowMotif(
      `
      <path d="M 0 552 C 110 516, 230 578, 350 536 S 486 526, 560 550 V 630 H 0 Z" fill="#0A1422"/>
      <g>
        <circle cx="200" cy="210" r="112" fill="none" stroke="${CREAM}" stroke-opacity="0.14" stroke-width="26"/>
        <path d="M 200 98 A 112 112 0 1 1 132 121" fill="none" stroke="${GOLD}" stroke-width="26" stroke-linecap="round"/>
        <rect x="352" y="132" width="156" height="112" rx="14" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <circle cx="430" cy="172" r="18" fill="${GOLD_LIGHT}" fill-opacity="0.85"/>
        <path d="M 394 244 C 394 212, 466 212, 466 244 Z" fill="${GOLD_LIGHT}" fill-opacity="0.55"/>
        <rect x="408" y="256" width="44" height="10" rx="5" fill="${CREAM}" fill-opacity="0.24"/>
        <path d="M 330 300 C 380 320, 420 300, 470 330" fill="none" stroke="${GOLD}" stroke-width="3" stroke-dasharray="8 8"/>
        <rect x="80" y="404" width="432" height="10" rx="5" fill="${CREAM}" fill-opacity="0.12"/>
        <rect x="80" y="404" width="372" height="10" rx="5" fill="${GOLD}"/>
        <rect x="80" y="444" width="432" height="10" rx="5" fill="${CREAM}" fill-opacity="0.12"/>
        <rect x="80" y="444" width="200" height="10" rx="5" fill="${GOLD_LIGHT}"/>
      </g>`,
      'glowSaudiMentalHealth',
    ),
  },
  'market-entry-research-singapore-southeast-asia': {
    cover: 'market-entry-research-singapore-southeast-asia-cover.jpg',
    hero: 'market-entry-research-singapore-southeast-asia-hero.jpg',
    badge: 'SINGAPORE  ·  ASEAN  ·  2026',
    lines: ['Southeast Asia', 'market entry'],
    goldLine: 'Start at the border',
    sub: 'Research beyond the Singapore base',
    brandMeta: 'INDUSTRY MARKET RESEARCH',
    motif: glowMotif(
      `
      <path d="M 0 552 C 110 516, 230 578, 350 536 S 486 526, 560 550 V 630 H 0 Z" fill="#0A1422"/>
      <g>
        <circle cx="280" cy="250" r="44" fill="${GOLD}"/>
        <circle cx="280" cy="250" r="70" fill="none" stroke="${GOLD_LIGHT}" stroke-width="2" stroke-opacity="0.5"/>
        <path d="M 280 180 L 150 110 M 350 250 L 480 200 M 330 300 L 450 380 M 230 300 L 120 380 M 220 220 L 100 230" stroke="${GOLD_LIGHT}" stroke-width="2.5" stroke-dasharray="8 7"/>
        <rect x="112" y="84" width="76" height="52" rx="10" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="442" y="174" width="76" height="52" rx="10" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="412" y="354" width="76" height="52" rx="10" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="82" y="354" width="76" height="52" rx="10" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="62" y="204" width="76" height="52" rx="10" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="80" y="460" width="432" height="10" rx="5" fill="${CREAM}" fill-opacity="0.12"/>
        <rect x="80" y="460" width="240" height="10" rx="5" fill="${GOLD}"/>
      </g>`,
      'glowSingaporeEntry',
    ),
  },
  'womens-health-market-research-gcc': {
    cover: 'womens-health-market-research-gcc-cover.jpg',
    hero: 'womens-health-market-research-gcc-hero.jpg',
    badge: 'GCC  ·  WOMEN’S HEALTH  ·  2026',
    lines: ['Women’s health', 'in the Gulf'],
    goldLine: 'Research the gap',
    sub: 'Fertility, menopause and PCOS',
    motif: glowMotif(
      `
      <path d="M 0 552 C 110 516, 230 578, 350 536 S 486 526, 560 550 V 630 H 0 Z" fill="#0A1422"/>
      <g>
        <path d="M 90 360 C 160 140, 400 140, 470 360" fill="none" stroke="${CREAM}" stroke-opacity="0.16" stroke-width="18" stroke-linecap="round"/>
        <path d="M 90 360 C 130 240, 210 180, 280 172" fill="none" stroke="${GOLD}" stroke-width="18" stroke-linecap="round"/>
        <circle cx="132" cy="262" r="26" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="3"/>
        <circle cx="280" cy="172" r="34" fill="${GOLD}"/>
        <circle cx="428" cy="262" r="26" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="3"/>
        <circle cx="280" cy="172" r="54" fill="none" stroke="${GOLD_LIGHT}" stroke-width="2" stroke-opacity="0.5"/>
        <rect x="80" y="440" width="432" height="10" rx="5" fill="${CREAM}" fill-opacity="0.12"/>
        <rect x="80" y="440" width="120" height="10" rx="5" fill="${GOLD}"/>
      </g>`,
      'glowGccWomensHealth',
    ),
  },
  'brand-tracking-chinese-electronics-brands-middle-east': {
    cover: 'brand-tracking-chinese-electronics-brands-middle-east-cover.jpg',
    hero: 'brand-tracking-chinese-electronics-brands-middle-east-hero.jpg',
    badge: 'GCC  ·  BRAND TRACKING  ·  2026',
    lines: ['Chinese brands', 'in the Gulf'],
    goldLine: 'Track the buyer',
    sub: 'Awareness, preference and NPS',
    brandMeta: 'INDUSTRY MARKET RESEARCH',
    motif: glowMotif(
      `
      <path d="M 0 552 C 110 516, 230 578, 350 536 S 486 526, 560 550 V 630 H 0 Z" fill="#0A1422"/>
      <g>
        <rect x="96" y="96" width="150" height="270" rx="24" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="3"/>
        <rect x="146" y="114" width="50" height="8" rx="4" fill="${CREAM}" fill-opacity="0.3"/>
        <rect x="118" y="140" width="106" height="190" rx="10" fill="${CREAM}" fill-opacity="0.06"/>
        <path d="M 290 330 L 350 290 L 400 306 L 460 220 L 510 180" fill="none" stroke="${GOLD}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="510" cy="180" r="12" fill="${GOLD}"/>
        <path d="M 290 360 H 520" stroke="${CREAM}" stroke-opacity="0.2" stroke-width="2"/>
        <rect x="80" y="420" width="432" height="10" rx="5" fill="${CREAM}" fill-opacity="0.12"/>
        <rect x="80" y="420" width="260" height="10" rx="5" fill="${GOLD}"/>
        <rect x="80" y="460" width="432" height="10" rx="5" fill="${CREAM}" fill-opacity="0.12"/>
        <rect x="80" y="460" width="150" height="10" rx="5" fill="${GOLD_LIGHT}"/>
      </g>`,
      'glowChineseElectronicsGulf',
    ),
  },
  'chinese-suppliers-saudi-giga-projects-research': {
    cover: 'chinese-suppliers-saudi-giga-projects-research-cover.jpg',
    hero: 'chinese-suppliers-saudi-giga-projects-research-hero.jpg',
    badge: 'SAUDI ARABIA  ·  B2B  ·  2026',
    lines: ['Chinese suppliers', 'on giga-projects'],
    goldLine: 'Find the buyer',
    sub: 'Qiddiya, local content and interviews',
    brandMeta: 'INDUSTRY MARKET RESEARCH',
    motif: glowMotif(
      `
      <path d="M 0 552 C 110 516, 230 578, 350 536 S 486 526, 560 550 V 630 H 0 Z" fill="#0A1422"/>
      <g>
        <rect x="110" y="280" width="70" height="160" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="200" y="200" width="90" height="240" fill="#0E1A2C" stroke="${GOLD}" stroke-width="2"/>
        <rect x="310" y="140" width="110" height="300" fill="#0E1A2C" stroke="${GOLD_LIGHT}" stroke-width="2"/>
        <rect x="216" y="220" width="58" height="40" fill="${CREAM}" fill-opacity="0.08"/>
        <rect x="330" y="164" width="70" height="48" fill="${CREAM}" fill-opacity="0.08"/>
        <circle cx="245" cy="120" r="18" fill="${GOLD}"/>
        <path d="M 245 138 V 200" stroke="${GOLD}" stroke-width="3"/>
        <rect x="80" y="460" width="432" height="10" rx="5" fill="${CREAM}" fill-opacity="0.12"/>
        <rect x="80" y="460" width="160" height="10" rx="5" fill="${GOLD}"/>
      </g>`,
      'glowChineseGigaSaudi',
    ),
  },
};
