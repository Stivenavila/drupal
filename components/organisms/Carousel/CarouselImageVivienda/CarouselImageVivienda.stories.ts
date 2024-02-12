import type { Meta, StoryObj } from '@storybook/react'
import { CarouselImageVivienda as CarouselImageViviendaJ } from './index'

const meta: Meta<typeof CarouselImageViviendaJ> = {
  title: 'Organisms/Carousel/CarouselImageVivienda',
  component: CarouselImageViviendaJ,
}

export default meta

type Story = StoryObj<typeof CarouselImageViviendaJ>

export const CarouselImageVivienda: Story = {
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
    card: {
      title: 'Quiero afiliarme',
      link: {
        url: 'https://console.platform.sh/esinergiaco/25lkh7ad6hcei',
      },
      icon: {
        mediaImage1: {
          url: '"https://api.ddev.site/sites/default/files/2023-12/logo-fondo-blanco%201.png"',
          alt: 'afiliaciones',
        },
      },
    },
  },
}
