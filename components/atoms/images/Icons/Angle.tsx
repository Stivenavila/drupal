import * as React from 'react'
interface AngleProps {
  className?: string
  color?: string
  fill?: string
  height?: string
  width?: string
  direction?: 'top' | 'bottom' | 'left' | 'right'
}
const Angle = ({
  className = '',
  width = '12',
  height = 'auto',
  fill = 'var(--primary)',
  direction,
  ...props
}: AngleProps) => {
  let rotation = '0deg'
  switch (direction) {
    case 'top':
      rotation = '180deg'
      break
    case 'bottom':
      rotation = '0deg'
      break
    case 'left':
      rotation = '90deg'
      break
    case 'right':
      rotation = '-90deg'
      break
    default:
      break
  }
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={`${width}`}
      height={`${height}`}
      fill='none'
      viewBox='0 0 12 7'
      style={{ transform: `rotate(${rotation})` }}
      {...props}
    >
      <path
        fill={`${fill}`}
        d='M5.79 6.25a.789.789 0 0 1-.282-.048.78.78 0 0 1-.255-.17L.193 1.25C.057 1.12-.007.947 0 .729A.722.722 0 0 1 .218.21C.388.05.572-.02.768.005c.196.024.37.1.524.23l4.497 4.251L10.287.234c.136-.129.319-.201.549-.217a.621.621 0 0 1 .55.217c.17.13.242.298.217.508a.916.916 0 0 1-.243.531l-5.034 4.76a.78.78 0 0 1-.256.169.789.789 0 0 1-.28.048'
      />
    </svg>
  )
}
export default Angle
