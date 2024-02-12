import { Button } from '@/components/atoms/Button/Button'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { Angle, Subsidio } from '@/components/atoms/images/Icons'
import { Image } from '@/components/atoms/images/Image/Image'
import { ImageResponsive } from '@/components/atoms/images/Image/ImageResponsive'
import { ITextBody, TButton, TImage } from 'common/interfaces'
import styles from './CardVivienda.module.css'
import { TabsInfoProps } from '../../Tabs/TabsInfo'

export interface CardViviendaProps {
  className?: string
  title: string
  livingPlaceLogo: TImage
  link: { url: { url: string } }
  details: string
  button: TButton
  path: string
  livingPlaceSubtitle: ITextBody
  livingPlacePrice: {
    price: number
    subsidyApplies: boolean
  }
  tabsInfo: TabsInfoProps
}

export const CardVivienda = ({
  className,
  details,
  title,
  button,
  path,
  tabsInfo,
  livingPlacePrice,
  livingPlaceSubtitle,
  livingPlaceLogo,
  ...rest
}: CardViviendaProps) => {
  return (
    <div
      className={`${className} ${styles.CardAccommodation} CardAccommodation rounded overflow-hidden bg-white block text-center md:text-left`}
      {...rest}
    >
      <Text className={`${styles.image} mb-8 md:mb-0`}>
        <Image
          className='overflow-hidden rounded'
          src={livingPlaceLogo?.mediaImage?.url}
          alt={livingPlaceLogo?.mediaImage?.alt}
          width={277}
          height={281}
          layout='responsive'
          objectFit='cover'
        />
      </Text>
      <div className={`${styles.content}`}>
        <Text className='mb-4 md:flex md:gap-2'>
          <Heading color='body' className={`${styles.Heading} m-0`} level={2}>
            {title}
          </Heading>
          <Text component='body' className='m-0'>
            {livingPlaceSubtitle.processed}
          </Text>
        </Text>
        <Text className='mb-4 font-normal text-10'>
          Proyecto de
          <br /> apartamentos desde:{' '}
          <span className='font-semibold'>${livingPlacePrice.price}</span>
        </Text>
        <div className='hidden md:flex md:gap-3'>
          {tabsInfo?.itemsInfo &&
            tabsInfo.itemsInfo[0]?.items.map((item, index) => (
              <Text key={index} className='flex flex-col items-center'>
                <Heading color='body' className='mb-1 text-10 font-poppins' level={6}>
                  {item.title}
                </Heading>
                <Text className='flex items-center gap-1'>
                  <Paragraph className='text-xs font-semibold'>
                    {item.description}
                  </Paragraph>
                  <ImageResponsive
                    className='image'
                    src={`${item?.icon?.mediaImage1.url}`}
                    alt={item?.icon?.mediaImage1?.alt}
                    width={15}
                    height={15}
                    objectFit='contain'
                  />
                </Text>
              </Text>
            ))}
        </div>
        <Text className='w-full md:w-max md:absolute md:right-0 md:bottom-5'>
          <Subsidio className='w-full' />
        </Text>
        <Text className='text-center mt-7 md:text-left'>
          <Button className='gap-2 font-semibold font-poppins text-primary' href={path}>
            <span className='underline'>Más información</span>
            <Angle width='9' direction='right' />
          </Button>
        </Text>
      </div>
    </div>
  )
}
