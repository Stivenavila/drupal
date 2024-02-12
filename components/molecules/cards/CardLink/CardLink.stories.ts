import type { Meta, StoryObj } from '@storybook/react'
import { CardLink as CardLinkJ } from './CardLink'

const meta: Meta<typeof CardLinkJ> = {
  title: 'Molecules/Card/CardLink',
  component: CardLinkJ,
}

export default meta

type Story = StoryObj<typeof CardLinkJ>

export const CardLink: Story = {
  args: {
    componenteTitle: {
      pSubtitle: 'Conoce más del vencimiento de tu cuota monetaría',
      title: '¿SABÍAS QUE TU CUOTA MONETARÍA PUEDE VENCER?',
    },
    button: {
      url: {
        title: 'Consúltalo aquí',
        url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
      },
    },
    color: 'primary',
  },
}
