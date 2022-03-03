import { Button, Box } from "@mantine/core"
import { useRouter } from "next/router"

const BackButton = () => {

    const router = useRouter()

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                justifyItems: 'start',
                padding: '1rem 0'
            }}
        >
            <Button 
                size='xs'
                variant='subtle' 
                onClick={() => router.back()}
            >
                Go Back
            </Button>
        </Box>
    )
}

export default BackButton