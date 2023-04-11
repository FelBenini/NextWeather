import Head from 'next/head'
import { useContext } from 'react'
import { CityContext } from '@/components/userCity'
import CityInfoSection from '@/components/CityInfoSection'

export default function Home() {
  const { city } = useContext(CityContext)
  return (
    <>
      <Head>
        <title>WeatherTracker</title>
        <meta name="description" content="Real time weather from all the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <main>
        <CityInfoSection cityName={city}/>
      </main>
    </>
  )
}
