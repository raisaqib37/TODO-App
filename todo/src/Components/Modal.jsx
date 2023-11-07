import { Button, Input, Stack } from '@chakra-ui/react'
import './modal.css';


const Modal = () => {
  return (
    <Stack className='change' mx={"6"} borderRadius={"lg"} p={"3"} height={"20vh"} >
<Input fontSize={"18px"} type='"text' fontWeight={"semibold"} color={"black"} placeholder='Edit Work' />
<Button colorScheme='yellow' fontSize={"xl"}>Done</Button>
    </Stack>
  )
}

export default Modal