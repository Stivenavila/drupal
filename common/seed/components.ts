import { TabsInfoProps } from '@/components/molecules/Tabs/TabsInfo'
import { TabsVideoProps } from '@/components/molecules/Tabs/TabsVideo'
import { ITabs } from 'common/interfaces'

export const dataTabs: ITabs = {
  tabsTitle: 'Servicios en línea',
  tabs: [
    {
      tabTitle: 'Personas',
      itemsCard: [
        {
          title: 'Quiero afiliarme',
          link: {
            url: 'https://console.platform.sh/esinergiaco/25lkh7ad6hcei',
          },
          icon: {
            mediaImage1: {
              url: 'https://picsum.photos/65/65',
              alt: 'afiliaciones',
            },
          },
        },
        {
          title: 'Gestionar subsidios',
          link: {
            url: 'https://console.platform.sh/esinergiaco/25lkh7ad6hcei',
          },
          icon: {
            mediaImage1: {
              url: 'https://api.ddev.site/sites/default/files/2023-12/dinero.svg',
              alt: 'dinero',
            },
          },
        },
        {
          title: 'Generar certificados',
          link: {
            url: 'https://console.platform.sh/esinergiaco/25lkh7ad6hcei',
          },
          icon: {
            mediaImage1: {
              url: 'https://api.ddev.site/sites/default/files/2023-12/carpeta.svg',
              alt: 'carpeta',
            },
          },
        },
        {
          title: 'Solicitar cita médica',
          link: {
            url: 'https://console.platform.sh/esinergiaco/25lkh7ad6hcei',
          },
          icon: {
            mediaImage1: {
              url: 'https://api.ddev.site/sites/default/files/2023-12/Calendar.svg',
              alt: 'calendar',
            },
          },
        },
        {
          title: 'Pagos en línea',
          link: {
            url: 'https://console.platform.sh/esinergiaco/25lkh7ad6hcei',
          },
          icon: {
            mediaImage1: {
              url: 'https://api.ddev.site/sites/default/files/2023-12/wallet.svg',
              alt: 'wallet',
            },
          },
        },
        {
          title: 'Tienda virtual',
          link: {
            url: 'https://console.platform.sh/esinergiaco/25lkh7ad6hcei',
          },
          icon: {
            mediaImage1: {
              url: 'https://api.ddev.site/sites/default/files/2023-12/market_car.svg',
              alt: 'market car',
            },
          },
        },
      ],
    },
    {
      tabTitle: 'Empresas',
      itemsCard: [
        {
          title: 'Generar certificados',
          link: {
            url: 'https://console.platform.sh/esinergiaco/25lkh7ad6hcei',
          },
          icon: {
            mediaImage1: {
              url: 'https://api.ddev.site/sites/default/files/2023-12/carpeta.svg',
              alt: 'carpeta',
            },
          },
        },
        {
          title: 'Tienda virtual',
          link: {
            url: 'https://console.platform.sh/esinergiaco/25lkh7ad6hcei',
          },
          icon: {
            mediaImage1: {
              url: 'https://api.ddev.site/sites/default/files/2023-12/market_car.svg',
              alt: 'market car',
            },
          },
        },
      ],
    },
  ],
}

