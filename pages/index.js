import { Box, Button, Divider, Group, Kbd, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Head from 'next/head'
import { FaBitcoin } from 'react-icons/fa'
import ReactPlayer from 'react-player'
import Instructions from '../components/Instructions'
import RowHeader from '../components/RowHeader'
import ShortcutRow from '../components/ShortcutRow'

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
    <div>
      <Head>
        <title>Convert Bit</title>
        <meta name="Convert Bit" content="Chrome Extension to convert any price to bitcoin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* {
        !isMobile &&
        <>
          <Divider mt='lg' />
            <Box sx={buttonBox}>
              <Text weight={500} m='md' size='sm'> <Kbd>B</Kbd> + <Kbd>Click</Kbd> = Bitcoin</Text>
              <Text weight={500} size='sm' m='md'> <Kbd>S</Kbd> + <Kbd>Click</Kbd> = Sats</Text>
              <Text weight={500} size='sm'> <Kbd>D</Kbd> + <Kbd>Click</Kbd> = Tweet Date to Bitcoin Price</Text>
            </Box>
            <Divider />
        </>
      } */}


        <Box
          sx={{
            display: 'grid',
            minHeight: 'calc(100vh - 200px)',
            alignContent: 'start',
            paddingTop: '5rem',
            gridTemplateColumns: '1fr 1fr',
            '@media (max-width: 768px)': {
              gridTemplateColumns: '1fr'
            }
          }}
        >
            <Box sx={{display: 'grid', justifyItems: 'start', alignContent: 'start', paddingBottom: '3rem'}}
            >
              <Text transform='uppercase' align='left'>Free Chrome Extension</Text>
              <Text sx={{fontSize: '4rem'}} weight={700}>ConvertBit</Text>
              <Text size={isMobile ? 'lg' : 'xl'} weight={500}>
                Any price, any webpage. Just click and convert.
              </Text>
              <Button color='orange' mt='xl' size='lg' radius='xl'>
                Coming Soon to Chrome
              </Button>
            </Box>
            <Box className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=N8IUHnL6FPQ'
                width='100%'
                height='100%'
              />
            </Box>
            <Box>
            <Instructions />
            </Box>
        </Box>
    
        <Group position='center'>
          <Text>Privacy</Text>
          <Text>Terms</Text>
          <Text>Contact</Text>
        </Group>
    </div>
  )
}
