import type { Meta, StoryObj } from '@storybook/react'
import { CardCifrasCollection as CardCifrasCollectionJ } from './CardCifrasCollection'

const meta: Meta<typeof CardCifrasCollectionJ> = {
  title: 'Molecules/Card/CardCifrasCollection',
  component: CardCifrasCollectionJ,
}

export default meta

type Story = StoryObj<typeof CardCifrasCollectionJ>

export const CardCifrasCollection: Story = {
  args: {
    itemsCifras: [
      {
        title: 'Empresas afiliadas',
        eyebrow: '51.572',
        icon: {
          mediaImage1: {
            url: 'https://api.ddev.site/sites/default/files/2023-12/close%20up%20of%20cardboard%20box_1.svg',
            alt: 'box',
          },
        },
      },
      {
        title: 'trabajadores afiliados(das)',
        eyebrow: '668.901',
        icon: {
          mediaImage1: {
            url: 'https://api.ddev.site/sites/default/files/2023-12/side%20view%20of%20brown%20leather%20briefcase_1.svg',
            alt: 'portafolio',
          },
        },
      },
      {
        title: 'Beneficiarios',
        eyebrow: '643.010',
        icon: {
          mediaImage1: {
            url: 'https://api.ddev.site/sites/default/files/2023-12/rocket.svg',
            alt: 'asasa',
          },
        },
      },
      {
        title: 'Población afiliada',
        eyebrow: '1.311.911',
        icon: {
          mediaImage1: {
            url: 'https://api.ddev.site/sites/default/files/2023-12/family.svg',
            alt: 'family',
          },
        },
      },
    ],
  },
}
