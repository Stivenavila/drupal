import type { Meta, StoryObj } from '@storybook/react'
import { SectionLink as SectionLinkJ } from './SectionLink'
import { dataTabs } from '../../../../common/seed/components'

const meta: Meta<typeof SectionLinkJ> = {
  title: 'Organisms/Sections/SectionLink',
  component: SectionLinkJ,
}

export default meta

type Story = StoryObj<typeof SectionLinkJ>

export const SectionLink: Story = {
  args: {
    itemsCardsLink: [
      {
        componenteTitle: {
          pSubtitle: 'Conoce más del vencimiento de tu cuota monetaría',
          title: '¿SABÍAS QUE TU CUOTA MONETARÍA PUEDE VENCER?',
        },
        button: {
          url: {
            title: 'Consúltalo aquí',
            url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
          },
        },
        color: 'primary',
      },
      {
        componenteTitle: {
          pSubtitle: 'Conoce más del vencimiento de tu cuota monetaría',
          title: '¿SABÍAS QUE TU CUOTA MONETARÍA PUEDE VENCER?',
        },
        button: {
          url: {
            title: 'Consúltalo aquí',
            url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
          },
        },
        color: 'primary',
      },
    ],
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
