import type { Meta, StoryObj } from '@storybook/react'
import { CardImage as CardImageJ } from './CardImage'

const meta: Meta<typeof CardImageJ> = {
  title: 'Molecules/Card/CardImage',
  component: CardImageJ,
}

export default meta

type Story = StoryObj<typeof CardImageJ>

export const CardImage: Story = {
  args: {
    image: {
      mediaImage: {
        url: 'https://picsum.photos/485/292',
        alt: 'images',
      },
    },
  },
}
