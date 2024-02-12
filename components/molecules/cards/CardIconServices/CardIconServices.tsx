import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Image } from '@/components/atoms/images/Image/Image'
import { ImageResponsive } from '@/components/atoms/images/Image/ImageResponsive'
import { ICardItems } from 'common/interfaces'
type CardProps = {
  className?: string
} & ICardItems

export const CardIconServices = ({ title, icon }: CardProps) => {
  return (
    <div className='flex items-center gap-5'>
      <Image
        src={icon?.mediaImage1?.url}
        alt={icon?.mediaImage1?.alt}
        width={45}
        height={45}
      />
      <Paragraph>{title}</Paragraph>
    </div>
  )
}
