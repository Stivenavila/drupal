import type { Meta, StoryObj } from '@storybook/react'
import { CardCifras as CardCifrasJ } from './CardCifras'

const meta: Meta<typeof CardCifrasJ> = {
  title: 'Molecules/Card/CardCifras',
  component: CardCifrasJ,
}

export default meta

type Story = StoryObj<typeof CardCifrasJ>

export const CardCifras: Story = {
  args: {
    title: 'Card Cifras',
    color: 'celeste',
    eyebrow: 'title',
    url: '#',
    icon: {
      mediaImage1: {
        url: 'https://api.ddev.site/sites/default/files/2023-12/rocket.svg',
        alt: 'asasa',
      },
    },
  },
}
