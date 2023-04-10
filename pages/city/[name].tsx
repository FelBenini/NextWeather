import React from 'react'
import { useRouter } from 'next/router'
import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({subsets: ['latin'], weight: '300'})

const CityPage = () => {
    const router = useRouter()
    const { name } = router.query
  return (
    <div className={notoSans.className}>{name}</div>
  )
}

export default CityPage