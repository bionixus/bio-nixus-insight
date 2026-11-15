import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/** Dotted world (Natural Earth projection, 1000×500), tinted west to east in the BioNixus heat palette. */
const MAP_SRC = '/images/bionixus-coverage-dots.svg';

type Office = {
  id: string;
  name: string;
  x: number;
  y: number;
  lx: number;
  ly: number;
  anchor: 'start' | 'middle' | 'end';
  /** Regional leadership office (true) or field office (false). */
  lead: boolean;
};

/* Positions are projected onto the same 1000×500 frame as MAP_SRC. */
const OFFICES: Office[] = [
  { id: 'sheridan', name: 'Sheridan', x: 235.2, y: 137.3, lx: 250, ly: 131, anchor: 'start', lead: true },
  { id: 'london', name: 'London', x: 499.7, y: 116.6, lx: 486, ly: 106, anchor: 'end', lead: true },
  { id: 'zayed', name: 'Sheikh Zayed', x: 581.4, y: 184.2, lx: 566, ly: 216, anchor: 'end', lead: true },
  { id: 'salmiya', name: 'Salmiya', x: 626.6, y: 186.5, lx: 640, ly: 170, anchor: 'start', lead: false },
  { id: 'khobar', name: 'Al Khobar', x: 633.3, y: 196.5, lx: 636, ly: 232, anchor: 'middle', lead: false },
  { id: 'dubai', name: 'Dubai', x: 647.2, y: 199.7, lx: 662, ly: 212, anchor: 'start', lead: false },
  { id: 'saopaulo', name: 'São Paulo', x: 375.3, y: 354.9, lx: 390, ly: 362, anchor: 'start', lead: false },
];

const ARCS = [
  { id: 'sheridan-london', d: 'M235.2 137.3Q362.9 68.8 499.7 116.6' },
  { id: 'sheridan-saopaulo', d: 'M235.2 137.3Q253.0 279.7 375.3 354.9' },
  { id: 'london-zayed', d: 'M499.7 116.6Q562.2 124.3 581.4 184.2' },
  { id: 'zayed-dubai', d: 'M581.4 184.2Q620.8 164.3 647.2 199.7' },
];

/**
 * Global coverage map: BioNixus offices on a dotted world, linked by the routes the work travels,
 * with the 48-country footprint. Regional leadership in Sheridan, London and Sheikh Zayed; field
 * offices in Dubai, Al Khobar, Salmiya and São Paulo. Routes draw in and data pulses travel along
 * them once the map is on screen (static for reduced motion and without JavaScript).
 */
export function TrustCoverageMap({ wide = false }: { wide?: boolean } = {}) {
  const { t } = useLanguage();
  const copy = t.ui.coverageMap;
  const ref = useRef<HTMLElement>(null);
  const [live, setLive] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setAnimate(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (!('IntersectionObserver' in window)) {
      setLive(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLive(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure
      ref={ref}
      className="coverage-map theme-dark overflow-hidden rounded-xl border border-border bg-[#06101F]"
      data-live={live ? 'true' : undefined}
      data-size={wide ? 'wide' : undefined}
    >
      <div className="relative">
        <img
          src={MAP_SRC}
          alt={copy.alt}
          width={1000}
          height={500}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
        <svg
          viewBox="0 0 1000 500"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
          direction="ltr"
        >
          {ARCS.map((arc, i) => (
            <path key={arc.id} id={`coverage-${arc.id}`} d={arc.d} pathLength={1} className="coverage-arc" data-i={i} />
          ))}
          {live &&
            animate &&
            ARCS.map((arc, i) => {
              const dur = `${3.4 + i * 0.4}s`;
              const begin = `${1.4 + i * 0.45}s`;
              return (
                <circle key={`pulse-${arc.id}`} r="3.4" className="coverage-packet" opacity="0">
                  <animateMotion dur={dur} begin={begin} repeatCount="indefinite">
                    <mpath href={`#coverage-${arc.id}`} />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.12;0.82;1"
                    dur={dur}
                    begin={begin}
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}
          {OFFICES.map((office) => (
            <g key={office.id} className={office.lead ? 'coverage-pin is-lead' : 'coverage-pin'} data-office={office.id}>
              <line
                x1={office.x}
                y1={office.y}
                x2={office.lx + (office.anchor === 'start' ? -4 : office.anchor === 'end' ? 4 : 0)}
                y2={office.ly - 8}
                className="coverage-leader"
              />
              <circle cx={office.x} cy={office.y} r={office.lead ? 6 : 4.6} className="coverage-ring" />
              {office.lead && <circle cx={office.x} cy={office.y} r="11" className="coverage-halo" />}
              <circle cx={office.x} cy={office.y} r={office.lead ? 5.5 : 4.2} className="coverage-dot" />
              <text x={office.lx} y={office.ly} textAnchor={office.anchor} className="coverage-label">
                {office.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 ${wide ? 'px-5 py-5 md:px-8' : 'px-4 py-4 md:px-5'}`}>
        <p className="flex items-baseline gap-2">
          <span className={`font-display leading-none text-primary ${wide ? 'text-5xl md:text-6xl' : 'text-4xl'}`}>48</span>
          <span className={`font-semibold text-white ${wide ? 'text-base md:text-lg' : 'text-sm'}`}>{copy.countriesLabel}</span>
        </p>
        <p className={`leading-relaxed text-white/70 ${wide ? 'text-sm' : 'text-xs'}`}>{copy.regions}</p>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/70 sm:ms-auto">
          <li className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F7C948]" aria-hidden="true" />
            {copy.leadOffice}
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#14CFC8]" aria-hidden="true" />
            {copy.fieldOffice}
          </li>
        </ul>
      </div>
      <figcaption
        className={`border-t border-white/10 leading-relaxed text-white/60 ${wide ? 'px-5 py-4 text-sm md:px-8' : 'px-4 py-3 text-xs md:px-5'}`}
      >
        {copy.caption}
      </figcaption>
    </figure>
  );
}
