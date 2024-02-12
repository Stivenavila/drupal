import { useState, useEffect } from 'react'

interface ImageDimensions {
  src: string
  width?: string | number
  height?: string | number
}

export const useImageDimensions = ({ src, width = 0, height = 0 }: ImageDimensions) => {
  const [dimensions, setDimensions] = useState({
    width,
    height,
    widthFigure: width + 'px',
    heightFigure: height + 'px',
    error: false,
  })

  useEffect(() => {
    if (src) {
      const img = new Image()
      img.src = src

      img.onload = () => {
        setDimensions(prevState => ({
          ...prevState,
          width: img.width,
          height: img.height,
          widthFigure: 'fit-content',
          heightFigure: 'auto',
          error: false,
        }))
      }
      img.onerror = () => {
        setDimensions(prevState => ({
          ...prevState,
          error: true,
        }))
      }
    }
  }, [src])

  return { dimensions }
}
