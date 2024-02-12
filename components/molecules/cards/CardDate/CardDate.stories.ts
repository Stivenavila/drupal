import type { Meta, StoryObj } from '@storybook/react'
import { CardDate as CardDateJ } from './CardDate'

const meta: Meta<typeof CardDateJ> = {
  title: 'Molecules/Card/CardDate',
  component: CardDateJ,
}

export default meta

type Story = StoryObj<typeof CardDateJ>

export const CardDate: Story = {
  args: {
    title: 'Conciertos',
    image: {
      mediaImage: {
        url: 'https://picsum.photos/485/292',
        alt: 'image',
      }
    },
    path: '#',
    tag: '09',
  },
}
