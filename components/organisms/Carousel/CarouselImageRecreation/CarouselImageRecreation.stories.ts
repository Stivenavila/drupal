import type { Meta, StoryObj } from '@storybook/react'
import { CarouselImageRecreation as CarouselImageRecreationJ } from '.'

const meta: Meta<typeof CarouselImageRecreationJ> = {
  title: 'Organisms/Carousel/CarouselImageRecreation',
  component: CarouselImageRecreationJ,
}

export default meta

type Story = StoryObj<typeof CarouselImageRecreationJ>

export const CarouselImageRecreation: Story = {
  args: {
    items: [
      {
        mediaImage: {
          url: 'https://picsum.photos/1921/1086',
          title: null,
          alt: 'Banner1',
        },
      },
      {
        mediaImage: {
          url: 'https://picsum.photos/1924/1080',
          title: null,
          alt: 'Banner1',
        },
      },
      {
        mediaImage: {
          url: 'https://picsum.photos/1920/1086',
          title: null,
          alt: 'Banner1',
        },
      },
      {
        mediaImage: {
          url: 'https://picsum.photos/1929/1080',
          title: null,
          alt: 'Banner1',
        },
      },
      {
        mediaImage: {
          url: 'https://picsum.photos/1923/1080',
          title: null,
          alt: 'Banner1',
        },
      },
      {
        mediaImage: {
          url: 'https://picsum.photos/1924/1080',
          title: null,
          alt: 'Banner1',
        },
      },
    ],
  },
}
