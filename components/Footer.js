import { Group, Text } from '@mantine/core'
import Link from 'next/link'

const Footer = () => {
  return (
    
    <Group position='center' sx={{marginTop: '10rem'}}>
        <Link href='/privacy' passHref>
            <Text component='a'>Privacy</Text>
        </Link>
        <Link href='/terms' passHref>
            <Text component='a'>Terms</Text>
        </Link>
        <Link href='/contact' passHref>
            <Text component='a'>Contact</Text>
        </Link>
    </Group>
  )
}

export default Footer