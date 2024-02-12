import { Button } from '@/components/atoms/Button/Button'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { CardHelp } from '@/components/molecules/cards/CardHelp/CardHelp'
import { CardIcon } from '@/components/molecules/cards/CardIcon/CardIcon'
import { IBehaviors, IComponenteTitle, TButton } from 'common/interfaces'
import { Behaviors } from 'common/utils/Components'
import { GridList } from 'common/utils/Grid'
import React from 'react'

interface SectionProps {
  componenteTitle: IComponenteTitle
  itemsCardsHelp: []
  button?: TButton
  behaviors?: IBehaviors
}

export const SectionHelpCenter = ({
  componenteTitle,
  behaviors,
  itemsCardsHelp,
  button,
}: SectionProps) => {
  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  return (
    <section>
      <Text className='mx-8 md:mx-0'>
        <Heading
          className='max-w-3xl mx-auto text-center'
          level={2}
        >
          {componenteTitle?.title}
        </Heading>
        <Paragraph
          className='max-w-3xl mx-auto text-center'
          color='primary'
        >
          {componenteTitle.pSubtitle}
        </Paragraph>
        <Text
          container='large'
          className='mx-8 mt-16 tab-content md:mx-auto'
        >
          <GridList
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5 sm:gap-10'
            items={itemsCardsHelp}
            renderItem={CardHelp}
          />
        </Text>
        <Text className='mt-12 text-center'>
          {button && (
            <Button
              outline
              color='green'
              variant='secondary'
              size='large'
              href={button?.url?.url}
            >
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
