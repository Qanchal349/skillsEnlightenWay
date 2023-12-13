import { Button, Container, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import notFound from "../../assets/images/notFound.png"
import { Link } from 'react-router-dom'
import { RiErrorWarningFill } from 'react-icons/ri'

const NotFound = () => {
  return (
     <Container  h={'90vh'} p={'16'}>
        
         <Heading justifyContent={'space-around'} color={'teal'} display={'flex'} py={6} textAlign={'center'}>Not Found  <RiErrorWarningFill/> </Heading>
         <Image src={notFound} ></Image>
         <Link to="/"><Button my={5} variant={'link'} color={'teal'} textAlign={'center'}>Go to Home</Button></Link>
     </Container>
  )
}

export default NotFound