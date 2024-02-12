import { MenuState } from '.'

type SubMenuStates = {
  [key: string]: boolean
}
type MenuActionType =
  | { type: '[Menu] - ActionToggle'; payload?: SubMenuStates }
  | { type: '[Menu] - ActionGlobalToggle'; payload?: boolean }
  | { type: '[Menu] - ActionVirtualToggle'; payload?: boolean }

export const menuReducer = (state: MenuState, action: MenuActionType): MenuState => {
  switch (action.type) {
    case '[Menu] - ActionToggle':
      return {
        ...state,
        subMenuStates: action.payload!,
      }
    case '[Menu] - ActionGlobalToggle':
      return {
        ...state,
        menuGlobal: !state.menuGlobal,
      }
    case '[Menu] - ActionVirtualToggle':
      return {
        ...state,
        menuVirtual: action.payload!,
      }
    default:
      return state
  }
}
