import type { Meta, StoryObj } from '@storybook/react'
import { TabsVideo as TabsVideoJ } from './TabsVideo'
import { dataTabsInfo, dataVideo } from '../../../common/seed/components'

const meta: Meta<typeof TabsVideoJ> = {
    title: 'Molecules/Tabs/TabsVideo',
    component: TabsVideoJ,
}

export default meta

type Story = StoryObj<typeof TabsVideoJ>

export const TabsVideo: Story = {
    args: {
        componenteTitle: {
            pSubtitle: 'Conoce más del vencimiento de tu cuota monetaría',
            title: '¿SABÍAS QUE TU CUOTA MONETARÍA PUEDE VENCER?',
        },
        itemsTabVideo: dataVideo,
    },
}
