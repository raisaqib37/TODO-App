import { HStack, Heading, Stack } from "@chakra-ui/react"

const TopNav = () => {
  return (
    <Stack>
    <HStack h={"10%"} bg={"gold"} justifyContent={"center"}>
        <Heading> Todo App</Heading>
    </HStack>
    </Stack>
  )
}

export default TopNav