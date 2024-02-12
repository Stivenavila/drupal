import type { Meta, StoryObj } from '@storybook/react'
import { CardCifrasTitle as CardCifrasTitleJ } from './CardCifrasTitle'

const meta: Meta<typeof CardCifrasTitleJ> = {
  title: 'Molecules/Card/CardCifrasTitle',
  component: CardCifrasTitleJ,
}

export default meta

type Story = StoryObj<typeof CardCifrasTitleJ>

export const CardCifrasTitle: Story = {
  args: {
    componenteTitle: {
      pSubtitle: 'Conoce más del vencimiento de tu cuota monetaría',
      title: '¿SABÍAS QUE TU CUOTA MONETARÍA PUEDE VENCER?',
    },
    color: 'celeste',
    url: '#',
    icon: {
      mediaImage1: {
        url: 'https://api.ddev.site/sites/default/files/2023-12/rocket.svg',
        alt: 'asasa',
      },
    },
  },
}
