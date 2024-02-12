import type { Meta, StoryObj } from '@storybook/react'
import { CardDetails as CardDetailsJ } from './CardDetails'

const meta: Meta<typeof CardDetailsJ> = {
  title: 'Molecules/Card/CardDetails',
  component: CardDetailsJ,
}

export default meta

type Story = StoryObj<typeof CardDetailsJ>

export const CardDetails: Story = {
  args: {
    title: 'Colegio test Miraflores',
    items: [
      {
        componenteTitle: {
          pSubtitle: 'Conoce más del vencimiento de tu cuota monetaría',
          title: '¿SABÍAS QUE TU CUOTA MONETARÍA PUEDE VENCER?',
          id: '1', // Agrega el id correspondiente según la definición de IComponenteTitle
        },
      },
      {
        componenteTitle: {
          pSubtitle: 'Otro subtítulo',
          title: 'Otro título',
          id: '2',
        },
      },
    ],
  },
}
