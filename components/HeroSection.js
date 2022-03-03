import { Box, Text, Button } from "@mantine/core"
import Link from "next/link"

const HeroSection = () => {

    const wrapper = {
        display: 'grid',
            gridAutoFlow: 'row',
            gap: '0',
            justifyContent: 'center',
            justifyItems: 'center',
            padding: '2rem 0',
            lineHeight: 'auto'
    }


  return (
    <Box
          sx={wrapper}
        >
              <Text transform='uppercase'>
                Free Chrome Extension
              </Text>
              <Text sx={{fontSize: '4rem'}} weight={700}>
                ConvertBit
              </Text>
              <Text size='xl' weight={500}
              >
                Any price, any webpage. <br/>Just click to convert to bitcoin.
              </Text>
              <Button 
                color='orange' 
                mt='xl' 
                radius='xl'
                size='lg'
              >
                Coming Soon to Chrome Store
              </Button>
              <Link href='/early-access' passHref>
                <Button variant='subtle' color='gray' mt='xs'>
                    Install Developer Version Now
                </Button>
              </Link>
        </Box>
  )
}

export default HeroSection