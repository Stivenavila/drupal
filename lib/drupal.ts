import { DrupalClient } from 'next-drupal'

export const drupal = new DrupalClient(
  process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
  {
    auth: {
      clientId: process.env.DRUPAL_CLIENT_ID,
      clientSecret: process.env.DRUPAL_CLIENT_SECRET,
    },
  }
)

export const graphqlEndpoint = drupal.buildUrl('/graphql')
type QueryPayload = {
  query: string
  variables?: Record<string, string>
}
type QueryJsonResponse<DataType> = {
  data?: DataType
  errors?: { message: string }[]
}

export async function query<DataType>(payload: QueryPayload) {
  const response = await drupal.fetch(graphqlEndpoint.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    withAuth: true,
  })
  if (!response?.ok) {
    throw new Error(response.statusText)
  }
  const { data, errors }: QueryJsonResponse<DataType> = await response.json()
  if (errors) {
    console.log(errors)
    throw new Error(errors?.map(e => e.message).join('\n') ?? 'unknown')
  }
  return data
}
