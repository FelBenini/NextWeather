import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { CityContext } from './userCity'
import { Skeleton } from '@mui/material'
import { Noto_Sans } from 'next/font/google'
import { Source_Sans_Pro } from 'next/font/google'
import Image from 'next/image'

const notoSans = Noto_Sans({ subsets: ['latin'], weight: '400' })
const source_sans_pro = Source_Sans_Pro({ subsets: ['latin'], weight: '600' })

interface Data {
    data: Array<any>
}

function epochToDate(epoch: number) {
    const dateObj = new Date(epoch * 1000);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }

const ForecastSection = ({ cityName }: { cityName: string | undefined | string[] }) => {
    const { city } = useContext(CityContext)
    const [info, setInfo] = useState<null | Data>(null)
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
                    <h4>{epochToDate(element.date_epoch)} <Image src={'https:'+element.day.condition.icon} width={32} height={32} alt={element.day.condition.text}/><h5 className={notoSans.className}> - {element.day.condition.text}</h5></h4>
                    <div>
                    <span>
                        <h5>Min temp</h5>
                            <p className={notoSans.className}>{element.day.mintemp_c}º C</p>
                        </span>
                        <span>
                            <h5>Max temp</h5>
                            <p className={notoSans.className}>{element.day.maxtemp_c}º C</p>
                        </span>
                        <span>
                            <h5>Chance of raining</h5>
                            <p className={notoSans.className}>{element.day.daily_chance_of_rain}%</p>
                        </span>
                        <span>
                            <h5>Humidity</h5>
                            <p className={notoSans.className}>{element.day.avghumidity}%</p>
                        </span>
                    </div>
                </div>
            )
        })

        return (
            <section className={notoSans.className} id='forecastSection'>
                <h1 className={source_sans_pro.className}>Forecast <h5 className={notoSans.className}>Next days</h5></h1>
                <div className='wrapperInline'>
                    {mappedInfo}
                </div>
            </section>
        )
    } else {
        return (
            <section id='forecastSection'>
                <h1 className={source_sans_pro.className}>Forecast <h5 className={notoSans.className}>Next days</h5></h1>
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