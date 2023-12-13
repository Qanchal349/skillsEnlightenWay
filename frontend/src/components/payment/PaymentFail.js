import { Button, Container, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { RiErrorWarningFill } from 'react-icons/ri'

const PaymentFail = () => {
  return (
     <Container  h={'90vh'} p={'16'} textAlign={'center'}>
        
         <Heading justifyContent={'space-around'} color={'teal'} display={'flex'} py={6} textAlign={'center'}>Payment Fail<RiErrorWarningFill/> </Heading>
         <Link to="/subscribe"><Button my={5} variant={'link'} color={'teal'} textAlign={'center'}>Try again </Button></Link>
     </Container>
  )
}


export default PaymentFail