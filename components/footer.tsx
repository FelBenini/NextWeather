import React from 'react'
import { Source_Sans_Pro } from 'next/font/google'
import { IconButton } from '@mui/material'

const source_sans_pro = Source_Sans_Pro({ subsets: ['latin'], weight: '600' })

const Footer = () => {
    return (
        <footer>
            <h3 className={source_sans_pro.className}>Made by Felipe Benini</h3>
            <a href='https://github.com/FelBenini/NextWeather' target='blank'>
                <IconButton>
                    <img src='/img/github-icon.svg' alt='Github Icon' />
                </IconButton>
            </a>
        </footer>
    )
}

export default Footer