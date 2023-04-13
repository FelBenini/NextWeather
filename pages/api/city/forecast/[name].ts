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
        const info = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${name}&days=8&aqi=no&alerts=no`)
        const forecastData = info.data.forecast.forecastday
        forecastData.shift()

        res.status(200).json({ data: forecastData, status: info.status })
    } catch (err) {
        res.status(404).json({ data: 'City not found', status: 404 })
    }
}