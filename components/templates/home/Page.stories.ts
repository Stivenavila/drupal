import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'

import { Page } from './Page'
import { menuData } from '../../../common/seed/Menus'

const meta: Meta<typeof Page> = {
  title: 'Templates/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Page>

export const PageExample: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    })
    await userEvent.click(loginButton)
  },
  args: {
    menu: menuData,
  },
}
