import { IBehaviors, ITabs, ITextBody, TIcon } from 'common/interfaces'
import React from 'react'
import { GridList } from 'common/utils/Grid'
import { Heading } from '@/components/atoms/Text/Heading'
import { CardIcon } from '@/components/molecules/cards/CardIcon/CardIcon'
import { Text } from '@/components/atoms/Text/Text'
import { Behaviors } from 'common/utils/Components'
import { CardServices } from '@/components/molecules/cards/CardServices/CardServices'

type TabsProps = {
  className?: string
  behaviors?: IBehaviors
  itemsIcons: { title: string; icon: TIcon }[]
  title?: string
  textHtml: ITextBody
}

export const SectionCardIcon = ({
  className,
  title,
  behaviors,
  textHtml,
  itemsIcons,
  ...props
}: TabsProps) => {
  if (!Array.isArray(itemsIcons)) return null
  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  return (
    <section
      className={`${className}`}
      {...props}
    >
      <Text
        container='large'
        className='md:flex md:justify-between md:gap-10'
      >
        <Text className='md:w-2/3'>
          {title && <Heading level={2}>{title}</Heading>}
          <Text
            className='mb-8 md:mb-0'
            color='primary'
            component='body'
          >
            {textHtml && textHtml.processed}
          </Text>
        </Text>
        <div className='md:w-1/3'>
          <GridList
            className='grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5 sm:gap-10'
            items={itemsIcons}
            renderItem={CardServices}
          />
        </div>
      </Text>
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
