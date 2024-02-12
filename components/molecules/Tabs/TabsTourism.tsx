import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { IBehaviors, IComponenteTitle, IMediaImage } from 'common/interfaces'
import React, { useState } from 'react'
import styles from './Tabs.module.css'
import Carousel from '@/components/organisms/Carousel/Carousel'
import { Options } from '@splidejs/react-splide'
import { CardDate } from '../cards/CardDate/CardDate'
import { Behaviors } from 'common/utils/Components'

type result = {
  results: {
    carruselImages: { mediaImage: IMediaImage }[]
    path: string
    title: string
  }[]
}

export type TabsTourismProps = {
  className?: string
  componenteTitle: IComponenteTitle
  enterprises: result
  persons: result
  behaviors?: IBehaviors
}

const options: Options = {
  type: 'slide',
  pagination: false,
  gap: '4rem',
  // autoplay: true,
  perPage: 2,
  padding: { right: '25%' },
  breakpoints: {
    998: {
      gap: '1.2rem',
      perPage: 1,
      padding: { right: '48%' },
    },
  },
}
type itemsProps = {
  results?: result['results']
  title?: string
}
export const TabsTourism = ({
  className,
  componenteTitle,
  enterprises,
  persons,
  behaviors,
  ...props
}: TabsTourismProps) => {
  const [activeTab, setActiveTab] = useState(0)
  let items: itemsProps[] = []
  if (enterprises) {
    items.push({ ...enterprises, title: 'Empresas' })
  }
  if (persons) {
    items.push({ ...persons, title: 'Personas' })
  }
  const changeTab = (index: number) => {
    setActiveTab(index)
  }
  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  return (
    <section className={`${className} ${styles.TabsVideo} tabs-container`} {...props}>
      <Text className='mb-16 mx-8 md:ml-[10%]'>
        <Heading className='mb-2' color='white' level={2}>
          {componenteTitle.title}
        </Heading>
        <Paragraph color='white'>{componenteTitle.pSubtitle}</Paragraph>
      </Text>
      <Text className='relative pt-4'>
        <nav className='mb-20 max-w-[1056px] overflow-x-auto tabs md:ml-[10%]'>
          <ul className='flex mx-auto gap-9'>
            {items?.length >= 1 &&
              items?.map((tab, index) => (
                <li
                  key={index}
                  className={`tab ${activeTab === index ? 'active' : ''} ${
                    styles.TabsItem
                  } ${activeTab === index ? styles.active : ''} cursor-pointer`}
                  onClick={() => changeTab(index)}
                >
                  <Text
                    color='white'
                    className={`${activeTab === index ? 'font-bold' : 'font-normal'}`}
                  >
                    {tab?.title}
                  </Text>
                </li>
              ))}
          </ul>
        </nav>
        <div className={`tab-content ${styles.TabsContent}`}>
          <Text className='mb-8'>
            <Carousel
              className='!static'
              variant='video'
              options={options}
              items={(items && items?.length >= 1 && items[activeTab]?.results) || []}
              renderItem={CardDate}
            />
          </Text>
        </div>
      </Text>
      <style jsx>{`
        section {
          ${Object.entries(style)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n')};
        }
      `}</style>
    </section>
  )
}
