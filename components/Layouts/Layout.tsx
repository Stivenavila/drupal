import { IMenusHome, IMetaTags, TChildren } from 'common/interfaces'
import { Footer, Header, Main, PreFooter } from '../organisms/site'
import Head from 'next/head'
import { PreviewAlert } from '../molecules/Modals/preview-alert'
import { AccessibilityProps } from '../molecules/Button/Accessibility'

export interface LayoutProps {
  title?: string
  children?: TChildren
  menus?: IMenusHome
  metaTags?: IMetaTags
  accessibility?: AccessibilityProps
}

export const Layout = ({
  children,
  menus,
  title = 'test Portal - NextJs',
  metaTags,
  accessibility,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{(metaTags && metaTags.content) || title}</title>
        <meta name='description' content='A Next.js site powered by a Drupal backend.' />
      </Head>
      <PreviewAlert />
      <Header menus={menus?.header} />
      <Main accessibility={accessibility}>{children}</Main>
      <PreFooter items={menus?.preFooter} />
      <Footer menus={menus?.footer} />
    </>
  )
}
