import type { Meta, StoryObj } from '@storybook/react'
import { SectionBreakerSubscribe as SectionBreakerSubscribeJ } from './SectionBreakerSubscribe'

const meta: Meta<typeof SectionBreakerSubscribeJ> = {
  title: 'Organisms/Sections/SectionBreakerSubscribe',
  component: SectionBreakerSubscribeJ,
}

export default meta

type Story = StoryObj<typeof SectionBreakerSubscribeJ>

export const SectionBreakerSubscribe: Story = {
  args: {
    sectionTitle: 'Title Sections Subscribe',
    sectionSubtitle: 'SubTitle Sections Subscribe',
    image: {
      mediaImage: {
        url: 'https://picsum.photos/485/292',
        alt: 'images',
      },
    },
    imageMobile: {
      mediaImage: {
        url: 'https://picsum.photos/485/292',
        alt: 'images',
      },
    },
    componenteTitle: {
      pSubtitle: 'Conoce más del vencimiento de tu cuota monetaría',
      title: '¿SABÍAS QUE TU CUOTA MONETARÍA PUEDE VENCER?',
    },
    componentButtons: {
      buttons: [
        {
          url: {
            url: 'https://jsonviewer.stack.hu/',
            title: 'Suscríbete',
          },
        },
      ],
    },
    behaviors: {
      background_behavior: {
        background_position: 'center',
        background_style: 'image',
        select_color: 'none',
        image: {
          url: 'https://api.ddev.site/sites/default/files/2023-12/background.png',
          alt: 'background',
        },
      },
      margin_behavior: {
        margin_bottom: 'none',
        margin_left: 'none',
        margin_right: 'none',
        margin_top: 'none',
      },
      padding_behavior: {
        padding_bottom: 'large',
        padding_left: 'none',
        padding_right: 'none',
        padding_top: 'large',
      },
    },
  },
}
