import React from 'react'

import { CardLink, CardLinkProps } from '@/components/molecules/cards/CardLink/CardLink'
import { IBehaviors } from 'common/interfaces'
import { Behaviors } from 'common/utils/Components'
import { GridList } from 'common/utils/Grid'
import { Text } from '@/components/atoms/Text/Text'

interface SectionProps {
  itemsCardsLink: CardLinkProps[]
  behaviors?: IBehaviors
}

export const SectionLink = ({ behaviors, itemsCardsLink }: SectionProps) => {
  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  return (
    <section>
      <Text className='mx-8 md:mx-0'>
        <GridList
          className='grid max-w-4xl mx-auto md:grid-cols-2 gap-x-3 gap-y-5 sm:gap-10'
          items={itemsCardsLink}
          renderItem={CardLink}
        />
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
