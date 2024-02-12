import type { Meta, StoryObj } from '@storybook/react'
import { CardColegio as CardColegioJ } from './CardColegio'

const meta: Meta<typeof CardColegioJ> = {
  title: 'Molecules/Card/CardColegio',
  component: CardColegioJ,
}

export default meta

type Story = StoryObj<typeof CardColegioJ>

export const CardColegio: Story = {
  args: {
    link: { url: { url: '#' } },
    image: {
      mediaImage: {
        url: 'https://picsum.photos/277/281',
        alt: 'images',
      },
    },
    title: 'Colegio test Miraflores',
  },
}
