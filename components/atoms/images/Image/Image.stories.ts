import type { Meta, StoryObj } from '@storybook/react'
import { Image as ImageJ } from './Image'
import { FC } from 'react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ImageJ> = {
  title: 'Atoms/Media/Image',
  component: ImageJ as FC,
  // tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ImageJ>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Image: Story = {
  args: {
    src: 'https://www.test.com.co/sites/default/files/styles/hero_tall_1x/public/2023-06/Banner%20ajustado.jpg?h=61ca0bd2&itok=MmgZkAQ-',
    width: 100,
    height: 100,
    objectFit: 'contain',
  },
}
