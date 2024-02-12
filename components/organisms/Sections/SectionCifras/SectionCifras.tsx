import { GridList } from 'common/utils/Grid'
import { Text } from '@/components/atoms/Text/Text'
import styles from './SectionCifras.module.css'

import {
  CardCifrasTitle,
  CardCifrasTitleProps,
} from '@/components/molecules/cards/CardCifrasTitle/CardCifrasTitle'
export interface SectionCifrasProps {
  className?: string
  itemsCifras: CardCifrasTitleProps[]
}

export const SectionCifras = ({ className, itemsCifras }: SectionCifrasProps) => {
  if (!itemsCifras) return null
  return (
    <div className='px-8 md:px-0'>
      <Text className='grid mx-auto max-w-7xl place-items-center'>
        <div
          className={`${className} ${styles.SectionCifras} rounded md:mx-auto min-h-[132px] px-8 py-8 md:py-0 md:px-5 inline-flex items-center md:flex-row flex-col gap-4 md:gap-12 bg-white`}
        >
          {itemsCifras?.map((item, index) => (
            <>
              {index > 0 && <span key={`span${index}`}></span>}
              <CardCifrasTitle key={`Element${index}`} {...item} color='celeste' />
            </>
          ))}
        </div>
      </Text>
    </div>
  )
}
