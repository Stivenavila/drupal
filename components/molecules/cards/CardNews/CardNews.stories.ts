import type { Meta, StoryObj } from '@storybook/react'
import { CardNews as CardNewsJ } from './CardNews'

const meta: Meta<typeof CardNewsJ> = {
  title: 'Molecules/Card/CardNews',
  component: CardNewsJ,
}

export default meta

type Story = StoryObj<typeof CardNewsJ>

export const CardNews: Story = {
  args: {
    created: {
      timestamp: 1703619010,
    },
    title: 'test formará a 40 comerciantes del centro de Cali',
    newsImage: {
      mediaImage: {
        url: 'https://picsum.photos/160/236',
        alt: 'banner noticias',
      },
    },
    path: '#',
  },
}
