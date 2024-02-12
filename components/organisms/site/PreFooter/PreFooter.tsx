import { CardCifras } from '@/components/molecules/cards/CardCifras/CardCifras'
import { GridList } from 'common/utils/Grid'
import styles from './PreFooter.module.css'
import { IPreFooter } from 'common/interfaces'

interface PreFooterProps {
  items: IPreFooter
}

const data = {
  title: 'eyebrow',
  pSubtitle: 'title',
}

export const PreFooter = ({ items }: PreFooterProps) => {
  return (
    <div className={`preFooter bg-celeste ${styles.preFooter}`}>
      <div className='max-w-[1200px] mx-auto'>
        <GridList
          color='white'
          items={items?.componentPreFooter}
          data={data}
          className='grid card-cifras md:grid-cols-3'
          renderItem={CardCifras}
          columns={3}
        />
      </div>
    </div>
  )
}
