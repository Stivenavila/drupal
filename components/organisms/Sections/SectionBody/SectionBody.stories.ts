import type { Meta, StoryObj } from '@storybook/react'
import { SectionBody as SectionBodyJ } from './SectionBody'

const meta: Meta<typeof SectionBodyJ> = {
  title: 'Organisms/Sections/SectionBody',
  component: SectionBodyJ,
}

export default meta

type Story = StoryObj<typeof SectionBodyJ>

export const SectionBody: Story = {
  args: {
    background: '#003da5',
    color: 'white',
    textHtml: {
      processed:
        '<div><h2>¿SABÍAS QUE TU CUOTA MONETARÍA PUEDE VENCER?</h2><p>Conoce más del vencimiento de tu cuota monetaría</p></div>',
    },
    behaviors: {
      background_behavior: {
        background_position: 'center',
        select_color: 'blue',
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