export const dataTabsInfo: TabsInfoProps['itemsInfo'] = [
  {
    tabTitle: 'Características',
    items: [
      {
        title: 'Área construida',
        description: '62.11 m2',
      },
      {
        title: 'Habitaciones',
        description: '3',
        icon: {
          mediaImage1: {
            url: 'https://api.ddev.site/sites/default/files/2023-12/rooms.svg',
            alt: 'rooms',
          },
        },
      },
      {
        title: 'Baños',
        description: '2',
        icon: {
          mediaImage1: {
            url: 'https://api.ddev.site/sites/default/files/2023-12/bathrooms.svg',
            alt: 'bathrooms',
          },
        },
      },
      {
        title: 'Parqueadero',
        description: '1',
        icon: {
          mediaImage1: {
            url: 'https://api.ddev.site/sites/default/files/2023-12/parking.svg',
            alt: 'parking',
          },
        },
      },
      {
        title: 'Subsidio',
        description: 'Aplica',
      },
    ],
    tabBody: {
      processed:
        '<p>El Macroproyecto las Vegas de test, está localizado en el sur de Cali, en uno de los sectores de gran valorización inmobiliaria, cercano a colegios, universidades, supermercados, centros comerciales y clínicas del sur de Cali, cuenta con fácil acceso a la autopista Simón Bolívar y al servicio de transporte MIO, cuenta con doble zona verde por habitante, que en el resto de proyectos VIS de la ciudad, convirtiéndolo en una gran opción para invertir e iniciar tu sueño de tener vivienda propia. Además, cuenta en su parte externa con un sistema recreativo y deportivo de 7 parques de uso colectivo, destinados a disfrutar del tiempo libre, la recreación y el deporte de las familias y vecinos.</p>\n\n<p>El conjunto cerrado GARDENIAS, son apartamentos en edificios que está compuesto en torres de 8 pisos, con cerramiento y portería, los apartamentos tienen un área construida de 62,11 m2 con precios desde $189.750.000. (150 salarios mínimos del año de entrega), cuentan con parqueadero propio por cada apartamento y la posibilidad de tener 3 alcobas y un estudio.</p>',
    },
  },
  {
    tabTitle: 'Zonas comunes',
    items: [
      {
        title: '',
        description: '',
      },
    ],
    tabBody: {
      processed:
        '<p>las Vegas de test, está localizado en el sur de Cali, en uno de los sectores de gran valorización inmobiliaria, cercano a colegios, universidades, supermercados, centros comerciales y clínicas del sur de Cali, cuenta con fácil acceso a la autopista Simón Bolívar y al servicio de transporte MIO, cuenta con doble zona verde por habitante, que en el resto de proyectos VIS de la ciudad, convirtiéndolo en una gran opción para invertir e iniciar tu sueño de tener vivienda propia. Además, cuenta en su parte externa con un sistema recreativo y deportivo de 7 parques de uso colectivo, destinados a disfrutar del tiempo libre, la recreación y el deporte de las familias y vecinos.</p>\n\n<p>El conjunto cerrado GARDENIAS, son apartamentos en edificios que está compuesto en torres de 8 pisos, con cerramiento y portería, los apartamentos tienen un área construida de 62,11 m2 con precios desde $189.750.000. (150 salarios mínimos del año de entrega), cuentan con parqueadero propio por cada apartamento y la posibilidad de tener 3 alcobas y un estudio.</p>',
    },
  },
  {
    tabTitle: 'Detalles',
    items: [
      {
        title: '',
        description: '',
      },
    ],
    tabBody: {
      processed:
        '<p>El en uno de los sectores de gran valorización inmobiliaria, cercano a colegios, universidades, supermercados, centros comerciales y clínicas del sur de Cali, cuenta con fácil acceso a la autopista Simón Bolívar y al servicio de transporte MIO, cuenta con doble zona verde por habitante, que en el resto de proyectos VIS de la ciudad, convirtiéndolo en una gran opción para invertir e iniciar tu sueño de tener vivienda propia. Además, cuenta en su parte externa con un sistema recreativo y deportivo de 7 parques de uso colectivo, destinados a disfrutar del tiempo libre, la recreación y el deporte de las familias y vecinos.</p>\n\n<p>El conjunto cerrado GARDENIAS, son apartamentos en edificios que está compuesto en torres de 8 pisos, con cerramiento y portería, los apartamentos tienen un área construida de 62,11 m2 con precios desde $189.750.000. (150 salarios mínimos del año de entrega), cuentan con parqueadero propio por cada apartamento y la posibilidad de tener 3 alcobas y un estudio.</p>',
    },
  },
  {
    tabTitle: 'Planos',
    items: [
      {
        title: '',
        description: '',
      },
    ],
    tabBody: {
      processed:
        '<p>Cali, en uno de los sectores de gran valorización inmobiliaria, cercano a colegios, universidades, supermercados, centros comerciales y clínicas del sur de Cali, cuenta con fácil acceso a la autopista Simón Bolívar y al servicio de transporte MIO, cuenta con doble zona verde por habitante, que en el resto de proyectos VIS de la ciudad, convirtiéndolo en una gran opción para invertir e iniciar tu sueño de tener vivienda propia. Además, cuenta en su parte externa con un sistema recreativo y deportivo de 7 parques de uso colectivo, destinados a disfrutar del tiempo libre, la recreación y el deporte de las familias y vecinos.</p>\n\n<p>El conjunto cerrado GARDENIAS, son apartamentos en edificios que está compuesto en torres de 8 pisos, con cerramiento y portería, los apartamentos tienen un área construida de 62,11 m2 con precios desde $189.750.000. (150 salarios mínimos del año de entrega), cuentan con parqueadero propio por cada apartamento y la posibilidad de tener 3 alcobas y un estudio.</p>',
    },
  },
]

