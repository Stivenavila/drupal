import type { Meta, StoryObj } from '@storybook/react'
import { CarouselBanner as CarouselBannerJ } from './CarouselBanner'

const meta: Meta<typeof CarouselBannerJ> = {
  title: 'Organisms/Carousel/CarouselBanner',
  component: CarouselBannerJ,
}

export default meta

type Story = StoryObj<typeof CarouselBannerJ>

export const CarouselBanner: Story = {
  args: {
    itemsBanner: [
      {
        id: '45dcd246-fd7e-437f-a9d6-8e9fd5835038',
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
            url: 'https://api.ddev.site/sites/default/files/2023-12/imageBanner.png',
            title: null,
            alt: 'Banner1',
          },
        },
      },
      {
        id: '2e3ffb74-03be-4f35-bb4e-e065eaa76a1b',
        componenteTitle: {
          id: '2d978cad-0ef9-4fc0-af87-79b2c0cb309b',
          pSubtitle: 'Conoce más del vencimiento de tu cuota monetaría Banner 2',
          title: '¿SABÍAS QUE TU CUOTA MONETARÍA PUEDE VENCER?',
        },
        button: {
          id: '991a26ee-9140-4f7f-b176-ce6c56637ae4',
          url: {
            title: 'Consúltalo aquí',
            url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
          },
        },
        image: {
          id: 'b7ac0741-f0ba-4383-9cb4-d382afdbb06c',
          name: 'imageBanner.png',
          mediaImage: {
            url: 'https://api.ddev.site/sites/default/files/2023-12/imageBanner.png',
            title: null,
            alt: 'Banner1',
          },
        },
      },
    ],
  },
}
