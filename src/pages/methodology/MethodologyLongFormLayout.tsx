import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';
import type { Language } from '@/lib/i18n';
import { methodologyLocalizedPath as loc } from './methodologyLocalizedPath';

export type MethodologyFaqItem = { question: string; answer: string };

type TitledBody = { title: string; body: string };

export type MethodologyLongFormCopy = {
  faqTitle: string;
  faq: readonly MethodologyFaqItem[];
  theatre: {
    eyebrow: string;
    h2: string;
    leadBefore: string;
    healthcareLink: string;
    leadMid: string;
    industryLink: string;
    leadAfter: string;
    caption: string;
    controlCol: string;
    healthcareCol: string;
    consumerCol: string;
    rows: readonly { cut: string; healthcare: string; consumer: string }[];
  };
  design: {
    h2: string;
    lead: string;
    quantitative: { title: string; body: string; link: string };
    qualitative: { title: string; body: string; link: string };
    mixed: { title: string; body: string };
  };
  sampling: {
    h2: string;
    lead: string;
    healthcareKicker: string;
    panelTitle: string;
    panel: [TitledBody, TitledBody, TitledBody, TitledBody];
    consumerKicker: string;
    channelTitle: string;
    namedTitle: string;
    namedBefore: string;
    nielsen: string;
    namedMid: string;
    gfk: string;
    namedMid2: string;
    accountLink: string;
    namedAfter: string;
    shopper: TitledBody;
    mystery: TitledBody;
    recontact: TitledBody;
    closing: string;
  };
  field: {
    h2: string;
    p1: string;
    p2: string;
    p3: string;
    p4Before: string;
    clinicalLink: string;
    p4After: string;
  };
  validation: {
    h2: string;
    p1: string;
    p2: string;
    p3: string;
    p4Before: string;
    accessLink: string;
    p4After: string;
  };
  ethics: { h2: string; p1: string; p2: string; p3: string; p4: string };
  reporting: {
    h2: string;
    p1: string;
    p2: string;
    p3Before: string;
    intelLink: string;
    p3After: string;
    p4Before: string;
    kolLink: string;
    p4After: string;
  };
};

const goldLink = 'font-medium text-[#C9A84C] underline-offset-4 hover:underline';

