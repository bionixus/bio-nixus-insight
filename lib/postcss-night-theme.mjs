/**
 * Night theme colour adapter (PostCSS).
 *
 * The site switched from a light design to a single dark "night" theme. Hundreds of pages still
 * carry light-theme utility classes with fixed colours: `bg-white`, `bg-blue-50`, `text-gray-900`,
 * `border-gray-200`, `text-[#0C1B33]`, `bg-[#FFFEFB]` and so on. Rewriting every page would be a
 * huge, conflict-prone diff, so this plugin adapts those utilities at build time instead:
 *
 *   - light, opaque backgrounds   → dark night surfaces (tinted ones keep a hint of their hue)
 *   - dark or low-contrast text   → light text that passes WCAG contrast on the night background
 *   - light borders / rings       → night lines
 *
 * Colours that already work on a dark page are left alone: white text, gold, vivid accents,
 * dark surfaces and translucent white glass (alpha < 0.5, e.g. `bg-white/10`).
 *
 * Scope: only Tailwind utility rules (text-*, bg-*, border-*, from-*, via-*, to-*, ring-*, fill-*,
 * stroke-*, divide-*, placeholder-*, decoration-*, outline-*, caret-*, accent-*, shadow-*) in
 * src/index.css. Token colours such as `bg-primary` use CSS variables and are never touched, and
 * the hand-written night layer lives in src/styles/night-theme.css, outside this plugin's scope.
 */

const NIGHT = { r: 5, g: 10, b: 20 }; // --background  #050A14
const NIGHT_2 = '#0A1221'; // --card
const NIGHT_25 = '#0E1729'; // between card and muted
const NIGHT_3 = '#121C30'; // --muted
const LINE = '#1D2840'; // --border
const LINE_2 = '#2C3957'; // --input
const INK = '#F3EFE7'; // --foreground
const INK_SOFT = '#DCDEE5';
const INK_2 = '#B9C1D0';
const INK_3 = '#A6AFC2';

const UTILITY = /^-?(?:text|bg|border|from|via|to|ring|fill|stroke|divide|placeholder|decoration|outline|caret|accent|shadow)-/;

const FG_PROPS = new Set(['color', 'fill', 'stroke', 'text-decoration-color', 'caret-color', '-webkit-text-fill-color']);
const SURFACE_PROPS = new Set([
  'background-color',
  '--tw-gradient-from',
  '--tw-gradient-via',
  '--tw-gradient-to',
  '--tw-gradient-stops',
  '--tw-shadow-color',
  'accent-color',
]);
const LINE_PROPS = new Set([
  'border-color',
  'border-top-color',
  'border-right-color',
  'border-bottom-color',
  'border-left-color',
  'border-inline-color',
  'border-inline-start-color',
  'border-inline-end-color',
  'border-block-color',
  'outline-color',
  '--tw-ring-color',
  '--tw-ring-offset-color',
]);

const COLOR_RE = /#[0-9a-fA-F]{3,8}\b|rgba?\((?:[^()]|\([^()]*\))*\)|hsla?\((?:[^()]|\([^()]*\))*\)/g;

function clamp(v, lo, hi) {
  return Math.min(hi, Math.max(lo, v));
}

function hexToRgb(hex) {
  let h = hex.slice(1);
  if (h.length === 3 || h.length === 4) h = [...h].map((c) => c + c).join('');
  const n = parseInt(h.slice(0, 6), 16);
  const a = h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1;
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255, a };
}

function rgbToHex({ r, g, b }) {
  return '#' + [r, g, b].map((v) => clamp(Math.round(v), 0, 255).toString(16).padStart(2, '0')).join('');
}

function rgbToHsl({ r, g, b }) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return { h, s: s * 100, l: l * 100 };
}

function hslToRgb({ h, s, l }) {
  s /= 100; l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return { r: f(0) * 255, g: f(8) * 255, b: f(4) * 255 };
}

function luminance({ r, g, b }) {
  const ch = (v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b);
}

