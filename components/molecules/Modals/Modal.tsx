import { Text } from '@/components/atoms/Text/Text'
import styles from './Modal.module.css'
import React, { FC } from 'react'
interface ModalProps {
  Toggle: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
}

export const Modal: FC<ModalProps> = ({ children, Toggle, className }) => {
  return (
    <Text
      className={`${className} modal fixed w-full h-full top-0 left-0 z-10 grid place-items-center ${styles.Modal}`}
    >
      <Text
        className={` relative max-w-xl bg-white py-11 px-16 rounded ${styles.Content}`}
      >
        <Text
          color='primary'
          className='font-bold absolute top-4 right-4'
          onClick={() => {
            Toggle(prev => !prev)
          }}
        >
          X
        </Text>
        <Text>{children}</Text>
      </Text>
    </Text>
  )
}
