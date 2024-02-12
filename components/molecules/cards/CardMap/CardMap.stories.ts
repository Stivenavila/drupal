import type { Meta, StoryObj } from '@storybook/react'
import { CardMap as CardMapJ } from './CardMap'

const meta: Meta<typeof CardMapJ> = {
  title: 'Molecules/Card/CardMap',
  component: CardMapJ,
}

export default meta

type Story = StoryObj<typeof CardMapJ>

export const CardMap: Story = {
  args: {
    title: 'Colegio test Miraflores',
    link: {
      url: {
        url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
      },
    },
  },
}
