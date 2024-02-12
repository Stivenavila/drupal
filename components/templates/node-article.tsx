import Link from 'next/link'
import { formatDate } from '@/lib/format-date'
import { Image } from '../atoms/images/Image/Image'
import { TArticle } from 'common/interfaces'
import { Text } from '../atoms/Text/Text'
interface NodeProps {
  node: TArticle | undefined
}
export function NodeArticle({ node, ...props }: NodeProps) {
  return (
    <article
      {...props}
      className='max-w-[1512px] mx-auto'
    >
      <h1 className='mb-4 text-6xl font-black leading-tight'>{node?.title}</h1>
      <NodeMeta node={node} />
      {node?.image?.url && (
        <Image
          src={node?.image?.url}
          width={768}
          height={400}
          layout='responsive'
          objectFit='cover'
          alt={node?.image?.alt}
          title={node?.image?.title}
        />
      )}
      {node?.body?.processed && (
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

export function NodeArticleTeaser({ node, ...props }: NodeProps) {
  return (
    <article
      {...props}
      className='max-w-[1512px] mx-auto'
    >
      <Link
        href={node?.path || ''}
        passHref
      >
        <a className='no-underline hover:text-blue-600'>
          <h2 className='mb-4 text-4xl font-bold'>{node?.title}</h2>
        </a>
      </Link>
      <NodeMeta node={node} />
      {node?.image?.url && (
        <Image
          src={node?.image?.url}
          width={768}
          height={400}
          layout='responsive'
          objectFit='cover'
          alt={node?.image?.alt}
          title={node?.image?.title}
        />
      )}
      {node?.body?.processed && (
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

function NodeMeta({ node, ...props }: NodeProps) {
  return (
    <div
      className='mb-4 text-gray-600'
      {...props}
    >
      {node?.metatag[0]?.attributes?.content ? (
        <span>
          {/* Posted by <span className='font-semibold'>{node.uid?.display_name}</span> */}
          Posted by <span className='font-semibold'>{node?.metatag[0]?.attributes?.content}</span>
        </span>
      ) : null}
      <span> - {node && formatDate(node?.created?.time)}</span>
    </div>
  )
}
