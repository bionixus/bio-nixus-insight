/** Shared helpers for BIO-435 Day 2 article definitions. */

export const PUBLISHED_DAY2 = '2026-06-19T08:00:00.000Z';

export function p(text) {
  return `<p>${text}</p>`;
}

export function h2(id, text) {
  return `<h2 id="${id}">${text}</h2>`;
}

export function ul(items) {
  return `<ul>\n${items.map((i) => `<li>${i}</li>`).join('\n')}\n</ul>`;
}

export function faqHtml(items) {
  return items
    .map(
      (f) =>
        `<details>\n<summary><strong>${f.question}</strong></summary>\n<p>${f.answer}</p>\n</details>`,
    )
    .join('\n\n');
}

export function execSummary(intro, bullets) {
  return [
    {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', marks: [], text: intro }],
    },
    ...bullets.map((text) => ({
      _type: 'block',
      style: 'normal',
      listItem: 'bullet',
      level: 1,
      children: [{ _type: 'span', text }],
    })),
  ];
}

export function buildBody(intro, sections, faq, faqHeading = 'FAQ') {
  return [
    intro,
    ...sections.flatMap((s) => [h2(s.id, s.heading), ...s.blocks]),
    h2('faq', faqHeading),
    faqHtml(faq),
  ].join('\n\n');
}
