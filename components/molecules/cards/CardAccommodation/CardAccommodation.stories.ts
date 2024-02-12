import type { Meta, StoryObj } from '@storybook/react'
import { CardAccommodation as CardAccommodationJ } from './CardAccommodation'

const meta: Meta<typeof CardAccommodationJ> = {
  title: 'Molecules/Card/CardAccommodation',
  component: CardAccommodationJ,
}

export default meta

type Story = StoryObj<typeof CardAccommodationJ>

export const CardAccommodation: Story = {
  args: {
    title: 'Colegio test Miraflores',
    image: {
      mediaImage: {
        url: 'https://picsum.photos/277/281',
        alt: 'images',
      },
    },
    button: {
      url: {
        title: 'Más información',
        url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
      },
    },
    details: 'No se ara ningún cargo por el momento',
    lodgingServices: {
      itemsIcons: [
        {
          title: 'Área construida',
        },
        {
          title: 'Habitaciones',
          icon: {
            mediaImage1: {
              url: 'https://picsum.photos/17/12',
              alt: 'afiliaciones',
            },
          },
        },
      ],
    }
  },
}
