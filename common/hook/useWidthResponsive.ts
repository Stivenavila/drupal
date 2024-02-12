import { useEffect, useCallback, useRef, useState } from 'react'
type UseWidthProps = boolean | undefined

export function useWidthResponsive(dependencies: UseWidthProps = undefined) {
  const [newWidth, setNewWidth] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)
  const isMounted = useRef(true);

  const handleResize = useCallback(() => {
    //width id ref in position
    if (ref.current) {
      const divPosition = ref.current.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const calculatedWidth = viewportWidth - divPosition.x
      setNewWidth(calculatedWidth)
    }
  }, [])

  useEffect(() => {
    isMounted.current = true
    if (isMounted.current) {
      handleResize()
      window.addEventListener('resize', handleResize)
    }
    return () => {
      isMounted.current = false;
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize, dependencies])

  return { ref, newWidth, handleResize }
}
