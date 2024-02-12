import React, { useEffect, useRef } from 'react'

import { HeroImage } from '@/components/molecules/Hero/HeroImage'
import { CardImage } from '@/components/molecules/cards/CardImage/CardImage'
import { Options, Splide } from '@splidejs/react-splide'
import { IColor } from 'common/interfaces'
import Carousel from '../Carousel'
import styles from './CarouselImageVivienda.module.css'
import { CardIcon, CardIconProps } from '@/components/molecules/cards/CardIcon/CardIcon'
import { Text } from '@/components/atoms/Text/Text'

const options: Options = {
  type: 'fade',
  rewind: false,
  pagination: false,
  arrows: true,
  autoHeight: true,
  breakpoints: {
    998: {
      arrows: false,
      pagination: true,
    },
  },
}
const optionsThumbnail: Options = {
  fixedWidth: 164,
  fixedHeight: 124,
  gap: 20,
  rewind: true,
  arrows: false,
  pagination: false,
  isNavigation: true,
  //   perMove: 1,
  perPage: 2,
  //   cover: true,
  //   focus: 'center',
  breakpoints: {
    998: {
      fixedWidth: 60,
      fixedHeight: 56,
      perPage: 1,
    },
  },
}

interface CarouselImagesProps<T> {
  className?: string
  items: T[]
  card: CardIconProps
  data?: Partial<T>
  bgColor?: IColor['color']
  renderMainItem: React.ComponentType<any>
  renderThumbnail: React.ComponentType<any>
}

export const CarouselImageVivienda = <T,>({
  className,
  items,
  card,
  renderMainItem,
  renderThumbnail,
}: CarouselImagesProps<T>) => {
  const mainSlider = useRef<Splide | null>(null)
  const thumbnailSlider = useRef<Splide | null>(null)

  useEffect(() => {
    if (mainSlider.current && thumbnailSlider.current) {
      const mainSplide = mainSlider.current
      const thumbnailSplide = thumbnailSlider.current

      if (mainSplide?.sync && thumbnailSplide?.splide) {
        mainSplide.sync(thumbnailSplide.splide)
      }
    }
  }, [])

  return (
    <section
      className={`CarouselImage ${className} ${styles.CarouselImage} md:pt-16 md:pb-24 overflow-hidden`}
    >
      <Text container='large'>
        <Carousel
          className={`${styles.CarouselImageMain} relative z-1`}
          ref={mainSlider}
          items={items}
          renderItem={renderMainItem}
          options={options}
        />
        <Text
          className={`flex justify-center md:items-end md:justify-around ${styles.bgCarouselImage}`}
        >
          <CardIcon className='w-full md:w-auto' variant='vivienda' {...card} />
          <Carousel
            className={`${styles.CarouselImageThumbnail}`}
            ref={thumbnailSlider}
            items={items}
            renderItem={renderThumbnail}
            options={optionsThumbnail}
          />
        </Text>
      </Text>
    </section>
  )
}
CarouselImageVivienda.defaultProps = {
  renderMainItem: HeroImage,
  renderThumbnail: CardImage,
}
