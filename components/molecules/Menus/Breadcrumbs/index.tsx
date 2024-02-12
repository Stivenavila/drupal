import { useRouter } from 'next/router'
import Link from 'next/link'

export const Breadcrumbs = () => {
  const router = useRouter()
  const pathSegments = router.asPath.split('/').filter(segment => segment !== '')

  return (
    <div className='max-w-screen-xl pl-8 mx-auto -mb-6 min-h-6'>
      <Link href='/'>
        <a className='text-xs font-semibold text-primary font-poppins hover:text-gray-700'>
          Inicio
        </a>
      </Link>
      {pathSegments.map((segment, index) => {
        const route = `/${pathSegments.slice(0, index + 1).join('/')}`
        const isLast = index === pathSegments.length - 1

        return (
          <span key={index}>
            {isLast ? (
              <>
                <span className='mx-1 text-xs text-primary'> / </span>
                <span className='text-xs font-normal font-poppins text-primary'>{`${segment}`}</span>
              </>
            ) : (
              <>
                <span className='mx-1 text-xs text-primary'> / </span>
                <Link href={route}>
                  <a className='text-xs font-semibold text-primary font-poppins hover:text-gray-700'>
                    {segment}
                  </a>
                </Link>
              </>
            )}
          </span>
        )
      })}
    </div>
  )
}
