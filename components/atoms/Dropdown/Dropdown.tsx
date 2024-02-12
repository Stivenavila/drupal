import Link from 'next/link'
import { SetStateAction, useEffect, useState } from 'react'

import { Button, ButtonProps } from '../Button/Button'
import { Angle } from '../images/Icons'
import styles from './Dropdown.module.css'
import { IMenuItem } from 'common/interfaces'

interface DropdownButtonProps<T> extends ButtonProps {
  options?: IMenuItem[] | { title: string; url?: string }[]
  label?: string
  stateExternal?: (item: boolean) => void
}
export const Dropdown = <T,>({
  options,
  label,
  color,
  radius = '20px',
  border,
  backgroundColor,
  className,
  stateExternal,
  onClick,
  ...rest
}: DropdownButtonProps<T>) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
    stateExternal && stateExternal(false)
  }
  useEffect(() => {
    if (!label && options) {
      handleOptionClick(options[0]?.title)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!options) return null

  return (
    <div
      className={`dropdown relative ${styles.dropdown} ${
        isOpen ? `${styles['dropdown-open']}` : ''
      }`}
    >
      <Button
        id='dropdown-toggle'
        color={color}
        border={border}
        radius={radius}
        backgroundColor={backgroundColor}
        className={`${className} dropdown-toggle ${styles.button}`}
        onClick={() => {
          setIsOpen(!isOpen)
          stateExternal && stateExternal(!isOpen)
        }}
        {...rest}
      >
        <span>{selectedOption ? selectedOption : label}</span>
        <Angle fill={color} />
      </Button>
      {isOpen && (
        <ul
          className={`dropdown-menu w-full py-5 md:absolute md:top-full md:left-0 ${styles['dropdown-menu']}`}
        >
          {options.map((item, index) => (
            <li
              className={`my-3 ${styles['dropdown-menu__item']}`}
              key={index}
              onClick={() => handleOptionClick(item?.title)}
            >
              <Link href={item?.url || '#'} passHref>
                <a className={`dropdown-menu__link hover:underline`}>{item?.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <style jsx>
        {`
          .dropdown {
            ${backgroundColor ? `background-color: ${`var(--${backgroundColor})`}` : ''};
            ${color ? `color: ${`var(--${color})`}` : ''};
            ${radius ? `border-radius: ${radius};` : ''};
          }
          .dropdown-menu {
            ${border ? `border: ${border}` : ''};
            ${radius ? `border-radius: ${radius};` : ''};
            ${backgroundColor ? `background-color: ${`var(--${backgroundColor})`}` : ''};
            border-top-left-radius: 0px;
            border-top-right-radius: 0px;
            border-top: 0;
          }
        `}
      </style>
    </div>
  )
}
