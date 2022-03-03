import { Text, Divider } from "@mantine/core"

const RowHeader = ({title}) => {
  return (
    <>
    <Text 
        align='left' 
        mt='lg'
        mb='xs'
        weight={700}
    >
        {title}
    </Text>
    <Divider mb='md' />
    </>
  )
}

export default RowHeader