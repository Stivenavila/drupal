import { Button } from '@/components/atoms/Button/Button'
import { Heading } from '@/components/atoms/Text/Heading'
import { Text } from '@/components/atoms/Text/Text'
import { TabsInfo, TabsInfoProps } from '@/components/molecules/Tabs/TabsInfo'
import { CardCifrasTitleProps } from '@/components/molecules/cards/CardCifrasTitle/CardCifrasTitle'
import { CarouselImageRecreation } from '@/components/organisms/Carousel/CarouselImageRecreation'
import { CarouselImagesProps } from '@/components/organisms/Carousel/CarouselImages'
import { SectionBody } from '@/components/organisms/Sections'
import { SectionCifras } from '@/components/organisms/Sections/SectionCifras/SectionCifras'
import {
  SectionPlan,
  SectionPlanProps,
} from '@/components/organisms/Sections/SectionPlan/SectionPlan'
import { ITextBody, TButton, TMetaTag } from 'common/interfaces'

export interface NodeRecreationProps {
  title: string
  carruselImages: CarouselImagesProps['carruselImages']
  button: TButton
  metatag: TMetaTag[]
  sectionCards: SectionPlanProps
  sectionCifras: { itemsCifrasTurismo: CardCifrasTitleProps[] }
  tabsInfo: TabsInfoProps
  textHtml: ITextBody
}

export const NodeRecreation = ({
  title,
  button,
  tabsInfo,
  sectionCards,
  sectionCifras,
  textHtml,
  carruselImages,
}: NodeRecreationProps) => {
  return (
    <Text className='mt-14'>
      <Text className='mb-8 md:mb-11 md:flex md:justify-between md:items-end mx-8 md:mx-auto max-w-5xl '>
        <Heading className='max-w-lg mb-8 md:m-0' level={1}>
          {title}
        </Heading>
        <Button variant='secondary' size='large' href={button.url.url}>
          {button.url.title}
        </Button>
      </Text>
      <CarouselImageRecreation items={carruselImages} />
      <Text container='large' className=' mt-8 md:mt-32 mb-16 md:mb-28'>
        <TabsInfo itemsInfo={tabsInfo.itemsInfo} />
      </Text>
      <SectionBody className='' background='primary' color='white' textHtml={textHtml} />
      <SectionCifras
        className='relative -mt-14 z-1'
        itemsCifras={sectionCifras.itemsCifrasTurismo}
      />
      <Text className='mt-8 mb-16 md:mt-40 md:mb-52' container='large'>
        <SectionPlan {...sectionCards} />
      </Text>
    </Text>
  )
}
