import PropTypes from 'prop-types'
import { IBehaviors, IColor } from 'common/interfaces'
import Carousel from './Carousel'
import styles from './Carousel.module.css'
import { Options } from '@splidejs/react-splide'
import { HeroBanner } from '@/components/molecules/Hero/HeroBanner'
import { Behaviors, StylesBehaviors } from 'common/utils/Components'

interface CarouselProps<T> {
  className?: string
  itemsBanner?: T[]
  data?: Partial<T>
  bgColor: IColor['color']
  behaviors?: IBehaviors
  renderItem?: React.ComponentType<any>
}

const options: Options = {
  type: 'loop',
  pagination: false,
  autoplay: true,
  autoHeight: true,
  breakpoints: {
    998: {
      pagination: true,
      arrows: false,
    },
  },
}

export const CarouselBanner = <T,>({
  bgColor = 'primary',
  itemsBanner,
  className,
  behaviors,
  renderItem = HeroBanner,
  ...rest
}: CarouselProps<T>) => {
  if (!itemsBanner || !Array.isArray(itemsBanner)) return null

  let style = {} as StylesBehaviors
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  const { background, ...stylesCarousel } = style || ''
  return (
    <section>
      <div
        className={`BannerPrincipal ${className} pb-4 md:pt-16 md:pb-24 mt-5 md:mt-0 ${styles.carouselBanner}`}
      >
        {itemsBanner?.length >= 1 && (
          <Carousel
            items={itemsBanner}
            renderItem={renderItem}
            options={options}
            {...rest}
          />
        )}
      </div>
      <style jsx>{`
        section {
          --main-section-color: ${background ?? 'var(--primary)'};
          ${Object.entries(stylesCarousel)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n')};
        }
      `}</style>
    </section>
  )
}

CarouselBanner.propTypes = {
  items: PropTypes.array.isRequired,
}
