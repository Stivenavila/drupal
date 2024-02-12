import PropTypes from 'prop-types'
import { GridList } from 'common/utils/Grid'
import styles from './CardCifrasCollection.module.css'
import { CardCifras } from '../CardCifras/CardCifras'
import { ICifras, IComponenteTitle } from 'common/interfaces'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
interface CardCifrasProps {
  className?: string
  itemsCifras: ICifras[]
  componenteTitle: IComponenteTitle
}

export const CardCifrasCollection = ({
  className,
  componenteTitle,
  itemsCifras,
}: CardCifrasProps) => {
  return (
    <div className='px-8 md:px-0'>
      <Text className='mx-auto max-w-[1080px]'>
        <Heading className='m-0' level={2}>
          {componenteTitle?.title}
        </Heading>
        <Paragraph className='font-normal mb-14' color='primary'>
          {componenteTitle?.pSubtitle}
        </Paragraph>
      </Text>
      <Text className='mx-auto max-w-7xl'>
        <GridList
          className={`${className} ${styles.CardCifrasCollection} bg-white rounded md:mx-auto py-7 px-5 grid md:grid-cols-4 `}
          items={itemsCifras}
          renderItem={props => <CardCifras {...props} color='celeste' />}
        />
      </Text>
    </div>
  )
}
