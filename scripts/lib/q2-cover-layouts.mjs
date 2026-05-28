/** 30 distinct SVG visual compositions for Q2 2026 blog covers (one layout per topic id). */

const GOLD = '#c9a227';
const CREAM = '#f8f6f1';
const MUTED = '#9eb0c8';

export function escapeXml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * @param {string} text
 * @param {number} maxLen
 */
export function wrapTitle(text, maxLen = 26) {
  const words = String(text).trim().split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > maxLen && line) {
      lines.push(line);
      line = w;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines.slice(0, 3);
}

/**
 * @param {number} layoutIndex 1–30
 * @param {{ accent: string; accentSoft: string; label: string }} theme
 * @param {{ text: string; color: string }} badge
 */
export function buildUniqueVisual(layoutIndex, theme, badge) {
  const a = theme.accent;
  const s = theme.accentSoft;
  const i = ((layoutIndex - 1) % 30) + 1;

  const visuals = {
    1: /* PBM / formulary tiers */ `
      <polygon points="0,0 520,0 380,630 0,630" fill="${a}" opacity="0.12"/>
      <rect x="40" y="80" width="12" height="380" rx="2" fill="${a}" opacity="0.5"/>
      <rect x="68" y="140" width="12" height="320" rx="2" fill="${a}" opacity="0.35"/>
      <rect x="96" y="100" width="12" height="360" rx="2" fill="${a}" opacity="0.7"/>
      <rect x="124" y="200" width="12" height="260" rx="2" fill="${GOLD}" opacity="0.6"/>
      <circle cx="950" cy="120" r="180" fill="none" stroke="${a}" stroke-width="2" opacity="0.25"/>
      <circle cx="950" cy="120" r="120" fill="${s}"/>`,
    2: /* ADC hematology */ `
      <path d="M720 80 Q1100 200 900 400 Q700 550 1150 630 L1200 630 L1200 0 Z" fill="${a}" opacity="0.14"/>
      <circle cx="920" cy="280" r="90" fill="none" stroke="${a}" stroke-width="3" opacity="0.6"/>
      <circle cx="920" cy="280" r="40" fill="${a}" opacity="0.35"/>
      <line x1="920" y1="190" x2="920" y2="370" stroke="${GOLD}" stroke-width="2" opacity="0.5"/>
      <line x1="830" y1="280" x2="1010" y2="280" stroke="${GOLD}" stroke-width="2" opacity="0.5"/>`,
    3: /* PDUFA clock */ `
      <rect x="780" y="60" width="360" height="360" rx="24" fill="${s}" stroke="${a}" stroke-width="2"/>
      <circle cx="960" cy="240" r="140" fill="none" stroke="${a}" stroke-width="4" opacity="0.8"/>
      <line x1="960" y1="240" x2="960" y2="130" stroke="${GOLD}" stroke-width="4" stroke-linecap="round"/>
      <line x1="960" y1="240" x2="1040" y2="280" stroke="${CREAM}" stroke-width="3" stroke-linecap="round"/>
      <text x="960" y="450" text-anchor="middle" fill="${a}" font-size="14" font-family="Helvetica" font-weight="700">PDUFA</text>`,
    4: /* M&A network */ `
      <circle cx="850" cy="200" r="8" fill="${GOLD}"/>
      <circle cx="1050" cy="150" r="8" fill="${a}"/>
      <circle cx="1100" cy="350" r="8" fill="${a}"/>
      <circle cx="750" cy="400" r="8" fill="${GOLD}"/>
      <line x1="850" y1="200" x2="1050" y2="150" stroke="${a}" stroke-width="2" opacity="0.5"/>
      <line x1="1050" y1="150" x2="1100" y2="350" stroke="${a}" stroke-width="2" opacity="0.5"/>
      <line x1="1100" y1="350" x2="750" y2="400" stroke="${a}" stroke-width="2" opacity="0.5"/>
      <line x1="750" y1="400" x2="850" y2="200" stroke="${GOLD}" stroke-width="2" opacity="0.4"/>
      <rect x="800" y="480" width="320" height="8" rx="4" fill="${a}" opacity="0.3"/>`,
    5: /* TNBC ADC TROP2 */ `
      <path d="M600 630 C700 400 850 500 1200 200 L1200 630 Z" fill="${a}" opacity="0.18"/>
      <path d="M680 500 L720 420 L760 500 L800 380 L840 500" fill="none" stroke="${a}" stroke-width="3" opacity="0.7"/>
      <ellipse cx="1000" cy="250" rx="100" ry="60" fill="none" stroke="${GOLD}" stroke-width="2" opacity="0.5"/>`,
    6: /* Liver HDV */ `
      <path d="M750 150 Q950 100 1100 250 Q1050 450 850 500 Q700 480 750 150 Z" fill="${a}" opacity="0.2" stroke="${a}" stroke-width="2"/>
      <ellipse cx="900" cy="320" rx="60" ry="90" fill="${s}"/>
      <path d="M880 200 Q920 280 880 360" fill="none" stroke="${GOLD}" stroke-width="2" opacity="0.6"/>`,
    7: /* IPF lungs */ `
      <path d="M820 120 Q900 300 820 480 Q780 350 820 120" fill="${s}" stroke="${a}" stroke-width="2"/>
      <path d="M1000 100 Q1080 300 1000 500 Q960 320 1000 100" fill="${s}" stroke="${a}" stroke-width="2"/>
      <line x1="860" y1="200" x2="980" y2="200" stroke="${a}" stroke-width="1" opacity="0.4"/>
      <line x1="860" y1="280" x2="980" y2="280" stroke="${a}" stroke-width="1" opacity="0.4"/>
      <line x1="860" y1="360" x2="980" y2="360" stroke="${a}" stroke-width="1" opacity="0.4"/>`,
    8: /* PROS genetic */ `
      <text x="900" y="320" fill="${a}" font-family="monospace" font-size="120" font-weight="700" opacity="0.15">πK3CA</text>
      <rect x="780" y="80" width="24" height="24" fill="${GOLD}" opacity="0.5"/>
      <rect x="820" y="120" width="24" height="24" fill="${a}" opacity="0.4"/>
      <rect x="860" y="80" width="24" height="24" fill="${a}" opacity="0.6"/>
      <rect x="900" y="160" width="24" height="24" fill="${GOLD}" opacity="0.35"/>`,
    9: /* Hypertension ECG */ `
      <polyline points="700,400 740,400 760,320 800,480 840,280 880,400 920,360 960,400 1100,400" fill="none" stroke="${a}" stroke-width="4" stroke-linejoin="round"/>
      <rect x="700" y="120" width="400" height="200" rx="8" fill="${s}"/>
      <line x1="700" y1="220" x2="1100" y2="220" stroke="${a}" stroke-width="1" opacity="0.3"/>`,
    10: /* MCL BTK */ `
      <circle cx="950" cy="300" r="160" fill="none" stroke="${a}" stroke-width="1" opacity="0.2"/>
      <circle cx="950" cy="300" r="110" fill="none" stroke="${a}" stroke-width="2" opacity="0.4"/>
      <circle cx="950" cy="300" r="55" fill="${a}" opacity="0.25"/>
      <path d="M890 300 L950 240 L1010 300 L950 360 Z" fill="${GOLD}" opacity="0.4"/>`,
    11: /* Biosimilar insulin */ `
      <rect x="820" y="100" width="80" height="200" rx="40" fill="none" stroke="${a}" stroke-width="3"/>
      <rect x="840" y="120" width="40" height="160" rx="20" fill="${s}"/>
      <line x1="900" y1="200" x2="1050" y2="200" stroke="${GOLD}" stroke-width="3" stroke-dasharray="8 6"/>
      <text x="980" y="210" fill="${GOLD}" font-size="16" font-family="Helvetica" font-weight="700">BIO-SIM</text>`,
    12: /* MS neurology */ `
      <path d="M800 150 Q880 250 800 350 Q920 400 1000 300 Q1080 200 960 150 Q880 80 800 150" fill="${s}" stroke="${a}" stroke-width="2"/>
      <circle cx="880" cy="220" r="30" fill="${a}" opacity="0.5"/>
      <circle cx="960" cy="260" r="20" fill="${GOLD}" opacity="0.6"/>`,
    13: /* Gene therapy SMA */ `
      <path d="M750 500 Q850 200 950 500" fill="none" stroke="${a}" stroke-width="4"/>
      <path d="M780 500 Q880 250 980 500" fill="none" stroke="${GOLD}" stroke-width="2" opacity="0.6"/>
      <circle cx="880" cy="350" r="15" fill="${a}"/>
      <circle cx="820" cy="420" r="10" fill="${GOLD}"/>
      <circle cx="940" cy="400" r="12" fill="${a}" opacity="0.7"/>`,
    14: /* RNAi FCS */ `
      <rect x="760" y="100" width="360" height="8" rx="4" fill="${a}" opacity="0.3"/>
      <rect x="760" y="140" width="280" height="8" rx="4" fill="${a}" opacity="0.5"/>
      <rect x="760" y="180" width="320" height="8" rx="4" fill="${GOLD}" opacity="0.5"/>
      <rect x="760" y="220" width="200" height="8" rx="4" fill="${a}" opacity="0.4"/>
      <path d="M900 280 L950 350 L1000 280 L1050 420" fill="none" stroke="${a}" stroke-width="3"/>`,
    15: /* HIV two-drug */ `
      <circle cx="860" cy="280" r="70" fill="${s}" stroke="${a}" stroke-width="3"/>
      <circle cx="1020" cy="280" r="70" fill="${s}" stroke="${GOLD}" stroke-width="3"/>
      <line x1="930" y1="280" x2="950" y2="280" stroke="${CREAM}" stroke-width="4"/>
      <text x="940" y="288" text-anchor="middle" fill="${CREAM}" font-size="22" font-weight="700">+</text>`,
    16: /* CAR-T */ `
      <circle cx="900" cy="300" r="100" fill="${a}" opacity="0.15"/>
      <circle cx="870" cy="270" r="25" fill="${a}" opacity="0.5"/>
      <circle cx="930" cy="270" r="25" fill="${a}" opacity="0.5"/>
      <circle cx="900" cy="330" r="25" fill="${GOLD}" opacity="0.5"/>
      <line x1="870" y1="270" x2="930" y2="330" stroke="${a}" stroke-width="2"/>
      <line x1="930" y1="270" x2="870" y2="330" stroke="${a}" stroke-width="2"/>`,
    17: /* AI cardiovascular */ `
      <rect x="750" y="120" width="400" height="280" rx="12" fill="${s}" stroke="${a}" stroke-width="1"/>
      <polyline points="780,340 820,280 860,300 900,220 940,260 980,200 1020,240 1080,180" fill="none" stroke="${GOLD}" stroke-width="3"/>
      <text x="780" y="160" fill="${a}" font-family="monospace" font-size="14">ML · CAMKII</text>`,
    18: /* Digital pathology */ `
      <rect x="780" y="80" width="120" height="90" fill="${a}" opacity="0.2"/>
      <rect x="920" y="80" width="120" height="90" fill="${a}" opacity="0.35"/>
      <rect x="1060" y="80" width="120" height="90" fill="${a}" opacity="0.5"/>
      <rect x="780" y="190" width="120" height="90" fill="${GOLD}" opacity="0.2"/>
      <rect x="920" y="190" width="120" height="90" fill="${a}" opacity="0.4"/>
      <rect x="1060" y="190" width="120" height="90" fill="${a}" opacity="0.25"/>
      <circle cx="900" cy="400" r="50" fill="none" stroke="${GOLD}" stroke-width="2"/>`,
    19: /* Self-pay KwikPen */ `
      <rect x="880" y="120" width="50" height="280" rx="8" fill="${s}" stroke="${a}" stroke-width="2"/>
      <rect x="960" y="180" width="180" height="100" rx="12" fill="${a}" opacity="0.25"/>
      <text x="1050" y="240" text-anchor="middle" fill="${CREAM}" font-size="18" font-weight="700">$</text>`,
    20: /* Oral GLP-1 pill */ `
      <ellipse cx="920" cy="280" rx="120" ry="70" fill="${a}" opacity="0.3"/>
      <ellipse cx="920" cy="280" rx="90" ry="50" fill="${s}" stroke="${GOLD}" stroke-width="2"/>
      <line x1="850" y1="280" x2="990" y2="280" stroke="${CREAM}" stroke-width="2" opacity="0.3"/>`,
    21: /* LAD-I gene */ `
      <path d="M800 200 L880 120 L960 200 L1040 120 L1120 200" fill="none" stroke="${a}" stroke-width="3"/>
      <circle cx="880" cy="200" r="20" fill="${GOLD}"/>
      <circle cx="960" cy="200" r="20" fill="${a}"/>
      <circle cx="1040" cy="200" r="20" fill="${a}" opacity="0.6"/>`,
    22: /* Weekly insulin */ `
      <circle cx="950" cy="280" r="130" fill="none" stroke="${a}" stroke-width="2" stroke-dasharray="12 8"/>
      <text x="950" y="290" text-anchor="middle" fill="${GOLD}" font-size="48" font-weight="700">7d</text>
      <text x="950" y="330" text-anchor="middle" fill="${MUTED}" font-size="14">WEEKLY</text>`,
    23: /* NMIBC bladder */ `
      <path d="M820 400 Q900 250 980 400 Q1060 250 1140 400" fill="none" stroke="${a}" stroke-width="4"/>
      <ellipse cx="980" cy="350" rx="80" ry="50" fill="${s}"/>`,
    24: /* SCLC lung BiTE */ `
      <path d="M750 500 L850 200 L950 450 L1050 180 L1150 500 Z" fill="${a}" opacity="0.12" stroke="${a}" stroke-width="1"/>
      <line x1="850" y1="200" x2="850" y2="450" stroke="${GOLD}" stroke-width="2" opacity="0.5"/>
      <line x1="1050" y1="180" x2="1050" y2="500" stroke="${GOLD}" stroke-width="2" opacity="0.5"/>`,
    25: /* SCLC maintenance */ `
      <rect x="760" y="140" width="380" height="240" rx="16" fill="${s}"/>
      <path d="M800 340 L880 220 L960 300 L1040 200 L1120 340" fill="none" stroke="${a}" stroke-width="4"/>
      <circle cx="1120" cy="200" r="16" fill="${GOLD}"/>`,
    26: /* APDS immunology */ `
      <circle cx="900" cy="280" r="100" fill="none" stroke="${a}" stroke-width="2"/>
      <circle cx="860" cy="240" r="35" fill="${a}" opacity="0.4"/>
      <circle cx="940" cy="240" r="35" fill="${a}" opacity="0.4"/>
      <circle cx="900" cy="340" r="35" fill="${GOLD}" opacity="0.4"/>`,
    27: /* Ovarian */ `
      <circle cx="950" cy="300" r="80" fill="${s}" stroke="${a}" stroke-width="3"/>
      <circle cx="950" cy="300" r="120" fill="none" stroke="${GOLD}" stroke-width="1" stroke-dasharray="4 8"/>
      <circle cx="950" cy="300" r="160" fill="none" stroke="${a}" stroke-width="1" opacity="0.3"/>`,
    28: /* PBC pruritus */ `
      <path d="M780 350 Q880 150 980 350 T1180 350" fill="none" stroke="${a}" stroke-width="5" opacity="0.6"/>
      <circle cx="880" cy="200" r="40" fill="${GOLD}" opacity="0.3"/>`,
    29: /* Psoriasis IL-23 */ `
      <g transform="translate(900,280)">
        <polygon points="0,-80 69,40 -69,40" fill="${s}" stroke="${a}" stroke-width="2"/>
        <polygon points="0,-50 43,25 -43,25" fill="${a}" opacity="0.3"/>
      </g>`,
    30: /* Respiratory generic inhaler */ `
      <rect x="860" y="160" width="200" height="80" rx="20" fill="${s}" stroke="${a}" stroke-width="3"/>
      <rect x="900" y="100" width="120" height="70" rx="8" fill="${a}" opacity="0.35"/>
      <ellipse cx="960" cy="420" rx="140" ry="40" fill="none" stroke="${GOLD}" stroke-width="2" opacity="0.5"/>`,
  };

  return visuals[i] || visuals[1];
}

