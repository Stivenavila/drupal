import { Menus } from '@/components/molecules/Menus'
import { IColor, TChildren } from 'common/interfaces'

interface ListProps<T> {
  items: T[] | undefined
  renderItem: (props: { item: T; className?: string }) => TChildren
  className?: string
  dropdown?: boolean
  variant?: Menus['variant']
  color?: IColor['color']
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const List = <T extends {}>({
  items,
  renderItem,
  onClick,
  className,
  ...rest
}: ListProps<T>) => {
  if (!items && !Array.isArray(items)) return null
  return (
    <ul className={`${className}__list`}>
      {items.map((item, i) => (
        <li
          className={`${className ? `${className}__item` : ''} relative`}
          key={i}
        >
          {renderItem({ item, className, ...rest })}
        </li>
      ))}
    </ul>
  )
}
