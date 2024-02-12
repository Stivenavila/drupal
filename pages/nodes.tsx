import { Layout } from '@/components/Layouts/Layout'
import { Heading } from '@/components/atoms/Text/Heading'
import { NodeArticleTeaser } from '@/components/templates/node-article'
import { query } from '@/lib/drupal'
import { IMenusHome, TArticle } from 'common/interfaces'
import { getMenus } from 'common/utils/Menus'
import { GetStaticPropsContext, GetStaticPropsResult } from 'next'

interface IndexPageProps {
  nodes: TArticle[] | undefined
  menus: IMenusHome | undefined
}

export default function nodes({ nodes, menus }: IndexPageProps) {
  return (
    <Layout menus={menus}>
      <div className='mx-auto max-w-[1300px]'>
        <Heading
          level={1}
          className='mb-6 text-body-40'
          color={'primary'}
        >
          Artículos
        </Heading>

        {nodes?.length ? (
          nodes.map(node => (
            <div key={node.id}>
              <NodeArticleTeaser node={node} />
              <hr className='my-20' />
            </div>
          ))
        ) : (
          <p className='py-4'>No nodes found</p>
        )}
      </div>
    </Layout>
  )
}
export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const nodes = await query<{
    nodeArticles: {
      nodes: TArticle[]
    }
  }>({
    query: `query {
      nodeArticles(first: 100) {
        nodes {
          title
          path
          id
          body {
            format
            processed
            summary
            value
          }
          image {
            title
            url
            alt
          }
          created {
            time
            timestamp
          }
          metatag {
            ... on MetaTagValue {
              __typename
              attributes {
                content
              }
            }
          }
        }
      }
    }`,
  })

  const { MAIN, FOOTER_POLICIES, FOOTER_INTEREST, VIRTUAL_BRANCH, VIRTUAL_STORE } = await getMenus([
    'MAIN',
    'FOOTER_POLICIES',
    'FOOTER_INTEREST',
    'VIRTUAL_BRANCH',
    'VIRTUAL_STORE',
  ])

  return {
    props: {
      nodes: nodes?.nodeArticles?.nodes,
      menus: {
        header: { main: MAIN, virtualMenu: VIRTUAL_BRANCH, virtualStore: VIRTUAL_STORE },
        footer: { policies: FOOTER_POLICIES, interest: FOOTER_INTEREST },
      },
    },
    revalidate: 10,
  }
}
