// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import packageJson from '../../package.json'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader('X-App-Version', packageJson.version)
  res.status(200).json({ name: 'John Doe' })
}
