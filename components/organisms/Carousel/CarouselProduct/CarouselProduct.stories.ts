import type { Meta, StoryObj } from '@storybook/react'
import { CarouselProduct as CarouselProductJ } from '.'

const meta: Meta<typeof CarouselProductJ> = {
    title: 'Organisms/Carousel/CarouselProduct',
    component: CarouselProductJ,
}

export default meta

type Story = StoryObj<typeof CarouselProductJ>

export const CarouselProduct: Story = {
    args: {

        itemsCardsAgreementsFeatures: [
            {
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
            }, {
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
        ],
        componenteTitle: {
            pSubtitle: 'Otro subtítulo',
            title: 'Otro título',
            id: '2',
        },
        button: {
            id: 'b47473b3-a132-4f74-ae08-1980fc2911b9',
            url: {
                title: 'Consúltalo aquí',
                url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
            },
        },
        color: 'primary',
        behaviors: {
            background_behavior: {
                background_position: 'center',
                select_color: '#D9D9D940',
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
