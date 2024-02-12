import Link from 'next/link'

import { Menu, MenuSocial } from '@/components/molecules/Menus'
import styles from './Footer.module.css'
import { Logo, LogoMobile, SuperSubsidio } from '@/components/atoms/images/Icons'
import { IMenusHome } from 'common/interfaces'

interface FooterProps {
  menus: IMenusHome['footer']
}

export const Footer = ({ menus }: FooterProps) => {
  return (
    <footer className={`pb-8 md:pb-2 py-16 bg-primary ${styles.footer}`}>
      <div
        className={` flex flex-col items-center md:flex-row md:items-start md:justify-between max-w-4xl mx-auto text-white-text ${styles['footer-container']}`}
      >
        <div
          className={`flex flex-col items-center mt-0 md:mb-8 md:block ${styles['footer-interest']}`}
        >
          <Link href='/' passHref>
            <a className='block'>
              <Logo className='hidden mb-11 md:mb-8 iconInterest md:block' width={102} />
              <LogoMobile
                className='block mb-11 md:mb-8 iconInterest md:hidden'
                width={96}
              />
            </a>
          </Link>

          <Menu className='menu-interest' items={menus?.interest?.menu?.items} />
        </div>
        <div className={`md:mt-[94px] ${styles['footer-polices']}`}>
          <Menu className='menu-polices' items={menus?.policies?.menu?.items} />
        </div>
        <div className={`mt-8 md:mt-[94px] ${styles['footer-social']}`}>
          <MenuSocial items={menus?.social?.menu?.items} />
        </div>
      </div>
      <div
        className={`grid mx-auto text-center place-items-center ${styles['footer-bottom']}`}
      >
        <hr className='block w-full my-12 text-white md:hidden' />
        <Link href='/super-subsidio' passHref>
          <SuperSubsidio />
        </Link>
        <hr className='hidden w-full my-3 text-white md:block' />
        <Link href='/' passHref>
          <a className='mt-3 font-light text-white md:mt-0 text-10'>
            Derechos reservados
          </a>
        </Link>
      </div>
    </footer>
  )
}
