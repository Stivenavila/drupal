import type { Meta, StoryObj } from '@storybook/react'
import { PreFooter } from './PreFooter'

const meta: Meta<typeof PreFooter> = {
  title: 'Organisms/PreFooter',
  component: PreFooter,

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof PreFooter>

export const SitePreFooter: Story = {}
