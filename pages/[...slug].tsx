import * as React from 'react'

import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { Layout, LayoutProps } from '@/components/Layouts/Layout'
import { NodeArticle } from '@/components/templates/node-article'
import { drupal, query } from '@/lib/drupal'
import { getMenus } from 'common/utils/Menus'
import { INode } from 'common/interfaces'
import { Landings } from '@/components/templates/Landings'
import { NodeHousing } from '@/components/templates/NodeHousing'
import { NodeRecreation } from '@/components/templates/NodeRecreation'
import { NodeAccommodation } from '@/components/templates/NodeAccommodation'
import { Breadcrumbs } from '@/components/molecules/Menus/Breadcrumbs'
import { AccessibilityProps } from '@/components/molecules/Button/Accessibility'

interface NodePageProps {
  paths: any
  accessibility?: AccessibilityProps
  node: INode
  menus: LayoutProps['menus'] | undefined
}

export default function NodePage({ menus, node, accessibility, paths }: NodePageProps) {
  // console.log(paths)
  if (!node) return null
  return (
    <Layout
      menus={menus}
      accessibility={accessibility}
      title={node?.title}
      metaTags={node?.metatag && node?.metatag[0]?.attributes}
    >
      <Breadcrumbs />
      {/* {node.type === 'node--page' && <NodeBasicPage node={node} />} */}
      {/* {node.type === 'node--landing_page' && <NodeBasicPage node={node} />} */}
      {node.__typename === 'NodeLodging' && <NodeAccommodation {...node} />}
      {node.__typename === 'NodeSportSchool' && <NodeRecreation {...node} />}
      {node.__typename === 'NodeRecreationalCenter' && <NodeRecreation {...node} />}
      {node.__typename === 'NodeRecreationActivity' && <NodeRecreation {...node} />}
      {node.__typename === 'NodeHousingProject' && <NodeHousing {...node} />}
      {node.__typename === 'NodeLanding' && <Landings node={node?.content} />}
      {node.__typename === 'NodeArticle' && <NodeArticle node={node} />}
    </Layout>
  )
}

