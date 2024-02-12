import { FC, useReducer } from 'react'
import { MenuContext, menuReducer } from '.'
import { TChildren } from 'common/interfaces'

type SubMenuStates = {
  [key: string]: boolean
}
export interface MenuState {
  subMenuStates: SubMenuStates
  menuGlobal: boolean
  menuVirtual: boolean
}

const Menu_INitial_STATE: MenuState = {
  subMenuStates: {},
  menuGlobal: false,
  menuVirtual: false,
}

export interface PropsChildren {
  children: TChildren
}

export const MenuProvider: FC<PropsChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, Menu_INitial_STATE)

  const toggleSubMenu = (itemId: string) => {
    const updatedStates = { ...state.subMenuStates }
    updatedStates[itemId] = !updatedStates[itemId]

    Object.keys(updatedStates).forEach(key => {
      if (key !== itemId) {
        updatedStates[key] = false
      }
    })

    dispatch({
      type: '[Menu] - ActionToggle',
      payload: updatedStates,
    })
  }

  const toggleGlobalMenu = () => {
    dispatch({
      type: '[Menu] - ActionGlobalToggle',
    })
  }
  const toggleMenuVirtual = (stateVirtual: boolean) => {
    dispatch({
      type: '[Menu] - ActionVirtualToggle',
      payload: stateVirtual,
    })
  }

  const resetState = () => {
    const updatedStates = { ...state.subMenuStates }
    Object.keys(updatedStates).forEach(key => {
      updatedStates[key] = false
    })

    dispatch({
      type: '[Menu] - ActionToggle',
      payload: updatedStates,
    })
  }

  return (
    <MenuContext.Provider
      value={{
        ...state,
        toggleSubMenu,
        toggleGlobalMenu,
        toggleMenuVirtual,
        resetState,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
