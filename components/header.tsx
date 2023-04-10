import React from 'react'
import Image from 'next/image'
import { Source_Sans_Pro } from 'next/font/google'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'

const source_sans_pro = Source_Sans_Pro({ subsets: ['latin'], weight: '600' })

const Header = () => {
    const router = useRouter()
    const [linkTo, setLinkTo] = useState('')
    function formHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (linkTo !== '') {
           router.push(`/city/${linkTo}`) 
        }
    }
    return (
        <header>
            <Link href='/'>
            <span>
                <Image src='/img/sun rain.png'
                    alt="Picture of the author"
                    width={60}
                    height={60} />
                <h1 className={source_sans_pro.className}>WeatherTracker</h1>
            </span>
            </Link>
            <form onSubmit={formHandler}>
                <input type='text' onChange={e => setLinkTo(e.target.value)} placeholder='Search for a city'/>
                <button type='submit'>{<FiSearch size={22}/>}</button>
            </form>
        </header>
    )
}

export default Header