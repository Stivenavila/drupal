import { IColor, TChildren } from 'common/interfaces'
import styles from './Text.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color?: IColor['color']
  background?: string
  className?: string
  children?: TChildren
  container?: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge'
  component?: 'body' | 'div' | 'span'
}

interface Containers {
  [key: string]: string
}
const containers: Containers = {
  medium: '1080px',
  large: '1280px',
  extraLarge: '1920px',
}
export const Text = ({
  color,
  component,
  className,
  background,
  children,
  container,
  ...rest
}: Props) => {
  const classes = [
    className,
    color ? `text-${color}` : '',
    container ? `mx-auto ${styles.Text_Container}` : '',
  ]
    .join(' ')
    .trim()
  const Element = component === 'span' ? 'span' : 'div'
  const renderText =
    component === 'div' || component === 'span' ? (
      <Element className={`Element ${classes} `} {...rest}>
        {children}
        <style jsx>{`
          .Element {
            ${background ? `background-color: ${background};` : ''};
            ${container ? `max-width: ${containers[container]};` : ''};
          }
        `}</style>
      </Element>
    ) : (
      <Element
        dangerouslySetInnerHTML={{ __html: children as string }}
        className={`TextBody ${classes} ${styles.Text_Body}`}
        {...rest}
      />
    )
  return renderText
}
Text.defaultProps = {
  component: 'div',
}
