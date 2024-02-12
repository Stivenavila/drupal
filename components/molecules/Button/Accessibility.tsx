import { ImageResponsive } from '@/components/atoms/images/Image/ImageResponsive'
import { TIcon, TUrl } from 'common/interfaces'
import { LinkComponent } from 'common/utils/LinkComponent/LinkComponent'
import React from 'react'
import styles from './Accessibility.module.css'

export interface AccessibilityProps {
  items: {
    icon: TIcon
    link?: TUrl
  }[]
}

export const Accessibility = ({ items }: AccessibilityProps) => {
  return (
    <div
      className={`${styles.Accessibility} fixed z-10 top-48 right-3 gap-4 py-7 px-1 flex flex-col justify-center items-center rounded-4xl`}
    >
      {items.map((item, index) => (
        <LinkComponent key={index} href={item?.link?.url}>
          <ImageResponsive
            className='image'
            src={`${item.icon?.mediaImage1.url}`}
            alt={item.icon?.mediaImage1?.alt}
            width={54}
            height={54}
            objectFit='contain'
          />
        </LinkComponent>
      ))}
    </div>
  )
}
