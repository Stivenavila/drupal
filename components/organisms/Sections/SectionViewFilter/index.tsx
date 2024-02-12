import { viewFilter } from 'common/utils/Components'
import React from 'react'

import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { IBehaviors, IComponenteTitle, IMediaImage, TButton } from 'common/interfaces'
import { useState } from 'react'
import styles from './Tabs.module.css'
import Carousel from '@/components/organisms/Carousel/Carousel'
import { Options } from '@splidejs/react-splide'
import { Behaviors } from 'common/utils/Components'
import { CardDate } from '@/components/molecules/cards/CardDate/CardDate'
import { Button } from '@/components/atoms/Button/Button'

type result = {
  results: {
    carruselImages: { mediaImage: IMediaImage }[]
    path: string
    title: string
  }[]
}

export type SectionViewFilterProps = {
  className?: string
  componenteTitle: IComponenteTitle
  enterprises: result
  persons: result
  button: TButton
  behaviors?: IBehaviors
  slideWhatsThereToDo: { results: [] }
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
export const SectionViewFilter = ({
  className,
  componenteTitle,
  enterprises,
  slideWhatsThereToDo,
  persons,
  button,
  behaviors,
  ...props
}: SectionViewFilterProps) => {
  const [activeTab, setActiveTab] = useState(0)
  if (!slideWhatsThereToDo) return null
  const changeTab = (index: number) => {
    setActiveTab(index)
  }
  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  const newData = viewFilter(slideWhatsThereToDo)
  return (
    <section
      className={`bg-primary ${className} ${styles.TabsVideo} tabs-container`}
      {...props}
    >
      <Text className='flex flex-wrap items-end justify-between mb-16 max-w-[1056px]  md:ml-[10%]'>
        <Text className='mx-8 md:mx-0'>
          <Heading className='mb-2' color='white' level={2}>
            {componenteTitle && componenteTitle?.title}
          </Heading>
          <Paragraph color='white'>
            {componenteTitle && componenteTitle?.pSubtitle}
          </Paragraph>
        </Text>
        <Button variant='secondary' size='large' href={button.url.url}>
          {button.url.title}
        </Button>
      </Text>
      <Text className='relative pt-4'>
        <nav className='mb-20 max-w-[1056px] overflow-x-auto tabs md:ml-[10%]'>
          <ul className='flex mx-auto gap-9'>
            {newData?.map((tab, index) => (
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
                  {tab.title}
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
              items={(newData && newData[activeTab]?.items) || []}
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
