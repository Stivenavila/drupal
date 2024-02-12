import type { Meta, StoryObj } from '@storybook/react'
import { CarouselConvenio as CarouselConvenioJ } from './CarouselConvenio'
import { CardConvenios } from '../../molecules/cards/CardConvenios/CardConvenios'

const meta: Meta<typeof CarouselConvenioJ> = {
  title: 'Organisms/Carousel/CarouselConvenio',
  component: CarouselConvenioJ,
}

export default meta

type Story = StoryObj<typeof CarouselConvenioJ>

export const CarouselConvenio: Story = {
  args: {
    background: 'https://picsum.photos/1920/1080',
    color: 'primary',
    renderItem: CardConvenios,
    componenteTitle: {
      id: '69246639-ca57-4a37-b8fa-33a0cb397982',
      pSubtitle: 'Conoce más del vencimiento de tu cuota monetaría',
      title: '¿SABÍAS QUE TU CUOTA MONETARÍA PUEDE VENCER?',
    },
    button: {
      id: 'b47473b3-a132-4f74-ae08-1980fc2911b9',
      url: {
        title: 'Consúltalo aquí',
        url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
      },
    },
    itemsCardImage: [
      {
        link: { url: { url: '#' } },
        image: {
          mediaImage: {
            url: 'https://picsum.photos/485/292',
            alt: 'images',
          },
        },
        title: 'Card',
      },
      {
        link: { url: { url: '#' } },
        image: {
          mediaImage: {
            url: 'https://picsum.photos/485/292',
            alt: 'images',
          },
        },
        title: 'Card',
      },
    ],
  },
}
