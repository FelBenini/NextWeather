import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const apiKey = process.env.API_KEY

type Data = {
  data: string | string[] | undefined,
  status: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const name = req.query.name
    try {
       const info = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${name}&aqi=no`)
       res.status(200).json({data: info.data, status: info.status})
    } catch (err) {
      res.status(404).json({data: 'City not found', status: 404})  
    }
}