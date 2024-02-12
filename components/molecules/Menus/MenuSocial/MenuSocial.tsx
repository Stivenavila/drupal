import { IMenuItem } from 'common/interfaces'
import { Menu } from '../Menu'
// import { getMenuIcon } from 'common/utils/Menus'
interface SocialProps {
  items?: IMenuItem[]
}

const Social = {
  facebook: '/icons/facebook.svg',
  instagram: '/icons/instagram.svg',
  youtube: '/icons/youtube.svg',
  whatsapp: '/icons/whatsapp.svg',
  twitter: '/icons/twitter.svg',
  linkedin: '/icons/linkedin.svg',
  educacion: '/icons/graduation.svg',
}

export const MenuSocial = ({ items }: SocialProps) => {
  return <Menu className='menu-social' items={items} variant='Icon' />
}
