import type { Meta, StoryObj } from '@storybook/react'
import { SectionHelpCenter as SectionHelpCenterJ } from './SectionHelpCenter'
import { dataTabs } from '../../../../common/seed/components'

const meta: Meta<typeof SectionHelpCenterJ> = {
  title: 'Organisms/Sections/SectionHelpCenter',
  component: SectionHelpCenterJ,
}

export default meta

type Story = StoryObj<typeof SectionHelpCenterJ>

export const SectionHelpCenter: Story = {
  args: {
    itemsCardsHelp: dataTabs.tabs[0].itemsCard,
    button: {
      url: {
        title: 'Consúltalo aquí',
        url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
      },
    },
    componenteTitle: {
      pSubtitle: 'Otro subtítulo',
      title: 'Otro título',
      id: '2',
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
