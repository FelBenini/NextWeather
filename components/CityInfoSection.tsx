import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { LoadingContext } from './loadingContext'
import LoadingArea from './loadingArea'
import { Source_Sans_Pro } from 'next/font/google'
import { Noto_Sans } from 'next/font/google'
import Image from 'next/image'
import ForecastSection from './ForecastSection'
import { CityContext } from './userCity'

const notoSans = Noto_Sans({ subsets: ['latin'], weight: '400' })
const source_sans_pro = Source_Sans_Pro({ subsets: ['latin'], weight: '600' })

const CityInfoSection = ({ cityName }: { cityName: string | undefined | string[] }) => {
    const { loading, setLoading } = useContext(LoadingContext)
    const [info, setInfo] = useState(null) as any
    const { city } = useContext(CityContext)

    const fetchData = async (cityName: string | undefined | string[]) => {
        if (cityName !== '' && cityName !== undefined) {
            const { data } = await axios.get(`/api/city/${cityName}`)
            setInfo(data)
            setLoading(false)

            const fetchAgain = setTimeout(() => {
                fetchData(cityName)
            }, 300000);
            return () => clearTimeout(fetchAgain);
        } else {
        }
    }

    useEffect(() => {
        setLoading(true)
        fetchData(cityName)
    }, [city, cityName])

    if (info !== null && !loading) {
        return (
            <>
                <section id='citySection' style={{ backgroundImage: `linear-gradient(to top, #151617, #22242590, #22242580) ,url(${info.bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h1 className={source_sans_pro.className}>{info.data.location.name}
                        <h4>{info.data.location.country}</h4>
                    </h1>
                    <h3 className={notoSans.className}>Real time Weather - {info.data.current.condition.text}</h3>
                    <span className={`currentWeather`}>
                        <h2 className={notoSans.className}>{info.data.current.temp_c}º C<Image src={'https:'+info.data.current.condition.icon} alt={info.data.current.condition.text} width={42} height={42}/></h2>
                        <h2 className={notoSans.className}>{info.data.current.temp_f}º F<Image src={'https:'+info.data.current.condition.icon} width={42} alt={info.data.current.condition.text} height={42}/></h2>
                    </span>
                </section>
                <ForecastSection cityName={cityName} />
            </>
        )
    } else {
        return (
            <LoadingArea />
        )
    }

}

export default CityInfoSection