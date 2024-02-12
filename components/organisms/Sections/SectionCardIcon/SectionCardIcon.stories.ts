import type { Meta, StoryObj } from '@storybook/react'
import { SectionCardIcon as SectionCardIconJ } from './SectionCardIcon'

const meta: Meta<typeof SectionCardIconJ> = {
  title: 'Organisms/Sections/SectionCardIcon',
  component: SectionCardIconJ,
}

export default meta

type Story = StoryObj<typeof SectionCardIconJ>

export const SectionCardIcon: Story = {
  args: {
    title: 'Relacionamiento con nuestros grupos de interés',
    textHtml: {
      processed:
        '<p>​​​​​​​En test trabajamos para mantener relaciones sólidas y duraderas con nuestros grupos de interés, para crecer de la mano con ellos, entender sus expectativas y atender sus necesidades. Las relaciones que establecemos con ellos están encaminadas a la construcción de los vínculos de confianza, privilegiando siempre el bien común sobre el particular y orientando nuestros programas y servicios hacia la satisfacción de sus necesidades en el marco de un comportamiento socialmente responsable. Esta relación de confianza y pertenencia se ve reflejada en los resultados de nuestro Índice Global de Reputación (IGR), que muestra la percepción de nuestros 11 grupos de interés frente a nuestro comportamiento corporativo y el cumplimiento de sus expectativas que se traduce en la reputación de la organización. El resultado de la tercera medición fue de 858 puntos sobre una escala de 1.000, lo cual nos posiciona como una de las empresas con mayor reputación en el país, que va más allá de la prestación de servicios con impacto social y se convierte en vínculo emocional con nuestros grupos de interés.</p>',
    },
    itemsIcons: [
      {
        title: 'Gestionar subsidios',
        icon: {
          mediaImage1: {
            url: 'https://api.ddev.site/sites/default/files/2023-12/dinero.svg',
            alt: 'dinero',
          },
        },
      },
      {
        title: 'Gestionar subsidios',
        icon: {
          mediaImage1: {
            url: 'https://api.ddev.site/sites/default/files/2023-12/dinero.svg',
            alt: 'dinero',
          },
        },
      },
      {
        title: 'Gestionar subsidios',
        icon: {
          mediaImage1: {
            url: 'https://api.ddev.site/sites/default/files/2023-12/dinero.svg',
            alt: 'dinero',
          },
        },
      },
      {
        title: 'Gestionar subsidios',
        icon: {
          mediaImage1: {
            url: 'https://api.ddev.site/sites/default/files/2023-12/dinero.svg',
            alt: 'dinero',
          },
        },
      },
    ],
  },
}
