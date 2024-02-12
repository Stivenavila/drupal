import { Button } from '@/components/atoms/Button/Button'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { TabsTable, TabsTableProps } from '@/components/molecules/Tabs/TabsTable'
import {
  CardBooking,
  CardBookingProps,
} from '@/components/molecules/cards/CardBooking/CardBooking'
import { CardMap, CardMapProps } from '@/components/molecules/cards/CardMap/CardMap'
import {
  CardServices,
  CardServicesProps,
} from '@/components/molecules/cards/CardServices/CardServices'
import {
  CarouselImages,
  CarouselImagesProps,
} from '@/components/organisms/Carousel/CarouselImages'
import {
  SectionCifras,
  SectionCifrasProps,
} from '@/components/organisms/Sections/SectionCifras/SectionCifras'
import {
  SectionPlan,
  SectionPlanProps,
} from '@/components/organisms/Sections/SectionPlan/SectionPlan'
import { IComponenteTitle, ITextBody, TButton } from 'common/interfaces'
import { GridList } from 'common/utils/Grid'
export interface NodeAccommodationProps {
  title: string
  subTitle: string
  carruselImages: CarouselImagesProps['carruselImages']
  lodgingCard: Omit<CardBookingProps, 'title'>
  lodgingDescription: ITextBody
  lodgingInfo: { button: TButton; textHtml: ITextBody }
  lodgingInfoLegal: ITextBody
  lodgingMapCard: CardMapProps
  lodgingPayAttention: ITextBody
  lodgingRates: TabsTableProps //tabla
  lodgingServices: { itemsIcons: CardServicesProps[]; textHtml: ITextBody; title: string }
  sectionCards: SectionPlanProps
  sectionCifras: { itemsCifrasTurismo: SectionCifrasProps['itemsCifras'] }
  lodgingSchedules: {
    checkIn: string
    checkOut: string
    componenteTitle: IComponenteTitle
    textHtml: ITextBody
  }
}

export const NodeAccommodation = ({
  title,
  subTitle,
  carruselImages,
  lodgingDescription,
  lodgingServices,
  lodgingCard,
  lodgingInfo,
  lodgingRates,
  lodgingInfoLegal,
  sectionCards,
  lodgingSchedules,
  lodgingMapCard,
  lodgingPayAttention,
  sectionCifras,
}: NodeAccommodationProps) => {
  return (
    <Text className='!px-0' container='large'>
      <Text container='large'>
        <Heading className='mt-16 mb-2' level={1}>
          {title}
        </Heading>
        <Paragraph color='primary' className='mb-10 text-xs'>
          {subTitle}
        </Paragraph>
      </Text>
      <Text className='md:flex gap-[46px] '>
        <CarouselImages
          className='max-w-[630px] overflow-hidden'
          carruselImages={carruselImages}
        />
        <CardBooking
          className='basis-[388px] mt-8 md:mt-0 mb-8 md:mb-0 mx-8 md:mx-0'
          title={title}
          {...lodgingCard}
        />
      </Text>
      <hr className='border-t-primary max-w-[630px] md:mt-14 mx-8 md:mx-0' />
      <Text
        className='max-w-[630px] mt-9 mb-10 mx-8 md:mx-0'
        color='primary'
        component='body'
      >
        {lodgingDescription.processed}
      </Text>
      <hr className='border-t-primary max-w-[630px] mx-8 md:mx-0' />
      {/* Services */}
      <Text className='max-w-[630px] mt-8 mb-8 mx-8 md:mx-0'>
        <Heading level={3} className=' mb-10'>
          {lodgingServices.title}
        </Heading>
        <GridList
          className='grid grid-cols-2 md:grid-cols-3 '
          items={lodgingServices.itemsIcons}
          renderItem={props => <CardServices direction='horizontal' {...props} />}
        />
        <Text color='primary' component='body' className='mt-10 *:text-xs'>
          {lodgingServices.textHtml.processed}
        </Text>
      </Text>
      {/* date */}
      <hr className=' border-t-primary max-w-[630px] mb-6 mx-8 md:mx-0' />
      <Text className='max-w-[630px] mb-8 mx-8 md:mx-0'>
        <Heading level={3}>{lodgingSchedules.componenteTitle.title}</Heading>
        <Paragraph color='primary'>
          {lodgingSchedules.componenteTitle.pSubtitle}
        </Paragraph>
        <Text className='flex flex-wrap items-center gap-8 mt-7'>
          <Text className='text-xs font-semibold' color='primary' component='span'>
            {lodgingSchedules.checkIn}
          </Text>
          <Text className='text-xs font-semibold' color='primary' component='span'>
            {lodgingSchedules.checkOut}
          </Text>
          <Text className='text-xs font-semibold' color='primary' component='body'>
            {lodgingSchedules.textHtml.processed}
          </Text>
        </Text>
      </Text>
      {/* Table */}
      <hr className=' border-t-primary max-w-[630px] mb-6 mx-8 md:mx-0' />
      <Text className='max-w-[630px] mb-8 mx-8 md:mx-0'>
        <TabsTable className='overflow-x-auto' {...lodgingRates} />
      </Text>
      <hr className=' border-t-primary max-w-[630px] mb-6' />
      <Text className='max-w-[630px] mx-8 md:mx-0' color='primary' component='body'>
        {lodgingPayAttention.processed}
      </Text>
      <hr className='border-t-primary max-w-[630px] mt-10 mx-8 md:mx-0' />
      <Text className='md:flex md:items-end md:gap-8 mx-8 md:mx-0'>
        <Text>
          <Text
            className='max-w-[630px] mb-11 bg-white *:text-10 px-5 py-4 mt-7'
            color='primary'
            component='body'
          >
            {lodgingInfoLegal.processed}
          </Text>
          <SectionCifras itemsCifras={sectionCifras.itemsCifrasTurismo} />
        </Text>
        <CardMap className='basis-[398px] mt-8 md:mt-0' {...lodgingMapCard} />
      </Text>
      <SectionPlan className='mt-8 md:mt-32' {...sectionCards} />
      <Text
        className='rounded px-8 md:px-[73px] flex items-end gap-3 bg-white mx-8 md:mx-0 py-11 mb-28 flex-wrap'
        style={{ boxShadow: '0px 9px 10px 0px rgba(0, 60, 106, 0.07)' }}
      >
        <Text color='primary' component='body'>
          {lodgingInfo.textHtml.processed}
        </Text>
        <Button variant='secondary' size='large' href={lodgingInfo.button.url.url}>
          {lodgingInfo.button.url.title}
        </Button>
      </Text>
    </Text>
  )
}
