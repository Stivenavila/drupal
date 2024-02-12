import { Heading } from '@/components/atoms/Text/Heading'
import { Text } from '@/components/atoms/Text/Text'
import { Angle } from '@/components/atoms/images/Icons'
import { Image } from '@/components/atoms/images/Image/Image'
import { IColor, IMediaImage, TImage } from 'common/interfaces'
import { getDate } from 'common/utils/Components'
import Link from 'next/link'

interface CardProps {
  className?: string
  image?: TImage
  carruselImages?: { mediaImage: IMediaImage }[]
  title: string
  path: string
  color?: IColor['color']
  datesEvent?: { start: { timestamp: number } }
}

export const CardDate = ({
  datesEvent,
  image,
  title,
  path,
  className,
  carruselImages,
  color = 'white',
}: CardProps) => {
  let day = {}
  if (datesEvent) {
    ;({ day } = getDate(datesEvent?.start?.timestamp))
  }
  return (
    <div className={`${className}`}>
      <Text className='relative'>
        {datesEvent && (
          <Text
            color={color}
            className='absolute grid p-0 m-0 leading-none rounded-full place-items-center w-[60px] h-[60px] -right-2 top-0 h2 z-1 bg-celeste'
          >
            {day}
          </Text>
        )}
        <Image
          className='overflow-hidden rounded'
          src={
            (image && image.mediaImage.url) ||
            (carruselImages && carruselImages[0]?.mediaImage?.url) ||
            ''
          }
          alt={
            (image && image.mediaImage.alt) ||
            (carruselImages && carruselImages[0]?.mediaImage?.alt)
          }
          width={485}
          height={292}
          layout='responsive'
          objectFit='cover'
        />
      </Text>

      <Text className='flex items-center justify-between pr-5 mt-5'>
        <Heading className='m-0 h2' level={5} color={color}>
          {title}
        </Heading>
        <Link href={path} passHref>
          <a>
            <Angle width='20px' direction='right' fill={`var(--${color})`} />
          </a>
        </Link>
      </Text>
    </div>
  )
}
