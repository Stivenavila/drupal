import { useContext } from 'react'
import styles from './MainGlobal.module.css'
import { MenuContext } from 'common/context/Menu'

export const MainGlobal = () => {
  const { menuGlobal, toggleGlobalMenu } = useContext(MenuContext)
  return (
    <div className='mainGlobal'>
      <div
        id='toggle-expand-cross'
        className='toggle-expand'
        onClick={toggleGlobalMenu}
      >
        <span className='toggle-expand__open'>
          <div
            className={`hamburger ${styles.hamburger} ${
              menuGlobal && styles['hamburger--active']
            }`}
          >
            <span />
            <span />
            <span />
          </div>
        </span>
      </div>
    </div>
  )
}