export function MethodologyLongFormLayout({
  lang,
  copy,
}: {
  lang: Language;
  copy: MethodologyLongFormCopy;
}): JSX.Element {
  const p = (path: string) => loc(lang, path);
  const { theatre: th, design, sampling: sm, field, validation: val, ethics, reporting } = copy;

  return (
    <>
      <section className="premium-home-ivory section-padding py-16 md:py-20" id="two-theatres" aria-labelledby="two-theatres-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <PremiumEyebrow>{th.eyebrow}</PremiumEyebrow>
            <h2
              id="two-theatres-heading"
              className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
            >
              {th.h2}
            </h2>
            <p className="mt-5 max-w-3xl font-light leading-relaxed text-[#7A7267]">
              {th.leadBefore}{' '}
              <Link to={p('/healthcare-market-research')} className={goldLink}>
                {th.healthcareLink}
              </Link>{' '}
              {th.leadMid}{' '}
              <Link to={p('/bionixus-industries')} className={goldLink}>
                {th.industryLink}
              </Link>{' '}
              {th.leadAfter}
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[#EDE9E3] bg-[#FFFEFB] shadow-[0_24px_80px_rgba(6,16,31,0.05)]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">{th.caption}</caption>
              <thead>
                <tr className="bg-[#06101F] text-[#FFFEFB]">
                  <th scope="col" className="px-5 py-4 font-medium">
                    {th.controlCol}
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium text-white/70">
                    {th.healthcareCol}
                  </th>
                  <th scope="col" className="border-l border-[#C9A84C]/30 px-5 py-4 font-medium text-[#C9A84C]">
                    {th.consumerCol}
                  </th>
                </tr>
              </thead>
              <tbody>
                {th.rows.map((row, index) => (
                  <tr key={row.cut} className={index % 2 === 0 ? 'bg-[#FFFEFB]' : 'bg-[#F4F2ED]/60'}>
                    <th scope="row" className="px-5 py-4 align-top font-medium text-[#0C1B33]">
                      {row.cut}
                    </th>
                    <td className="px-5 py-4 align-top font-light leading-relaxed text-[#7A7267]">{row.healthcare}</td>
                    <td className="border-l border-[#C9A84C]/15 px-5 py-4 align-top font-light leading-relaxed text-[#0C1B33]">
                      {row.consumer}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="premium-home-cream section-padding py-16 md:py-20" id="research-design" aria-labelledby="research-design-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow tone="teal">01</PremiumEyebrow>
          <h2
            id="research-design-heading"
            className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl"
          >
            {design.h2}
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">{design.lead}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="premium-card">
              <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">{design.quantitative.title}</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">
                {design.quantitative.body}{' '}
                <Link to={p('/services/quantitative-research')} className={goldLink}>
                  {design.quantitative.link}
                </Link>
                .
              </p>
            </article>
            <article className="premium-card">
              <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">{design.qualitative.title}</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">
                {design.qualitative.body}{' '}
                <Link to={p('/services/qualitative-research')} className={goldLink}>
                  {design.qualitative.link}
                </Link>
                .
              </p>
            </article>
            <article className="premium-card">
              <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">{design.mixed.title}</h3>
              <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">{design.mixed.body}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" id="sampling-frameworks" aria-labelledby="sampling-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow>02</PremiumEyebrow>
          <h2 id="sampling-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            {sm.h2}
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">{sm.lead}</p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="premium-card">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">{sm.healthcareKicker}</p>
              <h3 className="mt-3 mb-4 font-display text-xl font-medium text-[#0C1B33]">{sm.panelTitle}</h3>
              <div className="space-y-4 text-[15px] font-light leading-relaxed text-[#7A7267]">
                {sm.panel.map((item) => (
                  <p key={item.title}>
                    <strong className="font-medium text-[#0C1B33]">{item.title}</strong> {item.body}
                  </p>
                ))}
              </div>
            </div>
            <div className="premium-card">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#0EA5A0]">{sm.consumerKicker}</p>
              <h3 className="mt-3 mb-4 font-display text-xl font-medium text-[#0C1B33]">{sm.channelTitle}</h3>
              <div className="space-y-4 text-[15px] font-light leading-relaxed text-[#7A7267]">
                <p>
                  <strong className="font-medium text-[#0C1B33]">{sm.namedTitle}</strong> {sm.namedBefore}{' '}
                  <Link to={p('/nielsen-alternative')} className={goldLink}>
                    {sm.nielsen}
                  </Link>{' '}
                  {sm.namedMid}{' '}
                  <Link to={p('/gfk-alternative-egypt')} className={goldLink}>
                    {sm.gfk}
                  </Link>{' '}
                  {sm.namedMid2}{' '}
                  <Link to={p('/account-level-market-research')} className={goldLink}>
                    {sm.accountLink}
                  </Link>
                  {sm.namedAfter}
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">{sm.shopper.title}</strong> {sm.shopper.body}
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">{sm.mystery.title}</strong> {sm.mystery.body}
                </p>
                <p>
                  <strong className="font-medium text-[#0C1B33]">{sm.recontact.title}</strong> {sm.recontact.body}
                </p>
              </div>
            </div>
          </div>
          <p className="mt-8 max-w-3xl font-light leading-relaxed text-[#7A7267]">{sm.closing}</p>
        </div>
      </section>

      <section className="premium-home-cream section-padding py-16 md:py-20" id="fieldwork-governance" aria-labelledby="fieldwork-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow tone="teal">03</PremiumEyebrow>
          <h2 id="fieldwork-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            {field.h2}
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">{field.p1}</p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">{field.p2}</p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">{field.p3}</p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">
            {field.p4Before}{' '}
            <Link to={p('/services/clinical-trial-support')} className={goldLink}>
              {field.clinicalLink}
            </Link>{' '}
            {field.p4After}
          </p>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" id="data-validation" aria-labelledby="validation-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow>04</PremiumEyebrow>
          <h2 id="validation-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            {val.h2}
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">{val.p1}</p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">{val.p2}</p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">{val.p3}</p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">
            {val.p4Before}{' '}
            <Link to={p('/services/market-access')} className={goldLink}>
              {val.accessLink}
            </Link>
            {val.p4After}
          </p>
        </div>
      </section>

      <section className="premium-home-cream section-padding py-16 md:py-20" id="ethics-compliance" aria-labelledby="ethics-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow tone="teal">05</PremiumEyebrow>
          <h2 id="ethics-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            {ethics.h2}
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">{ethics.p1}</p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">{ethics.p2}</p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">{ethics.p3}</p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">{ethics.p4}</p>
        </div>
      </section>

      <section className="premium-home-ivory section-padding py-16 md:py-20" id="reporting-standards" aria-labelledby="reporting-heading">
        <div className="container-wide mx-auto max-w-6xl">
          <PremiumEyebrow>06</PremiumEyebrow>
          <h2 id="reporting-heading" className="mb-6 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
            {reporting.h2}
          </h2>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">{reporting.p1}</p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">{reporting.p2}</p>
          <p className="mb-4 max-w-3xl font-light leading-relaxed text-[#7A7267]">
            {reporting.p3Before}{' '}
            <Link to={p('/services/competitive-intelligence')} className={goldLink}>
              {reporting.intelLink}
            </Link>{' '}
            {reporting.p3After}
          </p>
          <p className="max-w-3xl font-light leading-relaxed text-[#7A7267]">
            {reporting.p4Before}{' '}
            <Link to={p('/services/kol-stakeholder-mapping')} className={goldLink}>
              {reporting.kolLink}
            </Link>{' '}
            {reporting.p4After}
          </p>
        </div>
      </section>

      <div className="premium-home-cream">
        <FAQSection
          premium
          title={copy.faqTitle}
          items={[...copy.faq]}
          className="section-padding py-16 md:py-20"
        />
      </div>
    </>
  );
}
