import { Heading } from '@/components/atoms/Text/Heading'
import { Button } from '@/components/atoms/Button/Button'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { IComponenteTitle, TButton, TChildren, TImage } from 'common/interfaces'
import styles from './CardBooking.module.css'
import { Image } from '@/components/atoms/images/Image/Image'

export interface CardBookingProps {
  className?: string
  title: string
  items: {
    componenteTitle: IComponenteTitle
  }[]
  image: TImage
  link: { url: { url: string } }
  body: TChildren | string
  details: string
  stars: TChildren | string
  button: TButton
  price: number
}

export const CardBooking = ({
  className,
  details,
  items,
  price,
  button,
  title,
  stars,
  body,
  image,
  ...rest
}: CardBookingProps) => {
  return (
    <div
      className={`${className} ${styles.CardBooking} CardColegio rounded overflow-hidden bg-white block`}
      {...rest}
    >
      <Heading className={`${styles.Heading} pb-4 mb-4`} level={3}>
        {title}
      </Heading>
      <Text className='mb-4 font-normal text-xs' color='primary'>
        <span className='font-semibold text-base'>${price.toLocaleString()} COP</span>{' '}
        Noche aprox.
        <span className='block'>Valor por noche varia segun la temporada</span>
      </Text>
      <Text className='mb-4 font-light' color='primary' component='body'>
        {stars}
      </Text>
      <Image
        className='mb-4 overflow-hidden rounded-base'
        src={image?.mediaImage?.url}
        alt={image?.mediaImage?.alt}
        width={400}
        height={120}
        layout='responsive'
        objectFit='cover'
      />
      <Text className='mb-4 font-normal text-xs' color='primary' component='body'>
        Incluye impuestos, tasas y cargos, excepto el IVA del alojamiento
      </Text>
      <Text className='mb-4 font-normal text-center'>
        <Button variant='secondary' size='large' href={button.url.url}>
          {button.url.title}
        </Button>
      </Text>
      <Paragraph color='primary' className='text-center font-normal text-xs'>
        No se hará ningún cargo por el momento
      </Paragraph>
    </div>
  )
}
