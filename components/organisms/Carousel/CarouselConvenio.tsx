import { Button } from '@/components/atoms/Button/Button'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { CardConvenios } from '@/components/molecules/cards/CardConvenios/CardConvenios'
import { Options } from '@splidejs/react-splide'
import { IBehaviors, IColor, IComponenteTitle, TButton } from 'common/interfaces'
import { Behaviors } from 'common/utils/Components'
import React from 'react'
import Carousel from './Carousel'
import styles from './Carousel.module.css'

const options: Options = {
  type: 'slide',
  pagination: false,
  gap: '4rem',
  autoplay: true,
  perPage: 5,
  breakpoints: {
    998: {
      gap: '1.2rem',
      arrows: false,
      perPage: 1,
      padding: { right: '48%' },
    },
  },
}

interface CarouselProps<T> {
  className?: string
  itemsCardImage: T[]
  componenteTitle: IComponenteTitle
  button: TButton
  data?: Partial<T>
  behaviors?: IBehaviors
  background?: string
  color?: IColor['color']
  renderItem?: React.ComponentType<any>
}

export const CarouselConvenio = <T,>({
  background,
  behaviors,
  color = 'primary',
  itemsCardImage,
  componenteTitle,
  button,
  className = '',
  renderItem = CardConvenios,
  ...rest
}: CarouselProps<T>) => {
  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  return (
    <section className={`CarouselConvenio ${className} ${styles.CarouselConvenio}`}>
      <div className='pt-16 pl-8 md:pt-24 md:pl-0'>
        <Text className='md:max-w-[80%] mx-auto pr-8 md:pr-0'>
          <Heading className='font-medium' color='white' level={2}>
            {componenteTitle?.title}
          </Heading>
          <Paragraph className='max-w-screen-sm md:pr-12 mb-11' color='white'>
            {componenteTitle?.pSubtitle}
          </Paragraph>
        </Text>
        <Carousel
          className='CarouselConvenio__carousel'
          items={itemsCardImage}
          renderItem={renderItem}
          options={options}
          size='w-80'
          {...rest}
        />
        <Text className='flex justify-center pr-8 pb-14 mt-14 md:pr-0'>
          <Button
            className='mx-auto border !text-green md:!text-white md:border-none md:bg-green'
            size='large'
            variant='primary'
            href={button?.url?.url}
          >
            {button?.url?.title}
          </Button>
        </Text>
      </div>
      <style jsx>{`
        .CarouselConvenio {
          ${Object.entries(style)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n')}
        }
        @media (max-width: 998px) {
          .CarouselConvenio {
            background: ${color ? `var(--${color})` : 'none'};
          }
        }
      `}</style>
    </section>
  )
}
