import type { Meta, StoryObj } from '@storybook/react'
import { Tabs as TabsJ } from './Tabs'
import { dataTabs } from '../../../common/seed/components'

const meta: Meta<typeof TabsJ> = {
  title: 'Molecules/Tabs/Tabs',
  component: TabsJ,
}

export default meta

type Story = StoryObj<typeof TabsJ>

export const Tabs: Story = {
  args: { ...dataTabs },
}
