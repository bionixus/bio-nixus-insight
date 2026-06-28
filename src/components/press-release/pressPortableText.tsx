import type { ReactNode } from 'react'

export const pressPortableTextComponents = {
  block: {
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="mt-10 mb-4 font-display text-2xl font-semibold tracking-tight text-primary border-b border-border/60 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="mt-8 mb-3 font-display text-xl font-semibold text-foreground">{children}</h3>
    ),
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote className="my-8 rounded-r-xl border-l-4 border-[#C9A84C] bg-[#06101F]/[0.03] py-4 pl-5 pr-4 text-muted-foreground italic leading-relaxed">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="mb-5 text-[1.0625rem] leading-[1.85] text-foreground/90">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }: { children?: ReactNode }) => <em>{children}</em>,
    link: ({ children, value }: { children?: ReactNode; value?: { href?: string } }) => (
      <a
        href={value?.href}
        className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
}
