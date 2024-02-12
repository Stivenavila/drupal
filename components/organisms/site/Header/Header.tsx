import { useContext } from 'react'
import Link from 'next/link'

import { Dropdown } from '@/components/atoms/Dropdown/Dropdown'
import { Heading } from '@/components/atoms/Text/Heading'
import { CartShopping, Logo, LogoMobile, LogoText } from '@/components/atoms/images/Icons'
import { MainGlobal, MainGlobalItems, MainMenu } from '@/components/molecules/Menus'
import { MenuContext } from 'common/context/Menu'
import { IMenusHome } from 'common/interfaces'
import styles from './header.module.css'
import { Text } from '@/components/atoms/Text/Text'
import { useRouter } from 'next/router'
import { useResetStates } from 'common/hook/useResetStates'

interface HeaderProps {
  menus: IMenusHome['header']
}

export const Header = ({ menus }: HeaderProps) => {
  const { menuGlobal, toggleMenuVirtual } = useContext(MenuContext)
  useResetStates()
  return (
    <header
      className={`sticky top-0 z-10 w-full bg-body-white ${styles.navigate} ${
        menuGlobal ? 'min-h-screen md:min-h-full max-h-screen flex flex-col' : ''
      }`}
    >
      <div className='w-full bg-primary'>
        <div
          className={'max-w-[1440px] mx-auto md:flex md:justify-end py-6 px-6 md:px-5'}
        >
          <div className='flex items-center justify-between md:hidden'>
            {menuGlobal && (
              <Link href='/' passHref>
                <LogoText />
              </Link>
            )}
            <div
              className={`flex items-center justify-end md:hidden ${
                menuGlobal ? '' : 'flex-grow'
              }`}
            >
              {!menuGlobal && <CartShopping fill='white' className='mr-5 md:hidden' />}
              <MainGlobal />
            </div>
          </div>
          {menus?.virtualMenu?.menu?.items && (
            <Text className={`${menuGlobal ? 'block' : 'hidden md:block'}`}>
              <Dropdown
                className={`w-full mt-11 md:mt-0 md:w-auto md:block mb-4 md:mb-0 `}
                backgroundColor='primary'
                color='white'
                radius='9px'
                size='fullWidth'
                label={menus?.virtualMenu?.menu?.name}
                stateExternal={toggleMenuVirtual}
                border='0.5px solid'
                options={menus?.virtualMenu?.menu?.items}
              />
            </Text>
          )}
        </div>
      </div>
      <div
        className={`${styles.header} ${
          menuGlobal ? 'overflow-y-auto md:overflow-y-visible flex-grow' : ''
        }`}
      >
        <div className={styles['header-container']}>
          {!menuGlobal && (
            <Link href='/' passHref>
              <a className='block -mt-12 md:-mt-16'>
                <Logo className='hidden md:block' />
                <LogoMobile className='block md:hidden' />
              </a>
            </Link>
          )}
          {menus?.main && (
            <MainMenu items={menus.main.menu.items} className='main-menu' />
          )}
          {menus?.main && (
            <MainGlobalItems
              items={menus?.main?.menu?.items}
              className='main-global'
              virtualStore={
                menus?.virtualStore?.menu?.items && menus?.virtualStore?.menu?.items[0]
              }
            />
          )}
          <div className='hidden md:gap-3 md:flex'>
            {menus?.virtualStore?.menu && (
              <>
                <Heading
                  className={`text-base font-semibold text-primary ${styles.virtual}`}
                  level={6}
                >
                  {menus?.virtualStore?.menu.items &&
                    menus?.virtualStore?.menu?.items[0]?.title}
                </Heading>
                <CartShopping />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
