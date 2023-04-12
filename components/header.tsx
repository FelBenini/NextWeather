import React from 'react'
import Image from 'next/image'
import { Source_Sans_Pro } from 'next/font/google'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import { Button, TextField } from '@mui/material'

const source_sans_pro = Source_Sans_Pro({ subsets: ['latin'], weight: '600' })

const Header = () => {
    const router = useRouter()
    const [linkTo, setLinkTo] = useState('')
    function formHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (linkTo !== '') {
           router.push(`/city/${linkTo}`) 
        }
        setLinkTo('')
    }
    return (
        <header>
            <Link href='/'>
            <span className='container'>
                <Image src='/img/sun rain.png'
                    alt="Picture of the author"
                    width={64}
                    height={61} />
                <h1 className={source_sans_pro.className}>WeatherTracker</h1>
            </span>
            </Link>
            <form onSubmit={formHandler}>
                <TextField sx={{height: '40px'}} type='text' value={linkTo} onChange={e => setLinkTo(e.target.value)} label='Search for a city'/>
                <Button variant='contained' sx={{height: '56px', marginLeft: '4px', minWidth: '44px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '6px'}} type='submit'>{<FiSearch size={22}/>}</Button>
            </form>
        </header>
    )
}

export default Header