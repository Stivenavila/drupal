import styles from './Text.module.css'
import React from 'react'
import { IColor, TChildren } from 'common/interfaces'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  color: IColor['color']
  className?: string
  children?: TChildren
}

export const Paragraph = ({ color, className, children, ...rest }: Props) => {
  return (
    <p
      className={[
        `${className}`,
        'font-light',
        'text-base',
        `${styles.paragraph}`,
        `${`text-${color}`}`,
      ].join(' ')}
      {...rest}
    >
      {children}
    </p>
  )
}
Paragraph.defaultProps = {
  color: 'body',
}
