import type { Meta, StoryObj } from '@storybook/react'
import { HeroBanner as HeroBannerJ } from './HeroBanner'

const meta: Meta<typeof HeroBannerJ> = {
  title: 'Molecules/Hero/HeroBanner',
  component: HeroBannerJ,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeroBannerJ>

export const HeroBanner: Story = {
  args: {
    id: '45dcd246-fd7e-437f-a9d6-8e9fd5835038',
    preTitle: 'Pre Title',
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
    image: {
      id: 'b7ac0741-f0ba-4383-9cb4-d382afdbb06c',
      name: 'imageBanner.png',
      mediaImage: {
        url: 'https://picsum.photos/200/300',
        title: null,
        alt: 'Banner1',
      },
    },
  },
}
