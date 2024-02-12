import type { Meta, StoryObj } from '@storybook/react'
import { SectionsCardIcons as SectionsCardIconsJ } from './SectionsCardIcons'
import { dataTabs } from '../../../../common/seed/components'

const meta: Meta<typeof SectionsCardIconsJ> = {
  title: 'Organisms/Sections/SectionsCardIcons',
  component: SectionsCardIconsJ,
}

export default meta

type Story = StoryObj<typeof SectionsCardIconsJ>

export const SectionsCardIcons: Story = {
  args: {
    sectionTitle: dataTabs.tabsTitle,
    itemsCard: dataTabs.tabs[0].itemsCard,
  },
}
