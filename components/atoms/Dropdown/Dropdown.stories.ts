import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { menuData } from '../../../common/seed/Menus'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Dropdown> = {
  title: 'Atoms/DropdownButton',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Dropdown>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    options: menuData,
    label: 'seleccione opción',
    color: 'white',
    backgroundColor: 'primary',
  },
}
