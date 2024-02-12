import { Text } from '@/components/atoms/Text/Text'
import { IBehaviors, IBreaker, IMediaImage, ITextBody, TButton } from 'common/interfaces'
import { Button } from '@/components/atoms/Button/Button'
import { ImageResponsive } from '@/components/atoms/images/Image/ImageResponsive'
import { Background, Behaviors } from 'common/utils/Components'
import styles from './Breaker.module.css'

interface BreakerProps extends IBreaker {
  className?: string
  textHtml?: ITextBody
  button?: TButton
  imageTextHtml: { mediaImage2: IMediaImage }
  background?: string
  color?: string
  behaviors?: IBehaviors
}
export const Breaker = ({
  className,
  background,
  color,
  textHtml,
  behaviors,
  button,
  imageTextHtml,
  ...props
}: BreakerProps) => {
  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  return (
    <>
      <section
        className={`${className} ${styles.Breaker} grid place-items-center gap-4 `}
      >
        <div className='max-w-6xl mx-8 md:flex md:items-stretch md:justify-between md:gap-8 md:mx-auto'>
          <div className={`${styles.BreakerBody} mb-8 md:mb-0`}>
            <Text color='white' component='body'>
              {textHtml?.processed}
            </Text>
          </div>
          <div className={`${styles.BreakerImage}`}>
            {imageTextHtml && (
              <Text className='flex flex-col justify-end w-full h-full'>
                <ImageResponsive
                  className='relative bottom-0 left-0'
                  src={imageTextHtml?.mediaImage2?.url}
                  alt={imageTextHtml?.mediaImage2?.alt}
                  width={'100%'}
                  height={'100%'}
                />
              </Text>
            )}
            {button && (
              <Text className='w-full h-full md:grid md:place-items-center'>
                <Button variant='secondary' size='large' href={button?.url?.url}>
                  {button?.url?.title}
                </Button>
              </Text>
            )}
          </div>
        </div>
      </section>
      <style jsx>{`
        section {
          ${Object.entries(style)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n')}
        }
      `}</style>
    </>
  )
}
