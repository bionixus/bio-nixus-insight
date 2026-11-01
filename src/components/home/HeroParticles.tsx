import { useEffect, useRef } from 'react';

type Particle = { x: number; y: number; vx: number; vy: number; r: number; phase: number };

const TEAL = [143, 227, 220];
const GOLD = [247, 201, 72];
const EMBER = [245, 165, 3];

function warmth(t: number): [number, number, number] {
  // Ice-to-ember along the x axis, like the alsaadany.com growth engine, in BioNixus teal and gold.
  const c = t < 0.6 ? lerp3(TEAL, GOLD, t / 0.6) : lerp3(GOLD, EMBER, (t - 0.6) / 0.4);
  return [Math.round(c[0]), Math.round(c[1]), Math.round(c[2])];
}

function lerp3(a: number[], b: number[], t: number): number[] {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

/**
 * Decorative particle field behind the homepage hero: data points that drift left to right and
 * warm from teal to gold as they travel, linked by faint lines. Purely visual (aria-hidden), starts
 * after the browser is idle so it never competes with the LCP, pauses when off-screen or hidden,
 * and renders a single still frame for people who prefer reduced motion.
 */
export function HeroParticles({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let raf = 0;
    let visible = true;
    let started = false;
    let last = 0;

    const seed = () => {
      const area = width * height;
      const count = Math.max(26, Math.min(90, Math.round(area / 16000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0.12 + Math.random() * 0.28,
        vy: (Math.random() - 0.5) * 0.08,
        r: 0.8 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!particles.length) seed();
    };

    const draw = (time: number) => {
      const dt = last ? Math.min(48, time - last) / 16.67 : 1;
      last = time;
      ctx.clearRect(0, 0, width, height);
      const linkDist = Math.min(150, Math.max(90, width / 11));
      for (const p of particles) {
        if (!still) {
          p.x += p.vx * dt;
          p.y += (p.vy + Math.sin(time / 2400 + p.phase) * 0.06) * dt;
          if (p.x > width + 10) {
            p.x = -10;
            p.y = Math.random() * height;
          }
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }
      }
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > linkDist * linkDist) continue;
          const alpha = (1 - Math.sqrt(d2) / linkDist) * 0.18;
          const [r, g, bl] = warmth(Math.min(1, Math.max(0, (a.x + b.x) / 2 / width)));
          ctx.strokeStyle = `rgba(${r},${g},${bl},${alpha.toFixed(3)})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      for (const p of particles) {
        const t = Math.min(1, Math.max(0, p.x / width));
        const [r, g, b] = warmth(t);
        const glow = 0.45 + 0.4 * t;
        ctx.fillStyle = `rgba(${r},${g},${b},${glow.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.8 + t * 0.6), 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (time: number) => {
      draw(time);
      if (!still && visible && !document.hidden) raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (started) return;
      started = true;
      resize();
      canvas.dataset.ready = 'true';
      raf = requestAnimationFrame(loop);
    };

    const ro = new ResizeObserver(() => {
      if (!started) return;
      resize();
      if (still) draw(performance.now());
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && started && !still) {
        last = 0;
        raf = requestAnimationFrame(loop);
      }
    });
    io.observe(canvas);

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && visible && started && !still) {
        last = 0;
        raf = requestAnimationFrame(loop);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(start, { timeout: 1800 })
      : window.setTimeout(start, 900);

    return () => {
      if (window.cancelIdleCallback && typeof idle === 'number') window.cancelIdleCallback(idle);
      window.clearTimeout(idle as number);
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity [transition-duration:1600ms] data-[ready=true]:opacity-100 ${className}`.trim()}
    />
  );
}
