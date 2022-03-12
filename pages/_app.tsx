import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { CssBaseline } from '@material-ui/core'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no, shrink-to-fit=no" />
      </Head>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
