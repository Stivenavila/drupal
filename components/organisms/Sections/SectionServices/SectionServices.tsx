import { GridList } from 'common/utils/Grid'
import styles from './SectionServices.module.css'
import { ICifras } from 'common/interfaces'
import { Heading } from '@/components/atoms/Text/Heading'
import { Text } from '@/components/atoms/Text/Text'
import { CardCifras } from '@/components/molecules/cards/CardCifras/CardCifras'
import { CardCifrasTitle } from '@/components/molecules/cards/CardCifrasTitle/CardCifrasTitle'
interface CardCifrasProps {
  className?: string
  itemsServices: ICifras[]
  title: string
}

export const SectionServices = ({ className, title, itemsServices }: CardCifrasProps) => {
  return (
    <div className='px-8 md:px-0'>
      <Text className='mx-auto max-w-[1080px]'>
        <Heading
          className='text-center mb-9'
          level={2}
        >
          {title}
        </Heading>
      </Text>
      <Text className='grid mx-auto max-w-7xl place-items-center'>
        <div
          className={`${className} ${styles.SectionCifras} rounded md:mx-auto py-7 px-5 inline-flex items-center md:flex-row flex-col gap-4 md:gap-12 bg-white`}
        >
          {itemsServices.map((item, index) => (
            <>
              {index > 0 && <span></span>}
              <CardCifrasTitle
                {...item}
                color='celeste'
              />
            </>
          ))}
        </div>
      </Text>
    </div>
  )
}
