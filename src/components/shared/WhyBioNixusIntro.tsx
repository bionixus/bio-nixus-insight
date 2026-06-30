import { BIONIXUS_POSITIONING_V2 } from '@/data/bionixusPositioningCopy';

type WhyBioNixusIntroProps = {
  className?: string;
};

export function WhyBioNixusIntro({ className = 'mb-6 max-w-4xl text-muted-foreground leading-relaxed' }: WhyBioNixusIntroProps) {
  return <p className={className}>{BIONIXUS_POSITIONING_V2}</p>;
}
