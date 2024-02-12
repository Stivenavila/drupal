import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { IComponenteTitle, TImage } from 'common/interfaces'
import React, { useState } from 'react'
import styles from './Tabs.module.css'
import Carousel from '@/components/organisms/Carousel/Carousel'
import { CardVideoModal } from '../cards/CardVideoModal/CardVideoModal'
import { Options } from '@splidejs/react-splide'

export type TabsVideoProps = {
  className?: string
  componenteTitle: IComponenteTitle
  itemsTabVideo: {
    titleTab: string
    videos: {
      image?: TImage
      title: string
      path?: string
      remoteVideo: string
    }[]
  }[]
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

export const TabsVideo = ({
  className,
  itemsTabVideo,
  componenteTitle,
  ...props
}: TabsVideoProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const changeTab = (index: number) => {
    setActiveTab(index)
  }
  if (!Array.isArray(itemsTabVideo)) return null

  return (
    <div className={`${className} ${styles.TabsVideo} tabs-container`} {...props}>
      <Text className='mb-16'>
        <Heading className='mb-2' color='white' level={2}>
          {componenteTitle.title}
        </Heading>
        <Paragraph color='white'>{componenteTitle.pSubtitle}</Paragraph>
      </Text>
      <Text className='relative pt-4'>
        <nav className=' max-w-[1056px] mb-20 overflow-x-auto tabs'>
          <ul className='flex mx-auto gap-9'>
            {itemsTabVideo?.map((tab, index) => (
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
                  {tab.titleTab}
                </Text>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`tab-content mx-8 md:mx-auto ${styles.TabsContent}`}>
          <Text className='flex flex-wrap justify-center gap-3 mb-8'>
            <Carousel
              className='!static'
              variant='video'
              options={options}
              items={itemsTabVideo[activeTab].videos}
              renderItem={CardVideoModal}
            />
          </Text>
        </div>
      </Text>
    </div>
  )
}