function contrast(a, b) {
  const la = luminance(a), lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

function mix(a, b, t) {
  return { r: a.r + (b.r - a.r) * t, g: a.g + (b.g - a.g) * t, b: a.b + (b.b - a.b) * t };
}

/** Parse a CSS colour literal. Returns null for anything that is not a plain colour. */
function parse(literal) {
  if (literal.startsWith('#')) return { ...hexToRgb(literal), kind: 'hex', alphaExpr: null };
  const m = literal.match(/^(rgba?|hsla?)\((.*)\)$/s);
  if (!m) return null;
  const fn = m[1];
  let body = m[2].trim();
  if (/var\(--(?!tw-)/.test(body)) return null; // token colours: hsl(var(--primary)) etc.
  let alphaExpr = null;
  let parts;
  if (body.includes('/')) {
    const idx = body.lastIndexOf('/');
    alphaExpr = body.slice(idx + 1).trim();
    parts = body.slice(0, idx).trim().split(/[\s,]+/);
  } else {
    parts = body.split(/[\s,]+/);
    if (parts.length === 4) alphaExpr = parts.pop();
  }
  if (parts.length !== 3) return null;
  let rgb;
  if (fn.startsWith('rgb')) {
    const nums = parts.map((p) => (p.endsWith('%') ? (parseFloat(p) * 255) / 100 : parseFloat(p)));
    if (nums.some((n) => Number.isNaN(n))) return null;
    rgb = { r: nums[0], g: nums[1], b: nums[2] };
  } else {
    const [h, s, l] = parts.map((p) => parseFloat(p));
    if ([h, s, l].some((n) => Number.isNaN(n))) return null;
    rgb = hslToRgb({ h, s, l });
  }
  let a = 1;
  if (alphaExpr && /^[0-9.]+%?$/.test(alphaExpr)) {
    a = alphaExpr.endsWith('%') ? parseFloat(alphaExpr) / 100 : parseFloat(alphaExpr);
  }
  return { ...rgb, a, kind: fn.startsWith('rgb') ? 'rgb' : 'hsl', alphaExpr };
}

function format(original, rgb) {
  if (original.kind === 'hex') {
    const hex = rgbToHex(rgb);
    return original.a < 1 ? hex + Math.round(original.a * 255).toString(16).padStart(2, '0') : hex;
  }
  const r = Math.round(rgb.r), g = Math.round(rgb.g), b = Math.round(rgb.b);
  return original.alphaExpr ? `rgb(${r} ${g} ${b} / ${original.alphaExpr})` : `rgb(${r} ${g} ${b})`;
}

/** Text, icon fills and strokes: keep anything readable on night, lift everything else. */
function adaptForeground(c) {
  if (contrast(c, NIGHT) >= 4.6) return null;
  const hsl = rgbToHsl(c);
  const navyish = hsl.h >= 195 && hsl.h <= 245;
  // Navy and slate were the light theme's body/heading text: they become the warm ink scale.
  if (navyish && hsl.l <= 22) return hexToRgb(INK);
  if (hsl.s < 18 || (navyish && hsl.s < 40 && hsl.l <= 50)) {
    if (hsl.l <= 20) return hexToRgb(INK);
    if (hsl.l <= 35) return hexToRgb(INK_SOFT);
    if (hsl.l <= 50) return hexToRgb(INK_2);
    return hexToRgb(INK_3);
  }
  const target = hsl.l < 35 ? 8 : 6;
  let l = Math.max(hsl.l, 50);
  const s = Math.min(hsl.s, 62);
  let out = hslToRgb({ h: hsl.h, s, l });
  while (contrast(out, NIGHT) < target && l < 94) {
    l += 1;
    out = hslToRgb({ h: hsl.h, s, l });
  }
  return out;
}

/** Backgrounds and gradient stops: light opaque surfaces become night surfaces. */
function adaptSurface(c) {
  const hsl = rgbToHsl(c);
  if (hsl.l < 14 && (hsl.s < 25 || (hsl.h >= 195 && hsl.h <= 240))) {
    return hsl.l < 9 ? NIGHT : hexToRgb(NIGHT_2);
  }
  if (hsl.l < 80) return null; // vivid accents and dark surfaces already work
  const chroma = (Math.max(c.r, c.g, c.b) - Math.min(c.r, c.g, c.b)) / 255;
  if (hsl.s < 22 || chroma < 0.05 || hsl.l >= 99) {
    if (hsl.l >= 97) return hexToRgb(NIGHT_2);
    if (hsl.l >= 92) return hexToRgb(NIGHT_25);
    return hexToRgb(NIGHT_3);
  }
  const hue = hslToRgb({ h: hsl.h, s: 70, l: 55 });
  const warm = hsl.h >= 25 && hsl.h <= 65; // gold/amber tints turn muddy over navy: keep them faint
  const t = (hsl.l >= 95 ? 0.1 : hsl.l >= 90 ? 0.14 : hsl.l >= 85 ? 0.18 : 0.24) * (warm ? 0.7 : 1);
  return mix(hexToRgb(NIGHT_2), hue, t);
}

/** Borders, rings, outlines: light lines become night lines. */
function adaptLine(c) {
  const hsl = rgbToHsl(c);
  if (hsl.l < 70) return null;
  if (hsl.s < 22) return hexToRgb(hsl.l >= 88 ? LINE : LINE_2);
  const hue = hslToRgb({ h: hsl.h, s: 65, l: 55 });
  return mix(hexToRgb(LINE), hue, hsl.l >= 90 ? 0.22 : 0.32);
}

function isUtilitySelector(selector) {
  // Pull the class names out of the selector, unescape them and drop variant prefixes (hover:, md:, group-hover: …).
  const classes = selector.match(/\.(?:\\.|[A-Za-z0-9_-])+/g) || [];
  return classes.some((raw) => {
    const name = raw.slice(1).replace(/\\(.)/g, '$1');
    const base = name.slice(name.lastIndexOf(':') + 1).replace(/^!/, '');
    return UTILITY.test(base);
  });
}

function nightThemePlugin(opts = {}) {
  const include = opts.include || ((file) => /[\\/]src[\\/]index\.css$/.test(file || ''));
  const stats = { rules: 0, colours: 0 };
  return {
    postcssPlugin: 'postcss-night-theme',
    OnceExit(root) {
      const file = root.source && root.source.input && root.source.input.file;
      if (!include(file)) return;
      root.walkRules((rule) => {
        if (!isUtilitySelector(rule.selector)) return;
        // Translucent white/light glass (alpha < .5) stays as is; decide once per rule so a
        // gradient's transparent companion stop follows its main colour.
        let ruleIsGlass = null;
        rule.walkDecls((decl) => {
          if (!SURFACE_PROPS.has(decl.prop) && !LINE_PROPS.has(decl.prop)) return;
          for (const lit of decl.value.match(COLOR_RE) || []) {
            const c = parse(lit);
            if (!c || c.a === 0) continue;
            if (ruleIsGlass === null) ruleIsGlass = c.a < 0.5 && rgbToHsl(c).l >= 70;
          }
        });
        let changed = false;
        rule.walkDecls((decl) => {
          const prop = decl.prop;
          const kind = FG_PROPS.has(prop) ? 'fg' : SURFACE_PROPS.has(prop) ? 'surface' : LINE_PROPS.has(prop) ? 'line' : null;
          if (!kind) return;
          if (kind !== 'fg' && ruleIsGlass) return;
          const next = decl.value.replace(COLOR_RE, (lit) => {
            const c = parse(lit);
            if (!c) return lit;
            const out = kind === 'fg' ? adaptForeground(c) : kind === 'surface' ? adaptSurface(c) : adaptLine(c);
            if (!out) return lit;
            stats.colours += 1;
            return format(c, out);
          });
          if (next !== decl.value) {
            decl.value = next;
            changed = true;
          }
        });
        if (changed) stats.rules += 1;
      });
      if (opts.verbose) console.log(`[night-theme] adapted ${stats.colours} colours in ${stats.rules} utility rules`);
    },
  };
}
nightThemePlugin.postcss = true;

export default nightThemePlugin;
export { adaptForeground, adaptSurface, adaptLine, parse, isUtilitySelector };
