import type { Meta, StoryObj } from '@storybook/react'
import { SectionCifras as SectionCifrasJ } from './SectionCifras'

const meta: Meta<typeof SectionCifrasJ> = {
  title: 'Organisms/Sections/SectionCifras',
  component: SectionCifrasJ,
}

export default meta

type Story = StoryObj<typeof SectionCifrasJ>

export const SectionCifras: Story = {
  args: {
    itemsCifras: [
      {
        componenteTitle: {
          title: 'Ubicación',
          pSubtitle: 'Via Madroñal Palermo, Calima Valle del Cauca',
        },
        color: 'celeste',
        icon: {
          mediaImage1: {
            url: 'https://api.ddev.site/sites/default/files/2023-12/Ub%C3%ADcanos.svg',
            alt: 'asasa',
          },
        },
      },
      {
        componenteTitle: {
          title: 'Teléfonos',
          pSubtitle: '602 4859999 Opc 2 - 310 3157073',
        },
        color: 'celeste',
        icon: {
          mediaImage1: {
            url: 'https://api.ddev.site/sites/default/files/2023-12/llamanos.svg',
            alt: 'asasa',
          },
        },
      },
    ],
  },
}
