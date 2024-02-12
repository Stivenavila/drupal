export const fragmentHousing = `query MyQuery {
  nodeHousingProjects(first: 10) {
    nodes {
     __typename
      title
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
      livingPlaceTabs {
        tabsInfo {
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
                livingPlaceTabs {
                  tabsInfo {
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
  }
}`
