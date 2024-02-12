import type { Meta, StoryObj } from '@storybook/react'
import { Breaker as BreakerJ } from './Breaker'

const meta: Meta<typeof BreakerJ> = {
  title: 'Molecules/Breaker',
  component: BreakerJ,
}

export default meta

type Story = StoryObj<typeof BreakerJ>

export const Breaker: Story = {
  args: {
    background: '#003da5',
    color: 'white',
    // image: {
    //   mediaImage: {
    //     url: 'https://picsum.photos/485/292',
    //     alt: 'images',
    //   },
    // },
    button: {
      id: 'b47473b3-a132-4f74-ae08-1980fc2911b9',
      url: {
        title: 'Consúltalo aquí',
        url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
      },
    },
    textHtml: {
      processed:
        '<div><h2>¿SABÍAS QUE TU CUOTA MONETARÍA PUEDE VENCER?</h2><p>Conoce más del vencimiento de tu cuota monetaría</p></div>',
    },
    behaviors: {
      background_behavior: {
        background_position: 'center',
        select_color: 'blue',
      },
      margin_behavior: {
        margin_bottom: 'none',
        margin_left: 'none',
        margin_right: 'none',
        margin_top: 'none',
      },
      padding_behavior: {
        padding_bottom: 'large',
        padding_left: 'none',
        padding_right: 'none',
        padding_top: 'large',
      },
    },
  },
}
