import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'
import { menuData } from '../../../../common/seed/Menus'

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Footer>

export const SiteFooter: Story = {
  args: {
    menus: {
      interest: menuData,
      policies: menuData,
    },
  },
}
