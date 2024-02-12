import { IMenuItem } from 'common/interfaces'
import { MenuIcon, MenuIconText } from 'common/utils/ModeViews/ModeViews'
import { Menus } from './Menu'
import { MenuSubList } from './MenuSubList'

interface Props {
  item: IMenuItem | undefined
  className?: string
  key?: number
  dropdown?: boolean
  variant?: Menus['variant']
}

export const MenuItem = ({ item, variant, className, ...rest }: Props) => {
  if (!item) return null
  return item.children ? (
    <MenuSubList
      item={item}
      className={className}
      variant={variant}
      title={item.description}
      {...rest}
    />
  ) : (
    <>
      {variant === 'Icon' ? (
        <MenuIcon
          className={className}
          item={item}
        />
      ) : (
        <MenuIconText
          className={className}
          item={item}
        />
      )}
    </>
  )
}
