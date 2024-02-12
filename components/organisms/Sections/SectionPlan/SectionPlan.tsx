import { Button } from '@/components/atoms/Button/Button'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { CardPlan, CardPlanProps } from '@/components/molecules/cards/CardPlan/CardPlan'
import { IBehaviors, IComponenteTitle, TButton } from 'common/interfaces'
import { Behaviors } from 'common/utils/Components'
import { GridList } from 'common/utils/Grid'
import React from 'react'

export interface SectionPlanProps {
  componenteTitle: IComponenteTitle
  itemsCardPlan: CardPlanProps[]
  button?: TButton
  behaviors?: IBehaviors
  className?: string
}

export const SectionPlan = ({
  componenteTitle,
  behaviors,
  className,
  itemsCardPlan,
  button,
}: SectionPlanProps) => {
  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  return (
    <section className={className}>
      <Text container='large'>
        <Heading className='' level={2}>
          {componenteTitle?.title}
        </Heading>
        <Paragraph className='' color='primary'>
          {componenteTitle.pSubtitle}
        </Paragraph>
        <Text container='large' className='mx-8 mt-16 tab-content md:mx-auto'>
          <GridList
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5 sm:gap-10'
            items={itemsCardPlan}
            renderItem={CardPlan}
          />
        </Text>
        <Text className='mt-12 text-center'>
          {button && (
            <Button variant='secondary' size='large' href={button?.url?.url}>
              {button?.url?.title}
            </Button>
          )}
        </Text>
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
