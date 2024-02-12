import { Heading } from '@/components/atoms/Text/Heading'
import { Text } from '@/components/atoms/Text/Text'
import { ImageResponsive } from '@/components/atoms/images/Image/ImageResponsive'
import { ICardItems, IColor } from 'common/interfaces'
import styles from './CardIcon.module.css'

export type CardServicesProps = {
  className?: string
  variant?: 'vivienda'
  color?: IColor['color']
} & ICardItems

export const CardServicesvertical = ({
  className,
  icon,
  variant,
  title,
  link,
  ...props
}: CardServicesProps) => {
  return (
    <div className={`${className} flex items-center gap-5`}>
      <ImageResponsive
        className='image'
        src={`${icon?.mediaImage1.url}`}
        alt={icon?.mediaImage1?.alt}
        width={50}
        height={50}
        objectFit='contain'
      />
      <Heading
        color='body'
        className={`font-poppins max-w-32 m-0`}
        level={6}
      >
        {title}
      </Heading>
    </div>
  )
}
