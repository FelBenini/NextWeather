import { Source_Sans_Pro } from 'next/font/google'
import LinearProgress from '@mui/material/LinearProgress';
import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({subsets: ['latin'], weight: '300'})
const sourceSansPro = Source_Sans_Pro({subsets: ['latin'], weight: '600'})

const LoadingArea = () => {
    return (
        <div className={`loadingContainer ${sourceSansPro.className}`}>
            <h3>Fetching Data</h3>
            <LinearProgress sx={{width: '260px', borderRadius: '4px'}}/>
            <p className={notoSans.className}>Sit tight for a second</p>
        </div>
    )
}

export default LoadingArea