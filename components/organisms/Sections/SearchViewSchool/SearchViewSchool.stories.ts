import type { Meta, StoryObj } from '@storybook/react'
import { SearchViewSchool as SearchViewSchoolJ } from './SearchViewSchool'
import { dataSchoolView, dataTabs } from '../../../../common/seed/components'

const meta: Meta<typeof SearchViewSchoolJ> = {
  title: 'Organisms/Sections/SearchViewSchool',
  component: SearchViewSchoolJ,
}

export default meta

type Story = StoryObj<typeof SearchViewSchoolJ>

export const SearchViewSchool: Story = {
  args: {
    button: {
      url: {
        title: 'Consúltalo aquí',
        url: 'https://www.youtube.com/watch?v=g0rRsE3QfAE',
      },
    },
    componenteTitle: {
      title: 'NUESTROS COLEGIOS test',
      pSubtitle: 'Educación test, para ser y crecer',
    },
    behaviors: {
      background_behavior: {
        background_position: 'center',
        select_color: '#D9D9D940',
      },
      margin_behavior: {
        margin_bottom: 'none',
        margin_left: 'none',
        margin_right: 'none',
        margin_top: 'none',
      },
      padding_behavior: {
        padding_bottom: 'large',
        padding_left: 'none',
        padding_right: 'none',
        padding_top: 'large',
      },
    },
  },
}
