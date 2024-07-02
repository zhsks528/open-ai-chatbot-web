import { NextApiRequest, NextApiResponse } from 'next'

export default function healthCheck(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200
  res.send('OK')
}
