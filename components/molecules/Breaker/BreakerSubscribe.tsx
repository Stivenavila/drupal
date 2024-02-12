import { Button } from '@/components/atoms/Button/Button'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { Image } from '@/components/atoms/images/Image/Image'
import { IBreaker } from 'common/interfaces'
import styles from './BreakerSubscribe.module.css'

type BreakerProps = {
  className?: string
} & IBreaker

export const BreakerSubscribe = ({
  className,
  componenteTitle,
  componentButtons,
  image,
  imageMobile,
}: BreakerProps) => {
  return (
    <section className={`${className} flex flex-col md:flex-row md:justify-between`}>
      <div className={`flex-1 ${styles.BreakerSubscribe__image}`}>
        <Image
          className='hidden md:block'
          src={image && image?.mediaImage?.url}
          alt={image && image?.mediaImage?.alt}
          width={732}
          height={453}
          layout='responsive'
          objectFit='cover'
        />
        <Image
          className='block md:hidden'
          src={imageMobile?.mediaImage?.url}
          alt={imageMobile?.mediaImage?.alt}
          width={382}
          height={476}
          layout='responsive'
          objectFit='cover'
        />
      </div>
      <div className={`${styles.BreakerSubscribe__container} bg-white`}>
        <Text className='pt-14 md:pt-8 '>
          <Text className='px-7 md:px-[38px]'>
            <Heading level={2} underline>
              {componenteTitle?.title}
            </Heading>
            <Paragraph className='mb-5 text-base font-light text-primary mt-7'>
              {componenteTitle?.pSubtitle}
            </Paragraph>
          </Text>
          <Text className='px-7'>
            {componentButtons?.buttons?.map((button, index) => (
              <Button
                key={`${index}-${button?.url?.title}`}
                className='mt-5'
                variant='primary'
                size='large'
                href={button?.url?.url}
              >
                {button?.url?.title}
              </Button>
            ))}
          </Text>
        </Text>
      </div>
    </section>
  )
}
