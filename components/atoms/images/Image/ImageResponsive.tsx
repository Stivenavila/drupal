import { useImageDimensions } from 'common/hook/useImageDimensions'
import NextImage, { ImageProps } from 'next/image'
import styles from './Image.module.css'
interface ImagesProps extends ImageProps {
  src: string
  alt: string | undefined
}
export function ImageResponsive({
  title,
  width,
  height,
  src,
  alt,
  objectFit = 'contain',
  className = '',
  ...props
}: ImagesProps) {
  const validSrc = src == 'undefined' ? '' : src
  const { dimensions } = useImageDimensions({ src: validSrc, width, height })

  if (!validSrc || typeof validSrc !== 'string') {
    return null
  }
  return (
    <figure
      className={`${className} ${styles.image}`}
      style={{
        width: `${dimensions.widthFigure}`,
        height: `${dimensions.heightFigure}`,
      }}
    >
      {!dimensions?.error && src != undefined && (
        <NextImage
          src={validSrc}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          objectFit={objectFit}
          {...props}
        />
      )}
      {title && <figcaption className='py-2 text-sm text-center text-gray-600'>{title}</figcaption>}
    </figure>
  )
}
