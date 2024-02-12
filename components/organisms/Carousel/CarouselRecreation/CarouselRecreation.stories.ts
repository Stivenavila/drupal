import type { Meta, StoryObj } from '@storybook/react'
import { CarouselRecreation as CarouselRecreationJ } from '.'

const meta: Meta<typeof CarouselRecreationJ> = {
  title: 'Organisms/Carousel/CarouselRecreation',
  component: CarouselRecreationJ,
}

export default meta

type Story = StoryObj<typeof CarouselRecreationJ>

export const CarouselRecreation: Story = {
  args: {
    viewRecreationalCenter: {
      results: [
        {
          title: 'ALIANZAS CARTAGO',
          image: {
            mediaImage: {
              url: 'https://picsum.photos/268/190',
              title: null,
              alt: 'Banner1',
            },
          },
          path: '#',
        },
        {
          title: 'ALIANZAS CARTAGO',
          image: {
            mediaImage: {
              url: 'https://picsum.photos/200/300',
              title: null,
              alt: 'Banner1',
            },
          },
          path: '#',
        },
        {
          title: 'ALIANZAS CARTAGO',
          image: {
            mediaImage: {
              url: 'https://picsum.photos/268/190',
              title: null,
              alt: 'Banner1',
            },
          },
          path: '#',
        },
        {
          title: 'ALIANZAS CARTAGO',
          image: {
            mediaImage: {
              url: 'https://picsum.photos/200/300',
              title: null,
              alt: 'Banner1',
            },
          },
          path: '#',
        },
        {
          title: 'ALIANZAS CARTAGO',
          image: {
            mediaImage: {
              url: 'https://picsum.photos/268/190',
              title: null,
              alt: 'Banner1',
            },
          },
          path: '#',
        },
        {
          title: 'ALIANZAS CARTAGO',
          image: {
            mediaImage: {
              url: 'https://picsum.photos/200/300',
              title: null,
              alt: 'Banner1',
            },
          },
          path: '#',
        },
        {
          title: 'ALIANZAS CARTAGO',
          image: {
            mediaImage: {
              url: 'https://picsum.photos/268/190',
              title: null,
              alt: 'Banner1',
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
