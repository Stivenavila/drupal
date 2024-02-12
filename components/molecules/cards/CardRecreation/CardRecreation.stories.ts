import type { Meta, StoryObj } from '@storybook/react'
import { CardRecreation as CardRecreationJ } from './CardRecreation'

const meta: Meta<typeof CardRecreationJ> = {
  title: 'Molecules/Card/CardRecreation',
  component: CardRecreationJ,
}

export default meta

type Story = StoryObj<typeof CardRecreationJ>

export const CardRecreation: Story = {
  args: {
    title: 'ALIANZAS CARTAGO',
    image: {
      mediaImage: {
        url: 'https://picsum.photos/268/190',
        title: null,
        alt: 'Banner1',
      },
    },
    path: '#',
  },
}
