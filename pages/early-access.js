import { Button, Divider, Text } from "@mantine/core"
import BackgroundWapper from "../components/BackgroundWrapper"
import { AiFillFileZip } from 'react-icons'
import ResponsiveVideo from "../components/ResponsiveVideo"
import BackButton from '../components/BackButton'

const earlyaccess = () => {

    return (

        <BackgroundWapper>
            <Text size='xl' weight={700}>
                Install early devleoper Version
            </Text>
            <Text
                mt='sm'
            >
                The extension should be available in the Chrome extension store soon, however if you would like to use the extension right away, you can upload the developer version. The video below will show you how.
            </Text>
            <Button
                mt='lg'
                size='sm'
                component='a' 
                href='https://firebasestorage.googleapis.com/v0/b/petevs-23d15.appspot.com/o/build.zip?alt=media&token=8f7fbd50-3f58-429d-aa15-29edd68896eb'
                
            >
                Download Extension File
            </Button>
            <Divider mb='xl' mt='xl' />
            <ResponsiveVideo url='https://www.youtube.com/watch?v=u6PUXPDe28A' />
            <BackButton />
        </BackgroundWapper>
    )
}

export default earlyaccess