import type { Meta, StoryObj } from '@storybook/react'
import { CarouselAccommodation as CarouselAccommodationJ } from './index'
import { dataTabsInfo } from '../../../../common/seed/components'

const meta: Meta<typeof CarouselAccommodationJ> = {
  title: 'Organisms/Carousel/CarouselAccommodation',
  component: CarouselAccommodationJ,
}

export default meta

type Story = StoryObj<typeof CarouselAccommodationJ>

export const CarouselAccommodation: Story = {
  args: {
    componenteTitle: {
      pSubtitle: 'Lorem',
      title: 'Proyectos disponibles',
    },
    button: {
      url: {
        title: 'Consúltalo aquí',
        url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
      },
    },
    slideLodging: {
      results: [
        {
          title: 'Colegio test Miraflores',
          componenteTitle: {
            title: 'Gardenias',
            pSubtitle: '(las Vegas de test)',
          },
          image: {
            mediaImage: {
              url: 'https://picsum.photos/277/281',
              alt: 'images',
            },
          },
          body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
          button: {
            url: {
              title: 'Más información',
              url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
            },
          },
          details: 'No se ara ningún cargo por el momento',
          items: [
            {
              componenteTitle: {
                pSubtitle: '62.11 m2',
                title: 'Área construida',
              },
            },
            {
              componenteTitle: {
                pSubtitle: '3',
                title: 'Habitaciones',
              },
              icon: {
                mediaImage1: {
                  url: 'https://picsum.photos/17/12',
                  alt: 'afiliaciones',
                },
              },
            },
          ],
        },
        {
          title: 'Colegio test Miraflores',
          componenteTitle: {
            title: 'Gardenias',
            pSubtitle: '(las Vegas de test)',
          },
          image: {
            mediaImage: {
              url: 'https://picsum.photos/277/281',
              alt: 'images',
            },
          },
          body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
          button: {
            url: {
              title: 'Más información',
              url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
            },
          },
          details: 'No se ara ningún cargo por el momento',
          items: [
            {
              componenteTitle: {
                pSubtitle: '62.11 m2',
                title: 'Área construida',
              },
            },
            {
              componenteTitle: {
                pSubtitle: '3',
                title: 'Habitaciones',
              },
              icon: {
                mediaImage1: {
                  url: 'https://picsum.photos/17/12',
                  alt: 'afiliaciones',
                },
              },
            },
          ],
        },
      ],
    },
  },
}
