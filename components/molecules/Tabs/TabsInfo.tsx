import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { ImageResponsive } from '@/components/atoms/images/Image/ImageResponsive'
import { ITextBody, TIcon } from 'common/interfaces'
import { GridList } from 'common/utils/Grid'
import React, { useState } from 'react'
import { CardDetails } from '../cards/CardDetails/CardDetails'
import styles from './Tabs.module.css'

export type TabsInfoProps = {
  className?: string
  itemsInfo: {
    tabTitle: string
    items: {
      description?: string
      icon?: TIcon
      title?: string
    }[]
    cardList?: []
    tabBody?: ITextBody
  }[]
}

export const TabsInfo = ({ className, itemsInfo, ...props }: TabsInfoProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const changeTab = (index: number) => {
    setActiveTab(index)
  }
  if (!Array.isArray(itemsInfo)) return null
  return (
    <div className={`${className} ${styles.TabsInfo} tabs-container`} {...props}>
      <nav className='max-w-full mb-12 md:mb-20 overflow-x-auto tabs'>
        <ul className='flex md:justify-center mx-auto gap-9'>
          {itemsInfo?.map((tab, index) => (
            <li
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''} ${styles.TabsItem} ${
                activeTab === index ? styles.active : ''
              } cursor-pointer`}
              onClick={() => changeTab(index)}
            >
              <Text
                color='primary'
                className={`${activeTab === index ? 'font-semibold' : 'font-normal'}`}
              >
                {tab.tabTitle}
              </Text>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`tab-content max-w-[1080px] mx-8 md:mx-auto ${styles.TabsContent}`}>
        {Array.isArray(itemsInfo[activeTab]?.items) &&
          itemsInfo[activeTab]?.items != undefined && (
            <Text className='flex flex-wrap justify-center gap-3 mb-8'>
              {itemsInfo[activeTab].items?.map((item, index) => (
                <Text key={index} className='flex flex-col items-center'>
                  <Heading
                    color='body'
                    className='mb-3 text-xl max-w-32 min-h-10 text-center grid place-items-center'
                    level={6}
                  >
                    {item.title}
                  </Heading>
                  <Text className='flex items-center gap-1'>
                    <Paragraph className='font-semibold'>{item.description}</Paragraph>
                    <ImageResponsive
                      className='image'
                      src={`${item.icon?.mediaImage1?.url}`}
                      alt={item?.icon?.mediaImage1?.alt}
                      width={15}
                      height={15}
                      objectFit='contain'
                    />
                  </Text>
                </Text>
              ))}
            </Text>
          )}
        {itemsInfo[activeTab]?.tabBody && (
          <Text color='primary' className='font-light' component='body'>
            {itemsInfo[activeTab].tabBody?.processed}
          </Text>
        )}
        {itemsInfo[activeTab]?.cardList && (
          <GridList
            className='flex flex-wrap justify-center gap-x-3 gap-y-5 sm:gap-10'
            items={itemsInfo[activeTab]?.cardList || []}
            renderItem={CardDetails}
          />
        )}
      </div>
    </div>
  )
}
