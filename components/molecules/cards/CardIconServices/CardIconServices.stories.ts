import type { Meta, StoryObj } from '@storybook/react'
import { CardIconServices as CardIconServicesJ } from './CardIconServices'
import { dataTabs } from '../../../../common/seed/components'

const meta: Meta<typeof CardIconServicesJ> = {
  title: 'Molecules/Card/CardIconServices',
  component: CardIconServicesJ,
}

export default meta

type Story = StoryObj<typeof CardIconServicesJ>

export const CardIconServices: Story = {
  args: { ...dataTabs.tabs[0].itemsCard[0] },
}
