import { Box } from "@mantine/core"
import ReactPlayer from "react-player"

const ResponsiveVideo = ({url}) => {
  return (
    <Box className='player-wrapper'>
    <ReactPlayer
      className='react-player'
      url={url}
      width='100%'
      height='100%'
    />
  </Box>
  )
}

export default ResponsiveVideo