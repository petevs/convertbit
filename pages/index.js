import { Box, Button, Divider, Group, Kbd, Paper, Text } from '@mantine/core'
import Head from 'next/head'
import { FaBitcoin } from 'react-icons/fa'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Convert Bit</title>
        <meta name="Convert Bit" content="Chrome Extension to convert any price to bitcoin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Divider mt='lg' />
        <Box sx={{display: 'grid', gridAutoFlow: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
           <Text weight={500} m='md' size='sm'> <Kbd>B</Kbd> + <Kbd>Click</Kbd> = Bitcoin</Text>
           <Text weight={500} size='sm' m='md'> <Kbd>S</Kbd> + <Kbd>Click</Kbd> = Sats</Text>
           <Text weight={500} size='sm'> <Kbd>D</Kbd> + <Kbd>Click</Kbd> = Tweet Date to Bitcoin Price</Text>
        </Box>
        <Divider />


        <Box
          sx={{
            display: 'grid',
            minHeight: 'calc(100vh - 300px)',
            alignContent: 'start',
            paddingTop: '5rem',
            gridTemplateColumns: '1fr 1fr',
            '@media (max-width: 768px)': {
              gridTemplateColumns: '1fr'
            }
          }}
        >
            <Box sx={{display: 'grid', justifyItems: 'start', alignContent: 'start'}}
            >
              <Text transform='uppercase' align='left'>Free Chrome Extension</Text>
              <Text sx={{fontSize: '4rem'}} weight={700} align='left'>ConvertBit</Text>
              <Text size='xl' weight={500} align='left'>
                Any price, any webpage. Just click and convert.
              </Text>
              <Button color='orange' mt='xl' size='lg' radius='xl'>
                Add to Chrome
              </Button>
            </Box>
            <iframe
              src="https://www.loom.com/embed/3955f5bcd3c640f28db1b8aea351e4a6?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true" 
              width='100%'
              height='315px'
              frameBorder="0" 
              allowFullScreen
            />
        </Box>
    
      
    </div>
  )
}
