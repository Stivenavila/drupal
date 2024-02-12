import { IColor } from 'common/interfaces'
import { Grid } from 'common/utils/Grid'
import { Text } from '../Text/Text'
import { Heading } from '../Text/Heading'

const colorOptions: Array<{ color: IColor['color'] }> = [
  { color: 'primary' },
  { color: 'green' },
  { color: 'celeste' },
  { color: 'white' },
  { color: 'body' },
  { color: 'body-40' },
  { color: 'white-text' },
]

export const Colors = () => {
  return (
    <div>
      <Heading level={1}>Colors</Heading>
      <Grid columns={4}>
        <Text>
          <Heading
            color='body'
            level={2}
          >
            Color Azul Primario
          </Heading>
          <Text className='p-12 text-xl font-bold text-white bg-primary'></Text>
        </Text>
        <Text>
          <Heading
            className='text-green'
            color='body'
            level={2}
          >
            Color Green
          </Heading>
          <Text className={`p-12 bg-green text-white text-xl font-bold`}></Text>
        </Text>
        <Text>
          <Heading
            className='text-celeste'
            color='body'
            level={2}
          >
            Color Celeste
          </Heading>
          <Text className={`p-12 bg-celeste text-xl font-bold`}></Text>
        </Text>
        <Text>
          <Heading
            color='body'
            level={2}
          >
            Color Blanco
          </Heading>
          <Text className={`p-12 bg-white text-xl font-bold shadow-green`}></Text>
        </Text>
        <Text>
          <Heading
            color='body'
            className='text-body'
            level={2}
          >
            Color Textos
          </Heading>
          <Text className={`p-12 bg-body text-xl font-bold`}></Text>
        </Text>
        <Text>
          <Heading
            color='body'
            className='text-body-40'
            level={2}
          >
            Color Body
          </Heading>
          <Text className='p-12 text-xl font-bold bg-body-40'></Text>
        </Text>
        <Text>
          <Heading
            color='body'
            className='text-white-text'
            level={2}
          >
            Color Blanco text
          </Heading>
          <Text className='p-4 py-6 text-xl font-bold bg-white-text'></Text>
        </Text>
      </Grid>
    </div>
  )
}
