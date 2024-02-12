import type { Meta, StoryObj } from '@storybook/react'
import { Accessibility as AccessibilityJ } from './Accessibility'

const meta: Meta<typeof AccessibilityJ> = {
  title: 'Molecules/Button/Accessibility',
  component: AccessibilityJ,
}

export default meta

type Story = StoryObj<typeof AccessibilityJ>

export const Accessibility: Story = {
  args: {
    items:
      [{
        icon: {
          mediaImage1: {
            url: 'https://picsum.photos/37/37',
            alt: 'afiliaciones',
          },
        },
      },
      {
        link: {
          url: 'https://console.platform.sh/esinergiaco/25lkh7ad6hcei',
        },
        icon: {
          mediaImage1: {
            url: 'https://picsum.photos/30/39',
            alt: 'afiliaciones',
          },
        },
      }, {
        link: {
          url: 'https://console.platform.sh/esinergiaco/25lkh7ad6hcei',
        },
        icon: {
          mediaImage1: {
            url: 'https://picsum.photos/54/54',
            alt: 'afiliaciones',
          },
        },
      }]
  },
}
