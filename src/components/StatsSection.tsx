import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

function parseStatValue(value: string): { number: number; suffix: string } {
  const num = parseInt(value.replace(/\D/g, ''), 10);
  if (Number.isNaN(num)) return { number: 0, suffix: value };
  const suffix = value.includes('+') ? '+' : value.replace(/[\d]/g, '') || '';
  return { number: num, suffix };
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

const DURATION_MS = 1800;

const StatsSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const parsed = t.stats.items.map((s) => parseStatValue(s.value));
  const [counts, setCounts] = useState<number[]>(() => parsed.map(() => 0));
  const [done, setDone] = useState(false);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);

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
    if (!inView) return;
    const targets = parsed.map((p) => p.number);
    startRef.current = null;
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
  }, [inView, t.stats.items]);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-primary overflow-hidden">
      <div className="container-wide">
        <h2 className={`text-3xl md:text-4xl font-display font-semibold text-primary-foreground text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {t.stats.title}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {t.stats.items.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gold-warm mb-3 tabular-nums ${done ? 'glow-pop' : ''}`}>
                {counts[index] ?? 0}
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
