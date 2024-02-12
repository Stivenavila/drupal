import type { Meta, StoryObj } from '@storybook/react'
import { SectionPlan as SectionPlanJ } from './SectionPlan'
import { dataTabs } from '../../../../common/seed/components'

const meta: Meta<typeof SectionPlanJ> = {
  title: 'Organisms/Sections/SectionPlan',
  component: SectionPlanJ,
}

export default meta

type Story = StoryObj<typeof SectionPlanJ>

export const SectionPlan: Story = {
  args: {
    itemsCardPlan: [
      {
        componenteTitle: {
          title: 'Curso de Introducción a la Vela',
          pSubtitle:
            'De la mano de un experto hasta conseguir una navegación efectiva y divertida.',
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
      {
        componenteTitle: {
          title: 'Curso de Introducción a la Vela',
          pSubtitle:
            'De la mano de un experto hasta conseguir una navegación efectiva y divertida.',
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
    ],
    button: {
      url: {
        title: 'Consúltalo aquí',
        url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
      },
    },
    componenteTitle: {
      pSubtitle: 'Otro subtítulo',
      title: 'Otro título',
    },
    behaviors: {
      background_behavior: {
        background_position: 'center',
        select_color: '#D9D9D940',
      },
      margin_behavior: {
        margin_bottom: 'none',
        margin_left: 'none',
        margin_right: 'none',
        margin_top: 'none',
      },
      padding_behavior: {
        padding_bottom: 'large',
        padding_left: 'none',
        padding_right: 'none',
        padding_top: 'large',
      },
    },
  },
}
