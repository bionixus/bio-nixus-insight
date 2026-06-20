import type { ReactNode } from 'react';

type LongFormProseProps = {
  children: ReactNode;
};

/** Wrapper for thin-page expansion copy — keeps typography consistent across P0 service landers. */
export function LongFormProse({ children }: LongFormProseProps) {
  return (
    <section className="section-padding py-10" id="in-depth-guide">
      <div className="container-wide max-w-5xl mx-auto space-y-10">{children}</div>
    </section>
  );
}

type LongFormSectionProps = {
  heading: string;
  children: ReactNode;
};

export function LongFormSection({ heading, children }: LongFormSectionProps) {
  return (
    <div>
      <h2 className="text-2xl font-display font-semibold text-foreground mb-4">{heading}</h2>
      {children}
    </div>
  );
}

export function LongFormParagraph({ children }: { children: ReactNode }) {
  return <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>;
}

export function LongFormSubheading({ children }: { children: ReactNode }) {
  return <h3 className="text-xl font-semibold text-foreground mb-3">{children}</h3>;
}

export function LongFormList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-4">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
