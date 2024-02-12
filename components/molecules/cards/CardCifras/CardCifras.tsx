import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { ImageResponsive } from '@/components/atoms/images/Image/ImageResponsive'
import { ICifras, IColor } from 'common/interfaces'
import { LinkComponent } from 'common/utils/LinkComponent/LinkComponent'
import styles from './CardCifras.module.css'

type CardCifrasProps = {
  className?: string
  color?: IColor['color']
  modifiers?: string
  variant: 'secondary'
} & ICifras

export const CardCifras = ({
  className,
  icon,
  title,
  url,
  variant,
  eyebrow,
  pSubtitle,
  modifiers,
  color,
  ...props
}: CardCifrasProps) => {
  return (
    <article
      className={` ${className} card-cifras py-6 md:py-0 ${styles['card-cifras']} ${
        modifiers ? styles[`card-cifras--${modifiers}`] : ''
      }`}
      {...props}
    >
      <LinkComponent
        href={url}
        passHref
      >
        <div className={`card-cifras__link flex gap-5 items-center`}>
          <div className={`card-cifras__image ${styles['card-cifras__image']}`}>
            <ImageResponsive
              className='image'
              src={`${icon?.mediaImage1.url}`}
              alt={icon?.mediaImage1?.alt}
              width={100}
              height={100}
              layout='fixed'
              objectFit='contain'
            />
          </div>
          <div className={`card-cifras__right`}>
            <Heading
              className={`card-cifras__title h2 font-poppins font-bold mb-0`}
              level={5}
              color={color}
            >
              {variant == 'secondary' ? title : eyebrow}
            </Heading>
            {(title || (variant === 'secondary' && pSubtitle)) && (
              <Paragraph
                className={`card-cifras__description font-normal`}
                color={color}
              >
                {variant === 'secondary' ? pSubtitle : title}
              </Paragraph>
            )}
          </div>
        </div>
      </LinkComponent>
    </article>
  )
}
