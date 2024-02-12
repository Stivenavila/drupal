import NextImage, { ImageProps } from 'next/image'
import styles from './Image.module.css'

interface PropsImage extends ImageProps {
  src: string
  alt: string | undefined
  title?: string | undefined
}
export const Image = ({
  src,
  alt,
  title,
  width,
  height,
  layout,
  className = '',
  ...props
}: PropsImage) => {
  const validate = /\.(jpg|jpeg|png|gif|webp|svg|bmp|ico|tiff)(\?.*)?$/i
  const isValidImage =
    src && src != 'undefined' && (validate.test(src) || src?.startsWith('https://picsum.photos/'))
  return (
    (isValidImage && (
      <figure className={`${className} ${styles.image}`}>
        <NextImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout={layout}
          {...props}
        />
        {title && (
          <figcaption className='py-2 text-sm text-center text-gray-600'>{title}</figcaption>
        )}
      </figure>
    )) || <></>
  )
}
