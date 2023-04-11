import React, { useEffect, useState, useContext } from 'react'
import { CityContext } from './userCity'
import axios from 'axios'
import { LoadingContext } from './loadingContext'
import LoadingArea from './loadingArea'

const CityInfoSection = ({cityName}: {cityName: string}) => {
    const { loading, setLoading } = useContext(LoadingContext)
    const [info, setInfo] = useState() as any

    const fetchData = async (cityName: string) => {
        let { data } = await axios.get(`/api/city/${cityName}`)
        setInfo(data)
        console.log(data)
        setLoading(false)
    }
    useEffect(() => {
        if (cityName !== '') {
            fetchData(cityName)
        }
    }, [cityName])
    if (!loading) {
        return (
            <section>
                {info.data.location.name}
            </section>
        )
    } else {
        return (
            <LoadingArea/>
        )
    }

}

export default CityInfoSection