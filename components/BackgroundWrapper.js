import { Box, Container } from "@mantine/core"

const BackgroundWapper = ({children}) => {


    const wrapper = {
        minHeight: '100vh',
        padding: '2rem', 
        background: '-webkit-linear-gradient(to bottom, #000000, #434343)',
        background: 'linear-gradient(to bottom, #000000, #434343)'
      }

    return (
        <Box 
            sx={wrapper}
        >
            <Container align='center' size='lg'>
                {children}
            </Container>
        </Box>
    )
}

export default BackgroundWapper