import type { Meta, StoryObj } from '@storybook/react'
import { TabsInfo as TabsInfoJ } from './TabsInfo'
import { dataTabsInfo } from '../../../common/seed/components'

const meta: Meta<typeof TabsInfoJ> = {
  title: 'Molecules/Tabs/TabsInfo',
  component: TabsInfoJ,
}

export default meta

type Story = StoryObj<typeof TabsInfoJ>

export const TabsInfo: Story = {
  args: {
    itemsInfo: dataTabsInfo,
  },
}
