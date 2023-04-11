import React from 'react'
import { useRouter } from 'next/router'
import { Noto_Sans } from 'next/font/google'
import Head from 'next/head'

const notoSans = Noto_Sans({subsets: ['latin'], weight: '300'})

const CityPage = () => {
    const router = useRouter()
    const { name } = router.query
  return (
    <>
    <Head>
        <title>{name} weather</title>
        <meta name="description" content={`${name} real time weather`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className={notoSans.className}>{name}</main>
    </>
  )
}

export default CityPage