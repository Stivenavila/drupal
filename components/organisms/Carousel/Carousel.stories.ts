import { CardPlan } from './../../molecules/cards/CardPlan/CardPlan'
import type { Meta, StoryObj } from '@storybook/react'
import { Carousel as CarouselJ } from './Carousel'

const meta: Meta<typeof CarouselJ> = {
  title: 'Organisms/Carousel/Carousel',
  component: CarouselJ,
}

export default meta

type Story = StoryObj<typeof CarouselJ>

export const Carousel: Story = {
  args: {
    items: [
      { title: 'Mascotas', src: 'https://picsum.photos/160/236', alt: 'image-hero', url: '#' },
      { title: 'Prueba', src: 'https://picsum.photos/162/238', alt: 'image-hero', url: '#' },
      { title: 'Auto', src: 'https://picsum.photos/160/236', alt: 'image-hero', url: '#' },
      { title: 'TV', src: 'https://picsum.photos/161/237', alt: 'image-hero', url: '#' },
      { title: 'TV', src: 'https://picsum.photos/161/237', alt: 'image-hero', url: '#' },
      { title: 'TV', src: 'https://picsum.photos/161/237', alt: 'image-hero', url: '#' },
    ],
    renderItem: CardPlan,
    options: {
      type: 'slide',
      pagination: false,
      gap: '1rem',
      autoplay: true,
      perPage: 5,
      resetProgress: false,
      padding: { left: '1rem', right: '2rem' },
    },
  },
}
