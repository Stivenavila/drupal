export interface IHero {
  id: string
  componenteTitle: IComponenteTitle
  button?: TButton
  image: TImage
  preTitle?: string
}

export interface IBreaker {
  componentButtons: TComponentButtons
  componenteTitle: IComponenteTitle
  image: TImage
  imageMobile: TImage
}
export interface ICard {
  id: string
  image: TImage
  componenteTitle: IComponenteTitle
  button?: TButton
  url?: string
}

export interface ICifras {
  icon: TIcon
  eyebrow?: string
  url: string
  pSubtitle?: string
  title: string
}

// ?Menus

export interface IMenusHome {
  header?: {
    main?: IMenu
    virtualMenu?: IMenu
    virtualStore?: IMenu
  }
  footer?: {
    policies?: IMenu
    interest?: IMenu
    social?: IMenu
  }
  preFooter?: any
}

export interface IMenu {
  menu: Menu
}
interface Menu {
  name?: string
  items: IMenuItem[]
}

export interface IMenuItem {
  id: string
  title: string
  description?: string | null
  url: string
  attributes?: AttributesMenu
  children?: IMenuItem[]
  field_icon?: string
  field_image?: string
}

interface AttributesMenu {
  class: string | null
}

// ? fin Menu
export interface IComponenteTitle {
  id?: string
  pSubtitle?: string
  title: string
}

export type TButton = {
  url: TUrl
}

export type TUrl = {
  title: string
  url: string
}

export interface TImage {
  name?: string
  mediaImage: IMediaImage
}

export interface IMediaImage {
  url: string
  title?: string | undefined
  alt: string
}

// !tabs
export interface ITabs {
  tabsTitle: string
  tabs: Tab[]
}

interface Tab {
  tabTitle: string
  itemsCard: ICardItems[]
}

export interface ICardItems {
  title: string
  link: TLink
  icon: TIcon
}

export type TIcon = {
  mediaImage1: MediaImage1
}

type MediaImage1 = {
  url: string
  alt: string
}

export type TLink = {
  title?: string
  url: string
}

type TComponentButtons = {
  buttons: TButton[]
}

// carousel convenio

export interface CarouselConvenio {
  button: TButton
  componenteTitle: IComponenteTitle
  itemsCardImage: ItemsCardImage[]
}

interface ItemsCardImage {
  title: string
  image: TImage
  link: TLink
}

// behaviors

export interface IBehaviors {
  background_behavior: BackgroundBehavior
  margin_behavior: MarginBehavior
  padding_behavior: PaddingBehavior
}

interface BackgroundBehavior {
  background_position: string
  background_style: string
  select_color: string
  image: IMediaImage
}

interface MarginBehavior {
  margin_bottom: string
  margin_left: string
  margin_right: string
  margin_top: string
}

interface PaddingBehavior {
  padding_bottom: string
  padding_left: string
  padding_right: string
  padding_top: string
}

//? PreFooter

export interface IPreFooter {
  componentPreFooter: ComponentPreFooter[]
}

export interface ComponentPreFooter {
  title: string
  pSubtitle: string
  icon: TIcon
}

export interface ITextBody {
  processed: string
}

export interface ICreated {
  timestamp: number
}
