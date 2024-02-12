import { IBehaviors, IColor, IComponenteTitle, TButton } from 'common/interfaces'
import Carousel from '../Carousel'
import { Options, Splide } from '@splidejs/react-splide'
import { useEffect, useRef, useState } from 'react'
import { CardNews } from '@/components/molecules/cards/CardNews/CardNews'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Button } from '@/components/atoms/Button/Button'
import { Text } from '@/components/atoms/Text/Text'
import { Behaviors } from 'common/utils/Components'
import styles from './CarouselNews.module.css'

const options: Options = {
  type: 'slide',
  pagination: false,
  gap: '4rem',
  // autoplay: true,
  perPage: 3,
  padding: { right: '18%' },
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
  viewNews: { results: T[] }
  behaviors?: IBehaviors
  button: TButton
  componenteTitle: IComponenteTitle
  background?: string
  color?: IColor['color']
  renderItem: React.ComponentType<any>
}
export const CarouselNews = <T,>({
  background,
  color,
  componenteTitle,
  viewNews,
  button,
  behaviors,
  className = '',
  renderItem = CardNews,
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
        slide.classList.toggle('activeSlide', index === nextVisibleIndex)
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
    <section className='ml-8 md:ml-0'>
      <Text className='flex flex-wrap justify-between mb-8 md:ml-[10%] mr-8 md:mr-[10%]'>
        <div>
          <Heading level={2}>{componenteTitle?.title}</Heading>
          <Paragraph color='primary'>{componenteTitle?.pSubtitle}</Paragraph>
        </div>
        <div className='self-end'>
          <Button
            color='green'
            outline
            size='large'
            variant='secondary'
            href={button?.url?.url}
          >
            {button?.url?.title}
          </Button>
        </div>
      </Text>
      <Carousel
        ref={splideRef}
        className={`${className} ${styles.CarouselConvenio__carousel} CarouselConvenio__carousel`}
        items={viewNews?.results}
        variant='secondary'
        renderItem={renderItem}
        options={options}
        {...rest}
      />
      <style jsx>{`
        section {
          ${Object.entries(style)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n')}
        }
      `}</style>
    </section>
  )
}
