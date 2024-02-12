import type { Meta, StoryObj } from '@storybook/react'
import { CardIcon as CardIconJ } from './CardIcon'
import { dataTabs } from '../../../../common/seed/components'

const meta: Meta<typeof CardIconJ> = {
  title: 'Molecules/Card/CardIcon',
  component: CardIconJ,
}

export default meta

type Story = StoryObj<typeof CardIconJ>

export const CardIcon: Story = {
  args: { ...dataTabs.tabs[0].itemsCard[0] },
}
