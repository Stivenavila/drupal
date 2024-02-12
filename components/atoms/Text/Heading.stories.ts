import type { Meta, StoryObj } from '@storybook/react'
import { Heading as HeadingJ } from './Heading'

const meta: Meta<typeof HeadingJ> = {
  title: 'Atoms/Text/Heading',
  component: HeadingJ,
  argTypes: {
    level: {
      control: {
        type: 'number',
        min: 1,
        max: 6,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof HeadingJ>

export const Heading: Story = {
  args: {
    children: `Heading Text`,
    level: 1,
    url: '#',
  },
}
