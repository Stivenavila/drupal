import React, { useEffect, useRef } from 'react'

import { HeroImage } from '@/components/molecules/Hero/HeroImage'
import { CardImage } from '@/components/molecules/cards/CardImage/CardImage'
import { Options, Splide } from '@splidejs/react-splide'
import { IColor } from 'common/interfaces'

import styles from './CarouselImageRecreation.module.css'
import Carousel from '../Carousel'
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
  fixedWidth: 159,
  fixedHeight: 119,
  gap: 20,
  rewind: true,
  arrows: false,
  pagination: false,
  isNavigation: true,
  // perMove: 1,
  perPage: 2,
  // cover: true,
  // focus: 'center',
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
  data?: Partial<T>
  bgColor?: IColor['color']
  renderMainItem: React.ComponentType<any>
  renderThumbnail: React.ComponentType<any>
}

export const CarouselImageRecreation = <T,>({
  className,
  items,
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
      className={`CarouselImage ${className} ${styles.CarouselImage} overflow-hidden`}
    >
      <Text className={`pt-6 ${styles.container}`}>
        <Text className='max-w-7xl mx-auto'>
          <Carousel
            className={styles.CarouselImageMain}
            ref={mainSlider}
            items={items}
            renderItem={renderMainItem}
            options={options}
          />
          <Carousel
            className={`${styles.CarouselImageThumbnail}  hidden md:block`}
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
CarouselImageRecreation.defaultProps = {
  renderMainItem: HeroImage,
  renderThumbnail: CardImage,
}
