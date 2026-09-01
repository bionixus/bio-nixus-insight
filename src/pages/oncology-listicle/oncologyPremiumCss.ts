/**
 * Scoped premium treatment for /insights/top-oncology-market-research-companies-2026.
 * Tokens and layout match the BioNixus oncology ranking HTML (navy / gold / serif).
 */
export const ONCOLOGY_PREMIUM_CSS = `
.bx-onco {
  --onco-navy: #002244;
  --onco-navy-deep: #001833;
  --onco-blue: #0069A3;
  --onco-blue-light: #3A8BC0;
  --onco-steel: #4A6FA5;
  --onco-gold: #B8862D;
  --onco-gold-light: #D4A84B;
  --onco-off-white: #FAFAF8;
  --onco-cool-white: #F3F5F7;
  --onco-light-blue: #E4EEF7;
  --onco-rule: #D0D6DE;
  --onco-text: #152232;
  --onco-text-soft: #3D4A5C;
  --onco-text-muted: #6B7684;
  --onco-paper: #FDFCFA;
  --onco-serif: 'EB Garamond', Georgia, serif;
  --onco-sans: 'Barlow', -apple-system, sans-serif;
  --onco-cond: 'Barlow Condensed', sans-serif;
  --onco-mono: 'IBM Plex Mono', 'Courier New', monospace;
  --onco-radius: 3px;
  --onco-shadow-sm: 0 1px 2px rgba(0,34,68,.04);
  --onco-shadow-md: 0 8px 32px -4px rgba(0,34,68,.1), 0 2px 8px rgba(0,34,68,.04);
  color: var(--onco-text);
  font-family: var(--onco-sans);
  font-size: 15.5px;
  line-height: 1.65;
  background: radial-gradient(ellipse 120% 80% at 50% -20%, rgba(0,105,163,.06) 0%, transparent 55%), linear-gradient(165deg, #dce3eb 0%, #e8ecf0 45%, #e2e6ec 100%);
  -webkit-font-smoothing: antialiased;
}
.bx-onco *, .bx-onco *::before, .bx-onco *::after { box-sizing: border-box; }
.bx-onco a { color: var(--onco-blue); text-decoration: none; }
.bx-onco a:hover { text-decoration: underline; }
.bx-onco h2, .bx-onco h3, .bx-onco h4 { font-family: var(--onco-serif); font-weight: 500; color: var(--onco-navy); }
.bx-onco .onco-wrap { max-width: 1080px; margin: 0 auto; }
.bx-onco .onco-pad { padding: 48px 28px; }
@media (min-width: 768px) {
  .bx-onco .onco-pad { padding: 64px 44px; }
}

.bx-onco .cover {
  background: radial-gradient(ellipse at 28% 18%, #002D5A 0%, #001a2e 48%, #000510 100%);
  color: #fff;
  position: relative;
  overflow: hidden;
  padding: 112px 24px 40px;
}
@media (min-width: 768px) {
  .bx-onco .cover { padding: 128px 48px 48px; }
}
.bx-onco .cover-dot {
  position: absolute; inset: 0; pointer-events: none; z-index: 1;
  background-image: radial-gradient(rgba(255,255,255,.035) 1px, transparent 1px);
  background-size: 26px 26px;
}
.bx-onco .cover-tri, .bx-onco .cover-tri2, .bx-onco .cover-sheen { position: absolute; pointer-events: none; z-index: 1; }
.bx-onco .cover-tri { top: 0; right: 0; width: 0; height: 0; border-style: solid; border-width: 0 280px 280px 0; border-color: transparent #002244 transparent transparent; }
.bx-onco .cover-tri2 { top: 0; right: 0; width: 0; height: 0; border-style: solid; border-width: 0 150px 150px 0; border-color: transparent rgba(0,105,163,.22) transparent transparent; }
.bx-onco .cover-sheen { inset: 0; z-index: 2; background: linear-gradient(135deg, transparent 52%, rgba(212,168,75,.06) 74%, transparent 100%); }
.bx-onco .cover-gold, .bx-onco .cover-gold-top { position: absolute; left: 0; right: 0; z-index: 6; }
.bx-onco .cover-gold { bottom: 0; height: 3px; background: linear-gradient(90deg, #B8862D, #D4A84B 50%, #B8862D); }
.bx-onco .cover-gold-top { top: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(212,168,75,.55) 50%, transparent); }
.bx-onco .cover-inner { position: relative; z-index: 4; max-width: 1080px; margin: 0 auto; }
.bx-onco .cover-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap; margin-bottom: 28px; }
.bx-onco .cover-top-right { text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 8px; }
.bx-onco .clogorow { display: flex; align-items: center; gap: 14px; }
.bx-onco .clogoname { font-family: var(--onco-cond); font-size: 20px; font-weight: 700; letter-spacing: .2em; color: #fff; padding-bottom: 3px; border-bottom: 1px solid rgba(212,168,75,.5); }
.bx-onco .clogosub { font-size: 8px; letter-spacing: .28em; text-transform: uppercase; color: rgba(255,255,255,.4); margin-top: 5px; font-weight: 300; }
.bx-onco .cref { font-family: var(--onco-mono); font-size: 10px; color: rgba(255,255,255,.38); letter-spacing: .08em; line-height: 1.7; text-align: right; }
.bx-onco .cbadge {
  display: inline-flex; align-items: center; gap: 7px;
  font-family: var(--onco-cond); font-size: 9px; letter-spacing: .26em; text-transform: uppercase; font-weight: 600;
  color: var(--onco-gold-light); border: 1px solid rgba(212,168,75,.45); padding: 5px 12px; background: rgba(212,168,75,.06);
}
.bx-onco .cbadge::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--onco-gold-light); box-shadow: 0 0 8px rgba(212,168,75,.7); }
.bx-onco .cover-ornament { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; }
.bx-onco .or-diamond { width: 5px; height: 5px; background: var(--onco-gold-light); transform: rotate(45deg); flex-shrink: 0; }
.bx-onco .or-txt { font-family: var(--onco-cond); font-size: 10px; letter-spacing: .28em; text-transform: uppercase; color: rgba(212,168,75,.82); font-weight: 500; }
.bx-onco .or-line { flex: 1; height: 1px; background: linear-gradient(90deg, rgba(212,168,75,.55), transparent); min-width: 32px; }
.bx-onco .cover-title {
  font-family: var(--onco-serif); font-size: clamp(32px, 5vw, 52px); font-weight: 500; line-height: 1.08;
  color: #fff; margin: 0 0 16px; letter-spacing: -.6px; text-shadow: 0 4px 32px rgba(0,0,0,.4);
}
.bx-onco .cover-title .h1-kicker {
  display: block; font-family: var(--onco-cond); font-size: 13px; letter-spacing: .22em; text-transform: uppercase;
  color: var(--onco-gold-light); font-weight: 600; margin-bottom: 12px; text-shadow: none;
}
.bx-onco .cover-title em { color: var(--onco-gold-light); font-style: italic; font-weight: 400; }
.bx-onco .cover-subtitle { font-size: 15.5px; font-weight: 300; line-height: 1.62; color: rgba(255,255,255,.78); max-width: 62ch; margin-bottom: 22px; }
.bx-onco .cover-subtitle a { color: var(--onco-gold-light); }
.bx-onco .cover-mkts { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px; }
.bx-onco .cmkt {
  display: flex; align-items: baseline; gap: 8px; padding: 8px 12px;
  border: 1px solid rgba(212,168,75,.22); background: rgba(0,8,22,.28);
}
.bx-onco .cmkt.live { border-color: rgba(212,168,75,.45); background: rgba(212,168,75,.08); }
.bx-onco .cmkt .iso { font-family: var(--onco-cond); font-size: 12px; font-weight: 700; letter-spacing: .18em; color: var(--onco-gold-light); }
.bx-onco .cmkt .nm { font-size: 12px; color: rgba(255,255,255,.78); }
.bx-onco .cmkt .tag { font-family: var(--onco-cond); font-size: 8px; letter-spacing: .16em; text-transform: uppercase; color: rgba(255,255,255,.42); }
.bx-onco .cdrow {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0;
  border-top: 1px solid rgba(212,168,75,.22); border-bottom: 1px solid rgba(212,168,75,.22);
  background: linear-gradient(180deg, rgba(212,168,75,.04), transparent); margin-top: 28px; max-width: 720px;
}
@media (min-width: 768px) {
  .bx-onco .cdrow { grid-template-columns: repeat(4, 1fr); }
}
.bx-onco .cdcell { padding: 14px; border-right: 1px solid rgba(255,255,255,.07); position: relative; }
.bx-onco .cdcell:last-child { border-right: none; }
.bx-onco .cdcell::before { content: ''; position: absolute; top: 0; left: 0; width: 16px; height: 1px; background: var(--onco-gold-light); opacity: .55; }
.bx-onco .cdlbl { font-family: var(--onco-cond); font-size: 8.5px; letter-spacing: .24em; text-transform: uppercase; color: rgba(255,255,255,.38); margin-bottom: 6px; font-weight: 600; }
.bx-onco .cdval { font-family: var(--onco-serif); font-size: 14.5px; font-weight: 500; color: rgba(255,255,255,.92); line-height: 1.3; }
.bx-onco .cdval .accent { color: var(--onco-gold-light); }
.bx-onco .cover-foot {
  margin-top: 28px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,.1);
  display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap;
  font-size: 12px; color: rgba(255,255,255,.42);
}
.bx-onco .cover-foot a { color: rgba(255,255,255,.72); }
.bx-onco .cover-foot strong { color: rgba(255,255,255,.78); font-weight: 500; }

.bx-onco .page-rule { display: flex; align-items: center; margin: 0 0 10px; gap: 10px; }
.bx-onco .page-rule::before { content: ''; width: 40px; height: 2px; border-radius: 2px; background: linear-gradient(90deg, var(--onco-gold) 0%, var(--onco-gold-light) 70%, rgba(212,168,75,.35) 100%); }
.bx-onco .page-rule-text { font-family: var(--onco-cond); font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: var(--onco-navy); }
.bx-onco .section-num { font-family: var(--onco-mono); font-size: 11px; letter-spacing: 1.5px; color: var(--onco-gold); margin-bottom: 4px; }
.bx-onco .section-title { font-size: clamp(24px, 3vw, 32px); line-height: 1.16; margin-bottom: 8px; letter-spacing: -.3px; }
.bx-onco .section-title em { font-style: italic; color: var(--onco-steel); font-weight: 400; }
.bx-onco .section-lede { font-size: 15.5px; line-height: 1.6; color: var(--onco-text-soft); margin-bottom: 20px; max-width: 72ch; }
.bx-onco .section-lede strong { color: var(--onco-navy); font-weight: 600; }
.bx-onco .subhead { font-family: var(--onco-cond); font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--onco-blue); margin: 22px 0 10px; }

.bx-onco .stat-band, .bx-onco .fit-band, .bx-onco .phases {
  display: grid; gap: 0; border: 1px solid var(--onco-rule); margin-bottom: 18px; box-shadow: var(--onco-shadow-sm); background: var(--onco-paper);
}
.bx-onco .stat-band { grid-template-columns: 1fr 1fr; }
.bx-onco .fit-band, .bx-onco .phases { grid-template-columns: 1fr; }
@media (min-width: 768px) {
  .bx-onco .stat-band, .bx-onco .fit-band, .bx-onco .phases { grid-template-columns: repeat(4, 1fr); }
}
.bx-onco .stat-cell, .bx-onco .fit-cell, .bx-onco .phase {
  padding: 14px 16px; border-bottom: 1px solid var(--onco-rule); position: relative;
}
@media (min-width: 768px) {
  .bx-onco .stat-cell, .bx-onco .fit-cell, .bx-onco .phase { border-bottom: none; border-right: 1px solid var(--onco-rule); }
  .bx-onco .stat-cell:last-child, .bx-onco .fit-cell:last-child, .bx-onco .phase:last-child { border-right: none; }
}
.bx-onco .stat-cell::before, .bx-onco .fit-cell::before, .bx-onco .phase::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--onco-navy);
}
.bx-onco .stat-cell.g::before, .bx-onco .fit-cell.g::before, .bx-onco .phase.p4::before { background: var(--onco-gold); }
.bx-onco .stat-cell.b::before, .bx-onco .fit-cell.b::before, .bx-onco .phase.p2::before { background: var(--onco-blue); }
.bx-onco .stat-cell.s::before, .bx-onco .fit-cell.s::before, .bx-onco .phase.p3::before { background: var(--onco-steel); }
.bx-onco .stat-n { font-family: var(--onco-serif); font-size: 26px; font-weight: 600; color: var(--onco-navy); line-height: 1; }
.bx-onco .stat-l, .bx-onco .fit-cell .k { font-size: 12px; color: var(--onco-text-muted); margin-top: 4px; font-weight: 500; }
.bx-onco .fit-cell .k { font-family: var(--onco-cond); font-size: 9px; letter-spacing: 1.4px; text-transform: uppercase; font-weight: 700; margin-bottom: 4px; margin-top: 0; }
.bx-onco .fit-cell .v { font-family: var(--onco-serif); font-size: 16px; font-weight: 600; color: var(--onco-navy); line-height: 1.3; }

.bx-onco .bundle-banner {
  border-left: 4px solid var(--onco-gold);
  background: linear-gradient(90deg, rgba(212,168,75,.1) 0%, var(--onco-cool-white) 55%);
  padding: 16px 20px; margin-bottom: 28px; border-radius: 0 var(--onco-radius) var(--onco-radius) 0;
}
.bx-onco .bundle-banner h3 { font-family: var(--onco-serif); font-size: 18px; color: var(--onco-navy); margin: 0 0 6px; }
.bx-onco .bundle-banner p { font-size: 14.5px; color: var(--onco-text-soft); line-height: 1.6; margin: 0; }
.bx-onco .bundle-banner strong { color: var(--onco-navy); }

.bx-onco .matrix { width: 100%; border-collapse: collapse; margin: 8px 0 16px; font-size: 14px; box-shadow: var(--onco-shadow-sm); background: var(--onco-paper); }
.bx-onco .matrix thead th {
  background: linear-gradient(180deg, #003058 0%, var(--onco-navy) 100%); color: #fff;
  padding: 12px 14px; text-align: left; font-family: var(--onco-cond); font-size: 11px; font-weight: 600; letter-spacing: 1.6px; text-transform: uppercase;
}
.bx-onco .matrix tbody tr { border-bottom: 1px solid var(--onco-rule); }
.bx-onco .matrix tbody tr:nth-child(even) { background: var(--onco-cool-white); }
.bx-onco .matrix tbody tr.rec { background: rgba(212,168,75,.08); }
.bx-onco .matrix tbody td { padding: 10px 12px; color: var(--onco-text-soft); vertical-align: top; }
.bx-onco .matrix tbody td:first-child { color: var(--onco-navy); font-weight: 600; font-family: var(--onco-serif); font-size: 15px; }
.bx-onco .matrix-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; margin-bottom: 12px; }
.bx-onco .note-line { font-size: 13px; color: var(--onco-text-muted); line-height: 1.5; margin: 4px 0 8px; font-style: italic; }

.bx-onco .choice-grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 20px; }
@media (min-width: 768px) {
  .bx-onco .choice-grid { grid-template-columns: 1fr 1fr; }
}
.bx-onco .choice-card { border: 1px solid rgba(0,34,68,.12); background: var(--onco-paper); overflow: hidden; box-shadow: var(--onco-shadow-sm); display: flex; flex-direction: column; }
.bx-onco .choice-card.a { border-color: rgba(0,105,163,.35); }
.bx-onco .choice-card.b { border-color: rgba(184,134,45,.4); }
.bx-onco .choice-hd { padding: 12px 16px; color: #fff; display: flex; justify-content: space-between; align-items: center; gap: 8px; }
.bx-onco .choice-card.a .choice-hd { background: linear-gradient(90deg, #00264a 0%, #0069A3 100%); }
.bx-onco .choice-card.b .choice-hd { background: linear-gradient(90deg, #1a1208 0%, #8A6A25 100%); }
.bx-onco .choice-hd strong { font-family: var(--onco-serif); font-size: 18px; font-weight: 600; }
.bx-onco .choice-hd span { font-family: var(--onco-cond); font-size: 9px; letter-spacing: 1.6px; text-transform: uppercase; opacity: .8; }
.bx-onco .choice-body { padding: 14px 16px 10px; flex: 1; }
.bx-onco .choice-kicker { font-family: var(--onco-cond); font-size: 9.5px; letter-spacing: 1.8px; text-transform: uppercase; color: var(--onco-text-muted); font-weight: 700; margin-bottom: 4px; }
.bx-onco .choice-amt { font-family: var(--onco-serif); font-size: 28px; font-weight: 500; color: var(--onco-navy); letter-spacing: -.6px; line-height: 1; margin-bottom: 8px; }
.bx-onco .choice-body ul { list-style: none; margin: 8px 0 0; padding: 0; }
.bx-onco .choice-body li { font-size: 14px; line-height: 1.5; color: var(--onco-text-soft); padding: 5px 0 5px 14px; position: relative; border-bottom: 1px solid rgba(0,34,68,.05); }
.bx-onco .choice-body li:last-child { border-bottom: none; }
.bx-onco .choice-body li::before { content: '›'; position: absolute; left: 0; color: var(--onco-gold); font-weight: 700; }
.bx-onco .choice-foot { padding: 10px 16px; background: var(--onco-cool-white); border-top: 1px solid var(--onco-rule); font-size: 13px; color: var(--onco-text-muted); line-height: 1.45; }

.bx-onco .phase .num { font-family: var(--onco-mono); font-size: 9.5px; letter-spacing: 1.3px; color: var(--onco-text-muted); margin-bottom: 4px; }
.bx-onco .phase h3 { font-family: var(--onco-serif); font-size: 17px; font-weight: 600; color: var(--onco-navy); margin: 0 0 8px; }
.bx-onco .phase ul { list-style: none; padding: 0; margin: 0; }
.bx-onco .phase li { font-size: 13.5px; line-height: 1.45; color: var(--onco-text-soft); padding: 3px 0 3px 12px; position: relative; }
.bx-onco .phase li::before { content: '›'; position: absolute; left: 0; color: var(--onco-gold); font-weight: 700; }

.bx-onco .rq-blueprint { border: 1px solid rgba(0,34,68,.1); border-radius: var(--onco-radius); background: var(--onco-paper); box-shadow: var(--onco-shadow-sm); overflow: hidden; margin-bottom: 20px; }
.bx-onco .rq-bp-hd {
  display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; align-items: center;
  padding: 10px 14px; background: linear-gradient(90deg, #00264a 0%, #003966 100%); color: #fff; border-bottom: 2px solid var(--onco-gold);
}
.bx-onco .rq-bp-eyebrow { font-family: var(--onco-cond); font-size: 9px; letter-spacing: 2.2px; text-transform: uppercase; color: var(--onco-gold); font-weight: 700; }
.bx-onco .rq-bp-title { font-family: var(--onco-serif); font-size: 15px; font-weight: 600; color: #fff; }
.bx-onco .rq-bp-pills { display: flex; gap: 4px; flex-wrap: wrap; }
.bx-onco .rq-pill { font-family: var(--onco-cond); font-size: 8.5px; letter-spacing: 1.2px; text-transform: uppercase; font-weight: 700; padding: 3px 7px; border-radius: 2px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.18); color: rgba(255,255,255,.92); }
.bx-onco .rq-pill.rec { background: var(--onco-gold); border-color: var(--onco-gold); color: #1a1208; }
.bx-onco .rq-row { display: grid; grid-template-columns: 36px 1fr; border-top: 1px solid rgba(0,34,68,.06); }
@media (min-width: 768px) {
  .bx-onco .rq-row { grid-template-columns: 40px 1.1fr 1.4fr auto; align-items: center; }
}
.bx-onco .rq-row > div { padding: 10px 8px; }
.bx-onco .rq-row.hdr { background: rgba(0,34,68,.03); font-family: var(--onco-cond); font-size: 9px; letter-spacing: 1.6px; text-transform: uppercase; color: var(--onco-text-muted); font-weight: 700; }
.bx-onco .rq-num { font-family: var(--onco-mono); font-size: 12px; color: var(--onco-gold); font-weight: 500; }
.bx-onco .rq-dec { font-weight: 600; color: var(--onco-navy); font-family: var(--onco-serif); font-size: 15px; line-height: 1.35; }
.bx-onco .rq-out { color: var(--onco-text-soft); line-height: 1.45; font-size: 14px; }
.bx-onco .rq-tag { font-family: var(--onco-cond); font-size: 8.5px; letter-spacing: 1px; text-transform: uppercase; padding: 3px 7px; border-radius: 2px; background: var(--onco-light-blue); color: var(--onco-blue); font-weight: 700; white-space: nowrap; height: fit-content; }

.bx-onco .why-grid { display: grid; grid-template-columns: 1fr; gap: 0; border: 1px solid var(--onco-rule); margin-bottom: 20px; box-shadow: var(--onco-shadow-sm); }
@media (min-width: 768px) {
  .bx-onco .why-grid { grid-template-columns: 1fr 1fr; }
}
.bx-onco .why-cell { padding: 16px 18px; border-bottom: 1px solid var(--onco-rule); background: var(--onco-paper); }
@media (min-width: 768px) {
  .bx-onco .why-cell:nth-child(2n) { border-left: 1px solid var(--onco-rule); }
  .bx-onco .why-cell:nth-last-child(-n+2) { border-bottom: none; }
}
.bx-onco .why-cell .n { font-family: var(--onco-mono); font-size: 11px; letter-spacing: 1.2px; color: var(--onco-gold); font-weight: 500; margin-bottom: 4px; }
.bx-onco .why-cell h3 { font-family: var(--onco-serif); font-size: 18px; font-weight: 600; color: var(--onco-navy); margin: 0 0 6px; line-height: 1.2; }
.bx-onco .why-cell p { font-size: 14.5px; line-height: 1.5; color: var(--onco-text-soft); margin: 0; }

.bx-onco .firm-card { border: 1px solid var(--onco-rule); background: var(--onco-paper); padding: 22px 24px; margin-bottom: 14px; box-shadow: var(--onco-shadow-sm); scroll-margin-top: 96px; }
.bx-onco .firm-card.rec { border-color: rgba(184,134,45,.45); box-shadow: var(--onco-shadow-md); }
.bx-onco .firm-rank { display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 50%; background: var(--onco-navy); color: #fff; font-family: var(--onco-cond); font-weight: 700; font-size: 14px; }
.bx-onco .firm-card.rec .firm-rank { background: var(--onco-gold); color: #1a1208; }
.bx-onco .firm-type { display: inline-block; font-family: var(--onco-cond); font-size: 10px; letter-spacing: 1.2px; text-transform: uppercase; font-weight: 700; padding: 3px 8px; background: var(--onco-light-blue); color: var(--onco-blue); }
.bx-onco .firm-card ul { list-style: none; padding: 0; margin: 10px 0 0; display: grid; gap: 6px; }
@media (min-width: 768px) {
  .bx-onco .firm-card ul { grid-template-columns: 1fr 1fr; }
}
.bx-onco .firm-card li { font-size: 14px; color: var(--onco-text-soft); padding-left: 14px; position: relative; }
.bx-onco .firm-card li::before { content: '›'; position: absolute; left: 0; color: var(--onco-gold); font-weight: 700; }

.bx-onco .qa-list { margin: 8px 0 16px; border: 1px solid var(--onco-rule); box-shadow: var(--onco-shadow-sm); background: var(--onco-paper); }
.bx-onco .qa-item { padding: 0; border-bottom: 1px solid var(--onco-rule); }
.bx-onco .qa-item:last-child { border-bottom: none; }
.bx-onco .qa-item summary {
  cursor: pointer; list-style: none; padding: 14px 16px;
  font-family: var(--onco-serif); font-size: 17px; font-weight: 600; color: var(--onco-navy); line-height: 1.3;
}
.bx-onco .qa-item summary::-webkit-details-marker { display: none; }
.bx-onco .qa-item .a { padding: 0 16px 16px; font-size: 14.5px; line-height: 1.55; color: var(--onco-text-soft); }
.bx-onco .qa-item .a strong { color: var(--onco-navy); }

.bx-onco .closing-sign {
  margin-top: 12px; padding: 24px 22px; border-radius: 6px;
  background: linear-gradient(158deg, #000d18 0%, #001a2e 28%, #002244 55%, #063558 92%);
  color: #fff; border: 1px solid rgba(212,168,75,.35); box-shadow: var(--onco-shadow-md); position: relative; overflow: hidden;
}
.bx-onco .closing-sign::before {
  content: ''; position: absolute; top: 0; left: 8%; right: 8%; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(212,168,75,.85), rgba(0,105,163,.5), transparent); pointer-events: none;
}
.bx-onco .closing-sign h2 { font-family: var(--onco-serif); font-size: clamp(20px, 2.4vw, 26px); font-weight: 500; color: #fff; margin: 0 0 12px; letter-spacing: -.3px; }
.bx-onco .closing-sign h2 em { color: var(--onco-gold-light); font-style: italic; font-weight: 400; }
.bx-onco .closing-sign > p { font-size: 14.5px; line-height: 1.62; color: rgba(255,255,255,.82); margin-bottom: 18px; }
.bx-onco .closing-contact { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 18px; }
@media (min-width: 768px) {
  .bx-onco .closing-contact { grid-template-columns: repeat(4, 1fr); }
}
.bx-onco .closing-contact .label { font-family: var(--onco-cond); font-size: 9px; letter-spacing: 1.8px; text-transform: uppercase; color: rgba(255,255,255,.45); margin-bottom: 4px; font-weight: 600; }
.bx-onco .closing-contact .value { font-family: var(--onco-serif); font-size: 14px; font-weight: 500; color: #fff; line-height: 1.35; }
.bx-onco .closing-contact a { color: #fff; }
.bx-onco .closing-contact .value.mono { font-family: var(--onco-mono); font-size: 12px; font-weight: 400; }

.bx-onco .related-grid { display: grid; grid-template-columns: 1fr; gap: 10px; }
@media (min-width: 768px) {
  .bx-onco .related-grid { grid-template-columns: 1fr 1fr; }
}
.bx-onco .related-card {
  display: block; border: 1px solid var(--onco-rule); background: var(--onco-paper); padding: 16px 18px; color: inherit;
}
.bx-onco .related-card:hover { border-color: rgba(0,105,163,.35); text-decoration: none; }
.bx-onco .related-card h3 { font-size: 16px; margin: 0 0 4px; }
.bx-onco .related-card p { font-size: 13.5px; color: var(--onco-text-soft); margin: 0; }

.bx-onco .onco-cta-slot { background: var(--onco-cool-white); border-top: 1px solid var(--onco-rule); }
.bx-onco .crumb-on-cover a { color: rgba(255,255,255,.62); }
.bx-onco .crumb-on-cover a:hover { color: var(--onco-gold-light); }
.bx-onco .crumb-on-cover span[aria-current] { color: var(--onco-gold-light); }

@media (prefers-reduced-motion: reduce) {
  .bx-onco * { animation: none !important; transition: none !important; }
}
`;
