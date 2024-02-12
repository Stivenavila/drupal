import type { Meta, StoryObj } from '@storybook/react'
import { CardConvenios as CardConveniosJ } from './CardConvenios'

const meta: Meta<typeof CardConveniosJ> = {
  title: 'Molecules/Card/CardConvenios',
  component: CardConveniosJ,
}

export default meta

type Story = StoryObj<typeof CardConveniosJ>

export const CardConvenios: Story = {
  args: {
    link: { url: { url: '#' } },
    image: {
      mediaImage: {
        url: 'https://picsum.photos/485/292',
        alt: 'images',
      },
    },
    title: 'Card',
  },
}
