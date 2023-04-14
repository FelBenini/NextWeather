import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { CityContext } from './userCity'
import LoadingArea from './loadingArea'
import { Skeleton } from '@mui/material'

const ForecastSection = ({ cityName }: { cityName: string | undefined | string[] }) => {
    const { city } = useContext(CityContext)
    const [info, setInfo] = useState(null) as any
    const fetchData = async () => {
        const { data } = await axios.get(`/api/city/forecast/${cityName}`)
        setInfo(data)
    }

    useEffect(() => {
        fetchData()
    }, [city, cityName])

    if (info !== null) {
        const mappedInfo = info.data.map((element: any, index: any) => {
            return (
                <div className='dayCard dayCardReady' key={index}>
                    <p>{element.date.replaceAll('-', '/')}</p>
                </div>
            )
        })

        return (
            <section id='forecastSection'>
                <h1>Next seven days</h1>
                <div className='wrapperInline'>
                    {mappedInfo}
                </div>
            </section>
        )
    } else {
        return (
            <section id='forecastSection'>
                <h1>Next seven days</h1>
                <div className='wrapperInline'>
                    <Skeleton className='dayCard' variant="rounded" width={210} height={218} />
                    <Skeleton className='dayCard' variant="rounded" width={210} height={218} />
                    <Skeleton className='dayCard' variant="rounded" width={210} height={218} />
                    <Skeleton className='dayCard' variant="rounded" width={210} height={218} />
                    <Skeleton className='dayCard' variant="rounded" width={210} height={218} />
                    <Skeleton className='dayCard' variant="rounded" width={210} height={218} />
                    <Skeleton className='dayCard' variant="rounded" width={210} height={218} />
                </div>
            </section>
        )
    }

}

export default ForecastSection