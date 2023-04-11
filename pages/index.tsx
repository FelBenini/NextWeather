import Head from 'next/head'
import { useState, useContext } from 'react'
import LoadingArea from '@/components/loadingArea'
import { CityContext } from '@/components/userCity'

export default function Home() {
  const {city} = useContext(CityContext)
  const [loading, setLoading] = useState(true)
  const Loader = () => {
    if (loading) {
      return (
        <LoadingArea/>
      )
    } else {
      return (
        <></>
      )
    }
  }
  return (
    <>
      <Head>
        <title>WeatherTracker</title>
        <meta name="description" content="Real time weather from all the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <main>
        {city}
        <Loader/>
      </main>
    </>
  )
}
