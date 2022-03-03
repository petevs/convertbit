import { Box } from "@mantine/core"
import ReactPlayer from "react-player"

const OverviewVideo = () => {
  return (
    <Box className='player-wrapper'>
    <ReactPlayer
      className='react-player'
      url='https://www.youtube.com/watch?v=N8IUHnL6FPQ'
      width='100%'
      height='100%'
    />
  </Box>
  )
}

export default OverviewVideo