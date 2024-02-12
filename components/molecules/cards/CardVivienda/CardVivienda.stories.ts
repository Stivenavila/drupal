import type { Meta, StoryObj } from '@storybook/react'
import { CardVivienda as CardViviendaJ } from './CardVivienda'
import { dataTabsInfo } from '../../../../common/seed/components'

const meta: Meta<typeof CardViviendaJ> = {
  title: 'Molecules/Card/CardVivienda',
  component: CardViviendaJ,
}

export default meta

type Story = StoryObj<typeof CardViviendaJ>

export const CardVivienda: Story = {
  args: {
    title: 'Colegio test Miraflores',
    livingPlaceLogo: {
      mediaImage: {
        url: 'https://picsum.photos/277/281',
        alt: 'images',
      },
    },
    livingPlaceSubtitle: {
      processed: 'Proyecto de <br> apartamentos desde: <strong>$189.750.000</strong>',
    },
    livingPlacePrice: {
      price: 187000000,
      subsidyApplies: true,
    },
    button: {
      url: {
        title: 'Más información',
        url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
      },
    },
    livingPlaceTabs: { tabsInfo: dataTabsInfo },
  },
}
