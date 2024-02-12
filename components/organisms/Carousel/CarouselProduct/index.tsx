import { IBehaviors, IColor, IComponenteTitle, TButton } from 'common/interfaces'
import Carousel from '../Carousel'
import { Options } from '@splidejs/react-splide'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { Behaviors } from 'common/utils/Components'
import styles from './CarouselProduct.module.css'
import {
  CardProduct,
  CardProductProps,
} from '@/components/molecules/cards/CardProduct/CardProduct'
import { Button } from '@/components/atoms/Button/Button'

const options: Options = {
  type: 'slide',
  pagination: false,
  autoplay: true,
  perPage: 1,
  grid: {
    cols: 2,
    rows: 2,
    gap: {
      row: '2rem',
      col: '2rem',
    },
  },
  breakpoints: {
    998: {
      gap: '1rem',
      perPage: 1,
      grid: {
        cols: 1,
        rows: 1,
      },
    },
  },
}

interface CarouselProps<T> {
  className?: string
  itemsCardsAgreementsFeatures: CardProductProps[]
  behaviors?: IBehaviors
  button: TButton
  componenteTitle: IComponenteTitle
  background?: string
  color?: IColor['color']
  renderItem: React.ComponentType<any>
}
export const CarouselProduct = <T,>({
  background,
  color,
  componenteTitle,
  itemsCardsAgreementsFeatures,
  button,
  behaviors,
  className = '',
  renderItem = CardProduct,
  ...rest
}: CarouselProps<T>) => {
  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  return (
    <section className='ml-8 md:ml-0'>
      <Text container='medium'>
        <Text className='mb-8 md:mb-20 flex justify-between items-end'>
          <Text>
            <Heading className='mb-2' level={2}>
              {componenteTitle?.title}
            </Heading>
            <Paragraph color='primary'>{componenteTitle?.pSubtitle}</Paragraph>
          </Text>
          <Button
            className='mb-4'
            href={button.url.url}
            variant='secondary'
            color='green'
            outline
            size='large'
          >
            {button.url.title}
          </Button>
        </Text>
        <Carousel
          className={`${className} ${styles.CarouselProduct__carousel} CarouselProduct__carousel`}
          items={itemsCardsAgreementsFeatures}
          variant='primary'
          renderItem={renderItem}
          options={options}
          {...rest}
        />
      </Text>
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
