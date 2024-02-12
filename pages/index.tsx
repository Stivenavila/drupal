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
  menus: IMenusHome | undefined
}

export default function IndexPage({ home, menus, accessibility }: IndexPageProps) {
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
    revalidate: 10,
  }
}
