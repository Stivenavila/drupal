import type { Meta, StoryObj } from '@storybook/react'
import { BreakerCardIcon as BreakerCardIconJ } from './BreakerCardIcon'
import { dataTabs } from '../../../common/seed/components'

const meta: Meta<typeof BreakerCardIconJ> = {
  title: 'Molecules/Breaker/BreakerCardIcon',
  component: BreakerCardIconJ,
}

export default meta

type Story = StoryObj<typeof BreakerCardIconJ>

export const BreakerCardIcon: Story = {
  args: {
    title: dataTabs.tabsTitle,
    textHtml: { processed: '<p>Tempor nulla culpa irure officia.</p>' },
    itemsCard: dataTabs.tabs[0].itemsCard,
  },
}