export const dataVideo: TabsVideoProps['itemsTabVideo'] =
  [
    {
      "titleTab": "Personas",
      "videos": [
        {

          "path": "/es/media/117/edit",
          "remoteVideo": "https://www.youtube.com/watch?v=11lK2K2iWlU",
          "title": "Titulo Person",
          "image": {
            "mediaImage": {
              "url": "https://picsum.photos/200/300",
              "alt": "Banner1",
            },
          },
        },
        {
          "path": "/es/media/118/edit",
          "remoteVideo": "https://www.youtube.com/watch?v=I2EtclcaZYc",
          "title": "Titulo Person2",
          "image": {
            "mediaImage": {
              "url": "https://picsum.photos/200/200",
              "alt": "Banner1",
            },
          },
        },
        {
          "path": "/es/media/119/edit",
          "remoteVideo": "https://www.youtube.com/watch?v=dFnYSvFjIUA",
          "title": "Titulo Person3",
          "image": {
            "mediaImage": {
              "url": "https://picsum.photos/200/250",
              "alt": "Banner1",
            },
          },
        },
        {
          "path": "/es/media/120/edit",
          "remoteVideo": "https://www.youtube.com/watch?v=kjZsvFayf_E",
          "title": "Titulo Person4",
          "image": {
            "mediaImage": {
              "url": "https://picsum.photos/200/280",
              "alt": "Banner1",
            },
          },
        },
        {
          "path": "/es/media/121/edit",
          "remoteVideo": "https://www.youtube.com/watch?v=jITFJT3KM8c",
          "title": "Titulo Person5",
          "image": {
            "mediaImage": {
              "url": "https://picsum.photos/250/350",
              "alt": "Banner1",
            },
          },
        }
      ]
    },
    {
      "titleTab": "Empresas",
      "videos": [
        {
          "path": "/es/media/121/edit",
          "remoteVideo": "https://www.youtube.com/watch?v=jITFJT3KM8c",
          "title": "Titulo Person5",
          "image": {
            "mediaImage": {
              "url": "https://picsum.photos/250/350",
              "alt": "Banner1",
            },
          },
        },
        {
          "path": "/es/media/120/edit",
          "remoteVideo": "https://www.youtube.com/watch?v=kjZsvFayf_E",
          "title": "Titulo Person4",
          "image": {
            "mediaImage": {
              "url": "https://picsum.photos/200/280",
              "alt": "Banner1",
            },
          },
        },
      ]
    }
  ]

export const dataSchoolView = {
  "results": [
    {
      "id": "56",
      "carruselImages": [
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-cdc-3992949.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-rebecca-zaal-764681.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-this-is-zun-1164572%201.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-dids-2675061%201.png",
            "alt": "Imagenes colegios"
          }
        }
      ],
      "title": "Colegio test Buga 7",
      "path": "/es/node/56"
    },
    {
      "id": "55",
      "carruselImages": [
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-cdc-3992949.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-rebecca-zaal-764681.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-this-is-zun-1164572%201.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-dids-2675061%201.png",
            "alt": "Imagenes colegios"
          }
        }
      ],
      "title": "Colegio test Buga 6",
      "path": "/es/node/55"
    },
    {
      "id": "54",
      "carruselImages": [
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-cdc-3992949.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-rebecca-zaal-764681.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-this-is-zun-1164572%201.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-dids-2675061%201.png",
            "alt": "Imagenes colegios"
          }
        }
      ],
      "title": "Colegio test Buga 5",
      "path": "/es/node/54"
    },
    {
      "id": "53",
      "carruselImages": [
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-cdc-3992949.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-rebecca-zaal-764681.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-this-is-zun-1164572%201.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-dids-2675061%201.png",
            "alt": "Imagenes colegios"
          }
        }
      ],
      "title": "Colegio test Buga 4",
      "path": "/es/node/53"
    },
    {
      "id": "52",
      "carruselImages": [
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-cdc-3992949.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-rebecca-zaal-764681.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-this-is-zun-1164572%201.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-dids-2675061%201.png",
            "alt": "Imagenes colegios"
          }
        }
      ],
      "title": "Colegio test Buga 3",
      "path": "/es/node/52"
    },
    {
      "id": "51",
      "carruselImages": [
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-cdc-3992949.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-rebecca-zaal-764681.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-this-is-zun-1164572%201.png",
            "alt": "Imagenes colegios"
          }
        },
        {
          "mediaImage": {
            "url": "https://api.ddev.site/sites/default/files/2024-01/pexels-dids-2675061%201.png",
            "alt": "Imagenes colegios"
          }
        }
      ],
      "title": "Colegio test Buga 2",
      "path": "/es/node/51"
    }
  ]
}