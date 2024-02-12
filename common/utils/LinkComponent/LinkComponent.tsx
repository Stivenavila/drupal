import { TChildren } from 'common/interfaces'
import Link from 'next/link'

type LinkComponentProps = {
  href: string | undefined
  as?: string
  replace?: boolean
  scroll?: boolean
  shallow?: boolean
  passHref?: boolean
  prefetch?: boolean
  className?: string
  locale?: string | false
  legacyBehavior?: boolean
  onMouseEnter?: (e: any) => void
  onTouchStart?: (e: any) => void
  onClick?: (e: any) => void
  children: TChildren
}

export const LinkComponent = ({ children, className, href, ...props }: LinkComponentProps) => {
  return href && href != 'undefined' ? (
    <Link
      href={href}
      {...props}
    >
      <a className={className}>{children}</a>
    </Link>
  ) : (
    <div className={className}>{children}</div>
  )
}
