import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import { Image } from '@/components/atoms/images/Image/Image'
import { IComponenteTitle, TImage } from 'common/interfaces'
import { LinkComponent } from 'common/utils/LinkComponent/LinkComponent'

export interface CardPlanProps {
  componenteTitle: IComponenteTitle
  image: TImage
  url: string
}

export const CardPlan = ({ componenteTitle, image, url }: CardPlanProps) => {
  return (
    <LinkComponent className='CardPlan' href={url} passHref>
      <Image
        className='overflow-hidden rounded-se'
        src={image.mediaImage.url}
        alt={image.mediaImage.alt}
        width={341}
        height={211}
        layout='responsive'
        objectFit='cover'
      />
      <Text className='flex flex-col justify-center px-8 py-2 bg-primary rounded-es min-h-24 '>
        <Heading
          className='w-full mb-0 font-bold leading-6 font-poppins'
          level={6}
          color='white'
        >
          {componenteTitle.title}
        </Heading>
        {componenteTitle.pSubtitle && (
          <Paragraph className='w-full font-normal !text-13' color='white'>
            {componenteTitle.pSubtitle}
          </Paragraph>
        )}
      </Text>
    </LinkComponent>
  )
}
