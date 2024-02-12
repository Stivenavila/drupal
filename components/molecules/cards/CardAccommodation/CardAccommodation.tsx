import { Button } from '@/components/atoms/Button/Button'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { Angle, Dogs, Location } from '@/components/atoms/images/Icons'
import { Image } from '@/components/atoms/images/Image/Image'
import { IMediaImage, TButton, TIcon, TImage } from 'common/interfaces'
import styles from './CardAccommodation.module.css'
import { CardServices } from '../CardServices/CardServices'

export interface CardAccommodationProps {
  className?: string
  title: string
  subTitle: string
  carruselImages: { mediaImage: IMediaImage }[]
  petFriendly: boolean
  seasonalDiscount: boolean
  image: TImage
  path: string
  details: string
  button: TButton
  lodgingServices: {
    itemsIcons: {
      title: string
      icon?: TIcon
    }[]
  }
}

export const CardAccommodation = ({
  className,
  details,
  title,
  seasonalDiscount,
  petFriendly,
  subTitle,
  button,
  lodgingServices,
  path,
  carruselImages,
  image,
  ...rest
}: CardAccommodationProps) => {
  return (
    <div
      className={`${className} ${styles.CardAccommodation} CardAccommodation rounded overflow-hidden bg-white block`}
      {...rest}
    >
      <div className={`${styles.container}`}>
        <Text className={`${styles.image}`}>
          <Image
            className='overflow-hidden rounded-ss rounded-es'
            src={
              (carruselImages && carruselImages[0].mediaImage.url) ||
              image?.mediaImage?.url
            }
            alt={
              (carruselImages && carruselImages[0].mediaImage.alt) ||
              image?.mediaImage?.alt
            }
            width={277}
            height={281}
            layout='responsive'
            objectFit='cover'
          />
        </Text>
        <div className={`${styles.content}`}>
          <Text className='flex items-center gap-2 mb-4'>
            <Heading color='body' className={`${styles.Heading} m-0`} level={2}>
              {title}
            </Heading>
          </Text>
          <Text className='flex items-center gap-1'>
            <Location />
            <Paragraph className='m-0 font-light'>{subTitle}</Paragraph>
          </Text>
          <Text className='flex flex-wrap gap-3 mb-8'>
            {lodgingServices?.itemsIcons?.map((item, index) => (
              <Text key={index} className='flex flex-col items-center'>
                <CardServices {...item} />
              </Text>
            ))}
          </Text>
          <Text className='flex items-center justify-between'>
            {petFriendly && <Dogs className='-ml-20' />}
            <Text className='mt-7'>
              <Button
                className='gap-2 font-semibold font-poppins text-primary'
                href={(button && button?.url?.url) || path}
              >
                <span className='underline'>
                  {(button && button?.url?.title) || 'Más información'}
                </span>
                <Angle width='9' direction='right' />
              </Button>
            </Text>
          </Text>
        </div>
      </div>
      {seasonalDiscount && (
        <div className={`${styles.tag}`}>
          <Text className={`${styles.element} py-1 mt-5 text-white bg-green text-11`}>
            <span>DESCUENTO</span>
            <span className='block'> DE TEMPORADA</span>
          </Text>
        </div>
      )}
    </div>
  )
}
