import { query } from '@/lib/drupal'
import { IMenu, IMenuItem } from 'common/interfaces'

export async function getMenus(menuNames: string[]) {
  try {
    const menus: Record<string, IMenu> = {}

    await Promise.all(
      menuNames?.map(async name => {
        const menuQuery = `
        query {
          menu(name: ${name}) {
            name
            items {
              id
              title
              description
              url
              attributes {
                class
              }
              children {
                id
                title
                url
                description
                children {
                  id
                  url
                  title
                  description
                }
                attributes {
                  class
                }
              }
            }
          }
        }
      `

        try {
          const menu: IMenu | undefined = await query<{ menu: { items: IMenuItem[] } }>({
            query: menuQuery,
          })

          if ((name === 'MAIN' || name === 'FOOTER_SOCIAL') && menu) {
            menus[name] = {
              ...menu,
              menu: {
                ...menu?.menu,
                items: getMenuIcon(menu?.menu?.items) || [],
              },
            }
          } else {
            if (menu) menus[name] = menu
          }
        } catch (error) {
          console.error(`Error al obtener el menú ${name}:`, error)
          throw error
        }
      })
    )
    return menus
  } catch (error) {
    console.error('Error al obtener los menús:', error)
    throw error
  }
}

interface dataIcons {
  [key: string]: string
}
const dataIcon: dataIcons = {
  facebook: '/icons/facebook.svg',
  instagram: '/icons/instagram.svg',
  youtube: '/icons/youtube.svg',
  whatsapp: '/icons/whatsapp.svg',
  twitter: '/icons/twitter.svg',
  linkedin: '/icons/linkedin.svg',
  afiliaciones: '/icons/afiliaciones.svg',
  salud: '/icons/salud.svg',
  bienestar: '/icons/bienestar.svg',
  educacion: '/icons/graduation.svg',
}

function getMenuIcon(data?: IMenuItem[]) {
  if (!data) return null
  const newUpdatedData = data.map(item => {
    const normalizedTitle: string = removeAccents(item.title.toLowerCase())
    const updatedItem = {
      ...item,
      field_icon: dataIcon[normalizedTitle] || '',
    }

    if (item.children && item.children.length > 0) {
      const updatedChildren = item.children.map(child => ({
        ...child,
        field_icon: dataIcon[removeAccents(child.title.toLowerCase())] || '',
      }))

      return {
        ...item,
        children: updatedChildren,
      }
    }
    return updatedItem
  })
  return newUpdatedData
}

function removeAccents(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
