import React from 'react'
import styles from './Grid.module.css'
import { TChildren } from 'common/interfaces'
interface GridProps {
  children: TChildren
  columns?: number
  gap?: string
}

export const Grid = ({ children, columns, gap }: GridProps) => {
  return (
    <>
      <div
        className={styles['grid-container']}
        id='Grid-Container'
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={`Grid-${index}`}
            className={styles['grid-item']}
          >
            {child}
          </div>
        ))}
      </div>
      <style jsx>{`
        @media (min-width: 998px) {
          #Grid-Container {
            ${columns ? `grid-template-columns: repeat(${columns}, 1fr)` : ''};
            ${gap ? ` gap: ${gap}` : ''};
          }
        }
      `}</style>
    </>
  )
}
