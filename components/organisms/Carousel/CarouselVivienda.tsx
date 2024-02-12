import { IBehaviors, IColor, IComponenteTitle } from 'common/interfaces'
import Carousel from './Carousel'
import { Options } from '@splidejs/react-splide'
import {
  CardVivienda,
  CardViviendaProps,
} from '@/components/molecules/cards/CardVivienda/CardVivienda'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Background, Behaviors } from 'common/utils/Components'
import { Text } from '@/components/atoms/Text/Text'

export interface CarouselViviendaProps {
  carruselVivienda: { results?: CardViviendaProps[] }
  behaviors?: IBehaviors
  componenteTitle: IComponenteTitle
}
interface CarouselProps<T> extends CarouselViviendaProps {
  className?: string
  data?: Partial<T>
  background?: string
  color?: IColor['color']
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

export const CarouselVivienda = <T,>({
  color = 'primary',
  background,
  carruselVivienda,
  componenteTitle,
  behaviors,
  className,
  renderItem = CardVivienda,
  ...rest
}: CarouselProps<T>) => {
  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  return (
    <>
      <section className={`BannerPrincipal ${className} md:pt-20 md:pb-28 `}>
        <Text container='large'>
          <Heading className='mx-auto md:w-4/5' level={2} color={color}>
            {componenteTitle.title}
          </Heading>
          <Paragraph className='mx-auto md:w-4/5'>{componenteTitle.pSubtitle}</Paragraph>
          <Carousel
            className='mt-8  pb-14 pd:mb-0 md:mt-14'
            size='w-80'
            items={carruselVivienda?.results}
            renderItem={renderItem}
            options={options}
            {...rest}
          />
        </Text>
      </section>
      <style jsx>{`
        section {
          ${behaviors &&
          Object.entries(style)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n')}
          ${background && `background: ${Background(background)}`}
        }
      `}</style>
    </>
  )
}
