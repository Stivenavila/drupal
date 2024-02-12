import { TArticle } from 'common/interfaces'
import { Text } from '../atoms/Text/Text'

interface NodeProps {
  node: TArticle
}
export function NodeBasicPage({ node, ...props }: NodeProps) {
  return (
    <article
      {...props}
      className='max-w-[1512px] mx-auto'
    >
      <h1 className='mb-4 text-6xl font-black leading-tight'>{node.title}</h1>
      {node.body?.processed && (
        <Text
          className='mt-6 font-serif text-xl leading-loose'
          component='body'
        >
          {node?.body?.processed}
        </Text>
      )}
    </article>
  )
}
