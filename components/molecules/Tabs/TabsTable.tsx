import { Button } from '@/components/atoms/Button/Button'
import { ITextBody } from 'common/interfaces'
import React, { useState } from 'react'
import { Heading } from '@/components/atoms/Text/Heading'
import { Table } from '@/components/atoms/Table'
import { Text } from '@/components/atoms/Text/Text'
import { Dropdown } from '@/components/atoms/Dropdown/Dropdown'
import { Background } from '../../../common/utils/Components/index'

export type TabsTableProps = {
  className?: string
  title: string
  season: { title: string; description: ITextBody; itemSeason: [] }[]
}

export const TabsTable = ({ className, season, title, ...props }: TabsTableProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const changeTab = (index: number) => {
    setActiveTab(index)
  }
  if (!Array.isArray(season)) return null
  return (
    <div className={`${className} tabs-container`} {...props}>
      <Text className='flex items-end justify-between mb-12'>
        <Heading className='mx-8 mb-8 md:text-center md:mx-0' level={3}>
          {title}
        </Heading>
        <Dropdown
          className='*:!font-normal !py-2 !px-2 *:!fill-primary !text-xs !font-poppins'
          color='primary'
          radius='5px'
          backgroundColor='white'
          options={season}
          label={''}
        />
      </Text>
      <div className='tab-content'>
        <Table rows={season[activeTab].itemSeason} color='primary' />
        <Text color='primary' className='bg-white *:text-10 px-5 py-4' component='body'>
          {season[activeTab].description.processed}
        </Text>
      </div>
    </div>
  )
}
