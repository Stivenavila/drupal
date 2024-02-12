import * as React from 'react'
interface ArrowProps {
  className?: string
  color?: string
  fill?: string
  height?: string
  width?: string
  direction?: 'top' | 'bottom' | 'left' | 'right'
}
const Arrow = ({
  className = '',
  width = '19.39',
  height = 'auto',
  fill = 'var(--white-text)',
  direction,
  ...props
}: ArrowProps) => {
  let rotation = '0deg'
  switch (direction) {
    case 'top':
      rotation = '-90deg'
      break
    case 'bottom':
      rotation = '90deg'
      break
    case 'left':
      rotation = '180deg'
      break
    case 'right':
      rotation = '0deg'
      break
    default:
      break
  }
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={`${width}`}
      height={`${height}`}
      fill='none'
      viewBox='0 0 20 17'
      style={{ transform: `rotate(${rotation})` }}
      {...props}
    >
      <path
        fill={`${fill}`}
        d='M16.168 9.723H1.682c-.656 0-1.052-.282-1.16-.82-.132-.662.326-1.206 1.054-1.249.087-.004.174 0 .26 0h14.336l.066-.1c-.093-.062-.198-.113-.278-.19a3185.91 3185.91 0 0 1-5.378-5.13c-.39-.374-.5-.79-.333-1.199C10.544.32 11.354.152 11.96.7c.558.505 1.093 1.032 1.637 1.552 1.947 1.857 3.893 3.714 5.838 5.572.605.577.61 1.146.014 1.715-2.448 2.338-4.894 4.676-7.348 7.005a1.77 1.77 0 0 1-.62.402c-.463.156-.907-.036-1.142-.433-.253-.424-.203-.903.152-1.272.274-.284.567-.55.853-.823 1.555-1.485 3.11-2.97 4.666-4.452.062-.06.133-.11.2-.164l-.04-.078z'
      />
    </svg>
  )
}
export default Arrow
