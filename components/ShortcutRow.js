import { Box, Kbd } from '@mantine/core'
import React from 'react'

const ShortcutRow = ({shortcut, label}) => {

const wrapper = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    paddingBottom: '.5rem'
}

const sCol = {
    justifySelf: 'start'
}

const lCol = {
    justifySelf: 'end'
}


  return (
    <Box sx={wrapper}>
        <Box sx={sCol}>
            <Kbd>{shortcut}</Kbd> + <Kbd>Click</Kbd>
        </Box>
        <Box sx={lCol}>
            {label}
        </Box>
    </Box>
  )
}

export default ShortcutRow