import { Button } from '@/components/atoms/Button/Button'
import { Dropdown } from '@/components/atoms/Dropdown/Dropdown'
import { Heading } from '@/components/atoms/Text/Heading'
import { Paragraph } from '@/components/atoms/Text/Paragraph'
import { Text } from '@/components/atoms/Text/Text'
import {
  CardColegio,
  CardColegioProps,
} from '@/components/molecules/cards/CardColegio/CardColegio'
// import { query } from '@/lib/drupal'
import { IBehaviors, IComponenteTitle, TButton } from 'common/interfaces'
import { Behaviors } from 'common/utils/Components'
import { GridList } from 'common/utils/Grid'
import React from 'react'

type view = {
  schoolFilterView?: { results: CardColegioProps[] }
}

interface SectionProps {
  componenteTitle: IComponenteTitle
  button?: TButton
  behaviors?: IBehaviors
  viewSchoolsWithFilter?: { results: CardColegioProps[] }
}

export const SearchViewSchool = ({
  componenteTitle,
  behaviors,
  viewSchoolsWithFilter,
  button,
}: SectionProps) => {
  // const initialSearch: view = {}
  // const [schoolFilterView, setSchoolFilterView] = useState<any>(initialSearch)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await query<{
  //         results: { path: string }[]
  //       }>({
  //         query: `query ViewSchoolFilter($field_city_target_id: String = "", $field_school_type_target_id: String = "") {
  //           schoolFilterView(
  //             filter: {field_city_target_id: $field_city_target_id, field_school_type_target_id: $field_school_type_target_id}
  //           ) {
  //             results {
  //               ... on NodeSchool {
  //                 id

  //                 carruselImages {
  //                   mediaImage {
  //                     url
  //                     alt
  //                   }
  //                 }
  //                 title
  //                 path
  //               }
  //             }
  //           }
  //         }`,
  //       })

  //       setSchoolFilterView(data!)
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  let style = {}
  if (behaviors) {
    style = Behaviors(behaviors)
  }
  return (
    <section>
      <Text className='mx-8 md:mx-0'>
        <Heading className='max-w-lg mx-auto text-center' level={2}>
          {componenteTitle?.title}
        </Heading>
        <Paragraph className='max-w-3xl mx-auto text-center' color='primary'>
          {componenteTitle.pSubtitle}
        </Paragraph>
        <Text
          container='large'
          className='flex justify-center gap-12 py-8 mt-[52px] rounded bg-green'
        >
          <Text>
            <Paragraph color='primary' className='mb-1'>
              Ciudad
            </Paragraph>
            <Dropdown
              radius='20px'
              size='large'
              className='px-5 py-4 bg-white *:text-xs *:fill-primary'
              options={[]}
              color='body-40'
              label='Seleccionar'
            />
          </Text>
          <Text>
            <Paragraph color='primary' className='mb-1'>
              Categoría
            </Paragraph>
            <Dropdown
              radius='20px'
              size='large'
              className='px-5 py-4 bg-white *:text-xs *:fill-primary'
              options={[]}
              color='body-40'
              label='Seleccionar'
            />
          </Text>
        </Text>
        <Text container='large' className='mx-8 mt-16 tab-content md:mx-auto'>
          <GridList
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5 sm:gap-10'
            items={viewSchoolsWithFilter?.results!}
            renderItem={CardColegio}
          />
        </Text>
        <Text className='mt-8 text-center md:mt-28'>
          {button && (
            <Button variant='secondary' size='large' href={button?.url?.url}>
              {button?.url?.title}
            </Button>
          )}
        </Text>
      </Text>
      <style jsx>{`
        section {
          ${behaviors &&
          Object.entries(style)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n')}
        }
      `}</style>
    </section>
  )
}
