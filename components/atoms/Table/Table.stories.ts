import type { Meta, StoryObj } from '@storybook/react'
import { Table as TableJ } from './index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TableJ> = {
  title: 'Atoms/Table',
  component: TableJ,
  // parameters: {
  //   layout: 'centered',
  // },
}

export default meta
type Story = StoryObj<typeof TableJ>

export const Table: Story = {
  args: {
    rows: [
      { id: 1, name: 'Ejemplo 1', age: 25 },
      { id: 2, name: 'Ejemplo 2', age: 30 },
      { id: 3, name: 'Ejemplo 3', age: 28 },
    ]
  },
}
