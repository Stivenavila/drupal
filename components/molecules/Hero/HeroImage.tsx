import { Image } from '@/components/atoms/images/Image/Image'
import { IMediaImage } from 'common/interfaces'
import { within } from '@storybook/test'

type BannerProps = {
  className?: string
  mediaImage?: IMediaImage
  width?: string
  height?: string
}
export const HeroImage = ({
  className,
  mediaImage,
  width = '1272',
  height = '424',
  ...props
}: BannerProps) => {
  return (
    <article className={`${className} HeroImage w-full h-full`} {...props}>
      <Image
        className='w-full h-full'
        src={mediaImage?.url!}
        alt={mediaImage?.alt}
        width={width}
        height={height}
        layout='responsive'
        objectFit='cover'
      />
    </article>
  )
}