export async function getStaticPaths(
  context: GetStaticPropsContext
): Promise<GetStaticPathsResult> {
  const data = await query<{
    routerNodes: {
      results: { path: string }[]
    }
  }>({
    query: `query {
      routerNodes(sortKey: TYPE) {
        results {
          ... on NodeArticle {
            __typename
            path
          }
          ... on NodeHousingProject {
            __typename
            path
          }
          ... on NodeLanding {
            __typename
            path
          }
          ... on NodeNews {
            __typename
            path
          }
          ... on NodeLodging {
            __typename
            path
          }
          ... on NodeEvent {
            __typename
            path
          }
          ... on NodeRecreationActivity {
            __typename
            path
          }
          ... on NodeRecreationalCenter {
            __typename
            path
          }
          ... on NodeSchool {
            __typename
            path
          }
          ... on NodeSportSchool {
            __typename
            path
          }
        }
      }
    }`,
  })

  const paths = data?.routerNodes?.results
    ?.map(item => item.path)
    ?.filter(path => path) as []

  // const pathsFormat = drupal.buildStaticPathsParamsFromPaths(
  //   data?.routerNodes.results.map(({ path }) => path) as string[]
  // )
  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<NodePageProps>> {
  const path = await drupal.translatePathFromContext(context)

  if (!path) {
    return {
      notFound: true,
    }
  }

  const nodes = await query<{
    route: {
      entity: INode
    }
  }>({
    query: `query Node($path: String!) {
      route(path: $path) {
        ... on RouteExternal {
          __typename
        }
        ... on RouteInternal {
          __typename
          entity {
            ... on NodeRecreationActivity {
              __typename
              id
              title
              button {
                url {
                  title
                  url
                }
              }
              carruselImages {
                mediaImage {
                  url
                  alt
                }
              }
              tabsInfo {
                itemsInfo {
                  tabTitle
                  tabBody {
                    processed
                  }
                  items {
                    description
                    title
                    icon {
                      mediaImage1 {
                        url
                        alt
                      }
                    }
                  }
                }
              }
              textHtml {
                processed
              }
              sectionCifras {
                itemsCifrasTurismo {
                  componenteTitle {
                    title
                    pSubtitle
                  }
                  icon {
                    mediaImage1 {
                      url
                      alt
                    }
                  }
                }
              }
              sectionCards {
                componenteTitle {
                  title
                  pSubtitle
                }
                button {
                  url {
                    url
                    title
                  }
                }
                itemsCardPlan {
                  componenteTitle {
                    title
                    pSubtitle
                  }
                  image {
                    mediaImage {
                      url
                      alt
                    }
                  }
                }
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
            ... on NodeLodging {
              __typename
              title
              subTitle
              carruselImages {
                mediaImage {
                  alt
                  url
                }
              }
              lodgingCard {
                price
                image {
                  mediaImage {
                    url
                    alt
                  }
                }
                button {
                  url {
                    url
                    title
                  }
                }
              }
              lodgingDescription {
                processed
              }
              lodgingServices {
                textHtml {
                  processed
                }
                itemsIcons {
                  icon {
                    mediaImage1 {
                      url
                      alt
                    }
                  }
                  title
                }
                title
              }
              lodgingSchedules {
                componenteTitle {
                  title
                  pSubtitle
                }
                checkOut
                checkIn
                textHtml {
                  processed
                }
              }
              lodgingRates {
                season {
                  title
                  itemSeason {
                    entry
                    categoriaA
                    categoriaB
                    categoriaC
                    categoriaD
                  }
                  description {
                    processed
                  }
                }
                title
              }
              lodgingPayAttention {
                processed
              }
              lodgingInfoLegal {
                processed
              }
              sectionCifras {
                itemsCifrasTurismo {
                  icon {
                    mediaImage1 {
                      url
                      alt
                    }
                  }
                  componenteTitle {
                    title
                    pSubtitle
                  }
                }
              }
              lodgingMapCard {
                link {
                  url
                }
                title
              }
              sectionCards {
                itemsCardPlan {
                  image {
                    mediaImage {
                      url
                      alt
                    }
                  }
                  componenteTitle {
                    title
                    pSubtitle
                  }
                }
                componenteTitle {
                  title
                  pSubtitle
                }
                button {
                  url {
                    url
                    title
                  }
                }
              }
              lodgingInfo {
                textHtml {
                  processed
                }
                button {
                  url {
                    url
                    title
                  }
                }
              }
            }
            ... on NodeSportSchool {
              __typename
              id
              title
              button {
                url {
                  title
                  url
                }
              }
              carruselImages {
                mediaImage {
                  url
                  alt
                }
              }
              tabsInfo {
                itemsInfo {
                  tabTitle
                  tabBody {
                    processed
                  }
                  items {
                    description
                    title
                    icon {
                      mediaImage1 {
                        url
                        alt
                      }
                    }
                  }
                }
              }
              textHtml {
                processed
              }
              sectionCifras {
                itemsCifrasTurismo {
                  componenteTitle {
                    title
                    pSubtitle
                  }
                  icon {
                    mediaImage1 {
                      url
                      alt
                    }
                  }
                }
              }
              sectionCards {
                componenteTitle {
                  title
                  pSubtitle
                }
                button {
                  url {
                    url
                    title
                  }
                }
                itemsCardPlan {
                  componenteTitle {
                    title
                    pSubtitle
                  }
                  image {
                    mediaImage {
                      url
                      alt
                    }
                  }
                }
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
            ... on NodeRecreationalCenter {
              __typename
              id
              title
              sectionCifras {
                itemsCifrasTurismo {
                  componenteTitle {
                    title
                    pSubtitle
                  }
                  icon {
                    mediaImage1 {
                      url
                      alt
                    }
                  }
                }
              }
              button {
                url {
                  title
                  url
                }
              }
              textHtml {
                processed
              }
              carruselImages {
                mediaImage {
                  url
                  alt
                }
              }
              tabsInfo {
                itemsInfo {
                  tabTitle
                  tabBody {
                    processed
                  }
                  items {
                    description
                    title
                    icon {
                      mediaImage1 {
                        url
                        alt
                      }
                    }
                  }
                }
              }
              sectionCifras {
                itemsCifrasTurismo {
                  componenteTitle {
                    title
                    pSubtitle
                  }
                  icon {
                    mediaImage1 {
                      url
                      alt
                    }
                  }
                }
              }
              sectionCards {
                componenteTitle {
                  title
                  pSubtitle
                }
                button {
                  url {
                    url
                    title
                  }
                }
                itemsCardPlan {
                  componenteTitle {
                    title
                    pSubtitle
                  }
                  image {
                    mediaImage {
                      url
                      alt
                    }
                  }
                }
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
            ... on NodeArticle {
              __typename
              id
              title
              path
              body {
                processed
              }
              image {
                url
                title
                alt
              }
              created {
                time
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
            ... on NodeHousingProject {
              __typename
              id
              title
              metatag {
                ... on MetaTagValue {
                  __typename
                  attributes {
                    content
                  }
                }
              }
              livingPlaceSubtitle {
                processed
              }
              livingPlacePrice {
                price
                subsidyApplies
              }
              livingPlaceGallery {
                housingMainSlider {
                  items {
                    mediaImage {
                      url
                      alt
                    }
                  }
                }
                housingMainCard {
                  title
                  link {
                    url
                  }
                  icon {
                    mediaImage1 {
                      url
                      alt
                    }
                  }
                }
              }
              tabsInfo {
                itemsInfo {
                  tabTitle
                  items {
                    title
                    description
                    icon {
                      mediaImage1 {
                        url
                        alt
                      }
                    }
                  }
                  tabBody {
                    processed
                  }
                }
              }
              livingPlaceServices {
                title
                itemsServices {
                  icon {
                    mediaImage1 {
                      url
                      alt
                    }
                  }
                  title
                }
              }
              livingPlaceBreaker {
                componentBreaker {
                  componenteTitle {
                    title
                    pSubtitle
                  }
                  componentButtons {
                    buttons {
                      url {
                        url
                        title
                      }
                    }
                  }
                  image {
                    mediaImage {
                      url
                      alt
                    }
                  }
                  imageMobile {
                    mediaImage {
                      url
                      alt
                    }
                  }
                }
              }
              livingPlaceCarrusel {
                componenteTitle {
                  title
                  pSubtitle
                }
                behaviors {
                  background_behavior {
                    background_position
                    background_style
                    select_color
                    image {
                      alt
                      url
                    }
                  }
                  margin_behavior {
                    margin_bottom
                    margin_left
                    margin_right
                    margin_top
                  }
                  padding_behavior {
                    padding_bottom
                    padding_left
                    padding_right
                    padding_top
                  }
                }
                carruselVivienda {
                  ... on ProyectosViviendaResult {
                    id
                    results {
                      ... on NodeHousingProject {
                        id
                        title
                        livingPlaceSubtitle {
                          processed
                        }
                        livingPlaceLogo {
                          mediaImage {
                            url
                            alt
                          }
                        }
                        livingPlacePrice {
                          price
                          subsidyApplies
                        }
                        path
                        tabsInfo {
                          itemsInfo {
                            items {
                              title
                              description
                              icon {
                                mediaImage1 {
                                  url
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            ... on NodeLanding {
              __typename
              id
              title
              metatag {
                ... on MetaTagValue {
                  __typename
                  attributes {
                    content
                  }
                }
              }
              content {
                ... on ParagraphContainerViewSchoolWithFilte {
                  id
                  componentViewSchoolsFilters {
                    behaviors {
                      background_behavior {
                        background_position
                        background_style
                        select_color
                        image {
                          url
                          alt
                        }
                      }
                      margin_behavior {
                        margin_bottom
                        margin_left
                        margin_right
                        margin_top
                      }
                      padding_behavior {
                        padding_bottom
                        padding_left
                        padding_right
                        padding_top
                      }
                    }
                    viewSchoolsWithFilter(filter: {key: "field_city_target_id", value: ""}) {
                      ... on SchoolFilterViewResult {
                        id
                        results {
                          ... on NodeSchool {
                            id
                            title
                            path
                            carruselImages {
                              mediaImage {
                                url
                                alt
                              }
                            }
                          }
                        }
                      }
                    }
                    componenteTitle {
                      title
                      pSubtitle
                    }
                    button {
                      url {
                        title
                        url
                      }
                    }
                  }
                }
                ... on ParagraphContainerWhatsThereToDo {
                  id
                  componentWhatsThereTo {
                    behaviors {
                        background_behavior {
                          background_position
                          background_style
                          select_color
                          image {
                            url
                            alt
                          }
                        }
                        margin_behavior {
                          margin_bottom
                          margin_left
                          margin_right
                          margin_top
                        }
                        padding_behavior {
                          padding_bottom
                          padding_left
                          padding_right
                          padding_top
                        }
                    }
                    componenteTitle {
                      title
                      pSubtitle
                    }
                    button {
                      url {
                        title
                        url
                      }
                    }
                    slideWhatsThereToDo {
                      ... on WhatSThereToDoResult {
                        id
                        results {
                          ... on NodeEvent {
                            id
                            title
                            path
                            eventType {
                              name
                            }
                            carruselImages {
                              mediaImage {
                                url
                                alt
                              }
                            }
                            datesEvent {
                              start {
                                timestamp
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on ParagraphContainerTabsCardsIcon {
                  id
                  componentTabsCard {
                    tabsTitle
                    tabs {
                      tabTitle
                      itemsCard {
                        title
                        link {
                          url
                        }
                        icon {
                          mediaImage1 {
                            url
                            alt
                          }
                        }
                      }
                    }
                  }
                }
                ... on ParagraphContainerCarruselLivingPlace {
                  id
                  componentCarruselVivienda {
                    behaviors {
                      background_behavior {
                        background_position
                        background_style
                        select_color
                        image {
                          url
                          alt
                        }
                      }
                      margin_behavior {
                        margin_bottom
                        margin_left
                        margin_right
                        margin_top
                      }
                      padding_behavior {
                        padding_bottom
                        padding_left
                        padding_right
                        padding_top
                      }
                    }
                    carruselVivienda {
                      ... on ProyectosViviendaResult {
                        id
                        results {
                          ... on NodeHousingProject {
                            id
                            title
                            livingPlaceSubtitle {
                              processed
                            }
                            livingPlaceLogo {
                              mediaImage {
                                url
                                alt
                              }
                            }
                            livingPlacePrice {
                              price
                              subsidyApplies
                            }
                            path
                            tabsInfo {
                              itemsInfo {
                                items {
                                  title
                                  description
                                  icon {
                                    mediaImage1 {
                                      url
                                      alt
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    componenteTitle {
                      title
                      pSubtitle
                    }
                  }
                }
                ... on ParagraphContainerComponentConvenio {
                  id
                  componentCarruselConveni {
                    behaviors {
                      background_behavior {
                        background_position
                        background_style
                        select_color
                        image {
                          url
                          alt
                        }
                      }
                      margin_behavior {
                        margin_bottom
                        margin_left
                        margin_right
                        margin_top
                      }
                      padding_behavior {
                        padding_bottom
                        padding_left
                        padding_right
                        padding_top
                      }
                    }
                    button {
                      url {
                        url
                        title
                      }
                    }
                    componenteTitle {
                      title
                      pSubtitle
                    }
                    itemsCardImage {
                      title
                      image {
                        mediaImage {
                          url
                          alt
                        }
                      }
                      link {
                        url
                      }
                    }
                  }
                }
                ... on ParagraphContainerBreaker {
                  id
                  componentBreaker {
                    sectionSubtitle
                    sectionTitle
                    behaviors {
                      background_behavior {
                        background_position
                        background_style
                        select_color
                        image {
                          url
                          alt
                        }
                      }
                      margin_behavior {
                        margin_bottom
                        margin_left
                        margin_right
                        margin_top
                      }
                      padding_behavior {
                        padding_bottom
                        padding_left
                        padding_right
                        padding_top
                      }
                    }
                    componentButtons {
                      buttons {
                        url {
                          url
                          title
                        }
                      }
                    }
                    componenteTitle {
                      title
                      pSubtitle
                    }
                    image {
                      mediaImage {
                        url
                        alt
                      }
                    }
                    imageMobile {
                      mediaImage {
                        alt
                        url
                      }
                    }
                  }
                }
                ... on ParagraphContainerNewstest {
                  id
                  componentNewstest {
                    viewNews {
                      ... on NoticesGraphql1Result {
                        id
                        results {
                          ... on NodeNews {
                            title
                            path
                            created {
                              timestamp
                            }
                            newsImage {
                              mediaImage {
                                url
                                alt
                              }
                            }
                          }
                        }
                      }
                    }
                    componenteTitle {
                      title
                      pSubtitle
                    }
                    button {
                      url {
                        title
                        url
                      }
                    }
                  }
                }
                ... on ParagraphContainerCifra {
                  id
                  componentCifras {
                    itemsCifras {
                      title
                      eyebrow
                      icon {
                        mediaImage1 {
                          url
                          alt
                        }
                      }
                    }
                    componenteTitle {
                      title
                      pSubtitle
                    }
                  }
                }
                ... on ParagraphContainerSlideBanner {
                  id
                  componentSlideBanner {
                    behaviors {
                      background_behavior {
                        background_position
                        background_style
                        select_color
                        image {
                          url
                          alt
                        }
                      }
                      margin_behavior {
                        margin_bottom
                        margin_left
                        margin_right
                        margin_top
                      }
                      padding_behavior {
                        padding_bottom
                        padding_left
                        padding_right
                        padding_top
                      }
                    }
                    itemsBanner {
                      componenteTitle {
                        title
                        pSubtitle
                      }
                      image {
                        mediaImage {
                          url
                          alt
                        }
                      }
                      button {
                        url {
                          url
                          title
                        }
                      }
                    }
                  }
                }
                ... on ParagraphContainerSectionHelpCenter {
                  id
                  componentHelpCenter {
                    behaviors {
                      background_behavior {
                        background_position
                        background_style
                        select_color
                        image {
                          url
                          alt
                        }
                      }
                      margin_behavior {
                        margin_bottom
                        margin_left
                        margin_right
                        margin_top
                      }
                      padding_behavior {
                        padding_bottom
                        padding_left
                        padding_right
                        padding_top
                      }
                    }
                    componenteTitle {
                      title
                      pSubtitle
                    }
                    itemsCardsHelp {
                      title
                      link {
                        url
                      }
                    }
                  }
                }
                ... on ParagraphTextoHtmlYBotonOpcional {
                  id
                  componentTextHtmlButton {
                    behaviors {
                      background_behavior {
                        background_position
                        background_style
                        select_color
                        image {
                          url
                          alt
                        }
                      }
                      margin_behavior {
                        margin_bottom
                        margin_left
                        margin_right
                        margin_top
                      }
                      padding_behavior {
                        padding_bottom
                        padding_left
                        padding_right
                        padding_top
                      }
                    }
                    button {
                      url {
                        url
                        title
                      }
                    }
                    textHtml {
                      processed
                    }
                    imageTextHtml {
                      mediaImage2 {
                        alt
                        url
                      }
                    }
                  }
                }
                ... on ParagraphContainerBreakerCardsIcon {
                  id
                  componentBreakerCards {
                    itemsCard {
                      title
                      icon {
                        mediaImage1 {
                          url
                          alt
                        }
                      }
                    }
                    title
                    textHtml {
                      processed
                    }
                  }
                }
                ... on ParagraphContainerCardsIcon {
                  id
                  componentCardsIcon {
                    behaviors {
                      background_behavior {
                        background_position
                        background_style
                        select_color
                        image {
                          url
                          alt
                        }
                      }
                      margin_behavior {
                        margin_bottom
                        margin_left
                        margin_right
                        margin_top
                      }
                      padding_behavior {
                        padding_bottom
                        padding_left
                        padding_right
                        padding_top
                      }
                    }
                    itemsCard {
                      title
                      link {
                        title
                        url
                      }
                      icon {
                        mediaImage1 {
                          title
                          url
                        }
                      }
                    }
                    sectionTitle
                  }
                }
                ... on ParagraphContainerSectionLink {
                  id
                  componentSectionLinks {
                    behaviors {
                      background_behavior {
                        background_position
                        background_style
                        select_color
                        image {
                          url
                          alt
                        }
                      }
                      margin_behavior {
                        margin_bottom
                        margin_left
                        margin_right
                        margin_top
                      }
                      padding_behavior {
                        padding_bottom
                        padding_left
                        padding_right
                        padding_top
                      }
                    }
                    itemsCardsLink {
                      componenteTitle {
                        pSubtitle
                        title
                      }
                      button {
                        url {
                          title
                          url
                        }
                      }
                    }
                  }
                }
                ... on ParagraphContainerCarruselRecreational {
                  id
                  componentCarruselRecreation {
                    behaviors {
                      background_behavior {
                        background_position
                        background_style
                        select_color
                        image {
                          url
                          alt
                        }
                      }
                      margin_behavior {
                        margin_bottom
                        margin_left
                        margin_right
                        margin_top
                      }
                      padding_behavior {
                        padding_bottom
                        padding_left
                        padding_right
                        padding_top
                      }
                    }
                    componenteTitle {
                      pSubtitle
                      title
                    }
                    viewRecreationalCenter {
                      ... on CarruselRecreationCentersResult {
                        id
                        results {
                          ... on NodeRecreationalCenter {
                            id
                            title
                            path
                            carruselImages {
                              mediaImage {
                                alt
                                url
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on ParagraphContainerTabsVideo {
                  id
                  componentTabsVideo {
                    behaviors {
                      background_behavior {
                        background_position
                        background_style
                        select_color
                        image {
                          url
                          alt
                        }
                      }
                      margin_behavior {
                        margin_bottom
                        margin_left
                        margin_right
                        margin_top
                      }
                      padding_behavior {
                        padding_bottom
                        padding_left
                        padding_right
                        padding_top
                      }
                    }
                    componenteTitle {
                      pSubtitle
                      uuid
                    }
                    itemsTabVideo {
                      titleTab
                      videos {
                        path
                        remoteVideo
                      }
                    }
                  }
                }
                ... on ParagraphSlideAgreementsFeature {
                  id
                  componentSlideAgreements {
                    behaviors {
                      background_behavior {
                        background_position
                        background_style
                        select_color
                        image {
                          url
                          alt
                        }
                      }
                      margin_behavior {
                        margin_bottom
                        margin_left
                        margin_right
                        margin_top
                      }
                      padding_behavior {
                        padding_bottom
                        padding_left
                        padding_right
                        padding_top
                      }
                    }
                    button {
                      url {
                        url
                        title
                      }
                    }
                    componenteTitle {
                      title
                      pSubtitle
                    }
                    itemsCardsAgreementsFeatures {
                      componenteTitle {
                        pSubtitle
                        title
                      }
                      image {
                        mediaImage {
                          url
                          alt
                        }
                        path
                      }
                      discountRate
                    }
                  }
                }
                ... on ParagraphContainerTextHtml {
                  id
                  componentTextHtml {
                    behaviors {
                      background_behavior {
                        background_position
                        background_style
                        select_color
                        image {
                          url
                          alt
                        }
                      }
                      margin_behavior {
                        margin_bottom
                        margin_left
                        margin_right
                        margin_top
                      }
                      padding_behavior {
                        padding_bottom
                        padding_left
                        padding_right
                        padding_top
                      }
                    }
                    textHtml {
                      processed
                    }
                  }
                }
                ... on ParagraphContainerSlideLodging {
                  id
                  componentSlideLodging {
                    behaviors {
                      background_behavior {
                        background_position
                      }
                    }
                    componenteTitle {
                      title
                      pSubtitle
                    }
                    slideLodging {
                      ... on ViewLodgingResult {
                        id
                        results {
                          ... on NodeLodging {
                            id
                            title
                            subTitle
                            lodgingServices {
                              itemsIcons {
                                title
                                icon {
                                  mediaImage1 {
                                    url
                                    alt
                                  }
                                }
                              }
                            }
                            petFriendly
                            seasonalDiscount
                            path
                            carruselImages {
                              mediaImage {
                                url
                                alt
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on ParagraphSlideTurismo {
                  componentSlideTurism {
                    behaviors {
                      background_behavior {
                        background_position
                        background_style
                        select_color
                        image {
                          url
                          alt
                        }
                      }
                      margin_behavior {
                        margin_bottom
                        margin_left
                        margin_right
                        margin_top
                      }
                      padding_behavior {
                        padding_bottom
                        padding_left
                        padding_right
                        padding_top
                      }
                    }
                    persons: slideTurismo(
                    filter: { key: "field_to_whom_target_id", value: "Personas" }
                    ) {
                      ... on TurismoSlideResult {
                        results {
                          ... on NodeRecreationActivity {
                            title
                            path
                            carruselImages {
                              mediaImage {
                                url
                                alt
                              }
                            }
                          }
                        }
                      }
                    }
                    enterprises: slideTurismo(
                    filter: { key: "field_to_whom_target_id", value: "Empresas" }
                    ) {
                      ... on TurismoSlideResult {
                        results {
                          ... on NodeRecreationActivity {
                            title
                            path
                            carruselImages {
                              mediaImage {
                                url
                                alt
                              }
                            }
                          }
                        }
                      }
                    }
                    componenteTitle {
                      title
                      pSubtitle
                    }
                  }
                }
                ... on ParagraphContainerIconsGrid {
                  id
                  componentIconsGrid {
                    behaviors {
                      background_behavior {
                        background_position
                        background_style
                        select_color
                        image {
                          url
                          alt
                        }
                      }
                      margin_behavior {
                        margin_bottom
                        margin_left
                        margin_right
                        margin_top
                      }
                      padding_behavior {
                        padding_bottom
                        padding_left
                        padding_right
                        padding_top
                      }
                    }
                    itemsIcons {
                      icon {
                        mediaImage1 {
                          url
                          alt
                        }
                      }
                      title
                    }
                    textHtml {
                      processed
                    }
                  }
                }

              }
            }

          }
        }
      }
    }`,
    variables: {
      path: path?.entity?.path!,
    },
  })

  const node = nodes?.route.entity ?? null
  if (!node) {
    throw new Error(`Failed to fetch resource: ${path?.jsonapi?.individual}`)
  }

  if (!context.preview && !node) {
    return {
      notFound: true,
    }
  }
  const preFooter = await query<{
    blockContentPreFooters: {
      nodes: [{ componentPreFooter: [] }]
    }
  }>({
    query: `query{
    blockContentPreFooters(first: 1) {
      nodes {
        componentPreFooter {
          title
          pSubtitle
          icon {
            mediaImage1 {
              url
              alt
            }
          }
        }
      }
    }
  }`,
  })
  const accessibility = await query<{
    blockContentAccessibilities: {
      block: AccessibilityProps[]
    }
  }>({
    query: `query BlockAccessibility {
  blockContentAccessibilities(first: 1) {
    block: nodes {
      items {
        icon {
          mediaImage1 {
            url
            alt
          }
        }
        link {
          url
        }
      }
    }
  }
}`,
  })

  const {
    MAIN,
    FOOTER_POLICIES,
    FOOTER_INTEREST,
    VIRTUAL_BRANCH,
    VIRTUAL_STORE,
    FOOTER_SOCIAL,
  } = await getMenus([
    'MAIN',
    'FOOTER_POLICIES',
    'FOOTER_INTEREST',
    'VIRTUAL_BRANCH',
    'VIRTUAL_STORE',
    'FOOTER_SOCIAL',
  ])

  return {
    props: {
      paths: node,
      accessibility: accessibility?.blockContentAccessibilities.block[0],
      node: node,
      menus: {
        preFooter: preFooter?.blockContentPreFooters?.nodes[0],
        header: { main: MAIN, virtualMenu: VIRTUAL_BRANCH, virtualStore: VIRTUAL_STORE },
        footer: { policies: FOOTER_POLICIES, interest: FOOTER_INTEREST },
      },
    },
    revalidate: 5,
  }
}
