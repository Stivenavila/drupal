import { ReactNode } from 'react'
import { IMediaImage } from './components'
import { NodeHousingProps } from '@/components/templates/NodeHousing'
import { NodeRecreationProps } from '@/components/templates/NodeRecreation'
import { NodeAccommodationProps } from '@/components/templates/NodeAccommodation'

export type TChildren = ReactNode
export interface IMetaTags {
  title?: string
  content: string
}

//?Node
export interface INode extends TArticle, NodeHousingProps, NodeRecreationProps, NodeAccommodationProps {
  __typename: string
  metatag: TMetaTag[]
  path: string
  title: string
  content?: []
}

// ?Article
export type TArticle = {
  __typename: string
  id: string
  title: string
  path: string
  body: {
    processed: string
  }
  image: IMediaImage
  created: Created
  metatag: TMetaTag[]
  status: boolean
}

type Created = {
  time: string
  timestamp: number
}

export type TMetaTag = {
  __typename?: string
  attributes: {
    content: string
    name: string
  }
}
