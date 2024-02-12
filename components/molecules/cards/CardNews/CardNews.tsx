import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { Arrow } from '@/components/atoms/images/Icons'
import { Image } from '@/components/atoms/images/Image/Image'
import styles from './CardNews.module.css'
import Link from 'next/link'
import { ICreated, TImage } from 'common/interfaces'
import { getDate } from 'common/utils/Components'

interface CardProps {
  className?: string
  newsImage: TImage
  title: string
  path: string
  created: ICreated
}

export const CardNews = ({ newsImage, path, title, created, className }: CardProps) => {
  const { dayWeek, year, day } = getDate(created.timestamp)
  return (
    <article
      className={`${className} ${styles.CardNews} overflow-hidden rounded-es rounded-se`}
    >
      <div className={`${styles.cardNewImage}`}>
        <Image
          className={`overflow-hidden rounded-es rounded-se`}
          src={newsImage?.mediaImage?.url}
          alt={newsImage?.mediaImage?.alt}
          width={160}
          height={236}
          layout='responsive'
          objectFit='cover'
        />
      </div>
      <div className={`${styles.CardNews__container} flex items-end`}>
        <div className={`${styles.CardNews__content} rounded`}>
          <Text color='white' className='text-11'>{`${dayWeek}, ${day} - ${year}`}</Text>
          <Text className='flex justify-between gap-4 mt-4'>
            <Paragraph color='white'>{title}</Paragraph>
            <Text
              background='rgba(249, 250, 251, 0.13)'
              className={`grid self-end flex-shrink-0 overflow-hidden place-items-center rounded-xs ${styles.CardNews__tag}`}
            >
              <Link href={path || '#'} passHref>
                <a>
                  <Arrow />
                </a>
              </Link>
            </Text>
          </Text>
        </div>
      </div>
    </article>
  )
}