/**
 * Layout-specific background gradients (unique per id).
 * @param {number} layoutIndex
 * @param {string} accent
 */
export function buildBackground(layoutIndex, accent) {
  const i = ((layoutIndex - 1) % 30) + 1;
  const bases = [
    ['#0a1628', '#1a2f4a', '#0d2040'],
    ['#0c1a30', '#152a45', '#1e3d5c'],
    ['#081420', '#123050', '#1a2840'],
    ['#0f1f35', '#2a1a3d', '#12243d'],
    ['#0a1828', '#1c3348', '#0f2540'],
    ['#101c2e', '#1a4035', '#12243d'],
    ['#0d1a2e', '#283850', '#0a2040'],
    ['#12182a', '#2d2450', '#152040'],
    ['#0e1c28', '#3a2030', '#12243d'],
    ['#0a1628', '#203848', '#1a3050'],
  ];
  const b = bases[i % 10];
  return `
    <linearGradient id="bgMain" x1="${i % 3 === 0 ? '100%' : '0%'}" y1="0%" x2="${i % 3 === 1 ? '0%' : '100%'}" y2="100%">
      <stop offset="0%" style="stop-color:${b[0]}"/>
      <stop offset="50%" style="stop-color:${b[1]}"/>
      <stop offset="100%" style="stop-color:${b[2]}"/>
    </linearGradient>
    <radialGradient id="glow" cx="${20 + (i * 2.5) % 60}%" cy="${15 + (i * 3) % 40}%" r="50%">
      <stop offset="0%" style="stop-color:${accent};stop-opacity:0.4"/>
      <stop offset="100%" style="stop-color:${accent};stop-opacity:0"/>
    </radialGradient>`;
}

