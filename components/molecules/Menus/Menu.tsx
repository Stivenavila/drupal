import { IMenuItem } from 'common/interfaces'
import { MenuList } from './MenuList'

export interface Menus {
  items: IMenuItem[] | undefined
  className?: string
  dropdown?: boolean
  variant?: 'Icon' | 'IconLink'
}
export const Menu = ({ items, className, dropdown = false, ...rest }: Menus) => {
  if (!items && !Array.isArray(items)) return null
  return (
    <MenuList
      items={items}
      className={`${className}`}
      dropdown={dropdown}
      {...rest}
    />
  )
}
