import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import { pressPortableTextComponents } from '@/components/press-release/pressPortableText'

type PressReleaseBodyProps = {
  body: PortableTextBlock[]
}

export function PressReleaseBody({ body }: PressReleaseBodyProps) {
  if (!body?.length) return null
  return (
    <div className="press-prose max-w-3xl">
      <PortableText value={body} components={pressPortableTextComponents} />
    </div>
  )
}
