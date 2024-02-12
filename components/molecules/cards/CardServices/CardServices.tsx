import { Heading } from '@/components/atoms/Text/Heading'
import { Text } from '@/components/atoms/Text/Text'
import { Angle } from '@/components/atoms/images/Icons'
import { ImageResponsive } from '@/components/atoms/images/Image/ImageResponsive'
import { IColor, TIcon } from 'common/interfaces'
import { LinkComponent } from 'common/utils/LinkComponent/LinkComponent'
import styles from './CardIcon.module.css'

export type CardServicesProps = {
  className?: string
  color?: IColor['color']
  title: string
  icon?: TIcon
  direction?: 'vertical' | 'horizontal'
}

export const CardServices = ({
  className,
  icon,
  title,
  direction,
  ...props
}: CardServicesProps) => {
  return (
    <div
      className={`${className} flex  ${
        direction === 'horizontal'
          ? 'flex-row-reverse justify-end gap-5'
          : 'flex-col items-center justify-center max-w-32'
      } `}
    >
      <Heading
        color='body'
        className={`font-poppins font-normal ${
          direction === 'horizontal'
            ? 'text-base max-w-24'
            : 'text-center text-10 max-w-20'
        }  min-h-10 grid items-center`}
        level={6}
      >
        {title}
      </Heading>
      <Text>
        <ImageResponsive
          className='image'
          src={`${icon?.mediaImage1.url}`}
          alt={icon?.mediaImage1?.alt}
          width={50}
          height={50}
          objectFit='contain'
        />
      </Text>
    </div>
  )
}
