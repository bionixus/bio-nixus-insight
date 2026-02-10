import { toHTML } from '@portabletext/to-html'

export function PortableTextToHTML(portableText: any) {
  if (!portableText) return ''

  return toHTML(portableText, {
    components: {
      types: {
        image: ({ value }: any) => {
          return `<img src="${value.url}" alt="${value.alt || ''}" style="max-width: 100%; height: auto; margin: 20px 0;" />`
        },
      },
      marks: {
        link: ({ value, children }: any) => {
          return `<a href="${value.href}" style="color: #0066cc; text-decoration: underline;">${children}</a>`
        },
        strong: ({ children }: any) => `<strong>${children}</strong>`,
        em: ({ children }: any) => `<em>${children}</em>`,
      },
      block: {
        h1: ({ children }: any) =>
          `<h1 style="font-size: 28px; margin: 30px 0 20px 0; color: #222;">${children}</h1>`,
        h2: ({ children }: any) =>
          `<h2 style="font-size: 24px; margin: 25px 0 15px 0; color: #333;">${children}</h2>`,
        h3: ({ children }: any) =>
          `<h3 style="font-size: 20px; margin: 20px 0 10px 0; color: #444;">${children}</h3>`,
        normal: ({ children }: any) =>
          `<p style="margin: 15px 0; line-height: 1.6;">${children}</p>`,
      },
      list: {
        bullet: ({ children }: any) =>
          `<ul style="margin: 15px 0; padding-left: 30px;">${children}</ul>`,
        number: ({ children }: any) =>
          `<ol style="margin: 15px 0; padding-left: 30px;">${children}</ol>`,
      },
      listItem: {
        bullet: ({ children }: any) => `<li style="margin: 5px 0;">${children}</li>`,
        number: ({ children }: any) => `<li style="margin: 5px 0;">${children}</li>`,
      },
    },
  })
}
