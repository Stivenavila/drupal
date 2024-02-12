import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { BreakerSubscribe } from '@/components/molecules/Breaker/BreakerSubscribe'
import { IBehaviors, IBreaker, IColor } from 'common/interfaces'
import { Behaviors } from 'common/utils/Components'
import React from 'react'

type SectionBreakerProps = {
  className?: string
  sectionTitle?: string
  color: IColor['color']
  sectionSubtitle?: string
  behaviors?: IBehaviors
} & IBreaker
export const SectionBreakerSubscribe = ({
  className,
  color = 'white',
  sectionTitle,
  sectionSubtitle,
  componenteTitle,
  componentButtons,
  image,
  imageMobile,
  behaviors,
}: SectionBreakerProps) => {
  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  return (
    <div className={`${className} SectionBreakerSubscribe`}>
      <div className='max-w-[1139px] mx-auto'>
        <Heading color={color} level={2}>
          {sectionTitle}
        </Heading>
        <Paragraph className='mb-12' color={color}>
          {sectionSubtitle}
        </Paragraph>
        <BreakerSubscribe
          componentButtons={componentButtons}
          componenteTitle={componenteTitle}
          image={image}
          imageMobile={imageMobile}
        />
      </div>
      <style jsx>{`
        .SectionBreakerSubscribe {
          ${behaviors &&
          Object.entries(style)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n')}
        }
      `}</style>
    </div>
  )
}
