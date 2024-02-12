import type { Meta, StoryObj } from '@storybook/react'
import { CardHelp as CardHelpJ } from './CardHelp'

const meta: Meta<typeof CardHelpJ> = {
  title: 'Molecules/Card/CardHelp',
  component: CardHelpJ,
}

export default meta

type Story = StoryObj<typeof CardHelpJ>

export const CardHelp: Story = {
  args: {
    link: { url: { url: '#' } },
    title: 'Colegio test Miraflores',
  },
}
