import React from 'react'
import { Breaker } from '@/components/molecules/Breaker/Breaker'
import { BreakerCardIcon } from '@/components/molecules/Breaker/BreakerCardIcon'
import { Tabs } from '@/components/molecules/Tabs/Tabs'
import { CardCifrasCollection } from '@/components/molecules/cards/CardCifrasCollection/CardCifrasCollection'
import {
  CarouselBanner,
  CarouselConvenio,
  CarouselNews,
} from '@/components/organisms/Carousel'
import {
  SectionBody,
  SectionBreakerSubscribe,
  SectionCardIcon,
  SectionHelpCenter,
  SectionLink,
  SectionsCardIcons,
} from '@/components/organisms/Sections'
import { CarouselVivienda } from '@/components/organisms/Carousel/CarouselVivienda'
import { CarouselProduct } from '@/components/organisms/Carousel/CarouselProduct'
import { CarouselRecreation } from '@/components/organisms/Carousel/CarouselRecreation'
import { TabsTourism } from '@/components/molecules/Tabs/TabsTourism'
import { CarouselAccommodation } from '@/components/organisms/Carousel/CarouselAccommodation'
import { SearchViewSchool } from '@/components/organisms/Sections/SearchViewSchool/SearchViewSchool'
import { SectionViewFilter } from '@/components/organisms/Sections/SectionViewFilter'
import { TabsVideo } from '@/components/molecules/Tabs/TabsVideo'

interface ComponentsMap {
  [key: string]: React.ComponentType<any>
}

const componentsMap: ComponentsMap = {
  componentBreakerCards: BreakerCardIcon,
  componentSlideBanner: CarouselBanner,
  componentTabsCard: Tabs,
  componentCarruselConveni: CarouselConvenio,
  componentCifras: CardCifrasCollection,
  componentBreaker: SectionBreakerSubscribe,
  componentNewstest: CarouselNews,
  componentHelpCenter: SectionHelpCenter,
  componentSectionLinks: SectionLink,
  componentCardsIcon: SectionsCardIcons,
  componentTextHtmlButton: Breaker,
  componentCarruselVivienda: CarouselVivienda,
  componentTextHtml: SectionBody,
  componentIconsGrid: SectionCardIcon,
  componentSlideAgreements: CarouselProduct,
  componentCarruselRecreation: CarouselRecreation,
  componentSlideTurism: TabsTourism, //error
  componentSlideLodging: CarouselAccommodation,
  componentViewSchoolsFilters: SearchViewSchool,
  componentWhatsThereTo: SectionViewFilter, //
  componentTabsVideo: TabsVideo,
}
type ComponentData = {
  [key in keyof ComponentsMap]: Partial<React.ComponentProps<(typeof componentsMap)[key]>>
}
interface ComponentProps<T> {
  componentData?: ComponentData
  className?: string
}
export const ComponentsLanding = <T,>({
  componentData,
  ...props
}: ComponentProps<T>): JSX.Element | null => {
  if (!componentData) return null
  const keys = Object.keys(componentData) as Array<keyof ComponentsMap>
  let Component: React.ComponentType<any> | null = null
  let nameComponent: keyof ComponentsMap | null = null

  keys.forEach(key => {
    if (componentsMap[key]) {
      Component = componentsMap[key] as React.ComponentType<any> | null
      nameComponent = key
      return
    }
  })

  if (!Component) {
    return null
  }
  const ComponentToRender = Component as React.ComponentType<any>
  const componentProps = componentData[nameComponent!] as Record<string, unknown>

  return <ComponentToRender {...componentProps} {...props} />
}
