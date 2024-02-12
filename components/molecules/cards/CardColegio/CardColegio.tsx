import { Heading } from '@/components/atoms/Text/Heading'
import { Image } from '@/components/atoms/images/Image/Image'
import { IMediaImage, TImage } from 'common/interfaces'
import { LinkComponent } from 'common/utils/LinkComponent/LinkComponent'
import styles from './CardColegio.module.css'

export interface CardColegioProps {
  className?: string
  title: string
  image: TImage
  carruselImages: { mediaImage: IMediaImage }[]
  link: { url: { url: string } }
}
export const CardColegio = ({
  className,
  title,
  carruselImages,
  link,
  image,
  ...rest
}: CardColegioProps) => {
  return (
    <LinkComponent
      className={`${className} ${styles.CardColegio} CardColegio rounded overflow-hidden bg-white-text`}
      href={link?.url?.url}
      passHref
      {...rest}
    >
      <Image
        className='overflow-hidden rounded'
        src={
          (carruselImages && carruselImages[0].mediaImage.url) || image?.mediaImage?.url
        }
        alt={
          (carruselImages && carruselImages[0].mediaImage.alt) || image?.mediaImage?.alt
        }
        width={277}
        height={281}
        layout='responsive'
        objectFit='cover'
      />
      <Heading className={`${styles.Heading} pb-4 font-medium text-center`} level={3}>
        {title}
      </Heading>
    </LinkComponent>
  )
}
