import { drupal } from 'lib/drupal'

export default async function handler(req: any, res: any) {
  return await drupal.preview(req, res)
}
