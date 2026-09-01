/** Extra rules so existing country-ranking sections inherit the oncology premium tokens. */
export const COUNTRY_RANKING_BODY_CSS = `
.bx-onco .rank-article {
  background: radial-gradient(ellipse 120% 80% at 50% -20%, rgba(0,105,163,.05) 0%, transparent 55%),
    linear-gradient(180deg, #f3f5f7 0%, #fafaf8 40%, #f3f5f7 100%);
}
.bx-onco .rank-article h2 {
  font-family: var(--onco-serif) !important;
  font-weight: 500 !important;
  color: var(--onco-navy) !important;
  letter-spacing: -.3px;
}
.bx-onco .rank-article h3 {
  font-family: var(--onco-serif) !important;
  font-weight: 500 !important;
  color: var(--onco-navy) !important;
}
.bx-onco .rank-article .rounded-xl,
.bx-onco .rank-article .rounded-lg {
  border-radius: var(--onco-radius) !important;
  box-shadow: var(--onco-shadow-sm);
}
.bx-onco .rank-article .border-border {
  border-color: var(--onco-rule) !important;
}
.bx-onco .rank-article .bg-card {
  background: var(--onco-paper) !important;
}
.bx-onco .rank-article .bg-muted\\/30,
.bx-onco .rank-article .bg-muted\\/20 {
  background: var(--onco-cool-white) !important;
}
.bx-onco .rank-article .text-primary {
  color: var(--onco-blue) !important;
}
.bx-onco .rank-article .bg-primary {
  background: var(--onco-navy) !important;
}
.bx-onco .rank-article table {
  border-collapse: collapse;
  width: 100%;
  font-size: 13.5px;
}
.bx-onco .rank-article thead th {
  font-family: var(--onco-cond);
  font-size: 11px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--onco-navy);
  border-bottom: 1px solid var(--onco-rule);
  padding: 10px 12px;
  text-align: left;
}
.bx-onco .rank-article tbody td {
  border-bottom: 1px solid var(--onco-rule);
  padding: 12px;
  color: var(--onco-text-soft);
}
.bx-onco .rank-firm {
  border: 1px solid var(--onco-rule);
  background: var(--onco-paper);
  padding: 28px 28px 24px;
  margin-bottom: 16px;
  position: relative;
}
.bx-onco .rank-firm::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--onco-gold), transparent);
}
.bx-onco .rank-firm.lead::before {
  background: linear-gradient(90deg, var(--onco-gold), var(--onco-gold-light), transparent);
}
.bx-onco .rank-num {
  font-family: var(--onco-cond);
  font-size: 11px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--onco-gold);
  font-weight: 600;
  margin-bottom: 8px;
}
`;
