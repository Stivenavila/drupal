import { Button } from '@/components/atoms/Button/Button'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Image } from '@/components/atoms/images/Image/Image'
import { IHero } from 'common/interfaces'

type BannerProps = {
  className?: string
} & IHero
export const HeroBanner = ({
  className,
  componenteTitle,
  button,
  preTitle,
  image,
  ...props
}: BannerProps) => {
  return (
    <article
      className={`${className} flex flex-col gap-10 HeroBanner p-7 md:p-0 md:gap-0 md:flex-row md:justify-between md:items-center`}
      {...props}
    >
      <div className='grid flex-1 place-items-center'>
        <div className='HeroBanner__content max-w-[458px]'>
          <Heading className='font-normal mb-2' level={5}>
            {preTitle}
          </Heading>
          <Heading level={1}>{componenteTitle.title}</Heading>
          <Paragraph color='primary' className='text-base mt-0 md:mt-7'>
            {componenteTitle.pSubtitle}
          </Paragraph>
          {button && button?.url && (
            <Button
              className=' mt-8 md:mt-10'
              variant='secondary'
              size='large'
              href={button?.url?.url}
            >
              {button?.url?.title}
            </Button>
          )}
        </div>
      </div>
      <div className='flex-1 relative'>
        <Image
          src={image.mediaImage.url}
          alt={image.mediaImage.alt}
          width={746}
          height={628}
          layout='responsive'
          objectFit='cover'
        />
      </div>
    </article>
  )
}
