import { createContext } from 'react'

type SubMenuStates = {
  [key: string]: boolean
}

interface ContextProps {
  subMenuStates: SubMenuStates
  menuGlobal: boolean
  menuVirtual: boolean
  //methods
  toggleSubMenu: (itemId: string) => void
  toggleGlobalMenu: () => void
  toggleMenuVirtual: (stateVirtual: boolean) => void
  resetState: () => void
}

export const MenuContext = createContext({} as ContextProps)
