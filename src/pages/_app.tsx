import { Global } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { TotalContext, TotalProvider } from 'context/total-context'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC, useEffect } from 'react'
import { globalStyles } from '../styles/global.styles'
import theme from '../styles/theme'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Telzir call cost simulator</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <CssBaseline />
        <TotalProvider>
          <Component {...pageProps} />
        </TotalProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
