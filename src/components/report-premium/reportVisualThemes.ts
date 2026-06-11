export type ReportVisualTheme = 'market' | 'regulatory' | 'therapy' | 'hospital' | 'access' | 'field' | 'epidemiology' | 'hero';

const THERAPY_ACCENT: Record<string, string> = {
  oncology: 'hsl(280 65% 45%)',
  diabetes: 'hsl(210 75% 45%)',
  cardiovascular: 'hsl(350 70% 48%)',
  immunology: 'hsl(175 55% 38%)',
  'rare-diseases': 'hsl(265 60% 50%)',
  neurology: 'hsl(230 60% 48%)',
  respiratory: 'hsl(195 70% 42%)',
  ophthalmology: 'hsl(45 85% 48%)',
  'hiv-arv': 'hsl(320 55% 45%)',
  vaccines: 'hsl(160 55% 40%)',
  dermatology: 'hsl(25 75% 50%)',
  gastroenterology: 'hsl(140 45% 40%)',
};

export function getTherapyAccent(therapySlug?: string): string {
  if (therapySlug && THERAPY_ACCENT[therapySlug]) return THERAPY_ACCENT[therapySlug];
  return 'hsl(var(--accent))';
}

export function getVisualSeed(marketSlug?: string, therapySlug?: string): number {
  const raw = `${marketSlug ?? ''}-${therapySlug ?? ''}`;
  let hash = 0;
  for (let i = 0; i < raw.length; i += 1) {
    hash = (hash << 5) - hash + raw.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/** Parse numeric CAGR from strings like "7.5%" or "7–9% CAGR". */
export function parseCagrPercent(value: string): number | null {
  const match = value.match(/([\d.]+)\s*%/);
  if (!match) return null;
  const n = parseFloat(match[1]);
  return Number.isFinite(n) ? n : null;
}

/** Build illustrative index series for chart animation (indexed 100 = 2022). */
export function buildGrowthSeries(cagrPercent: number | null, years = 9): { year: string; index: number }[] {
  const rate = (cagrPercent ?? 6.5) / 100;
  const startYear = 2022;
  return Array.from({ length: years }, (_, i) => {
    const index = Math.round(100 * (1 + rate) ** i);
    return { year: String(startYear + i), index };
  });
}

/** Parse therapy segment market size to relative bar width (illustrative). */
export function parseMarketSizeWeight(size: string): number {
  const normalized = size.replace(/[^0-9.BMKbm]/g, '');
  const numMatch = normalized.match(/([\d.]+)([BMK])?/i);
  if (!numMatch) return 50;
  let n = parseFloat(numMatch[1]);
  const unit = (numMatch[2] ?? '').toUpperCase();
  if (unit === 'B') n *= 1000;
  if (unit === 'K') n /= 1000;
  return Math.min(100, Math.max(12, Math.round(n * 8)));
}
