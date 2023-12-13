import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buySubscription } from '../../redux/actions/user'
import toast from 'react-hot-toast'
import image from "../../assets/images/profile.jpg"

const Subscribe = ({user}) => {

  const dispatch = useDispatch() 
  const [key, setKey] = useState("")  
  const {loading,error,subscriptionId} = useSelector(state=>state.subscription) 
  const {error:coureError} = useSelector(state=>state.courses)

  const subscribeHandler= async(e)=>{
     const {data} =  await axios.get(`/api/v1/razorpaykey`) 
     setKey(data.key)
     dispatch(buySubscription())
  }

  useEffect(() => {
    if(error){
       toast.error(error)
       dispatch({type:'clearError'})
    }

    if(coureError){
      toast.error(coureError)
      dispatch({type:'clearError'})
   }



    if(subscriptionId){
       const openPopUp = ()=>{
          const options = {
              key,
              name:'Course Bundler',
              description:'Get access to all premium course',
              image,
              subscription_id:subscriptionId,
              callback_url:`api/v1/paymentverfication` ,
              prefill:{
                  name:user.name, 
                  email:user.email,
                  contact:"" 
              },

            notes:{
               address:'@Course Bundler '
            },
            theme:{
               color:'#008080'
            }  

          };
          const razor = new window.Razorpay(options) 
          razor.open();  
       }
       openPopUp()
    }

    
  }, [dispatch,error,user.name,user.email,key,subscriptionId,coureError])
  


  return (
    <Container h={'90vh'} p={'16'}  >
        <Heading children="Welcome"  my={8}  textAlign={"center"}/>
        <VStack boxShadow={"lg"}alignItems={'strech'} borderRadius={'lg'} spacing={0}>
            <Box p={3} style={{borderRadius:"8px 8px 0 0"}} color={'white'} bg={'teal'}>
               <Text  children={`Pro Pack - 39$`}  />
            </Box>
 
            <Box p={4}>
                <VStack textAlign={'center'}  px={8} mt={4} spacing={8}>
                     <Text color={'black'} children="Join Pro Pack and Get Access to all content"/>
                     <Heading size="md" children={"39$ only"}/>
                </VStack>
                <Button isLoading={loading} color={'white'} my={8} w={'full'} bg='teal' onClick={subscribeHandler} >Buy Now</Button>
            </Box>
            
            <Box bg="blackAlpha.800" style={{borderRadius:"0 0 8px 8px"}} p={4}>
               <Heading size="sm" children="100% refund at cancellation" color={'white'}/>
                <Text fontSize={"xs"} color={'whiteAlpha.600'} children="Terms and conditions apply"/>

            </Box>

        </VStack>

    </Container>
  )
}

export default Subscribe