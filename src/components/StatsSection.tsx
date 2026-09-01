import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatLocalizedNumber } from '@/lib/localizedNumbers';

/**
 * Splits "120+" into its numeric target and the decoration around it, keeping the affix on the
 * side it was authored on — the Arabic bundle writes "+38" rather than "38+".
 */
function parseStatValue(value: string): { number: number; prefix: string; suffix: string } {
  const match = value.match(/(\d[\d,.\s]*)/);
  if (!match) return { number: 0, prefix: value, suffix: '' };
  const numeric = Number(match[1].replace(/[^\d]/g, ''));
  if (Number.isNaN(numeric)) return { number: 0, prefix: value, suffix: '' };
  return {
    number: numeric,
    prefix: value.slice(0, match.index ?? 0),
    suffix: value.slice((match.index ?? 0) + match[1].length),
  };
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

const DURATION_MS = 1800;

const StatsSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [hydrated, setHydrated] = useState(false);
  const [inView, setInView] = useState(false);
  const parsed = t.stats.items.map((s) => parseStatValue(s.value));
  const targets = parsed.map((p) => p.number);
  const [counts, setCounts] = useState<number[]>(() => targets);
  const [done, setDone] = useState(true);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true);
      },
      { threshold: 0.2, rootMargin: '50px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !hydrated || hasAnimated.current) return;
    hasAnimated.current = true;
    startRef.current = null;
    setDone(false);
    setCounts(targets.map(() => 0));
    const step = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutExpo(progress);
      setCounts(targets.map((target) => Math.round(eased * target)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDone(true);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView, hydrated]);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-primary overflow-hidden">
      <div className="container-wide">
        <h2 className={`text-3xl md:text-4xl font-display font-semibold text-primary-foreground text-center mb-16 transition-all duration-700 ${hydrated && inView ? 'opacity-100 translate-y-0' : hydrated ? 'opacity-0 translate-y-6' : ''}`}>
          {t.stats.title}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {t.stats.items.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${hydrated && inView ? 'opacity-100 translate-y-0' : hydrated ? 'opacity-0 translate-y-8' : ''}`}
              style={{ transitionDelay: hydrated ? `${index * 150}ms` : undefined }}
            >
              <div className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gold-warm mb-3 tabular-nums ${done ? 'glow-pop' : ''}`}>
                {parsed[index]?.prefix ?? ''}
                {formatLocalizedNumber(counts[index] ?? parsed[index]?.number ?? 0, language)}
                {parsed[index]?.suffix ?? ''}
              </div>
              <div className={`text-primary-foreground/80 font-medium transition-all duration-500 ${done ? 'opacity-100' : 'opacity-60'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
