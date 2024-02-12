import React from 'react'
import { ComponentsLanding } from 'common/utils/ComponentsLanding'
import { Layout } from '@/components/Layouts/Layout'
import { IMenusHome, IMetaTags } from 'common/interfaces'
import { AccessibilityProps } from '@/components/molecules/Button/Accessibility'

interface HomePageProps {
  nodes: [] | undefined
  metaTags?: IMetaTags | undefined
  menus: IMenusHome | undefined
  accessibility?: AccessibilityProps
}

export const Home = ({ menus, nodes, metaTags, accessibility }: HomePageProps) => {
  return (
    <Layout accessibility={accessibility} menus={menus} metaTags={metaTags}>
      {nodes &&
        nodes?.map((item, index) => (
          <ComponentsLanding
            className='mb-20 md:mb-24'
            key={index}
            componentData={item}
          />
        ))}
    </Layout>
  )
}
