import { Heading } from '@/components/atoms/Text/Heading'
import { Text } from '@/components/atoms/Text/Text'
import { Angle } from '@/components/atoms/images/Icons'
import { ImageResponsive } from '@/components/atoms/images/Image/ImageResponsive'
import { ICardItems, IColor } from 'common/interfaces'
import { LinkComponent } from 'common/utils/LinkComponent/LinkComponent'
import styles from './CardIcon.module.css'

export type CardIconProps = {
  className?: string
  variant?: 'vivienda'
  color?: IColor['color']
} & ICardItems

export const CardIcon = ({
  className,
  icon,
  variant,
  title,
  link,
  ...props
}: CardIconProps) => {
  return (
    <LinkComponent href={link && link.url} className={`${className} pt-6 md:pt-0`}>
      <div
        className={` ${styles.CardIcon} ${
          variant ? `${styles[`CardIcon--${variant}`]}` : ''
        }`}
      >
        <Text
          className={`${styles.CardIcon__tag} rounded-base ${
            variant ? `${styles[`Tag__${variant}`]}` : ''
          }`}
        >
          <ImageResponsive
            className='image'
            src={`${icon?.mediaImage1.url}`}
            alt={icon?.mediaImage1?.alt}
            width={50}
            height={50}
            objectFit='contain'
          />
        </Text>

        <Text
          className={` min-h-20 md:min-h-full flex items-center justify-between w-full gap-5 px-3 sm:ml-2 sm:pl-16 pt-10 sm:pr-9 sm:pt-0 ${
            variant ? `${styles[`Content__${variant}`]}` : ''
          }`}
        >
          <Heading
            className={`flex-grow m-0 mb-2 md:mb-0 font-medium text-center md:text-left font-poppins text-11 sm:font-semibold sm:text-xl ${
              variant ? `${styles[`Heading__${variant}`]}` : ''
            }`}
            level={5}
          >
            {title}
          </Heading>

          <Angle
            className='hidden md:block flex-grow-0 flex-shrink-0'
            width='18px'
            direction='right'
          />
        </Text>
      </div>
    </LinkComponent>
  )
}
