import { FC } from 'react'
import { Menus } from './Menu'
import { List } from '@/components/atoms/Lists/List'
import { MenuItem } from './MenuItem'

export const MenuList: FC<Menus> = ({ className, ...rest }) => {
  return (
    <List
      className={`${className}`}
      renderItem={MenuItem}
      {...rest}
    />
  )
}
