import { IMediaImage } from 'common/interfaces'
import { Image } from '@/components/atoms/images/Image/Image'

type CardProps = {
  className?: string
  mediaImage: IMediaImage
  width: string
  height: string
}

export const CardImage = ({
  className = '',
  mediaImage,
  width = '159',
  height = '119',
  ...props
}: CardProps) => {
  return (
    <div className={`${className} CardImage`}>
      <Image
        className='image'
        src={mediaImage?.url}
        alt={mediaImage?.alt}
        width={width}
        height={height}
        objectFit='cover'
      />
    </div>
  )
}
