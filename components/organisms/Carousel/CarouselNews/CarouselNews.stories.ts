import type { Meta, StoryObj } from '@storybook/react'
import { CarouselNews as CarouselNewsJ } from '.'

const meta: Meta<typeof CarouselNewsJ> = {
  title: 'Organisms/Carousel/CarouselNews',
  component: CarouselNewsJ,
}

export default meta

type Story = StoryObj<typeof CarouselNewsJ>

export const CarouselNews: Story = {
  args: {
    viewNews: {
      results: [
        {
          created: {
            timestamp: 1703619010,
          },
          date: 'Mar, 31 - 2023',
          title: 'test formará a 40 comerciantes del centro de Cali',
          newsImage: {
            mediaImage: {
              url: 'https://picsum.photos/160/236',
              alt: 'banner noticias',
            },
          },
          path: '#',
        },
        {
          created: {
            timestamp: 1703619010,
          },
          title: 'test formará a 40 comerciantes del centro de Cali',
          newsImage: {
            mediaImage: {
              url: 'https://picsum.photos/160/236',
              alt: 'banner noticias',
            },
          },
          path: '#',
        },
        {
          created: {
            timestamp: 1703619010,
          },
          title: 'test formará a 40 comerciantes del centro de Cali',
          newsImage: {
            mediaImage: {
              url: 'https://picsum.photos/160/236',
              alt: 'banner noticias',
            },
          },
          path: '#',
        },
        {
          created: {
            timestamp: 1703619010,
          },
          title: 'test formará a 40 comerciantes del centro de Cali',
          newsImage: {
            mediaImage: {
              url: 'https://picsum.photos/160/236',
              alt: 'banner noticias',
            },
          },
          path: '#',
        },
        {
          created: {
            timestamp: 1703619010,
          },
          newsImage: {
            mediaImage: {
              url: 'https://picsum.photos/160/236',
              alt: 'banner noticias',
            },
          },
          title: 'test formará a 40 comerciantes del centro de Cali',
          path: '#',
        },
        {
          created: {
            timestamp: 1703619010,
          },
          title: 'test formará a 40 comerciantes del centro de Cali',
          newsImage: {
            mediaImage: {
              url: 'https://picsum.photos/160/236',
              alt: 'banner noticias',
            },
          },
          path: '#',
        },
      ],
    },
    componenteTitle: {
      pSubtitle: 'Otro subtítulo',
      title: 'Otro título',
      id: '2',
    },
    button: {
      id: 'b47473b3-a132-4f74-ae08-1980fc2911b9',
      url: {
        title: 'Consúltalo aquí',
        url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
      },
    },
    color: 'primary',
    behaviors: {
      background_behavior: {
        background_position: 'center',
        select_color: '#D9D9D940',
      },
      margin_behavior: {
        margin_bottom: 'none',
        margin_left: 'none',
        margin_right: 'none',
        margin_top: 'none',
      },
      padding_behavior: {
        padding_bottom: 'large',
        padding_left: 'none',
        padding_right: 'none',
        padding_top: 'large',
      },
    },
  },
}
