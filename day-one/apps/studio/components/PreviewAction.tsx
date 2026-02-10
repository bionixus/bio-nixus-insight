import { EyeOpenIcon } from '@sanity/icons'

export function PreviewAction(props: any) {
  const { id } = props

  if (!id) return null

  const handleClick = () => {
    const previewUrl = `${process.env.SANITY_STUDIO_PREVIEW_URL || 'https://bionixus.com'}/api/preview-newsletter?id=${id}`
    window.open(previewUrl, '_blank', 'width=800,height=900')
  }

  return {
    label: 'Preview',
    icon: EyeOpenIcon,
    onHandle: handleClick,
  }
}
