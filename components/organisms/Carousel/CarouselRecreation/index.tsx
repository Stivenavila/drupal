import { IBehaviors, IColor, IComponenteTitle, TButton } from 'common/interfaces'
import Carousel from '../Carousel'
import { Options, Splide } from '@splidejs/react-splide'
import { ReactChild, ReactNode, useEffect, useRef } from 'react'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { Behaviors } from 'common/utils/Components'
import styles from './CarouselRecreation.module.css'
import {
  CardRecreation,
  CardRecreationProps,
} from '@/components/molecules/cards/CardRecreation/CardRecreation'

const options: Options = {
  type: 'slide',
  pagination: false,
  gap: '4rem',
  // autoplay: true,
  perPage: 3,
  padding: { right: '10%' },
  breakpoints: {
    998: {
      gap: '1.2rem',
      perPage: 1,
      padding: { right: '48%' },
    },
  },
}

interface CarouselProps<T> {
  className?: string
  viewRecreationalCenter: { results: CardRecreationProps[] }
  behaviors?: IBehaviors
  button: TButton
  componenteTitle: IComponenteTitle
  background?: string
  color?: IColor['color']
  renderItem: React.ComponentType<any>
}
export const CarouselRecreation = <T,>({
  background,
  color,
  componenteTitle,
  viewRecreationalCenter,
  button,
  behaviors,
  className = '',
  renderItem = CardRecreation,
  ...rest
}: CarouselProps<T>) => {
  const splideRef = useRef<Splide>(null)

  useEffect(() => {
    const splideInstance = splideRef.current?.splide
    if (!splideInstance) return
    const ElementSlides = splideInstance.Components.Elements.slides
    const itemsPerPage = splideInstance.options.perPage
    const handleMove = () => {
      const currentSlideIndex = splideInstance.index
      const nextVisibleIndex = currentSlideIndex + itemsPerPage!
      ElementSlides.forEach((slide, index) => {
        slide.style.opacity = nextVisibleIndex == index ? '0.5' : '1'
      })
    }
    handleMove()
    splideInstance?.on('moved', handleMove)

    return () => {
      splideInstance?.destroy()
    }
  }, [])

  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }

  return (
    <section className={`${className} ml-8 md:ml-0`}>
      <Text className=' mb-8 md:ml-[10%] mr-8 md:mr-[10%]'>
        <Heading
          className='mb-2'
          level={2}
        >
          {componenteTitle?.title}
        </Heading>
        <Paragraph color='primary'>{componenteTitle?.pSubtitle}</Paragraph>
      </Text>
      <Carousel
        ref={splideRef}
        className={`inline-block md:mb-24 ${styles.CarouselRecreation__carousel} CarouselRecreation__carousel`}
        items={viewRecreationalCenter?.results}
        variant='secondary'
        renderItem={renderItem}
        options={options}
        {...rest}
      />
      <style jsx>{`
        section {
          ${behaviors &&
        Object.entries(style)
          .map(([key, value]) => `${key}: ${value};`)
          .join('\n')}
        }
      `}</style>
    </section>
  )
}
