import type { Meta, StoryObj } from '@storybook/react'
import { Paragraph as ParagraphJ } from './Paragraph'

const meta: Meta<typeof ParagraphJ> = {
  title: 'Atoms/Text/Paragraph',
  component: ParagraphJ,
}
export default meta

type Story = StoryObj<typeof ParagraphJ>

export const Paragraph: Story = {
  args: {
    children: `Paragraph Text`,
  },
}
