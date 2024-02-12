import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { IColor } from 'common/interfaces'
import styles from './button.module.css'

const button = cva('font-outfit font-bold leading-xs', {
  variants: {
    variant: {
      primary: ['bg-primary', 'text-white', 'hover:bg-slate-100', 'rounded'],
      secondary: ['bg-green', 'text-white', 'rounded'],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-xl', 'py-3', 'px-5'],
      large: ['text-xl', 'py-3', 'px-6', 'font-bold'],
      fullWidth: ['text-xl', 'w-full', 'py-3', 'px-6'],
    },
    outline: {
      false: [],
      true: ['bg-transparent', 'border'],
    },
  },
})

type CommonButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>
export interface ButtonProps extends CommonButtonProps, VariantProps<typeof button> {
  backgroundColor?: IColor['color']
  color?: IColor['color']
  href?: string
  radius?: string
  border?: string
}
export const Button = ({
  className,
  size,
  disabled = false,
  backgroundColor,
  radius,
  color,
  variant,
  outline,
  border,
  type,
  href,
  children,
  ...props
}: ButtonProps) => {
  if (href == 'undefined' && !children) return null
  return (
    <>
      {href ? (
        <Link
          href={href}
          passHref
        >
          <a
            className={[
              className,
              button({ variant, size, outline, className }),
              `${styles.button}`,
              `${disabled ? styles.disabled : ''}`,
              `${styles[`button--${size}`]}`,
            ].join(' ')}
            {...props}
          >
            {children}
          </a>
        </Link>
      ) : (
        <button
          type={type}
          className={[
            button({ variant, outline, size, className }),
            `${styles.button}`,
            `${disabled ? styles.disabled : ''}`,
            `${styles[`button--${size}`]}`,
          ].join(' ')}
          {...props}
        >
          {children}
        </button>
      )}
      <style jsx>{`
        button,
        a {
          ${backgroundColor ? `background-color: ${`var(--${backgroundColor})`}` : ''};
          ${color ? `color: ${`var(--${color})`}` : ''};
          ${border ? `border: ${border}` : ''};
          ${radius ? `border-radius: ${radius}` : ''};
        }
      `}</style>
    </>
  )
}
