import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '@/components/header'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CityProvider } from '@/components/userCity';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4589ce',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CityProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </CityProvider>
    </>
  )
}
