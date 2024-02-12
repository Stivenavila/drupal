import type { Meta, StoryObj } from '@storybook/react'
import { CarouselImages as CarouselImagesJ } from './CarouselImages'

const meta: Meta<typeof CarouselImagesJ> = {
  title: 'Organisms/Carousel/CarouselImages',
  component: CarouselImagesJ,
}

export default meta

type Story = StoryObj<typeof CarouselImagesJ>

export const CarouselImages: Story = {
  args: {
    items: [
      {
        mediaImage: {
          url: 'https://picsum.photos/1926/1080',
          title: null,
          alt: 'Banner1',
        },
      },
      {
        mediaImage: {
          url: 'https://picsum.photos/1920/1087',
          title: null,
          alt: 'Banner1',
        },
      },
      {
        mediaImage: {
          url: 'https://picsum.photos/1920/1180',
          title: null,
          alt: 'Banner1',
        },
      },
      {
        mediaImage: {
          url: 'https://picsum.photos/1920/1082',
          title: null,
          alt: 'Banner1',
        },
      },
    ],
  },
}
