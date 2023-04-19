import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { CityContext } from './userCity'
import { Skeleton } from '@mui/material'
import { Noto_Sans } from 'next/font/google'
import { Source_Sans_Pro } from 'next/font/google'

const notoSans = Noto_Sans({ subsets: ['latin'], weight: '400' })
const source_sans_pro = Source_Sans_Pro({ subsets: ['latin'], weight: '600' })

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
            <section className={notoSans.className} id='forecastSection'>
                <h1 className={source_sans_pro.className}>Forecast <h5 className={notoSans.className}>Next seven days</h5></h1>
                <div className='wrapperInline'>
                    {mappedInfo}
                </div>
            </section>
        )
    } else {
        return (
            <section id='forecastSection'>
                <h1 className={source_sans_pro.className}>Forecast <h5 className={notoSans.className}>Next seven days</h5></h1>
                <div className='wrapperInline'>
                    <Skeleton className='dayCard' variant="rounded" width={`90%`} height={64} />
                    <Skeleton className='dayCard' variant="rounded" width={`90%`} height={64} />
                    <Skeleton className='dayCard' variant="rounded" width={`90%`} height={64} />
                    <Skeleton className='dayCard' variant="rounded" width={`90%`} height={64} />
                    <Skeleton className='dayCard' variant="rounded" width={`90%`} height={64} />
                    <Skeleton className='dayCard' variant="rounded" width={`90%`} height={64} />
                    <Skeleton className='dayCard' variant="rounded" width={`90%`} height={64} />
                </div>
            </section>
        )
    }

}

export default ForecastSection