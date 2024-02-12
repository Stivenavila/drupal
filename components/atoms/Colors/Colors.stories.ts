import type { Meta, StoryObj } from '@storybook/react'
import { Colors as ColorsJ } from './Colors'

const meta: Meta<typeof ColorsJ> = {
  title: 'Atoms/Colors',
  component: ColorsJ,
}

export default meta
type Story = StoryObj<typeof ColorsJ>

export const Colors: Story = {}
