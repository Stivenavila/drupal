import { Heading } from '@/components/atoms/Text/Heading'
import { Image } from '@/components/atoms/images/Image/Image'
import { ICard, IComponenteTitle, TImage } from 'common/interfaces'
import { LinkComponent } from 'common/utils/LinkComponent/LinkComponent'
import styles from './CardConvenios.module.css'

type CardProps = {
  className?: string
  title: string
  image: TImage
  link: { url: { url: string } }
}

export const CardConvenios = ({ className, image, link, title, ...props }: CardProps) => {
  return (
    <LinkComponent
      className={`${className} CardConvenios`}
      href={link.url.url}
      passHref
      {...props}
    >
      <div className={`${styles.CardConvenios} `}>
        <Image
          className='overflow-hidden rounded-es-base rounded-se-base'
          src={image?.mediaImage?.url}
          alt={image?.mediaImage?.alt}
          width={160}
          height={236}
          layout='responsive'
          objectFit='cover'
        />
        <Heading
          className='pt-4 pb-4 text-base font-normal leading-4 text-center font-poppins'
          level={5}
          color='white'
        >
          {title}
        </Heading>
      </div>
    </LinkComponent>
  )
}
