import { Heading } from '@/components/atoms/Text/Heading'
import { Text } from '@/components/atoms/Text/Text'
import { Angle } from '@/components/atoms/images/Icons'
import { Image } from '@/components/atoms/images/Image/Image'
import { IMediaImage, TImage } from 'common/interfaces'
import { LinkComponent } from 'common/utils/LinkComponent/LinkComponent'

export interface CardRecreationProps {
  title: string
  carruselImages: { mediaImage: IMediaImage }[]
  image?: TImage
  path: string
}

export const CardRecreation = ({ title, image, carruselImages, path }: CardRecreationProps) => {
  return (
    <LinkComponent
      className='CardRecreation'
      href={path}
      passHref
    >
      <Image
        className='overflow-hidden rounded-se'
        src={carruselImages && carruselImages[0]?.mediaImage?.url}
        alt={carruselImages && carruselImages[0]?.mediaImage?.alt}
        width={268}
        height={190}
        layout='responsive'
        objectFit='cover'
      />
      <Text className='flex items-center justify-between px-8 py-8 bg-white rounded-es'>
        <Heading
          className='mb-0 font-poppins'
          level={6}
        >
          {title}
        </Heading>
        <Angle
          width='18px'
          direction='right'
        />
      </Text>
    </LinkComponent>
  )
}
