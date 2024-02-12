import type { Meta, StoryObj } from '@storybook/react'
import { HeroImage as HeroImageJ } from './HeroImage'

const meta: Meta<typeof HeroImageJ> = {
  title: 'Molecules/Hero/HeroImage',
  component: HeroImageJ,
}

export default meta

type Story = StoryObj<typeof HeroImageJ>

export const HeroImage: Story = {
  args: {
    mediaImage: {
      url: 'https://picsum.photos/1272/424',
      title: null,
      alt: 'Banner1',
    },
  },
}
