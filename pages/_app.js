import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { useState } from 'react'
import BackgroundWapper from '../components/BackgroundWrapper'
import '../styles/responsive-player.css'


function MyApp({ Component, pageProps }) {


  const [colorScheme, setColorScheme] = useState('dark')
  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  }


  return (
    <ColorSchemeProvider 
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{colorScheme}}
    >
      <BackgroundWapper>
        <Component {...pageProps} />
      </BackgroundWapper>
    </MantineProvider>
    </ColorSchemeProvider>

  )
}

export default MyApp
