import { Link } from 'react-router-dom'

const DEFAULT_BOILERPLATE =
  'BioNixus is a global healthcare and pharmaceutical market research firm headquartered in the United States, with regional offices in London and Cairo and country presence across the Americas, Europe, and the Middle East. The company delivers quantitative physician research, qualitative KOL programmes, payer and HTA intelligence, and launch strategy support for commercial, medical, and market access teams worldwide.'

type PressBoilerplateProps = {
  boilerplate?: string
}

export function PressBoilerplate({ boilerplate }: PressBoilerplateProps) {
  const text = boilerplate?.trim() || DEFAULT_BOILERPLATE
  return (
    <footer className="mt-12 pt-8 border-t border-border/70 max-w-3xl">
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-3">
        About BioNixus
      </p>
      <p className="text-[15px] leading-relaxed text-muted-foreground">{text}</p>
      <p className="mt-4 text-sm">
        <Link to="/media" className="font-medium text-primary hover:underline">
          Media kit and press contact
        </Link>
        {' · '}
        <Link to="/contact" className="font-medium text-primary hover:underline">
          General enquiries
        </Link>
      </p>
    </footer>
  )
}
