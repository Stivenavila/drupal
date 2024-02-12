import { Button } from '@/components/atoms/Button/Button'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { IColor, IComponenteTitle, TButton, TUrl } from 'common/interfaces'
import React from 'react'
export type CardLinkProps = {
  className?: string
  button?: TButton
  componenteTitle: IComponenteTitle
  color: IColor['color']
}

export const CardLink = ({ color, componenteTitle, className, button }: CardLinkProps) => {
  return (
    <div className={`${className}`}>
      <Heading
        color={color}
        level={2}
      >
        {componenteTitle.title}
      </Heading>
      <Paragraph
        className='mb-5'
        color={color}
      >
        {componenteTitle.pSubtitle}
      </Paragraph>
      <Button
        size='large'
        variant='secondary'
        href={button?.url.url}
      >
        {button?.url.title}
      </Button>
    </div>
  )
}
