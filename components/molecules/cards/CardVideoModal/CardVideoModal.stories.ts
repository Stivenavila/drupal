import type { Meta, StoryObj } from '@storybook/react'
import { CardVideoModal as CardVideoModalJ } from './CardVideoModal'

const meta: Meta<typeof CardVideoModalJ> = {
    title: 'Molecules/Card/CardVideoModal',
    component: CardVideoModalJ,
}

export default meta

type Story = StoryObj<typeof CardVideoModalJ>

export const CardVideoModal: Story = {
    args: {
        title: 'Conciertos',
        image: {
            mediaImage: {
                url: 'https://picsum.photos/485/292',
                alt: 'image',
            }
        },
        url: '#',
        path: '#',
    },
}
