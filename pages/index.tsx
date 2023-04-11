import Head from 'next/head'
import { useState } from 'react'
import LoadingArea from '@/components/loadingArea'

export default function Home() {
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Loader/>
      </main>
    </>
  )
}
