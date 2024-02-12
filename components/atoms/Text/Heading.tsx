// import kebabCase from 'lodash/kebabCase'
import Link from 'next/link'
import styles from './Text.module.css'
import { IColor, TChildren } from 'common/interfaces'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  color: IColor['color']
  level: 1 | 2 | 3 | 4 | 5 | 6
  url?: string
  text?: string
  underline: boolean
  children?: TChildren
  className?: string
}

export const Heading = ({
  underline,
  level = 2,
  color,
  url,
  children,
  className,
  ...rest
}: Props) => {
  const HeadingElement = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  return (
    <HeadingElement
      className={[
        className,
        `${`text-${color}`}`,
        `${styles.heading}`,
        `${styles[`color--${color}`]}`,
        `${underline ? styles.underline : ''}`,
      ].join(' ')}
      {...rest}
    >
      {url ? <Link href={url}>{children}</Link> : children}
    </HeadingElement>
  )
}

Heading.defaultProps = {
  underline: false,
  color: 'primary',
}
