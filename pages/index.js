import { Box, Button, Divider, Group, Kbd, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Head from 'next/head'
import { FaBitcoin } from 'react-icons/fa'
import ReactPlayer from 'react-player'
import Instructions from '../components/Instructions'
import OverviewVideo from '../components/OverviewVideo'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

export default function Home() {

  const isMobile = useMediaQuery('(max-width: 768px)')

  const buttonBox = {
    display: 'grid', 
    gridAutoFlow: isMobile ? 'row' : 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: isMobile ? 0 : '1rem',
  }


  return (
    <>
      <Head>
        <title>Convert Bit</title>
        <meta name="Convert Bit" content="Chrome Extension to convert any price to bitcoin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{minHeight: 'calc(100vh)'}}>
        <HeroSection />
        <OverviewVideo />
        <Instructions />
        <Footer />
      </Box>
    </>
  )
}
