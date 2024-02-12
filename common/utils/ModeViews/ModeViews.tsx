import { Angle } from '@/components/atoms/images/Icons'
import { Image } from '@/components/atoms/images/Image/Image'
import { ImageResponsive } from '@/components/atoms/images/Image/ImageResponsive'
import { IMenuItem } from 'common/interfaces'

import Link from 'next/link'

interface MenusIcon {
  item: IMenuItem | undefined
  className?: string
  onClick?: React.MouseEventHandler<HTMLElement>
  isSubMenuOpen?: boolean
}

export function MenuIcon({ item, className }: MenusIcon) {
  if (!item) return null
  return (
    <>
      <Link
        href={item.url}
        passHref
      >
        <a className={`${className}__link`}>
          {item?.field_icon && (
            <Image
              className='icon'
              src={`${item?.field_icon}`}
              width={16}
              height={16}
              alt='Icon'
            />
          )}
        </a>
      </Link>
    </>
  )
}
export function MenuIconText({ item, className }: MenusIcon) {
  if (!item) return null
  const hasSubMenu = item?.children && item.children.length > 0
  return (
    <>
      <Link
        href={item.url}
        passHref
      >
        <a
          className={`${className}__link`}
          style={{ pointerEvents: hasSubMenu ? 'none' : 'auto' }}
        >
          {item?.field_icon && (
            <ImageResponsive
              className='icon'
              src={`${item?.field_icon}`}
              alt='Icon'
              width={16}
              height={16}
            />
          )}
          {item?.title}
        </a>
      </Link>
      {item?.description && <span>{item.description}</span>}
    </>
  )
}

export function MenuDropdownLink({ item, isSubMenuOpen, className, onClick }: MenusIcon) {
  if (!item) return null
  const isOpen = isSubMenuOpen ? 'top' : 'bottom'
  return (
    <>
      <Link
        href={item.url}
        passHref
      >
        <a
          className={`${className}__link text-primary`}
          onClick={onClick}
        >
          {item.title}
          <Angle direction={isOpen} />
        </a>
      </Link>
      {item.description && <span>{item.description}</span>}
    </>
  )
}
