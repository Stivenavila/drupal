import { Text } from '@/components/atoms/Text/Text'
import { IBehaviors, IBreaker, IColor, ITextBody } from 'common/interfaces'
import { Behaviors } from 'common/utils/Components'
import { Background } from '../../../../common/utils/Components/index'

interface SectionBodyProps {
  className?: string
  textHtml: ITextBody
  color?: IColor['color']
  background?: IColor['color']
  behaviors?: IBehaviors
}
export const SectionBody = ({
  className,
  color,
  textHtml,
  background,
  behaviors,
  ...props
}: SectionBodyProps) => {
  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  return (
    <>
      <section className={`${className} bg-${background} text-${color}`}>
        <div className='max-w-6xl pt-[73px] pb-24 mx-8 md:flex md:items-center md:mx-auto'>
          <Text color='white' component='body'>
            {textHtml?.processed}
          </Text>
        </div>
      </section>
      <style jsx>{`
        section {
          ${behaviors &&
          Object.entries(style)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n')}
        }
      `}</style>
    </>
  )
}
