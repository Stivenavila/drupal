/* eslint-disable @next/next/no-img-element */
import { Heading } from '@/components/atoms/Text/Heading'
import { Text } from '@/components/atoms/Text/Text'
import { Angle, Play } from '@/components/atoms/images/Icons'
import { IColor, TImage } from 'common/interfaces'
import Link from 'next/link'
import styles from './CardVideoModal.module.css'
import { useState } from 'react'
import { useThumbnailVideo } from 'common/hook/useThumbnailVideo'
import { YouTubeEmbed } from 'common/utils/Components'
import { Modal } from '../../Modals/Modal'

interface CardVideoModalProps {
  className?: string
  image: TImage
  title: string
  remoteVideo?: string
  url: string
  color?: IColor['color']
  path: string
}

export const CardVideoModal = ({
  title,
  remoteVideo,
  url,
  image,
  className,
  path,
  color = 'white',
}: CardVideoModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const Thumbnail = useThumbnailVideo(remoteVideo)
  return (
    <>
      <div className={`${className} ${styles.CardVideoModal}`}>
        <Text className='relative'>
          <img className='w-full' src={Thumbnail} alt='image' />
          {/* <ImageResponsive
            className='overflow-hidden rounded'
            src={image?.mediaImage?.url || Thumbnail}
            alt={image?.mediaImage?.alt || ''}
            width={485}
            height={292}
            layout='responsive'
            objectFit='cover'
          /> */}
          <Text
            component='span'
            className={`${styles.Play} absolute grid place-items-center top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4`}
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            <Play />
          </Text>
        </Text>

        <Text className='flex items-center justify-between pr-5 mt-5'>
          <Heading className='m-0 h2' level={5} color={color}>
            {title}
          </Heading>
          <Link href={path} passHref>
            <a>
              <Angle width='20px' direction='right' fill={`var(--${color})`} />
            </a>
          </Link>
        </Text>
      </div>
      {isOpen && (
        <Modal className='' Toggle={setIsOpen}>
          <YouTubeEmbed className='w-full' youtubeUrl={remoteVideo} />
        </Modal>
      )}
    </>
  )
}
