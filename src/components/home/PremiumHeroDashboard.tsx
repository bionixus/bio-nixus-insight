import { useLanguage } from '@/contexts/LanguageContext';

const AXIS_X = [20, 100, 180, 260, 340, 420, 470];
const AXIS_YEARS = ['2020', '2021', '2022', '2023', '2024', '2025'];
/** Chinese convention spells years out digit by digit rather than as a cardinal number. */
const ZH_DIGITS = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

/** Market intelligence dashboard card — matches premium-home-preview.html hero visual. */
export function PremiumHeroDashboard({ className = '' }: { className?: string }) {
  const { t, language } = useLanguage();
  const d = t.homePage.heroDashboard;

  const axisYears = [...AXIS_YEARS, t.ui.chart.forecastYear].map((year, index) => ({
    label:
      language === 'zh' && index < AXIS_YEARS.length
        ? [...year].map((digit) => ZH_DIGITS[Number(digit)]).join('')
        : year,
    x: AXIS_X[index],
  }));

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-line bg-night-2/70 p-7 backdrop-blur-xl sm:p-9 shadow-[0_50px_110px_-40px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.05)] ${className}`.trim()}
    >
      <div
        className="pointer-events-none absolute inset-x-[60px] top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        aria-hidden="true"
      />
      <div className="mb-7 flex items-center justify-between gap-4">
        <h2 className="font-display text-lg font-semibold tracking-tight text-foreground">{d.heading}</h2>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-[#14CFC8]">
          <span className="premium-live-pulse h-1.5 w-1.5 rounded-full bg-[#14CFC8]" />
          {d.status}
        </span>
      </div>

      <div className="relative mb-7 h-[200px]">
        <div className="absolute right-5 top-2 z-10 rounded-[14px] border border-primary/25 bg-background/85 px-4 py-3 backdrop-blur">
          <p className="font-display text-[28px] font-bold leading-none tracking-tight text-primary">{d.calloutValue}</p>
          <p className="mt-1 text-[11px] text-white/35">{d.calloutLabel}</p>
          <p className="mt-0.5 text-[11px] font-medium text-[#14CFC8]">{d.calloutCagr}</p>
        </div>
        <svg viewBox="0 0 500 180" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="premiumGoldGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(201,168,76,0.25)" />
              <stop offset="100%" stopColor="rgba(201,168,76,0)" />
            </linearGradient>
            <linearGradient id="premiumTealGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(14,165,160,0.12)" />
              <stop offset="100%" stopColor="rgba(14,165,160,0)" />
            </linearGradient>
          </defs>
          {[45, 90, 135].map((y) => (
            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          ))}
          {axisYears.map(({ label, x }) => (
            <text key={label} x={x} y="175" fill="rgba(255,255,255,0.25)" fontSize="10" fontFamily="Martian Mono, ui-monospace, monospace">
              {label}
            </text>
          ))}
          <path
            d="M20,120 C60,118 100,110 140,105 C180,100 220,98 260,88 C300,78 340,72 380,65 C420,58 460,50 490,45 L490,160 L20,160 Z"
            fill="url(#premiumTealGrad)"
          />
          <path
            d="M20,120 C60,118 100,110 140,105 C180,100 220,98 260,88 C300,78 340,72 380,65 C420,58 460,50 490,45"
            fill="none"
            stroke="#0EA5A0"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M20,140 C60,135 100,125 140,118 C180,108 220,95 260,82 C300,68 340,55 380,42 C420,32 460,25 490,18 L490,160 L20,160 Z"
            fill="url(#premiumGoldGrad)"
            className="premium-chart-fade"
          />
          <path
            d="M20,140 C60,135 100,125 140,118 C180,108 220,95 260,82 C300,68 340,55 380,42 C420,32 460,25 490,18"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="premium-chart-draw"
          />
          <circle cx="490" cy="18" r="4.5" fill="#C9A84C" className="premium-dot-fade" style={{ filter: 'drop-shadow(0 0 6px rgba(201,168,76,0.5))' }} />
          <circle cx="490" cy="45" r="3.5" fill="#0EA5A0" className="premium-dot-fade" style={{ filter: 'drop-shadow(0 0 6px rgba(14,165,160,0.5))' }} />
          <line x1="20" y1="10" x2="38" y2="10" stroke="rgba(201,168,76,0.8)" strokeWidth="2" />
          <text x="42" y="14" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Archivo, 'Archivo Fallback', Arial, sans-serif">
            {d.legendGlobal}
          </text>
          <line x1="130" y1="10" x2="148" y2="10" stroke="rgba(14,165,160,0.5)" strokeWidth="2" />
          <text x="152" y="14" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Archivo, 'Archivo Fallback', Arial, sans-serif">
            {d.legendRegional}
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {d.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[16px] border border-line bg-white/[0.02] px-4 py-4 text-center transition-colors hover:border-primary/25 hover:bg-primary/[0.04]"
          >
            <p className="mb-1.5 text-[10px] font-medium uppercase tracking-wider text-ink-3">{metric.label}</p>
            <p className="font-display text-lg font-bold tracking-tight text-foreground">{metric.value}</p>
            <p className="mt-0.5 text-[11px] text-white/25">{metric.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
