import { Heading } from '@/components/atoms/Text/Heading'
import { Text } from '@/components/atoms/Text/Text'
import { BreakerSubscribe } from '@/components/molecules/Breaker/BreakerSubscribe'
import { TabsInfo, TabsInfoProps } from '@/components/molecules/Tabs/TabsInfo'
import { CarouselImageVivienda } from '@/components/organisms/Carousel/CarouselImageVivienda'
import {
  CarouselVivienda,
  CarouselViviendaProps,
} from '@/components/organisms/Carousel/CarouselVivienda'
import { SectionServices } from '@/components/organisms/Sections/SectionServices/SectionServices'
import { IBreaker, ICardItems, ICifras, ITextBody, TMetaTag } from 'common/interfaces'
import React from 'react'

export interface NodeHousingProps {
  __typename: string
  id: string
  title: string
  metatag: TMetaTag[]
  livingPlaceSubtitle: ITextBody
  livingPlacePrice: { price: string; subsidyApplies: boolean }
  livingPlaceBreaker: { componentBreaker: IBreaker }
  livingPlaceCarrusel: CarouselViviendaProps
  tabsInfo: TabsInfoProps
  livingPlaceServices: { title: string; itemsServices: ICifras[] }
  livingPlaceGallery: { housingMainCard: ICardItems; housingMainSlider: { items: [] } }
}
export const NodeHousing = ({
  title,
  tabsInfo,
  livingPlacePrice,
  livingPlaceSubtitle,
  livingPlaceCarrusel,
  livingPlaceGallery,
  livingPlaceBreaker,
  livingPlaceServices,
}: NodeHousingProps) => {
  return (
    <Text className='mt-14'>
      <Text
        container='large'
        className='mb-8 md:flex md:justify-between md:items-end md:mb-0'
      >
        <div className='mb-8 md:mb-0'>
          <Heading className='mb-0 h2' color='body' level={1}>
            {title}
          </Heading>
          <Text component='body' className='*:font-light'>
            {livingPlaceSubtitle.processed}
          </Text>
        </div>
        <div>
          <Heading className='mb-0 h2' level={5}>
            <span className='font-medium'>Desde:</span> ${livingPlacePrice.price}
          </Heading>
          <Text
            className='block font-light md:text-right'
            component='span'
            color='primary'
          >
            {livingPlacePrice.subsidyApplies && 'Aplica subsidio'}
          </Text>
        </div>
      </Text>
      <CarouselImageVivienda
        className='mb-16 md:mb-28'
        items={livingPlaceGallery.housingMainSlider.items}
        card={livingPlaceGallery.housingMainCard}
      />
      <Text container='large'>
        <TabsInfo className='mb-16 md:mb-28' itemsInfo={tabsInfo?.itemsInfo} />
      </Text>
      <SectionServices
        className='mb-16 md:mb-28'
        itemsServices={livingPlaceServices.itemsServices}
        title={livingPlaceServices.title}
      />
      <CarouselVivienda
        color='white'
        background='/images/background.png'
        className='pb-10 mb-16 pt-11 md:pt-20 md:pb-28 md:mb-28'
        behaviors={livingPlaceCarrusel.behaviors}
        carruselVivienda={livingPlaceCarrusel.carruselVivienda}
        componenteTitle={livingPlaceCarrusel.componenteTitle}
      />
      <BreakerSubscribe
        className='mb-16 md:mb-28'
        {...livingPlaceBreaker.componentBreaker}
      />
    </Text>
  )
}
