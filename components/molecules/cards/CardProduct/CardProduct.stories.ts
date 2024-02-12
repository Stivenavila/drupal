import type { Meta, StoryObj } from '@storybook/react'
import { CardProduct as CardProductJ } from './CardProduct'
import { dataTabs } from '../../../../common/seed/components'

const meta: Meta<typeof CardProductJ> = {
  title: 'Molecules/Card/CardProduct',
  component: CardProductJ,
}

export default meta

type Story = StoryObj<typeof CardProductJ>

export const CardProduct: Story = {
  args: {
    componenteTitle: {
      title: 'ZagaMotos',
      pSubtitle: 'Descuentos en vehículos',
    },
    image: {
      mediaImage: {
        url: 'https://picsum.photos/111/156',
        title: null,
        alt: 'Banner1',
      },
    },
    tag: '5%',
    link: {
      url: '#',
    },
  },
}
