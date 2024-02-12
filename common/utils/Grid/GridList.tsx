import React from 'react'
import styles from './Grid.module.css'
import { PreprocessData } from './PreprocessData'

interface GridProps<T, P> {
  items: object[]
  data?: Partial<T>
  columns?: number | string
  gap?: string
  renderItem: React.ComponentType<any>
  className?: string
  itemProps?: P
  [key: string]: any
}
export const GridList = <T, P>({
  className,
  items,
  data,
  columns,
  gap,
  renderItem: ItemComponent,
  ...rest
}: GridProps<T, P>) => {
  if (!Array.isArray(items)) return null
  const NewItems = PreprocessData(items, data)
  return (
    <>
      <div
        className={`${className} ${styles['grid-container']}`}
        id='GridContainer'
        {...rest}
      >
        {NewItems.map((item, i) => (
          <ItemComponent
            key={`Item-${i}`}
            {...item}
            {...rest}
          />
        ))}
      </div>
      <style jsx>{`
        #GridContainer {
          ${gap ? ` gap: ${gap}` : ''};
        }
      `}</style>
    </>
  )
}
