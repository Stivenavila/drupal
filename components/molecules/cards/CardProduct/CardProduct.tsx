import { Heading } from '@/components/atoms/Text/Heading'
import { Text } from '@/components/atoms/Text/Text'
import { IColor, IComponenteTitle, TImage, TLink } from 'common/interfaces'
import { LinkComponent } from 'common/utils/LinkComponent/LinkComponent'
import styles from './CardProduct.module.css'
import { Image } from '@/components/atoms/images/Image/Image'
import { Paragraph } from '@/components/atoms/Text/Paragraph'

export type CardProductProps = {
  className?: string
  color?: IColor['color']
  image: TImage
  tag: string
  componenteTitle: IComponenteTitle
  link: TLink
}

export const CardProduct = ({
  className,
  image,
  componenteTitle,
  link,
  tag,
  ...props
}: CardProductProps) => {
  return (
    <LinkComponent
      className={`${className} ${styles.CardProduct} p-4 rounded`}
      href={link && link.url}
    >
      <Text className={`flex justify-between gap-11`}>
        <Text className='w-1/4'>
          <Image
            className='overflow-hidden rounded-base '
            src={image.mediaImage.url}
            alt={image.mediaImage.alt}
            width={111}
            height={156}
            layout='responsive'
            objectFit='cover'
          />
        </Text>
        <Text className={`flex-grow flex flex-col py-4 justify-between relative`}>
          <Heading
            color='body'
            className={`text-22`}
            level={5}
          >
            {componenteTitle.title}
          </Heading>
          <Paragraph className='text-13'>{componenteTitle.pSubtitle}</Paragraph>
          <Text
            className=' absolute -top-1  right-1 text-26 font-semibold'
            component='span'
          >
            {tag}
          </Text>
        </Text>
      </Text>
    </LinkComponent>
  )
}
