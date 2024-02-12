import React, { useEffect, useRef } from 'react'

import { HeroImage } from '@/components/molecules/Hero/HeroImage'
import { CardImage } from '@/components/molecules/cards/CardImage/CardImage'
import { Options, Splide } from '@splidejs/react-splide'
import { IColor, IMediaImage } from 'common/interfaces'
import Carousel from './Carousel'
import styles from './Carousel.module.css'

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
  fixedWidth: 118,
  fixedHeight: 90,
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

export interface CarouselImagesProps {
  carruselImages: { mediaImage: IMediaImage }[]
}
interface CarouselImageProps<T> extends CarouselImagesProps {
  className?: string
  data?: Partial<T>
  bgColor?: IColor['color']
}

export const CarouselImages = <T,>({
  className,
  carruselImages,
}: CarouselImageProps<T>) => {
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
    <div className={`CarouselImage ${className} ${styles.CarouselImage}`}>
      <Carousel
        className={styles.CarouselImageMain}
        ref={mainSlider}
        items={carruselImages}
        renderItem={props => <HeroImage width='626' height='337' {...props} />}
        options={options}
      />
      <Carousel
        className={`${styles.CarouselImageThumbnail} hidden md:block`}
        ref={thumbnailSlider}
        items={carruselImages}
        renderItem={props => <CardImage width='113' height='85' {...props} />}
        options={optionsThumbnail}
      />
    </div>
  )
}
