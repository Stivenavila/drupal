import type { Meta, StoryObj } from '@storybook/react'
import { CardServices as CardServicesJ } from './CardServices'
import { dataTabs } from '../../../../common/seed/components'

const meta: Meta<typeof CardServicesJ> = {
  title: 'Molecules/Card/CardServices',
  component: CardServicesJ,
}

export default meta

type Story = StoryObj<typeof CardServicesJ>

export const CardServices: Story = {
  args: {
    title: 'Gestionar subsidios',
    icon: {
      mediaImage1: {
        url: 'https://api.ddev.site/sites/default/files/2023-12/dinero.svg',
        alt: 'dinero',
      },
    },
  },
}
