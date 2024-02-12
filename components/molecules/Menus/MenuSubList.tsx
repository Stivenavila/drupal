import { useContext } from 'react'

import { List } from '@/components/atoms/Lists/List'
import { MenuContext } from 'common/context/Menu'
import { useWidthResponsive } from 'common/hook/useWidthResponsive'
import { IMenuItem } from 'common/interfaces'
import { MenuDropdownLink, MenuIcon, MenuIconText } from 'common/utils/ModeViews/ModeViews'
import { Menus } from './Menu'
import { MenuItem } from './MenuItem'
import styles from './Menu.module.css'
import { Heading } from '@/components/atoms/Text/Heading'

interface Props {
  item: IMenuItem | undefined
  className?: string
  dropdown?: boolean
  title?: string | null
  variant?: Menus['variant']
}

export const MenuSubList = ({ item, className, title, variant, dropdown }: Props) => {
  const { subMenuStates, toggleSubMenu } = useContext(MenuContext)
  const isSubMenuOpen =
    (item && item.id && subMenuStates && subMenuStates[item.id.toString()]) || false
  const { ref, newWidth } = useWidthResponsive(isSubMenuOpen)

  const handleSubMenuToggle = (event: React.MouseEvent) => {
    event.preventDefault()
    item && toggleSubMenu(item.id?.toString())
  }
  return (
    <>
      {dropdown ? (
        <MenuDropdownLink
          className={className}
          item={item}
          isSubMenuOpen={isSubMenuOpen}
          onClick={handleSubMenuToggle}
        />
      ) : variant === 'Icon' && item?.field_icon ? (
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

      {dropdown && className == 'main-menu' ? (
        isSubMenuOpen && (
          <div
            ref={ref}
            className={`${className}__toggle-item ${styles['main-menu__toggle-item']}`}
            style={{ maxWidth: `${newWidth}px` }}
          >
            {title && (
              <Heading
                className='px-16 pt-12 text-base font-medium leading-base'
                level={6}
              >
                {title}
              </Heading>
            )}
            <List
              className={`${className}--sub`}
              items={item?.children}
              renderItem={MenuItem}
              dropdown={false}
              onClick={(event: React.MouseEvent) => event.stopPropagation()}
            />
          </div>
        )
      ) : dropdown ? (
        isSubMenuOpen && (
          <List
            className={`${className}--sub`}
            items={item?.children}
            renderItem={MenuItem}
            variant={variant}
            dropdown={false}
            onClick={(event: React.MouseEvent<HTMLElement>) => event.stopPropagation()}
          />
        )
      ) : (
        <List
          className={`${className}--sub`}
          items={item?.children}
          renderItem={MenuItem}
          variant={variant}
          dropdown={false}
          onClick={(event: React.MouseEvent) => event.stopPropagation()}
        />
      )}
    </>
  )
}
