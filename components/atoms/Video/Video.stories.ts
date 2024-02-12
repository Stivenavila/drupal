import type { Meta, StoryObj } from '@storybook/react'
import { Video as VideoJ } from './Video'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof VideoJ> = {
  title: 'Atoms/Media/Video',
  component: VideoJ,
}

export default meta
type Story = StoryObj<typeof VideoJ>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Video: Story = {
  args: {
    src: 'iWCenGIIBVE',
    type: 'youtube',
    width: 640,
    height: 360,
    controls: true,
  },
}
