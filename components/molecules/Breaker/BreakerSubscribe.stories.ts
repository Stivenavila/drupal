import type { Meta, StoryObj } from '@storybook/react'
import { BreakerSubscribe as BreakerSubscribeJ } from './BreakerSubscribe'

const meta: Meta<typeof BreakerSubscribeJ> = {
  title: 'Molecules/Breaker',
  component: BreakerSubscribeJ,
}

export default meta

type Story = StoryObj<typeof BreakerSubscribeJ>

export const BreakerSubscribe: Story = {
  args: {
    image: {
      mediaImage: {
        url: 'https://picsum.photos/485/292',
        alt: 'images',
      },
    },
    imageMobile: {
      mediaImage: {
        url: 'https://picsum.photos/485/292',
        alt: 'images',
      },
    },
    componenteTitle: {
      pSubtitle: 'Conoce más del vencimiento de tu cuota monetaría',
      title: '¿SABÍAS QUE TU CUOTA MONETARÍA PUEDE VENCER?',
    },
    componentButtons: {
      buttons: [
        {
          url: {
            url: 'https://jsonviewer.stack.hu/',
            title: 'Suscríbete',
          },
        },
      ],
    },
  },
}
