import { TChildren } from 'common/interfaces'
import { FC } from 'react'
import {
  Accessibility,
  AccessibilityProps,
} from '@/components/molecules/Button/Accessibility'

interface MainProps {
  children: TChildren
  accessibility?: AccessibilityProps
}

export const Main: FC<MainProps> = ({ accessibility, children }) => {
  return (
    <main className='mx-auto max-w-screen-xxl relative pb-8'>
      {accessibility && <Accessibility {...accessibility} />}
      {children}
    </main>
  )
}
