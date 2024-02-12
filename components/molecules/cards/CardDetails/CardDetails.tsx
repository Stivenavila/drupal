import { Heading } from '@/components/atoms/Text/Heading'

import styles from './CardDetails.module.css'
import { Text } from '@/components/atoms/Text/Text'
import { Button } from '@/components/atoms/Button/Button'
import { Angle } from '@/components/atoms/images/Icons'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { IComponenteTitle, TImage } from 'common/interfaces'

interface CardProps {
  className?: string
  title: string
  items: {
    componenteTitle: IComponenteTitle
  }[]
  image: TImage
  link: { url: { url: string } }
}
export const CardDetails = ({ className, items, title, link, image, ...rest }: CardProps) => {
  return (
    <div
      className={`${className} ${styles.CardDetails} CardColegio rounded overflow-hidden bg-white block`}
      {...rest}
    >
      <Heading
        className={`${styles.Heading} pb-4 font-medium text-center`}
        level={3}
      >
        {title}
      </Heading>
      <div className='mb-8'>
        {items &&
          items.map((item, index) => (
            <div
              key={index}
              className='mb-2'
            >
              <Heading
                level={6}
                className='m-0'
              >
                {item.componenteTitle.title}
              </Heading>
              <Paragraph>{item.componenteTitle.pSubtitle}</Paragraph>
            </div>
          ))}
      </div>
      <Text>
        <Button className='flex-col gap-2 text-primary'>
          <span className='underline'>Ver más</span>
          <Angle className='block' />
        </Button>
      </Text>
    </div>
  )
}
