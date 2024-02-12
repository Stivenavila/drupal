import type { Meta, StoryObj } from '@storybook/react'
import { CardBooking as CardBookingJ } from './CardBooking'

const meta: Meta<typeof CardBookingJ> = {
  title: 'Molecules/Card/CardBooking',
  component: CardBookingJ,
}

export default meta

type Story = StoryObj<typeof CardBookingJ>

export const CardBooking: Story = {
  args: {
    title: 'Colegio test Miraflores',
    items: [
      {
        componenteTitle: {
          pSubtitle: 'Conoce más del vencimiento de tu cuota monetaría',
          title: '¿SABÍAS QUE TU CUOTA MONETARÍA PUEDE VENCER?',
          id: '1', // Agrega el id correspondiente según la definición de IComponenteTitle
        },
      },
      {
        componenteTitle: {
          pSubtitle: 'Otro subtítulo',
          title: 'Otro título',
          id: '2',
        },
      },
    ],
    image: {
      mediaImage: {
        url: 'https://picsum.photos/400/120',
        alt: 'images',
      },
    },
    body: 'Chatea con nosotros vía livechat o whatsapp',
    button: {
      url: {
        title: 'Consúltalo aquí',
        url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
      },
    },
    details: 'No se ara ningún cargo por el momento',
    price: 100000,
    stars: 'estrellas',
  },
}
