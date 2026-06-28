/**
 * Shared "luxury pharma" premium design system for the BioNixus industries silo.
 * Scoped entirely under the `.bx-ind` wrapper so nothing leaks globally.
 * Used by the hub (BionixusIndustries) and the 3 segment pages (IndustrySegmentPage).
 */
export const PREMIUM_INDUSTRIES_CSS = `
.bx-ind {
  --bx-midnight: #06101F;
  --bx-navy: #0C1B33;
  --bx-navy-light: #12284A;
  --bx-slate: #1B3254;
  --bx-gold: #C9A84C;
  --bx-gold-light: #E4CC7A;
  --bx-teal: #0EA5A0;
  --bx-teal-light: #14CFC8;
  --bx-coral: #E06852;
  --bx-warm-white: #FFFEFB;
  --bx-cream: #F4F2ED;
  --bx-gray-100: #EDE9E3;
  --bx-gray-200: #D6D0C7;
  --bx-gray-500: #7A7267;
  --bx-gray-700: #3D3830;
  --bx-font-display: 'Cormorant Garamond', 'Georgia', serif;
  --bx-max-w: 1180px;
  --bx-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  font-family: 'Outfit', system-ui, sans-serif;
  color: var(--bx-gray-700);
  background: var(--bx-warm-white);
  line-height: 1.7;
}
.bx-ind *, .bx-ind *::before, .bx-ind *::after { box-sizing: border-box; }
.bx-ind .bx-inner { max-width: var(--bx-max-w); margin: 0 auto; padding: 0 40px; }
.bx-ind .bx-display { font-family: var(--bx-font-display); }

@keyframes bxindFadeUp { from { opacity: 0; transform: translateY(36px); } to { opacity: 1; transform: translateY(0); } }
@keyframes bxindScaleIn { from { opacity: 0; transform: scale(0.94); } to { opacity: 1; transform: scale(1); } }
@keyframes bxindDrawLine { from { stroke-dashoffset: 900; } to { stroke-dashoffset: 0; } }
@keyframes bxindBreathe { 0%,100% { opacity: 0.4; } 50% { opacity: 0.85; } }
@keyframes bxindOrbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes bxindFadeIn { from { opacity: 0; } to { opacity: 1; } }

/* ===== HERO ===== */
.bx-ind .bx-hero {
  position: relative; background: var(--bx-midnight); overflow: hidden;
  padding-top: 132px; padding-bottom: 96px;
}
.bx-ind .bx-hero-bg {
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(ellipse 70% 55% at 70% 40%, rgba(12,27,51,1) 0%, transparent 70%),
    radial-gradient(ellipse 50% 45% at 18% 85%, rgba(14,165,160,0.10) 0%, transparent 50%),
    radial-gradient(ellipse 35% 30% at 88% 12%, rgba(201,168,76,0.08) 0%, transparent 40%),
    linear-gradient(180deg, var(--bx-midnight) 0%, #081628 100%);
}
.bx-ind .bx-hero-grid { position: absolute; inset: 0; overflow: hidden; opacity: 0.05; }
.bx-ind .bx-hero-grid svg { width: 100%; height: 100%; }
.bx-ind .bx-orbital {
  position: absolute; width: 640px; height: 640px; top: 46%; left: 72%;
  transform: translate(-50%, -50%); pointer-events: none;
}
.bx-ind .bx-ring {
  position: absolute; inset: 0; border: 1px solid rgba(201,168,76,0.07);
  border-radius: 50%; animation: bxindOrbit 60s linear infinite;
}
.bx-ind .bx-ring:nth-child(2) { inset: 56px; border-color: rgba(14,165,160,0.06); animation-duration: 46s; animation-direction: reverse; }
.bx-ind .bx-ring:nth-child(3) { inset: 130px; border-color: rgba(201,168,76,0.05); animation-duration: 88s; }
.bx-ind .bx-ring .bx-node { position: absolute; width: 6px; height: 6px; border-radius: 50%; background: var(--bx-gold); opacity: 0.5; animation: bxindBreathe 3s ease-in-out infinite; }
.bx-ind .bx-ring:nth-child(1) .bx-node { top: 0; left: 50%; transform: translate(-50%, -50%); }
.bx-ind .bx-ring:nth-child(2) .bx-node { bottom: 0; right: 0; transform: translate(50%, 50%); background: var(--bx-teal); }
.bx-ind .bx-ring:nth-child(3) .bx-node { top: 50%; left: 0; transform: translate(-50%, -50%); }
.bx-ind .bx-hero-inner {
  position: relative; z-index: 2; display: grid; grid-template-columns: 1.05fr 0.95fr;
  gap: 64px; align-items: center;
}
.bx-ind .bx-hero-inner.bx-solo { grid-template-columns: 1fr; gap: 0; max-width: 880px; }
.bx-ind .bx-hero-copy { animation: bxindFadeUp 1s var(--bx-ease-out); }
.bx-ind .bx-breadcrumb { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin-bottom: 26px; font-size: 12.5px; color: rgba(255,255,255,0.4); }
.bx-ind .bx-breadcrumb a { color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s; }
.bx-ind .bx-breadcrumb a:hover { color: var(--bx-gold-light); }
.bx-ind .bx-breadcrumb span[aria-current] { color: var(--bx-gold); }
.bx-ind .bx-eyebrow {
  display: inline-flex; align-items: center; gap: 10px; margin-bottom: 26px;
  font-size: 11.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 3px; color: var(--bx-gold);
}
.bx-ind .bx-eyebrow .bx-line { width: 30px; height: 1px; background: var(--bx-gold); opacity: 0.4; }
.bx-ind .bx-hero h1 {
  font-family: var(--bx-font-display); font-size: clamp(2.6rem, 4.2vw, 4rem); font-weight: 300;
  color: var(--bx-warm-white); line-height: 1.12; letter-spacing: -0.5px; margin: 0 0 24px;
}
.bx-ind .bx-hero h1 em {
  font-weight: 500; font-style: italic;
  background: linear-gradient(135deg, var(--bx-gold), var(--bx-gold-light));
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
}
.bx-ind .bx-hero-tagline { font-family: var(--bx-font-display); font-size: 22px; font-style: italic; font-weight: 400; color: var(--bx-gold-light); margin: 0 0 20px; }
.bx-ind .bx-hero-sub { font-size: 17px; line-height: 1.8; color: rgba(255,255,255,0.5); margin: 0 0 24px; max-width: 560px; font-weight: 300; }
.bx-ind .bx-hero-sub strong { color: rgba(255,255,255,0.78); font-weight: 500; }
.bx-ind .bx-hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 36px; }
.bx-ind .bx-btn-gold {
  background: linear-gradient(135deg, var(--bx-gold), #B8933E); color: var(--bx-midnight);
  padding: 16px 32px; border-radius: 12px; font-size: 14px; font-weight: 600; text-decoration: none;
  display: inline-flex; align-items: center; gap: 9px; letter-spacing: 0.4px; transition: all 0.35s;
  box-shadow: 0 4px 20px rgba(201,168,76,0.25);
}
.bx-ind .bx-btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 40px rgba(201,168,76,0.35); }
.bx-ind .bx-btn-ghost {
  color: rgba(255,255,255,0.62); padding: 16px 28px; border-radius: 12px; font-size: 14px; font-weight: 400;
  text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid rgba(255,255,255,0.12); transition: all 0.35s;
}
.bx-ind .bx-btn-ghost:hover { border-color: rgba(255,255,255,0.3); color: var(--bx-warm-white); }

/* Hero dashboard card */
.bx-ind .bx-hero-visual { animation: bxindScaleIn 1s var(--bx-ease-out) 0.2s both; }
.bx-ind .bx-card {
  background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07);
  border-radius: 22px; padding: 32px; position: relative; backdrop-filter: blur(12px);
  box-shadow: 0 40px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04);
}
.bx-ind .bx-card::before {
  content: ''; position: absolute; top: -1px; left: 56px; right: 56px; height: 1px;
  background: linear-gradient(90deg, transparent, var(--bx-gold), transparent); opacity: 0.4;
}
.bx-ind .bx-card-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px; }
.bx-ind .bx-card-head h2 { font-family: var(--bx-font-display); font-size: 18px; color: rgba(255,255,255,0.82); font-weight: 400; letter-spacing: 0.4px; margin: 0; }
.bx-ind .bx-live { display: flex; align-items: center; gap: 6px; font-size: 11px; color: var(--bx-teal); font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase; }
.bx-ind .bx-live .bx-pulse { width: 6px; height: 6px; background: var(--bx-teal); border-radius: 50%; animation: bxindBreathe 2s ease-in-out infinite; box-shadow: 0 0 8px var(--bx-teal); }
.bx-ind .bx-chart { height: 132px; margin-bottom: 22px; }
.bx-ind .bx-chart svg { width: 100%; height: 100%; }
.bx-ind .bx-seg-rows { display: flex; flex-direction: column; gap: 10px; }
.bx-ind .bx-seg-row {
  display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 12px;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);
}
.bx-ind .bx-seg-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
.bx-ind .bx-seg-dot.teal { background: var(--bx-teal); box-shadow: 0 0 8px rgba(14,165,160,0.6); }
.bx-ind .bx-seg-dot.gold { background: var(--bx-gold); box-shadow: 0 0 8px rgba(201,168,76,0.6); }
.bx-ind .bx-seg-dot.coral { background: var(--bx-coral); box-shadow: 0 0 8px rgba(224,104,82,0.6); }
.bx-ind .bx-seg-row-name { font-size: 13.5px; color: rgba(255,255,255,0.82); font-weight: 500; }
.bx-ind .bx-seg-row-tag { font-size: 11.5px; color: rgba(255,255,255,0.4); margin-top: 1px; }
.bx-ind .bx-card-foot { margin-top: 20px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.06); font-size: 11.5px; color: rgba(255,255,255,0.4); letter-spacing: 0.4px; text-align: center; }
.bx-ind .bx-card-foot strong { color: rgba(255,255,255,0.7); font-weight: 600; }

/* ===== REGION RIBBON ===== */
.bx-ind .bx-ribbon { background: var(--bx-navy); padding: 18px 40px; border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); }
.bx-ind .bx-ribbon-inner { max-width: var(--bx-max-w); margin: 0 auto; display: flex; justify-content: center; gap: 44px; flex-wrap: wrap; }
.bx-ind .bx-ribbon-item { display: flex; align-items: center; gap: 8px; font-size: 12px; color: rgba(255,255,255,0.4); font-weight: 400; letter-spacing: 0.5px; }
.bx-ind .bx-ribbon-item .bx-ic { color: var(--bx-gold); font-size: 12px; opacity: 0.8; }

/* ===== STATS ===== */
.bx-ind .bx-stats { background: var(--bx-warm-white); padding: 64px 40px; border-bottom: 1px solid var(--bx-gray-100); }
.bx-ind .bx-stats-inner { max-width: var(--bx-max-w); margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); }
.bx-ind .bx-stat { text-align: center; padding: 16px 28px; position: relative; }
.bx-ind .bx-stat:not(:last-child)::after { content: ''; position: absolute; right: 0; top: 15%; height: 70%; width: 1px; background: linear-gradient(180deg, transparent, var(--bx-gray-200), transparent); }
.bx-ind .bx-stat-num { font-family: var(--bx-font-display); font-size: 52px; font-weight: 300; color: var(--bx-navy); line-height: 1; margin-bottom: 8px; letter-spacing: -1.5px; }
.bx-ind .bx-stat-label { font-size: 13px; color: var(--bx-gray-700); font-weight: 500; }
.bx-ind .bx-stat-sub { font-size: 12px; color: var(--bx-gray-500); font-weight: 300; margin-top: 2px; }

/* ===== SECTION PRIMITIVES ===== */
.bx-ind .bx-section { padding: clamp(72px, 9vw, 116px) 40px; }
.bx-ind .bx-section.cream { background: var(--bx-cream); }
.bx-ind .bx-section.dark { background: var(--bx-midnight); position: relative; overflow: hidden; }
.bx-ind .bx-section-head { margin-bottom: 56px; }
.bx-ind .bx-section-head.center { text-align: center; }
.bx-ind .bx-eyebrow.gold { color: var(--bx-gold); }
.bx-ind .bx-eyebrow.gold .bx-line { background: var(--bx-gold); opacity: 0.35; }
.bx-ind .bx-eyebrow.teal { color: var(--bx-teal); }
.bx-ind .bx-eyebrow.teal .bx-line { background: var(--bx-teal); opacity: 0.35; }
.bx-ind .bx-eyebrow.coral { color: var(--bx-coral); }
.bx-ind .bx-eyebrow.coral .bx-line { background: var(--bx-coral); opacity: 0.35; }
.bx-ind .bx-h2 { font-family: var(--bx-font-display); font-size: clamp(2rem, 3.1vw, 2.9rem); font-weight: 300; color: var(--bx-navy); line-height: 1.15; letter-spacing: -0.3px; margin: 0; }
.bx-ind .bx-h2 em { font-weight: 500; font-style: italic; }
.bx-ind .bx-h2.light { color: var(--bx-warm-white); }
.bx-ind .bx-lead { font-size: 17px; color: var(--bx-gray-500); max-width: 620px; margin-top: 16px; font-weight: 300; line-height: 1.8; }
.bx-ind .bx-lead.center { margin-left: auto; margin-right: auto; }
.bx-ind .bx-lead.light { color: rgba(255,255,255,0.5); }
.bx-ind .bx-lead a { color: var(--bx-navy); font-weight: 500; text-decoration: underline; text-decoration-color: rgba(201,168,76,0.5); }
.bx-ind .bx-lead.light a { color: var(--bx-gold-light); }

/* ===== PROSE (segment body copy) ===== */
.bx-ind .bx-prose { position: relative; z-index: 2; max-width: 760px; }
.bx-ind .bx-prose p { font-size: 16.5px; line-height: 1.85; color: var(--bx-gray-500); font-weight: 300; margin: 0 0 18px; }
.bx-ind .bx-prose.light p { color: rgba(255,255,255,0.55); }
.bx-ind .bx-prose a, .bx-ind .bx-narrative a { color: var(--bx-gold-light); text-decoration: none; border-bottom: 1px solid rgba(228,204,122,0.3); transition: border-color 0.3s; font-weight: 400; }
.bx-ind .bx-prose:not(.light) a { color: #A8872E; border-bottom-color: rgba(168,135,46,0.35); }
.bx-ind .bx-prose a:hover, .bx-ind .bx-narrative a:hover { border-color: currentColor; }

/* ===== SEGMENT CARDS ===== */
.bx-ind .bx-seg-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
.bx-ind .bx-seg-card {
  background: var(--bx-warm-white); border-radius: 20px; padding: 40px 36px;
  border: 1px solid var(--bx-gray-100); transition: all 0.45s var(--bx-ease-out);
  position: relative; overflow: hidden; text-decoration: none; display: flex; flex-direction: column;
}
.bx-ind .bx-seg-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; opacity: 0; transition: opacity 0.4s; }
.bx-ind .bx-seg-card.teal::before { background: linear-gradient(90deg, var(--bx-teal), var(--bx-teal-light)); }
.bx-ind .bx-seg-card.gold::before { background: linear-gradient(90deg, var(--bx-gold), var(--bx-gold-light)); }
.bx-ind .bx-seg-card.coral::before { background: linear-gradient(90deg, var(--bx-coral), #F08A77); }
.bx-ind .bx-seg-card:hover { border-color: transparent; box-shadow: 0 24px 70px rgba(6,16,31,0.10); transform: translateY(-6px); }
.bx-ind .bx-seg-card:hover::before { opacity: 1; }
.bx-ind .bx-seg-icon { width: 52px; height: 52px; border-radius: 15px; display: flex; align-items: center; justify-content: center; margin-bottom: 22px; }
.bx-ind .bx-seg-icon.teal { background: linear-gradient(135deg, #E6FAF8, #C0F0EC); color: var(--bx-teal); }
.bx-ind .bx-seg-icon.gold { background: linear-gradient(135deg, #FDF6E3, #F5E8C4); color: #A8872E; }
.bx-ind .bx-seg-icon.coral { background: linear-gradient(135deg, #FFF0ED, #FDDDD6); color: var(--bx-coral); }
.bx-ind .bx-seg-card h3 { font-family: var(--bx-font-display); font-size: 23px; font-weight: 500; color: var(--bx-navy); margin: 0 0 6px; letter-spacing: -0.3px; }
.bx-ind .bx-seg-card .bx-seg-tag { font-size: 13px; font-weight: 600; margin-bottom: 14px; }
.bx-ind .bx-seg-card.teal .bx-seg-tag { color: var(--bx-teal); }
.bx-ind .bx-seg-card.gold .bx-seg-tag { color: #A8872E; }
.bx-ind .bx-seg-card.coral .bx-seg-tag { color: var(--bx-coral); }
.bx-ind .bx-seg-card p { font-size: 14.5px; color: var(--bx-gray-500); line-height: 1.75; font-weight: 300; margin: 0 0 22px; flex: 1; }
.bx-ind .bx-seg-go { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; letter-spacing: 0.4px; transition: gap 0.3s; }
.bx-ind .bx-seg-card.teal .bx-seg-go { color: var(--bx-teal); }
.bx-ind .bx-seg-card.gold .bx-seg-go { color: #A8872E; }
.bx-ind .bx-seg-card.coral .bx-seg-go { color: var(--bx-coral); }
.bx-ind .bx-seg-card:hover .bx-seg-go { gap: 14px; }

/* ===== COVERED INDUSTRIES (segment pages) ===== */
.bx-ind .bx-cover-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
.bx-ind .bx-cover-card { background: var(--bx-warm-white); border: 1px solid var(--bx-gray-100); border-radius: 18px; padding: 26px 28px; transition: all 0.4s var(--bx-ease-out); }
.bx-ind .bx-cover-card:hover { border-color: var(--bx-gold); transform: translateY(-4px); box-shadow: 0 18px 44px rgba(6,16,31,0.08); }
.bx-ind .bx-cover-card h3 { font-family: var(--bx-font-display); font-size: 20px; font-weight: 500; color: var(--bx-navy); margin: 0 0 6px; }
.bx-ind .bx-cover-knows { font-size: 13px; color: var(--bx-gray-500); font-weight: 300; margin: 0 0 16px; line-height: 1.6; }
.bx-ind .bx-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.bx-ind .bx-chip { font-size: 12.5px; font-weight: 500; color: var(--bx-navy); background: var(--bx-cream); border: 1px solid var(--bx-gray-100); border-radius: 999px; padding: 6px 14px; text-decoration: none; transition: all 0.25s; }
.bx-ind .bx-chip:hover { border-color: var(--bx-gold); color: #A8872E; background: #FDF6E3; }

/* ===== COUNTRY GRID (pharma segment) ===== */
.bx-ind .bx-country-grid { position: relative; z-index: 2; display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
.bx-ind .bx-country-grid.bx-country-grid--after-narrative { margin-top: 40px; }
@media (min-width: 1024px) {
  .bx-ind .bx-country-grid { grid-template-columns: repeat(3, 1fr); }
}
.bx-ind .bx-country-region { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 24px 26px; }
.bx-ind .bx-country-region h3 { font-family: var(--bx-font-display); font-size: 18px; font-weight: 500; color: var(--bx-warm-white); margin: 0 0 10px; }
.bx-ind .bx-country-region .bx-region-desc { font-size: 13px; color: rgba(255,255,255,0.45); font-weight: 300; line-height: 1.65; margin: 0 0 14px; }

/* ===== DARK NARRATIVE ===== */
.bx-ind .bx-section.dark .bx-dark-bg { position: absolute; inset: 0; pointer-events: none; background: radial-gradient(ellipse 60% 50% at 25% 70%, rgba(14,165,160,0.07), transparent), radial-gradient(ellipse 40% 40% at 82% 18%, rgba(201,168,76,0.05), transparent); }
.bx-ind .bx-narrative { position: relative; z-index: 2; max-width: 760px; }
.bx-ind .bx-narrative p { font-size: 16.5px; line-height: 1.85; color: rgba(255,255,255,0.55); font-weight: 300; margin: 0 0 18px; }

/* ===== NEXT STEPS ===== */
.bx-ind .bx-next-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.bx-ind .bx-next-card { background: var(--bx-warm-white); border: 1px solid var(--bx-gray-100); border-radius: 16px; padding: 24px 26px; text-decoration: none; transition: all 0.35s var(--bx-ease-out); display: block; }
.bx-ind .bx-next-card:hover { border-color: var(--bx-gold); transform: translateY(-3px); box-shadow: 0 16px 40px rgba(6,16,31,0.07); }
.bx-ind .bx-next-card .bx-next-label { display: flex; align-items: center; gap: 8px; font-family: var(--bx-font-display); font-size: 18px; font-weight: 500; color: var(--bx-navy); }
.bx-ind .bx-next-card .bx-next-arrow { color: var(--bx-gold); transition: transform 0.3s; }
.bx-ind .bx-next-card:hover .bx-next-arrow { transform: translateX(4px); }
.bx-ind .bx-next-card .bx-next-desc { font-size: 13.5px; color: var(--bx-gray-500); font-weight: 300; margin-top: 6px; line-height: 1.6; }

/* ===== FAQ ===== */
.bx-ind .bx-faq-wrap { max-width: 800px; margin: 0 auto; }
.bx-ind .bx-faq { border-bottom: 1px solid var(--bx-gray-100); }
.bx-ind .bx-faq > summary {
  list-style: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 24px;
  padding: 26px 0; font-family: var(--bx-font-display); font-size: 19px; font-weight: 400; color: var(--bx-navy);
  transition: color 0.3s; letter-spacing: -0.2px;
}
.bx-ind .bx-faq > summary::-webkit-details-marker { display: none; }
.bx-ind .bx-faq > summary:hover { color: var(--bx-gold); }
.bx-ind .bx-faq > summary .bx-faq-icon { font-size: 22px; color: var(--bx-gray-200); font-weight: 300; transition: transform 0.35s, color 0.35s; flex-shrink: 0; }
.bx-ind .bx-faq[open] > summary .bx-faq-icon { transform: rotate(45deg); color: var(--bx-gold); }
.bx-ind .bx-faq-a { font-size: 15px; color: var(--bx-gray-500); line-height: 1.8; font-weight: 300; padding: 0 0 26px; max-width: 700px; }

/* ===== FINAL CTA ===== */
.bx-ind .bx-cta-section { background: var(--bx-warm-white); padding: clamp(64px, 8vw, 100px) 40px; }
.bx-ind .bx-cta-card {
  max-width: 840px; margin: 0 auto; text-align: center; background: var(--bx-midnight);
  border-radius: 26px; padding: clamp(48px, 6vw, 76px) 48px; position: relative; overflow: hidden;
  box-shadow: 0 40px 100px rgba(6,16,31,0.3);
}
.bx-ind .bx-cta-card::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 50% at 50% 130%, rgba(201,168,76,0.10), transparent); }
.bx-ind .bx-cta-card::after { content: ''; position: absolute; top: -1px; left: 80px; right: 80px; height: 1px; background: linear-gradient(90deg, transparent, var(--bx-gold), transparent); opacity: 0.35; }
.bx-ind .bx-cta-card h2 { font-family: var(--bx-font-display); font-size: clamp(2rem, 3vw, 2.6rem); font-weight: 300; color: var(--bx-warm-white); margin: 0 0 14px; position: relative; letter-spacing: -0.5px; }
.bx-ind .bx-cta-card p { font-size: 17px; color: rgba(255,255,255,0.5); margin: 0 0 34px; position: relative; font-weight: 300; }
.bx-ind .bx-cta-actions { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; position: relative; }

/* ===== MARKET RESEARCH BY INDUSTRY INDEX ===== */
.bx-ind .bx-index-jump-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.bx-ind .bx-index-jump-region h3 { font-family: var(--bx-font-display); font-size: 17px; font-weight: 500; color: var(--bx-navy); margin: 0 0 12px; }
.bx-ind .bx-country-block { padding: 56px 0; border-top: 1px solid var(--bx-gray-100); scroll-margin-top: 112px; }
.bx-ind .bx-country-block--matrix { background: linear-gradient(180deg, rgba(201,168,76,0.05) 0%, transparent 100%); }
.bx-ind .bx-country-block-head { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 20px; margin-bottom: 28px; }
.bx-ind .bx-country-block-head .bx-h2 { margin: 8px 0 0; font-size: clamp(1.6rem, 2.5vw, 2.2rem); }
.bx-ind .bx-link-row { display: flex; flex-wrap: wrap; gap: 12px 24px; align-items: center; }
.bx-ind .bx-text-link { font-size: 13.5px; font-weight: 600; color: var(--bx-teal); text-decoration: none; letter-spacing: 0.2px; transition: color 0.25s; }
.bx-ind .bx-text-link:hover { color: var(--bx-navy); }
.bx-ind .bx-text-link.gold { color: #A8872E; }
.bx-ind .bx-text-link.gold:hover { color: var(--bx-navy); }
.bx-ind .bx-pharma-band {
  background: linear-gradient(135deg, rgba(14,165,160,0.07), rgba(14,165,160,0.03));
  border: 1px solid rgba(14,165,160,0.18); border-radius: 16px; padding: 22px 26px; margin-bottom: 32px;
}
.bx-ind .bx-pharma-band h4 { font-family: var(--bx-font-display); font-size: 17px; font-weight: 500; color: var(--bx-navy); margin: 0 0 12px; }
.bx-ind .bx-segment-block { margin-bottom: 36px; }
.bx-ind .bx-segment-block:last-child { margin-bottom: 0; }
.bx-ind .bx-segment-label { font-family: var(--bx-font-display); font-size: 19px; font-weight: 500; color: var(--bx-navy); margin: 0 0 16px; }
.bx-ind .bx-index-card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.bx-ind .bx-index-card {
  background: var(--bx-warm-white); border: 1px solid var(--bx-gray-100); border-radius: 14px;
  padding: 18px 20px; transition: all 0.35s var(--bx-ease-out);
}
.bx-ind .bx-index-card:hover { border-color: var(--bx-gold); transform: translateY(-3px); box-shadow: 0 12px 32px rgba(6,16,31,0.06); }
.bx-ind .bx-index-card h5 { font-size: 14px; font-weight: 600; color: var(--bx-navy); margin: 0 0 10px; }
.bx-ind .bx-index-card a { display: block; font-size: 12.5px; color: var(--bx-gray-500); text-decoration: none; margin-top: 6px; transition: color 0.25s; }
.bx-ind .bx-index-card a:hover { color: var(--bx-teal); }
.bx-ind .bx-region-band { padding: 48px 40px 32px; background: var(--bx-cream); border-top: 1px solid var(--bx-gray-100); }
.bx-ind .bx-region-band .bx-lead { margin-top: 12px; max-width: 720px; }
.bx-ind .bx-region-meta { font-size: 13px; color: var(--bx-gray-500); font-weight: 500; margin-top: 8px; letter-spacing: 0.3px; }
.bx-ind .bx-industry-section { scroll-margin-top: 112px; }
.bx-ind .bx-industry-region-block { margin-bottom: 32px; }
.bx-ind .bx-industry-region-block:last-child { margin-bottom: 0; }
.bx-ind .bx-industry-region-label { font-size: 11.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 2.5px; color: var(--bx-gray-500); margin: 0 0 14px; }

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .bx-ind .bx-hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .bx-ind .bx-hero-visual { display: none; }
  .bx-ind .bx-seg-grid { grid-template-columns: 1fr; }
  .bx-ind .bx-next-grid { grid-template-columns: 1fr; }
  .bx-ind .bx-cover-grid { grid-template-columns: 1fr; }
  .bx-ind .bx-country-grid { grid-template-columns: 1fr; }
  .bx-ind .bx-index-card-grid { grid-template-columns: repeat(2, 1fr); }
  .bx-ind .bx-index-jump-grid { grid-template-columns: 1fr; }
}
@media (max-width: 720px) {
  .bx-ind .bx-inner, .bx-ind .bx-section, .bx-ind .bx-stats, .bx-ind .bx-ribbon, .bx-ind .bx-cta-section { padding-left: 22px; padding-right: 22px; }
  .bx-ind .bx-hero { padding-top: 112px; }
  .bx-ind .bx-stats-inner { grid-template-columns: 1fr 1fr; gap: 28px 0; }
  .bx-ind .bx-stat:not(:last-child)::after { display: none; }
  .bx-ind .bx-stat-num { font-size: 42px; }
  .bx-ind .bx-ribbon-inner { gap: 18px; }
  .bx-ind .bx-hero-actions .bx-btn-gold, .bx-ind .bx-hero-actions .bx-btn-ghost { width: 100%; justify-content: center; }
  .bx-ind .bx-index-card-grid { grid-template-columns: 1fr; }
  .bx-ind .bx-region-band { padding-left: 22px; padding-right: 22px; }
}
`;
