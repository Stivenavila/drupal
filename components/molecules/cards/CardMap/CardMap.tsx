import { Heading } from '@/components/atoms/Text/Heading'
import { Button } from '@/components/atoms/Button/Button'
import { Text } from '@/components/atoms/Text/Text'
import styles from './CardMap.module.css'
import { Image } from '@/components/atoms/images/Image/Image'

export interface CardMapProps {
  className?: string
  title: string
  link: { url: string }
}

export const CardMap = ({ className, title, link, ...rest }: CardMapProps) => {
  return (
    <div
      className={`${className} ${styles.CardMap} CardColegio rounded overflow-hidden bg-white block`}
      {...rest}
    >
      <Text className='mb-4 flex justify-around items-center flex-col md:flex-row bg-celeste rounded overflow-hidden w-full min-h-[140px] px-8 md:px-0'>
        <Image
          src='/images/Map.png'
          alt='Mapa'
          width={141}
          height={141}
          objectFit='contain'
        />
        <Button
          className='bg-white-text rounded-[5px] py-4 font-normal text-xs font-poppins mb-8 md:mb-0'
          color='primary'
          size='small'
          href={link.url}
        >
          Ver en mapa
        </Button>
      </Text>
      <Heading className={`${styles.Heading} ml-6 mb-3 max-w-56 font-medium`} level={3}>
        {title}
      </Heading>
    </div>
  )
}
