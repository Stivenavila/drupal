import { IBehaviors, IColor, IComponenteTitle, TButton } from 'common/interfaces'
import { Options } from '@splidejs/react-splide'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Behaviors } from 'common/utils/Components'
import Carousel from '../Carousel'
import {
  CardAccommodation,
  CardAccommodationProps,
} from '@/components/molecules/cards/CardAccommodation/CardAccommodation'
import { Button } from '@/components/atoms/Button/Button'
import { Text } from '@/components/atoms/Text/Text'

export interface CarouselAccommodationProps {
  slideLodging: { results?: CardAccommodationProps[] }
  behaviors?: IBehaviors
  componenteTitle: IComponenteTitle
  button?: TButton
}
type CarouselProps<T> = {
  className?: string
  data?: Partial<T>
  color?: IColor['color']
  renderItem?: React.ComponentType<any>
} & CarouselAccommodationProps

const options: Options = {
  type: 'loop',
  pagination: false,
  autoplay: true,
  gap: '2rem',
  autoHeight: true,
  padding: '7rem',
  breakpoints: {
    998: {
      pagination: true,
      arrows: false,
    },
  },
}

export const CarouselAccommodation = <T,>({
  color = 'white',
  slideLodging,
  componenteTitle,
  behaviors,
  className,
  button,
  renderItem = CardAccommodation,
  ...rest
}: CarouselProps<T>) => {
  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  return (
    <>
      <section className={`BannerPrincipal ${className} md:pt-20 md:pb-28 `}>
        <Heading className='w-4/5 mx-auto mb-2' level={2} color='primary'>
          {componenteTitle.title}
        </Heading>
        <Paragraph color='primary' className='w-4/5 mx-auto mb-16'>
          {componenteTitle.pSubtitle}
        </Paragraph>
        <Carousel
          size='w-80'
          items={slideLodging?.results}
          renderItem={renderItem}
          options={options}
          {...rest}
        />
        {button && (
          <Text className='text-center'>
            <Button
              className='mt-16'
              outline
              variant='secondary'
              color='green'
              size='large'
              href={button?.url?.url}
            >
              {button?.url?.title}
            </Button>
          </Text>
        )}
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
