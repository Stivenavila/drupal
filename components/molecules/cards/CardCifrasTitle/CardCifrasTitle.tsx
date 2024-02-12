import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { ImageResponsive } from '@/components/atoms/images/Image/ImageResponsive'
import { IColor, IComponenteTitle, TIcon } from 'common/interfaces'
import { LinkComponent } from 'common/utils/LinkComponent/LinkComponent'
import styles from './CardCifrasTitle.module.css'

export type CardCifrasTitleProps = {
  className?: string
  color?: IColor['color']
  modifiers?: string
  icon: TIcon
  url?: string
  title?: string
  componenteTitle?: IComponenteTitle
}

export const CardCifrasTitle = ({
  className,
  icon,
  componenteTitle,
  color,
  title,
  url,
  ...props
}: CardCifrasTitleProps) => {
  return (
    <article
      className={` ${className} card-cifras ${styles['card-cifras']}`}
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
            {componenteTitle?.title && (
              <Heading
                className={`card-cifras__title h2 font-poppins font-bold mb-0`}
                level={5}
                color={color}
              >
                {componenteTitle.title}
              </Heading>
            )}
            {title && (
              <Heading
                className='text-xl font-normal font-poppins'
                level={6}
                color={color}
              >
                {title}
              </Heading>
            )}
            {componenteTitle?.pSubtitle && (
              <Paragraph
                className={`card-cifras__description font-normal`}
                color={color}
              >
                {componenteTitle.pSubtitle}
              </Paragraph>
            )}
          </div>
        </div>
      </LinkComponent>
    </article>
  )
}
