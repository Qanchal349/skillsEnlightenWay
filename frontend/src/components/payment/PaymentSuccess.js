import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link ,useParams, useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {

  const reference = useSearchParams()[0].get('reference'); 
  

  return (
    <Container h={'90vh'} padding={16}>
            <Heading size={'md'} my={'8'} textAlign={'center'}>You have Pro Pack</Heading>
            <VStack boxShadow={'lg'} pb={'16'} alignItems={"center"} borderRadius={'lg'}>
                   <Box w={'full'} bg={"teal.500"} p={4} style={{borderRadius:"8px 8px 0 0"}} textAlign={'center'}> 
                       <Text color={"white"}>Payment Success</Text>
                   </Box>
                   <Box p={4}>
                     <VStack textAlign={'center'} px={'8'} mt={4} spacing={8}>
                          <Text color={'teal'}>Congratulation you're a pro member . You have access to premium content.</Text>
                          <Heading size={'xl'} color={'teal'} ><RiCheckboxCircleFill/></Heading>
                         
                     </VStack>
                   </Box> 
                   <Link to="/profile"><Button variant={'link'} color={'teal.400'}>Go to Profile</Button></Link>
                   <Heading color={'blackAlpha.500'} size={'xs'}>References: {reference}</Heading>
            </VStack>

    </Container>
  )
}

export default PaymentSuccess