/**
 * Text block positions vary by layout family.
 * @param {number} layoutIndex
 */
export function getTextLayout(layoutIndex) {
  const i = ((layoutIndex - 1) % 30) + 1;
  if ([2, 5, 6, 10, 16, 20, 27, 29].includes(i)) {
    return { titleX: 64, titleY: 180, titleSize: 42, maxWidth: 520, subY: 380, brandY: 56, badgeY: 100, footerY: 572, align: 'left' };
  }
  if ([3, 9, 17, 18, 25].includes(i)) {
    return { titleX: 64, titleY: 320, titleSize: 40, maxWidth: 680, subY: 480, brandY: 56, badgeY: 100, footerY: 572, align: 'left' };
  }
  if ([11, 15, 19, 22].includes(i)) {
    return { titleX: 64, titleY: 140, titleSize: 44, maxWidth: 560, subY: 340, brandY: 520, badgeY: 56, footerY: 600, align: 'left' };
  }
  if ([4, 7, 12, 14, 21, 24].includes(i)) {
    return { titleX: 480, titleY: 160, titleSize: 38, maxWidth: 680, subY: 300, brandY: 56, badgeY: 100, footerY: 572, align: 'left' };
  }
  return { titleX: 64, titleY: 220, titleSize: 44, maxWidth: 640, subY: 400, brandY: 56, badgeY: 100, footerY: 572, align: 'left' };
}
