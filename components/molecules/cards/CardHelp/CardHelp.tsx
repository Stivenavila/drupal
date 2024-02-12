import { Heading } from '@/components/atoms/Text/Heading'

import styles from './CardHelp.module.css'
import { Text } from '@/components/atoms/Text/Text'
import { Button } from '@/components/atoms/Button/Button'
import { Angle } from '@/components/atoms/images/Icons'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { IComponenteTitle, TImage } from 'common/interfaces'
import { LinkComponent } from 'common/utils/LinkComponent/LinkComponent'

interface CardProps {
  className?: string
  title: string
  link: { url: { url: string } }
}
export const CardHelp = ({ className, title, link, ...rest }: CardProps) => {
  return (
    <LinkComponent
      className={`${className} ${styles.CardHelp} CardColegio rounded overflow-hidden bg-white block`}
      href={link?.url?.url}
      passHref
      {...rest}
    >
      <Heading
        className={`${styles.Heading} pb-4 font-medium text-center`}
        level={3}
      >
        {title}
      </Heading>
    </LinkComponent>
  )
}
