import type { Meta, StoryObj } from '@storybook/react'
import { CardPlan as CardPlanJ } from './CardPlan'

const meta: Meta<typeof CardPlanJ> = {
  title: 'Molecules/Card/CardPlan',
  component: CardPlanJ,
}

export default meta

type Story = StoryObj<typeof CardPlanJ>

export const CardPlan: Story = {
  args: {
    componenteTitle: {
      title: 'Curso de Introducción a la Vela',
      pSubtitle: 'De la mano de un experto hasta conseguir una navegación efectiva y divertida.',
    },
    image: {
      mediaImage: {
        url: 'https://picsum.photos/200/300',
        title: null,
        alt: 'Banner1',
      },
    },
    url: '#',
  },
}
