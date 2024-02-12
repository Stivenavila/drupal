import { IBehaviors } from 'common/interfaces'
import React from 'react'
import { GridList } from 'common/utils/Grid'
import { Heading } from '@/components/atoms/Text/Heading'
import { CardIcon } from '@/components/molecules/cards/CardIcon/CardIcon'
import { Behaviors } from 'common/utils/Components'

type TabsProps = {
  className?: string
  itemsCard: []
  sectionTitle: string
  behaviors?: IBehaviors
}

export const SectionsCardIcons = ({
  className,
  sectionTitle,
  itemsCard,
  behaviors,
  ...props
}: TabsProps) => {
  if (!Array.isArray(itemsCard)) return null
  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  return (
    <section
      className={`${className} tabs-container`}
      {...props}
    >
      <Heading
        className='mx-8 mb-16 md:text-center md:mx-0'
        level={2}
      >
        {sectionTitle}
      </Heading>
      <div className='tab-content max-w-[1080px] mx-8 md:mx-auto'>
        <GridList
          className='grid grid-cols-3 gap-x-3 gap-y-5 sm:gap-10'
          items={itemsCard}
          renderItem={CardIcon}
        />
      </div>
      <style jsx>{`
        section {
          ${behaviors &&
        Object.entries(style)
          .map(([key, value]) => `${key}: ${value};`)
          .join('\n')}
        }
      `}</style>
    </section>
  )
}
