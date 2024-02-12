import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { query } from '@/lib/drupal'

import { Home } from '@/components/templates/home/Home'
import { IMenusHome, IMetaTags } from 'common/interfaces'
import { getMenus } from 'common/utils/Menus'
import { AccessibilityProps } from '@/components/molecules/Button/Accessibility'

interface IndexPageProps {
  accessibility?: AccessibilityProps
  home: {
    nodes: [] | undefined
    metaTags: { attributes: IMetaTags }[] | undefined
  }
  menus: IMenusHome
}

export default function IndexPage({ home, menus, accessibility }: IndexPageProps) {
  // console.log(home.nodes)
  return (
    <Home
      accessibility={accessibility}
      menus={menus}
      nodes={home.nodes}
      metaTags={home?.metaTags && home.metaTags[0]?.attributes}
    />
  )
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const home = await query<{
    nodeLandings: {
      nodes: [
        {
          content: []
          metatag: []
        }
      ]
    }
  }>({
    query: `query {
         nodeLandings(first: 10) {
        nodes {
          title
          path
          id
          metatag {
            ... on MetaTagValue {
              __typename
              attributes {
                content
                name
              }
            }
          }
          content {
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
  `,
  })

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
}
  
  `,
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

  return {
    props: {
      accessibility: accessibility?.blockContentAccessibilities.block[0],
      home: {
        nodes: home?.nodeLandings?.nodes[0]?.content,
        metaTags: home?.nodeLandings?.nodes[0]?.metatag,
      },
      menus: {
        preFooter: preFooter?.blockContentPreFooters?.nodes[0],
        header: { main: MAIN, virtualMenu: VIRTUAL_BRANCH, virtualStore: VIRTUAL_STORE },
        footer: {
          policies: FOOTER_POLICIES,
          interest: FOOTER_INTEREST,
          social: FOOTER_SOCIAL,
        },
      },
    },
    revalidate: 5,
  }
}
