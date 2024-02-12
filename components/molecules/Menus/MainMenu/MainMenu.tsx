import { Menu, Menus } from '../Menu'
import styles from './MainMenu.module.css'

export const MainMenu = ({ items, className }: Menus) => {
  return (
    <nav
      id='main-menu'
      className={`grow hidden md:block ${styles['main-menu']}`}
    >
      <Menu
        className={className}
        items={items}
        dropdown
      />
    </nav>
  )
}
