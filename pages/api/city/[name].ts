import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const apiKey = process.env.API_KEY
const pexelsKey = process.env.PEXELS_API_KEY

type Data = {
  data: string | string[] | undefined,
  status: number,
  bgImg?: string | string[] | undefined
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const name = req.query.name
    try {
       const info = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${name}&aqi=no`)
       const img = await axios.get(`https://api.pexels.com/v1/search?query=${name} city&per_page=1&orientation=landscape`, {headers: {'Authorization': pexelsKey}})
       res.status(200).json({data: info.data, status: info.status, bgImg: img.data.photos[0].src.large2x})
    } catch (err) {
      res.status(404).json({data: 'City not found', status: 404})  
    }
    //commit
}