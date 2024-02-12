import { Splide, SplideSlide, Options, SplideProps } from '@splidejs/react-splide'
import { Grid } from '@splidejs/splide-extension-grid'
import '@splidejs/react-splide/css'
import { PreprocessData } from 'common/utils/Grid/PreprocessData'
import React, { forwardRef } from 'react'

interface CarouselProps<T> extends Omit<SplideProps, 'ref'> {
  items?: T[]
  data?: Partial<T>
  size?: 'fullWidth' | 'w-80'
  tag?: 'div' | 'section' | 'header' | 'footer' | 'nav'
  className?: string
  variant?: 'primary' | 'secondary' | 'default' | 'video'
  options?: Options
  renderItem: React.ComponentType<any>
}

const Carousel = forwardRef<Splide, CarouselProps<any>>(
  (
    {
      className = '',
      items,
      tag = 'div',
      data,
      options,
      variant,
      size,
      renderItem: ItemComponent,
    }: CarouselProps<any>,
    ref: React.LegacyRef<Splide>
  ) => {
    if (!Array.isArray(items) || items?.length < 1) return null
    const NewItems = PreprocessData(items, data)
    return (
      <Splide
        extensions={{ Grid }}
        ref={ref}
        className={`${className} Carousel  ${size ? `Carousel--${size}` : ''} ${
          variant ? `Carousel--${variant}` : ''
        }`}
        tag={tag}
        aria-label='My Favorite Images'
        options={options}
      >
        {NewItems.map((item, i) => (
          <SplideSlide key={`Item-${i}`}>
            <ItemComponent {...item} />
          </SplideSlide>
        ))}
      </Splide>
    )
  }
)
Carousel.displayName = 'Carousel'

export default Carousel
