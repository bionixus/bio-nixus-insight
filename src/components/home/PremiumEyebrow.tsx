import type { ReactNode } from 'react';

type PremiumEyebrowProps = {
  children: ReactNode;
  tone?: 'gold' | 'teal';
};

export function PremiumEyebrow({ children, tone = 'gold' }: PremiumEyebrowProps) {
  const color = tone === 'teal' ? 'text-[#0EA5A0]' : 'text-[#C9A84C]';
  const line = tone === 'teal' ? 'bg-[#0EA5A0]/30' : 'bg-[#C9A84C]/40';

  return (
    <p
      className={`mb-5 inline-flex items-center gap-2.5 text-[11.5px] font-semibold uppercase tracking-[0.2em] ${color}`}
    >
      <span className={`h-px w-6 ${line}`} aria-hidden="true" />
      {children}
      <span className={`h-px w-6 ${line}`} aria-hidden="true" />
    </p>
  );
}
