import { useContext } from 'react'
import { MenuContext } from 'common/context/Menu'
import { Menu, Menus } from '../Menu'
import styles from './MainGlobal.module.css'
import { Image } from '@/components/atoms/images/Image/Image'
import { IMenuItem } from 'common/interfaces'
interface MenuProps extends Menus {
  virtualStore?: IMenuItem
}

export const MainGlobalItems = ({ items, className, virtualStore }: MenuProps) => {
  const { menuGlobal, menuVirtual } = useContext(MenuContext)
  return (
    <>
      {menuGlobal && (
        <>
          <nav
            id='global-menu'
            className={`grow block md:hidden ${styles['main-global']}`}
          >
            <Menu className={className} items={items} dropdown />
          </nav>
          {!menuVirtual && (
            <Image
              className='block w-full mt-11 md:hidden'
              alt={virtualStore?.title}
              src={'/images/store.png'}
              width={310}
              height={116}
              layout='responsive'
              objectFit='contain'
            />
          )}
        </>
      )}
    </>
  )
}
