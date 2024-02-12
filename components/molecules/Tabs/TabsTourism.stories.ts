import type { Meta, StoryObj } from '@storybook/react'
import { TabsTourism as TabsTourismJ } from './TabsTourism'
import { dataVideo } from '../../../common/seed/components'

const meta: Meta<typeof TabsTourismJ> = {
  title: 'Molecules/Tabs/TabsTourism',
  component: TabsTourismJ,
}

export default meta

type Story = StoryObj<typeof TabsTourismJ>

export const TabsTourism: Story = {
  args: {
    componenteTitle: {
      pSubtitle: 'Conoce más del vencimiento de tu cuota monetaría',
      title: '¿SABÍAS QUE TU CUOTA MONETARÍA PUEDE VENCER?',
    },
    enterprises: {
      "results": [
        {
          "title": "PASADÍA TERMALES DE SANTA ROSA",
          "path": "/es/node/29",
          "carruselImages": [
            {
              "mediaImage": {
                "url": "https://api.ddev.site/sites/default/files/2024-01/santa%20900%20rosa%20PORTAL%202.png",
                "alt": "Santa Rosa"
              }
            }
          ]
        }
      ]
    },
    persons: {
      "results": [
        {
          "title": "PASADÍA TERMALES DE SANTA ROSA",
          "path": "/es/node/29",
          "carruselImages": [
            {
              "mediaImage": {
                "url": 'https://picsum.photos/485/292',
                "alt": "Santa Rosa"
              }
            }
          ]
        }
      ]
    }
  },
}
