import PropTypes from 'prop-types'
import { Button } from '@/components/atoms/Button/Button'
import { ITabs } from 'common/interfaces'
import React, { useState } from 'react'
import { CardIcon } from '../cards/CardIcon/CardIcon'
import { GridList } from 'common/utils/Grid'
import { Heading } from '@/components/atoms/Text/Heading'

type TabsProps = {
  className?: string
} & ITabs

export const Tabs = ({ className, tabs, tabsTitle, ...props }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const changeTab = (index: number) => {
    setActiveTab(index)
  }
  if (!Array.isArray(tabs)) return null
  return (
    <div
      className={`${className} tabs-container`}
      {...props}
    >
      <Heading
        className='mx-8 md:text-center md:mx-0 mb-8'
        level={2}
      >
        {tabsTitle}
      </Heading>
      <nav className=' mb-16 mb:mb-20 tabs'>
        <ul className='flex justify-center mx-8 md:mx-auto border rounded text-green w-max min-h-9 md:min-h-14'>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => changeTab(index)}
            >
              <Button
                className='!min-h-9 md:!min-h-14 !text-xl !font-bold'
                size='large'
                color={`${activeTab === index ? 'white' : 'green'}`}
                variant={activeTab === index ? 'secondary' : undefined}
              >
                {' '}
                {tab.tabTitle}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className='tab-content max-w-[1080px] mx-8 md:mx-auto'>
        <GridList
          className='grid grid-cols-3 gap-x-3 gap-y-5 sm:gap-10'
          items={tabs[activeTab].itemsCard}
          renderItem={CardIcon}
        />
      </div>
    </div>
  )
}
Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
}
