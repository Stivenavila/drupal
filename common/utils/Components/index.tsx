import { IBehaviors } from 'common/interfaces'

export const Background = (background: string) => {
  let backgroundStyle
  if (
    typeof background === 'string' &&
    background &&
    (/\.(jpeg|jpg|gif|png|svg)$/.test(background) ||
      background.startsWith('http') ||
      background.startsWith('data:'))
  ) {
    backgroundStyle = `url(${background}) center / cover no-repeat`
  } else if (typeof background === 'string' && background) {
    backgroundStyle = background
  } else {
    backgroundStyle = {
      backgroundStyle: 'none',
    }
  }
  return backgroundStyle
}

export type StylesBehaviors = {
  'margin-top'?: string
  'margin-right'?: string
  'margin-bottom'?: string
  'margin-left'?: string
  'padding-top'?: string
  'padding-right'?: string
  'padding-bottom'?: string
  'padding-left'?: string
  background?: string
}
export const Behaviors = ({
  background_behavior,
  margin_behavior,
  padding_behavior,
  ...pros
}: IBehaviors): StylesBehaviors => {
  const styles: StylesBehaviors = {}

  if (
    background_behavior?.background_style === 'image' &&
    background_behavior?.image?.url
  ) {
    styles.background = `url(${background_behavior.image.url}) ${background_behavior.background_position} / cover no-repeat`
  } else if (
    background_behavior?.select_color &&
    background_behavior.select_color !== 'none'
  ) {
    styles.background = background_behavior.select_color
  }

  if (margin_behavior) {
    if (margin_behavior.margin_top && margin_behavior.margin_top !== 'none') {
      styles['margin-top'] = getSpaceValue(margin_behavior.margin_top)
    }
    if (margin_behavior.margin_right && margin_behavior.margin_right !== 'none') {
      styles['margin-right'] = getSpaceValue(margin_behavior.margin_right)
    }
    if (margin_behavior.margin_bottom && margin_behavior.margin_bottom !== 'none') {
      styles['margin-bottom'] = getSpaceValue(margin_behavior.margin_bottom)
    }
    if (margin_behavior.margin_left && margin_behavior.margin_left !== 'none') {
      styles['margin-left'] = getSpaceValue(margin_behavior.margin_left)
    }
  }

  if (padding_behavior) {
    if (padding_behavior.padding_top && padding_behavior.padding_top !== 'none') {
      styles['padding-top'] = getSpaceValue(padding_behavior.padding_top)
    }
    if (padding_behavior.padding_right && padding_behavior.padding_right !== 'none') {
      styles['padding-right'] = getSpaceValue(padding_behavior.padding_right)
    }
    if (padding_behavior.padding_bottom && padding_behavior.padding_bottom !== 'none') {
      styles['padding-bottom'] = getSpaceValue(padding_behavior.padding_bottom)
    }
    if (padding_behavior.padding_left && padding_behavior.padding_left !== 'none') {
      styles['padding-left'] = getSpaceValue(padding_behavior.padding_left)
    }
  }

  return styles
}

type TSpace = 'small' | 'medium' | 'large' | string
const space = {
  small: '1rem',
  medium: '2rem',
  large: '6rem',
}

const getSpaceValue = (value: TSpace): string => {
  if (value === 'small' || value === 'medium' || value === 'large') {
    return getValueFromObject(space, value, '0px')
  } else {
    return '0px'
  }
}

function getValueFromObject<T extends Record<string, string>>(
  obj: T,
  key: keyof T,
  defaultValue: string = '0px'
): string {
  return obj[key] || defaultValue
}

export function getDate(timestamp: number) {
  let date = new Date(timestamp * 1000)
  let daysWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
  let dayWeek = daysWeek[date.getDay()]
  let day = date.getDate()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  return {
    dayWeek,
    day,
    year,
    month,
  }
}

export function viewFilter(data: any) {
  const nodes = data?.results
  if (nodes == 'undefined' || !nodes) return null
  nodes.sort(
    (a: any, b: any) => a.datesEvent.start.timestamp - b.datesEvent.start.timestamp
  )
  const nodesGroupedByMonth = nodes.reduce((acc: any, node: any) => {
    const timestamp = node.datesEvent.start.timestamp
    const monthKey = new Date(timestamp * 1000).toLocaleString('default', {
      month: 'long',
    })
    if (!acc[monthKey]) {
      acc[monthKey] = []
    }
    acc[monthKey].push(node)
    return acc
  }, {})
  const Data = Object.entries(nodesGroupedByMonth).map(([month, events]) => ({
    title: month,
    items: events as [],
  }))
  return Data
}

export const YouTubeEmbed = ({ youtubeUrl, className }: any) => {
  const getYouTubeId = (url: any) => {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
    const match = url.match(regExp)
    return match && match[7].length === 11 ? match[7] : ''
  }
  const videoId = getYouTubeId(youtubeUrl)

  return (
    <div className={`${className} video-responsive`}>
      <iframe
        width='560'
        height='315'
        src={`https://www.youtube.com/embed/${videoId}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  )
}

//Cookie

export function saveCookie(key: string, token: string) {
  const durationInDay = 2
  const dateExpirations = new Date()
  dateExpirations.setTime(dateExpirations.getTime() + durationInDay * 24 * 60 * 60 * 1000)
  const expiresDateExpirations = `expires=${dateExpirations.toUTCString()}`
  document.cookie = `${key}=${token}; ${expiresDateExpirations}; path=/; secure; samesite=strict`
}

export function getTokenCookie(key: string) {
  const cookies = document.cookie.split(';')

  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=')

    if (name === key) {
      return value
    }
  }

  return null
}
