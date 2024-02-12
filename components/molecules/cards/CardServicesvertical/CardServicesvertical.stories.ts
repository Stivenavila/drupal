import type { Meta, StoryObj } from '@storybook/react'
import { CardServicesvertical as CardServicesverticalJ } from './CardServicesvertical'
import { dataTabs } from '../../../../common/seed/components'

const meta: Meta<typeof CardServicesverticalJ> = {
  title: 'Molecules/Card/CardServicesvertical',
  component: CardServicesverticalJ,
}

export default meta

type Story = StoryObj<typeof CardServicesverticalJ>

export const CardServicesvertical: Story = {
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
