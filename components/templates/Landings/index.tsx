import React from 'react'
import { ComponentsLanding } from 'common/utils/ComponentsLanding'

interface HomePageProps {
  node?: []
}

export const Landings = ({ node }: HomePageProps) => {
  if (!node) return null
  return (
    <>
      {node &&
        node?.map((item, index) => (
          <ComponentsLanding
            className='mb-20 md:mb-24'
            key={`Landing__${index}`}
            componentData={item}
          />
        ))}
    </>
  )
}
