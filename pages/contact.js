import BackgroundWapper from "../components/BackgroundWrapper"
import { Text, Box } from "@mantine/core"
import BackButton from "../components/BackButton"

const contact = () => {

    return (
        <BackgroundWapper>
            <Box sx={{'& a': {color: 'inherit'}}}>
                <Text size='xl' weight={700}>
                    Contact
                </Text>
                <Text
                    mt='sm'
                >
                    This extension was built by <a href='https://petevs.com'>PeteVS.com</a>, any questions or concerns please reach out to <a href='mailto:hey@petevs.com?subject=Inquiry from the ConvertBit'>hey@petevs.com</a>
                </Text>
            </Box>
            <BackButton />
        </BackgroundWapper>
    )
}

export default contact